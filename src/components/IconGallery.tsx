
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';
import { cn } from '@/lib/utils';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { iconData, iconCategories, filterIcons, type IconCategory, type IconData } from '@/data/iconData';

// Component to render individual Lucide icons
const IconComponent: React.FC<{ iconData: IconData; onClick?: () => void }> = ({ iconData, onClick }) => {
  const IconElement = iconData.component;
  return (
    <div 
      className="flex flex-col items-center justify-center gap-2 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative w-16 h-16 rounded-2xl bg-white shadow-soft hover:shadow-medium flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <IconElement className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      <span className="text-xs text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {iconData.displayName}
      </span>
    </div>
  );
};

const IconGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<IconCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add('animate-fade-up');
            titleRef.current?.classList.remove('opacity-0', 'translate-y-8');
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
  
  // Filter icons based on search query and category
  const filteredIcons = filterIcons(activeCategory, searchQuery);
  
  // Show only first 24 icons for better performance
  const displayedIcons = filteredIcons.slice(0, 24);
  
  const handleIconClick = (icon: IconData) => {
    // Here you could implement download functionality or copy to clipboard
    console.log('Icon clicked:', icon.name);
  };
  
  return (
    <section ref={sectionRef} id="icons" className="section-spacing">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 translate-y-8"
          >
            Browse Our <span className="text-primary">Icon Collection</span>
          </h2>
          
          <div className={cn(
            "max-w-md mx-auto relative transition-all duration-300",
            isSearchFocused ? "scale-105" : "scale-100"
          )}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search icons..."
              className="w-full py-3 pl-10 pr-4 rounded-xl border-2 border-muted focus:border-primary focus:ring-0 focus:outline-none transition-all duration-300"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {iconCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-12">
          {displayedIcons.map((icon, index) => (
            <div
              key={icon.id}
              className={cn(
                "transform transition-all duration-300 hover-lift stagger-item",
                index < 8 ? "animate-stagger" : ""
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <IconComponent iconData={icon} onClick={() => handleIconClick(icon)} />
            </div>
          ))}
        </div>
        
        {filteredIcons.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No icons found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filter</p>
          </div>
        )}
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Icons
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IconGallery;
