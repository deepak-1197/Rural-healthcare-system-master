import React, {useReducer, useContext, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from "react-native";
import InputTextBox from "../components/InputTextBox";
import {Context as AuthContext} from "../context/AuthContext";
import Style from "../Styles";

const reducer = (state, action) => {
    switch(action.type){
        case 'firstName': return {...state, firstName: action.payload};
        case 'lastName': return {...state, lastName: action.payload};
        case 'gender': return {...state, gender: action.payload};
        case 'address': return {...state, address: action.payload};
        case 'phoneNumber': return {...state, phoneNumber: action.payload};
        case 'bloodGroup': return {...state, bloodGroup: action.payload};
        case 'age': return {...state, age: action.payload};
        case 'diabetes': return {...state, diabetes: action.payload};
        case 'highBP': return {...state, highBP: action.payload};
        case 'underDiagnosis': return {...state, underDiagnosis: action.payload};
        case 'sugar': return {...state, sugar: action.payload};
        default: return state;
    }
}

const AddUserData = props => {
    const [textState, dispatch] = useReducer(reducer, {
                                firstName: '',
                                lastName: '',
                                gender: '',
                                address: '',
                                phoneNumber: '',
                                bloodGroup: '',
                                age: 0,
                                diabetes: '',
                                highBP: '',
                                underDiagnosis: '',
                                sugar: ''});
    const {postUserInfo} = useContext(AuthContext);
    const {firstName , lastName , gender , address , phoneNumber , bloodGroup , age , diabetes , highBP , underDiagnosis , sugar} = textState;
    const [view, changeView] = useState(true);
    const onChange = (type, value) => {
        dispatch({type, payload: value});
    }

    return(
        {view} && (<View style = {{...Style.background, flex: 1, justifyContent: 'center'}}>
            <InputTextBox data = 'First Name' value = {firstName} stateChange ={(value) => onChange('firstName', value)} />
            <InputTextBox data = 'Last Name' value = {lastName} stateChange ={(value) => onChange('lastName', value)} />
            <InputTextBox data = 'Address' value = {address} stateChange ={(value) => onChange('address', value)} />

            <TouchableOpacity onPress = {async () => {
                await postUserInfo(firstName, lastName, address)

                 console.log(props.navigation.navigate('PatientProfile'))
                changeView(false);
            }}>
                <Text style = {Style.buttonStyle}>Submit</Text>
            </TouchableOpacity>
        </View>)
    )
}

AddUserData.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default AddUserData;