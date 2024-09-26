import React from 'react'
import { fetchRentals } from '@/utils/actions'
import EmptyList from '@/components/home/EmptyList';

async function RentalsPage() {
    const rentals = await fetchRentals()
    if (rentals.length === 0) {
        return (
            <EmptyList
                heading='No rentals to display.'
                message="create a rental."
            />
        );
    }

    return (
        <div>
            {rentals.map((rental) => {
                const { id: propertyId, name, price } = rental;
                return (
                    <div key={propertyId}>{name}= {price}</div>
                )
            })}
        </div>
    )
}
export default RentalsPage;