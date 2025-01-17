import Clock from "@/components/clock";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-lg">
      <main className="flex flex-col gap-3">
        <div>
          <Clock />
          <h1 className="text-2xl font-bold">Hello, I&apos;am <span className="text-brand">Henrique Artur</span> 👋</h1>
          {/* database: https://filess.io/ */}
          <p>I create <u>great experiences</u> by building <u>better software</u>.</p>
        </div>
        <div>
          <p className="text-brand-text-2 text-base">You are the <u>[position]th</u> awesome person 🤩 to visit my site.</p>
        </div>
      </main>
      <Footer />
    </div >
  );
}
