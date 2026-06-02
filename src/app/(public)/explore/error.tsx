"use client";

export default function Error({ unstable_retry }: { error: Error; unstable_retry: () => void }) {
  return (
    <div className="p-8">
      <p>Could not load explore.</p>
      <button onClick={() => unstable_retry()} className="mt-2 underline">Try again</button>
    </div>
  );
}