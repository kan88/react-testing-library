import { useEffect, useState } from 'react';
import Users from '../../components/users/users.jsx';
import Nav from '../../components/nav/nav.jsx';


export default function Start() {
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
      <Nav />
      <h1>Start Page</h1>

      {toggle === true && <div data-testid='toggle__text'>toggle</div>}
      {data && <div style={{ color: 'red' }}>Jest react testing</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle__btn' onClick={handleToggle}>click me</button>
      <input value={value} onInput={(evt) => setValue(evt.target.value)} type='text' placeholder='input value...'></input>
      <h1 data-testid='input__title'>{value}</h1>
      <Users />
    </div>
  );
}
