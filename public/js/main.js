$(document).ready(function() {
  var url = '/timestamp/';
  var search = $("#search").keyup(function() {
    var value = encodeURIComponent($(this).val());
    $('#link').attr('href', url + value);
  });
});
