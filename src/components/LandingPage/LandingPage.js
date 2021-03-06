import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';

function LandingPage() {

  return (
    <div className="App">
      <Header />
        <h2>Welcome to our app Cache-App</h2>
        <h3>Keep track of your Notes by date, and look through them whenever you like!</h3>
      <Login />
      <Footer />
    </div>
  )
}

export default LandingPage;
