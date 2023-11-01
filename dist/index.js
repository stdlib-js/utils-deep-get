"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(W,p){
var b=require('@stdlib/assert-is-string/dist').isPrimitive,x=require('@stdlib/assert-is-plain-object/dist'),k=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function P(e,r){return x(r)?k(r,"sep")&&(e.sep=r.sep,!b(e.sep))?new TypeError(q('1SR2W',"sep",e.sep)):null:new TypeError(q('1SR2V',r));}p.exports=P
});var f=n(function(X,c){
function S(){return{sep:"."}}c.exports=S
});var o=n(function(Y,g){
var E=require('@stdlib/assert-is-object-like/dist'),T=require('@stdlib/assert-has-own-property/dist');function h(e,r){var a=r.length,i=e,t;for(t=0;t<a;t++)if(E(i)&&T(i,r[t]))i=i[r[t]];else return;return i}g.exports=h
});var d=n(function(Z,m){
var j=require('@stdlib/assert-is-object-like/dist'),G=require('@stdlib/assert-is-string/dist').isPrimitive,L=require('@stdlib/assert-is-array/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),A=v(),K=f(),R=o();function z(e,r,a){var i,t,s,u;if(j(e)){if(i=G(r),!i&&!L(r))throw new TypeError(V('1SR3A',r));if(s=K(),arguments.length>2&&(u=A(s,a),u))throw u;return i?t=r.split(s.sep):t=r,R(e,t)}}m.exports=z
});var w=n(function(_,y){
var B=require('@stdlib/assert-is-string/dist').isPrimitive,C=require('@stdlib/assert-is-array/dist'),D=require('@stdlib/assert-is-object-like/dist'),F=require('@stdlib/error-tools-fmtprodmsg/dist'),H=v(),I=f(),J=o();function M(e,r){var a,i,t,s;if(a=B(e),!a&&!C(e))throw new TypeError(F('1SR3A',e));if(t=I(),arguments.length>1&&(s=H(t,r),s))throw s;return a?i=e.split(t.sep):i=e,u;function u(l){if(D(l))return J(l,i)}}y.exports=M
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=d(),Q=w();N(O,"factory",Q);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
