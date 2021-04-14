import React from 'react';
import {Fontisto} from "@expo/vector-icons";
import {Text, View} from "react-native";

const SYMBOL_COLOR = 'rgb(3, 184, 234)';
const TEXT_COLOR = 'white';

const CheckBoxDataActive = props => {
    return(
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Fontisto style = {{marginHorizontal: 15}} name="checkbox-active" size={25} color={SYMBOL_COLOR}/>
            <Text style={{color: TEXT_COLOR}}>{props.data}</Text>
        </View>
    )
}

const CheckBoxDataPassive = props => {
    return(
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Fontisto style = {{marginHorizontal: 15}} name="checkbox-passive" size={25} color={SYMBOL_COLOR}/>
            <Text style={{color: TEXT_COLOR}}>{props.data}</Text>
        </View>
    )
}

export {CheckBoxDataActive, CheckBoxDataPassive};