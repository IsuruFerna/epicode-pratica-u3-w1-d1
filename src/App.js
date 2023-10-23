import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
         <ButtonComponent btnName="Click me!" />
         <ButtonComponent btnName="Submit" />

         <ImageComponent
            imgSrc="https://placekitten.com/300"
            imgAlt="place-kitten"
         />
         <ImageComponent imgSrc="https://placedog.net/300" imgAlt="place-dog" />
      </div>
   );
}

export default App;
