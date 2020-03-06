$(function(){
  
    $("#select").on("change", function() {
        let userInput = $("#select").val();
    console.log(userInput);
    $.ajax({
        dataType: "json",
        method: "GET",
        url: `https://api.nytimes.com/svc/topstories/v2/${userInput}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`,

            }).done(function ({results}){
                 //Max listing
    
                // console.log(results)
                $.each(results, function(index, value) {
                    if (index === 12) return false;
                    // console.log (index,value)
                    console.log (value)
                    // console.log (userInput)


                     
                    // hasOwnProperty returns a boolean value indicating whether the object has a property with the name of the argument. 
                if(value.multimedia){
                    let length = value.multimedia.length
                    console.log("length: ", length)
                }

                    //Variables
                    let articleImage = value.multimedia[0].url
                    let url = value.url
                    let description = value.abstract
              
                    // console.log(articleImage)
                    // console.log(url)
                    // console.log(description);
               
                   
                   
                   

                    //Display articles 

                    $('.main-content').append(`
                    <figure class="articleImage">
                        <img src="${articleImage}">
                        <a href="${url}" target="new">
                            <p class="article-text">${description}<p>
                        </a>
                    </figure>`);


                          
                
            })
        })

  
      })
});
