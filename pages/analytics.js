import Navbar from "../components/Navbar";

export default function Analytics() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Analytics</h1>
        <p className="text-[var(--muted)] mb-6">
          Track engagement and performance of your published threads.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 p-4">
            <h3 className="font-semibold mb-1">Total Threads</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <h3 className="font-semibold mb-1">Average Engagement</h3>
            <p className="text-2xl font-bold">0%</p>
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <h3 className="font-semibold mb-1">Best Performing Thread</h3>
            <p className="text-sm text-[var(--muted)]">No data yet</p>
          </div>
        </div>
      </main>
    </>
  );
}
