import React from 'react'

const Signin = () => {
  return (
    <div className="component-signin">
      <form className="flex-column-center">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className="btn-cta" type="submit">LOGIN</button>
      </form>
      <p className="highlighted-text">Forgot Password ?</p>
    </div>
  )
}

export default Signin