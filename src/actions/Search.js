import React from 'react';
import { Text } from '@botonic/react';

export default async ({ i }) => {

    console.log(i);
    const query = i.data;
    return <Text>We need to search for it but we lack the functionality at the moment!</Text>
}
