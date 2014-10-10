$(document).ready(function() {
  $("input").focus(function() {
    $(this).css("background-color", "#D1D1C3").val(" ");
  });
  $("input").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      var add = $("input").val();
      $('<li>' + add + '</li>').appendTo("ul").addClass("item");
    };
  });
  $("input").keyup(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $(this).css("background-color", "#FFFFEB"),
      $(this).val(" ");
    };
  });
  $("input").blur(function() {
    $(this).css("background-color", "#FFFFEB").val("Add new item");
  });
  $("ul").on("click", "li", function() {
    $(this).toggleClass("item-clicked");
  });
});

$(document).ready(function() {
  $(".reset").click(function() {
    $("li").slideUp("slow");
  });
});


//I think I should make the element of the list items
//ul, then I can go back and do a .find() on ul and
//hide or delete them when reset is clicked.  IDK.
// $(".reset").click(function() {
  //$("ul").hide(); or something
