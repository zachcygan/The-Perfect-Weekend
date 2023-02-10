// Right side search bar with filter
$(".default_option").click(function(){
    $(".dropdown1 ul").addClass("active");
  });
  
  $(".dropdown1 ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown1 ul").removeClass("active");
  });