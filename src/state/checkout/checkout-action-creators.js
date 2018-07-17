import checkoutActionTypes from './checkout-action-types';

export function startCheckout() {
    return dispatch => dispatch({ type: checkoutActionTypes.CHECKOUT_STARTED });
};

export function finishCheckout(totalPrice) {
    return dispatch => dispatch({
        type: checkoutActionTypes.CHECKOUT_FINISHED,
        data: { totalPrice }
    });
}