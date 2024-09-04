import { Component } from 'react';

class CardBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title : (props.Title !== null)? props.Title : "",
            Description : (props.Description !== null)? props.Description: "",
            Img_Url : (props.Img_Url !== null)?props.Img_Url :"",
            Id : (props.Id !== null)? props.Id : 0,
        };
        if (new.target === CardBase) {
            throw new TypeError("Cannot construct MyComponent instances directly");
        }
        if (this.render === CardBase.prototype.render) {
            throw new TypeError("Must override render method");
        }
        if (this.state.Title === null || this.state.Description === null) {
            throw new Error("Title, Description are required fields");
        }
        
    }

    render() {
         throw new Error("Render method must be implemented by subclass");
         return null;
    }
}

export default CardBase;