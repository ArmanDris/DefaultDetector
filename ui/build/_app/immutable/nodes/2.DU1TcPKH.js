import{s as Ee,o as ke,r as Me,n as Oe}from"../chunks/scheduler.mhZtr3qf.js";import{S as Ae,i as Ce,e as v,t as R,s as D,v as K,c as w,a as S,b as k,d as p,f as y,w as Q,k as oe,l as E,g as L,h as n,x as X,j as W,p as M,n as V,y as Z,B as qe,H as Be,C as Le,D as $e,r as Ve,o as je}from"../chunks/index.By0cP33f.js";import{F as ae,a as we,b as ze,c as He,l as De,d as Ue}from"../chunks/index.CXMAs4hD.js";function ye(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Fe(s,e,t){const i=s.slice();return i[12]=e[t],i[14]=t,i}function Ie(s){let e,t,i=s[12]+"",l,r,o,h=he(s[1][s[14]])+"",_,c,N,m,d=he(s[2][s[14]])+"",$,P,T;return{c(){e=v("tr"),t=v("td"),l=R(i),r=D(),o=v("td"),_=R(h),N=D(),m=v("td"),$=R(d),T=D(),this.h()},l(f){e=w(f,"TR",{});var u=S(e);t=w(u,"TD",{});var O=S(t);l=k(O,i),O.forEach(p),r=y(u),o=w(u,"TD",{class:!0});var g=S(o);_=k(g,h),g.forEach(p),N=y(u),m=w(u,"TD",{class:!0});var C=S(m);$=k(C,d),C.forEach(p),T=y(u),u.forEach(p),this.h()},h(){E(o,"class",c=s[1][s[14]]===s[2][s[14]]?"bg-[#d1ecff]":"bg-[#ffd1bd]"),E(m,"class",P=s[1][s[14]]===s[2][s[14]]?"bg-[#d1ecff]":"bg-[#ffd1bd]")},m(f,u){L(f,e,u),n(e,t),n(t,l),n(e,r),n(e,o),n(o,_),n(e,N),n(e,m),n(m,$),n(e,T)},p(f,u){u&1&&i!==(i=f[12]+"")&&W(l,i),u&2&&h!==(h=he(f[1][f[14]])+"")&&W(_,h),u&6&&c!==(c=f[1][f[14]]===f[2][f[14]]?"bg-[#d1ecff]":"bg-[#ffd1bd]")&&E(o,"class",c),u&4&&d!==(d=he(f[2][f[14]])+"")&&W($,d),u&6&&P!==(P=f[1][f[14]]===f[2][f[14]]?"bg-[#d1ecff]":"bg-[#ffd1bd]")&&E(m,"class",P)},d(f){f&&p(e)}}}function Ge(s){let e,t,i,l,r,o,h,_,c,N,m,d,$,P,T="F1 Score is a scoring metric that compensates for class imbalance.",f,u,O,g,C,b,H,Y,z,Pe="Recall is only concerned with how the model predicted people who defaulted.",me,q,pe,re,ge,j,x,_e,J,Te="Precision is only concerned with how the model predicted people who did not default.",ie,B,ee,Ne="<tr><th>ID</th> <th>MODEL PREDICTION</th> <th>CORRECT ANSWER</th></tr>",be,te,U;d=new ae({props:{icon:we,class:"icon-info",style:"color: rgba(0, 0, 0, 0.5);"}}),H=new ae({props:{icon:we,class:"icon-info",style:"color: rgba(0, 0, 0, 0.5);"}}),x=new ae({props:{icon:we,class:"icon-info",style:"color: rgba(0, 0, 0, 0.5);"}});let se=ye(s[0]),F=[];for(let a=0;a<se.length;a+=1)F[a]=Ie(Fe(s,se,a));return{c(){e=v("h2"),t=R("Model got an accuracy of "),i=R(s[3]),l=R("%"),r=D(),o=v("div"),h=v("span"),_=R("F1 score: "),c=R(s[6]),N=D(),m=v("span"),K(d.$$.fragment),$=D(),P=v("span"),P.textContent=T,f=D(),u=v("span"),O=R("Recall: "),g=R(s[4]),C=D(),b=v("span"),K(H.$$.fragment),Y=D(),z=v("span"),z.textContent=Pe,me=D(),q=v("span"),pe=R("Precision: "),re=R(s[5]),ge=D(),j=v("span"),K(x.$$.fragment),_e=D(),J=v("span"),J.textContent=Te,ie=D(),B=v("table"),ee=v("thead"),ee.innerHTML=Ne,be=D(),te=v("tbody");for(let a=0;a<F.length;a+=1)F[a].c();this.h()},l(a){e=w(a,"H2",{class:!0});var I=S(e);t=k(I,"Model got an accuracy of "),i=k(I,s[3]),l=k(I,"%"),I.forEach(p),r=y(a),o=w(a,"DIV",{class:!0});var A=S(o);h=w(A,"SPAN",{class:!0});var G=S(h);_=k(G,"F1 score: "),c=k(G,s[6]),N=y(G),m=w(G,"SPAN",{class:!0});var ce=S(m);Q(d.$$.fragment,ce),$=y(ce),P=w(ce,"SPAN",{class:!0,"data-svelte-h":!0}),oe(P)!=="svelte-91iaii"&&(P.textContent=T),ce.forEach(p),G.forEach(p),f=y(A),u=w(A,"SPAN",{class:!0});var ne=S(u);O=k(ne,"Recall: "),g=k(ne,s[4]),C=y(ne),b=w(ne,"SPAN",{class:!0});var fe=S(b);Q(H.$$.fragment,fe),Y=y(fe),z=w(fe,"SPAN",{class:!0,"data-svelte-h":!0}),oe(z)!=="svelte-1g33s0e"&&(z.textContent=Pe),fe.forEach(p),ne.forEach(p),me=y(A),q=w(A,"SPAN",{class:!0});var le=S(q);pe=k(le,"Precision: "),re=k(le,s[5]),ge=y(le),j=w(le,"SPAN",{class:!0});var ue=S(j);Q(x.$$.fragment,ue),_e=y(ue),J=w(ue,"SPAN",{class:!0,"data-svelte-h":!0}),oe(J)!=="svelte-i8esxg"&&(J.textContent=Te),ue.forEach(p),le.forEach(p),A.forEach(p),ie=y(a),B=w(a,"TABLE",{class:!0});var de=S(B);ee=w(de,"THEAD",{"data-svelte-h":!0}),oe(ee)!=="svelte-17iv0e1"&&(ee.innerHTML=Ne),be=y(de),te=w(de,"TBODY",{});var Se=S(te);for(let ve=0;ve<F.length;ve+=1)F[ve].l(Se);Se.forEach(p),de.forEach(p),this.h()},h(){E(e,"class","font-sans text-[28px] text-black mt-4"),E(P,"class","tooltiptext svelte-b25uzq"),E(m,"class","tooltip svelte-b25uzq"),E(h,"class","text-black font-sans mr-4"),E(z,"class","tooltiptext svelte-b25uzq"),E(b,"class","tooltip svelte-b25uzq"),E(u,"class","text-black font-sans mr-4"),E(J,"class","tooltiptext svelte-b25uzq"),E(j,"class","tooltip svelte-b25uzq"),E(q,"class","text-black font-sans"),E(o,"class","my-2 mb-4"),E(B,"class","w-full")},m(a,I){L(a,e,I),n(e,t),n(e,i),n(e,l),L(a,r,I),L(a,o,I),n(o,h),n(h,_),n(h,c),n(h,N),n(h,m),X(d,m,null),n(m,$),n(m,P),n(o,f),n(o,u),n(u,O),n(u,g),n(u,C),n(u,b),X(H,b,null),n(b,Y),n(b,z),n(o,me),n(o,q),n(q,pe),n(q,re),n(q,ge),n(q,j),X(x,j,null),n(j,_e),n(j,J),L(a,ie,I),L(a,B,I),n(B,ee),n(B,be),n(B,te);for(let A=0;A<F.length;A+=1)F[A]&&F[A].m(te,null);U=!0},p(a,[I]){if((!U||I&8)&&W(i,a[3]),(!U||I&64)&&W(c,a[6]),(!U||I&16)&&W(g,a[4]),(!U||I&32)&&W(re,a[5]),I&7){se=ye(a[0]);let A;for(A=0;A<se.length;A+=1){const G=Fe(a,se,A);F[A]?F[A].p(G,I):(F[A]=Ie(G),F[A].c(),F[A].m(te,null))}for(;A<F.length;A+=1)F[A].d(1);F.length=se.length}},i(a){U||(M(d.$$.fragment,a),M(H.$$.fragment,a),M(x.$$.fragment,a),U=!0)},o(a){V(d.$$.fragment,a),V(H.$$.fragment,a),V(x.$$.fragment,a),U=!1},d(a){a&&(p(e),p(r),p(o),p(ie),p(B)),Z(d),Z(H),Z(x),qe(F,a)}}}function he(s){return s===0?"PAID":"DEFAULTED"}function Ye(s,e,t){let{ids:i}=e,{predictions:l}=e,{answers:r}=e,o,h,_,c,N,m,d,$;function P(){o=0,h=0,_=0,c=0;for(let T=0;T<l.length;T++){const f=l[T],u=r[T];u===1&&f===1&&(o+=1),u===1&&f===0&&(c+=1),u===0&&f===1&&(_+=1),u===0&&f===0&&(h+=1)}console.log("True positive: "+o),console.log("True negative: "+h),console.log("False positive: "+_),console.log("False negative: "+c),t(3,N=(o+h)/(o+h+_+c)*100),o+c!==0?t(4,m=o/(o+c)):t(4,m="NA"),_+h!==0?t(5,d=h/(h+_)):t(5,d="NA"),m!=="NA"&&d!=="NA"?t(6,$=2*(d*m)/(d+m)):t(6,$="NA"),m!=="NA"&&t(4,m=m.toFixed(2)),d!=="NA"&&t(5,d=d.toFixed(2)),$!=="NA"&&t(6,$=$.toFixed(2)),t(3,N=N.toFixed(2))}return ke(()=>{P()}),s.$$set=T=>{"ids"in T&&t(0,i=T.ids),"predictions"in T&&t(1,l=T.predictions),"answers"in T&&t(2,r=T.answers)},[i,l,r,N,m,d,$]}class xe extends Ae{constructor(e){super(),Ce(this,e,Ye,Ge,Ee,{ids:0,predictions:1,answers:2})}}function Re(s){let e,t,i;return t=new xe({props:{predictions:s[5],answers:s[4],ids:s[3]}}),{c(){e=v("div"),K(t.$$.fragment),this.h()},l(l){e=w(l,"DIV",{id:!0,class:!0});var r=S(e);Q(t.$$.fragment,r),r.forEach(p),this.h()},h(){E(e,"id","predictions"),E(e,"class","w-full h-full")},m(l,r){L(l,e,r),X(t,e,null),i=!0},p(l,r){const o={};r&32&&(o.predictions=l[5]),r&16&&(o.answers=l[4]),r&8&&(o.ids=l[3]),t.$set(o)},i(l){i||(M(t.$$.fragment,l),i=!0)},o(l){V(t.$$.fragment,l),i=!1},d(l){l&&p(e),Z(t)}}}function Je(s){let e,t,i="Sample of 1000 clients:",l,r,o,h,_,c,N,m,d,$,P,T,f,u,O;N=new ae({props:{icon:ze,class:"w-[1em] h-[1em] px-2 inline"}}),P=new ae({props:{icon:He,class:"w-[1em] h-[1em] px-2 inline"}});let g=typeof s[5]<"u"&&Re(s);return{c(){e=v("div"),t=v("h2"),t.textContent=i,l=D(),r=v("div"),o=new Be(!1),h=D(),_=v("button"),c=R("Get new Sample"),K(N.$$.fragment),m=D(),d=v("button"),$=R("Run Prediction"),K(P.$$.fragment),T=D(),g&&g.c(),this.h()},l(C){e=w(C,"DIV",{id:!0,class:!0});var b=S(e);t=w(b,"H2",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-frwau6"&&(t.textContent=i),l=y(b),r=w(b,"DIV",{class:!0});var H=S(r);o=Le(H,!1),H.forEach(p),h=y(b),_=w(b,"BUTTON",{class:!0});var Y=S(_);c=k(Y,"Get new Sample"),Q(N.$$.fragment,Y),Y.forEach(p),m=y(b),d=w(b,"BUTTON",{class:!0});var z=S(d);$=k(z,"Run Prediction"),Q(P.$$.fragment,z),z.forEach(p),T=y(b),g&&g.l(b),b.forEach(p),this.h()},h(){E(t,"class","my-4 font-sans text-[28px] text-black"),o.a=null,E(r,"class","h-[300px] w-full overflow-scroll"),E(_,"class","bg-[#d3368240] text-[#d33682] svelte-zbe35h"),E(d,"class","bg-[#85990040] text-[#859900] svelte-zbe35h"),E(e,"id","list"),E(e,"class","w-full mt-16 min-h-[75vh]")},m(C,b){L(C,e,b),n(e,t),n(e,l),n(e,r),o.m(s[2],r),n(e,h),n(e,_),n(_,c),X(N,_,null),n(e,m),n(e,d),n(d,$),X(P,d,null),n(e,T),g&&g.m(e,null),f=!0,u||(O=[$e(_,"click",s[0]),$e(d,"click",s[1])],u=!0)},p(C,[b]){(!f||b&4)&&o.p(C[2]),typeof C[5]<"u"?g?(g.p(C,b),b&32&&M(g,1)):(g=Re(C),g.c(),M(g,1),g.m(e,null)):g&&(Ve(),V(g,1,1,()=>{g=null}),je())},i(C){f||(M(N.$$.fragment,C),M(P.$$.fragment,C),M(g),f=!0)},o(C){V(N.$$.fragment,C),V(P.$$.fragment,C),V(g),f=!1},d(C){C&&p(e),Z(N),Z(P),g&&g.d(),u=!1,Me(O)}}}function We(){const s=document.getElementById("predictions");if(s){const i=s.getBoundingClientRect().top+window.scrollY-200;window.scrollTo({top:i,behavior:"smooth"})}}function Ke(s,e,t){let i="loading sample customers...",l,r,o;async function h(){t(3,l=void 0),t(4,r=void 0),t(5,o=void 0),fetch("/getSample").then(c=>c.text()).then(c=>{t(2,i=c)}).catch(c=>console.error("Error:",c))}async function _(){fetch("/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customersTable:i})}).then(c=>{if(!c.ok)throw new Error(c.body);return c.json()}).then(c=>{t(3,l=c.ids),t(4,r=c.answers),t(5,o=c.predictions),setTimeout(We,0)}).catch(c=>{console.error("Error: Could not get predictions - "+c)})}return ke(()=>{h()}),De.add(He),De.add(ze),Ue.watch(),[h,_,i,l,r,o]}class Qe extends Ae{constructor(e){super(),Ce(this,e,Ke,Je,Ee,{getCustomers:0,runPredictions:1})}get getCustomers(){return this.$$.ctx[0]}get runPredictions(){return this.$$.ctx[1]}}function Xe(s){let e,t,i;return t=new Qe({}),{c(){e=v("main"),K(t.$$.fragment),this.h()},l(l){e=w(l,"MAIN",{class:!0});var r=S(e);Q(t.$$.fragment,r),r.forEach(p),this.h()},h(){E(e,"class","w-[70%] h-full my-0 mx-auto")},m(l,r){L(l,e,r),X(t,e,null),i=!0},p:Oe,i(l){i||(M(t.$$.fragment,l),i=!0)},o(l){V(t.$$.fragment,l),i=!1},d(l){l&&p(e),Z(t)}}}class st extends Ae{constructor(e){super(),Ce(this,e,null,Xe,Ee,{})}}export{st as component};