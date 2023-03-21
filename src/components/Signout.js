import React from 'react'

const Signout = () => {
  return (
    <div className="component-signin">
    <form className="flex-column-center">
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button className="btn-cta" type="submit">SIGNUP</button>
    </form>
  </div>
  )
}

export default Signout