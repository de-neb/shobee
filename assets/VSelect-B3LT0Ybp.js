import{d as We,e as Ke,V as be}from"./VTextField-CpC29xXR.js";import{p as Y,a9 as te,L as ue,aL as $e,q as pe,aG as Ae,z as ae,a1 as Ne,u as Re,au as _e,A as B,B as C,X as de,b7 as je,b0 as se,x as X,y as re,a as u,a0 as j,b8 as Xe,ao as Ye,P as ze,b9 as Ee,Q as De,a2 as Qe,S as ne,a8 as W,ba as ke,K as Je,bb as Ze,M as el,ax as ll,O as tl,bc as al,bd as nl,aE as ol,D as Fe,T as sl,be as il,bf as ul,U as rl,W as cl,bg as dl,a6 as me,aA as vl,bh as fl,$ as Se,av as ml,bi as hl,a3 as oe,ah as pl,F as Z,_ as Ve,k as le,aJ as Be,a4 as ve,bj as gl,H as Oe,m as yl,an as bl,E as kl,Y as Sl,l as Vl,bk as Cl,C as ce,aT as wl,ab as xl,b1 as Pl,j as Il,aY as Tl,ap as Al,b3 as Ce,b4 as we}from"./index-B_vA2bDn.js";import{m as Rl,e as _l,a as zl,b as xe}from"./VList-eh_-jz70.js";import{a as El,V as Dl}from"./VMenu-IAsnr3UM.js";import{V as Fl}from"./VCheckboxBtn-CPsLDFVR.js";import{d as Pe,h as Bl,f as he}from"./VAvatar-BIS29vSf.js";function Ol(e){let{selectedElement:i,containerElement:a,isRtl:d,isHorizontal:o}=e;const h=ie(o,a),f=Le(o,d,a),r=ie(o,i),s=Me(o,i),y=r*.4;return f>s?s-y:f+h<s+r?s-h+r+y:f}function Ll(e){let{selectedElement:i,containerElement:a,isHorizontal:d}=e;const o=ie(d,a),h=Me(d,i),f=ie(d,i);return h-o/2+f/2}function Ie(e,i){const a=e?"scrollWidth":"scrollHeight";return(i==null?void 0:i[a])||0}function Ml(e,i){const a=e?"clientWidth":"clientHeight";return(i==null?void 0:i[a])||0}function Le(e,i,a){if(!a)return 0;const{scrollLeft:d,offsetWidth:o,scrollWidth:h}=a;return e?i?h-o+d:d:a.scrollTop}function ie(e,i){const a=e?"offsetWidth":"offsetHeight";return(i==null?void 0:i[a])||0}function Me(e,i){const a=e?"offsetLeft":"offsetTop";return(i==null?void 0:i[a])||0}const Hl=Symbol.for("vuetify:v-slide-group"),He=Y({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Hl},nextIcon:{type:te,default:"$next"},prevIcon:{type:te,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ue(),...$e({mobile:null}),...pe(),...Ae({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Te=ae()({name:"VSlideGroup",props:He(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const{isRtl:d}=Ne(),{displayClasses:o,mobile:h}=Re(e),f=_e(e,e.symbol),r=B(!1),s=B(0),y=B(0),P=B(0),b=C(()=>e.direction==="horizontal"),{resizeRef:v,contentRect:V}=de(),{resizeRef:k,contentRect:x}=de(),c=je(),S=C(()=>({container:v.el,duration:200,easing:"easeOutQuart"})),I=C(()=>f.selected.value.length?f.items.value.findIndex(l=>l.id===f.selected.value[0]):-1),R=C(()=>f.selected.value.length?f.items.value.findIndex(l=>l.id===f.selected.value[f.selected.value.length-1]):-1);if(se){let l=-1;X(()=>[f.selected.value,V.value,x.value,b.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(V.value&&x.value){const n=b.value?"width":"height";y.value=V.value[n],P.value=x.value[n],r.value=y.value+1<P.value}if(I.value>=0&&k.el){const n=k.el.children[R.value];M(n,e.centerActive)}})})}const T=B(!1);function M(l,n){let m=0;n?m=Ll({containerElement:v.el,isHorizontal:b.value,selectedElement:l}):m=Ol({containerElement:v.el,isHorizontal:b.value,isRtl:d.value,selectedElement:l}),K(m)}function K(l){if(!se||!v.el)return;const n=ie(b.value,v.el),m=Le(b.value,d.value,v.el);if(!(Ie(b.value,v.el)<=n||Math.abs(l-m)<16)){if(b.value&&d.value&&v.el){const{scrollWidth:p,offsetWidth:w}=v.el;l=p-w-l}b.value?c.horizontal(l,S.value):c(l,S.value)}}function g(l){const{scrollTop:n,scrollLeft:m}=l.target;s.value=b.value?m:n}function O(l){if(T.value=!0,!(!r.value||!k.el)){for(const n of l.composedPath())for(const m of k.el.children)if(m===n){M(m);return}}}function H(l){T.value=!1}let E=!1;function q(l){var n;!E&&!T.value&&!(l.relatedTarget&&((n=k.el)!=null&&n.contains(l.relatedTarget)))&&D(),E=!1}function G(){E=!0}function U(l){if(!k.el)return;function n(m){l.preventDefault(),D(m)}b.value?l.key==="ArrowRight"?n(d.value?"prev":"next"):l.key==="ArrowLeft"&&n(d.value?"next":"prev"):l.key==="ArrowDown"?n("next"):l.key==="ArrowUp"&&n("prev"),l.key==="Home"?n("first"):l.key==="End"&&n("last")}function D(l){var m,A;if(!k.el)return;let n;if(!l)n=Xe(k.el)[0];else if(l==="next"){if(n=(m=k.el.querySelector(":focus"))==null?void 0:m.nextElementSibling,!n)return D("first")}else if(l==="prev"){if(n=(A=k.el.querySelector(":focus"))==null?void 0:A.previousElementSibling,!n)return D("last")}else l==="first"?n=k.el.firstElementChild:l==="last"&&(n=k.el.lastElementChild);n&&n.focus({preventScroll:!0})}function _(l){const n=b.value&&d.value?-1:1,m=(l==="prev"?-n:n)*y.value;let A=s.value+m;if(b.value&&d.value&&v.el){const{scrollWidth:p,offsetWidth:w}=v.el;A+=p-w}K(A)}const Q=C(()=>({next:f.next,prev:f.prev,select:f.select,isSelected:f.isSelected})),$=C(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!h.value;case!0:return r.value||Math.abs(s.value)>0;case"mobile":return h.value||r.value||Math.abs(s.value)>0;default:return!h.value&&(r.value||Math.abs(s.value)>0)}}),J=C(()=>Math.abs(s.value)>1),t=C(()=>{if(!v.value)return!1;const l=Ie(b.value,v.el),n=Ml(b.value,v.el);return l-n-Math.abs(s.value)>1});return re(()=>u(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!b.value,"v-slide-group--has-affixes":$.value,"v-slide-group--is-overflowing":r.value},o.value,e.class],style:e.style,tabindex:T.value||f.selected.value.length?-1:0,onFocus:q},{default:()=>{var l,n,m;return[$.value&&u("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!J.value}],onMousedown:G,onClick:()=>J.value&&_("prev")},[((l=a.prev)==null?void 0:l.call(a,Q.value))??u(Pe,null,{default:()=>[u(j,{icon:d.value?e.nextIcon:e.prevIcon},null)]})]),u("div",{key:"container",ref:v,class:"v-slide-group__container",onScroll:g},[u("div",{ref:k,class:"v-slide-group__content",onFocusin:O,onFocusout:H,onKeydown:U},[(n=a.default)==null?void 0:n.call(a,Q.value)])]),$.value&&u("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!t.value}],onMousedown:G,onClick:()=>t.value&&_("next")},[((m=a.next)==null?void 0:m.call(a,Q.value))??u(Pe,null,{default:()=>[u(j,{icon:d.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:f.selected,scrollTo:_,scrollOffset:s,focus:D,hasPrev:J,hasNext:t}}}),qe=Symbol.for("vuetify:v-chip-group"),ql=Y({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ye},...He(),...ue(),...Ae({selectedClass:"v-chip--selected"}),...pe(),...ze(),...Ee({variant:"tonal"})},"VChipGroup");ae()({name:"VChipGroup",props:ql(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const{themeClasses:d}=De(e),{isSelected:o,select:h,next:f,prev:r,selected:s}=_e(e,qe);return Qe({VChip:{color:ne(e,"color"),disabled:ne(e,"disabled"),filter:ne(e,"filter"),variant:ne(e,"variant")}}),re(()=>{const y=Te.filterProps(e);return u(Te,W(y,{class:["v-chip-group",{"v-chip-group--column":e.column},d.value,e.class],style:e.style}),{default:()=>{var P;return[(P=a.default)==null?void 0:P.call(a,{isSelected:o,select:h,next:f,prev:r,selected:s.value})]}})}),{}}});const Gl=Y({activeClass:String,appendAvatar:String,appendIcon:te,closable:Boolean,closeIcon:{type:te,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ke(),onClickOnce:ke(),...Je(),...ue(),...Ze(),...el(),...ll(),...tl(),...al(),...nl(),...pe({tag:"span"}),...ze(),...Ee({variant:"tonal"})},"VChip"),Ul=ae()({name:"VChip",directives:{Ripple:ol},props:Gl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,i){let{attrs:a,emit:d,slots:o}=i;const{t:h}=Fe(),{borderClasses:f}=sl(e),{colorClasses:r,colorStyles:s,variantClasses:y}=il(e),{densityClasses:P}=ul(e),{elevationClasses:b}=rl(e),{roundedClasses:v}=cl(e),{sizeClasses:V}=dl(e),{themeClasses:k}=De(e),x=me(e,"modelValue"),c=vl(e,qe,!1),S=fl(e,a),I=C(()=>e.link!==!1&&S.isLink.value),R=C(()=>!e.disabled&&e.link!==!1&&(!!c||e.link||S.isClickable.value)),T=C(()=>({"aria-label":h(e.closeLabel),onClick(g){g.preventDefault(),g.stopPropagation(),x.value=!1,d("click:close",g)}}));function M(g){var O;d("click",g),R.value&&((O=S.navigate)==null||O.call(S,g),c==null||c.toggle())}function K(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),M(g))}return()=>{const g=S.isLink.value?"a":e.tag,O=!!(e.appendIcon||e.appendAvatar),H=!!(O||o.append),E=!!(o.close||e.closable),q=!!(o.filter||e.filter)&&c,G=!!(e.prependIcon||e.prependAvatar),U=!!(G||o.prepend),D=!c||c.isSelected.value;return x.value&&Se(u(g,W({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":R.value,"v-chip--filter":q,"v-chip--pill":e.pill},k.value,f.value,D?r.value:void 0,P.value,b.value,v.value,V.value,y.value,c==null?void 0:c.selectedClass.value,e.class],style:[D?s.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:R.value?0:void 0,onClick:M,onKeydown:R.value&&!I.value&&K},S.linkProps),{default:()=>{var _;return[hl(R.value,"v-chip"),q&&u(Bl,{key:"filter"},{default:()=>[Se(u("div",{class:"v-chip__filter"},[o.filter?u(oe,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):u(j,{key:"filter-icon",icon:e.filterIcon},null)]),[[pl,c.isSelected.value]])]}),U&&u("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?u(oe,{key:"prepend-defaults",disabled:!G,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):u(Z,null,[e.prependIcon&&u(j,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&u(he,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),u("div",{class:"v-chip__content","data-no-activator":""},[((_=o.default)==null?void 0:_.call(o,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:e.disabled}))??e.text]),H&&u("div",{key:"append",class:"v-chip__append"},[o.append?u(oe,{key:"append-defaults",disabled:!O,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):u(Z,null,[e.appendIcon&&u(j,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&u(he,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),E&&u("button",W({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},T.value),[o.close?u(oe,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):u(j,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[ml("ripple"),R.value&&e.ripple,null]])}}}),Wl=Y({renderless:Boolean,...ue()},"VVirtualScrollItem"),Kl=ae()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Wl(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:a,emit:d,slots:o}=i;const{resizeRef:h,contentRect:f}=de(void 0,"border");X(()=>{var r;return(r=f.value)==null?void 0:r.height},r=>{r!=null&&d("update:height",r)}),re(()=>{var r,s;return e.renderless?u(Z,null,[(r=o.default)==null?void 0:r.call(o,{itemRef:h})]):u("div",W({ref:h,class:["v-virtual-scroll__item",e.class],style:e.style},a),[(s=o.default)==null?void 0:s.call(o)])})}}),$l=-1,Nl=1,fe=100,jl=Y({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Xl(e,i){const a=Re(),d=B(0);Ve(()=>{d.value=parseFloat(e.itemHeight||0)});const o=B(0),h=B(Math.ceil((parseInt(e.height)||a.height.value)/(d.value||16))||1),f=B(0),r=B(0),s=le(),y=le();let P=0;const{resizeRef:b,contentRect:v}=de();Ve(()=>{b.value=s.value});const V=C(()=>{var t;return s.value===document.documentElement?a.height.value:((t=v.value)==null?void 0:t.height)||parseInt(e.height)||0}),k=C(()=>!!(s.value&&y.value&&V.value&&d.value));let x=Array.from({length:i.value.length}),c=Array.from({length:i.value.length});const S=B(0);let I=-1;function R(t){return x[t]||d.value}const T=gl(()=>{const t=performance.now();c[0]=0;const l=i.value.length;for(let n=1;n<=l-1;n++)c[n]=(c[n-1]||0)+R(n-1);S.value=Math.max(S.value,performance.now()-t)},S),M=X(k,t=>{t&&(M(),P=y.value.offsetTop,T.immediate(),_(),~I&&Oe(()=>{se&&window.requestAnimationFrame(()=>{$(I),I=-1})}))});Be(()=>{T.clear()});function K(t,l){const n=x[t],m=d.value;d.value=m?Math.min(d.value,l):l,(n!==l||m!==d.value)&&(x[t]=l,T())}function g(t){return t=ve(t,0,i.value.length-1),c[t]||0}function O(t){return Yl(c,t)}let H=0,E=0,q=0;X(V,(t,l)=>{l&&(_(),t<l&&requestAnimationFrame(()=>{E=0,_()}))});function G(){if(!s.value||!y.value)return;const t=s.value.scrollTop,l=performance.now();l-q>500?(E=Math.sign(t-H),P=y.value.offsetTop):E=t-H,H=t,q=l,_()}function U(){!s.value||!y.value||(E=0,q=0,_())}let D=-1;function _(){cancelAnimationFrame(D),D=requestAnimationFrame(Q)}function Q(){if(!s.value||!V.value)return;const t=H-P,l=Math.sign(E),n=Math.max(0,t-fe),m=ve(O(n),0,i.value.length),A=t+V.value+fe,p=ve(O(A)+1,m+1,i.value.length);if((l!==$l||m<o.value)&&(l!==Nl||p>h.value)){const w=g(o.value)-g(m),z=g(p)-g(h.value);Math.max(w,z)>fe?(o.value=m,h.value=p):(m<=0&&(o.value=m),p>=i.value.length&&(h.value=p))}f.value=g(o.value),r.value=g(i.value.length)-g(h.value)}function $(t){const l=g(t);!s.value||t&&!l?I=t:s.value.scrollTop=l}const J=C(()=>i.value.slice(o.value,h.value).map((t,l)=>({raw:t,index:l+o.value})));return X(i,()=>{x=Array.from({length:i.value.length}),c=Array.from({length:i.value.length}),T.immediate(),_()},{deep:!0}),{calculateVisibleItems:_,containerRef:s,markerRef:y,computedItems:J,paddingTop:f,paddingBottom:r,scrollToIndex:$,handleScroll:G,handleScrollend:U,handleItemResize:K}}function Yl(e,i){let a=e.length-1,d=0,o=0,h=null,f=-1;if(e[a]<i)return a;for(;d<=a;)if(o=d+a>>1,h=e[o],h>i)a=o-1;else if(h<i)f=o,d=o+1;else return h===i?o:d;return f}const Ql=Y({items:{type:Array,default:()=>[]},renderless:Boolean,...jl(),...ue(),...yl()},"VVirtualScroll"),Jl=ae()({name:"VVirtualScroll",props:Ql(),setup(e,i){let{slots:a}=i;const d=bl("VVirtualScroll"),{dimensionStyles:o}=kl(e),{calculateVisibleItems:h,containerRef:f,markerRef:r,handleScroll:s,handleScrollend:y,handleItemResize:P,scrollToIndex:b,paddingTop:v,paddingBottom:V,computedItems:k}=Xl(e,ne(e,"items"));return Sl(()=>e.renderless,()=>{function x(){var I,R;const S=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[S]("scroll",s,{passive:!0}),document[S]("scrollend",y)):((I=f.value)==null||I[S]("scroll",s,{passive:!0}),(R=f.value)==null||R[S]("scrollend",y))}Vl(()=>{f.value=Cl(d.vnode.el,!0),x(!0)}),Be(x)}),re(()=>{const x=k.value.map(c=>u(Kl,{key:c.index,renderless:e.renderless,"onUpdate:height":S=>P(c.index,S)},{default:S=>{var I;return(I=a.default)==null?void 0:I.call(a,{item:c.raw,index:c.index,...S})}}));return e.renderless?u(Z,null,[u("div",{ref:r,class:"v-virtual-scroll__spacer",style:{paddingTop:ce(v.value)}},null),x,u("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ce(V.value)}},null)]):u("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:s,onScrollend:y,style:[o.value,e.style]},[u("div",{ref:r,class:"v-virtual-scroll__container",style:{paddingTop:ce(v.value),paddingBottom:ce(V.value)}},[x])])}),{calculateVisibleItems:h,scrollToIndex:b}}});function Zl(e,i){const a=B(!1);let d;function o(r){cancelAnimationFrame(d),a.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{a.value=!1})})}async function h(){await new Promise(r=>requestAnimationFrame(r)),await new Promise(r=>requestAnimationFrame(r)),await new Promise(r=>requestAnimationFrame(r)),await new Promise(r=>{if(a.value){const s=X(a,()=>{s(),r()})}else r()})}async function f(r){var P,b;if(r.key==="Tab"&&((P=i.value)==null||P.focus()),!["PageDown","PageUp","Home","End"].includes(r.key))return;const s=(b=e.value)==null?void 0:b.$el;if(!s)return;(r.key==="Home"||r.key==="End")&&s.scrollTo({top:r.key==="Home"?0:s.scrollHeight,behavior:"smooth"}),await h();const y=s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(r.key==="PageDown"||r.key==="Home"){const v=s.getBoundingClientRect().top;for(const V of y)if(V.getBoundingClientRect().top>=v){V.focus();break}}else{const v=s.getBoundingClientRect().bottom;for(const V of[...y].reverse())if(V.getBoundingClientRect().bottom<=v){V.focus();break}}}return{onScrollPassive:o,onKeydown:f}}const et=Y({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:te,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Rl({itemChildren:!1})},"Select"),lt=Y({...et(),...wl(We({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...xl({transition:{component:El}})},"VSelect"),ut=ae()({name:"VSelect",props:lt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:a}=i;const{t:d}=Fe(),o=le(),h=le(),f=le(),r=me(e,"menu"),s=C({get:()=>r.value,set:t=>{var l;r.value&&!t&&((l=h.value)!=null&&l.ΨopenChildren.size)||(r.value=t)}}),{items:y,transformIn:P,transformOut:b}=_l(e),v=me(e,"modelValue",[],t=>P(t===null?[null]:Al(t)),t=>{const l=b(t);return e.multiple?l:l[0]??null}),V=C(()=>typeof e.counterValue=="function"?e.counterValue(v.value):typeof e.counterValue=="number"?e.counterValue:v.value.length),k=Ke(),x=C(()=>v.value.map(t=>t.value)),c=B(!1),S=C(()=>s.value?e.closeText:e.openText);let I="",R;const T=C(()=>e.hideSelected?y.value.filter(t=>!v.value.some(l=>e.valueComparator(l,t))):y.value),M=C(()=>e.hideNoData&&!T.value.length||e.readonly||(k==null?void 0:k.isReadonly.value)),K=C(()=>{var t;return{...e.menuProps,activatorProps:{...((t=e.menuProps)==null?void 0:t.activatorProps)||{},"aria-haspopup":"listbox"}}}),g=le(),O=Zl(g,o);function H(t){e.openOnClear&&(s.value=!0)}function E(){M.value||(s.value=!s.value)}function q(t){Ce(t)&&G(t)}function G(t){var A,p;if(!t.key||e.readonly||k!=null&&k.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(s.value=!0),["Escape","Tab"].includes(t.key)&&(s.value=!1),t.key==="Home"?(A=g.value)==null||A.focus("first"):t.key==="End"&&((p=g.value)==null||p.focus("last"));const l=1e3;if(e.multiple||!Ce(t))return;const n=performance.now();n-R>l&&(I=""),I+=t.key.toLowerCase(),R=n;const m=y.value.find(w=>w.title.toLowerCase().startsWith(I));if(m!==void 0){v.value=[m];const w=T.value.indexOf(m);se&&window.requestAnimationFrame(()=>{var z;w>=0&&((z=f.value)==null||z.scrollToIndex(w))})}}function U(t){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const n=v.value.findIndex(A=>e.valueComparator(A.value,t.value)),m=l??!~n;if(~n){const A=m?[...v.value,t]:[...v.value];A.splice(n,1),v.value=A}else m&&(v.value=[...v.value,t])}else{const n=l!==!1;v.value=n?[t]:[],Oe(()=>{s.value=!1})}}function D(t){var l;(l=g.value)!=null&&l.$el.contains(t.relatedTarget)||(s.value=!1)}function _(){var t;e.eager&&((t=f.value)==null||t.calculateVisibleItems())}function Q(){var t;c.value&&((t=o.value)==null||t.focus())}function $(t){c.value=!0}function J(t){if(t==null)v.value=[];else if(we(o.value,":autofill")||we(o.value,":-webkit-autofill")){const l=y.value.find(n=>n.title===t);l&&U(l)}else o.value&&(o.value.value="")}return X(s,()=>{if(!e.hideSelected&&s.value&&v.value.length){const t=T.value.findIndex(l=>v.value.some(n=>e.valueComparator(n.value,l.value)));se&&window.requestAnimationFrame(()=>{var l;t>=0&&((l=f.value)==null||l.scrollToIndex(t))})}}),X(()=>e.items,(t,l)=>{s.value||c.value&&!l.length&&t.length&&(s.value=!0)}),re(()=>{const t=!!(e.chips||a.chip),l=!!(!e.hideNoData||T.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),n=v.value.length>0,m=be.filterProps(e),A=n||!c.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return u(be,W({ref:o},m,{modelValue:v.value.map(p=>p.props.value).join(", "),"onUpdate:modelValue":J,focused:c.value,"onUpdate:focused":p=>c.value=p,validationValue:v.externalValue,counterValue:V.value,dirty:n,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":v.value.length,"v-select--selection-slot":!!a.selection},e.class],style:e.style,inputmode:"none",placeholder:A,"onClick:clear":H,"onMousedown:control":E,onBlur:D,onKeydown:G,"aria-label":d(S.value),title:d(S.value)}),{...a,default:()=>u(Z,null,[u(Dl,W({ref:h,modelValue:s.value,"onUpdate:modelValue":p=>s.value=p,activator:"parent",contentClass:"v-select__content",disabled:M.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:_,onAfterLeave:Q},K.value),{default:()=>[l&&u(zl,W({ref:g,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:p=>p.preventDefault(),onKeydown:q,onFocusin:$,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},O,e.listProps),{default:()=>{var p,w,z;return[(p=a["prepend-item"])==null?void 0:p.call(a),!T.value.length&&!e.hideNoData&&(((w=a["no-data"])==null?void 0:w.call(a))??u(xe,{title:d(e.noDataText)},null)),u(Jl,{ref:f,renderless:!0,items:T.value},{default:N=>{var ye;let{item:L,index:ee,itemRef:F}=N;const ge=W(L.props,{ref:F,key:ee,onClick:()=>U(L,null)});return((ye=a.item)==null?void 0:ye.call(a,{item:L,index:ee,props:ge}))??u(xe,W(ge,{role:"option"}),{prepend:Ge=>{let{isSelected:Ue}=Ge;return u(Z,null,[e.multiple&&!e.hideSelected?u(Fl,{key:L.value,modelValue:Ue,ripple:!1,tabindex:"-1"},null):void 0,L.props.prependAvatar&&u(he,{image:L.props.prependAvatar},null),L.props.prependIcon&&u(j,{icon:L.props.prependIcon},null)])}})}}),(z=a["append-item"])==null?void 0:z.call(a)]}})]}),v.value.map((p,w)=>{function z(F){F.stopPropagation(),F.preventDefault(),U(p,!1)}const N={"onClick:close":z,onKeydown(F){F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),z(F))},onMousedown(F){F.preventDefault(),F.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},L=t?!!a.chip:!!a.selection,ee=L?Pl(t?a.chip({item:p,index:w,props:N}):a.selection({item:p,index:w})):void 0;if(!(L&&!ee))return u("div",{key:p.value,class:"v-select__selection"},[t?a.chip?u(oe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:p.title}}},{default:()=>[ee]}):u(Ul,W({key:"chip",closable:e.closableChips,size:"small",text:p.title,disabled:p.props.disabled},N),null):ee??u("span",{class:"v-select__selection-text"},[p.title,e.multiple&&w<v.value.length-1&&u("span",{class:"v-select__selection-comma"},[Il(",")])])])})]),"append-inner":function(){var N;for(var p=arguments.length,w=new Array(p),z=0;z<p;z++)w[z]=arguments[z];return u(Z,null,[(N=a["append-inner"])==null?void 0:N.call(a,...w),e.menuIcon?u(j,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Tl({isFocused:c,menu:s,select:U},o)}});export{ut as V,Jl as a,Ul as b,et as m,Zl as u};