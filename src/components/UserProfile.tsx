
import React from 'react';
import { Copy, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface UserProfileProps {
  name: string;
  email: string;
  streak: number;
  todayProgress: number;
  weeklyGoal: number;
  profileImage?: string;
  greeting: string;
}

const UserProfile = ({
  name,
  email,
  streak,
  todayProgress,
  weeklyGoal,
  profileImage,
  greeting
}: UserProfileProps) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "이메일이 복사되었습니다!",
      description: email,
    });
  };

  return (
    <div className="space-y-6">
      {/* 사용자 정보 */}
      <div className="glass-strong rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
            {profileImage ? (
              <img src={profileImage} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0).toUpperCase()
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-600">{greeting}</p>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 p-3 bg-gray-50/80 rounded-lg cursor-pointer hover:bg-gray-100/80 transition-colors"
          onClick={handleCopyEmail}
        >
          <span className="text-sm text-gray-600 flex-1">{email}</span>
          <Copy className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* 읽기 현황 */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">읽기 현황</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">연속 읽기</span>
              <span className="text-lg font-bold text-green-600">{streak}일</span>
            </div>
            <div className="text-xs text-gray-500">🔥 계속 이어가세요!</div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">오늘의 진행률</span>
              <span className="text-sm font-medium text-gray-900">{todayProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${todayProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">주간 목표</span>
              <span className="text-sm font-medium text-gray-900">{weeklyGoal}개</span>
            </div>
            <div className="text-xs text-gray-500">이번 주 목표까지 화이팅! 💪</div>
          </div>
        </div>
      </div>

      {/* 빠른 실행 */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">빠른 실행</h3>
        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl">
          <Plus className="w-4 h-4 mr-2" />
          뉴스레터 추가하기
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
