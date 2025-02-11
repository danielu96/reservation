import ChartsContainer from '@/components/admin/ChartsContainer';
import StatsContainer from '@/components/admin/StatsContainer';
import GraphqlContainer from '@/components/admin/GraphqlContainer';
import {
    ChartsLoadingContainer,
    StatsLoadingContainer,
} from '@/components/admin/loading';
import { Suspense } from 'react';
async function AdminPage() {
    return (
        <>
            <Suspense fallback={<StatsLoadingContainer />}>
                <StatsContainer />
            </Suspense>
            <Suspense fallback={<ChartsLoadingContainer />}>
                <ChartsContainer />
            </Suspense>
            <Suspense fallback={<StatsLoadingContainer />}>
                <GraphqlContainer />
            </Suspense>
        </>
    );
}
export default AdminPage;