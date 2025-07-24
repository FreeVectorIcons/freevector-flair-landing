
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileDown, PenTool, Maximize, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock icons data
const iconGrid = Array.from({ length: 20 }).map((_, index) => ({
  id: index,
  url: `/icon-${index + 1}.svg`,
  color: index % 3 === 0 ? 'bg-blue-500' : index % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500',
}));

const HeroSection: React.FC = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate icons with staggered delay
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        setTimeout(() => {
          icon.classList.add('animate-stagger');
        }, 100 + index * 50);
      }
    });
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" />
      
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
            <Gift className="h-4 w-4 mr-2" /> 
            <span>Over 10,000 free vector icons for your projects</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance animate-fade-in">
            Beautiful Vector Icons for <br className="hidden sm:block" />
            <span className="text-accent">Modern Designers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-in">
            Access thousands of customizable vector icons for your design projects.
            Use them in your websites, apps, presentations, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button variant="default" size="lg" className="group">
              Browse Free Icons
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <FileDown className="mr-2 h-4 w-4" />
              Download All Icons
            </Button>
          </div>
        </div>
        
        {/* Icon showcase grid */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
          
          <div className="icon-grid p-6 rounded-2xl bg-white/50 shadow-soft">
            {iconGrid.map((icon, index) => (
              <div
                key={icon.id}
                ref={el => (iconRefs.current[index] = el)}
                className={cn(
                  "stagger-item w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 ease-in-out bg-white",
                  index % 4 === 0 && "hover:-translate-y-1",
                  index % 4 === 1 && "hover:rotate-3",
                  index % 4 === 2 && "hover:-rotate-3",
                  index % 4 === 3 && "hover:scale-110"
                )}
              >
                {index % 4 === 0 && <PenTool className={cn("h-6 w-6", index % 3 === 0 ? "text-blue-500" : index % 3 === 1 ? "text-purple-500" : "text-pink-500")} />}
                {index % 4 === 1 && <FileDown className={cn("h-6 w-6", index % 3 === 0 ? "text-blue-500" : index % 3 === 1 ? "text-purple-500" : "text-pink-500")} />}
                {index % 4 === 2 && <Maximize className={cn("h-6 w-6", index % 3 === 0 ? "text-blue-500" : index % 3 === 1 ? "text-purple-500" : "text-pink-500")} />}
                {index % 4 === 3 && <Gift className={cn("h-6 w-6", index % 3 === 0 ? "text-blue-500" : index % 3 === 1 ? "text-purple-500" : "text-pink-500")} />}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-16 text-muted-foreground text-sm animate-fade-in">
          <span className="flex items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Royalty-free
          </span>
          <span className="flex items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Customizable SVGs
          </span>
          <span className="flex items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Commercial use
          </span>
          <span className="flex items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Multiple formats
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
