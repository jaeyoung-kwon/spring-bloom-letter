
import React from 'react';

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
    if (count === 0) return 'bg-gray-100';
    if (isInStreak) {
      if (count >= 3) return 'bg-green-600';
      if (count >= 2) return 'bg-green-500';
      return 'bg-green-400';
    }
    if (count >= 3) return 'bg-green-300';
    if (count >= 2) return 'bg-green-200';
    return 'bg-green-100';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">연속 읽기</h4>
        <span className="text-lg font-bold text-green-600">{streak}일</span>
      </div>
      
      {/* 잔디 차트 */}
      <div className="space-y-2">
        <div className="grid grid-cols-7 gap-1">
          {streakData.map((day, index) => (
            <div
              key={day.date}
              className={`w-3 h-3 rounded-sm ${getIntensityClass(day.count, day.isInStreak)}`}
              title={`${day.date}: ${day.count}개 읽음`}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>5주 전</span>
          <div className="flex items-center gap-1">
            <span>적게</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-sm bg-gray-100"></div>
              <div className="w-2 h-2 rounded-sm bg-green-200"></div>
              <div className="w-2 h-2 rounded-sm bg-green-400"></div>
              <div className="w-2 h-2 rounded-sm bg-green-600"></div>
            </div>
            <span>많이</span>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500">🔥 계속 이어가세요!</div>
    </div>
  );
};

export default ReadingStreak;
