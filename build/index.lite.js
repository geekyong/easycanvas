!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var a in n)("object"==typeof exports?exports:t)[a]=n[a]}}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(9)},function(t,e){"use strict";var n=function(t,e,n,a,i){var r=i||1;return r>t-n?t-n>-r?r>e-a?e-a>-r?5:8:2:r>e-a?e-a>-r?4:7:1:r>e-a?e-a>-r?6:9:3},a={1:{x:-1,y:1},2:{x:0,y:1},3:{x:1,y:1},4:{x:-1,y:0},5:{x:0,y:0},6:{x:1,y:0},7:{x:-1,y:-1},8:{x:0,y:-1},9:{x:1,y:-1}};t.exports={num:n,xy:function(){var t=n.apply(this,arguments);return JSON.parse(JSON.stringify(a[t]||{}))},NUM2XAY:function(t){return JSON.parse(JSON.stringify(a[t]))},pointInRect:function(t,e,n,a,i,r){return!(n>t||t>a||i>e||e>r)},getDistanceSq:function(t,e,n,a){return(t-n)*(t-n)+(e-a)*(e-a)},enoughNear:function(t,e,n,a,i){return i*i>=(t-n)*(t-n)+(e-a)*(e-a)}}},function(t,e){"use strict";var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};t.exports=n},function(t,e){"use strict";t.exports={funcOrValue:function(t,e){return"function"==typeof t?t.call(e):t},cent2value:function(t,e){return"string"==typeof t&&t&&e&&"%"===t[t.length-1]?e*+t.substr(0,t.length-1)/100:t},getMinFromArray:function(t){var e=t[0];return t.forEach(function(t){e>t&&(e=t)}),e},getCharFromKey:function(t){return t.key||String.fromCharCode(t.keyCode)}}},function(t,e){"use strict";var n={};t.exports=function(t,e,a){var i=t;if(a&&(i+=JSON.stringify(a)),n[i]&&"processing"!==n[i])return setTimeout(function(){e&&e(n[i])}),n[i];var r=new Image;return r.src=t,n[i]="processing",r.onload=function(){var t=a||{};if(t.alphaColor){var o=document.createElement("canvas"),u=o.getContext("2d");o.width=r.width,o.height=r.height,u.drawImage(r,0,0);for(var l=u.getImageData(0,0,r.width,r.height),s=0;l.data.length>s;s+=4){var c=l.data[s]+l.data[s+1]+l.data[s+2],f=1;f>l.data[s]&&f>l.data[s+1]&&f>l.data[s+2]&&(l.data[s+3]=parseInt(c/255))}u.putImageData(l,0,0),r=o}n[i]=r,e&&e(r)},r.onerror=function(){n[i]=r},r}},function(t,e){"use strict";t.exports=function(t){var e=t.width,n=t.height,a=document.createElement("canvas");a.width=e,a.height=n;var i=a.getContext("2d");i.scale(1,-1),i.translate(0,-n),i.drawImage(t,0,0);var r=i.getImageData(0,0,e,n);return{canvas:i,img:r}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(2),o=a(r),u=n(3),l=a(u),s=n(1),c=a(s),f=function(){},d={canvasDom:null,paintContext:null,nextTickTime:0,pausing:!1,fps:0,fpsCalculateTime:0,fpsHandler:null,contextWidth:0,contextHeight:0,missingEvents:{click:null},paintList:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,lastPaintTime:0},h={clear:function(){this.paintList.splice(0)},setFpsHandler:function(t){this.fpsHandler=t},setMaxFps:function(t){this.maxFps=t||-1},pause:function(t){this.pausing=void 0===t||t},preAdd:function(t){var e=l.default.funcOrValue(t.img);return t.zIndex=t.zIndex||0,t.sx=l.default.cent2value(t.sx||0,e.width),t.sy=l.default.cent2value(t.sy||0,e.height),t.tx=l.default.cent2value(t.tx||0,this.contextWidth),t.ty=l.default.cent2value(t.ty||0,this.contextHeight),t.sw=l.default.cent2value(t.sw||e.width,e.width),t.sh=l.default.cent2value(t.sh||e.height,e.height),t.tw=l.default.cent2value(t.tw||0,this.contextWidth),t.th=l.default.cent2value(t.th||0,this.contextHeight),t.mirrX=t.mirrX||0,t.opacity=void 0===t.opacity?1:t.opacity,t.marginX=t.marginX||0,t.marginY=t.marginY||0,t.events=t.events||{},t.eIndex=t.eIndex||0,t.locate=t.locate||"center",t.visible=t.visible,t.passEvent=t.passEvent,t.perTickHandler=t.perTickHandler,t},add:function(t){if(t){var e=t,n=l.default.funcOrValue(e.img);if(this.preAdd(e),e.$cache={},e.dragable){var a={x:0,y:0},r=!1,o=e.events.mousedown||e.events.touchstart;e.events.touchstart=e.events.mousedown=function(t){if(r=!0,"object"===i(e.dragable)){var n=t.layerX-this.tx,u=t.layerY-this.ty;if(!c.default.pointInRect(n,u,l.default.funcOrValue(e.dragable.x1,e),l.default.funcOrValue(e.dragable.x2,e),l.default.funcOrValue(e.dragable.y1,e),l.default.funcOrValue(e.dragable.y2,e)))return r=!1,o?o.call(e,t):void 0}return a.x=t.screenX||t.layerX,a.y=t.screenY||t.layerY,o?o.call(e,t):"drag"}.bind(e);var u=e.events.mousehold;e.events.touchmove=e.events.mousemove=function(t){return r&&(this.tx+=(t.screenX||t.layerX)-a.x,this.ty+=(t.screenY||t.layerY)-a.y,a.x=t.screenX||t.layerX,a.y=t.screenY||t.layerY),u?u.call(e,t):"drag"}.bind(e);var s=e.events.mouseup||e.events.touchend;e.events.touchend=e.events.mouseup=function(t){return r=!1,s?s.call(e,t):"drag"};var f=e.events.mouseout;e.events.mouseout=function(t){return r=!1,f?f.call(e,t):"drag"};var d=e.events.click;e.events.click=function(t){var n=t.layerX-this.tx,a=t.layerY-this.ty;return c.default.pointInRect(n,a,l.default.funcOrValue(e.dragable.x1,e),l.default.funcOrValue(e.dragable.x2,e),l.default.funcOrValue(e.dragable.y1,e),l.default.funcOrValue(e.dragable.y2,e))?(t.preventDefault(),!d||d.call(e,t)):!!d&&d.call(e,t)}}if(e.loop){e.loop.x>0&&(e.loop.x=0-n.width/e.loop.x),e.loop.y>0&&(e.loop.y=0-n.height/e.loop.y);var h=n.width/(0-e.loop.x),p=n.height/(0-e.loop.y);e.tw=e.tw||h,e.th=e.th||p,e.loop.px=h,e.loop.py=p,e.loop.index=e.loop.index||0,e.loop.interval=e.loop.interval||16,e.loop.lastTickTime=0,void 0===e.loop.circle&&(e.loop.circle=!0)}return this.paintList.push(e),e}},remove:function(t,e){t.visible=!1,t.removing=!0,setTimeout(function(){this.paintList=this.paintList.filter(function(t){return t.removing!==!0})}.bind(this)),e&&this.paintList.splice(this.paintList.indexOf(t),1)},register:function(t,e){for(var n in d)this[n]=JSON.parse(JSON.stringify(d[n]));this.canvasDom=t,this.paintContext=t.getContext("2d"),this.contextWidth=t.width,this.contextHeight=t.height;var a=e||{};this.missingEvents=a.events||{};var i=this;t.addEventListener("contextmenu",i.$handler.bind(i)),t.addEventListener("click",i.$handler.bind(i)),t.addEventListener("dblclick",i.$handler.bind(i)),t.addEventListener("mousedown",i.$handler.bind(i)),t.addEventListener("mouseup",i.$handler.bind(i)),t.addEventListener("mousemove",i.$handler.bind(i)),t.addEventListener("touchstart",i.$handler.bind(i)),t.addEventListener("touchend",i.$handler.bind(i)),t.addEventListener("touchmove",i.$handler.bind(i)),setInterval(function(){if(this.eHoldingFlag){var t=this.eHoldingFlag;this.$handler.call(this,{layerX:t.layerX,layerY:t.layerY,screenX:t.screenX||t.layerX,screenY:t.screenY||t.layerY,type:"mousehold"})}}.bind(i),40)},$visibles:function(){return this.paintList.filter(function(t){return l.default.funcOrValue(t.visible,t)!==!1})},$handler:function(t){!t.layerX&&t.touches&&t.touches[0]&&(t.layerX=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.targetTouches[0].pageY-t.currentTarget.offsetTop);var e=this,n=e.paintList.filter(function(e){if(l.default.funcOrValue(e.visible,e)===!1)return!1;e.$cache||(e.$cache={});var n=e.$cache.tx||l.default.funcOrValue(e.tx,e),a=e.$cache.ty||l.default.funcOrValue(e.ty,e),i=e.$cache.tw||l.default.funcOrValue(e.tw,e),r=e.$cache.th||l.default.funcOrValue(e.th,e);return void 0===e.$cache.tx&&"center"===e.locate&&(n-=.5*i,a-=.5*r),c.default.pointInRect(t.layerX,t.layerY,n,n+i,a,a+r)}).sort(function(t,e){return l.default.funcOrValue(t.eIndex,t)<l.default.funcOrValue(e.eIndex,e)?1:-1});e.eHoldingFlag||"mousedown"!==t.type&&"touchstart"!==t.type?!e.eHoldingFlag||"mouseup"!==t.type&&"touchend"!==t.type?!e.eHoldingFlag||"mousemove"!==t.type&&"touchmove"!==t.type||(e.eHoldingFlag=t):e.eHoldingFlag=!1:e.eHoldingFlag=t;for(var a=0;n.length>a;a++){var i=n[a].events[t.type];if(("mousemove"===t.type||"touchmove"===t.type)&&e.eLastMouseHover&&e.eLastMouseHover!==n[a]&&n.indexOf(e.eLastMouseHover)===-1){var r=e.eLastMouseHover.events.mouseout;r&&r.call(e.eLastMouseHover,t)}if(i){e.eLastMouseHover=n[a];var o=i.call(n[a],t);if(o===!0)return e.eHoldingFlag=!1,o;if("drag"===o)return e.eHoldingFlag=!1,o}if(n[a].passEvent===!1)return}if(!n.length&&e.eLastMouseHover){var r=e.eLastMouseHover.events.mouseout;r&&r.call(e.eLastMouseHover,t),e.eLastMouseHover=null}var i=e.missingEvents[t.type];if(i&&i(t))return e.eHoldingFlag=!1,!0},start:function(){this.$rAFer(this.paint.bind(this))},write:function(t){this.paintContext.font=t.font,this.paintContext.strokeStyle=t.style,this.paintContext.fillStyle=t.style,this.paintContext.textAlign=t.align||"left",this.paintContext[t.type||"fillText"](t.content,parseInt(t.tx),parseInt(t.ty))},paint:function(){if(!this.pausing){this.paintContext.clearRect(0,0,this.contextWidth,this.contextHeight);var t=this;this.paintList.sort(function(t,e){return l.default.funcOrValue(t.zIndex,t)>l.default.funcOrValue(e.zIndex,e)?1:-1}).forEach(function(e,n){t.$perPaint(e,n)}),this.fps++}},$perPaint:function(t,e){if(t.perTickHandler&&t.perTickHandler.call(t),l.default.funcOrValue(t.visible,t)!==!1){var n=this,a=l.default.funcOrValue(t.belowAddon,t);a&&a.forEach(function(t,e){n.$perPaint.call(n,n.preAdd(t),e)});var i=l.default.funcOrValue(t.img),r=l.default.cent2value(l.default.funcOrValue(t.sx,t),i.width),o=l.default.cent2value(l.default.funcOrValue(t.sy,t),i.height),u=l.default.cent2value(l.default.funcOrValue(t.tx,t),n.contextWidth)+t.marginY,s=l.default.cent2value(l.default.funcOrValue(t.ty,t),n.contextHeight)+t.marginY,c=l.default.cent2value(l.default.funcOrValue(t.sw,t)||i.width,i.width),f=l.default.cent2value(l.default.funcOrValue(t.sh,t)||i.height,i.height),d=l.default.cent2value(l.default.funcOrValue(t.tw,t),n.contextWidth),h=l.default.cent2value(l.default.funcOrValue(t.th,t),n.contextHeight),p=l.default.funcOrValue(t.opacity,t),v=l.default.funcOrValue(t.rotate,t),x=l.default.funcOrValue(t.rx,t),g=l.default.funcOrValue(t.ry,t),y=l.default.funcOrValue(t.mirrX,t);if(0!==i.width){if(t.loop){var m=t.loop.px,w=t.loop.py,O=t.loop.index;if(0>O&&(O=0),t.loop.x&&(r=O%(0-t.loop.x)*m,o=parseInt(O/(0-t.loop.x))%(0-t.loop.y)*w),!t.loop.circle&&O>0&&0===r&&0===o)return void this.remove(t);this.nextTickTime-t.loop.lastTickTime<l.default.funcOrValue(t.loop.interval,t)||(t.loop.lastTickTime=this.nextTickTime,t.loop.index++),c=m||c,f=w||f,d=d||m,h=h||w}if(d=d||c||i.width,h=h||f||i.height,"center"===t.locate&&(u-=.5*d,s-=.5*h),v){this.paintContext.save();var b=void 0!==x?x:u+.5*d,V=void 0!==g?g:s+.5*h;this.paintContext.translate(b,V),this.paintContext.rotate(-v*Math.PI/180),this.paintContext.translate(-b,-V)}if(y&&(this.paintContext.save(),this.paintContext.translate(this.contextWidth,0),this.paintContext.scale(-1,1),u=this.contextWidth-u-d),1!==t.opacity&&(this.paintContext.globalAlpha=p),0>r&&c){var H=-r/c;u+=d*H,r=0}if(0>o&&f){var H=-o/f;s+=h*H,o=0}if(r+c>i.width){var H=(r+c-i.width)/c;c-=c*H,d-=d*H}if(o+f>i.height){var H=(o+f-i.height)/f;f-=f*H,h-=h*H}u=parseInt(u),s=parseInt(s),d=parseInt(d),h=parseInt(h),f=parseInt(f),c=parseInt(c),r=parseInt(r),o=parseInt(o),t.$cache={tx:u,ty:s,tw:d,th:h},c&&f&&this.canvasDom.width>u&&this.canvasDom.height>s&&this.paintContext.drawImage(i,r,o,c,f,u,s,d,h),1!==t.opacity&&(this.paintContext.globalAlpha=1);var T=l.default.funcOrValue(t.text,t);T&&T.forEach(function(e){var a=l.default.funcOrValue(e);a&&n.write({tx:u+l.default.funcOrValue(a.tx,t),ty:s+l.default.funcOrValue(a.ty,t),content:l.default.funcOrValue(a.content,t)||"",align:a.align,font:a.font||"14px Courier New",style:a.style||"white",type:a.type||"fillText"})}),t.tw=t.tw||d,t.th=t.th||h,v&&this.paintContext.restore(),y&&this.paintContext.restore();var C=l.default.funcOrValue(t.aboveAddon,t);C&&C.forEach(function(t,e){n.$perPaint.call(n,n.preAdd(t),e)})}}},$rAFer:function(t){var e=(new Date).getTime();this.nextTickTime=e,e-this.fpsCalculateTime>1e3&&(this.fpsCalculateTime=e,this.fpsHandler&&this.fpsHandler(this.fps),this.fps=0),(0,o.default)(function(){if(this.$rAFer(t),this.maxFps>0){if(1e3/this.maxFps>e-this.lastPaintTime)return;this.lastPaintTime=e}t()}.bind(this))}};for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(f.prototype[p]=h[p]);t.exports=f},function(t,e){"use strict";var n=[],a=function(t){return t/1e3*60};t.exports={linear:function(t,e,i){var r=n.length;return n.push(t),function(){var o=n[r];return o>=t&&e>o||o>e&&t>=o?(n[r]+=(e-t)/a(i),o):e}},pendulum:function(t,e,i){var r=n.length;return n.push(0),function(){var o=Math.sin(n[r])+1;return n[r]+=3.1416/a(i),t+(e-t)*o/2}}}},,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(6),r=a(i),o=n(2),u=a(o),l=n(5),s=a(l),c=n(3),f=a(c),d=n(7),h=a(d),p=n(4),v=a(p),x=n(1),g=a(x),y={painter:r.default,imgLoader:v.default,posCompare:g.default,transition:h.default,tick:u.default,utils:f.default,mirror:s.default};window.EasyCanvas=y,t.exports=y}])});