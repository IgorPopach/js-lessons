import React from 'react';
import Film from '../film/film';

class ShowFilm extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: null
    }

    //TODO this.props.go don't update in componentDidMount
    componentDidMount() {
        console.log('componentDidMount', this.props.go);
        fetch(`http://www.omdbapi.com/?s=${this.props.go}&apikey=e3232cc1&`)
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

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="row">
                    {
                        items.map(item => (
                            <Film key={item.imdbID} title={item.Title} type={item.Type} year={item.Year} imdb={item.imdbID} src={item.Poster} />
                        ))
                    }
                </div>
            
            )
        }
    }
}

export default ShowFilm;