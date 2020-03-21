import React from 'react';
import ColorSwatch from '../ColorSwatch';

class SvgForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGarnishVisible: false,

      largeIceCubeVisibility: false,
      smallIceCubesCVisibiliy: false,

      limeVisibility: false,
      lemonVisibility: false,
      orangeVisibility: false,
      mintVisibility: false,
      cherryVisibility: false,
      cukeVisibility: false,
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  // toggleButton = () => {
  //   console.log('clicked')
  //   this.setState((currentState) => ({
  //     isGarnishVisible: !currentState.isGarnishVisible,
  //   }));
  // }

  toggleButton = (event) => {
    console.log('clicked')

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {

    return (
      <div className="cocktail-svg-maker">
        <h1>Illustrate Your Recipe</h1>

        <button onClick={this.toggleButton}>toggle</button> {
          !this.state.isGarnishVisible && this.props.text}
        <p>{this.state.isGarnishVisible}</p>
        {/* {this.state.messageVisibility ? <p>Toggle Content</p> : null}  */}
        <button onClick={this.toggleButton}>lemon</button>
        <button onClick={this.toggleButton}>lime</button>
        <button onClick={this.toggleButton}>orange</button>
        <button onClick={this.toggleButton}>cherry</button>
        <button onClick={this.toggleButton}>cucumber</button>

        <button onClick={this.toggleButton}>salt</button>
        <button onClick={this.toggleButton}>olive</button>

        <ColorSwatch />
      </div >
    )
  }
}

export default SvgForm;
