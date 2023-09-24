"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var b=v(function(Pr,w){
var h=require('@stdlib/ndarray-ctor/dist'),q=require('@stdlib/ndarray-base-buffer/dist'),B=require('@stdlib/ndarray-base-shape2strides/dist'),G=require('@stdlib/ndarray-base-numel/dist'),H=require('@stdlib/array-base-copy-indexed/dist');function J(r,e,u,n){var t,i,d;return t=H(e.shape),t.length===0?(i=q(u,1),d=h(u,i,[],[0],0,n)):(i=q(u,e.length||G(t)),d=h(u,i,t,B(t,n),0,n)),r(e,d),d}w.exports=J
});var T=v(function(jr,E){
var Q=require('@stdlib/error-tools-fmtprodmsg/dist');function W(r,e){switch(e){case"same":return r;case"floating-point":return r==="float64"||r==="float32"||r==="generic"||r==="complex128"||r==="complex64"?r:"float64";case"real floating-point":return r==="float64"||r==="float32"||r==="generic"?r:"float64";case"complex floating-point":return r==="complex128"||r==="complex64"?r:"complex128";default:throw new Error(Q('0gz4W',e))}}E.exports=W
});var O=v(function(_r,X){X.exports={output_dtype_policy:"floating-point"}});var _=v(function(kr,j){
var Z=require('@stdlib/assert-is-plain-object/dist'),$=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-function/dist'),rr=require('@stdlib/assert-is-null/dist'),er=require('@stdlib/utils-keys/dist'),P=require('@stdlib/error-tools-fmtprodmsg/dist');function ar(r,e){var u,n,t,i;if(!Z(e))return new TypeError(P('0gz4Z',e));for(u=er(r),i=0;i<u.length;i++)if(t=u[i],$(e,t)){if(n=e[t],!x(n)&&!rr(n))return new TypeError(P('0gz4a',t,n));r[t]=n}return null}j.exports=ar
});var k=v(function(Rr,ir){ir.exports=["same","floating-point","real floating-point","complex floating-point"]});var z=v(function(Vr,V){
var nr=require('@stdlib/assert-is-plain-object/dist'),tr=require('@stdlib/assert-has-own-property/dist'),ur=require('@stdlib/assert-contains/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),or=k();function lr(r,e){return nr(e)?tr(e,"output_dtype_policy")&&(r.policy=e.output_dtype_policy,!ur(or,r.policy))?new TypeError(R('0gz4Y',"output_dtype_policy",r.policy)):null:new TypeError(R('0gz2V',e));}V.exports=lr
});var L=v(function(zr,S){
var sr=require('@stdlib/assert-is-plain-object/dist'),C=require('@stdlib/assert-has-own-property/dist'),I=require('@stdlib/assert-contains/dist'),pr=require('@stdlib/ndarray-orders/dist'),vr=require('@stdlib/ndarray-dtypes/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),dr=pr(),fr=vr();function cr(r,e){return sr(e)?C(e,"dtype")&&(r.dtype=e.dtype,!I(fr,r.dtype))?new TypeError(c('0gz4X',"dtype",r.dtype)):C(e,"order")&&(r.order=e.order,!I(dr,r.order))?new TypeError(c('0gz4X',"order",r.order)):null:new TypeError(c('0gz2V',e));}S.exports=cr
});var Y=v(function(Cr,U){
var mr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/assert-is-number/dist').isPrimitive,M=require('@stdlib/assert-is-complex-like/dist'),m=require('@stdlib/assert-is-ndarray-like/dist'),g=require('@stdlib/assert-is-collection/dist'),y=require('@stdlib/ndarray-base-buffer-dtype/dist'),gr=require('@stdlib/ndarray-base-buffer/dist'),N=require('@stdlib/ndarray-base-broadcast-array/dist'),F=require('@stdlib/error-tools-fmtprodmsg/dist'),yr=b(),K=T(),hr=O(),qr=_(),wr=z(),br=L();function Er(r,e){var u,n,t,i;if(i={number:null,complex:null,array:null,ndarray:null},n=qr(i,r),n||(u={policy:hr.output_dtype_policy},arguments.length>1&&(n=wr(u,e),n)))throw n;return t=d,mr(t,"assign",A),t;function d(a){var o,s,l,p,f;if(D(a)){if(i.number)return i.number(a);throw new TypeError(format('0gz0O'))}if(M(a)){if(i.complex)return i.complex(a);throw new TypeError(format('0gz0P'))}if(l={},arguments.length>1&&(p=br(l,arguments[1]),p))throw p;if(m(a)){if(i.ndarray===null)throw new TypeError(format('0gz0Q'));return s=l.dtype||K(a.dtype,u.policy),yr(i.ndarray,a,s,l.order||a.order)}if(g(a)){if(i.array===null)throw new TypeError(format('0gz0R'));return o=y(a)||"generic",s=l.dtype||K(o,u.policy),f=gr(s,a.length),i.array(a.length,o,a,1,s,f,1),f}throw new TypeError(F('0gz4V',a))}function A(a,o){var s,l,p;if(m(a)){if(m(o)){if(s=a.shape,l=o.shape,s.length===l.length){for(p=0;p<s.length;p++)if(s[p]!==l[p]){a=N(a,l);break}}else a=N(a,l);return i.ndarray(a,o),o}throw new TypeError(format('0gz0S'))}if(g(a)){if(g(o)){if(o.length!==a.length)throw new RangeError(format('0gz0T'));return i.array(a.length,y(a)||"generic",a,1,y(o)||"generic",o,1),o}throw new TypeError(format('0gz0U'))}throw D(a)?new TypeError(format('0gz0V')):M(a)?new TypeError(format('0gz0W')):new TypeError(F('0gz4V',a))}}U.exports=Er
});var Tr=Y();module.exports=Tr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
