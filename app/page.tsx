import React from 'react'
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import LoadingCards from '@/components/card/LoadingCards';
import { Suspense } from 'react';

function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  return (
    <section>
      <CategoriesList
        search={searchParams.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          search={searchParams.search}
        />
      </Suspense>
    </section>
  );
}
export default Home;




