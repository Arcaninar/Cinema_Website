cinemas = getCinemas();
id_num = movie_name = cinema_name = date_time = house_num = date = time = "";
seat_info = [];

function getInfo(){
    let searchBar = window.location.search.substring(1);
    let final_string = searchBar.split("&")[1].split("=")[1].split("_");
    id_num = final_string[0];
    movie_name = final_string[1];
    for(i = 0; i < cinemas.length; i++){

        let movieLists = cinemas[i].movies;
        for(j = 0; j < movieLists.length; j++){

            let showLists = movieLists[j].shows;
            for(k = 0; k < showLists.length; k++){

                if(showLists[k].index == id_num){
                    cinema_name = cinemas[i].branchName;
                    date_time = showLists[k].datetime;
                    house_num = showLists[k].house;
                    break;
                }
            }
        }
    }
}

function correctInfo(){
    getInfo();
    movie_name = movie_name.split("+").join(" ");
    date_time = date_time.split(" - ");
    date = date_time[0];
    time = date_time[1];
    
    let array_target = document.querySelectorAll(".special_info2");
    let array_source = new Array(cinema_name, movie_name, date, time, house_num);
    for(i = 0; i < array_target.length; i++){
        array_target[i].innerHTML = array_source[i];
    }
}

function checkSeat(){
    let tableData = document.querySelectorAll("td");
    tableData.forEach(item => {
        let seat = item.querySelector("input");
        if (seat) {
            seat.addEventListener('click', () => {
                let txt = item.querySelector("label");
                txt.addEventListener('mouseover', () => changeStyleHover(txt));

                if (!seat.check) {
                    changeStyleSelected(txt);
                    seat_info.push(seat.value);
                    seat_info.sort();
                    txt.addEventListener('mouseout', () => changeStyleSelected(txt));
                }

                else if(seat.check) {
                    changeStyleUnSelected(txt);
                    seat_info.splice(seat_info.indexOf(seat.value), 1);
                    txt.addEventListener('mouseout', () => changeStyleUnSelected(txt));
                }
                seat.check = !seat.check;
                let seats = generateSeats();
                document.querySelector("#seat_info").innerHTML = seats;
            })
        }
    });
}

function generateSeats() {
    let seats = "";
    if (seat_info.length > 0) {
        for (let i = 0; i < seat_info.length - 1; i++) {
            seats += seat_info[i] + " ";
        }
        seats += seat_info[seat_info.length - 1];
    }
    return seats;
}

function changeStyleSelected(txt) {
    changeStyle(txt, "#FDFFA9", "bold", "#00C897");
}

function changeStyleUnSelected(txt) {
    changeStyle(txt, "black", "normal", "white");
}

function changeStyleHover(txt) {
    changeStyle(txt, "black", "normal", "#FDFFA9");
}

function changeStyle(txt, color, weight, bg_color) {
    txt.style.color = color;
    txt.style.fontWeight = weight;
    txt.style.backgroundColor = bg_color;
}

function save_info(){
    if (seat_info.length != 0) {
        localStorage.setItem('cinema_name', cinema_name);
        localStorage.setItem('movie_name', movie_name);
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);
        localStorage.setItem('house_num', house_num);
        localStorage.setItem('seat_info', seat_info);
        window.location.href = 'print.html';
    }
    
    else if (!document.querySelector("#warning")) {
        const p = document.createElement("p");
        p.innerHTML = "Please select at least one seat!";
        p.setAttribute("id", "warning");
        document.querySelector("#submit_button").appendChild(p);
    }
}

function init(){
    createStructure();
    correctInfo();
    checkSeat();
}
window.onload = init;