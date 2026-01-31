import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Clean import

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
