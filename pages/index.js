import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Build Web3 Threads that hit
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            Generate, refine, schedule, and analyze your X content in one place.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              New Thread
            </a>
            <a
              href="#"
              className="rounded-md border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/5"
            >
              View Dashboard
            </a>
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          <Feature title="AI Thread Generator" desc="From idea to polished thread in seconds." />
          <Feature title="Live Web3 Sources" desc="Pull official news and on-chain signals." />
          <Feature title="Smart Scheduling" desc="Post at peak times to maximize reach." />
        </section>
      </main>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-lg border border-white/10 p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{desc}</p>
    </div>
  );
}
