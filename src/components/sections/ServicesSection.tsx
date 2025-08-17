import React from "react";
import { KeyboardMusic, Speaker, AudioWaveform } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Music Production",
      description:
        "From concept to final master, we guide artists through the full creative process. Whether it's developing melodies, arranging instrumentation, or sculpting the overall sound, our productions are designed to bring out the unique character of every project.",
      icon: <KeyboardMusic className="w-6 h-6" />,
    },
    {
      title: "Mixing & Mastering",
      description:
        "Professional mixing and mastering that ensures your music is competitive, balanced, and emotionally impactful. We craft clarity, depth, and precision so your tracks connect with listeners across every platform.",
      icon: <Speaker className="w-6 h-6" />,
    },
    {
      title: "Post-Production Sound Services",
      description:
        "Comprehensive audio post for film, TV, and multimedia projects. Services include dialogue editing, ADR, sound design and re-recording mixing—delivering immersive, broadcast-ready sound tailored to each production's needs.",
      icon: <AudioWaveform className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Removed the internal title + divider to avoid double heading */}
      <p className="text-center text-muted-foreground">
        Boutique music production and sound services tailored to your vision
      </p>

      <div className="grid gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="group">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-card/10 border border-border/50 hover:border-primary/30 transition-all duration-300">
              {/* Icon container: fixed square, centered icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold text-foreground leading-none">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};