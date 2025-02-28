"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect } from "react";

// Counter component for animated numbers
function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Vision() {
  const stats = [
    { number: 30, label: "Years of Excellence", prefix: "+" },
    { number: 10, label: "Campuses", prefix: "+" },
    { number: 250, label: "Faculty Members", prefix: "+" },
    { number: 5000, label: "Students", prefix: "+" },
  ];

  return (
    <div className="px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
      <div className="relative overflow-hidden bg-[#003366] lg:rounded-[4rem] md:rounded-[20%] sm:rounded-3xl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-black/90 lg:rounded-[3rem] md:rounded-[20%] sm:rounded-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative pl-8">
                {/* Vertical Line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-[3px] bg-white absolute left-0 top-0 h-full"
                  viewport={{ once: true }}
                />

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Roboto_Condensed'] leading-tight">
                  Ready to Join the Future of Education?
                </h2>
                <p className="mt-6 text-lg text-white/80 font-['Open_Sans'] leading-relaxed">
                  Al-Aziz Education System envisions becoming a leading
                  institution that nurtures academic excellence, moral values,
                  and personal growth. We aim to create an environment where
                  students develop into well-rounded individuals equipped with
                  knowledge, skills, and character to succeed in life and
                  contribute positively to society. Our commitment to quality
                  education, innovative teaching methods, and holistic
                  development sets us apart as we prepare the next generation of
                  leaders.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-white text-[#003366] hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full"
                  >
                    <Link href="/admission">Apply Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-full"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <Counter from={0} to={stat.number} />
                    {stat.prefix}
                  </div>
                  <div className="text-sm md:text-base text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
