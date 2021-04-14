import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Style from '../Styles';
import {BottomNavigator} from "../components/BottomNavigator";

const HomeScreen = props => {
    return (
            <View style={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Text style={{...Style.subHeading, marginTop: 45}}> About </Text>
            <Text style={Style.paragraph}>    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</Text>
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <View style={{ height: 1, backgroundColor: 'rgb(3, 184, 234)' }} />
                <View style={{ flexDirection: 'row' }}>
                    <BottomNavigator text = 'Login' redirect = 'Login' symbolName = 'user' />
                    <View style={{ width: 1, backgroundColor: 'rgb(3, 184, 234)' }} />
                    <BottomNavigator text = 'Register' redirect = 'SignupIndex' symbolName = 'adduser' />
                </View>
            </View>
        </View>
    )
}
HomeScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default HomeScreen;