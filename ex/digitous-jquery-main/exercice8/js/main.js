// Le texte Konexio! est dans le code HTML mais invisible à l'oeil de l'utilisateur. Faites le apparaître après un clic sur le bouton magique. Ce bouton appelera la fonction displaySecretText. Cette fonction a déjà été intégrée à la page et ne fait pas partie de jQuery. Il vous suffira de l'appeler



// $(".btn").click(function(){
//     $("#text").css("display", "contents");
//   });

$("button").click(function displaySecretText(){
  $("#text").show(function() {
  });
});
  
  