import styles from '../styles/Conversation.module.css';
import { ArrowLeftIcon, PhoneIcon , VideoCameraIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';


function ConversationPreview({ contact }) {
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className={styles.conversation}>
      
      {/* HEADER */}
      <header className={styles.conversationHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.headerInfo}>
            {isMobile && (
           <button className={styles.backButton} onClick={() => navigate(-1)}>
            <ArrowLeftIcon className={styles.backIcon} />
           </button>
         )}

          <div className={styles.avatarLarge}>
            {contact.name.charAt(0)}
          </div>
          <div className={styles.headerText}>
            <div className={styles.contactName}>{contact.name}</div>
            <div className={styles.status}>Online</div>
          </div>
          </div>
          <div className={styles.headerIcons}>
            <VideoCameraIcon width={25} className={styles.headerIcon} />
            <PhoneIcon width={25} className={styles.headerIcon} />

          </div>
        </div>
      </header>

      {/* MESSAGES */}
      <div className={styles.messages}>
        <div className={styles.messageRow}>
          <div className={styles.messageIncoming}>
            <span className={styles.messageText}>{contact.last}</span>
            <span className={styles.messageTime}>{contact.time}</span>
          </div>
        </div>
      </div>

      {/* INPUT BAR */}
      <div className={styles.messageInputBar}>
        <input
          className={styles.messageInputField}
          placeholder="Type a message"
        />
        <button className={styles.sendBtn}>
         <PaperAirplaneIcon width={22} />
       </button>

      </div>
    </div>
  );
}

export default ConversationPreview;
