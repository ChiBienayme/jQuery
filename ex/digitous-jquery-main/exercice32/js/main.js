//Après avoir cliqué sur le bouton magique : avec la méthode ajax charger le JSON de la France pour afficher dans la console le nom du pays et sa capitale. Le lien pour y arriver est le suivant : JSON France


//version 1 avec ajax
// $("button").click(function () {
//     $.ajax({
//       url:"https://restcountries.com/v3.1/name/france",
//       success: function (data) {
        
//         data.forEach((country) => {
          
//           $("button").append(`<p>   ${country.capital} is the capital of ${country.name.common}</p>`)

//         })
//       }
//     });
//   });

// document.addEventListener('.btn', () => {
  

//Version 2 avec fetch et await

$("button").click(function() {
	$("button").empty();
	getCountries()
	.then(result =>{
		result.forEach(country => {
			
			$("button").append(`<p>   ${country.capital} is the capital of ${country.name.common}</p>`)

		});	
	})
	.catch(err =>console.log(err));
});


async function getCountries(){

	const response = await fetch(`https://restcountries.com/v3.1/name/france`);

	const responseData = await response.json();

	return responseData;
}

async function getCountryName(){
	const response = await fetch(`https://restcountries.com/v3.1/name/france`);
	const responseData = await response.json();

	return responseData;
}

