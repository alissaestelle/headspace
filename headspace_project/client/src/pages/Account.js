const Account = () => {
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
            value=""
            onChange=""
          ></input>
          <input
            required
            type="password"
            placeholder="New Password"
            value=""
            onChange=""
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
