import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-4">Campus Not Found</h2>
      <p className="mb-8">Could not find the requested campus.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
} 