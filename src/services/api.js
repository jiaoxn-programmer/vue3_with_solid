import { BaseApi } from './BaseApi';

export class Api {
    constructor() {
        this.apiProvider = new BaseApi();
    }

    async fetch(url) {
        return await this.apiProvider.fetch(url);
    }
}
