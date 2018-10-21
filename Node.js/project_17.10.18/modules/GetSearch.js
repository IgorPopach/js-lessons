const axios = require('axios');

function GetSearch() {
    try {
        axios.get('http://www.omdbapi.com/?s=predator&apikey=e3232cc1')
        .then(response => {
            console.log(response.data.Search);
            const Search = response.data.Search;
            console.log(Search[0]);
            return Search[0];
        })
        .catch(error => {
            console.log(error)
        })
    }   catch (error) {
        console.error(error)
    }
}

module.exports = GetSearch;