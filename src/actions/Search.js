import React from 'react';
import { Text } from '@botonic/react';

export default async (ctx) => {
    const query = ctx;
    console.log(query);
    return <Text>We need to search for it but we lack the functionality at the moment!</Text>
};
