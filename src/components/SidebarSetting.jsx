import styles from "../styles/SidebarSettings.module.css";
import { ChatBubbleLeftIcon, PhoneIcon,  UserGroupIcon,  
  BuildingStorefrontIcon , ArchiveBoxIcon, MegaphoneIcon,
PhotoIcon, CogIcon,} from "@heroicons/react/24/outline";
import { HiStatusOnline } from "react-icons/hi"

function SideBarSettings () {
    
    return (
        <div className={styles.asideSettings}>
          <div className={styles.ChatBubbleLeftIcon}>
            <ChatBubbleLeftIcon className={styles.icon} />
          </div>
          <div className={styles.PhoneIcon}>
            <PhoneIcon className={styles.icon} />

          </div>
          <div className={styles.StatusIcon}>
            <HiStatusOnline className={styles.icon} />
        </div>
        <div className={styles.UserGroupIcon}>
          <UserGroupIcon className={styles.icon}/>
        </div>
        <div className={styles.ArchiveBoxIcon}>
          <ArchiveBoxIcon className={styles.icon} />
        </div>
        <div className={styles.BuildingStorefrontIcon}>
          <BuildingStorefrontIcon className={styles.icon}/>
        </div>
        <div className={styles.MegaphoneIcon}>
          <MegaphoneIcon className={styles.icon}  />
        </div>
        <div className={styles.PhotoIcon}>
          <PhotoIcon className={styles.icon}  />
        </div>
        <div className={styles.CogIcon}>
          <CogIcon className={styles.icon} />
        </div>
        </div>
    )
}
export default SideBarSettings;