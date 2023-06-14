import { Hero } from "@/components/Hero";
import { Header } from "@/components/Layout/Header";

export default function Home() {
  return (
    <main className="max-width padding-x py-4">
      <Header />
      <Hero />
    </main>
  );
}
