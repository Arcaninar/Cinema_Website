movie_name = cinema_name = date = time = house_num = "";
ticket_info = [];

function changeInfo(){
    let title_list = new Array("Cinema", "Movie", "Date", "Time", "House");
    let value_list = new Array(cinema_name, movie_name, date, time, house_num);
    let txt = ""
    for(i = 0; i < ticket_info.length; i++){
        txt += "<div>";
        for(j = 0; j < title_list.length; j++){
            txt += createTag(title_list[j], value_list[j]);
        }
            txt += createTag("Seat", ticket_info[i]);
            txt += `<br>`
        txt += `</div>`;
    }
    document.querySelector("section").innerHTML += txt;
}

function createTag(title, value) {
    return `<p class="new_line"> <span class="special_info1">` + title + `</span> <span class="colon">:</span> <span class="special_info2">` + value + `</span></p>`;
}

function correctInfo(){
    cinema_name = localStorage.getItem('cinema_name');
    movie_name = localStorage.getItem('movie_name');
    date = localStorage.getItem('date');
    time = localStorage.getItem('time');
    house_num = localStorage.getItem('house_num');
    ticket_info = localStorage.getItem('seat_info').split(',');
    changeInfo();
}

function init(){
    createStructure();
    correctInfo();
}

window.onload = init;