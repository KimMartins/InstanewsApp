$(function() {
  $(".dropbtn").on("change", function() {
    let userInput = $("select").val();

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${userInput}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function({ results }) {
      $.each(results, function(index, value) {
        // Max-listing
        if (index === 12) return false;

        //Variables
        let articleImage = value.multimedia[0].url;
        let url = value.url;
        let description = value.abstract;

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
