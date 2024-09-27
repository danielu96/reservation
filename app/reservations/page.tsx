import React from 'react'
import { fetchReservations } from '@/utils/actions'
import Link from 'next/link';
import EmptyList from '@/components/home/EmptyList';
import { formatDate } from '@/utils/format';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

async function ReservationsPage() {
    const reservations = await fetchReservations();
    if (reservations.length === 0) {
        return <EmptyList />;
    }

    return (
        <div>
            <h1 className='mt-2 mb-3'>Total reservations: {reservations.length}</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Check in</TableHead>
                        <TableHead>Check out</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reservations.map((item) => {
                        const { id, checkIn, checkOut } = item;
                        const { id: propertyId, name, country, price } = item.property;
                        const startDate = formatDate(checkIn);
                        const endDate = formatDate(checkOut)
                        return (
                            <TableRow key={id}>
                                <TableCell>
                                    <Link
                                        href={`/properties/${propertyId}`}
                                        className='underline text-muted-foreground tracking-wide'
                                    >
                                        {name}
                                    </Link>
                                </TableCell>
                                <TableCell>{country}</TableCell>
                                <TableCell>{price}</TableCell>
                                <TableCell>{startDate}</TableCell>
                                <TableBody>{endDate}</TableBody>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default ReservationsPage
