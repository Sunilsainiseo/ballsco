//// Nice selectors
(function($, window, undefined) {

  var defaults = {
    initValue:null,
    onChange: null,
    hasOptions: false,
    selected: null,
    desktopSlideOut:false,
  }

  function formUI(element, settings) {
    this.element = $(element)
    this.settings = $.extend({}, defaults, settings)
    this.init()
  }

  formUI.prototype = {
    init: function() {      
      var _this = this
      this.input = this.element.find('.wbsk-ui-option-toggle__input')
      this.parent = this.element.find('.wbsk-ui-option-toggle__parent')
      this.optionsWrap = this.element.find('.wbsk-ui-option-toggle__options-wrap')
      this.options = this.element.find('.wbsk-ui-option-toggle__option')
      this.confirm = this.element.find('.wbsk-ui-option-toggle__confirm')
      //update value on init  
      if(this.settings.hasOptions && this.settings.selected == null && this.options.length > 0){
        var index = 0
        if(this.settings.initValue){
          index = $(this.options).filter(function(){
            if($(this).attr('data-val') == _this.settings.initValue){
              return $(this)
            }
          }).index()
        }
        this.updateValue($(this.options[index]))
      }
      //bind handlers
      this.parent.on('click', function(e) {
        if (_this.element.hasClass('is-open')) {
          _this.closeAll()
        } else {
          _this.open()
        }
      })   
      this.options.on('click', function(e) {
        _this.updateValue(e.target)
      })   
      
      this.confirm.on('click', function(e) {
        e.preventDefault()
        _this.closeAll()
      })  
    
    },
    
    closeAll:function(){
      $('.wbsk-ui-option-toggle__bg-close').remove()
      $('.wbsk-ui-option-toggle').removeClass('is-open')
      this.unBindClick()
    },
    
    open:function(){
      var _this = this
      this.closeAll()
      if(this.settings.desktopSlideOut == true){
        this.element.prepend('<span class="wbsk-ui-option-toggle__bg-close"></span>')
      }
      this.element.addClass('is-open')
      setTimeout(function(){
      _this.bindClick()
      },100)
    },
    
    bindClick:function(){
      var _this = this
      $(document).bind('click',function(e){
        if(!$(_this.element).has($(e.target)).length || !$(e.target).parents(_this.element).length || $(e.target).hasClass('wbsk-ui-option-toggle__bg-close')){
          _this.closeAll()
        }
      });
    },
    
    unBindClick:function(){
      $(document).unbind('click')
    },
    
    updateValue:function(selected){
      var _this = this
      var value = $(selected).data('val')
      $(selected).addClass('is-selected').siblings().removeClass('is-selected')
      this.element.data('val', value)
      this.parent.text(value)
      this.input.val(value)
      this.closeAll()
      if (typeof this.settings.onChange === "function") {
        this.settings.onChange(value,_this)
      }
    },
  }

  $.fn.formUI = function(settings) {
    return this.each(function () {
      $.data(this, 'formUI', new formUI(this, settings))
    })
  }

}(jQuery, window));


//// Accordian
(function($, window, undefined) {

  var defaults = {}
  
  function acToggle(element, settings) {
    this.element = $(element)
    this.settings = $.extend({}, defaults, settings)
    this.init()
  }

  acToggle.prototype = {
    init: function() {      
      var _this = this
      this.content = this.element.find('.js-ac-toggle-content'),
   
      //bind handlers
      this.element.on('click', function(e) {
        if (_this.element.hasClass('is-open')){
          _this.element.removeClass('is-open')
          _this.content.slideUp(200)
        } else {
          _this.element.addClass('is-open')
          _this.content.slideDown(200)
        }
      })   
    },
    
    closeAll:function(){
    },
  }

  $.fn.acToggle = function(settings) {
    return this.each(function () {
      $.data(this, 'acToggle', new acToggle(this, settings))
    })
  }

}(jQuery, window));


