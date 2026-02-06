import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchPayload } from '@/types/patent';

const searchSchema = z.object({
  query: z.string().min(1, 'Please enter a search query'),
  assignee: z.string().optional(),
  inventor: z.string().optional(),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

interface SearchBarProps {
  onSearch: (payload: SearchPayload) => void;
  isLoading?: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
      assignee: '',
      inventor: '',
      fromDate: '',
      toDate: '',
    },
  });

  const onSubmit = (data: SearchFormData) => {
    onSearch({
      query: data.query,
      filters: {
        assignee: data.assignee || '',
        inventor: data.inventor || '',
        fromDate: data.fromDate || '',
        toDate: data.toDate || '',
      },
    });
  };

  const handleClear = () => {
    reset();
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="glass-card p-6 md:p-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Main Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            {...register('query')}
            type="text"
            placeholder="Search by keywords, title, abstract, or claims…"
            className="h-14 pl-12 pr-4 text-base"
          />
          {errors.query && (
            <p className="mt-2 text-sm text-destructive">{errors.query.message}</p>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Advanced Filters
            <motion.span
              animate={{ rotate: showFilters ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </Button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Assignee</label>
              <Input {...register('assignee')} placeholder="e.g., IBM, Google" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Inventor</label>
              <Input {...register('inventor')} placeholder="e.g., John Smith" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">From Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input {...register('fromDate')} type="date" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">To Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input {...register('toDate')} type="date" className="pl-10" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={handleClear}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            Clear
          </Button>
          <Button
            type="submit"
            variant="brand"
            size="lg"
            disabled={isLoading}
            className="gap-2"
          >
            <Search className="h-4 w-4" />
            {isLoading ? 'Searching...' : 'Search Patents'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
