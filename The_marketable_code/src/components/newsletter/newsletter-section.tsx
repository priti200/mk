import { Send } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function NewsletterSection() {
  return (
    <AnimatedSection className="py-20 bg-blue-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl" />
      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl" />
      
      <div className="container max-w-2xl relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Subscribe our Newsletter</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join now to receive personalized recommendation for the full upcoming courses!
          </p>
        </div>
        
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Subscribe
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}