(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3516)}])},3516:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return br}});var t=r(5893),i=r(1163),a=r(7294),o=r(8582),c=r(3903),u=r(6377),l=r(8012);function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function f(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,a=[],o=!0,c=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}}(n,e)||p(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n){return function(n){if(Array.isArray(n))return s(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||p(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){if(n){if("string"===typeof n)return s(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(n,e):void 0}}var h=function(n,e){var r=Math.floor(n()*l.Pg),t=l.$O(r);return e.find((function(n){return n.rank===t.rank&&n.suit===t.suit}))?h(n,e):t},v=function(n,e){for(var r=[],t=d(Array(e).keys()).map((function(){return function(n,e){var r=h(n,e);e.push(r);var t=h(n,e);return e.push(t),[r,t]}(n,r)})),i=[],a=0;a<5;a++){var o=h(n,r);i.push(o),r.push(o)}var c=t.map((function(n){return l.ku(d(i).concat(d(n)))}));if(1===t.length&&1===c.length){var u=f(t[0],2),s=u[0],p=u[1],v=l.c(c[0]);if(s.rank===p.rank&&("One Pair"===v||"Two Pair"===v))return null}for(var x=null,b=0;b<5;b++)try{var m=d(r),y=h(n,m);m.push(y);var j=h(n,m);m.push(j);var g=[y,j],w=l.ku(d(i).concat(d(g)));if(c.every((function(n){return w<n}))){x=g;break}}catch(k){}return x?{player:x,opponents:t,common:i}:null},x=r(5934),b=r(2293),m=r(7357),y=r(5861),j=r(155);function g(){var n,e,r=(n=["\n  min-height: 48px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return g=function(){return r},r}var w=function(n){var e=n.appName;return(0,t.jsx)(b.Z,{position:"relative",color:"inherit",elevation:1,children:(0,t.jsxs)(k,{children:[(0,t.jsx)(m.Z,{sx:{flexGrow:1}}),(0,t.jsx)(y.Z,{variant:"h5",children:e}),(0,t.jsx)(m.Z,{sx:{flexGrow:1}})]})})},k=(0,x.Z)(j.Z)(g());function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Z(){var n=O(["\n  width: 100%;\n  min-height: 40px;\n  margin-top: auto;\n  padding: 10px;\n"]);return Z=function(){return n},n}function S(){var n=O(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return n},n}var z=function(){return(0,t.jsx)(P,{children:(0,t.jsx)(A,{})})},P=x.Z.footer(Z()),A=x.Z.div(S());function I(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function N(){var n=I(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return N=function(){return n},n}function C(){var n=I(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 2.5rem;\n"]);return C=function(){return n},n}var E=function(n){var e=n.children;return(0,t.jsxs)(X,{children:[(0,t.jsx)(w,{appName:c.D}),(0,t.jsx)(M,{children:e}),(0,t.jsx)(z,{})]})},X=x.Z.main(N()),M=x.Z.div(C()),T=r(4051),_=r.n(T),R=r(4942),D=r(7001),B=r(6411),F=function(){return{isMobile:(0,B.Z)((function(n){return n.breakpoints.down("sm")}))}},U=r(6656);function $(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function q(){var n=$(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  opacity: 0.7;\n  border-radius: 4px;\n"]);return q=function(){return n},n}function H(){var n=$(["\n  background-color: ",";\n"]);return H=function(){return n},n}function G(){var n=$(["\n  background-color: ",";\n"]);return G=function(){return n},n}function W(){var n=$(["\n  background-color: ",";\n"]);return W=function(){return n},n}function Y(){var n=$(["\n  background-color: ",";\n"]);return Y=function(){return n},n}var J=function(){return(0,t.jsx)(nn,{})},K=function(){return(0,t.jsx)(en,{})},L=function(){return(0,t.jsx)(rn,{})},Q=function(){return(0,t.jsx)(tn,{})},V=x.Z.div(q()),nn=(0,x.Z)(V)(H(),(function(n){return n.theme.wordle.absent})),en=(0,x.Z)(V)(G(),(function(n){return n.theme.wordle.correct})),rn=(0,x.Z)(V)(W(),(function(n){return n.theme.wordle.partial})),tn=(0,x.Z)(V)(Y(),(function(n){return n.theme.extras.guess.rank}));function an(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function on(){var n=an(["\n  width: ","px;\n  height: ","px;\n  margin: 5px 2px;\n  position: relative;\n  cursor: pointer;\n"]);return on=function(){return n},n}function cn(){var n=an(["\n  max-width: ","px;\n"]);return cn=function(){return n},n}var un=function(n){var e=n.card,r=n.disabled,i=n.correct,a=n.partial,o=n.partialRank,c=n.click;return(0,t.jsxs)(ln,{onClick:function(){r||c(e)},children:[r&&(0,t.jsx)(J,{}),i&&(0,t.jsx)(K,{}),a&&(0,t.jsx)(L,{}),o&&(0,t.jsx)(Q,{}),(0,t.jsx)(sn,{card:e,reversed:r||i||a||o,width:40,height:58})]})},ln=x.Z.div(on(),40,58),sn=(0,x.Z)(U.Z)(cn(),40),fn=r(6932),dn=r(3134);function pn(){var n,e,r=(n=["\n  color: ",";\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return pn=function(){return r},r}var hn=function(n){var e=n.click,r=n.className;return(0,t.jsx)(dn.h,{className:r,click:e,children:(0,t.jsx)(vn,{})})},vn=(0,x.Z)(fn.Z)(pn(),(function(n){return n.theme.palette.primary.contrastText})),xn=r(3871);function bn(){var n,e,r=(n=["\n  color: ",";\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return bn=function(){return r},r}var mn=function(n){var e=n.click,r=n.className;return(0,t.jsx)(dn.h,{className:r,click:e,children:(0,t.jsx)(yn,{})})},yn=(0,x.Z)(xn.Z)(bn(),(function(n){return n.theme.palette.primary.contrastText})),jn=r(5589),gn=r(44),wn=r(2734);function kn(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function On(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){kn(n,e,r[e])}))}return n}function Zn(){var n,e,r=(n=["\n  font-size: 20px;\n  min-width: 50px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Zn=function(){return r},r}var Sn=function(n){return{id:"suit-tab-".concat(n),"aria-controls":"suit-tabpanel-".concat(n)}},zn=function(n){var e=n.value,r=n.handleChange,i=(0,wn.Z)();return(0,t.jsxs)(jn.Z,{value:e,TabIndicatorProps:{style:{backgroundColor:i.wordle.partial}},onChange:function(n,e){return r(e)},"aria-label":"tabs",centered:!0,textColor:"inherit",orientation:"vertical",children:[(0,t.jsx)(Pn,On({label:"\u2663"},Sn(0))),(0,t.jsx)(Pn,On({label:"\u2666"},Sn(1))),(0,t.jsx)(Pn,On({label:"\u2665"},Sn(2))),(0,t.jsx)(Pn,On({label:"\u2660"},Sn(3)))]})},Pn=(0,x.Z)(gn.Z)(Zn());function An(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function In(){var n=An(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return In=function(){return n},n}function Nn(){var n=An(["\n  margin: 0 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-center: center;\n"]);return Nn=function(){return n},n}function Cn(){var n=An(["\n  margin: 0 5px;\n  background: ",";\n  color: ",";\n"]);return Cn=function(){return n},n}function En(){var n=An(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return En=function(){return n},n}var Xn=function(n){var e=n.suit,r=n.value,i=n.index,a=n.diff,o=n.handleSelect;return(0,t.jsx)("div",{role:"tabpanel",hidden:r!==i,id:"suit-tabpanel-".concat(i),"aria-labelledby":"suit-tab-".concat(i),children:r===i&&(0,t.jsx)(Mn,{children:l.j6.map((function(n){var r={rank:n,suit:e};return(0,t.jsx)(un,{card:r,click:function(n){return o(n)},disabled:-1!==a.absents.findIndex((function(n){return l.Xp(n,r)})),correct:-1!==a.corrects.findIndex((function(n){return l.Xp(n,r)})),partial:-1!==a.partials.findIndex((function(n){return l.Xp(n,r)})),partialRank:-1!==a.partialRanks.findIndex((function(n){return l.Xp(n,r)}))},l.Pz(r))}))})})},Mn=x.Z.div(In()),Tn=function(n){var e=n.handleEnter,r=n.handleBackspace;return(0,t.jsxs)(_n,{children:[(0,t.jsx)(hn,{click:r}),(0,t.jsx)(mn,{click:e})]})},_n=x.Z.div(Nn()),Rn=x.Z.div(Cn(),(function(n){return n.theme.wordle.correct}),(function(n){return n.theme.palette.primary.contrastText})),Dn=x.Z.div(En()),Bn=r(8130),Fn=r(353),Un=r(9798);function $n(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function qn(){var n=$n(["\n  min-width: 400px;\n  position: relative;\n"]);return qn=function(){return n},n}function Hn(){var n=$n(["\n  min-width: 300px;\n"]);return Hn=function(){return n},n}function Gn(){var n=$n(["\n  min-width: 24px;\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  z-index: 1500;\n  background: ",";\n"]);return Gn=function(){return n},n}var Wn=function(n){var e=n.open,r=n.children,i=n.close;return F().isMobile?(0,t.jsx)(Fn.Z,{onClose:i,open:e,children:(0,t.jsxs)(Jn,{children:[(0,t.jsx)(Kn,{click:i}),r]})}):(0,t.jsx)(Fn.Z,{onClose:i,open:e,children:(0,t.jsxs)(Yn,{children:[(0,t.jsx)(Kn,{click:i}),r]})})},Yn=x.Z.div(qn()),Jn=(0,x.Z)(Yn)(Hn()),Kn=(0,x.Z)(Un.P)(Gn(),(function(n){var e=n.theme;return"light"===e.palette.mode?e.extras.black:e.extras.white})),Ln=r(3321);function Qn(){var n,e,r=(n=["\n  background: ",";\n  color: ",";\n\n  &:hover {\n    background: ",";\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Qn=function(){return r},r}var Vn=function(n){var e=n.click,r=n.children,i=n.className;return(0,t.jsx)(ne,{className:i,disableRipple:!0,onClick:e,children:r})},ne=(0,x.Z)(Ln.Z)(Qn(),(function(n){return n.theme.wordle.correct}),(function(n){return n.theme.extras.white}),(function(n){return n.theme.wordle.correct}));function ee(){var n,e,r=(n=["\n  width: 128px;\n  height: 42px;\n  font-weight: bold;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return ee=function(){return r},r}var re=(0,x.Z)(Vn)(ee());function te(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function ie(){var n=te(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return ie=function(){return n},n}function ae(){var n=te(["\n  margin-top: 10px;\n"]);return ae=function(){return n},n}function oe(){var n=te(["\n  margin-top: 10px;\n  width: 128px;\n  height: 42px;\n  font-weight: bold;\n"]);return oe=function(){return n},n}function ce(){var n=te(["\n  margin-top: 10px;\n  font-size: 28px;\n"]);return ce=function(){return n},n}function ue(){var n=te(["\n  margin: 20px;\n"]);return ue=function(){return n},n}function le(){var n=te(["\n  margin-top: 10px;\n"]);return le=function(){return n},n}var se=function(n){var e=n.play,r=(0,a.useState)(!1),i=r[0],o=r[1],c=new Date,u=new Date(c.getFullYear(),c.getMonth(),c.getDate()+1);return(0,t.jsxs)(de,{children:[(0,t.jsx)(y.Z,{variant:"h5",children:"Next Poker"}),i?(0,t.jsx)(pe,{click:e,children:"Play Now!"}):(0,t.jsx)(he,{date:u,onComplete:function(){return o(!0)},daysInHours:!0})]})},fe=x.Z.div(ie()),de=(0,x.Z)(fe)(ae()),pe=(0,x.Z)(Vn)(oe()),he=(0,x.Z)(Bn.ZP)(ce()),ve=function(n){var e=n.guesses,r=n.open,i=n.play,a=n.close;return(0,t.jsx)(Wn,{close:a,open:r,children:(0,t.jsxs)(xe,{children:[(0,t.jsx)(se,{play:function(){i(),a()}}),(0,t.jsx)(be,{guesses:e})]})})},xe=(0,x.Z)(fe)(ue()),be=(0,x.Z)((function(n){var e=n.guesses,r=n.className,i=(0,R.UD)().showMessage,o=(0,wn.Z)(),c=(0,a.useMemo)((function(){var n=e.findIndex((function(n){return n.every((function(n){return"correct"===n.kind}))}));return["#Poker_Handle ".concat(-1===n?"X":n+1,"/6"),e.filter((function(n){return n.every((function(n){return"blank"!==n.kind&&"entered"!==n.kind}))})).map((function(n){return n.map((function(n){return function(n,e){return"correct"===n.kind?"\ud83d\udfe9":"partial"===n.kind?"\ud83d\udfe8":"partial-rank"===n.kind?"\ud83d\udfe6":"\u2b1c"}(n,o.palette.mode)})).join("")})).join("\n")].join("\n")}),[e,o]);return(0,t.jsx)(re,{className:r,click:function(){navigator.clipboard.writeText(c),i("Copied results to clipboard")},children:"Share"})}))(le());function me(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function ye(){var n=me(["\n  margin-top: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ye=function(){return n},n}function je(){var n=me(["\n  margin-top: 12px;\n"]);return je=function(){return n},n}function ge(){var n=me(["\n  margin-top: 40px;\n  max-width: 400px;\n"]);return ge=function(){return n},n}function we(){var n=me(["\n  margin-top: 10px;\n  width: 98%;\n"]);return we=function(){return n},n}var ke=function(n){var e=n.board,r=n.guesses,i=n.diff,o=n.trials,u=n.finished,l=n.completed,s=n.play,f=n.handleSelect,d=n.handleBackspace,p=n.handleEnter,h=n.showCorrectAnswer,v=n.onFinish,x=F().isMobile,b=(0,a.useState)(!1),m=b[0],y=b[1],j=function(){y(!1)};return(0,a.useEffect)((function(){u&&(o>c.S&&!1===l&&h(),y(!0),v())}),[u,o,l]),x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ze,{children:e}),(0,t.jsx)(ze,{diff:i,handleSelect:f,handleEnter:p,handleBackspace:d}),(0,t.jsx)(ve,{guesses:r,open:m,close:j,play:s})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Oe,{children:e}),(0,t.jsx)(Se,{diff:i,handleSelect:f,handleEnter:p,handleBackspace:d}),(0,t.jsx)(ve,{guesses:r,open:m,close:j,play:s})]})},Oe=x.Z.div(ye()),Ze=(0,x.Z)(Oe)(je()),Se=(0,x.Z)((function(n){var e=n.diff,r=n.handleSelect,i=n.handleEnter,o=n.handleBackspace,c=n.className,u=(0,a.useState)(0),l=u[0],s=u[1];return(0,t.jsxs)(Dn,{className:c,children:[(0,t.jsx)(Rn,{children:(0,t.jsx)(zn,{value:l,handleChange:s})}),(0,t.jsx)(Xn,{suit:"C",value:l,index:0,diff:e,handleSelect:r}),(0,t.jsx)(Xn,{suit:"D",value:l,index:1,diff:e,handleSelect:r}),(0,t.jsx)(Xn,{suit:"H",value:l,index:2,diff:e,handleSelect:r}),(0,t.jsx)(Xn,{suit:"S",value:l,index:3,diff:e,handleSelect:r}),(0,t.jsx)(Tn,{handleEnter:i,handleBackspace:o})]})}))(ge()),ze=(0,x.Z)(Se)(we());function Pe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Ae(){var n=Pe(["\n  margin: 10px 5px;\n  max-width: 60px;\n"]);return Ae=function(){return n},n}function Ie(){var n=Pe(["\n  margin: 5px 5px;\n"]);return Ie=function(){return n},n}var Ne=function(n){var e=n.card;return n.small?(0,t.jsx)(Ee,{card:e,width:40,height:58}):(0,t.jsx)(Ce,{card:e,width:58,height:88})},Ce=(0,x.Z)(U.Z)(Ae()),Ee=(0,x.Z)(Ce)(Ie());function Xe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Me(){var n=Xe(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"]);return Me=function(){return n},n}function Te(){var n=Xe(["\n  font-weight: bold;\n  color: ",";\n"]);return Te=function(){return n},n}function _e(){var n=Xe(["\n  margin-top: 5px;\n  max-width: 60px;\n  height: 60px;\n  font-weight: bold;\n  color: ",";\n"]);return _e=function(){return n},n}function Re(){var n=Xe(["\n  margin-top: 0;\n  max-width: 40px;\n  height: 32px;\n  font-weight: bold;\n  font-size: 10px;\n"]);return Re=function(){return n},n}var De=function(n){var e=n.name,r=n.cards,i=n.category,a=n.small,o=n.className;return(0,t.jsxs)(Be,{className:o,children:[(0,t.jsx)(Fe,{children:e}),r.map((function(n){return(0,t.jsx)(Ne,{card:n,small:a},l.Pz(n))})),a?(0,t.jsx)($e,{children:null!==i&&void 0!==i?i:"?"}):(0,t.jsx)(Ue,{children:null!==i&&void 0!==i?i:"?"})]})},Be=x.Z.div(Me()),Fe=x.Z.span(Te(),(function(n){return n.theme.palette.text.primary})),Ue=x.Z.div(_e(),(function(n){return n.theme.palette.text.primary})),$e=(0,x.Z)(Ue)(Re());function qe(){var n,e,r=(n=["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return qe=function(){return r},r}var He=function(n){var e=n.members,r=(n.small,n.className);return(0,t.jsx)(Ge,{className:r,children:e.map((function(n){var e=n.name,r=n.cards,i=n.category;return(0,t.jsx)(De,{name:e,cards:r,category:i,small:!0},e)}))})},Ge=x.Z.div(qe());function We(){var n,e,r=(n=["\n  margin: 4px;\n  width: ","px;\n  height: ","px;\n  position: relative;\n  border-radius: 4px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return We=function(){return r},r}var Ye=function(n){var e=n.guess,r=(0,wn.Z)(),i=(0,t.jsx)("div",{}),a=(0,t.jsx)("div",{});return"blank"!==e.kind&&(i=(0,t.jsx)(U.Z,{card:e.card,width:40,height:58,reversed:"entered"!==e.kind}),"absent"===e.kind?a=(0,t.jsx)(J,{}):"partial"===e.kind?a=(0,t.jsx)(L,{}):"partial-rank"===e.kind?a=(0,t.jsx)(Q,{}):"correct"===e.kind&&(a=(0,t.jsx)(K,{}))),(0,t.jsxs)(Je,{style:{border:"blank"===e.kind?"1.5px solid ".concat(r.wordle.border):void 0},children:[a,i]})},Je=x.Z.div(We(),40,58);function Ke(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Le(){var n=Ke(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Le=function(){return n},n}function Qe(){var n=Ke(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Qe=function(){return n},n}var Ve=function(n){var e=n.guesses,r=n.row;return(0,t.jsx)(nr,{children:e.map((function(n,e){return(0,t.jsx)(Ye,{guess:n},"blank"===n.kind?"blank-".concat(r,"-").concat(e):l.Pz(n.card))}))})},nr=x.Z.div(Le()),er=function(n){var e=n.guesses;return(0,t.jsx)(rr,{children:e.map((function(n,e){var r=n.map((function(n){return"blank"===n.kind?"":l.Pz(n.card)})).join(" ");return(0,t.jsx)(Ve,{guesses:n,row:e},"    "===r?"blank-".concat(e):r)}))})},rr=x.Z.div(Qe());function tr(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function ir(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,a=[],o=!0,c=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}}(n,e)||or(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ar(n){return function(n){if(Array.isArray(n))return tr(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||or(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function or(n,e){if(n){if("string"===typeof n)return tr(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tr(n,e):void 0}}var cr=function(n,e){var r,t=[],i=[],a=[],o=[],c=[],u=!0,s=!1,f=void 0;try{for(var d,p=function(n,r){var u=ir(r.value,2),s=u[0],f=u[1];if("blank"===f.kind)return{v:"Not enough cards"};if("entered"!==f.kind)return{v:"Already checked (bug?)"};var d="absent";!function(n,e,r){return r<3?-1!==n.slice(0,3).findIndex((function(n){return(0,l.Xp)(n,e)})):(0,l.Xp)(e,n[r])}(e,f.card,s)?e.find((function(n){return(0,l.Xp)(n,f.card)}))?(d="partial",o.push(f.card)):e.find((function(n){return n.rank===f.card.rank}))?c.push([s,f.card]):i.push(f.card):(d="correct",a.push(f.card)),t.push({kind:d,card:f.card})},h=n.entries()[Symbol.iterator]();!(u=(d=h.next()).done);u=!0){var v=p(0,d);if("object"===((r=v)&&"undefined"!==typeof Symbol&&r.constructor===Symbol?"symbol":typeof r))return v.v}}catch(k){s=!0,f=k}finally{try{u||null==h.return||h.return()}finally{if(s)throw f}}var x=[],b=!0,m=!1,y=void 0;try{for(var j,g=function(r,c){var u=ir(c.value,2),l=u[0],s=u[1],f=a.filter((function(n){return n.rank===s.rank})).length,d=o.filter((function(n){return n.rank===s.rank})).length,p=n.filter((function(n){return"entered"===n.kind&&n.card.rank===s.rank})).length,h=e.filter((function(n){return n.rank===s.rank})).length;(0===f||p<=h)&&0===d?(x.push(s),t[l]={kind:"partial-rank",card:s}):i.push(s)},w=c[Symbol.iterator]();!(b=(j=w.next()).done);b=!0)g(0,j)}catch(k){m=!0,y=k}finally{try{b||null==w.return||w.return()}finally{if(m)throw y}}return{guesses:t,corrects:a,absents:i,partials:o,partialRanks:x}},ur=function(n,e,r){var t=ar(n.corrects).concat(ar(e.corrects.filter((function(e){return-1===n.corrects.findIndex((function(n){return(0,l.Xp)(n,e)}))})))),i=ar(n.partials).concat(ar(e.partials.filter((function(e){return-1===n.partials.findIndex((function(n){return(0,l.Xp)(n,e)}))})))).filter((function(n){return-1===t.findIndex((function(e){return(0,l.Xp)(e,n)}))})),a=[],o=!0,c=!1,u=void 0;try{for(var s,f=function(n,r){var o,c=r.value;(o=a).push.apply(o,ar(l.W9.map((function(n){return{rank:c.rank,suit:n}})).filter((function(n){return!1===(0,l.Xp)(n,c)&&-1===t.findIndex((function(e){return(0,l.Xp)(e,n)}))&&-1===i.findIndex((function(e){return(0,l.Xp)(e,n)}))&&-1===e.partialRanks.findIndex((function(e){return(0,l.Xp)(e,n)}))}))))},d=ar(n.absents.filter((function(n){return-1===r.findIndex((function(e){return(0,l.Xp)(e,n)}))}))).concat(ar(e.absents))[Symbol.iterator]();!(o=(s=d.next()).done);o=!0)f(0,s)}catch(p){c=!0,u=p}finally{try{o||null==d.return||d.return()}finally{if(c)throw u}}return{absents:ar(n.absents).concat(ar(e.absents),ar(a)),corrects:t,partials:i,partialRanks:e.partialRanks}};function lr(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function sr(n,e,r,t,i,a,o){try{var c=n[a](o),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(t,i)}function fr(n){return function(n){if(Array.isArray(n))return lr(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return lr(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return lr(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var dr=function(n,e){var r=[],t=!0,i=!1,a=void 0;try{for(var o,c=n[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var u=o.value,s=!0,f=!1,d=void 0;try{for(var p,h=function(n,t){var i=t.value;if(i.kind!==e)return"continue";-1===r.findIndex((function(n){return l.Xp(n,i.card)}))&&r.push(i.card)},v=u[Symbol.iterator]();!(s=(p=v.next()).done);s=!0)h(0,p)}catch(x){f=!0,d=x}finally{try{s||null==v.return||v.return()}finally{if(f)throw d}}}}catch(x){i=!0,a=x}finally{try{t||null==c.return||c.return()}finally{if(i)throw a}}return r},pr=function(n){var e=n.board,r=n.init,i=n.alreadyAnswered,o=n.play,u=(0,R.UD)().showMessage,s=(0,D.$y)().showCorrectAnswer,f=(0,a.useMemo)((function(){return fr(e.player).concat(fr(e.opponents.flat()))}),[e]),d=(0,a.useState)(r),p=d[0],h=d[1],v=(0,a.useState)(i?c.S+1:1),x=v[0],b=v[1],m=(0,a.useState)(i?r[r.length].length:0),y=m[0],j=m[1],g=(0,a.useState)({absents:f,corrects:dr(r,"correct"),partials:dr(r,"partial"),partialRanks:dr(r,"partial-rank")}),w=g[0],k=g[1],O=(0,a.useState)(w.corrects.length===p[0].length),Z=O[0],S=O[1],z=(0,a.useState)(Z||x>c.S),P=z[0],A=z[1],I=(0,a.useState)(!1),N=I[0],C=I[1],E=(0,a.useMemo)((function(){return[l.c(l.ku(fr(e.common).concat(fr(e.player)))),e.opponents.map((function(n){return l.c(l.ku(fr(e.common).concat(fr(n))))}))]}),[e]),X=E[0],M=E[1],T=function(){var n,r=(n=_().mark((function n(r,t){var i,a,o,l;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("string"!==typeof(i=cr(p[r],e.common))){n.next=5;break}return u(i),C(!1),n.abrupt("return");case 5:(a=fr(p))[r]=i.guesses,h(a),k((function(n){return ur(n,i,fr(e.player).concat(fr(f)))})),b(t+1),j(0),o=i.corrects.length===p[r].length,S(o),l=o||t>=c.S,A(l),!1===l&&C(!1);case 16:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function o(n){sr(a,t,i,o,c,"next",n)}function c(n){sr(a,t,i,o,c,"throw",n)}o(void 0)}))});return function(n,e){return r.apply(this,arguments)}}();return(0,t.jsx)(ke,{board:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(He,{members:[{name:"you",cards:e.player}].concat(1===e.opponents.length?[]:[{name:"other1",cards:e.opponents[0],category:M[0]}]),small:e.opponents.length>1}),(0,t.jsx)(er,{guesses:p}),(0,t.jsx)(He,{members:e.opponents.slice(1===e.opponents.length?0:1).map((function(n,r){var t=1===e.opponents.length?0:1;return{name:"other".concat(r+t+1),cards:n,category:M[r+t]}})),small:e.opponents.length>1})]}),guesses:p,diff:w,trials:x,finished:P,completed:Z,play:o,handleSelect:function(n){if(!(N||P||x>c.S)){var e=x-1,r=p[e];if(!(y>=r.length))if(r.find((function(e){return"entered"===e.kind&&l.Xp(e.card,n)})))u("Duplicate card");else{var t=fr(r);t[y]={kind:"entered",card:n};var i=fr(p);i[e]=t,h(i),j(y+1)}}},handleBackspace:function(){if(!(N||P||y<=0)){var n=x-1,e=fr(p[n]);e[y>0?y-1:0]={kind:"blank"};var r=fr(p);r[n]=e,h(r),j(y-1)}},handleEnter:function(){N||P||(C(!0),T(x-1,x))},showCorrectAnswer:function(){return s(e.common,X,M)},onFinish:function(){return C(!1)}})},hr=function(n){var e=n.board,r=n.init,i=n.alreadyAnswered,a=n.play;return(0,t.jsx)(E,{children:(0,t.jsx)(pr,{board:e,init:r,alreadyAnswered:i,play:a})})},vr=function(){return Array(c.S).fill(Array(5).fill({kind:"blank"}))},xr=function(n){var e=n[n.length-1],r=e[e.length-1].kind;return"blank"!==r&&"entered"!==r},br=function(){var n=(0,i.useRouter)(),e=(0,a.useState)(vr()),r=e[0],c=e[1],l=(0,a.useState)(null),s=l[0],f=l[1],d=function(){var e="string"===typeof n.query.seed?n.query.seed:(0,o.Z)(new Date,"yyyy-MM-dd"),r="1"===n.query.opponents?1:3;c(vr()),f(function(n,e){for(var r=u.alea(n),t=null;null===t;)t=v(r,e);return t}(e,r))};return(0,a.useEffect)((function(){n.isReady&&d()}),[n.isReady]),s?(0,t.jsx)(hr,{board:s,init:r,alreadyAnswered:xr(r),play:d}):(0,t.jsx)("div",{})}},5042:function(){}},function(n){n.O(0,[730,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);