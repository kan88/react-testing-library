import { useEffect, useState } from 'react';
import './App.css';
import Users from './users/users.jsx';

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')
  const handleToggle = () => {
    setToggle(prev => !prev)
  }
  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 500)
  }, [])
  return (
    <div className="App">
      {toggle === true && <div data-testid='toggle__text'>toggle</div>}
      {data && <div style={{color: 'red'}}>Jest react testing</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle__btn' onClick={handleToggle}>click me</button>
      <input value={value} onInput={(evt) => setValue(evt.target.value)} type='text' placeholder='input value...'></input>
      <h1 data-testid='input__title'>{value}</h1>
      <Users/>
    </div>
  );
}

export default App;
