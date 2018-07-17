import { macbookPro } from '../model/catalogue';

export function getDiscount(discount, productOccurrences, productSkuToAdd) {
    switch (discount.type) {
        case 'SINGLE_DISCOUNT':
            //assuming for every 3 Apple TV purchase you will pay for 2 Apple TV
            if (productOccurrences % discount.occurrences === 0) {
                return discount;
            }

            break;
        case 'BULK_DISCOUNT':
            //assuming for the 6th superIpad purchase onwards
            //the price of all the superIpds will be reduced
            if (productOccurrences === discount.occurrences) {
                return {
                    ...discount,
                    value: discount.value * productOccurrences
                };
            } else if (productOccurrences > discount.occurrences) {
                return discount;
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