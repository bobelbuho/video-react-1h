import { userState } from "react";
import { Tweet } from "./Tweet";

function App() {
  let [tweets, setTweets] = userState();
  let [username, setUsername] = userState("Melvin");
  const addLetter = () => {
    username += "a"
    console.log(username);
  }
  return (
    <div>
      <p>{username}</p>
      <button onClick={addLetter}>Ajoute une lettre</button>
      <div className="tweet-container">
        <Tweet name="Melvyn" content="je vais bien" like={1000} />
        <Tweet name="Didier" content="Cool" like={1000} />
        <Tweet name="Luca" content="Super" like={1000} />
        <Tweet name="Jean" content="Mood swing" like={1000} />
      </div>
    </div>
  );
}
export default App;