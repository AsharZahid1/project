import { motion } from "framer-motion"

export function CircularDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Circle */}
      <div className="absolute -right-1/4 -top-1/4 w-[600px] h-[600px] border-2 border-white/20 rounded-full" />
      <div className="absolute -right-1/4 -top-1/4 w-[450px] h-[450px] border-2 border-white/20 rounded-full" />
      <div className="absolute -right-1/4 -top-1/4 w-[300px] h-[300px] border-2 border-white/20 rounded-full" />
      
      {/* Small Circles */}
      <div className="absolute left-10 top-1/2 w-16 h-16 border-2 border-white/20 rounded-full" />
      <div className="absolute left-20 bottom-10 w-24 h-24 border-2 border-white/20 rounded-full" />
      
      {/* Animated Circles */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-1/4 top-1/4 w-4 h-4 bg-white/30 rounded-full"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute left-1/4 bottom-1/4 w-6 h-6 bg-white/20 rounded-full"
      />
    </div>
  )
} 