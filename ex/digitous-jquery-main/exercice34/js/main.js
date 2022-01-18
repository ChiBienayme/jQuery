//version 1 avec ajax
// $("button").click(function () {
//     $("input").val("");
//     $.ajax({
//         url:"https://restcountries.com/v3.1/name/usa",
//         success: function (data) {

//             data.forEach((country) => {
            
//             $("#country").html(`${country.name.common}`);
//             $("#capital").html(`${country.capital}`);
//             })
//         }
//         })
    
//   });

//Version 2 avec fetch et await

$("button").click(function() {
	// $("button").empty();
	getCountries()
	.then(result =>{
		result.forEach(country => {
			
			$("#country").html(`${country.name.common}`);
            $("#capital").html(`${country.capital}`);

		});	
	})
	.catch(err =>console.log(err));
});


async function getCountries(){

	const response = await fetch(`https://restcountries.com/v3.1/name/france`);

	const responseData = await response.json();

	return responseData;
}

