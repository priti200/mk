"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from "react"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Prakash",
    location: "Delhi",
    rating: 4,
    text: "An excellent course for mastering trading! It covers everything from basics to advanced strategies with practical examples and live sessions. Perfect for beginners and those refining their skills. Highly recommended!",
    initial: "P"
  },
  {
    id: 2,
    name: "Aasutosh Sony",
    location: "Bhubaneswar",
    rating: 4,
    text: "An excellent course for mastering trading! It covers everything from basics to advanced strategies with practical examples and live sessions. Perfect for beginners and those refining their skills. Highly recommended!",
    initial: "A"
  },
  {
    id: 3,
    name: "Ritik Singh",
    location: "Haryana",
    rating: 4,
    text: "An excellent course for mastering trading! It covers everything from basics to advanced strategies with practical examples and live sessions. Perfect for beginners and those refining their skills. Highly recommended!",
    initial: "R"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hear from our <span className="text-blue-600">Learners!</span>
      </motion.h1>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden px-12">
          <div className="relative flex items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                if (index === currentIndex) {
                  return (
                    <motion.div
                      key={testimonial.id}
                      className="absolute w-full max-w-2xl"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div 
                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                            style={{ backgroundColor: ['#E91E63', '#9C27B0', '#90EE90'][index] }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {testimonial.initial}
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="text-xl font-bold"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {testimonial.name}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-600"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {testimonial.location}
                            </motion.p>
                          </div>
                          <div className="ml-auto flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                              >
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <motion.p 
                          className="text-lg leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {testimonial.text.split('Highly recommended!').map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="relative">
                                  Highly recommended!
                                  <motion.span
                                    className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                  />
                                </span>
                              )}
                            </span>
                          ))}
                        </motion.p>
                      </div>
                    </motion.div>
                  )
                }
                return null
              })}
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-blue-600"
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-blue-600"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}