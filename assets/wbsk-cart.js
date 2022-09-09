
(function($, window, undefined) {

  var defaults = {
    selectorPrefix: 'wbsk-cart'
  };

  function wbskCart(element, settings) {
    this.settings = $.extend({}, defaults, settings);
    this.removeCtrl = `.${this.settings.selectorPrefix}__remove-from-cart`;
    this.qtyCtrl = `.${this.settings.selectorPrefix}__item-qty`;
    this.atcForm = `.${this.settings.selectorPrefix}__atc-form`;
    this.wrapper = `.${this.settings.selectorPrefix}__wrapper`;
    this.cartTemplate = $(`.${this.settings.selectorPrefix}__cart-template`);
    this.count = $(`.${this.settings.selectorPrefix}__cart-count`);
    this.actions = `.${this.settings.selectorPrefix}__actions`;
    this.empty = `.${this.settings.selectorPrefix}__empty`;
    this.isUpdatingClass = `${this.settings.selectorPrefix}__is-updating`;

    this.bind();
    this.udpate();
  };

  wbskCart.prototype = {

    bind: function() {
      var _this = this;
      //atc event
      $(document).on('submit', this.atcForm, function(e) {
        e.preventDefault();
        _this.addToCart(this);
        return false;
      })
      //remove item
      $(document).on('click', this.removeCtrl, function(e) {
        e.preventDefault();
        _this.removeItem($(this));
      });
      //qty change event
      $(document).on('change', this.qtyCtrl, function(e) {
        e.preventDefault();
        //_this.updateQty($(this));
      });
    },

    addToCart:function(form){
      var _this = this, 
          data = $(form).serialize()
      _this.fetchHandler(`/cart/add.js?${data}`).then(function(result){
        return result.json();
      }).then(function(cart){
        _this.udpate().then(function(){
          var sidebar = $('.js-wbsk-sidebar-cart').data('wbskSideBar');
          //sidebar.open();
        });
      }).catch(function(error){
        console.log(error);
      });
    },

    udpate:function(){
      var _this = this,
          url = _this.settings.cartFetchUrl;
      return new Promise(function(resolve,reject){
        _this.cartTemplate.addClass(_this.isUpdatingClass);
        _this.fetchHandler(url).then(function(result){
          console.log(1);
          return result.text();
        }).then(function(html){    
          _this.cartTemplate.html(html);
          _this.cartTemplate.removeClass(_this.isUpdatingClass);
          _this.updateCount();
          resolve();
        });
      });
    },
    
    removeItem:function($item){
      var _this = this;
      _this.cartTemplate.addClass(_this.isUpdatingClass);
      _this.fetchHandler($item.attr('href')).then(function(res){
        _this.udpate();
      });
    },

    fetchHandler:function(url){
      return new Promise(function(resolve,reject){
        fetch(url,{credentials: 'same-origin'}).then(function(result){
          resolve(result);
        }).catch(function(error){
          reject(error);
        });
      });
    },

    updateCount:function(){
      var _this = this;
      fetch('/cart.js',{credentials: 'same-origin'}).then(function(result){
        return result.json();
      }).then(function(data){
        _this.count.text(data.item_count);
        _this.count.parent()[0].style.display = data.item_count ? 'inline-block' : 'none';
      });
    }
  };

  $.fn.wbskCart = function(settings) {
    $.data(window, 'wbskCart', new wbskCart(this,settings));
  }

}(jQuery, window));


window.SLIDECART_UPDATED = function(cart) {
  console.log('SLIDECART_UPDATED');
  $.getJSON("/cart.js", function (results) {
    $('.mh__cart-icon .wbsk-cart__cart-count').html(results.item_count);
    console.log(results.item_count);
    if(results.item_count > 0){
      $('.mh__cart-icon').addClass('has_item');
      $('.mh__cart-icon .mh__cart-counter').css('display','inline-block');
    }else{
      $('.mh__cart-icon .mh__cart-counter').css('display','none');
      $('.mh__cart-icon').removeClass('has_item');
    }
  });

}
