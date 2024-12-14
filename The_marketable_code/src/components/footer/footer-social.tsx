import { Twitter, Linkedin, Github, Facebook, Dribbble } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Github, href: '#' },
  { icon: Dribbble, href: '#' }
];

export function FooterSocial() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-blue-500"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}