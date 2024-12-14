'use client'

import { AnimationControls, motion, useAnimation, Variants } from "framer-motion"
import React from 'react'
import { useInView } from "react-intersection-observer"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  isHighlighted?: boolean
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isHighlighted = false, index }) => {
  const controls: AnimationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`relative p-6 rounded-3xl transition-all duration-300 hover:shadow-xl ${
        isHighlighted ? 'bg-blue-600 text-white' : 'bg-gray-50 hover:bg-blue-50'
      }`}
    >
      <div className="mb-4 text-3xl">
        {icon}
      </div>
      <motion.h3 
        className="text-xl font-semibold mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-sm mb-4 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="inline-flex items-center text-sm font-medium cursor-pointer"
        whileHover={{ x: 5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

interface Service {
  title: string
  description: string
  icon: string
  isHighlighted?: boolean
}

const FeaturesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Graph Analysis",
      description: "In today's digital landscape, your website serves as the first impression customers have of your business. We craft visually stunning and user-friendly websites that not only captivate your audience but also deliver impactful results.",
      icon: "📈",
    },
    {
      title: "Trend Analysis",
      description: "In today's digital landscape, your website serves as the first impression customers have of your business. We craft visually stunning and user-friendly websites that not only captivate your audience but also deliver impactful results.",
      icon: "📊",
      isHighlighted: true,
    },
    {
      title: "Cryptography",
      description: "In today's digital landscape, your website serves as the first impression customers have of your business. We craft visually stunning and user-friendly websites that not only captivate your audience but also deliver impactful results.",
      icon: "🔒",
    },
    {
      title: "Mastering SMC",
      description: "In today's digital landscape, your website serves as the first impression customers have of your business. We craft visually stunning and user-friendly websites that not only captivate your audience but also deliver impactful results.",
      icon: "💫",
    },
    {
      title: "20 Days of Trading",
      description: "In today's digital landscape, your website serves as the first impression customers have of your business. We craft visually stunning and user-friendly websites that not only captivate your audience but also deliver impactful results.",
      icon: "📆",
    },
    {
      title: "Portfolio Growth Session",
      description: "In today's digital landscape, your website serves as the first impression customers have of your business. We craft visually stunning and user-friendly websites that not only captivate your audience but also deliver impactful results.",
      icon: "💼",
    },
  ]

  const titleControls: AnimationControls = useAnimation()
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (titleInView) {
      titleControls.start("visible")
    }
  }, [titleControls, titleInView])

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h2 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What we offer
        </motion.h2>
        <motion.p 
          className="text-4xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          For Your Trading Success!
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-end mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
        >
          View all courses
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            isHighlighted={service.isHighlighted}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default FeaturesSection

