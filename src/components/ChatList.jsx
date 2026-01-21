import React, { useState } from "react";
import styles from "../styles/DesktopChatList.module.css";
import ConversationPreview from "./Conversation.jsx";

const contacts = [
  { id: 1, name: "Alice", last: "Hey, are you free?", time: "10:12" },
  { id: 2, name: "Bob", last: "Sent an image", time: "09:45" },
  { id: 3, name: "Charlie", last: "Thanks!", time: "Yesterday" },
];

export default function DesktopChatList() {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className={styles.app}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>NextText</div>

        <div className={styles.search}>
          <input placeholder="Search or start new chat" />
        </div>

        <ul className={styles.contactList}>
          {contacts.map((c) => (
            <li
              key={c.id}
              className={`${styles.contactItem} ${
                activeChat?.id === c.id ? styles.active : ""
              }`}
              onClick={() => setActiveChat(c)}
            >
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

      {/* Main Preview */}
      <main className={styles.mainPreview}>
        {!activeChat ? (
          <div className={styles.placeholder}>
            Select a chat to start messaging
          </div>
        ) : (
          <ConversationPreview contact={activeChat} />
        )}
      </main>
    </div>
  );
}


