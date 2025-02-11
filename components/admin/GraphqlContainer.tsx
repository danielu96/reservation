"use client";

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

const graphqlClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SUPABASE_URL + '/graphql/v1',
    cache: new InMemoryCache(),
    headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
    },
});

const FETCH_PROPERTIES = gql`
    query FetchProperties {
        reviewCollection {
            edges {
                node {
                    id                
                    rating
                    comment
                }
            }
        }
    }
`;

const Page: React.FC = () => {
    const { data, loading: propertiesLoading, error: propertiesError } = useQuery(FETCH_PROPERTIES, { client: graphqlClient });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 3) % data.reviewCollection.edges.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, [data]);

    if (propertiesLoading) {
        return <div>Loading...</div>;
    }

    if (propertiesError) {
        return <div>{propertiesError.message}</div>;
    }

    const properties = data.reviewCollection.edges.map((edge: any) => edge.node);
    const displayedProperties = properties.slice(currentIndex, currentIndex + 3);

    return (
        <div className='my-10 gap-6 items-center grid grid-cols-1 md:grid-cols-3 p-5'>
            {displayedProperties.map((property: any) => (
                <div className='bg-primary-foreground shadow-md rounded-lg p-6 text-center transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn' key={property.id}>
                    <h1 className='font-bold text-xl mb-2'>{property.rating}</h1>
                    <p className='text-gray-700'>{property.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default Page;