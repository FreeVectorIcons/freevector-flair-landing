
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Check, Gift, ArrowRight } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  index: number;
}

const Plan: React.FC<PlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular,
  ctaText,
  index
}) => {
  const planRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (planRef.current) {
      observer.observe(planRef.current);
    }
    
    return () => {
      if (planRef.current) {
        observer.unobserve(planRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={planRef}
      className={cn(
        "rounded-2xl p-8 h-full flex flex-col relative transition-all duration-300 opacity-0 translate-y-10",
        isPopular 
          ? "bg-primary text-primary-foreground border-2 border-primary shadow-lg" 
          : "bg-white border border-border/40 shadow-soft"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className={cn(
          "text-sm mb-4",
          isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          {description}
        </p>
        <div className="flex items-baseline mb-5">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && <span className={cn(
            "ml-2 text-sm",
            isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>/ month</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className={cn(
              "h-5 w-5 mr-3 mt-0.5",
              isPopular ? "text-primary-foreground" : "text-primary"
            )} />
            <span className={isPopular ? "text-primary-foreground/90" : ""}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isPopular ? "outline" : "primary"} 
        size="wide"
        className={cn(
          isPopular 
            ? "bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            : ""
        )}
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [yearlyBilling, setYearlyBilling] = useState(true);
  
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
  
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for personal projects and exploring our collection.",
      features: [
        "Access to 1,000+ free icons",
        "PNG downloads",
        "Basic customization",
        "Personal use only",
        "Standard resolution"
      ],
      ctaText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Professional",
      price: yearlyBilling ? "$9" : "$12",
      description: "For professional designers and small teams.",
      features: [
        "Access to all 10,000+ icons",
        "SVG & PNG downloads",
        "Advanced customization",
        "Commercial use license",
        "Priority support",
        "Unlimited projects"
      ],
      ctaText: "Upgrade Now",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: yearlyBilling ? "$49" : "$59",
      description: "For organizations needing advanced features and support.",
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "API access",
        "Custom icon requests",
        "Dedicated support",
        "Extended commercial license",
        "Bulk export options"
      ],
      ctaText: "Contact Sales",
      isPopular: false
    }
  ];
  
  return (
    <section ref={sectionRef} id="pricing" className="section-spacing">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-8"
          >
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg text-muted-foreground mb-8 opacity-0 translate-y-8"
          >
            Choose the plan that works best for your needs, with no hidden fees or complicated tiers.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-10">
            <span className={cn(
              "font-medium",
              !yearlyBilling ? "text-foreground" : "text-muted-foreground"
            )}>
              Monthly
            </span>
            <button
              type="button"
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                yearlyBilling ? "bg-primary" : "bg-muted"
              )}
              onClick={() => setYearlyBilling(!yearlyBilling)}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  yearlyBilling ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn(
              "font-medium flex items-center",
              yearlyBilling ? "text-foreground" : "text-muted-foreground"
            )}>
              Yearly 
              <span className="ml-1.5 text-xs font-bold py-0.5 px-1.5 rounded-md bg-accent/20 text-accent">
                Save 25%
              </span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Plan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-muted/30 border border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent/20 text-accent mr-5">
              <Gift className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Need a custom plan?</h3>
              <p className="text-muted-foreground">Contact us for custom licensing options or special requirements.</p>
            </div>
          </div>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
