import  { useState } from "react";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  function createAccount(e) {
    e.preventDefault();
    // placeholder: submit name, phone, and code to backend
    console.log({ name, email, password});
    setEmail('')
    setName('')
    setPassword('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create account</h1>

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
          <button type="submit" className={styles.primary}>Create account</button>

        
        </form>

        <p className={styles.footer}>
          Already have an account?  Log in 
        </p>
      </div>
    </div>
  );
}


