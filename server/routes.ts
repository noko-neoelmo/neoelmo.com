import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real app, you would send an email here using a service like nodemailer
      console.log("New contact submission:", contact);
      
      res.json({ 
        success: true, 
        message: "お問い合わせありがとうございます。後日ご連絡いたします。",
        contact 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "入力内容に誤りがあります。",
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。" 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
