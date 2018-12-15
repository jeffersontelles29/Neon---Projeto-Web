$("body").scrollspy({ target: "#navbar-responsive" });

// add link scroll
$("#navbar-responsive a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
  }

  let hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    800,
    function() {
      window.location.hash = hash;
    }
  );
});
