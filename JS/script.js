$(function() {
  
  $ ('#news_type').change(function() {
    var selectedSection = $('#news_type option:selected').val();
    $('section').addClass('section-change');
    var url = '';
    $('.loading-gif').show();

    //HOME SECTION
    if (selectedSection === 'home') {
      $('ul').children().remove();
      // Built by LucyBot. www.lucybot.com
      url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
      url += '?' + $.param({
        'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(data) {
        var results = data.results;
        var imageListLength = 0;
        //iterates through each key value, grabs the description, prints it to the console and stops when it hits 12
        $.each(results, function(key,value) {
          var multimedia = value.multimedia;
          if (multimedia.length === 0) {
            return
          }
          var description = value.abstract;
          var articleURL = value.url;

          //iterates through each key value only in multimedia and grabs only the SuperJumbo image and puts it in imageURL
          $.each(multimedia, function(key,value) {
            if (value.format === 'superJumbo') {
              var imageURL = value.url;
              var listItem = '';
              listItem+='<li>';
              listItem+='<a href = "'
              listItem+=articleURL;
              listItem+='" target="_blank">'
              listItem+='<img src = "'
              listItem+=imageURL;
              listItem+='">';
              listItem+='<p>';
              listItem+=description;
              listItem+='</p></a></li>'
              $('ul').append(listItem);
            }
            else {
              return
            }
            

          })

          imageListLength++;
          $('footer').addClass('loaded-footer');
          //ends the each function when the imageListLength equals 12
          return (imageListLength !== 12)
        })
        $('.loading-gif').hide();

      }).fail(function(err) {
        throw err;
      });
    }

    //ARTS SECTION
    else if (selectedSection === 'arts') {
      $('ul').children().remove();
      url = 'https://api.nytimes.com/svc/topstories/v2/arts.json';
      url += '?' + $.param({
        'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(data) {
        var results = data.results;
        var imageListLength = 0;
        $.each(results, function(key, value) {
          var multimedia = value.multimedia;
          if (multimedia.length === 0) {
            return
          }
          var description = value.abstract;
          var articleURL = value.url;

          $.each(multimedia, function(key, value) {
            if (value.format === 'superJumbo') {
              var imageURL = value.url;
              var listItem = '';
              listItem+='<li>';
              listItem+='<a href = "'
              listItem+=articleURL;
              listItem+='" target="_blank">'
              listItem+='<img src = "'
              listItem+=imageURL;
              listItem+='">';
              listItem+='<p>';
              listItem+=description;
              listItem+='</p></a></li>'
              $('ul').append(listItem);
            }
            else {
              return
            }

          })

          imageListLength++;
          $('footer').addClass('loaded-footer');
          return (imageListLength !== 12);
        })

        $('.loading-gif').hide();

      }).fail(function(err) {
        throw err;
      });
    }

    //BUSINESS SECTION
    else if (selectedSection === 'business') {
      $('ul').children().remove();
      url = 'https://api.nytimes.com/svc/topstories/v2/business.json';
      url += '?' + $.param({
        'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(data) {
        var results = data.results;
        var imageListLength = 0;

        $.each(results, function(key, value) {
          var multimedia = value.multimedia;
          if (multimedia.length === 0) {
            return
          }
          var description = value.abstract;
          var articleURL = value.url;

          $.each(multimedia, function(key, value) {
            if (value.format === 'superJumbo') {
              var imageURL = value.url;
              var listItem = '';
              listItem+='<li>';
              listItem+='<a href = "'
              listItem+=articleURL;
              listItem+='" target="_blank">'
              listItem+='<img src = "'
              listItem+=imageURL;
              listItem+='">';
              listItem+='<p>';
              listItem+=description;
              listItem+='</p></a></li>'
              $('ul').append(listItem);
            }
            else {
              return
            }
          })

          imageListLength++;
          $('footer').addClass('loaded-footer');
          return (imageListLength !== 12);
        })

        $('.loading-gif').hide();

      }).fail(function(err) {
        throw err;
      });
    }

    //SPORTS SECTION
    else if (selectedSection === 'sports') {
      $('ul').children().remove();
      url = 'https://api.nytimes.com/svc/topstories/v2/sports.json';
      url += '?' + $.param({
        'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(data) {
        var results = data.results;
        var imageListLength = 0;

        $.each(results, function(key,value) {
          var multimedia = value.multimedia;
          if (multimedia.length === 0) {
            return
          }
          var description = value.abstract;
          var articleURL = value.url;

          $.each(multimedia, function(key, value) {
            if (value.format === 'superJumbo') {
              var imageURL = value.url;
              var listItem = '';
              listItem+='<li>';
              listItem+='<a href = "'
              listItem+=articleURL;
              listItem+='" target="_blank">'
              listItem+='<img src = "'
              listItem+=imageURL;
              listItem+='">';
              listItem+='<p>';
              listItem+=description;
              listItem+='</p></a></li>'
              $('ul').append(listItem);
            }
            else {
              return
            }
          })
          imageListLength++;
          $('footer').addClass('loaded-footer');
          return (imageListLength !== 12);
        })

        $('.loading-gif').hide();


      }).fail(function(err) {
        throw err;
      });
    }

    //TECHNOLOGY SECTION
    else if (selectedSection === 'technology') {
      $('ul').children().remove();
      url = 'https://api.nytimes.com/svc/topstories/v2/technology.json';
      url += '?' + $.param({
        'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(data) {
        var results = data.results;
        var imageListLength = 0;

        $.each(results, function(key, value) {
          var multimedia = value.multimedia;
          if (multimedia.length === 0){
            return
          }
          
          var description = value.abstract;
          var articleURL = value.url;

          $.each(multimedia, function(key, value) {
            if (value.format === 'superJumbo') {
              var imageURL = value.url;
              var listItem = '';
              listItem+='<li>';
              listItem+='<a href = "'
              listItem+=articleURL;
              listItem+='" target="_blank">'
              listItem+='<img src = "'
              listItem+=imageURL;
              listItem+='">';
              listItem+='<p>';
              listItem+=description;
              listItem+='</p></a></li>'
              $('ul').append(listItem);
            }
            else {
              return
            }
          })
          imageListLength++;
          $('footer').addClass('loaded-footer');
          return (imageListLength !== 12);
        })

        $('.loading-gif').hide();


      }).fail(function(err) {
        throw err;
      });
    }

    //FASHION SECTION
    else if (selectedSection === 'fashion') {
      $('ul').children().remove();
      url = 'https://api.nytimes.com/svc/topstories/v2/fashion.json';
      url += '?' + $.param({
        'api-key': 'e92ad80f358b449e91cfa8a9d72efaf3'
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(data) {
        var results = data.results;
        var imageListLength = 0;

        $.each(results, function(key, value) {
          var multimedia = value.multimedia;
          if (multimedia.length === 0) {
            return
          }
          var description = value.abstract;
          var articleURL = value.url;

          $.each(multimedia, function(key, value) {
            if (value.format === 'superJumbo') {
              var imageURL = value.url;
              var listItem = '';
              listItem+='<li>';
              listItem+='<a href = "'
              listItem+=articleURL;
              listItem+='" target="_blank">'
              listItem+='<img src = "'
              listItem+=imageURL;
              listItem+='">';
              listItem+='<p>';
              listItem+=description;
              listItem+='</p></a></li>'
              $('ul').append(listItem);
            }
            else {
              return
            }
          })
          imageListLength++;
          $('footer').addClass('loaded-footer');
          return (imageListLength !== 12);
        })

        $('.loading-gif').hide();


      }).fail(function(err) {
        throw err;
      });
    }
  })

 

  
})