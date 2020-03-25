
import React from 'react'
import './styles.css';

import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

import CollinsSVG from '../SwitchGlasses/CollinsSVG';
import CoupeSVG from '../SwitchGlasses/CoupeSVG';
import RocksSVG from '../SwitchGlasses/RocksSVG';
import TikiSVG from '../SwitchGlasses/TikiSVG';

class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      glassChoice: "coupe",
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },


    };
    this.handleSvgFormChange = this.handleSvgFormChange.bind(this)

    // this.svgClick = this.svgClick.bind(this)
  }


  handleSvgFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  svgClick = (e) => {
    e.preventDefault();

    console.log('clicked')
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(
            ${this.state.color.r}, 
            ${this.state.color.g}, 
            ${this.state.color.b}, 
            ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        // square: {
        //   fill: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
        // },
        // circle: {
        //   fill: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
        // },
      },
    });
    // need to decide to either use above square or circle style or below variable for changing color
    var chosenColor = `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;

    const { hasLime, hasLemon, hasOrange, hasPeel, HasMint, hasCuke } = this.props;
    const chooseGlass = () => {
      if (this.state.glassChoice === "coupe") {
        return <CoupeSVG color={chosenColor}


        />
      }
      else if (this.state.glassChoice === "collins")
        return <CollinsSVG color={chosenColor} />;

      else if (this.state.glassChoice === "rocks") return <RocksSVG
        color={chosenColor}
        ice={this.props.ice}

        hasLime={this.props.hasLime}
        hasLemon={this.props.hasLemon}
        hasOrange={this.props.hasOrange}
        hasPeel={this.props.hasPeel}
        hasMint={this.props.hasMint}
        hasCuke={this.props.hasCuke}
        hasCherry={this.props.hasCherry}

        washline={this.props.washline}
      />

      else if (this.state.glassChoice === "tiki") return (
        <TikiSVG
          color={chosenColor}
        // orangeVisibility={this.state.orangeVisibility}
        // lemonVisibility={this.state.lemonVisibility}
        />)
    }


    return (

      <div className="color-swatch" >
        <h1>ColorSwatch</h1>

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

        <div>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color} />
          </div>
          {this.state.displayColorPicker ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />

            <SketchPicker color={this.state.color} onChange={this.handleChange} />
          </div> : null}
          {/* <svg className="square" width="400" height="110">
            <rect width="290" height="90" stroke="black" strokeWidth="3" style={styles.square} />
          </svg>

          <svg className="circle" height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" style={styles.circle} />
          </svg> */}
        </div>     </div>
    )
  }
}

export default ColorSwatch;