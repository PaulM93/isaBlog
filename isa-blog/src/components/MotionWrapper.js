import React from "react"
import { motion } from "framer-motion"

export default function MotionWrapper({ children }) {
  return (
    <motion.div
      style={{ display: "flex" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  )
}
