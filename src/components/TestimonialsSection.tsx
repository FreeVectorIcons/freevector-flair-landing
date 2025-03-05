
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  company, 
  rating,
  index 
}) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={testimonialRef} 
      className="p-6 bg-white rounded-2xl shadow-soft border border-border/40 flex flex-col h-full opacity-0 translate-y-8"
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "h-5 w-5", 
              i < rating ? "text-amber-400 fill-amber-400" : "text-muted"
            )} 
          />
        ))}
      </div>
      
      <blockquote className="text-foreground flex-1 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
          {author.split(' ').map(name => name[0]).join('')}
        </div>
        <div className="ml-3">
          <div className="font-medium text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add('animate-fade-up');
            titleRef.current?.classList.remove('opacity-0', 'translate-y-8');
            
            setTimeout(() => {
              subtitleRef.current?.classList.add('animate-fade-up');
              subtitleRef.current?.classList.remove('opacity-0', 'translate-y-8');
            }, 200);
            
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
  
  const testimonials = [
    {
      quote: "These vector icons have elevated the design of our mobile app. The clean lines and flexibility made customization a breeze.",
      author: "Alex Morgan",
      role: "UI Designer",
      company: "DesignHub",
      rating: 5
    },
    {
      quote: "The icon library saved us countless hours. We were able to find every icon we needed for our dashboard redesign in one place.",
      author: "Jamie Chen",
      role: "Product Manager",
      company: "TechFlow",
      rating: 5
    },
    {
      quote: "As a freelancer, having access to such a comprehensive library of professionally designed icons has been invaluable for my client work.",
      author: "Sarah Johnson",
      role: "Freelance Designer",
      company: "Studio Creative",
      rating: 4
    },
    {
      quote: "The customization options for these icons are outstanding. We could easily adapt them to match our brand colors and style.",
      author: "Michael Torres",
      role: "Creative Director",
      company: "Artistry Digital",
      rating: 5
    },
    {
      quote: "I've tried many icon libraries, but this one stands out for its consistency and attention to detail across all categories.",
      author: "Emily Parker",
      role: "UX Researcher",
      company: "InnovateUX",
      rating: 4
    },
    {
      quote: "These vector icons integrate perfectly with our design system. The clean, minimal style works beautifully across all our products.",
      author: "David Wilson",
      role: "Design Systems Lead",
      company: "TechGiant",
      rating: 5
    }
  ];
  
  return (
    <section ref={sectionRef} id="testimonials" className="section-spacing bg-muted/30 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-8"
          >
            Loved by <span className="text-primary">Designers</span> Everywhere
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg text-muted-foreground opacity-0 translate-y-8"
          >
            See what our users are saying about our icon collection and how it's helping them create better designs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
