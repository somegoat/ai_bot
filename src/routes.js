import React from 'react';
import { Text } from '@botonic/react';
import Welcome from './actions/Welcome';
import Search from './actions/Search';
import Info from './actions/Info';
import Bot from './actions/Bot';

export const routes = [
    { path: 'initial', text: /hi|hey|hello|hola|yo/i, action: Welcome },
    { path: 'info', text: /^ask:/i, action: Info },
    { path: 'search', text: /^search:/i, action: Search },
    { path: 'bot', text: /.*/, action: Bot },

]
