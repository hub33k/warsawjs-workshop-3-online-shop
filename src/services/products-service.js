const url = 'http://localhost:3000/products';

export default class ProductsService {
    constructor(httpService) {
        this.httpService = httpService;
    }

    fetchProducts() {
        return this.httpService.$get(url);
    }
}
