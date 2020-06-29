// Menu Responsivo
document.getElementById("menu").onclick = function() {
    var menuList = document.getElementById("menuList");

    if (menuList.classList && this.classList) { 
        menuList.classList.toggle("opening");
        this.classList.toggle("open");
    } else { // For IE9
        var classesMenu = menuList.className.split(" ");
        var i = classesMenu.indexOf("opening");
        if (i >= 0)
            classesMenu.splice(i, 1);
        else 
            classesMenu.push("opening"); 
            menuList.className = classesMenu.join(" ");
        
        var classes = this.className.split(" ");
        var j = classes.indexOf("opening");
        if (j >= 0)
            classes.splice(j, 1);
        else 
            classes.push("opening");
            this.className = classes.join(" "); 
    }
};

// Abre contenido de cada una de las SOLUCIONES
function abrirSolucion(evt, solution) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(solution).style.display = "block";
    evt.currentTarget.className += " active";
    // Realizamos Scroll to top (Nuestras Soluciones)
    var elmnt = document.getElementById("scrollToHere");
    elmnt.scrollIntoView();
}

// Usando JQuery
// $(document).ready(function(){
//     $('.menu-toggle').click(function() {

//         $('ul').toggleClass('opening');
//         $(this).toggleClass('open');

//     });
// });