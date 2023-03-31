0;
// $("h1").css("color", "red");
$("button").css("color", "red");
$("h1").addClass("large");
// $("button").html("<h1>don't click</h1>");
$(document.documentElement).keydown((event) => {
  // console.log(document.documentElement);
  $("h1").text(event.key);
});

$("button").on("click", () => {
  $("h1").slideToggle();
});
