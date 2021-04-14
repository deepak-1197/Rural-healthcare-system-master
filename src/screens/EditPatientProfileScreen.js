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
        case 'sugar': return {...state, sugar : action.payload};
        case 'bloodGroup': return {...state, bloodGroup: action.payload};
        case 'diabitic': return {...state, diabitic: action.payload};
        case 'highBloodPressure': return {...state, highBloodPressure: action.payload};
        case 'currentUnderDiagnosis': return {...state, currentUnderDiagnosis: action.payload}
    }
}

const EditPatientProfile = props => {
    const {updatePatientData} = useContext(AuthContext);
    const [fields, dispatch] = useReducer(reducer, {firstName: '',
                                                              lastName: '',
                                                              age: '',
                                                              phone: '',
                                                              address: '',
                                                              gender: 'Male',
                                                              bloodGroup: 'A+',
                                                              diabitic: 'No',
                                                              sugar: 'No',
                                                              highBloodPressure: 'No',
                                                              currentUnderDiagnosis: 'No'});
    const {firstName, lastName, age, phone, address, gender, bloodGroup , diabitic , sugar, highBloodPressure , currentUnderDiagnosis} = fields;
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

                <View style = {localStyle.blocks}>
                    <View style = {{flexDirection: 'row'}}>
                        <PickerComponent style = {{flex: 1}} title = 'Gender' value = {gender} setValue = {val => dispatch({type: 'gender', payload: val})} item ={['Male', 'Female']} />
                        <PickerComponent style = {{flex: 1}} title = 'Blood Group' value = {bloodGroup} setValue = {val => dispatch({type: 'bloodGroup', payload: val})} item ={['A+', 'A-', 'B+', 'B-', 'O+', 'O-']} />
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <PickerComponent style = {{flex: 1}} title = 'Diabitic?' value = {diabitic} setValue = {val => dispatch({type: 'diabitic', payload: val})} item ={['Yes', 'No']} />
                        <PickerComponent style = {{flex: 1}} title = 'High Blood Pressure?' value = {highBloodPressure} setValue = {val => dispatch({type: 'highBloodPressure', payload: val})} item ={['Yes', 'No']} />
                    </View>
                    <View>
                        <PickerComponent value = {sugar} title = 'Sugar?' setValue = {val => dispatch({type: 'sugar', payload: val})} item ={['Yes', 'No']} />
                    </View>
                    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <PickerComponent value = {currentUnderDiagnosis} title = 'Are You Currently Under Some Diagnosis by some other Doctor?' setValue = {val => dispatch({type: 'currentUnderDiagnosis', payload: val})} item ={['Yes', 'No']} />
                    </View>
                </View>
                {state.errorMessage ? (<Text style = {{color: 'red', textAlign: 'center', marginBottom: 10}}>{state.errorMessage}</Text>): null}
                <Separator />
                <TouchableOpacity onPress ={() => {
                    updatePatientData({
                        id: state.userInfo[0]._id,
                        firstName,
                        lastName,
                        age,
                        phone,
                        address,
                        gender,
                        bloodGroup,
                        diabitic,
                        sugar,
                        highBloodPressure,
                        currentUnderDiagnosis
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

EditPatientProfile.navigationOptions = () => {
    return{
        headerShown: false
    };
}
export default EditPatientProfile;