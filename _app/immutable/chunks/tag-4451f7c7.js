import{S as v,i as E,s as x,e as _,t as d,c as g,a as u,h as m,d as h,b as f,g as S,H as c,j as T,E as p}from"./index-bd916d18.js";function $(r){let a,t,i,s,l;return{c(){a=_("li"),t=_("a"),i=d("#"),s=d(r[0]),this.h()},l(e){a=g(e,"LI",{});var n=u(a);t=g(n,"A",{class:!0,href:!0});var o=u(t);i=m(o,"#"),s=m(o,r[0]),o.forEach(h),n.forEach(h),this.h()},h(){f(t,"class","tag-text"),f(t,"href",l=`/posts/tag/${r[0]}`)},m(e,n){S(e,a,n),c(a,t),c(t,i),c(t,s)},p(e,[n]){n&1&&T(s,e[0]),n&1&&l!==(l=`/posts/tag/${e[0]}`)&&f(t,"href",l)},i:p,o:p,d(e){e&&h(a)}}}function b(r,a,t){let{tag:i}=a;return r.$$set=s=>{"tag"in s&&t(0,i=s.tag)},[i]}class q extends v{constructor(a){super(),E(this,a,b,$,x,{tag:0})}}export{q as T};
