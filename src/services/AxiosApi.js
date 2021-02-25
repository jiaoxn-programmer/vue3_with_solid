import axios from 'axios';
import { BaseApi } from './BaseApi.js';

export class AxiosApi extends BaseApi {
    async fetch(url) {
        const { data } = await axios.get(`${this.baseUrl}${url}`);
        return data;
    }
}
