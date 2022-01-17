//Changer la couleur du carré en rouge avec la méthode css
// $(() => {
//     const squares = $(".square")
//     // squares.css("color", "red");
//     squares[0].style.color = "red";
//     console.log(squares);
// })

$("#updateCss").click(function(){
    $("#square").css("background-color", "red");
  });
  