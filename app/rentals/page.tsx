import React from 'react'
import { fetchRentals } from '@/utils/actions'
import EmptyList from '@/components/home/EmptyList';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

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
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rentals.map((rental) => {
                        const { id: propertyId, name, price } = rental;
                        return (
                            <TableRow key={propertyId}>
                                <TableCell>{name}</TableCell>
                                <TableCell>{price}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
export default RentalsPage;