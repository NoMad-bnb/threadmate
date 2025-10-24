import Navbar from "../components/Navbar";

export default function Schedule() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Schedule</h1>
        <p className="text-[var(--muted)] mb-6">
          Plan and manage your thread publishing times here.
        </p>

        <div className="rounded-lg border border-white/10 p-4 text-[var(--muted)]">
          <p>No threads scheduled yet.</p>
        </div>

        <div className="mt-4">
          <button className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Add New Schedule
          </button>
        </div>
      </main>
    </>
  );
}
