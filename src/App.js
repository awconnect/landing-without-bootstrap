import React from 'react';
// import './App.css';
import './landingpage.css'
import SignUpComponent from './components/signupcomponent'
import Feature from "./components/features"
import Detail from "./components/details"
import Testimonials from "./components/testimonials"
import { wobble } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const styles = {
  wobble: {
    animation: 'x 1s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header-container">
        <SignUpComponent message={"Build a landing page for your business or project and generate more leads!"}/>
      </header>

      <div class="features-overlay">
        <Feature icon="TV" name="Fully Responsive" blurb="This theme will look great on any device, no matter the size!"/>
        <Feature icon="stack" name="Bootstrap 4 Ready" blurb="Featuring the latest build of the new Bootstrap 4 framework!"/>
        <Feature icon="check" name="Easy to Use" blurb="Ready to use with your own content, or customize the source files!"/>
      </div>


      <Detail 
        imageOrient={false}
        imageURL={'/devices.jpeg'}
        name={"Fully Responsive Design"}
        blurb={"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"}
      />

      <Detail 
        imageOrient={true}
        imageURL={'/cssImage.jpeg'}
        name={"Updated For Bootstrap 4"}
        blurb={"Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"}
      />

      <Detail 
        imageOrient={false}
        imageURL={'/customize.png '}
        name={"Easy to Use & Customize"}
        blurb={"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"}
      />

      <Testimonials />
      

      <footer className="footer-enclosed-container"> 
        <SignUpComponent message={"Ready to get started? Sign up now!"}/>

      </footer>

      
    </div>
  );
}

export default App;
