
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import AnimatedIcon from './AnimatedIcon';
import { cn } from '@/lib/utils';
import { Search, Filter, ArrowRight } from 'lucide-react';

// Mock categories
const categories = [
  'All',
  'User Interface',
  'Business',
  'Social Media',
  'Weather',
  'E-commerce',
  'Travel',
  'Food',
  'Technology',
];

// Mock icons - in real app, these would be loaded from an API or database
const generateMockIcons = () => {
  const icons = [];
  // Use Lucide icons for demo
  const iconNames = [
    'PenTool', 'Image', 'Calendar', 'Clock', 'User', 
    'Settings', 'Mail', 'Phone', 'Heart', 'Star',
    'Home', 'Search', 'Bell', 'Camera', 'Bookmark',
    'File', 'Folder', 'Map', 'Globe', 'Smile',
    'Moon', 'Sun', 'Cloud', 'Umbrella', 'Video',
    'Music', 'ShoppingCart', 'CreditCard', 'Truck', 'Package',
    'Cpu', 'Database', 'Wifi', 'Bluetooth', 'Battery'
  ];
  
  for (let i = 0; i < 24; i++) {
    const name = iconNames[i % iconNames.length];
    icons.push({
      id: i,
      name,
      color: i % 5 === 0 ? 'bg-blue-500' : 
             i % 5 === 1 ? 'bg-purple-500' : 
             i % 5 === 2 ? 'bg-pink-500' : 
             i % 5 === 3 ? 'bg-green-500' : 'bg-amber-500',
    });
  }
  return icons;
};

const IconGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [icons, setIcons] = useState(generateMockIcons());
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
  const filteredIcons = icons.filter(icon => {
    const matchesSearch = searchQuery === '' || 
                          icon.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || Math.random() > 0.5; // Mock category filtering
    return matchesSearch && matchesCategory;
  });
  
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
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'subtle'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-12">
          {filteredIcons.map((icon, index) => (
            <AnimatedIcon
              key={icon.id}
              icon={`https://via.placeholder.com/24/CCCCCC/000000?text=${icon.name.substring(0, 1)}`}
              name={icon.name}
              color={icon.color}
              className="transform transition-all duration-300 hover-lift"
            />
          ))}
        </div>
        
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
