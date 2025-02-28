"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Award, BookOpen, Library, Building, GraduationCap, Trophy, Calculator, Circle } from "lucide-react"
import { CircularDecoration } from "@/components/CircularDecoration"

// Sample data - In a real app, this would come from a database
const events = [
  {
    id: "1",
    title: "Annual Sports Day 2024",
    date: "March 15, 2024",
    description: "Join us for an exciting day of sports and athletics competitions.",
  image: "/events/DSC_0099a.jpg"
  },
  {
    id: "2",
    title: "Annual result Day 2024",
    date: "jan 24, 2024",
    description: "Join us for an exciting day of sports and athletics competitions.",
  image: "/events/DSC_0125a.jpg"
  },
  // Add more events...
]

const activities = [
  {
    id: "assembly",
    title: "Assembly presentations",
    description: "Regular morning assemblies with student presentations",
    images: ["/events/DSC_0008a.jpg", "/events/DSC_0018a.jpg"]
  },
  {
    id: "debate",
    title: "Debate contests",
    description: "Inter-class and inter-college debate competitions",
    images: ["/events/DSC_0031a.jpg", "/events/DSC_0014a.jpg"]
  },
  // Add more activities...
]

function CircularFeature({ label, index, total }: { label: string; index: number; total: number }) {
  const angle = (index * (360 / total)) * (Math.PI / 180);
  const radius = 220; // Maintain proper spacing

  // Calculate label positions
  let x = Math.cos(angle) * radius;
  let y = Math.sin(angle) * radius;

  // Adjustments for top and bottom alignment
  let translateX = "-50%";
  let translateY = "-50%";

  if (angle === 0) translateY = "-100%"; // Top label
  if (angle === Math.PI) translateY = "0%"; // Bottom label

  return (
    <div 
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(${translateX}, ${translateY})`, // Keeps text centered correctly
      }}
    >
      {/* Label */}
      <div 
        className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 
                   transition-all duration-300 cursor-pointer min-w-[180px] text-center"
        style={{
          whiteSpace: 'nowrap',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p className="text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}



export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Banner */}
      <div className="relative h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/academics/hero-banner.jpg"
            alt="Academics Banner"
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
              className="max-w-2xl"
            >
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
              >
                Academics
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Excellence in Education, Leadership in Learning
              </motion.p>
            </motion.div>

            {/* Icons */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:grid grid-cols-2 gap-4"
            >
              {[
                { icon: GraduationCap, delay: 0.2 },
                { icon: BookOpen, delay: 0.3 },
                { icon: Trophy, delay: 0.4 },
                { icon: Calculator, delay: 0.5 },
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

      {/* Latest Events Section */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">Latest Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                {event.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-blue-400 mb-3">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Educational System Features */}
      <section className="py-24 px-4 relative overflow-hidden">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-16 justify-center">
            <Circle className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-center">Our Educational System</h2>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Outer circle */}
            <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-white/20" />
            
            {/* Central Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#004b87] to-blue-600 
                         flex items-center justify-center cursor-pointer z-20 border-4 border-white/20"
            >
              <div className="text-center p-4">
                <p className="font-bold text-sm leading-tight">
                  THE AL-AZIZ
                  <br />
                  EDUCATION
                  <br />
                  SYSTEM
                </p>
              </div>
            </motion.div>

            {/* Features */}
            {[
              "Islamic Course (Zad-e-Momin)",
              "Standardized National Curriculum",
              "Computer Basic Skills",
              "Co-Curricular Activities",
              "Character Development",
              "Academic Activity Calendar",
              "English Language Skills",
              "Self Confidence",
            ].map((label, index, array) => (
              <CircularFeature
                key={index}
                label={label}
                index={index}
                total={array.length}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Co-curricular Activities Section */}
      <section className="py-16 px-4 bg-white/5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold">Co-curricular Activities</h2>
          </div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-12"
          >
            Al-Aziz College believes in providing a balanced and holistic development of its students. 
            To achieve this, the college organizes a wide range of co-curricular activities throughout the academic year.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm group"
              >
                <div className="relative h-48">
                  <div className="grid grid-cols-2 h-full">
                    {activity.images.map((image, i) => (
                      <div key={i} className="relative h-full">
                        <Image
                          src={image}
                          alt={`${activity.title} ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <Building className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Our Facilities</h2>
          </div>

          {/* Labs Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  Science and Computer Labs
                </h3>
                <p className="text-gray-300">
                  The College offers various disciplines in pre-medical, pre-engineering, 
                  computer science, and general science, with highly qualified and experienced faculty. 
                  It has four well-furnished and well-equipped science and computer labs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-40 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`/lab/lab${i}.jpg`}
                      alt={`Lab ${i}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Library Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-40 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`/lab/library${i}.jpg`}
                      alt={`Library ${i}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Library className="w-6 h-6 text-yellow-500" />
                  Library
                </h3>
                <p className="text-gray-300">
                  "Reading maketh a man perfect," as Francis Bacon said. The college has a 
                  well-stocked library with more than 4000 books, along with other reference 
                  books and magazines, to inculcate a healthy reading habit.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Salient Features Section */}
      <section className="py-16 px-4 bg-white/5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Salient Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mt-12"
          >
            Our Past Was Wonderful, Our Future Is Bright
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}

const features = [
  "The first recognized and affiliated college in Taxila.",
  "Spacious building in the middle of the city comprising 50 rooms.",
  "Four separate fully equipped science and computer labs.",
  "A large auditorium with the facility of multimedia.",
  "Regular maintenance of progress reports on a monthly basis.",
  "Literary and co-curricular activities along with academics.",
  "Facility of indoor games and a well-stocked library.",
  "Proper career counseling and future guidance.",
  "Visiting lectures of educationists, professionals, and scholars."
] 