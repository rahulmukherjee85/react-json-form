import React, {Component} from 'react';
import Textbox from './Textbox'
class GenerateForm extends Component {
    constructor(){
        super();
        const payload = {"elements":[{"id":"textbox-id-name","label":"Enter your name","type":"textbox","value":"","isRequired":true,"validationPattern":""},{"id":"textbox-id-name","label":"Enter your name","type":"textbox","value":"","isRequired":true,"validationPattern":""},{"id":"textbox-id-name","label":"Enter your name","type":"textbox","value":"","isRequired":true,"validationPattern":""}]};
        this.state = payload;
    }

    render(){
        let i=0;
        return (
            <form>
                {this.state.elements.map(element => {
                    i++;
                    if(element.type === "textbox"){
                        return (<Textbox 
                            labelText={element.label}
                            value={element.value}
                            idValue={element.id+'-'+i}
                            
                        />);
                    }
                })}
            </form>
        );
    }

}

export default GenerateForm;