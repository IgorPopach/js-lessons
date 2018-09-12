function httpGet(url) {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}


httpGet("https://www.omdbapi.com/?t=terminator&apikey=6c00430a")
    .then(
        response => {
            console.log(response);
            let img = new Image();
            img.src = "https://img.omdbapi.com/?t=terminator&apikey=6c00430a";
            document.body.appendChild(img);
        },
        error => alert(`Rejected: ${error}`)
    );


// "http://img.omdbapi.com/?t=terminator&apikey=6c00430a"