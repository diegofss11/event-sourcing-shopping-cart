import { bindActionCreators } from 'redux';

import { startCheckout, finishCheckout } from '../state/checkout/checkout-action-creators';
import { scan } from '../state/scan/scan-action-creators';

// developed to match the given checkout interface
export default ({ store, pricingRules }) => {
    startCheckout();

    const total = () => {
        const totalProductPrice = store.getState().scan.products.reduce((sum, { price }) => sum + price, 0);
        const totalDiscount = store.getState().discount.discounts.reduce((sum, { value }) => sum + value, 0);
        const totalPrice = (totalProductPrice - totalDiscount).toFixed(2);

        return finishCheckout(totalPrice);
    };

    return bindActionCreators({ scan, total }, store.dispatch);
};