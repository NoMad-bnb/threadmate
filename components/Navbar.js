export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/20 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-[var(--accent)]" />
          <span className="font-semibold">ThreadMate</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <a href="#" className="hover:text-white">Dashboard</a>
          <a href="#" className="hover:text-white">Editor</a>
          <a href="#" className="hover:text-white">Schedule</a>
          <a href="#" className="hover:text-white">Analytics</a>
          <a href="#" className="hover:text-white">Account</a>
        </div>
      </nav>
    </header>
  );
}
