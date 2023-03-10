import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Jumbotron } from "@/components/Jumbotron";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
export default function Home() {
  const cards = [
    {
      title: "Binky McSprinkles",
      bio: "Binky is a professional bubble wrap popper and unicorn whisperer. In his free time, he enjoy playing hopscotch with chickens.",
      imageURL:
        "https://media.istockphoto.com/id/139975548/photo/sam.jpg?s=612x612&w=0&k=20&c=iFd7w-yqN5pkU_fAFImKTM6TJb9uRbHPKD1LQr8aO_A=",
    },
    {
      title: "Chuckles von Schnitzel",
      bio: "Chuckles is a world-renowned cheese sculptor and pogo stick enthusiast. He once broke the world record for most consecutive cartwheels.",
      imageURL:
        "https://i.insider.com/58d93bb6d349f92a008b734a?width=1000&format=jpeg&auto=webp",
    },
    {
      title: "Flapjack McFluffernutter",
      bio: "Flapjack is a part-time pirate and full-time pancake artist. He can juggle six flaming marshmallows without batting an eyelash, mostly because he lost his eyelashes in a firely marshmallow incident.",
      imageURL:
        "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/27/1417095087495/bc71d79d-67bc-48a5-9d0f-834f43de6f98-1694x2040.jpeg?width=300&quality=45&auto=format&fit=max&dpr=2&s=b54ae0638a9a24874f3b551954efd71f",
    },
    {
      title: "Noodles von Wigglesworth",
      bio: "Noodles is a professional mermaid and ice cream taster. She once swam across the Atlantic Ocean while juggling pineapples.",
      imageURL:
        "https://1.bp.blogspot.com/-h-t1UYRXmts/XhfyGaC9FqI/AAAAAAACNSk/YmDw52WeWGE_5CDltqc8gG4YcYXzPSYhQCLcBGAsYHQ/s1600/1900s-female-bathing-suits-4.jpg",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <Jumbotron />
      <div className=" flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            bio={card.bio}
            imageURL={card.imageURL}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
