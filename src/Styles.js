import {StyleSheet} from 'react-native';

const textColor = 'rgb(165, 165, 166)';
export default Style = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(44, 47, 49)'
    },
    heading : {
        textAlign: 'center',
        fontSize: 35,
        color: textColor
    },
    subHeading: {
        marginHorizontal: 15,
        fontSize: 25,
        color: textColor
    },
    textInput : {
        margin: 15,
        borderWidth: 1,
        color: textColor,
        borderRadius: 5,
        borderColor: 'rgb(3, 184, 234)',
        height: 30,
        paddingHorizontal: 10
    },
    paragraph: {
        margin: 15,
        color: textColor,
        fontSize: 12,
        textAlign: 'justify'
    },
    imageButton: {
        width: 50,
        height: 50,
        padding: 15,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'rgb(38, 41, 43)',
        color: 'rgb(3, 184, 234)',
        backgroundColor: 'rgb(38, 41, 43)'
    },
    mediumImageButton:{
        width: 70,
        height: 70,
        padding: 15,
        borderWidth: 1,
        borderRadius: 35,
        borderColor: 'rgb(38, 41, 43)',
        color: 'rgb(3, 184, 234)',
        backgroundColor: 'rgb(38, 41, 43)'
    },
    bigImageButton: {
        width: 190,
        height: 190,
        padding: 15,
        borderWidth: 1,
        borderRadius: 95,
        borderColor: 'rgb(38, 41, 43)',
        color: 'rgb(3, 184, 234)',
        backgroundColor: 'rgb(38, 41, 43)'
    },
    buttonStyle: {
        marginHorizontal: 15,
        padding: 10,
        textAlign: 'center',
        fontSize: 35,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'rgb(38, 41, 43)',
        color: textColor,
        backgroundColor: 'rgb(38, 41, 43)'
    }
});