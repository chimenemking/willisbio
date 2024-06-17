'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <motion.div
      className="h-full"
       initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='top-0 bottom-0 left-0 right-0 text-6xl text-black '>Portfolio</div>
      </motion.div>
  )
}

export default Portfolio