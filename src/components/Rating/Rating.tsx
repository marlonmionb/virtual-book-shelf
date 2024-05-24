import React, { useState } from "react";

interface RatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover] = useState<number>(0);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    if (onRatingChange) {
      onRatingChange(ratingValue);
    }
  };

  return (
    <div className="flex ml-1 space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className={`cursor-pointer text-2xl transition-colors duration-200 ${
              ratingValue <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            onClick={() => handleClick(ratingValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
