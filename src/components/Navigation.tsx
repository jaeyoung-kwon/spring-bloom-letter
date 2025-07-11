
import React from 'react';
import { Mail, Star, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentPage: 'today' | 'recommendations';
  onPageChange: (page: 'today' | 'recommendations') => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  return (
    <nav className="glass-strong rounded-3xl p-6 mb-8 organic-shadow">
      <div className="flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 coral-gradient rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">봄</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">봄봄</h1>
            <p className="text-sm text-muted-foreground font-medium">당신의 하루에 찾아오는 작은 설렘</p>
          </div>
        </div>

        {/* 메인 네비게이션 */}
        <div className="flex items-center gap-3">
          <Button
            variant={currentPage === 'today' ? 'default' : 'ghost'}
            onClick={() => onPageChange('today')}
            className={`rounded-2xl px-6 py-3 font-semibold transition-all duration-300 ${
              currentPage === 'today'
                ? 'coral-gradient text-white shadow-lg hover:shadow-xl'
                : 'text-foreground/70 hover:text-primary hover:bg-primary/10 hover:shadow-md'
            }`}
          >
            <Mail className="w-5 h-5 mr-2" />
            오늘의 뉴스레터
          </Button>
          <Button
            variant={currentPage === 'recommendations' ? 'default' : 'ghost'}
            onClick={() => onPageChange('recommendations')}
            className={`rounded-2xl px-6 py-3 font-semibold transition-all duration-300 ${
              currentPage === 'recommendations'
                ? 'coral-gradient text-white shadow-lg hover:shadow-xl'
                : 'text-foreground/70 hover:text-primary hover:bg-primary/10 hover:shadow-md'
            }`}
          >
            <Star className="w-5 h-5 mr-2" />
            뉴스레터 추천
          </Button>
        </div>

        {/* 사용자 메뉴 */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl w-12 h-12 text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-md"
          >
            <Settings className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl w-12 h-12 text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-md"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
