import { motion } from 'framer-motion';
import { Calendar, Building2, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Patent } from '@/types/patent';
import { format } from 'date-fns';

interface PatentResultCardProps {
  patent: Patent;
  index: number;
  onViewDetails: (patent: Patent) => void;
}

type TabType = 'abstract' | 'claims' | 'description';

export function PatentResultCard({ patent, index, onViewDetails }: PatentResultCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('abstract');
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = format(new Date(patent.applicationDate), 'dd MMM yyyy');

  const tabContent: Record<TabType, string> = {
    abstract: patent.abstract,
    claims: patent.claims,
    description: patent.description,
  };

  const truncatedContent = tabContent[activeTab].slice(0, 300);
  const fullContent = tabContent[activeTab];
  const shouldTruncate = fullContent.length > 300;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card-hover p-6"
    >
      {/* Title */}
      <button
        onClick={() => onViewDetails(patent)}
        className="mb-4 text-left text-lg font-semibold text-foreground transition-colors hover:text-accent"
      >
        {patent.title}
      </button>

      {/* Meta Information */}
      <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-primary" />
          <span>{patent.assignee}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-accent" />
          <span>{patent.inventor}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-secondary" />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-1 rounded-lg bg-muted/50 p-1">
        {(['abstract', 'claims', 'description'] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setIsExpanded(false);
            }}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium capitalize transition-all
              ${activeTab === tab 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-sm leading-relaxed text-muted-foreground">
        <p>{isExpanded ? fullContent : truncatedContent}{!isExpanded && shouldTruncate && '...'}</p>
        
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show more
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}
