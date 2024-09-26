import React from 'react'
import { fetchRentals } from '@/utils/actions'

async function RentalsPage() {
    const rentals = await fetchRentals()
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