import React from 'react'
import { Card, CardHeader } from '../ui/card';
type StatsCardsProps = {
    title: string;
    value: number;
};

function StatsCard({ title, value }: StatsCardsProps) {
    return (
        <Card>
            <CardHeader className='flex flex-row'>
                <h3 className='capitalize font-bold'>{title}</h3>
                -{value}</CardHeader>
        </Card>
    )
}

export default StatsCard