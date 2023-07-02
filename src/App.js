import { useState} from "react";

function App() {
  const [allValues, setAllValues] = useState({
    name: "",
    city: "",
    country: "",
    make: "",
    model: "",
    arrangement: "",
    status: "",
    link:"" 
  });

const newCoaster = (e) => {
  fetch('https://rcdb-api.vercel.app/api/coasters/random')
  .then(response => response.json())
  .then(json => setAllValues(() => ({
    name: json.name,
    city: "",
    country: "",
    make: "",
    model: "",
    arrangement: "",
    status: "",
    link:"" 
})))}

  return (
    <main>
      <h1>{allValues.name}</h1>
      <button onClick={() => newCoaster()}>New Coaster</button>
    </main>
  );
}

export default App;
