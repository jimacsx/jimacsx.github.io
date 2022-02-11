"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[362],{3529:function(e,o,n){n.r(o),n.d(o,{Dashboard:function(){return ue},default:function(){return pe}});var t=n(4942),a=n(885),r=n(2791),i=n(6871),s=n(6445),c=n(4554),l=n(890),d=n(5228),u=n(3896),p=n(1889),h=n(703),v=n(3366),Z=n(7462),x=n(8182),f=n(767),m=n(1046),g=n(7630),j=n(5159),b=n(208);function y(e){return(0,j.Z)("MuiCardHeader",e)}var w=(0,b.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),S=n(184),R=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],C=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,o){var n;return(0,Z.Z)((n={},(0,t.Z)(n,"& .".concat(w.title),o.title),(0,t.Z)(n,"& .".concat(w.subheader),o.subheader),n),o.root)}})({display:"flex",alignItems:"center",padding:16}),P=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,o){return o.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),z=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,o){return o.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),M=(0,g.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,o){return o.content}})({flex:"1 1 auto"}),H=r.forwardRef((function(e,o){var n=(0,m.Z)({props:e,name:"MuiCardHeader"}),t=n.action,a=n.avatar,r=n.className,i=n.component,s=void 0===i?"div":i,c=n.disableTypography,d=void 0!==c&&c,u=n.subheader,p=n.subheaderTypographyProps,h=n.title,g=n.titleTypographyProps,j=(0,v.Z)(n,R),b=(0,Z.Z)({},n,{component:s,disableTypography:d}),w=function(e){var o=e.classes;return(0,f.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},y,o)}(b),H=h;null==H||H.type===l.Z||d||(H=(0,S.jsx)(l.Z,(0,Z.Z)({variant:a?"body2":"h5",className:w.title,component:"span",display:"block"},g,{children:H})));var N=u;return null==N||N.type===l.Z||d||(N=(0,S.jsx)(l.Z,(0,Z.Z)({variant:a?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:N}))),(0,S.jsxs)(C,(0,Z.Z)({className:(0,x.Z)(w.root,r),as:s,ref:o,ownerState:b},j,{children:[a&&(0,S.jsx)(P,{className:w.avatar,ownerState:b,children:a}),(0,S.jsxs)(M,{className:w.content,ownerState:b,children:[H,N]}),t&&(0,S.jsx)(z,{className:w.action,ownerState:b,children:t})]}))})),N=n(7924);function k(e){return(0,j.Z)("MuiCardContent",e)}(0,b.Z)("MuiCardContent",["root"]);var T=["className","component"],I=(0,g.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),B=r.forwardRef((function(e,o){var n=(0,m.Z)({props:e,name:"MuiCardContent"}),t=n.className,a=n.component,r=void 0===a?"div":a,i=(0,v.Z)(n,T),s=(0,Z.Z)({},n,{component:r}),c=function(e){var o=e.classes;return(0,f.Z)({root:["root"]},k,o)}(s);return(0,S.jsx)(I,(0,Z.Z)({as:r,className:(0,x.Z)(c.root,t),ownerState:s,ref:o},i))})),A=n(3239),W=n(1225),F=n(3175),L=function(){var e=(0,r.useState)({id:"1",value:"\xdaltimos 7 d\xedas"}),o=(0,a.Z)(e,2),n=o[0],t=o[1],i=(0,r.useState)(void 0),s=(0,a.Z)(i,2),l=s[0],d=s[1],u=(0,r.useState)(void 0),p=(0,a.Z)(u,2),v=p[0],Z=p[1],x=(0,r.useState)(void 0),f=(0,a.Z)(x,2),m=f[0],g=f[1],j=(0,r.useCallback)((function(e){t(e)}),[]);return(0,r.useEffect)((function(){if(n){var e=n.id;"1"===e?(d([1e3,250]),Z(["Pagadas","Pendientes"]),g(["".concat(F.w.colorSuccess),"".concat(F.w.colorWarning),"".concat(F.w.colorDanger)])):"2"===e?(d([1e3,50,100]),Z(["Pagadas","Pendientes","Canceladas"]),g(["".concat(F.w.colorSuccess),"".concat(F.w.colorWarning),"".concat(F.w.colorDanger)])):"3"===e&&(d([1e6,1e5,1e5,5e5]),Z(["Pagadas","Pendientes","Canceladas","Facturadas"]),g(["".concat(F.w.colorSuccess),"".concat(F.w.colorWarning),"".concat(F.w.colorDanger),"".concat(F.w.colorSecondary)]))}}),[n]),(0,S.jsxs)(h.Z,{variant:"outlined",children:[(0,S.jsx)(H,{title:"Resumen de pedidos",titleTypographyProps:{variant:"h6",sx:{fontSize:18,fontWeight:500}},action:(0,S.jsx)(W.wk,{defaultValue:n,items:[{id:"1",value:"\xdaltimos 7 d\xedas"},{id:"2",value:"\xdaltimo mes"},{id:"3",value:"\xdaltimo a\xf1o"}],onChange:j})}),(0,S.jsx)(N.Z,{}),(0,S.jsx)(B,{children:null!==l&&void 0!==l&&l.length&&null!==v&&void 0!==v&&v.length&&null!==m&&void 0!==m&&m.length?(0,S.jsx)(W.YE,{series:l,labels:v,colors:m,height:250}):(0,S.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:480},children:(0,S.jsx)(A.Z,{size:60})})})]})},V=n(493),E=n(5484),D=n(9333),q=n(6259),O=n(6112),Q=n(2065),Y=n(533),G=n(4036);function J(e){return(0,j.Z)("MuiIconButton",e)}var K=(0,b.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),U=["edge","children","className","color","disabled","disableFocusRipple","size"],X=(0,g.ZP)(Y.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,"default"!==n.color&&o["color".concat((0,G.Z)(n.color))],n.edge&&o["edge".concat((0,G.Z)(n.edge))],o["size".concat((0,G.Z)(n.size))]]}})((function(e){var o=e.theme,n=e.ownerState;return(0,Z.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:o.palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:(0,Q.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var o=e.theme,n=e.ownerState;return(0,Z.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,Z.Z)({color:o.palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:(0,Q.Fq)(o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===n.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,t.Z)({},"&.".concat(K.disabled),{backgroundColor:"transparent",color:o.palette.action.disabled}))})),$=r.forwardRef((function(e,o){var n=(0,m.Z)({props:e,name:"MuiIconButton"}),t=n.edge,a=void 0!==t&&t,r=n.children,i=n.className,s=n.color,c=void 0===s?"default":s,l=n.disabled,d=void 0!==l&&l,u=n.disableFocusRipple,p=void 0!==u&&u,h=n.size,g=void 0===h?"medium":h,j=(0,v.Z)(n,U),b=(0,Z.Z)({},n,{edge:a,color:c,disabled:d,disableFocusRipple:p,size:g}),y=function(e){var o=e.classes,n=e.disabled,t=e.color,a=e.edge,r=e.size,i={root:["root",n&&"disabled","default"!==t&&"color".concat((0,G.Z)(t)),a&&"edge".concat((0,G.Z)(a)),"size".concat((0,G.Z)(r))]};return(0,f.Z)(i,J,o)}(b);return(0,S.jsx)(X,(0,Z.Z)({className:(0,x.Z)(y.root,i),centerRipple:!0,focusRipple:!p,disabled:d,ref:o,ownerState:b},j,{children:r}))})),_=n(8900),ee=n(8264),oe=function(){var e=(0,r.useState)(0),o=(0,a.Z)(e,2),n=o[0],t=o[1];return(0,r.useEffect)((function(){t(1)}),[]),(0,S.jsx)(h.Z,{variant:"outlined",children:(0,S.jsx)(V.Z,{children:(0,S.jsxs)(E.ZP,{children:[(0,S.jsx)(D.Z,{children:(0,S.jsx)(_.Z,{})}),(0,S.jsx)(q.Z,{children:"".concat(n," Pedido").concat(n>1?"s":""," pendiente").concat(n>1?"s":""," necesita").concat(n>1?"n":""," tu atenci\xf3n.")}),(0,S.jsx)(O.Z,{children:(0,S.jsx)($,{sx:{"&:hover":{bgcolor:"".concat(F.w.colorBgHover)}},children:(0,S.jsx)(ee.Z,{})})})]})})})},ne=n(3044);function te(e){return(0,j.Z)("MuiCardActions",e)}(0,b.Z)("MuiCardActions",["root","spacing"]);var ae=["disableSpacing","className"],re=(0,g.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,!n.disableSpacing&&o.spacing]}})((function(e){var o=e.ownerState;return(0,Z.Z)({display:"flex",alignItems:"center",padding:8},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),ie=r.forwardRef((function(e,o){var n=(0,m.Z)({props:e,name:"MuiCardActions"}),t=n.disableSpacing,a=void 0!==t&&t,r=n.className,i=(0,v.Z)(n,ae),s=(0,Z.Z)({},n,{disableSpacing:a}),c=function(e){var o=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,f.Z)(n,te,o)}(s);return(0,S.jsx)(re,(0,Z.Z)({className:(0,x.Z)(c.root,r),ownerState:s,ref:o},i))})),se=n(6151),ce=function(){return(0,S.jsxs)(h.Z,{variant:"outlined",children:[(0,S.jsxs)(c.Z,{sx:{p:2,display:"flex",alignItems:"center"},children:[(0,S.jsx)(c.Z,{sx:{mr:2},children:(0,S.jsx)(ne.Z,{sx:{height:56,width:56},children:(0,S.jsx)(_.Z,{})})}),(0,S.jsxs)("div",{children:[(0,S.jsx)(l.Z,{variant:"overline",sx:{fontWeight:600},children:"Pedidos"}),(0,S.jsx)(l.Z,{variant:"h6",children:"3450"})]})]}),(0,S.jsx)(N.Z,{}),(0,S.jsx)(ie,{sx:{py:1,px:3},children:(0,S.jsx)(se.Z,{variant:"text",href:"/orders/list/",disableRipple:!0,sx:{textTransform:"none",color:"".concat(F.w.colorSecondary),"&:hover":{bgcolor:"".concat(F.w.colorBgHover)}},endIcon:(0,S.jsx)(ee.Z,{}),children:"Pedidos"})})]})},le=n(2588),de=function(){return(0,S.jsxs)(h.Z,{variant:"outlined",children:[(0,S.jsxs)(c.Z,{sx:{p:2,display:"flex",alignItems:"center"},children:[(0,S.jsx)(c.Z,{sx:{mr:2},children:(0,S.jsx)(ne.Z,{sx:{height:56,width:56},children:(0,S.jsx)(le.Z,{})})}),(0,S.jsxs)("div",{children:[(0,S.jsx)(l.Z,{variant:"overline",sx:{fontWeight:600},children:"Productos"}),(0,S.jsx)(l.Z,{variant:"h6",children:"68"})]})]}),(0,S.jsx)(N.Z,{}),(0,S.jsx)(ie,{sx:{py:1,px:3},children:(0,S.jsx)(se.Z,{variant:"text",href:"/products/list/",disableRipple:!0,sx:{textTransform:"none",color:"".concat(F.w.colorSecondary),"&:hover":{bgcolor:"".concat(F.w.colorBgHover)}},endIcon:(0,S.jsx)(ee.Z,{}),children:"Productos"})})]})},ue=function(){var e=(0,r.useState)(0),o=(0,a.Z)(e,2),n=o[0],h=o[1],v=(0,i.s0)(),Z=(0,i.TH)();return(0,r.useEffect)((function(){null!==Z&&void 0!==Z&&Z.pathname.includes("sales")?h(1):h(0)}),[Z]),(0,S.jsxs)(s.Z,{maxWidth:"lg",children:[(0,S.jsxs)(c.Z,{sx:function(e){return(0,t.Z)({py:4},e.breakpoints.down("sm"),{py:2})},children:[(0,S.jsx)(l.Z,{variant:"h5",component:"h5",sx:{fontWeight:500},children:"Informes"}),(0,S.jsxs)(d.Z,{value:n,onChange:function(e,o){v(1===o?"/dashboard/sales":"/dashboard/overview")},sx:function(e){return(0,t.Z)({mt:2},e.breakpoints.down("sm"),{mt:1})},children:[(0,S.jsx)(u.Z,{label:"Visi\xf3n general",disableRipple:!0}),(0,S.jsx)(u.Z,{label:"Ventas",disableRipple:!0})]})]}),(0,S.jsx)(c.Z,{children:(0,S.jsxs)(p.ZP,{container:!0,spacing:3,children:[(0,S.jsx)(p.ZP,{item:!0,xs:12,children:(0,S.jsx)(oe,{})}),(0,S.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(ce,{})}),(0,S.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(de,{})}),(0,S.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,S.jsx)(L,{})})]})})]})},pe=ue},8264:function(e,o,n){var t=n(5318);o.Z=void 0;var a=t(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");o.Z=i},8900:function(e,o,n){var t=n(5318);o.Z=void 0;var a=t(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1 10h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"}),"RequestQuote");o.Z=i}}]);
//# sourceMappingURL=Dashboard.67f8ce64.chunk.js.map