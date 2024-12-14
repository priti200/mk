"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function TutorsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
       <motion.div 
        initial={{ opacity: 0, y: 50 }} // Initial state for scroll animation
        whileInView={{ opacity: 1, y: 0 }} // Animation on scroll into view
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-4">
          Meet Our <motion.span 
            className="text-blue-600"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }} // Animation on scroll into view
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Tutors!
          </motion.span>
        </h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Join our team of experienced tutors who have been helping students achieve their goals.
        </p>
      </motion.div>

      <div className="flex justify-center items-end gap-11">
        <div className="grid grid-cols-2 gap-6"> {/* Increased gap */}
          <motion.div 
            className="rounded-2xl overflow-hidden w-60 h-56" // Increased width and height
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="images/author_3.jpg" alt="Tutor" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="rounded-2xl overflow-hidden w-60 h-56" // Increased width and height
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="images/author_1.jpg" alt="Tutor" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="rounded-2xl overflow-hidden w-60 h-56 col-span-2 mx-auto" // Increased width and height
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="images/author_2.jpg" alt="Tutor" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="bg-blue-600 rounded-3xl p-6 w-[300px]" // Increased padding and width
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <motion.div 
              className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full" // Increased size
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 10 }}
            />
            <motion.div 
              className="absolute top-3 right-3 w-4 h-4 bg-blue-400 rounded-full" // Increased size
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 500, damping: 10 }}
            />
            <motion.div 
              className="flex items-end gap-2 mb-4" // Increased margin-bottom
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="bg-blue-500 rounded-xl p-3 w-24"> {/* Increased padding and width */}
                <motion.div 
                  className="h-2 w-16 bg-white/20 rounded-full mb-2" // Increased height and width
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
                <motion.div 
                  className="h-2 w-12 bg-white/20 rounded-full" // Increased height and width
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                />
              </div>
              <div className="bg-white rounded-xl p-2 w-12 h-12 flex items-center justify-center"> {/* Increased size */}
                <motion.div 
                  className="w-6 h-6 bg-blue-100 rounded-full" // Increased size
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 500, damping: 10 }}
                />
              </div>
            </motion.div>
            <motion.img
              src="images/CEO_img.png"
              alt="Binoy Babu"
              // className="w-full h-56 object-cover rounded-2xl mb-4" // Increased height
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
            <motion.div 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
            
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
