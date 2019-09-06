import React, {Component} from 'react';

class Textbox extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    render() {
      return (
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">{this.props.labelText}</label>
            <input type="email" className="form-control" id={this.props.idValue} 
            value={this.state.value}/>
        </div>
      );
    }
  }

  export default Textbox;