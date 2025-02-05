import Clock from "@/components/clock";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans text-lg">
        <main className="flex flex-col gap-3">
          <div>
            <Clock />
            <h1 className="text-2xl font-bold">Hello, I&apos;am <span className="text-brand">Henrique Artur</span> 👋</h1>
            {/* database: https://filess.io/ */}
            <p>I'm a Tech Lead, shaping software, quality, and experience.</p>
            <p>I work at the intersection of software, quality, and experience—engineering solutions that elevate both products and people, currently at Sunne.</p>
          </div>
          <div>
            <p className="text-brand-text-2 text-base">You are the <u>[position]th</u> awesome person 🤩 to visit my site.</p>
          </div>
        </main >
      </div >
      <Footer />
    </>
  );
}
