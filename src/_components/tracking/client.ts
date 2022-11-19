export default class Tracking extends HTMLElement {
    private trackingData: any;

    protected connectedCallback(): void {
        this.trackingData = this.dataset?.trackingData;

        for (const child of this.children) {
            this.attachTracking(child as HTMLElement);
        }
    }

    private attachTracking(element: HTMLElement): void {
        element.addEventListener('click', () => {
            console.log(`tracked click event on '${element.tagName}' with tracking data '${this.trackingData}'`);
        });
    }
}
