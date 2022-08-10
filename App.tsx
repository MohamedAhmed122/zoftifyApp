import React from 'react';
import {withProviders} from './src/shared/providers';
import {AppNavigation} from './src/navigation';

// TODO: Fix placeholder of CustomPicker
// TODO: Refactor CustomPicker

const App = () => <AppNavigation />;

export default withProviders(App);
