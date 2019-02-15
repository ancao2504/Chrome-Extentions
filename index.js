chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var audio = new Audio('music/translate-an-cao.mp3');
    audio.play();
  },
  {
    urls: ["https://www.facebook.com/ajax/mercury/delivery_receipts.php*"]
  });
