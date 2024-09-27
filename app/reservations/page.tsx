import React from 'react'
import { fetchReservations } from '@/utils/actions'
import Link from 'next/link';

async function ReservationsPage() {
    const reservations = await fetchReservations();
    return (
        <div>
            <h1>ReservationsPage</h1>
            {reservations.map((item) => {
                const { id } = item;
                const { id: propertyId, name, country, price } = item.property;
                return (
                    <div key={id}>
                        <Link
                            href={`/properties/${propertyId}`}
                            className='underline text-muted-foreground tracking-wide'
                        >
                            {name}
                        </Link>
                        {country}{price}</div>
                )
            })}

        </div>
    )
}

export default ReservationsPage
