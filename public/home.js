function Home(){
  return (
    <Card
      txtcolor="black"
      header="Welcome to BadBank3"
      title="Login or create an account to get started."
      text="Make winthdrawls and deposits and check your balance using the navigation bar at the top of your screen!"
      body={(<img src="bank.png" className="img-fluid image-bigger" alt="Responsive image"/>)}
    />
  );  
}
