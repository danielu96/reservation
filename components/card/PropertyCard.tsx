import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { PropertyCardProps } from '@/utils/types';

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
    const { name, image, price } = property;
    const { id: propertyId, tagline } = property;
    return (
        <article>
            <Link href={`/properties/${propertyId}`}>
                <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
                    <Image
                        src={image}
                        fill
                        sizes='(max-width:768px) 100vw, 50vw'
                        alt={name}
                        className='rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500'
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm font-semibold mt-1'>
                        {name.substring(0, 30)}
                    </h3>
                </div>
                <p className='text-sm mt-1 text-muted-foreground'>
                    {tagline.substring(0, 40)}
                </p>
                <div className='flex justify-between items-center mt-1'>
                    <p className='text-sm mt-1'>
                        <span className='font-semibold'>{price} </span>
                        night
                    </p>
                </div>
            </Link>
        </article>
    )
}

export default PropertyCard