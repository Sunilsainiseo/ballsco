(function(h,Fa){"object"===typeof exports&&"undefined"!==typeof module?Fa(exports):"function"===typeof define&&define.amd?define(["exports"],Fa):(h=h||self,Fa(h.THREE={}))})(this,function(h){function Fa(){}function v(a,b){this.x=a||0;this.y=b||0}function ya(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function ca(a,b,c,d,e,f,g,k,l,m){Object.defineProperty(this,"id",{value:mj++});this.uuid=L.generateUUID();
this.name="";this.image=void 0!==a?a:ca.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:ca.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.internalFormat=null;this.type=void 0!==k?k:1009;this.offset=new v(0,0);this.repeat=new v(1,1);this.center=new v(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new ya;this.generateMipmaps=
!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function ia(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function wa(a,b,c){this.width=a;this.height=b;this.scissor=new ia(0,0,a,b);this.scissorTest=!1;this.viewport=new ia(0,0,a,b);c=c||{};this.texture=new ca(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.image={};this.texture.image.width=
a;this.texture.image.height=b;this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Yf(a,b,c){wa.call(this,a,b,c);this.samples=4}function Da(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function n(a,b,
c){this.x=a||0;this.y=b||0;this.z=c||0}function P(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function Sb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||Sb.DefaultOrder}function Zf(){this.mask=1}function G(){Object.defineProperty(this,"id",{value:nj++});this.uuid=L.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=G.DefaultUp.clone();
var a=new n,b=new Sb,c=new Da,d=new n(1,1,1);b._onChange(function(){c.setFromEuler(b,!1)});c._onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new P},normalMatrix:{value:new ya}});this.matrix=new P;this.matrixWorld=new P;this.matrixAutoUpdate=G.DefaultMatrixAutoUpdate;
this.matrixWorldNeedsUpdate=!1;this.layers=new Zf;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}}function nb(){G.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.environment=this.background=null;this.autoUpdate=!0;"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Ra(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==
b?b:new n(-Infinity,-Infinity,-Infinity)}function $f(a,b,c,d,e){var f;var g=0;for(f=a.length-3;g<=f;g+=3){Tb.fromArray(a,g);var k=e.x*Math.abs(Tb.x)+e.y*Math.abs(Tb.y)+e.z*Math.abs(Tb.z),l=b.dot(Tb),m=c.dot(Tb),x=d.dot(Tb);if(Math.max(-Math.max(l,m,x),Math.min(l,m,x))>k)return!1}return!0}function ob(a,b){this.center=void 0!==a?a:new n;this.radius=void 0!==b?b:0}function Ub(a,b){this.origin=void 0!==a?a:new n;this.direction=void 0!==b?b:new n(0,0,-1)}function Sa(a,b){this.normal=void 0!==a?a:new n(1,
0,0);this.constant=void 0!==b?b:0}function na(a,b,c){this.a=void 0!==a?a:new n;this.b=void 0!==b?b:new n;this.c=void 0!==c?c:new n}function B(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function ag(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a}function bg(a){return.04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function cg(a){return.0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055}function zc(a,b,c,d,e,f){this.a=a;this.b=
b;this.c=c;this.normal=d&&d.isVector3?d:new n;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new B;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function K(){Object.defineProperty(this,"id",{value:oj++});this.uuid=L.generateUUID();this.name="";this.type="Material";this.fog=!0;this.blending=1;this.side=0;this.vertexTangents=this.flatShading=!1;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=
100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.stencilWriteMask=255;this.stencilFunc=519;this.stencilRef=0;this.stencilFuncMask=255;this.stencilZPass=this.stencilZFail=this.stencilFail=7680;this.stencilWrite=!1;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=
!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.toneMapped=this.visible=!0;this.userData={};this.version=0}function Na(a){K.call(this);this.type="MeshBasicMaterial";this.color=new B(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphTargets=
this.skinning=!1;this.setValues(a)}function M(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0}function yd(a,b,c){M.call(this,new Int8Array(a),b,c)}function zd(a,b,c){M.call(this,new Uint8Array(a),b,c)}function Ad(a,b,c){M.call(this,new Uint8ClampedArray(a),b,c)}function Bd(a,
b,c){M.call(this,new Int16Array(a),b,c)}function Vb(a,b,c){M.call(this,new Uint16Array(a),b,c)}function Cd(a,b,c){M.call(this,new Int32Array(a),b,c)}function Wb(a,b,c){M.call(this,new Uint32Array(a),b,c)}function D(a,b,c){M.call(this,new Float32Array(a),b,c)}function Dd(a,b,c){M.call(this,new Float64Array(a),b,c)}function uh(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=
null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function vh(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function z(){Object.defineProperty(this,"id",{value:pj+=2});this.uuid=L.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.morphTargetsRelative=!1;this.groups=[];this.boundingSphere=this.boundingBox=null;
this.drawRange={start:0,count:Infinity};this.userData={}}function U(a,b){G.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new z;this.material=void 0!==b?b:new Na;this.updateMorphTargets()}function wh(a,b,c,d,e,f,g,k){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,k):d.intersectTriangle(e,f,g,2!==b.side,k)))return null;Ie.copy(k);Ie.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(Ie);return b<c.near||b>c.far?null:{distance:b,point:Ie.clone(),object:a}}function Je(a,b,c,d,e,f,g,k,
l,m,x,p){Xb.fromBufferAttribute(e,m);Yb.fromBufferAttribute(e,x);Zb.fromBufferAttribute(e,p);e=a.morphTargetInfluences;if(b.morphTargets&&f&&e){Ke.set(0,0,0);Le.set(0,0,0);Me.set(0,0,0);for(var q=0,t=f.length;q<t;q++){var r=e[q],h=f[q];0!==r&&(dg.fromBufferAttribute(h,m),eg.fromBufferAttribute(h,x),fg.fromBufferAttribute(h,p),g?(Ke.addScaledVector(dg,r),Le.addScaledVector(eg,r),Me.addScaledVector(fg,r)):(Ke.addScaledVector(dg.sub(Xb),r),Le.addScaledVector(eg.sub(Yb),r),Me.addScaledVector(fg.sub(Zb),
r)))}Xb.add(Ke);Yb.add(Le);Zb.add(Me)}if(a=wh(a,b,c,d,Xb,Yb,Zb,Ed))k&&(Ac.fromBufferAttribute(k,m),Bc.fromBufferAttribute(k,x),Cc.fromBufferAttribute(k,p),a.uv=na.getUV(Ed,Xb,Yb,Zb,Ac,Bc,Cc,new v)),l&&(Ac.fromBufferAttribute(l,m),Bc.fromBufferAttribute(l,x),Cc.fromBufferAttribute(l,p),a.uv2=na.getUV(Ed,Xb,Yb,Zb,Ac,Bc,Cc,new v)),k=new zc(m,x,p),na.getNormal(Xb,Yb,Zb,k.normal),a.face=k;return a}function N(){Object.defineProperty(this,"id",{value:qj+=2});this.uuid=L.generateUUID();this.name="";this.type=
"Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function Dc(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||
e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}function oa(a){for(var b={},c=0;c<a.length;c++){var d=Dc(a[c]),e;for(e in d)b[e]=d[e]}return b}function pa(a){K.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}
function cb(){G.call(this);this.type="Camera";this.matrixWorldInverse=new P;this.projectionMatrix=new P;this.projectionMatrixInverse=new P}function qa(a,b,c,d){cb.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Ec(a,b,c,d){G.call(this);this.type="CubeCamera";var e=new qa(90,1,a,b);e.up.set(0,
-1,0);e.lookAt(new n(1,0,0));this.add(e);var f=new qa(90,1,a,b);f.up.set(0,-1,0);f.lookAt(new n(-1,0,0));this.add(f);var g=new qa(90,1,a,b);g.up.set(0,0,1);g.lookAt(new n(0,1,0));this.add(g);var k=new qa(90,1,a,b);k.up.set(0,0,-1);k.lookAt(new n(0,-1,0));this.add(k);var l=new qa(90,1,a,b);l.up.set(0,-1,0);l.lookAt(new n(0,0,1));this.add(l);var m=new qa(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new n(0,0,-1));this.add(m);d=d||{format:1022,magFilter:1006,minFilter:1006};this.renderTarget=new Cb(c,d);this.renderTarget.texture.name=
"CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=a.getRenderTarget(),d=this.renderTarget,p=d.texture.generateMipmaps;d.texture.generateMipmaps=!1;a.setRenderTarget(d,0);a.render(b,e);a.setRenderTarget(d,1);a.render(b,f);a.setRenderTarget(d,2);a.render(b,g);a.setRenderTarget(d,3);a.render(b,k);a.setRenderTarget(d,4);a.render(b,l);d.texture.generateMipmaps=p;a.setRenderTarget(d,5);a.render(b,m);a.setRenderTarget(c)};this.clear=function(a,b,c,d){for(var e=a.getRenderTarget(),
f=this.renderTarget,g=0;6>g;g++)a.setRenderTarget(f,g),a.clear(b,c,d);a.setRenderTarget(e)}}function Cb(a,b,c){Number.isInteger(b)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),b=c);wa.call(this,a,a,b)}function $b(a,b,c,d,e,f,g,k,l,m,x,p){ca.call(this,null,f,g,k,l,m,d,e,x,p);this.image={data:a||null,width:b||1,height:c||1};this.magFilter=void 0!==l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=
1;this.needsUpdate=!0}function Fd(a,b,c,d,e,f){this.planes=[void 0!==a?a:new Sa,void 0!==b?b:new Sa,void 0!==c?c:new Sa,void 0!==d?d:new Sa,void 0!==e?e:new Sa,void 0!==f?f:new Sa]}function xh(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a))}var b=null,c=!1,d=null;return{start:function(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0)},stop:function(){c=!1},setAnimationLoop:function(a){d=a},setContext:function(a){b=a}}}function rj(a){function b(b,c){var d=b.array,e=b.usage,k=a.createBuffer();
a.bindBuffer(c,k);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:k,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,version:b.version}}var c=new WeakMap;return{get:function(a){a.isInterleavedBufferAttribute&&
(a=a.data);return c.get(a)},remove:function(b){b.isInterleavedBufferAttribute&&(b=b.data);var d=c.get(b);d&&(a.deleteBuffer(d.buffer),c.delete(b))},update:function(d,e){d.isInterleavedBufferAttribute&&(d=d.data);var f=c.get(d);if(void 0===f)c.set(d,b(d,e));else if(f.version<d.version){var g=d.array,k=d.updateRange;a.bindBuffer(e,f.buffer);-1===k.count?a.bufferSubData(e,0,g):(a.bufferSubData(e,k.offset*g.BYTES_PER_ELEMENT,g.subarray(k.offset,k.offset+k.count)),k.count=-1);f.version=d.version}}}}function Gd(a,
b,c,d){N.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new ac(a,b,c,d));this.mergeVertices()}function ac(a,b,c,d){z.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,k=d+1,l=a/c,m=b/d,x=[],p=[],q=[],t=[];for(a=0;a<k;a++){var r=a*m-f;for(b=0;b<g;b++)p.push(b*l-e,-r,0),q.push(0,0,
1),t.push(b/c),t.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),k=b+1+g*a,x.push(b+g*a,e,k),x.push(e,f,k);this.setIndex(x);this.setAttribute("position",new D(p,3));this.setAttribute("normal",new D(q,3));this.setAttribute("uv",new D(t,2))}function sj(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d)}var f=new B(0),g=0,k,l,m=null,x=0,p=null;return{getClearColor:function(){return f},setClearColor:function(a,b){f.set(a);g=void 0!==b?b:1;e(f,g)},getClearAlpha:function(){return g},
setClearAlpha:function(a){g=a;e(f,g)},render:function(b,d,r,h){d=d.background;r=a.xr;(r=r.getSession&&r.getSession())&&"additive"===r.environmentBlendMode&&(d=null);null===d?(e(f,g),m=null,x=0):d&&d.isColor&&(e(d,1),h=!0,m=null,x=0);(a.autoClear||h)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||d.isWebGLCubeRenderTarget||306===d.mapping)){void 0===l&&(l=new U(new Hd(1,1,1),new pa({type:"BackgroundCubeMaterial",uniforms:Dc(db.cube.uniforms),vertexShader:db.cube.vertexShader,
fragmentShader:db.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(l));h=d.isWebGLCubeRenderTarget?d.texture:d;l.material.uniforms.envMap.value=h;l.material.uniforms.flipEnvMap.value=h.isCubeTexture?-1:1;if(m!==d||x!==h.version||p!==
a.toneMapping)l.material.needsUpdate=!0,m=d,x=h.version,p=a.toneMapping;b.unshift(l,l.geometry,l.material,0,0,null)}else if(d&&d.isTexture){void 0===k&&(k=new U(new ac(2,2),new pa({type:"BackgroundMaterial",uniforms:Dc(db.background.uniforms),vertexShader:db.background.vertexShader,fragmentShader:db.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),k.geometry.deleteAttribute("normal"),Object.defineProperty(k.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(k));
k.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();k.material.uniforms.uvTransform.value.copy(d.matrix);if(m!==d||x!==d.version||p!==a.toneMapping)k.material.needsUpdate=!0,m=d,x=d.version,p=a.toneMapping;b.unshift(k,k.geometry,k.material,0,0,null)}}}}function tj(a,b,c,d){var e=d.isWebGL2,f;this.setMode=function(a){f=a};this.render=function(b,d){a.drawArrays(f,b,d);c.update(d,f)};this.renderInstances=function(d,k,l,m){if(0!==m){if(e){d=a;var g="drawArraysInstanced"}else if(d=
b.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",null===d){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](f,k,l,m);c.update(l,f,m)}}}function uj(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&
0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp"}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext||"undefined"!==typeof WebGL2ComputeRenderingContext&&a instanceof WebGL2ComputeRenderingContext,g=void 0!==c.precision?c.precision:"highp",k=d(g);k!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",k,"instead."),g=k);c=!0===c.logarithmicDepthBuffer;k=a.getParameter(34930);var l=a.getParameter(35660),m=a.getParameter(3379),x=
a.getParameter(34076),p=a.getParameter(34921),q=a.getParameter(36347),h=a.getParameter(36348),r=a.getParameter(36349),u=0<l,n=f||!!b.get("OES_texture_float"),w=u&&n,E=f?a.getParameter(36183):0;return{isWebGL2:f,getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:k,maxVertexTextures:l,maxTextureSize:m,maxCubemapSize:x,
maxAttributes:p,maxVertexUniforms:q,maxVaryings:h,maxFragmentUniforms:r,vertexTextures:u,floatFragmentTextures:n,floatVertexTextures:w,maxSamples:E}}function vj(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)k.copy(a[e]).applyMatrix4(b,l),k.normal.toArray(g,
d),g[d+3]=k.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,k=new Sa,l=new ya,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var k=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return k};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,k,l,h,r,u){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var p=4*l,x=r.clippingState||
null;m.value=x;x=b(c,h,p,u);for(c=0;c!==p;++c)x[c]=d[c];r.clippingState=x;this.numIntersection=k?this.numPlanes:0;this.numPlanes+=l}}}function wj(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];switch(c){case "WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||
a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");
return b[c]=d}}}function xj(a,b,c){function d(a){var e=a.target;a=f.get(e);null!==a.index&&b.remove(a.index);for(var k in a.attributes)b.remove(a.attributes[k]);e.removeEventListener("dispose",d);f.delete(e);if(k=g.get(a))b.remove(k),g.delete(a);c.memory.geometries--}function e(a){var c=[],d=a.index,e=a.attributes.position;if(null!==d){var f=d.array;d=d.version;e=0;for(var k=f.length;e<k;e+=3){var h=f[e+0],r=f[e+1],u=f[e+2];c.push(h,r,r,u,u,h)}}else for(f=e.array,d=e.version,e=0,k=f.length/3-1;e<
k;e+=3)h=e+0,r=e+1,u=e+2,c.push(h,r,r,u,u,h);c=new (65535<vh(c)?Wb:Vb)(c,1);c.version=d;b.update(c,34963);(f=g.get(a))&&b.remove(f);g.set(a,c)}var f=new WeakMap,g=new WeakMap;return{get:function(a,b){var e=f.get(b);if(e)return e;b.addEventListener("dispose",d);b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new z).setFromObject(a)),e=b._bufferGeometry);f.set(b,e);c.memory.geometries++;return e},update:function(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,
34963);for(var e in d)b.update(d[e],34962);a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++)b.update(c[d],34962)}},getWireframeAttribute:function(a){var b=g.get(a);if(b){var c=a.index;null!==c&&b.version<c.version&&e(a)}else e(a);return g.get(a)}}}function yj(a,b,c,d){var e=d.isWebGL2,f,g,k;this.setMode=function(a){f=a};this.setIndex=function(a){g=a.type;k=a.bytesPerElement};this.render=function(b,d){a.drawElements(f,d,g,b*k);c.update(d,f)};this.renderInstances=function(d,m,x,
p){if(0!==p){if(e){d=a;var l="drawElementsInstanced"}else if(d=b.get("ANGLE_instanced_arrays"),l="drawElementsInstancedANGLE",null===d){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[l](f,x,g,m*k,p);c.update(x,f,p)}}}function zj(a){var b={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:b,programs:null,autoReset:!0,reset:function(){b.frame++;
b.calls=0;b.triangles=0;b.points=0;b.lines=0},update:function(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d)}}}}function Aj(a,b){return Math.abs(b[1])-Math.abs(a[1])}function Bj(a){var b={},c=new Float32Array(8);return{update:function(d,e,f,g){var k=d.morphTargetInfluences,l=void 0===k?0:k.length;d=b[e.id];
if(void 0===d){d=[];for(var m=0;m<l;m++)d[m]=[m,0];b[e.id]=d}var x=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<l;m++){var p=d[m];0!==p[1]&&(x&&e.deleteAttribute("morphTarget"+m),f&&e.deleteAttribute("morphNormal"+m))}for(m=0;m<l;m++)p=d[m],p[0]=m,p[1]=k[m];d.sort(Aj);for(m=k=0;8>m;m++){if(p=d[m])if(l=p[0],p=p[1]){x&&e.setAttribute("morphTarget"+m,x[l]);f&&e.setAttribute("morphNormal"+m,f[l]);c[m]=p;k+=p;continue}c[m]=0}e=e.morphTargetsRelative?1:
1-k;g.getUniforms().setValue(a,"morphTargetBaseInfluence",e);g.getUniforms().setValue(a,"morphTargetInfluences",c)}}}function Cj(a,b,c,d){var e={};return{update:function(a){var f=d.render.frame,k=a.geometry,l=b.get(a,k);e[l.id]!==f&&(k.isGeometry&&l.updateFromObject(a),b.update(l),e[l.id]=f);a.isInstancedMesh&&c.update(a.instanceMatrix,34962);return l},dispose:function(){e={}}}}function pb(a,b,c,d,e,f,g,k,l,m){a=void 0!==a?a:[];ca.call(this,a,void 0!==b?b:301,c,d,e,f,void 0!==g?g:1022,k,l,m);this.flipY=
!1}function Fc(a,b,c,d){ca.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0}function Gc(a,b,c,d){ca.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0}function Hc(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=yh[e];void 0===f&&(f=new Float32Array(e),
yh[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function Oa(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function Ia(a,b){for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}function zh(a,b){var c=Ah[b];void 0===c&&(c=new Int32Array(b),Ah[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocateTextureUnit();return c}function Dj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b)}function Ej(a,b){var c=this.cache;
if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y}else Oa(c,b)||(a.uniform2fv(this.addr,b),Ia(c,b))}function Fj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z}else if(void 0!==b.r){if(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b}else Oa(c,b)||(a.uniform3fv(this.addr,b),Ia(c,b))}function Gj(a,b){var c=this.cache;if(void 0!==
b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w}else Oa(c,b)||(a.uniform4fv(this.addr,b),Ia(c,b))}function Hj(a,b){var c=this.cache,d=b.elements;void 0===d?Oa(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),Ia(c,b)):Oa(c,d)||(Bh.set(d),a.uniformMatrix2fv(this.addr,!1,Bh),Ia(c,d))}function Ij(a,b){var c=this.cache,d=b.elements;void 0===d?Oa(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),Ia(c,b)):Oa(c,d)||(Ch.set(d),a.uniformMatrix3fv(this.addr,
!1,Ch),Ia(c,d))}function Jj(a,b){var c=this.cache,d=b.elements;void 0===d?Oa(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),Ia(c,b)):Oa(c,d)||(Dh.set(d),a.uniformMatrix4fv(this.addr,!1,Dh),Ia(c,d))}function Kj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTexture2D(b||Eh,e)}function Lj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2DArray(b||Mj,e)}function Nj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();
d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||Oj,e)}function Pj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTextureCube(b||Fh,e)}function Qj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,b),c[0]=b)}function Rj(a,b){var c=this.cache;Oa(c,b)||(a.uniform2iv(this.addr,b),Ia(c,b))}function Sj(a,b){var c=this.cache;Oa(c,b)||(a.uniform3iv(this.addr,b),Ia(c,b))}function Tj(a,b){var c=this.cache;Oa(c,b)||(a.uniform4iv(this.addr,
b),Ia(c,b))}function Uj(a){switch(a){case 5126:return Dj;case 35664:return Ej;case 35665:return Fj;case 35666:return Gj;case 35674:return Hj;case 35675:return Ij;case 35676:return Jj;case 5124:case 35670:return Qj;case 35667:case 35671:return Rj;case 35668:case 35672:return Sj;case 35669:case 35673:return Tj;case 35678:case 36198:case 36298:case 36306:case 35682:return Kj;case 35679:case 36299:case 36307:return Nj;case 35680:case 36300:case 36308:case 36293:return Pj;case 36289:case 36303:case 36311:case 36292:return Lj}}
function Vj(a,b){a.uniform1fv(this.addr,b)}function Wj(a,b){a.uniform1iv(this.addr,b)}function Xj(a,b){a.uniform2iv(this.addr,b)}function Yj(a,b){a.uniform3iv(this.addr,b)}function Zj(a,b){a.uniform4iv(this.addr,b)}function ak(a,b){b=Hc(b,this.size,2);a.uniform2fv(this.addr,b)}function bk(a,b){b=Hc(b,this.size,3);a.uniform3fv(this.addr,b)}function ck(a,b){b=Hc(b,this.size,4);a.uniform4fv(this.addr,b)}function dk(a,b){b=Hc(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,b)}function ek(a,b){b=Hc(b,this.size,
9);a.uniformMatrix3fv(this.addr,!1,b)}function fk(a,b){b=Hc(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,b)}function gk(a,b,c){var d=b.length,e=zh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTexture2D(b[a]||Eh,e[a])}function hk(a,b,c){var d=b.length,e=zh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTextureCube(b[a]||Fh,e[a])}function ik(a){switch(a){case 5126:return Vj;case 35664:return ak;case 35665:return bk;case 35666:return ck;case 35674:return dk;case 35675:return ek;
case 35676:return fk;case 5124:case 35670:return Wj;case 35667:case 35671:return Xj;case 35668:case 35672:return Yj;case 35669:case 35673:return Zj;case 35678:case 36198:case 36298:case 36306:case 35682:return gk;case 35680:case 36300:case 36308:case 36293:return hk}}function jk(a,b,c){this.id=a;this.addr=c;this.cache=[];this.setValue=Uj(b.type)}function Gh(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;this.setValue=ik(b.type)}function Hh(a){this.id=a;this.seq=[];this.map={}}function Db(a,
b){this.seq=[];this.map={};for(var c=a.getProgramParameter(b,35718),d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,k=e.name,l=k.length;for(gg.lastIndex=0;;){var m=gg.exec(k),x=gg.lastIndex,p=m[1],h=m[3];"]"===m[2]&&(p|=0);if(void 0===h||"["===h&&x+2===l){k=g;e=void 0===h?new jk(p,e,f):new Gh(p,e,f);k.seq.push(e);k.map[e.id]=e;break}else h=g.map[p],void 0===h&&(h=new Hh(p),p=g,g=h,p.seq.push(g),p.map[g.id]=g),g=h}}}function Ih(a,b,c){b=a.createShader(b);a.shaderSource(b,
c);a.compileShader(b);return b}function Jh(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw Error("unsupported encoding: "+a);}}function Kh(a,b,c){var d=a.getShaderParameter(b,35713),
e=a.getShaderInfoLog(b).trim();if(d&&""===e)return"";a=a.getShaderSource(b).split("\n");for(b=0;b<a.length;b++)a[b]=b+1+": "+a[b];a=a.join("\n");return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+"\n"+e+a}function Id(a,b){b=Jh(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }"}function kk(a,b){b=Jh(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }"}function lk(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b=
"OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }"}function mk(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function Jd(a){return""!==a}function Lh(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,
b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows)}function Mh(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection)}function hg(a,b){a=O[b];if(void 0===a)throw Error("Can not resolve #include <"+b+">");return a.replace(ig,hg)}function Nh(a,b,c,d){a="";for(b=parseInt(b);b<parseInt(c);b++)a+=
d.replace(/\[ i \]/g,"[ "+b+" ]").replace(/UNROLLED_LOOP_INDEX/g,b);return a}function Oh(a){var b="precision "+a.precision+" float;\nprecision "+a.precision+" int;";"highp"===a.precision?b+="\n#define HIGH_PRECISION":"mediump"===a.precision?b+="\n#define MEDIUM_PRECISION":"lowp"===a.precision&&(b+="\n#define LOW_PRECISION");return b}function nk(a){var b="SHADOWMAP_TYPE_BASIC";1===a.shadowMapType?b="SHADOWMAP_TYPE_PCF":2===a.shadowMapType?b="SHADOWMAP_TYPE_PCF_SOFT":3===a.shadowMapType&&(b="SHADOWMAP_TYPE_VSM");
return b}function ok(a){var b="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:b="ENVMAP_TYPE_CUBE";break;case 306:case 307:b="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:b="ENVMAP_TYPE_EQUIREC";break;case 305:b="ENVMAP_TYPE_SPHERE"}return b}function pk(a){var b="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:case 304:b="ENVMAP_MODE_REFRACTION"}return b}function qk(a){var b="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:b="ENVMAP_BLENDING_MULTIPLY";
break;case 1:b="ENVMAP_BLENDING_MIX";break;case 2:b="ENVMAP_BLENDING_ADD"}return b}function rk(a,b,c){var d=a.getContext(),e=c.defines,f=c.vertexShader,g=c.fragmentShader,k=nk(c),l=ok(c),m=pk(c),x=qk(c),p=0<a.gammaFactor?a.gammaFactor:1,h=c.isWebGL2?"":[c.extensionDerivatives||c.envMapCubeUV||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||"physical"===c.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?
"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jd).join("\n"),t=mk(e),r=d.createProgram(),u=c.numMultiviewViews;c.isRawShaderMaterial?(e=[t].filter(Jd).join("\n"),0<e.length&&(e+="\n"),k=[h,t].filter(Jd).join("\n"),0<k.length&&(k+="\n")):(e=[Oh(c),"#define SHADER_NAME "+
c.shaderName,t,c.instancing?"#define USE_INSTANCING":"",c.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+c.maxBones,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+m:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":
"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.displacementMap&&c.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?
"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.flatShading?"#define FLAT_SHADED":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals&&!1===c.flatShading?"#define USE_MORPHNORMALS":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+k:"",c.sizeAttenuation?
"#define USE_SIZEATTENUATION":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&(c.isWebGL2||c.rendererExtensionFragDepth)?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;",
"attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;",
"\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Jd).join("\n"),k=[h,Oh(c),"#define SHADER_NAME "+c.shaderName,t,c.alphaTest?"#define ALPHATEST "+c.alphaTest+(c.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+p,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.matcap?
"#define USE_MATCAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+l:"",c.envMap?"#define "+m:"",c.envMap?"#define "+x:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":
"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.sheen?"#define USE_SHEEN":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.gradientMap?"#define USE_GRADIENTMAP":"",c.flatShading?"#define FLAT_SHADED":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":
"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+k:"",c.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",c.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&(c.isWebGL2||c.rendererExtensionFragDepth)?"#define USE_LOGDEPTHBUF_EXT":"",(c.extensionShaderTextureLOD||c.envMap)&&(c.isWebGL2||c.rendererExtensionShaderTextureLod)?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;",
"uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==c.toneMapping?"#define TONE_MAPPING":"",0!==c.toneMapping?O.tonemapping_pars_fragment:"",0!==c.toneMapping?lk("toneMapping",c.toneMapping):"",c.dithering?"#define DITHERING":"",c.outputEncoding||c.mapEncoding||c.matcapEncoding||c.envMapEncoding||c.emissiveMapEncoding||c.lightMapEncoding?O.encodings_pars_fragment:"",c.mapEncoding?Id("mapTexelToLinear",c.mapEncoding):"",c.matcapEncoding?Id("matcapTexelToLinear",c.matcapEncoding):"",c.envMapEncoding?
Id("envMapTexelToLinear",c.envMapEncoding):"",c.emissiveMapEncoding?Id("emissiveMapTexelToLinear",c.emissiveMapEncoding):"",c.lightMapEncoding?Id("lightMapTexelToLinear",c.lightMapEncoding):"",c.outputEncoding?kk("linearToOutputTexel",c.outputEncoding):"",c.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(Jd).join("\n"));f=f.replace(ig,hg);f=Lh(f,c);f=Mh(f,c);g=g.replace(ig,hg);g=Lh(g,c);g=Mh(g,c);f=f.replace(Ph,Nh);g=g.replace(Ph,Nh);c.isWebGL2&&!c.isRawShaderMaterial&&(l=!1,
m=/^\s*#version\s+300\s+es\s*\n/,c.isShaderMaterial&&null!==f.match(m)&&null!==g.match(m)&&(l=!0,f=f.replace(m,""),g=g.replace(m,"")),e="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+e,k=["#version 300 es\n\n#define varying in",l?"":"out highp vec4 pc_fragColor;",l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+
"\n"+k,0<u&&(e=e.replace("#version 300 es\n",["#version 300 es\n\n#extension GL_OVR_multiview2 : require","layout(num_views = "+u+") in;","#define VIEW_ID gl_ViewID_OVR"].join("\n")),e=e.replace("uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;",["uniform mat4 modelViewMatrices["+u+"];","uniform mat4 projectionMatrices["+u+"];","uniform mat4 viewMatrices["+u+"];","uniform mat3 normalMatrices["+u+"];","#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")),
k=k.replace("#version 300 es\n","#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR"),k=k.replace("uniform mat4 viewMatrix;",["uniform mat4 viewMatrices["+u+"];","#define viewMatrix viewMatrices[VIEW_ID]"].join("\n"))));g=k+g;f=Ih(d,35633,e+f);g=Ih(d,35632,g);d.attachShader(r,f);d.attachShader(r,g);void 0!==c.index0AttributeName?d.bindAttribLocation(r,0,c.index0AttributeName):!0===c.morphTargets&&d.bindAttribLocation(r,0,"position");d.linkProgram(r);if(a.debug.checkShaderErrors){a=
d.getProgramInfoLog(r).trim();l=d.getShaderInfoLog(f).trim();m=d.getShaderInfoLog(g).trim();p=x=!0;if(!1===d.getProgramParameter(r,35714))x=!1,h=Kh(d,f,"vertex"),t=Kh(d,g,"fragment"),console.error("THREE.WebGLProgram: shader error: ",d.getError(),"35715",d.getProgramParameter(r,35715),"gl.getProgramInfoLog",a,h,t);else if(""!==a)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",a);else if(""===l||""===m)p=!1;p&&(this.diagnostics={runnable:x,programLog:a,vertexShader:{log:l,prefix:e},fragmentShader:{log:m,
prefix:k}})}d.deleteShader(f);d.deleteShader(g);var n;this.getUniforms=function(){void 0===n&&(n=new Db(d,r));return n};var w;this.getAttributes=function(){if(void 0===w){for(var a={},b=d.getProgramParameter(r,35721),c=0;c<b;c++){var e=d.getActiveAttrib(r,c).name;a[e]=d.getAttribLocation(r,e)}w=a}return w};this.destroy=function(){d.deleteProgram(r);this.program=void 0};this.name=c.shaderName;this.id=sk++;this.cacheKey=b;this.usedTimes=1;this.program=r;this.vertexShader=f;this.fragmentShader=g;this.numMultiviewViews=
u;return this}function tk(a,b,c){function d(a){if(a)a.isTexture?b=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=a.texture.encoding);else var b=3E3;return b}var e=[],f=c.isWebGL2,g=c.logarithmicDepthBuffer,k=c.floatVertexTextures,l=c.precision,m=c.maxVertexUniforms,x=c.vertexTextures,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",
MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},h="precision isWebGL2 supportsVertexTextures outputEncoding instancing numMultiviewViews map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");
this.getParameters=function(e,h,q,n,w,E,S){var r=n.fog;n=e.isMeshStandardMaterial?n.environment:null;n=e.envMap||n;var t=p[e.type];if(S.isSkinnedMesh){var u=S.skeleton.bones;if(k)u=1024;else{var y=Math.min(Math.floor((m-20)/4),u.length);y<u.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+u.length+" bones. This GPU supports "+y+"."),u=0):u=y}}else u=0;null!==e.precision&&(l=c.getMaxPrecision(e.precision),l!==e.precision&&console.warn("THREE.WebGLProgram.getParameters:",e.precision,"not supported, using",
l,"instead."));t?(y=db[t],y={name:e.type,uniforms:Qh.clone(y.uniforms),vertexShader:y.vertexShader,fragmentShader:y.fragmentShader}):y={name:e.type,uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader};e.onBeforeCompile(y,a);var v=a.getRenderTarget();return{isWebGL2:f,shaderID:t,shaderName:y.name,uniforms:y.uniforms,vertexShader:y.vertexShader,fragmentShader:y.fragmentShader,defines:e.defines,isRawShaderMaterial:e.isRawShaderMaterial,isShaderMaterial:e.isShaderMaterial,
precision:l,instancing:!0===S.isInstancedMesh,supportsVertexTextures:x,numMultiviewViews:v&&v.isWebGLMultiviewRenderTarget?v.numViews:0,outputEncoding:null!==v?d(v.texture):a.outputEncoding,map:!!e.map,mapEncoding:d(e.map),matcap:!!e.matcap,matcapEncoding:d(e.matcap),envMap:!!n,envMapMode:n&&n.mapping,envMapEncoding:d(n),envMapCubeUV:!!n&&(306===n.mapping||307===n.mapping),lightMap:!!e.lightMap,lightMapEncoding:d(e.lightMap),aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,emissiveMapEncoding:d(e.emissiveMap),
bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,objectSpaceNormalMap:1===e.normalMapType,tangentSpaceNormalMap:0===e.normalMapType,clearcoatNormalMap:!!e.clearcoatNormalMap,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,alphaMap:!!e.alphaMap,gradientMap:!!e.gradientMap,sheen:!!e.sheen,combine:e.combine,vertexTangents:e.normalMap&&e.vertexTangents,vertexColors:e.vertexColors,vertexUvs:!!e.map||!!e.bumpMap||!!e.normalMap||!!e.specularMap||
!!e.alphaMap||!!e.emissiveMap||!!e.roughnessMap||!!e.metalnessMap||!!e.clearcoatNormalMap||!!e.displacementMap,uvsVertexOnly:!(e.map||e.bumpMap||e.normalMap||e.specularMap||e.alphaMap||e.emissiveMap||e.roughnessMap||e.metalnessMap||e.clearcoatNormalMap)&&!!e.displacementMap,fog:!!r,useFog:e.fog,fogExp2:r&&r.isFogExp2,flatShading:e.flatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:g,skinning:e.skinning&&0<u,maxBones:u,useVertexTexture:k,morphTargets:e.morphTargets,morphNormals:e.morphNormals,
maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numClippingPlanes:w,numClipIntersection:E,dithering:e.dithering,shadowMapEnabled:a.shadowMap.enabled&&0<q.length,shadowMapType:a.shadowMap.type,
toneMapping:e.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,alphaTest:e.alphaTest,doubleSided:2===e.side,flipSided:1===e.side,depthPacking:void 0!==e.depthPacking?e.depthPacking:!1,index0AttributeName:e.index0AttributeName,extensionDerivatives:e.extensions&&e.extensions.derivatives,extensionFragDepth:e.extensions&&e.extensions.frawbuffers,extensionDrawbuffers:e.extensions&&e.extensions.drawbuffers,extensionShaderTextureLOD:e.extensions&&
e.extensions.shaderTextureLOD,rendererExtensionFragDepth:void 0!==b.get("EXT_frag_depth"),rendererExtensionDrawBuffers:void 0!==b.get("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:void 0!==b.get("EXT_shader_texture_lod"),onBeforeCompile:e.onBeforeCompile}};this.getProgramCacheKey=function(b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(b.fragmentShader),c.push(b.vertexShader));if(void 0!==b.defines)for(var d in b.defines)c.push(d),c.push(b.defines[d]);if(void 0===b.isRawShaderMaterial){for(d=
0;d<h.length;d++)c.push(b[h[d]]);c.push(a.outputEncoding);c.push(a.gammaFactor)}c.push(b.onBeforeCompile.toString());return c.join()};this.acquireProgram=function(b,c){for(var d,f=0,g=e.length;f<g;f++){var k=e[f];if(k.cacheKey===c){d=k;++d.usedTimes;break}}void 0===d&&(d=new rk(a,c,b),e.push(d));return d};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy()}};this.programs=e}function uk(){var a=new WeakMap;return{get:function(b){var c=a.get(b);
void 0===c&&(c={},a.set(b,c));return c},remove:function(b){a.delete(b)},update:function(b,c,d){a.get(b)[c]=d},dispose:function(){a=new WeakMap}}}function vk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function wk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==
b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function Rh(){function a(a,d,e,m,x,p){var g=b[c];void 0===g?(g={id:a.id,object:a,geometry:d,material:e,program:e.program||f,groupOrder:m,renderOrder:a.renderOrder,z:x,group:p},b[c]=g):(g.id=a.id,g.object=a,g.geometry=d,g.material=e,g.program=e.program||f,g.groupOrder=m,g.renderOrder=a.renderOrder,g.z=x,g.group=p);c++;return g}var b=[],c=0,d=[],e=[],f={id:-1};return{opaque:d,transparent:e,init:function(){c=0;d.length=0;e.length=
0},push:function(b,c,f,m,x,p){b=a(b,c,f,m,x,p);(!0===f.transparent?e:d).push(b)},unshift:function(b,c,f,m,x,p){b=a(b,c,f,m,x,p);(!0===f.transparent?e:d).unshift(b)},sort:function(a,b){1<d.length&&d.sort(a||vk);1<e.length&&e.sort(b||wk)}}}function xk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c)}var b=new WeakMap;return{get:function(c,d){var e=b.get(c);if(void 0===e){var f=new Rh;b.set(c,new WeakMap);b.get(c).set(d,f);c.addEventListener("dispose",a)}else f=e.get(d),void 0===
f&&(f=new Rh,e.set(d,f));return f},dispose:function(){b=new WeakMap}}}function yk(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={direction:new n,color:new B,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new v};break;case "SpotLight":c={position:new n,direction:new n,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new v};break;case "PointLight":c={position:new n,color:new B,
distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new v,shadowCameraNear:1,shadowCameraFar:1E3};break;case "HemisphereLight":c={direction:new n,skyColor:new B,groundColor:new B};break;case "RectAreaLight":c={color:new B,position:new n,halfWidth:new n,halfHeight:new n}}return a[b.id]=c}}}function zk(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0)}function Ak(){for(var a=new yk,b={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,
numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},c=0;9>c;c++)b.probe.push(new n);var d=new n,e=new P,f=new P;return{setup:function(c,k,l){for(var g=0,x=0,p=0,h=0;9>h;h++)b.probe[h].set(0,0,0);var t=k=0,r=0,u=0,n=0,w=0,E=
0,S=0;l=l.matrixWorldInverse;c.sort(zk);h=0;for(var V=c.length;h<V;h++){var A=c[h],za=A.color,v=A.intensity,Kd=A.distance,ra=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)g+=za.r*v,x+=za.g*v,p+=za.b*v;else if(A.isLightProbe)for(ra=0;9>ra;ra++)b.probe[ra].addScaledVector(A.sh.coefficients[ra],v);else if(A.isDirectionalLight){var F=a.get(A);F.color.copy(A.color).multiplyScalar(A.intensity);F.direction.setFromMatrixPosition(A.matrixWorld);d.setFromMatrixPosition(A.target.matrixWorld);
F.direction.sub(d);F.direction.transformDirection(l);if(F.shadow=A.castShadow)v=A.shadow,F.shadowBias=v.bias,F.shadowRadius=v.radius,F.shadowMapSize=v.mapSize,b.directionalShadowMap[k]=ra,b.directionalShadowMatrix[k]=A.shadow.matrix,w++;b.directional[k]=F;k++}else if(A.isSpotLight){F=a.get(A);F.position.setFromMatrixPosition(A.matrixWorld);F.position.applyMatrix4(l);F.color.copy(za).multiplyScalar(v);F.distance=Kd;F.direction.setFromMatrixPosition(A.matrixWorld);d.setFromMatrixPosition(A.target.matrixWorld);
F.direction.sub(d);F.direction.transformDirection(l);F.coneCos=Math.cos(A.angle);F.penumbraCos=Math.cos(A.angle*(1-A.penumbra));F.decay=A.decay;if(F.shadow=A.castShadow)v=A.shadow,F.shadowBias=v.bias,F.shadowRadius=v.radius,F.shadowMapSize=v.mapSize,b.spotShadowMap[r]=ra,b.spotShadowMatrix[r]=A.shadow.matrix,S++;b.spot[r]=F;r++}else if(A.isRectAreaLight)F=a.get(A),F.color.copy(za).multiplyScalar(v),F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(l),f.identity(),e.copy(A.matrixWorld),
e.premultiply(l),f.extractRotation(e),F.halfWidth.set(.5*A.width,0,0),F.halfHeight.set(0,.5*A.height,0),F.halfWidth.applyMatrix4(f),F.halfHeight.applyMatrix4(f),b.rectArea[u]=F,u++;else if(A.isPointLight){F=a.get(A);F.position.setFromMatrixPosition(A.matrixWorld);F.position.applyMatrix4(l);F.color.copy(A.color).multiplyScalar(A.intensity);F.distance=A.distance;F.decay=A.decay;if(F.shadow=A.castShadow)v=A.shadow,F.shadowBias=v.bias,F.shadowRadius=v.radius,F.shadowMapSize=v.mapSize,F.shadowCameraNear=
v.camera.near,F.shadowCameraFar=v.camera.far,b.pointShadowMap[t]=ra,b.pointShadowMatrix[t]=A.shadow.matrix,E++;b.point[t]=F;t++}else A.isHemisphereLight&&(F=a.get(A),F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(l),F.direction.normalize(),F.skyColor.copy(A.color).multiplyScalar(v),F.groundColor.copy(A.groundColor).multiplyScalar(v),b.hemi[n]=F,n++)}b.ambient[0]=g;b.ambient[1]=x;b.ambient[2]=p;c=b.hash;if(c.directionalLength!==k||c.pointLength!==t||c.spotLength!==
r||c.rectAreaLength!==u||c.hemiLength!==n||c.numDirectionalShadows!==w||c.numPointShadows!==E||c.numSpotShadows!==S)b.directional.length=k,b.spot.length=r,b.rectArea.length=u,b.point.length=t,b.hemi.length=n,b.directionalShadowMap.length=w,b.pointShadowMap.length=E,b.spotShadowMap.length=S,b.directionalShadowMatrix.length=w,b.pointShadowMatrix.length=E,b.spotShadowMatrix.length=S,c.directionalLength=k,c.pointLength=t,c.spotLength=r,c.rectAreaLength=u,c.hemiLength=n,c.numDirectionalShadows=w,c.numPointShadows=
E,c.numSpotShadows=S,b.version=Bk++},state:b}}function Sh(){var a=new Ak,b=[],c=[];return{init:function(){b.length=0;c.length=0},state:{lightsArray:b,shadowsArray:c,lights:a},setupLights:function(d){a.setup(b,c,d)},pushLight:function(a){b.push(a)},pushShadow:function(a){c.push(a)}}}function Ck(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c)}var b=new WeakMap;return{get:function(c,d){if(!1===b.has(c)){var e=new Sh;b.set(c,new WeakMap);b.get(c).set(d,e);c.addEventListener("dispose",
a)}else!1===b.get(c).has(d)?(e=new Sh,b.get(c).set(d,e)):e=b.get(c).get(d);return e},dispose:function(){b=new WeakMap}}}function Eb(a){K.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.setValues(a)}function Fb(a){K.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new n;this.nearDistance=
1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.fog=!1;this.setValues(a)}function Th(a,b,c){function d(a,b,c){c=a<<0|b<<1|c<<2;var d=p[c];void 0===d&&(d=new Eb({depthPacking:3201,morphTargets:a,skinning:b}),p[c]=d);return d}function e(a,b,c){c=a<<0|b<<1|c<<2;var d=h[c];void 0===d&&(d=new Fb({morphTargets:a,skinning:b}),h[c]=d);return d}function f(b,c,f,g,k,l){var m=b.geometry,p=d,x=b.customDepthMaterial;
!0===f.isPointLight&&(p=e,x=b.customDistanceMaterial);void 0===x?(x=!1,!0===c.morphTargets&&(!0===m.isBufferGeometry?x=m.morphAttributes&&m.morphAttributes.position&&0<m.morphAttributes.position.length:!0===m.isGeometry&&(x=m.morphTargets&&0<m.morphTargets.length)),m=!1,!0===b.isSkinnedMesh&&(!0===c.skinning?m=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b)),b=p(x,m,!0===b.isInstancedMesh)):b=x;a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&
(x=b.uuid,p=c.uuid,m=t[x],void 0===m&&(m={},t[x]=m),x=m[p],void 0===x&&(x=b.clone(),m[p]=x),b=x);b.visible=c.visible;b.wireframe=c.wireframe;b.side=3===l?null!==c.shadowSide?c.shadowSide:c.side:null!==c.shadowSide?c.shadowSide:r[c.side];b.clipShadows=c.clipShadows;b.clippingPlanes=c.clippingPlanes;b.clipIntersection=c.clipIntersection;b.wireframeLinewidth=c.wireframeLinewidth;b.linewidth=c.linewidth;!0===f.isPointLight&&!0===b.isMeshDistanceMaterial&&(b.referencePosition.setFromMatrixPosition(f.matrixWorld),
b.nearDistance=g,b.farDistance=k);return b}function g(c,d,e,l,m){if(!1!==c.visible){if(c.layers.test(d.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&3===m)&&(!c.frustumCulled||k.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,c.matrixWorld);var p=b.update(c),x=c.material;if(Array.isArray(x))for(var h=p.groups,r=0,q=h.length;r<q;r++){var u=h[r],t=x[u.materialIndex];t&&t.visible&&(t=f(c,t,l,e.near,e.far,m),a.renderBufferDirect(e,null,p,t,c,
u))}else x.visible&&(t=f(c,x,l,e.near,e.far,m),a.renderBufferDirect(e,null,p,t,c,null))}c=c.children;p=0;for(x=c.length;p<x;p++)g(c[p],d,e,l,m)}}var k=new Fd,l=new v,m=new v,x=new ia,p=[],h=[],t={},r={0:1,1:0,2:2},u=new pa({defines:{SAMPLE_RATE:.25,HALF_SAMPLE_RATE:.125},uniforms:{shadow_pass:{value:null},resolution:{value:new v},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),
n=u.clone();n.defines.HORIZONAL_PASS=1;var w=new z;w.setAttribute("position",new M(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var E=new U(w,u),S=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(d,e,f){if(!1!==S.enabled&&(!1!==S.autoUpdate||!1!==S.needsUpdate)&&0!==d.length){var p=a.getRenderTarget(),h=a.getActiveCubeFace(),r=a.getActiveMipmapLevel(),q=a.state;q.setBlending(0);q.buffers.color.setClear(1,1,1,1);q.buffers.depth.setTest(!0);q.setScissorTest(!1);
for(var t=0,y=d.length;t<y;t++){var A=d[t],w=A.shadow;if(void 0===w)console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");else{l.copy(w.mapSize);var v=w.getFrameExtents();l.multiply(v);m.copy(w.mapSize);if(l.x>c||l.y>c)console.warn("THREE.WebGLShadowMap:",A,"has shadow exceeding max texture size, reducing"),l.x>c&&(m.x=Math.floor(c/v.x),l.x=m.x*v.x,w.mapSize.x=m.x),l.y>c&&(m.y=Math.floor(c/v.y),l.y=m.y*v.y,w.mapSize.y=m.y);null!==w.map||w.isPointLightShadow||3!==this.type||(v={minFilter:1006,magFilter:1006,
format:1023},w.map=new wa(l.x,l.y,v),w.map.texture.name=A.name+".shadowMap",w.mapPass=new wa(l.x,l.y,v),w.camera.updateProjectionMatrix());null===w.map&&(v={minFilter:1003,magFilter:1003,format:1023},w.map=new wa(l.x,l.y,v),w.map.texture.name=A.name+".shadowMap",w.camera.updateProjectionMatrix());a.setRenderTarget(w.map);a.clear();v=w.getViewportCount();for(var za=0;za<v;za++){var V=w.getViewport(za);x.set(m.x*V.x,m.y*V.y,m.x*V.z,m.y*V.w);q.viewport(x);w.updateMatrices(A,za);k=w.getFrustum();g(e,
f,w.camera,A,this.type)}w.isPointLightShadow||3!==this.type||(A=w,w=f,v=b.update(E),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(w,null,v,u,E,null),n.uniforms.shadow_pass.value=A.mapPass.texture,n.uniforms.resolution.value=A.mapSize,n.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(w,null,v,n,E,null))}}S.needsUpdate=!1;a.setRenderTarget(p,
h,r)}}}function Dk(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,10240,9728);for(b=0;b<d;b++)a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);return f}function e(c,d){n[c]=1;0===w[c]&&(a.enableVertexAttribArray(c),w[c]=1);E[c]!==d&&((h?a:b.get("ANGLE_instanced_arrays"))[h?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,d),E[c]=d)}function f(b){!0!==v[b]&&(a.enable(b),v[b]=!0)}function g(b){!1!==v[b]&&(a.disable(b),
v[b]=!1)}function k(b,c,d,e,k,l,m,p){if(0===b)A&&(g(3042),A=!1);else if(A||(f(3042),A=!0),5!==b){if(b!==za||p!==B){if(100!==D||100!==F)a.blendEquation(32774),F=D=100;if(p)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);
break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}G=C=ra=Kd=null;za=b;B=p}}else{k=k||c;l=l||d;m=m||e;if(c!==D||k!==F)a.blendEquationSeparate(Ic[c],Ic[k]),D=c,F=k;if(d!==Kd||e!==ra||l!==C||m!==G)a.blendFuncSeparate(J[d],J[e],J[l],J[m]),Kd=d,ra=e,C=l,G=m;za=b;B=null}}function l(b){z!==b&&(b?a.frontFace(2304):a.frontFace(2305),z=b)}function m(b){0!==b?(f(2884),b!==H&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):
g(2884);H=b}function x(b,c,d){if(b){if(f(32823),M!==c||N!==d)a.polygonOffset(c,d),M=c,N=d}else g(32823)}function p(b){void 0===b&&(b=33984+fa-1);L!==b&&(a.activeTexture(b),L=b)}var h=c.isWebGL2,t=new function(){var b=!1,c=new ia,d=null,e=new ia(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,k){!0===k&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(-1,
0,0,0)}}},r=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function(a){a?f(2929):g(2929)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);d=b}},setLocked:function(a){b=
a},setClear:function(b){e!==b&&(a.clearDepth(b),e=b)},reset:function(){b=!1;e=d=c=null}}},u=new function(){var b=!1,c=null,d=null,e=null,k=null,l=null,m=null,p=null,x=null;return{setTest:function(a){b||(a?f(2960):g(2960))},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,f){if(d!==b||e!==c||k!==f)a.stencilFunc(b,c,f),d=b,e=c,k=f},setOp:function(b,c,d){if(l!==b||m!==c||p!==d)a.stencilOp(b,c,d),l=b,m=c,p=d},setLocked:function(a){b=a},setClear:function(b){x!==b&&(a.clearStencil(b),
x=b)},reset:function(){b=!1;x=p=m=l=k=e=d=c=null}}};c=a.getParameter(34921);var n=new Uint8Array(c),w=new Uint8Array(c),E=new Uint8Array(c),v={},V=null,A=null,za=null,D=null,Kd=null,ra=null,F=null,C=null,G=null,B=!1,z=null,H=null,K=null,M=null,N=null,fa=a.getParameter(35661),ha=!1;c=0;c=a.getParameter(7938);-1!==c.indexOf("WebGL")?(c=parseFloat(/^WebGL ([0-9])/.exec(c)[1]),ha=1<=c):-1!==c.indexOf("OpenGL ES")&&(c=parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]),ha=2<=c);var L=null,Md={},X=new ia,Uh=new ia,
mg={};mg[3553]=d(3553,3553,1);mg[34067]=d(34067,34069,6);t.setClear(0,0,0,1);r.setClear(1);u.setClear(0);f(2929);r.setFunc(3);l(!1);m(1);f(2884);k(0);var Ic={100:32774,101:32778,102:32779};h?(Ic[103]=32775,Ic[104]=32776):(c=b.get("EXT_blend_minmax"),null!==c&&(Ic[103]=c.MIN_EXT,Ic[104]=c.MAX_EXT));var J={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};return{buffers:{color:t,depth:r,stencil:u},initAttributes:function(){for(var a=0,b=n.length;a<b;a++)n[a]=0},enableAttribute:function(a){e(a,
0)},enableAttributeAndDivisor:e,disableUnusedAttributes:function(){for(var b=0,c=w.length;b!==c;++b)w[b]!==n[b]&&(a.disableVertexAttribArray(b),w[b]=0)},enable:f,disable:g,useProgram:function(b){return V!==b?(a.useProgram(b),V=b,!0):!1},setBlending:k,setMaterial:function(a,b){2===a.side?g(2884):f(2884);var c=1===a.side;b&&(c=!c);l(c);1===a.blending&&!1===a.transparent?k(0):k(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha);
r.setFunc(a.depthFunc);r.setTest(a.depthTest);r.setMask(a.depthWrite);t.setMask(a.colorWrite);b=a.stencilWrite;u.setTest(b);b&&(u.setMask(a.stencilWriteMask),u.setFunc(a.stencilFunc,a.stencilRef,a.stencilFuncMask),u.setOp(a.stencilFail,a.stencilZFail,a.stencilZPass));x(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)},setFlipSided:l,setCullFace:m,setLineWidth:function(b){b!==K&&(ha&&a.lineWidth(b),K=b)},setPolygonOffset:x,setScissorTest:function(a){a?f(3089):g(3089)},activeTexture:p,bindTexture:function(b,
c){null===L&&p();var d=Md[L];void 0===d&&(d={type:void 0,texture:void 0},Md[L]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||mg[b]),d.type=b,d.texture=c},unbindTexture:function(){var b=Md[L];void 0!==b&&void 0!==b.type&&(a.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",
Q)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}},scissor:function(b){!1===X.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),X.copy(b))},viewport:function(b){!1===Uh.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),Uh.copy(b))},reset:function(){for(var b=0;b<w.length;b++)1===w[b]&&(a.disableVertexAttribArray(b),w[b]=0);v={};L=null;Md={};H=z=za=V=null;t.reset();r.reset();u.reset()}}}function Ek(a,b,c,d,e,f,g){function k(a,b){return M?new OffscreenCanvas(a,
b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function l(a,b,c,d){var e=1;if(a.width>d||a.height>d)e=d/Math.max(a.width,a.height);if(1>e||!0===b){if("undefined"!==typeof HTMLImageElement&&a instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&a instanceof ImageBitmap)return d=b?L.floorPowerOfTwo:Math.floor,b=d(e*a.width),e=d(e*a.height),void 0===K&&(K=k(b,e)),c=c?k(b,e):K,c.width=b,c.height=e,
c.getContext("2d").drawImage(a,0,0,b,e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+b+"x"+e+")."),c;"data"in a&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").")}return a}function m(a){return L.isPowerOfTwo(a.width)&&L.isPowerOfTwo(a.height)}function x(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function p(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,
f))*Math.LOG2E}function h(c,d,e){if(!1===ra)return d;if(null!==c){if(void 0!==a[c])return a[c];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+c+"'")}c=d;6403===d&&(5126===e&&(c=33326),5131===e&&(c=33325),5121===e&&(c=33321));6407===d&&(5126===e&&(c=34837),5131===e&&(c=34843),5121===e&&(c=32849));6408===d&&(5126===e&&(c=34836),5131===e&&(c=34842),5121===e&&(c=32856));33325===c||33326===c||34842===c||34836===c?b.get("EXT_color_buffer_float"):(34843===c||34837===
c)&&console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");return c}function t(a){return 1003===a||1004===a||1005===a?9728:9729}function r(b){b=b.target;b.removeEventListener("dispose",r);var c=d.get(b);void 0!==c.__webglInit&&(a.deleteTexture(c.__webglTexture),d.remove(b));b.isVideoTexture&&H.delete(b);g.memory.textures--}function u(b){b=b.target;b.removeEventListener("dispose",u);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&
a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLCubeRenderTarget)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);if(b.isWebGLMultiviewRenderTarget){a.deleteTexture(c.__webglColorTexture);a.deleteTexture(c.__webglDepthStencilTexture);g.memory.textures-=2;e=0;for(var f=c.__webglViewFramebuffers.length;e<
f;e++)a.deleteFramebuffer(c.__webglViewFramebuffers[e])}d.remove(b.texture);d.remove(b)}g.memory.textures--}function n(a,b){var e=d.get(a);if(a.isVideoTexture){var f=g.render.frame;H.get(a)!==f&&(H.set(a,f),a.update())}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(e,a,b);return}c.activeTexture(33984+
b);c.bindTexture(3553,e.__webglTexture)}function w(b,e){if(6===b.image.length){var g=d.get(b);if(0<b.version&&g.__version!==b.version){V(g,b);c.activeTexture(33984+e);c.bindTexture(34067,g.__webglTexture);a.pixelStorei(37440,b.flipY);var k=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture);e=b.image[0]&&b.image[0].isDataTexture;for(var r=[],q=0;6>q;q++)r[q]=k||e?e?b.image[q].image:b.image[q]:l(b.image[q],!1,!0,G);var t=r[0],u=m(t)||ra,n=f.convert(b.format),y=f.convert(b.type),w=h(b.internalFormat,
n,y);v(34067,b,u);if(k){for(q=0;6>q;q++){var A=r[q].mipmaps;for(k=0;k<A.length;k++){var X=A[k];1023!==b.format&&1022!==b.format?null!==n?c.compressedTexImage2D(34069+q,k,w,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+q,k,w,X.width,X.height,0,n,y,X.data)}}g.__maxMipLevel=A.length-1}else{A=b.mipmaps;for(q=0;6>q;q++)if(e)for(c.texImage2D(34069+q,0,w,r[q].width,r[q].height,0,n,y,r[q].data),
k=0;k<A.length;k++)X=A[k],X=X.image[q].image,c.texImage2D(34069+q,k+1,w,X.width,X.height,0,n,y,X.data);else for(c.texImage2D(34069+q,0,w,n,y,r[q]),k=0;k<A.length;k++)X=A[k],c.texImage2D(34069+q,k+1,w,n,y,X.image[q]);g.__maxMipLevel=A.length}x(b,u)&&p(34067,b,t.width,t.height);g.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(33984+e),c.bindTexture(34067,g.__webglTexture)}}function E(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture)}function v(c,f,g){g?
(a.texParameteri(c,10242,P[f.wrapS]),a.texParameteri(c,10243,P[f.wrapT]),32879!==c&&35866!==c||a.texParameteri(c,32882,P[f.wrapR]),a.texParameteri(c,10240,fa[f.magFilter]),a.texParameteri(c,10241,fa[f.minFilter])):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),32879!==c&&35866!==c||a.texParameteri(c,32882,33071),1001===f.wrapS&&1001===f.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
a.texParameteri(c,10240,t(f.magFilter)),a.texParameteri(c,10241,t(f.minFilter)),1003!==f.minFilter&&1006!==f.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));!(g=b.get("EXT_texture_filter_anisotropic"))||1015===f.type&&null===b.get("OES_texture_float_linear")||1016===f.type&&null===(ra||b.get("OES_texture_half_float_linear"))||!(1<f.anisotropy||d.get(f).__currentAnisotropy)||(a.texParameterf(c,
g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,e.getMaxAnisotropy())),d.get(f).__currentAnisotropy=f.anisotropy)}function V(b,c){void 0===b.__webglInit&&(b.__webglInit=!0,c.addEventListener("dispose",r),b.__webglTexture=a.createTexture(),g.memory.textures++)}function A(b,d,e){var g=3553;d.isDataTexture2DArray&&(g=35866);d.isDataTexture3D&&(g=32879);V(b,d);c.activeTexture(33984+e);c.bindTexture(g,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,
d.unpackAlignment);e=ra?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==d.minFilter&&1006!==d.minFilter;e=e&&!1===m(d.image);e=l(d.image,e,!1,B);var k=m(e)||ra,r=f.convert(d.format),q=f.convert(d.type),t=h(d.internalFormat,r,q);v(g,d,k);var u=d.mipmaps;if(d.isDepthTexture){t=6402;if(1015===d.type){if(!1===ra)throw Error("Float Depth Texture only supported in WebGL2.0");t=36012}else ra&&(t=33189);1026===d.format&&6402===t&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
d.type=1012,q=f.convert(d.type));1027===d.format&&(t=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=1020,q=f.convert(d.type)));c.texImage2D(3553,0,t,e.width,e.height,0,r,q,null)}else if(d.isDataTexture)if(0<u.length&&k){for(var n=0,y=u.length;n<y;n++){var w=u[n];c.texImage2D(3553,n,t,w.width,w.height,0,r,q,w.data)}d.generateMipmaps=!1;b.__maxMipLevel=u.length-1}else c.texImage2D(3553,0,t,e.width,e.height,0,r,q,e.data),
b.__maxMipLevel=0;else if(d.isCompressedTexture){n=0;for(y=u.length;n<y;n++)w=u[n],1023!==d.format&&1022!==d.format?null!==r?c.compressedTexImage2D(3553,n,t,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,n,t,w.width,w.height,0,r,q,w.data);b.__maxMipLevel=u.length-1}else if(d.isDataTexture2DArray)c.texImage3D(35866,0,t,e.width,e.height,e.depth,0,r,q,e.data),b.__maxMipLevel=0;else if(d.isDataTexture3D)c.texImage3D(32879,
0,t,e.width,e.height,e.depth,0,r,q,e.data),b.__maxMipLevel=0;else if(0<u.length&&k){n=0;for(y=u.length;n<y;n++)w=u[n],c.texImage2D(3553,n,t,r,q,w);d.generateMipmaps=!1;b.__maxMipLevel=u.length-1}else c.texImage2D(3553,0,t,r,q,e),b.__maxMipLevel=0;x(d,k)&&p(g,d,e.width,e.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d)}function za(b,e,g,k){var l=f.convert(e.texture.format),m=f.convert(e.texture.type),p=h(e.texture.internalFormat,l,m);c.texImage2D(k,0,p,e.width,e.height,0,l,m,null);a.bindFramebuffer(36160,
b);a.framebufferTexture2D(36160,g,k,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null)}function D(b,c,d){a.bindRenderbuffer(36161,b);if(c.depthBuffer&&!c.stencilBuffer)d?(d=C(c),a.renderbufferStorageMultisample(36161,d,33189,c.width,c.height)):a.renderbufferStorage(36161,33189,c.width,c.height),a.framebufferRenderbuffer(36160,36096,36161,b);else if(c.depthBuffer&&c.stencilBuffer)d?(d=C(c),a.renderbufferStorageMultisample(36161,d,35056,c.width,c.height)):a.renderbufferStorage(36161,34041,
c.width,c.height),a.framebufferRenderbuffer(36160,33306,36161,b);else{b=f.convert(c.texture.format);var e=f.convert(c.texture.type);b=h(c.texture.internalFormat,b,e);d?(d=C(c),a.renderbufferStorageMultisample(36161,d,b,c.width,c.height)):a.renderbufferStorage(36161,b,c.width,c.height)}a.bindRenderbuffer(36161,null)}function C(a){return ra&&a.isWebGLMultisampleRenderTarget?Math.min(z,a.samples):0}var ra=e.isWebGL2,F=e.maxTextures,G=e.maxCubemapSize,B=e.maxTextureSize,z=e.maxSamples,H=new WeakMap,K,
M=!1;try{M="undefined"!==typeof OffscreenCanvas&&null!==(new OffscreenCanvas(1,1)).getContext("2d")}catch(Md){}var N=0,P={1E3:10497,1001:33071,1002:33648},fa={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987},ha=!1,O=!1;this.allocateTextureUnit=function(){var a=N;a>=F&&console.warn("THREE.WebGLTextures: Trying to use "+a+" texture units while this GPU supports only "+F);N+=1;return a};this.resetTextureUnits=function(){N=0};this.setTexture2D=n;this.setTexture2DArray=function(a,b){var e=
d.get(a);0<a.version&&e.__version!==a.version?A(e,a,b):(c.activeTexture(33984+b),c.bindTexture(35866,e.__webglTexture))};this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?A(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture))};this.setTextureCube=w;this.setTextureCubeDynamic=E;this.setupRenderTarget=function(e){var k=d.get(e),l=d.get(e.texture);e.addEventListener("dispose",u);l.__webglTexture=a.createTexture();g.memory.textures++;var r=!0===e.isWebGLCubeRenderTarget,
q=!0===e.isWebGLMultisampleRenderTarget,t=!0===e.isWebGLMultiviewRenderTarget,w=m(e)||ra;if(r){k.__webglFramebuffer=[];for(var y=0;6>y;y++)k.__webglFramebuffer[y]=a.createFramebuffer()}else if(k.__webglFramebuffer=a.createFramebuffer(),q)if(ra){k.__webglMultisampledFramebuffer=a.createFramebuffer();k.__webglColorRenderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,k.__webglColorRenderbuffer);q=f.convert(e.texture.format);var A=f.convert(e.texture.type);q=h(e.texture.internalFormat,q,A);A=
C(e);a.renderbufferStorageMultisample(36161,A,q,e.width,e.height);a.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer);a.bindRenderbuffer(36161,null);e.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),D(k.__webglDepthRenderbuffer,e,!0));a.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");else if(t){y=e.width;var E=e.height;q=e.numViews;
a.bindFramebuffer(36160,k.__webglFramebuffer);var S=b.get("OVR_multiview2");g.memory.textures+=2;A=a.createTexture();a.bindTexture(35866,A);a.texParameteri(35866,10240,9728);a.texParameteri(35866,10241,9728);a.texImage3D(35866,0,32856,y,E,q,0,6408,5121,null);S.framebufferTextureMultiviewOVR(36160,36064,A,0,0,q);var V=a.createTexture();a.bindTexture(35866,V);a.texParameteri(35866,10240,9728);a.texParameteri(35866,10241,9728);a.texImage3D(35866,0,35056,y,E,q,0,34041,34042,null);S.framebufferTextureMultiviewOVR(36160,
33306,V,0,0,q);E=Array(q);for(y=0;y<q;++y)E[y]=a.createFramebuffer(),a.bindFramebuffer(36160,E[y]),a.framebufferTextureLayer(36160,36064,A,0,y);k.__webglColorTexture=A;k.__webglDepthStencilTexture=V;k.__webglViewFramebuffers=E;a.bindFramebuffer(36160,null);a.bindTexture(35866,null)}if(r){c.bindTexture(34067,l.__webglTexture);v(34067,e.texture,w);for(y=0;6>y;y++)za(k.__webglFramebuffer[y],e,36064,34069+y);x(e.texture,w)&&p(34067,e.texture,e.width,e.height);c.bindTexture(34067,null)}else t||(c.bindTexture(3553,
l.__webglTexture),v(3553,e.texture,w),za(k.__webglFramebuffer,e,36064,3553),x(e.texture,w)&&p(3553,e.texture,e.width,e.height),c.bindTexture(3553,null));if(e.depthBuffer){k=d.get(e);l=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture){if(l)throw Error("target.depthTexture not supported in Cube render targets");if(e&&e.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,k.__webglFramebuffer);if(!e.depthTexture||!e.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
d.get(e.depthTexture).__webglTexture&&e.depthTexture.image.width===e.width&&e.depthTexture.image.height===e.height||(e.depthTexture.image.width=e.width,e.depthTexture.image.height=e.height,e.depthTexture.needsUpdate=!0);n(e.depthTexture,0);k=d.get(e.depthTexture).__webglTexture;if(1026===e.depthTexture.format)a.framebufferTexture2D(36160,36096,3553,k,0);else if(1027===e.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,k,0);else throw Error("Unknown depthTexture format");}else if(l)for(k.__webglDepthbuffer=
[],l=0;6>l;l++)a.bindFramebuffer(36160,k.__webglFramebuffer[l]),k.__webglDepthbuffer[l]=a.createRenderbuffer(),D(k.__webglDepthbuffer[l],e);else a.bindFramebuffer(36160,k.__webglFramebuffer),k.__webglDepthbuffer=a.createRenderbuffer(),D(k.__webglDepthbuffer,e);a.bindFramebuffer(36160,null)}};this.updateRenderTargetMipmap=function(a){var b=a.texture,e=m(a)||ra;if(x(b,e)){e=a.isWebGLCubeRenderTarget?34067:3553;var f=d.get(b).__webglTexture;c.bindTexture(e,f);p(e,b,a.width,a.height);c.bindTexture(e,
null)}};this.updateMultisampleRenderTarget=function(b){if(b.isWebGLMultisampleRenderTarget)if(ra){var c=d.get(b);a.bindFramebuffer(36008,c.__webglMultisampledFramebuffer);a.bindFramebuffer(36009,c.__webglFramebuffer);c=b.width;var e=b.height,f=16384;b.depthBuffer&&(f|=256);b.stencilBuffer&&(f|=1024);a.blitFramebuffer(0,0,c,e,0,0,c,e,f,9728)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")};this.safeSetTexture2D=function(a,b){a&&a.isWebGLRenderTarget&&
(!1===ha&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ha=!0),a=a.texture);n(a,b)};this.safeSetTextureCube=function(a,b){a&&a.isWebGLCubeRenderTarget&&(!1===O&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),O=!0),a=a.texture);a&&a.isCubeTexture||Array.isArray(a.image)&&6===a.image.length?w(a,b):E(a,b)}}function Vh(a,b,c){var d=
c.isWebGL2;return{convert:function(a){if(1009===a)return 5121;if(1017===a)return 32819;if(1018===a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(d)return 5131;var c=b.get("OES_texture_half_float");return null!==c?c.HALF_FLOAT_OES:null}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;
if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(1029===a)return 36244;if(1030===a)return 33319;if(1031===a)return 33320;if(1032===a)return 36248;if(1033===a)return 36249;if(33776===a||33777===a||33778===a||33779===a)if(c=b.get("WEBGL_compressed_texture_s3tc"),null!==c){if(33776===a)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===a)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;
if(35840===a||35841===a||35842===a||35843===a)if(c=b.get("WEBGL_compressed_texture_pvrtc"),null!==c){if(35840===a)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===a)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(36196===a)return c=b.get("WEBGL_compressed_texture_etc1"),null!==c?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(37808===a||37809===a||37810===a||37811===a||37812===a||37813===
a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a)return c=b.get("WEBGL_compressed_texture_astc"),null!==c?a:null;if(1020===a){if(d)return 34042;c=b.get("WEBGL_depth_texture");return null!==c?c.UNSIGNED_INT_24_8_WEBGL:null}}}}function ng(a,b,c,d){wa.call(this,a,b,d);this.stencilBuffer=this.depthBuffer=!1;this.numViews=c}function Fk(a,b){function c(a){if(a.isArrayCamera)return a.cameras;x[0]=a;return x}function d(a){if(void 0===a.isArrayCamera)return!0;a=a.cameras;
if(a.length>t)return!1;for(var b=1,c=a.length;b<c;b++)if(a[0].viewport.z!==a[b].viewport.z||a[0].viewport.w!==a[b].viewport.w)return!1;return!0}var e=a.extensions,f=a.properties,g,k,l,m,x,p,h,t=0;this.isAvailable=function(){if(void 0===h){var a=e.get("OVR_multiview2");if(h=null!==a&&!1===b.getContextAttributes().antialias)for(t=b.getParameter(a.MAX_VIEWS_OVR),g=new ng(0,0,2),p=new v,m=[],l=[],x=[],a=0;a<t;a++)m[a]=new P,l[a]=new ya}return h};this.attachCamera=function(b){if(!1!==d(b)){(k=a.getRenderTarget())?
p.set(k.width,k.height):a.getDrawingBufferSize(p);if(b.isArrayCamera){var c=b.cameras[0].viewport;g.setSize(c.z,c.w);g.setNumViews(b.cameras.length)}else g.setSize(p.x,p.y),g.setNumViews(2);a.setRenderTarget(g)}};this.detachCamera=function(c){if(g===a.getRenderTarget()){a.setRenderTarget(k);var d=g,e=d.numViews,l=f.get(d).__webglViewFramebuffers,m=d.width;d=d.height;if(c.isArrayCamera)for(var x=0;x<e;x++){var h=c.cameras[x].viewport,q=h.x,r=h.y,t=q+h.z;h=r+h.w;b.bindFramebuffer(36008,l[x]);b.blitFramebuffer(0,
0,m,d,q,r,t,h,16384,9728)}else b.bindFramebuffer(36008,l[0]),b.blitFramebuffer(0,0,m,d,0,0,p.x,p.y,16384,9728)}};this.updateCameraProjectionMatricesUniform=function(a,d){a=c(a);for(var e=0;e<a.length;e++)m[e].copy(a[e].projectionMatrix);d.setValue(b,"projectionMatrices",m)};this.updateCameraViewMatricesUniform=function(a,d){a=c(a);for(var e=0;e<a.length;e++)m[e].copy(a[e].matrixWorldInverse);d.setValue(b,"viewMatrices",m)};this.updateObjectMatricesUniforms=function(a,d,e){d=c(d);for(var f=0;f<d.length;f++)m[f].multiplyMatrices(d[f].matrixWorldInverse,
a.matrixWorld),l[f].getNormalMatrix(m[f]);e.setValue(b,"modelViewMatrices",m);e.setValue(b,"normalMatrices",l)}}function Oe(a){qa.call(this);this.cameras=a||[]}function Nd(){G.call(this);this.type="Group"}function Wh(a,b){function c(a){var b=t.get(a.inputSource);b&&b.dispatchEvent({type:a.type})}function d(){t.forEach(function(a,b){a.dispatchEvent({type:"disconnected",data:b});a.visible=!1});t.clear();a.setFramebuffer(null);a.setRenderTarget(a.getRenderTarget());V.stop();k.isPresenting=!1;k.dispatchEvent({type:"sessionend"})}
function e(a){m=a;V.setContext(l);V.start();k.isPresenting=!0;k.dispatchEvent({type:"sessionstart"})}function f(a){for(var b=l.inputSources,c=0;c<h.length;c++)t.set(b[c],h[c]);for(c=0;c<a.removed.length;c++){b=a.removed[c];var d=t.get(b);d&&(d.dispatchEvent({type:"disconnected",data:b}),t.delete(b))}for(c=0;c<a.added.length;c++)b=a.added[c],(d=t.get(b))&&d.dispatchEvent({type:"connected",data:b})}function g(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,a.matrix);
a.matrixWorldInverse.getInverse(a.matrixWorld)}var k=this,l=null,m=null,x="local-floor",p=null,h=[],t=new Map,r=new qa;r.layers.enable(1);r.viewport=new ia;var u=new qa;u.layers.enable(2);u.viewport=new ia;var y=new Oe([r,u]);y.layers.enable(1);y.layers.enable(2);this.isPresenting=this.enabled=!1;this.getController=function(a){var b=h[a];void 0===b&&(b=new Nd,b.matrixAutoUpdate=!1,b.visible=!1,h[a]=b);return b};this.setFramebufferScaleFactor=function(){};this.setReferenceSpaceType=function(a){x=a};
this.getReferenceSpace=function(){return m};this.getSession=function(){return l};this.setSession=function(a){l=a;null!==l&&(l.addEventListener("select",c),l.addEventListener("selectstart",c),l.addEventListener("selectend",c),l.addEventListener("squeeze",c),l.addEventListener("squeezestart",c),l.addEventListener("squeezeend",c),l.addEventListener("end",d),a=b.getContextAttributes(),a=new XRWebGLLayer(l,b,{antialias:a.antialias,alpha:a.alpha,depth:a.depth,stencil:a.stencil}),l.updateRenderState({baseLayer:a}),
l.requestReferenceSpace(x).then(e),l.addEventListener("inputsourceschange",f))};var w=new n,E=new n;this.getCamera=function(a){var b=a.parent,c=y.cameras;g(y,b);for(var d=0;d<c.length;d++)g(c[d],b);a.matrixWorld.copy(y.matrixWorld);a=a.children;d=0;for(b=a.length;d<b;d++)a[d].updateMatrixWorld(!0);w.setFromMatrixPosition(r.matrixWorld);E.setFromMatrixPosition(u.matrixWorld);d=w.distanceTo(E);var e=r.projectionMatrix.elements,f=u.projectionMatrix.elements,k=e[14]/(e[10]-1);a=e[14]/(e[10]+1);b=(e[9]+
1)/e[5];c=(e[9]-1)/e[5];var l=(e[8]-1)/e[0],m=(f[8]+1)/f[0];f=k*l;e=k*m;m=d/(-l+m);l=m*-l;r.matrixWorld.decompose(y.position,y.quaternion,y.scale);y.translateX(l);y.translateZ(m);y.matrixWorld.compose(y.position,y.quaternion,y.scale);y.matrixWorldInverse.getInverse(y.matrixWorld);k+=m;m=a+m;y.projectionMatrix.makePerspective(f-l,e+(d-l),b*a/m*k,c*a/m*k,k,m);return y};var v=null,V=new xh;V.setAnimationLoop(function(b,c){p=c.getViewerPose(m);if(null!==p){var d=p.views,e=l.renderState.baseLayer;a.setFramebuffer(e.framebuffer);
for(var f=0;f<d.length;f++){var g=d[f],k=e.getViewport(g),x=y.cameras[f];x.matrix.fromArray(g.transform.matrix);x.projectionMatrix.fromArray(g.projectionMatrix);x.viewport.set(k.x,k.y,k.width,k.height);0===f&&y.matrix.copy(x.matrix)}}d=l.inputSources;for(f=0;f<h.length;f++){e=h[f];if(g=d[f])if(g=c.getPose(g.targetRaySpace,m),null!==g){e.matrix.fromArray(g.transform.matrix);e.matrix.decompose(e.position,e.rotation,e.scale);e.visible=!0;continue}e.visible=!1}v&&v(b,c)});this.setAnimationLoop=function(a){v=
a};this.dispose=function(){}}function og(a){var b;function c(){sa=new wj(I);Ha=new uj(I,sa,a);!1===Ha.isWebGL2&&(sa.get("WEBGL_depth_texture"),sa.get("OES_texture_float"),sa.get("OES_texture_half_float"),sa.get("OES_texture_half_float_linear"),sa.get("OES_standard_derivatives"),sa.get("OES_element_index_uint"),sa.get("ANGLE_instanced_arrays"));sa.get("OES_texture_float_linear");pa=new Vh(I,sa,Ha);aa=new Dk(I,sa,Ha);aa.scissor(T.copy(ja).multiplyScalar(Q).floor());aa.viewport(X.copy(R).multiplyScalar(Q).floor());
ba=new zj(I);W=new uk;ea=new Ek(I,sa,aa,W,Ha,pa,ba);na=new rj(I);ya=new xj(I,na,ba);ta=new Cj(I,ya,na,ba);Aa=new Bj(I);ua=new tk(z,sa,Ha);xa=new xk;wa=new Ck;oa=new sj(z,aa,ta,A);Ba=new tj(I,sa,ba,Ha);Da=new yj(I,sa,ba,Ha);ba.programs=ua.programs;z.capabilities=Ha;z.extensions=sa;z.properties=W;z.renderLists=xa;z.state=aa;z.info=ba}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");H=!0}function e(){console.log("THREE.WebGLRenderer: Context Restored.");H=!1;c()}function f(a){a=
a.target;a.removeEventListener("dispose",f);g(a);W.remove(a)}function g(a){var b=W.get(a).program;a.program=void 0;void 0!==b&&ua.releaseProgram(b)}function k(a,b){a.render(function(a){z.renderBufferImmediate(a,b)})}function l(a,b,c,d){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isGroup)c=a.renderOrder;else if(a.isLOD)!0===a.autoUpdate&&a.update(b);else if(a.isLight)F.pushLight(a),a.castShadow&&F.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||kg.intersectsSprite(a)){d&&Gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Ld);
var e=ta.update(a),f=a.material;f.visible&&B.push(a,e,f,c,Gb.z,null)}}else if(a.isImmediateRenderObject)d&&Gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Ld),B.push(a,null,a.material,c,Gb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.frame!==ba.render.frame&&(a.skeleton.update(),a.skeleton.frame=ba.render.frame),!a.frustumCulled||kg.intersectsObject(a))if(d&&Gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Ld),e=ta.update(a),f=a.material,Array.isArray(f))for(var g=
e.groups,k=0,m=g.length;k<m;k++){var p=g[k],x=f[p.materialIndex];x&&x.visible&&B.push(a,e,x,c,Gb.z,p)}else f.visible&&B.push(a,e,f,c,Gb.z,null);a=a.children;k=0;for(m=a.length;k<m;k++)l(a[k],b,c,d)}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],k=g.object,l=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera)if(ca=c,la.enabled&&va.isAvailable())x(k,b,c,l,m,g);else for(var p=c.cameras,h=0,q=p.length;h<q;h++){var r=p[h];k.layers.test(r.layers)&&(aa.viewport(X.copy(r.viewport)),
F.setupLights(r),x(k,b,r,l,m,g))}else ca=null,x(k,b,c,l,m,g)}}function x(a,c,d,e,f,g){a.onBeforeRender(z,c,d,e,f,g);F=wa.get(c,ca||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){var l=h(d,c,f,a);aa.setMaterial(f);fa=b=null;ha=!1;k(a,l)}else z.renderBufferDirect(d,c,e,f,a,g);a.onAfterRender(z,c,d,e,f,g);F=wa.get(c,ca||d)}function p(a,b,c){var d=W.get(a),e=F.state.lights,k=e.state.version;c=ua.getParameters(a,
e.state,F.state.shadowsArray,b,Ta.numPlanes,Ta.numIntersection,c);var l=ua.getProgramCacheKey(c),m=d.program,p=!0;if(void 0===m)a.addEventListener("dispose",f);else if(m.cacheKey!==l)g(a);else{if(d.lightsStateVersion!==k)d.lightsStateVersion=k;else if(void 0!==c.shaderID)return;p=!1}p&&(m=ua.acquireProgram(c,l),d.program=m,d.uniforms=c.uniforms,d.environment=a.isMeshStandardMaterial?b.environment:null,d.outputEncoding=z.outputEncoding,a.program=m);c=m.getAttributes();if(a.morphTargets)for(l=a.numSupportedMorphTargets=
0;l<z.maxMorphTargets;l++)0<=c["morphTarget"+l]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(l=a.numSupportedMorphNormals=0;l<z.maxMorphNormals;l++)0<=c["morphNormal"+l]&&a.numSupportedMorphNormals++;c=d.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Ta.numPlanes,d.numIntersection=Ta.numIntersection,c.clippingPlanes=Ta.uniform;d.fog=b.fog;d.needsLights=a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||
a.isShadowMaterial||a.isShaderMaterial&&!0===a.lights;d.lightsStateVersion=k;d.needsLights&&(c.ambientLightColor.value=e.state.ambient,c.lightProbe.value=e.state.probe,c.directionalLights.value=e.state.directional,c.spotLights.value=e.state.spot,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,c.hemisphereLights.value=e.state.hemi,c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=
e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=Db.seqWithValue(a.seq,c);d.uniformsList=a}function h(a,b,c,d){ea.resetTextureUnits();var e=b.fog,f=c.isMeshStandardMaterial?b.environment:null,g=W.get(c),k=F.state.lights;qa&&(lg||a!==Z)&&Ta.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,g,a===Z&&c.id===Ne);c.version===g.__version?void 0===
g.program?p(c,b,d):c.fog&&g.fog!==e?p(c,b,d):g.environment!==f?p(c,b,d):g.needsLights&&g.lightsStateVersion!==k.state.version?p(c,b,d):void 0===g.numClippingPlanes||g.numClippingPlanes===Ta.numPlanes&&g.numIntersection===Ta.numIntersection?g.outputEncoding!==z.outputEncoding&&p(c,b,d):p(c,b,d):(p(c,b,d),g.__version=c.version);var l=!1,m=!1,x=!1;b=g.program;k=b.getUniforms();var h=g.uniforms;aa.useProgram(b.program)&&(x=m=l=!0);c.id!==Ne&&(Ne=c.id,m=!0);if(l||Z!==a){0<b.numMultiviewViews?va.updateCameraProjectionMatricesUniform(a,
k):k.setValue(I,"projectionMatrix",a.projectionMatrix);Ha.logarithmicDepthBuffer&&k.setValue(I,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));Z!==a&&(Z=a,x=m=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshStandardMaterial||c.envMap)l=k.map.cameraPosition,void 0!==l&&l.setValue(I,Gb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial)&&k.setValue(I,
"isOrthographic",!0===a.isOrthographicCamera);if(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)0<b.numMultiviewViews?va.updateCameraViewMatricesUniform(a,k):k.setValue(I,"viewMatrix",a.matrixWorldInverse)}if(c.skinning&&(k.setOptional(I,d,"bindMatrix"),k.setOptional(I,d,"bindMatrixInverse"),l=d.skeleton)){var q=l.bones;if(Ha.floatVertexTextures){if(void 0===l.boneTexture){q=Math.sqrt(4*q.length);
q=L.ceilPowerOfTwo(q);q=Math.max(q,4);var n=new Float32Array(q*q*4);n.set(l.boneMatrices);var u=new $b(n,q,q,1023,1015);l.boneMatrices=n;l.boneTexture=u;l.boneTextureSize=q}k.setValue(I,"boneTexture",l.boneTexture,ea);k.setValue(I,"boneTextureSize",l.boneTextureSize)}else k.setOptional(I,l,"boneMatrices")}if(m||g.receiveShadow!==d.receiveShadow)g.receiveShadow=d.receiveShadow,k.setValue(I,"receiveShadow",d.receiveShadow);if(m){k.setValue(I,"toneMappingExposure",z.toneMappingExposure);k.setValue(I,
"toneMappingWhitePoint",z.toneMappingWhitePoint);g.needsLights&&(m=x,h.ambientLightColor.needsUpdate=m,h.lightProbe.needsUpdate=m,h.directionalLights.needsUpdate=m,h.pointLights.needsUpdate=m,h.spotLights.needsUpdate=m,h.rectAreaLights.needsUpdate=m,h.hemisphereLights.needsUpdate=m);e&&c.fog&&(h.fogColor.value.copy(e.color),e.isFog?(h.fogNear.value=e.near,h.fogFar.value=e.far):e.isFogExp2&&(h.fogDensity.value=e.density));if(c.isMeshBasicMaterial)t(h,c);else if(c.isMeshLambertMaterial)t(h,c),c.emissiveMap&&
(h.emissiveMap.value=c.emissiveMap);else if(c.isMeshToonMaterial)t(h,c),h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1E-4),c.gradientMap&&(h.gradientMap.value=c.gradientMap),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&
(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshPhongMaterial)t(h,c),h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1E-4),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&
h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshStandardMaterial)t(h,c,f),c.isMeshPhysicalMaterial?(r(h,c,f),h.reflectivity.value=c.reflectivity,h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.sheen&&h.sheen.value.copy(c.sheen),c.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),h.clearcoatNormalMap.value=
c.clearcoatNormalMap,1===c.side&&h.clearcoatNormalScale.value.negate()),h.transparency.value=c.transparency):r(h,c,f);else if(c.isMeshMatcapMaterial)t(h,c),c.matcap&&(h.matcap.value=c.matcap),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=
c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshDepthMaterial)t(h,c),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshDistanceMaterial)t(h,c),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias),h.referencePosition.value.copy(c.referencePosition),h.nearDistance.value=
c.nearDistance,h.farDistance.value=c.farDistance;else if(c.isMeshNormalMaterial)t(h,c),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isLineBasicMaterial)h.diffuse.value.copy(c.color),
h.opacity.value=c.opacity,c.isLineDashedMaterial&&(h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale);else if(c.isPointsMaterial){h.diffuse.value.copy(c.color);h.opacity.value=c.opacity;h.size.value=c.size*Q;h.scale.value=.5*J;c.map&&(h.map.value=c.map);c.alphaMap&&(h.alphaMap.value=c.alphaMap);if(c.map)var y=c.map;else c.alphaMap&&(y=c.alphaMap);void 0!==y&&(!0===y.matrixAutoUpdate&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix))}else if(c.isSpriteMaterial){h.diffuse.value.copy(c.color);
h.opacity.value=c.opacity;h.rotation.value=c.rotation;c.map&&(h.map.value=c.map);c.alphaMap&&(h.alphaMap.value=c.alphaMap);if(c.map)var w=c.map;else c.alphaMap&&(w=c.alphaMap);void 0!==w&&(!0===w.matrixAutoUpdate&&w.updateMatrix(),h.uvTransform.value.copy(w.matrix))}else c.isShadowMaterial&&(h.color.value.copy(c.color),h.opacity.value=c.opacity);void 0!==h.ltc_1&&(h.ltc_1.value=C.LTC_1);void 0!==h.ltc_2&&(h.ltc_2.value=C.LTC_2);Db.upload(I,g.uniformsList,h,ea);c.isShaderMaterial&&(c.uniformsNeedUpdate=
!1)}c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(Db.upload(I,g.uniformsList,h,ea),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&k.setValue(I,"center",d.center);0<b.numMultiviewViews?va.updateObjectMatricesUniforms(d,a,k):(k.setValue(I,"modelViewMatrix",d.modelViewMatrix),k.setValue(I,"normalMatrix",d.normalMatrix));k.setValue(I,"modelMatrix",d.matrixWorld);return b}function t(a,b,c){a.opacity.value=b.opacity;b.color&&a.diffuse.value.copy(b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);if(c=b.envMap||c)a.envMap.value=c,a.flipEnvMap.value=c.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio,a.maxMipLevel.value=W.get(c).__maxMipLevel;b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var d=b.map;else b.specularMap?
d=b.specularMap:b.displacementMap?d=b.displacementMap:b.normalMap?d=b.normalMap:b.bumpMap?d=b.bumpMap:b.roughnessMap?d=b.roughnessMap:b.metalnessMap?d=b.metalnessMap:b.alphaMap?d=b.alphaMap:b.emissiveMap&&(d=b.emissiveMap);void 0!==d&&(d.isWebGLRenderTarget&&(d=d.texture),!0===d.matrixAutoUpdate&&d.updateMatrix(),a.uvTransform.value.copy(d.matrix));if(b.aoMap)var e=b.aoMap;else b.lightMap&&(e=b.lightMap);void 0!==e&&(e.isWebGLRenderTarget&&(e=e.texture),!0===e.matrixAutoUpdate&&e.updateMatrix(),a.uv2Transform.value.copy(e.matrix))}
function r(a,b,c){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=
b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);if(b.envMap||c)a.envMapIntensity.value=b.envMapIntensity}a=a||{};var u=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),y=void 0!==a.context?a.context:null,w=void 0!==a.alpha?a.alpha:!1,E=void 0!==a.depth?a.depth:!0,S=void 0!==a.stencil?a.stencil:!0,V=void 0!==a.antialias?a.antialias:!1,A=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,za=void 0!==
a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,D=void 0!==a.powerPreference?a.powerPreference:"default",G=void 0!==a.failIfMajorPerformanceCaveat?a.failIfMajorPerformanceCaveat:!1,B=null,F=null;this.domElement=u;this.debug={checkShaderErrors:!0};this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.outputEncoding=3E3;this.physicallyCorrectLights=!1;this.toneMappingWhitePoint=
this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var z=this,H=!1,K=null,M=0,N=0,O=null,Y=null,Ne=-1;var fa=b=null;var ha=!1;var Z=null,ca=null,X=new ia,T=new ia,da=null,U=u.width,J=u.height,Q=1,ka=null,ma=null,R=new ia(0,0,U,J),ja=new ia(0,0,U,J),jg=!1,kg=new Fd,Ta=new vj,qa=!1,lg=!1,Ld=new P,Gb=new n;try{w={alpha:w,depth:E,stencil:S,antialias:V,premultipliedAlpha:A,preserveDrawingBuffer:za,powerPreference:D,failIfMajorPerformanceCaveat:G,xrCompatible:!0};
u.addEventListener("webglcontextlost",d,!1);u.addEventListener("webglcontextrestored",e,!1);var I=y||u.getContext("webgl",w)||u.getContext("experimental-webgl",w);if(null===I){if(null!==u.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===I.getShaderPrecisionFormat&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(Xh){throw console.error("THREE.WebGLRenderer: "+
Xh.message),Xh;}var sa,Ha,aa,ba,W,ea,na,ya,ta,ua,xa,wa,oa,Aa,Ba,Da,pa;c();var la=new Wh(z,I);this.xr=la;var va=new Fk(z,I),Fa=new Th(z,ta,Ha.maxTextureSize);this.shadowMap=Fa;this.getContext=function(){return I};this.getContextAttributes=function(){return I.getContextAttributes()};this.forceContextLoss=function(){var a=sa.get("WEBGL_lose_context");a&&a.loseContext()};this.forceContextRestore=function(){var a=sa.get("WEBGL_lose_context");a&&a.restoreContext()};this.getPixelRatio=function(){return Q};
this.setPixelRatio=function(a){void 0!==a&&(Q=a,this.setSize(U,J,!1))};this.getSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),a=new v);return a.set(U,J)};this.setSize=function(a,b,c){la.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(U=a,J=b,u.width=Math.floor(a*Q),u.height=Math.floor(b*Q),!1!==c&&(u.style.width=a+"px",u.style.height=b+"px"),this.setViewport(0,0,a,b))};this.getDrawingBufferSize=
function(a){void 0===a&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),a=new v);return a.set(U*Q,J*Q).floor()};this.setDrawingBufferSize=function(a,b,c){U=a;J=b;Q=c;u.width=Math.floor(a*c);u.height=Math.floor(b*c);this.setViewport(0,0,a,b)};this.getCurrentViewport=function(a){void 0===a&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),a=new ia);return a.copy(X)};this.getViewport=function(a){return a.copy(R)};
this.setViewport=function(a,b,c,d){a.isVector4?R.set(a.x,a.y,a.z,a.w):R.set(a,b,c,d);aa.viewport(X.copy(R).multiplyScalar(Q).floor())};this.getScissor=function(a){return a.copy(ja)};this.setScissor=function(a,b,c,d){a.isVector4?ja.set(a.x,a.y,a.z,a.w):ja.set(a,b,c,d);aa.scissor(T.copy(ja).multiplyScalar(Q).floor())};this.getScissorTest=function(){return jg};this.setScissorTest=function(a){aa.setScissorTest(jg=a)};this.setOpaqueSort=function(a){ka=a};this.setTransparentSort=function(a){ma=a};this.getClearColor=
function(){return oa.getClearColor()};this.setClearColor=function(){oa.setClearColor.apply(oa,arguments)};this.getClearAlpha=function(){return oa.getClearAlpha()};this.setClearAlpha=function(){oa.setClearAlpha.apply(oa,arguments)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===c||c)d|=1024;I.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};
this.dispose=function(){u.removeEventListener("webglcontextlost",d,!1);u.removeEventListener("webglcontextrestored",e,!1);xa.dispose();wa.dispose();W.dispose();ta.dispose();la.dispose();Ca.stop()};this.renderBufferImmediate=function(a,b){aa.initAttributes();var c=W.get(a);a.hasPositions&&!c.position&&(c.position=I.createBuffer());a.hasNormals&&!c.normal&&(c.normal=I.createBuffer());a.hasUvs&&!c.uv&&(c.uv=I.createBuffer());a.hasColors&&!c.color&&(c.color=I.createBuffer());b=b.getAttributes();a.hasPositions&&
(I.bindBuffer(34962,c.position),I.bufferData(34962,a.positionArray,35048),aa.enableAttribute(b.position),I.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(I.bindBuffer(34962,c.normal),I.bufferData(34962,a.normalArray,35048),aa.enableAttribute(b.normal),I.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&(I.bindBuffer(34962,c.uv),I.bufferData(34962,a.uvArray,35048),aa.enableAttribute(b.uv),I.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(I.bindBuffer(34962,c.color),I.bufferData(34962,
a.colorArray,35048),aa.enableAttribute(b.color),I.vertexAttribPointer(b.color,3,5126,!1,0,0));aa.disableUnusedAttributes();I.drawArrays(4,0,a.count);a.count=0};var Ga=new nb;this.renderBufferDirect=function(a,c,d,e,f,g){null===c&&(c=Ga);var k=f.isMesh&&0>f.matrixWorld.determinant(),l=h(a,c,e,f);aa.setMaterial(e,k);var m=!1;if(b!==d.id||fa!==l.id||ha!==(!0===e.wireframe))b=d.id,fa=l.id,ha=!0===e.wireframe,m=!0;if(e.morphTargets||e.morphNormals)Aa.update(f,d,e,l),m=!0;a=d.index;c=d.attributes.position;
if(null===a){if(void 0===c||0===c.count)return}else if(0===a.count)return;var p=1;!0===e.wireframe&&(a=ya.getWireframeAttribute(d),p=2);k=Ba;if(null!==a){var x=na.get(a);k=Da;k.setIndex(x)}if(m){if(!1!==Ha.isWebGL2||!f.isInstancedMesh&&!d.isInstancedBufferGeometry||null!==sa.get("ANGLE_instanced_arrays")){aa.initAttributes();m=d.attributes;l=l.getAttributes();var q=e.defaultAttributeValues;for(S in l){var r=l[S];if(0<=r){var t=m[S];if(void 0!==t){var n=t.normalized,u=t.itemSize,y=na.get(t);if(void 0!==
y){var w=y.buffer,A=y.type;y=y.bytesPerElement;if(t.isInterleavedBufferAttribute){var E=t.data,v=E.stride;t=t.offset;E&&E.isInstancedInterleavedBuffer?(aa.enableAttributeAndDivisor(r,E.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=E.meshPerAttribute*E.count)):aa.enableAttribute(r);I.bindBuffer(34962,w);I.vertexAttribPointer(r,u,A,n,v*y,t*y)}else t.isInstancedBufferAttribute?(aa.enableAttributeAndDivisor(r,t.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=
t.meshPerAttribute*t.count)):aa.enableAttribute(r),I.bindBuffer(34962,w),I.vertexAttribPointer(r,u,A,n,0,0)}}else if("instanceMatrix"===S)y=na.get(f.instanceMatrix),void 0!==y&&(w=y.buffer,A=y.type,aa.enableAttributeAndDivisor(r+0,1),aa.enableAttributeAndDivisor(r+1,1),aa.enableAttributeAndDivisor(r+2,1),aa.enableAttributeAndDivisor(r+3,1),I.bindBuffer(34962,w),I.vertexAttribPointer(r+0,4,A,!1,64,0),I.vertexAttribPointer(r+1,4,A,!1,64,16),I.vertexAttribPointer(r+2,4,A,!1,64,32),I.vertexAttribPointer(r+
3,4,A,!1,64,48));else if(void 0!==q&&(n=q[S],void 0!==n))switch(n.length){case 2:I.vertexAttrib2fv(r,n);break;case 3:I.vertexAttrib3fv(r,n);break;case 4:I.vertexAttrib4fv(r,n);break;default:I.vertexAttrib1fv(r,n)}}}aa.disableUnusedAttributes()}null!==a&&I.bindBuffer(34963,x.buffer)}var S=d.drawRange.start*p;m=null!==g?g.start*p:0;x=Math.max(S,m);g=Math.max(0,Math.min(null!==a?a.count:c.count,S+d.drawRange.count*p,m+(null!==g?g.count*p:Infinity))-1-x+1);0!==g&&(f.isMesh?!0===e.wireframe?(aa.setLineWidth(e.wireframeLinewidth*
(null===O?Q:1)),k.setMode(1)):k.setMode(4):f.isLine?(e=e.linewidth,void 0===e&&(e=1),aa.setLineWidth(e*(null===O?Q:1)),f.isLineSegments?k.setMode(1):f.isLineLoop?k.setMode(2):k.setMode(3)):f.isPoints?k.setMode(0):f.isSprite&&k.setMode(4),f.isInstancedMesh?k.renderInstances(d,x,g,f.count):d.isInstancedBufferGeometry?k.renderInstances(d,x,g,d.maxInstancedCount):k.render(x,g))};this.compile=function(a,b){F=wa.get(a,b);F.init();a.traverse(function(a){a.isLight&&(F.pushLight(a),a.castShadow&&F.pushShadow(a))});
F.setupLights(b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)p(b.material[c],a,b);else p(b.material,a,b)})};var Ea=null,Ca=new xh;Ca.setAnimationLoop(function(a){la.isPresenting||Ea&&Ea(a)});"undefined"!==typeof window&&Ca.setContext(window);this.setAnimationLoop=function(a){Ea=a;la.setAnimationLoop(a);Ca.start()};this.render=function(a,c,d,e){if(void 0!==d){console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
var f=d}if(void 0!==e){console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");var g=e}c&&c.isCamera?H||(fa=b=null,ha=!1,Ne=-1,Z=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===c.parent&&c.updateMatrixWorld(),la.enabled&&la.isPresenting&&(c=la.getCamera(c)),F=wa.get(a,c),F.init(),a.onBeforeRender(z,a,c,f||O),Ld.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),kg.setFromMatrix(Ld),lg=this.localClippingEnabled,qa=Ta.init(this.clippingPlanes,
lg,c),B=xa.get(a,c),B.init(),l(a,c,0,z.sortObjects),!0===z.sortObjects&&B.sort(ka,ma),qa&&Ta.beginShadows(),Fa.render(F.state.shadowsArray,a,c),F.setupLights(c),qa&&Ta.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==f&&this.setRenderTarget(f),la.enabled&&va.isAvailable()&&va.attachCamera(c),oa.render(B,a,c,g),d=B.opaque,e=B.transparent,a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,c,f),e.length&&m(e,a,c,f)):(d.length&&m(d,a,c),e.length&&m(e,a,c)),a.onAfterRender(z,a,c),null!==
O&&(ea.updateRenderTargetMipmap(O),ea.updateMultisampleRenderTarget(O)),aa.buffers.depth.setTest(!0),aa.buffers.depth.setMask(!0),aa.buffers.color.setMask(!0),aa.setPolygonOffset(!1),la.enabled&&va.isAvailable()&&va.detachCamera(c),F=B=null):console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")};this.setFramebuffer=function(a){K!==a&&null===O&&I.bindFramebuffer(36160,a);K=a};this.getActiveCubeFace=function(){return M};this.getActiveMipmapLevel=function(){return N};
this.getRenderTarget=function(){return O};this.setRenderTarget=function(a,b,c){O=a;M=b;N=c;a&&void 0===W.get(a).__webglFramebuffer&&ea.setupRenderTarget(a);var d=K,e=!1;a?(d=W.get(a).__webglFramebuffer,a.isWebGLCubeRenderTarget?(d=d[b||0],e=!0):d=a.isWebGLMultisampleRenderTarget?W.get(a).__webglMultisampledFramebuffer:d,X.copy(a.viewport),T.copy(a.scissor),da=a.scissorTest):(X.copy(R).multiplyScalar(Q).floor(),T.copy(ja).multiplyScalar(Q).floor(),da=jg);Y!==d&&(I.bindFramebuffer(36160,d),Y=d);aa.viewport(X);
aa.scissor(T);aa.setScissorTest(da);e&&(a=W.get(a.texture),I.framebufferTexture2D(36160,36064,34069+(b||0),a.__webglTexture,c||0))};this.readRenderTargetPixels=function(a,b,c,d,e,f,g){if(a&&a.isWebGLRenderTarget){var k=W.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget&&void 0!==g&&(k=k[g]);if(k){g=!1;k!==Y&&(I.bindFramebuffer(36160,k),g=!0);try{var l=a.texture,m=l.format,h=l.type;1023!==m&&pa.convert(m)!==I.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):
1009===h||pa.convert(h)===I.getParameter(35738)||1015===h&&(Ha.isWebGL2||sa.get("OES_texture_float")||sa.get("WEBGL_color_buffer_float"))||1016===h&&(Ha.isWebGL2?sa.get("EXT_color_buffer_float"):sa.get("EXT_color_buffer_half_float"))?36053===I.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&I.readPixels(b,c,d,e,pa.convert(m),pa.convert(h),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{g&&
I.bindFramebuffer(36160,Y)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")};this.copyFramebufferToTexture=function(a,b,c){void 0===c&&(c=0);var d=Math.pow(2,-c),e=Math.floor(b.image.width*d);d=Math.floor(b.image.height*d);var f=pa.convert(b.format);ea.setTexture2D(b,0);I.copyTexImage2D(3553,c,f,a.x,a.y,e,d,0);aa.unbindTexture()};this.copyTextureToTexture=function(a,b,c,d){var e=b.image.width,f=b.image.height,g=pa.convert(c.format),k=
pa.convert(c.type);ea.setTexture2D(c,0);b.isDataTexture?I.texSubImage2D(3553,d||0,a.x,a.y,e,f,g,k,b.image.data):I.texSubImage2D(3553,d||0,a.x,a.y,g,k,b.image);aa.unbindTexture()};this.initTexture=function(a){ea.setTexture2D(a,0);aa.unbindTexture()};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Pe(a,b){this.name="";this.color=new B(a);this.density=void 0!==b?b:2.5E-4}function Qe(a,b,c){this.name="";this.color=new B(a);this.near=
void 0!==b?b:1;this.far=void 0!==c?c:1E3}function qb(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0}function Od(a,b,c,d){this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function Hb(a){K.call(this);this.type="SpriteMaterial";this.color=new B(16777215);this.alphaMap=this.map=null;this.rotation=0;this.transparent=this.sizeAttenuation=!0;this.setValues(a)}function Pd(a){G.call(this);this.type="Sprite";
if(void 0===Jc){Jc=new z;var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new qb(b,5);Jc.setIndex([0,1,2,0,2,3]);Jc.setAttribute("position",new Od(b,3,0,!1));Jc.setAttribute("uv",new Od(b,2,3,!1))}this.geometry=Jc;this.material=void 0!==a?a:new Hb;this.center=new v(.5,.5)}function Re(a,b,c,d,e,f){Kc.subVectors(a,c).addScalar(.5).multiply(d);void 0!==e?(Qd.x=f*Kc.x-e*Kc.y,Qd.y=e*Kc.x+f*Kc.y):Qd.copy(Kc);a.copy(b);a.x+=Qd.x;a.y+=Qd.y;a.applyMatrix4(Yh)}function Rd(){G.call(this);
this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0}function Sd(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");U.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new P;this.bindMatrixInverse=new P}function Se(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);this.frame=-1;if(void 0===b)this.calculateInverses();
else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new P)}function pg(){G.call(this);this.type="Bone"}function Te(a,b,c){U.call(this,a,b);this.instanceMatrix=new M(new Float32Array(16*c),16);this.count=c}function ka(a){K.call(this);this.type="LineBasicMaterial";this.color=new B(16777215);this.linewidth=1;this.linejoin=this.linecap="round";
this.setValues(a)}function Ja(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");G.call(this);this.type="Line";this.geometry=void 0!==a?a:new z;this.material=void 0!==b?b:new ka}function ma(a,b){Ja.call(this,a,b);this.type="LineSegments"}function Ue(a,b){Ja.call(this,a,b);this.type="LineLoop"}function Ua(a){K.call(this);this.type="PointsMaterial";this.color=new B(16777215);this.alphaMap=this.map=null;this.size=1;this.sizeAttenuation=
!0;this.morphTargets=!1;this.setValues(a)}function Lc(a,b){G.call(this);this.type="Points";this.geometry=void 0!==a?a:new z;this.material=void 0!==b?b:new Ua;this.updateMorphTargets()}function qg(a,b,c,d,e,f,g){var k=rg.distanceSqToPoint(a);k<c&&(c=new n,rg.closestPointToPoint(a,c),c.applyMatrix4(d),a=e.ray.origin.distanceTo(c),a<e.near||a>e.far||f.push({distance:a,distanceToRay:Math.sqrt(k),point:c,index:b,face:null,object:g}))}function sg(a,b,c,d,e,f,g,k,l){ca.call(this,a,b,c,d,e,f,g,k,l);this.format=
void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1}function Mc(a,b,c,d,e,f,g,k,l,m,h,p){ca.call(this,null,f,g,k,l,m,d,e,h,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function Td(a,b,c,d,e,f,g,k,l){ca.call(this,a,b,c,d,e,f,g,k,l);this.needsUpdate=!0}function Ud(a,b,c,d,e,f,g,k,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);ca.call(this,null,d,e,f,g,k,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==k?k:1003;this.generateMipmaps=this.flipY=!1}function Nc(a){z.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},k=["a","b","c"];if(a&&a.isGeometry){var l=a.faces;var m=0;for(d=l.length;m<d;m++){var h=l[m];for(c=0;3>c;c++){var p=h[k[c]];var q=h[k[(c+1)%3]];f[0]=Math.min(p,q);f[1]=Math.max(p,q);p=f[0]+
","+f[1];void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]})}}for(p in g)m=g[p],k=a.vertices[m.index1],b.push(k.x,k.y,k.z),k=a.vertices[m.index2],b.push(k.x,k.y,k.z)}else if(a&&a.isBufferGeometry)if(k=new n,null!==a.index){l=a.attributes.position;h=a.index;var t=a.groups;0===t.length&&(t=[{start:0,count:h.count,materialIndex:0}]);a=0;for(e=t.length;a<e;++a)for(m=t[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)p=h.getX(m+c),q=h.getX(m+(c+1)%3),f[0]=Math.min(p,q),f[1]=Math.max(p,q),p=f[0]+","+
f[1],void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]});for(p in g)m=g[p],k.fromBufferAttribute(l,m.index1),b.push(k.x,k.y,k.z),k.fromBufferAttribute(l,m.index2),b.push(k.x,k.y,k.z)}else for(l=a.attributes.position,m=0,d=l.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,k.fromBufferAttribute(l,g),b.push(k.x,k.y,k.z),g=3*m+(c+1)%3,k.fromBufferAttribute(l,g),b.push(k.x,k.y,k.z);this.setAttribute("position",new D(b,3))}function Vd(a,b,c){N.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,
stacks:c};this.fromBufferGeometry(new Oc(a,b,c));this.mergeVertices()}function Oc(a,b,c){z.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],k=new n,l=new n,m=new n,h=new n,p=new n,q,t;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var r=b+1;for(q=0;q<=c;q++){var u=q/c;for(t=0;t<=b;t++){var y=t/b;a(y,u,l);e.push(l.x,l.y,l.z);0<=y-1E-5?(a(y-1E-5,u,m),h.subVectors(l,m)):(a(y+
1E-5,u,m),h.subVectors(m,l));0<=u-1E-5?(a(y,u-1E-5,m),p.subVectors(l,m)):(a(y,u+1E-5,m),p.subVectors(m,l));k.crossVectors(h,p).normalize();f.push(k.x,k.y,k.z);g.push(y,u)}}for(q=0;q<c;q++)for(t=0;t<b;t++)a=q*r+t+1,k=(q+1)*r+t+1,l=(q+1)*r+t,d.push(q*r+t,a,l),d.push(a,k,l);this.setIndex(d);this.setAttribute("position",new D(e,3));this.setAttribute("normal",new D(f,3));this.setAttribute("uv",new D(g,2))}function Wd(a,b,c,d){N.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,
radius:c,detail:d};this.fromBufferGeometry(new Ga(a,b,c,d));this.mergeVertices()}function Ga(a,b,c,d){function e(a){k.push(a.x,a.y,a.z)}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2]}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5)}z.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var k=[],l=[];(function(a){for(var c=new n,d=new n,g=new n,k=0;k<b.length;k+=3){f(b[k+0],c);f(b[k+1],d);
f(b[k+2],g);var l,m,h=c,w=d,E=g,v=Math.pow(2,a),V=[];for(m=0;m<=v;m++){V[m]=[];var A=h.clone().lerp(E,m/v),z=w.clone().lerp(E,m/v),B=v-m;for(l=0;l<=B;l++)V[m][l]=0===l&&m===v?A:A.clone().lerp(z,l/B)}for(m=0;m<v;m++)for(l=0;l<2*(v-m)-1;l++)h=Math.floor(l/2),0===l%2?(e(V[m][h+1]),e(V[m+1][h]),e(V[m][h])):(e(V[m][h+1]),e(V[m+1][h+1]),e(V[m+1][h]))}})(d);(function(a){for(var b=new n,c=0;c<k.length;c+=3)b.x=k[c+0],b.y=k[c+1],b.z=k[c+2],b.normalize().multiplyScalar(a),k[c+0]=b.x,k[c+1]=b.y,k[c+2]=b.z})(c);
(function(){for(var a=new n,b=0;b<k.length;b+=3)a.x=k[b+0],a.y=k[b+1],a.z=k[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));a=new n;b=new n;for(var c=new n,d=new n,e=new v,f=new v,h=new v,y=0,w=0;y<k.length;y+=9,w+=6){a.set(k[y+0],k[y+1],k[y+2]);b.set(k[y+3],k[y+4],k[y+5]);c.set(k[y+6],k[y+7],k[y+8]);e.set(l[w+0],l[w+1]);f.set(l[w+2],l[w+3]);h.set(l[w+4],l[w+5]);d.copy(a).add(b).add(c).divideScalar(3);var E=Math.atan2(d.z,-d.x);g(e,w+0,a,E);
g(f,w+2,b,E);g(h,w+4,c,E)}for(a=0;a<l.length;a+=6)b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1))})();this.setAttribute("position",new D(k,3));this.setAttribute("normal",new D(k.slice(),3));this.setAttribute("uv",new D(l,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Xd(a,b){N.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pc(a,b));this.mergeVertices()}
function Pc(a,b){Ga.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Yd(a,b){N.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new bc(a,b));this.mergeVertices()}function bc(a,b){Ga.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function Zd(a,b){N.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qc(a,b));this.mergeVertices()}function Qc(a,b){var c=(1+Math.sqrt(5))/2;Ga.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function $d(a,b){N.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rc(a,b));this.mergeVertices()}function Rc(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Ga.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,
6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function ae(a,b,c,d,e,f){N.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new cc(a,b,c,d,e);this.tangents=a.tangents;this.normals=
a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function cc(a,b,c,d,e){function f(e){h=a.getPointAt(e/b,h);var f=g.normals[e];e=g.binormals[e];for(q=0;q<=d;q++){var m=q/d*Math.PI*2,p=Math.sin(m);m=-Math.cos(m);l.x=m*f.x+p*e.x;l.y=m*f.y+p*e.y;l.z=m*f.z+p*e.z;l.normalize();r.push(l.x,l.y,l.z);k.x=h.x+c*l.x;k.y=h.y+c*l.y;k.z=h.z+c*l.z;t.push(k.x,k.y,k.z)}}z.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,
closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var k=new n,l=new n,m=new v,h=new n,p,q,t=[],r=[],u=[],y=[];for(p=0;p<b;p++)f(p);f(!1===e?b:0);for(p=0;p<=b;p++)for(q=0;q<=d;q++)m.x=p/b,m.y=q/d,u.push(m.x,m.y);(function(){for(q=1;q<=b;q++)for(p=1;p<=d;p++){var a=(d+1)*q+(p-1),c=(d+1)*q+p,e=(d+1)*(q-1)+p;y.push((d+1)*(q-1)+(p-1),a,e);y.push(a,c,e)}})();this.setIndex(y);this.setAttribute("position",new D(t,
3));this.setAttribute("normal",new D(r,3));this.setAttribute("uv",new D(u,2))}function be(a,b,c,d,e,f,g){N.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Sc(a,b,c,d,e,f));this.mergeVertices()}function Sc(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*
(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}z.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var k=[],l=[],m=[],h=[],p,q=new n,t=new n,r=new n,u=new n,y=new n,w=new n,v=new n;for(p=0;p<=c;++p){var S=p/c*e*Math.PI*2;g(S,e,f,a,r);g(S+.01,e,f,a,u);w.subVectors(u,r);v.addVectors(u,r);y.crossVectors(w,v);v.crossVectors(y,w);y.normalize();v.normalize();
for(S=0;S<=d;++S){var V=S/d*Math.PI*2,A=-b*Math.cos(V);V=b*Math.sin(V);q.x=r.x+(A*v.x+V*y.x);q.y=r.y+(A*v.y+V*y.y);q.z=r.z+(A*v.z+V*y.z);l.push(q.x,q.y,q.z);t.subVectors(q,r).normalize();m.push(t.x,t.y,t.z);h.push(p/c);h.push(S/d)}}for(S=1;S<=c;S++)for(p=1;p<=d;p++)a=(d+1)*S+(p-1),b=(d+1)*S+p,e=(d+1)*(S-1)+p,k.push((d+1)*(S-1)+(p-1),a,e),k.push(a,b,e);this.setIndex(k);this.setAttribute("position",new D(l,3));this.setAttribute("normal",new D(m,3));this.setAttribute("uv",new D(h,2))}function ce(a,b,
c,d,e){N.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Tc(a,b,c,d,e));this.mergeVertices()}function Tc(a,b,c,d,e){z.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],k=[],l=[],m=new n,h=new n,p=new n,q,t;for(q=0;q<=c;q++)for(t=0;t<=d;t++){var r=t/d*e,u=q/c*
Math.PI*2;h.x=(a+b*Math.cos(u))*Math.cos(r);h.y=(a+b*Math.cos(u))*Math.sin(r);h.z=b*Math.sin(u);g.push(h.x,h.y,h.z);m.x=a*Math.cos(r);m.y=a*Math.sin(r);p.subVectors(h,m).normalize();k.push(p.x,p.y,p.z);l.push(t/d);l.push(q/c)}for(q=1;q<=c;q++)for(t=1;t<=d;t++)a=(d+1)*(q-1)+t-1,b=(d+1)*(q-1)+t,e=(d+1)*q+t,f.push((d+1)*q+t-1,a,e),f.push(a,b,e);this.setIndex(f);this.setAttribute("position",new D(g,3));this.setAttribute("normal",new D(k,3));this.setAttribute("uv",new D(l,2))}function Zh(a,b,c,d,e){for(var f,
g=0,k=b,l=c-d;k<c;k+=d)g+=(a[l]-a[k])*(a[k+1]+a[l+1]),l=k;if(e===0<g)for(e=b;e<c;e+=d)f=$h(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=$h(e,a[e],a[e+1],f);f&&dc(f,f.next)&&(de(f),f=f.next);return f}function ee(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!dc(a,a.next)&&0!==ta(a.prev,a,a.next))a=a.next;else{de(a);a=b=a.prev;if(a===a.next)break;c=!0}}while(c||a!==b);return b}function fe(a,b,c,d,e,f,g){if(a){if(!g&&f){var k=a,l=k;do null===l.z&&(l.z=tg(l.x,l.y,d,e,f)),l.prevZ=l.prev,l=l.nextZ=
l.next;while(l!==k);l.prevZ.nextZ=null;l.prevZ=null;k=l;var m,h,p,q,t=1;do{l=k;var r=k=null;for(h=0;l;){h++;var n=l;for(m=p=0;m<t&&(p++,n=n.nextZ,n);m++);for(q=t;0<p||0<q&&n;)0!==p&&(0===q||!n||l.z<=n.z)?(m=l,l=l.nextZ,p--):(m=n,n=n.nextZ,q--),r?r.nextZ=m:k=m,m.prevZ=r,r=m;l=n}r.nextZ=null;t*=2}while(1<h)}for(k=a;a.prev!==a.next;){l=a.prev;n=a.next;if(f)r=Gk(a,d,e,f);else a:if(r=a,h=r.prev,p=r,t=r.next,0<=ta(h,p,t))r=!1;else{for(m=r.next.next;m!==r.prev;){if(Uc(h.x,h.y,p.x,p.y,t.x,t.y,m.x,m.y)&&0<=
ta(m.prev,m,m.next)){r=!1;break a}m=m.next}r=!0}if(r)b.push(l.i/c),b.push(a.i/c),b.push(n.i/c),de(a),k=a=n.next;else if(a=n,a===k){if(!g)fe(ee(a),b,c,d,e,f,1);else if(1===g){g=b;k=c;l=a;do n=l.prev,r=l.next.next,!dc(n,r)&&ai(n,l,l.next,r)&&ge(n,r)&&ge(r,n)&&(g.push(n.i/k),g.push(l.i/k),g.push(r.i/k),de(l),de(l.next),l=a=r),l=l.next;while(l!==a);a=l;fe(a,b,c,d,e,f,2)}else if(2===g)a:{g=a;do{for(k=g.next.next;k!==g.prev;){if(l=g.i!==k.i){l=g;n=k;if(r=l.next.i!==n.i&&l.prev.i!==n.i){b:{r=l;do{if(r.i!==
l.i&&r.next.i!==l.i&&r.i!==n.i&&r.next.i!==n.i&&ai(r,r.next,l,n)){r=!0;break b}r=r.next}while(r!==l);r=!1}r=!r}if(r=r&&ge(l,n)&&ge(n,l)){r=l;h=!1;p=(l.x+n.x)/2;n=(l.y+n.y)/2;do r.y>n!==r.next.y>n&&r.next.y!==r.y&&p<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(h=!h),r=r.next;while(r!==l);r=h}l=r}if(l){a=bi(g,k);g=ee(g,g.next);a=ee(a,a.next);fe(g,b,c,d,e,f);fe(a,b,c,d,e,f);break a}k=k.next}g=g.next}while(g!==a)}break}}}}function Gk(a,b,c,d){var e=a.prev,f=a.next;if(0<=ta(e,a,f))return!1;var g=e.x>a.x?
e.x>f.x?e.x:f.x:a.x>f.x?a.x:f.x,k=e.y>a.y?e.y>f.y?e.y:f.y:a.y>f.y?a.y:f.y,l=tg(e.x<a.x?e.x<f.x?e.x:f.x:a.x<f.x?a.x:f.x,e.y<a.y?e.y<f.y?e.y:f.y:a.y<f.y?a.y:f.y,b,c,d);b=tg(g,k,b,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=b;){if(c!==a.prev&&c!==a.next&&Uc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=ta(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&Uc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ta(d.prev,d,d.next))return!1;d=d.nextZ}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&Uc(e.x,e.y,a.x,a.y,
f.x,f.y,c.x,c.y)&&0<=ta(c.prev,c,c.next))return!1;c=c.prevZ}for(;d&&d.z<=b;){if(d!==a.prev&&d!==a.next&&Uc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ta(d.prev,d,d.next))return!1;d=d.nextZ}return!0}function Hk(a,b){return a.x-b.x}function Ik(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next}var k=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!k)return null;
if(d===f)return k.prev;b=k;g=k.x;var l=k.y,m=Infinity;for(c=k.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&Uc(e<l?d:f,e,g,l,e<l?f:d,e,c.x,c.y)){var h=Math.abs(e-c.y)/(d-c.x);(h<m||h===m&&c.x>k.x)&&ge(c,a)&&(k=c,m=h)}c=c.next}return k}function tg(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function Jk(a){var b=a,c=a;do{if(b.x<c.x||
b.x===c.x&&b.y<c.y)c=b;b=b.next}while(b!==a);return c}function Uc(a,b,c,d,e,f,g,k){return 0<=(e-g)*(b-k)-(a-g)*(f-k)&&0<=(a-g)*(d-k)-(c-g)*(b-k)&&0<=(c-g)*(f-k)-(e-g)*(d-k)}function ta(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function dc(a,b){return a.x===b.x&&a.y===b.y}function ai(a,b,c,d){return dc(a,c)&&dc(b,d)||dc(a,d)&&dc(c,b)?!0:0<ta(a,b,c)!==0<ta(a,b,d)&&0<ta(c,d,a)!==0<ta(c,d,b)}function ge(a,b){return 0>ta(a.prev,a,a.next)?0<=ta(a,b,a.next)&&0<=ta(a,a.prev,b):0>ta(a,b,a.prev)||
0>ta(a,a.next,b)}function bi(a,b){var c=new ug(a.i,a.x,a.y),d=new ug(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}function $h(a,b,c,d){a=new ug(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function de(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ug(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=
this.prev=null;this.steiner=!1}function ci(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function di(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function ec(a,b){N.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new eb(a,b));this.mergeVertices()}function eb(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function g(a,b,c){var d=a.x-
b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,k=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var l=Math.sqrt(k),m=Math.sqrt(f*f+g*g);k=b.x-e/l;b=b.y+d/l;g=((c.x-g/m-k)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=k+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new v(f,d);e=Math.sqrt(e/2)}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(k)):(f=d,d=e,e=Math.sqrt(k/2));return new v(f/e,d/e)}function k(a,b){for(J=a.length;0<=
--J;){var c=J;var f=J-1;0>f&&(f=a.length-1);var g,k=E+2*D;for(g=0;g<k;g++){var l=Y*g,m=Y*(g+1),h=b+f+l,p=b+f+m;m=b+c+m;r(b+c+l);r(h);r(m);r(h);r(p);r(m);l=e.length/3;l=F.generateSideWallUV(d,e,l-6,l-3,l-2,l-1);u(l[0]);u(l[1]);u(l[3]);u(l[1]);u(l[2]);u(l[3])}}}function l(a,b,c){y.push(a);y.push(b);y.push(c)}function h(a,b,c){r(a);r(b);r(c);a=e.length/3;a=F.generateTopUV(d,e,a-3,a-2,a-1);u(a[0]);u(a[1]);u(a[2])}function r(a){e.push(y[3*a]);e.push(y[3*a+1]);e.push(y[3*a+2])}function u(a){f.push(a.x);
f.push(a.y)}var y=[],w=void 0!==b.curveSegments?b.curveSegments:12,E=void 0!==b.steps?b.steps:1,S=void 0!==b.depth?b.depth:100,V=void 0!==b.bevelEnabled?b.bevelEnabled:!0,A=void 0!==b.bevelThickness?b.bevelThickness:6,z=void 0!==b.bevelSize?b.bevelSize:A-2,B=void 0!==b.bevelOffset?b.bevelOffset:0,D=void 0!==b.bevelSegments?b.bevelSegments:3,C=b.extrudePath,F=void 0!==b.UVGenerator?b.UVGenerator:Kk;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),S=
b.amount);var G=!1;if(C){var H=C.getSpacedPoints(E);G=!0;V=!1;var K=C.computeFrenetFrames(E,!1);var M=new n;var N=new n;var O=new n}V||(B=z=A=D=0);var L;w=a.extractPoints(w);a=w.shape;var P=w.holes;if(!rb.isClockWise(a)){a=a.reverse();var fa=0;for(L=P.length;fa<L;fa++){var ha=P[fa];rb.isClockWise(ha)&&(P[fa]=ha.reverse())}}var Z=rb.triangulateShape(a,P),W=a;fa=0;for(L=P.length;fa<L;fa++)ha=P[fa],a=a.concat(ha);var X,Y=a.length,T,ca=Z.length;w=[];var J=0;var Q=W.length;var U=Q-1;for(X=J+1;J<Q;J++,
U++,X++)U===Q&&(U=0),X===Q&&(X=0),w[J]=g(W[J],W[U],W[X]);C=[];var ea=w.concat();fa=0;for(L=P.length;fa<L;fa++){ha=P[fa];var ba=[];J=0;Q=ha.length;U=Q-1;for(X=J+1;J<Q;J++,U++,X++)U===Q&&(U=0),X===Q&&(X=0),ba[J]=g(ha[J],ha[U],ha[X]);C.push(ba);ea=ea.concat(ba)}for(U=0;U<D;U++){Q=U/D;var da=A*Math.cos(Q*Math.PI/2);X=z*Math.sin(Q*Math.PI/2)+B;J=0;for(Q=W.length;J<Q;J++){var R=c(W[J],w[J],X);l(R.x,R.y,-da)}fa=0;for(L=P.length;fa<L;fa++)for(ha=P[fa],ba=C[fa],J=0,Q=ha.length;J<Q;J++)R=c(ha[J],ba[J],X),l(R.x,
R.y,-da)}X=z+B;for(J=0;J<Y;J++)R=V?c(a[J],ea[J],X):a[J],G?(N.copy(K.normals[0]).multiplyScalar(R.x),M.copy(K.binormals[0]).multiplyScalar(R.y),O.copy(H[0]).add(N).add(M),l(O.x,O.y,O.z)):l(R.x,R.y,0);for(Q=1;Q<=E;Q++)for(J=0;J<Y;J++)R=V?c(a[J],ea[J],X):a[J],G?(N.copy(K.normals[Q]).multiplyScalar(R.x),M.copy(K.binormals[Q]).multiplyScalar(R.y),O.copy(H[Q]).add(N).add(M),l(O.x,O.y,O.z)):l(R.x,R.y,S/E*Q);for(U=D-1;0<=U;U--){Q=U/D;da=A*Math.cos(Q*Math.PI/2);X=z*Math.sin(Q*Math.PI/2)+B;J=0;for(Q=W.length;J<
Q;J++)R=c(W[J],w[J],X),l(R.x,R.y,S+da);fa=0;for(L=P.length;fa<L;fa++)for(ha=P[fa],ba=C[fa],J=0,Q=ha.length;J<Q;J++)R=c(ha[J],ba[J],X),G?l(R.x,R.y+H[E-1].y,H[E-1].x+da):l(R.x,R.y,S+da)}(function(){var a=e.length/3;if(V){var b=0*Y;for(J=0;J<ca;J++)T=Z[J],h(T[2]+b,T[1]+b,T[0]+b);b=Y*(E+2*D);for(J=0;J<ca;J++)T=Z[J],h(T[0]+b,T[1]+b,T[2]+b)}else{for(J=0;J<ca;J++)T=Z[J],h(T[2],T[1],T[0]);for(J=0;J<ca;J++)T=Z[J],h(T[0]+Y*E,T[1]+Y*E,T[2]+Y*E)}d.addGroup(a,e.length/3-a,0)})();(function(){var a=e.length/3,b=
0;k(W,b);b+=W.length;fa=0;for(L=P.length;fa<L;fa++)ha=P[fa],k(ha,b),b+=ha.length;d.addGroup(a,e.length/3-a,1)})()}z.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=Array.isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,k=a.length;g<k;g++)c(a[g]);this.setAttribute("position",new D(e,3));this.setAttribute("uv",new D(f,2));this.computeVertexNormals()}function ei(a,b,c){c.shapes=[];if(Array.isArray(a))for(var d=0,e=a.length;d<e;d++)c.shapes.push(a[d].uuid);else c.shapes.push(a.uuid);
void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c}function he(a,b){N.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Vc(a,b));this.mergeVertices()}function Vc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new N;a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);
void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);eb.call(this,a,b);this.type="TextBufferGeometry"}function ie(a,b,c,d,e,f,g){N.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new fc(a,b,c,d,e,f,g));this.mergeVertices()}function fc(a,b,c,d,e,f,g){z.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,
phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var k=Math.min(f+g,Math.PI),l,m,h=0,p=[],q=new n,t=new n,r=[],u=[],y=[],w=[];for(m=0;m<=c;m++){var v=[],S=m/c,V=0;0==m&&0==f?V=.5/b:m==c&&k==Math.PI&&(V=-.5/b);for(l=0;l<=b;l++){var A=l/b;q.x=-a*Math.cos(d+A*e)*Math.sin(f+S*g);q.y=a*Math.cos(f+S*g);q.z=a*Math.sin(d+A*e)*Math.sin(f+S*g);u.push(q.x,q.y,
q.z);t.copy(q).normalize();y.push(t.x,t.y,t.z);w.push(A+V,1-S);v.push(h++)}p.push(v)}for(m=0;m<c;m++)for(l=0;l<b;l++)a=p[m][l+1],d=p[m][l],e=p[m+1][l],g=p[m+1][l+1],(0!==m||0<f)&&r.push(a,d,g),(m!==c-1||k<Math.PI)&&r.push(d,e,g);this.setIndex(r);this.setAttribute("position",new D(u,3));this.setAttribute("normal",new D(y,3));this.setAttribute("uv",new D(w,2))}function je(a,b,c,d,e,f){N.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,
thetaLength:f};this.fromBufferGeometry(new Wc(a,b,c,d,e,f));this.mergeVertices()}function Wc(a,b,c,d,e,f){z.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],k=[],l=[],m=[],h=a,p=(b-a)/d,q=new n,t=new v,r,u;for(r=0;r<=d;r++){for(u=0;u<=c;u++)a=e+u/c*f,q.x=h*Math.cos(a),q.y=h*Math.sin(a),
k.push(q.x,q.y,q.z),l.push(0,0,1),t.x=(q.x/b+1)/2,t.y=(q.y/b+1)/2,m.push(t.x,t.y);h+=p}for(r=0;r<d;r++)for(b=r*(c+1),u=0;u<c;u++)a=u+b,e=a+c+1,f=a+c+2,h=a+1,g.push(a,e,h),g.push(e,f,h);this.setIndex(g);this.setAttribute("position",new D(k,3));this.setAttribute("normal",new D(l,3));this.setAttribute("uv",new D(m,2))}function ke(a,b,c,d){N.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Xc(a,b,c,d));this.mergeVertices()}function Xc(a,
b,c,d){z.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=L.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],k=1/b,l=new n,m=new v,h;for(h=0;h<=b;h++){var p=c+h*k*d;var q=Math.sin(p),t=Math.cos(p);for(p=0;p<=a.length-1;p++)l.x=a[p].x*q,l.y=a[p].y,l.z=a[p].x*t,f.push(l.x,l.y,l.z),m.x=h/b,m.y=p/(a.length-1),g.push(m.x,m.y)}for(h=0;h<b;h++)for(p=0;p<a.length-1;p++)c=p+h*a.length,k=c+a.length,l=c+a.length+1,m=c+
1,e.push(c,k,m),e.push(k,l,m);this.setIndex(e);this.setAttribute("position",new D(f,3));this.setAttribute("uv",new D(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new n,f=new n,g=new n,c=b*a.length*3,p=h=0;h<a.length;h++,p+=3)e.x=d[p+0],e.y=d[p+1],e.z=d[p+2],f.x=d[c+p+0],f.y=d[c+p+1],f.z=d[c+p+2],g.addVectors(e,f).normalize(),d[p+0]=d[c+p+0]=g.x,d[p+1]=d[c+p+1]=g.y,d[p+2]=d[c+p+2]=g.z}function gc(a,b){N.call(this);this.type="ShapeGeometry";"object"===typeof b&&
(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new hc(a,b));this.mergeVertices()}function hc(a,b){function c(a){var c,k=e.length/3;a=a.extractPoints(b);var m=a.shape,h=a.holes;!1===rb.isClockWise(m)&&(m=m.reverse());a=0;for(c=h.length;a<c;a++){var x=h[a];!0===rb.isClockWise(x)&&(h[a]=x.reverse())}var n=rb.triangulateShape(m,h);a=0;for(c=h.length;a<c;a++)x=h[a],m=m.concat(x);a=0;for(c=m.length;a<
c;a++)x=m[a],e.push(x.x,x.y,0),f.push(0,0,1),g.push(x.x,x.y);a=0;for(c=n.length;a<c;a++)m=n[a],d.push(m[0]+k,m[1]+k,m[2]+k),l+=3}z.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],k=0,l=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(k,l,m),k+=l,l=0;this.setIndex(d);this.setAttribute("position",new D(e,3));this.setAttribute("normal",new D(f,3));this.setAttribute("uv",new D(g,2))}function fi(a,
b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);return b}function Yc(a,b){z.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(L.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new N;g.fromBufferGeometry(a)}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var k=0,l=g.length;k<l;k++)for(var m=g[k],h=0;3>h;h++){var p=
m[f[h]];var q=m[f[(h+1)%3]];d[0]=Math.min(p,q);d[1]=Math.max(p,q);p=d[0]+","+d[1];void 0===e[p]?e[p]={index1:d[0],index2:d[1],face1:k,face2:void 0}:e[p].face2=k}for(p in e)if(d=e[p],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.setAttribute("position",new D(c,3))}function ic(a,b,c,d,e,f,g,k){N.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,
openEnded:f,thetaStart:g,thetaLength:k};this.fromBufferGeometry(new sb(a,b,c,d,e,f,g,k));this.mergeVertices()}function sb(a,b,c,d,e,f,g,k){function l(c){var e,f=new v,l=new n,x=0,u=!0===c?a:b,E=!0===c?1:-1;var z=r;for(e=1;e<=d;e++)p.push(0,y*E,0),q.push(0,E,0),t.push(.5,.5),r++;var F=r;for(e=0;e<=d;e++){var B=e/d*k+g,D=Math.cos(B);B=Math.sin(B);l.x=u*B;l.y=y*E;l.z=u*D;p.push(l.x,l.y,l.z);q.push(0,E,0);f.x=.5*D+.5;f.y=.5*B*E+.5;t.push(f.x,f.y);r++}for(e=0;e<d;e++)f=z+e,l=F+e,!0===c?h.push(l,l+1,f):
h.push(l+1,l,f),x+=3;m.addGroup(w,x,!0===c?1:2);w+=x}z.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:k};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;k=void 0!==k?k:2*Math.PI;var h=[],p=[],q=[],t=[],r=0,u=[],y=c/2,w=0;(function(){var f,l,x=new n,v=new n,z=0,B=(b-a)/c;for(l=0;l<=e;l++){var D=[],C=l/
e,F=C*(b-a)+a;for(f=0;f<=d;f++){var G=f/d,H=G*k+g,K=Math.sin(H);H=Math.cos(H);v.x=F*K;v.y=-C*c+y;v.z=F*H;p.push(v.x,v.y,v.z);x.set(K,B,H).normalize();q.push(x.x,x.y,x.z);t.push(G,1-C);D.push(r++)}u.push(D)}for(f=0;f<d;f++)for(l=0;l<e;l++)x=u[l+1][f],v=u[l+1][f+1],B=u[l][f+1],h.push(u[l][f],x,B),h.push(x,v,B),z+=6;m.addGroup(w,z,0);w+=z})();!1===f&&(0<a&&l(!0),0<b&&l(!1));this.setIndex(h);this.setAttribute("position",new D(p,3));this.setAttribute("normal",new D(q,3));this.setAttribute("uv",new D(t,
2))}function le(a,b,c,d,e,f,g){ic.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function me(a,b,c,d,e,f,g){sb.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function ne(a,b,c,d){N.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,
thetaLength:d};this.fromBufferGeometry(new Zc(a,b,c,d));this.mergeVertices()}function Zc(a,b,c,d){z.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],k=[],l,m=new n,h=new v;f.push(0,0,0);g.push(0,0,1);k.push(.5,.5);var p=0;for(l=3;p<=b;p++,l+=3){var q=c+p/b*d;m.x=a*Math.cos(q);m.y=a*Math.sin(q);f.push(m.x,m.y,m.z);g.push(0,0,1);h.x=(f[l]/a+1)/
2;h.y=(f[l+1]/a+1)/2;k.push(h.x,h.y)}for(l=1;l<=b;l++)e.push(l,l+1,0);this.setIndex(e);this.setAttribute("position",new D(f,3));this.setAttribute("normal",new D(g,3));this.setAttribute("uv",new D(k,2))}function jc(a){K.call(this);this.type="ShadowMaterial";this.color=new B(0);this.transparent=!0;this.setValues(a)}function tb(a){pa.call(this,a);this.type="RawShaderMaterial"}function fb(a){K.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new B(16777215);this.roughness=
1;this.metalness=0;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new B(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=
1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function kc(a){fb.call(this);this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearcoatRoughness=this.clearcoat=0;this.sheen=null;this.clearcoatNormalScale=new v(1,1);this.clearcoatNormalMap=null;this.transparency=0;this.setValues(a)}function Ib(a){K.call(this);this.type="MeshPhongMaterial";this.color=new B(16777215);this.specular=
new B(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new B(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=
1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function lc(a){K.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.color=new B(16777215);this.specular=new B(1118481);this.shininess=30;this.lightMap=this.gradientMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new B(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=
null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=this.specularMap=null;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function mc(a){K.call(this);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=
null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.fog=!1;this.setValues(a)}function nc(a){K.call(this);this.type="MeshLambertMaterial";this.color=new B(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new B(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=
1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function oc(a){K.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new B(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=
0;this.alphaMap=null;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function pc(a){ka.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a)}function Ka(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Ve(a,b,c,d){Ka.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function oe(a,b,c,
d){Ka.call(this,a,b,c,d)}function We(a,b,c,d){Ka.call(this,a,b,c,d)}function ua(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=ba.convertArray(b,this.TimeBufferType);this.values=ba.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation)}function Xe(a,b,c){ua.call(this,a,b,c)}function Ye(a,b,c,d){ua.call(this,a,b,
c,d)}function $c(a,b,c,d){ua.call(this,a,b,c,d)}function Ze(a,b,c,d){Ka.call(this,a,b,c,d)}function pe(a,b,c,d){ua.call(this,a,b,c,d)}function $e(a,b,c,d){ua.call(this,a,b,c,d)}function ad(a,b,c,d){ua.call(this,a,b,c,d)}function Pa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=L.generateUUID();0>this.duration&&this.resetDuration()}function Lk(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return $c;case "vector":case "vector2":case "vector3":case "vector4":return ad;
case "color":return Ye;case "quaternion":return pe;case "bool":case "boolean":return Xe;case "string":return $e}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function Mk(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=Lk(a.type);if(void 0===a.times){var c=[],d=[];ba.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)}function vg(a,b,c){var d=this,e=
!1,f=0,g=0,k=void 0,l=[];this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)};this.resolveURL=function(a){return k?k(a):a};this.setURLModifier=function(a){k=a;return this};this.addHandler=function(a,b){l.push(a,b);return this};
this.removeHandler=function(a){a=l.indexOf(a);-1!==a&&l.splice(a,2);return this};this.getHandler=function(a){for(var b=0,c=l.length;b<c;b+=2){var d=l[b],e=l[b+1];d.global&&(d.lastIndex=0);if(d.test(a))return e}return null}}function Y(a){this.manager=void 0!==a?a:gi;this.crossOrigin="anonymous";this.resourcePath=this.path=""}function Qa(a){Y.call(this,a)}function wg(a){Y.call(this,a)}function xg(a){Y.call(this,a)}function af(a){Y.call(this,a)}function bd(a){Y.call(this,a)}function bf(a){Y.call(this,
a)}function cf(a){Y.call(this,a)}function H(){this.type="Curve";this.arcLengthDivisions=200}function La(a,b,c,d,e,f,g,k){H.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=k||0}function cd(a,b,c,d,e,f){La.call(this,a,b,c,c,d,e,f);this.type="ArcCurve"}function yg(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,k,l){e=l*(g-e);k=l*(k-f);a=f;b=e;c=-3*f+3*g-
2*e-k;d=2*f-2*g+e+k},initNonuniformCatmullRom:function(e,f,g,k,l,m,h){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;k=((g-f)/m-(k-f)/(m+h)+(k-g)/h)*m;a=f;b=e;c=-3*f+3*g-2*e-k;d=2*f-2*g+e+k},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function Aa(a,b,c,d){H.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5}function hi(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function qe(a,b,c,
d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function re(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function Va(a,b,c,d){H.call(this);this.type="CubicBezierCurve";this.v0=a||new v;this.v1=b||new v;this.v2=c||new v;this.v3=d||new v}function gb(a,b,c,d){H.call(this);this.type="CubicBezierCurve3";this.v0=a||new n;this.v1=b||new n;this.v2=c||new n;this.v3=d||new n}function Ea(a,b){H.call(this);this.type="LineCurve";this.v1=a||new v;this.v2=b||new v}function Wa(a,b){H.call(this);
this.type="LineCurve3";this.v1=a||new n;this.v2=b||new n}function Xa(a,b,c){H.call(this);this.type="QuadraticBezierCurve";this.v0=a||new v;this.v1=b||new v;this.v2=c||new v}function hb(a,b,c){H.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new n;this.v1=b||new n;this.v2=c||new n}function Ya(a){H.call(this);this.type="SplineCurve";this.points=a||[]}function ub(){H.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1}function Za(a){ub.call(this);this.type="Path";this.currentPoint=
new v;a&&this.setFromPoints(a)}function Jb(a){Za.call(this,a);this.uuid=L.generateUUID();this.type="Shape";this.holes=[]}function da(a,b){G.call(this);this.type="Light";this.color=new B(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function df(a,b,c){da.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(G.DefaultUp);this.updateMatrix();this.groundColor=new B(b)}function ib(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new v(512,512);this.mapPass=
this.map=null;this.matrix=new P;this._frustum=new Fd;this._frameExtents=new v(1,1);this._viewportCount=1;this._viewports=[new ia(0,0,1,1)]}function ef(){ib.call(this,new qa(50,1,.5,500))}function ff(a,b,c,d,e,f){da.call(this,a,b);this.type="SpotLight";this.position.copy(G.DefaultUp);this.updateMatrix();this.target=new G;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:
Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new ef}function zg(){ib.call(this,new qa(90,1,.5,500));this._frameExtents=new v(4,2);this._viewportCount=6;this._viewports=[new ia(2,1,1,1),new ia(0,1,1,1),new ia(3,1,1,1),new ia(1,1,1,1),new ia(3,0,1,1),new ia(1,0,1,1)];this._cubeDirections=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)];this._cubeUps=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)]}function gf(a,
b,c,d){da.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new zg}function dd(a,b,c,d,e,f){cb.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?
f:2E3;this.updateProjectionMatrix()}function hf(){ib.call(this,new dd(-5,5,5,-5,.5,500))}function jf(a,b){da.call(this,a,b);this.type="DirectionalLight";this.position.copy(G.DefaultUp);this.updateMatrix();this.target=new G;this.shadow=new hf}function kf(a,b){da.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function lf(a,b,c,d){da.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function mf(a){Y.call(this,a);this.textures={}}function nf(){z.call(this);
this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function of(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));M.call(this,a,b,c);this.meshPerAttribute=d||1}function pf(a){Y.call(this,a)}function qf(a){Y.call(this,a)}function Ag(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
Y.call(this,a);this.options=void 0}function Bg(){this.type="ShapePath";this.color=new B;this.subPaths=[];this.currentPath=null}function Cg(a){this.type="Font";this.data=a}function Dg(a){Y.call(this,a)}function rf(a){Y.call(this,a)}function sf(){this.coefficients=[];for(var a=0;9>a;a++)this.coefficients.push(new n)}function $a(a,b){da.call(this,void 0,b);this.sh=void 0!==a?a:new sf}function Eg(a,b,c){$a.call(this,void 0,c);a=(new B).set(a);c=(new B).set(b);b=new n(a.r,a.g,a.b);a=new n(c.r,c.g,c.b);
c=Math.sqrt(Math.PI);var d=c*Math.sqrt(.75);this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d)}function Fg(a,b){$a.call(this,void 0,b);a=(new B).set(a);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI))}function ii(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new qa;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new qa;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=
!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}function Gg(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function Hg(){G.call(this);this.type="AudioListener";this.context=Ig.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0;this._clock=new Gg}function ed(a){G.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=
this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.loopEnd=this.loopStart=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this._pausedAt=this._startedAt=0;this.filters=[]}function Jg(a){ed.call(this,a);this.panner=this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain)}function Kg(a,b){this.analyser=a.context.createAnalyser();
this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function Lg(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function ji(a,b,c){c=c||Ba.parseTrackName(b);this._targetGroup=a;this._bindings=
a.subscribe_(b,c)}function Ba(a,b,c){this.path=b;this.parsedPath=c||Ba.parseTrackName(b);this.node=Ba.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function ki(){this.uuid=L.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length},
get inUse(){return this.total-d.nCachedObjects_}},get bindingsPerObject(){return d._bindings.length}}}function li(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=
2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function Mg(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function tf(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Ng(a,b,c){qb.call(this,
a,b);this.meshPerAttribute=c||1}function mi(a,b,c,d){this.ray=new Ub(a,b);this.near=c||0;this.far=d||Infinity;this.camera=null;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function ni(a,b){return a.distance-b.distance}function Og(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=
a.length;d<e;d++)Og(a[d],b,c,!0)}}function oi(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function pi(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function Pg(a,b){this.min=void 0!==a?a:new v(Infinity,Infinity);this.max=void 0!==b?b:new v(-Infinity,-Infinity)}function Qg(a,b){this.start=void 0!==a?a:new n;this.end=void 0!==b?b:new n}function se(a){G.call(this);this.material=a;this.render=function(){}}
function fd(a,b){G.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new z;b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.setAttribute("position",new D(b,3));b=new ka({fog:!1});this.cone=new ma(a,b);this.add(this.cone);this.update()}function qi(a){var b=[];a&&a.isBone&&b.push(a);for(var c=
0;c<a.children.length;c++)b.push.apply(b,qi(a.children[c]));return b}function gd(a){for(var b=qi(a),c=new z,d=[],e=[],f=new B(0,0,1),g=new B(0,1,0),k=0;k<b.length;k++){var l=b[k];l.parent&&l.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.setAttribute("position",new D(d,3));c.setAttribute("color",new D(e,3));d=new ka({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});ma.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=
!1}function hd(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new fc(b,4,2);b=new Na({wireframe:!0,fog:!1});U.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function id(a,b,c){G.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new bc(b);a.rotateY(.5*Math.PI);this.material=new Na({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");
b=new Float32Array(3*b.count);a.setAttribute("color",new M(b,3));this.add(new U(a,this.material));this.update()}function uf(a,b,c,d){a=a||10;b=b||10;c=new B(void 0!==c?c:4473924);d=new B(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var k=[],l=0,m=0,h=-g;l<=b;l++,h+=f){a.push(-g,0,h,g,0,h);a.push(h,0,-g,h,0,g);var p=l===e?c:d;p.toArray(k,m);m+=3;p.toArray(k,m);m+=3;p.toArray(k,m);m+=3;p.toArray(k,m);m+=3}b=new z;b.setAttribute("position",new D(a,3));b.setAttribute("color",new D(k,3));c=new ka({vertexColors:2});
ma.call(this,b,c)}function vf(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new B(void 0!==e?e:4473924);f=new B(void 0!==f?f:8947848);var g=[],k=[],l;for(l=0;l<=b;l++){var m=l/b*2*Math.PI;var h=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(h,0,m);var p=l&1?e:f;k.push(p.r,p.g,p.b);k.push(p.r,p.g,p.b)}for(l=0;l<=c;l++){p=l&1?e:f;var q=a-a/c*l;for(b=0;b<d;b++)m=b/d*2*Math.PI,h=Math.sin(m)*q,m=Math.cos(m)*q,g.push(h,0,m),k.push(p.r,p.g,p.b),m=(b+1)/d*2*Math.PI,h=Math.sin(m)*q,m=Math.cos(m)*q,g.push(h,
0,m),k.push(p.r,p.g,p.b)}a=new z;a.setAttribute("position",new D(g,3));a.setAttribute("color",new D(k,3));g=new ka({vertexColors:2});ma.call(this,a,g)}function jd(a,b,c){G.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new z;a.setAttribute("position",new D([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new ka({fog:!1});this.lightPlane=new Ja(a,b);this.add(this.lightPlane);a=new z;a.setAttribute("position",new D([0,
0,0,0,0,1],3));this.targetLine=new Ja(a,b);this.add(this.targetLine);this.update()}function te(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===k[a]&&(k[a]=[]);k[a].push(f.length/3-1)}var d=new z,e=new ka({color:16777215,vertexColors:1}),f=[],g=[],k={},l=new B(16755200),m=new B(16711680),h=new B(43775),p=new B(16777215),q=new B(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",
l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",h);b("u2","u3",h);b("u3","u1",h);b("c","t",p);b("p","c",q);b("cn1","cn2",q);b("cn3","cn4",q);b("cf1","cf2",q);b("cf3","cf4",q);d.setAttribute("position",new D(f,3));d.setAttribute("color",new D(g,3));ma.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=
k;this.update()}function ja(a,b,c,d,e,f,g){wf.set(e,f,g).unproject(d);a=b[a];if(void 0!==a)for(c=c.getAttribute("position"),b=0,d=a.length;b<d;b++)c.setXYZ(a[b],wf.x,wf.y,wf.z)}function vb(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new z;d.setIndex(new M(a,1));d.setAttribute("position",new M(c,3));ma.call(this,d,new ka({color:b}));this.matrixAutoUpdate=!1;this.update()}function ue(a,b){this.type="Box3Helper";
this.box=a;b=b||16776960;a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new z;c.setIndex(new M(a,1));c.setAttribute("position",new D([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));ma.call(this,c,new ka({color:b}));this.geometry.computeBoundingSphere()}function ve(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new z;b.setAttribute("position",new D([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,
0,0,1,0,0,0],3));b.computeBoundingSphere();Ja.call(this,b,new ka({color:a}));b=new z;b.setAttribute("position",new D([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new U(b,new Na({color:a,opacity:.2,transparent:!0,depthWrite:!1})))}function wb(a,b,c,d,e,f){G.call(this);void 0===a&&(a=new n(0,0,1));void 0===b&&(b=new n(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===xf&&(xf=new z,xf.setAttribute("position",new D([0,
0,0,0,1,0],3)),Rg=new sb(0,.5,1,5,1),Rg.translate(0,-.5,0));this.position.copy(b);this.line=new Ja(xf,new ka({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new U(Rg,new Na({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function we(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new z;a.setAttribute("position",new D(b,3));a.setAttribute("color",new D([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ka({vertexColors:2});
ma.call(this,a,b)}function Sg(a){Z=a;Tg(yf)}function ri(a){var b={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:a?a.type:1009,format:a?a.format:1023,encoding:a?a.encoding:3002,depthBuffer:!1,stencilBuffer:!1},c=si(b);c.depthBuffer=a?!1:!0;zf=si(b);return c}function ti(){zf.dispose();Z.setRenderTarget(null);var a=Z.getSize(new v);Z.setViewport(0,0,a.x,a.y)}function Tg(a){var b=new nb;b.add(new U(xe[0],a));Z.compile(b,Ug)}function si(a){a=new wa(3*jb,3*jb,a);a.texture.mapping=306;a.texture.name=
"PMREM.cubeUv";a.scissorTest=!0;return a}function Vg(a,b,c,d){var e=1/Z.getPixelRatio();a=(a+.5)*e;b=(b+.5)*e;c=(c+.5)*e;d=(d+.5)*e;Z.setViewport(a,b,c,d);Z.setScissor(a,b,c,d)}function ui(a){var b=Z.autoClear;Z.autoClear=!1;for(var c=1;c<vi;c++)wi(a,c-1,c,Math.sqrt(Af[c]*Af[c]-Af[c-1]*Af[c-1]),xi[(c-1)%xi.length]);Z.autoClear=b}function wi(a,b,c,d,e){yi(a,zf,b,c,d,"latitudinal",e);yi(zf,a,c,c,d,"longitudinal",e)}function yi(a,b,c,d,e,f,g){"latitudinal"!==f&&"longitudinal"!==f&&console.error("blur direction must be either latitudinal or longitudinal!");
var k=new nb;k.add(new U(xe[d],yf));var l=yf.uniforms,m=zi[c]-1;m=isFinite(e)?Math.PI/(2*m):2*Math.PI/39;var h=e/m,p=isFinite(e)?1+Math.floor(3*h):20;20<p&&console.warn("sigmaRadians, "+e+", is too large and will clip, as it requested "+p+" samples when the maximum is set to 20");for(var q=[],n=0,r=0;20>r;++r)e=r/h,e=Math.exp(-e*e/2),q.push(e),0==r?n+=e:r<p&&(n+=2*e);for(r=0;r<q.length;r++)q[r]/=n;l.envMap.value=a.texture;l.samples.value=p;l.weights.value=q;l.latitudinal.value="latitudinal"===f;g&&
(l.poleAxis.value=g);l.dTheta.value=m;l.mipInt.value=8-c;l.inputEncoding.value=kb[a.texture.encoding];l.outputEncoding.value=kb[a.texture.encoding];a=zi[d];e=3*Math.max(0,jb-2*a);d=(0===d?0:2*jb)+2*a*(4<d?d-8+4:0);Z.setRenderTarget(b);Vg(e,d,3*a,2*a);Z.render(k,Ug)}function Ai(){var a=new v(1,1);a=new tb({uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:kb[3E3]},outputEncoding:{value:kb[3E3]}},vertexShader:Wg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n"+
Xg()+"\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="EquirectangularToCubeUV";return a}function Bi(){var a=new tb({uniforms:{envMap:{value:null},inputEncoding:{value:kb[3E3]},outputEncoding:{value:kb[3E3]}},vertexShader:Wg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n"+Xg()+"\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="CubemapToCubeUV";return a}function Wg(){return"\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"}
function Xg(){return"\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"}
function Ci(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Aa.call(this,a);this.type="catmullrom";this.closed=!0}function Di(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Aa.call(this,a);this.type="catmullrom"}function Yg(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");Aa.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,
-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&(Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=
Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b});Object.assign(Fa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,
b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)))},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});for(var xa=[],ye=0;256>ye;ye++)xa[ye]=(16>ye?"0":"")+ye.toString(16);var L={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|
0,d=4294967295*Math.random()|0;return(xa[a&255]+xa[a>>8&255]+xa[a>>16&255]+xa[a>>24&255]+"-"+xa[b&255]+xa[b>>8&255]+"-"+xa[b>>16&15|64]+xa[b>>24&255]+"-"+xa[c&63|128]+xa[c>>8&255]+"-"+xa[c>>16&255]+xa[c>>24&255]+xa[d&255]+xa[d>>8&255]+xa[d>>16&255]+xa[d>>24&255]).toUpperCase()},clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*L.DEG2RAD},radToDeg:function(a){return a*L.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,
Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))},setQuaternionFromProperEuler:function(a,b,c,d,e){var f=Math.cos,g=Math.sin,k=f(c/2);c=g(c/2);var l=f((b+d)/2),m=g((b+d)/2),h=f((b-d)/2),p=g((b-d)/2);f=f((d-b)/2);b=g((d-b)/2);"XYX"===e?a.set(k*m,c*h,c*p,k*l):"YZY"===e?a.set(c*p,k*m,c*h,k*l):"ZXZ"===e?a.set(c*h,c*p,k*m,k*l):"XZX"===e?a.set(k*m,c*b,c*f,k*l):"YXY"===e?a.set(c*f,k*m,c*b,k*l):"ZYZ"===e?a.set(c*b,c*f,k*m,k*l):console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.")}};
Object.defineProperties(v.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(v.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+
a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=
a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,
b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},cross:function(a){return this.x*a.y-this.y*a.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+
Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=
(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);
return this},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this}});Object.assign(ya.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,k,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=k;m[6]=c;m[7]=f;m[8]=l;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;
b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],k=c[4],l=c[7],m=c[2],h=c[5];c=c[8];var p=d[0],q=d[3],n=d[6],
r=d[1],u=d[4],y=d[7],w=d[2],v=d[5];d=d[8];b[0]=a*p+e*r+f*w;b[3]=a*q+e*u+f*v;b[6]=a*n+e*y+f*d;b[1]=g*p+k*r+l*w;b[4]=g*q+k*u+l*v;b[7]=g*n+k*y+l*d;b[2]=m*p+h*r+c*w;b[5]=m*q+h*u+c*v;b[8]=m*n+h*y+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],k=a[6],l=a[7];a=a[8];return b*f*a-b*g*l-c*e*a+c*g*k+d*e*l-d*f*k},getInverse:function(a,
b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],k=c[4],l=c[5],m=c[6],h=c[7];c=c[8];var p=c*k-l*h,q=l*m-c*g,n=h*g-k*m,r=d*p+e*q+f*n;if(0===r){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/r;a[0]=p*b;a[1]=(f*h-c*e)*b;a[2]=(l*e-f*
k)*b;a[3]=q*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-l*d)*b;a[6]=n*b;a[7]=(e*m-h*d)*b;a[8]=(k*d-e*g)*b;return this},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},setUvTransform:function(a,
b,c,d,e,f,g){var k=Math.cos(e);e=Math.sin(e);this.set(c*k,c*e,-c*(k*f+e*g)+f+a,-d*e,d*k,-d*(-e*f+k*g)+g+b,0,0,1)},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],k=c[4],l=c[7];c[0]=b*d+a*g;c[3]=b*e+a*k;c[6]=b*f+a*l;c[1]=-a*d+b*g;c[4]=-a*e+b*k;c[7]=-a*f+b*l;return this},translate:function(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];
c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}});var kd,Kb={getDataURL:function(a){if("undefined"==
typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===kd&&(kd=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));kd.width=a.width;kd.height=a.height;var b=kd.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=kd}return 2048<a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}},mj=0;ca.DEFAULT_IMAGE=void 0;ca.DEFAULT_MAPPING=300;ca.prototype=Object.assign(Object.create(Fa.prototype),
{constructor:ca,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.internalFormat=
a.internalFormat;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];
var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};
if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=L.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(Array.isArray(d)){var e=[];for(var f=0,g=d.length;f<g;f++)e.push(Kb.getDataURL(d[f]))}else e=Kb.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e}}c.image=d.uuid}b||(a.textures[this.uuid]=c);return c},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=
Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y);return a}});Object.defineProperty(ca.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.defineProperties(ia.prototype,{width:{get:function(){return this.z},
set:function(a){this.z=a}},height:{get:function(){return this.w},set:function(a){this.w=a}}});Object.assign(ia.prototype,{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;
break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,
b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*
e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var k=a[2];var l=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-k)&&.01>Math.abs(g-l)){if(.1>Math.abs(c+
e)&&.1>Math.abs(d+k)&&.1>Math.abs(g+l)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+k)/4;g=(g+l)/4;b>f&&b>m?.01>b?(l=0,c=k=.707106781):(l=Math.sqrt(b),k=c/l,c=d/l):f>m?.01>f?(l=.707106781,k=0,c=.707106781):(k=Math.sqrt(f),l=c/k,c=g/k):.01>m?(k=l=.707106781,c=0):(c=Math.sqrt(m),l=d/c,k=g/c);this.set(l,k,c,a);return this}a=Math.sqrt((l-g)*(l-g)+(d-k)*(d-k)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(l-g)/a;this.y=(d-k)/a;this.z=(e-c)/a;
this.w=Math.acos((b+f+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,
this.w));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));this.w=Math.max(a,Math.min(b,this.w));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;
this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},
lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=
this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});wa.prototype=Object.assign(Object.create(Fa.prototype),{constructor:wa,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose();this.viewport.set(0,0,
a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Yf.prototype=Object.assign(Object.create(wa.prototype),{constructor:Yf,isWebGLMultisampleRenderTarget:!0,copy:function(a){wa.prototype.copy.call(this,
a);this.samples=a.samples;return this}});Object.assign(Da,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var k=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var h=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||k!==d||l!==h||m!==p){f=1-g;var q=k*d+l*h+m*p+c*e,n=0<=q?1:-1,r=1-q*q;r>Number.EPSILON&&(r=Math.sqrt(r),q=Math.atan2(r,q*n),f=Math.sin(f*q)/r,g=Math.sin(g*q)/r);n*=g;k=k*f+d*n;l=l*f+h*n;m=m*f+p*n;c=c*f+e*n;f===1-g&&(g=1/Math.sqrt(k*k+l*l+m*m+c*c),k*=g,l*=g,m*=g,c*=g)}a[b]=
k;a[b+1]=l;a[b+2]=m;a[b+3]=c}});Object.defineProperties(Da.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this._onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this._onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this._onChangeCallback()}}});Object.assign(Da.prototype,{isQuaternion:!0,set:function(a,b,c,d){this._x=a;this._y=
b;this._z=c;this._w=d;this._onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this._onChangeCallback();return this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,k=f(c/2),l=f(d/2);f=f(e/2);c=g(c/2);d=g(d/
2);e=g(e/2);"XYZ"===a?(this._x=c*l*f+k*d*e,this._y=k*d*f-c*l*e,this._z=k*l*e+c*d*f,this._w=k*l*f-c*d*e):"YXZ"===a?(this._x=c*l*f+k*d*e,this._y=k*d*f-c*l*e,this._z=k*l*e-c*d*f,this._w=k*l*f+c*d*e):"ZXY"===a?(this._x=c*l*f-k*d*e,this._y=k*d*f+c*l*e,this._z=k*l*e+c*d*f,this._w=k*l*f-c*d*e):"ZYX"===a?(this._x=c*l*f-k*d*e,this._y=k*d*f+c*l*e,this._z=k*l*e-c*d*f,this._w=k*l*f+c*d*e):"YZX"===a?(this._x=c*l*f+k*d*e,this._y=k*d*f+c*l*e,this._z=k*l*e-c*d*f,this._w=k*l*f-c*d*e):"XZY"===a&&(this._x=c*l*f-k*d*
e,this._y=k*d*f-c*l*e,this._z=k*l*e+c*d*f,this._w=k*l*f+c*d*e);!1!==b&&this._onChangeCallback();return this},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this._onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],k=b[2],l=b[6];b=b[10];var m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-k)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+
c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+k)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-k)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+k)/c,this._y=(g+l)/c,this._z=.25*c);this._onChangeCallback();return this},setFromUnitVectors:function(a,b){var c=a.dot(b)+1;1E-6>c?(c=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0):(this._x=0,this._y=-a.z,this._z=a.y)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=
a.x*b.y-a.y*b.x);this._w=c;return this.normalize()},angleTo:function(a){return 2*Math.acos(Math.abs(L.clamp(this.dot(a),-1,1)))},rotateTowards:function(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this},inverse:function(){return this.conjugate()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+
this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this._onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,
b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,k=b._z;b=b._w;this._x=c*b+a*f+d*k-e*g;this._y=d*b+a*g+e*f-c*k;this._z=e*b+a*k+c*g-d*f;this._w=a*b-c*f-d*g-e*k;this._onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=
-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=Number.EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize(),this._onChangeCallback(),this;a=Math.sqrt(a);var k=Math.atan2(a,g);g=Math.sin((1-b)*k)/a;b=Math.sin(b*k)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this._onChangeCallback();return this},equals:function(a){return a._x===
this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this._onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},_onChange:function(a){this._onChangeCallback=a;return this},_onChangeCallback:function(){}});var Zg=new n,Ei=new Da;Object.assign(n.prototype,{isVector3:!0,set:function(a,b,c){this.x=
a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,
b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(a){a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(Ei.setFromEuler(a))},applyAxisAngle:function(a,b){return this.applyQuaternion(Ei.setFromAxisAngle(a,
b))},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyNormalMatrix:function(a){return this.applyMatrix3(a).normalize()},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=
this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var k=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=k*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-k*-g;this.z=m*a+b*-g+k*-f-l*-e;return this},project:function(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)},unproject:function(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+
a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));
this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=
Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*
a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,
b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(a){Zg.copy(this).projectOnVector(a);
return this.sub(Zg)},reflect:function(a){return this.sub(Zg.copy(a).multiplyScalar(2*this.dot(a)))},angleTo:function(a){var b=Math.sqrt(this.lengthSq()*a.lengthSq());0===b&&console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");a=this.dot(a)/b;return Math.acos(L.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-
a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)},setFromSphericalCoords:function(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this},setFromCylindrical:function(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)},setFromCylindricalCoords:function(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this},setFromMatrixPosition:function(a){a=
a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},setFromMatrix3Column:function(a,b){return this.fromArray(a.elements,3*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===
b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}});var ld=new n,W=new P,Nk=new n(0,0,0),Ok=new n(1,1,1),Lb=new n,Bf=new n,la=new n;Object.assign(P.prototype,{isMatrix4:!0,set:function(a,
b,c,d,e,f,g,k,l,m,h,p,q,n,r,u){var x=this.elements;x[0]=a;x[4]=b;x[8]=c;x[12]=d;x[1]=e;x[5]=f;x[9]=g;x[13]=k;x[2]=l;x[6]=m;x[10]=h;x[14]=p;x[3]=q;x[7]=n;x[11]=r;x[15]=u;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new P).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=
a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(a){var b=this.elements,c=a.elements,d=1/ld.setFromMatrixColumn(a,0).length(),e=1/ld.setFromMatrixColumn(a,
1).length();a=1/ld.setFromMatrixColumn(a,2).length();b[0]=c[0]*d;b[1]=c[1]*d;b[2]=c[2]*d;b[3]=0;b[4]=c[4]*e;b[5]=c[5]*e;b[6]=c[6]*e;b[7]=0;b[8]=c[8]*a;b[9]=c[9]*a;b[10]=c[10]*a;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var k=
Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*k;var l=f*e,m=c*k,h=c*e;b[0]=g*k;b[4]=-g*e;b[8]=d;b[1]=l+m*d;b[5]=a-h*d;b[9]=-c*g;b[2]=h-a*d;b[6]=m+l*d;b[10]=f*g}else"YXZ"===a.order?(a=g*k,l=g*e,m=d*k,h=d*e,b[0]=a+h*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*k,b[9]=-c,b[2]=l*c-m,b[6]=h+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*k,l=g*e,m=d*k,h=d*e,b[0]=a-h*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*k,b[9]=h-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*k,l=f*e,m=c*k,h=c*e,b[0]=g*k,b[4]=m*d-l,b[8]=a*d+
h,b[1]=g*e,b[5]=h*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,h=c*d,b[0]=g*k,b[4]=h-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*k,b[9]=-c*k,b[2]=-d*k,b[6]=l*e+m,b[10]=a-h*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,h=c*d,b[0]=g*k,b[4]=-e,b[8]=d*k,b[1]=a*e+h,b[5]=f*k,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*k,b[10]=h*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){return this.compose(Nk,a,Ok)},lookAt:function(a,b,c){var d=this.elements;
la.subVectors(a,b);0===la.lengthSq()&&(la.z=1);la.normalize();Lb.crossVectors(c,la);0===Lb.lengthSq()&&(1===Math.abs(c.z)?la.x+=1E-4:la.z+=1E-4,la.normalize(),Lb.crossVectors(c,la));Lb.normalize();Bf.crossVectors(la,Lb);d[0]=Lb.x;d[4]=Bf.x;d[8]=la.x;d[1]=Lb.y;d[5]=Bf.y;d[9]=la.y;d[2]=Lb.z;d[6]=Bf.z;d[10]=la.z;return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,
b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],k=c[1],l=c[5],m=c[9],h=c[13],p=c[2],q=c[6],n=c[10],r=c[14],u=c[3],y=c[7],w=c[11];c=c[15];var v=d[0],z=d[4],B=d[8],A=d[12],D=d[1],C=d[5],G=d[9],H=d[13],F=d[2],K=d[6],L=d[10],M=d[14],N=d[3],O=d[7],P=d[11];d=d[15];b[0]=a*v+e*D+f*F+g*N;b[4]=a*z+e*C+f*K+g*O;b[8]=a*B+e*G+f*L+g*P;b[12]=a*A+e*H+f*M+g*
d;b[1]=k*v+l*D+m*F+h*N;b[5]=k*z+l*C+m*K+h*O;b[9]=k*B+l*G+m*L+h*P;b[13]=k*A+l*H+m*M+h*d;b[2]=p*v+q*D+n*F+r*N;b[6]=p*z+q*C+n*K+r*O;b[10]=p*B+q*G+n*L+r*P;b[14]=p*A+q*H+n*M+r*d;b[3]=u*v+y*D+w*F+c*N;b[7]=u*z+y*C+w*K+c*O;b[11]=u*B+y*G+w*L+c*P;b[15]=u*A+y*H+w*M+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},determinant:function(){var a=this.elements,
b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],k=a[9],l=a[13],m=a[2],h=a[6],p=a[10],q=a[14];return a[3]*(+e*k*h-d*l*h-e*g*p+c*l*p+d*g*q-c*k*q)+a[7]*(+b*k*q-b*l*p+e*f*p-d*f*q+d*l*m-e*k*m)+a[11]*(+b*l*h-b*g*q-e*f*h+c*f*q+e*g*m-c*l*m)+a[15]*(-d*g*m-b*k*h+b*g*p+d*f*h-c*f*p+c*k*m)},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a,
b,c){var d=this.elements;a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c);return this},getInverse:function(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],k=d[4],l=d[5],m=d[6],h=d[7],p=d[8],q=d[9],n=d[10],r=d[11],u=d[12],y=d[13],w=d[14];d=d[15];var v=q*w*h-y*n*h+y*m*r-l*w*r-q*m*d+l*n*d,z=u*n*h-p*w*h-u*m*r+k*w*r+p*m*d-k*n*d,B=p*y*h-u*q*h+u*l*r-k*y*r-p*l*d+k*q*d,A=u*q*m-p*y*m-u*l*n+k*y*n+p*l*w-k*q*w,D=a*v+e*z+f*B+g*A;if(0===D){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/D;c[0]=v*b;c[1]=(y*n*g-q*w*g-y*f*r+e*w*r+q*f*d-e*n*d)*b;c[2]=(l*w*g-y*m*g+y*f*h-e*w*h-l*f*d+e*m*d)*b;c[3]=(q*m*g-l*n*g-q*f*h+e*n*h+l*f*r-e*m*r)*b;c[4]=z*b;c[5]=(p*w*g-u*n*g+u*f*r-a*w*r-p*f*d+a*n*d)*b;c[6]=(u*m*g-k*w*g-u*f*h+a*w*h+k*f*d-a*m*d)*b;c[7]=(k*n*g-p*m*g+p*f*h-a*n*h-k*f*r+a*m*r)*b;c[8]=B*b;c[9]=(u*q*g-p*y*g-u*e*r+a*y*r+p*e*d-a*q*d)*b;c[10]=(k*y*g-u*l*g+u*e*h-a*y*h-k*e*d+a*l*d)*b;c[11]=
(p*l*g-k*q*g-p*e*h+a*q*h+k*e*r-a*l*r)*b;c[12]=A*b;c[13]=(p*y*f-u*q*f+u*e*n-a*y*n-p*e*w+a*q*w)*b;c[14]=(u*l*f-k*y*f-u*e*m+a*y*m+k*e*w-a*l*w)*b;c[15]=(k*q*f-p*l*f+p*e*m-a*q*m-k*e*n+a*l*n)*b;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],
a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=
Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,k=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,k*f+c,k*a-b*e,0,g*a-b*f,k*a+b*e,d*a*a+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,k=b._w,l=e+e,m=f+f,h=g+g;b=e*l;var p=e*m;e*=h;var n=f*m;f*=h;g*=h;l*=k;m*=k;k*=h;h=c.x;var t=c.y;c=
c.z;d[0]=(1-(n+g))*h;d[1]=(p+k)*h;d[2]=(e-m)*h;d[3]=0;d[4]=(p-k)*t;d[5]=(1-(b+g))*t;d[6]=(f+l)*t;d[7]=0;d[8]=(e+m)*c;d[9]=(f-l)*c;d[10]=(1-(b+n))*c;d[11]=0;d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this},decompose:function(a,b,c){var d=this.elements,e=ld.set(d[0],d[1],d[2]).length(),f=ld.set(d[4],d[5],d[6]).length(),g=ld.set(d[8],d[9],d[10]).length();0>this.determinant()&&(e=-e);a.x=d[12];a.y=d[13];a.z=d[14];W.copy(this);a=1/e;d=1/f;var k=1/g;W.elements[0]*=a;W.elements[1]*=a;W.elements[2]*=a;
W.elements[4]*=d;W.elements[5]*=d;W.elements[6]*=d;W.elements[8]*=k;W.elements[9]*=k;W.elements[10]*=k;b.setFromRotationMatrix(W);c.x=e;c.y=f;c.z=g;return this},makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;
g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,k=1/(b-a),l=1/(c-d),h=1/(f-e);g[0]=2*k;g[4]=0;g[8]=0;g[12]=-((b+a)*k);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*h;g[14]=-((f+e)*h);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,
b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});var Fi=new P,Gi=new Da;Sb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");Sb.DefaultOrder="XYZ";Object.defineProperties(Sb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this._onChangeCallback()}},y:{get:function(){return this._y},
set:function(a){this._y=a;this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this._onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this._onChangeCallback()}}});Object.assign(Sb.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=L.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],k=e[1],l=e[5],h=e[9],n=e[2],p=e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.9999999>Math.abs(g)?(this._x=Math.atan2(-h,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,l),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(g,e),this._z=Math.atan2(k,l)):
(this._y=Math.atan2(-n,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.9999999>Math.abs(p)?(this._y=Math.atan2(-n,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(k,a))):"ZYX"===b?(this._y=Math.asin(-d(n,-1,1)),.9999999>Math.abs(n)?(this._x=Math.atan2(p,e),this._z=Math.atan2(k,a)):(this._x=0,this._z=Math.atan2(-f,l))):"YZX"===b?(this._z=Math.asin(d(k,-1,1)),.9999999>Math.abs(k)?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-n,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=
Math.asin(-d(f,-1,1)),.9999999>Math.abs(f)?(this._x=Math.atan2(p,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-h,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;!1!==c&&this._onChangeCallback();return this},setFromQuaternion:function(a,b,c){Fi.makeRotationFromQuaternion(a);return this.setFromRotationMatrix(Fi,b,c)},setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(a){Gi.setFromEuler(this);return this.setFromQuaternion(Gi,
a)},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z)},_onChange:function(a){this._onChangeCallback=
a;return this},_onChangeCallback:function(){}});Object.assign(Zf.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=this.mask|1<<a|0},enableAll:function(){this.mask=-1},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},disableAll:function(){this.mask=0},test:function(a){return 0!==(this.mask&a.mask)}});var nj=0,Hi=new n,md=new Da,xb=new P,Cf=new n,ze=new n,Pk=new n,Qk=new Da,Ii=new n(1,0,0),Ji=new n(0,1,0),Ki=new n(0,0,1),Rk={type:"added"},Sk={type:"removed"};
G.DefaultUp=new n(0,1,0);G.DefaultMatrixAutoUpdate=!0;G.prototype=Object.assign(Object.create(Fa.prototype),{constructor:G,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrixAutoUpdate&&this.updateMatrix();this.matrix.premultiply(a);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},
setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(a,b){md.setFromAxisAngle(a,b);this.quaternion.multiply(md);return this},rotateOnWorldAxis:function(a,b){md.setFromAxisAngle(a,b);this.quaternion.premultiply(md);return this},rotateX:function(a){return this.rotateOnAxis(Ii,a)},rotateY:function(a){return this.rotateOnAxis(Ji,
a)},rotateZ:function(a){return this.rotateOnAxis(Ki,a)},translateOnAxis:function(a,b){Hi.copy(a).applyQuaternion(this.quaternion);this.position.add(Hi.multiplyScalar(b));return this},translateX:function(a){return this.translateOnAxis(Ii,a)},translateY:function(a){return this.translateOnAxis(Ji,a)},translateZ:function(a){return this.translateOnAxis(Ki,a)},localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(a){return a.applyMatrix4(xb.getInverse(this.matrixWorld))},
lookAt:function(a,b,c){a.isVector3?Cf.copy(a):Cf.set(a,b,c);a=this.parent;this.updateWorldMatrix(!0,!1);ze.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?xb.lookAt(ze,Cf,this.up):xb.lookAt(Cf,ze,this.up);this.quaternion.setFromRotationMatrix(xb);a&&(xb.extractRotation(a.matrixWorld),md.setFromRotationMatrix(xb),this.quaternion.premultiply(md.inverse()))},add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",
a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(Rk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}b=this.children.indexOf(a);-1!==b&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(Sk));return this},attach:function(a){this.updateWorldMatrix(!0,!1);xb.getInverse(this.matrixWorld);
null!==a.parent&&(a.parent.updateWorldMatrix(!0,!1),xb.multiply(a.parent.matrixWorld));a.applyMatrix(xb);a.updateWorldMatrix(!1,!1);this.add(a);return this},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){void 0===
a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new n);this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),a=new Da);this.updateMatrixWorld(!0);this.matrixWorld.decompose(ze,a,Pk);return a},getWorldScale:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new n);this.updateMatrixWorld(!0);
this.matrixWorld.decompose(ze,Qk,a);return a},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new n);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize()},raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},
traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=
0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},updateWorldMatrix:function(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++)a[b].updateWorldMatrix(!1,!0)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=
[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&
(f.renderOrder=this.renderOrder);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);this.isInstancedMesh&&(f.type="InstancedMesh",f.count=this.count,f.instanceMatrix=this.instanceMatrix.toJSON());if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var k=
0,l=g.length;k<l;k++)b(a.shapes,g[k]);else b(a.shapes,g)}if(void 0!==this.material)if(Array.isArray(this.material)){g=[];k=0;for(l=this.material.length;k<l;k++)g.push(b(a.materials,this.material[k]));f.material=g}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],k=0;k<this.children.length;k++)f.children.push(this.children[k].toJSON(a).object);if(d){d=c(a.geometries);k=c(a.materials);l=c(a.textures);var h=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);
0<k.length&&(e.materials=k);0<l.length&&(e.textures=l);0<h.length&&(e.images=h);0<g.length&&(e.shapes=g)}e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;
this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this}});nb.prototype=Object.assign(Object.create(G.prototype),{constructor:nb,isScene:!0,copy:function(a,b){G.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());
null!==a.environment&&(this.environment=a.environment.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=G.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.environment&&(b.object.environment=this.environment.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());
return b},dispose:function(){this.dispatchEvent({type:"dispose"})}});var yb=[new n,new n,new n,new n,new n,new n,new n,new n],Ae=new n,Df=new Ra,nd=new n,od=new n,pd=new n,Mb=new n,Nb=new n,qc=new n,Be=new n,Ef=new n,Ff=new n,Tb=new n;Object.assign(Ra.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,k=0,l=a.length;k<l;k+=3){var h=a[k],n=a[k+1],p=a[k+2];h<b&&(b=
h);n<c&&(c=n);p<d&&(d=p);h>e&&(e=h);n>f&&(f=n);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,k=0,l=a.count;k<l;k++){var h=a.getX(k),n=a.getY(k),p=a.getZ(k);h<b&&(b=h);n<c&&(c=n);p<d&&(d=p);h>e&&(e=h);n>f&&(f=n);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);
return this},setFromCenterAndSize:function(a,b){b=Ae.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this},setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<
this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new n);return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new n);return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(a){a.updateWorldMatrix(!1,!1);var b=a.geometry;void 0!==b&&(null===b.boundingBox&&b.computeBoundingBox(),Df.copy(b.boundingBox),Df.applyMatrix4(a.matrixWorld),this.expandByPoint(Df.min),this.expandByPoint(Df.max));a=a.children;b=0;for(var c=a.length;b<c;b++)this.expandByObject(a[b]);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<
this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new n);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<
this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(a){this.clampPoint(a.center,Ae);return Ae.distanceToSquared(a.center)<=a.radius*a.radius},intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);
0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant},intersectsTriangle:function(a){if(this.isEmpty())return!1;this.getCenter(Be);Ef.subVectors(this.max,Be);nd.subVectors(a.a,Be);od.subVectors(a.b,Be);pd.subVectors(a.c,Be);Mb.subVectors(od,nd);Nb.subVectors(pd,od);qc.subVectors(nd,pd);a=[0,-Mb.z,Mb.y,0,-Nb.z,Nb.y,0,-qc.z,qc.y,Mb.z,0,-Mb.x,Nb.z,0,-Nb.x,qc.z,0,-qc.x,-Mb.y,Mb.x,0,-Nb.y,Nb.x,0,-qc.y,
qc.x,0];if(!$f(a,nd,od,pd,Ef))return!1;a=[1,0,0,0,1,0,0,0,1];if(!$f(a,nd,od,pd,Ef))return!1;Ff.crossVectors(Mb,Nb);a=[Ff.x,Ff.y,Ff.z];return $f(a,nd,od,pd,Ef)},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new n);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){return Ae.copy(a).clamp(this.min,this.max).sub(a).length()},getBoundingSphere:function(a){void 0===a&&console.error("THREE.Box3: .getBoundingSphere() target is now required");
this.getCenter(a.center);a.radius=.5*this.getSize(Ae).length();return a},intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(a){if(this.isEmpty())return this;yb[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);yb[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);yb[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);yb[3].set(this.min.x,
this.max.y,this.max.z).applyMatrix4(a);yb[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);yb[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);yb[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);yb[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);this.setFromPoints(yb);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var Tk=new Ra;Object.assign(ob.prototype,{set:function(a,
b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(a,b){var c=this.center;void 0!==b?c.copy(b):Tk.setFromPoints(a).getCenter(c);for(var d=b=0,e=a.length;d<e;d++)b=Math.max(b,c.distanceToSquared(a[d]));this.radius=Math.sqrt(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),
b=new n);b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b},getBoundingBox:function(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new Ra);a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&
a.radius===this.radius}});var zb=new n,$g=new n,Gf=new n,Ob=new n,ah=new n,Hf=new n,bh=new n;Object.assign(Ub.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),b=new n);return b.copy(this.direction).multiplyScalar(a).add(this.origin)},
lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(a){this.origin.copy(this.at(a,zb));return this},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new n);b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(a){var b=
zb.subVectors(a,this.origin).dot(this.direction);if(0>b)return this.origin.distanceToSquared(a);zb.copy(this.direction).multiplyScalar(b).add(this.origin);return zb.distanceToSquared(a)},distanceSqToSegment:function(a,b,c,d){$g.copy(a).add(b).multiplyScalar(.5);Gf.copy(b).sub(a).normalize();Ob.copy(this.origin).sub($g);var e=.5*a.distanceTo(b),f=-this.direction.dot(Gf),g=Ob.dot(this.direction),k=-Ob.dot(Gf),l=Ob.lengthSq(),h=Math.abs(1-f*f);if(0<h){a=f*k-g;b=f*g-k;var n=e*h;0<=a?b>=-n?b<=n?(e=1/h,
a*=e,b*=e,f=a*(a+f*b+2*g)+b*(f*a+b+2*k)+l):(b=e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*k)+l):(b=-e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*k)+l):b<=-n?(a=Math.max(0,-(-f*e+g)),b=0<a?-e:Math.min(Math.max(-e,-k),e),f=-a*a+b*(b+2*k)+l):b<=n?(a=0,b=Math.min(Math.max(-e,-k),e),f=b*(b+2*k)+l):(a=Math.max(0,-(f*e+g)),b=0<a?e:Math.min(Math.max(-e,-k),e),f=-a*a+b*(b+2*k)+l)}else b=0<f?-e:e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*k)+l;c&&c.copy(this.direction).multiplyScalar(a).add(this.origin);d&&d.copy(Gf).multiplyScalar(b).add($g);
return f},intersectSphere:function(a,b){zb.subVectors(a.center,this.origin);var c=zb.dot(this.direction),d=zb.dot(zb)-c*c;a=a.radius*a.radius;if(d>a)return null;a=Math.sqrt(a-d);d=c-a;c+=a;return 0>d&&0>c?null:0>d?this.at(c,b):this.at(d,b)},intersectsSphere:function(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=
a?a:null},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var k=(a.min.y-f.y)*d;d*=a.max.y-f.y}else k=(a.max.y-f.y)*d,d*=a.min.y-f.y;
if(g>d||k>c)return null;if(k>g||g!==g)g=k;if(d<c||c!==c)c=d;0<=e?(k=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(k=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||k>c)return null;if(k>g||g!==g)g=k;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b)},intersectsBox:function(a){return null!==this.intersectBox(a,zb)},intersectTriangle:function(a,b,c,d,e){ah.subVectors(b,a);Hf.subVectors(c,a);bh.crossVectors(ah,Hf);b=this.direction.dot(bh);if(0<b){if(d)return null;d=1}else if(0>b)d=-1,b=-b;else return null;Ob.subVectors(this.origin,
a);a=d*this.direction.dot(Hf.crossVectors(Ob,Hf));if(0>a)return null;c=d*this.direction.dot(ah.cross(Ob));if(0>c||a+c>b)return null;a=-d*Ob.dot(bh);return 0>a?null:this.at(a/b,e)},applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});var ch=new n,Uk=new n,Vk=new ya;Object.assign(Sa.prototype,{isPlane:!0,set:function(a,b){this.normal.copy(a);this.constant=b;
return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(a,b,c){b=ch.subVectors(c,b).cross(Uk.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(b,a);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=
1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new n);return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(a,
b){void 0===b&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new n);var c=a.delta(ch),d=this.normal.dot(c);if(0===d){if(0===this.distanceToPoint(a.start))return b.copy(a.start)}else if(d=-(a.start.dot(this.normal)+this.constant)/d,!(0>d||1<d))return b.copy(c).multiplyScalar(d).add(a.start)},intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},
coplanarPoint:function(a){void 0===a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new n);return a.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(a,b){b=b||Vk.getNormalMatrix(a);a=this.coplanarPoint(ch).applyMatrix4(a);b=this.normal.applyMatrix3(b).normalize();this.constant=-a.dot(b);return this},translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});
var ab=new n,Ab=new n,dh=new n,Bb=new n,qd=new n,rd=new n,Li=new n,eh=new n,fh=new n,gh=new n;Object.assign(na,{getNormal:function(a,b,c,d){void 0===d&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new n);d.subVectors(c,b);ab.subVectors(a,b);d.cross(ab);a=d.lengthSq();return 0<a?d.multiplyScalar(1/Math.sqrt(a)):d.set(0,0,0)},getBarycoord:function(a,b,c,d,e){ab.subVectors(d,b);Ab.subVectors(c,b);dh.subVectors(a,b);a=ab.dot(ab);b=ab.dot(Ab);c=ab.dot(dh);var f=Ab.dot(Ab);d=Ab.dot(dh);
var g=a*f-b*b;void 0===e&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new n);if(0===g)return e.set(-2,-1,-1);g=1/g;f=(f*c-b*d)*g;a=(a*d-b*c)*g;return e.set(1-f-a,a,f)},containsPoint:function(a,b,c,d){na.getBarycoord(a,b,c,d,Bb);return 0<=Bb.x&&0<=Bb.y&&1>=Bb.x+Bb.y},getUV:function(a,b,c,d,e,f,g,k){this.getBarycoord(a,b,c,d,Bb);k.set(0,0);k.addScaledVector(e,Bb.x);k.addScaledVector(f,Bb.y);k.addScaledVector(g,Bb.z);return k},isFrontFacing:function(a,b,c,d){ab.subVectors(c,
b);Ab.subVectors(a,b);return 0>ab.cross(Ab).dot(d)?!0:!1}});Object.assign(na.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},getArea:function(){ab.subVectors(this.c,this.b);Ab.subVectors(this.a,this.b);return.5*ab.cross(Ab).length()},
getMidpoint:function(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new n);return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(a){return na.getNormal(this.a,this.b,this.c,a)},getPlane:function(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new Sa);return a.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(a,b){return na.getBarycoord(a,this.a,this.b,this.c,b)},getUV:function(a,
b,c,d,e){return na.getUV(a,this.a,this.b,this.c,b,c,d,e)},containsPoint:function(a){return na.containsPoint(a,this.a,this.b,this.c)},isFrontFacing:function(a){return na.isFrontFacing(this.a,this.b,this.c,a)},intersectsBox:function(a){return a.intersectsTriangle(this)},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new n);var c=this.a,d=this.b,e=this.c;qd.subVectors(d,c);rd.subVectors(e,c);eh.subVectors(a,c);var f=qd.dot(eh),
g=rd.dot(eh);if(0>=f&&0>=g)return b.copy(c);fh.subVectors(a,d);var k=qd.dot(fh),l=rd.dot(fh);if(0<=k&&l<=k)return b.copy(d);var h=f*l-k*g;if(0>=h&&0<=f&&0>=k)return d=f/(f-k),b.copy(c).addScaledVector(qd,d);gh.subVectors(a,e);a=qd.dot(gh);var x=rd.dot(gh);if(0<=x&&a<=x)return b.copy(e);f=a*g-f*x;if(0>=f&&0<=g&&0>=x)return h=g/(g-x),b.copy(c).addScaledVector(rd,h);g=k*x-a*l;if(0>=g&&0<=l-k&&0<=a-x)return Li.subVectors(e,d),h=(l-k)/(l-k+(a-x)),b.copy(d).addScaledVector(Li,h);e=1/(g+f+h);d=f*e;h*=e;
return b.copy(c).addScaledVector(qd,d).addScaledVector(rd,h)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});var Mi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,
darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,
fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,
lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,
navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,
skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},If={h:0,s:0,l:0};Object.assign(B.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},
setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){a=L.euclideanModulo(a,1);b=L.clamp(b,0,1);c=L.clamp(c,0,1);0===b?this.r=this.g=this.b=c:(b=.5>=c?c*(1+b):c+b-c*b,c=2*c-b,this.r=ag(c,b,a+1/3),this.g=ag(c,b,a),this.b=ag(c,b,a-1/3));return this},setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&
console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,
parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+
c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}return a&&0<a.length?this.setColorName(a):this},setColorName:function(a){var b=Mi[a];void 0!==b?this.setHex(b):console.warn("THREE.Color: Unknown color "+a);return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;
this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},convertGammaToLinear:function(a){this.copyGammaToLinear(this,a);return this},convertLinearToGamma:function(a){this.copyLinearToGamma(this,a);return this},copySRGBToLinear:function(a){this.r=
bg(a.r);this.g=bg(a.g);this.b=bg(a.b);return this},copyLinearToSRGB:function(a){this.r=cg(a.r);this.g=cg(a.g);this.b=cg(a.b);return this},convertSRGBToLinear:function(){this.copySRGBToLinear(this);return this},convertLinearToSRGB:function(){this.copyLinearToSRGB(this);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){void 0===a&&(console.warn("THREE.Color: .getHSL() target is now required"),
a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,k=(f+e)/2;if(f===e)f=g=0;else{var l=e-f;f=.5>=k?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4}g/=6}a.h=g;a.s=f;a.l=k;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){this.getHSL(Ca);Ca.h+=a;Ca.s+=b;Ca.l+=c;this.setHSL(Ca.h,Ca.s,Ca.l);return this},add:function(a){this.r+=a.r;this.g+=
a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=
(a.b-this.b)*b;return this},lerpHSL:function(a,b){this.getHSL(Ca);a.getHSL(If);a=L.lerp(Ca.h,If.h,b);var c=L.lerp(Ca.s,If.s,b);b=L.lerp(Ca.l,If.l,b);this.setHSL(a,c,b);return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});B.NAMES=
Mi;Object.assign(zc.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});var oj=0;K.prototype=Object.assign(Object.create(Fa.prototype),{constructor:K,isMaterial:!0,
onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=
c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.sheen&&
this.sheen.isColor&&(d.sheen=this.sheen.getHex());this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.emissiveIntensity&&1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearcoat&&(d.clearcoat=this.clearcoat);void 0!==this.clearcoatRoughness&&(d.clearcoatRoughness=this.clearcoatRoughness);this.clearcoatNormalMap&&
this.clearcoatNormalMap.isTexture&&(d.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,d.clearcoatNormalScale=this.clearcoatNormalScale.toArray());this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.matcap&&this.matcap.isTexture&&(d.matcap=this.matcap.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,
d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&
this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,d.refractionRatio=this.refractionRatio,
void 0!==this.combine&&(d.combine=this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=
this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;d.stencilWrite=this.stencilWrite;d.stencilWriteMask=this.stencilWriteMask;d.stencilFunc=this.stencilFunc;d.stencilRef=this.stencilRef;d.stencilFuncMask=this.stencilFuncMask;d.stencilFail=this.stencilFail;d.stencilZFail=this.stencilZFail;d.stencilZPass=this.stencilZPass;this.rotation&&0!==this.rotation&&
(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);this.linewidth&&1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=
this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.morphNormals&&(d.morphNormals=!0);!0===this.skinning&&(d.skinning=!0);!1===
this.visible&&(d.visible=!1);!1===this.toneMapped&&(d.toneMapped=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexTangents=a.vertexTangents;this.vertexColors=a.vertexColors;this.opacity=a.opacity;
this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.stencilWriteMask=a.stencilWriteMask;this.stencilFunc=a.stencilFunc;this.stencilRef=a.stencilRef;this.stencilFuncMask=a.stencilFuncMask;this.stencilFail=a.stencilFail;this.stencilZFail=
a.stencilZFail;this.stencilZPass=a.stencilZPass;this.stencilWrite=a.stencilWrite;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}this.clippingPlanes=c;this.clipIntersection=a.clipIntersection;this.clipShadows=a.clipShadows;this.shadowSide=a.shadowSide;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=
a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.toneMapped=a.toneMapped;this.userData=JSON.parse(JSON.stringify(a.userData));return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(K.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Na.prototype=Object.create(K.prototype);Na.prototype.constructor=Na;Na.prototype.isMeshBasicMaterial=!0;Na.prototype.copy=function(a){K.prototype.copy.call(this,
a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=
a.skinning;this.morphTargets=a.morphTargets;return this};var T=new n;Object.defineProperty(M.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(M.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(a){this.usage=a;return this},copy:function(a){this.name=a.name;this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.usage=a.usage;return this},copyAt:function(a,b,c){a*=this.itemSize;
c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new B);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
d),f=new v);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new ia);b[c++]=f.x;b[c++]=f.y;
b[c++]=f.z;b[c++]=f.w}return this},applyMatrix3:function(a){for(var b=0,c=this.count;b<c;b++)T.x=this.getX(b),T.y=this.getY(b),T.z=this.getZ(b),T.applyMatrix3(a),this.setXYZ(b,T.x,T.y,T.z);return this},applyMatrix4:function(a){for(var b=0,c=this.count;b<c;b++)T.x=this.getX(b),T.y=this.getY(b),T.z=this.getZ(b),T.applyMatrix4(a),this.setXYZ(b,T.x,T.y,T.z);return this},applyNormalMatrix:function(a){for(var b=0,c=this.count;b<c;b++)T.x=this.getX(b),T.y=this.getY(b),T.z=this.getZ(b),T.applyNormalMatrix(a),
this.setXYZ(b,T.x,T.y,T.z);return this},transformDirection:function(a){for(var b=0,c=this.count;b<c;b++)T.x=this.getX(b),T.y=this.getY(b),T.z=this.getZ(b),T.transformDirection(a),this.setXYZ(b,T.x,T.y,T.z);return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+
1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+
0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});yd.prototype=Object.create(M.prototype);yd.prototype.constructor=yd;zd.prototype=Object.create(M.prototype);zd.prototype.constructor=
zd;Ad.prototype=Object.create(M.prototype);Ad.prototype.constructor=Ad;Bd.prototype=Object.create(M.prototype);Bd.prototype.constructor=Bd;Vb.prototype=Object.create(M.prototype);Vb.prototype.constructor=Vb;Cd.prototype=Object.create(M.prototype);Cd.prototype.constructor=Cd;Wb.prototype=Object.create(M.prototype);Wb.prototype.constructor=Wb;D.prototype=Object.create(M.prototype);D.prototype.constructor=D;Dd.prototype=Object.create(M.prototype);Dd.prototype.constructor=Dd;Object.assign(uh.prototype,
{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c}}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,k=g.length;if(0<k){var l=[];for(var h=0;h<k;h++)l[h]={name:g[h].name,data:[]};this.morphTargets.position=
l}var n=a.morphNormals,p=n.length;if(0<p){var q=[];for(h=0;h<p;h++)q[h]={name:n[h].name,data:[]};this.morphTargets.normal=q}var t=a.skinIndices,r=a.skinWeights,u=t.length===c.length,y=r.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(h=0;h<b.length;h++){var w=b[h];this.vertices.push(c[w.a],c[w.b],c[w.c]);var E=w.vertexNormals;3===E.length?this.normals.push(E[0],E[1],E[2]):(E=w.normal,this.normals.push(E,E,E));E=w.vertexColors;
3===E.length?this.colors.push(E[0],E[1],E[2]):(E=w.color,this.colors.push(E,E,E));!0===e&&(E=d[0][h],void 0!==E?this.uvs.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",h),this.uvs.push(new v,new v,new v)));!0===f&&(E=d[1][h],void 0!==E?this.uvs2.push(E[0],E[1],E[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",h),this.uvs2.push(new v,new v,new v)));for(E=0;E<k;E++){var z=g[E].vertices;l[E].data.push(z[w.a],z[w.b],z[w.c])}for(E=
0;E<p;E++)z=n[E].vertexNormals[h],q[E].data.push(z.a,z.b,z.c);u&&this.skinIndices.push(t[w.a],t[w.b],t[w.c]);y&&this.skinWeights.push(r[w.a],r[w.b],r[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());
return this}});var pj=1,lb=new P,hh=new G,sd=new n,Ma=new Ra,Ce=new Ra,ea=new n;z.prototype=Object.assign(Object.create(Fa.prototype),{constructor:z,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<vh(a)?Wb:Vb)(a,1):this.index=a},getAttribute:function(a){return this.attributes[a]},setAttribute:function(a,b){this.attributes[a]=b;return this},deleteAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,
c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(b.applyMatrix4(a),b.needsUpdate=!0);b=this.attributes.normal;if(void 0!==b){var c=(new ya).getNormalMatrix(a);b.applyNormalMatrix(c);b.needsUpdate=!0}b=this.attributes.tangent;void 0!==b&&(b.transformDirection(a),b.needsUpdate=!0);null!==this.boundingBox&&
this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(a){lb.makeRotationX(a);this.applyMatrix(lb);return this},rotateY:function(a){lb.makeRotationY(a);this.applyMatrix(lb);return this},rotateZ:function(a){lb.makeRotationZ(a);this.applyMatrix(lb);return this},translate:function(a,b,c){lb.makeTranslation(a,b,c);this.applyMatrix(lb);return this},scale:function(a,b,c){lb.makeScale(a,b,c);this.applyMatrix(lb);return this},lookAt:function(a){hh.lookAt(a);
hh.updateMatrix();this.applyMatrix(hh.matrix);return this},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(sd).negate();this.translate(sd.x,sd.y,sd.z);return this},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new D(3*b.vertices.length,3);var c=new D(3*b.colors.length,3);this.setAttribute("position",a.copyVector3sArray(b.vertices));this.setAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new D(b.lineDistances.length,
1),this.setAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0)}this.setAttribute("position",new D(b,3));return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;
!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),
c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&
(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new uh).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.setAttribute("position",(new M(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),
this.setAttribute("normal",(new M(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.setAttribute("color",(new M(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.setAttribute("uv",(new M(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.setAttribute("uv2",(new M(b,2)).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],
e=0,f=d.length;e<f;e++){var g=d[e],k=new D(3*g.data.length,3);k.name=g.name;b.push(k.copyVector3sArray(g.data))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new D(4*a.skinIndices.length,4),this.setAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new D(4*a.skinWeights.length,4),this.setAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=
a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Ra);var a=this.attributes.position,b=this.morphAttributes.position;if(void 0!==a){if(this.boundingBox.setFromBufferAttribute(a),b){a=0;for(var c=b.length;a<c;a++)Ma.setFromBufferAttribute(b[a]),this.morphTargetsRelative?(ea.addVectors(this.boundingBox.min,Ma.min),this.boundingBox.expandByPoint(ea),ea.addVectors(this.boundingBox.max,Ma.max),this.boundingBox.expandByPoint(ea)):(this.boundingBox.expandByPoint(Ma.min),
this.boundingBox.expandByPoint(Ma.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new ob);var a=this.attributes.position,b=this.morphAttributes.position;if(a){var c=this.boundingSphere.center;
Ma.setFromBufferAttribute(a);if(b)for(var d=0,e=b.length;d<e;d++){var f=b[d];Ce.setFromBufferAttribute(f);this.morphTargetsRelative?(ea.addVectors(Ma.min,Ce.min),Ma.expandByPoint(ea),ea.addVectors(Ma.max,Ce.max),Ma.expandByPoint(ea)):(Ma.expandByPoint(Ce.min),Ma.expandByPoint(Ce.max))}Ma.getCenter(c);var g=0;d=0;for(e=a.count;d<e;d++)ea.fromBufferAttribute(a,d),g=Math.max(g,c.distanceToSquared(ea));if(b)for(d=0,e=b.length;d<e;d++){f=b[d];for(var k=this.morphTargetsRelative,l=0,h=f.count;l<h;l++)ea.fromBufferAttribute(f,
l),k&&(sd.fromBufferAttribute(a,l),ea.add(sd)),g=Math.max(g,c.distanceToSquared(ea))}this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===b.normal)this.setAttribute("normal",new M(new Float32Array(c.length),
3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++)d[e]=0;d=b.normal.array;var g=new n,k=new n,l=new n,h=new n,x=new n;if(a){var p=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*p[e+0];var q=3*p[e+1];var t=3*p[e+2];g.fromArray(c,a);k.fromArray(c,q);l.fromArray(c,t);h.subVectors(l,k);x.subVectors(g,k);h.cross(x);d[a]+=h.x;d[a+1]+=h.y;d[a+2]+=h.z;d[q]+=h.x;d[q+1]+=h.y;d[q+2]+=h.z;d[t]+=h.x;d[t+1]+=h.y;d[t+2]+=h.z}}else for(e=0,f=c.length;e<f;e+=9)g.fromArray(c,e),k.fromArray(c,e+3),l.fromArray(c,e+6),
h.subVectors(l,k),x.subVectors(g,k),h.cross(x),d[e]=h.x,d[e+1]=h.y,d[e+2]=h.z,d[e+3]=h.x,d[e+4]=h.y,d[e+5]=h.z,d[e+6]=h.x,d[e+7]=h.y,d[e+8]=h.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d]){var e=c[d].array,
f=a.attributes[d],g=f.array,k=f.itemSize*b;f=Math.min(g.length,e.length-k);for(var l=0;l<f;l++,k++)e[k]=g[l]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){for(var a=this.attributes.normal,b=0,c=a.count;b<c;b++)ea.x=a.getX(b),ea.y=a.getY(b),ea.z=a.getZ(b),ea.normalize(),a.setXYZ(b,ea.x,ea.y,ea.z)},toNonIndexed:function(){function a(a,b){var c=a.array;a=a.itemSize;for(var d=new c.constructor(b.length*a),e,
f=0,g=0,k=b.length;g<k;g++){e=b[g]*a;for(var l=0;l<a;l++)d[f++]=c[e++]}return new M(d,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var b=new z,c=this.index.array,d=this.attributes,e;for(e in d){var f=d[e];f=a(f,c);b.setAttribute(e,f)}var g=this.morphAttributes;for(e in g){var k=[],l=g[e];d=0;for(var h=l.length;d<h;d++)f=l[d],f=a(f,c),k.push(f);b.morphAttributes[e]=k}b.morphTargetsRelative=this.morphTargetsRelative;c=this.groups;
d=0;for(e=c.length;d<e;d++)f=c[d],b.addGroup(f.start,f.count,f.materialIndex);return b},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);0<Object.keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(h in b)void 0!==b[h]&&(a[h]=b[h]);return a}a.data={attributes:{}};b=this.index;null!==b&&(a.data.index={type:b.array.constructor.name,
array:Array.prototype.slice.call(b.array)});var c=this.attributes;for(h in c){b=c[h];var d=b.toJSON();""!==b.name&&(d.name=b.name);a.data.attributes[h]=d}c={};var e=!1;for(h in this.morphAttributes){for(var f=this.morphAttributes[h],g=[],k=0,l=f.length;k<l;k++)b=f[k],d=b.toJSON(),""!==b.name&&(d.name=b.name),g.push(d);0<g.length&&(c[h]=g,e=!0)}e&&(a.data.morphAttributes=c,a.data.morphTargetsRelative=this.morphTargetsRelative);var h=this.groups;0<h.length&&(a.data.groups=JSON.parse(JSON.stringify(h)));
h=this.boundingSphere;null!==h&&(a.data.boundingSphere={center:h.center.toArray(),radius:h.radius});return a},clone:function(){return(new z).copy(this)},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.setAttribute(g,c[g].clone());var d=a.morphAttributes;for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());
this.morphAttributes[g]=e}this.morphTargetsRelative=a.morphTargetsRelative;var g=a.groups;c=0;for(b=g.length;c<b;c++)d=g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ni=new P,rc=new Ub,ih=new ob,Xb=new n,
Yb=new n,Zb=new n,dg=new n,eg=new n,fg=new n,Ke=new n,Le=new n,Me=new n,Ac=new v,Bc=new v,Cc=new v,Ed=new n,Ie=new n;U.prototype=Object.assign(Object.create(G.prototype),{constructor:U,isMesh:!0,copy:function(a){G.prototype.copy.call(this,a);void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this},updateMorphTargets:function(){var a=this.geometry;
if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},raycast:function(a,b){var c=this.geometry,d=this.material,
e=this.matrixWorld;if(void 0!==d&&(null===c.boundingSphere&&c.computeBoundingSphere(),ih.copy(c.boundingSphere),ih.applyMatrix4(e),!1!==a.ray.intersectsSphere(ih)&&(Ni.getInverse(e),rc.copy(a.ray).applyMatrix4(Ni),null===c.boundingBox||!1!==rc.intersectsBox(c.boundingBox))))if(c.isBufferGeometry){var f=c.index;e=c.attributes.position;var g=c.morphAttributes.position,k=c.morphTargetsRelative,l=c.attributes.uv,h=c.attributes.uv2,n=c.groups,p=c.drawRange,q,t;if(null!==f)if(Array.isArray(d)){var r=0;
for(q=n.length;r<q;r++){var u=n[r];var y=d[u.materialIndex];var w=Math.max(u.start,p.start);for(t=c=Math.min(u.start+u.count,p.start+p.count);w<t;w+=3){c=f.getX(w);var E=f.getX(w+1);var z=f.getX(w+2);if(c=Je(this,y,a,rc,e,g,k,l,h,c,E,z))c.faceIndex=Math.floor(w/3),c.face.materialIndex=u.materialIndex,b.push(c)}}}else for(w=Math.max(0,p.start),c=Math.min(f.count,p.start+p.count),r=w,q=c;r<q;r+=3){if(c=f.getX(r),E=f.getX(r+1),z=f.getX(r+2),c=Je(this,d,a,rc,e,g,k,l,h,c,E,z))c.faceIndex=Math.floor(r/
3),b.push(c)}else if(void 0!==e)if(Array.isArray(d))for(r=0,q=n.length;r<q;r++)for(u=n[r],y=d[u.materialIndex],w=Math.max(u.start,p.start),t=c=Math.min(u.start+u.count,p.start+p.count);w<t;w+=3){if(c=w,E=w+1,z=w+2,c=Je(this,y,a,rc,e,g,k,l,h,c,E,z))c.faceIndex=Math.floor(w/3),c.face.materialIndex=u.materialIndex,b.push(c)}else for(w=Math.max(0,p.start),c=Math.min(e.count,p.start+p.count),r=w,q=c;r<q;r+=3)if(c=r,E=r+1,z=r+2,c=Je(this,d,a,rc,e,g,k,l,h,c,E,z))c.faceIndex=Math.floor(r/3),b.push(c)}else if(c.isGeometry)for(e=
Array.isArray(d),g=c.vertices,k=c.faces,c=c.faceVertexUvs[0],0<c.length&&(f=c),p=0,r=k.length;p<r;p++)if(q=k[p],c=e?d[q.materialIndex]:d,void 0!==c&&(l=g[q.a],h=g[q.b],n=g[q.c],c=wh(this,c,a,rc,l,h,n,Ed)))f&&f[p]&&(u=f[p],Ac.copy(u[0]),Bc.copy(u[1]),Cc.copy(u[2]),c.uv=na.getUV(Ed,l,h,n,Ac,Bc,Cc,new v)),c.face=q,c.faceIndex=p,b.push(c)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var qj=0,mb=new P,jh=new G,Jf=new n;N.prototype=Object.assign(Object.create(Fa.prototype),
{constructor:N,isGeometry:!0,applyMatrix:function(a){for(var b=(new ya).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},
rotateX:function(a){mb.makeRotationX(a);this.applyMatrix(mb);return this},rotateY:function(a){mb.makeRotationY(a);this.applyMatrix(mb);return this},rotateZ:function(a){mb.makeRotationZ(a);this.applyMatrix(mb);return this},translate:function(a,b,c){mb.makeTranslation(a,b,c);this.applyMatrix(mb);return this},scale:function(a,b,c){mb.makeScale(a,b,c);this.applyMatrix(mb);return this},lookAt:function(a){jh.lookAt(a);jh.updateMatrix();this.applyMatrix(jh.matrix);return this},fromBufferGeometry:function(a){function b(a,
b,d,e){var f=void 0===k?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],m=void 0===g?[]:[(new n).fromArray(g,3*a),(new n).fromArray(g,3*b),(new n).fromArray(g,3*d)];e=new zc(a,b,d,m,f,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([(new v).fromArray(l,2*a),(new v).fromArray(l,2*b),(new v).fromArray(l,2*d)]);void 0!==h&&c.faceVertexUvs[1].push([(new v).fromArray(h,2*a),(new v).fromArray(h,2*b),(new v).fromArray(h,2*d)])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes;
if(void 0===e.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,k=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,h=void 0!==e.uv2?e.uv2.array:void 0;void 0!==h&&(this.faceVertexUvs[1]=[]);for(e=0;e<f.length;e+=3)c.vertices.push((new n).fromArray(f,e)),void 0!==k&&c.colors.push((new B).fromArray(k,e));var x=a.groups;if(0<x.length)for(e=0;e<x.length;e++){f=
x[e];var p=f.start,q=p;for(p+=f.count;q<p;q+=3)void 0!==d?b(d[q],d[q+1],d[q+2],f.materialIndex):b(q,q+1,q+2,f.materialIndex)}else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(Jf).negate();this.translate(Jf.x,
Jf.y,Jf.z);return this},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new P;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new n,b=new n,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===
a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new n;if(a){var e=new n,f=new n;a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var k=this.vertices[b.b];var l=this.vertices[b.c];e.subVectors(l,k);f.subVectors(g,k);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e)}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=
this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),
d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):
d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}var f=new N;f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var k=new n;var l={a:new n,b:new n,c:new n};d.push(k);g.push(l)}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();
f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],k=g.faceNormals[c],l=g.vertexNormals[c],k.copy(d.normal),l.a.copy(d.vertexNormals[0]),l.b.copy(d.vertexNormals[1]),l.c.copy(d.vertexNormals[2])}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Ra);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===
this.boundingSphere&&(this.boundingSphere=new ob);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,k=this.faces,l=a.faces,h=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new ya).getNormalMatrix(b));for(var p=0,q=g.length;p<q;p++){var t=g[p].clone();void 0!==b&&t.applyMatrix4(b);f.push(t)}p=0;for(q=n.length;p<q;p++)h.push(n[p].clone());p=0;for(q=l.length;p<q;p++){g=l[p];var r=g.vertexNormals;
n=g.vertexColors;h=new zc(g.a+e,g.b+e,g.c+e);h.normal.copy(g.normal);void 0!==d&&h.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)t=r[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),h.vertexNormals.push(t);h.color.copy(g.color);b=0;for(f=n.length;b<f;b++)t=n[b],h.vertexColors.push(t.clone());h.materialIndex=g.materialIndex+c;k.push(h)}p=0;for(q=a.faceVertexUvs.length;p<q;p++)for(c=a.faceVertexUvs[p],void 0===this.faceVertexUvs[p]&&(this.faceVertexUvs[p]=[]),b=0,f=c.length;b<f;b++){d=
c[b];e=[];k=0;for(l=d.length;k<l;k++)e.push(d[k].clone());this.faceVertexUvs[p].push(e)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];
g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]]}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,1);f=this.vertices.length-b.length;this.vertices=b;return f},setFromPoints:function(a){this.vertices=
[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new n(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var k=a[c]._id;f&&f.push(d[k]);g&&g.push(e[k])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,
b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=h.length/3;h.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=n.length;n.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=q.length/2;q.push(a.x,a.y);return t[b]}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};
e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var k=this.vertices[g];f.push(k.x,k.y,k.z)}k=[];var h=[],m={},n=[],p={},q=[],t={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],u=void 0!==this.faceVertexUvs[0][g],y=0<r.normal.length(),w=0<r.vertexNormals.length,v=1!==r.color.r||1!==r.color.g||1!==r.color.b,z=0<r.vertexColors.length,
B=0;B=a(B,0,0);B=a(B,1,!0);B=a(B,2,!1);B=a(B,3,u);B=a(B,4,y);B=a(B,5,w);B=a(B,6,v);B=a(B,7,z);k.push(B);k.push(r.a,r.b,r.c);k.push(r.materialIndex);u&&(u=this.faceVertexUvs[0][g],k.push(d(u[0]),d(u[1]),d(u[2])));y&&k.push(b(r.normal));w&&(y=r.vertexNormals,k.push(b(y[0]),b(y[1]),b(y[2])));v&&k.push(c(r.color));z&&(r=r.vertexColors,k.push(c(r[0]),c(r[1]),c(r[2])))}e.data={};e.data.vertices=f;e.data.normals=h;0<n.length&&(e.data.colors=n);0<q.length&&(e.data.uvs=[q]);e.data.faces=k;return e},clone:function(){return(new N).copy(this)},
copy:function(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<b;f++)this.colors.push(e[f].clone());e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<
b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var k=g[e],h=[];var m=0;for(d=k.length;m<d;m++)h.push(k[m].clone());this.faceVertexUvs[f].push(h)}}m=a.morphTargets;f=0;for(b=m.length;f<b;f++){d={};d.name=m[f].name;if(void 0!==m[f].vertices)for(d.vertices=[],e=0,c=m[f].vertices.length;e<c;e++)d.vertices.push(m[f].vertices[e].clone());if(void 0!==m[f].normals)for(d.normals=[],e=0,c=m[f].normals.length;e<c;e++)d.normals.push(m[f].normals[e].clone());
this.morphTargets.push(d)}m=a.morphNormals;f=0;for(b=m.length;f<b;f++){d={};if(void 0!==m[f].vertexNormals)for(d.vertexNormals=[],e=0,c=m[f].vertexNormals.length;e<c;e++)g=m[f].vertexNormals[e],k={},k.a=g.a.clone(),k.b=g.b.clone(),k.c=g.c.clone(),d.vertexNormals.push(k);if(void 0!==m[f].faceNormals)for(d.faceNormals=[],e=0,c=m[f].faceNormals.length;e<c;e++)d.faceNormals.push(m[f].faceNormals[e].clone());this.morphNormals.push(d)}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());
e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=
a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var kh=function(a){function b(b,d,e,f,g,k){a.call(this);this.type="BoxGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:k};this.fromBufferGeometry(new Hd(b,d,e,f,g,k));this.mergeVertices()}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b}(N),Hd=function(a){function b(b,
d,e,f,g,k){function c(a,b,c,d,e,f,g,k,l,m,v){var w=f/l,y=g/m,A=f/2,z=g/2,B=k/2;g=l+1;var E=m+1,D=f=0,C,F,G=new n;for(F=0;F<E;F++){var H=F*y-z;for(C=0;C<g;C++)G[a]=(C*w-A)*d,G[b]=H*e,G[c]=B,p.push(G.x,G.y,G.z),G[a]=0,G[b]=0,G[c]=0<k?1:-1,q.push(G.x,G.y,G.z),t.push(C/l),t.push(1-F/m),f+=1}for(F=0;F<m;F++)for(C=0;C<l;C++)a=r+C+g*(F+1),b=r+(C+1)+g*(F+1),c=r+(C+1)+g*F,x.push(r+C+g*F,a,c),x.push(a,b,c),D+=6;h.addGroup(u,D,v);u+=D;r+=f}a.call(this);this.type="BoxBufferGeometry";this.parameters={width:b,
height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:k};var h=this;b=b||1;d=d||1;e=e||1;f=Math.floor(f)||1;g=Math.floor(g)||1;k=Math.floor(k)||1;var x=[],p=[],q=[],t=[],r=0,u=0;c("z","y","x",-1,-1,e,d,b,k,g,0);c("z","y","x",1,-1,e,d,-b,k,g,1);c("x","z","y",1,1,b,e,d,f,k,2);c("x","z","y",1,-1,b,e,-d,f,k,3);c("x","y","z",1,-1,b,d,e,f,g,4);c("x","y","z",-1,-1,b,d,-e,f,g,5);this.setIndex(x);this.setAttribute("position",new D(p,3));this.setAttribute("normal",new D(q,3));this.setAttribute("uv",
new D(t,2))}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b}(z),Qh={clone:Dc,merge:oa};pa.prototype=Object.create(K.prototype);pa.prototype.constructor=pa;pa.prototype.isShaderMaterial=!0;pa.prototype.copy=function(a){K.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Dc(a.uniforms);this.defines=Object.assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;
this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};pa.prototype.toJSON=function(a){var b=K.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?{type:"v3",value:d.toArray()}:
d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix3?{type:"m3",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d}}0<Object.keys(this.defines).length&&(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions)!0===this.extensions[e]&&(a[e]=!0);0<Object.keys(a).length&&(b.extensions=a);return b};cb.prototype=Object.assign(Object.create(G.prototype),{constructor:cb,isCamera:!0,copy:function(a,b){G.prototype.copy.call(this,
a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new n);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize()},updateMatrixWorld:function(a){G.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld)},
updateWorldMatrix:function(a,b){G.prototype.updateWorldMatrix.call(this,a,b);this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}});qa.prototype=Object.assign(Object.create(cb.prototype),{constructor:qa,isPerspectiveCamera:!0,copy:function(a,b){cb.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=
a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*L.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*L.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*L.RAD2DEG*Math.atan(Math.tan(.5*L.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,
1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*L.DEG2RAD*
this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,k=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/k;d*=f.width/g;c*=f.height/k}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=G.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=
this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Ec.prototype=Object.create(G.prototype);Ec.prototype.constructor=Ec;Cb.prototype=Object.create(wa.prototype);Cb.prototype.constructor=Cb;Cb.prototype.isWebGLCubeRenderTarget=!0;Cb.prototype.fromEquirectangularTexture=function(a,b){this.texture.type=b.type;this.texture.format=b.format;this.texture.encoding=
b.encoding;var c=new nb,d=new pa({type:"CubemapFromEquirect",uniforms:Dc({tEquirect:{value:null}}),vertexShader:"varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",fragmentShader:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",
side:1,blending:0});d.uniforms.tEquirect.value=b;b=new U(new Hd(5,5,5),d);c.add(b);d=new Ec(1,10,1);d.renderTarget=this;d.renderTarget.texture.name="CubeCameraTexture";d.update(a,c);b.geometry.dispose();b.material.dispose();return this};$b.prototype=Object.create(ca.prototype);$b.prototype.constructor=$b;$b.prototype.isDataTexture=!0;var td=new ob,Kf=new n;Object.assign(Fd.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);
return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],k=c[5],h=c[6],m=c[7],n=c[8],p=c[9],q=c[10],t=c[11],r=c[12],u=c[13],v=c[14];c=c[15];b[0].setComponents(f-a,m-g,t-n,c-r).normalize();b[1].setComponents(f+a,m+g,t+n,c+r).normalize();b[2].setComponents(f+d,m+k,t+p,c+u).normalize();b[3].setComponents(f-
d,m-k,t-p,c-u).normalize();b[4].setComponents(f-e,m-h,t-q,c-v).normalize();b[5].setComponents(f+e,m+h,t+q,c+v).normalize();return this},intersectsObject:function(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();td.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);return this.intersectsSphere(td)},intersectsSprite:function(a){td.center.set(0,0,0);td.radius=.7071067811865476;td.applyMatrix4(a.matrixWorld);return this.intersectsSphere(td)},intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(a){for(var b=this.planes,c=0;6>c;c++){var d=b[c];Kf.x=0<d.normal.x?a.max.x:a.min.x;Kf.y=0<d.normal.y?a.max.y:a.min.y;Kf.z=0<d.normal.z?a.max.z:a.min.z;if(0>d.distanceToPoint(Kf))return!1}return!0},containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});var C={common:{diffuse:{value:new B(15658734)},opacity:{value:1},map:{value:null},
uvTransform:{value:new ya},uv2Transform:{value:new ya},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new v(1,
1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},
directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},
hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new B(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ya}},sprite:{diffuse:{value:new B(15658734)},opacity:{value:1},center:{value:new v(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ya}}};Gd.prototype=
Object.create(N.prototype);Gd.prototype.constructor=Gd;ac.prototype=Object.create(z.prototype);ac.prototype.constructor=ac;var O={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",clearcoat_normalmap_pars_fragment:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},
db={basic:{uniforms:oa([C.common,C.specularmap,C.envmap,C.aomap,C.lightmap,C.fog]),vertexShader:O.meshbasic_vert,fragmentShader:O.meshbasic_frag},lambert:{uniforms:oa([C.common,C.specularmap,C.envmap,C.aomap,C.lightmap,C.emissivemap,C.fog,C.lights,{emissive:{value:new B(0)}}]),vertexShader:O.meshlambert_vert,fragmentShader:O.meshlambert_frag},phong:{uniforms:oa([C.common,C.specularmap,C.envmap,C.aomap,C.lightmap,C.emissivemap,C.bumpmap,C.normalmap,C.displacementmap,C.fog,C.lights,{emissive:{value:new B(0)},
specular:{value:new B(1118481)},shininess:{value:30}}]),vertexShader:O.meshphong_vert,fragmentShader:O.meshphong_frag},standard:{uniforms:oa([C.common,C.envmap,C.aomap,C.lightmap,C.emissivemap,C.bumpmap,C.normalmap,C.displacementmap,C.roughnessmap,C.metalnessmap,C.fog,C.lights,{emissive:{value:new B(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:O.meshphysical_vert,fragmentShader:O.meshphysical_frag},toon:{uniforms:oa([C.common,C.specularmap,C.aomap,C.lightmap,
C.emissivemap,C.bumpmap,C.normalmap,C.displacementmap,C.gradientmap,C.fog,C.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30}}]),vertexShader:O.meshtoon_vert,fragmentShader:O.meshtoon_frag},matcap:{uniforms:oa([C.common,C.bumpmap,C.normalmap,C.displacementmap,C.fog,{matcap:{value:null}}]),vertexShader:O.meshmatcap_vert,fragmentShader:O.meshmatcap_frag},points:{uniforms:oa([C.points,C.fog]),vertexShader:O.points_vert,fragmentShader:O.points_frag},dashed:{uniforms:oa([C.common,
C.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:O.linedashed_vert,fragmentShader:O.linedashed_frag},depth:{uniforms:oa([C.common,C.displacementmap]),vertexShader:O.depth_vert,fragmentShader:O.depth_frag},normal:{uniforms:oa([C.common,C.bumpmap,C.normalmap,C.displacementmap,{opacity:{value:1}}]),vertexShader:O.normal_vert,fragmentShader:O.normal_frag},sprite:{uniforms:oa([C.sprite,C.fog]),vertexShader:O.sprite_vert,fragmentShader:O.sprite_frag},background:{uniforms:{uvTransform:{value:new ya},
t2D:{value:null}},vertexShader:O.background_vert,fragmentShader:O.background_frag},cube:{uniforms:oa([C.envmap,{opacity:{value:1}}]),vertexShader:O.cube_vert,fragmentShader:O.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:O.equirect_vert,fragmentShader:O.equirect_frag},distanceRGBA:{uniforms:oa([C.common,C.displacementmap,{referencePosition:{value:new n},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:O.distanceRGBA_vert,fragmentShader:O.distanceRGBA_frag},shadow:{uniforms:oa([C.lights,
C.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:O.shadow_vert,fragmentShader:O.shadow_frag}};db.physical={uniforms:oa([db.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new B(0)},clearcoatNormalScale:{value:new v(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:O.meshphysical_vert,fragmentShader:O.meshphysical_frag};pb.prototype=Object.create(ca.prototype);pb.prototype.constructor=pb;pb.prototype.isCubeTexture=!0;Object.defineProperty(pb.prototype,
"images",{get:function(){return this.image},set:function(a){this.image=a}});Fc.prototype=Object.create(ca.prototype);Fc.prototype.constructor=Fc;Fc.prototype.isDataTexture2DArray=!0;Gc.prototype=Object.create(ca.prototype);Gc.prototype.constructor=Gc;Gc.prototype.isDataTexture3D=!0;var Eh=new ca,Mj=new Fc,Oj=new Gc,Fh=new pb,yh=[],Ah=[],Dh=new Float32Array(16),Ch=new Float32Array(9),Bh=new Float32Array(4);Gh.prototype.updateCache=function(a){var b=this.cache;a instanceof Float32Array&&b.length!==
a.length&&(this.cache=new Float32Array(a.length));Ia(b,a)};Hh.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c)}};var gg=/([\w\d_]+)(\])?(\[|\.)?/g;Db.prototype.setValue=function(a,b,c,d){b=this.map[b];void 0!==b&&b.setValue(a,c,d)};Db.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};Db.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],k=c[g.id];!1!==k.needsUpdate&&g.setValue(a,k.value,
d)}};Db.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var sk=0,ig=/^[ \t]*#include +<([\w\d./]+)>/gm,Ph=/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Bk=0;Eb.prototype=Object.create(K.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isMeshDepthMaterial=!0;Eb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=
a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};Fb.prototype=Object.create(K.prototype);Fb.prototype.constructor=Fb;Fb.prototype.isMeshDistanceMaterial=!0;Fb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;
this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this};ng.prototype=Object.assign(Object.create(wa.prototype),{constructor:ng,isWebGLMultiviewRenderTarget:!0,copy:function(a){wa.prototype.copy.call(this,a);this.numViews=a.numViews;return this},setNumViews:function(a){this.numViews!==a&&(this.numViews=
a,this.dispose());return this}});Oe.prototype=Object.assign(Object.create(qa.prototype),{constructor:Oe,isArrayCamera:!0});Nd.prototype=Object.assign(Object.create(G.prototype),{constructor:Nd,isGroup:!0});Object.assign(Wh.prototype,Fa.prototype);Object.assign(Pe.prototype,{isFogExp2:!0,clone:function(){return new Pe(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});Object.assign(Qe.prototype,{isFog:!0,clone:function(){return new Qe(this.color,
this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});Object.defineProperty(qb.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(qb.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(a){this.usage=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.usage=a.usage;return this},copyAt:function(a,b,c){a*=this.stride;
c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=a;return this}});var sc=new n;Object.defineProperties(Od.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Od.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(a){for(var b=
0,c=this.data.count;b<c;b++)sc.x=this.getX(b),sc.y=this.getY(b),sc.z=this.getZ(b),sc.applyMatrix4(a),this.setXYZ(b,sc.x,sc.y,sc.z);return this},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*
this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},
setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}});Hb.prototype=Object.create(K.prototype);Hb.prototype.constructor=Hb;Hb.prototype.isSpriteMaterial=!0;Hb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this};var Jc,De=new n,ud=new n,vd=new n,
Kc=new v,Qd=new v,Yh=new P,Lf=new n,Ee=new n,Mf=new n,Oi=new v,lh=new v,Pi=new v;Pd.prototype=Object.assign(Object.create(G.prototype),{constructor:Pd,isSprite:!0,raycast:function(a,b){null===a.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');ud.setFromMatrixScale(this.matrixWorld);Yh.copy(a.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld);vd.setFromMatrixPosition(this.modelViewMatrix);
a.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&ud.multiplyScalar(-vd.z);var c=this.material.rotation;if(0!==c){var d=Math.cos(c);var e=Math.sin(c)}c=this.center;Re(Lf.set(-.5,-.5,0),vd,c,ud,e,d);Re(Ee.set(.5,-.5,0),vd,c,ud,e,d);Re(Mf.set(.5,.5,0),vd,c,ud,e,d);Oi.set(0,0);lh.set(1,0);Pi.set(1,1);var f=a.ray.intersectTriangle(Lf,Ee,Mf,!1,De);if(null===f&&(Re(Ee.set(-.5,.5,0),vd,c,ud,e,d),lh.set(0,1),f=a.ray.intersectTriangle(Lf,Mf,Ee,!1,De),null===f))return;e=a.ray.origin.distanceTo(De);
e<a.near||e>a.far||b.push({distance:e,point:De.clone(),uv:na.getUV(De,Lf,Ee,Mf,Oi,lh,Pi,new v),face:null,object:this})},clone:function(){return(new this.constructor(this.material)).copy(this)},copy:function(a){G.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this}});var Nf=new n,Qi=new n;Rd.prototype=Object.assign(Object.create(G.prototype),{constructor:Rd,isLOD:!0,copy:function(a){G.prototype.copy.call(this,a,!1);for(var b=a.levels,c=0,d=b.length;c<d;c++){var e=
b[c];this.addLevel(e.object.clone(),e.distance)}this.autoUpdate=a.autoUpdate;return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a);return this},getObjectForDistance:function(a){var b=this.levels;if(0<b.length){for(var c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object}return null},raycast:function(a,b){if(0<this.levels.length){Nf.setFromMatrixPosition(this.matrixWorld);
var c=a.ray.origin.distanceTo(Nf);this.getObjectForDistance(c).raycast(a,b)}},update:function(a){var b=this.levels;if(1<b.length){Nf.setFromMatrixPosition(a.matrixWorld);Qi.setFromMatrixPosition(this.matrixWorld);a=Nf.distanceTo(Qi);b[0].object.visible=!0;for(var c=1,d=b.length;c<d;c++)if(a>=b[c].distance)b[c-1].object.visible=!1,b[c].object.visible=!0;else break;for(;c<d;c++)b[c].object.visible=!1}},toJSON:function(a){a=G.prototype.toJSON.call(this,a);!1===this.autoUpdate&&(a.object.autoUpdate=!1);
a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Sd.prototype=Object.assign(Object.create(U.prototype),{constructor:Sd,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var a=
new ia,b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,a.y,a.z,a.w)}},updateMatrixWorld:function(a){U.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+
this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var Ri=new P,Wk=new P;Object.assign(Se.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new P;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<
b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){for(var a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture,e=0,f=a.length;e<f;e++)Ri.multiplyMatrices(a[e]?a[e].matrixWorld:Wk,b[e]),Ri.toArray(c,16*e);void 0!==d&&(d.needsUpdate=!0)},clone:function(){return new Se(this.bones,this.boneInverses)},getBoneByName:function(a){for(var b=
0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d}}});pg.prototype=Object.assign(Object.create(G.prototype),{constructor:pg,isBone:!0});var Si=new P,Ti=new P,wd=[],Fe=new U;Te.prototype=Object.assign(Object.create(U.prototype),{constructor:Te,isInstancedMesh:!0,getMatrixAt:function(a,b){b.fromArray(this.instanceMatrix.array,16*a)},raycast:function(a,b){var c=this.matrixWorld,d=this.count;Fe.geometry=this.geometry;Fe.material=this.material;if(void 0!==Fe.material)for(var e=
0;e<d;e++)this.getMatrixAt(e,Si),Ti.multiplyMatrices(c,Si),Fe.matrixWorld=Ti,Fe.raycast(a,wd),0<wd.length&&(wd[0].instanceId=e,wd[0].object=this,b.push(wd[0]),wd.length=0)},setMatrixAt:function(a,b){b.toArray(this.instanceMatrix.array,16*a)},updateMorphTargets:function(){}});ka.prototype=Object.create(K.prototype);ka.prototype.constructor=ka;ka.prototype.isLineBasicMaterial=!0;ka.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=
a.linecap;this.linejoin=a.linejoin;return this};var Ui=new n,Vi=new n,Wi=new P,Of=new Ub,Ge=new ob;Ja.prototype=Object.assign(Object.create(G.prototype),{constructor:Ja,isLine:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry)if(null===a.index){for(var b=a.attributes.position,c=[0],d=1,e=b.count;d<e;d++)Ui.fromBufferAttribute(b,d-1),Vi.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=Ui.distanceTo(Vi);a.setAttribute("lineDistance",new D(c,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,c[0]=0,d=1,e=b.length;d<e;d++)c[d]=c[d-1],c[d]+=b[d-1].distanceTo(b[d]);return this},raycast:function(a,b){var c=a.linePrecision,d=this.geometry,e=this.matrixWorld;null===d.boundingSphere&&d.computeBoundingSphere();Ge.copy(d.boundingSphere);Ge.applyMatrix4(e);Ge.radius+=c;if(!1!==a.ray.intersectsSphere(Ge)){Wi.getInverse(e);Of.copy(a.ray).applyMatrix4(Wi);c/=(this.scale.x+this.scale.y+this.scale.z)/3;c*=c;var f=new n,g=new n;e=new n;var k=new n,
h=this&&this.isLineSegments?2:1;if(d.isBufferGeometry){var m=d.index,x=d.attributes.position.array;if(null!==m){m=m.array;d=0;for(var p=m.length-1;d<p;d+=h){var q=m[d+1];f.fromArray(x,3*m[d]);g.fromArray(x,3*q);q=Of.distanceSqToSegment(f,g,k,e);q>c||(k.applyMatrix4(this.matrixWorld),q=a.ray.origin.distanceTo(k),q<a.near||q>a.far||b.push({distance:q,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}))}}else for(d=0,p=x.length/3-1;d<p;d+=h)f.fromArray(x,3*d),
g.fromArray(x,3*d+3),q=Of.distanceSqToSegment(f,g,k,e),q>c||(k.applyMatrix4(this.matrixWorld),q=a.ray.origin.distanceTo(k),q<a.near||q>a.far||b.push({distance:q,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}))}else if(d.isGeometry)for(f=d.vertices,g=f.length,d=0;d<g-1;d+=h)q=Of.distanceSqToSegment(f[d],f[d+1],k,e),q>c||(k.applyMatrix4(this.matrixWorld),q=a.ray.origin.distanceTo(k),q<a.near||q>a.far||b.push({distance:q,point:e.clone().applyMatrix4(this.matrixWorld),
index:d,face:null,faceIndex:null,object:this}))}},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var Pf=new n,Qf=new n;ma.prototype=Object.assign(Object.create(Ja.prototype),{constructor:ma,isLineSegments:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry)if(null===a.index){for(var b=a.attributes.position,c=[],d=0,e=b.count;d<e;d+=2)Pf.fromBufferAttribute(b,d),Qf.fromBufferAttribute(b,d+1),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Pf.distanceTo(Qf);
a.setAttribute("lineDistance",new D(c,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,d=0,e=b.length;d<e;d+=2)Pf.copy(b[d]),Qf.copy(b[d+1]),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Pf.distanceTo(Qf);return this}});Ue.prototype=Object.assign(Object.create(Ja.prototype),{constructor:Ue,isLineLoop:!0});Ua.prototype=Object.create(K.prototype);Ua.prototype.constructor=Ua;Ua.prototype.isPointsMaterial=
!0;Ua.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.morphTargets=a.morphTargets;return this};var Xi=new P,rg=new Ub,He=new ob,Rf=new n;Lc.prototype=Object.assign(Object.create(G.prototype),{constructor:Lc,isPoints:!0,raycast:function(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;null===c.boundingSphere&&c.computeBoundingSphere();He.copy(c.boundingSphere);
He.applyMatrix4(d);He.radius+=e;if(!1!==a.ray.intersectsSphere(He))if(Xi.getInverse(d),rg.copy(a.ray).applyMatrix4(Xi),e/=(this.scale.x+this.scale.y+this.scale.z)/3,e*=e,c.isBufferGeometry){var f=c.index;c=c.attributes.position.array;if(null!==f){var g=f.array;f=0;for(var k=g.length;f<k;f++){var h=g[f];Rf.fromArray(c,3*h);qg(Rf,h,e,d,a,b,this)}}else for(f=0,g=c.length/3;f<g;f++)Rf.fromArray(c,3*f),qg(Rf,f,e,d,a,b,this)}else for(c=c.vertices,f=0,g=c.length;f<g;f++)qg(c[f],f,e,d,a,b,this)},updateMorphTargets:function(){var a=
this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")},clone:function(){return(new this.constructor(this.geometry,
this.material)).copy(this)}});sg.prototype=Object.assign(Object.create(ca.prototype),{constructor:sg,isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});Mc.prototype=Object.create(ca.prototype);Mc.prototype.constructor=Mc;Mc.prototype.isCompressedTexture=!0;Td.prototype=Object.create(ca.prototype);Td.prototype.constructor=Td;Td.prototype.isCanvasTexture=!0;Ud.prototype=Object.create(ca.prototype);Ud.prototype.constructor=Ud;Ud.prototype.isDepthTexture=
!0;Nc.prototype=Object.create(z.prototype);Nc.prototype.constructor=Nc;Vd.prototype=Object.create(N.prototype);Vd.prototype.constructor=Vd;Oc.prototype=Object.create(z.prototype);Oc.prototype.constructor=Oc;Wd.prototype=Object.create(N.prototype);Wd.prototype.constructor=Wd;Ga.prototype=Object.create(z.prototype);Ga.prototype.constructor=Ga;Xd.prototype=Object.create(N.prototype);Xd.prototype.constructor=Xd;Pc.prototype=Object.create(Ga.prototype);Pc.prototype.constructor=Pc;Yd.prototype=Object.create(N.prototype);
Yd.prototype.constructor=Yd;bc.prototype=Object.create(Ga.prototype);bc.prototype.constructor=bc;Zd.prototype=Object.create(N.prototype);Zd.prototype.constructor=Zd;Qc.prototype=Object.create(Ga.prototype);Qc.prototype.constructor=Qc;$d.prototype=Object.create(N.prototype);$d.prototype.constructor=$d;Rc.prototype=Object.create(Ga.prototype);Rc.prototype.constructor=Rc;ae.prototype=Object.create(N.prototype);ae.prototype.constructor=ae;cc.prototype=Object.create(z.prototype);cc.prototype.constructor=
cc;cc.prototype.toJSON=function(){var a=z.prototype.toJSON.call(this);a.path=this.parameters.path.toJSON();return a};be.prototype=Object.create(N.prototype);be.prototype.constructor=be;Sc.prototype=Object.create(z.prototype);Sc.prototype.constructor=Sc;ce.prototype=Object.create(N.prototype);ce.prototype.constructor=ce;Tc.prototype=Object.create(z.prototype);Tc.prototype.constructor=Tc;var Xk={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=Zh(a,0,e,c,!0),g=[];if(!f||f.next===
f.prev)return g;var k;if(d){var h=c;d=[];var m;var n=0;for(m=b.length;n<m;n++){var p=b[n]*h;var q=n<m-1?b[n+1]*h:a.length;p=Zh(a,p,q,h,!1);p===p.next&&(p.steiner=!0);d.push(Jk(p))}d.sort(Hk);for(n=0;n<d.length;n++){b=d[n];h=f;if(h=Ik(b,h))b=bi(h,b),ee(b,b.next);f=ee(f,f.next)}}if(a.length>80*c){var t=k=a[0];var r=d=a[1];for(h=c;h<e;h+=c)n=a[h],b=a[h+1],n<t&&(t=n),b<r&&(r=b),n>k&&(k=n),b>d&&(d=b);k=Math.max(k-t,d-r);k=0!==k?1/k:0}fe(f,g,c,t,r,k);return g}},rb={area:function(a){for(var b=a.length,c=
0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},isClockWise:function(a){return 0>rb.area(a)},triangulateShape:function(a,b){var c=[],d=[],e=[];ci(a);di(c,a);var f=a.length;b.forEach(ci);for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,di(c,b[a]);b=Xk.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e}};ec.prototype=Object.create(N.prototype);ec.prototype.constructor=ec;ec.prototype.toJSON=function(){var a=N.prototype.toJSON.call(this);return ei(this.parameters.shapes,
this.parameters.options,a)};eb.prototype=Object.create(z.prototype);eb.prototype.constructor=eb;eb.prototype.toJSON=function(){var a=z.prototype.toJSON.call(this);return ei(this.parameters.shapes,this.parameters.options,a)};var Kk={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new v(b[3*c],b[3*c+1]),new v(a,d),new v(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var k=b[3*d],h=b[3*d+1];d=b[3*d+2];var m=b[3*e],n=b[3*e+1];e=
b[3*e+2];var p=b[3*f],q=b[3*f+1];b=b[3*f+2];return.01>Math.abs(g-h)?[new v(a,1-c),new v(k,1-d),new v(m,1-e),new v(p,1-b)]:[new v(g,1-c),new v(h,1-d),new v(n,1-e),new v(q,1-b)]}};he.prototype=Object.create(N.prototype);he.prototype.constructor=he;Vc.prototype=Object.create(eb.prototype);Vc.prototype.constructor=Vc;ie.prototype=Object.create(N.prototype);ie.prototype.constructor=ie;fc.prototype=Object.create(z.prototype);fc.prototype.constructor=fc;je.prototype=Object.create(N.prototype);je.prototype.constructor=
je;Wc.prototype=Object.create(z.prototype);Wc.prototype.constructor=Wc;ke.prototype=Object.create(N.prototype);ke.prototype.constructor=ke;Xc.prototype=Object.create(z.prototype);Xc.prototype.constructor=Xc;gc.prototype=Object.create(N.prototype);gc.prototype.constructor=gc;gc.prototype.toJSON=function(){var a=N.prototype.toJSON.call(this);return fi(this.parameters.shapes,a)};hc.prototype=Object.create(z.prototype);hc.prototype.constructor=hc;hc.prototype.toJSON=function(){var a=z.prototype.toJSON.call(this);
return fi(this.parameters.shapes,a)};Yc.prototype=Object.create(z.prototype);Yc.prototype.constructor=Yc;ic.prototype=Object.create(N.prototype);ic.prototype.constructor=ic;sb.prototype=Object.create(z.prototype);sb.prototype.constructor=sb;le.prototype=Object.create(ic.prototype);le.prototype.constructor=le;me.prototype=Object.create(sb.prototype);me.prototype.constructor=me;ne.prototype=Object.create(N.prototype);ne.prototype.constructor=ne;Zc.prototype=Object.create(z.prototype);Zc.prototype.constructor=
Zc;var va=Object.freeze({__proto__:null,WireframeGeometry:Nc,ParametricGeometry:Vd,ParametricBufferGeometry:Oc,TetrahedronGeometry:Xd,TetrahedronBufferGeometry:Pc,OctahedronGeometry:Yd,OctahedronBufferGeometry:bc,IcosahedronGeometry:Zd,IcosahedronBufferGeometry:Qc,DodecahedronGeometry:$d,DodecahedronBufferGeometry:Rc,PolyhedronGeometry:Wd,PolyhedronBufferGeometry:Ga,TubeGeometry:ae,TubeBufferGeometry:cc,TorusKnotGeometry:be,TorusKnotBufferGeometry:Sc,TorusGeometry:ce,TorusBufferGeometry:Tc,TextGeometry:he,
TextBufferGeometry:Vc,SphereGeometry:ie,SphereBufferGeometry:fc,RingGeometry:je,RingBufferGeometry:Wc,PlaneGeometry:Gd,PlaneBufferGeometry:ac,LatheGeometry:ke,LatheBufferGeometry:Xc,ShapeGeometry:gc,ShapeBufferGeometry:hc,ExtrudeGeometry:ec,ExtrudeBufferGeometry:eb,EdgesGeometry:Yc,ConeGeometry:le,ConeBufferGeometry:me,CylinderGeometry:ic,CylinderBufferGeometry:sb,CircleGeometry:ne,CircleBufferGeometry:Zc,BoxGeometry:kh,BoxBufferGeometry:Hd});jc.prototype=Object.create(K.prototype);jc.prototype.constructor=
jc;jc.prototype.isShadowMaterial=!0;jc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);return this};tb.prototype=Object.create(pa.prototype);tb.prototype.constructor=tb;tb.prototype.isRawShaderMaterial=!0;fb.prototype=Object.create(K.prototype);fb.prototype.constructor=fb;fb.prototype.isMeshStandardMaterial=!0;fb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;
this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;
this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};kc.prototype=Object.create(fb.prototype);kc.prototype.constructor=
kc;kc.prototype.isMeshPhysicalMaterial=!0;kc.prototype.copy=function(a){fb.prototype.copy.call(this,a);this.defines={STANDARD:"",PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearcoat=a.clearcoat;this.clearcoatRoughness=a.clearcoatRoughness;this.sheen=a.sheen?(this.sheen||new B).copy(a.sheen):null;this.clearcoatNormalMap=a.clearcoatNormalMap;this.clearcoatNormalScale.copy(a.clearcoatNormalScale);this.transparency=a.transparency;return this};Ib.prototype=Object.create(K.prototype);Ib.prototype.constructor=
Ib;Ib.prototype.isMeshPhongMaterial=!0;Ib.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;
this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=
a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};lc.prototype=Object.create(K.prototype);lc.prototype.constructor=lc;lc.prototype.isMeshToonMaterial=!0;lc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.gradientMap=a.gradientMap;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;
this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.wireframe=a.wireframe;this.wireframeLinewidth=
a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};mc.prototype=Object.create(K.prototype);mc.prototype.constructor=mc;mc.prototype.isMeshNormalMaterial=!0;mc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};nc.prototype=Object.create(K.prototype);nc.prototype.constructor=nc;nc.prototype.isMeshLambertMaterial=!0;nc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;
this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;
this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};oc.prototype=Object.create(K.prototype);oc.prototype.constructor=oc;oc.prototype.isMeshMatcapMaterial=!0;oc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;
this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};pc.prototype=Object.create(ka.prototype);pc.prototype.constructor=pc;pc.prototype.isLineDashedMaterial=!0;pc.prototype.copy=function(a){ka.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=
a.gapSize;return this};var Yk=Object.freeze({__proto__:null,ShadowMaterial:jc,SpriteMaterial:Hb,RawShaderMaterial:tb,ShaderMaterial:pa,PointsMaterial:Ua,MeshPhysicalMaterial:kc,MeshStandardMaterial:fb,MeshPhongMaterial:Ib,MeshToonMaterial:lc,MeshNormalMaterial:mc,MeshLambertMaterial:nc,MeshDepthMaterial:Eb,MeshDistanceMaterial:Fb,MeshBasicMaterial:Na,MeshMatcapMaterial:oc,LineDashedMaterial:pc,LineBasicMaterial:ka,Material:K}),ba={arraySlice:function(a,b,c){return ba.isTypedArray(a)?new a.constructor(a.subarray(b,
void 0!==c?c:a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var k=c[f]*b,h=0;h!==
b;++h)e[g++]=a[k+h];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}},subclip:function(a,b,c,d,e){e=e||30;a=a.clone();
a.name=b;var f=[];for(b=0;b<a.tracks.length;++b){for(var g=a.tracks[b],k=g.getValueSize(),h=[],m=[],n=0;n<g.times.length;++n){var p=g.times[n]*e;if(!(p<c||p>=d))for(h.push(g.times[n]),p=0;p<k;++p)m.push(g.values[n*k+p])}0!==h.length&&(g.times=ba.convertArray(h,g.times.constructor),g.values=ba.convertArray(m,g.values.constructor),f.push(g))}a.tracks=f;c=Infinity;for(b=0;b<a.tracks.length;++b)c>a.tracks[b].times[0]&&(c=a.tracks[b].times[0]);for(b=0;b<a.tracks.length;++b)a.tracks[b].shift(-1*c);a.resetDuration();
return a}};Object.assign(Ka.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<
d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];
return b},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});Object.assign(Ka.prototype,{beforeStart_:Ka.prototype.copySampleValue_,afterEnd_:Ka.prototype.copySampleValue_});Ve.prototype=Object.assign(Object.create(Ka.prototype),{constructor:Ve,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],k=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=
2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===k)switch(this.getSettings_().endingEnd){case 2401:f=a;k=2*c-b;break;case 2402:f=1;k=c+d[1]-d[0];break;default:f=a-1,k=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(k-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var k=a-g,h=this._offsetPrev,m=this._offsetNext,n=this._weightPrev,p=this._weightNext,
q=(c-b)/(d-b);c=q*q;d=c*q;b=-n*d+2*n*c-n*q;n=(1+n)*d+(-1.5-2*n)*c+(-.5+n)*q+1;q=(-1-p)*d+(1.5+p)*c+.5*q;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=b*f[h+c]+n*f[k+c]+q*f[a+c]+p*f[m+c];return e}});oe.prototype=Object.assign(Object.create(Ka.prototype),{constructor:oe,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var k=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[k+d]*c+f[a+d]*b;return e}});We.prototype=Object.assign(Object.create(Ka.prototype),{constructor:We,
interpolate_:function(a){return this.copySampleValue_(a-1)}});Object.assign(ua,{toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:ba.convertArray(a.times,Array),values:ba.convertArray(a.values,Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b}});Object.assign(ua.prototype,{constructor:ua,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new We(this.times,
this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new oe(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Ve(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+
" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrack:",b);return this}this.createInterpolant=b;return this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/
this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=ba.arraySlice(c,e,f),this.values=ba.arraySlice(this.values,e*a,f*a);return this},validate:function(){var a=
!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break}e=
g}if(void 0!==b&&ba.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var k=!1,h=a[g];if(h!==a[g+1]&&(1!==g||h!==h[0]))if(d)k=!0;else{var m=g*c,n=m-c,p=m+c;for(h=0;h!==c;++h){var q=b[m+h];if(q!==b[n+h]||q!==b[p+h]){k=!0;break}}}if(k){if(g!==e)for(a[e]=
a[g],k=g*c,m=e*c,h=0;h!==c;++h)b[m+h]=b[k+h];++e}}if(0<f){a[e]=a[f];k=f*c;m=e*c;for(h=0;h!==c;++h)b[m+h]=b[k+h];++e}e!==a.length&&(this.times=ba.arraySlice(a,0,e),this.values=ba.arraySlice(b,0,e*c));return this},clone:function(){var a=ba.arraySlice(this.times,0),b=ba.arraySlice(this.values,0);a=new this.constructor(this.name,a,b);a.createInterpolant=this.createInterpolant;return a}});Xe.prototype=Object.assign(Object.create(ua.prototype),{constructor:Xe,ValueTypeName:"bool",ValueBufferType:Array,
DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Ye.prototype=Object.assign(Object.create(ua.prototype),{constructor:Ye,ValueTypeName:"color"});$c.prototype=Object.assign(Object.create(ua.prototype),{constructor:$c,ValueTypeName:"number"});Ze.prototype=Object.assign(Object.create(Ka.prototype),{constructor:Ze,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)Da.slerpFlat(e,
0,f,a-g,f,a,b);return e}});pe.prototype=Object.assign(Object.create(ua.prototype),{constructor:pe,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Ze(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});$e.prototype=Object.assign(Object.create(ua.prototype),{constructor:$e,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
ad.prototype=Object.assign(Object.create(ua.prototype),{constructor:ad,ValueTypeName:"vector"});Object.assign(Pa,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(Mk(c[e]).scale(d));return new Pa(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid};for(var d=0,e=c.length;d!==e;++d)b.push(ua.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var k=
[],h=[];k.push((g+e-1)%e,g,(g+1)%e);h.push(0,1,0);var m=ba.getKeyframeOrder(k);k=ba.sortedArray(k,1,m);h=ba.sortedArray(h,1,m);d||0!==k[0]||(k.push(e),h.push(h[0]));f.push((new $c(".morphTargetInfluences["+b[g].name+"]",k,h)).scale(1/c))}return new Pa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,
f=0,g=a.length;f<g;f++){var k=a[f],h=k.name.match(e);if(h&&1<h.length){var m=h[1];(h=d[m])||(d[m]=h=[]);h.push(k)}}a=[];for(m in d)a.push(Pa.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ba.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||[];for(var k=
0;k<a.length;k++){var h=a[k].keys;if(h&&0!==h.length)if(h[0].morphTargets){f={};for(var m=0;m<h.length;m++)if(h[m].morphTargets)for(var n=0;n<h[m].morphTargets.length;n++)f[h[m].morphTargets[n]]=-1;for(var p in f){var q=[],t=[];for(n=0;n!==h[m].morphTargets.length;++n){var r=h[m];q.push(r.time);t.push(r.morphTarget===p?1:0)}d.push(new $c(".morphTargetInfluence["+p+"]",q,t))}f=f.length*(g||1)}else m=".bones["+b[k].name+"]",c(ad,m+".position",h,"pos",d),c(pe,m+".quaternion",h,"rot",d),c(ad,m+".scale",
h,"scl",d)}return 0===d.length?null:new Pa(e,f,d)}});Object.assign(Pa.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1])}this.duration=a;return this},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},validate:function(){for(var a=!0,b=0;b<this.tracks.length;b++)a=a&&this.tracks[b].validate();return a},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();
return this},clone:function(){for(var a=[],b=0;b<this.tracks.length;b++)a.push(this.tracks[b].clone());return new Pa(this.name,this.duration,a)}});var tc={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},gi=new vg;Object.assign(Y.prototype,{load:function(){},parse:function(){},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=
a;return this},setResourcePath:function(a){this.resourcePath=a;return this}});var bb={};Qa.prototype=Object.assign(Object.create(Y.prototype),{constructor:Qa,load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=tc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;if(void 0!==bb[a])bb[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);
if(g){c=g[1];var k=!!g[2];g=g[3];g=decodeURIComponent(g);k&&(g=atob(g));try{var h=(this.responseType||"").toLowerCase();switch(h){case "arraybuffer":case "blob":var m=new Uint8Array(g.length);for(k=0;k<g.length;k++)m[k]=g.charCodeAt(k);var n="blob"===h?new Blob([m.buffer],{type:c}):m.buffer;break;case "document":n=(new DOMParser).parseFromString(g,c);break;case "json":n=JSON.parse(g);break;default:n=g}setTimeout(function(){b&&b(n);e.manager.itemEnd(a)},0)}catch(q){setTimeout(function(){d&&d(q);e.manager.itemError(a);
e.manager.itemEnd(a)},0)}}else{bb[a]=[];bb[a].push({onLoad:b,onProgress:c,onError:d});var p=new XMLHttpRequest;p.open("GET",a,!0);p.addEventListener("load",function(b){var c=this.response,d=bb[a];delete bb[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");tc.add(a,c);for(var f=0,g=d.length;f<g;f++){var k=d[f];if(k.onLoad)k.onLoad(c)}}else{f=0;for(g=d.length;f<g;f++)if(k=d[f],k.onError)k.onError(b);e.manager.itemError(a)}e.manager.itemEnd(a)},
!1);p.addEventListener("progress",function(b){for(var c=bb[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b)}},!1);p.addEventListener("error",function(b){var c=bb[a];delete bb[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);p.addEventListener("abort",function(b){var c=bb[a];delete bb[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);void 0!==
this.responseType&&(p.responseType=this.responseType);void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials);p.overrideMimeType&&p.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(k in this.requestHeader)p.setRequestHeader(k,this.requestHeader[k]);p.send(null)}e.manager.itemStart(a);return p}},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=
a;return this},setRequestHeader:function(a){this.requestHeader=a;return this}});wg.prototype=Object.assign(Object.create(Y.prototype),{constructor:wg,load:function(a,b,c,d){var e=this,f=new Qa(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){for(var b=[],c=0;c<a.length;c++){var d=Pa.parse(a[c]);b.push(d)}return b}});xg.prototype=Object.assign(Object.create(Y.prototype),{constructor:xg,load:function(a,b,c,d){function e(e){h.load(a[e],function(a){a=
f.parse(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(k.minFilter=1006),k.format=a.format,k.needsUpdate=!0,b&&b(k))},c,d)}var f=this,g=[],k=new Mc;k.image=g;var h=new Qa(this.manager);h.setPath(this.path);h.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=0,n=0,p=a.length;n<p;++n)e(n);else h.load(a,function(a){a=f.parse(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=
0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else k.image.width=a.width,k.image.height=a.height,k.mipmaps=a.mipmaps;1===a.mipmapCount&&(k.minFilter=1006);k.format=a.format;k.needsUpdate=!0;b&&b(k)},c,d);return k}});af.prototype=Object.assign(Object.create(Y.prototype),{constructor:af,load:function(a,b,c,d){var e=this,f=new $b,g=new Qa(this.manager);g.setResponseType("arraybuffer");g.setPath(this.path);g.load(a,function(a){if(a=
e.parse(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1006,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps,f.minFilter=1008),1===a.mipmapCount&&
(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});bd.prototype=Object.assign(Object.create(Y.prototype),{constructor:bd,load:function(a,b,c,d){function e(){h.removeEventListener("load",e,!1);h.removeEventListener("error",f,!1);tc.add(a,this);b&&b(this);g.manager.itemEnd(a)}function f(b){h.removeEventListener("load",e,!1);h.removeEventListener("error",f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a)}void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var g=this,
k=tc.get(a);if(void 0!==k)return g.manager.itemStart(a),setTimeout(function(){b&&b(k);g.manager.itemEnd(a)},0),k;var h=document.createElementNS("http://www.w3.org/1999/xhtml","img");h.addEventListener("load",e,!1);h.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(h.crossOrigin=this.crossOrigin);g.manager.itemStart(a);h.src=a;return h}});bf.prototype=Object.assign(Object.create(Y.prototype),{constructor:bf,load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=
a;k++;6===k&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new pb,g=new bd(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var k=0;for(c=0;c<a.length;++c)e(c);return f}});cf.prototype=Object.assign(Object.create(Y.prototype),{constructor:cf,load:function(a,b,c,d){var e=new ca,f=new bd(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=
!0;void 0!==b&&b(e)},c,d);return e}});Object.assign(H.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-
1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f}return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,
f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new n,d=[],e=[],f=[],g=new n,k=new P,h;for(h=0;h<=a;h++){var m=h/a;d[h]=this.getTangentAt(m);
d[h].normalize()}e[0]=new n;f[0]=new n;h=Number.MAX_VALUE;m=Math.abs(d[0].x);var x=Math.abs(d[0].y),p=Math.abs(d[0].z);m<=h&&(h=m,c.set(1,0,0));x<=h&&(h=x,c.set(0,1,0));p<=h&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(h=1;h<=a;h++)e[h]=e[h-1].clone(),f[h]=f[h-1].clone(),g.crossVectors(d[h-1],d[h]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(L.clamp(d[h-1].dot(d[h]),-1,1)),e[h].applyMatrix4(k.makeRotationAxis(g,c))),f[h].crossVectors(d[h],
e[h]);if(!0===b)for(c=Math.acos(L.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),h=1;h<=a;h++)e[h].applyMatrix4(k.makeRotationAxis(d[h],c*h)),f[h].crossVectors(d[h],e[h]);return{tangents:d,normals:e,binormals:f}},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this},toJSON:function(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;
a.type=this.type;return a},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this}});La.prototype=Object.create(H.prototype);La.prototype.constructor=La;La.prototype.isEllipseCurve=!0;La.prototype.getPoint=function(a,b){b=b||new v;for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;)d+=c;for(;d>c;)d-=c;d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+
this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f)};La.prototype.copy=function(a){H.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};La.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);
a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a};La.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};cd.prototype=Object.create(La.prototype);
cd.prototype.constructor=cd;cd.prototype.isArcCurve=!0;var Sf=new n,mh=new yg,nh=new yg,oh=new yg;Aa.prototype=Object.create(H.prototype);Aa.prototype.constructor=Aa;Aa.prototype.isCatmullRomCurve3=!0;Aa.prototype.getPoint=function(a,b){b=b||new n;var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Sf.subVectors(c[0],c[1]).add(c[0]),f=Sf;var g=c[e%d];
var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Sf.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Sf);if("centripetal"===this.curveType||"chordal"===this.curveType){var l="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),l);e=Math.pow(g.distanceToSquared(h),l);l=Math.pow(h.distanceToSquared(c),l);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>l&&(l=e);mh.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,l);nh.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,l);oh.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,
e,l)}else"catmullrom"===this.curveType&&(mh.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),nh.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),oh.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(mh.calc(a),nh.calc(a),oh.calc(a));return b};Aa.prototype.copy=function(a){H.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};Aa.prototype.toJSON=function(){var a=
H.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a};Aa.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new n).fromArray(d))}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};Va.prototype=Object.create(H.prototype);
Va.prototype.constructor=Va;Va.prototype.isCubicBezierCurve=!0;Va.prototype.getPoint=function(a,b){b=b||new v;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(re(a,c.x,d.x,e.x,f.x),re(a,c.y,d.y,e.y,f.y));return b};Va.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Va.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=
this.v3.toArray();return a};Va.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};gb.prototype=Object.create(H.prototype);gb.prototype.constructor=gb;gb.prototype.isCubicBezierCurve3=!0;gb.prototype.getPoint=function(a,b){b=b||new n;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(re(a,c.x,d.x,e.x,f.x),re(a,c.y,d.y,e.y,f.y),re(a,c.z,d.z,e.z,f.z));return b};gb.prototype.copy=
function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};gb.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};gb.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};Ea.prototype=Object.create(H.prototype);
Ea.prototype.constructor=Ea;Ea.prototype.isLineCurve=!0;Ea.prototype.getPoint=function(a,b){b=b||new v;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Ea.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Ea.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};Ea.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ea.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);
a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ea.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Wa.prototype=Object.create(H.prototype);Wa.prototype.constructor=Wa;Wa.prototype.isLineCurve3=!0;Wa.prototype.getPoint=function(a,b){b=b||new n;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Wa.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Wa.prototype.copy=
function(a){H.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Wa.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Wa.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Xa.prototype=Object.create(H.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isQuadraticBezierCurve=!0;Xa.prototype.getPoint=function(a,b){b=b||new v;var c=
this.v0,d=this.v1,e=this.v2;b.set(qe(a,c.x,d.x,e.x),qe(a,c.y,d.y,e.y));return b};Xa.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Xa.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Xa.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};
hb.prototype=Object.create(H.prototype);hb.prototype.constructor=hb;hb.prototype.isQuadraticBezierCurve3=!0;hb.prototype.getPoint=function(a,b){b=b||new n;var c=this.v0,d=this.v1,e=this.v2;b.set(qe(a,c.x,d.x,e.x),qe(a,c.y,d.y,e.y),qe(a,c.z,d.z,e.z));return b};hb.prototype.copy=function(a){H.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};hb.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();
a.v2=this.v2.toArray();return a};hb.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ya.prototype=Object.create(H.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isSplineCurve=!0;Ya.prototype.getPoint=function(a,b){b=b||new v;var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set(hi(d,e.x,f.x,g.x,
c.x),hi(d,e.y,f.y,g.y,c.y));return b};Ya.prototype.copy=function(a){H.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this};Ya.prototype.toJSON=function(){var a=H.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());return a};Ya.prototype.fromJSON=function(a){H.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];
this.points.push((new v).fromArray(d))}return this};var ph=Object.freeze({__proto__:null,ArcCurve:cd,CatmullRomCurve3:Aa,CubicBezierCurve:Va,CubicBezierCurve3:gb,EllipseCurve:La,LineCurve:Ea,LineCurve3:Wa,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:hb,SplineCurve:Ya});ub.prototype=Object.assign(Object.create(H.prototype),{constructor:ub,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Ea(b,
a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],
b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||
(b.push(h),c=h)}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},copy:function(a){H.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this},toJSON:function(){var a=H.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a},fromJSON:function(a){H.prototype.fromJSON.call(this,
a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push((new ph[d.type]).fromJSON(d))}return this}});Za.prototype=Object.assign(Object.create(ub.prototype),{constructor:Za,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y);return this},moveTo:function(a,b){this.currentPoint.set(a,b);return this},lineTo:function(a,b){var c=new Ea(this.currentPoint.clone(),new v(a,b));this.curves.push(c);
this.currentPoint.set(a,b);return this},quadraticCurveTo:function(a,b,c,d){a=new Xa(this.currentPoint.clone(),new v(a,b),new v(c,d));this.curves.push(a);this.currentPoint.set(c,d);return this},bezierCurveTo:function(a,b,c,d,e,f){a=new Va(this.currentPoint.clone(),new v(a,b),new v(c,d),new v(e,f));this.curves.push(a);this.currentPoint.set(e,f);return this},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a);b=new Ya(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);return this},
arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);return this},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);return this},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);return this},absellipse:function(a,b,c,d,e,f,g,h){a=new La(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);
return this},copy:function(a){ub.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this},toJSON:function(){var a=ub.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a},fromJSON:function(a){ub.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this}});Jb.prototype=Object.assign(Object.create(Za.prototype),{constructor:Jb,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);
return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){Za.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this},toJSON:function(){var a=Za.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());return a},fromJSON:function(a){Za.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];
for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push((new Za).fromJSON(d))}return this}});da.prototype=Object.assign(Object.create(G.prototype),{constructor:da,isLight:!0,copy:function(a){G.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=G.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==
this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});df.prototype=Object.assign(Object.create(da.prototype),{constructor:df,isHemisphereLight:!0,copy:function(a){da.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(ib.prototype,{_projScreenMatrix:new P,
_lightPositionWorld:new n,_lookTarget:new n,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(a){var b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld);b.position.copy(f);e.setFromMatrixPosition(a.target.matrixWorld);b.lookAt(e);b.updateMatrixWorld();d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromMatrix(d);
c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);c.multiply(b.projectionMatrix);c.multiply(b.matrixWorldInverse)},getViewport:function(a){return this._viewports[a]},getFrameExtents:function(){return this._frameExtents},copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==
this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});ef.prototype=Object.assign(Object.create(ib.prototype),{constructor:ef,isSpotLightShadow:!0,updateMatrices:function(a){var b=this.camera,c=2*L.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height,e=a.distance||b.far;if(c!==b.fov||d!==b.aspect||e!==b.far)b.fov=c,b.aspect=d,b.far=e,b.updateProjectionMatrix();ib.prototype.updateMatrices.call(this,a)}});ff.prototype=
Object.assign(Object.create(da.prototype),{constructor:ff,isSpotLight:!0,copy:function(a){da.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});zg.prototype=Object.assign(Object.create(ib.prototype),{constructor:zg,isPointLightShadow:!0,updateMatrices:function(a,b){void 0===b&&(b=0);var c=this.camera,d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=
this._projScreenMatrix;e.setFromMatrixPosition(a.matrixWorld);c.position.copy(e);f.copy(c.position);f.add(this._cubeDirections[b]);c.up.copy(this._cubeUps[b]);c.lookAt(f);c.updateMatrixWorld();d.makeTranslation(-e.x,-e.y,-e.z);g.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);this._frustum.setFromMatrix(g)}});gf.prototype=Object.assign(Object.create(da.prototype),{constructor:gf,isPointLight:!0,copy:function(a){da.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=
a.shadow.clone();return this}});dd.prototype=Object.assign(Object.create(cb.prototype),{constructor:dd,isOrthographicCamera:!0,copy:function(a,b){cb.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});
this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;null!==this.view&&this.view.enabled&&
(d=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom,e+=d*this.view.offsetX,c=e+d*this.view.width,a-=b*this.view.offsetY,b=a-b*this.view.height);this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=G.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;
a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});hf.prototype=Object.assign(Object.create(ib.prototype),{constructor:hf,isDirectionalLightShadow:!0,updateMatrices:function(a){ib.prototype.updateMatrices.call(this,a)}});jf.prototype=Object.assign(Object.create(da.prototype),{constructor:jf,isDirectionalLight:!0,copy:function(a){da.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});
kf.prototype=Object.assign(Object.create(da.prototype),{constructor:kf,isAmbientLight:!0});lf.prototype=Object.assign(Object.create(da.prototype),{constructor:lf,isRectAreaLight:!0,copy:function(a){da.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=da.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a}});mf.prototype=Object.assign(Object.create(Y.prototype),{constructor:mf,load:function(a,b,c,d){var e=
this,f=new Qa(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Yk[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.sheen&&(d.sheen=(new B).setHex(a.sheen));
void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearcoat&&(d.clearcoat=a.clearcoat);void 0!==a.clearcoatRoughness&&(d.clearcoatRoughness=a.clearcoatRoughness);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);
void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.stencilWrite&&(d.stencilWrite=a.stencilWrite);void 0!==a.stencilWriteMask&&(d.stencilWriteMask=a.stencilWriteMask);void 0!==a.stencilFunc&&(d.stencilFunc=a.stencilFunc);
void 0!==a.stencilRef&&(d.stencilRef=a.stencilRef);void 0!==a.stencilFuncMask&&(d.stencilFuncMask=a.stencilFuncMask);void 0!==a.stencilFail&&(d.stencilFail=a.stencilFail);void 0!==a.stencilZFail&&(d.stencilZFail=a.stencilZFail);void 0!==a.stencilZPass&&(d.stencilZPass=a.stencilZPass);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&
(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);
void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.morphNormals&&(d.morphNormals=a.morphNormals);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.toneMapped&&(d.toneMapped=a.toneMapped);void 0!==a.userData&&(d.userData=a.userData);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];d.uniforms[e]={};switch(f.type){case "t":d.uniforms[e].value=b(f.value);break;case "c":d.uniforms[e].value=(new B).setHex(f.value);break;
case "v2":d.uniforms[e].value=(new v).fromArray(f.value);break;case "v3":d.uniforms[e].value=(new n).fromArray(f.value);break;case "v4":d.uniforms[e].value=(new ia).fromArray(f.value);break;case "m3":d.uniforms[e].value=(new ya).fromArray(f.value);case "m4":d.uniforms[e].value=(new P).fromArray(f.value);break;default:d.uniforms[e].value=f.value}}void 0!==a.defines&&(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);
if(void 0!==a.extensions)for(var g in a.extensions)d.extensions[g]=a.extensions[g];void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.matcap&&(d.matcap=b(a.matcap));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));
void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==a.normalScale&&(e=a.normalScale,!1===Array.isArray(e)&&(e=[e,e]),d.normalScale=(new v).fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==
a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.refractionRatio&&(d.refractionRatio=a.refractionRatio);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=
a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));void 0!==a.clearcoatNormalMap&&(d.clearcoatNormalMap=b(a.clearcoatNormalMap));void 0!==a.clearcoatNormalScale&&(d.clearcoatNormalScale=(new v).fromArray(a.clearcoatNormalScale));return d},setTextures:function(a){this.textures=a;return this}});var qh={decodeText:function(a){if("undefined"!==typeof TextDecoder)return(new TextDecoder).decode(a);
for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);try{return decodeURIComponent(escape(b))}catch(e){return b}},extractUrlBase:function(a){var b=a.lastIndexOf("/");return-1===b?"./":a.substr(0,b+1)}};nf.prototype=Object.assign(Object.create(z.prototype),{constructor:nf,isInstancedBufferGeometry:!0,copy:function(a){z.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a=z.prototype.toJSON.call(this);
a.maxInstancedCount=this.maxInstancedCount;a.isInstancedBufferGeometry=!0;return a}});of.prototype=Object.assign(Object.create(M.prototype),{constructor:of,isInstancedBufferAttribute:!0,copy:function(a){M.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this},toJSON:function(){var a=M.prototype.toJSON.call(this);a.meshPerAttribute=this.meshPerAttribute;a.isInstancedBufferAttribute=!0;return a}});pf.prototype=Object.assign(Object.create(Y.prototype),{constructor:pf,load:function(a,
b,c,d){var e=this,f=new Qa(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=a.isInstancedBufferGeometry?new nf:new z,c=a.data.index;if(void 0!==c){var d=new rh[c.type](c.array);b.setIndex(new M(d,1))}c=a.data.attributes;for(var e in c){var f=c[e];d=new rh[f.type](f.array);d=new (f.isInstancedBufferAttribute?of:M)(d,f.itemSize,f.normalized);void 0!==f.name&&(d.name=f.name);b.setAttribute(e,d)}var g=a.data.morphAttributes;if(g)for(e in g){var h=
g[e],l=[];c=0;for(var m=h.length;c<m;c++)f=h[c],d=new rh[f.type](f.array),d=new M(d,f.itemSize,f.normalized),void 0!==f.name&&(d.name=f.name),l.push(d);b.morphAttributes[e]=l}a.data.morphTargetsRelative&&(b.morphTargetsRelative=!0);e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,f=e.length;c!==f;++c)d=e[c],b.addGroup(d.start,d.count,d.materialIndex);c=a.data.boundingSphere;void 0!==c&&(e=new n,void 0!==c.center&&e.fromArray(c.center),b.boundingSphere=new ob(e,c.radius));a.name&&
(b.name=a.name);a.userData&&(b.userData=a.userData);return b}});var rh={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};qf.prototype=Object.assign(Object.create(Y.prototype),{constructor:qf,load:function(a,b,c,d){var e=this,f=""===this.path?qh.extractUrlBase(a):this.path;this.resourcePath=
this.resourcePath||f;f=new Qa(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c)}catch(l){void 0!==d&&d(l);console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a):e.parse(f,b)},c,d)},parse:function(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==
b&&b(e)});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=(new Jb).fromJSON(a[c]);b[e.uuid]=e}return b},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new pf,e=0,f=a.length;e<f;e++){var g=a[e];switch(g.type){case "PlaneGeometry":case "PlaneBufferGeometry":var h=
new va[g.type](g.width,g.height,g.widthSegments,g.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":h=new va[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":h=new va[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":h=new va[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,
g.thetaStart,g.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":h=new va[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":h=new va[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case "DodecahedronGeometry":case "DodecahedronBufferGeometry":case "IcosahedronGeometry":case "IcosahedronBufferGeometry":case "OctahedronGeometry":case "OctahedronBufferGeometry":case "TetrahedronGeometry":case "TetrahedronBufferGeometry":h=
new va[g.type](g.radius,g.detail);break;case "RingGeometry":case "RingBufferGeometry":h=new va[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":h=new va[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":h=new va[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case "TubeGeometry":case "TubeBufferGeometry":h=
new va[g.type]((new ph[g.path.type]).fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);break;case "LatheGeometry":case "LatheBufferGeometry":h=new va[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case "PolyhedronGeometry":case "PolyhedronBufferGeometry":h=new va[g.type](g.vertices,g.indices,g.radius,g.details);break;case "ShapeGeometry":case "ShapeBufferGeometry":h=[];for(var l=0,m=g.shapes.length;l<m;l++){var n=b[g.shapes[l]];h.push(n)}h=new va[g.type](h,g.curveSegments);
break;case "ExtrudeGeometry":case "ExtrudeBufferGeometry":h=[];l=0;for(m=g.shapes.length;l<m;l++)n=b[g.shapes[l]],h.push(n);l=g.options.extrudePath;void 0!==l&&(g.options.extrudePath=(new ph[l.type]).fromJSON(l));h=new va[g.type](h,g.options);break;case "BufferGeometry":case "InstancedBufferGeometry":h=d.parse(g);break;case "Geometry":"THREE"in window&&"LegacyJSONLoader"in THREE?h=(new THREE.LegacyJSONLoader).parse(g,this.resourcePath).geometry:console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+'"');continue}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h}return c},parseMaterials:function(a,b){var c={},d={};if(void 0!==a){var e=new mf;e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],l=0;l<g.materials.length;l++){var m=g.materials[l];void 0===c[m.uuid]&&(c[m.uuid]=e.parse(m));
h.push(c[m.uuid])}d[g.uuid]=h}else void 0===c[g.uuid]&&(c[g.uuid]=e.parse(g)),d[g.uuid]=c[g.uuid]}}return d},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=Pa.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){b=new vg(b);var f=new bd(b);f.setCrossOrigin(this.crossOrigin);
b=0;for(var g=a.length;b<g;b++){var h=a[b],l=h.url;if(Array.isArray(l)){e[h.uuid]=[];for(var m=0,n=l.length;m<n;m++){var p=l[m];p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:d.resourcePath+p;e[h.uuid].push(c(p))}}else p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.resourcePath+h.url,e[h.uuid]=c(p)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==
a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=Array.isArray(b[g.image])?new pb(b[g.image]):new ca(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Zk));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&
h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],Yi),h.wrapT=c(g.wrap[1],Yi));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,Zi));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,Zi));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=
g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h}return d},parseObject:function(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a]}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f])}return b}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a]}}
switch(a.type){case "Scene":var f=new nb;void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new B(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Qe(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Pe(a.fog.color,a.fog.density)));break;case "PerspectiveCamera":f=new qa(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=
a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "OrthographicCamera":f=new dd(a.left,a.right,a.top,a.bottom,a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "AmbientLight":f=new kf(a.color,a.intensity);break;case "DirectionalLight":f=new jf(a.color,a.intensity);break;case "PointLight":f=new gf(a.color,a.intensity,a.distance,a.decay);break;case "RectAreaLight":f=new lf(a.color,a.intensity,a.width,a.height);break;
case "SpotLight":f=new ff(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case "HemisphereLight":f=new df(a.color,a.groundColor,a.intensity);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case "Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new Sd(f,g):new U(f,g);break;case "InstancedMesh":f=d(a.geometry);g=e(a.material);var h=a.instanceMatrix;f=new Te(f,g,a.count);f.instanceMatrix=new M(new Float32Array(h.array),
16);break;case "LOD":f=new Rd;break;case "Line":f=new Ja(d(a.geometry),e(a.material),a.mode);break;case "LineLoop":f=new Ue(d(a.geometry),e(a.material));break;case "LineSegments":f=new ma(d(a.geometry),e(a.material));break;case "PointCloud":case "Points":f=new Lc(d(a.geometry),e(a.material));break;case "Sprite":f=new Pd(e(a.material));break;case "Group":f=new Nd;break;default:f=new G}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&
(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),
void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&(f.frustumCulled=a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children)for(h=a.children,g=0;g<
h.length;g++)f.add(this.parseObject(h[g],b,c));if("LOD"===a.type)for(void 0!==a.autoUpdate&&(f.autoUpdate=a.autoUpdate),a=a.levels,h=0;h<a.length;h++){g=a[h];var l=f.getObjectByProperty("uuid",g.object);void 0!==l&&f.addLevel(l,g.distance)}return f}});var Zk={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Yi={RepeatWrapping:1E3,
ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Zi={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};Ag.prototype=Object.assign(Object.create(Y.prototype),{constructor:Ag,setOptions:function(a){this.options=a;return this},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=tc.get(a);if(void 0!==f)return e.manager.itemStart(a),
setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;fetch(a).then(function(a){return a.blob()}).then(function(a){return void 0===e.options?createImageBitmap(a):createImageBitmap(a,e.options)}).then(function(c){tc.add(a,c);b&&b(c);e.manager.itemEnd(a)}).catch(function(b){d&&d(b);e.manager.itemError(a);e.manager.itemEnd(a)});e.manager.itemStart(a)}});Object.assign(Bg.prototype,{moveTo:function(a,b){this.currentPath=new Za;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);return this},
lineTo:function(a,b){this.currentPath.lineTo(a,b);return this},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d);return this},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);return this},splineThru:function(a){this.currentPath.splineThru(a);return this},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Jb;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=
f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=rb.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new Jb;h.curves=g.curves;b.push(h);return b}var l=!e(f[0].getPoints());l=a?
!l:l;h=[];var m=[],n=[],p=0;m[p]=void 0;n[p]=[];for(var q=0,t=f.length;q<t;q++){g=f[q];var r=g.getPoints();var u=e(r);(u=a?!u:u)?(!l&&m[p]&&p++,m[p]={s:new Jb,p:r},m[p].s.curves=g.curves,l&&p++,n[p]=[]):n[p].push({h:g,p:r[0]})}if(!m[0])return c(f);if(1<m.length){q=!1;a=[];e=0;for(f=m.length;e<f;e++)h[e]=[];e=0;for(f=m.length;e<f;e++)for(g=n[e],u=0;u<g.length;u++){l=g[u];p=!0;for(r=0;r<m.length;r++)d(l.p,m[r].p)&&(e!==r&&a.push({froms:e,tos:r,hole:u}),p?(p=!1,h[r].push(l)):q=!0);p&&h[e].push(l)}0<
a.length&&(q||(n=h))}q=0;for(e=m.length;q<e;q++)for(h=m[q].s,b.push(h),a=n[q],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b}});Object.assign(Cg.prototype,{isFont:!0,generateShapes:function(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=Array.from?Array.from(a):String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,l=0;l<e.length;l++){var m=e[l];if("\n"===m)g=0,h-=f;else{var n=m;m=d;var p=g,q=h,t=b,r=t.glyphs[n]||
t.glyphs["?"];if(r){n=new Bg;if(r.o){t=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(var u=0,v=t.length;u<v;)switch(t[u++]){case "m":var w=t[u++]*m+p;var z=t[u++]*m+q;n.moveTo(w,z);break;case "l":w=t[u++]*m+p;z=t[u++]*m+q;n.lineTo(w,z);break;case "q":var B=t[u++]*m+p;var C=t[u++]*m+q;var A=t[u++]*m+p;var D=t[u++]*m+q;n.quadraticCurveTo(A,D,B,C);break;case "b":B=t[u++]*m+p,C=t[u++]*m+q,A=t[u++]*m+p,D=t[u++]*m+q,w=t[u++]*m+p,z=t[u++]*m+q,n.bezierCurveTo(A,D,w,z,B,C)}}m={offsetX:r.ha*m,path:n}}else console.error('THREE.Font: character "'+
n+'" does not exists in font family '+t.familyName+"."),m=void 0;g+=m.offsetX;a.push(m.path)}}b=0;for(e=a.length;b<e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c}});Dg.prototype=Object.assign(Object.create(Y.prototype),{constructor:Dg,load:function(a,b,c,d){var e=this,f=new Qa(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,
a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new Cg(a)}});var Tf,Ig={getContext:function(){void 0===Tf&&(Tf=new (window.AudioContext||window.webkitAudioContext));return Tf},setContext:function(a){Tf=a}};rf.prototype=Object.assign(Object.create(Y.prototype),{constructor:rf,load:function(a,b,c,d){var e=new Qa(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);Ig.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Object.assign(sf.prototype,
{isSphericalHarmonics3:!0,set:function(a){for(var b=0;9>b;b++)this.coefficients[b].copy(a[b]);return this},zero:function(){for(var a=0;9>a;a++)this.coefficients[a].set(0,0,0);return this},getAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.282095);b.addScale(e[1],.488603*d);b.addScale(e[2],.488603*a);b.addScale(e[3],.488603*c);b.addScale(e[4],1.092548*c*d);b.addScale(e[5],1.092548*d*a);b.addScale(e[6],.315392*(3*a*a-1));b.addScale(e[7],1.092548*c*a);b.addScale(e[8],
.546274*(c*c-d*d));return b},getIrradianceAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.886227);b.addScale(e[1],1.023328*d);b.addScale(e[2],1.023328*a);b.addScale(e[3],1.023328*c);b.addScale(e[4],.858086*c*d);b.addScale(e[5],.858086*d*a);b.addScale(e[6],.743125*a*a-.247708);b.addScale(e[7],.858086*c*a);b.addScale(e[8],.429043*(c*c-d*d));return b},add:function(a){for(var b=0;9>b;b++)this.coefficients[b].add(a.coefficients[b]);return this},scale:function(a){for(var b=
0;9>b;b++)this.coefficients[b].multiplyScalar(a);return this},lerp:function(a,b){for(var c=0;9>c;c++)this.coefficients[c].lerp(a.coefficients[c],b);return this},equals:function(a){for(var b=0;9>b;b++)if(!this.coefficients[b].equals(a.coefficients[b]))return!1;return!0},copy:function(a){return this.set(a.coefficients)},clone:function(){return(new this.constructor).copy(this)},fromArray:function(a,b){void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].fromArray(a,b+3*d);return this},toArray:function(a,
b){void 0===a&&(a=[]);void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].toArray(a,b+3*d);return a}});Object.assign(sf,{getBasisAt:function(a,b){var c=a.x,d=a.y;a=a.z;b[0]=.282095;b[1]=.488603*d;b[2]=.488603*a;b[3]=.488603*c;b[4]=1.092548*c*d;b[5]=1.092548*d*a;b[6]=.315392*(3*a*a-1);b[7]=1.092548*c*a;b[8]=.546274*(c*c-d*d)}});$a.prototype=Object.assign(Object.create(da.prototype),{constructor:$a,isLightProbe:!0,copy:function(a){da.prototype.copy.call(this,a);this.sh.copy(a.sh);this.intensity=
a.intensity;return this},toJSON:function(a){return da.prototype.toJSON.call(this,a)}});Eg.prototype=Object.assign(Object.create($a.prototype),{constructor:Eg,isHemisphereLightProbe:!0,copy:function(a){$a.prototype.copy.call(this,a);return this},toJSON:function(a){return $a.prototype.toJSON.call(this,a)}});Fg.prototype=Object.assign(Object.create($a.prototype),{constructor:Fg,isAmbientLightProbe:!0,copy:function(a){$a.prototype.copy.call(this,a);return this},toJSON:function(a){return $a.prototype.toJSON.call(this,
a)}});var $i=new P,aj=new P;Object.assign(ii.prototype,{update:function(a){var b=this._cache;if(b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||b.eyeSep!==this.eyeSep){b.focus=a.focus;b.fov=a.fov;b.aspect=a.aspect*this.aspect;b.near=a.near;b.far=a.far;b.zoom=a.zoom;b.eyeSep=this.eyeSep;var c=a.projectionMatrix.clone(),d=b.eyeSep/2,e=d*b.near/b.focus,f=b.near*Math.tan(L.DEG2RAD*b.fov*.5)/b.zoom;aj.elements[12]=-d;$i.elements[12]=d;
d=-f*b.aspect+e;var g=f*b.aspect+e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraL.projectionMatrix.copy(c);d=-f*b.aspect-e;g=f*b.aspect-e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraR.projectionMatrix.copy(c)}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(aj);this.cameraR.matrixWorld.copy(a.matrixWorld).multiply($i)}});Object.assign(Gg.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();
this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.autoStart=this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});var uc=new n,bj=new Da,$k=new n,vc=new n;Hg.prototype=Object.assign(Object.create(G.prototype),
{constructor:Hg,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);return this},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);
this.filter.connect(this.context.destination);return this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this},updateMatrixWorld:function(a){G.prototype.updateMatrixWorld.call(this,a);a=this.context.listener;var b=this.up;this.timeDelta=this._clock.getDelta();this.matrixWorld.decompose(uc,bj,$k);vc.set(0,0,-1).applyQuaternion(bj);if(a.positionX){var c=this.context.currentTime+this.timeDelta;
a.positionX.linearRampToValueAtTime(uc.x,c);a.positionY.linearRampToValueAtTime(uc.y,c);a.positionZ.linearRampToValueAtTime(uc.z,c);a.forwardX.linearRampToValueAtTime(vc.x,c);a.forwardY.linearRampToValueAtTime(vc.y,c);a.forwardZ.linearRampToValueAtTime(vc.z,c);a.upX.linearRampToValueAtTime(b.x,c);a.upY.linearRampToValueAtTime(b.y,c);a.upZ.linearRampToValueAtTime(b.z,c)}else a.setPosition(uc.x,uc.y,uc.z),a.setOrientation(vc.x,vc.y,vc.z,b.x,b.y,b.z)}});ed.prototype=Object.assign(Object.create(G.prototype),
{constructor:ed,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setMediaElementSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();return this},setMediaStreamSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaStreamNode";this.source=this.context.createMediaStreamSource(a);this.connect();
return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(a){void 0===a&&(a=0);if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._startedAt=this.context.currentTime+a,a=this.context.createBufferSource(),a.buffer=this.buffer,a.loop=this.loop,a.loopStart=this.loopStart,a.loopEnd=this.loopEnd,
a.onended=this.onEnded.bind(this),a.start(this._startedAt,this._pausedAt+this.offset,this.duration),this.isPlaying=!0,this.source=a,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return!0===this.isPlaying&&(this._pausedAt=(this.context.currentTime-this._startedAt)*this.playbackRate,this.source.stop(),this.source.onended=null,this.isPlaying=!1),
this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._pausedAt=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},
disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},setDetune:function(a){this.detune=
a;if(void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,
this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},setLoopStart:function(a){this.loopStart=a;
return this},setLoopEnd:function(a){this.loopEnd=a;return this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this}});var wc=new n,cj=new Da,al=new n,xc=new n;Jg.prototype=Object.assign(Object.create(ed.prototype),{constructor:Jg,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a;return this},getRolloffFactor:function(){return this.panner.rolloffFactor},
setRolloffFactor:function(a){this.panner.rolloffFactor=a;return this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a;return this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a;return this},setDirectionalCone:function(a,b,c){this.panner.coneInnerAngle=a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this},updateMatrixWorld:function(a){G.prototype.updateMatrixWorld.call(this,
a);if(!0!==this.hasPlaybackControl||!1!==this.isPlaying)if(this.matrixWorld.decompose(wc,cj,al),xc.set(0,0,1).applyQuaternion(cj),a=this.panner,a.positionX){var b=this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(wc.x,b);a.positionY.linearRampToValueAtTime(wc.y,b);a.positionZ.linearRampToValueAtTime(wc.z,b);a.orientationX.linearRampToValueAtTime(xc.x,b);a.orientationY.linearRampToValueAtTime(xc.y,b);a.orientationZ.linearRampToValueAtTime(xc.z,b)}else a.setPosition(wc.x,
wc.y,wc.z),a.setOrientation(xc.x,xc.y,xc.z)}});Object.assign(Kg.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(Lg.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=
e},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,
b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){Da.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});var bl=/[\[\]\.:\/]/g,cl="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",dl=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),el=/(WCOD+)?/.source.replace("WCOD",cl),fl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),gl=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),
hl=new RegExp("^"+dl+el+fl+gl+"$"),il=["material","materials","bones"];Object.assign(ji.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,
c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(Ba,{Composite:ji,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new Ba.Composite(a,b,c):new Ba(a,b,c)},sanitizeNodeName:function(a){return a.replace(/\s/g,"_").replace(bl,"")},parseTrackName:function(a){var b=hl.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==
c){var d=b.nodeName.substring(c+1);-1!==il.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d)}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b},findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===
b||e.uuid===b||(e=d(e.children)))return e}return null};if(a=d(a.children))return a}return null}});Object.assign(Ba.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},
function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b]},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];
this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,
b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=Ba.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=
b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;
for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;
this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
this);return}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==
f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});
Object.assign(Ba.prototype,{_getValue_unbound:Ba.prototype.getValue,_setValue_unbound:Ba.prototype.setValue});Object.assign(ki.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,l=void 0,m=0,n=arguments.length;m!==n;++m){var p=arguments[m],q=p.uuid,t=d[q];if(void 0===t){t=b++;d[q]=t;a.push(p);q=0;for(var r=h;q!==r;++q)g[q].push(new Ba(p,e[q],f[q]))}else if(t<
c){l=a[t];var u=--c;r=a[u];d[r.uuid]=t;a[t]=r;d[q]=u;a[u]=p;q=0;for(r=h;q!==r;++q){var v=g[q],w=v[t];v[t]=v[u];void 0===w&&(w=new Ba(p,e[q],f[q]));v[u]=w}}else a[t]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=
arguments[f],l=h.uuid,m=c[l];if(void 0!==m&&m>=b){var n=b++,p=a[n];c[p.uuid]=m;a[m]=p;c[l]=n;a[n]=h;h=0;for(l=e;h!==l;++h){p=d[h];var q=p[m];p[m]=p[n];p[n]=q}}}this.nCachedObjects_=b},uncache:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var l=arguments[g].uuid,m=d[l];if(void 0!==m)if(delete d[l],m<c){l=--c;var n=a[l],p=--b,q=a[p];d[n.uuid]=m;a[m]=n;d[q.uuid]=l;a[l]=q;a.pop();n=0;for(q=f;n!==
q;++n){var t=e[n],r=t[p];t[m]=t[l];t[l]=r;t.pop()}}else for(p=--b,q=a[p],d[q.uuid]=m,a[m]=q,a.pop(),n=0,q=f;n!==q;++n)t=e[n],t[m]=t[p],t.pop()}this.nCachedObjects_=c},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,m=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(m);c=l;for(d=h.length;c!==d;++c)m[c]=new Ba(h[c],a,b);return m},unsubscribe_:function(a){var b=
this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(li.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&
!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,
1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},
setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=
this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;
e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];
b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===e?b:f&&1===(e&1)?c-b:b;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else{this.time=b;break a}this.clampWhenFinished?this.paused=!0:this.enabled=!1;this.time=b;this._mixer.dispatchEvent({type:"finished",
action:this,direction:0>a?-1:1})}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this.time=b,this._mixer.dispatchEvent({type:"loop",
action:this,loopDelta:d}))}else this.time=b;if(f&&1===(e&1))return c-b}return b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=
c;return this}});Mg.prototype=Object.assign(Object.create(Fa.prototype),{constructor:Mg,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,l=h[g];void 0===l&&(l={},h[g]=l);for(h=0;h!==e;++h){var m=d[h],n=m.name,p=l[n];if(void 0===p){p=f[h];if(void 0!==p){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,g,n));continue}p=new Lg(Ba.create(c,n,b&&b._propertyBindings[h].binding.parsedPath),
m.ValueTypeName,m.getValueSize());++p.referenceCount;this._addInactiveBinding(p,g,n)}f[h]=p;a[h].resultBuffer=p.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},
_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},
get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=
f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},
_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,
e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];0===Object.keys(f).length&&delete e[d]},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=
this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new oe(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=
d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?Pa.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip)}if(null===c)return null;b=new li(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b},existingAction:function(a,b){var c=b||this._root;b=c.uuid;
c="string"===typeof a?Pa.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,
a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},setTime:function(a){for(var b=this.time=0;b<this._actions.length;b++)this._actions[b].time=0;return this.update(a)},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,l=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=
null;l._cacheIndex=h;b[h]=l;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a))}});
tf.prototype.clone=function(){return new tf(void 0===this.value.clone?this.value:this.value.clone())};Ng.prototype=Object.assign(Object.create(qb.prototype),{constructor:Ng,isInstancedInterleavedBuffer:!0,copy:function(a){qb.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});Object.assign(mi.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,
a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b,c){c=c||[];Og(a,this,c,b);c.sort(ni);return c},intersectObjects:function(a,b,c){c=c||[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
c;for(var d=0,e=a.length;d<e;d++)Og(a[d],this,c,b);c.sort(ni);return c}});Object.assign(oi.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,
b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(L.clamp(b/this.radius,-1,1)));return this}});Object.assign(pi.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,
b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this}});var dj=new v;Object.assign(Pg.prototype,{set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(a,b){b=dj.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){void 0===a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new v);return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new v);return this.isEmpty()?
a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,
b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new v);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new v);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){return dj.copy(a).clamp(this.min,
this.max).sub(a).length()},intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var ej=new n,Uf=new n;Object.assign(Qg.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);
this.end.copy(a.end);return this},getCenter:function(a){void 0===a&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new n);return a.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new n);return a.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){void 0===
b&&(console.warn("THREE.Line3: .at() target is now required"),b=new n);return this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(a,b){ej.subVectors(a,this.start);Uf.subVectors(this.end,this.start);a=Uf.dot(Uf);a=Uf.dot(ej)/a;b&&(a=L.clamp(a,0,1));return a},closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new n);return this.delta(c).multiplyScalar(a).add(this.start)},
applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});se.prototype=Object.create(G.prototype);se.prototype.constructor=se;se.prototype.isImmediateRenderObject=!0;var fj=new n;fd.prototype=Object.create(G.prototype);fd.prototype.constructor=fd;fd.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};fd.prototype.update=function(){this.light.updateMatrixWorld();
var a=this.light.distance?this.light.distance:1E3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a);fj.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(fj);void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var Pb=new n,Vf=new P,sh=new P;gd.prototype=Object.create(ma.prototype);gd.prototype.constructor=gd;gd.prototype.updateMatrixWorld=function(a){var b=this.bones,c=this.geometry,d=c.getAttribute("position");sh.getInverse(this.root.matrixWorld);
for(var e=0,f=0;e<b.length;e++){var g=b[e];g.parent&&g.parent.isBone&&(Vf.multiplyMatrices(sh,g.matrixWorld),Pb.setFromMatrixPosition(Vf),d.setXYZ(f,Pb.x,Pb.y,Pb.z),Vf.multiplyMatrices(sh,g.parent.matrixWorld),Pb.setFromMatrixPosition(Vf),d.setXYZ(f+1,Pb.x,Pb.y,Pb.z),f+=2)}c.getAttribute("position").needsUpdate=!0;G.prototype.updateMatrixWorld.call(this,a)};hd.prototype=Object.create(U.prototype);hd.prototype.constructor=hd;hd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
hd.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)};var jl=new n,gj=new B,hj=new B;id.prototype=Object.create(G.prototype);id.prototype.constructor=id;id.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};id.prototype.update=function(){var a=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var b=a.geometry.getAttribute("color");gj.copy(this.light.color);
hj.copy(this.light.groundColor);for(var c=0,d=b.count;c<d;c++){var e=c<d/2?gj:hj;b.setXYZ(c,e.r,e.g,e.b)}b.needsUpdate=!0}a.lookAt(jl.setFromMatrixPosition(this.light.matrixWorld).negate())};uf.prototype=Object.assign(Object.create(ma.prototype),{constructor:uf,copy:function(a){ma.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this},clone:function(){return(new this.constructor).copy(this)}});vf.prototype=Object.create(ma.prototype);vf.prototype.constructor=
vf;var ij=new n,Wf=new n,jj=new n;jd.prototype=Object.create(G.prototype);jd.prototype.constructor=jd;jd.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};jd.prototype.update=function(){ij.setFromMatrixPosition(this.light.matrixWorld);Wf.setFromMatrixPosition(this.light.target.matrixWorld);jj.subVectors(Wf,ij);this.lightPlane.lookAt(Wf);void 0!==this.color?(this.lightPlane.material.color.set(this.color),
this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(Wf);this.targetLine.scale.z=jj.length()};var wf=new n,R=new cb;te.prototype=Object.create(ma.prototype);te.prototype.constructor=te;te.prototype.update=function(){var a=this.geometry,b=this.pointMap;R.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);ja("c",b,a,R,0,0,-1);ja("t",b,a,R,0,0,1);ja("n1",b,a,
R,-1,-1,-1);ja("n2",b,a,R,1,-1,-1);ja("n3",b,a,R,-1,1,-1);ja("n4",b,a,R,1,1,-1);ja("f1",b,a,R,-1,-1,1);ja("f2",b,a,R,1,-1,1);ja("f3",b,a,R,-1,1,1);ja("f4",b,a,R,1,1,1);ja("u1",b,a,R,.7,1.1,-1);ja("u2",b,a,R,-.7,1.1,-1);ja("u3",b,a,R,0,2,-1);ja("cf1",b,a,R,-1,0,1);ja("cf2",b,a,R,1,0,1);ja("cf3",b,a,R,0,-1,1);ja("cf4",b,a,R,0,1,1);ja("cn1",b,a,R,-1,0,-1);ja("cn2",b,a,R,1,0,-1);ja("cn3",b,a,R,0,-1,-1);ja("cn4",b,a,R,0,1,-1);a.getAttribute("position").needsUpdate=!0};var Xf=new Ra;vb.prototype=Object.create(ma.prototype);
vb.prototype.constructor=vb;vb.prototype.update=function(a){void 0!==a&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&Xf.setFromObject(this.object);if(!Xf.isEmpty()){a=Xf.min;var b=Xf.max,c=this.geometry.attributes.position,d=c.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=a.x;d[4]=b.y;d[5]=b.z;d[6]=a.x;d[7]=a.y;d[8]=b.z;d[9]=b.x;d[10]=a.y;d[11]=b.z;d[12]=b.x;d[13]=b.y;d[14]=a.z;d[15]=a.x;d[16]=b.y;d[17]=a.z;d[18]=a.x;d[19]=a.y;d[20]=a.z;d[21]=b.x;d[22]=a.y;d[23]=
a.z;c.needsUpdate=!0;this.geometry.computeBoundingSphere()}};vb.prototype.setFromObject=function(a){this.object=a;this.update();return this};vb.prototype.copy=function(a){ma.prototype.copy.call(this,a);this.object=a.object;return this};vb.prototype.clone=function(){return(new this.constructor).copy(this)};ue.prototype=Object.create(ma.prototype);ue.prototype.constructor=ue;ue.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),
G.prototype.updateMatrixWorld.call(this,a))};ve.prototype=Object.create(Ja.prototype);ve.prototype.constructor=ve;ve.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);G.prototype.updateMatrixWorld.call(this,a)};var kj=new n,xf,Rg;wb.prototype=Object.create(G.prototype);wb.prototype.constructor=wb;wb.prototype.setDirection=function(a){.99999<
a.y?this.quaternion.set(0,0,0,1):-.99999>a.y?this.quaternion.set(1,0,0,0):(kj.set(a.z,0,-a.x).normalize(),this.quaternion.setFromAxisAngle(kj,Math.acos(a.y)))};wb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(1E-4,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};wb.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};wb.prototype.copy=
function(a){G.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);return this};wb.prototype.clone=function(){return(new this.constructor).copy(this)};we.prototype=Object.create(ma.prototype);we.prototype.constructor=we;var jb=Math.pow(2,8),lj=[.125,.215,.35,.446,.526,.582],vi=5+lj.length,kb={3E3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},Ug=new dd,yf=function(a){var b=new Float32Array(a),c=new n(0,1,0);a=new tb({defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},
weights:{value:b},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c},inputEncoding:{value:kb[3E3]},outputEncoding:{value:kb[3E3]}},vertexShader:Wg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n"+Xg()+"\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tfor (int i = 0; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfor (int dir = -1; dir < 2; dir += 2) {\n\t\t\tif (i == 0 && dir == 1)\n\t\t\t\tcontinue;\n\t\t\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\t\t\tif (all(equal(axis, vec3(0.0))))\n\t\t\t\taxis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);\n\t\t\taxis = normalize(axis);\n\t\t\tfloat theta = dTheta * float(dir * i);\n\t\t\tfloat cosTheta = cos(theta);\n\t\t\t// Rodrigues' axis-angle rotation\n\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t\t\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\t\t\tgl_FragColor.rgb +=\n\t\t\t\t\tweights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);\n\t\t}\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="SphericalGaussianBlur";return a}(20),Qb=null,Rb=null,th=function(){for(var a=[],b=[],c=[],d=8,e=0;e<vi;e++){var f=Math.pow(2,d);b.push(f);var g=1/f;4<e?g=lj[e-8+4-1]:0==e&&(g=0);c.push(g);g=1/(f-1);f=-g/2;g=1+g/2;var h=[f,f,g,f,g,g,f,f,g,g,f,g];f=new Float32Array(108);g=new Float32Array(72);for(var l=new Float32Array(36),m=0;6>m;m++){var n=m%3*2/3-1,p=2<m?0:-1;f.set([n,p,0,n+2/3,p,0,n+2/3,p+1,0,n,p,0,n+2/3,p+1,0,n,p+1,0],18*m);g.set(h,12*m);l.set([m,
m,m,m,m,m],6*m)}h=new z;h.setAttribute("position",new M(f,3));h.setAttribute("uv",new M(g,2));h.setAttribute("faceIndex",new M(l,1));a.push(h);4<d&&d--}return{_lodPlanes:a,_sizeLods:b,_sigmas:c}}(),xe=th._lodPlanes,zi=th._sizeLods,Af=th._sigmas,zf=null,Z=null,yc=(1+Math.sqrt(5))/2,xd=1/yc,xi=[new n(1,1,1),new n(-1,1,1),new n(1,1,-1),new n(-1,1,-1),new n(0,yc,xd),new n(0,yc,-xd),new n(xd,0,yc),new n(-xd,0,yc),new n(yc,xd,0),new n(-yc,xd,0)];Sg.prototype={constructor:Sg,fromScene:function(a,b,c,d){void 0===
b&&(b=0);void 0===c&&(c=.1);void 0===d&&(d=100);var e=ri();c=new qa(90,1,c,d);d=[1,1,1,1,-1,1];var f=[1,1,-1,-1,-1,1],g=Z.outputEncoding,h=Z.toneMapping,l=Z.toneMappingExposure,m=Z.getClearColor(),n=Z.getClearAlpha();Z.toneMapping=1;Z.toneMappingExposure=1;Z.outputEncoding=3E3;a.scale.z*=-1;var p=a.background;if(p&&p.isColor){p.convertSRGBToLinear();var q=Math.min(Math.max(Math.ceil(Math.log2(Math.max(p.r,p.g,p.b))),-128),127);p=p.multiplyScalar(Math.pow(2,-q));Z.setClearColor(p,(q+128)/255);a.background=
null}Z.setRenderTarget(e);for(p=0;6>p;p++)q=p%3,0==q?(c.up.set(0,d[p],0),c.lookAt(f[p],0,0)):1==q?(c.up.set(0,0,d[p]),c.lookAt(0,f[p],0)):(c.up.set(0,d[p],0),c.lookAt(0,0,f[p])),Vg(q*jb,2<p?jb:0,jb,jb),Z.render(a,c);Z.toneMapping=h;Z.toneMappingExposure=l;Z.outputEncoding=g;Z.setClearColor(m,n);a.scale.z*=-1;0<b&&wi(e,0,0,b);ui(e);ti();e.scissorTest=!1;return e},fromEquirectangular:function(a){a.magFilter=1003;a.minFilter=1003;a.generateMipmaps=!1;return this.fromCubemap(a)},fromCubemap:function(a){var b=
ri(a),c=new nb;a.isCubeTexture?null==Rb&&(Rb=Bi()):null==Qb&&(Qb=Ai());var d=a.isCubeTexture?Rb:Qb;c.add(new U(xe[0],d));d=d.uniforms;d.envMap.value=a;a.isCubeTexture||d.texelSize.value.set(1/a.image.width,1/a.image.height);d.inputEncoding.value=kb[a.encoding];d.outputEncoding.value=kb[a.encoding];Z.setRenderTarget(b);Vg(0,0,3*jb,2*jb);Z.render(c,Ug);ui(b);ti();b.scissorTest=!1;return b},compileCubemapShader:function(){null==Rb&&(Rb=Bi(),Tg(Rb))},compileEquirectangularShader:function(){null==Qb&&
(Qb=Ai(),Tg(Qb))},dispose:function(){yf.dispose();null!=Rb&&Rb.dispose();null!=Qb&&Qb.dispose();for(var a=0;a<xe.length;a++)xe[a].dispose()}};H.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(H.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Object.assign(ub.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new N,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,
e.y,e.z||0))}return b}});Object.assign(Za.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");return this.setFromPoints(a)}});Ci.prototype=Object.create(Aa.prototype);Di.prototype=Object.create(Aa.prototype);Yg.prototype=Object.create(Aa.prototype);Object.assign(Yg.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},
reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});uf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};gd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Y.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
return qh.extractUrlBase(a)}});Y.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(qf.prototype,{setTexturePath:function(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a)}});Object.assign(Pg.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Ra.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");
return this.getSize(a)}});Qg.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Object.assign(L,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random()},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");return L.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
return L.ceilPowerOfTwo(a)}});Object.assign(ya.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(a){console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");
return a.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(P.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
return(new n).setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},
rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(a){console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},
applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f)}});Sa.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};Da.prototype.multiplyVector3=
function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(Ub.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(a)}});Object.assign(na.prototype,{area:function(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea()},barycoordFromPoint:function(a,b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b)},midpoint:function(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a)},normal:function(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
return this.getNormal(a)},plane:function(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a)}});Object.assign(na,{barycoordFromPoint:function(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return na.getBarycoord(a,b,c,d,e)},normal:function(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return na.getNormal(a,b,c,d)}});Object.assign(Jb.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
return this.extractPoints(a)},extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new ec(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new gc(this,a)}});Object.assign(v.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(n.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
return this.manhattanLength()}});Object.assign(ia.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(N.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}});
Object.assign(G.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")}});
Object.defineProperties(G.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});
Object.assign(U.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(U.prototype,{drawMode:{get:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");return 0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});
Object.defineProperties(Rd.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Object.defineProperty(Se.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Sd.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(H.prototype,
"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a}});qa.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(da.prototype,
{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},
shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(M.prototype,
{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length}},dynamic:{get:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");return 35048===this.usage},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");this.setUsage(35048)}}});Object.assign(M.prototype,{setDynamic:function(a){console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
this.setUsage(!0===a?35048:35044);return this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(z.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addAttribute:function(a,b,c){console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
return b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute?"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this):this.setAttribute(a,b):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new M(b,c)))},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(a){console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");return this.deleteAttribute(a)}});
Object.defineProperties(z.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});Object.defineProperties(qb.prototype,{dynamic:{get:function(){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");return 35048===this.usage},set:function(a){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
this.setUsage(a)}}});Object.assign(qb.prototype,{setDynamic:function(a){console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");this.setUsage(!0===a?35048:35044);return this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(eb.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},
addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(tf.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});
Object.defineProperties(K.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new B}},shading:{get:function(){console.error("THREE."+
this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a}},stencilMask:{get:function(){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");return this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");this.stencilFuncMask=
a}}});Object.defineProperties(Ib.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(pa.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},
set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(og.prototype,{clearTarget:function(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d)},animate:function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a)},getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
return this.getRenderTarget()},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy()},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset()},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},
setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");return this.getActiveMipmapLevel()}});Object.defineProperties(og.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},
set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");return this.getContext()}},
vr:{get:function(){console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");return this.xr}},gammaInput:{get:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");return!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
return!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");this.outputEncoding=!0===a?3001:3E3}}});Object.defineProperties(Th.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},
set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(wa.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},
set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},
set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});Object.defineProperties(ed.prototype,{load:{value:function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new rf).load(a,function(a){b.setBuffer(a)});return this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Kg.prototype.getData=
function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};Ec.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b)};Kb.crossOrigin=void 0;Kb.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new cf;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};
Kb.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new bf;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};Kb.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Kb.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};
"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"113dev"}}));h.ACESFilmicToneMapping=5;h.AddEquation=100;h.AddOperation=2;h.AdditiveBlending=2;h.AlphaFormat=1021;h.AlwaysDepth=1;h.AlwaysStencilFunc=519;h.AmbientLight=kf;h.AmbientLightProbe=Fg;h.AnimationClip=Pa;h.AnimationLoader=wg;h.AnimationMixer=Mg;h.AnimationObjectGroup=ki;h.AnimationUtils=ba;h.ArcCurve=cd;h.ArrayCamera=Oe;h.ArrowHelper=wb;h.Audio=ed;h.AudioAnalyser=Kg;h.AudioContext=
Ig;h.AudioListener=Hg;h.AudioLoader=rf;h.AxesHelper=we;h.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new we(a)};h.BackSide=1;h.BasicDepthPacking=3200;h.BasicShadowMap=0;h.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new af(a)};h.Bone=pg;h.BooleanKeyframeTrack=Xe;h.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
return new vb(a,b)};h.Box2=Pg;h.Box3=Ra;h.Box3Helper=ue;h.BoxBufferGeometry=Hd;h.BoxGeometry=kh;h.BoxHelper=vb;h.BufferAttribute=M;h.BufferGeometry=z;h.BufferGeometryLoader=pf;h.ByteType=1010;h.Cache=tc;h.Camera=cb;h.CameraHelper=te;h.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")};h.CanvasTexture=Td;h.CatmullRomCurve3=Aa;h.CineonToneMapping=4;h.CircleBufferGeometry=Zc;h.CircleGeometry=ne;h.ClampToEdgeWrapping=1001;h.Clock=Gg;h.ClosedSplineCurve3=Ci;h.Color=B;h.ColorKeyframeTrack=
Ye;h.CompressedTexture=Mc;h.CompressedTextureLoader=xg;h.ConeBufferGeometry=me;h.ConeGeometry=le;h.CubeCamera=Ec;h.CubeGeometry=kh;h.CubeReflectionMapping=301;h.CubeRefractionMapping=302;h.CubeTexture=pb;h.CubeTextureLoader=bf;h.CubeUVReflectionMapping=306;h.CubeUVRefractionMapping=307;h.CubicBezierCurve=Va;h.CubicBezierCurve3=gb;h.CubicInterpolant=Ve;h.CullFaceBack=1;h.CullFaceFront=2;h.CullFaceFrontBack=3;h.CullFaceNone=0;h.Curve=H;h.CurvePath=ub;h.CustomBlending=5;h.CylinderBufferGeometry=sb;h.CylinderGeometry=
ic;h.Cylindrical=pi;h.DataTexture=$b;h.DataTexture2DArray=Fc;h.DataTexture3D=Gc;h.DataTextureLoader=af;h.DecrementStencilOp=7683;h.DecrementWrapStencilOp=34056;h.DefaultLoadingManager=gi;h.DepthFormat=1026;h.DepthStencilFormat=1027;h.DepthTexture=Ud;h.DirectionalLight=jf;h.DirectionalLightHelper=jd;h.DirectionalLightShadow=hf;h.DiscreteInterpolant=We;h.DodecahedronBufferGeometry=Rc;h.DodecahedronGeometry=$d;h.DoubleSide=2;h.DstAlphaFactor=206;h.DstColorFactor=208;h.DynamicBufferAttribute=function(a,
b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.");return(new M(a,b)).setUsage(35048)};h.DynamicCopyUsage=35050;h.DynamicDrawUsage=35048;h.DynamicReadUsage=35049;h.EdgesGeometry=Yc;h.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new ma(new Yc(a.geometry),new ka({color:void 0!==b?b:16777215}))};h.EllipseCurve=La;h.EqualDepth=4;h.EqualStencilFunc=
514;h.EquirectangularReflectionMapping=303;h.EquirectangularRefractionMapping=304;h.Euler=Sb;h.EventDispatcher=Fa;h.ExtrudeBufferGeometry=eb;h.ExtrudeGeometry=ec;h.Face3=zc;h.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new zc(a,b,c,e,f,g)};h.FaceColors=1;h.FileLoader=Qa;h.FlatShading=1;h.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
return new D(a,b)};h.Float32BufferAttribute=D;h.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new Dd(a,b)};h.Float64BufferAttribute=Dd;h.FloatType=1015;h.Fog=Qe;h.FogExp2=Pe;h.Font=Cg;h.FontLoader=Dg;h.FrontFaceDirectionCCW=1;h.FrontFaceDirectionCW=0;h.FrontSide=0;h.Frustum=Fd;h.GammaEncoding=3007;h.Geometry=N;h.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry}a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};h.GreaterDepth=6;h.GreaterEqualDepth=5;h.GreaterEqualStencilFunc=518;h.GreaterStencilFunc=516;h.GridHelper=uf;h.Group=Nd;h.HalfFloatType=1016;h.HemisphereLight=df;h.HemisphereLightHelper=id;h.HemisphereLightProbe=Eg;h.IcosahedronBufferGeometry=Qc;h.IcosahedronGeometry=
Zd;h.ImageBitmapLoader=Ag;h.ImageLoader=bd;h.ImageUtils=Kb;h.ImmediateRenderObject=se;h.IncrementStencilOp=7682;h.IncrementWrapStencilOp=34055;h.InstancedBufferAttribute=of;h.InstancedBufferGeometry=nf;h.InstancedInterleavedBuffer=Ng;h.InstancedMesh=Te;h.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new Bd(a,b)};h.Int16BufferAttribute=Bd;h.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
return new Cd(a,b)};h.Int32BufferAttribute=Cd;h.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new yd(a,b)};h.Int8BufferAttribute=yd;h.IntType=1013;h.InterleavedBuffer=qb;h.InterleavedBufferAttribute=Od;h.Interpolant=Ka;h.InterpolateDiscrete=2300;h.InterpolateLinear=2301;h.InterpolateSmooth=2302;h.InvertStencilOp=5386;h.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")};h.KeepStencilOp=7680;
h.KeyframeTrack=ua;h.LOD=Rd;h.LatheBufferGeometry=Xc;h.LatheGeometry=ke;h.Layers=Zf;h.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")};h.LessDepth=2;h.LessEqualDepth=3;h.LessEqualStencilFunc=515;h.LessStencilFunc=513;h.Light=da;h.LightProbe=$a;h.LightShadow=ib;h.Line=Ja;h.Line3=Qg;h.LineBasicMaterial=ka;h.LineCurve=Ea;h.LineCurve3=Wa;h.LineDashedMaterial=pc;h.LineLoop=Ue;h.LinePieces=1;h.LineSegments=ma;h.LineStrip=0;h.LinearEncoding=3E3;h.LinearFilter=
1006;h.LinearInterpolant=oe;h.LinearMipMapLinearFilter=1008;h.LinearMipMapNearestFilter=1007;h.LinearMipmapLinearFilter=1008;h.LinearMipmapNearestFilter=1007;h.LinearToneMapping=1;h.Loader=Y;h.LoaderUtils=qh;h.LoadingManager=vg;h.LogLuvEncoding=3003;h.LoopOnce=2200;h.LoopPingPong=2202;h.LoopRepeat=2201;h.LuminanceAlphaFormat=1025;h.LuminanceFormat=1024;h.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};h.Material=K;h.MaterialLoader=mf;h.Math=L;h.MathUtils=L;h.Matrix3=ya;h.Matrix4=P;h.MaxEquation=
104;h.Mesh=U;h.MeshBasicMaterial=Na;h.MeshDepthMaterial=Eb;h.MeshDistanceMaterial=Fb;h.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};h.MeshLambertMaterial=nc;h.MeshMatcapMaterial=oc;h.MeshNormalMaterial=mc;h.MeshPhongMaterial=Ib;h.MeshPhysicalMaterial=kc;h.MeshStandardMaterial=fb;h.MeshToonMaterial=lc;h.MinEquation=103;h.MirroredRepeatWrapping=1002;h.MixOperation=1;h.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice()};return a};h.MultiplyBlending=4;h.MultiplyOperation=0;h.NearestFilter=1003;h.NearestMipMapLinearFilter=1005;h.NearestMipMapNearestFilter=1004;h.NearestMipmapLinearFilter=1005;h.NearestMipmapNearestFilter=1004;h.NeverDepth=0;h.NeverStencilFunc=512;h.NoBlending=0;h.NoColors=0;h.NoToneMapping=0;h.NormalBlending=1;h.NotEqualDepth=7;h.NotEqualStencilFunc=517;h.NumberKeyframeTrack=$c;h.Object3D=G;h.ObjectLoader=qf;h.ObjectSpaceNormalMap=
1;h.OctahedronBufferGeometry=bc;h.OctahedronGeometry=Yd;h.OneFactor=201;h.OneMinusDstAlphaFactor=207;h.OneMinusDstColorFactor=209;h.OneMinusSrcAlphaFactor=205;h.OneMinusSrcColorFactor=203;h.OrthographicCamera=dd;h.PCFShadowMap=1;h.PCFSoftShadowMap=2;h.PMREMGenerator=Sg;h.ParametricBufferGeometry=Oc;h.ParametricGeometry=Vd;h.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Pd(a)};h.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
return new Ua(a)};h.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Lc(a,b)};h.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Ua(a)};h.Path=Za;h.PerspectiveCamera=qa;h.Plane=Sa;h.PlaneBufferGeometry=ac;h.PlaneGeometry=Gd;h.PlaneHelper=ve;h.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Lc(a,b)};
h.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Ua(a)};h.PointLight=gf;h.PointLightHelper=hd;h.Points=Lc;h.PointsMaterial=Ua;h.PolarGridHelper=vf;h.PolyhedronBufferGeometry=Ga;h.PolyhedronGeometry=Wd;h.PositionalAudio=Jg;h.PropertyBinding=Ba;h.PropertyMixer=Lg;h.QuadraticBezierCurve=Xa;h.QuadraticBezierCurve3=hb;h.Quaternion=Da;h.QuaternionKeyframeTrack=pe;h.QuaternionLinearInterpolant=Ze;h.REVISION="113dev";h.RGBADepthPacking=
3201;h.RGBAFormat=1023;h.RGBAIntegerFormat=1033;h.RGBA_ASTC_10x10_Format=37819;h.RGBA_ASTC_10x5_Format=37816;h.RGBA_ASTC_10x6_Format=37817;h.RGBA_ASTC_10x8_Format=37818;h.RGBA_ASTC_12x10_Format=37820;h.RGBA_ASTC_12x12_Format=37821;h.RGBA_ASTC_4x4_Format=37808;h.RGBA_ASTC_5x4_Format=37809;h.RGBA_ASTC_5x5_Format=37810;h.RGBA_ASTC_6x5_Format=37811;h.RGBA_ASTC_6x6_Format=37812;h.RGBA_ASTC_8x5_Format=37813;h.RGBA_ASTC_8x6_Format=37814;h.RGBA_ASTC_8x8_Format=37815;h.RGBA_PVRTC_2BPPV1_Format=35843;h.RGBA_PVRTC_4BPPV1_Format=
35842;h.RGBA_S3TC_DXT1_Format=33777;h.RGBA_S3TC_DXT3_Format=33778;h.RGBA_S3TC_DXT5_Format=33779;h.RGBDEncoding=3006;h.RGBEEncoding=3002;h.RGBEFormat=1023;h.RGBFormat=1022;h.RGBIntegerFormat=1032;h.RGBM16Encoding=3005;h.RGBM7Encoding=3004;h.RGB_ETC1_Format=36196;h.RGB_PVRTC_2BPPV1_Format=35841;h.RGB_PVRTC_4BPPV1_Format=35840;h.RGB_S3TC_DXT1_Format=33776;h.RGFormat=1030;h.RGIntegerFormat=1031;h.RawShaderMaterial=tb;h.Ray=Ub;h.Raycaster=mi;h.RectAreaLight=lf;h.RedFormat=1028;h.RedIntegerFormat=1029;
h.ReinhardToneMapping=2;h.RepeatWrapping=1E3;h.ReplaceStencilOp=7681;h.ReverseSubtractEquation=102;h.RingBufferGeometry=Wc;h.RingGeometry=je;h.Scene=nb;h.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};h.ShaderChunk=
O;h.ShaderLib=db;h.ShaderMaterial=pa;h.ShadowMaterial=jc;h.Shape=Jb;h.ShapeBufferGeometry=hc;h.ShapeGeometry=gc;h.ShapePath=Bg;h.ShapeUtils=rb;h.ShortType=1011;h.Skeleton=Se;h.SkeletonHelper=gd;h.SkinnedMesh=Sd;h.SmoothShading=2;h.Sphere=ob;h.SphereBufferGeometry=fc;h.SphereGeometry=ie;h.Spherical=oi;h.SphericalHarmonics3=sf;h.SphericalReflectionMapping=305;h.Spline=Yg;h.SplineCurve=Ya;h.SplineCurve3=Di;h.SpotLight=ff;h.SpotLightHelper=fd;h.SpotLightShadow=ef;h.Sprite=Pd;h.SpriteMaterial=Hb;h.SrcAlphaFactor=
204;h.SrcAlphaSaturateFactor=210;h.SrcColorFactor=202;h.StaticCopyUsage=35046;h.StaticDrawUsage=35044;h.StaticReadUsage=35045;h.StereoCamera=ii;h.StreamCopyUsage=35042;h.StreamDrawUsage=35040;h.StreamReadUsage=35041;h.StringKeyframeTrack=$e;h.SubtractEquation=101;h.SubtractiveBlending=3;h.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};h.TangentSpaceNormalMap=0;h.TetrahedronBufferGeometry=Pc;h.TetrahedronGeometry=Xd;h.TextBufferGeometry=Vc;h.TextGeometry=he;h.Texture=ca;h.TextureLoader=cf;h.TorusBufferGeometry=
Tc;h.TorusGeometry=ce;h.TorusKnotBufferGeometry=Sc;h.TorusKnotGeometry=be;h.Triangle=na;h.TriangleFanDrawMode=2;h.TriangleStripDrawMode=1;h.TrianglesDrawMode=0;h.TubeBufferGeometry=cc;h.TubeGeometry=ae;h.UVMapping=300;h.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Vb(a,b)};h.Uint16BufferAttribute=Vb;h.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
return new Wb(a,b)};h.Uint32BufferAttribute=Wb;h.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new zd(a,b)};h.Uint8BufferAttribute=zd;h.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new Ad(a,b)};h.Uint8ClampedBufferAttribute=Ad;h.Uncharted2ToneMapping=3;h.Uniform=tf;h.UniformsLib=C;h.UniformsUtils=
Qh;h.UnsignedByteType=1009;h.UnsignedInt248Type=1020;h.UnsignedIntType=1014;h.UnsignedShort4444Type=1017;h.UnsignedShort5551Type=1018;h.UnsignedShort565Type=1019;h.UnsignedShortType=1012;h.VSMShadowMap=3;h.Vector2=v;h.Vector3=n;h.Vector4=ia;h.VectorKeyframeTrack=ad;h.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new n(a,b,c)};h.VertexColors=2;h.VideoTexture=sg;h.WebGLCubeRenderTarget=Cb;h.WebGLMultisampleRenderTarget=Yf;h.WebGLRenderTarget=
wa;h.WebGLRenderTargetCube=function(a,b,c){console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).");return new Cb(a,c)};h.WebGLRenderer=og;h.WebGLUtils=Vh;h.WireframeGeometry=Nc;h.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new ma(new Nc(a.geometry),new ka({color:void 0!==b?b:16777215}))};h.WrapAroundEnding=2402;h.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
return new Qa(a)};h.ZeroCurvatureEnding=2400;h.ZeroFactor=200;h.ZeroSlopeEnding=2401;h.ZeroStencilOp=0;h.sRGBEncoding=3001;Object.defineProperty(h,"__esModule",{value:!0})});

THREE.OrbitControls=function(e,t){var n,o,a,i,r;this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:THREE.MOUSE.LEFT,MIDDLE:THREE.MOUSE.MIDDLE,RIGHT:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.saveState=function(){s.target0.copy(s.target),s.position0.copy(s.object.position),s.zoom0=s.object.zoom},this.reset=function(){s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),s.dispatchEvent(c),s.update(),d=u.NONE},this.update=(n=new THREE.Vector3,o=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),a=o.clone().inverse(),i=new THREE.Vector3,r=new THREE.Quaternion,function(){var e=s.object.position;return n.copy(e).sub(s.target),n.applyQuaternion(o),h.setFromVector3(n),s.autoRotate&&d===u.NONE&&M(2*Math.PI/60/60*s.autoRotateSpeed),h.theta+=E.theta,h.phi+=E.phi,h.theta=Math.max(s.minAzimuthAngle,Math.min(s.maxAzimuthAngle,h.theta)),h.phi=Math.max(s.minPolarAngle,Math.min(s.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=b,h.radius=Math.max(s.minDistance,Math.min(s.maxDistance,h.radius)),s.target.add(g),n.setFromSpherical(h),n.applyQuaternion(a),e.copy(s.target).add(n),s.object.lookAt(s.target),!0===s.enableDamping?(E.theta*=1-s.dampingFactor,E.phi*=1-s.dampingFactor,g.multiplyScalar(1-s.dampingFactor)):(E.set(0,0,0),g.set(0,0,0)),b=1,!!(f||i.distanceToSquared(s.object.position)>p||8*(1-r.dot(s.object.quaternion))>p)&&(s.dispatchEvent(c),i.copy(s.object.position),r.copy(s.object.quaternion),f=!1,!0)}),this.dispose=function(){s.domElement.removeEventListener("contextmenu",_,!1),s.domElement.removeEventListener("mousedown",U,!1),s.domElement.removeEventListener("wheel",z,!1),s.domElement.removeEventListener("touchstart",I,!1),s.domElement.removeEventListener("touchend",K,!1),s.domElement.removeEventListener("touchmove",X,!1),document.removeEventListener("mousemove",Y,!1),document.removeEventListener("mouseup",Z,!1),window.removeEventListener("keydown",F,!1)};var s=this,c={type:"change"},l={type:"start"},m={type:"end"},u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},d=u.NONE,p=1e-6,h=new THREE.Spherical,E=new THREE.Spherical,b=1,g=new THREE.Vector3,f=!1,T=new THREE.Vector2,v=new THREE.Vector2,y=new THREE.Vector2,R=new THREE.Vector2,O=new THREE.Vector2,H=new THREE.Vector2,w=new THREE.Vector2,P=new THREE.Vector2,j=new THREE.Vector2;function L(){return Math.pow(.95,s.zoomSpeed)}function M(e){E.theta-=e}function C(e){E.phi-=e}var N,S=(N=new THREE.Vector3,function(e,t){N.setFromMatrixColumn(t,0),N.multiplyScalar(-e),g.add(N)}),A=function(){var e=new THREE.Vector3;return function(t,n){!0===s.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(s.object.up,e)),e.multiplyScalar(t),g.add(e)}}(),D=function(){var e=new THREE.Vector3;return function(t,n){var o=s.domElement===document?s.domElement.body:s.domElement;if(s.object.isPerspectiveCamera){var a=s.object.position;e.copy(a).sub(s.target);var i=e.length();i*=Math.tan(s.object.fov/2*Math.PI/180),S(2*t*i/o.clientHeight,s.object.matrix),A(2*n*i/o.clientHeight,s.object.matrix)}else s.object.isOrthographicCamera?(S(t*(s.object.right-s.object.left)/s.object.zoom/o.clientWidth,s.object.matrix),A(n*(s.object.top-s.object.bottom)/s.object.zoom/o.clientHeight,s.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),s.enablePan=!1)}}();function x(e){s.object.isPerspectiveCamera?b/=e:s.object.isOrthographicCamera?(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom*e)),s.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function k(e){s.object.isPerspectiveCamera?b*=e:s.object.isOrthographicCamera?(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/e)),s.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function V(e){R.set(e.clientX,e.clientY)}function U(e){if(!1!==s.enabled){switch(e.preventDefault(),e.button){case s.mouseButtons.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===s.enablePan)return;V(e),d=u.PAN}else{if(!1===s.enableRotate)return;!function(e){T.set(e.clientX,e.clientY)}(e),d=u.ROTATE}break;case s.mouseButtons.MIDDLE:if(!1===s.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),d=u.DOLLY;break;case s.mouseButtons.RIGHT:if(!1===s.enablePan)return;V(e),d=u.PAN}d!==u.NONE&&(document.addEventListener("mousemove",Y,!1),document.addEventListener("mouseup",Z,!1),s.dispatchEvent(l))}}function Y(e){if(!1!==s.enabled)switch(e.preventDefault(),d){case u.ROTATE:if(!1===s.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),y.subVectors(v,T).multiplyScalar(s.rotateSpeed);var t=s.domElement===document?s.domElement.body:s.domElement;M(2*Math.PI*y.x/t.clientHeight),C(2*Math.PI*y.y/t.clientHeight),T.copy(v),s.update()}(e);break;case u.DOLLY:if(!1===s.enableZoom)return;!function(e){P.set(e.clientX,e.clientY),j.subVectors(P,w),j.y>0?x(L()):j.y<0&&k(L()),w.copy(P),s.update()}(e);break;case u.PAN:if(!1===s.enablePan)return;!function(e){O.set(e.clientX,e.clientY),H.subVectors(O,R).multiplyScalar(s.panSpeed),D(H.x,H.y),R.copy(O),s.update()}(e)}}function Z(e){!1!==s.enabled&&(document.removeEventListener("mousemove",Y,!1),document.removeEventListener("mouseup",Z,!1),s.dispatchEvent(m),d=u.NONE)}function z(e){!1===s.enabled||!1===s.enableZoom||d!==u.NONE&&d!==u.ROTATE||(e.preventDefault(),e.stopPropagation(),s.dispatchEvent(l),function(e){e.deltaY<0?k(L()):e.deltaY>0&&x(L()),s.update()}(e),s.dispatchEvent(m))}function F(e){!1!==s.enabled&&!1!==s.enableKeys&&!1!==s.enablePan&&function(e){switch(e.keyCode){case s.keys.UP:D(0,s.keyPanSpeed),s.update();break;case s.keys.BOTTOM:D(0,-s.keyPanSpeed),s.update();break;case s.keys.LEFT:D(s.keyPanSpeed,0),s.update();break;case s.keys.RIGHT:D(-s.keyPanSpeed,0),s.update()}}(e)}function I(e){if(!1!==s.enabled){switch(e.preventDefault(),e.touches.length){case 1:if(!1===s.enableRotate)return;!function(e){T.set(e.touches[0].pageX,e.touches[0].pageY)}(e),d=u.TOUCH_ROTATE;break;case 2:if(!1===s.enableZoom&&!1===s.enablePan)return;!function(e){if(s.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);w.set(0,o)}if(s.enablePan){var a=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);R.set(a,i)}}(e),d=u.TOUCH_DOLLY_PAN;break;default:d=u.NONE}d!==u.NONE&&s.dispatchEvent(l)}}function X(e){if(!1!==s.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===s.enableRotate)return;if(d!==u.TOUCH_ROTATE)return;!function(e){v.set(e.touches[0].pageX,e.touches[0].pageY),y.subVectors(v,T).multiplyScalar(s.rotateSpeed);var t=s.domElement===document?s.domElement.body:s.domElement;M(2*Math.PI*y.x/t.clientHeight),C(2*Math.PI*y.y/t.clientHeight),T.copy(v),s.update()}(e);break;case 2:if(!1===s.enableZoom&&!1===s.enablePan)return;if(d!==u.TOUCH_DOLLY_PAN)return;!function(e){if(s.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);P.set(0,o),j.set(0,Math.pow(P.y/w.y,s.zoomSpeed)),x(j.y),w.copy(P)}if(s.enablePan){var a=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);O.set(a,i),H.subVectors(O,R).multiplyScalar(s.panSpeed),D(H.x,H.y),R.copy(O)}s.update()}(e);break;default:d=u.NONE}}function K(e){!1!==s.enabled&&(s.dispatchEvent(m),d=u.NONE)}function _(e){!1!==s.enabled&&e.preventDefault()}s.domElement.addEventListener("contextmenu",_,!1),s.domElement.addEventListener("mousedown",U,!1),s.domElement.addEventListener("wheel",z,!1),s.domElement.addEventListener("touchstart",I,!1),s.domElement.addEventListener("touchend",K,!1),s.domElement.addEventListener("touchmove",X,!1),window.addEventListener("keydown",F,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}});

/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 * @author Takahiro / https://github.com/takahirox
 * @author Don McCurdy / https://www.donmccurdy.com
 */

THREE.GLTFLoader = ( function () {

	function GLTFLoader( manager ) {

		THREE.Loader.call( this, manager );

		this.dracoLoader = null;
		this.ddsLoader = null;

	}

	GLTFLoader.prototype = Object.assign( Object.create( THREE.Loader.prototype ), {

		constructor: GLTFLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var resourcePath;

			if ( this.resourcePath !== '' ) {

				resourcePath = this.resourcePath;

			} else if ( this.path !== '' ) {

				resourcePath = this.path;

			} else {

				resourcePath = THREE.LoaderUtils.extractUrlBase( url );

			}

			// Tells the LoadingManager to track an extra item, which resolves after
			// the model is fully loaded. This means the count of items loaded will
			// be incorrect, but ensures manager.onLoad() does not fire early.
			scope.manager.itemStart( url );

			var _onError = function ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );
				scope.manager.itemEnd( url );

			};

			var loader = new THREE.FileLoader( scope.manager );

			loader.setPath( this.path );
			loader.setResponseType( 'arraybuffer' );

			if ( scope.crossOrigin === 'use-credentials' ) {

				loader.setWithCredentials( true );

			}

			loader.load( url, function ( data ) {

				try {

					scope.parse( data, resourcePath, function ( gltf ) {

						onLoad( gltf );

						scope.manager.itemEnd( url );

					}, _onError );

				} catch ( e ) {

					_onError( e );

				}

			}, onProgress, _onError );

		},

		setDRACOLoader: function ( dracoLoader ) {

			this.dracoLoader = dracoLoader;
			return this;

		},

		setDDSLoader: function ( ddsLoader ) {

			this.ddsLoader = ddsLoader;
			return this;

		},

		parse: function ( data, path, onLoad, onError ) {

			var content;
			var extensions = {};

			if ( typeof data === 'string' ) {

				content = data;

			} else {

				var magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

				if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

					try {

						extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

					} catch ( error ) {

						if ( onError ) onError( error );
						return;

					}

					content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

				} else {

					content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

				}

			}

			var json = JSON.parse( content );

			if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

				if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
				return;

			}

			if ( json.extensionsUsed ) {

				for ( var i = 0; i < json.extensionsUsed.length; ++ i ) {

					var extensionName = json.extensionsUsed[ i ];
					var extensionsRequired = json.extensionsRequired || [];

					switch ( extensionName ) {

						case EXTENSIONS.KHR_LIGHTS_PUNCTUAL:
							extensions[ extensionName ] = new GLTFLightsExtension( json );
							break;

						case EXTENSIONS.KHR_MATERIALS_UNLIT:
							extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
							break;

						case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
							extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension();
							break;

						case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
							extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
							break;

						case EXTENSIONS.MSFT_TEXTURE_DDS:
							extensions[ extensionName ] = new GLTFTextureDDSExtension( this.ddsLoader );
							break;

						case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
							extensions[ extensionName ] = new GLTFTextureTransformExtension();
							break;

						case EXTENSIONS.KHR_MESH_QUANTIZATION:
							extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
							break;

						default:

							if ( extensionsRequired.indexOf( extensionName ) >= 0 ) {

								console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

							}

					}

				}

			}

			var parser = new GLTFParser( json, extensions, {

				path: path || this.resourcePath || '',
				crossOrigin: this.crossOrigin,
				manager: this.manager

			} );

			parser.parse( onLoad, onError );

		}

	} );

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		var objects = {};

		return	{

			get: function ( key ) {

				return objects[ key ];

			},

			add: function ( key, object ) {

				objects[ key ] = object;

			},

			remove: function ( key ) {

				delete objects[ key ];

			},

			removeAll: function () {

				objects = {};

			}

		};

	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	var EXTENSIONS = {
		KHR_BINARY_GLTF: 'KHR_binary_glTF',
		KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
		KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
		KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
		KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
		KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
		KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
		MSFT_TEXTURE_DDS: 'MSFT_texture_dds'
	};

	/**
	 * DDS Texture Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_texture_dds
	 *
	 */
	function GLTFTextureDDSExtension( ddsLoader ) {

		if ( ! ddsLoader ) {

			throw new Error( 'THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader' );

		}

		this.name = EXTENSIONS.MSFT_TEXTURE_DDS;
		this.ddsLoader = ddsLoader;

	}

	/**
	 * Punctual Lights Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
	 */
	function GLTFLightsExtension( json ) {

		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

		var extension = ( json.extensions && json.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ] ) || {};
		this.lightDefs = extension.lights || [];

	}

	GLTFLightsExtension.prototype.loadLight = function ( lightIndex ) {

		var lightDef = this.lightDefs[ lightIndex ];
		var lightNode;

		var color = new THREE.Color( 0xffffff );
		if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

		var range = lightDef.range !== undefined ? lightDef.range : 0;

		switch ( lightDef.type ) {

			case 'directional':
				lightNode = new THREE.DirectionalLight( color );
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			case 'point':
				lightNode = new THREE.PointLight( color );
				lightNode.distance = range;
				break;

			case 'spot':
				lightNode = new THREE.SpotLight( color );
				lightNode.distance = range;
				// Handle spotlight properties.
				lightDef.spot = lightDef.spot || {};
				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
				lightNode.angle = lightDef.spot.outerConeAngle;
				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			default:
				throw new Error( 'THREE.GLTFLoader: Unexpected light type, "' + lightDef.type + '".' );

		}

		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
		// here, because node-level parsing will only override position if explicitly specified.
		lightNode.position.set( 0, 0, 0 );

		lightNode.decay = 2;

		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

		lightNode.name = lightDef.name || ( 'light_' + lightIndex );

		return Promise.resolve( lightNode );

	};

	/**
	 * Unlit Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
	 */
	function GLTFMaterialsUnlitExtension() {

		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

	}

	GLTFMaterialsUnlitExtension.prototype.getMaterialType = function () {

		return THREE.MeshBasicMaterial;

	};

	GLTFMaterialsUnlitExtension.prototype.extendParams = function ( materialParams, materialDef, parser ) {

		var pending = [];

		materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		var metallicRoughness = materialDef.pbrMetallicRoughness;

		if ( metallicRoughness ) {

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

		}

		return Promise.all( pending );

	};

	/* BINARY EXTENSION */
	var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
	var BINARY_EXTENSION_HEADER_LENGTH = 12;
	var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	function GLTFBinaryExtension( data ) {

		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;

		var headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

		this.header = {
			magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
			version: headerView.getUint32( 4, true ),
			length: headerView.getUint32( 8, true )
		};

		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

		} else if ( this.header.version < 2.0 ) {

			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

		}

		var chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
		var chunkIndex = 0;

		while ( chunkIndex < chunkView.byteLength ) {

			var chunkLength = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			var chunkType = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

				var contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
				this.content = THREE.LoaderUtils.decodeText( contentArray );

			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

				var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice( byteOffset, byteOffset + chunkLength );

			}

			// Clients must ignore chunks with unknown types.

			chunkIndex += chunkLength;

		}

		if ( this.content === null ) {

			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

		}

	}

	/**
	 * DRACO Mesh Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
	 */
	function GLTFDracoMeshCompressionExtension( json, dracoLoader ) {

		if ( ! dracoLoader ) {

			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

		}

		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
		this.json = json;
		this.dracoLoader = dracoLoader;
		this.dracoLoader.preload();

	}

	GLTFDracoMeshCompressionExtension.prototype.decodePrimitive = function ( primitive, parser ) {

		var json = this.json;
		var dracoLoader = this.dracoLoader;
		var bufferViewIndex = primitive.extensions[ this.name ].bufferView;
		var gltfAttributeMap = primitive.extensions[ this.name ].attributes;
		var threeAttributeMap = {};
		var attributeNormalizedMap = {};
		var attributeTypeMap = {};

		for ( var attributeName in gltfAttributeMap ) {

			var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

		}

		for ( attributeName in primitive.attributes ) {

			var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

				var accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
				var componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

				attributeTypeMap[ threeAttributeName ] = componentType;
				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

			}

		}

		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

			return new Promise( function ( resolve ) {

				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

					for ( var attributeName in geometry.attributes ) {

						var attribute = geometry.attributes[ attributeName ];
						var normalized = attributeNormalizedMap[ attributeName ];

						if ( normalized !== undefined ) attribute.normalized = normalized;

					}

					resolve( geometry );

				}, threeAttributeMap, attributeTypeMap );

			} );

		} );

	};

	/**
	 * Texture Transform Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
	 */
	function GLTFTextureTransformExtension() {

		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

	}

	GLTFTextureTransformExtension.prototype.extendTexture = function ( texture, transform ) {

		texture = texture.clone();

		if ( transform.offset !== undefined ) {

			texture.offset.fromArray( transform.offset );

		}

		if ( transform.rotation !== undefined ) {

			texture.rotation = transform.rotation;

		}

		if ( transform.scale !== undefined ) {

			texture.repeat.fromArray( transform.scale );

		}

		if ( transform.texCoord !== undefined ) {

			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

		}

		texture.needsUpdate = true;

		return texture;

	};

	/**
	 * Specular-Glossiness Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
	 */
	function GLTFMaterialsPbrSpecularGlossinessExtension() {

		return {

			name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

			specularGlossinessParams: [
				'color',
				'map',
				'lightMap',
				'lightMapIntensity',
				'aoMap',
				'aoMapIntensity',
				'emissive',
				'emissiveIntensity',
				'emissiveMap',
				'bumpMap',
				'bumpScale',
				'normalMap',
				'displacementMap',
				'displacementScale',
				'displacementBias',
				'specularMap',
				'specular',
				'glossinessMap',
				'glossiness',
				'alphaMap',
				'envMap',
				'envMapIntensity',
				'refractionRatio',
			],

			getMaterialType: function () {

				return THREE.ShaderMaterial;

			},

			extendParams: function ( materialParams, materialDef, parser ) {

				var pbrSpecularGlossiness = materialDef.extensions[ this.name ];

				var shader = THREE.ShaderLib[ 'standard' ];

				var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

				var specularMapParsFragmentChunk = [
					'#ifdef USE_SPECULARMAP',
					'	uniform sampler2D specularMap;',
					'#endif'
				].join( '\n' );

				var glossinessMapParsFragmentChunk = [
					'#ifdef USE_GLOSSINESSMAP',
					'	uniform sampler2D glossinessMap;',
					'#endif'
				].join( '\n' );

				var specularMapFragmentChunk = [
					'vec3 specularFactor = specular;',
					'#ifdef USE_SPECULARMAP',
					'	vec4 texelSpecular = texture2D( specularMap, vUv );',
					'	texelSpecular = sRGBToLinear( texelSpecular );',
					'	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
					'	specularFactor *= texelSpecular.rgb;',
					'#endif'
				].join( '\n' );

				var glossinessMapFragmentChunk = [
					'float glossinessFactor = glossiness;',
					'#ifdef USE_GLOSSINESSMAP',
					'	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
					'	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
					'	glossinessFactor *= texelGlossiness.a;',
					'#endif'
				].join( '\n' );

				var lightPhysicalFragmentChunk = [
					'PhysicalMaterial material;',
					'material.diffuseColor = diffuseColor.rgb;',
					'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );',
					'material.specularColor = specularFactor.rgb;',
				].join( '\n' );

				var fragmentShader = shader.fragmentShader
					.replace( 'uniform float roughness;', 'uniform vec3 specular;' )
					.replace( 'uniform float metalness;', 'uniform float glossiness;' )
					.replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
					.replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
					.replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
					.replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
					.replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

				delete uniforms.roughness;
				delete uniforms.metalness;
				delete uniforms.roughnessMap;
				delete uniforms.metalnessMap;

				uniforms.specular = { value: new THREE.Color().setHex( 0x111111 ) };
				uniforms.glossiness = { value: 0.5 };
				uniforms.specularMap = { value: null };
				uniforms.glossinessMap = { value: null };

				materialParams.vertexShader = shader.vertexShader;
				materialParams.fragmentShader = fragmentShader;
				materialParams.uniforms = uniforms;
				materialParams.defines = { 'STANDARD': '' };

				materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
				materialParams.opacity = 1.0;

				var pending = [];

				if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

					var array = pbrSpecularGlossiness.diffuseFactor;

					materialParams.color.fromArray( array );
					materialParams.opacity = array[ 3 ];

				}

				if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

					pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

				}

				materialParams.emissive = new THREE.Color( 0.0, 0.0, 0.0 );
				materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
				materialParams.specular = new THREE.Color( 1.0, 1.0, 1.0 );

				if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

					materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

				}

				if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

					var specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
					pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
					pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

				}

				return Promise.all( pending );

			},

			createMaterial: function ( params ) {

				// setup material properties based on MeshStandardMaterial for Specular-Glossiness

				var material = new THREE.ShaderMaterial( {
					defines: params.defines,
					vertexShader: params.vertexShader,
					fragmentShader: params.fragmentShader,
					uniforms: params.uniforms,
					fog: true,
					lights: true,
					opacity: params.opacity,
					transparent: params.transparent
				} );

				material.isGLTFSpecularGlossinessMaterial = true;

				material.color = params.color;

				material.map = params.map === undefined ? null : params.map;

				material.lightMap = null;
				material.lightMapIntensity = 1.0;

				material.aoMap = params.aoMap === undefined ? null : params.aoMap;
				material.aoMapIntensity = 1.0;

				material.emissive = params.emissive;
				material.emissiveIntensity = 1.0;
				material.emissiveMap = params.emissiveMap === undefined ? null : params.emissiveMap;

				material.bumpMap = params.bumpMap === undefined ? null : params.bumpMap;
				material.bumpScale = 1;

				material.normalMap = params.normalMap === undefined ? null : params.normalMap;

				if ( params.normalScale ) material.normalScale = params.normalScale;

				material.displacementMap = null;
				material.displacementScale = 1;
				material.displacementBias = 0;

				material.specularMap = params.specularMap === undefined ? null : params.specularMap;
				material.specular = params.specular;

				material.glossinessMap = params.glossinessMap === undefined ? null : params.glossinessMap;
				material.glossiness = params.glossiness;

				material.alphaMap = null;

				material.envMap = params.envMap === undefined ? null : params.envMap;
				material.envMapIntensity = 1.0;

				material.refractionRatio = 0.98;

				material.extensions.derivatives = true;

				return material;

			},

			/**
			 * Clones a GLTFSpecularGlossinessMaterial instance. The ShaderMaterial.copy() method can
			 * copy only properties it knows about or inherits, and misses many properties that would
			 * normally be defined by MeshStandardMaterial.
			 *
			 * This method allows GLTFSpecularGlossinessMaterials to be cloned in the process of
			 * loading a glTF model, but cloning later (e.g. by the user) would require these changes
			 * AND also updating `.onBeforeRender` on the parent mesh.
			 *
			 * @param  {THREE.ShaderMaterial} source
			 * @return {THREE.ShaderMaterial}
			 */
			cloneMaterial: function ( source ) {

				var target = source.clone();

				target.isGLTFSpecularGlossinessMaterial = true;

				var params = this.specularGlossinessParams;

				for ( var i = 0, il = params.length; i < il; i ++ ) {

					var value = source[ params[ i ] ];
					target[ params[ i ] ] = ( value && value.isColor ) ? value.clone() : value;

				}

				return target;

			},

			// Here's based on refreshUniformsCommon() and refreshUniformsStandard() in WebGLRenderer.
			refreshUniforms: function ( renderer, scene, camera, geometry, material ) {

				if ( material.isGLTFSpecularGlossinessMaterial !== true ) {

					return;

				}

				var uniforms = material.uniforms;
				var defines = material.defines;

				uniforms.opacity.value = material.opacity;

				uniforms.diffuse.value.copy( material.color );
				uniforms.emissive.value.copy( material.emissive ).multiplyScalar( material.emissiveIntensity );

				uniforms.map.value = material.map;
				uniforms.specularMap.value = material.specularMap;
				uniforms.alphaMap.value = material.alphaMap;

				uniforms.lightMap.value = material.lightMap;
				uniforms.lightMapIntensity.value = material.lightMapIntensity;

				uniforms.aoMap.value = material.aoMap;
				uniforms.aoMapIntensity.value = material.aoMapIntensity;

				// uv repeat and offset setting priorities
				// 1. color map
				// 2. specular map
				// 3. normal map
				// 4. bump map
				// 5. alpha map
				// 6. emissive map

				var uvScaleMap;

				if ( material.map ) {

					uvScaleMap = material.map;

				} else if ( material.specularMap ) {

					uvScaleMap = material.specularMap;

				} else if ( material.displacementMap ) {

					uvScaleMap = material.displacementMap;

				} else if ( material.normalMap ) {

					uvScaleMap = material.normalMap;

				} else if ( material.bumpMap ) {

					uvScaleMap = material.bumpMap;

				} else if ( material.glossinessMap ) {

					uvScaleMap = material.glossinessMap;

				} else if ( material.alphaMap ) {

					uvScaleMap = material.alphaMap;

				} else if ( material.emissiveMap ) {

					uvScaleMap = material.emissiveMap;

				}

				if ( uvScaleMap !== undefined ) {

					// backwards compatibility
					if ( uvScaleMap.isWebGLRenderTarget ) {

						uvScaleMap = uvScaleMap.texture;

					}

					if ( uvScaleMap.matrixAutoUpdate === true ) {

						uvScaleMap.updateMatrix();

					}

					uniforms.uvTransform.value.copy( uvScaleMap.matrix );

				}

				if ( material.envMap ) {

					uniforms.envMap.value = material.envMap;
					uniforms.envMapIntensity.value = material.envMapIntensity;

					// don't flip CubeTexture envMaps, flip everything else:
					//  WebGLRenderTargetCube will be flipped for backwards compatibility
					//  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
					// this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
					uniforms.flipEnvMap.value = material.envMap.isCubeTexture ? - 1 : 1;

					uniforms.reflectivity.value = material.reflectivity;
					uniforms.refractionRatio.value = material.refractionRatio;

					uniforms.maxMipLevel.value = renderer.properties.get( material.envMap ).__maxMipLevel;

				}

				uniforms.specular.value.copy( material.specular );
				uniforms.glossiness.value = material.glossiness;

				uniforms.glossinessMap.value = material.glossinessMap;

				uniforms.emissiveMap.value = material.emissiveMap;
				uniforms.bumpMap.value = material.bumpMap;
				uniforms.normalMap.value = material.normalMap;

				uniforms.displacementMap.value = material.displacementMap;
				uniforms.displacementScale.value = material.displacementScale;
				uniforms.displacementBias.value = material.displacementBias;

				if ( uniforms.glossinessMap.value !== null && defines.USE_GLOSSINESSMAP === undefined ) {

					defines.USE_GLOSSINESSMAP = '';
					// set USE_ROUGHNESSMAP to enable vUv
					defines.USE_ROUGHNESSMAP = '';

				}

				if ( uniforms.glossinessMap.value === null && defines.USE_GLOSSINESSMAP !== undefined ) {

					delete defines.USE_GLOSSINESSMAP;
					delete defines.USE_ROUGHNESSMAP;

				}

			}

		};

	}

	/**
	 * Mesh Quantization Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
	 */
	function GLTFMeshQuantizationExtension() {

		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	function GLTFCubicSplineInterpolant( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

		THREE.Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	GLTFCubicSplineInterpolant.prototype = Object.create( THREE.Interpolant.prototype );
	GLTFCubicSplineInterpolant.prototype.constructor = GLTFCubicSplineInterpolant;

	GLTFCubicSplineInterpolant.prototype.copySampleValue_ = function ( index ) {

		// Copies a sample value to the result buffer. See description of glTF
		// CUBICSPLINE values layout in interpolate_() function below.

		var result = this.resultBuffer,
			values = this.sampleValues,
			valueSize = this.valueSize,
			offset = index * valueSize * 3 + valueSize;

		for ( var i = 0; i !== valueSize; i ++ ) {

			result[ i ] = values[ offset + i ];

		}

		return result;

	};

	GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

		var result = this.resultBuffer;
		var values = this.sampleValues;
		var stride = this.valueSize;

		var stride2 = stride * 2;
		var stride3 = stride * 3;

		var td = t1 - t0;

		var p = ( t - t0 ) / td;
		var pp = p * p;
		var ppp = pp * p;

		var offset1 = i1 * stride3;
		var offset0 = offset1 - stride3;

		var s2 = - 2 * ppp + 3 * pp;
		var s3 = ppp - pp;
		var s0 = 1 - s2;
		var s1 = s3 - pp + p;

		// Layout of keyframe output values for CUBICSPLINE animations:
		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
		for ( var i = 0; i !== stride; i ++ ) {

			var p0 = values[ offset0 + i + stride ]; // splineVertex_k
			var m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
			var p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
			var m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

			result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

		}

		return result;

	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		POINTS: 0,
		LINES: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123
	};

	var WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	var WEBGL_FILTERS = {
		9728: THREE.NearestFilter,
		9729: THREE.LinearFilter,
		9984: THREE.NearestMipmapNearestFilter,
		9985: THREE.LinearMipmapNearestFilter,
		9986: THREE.NearestMipmapLinearFilter,
		9987: THREE.LinearMipmapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
		33071: THREE.ClampToEdgeWrapping,
		33648: THREE.MirroredRepeatWrapping,
		10497: THREE.RepeatWrapping
	};

	var WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	var ATTRIBUTES = {
		POSITION: 'position',
		NORMAL: 'normal',
		TANGENT: 'tangent',
		TEXCOORD_0: 'uv',
		TEXCOORD_1: 'uv2',
		COLOR_0: 'color',
		WEIGHTS_0: 'skinWeight',
		JOINTS_0: 'skinIndex',
	};

	var PATH_PROPERTIES = {
		scale: 'scale',
		translation: 'position',
		rotation: 'quaternion',
		weights: 'morphTargetInfluences'
	};

	var INTERPOLATION = {
		CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
		                        // keyframe track will be initialized with a default interpolation type, then modified.
		LINEAR: THREE.InterpolateLinear,
		STEP: THREE.InterpolateDiscrete
	};

	var ALPHA_MODES = {
		OPAQUE: 'OPAQUE',
		MASK: 'MASK',
		BLEND: 'BLEND'
	};

	var MIME_TYPE_FORMATS = {
		'image/png': THREE.RGBAFormat,
		'image/jpeg': THREE.RGBFormat
	};

	/* UTILITY FUNCTIONS */

	function resolveURL( url, path ) {

		// Invalid URL
		if ( typeof url !== 'string' || url === '' ) return '';

		// Host Relative URL
		if ( /^https?:\/\//i.test( path ) && /^\//.test( url ) ) {

			path = path.replace( /(^https?:\/\/[^\/]+).*/i, '$1' );

		}

		// Absolute URL http://,https://,//
		if ( /^(https?:)?\/\//i.test( url ) ) return url;

		// Data URI
		if ( /^data:.*,.*$/i.test( url ) ) return url;

		// Blob URL
		if ( /^blob:.*$/i.test( url ) ) return url;

		// Relative URL
		return path + url;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
	 */
	function createDefaultMaterial( cache ) {

		if ( cache[ 'DefaultMaterial' ] === undefined ) {

			cache[ 'DefaultMaterial' ] = new THREE.MeshStandardMaterial( {
				color: 0xFFFFFF,
				emissive: 0x000000,
				metalness: 1,
				roughness: 1,
				transparent: false,
				depthTest: true,
				side: THREE.FrontSide
			} );

		}

		return cache[ 'DefaultMaterial' ];

	}

	function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

		// Add unknown glTF extensions to an object's userData.

		for ( var name in objectDef.extensions ) {

			if ( knownExtensions[ name ] === undefined ) {

				object.userData.gltfExtensions = object.userData.gltfExtensions || {};
				object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

			}

		}

	}

	/**
	 * @param {THREE.Object3D|THREE.Material|THREE.BufferGeometry} object
	 * @param {GLTF.definition} gltfDef
	 */
	function assignExtrasToUserData( object, gltfDef ) {

		if ( gltfDef.extras !== undefined ) {

			if ( typeof gltfDef.extras === 'object' ) {

				Object.assign( object.userData, gltfDef.extras );

			} else {

				console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

			}

		}

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
	 *
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Array<GLTF.Target>} targets
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addMorphTargets( geometry, targets, parser ) {

		var hasMorphPosition = false;
		var hasMorphNormal = false;

		for ( var i = 0, il = targets.length; i < il; i ++ ) {

			var target = targets[ i ];

			if ( target.POSITION !== undefined ) hasMorphPosition = true;
			if ( target.NORMAL !== undefined ) hasMorphNormal = true;

			if ( hasMorphPosition && hasMorphNormal ) break;

		}

		if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

		var pendingPositionAccessors = [];
		var pendingNormalAccessors = [];

		for ( var i = 0, il = targets.length; i < il; i ++ ) {

			var target = targets[ i ];

			if ( hasMorphPosition ) {

				var pendingAccessor = target.POSITION !== undefined
					? parser.getDependency( 'accessor', target.POSITION )
					: geometry.attributes.position;

				pendingPositionAccessors.push( pendingAccessor );

			}

			if ( hasMorphNormal ) {

				var pendingAccessor = target.NORMAL !== undefined
					? parser.getDependency( 'accessor', target.NORMAL )
					: geometry.attributes.normal;

				pendingNormalAccessors.push( pendingAccessor );

			}

		}

		return Promise.all( [
			Promise.all( pendingPositionAccessors ),
			Promise.all( pendingNormalAccessors )
		] ).then( function ( accessors ) {

			var morphPositions = accessors[ 0 ];
			var morphNormals = accessors[ 1 ];

			if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
			if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
			geometry.morphTargetsRelative = true;

			return geometry;

		} );

	}

	/**
	 * @param {THREE.Mesh} mesh
	 * @param {GLTF.Mesh} meshDef
	 */
	function updateMorphTargets( mesh, meshDef ) {

		mesh.updateMorphTargets();

		if ( meshDef.weights !== undefined ) {

			for ( var i = 0, il = meshDef.weights.length; i < il; i ++ ) {

				mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

			}

		}

		// .extras has user-defined data, so check that .extras.targetNames is an array.
		if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

			var targetNames = meshDef.extras.targetNames;

			if ( mesh.morphTargetInfluences.length === targetNames.length ) {

				mesh.morphTargetDictionary = {};

				for ( var i = 0, il = targetNames.length; i < il; i ++ ) {

					mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

				}

			} else {

				console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

			}

		}

	}

	function createPrimitiveKey( primitiveDef ) {

		var dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
		var geometryKey;

		if ( dracoExtension ) {

			geometryKey = 'draco:' + dracoExtension.bufferView
				+ ':' + dracoExtension.indices
				+ ':' + createAttributesKey( dracoExtension.attributes );

		} else {

			geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

		}

		return geometryKey;

	}

	function createAttributesKey( attributes ) {

		var attributesKey = '';

		var keys = Object.keys( attributes ).sort();

		for ( var i = 0, il = keys.length; i < il; i ++ ) {

			attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

		}

		return attributesKey;

	}

	/* GLTF PARSER */

	function GLTFParser( json, extensions, options ) {

		this.json = json || {};
		this.extensions = extensions || {};
		this.options = options || {};

		// loader object cache
		this.cache = new GLTFRegistry();

		// BufferGeometry caching
		this.primitiveCache = {};

		this.textureLoader = new THREE.TextureLoader( this.options.manager );
		this.textureLoader.setCrossOrigin( this.options.crossOrigin );

		this.fileLoader = new THREE.FileLoader( this.options.manager );
		this.fileLoader.setResponseType( 'arraybuffer' );

		if ( this.options.crossOrigin === 'use-credentials' ) {

			this.fileLoader.setWithCredentials( true );

		}

	}

	GLTFParser.prototype.parse = function ( onLoad, onError ) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;

		// Clear the loader cache
		this.cache.removeAll();

		// Mark the special nodes/meshes in json for efficient parse
		this.markDefs();

		Promise.all( [

			this.getDependencies( 'scene' ),
			this.getDependencies( 'animation' ),
			this.getDependencies( 'camera' ),

		] ).then( function ( dependencies ) {

			var result = {
				scene: dependencies[ 0 ][ json.scene || 0 ],
				scenes: dependencies[ 0 ],
				animations: dependencies[ 1 ],
				cameras: dependencies[ 2 ],
				asset: json.asset,
				parser: parser,
				userData: {}
			};

			addUnknownExtensionsToUserData( extensions, result, json );

			assignExtrasToUserData( result, json );

			onLoad( result );

		} ).catch( onError );

	};

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	GLTFParser.prototype.markDefs = function () {

		var nodeDefs = this.json.nodes || [];
		var skinDefs = this.json.skins || [];
		var meshDefs = this.json.meshes || [];

		var meshReferences = {};
		var meshUses = {};

		// Nothing in the node definition indicates whether it is a Bone or an
		// Object3D. Use the skins' joint references to mark bones.
		for ( var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

			var joints = skinDefs[ skinIndex ].joints;

			for ( var i = 0, il = joints.length; i < il; i ++ ) {

				nodeDefs[ joints[ i ] ].isBone = true;

			}

		}

		// Meshes can (and should) be reused by multiple nodes in a glTF asset. To
		// avoid having more than one THREE.Mesh with the same name, count
		// references and rename instances below.
		//
		// Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
		for ( var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			var nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.mesh !== undefined ) {

				if ( meshReferences[ nodeDef.mesh ] === undefined ) {

					meshReferences[ nodeDef.mesh ] = meshUses[ nodeDef.mesh ] = 0;

				}

				meshReferences[ nodeDef.mesh ] ++;

				// Nothing in the mesh definition indicates whether it is
				// a SkinnedMesh or Mesh. Use the node's mesh reference
				// to mark SkinnedMesh if node has skin.
				if ( nodeDef.skin !== undefined ) {

					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

				}

			}

		}

		this.json.meshReferences = meshReferences;
		this.json.meshUses = meshUses;

	};

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<THREE.Object3D|THREE.Material|THREE.Texture|THREE.AnimationClip|ArrayBuffer|Object>}
	 */
	GLTFParser.prototype.getDependency = function ( type, index ) {

		var cacheKey = type + ':' + index;
		var dependency = this.cache.get( cacheKey );

		if ( ! dependency ) {

			switch ( type ) {

				case 'scene':
					dependency = this.loadScene( index );
					break;

				case 'node':
					dependency = this.loadNode( index );
					break;

				case 'mesh':
					dependency = this.loadMesh( index );
					break;

				case 'accessor':
					dependency = this.loadAccessor( index );
					break;

				case 'bufferView':
					dependency = this.loadBufferView( index );
					break;

				case 'buffer':
					dependency = this.loadBuffer( index );
					break;

				case 'material':
					dependency = this.loadMaterial( index );
					break;

				case 'texture':
					dependency = this.loadTexture( index );
					break;

				case 'skin':
					dependency = this.loadSkin( index );
					break;

				case 'animation':
					dependency = this.loadAnimation( index );
					break;

				case 'camera':
					dependency = this.loadCamera( index );
					break;

				case 'light':
					dependency = this.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].loadLight( index );
					break;

				default:
					throw new Error( 'Unknown type: ' + type );

			}

			this.cache.add( cacheKey, dependency );

		}

		return dependency;

	};

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	GLTFParser.prototype.getDependencies = function ( type ) {

		var dependencies = this.cache.get( type );

		if ( ! dependencies ) {

			var parser = this;
			var defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

			dependencies = Promise.all( defs.map( function ( def, index ) {

				return parser.getDependency( type, index );

			} ) );

			this.cache.add( type, dependencies );

		}

		return dependencies;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBuffer = function ( bufferIndex ) {

		var bufferDef = this.json.buffers[ bufferIndex ];
		var loader = this.fileLoader;

		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

		}

		// If present, GLB container is required to be the first buffer.
		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

		}

		var options = this.options;

		return new Promise( function ( resolve, reject ) {

			loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

			} );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBufferView = function ( bufferViewIndex ) {

		var bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

			var byteLength = bufferViewDef.byteLength || 0;
			var byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice( byteOffset, byteOffset + byteLength );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
	 */
	GLTFParser.prototype.loadAccessor = function ( accessorIndex ) {

		var parser = this;
		var json = this.json;

		var accessorDef = this.json.accessors[ accessorIndex ];

		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

			// Ignore empty accessors, which may be used to declare runtime
			// information about attributes coming from another source (e.g. Draco
			// compression extension).
			return Promise.resolve( null );

		}

		var pendingBufferViews = [];

		if ( accessorDef.bufferView !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

		} else {

			pendingBufferViews.push( null );

		}

		if ( accessorDef.sparse !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

		}

		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

			var bufferView = bufferViews[ 0 ];

			var itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
			var TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
			var elementBytes = TypedArray.BYTES_PER_ELEMENT;
			var itemBytes = elementBytes * itemSize;
			var byteOffset = accessorDef.byteOffset || 0;
			var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
			var normalized = accessorDef.normalized === true;
			var array, bufferAttribute;

			// The buffer is not interleaved if the stride is the item size in bytes.
			if ( byteStride && byteStride !== itemBytes ) {

				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
				// This makes sure that IBA.count reflects accessor.count properly
				var ibSlice = Math.floor( byteOffset / byteStride );
				var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
				var ib = parser.cache.get( ibCacheKey );

				if ( ! ib ) {

					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

					parser.cache.add( ibCacheKey, ib );

				}

				bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

			} else {

				if ( bufferView === null ) {

					array = new TypedArray( accessorDef.count * itemSize );

				} else {

					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

				}

				bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

			}

			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
			if ( accessorDef.sparse !== undefined ) {

				var itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				var TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

				var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

				var sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
				var sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

				if ( bufferView !== null ) {

					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
					bufferAttribute = new THREE.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

				}

				for ( var i = 0, il = sparseIndices.length; i < il; i ++ ) {

					var index = sparseIndices[ i ];

					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

				}

			}

			return bufferAttribute;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */
	GLTFParser.prototype.loadTexture = function ( textureIndex ) {

		var parser = this;
		var json = this.json;
		var options = this.options;
		var textureLoader = this.textureLoader;

		var URL = window.URL || window.webkitURL;

		var textureDef = json.textures[ textureIndex ];

		var textureExtensions = textureDef.extensions || {};

		var source;

		if ( textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ] ) {

			source = json.images[ textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].source ];

		} else {

			source = json.images[ textureDef.source ];

		}

		var sourceURI = source.uri;
		var isObjectURL = false;

		if ( source.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

				isObjectURL = true;
				var blob = new Blob( [ bufferView ], { type: source.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		}

		return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

			// Load Texture resource.

			var loader = options.manager.getHandler( sourceURI );

			if ( ! loader ) {

				loader = textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ]
					? parser.extensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].ddsLoader
					: textureLoader;

			}

			return new Promise( function ( resolve, reject ) {

				loader.load( resolveURL( sourceURI, options.path ), resolve, undefined, reject );

			} );

		} ).then( function ( texture ) {

			// Clean up resources and configure Texture.

			if ( isObjectURL === true ) {

				URL.revokeObjectURL( sourceURI );

			}

			texture.flipY = false;

			if ( textureDef.name !== undefined ) texture.name = textureDef.name;

			// Ignore unknown mime types, like DDS files.
			if ( source.mimeType in MIME_TYPE_FORMATS ) {

				texture.format = MIME_TYPE_FORMATS[ source.mimeType ];

			}

			var samplers = json.samplers || {};
			var sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || THREE.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || THREE.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || THREE.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || THREE.RepeatWrapping;

			return texture;

		} );

	};

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise}
	 */
	GLTFParser.prototype.assignTexture = function ( materialParams, mapName, mapDef ) {

		var parser = this;

		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

			if ( ! texture.isCompressedTexture ) {

				switch ( mapName ) {

					case 'aoMap':
					case 'emissiveMap':
					case 'metalnessMap':
					case 'normalMap':
					case 'roughnessMap':
						texture.format = THREE.RGBFormat;
						break;

				}

			}

			// Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
			// However, we will copy UV set 0 to UV set 1 on demand for aoMap
			if ( mapDef.texCoord !== undefined && mapDef.texCoord != 0 && ! ( mapName === 'aoMap' && mapDef.texCoord == 1 ) ) {

				console.warn( 'THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.' );

			}

			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

				var transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

				if ( transform ) {

					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );

				}

			}

			materialParams[ mapName ] = texture;

		} );

	};

	/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accomodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {THREE.Object3D} mesh Mesh, Line, or Points instance.
	 */
	GLTFParser.prototype.assignFinalMaterial = function ( mesh ) {

		var geometry = mesh.geometry;
		var material = mesh.material;
		var extensions = this.extensions;

		var useVertexTangents = geometry.attributes.tangent !== undefined;
		var useVertexColors = geometry.attributes.color !== undefined;
		var useFlatShading = geometry.attributes.normal === undefined;
		var useSkinning = mesh.isSkinnedMesh === true;
		var useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
		var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

		if ( mesh.isPoints ) {

			var cacheKey = 'PointsMaterial:' + material.uuid;

			var pointsMaterial = this.cache.get( cacheKey );

			if ( ! pointsMaterial ) {

				pointsMaterial = new THREE.PointsMaterial();
				THREE.Material.prototype.copy.call( pointsMaterial, material );
				pointsMaterial.color.copy( material.color );
				pointsMaterial.map = material.map;
				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

				this.cache.add( cacheKey, pointsMaterial );

			}

			material = pointsMaterial;

		} else if ( mesh.isLine ) {

			var cacheKey = 'LineBasicMaterial:' + material.uuid;

			var lineMaterial = this.cache.get( cacheKey );

			if ( ! lineMaterial ) {

				lineMaterial = new THREE.LineBasicMaterial();
				THREE.Material.prototype.copy.call( lineMaterial, material );
				lineMaterial.color.copy( material.color );

				this.cache.add( cacheKey, lineMaterial );

			}

			material = lineMaterial;

		}

		// Clone the material if it will be modified
		if ( useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

			var cacheKey = 'ClonedMaterial:' + material.uuid + ':';

			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
			if ( useSkinning ) cacheKey += 'skinning:';
			if ( useVertexTangents ) cacheKey += 'vertex-tangents:';
			if ( useVertexColors ) cacheKey += 'vertex-colors:';
			if ( useFlatShading ) cacheKey += 'flat-shading:';
			if ( useMorphTargets ) cacheKey += 'morph-targets:';
			if ( useMorphNormals ) cacheKey += 'morph-normals:';

			var cachedMaterial = this.cache.get( cacheKey );

			if ( ! cachedMaterial ) {

				cachedMaterial = material.isGLTFSpecularGlossinessMaterial
					? extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].cloneMaterial( material )
					: material.clone();

				if ( useSkinning ) cachedMaterial.skinning = true;
				if ( useVertexTangents ) cachedMaterial.vertexTangents = true;
				if ( useVertexColors ) cachedMaterial.vertexColors = THREE.VertexColors;
				if ( useFlatShading ) cachedMaterial.flatShading = true;
				if ( useMorphTargets ) cachedMaterial.morphTargets = true;
				if ( useMorphNormals ) cachedMaterial.morphNormals = true;

				this.cache.add( cacheKey, cachedMaterial );

			}

			material = cachedMaterial;

		}

		// workarounds for mesh and geometry

		if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

			geometry.setAttribute( 'uv2', new THREE.BufferAttribute( geometry.attributes.uv.array, 2 ) );

		}

		if ( material.isGLTFSpecularGlossinessMaterial ) {

			// for GLTFSpecularGlossinessMaterial(ShaderMaterial) uniforms runtime update
			mesh.onBeforeRender = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].refreshUniforms;

		}

		// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
		if ( material.normalScale && ! useVertexTangents ) {

			material.normalScale.y = - material.normalScale.y;

		}

		mesh.material = material;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<THREE.Material>}
	 */
	GLTFParser.prototype.loadMaterial = function ( materialIndex ) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;
		var materialDef = json.materials[ materialIndex ];

		var materialType;
		var materialParams = {};
		var materialExtensions = materialDef.extensions || {};

		var pending = [];

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

			var sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
			materialType = sgExtension.getMaterialType();
			pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

		} else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

			var kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
			materialType = kmuExtension.getMaterialType();
			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

		} else {

			// Specification:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

			materialType = THREE.MeshStandardMaterial;

			var metallicRoughness = materialDef.pbrMetallicRoughness || {};

			materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
			materialParams.opacity = 1.0;

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

			}

		}

		if ( materialDef.doubleSided === true ) {

			materialParams.side = THREE.DoubleSide;

		}

		var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

		if ( alphaMode === ALPHA_MODES.BLEND ) {

			materialParams.transparent = true;

		} else {

			materialParams.transparent = false;

			if ( alphaMode === ALPHA_MODES.MASK ) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

			}

		}

		if ( materialDef.normalTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

			materialParams.normalScale = new THREE.Vector2( 1, 1 );

			if ( materialDef.normalTexture.scale !== undefined ) {

				materialParams.normalScale.set( materialDef.normalTexture.scale, materialDef.normalTexture.scale );

			}

		}

		if ( materialDef.occlusionTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

			if ( materialDef.occlusionTexture.strength !== undefined ) {

				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

			}

		}

		if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

		}

		if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

		}

		return Promise.all( pending ).then( function () {

			var material;

			if ( materialType === THREE.ShaderMaterial ) {

				material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

			} else {

				material = new materialType( materialParams );

			}

			if ( materialDef.name !== undefined ) material.name = materialDef.name;

			// baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
			if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
			if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;
			if ( material.specularMap ) material.specularMap.encoding = THREE.sRGBEncoding;

			assignExtrasToUserData( material, materialDef );

			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

			return material;

		} );

	};

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 */
	function computeBounds( geometry, primitiveDef, parser ) {

		var attributes = primitiveDef.attributes;

		var box = new THREE.Box3();

		if ( attributes.POSITION !== undefined ) {

			var accessor = parser.json.accessors[ attributes.POSITION ];

			var min = accessor.min;
			var max = accessor.max;

			// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

			if ( min !== undefined && max !== undefined ) {

				box.set(
					new THREE.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
					new THREE.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] ) );

			} else {

				console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

				return;

			}

		} else {

			return;

		}

		var targets = primitiveDef.targets;

		if ( targets !== undefined ) {

			var vector = new THREE.Vector3();

			for ( var i = 0, il = targets.length; i < il; i ++ ) {

				var target = targets[ i ];

				if ( target.POSITION !== undefined ) {

					var accessor = parser.json.accessors[ target.POSITION ];
					var min = accessor.min;
					var max = accessor.max;

					// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

					if ( min !== undefined && max !== undefined ) {

						// we need to get max of absolute components because target weight is [-1,1]
						vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
						vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
						vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );

						box.expandByVector( vector );

					} else {

						console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

					}

				}

			}

		}

		geometry.boundingBox = box;

		var sphere = new THREE.Sphere();

		box.getCenter( sphere.center );
		sphere.radius = box.min.distanceTo( box.max ) / 2;

		geometry.boundingSphere = sphere;

	}

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

		var attributes = primitiveDef.attributes;

		var pending = [];

		function assignAttributeAccessor( accessorIndex, attributeName ) {

			return parser.getDependency( 'accessor', accessorIndex )
				.then( function ( accessor ) {

					geometry.setAttribute( attributeName, accessor );

				} );

		}

		for ( var gltfAttributeName in attributes ) {

			var threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

			// Skip attributes already provided by e.g. Draco extension.
			if ( threeAttributeName in geometry.attributes ) continue;

			pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

		}

		if ( primitiveDef.indices !== undefined && ! geometry.index ) {

			var accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

				geometry.setIndex( accessor );

			} );

			pending.push( accessor );

		}

		assignExtrasToUserData( geometry, primitiveDef );

		computeBounds( geometry, primitiveDef, parser );

		return Promise.all( pending ).then( function () {

			return primitiveDef.targets !== undefined
				? addMorphTargets( geometry, primitiveDef.targets, parser )
				: geometry;

		} );

	}

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Number} drawMode
	 * @return {THREE.BufferGeometry}
	 */
	function toTrianglesDrawMode( geometry, drawMode ) {

		var index = geometry.getIndex();

		// generate index if not present

		if ( index === null ) {

			var indices = [];

			var position = geometry.getAttribute( 'position' );

			if ( position !== undefined ) {

				for ( var i = 0; i < position.count; i ++ ) {

					indices.push( i );

				}

				geometry.setIndex( indices );
				index = geometry.getIndex();

			} else {

				console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
				return geometry;

			}

		}

		//

		var numberOfTriangles = index.count - 2;
		var newIndices = [];

		if ( drawMode === THREE.TriangleFanDrawMode ) {

			// gl.TRIANGLE_FAN

			for ( var i = 1; i <= numberOfTriangles; i ++ ) {

				newIndices.push( index.getX( 0 ) );
				newIndices.push( index.getX( i ) );
				newIndices.push( index.getX( i + 1 ) );

			}

		} else {

			// gl.TRIANGLE_STRIP

			for ( var i = 0; i < numberOfTriangles; i ++ ) {

				if ( i % 2 === 0 ) {

					newIndices.push( index.getX( i ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i + 2 ) );


				} else {

					newIndices.push( index.getX( i + 2 ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i ) );

				}

			}

		}

		if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

			console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

		}

		// build final geometry

		var newGeometry = geometry.clone();
		newGeometry.setIndex( newIndices );

		return newGeometry;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<THREE.BufferGeometry>>}
	 */
	GLTFParser.prototype.loadGeometries = function ( primitives ) {

		var parser = this;
		var extensions = this.extensions;
		var cache = this.primitiveCache;

		function createDracoPrimitive( primitive ) {

			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
				.decodePrimitive( primitive, parser )
				.then( function ( geometry ) {

					return addPrimitiveAttributes( geometry, primitive, parser );

				} );

		}

		var pending = [];

		for ( var i = 0, il = primitives.length; i < il; i ++ ) {

			var primitive = primitives[ i ];
			var cacheKey = createPrimitiveKey( primitive );

			// See if we've already created this geometry
			var cached = cache[ cacheKey ];

			if ( cached ) {

				// Use the cached geometry if it exists
				pending.push( cached.promise );

			} else {

				var geometryPromise;

				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

					// Use DRACO geometry if available
					geometryPromise = createDracoPrimitive( primitive );

				} else {

					// Otherwise create a new geometry
					geometryPromise = addPrimitiveAttributes( new THREE.BufferGeometry(), primitive, parser );

				}

				// Cache this geometry
				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

				pending.push( geometryPromise );

			}

		}

		return Promise.all( pending );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
	 */
	GLTFParser.prototype.loadMesh = function ( meshIndex ) {

		var parser = this;
		var json = this.json;

		var meshDef = json.meshes[ meshIndex ];
		var primitives = meshDef.primitives;

		var pending = [];

		for ( var i = 0, il = primitives.length; i < il; i ++ ) {

			var material = primitives[ i ].material === undefined
				? createDefaultMaterial( this.cache )
				: this.getDependency( 'material', primitives[ i ].material );

			pending.push( material );

		}

		pending.push( parser.loadGeometries( primitives ) );

		return Promise.all( pending ).then( function ( results ) {

			var materials = results.slice( 0, results.length - 1 );
			var geometries = results[ results.length - 1 ];

			var meshes = [];

			for ( var i = 0, il = geometries.length; i < il; i ++ ) {

				var geometry = geometries[ i ];
				var primitive = primitives[ i ];

				// 1. create Mesh

				var mesh;

				var material = materials[ i ];

				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
					primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
					primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
					primitive.mode === undefined ) {

					// .isSkinnedMesh isn't in glTF spec. See .markDefs()
					mesh = meshDef.isSkinnedMesh === true
						? new THREE.SkinnedMesh( geometry, material )
						: new THREE.Mesh( geometry, material );

					if ( mesh.isSkinnedMesh === true && ! mesh.geometry.attributes.skinWeight.normalized ) {

						// we normalize floating point skin weight array to fix malformed assets (see #15319)
						// it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
						mesh.normalizeSkinWeights();

					}

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleStripDrawMode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleFanDrawMode );

					}

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

					mesh = new THREE.LineSegments( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

					mesh = new THREE.Line( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

					mesh = new THREE.LineLoop( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

					mesh = new THREE.Points( geometry, material );

				} else {

					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

				}

				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

					updateMorphTargets( mesh, meshDef );

				}

				mesh.name = meshDef.name || ( 'mesh_' + meshIndex );

				if ( geometries.length > 1 ) mesh.name += '_' + i;

				assignExtrasToUserData( mesh, meshDef );

				parser.assignFinalMaterial( mesh );

				meshes.push( mesh );

			}

			if ( meshes.length === 1 ) {

				return meshes[ 0 ];

			}

			var group = new THREE.Group();

			for ( var i = 0, il = meshes.length; i < il; i ++ ) {

				group.add( meshes[ i ] );

			}

			return group;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	GLTFParser.prototype.loadCamera = function ( cameraIndex ) {

		var camera;
		var cameraDef = this.json.cameras[ cameraIndex ];
		var params = cameraDef[ cameraDef.type ];

		if ( ! params ) {

			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
			return;

		}

		if ( cameraDef.type === 'perspective' ) {

			camera = new THREE.PerspectiveCamera( THREE.Math.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

		} else if ( cameraDef.type === 'orthographic' ) {

			camera = new THREE.OrthographicCamera( params.xmag / - 2, params.xmag / 2, params.ymag / 2, params.ymag / - 2, params.znear, params.zfar );

		}

		if ( cameraDef.name !== undefined ) camera.name = cameraDef.name;

		assignExtrasToUserData( camera, cameraDef );

		return Promise.resolve( camera );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */
	GLTFParser.prototype.loadSkin = function ( skinIndex ) {

		var skinDef = this.json.skins[ skinIndex ];

		var skinEntry = { joints: skinDef.joints };

		if ( skinDef.inverseBindMatrices === undefined ) {

			return Promise.resolve( skinEntry );

		}

		return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

			skinEntry.inverseBindMatrices = accessor;

			return skinEntry;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<THREE.AnimationClip>}
	 */
	GLTFParser.prototype.loadAnimation = function ( animationIndex ) {

		var json = this.json;

		var animationDef = json.animations[ animationIndex ];

		var pendingNodes = [];
		var pendingInputAccessors = [];
		var pendingOutputAccessors = [];
		var pendingSamplers = [];
		var pendingTargets = [];

		for ( var i = 0, il = animationDef.channels.length; i < il; i ++ ) {

			var channel = animationDef.channels[ i ];
			var sampler = animationDef.samplers[ channel.sampler ];
			var target = channel.target;
			var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
			var input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
			var output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

			pendingNodes.push( this.getDependency( 'node', name ) );
			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
			pendingSamplers.push( sampler );
			pendingTargets.push( target );

		}

		return Promise.all( [

			Promise.all( pendingNodes ),
			Promise.all( pendingInputAccessors ),
			Promise.all( pendingOutputAccessors ),
			Promise.all( pendingSamplers ),
			Promise.all( pendingTargets )

		] ).then( function ( dependencies ) {

			var nodes = dependencies[ 0 ];
			var inputAccessors = dependencies[ 1 ];
			var outputAccessors = dependencies[ 2 ];
			var samplers = dependencies[ 3 ];
			var targets = dependencies[ 4 ];

			var tracks = [];

			for ( var i = 0, il = nodes.length; i < il; i ++ ) {

				var node = nodes[ i ];
				var inputAccessor = inputAccessors[ i ];
				var outputAccessor = outputAccessors[ i ];
				var sampler = samplers[ i ];
				var target = targets[ i ];

				if ( node === undefined ) continue;

				node.updateMatrix();
				node.matrixAutoUpdate = true;

				var TypedKeyframeTrack;

				switch ( PATH_PROPERTIES[ target.path ] ) {

					case PATH_PROPERTIES.weights:

						TypedKeyframeTrack = THREE.NumberKeyframeTrack;
						break;

					case PATH_PROPERTIES.rotation:

						TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
						break;

					case PATH_PROPERTIES.position:
					case PATH_PROPERTIES.scale:
					default:

						TypedKeyframeTrack = THREE.VectorKeyframeTrack;
						break;

				}

				var targetName = node.name ? node.name : node.uuid;

				var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : THREE.InterpolateLinear;

				var targetNames = [];

				if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

					// Node may be a THREE.Group (glTF mesh with several primitives) or a THREE.Mesh.
					node.traverse( function ( object ) {

						if ( object.isMesh === true && object.morphTargetInfluences ) {

							targetNames.push( object.name ? object.name : object.uuid );

						}

					} );

				} else {

					targetNames.push( targetName );

				}

				var outputArray = outputAccessor.array;

				if ( outputAccessor.normalized ) {

					var scale;

					if ( outputArray.constructor === Int8Array ) {

						scale = 1 / 127;

					} else if ( outputArray.constructor === Uint8Array ) {

						scale = 1 / 255;

					} else if ( outputArray.constructor == Int16Array ) {

						scale = 1 / 32767;

					} else if ( outputArray.constructor === Uint16Array ) {

						scale = 1 / 65535;

					} else {

						throw new Error( 'THREE.GLTFLoader: Unsupported output accessor component type.' );

					}

					var scaled = new Float32Array( outputArray.length );

					for ( var j = 0, jl = outputArray.length; j < jl; j ++ ) {

						scaled[ j ] = outputArray[ j ] * scale;

					}

					outputArray = scaled;

				}

				for ( var j = 0, jl = targetNames.length; j < jl; j ++ ) {

					var track = new TypedKeyframeTrack(
						targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
						inputAccessor.array,
						outputArray,
						interpolation
					);

					// Override interpolation with custom factory method.
					if ( sampler.interpolation === 'CUBICSPLINE' ) {

						track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

							// A CUBICSPLINE keyframe in glTF has three output values for each input value,
							// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
							// must be divided by three to get the interpolant's sampleSize argument.

							return new GLTFCubicSplineInterpolant( this.times, this.values, this.getValueSize() / 3, result );

						};

						// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
						track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

					}

					tracks.push( track );

				}

			}

			var name = animationDef.name !== undefined ? animationDef.name : 'animation_' + animationIndex;

			return new THREE.AnimationClip( name, undefined, tracks );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<THREE.Object3D>}
	 */
	GLTFParser.prototype.loadNode = function ( nodeIndex ) {

		var json = this.json;
		var extensions = this.extensions;
		var parser = this;

		var meshReferences = json.meshReferences;
		var meshUses = json.meshUses;

		var nodeDef = json.nodes[ nodeIndex ];

		return ( function () {

			var pending = [];

			if ( nodeDef.mesh !== undefined ) {

				pending.push( parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

					var node;

					if ( meshReferences[ nodeDef.mesh ] > 1 ) {

						var instanceNum = meshUses[ nodeDef.mesh ] ++;

						node = mesh.clone();
						node.name += '_instance_' + instanceNum;

						// onBeforeRender copy for Specular-Glossiness
						node.onBeforeRender = mesh.onBeforeRender;

						for ( var i = 0, il = node.children.length; i < il; i ++ ) {

							node.children[ i ].name += '_instance_' + instanceNum;
							node.children[ i ].onBeforeRender = mesh.children[ i ].onBeforeRender;

						}

					} else {

						node = mesh;

					}

					// if weights are provided on the node, override weights on the mesh.
					if ( nodeDef.weights !== undefined ) {

						node.traverse( function ( o ) {

							if ( ! o.isMesh ) return;

							for ( var i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

								o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

							}

						} );

					}

					return node;

				} ) );

			}

			if ( nodeDef.camera !== undefined ) {

				pending.push( parser.getDependency( 'camera', nodeDef.camera ) );

			}

			if ( nodeDef.extensions
				&& nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ]
				&& nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light !== undefined ) {

				pending.push( parser.getDependency( 'light', nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light ) );

			}

			return Promise.all( pending );

		}() ).then( function ( objects ) {

			var node;

			// .isBone isn't in glTF spec. See .markDefs
			if ( nodeDef.isBone === true ) {

				node = new THREE.Bone();

			} else if ( objects.length > 1 ) {

				node = new THREE.Group();

			} else if ( objects.length === 1 ) {

				node = objects[ 0 ];

			} else {

				node = new THREE.Object3D();

			}

			if ( node !== objects[ 0 ] ) {

				for ( var i = 0, il = objects.length; i < il; i ++ ) {

					node.add( objects[ i ] );

				}

			}

			if ( nodeDef.name !== undefined ) {

				node.userData.name = nodeDef.name;
				node.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );

			}

			assignExtrasToUserData( node, nodeDef );

			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

			if ( nodeDef.matrix !== undefined ) {

				var matrix = new THREE.Matrix4();
				matrix.fromArray( nodeDef.matrix );
				node.applyMatrix( matrix );

			} else {

				if ( nodeDef.translation !== undefined ) {

					node.position.fromArray( nodeDef.translation );

				}

				if ( nodeDef.rotation !== undefined ) {

					node.quaternion.fromArray( nodeDef.rotation );

				}

				if ( nodeDef.scale !== undefined ) {

					node.scale.fromArray( nodeDef.scale );

				}

			}

			return node;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<THREE.Scene>}
	 */
	GLTFParser.prototype.loadScene = function () {

		// scene node hierachy builder

		function buildNodeHierachy( nodeId, parentObject, json, parser ) {

			var nodeDef = json.nodes[ nodeId ];

			return parser.getDependency( 'node', nodeId ).then( function ( node ) {

				if ( nodeDef.skin === undefined ) return node;

				// build skeleton here as well

				var skinEntry;

				return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

					skinEntry = skin;

					var pendingJoints = [];

					for ( var i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

						pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

					}

					return Promise.all( pendingJoints );

				} ).then( function ( jointNodes ) {

					node.traverse( function ( mesh ) {

						if ( ! mesh.isMesh ) return;

						var bones = [];
						var boneInverses = [];

						for ( var j = 0, jl = jointNodes.length; j < jl; j ++ ) {

							var jointNode = jointNodes[ j ];

							if ( jointNode ) {

								bones.push( jointNode );

								var mat = new THREE.Matrix4();

								if ( skinEntry.inverseBindMatrices !== undefined ) {

									mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

								}

								boneInverses.push( mat );

							} else {

								console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

							}

						}

						mesh.bind( new THREE.Skeleton( bones, boneInverses ), mesh.matrixWorld );

					} );

					return node;

				} );

			} ).then( function ( node ) {

				// build node hierachy

				parentObject.add( node );

				var pending = [];

				if ( nodeDef.children ) {

					var children = nodeDef.children;

					for ( var i = 0, il = children.length; i < il; i ++ ) {

						var child = children[ i ];
						pending.push( buildNodeHierachy( child, node, json, parser ) );

					}

				}

				return Promise.all( pending );

			} );

		}

		return function loadScene( sceneIndex ) {

			var json = this.json;
			var extensions = this.extensions;
			var sceneDef = this.json.scenes[ sceneIndex ];
			var parser = this;

			var scene = new THREE.Scene();
			if ( sceneDef.name !== undefined ) scene.name = sceneDef.name;

			assignExtrasToUserData( scene, sceneDef );

			if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

			var nodeIds = sceneDef.nodes || [];

			var pending = [];

			for ( var i = 0, il = nodeIds.length; i < il; i ++ ) {

				pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

			}

			return Promise.all( pending ).then( function () {

				return scene;

			} );

		};

	}();

	return GLTFLoader;

} )();