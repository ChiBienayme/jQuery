$("button").click(function () {
   
        $.ajax({
            url:"https://restcountries.com/v3.1/name",
            success: function (data) {

                $("input").val();

              data.forEach((country) => {
                
                $("#country").html(`${country.name.common}`);
                $("#capital").html(`${country.capital}`);
              })
            }
          })
    
    
  });

