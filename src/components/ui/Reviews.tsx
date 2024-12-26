"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/men/12.jpg",
      display_name: "John Doe"
    },
    heading: "Great product",
    rating: 5,
    body: "I love this product. It's amazing.",
    media: [
      {
        id: 1,
        url: "https://via.placeholder.com/150"
      }
    ]
  },
  {
    id: 2,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
      display_name: "Jane Smith"
    },
    heading: "Good value for money",
    rating: 4,
    body: "The product is worth the price.",
    media: [
      {
        id: 2,
        url: "https://via.placeholder.com/150/0000FF/808080"
      }
    ]
  },
  {
    id: 3,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/women/3.jpg",
      display_name: "Alice Johnson"
    },
    heading: "Not bad",
    rating: 3,
    body: "The product is okay, but could be better.",
    media: [
      {
        id: 3,
        url: "https://via.placeholder.com/150/FF0000/FFFFFF"
      }
    ]
  },
  {
    id: 4,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
      display_name: "Bob Brown"
    },
    heading: "Excellent",
    rating: 5,
    body: "Exceeded my expectations!",
    media: [
      {
        id: 4,
        url: "https://via.placeholder.com/150/FFFF00/000000"
      }
    ]
  },
  {
    id: 5,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/women/5.jpg",
      display_name: "Cathy Green"
    },
    heading: "Pretty good",
    rating: 4,
    body: "I'm satisfied with this product.",
    media: [
      {
        id: 5,
        url: "https://via.placeholder.com/150/00FF00/000000"
      }
    ]
  },
  {
    id: 6,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/men/6.jpg",
      display_name: "David White"
    },
    heading: "Could be better",
    rating: 3,
    body: "The product is average.",
    media: [
      {
        id: 6,
        url: "https://via.placeholder.com/150/0000FF/FFFFFF"
      }
    ]
  },
  {
    id: 7,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/women/7.jpg",
      display_name: "Eva Black"
    },
    heading: "Fantastic",
    rating: 5,
    body: "I love it! Highly recommend.",
    media: [
      {
        id: 7,
        url: "https://via.placeholder.com/150/FF00FF/000000"
      }
    ]
  },
  {
    id: 8,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/men/8.jpg",
      display_name: "Frank Blue"
    },
    heading: "Not what I expected",
    rating: 2,
    body: "The product did not meet my expectations.",
    media: [
      {
        id: 8,
        url: "https://via.placeholder.com/150/00FFFF/000000"
      }
    ]
  },
  {
    id: 9,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/women/9.jpg",
      display_name: "Grace Yellow"
    },
    heading: "Very good",
    rating: 4,
    body: "I'm happy with this purchase.",
    media: [
      {
        id: 9,
        url: "https://via.placeholder.com/150/FFFF00/FFFFFF"
      }
    ]
  },
  {
    id: 10,
    customer: {
      avatar_url: "https://randomuser.me/api/portraits/men/10.jpg",
      display_name: "Henry Purple"
    },
    heading: "Just okay",
    rating: 3,
    body: "It's an okay product.",
    media: [
      {
        id: 10,
        url: "https://via.placeholder.com/150/800080/FFFFFF"
      }
    ]
  }
];

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  const showMoreReviews = () => {
    setVisibleReviews(prev => prev + 2);
  };

  return (
    <div className="flex flex-col text-center my-7 gap-4 ">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="flex flex-wrap gap-2 text-start md:justify-around md:gap-1">
        {reviews.slice(0, visibleReviews).map(review =>
          <div
            className="w-full flex flex-col gap-2 ring-1 ring-gold rounded-sm px-2 py-3 md:w-1/4"
            key={review.id}
          >
            {/* USER */}
            <div className="flex items-center gap-4 font-medium">
              <Image
                src={review.customer.avatar_url}
                alt={review.customer.display_name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>
                {review.customer.display_name}
              </span>
            </div>

            {/* DESC */}
            {review.heading &&
              <p>
                {review.heading}
              </p>}
            {review.body &&
              <p>
                {review.body}
              </p>}
            {/* STARS */}
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, index) =>
                <Image
                  src="/star.png"
                  alt="star"
                  key={index}
                  width={16}
                  height={16}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {visibleReviews < reviews.length &&
        <div className="flex justify-center">
          <button
            className="px-4 py-2 border border-gold text-gold  shadow-xl rounded"
            onClick={showMoreReviews}
          >
            Show More
          </button>
        </div>}
    </div>
  );
};

export default Reviews;
