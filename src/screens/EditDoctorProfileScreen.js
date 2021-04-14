import React, {useState, useContext, useReducer, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';
import InputTextBox from "../components/InputTextBox";
import PickerComponent from "../components/PickerComponent";
import Separator from "../components/Separator";

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

const EditDoctorProfile = props => {
    const {updateDoctorData} = useContext(AuthContext);
    const [fields, dispatch] = useReducer(reducer, {firstName: '', lastName: '', age: '', phone: '', address: '', gender: 'Male', appointmentFees: '', specialisation: ''});
    const {firstName, lastName, age, phone, address, gender, appointmentFees,specialisation} = fields;
    const state = props.navigation.state.params.state;

    return(
        <View style = {{...Style.background, paddingTop: 45}}>
            <AntDesign style = {{
                textAlign: 'center',
                marginTop: 10
            }}
                       name="user" size={75} color='rgb(3, 184, 234)' />
            <Separator />
            <ScrollView>
                    <InputTextBox data = 'First Name' value = {firstName} stateChange ={newValue => dispatch({type: 'firstName', payload: newValue})} />
                    <InputTextBox data = 'Last Name' value = {lastName} stateChange ={newValue => dispatch({type: 'lastName', payload: newValue})} />
                    <InputTextBox data = 'Age' value = {age} stateChange ={newValue => dispatch({type: 'age', payload: newValue})} />
                    <InputTextBox data = 'Phone Number' value = {phone} stateChange ={newValue => dispatch({type: 'phone', payload: newValue})} />
                    <InputTextBox data = 'Address' value = {address} stateChange ={newValue => dispatch({type: 'address', payload: newValue})} />
                    <InputTextBox data = 'appointmentFees' value = {appointmentFees} stateChange ={newValue => dispatch({type: 'appointmentFees', payload: newValue})} />
                    <View style = {localStyle.blocks}>
                        <View style = {{flexDirection: 'row'}}>
                            <PickerComponent
                                style = {{flex: 1}}
                                title = 'Specialisation In'
                                value = {specialisation}
                                setValue = {val => dispatch({type: 'specialisation', payload: val})}
                                item ={['Cardiologist', 'Audiologist',
                                    'Dentist', 'ENT Specialist', 'Gynaecologist',
                                    'Orthopaedic surgeon', 'Paediatrician',
                                    'Psychiatrists', 'Veterinarian', 'Radiologist',
                                    'Pulmonologist', 'Endocrinologist', 'Oncologist',
                                    'Neurologist', 'Cardiothoracic surgeon']} />
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <PickerComponent style = {{flex: 1}} title = 'Gender' value = {gender} setValue = {val => dispatch({type: 'gender', payload: val})} item ={['Male', 'Female']} />
                        </View>
                    </View>
                {state.errorMessage ? (<Text style = {{color: 'red', textAlign: 'center', marginBottom: 10}}>{state.errorMessage}</Text>): null}
                <Separator />
                <TouchableOpacity onPress ={() => {
                    updateDoctorData({
                        id: state.userInfo[0]._id,
                        firstName,
                        lastName,
                        age,
                        phone,
                        address,
                        gender,
                        appointmentFees,
                        specialisation
                    })
                }}>
                    <Text style = {Style.buttonStyle}> Update </Text>
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

EditDoctorProfile.navigationOptions = () => {
    return{
        headerShown: false
    };
}
export default EditDoctorProfile;