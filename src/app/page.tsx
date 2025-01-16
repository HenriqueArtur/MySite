export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-lg">
      <main className="flex flex-col gap-4">
        <div>
          <p>👋 Hello, I'am <span className="text-brand">Henrique Artur</span>!</p>
          {/* database: https://filess.io/ */}
          <p>I create <u>great experiences</u> by building <u>better software</u>.</p>
        </div>
        <div>
          <p className="text-brand-text-2 text-base">You are the <u>[position]th</u> awesome person 🤩 to visit my site.</p>
        </div>
        <div>
          <p>My 3 principles:</p>
          <ul className="text-brand-text-2 list-disc list-inside">
            <li>Simplicity</li>
            <li>Quality</li>
            <li>Experience</li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a className="text-brand-text-2 text-base hover:underline" target="_blank" href="https://github.com/HenriqueArtur/MySite">This site project</a>
      </footer>
    </div >
  );
}
