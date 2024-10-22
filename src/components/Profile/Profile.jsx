import clsx from "clsx";
import css from "./Profile.module.css";
console.log(css["alert"])

export default function Profile({image, name, tag, location}) {
    return (
        <> 
        <div className={css.imgWrapper}>
    <img
      src={image}
                alt="User avatar" width="100" height="100"
                className={css.icon}
    />
            <p className={css.userName}>{name}</p>
    <p className={css.userTag}>{tag}</p>
    <p className={css.userLocation}>{location}</p>
        </div>
        <ul className={css.statsList}>
    <li className={css.statsItem}>
      <span className={css.followers}>Followers</span>
      <span>1000</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.followers}>Views</span>
      <span>2000</span>
    </li>
    <li className={css.statsItem} >
      <span className={css.followers}>Likes</span>
      <span>3000</span>
    </li>
            </ul>
            </>
    )
};