
import type { Category } from '../types';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  selected: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, selected, onClick }: CategoryCardProps) {
  const IconComponent = Icons[category.icon as keyof typeof Icons];

  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl transition-all ${
        selected
          ? 'bg-blue-600 text-white shadow-lg scale-105'
          : 'bg-white text-gray-800 hover:shadow-md'
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        {/* <IconComponent className="w-8 h-8" /> */}
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className={`text-sm ${selected ? 'text-blue-100' : 'text-gray-600'}`}>
          {category.description}
        </p>
      </div>
    </button>
  );
}