import angular from 'angular';
import loadModule from './modules/shop-module';
import ProductComponent from './components/product-component';

let shop = loadModule();

shop.component('productComponent', new ProductComponent());

angular.bootstrap(window.document, [
    'shop',
]);
