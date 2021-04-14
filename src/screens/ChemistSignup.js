import React, {useState, useContext, useReducer} from 'react';
import {Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';
import InputTextBox from "../components/InputTextBox";
import PickerComponent from "../components/PickerComponent";
import Separator from "../components/Separator";
import MedicineList from "../context/MedicineList";
import cities from "../../Cities";

const textColor = 'rgb(165, 165, 166)';
const reducer = (state, action) => {
    switch(action.type){
        case 'firstName': return {...state, firstName: action.payload};
        case 'lastName': return {...state, lastName: action.payload};
        case 'address': return {...state, address: action.payload};
        case 'phone': return {...state, phone: action.payload};
        case 'shopName': return {...state, shopName: action.payload};
    }
}

const ChemistSignup = props => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const {state, signup, postUserInfo} = useContext(AuthContext);
    const [tokenFetched, isTokenGenerated] = useState(false);
    const [registrationStatus, changeRegistrationStatus] = useState(false);
    const [medicineList, changeMedicineList] = useState([]);
    const [fields, dispatch] = useReducer(reducer, {firstName: '', lastName: '', phone: '', address: '', shopName: ''});
    const {firstName, lastName, phone, address, shopName} = fields;

    const changeTokenStatus = (value) => {
        isTokenGenerated(value);
    }

    const showMedicines = () => {
        return (<FlatList
            data = {medicineList}
            horizontal
            showsHorizontalScrollIndicator = {false}
            renderItem = {({item}) => {
                return(
                    <View style = {{paddingHorizontal: 2, marginHorizontal: 3, borderColor: 'rgb(3, 184, 234)', borderRadius: 25, borderWidth: 1}}>
                        <Text style = {{paddingHorizontal: 2, color: textColor}}>{item}</Text>
                    </View>
                )
            }}
        />)
    }

    return(
        <View style = {{...Style.background, paddingTop: 45}}>
            <AntDesign style = {{textAlign: 'center',
                marginTop: 10}} name="medicinebox" size={75} color='rgb(3, 184, 234)' />
            <Separator />
            <ScrollView>
                <InputTextBox data = 'Email' value = {email} stateChange ={newValue => changeEmail(newValue)} />
                <InputTextBox data = 'Password' value = {password} stateChange ={newValue => changePassword(newValue)} />
                <InputTextBox data = 'First Name' value = {firstName} stateChange ={newValue => dispatch({type: 'firstName', payload: newValue})} />
                <InputTextBox data = 'Last Name' value = {lastName} stateChange ={newValue => dispatch({type: 'lastName', payload: newValue})} />
                <InputTextBox data = 'Phone Number' value = {phone} stateChange ={newValue => dispatch({type: 'phone', payload: newValue})} />
                <InputTextBox data = 'Shop Name' value = {shopName} stateChange ={newValue => dispatch({type: 'shopName', payload: newValue})} />

                <View style = {localStyle.blocks}>
                    <PickerComponent width ={300} style = {{flex: 1}}
                                     title = 'City' value = {address} setValue = {val => dispatch({type: 'address', payload: val})}
                                     item ={cities} />
                    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <PickerComponent width ={300} value = {medicineList[medicineList.length - 1]} title = 'Choose medicines'
                                         setValue = {val => changeMedicineList([...medicineList, val])} item ={MedicineList} />
                        {showMedicines()}
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
                        phone,
                        address,
                        medicineList,
                        shopName,
                        userType: 'Chemist',
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

ChemistSignup.navigationOptions = () => {
    return{
        headerShown: false
    };
}
export default ChemistSignup;