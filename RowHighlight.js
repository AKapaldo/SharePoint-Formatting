$(document).ready(function(){
$Text = $("td .ms-vb2:contains('Not Started')");
$Text.parent().css("background-color", "#E2E2E2");
var myelement = $Text.parent().parent();
$Text = $("td .ms-vb2:contains('Completed')");
$Text.parent().css("background-color", "#3366FF");
$Text = $("td .ms-vb2:contains('On Schedule')");
$Text.parent().css("background-color", "#82FF7E");
$Text = $("td .ms-vb2:contains('Behind Schedule')");
$Text.parent().css("background-color", "#FF6969");
$Text = $("td .ms-vb2:contains('Delayed')");
$Text.parent().css("background-color", "#FFF669");
});
