var inTheatersQuery = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c81ffb7ed9813dd7f5aa841a64da8416" 

var apiKey = "api_key=c81ffb7ed9813dd7f5aa841a64da8416"

$.ajax({
  url: inTheatersQuery,
  method: 'GET'
}).then(res=>{
  console.log(res)
})