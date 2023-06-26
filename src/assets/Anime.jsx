import React from "react";

function Image(props) {
  return (
    <div className="animeimg">
    {props.Air===("Unknown")||props.Air===null?<h3>TBA</h3>:<h3>{props.Air}</h3>}
      <a target="_blank" href={props.linkMal}>
        <img src={props.linkImg}></img>
      </a>
    </div>
  );
}
function Title(props) {
  return (
    <div className="animetitle">
      <h2>{props.name}</h2>
    </div>
  );
}

function Anime(props) {
  return (
    <div className="animecard">
      <Image 
      Air={props.air}
      linkMal={props.linkmal} linkImg={props.linkimg} />
      <Title name={props.title} />
    </div>
  );
}

export default Anime;
