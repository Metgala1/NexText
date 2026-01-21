import { useState } from "react";
import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    // placeholder: submit email + password to backend
    console.log({ email, password });

    setEmail("");
    setPassword("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>NextText</h1>
        <h2 className={styles.title}>Welcome back</h2>
        <p>Log in to continue chatting on NextText</p>

        <form onSubmit={login} className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="John@example.com"
              required
              name="email"
              type="email"
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              value={password}
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit" className={styles.primary}>
            Log in
          </button>
        </form>

        <footer>
          <p className={styles.footer}>
            Don’t have an account? <Link to="/signup">Create one</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
