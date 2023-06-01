// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).deepGet=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&b.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(t){var r,e,n;if(null==t)return y.call(t);e=t[d],r=v(t,d);try{t[d]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[d]=e:delete t[d],n}:function(t){return y.call(t)};var g=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function w(t){return null!==t&&"object"==typeof t}function _(t){return"string"==typeof t}a(w,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!g(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(w));var h=String.prototype.valueOf;var m=s();function O(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function S(t){return _(t)||O(t)}function E(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}a(S,"isPrimitive",_),a(S,"isObject",O);var P=/./;function T(t){return"boolean"==typeof t}var A=Boolean.prototype.toString;var B=s();function x(t){return"object"==typeof t&&(t instanceof Boolean||(B?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function C(t){return T(t)||x(t)}function F(){return new Function("return this;")()}a(C,"isPrimitive",T),a(C,"isObject",x);var G="object"==typeof self?self:null,M="object"==typeof window?window:null,V="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof V?V:null;var L=function(t){if(arguments.length){if(!T(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return F()}if(G)return G;if(M)return M;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),I=L.document&&L.document.childNodes,R=Int8Array;function U(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;function X(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=N.exec(n.toString()))return r[1]}return w(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(U,"REGEXP",N);var q="function"==typeof P||"object"==typeof R||"function"==typeof I?function(t){return X(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?X(t).toLowerCase():r};function z(t){return"function"===q(t)}var D,H=Object.getPrototypeOf;D=z(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=D;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!g(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&z(r.constructor)&&"[object Function]"===j(r.constructor)&&v(r,"isPrototypeOf")&&z(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?v(r,"sep")&&(t.sep=r.sep,!_(t.sep))?new TypeError(E("0j42i","sep",t.sep)):null:new TypeError(E("0j42h",r))}function Y(t,r){var e,n=r.length,o=t;for(e=0;e<n;e++){if(!w(o)||!v(o,r[e]))return;o=o[r[e]]}return o}function Z(t,r,e){var n,o,u;if(w(t)){if(!(n=_(r))&&!g(r))throw new TypeError(E("0j43M",r));if(o={sep:"."},arguments.length>2&&(u=W(o,e)))throw u;return Y(t,n?r.split(o.sep):r)}}return a(Z,"factory",(function(t,r){var e,n,o,u;if(!(e=_(t))&&!g(t))throw new TypeError(E("0j43M",t));if(o={sep:"."},arguments.length>1&&(u=W(o,r)))throw u;return n=e?t.split(o.sep):t,i;function i(t){if(w(t))return Y(t,n)}})),Z}));
//# sourceMappingURL=browser.js.map
