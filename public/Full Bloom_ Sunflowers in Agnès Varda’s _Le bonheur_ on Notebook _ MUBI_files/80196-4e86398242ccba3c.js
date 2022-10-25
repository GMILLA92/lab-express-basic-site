"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80196],{80345:function(e,t,n){var a=n(35155),o=n(38118),i=n(88334),r=n(43480),c={small:"46px",medium:"60px",large:"90px"},s=function(e,t){return e||c[t]},l=function(e){var t=e.size,n=e.sizePreset,a=e.onClick,c=e.href,l=e.showPause,m=(0,r.tZ)(u,{size:s(t,n),onClick:a,"data-cy":"play-button",children:(0,r.tZ)(i.o1,{width:"100%",showPause:l})});return c?(0,r.tZ)(o.Z,{href:c,children:(0,r.tZ)("a",{children:m})}):m};l.defaultProps={size:null,sizePreset:"medium",onClick:function(){},href:null,showPause:!1};var u=(0,a.Z)("div",{target:"e1dyoikp0"})("display:flex;align-items:center;height:",(function(e){return e.size}),";width:",(function(e){return e.size}),";cursor:pointer;");t.Z=l},74642:function(e,t,n){var a=n(12197),o=n(15607),i=n(47201),r=n(70638),c=n(28689),s=n(43335),l=n(87205);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.client,n={flow:"tvActivationNew",client:t,activationCode:e.activationCode};if(t&&r.gn[t]){var a=r.gn[t];n.promoCode=a.promoCodeTr||a.promoCode}return n},d=function(e,t,n,a,o,i){return"free"===e?function(e){var t=e.film;return{flow:"signup",contextData:{redirectUrl:"/films/".concat(t.slug,"/player"),signUpRequestParams:{via_free_film:!0},signUpTextKey:"free_film",titleKey:"header_promo"}}}(t):"now_showing"===e||"catalogue"===e?function(e){return e.onboardingPromo?function(e){var t=e.onboardingPromo,n=e.film;return{flow:"promoNew",specialPromo:t,contextData:{watchFilmPath:"/films/".concat(n.slug,"/player")}}}(e):function(e){var t=e.film;return{flow:"trialNew",contextData:{filmStillUrl:t.still_url,watchFilmPath:"/films/".concat(t.slug,"/player")}}}(e)}(t):"catalogue"===e?function(e){var t=e.film,n=e.onboardingPromo,a={subscribeCtaCopy:e.subscribeCtaCopy,filmId:t.id,filmStillUrl:t.still_url,filmTitle:t.title,watchFilmPath:"/films/".concat(t.slug,"/player")};return n?{flow:"promoNew",specialPromo:n,contextData:a}:{flow:"trialNew",contextData:a}}(t):"gift"===e?function(e,t,n){var a=e.giftToken,o=e.container;return{flow:"paymentDetailsNew",contextData:{flow:"paymentDetailsNew",purchasable:"gift",submitCopy:n("gifts:gifts.pay.pay"),submitPath:"/services/api/gifts/".concat(a,"/pay"),successPath:(0,c.vo)({urlPath:"/gifts/".concat(a,"/send"),language:t,includeDomain:!1})},container:o}}(t,n,i):"giftSignup"===e?function(e){return{flow:"signup",contextData:{redirectUrl:(0,c.vo)({urlPath:"/gifts/new",language:e,includeDomain:!1})}}}(n):"tvActivation"===e||"tvActivationNew"===e?g(t):"referralNew"===e?function(e){return{flow:"referralNew",contextData:{onboardingContext:"referral"},referralData:e}}(t):"loginNew"===e?{flow:"loginNew"}:"addPhoneNew"===e?function(e){return{flow:"addPhoneNew",contextData:{redirectUrl:(0,c.vo)({urlPath:"/subscription",language:e,includeDomain:!1})}}}(n):"changePlanNew"===e?function(e){return{flow:"changePlanNew",contextData:m({},e)}}(t):"newPaymentMethod"===e?function(e,t,n,a){var o={flow:"paymentDetailsNew",contextData:{flow:"paymentDetailsNew",cancelPath:"/subscription",forceNewPaymentMethod:"true",purchasable:"subscription_monthly",submitCopy:a("common:common.buttons.update"),cancelCopy:a("common:common.buttons.cancel"),submitPath:"/services/api/payment_method",successPath:"/subscription"},container:e.container};return t&&n&&(o.contextData.submitParams=JSON.stringify({subscription_expires_at:n})),o}(t,a,o,i):null};t.Z=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){var t,n,a,o,i;return{onboardingPromo:null===(t=e.appState)||void 0===t||null===(n=t.onboardingConfig)||void 0===n?void 0:n.promo,isUserLoggedIn:e.user.isAuthenticated,eligibleForFreeTrial:null===(a=e.user.user)||void 0===a?void 0:a.eligible_for_free_trial,currentLanguage:e.user.currentLanguage,activeSubscriber:e.user.activeSubscriber,subscriptionExpiresAt:null===(o=e.user.user)||void 0===o||null===(i=o.subscription)||void 0===i?void 0:i.expires_at,indiaPlanHackEnabled:!!e.appState.indiaPlanHackEnabled,httpContext:e.appState.httpContext}}),o.wU),n=t.onboardingPromo,a=t.isUserLoggedIn,r=t.eligibleForFreeTrial,c=t.currentLanguage,u=t.activeSubscriber,g=t.subscriptionExpiresAt,p=t.indiaPlanHackEnabled,f=t.httpContext,v=(0,i.Z)("common").t,_=(0,l.A)({t:v,onboardingPromo:n,isUserLoggedIn:a,eligibleForFreeTrial:r,indiaPlanHackEnabled:p});return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=d(t,m(m({},a),{},{onboardingPromo:n,subscribeCtaCopy:_,indiaPlanHackEnabled:p,httpContext:f}),c,u,g,v);e((0,s.i)(o)),e((0,s.tr)(!0))}}},34259:function(e,t,n){var a=n(77378),o=n(15607);t.Z=function(e,t,n){var i=(0,o.v9)((function(e){return{isAuthenticated:e.user.isAuthenticated,activeSubscriber:e.user.activeSubscriber}}),o.wU),r=i.isAuthenticated,c=i.activeSubscriber;if(!e||"live"!==(null===t||void 0===t?void 0:t.availability)||!Array.isArray(t.offered))return null;var s=function(e,t,n,o,i){var r={href:"/films/".concat(e.slug,"/player")},c=(0,a.Z)(t.offered,1)[0];if("free"===c.type){if(n)return r;if(!n)return{onClick:function(){return i("free",{film:e})}}}if("catalogue"===c.type){if(o)return r;if(!o)return{onClick:function(){return i("catalogue",{film:e})}}}if("now_showing"===c.type){if(o)return r;if(!o)return{onClick:function(){return i("now_showing",{film:e})}}}return null}(e,t,r,c,n);return s}},70638:function(e,t,n){n.d(t,{SP:function(){return r},gn:function(){return i}});n(67958);var a=function(e){return"https://assets.mubicdn.net/splash/".concat(e,".jpg")},o=function(e){return"/static/images/tv-activation-clients/".concat(e,".png")},i={android:{name:"Android TV",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("android"),client:"android_tv"},appletv:{name:"Apple TV",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("appletv"),client:"tvos"},fire:{name:"Fire Tablet",backgroundImage:a("moonrise_kingdom_suitcase_darkened"),logoImage:o("fire"),client:"firetablet",promoCode:"firetablet_activation_campaign"},firetv:{name:"Fire TV",backgroundImage:a("moonrise_kingdom_suitcase_darkened"),logoImage:o("firetv"),client:"firetv"},lg:{name:"LG TV",backgroundImage:"".concat("https://images.mubicdn.net","/static/images/tv-activation-bg/drive_my_car_darkened.jpg"),logoImage:o("lg"),client:"lg",promoCode:"lg_tv_activation_campaign_free_trial_60"},netgem:{name:"NETGEM",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("netgem"),client:"netgem",promoCode:"netgem_tv_activation_campaign_30"},opera:{name:"Opera TV",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("opera"),client:"opera",promoCode:"opera_tv_activation_campaign"},playstation:{name:"Playstation\xae",backgroundImage:a("drive_car_darkened"),logoImage:o("playstation"),client:"playstation",promoCode:"playstation_tv_activation_campaign"},roku:{name:"Roku",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("roku"),client:"roku"},foxxum:{name:"FOXXUM Device",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("foxxum"),client:"foxxum"},samsung:{name:"Samsung Smart TV",backgroundImage:a("moonrise_kingdom_suitcase_darkened"),logoImage:o("samsung"),client:"samsung",promoCode:"samsung_tv_activation_campaign",promoCodeTr:"samsung_tr_tv_activation_campaign"},sky:{name:"SKY TV",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("sky"),client:"sky",promoCode:"sky_tv_activation_campaign"},sony:{name:"Sony TV",backgroundImage:a("moonrise_kingdom_darkened"),logoImage:o("sony"),client:"sony_android_tv",promoCode:"freesonytv"},swisscom_android:{name:"Swisscom",backgroundImage:"".concat("https://images.mubicdn.net","/static/images/tv-activation-bg/drive_my_car_darkened.jpg"),logoImage:o("swisscom_android"),client:"swisscom_android",promoCode:"swisscom_tv_activation_campaign_60"},swisscom:{name:"Swisscom",backgroundImage:"".concat("https://images.mubicdn.net","/static/images/tv-activation-bg/drive_my_car_darkened.jpg"),logoImage:o("swisscom"),client:"swisscom",promoCode:"swisscom_tv_activation_campaign_60"},telstra:{name:"Telstra TV",backgroundImage:a("titane"),logoImage:o("telstra"),client:"telstra",promoCode:"telstra_tv_activation_campaign_free_trial"},vidaa:{name:"VIDAA",backgroundImage:"".concat("https://images.mubicdn.net","/static/images/tv-activation-bg/drive_my_car_darkened.jpg"),logoImage:o("vidaa"),client:"vidaa",promoCode:"vidaa_tv_activation_campaign_60"}},r=function(e){return Object.keys(i).includes(e)}}}]);
//# sourceMappingURL=80196-4e86398242ccba3c.js.map