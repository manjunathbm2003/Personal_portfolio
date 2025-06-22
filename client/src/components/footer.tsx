import { Linkedin, Github, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/manjunath-b-m", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-portfolio-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <p className="text-white/60 mb-4">
            &copy; 2024 Manjunath B M. All rights reserved.
          </p>
          
          <p className="text-white/40 text-sm flex items-center justify-center">
            Designed and developed with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
