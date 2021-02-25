export class BaseApi {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    async fetch(url) {
        const response = await fetch(`${this.baseUrl}${url}`);
        return await response.json();
    }
}
