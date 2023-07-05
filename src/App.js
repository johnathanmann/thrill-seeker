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
    console.log("click")
    fetch('https://rcdb-api.vercel.app/api/coasters/random').then((response) => {
      if (response.ok ) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((responseJson) => {
      // Do something with the response
      console.log(3 > responseJson.pictures.length,  responseJson.pictures.length)
      if(3 > responseJson.pictures.length ){
        console.log("Missing pictures")
        newCoaster()
      } else {
        console.log(responseJson)
        setAllValues(() => ({
          name: responseJson.name,
          city: responseJson.city,
          country: responseJson.country,
          park: responseJson.park.name,
          make: responseJson.make,
          model: responseJson.model,
          arrangement: responseJson.arrangement,
          status: responseJson.status,
          link: "https://rcdb.com/"+responseJson.link,
          main: responseJson.mainPicture.url,
          image1: responseJson.pictures[1].url,
          image2: responseJson.pictures[2].url,
        }))
      }
    })
    .catch((error) => {
      console.log(error)
    });
  }

useEffect(()=>{
  setTimeout(function() {    
    fullyLoaded();
    }, 2000);
  
  function fullyLoaded() {
    document.getElementById("loading").className = "fade-out";
    document.getElementById("heart").className = "z-index";
    document.getElementById("x").className = "z-index";
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
        <button onClick={() => newCoaster()} id="heart">Love</button>
        <button onClick={() => newCoaster()} id="x">Hate</button>
      </section>
      <div id="loading">Loading</div>
    </main>
  );
}

export default App;
