// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-movie").on("click", function() {
    var id = $(this).data("id");
    var newFavorite = $(this).data("newFavorite");

    var newMovieState = {
      favorite: newFavorite
    };

    // Send the PUT request.
    $.ajax("/api/movies/" + id, {
      type: "PUT",
      data: newMovieState
    }).then(function() {
      console.log("changed movie to", newFavorite);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newMovie = {
      title: $("#newmovie")
        .val()
        .trim(),
      list: $("[name=wantToWatch]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/movies", {
      type: "POST",
      data: newMovie
    }).then(function() {
      console.log("Added Movie to List");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-movie").on("click", function() {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/movies/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted Movie", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
