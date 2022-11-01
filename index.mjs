// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function d(s,e){return o(e)?p(e,"sep")&&(s.sep=e.sep,!r(s.sep))?new TypeError(i("0j42i","sep",s.sep)):null:new TypeError(i("0j42h",e))}var m={sep:"."};function l(s,r){var t,i=r.length,n=s;for(t=0;t<i;t++){if(!e(n)||!p(n,r[t]))return;n=n[r[t]]}return n}function j(s,o,p){var j,f,h;if(e(s)){if(!(j=r(o))&&!t(o))throw new TypeError(i("0j43M",o));if(f=n(m),arguments.length>2&&(h=d(f,p)))throw h;return l(s,j?o.split(f.sep):o)}}function f(s,o){var p,j,f,h;if(!(p=r(s))&&!t(s))throw new TypeError(i("0j43M",s));if(f=n(m),arguments.length>1&&(h=d(f,o)))throw h;return j=p?s.split(f.sep):s,a;function a(s){if(e(s))return l(s,j)}}s(j,"factory",f);export{j as default,f as factory};
//# sourceMappingURL=index.mjs.map