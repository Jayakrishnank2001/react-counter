import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import stateReducer from './reducers/reducer';

const initialState = {
  value: 0,
  color:''
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <div className="App">
      <button onClick={() => {
        dispatch('Increment')
      }} style={{ background: state.color }} className='btn mt-3'>Increment</button>
      <h4>{state.value}</h4>
      <button onClick={() => {
        dispatch('Decrement')
      }} style={{ background: state.color }} className='btn mt-3'>Decrement</button>
      <button onClick={() => {
        dispatch('green')
      }} className='btn mt-3 btn-success'>green</button>
      <button onClick={() => {
        dispatch('blue')
      }} className='btn mt-3 btn-primary'>blue</button>
    </div>
  );
}

export default App;
