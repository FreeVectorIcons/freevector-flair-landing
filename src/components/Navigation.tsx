
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold text-foreground">
            FreeVector<span className="text-accent">Icons</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#icons" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Browse Icons
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </a>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="default">
            Log in
          </Button>
          <Button variant="default" size="default">
            Sign up free
          </Button>
        </div>

        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container px-4 py-6 flex flex-col space-y-6">
          <a 
            href="#icons" 
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Browse Icons
          </a>
          <a 
            href="#features" 
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <div className="pt-6 flex flex-col gap-3">
            <Button variant="outline" size="lg" className="w-full">
              Log in
            </Button>
            <Button variant="default" size="lg" className="w-full">
              Sign up free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
