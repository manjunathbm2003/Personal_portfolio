import { ChevronDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const downloadResume = () => {
    // In a real application, this would trigger a download of the actual resume
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // This would be the actual resume file
    link.download = "Manjunath_BM_Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          {/* Professional headshot */}
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
              alt="Professional headshot of Manjunath B M" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Manjunath B M
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
              Electronics Engineer & Embedded Systems Specialist
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/80">
              Developing innovative embedded solutions and automotive systems that drive technological advancement. 
              Passionate about robotics, IoT, and creating intelligent systems that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToPortfolio}
              className="bg-white text-portfolio-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-portfolio-primary transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
