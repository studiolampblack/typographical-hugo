/**
// Copyright (c) 2014 AKM3 GmbH
// http://www.akm3.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
*/
(function( d, w ) {

// Version
w.version = '1.4';

// preparing filter array where filter calbacks are stored
w.copyenrichFilters = w.copyenrichFilters || [];

// register "copy" event
if ( w.addEventListener ) {
d.body.addEventListener( "copy", intercept_clipboard, true );
}

/**
* Creates helper element, copies selected and modified text inthere
* and creates new selection with the new text.
*/
function intercept_clipboard( ) {

var clipboard_text = get_selection( );
var modified_clipboard_text = clipboard_text;

// Running filters on selection. Here all changes of the selected text are done.
// To stop filtering and restore original selection, any filter
// may return (boolean) FALSE.

if ( w.copyenrichFilters.length > 0 ) {
// running filters
for( var f = 0; f < w.copyenrichFilters.length; f++ ) {
try {
modified_clipboard_text = w.copyenrichFilters[f][0]( modified_clipboard_text );
console.log( 'Copyenrich executing filter: ' + f );
// breaking condition: returning (bool) FALSE means that no changes should be done at all
if ( modified_clipboard_text === false ) {
// Remove helper element
w.setTimeout( hide_clipboard_interceptor, 200 );
console.log( 'Copyenrich: filter triggered reset. No changes done.' );
// terminate here, undo all changes. filter told us to do so.
return;
}

} catch ( err ) {
console.log( '! Copyenrich filter caused an error. Current filter was: ' + w.copyenrichFilters[f][0] );
}
}
}

// Creates helper element outside the view
var top = ( w.pageYOffset || d.scrollTop );
var div = d.createElement( 'span' );
div.id = 'clipboard_interceptor';
div.style.position = 'absolute';
div.style.top = ( typeof top == 'undefined' ? 0 : top ) + 'px';
div.style.left = '-300px';
div.style.overflow = 'hidden';
div.style.width = '100px';
div.style.height = '100px';
d.body.appendChild( div );

// Modifies clipboard text and preselects it to be copied
if ( navigator.userAgent.indexOf( 'Firefox' ) > 0 ) {
div.innerHTML = modified_clipboard_text.replace( /\n/g, '<br>' );
} else {
// Creates textarea to store clipboard text
var textarea = d.createElement( 'textarea' );
div.appendChild( textarea );

textarea.innerHTML = modified_clipboard_text;
}

// Selects modified hidden text to be copied instead of original selection
if ( navigator.userAgent.indexOf( 'Firefox' ) > 0 ) {
var sel = w.getSelection( );
if( sel.rangeCount > 0 ) sel.removeAllRanges( );
var range = d.createRange( );
range.selectNode( div );
sel.addRange( range );
} else {
textarea.select( );
}
console.log( 'Copyenrich: done.' );
// Remove helper element
w.setTimeout( hide_clipboard_interceptor, 200 );
}

/**
* Gets selected Text
*/
function get_selection( ) {

var sel = w.getSelection( );
var selected_text = sel.toString( );

return selected_text;
}

/**
* Removes helper element
*/
function hide_clipboard_interceptor() {
var c = d.getElementById( 'clipboard_interceptor' );
c && c.parentNode.removeChild( c );
}

})( document, window );
