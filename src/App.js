import React, { useState } from 'react';


function App() {

  const [formFields, setFormFields] = useState({ username: '', email: '' });

  const updateFormFields = e => {
    setFormFields(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }


  console.log(formFields)
  return (
    <div className="App">
      <form>
        <input type="text" name="username" onChange={updateFormFields} />
        <input type="email" name="email" onChange={updateFormFields} />
      </form>
    </div>
  );
}

export default App;