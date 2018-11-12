import React, { Component } from 'react';
import firebase from './../firebase.js';

class InputComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname: "",
            amount: "",
            term: "",
        };
        this.submitHendler=this.submitHendler.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleSurnameChange=this.handleSurnameChange.bind(this);
        this.handleAmountChange=this.handleAmountChange.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value.toUpperCase()})
    }

    handleSurnameChange = (event) => {
        this.setState({surname: event.target.value.toUpperCase()})
    }
    handleAmountChange = (event) => {
        this.setState({amount: event.target.value.toUpperCase()})
    }
    handleTermChange = (event) => {
        this.setState({term: event.target.value.toUpperCase()})
    }

    submitHendler = (event) => {
        event.preventDefault();
        console.log(this.state);
        let count = 0;
        const usersRef = firebase.database().ref("users/");
        usersRef.on("child_added", function(data) {
            let userBase = data.val();
            //fix me start!!!!
            console.log("this.state.name: " + this.state);
            if ( userBase.username === this.state.name && userBase.surname === this.state.surname) {
                count++;
            }
            //fix me end!!!!
        });
        if (count <= 2) {
            const newClientKey = firebase.database().ref().child('users').push().key;
            firebase.database().ref('users/' + newClientKey).set({
                username: this.state.name,
                surname: this.state.surname,
                amount : this.state.amount,
                term : this.state.term
            });
            console.log("Look to your Base!");
        } else {
            alert(`Alert! ${this.state.name} ${this.state.surname} has 3 Credits!!!`)
        }
    }
    render() {
        return (
            <div>
                <form className="col-md-6 form-line" onSubmit={this.submitHendler}>
                    <div className="form-group">
                        <label>Client name</label>
                        <input type="text" className="form-control" name="clientName" placeholder=" Enter Name" value={this.state.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Client surname</label>
                        <input type="text" className="form-control" name="clientSurname"
                            placeholder=" Enter client surname" value={this.state.surname} onChange={this.handleSurnameChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" className="form-control" name="amount" placeholder=" Enter amount" value={this.state.amount} onChange={this.handleAmountChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Term</label>
                        <input type="number" className="form-control" maxLength="2" min="3" max="12" name="term"
                            placeholder=" Enter term" value={this.state.term} onChange={this.handleTermChange}></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-default submit" value="Submit"><i className="fa fa-paper-plane"
                            aria-hidden="true"></i>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputComponent;