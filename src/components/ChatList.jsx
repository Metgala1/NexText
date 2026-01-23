import React, { useState } from "react";
import styles from "../styles/DesktopChatList.module.css";
import ConversationPreview from "./Conversation.jsx";
import { useNavigate } from "react-router-dom";
import { contacts } from "../data/chat.js";
import { ChatBubbleLeftIcon, PhoneIcon,  UserGroupIcon,  
  BuildingStorefrontIcon , ArchiveBoxIcon, MegaphoneIcon,
PhotoIcon, CogIcon, PencilIcon ,  Bars3Icon } from "@heroicons/react/24/outline";
import { HiStatusOnline } from "react-icons/hi"

export default function DesktopChatList() {
  const [activeChat, setActiveChat] = useState(null);
  const navigate = useNavigate();

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const handleClick = (chat) => {
    if (isMobile) {
      navigate(`/chats/${chat.id}`);
    } else {
      setActiveChat(chat);
    }
  };

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div className={styles.asideSettings}>
          <div className={styles.ChatBubbleLeftIcon}>
            <ChatBubbleLeftIcon className={styles.icon} width={50} />
          </div>
          <div className={styles.PhoneIcon}>
            <PhoneIcon className={styles.icon} width={50} />

          </div>
          <div className={styles.StatusIcon}>
            <HiStatusOnline className={styles.icon} size={50} />
        </div>
        <div className={styles.UserGroupIcon}>
          <UserGroupIcon className={styles.icon} width={50} />
        </div>
        <div className={styles.ArchiveBoxIcon}>
          <ArchiveBoxIcon className={styles.icon} width={50} />
        </div>
        <div className={styles.BuildingStorefrontIcon}>
          <BuildingStorefrontIcon className={styles.icon} width={50} />
        </div>
        <div className={styles.MegaphoneIcon}>
          <MegaphoneIcon className={styles.icon} width={50} />
        </div>
        <div className={styles.PhotoIcon}>
          <PhotoIcon className={styles.icon} width={50} />
        </div>
        <div className={styles.CogIcon}>
          <CogIcon className={styles.icon} width={50} />
        </div>
        </div>
        <div className={styles.sidebarContent}>

        <div className={styles.brandDiv}>
          <p className={styles.brand}>NextText</p>
          <div className={styles.newMessage}>
            <PencilIcon  width={30} />
            <Bars3Icon width={30} />
          </div>
          </div>

        <div className={styles.search}>
          <input placeholder="Search or start new chat" />
        </div>

        <ul className={styles.contactList}>
          {contacts.map((c) => (
            <li
              key={c.id}
              className={styles.contactItem}
              onClick={() => handleClick(c)}
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
        </div>
      </aside>

      {/* Desktop only */}
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