import React from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const SearchBar = props => {

    return(
        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <View style = {{backgroundColor: 'rgb(38, 41, 43)', paddingVertical: 8}}>
                <TouchableOpacity onPress = {() => props.onPressBack()}>
                    <Ionicons style = {{marginHorizontal: 11}} name="ios-arrow-back" size={24} color="white"/>
                </TouchableOpacity>
            </View>
            <TextInput
                style = {{height: 40, color: 'rgb(165, 165, 166)', fontSize: 25, paddingHorizontal: 10, flex: 1, backgroundColor: 'rgb(38, 41, 43)'}}
                autoCapitalize = "none"
                value = {props.query}
                onChangeText = {(value) => props.onChangeQuery(value)}
                autoCorrect = {false}
                placeholder = {props.text}
            />
            <View style = {{backgroundColor: 'rgb(38, 41, 43)', paddingVertical: 8}}>
                <TouchableOpacity onPress = {() => {props.onSearchPress()
                }}>
                    <AntDesign style = {{marginHorizontal: 11}} name="search1" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar;