// todo list items in cart

let TEMPLATE = `
<div class="cart">

    <ul class="dropdown menu" data-dropdown-menu>
      <li>
        <a href="#">Cart (<span>{{ $ctrl.cart.getCartLength() }}</span>)</a>
        <ul class="menu">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </li>
    </ul>
</div>
`;

export default class CartComponent {
    constructor() {
        this.controller = CartController;
    }

    template() {
        return TEMPLATE;
    }
}

class CartController {
    constructor(cartService) {
        this.cart = cartService;

    }

    $onInit() {
        // console.log('asd');
    }
}
