if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8da8207e589be76d51b223923c5db4d1"},{url:"/_next/static/chunks/08e32899-4dc32a50b805514c.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/0e5ce63c-7fd9b7f19dc821f1.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/1768-86ded08b9524cab0.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/2323-223dccd0362f7d1f.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/2430-34f315d03ce8bb52.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/29d61979-105f1dc9d48d9bfe.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/2bc40315-600f0a8a726d2591.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/3046-b72e2e796c33f0bb.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/3406-7d87780e9bbe04af.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/3706-0be7ada16e1dac16.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/3794-35b23c763ea7c9f8.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/3939862f-6423aeb21d74155a.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/3db6e918-c1b293e63382677c.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/41230c25-7981e50ccadaf3da.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/4130.f958a065fc28420a.js",revision:"f958a065fc28420a"},{url:"/_next/static/chunks/4296-e2a5008e061a6336.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/4459-6adfde6017338b6b.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/4592-edf7f4c2d4e14691.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/4777.6bf9607115a77002.js",revision:"6bf9607115a77002"},{url:"/_next/static/chunks/4893-b6eeea4eeaacf161.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/493-deadbe5e499df3ac.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/4938-ccb28c4005f9efe4.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/5250-9dd6a100b1193a2f.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/5414-7889d732c2f291e2.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/5afae9cd-6ea09ff946b1ff5a.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/5c4a068a-7e8966df4b5d79fa.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/6626-1e08119940debf15.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/6691-1da1fb425aac2387.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/6947-821201bc87961003.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/6c3d43bb-2a01e690fef2ff50.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/758a8f17-6ae99216c9abf856.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/7803-62a7286981089b5d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/7816-7d735086bad1695d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/7b0fbde8-ec7c215460d669d7.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/8098-e6dba986614b79a6.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/8529-824d8fa82eca32ab.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/8808b817-f5e0ff04001a3837.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/8929-0ef5d905bf83bc26.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/8bd30861-1adfaf9617b73f35.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/9124.c5583a11902a20a3.js",revision:"c5583a11902a20a3"},{url:"/_next/static/chunks/9252-d33e68205239d45d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/9948.ef74c3a37802453e.js",revision:"ef74c3a37802453e"},{url:"/_next/static/chunks/af164d00-06523487236bd9e6.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/about/page-00f24e1ede9ad086.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/auth/error/page-475fd53a7e799906.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/auth/login/page-6eec2342f2209667.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/auth/recovery/page-8dd6323aec72e5ed.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/auth/register/page-1e990b04a27cb4f8.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/auth/verification/page-fbe5da949e6402e6.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/blood-requests/%5Bid%5D/page-dde3496fd29583c2.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/blood-requests/new/page-a2850499e265b55e.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/blood-requests/page-d528bcfe15263204.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/clubs/%5Bid%5D/page-8703e9169d579611.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/clubs/new/page-b5c27a28499e953f.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/clubs/page-cc53831098b4f0a8.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/collection-centers/%5Bid%5D/page-f01d153e36b99954.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/collection-centers/new/page-119472f8f5086c1c.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/collection-centers/page-c69ee5a5063093c6.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/contacts/%5Bid%5D/page-83e28d85fbf1a5c5.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/contacts/new/page-ce950c4185ef254d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/contacts/page-e05a96d806a3812a.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/dashboard/page-dc357f45f5e051a4.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/donations/%5Bid%5D/page-620fabf3582e20bd.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/donations/new/page-b9deceb207363a7e.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/donations/page-4bbdcc7c6e7fd4c7.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/events/%5Bid%5D/page-8a8d6bddb767c370.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/events/new/page-bc84cf86399b4653.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/events/page-981798bf4e1661be.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/layout-898db79e4dea7ff0.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/members/%5Bid%5D/page-5487d8d5907a26a6.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/members/new/page-bead541f72619cad.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/members/page-64faa2fbfdf07965.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/not-found-2be31c07d4c4f4d7.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/page-d715cd15cb2bd0bc.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/profile/page-8c4a7366a1dc31e1.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/settings/page-6fc0df1d45b28a01.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/supports/%5Bid%5D/page-8ab6421bdfeaa1d9.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/supports/page-6fd2a99a700b7860.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/system-status/page-c447c8bf1e479bfe.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/team/new/page-dca0b4ea478e66a4.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/team/page-5dd1ebe0c595843d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/teams/%5Bid%5D/page-720daf8fa1d41bce.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/teams/page-a4e39a863693ecc4.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/template-19991ed639416e8a.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/updates/%5Bid%5D/page-2a970f93ab620d4f.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/updates/page-03e91c9d62b72c5d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/users/%5Bid%5D/page-737840ce63c4e33e.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/app/users/page-788d2243aeec512a.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/bc9585cc-efeea0a8f64a6496.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/bc9c7fc9-0a81ef0f2047f9ed.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/bd8d7054-0a7f5415a3be3aec.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/c36591c5-ac6675b99e13b07d.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/fd9d1056-d1c67a117fee380b.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/main-0e4bb5896ca3cf34.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/main-app-1716ea9587512bf4.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/pages/_app-31397adcb4d2b835.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/pages/_error-b225d4412fb76f89.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6d98c0d93d1ed898.js",revision:"m0Pf_ykLPJrU10htpzM2d"},{url:"/_next/static/css/f28c55d9134d3cac.css",revision:"f28c55d9134d3cac"},{url:"/_next/static/m0Pf_ykLPJrU10htpzM2d/_buildManifest.js",revision:"a27b2b7607326fa26b144e657011ec52"},{url:"/_next/static/m0Pf_ykLPJrU10htpzM2d/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/bg.86ac577b.svg",revision:"bc3d32a696895f78c19df6c717586a5d"},{url:"/_next/static/media/excel.c7062cd0.svg",revision:"34cf935682b191a067d4ff73b6c7f327"},{url:"/_next/static/media/simbio-color.f63f6e4e.svg",revision:"e0e42a4910d487f72d921441275452bd"},{url:"/_next/static/media/simbio-full-white.06b0c7e3.svg",revision:"4e2882ac080016bfbed85ef7f12b5dab"},{url:"/favicon.svg",revision:"304206e624e919ea42e9303468a9d467"},{url:"/image/branding/simbio-color.svg",revision:"e0e42a4910d487f72d921441275452bd"},{url:"/image/logo/bss.jpg",revision:"c1bb0f7efff7cd6eeade2909567e1968"},{url:"/image/logo/rcs.svg",revision:"6d87fc00f2c0c4a648bd8c2c62b063b3"},{url:"/manifest.json",revision:"eda0e74adca523815b81bdb7d96287a2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
