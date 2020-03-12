$(function() {
  console.log("working");
  $(".dropbtn").on("change", function() {
    console.log("function");
    let userInput = $("select").val();
    // console.log(userInput);

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${userInput}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function({ results }) {
      $.each(results, function(index, value) {
        // Max-listing
        if (index === 12) return false;

        // console.log(results);
        // console.log(value);
        // console.log(userInput);

        // ! Check your work !
        // hasOwnProperty returns a boolean value indicating
        //  whether the object has a property with the name of the argument.
        // if (value.multimedia) {
        //   let length = value.multimedia.length;
        //   //   console.log("length: ", length);
        // }

        //Variables
        let articleImage = value.multimedia[0].url;
        let url = value.url;
        let description = value.abstract;

        console.log(articleImage);
        console.log(url);
        console.log(description);

        //Display articles
        $(".main-content").append(`
                <figure class="article-image">
                    <img src="${articleImage}">
                    <a href="${url}" target="new"><p class="article-text">${description}</p></a>
                </figure>`);
      });
      $(".dropbtn").on("change", function() {
        $(".main-content").empty();
      });
    });
  });
});
