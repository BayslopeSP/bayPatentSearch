import { motion } from 'framer-motion';

export function SearchResultSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-6"
        >
          {/* Title skeleton */}
          <div className="mb-4 h-6 w-3/4 animate-pulse rounded-lg bg-muted/50" />
          
          {/* Meta skeleton */}
          <div className="mb-4 flex gap-4">
            <div className="h-4 w-32 animate-pulse rounded bg-muted/50" />
            <div className="h-4 w-28 animate-pulse rounded bg-muted/50" />
            <div className="h-4 w-24 animate-pulse rounded bg-muted/50" />
          </div>
          
          {/* Tabs skeleton */}
          <div className="mb-4 flex gap-2">
            <div className="h-10 w-24 animate-pulse rounded-lg bg-muted/50" />
            <div className="h-10 w-24 animate-pulse rounded-lg bg-muted/50" />
            <div className="h-10 w-24 animate-pulse rounded-lg bg-muted/50" />
          </div>
          
          {/* Content skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-muted/50" />
            <div className="h-4 w-full animate-pulse rounded bg-muted/50" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted/50" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
