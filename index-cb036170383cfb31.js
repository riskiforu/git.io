(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(62062)}])},45667:function(e,t,r){"use strict";r.d(t,{II:function(){return l},XZ:function(){return i},e6:function(){return d},qw:function(){return c}});var a=r(85893),n=r(86010),o=r(67294),s=r(77551);let l=o.forwardRef((e,t)=>{let{type:r="text",className:o,...s}=e;return(0,a.jsx)("div",{className:"flex flex-col items-start",children:(0,a.jsx)("input",{className:(0,n.Z)("relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75",o),type:r,ref:t,...s})})});l.displayName="Input";let i=o.forwardRef((e,t)=>{let{id:r,children:o,className:l,classNameLabel:i,...d}=e;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{type:"checkbox",className:(0,n.Z)("h-4 w-4 cursor-pointer rounded border bg-background text-primary focus:ring-primary focus:ring-offset-background",l),ref:t,id:r,...d}),(0,a.jsx)(s._,{htmlFor:r,className:(0,n.Z)("ml-3 block select-none text-sm text-foreground",i),children:o})]})});i.displayName="Checkbox";let d=e=>(0,a.jsx)("input",{type:"range",className:"range-lg h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary",...e}),c=e=>{let{value:t,onChange:r,debounce:n=500,...s}=e,[i,d]=o.useState(t);return o.useEffect(()=>{d(t)},[t]),o.useEffect(()=>{let e=setTimeout(()=>{r(i)},n);return()=>clearTimeout(e)},[i]),(0,a.jsx)(l,{...s,value:i,className:"!rounded-md",onChange:e=>d(e.target.value)})}},77551:function(e,t,r){"use strict";r.d(t,{_:function(){return o}});var a=r(85893),n=r(86010);r(67294);let o=e=>{let{htmlFor:t,value:r,className:o,children:s}=e;return(0,a.jsx)("label",{htmlFor:t,className:(0,n.Z)("block text-xs font-medium text-foreground",o),children:r||s})}},42414:function(e,t,r){"use strict";r.d(t,{H:function(){return o}});var a=r(85893);r(67294);var n=r(6756);let o=e=>{let{number:t,className:r}=e,o=Array(t||20).fill(!0);return(0,a.jsx)(a.Fragment,{children:o.map((e,t)=>(0,a.jsx)("span",{className:(0,n.cn)("absolute left-1/2 top-1/2 h-1 w-1 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]","before:absolute before:top-1/2 before:h-[1px] before:w-[80px] before:-translate-y-[0%] before:transform before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']",r),style:{top:-20,left:Math.floor(2800*Math.random()+-1400)+"px",animationDelay:Math.random()*(.8-.2)+.2+"s",animationDuration:Math.floor(8*Math.random()+2)+"s"}},"meteor"+t))})}},88961:function(e,t,r){"use strict";r.d(t,{q:function(){return m}});var a=r(85893),n=r(51446),o=r(31038),s=r(31955),l=r(67421);r(67294);var i=r(25675),d=r.n(i),c=r(45667),u=r(7559);let m=e=>{let{kuki:t,images:r,currentImage:i,isOpen:m,handleNext:x,handlePrevious:p,handleClose:h}=e,{t:g}=(0,l.$G)(["common"]);return(0,a.jsx)(u.u,{show:m,maxWidth:"3xl",classNamePanel:"!rounded-2xl",onClose:h,closeable:!0,children:r.length>0&&(0,a.jsxs)("div",{className:"w-full pb-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(d(),{src:r[i].thumbnail,alt:"",priority:!0,width:0,height:0,sizes:"100vw",style:{width:"100%",height:"auto"},className:"object-center"})}),(0,a.jsxs)("div",{className:"relative flex flex-col items-center pt-4 text-foreground",children:[(0,a.jsxs)("div",{className:"flex w-full items-center justify-center px-4",children:[(0,a.jsxs)("div",{className:"col-span-2 -mt-3 flex w-full flex-col items-center justify-center !text-xxs",children:[(0,a.jsx)("span",{children:"".concat(i+1,"/").concat(r.length)}),(0,a.jsx)("h2",{className:"max-w-xl pt-1 text-center text-sm font-semibold",children:r[i].title})]}),r.length>1&&(0,a.jsxs)("div",{className:"absolute right-4 bottom-0 flex items-center justify-end space-x-2",children:[(0,a.jsx)("button",{type:"button",onClick:()=>x(),className:"bg-murky-700 flex items-center justify-center rounded-md p-1.5",children:(0,a.jsx)(n.Z,{className:"h-4 w-4"})}),(0,a.jsx)("button",{type:"button",onClick:()=>p(),className:"bg-murky-700 flex items-center justify-center rounded-md p-1.5",children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})]})]}),(0,a.jsx)("div",{className:"prose prose-sm px-4 pb-4 text-xs text-foreground",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:r[i].content}})}),(0,a.jsx)("div",{className:"flex w-full items-center justify-start px-4 pb-2",children:(0,a.jsx)(c.XZ,{classNameLabel:"!text-xxs !ml-2",onChange:e=>s.Z.set(t,String(e.target.checked),{expires:1/8}),children:g("common:dont-show")})})]})]})})}},7559:function(e,t,r){"use strict";r.d(t,{u:function(){return c}});var a=r(85893),n=r(34240),o=r(11355),s=r(31415),l=r(86010),i=r(67294);let d={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl","6xl":"sm:max-w-6xl","7xl":"sm:max-w-7xl"},c=e=>{let{title:t,show:r=!1,maxWidth:c="2xl",closeable:u=!0,onClose:m=()=>{},classNameHeader:x,classNamePanel:p,children:h}=e,g=i.useRef(null),f=d[c];return(0,a.jsx)(o.u.Root,{show:r,as:i.Fragment,children:(0,a.jsxs)(n.V,{as:"div",className:"relative z-50 font-sans",initialFocus:g,onClose:()=>{u&&m()},children:[(0,a.jsx)(o.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-muted/75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsx)(o.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(n.V.Panel,{className:(0,l.Z)("relative w-full transform overflow-hidden rounded-2xl bg-background text-left shadow-xl transition-all sm:my-8",f,p),children:[u&&(0,a.jsx)("div",{className:"absolute right-0 top-0 z-40 block pr-4 pt-4",children:(0,a.jsxs)("button",{type:"button",className:"rounded-md bg-background text-foreground hover:text-foreground/75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",onClick:()=>m(),children:[(0,a.jsx)("span",{className:"sr-only",children:"Close"}),(0,a.jsx)(s.Z,{className:"h-6 w-6","aria-hidden":"true"})]})}),t&&(0,a.jsx)(n.V.Title,{as:"h2",className:(0,l.Z)("pb-2 pt-4 text-center text-sm font-semibold leading-6 text-foreground",x),children:t}),h]})})})})]})})}},73308:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var a=r(85893);r(67294);let n={"very-small":"w-[4rem]",small:"w-[4.5rem]",medium:"w-24",large:"w-36"},o={"top-left":{wrapper:"-top-[9px] -left-[9px]",shadeOne:"top-0 right-0",shadeTwo:"bottom-0 left-0",banner:"bottom-0 left-0 -rotate-45 origin-bottom-left"},"top-right":{wrapper:"-top-[9px] -right-[9px]",shadeOne:"top-0 left-0",shadeTwo:"bottom-0 right-0",banner:"bottom-0 right-0 rotate-45 origin-bottom-right"},"bottom-left":{wrapper:"-bottom-[9px] -left-[9px]",shadeOne:"top-0 left-0",shadeTwo:"bottom-0 right-0",banner:"top-0 left-0 rotate-45 origin-top-left"},"bottom-right":{wrapper:"-bottom-[9px] -right-[9px]",shadeOne:"top-0 right-0",shadeTwo:"bottom-0 left-0",banner:"top-0 right-0 -rotate-45 origin-top-right"}},s={orange:{shades:"bg-orange-700",banner:"bg-orange-500 text-foreground"},red:{shades:"bg-destructive",banner:"bg-rose-300 text-rose-800"},amber:{shades:"bg-amber-500",banner:"bg-amber-300 text-amber-800"},green:{shades:"bg-green-500",banner:"bg-green-300 text-green-800"},purple:{shades:"bg-purple-500",banner:"bg-purple-300 text-purple-800"},cyan:{shades:"bg-cyan-500",banner:"bg-cyan-300 text-cyan-800"},primary:{shades:"bg-primary/50",banner:"bg-primary text-primary-foreground"}},l=e=>{let{position:t="top-right",size:r="medium",color:l="amber",children:i}=e;return(0,a.jsxs)("div",{className:"".concat(n[r]," absolute aspect-square ").concat(o[t].wrapper," overflow-hidden rounded-sm"),children:[(0,a.jsx)("div",{className:"absolute ".concat(o[t].shadeOne," ").concat(s[l].shades," h-2 w-2")}),(0,a.jsx)("div",{className:"absolute ".concat(o[t].shadeTwo," ").concat(s[l].shades," h-2 w-2")}),(0,a.jsx)("div",{className:"absolute block w-square-diagonal py-1 text-center text-xxs font-semibold uppercase ".concat(o[t].banner," shadow-sm ").concat(s[l].banner),children:i})]})}},50423:function(e,t,r){"use strict";r.d(t,{B:function(){return o}});var a=r(65325),n=r(36492);let o=(e,t)=>(0,n.a)({queryKey:["popup",e],queryFn:async()=>{let{data:t}=await a.h.get("/popup",{params:{filter:"popups.is_active:true,popups.shows_on:%!".concat(e)}});return t},enabled:!!e,refetchOnWindowFocus:!1,retry:!1,...t})},62062:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return U},default:function(){return Q}});var a=r(85893),n=r(65325),o=r(36492);let s=()=>(0,o.a)({queryKey:["banner"],queryFn:async()=>{let{data:e}=await n.h.get("/banner",{});return e.data},refetchOnWindowFocus:!1});var l=r(63151),i=r(50423),d=r(59965),c=r(86010),u=r(47788),m=r(31955),x=r(98814),p=r(64998),h=r(96085),g=r(28677),f=r(67294),v=r(25103),b=r(25675),j=r.n(b),y=r(6756);function w(e){let{className:t,reverse:r,pauseOnHover:n=!1,children:o,vertical:s=!1,repeat:l=4,...i}=e;return(0,a.jsx)("div",{...i,className:(0,y.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!s,"flex-col":s},t),children:Array(l).fill(0).map((e,t)=>(0,a.jsx)("div",{"data-run-marquee":!s&&l>3,"data-run-marquee-vertical":s&&l>3,className:(0,y.cn)("flex shrink-0 justify-around [gap:var(--gap)] data-[run-marquee-vertical=true]:animate-marquee-vertical data-[run-marquee=true]:animate-marquee data-[run-marquee]:flex-row data-[run-marquee-vertical=true]:flex-col",{"group-hover:[animation-play-state:paused]":n,"[animation-direction:reverse]":r}),children:o},t))})}var N=r(48460),k=r(7189),C=r(73308);let q=e=>{let{targetDate:t}=e,[r,n]=f.useState(0);return f.useEffect(()=>{let e=setInterval(()=>{n(t-new Date().getTime())},1e3);return()=>{clearInterval(e)}},[t]),(0,a.jsxs)("div",{className:"flex items-center gap-1 text-sm capitalize",children:[(0,a.jsx)("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-background",children:Math.floor(r/864e5)}),(0,a.jsx)("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-background",children:Math.floor(r%864e5/36e5)}),(0,a.jsx)("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-background",children:Math.floor(r%36e5/6e4)}),(0,a.jsx)("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-background",children:Math.floor(r%6e4/1e3)})]})},T=e=>{let{productName:t,productVariantName:r,price:n,originalPrice:o,image:s,currency:l,productHandle:i,productVariantCode:d}=e;return(0,a.jsxs)(k.r,{href:"/".concat(i,"?pvc=").concat(d),className:(0,y.cn)(["relative w-[265px] cursor-pointer rounded-xl border p-4","border-muted/75 bg-muted/50 hover:bg-muted/60"]),children:[(0,a.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[s&&(0,a.jsx)(j(),{className:"rounded-lg bg-muted",width:"48",height:"48",alt:"",src:s}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("figcaption",{className:"text-sm font-medium text-foreground",children:t}),(0,a.jsx)("p",{className:"text-xs font-medium text-destructive line-through",children:(0,N.lb)(o,l)}),(0,a.jsx)("p",{className:"text-xs font-medium text-primary",children:(0,N.lb)(n,l)})]})]}),(0,a.jsx)("div",{className:"mt-2 text-sm text-foreground",children:r}),(0,a.jsxs)(C.V,{size:"medium",color:"primary",children:["HEMAT ",(0,N.lb)(o-n,l)]})]})},_=e=>{var t,r,s,l,i,d,c,u,m,x,p;let{config:h}=e,{t:f}=(0,g.$G)("home"),{data:v}=(0,o.a)({queryKey:["flash-sale",p],queryFn:async()=>{let{data:e}=await n.h.get("/flash-sale",{params:p});return e}});return(null==v?void 0:null===(t=v.data)||void 0===t?void 0:t.length)?(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"rounded-2xl bg-muted/50",children:[(0,a.jsxs)("div",{className:"px-4 pb-3 pt-4",children:[(0,a.jsxs)("h3",{className:"flex items-center space-x-4 text-foreground",children:[(0,a.jsx)("div",{className:"text-lg font-semibold uppercase leading-relaxed tracking-wider",children:(null===(s=h.content)||void 0===s?void 0:null===(r=s.flashSale)||void 0===r?void 0:r.title)||"⚡️ ".concat(f("home:flashsale"))}),(null===(i=h.feature)||void 0===i?void 0:null===(l=i.flashSale)||void 0===l?void 0:l.expiredAt)&&(0,a.jsx)(q,{targetDate:new Date(null===(c=h.feature)||void 0===c?void 0:null===(d=c.flashSale)||void 0===d?void 0:d.expiredAt).getTime()})]}),(0,a.jsx)("p",{className:"pl-6 text-xs text-foreground",children:(null===(m=h.content)||void 0===m?void 0:null===(u=m.flashSale)||void 0===u?void 0:u.subtitle)||f("home:flashsale-description")})]}),(0,a.jsx)("div",{className:"relative flex h-full w-full flex-col items-center justify-center overflow-hidden pb-2 pt-1",children:(0,a.jsx)(w,{pauseOnHover:!0,className:"container [--duration:20s]",repeat:4,children:null==v?void 0:null===(x=v.data)||void 0===x?void 0:x.map(e=>(0,a.jsx)(T,{...e},e.id))})})]})}):null};var E=r(51446),S=r(31038),Z=r(22544);r(99008),r(22692);var z=r(22546),F=r(35638),O=r(42414);let A=e=>{var t;let{images:r,config:n}=e;return(0,a.jsxs)("section",{className:"relative flex items-center overflow-hidden bg-secondary/50 px-4 py-4 lg:min-h-[521.96px]",children:[(0,a.jsxs)(z.tq,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},loop:!0,grabCursor:!0,modules:[Z.pt,Z.W_],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},className:"container",children:[r?r.map(e=>(0,a.jsx)(z.o5,{className:"swiper-slide px-0 md:px-4",children:(0,a.jsx)(k.r,{href:e.href,children:(0,a.jsx)("div",{className:"relative aspect-[1080/424] h-full",children:(0,a.jsx)(F.J,{src:e.src,alt:e.title,fill:!0,priority:!0,sizes:"100vw",className:"rounded-3xl"})})})},e.id)):null,(0,a.jsxs)("div",{className:"z-50 hidden items-center justify-end space-x-2 md:flex",children:[(0,a.jsx)("button",{type:"button",className:"swiper-button swiper-button-prev !ml-8",children:(0,a.jsx)("div",{className:"flex aspect-square h-12 w-12 scale-75 items-center justify-center rounded-full bg-muted/50 shadow-2xl sm:scale-100",children:(0,a.jsx)(E.Z,{className:"h-8 w-8 pr-1"})})}),(0,a.jsx)("button",{type:"button",className:"swiper-button swiper-button-next !mr-8",children:(0,a.jsx)("div",{className:"flex aspect-square h-12 w-12 scale-75 items-center justify-center rounded-full bg-muted/50 shadow-2xl sm:scale-100",children:(0,a.jsx)(S.Z,{className:"h-8 w-8 pl-1"})})})]})]}),(null==n?void 0:null===(t=n.meta)||void 0===t?void 0:t.title)==="TAKAPEDIA"&&(0,a.jsx)(O.H,{number:50})]})};var D=r(88961),P=r(61368),I=r(43484),M=r(8624);let H=e=>{let{product:t,background:r,foreground:n,image:o,type:s}=e;return(0,a.jsx)(u.E.li,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},className:"[--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",children:(0,a.jsx)(k.r,{href:"/".concat(t.handle),className:(0,c.Z)(["flex items-center gap-x-2 rounded-[--card-radius] bg-muted text-foreground duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background md:gap-x-3","bg-title-product",!!r&&("popular"===s?"bg-popular-background":"bg-recommendation-background"),!!n&&("popular"===s?"text-popular-foreground":"text-recommendation-foreground"),!!o&&"".concat("popular"===s?"bg-popular-image":"bg-recommendation-image"," bg-cover bg-center bg-no-repeat")]),children:(0,a.jsxs)("div",{className:"flex items-center gap-3 p-[--card-padding]",children:[(0,a.jsx)(F.J,{src:t.thumbnail,alt:t.title,width:56,height:56,priority:!0,className:"aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center ring-1 ring-background md:h-20 md:w-20"}),(0,a.jsxs)("div",{className:"relative flex w-full flex-col",children:[(0,a.jsx)("h2",{className:"w-[80px] truncate text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]",children:t.title}),(0,a.jsx)("p",{className:"text-xxs text-foreground md:text-sm",children:t.publisher})]})]})})},t.code)},R=e=>{let{product:t,background:r,foreground:n,image:o,type:s}=e;return(0,a.jsx)(u.E.li,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},className:(0,y.cn)("[--card-padding:theme(spacing.4)] [--card-radius:theme(borderRadius.2xl)]",["rounded-[--card-radius] bg-muted",!!r&&("popular"===s?"bg-popular-background":"bg-recommendation-background"),!!n&&("popular"===s?"text-popular-foreground":"text-recommendation-foreground"),!!o&&"".concat("popular"===s?"bg-popular-image":"bg-recommendation-image"," bg-cover bg-center bg-no-repeat")]),children:(0,a.jsxs)("div",{className:"flex h-full w-full flex-col items-center rounded-[--card-radius] border md:flex-row",children:[(0,a.jsx)("div",{className:"h-full w-full md:w-1/2",children:(0,a.jsx)("div",{className:"relative aspect-square h-[100px] w-full overflow-hidden rounded-[--card-radius] object-cover outline outline-2 outline-offset-2 outline-primary md:h-full md:w-auto forced-colors:outline-[Highlight]",children:(0,a.jsx)(F.J,{src:t.thumbnail,alt:t.title,className:"object-cover object-top",fill:!0})})}),(0,a.jsxs)("div",{className:"relative flex h-full w-full flex-col justify-between p-[--card-padding]",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"line-clamp-1 font-semibold",children:t.title}),(0,a.jsx)("p",{className:"text-xs font-medium",children:t.publisher})]}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsx)(I.z,{type:"button",className:"w-full uppercase md:w-auto",size:"sm",asChild:!0,children:(0,a.jsxs)(k.r,{href:"/".concat(t.handle),children:[(0,a.jsx)(h.Z,{className:"mr-2 h-4 w-4"}),(0,a.jsx)("span",{children:"Top Up"})]})})}),(0,a.jsx)("span",{className:"absolute bottom-3 right-3 hidden rounded-md border bg-secondary px-1.5 py-0.5 text-xs uppercase text-secondary-foreground lg:block",children:t.code})]})]})},t.code)},J=e=>{let{product:t,background:r,foreground:n,image:o,type:s}=e;return(0,a.jsx)(u.E.li,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},className:"[--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",children:(0,a.jsx)(k.r,{href:"/".concat(t.handle),className:(0,c.Z)(["flex items-center gap-x-2 rounded-[--card-radius] bg-muted duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background md:gap-x-3",!!r&&("popular"===s?"bg-popular-background":"bg-recommendation-background"),!!n&&("popular"===s?"text-popular-foreground":"text-recommendation-foreground"),!!o&&"".concat("popular"===s?"bg-popular-image":"bg-recommendation-image"," bg-cover bg-center bg-no-repeat")]),children:(0,a.jsxs)("div",{className:"flex items-center gap-3 p-[--card-padding]",children:[(0,a.jsx)(F.J,{src:t.thumbnail,alt:t.title,width:56,height:56,priority:!0,className:"aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center ring-1 ring-background md:h-20 md:w-20"}),(0,a.jsxs)("div",{className:"relative flex w-full flex-col",children:[(0,a.jsx)("h2",{className:"w-[100px] truncate font-bjcredits text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]",children:t.title}),(0,a.jsx)("p",{className:"text-xxs text-foreground md:text-sm",children:t.publisher})]})]})})},t.code)},G=e=>{let{product:t,background:r,foreground:n,image:o}=e;return(0,a.jsx)(u.E.li,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},whileHover:{scale:1.025,transition:{duration:.1}},className:"[--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",children:(0,a.jsxs)(k.r,{href:"/".concat(t.handle),className:"group relative",children:[(0,a.jsxs)("div",{className:(0,y.cn)("relative flex h-[4.5rem] items-center gap-x-1.5 overflow-hidden rounded-t-xl bg-muted p-1.5 shadow-xl sm:h-24 md:gap-x-3 md:p-3"),children:[(0,a.jsx)(F.J,{src:t.thumbnail,alt:t.title,className:"object-cover object-[100%_10%] grayscale group-focus-within:grayscale-0 group-hover:grayscale-0 md:object-[100%_20%]",fill:!0}),(0,a.jsx)("div",{className:"from-secondary-400 absolute inset-0 bg-gradient-to-r to-transparent"})]}),(0,a.jsxs)("div",{className:(0,c.Z)(["flex flex-col items-start justify-between rounded-b-xl bg-primary bg-contain bg-[120px] bg-no-repeat px-4 py-2 sm:bg-right md:flex-row md:items-center md:py-4",!!r&&"bg-popular-background",!!n&&"text-popular-foreground",!!o&&"bg-popular-image"]),children:[(0,a.jsx)("h2",{className:(0,c.Z)("font-chakra text-xs font-semibold text-primary-foreground sm:text-base"),children:t.title}),(0,a.jsx)("h3",{className:"font-chakra text-xxs font-medium text-primary-foreground sm:text-xs",children:t.publisher})]})]})},t.code)},V=e=>{var t,r,n,o;let{config:s}=e,[l,i]=f.useState([]),{t:d}=(0,g.$G)("home");return(f.useEffect(()=>{let e=localStorage.getItem("recent-products");e&&i(JSON.parse(e))},[]),l&&0!==l.length)?(0,a.jsxs)("div",{className:"md:container",children:[(0,a.jsxs)("div",{className:"mb-5 text-foreground",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold uppercase leading-relaxed tracking-wider",children:(null===(r=s.content)||void 0===r?void 0:null===(t=r.recommendation)||void 0===t?void 0:t.title)||"✨ ".concat(d("home:recomendation"))}),(0,a.jsx)("p",{className:"pl-6 text-xs",children:(null===(o=s.content)||void 0===o?void 0:null===(n=o.recommendation)||void 0===n?void 0:n.subtitle)||d("home:recomendation-description")})]}),l&&l.length>0&&(0,a.jsx)(u.E.ul,{variants:{hidden:{opacity:1,scale:1},visible:{opacity:1,scale:1,transition:{delayChildren:.2,staggerChildren:.1}}},initial:"hidden",animate:"visible",className:"grid grid-cols-2 gap-4 bg-muted/50 p-3 md:grid-cols-3 md:rounded-3xl lg:min-h-[120px]",children:l.map(e=>{var t,r,n,o,l,i,d,c;return(0,a.jsxs)(f.Fragment,{children:[(null===(r=s.content)||void 0===r?void 0:null===(t=r.recommendation)||void 0===t?void 0:t.card)===1&&(0,a.jsx)(H,{type:"recommendation",product:e,background:s.content.recommendation.background,foreground:s.content.recommendation.foreground,image:s.content.recommendation.image}),(null===(o=s.content)||void 0===o?void 0:null===(n=o.recommendation)||void 0===n?void 0:n.card)===2&&(0,a.jsx)(R,{type:"recommendation",product:e,background:s.content.recommendation.background,foreground:s.content.recommendation.foreground,image:s.content.recommendation.image}),(null===(i=s.content)||void 0===i?void 0:null===(l=i.recommendation)||void 0===l?void 0:l.card)===3&&(0,a.jsx)(J,{type:"recommendation",product:e,background:s.content.recommendation.background,foreground:s.content.recommendation.foreground,image:s.content.recommendation.image}),(null===(c=s.content)||void 0===c?void 0:null===(d=c.recommendation)||void 0===d?void 0:d.card)===101&&(0,a.jsx)(G,{type:"recommendation",product:e,background:s.content.recommendation.background,foreground:s.content.recommendation.foreground,image:s.content.recommendation.image})]},e.code)})})]}):null},$=e=>{var t,r,n,o;let{config:s}=e,{data:i}=(0,l.$3)({},!0),{t:d}=(0,g.$G)("home");return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"mb-5 text-foreground",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold uppercase leading-relaxed tracking-wider",children:(null===(r=s.content)||void 0===r?void 0:null===(t=r.popular)||void 0===t?void 0:t.title)||"\uD83D\uDD25 ".concat(d("home:popular"))}),(0,a.jsx)("p",{className:"pl-6 text-xs",children:(null===(o=s.content)||void 0===o?void 0:null===(n=o.popular)||void 0===n?void 0:n.subtitle)||d("home:popular-description")})]}),i&&i.length>0?(0,a.jsx)(u.E.ul,{variants:{hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.2,staggerChildren:.1}}},initial:"hidden",animate:"visible",className:"grid grid-cols-2 gap-4 md:grid-cols-3",children:i.map(e=>{var t,r,n,o,l,i,d,c;return(0,a.jsxs)(f.Fragment,{children:[(null===(r=s.content)||void 0===r?void 0:null===(t=r.popular)||void 0===t?void 0:t.card)===1&&(0,a.jsx)(H,{type:"popular",product:e,background:s.content.popular.background,foreground:s.content.popular.foreground,image:s.content.popular.image}),(null===(o=s.content)||void 0===o?void 0:null===(n=o.popular)||void 0===n?void 0:n.card)===2&&(0,a.jsx)(R,{type:"popular",product:e,background:s.content.popular.background,foreground:s.content.popular.foreground,image:s.content.popular.image}),(null===(i=s.content)||void 0===i?void 0:null===(l=i.popular)||void 0===l?void 0:l.card)===3&&(0,a.jsx)(J,{type:"popular",product:e,background:s.content.popular.background,foreground:s.content.popular.foreground,image:s.content.popular.image}),(null===(c=s.content)||void 0===c?void 0:null===(d=c.popular)||void 0===d?void 0:d.card)===101&&(0,a.jsx)(G,{type:"popular",product:e,background:s.content.popular.background,foreground:s.content.popular.foreground,image:s.content.popular.image})]},e.code)})}):(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-3",children:Array.from({length:9},(e,t)=>t).map(e=>(0,a.jsx)("div",{className:"h-[96px] w-full animate-pulse rounded-lg bg-muted"},e))})]})},L=(0,u.E)(k.r),K=e=>{let{product:t}=e;return(0,a.jsx)(L,{href:"/".concat(t.handle),whileTap:{scale:.9},whileHover:{scale:1.05,transition:{duration:.1}},variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},children:(0,a.jsxs)("div",{className:"group relative transform overflow-hidden rounded-2xl bg-muted duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background",children:[(0,a.jsx)(F.J,{src:t.thumbnail,alt:t.title,width:192,height:288,priority:!0,className:"aspect-[4/6] object-cover object-center"}),(0,a.jsxs)("article",{className:"absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4",children:[(0,a.jsx)("h2",{className:"truncate text-sm font-semibold text-foreground sm:text-base",children:t.title}),(0,a.jsx)("p",{className:"truncate text-xxs text-foreground sm:text-xs",children:t.publisher})]}),(0,a.jsx)("div",{className:"absolute inset-0 transform bg-gradient-to-t from-transparent transition-all duration-300 group-hover:from-background"})]})})},W=e=>{let{product:t}=e;return(0,a.jsx)(L,{href:"/".concat(t.handle),whileTap:{scale:.9},whileHover:{scale:1.05,transition:{duration:.1}},variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},children:(0,a.jsxs)("div",{className:"group relative transform overflow-hidden rounded-xl bg-muted duration-300 ease-in-out hover:rotate-3 hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background",children:[(0,a.jsx)(F.J,{src:t.thumbnail,alt:t.title,width:192,height:288,priority:!0,className:"aspect-square object-cover object-center"}),(0,a.jsx)("div",{className:"bg-muted py-2",children:(0,a.jsxs)("div",{className:"flex flex-col px-3 py-1",children:[(0,a.jsx)("h2",{className:"truncate text-sm font-semibold text-foreground sm:text-base",children:t.title}),(0,a.jsx)("p",{className:"truncate text-xxs text-foreground sm:text-xs",children:t.publisher})]})})]})})},X=e=>{let{config:t}=e,{data:r,isLoading:n,isSuccess:o}=(0,l.Pt)(),s=()=>{let e=document.querySelector(".hide-scrollbar");e&&e.scrollTo({left:e.scrollLeft+200,behavior:"smooth"})},i=()=>{let e=document.querySelector(".hide-scrollbar");e&&e.scrollTo({left:e.scrollLeft-200,behavior:"smooth"})};return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(d.O.Group,{children:[(0,a.jsxs)(d.O.List,{children:[n&&(0,a.jsx)("div",{className:"hide-scrollbar -mb-px flex space-x-3 overflow-auto",children:Array.from({length:6},(e,t)=>t).map(e=>(0,a.jsx)("div",{className:"h-9 w-24 animate-pulse whitespace-nowrap rounded-lg bg-muted px-4 py-2 text-sm outline-none"},e))}),o&&(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{className:"block lg:hidden",children:(0,a.jsx)(I.z,{type:"button",size:"icon-sm",onClick:()=>i(),children:(0,a.jsx)(x.Z,{className:"h-4 w-4 "})})}),(0,a.jsx)("div",{className:"hide-scrollbar -mb-px flex transform items-center gap-2 space-x-3 overflow-auto duration-300 ease-in-out",children:null==r?void 0:r.map(e=>(0,a.jsx)(d.O,{className:e=>{let{selected:t}=e;return(0,y.cn)("whitespace-nowrap rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground outline-none duration-300 focus:bg-primary focus-visible:bg-primary",t&&"bg-primary text-primary-foreground hover:bg-primary/75")},children:e.name},e.name))}),(0,a.jsx)("div",{className:"block lg:hidden",children:(0,a.jsx)(I.z,{type:"button",size:"icon-sm",onClick:()=>s(),children:(0,a.jsx)(p.Z,{className:"h-4 w-4 "})})})]})]}),(0,a.jsxs)(d.O.Panels,{children:[n&&(0,a.jsx)("div",{className:"my-8 grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5 xl:grid-cols-6",children:Array.from({length:12},(e,t)=>t).map(e=>(0,a.jsx)("div",{className:"relative aspect-[4/6] w-full animate-pulse overflow-hidden rounded-xl bg-muted"},e))}),o&&(0,a.jsx)("ul",{className:"my-8",children:null==r?void 0:r.map((e,r)=>{let{products:n}=e;return(0,a.jsx)(B,{products:n,config:t},r)})})]})]})})},B=f.memo(function(e){let{products:t,config:r}=e,[n,o]=f.useState(1),[s,l]=f.useState([]),{t:i}=(0,g.$G)("home");return(f.useEffect(()=>{if(n>1){let e=t.slice((n-1)*12,12*n);l(t=>[...t,...e])}else l(t.slice((n-1)*12,12*n))},[n]),0===s.length)?null:(0,a.jsx)(d.O.Panel,{children:s.length&&(0,a.jsxs)("div",{children:[(0,a.jsx)(u.E.div,{variants:{hidden:{opacity:1,scale:1},visible:{opacity:1,scale:1,transition:{delayChildren:.1,staggerChildren:.05}}},initial:"hidden",animate:"visible",className:"mb-4 grid grid-cols-3 gap-4 sm:mb-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5 xl:grid-cols-6",children:s.map(e=>{var t,n,o,s;return(0,a.jsxs)(f.Fragment,{children:[(null===(n=r.content)||void 0===n?void 0:null===(t=n.product)||void 0===t?void 0:t.card)===1&&(0,a.jsx)(K,{product:e,type:"product"},e.code),(null===(s=r.content)||void 0===s?void 0:null===(o=s.product)||void 0===o?void 0:o.card)===2&&(0,a.jsx)(W,{product:e,type:"product"},e.code)]},e.code)})}),(0,a.jsx)("div",{className:(0,y.cn)("text-center",t.length<=s.length?"hidden":""),children:(0,a.jsx)(I.z,{type:"button",variant:"secondary",onClick:()=>{o(e=>e+1)},children:i("common:load-more")})})]})})});var U=!0,Q=(0,M.Z)(e=>{var t,n,o,l,d,c;let{config:u}=e,[x,p]=f.useState(!1),[h,g]=f.useState([]),[v,b]=f.useState(0),j=s();(0,i.B)("home",{onSuccess:e=>{g(e.data);let t=m.Z.get("dont-show-home");!t&&e.data.length>0&&setTimeout(()=>{y()},1e3)}});let y=f.useCallback(()=>{p(!0),b(0)},[]),w=f.useCallback(()=>{p(!1),b(0)},[]),N=f.useCallback(()=>{b(e=>0===e?h.length-1:e-1)},[h.length]),k=f.useCallback(()=>{b(e=>e===h.length-1?0:e+1)},[h.length]);return f.useEffect(()=>{x&&setTimeout(()=>{w()},1e5)},[x,w]),f.useEffect(()=>{var e;(null==u?void 0:null===(e=u.analytic)||void 0===e?void 0:e.facebook)&&r.e(7831).then(r.t.bind(r,97831,23)).then(e=>e.Pixel).then(e=>{if(e){var t;e.initialize({pixelId:null==u?void 0:null===(t=u.analytic)||void 0===t?void 0:t.facebook}),e.pageView()}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P.H,{meta:u.meta}),(0,a.jsx)(A,{images:j.data,config:u}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-8 pt-8",children:[(null===(n=u.feature)||void 0===n?void 0:null===(t=n.flashSale)||void 0===t?void 0:t.isActive)&&new Date(null===(l=u.feature)||void 0===l?void 0:null===(o=l.flashSale)||void 0===o?void 0:o.expiredAt).getTime()>new Date().getTime()&&(0,a.jsx)(_,{config:u}),(null===(d=u.feature)||void 0===d?void 0:d.hasRecommendation)&&(0,a.jsx)(V,{config:u}),(null===(c=u.feature)||void 0===c?void 0:c.hasPopular)&&(0,a.jsx)($,{config:u}),(0,a.jsx)(X,{config:u})]}),(0,a.jsx)(D.q,{kuki:"dont-show-home",isOpen:x,images:h,currentImage:v,handleNext:k,handlePrevious:N,handleClose:w})]})},"optional",v.Z)}},function(e){e.O(0,[6222,7731,7093,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);