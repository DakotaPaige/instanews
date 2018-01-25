$(function() {
  console.log('this is working');
  // Built by LucyBot. www.lucybot.com
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  url += '?' + $.param({
    'api-key': "e92ad80f358b449e91cfa8a9d72efaf3"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });
})