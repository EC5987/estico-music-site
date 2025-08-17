import React, { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-primary">Get In Touch</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        <p className="text-muted-foreground">
          Ready to create something extraordinary together?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <a 
              href="mailto:contact@esticomusic.com"
              className="flex items-center space-x-3 p-3 rounded-lg bg-card/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  Email
                </p>
                <p className="text-sm text-muted-foreground">contact@esticomusic.com</p>
              </div>
            </a>

            <a 
              href="https://instagram.com/esticomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-card/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  Instagram
                </p>
                <p className="text-sm text-muted-foreground">@esticomusic</p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
            />
          </div>
          <input
            type="text"
            name="project"
            placeholder="Project Type"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200 resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};