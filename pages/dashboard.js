import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-[var(--muted)]">
          Here you'll see your recent threads, performance, and analytics summary.
        </p>
      </main>
    </>
  );
}
