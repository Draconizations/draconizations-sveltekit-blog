import{S as J,i as K,s as Q,W as U,X as Z,e as E,t as q,k as I,w as V,c as O,a as $,h as B,d as _,m as C,x as W,b as v,g as w,H as b,y as X,Y as tt,o as S,p as Y,q as P,B as z,n as D,E as T,l as A,V as et}from"../../chunks/index-01d1497b.js";import{P as st,S as nt}from"../../chunks/Pagination-2b317c91.js";function F(c,t,a){const s=c.slice();return s[7]=t[a],s}function ot(c){let t,a,s;return{c(){t=E("section"),a=E("p"),s=q("No posts found."),this.h()},l(e){t=O(e,"SECTION",{class:!0});var i=$(t);a=O(i,"P",{});var n=$(a);s=B(n,"No posts found."),n.forEach(_),i.forEach(_),this.h()},h(){v(t,"class","block dropshadow")},m(e,i){w(e,t,i),b(t,a),b(a,s)},p:T,i:T,o:T,d(e){e&&_(t)}}}function at(c){let t,a,s=c[2],e=[];for(let n=0;n<s.length;n+=1)e[n]=M(F(c,s,n));const i=n=>S(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=A()},l(n){for(let r=0;r<e.length;r+=1)e[r].l(n);t=A()},m(n,r){for(let o=0;o<e.length;o+=1)e[o].m(n,r);w(n,t,r),a=!0},p(n,r){if(r&4){s=n[2];let o;for(o=0;o<s.length;o+=1){const g=F(n,s,o);e[o]?(e[o].p(g,r),P(e[o],1)):(e[o]=M(g),e[o].c(),P(e[o],1),e[o].m(t.parentNode,t))}for(D(),o=s.length;o<e.length;o+=1)i(o);Y()}},i(n){if(!a){for(let r=0;r<s.length;r+=1)P(e[r]);a=!0}},o(n){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)S(e[r]);a=!1},d(n){et(e,n),n&&_(t)}}}function M(c){let t,a;return t=new nt({props:{post:c[7]}}),{c(){V(t.$$.fragment)},l(s){W(t.$$.fragment,s)},m(s,e){X(t,s,e),a=!0},p(s,e){const i={};e&4&&(i.post=s[7]),t.$set(i)},i(s){a||(P(t.$$.fragment,s),a=!0)},o(s){S(t.$$.fragment,s),a=!1},d(s){z(t,s)}}}function rt(c){let t,a,s,e,i,n,r,o,g,h,m,u,p,N;function G(l){c[6](l)}let H={amountOfPages:c[3]};c[1]!==void 0&&(H.currentPage=c[1]),o=new st({props:H}),U.push(()=>Z(o,"currentPage",G));const L=[at,ot],d=[];function R(l,f){return l[0].length?0:1}return u=R(c),p=d[u]=L[u](c),{c(){t=E("section"),a=E("h2"),s=q("Recent posts"),e=I(),i=E("a"),n=q("search by tag"),r=I(),V(o.$$.fragment),h=I(),m=E("section"),p.c(),this.h()},l(l){t=O(l,"SECTION",{class:!0});var f=$(t);a=O(f,"H2",{});var k=$(a);s=B(k,"Recent posts"),k.forEach(_),e=C(f),i=O(f,"A",{href:!0});var y=$(i);n=B(y,"search by tag"),y.forEach(_),r=C(f),W(o.$$.fragment,f),f.forEach(_),h=C(l),m=O(l,"SECTION",{class:!0});var x=$(m);p.l(x),x.forEach(_),this.h()},h(){v(i,"href","/posts/tag"),v(t,"class","center"),v(m,"class","gapped")},m(l,f){w(l,t,f),b(t,a),b(a,s),b(t,e),b(t,i),b(i,n),b(t,r),X(o,t,null),w(l,h,f),w(l,m,f),d[u].m(m,null),N=!0},p(l,[f]){const k={};f&8&&(k.amountOfPages=l[3]),!g&&f&2&&(g=!0,k.currentPage=l[1],tt(()=>g=!1)),o.$set(k);let y=u;u=R(l),u===y?d[u].p(l,f):(D(),S(d[y],1,1,()=>{d[y]=null}),Y(),p=d[u],p?p.p(l,f):(p=d[u]=L[u](l),p.c()),P(p,1),p.m(m,null))},i(l){N||(P(o.$$.fragment,l),P(p),N=!0)},o(l){S(o.$$.fragment,l),S(p),N=!1},d(l){l&&_(t),z(o),l&&_(h),l&&_(m),d[u].d()}}}const ft=async({fetch:c})=>({props:{posts:await(await c("/api/posts.json")).json()}}),j=5;function lt(c,t,a){let s,e,i,n,{posts:r}=t,o=1;function g(h){o=h,a(1,o)}return c.$$set=h=>{"posts"in h&&a(0,r=h.posts)},c.$$.update=()=>{c.$$.dirty&2&&a(4,s=o*j),c.$$.dirty&16&&a(5,e=s-j),c.$$.dirty&1&&a(3,i=Math.ceil(r.length/j)),c.$$.dirty&49&&a(2,n=r.slice(e,s))},[r,o,n,i,s,e,g]}class ut extends J{constructor(t){super(),K(this,t,lt,rt,Q,{posts:0})}}export{ut as default,ft as load};
