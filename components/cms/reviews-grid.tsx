import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const GOOGLE_API_KEY = "AIzaSyAX9bT208rk-JcH9aUEjUsicJlsWGctiqk";
const GOOGLE_PLACE_ID = "YOUR_GOOGLE_PLACE_ID";

const ReviewsGrid = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        return data.result?.reviews || [];
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        return [];
      }
    };

    const fetchAllReviews = async () => {
      const [googleReviews] = await Promise.all([fetchGoogleReviews()]);

      setReviews(googleReviews);
      setLoading(false);
    };

    fetchAllReviews();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <Card key={index} className="p-4 shadow-md">
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  {review.source === "Google" ? (
                    <FaGoogle className="text-red-500" />
                  ) : (
                    <MdRateReview className="text-yellow-500" />
                  )}
                  <span className="font-bold">{review?.source}</span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">"{review.text}"</p>
                <p className="text-sm text-gray-500 mt-2">
                  - {review.author_name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsGrid;
