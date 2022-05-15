import { useState, useEffect } from 'react'
import Client, { localHost } from '../services/API'

const Account = () => {
  let [password, setPassword] = useState({
    oldPassword: '',
    newPassword: ''
  })

  const handleChange = (e) => {
    setPassword({
      ...password,
      name: e.target.value
    })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const res = await Client.put(`${localHost}/account/password/${}`)
  // }

  return (
    <div className="Acct-Container">
      <div className="Acct-Grid">
        <form onSubmit="">
          <h1>
            <span id="Change">Change</span> <span id="Password">Password</span>
          </h1>
          <input
            required
            type="password"
            placeholder="Old Password"
            value={password.oldPassword}
            onChange={handleChange}
          ></input>
          <input
            required
            type="password"
            placeholder="New Password"
            value={password.newPassword}
            onChange={handleChange}
          ></input>
          <button id="Edit">Submit</button>
        </form>
        <div>
          <h1>
            <span id="Saying">Saying</span>
            <span id="Farewell">Farewell?</span>
          </h1>
          <button id="Delete">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Account
