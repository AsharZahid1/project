"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Trophy, CheckCircle2, Target, Lightbulb, GraduationCap, BookOpen, Users, School } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { CircularDecoration } from "@/components/CircularDecoration"

// Counter animation component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Banner */}
      <div className="relative h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about/hero-banner.jpg"
            // src="/journey1.jpg"
            alt="Education Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004b87]/90 to-[#004b87]/80" />
          <CircularDecoration />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Text Content */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-2xl relative z-10"
            >
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
              >
                About Al-Aziz
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Nurturing Minds, Shaping Futures, Building Tomorrow's Leaders
              </motion.p>
            </motion.div>

            {/* Icons */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:grid grid-cols-2 gap-4 relative z-10"
            >
              {[
                { icon: GraduationCap, delay: 0.2 },
                { icon: BookOpen, delay: 0.3 },
                { icon: Users, delay: 0.4 },
                { icon: School, delay: 0.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay }}
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/10 to-black/0" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey to Success</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300"
            >
              <p>Al-Aziz Educational System has been providing quality education for the past 30 years. Over these years, thousands of students have successfully completed their education from this institution, and today, they are making valuable contributions in various fields of life.</p>
              
              <div className="grid grid-cols-2 gap-6 my-12">
                <div className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="text-4xl font-bold text-blue-500">
                    <AnimatedCounter end={30} />+
                  </h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="text-4xl font-bold text-green-500">
                    <AnimatedCounter end={250} />+
                  </h3>
                  <p>Staff Members</p>
                </div>
                <div className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="text-4xl font-bold text-purple-500">
                    <AnimatedCounter end={10} />+
                  </h3>
                  <p>Campuses</p>
                </div>
                <div className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm">
                  <h3 className="text-4xl font-bold text-yellow-500">
                    <AnimatedCounter end={3000} />+
                  </h3>
                  <p>Students</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/journey${i}.jpg`}
                    alt={`Journey ${i}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-6">Why Choose Al-Aziz</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-blue-500" />
                <h2 className="text-3xl font-bold">Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to provide a quality educational system that ensures concept-oriented learning, 
                character building, and modern teaching methodologies. With a safe and nurturing environment, 
                we aim to develop responsibility, self-confidence, and discipline in students, enabling them 
                to excel in their academic and personal lives.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                <h2 className="text-3xl font-bold">Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to create a dynamic and future-ready educational system that integrates 
                modern learning techniques, technology, and a structured curriculum. We aspire to nurture 
                young minds with a strong foundation in academics, character, and ethical values while 
                celebrating cultural, national, and religious events to promote a well-rounded personality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  "Centrally Administered Quality Assurance",
  "Dynamic Visionary Leadership",
  "Special Focus On Character Building",
  "Montessori Equipped Class Rooms",
  "Reasonable Fee Structure",
  "Outstanding Board Results",
  "Standardized Cambridge Series curriculum",
  "Special Islamic Course (Zad-e-Momin)",
  "Load Shedding Free Campuses",
  "Concept Oriented Methodology",
  "Multi Media Availability",
  "Special Arrangement For Teacher's On Job Training",
  "Safe and Nurturing Environment",
  "Celebration of Cultural, National & Religious Events",
  "Complete online coordination system & Student Portal",
  "Inter Campus Curricular & Co-Curricular Competitions"
] 