import './App.css';
import { useReducer } from 'react';
import stateReducer, { TYPE } from './reducers/reducer';

const initialState = {
  value: 0,
  color:''
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <div className="App">
      <button onClick={() => {
        dispatch({
          type: TYPE.CHANGE_VALUE,
          payload:1
        })
      }} style={{ background: state.color }} className='btn mt-3'>Increment</button>
      <h4>{state.value}</h4>
      <button onClick={() => {
        dispatch({
          type: TYPE.CHANGE_VALUE,
          payload:-1
        })
      }} style={{ background: state.color }} className='btn mt-3'>Decrement</button>
      <button onClick={() => {
        dispatch({
          type: TYPE.CHANGE_COLOR,
          payload:'green'
        })
      }} className='btn mt-3 btn-success'>green</button>
      <button onClick={() => {
        dispatch({
          type: TYPE.CHANGE_COLOR,
          payload:'blue'
        })
      }} className='btn mt-3 btn-primary'>blue</button>
    </div>
  );
}

export default App;
