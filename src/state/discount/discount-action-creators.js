import discountActionTypes from './discount-action-types';

export function addDiscount(discount) {
    return dispatch => dispatch({
        type: discountActionTypes.DISCOUNT_ADDED,
        data: { discount }
    });
};