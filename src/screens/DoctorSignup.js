import React, {useState, useContext, useReducer} from 'react';
import {Text, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Style from '../Styles';
import {AntDesign, Fontisto} from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';
import InputTextBox from "../components/InputTextBox";
import PickerComponent from "../components/PickerComponent";
import Separator from "../components/Separator";
import cities from "../../Cities";

const reducer = (state, action) => {
    switch(action.type){
        case 'firstName': return {...state, firstName: action.payload};
        case 'lastName': return {...state, lastName: action.payload};
        case 'address': return {...state, address: action.payload};
        case 'phone': return {...state, phone: action.payload};
        case 'age': return {...state, age: action.payload};
        case 'gender': return {...state, gender : action.payload};
        case 'appointmentFees': return {...state, appointmentFees: action.payload};
        case 'specialisation': return {...state, specialisation: action.payload};
    }
}

const DoctorSignup = props => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const {state, signup, postUserInfo} = useContext(AuthContext);
    const [tokenFetched, isTokenGenerated] = useState(false);
    const [registrationStatus, changeRegistrationStatus] = useState(false);
    const [fields, dispatch] = useReducer(reducer, {firstName: '', lastName: '', age: '', phone: '', address: '', gender: 'Male', appointmentFees: '', specialisation: ''});
    const {firstName, lastName, age, phone, address, gender, appointmentFees,specialisation} = fields;

    const changeTokenStatus = (value) => {
        isTokenGenerated(value);
    }

    return(

        <View style = {{...Style.background, paddingTop: 45}}>
            <Fontisto style = {{textAlign: 'center', marginTop: 10}} name="doctor" size={75} color='rgb(3, 184, 234)' />
            <Separator />
            <ScrollView>
                <InputTextBox data = 'Email' value = {email} stateChange ={newValue => changeEmail(newValue)} />
                <InputTextBox data = 'Password' value = {password} stateChange ={newValue => changePassword(newValue)} />
                <InputTextBox data = 'First Name' value = {firstName} stateChange ={newValue => dispatch({type: 'firstName', payload: newValue})} />
                <InputTextBox data = 'Last Name' value = {lastName} stateChange ={newValue => dispatch({type: 'lastName', payload: newValue})} />
                <InputTextBox data = 'Age' value = {age} stateChange ={newValue => dispatch({type: 'age', payload: newValue})} />
                <InputTextBox data = 'Phone Number' value = {phone} stateChange ={newValue => dispatch({type: 'phone', payload: newValue})} />
                <InputTextBox data = 'appointmentFees' value = {appointmentFees} stateChange ={newValue => dispatch({type: 'appointmentFees', payload: newValue})} />
                <View style = {localStyle.blocks}>
                    <View style = {{flexDirection: 'row'}}>
                        <PickerComponent width = {231} style = {{flex: 1}}
                                         title = 'City' value = {address} setValue = {val => dispatch({type: 'address', payload: val})}
                                         item ={cities} />
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                        <PickerComponent width = {231}
                            style = {{flex: 1}}
                            title = 'Specialisation In'
                            value = {specialisation}
                            setValue = {val => {
                                dispatch({type: 'specialisation', payload: val})
                            }}
                            item ={['Cardiologist', 'Audiologist',
                                'Dentist', 'ENT Specialist', 'Gynaecologist',
                                'Orthopaedic surgeon', 'Paediatrician',
                                'Psychiatrists', 'Veterinarian', 'Radiologist',
                                'Pulmonologist', 'Endocrinologist', 'Oncologist',
                                'Neurologist', 'Cardiothoracic surgeon']} />
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                        <PickerComponent width = {231} style = {{flex: 1}} title = 'Gender' value = {gender} setValue = {val => dispatch({type: 'gender', payload: val})} item ={['Male', 'Female']} />
                    </View>
                </View>
                {state.errorMessage ? (<Text style = {{color: 'red', textAlign: 'center', marginBottom: 10}}>{state.errorMessage}</Text>): null}
                <Separator />

                <TouchableOpacity onPress = {() => {
                    signup({email, password}, val => changeTokenStatus(val))
                }}>
                    {tokenFetched && postUserInfo({
                        firstName,
                        lastName,
                        age,
                        phone,
                        address,
                        gender,
                        bloodGroup: 'NA',
                        diabitic: 'NA',
                        highBloodPressure: 'NA',
                        currentlyUnderDiagnosis: 'NA',
                        userType: 'Doctor',
                        appointmentFees ,
                        specialisation: specialisation == "" ? 'Cardiologist' : specialisation
                    }, (value) => {
                        changeRegistrationStatus(value)})}
                    {tokenFetched && changeTokenStatus(false)}
                    {registrationStatus && props.navigation.navigate('PatientProfile')}
                    <Text style = {Style.buttonStyle}> Signup </Text>
                </TouchableOpacity>
                <Separator />
            </ScrollView>
        </View>
    )
}

const localStyle = StyleSheet.create({
    blocks: {
        backgroundColor: 'rgb(38, 41, 43)',
        marginHorizontal: 15,
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgb(38, 41, 43)'
    }
})

DoctorSignup.navigationOptions = () => {
    return{
        headerShown: false
    };
}
export default DoctorSignup;