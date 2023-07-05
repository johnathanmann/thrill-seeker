import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./assets/styles.css";
import logo from "./assets/thrill-seeker-logo.png"

function App() {
  const [allValues, setAllValues] = useState({
    name: "",
    city: "",
    country: "",
    park: "",
    make: "",
    model: "",
    arrangement: "",
    status: "",
    link:"" ,
    main:"",
    image1: "",
    image2:"",
  });

  async function newCoaster() {
    const response = await fetch('https://rcdb-api.vercel.app/api/coasters/random');
    const coaster = await response.json().then({
      
    })
    if(coaster.name === 'unknown' && coaster.pictures.length >= 3 == false){
      console.log(false, coaster)
      newCoaster()
    } else {
      try{
        console.log(true, coaster,  coaster.pictures[0].url)
      setAllValues(() => ({
        name: coaster.name,
        city: coaster.city,
        country: coaster.country,
        park: coaster.park.name,
        make: coaster.make,
        model: coaster.model,
        arrangement: coaster.arrangement,
        status: coaster.status,
        link: "https://rcdb.com/"+coaster.link,
        main: coaster.mainPicture.url,
        image1: coaster.pictures[1].url,
        image2: coaster.pictures[2].url,
      }))
      } catch(err){
        console.log("error")
        newCoaster()
      }
    }
  }

useEffect(()=>{
  setTimeout(function() {    
    fullyLoaded();
    }, 2000);
  
  function fullyLoaded() {
    document.getElementById("loading").className = "fade-out";
    newCoaster()
  }
}, [])

  return (
    <main className="container d-block" id="vue">
      <nav><img src={logo} aly="Red roller coaster in the shape of a heart" /><h1>ThrillSeeker</h1></nav>
      <Carousel>
        <Carousel.Item>
          <img src={allValues.main} alt={allValues.name}/>
          <figcaption>
          <h2>{allValues.name}</h2>
          <h3>{allValues.city}, {allValues.country}</h3>
          </figcaption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={allValues.image1} className="d-block" alt={allValues.name}/>
          <figcaption>
          <h1>{allValues.name}</h1>
          <h2>{allValues.city}, {allValues.country}</h2>
          </figcaption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={allValues.image2} className="d-block" alt={allValues.name}/>
          <figcaption>
          <h1>{allValues.name}</h1>
          <h2>{allValues.city}, {allValues.country}</h2>
          </figcaption>
        </Carousel.Item>
      </Carousel>
      <section className="d-flex justify-content-between" id="buttons">
        <button onClick={() => newCoaster()}  id="heart">Love</button>
        <button onClick={() => newCoaster()}id="x">Hate</button>
      </section>
      <div id="loading">Loading</div>
    </main>
  );
}

export default App;
