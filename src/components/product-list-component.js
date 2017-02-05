let TEMPLATE = `
<div class="product-list">
    <product-component ng-repeat="product in $ctrl.products" product-data="product"></product-component>
</div>
`;

export default class ProductListComponent {
    constructor() {
        this.controller = ProductListController;
    }

    template() {
        return TEMPLATE;
    }
}

class ProductListController {
    constructor(productsService) {
        productsService.fetchProducts().then((response) => {
            this.products = response.data;
        });
    }

    $onInit() {
        this.products = [];
    }
}

