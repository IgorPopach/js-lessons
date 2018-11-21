import React from 'react';
import Film from '../film/film';

class Films extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: null,
        error: null,
        isLoaded: false,
        items: null
        
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
        fetch(`http://www.omdbapi.com/?s=${this.state.search}&apikey=e3232cc1&`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.Search,
              });
            },
            
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }
    
  
    render() {
        const { error, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>Search</button>
                    <div>
                        {items !== null ? 
                            <div className="row">
                                {
                                    items.map(item => (
                                        <Film key={item.imdbID} title={item.Title} type={item.Type} year={item.Year} imdb={item.imdbID} src={item.Poster} />
                                    ))
                                }
                            </div> : 
                            <div>Please Enter film</div>
                        }
                    </div>
                </div>
            );
        }
    }
}
  
export default Films;
