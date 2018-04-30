(function(jQuery){
  function init() {
    jQuery('[id*="addToCart"]').click(function () {
      gtag('event', 'conversion', {
        'event_category': 'AddToCart',
      });
    });
  }

  jQuery(document).ready(function(){
    init();
  });
})(jQuery);
