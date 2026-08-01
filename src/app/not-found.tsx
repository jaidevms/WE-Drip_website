import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-off-white px-6 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-brand-yellow">404</p>
        <h1 className="mt-3 text-5xl font-bold uppercase tracking-tight-display">Page not found.</h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-[4px] bg-brand-black px-6 py-4 text-sm font-bold uppercase tracking-wide text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
