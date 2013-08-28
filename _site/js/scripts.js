var s,
Doomazon = {

  settings : {
    siteUrl: "'http://'+(document.location.hostname||document.location.host)",
    pagination: {
      prev: $('.pagination.prev'),
      next: $('.pagination.next')
    }

  },

  init: function () {
    s = this.settings;

    //this.anchorLinks();
  },

  //setBackgroundColor: function () {
    //var items = ['#E97F02', '#F8CA00', '#8A9B0F'];
    //var item = items[Math.floor(Math.random()*items.length)];

    //$('html').css('background-color', item);
  //}



};


$(function () {
  Doomazon.init();
});
