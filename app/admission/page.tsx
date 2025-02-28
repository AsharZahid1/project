"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, ScrollText, Shield, FileText, ClipboardCheck, School } from "lucide-react"
import Image from "next/image"
import { CircularDecoration } from "@/components/CircularDecoration"

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Banner */}
      <div className="relative h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            // src="/admission/hero-banner.jpg"
            src="/journey1.jpg"
            alt="Admission Banner"
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
                Admissions
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Begin Your Journey to Excellence
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
                { icon: FileText, delay: 0.2 },
                { icon: ClipboardCheck, delay: 0.3 },
                { icon: GraduationCap, delay: 0.4 },
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

      {/* Courses Section */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">Courses Offered</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.group}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{course.group}</h3>
                <p className="text-gray-300">{course.subjects}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-16 px-4 bg-white/5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold">Fee Structure</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-4 text-left">Fee</th>
                  <th className="p-4 text-right">F.Sc</th>
                  <th className="p-4 text-right">F.Cs</th>
                  <th className="p-4 text-right">ICS</th>
                  <th className="p-4 text-right">Humanities</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <motion.tr 
                    key={fee.type}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10"
                  >
                    <td className="p-4">{fee.type}</td>
                    <td className="p-4 text-right">{fee.fsc}</td>
                    <td className="p-4 text-right">{fee.fcs}</td>
                    <td className="p-4 text-right">{fee.ics}</td>
                    <td className="p-4 text-right">{fee.humanities}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 p-4 bg-green-500/10 rounded-lg text-green-400"
          >
            <p>Note: A special concession of 50% in admission fee and 30% in tuition fee will be given to the students of Al-Aziz School and students getting more than 70% marks in SSC exam.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Code of Conduct</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {codeOfConduct.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <p className="text-gray-300">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Admission Requirements Section */}
      <section className="py-16 px-4 bg-white/5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Admission Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="w-8 h-8 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-gray-300">{req}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

const courses = [
  { group: "F.Sc (Pre-Engg)", subjects: "Physics, Chemistry, Maths" },
  { group: "F.Sc (Pre-Med)", subjects: "Physics, Chemistry, Bio" },
  { group: "F.Cs", subjects: "Physics, Maths, Computer Science" },
  { group: "ICS", subjects: "Maths, Stats / Economics, Computer" },
  { group: "Humanities", subjects: "Education, Islamic Studies, Civics / History, Sociology" }
]

const feeStructure = [
  { type: "Admission", fsc: "10,000", fcs: "10,000", ics: "10,000", humanities: "8,000" },
  { type: "Tuition Fee", fsc: "3,500", fcs: "3,500", ics: "3,500", humanities: "3,000" },
  { type: "Change of Group", fsc: "1,000", fcs: "1,000", ics: "1,000", humanities: "1,000" },
  { type: "Security (refundable)", fsc: "5,000", fcs: "5,000", ics: "5,000", humanities: "5,000" }
]

const codeOfConduct = [
  "Cheating, stealing, immoral conduct, or any misbehavior.",
  "Willfully and deliberately damaging the college property.",
  "Showing consistently poor performance in studies.",
  "Rudeness to members of the teaching staff/college employees.",
  "Being habitually irregular, unpunctual, untidy, and improperly dressed.",
  "Keeping cell phones, tablets, and cameras in and around the college campus.",
  "Participating in violent or agitational activities harmful to the institution and its pupils.",
  "Violating the rules and regulations of the college or the instructions given to students from time to time."
]

const requirements = [
  "Form - B",
  "Two recent photographs of the student (Passport size)",
  "Father's ID Card copy",
  "Character & Provisional Certificate",
  "Copy of Mark Sheet (Attested)",
  "Undertaking",
  "N.O.C in case of boards other than F.G Board"
] 