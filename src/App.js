import logo from './logo.svg';
import './App.css';

import {Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={1} factor={1} style={{
            backgroundImage: 'url(./parallax/mainParallax_sky.png)',
            backgroundSize: 'cover',
          }}>
          <h2>Welcome</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5} factor={1} style={{
            backgroundImage: 'url(./parallax/mainParallax_background.png)',
            backgroundSize: 'cover',
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.0} factor={1} style={{
            backgroundImage: 'url(./parallax/mainParallax_farMidground.png)',
            backgroundSize: 'cover',
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5} factor={1} style={{
            backgroundImage: 'url(./parallax/mainParallax_closeMidground.png)',
            backgroundSize: 'cover',
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5} factor={1} style={{
            backgroundImage: 'url(./parallax/mainParallax_foreground.png)',
            backgroundSize: 'cover',
          }}>

        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={100.1}>
          <h2> Go Away</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
