import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import image from "@/assets/zahidaziz.jpg"
interface CardProps {
    image: string;
    name: string;
    designation: string;
    qualification: string;
    role: string;
  }

  const cardData: CardProps[] = [
    {
      image: "/zahidaziz.jpg",
      name: "Prof. Abdul Aziz Haqqani",
      designation: "Chief Executive",
      qualification: "M.A., B.Ed.",
      role: "Rtd. Principal",
    },
    {
      image: "/atifaziz1.jpg",
      name: "Zahid Aziz Haqqani",
      designation: "Principal",
      qualification: "M. Phil Edu. MA Islamiat",
      role: "MA Arabic",
    },
    {
      image: "/zahidaziz.jpg",
      name: "Atif Aziz Haqqani",
      designation: "V.Principal",
      qualification: "MA English, MA Political Science",
      role: "B.E.D",
    },
    {
      image: "/atifaziz1.jpg",
      name: "Rahid Aziz Haqqani",
      designation: "Team Lead",
      qualification: "B.Tech, M.Tech",
      role: "Rtd. Engineer",
    },
  ];

  export default function CardWithForm({ image, name, designation, qualification, role }: CardProps) {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <Image src={image} alt={name} width={300} height={200} className="rounded-lg" />
          </CardTitle>
        </CardHeader>
        
        <CardFooter className="flex flex-col space-y-2">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-sm text-gray-600">{designation}</p>
          <p className="text-sm text-gray-600">{qualification}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </CardFooter>
      </Card>
    );
  }
  export function App() {
    return (
      <div className="flex flex-wrap justify-center items-center gap-x-4 mt-7">
        {cardData.map((card, index) => (
          <CardWithForm
            key={index}
            image={card.image}
            name={card.name}
            designation={card.designation}
            qualification={card.qualification}
            role={card.role}
          />
        ))}
      </div>
    );
  }


