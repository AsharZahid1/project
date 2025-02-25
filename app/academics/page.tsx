"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Award, BookOpen, Library, Building } from "lucide-react"

// Sample data - In a real app, this would come from a database
const events = [
  {
    id: "1",
    title: "Annual Sports Day 2024",
    date: "March 15, 2024",
    description: "Join us for an exciting day of sports and athletics competitions.",
  image: "/events/DSC_0099a.jpg"
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

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
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
                      src={`/facilities/lab${i}.jpg`}
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
                      src={`/facilities/library${i}.jpg`}
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