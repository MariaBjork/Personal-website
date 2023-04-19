const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu");
const mainSection = document.getElementById("main-section"); 

const home = document.getElementById("home");
const project = document.getElementById("projects");
const about = document.getElementById("about");
const myoldtown = document.getElementById("myoldtown");

let currentPage = home;

let isMenuShowing = false;

handleRefresh();

function handleRefresh(){
    const prevPageID = sessionStorage.getItem("pageID");

    if (prevPageID){
        [home, project, about, myoldtown].forEach(section =>{
            if (section.id === prevPageID)
                changePage(section);
        });
    }
}


function toggleMenu(){

    if (isMenuShowing)
        closeMenu();
    else
        openMenu();
}

function closeMenu(){
    menuButton.classList = " fa fa-bars fa-4x";

    menu.style.display = "none";

    mainSection.style.opacity = "1";

    isMenuShowing = false;
}


function openMenu(){
    menuButton.classList = " fa fa-times fa-4x";

    menu.style.display = "flex";

    mainSection.style.opacity = "0.3";

    isMenuShowing = true;
}

function showHomePage(){
    changePage(home);

}

function showProjectPage(){
    changePage(projects);
}

function showAboutPage(){
    changePage(about);
}

function showMyoldtownPage(){
    changePage(Myoldtown);
}

function changePage(newPage){
    if (currentPage !== newPage){
        currentPage.style.display = "none";
        newPage.style.display = "block";
        currentPage = newPage;
    }
    closeMenu();
    sessionStorage.setItem("pageID", currentPage.id);
}