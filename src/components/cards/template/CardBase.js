import { Component } from 'react';

class CardBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title : props.Title,
            Description : props.Description,
            Img_Url : props.Img_Url,
        };
        if (new.target === CardBase) {
            throw new TypeError("Cannot construct MyComponent instances directly");
        }
        if (this.render === CardBase.prototype.render) {
            throw new TypeError("Must override render method");
        }
        if (!props.Title || !props.Description ) {
            throw new Error("Title, Description are required fields");
        }
    }
    render() {
         throw new Error("Render method must be implemented by subclass");
         return null;
    }
}

export default CardBase;