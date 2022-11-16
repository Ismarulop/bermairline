import { useState, useEffect  } from "react";
import "./bootstrap.css";

function App() {

  const [result,setResult] = useState([]);
  const [posts, setPosts] = useState([]);
  // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  //  .then(data => setResult(data));

   useEffect(() => {
    fetch('http://localhost:8080/flights/allflights')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div>
      <h1>BERMA Airlines</h1>
      <h2>Let your life fly</h2>
      <form>
        <fieldset>
          <legend>Flight Information</legend>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label mt-4">
              ORIGIN
            </label>
            <select className="form-select" id="exampleSelect1">
              {posts.map( (item) => {
                return (
                  <option>{item.origin}</option>
                )
              } )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label mt-4">
            1 Way or Round Trip?
            </label>
            <select className="form-select" id="exampleSelect1">
              <option>1 Way Trip</option>
              <option>Round Trip</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
