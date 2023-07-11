import axios from "axios";
import { WEB_API } from "constants/api";

const Request = axios.create({
    baseURL: WEB_API,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/ld+json',
    },
});

export default Request;