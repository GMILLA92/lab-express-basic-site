"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19695],{12861:function(t,n,e){e.d(n,{Jp:function(){return r},as:function(){return o},w5:function(){return c}});var i=e(79547),r=function(t,n){return{type:i.T1,payload:{favoriteType:t,favorites:n}}},o=function(t,n,e){return{type:i.d_,payload:{favoriteType:t,itemId:n,favoriteItem:e}}},c=function(t,n){return{type:i.tO,payload:{favoriteType:t,itemId:n}}}},19695:function(t,n,e){e.r(n),e.d(n,{default:function(){return U}});var i=e(35155),r=e(34885),o=e(30057),c=e(15607),a=e(1434),s=e.n(a),u=e(56634),l=e(47201),f=e(88334),d=e(43335),p=e(23532),h=e(44173),m=e(43480),v=function(t){var n=t.filmId,e=t.buttonWidth,i=t.snowplowElement,r=(0,l.Z)("film_actions").t,o=(0,c.I0)(),a=(0,h.Z)(n);return(0,m.tZ)(w,{onClick:function(){a({clickType:"film_action_list",element:i},{film_id:n}),o((0,d.no)(!0,n,i))},title:r("film_actions:film_actions.actions.add"),children:(0,m.tZ)(f.DE,{width:e})})};v.defaultProps={buttonWidth:"25px"};var w=(0,i.Z)(p.Z,{target:"e10r5j7n0"})("@media ",(function(t){return t.theme.helpers.supportsHoverMq}),"{&:hover{opacity:0.7;}}"),Z=v,b=e(77378),y=e(6231),_=e(88075),g=e(51705),I=e(65443),x=e.n(I),k=e(12861),W=e(27257),C=function(t){var n=(0,c.v9)((function(t){return t.favorite.favoritesByFilmId})),e=(0,r.useState)(!1),i=e[0],o=e[1],a=(0,c.I0)(),s=!!n[t],u=function(){var n=(0,g.Z)(x().mark((function n(){var e,i;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=10;break}return a((0,k.as)("favoritesByFilmId",t,!0)),n.next=5,(0,W.mU)(t);case 5:return e=n.sent,n.next=8,e.data;case 8:i=n.sent,a((0,k.as)("favoritesByFilmId",t,i));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:return n.prev=15,o(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var e=(0,g.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t&&((0,W.bi)(n[t].id),a((0,k.w5)("favoritesByFilmId",t)))}catch(i){console.log(i)}finally{o(!1)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=(0,g.Z)(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i||(o(!0),s?l():u());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return[f,s,i]},E=function(t){var n=t.id,e=t.filmId,i=t.snowplowElement,o=t.isUnfavedStateVisible,c=t.buttonWidth,a=(0,l.Z)("film_actions").t,s=(0,r.useState)(""),u=s[0],f=s[1],d=(0,r.useState)(null),p=d[0],v=d[1],w=C(e),Z=(0,b.Z)(w,3),g=Z[0],I=Z[1],x=Z[2],k=(0,h.Z)(e);return(0,m.tZ)(L,{isVisible:o||I,isFavorited:I,title:a("film_actions:film_actions.actions.favorite"),onClick:function(){x||(f(a(I?"common:common.buttons.fave_removed":"common:common.buttons.fave_added")),g(),clearTimeout(p),v(setTimeout((function(){f("")}),2500)),k({clickType:"film_action_favorite",element:i},{film_id:e}))},"data-cy":"favorite-film-button-isFavorited-".concat(I),children:(0,m.tZ)(_.Z,{uniqId:n,message:u,children:(0,m.tZ)(y.Z,{isFavorited:I,buttonWidth:c})})})};E.defaultProps={id:null,isUnfavedStateVisible:!0,buttonWidth:"28px"};var L=(0,i.Z)("div",{target:"exntkvy0"})("transition:opacity 0.1s;@media ",(function(t){return t.theme.helpers.supportsHoverMq}),"{opacity:",(function(t){return!1===t.isVisible&&!1===t.isFavorited?0:1}),";}"),O=E,T=e(41986),P=e(67030);var S=function(t){var n=t.filmId,e=t.areInactiveButtonsVisible,i=t.snowplowElement,a=t.showActions,l=(0,c.v9)((function(t){return t.user.isAuthenticated})),f=(0,r.useState)(null),d=f[0],p=f[1];if((0,r.useEffect)((function(){p((0,o.Z)())}),[]),!l)return null;var h=a.showRating,v=a.showManageLists,w=a.showFavorite,b=a.showWatchList;return(0,m.BX)(F,{children:[h&&(0,m.tZ)(j,{isVisible:e,children:(0,m.tZ)(u.Z,{filmId:n,buttonWidth:"28px",snowplowElement:i})}),v&&(0,m.tZ)(j,{isVisible:e,children:(0,m.tZ)(Z,{filmId:n,buttonWidth:"28px",snowplowElement:i})}),w&&(0,m.tZ)(j,{isVisible:!0,children:(0,m.tZ)(O,{id:d,filmId:n,isUnfavedStateVisible:e,snowplowElement:i})}),b&&(0,m.tZ)(j,{"data-cy":"watch-list-button",children:(0,m.tZ)(P.Z,{filmId:n,snowplowElement:i,children:function(t){var i=t.isFilmInWatchList,r=t.doClickOnWatchListButton,o=t.tooltipMessage;return(0,m.tZ)(V,{isVisible:e||i,isFilmInWatchList:i,children:(0,m.tZ)(_.Z,{message:o,uniqId:String(n),children:(0,m.tZ)(T.Z,{isFilmInWatchList:i,onClick:s()(r,500),isTooltipShowing:!!o})})})}})})]})};S.defaultProps={areInactiveButtonsVisible:!0,showActions:{showRating:!0,showManageLists:!1,showFavorite:!0,showWatchList:!0}};var F=(0,i.Z)("div",{target:"e1930ut62"})({name:"1laz9o6",styles:"display:flex;justify-content:space-between;align-items:flex-end"}),j=(0,i.Z)("div",{target:"e1930ut61"})("padding-left:12px;&:first-of-type{padding-left:0;}transition:opacity 0.1s;@media ",(function(t){return t.theme.helpers.supportsHoverMq}),"{opacity:",(function(t){return!1===t.isVisible?0:1}),";}"),V=(0,i.Z)("div",{target:"e1930ut60"})("transition:opacity 0.1s;opacity:",(function(t){return!1!==t.isVisible||t.isFilmInWatchList?1:0}),";"),U=S},6231:function(t,n,e){var i=e(35155),r=e(96649),o=e(88334),c=e(43480),a=function(t){var n=t.isFavorited,e=t.buttonWidth,i=t.heartColor,r=t.activeHeartColor;return(0,c.tZ)(s,{children:n?(0,c.tZ)(o.PX,{width:e,color:r}):(0,c.tZ)(o.h_,{width:e,color:i})})};a.defaultProps={buttonWidth:"28px",heartColor:r.$_.white,activeHeartColor:r.$_.white};var s=(0,i.Z)("div",{target:"e5e40yd0"})("cursor:pointer;@media ",(function(t){return t.theme.helpers.supportsHoverMq}),"{&:hover{opacity:0.7;}}");n.Z=a},56634:function(t,n,e){var i=e(35155),r=e(15607),o=e(47201),c=e(96649),a=e(44173),s=e(43335),u=e(88334),l=e(23532),f=e(43480),d=function(t){var n=t.filmId,e=t.buttonWidth,i=t.color,c=t.children,l=t.snowplowElement,d=(0,o.Z)("film_actions").t,h=(0,r.I0)(),m=(0,a.Z)(n);return(0,f.BX)(p,{onClick:function(){h((0,s.lW)(!0,n,l)),m({clickType:"film_action_star_rating",element:l},{film_id:n})},title:d("film_actions:film_actions.actions.rate"),"data-cy":"rating-button",children:[(0,f.tZ)(u.aS,{width:e,color:i}),c]})};d.defaultProps={buttonWidth:"25px",color:c.$_.white,children:null};var p=(0,i.Z)(l.Z,{target:"ezv446a0"})("display:flex;align-items:center;@media ",(function(t){return t.theme.helpers.supportsHoverMq}),"{&:hover{opacity:0.7;}}");n.Z=d},41986:function(t,n,e){var i=e(35155),r=e(88334),o=e(47201),c=e(43480),a=function(t){var n=t.onClick,e=t.isFilmInWatchList,i=t.isTooltipShowing,a=t.buttonWidth,u=(0,o.Z)("film_actions").t,l=e?"watchlist_remove":"watchlist_add";return(0,c.tZ)(s,{onClick:n,title:!i&&u("film_actions:film_actions.actions.".concat(l)),"data-cy":"watch-list-button-isFilmInWatchList-".concat(e),children:e?(0,c.tZ)(r.iM,{width:a}):(0,c.tZ)(r.pO,{width:a})})};a.defaultProps={isFilmInWatchList:!1,isTooltipShowing:!1,onClick:function(){},buttonWidth:"28px"};var s=(0,i.Z)("div",{target:"e13t0o2p0"})("z-index:3;cursor:pointer;transition:opacity 0.1s;@media ",(function(t){return t.theme.helpers.supportsHoverMq}),"{&:hover{opacity:0.8;}}");n.Z=a},67030:function(t,n,e){e.d(n,{Z:function(){return v}});var i=e(77378),r=e(51705),o=e(65443),c=e.n(o),a=e(34885),s=e(15607),u=e(1434),l=e.n(u),f=e(74324),d=e(47201),p=e(70878),h=e(44173),m=function(t){var n=(0,s.v9)((function(n){return n.user.watchList[t]})),e=(0,a.useState)(!1),i=e[0],r=e[1],o=(0,a.useState)(null),c=o[0],u=o[1];return(0,a.useEffect)((function(){n&&(n.isLoading||(r(!0),u(!!n.wishId)))}),[n]),[i,c]},v=function(t){var n=t.children,e=t.filmId,o=t.snowplowElement,u=(0,d.Z)("film_actions").t,v=(0,s.v9)((function(t){return{httpContext:t.appState.httpContext,isAuthenticated:t.user.isAuthenticated,watchList:t.user.watchList}}),s.wU),w=v.httpContext,Z=v.isAuthenticated,b=v.watchList,y=(0,s.I0)(),_=(0,a.useState)(""),g=_[0],I=_[1],x=(0,a.useState)(null),k=x[0],W=x[1],C=(0,h.Z)(e),E=function(t){k&&clearTimeout(k),I(t);var n=setTimeout((function(){I(""),W(!1)}),2e3);W(n)},L=l()((0,r.Z)(c().mark((function t(){var n,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=(0,f.TA)(e,b)).wishId){t.next=8;break}1!==n.wishId&&(0,f.ab)(w,n.wishId),y((0,p.qz)(e)),E(u("film_actions:film_actions.watchlist.tooltip_removed")),C({clickType:"film_action_remove_watchlist",element:o},{film_id:e}),t.next=15;break;case 8:return y((0,p.tP)({id:1,film:{id:e},isLoading:!1})),E(u("film_actions:film_actions.watchlist.tooltip_added")),t.next=12,(0,f.nC)(w,e);case 12:i=t.sent,y((0,p.tP)(i.data)),C({clickType:"film_action_watchlist",element:o},{film_id:e});case 15:case"end":return t.stop()}}),t)}))),500),O=m(e),T=(0,i.Z)(O,2),P=T[0],S=T[1];return Z&&P?n({isFilmInWatchList:S,doClickOnWatchListButton:L,tooltipMessage:g}):null}},96018:function(t,n,e){e.d(n,{CU:function(){return s},QZ:function(){return u},Uc:function(){return a}});var i=e(51705),r=e(65443),o=e.n(r),c=e(43311),a=function(t,n){return new Promise((function(e,r){if("undefined"!==typeof grecaptcha)try{grecaptcha.enterprise.ready((0,i.Z)(o().mark((function i(){var r,a;return o().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,grecaptcha.enterprise.execute("6Leny7AUAAAAABnijVtQaHmmFIgfhCGwUWV2FEWN",{action:"favourite"});case 2:return r=i.sent,i.next=5,(0,c.v_)("/favourites/".concat(n),{fannable_id:String(t),recaptcha_token:r,recaptcha_action:"favourite"});case 5:a=i.sent,e(a);case 7:case"end":return i.stop()}}),i)}))))}catch(a){r(a)}else r(new Error("grecaptcha not initialised"))}))},s=function(t,n){return(0,c.vP)("/favourites/".concat(n,"?").concat(function(t){var n=encodeURIComponent("film_ids[]");return t.map((function(t){return"".concat(n,"=").concat(t)})).join("&")}(t)))},u=function(t,n){return(0,c.q1)("/favourites/".concat(n,"/").concat(t))}},27257:function(t,n,e){e.d(n,{Km:function(){return f},L6:function(){return u},bi:function(){return o},go:function(){return c},gv:function(){return s},lg:function(){return l},mU:function(){return r},uf:function(){return a}});var i=e(96018),r=function(t){return(0,i.Uc)(t,"films")},o=function(t){return(0,i.QZ)(t,"films")},c=function(t){return(0,i.Uc)(t,"cast_members")},a=function(t){return(0,i.QZ)(t,"cast_members")},s=function(t){return(0,i.Uc)(t,"lists")},u=function(t){return(0,i.QZ)(t,"lists")},l=function(t){return(0,i.Uc)(t,"ratings")},f=function(t){return(0,i.QZ)(t,"ratings")}},43311:function(t,n,e){e.d(n,{q1:function(){return m},vP:function(){return p},v_:function(){return h}});var i=e(51705),r=e(12197),o=e(65443),c=e.n(o),a=e(42667),s=e.n(a);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f="https://mubi.com/services/api",d={CLIENT:"web","CLIENT-VERSION":"1"},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(){var e=(0,i.Z)(c().mark((function e(i,r){var o,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=Object.assign({},d,n),e.next=4,s()({url:"".concat(f).concat(t),method:"GET",headers:o});case 4:a=e.sent,i({response:a,data:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}())},h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=l(l(l({},d),e),{"Content-Type":"application/json;",charset:"utf-8"});return s()({url:"".concat(f).concat(t),method:"POST",data:n,headers:i})},m=function(t){return s()({url:"".concat(f).concat(t),method:"DELETE",headers:d})}}}]);
//# sourceMappingURL=19695-26939a79173d0339.js.map