
import React from 'react';
import { Flame, Calendar } from 'lucide-react';

interface ReadingStreakProps {
  streak: number;
  totalDays?: number;
}

const ReadingStreak = ({ streak, totalDays = 35 }: ReadingStreakProps) => {
  // 최근 35일간의 데이터를 생성 (실제로는 API에서 받아올 데이터)
  const generateStreakData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = totalDays - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // 연속 읽기 기간 내에 있는지 확인
      const isActive = i >= totalDays - streak;
      // 랜덤하게 일부 날짜에 읽기 기록 추가 (실제로는 실제 데이터 사용)
      const hasReading = isActive || Math.random() > 0.7;
      
      data.push({
        date: date.toISOString().split('T')[0],
        count: hasReading ? Math.floor(Math.random() * 4) + 1 : 0,
        isInStreak: i >= totalDays - streak
      });
    }
    
    return data;
  };

  const streakData = generateStreakData();
  
  const getIntensityClass = (count: number, isInStreak: boolean) => {
    if (count === 0) return 'bg-muted/30';
    if (isInStreak) {
      if (count >= 3) return 'bg-primary shadow-sm';
      if (count >= 2) return 'bg-primary/80';
      return 'bg-primary/60';
    }
    if (count >= 3) return 'bg-accent/60';
    if (count >= 2) return 'bg-accent/40';
    return 'bg-accent/20';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primary/20">
            <Flame className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-lg font-bold text-foreground">연속 읽기</h4>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{streak}일</div>
          <div className="text-xs text-muted-foreground">연속 기록</div>
        </div>
      </div>
      
      {/* 잔디 차트 */}
      <div className="space-y-3">
        <div className="grid grid-cols-7 gap-1.5">
          {streakData.map((day, index) => (
            <div
              key={day.date}
              className={`w-4 h-4 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer ${getIntensityClass(day.count, day.isInStreak)}`}
              title={`${day.date}: ${day.count}개 읽음`}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>5주 전</span>
          </div>
          <div className="flex items-center gap-2">
            <span>적게</span>
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded bg-muted/30" />
              <div className="w-2.5 h-2.5 rounded bg-accent/40" />
              <div className="w-2.5 h-2.5 rounded bg-primary/60" />
              <div className="w-2.5 h-2.5 rounded bg-primary" />
            </div>
            <span>많이</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
        <Flame className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">계속 이어가세요!</span>
      </div>
    </div>
  );
};

export default ReadingStreak;
