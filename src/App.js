// App.js
import React from 'react';
import Header from './components/Header';
import FeatureDescription from './components/FeatureDescription';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

// import FirestoreActions from './components/FirestoreActions'; // Import the FirestoreActions component
import Screenshots from './components/Screenshots';
import CallToAction from './components/CallToAction';
import Login from './components/Login'; // Import the Login component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Benefits />
      <CallToAction />
      <FeatureDescription />
      <Screenshots />
      
       {/* <FirestoreActions /> */}
      <Login /> {/* Add the Login component */}
      <Footer/>
    </div>
  );
}

export default App;
