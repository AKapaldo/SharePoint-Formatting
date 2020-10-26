$(document).ready(function(){
$Text = $("td .ms-vb2:contains('Not Started')");
$Text.css("background-color", "#E2E2E2");
var myelement = $Text.parent().parent();
$Text = $("td .ms-vb2:contains('Completed')");
$Text.css("background-color", "#3366FF");
$Text = $("td .ms-vb2:contains('On Schedule')");
$Text.css("background-color", "#82FF7E");
$Text = $("td .ms-vb2:contains('Behind Schedule')");
$Text.css("background-color", "#FF6969");
$Text = $("td .ms-vb2:contains('Delayed')");
$Text.css("background-color", "#FFF669");
});
