import { Component } from "react";

class ImageComponent extends Component {
   render() {
      return <img src={this.props.imgSrc} alt={this.props.imgAlt}></img>;
   }
}

export default ImageComponent;
