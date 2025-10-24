import Navbar from "../components/Navbar";

export default function Account() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Account</h1>
        <p className="text-[var(--muted)] mb-6">
          Manage your profile, integrations, and preferences here.
        </p>

        <div className="rounded-lg border border-white/10 p-4 mb-4">
          <h3 className="font-semibold mb-2">Profile Information</h3>
          <p className="text-sm text-[var(--muted)]">Username: ray</p>
          <p className="text-sm text-[var(--muted)]">Email: example@email.com</p>
        </div>

        <div className="rounded-lg border border-white/10 p-4 mb-4">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <button className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Connect Twitter
          </button>
        </div>

        <div className="rounded-lg border border-white/10 p-4">
          <h3 className="font-semibold mb-2">Preferences</h3>
          <button className="rounded-md border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/5">
            Dark Mode: On
          </button>
        </div>
      </main>
    </>
  );
}
