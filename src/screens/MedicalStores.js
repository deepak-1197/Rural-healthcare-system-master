import React, {useState} from 'react';
import {Text, View, FlatList, AsyncStorage, TouchableOpacity, StatusBar} from "react-native";
import userDataApi from "../api/userDataApi";
import Style from "../Styles";
import Separator from "../components/Separator";
const textColor = 'rgb(165, 165, 166)';
const MedicalStores = props => {

    const [medicalList, changeMedicalList] = useState([]);
    const [render, reRender] = useState(0);
    const [state, changeState] = useState([]);
    const [error, raiseError] = useState(0);

    const getMedicalStoresList = () => {
        const tempArr = []
        state.forEach(info => {
            if(info.medicineList.length > 0){
                tempArr.push(info);
            }
        })
        changeMedicalList(tempArr);
        reRender(2);
    }

    const getAllInfo = async () => {
        try{
            const token = await AsyncStorage.getItem('token');
            const data = await userDataApi.get('/getAllInfo', {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            if(data){
                changeState(data.data);
            }
            reRender(1);
        }catch (err){
            console.log('Error');
            raiseError(1);
            reRender(2);
        }
    }

    const showMedicalStores = (item,props) => {
        return(<View>
            <TouchableOpacity onPress={() => props.navigation.navigate('ReadOnlyProfile', {id: item._id})}>
                <Text style={{color: textColor, fontSize: 20}}>{item.shopName}</Text>
            </TouchableOpacity>
        </View>
        )
    }

    render == 0 && getAllInfo();
    render == 1 && getMedicalStoresList();

    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45, marginHorizontal: 15}}>
                <Separator />
                {error == 1 ? props.navigation.navigate('Login') : null}
                <Text style = {Style.subHeading}>List Of Medical Stores</Text>
                <Separator />
                {medicalList &&
                (<FlatList
                    data = {medicalList}
                    keyExtractor = {item => `${item._id}`}
                    renderItem = {({item}) => showMedicalStores(item, props) }
                />)
                }
            </View>
        </View>
    )
}

MedicalStores.navigationOptions = () => {
    return{
        headerShown: false
    };
}


export default MedicalStores;