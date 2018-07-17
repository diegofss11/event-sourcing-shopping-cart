import { addDiscount } from '../state/discount/discount-action-creators';
import scanActionTypes from '../state/scan/scan-action-types';
import { getDiscount } from '../utils/discount';

export default pricingRules => ({ dispatch, getState }) => next => action => {
    if (action.type === scanActionTypes.PRODUCT_SCANNED) {
        next(action);

        const scannedProducts = getState().scan.products;
        const product = action.data.product;
        const discountRule = pricingRules[product.sku];

        if (discountRule) {
            const productOccurrences = scannedProducts.filter(scannedProduct => scannedProduct.sku === product.sku).length;
            const discount = getDiscount(discountRule, productOccurrences, product.sku);

            if (discount) {
                dispatch(addDiscount(discount));
            }
        }

        return;
    }

    return next(action);
};