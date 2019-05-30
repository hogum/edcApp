function listenForNavBar() {
    let navElement = document.getElementsByClassName('bar-icon')[0]
    let navBar = document.getElementById("nav-nav")

    if (navElement) 
        navElement.addEventListener('click', () => {

            if (navBar.className === "nav") {
            navBar.className += " responsive";
          
          } else {
            navBar.className = "nav";
          }
    })
}

listenForNavBar()