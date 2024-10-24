import css from './FriendListItem.module.css';
import clsx from 'clsx';


export default function FriendListItem({ avatar, name, isOnline }) {
    return (
      <div>
  <img src={avatar} alt="Avatar" width="80"/>
  <p className={css.friendName}>{name}</p>
  <p className={clsx(css.friendStatus, isOnline ? css.online : css.offline )}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}