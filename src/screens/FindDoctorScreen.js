import React from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image, StyleSheet, ScrollView} from 'react-native';
import Style from '../Styles';
import {FontAwesome, Fontisto} from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import Separator from "../components/Separator";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome5 as ReactFontAwesome} from 'react-native-vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SYMBOL_COLOR = 'rgb(3, 184, 234)';
const textColor = 'rgb(165, 165, 166)';

const symbol = (symbolType, text, props) => {
    return (
            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('DoctorList', {doctorType: text});
            }}>
                <View style = {{alignItems: 'center'}}>
                    <View style = {{...Style.mediumImageButton, padding: 22, alignItems: 'center'}}>
                        {symbolType}
                    </View>
                </View>
                <Text style = {{fontSize: 15, color: textColor, textAlign: 'center'}}>{text}</Text>
            </TouchableOpacity>
    )
}

const FindDoctorScreen = props => {
    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45, marginHorizontal: 15}}>
                <Text style = {Style.heading}>Doctor Type</Text>
                <Separator />
                <ScrollView>
                <View style ={{flexDirection: 'row'}}>
                    <View style = {{flex: 1, alignItems: 'center'}}>
                        {symbol(<FontAwesome name="heartbeat" size={24} color={SYMBOL_COLOR}/>, 'Cardiologist', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/audiologist.png')} />, 'Audiologist', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/gynocologist.png')} />, 'Gynaecologist', props)}
                        <Separator />
                        {symbol(<MaterialIcons name="child-care" size={25} color={SYMBOL_COLOR} />, 'Paediatrician', props)}
                        <Separator />
                        {symbol(<FontAwesome5 name="dog" size={24} color={SYMBOL_COLOR} />, 'Veterinarian', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/lung.png')} />, 'Pulmonologist', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/cancer.png')} />, 'Oncologist', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/cardiothoraic.png')} />, 'Cardiothoracic surgeon', props)}
                        <Separator />
                        <Separator />
                        <Separator />
                        <Separator />
                        <Separator />
                    </View>
                    <View style = {{flex: 1, alignItems: 'center'}}>
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/teeth.png')} />, 'Dentist', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/ent.png')} />, 'ENT Specialist', props)}
                        <Separator />
                        {symbol(<FontAwesome5 name="bone" size={19} color={SYMBOL_COLOR} />, 'Orthopaedic surgeon', props)}
                        <Separator />
                        {symbol(<MaterialIcons name="mood" size={26} color={SYMBOL_COLOR} />, 'Psychiatrists', props)}
                        <Separator />
                        {symbol(<Feather name="radio" size={24} color={SYMBOL_COLOR} />, 'Radiologist', props)}
                        <Separator />
                        {symbol(<Image style = {localStyle.imageStyle} source={require('../../assets/molecule.png')} />, 'Endocrinologist', props)}
                        <Separator />
                        {symbol(<FontAwesome5 name="brain" size={22} color={SYMBOL_COLOR} />, 'Neurologist', props)}
                    </View>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}

FindDoctorScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

const localStyle = StyleSheet.create({
    imageStyle :{
        height: 30,
        width: 30,
    }
})

export default FindDoctorScreen;