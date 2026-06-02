import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold">Blog not found</h2>
      <Link href="/blogs" className="mt-2 inline-block underline">Browse blogs</Link>
    </div>
  );
}