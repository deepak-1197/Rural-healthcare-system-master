import React from 'react';
import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import userDataApi from "../api/userDataApi";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error': return {...state, errorMessage: action.payload};
        case 'signup': return {token: action.payload, errorMessage: ''};
        case 'signin': return {token: action.payload, errorMessage: ''};
        case 'clearErrorMessage': return {...state, errorMessage: ''};
        case 'signout': return {token: null, errorMessage: ''};
        case 'userInfo': return {...state, userInfo: action.payload};
        case 'getAllInfo': return {...state, allInfo: action.payload};
        case 'getParticularInfo': return {...state, particularInfo: action.payload};
        default: return state;
    }
};

const getParticularInfo = dispatch => {
    return async (id) => {
        const dataId = JSON.stringify({id});
        const token = await AsyncStorage.getItem('token');

        try{
            const data = await userDataApi.post('/getParticularInfo', dataId, {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            if(data){
                dispatch({type: 'getParticularInfo', payload: data.data});
            }
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong in Update'});
        }
    }
}

const getAllInfo = dispatch => {
    return async (reRender) => {
        const token = await AsyncStorage.getItem('token');
        try{
            const data = await userDataApi.get('/getAllInfo', {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            if(data){
                dispatch({type: 'getAllInfo', payload: data.data});
            }
            reRender(1);
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong in Update'});
        }
    }
}

const updateDoctorData = dispatch => {
    return async ({id, firstName, lastName, age, phone, address, gender, appointmentFees, specialisation}) => {
        const token = await AsyncStorage.getItem('token');
        const data = JSON.stringify({
            id: id,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            address: address,
            appointmentFees,
            specialisation,
            phoneNumber: phone
        })
        try{
            await userDataApi.post('/updateDoctor', data, {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            });
            navigate('PatientProfile');
        }catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong in Update'});
        }
    }
}

const updatePatientData = dispatch => {
    return async ({id, firstName, lastName, age, phone, address, gender, bloodGroup, diabitic, sugar, highBloodPressure, currentUnderDiagnosis}) => {
        const token = await AsyncStorage.getItem('token');
        const data = JSON.stringify({
            id: id,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            address: address,
            bloodGroup: bloodGroup,
            diabitic: diabitic,
            sugar,
            highBloodPressure: highBloodPressure,
            currentUnderDiagnosis: currentUnderDiagnosis,
            phoneNumber: phone
        })
        try{
            await userDataApi.post('/updatePatient', data, {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            navigate('PatientProfile');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong in Update'});
        }
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signup', payload: token});
        navigate('PatientProfile');
    }
    else{
        navigate('Login');
    }
}

const clearErrorMessage = dispatch => {
  return () => dispatch({type: 'clearErrorMessage'});
};

const postUserInfo = (dispatch) => {
     return async ({firstName, lastName, age, phone, address, gender, bloodGroup, diabitic, highBloodPressure, sugar, currentUnderDiagnosis, userType, appointmentFees,
                       specialisation, medicineList, shopName}, changeRegistrationStatus) =>{
        const token = await AsyncStorage.getItem('token');
        const data = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            address: address,
            bloodGroup: bloodGroup,
            diabitic: diabitic,
            highBloodPressure: highBloodPressure,
            sugar,
            medicineList,
            currentUnderDiagnosis: currentUnderDiagnosis,
            phoneNumber: phone,
            userType: userType,
            fees: appointmentFees,
            specialisation: specialisation,
            shopName
        })
        if(token){
            await userDataApi.post('/userdata', data, {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            changeRegistrationStatus(true);
        }
        else{
            dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const signup = (dispatch) => {
    return async ({email, password}, changeTokenStatus) => {
        try{
            console.log('Entered');
            const response = await userDataApi.post('/Signup', {email, password });
            console.log("Won");
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            changeTokenStatus(true);
            }catch (err){
                console.log(err);
                dispatch({type: 'add_error', payload: 'Something went wrong with Signup'});
        }
    };
};

const getUserInfo = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            const userInfo = await userDataApi.get('/userdata', { headers: { 'Authorization': `Bearer ${token}` }});
            dispatch({type: 'userInfo', payload: userInfo.data});
        }
        else{
            dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await userDataApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('PatientProfile');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with Signin'})
        }
    }
}

const signout = (dispatch) => async() => {
   await AsyncStorage.removeItem('token');
   dispatch({type: 'signout'});
   navigate('Home')
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {getAllInfo, signup, signin, clearErrorMessage, tryLocalSignin, signout, getParticularInfo, getUserInfo, postUserInfo, updatePatientData, updateDoctorData},
    {token: null, errorMessage: '', userInfo: {}, allInfo: [], particularInfo: {}});