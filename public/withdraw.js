function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [loggedInUser, setLoggedInUser] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [userBalance, setUserBalance] = React.useState(null);

  const updateUserBalance = (newBalance) => {
    setLoggedInUser(prevUser => ({ ...prevUser, balance: newBalance }));
  };

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      body={
        show ? (
          <WithdrawForm
            setShow={setShow}
            setStatus={setStatus}
            user={loggedInUser}
            updateUserBalance={updateUserBalance}
            setUserBalance={setUserBalance}
          />
        ) : (
          <WithdrawMsg user={loggedInUser} setShow={setShow} setStatus={setStatus} userBalance={userBalance}/>
        )
      }
    />
  );
}

function WithdrawMsg(props) {
  return (
    <>
      <h5>Thank you for banking with BadBank3, {props.user.name}! </h5>
      <p>Your current balance: ${props.userBalance}</p>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
        Withdraw again
      </button>
    </>
  );
}

function WithdrawForm(props) {
  const [amount, setAmount] = React.useState('');

  function handle() {
    // Ensure the user object exists before accessing its properties
    if (props.user) {
      fetch(`/account/update/${props.user.email}/-${amount}`)
        .then(response => response.text())
        .then(text => {
          try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            props.updateUserBalance(data.newBalance); // Update user balance after successful Withdrawl
            props.setUserBalance(data.value.balance);
            console.log('JSON:', data);
          } catch (err) {
            props.setStatus('Withdrawl failed');
            console.log('err:', text);
          }
        });
    }
  }

  return (
    <>
      {props.user ? ( // Conditional rendering
        <div>
          Welcome Back: {props.user.name} <br />
          Amount<br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)}
          />
          <br />
          <button type="submit" className="btn btn-light" onClick={handle}>
            Withdraw
          </button>
        </div>
      ) : (
        <p>Please log in to make a withdrawl.</p>
      )}
    </>
  );
}
