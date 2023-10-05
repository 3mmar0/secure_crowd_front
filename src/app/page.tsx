import Clients from "@/components/home/Clients";
import PreTesting from "@/components/home/PreTesting";
import Testing from "@/components/home/Testing";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="z-10 flex-1 flex gap-5 blur__effect flex-col h-full">
      <Welcome />
      <Clients />
      <Testing />
      <PreTesting />
    </main>
  );
}
