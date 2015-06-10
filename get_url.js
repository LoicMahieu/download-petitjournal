var webPage = require('webpage');
var page = webPage.create();

page.settings.userAgent = 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

var homeURL = 'http://www.canalplus.fr/c-emissions/c-le-petit-journal/pid6515-le-petit-journal.html';

page.open(homeURL, function () {
  page.evaluate(function () {
    $('.canal-player-poster-image-play-button').trigger('click');
  });

  setTimeout(function () {
    var data = page.evaluate(function () {
      return $('video').attr('src');
    });

    console.log(data);
    phantom.exit();
  }, 1000);
});
