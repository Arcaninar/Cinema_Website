movies = getMovies();
cinemas = getCinemas();
locations = getCinemaLocation();

function set_cinema(){
    let txtCinema = "";
    for(i = 0; i < cinemas.length; i++){
        txtCinema += `<option value="` + i + `">` + cinemas[i].branchName + `</option>`;
    }

    return txtCinema;
}

function set_location() {
    let txtLocation = "";
    for (i = 0; i < locations.length; i++) {
        txtLocation += `<div class="new_row">`;
            txtLocation += `<h3> ` + locations[i].name + ` </h3>`;
            txtLocation += `<h4> Address : ` + locations[i].address + ` </h4>`;
            txtLocation += `<img src="../image/` + locations[i].img + `" alt="` + locations[i].name + ` Map" title="` + locations[i].name + ` Map">`;
            txtLocation += `<br>`;
        txtLocation += `</div>`;
    }

    return txtLocation;
}

function get_id(){
    change_cinemas(this.value);
}

function change_cinemas(id_num){
    let txtSelect = "";
    let first = true;
    let movies_num = cinemas[id_num].movies;
    for(i = 0; i < movies_num.length; i++){
        let show_num = movies_num[i].shows;
        let movie_name = movies[(movies_num[i].id)].name;
        let movie_pic = movies[(movies_num[i].id)].thumbnail;
        for(j = 0; j < show_num.length; j++){
            txtSelect += `<div class="column">`;
                txtSelect += `<input type="radio" name="shows" value="` + show_num[j].index + `_` + movie_name;
                if (first) {
                    txtSelect += `" checked>`;
                    first = false;
                }
                else {
                    txtSelect += `">`;
                }
                txtSelect += `<br>`;
                txtSelect += `<label for="shows">` + movie_name + `</label>`;
                txtSelect += `<br>`;
                txtSelect += `<img src="../` + movie_pic + `" alt="` + movie_name + ` Thumbnail" title=` + movie_name + ` Thumbnail">`;
                txtSelect += `<br>`;
                txtSelect += `<p> Date & Time: ` + show_num[j].datetime + `</p>`;
                txtSelect += `<p> House: ` + show_num[j].house + `</p>`;
            txtSelect += `</div>`;
        }
    }
    document.querySelector(".three_columns").innerHTML=txtSelect;

    let columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.addEventListener("click", event => {
            let button = column.querySelector("input");
            button.checked = true;
        })
    })
}


function init(){
    createStructure();
    document.querySelector("#movie_cinema").innerHTML = set_cinema();
    document.querySelector("#cinema_locations").innerHTML += set_location();
    change_cinemas(0);
    document.querySelector("#movie_cinema").onchange = get_id;
}
window.onload = init;