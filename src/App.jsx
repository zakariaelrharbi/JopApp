import React from 'react'

const App = () => {
  const name = ' My name is Zakaria '
  const age = 'I am 25 years old'
  const Friends = ['ahmed', 'zakaria', 'kilozerko', 'kim']
  const joined = true;
  return (
    <>
      <div className='text-red font-bold text-4xl p-6 text-center'>
        hello {name} , {age}.
      </div>
      <p className='font-bold p-8'>
        {
          Friends.map((Friends, index)=>(
            <li key={index}>
              {Friends}
            </li>
          ))
        }
      </p>
      {
        joined ? <button className='bg-green-500 p-4 rounded ml-4'>Click Here</button> : <button className='bg-amber-600 p-4 rounded ml-4'>You are imposter </button>
      }
      
    </>
  )
}

export default App
