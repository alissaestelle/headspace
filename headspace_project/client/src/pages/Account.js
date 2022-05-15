import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { localHost } from '../services/API'
import { CheckSession } from '../services/Requests'

const Account = ({
  pK,
  setPK,
  user,
  setUser,
  toggleAuth,
  setLoginSuccess,
  charID
}) => {
  let navigate = useNavigate()
  let [changePass, setChangePass] = useState({
    oldPassword: '',
    newPassword: ''
  })

  useEffect(() => {
    const checkSession = async () => {
      let res = await CheckSession()
      setPK(res.id)
    }
    checkSession()
  }, [])

  const handleChange = (e) => {
    console.log(e.target.value)
    setChangePass({
      ...changePass,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    await Client.put(`${localHost}/account/password/${pK}`, changePass)
    setChangePass({
      oldPassword: '',
      newPassword: ''
    })
    navigate('/')
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await Client.delete(`${localHost}/account/user/${pK}`)
    setUser({})
    toggleAuth(false)
    setLoginSuccess(false)
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="Acct-Container">
      <div className="Acct-Grid">
        <form onSubmit={handleUpdate}>
          <h1>
            <span id="Change">Change</span> <span id="Password">Password</span>
          </h1>
          <input
            required
            type="password"
            placeholder="Old Password"
            name="oldPassword"
            value={changePass.oldPassword}
            onChange={handleChange}
          ></input>
          <input
            required
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={changePass.newPassword}
            onChange={handleChange}
          ></input>
          <button id="Edit">Submit</button>
        </form>
        <div>
          <h1>
            <span id="Saying">Saying</span>
            <span id="Farewell">Farewell?</span>
          </h1>
          <button id="Delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account
