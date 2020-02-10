$(function() {
    $(".content").on("change", function(e) {
   let section = $(".content option:selected").text()
   
   $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function(data) {
      console.log(data);
      })
    });
      
  });