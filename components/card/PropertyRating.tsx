import { fetchPropertyRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

async function PropertyRating({
    propertyId,
    inPage,
}: {
    propertyId: string;
    inPage: boolean;
}) {
    const { rating, count } = await fetchPropertyRating(propertyId);
    if (count === 0) return null;
    const countText = count === 1 ? 'review' : 'reviews';
    const countValue = `(${count}) ${inPage ? countText : ''}`;
    return (
        <>
            <div>
                <FaStar className='w-3 h-3' />
                {rating}{countValue}
            </div>
        </>
    )
}

export default PropertyRating