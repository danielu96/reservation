import React from 'react'
import { fetchRentalDetails, updatePropertyImageAction } from '@/utils/actions'
import ImageInputContainer from '@/components/form/ImageInputContainer';
import { redirect } from 'next/navigation';


async function EditRentalPage({ params }: { params: { id: string } }) {
    const property = await fetchRentalDetails(params.id);
    if (!property) redirect('/');

    return (
        <section>
            <h4 className='mb-4'>Edit</h4>
            <div>
                <ImageInputContainer
                    name={property.name}
                    text='Update Image'
                    action={updatePropertyImageAction}
                    image={property.image}
                >
                    <input type='hidden' name='id' value={property.id} />
                </ImageInputContainer>
            </div>

        </section>
    )
}

export default EditRentalPage