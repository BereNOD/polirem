import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./styles.scss";
 
class Colorpicker extends React.Component {
  state = {
    color: "rgb(127, 127, 127)"
  };


  onUpdate = (render, handle, value, un, percent) => {
      console.log(render, handle, value, un, percent);
  };
 
  render() {
    return (
      <div className="slider" id="colorpicker">
          <a className="Text_1"> От 
        <input onClick={this.changeByRef_1} /></a>
        <a className="Text_2">До
        <input onClick={this.changeByRef_2} /></a>
        <Nouislider
            start={[20, 80]}
            connect={[false, true, false]}
            range={{
                min: this.props.min,
                max: this.props.max
            }}
            onUpdate={this.onUpdate}
          />
      </div>
    );
  }
}

export default Colorpicker;