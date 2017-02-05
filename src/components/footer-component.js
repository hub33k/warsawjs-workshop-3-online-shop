let TEMPLATE = `
<footer class="page-footer">
    <p>Shop &copy; ${new Date().getFullYear()}</p>
</footer>
`;

export default class FooterComponent {
    template() {
        return TEMPLATE;
    }
}
