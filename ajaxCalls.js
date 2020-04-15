var currentDate = moment().format('YYYY-MM-DD')
console.log(currentDate)

var inTheatersQuery = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=" + currentDate + "&api_key=c81ffb7ed9813dd7f5aa841a64da8416" 

var individualMovie = "https://api.themoviedb.org/3/search/movie?api_key=c81ffb7ed9813dd7f5aa841a64da8416`&query=Jack+Reacher"

var popularQuery = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c81ffb7ed9813dd7f5aa841a64da8416"

var apiKey = "api_key=c81ffb7ed9813dd7f5aa841a64da8416"


function threePopularMovies(){ 
  $.ajax({
    url: popularQuery,
    method: 'GET'
  }) .then(function(res){

    function genres(){
      if(res.results[i].genre_ids == 28){
        return "Action"
      } 
      else if(res.results[i].genre_ids == 12){
        return "Adventure"
      }
      else if(res.results[i].genre_ids == 16){
        return "Animation"
      }
      else if (res.results[i].genre_ids == 35){
        return "Comedy"
      }
      else if (res.results[i].genre_ids == 80){
        return "Crime"
      }
      else if (res.results[i].genre_ids == 99){
        return "Documentary"
      }
      else if (res.results[i].genre_ids == 18){
        return "Drama"
      }
      else if (res.results[i].genre_ids == 10751){
        return "Family"
      } 
      else if (res.results[i].genre_ids == 14){
        return "Fantasy "
      }
      else if (res.results[i].genre_ids == 36){
        return "History"
      }
      else if (res.results[i].genre_ids == 27){
        return "Horror"
      }
      else if (res.results[i].genre_ids ==10402){
        return "Music"
      }
      else if (res.results[i].genre_ids ==9648){
        return "Mystery"
      }
      else if (res.results[i].genre_ids == 10749){
        return "Romance"
      }
      else if (res.results[i].genre_ids == 878){
        return "Science Fiction"
      }
      else if (res.results[i].genre_ids == 10770){
        return "TV Movie"
      }
      else if (res.results[i].genre_ids == 53){
        return "Thriller"
      }
      else if (res.results[i].genre_ids == 10752){
        return "War"
      }
      else if (res.results[i].genre_ids == 37){
        return "Western"
      }
    
      }

    console.log(res)
    for (var i = 0; i < 3; i++){
      var imgURL = res.results[i].poster_path
      if (imgURL){
        imgURL = "https://image.tmdb.org/t/p/w500/" + imgURL
          var image =$('<img class="poster" alt= "Image Unavailable">').attr("src", imgURL);
          var movieDiv = $('<div class= "movie">');
          movieDiv.attr('data-title', res.results[i].title);
          movieDiv.append(image);
          var title= $('<h3 class="title">').append(res.results[i].title)

          var movieInfo = `<h3 class="title">${res.results[i].title}</h3>
          <h5 class="overview">${res.results[i].overview}</h5>
            <h5 class="releaseDate">${res.results[i].release_date}</h5>
               <h5 class="popularity">${res.results[i].popularity}</h5>
                  <h5 class="genre">${genres()}</h5>
                    <a href="https://www.themoviedb.org/movie/${res.results[i].id}${res.results[i].title}?language=en-US" target="_blank">Link to more info on ${res.results[i].title}</a>`
                $('#movie').append(movieDiv).append(movieInfo)

      }
    }
  })
}

function allPopularMovies(){
  $.ajax({
        url: popularQuery,
        method: 'GET'
      }) .then(function(res){
        console.log(res)
        for (var i = 0; i < res.results.length; i++){
          console.log(res.results[i])

          var imgURL = res.results[i].poster_path
          if (imgURL){
            imgURL = "https://image.tmdb.org/t/p/w500/" + imgURL
              var image =$('<img class="poster" alt= "Image Unavailable">').attr("src", imgURL);
              var movieDiv = $('<div class= "movie">');
              movieDiv.attr('data-title', res.results[i].title);
              movieDiv.append(image);
              var title= $('<h3 class="title">').append(res.results[i].title);
    
              var movieInfo = `<h3 class="title">${res.results[i].title}</h3>
              <h5 class="overview">${res.results[i].overview}</h5>
                <h5 class="releaseDate">${res.results[i].release_date}</h5>
                   <h5 class="popularity">${res.results[i].popularity}</h5>
                    <a href="https://www.themoviedb.org/movie/${res.results[i].id}${res.results[i].title}?language=en-US" target="_blank">Link to more info on ${res.results[i].title}</a>`
                    $('#movie').append(movieDiv).append(movieInfo)
      }
     }
  })
}

