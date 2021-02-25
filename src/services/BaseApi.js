export class BaseApi {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    async fetch(url) {
        throw new Error('没有具体的实现方法');
    }
}
