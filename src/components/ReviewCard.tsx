import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Review } from '../types';

interface ReviewCardProps {
  review: Review;
  onLike: (id: string) => void;
  onHelpful: (id: string) => void;
}

export default function ReviewCard({ review, onLike, onHelpful }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{review.title}</h3>
          <p className="text-sm text-gray-500">
            Posted by {review.author} • {new Date(review.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{review.description}</p>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <button
          onClick={() => onLike(review.id)}
          className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
        >
          <ThumbsUp className="w-4 h-4" />
          <span>{review.likes} Likes</span>
        </button>
        <button
          onClick={() => onHelpful(review.id)}
          className="flex items-center space-x-1 hover:text-green-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{review.helpful} Found Helpful</span>
        </button>
      </div>
    </div>
  );
}