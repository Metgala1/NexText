import { useParams, useNavigate } from "react-router-dom";
import ConversationPreview from "./Conversation";
import { contacts } from "../data/chat";

export default function MobileConversation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const chatId = Number(id);
  const contact = contacts.find(c => c.id === chatId);

  if (!contact) {
    return <div>Chat not found</div>;
  }

  return (
    <div style={{ height: "100vh" }}>
      <button onClick={() => navigate(-1)}>← Back</button>
      <ConversationPreview contact={contact} />
    </div>
  );
}
