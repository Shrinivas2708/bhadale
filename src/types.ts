export interface Review {
  id: string;
  category: 'academics' | 'facilities' | 'services' | 'campus-life';
  title: string;
  description: string;
  rating: number;
  author: string;
  timestamp: string;
  likes: number;
  helpful: number;
}

export interface Category {
  id: 'academics' | 'facilities' | 'services' | 'campus-life';
  name: string;
  description: string;
  icon: string;
}