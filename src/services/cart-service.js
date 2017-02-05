export default class CartService {
    constructor(storageService) {
        this.storageService = storageService;
        this.cart = this.storageService.read('cart') || [];
    }

    addToCart(product) {
        this.cart.push(product);
        this.storageService.save('cart', this.cart);
    }

    getCart() {
        return this.cart;
    }

    getCartLength() {
        return this.cart.length;
    }
}
