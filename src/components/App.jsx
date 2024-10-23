import './App.css';
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
console.log(friends)

export default function App () {
  return (  <div className='mainWrapper'>  
    <div className='mainDiv'> 
   <Profile 
  username={userData.username} 
  tag={userData.tag} 
  location={userData.location} 
  avatar={userData.avatar} 
  stats={userData.stats}
    />
    </div>
    <div className='friendWrapper'><FriendList friends={friends} /></div>
    </div>
  )
};