import { Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-portfolio-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-secondary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-portfolio-secondary mb-6">Hello! I'm Manjunath</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm an Electronics Engineering graduate with a strong foundation in embedded systems, 
              robotics, and automotive technologies. Currently working as an Associate Engineer at 
              L&T Technology Services, contributing to BMW project focusing on system functions 
              and automotive integration.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in microcontrollers like Arduino, ESP32, STM32, and Raspberry Pi, with 
              expertise in embedded C, Python, and automotive communication protocols. I'm passionate 
              about creating innovative solutions that bridge hardware and software to solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-semibold text-portfolio-secondary mb-2">Location</h4>
                <p className="text-gray-600">Kollegal, Karnataka</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-secondary mb-2">Experience</h4>
                <p className="text-gray-600">2+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-secondary mb-2">Education</h4>
                <p className="text-gray-600">B.E. Electronics & Communication</p>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-secondary mb-2">Specialization</h4>
                <p className="text-gray-600">Embedded Systems & Robotics</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Uno_R3.png" 
                alt="Arduino Uno microcontroller representing embedded programming and hardware interfacing" 
                className="rounded-2xl shadow-2xl w-full max-w-lg" 
              />
              <div className="absolute -bottom-6 -right-6 bg-portfolio-primary text-white p-4 rounded-xl shadow-lg">
                <Code className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
