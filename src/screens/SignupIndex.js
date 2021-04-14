import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Style from "../Styles";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Separator from "../components/Separator";

const SYMBOL_COLOR = 'rgb(3, 184, 234)';
const SignupIndex = props => {
    return(
        <View style = {{...Style.background, paddingTop: 45, alignItems: 'center'}}>
           <Text style = {Style.heading}>You are .....</Text>
            <Separator />
            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('Signup');
            }}>
                <View style = {{...Style.bigImageButton, padding: 15, alignItems: 'center'}}>
                    <Fontisto style = {{paddingTop: 25}} name="bed-patient" size={50} color={SYMBOL_COLOR} />
                    <Text style = {Style.heading}>Patient</Text>
                </View>
            </TouchableOpacity>
            <Separator />

            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('DoctorSignup');
            }}>
                <View style = {{...Style.bigImageButton, padding: 15, alignItems: 'center'}}>
                    <Fontisto style = {{paddingTop: 25}} name="doctor" size={50} color={SYMBOL_COLOR} />
                    <Text style = {Style.heading}>Doctor</Text>
                </View>
            </TouchableOpacity>
            <Separator />

            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('ChemistSignup');
            }}>
            <View style = {{...Style.bigImageButton, padding: 15, alignItems: 'center'}}>
                <AntDesign style = {{paddingTop: 25}} name="medicinebox" size={50} color={SYMBOL_COLOR} />
                <Text style = {Style.heading}>Chemist</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

SignupIndex.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default SignupIndex;