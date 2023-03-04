import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Jumbotron } from "@/components/Jumbotron";
import { Card } from "@/components/Card";
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Jumbotron />
      <Card />
      <h1 className="text-xl justify-end">Testing</h1>
    </div>
  );
}
