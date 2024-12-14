import { FooterBrand } from './footer-brand';
import { FooterLinks } from './footer-links';
import { FooterSocial } from './footer-social';

const footerLinks = {
  courses: [
    { label: 'Trading Basics', href: '#' },
    { label: 'Advanced Trading', href: '#' },
    { label: 'Market Analysis', href: '#' },
    { label: 'Portfolio Management', href: '#' }
  ],
  company: [
    { label: 'About us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Terms & Privacy', href: '#' }
  ],
  contact: [
    { label: 'Support', href: '#' },
    { label: 'Sales', href: '#' },
    { label: 'Partners', href: '#' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-navy-900 dark:bg-gray-900 text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterBrand />
          <FooterLinks title="Courses" links={footerLinks.courses} />
          <FooterLinks title="Company" links={footerLinks.company} />
          <FooterLinks title="Contact us" links={footerLinks.contact} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">© 2024 Marketable. All rights reserved.</p>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}