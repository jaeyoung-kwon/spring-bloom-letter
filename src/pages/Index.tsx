
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import TodayNewsletters from '@/components/TodayNewsletters';
import NewsletterRecommendations from '@/components/NewsletterRecommendations';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'today' | 'recommendations'>('today');

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        {currentPage === 'today' ? <TodayNewsletters /> : <NewsletterRecommendations />}
      </div>
    </div>
  );
};

export default Index;
