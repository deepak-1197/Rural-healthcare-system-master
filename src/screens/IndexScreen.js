import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Style from "../Styles";
import Separator from "../components/Separator";

const IndexScreen = props => {
    return(
        <View style = {{...Style.background, paddingTop: 45, alignItems: 'center'}}>
            <Text style = {Style.heading}>HealthCare For All</Text>
            <Separator />
            <Separator />

            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('Home');
            }}>
                <View style = {{...Style.bigImageButton, paddingTop: 65, alignItems: 'center'}}>
                    <Text style = {Style.heading}>About</Text>
                </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('HospitalScreen');
            }}>
                <View style = {{...Style.bigImageButton, paddingTop: 65, alignItems: 'center'}}>
                    <Text style = {Style.heading}>Hospital</Text>
                </View>
            </TouchableOpacity>
            <Separator />

            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('MedicineIndex');
            }}>
                <View style = {{...Style.bigImageButton, paddingTop: 67, alignItems: 'center'}}>
                    <Text style = {Style.heading}>Medicine</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

IndexScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default IndexScreen;