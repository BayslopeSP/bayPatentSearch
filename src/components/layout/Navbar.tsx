import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, BarChart3, HelpCircle, Menu, X, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { name: 'Search', href: '/', icon: Search },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, disabled: true },
  { name: 'Help', href: '/help', icon: HelpCircle, disabled: true },
];

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-glow-teal-sm">
            <Search className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Bay<span className="text-accent">Patent</span>Search
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.disabled ? '#' : item.href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                  ${isActive ? 'bg-primary/20 text-foreground' : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'}
                  ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}
                `}
                onClick={item.disabled ? (e) => e.preventDefault() : undefined}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hidden h-10 w-10 rounded-full bg-primary/20 p-0 text-sm font-semibold text-foreground hover:bg-primary/30 md:flex"
              >
                MR
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 border-primary/30 bg-popover">
              <DropdownMenuItem className="cursor-pointer gap-2">
                <User className="h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-primary/20" />
              <DropdownMenuItem asChild className="cursor-pointer gap-2 text-destructive">
                <Link to="/login">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-primary/20 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.disabled ? '#' : item.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all
                    ${isActive ? 'bg-primary/20 text-foreground' : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'}
                    ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}
                  `}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
            <div className="border-t border-primary/20 pt-3">
              <Link
                to="/login"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
