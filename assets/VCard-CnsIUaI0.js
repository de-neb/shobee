import{z as l,L as s,a2 as H,y as c,a as n,p as y,q as V,a9 as m,bb as x,F as A,a0 as P,a3 as C,K,m as Q,M as U,by as W,aa as $,aR as G,O as J,bc as X,P as Y,b9 as Z,aE as ee,Q as ae,T as te,be as ne,bf as de,E as ie,U as le,bz as se,ae as ce,aS as re,W as ue,bh as oe,B as S,$ as ve,av as me,as as ye,bi as be,a8 as ge}from"./index-B_vA2bDn.js";import{g as ke,f as h}from"./VAvatar-BIS29vSf.js";import{V as fe}from"./VImg-Bt_LHd7b.js";const Ce=l()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return H({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=y({opacity:[Number,String],...s(),...V()},"VCardSubtitle"),Ie=l()({name:"VCardSubtitle",props:Ve(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=ke("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=l()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(C,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),f&&n(Ie,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(C,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...V()},"VCardText"),he=l()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...K(),...s(),...x(),...Q(),...U(),...W(),...$(),...G(),...J(),...X(),...V(),...Y(),...Z({variant:"elevated"})},"VCard"),De=l()({name:"VCard",directives:{Ripple:ee},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=ae(e),{borderClasses:r}=te(e),{colorClasses:g,colorStyles:k,variantClasses:f}=ne(e),{densityClasses:u}=de(e),{dimensionStyles:i}=ie(e),{elevationClasses:T}=le(e),{loaderClasses:B}=se(e),{locationStyles:L}=ce(e),{positionClasses:D}=re(e),{roundedClasses:N}=ue(e),o=oe(e,t),_=S(()=>e.link!==!1&&o.isLink.value),v=S(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,E=!!(a.title||e.title!=null),F=!!(a.subtitle||e.subtitle!=null),M=E||F,O=!!(a.append||e.appendAvatar||e.appendIcon),z=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),q=M||z||O,w=!!(a.text||e.text!=null);return ve(n(R,ge({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,g.value,u.value,T.value,B.value,D.value,N.value,f.value,e.class],style:[k.value,i.value,L.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(he,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ce,null,{default:a.actions}),be(v.value,"v-card")]}}),[[me("ripple"),v.value&&e.ripple]])}),{}}});export{De as V,pe as a,he as b,Ce as c};
