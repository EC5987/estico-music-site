import React from 'react';
import { Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const email = 'contact@esticomusic.com';

  return (
    <div className="space-y-8">
      {/* Intro Text */}
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          Ready to create something extraordinary together?
        </p>
      </div>

      {/* Single Highlighted Email Button */}
      <div className="flex items-center justify-center">
        <a
          href={`mailto:${email}`}
          className="flex flex-col items-center justify-center gap-1 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-center"
        >
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <span className="text-sm opacity-80">{email}</span>
        </a>
      </div>

      {/* Instagram Link */}
      <div className="flex justify-center">
        <a
          href="https://instagram.com/esticomusic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-medium hover:opacity-90 transition"
        >
          {/* Instagram gradient icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>
          @esticomusic
        </a>
      </div>
    </div>
  );
};