import React from 'react';

class Appitem extends React.Component {

    state = {
        isOpen: false
    }

    showTextHandler = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    deleteHandler = () => {
        const key = this.props.id
        this.props.deleteNotes(key)
    }

    render(){
        const divStyle = {display: 'inline-block', backgroundColor: this.props.color, border: '1px solid black', borderRadius: '5px', margin: '5px 10px'}
        const textStyle = {height: "auto", textAlign: 'justify', padding: '5px 15px'}
        const titleStyle = {alignSelf: 'center'}
        const body = this.state.isOpen && <p style={textStyle}>{this.props.text}</p>
        return (
            <div className="col-12 col-md-8" style={divStyle}>
                <div className="row">
                    <div className="col-10"  style={titleStyle}>
                        <h3>{this.props.name}</h3>
                    </div>
                    <div className="col-2">
                        <button onClick={this.showTextHandler} className="btn btn-outline-dark my-1">{this.state.isOpen ? "Hide" : "Show"}</button>
                        <button onClick={this.deleteHandler} className="btn btn-outline-danger my-1">Clear</button>
                    </div>
                </div>
                <div className="row">
                    {body}
                </div>
            </div>
        )
    }
    
}

export default Appitem;