function threeOutNow(){
  $.ajax({
    url: inTheatersQuery,
    method: 'GET'
  })
  .then(function (res){
    console.log(res)
    
    for ( var i =0; i<4; i++){
      var imgURL = res.results[i].poster_path;
      if(imgURL){
        imgURL = "https://image.tmdb.org/t/p/w500/" + imgURL

        var image =$('<img class="poster" alt= "Image Unavailable">').attr("src", imgURL);

        var movieDiv = $('<div class= "movie">');

        movieDiv.attr('data-title', res.results[i].title);

        movieDiv.append(image);
      }
      
      var movieInfo = `<h3 class="title">${res.results[i].title}</h3>
      <h5 class="overview">${res.results[i].overview}</h5>
        <h5 class="releaseDate">${res.results[i].release_date}</h5>
           <h5 class="popularity">${res.results[i].popularity}</h5>
            <a href="https://www.themoviedb.org/movie/${res.results[i].id}${res.results[i].title}?language=en-US" target="_blank">Link to more info on ${res.results[i].title}</a>`

          $('#movie').append(movieDiv).append(movieInfo)
    }
  });
} 

function allOutNow(){
  $.ajax({
    url: inTheatersQuery,
    method: 'GET'
  })
  .then(function (res){
    console.log(res)
    
    for (var i =0; i<res.results.length; i++){
      var imgURL = res.results[i].poster_path;
      if(imgURL){
        imgURL = "https://image.tmdb.org/t/p/w500/" + imgURL

        var image =$('<img class="poster" alt= "Image Unavailable">').attr("src", imgURL);

        var movieDiv = $('<div class= "movie">');

        movieDiv.attr('data-title', res.results[i].title);

        movieDiv.append(image);
      
      
      var movieInfo = `<h3 class="title">${res.results[i].title}</h3>
      <h5 class="overview">${res.results[i].overview}</h5>
        <h5 class="releaseDate">${res.results[i].release_date}</h5>
           <h5 class="popularity">${res.results[i].popularity}</h5>
            <a href="https://www.themoviedb.org/movie/${res.results[i].id}${res.results[i].title}?language=en-US" target="_blank">Link to more info on ${res.results[i].title}</a>`

          $('#movie').append(movieDiv).append(movieInfo)
    }}
  });
} 

function searched(){
  $('.button').on("click",(event)=>{
    event.preventDefault()
  
    const searchedMovie = $('.searchBox').val().trim().split(" ").join("+")
  
    console.log(searchedMovie)
  
    $.ajax({
      url: "https://api.themoviedb.org/3/search/movie?api_key=c81ffb7ed9813dd7f5aa841a64da8416&query=" + searchedMovie,
      method: "GET"
    })
    .then(function(res){
      console.log(res)
    })
  
    })
} 
  
function genres(){
  if(res.results[i].genre_ids == 28){
    return "Action"
  } 
  else if(res.results[i].genre_ids == 12){
    return "Adventure"
  }
  else if(res.results[i].genre_ids == 16){
    return "Animation"
  }
  else if (res.results[i].genre_ids == 35){
    return "Comedy"
  }
  else if (res.results[i].genre_ids == 80){
    return "Crime"
  }
  else if (res.results[i].genre_ids == 99){
    return "Documentary"
  }
  else if (res.results[i].genre_ids == 18){
    return "Drama"
  }
  else if (res.results[i].genre_ids == 10751){
    return "Family"
  } 
  else if (res.results[i].genre_ids == 14){
    return "Fantasy "
  }
  else if (res.results[i].genre_ids == 36){
    return "History"
  }
  else if (res.results[i].genre_ids == 27){
    return "Horror"
  }
  else if (res.results[i].genre_ids ==10402){
    return "Music"
  }
  else if (res.results[i].genre_ids ==9648){
    return "Mystery"
  }
  else if (res.results[i].genre_ids == 10749){
    return "Romance"
  }
  else if (res.results[i].genre_ids == 878){
    return "Science Fiction"
  }
  else if (res.results[i].genre_ids == 10770){
    return "TV Movie"
  }
  else if (res.results[i].genre_ids == 53){
    return "Thriller"
  }
  else if (res.results[i].genre_ids == 10752){
    return "War"
  }
  else if (res.results[i].genre_ids == 37){
    return "Western"
  }

}
