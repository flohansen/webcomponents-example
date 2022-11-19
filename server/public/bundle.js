(() => {
  // src/_frames/pdp-frame/client.ts
  var PdpFrame = class extends HTMLElement {
    constructor() {
      super();
    }
  };
  customElements.define("pdp-frame", PdpFrame);

  // src/_components/core/baseComponent.ts
  var BaseComponent = class extends HTMLElement {
    constructor() {
      super();
      this.template = document.createElement("template");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(this.template);
    }
    connectedCallback() {
      this.template.innerHTML = this.createTemplate();
    }
  };

  // src/_components/price/client.ts
  var Price = class extends BaseComponent {
    createTemplate() {
      const value = this.dataset?.price;
      const decimalValue = value?.substring(0, value.length - 2);
      const floatingPointValue = value?.substring(value.length - 2);
      return `${decimalValue},${floatingPointValue}\u20AC`;
    }
  };
  customElements.define("price-component", Price);
})();