//// Quant selectors
(function($, window, undefined) {

  var defaults = {
    onChange: null,
  }

  function qntSel(element, settings) {
    this.element = $(element)
    this.settings = $.extend({}, defaults, settings)
    this.init()
  }

  qntSel.prototype = {
  
    init: function() {      
      var _this = this
      this.minus = this.element.find('span').first(),
      this.plus = this.element.find('span').last(),
      this.input = this.element.find('input')   
      this.min = 0
      this.max = Math.pow(10, 1000) 
      
      if(this.input.attr('min')){
        this.min = this.input.attr('min')
      }
      
      if(this.input.attr('max')){
        this.max = this.input.attr('max')
      }
      
     
      //bind handlers
      this.minus.on('click', function(e) {
        _this.updateValue('minus')
      })
      this.plus.on('click', function(e) {
        _this.updateValue('plus')
      }) 
      this.input.on('change', function(e) {
        //change hanlder
      }) 
    },
    
    updateValue:function(math){
      var a = parseInt(this.input.val()),
          p1 = a + 1,
          m1 = a - 1
                 
      if(math == 'plus' && p1 <= this.max){
        this.input.val(p1).trigger('change')
      }
      if(math == 'minus' && m1 >= this.min){
        this.input.val(m1).trigger('change')
      }
    },
    

  }

  $.fn.qntSel = function(settings) {
    return this.each(function () {
      $.data(this, 'qntSel', new qntSel(this, settings))
    })
  }

}(jQuery, window));


//// Modal
(function($, window, undefined) {

  var defaults = {}

  function wbskModal() {
    this.wrapper = $('.wbsk-ui-modal')
    this.openToggle = $('.js-wbsk-modal__open')
    this.closeToggle = $('.js-wbsk-modal__close')
    this.init()
  }

  wbskModal.prototype = {
    init: function() {      
      var _this = this
      //bind handlers
      this.openToggle.on('click', function(e) {
        e.preventDefault()
        var $target = $(e.target).attr('href')
        _this.open($target)  
      })  
      
      this.closeToggle.on('click', function(e) {
        var $target = $(e.target).attr('href')
        _this.closeAll()  
      })  
    },
    
    open:function($target){
      $($target).show()
    },
    
    closeAll:function(){
      this.wrapper.hide()
    },
  }
  
  $.fn.wbskModal = function(settings) {
    $.data(this[0], 'wbskModal', new wbskModal(this, settings))[0]
  }

}(jQuery, window));


//// Radios
(function($, window, undefined) {

  var defaults = {
    onChange: null,
  }

  function wbskRadio(element, settings) {
    this.element = $(element)
    this.settings = $.extend({}, defaults, settings)
    this.value = false
    this.init()
  }

  wbskRadio.prototype = {
    init: function() {      
      var _this = this
      
      //bind handlers
      this.element.on('click', function(e) {
        e.preventDefault()
        _this.element.toggleClass('wbskRadio--active')
        _this.value = !_this.value
        if (typeof _this.settings.onChange === 'function') {
          _this.settings.onChange(_this.value,_this.element.data())
        }
        
      })      
    },
  }
  
  $.fn.wbskRadio = function(settings) {
    return this.each(function () {
      $.data(this, 'wbskRadio', new wbskRadio(this, settings))
    })
  }

}(jQuery, window));



//// sidebar
(function($, window, undefined) {

  var defaults = {}

  function wbskSideBar(element,settings) {
    this.sidebar = $(element)
    this.openCtrlr = settings.openCtrlr
    this.closeCtrlr = this.sidebar.find('.wbsk-ui-sidebar__close')
    this.container = this.sidebar.find('.wbsk-ui-sidebar__container')
    this.init()
  }

  wbskSideBar.prototype = {
    init: function() {      
      var _this = this
      
      //bind handlers
      this.openCtrlr.on('click', function(e) {
        e.preventDefault()
        _this.open()
      })  
      
      this.closeCtrlr.click(function(e) {
        e.preventDefault()
        _this.close()  
        return false
      })  
    },
    
    open:function(){
      this.sidebar.fadeIn(200)
    },
    
    close:function(){
      this.sidebar.fadeOut(200)
    },
  }
  
  $.fn.wbskSideBar = function(settings) {
    return this.each(function () {
      $.data(this, 'wbskSideBar', new wbskSideBar(this, settings))
    })
  }

}(jQuery, window));



