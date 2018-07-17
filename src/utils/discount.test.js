import { getDiscount } from './discount';
import { pricingRules }  from '../model/pricing-rules';

describe('#discount', () => {
    describe('Apple TV discount rule', () => {
        const appleTvDiscountRule = pricingRules['atv'];

        it('gets a discount if users buy 3', () => {
            const discount = getDiscount(appleTvDiscountRule, 3);

            expect(discount).to.eql({
                occurrences: 3,
                type: 'SINGLE_DISCOUNT',
                value: 109.50,
            });
        });

        it('gets a discount if users buy 6 (any multiple of 3)', () => {
            const discount = getDiscount(appleTvDiscountRule, 6);

            expect(discount).to.eql({
                occurrences: 3,
                type: 'SINGLE_DISCOUNT',
                value: 109.50,
            });
        });

        it('does not get any discount if users buy less than 1', () => {
            const discount = getDiscount(appleTvDiscountRule, 1);

            expect(discount).to.eql(undefined);
        });
    });

    describe('Super iPad discount rule', () => {
        const superIpadDiscountRule = pricingRules['ipd'];

        it('gets a discount if users buy more than 4', () => {
            const discount = getDiscount(superIpadDiscountRule, 5);

            expect(discount).to.eql({
                occurrences: 5,
                type: 'BULK_DISCOUNT',
                value: 250
            });
        });

        it('does not get any discount if users buy less than 5', () => {
            const discount = getDiscount(superIpadDiscountRule, 4);

            expect(discount).to.eql(undefined);
        });
    });

    describe('MacbookPro discount rule', () => {
        const macbookProDiscountRule = pricingRules['mbp'];

        it('gets a discount if users buy 1', () => {
            const discount = getDiscount(macbookProDiscountRule, 1, 'mbp');

            expect(discount).to.eql({
                occurrences: 1,
                type: 'BUNDLE_IN_DISCOUNT',
                value: 30
            });
        });

        it('does not get any discount if users do not buy', () => {
            const discount = getDiscount(macbookProDiscountRule, 0, 'mpb');

            expect(discount).to.eql(undefined);
        });
    });
});