
function topnav_resize() {
    const x = document.getElementById("topnav");
    if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//if the user is between 0 and 30% scrolled, change the background transparency from 0 to 100% between 0 and 30% scrolled
window.onscroll = (e) => {
    const nav = document.getElementById("topnav");
    const scroll = window.scrollY;
    const height = window.innerHeight;
    const percent = (scroll / height) * 100;
    if(percent > 30) {
        nav.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
    }
};
