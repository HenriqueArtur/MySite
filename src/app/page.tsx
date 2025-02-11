import Clock from "@/components/clock";
import Footer from "@/components/footer";
import { Navigator } from "@/components/Navigator";
import { Wrapper } from "@/components/Wrapper";

export default function Home() {
  return (
    <>
      <Navigator />
      <Wrapper>
        <main className="py-2 grid grid-cols-5">
          <div className="flex flex-col gap-2 col-span-3">
            <div>
              <Clock />
              <h1 className="text-2xl font-bold">Hello, I&apos;am <span className="text-brand">Henrique Artur</span> 👋</h1>
            </div>
            <p>I'm a Tech Lead, shaping software, quality, and experience.</p>
            <p>I work at the intersection of software, quality, and experience—engineering solutions that elevate both products and people.</p>
          </div>
        </main >
      </Wrapper>
      <Footer />
    </>
  );
}
