/**
 * Created by Pol on 2015-12-31.
 */
console.log('test');

$(document).ready(function() {
    // check input
    inputValue();
    // button ready for click
    $('.buttonRandom').click(function(){
        console.log('click');
        var search = $('#search');
        var searchValue = search.val();
        var autocomplete = $('.autocomplete');
        // search wiki and generate page
        getWiki(searchValue);
        // clear input and hide autcomplete
        search.val("");
        autocomplete.fadeOut();
    });
});





function inputValue () {
    // input check val on keyUp, check Enter
    $("#search").keyup(function(e){
       var searchValue = $(this).val();
       // check length of input if less <0 hide autocomplete
       if (searchValue.length > 0) {
           $('.autocomplete').fadeIn();
       } else {
           $('.autocomplete').fadeOut();
       }
       // active autocomplete search, show autocomplete tips
       autocompleteWiki(searchValue);
       // if enter in input do click on button
       if(e.keyCode == 13)
       {
           $('.buttonRandom').click();
       }

    });

}

// generator of search links
function getLinkHelper (searchValue) {
    console.log("---------------- data");
    var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchValue + "&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&limit=10&namespace=0&format=json&callback=?";
    console.log(link);
    return link;
}

// getjson for autocomplete
function autocompleteWiki(searchValue) {
    $.getJSON(getLinkHelper(searchValue), autocomplete);
 }

// getjson for wiki
function getWiki(searchValue) {
    $.getJSON(getLinkHelper(searchValue), showWiki);
}

//generete autocomplete after keyup in input
function autocomplete (dataWiki)  {
    var title =  dataWiki[1];
    var autocomplete = $('.autocomplete');
    var page = "";
    $.each(title, function( index, value ) {
        page = page + '<a class="wikiLink" href="'+dataWiki[3][index]+'">'+
            value+ '</a><br/>';
    });
    autocomplete.html(page);
}

// generete search after click or enter
function showWiki (dataWiki) {
    var title =  dataWiki[1];
    var show = $('#wikiShow');
    var page = "";
    $.each(title, function( index, value ) {
        page = page + '<a class="wikiLink" href="'+dataWiki[3][index]+'">'+
                '<div class="panel panel-default">' +
            '<div class="panel-heading">'+ value +'</div>'+
            '<div class="panel-body">'+ dataWiki[2][index] + '</div>'
            +'</div>' +'</a>';
    });
    show.html(page);
}

