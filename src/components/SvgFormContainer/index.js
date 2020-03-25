import React from 'react';
import ColorSwatch from '../ColorSwatch';
import SvgForm from '../SvgForm';

class SvgFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ice: 'no_ice',

      hasLime: false,
      hasLemon: false,
      hasPeel: false,
      hasOrange: false,
      hasMint: false,
      hasCherry: false,
      hasCuke: false,
      hasOlive: false,
      hasSaltRim: false,
      hasSugarRim: false,

      washline: "highLiquid",

      absintheRinse: false,
      scotchRinse: false,
    }

    this.handleSvgFormChange = this.handleSvgFormChange.bind(this);

  }

  handleSvgFormChange = (event) => {
    const { name, value, type, checked } = event.target
    // this.setState({ [event.target.name]: event.target.value });
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
      [name]: value
    })

  }



  render() {

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
