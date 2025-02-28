import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "@/assets/zahidaziz.jpg";
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

export default function CardWithForm({
  image,
  name,
  designation,
  qualification,
  role,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="w-full transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[2px_4px_12px_0px_rgba(0,_0,_0,_0.5)]">
        <CardHeader>
          <CardTitle>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={name}
                width={260}
                height={180}
                className="w-full h-[180px] rounded-lg object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </CardTitle>
        </CardHeader>

        <CardFooter className="flex flex-col space-y-1 py-3">
          <h1 className="text-base font-semibold">{name}</h1>
          <p className="text-sm text-gray-600">{designation}</p>
          <p className="text-sm text-gray-600">{qualification}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function App() {
  return (
    <div className="w-full px-4 py-8 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
    </div>
  );
}
