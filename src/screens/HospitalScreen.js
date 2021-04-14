import hospitalInfo from '../../hospitalInformation';
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import Style from "../Styles";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Separator from "../components/Separator";

const renderHospitals = (item, props) => {
    return(
        <TouchableOpacity onPress = {() => props.navigation.navigate('HospitalProfile', {data: item})}>
            <View style = {{padding: 10, marginHorizontal: 15, marginVertical: 10, borderRadius: 10, backgroundColor: 'rgb(38, 41, 43)'}}>
                <Text style = {{color: 'white', marginBottom: 15, fontSize: 19}}>{item.Hospital_Name}</Text>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <Octicons name="location" size={17} color='rgb(3, 184, 234)' />
                    <Text style = {{color: 'white', flex: 1, marginLeft: 10}}>{item.State}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const header = (props) => {
    return <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress = {() => props.navigation.goBack(null)}>
                <Ionicons style = {{marginLeft: 15}} name="ios-arrow-back" size={30} color='rgb(165, 165, 166)'/>
            </TouchableOpacity>
            <Text style = {{...Style.heading, flex: 1}}>List of Hospitals</Text>
        </View>
}

const HospitalScreen = props => {
    return(
        <View style = {Style.background}>
            <View style = {{marginTop: 45}}>
            {header(props)}
                <Separator />
            <FlatList
                data = {hospitalInfo}
                keyExtractor = {item => `${item.Sr_No}`}
                renderItem = {({item}) => renderHospitals(item, props) }
            />
            </View>
        </View>
    )
}

HospitalScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default HospitalScreen;