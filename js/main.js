var elWrapper = document.querySelector("#mainWrapper");
var elMovies = movies.slice(0, 10);


function renderFilm(array, wrapper) {
    wrapper.textContent = null;
    for (let i = 0; i < array.length; i++) {
        var newH5 = document.createElement("h5");
        newH5.setAttribute("class", "card-title")
        newH5.textContent = "Title of Movie: " + array[i].Title;
        newH5.setAttribute("id", i);
        
        //div
        var wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("class", "card-body");
        
        wrapperDiv.appendChild(newH5);
        
        //IMG
        
        var elImg = document.createElement("img");
        elImg.classList = ("card-img-top");
        elImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`;
        
        var cardWrapper = document.createElement("div");
        cardWrapper.setAttribute("class", "p-0 pb-3 col-5 mb-3 border border-1 border-dark");
        cardWrapper.appendChild(elImg);
        cardWrapper.appendChild(wrapperDiv);
        
        
        wrapper.appendChild(cardWrapper)
    }
}

renderFilm(elMovies, elWrapper);