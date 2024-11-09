import{p as C,a9 as _,L as T,m as b,bd as P,P as z,z as E,Q as I,R as D,S as B,E as F,u as R,y as W,a,F as j,a0 as A,a3 as d,C as N,i as H}from"./index-B_vA2bDn.js";import{V as L}from"./VImg-Bt_LHd7b.js";const M=C({actionText:String,bgColor:String,color:String,icon:_,image:String,justify:{type:String,default:"center"},headline:String,title:String,text:String,textWidth:{type:[Number,String],default:500},href:String,to:String,...T(),...b(),...P({size:void 0}),...z()},"VEmptyState"),$=E()({name:"VEmptyState",props:M(),emits:{"click:action":e=>!0},setup(e,u){let{emit:y,slots:t}=u;const{themeClasses:r}=I(e),{backgroundColorClasses:g,backgroundColorStyles:v}=D(B(e,"bgColor")),{dimensionStyles:h}=F(e),{displayClasses:k}=R();function s(n){y("click:action",n)}return W(()=>{var c,l,o;const n=!!(t.actions||e.actionText),f=!!(t.headline||e.headline),S=!!(t.title||e.title),x=!!(t.text||e.text),V=!!(t.media||e.image||e.icon),i=e.size||(e.image?200:96);return a("div",{class:["v-empty-state",{[`v-empty-state--${e.justify}`]:!0},r.value,g.value,k.value,e.class],style:[v.value,h.value,e.style]},[V&&a("div",{key:"media",class:"v-empty-state__media"},[t.media?a(d,{key:"media-defaults",defaults:{VImg:{src:e.image,height:i},VIcon:{size:i,icon:e.icon}}},{default:()=>[t.media()]}):a(j,null,[e.image?a(L,{key:"image",src:e.image,height:i},null):e.icon?a(A,{key:"icon",color:e.color,size:i,icon:e.icon},null):void 0])]),f&&a("div",{key:"headline",class:"v-empty-state__headline"},[((c=t.headline)==null?void 0:c.call(t))??e.headline]),S&&a("div",{key:"title",class:"v-empty-state__title"},[((l=t.title)==null?void 0:l.call(t))??e.title]),x&&a("div",{key:"text",class:"v-empty-state__text",style:{maxWidth:N(e.textWidth)}},[((o=t.text)==null?void 0:o.call(t))??e.text]),t.default&&a("div",{key:"content",class:"v-empty-state__content"},[t.default()]),n&&a("div",{key:"actions",class:"v-empty-state__actions"},[a(d,{defaults:{VBtn:{class:"v-empty-state__action-btn",color:e.color??"surface-variant",text:e.actionText}}},{default:()=>{var m;return[((m=t.actions)==null?void 0:m.call(t,{props:{onClick:s}}))??a(H,{onClick:s},null)]}})])])}),{}}});export{$ as V};