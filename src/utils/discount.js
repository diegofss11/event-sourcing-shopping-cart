import { macbookPro } from '../model/catalogue';

export function getDiscount(discount, productOccurrences, productSkuToAdd) {
    switch (discount.type) {
        case 'SINGLE_DISCOUNT':
            if (productOccurrences === discount.occurrences) {
                return discount;
            }

            break;
        case 'BULK_DISCOUNT':
            if (productOccurrences > discount.occurrences) {
                return {
                    ...discount,
                    value: discount.value * productOccurrences
                };
            }

            break;
        case 'BUNDLE_IN_DISCOUNT':
            if (productSkuToAdd === macbookPro.sku) {
                return discount;
            }

            break;
        default:
            return undefined;
    };
}