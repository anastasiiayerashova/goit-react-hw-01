import css from "./Profile.module.css";

export default function Profile({avatar, name, tag, location, stats}) {
    return (
        <> 
        <div className={css.imgWrapper}>
    <img
      src={avatar}
                alt="User avatar" width="200" height="200"
                className={css.icon}
    />
            <p className={css.userName}>{name}</p>
    <p className={css.userTag}>{tag}</p>
    <p className={css.userLocation}>{location}</p>
        </div>
        <ul className={css.statsList}>
    <li className={css.statsItem}>
      <span className={css.followers}>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.followers}>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.statsItem} >
      <span className={css.followers}>Likes</span>
      <span>{stats.likes}</span>
    </li>
            </ul>
            </>
    )
};