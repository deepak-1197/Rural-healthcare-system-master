import React, {useState} from 'react';
import {StatusBar, Text, View, FlatList, TouchableOpacity, AsyncStorage} from 'react-native';
import Style from "../Styles";
import { Paragraph } from 'react-native-paper';
import Separator from "../components/Separator";
import ReadOnlyProfile from "./ReadOnlyProfile";
import userDataApi from "../api/userDataApi";
import { AntDesign } from '@expo/vector-icons';

const textColor = 'rgb(165, 165, 166)';
const info = data => {
    return(
        <Paragraph style = {{color: textColor}}>{data}</Paragraph>
    );
}

const showInfo = doctorType => {
    switch(doctorType){
        case 'Cardiologist': return info('A cardiologist is a doctor with special training and skill in finding, treating and preventing diseases of the heart and blood vessels.');
        case 'Audiologist': return info('Audiologists are health care professionals who identify, assess and manage disorders of hearing, balance and other neural systems.');
        case 'Dentist': return info('Dentists remove tooth decay, fill cavities, and repair fractured teeth. Dentists diagnose and treat problems with patients\' teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth and gums and on diet choices that affect oral health.');
        case 'ENT Specialist': return info('An ENT doctor in Meerut aka ear nose throat specialist is a medical specialist who is an expert in both medical and surgical treatment of the ear, nose, and throat.');
        case 'Gynaecologist': return info('Gynecologists are doctors who specialize in women\'s health, with a focus on the female reproductive system. They deal with a wide range of issues, including obstetrics, or pregnancy and childbirth, menstruation and fertility issues, sexually transmitted infections (STIs), hormone disorders, and others.');
        case 'Orthopaedic surgeon': return info('Orthopedic surgeons are doctors who specialize in the musculoskeletal system - the bones, joints, ligaments, tendons, and muscles that are so essential to movement and everyday life.');
        case 'Paediatrician': return info('Pediatricians are doctors who manage the health of your child, including physical, behavior, and mental health issues. They\'re trained to diagnose and treat childhood illnesses, from minor health problems to serious diseases.');
        case 'Psychiatrists': return info('Psychiatry is the branch of medicine focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders.');
        case 'Veterinarian': return info('Veterinarian is a professional to treat diseased or injured animals; a veterinary surgeon.');
        case 'Radiologist': return info('Radiologists are medical doctors that specialize in diagnosing and treating injuries and diseases using medical imaging');
        case 'Pulmonologist': return info('Pulmonology is an area of medicine that focuses on the health of the respiratory system. Pulmonologists treat everything from asthma to tuberculosis.');
        case 'Endocrinologist': return info('The glands in a person\'s body release hormones. Endocrinologists treat people who suffer from hormonal imbalances, typically from glands in the endocrine system or certain types of cancers. The overall goal of treatment is to restore the normal balance of hormones found in a patient\'s body.');
        case 'Oncologist': return info('An oncologist is a doctor who treats cancer and provides medical care for a person diagnosed with cancer.');
        case 'Neurologist': return info('Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis and Parkinson\'s disease.');
        case 'Cardiothoracic surgeon': return info('Cardiothoracic surgery (also known as thoracic surgery) is the field of medicine involved in surgical treatment of organs inside the thorax (the chest)—generally treatment of conditions of the heart (heart disease) and lungs (lung disease).');
    }
}

const DoctorList = props => {
    const doctorType = props.navigation.state.params.doctorType;
    const [doctorList, changeDoctorList] = useState([]);
    const [render, reRender] = useState(0);
    const [state, changeState] = useState([]);
    const [city, filterCity] = useState('');

    const getDoctorList = () => {
        const tempArr = []
        state.forEach(info => {
            if(info.specialisation == doctorType){
                tempArr.push(info);
            }
        })
        changeDoctorList(tempArr);
        reRender(2);
    }

    if(city.length > 0){
        console.log('city');
        changeDoctorList([]);
        const tempArr = []
        state.forEach(info => {
            if(info.specialisation == doctorType && info.address == city){
                tempArr.push(info);
            }
        })
        changeDoctorList(tempArr);
        filterCity('');
    }

    const getAllInfo = async () => {
        const token = await AsyncStorage.getItem('token');
        try{
            const data = await userDataApi.get('/getAllInfo', {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            if(data){
                changeState(data.data);
            }
            reRender(1);
        }catch (err){
            changeState(['Something Went Wrong']);
        }
    }

    const showDoctor = (item,props) => {
        return(
            <View>
                <TouchableOpacity onPress ={() => props.navigation.navigate('ReadOnlyProfile', {id: item._id})}>
                   <Text style = {{color: textColor, fontSize: 20}}>{item.firstName} {item.lastName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render == 0 && getAllInfo();
    render == 1 && getDoctorList();

    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45, marginHorizontal: 15}}>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style = {{...Style.subHeading, flex: 1}}>{doctorType}</Text>
                    <TouchableOpacity onPress = {() => {
                        props.navigation.navigate('FilterCity', {'filterCity': (val) => filterCity(val)})
                    }}>
                        <AntDesign name="filter" size={24} color='rgb(3, 184, 234)' />
                    </TouchableOpacity>
                </View>
                {showInfo(doctorType)}
                <Separator />

                <Text style = {Style.subHeading}>List Of Doctors</Text>
                <Separator />
                {doctorList &&
                    (<FlatList
                        data = {doctorList}
                        keyExtractor = {item => `${item._id}`}
                        renderItem = {({item}) => showDoctor(item, props) }
                    />)
                }
            </View>
        </View>
    )
}

DoctorList.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default DoctorList;