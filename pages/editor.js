import Navbar from "../components/Navbar";
import { useState } from "react";
import { BACKEND_URL } from "../lib/config";

export default function Editor() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch(`${BACKEND_URL}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text })
      });
      const data = await res.json();
      setResult(data.result || "No result");
    } catch {
      setResult("Request failed");
    } finally {
      setLoading(false);
    }
  }

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
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="mt-4 flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate with AI"}
          </button>
          <button className="rounded-md border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/5">
            Save Draft
          </button>
        </div>

        {result && (
          <div className="mt-6 rounded-lg border border-white/10 p-4">
            <h3 className="font-semibold mb-2">Result</h3>
            <pre className="whitespace-pre-wrap text-sm text-[var(--muted)]">
              {result}
            </pre>
          </div>
        )}
      </main>
    </>
  );
}
