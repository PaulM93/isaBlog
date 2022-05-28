import React from "react"
import { motion } from "framer-motion"

export default function MotionWrapper({ children }) {
  return (
    <motion.div
      // initial="hidden"
      whileInView="visible"
      style={{ minWidth: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      // variants={{
      //   visible: { y: 0, opacity: 1 },
      //   hidden: { y: 100, opacity: 0 },
      // }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  )
}
