import React from "react";
import styles from "../styles/DesktopChatList.module.css";

const contacts = [
  { id: 1, name: "Alice", last: "Hey, are you free?", time: "10:12" },
  { id: 2, name: "Bob", last: "Sent an image", time: "09:45" },
  { id: 3, name: "Charlie", last: "Thanks!", time: "Yesterday" },
];

export default function DesktopChatList() {
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>MyChat</div>
        <div className={styles.search}>
          <input placeholder="Search or start new chat" />
        </div>
        <ul className={styles.contactList}>
          {contacts.map((c) => (
            <li key={c.id} className={styles.contactItem}>
              <div className={styles.avatar}>{c.name.charAt(0)}</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{c.name}</div>
                <div className={styles.contactLast}>{c.last}</div>
              </div>
              <div className={styles.time}>{c.time}</div>
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.mainPreview}>
        <div className={styles.placeholder}>Select a chat to start messaging</div>
      </main>
    </div>
  );
}