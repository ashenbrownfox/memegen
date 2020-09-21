import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://sportshub.cbsistatic.com/i/r/2019/10/14/62d02fd3-6290-4155-91ac-0c1b3b4c5057/thumbnail/300x300/9cabea4b22fda66ec550fbc445d32ad0/400553.png",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value} = event.target;
    this.setState({ [name]: value});
  }
  handleSubmit(event){
    event.preventDefault();
    const randNum = Math.floor(Math.random()* this.state.allMemeImgs.length)
    const randMemeImg= this.state.allMemeImgs[randNum].url
    console.log(randMemeImg);
    this.setState({randomImg: randMemeImg})
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <h1>Meme Generator Section</h1>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate!</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="noo img?"/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
