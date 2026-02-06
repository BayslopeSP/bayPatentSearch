import { motion } from 'framer-motion';
import { FileSearch } from 'lucide-react';

interface EmptyStateProps {
  hasSearched: boolean;
}

export function EmptyState({ hasSearched }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card flex flex-col items-center justify-center p-12 text-center"
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
        <FileSearch className="h-10 w-10 text-primary" />
      </div>
      
      {hasSearched ? (
        <>
          <h3 className="mb-2 text-xl font-semibold text-foreground">No patents found</h3>
          <p className="max-w-md text-muted-foreground">
            Try adjusting your query or filters to find what you're looking for.
          </p>
        </>
      ) : (
        <>
          <h3 className="mb-2 text-xl font-semibold text-foreground">Start your search</h3>
          <p className="max-w-md text-muted-foreground">
            Enter keywords, title, abstract, or claims above to discover patents from global databases.
          </p>
        </>
      )}
    </motion.div>
  );
}
