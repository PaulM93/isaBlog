import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

export default function MotionLayout({
  children,
  setHoverStatus,
  url,
  cardType,
}) {
  //Small CArd
  const smallCardStyle = {
    // minHeight: "100%",
    cursor: "pointer",
    borderRadius: "10px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px",
  }

  const bigCardStyle = {
    borderRadius: "10px",
    cursor: "pointer",
    overflow: "hidden",
    height: "100%",
  }

  return (
    <Link to={"/como-hacer-un-postre-de-milo"}>
      {/* <Link to={url}> */}
      <motion.div
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.2 },
          boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        }}
        style={cardType === "sm" ? smallCardStyle : bigCardStyle}
        onHoverStart={() => setHoverStatus(true)}
        onHoverEnd={() => setHoverStatus(false)}
      >
        {children}
      </motion.div>
    </Link>
  )
}
