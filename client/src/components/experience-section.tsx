import { Building, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "full-time" | "internship" | "freelance";
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Associate Engineer",
      company: "L&T Technology Services",
      location: "India",
      period: "2024 – Present",
      description: [
        "Contributing to the BMW project, focusing on system functions and automotive integration",
        "Ensuring seamless functionality of automotive systems through embedded engineering and ECU development",
        "Conducting system optimization, testing, and validation to meet BMW's stringent quality standards",
        "Collaborating with cross-functional teams to deliver robust automotive solutions"
      ],
      type: "full-time"
    },
    {
      title: "Robotics Intern",
      company: "Yolabs",
      location: "India",
      period: "April 2024 – June 2024",
      description: [
        "Worked on various robotics projects, gaining hands-on experience in ROS and RTOS",
        "Assisted in the development and testing of robotic systems for real-world applications",
        "Contributed to embedded systems programming and hardware-software integration"
      ],
      type: "internship"
    },
    {
      title: "Electronics Project Freelancer",
      company: "Independent",
      location: "Remote",
      period: "2022 – 2024",
      description: [
        "Completed 15+ electronics projects, including microcontroller-based systems and IoT applications",
        "Developed expertise in hardware-software integration, debugging, and prototyping",
        "Worked with various clients on embedded systems solutions and automation projects"
      ],
      type: "freelance"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "bg-green-100 text-green-800";
      case "internship":
        return "bg-blue-100 text-blue-800";
      case "freelance":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "full-time":
        return "Full-time";
      case "internship":
        return "Internship";
      case "freelance":
        return "Freelance";
      default:
        return type;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-secondary mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            My journey in electronics engineering and embedded systems development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-portfolio-neutral rounded-2xl p-8 hover-lift shadow-sm border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-portfolio-secondary">{exp.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                      {getTypeLabel(exp.type)}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-portfolio-primary" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-portfolio-primary" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-portfolio-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}