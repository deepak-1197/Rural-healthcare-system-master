import React, {useEffect, useState} from 'react';
import mapboxApi from "../api/mapboxApi";

const useGeoEncodingContext = () => {
    const [geoEncodingResult, setGeoEncodingResult] = useState([]);

    const fetchGeoEncodingResult = async(query) => {
        try{
            const geoEncodingResultResponse = await mapboxApi.get('',{
                params: {
                    key: 'ov23KfJxkwVxEjS73KZOAcVUhOC9M7Tj',
                    location: query
                }});
            setGeoEncodingResult(geoEncodingResultResponse.data);
        }
        catch(error){
            console.log(error);
        }
    };
    return [geoEncodingResult, fetchGeoEncodingResult];
}

export default useGeoEncodingContext;