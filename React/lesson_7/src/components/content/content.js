import React from 'react';
import CreateReactClass from 'create-react-class';
import Contact from './../contact/contact';

const contacts = [
    {
        id:1,
        name: "Terminator",
        telNumber: 123456,
        image: "https://media.giphy.com/media/WAmFPjn5CKPrq/giphy.gif",
        city: "Los Angeles"
    },
    {
        id:2,
        name: "Simpsons",
        telNumber: 158456,
        image: "https://media.giphy.com/media/3BRDkVjKikYW4/giphy.gif",
        city: "Springfield"
    },
    {
        id:3,
        name: "The Thing",
        telNumber: 145856,
        image: "https://media.giphy.com/media/dDxt4uFUsWJ0s/giphy.gif",
        city: "Somewhere"
    },
    {
        id:4,
        name: "It",
        telNumber: 666666,
        image: "https://media.giphy.com/media/ckw3I94z1e0PuBaAep/giphy.gif",
        city: "Underground"
    },
]



const Content = CreateReactClass({
    getInitialState () {
      return {
        persons: contacts
      };
    },

    changeHandler(event){
        let search = event.target.value.toLowerCase();
        console.log("search", search);
        let newContacts = contacts.filter(function(e){
            let newSearch = e.name.toLowerCase();
            return newSearch.indexOf(search) !==-1;
        })
        this.setState({
            persons: newContacts
        })
    },
    
    render() {
        console.log(this.state.persons);
      return (
        <div>
            <input type="text" onChange={this.changeHandler} />
            {this.state.persons.map((contact) => {
                return (
                    <Contact key={contact.id} src={contact.image} name={contact.name} telNumber={contact.telNumber} city={contact.city} />
                )
            })}
        </div>
      );
    }
  });
  
  export default Content;
