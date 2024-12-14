import { motion } from "framer-motion";

interface StatsCardProps {
  number: string;
  label: string;
  className?: string;
}

export function HeroStatsCard({
  number,
  label,
  className = "",
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 flex flex-col items-center z-30 ${className}`}
    >
      <span className="text-blue-600 font-bold">{number}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}
