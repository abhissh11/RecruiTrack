import { SignJWT, jwtVerify, errors } from "jose";

const isProduction = process.env.NODE_ENV === "production";
const JWT_SECRET = process.env.JWT_SECRET_KEY || (isProduction ? "" : "development_secret_12345");

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET_KEY is not defined. Set it in the environment variables.");
}

const secretKey = new TextEncoder().encode(JWT_SECRET);

interface TokenPayload {
    userId: string;
}

/**
 * Generate a JWT token
 * @param userId - User's unique identifier
 * @returns JWT token as a string
 */
export async function generateJWTToken(userId: string): Promise<string> {
    return new SignJWT({ userId })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h") // 1-hour expiration
        .sign(secretKey);
}

/**
 * Verify and decode a JWT
 * @param token - JWT token string
 * @returns Decoded payload if verification succeeds
 * @throws Error if verification fails
 */
export async function verifyJWTToken(token: string): Promise<TokenPayload> {
    try {
        const { payload } = await jwtVerify(token, secretKey);

        if (!payload.userId || typeof payload.userId !== "string") {
            throw new Error("Invalid token payload");
        }

        return { userId: payload.userId };
    } catch (error: unknown) {
        if (error instanceof errors.JWTExpired) {
            console.error("JWT verification error: Token expired", {
                token,
                expiredAt: error.payload.exp, // Log the expiration time
            });
            throw new Error("Token has expired. Please log in again.");
        }

        console.error("JWT verification error:", error);
        throw new Error("Token verification failed");
    }
}