window.onload = function() {
    var read = document.getElementById('read');
    var write = document.getElementById('write');
    var remove = document.getElementById('remove');
    write.addEventListener('click', function write() {
        window.localStorage.setItem('name', 'Igor');
        window.localStorage.setItem('surname', 'Popach');
    }, false);
    read.addEventListener('click', function read() {
        var name = window.localStorage.getItem('name');
        var surname = window.localStorage.getItem('surname');
        console.log(name, surname);
    }, false);
    remove.addEventListener('click', function remove() {
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('surname');
    }, false);
}