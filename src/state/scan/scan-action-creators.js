import scanActionTypes from './scan-action-types';

export function scan(product) {
    return dispatch => dispatch({
        type: scanActionTypes.PRODUCT_SCANNED,
        data: { product }
    });
};