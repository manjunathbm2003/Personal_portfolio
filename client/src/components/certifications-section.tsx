import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "Functional Safety and ISO 26262",
      issuer: "Udemy",
      date: "January 2025",
      description: "Comprehensive understanding of automotive functional safety standards and ISO 26262 compliance requirements"
    },
    {
      title: "IoT Foundations: Operating Systems Fundamentals",
      issuer: "LinkedIn Learning",
      date: "February 2024",
      description: "Foundation knowledge in IoT systems and operating system fundamentals for embedded applications"
    },
    {
      title: "Learning FPGA Development",
      issuer: "LinkedIn Learning", 
      date: "September 2023",
      description: "Practical skills in FPGA development and digital system design using hardware description languages"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-portfolio-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-secondary mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Continuous learning and professional development in emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover-lift shadow-sm border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Award className="h-6 w-6 text-portfolio-primary" />
                </div>
                {cert.link && (
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-portfolio-primary transition-colors duration-300" />
                )}
              </div>

              <h3 className="text-xl font-bold text-portfolio-secondary mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <span className="font-medium">{cert.issuer}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span className="text-sm">{cert.date}</span>
                </div>
              </div>

              {cert.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}