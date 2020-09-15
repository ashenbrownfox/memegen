import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[1]);
        this.setState({ allMemeImgs: memes });
      });
  }
  handleChange(event) {}
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
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <button value="Generate!" />
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
