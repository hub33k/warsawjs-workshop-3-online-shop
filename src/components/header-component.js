let TEMPLATE = `
<header class="page-header">
    <h1><a href="/">Shop</a></h1>

    <cart-component></cart-component>
</header>
`;

export default class HeaderComponent {
    template() {
        return TEMPLATE;
    }
}
