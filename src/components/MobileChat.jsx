import { useParams } from "react-router-dom";
import ConversationPreview from "./Conversation";
import { contacts } from "../data/chat";
import '../styles/MobileConversation.css'

export default function MobileConversation() {
  const { id } = useParams();

  const chatId = Number(id);
  const contact = contacts.find((c) => c.id === chatId);

  if (!contact) {
    return <div className="chatNotFound">Chat not found</div>;
  }

  return (
    <div className="mobileConversation">

      <div className="mobileConversationBody">
        <ConversationPreview contact={contact} />
      </div>
    </div>
  );
}
