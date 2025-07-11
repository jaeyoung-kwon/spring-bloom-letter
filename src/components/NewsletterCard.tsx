
import React from 'react';
import { Clock, Star, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NewsletterCardProps {
  title: string;
  publisher: string;
  preview: string;
  category: string;
  publishTime: string;
  readTime: string;
  isRead?: boolean;
  onClick?: () => void;
}

const NewsletterCard = ({
  title,
  publisher,
  preview,
  category,
  publishTime,
  readTime,
  isRead = false,
  onClick
}: NewsletterCardProps) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group ${
        !isRead ? 'ring-2 ring-green-200' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-green-100/80 text-green-700 text-xs px-2 py-1">
              {category}
            </Badge>
            {!isRead && (
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            )}
          </div>
          <h3 className={`font-semibold text-lg leading-tight mb-2 group-hover:text-green-700 transition-colors ${
            !isRead ? 'text-gray-900' : 'text-gray-600'
          }`}>
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-1">{publisher}</p>
        </div>
        <Star className={`w-5 h-5 transition-colors ${isRead ? 'text-gray-300' : 'text-yellow-400'}`} />
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {preview}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {publishTime}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
