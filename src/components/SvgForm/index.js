import React from 'react';


class SvgForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      svgColor: "coral"
    }
  }

  handleSvgFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="cocktail-svg-maker">
        <h1>Illustrate Your Recipe</h1>

        <label>Svg Color
          <select
            value={this.state.svgColor}
            onChange={this.handleSvgFormChange}
            name="svgColor"
          >
            <option value="pink">PINK</option>
            <option value="lavender">LAVENDER</option>
            <option value="coral">CORAL</option>
          </select>

        </label>

      </div>
    )
  }
}

export default SvgForm;
