import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import discountEmitterMiddleware from './discount-emitter-middleware';
import { macbookPro, appleTv, superIpad } from '../model/catalogue';
import { initialState } from '../state/scan/scan-reducer';
import { pricingRules } from '../model/pricing-rules';
import scanActionTypes from '../state/scan/scan-action-types';

const middlewares = [thunk, discountEmitterMiddleware(pricingRules)];
const mockStore = configMockStore(middlewares);

describe('#discountEmitterMiddleware', () => {
    it('dispatches `SINGLE_DISCOUNT` for AppleTv if users buy more than 2 units', () => {
        const actions = {
            scanAppleTvAction: {
                data: { product: appleTv },
                type: scanActionTypes.PRODUCT_SCANNED
            },
            addDiscount: {
                data: { discount: { occurrences: 3, type: 'SINGLE_DISCOUNT', value: 109.5 } },
                type: 'DISCOUNT_ADDED'
            }
        };

        const store = mockStore({
            scan: { ...initialState, products: [ appleTv, appleTv, appleTv ] }
        });

        const expectedActions = [ actions.scanAppleTvAction, actions.addDiscount];

        store.dispatch(actions.scanAppleTvAction);

        expect(store.getActions()).to.eql(expectedActions);
    });

    it('dispatches `BULK_DISCOUNT` for Super iPad if users buy more than 4 units', () => {
        const actions = {
            scanSuperIpadAction: {
                data: { product: superIpad },
                type: scanActionTypes.PRODUCT_SCANNED
            },
            addDiscount: {
                data: { discount: { occurrences: 5, type: 'BULK_DISCOUNT', value: 250 } },
                type: 'DISCOUNT_ADDED'
            }
        };

        const expectedActions = [ actions.scanSuperIpadAction, actions.addDiscount ];

        const store = mockStore({
            scan: {
                ...initialState,
                products: [superIpad, superIpad, superIpad, superIpad, superIpad]
            }
        });

        store.dispatch(actions.scanSuperIpadAction);

        expect(store.getActions()).to.eql(expectedActions);
    });

    it('applies `BUNDLE_IN_DISCOUNT` if user buy a Macbook Pro', () => {
        const actions = {
            scanMacbookProAction: {
                data: { product: macbookPro },
                type: scanActionTypes.PRODUCT_SCANNED
            },
            addDiscount: {
                data: { discount: { occurrences: 1, type: 'BUNDLE_IN_DISCOUNT', value: 30 } },
                type: 'DISCOUNT_ADDED'
            }
        };
        const expectedActions = [ actions.scanMacbookProAction, actions.addDiscount];
        const store = mockStore({ scan: initialState });

        store.dispatch(actions.scanMacbookProAction);

        expect(store.getActions()).to.eql(expectedActions);
    });
});