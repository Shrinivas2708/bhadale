import  { useState } from 'react';
import type { Review, Category } from '../types';
import ReviewCard from './ReviewCard';
import CategoryCard from './CategoryCard';
import ReviewForm from './ReviewForm';

const categories: Category[] = [
  {
    id: 'academics',
    name: 'Academics',
    description: 'Course quality, professors, and learning resources',
    icon: 'GraduationCap'
  },
  {
    id: 'facilities',
    name: 'Facilities',
    description: 'Buildings, labs, and campus infrastructure',
    icon: 'Building2'
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Student support, administration, and amenities',
    icon: 'HeartHandshake'
  },
  {
    id: 'campus-life',
    name: 'Campus Life',
    description: 'Events, clubs, and student activities',
    icon: 'Users'
  }
];

const initialReviews: Review[] = [
  {
    id: '1',
    category: 'academics',
    title: 'Excellent Computer Science Program',
    description: 'The CS department offers cutting-edge courses with hands-on projects. Professors are highly knowledgeable and always available for support.',
    rating: 5,
    author: 'John Doe',
    timestamp: new Date('2024-03-10').toISOString(),
    likes: 24,
    helpful: 18
  },
  {
    id: '2',
    category: 'facilities',
    title: 'Modern Library Resources',
    description: 'The newly renovated library provides excellent study spaces and up-to-date digital resources. Perfect for both individual and group work.',
    rating: 4,
    author: 'Jane Smith',
    timestamp: new Date('2024-03-09').toISOString(),
    likes: 15,
    helpful: 12
  }
];

function HomePage() {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showForm, setShowForm] = useState(false);
  
    const filteredReviews = selectedCategory === 'all'
      ? reviews
      : reviews.filter(review => review.category === selectedCategory);
  
    const handleLike = (id: string) => {
      setReviews(reviews.map(review =>
        review.id === id ? { ...review, likes: review.likes + 1 } : review
      ));
    };
  
    const handleHelpful = (id: string) => {
      setReviews(reviews.map(review =>
        review.id === id ? { ...review, helpful: review.helpful + 1 } : review
      ));
    };
  interface reviewData{
    newReview: Review;
    setShowForm: boolean;
    setReviews: Review[];
  
  }
    const handleSubmitReview = (reviewData: reviewData) => {
      const newReview: Review = {
          id: Date.now().toString(),
          ...reviewData,
          author: 'Anonymous User',
          timestamp: new Date().toISOString(),
          likes: 0,
          helpful: 0,
          category: 'academics',
          title: '',
          description: '',
          rating: 0
      };
      setReviews([newReview, ...reviews]);
      setShowForm(false);
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Campus Life Review System</h1>
            <p className="text-xl text-blue-100 mb-8">
              Share your experiences and help improve our campus community
            </p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {showForm ? 'Close Form' : 'Write a Review'}
            </button>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8">
          {/* Review Form */}
          {showForm && (
            <div className="mb-8">
              <ReviewForm onSubmit={handleSubmitReview} />
            </div>
          )}
  
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
  
          {/* Reviews */}
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onLike={handleLike}
                onHelpful={handleHelpful}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default HomePage