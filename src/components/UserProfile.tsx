
import React from 'react';
import { Copy, Sparkles, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ReadingStreak from './ReadingStreak';

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
      title: "이메일이 복사되었습니다! ✨",
      description: email,
    });
  };

  return (
    <div className="space-y-6">
      {/* 사용자 정보 */}
      <div className="floating-card rounded-3xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl peach-gradient flex items-center justify-center text-white text-xl font-bold shadow-lg">
              {profileImage ? (
                <img src={profileImage} alt={name} className="w-full h-full rounded-2xl object-cover" />
              ) : (
                name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-1">{name}</h2>
            <p className="text-sm text-primary font-medium">{greeting}</p>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl cursor-pointer hover:from-primary/15 hover:to-accent/15 transition-all duration-300 micro-interaction"
          onClick={handleCopyEmail}
        >
          <span className="text-sm text-foreground/80 flex-1 font-medium">{email}</span>
          <div className="p-2 rounded-xl bg-white/50 hover:bg-white/70 transition-colors">
            <Copy className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* 읽기 현황 */}
      <div className="floating-card rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/20">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-lg text-foreground">읽기 현황</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-muted-foreground font-medium">오늘의 진행률</span>
              <span className="text-lg font-bold text-primary">{todayProgress}%</span>
            </div>
            <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
              <div 
                className="h-3 rounded-full peach-gradient transition-all duration-700 ease-out organic-shadow"
                style={{ width: `${todayProgress}%` }}
              />
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground/70 font-medium">주간 목표</span>
              <span className="text-lg font-bold text-foreground">{weeklyGoal}개</span>
            </div>
            <div className="text-xs text-primary font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              이번 주 목표까지 화이팅! 💪
            </div>
          </div>
        </div>
      </div>

      {/* 연속 읽기 잔디 */}
      <div className="floating-card rounded-3xl p-6">
        <ReadingStreak streak={streak} />
      </div>
    </div>
  );
};

export default UserProfile;
