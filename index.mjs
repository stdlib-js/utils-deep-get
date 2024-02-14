// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.1.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";function p(e,t){return i(t)?o(t,"sep")&&(e.sep=t.sep,!s(e.sep))?new TypeError(n("invalid option. `%s` option must be a string. Option: `%s`.","sep",e.sep)):null:new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",t))}function a(e,s){var r,n=s.length,i=e;for(r=0;r<n;r++){if(!t(i)||!o(i,s[r]))return;i=i[s[r]]}return i}function m(e,i,o){var m,d,l;if(t(e)){if(!(m=s(i))&&!r(i))throw new TypeError(n("invalid argument. Key path must be a string or a key array. Value: `%s`.",i));if(d={sep:"."},arguments.length>2&&(l=p(d,o)))throw l;return a(e,m?i.split(d.sep):i)}}function d(e,i){var o,m,d,l;if(!(o=s(e))&&!r(e))throw new TypeError(n("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(d={sep:"."},arguments.length>1&&(l=p(d,i)))throw l;return m=o?e.split(d.sep):e,u;function u(e){if(t(e))return a(e,m)}}e(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
