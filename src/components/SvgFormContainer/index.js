import React from 'react';
import ColorSwatch from '../ColorSwatch';
import SvgChooseGlass from '../SvgChooseGlass';
// import SvgForm from '../SvgForm';
import RocksSVG from '../SwitchGlasses/RocksSVG';

class SvgFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // color: {
      //   r: '241',
      //   g: '112',
      //   b: '19',
      //   a: '1',
      // },
      ice: 'no_ice',

      hasLime: false,
      hasLemon: false,
      hasPeel: false,
      hasOrange: false,
      hasMint: false,
      hasCherry: false,
      hasCuke: false,
      hasOlive: false,
      hasSalt: false,
      hasSugar: false,

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


        {/* <RocksSVG
          // color={this.state.color}

          hasPeel={this.state.hasPeel}
          hasMint={this.state.hasMint}
          hasLemon={this.state.hasLemon}
          hasLime={this.state.hasLime}
          hasOrange={this.state.hasOrange}
          hasCuke={this.state.hasCuke}
          hasCherry={this.state.hasCherry}

        /> */}
        <div className="SvgForm" >
          {/* <SvgChooseGlass /> */}
          <h4>SvgForm</h4>

          <label>No Ice</label>
          <input
            type="radio"
            name="no_ice"
            onChange={this.handleSvgFormChange}
            value={this.state.ice === 'no_ice'}
          />
          <br />

          <label>Small Ice</label>
          <input
            type="radio"
            name="small_ice"
            onChange={this.handleSvgFormChange}
            value={this.state.ice === 'small_ice'}
          />
          <br />

          <label>Large Ice</label>
          <input
            type="radio"
            name="large_ice"
            onChange={this.handleSvgFormChange}
            value={this.state.ice === 'large_ice'}
          />
          <br />

          <label>Lime</label>
          <input
            type="checkbox"

            name="hasLime"
            onChange={this.handleSvgFormChange}
            value={this.state.hasLime}
          />
          <br />
          <label>Lemon</label>
          <input
            type="checkbox"
            name="hasLemon"
            onChange={this.handleSvgFormChange}
            value={this.state.hasLemon}
          />
          <br />
          <label>Peel</label>
          <input
            type="checkbox"
            name="hasPeel"
            onChange={this.handleSvgFormChange}
            value={this.state.hasPeel}
          />
          <br />
          <label>Orange</label>
          <input
            type="checkbox"
            name="hasOrange"
            onChange={this.handleSvgFormChange}
            value={this.state.hasOrange}
          />
          <br />
          <label>Mint</label>
          <input
            type="checkbox"
            name="hasMint"
            onChange={this.handleSvgFormChange}
            value={this.state.hasMint}
          />
          <br />
          <label>Cherry</label>
          <input
            type="checkbox"
            name="hasCherry"
            onChange={this.handleSvgFormChange}
            value={this.state.hasCherry}
          />
          <br />
          <label>hasCuke</label>
          <input
            type="checkbox"
            name="hasCuke"
            onChange={this.handleSvgFormChange}
            value={this.state.hasCuke}
          />

          <br />
          <label>Olive</label>
          <input
            type="checkbox"
            name="olive"
            onChange={this.handleSvgFormChange}
            value={this.state.olive}
          />
          <br />
          <label>Salt</label>
          <input
            type="checkbox"
            name="salt"
            onChange={this.handleSvgFormChange}
            value={this.state.salt}
          />
          <br />
          <label>Sugar</label>
          <input
            type="checkbox"
            name="sugar"
            onChange={this.handleSvgFormChange}
            value={this.state.sugar}
          />
          <br />

          <label>Liquid Low</label>
          <input
            type="radio"
            name="washline"
            checked={this.state.washline === "liquidLow"}
            onChange={this.handleSvgFormChange}
            value="liquidLow"
          />
          <br />
          <label>Liquid Mid</label>
          <input
            type="radio"
            name="washline"
            onChange={this.handleSvgFormChange}
            checked={this.state.washline === "liquidMid"}
            value="liquidMid"
          />
          <br />

          <label>Liquid High</label>
          <input
            type="radio"
            name="washline"
            checked={this.state.washline === "liquidHigh"}
            onChange={this.handleSvgFormChange}
            value="liquidHigh"

          />
          <br />
          <label>Absinthe Rinse</label>
          <input
            type="checkbox"
            name="absintheRinse"
            onChange={this.handleSvgFormChange}
            value={this.state.absintheRinse}
          />
          <br />
          <label>Scotch Rinse</label>
          <input
            type="checkbox"
            name="scotchRinse"
            onChange={this.handleSvgFormChange}
            value={this.state.scotchRinse}
          />
          <br />

          <ColorSwatch
            hasLime={this.state.hasLime}
            hasLemon={this.state.hasLemon}
            hasOrange={this.state.hasOrange}
            hasPeel={this.state.hasPeel}
            hasMint={this.state.hasMint}
            hasCuke={this.state.hasCuke}
            hasCherry={this.state.hasCherry}
          />
        </div ></div>
    )
  }
}

export default SvgFormContainer;
