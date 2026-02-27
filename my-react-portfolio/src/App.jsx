import contactIcon from "./assets/contact.png";
import profilePic from "./assets/pic.png";
import './App.css';

function App() {
  return (
    <section id="intro">
  <div className="intro-wrapper">
    <div className='introContent'>
      <span className="hello">Hello,</span>
      <span className="introText">
        I'm <span className="introName">Nche Emmanuel</span> 
        <br/>Frontend Developer and UI designer
      </span>

      <p className="introPara">
        I am a second-year Computer Engineering student at the University of Buea,
        passionate about making life simpler for myself, community and nation. <br/>I am the 
        CEO of <strong>Emzie Graphix</strong> with one year of experience as a graphic designer, and 
        also a frontend developer skilled in <strong><em>HTML and CSS</em></strong>. I am learning JavaScript 
        and React, and I use AI tools to support business brands gain popularity.
        <h2><u>Future Projects</u></h2>
        <ul>
          <li>I aim to solve common problems faced by students and workers moving into new cities for school or work, 
        starting with housing, by creating a platform connecting students and workers with available rooms and apartments owners.
        </li>
        </ul> 
      </p>
        
      <button className="my-button">
        <img src={contactIcon} alt="contact" style={{width:"14px", marginRight:"8px"}} />
        Contact Me
      </button>
    </div>

    <div className="intro-image">
      <img src={profilePic} alt="My Profile" className='profile-pic'/>
    </div>
  </div>
</section>
  );
}
export default App;