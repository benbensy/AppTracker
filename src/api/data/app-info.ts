import axios from "axios";

export function testApi() {
    return axios.get('/api/app-info/search')
}