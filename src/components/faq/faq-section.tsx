"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from 'lucide-react'
import { useState } from "react"

interface FAQItem {
  id: number
  question: string
  answer: string
  isOpen?: boolean
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How long until we deliver your first course?",
    answer: "Really boy law county she unable her sister. Feel you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
    isOpen: true
  },
  {
    id: 2,
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feel you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
  },
  {
    id: 3,
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feel you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
  },
  {
    id: 4,
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feel you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-600">Frequently </span>
        Ask Questions
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: faq.id * 0.1 }}
            className="bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <motion.button
              className="w-full flex items-center justify-between p-6 text-left"
              onClick={() => toggleItem(faq.id)}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg font-medium text-[#2D2D2D]">{faq.question}</span>
              <motion.div
                initial={false}
                animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0 ml-4"
              >
                {openItems.includes(faq.id) ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Minus className="w-6 h-6 text-blue-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Plus className="w-6 h-6 text-[#2D2D2D]" />
                  </motion.div>
                )}
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {openItems.includes(faq.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: { 
                      height: { duration: 0.3, ease: "easeOut" },
                      opacity: { duration: 0.2, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: { 
                      height: { duration: 0.3, ease: "easeIn" },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="p-6 pt-0 text-gray-600"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}