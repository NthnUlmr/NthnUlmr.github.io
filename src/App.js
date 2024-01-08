import logo from './logo.svg';
import './App.css';

import {Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  return (
    <div className="App">
      <Parallax pages={2} horizonatal>
              <ParallaxLayer offset={0.0} speed={0.1} factor={1}  style={{
              backgroundImage: 'url(./bird.png)',
              backgroundSize: '20%',
              backgroundPositionX: '50%',
              backgroundPositionY: '50%'
              }}>
              </ParallaxLayer>
      </Parallax>
      <Parallax pages={5}>
        <ParallaxLayer offset={0.0} speed={10.0} sticky={{start: 0.5, end: 0.5}} factor={1} >
            
        </ParallaxLayer>



        <ParallaxLayer offset={0} speed={0.1} factor={1.5} style={{
            backgroundImage: 'url(./parallax/mainParallax_sky.png)',
            backgroundSize: 'cover',
            backgroundPositionX: '50%'
          }}>

        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={1.1} factor={1.5} style={{
            backgroundImage: 'url(./parallax/mainParallax_background.png)',
            backgroundSize: 'cover',
            backgroundPositionX: '50%'
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.4} factor={1.5} style={{
            backgroundImage: 'url(./parallax/mainParallax_farMidground.png)',
            backgroundSize: 'cover',
            backgroundPositionX: '50%'
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.6} factor={1.5} style={{
            backgroundImage: 'url(./parallax/mainParallax_closeMidground.png)',
            backgroundSize: 'cover',
            backgroundPositionX: '50%'
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.0} factor={1.5} style={{
            backgroundImage: 'url(./parallax/mainParallax_foreground.png)',
            backgroundSize: 'cover',
            backgroundPositionX: '50%'
          }}>

        </ParallaxLayer>




        <ParallaxLayer offset={0.0} speed={1000} factor={0} sticky={{start: 1.0, end: 100}} style={{
            backgroundImage: 'url(./profile2.png)',
            backgroundSize: '10%',
            backgroundPositionX: '50%',
            backgroundPositionY: '1%'
          }}>
          
        </ParallaxLayer>

        <ParallaxLayer offset={0.0} speed={0.1} factor={0} sticky={{start: 1.5, end: 3}} style={{
          backgroundSize: '10%',
          backgroundPositionX: '50%',
          backgroundPositionY: '50%'
        }}>
        
        <h1 style={{backgroundPositionY:"10%"}}>Nathan Ulmer GRAPHIC DESIGN IS MY PASSION</h1>
        <p> I don't know how to make text go where I want. All images used are either pictures I've taken or things I've drawn in GIMP.</p>
        <h2> Photography // Graphics // Video Games // Physics Simulations // Writing // Unbelievably bad MIDI music</h2>
        
        <h2>Project 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Project 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={2.0} factor={1.} style={{
          backgroundImage: 'url(./arrow.png)',
          backgroundSize: '5%',
          backgroundPositionX: '50%',
          backgroundPositionY: '99%'
        }}>
        </ParallaxLayer>


      </Parallax>
    </div>
  );
}


export default App;
