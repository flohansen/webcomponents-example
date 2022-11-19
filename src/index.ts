import PdpFrame from './_frames/pdp-frame/client';
import Price from './_components/price/client';
import Tracking from './_components/tracking/client';

window.addEventListener('load', () => {
    customElements.define('pdp-frame', PdpFrame);
    customElements.define('pdp-price', Price);
    customElements.define('pdp-tracking', Tracking);
});
