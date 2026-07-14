export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-center">
        <p className="text-sm text-current/60 opacity-70">
          © {new Date().getFullYear()} Sk Tasrian Muntasir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
