import Navbar from "../components/Navbar";

export default function Editor() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Thread Editor</h1>
        <p className="text-[var(--muted)] mb-6">
          Draft and enhance your Web3 threads with AI assistance here.
        </p>

        <textarea
          placeholder="Write your idea or thread..."
          className="w-full h-48 p-3 rounded-md bg-black/20 border border-white/10 text-white resize-none outline-none"
        ></textarea>

        <div className="mt-4 flex gap-3">
          <button className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Generate with AI
          </button>
          <button className="rounded-md border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/5">
            Save Draft
          </button>
        </div>
      </main>
    </>
  );
}
