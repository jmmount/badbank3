function Home(){
  return (
    <Card
      txtcolor="black"
      header="Welcome to BadBank3"
      title="Login or create an account to get started."
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid image-bigger" alt="Responsive image"/>)}
    />
  );  
}
