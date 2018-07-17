export default (store) => next => action => {
    console.group();
    console.log('---> DISPATCHING ACTION', action.data);
    console.groupEnd();

    return next(action);
};