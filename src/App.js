
function App() {

fetch('https://rcdb-api.vercel.app/api/coasters/random')
.then(response => response.json())
.then(json => console.log(json));


  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
