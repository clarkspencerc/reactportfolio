import React from 'react';
import { Parallax } from 'react-parallax';
export default function Home() {


  return (
    <div className="container">
     <h1> Home Page </h1>
          <Parallax
              bgImage='https://images.unsplash.com/photo-1567739665094-c24f043b8407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
              bgImageAlt="the dog"
              strength={500}
          >
              Blur transition from min to max
              <div>
                <h1>Thank you Robby</h1>
              </div>
              <div style={{ height: '900px' }} />
          </Parallax>

    </div>
  );
}
