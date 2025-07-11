
import React from 'react';
import { Mail, Star, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentPage: 'today' | 'recommendations';
  onPageChange: (page: 'today' | 'recommendations') => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  return (
    <nav className="glass-strong rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">봄</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">봄봄</h1>
            <p className="text-xs text-gray-500">당신의 하루에 찾아오는 작은 설렘</p>
          </div>
        </div>

        {/* 메인 네비게이션 */}
        <div className="flex items-center gap-2">
          <Button
            variant={currentPage === 'today' ? 'default' : 'ghost'}
            onClick={() => onPageChange('today')}
            className={`rounded-xl ${
              currentPage === 'today'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
            }`}
          >
            <Mail className="w-4 h-4 mr-2" />
            오늘의 뉴스레터
          </Button>
          <Button
            variant={currentPage === 'recommendations' ? 'default' : 'ghost'}
            onClick={() => onPageChange('recommendations')}
            className={`rounded-xl ${
              currentPage === 'recommendations'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
            }`}
          >
            <Star className="w-4 h-4 mr-2" />
            뉴스레터 추천
          </Button>
        </div>

        {/* 사용자 메뉴 */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="rounded-xl text-gray-600 hover:text-green-600">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-xl text-gray-600 hover:text-green-600">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
