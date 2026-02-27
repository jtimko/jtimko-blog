export default function ContactPage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold text-[#1a1a1a] mb-6">Contact</h1>
      <div className="prose prose-neutral max-w-none text-[#444]">
        <p>
          The best way to reach me is via email. Drop a line if you&apos;d like
          to connect or collaborate.
        </p>
        <p>
          <a
            href="mailto:hello@example.com"
            className="text-[#2EA7F2] hover:underline font-medium"
          >
            hello@example.com
          </a>
        </p>
        <p className="text-sm text-[#666] mt-8">
          Replace <code className="bg-[#e8e4dc] px-1 rounded">hello@example.com</code> with
          your actual email in <code className="bg-[#e8e4dc] px-1 rounded">app/contact/page.tsx</code>.
        </p>
      </div>
    </main>
  );
}
