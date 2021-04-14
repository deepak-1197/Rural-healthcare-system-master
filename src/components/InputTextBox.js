import Style from "../Styles";
import {TextInput} from "react-native";
import React from "react";

const InputTextBox = props => {
    return(
        <TextInput
            style = {Style.textInput}
            secureTextEntry = {props.secure == true ? true : false}
            autoCapitalize = "none"
            value = {props.value}
            onChangeText = {(value) => props.stateChange(value)}
            autoCorrect = {false}
            placeholder = {props.data}/>
    )
}

export default InputTextBox;