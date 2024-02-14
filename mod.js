// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=i?r+t(a):t(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function y(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),r.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===u.call(r.specifier)?u.call(t):l.call(t)}function E(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function k(r,e,i){var t=e-r.length;return t<0?r:r=i?r+E(t):E(t)+r}var x=String.fromCharCode,S=isNaN,_=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,i,t,a,o,p,l,u,f;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,u=0;u<r.length;u++)if(s(t=r[u]))p+=t;else{if(e=void 0!==t.precision,!(t=j(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,i,t,n;for(i=[],n=0,t=V.exec(r);t;)(e=r.slice(n,V.lastIndex-t[0].length)).length&&i.push(e),i.push(T(t)),n=V.lastIndex,t=V.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function F(r){return"string"==typeof r}function A(r){var e,i;if(!F(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return I.apply(null,e)}var C=Object.prototype,O=C.toString,N=C.__defineGetter__,R=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=C,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(r,e,i.get),o&&R&&R.call(r,e,i.set),r};function G(r,e,i){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var B=U()?function(r){var e,i,t,n,a;if(null==r)return X.call(r);i=r[q],a=q,e=null!=(n=r)&&z.call(n,a);try{r[q]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[q]=i:delete r[q],t}:function(r){return X.call(r)},D=Number,H=D.prototype.toString;var J=U();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function Q(r){return L(r)||K(r)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=D.NEGATIVE_INFINITY,ir=Math.floor;function tr(r){return ir(r)===r}function nr(r){return r<rr&&r>er&&tr(r)}function ar(r){return L(r)&&nr(r)}function or(r){return K(r)&&nr(r.valueOf())}function cr(r){return ar(r)||or(r)}G(cr,"isPrimitive",ar),G(cr,"isObject",or);function sr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=9007199254740991}var pr=["row-major","column-major"];function lr(){return pr.slice()}G(lr,"enum",(function(){return{"row-major":1,"column-major":2}}));var ur=lr(),fr=ur.length;function gr(r,e){return"column-major"===e?function(r){var e,i,t;for(e=[],i=1,t=0;t<r.length;t++)e.push(i),i*=r[t];return e}(r):function(r){var e,i,t,n;for(e=r.length,i=[],n=0;n<e;n++)i.push(0);for(t=1,n=e-1;n>=0;n--)i[n]=t,t*=r[n];return i}(r)}function dr(r){return"number"==typeof r}function hr(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function wr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+hr(n):hr(n)+r,t&&(r="-"+r)),r}G(gr,"assign",(function(r,e,i){return"column-major"===e?function(r,e){var i,t;for(i=1,t=0;t<r.length;t++)e[t]=i,i*=r[t];return e}(r,i):function(r,e){var i,t;for(i=1,t=r.length-1;t>=0;t--)e[t]=i,i*=r[t];return e}(r,i)}));var vr=String.prototype.toLowerCase,br=String.prototype.toUpperCase;function mr(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!dr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=wr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=wr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===br.call(r.specifier)?br.call(i):vr.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function yr(r){return"string"==typeof r}var Er=Math.abs,kr=String.prototype.toLowerCase,xr=String.prototype.toUpperCase,Sr=String.prototype.replace,_r=/e\+(\d)$/,jr=/e-(\d)$/,Ir=/^(\d+)$/,Vr=/^(\d+)e/,Tr=/\.0$/,$r=/\.0*e/,Fr=/(\..*[^0])0*e/;function Ar(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!dr(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":Er(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=Sr.call(i,Fr,"$1e"),i=Sr.call(i,$r,"e"),i=Sr.call(i,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=Sr.call(i,_r,"e+0$1"),i=Sr.call(i,jr,"e-0$1"),r.alternate&&(i=Sr.call(i,Ir,"$1."),i=Sr.call(i,Vr,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===xr.call(r.specifier)?xr.call(i):kr.call(i)}function Cr(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function Or(r,e,i){var t=e-r.length;return t<0?r:r=i?r+Cr(t):Cr(t)+r}var Nr=String.fromCharCode,Rr=isNaN,Pr=Array.isArray;function Zr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Wr(r){var e,i,t,n,a,o,c,s,p;if(!Pr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(yr(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=Zr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Rr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Rr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=mr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Rr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Rr(a)?String(t.arg):Nr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ar(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=wr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Or(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Mr(r){var e,i,t,n;for(i=[],n=0,t=Gr.exec(r);t;)(e=r.slice(n,Gr.lastIndex-t[0].length)).length&&i.push(e),i.push(Lr(t)),n=Gr.lastIndex,t=Gr.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function Ur(r){return"string"==typeof r}function Xr(r){var e,i,t;if(!Ur(r))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Mr(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return Wr.apply(null,i)}function zr(r){var e,i,t,n,a,o;if("object"!=typeof r||null===r)throw new TypeError(Xr("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(!sr(n=r.strides)){if(!sr(t=r.shape))throw new TypeError(Xr("invalid argument. Must provide an ndarray. Value: `%s`.",r));return 0===t.length?[0]:(function(r){var e;for(e=0;e<fr;e++)if(r===ur[e])return!0;return!1}(i=r.order)||(i="row-major"),gr(t,i))}for(e=[],o=0;o<n.length;o++){if(!ar(a=n[o]))throw new TypeError(Xr("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(a)}return e}export{zr as default};
//# sourceMappingURL=mod.js.map
