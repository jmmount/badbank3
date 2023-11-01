function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [loggedInUser, setLoggedInUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={
        show ? (
          <BalanceForm
            setShow={setShow}
            setStatus={setStatus}
            user={loggedInUser}
          />
        ) : (
          <BalanceMsg
            user={loggedInUser}
            setShow={setShow}
            setStatus={setStatus}
          />
        )
      }
    />
  );
}

function BalanceMsg(props) {
  return (
    <>
      <h5>
        Hi, {props.user.name}!
      </h5>
    </>
  );
}

function BalanceForm(props) {
  const [email, setEmail] = React.useState("");

  function handle() {
    fetch(`/account/findOne/${props.user.email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setStatus(`Your balance is $${data.balance}.`);
          props.setShow(false); // Switch to BalanceMsg
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus(`Error: ${err}`);
          console.log("err:", text);
        }
      });
  }

  return (
    <>
      {props.user ? (
        <div>
          Welcome Back: {props.user.name} <br />
          <button type="submit" className="btn btn-light" onClick={handle}>
            Check Balance
          </button>
        </div>
      ) : (
        <p>Please login to view your balance.</p>
      )}
    </>
  );
}
