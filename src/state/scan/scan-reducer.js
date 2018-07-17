import scanActionTypes from './scan-action-types';

export const initialState = {
    products: [],
};

export default function scanReducer(state = initialState, action) {
    switch (action.type) {
        case scanActionTypes.PRODUCT_SCANNED:
            const { product } = action.data;

            return {
                ...state,
                products: [
                    ...state.products,
                    product
                ]
            };
        default:
            return state;
    }
}