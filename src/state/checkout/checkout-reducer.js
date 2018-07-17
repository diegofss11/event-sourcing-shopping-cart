import checkoutActionTypes from './checkout-action-types';

const initialState = {
    totalPrice: 0,
};

export default function checkoutReducer(state = initialState, action) {
    switch (action.type) {
        case checkoutActionTypes.CHECKOUT_STARTED:
            return {
                ...state,
            }
        case checkoutActionTypes.CHECKOUT_FINISHED:
            const { totalPrice } = action.data;

            return {
                ...state,
                isCheckoutActive: false,
                totalPrice,
            }
        default:
            return state;
    }
}