import React from 'react';
// import SvgCheckbox from './SvgCheckbox';
import SvgChooseGlass from '../SvgChooseGlass';
import RocksSVG from '../SwitchGlasses/RocksSVG';

function SvgForm(props) {
  // class SvgForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     props. = {
  //       ice: 'no_ice',

  //       hasLime: false,
  //       hasLemon: false,
  //       hasPeel: false,
  //       hasOrange: false,
  //       hasMint: false,
  //       hasCherry: false,
  //       hasCuke: false,
  //       hasOlive: false,
  //       hasSalt: false,
  //       hasSugar: false,

  //       washline: "highLiquid",

  //       absintheRinse: false,
  //       scotchRinse: false,
  //     }
  //     props.handleSvgFormChange = props.handleSvgFormChange.bind(props);
  //   };

  //   handleSvgFormChange = (event) => {
  //     const { name, value, type, checked } = event.target
  //     // props.setState({ [event.target.name]: event.target.value });

  //     type === "checkbox" ? props.setState({ [name]: checked }) : props.setState({
  //       [name]: value
  //     })
  //   }


  return (

    <div className="SvgForm"
    // onSumbit={props.handleSvgFormSubmit}
    >


      <h4>SvgForm</h4>

      <label>No Ice</label>
      <input
        type="radio"
        name="ice"
        onChange={props.handleSvgFormChange}
        checked={props.ice === 'no_ice'}
        value='no_ice'
      />
      <br />

      <label>Small Ice</label>
      <input
        type="radio"
        name="ice"
        onChange={props.handleSvgFormChange}
        checked={props.ice === 'small_ice'}
        value='small_ice'
      />
      <br />

      <label>Large Ice</label>
      <input
        type="radio"
        name="ice"
        onChange={props.handleSvgFormChange}
        checked={props.ice === 'large_ice'}
        value='large_ice'
      />
      <br />
      <label>Lime</label>
      <input
        type="checkbox"

        name="hasLime"
        onChange={props.handleSvgFormChange}
        value={props.hasLime}
      />
      <br />
      <label>Lemon</label>
      <input
        type="checkbox"
        name="hasLemon"
        onChange={props.handleSvgFormChange}
        value={props.hasLemon}
      />
      <br />
      <label>Peel</label>
      <input
        type="checkbox"
        name="hasPeel"
        onChange={props.handleSvgFormChange}
        value={props.hasPeel}
      />
      <br />
      <label>Orange</label>
      <input
        type="checkbox"
        name="hasOrange"
        onChange={props.handleSvgFormChange}
        value={props.hasOrange}
      />
      <br />
      <label>Mint</label>
      <input
        type="checkbox"
        name="hasMint"
        onChange={props.handleSvgFormChange}
        value={props.hasMint}
      />
      <br />
      <label>Cherry</label>
      <input
        type="checkbox"
        name="hasCherry"
        onChange={props.handleSvgFormChange}
        value={props.hasCherry}
      />
      <br />
      <label>hasCuke</label>
      <input
        type="checkbox"
        name="hasCuke"
        onChange={props.handleSvgFormChange}
        value={props.hasCuke}
      />
      {/* 
    <br />
    <label>Olive</label>
    <input
      type="checkbox"
      name="olive"
      onChange={props.handleSvgFormChange}
      value={props.olive}
    />
    <br />
    <label>Salt</label>
    <input
      type="checkbox"
      name="salt"
      onChange={props.handleSvgFormChange}
      value={props.salt}
    />
    <br />
   <label>Sugar</label>
    <input
      type="checkbox"
      name="sugar"
      onChange={props.handleSvgFormChange}
      value={props.sugar}
    />
    <br /> */}

      <label>Liquid Low</label>
      <input
        type="radio"
        name="washline"
        checked={props.washline === "liquidLow"}
        onChange={props.handleSvgFormChange}
        value="liquidLow"
      />
      <br />
      <label>Liquid Mid</label>
      <input
        type="radio"
        name="washline"
        onChange={props.handleSvgFormChange}
        checked={props.washline === "liquidMid"}
        value="liquidMid"
      />
      <br />

      <label>Liquid High</label>
      <input
        type="radio"
        name="washline"
        checked={props.washline === "liquidHigh"}
        onChange={props.handleSvgFormChange}
        value="liquidHigh"

      />
      <br />
      <label>Absinthe Rinse</label>
      <input
        type="checkbox"
        name="absintheRinse"
        onChange={props.handleSvgFormChange}
        value={props.absintheRinse}
      />
      <br />
      <label>Scotch Rinse</label>
      <input
        type="checkbox"
        name="scotchRinse"
        onChange={props.handleSvgFormChange}
        value={props.scotchRinse}
      />
      <br />

    </div>
  )
}



export default SvgForm;
