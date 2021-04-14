import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import Style from "../Styles";
import MapView from "react-native-maps";
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from "expo-location";
import useGeoEncodingContext from "../context/geoEncodingContext";
import Separator from "../components/Separator";

const HospitalProfile = props => {
    const [err, setErr] = useState(null);
    const [geoEncodingResult, fetchGeoEncodingResult] = useGeoEncodingContext();

    const startWatching = async() => {
        try{
            const { granted } = await requestPermissionsAsync();
            if (!granted){
                throw new Error('Location Not granted');
            }

        }catch(e){
            setErr(e);
        }
    };
    const hospitalInfo = props.navigation.state.params.data;

    useEffect(() => {
        startWatching();
        fetchGeoEncodingResult(hospitalInfo.Pincode ? `${hospitalInfo.District},${hospitalInfo.Pincode}` : `${hospitalInfo.District}`);
        },[]);

    return (
        <View style = {Style.background}>
            <View style = {{marginTop: 45}}>
                <View style = {localStyle.blocks}>
                    <View style = {{alignItems: 'center'}}>
                        <Text style = {{...Style.heading, fontSize: 20, color: 'white'}}>{hospitalInfo.Hospital_Name}</Text>
                    </View>
                </View>
                <Separator />

                <View style = {localStyle.blocks}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Text style = {{marginHorizontal: 5, color: 'rgb(3, 184, 234)'}} >Category:</Text>
                        <Text style = {{fontSize: 15, color: 'white', marginRight: 5}}>{hospitalInfo.Hospital_Category != '0' ? hospitalInfo.Hospital_Category : 'Government'}</Text>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <Text style = {{marginHorizontal: 5, color: 'rgb(3, 184, 234)'}} >Address:</Text>
                        <Text style = {{fontSize: 15, color: 'white', marginRight: 5, flex: 1, flexWrap: 'wrap'}}>{hospitalInfo.Address_Original_First_Line}</Text>
                    </View>

                    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Text style = {{marginHorizontal: 5, color: 'rgb(3, 184, 234)'}} >District:</Text>
                        <Text style = {{fontSize: 15, color: 'white'}}>{hospitalInfo.District}</Text>
                    </View>

                    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Text style = {{marginHorizontal: 5, color: 'rgb(3, 184, 234)'}} >State:</Text>
                        <Text style = {{fontSize: 15, color: 'white'}}>{hospitalInfo.State}</Text>
                    </View>

                    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Text style = {{marginHorizontal: 5, color: 'rgb(3, 184, 234)'}} >Pincode:</Text>
                        <Text style = {{fontSize: 15, color: 'white'}}>{hospitalInfo.Pincode}</Text>
                    </View>
                </View>
                <Separator />

                {geoEncodingResult.results !== undefined ? (<MapView style={{height: 300}}
                          initialRegion={{
                              latitude: geoEncodingResult.results[0].locations[0].latLng.lat,
                              longitude: geoEncodingResult.results[0].locations[0].latLng.lng,
                              latitudeDelta: 0.1,
                              longitudeDelta: 0.1
                          }}>
                    <MapView.Marker
                        coordinate={{latitude: geoEncodingResult.results[0].locations[0].latLng.lat,
                            longitude: geoEncodingResult.results[0].locations[0].latLng.lng}}
                        title={hospitalInfo.Hospital_Name}
                    />
                </MapView>) : null}
                {err? <Text>Kindly, enable your location</Text> : null}
            </View>
        </View>
    )
}

HospitalProfile.navigationOptions = () => {
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
        paddingVertical: 10,
        borderColor: 'rgb(38, 41, 43)'
    }
});

export default HospitalProfile;