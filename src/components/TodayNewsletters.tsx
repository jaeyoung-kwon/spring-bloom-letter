
import React, { useState } from 'react';
import { Search, Mail, Archive, Filter, Sparkles, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsletterCard from './NewsletterCard';
import UserProfile from './UserProfile';

const TodayNewsletters = () => {
  const [activeTab, setActiveTab] = useState('today');

  const mockNewsletters = [
    {
      id: 1,
      title: "AI 기술의 미래와 우리의 일상 변화",
      publisher: "테크 인사이트",
      preview: "인공지능이 우리 삶에 미치는 영향과 앞으로의 변화에 대해 깊이 있게 다뤄보겠습니다. 최신 AI 트렌드부터 실생활 적용 사례까지...",
      category: "기술",
      publishTime: "2시간 전",
      readTime: "5분",
      thumbnail: "photo-1518770660439-4636190af475",
      isRead: false
    },
    {
      id: 2,
      title: "건강한 아침 루틴 만들기",
      publisher: "헬시 라이프",
      preview: "매일 아침을 활기차게 시작할 수 있는 건강한 루틴들을 소개합니다. 운동, 명상, 영양가 있는 아침식사까지...",
      category: "건강",
      publishTime: "3시간 전",
      readTime: "3분",
      thumbnail: "photo-1581091226825-a6a2a5aee158",
      isRead: true
    },
    {
      id: 3,
      title: "2024년 주목해야 할 스타트업 트렌드",
      publisher: "비즈니스 위클리",
      preview: "올해 가장 주목받는 스타트업들과 그들의 혁신적인 비즈니스 모델을 분석해보겠습니다. 투자 동향과 시장 전망도 함께...",
      category: "비즈니스",
      publishTime: "4시간 전",
      readTime: "7분",
      thumbnail: "photo-1488590528505-98d2b5aba04b",
      isRead: false
    },
    {
      id: 4,
      title: "따뜻한 봄, 새로운 시작을 위한 독서 추천",
      publisher: "북클럽 매거진",
      preview: "봄과 어울리는 따뜻하고 감성적인 책들을 추천드립니다. 새로운 계절, 새로운 마음가짐으로 시작하는 독서 여행...",
      category: "문화",
      publishTime: "5시간 전",
      readTime: "4분",
      thumbnail: "photo-1649972904349-6e44c42644a7",
      isRead: false
    }
  ];

  const unreadCount = mockNewsletters.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            {/* 간단한 헤더 */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">오늘의 뉴스레터</h1>
                {unreadCount > 0 && (
                  <Badge className="bg-primary text-white px-3 py-1">
                    {unreadCount}개의 새 글
                  </Badge>
                )}
              </div>
              <div className="h-px bg-gray-200 mt-4"></div>
            </div>

            {/* 뉴스레터 목록 */}
            <div className="space-y-6">
              {mockNewsletters.length > 0 ? (
                mockNewsletters
                  .sort((a, b) => (a.isRead ? 1 : 0) - (b.isRead ? 1 : 0))
                  .map((newsletter) => (
                    <NewsletterCard
                      key={newsletter.id}
                      title={newsletter.title}
                      publisher={newsletter.publisher}
                      preview={newsletter.preview}
                      category={newsletter.category}
                      publishTime={newsletter.publishTime}
                      readTime={newsletter.readTime}
                      thumbnail={newsletter.thumbnail}
                      isRead={newsletter.isRead}
                      onClick={() => console.log('Navigate to newsletter:', newsletter.id)}
                    />
                  ))
              ) : (
                <div className="p-16 text-center">
                  <div className="p-6 rounded-3xl bg-gray-100 w-fit mx-auto mb-6">
                    <Mail className="w-16 h-16 text-primary/60" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">뉴스레터가 없습니다</h3>
                  <p className="text-gray-600 text-lg">새로운 뉴스레터를 구독해보세요.</p>
                </div>
              )}
            </div>
          </div>

          {/* 사이드바 */}
          <div className="lg:col-span-1 lg:border-l lg:border-gray-200 lg:pl-8">
            <UserProfile
              name="김봄봄"
              email="user@bombon.email"
              streak={7}
              todayProgress={65}
              weeklyGoal={12}
              greeting="오늘도 새로운 배움을 시작해보세요! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayNewsletters;
