$(function(){
  
    $(".dropbtn").on("change", function() {
   let userInput = $("select").val()

   console.log(userInput)
    
   $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${userInput}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
        
        }).done(function ({results}){
            $.each(results, function(index, value) {
                // console.log (index,value)
                // console.log (value)
            
                //Remove previous articles
                // $('.drop-drown').on("change", function() {
                //     $('.main-content').empty()
                // })
                
                //Variables
                let articleImage = value.multimedia[3].url
                let url = value.url
                let description = value.abstract
                console.log(articleImage)
                console.log(url)
                console.log(description);

                //Max listing
                if (index === 12) return false;
                
                //Display articles 

                $('.main-content').append(`
                <figure class="articleImage">
                    <img src="${articleImage}">
                    <a href="${url}" target="new">
                    <p class="article-text">${description}<p></a>
                </figure>`);

                })
            })

  
      })
});

// article image = multimedia 