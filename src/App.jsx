
import { Tweet } from "./Tweet";

function App(){
  return (
    <div>
      <p>I'm App component</p>
    <div className="tweet-container">
   <Tweet name="Melvyn" content="je vais bien" like={1000}/>
   <Tweet name="Didier" content="Cool" like={1000}/>
   <Tweet name="Luca" content="Super" like={1000}/>
   <Tweet name="Jean" content="Mood swing" like={1000}/>
   </div>
   </div>
  );
}
export default App;