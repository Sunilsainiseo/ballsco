
(function($, window, undefined) {

  var defaults = {}

  function wbsk3dView(element, settings) {
    this.container = $(element)
    this.settings = $.extend({}, defaults, settings)
    this.value = false
    this.init()
  }
  
  wbsk3dView.prototype = {
    init: function() {      
      var _this = this
      _this.is_init = true;
      //scene
      _this.scene = new THREE.Scene();
      //webgl renderer
      _this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      
      _this.renderer.setClearColor(0x000000, 0);
      _this.renderer.setPixelRatio(window.devicePixelRatio);
      _this.renderer.setSize(_this.container.width(), _this.container.height());
      _this.renderer.shadowMap.enabled = true;
      _this.container.append(_this.renderer.domElement);
      
       var geometry = new THREE.BoxGeometry( 30, 30, 30 );
       var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
       var cube = new THREE.Mesh( geometry, material );
       cube.position.z = 20
       cube.position.y = 80
       //_this.scene.add( cube );
             
      _this.camera = new THREE.PerspectiveCamera (45, _this.container.width()/_this.container.height(), 1, 10000);
      _this.camera.position.y = 70;
      _this.camera.position.z = 230;
      
       var light = new THREE.AmbientLight( 0x404040 , 2 ); // soft white light
      _this.scene.add( light );
       var SpotLight1 = new THREE.SpotLight( 0xffffff, 1.1 );
       SpotLight1.position.set(10,80,1000); 
      _this.scene.add( SpotLight1 );
      
       var SpotLight2 = new THREE.SpotLight( 0xffffff, 1.1 );
       SpotLight2.position.set(10,80,-1000); 
      _this.scene.add( SpotLight2 );
    
      
      _this.controls = new THREE.OrbitControls(_this.camera, _this.renderer.domElement);
      _this.controls.enablePan = false
      _this.controls.enableDamping = true
      _this.controls.dampingFactor = .01
      _this.controls.target = new THREE.Vector3( 0, 70, 20 );
      _this.controls.enableZoom = false
      _this.controls.maxDistance = 230
      _this.controls.minDistance = 100
      _this.controls.autoRotateSpeed = 0.1;
      _this.controls.autoRotate = true;
      _this.controls.addEventListener('start', function(){
        _this.controls.autoRotate = false;
        _this.controls.rotateSpeed = 0.02;
      });
      
      
     
      
      $(window).on('resize',function(){
        _this.resize()
      }.debounce(20));
      
      _this.load();
      _this.animate();
     
    },
    
    load:function(){
      var _this = this,
      loader = new THREE.GLTFLoader();
      //console.log(_this.settings.path)
      loader.setPath(_this.settings.path);
      loader.setResourcePath(_this.settings.path);
      loader.load(_this.settings.file,
        function ( gltf ) {
        _this.scene.add( gltf.scene );
      },
	  //progress
	  function ( xhr ) {
        //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      function ( error ) {
        //console.log(error );
      });
    },
    
    resize:function(){
      var _this = this;
      _this.renderer.setSize(_this.container.width(), _this.container.height());
    },
    
    animate: function() {
      var _this = this
      _this.controls.update();
      requestAnimationFrame(_this.animate.bind(_this));   
      _this.renderer.render(_this.scene, _this.camera);
    },
      
  }
  
  $.fn.wbsk3dView = function(settings) {
    $.data(this[0], 'wbsk3dView', new wbsk3dView(this, settings))[0]
  }

}(jQuery, window));






