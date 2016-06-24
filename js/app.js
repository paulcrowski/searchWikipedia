/**
 * Created by Pol on 2015-12-31.
 */
console.log('test');

$(document).ready(function() {
    inputValue();
//    buttonSearch();
});


function inputValue () {
    // input check val on keyUp, check Enter
    $("#search").keyup(function(e){
       var searchValue = $(this).val();
       $('#valueShow').html(searchValue);
       getWiki(searchValue);
       if(e.keyCode == 13)
       {
           alert('enter');
       }
    });

}

function getWiki(searchValue) {
    // get wiki data
    console.log("---------------- data");
    var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchValue + "&limit=10&namespace=0&format=json&callback=?";
    console.log(link);
    // autocomplete
    $.getJSON(link, showWiki);

}

function showWiki (dataWiki) {
    var test =  dataWiki[1];
    console.log(test);
    //$('#wikiShow').html(test);
}

//function randomIntFromInterval(min,max) {
//    return Math.floor(Math.random()*(max-min+1)+min);
//}

function buttonSearch () {
    // button for click WIki Search
    $('.buttonRandom').click(function(){
        console.log('click');
        var searchValue = $('#search').val();

    });
}