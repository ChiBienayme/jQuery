
$("button").click(function () {
    $("input").val("");
    $.ajax({
        url:"https://restcountries.com/v3.1/name/usa",
        success: function (data) {

            data.forEach((country) => {
            
            $("#country").html(`${country.name.common}`);
            $("#capital").html(`${country.capital}`);
            })
        }
        })
    
  });

// document.addEventListener('button', () => {
//     let countries;
//     fetch('https://restcountries.eu/v3.1/name/france')
//     .then(res => {

//         countries = res.data.countries;
//     })
// })