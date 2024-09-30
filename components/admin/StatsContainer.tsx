import React from 'react'
import { fetchStats } from '@/utils/actions'
import StatsCard from './StatsCard';

async function StatsContainer() {
    const data = await fetchStats();
    return (
        <div>

            <StatsCard title='users' value={data?.usersCount || 0}></StatsCard>
            <StatsCard title='properties' value={data?.propertiesCount || 0} />
            <StatsCard title='bookings' value={data?.bookingsCount || 0} />
        </div>
    )
}

export default StatsContainer