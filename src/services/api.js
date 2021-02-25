import { AxiosApi } from './AxiosApi';

export class Api {
    constructor() {
        this.apiProvider = new AxiosApi();
    }

    async fetch(url) {
        return await this.apiProvider.fetch(url);
    }
}
