import React from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import {Provider, connect} from 'react-redux'

const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})

// Destructuring a slice
const {actions, reducer} = slice;
const {decrement, increment} = actions;

const store = configureStore({
    reducer: {
        counter: reducer // slice.reducer (Counter state)
    }
})

interface CounterProps{
    value: number,
    increment: () => void;
    decrement: () => void;
}

const Counter = ({value, increment, decrement}: CounterProps) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-header-title">Redux Counter</h2>
            </div>
            <div className="card-content">
                <p>
                    Counter: <span>{value}</span>
                </p>
                <div className="buttons">
                    <button className="button" onClick={decrement}>Decrement</button>
                    <button className="button" onClick={increment}>Increment</button>
                    <button className="button">Add</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: {counter: number}) => ({
    value: state.counter
});

// object version(ECMAScript 2015)
const mapDispatchToProps = {increment, decrement}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

const ReduxCounter = () => {
    return (
        <Provider store={store}>
            <ConnectedCounter />
        </Provider>
    )
}

export default ReduxCounter
