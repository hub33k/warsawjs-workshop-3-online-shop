let TEMPLATE = `
<section class="product small-3 medium-3 large-3 columns">
    <h2>{{ $ctrl.productData.name }}</h2>
    <div class="product-body">
        <!--<img src="http://placehold.it/100x100" alt="Alt">-->
        <img ng-src="{{ $ctrl.productData.image }}" alt="Alt">
        <p>{{ $ctrl.productData.description }}</p>
    </div>
    <footer>
        <button ng-click="$ctrl.addProductToCart()" class="button success" type="button">Do koszyka</button>
        <input type="text" value="1">
    </footer>
</section>
`;

export default class ProductComponent {
    constructor() {
        this.bindings = {
            productData: '=',
        };
        this.controller = ProductController;
    }

    template() {
        return TEMPLATE;
    }
}

class ProductController {
    constructor(cartService) {
        this.cartService = cartService;
    }

    $onInit() {
        // console.log(this.productData);
    }

    addProductToCart() {
        this.cartService.addToCart(this.productData);
    }
}

