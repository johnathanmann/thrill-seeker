import { useState} from "react";
import "./assets/styles.css";

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
    if(coaster.name == 'unknown' && coaster.pictures.length >= 2 == false){
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
        image1: coaster.pictures[0].url,
        image2: coaster.pictures[1].url,
      }))
      } catch(err){
        console.log("error")
        newCoaster()
      }
    }
  }

window.addEventListener("load", (event) => {
newCoaster()
});
  return (
    <main className="container" id="vue">
      <h1>{allValues.name}</h1>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={allValues.main} className="d-block h-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block h-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block h-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
      <button onClick={() => newCoaster()}>New Coaster</button>
    </main>
  );
}

export default App;
