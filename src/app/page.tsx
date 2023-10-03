import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 blur__effect flex-col ">
      <Welcome />
    </main>
  );
}
