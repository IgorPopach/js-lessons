import React from 'react';
import Car from './../car/car';

class InputComponent extends React.Component {
    state = {
        model:"model",
        type:"type",
        color:"color",
    }
    // changeTitle = (event) => {
    //     console.log(event.target.value);
    //     this.setState({title: event.target.value});
    // }
    inputHendler = (event) => {
        event.preventDefault();
        console.log(this.refs.model.value);
        console.log(this.refs.type.value);
        console.log(this.refs.color.value);
        this.setState({
            model:this.refs.model.value,
            type:this.refs.type.value,
            color:this.refs.color.value,
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.model}  {this.state.type}  {this.state.color}</h2>
                <form>
                    <label>Input Car parameters: </label>
                    <input type="text" onChange={this.changeTitle} ref={"model"} placeholder='model'></input>
                    <input type="text" onChange={this.changeTitle} ref={"type"} placeholder='type'></input>
                    <input type="text" onChange={this.changeTitle} ref={"color"} placeholder='color'></input>
                    <button type="submit" onClick={this.inputHendler}>Send</button>
                </form>
                <Car model={this.state.model} type={this.state.type} color={this.state.color} />
            </div>
        )
    }
}
export default InputComponent;