$(window).on('load', function() {

  var $widget = $('iframe.twitter-timeline');
  var $widgetContents = $widget.contents();
  $widgetContents.find('head').append('<link href="../css/SNS.css" rel="stylesheet" type="text/css">');

});
