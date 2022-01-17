// Le texte Konexio! est dans le code HTML mais invisible à l'oeil de l'utilisateur. Faites le apparaître après un clic sur le bouton magique. Ce bouton appelera une fonction que vous aurez créé et qui affichera le texte avec la méthode css

$(".btn").click(function(){
    $("#text").css("display", "contents");
  });

  