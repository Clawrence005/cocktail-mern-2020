import React from 'react';

import CollinsSVG from '../SwitchGlasses/CollinsSVG';
import CoupeSVG from '../SwitchGlasses/CoupeSVG';
import RocksSVG from '../SwitchGlasses/RocksSVG';
import TikiSVG from '../SwitchGlasses/TikiSVG';

class SvgChooseGlass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glassChoice: "coupe",
    };

    this.handleSvgFormChange = this.handleSvgFormChange.bind(this)
  }
  handleSvgFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    // var chosenColor = `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;

    const chooseGlass = () => {
      if (this.state.glassChoice === "coupe") {
        return <CoupeSVG
        // color={chosenColor}
        />
      }
      else if (this.state.glassChoice === "collins")
        return <CollinsSVG
        // color={chosenColor} 
        />;

      else if (this.state.glassChoice === "rocks") return <RocksSVG
      //  color={chosenColor}
      // visibility={lemonVisibility}
      />;

      else if (this.state.glassChoice === "tiki") return (
        <TikiSVG
        // color={chosenColor}
        // orangeVisibility={this.state.orangeVisibility}
        // lemonVisibility={this.state.lemonVisibility}
        />)
    }


    return (
      <div>
        {chooseGlass()}
        <label>Svg Glass Choice
            <select
            value={this.state.glassChoice}
            onChange={this.handleSvgFormChange}
            name="glassChoice"
          >
            <option value="coupe">coupe</option>
            <option value="collins">collins</option>
            <option value="rocks">rocks</option>
            <option value="tiki">tiki</option>
          </select>

        </label>
      </div>
    )
  }
}

export default SvgChooseGlass;