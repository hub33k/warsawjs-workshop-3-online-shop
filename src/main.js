import angular from 'angular';

import loadModule from './modules/shop-module';

import ProductComponent from './components/product-component';
import HeaderComponent from "./components/header-component";
import FooterComponent from "./components/footer-component";
import CartComponent from "./components/cart-component";
import ProductListComponent from "./components/product-list-component";

import HTTPService from './services/http-service';
import ProductsService from './services/products-service';
import StorageService from './services/storage-service';
import CartService from './services/cart-service';

let shop = loadModule();

shop.component('productComponent', new ProductComponent());
shop.component('headerComponent', new HeaderComponent());
shop.component('footerComponent', new FooterComponent());
shop.component('cartComponent', new CartComponent());
shop.component('productListComponent', new ProductListComponent());

shop.factory('httpService', HTTPService);
shop.service('productsService', ProductsService);
shop.factory('storageService', StorageService);
shop.service('cartService', CartService);

angular.bootstrap(window.document, [
    'shop',
]);
