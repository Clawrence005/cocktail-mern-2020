import React from 'react';
// import SvgCheckbox from '../SvgCheckbox';
import SvgChooseGlass from '../SvgChooseGlass';

class SvgForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLargeIce: false,
      hasSmallIce: false,

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

      liquidLow: false,
      liquidMid: false,
      liquidHigh: false,
      absintheRinse: false,
      scotchRinse: false,

      // garnishes: [
      //   { name: "large_ice", hasLargeIce: false },
      //   { name: "small_ice", hasSmallIce: false },
      //   { name: "lime", hasLime: false },
      //   { name: "lemon", hasLemon: false },
      //   { name: "orange", hasOrange: false },
      //   { name: "mint", hasMint: false },
      //   { name: "cherry", hasCherry: false },
      //   { name: "cuke", hasCuke: false },
      // ],


      // garnish: [
      //   { item: "large_ice", isVisible: false },
      //   { item: "small_ice", isVisible: false },

      //   { item: "lime", isVisible: false },
      //   { item: "lemon", isVisible: false },
      //   { item: "orange", isVisible: false },
      //   { item: "mint", isVisible: false },
      //   { item: "cherry", isVisible: false },
      //   { item: "cuke", isVisible: false },
      // ]
    }

    // this.handleSvgFormChange = this.handleSvgFormChange.bind(this);
    // this.toggleLemon = this.toggleLemon.bind(this);
  };

  // handleToggleChange = (event) => {
  //   console.log('clicked')
  //   const { name, isVisible } = event.target
  //   this.setState({
  //     // [event.target.name]: !event.target.value,
  //     [name]: !isVisible
  //   });
  // }



  // toggleSwitch = () => {
  //   this.setState((state) => {
  //     return {
  //       isVisible: !state.isVisible
  //     }
  //   })
  // };

  // handleSvgFormChange = (event) => {
  //   const { name, value, type, checked } = event.target
  //   // this.setState({ [event.target.name]: event.target.value });
  //   type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
  //     [name]: value
  //     // [`${name}isVisible`]: value
  //   })

  // }

  handleSvgSubmit = () => {

  }

  render() {
    // const { item, isVisible } = this.props
    return (

      <div className="SvgForm" onSumbit={this.handle}>
        <SvgChooseGlass />
        <h4>SvgForm</h4>
        {/* {this.state.garnishes.map((garnish) =>
          (<SvgCheckbox
            name={garnish.name}
            onChange={this.handleSvgFormChange}
            key={garnish.index}
            value={`has${garnish.name}`}
          />))} */}

        {/* {this.state.messageVisibility ? <p>Toggle Content</p> : null}  */}

        <label>hasLargeIce</label>
        <input
          type="checkbox"
          name="hasLargeIce"
          onChange={this.handleSvgFormChange}
          value={this.state.isVisible}
        />
        <label>hasSmallIce</label>
        <input
          type="checkbox"
          name="hasSmallIce"
          onChange={this.handleSvgFormChange}
          value={this.state.hasSmallIce}
        />
        <label>hasLime</label>
        <input
          type="checkbox"
          name="hasLime"
          onChange={this.handleSvgFormChange}
          value={this.state.hasLime}
        />
        <label>hasLemon</label>
        <input
          type="checkbox"
          name="hasLime"
          onChange={this.handleSvgFormChange}
          value={this.state.hasLime}
        />

        <label>hasPeel</label>
        <input
          type="checkbox"
          name="hasPeel"
          onChange={this.handleSvgFormChange}
          value={this.state.hasPeel}
        />

        <label>hasOrange</label>
        <input
          type="checkbox"
          name="hasOrange"
          onChange={this.handleSvgFormChange}
          value={this.state.hasOrange}
        />
        <label>hasMint</label>
        <input
          type="checkbox"
          name="hasMint"
          onChange={this.handleSvgFormChange}
          value={this.state.hasMint}
        />

        <label>hasCherry</label>
        <input
          type="checkbox"
          name="hasCherry"
          onChange={this.handleSvgFormChange}
          value={this.state.hasCherry}
        />

        <label>hasCuke</label>
        <input
          type="checkbox"
          name="hasCuke"
          onChange={this.handleSvgFormChange}
          value={this.state.hasCuke}
        />


        <label>hasOlive</label>
        <input
          type="checkbox"
          name="hasOlive"
          onChange={this.handleSvgFormChange}
          value={this.state.hasOlive}
        />

        <label>hasSalt</label>
        <input
          type="checkbox"
          name="hasSalt"
          onChange={this.handleSvgFormChange}
          value={this.state.hasSalt}
        />
        <label>hasCherry</label>
        <input
          type="checkbox"
          name="hasCherry"
          onChange={this.handleSvgFormChange}
          value={this.state.hasCherry}
        />

        <label>hasSugar</label>
        <input
          type="checkbox"
          name="hasSugar"
          onChange={this.handleSvgFormChange}
          value={this.state.hasSugar}
        />


        <label>liquidLow</label>
        <input
          type="checkbox"
          name="liquidLow"
          onChange={this.handleSvgFormChange}
          value={this.state.liquidLow}
        />

        <label>liquidMid</label>
        <input
          type="checkbox"
          name="liquidMid"
          onChange={this.handleSvgFormChange}
          value={this.state.liquidMid}
        />

        <label>liquidHigh</label>
        <input
          type="checkbox"
          name="liquidHigh"
          onChange={this.handleSvgFormChange}
          value={this.state.liquidHigh}
        />

        <label>absintheRinse</label>
        <input
          type="checkbox"
          name="absintheRinse"
          onChange={this.handleSvgFormChange}
          value={this.state.absintheRinse}
        />

        <label>scotchRinse</label>
        <input
          type="checkbox"
          name="scotchRinse"
          onChange={this.handleSvgFormChange}
          value={this.state.scotchRinse}
        />

      </div>
    )
  }
}

export default SvgForm;