//// swiper JQ wrapper
(function($, window, undefined) {

  var defaults = {
    loop: false,
    freeMode: false,
    autoHeight: false,
    preloadImages: true,
    pagination: false,
    navigation: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 6,
    }
  }

  function wbskSwiper(element , settings) {
    this.element = element
    this.settings = $.extend({}, defaults, settings)
    this.init()
  }

  wbskSwiper.prototype = {
    init: function() {      
      var _this = this
      _this.swiper = new Swiper(_this.element,_this.settings)
    },
  }
  
  $.fn.wbskSwiper = function(settings) {
    $.data(this[0], 'wbskSwiper', new wbskSwiper(this, settings))[0]
  }

}(jQuery, window));


////  scrollTo
(function($, window, undefined) {

  var defaults = {}

  function wbskScrollTo(element) {
    this.element = element
    this.init()
  }

  wbskScrollTo.prototype = {
    init: function() {      
      this.links = $('[data-js-wbksrollto-link]')
      this.anchors = $('[data-js-wbksrollto-anchor]')
      this.bind()
    },
    
    bind:function(){
      var _this = this
      //bind link clicks
      this.links.on('click', function(e) {
        e.preventDefault()
        var link = $(this).data('js-wbksrollto-link'),
            anchor = _this.anchors.filter(function(index,anchor){
              return $(anchor).data('js-wbksrollto-anchor') == link
            })[0]
        $('html, body').animate({
          scrollTop: $(anchor).offset().top
        }, 1000);
      })  
    }

  }
  
  $.fn.wbskScrollTo = function(settings) {
    $.data(this[0], 'wbskScrollTo', new wbskScrollTo(this, settings))[0]
  }

}(jQuery, window));



(function($, window, undefined) {

  var defaults = {}

  function GalSlider(element, settings) {
    this.element = element
    this.$element = $(element)
    this.settings = $.extend({}, defaults, settings)
    this.init()
  }

  GalSlider.prototype = {
    init: function() {   
      var _this = this       
      //build the slider
      this.slider = new Swiper (this.element, {
        loop: true,
        slidesPerView:1,
        spaceBetween:0,
        autoHeight: false,
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount:3,
        },
        navigation: {
          //nextEl: '.swiper-button-next',
          //prevEl: '.swiper-button-prev',
        },
      })
    
      //bind the photoswipe gallery
      var items = this.getGalleryItems(),
          options = _this.gal_options
      this.$element.click(function(e){
        e.preventDefault()
        options.index = $(this).index()
        var lightBox = new PhotoSwipe($('.pswp')[0], PhotoSwipeUI_Default, items, options)
        lightBox.init()
      });
    },
    
    getGalleryItems:function(){
      var items = [];
      this.$element.find('a').each(function() {
        var $size = $(this).data('size').split('x');
        var item = {
          src: $(this).attr('href'),
          w: $size[0],
          h: $size[1]
        }
        items.push(item)
      })
      return items
    },
    
    gal_options:{
      bgOpacity: 0.7,
      showHideOpacity: true    
    },
  }

  $.fn.GalSlider = function(settings) {
    return $.data(this, 'GalSlider', new GalSlider(this, settings))
  }

}(jQuery, window));


jQuery(function($) {

  var tickerView = $(".ticker");

  function ticker() {

    tickerView.each(function() {

      var tickerIndex = $(this).index() + 1,
        tickerList = $(this).find("ul"),
        tickerWidth = $(this).outerWidth(),
        tickerListWidth = tickerList.outerWidth(),
        tickerCompleteWidth = tickerListWidth,
        transitionRound = tickerCompleteWidth * 5,
        tickerRoundFixed = transitionRound.toFixed(),
        keyFrames = "@keyframes ticker" + tickerIndex + "{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-" + tickerCompleteWidth + "px,0,0)}}";

      $("<style type='text/css'>" + keyFrames + "</style>").appendTo($("head"));

      tickerList.css({
        "animation": "ticker" + tickerIndex + " " + tickerRoundFixed + "ms infinite linear"
      });
    });
  }

  $(document).ready(function() {
    ticker();
  });
});