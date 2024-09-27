import React from 'react'
import { fetchReservations } from '@/utils/actions'

async function ReservationsPage() {
    const reservations = await fetchReservations();
    return (
        <div>
            <h1>ReservationsPage</h1>
            {reservations.map((item) => {
                const { id } = item;
                const { id: propertyId, name, country, price } = item.property;
                return (
                    <div key={id}>{name}{country}{price}</div>
                )
            })}

        </div>
    )
}

export default ReservationsPage
