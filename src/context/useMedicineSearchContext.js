import React, {useEffect, useState} from 'react';
import medicineSearchApi from "../api/medicineSearchApi";

const useMedicineSearchContext = () => {
 const [medicineResult, setMedicineResult] = useState([]);

 const fetchMedicineResult = async(query) => {
  try{
   const medicineResultResponse = await medicineSearchApi.get('/label.json',{
    params: {
     count: 'openfda.generic_name.exact',
     search: query,
     limit: 50}});
   setMedicineResult(medicineResultResponse.data);
  }
  catch(error){
   console.log(error);
  }
 };
 return [medicineResult, fetchMedicineResult];
}

export default useMedicineSearchContext;