import React from 'react'
import ReviewCard from '@/components/reviews/ReviewCard'
import { fetchPropertyReviewsByUser } from '@/utils/actions'
async function ReviewsPage() {
    const reviews = await fetchPropertyReviewsByUser();
    return (
        <>
            <section>
                <h1>Reviews</h1>
                {reviews.map((review) => {
                    const { comment, rating } = review
                    const { name, image } = review.property
                    const reviewInfo = {
                        name,
                        rating,
                        comment,
                        image,
                    }
                    return (
                        <ReviewCard key={review.id} reviewInfo={reviewInfo}></ReviewCard>
                    )
                }
                )}
            </section>
        </>
    )
}

export default ReviewsPage