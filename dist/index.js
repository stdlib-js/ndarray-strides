"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=l(function(g,v){
var p=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/ndarray-base-assert-is-order/dist'),h=require('@stdlib/ndarray-base-shape2strides/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r){var e,i,a,t,n,s;if(typeof r!="object"||r===null)throw new TypeError(u('1kDDv',r));if(t=r.strides,!o(t)){if(a=r.shape,!o(a))throw new TypeError(u('1kDDv',r));return a.length===0?[0]:(i=r.order,f(i)||(i="row-major"),h(a,i))}for(e=[],s=0;s<t.length;s++){if(n=t[s],!p(n))throw new TypeError(u('1kDDv',r));e.push(n)}return e}v.exports=m
});var w=d();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
