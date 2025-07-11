
import React, { useState } from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RecommendationCard from './RecommendationCard';

const NewsletterRecommendations = () => {
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', '기술', '비즈니스', '건강', '문화', '라이프스타일', '교육'];

  const mockRecommendations = [
    {
      id: 1,
      title: "테크 인사이트 위클리",
      description: "최신 기술 트렌드와 스타트업 소식을 매주 정리해서 전해드립니다. AI, 블록체인, 메타버스 등 혁신 기술에 대한 깊이 있는 분석을 제공합니다.",
      publisher: "테크크런치 코리아",
      category: "기술",
      subscribers: "12.5K",
      frequency: "주 1회",
      rating: 4.8
    },
    {
      id: 2,
      title: "헬시 라이프 가이드",
      description: "건강한 삶을 위한 실용적인 팁과 최신 의학 정보를 제공합니다. 운동, 영양, 정신건강까지 종합적으로 다룹니다.",
      publisher: "헬스케어 매거진",
      category: "건강",
      subscribers: "8.2K",
      frequency: "주 2회",
      rating: 4.6
    },
    {
      id: 3,
      title: "비즈니스 인사이트",
      description: "글로벌 비즈니스 트렌드와 투자 정보, 성공 사례를 통해 비즈니스 인사이트를 제공합니다.",
      publisher: "비즈니스 위클리",
      category: "비즈니스",
      subscribers: "15.7K",
      frequency: "주 3회",
      rating: 4.9
    },
    {
      id: 4,
      title: "문화 다이제스트",
      description: "책, 영화, 음악, 전시회 등 다양한 문화 콘텐츠를 소개하고 리뷰합니다. 깊이 있는 문화 비평도 함께 제공됩니다.",
      publisher: "문화저널",
      category: "문화",
      subscribers: "6.3K",
      frequency: "주 1회",
      rating: 4.7
    },
    {
      id: 5,
      title: "미니멀 라이프",
      description: "심플하고 의미 있는 삶을 위한 라이프스타일 팁을 제공합니다. 정리정돈, 미니멀 인테리어, 지속가능한 소비 등을 다룹니다.",
      publisher: "라이프스타일 매거진",
      category: "라이프스타일",
      subscribers: "9.1K",
      frequency: "주 1회",
      rating: 4.5
    },
    {
      id: 6,
      title: "온라인 교육 트렌드",
      description: "최신 온라인 교육 플랫폼과 학습 방법을 소개합니다. 효과적인 자기계발과 평생학습을 위한 가이드를 제공합니다.",
      publisher: "에듀테크 리뷰",
      category: "교육",
      subscribers: "4.8K",
      frequency: "격주",
      rating: 4.4
    }
  ];

  const filteredRecommendations = activeCategory === '전체' 
    ? mockRecommendations 
    : mockRecommendations.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 배너 */}
        <div className="glass-strong rounded-2xl p-8 mb-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 coral-gradient opacity-10"></div>
          <div className="max-w-2xl mx-auto relative z-10">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              새로운 뉴스레터를 발견해보세요 ✨
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              당신의 관심사에 맞는 고품질 뉴스레터를 추천해드립니다
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <TrendingUp className="w-4 h-4 text-primary" />
              매주 새로운 추천 뉴스레터가 업데이트됩니다
            </div>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-6 py-2 transition-all font-semibold ${
                  activeCategory === category
                    ? 'coral-gradient text-white shadow-lg hover:shadow-xl'
                    : 'bg-white/50 hover:bg-primary/10 text-gray-700 hover:text-primary border-primary/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* 추천 뉴스레터 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((newsletter) => (
            <RecommendationCard
              key={newsletter.id}
              title={newsletter.title}
              description={newsletter.description}
              publisher={newsletter.publisher}
              category={newsletter.category}
              subscribers={newsletter.subscribers}
              frequency={newsletter.frequency}
              rating={newsletter.rating}
              onSubscribe={() => console.log('Subscribe to:', newsletter.title)}
            />
          ))}
        </div>

        {filteredRecommendations.length === 0 && (
          <div className="glass-card rounded-2xl p-12 text-center">
            <Star className="w-16 h-16 text-primary/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              해당 카테고리의 추천 뉴스레터가 없습니다
            </h3>
            <p className="text-gray-500">다른 카테고리를 선택해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterRecommendations;
