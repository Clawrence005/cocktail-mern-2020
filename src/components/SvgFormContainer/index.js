import React from 'react';
import ColorSwatch from '../ColorSwatch';
import SvgChooseGlass from '../SvgChooseGlass';
import SvgForm from '../SvgForm';

class SvgFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
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
        {/* <SvgForm
          color={this.state.color}
          onChange={this.handleSvgFormChange}
          hasPeel={this.state.hasPeel}
          hasMint={this.state.hasMint}
          hasLemon={this.state.hasLemon}
          hasLime={this.state.hasLime}
          hasOrange={this.state.hasOrange}
          hasCuke={this.state.hasCuke}
          hasCherry={this.state.hasCherry}
        /> */}


        <SvgForm
          onChange={this.handleSvgFormChange}
          // hasLargeIce: false,
          // hasSmallIce: false,

          hasLime={this.state.hasLime}
          hasLemon={this.state.hasLemon}
          hasPeel={this.state.hasPeel}
        // hasOrange: false,
        // hasMint: false,
        // hasCherry: false,
        // hasCuke: false,
        // hasOlive: false,
        // hasSalt: false,
        // hasSugar: false,

        // liquidLow: false,
        // liquidMid: false,
        // liquidHigh: false,
        // absintheRinse: false,
        // scotchRinse: false,

        />

        <SvgChooseGlass />
        <ColorSwatch />
      </div >
    )
  }
}

export default SvgFormContainer;
