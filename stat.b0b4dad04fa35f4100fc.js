!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=109)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(42))},function(t,n,r){var e=r(0),o=r(10),i=r(28),c=r(53),u=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(5),o=r(9),i=r(22);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(5),o=r(26),i=r(6),c=r(23),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(32),o=r(44);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(48),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(21),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";function e(t,n){var r=new Date(t);return new Date(r.setDate(r.getDate()-n))}function o(t){return t.toISOString().substring(0,10)}function i(t){var n=new Date(t);return"".concat(n.toLocaleString("ru",{month:"long",day:"numeric"}),", ").concat(n.getFullYear())}function c(t){var n=new Date(t);return"".concat(n.getDate(),", ").concat(function(t){switch(t){case 1:return"пн";case 2:return"вт";case 3:return"ср";case 4:return"чт";case 5:return"пт";case 6:return"сб";case 0:return"вс"}}(n.getDay()))}r.d(n,"a",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return c}))},function(t,n,r){var e=r(25),o=r(17);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(10),i=r(8),c=r(4),u=r(18),a=r(27),f=r(33),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(0),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(20).f,i=r(8),c=r(15),u=r(18),a=r(34),f=r(30);t.exports=function(t,n){var r,s,l,p,v,g=t.target,h=t.global,d=t.stat;if(r=h?e:d?e[g]||u(g,{}):(e[g]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(h?s:g+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(5),o=r(43),i=r(22),c=r(14),u=r(23),a=r(4),f=r(26),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(16);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(2),o=r(7),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(5),o=r(2),i=r(31);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(10);t.exports=e("native-function-to-string",Function.toString)},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports={}},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(0),o=r(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,r){var e,o,i,c=r(45),u=r(0),a=r(3),f=r(8),s=r(4),l=r(46),p=r(29),v=u.WeakMap;if(c){var g=new v,h=g.get,d=g.has,y=g.set;e=function(t,n){return y.call(g,t,n),n},o=function(t){return h.call(g,t)||{}},i=function(t){return d.call(g,t)}}else{var x=l("state");p[x]=!0,e=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(4),o=r(47),i=r(20),c=r(9);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(21),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){var e=r(17);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(49),o=r(51).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(7);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(3),o=r(38),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(0),o=r(60),i=r(61),c=r(8);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(18),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=r(27),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(10),o=r(28),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(11),o=r(37),i=r(52),c=r(6);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(4),o=r(14),i=r(50).indexOf,c=r(29);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(14),o=r(12),i=r(35),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},,function(t,n,r){"use strict";var e=r(11),o=r(9),i=r(1),c=r(5),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},,,,,function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(62).forEach,o=r(41);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){var e=r(24),o=r(25),i=r(36),c=r(12),u=r(39),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,g,h,d){for(var y,x,m=i(v),b=o(m),S=e(g,h,3),w=c(b.length),O=0,E=d||u,_=n?E(v,w):r?E(v,0):void 0;w>O;O++)if((p||O in b)&&(x=S(y=b[O],O,m),t))if(n)_[O]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:a.call(_,y)}else if(s)return!1;return l?-1:f||s?s:_}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));class e{save(t,n){var r=JSON.stringify(t);localStorage.setItem(n,r)}getData(t){return JSON.parse(localStorage.getItem(t))}}},,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";var e=r(19),o=r(5),i=r(0),c=r(4),u=r(3),a=r(9).f,f=r(34),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var g=v.toString,h="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=g.call(t);if(c(l,t))return"";var r=h?n.slice(7,-1):n.replace(d,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){"use strict";var e=r(6);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},,,function(t,n,r){var e=r(3),o=r(7),i=r(1)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){"use strict";var e,o,i=r(83),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,f=(e=/a/,o=/b*/g,c.call(e,"a"),c.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,r,e,o,a=this;return s&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),e=c.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),s&&e&&e.length>1&&u.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},,,,,function(t,n,r){},function(t,n,r){"use strict";var e=r(19),o=r(16),i=r(36),c=r(2),u=r(41),a=[],f=a.sort,s=c((function(){a.sort(void 0)})),l=c((function(){a.sort(null)})),p=u("sort");e({target:"Array",proto:!0,forced:s||!l||p},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},function(t,n,r){var e=r(5),o=r(0),i=r(30),c=r(95),u=r(9).f,a=r(37).f,f=r(86),s=r(83),l=r(15),p=r(2),v=r(55),g=r(1)("match"),h=o.RegExp,d=h.prototype,y=/a/g,x=/a/g,m=new h(y)!==y;if(e&&i("RegExp",!m||p((function(){return x[g]=!1,h(y)!=y||h(x)==x||"/a/i"!=h(y,"i")})))){for(var b=function(t,n){var r=this instanceof b,e=f(t),o=void 0===n;return!r&&e&&t.constructor===b&&o?t:c(m?new h(e&&!o?t.source:t,n):h((e=t instanceof b)?t.source:t,e&&o?s.call(t):n),r?this:d,b)},S=function(t){t in b||u(b,t,{configurable:!0,get:function(){return h[t]},set:function(n){h[t]=n}})},w=a(h),O=0;w.length>O;)S(w[O++]);d.constructor=b,b.prototype=d,l(o,"RegExp",b)}v("RegExp")},function(t,n,r){var e=r(3),o=r(96);t.exports=function(t,n,r){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},function(t,n,r){var e=r(6),o=r(97);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(15),o=r(6),i=r(2),c=r(83),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r)}),{unsafe:!0})},function(t,n,r){"use strict";var e=r(19),o=r(100),i=r(17);e({target:"String",proto:!0,forced:!r(101)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(86);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,r){var e=r(1)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,r){"use strict";var e=r(103),o=r(6),i=r(12),c=r(17),u=r(104),a=r(106);e("match",1,(function(t,n,r){return[function(n){var r=c(this),e=null==n?void 0:n[t];return void 0!==e?e.call(n,r):new RegExp(n)[t](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(c,f));){var g=String(l[0]);p[v]=g,""===g&&(c.lastIndex=u(f,i(c.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n,r){"use strict";var e=r(8),o=r(15),i=r(2),c=r(1),u=r(87),a=c("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var p=c(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),g=v&&!i((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[a]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return n=!0,null},r[p](""),!n}));if(!v||!g||"replace"===t&&!f||"split"===t&&!s){var h=/./[p],d=r(p,""[t],(function(t,n,r,e,o){return n.exec===u?v&&!o?{done:!0,value:h.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),y=d[0],x=d[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)}),l&&e(RegExp.prototype[p],"sham",!0)}}},function(t,n,r){"use strict";var e=r(105).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(21),o=r(17),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){var e=r(7),o=r(87);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},,,function(t,n,r){"use strict";r.r(n);r(92);var e=r(63),o=(r(82),r(93),r(94),r(98),r(99),r(102),r(40),r(13));var i=new e.a,c=i.getData("key"),u=i.getData("word").toLowerCase(),a=new class{constructor(t,n){this._searchedResult=t,this._searchedText=n}getAmountByDays(){var t=new RegExp("\\b"+this._searchedText+"|(\\s|\\/|\\\\|\"|'|«|,|:)"+this._searchedText+"|^"+this._searchedText,"g"),n=new Date,r=this._getDates(n,6).sort().map(t=>({date:t,titleAmount:0,descrAmount:0}));return this._searchedResult.articles.map(t=>({date:t.publishedAt,title:null!=t.title?t.title.toLowerCase():t.title,description:null!=t.description?t.description.toLowerCase():t.description})).filter(t=>null!=t.title&&null!=t.description).filter(t=>t.title.includes(this._searchedText)||t.description.includes(this._searchedText)).forEach(n=>{r.forEach((e,o)=>{n.date.substring(0,10)==e.date&&(null!=n.title&&(r[o].titleAmount+=(n.title.match(t)||[]).length),null!=n.description&&(r[o].descrAmount+=(n.description.match(t)||[]).length))})}),r}_getDates(t,n){var r=[];r.push(t.toISOString().substring(0,10));for(var e=1;e<=n;e++){var i=Object(o.a)(t,e).toISOString().substring(0,10);r.push(i)}return r}getTotalTitleAmount(t){return t.reduce((t,n)=>t+n.titleAmount,0)}getBars(t,n){var r=0;n.forEach((n,e)=>{null!=t[e]&&(r=t[e].titleAmount+t[e].descrAmount),n.style.width=r+"%",n.textContent=r})}getDays(t,n){n.forEach((n,r)=>{null!=t[r]&&(n.textContent=Object(o.b)(t[r].date))})}}(c,u),f=document.querySelector(".stat-text__title"),s=document.getElementById("week-amount"),l=document.getElementById("title-amount"),p=Array.from(document.querySelectorAll(".chart__bar")),v=Array.from(document.querySelectorAll(".chart__date"));f.textContent="Вы искали: ".concat(u),s.textContent=c.totalResults;var g=a.getAmountByDays();l.textContent=a.getTotalTitleAmount(g),a.getBars(g,p),a.getDays(g,v)}]);