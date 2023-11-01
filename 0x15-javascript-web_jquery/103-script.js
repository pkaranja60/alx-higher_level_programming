$(document).ready(function() {
    $('#btn_translate, #language_code').on('click keyup', function(e) {
      if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
        const languageCode = $('#language_code').val();
        const url = 'https://www.fourtonfish.com/hellosalut/hello/';
  
        $.get(url, { lang: languageCode }, function(data) {
          $('#hello').text(data.hello);
        });
      }
    });
  });
  