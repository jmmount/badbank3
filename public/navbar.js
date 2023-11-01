function NavBar() {
  const handleLogoutClick = () => {
    window.localStorage.clear();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank3</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/CreateAccount/" className="nav-link">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link to="/deposit/" className="nav-link">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link to="/withdraw/" className="nav-link">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link to="/balance/" className="nav-link">Balance</Link>
          </li>
          <li className="nav-item">
            <Link to="/alldata/" className="nav-link">AllData</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto" id="login-menu">
          <li className="nav-item">
            <Link to="/login/" className="btn btn-link nav-button" onClick={handleLogoutClick}>Login/Logout</Link>
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