import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons";
import Style from "../Styles";
import {navigate as navigateTo} from "../navigationRef";

const BottomNavigator = props => {
    return(
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigateTo(props.redirect)}>
            <View style={{ height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <AntDesign style={{ ...Style.imageButton }}
                           name={props.symbolName} size={22} color='rgb(165, 165, 166)' />
                <Text style={{ marginLeft: 16, textAlignVertical: 'center', color: 'rgb(3, 184, 234)' }}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const BotttomNavigatorWithoutBorder = props => {
    return(
        <View style = {{flexDirection: 'row', flex: 1}}>
            <View style = {{margin: 15, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => props.callBack()}>
                    <AntDesign style={{marginLeft: 25, textAlignVertical: 'center', marginBottom: 10}} name={props.symbolName} size={25} color="rgb(3, 184, 234)" />
                    <Text style={{ marginLeft: 16, textAlignVertical: 'center', color: 'rgb(3, 184, 234)', fontSize: 10 }}> {props.text} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export {BottomNavigator, BotttomNavigatorWithoutBorder};