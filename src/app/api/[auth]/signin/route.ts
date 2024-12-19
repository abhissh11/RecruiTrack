import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateJWTToken } from "@/lib/jwt";

export const config = {
    runtime: "edge", // Edge runtime for compatibility
};

// // Ensure API key is defined at runtime
// const VALID_API_KEY = process.env.API_KEY;
// if (!VALID_API_KEY) {
//     throw new Error("API_KEY is not set in the environment variables.");
// }

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // // Validate API Key
        // if (!body.apiKey || body.apiKey ) {
        //     return NextResponse.json(
        //         { message: "Invalid API Key!" },
        //         { status: 403 }
        //     );
        // }


        // Validate email and password input
        if (!body.email || !body.password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Connect to the database
        const { db } = await connectToDatabase();

        // Find user by email
        const user = await db.collection("users").findOne({ email: body.email });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Compare the provided password with the hashed password in the database
        const isValidPassword = await bcrypt.compare(body.password, user.password);

        if (!isValidPassword) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Generate JWT token for the authenticated user
        const token = await generateJWTToken(user._id.toString());

        // Send the token in an HTTP-only secure cookie
        const response = NextResponse.json(
            { message: "Signed in successfully", token },
            { status: 200 }
        );

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "strict",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } catch (error) {
        console.error("Error during sign-in:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}