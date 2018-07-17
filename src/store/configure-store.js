import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import debugMiddleware from './debug-middleware';
import discountEmitterMiddleWare from './discount-emitter-middleware';

import * as reducers from './reducers';

// Combine all reducers into a single reducer for Redux to run
const reducer = combineReducers({
    ...reducers,
});

export default function configureStore(pricingRules) {
    return createStore(
        reducer,
        applyMiddleware(
            reduxThunk,
            debugMiddleware,
            discountEmitterMiddleWare(pricingRules),
        ),
    );
};
