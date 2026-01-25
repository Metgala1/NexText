import styles from '../styles/DesktopChatList.module.css';
import { ChatBubbleLeftIcon, PhoneIcon,  UserGroupIcon,  
  BuildingStorefrontIcon , ArchiveBoxIcon, MegaphoneIcon,
PhotoIcon, CogIcon,} from "@heroicons/react/24/outline";
import { HiStatusOnline } from "react-icons/hi"

function SideBarSettings () {
    
    return (
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
    )
}
export default SideBarSettings;