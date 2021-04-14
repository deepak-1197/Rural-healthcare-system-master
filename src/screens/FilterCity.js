import React from 'react';
import {StatusBar, Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Style from "../Styles";
import cities from "../../Cities";

const textColor = 'rgb(165, 165, 166)';
const FilterCity = props => {
    const filterCity = props.navigation.state.params.filterCity;
    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Text style = {{...Style.subHeading, marginTop: 45}}>Choose a city:</Text>
            <View style = {{...localStyle.blocks, marginLeft: 15}}>
                <FlatList
                    data = {cities}
                    renderItem = {({item}) => {
                        return (<TouchableOpacity onPress = {() => {
                            filterCity(item)
                            props.navigation.navigate('DoctorList');
                        }}>
                            <Text style = {{color: textColor, marginBottom: 15, fontSize: 20}}>{item}</Text>
                        </TouchableOpacity>)
                        }}
                />
            </View>
            <View style = {{height: 550}} />
        </View>
    )
}

FilterCity.navigationOptions = () => {
    return{
        headerShown: false
    };
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

export default FilterCity;