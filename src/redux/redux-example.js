const redux = require('redux');

const initialState = {
    counter: 0
};

const incrementAction = {
    type: 'INCREMENT'
}

const add = (amount) => ({
    type: 'ADD',
    payload: {
        amount
    }
})

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1};
        case 'ADD':
            return { ...state, counter: state.counter + action.payload.amount}
        default:
            return state;
    }
}

const logStore = () => console.log('Store state: ', store.getState())

const store = redux.createStore(reducer, initialState)

logStore()
store.subscribe(logStore)
store.dispatch(incrementAction);
store.dispatch(add(5));