import  { useState } from "react";
import styles from "../styles/Signup.module.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 

  function createAccount(e) {
    e.preventDefault();
    // placeholder: submit name, phone, and code to backend
    console.log({ "name":name, email, password});
    setEmail('')
    setName('')
    setPassword('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>NextText</h1>
        <h2 className={styles.title}>Create account</h2>
        <p>Enter your details to get started with NexText</p>

        <form onSubmit={createAccount} className={styles.form}>
          <label className={styles.label}>
            Full name
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              name="full-name"
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="John@example.com"
              required
              name="email"
            />
          </label>
          
          <label className={styles.label}>
            Password
            <input 
            className={styles.input}
            value={password}
            type="password"
             name="password" 
             id="password" 
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
             />
          </label>

          <label className={styles.label}>
            Confirm Password
            <input 
            className={styles.input}
            value={confirmPassword}
            type="password"
             name="confirm-password" 
             id="confirm-password" 
            placeholder="Re-enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
             />
          </label>
          <button type="submit" className={styles.primary}>Create account</button>

        
        </form>
        <footer>
        <p>By clicking "Create Account" above, you acknowledge that you have read, understood, and agreed to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></p>

        <p className={styles.footer}>
          Already have an account?  <Link to="/login">Log in</Link>
        </p>
        </footer>
      </div>
    </div>
  );
}


