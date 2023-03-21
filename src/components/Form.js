import React, { useState } from 'react'
import Signout from './Signout';
import Signin from './Signin';

const Form = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="component-form">
      <div className="form-tab flex-row">
        <div
          className={`tab-btn center-text ${login === true ? "btn-active" : ""}`}
          onClick={() => setLogin(!login)}
        >
          <p>Login</p> </div>
        <div
          className={`tab-btn center-text ${login === false ? "btn-active" : ""}`}
          onClick={() => setLogin(!login)}
        >
          <p> Sign up</p> </div>
      </div>
      {
        !login && <Signout />
      }
      {
        login && <Signin />
      }
    </div>
  )
}

export default Form