import {Picker, Text, View} from "react-native";
import React from "react";

const renderPicker = (item) =>{
    const value = [];
    for(let i = 0; i < item.length; i++){
        const pickerValue = item[i]
        value.push(<Picker.Item value = {pickerValue} key = {i} label = {item[i]} />)
    }
    return value;
};

const PickerComponent = props => {
    const width = props.width ? props.width : 125;
    return (
        <View style = {{margin: 15}}>
        <Text style = {{color: 'rgb(3, 184, 234)'}}>{props.title}</Text>
        <Picker
            selectedValue={props.value}
            style={{ height: 50, width, color: 'rgb(3, 184, 234)'}}
            onValueChange={(itemValue, itemIndex) => props.setValue(itemValue)}
        >
            {renderPicker(props.item)}
        </Picker>
        </View>
    )
}

export default PickerComponent;