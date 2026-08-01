"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-off-white px-6 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-brand-yellow">Something went wrong</p>
        <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight-display">Please try again.</h1>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-[4px] bg-brand-black px-6 py-4 text-sm font-bold uppercase tracking-wide text-white"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
