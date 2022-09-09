customer = {
  adresses:function(){
    var select = $('[name="address[country]"]');
    select.each(function(){
      var def = $(this).attr('data-default');
      $(this).val(def);
    });
    
    $('[data-delete-address]').click(function(e){
      e.preventDefault();
      Shopify.CustomerAddress.destroy($(this).attr('data-delete-address'), '');
    });
    
    $('[data-id]').click(function(e){
      e.preventDefault();
      $('.js-adress_block').hide().filter('[data-address="'+$(this).attr('data-id')+'"]').show();
    });
    
    $('[data-address="cancel"]').click(function(e){
      e.preventDefault();
      $('.js-adress_block').hide().filter('[data-address="new"]').show();
    });
  }
};

$(function(){
  FastClick.attach(document.body);
});

