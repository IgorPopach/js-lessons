import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Car from './components/car/car';
import InputComponent from './components/inputComponent';

class Main extends React.Component{
    state = {
        title: "main page",
        cars: [
            {model:'BMW', type:'sedan'},
            {model:'Audi', type:'avant'},
            {model:'VW', type:'cabrio'}
        ]
    }
    titleHandler = () => {
        console.log(this.title);
        if(this.state.title === "main page"){
            this.setState({title: 'new State'})
        }
        else {
            this.setState({title: 'main page'})
        }
    }
    changeTitleHandler = (newState) => {
        this.setState({
            title: newState
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.title}</h2>
                <button onClick={this.titleHandler}>Click</button>
                {this.state.cars.map((iterator) => {
                    return <Car model={iterator.model} type={iterator.type} changeTitle={this.changeTitleHandler.bind(this,iterator.model)}/>
                })}
                {/* <Car model={'BMW'} type={'sedan'} color={'black'} changeTitle={this.changeTitleHandler.bind(this,"BMW")}/>
                <Car model={'Audi'} type={'sedan'} color={'white'} changeTitle={() => this.changeTitleHandler('Audi')}/>
                <Car model={'Ferrari'} type={'coupe'} color={'red'} changeTitle={this.changeTitleHandler.bind(this,"Ferrari")}/> */}
                <br/>
                <hr/>
                <br/>
                <br/>
                <InputComponent />

            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
