import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    Colors,
    StyledContainer,
    InnerContainer,
    SignupLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea,
    LeftIcon,
    StyledInputLabel, 
    StyleTextInput, 
    RightIcon, 
    StyledButton,
    ButtonText,
    ErrorBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';

import {View, TouchableOpacity} from 'react-native';

//Colors
const {brand, darkLight, primary} = Colors;

//Date Time picker
import DateTimePicker from '@react-native-community/datetimepicker';

//Actual User's DOB


const Signup = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    
const [dob, setDob] = useState();

const onChange = (event, selectedDate) => {

    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
}

const showDatePicker = (currentMode) => {
    setShow(true);
    
}

    return(
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <SignupLogo resizeMode = "cover" source ={require('./../assets/AshleticsLogo.png')}/>
                <PageTitle>Ashletics</PageTitle>
                <SubTitle>Your Ultimate Workout Guide</SubTitle>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    style={{width:'100%'}}
                    
                    />
                )}

                <Formik
                    initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                   
                >
                    {({handleChange, handleBlur, handleSubmit, values})=> (
                        <StyledFormArea>
                            <MyTextInput
                                label="Full Name"
                                icon = "person"
                                placeholder="Ex. John Smith"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            />

                            <MyTextInput
                                label="Email Address"
                                icon = "mail"
                                placeholder="john@gmail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardTypes="email-address"
                            />

                            <MyTextInput
                                label="Date of Birth"
                                icon = "calendar"
                                placeholder="mm/dd/yyyy"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur={handleBlur('dateOfBirth')}
                                value={dob ? dob.toDateString() : ''}
                                isDate={true}
                                editable={false}
                                showDatePicker={showDatePicker}
                                
                                
                            />

                            <MyTextInput
                                label="Password"
                                icon = "lock"
                                placeholder="* * * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />

                            <MyTextInput
                                label="Confirm Password"
                                icon = "lock"
                                placeholder="* * * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <ErrorBox>...</ErrorBox>
                            <StyledButton onPress = {handleSubmit}>
                                <ButtonText> Login</ButtonText>
                            </StyledButton>
                            <Line />
                            
                            <ExtraView>
                                <ExtraText>Already have an account?</ExtraText>
                                <TextLink>
                                    <TextLinkContent> Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                        
                        
                    )}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label,icon,isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyleTextInput {...props}/>}
            {isDate && (<TouchableOpacity onPress={()=> showDatePicker('date')}>
                <StyleTextInput {...props}/>
            </TouchableOpacity>)}
            {isPassword&&(
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'}size={30} color = {darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;