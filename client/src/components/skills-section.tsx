import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface Technology {
  name: string;
  icon: string;
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills: Skill[] = [
    { name: "Embedded C Programming", level: 90 },
    { name: "Python", level: 85 },
    { name: "Microcontrollers (Arduino/ESP32/STM32)", level: 95 },
    { name: "Communication Protocols (SPI/I2C/UART/CAN)", level: 88 },
    { name: "Automotive Systems & ECU Development", level: 80 },
  ];

  const technologies: Technology[] = [
    { name: "Arduino", icon: "🔧" },
    { name: "ESP32", icon: "📡" },
    { name: "Python", icon: "🐍" },
    { name: "Raspberry Pi", icon: "🍓" },
    { name: "STM32", icon: "💾" },
    { name: "ROS/RTOS", icon: "🤖" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-secondary mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            I work with a diverse set of technologies to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-secondary mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-secondary">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="skill-bar bg-portfolio-primary h-3 rounded-full"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-secondary mb-8">Technologies</h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="text-center group hover-lift bg-portfolio-neutral p-6 rounded-xl"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <h4 className="font-semibold text-portfolio-secondary">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
