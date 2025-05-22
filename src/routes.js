import React from 'react';
import { Text } from '@botonic/react';
import Welcome from './actions/Welcome';
import Search from './actions/Search';

export const routes = [
    { path: 'initial', text: /hi/i, action: Welcome },
    { path: 'search', text: /.*/, action: Search },

]
