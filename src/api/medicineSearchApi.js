import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.fda.gov/drug'
});
