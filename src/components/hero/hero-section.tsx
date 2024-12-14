import { motion } from "framer-motion";
import { Headphones, LineChart, Lightbulb } from "lucide-react";
import { HeroFeatureItem } from "./hero-feature-item";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8 "
          >
            <div className="relative">
              <img
                src="/svg/circle.svg"
                alt=""
                className=" absolute top-0 w-[200px]"
              />
              <h1 className="text-6xl font-bold leading-tight">
                Own Your <span className="text-blue-600">Tomorrow</span>
                <br />
                With <span className="text-blue-600">Marketable!</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              Master Trading Skills with Weekend Insights. The ultimate online
              platform to elevate your market knowledge and trading.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                Get free trial
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-6">
              <HeroFeatureItem icon={Headphones} label="Live Trading" />
              <HeroFeatureItem icon={LineChart} label="Market Insights" />
              <HeroFeatureItem icon={Lightbulb} label="Portfolio Growth" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 relative "
          >
            <div className="relative h-full">
              {/* Main Image with Circle Border */}
              <div className="relative z-10 overflow-hidden  dark:border-gray-800">
                <img
                  src="/public/images/hero_sec_3.png"
                  alt="Trading Expert"
                  className="w-full h-full object-cover m-auto"
                />
              </div>
              <img
                src="/public/svg/whatsApp.svg"
                alt=""
                className=" absolute  right-0  bottom-14"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
