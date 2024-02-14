// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,s,f,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(u(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function F(r){var e,t;if(!P(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var $,C=Object.prototype,I=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var Z=$;function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function K(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=N()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=K(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)},H=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function J(r){return null!==r&&"object"==typeof r}function Q(r){return"string"==typeof r}W(J,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(J));var Y=String.prototype.valueOf,rr=N();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function tr(r){return Q(r)||er(r)}W(tr,"isPrimitive",Q),W(tr,"isObject",er);var nr=/./;function ir(r){return"boolean"==typeof r}var or=Boolean,ar=Boolean.prototype.toString,cr=N();function ur(r){return"object"==typeof r&&(r instanceof or||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function sr(r){return ir(r)||ur(r)}function fr(){return new Function("return this;")()}W(sr,"isPrimitive",ir),W(sr,"isObject",ur);var lr="object"==typeof self?self:null,pr="object"==typeof window?window:null,gr="object"==typeof globalThis?globalThis:null,dr=function(r){if(arguments.length){if(!ir(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fr()}if(gr)return gr;if(lr)return lr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),yr=dr.document&&dr.document.childNodes,br=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;function wr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return J(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(hr,"REGEXP",vr);var mr="function"==typeof nr||"object"==typeof br||"function"==typeof yr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?wr(r).toLowerCase():e};function jr(r){return"function"===mr(r)}var _r,Er=Object,Or=Object.getPrototypeOf;_r=jr(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=_r,kr=Object.prototype;function xr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!H(r)}(r)&&(e=function(r){return null==r?null:(r=Er(r),Sr(r))}(r),!e||!K(r,"constructor")&&K(e,"constructor")&&jr(e.constructor)&&"[object Function]"===D(e.constructor)&&K(e,"isPrototypeOf")&&jr(e.isPrototypeOf)&&(e===kr||function(r){var e;for(e in r)if(!K(r,e))return!1;return!0}(r)))}function Tr(r,e){return xr(e)?K(e,"sep")&&(r.sep=e.sep,!Q(r.sep))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","sep",r.sep)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Vr(r,e){var t,n=e.length,i=r;for(t=0;t<n;t++){if(!J(i)||!K(i,e[t]))return;i=i[e[t]]}return i}function Ar(r,e,t){var n,i,o;if(J(r)){if(!(n=Q(e))&&!H(e))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(i={sep:"."},arguments.length>2&&(o=Tr(i,t)))throw o;return Vr(r,n?e.split(i.sep):e)}}return W(Ar,"factory",(function(r,e){var t,n,i,o;if(!(t=Q(r))&&!H(r))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(i={sep:"."},arguments.length>1&&(o=Tr(i,e)))throw o;return n=t?r.split(i.sep):r,a;function a(r){if(J(r))return Vr(r,n)}})),Ar},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).deepGet=e();
//# sourceMappingURL=browser.js.map
