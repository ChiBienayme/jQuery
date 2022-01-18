//Après avoir cliqué sur le bouton magique : avec la méthode ajax charger le JSON de la France pour afficher dans la console le nom du pays et sa capitale. Le lien pour y arriver est le suivant : JSON France



$("button").click(function () {
    $.ajax({
      url:"https://restcountries.com/v3.1/name/france",
      success: function (data) {
        
        data.forEach((country) => {
          
          $("button").append(`<p>   ${country.capital} is the capital of ${country.name.common}</p>`)

        })
      }
    });
  });