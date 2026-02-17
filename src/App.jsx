import React from 'react'

const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name}</p>
      <p>the sum of {x} and {y} is {x + y}</p>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> // key is used to avoid error on the console
        ))}
      </ul>

      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>} {/* loggedIn ? = if(loggedIn) | : = else */}
    </>
  )
}

export default App