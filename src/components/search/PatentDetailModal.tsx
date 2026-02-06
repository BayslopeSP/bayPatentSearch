import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Building2, User, FileText, List, ScrollText } from 'lucide-react';
import { Patent } from '@/types/patent';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface PatentDetailModalProps {
  patent: Patent | null;
  isOpen: boolean;
  onClose: () => void;
}

type SectionType = 'abstract' | 'claims' | 'description';

export function PatentDetailModal({ patent, isOpen, onClose }: PatentDetailModalProps) {
  const [activeSection, setActiveSection] = useState<SectionType>('abstract');

  if (!patent) return null;

  const formattedDate = format(new Date(patent.applicationDate), 'dd MMMM yyyy');

  const sections = [
    { id: 'abstract' as SectionType, label: 'Abstract', icon: FileText, content: patent.abstract },
    { id: 'claims' as SectionType, label: 'Claims', icon: List, content: patent.claims },
    { id: 'description' as SectionType, label: 'Description', icon: ScrollText, content: patent.description },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto border-l border-primary/30 bg-card shadow-glow-teal-lg"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-primary/20 bg-card/95 backdrop-blur-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-bold text-foreground leading-tight">{patent.title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Meta */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 text-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>{patent.assignee}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1.5 text-foreground">
                  <User className="h-4 w-4 text-accent" />
                  <span>{patent.inventor}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-1.5 text-foreground">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Section Navigation */}
              <div className="mb-6 flex gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all
                      ${activeSection === section.id
                        ? 'bg-primary text-primary-foreground shadow-glow-teal-sm'
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                    `}
                  >
                    <section.icon className="h-4 w-4" />
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Active Section Content */}
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl bg-muted/30 p-6"
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground capitalize">
                  {sections.find(s => s.id === activeSection)?.label}
                </h3>
                <p className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
                  {sections.find(s => s.id === activeSection)?.content}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
