import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from "./src/navigationRef";
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'
import MedicineScreen from './src/screens/MedicineScreen'
import PatientProfile from './src/screens/PatientProfile';
import FindDoctorScreen from "./src/screens/FindDoctorScreen";
import EditPatientProfileScreen from "./src/screens/EditPatientProfileScreen";
import AddUserData from "./src/screens/AddUserData";
import HospitalScreen from "./src/screens/HospitalScreen";
import HospitalProfile from "./src/screens/HospitalProfile";
import SignupIndex from "./src/screens/SignupIndex";
import DoctorSignup from "./src/screens/DoctorSignup";
import DoctorList from "./src/screens/DoctorList";
import EditDoctorProfileScreen from "./src/screens/EditDoctorProfileScreen";
import ReadOnlyProfile from "./src/screens/ReadOnlyProfile";
import ChemistSignup from "./src/screens/ChemistSignup";
import MedicineIndex from "./src/screens/MedicineIndex";
import MedicalStores from "./src/screens/MedicalStores";
import IndexScreen from "./src/screens/IndexScreen";
import FilterCity from "./src/screens/FilterCity";

const navigator = createStackNavigator({
    FilterCity,
    IndexScreen,
    MedicalStores,
    MedicineIndex,
    ChemistSignup,
    ReadOnlyProfile,
    DoctorList,
    EditDoctorProfileScreen,
    DoctorSignup,
    SignupIndex,
    Login: LoginScreen,
    Home: HomeScreen,
    Signup: SignupScreen,
    EditPatientProfileScreen,
    FindDoctor: FindDoctorScreen,
    Medicine: MedicineScreen,
    PatientProfile,
    AddUserData,
    HospitalScreen,
    HospitalProfile
},{
    initialRouteName: 'IndexScreen',
    defaultNavigationOptions: {
          title: "Health Care"
    }
});

const App = createAppContainer(navigator);

export default () => {
    return <>
        <AuthProvider>
            <App ref ={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
        </>
};

/*
    Mittu: Medicine Name -> Shops ka naam agaya
*/