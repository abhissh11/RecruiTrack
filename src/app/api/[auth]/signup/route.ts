import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/lib/schema";

export async function POST(req: NextRequest) {
    try {
        const body: { email: string; password: string } = await req.json();

        // Validate Input
        if (!body.email || !body.password) {
            return NextResponse.json(
                { success: false, message: "Email and password are required" },
                { status: 400 }
            );
        }

        if (!/^\S+@\S+\.\S+$/.test(body.email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email format" },
                { status: 400 }
            );
        }

        if (body.password.length < 8) {
            return NextResponse.json(
                { success: false, message: "Password must be at least 8 characters long" },
                { status: 400 }
            );
        }

        // Connect to Database
        const { db } = await connectToDatabase();

        // Check for Existing User
        const existingUser = await db.collection<User>("users").findOne({ email: body.email });
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: "User already exists" },
                { status: 409 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // Create New User
        const newUser: Omit<User, "_id"> = {
            email: body.email,
            password: hashedPassword,
            createdAt: new Date(),
        };

        const result = await db.collection<User>("users").insertOne(newUser);

        // Return Success Response
        return NextResponse.json(
            {
                success: true,
                message: "User created successfully",
                userId: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error during signup:", error);
        return NextResponse.json(
            { success: false, message: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
