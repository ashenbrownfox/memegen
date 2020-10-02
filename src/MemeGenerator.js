import React, { useState, useEffect } from "react";

function MemeGenerator() {
  const [state, setState] = useState({
    topText: "",
    bottomText: ""
  })
  //const [topText, setTopText] = useState("");
  //const [bottomText, setBottomText] = useState("");
  const [randomImg, userandomImg] = useState("https://sportshub.cbsistatic.com/i/r/2019/10/14/62d02fd3-6290-4155-91ac-0c1b3b4c5057/thumbnail/300x300/9cabea4b22fda66ec550fbc445d32ad0/400553.png");
  const [allMemeImgs, useallMemeImgs] = useState([]);
  

  useEffect(()=>{
    console.log("text changed!");
  },[])
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    
   function handleChange(event){
      const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value
      });
    }
  const handleSubmit = (event)=>{
    event.preventDefault();
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data
        useallMemeImgs({ allMemeImgs ,allMemeImgs: memes });
        console.log(allMemeImgs);
        const randNum = Math.floor(Math.random()* memes.length);
        console.log(randNum);
        const randMemeImg= memes[randNum].url;
        console.log(randMemeImg);
      });
    
    
    
    //userandomImg({randomImg: randMemeImg}) 
  }
    return (
      <div className="container">
        <form className="meme-form" onSubmit={handleSubmit}>
          <h1>Meme Generator Section</h1>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={state.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={state.bottomText}
            onChange={handleChange}
          />
          <button>Generate!</button>
        </form>
        <div className="meme">
          <img src={randomImg} alt="noo img?"/>
          <h2 className="top">{state.topText}</h2>
          <h2 className="bottom">{state.bottomText}</h2>
        </div>
      </div>
    );
}

export default MemeGenerator;
