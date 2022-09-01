import React from 'react';
import { Parallax } from 'react-parallax';
import About from './About';
export default function Home() {


  return (
    <div className="container">
          <Parallax
              bgImage='https://www.lovebigisland.com/wp-content/uploads/michael-schofield-sunset.jpg'
              bgImageAlt="the dog"
              strength={500}
          >

              <div>
        
              </div>
              <div style={{ height: '400px' }} />
          </Parallax>
        <About></About>
    </div>
  );
}
