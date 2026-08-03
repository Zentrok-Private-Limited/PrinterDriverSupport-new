"use client";

export default function HPPage() {
  return (
    <main className="w-full min-h-screen">
      <iframe
        src="https://vector-driver.vercel.app/Setup"
        title="HP Driver Setup"
        className="w-full min-h-screen border-0"
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}