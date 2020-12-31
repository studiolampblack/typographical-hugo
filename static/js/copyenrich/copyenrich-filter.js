/**
*
* Default filter to prepend and append Text.
*
*/
(function( window ) {

// create filter for prefix and postfix
window.filter_prefix_postfix = function( selection ) {

// load filter configuration
var copyenrich = window.copyenrich || {};
var clipboard_prefix = copyenrich.filter_prefix || '';
var clipboard_postfix = copyenrich.filter_postfix || '';

return clipboard_prefix + selection + clipboard_postfix;
};

})( window );

/**
*
* Minimal length required to perform text enrichment.
* If the minimum length is not reached, function will return FALSE
* which results in cancelation of all changes made and return the
* originally selected text.
*
*/
(function( window ) {

window.filter_minlength = function( selection ) {

// load filter configuration
var copyenrich = window.copyenrich || {};
var minlength = copyenrich.filter_minlength || 20;

if ( selection.length < minlength ) {
// Boolean FALSE means that no changes will be done at all.
return false;
};

return selection;
};

})( window );

/**
*
* User defined filters. They can be loaded from external file.
*
*/
(function( window ) {

window.filter_source_url = function( selection ) {

// load filter configuration
var copyenrich = window.copyenrich || {};
var postfix = copyenrich.filter_source_url || '';

return selection + postfix + location.href;
};

})( window );

/**
*
* Tracks the copied text with Google Analytics.
*
*/
(function( window ) {

window._gaq = window._gaq || [];
window.filter_analytics = function( selection ) {
// load filter configuration
var copyenrich = window.copyenrich || {};
var track_name = copyenrich.filter_analytics_name;
var track_value = copyenrich.filter_analytics_value;

window._gaq.push(['_trackEvent', track_name, track_value, selection]);
// return selection without modification
return selection;
};

})( window );

/**
*
* Inserts an Ad to the selection if certain words have been selected.
* Context based Ad insetion.
*
*/
(function( window ) {

window.filter_wordmatch_ad = function( selection ) {

// load filter configuration
var copyenrich = window.copyenrich || {};
// if these words are inside the selection, AdText will be inserted
var signal_words = copyenrich.filter_wordmatch_ad_signal_words || [ ];
var ad_text = copyenrich.filter_wordmatch_ad || '';

// try to match words inside selected text
var word = '';
var word_match = false;

var split = selection.split( ' ' );
for( var w = 0; w < split.length; w++ ) {
word = split[w].trim( ).replace( /[\.,\-;:\n\r]+/gi, '' );

for( var sw = 0; sw < signal_words.length; sw++ ) {
if ( signal_words[sw] == word ) {
word_match = true;
}
}

if ( word_match === true ) {
return selection + ad_text;
}
}

return selection;
};

})( window );

/**
*
* Enables script if at least one keyword is inside the selected text.
*
*/
(function( window ) {

window.filter_wordmatch_enabled = function( selection ) {

// load filter configuration
var copyenrich = window.copyenrich || {};
// if these words are inside the selection, script will be enabled
var signal_words = copyenrich.filter_wordmatch_enabled_signal_words || [ ];

// try to match words inside selected text
var word = '';
var word_match = false;

var split = selection.split( ' ' );
for( var w = 0; w < split.length; w++ ) {
word = split[w].trim( ).replace( /[\.,\-;:\n\r]+/gi, '' );

for( var sw = 0; sw < signal_words.length; sw++ ) {
if ( signal_words[sw] == word ) {
word_match = true;
}
}
}

// if signal words not found, disable all changes made by the script
if ( word_match !== true ) {
// Boolean FALSE means that no changes will be done at all.
return false;
}

return selection;
};

})( window );
