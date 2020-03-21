import React from 'react';
import ColorSwatch from '../ColorSwatch';
import SvgForm from '../SvgForm';

class SvgFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isGarnishVisible: false,

      // largeIceCubeVisibility: false,
      // smallIceCubesCVisibiliy: false,

      // limeVisibility: false,
      // lemonVisibility: false,
      // orangeVisibility: false,
      // mintVisibility: false,
      // cherryVisibility: false,
      // cukeVisibility: false,
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
    const { } = this.props
    return (
      <div className="cocktail-svg-maker">
        <h1>Illustrate Your Recipe</h1>
        <SvgForm />
        <ColorSwatch />
      </div >
    )
  }
}

export default SvgFormContainer;
