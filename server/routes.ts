import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendWaitlistNotification, sendWelcomeEmail } from "./email-service";

const newsletterSubscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const { email } = newsletterSubscribeSchema.parse(req.body);
      
      console.log(`Newsletter subscription: ${email}`);
      
      // Send notification to business owner
      const notificationSent = await sendWaitlistNotification(email);
      
      // Send welcome email to subscriber
      const welcomeEmailSent = await sendWelcomeEmail(email);
      
      if (notificationSent && welcomeEmailSent) {
        res.json({ 
          success: true, 
          message: "Successfully subscribed to newsletter" 
        });
      } else {
        // Still return success to user even if emails fail
        console.log('Email sending failed but user was processed');
        res.json({ 
          success: true, 
          message: "Successfully subscribed to newsletter" 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email address" 
        });
      } else {
        console.error('Newsletter subscription error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
