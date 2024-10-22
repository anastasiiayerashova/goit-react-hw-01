import './App.css';
import Profile from "./Profile/Profile";
import css from "./Profile/Profile.module.css";
import userData from "../userData.json";
console.log(userData)

export default function App() {
  return ( <div className='main-div'> 
    <Profile image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      name="Petra Marica"
      tag="pmarica"
      location= "Salvador, Brasil"
    ></Profile>
    </div>
  )
};