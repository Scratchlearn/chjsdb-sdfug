import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set, push } from 'firebase/database'; 
import { auth, rtdb } from '../firebaseConfig'; 
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

 
  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      let userCredential;
      if (isRegistering) {
        // Register new user
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert('User registered:', userCredential.user);
      } else {
        // Log in existing user
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert('User logged in:', userCredential.user);
      }

      // Store email and password in the Realtime Database
      const usersRef = ref(rtdb, 'users'); // Reference to the "users" collection
      const newUserRef = push(usersRef); // Create a new child under "users"

      // Save email and password (Note: Storing plain text passwords is unsafe in real applications)
      set(newUserRef, {
        email: email,
        password: password,
      }).then(() => {
        console.log('Email and password saved to Realtime Database successfully');
      }).catch((error) => {
        console.error('Error saving data to Realtime Database:', error);
      });
    } catch (error) {
      console.error('Error with authentication:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </div>
  );
}

export default Login;
