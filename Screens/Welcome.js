import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    Colors,
    InnerContainer,
    PageTitle, 
    SubTitle, 
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    PageLogoWelcome,
    WelcomeContainer,
    Avatar
} from './../components/styles';


const {brand, darkLight, primary} = Colors;

const Welcome = () => {


    return(
        <>
            <StatusBar style = "dark" />
            <InnerContainer>
                

                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome</PageTitle>
                    <SubTitle>Your Ultimate Workout Guide</SubTitle>
                        <StyledFormArea>
                            <Avatar resizeMode = "cover" source ={require('./../assets/AshleticsLogo.png')}/>
                            <Line />
                            <StyledButton onPress = {()=>{}}>
                                <ButtonText> Logout</ButtonText>
                            </StyledButton>
                            
                            
                        </StyledFormArea>
                        


                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};



export default Welcome;