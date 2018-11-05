import React from 'react';

class InputComponent extends React.Component {
    state = {
        title:"Input state"
    }
    // changeTitle = (event) => {
    //     console.log(event.target.value);
    //     this.setState({title: event.target.value});
    // }
    inputHendler = (event) => {
        event.preventDefault();
        console.log(this.refs.myInput.value);
        this.setState({
            title:this.refs.myInput.value
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.title}</h2>
                <form>
                    <input type="text" onChange={this.changeTitle} ref={"myInput"}></input>
                    <button type="submit" onClick={this.inputHendler}>Send</button>
                </form>
            </div>
        )
    }
}
export default InputComponent;