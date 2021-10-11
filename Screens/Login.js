import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageLogo, 
    PageTitle
} from './../components/styles'

const Login = () => {
    return(
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <PageLogo resizeMode = "cover" source ={require('./../assets/icon.png')}/>
                <PageTitle>Ashletics</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;