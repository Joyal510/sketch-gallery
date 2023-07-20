import { AboutMe } from './components/AboutMe';
import { ImageSlider } from './components/ImageSlider';
import { ProfilePhoto } from './components/ProfilePhoto';
import profilephoto from './images/profilephoto.jpg';
import instalogo2 from './images/instalogo2.webp';
import twitterlogo from './images/twitterlogo.png'
import goku from './images/goku.jpg'
import eren from './images/eren.jpg'
import luffy from './images/luffy.jpg'
import zoro from './images/zoro.jpg'

import './App.css';
import { Footer } from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <header className='App-header'>
      <br></br>
      <br></br>
      <br></br>
      <ProfilePhoto src={profilephoto} instaLogo={instalogo2} twitterLogo={twitterlogo} />
      <AboutMe/>
      
      <ImageSlider luffy={luffy} eren={eren} zoro={zoro}/>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
      </header>
      {/* <div className="overlay hidden"></div> */}
      
    </div>
  );
}

export default App;
