import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface PageShellProps {
  children: ReactNode;
  showNavbar?: boolean;
}

export function PageShell({ children, showNavbar = true }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background bg-animated-shapes">
      {showNavbar && <Navbar />}
      <main className={showNavbar ? 'pt-20' : ''}>
        {children}
      </main>
    </div>
  );
}
