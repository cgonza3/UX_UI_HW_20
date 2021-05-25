console.log("Your index.js file is loaded correctly");

$(".icons1").on("click", function(){
    $(".icons1").toggleClass("active");
    if ($(".icons1").hasClass("active")) {
      $(".searchBar").css("height", "100vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
  });
  
  $(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });
   
  function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);


