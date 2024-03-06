title = document.querySelector("title").innerHTML;

function createNav() {
    let nav = "";
    nav += `<nav>`;
        nav += `<img src="../image/cinema_logo.png" alt="Cinema Logo" title="Cinema Logo">`;
        nav += `<p>Corn Cinema</p>`;
        nav += `<p>`;
            nav += `<a ${title.includes("Corn Cinema") ? `class="disabled"` : ``} href="../index.html">Home</a> | <a ${title.includes("Buy Ticket") ? `class="disabled"` : ``} href="now_showing.html">Buy Ticket</a>`;
        nav += `</p>`;
    nav += `</nav>`;
    return nav;
}

function createHeader() {
    let header = "";
    header += `<header>`;
        header += `<img src="../image/cinema_logo.png" alt="Cinema Logo" title="Cinema Logo">`;
        header += `<h1> Corn Cinema </h1>`;
    header += `</header>`;
    return header;
}

function createFooter() {
    let footer = "";
    footer += `<footer>`;
        footer += `<p>@Copyright of resources belong to corresponding copyright owners - fair use for education purpose</p>`;
        footer += `<p><a ${title.includes("Corn Cinema") ? `class="disabled"` : ``} href="../index.html">Home</a> | <a ${title.includes("Acknowledgement") ? `class="disabled"` : ``} href="doc_dsgn_ack.html" target="_blank">Design & Acknowledgement</a></p>`;
    footer += `</footer>`;
    return footer;
}

function createStructure(){
    let nav = createNav();
    let header = createHeader();
    let section = document.querySelector("body").innerHTML;
    let footer = createFooter();
    let structure = nav + header + section + footer;
    document.querySelector("body").innerHTML = structure;
}