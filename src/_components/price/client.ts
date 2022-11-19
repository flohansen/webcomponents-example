import BaseComponent from "../core/baseComponent";

export default class Price extends BaseComponent {
    protected createTemplate(): string {
        const value = this.dataset?.price;

        const decimalValue = value?.substring(0, value.length - 2);
        const floatingPointValue = value?.substring(value.length - 2);
        return `${decimalValue},${floatingPointValue}€`;
    }
}

customElements.define('price-component', Price);
