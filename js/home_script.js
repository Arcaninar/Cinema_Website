movies = getMovies();
index = 0;
movie_list = [];

function initialize_movie_list() {
    let txtNow = `<div class="column_one"><h3> Now Showing </h3></div>`;
    let txtComing = `<div class="column_one"><h3>Up Coming</h3></div>`;
    for (i = 0; i < movies.length; i++) {
        if (movies[i].type == "now") {
            txtNow = append_tag(txtNow, movies[i]);
        }

        else if (movies[i].type == "upcoming") {
            txtComing = append_tag(txtComing, movies[i]);
        }
    }
    movie_list.push(txtNow);
    movie_list.push(txtComing);
}

function append_tag(txt, movieInfo) {
    txt += '<div class="column_two">';
        txt += `<div class="column_two_one">`;
            txt += `<h3>` + movieInfo.name + `</h3>`;
            txt += `<img id="` + movieInfo.id + `" onclick="change_image(this)" src="` + movieInfo.thumbnail + `" alt="` + movieInfo.name + ` Thumbnail" title=` + movieInfo.name + ` Thumbnail">`;
        txt += `</div>`;
        txt += `<div class="column_two_two">`;
            txt += `<p>Director   : ` + movieInfo.director + `</p>`; 
            txt += `<p>Cast   : ` + movieInfo.cast + `</p>`; 
            txt += `<p>Duration   : ` + movieInfo.duration + ` minutes</p>`;
        txt += `</div>`;
    txt += `</div>`;
    return txt;
}

function initial_videos(){
    let txt = "";
    txt += `<h2>` + movies[index].name + `</h2>`;
    txt += `<video controls autoplay muted onended="timeOut()">`;
        txt += `<source src="` + movies[index].src + `">`;
        txt += `<h3> Your browser does not support this video format </h3>`;
    txt += `</video>`;
    txt += `<h3> Coming Soon In Your Nearest Cinemas </h3>`;
    return txt;
}

function timeOut(){
    setTimeout(end_video, 2000);
}

function end_video(){
    if(index == (movies.length - 1)){
        index = 0;
    } else {
        index += 1;
    }
    document.querySelector("#video_trailer").querySelector("h2").innerHTML = movies[index].name;
    let obj = document.querySelector("video");
    document.querySelector("source").setAttribute("src", movies[index].src);
    obj.load();
}

function change_image(that){
    index = parseInt(that.id) - 1;
    document.querySelector("#video_trailer").querySelector("h2").innerHTML = movies[index].name;
    let obj = document.querySelector("video");
    document.querySelector("source").setAttribute("src", movies[index].src);
    obj.load();
}

function init(){
    initialize_movie_list();
    document.querySelector("#now_showing").innerHTML = movie_list[0];
    document.querySelector("#up_coming").innerHTML = movie_list[1];
    document.querySelector("#video_trailer").innerHTML = initial_videos();
}

window.onload = init;