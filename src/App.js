import logo from './logo.svg';
import './App.css';

import {Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(./parallax/mainParallax_sky.png)'}}>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0} factor={1.5} style={{
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

        <ParallaxLayer offset={0} speed={5.5} factor={1.} sticky={{start: 1.0, end: 100}} style={{
            backgroundImage: 'url(./profile2.png)',
            backgroundSize: '10%',
            backgroundPositionX: '1%',
            backgroundPositionY: '1%'
          }}>
          <h1>Nathan Ulmer GRAPHIC DESIGN IS MY PASSION</h1>
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
