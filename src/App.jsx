import React, { useEffect, useState } from "react";
import Anime from "./assets/Anime";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import "./main.css";

const date = new Date();
const year = date.getFullYear();
let season = "";
const monthNo = date.getMonth() + 1;

if (monthNo <= 3) season = "Winter";
else if (monthNo <= 6) season = "Spring";
else if (monthNo <= 9) season = "Summer";
else season = "Winter";

var api = "https://api.jikan.moe/v4/seasons/";
const finalurl = api + year + "/" + season;

function App() {
  const [animeData, setanimeData] = useState([]);
  const [loading, setLoading]=useState(false);
  
  const getData = async () => {
    const res = await fetch(finalurl);
    const resData = await res.json();
    setanimeData(resData.data);
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
      <div>
        <Header Season={season} Year={year} />
       {loading?( <div className="animecards">
          {animeData.map((cur) => {
            return (
              <Anime
                air={cur.broadcast.string}
                linkmal={cur.url}
                linkimg={cur.images.jpg.image_url}
                title={cur.title}
                key={cur.mal_id}
              />
            );
          })}
        </div>):(<div className="load"><h1>Loading....</h1></div>)}
        <Footer />
      </div>
  );
}

export default App;
