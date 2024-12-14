import { motion } from "framer-motion";
import { useState } from "react";
import { HeaderBrand } from "./header-brand";
import { HeaderNav } from "./header-nav";
import { HeaderActions } from "./header-actions";
import { MobileMenu } from "../mobile-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <HeaderBrand />
            <HeaderNav />
            <HeaderActions onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
