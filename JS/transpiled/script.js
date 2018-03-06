'use strict';

$(function () {

  //function to change the populated stories upon user change of select menu
  $('#news_type').change(function () {
    var selectedSection = $('#news_type option:selected').val();
    $('section').addClass('section-change');
    var url = '';
    $('.loading-gif').show();
    url += 'https://api.nytimes.com/svc/topstories/v2/';
    url += selectedSection;
    url += '.json';

    $('ul').children().remove();
    // Built by LucyBot. www.lucybot.com
    url += '?' + $.param({
      'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
    });
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function (data) {
      var results = data.results;
      var imageListLength = 0;
      //iterates through each key value, grabs the description, prints it to the console and stops when it hits 12
      $.each(results, function (key, value) {
        var multimedia = value.multimedia;
        if (multimedia.length === 0) {
          return;
        }
        var description = value.abstract;
        var articleURL = value.url;

        //iterates through each key value only in multimedia and grabs only the SuperJumbo image and puts it in imageURL
        $.each(multimedia, function (key, value) {
          if (value.format === 'superJumbo') {
            var imageURL = value.url;
            var listItem = '<li><a href = "' + articleURL + '" target="_blank"><img src = "' + imageURL + '"><p>' + description + '</p></a></li>';
            $('ul').append(listItem);
          } else {
            return;
          }
        });

        imageListLength++;
        $('footer').addClass('loaded-footer');
        //ends the each function when the imageListLength equals 12
        return imageListLength !== 12;
      });
      $('.loading-gif').hide();
    }).fail(function (err) {
      var errorMessage = '<p>Sorry! There was a problem, please try again.</p>';
      $('.loading-gif').append(errorMessage);
      throw err;
    });
  });
});