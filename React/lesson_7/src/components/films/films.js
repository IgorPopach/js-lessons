import React from 'react';
import ShowFilm from '../showfilm/showfilm';

class Films extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: null,
        go: null,
        
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    handleChange(event){
        let search = event.target.value.toLowerCase();
        this.setState({
            search: search
        })
    }
    handleSubmit(){
        const go = this.state.search;
        this.setState({
            go: go
        })
    }
    
  
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>Search</button>
                <div>
                    {this.state.go !== null ? <ShowFilm go={this.state.go}/> : <div>Please Enter film...</div>}
                </div>
            </div>
        );
    }
}
  
export default Films;
