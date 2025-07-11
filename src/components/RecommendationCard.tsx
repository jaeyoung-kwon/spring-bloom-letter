
import React from 'react';
import { Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface RecommendationCardProps {
  title: string;
  description: string;
  publisher: string;
  category: string;
  subscribers: string;
  frequency: string;
  rating: number;
  image?: string;
  onSubscribe?: () => void;
}

const RecommendationCard = ({
  title,
  description,
  publisher,
  category,
  subscribers,
  frequency,
  rating,
  image,
  onSubscribe
}: RecommendationCardProps) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl group">
      {/* 이미지 영역 */}
      <div className="h-40 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-80">
              {title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-gray-700 text-xs">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium text-gray-700">{rating}</span>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{publisher}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {subscribers}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {frequency}
          </div>
        </div>

        <Button 
          onClick={onSubscribe}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl"
        >
          구독하기
        </Button>
      </div>
    </div>
  );
};

export default RecommendationCard;
