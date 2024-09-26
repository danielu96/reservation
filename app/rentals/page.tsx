import React from 'react'
import { fetchRentals, deleteRentalAction } from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
import EmptyList from '@/components/home/EmptyList';
import Link from 'next/link';
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
            <h5>Rentals: {rentals.length}</h5>
            <Table>
                <TableCaption>All Yours Rentals</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Nights</TableHead>
                        <TableHead>Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rentals.map((rental) => {
                        const { id: propertyId, name, price } = rental;
                        const { totalNightsSum, orderTotalSum } = rental;
                        return (
                            <TableRow key={propertyId}>
                                <TableCell>
                                    <Link href={`/properties/${propertyId}`}>
                                        {name}</Link>
                                </TableCell>
                                <TableCell>{price}</TableCell>
                                <TableCell>{totalNightsSum}</TableCell>
                                <TableCell>{orderTotalSum}</TableCell>
                                <TableCell className='flex items-center gap-2'>
                                    <Link href={`/rentals/${propertyId}/edit`}>
                                        <IconButton actionType='edit'></IconButton>
                                    </Link>
                                    <DeleteRental propertyId={propertyId} />
                                </TableCell>

                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
function DeleteRental({ propertyId }: { propertyId: string }) {
    const deleteRental = deleteRentalAction.bind(null, { propertyId });
    return (
        <FormContainer action={deleteRental}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
}


export default RentalsPage;