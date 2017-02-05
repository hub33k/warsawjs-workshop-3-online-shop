export default class CartService {
    constructor(storageService) {
        this.storageService = storageService;
        this.cart = this.storageService.read('xxxx') || [];
    }

    addToCart(product) {
        this.cart.push(product);
        this.storageService.save('xxxx', this.cart);
    }

    getCart() {
        return this.cart;
    }

    getCartLength() {
        return this.cart.length;
    }
}
