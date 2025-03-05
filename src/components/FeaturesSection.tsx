
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { PenLine, FileEdit, Palette, Maximize2, Download, Layers } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
              entry.target.classList.remove('opacity-0', 'scale-95');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 opacity-0 scale-95",
        "border border-border/40"
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add('animate-fade-up');
              titleRef.current.classList.remove('opacity-0', 'translate-y-8');
            }
            if (subtitleRef.current) {
              setTimeout(() => {
                subtitleRef.current?.classList.add('animate-fade-up');
                subtitleRef.current?.classList.remove('opacity-0', 'translate-y-8');
              }, 200);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const features = [
    {
      icon: <PenLine className="h-6 w-6" />,
      title: "Vector Precision",
      description: "All icons are vector-based, ensuring perfect clarity at any scale, from tiny mobile icons to large displays."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Customizable Colors",
      description: "Easily change colors to match your brand or design system with our editable SVG format."
    },
    {
      icon: <FileEdit className="h-6 w-6" />,
      title: "Editable Shapes",
      description: "Modify, combine, or extend any icon to create custom variations that fit your specific needs."
    },
    {
      icon: <Maximize2 className="h-6 w-6" />,
      title: "Responsive Scaling",
      description: "Icons maintain perfect quality when scaled to any size, with optimized paths for clean rendering."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Download icons in SVG, PNG, or other formats to suit your project requirements."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Extensive Library",
      description: "Access thousands of icons across dozens of categories, with new additions regularly."
    }
  ];
  
  return (
    <section ref={sectionRef} id="features" className="section-spacing bg-muted/30 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-8"
          >
            Designed for the Modern <span className="text-primary">Creative Workflow</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg text-muted-foreground opacity-0 translate-y-8"
          >
            Our vector icons are crafted with precision and flexibility in mind, 
            making them perfect for any design project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
