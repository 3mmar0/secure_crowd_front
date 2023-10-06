import Certified from "@/components/home/Certified";
import Clients from "@/components/home/Clients";
import Comments from "@/components/home/Comments";
import Hall from "@/components/home/Hall";
import PreTesting from "@/components/home/PreTesting";
import Testing from "@/components/home/Testing";
import Welcome from "@/components/home/Welcome";
import Why from "@/components/home/Why";

export default function Home() {
  return (
    <main className="z-10 flex-1 flex gap-5 blur__effect flex-col h-full">
      <Welcome />
      <Clients />
      <Testing />
      <PreTesting />
      <Hall />
      <Certified />
      <Why />
      <Comments />
    </main>
  );
}
