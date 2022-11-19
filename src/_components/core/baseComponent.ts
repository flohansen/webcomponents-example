export default abstract class BaseComponent extends HTMLElement {
    private template = document.createElement('template');

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.template);
    }

    protected connectedCallback(): void {
        this.template.innerHTML = this.createTemplate();
    }

    protected abstract createTemplate(): string;
}
