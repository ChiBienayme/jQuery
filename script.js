// console.log("Hello World");
// console.log("Bonjour");

// const username = "Marie";

// console.log(username);

// function $()
// console.log($);

// $("#text")
// console.log("#text");

// Callback dans une fonction
//V1
$(() => {
  // la methode hide: $("#text").hide()
  // $("button").click(function () {
  // console.log(" You clicked the button");
  // });
  // $("button").click(function () {
  //     $("#text").hide();
  // })

  //Version 1
  // $("button").click(function () {
  //     const text = $("#text");

  //     if ($("#text").is(":visible")) {
  //         $("#text").hide();
  //     }else {
  //         $("#text").show();
  //     };
  // })

  //Version 2
  // $("button").click(function () {
  //     const text = $("#text");

  //     if ($("#text").is(":visible")) {
  //         text.hide();
  //     }else {
  //         text.show();
  //     };
  // })

  // Intro to jQuery
  //Version 3
  $("clickMe").click(function () {
    const text = $("#text");

    if (text.is(":visible")) {
      text.hide();
    } else {
      text.show();
    }

    // $(".h1").addClass("arial"); //change font 
    // $(".h1").text("My new title"); //change text
    $(".h1").addClass("arial").text("My new title")

    //Recupere toutes les balises html qui ont la class "title"
    const titles = $(".title");
    titles.hover(function () {
      // titles[0].style.color = "red";
    //   console.log(title);

    titles.css("color", "red");

    });
  });

  // Autre façon
		// for (let i = 0; i < titles.length; i++) {
		// 	titles[i].style.color = "red";
		// }
	});


  // Exemples avec countries
  $("#loadCountries").click(function () {
    $.ajax({
      url:"https://restcountries.com/v3.1/all",
      success: function (data) {
        // console.log(data);
        // data est un tableau d'objet
        // chaque objet est un pays
        data.forEach((country) => {
          // inserer un "p" a la fin du div
          // possedant l'id "countries-list"
          $("#countries-list").append(`<p> ${country.name.common} </p>`)
        })
      }
    });
  });
});
    
 

//V2
// $(function () {});
