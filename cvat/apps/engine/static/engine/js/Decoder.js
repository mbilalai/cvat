!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=45)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(49))},function(t,n,e){var r=e(0),o=e(12),i=e(30),a=e(51),u=r.Symbol,c=o("wks");t.exports=function(t){return c[t]||(c[t]=a&&u[t]||(a?u:i)("Symbol."+t))}},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(7),o=e(9),i=e(19);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(7),o=e(28),i=e(2),a=e(29),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=a(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports={}},function(t,n,e){var r=e(47),o=e(27);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(13),o=e(50);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,e){var r=e(36),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(12),i=e(5),a=e(3),u=e(17),c=e(37),f=e(23),s=f.get,l=f.enforce,p=String(c).split("toString");o("inspectSource",(function(t){return c.call(t)})),(t.exports=function(t,n,e,o){var c=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||a(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(c?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=e:i(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c.call(this)}))},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(6),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(12),o=e(30),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r,o,i,a=e(56),u=e(0),c=e(6),f=e(5),s=e(3),l=e(22),p=e(20),v=u.WeakMap;if(a){var d=new v,h=d.get,y=d.has,m=d.set;r=function(t,n){return m.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(7),o=e(58),i=e(19),a=e(11),u=e(29),c=e(3),f=e(28),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=a(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(9).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(14);t.exports=r("navigator","userAgent")||""},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(7),o=e(4),i=e(18);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(2),o=e(52),i=e(21),a=e(20),u=e(35),c=e(18),f=e(22)("IE_PROTO"),s=function(){},l=function(){var t,n=c("iframe"),e=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[f]=t):e=l(),void 0===n?e:o(e,n)},a[f]=!0},function(t,n,e){var r=e(3),o=e(11),i=e(54).indexOf,a=e(20);t.exports=function(t,n){var e,u=o(t),c=0,f=[];for(e in u)!r(a,e)&&r(u,e)&&f.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(34),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(14);t.exports=r("document","documentElement")},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(12);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(0),o=e(24).f,i=e(5),a=e(15),u=e(17),c=e(59),f=e(39);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,s,p,t)}}},function(t,n,e){var r=e(4),o=/#|\.prototype\./,i=function(t,n){var e=u[a(t)];return e==f||e!=c&&("function"==typeof n?r(n):!!n)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r,o,i,a=e(41),u=e(5),c=e(3),f=e(1),s=e(13),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||c(r,l)||u(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(3),o=e(64),i=e(22),a=e(65),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(16);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i,a=e(0),u=e(4),c=e(8),f=e(42),s=e(35),l=e(18),p=e(26),v=a.location,d=a.setImmediate,h=a.clearImmediate,y=a.process,m=a.MessageChannel,g=a.Dispatch,b=0,w={},x=function(t){if(w.hasOwnProperty(t)){var n=w[t];delete w[t],n()}},A=function(t){return function(){x(t)}},O=function(t){x(t.data)},j=function(t){a.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(b),b},h=function(t){delete w[t]},"process"==c(y)?r=function(t){y.nextTick(A(t))}:g&&g.now?r=function(t){g.now(A(t))}:m&&!/(iphone|ipod|ipad).*applewebkit/i.test(p)?(i=(o=new m).port2,o.port1.onmessage=O,r=f(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||u(j)?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),x(t)}}:function(t){setTimeout(A(t),0)}:(r=j,a.addEventListener("message",O,!1))),t.exports={set:d,clear:h}},function(t,n,e){"use strict";var r=e(16),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){var r,o,i;e(46),e(68),o=[],void 0===(i="function"==typeof(r=function(){var t;!function(){(t=this)||("undefined"!=typeof window?t=window:"undefined"!=typeof self&&(t=self))}();var n=function(n,e){var r,o=void 0!==o?o:{},i={};for(r in o)o.hasOwnProperty(r)&&(i[r]=o[r]);var a,u=[],c=!1,f=!0,s="";(c||f)&&(f?s=self.location.href:document.currentScript&&(s=document.currentScript.src),s=0!==s.indexOf("blob:")?s.substr(0,s.lastIndexOf("/")+1):"",f&&(a=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var l=o.print||console.log.bind(console),p=o.printErr||console.warn.bind(console);for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);i=null,o.arguments&&(u=o.arguments),o.thisProgram&&o.thisProgram,o.quit&&o.quit;var v,d,h={"f64-rem":function(t,n){return t%n},debugger:function(){}};new Array(0),o.wasmBinary&&(v=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&p("no native wasm support detected");var y,m,g,b,w=new WebAssembly.Table({initial:10,maximum:10,element:"anyfunc"}),x=!1,A="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function O(t,n,e){for(var r=n+e,o=n;t[o]&&!(o>=r);)++o;if(o-n>16&&t.subarray&&A)return A.decode(t.subarray(n,o));for(var i="";n<o;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var c=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&t[n++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var j,P=o.TOTAL_MEMORY||104857600;function S(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"==typeof e?void 0===n.arg?o.dynCall_v(e):o.dynCall_vi(e,n.arg):e(void 0===n.arg?null:n.arg)}else n()}}(d=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:P/65536,maximum:P/65536}))&&(y=d.buffer),P=y.byteLength,y=j=y,o.HEAP8=m=new Int8Array(j),o.HEAP16=new Int16Array(j),o.HEAP32=b=new Int32Array(j),o.HEAPU8=g=new Uint8Array(j),o.HEAPU16=new Uint16Array(j),o.HEAPU32=new Uint32Array(j),o.HEAPF32=new Float32Array(j),o.HEAPF64=new Float64Array(j),b[2748]=5254064;var _=[],E=[],M=[],I=[],T=0,R=null,D=null;function U(t){throw o.onAbort&&o.onAbort(t),l(t+=""),p(t),x=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(t)}o.preloadedImages={},o.preloadedAudios={};var k="data:application/octet-stream;base64,";function C(t){return String.prototype.startsWith?t.startsWith(k):0===t.indexOf(k)}var B,F="avc.wasm";function W(){try{if(v)return new Uint8Array(v);if(a)return a(F);throw"both async and sync fetching of the wasm failed"}catch(t){U(t)}}C(F)||(B=F,F=o.locateFile?o.locateFile(B,s):s+B),o.asm=function(){var t={env:V,wasi_unstable:V,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:h};function n(t,n){var e=t.exports;o.asm=e,function(t){if(T--,o.monitorRunDependencies&&o.monitorRunDependencies(T),0==T&&(null!==R&&(clearInterval(R),R=null),D)){var n=D;D=null,n()}}()}function e(t){n(t.instance)}function r(n){return(v||!c&&!f||"function"!=typeof fetch?new Promise((function(t,n){t(W())})):fetch(F,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+F+"'";return t.arrayBuffer()})).catch((function(){return W()}))).then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(t){p("failed to asynchronously prepare wasm: "+t),U(t)}))}if(T++,o.monitorRunDependencies&&o.monitorRunDependencies(T),o.instantiateWasm)try{return o.instantiateWasm(t,n)}catch(t){return p("Module.instantiateWasm callback failed with error: "+t),!1}return function(){if(v||"function"!=typeof WebAssembly.instantiateStreaming||C(F)||"function"!=typeof fetch)return r(e);fetch(F,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(e,(function(t){p("wasm streaming compile failed: "+t),p("falling back to ArrayBuffer instantiation"),r(e)}))}))}(),{}};var H={buffers:[null,[],[]],printChar:function(t,n){var e=H.buffers[t];0===n||10===n?((1===t?l:p)(O(e,0)),e.length=0):e.push(n)},varargs:0,get:function(t){return H.varargs+=4,b[H.varargs-4>>2]},getStr:function(){var t,n;return(t=H.get())?O(g,t,n):""},get64:function(){var t=H.get();return H.get(),t},getZero:function(){H.get()}};function N(t,n,e,r){try{for(var o=0,i=0;i<e;i++){for(var a=b[n+8*i>>2],u=b[n+(8*i+4)>>2],c=0;c<u;c++)H.printChar(t,g[a+c]);o+=u}return b[r>>2]=o,0}catch(t){return"undefined"!=typeof FS&&t instanceof FS.ErrnoError||U(t),t.errno}}function L(){n()}function z(t,n,r){e(t,n,r)}o._broadwayOnHeadersDecoded=L,o._broadwayOnPictureDecoded=z;var G,q,V={g:function(){return N.apply(null,arguments)},__memory_base:1024,__table_base:0,f:L,e:z,b:function(){return m.length},d:function(t,n,e){g.set(g.subarray(n,n+e),t)},a:function(t){U("OOM")},c:U,memory:d,table:w},Y=o.asm({},V,y);function K(t){function n(){G||(G=!0,x||(S(E),S(M),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),I.unshift(t);var t;S(I)}()))}t=t||u,T>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),_.unshift(t);var t;S(_)}(),T>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),n()}),1)):n()))}if(o.asm=Y,o._broadwayCreateStream=function(){return o.asm.h.apply(null,arguments)},o._broadwayExit=function(){return o.asm.i.apply(null,arguments)},o._broadwayGetMajorVersion=function(){return o.asm.j.apply(null,arguments)},o._broadwayGetMinorVersion=function(){return o.asm.k.apply(null,arguments)},o._broadwayInit=function(){return o.asm.l.apply(null,arguments)},o._broadwayPlayStream=function(){return o.asm.m.apply(null,arguments)},o.asm=Y,D=function t(){G||K(),G||(D=t)},o.run=K,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();K(),void 0!==t&&t.Module&&(q=t.Module),void 0!==o&&(q=o),q._broadwayOnHeadersDecoded=n,q._broadwayOnPictureDecoded=e;var X,Z=!1;return q.onRuntimeInitialized=function(){Z=!0,X&&X(q)},function(t){Z?t(q):X=t}};return function(){"use strict";var e=function(){return(new Date).getTime()};"undefined"!=typeof performance&&performance.now&&(e=function(){return performance.now()});var r=function(t){var r;this.options=t||{},this.now=e;var o,a,u=function(t,n,a){var u,c=this.pictureBuffers[t];c||(c=this.pictureBuffers[t]=o(t,n*a*3/2));var f=!1;if(this.infoAr.length&&(f=!0,u=this.infoAr),this.infoAr=[],this.options.rgb){r||(r=i(n,a)),r.inp.set(c),r.doit();var s=new Uint8Array(r.outSize);return s.set(r.out),f&&(u[0].finishDecoding=e()),void this.onPictureDecoded(s,n,a,u)}f&&(u[0].finishDecoding=e()),this.onPictureDecoded(c,n,a,u)}.bind(this);this.options.sliceMode&&(u=function(t,n,r,i){var u=this.pictureBuffers[t];u||(u=this.pictureBuffers[t]=o(t,n*r*3/2));var c,f=this.pictureBuffers[i];f||(f=this.pictureBuffers[i]=a(i,18)),this.infoAr.length&&(c=this.infoAr),this.infoAr=[],c[0].finishDecoding=e();for(var s=[],l=0;l<20;++l)s.push(f[l]);c[0].sliceInfoAr=s,this.onPictureDecoded(u,n,r,c)}.bind(this));var c=n.apply({},[function(){},u]),f=this;this.onPictureDecoded=function(t,n,e,r){},this.onDecoderReady=function(){};var s=[];this.decode=function(t,n,e){s.push([t,n,e])},c((function(t){t.HEAP8;var n=t.HEAPU8;t.HEAP16,t.HEAP32,t._broadwayInit(),o=function(t,e){return n.subarray(t,t+e)},a=function(t,e){return new Uint32Array(n.buffer,t,e)},f.streamBuffer=o(t._broadwayCreateStream(1048576),1048576),f.pictureBuffers={},f.infoAr=[];var r=0;if(f.options.sliceMode?(r=f.options.sliceNum,f.decode=function(n,o,i){f.infoAr.push(o),o.startDecoding=e();var a,u=o.nals;if(!u){u=[],o.nals=u;var c=n.length,s=!1,l=0,p=0;for(a=0;a<c;++a)if(1===n[a]&&0===n[a-1]&&0===n[a-2]){var v=a-2;0===n[a-3]&&(v=a-3),s&&u.push({offset:l,end:v,type:31&n[p]}),l=v,p=v+3,0===n[a-3]&&(p=v+4),s=!0}s&&u.push({offset:l,end:a,type:31&n[p]})}var d,h=0,y=0;for(a=0;a<u.length;++a)1===u[a].type||5===u[a].type?(h===r&&(d=n.subarray(u[a].offset,u[a].end),f.streamBuffer[y]=0,y+=1,f.streamBuffer.set(d,y),y+=d.length),h+=1):(d=n.subarray(u[a].offset,u[a].end),f.streamBuffer[y]=0,y+=1,f.streamBuffer.set(d,y),y+=d.length,t._broadwayPlayStream(y),y=0);i(),t._broadwayPlayStream(y)}):f.decode=function(n,r){r&&(f.infoAr.push(r),r.startDecoding=e()),f.streamBuffer.set(n),t._broadwayPlayStream(n.length)},s.length){var i=0;for(i=0;i<s.length;++i)f.decode(s[i][0],s[i][1],s[i][2]);s=[]}f.onDecoderReady(f)}))};r.prototype={};var o={},i=function(n,e){var r=n+"x"+e;if(o[r])return o[r];for(var i=n*e,a=(0|i)>>2,u=i+a+a,c=n*e*4,f=u+c+4*Math.pow(2,24),s=Math.pow(2,24),l=s;l<f;)l+=s;var p=new ArrayBuffer(l),v=function(t,n,e){"use asm";var r=t.Math.imul,o=t.Math.min,i=t.Math.max,a=t.Math.pow,u=new t.Uint8Array(e),c=new t.Uint32Array(e),f=new t.Uint8Array(e),s=new t.Uint8Array(e),l=new t.Uint32Array(e),p=0,v=0,d=0,h=0,y=0,m=0,g=0,b=0,w=0,x=0;function A(t,n){t=t|0;n=n|0;var e=0;var o=0;p=t;w=r(t,4)|0;v=n;d=r(p|0,v|0)|0;h=(d|0)>>2;m=r(r(p,v)|0,4)|0;y=(d+h|0)+h|0;b=0;g=b+m|0;x=g+y|0;o=~~+a(+2,+24);o=r(o,4)|0;for(e=0|0;(e|0)<(o|0)|0;e=e+4|0){l[(x+e|0)>>2]=0}}function O(){var t=0;var n=0;var e=0;var r=0;var o=0;var i=0;var a=0;var u=0;var c=0;var s=0;var y=0;var m=0;var A=0;var O=0;A=b|0;t=g|0;n=t+d|0|0;e=n+h|0;for(c=0;(c|0)<(v|0);c=c+2|0){y=n;m=e;for(s=0;(s|0)<(p|0);s=s+2|0){r=f[t>>0]|0;o=f[(t+p|0)>>0]|0;i=f[n>>0]|0;a=f[e>>0]|0;O=((r<<16|0)+(i<<8|0)|0)+a|0;u=l[(x>>2)+O|0]|0;if(u){}else{u=j(r,i,a)|0;l[(x>>2)+O|0]=u|0}l[A>>2]=u;O=((o<<16|0)+(i<<8|0)|0)+a|0;u=l[(x>>2)+O|0]|0;if(u){}else{u=j(o,i,a)|0;l[(x>>2)+O|0]=u|0}l[(A+w|0)>>2]=u;A=A+4|0;t=t+1|0;r=f[t>>0]|0;o=f[(t+p|0)>>0]|0;O=((r<<16|0)+(i<<8|0)|0)+a|0;u=l[(x>>2)+O|0]|0;if(u){}else{u=j(r,i,a)|0;l[(x>>2)+O|0]=u|0}l[A>>2]=u;O=((o<<16|0)+(i<<8|0)|0)+a|0;u=l[(x>>2)+O|0]|0;if(u){}else{u=j(o,i,a)|0;l[(x>>2)+O|0]=u|0}l[(A+w|0)>>2]=u;A=A+4|0;t=t+1|0;n=n+1|0;e=e+1|0}A=A+w|0;t=t+p|0}}function j(t,n,e){t=t|0;n=n|0;e=e|0;var a=0;var u=0;var c=0;var f=0;var s=0;var l=0;var p=0;var v=0;var d=0;s=r(1192,t-16|0)|0;l=r(1634,e-128|0)|0;p=r(832,e-128|0)|0;v=r(400,n-128|0)|0;d=r(2066,n-128|0)|0;a=(s+l|0)>>10|0;u=((s-p|0)-v|0)>>10|0;c=(s+d|0)>>10|0;if((a&255|0)!=(a|0)|0){a=o(255,i(0,a|0)|0)|0}if((u&255|0)!=(u|0)|0){u=o(255,i(0,u|0)|0)|0}if((c&255|0)!=(c|0)|0){c=o(255,i(0,c|0)|0)|0}f=255;f=f<<8|0;f=f+c|0;f=f<<8|0;f=f+u|0;f=f<<8|0;f=f+a|0;return f|0}return{init:A,doit:O}}(t,{},p);return v.init(n,e),o[r]=v,v.heap=p,v.out=new Uint8Array(p,0,c),v.inp=new Uint8Array(p,c,u),v.outSize=c,v};if("undefined"!=typeof self){var a,u,c,f,s,l,p=!1,v=!1,d=!1,h=0,y=0,m=0,g=0,b=[],w=[],x=function(t){if(w.length){for(var n=w.shift();n&&n.byteLength!==t;)n=w.shift();if(n)return n}return new ArrayBuffer(t)},A=function(t,n,e,r,o){var i=function(e,o){var i=0;for(i=0;i<16;++i){var a=e+r*i,u=o+r*i;n.set(t.subarray(a,u),a)}},a=function(e,o){var i=0;for(i=0;i<8;++i){var a=e+r/2*i,u=o+r/2*i;n.set(t.subarray(a,u),a)}},u=function(e,r){n.set(t.subarray(e,r),e)},c=e[0],f=e[1];f>0&&(i(c,f),a(e[2],e[3]),a(e[4],e[5])),c=e[6],(f=e[7])>0&&(i(c,f),a(e[8],e[9]),a(e[10],e[11])),c=e[12],(f=e[15])>0&&(u(c,f),u(e[13],e[16]),u(e[14],e[17]))},O=function(t){m=(y=t)-1};self.addEventListener("message",(function(t){if(p){if(v&&t.data.reuse&&w.push(t.data.reuse),t.data.buf)return void(d&&0!==g?b.push(t.data):a.decode(new Uint8Array(t.data.buf,t.data.offset||0,t.data.length),t.data.info,(function(){d&&h!==m&&postMessage(t.data,[t.data.buf])})));if(t.data.slice){var n=e();if(A(new Uint8Array(t.data.slice),c,t.data.infos[0].sliceInfoAr,t.data.width,t.data.height),t.data.theOne&&(A(c,new Uint8Array(t.data.slice),u,t.data.width,t.data.height),l>t.data.infos[0].timeDecoding&&(t.data.infos[0].timeDecoding=l),t.data.infos[0].timeCopy+=e()-n),postMessage(t.data,[t.data.slice]),0==(g-=1)&&b.length){var o=b.shift();a.decode(new Uint8Array(o.buf,o.offset||0,o.length),o.info,(function(){d&&h!==m&&postMessage(o,[o.buf])}))}return}if(t.data.setSliceCnt)return void O(t.data.sliceCnt)}else t.data&&"Broadway.js - Worker init"===t.data.type&&(p=!0,a=new r(t.data.options),t.data.options.sliceMode?(v=!0,d=!0,h=t.data.options.sliceNum,O(t.data.options.sliceCnt),a.onPictureDecoded=function(t,n,e,r){var o=new Uint8Array(x(t.length));A(t,o,r[0].sliceInfoAr,n),f=r[0].startDecoding,s=r[0].finishDecoding,l=s-f,r[0].timeDecoding=l,r[0].timeCopy=0,postMessage({slice:o.buffer,sliceNum:h,width:n,height:e,infos:r},[o.buffer]),g=y-1,c=t,u=r[0].sliceInfoAr}):t.data.options.reuseMemory?(v=!0,a.onPictureDecoded=function(t,n,e,r){var o=new Uint8Array(x(t.length));o.set(t,0,t.length),postMessage({buf:o.buffer,length:t.length,width:n,height:e,infos:r},[o.buffer])}):a.onPictureDecoded=function(t,n,e,r){t&&(t=new Uint8Array(t));var o=new Uint8Array(t.length);o.set(t,0,t.length),postMessage({buf:o.buffer,length:t.length,width:n,height:e,infos:r},[o.buffer])},postMessage({consoleLog:"broadway worker initialized"}))}),!1)}return r.nowValue=e,r}()})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){"use strict";var r=e(11),o=e(48),i=e(10),a=e(23),u=e(57),c=a.set,f=a.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,n){c(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var r=e(4),o=e(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(1),o=e(31),i=e(5),a=r("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,o(null)),t.exports=function(t){u[a][t]=!0}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(17),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(4);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(7),o=e(9),i=e(2),a=e(53);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=a(n),u=r.length,c=0;u>c;)o.f(t,e=r[c++],n[e]);return t}},function(t,n,e){var r=e(32),o=e(21);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(11),o=e(33),i=e(55),a=function(t){return function(n,e,a){var u,c=r(n),f=o(c.length),s=i(a,f);if(t&&e!=e){for(;f>s;)if((u=c[s++])!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,n,e){var r=e(34),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(0),o=e(37),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){"use strict";var r=e(38),o=e(63),i=e(41),a=e(66),u=e(25),c=e(5),f=e(15),s=e(1),l=e(13),p=e(10),v=e(40),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,y=s("iterator"),m=function(){return this};t.exports=function(t,n,e,s,v,g,b){o(e,n,s);var w,x,A,O=function(t){if(t===v&&E)return E;if(!h&&t in S)return S[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},j=n+" Iterator",P=!1,S=t.prototype,_=S[y]||S["@@iterator"]||v&&S[v],E=!h&&_||O(v),M="Array"==n&&S.entries||_;if(M&&(w=i(M.call(new t)),d!==Object.prototype&&w.next&&(l||i(w)===d||(a?a(w,d):"function"!=typeof w[y]&&c(w,y,m)),u(w,j,!0,!0),l&&(p[j]=m))),"values"==v&&_&&"values"!==_.name&&(P=!0,E=function(){return _.call(this)}),l&&!b||S[y]===E||c(S,y,E),p[n]=E,v)if(x={values:O("values"),keys:g?E:O("keys"),entries:O("entries")},b)for(A in x)!h&&!P&&A in S||f(S,A,x[A]);else r({target:n,proto:!0,forced:h||P},x);return x}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(3),o=e(60),i=e(24),a=e(9);t.exports=function(t,n){for(var e=o(n),u=a.f,c=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,c(n,s))}}},function(t,n,e){var r=e(14),o=e(61),i=e(62),a=e(2);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(a(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(32),o=e(21).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(40).IteratorPrototype,o=e(31),i=e(19),a=e(25),u=e(10),c=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),a(t,f,!1,!0),u[f]=c,t}},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(2),o=e(67);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r,o,i,a,u=e(38),c=e(13),f=e(0),s=e(36),l=e(69),p=e(15),v=e(70),d=e(25),h=e(71),y=e(6),m=e(16),g=e(72),b=e(8),w=e(73),x=e(78),A=e(79),O=e(43).set,j=e(80),P=e(81),S=e(82),_=e(44),E=e(83),M=e(26),I=e(23),T=e(39),R=e(1)("species"),D="Promise",U=I.get,k=I.set,C=I.getterFor(D),B=l,F=f.TypeError,W=f.document,H=f.process,N=f.fetch,L=H&&H.versions,z=L&&L.v8||"",G=_.f,q=G,V="process"==b(H),Y=!!(W&&W.createEvent&&f.dispatchEvent),K=T(D,(function(){var t=B.resolve(1),n=function(){},e=(t.constructor={})[R]=function(t){t(n,n)};return!((V||"function"==typeof PromiseRejectionEvent)&&(!c||t.finally)&&t.then(n)instanceof e&&0!==z.indexOf("6.6")&&-1===M.indexOf("Chrome/66"))})),X=K||!x((function(t){B.all(t).catch((function(){}))})),Z=function(t){var n;return!(!y(t)||"function"!=typeof(n=t.then))&&n},J=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;j((function(){for(var o=n.value,i=1==n.state,a=0;r.length>a;){var u,c,f,s=r[a++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,d=s.domain;try{l?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),f=!0)),u===s.promise?v(F("Promise-chain cycle")):(c=Z(u))?c.call(u,p,v):p(u)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&$(t,n)}))}},Q=function(t,n,e){var r,o;Y?((r=W.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&S("Unhandled promise rejection",e)},$=function(t,n){O.call(f,(function(){var e,r=n.value;if(tt(n)&&(e=E((function(){V?H.emit("unhandledRejection",r,t):Q("unhandledrejection",t,r)})),n.rejection=V||tt(n)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){O.call(f,(function(){V?H.emit("rejectionHandled",t):Q("rejectionhandled",t,n.value)}))},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,J(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw F("Promise can't be resolved itself");var o=Z(e);o?j((function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}})):(n.value=e,n.state=1,J(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};K&&(B=function(t){g(this,B,D),m(t),r.call(this);var n=U(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){k(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(B.prototype,{then:function(t,n){var e=C(this),r=G(A(this,B));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=V?H.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&J(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=U(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},_.f=G=function(t){return t===B||t===i?new o(t):q(t)},c||"function"!=typeof l||(a=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new B((function(t,n){a.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof N&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return P(B,N.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:K},{Promise:B}),d(B,D,!1,!0),h(D),i=s.Promise,u({target:D,stat:!0,forced:K},{reject:function(t){var n=G(this);return n.reject.call(void 0,t),n.promise}}),u({target:D,stat:!0,forced:c||K},{resolve:function(t){return P(c&&this===i?B:this,t)}}),u({target:D,stat:!0,forced:X},{all:function(t){var n=this,e=G(n),r=e.resolve,o=e.reject,i=E((function(){var e=m(n.resolve),i=[],a=0,u=1;w(t,(function(t){var c=a++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[c]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=G(n),r=e.reject,o=E((function(){var o=m(n.resolve);w(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(14),o=e(9),i=e(1),a=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;a&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(2),o=e(74),i=e(33),a=e(42),u=e(75),c=e(77),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,d,h,y,m,g,b=a(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((y=s?b(r(g=t[d])[0],g[1]):b(t[d]))&&y instanceof f)return y;return new f(!1)}p=v.call(t)}for(m=p.next;!(g=m.call(p)).done;)if("object"==typeof(y=c(p,b,g.value,s))&&y&&y instanceof f)return y;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(1),o=e(10),i=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,n,e){var r=e(76),o=e(10),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(8),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(2),o=e(16),i=e(1)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[i])?n:o(e)}},function(t,n,e){var r,o,i,a,u,c,f,s,l=e(0),p=e(24).f,v=e(8),d=e(43).set,h=e(26),y=l.MutationObserver||l.WebKitMutationObserver,m=l.process,g=l.Promise,b="process"==v(m),w=p(l,"queueMicrotask"),x=w&&w.value;x||(r=function(){var t,n;for(b&&(t=m.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},b?a=function(){m.nextTick(r)}:y&&!/(iphone|ipod|ipad).*applewebkit/i.test(h)?(u=!0,c=document.createTextNode(""),new y(r).observe(c,{characterData:!0}),a=function(){c.data=u=!u}):g&&g.resolve?(f=g.resolve(void 0),s=f.then,a=function(){s.call(f,r)}):a=function(){d.call(l,r)}),t.exports=x||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,a()),i=n}},function(t,n,e){var r=e(2),o=e(6),i=e(44);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}}]);