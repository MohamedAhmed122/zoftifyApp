import React from 'react';
import {withProviders} from './src/shared/providers';
import {AppNavigation} from './src/navigation';

const App = () => <AppNavigation />;

export default withProviders(App);
