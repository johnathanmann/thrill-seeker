import { useState} from "react";
import "./assets/styles.css";
var sectionStyle;
function App() {
  const [allValues, setAllValues] = useState({
    name: "",
    city: "",
    country: "",
    make: "",
    model: "",
    arrangement: "",
    status: "",
    link:"" ,
    main:""
  });

  async function newCoaster() {
    const response = await fetch('https://rcdb-api.vercel.app/api/coasters/random');
    // waits until the request completes...
    const coaster = await response.json();
    if(coaster.name === 'unknown' && coaster.pictures.length >= 2 == false){
      console.log(false, coaster)
    } else {
      console.log(true, coaster)
    }
  }

// const newCoaster = (e) => {
//   const response = fetch('https://rcdb-api.vercel.app/api/coasters/random')
//   .then(response => response.json())
//   .then(json => setAllValues(() => ({
//     name: json.name,
//     city: "",
//     country: "",
//     make: "",
//     model: "",
//     arrangement: "",
//     status: "",
//     link:"" ,
//     main: json.mainPicture.url
// })))
// console.log(allValues)
// }

// window.addEventListener("load", (event) => {
// newCoaster()
// });
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
