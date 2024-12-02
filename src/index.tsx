import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating/StarReting";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Test() {
  const [movieRating, setMovieRating] = useState<number>(0);

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={(newRate) => setMovieRating(newRate)}
      />
      <p>This movie has rated {movieRating} stars.</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={10} />
    <StarRating maxRating={8} color="red" size={24} className="test" />
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "excelent"]}
      defaultRating={3}
    />
    <Test></Test> */}
    <App />
  </React.StrictMode>
);
