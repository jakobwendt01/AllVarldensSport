const menyKnapp = document.getElementById("menuBtn");
const meny = document.getElementById("menu");

meny.style.display = "none";

menyKnapp.addEventListener("click", function () {

    if (meny.style.display === "none") {
        meny.style.display = "block";
    }

    else {
        meny.style.display = "none";
    }

});

/*const betyder att variabeln inte ska ändras senare.
document är hela HTML-sidan.
getElementById("menuBtn") letar efter ett HTML-element med id menuBtn.*/

/* getelementbyid letar upp id=menu */

/*meny.style.display none döljer menyn när sidan öppnas och man inte håller musen över */

/*"Hitta knappen och menyn. Göm menyn från början. Varje gång användaren klickar på knappen ska menyn växla mellan synlig och dold."*/