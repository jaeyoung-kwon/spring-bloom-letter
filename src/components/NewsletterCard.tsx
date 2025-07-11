
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
  thumbnail?: string;
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
  thumbnail,
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
      <div className="flex gap-4">
        {/* 썸네일 */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
            {thumbnail ? (
              <img 
                src={`https://images.unsplash.com/${thumbnail}?w=120&h=120&fit=crop&crop=center`} 
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="flex-1 min-w-0">
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
      </div>
    </div>
  );
};

export default NewsletterCard;
