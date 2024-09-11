import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyDetails from '@/components/properties/PropertyDetails';
import UserInfo from '@/components/properties/UserInfo';
import { Separator } from '@/components/ui/separator';
import Description from '@/components/properties/Description';
import Amenities from '@/components/properties/Amenities';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
    () => import('@/components/properties/PropertyMap'),
    {
        ssr: false,
        loading: () => <Skeleton className='h-[400px] w-full' />,
    }
);



async function PropertyDetailsPage({ params }: { params: { id: string } }) {
    const property = await fetchPropertyDetails(params.id);
    if (!property) redirect('/');
    const { baths, bedrooms, beds, guests } = property;
    const details = { baths, bedrooms, beds, guests };
    const firstName = property.profile.firstName;
    const profileImage = property.profile.profileImage;
    return (
        <section>
            <BreadCrumbs name={property.name} />
            <header className='flex justify-between items-center mt-4'>
                <h1 className='text-4xl font-bold '>{property.tagline}</h1>
                <div className='flex items-center gap-x-4'>
                    {/* share button */}
                    {/* <FavoriteToggleButton propertyId={property.id} /> */}
                </div>
            </header>
            <ImageContainer mainImage={property.image} name={property.name} />
            <PropertyDetails details={details} />
            <UserInfo profile={{ firstName, profileImage }} />
            <Separator className='mt-4' />
            <Description description={property.description} />
            <Amenities amenities={property.amenities} />
            <DynamicMap countryCode={property.country} />
        </section>
    );
}
export default PropertyDetailsPage;