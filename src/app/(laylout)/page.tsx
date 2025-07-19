import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="flex items-center gap-3 mb-4 text-indigo-600">
        <Sparkles className="w-6 h-6" />
        <h2 className="text-lg font-medium uppercase tracking-wide">Welcome</h2>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Lorem, Ipsum, Dolor
      </h1>

      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste aliquid modi voluptatum consectetur, accusantium laborum sit repudiandae amet, fugit maxime. Minima nihil aperiam quod?
      </p>

      <Link
        href="/product"
        className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition text-lg"
      >
        Start Exploring →
      </Link>
    </div>
  );
}
