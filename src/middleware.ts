import { NextRequest, NextResponse } from "next/server";
import { verifyJWTToken } from "./lib/jwt";

export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin");
    const ALLOWED_ORIGINS = ["http://localhost:3000", "https://recruitrack.vercel.app/"]; // List of allowed origins

    // Handle CORS
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json(
            { error: "CORS policy error: Origin not allowed" },
            { status: 403 }
        );
    }

    // Handle preflight requests
    if (request.method === "OPTIONS") {
        const response = new NextResponse(null, { status: 204 });
        response.headers.set("Access-Control-Allow-Origin", origin || "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.headers.set("Access-Control-Max-Age", "86400");
        return response;
    }

    // Set CORS headers for other requests
    const response = NextResponse.next();
    if (origin) {
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set("Access-Control-Allow-Credentials", "true");
    }

    // Authentication handling
    const token = request.cookies.get("token")?.value;
    const protectedRoutes = ["/track-applications"];
    const pathName = request.nextUrl.pathname;

    // If accessing protected routes
    if (protectedRoutes.some((route) => pathName.startsWith(route))) {
        if (!token) {
            console.log("No token found. Redirecting to signin.");
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }

        try {
            const decodedToken = verifyJWTToken(token);

            if (!decodedToken) {
                console.log("Invalid token. Redirecting to signin.");
                return NextResponse.redirect(new URL("/auth/signin", request.url));
            }
        } catch (error) {
            console.error("JWT verification error:", error);
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }
    }

    // If authenticated user tries to access /auth/signin
    if (pathName === "/auth/signin" && token) {
        console.log("User already authenticated. Redirecting to dashboard.");
        return NextResponse.redirect(new URL("/track-applications", request.url));
    }

    return response;
}
