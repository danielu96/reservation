import React from 'react'
import ReviewCard from '@/components/reviews/ReviewCard'
import { deleteReviewAction, fetchPropertyReviewsByUser } from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
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
                        <ReviewCard key={review.id} reviewInfo={reviewInfo}>
                            <DeleteReview reviewId={review.id} />
                        </ReviewCard>
                    )
                }
                )}
            </section>
        </>
    )
}
const DeleteReview = ({ reviewId }: { reviewId: string }) => {
    const deleteReview = deleteReviewAction.bind(null, { reviewId });
    return (
        <FormContainer action={deleteReview}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
};


export default ReviewsPage