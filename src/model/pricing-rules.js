import { superIpad, macbookPro, appleTv, vgaAdapter } from './catalogue';

export const pricingRules = {
    [appleTv.sku]: {
        occurrences: 3,
        type: 'SINGLE_DISCOUNT',
        value: appleTv.price,
    },
    [superIpad.sku]: {
        occurrences: 4,
        type: 'BULK_DISCOUNT',
        value: superIpad.price - 499.99
    },
    [macbookPro.sku]: {
        occurrences: 1,
        type: 'BUNDLE_IN_DISCOUNT',
        value: vgaAdapter.price
    },
};