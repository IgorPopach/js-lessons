window.addEventListener('load', init, false);

function init() {
    var AllPerson = document.getElementById('getAllPerson');
    AllPerson.addEventListener('click', function () {
        url = 'https://swapi.co/api/people/';
        Request(url, showAllPerson);
    }, false);
    var addEvantNext = Base.getElementbyClass('pagination-right');
    addEvantNext.parentNode.addEventListener('click', function () {
        Request(Base.nextPage, showAllPerson);
    }, false);
    var addEvantPrev = Base.getElementbyClass('pagination-left');
    addEvantPrev.parentNode.addEventListener('click', function () {
        Request(Base.prevPage, showAllPerson);
    }, false);
}

var Base = {
    nextPage: null,
    prevPage: null,
    itemCount: null,
    showLoader: function () {
        document.getElementsByClassName("loader")[0].style.display = "block";
        var wait = document.getElementById("star-wars-info");
        wait.style.display = "none";
    },
    hideLoader: function () {
        document.getElementsByClassName("loader")[0].style.display = "none";
        var wait = document.getElementById("star-wars-info");
        wait.style.display = "block";
    },
    getElementbyClass: function (className) {
        var element = document.getElementsByClassName(className)[0];
        return element;
    },
    pagination: function () {
        if (Base.nextPage != null) {
            var currentPage = Base.nextPage.split("=");
        }

        var showPagination = this.getElementbyClass('inbox-pagination');
        showPagination.style.display = "block";

        var personCount = this.getElementbyClass('inbox-pagination');
        var count = personCount.getElementsByTagName('span')[0];
        if (Base.nextPage != null) {
            count.innerText = currentPage[1] - 1 + "0" + " of " + Base.count;
        }

        if (Base.prevPage == null) {
            var prevPge = this.getElementbyClass('pagination-left');
            prevPge.parentNode.style.display = "none";
        }
        else if (Base.prevPage != null) {
            var prevPge = this.getElementbyClass('pagination-left');
            prevPge.parentNode.style.display = "block";
        }
        if (Base.nextPage == null) {
            var nextPge = this.getElementbyClass('pagination-right');
            nextPge.parentNode.style.display = "none";
        }
        else if (Base.nextPage != null) {
            var nextPge = this.getElementbyClass('pagination-right');
            nextPge.parentNode.style.display = "block";
        }
    }
};

function showAllPerson(persons) {
    var allPersons = persons;
    var div = document.getElementById("star-wars-info");
    div.style.display = "block";
    if (div.hasChildNodes) {
        div.removeChild(div.childNodes[0]);
    }
    var startTable = document.createElement('table');
    div.appendChild(startTable);
    var endThead = document.createElement('thead');
    startTable.appendChild(endThead);
    var nameTD = document.createElement('th');
    nameTD.innerText = "Name";
    endThead.appendChild(nameTD);
    var heightTD = document.createElement('th');
    heightTD.innerText = "Height";
    endThead.appendChild(heightTD);
    var massTD = document.createElement('th');
    massTD.innerText = "Mass";
    endThead.appendChild(massTD);
    var hairColorTD = document.createElement('th');
    hairColorTD.innerText = "Hair color";
    endThead.appendChild(hairColorTD);
    var skinColorTD = document.createElement('th');
    skinColorTD.innerText = "Skin color";
    endThead.appendChild(skinColorTD);
    var tbodyTD = document.createElement('tbody');
    endThead.parentNode.insertBefore(tbodyTD, endThead.nextSibling);

    Base.pagination();

    for (var i = 0; i < allPersons.results.length; i++) {
        var wrapperTR = document.createElement('tr');
        tbodyTD.insertBefore(wrapperTR, tbodyTD.nextSibling);
        var personNameTD = document.createElement('td');
        personNameTD.innerText = allPersons.results[i].name;
        wrapperTR.insertBefore(personNameTD, wrapperTR.nextSibling);
        var personHeightTD = document.createElement('td');
        personHeightTD.innerText = allPersons.results[i].height;
        wrapperTR.insertBefore(personHeightTD, wrapperTR.nextSibling);
        var personMassTD = document.createElement('td');
        personMassTD.innerText = allPersons.results[i].mass;
        wrapperTR.insertBefore(personMassTD, wrapperTR.nextSibling);
        var personHairColorTD = document.createElement('td');
        personHairColorTD.innerText = allPersons.results[i].hair_color;
        wrapperTR.insertBefore(personHairColorTD, wrapperTR.nextSibling);
        var personSkinColorTD = document.createElement('td');
        personSkinColorTD.innerText = allPersons.results[i].skin_color;
        wrapperTR.insertBefore(personSkinColorTD, wrapperTR.nextSibling);
    }
}

function Request(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
                Base.nextPage = data.next;
                Base.prevPage = data.previous;
                Base.count = data.count;
                Base.hideLoader();
                callback(data);
            }
        }
    };
    xhr.send();
    Base.showLoader();
};