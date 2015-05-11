window.onload = function() {
  var as = document.querySelectorAll("a");
  for (var i = 0; i < as.length; i++) {
    if (as[i].href) {
      console.log(as[i]);
      (function(href) {
      as[i].addEventListener("click",function(event) {
        event = event || window.event;
        event.preventDefault();
        history.pushState({}, null, href);
      });})(as[i].href);
    }
  }
};
