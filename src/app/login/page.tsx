"use client"; // Important: This must be a Client Component

import Link from "next/link";
import { signIn } from "next-auth/react"; // Import signIn
import { useState } from "react";
import { Loader2 } from "lucide-react"; // Optional: for loading state

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      // This handles the redirect to Google and then back to /dashboard
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      // Note: We don't set loading false here because the page will redirect
      // Keeping it true prevents double-clicking
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black text-zinc-100 font-sans antialiased">
      {/* LEFT SIDE - The Interaction Layer */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Logo/Home Link */}
        <Link
          href="/"
          className="absolute top-10 left-8 sm:left-16 lg:left-24 text-xl font-bold tracking-tighter hover:text-zinc-300 transition-colors"
        >
          ThumbAI
        </Link>

        <div className="max-w-sm w-full mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium tracking-tight">
              Welcome back
            </h1>
            <p className="text-zinc-500 text-sm">
              Enter your studio to start generating.
            </p>
          </div>

          {/* THE HERO BUTTON: Wired to Google Sign In */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="group relative flex items-center justify-center w-full gap-3 py-3 px-4 bg-zinc-100 text-zinc-950 rounded-lg font-medium transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin text-zinc-600" />
            ) : (
              // Google Icon (Custom SVG for accuracy)
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            )}
            <span>{isLoading ? "Connecting..." : "Continue with Google"}</span>

            {/* Simple Border Overlay for depth */}
            <div className="absolute inset-0 rounded-lg border border-black/5" />
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-zinc-500">
                Or continue with email
              </span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-400 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 focus:border-zinc-700 transition-all"
              />
            </div>
            <button
              disabled
              className="w-full py-3 px-4 bg-zinc-800 text-zinc-500 rounded-lg text-sm font-medium cursor-not-allowed hover:bg-zinc-800/80"
            >
              Send Magic Link
            </button>
          </form>

          <p className="text-center text-xs text-zinc-600">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-zinc-400">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-zinc-400">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - The Visual Experience (Unchanged) */}
      <div className="hidden lg:flex relative bg-zinc-900 items-center justify-center overflow-hidden border-l border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        <div className="relative z-10 max-w-md text-center p-10">
          <div className="mb-8 relative inline-block">
            <div className="w-64 h-40 bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl flex items-center justify-center transform -rotate-6 transition-transform hover:rotate-0 duration-500">
              <span className="text-zinc-600 font-mono text-xs">
                Generating 4K...
              </span>
            </div>
            <div className="absolute top-12 -right-8 w-64 h-40 bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl flex items-center justify-center transform rotate-3 transition-transform hover:rotate-0 duration-500 -z-10">
              <div className="w-full h-full bg-zinc-800/50 rounded-lg animate-pulse" />
            </div>
          </div>

          <blockquote className="space-y-2">
            <p className="text-lg font-medium text-zinc-200">
              "This tool literally 10x'd my workflow. I don't start a video
              without it anymore."
            </p>
            <footer className="text-sm text-zinc-500">
              — Casey Neistat (Simulated Quote)
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
