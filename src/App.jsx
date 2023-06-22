import React, { useEffect, useState } from "react";
import Anime from "./assets/Anime";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import "./main.css";
const date = new Date();

function App() {
  const [animeData, setanimeData] = useState([]);
  const [loading, setloading] = useState(true);
  const Seasons = ["Winter", "Spring", "Summer", "Fall"];

  var year = date.getFullYear();
  var monthNo = date.getMonth() + 1;

  let season = "";
  if (monthNo <= 3) season = "Winter";
  else if (monthNo <= 6) season = "Spring";
  else if (monthNo <= 9) season = "Summer";
  else season = "Fall";
  const [curSeason, setcurSeason] = useState(season);
  const [curYear, setcurYear] = useState(year);

  var api = "https://api.jikan.moe/v4/seasons/";
  const finalurl = api + curYear + "/" + curSeason;

  const getData = async () => {
    await fetch(finalurl)
      .then((res) => res.json())
      .then((resData) => {
        setanimeData(resData.data);
      })
      .then(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [curYear, curSeason]);


  function goBack(){

    for(let i=0;i<4;i++){
      if(Seasons[i]==curSeason){
        if(i==0){
          setcurSeason(Seasons[3]);
          setcurYear(curYear-1);
        }
        else{
          setcurSeason(Seasons[i-1]);
        }
      }
    }
    setloading(true)
  }
  function goFront(){
    for(let i=0;i<4;i++){
      if(Seasons[i]==curSeason){
        if(i==3){
          setcurSeason(Seasons[0]);
          setcurYear(curYear+1);
        }
        else{
          setcurSeason(Seasons[i+1]);
        }
      }
    }
    setloading(true)
  }


  return (
    <>
      <div>
        <div className="head_container">
          <button onClick={goBack}>&#60;</button>
          <Header
            curSeason={curSeason}
            curYear={curYear}
          />
          <button onClick={goFront}>&gt;</button>
        </div>
        {loading ? (
          <div className="load">
            <h1>Loading....</h1>
          </div>
        ) : (
          <div className="animecards">
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
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
