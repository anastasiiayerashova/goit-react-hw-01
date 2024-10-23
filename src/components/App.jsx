import './App.css';
import Profile from "./Profile/Profile";
import userData from "../userData.json";

export default function App () {
  return ( <div className='mainDiv'> 
   <Profile 
  username={userData.username} 
  tag={userData.tag} 
  location={userData.location} 
  avatar={userData.avatar} 
  stats={userData.stats}
/>
    </div>
  )
};