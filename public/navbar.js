function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto" id="login-menu"> {/* Use ml-auto to move the "Login" item to the right */}
        <li className="nav-item">
    <button className="btn btn-link nav-button" onClick={() => window.location.href = '#/login/'}>
      Login
    </button>
  </li>
        </ul>
      </div>
      <style>
        {`
          #login-menu .nav-button {
            border: 1px solid #007BFF;
            border-radius: 5px;
            padding: 5px 15px;
          }
        `}
      </style>
    </nav>
  );
}
