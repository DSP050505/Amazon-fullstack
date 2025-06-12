import axios from "axios";

const instance =axios.create({
    baseURL: window.location.hostname === 'localhost'
    ? 'http://127.0.0.1:5001/challenge-b6c75/us-central1/api'
    : 'https://us-central1-challenge-b6c75.cloudfunctions.net/api',
});

export default instance