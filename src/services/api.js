export class Api {
    constructor(url) {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
        this.url = url;
    }

    async fetch() {
        const response = await fetch(`${this.baseUrl}${this.url}`);
        return await response.json();
    }
}
