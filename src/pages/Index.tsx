import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Cpu } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { SearchBar } from '@/components/search/SearchBar';
import { PatentResultCard } from '@/components/search/PatentResultCard';
import { PatentDetailModal } from '@/components/search/PatentDetailModal';
import { EmptyState } from '@/components/search/EmptyState';
import { SearchResultSkeleton } from '@/components/search/SearchResultSkeleton';
import { Patent, SearchPayload } from '@/types/patent';
import { mockPatents } from '@/lib/api';

const Index = () => {
  const [results, setResults] = useState<Patent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatent, setSelectedPatent] = useState<Patent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = useCallback(async (payload: SearchPayload) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      // Simulate API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Filter mock data based on query
      const filteredResults = mockPatents.filter((patent) =>
        patent.title.toLowerCase().includes(payload.query.toLowerCase()) ||
        patent.abstract.toLowerCase().includes(payload.query.toLowerCase()) ||
        patent.claims.toLowerCase().includes(payload.query.toLowerCase())
      );
      
      // If no specific match, return all mock data for demo
      setResults(filteredResults.length > 0 ? filteredResults : mockPatents);
    } catch (err) {
      setError('Failed to fetch patents. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleViewDetails = (patent: Patent) => {
    setSelectedPatent(patent);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatent(null);
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Beta</span>
            </div> */}
            
            <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              AI‑Powered
              <br />
              <span className="text-gradient-brand">Patent Search</span>
            </h1>
            
            <p className="max-w-lg text-lg text-muted-foreground">
              Search global patents by title, abstract, claims, and more.
              Powered by intelligent ranking and semantic understanding.
            </p>
          </motion.div>

          {/* Right - Decorative Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card relative overflow-hidden p-8">
              {/* Animated Background */}
              <div className="absolute inset-0 ai-network-bg opacity-50" />
              
              {/* Globe Visualization */}
              <div className="relative flex items-center justify-center py-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="relative h-48 w-48"
                >
                  {/* Orbit rings */}
                  <div className="absolute inset-0 rounded-full border border-primary/30" />
                  <div className="absolute inset-4 rounded-full border border-primary/20" />
                  <div className="absolute inset-8 rounded-full border border-primary/10" />
                  
                  {/* Center globe */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/50 shadow-glow-teal">
                      <Globe className="h-12 w-12 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Orbiting dots */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-glow-peach" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <div className="absolute bottom-4 right-0 h-2 w-2 rounded-full bg-secondary" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="relative mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">10M+</div>
                  <div className="text-sm text-muted-foreground">Patents</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground">
                    <Cpu className="h-5 w-5 text-primary" />
                    AI
                  </div>
                  <div className="text-sm text-muted-foreground">Powered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-xl border border-destructive/50 bg-destructive/10 px-6 py-4 text-center text-destructive"
          >
            {error}
          </motion.div>
        )}

        {/* Results Section */}
        <div className="mt-8">
          {isLoading ? (
            <SearchResultSkeleton />
          ) : results.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">
                  {results.length} patent{results.length !== 1 ? 's' : ''} found
                </h2>
              </div>
              <div className="space-y-4">
                {results.map((patent, index) => (
                  <PatentResultCard
                    key={patent.id}
                    patent={patent}
                    index={index}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <EmptyState hasSearched={hasSearched} />
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <PatentDetailModal
        patent={selectedPatent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </PageShell>
  );
};

export default Index;
