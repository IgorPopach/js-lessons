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
    }
    submitHendler = (event) => {
        event.preventDefault();
        console.log(this.refs.clientName.value + "\n" + this.refs.clientSurname.value + "\n" + this.refs.amount.value + "\n" + this.refs.term.value);
        this.setState({
            name:this.refs.clientName.value,
            surname:this.refs.clientSurname.value,
            amount:this.refs.amount.value,
            term:this.refs.term.value,
        })
        console.log(" state: " + this.state.name);
        let count = 0;
        const usersRef = firebase.database().ref("users/");
        usersRef.on("child_added", function(data) {
            let userBase = data.val();
            if ( userBase.username === this.refs.clientName.value && userBase.surname === this.refs.clientSurname.value) {
                count++;
            }
        });
        if (count <= 2) {
            const newClientKey = firebase.database().ref().child('users').push().key;
            firebase.database().ref('users/' + newClientKey).set({
                username: this.refs.clientName.value,
                surname: this.refs.clientSurname.value,
                amount : this.refs.amount.value,
                term : this.refs.term.value
            });
            console.log("Look to your Base!");
        } else {
            alert(`Alert! ${this.state.name} ${this.state.surname} has 3 Credits!!!`)
        }
    }
    render() {
        return (
            <div>
                <form className="col-md-6 form-line">
                    <div className="form-group">
                        <label>Client name</label>
                        <input type="text" className="form-control" name="clientName" placeholder=" Enter Name" required ref={"clientName"}></input>
                    </div>
                    <div className="form-group">
                        <label>Client surname</label>
                        <input type="text" className="form-control" name="clientSurname"
                            placeholder=" Enter client surname" required ref={"clientSurname"}></input>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" className="form-control" name="amount" placeholder=" Enter amount" required ref={"amount"}></input>
                    </div>
                    <div className="form-group">
                        <label>Term</label>
                        <input type="number" className="form-control" maxLength="2" min="3" max="12" name="term"
                            placeholder=" Enter term" required ref={"term"}></input>
                    </div>
                    <div>
                        <button type="button" className="btn btn-default submit" name="submit" onClick={this.submitHendler}><i className="fa fa-paper-plane"
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