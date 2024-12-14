import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween' }}
          className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-lg z-50"
        >
          <div className="p-5">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
            
            <nav className="mt-8 space-y-4">
              <a href="#" className="block py-2 text-lg hover:text-blue-600 dark:hover:text-blue-500">Home</a>
              <a href="#" className="block py-2 text-lg hover:text-blue-600 dark:hover:text-blue-500">About us</a>
              <a href="#" className="block py-2 text-lg hover:text-blue-600 dark:hover:text-blue-500">Courses</a>
              <a href="#" className="block py-2 text-lg hover:text-blue-600 dark:hover:text-blue-500">Contact us</a>
            </nav>
            
            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}