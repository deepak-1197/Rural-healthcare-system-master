import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SignupScreen from "./SignupScreen";
import Style from "../Styles";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Separator from "../components/Separator";

const SYMBOL_COLOR = 'rgb(3, 184, 234)';
const MedicineIndex = props => {
    return(
        <View style = {{...Style.background, paddingTop: 45, alignItems: 'center'}}>
            <Text style = {Style.heading}>Search By .....</Text>
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('MedicalStores');
            }}>
                <View style = {{...Style.bigImageButton, paddingTop: 45, alignItems: 'center'}}>
                    <Text style = {Style.heading}>Medical Store</Text>
                </View>
            </TouchableOpacity>
            <Separator />

            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('Medicine');
            }}>
                <View style = {{...Style.bigImageButton, paddingTop: 67, alignItems: 'center'}}>
                    <Text style = {Style.heading}>Disease</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

MedicineIndex.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default MedicineIndex;