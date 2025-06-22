import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }
      
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
      
      res.status(200).json({ 
        message: "Message sent successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real application, this would serve the actual resume file
    // For now, we'll just return a message
    res.status(200).json({ 
      message: "Resume download would be triggered here",
      downloadUrl: "/resume.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
