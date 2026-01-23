import styles from "../styles/DesktopChatList.module.css";

function ConversationPreview({ contact }) {
  return (
    <div className={styles.conversation}>
      <header className={styles.conversationHeader}>
        <div className={styles.avatarLarge}>{contact.name.charAt(0)}</div>
        <div>
          <div className={styles.contactName}>{contact.name}</div>
          <div className={styles.status}>Online</div>
        </div>
      </header>

      <div className={styles.messages}>
        <div className={styles.messageIncoming}>
          <p className={styles.message}>{contact.last}</p>
          <p className={styles.time}>{contact.time}</p>
           
        </div>
      </div>

      <div className={styles.messageInput}>
        <input placeholder="Type a message…" />
      </div>
    </div>
  );
}

export default ConversationPreview