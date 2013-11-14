/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 https://raw.github.com/scottjehl/iOS-Orientationchange-Fix/master/ios-orientationchange-fix.js
 MIT / GPLv2 License.
*/
(function(w){

  // This fix addresses an iOS bug, so return early if the UA claims it's something else.
  var ua = navigator.userAgent;
  if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
    return;
  }

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
    x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }

    function checkTilt( e ){
    aig = e.accelerationIncludingGravity;
    x = Math.abs( aig.x );
    y = Math.abs( aig.y );
    z = Math.abs( aig.z );

    // If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
      if( enabled ){
        disableZoom();
      }
        }
    else if( !enabled ){
      restoreZoom();
        }
    }

  w.addEventListener( "orientationchange", restoreZoom, false );
  w.addEventListener( "devicemotion", checkTilt, false );

})( this );







var s,
Doomazon = {

  settings : {
    siteUrl: "'http://'+(document.location.hostname||document.location.host)",
    quotes: [
      "When working with Amazon, always double your hours.",
      "When working with Amazon, only shed one tear when the stylesheet breaks.",
      "When working in Amazon, back up everything so you can have the feeling of safety even when your backups dont work.",
      "Don't let them get to your head.",
      "So close yet so far.",
      "The new hazing for PMs.",
      "When all else fails you, Amazon already did.",
      "Creating insecurity in good developers everywhere.",
      "At least you wasted all your money and can't buy a new and better solution.",
      "Not even devs in India touch the shit.",
      "Stealing your soul and your dollars, one day at a time.",
      "Sleeps for you.",
      "If Amazon can't do it... everyone else probably already did.",
      "Meth would be a better solution.",
      "Amawon't.",
      "Holding e-commerce back since 1995.",
      "Wut",
      "WWAD - What Wouldn't Amazon Do",
      "Doomazon don't care! Haters gonna hate!",
      "One year with Amazon will take 10 years off your life.",
      "Sorry [client], Amazon doesn't do that."
      ]
  },

  init: function () {
    s = this.settings;

    this.setQuote();
    this.triggerAbout();
  },

  setQuote: function () {
    var data = s.quotes;
    var entry = data[Math.floor(Math.random()*data.length)];
    var quoteContainer = $('.damnTrueStatement');

    quoteContainer.html(entry);
  },

  triggerAbout: function() {
    var $wrapper = $('.youKnowYouWantMe');
    $wrapper.on('click', '.info', function( event ) {
      $wrapper.toggleClass('is_open');
      return false;
    });
  }

};


$(function () {
  Doomazon.init();
});
