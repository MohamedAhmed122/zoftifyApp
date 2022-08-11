import React from 'react';
import {withProviders} from './src/shared/providers';
import {AppNavigation} from './src/navigation';

// FIXME: RootState type
// TODO: Refactor CustomPicker

const App = () => <AppNavigation />;

export default withProviders(App);
