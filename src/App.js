import propic from "./images/propic2.jpeg"
import './App.css';
import Text from "./Component/Text"
import React, {useState} from 'react';

function App() {

const [skills, setSkills] = useState("My name is Cee")

const handleName =()=>{
  setSkills("My name is Cee")
}

const handleSkills=()=>{
  setSkills("I'm a Frontend Developer")
}

const [count, setCount] = useState(0);

  return (
    <>
       <section class="main">
         <div class="card">
           <div class="card-body"></div>
              <div class="img-holder">
                <img src={propic} alt="profilepic" width="200" height="210"/>
              </div>
              <div class="text">
              <h1 class="greeting">
                Hi!
              </h1>
              <Text tech = {skills}/>
              </div>

              <div class="container">
                  <button class="btn" onClick ={handleName}>Name</button>
                  <button class="btn" onClick = {handleSkills}>Skills</button>
              </div>
                 
              <div class="likes">
                <p>{count}</p>
              <i class="fas fa-heart" onClick={()=> setCount(count + 1)}></i>
              </div>
              <footer class="socials">
              <i class="fab fa-facebook-f"onClick={()=> window.open("https://facebook.com/ThePowerpuffGirls", "_blank")}></i>
              <i class="fab fa-instagram"onClick={()=> window.open("https://instagram.com/powerpuffgirls", "_blank")}></i>
              </footer>
         </div>
         


       </section>
        
    </>
  );
}

export default App;
