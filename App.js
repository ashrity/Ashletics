import { isEmptyChildren } from 'formik';
import React from 'react';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Welcome from './Screens/Welcome';

export default function App(){
    return <Signup />;
}

