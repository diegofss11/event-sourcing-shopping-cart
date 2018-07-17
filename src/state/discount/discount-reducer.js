import discountActionType from './discount-action-types';

const initialState = {
    discounts: []
};

export default function discountReducer(state = initialState, action) {
    switch (action.type) {
        case discountActionType.DISCOUNT_ADDED:
            const { discount } = action.data;

            return {
                ...state,
                discounts: [
                    ...state.discounts,
                    discount
                ]
            };
        default:
            return state;
    }
}