import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-[150px] font-bold text-zinc-900 leading-none tracking-tighter select-none">
        404
      </h1>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h2 className="text-2xl font-medium text-zinc-100 mb-2">
          Page not found
        </h2>
        <p className="text-zinc-500 mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-zinc-100 text-black rounded-full text-sm font-medium hover:bg-zinc-300 transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
