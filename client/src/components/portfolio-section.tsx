import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  type: "web" | "mobile";
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "Smart Hand Gloves",
      description: "Designed for paralyzed individuals, these gloves convert hand signs into commands using MPU6050 accelerometer and gyroscope with microcontrollers for real-time motion analysis.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Arduino", "MPU6050", "Embedded C", "Sensors"],
      type: "web",
    },
    {
      title: "Autonomous Delivery Robot",
      description: "A robot prototype capable of delivering packages without human intervention, equipped with sensors and navigation algorithms for autonomous navigation and obstacle avoidance.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["ROS", "Python", "Sensors", "Navigation"],
      type: "mobile",
    },
    {
      title: "Smart Access System using ESP32 Cam",
      description: "An access control system using ESP32 Cam that unlocks when an authorized face is detected, utilizing facial recognition technology for enhanced security.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["ESP32", "OpenCV", "Face Recognition", "Embedded C"],
      type: "web",
    },
    {
      title: "Fire Fighting Robot",
      description: "A robot prototype that detects fire within a specific range and sprays water to extinguish it, equipped with flame sensors and water pump for autonomous fire suppression.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Arduino", "Flame Sensors", "Water Pump", "Robotics"],
      type: "web",
    },
    {
      title: "Face Detection using OpenCV",
      description: "A Python project using OpenCV to detect human faces with computer vision techniques for real-time face identification and tracking, applicable in security and surveillance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      type: "web",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-portfolio-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-secondary mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A showcase of innovative embedded systems, robotics, and IoT projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="project-overlay absolute inset-0 bg-portfolio-primary/90 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ExternalLink className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-portfolio-secondary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-portfolio-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center text-portfolio-primary hover:text-portfolio-primary/80 font-semibold p-0"
                  >
                    {project.type === "mobile" ? (
                      <Smartphone className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    {project.type === "mobile" ? "App Store" : "Live Demo"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center text-portfolio-secondary hover:text-portfolio-primary font-semibold p-0"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-portfolio-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-portfolio-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
