function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},n.parcelRequired7c6=s),s.register("kyEFX",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var s={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},r=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("fPdqq",(function(t,e){var n=s("8pSXg");const i=document.querySelector(".header__sign-in-btn"),r=document.querySelector(".user-info"),o=document.querySelector(".header__sign-out-btn"),a=document.querySelector(".sign-in--icon-container"),c=document.querySelector("#autor-modal-close-btn"),l=document.querySelector("#autor-backdrop"),u=document.querySelector(".autorization-backdrop"),h=document.querySelector("body");function d(){u.classList.add("is-hidden"),m()}function f(t){"Escape"===t.code&&(u.classList.add("is-hidden"),m())}function p(t){t.target.classList.contains("autorization-backdrop")&&(u.classList.add("is-hidden"),m())}function m(){window.removeEventListener("keydown",f),c.removeEventListener("click",d),l.removeEventListener("click",p),h.style.overflow=""}i.addEventListener("click",(function(){"Sign in"===i.textContent?(u.classList.remove("is-hidden"),window.addEventListener("keydown",f),c.addEventListener("click",d),l.addEventListener("click",p)):r.classList.toggle("is-hidden")})),o.addEventListener("click",(function(){confirm("Do you really want to leave?")&&(r.classList.add("is-hidden"),i.textContent="Sign in",a.innerHTML="",a.insertAdjacentHTML("beforeend",'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.84 14.31c-.295.522-.517 1.09-.659 1.69h-9.181v-.417c-.004-1.112.044-1.747 1.324-2.043 1.402-.324 2.787-.613 2.121-1.841-1.972-3.637-.562-5.699 1.555-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841.672.155 1 .407 1.163.77zm-.815 3.69h-11.025v-14h20v7.5c.749.312 1.424.763 2 1.316v-10.816h-24v18h13.5c-.26-.623-.421-1.296-.475-2zm6.975-9h-4v2h4v-2zm-4-1h4v-2h-4v2zm8 9.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" /></svg>'),a.classList.remove("if-user-entered"),(0,n.onLogoutUser)())})),a.addEventListener("click",(function(){a.classList.contains("if-user-entered")?r.classList.toggle("is-hidden"):(u.classList.remove("is-hidden"),window.addEventListener("keydown",f),c.addEventListener("click",d),l.addEventListener("click",p))}))})),s.register("8pSXg",(function(n,i){t(n.exports,"onLogoutUser",(function(){return I})),s("25RCP");var r=s("ix4Jr");s("amyG6");var o=s("kbFea");s("83ZX7");var a=s("3PjDZ");s("83ZX7");s("3PjDZ");s("amyG6");o=s("kbFea");s("83ZX7");a=s("3PjDZ");var c=s("eWCmQ");const l=(0,r.initializeApp)({apiKey:"AIzaSyD606fLTGqofK4cSdWdTzIn8ZRRAFlLyLU",authDomain:"testfilmotekaautorization.firebaseapp.com",databaseURL:"https://testfilmotekaautorization-default-rtdb.firebaseio.com",projectId:"testfilmotekaautorization",storageBucket:"testfilmotekaautorization.appspot.com",messagingSenderId:"1095764227428",appId:"1:1095764227428:web:221bd773a83340321e3671"}),u=(0,a.getFirestore)(l);let h="",d="";const f=document.querySelector(".search-form"),p=document.querySelector(".enterBtn"),m=document.querySelector(".registrationBtn"),g=document.querySelector(".inputEmail"),y=document.querySelector(".inputPassword"),v=document.querySelector(".autorization-backdrop"),b=document.querySelector(".header__sign-in-btn"),w=document.querySelector("#user-email"),x=document.querySelector(".sign-in--icon-container"),k="watchedAll",E="queueAll";function I(){const t=(0,o.n)(l);(0,o.y)(t).then((()=>{const t=JSON.parse(localStorage.getItem(E)),e=JSON.parse(localStorage.getItem(k));(0,a.setDoc)((0,a.doc)(u,`${d}, QUEUE: ${h}`,"QUEUE"),{movieQueue:t}),(0,a.setDoc)((0,a.doc)(u,`${d}, WATCHED: ${h}`,"WATCHED"),{movieWatched:e}),localStorage.removeItem(E),localStorage.removeItem(k)})).catch((t=>{console.log(t)}))}m.addEventListener("click",(async function(){let t=g.value,n=y.value;""===t&&""===n?e(c).Notify.failure("Fulfill your email and password!"):""!==t&&""===n?e(c).Notify.failure("Fulfill Password field!"):""===t&&""!==n&&e(c).Notify.failure("Fulfill Email field!");const i=(0,o.n)(l);await(0,o.a5)(i,t,n).then((t=>{const n=t.user;n&&(h=n.uid,d=n.email,v.classList.add("is-hidden"),(0,a.setDoc)((0,a.doc)(u,`${d}, QUEUE: ${h}`,"QUEUE"),{}),(0,a.setDoc)((0,a.doc)(u,`${d}, WATCHED: ${h}`,"WATCHED"),{}),e(c).Notify.success("Registration successful! Welcome to Filmoteka!"),f.reset())})).catch((t=>{const n=t.code,i=t.message;console.log(n),console.log(i),"auth/email-already-in-use"===n&&e(c).Notify.warning("User already exists, please sing in!")}))})),p.addEventListener("click",(async function(){let t=g.value,n=y.value;""===t&&""===n?e(c).Notify.failure("Fulfill your email and password!"):""!==t&&""===n?e(c).Notify.failure("Fulfill Password field!"):""===t&&""!==n&&e(c).Notify.failure("Fulfill Email field!");const i=(0,o.n)(l);await(0,o.a6)(i,t,n).then((t=>{const n=t.user;n&&(h=n.uid,d=n.email,e(c).Notify.info("Welcome to Filmoteka!"),f.reset(),v.classList.add("is-hidden"),w.textContent=`${d}`,async function(){const t=(0,a.doc)(u,`${d}, QUEUE: ${h}`,"QUEUE"),e=await(0,a.getDoc)(t);console.log(e.data().movieQueue),e.exists()?localStorage.setItem(E,JSON.stringify(e.data().movieQueue)):console.log("No such document!")}(),async function(){const t=(0,a.doc)(u,`${d}, WATCHED: ${h}`,"WATCHED"),e=await(0,a.getDoc)(t);console.log(e.data()),e.exists()?localStorage.setItem(k,JSON.stringify(e.data().movieWatched)):console.log("No such document!")}())})).catch((t=>{const n=t.code,i=t.message;console.log(n),console.log(i),"auth/user-not-found"===n?e(c).Notify.failure("User not found, register or check your Email!"):"auth/wrong-password"===n&&e(c).Notify.failure("Wrong Password, try again!")}))})),async function(){const t=(0,o.n)(l);await(0,o.v)(t,(t=>{if(t){const e=t.uid;h=e,d=t.email,b.textContent="Logged",w.textContent=`${d}`,x.classList.add("if-user-entered"),x.innerHTML="",x.insertAdjacentHTML("beforeend",'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.84 14.31c-.295.522-.517 1.09-.659 1.69h-9.181v-.417c-.004-1.112.044-1.747 1.324-2.043 1.402-.324 2.787-.613 2.121-1.841-1.972-3.637-.562-5.699 1.555-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841.672.155 1 .407 1.163.77zm-.815 3.69h-11.025v-14h20v7.5c.749.312 1.424.763 2 1.316v-10.816h-24v18h13.5c-.26-.623-.421-1.296-.475-2zm6.975-9h-4v2h4v-2zm-4-1h4v-2h-4v2zm3.5 5c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.695-.697.992.94 2.115-2.169.697.696-2.811 2.867z"/></svg>')}}))}()})),s.register("25RCP",(function(e,n){t(e.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("ix4Jr").registerVersion)("firebase","9.9.1","app")})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return b})),t(e.exports,"SDK_VERSION",(function(){return E})),t(e.exports,"initializeApp",(function(){return I})),t(e.exports,"getApp",(function(){return T})),t(e.exports,"registerVersion",(function(){return _}));var i=s("4a6xH"),r=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const l="@firebase/app",u="0.7.29",h=new(0,r.Logger)("@firebase/app"),d="[DEFAULT]",f={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(m.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;m.set(e,t);for(const e of p.values())g(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function b(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},x=new(0,o.ErrorFactory)("app","Firebase",w);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="9.9.1";function I(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw x.create("bad-app-name",{appName:String(r)});const s=p.get(r);if(s){if((0,o.deepEqual)(t,s.options)&&(0,o.deepEqual)(n,s.config))return s;throw x.create("duplicate-app",{appName:r})}const a=new(0,i.ComponentContainer)(r);for(const t of m.values())a.addComponent(t);const c=new k(t,n,a);return p.set(r,c),c}function T(t="[DEFAULT]"){const e=p.get(t);if(!e)throw x.create("no-app",{appName:t});return e}function _(t,e,n){var r;let s=null!==(r=f[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}y(new(0,i.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="firebase-heartbeat-store";let N=null;function C(){return N||(N=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(S)}}).catch((t=>{throw x.create("storage-open",{originalErrorMessage:t.message})}))),N}async function A(t,e){var n;try{const n=(await C()).transaction(S,"readwrite"),i=n.objectStore(S);return await i.put(e,D(t)),n.done}catch(t){throw x.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function D(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=L(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),M(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new O(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function L(){return(new Date).toISOString().substring(0,10)}class O{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await C()).transaction(S).objectStore(S).get(D(t))}catch(t){throw x.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;P="",y(new(0,i.Component)("platform-logger",(t=>new c(t)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(t=>new R(t)),"PRIVATE")),_(l,u,P),_(l,u,"esm2017"),_("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return r})),t(e.exports,"ComponentContainer",(function(){return c}));var i=s("ffjl9");class r{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,i.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===o?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),s.register("ffjl9",(function(e,i){t(e.exports,"base64urlEncodeWithoutPadding",(function(){return o})),t(e.exports,"base64Decode",(function(){return a})),t(e.exports,"Deferred",(function(){return c})),t(e.exports,"createMockUserToken",(function(){return l})),t(e.exports,"getUA",(function(){return u})),t(e.exports,"isMobileCordova",(function(){return h})),t(e.exports,"isBrowserExtension",(function(){return d})),t(e.exports,"isReactNative",(function(){return f})),t(e.exports,"isElectron",(function(){return p})),t(e.exports,"isIE",(function(){return m})),t(e.exports,"isUWP",(function(){return g})),t(e.exports,"isSafari",(function(){return y})),t(e.exports,"isIndexedDBAvailable",(function(){return v})),t(e.exports,"validateIndexedDBOpenable",(function(){return b})),t(e.exports,"FirebaseError",(function(){return w})),t(e.exports,"ErrorFactory",(function(){return x})),t(e.exports,"isEmpty",(function(){return E})),t(e.exports,"deepEqual",(function(){return I})),t(e.exports,"querystring",(function(){return _})),t(e.exports,"querystringDecode",(function(){return S})),t(e.exports,"extractQuerystring",(function(){return N})),t(e.exports,"createSubscribe",(function(){return C})),t(e.exports,"getModularInstance",(function(){return R}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=r(t);return s.encodeByteArray(e,!0)}(t).replace(/\./g,"")},a=function(t){try{return s.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return u().indexOf("Electron/")>=0}function m(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}function b(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(k,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new w(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function I(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(T(n)&&T(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function T(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function S(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function N(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){const n=new A(t,e);return n.subscribe.bind(n)}class A{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=D),void 0===i.error&&(i.error=D),void 0===i.complete&&(i.complete=D);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){return t&&t._delegate?t._delegate:t}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return r})),t(e.exports,"Logger",(function(){return u})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r,s;(s=r||(r={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,c={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=c[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,i.push(this)}}function h(t){i.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of i){let i=null;e&&e.level&&(i=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return r}));var i=s("ekHjI");i=s("ekHjI");function r(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",(t=>{r((0,i.w)(a.result),t.oldVersion,t.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function l(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(c.get(e))return c.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return c.set(e,s),s}(0,i.r)((t=>({...t,get:(e,n,i)=>l(e,n)||t.get(e,n,i),has:(e,n)=>!!l(e,n)||t.has(e,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return h}));let i,r;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap;let u={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){u=t(u)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(m(this),e),p(s.get(this))}:function(...e){return p(t.apply(m(this),e))}:function(e,...n){const i=t.call(m(this),e,...n);return a.set(i,e.sort?e.sort():[e]),p(i)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,u):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(p(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),l.set(e,t),e}(t);if(c.has(t))return c.get(t);const e=f(t);return e!==t&&(c.set(t,e),l.set(e,t)),e}const m=t=>l.get(t)})),s.register("amyG6",(function(e,n){t(e.exports,"getAuth",(function(){return s("kbFea").n})),t(e.exports,"onAuthStateChanged",(function(){return s("kbFea").v})),t(e.exports,"createUserWithEmailAndPassword",(function(){return s("kbFea").a5})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("kbFea").a6})),t(e.exports,"signOut",(function(){return s("kbFea").y})),s("1iO0g")})),s.register("1iO0g",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return s("kbFea").a5})),t(e.exports,"getAuth",(function(){return s("kbFea").n})),t(e.exports,"onAuthStateChanged",(function(){return s("kbFea").v})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("kbFea").a6})),t(e.exports,"signOut",(function(){return s("kbFea").y})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("kbFea")})),s.register("kbFea",(function(e,n){t(e.exports,"a5",(function(){return Ft})),t(e.exports,"a6",(function(){return Ut})),t(e.exports,"v",(function(){return Vt})),t(e.exports,"y",(function(){return zt})),t(e.exports,"n",(function(){return Ze}));var i=s("ffjl9"),r=s("ix4Jr"),o=s("l73V3"),a=s("7vF8m"),c=s("4a6xH");function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,h=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,a.Logger)("@firebase/auth");function f(t,...e){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${r.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function m(t,...e){return y(t,...e)}function g(t,e,n){const r=Object.assign(Object.assign({},u()),{[e]:n});return new(0,i.ErrorFactory)("auth","Firebase",r).create(e,{appName:t.name})}function y(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return h.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=new Map;function k(t){w(t instanceof Function,"Expected a class definition");let e=x.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(I()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},A=new _(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,r,s={}){return L(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.querystring)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function L(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C),e);try{const e=new P(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(e){if(e instanceof i.FirebaseError)throw e;p(t,"network-request-failed")}}async function O(t,e,n,i,r={}){const s=await R(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?S(t.config,r):`${t.config.apiScheme}://${r}`}class P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),A.get())}))}}function F(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=m(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return 1e3*Number(t)}function z(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.base64Decode)(r);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(t){return f("Caught error parsing JWT payload as JSON",null===(e=t)||void 0===e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function B(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof i.FirebaseError&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class j{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t){var e;const n=t.auth,i=await t.getIdToken(),r=await B(t,async function(t,e){return R(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));v(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const a=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=(0,o.__rest)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(l=t.providerData,u=a,[...l.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var l,u;const h=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!h&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v(void 0!==t.idToken,"internal-error"),v(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=z(t);return v(e,"internal-error"),v(void 0!==e.exp,"internal-error"),v(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await L(t,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=M(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new H;return n&&(v("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(v("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(v("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return b("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){v("string"==typeof t||void 0===t,"internal-error",{appName:e})}class X{async getIdToken(t){const e=await B(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=(0,i.getModularInstance)(t),r=await n.getIdToken(e),s=z(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:U(V(s.auth_time)),issuedAtTime:U(V(s.iat)),expirationTime:U(V(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=(0,i.getModularInstance)(t);await q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new X(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await B(this,async function(t,e){return R(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:w,isAnonymous:x,providerData:k,stsTokenManager:E}=e;v(b&&E,t,"internal-error");const I=H.fromJSON(this.name,E);v("string"==typeof b,t,"internal-error"),$(u,t.name),$(h,t.name),v("boolean"==typeof w,t,"internal-error"),v("boolean"==typeof x,t,"internal-error"),$(d,t.name),$(f,t.name),$(p,t.name),$(m,t.name),$(g,t.name),$(y,t.name);const T=new X({uid:b,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:x,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(T.providerData=k.map((t=>Object.assign({},t)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,n=!1){const i=new H;i.updateFromServerResponse(e);const r=new X({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await q(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=(0,o.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new W(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}K.type="NONE";const G=K;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){return`firebase:${t}:${e}:${n}`}class J{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?X._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new J(k(G),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||k(G);const s=Q(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=X._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new J(r,t,n)):new J(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Q(this.userKey,i.apiKey,r),this.fullPersistenceKey=Q("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rt(e))return"Blackberry";if(st(e))return"Webos";if(tt(e))return"Safari";if((e.includes("chrome/")||et(e))&&!e.includes("edge/"))return"Chrome";if(it(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(t=(0,i.getUA)()){return/firefox\//i.test(t)}function tt(t=(0,i.getUA)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function et(t=(0,i.getUA)()){return/crios\//i.test(t)}function nt(t=(0,i.getUA)()){return/iemobile/i.test(t)}function it(t=(0,i.getUA)()){return/android/i.test(t)}function rt(t=(0,i.getUA)()){return/blackberry/i.test(t)}function st(t=(0,i.getUA)()){return/webos/i.test(t)}function ot(t=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function at(t=(0,i.getUA)()){return ot(t)||it(t)||st(t)||rt(t)||/windows phone/i.test(t)||nt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(t,e=[]){let n;switch(t){case"Browser":n=Y((0,i.getUA)());break;case"Worker":n=`${Y((0,i.getUA)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(t){n.reverse();for(const t of n)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=k(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await J.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await q(t)}catch(t){if("auth/network-request-failed"!==(null===(e=t)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.getModularInstance)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(k(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&k(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[k(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dt(this),this.idTokenSubscription=new dt(this),this.beforeStateQueue=new lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function ht(t){return(0,i.getModularInstance)(t)}class dt{get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.createSubscribe)((t=>this.observer=t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t,e){return R(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ft{static _fromEmailAndPassword(t,e){return new mt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new mt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return O(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return O(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return pt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return O(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e){return O(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends ft{static _fromParams(t){const e=new yt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=(0,o.__rest)(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new yt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return gt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,gt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=(0,i.querystring)(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends ft{static _fromVerification(t,e){return new bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return O(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await O(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return O(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),vt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new bt({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static parseLink(t){const e=function(t){const e=(0,i.querystringDecode)((0,i.extractQuerystring)(t)).link,n=e?(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||e||t}(t);try{return new wt(e)}catch(t){return null}}constructor(t){var e,n,r,s,o,a;const c=(0,i.querystringDecode)((0,i.extractQuerystring)(t)),l=null!==(e=c.apiKey)&&void 0!==e?e:null,u=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=c.mode)&&void 0!==r?r:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{static credential(t,e){return mt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=wt.parseLink(e);return v(n,"argument-error"),mt._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=xt.PROVIDER_ID}}xt.PROVIDER_ID="password",xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends kt{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends Et{static credential(t){return yt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com",It.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends Et{static credential(t,e){return yt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Tt.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Tt.GOOGLE_SIGN_IN_METHOD="google.com",Tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends Et{static credential(t){return yt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}_t.GITHUB_SIGN_IN_METHOD="github.com",_t.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Et{static credential(t,e){return yt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return St.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(t,e){return O(t,"POST","/v1/accounts:signUp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.TWITTER_SIGN_IN_METHOD="twitter.com",St.PROVIDER_ID="twitter.com";class Ct{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await X._fromIdTokenResponse(t,n,i),s=At(n);return new Ct({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=At(n);return new Ct({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function At(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends i.FirebaseError{static _fromErrorAndOperation(t,e,n,i){return new Dt(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Dt.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Rt(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Dt._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e,n=!1){const i=await B(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ct._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const i=await B(t,Rt(r,s,e,t),n);v(i.idToken,r,"internal-error");const o=z(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),Ct._forOperation(t,s,i)}catch(t){throw"auth/user-not-found"===(null===(i=t)||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e,n=!1){const i="signIn",r=await Rt(t,i,e),s=await Ct._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Pt(t,e){return Mt(ht(t),e)}async function Ft(t,e,n){const i=ht(t),r=await Nt(i,{returnSecureToken:!0,email:e,password:n}),s=await Ct._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ut(t,e,n){return Pt((0,i.getModularInstance)(t),xt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e,n,r){return(0,i.getModularInstance)(t).onAuthStateChanged(e,n,r)}function zt(t){return(0,i.getModularInstance)(t).signOut()}new WeakMap;const Bt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends jt{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=(0,i.getUA)();return tt(t)||ot(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=at(),this._shouldAllowMigration=!0}}Wt.type="LOCAL";const qt=Wt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends jt{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ht.type="SESSION";const $t=Ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Xt(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.receivers=[];class Gt{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Kt("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(){return void 0!==Qt().WorkerGlobalScope&&"function"==typeof Qt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt="firebaseLocalStorageDb",Zt="firebaseLocalStorage",te="fbase_key";class ee{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function ne(t,e){return t.transaction([Zt],e?"readwrite":"readonly").objectStore(Zt)}function ie(){const t=indexedDB.open(Yt,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Zt,{keyPath:te})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Zt)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Yt);return new ee(t).toPromise()}(),e(await ie()))}))}))}async function re(t,e,n){const i=ne(t,!0).put({[te]:e,value:n});return new ee(i).toPromise()}function se(t,e){const n=ne(t,!0).delete(e);return new ee(n).toPromise()}class oe{async _openDb(){return this.db||(this.db=await ie()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xt._getInstance(Jt()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ie();return await re(t,Bt,"1"),await se(t,Bt),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>re(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ne(t,!1).get(e),i=await new ee(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>se(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ne(t,!1).getAll();return new ee(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}oe.type="LOCAL";const ae=oe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function le(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
le("rcb"),new _(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ue="recaptcha";async function he(t,e,n){var i;const r=await n.verify();try{let s;if(v("string"==typeof r,t,"argument-error"),v(n.type===ue,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await function(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{verifyPhoneNumber(t,e){return he(this.auth,t,(0,i.getModularInstance)(e))}static credential(t,e){return bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return de.credentialFromTaggedObject(e)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?bt._fromTokenResponse(e,n):null}constructor(t){this.providerId=de.PROVIDER_ID,this.auth=ht(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(t,e){return e?k(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de.PROVIDER_ID="phone",de.PHONE_SIGN_IN_METHOD="phone";class pe extends ft{_getIdTokenResponse(t){return gt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function me(t){return Mt(t.auth,new pe(t),t.bypassAuthState)}function ge(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Ot(n,new pe(t),t.bypassAuthState)}async function ye(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Lt(n,new pe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return me;case"linkViaPopup":case"linkViaRedirect":return ye;case"reauthViaPopup":case"reauthViaRedirect":return ge;default:p(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new _(2e3,1e4);class we extends ve{async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,we.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,be.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,we.currentPopupAction&&we.currentPopupAction.cancel(),we.currentPopupAction=this}}we.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xe=new Map;class ke extends ve{async execute(){let t=xe.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Te(e),i=Ie(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}xe.set(this.auth._key(),t)}return this.bypassAuthState||xe.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Ee(t,e){xe.set(t._key(),e)}function Ie(t){return k(t._redirectPersistence)}function Te(t){return Q("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t,e,n=!1){const i=ht(t),r=fe(i,e),s=new ke(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Se{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ce(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ce(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ne(t))}saveEventToCache(t){this.cachedEventUids.add(Ne(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ne(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ce({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ae=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,De=/^https?/;async function Re(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return R(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Le(t))return}catch(t){}p(t,"unauthorized-domain")}function Le(t){const e=E(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!De.test(n))return!1;if(Ae.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new _(3e4,6e4);function Me(){const t=Qt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Pe=null;function Fe(t){return Pe=Pe||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Me(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Me(),n(m(t,"network-request-failed"))},timeout:Oe.get()})}if(null===(r=null===(i=Qt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Qt().gapi)||void 0===s?void 0:s.load)){const e=le("iframefcb");return Qt()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},ce(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Pe=null,t}))}(t),Pe}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new _(5e3,15e3),Ve={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ze=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Be(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?S(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:r.SDK_VERSION},o=ze.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const je={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class We{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function qe(t,e,n,r=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},je),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.getUA)().toLowerCase();n&&(c=et(u)?"_blank":n),Z(u)&&(e=e||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=(0,i.getUA)()){var e;return ot(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==c)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",c),new We(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(t){}return new We(d)}const He="emulator/auth/handler";function $e(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.SDK_VERSION,eventId:o};if(e instanceof kt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.isEmpty)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Et){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const t of Object.keys(l))void 0===l[t]&&delete l[t];return`${function({config:t}){return t.emulator?S(t,He):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${(0,i.querystring)(l).slice(1)}`}const Xe="webStorageSupport";const Ke=class{async _openPopup(t,e,n,i){var r;w(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return qe(t,$e(t,e,n,E(),i),Kt())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=$e(t,e,n,E(),i),Qt().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Fe(t),n=Qt().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Be(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ve,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=m(t,"network-request-failed"),s=Qt().setTimeout((()=>{i(r)}),Ue.get());function o(){Qt().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Se(t);return e.register("authEvent",(e=>{v(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Xe,{type:Xe},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Re(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return at()||tt()||ot()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$t,this._completeRedirectFn=_e,this._overrideRedirectResult=Ee}};var Ge,Qe="@firebase/auth",Je="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t=(0,r.getApp)()){const e=(0,r._getProvider)(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=(0,r._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,null!=e?e:{}))return t;p(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Ke,persistence:[ae,qt,$t]})}Ge="Browser",(0,r._registerComponent)(new(0,c.Component)("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{v(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:Ge,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ct(Ge)},o=new ut(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(k);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new(0,c.Component)("auth-internal",(t=>{const e=ht(t.getProvider("auth").getImmediate());return new Ye(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(Qe,Je,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ge)),(0,r.registerVersion)(Qe,Je,"esm2017")})),s.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return i}));function i(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create})),s.register("83ZX7",(function(e,n){t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"doc",(function(){return s("3PjDZ").doc})),t(e.exports,"getDoc",(function(){return s("3PjDZ").getDoc})),t(e.exports,"setDoc",(function(){return s("3PjDZ").setDoc})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return Ms})),t(e.exports,"getFirestore",(function(){return Us})),t(e.exports,"getDoc",(function(){return go})),t(e.exports,"setDoc",(function(){return vo}));var i=s("ix4Jr"),r=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),c=s("lW9Fu");s("4TNnu");const l="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function b(t,e){t||v()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(u.UNAUTHENTICATED)))}shutdown(){}}class _{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new E;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new E,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new E)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class S{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class N{getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(u.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class C{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(b("string"==typeof t.token),this.p=t.token,new C(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=D(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function O(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static fromTimestamp(t){return new P(t)}static min(){return new P(new M(0,0))}static max(){return new P(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class U extends F{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new U(e)}static emptyPath(){return new U([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends F{construct(t,e,n){return new z(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new k(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new k(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new k(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new k(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new z(e)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromPath(t){return new B(U.fromString(t))}static fromName(t){return new B(U.fromString(t).popFirst(5))}static empty(){return new B(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new U(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}j.UNKNOWN_ID=-1;function W(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=P.fromTimestamp(1e9===i?new M(n+1,0):new M(n,i));return new H(r,B.empty(),e)}function q(t){return new H(t.readTime,t.key,-1)}class H{static min(){return new H(P.min(),B.empty(),-1)}static max(){return new H(P.max(),B.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function $(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=B.comparator(t.documentKey,e.documentKey),0!==n?n:L(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==X)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Q(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Q?e:Q.resolve(e)}catch(t){return Q.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Q.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Q.reject(e)}static resolve(t){return new Q(((e,n)=>{e(t)}))}static reject(t){return new Q(((e,n)=>{n(t)}))}static waitFor(t){return new Q(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Q.resolve(!1);for(const n of t)e=e.next((t=>t?Q.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Q(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new Q(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y.ot=-1;class nt{insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new it(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new it(this.root,t,this.comparator,!1)}getReverseIterator(){return new it(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new it(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}}class it{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class rt{copy(t,e,n,i,r){return new rt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return rt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:rt.RED,this.left=null!=i?i:rt.EMPTY,this.right=null!=r?r:rt.EMPTY,this.size=this.left.size+1+this.right.size}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1,rt.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,i,r){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ot(this.data.getIterator())}getIteratorFrom(t){return new ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof st))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new nt(this.comparator)}}class ot{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{static empty(){return new at([])}unionWith(t){let e=new st(z.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return O(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(z.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ct.EMPTY_BYTE_STRING=new ct("");const lt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(t){if(b(!!t),"string"==typeof t){let e=0;const n=lt.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function dt(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pt(t){const e=t.mapValue.fields.__previous_value__;return ft(e)?pt(e):e}function mt(t){const e=ut(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class yt{static empty(){return new yt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof yt&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return null==t}function bt(t){return 0===t&&1/t==-1/0}function wt(t){return"number"==typeof t&&Number.isInteger(t)&&!bt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ft(t)?4:Mt(t)?9007199254740991:10:v()}function Et(t,e){if(t===e)return!0;const n=kt(t);if(n!==kt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mt(t).isEqual(mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ut(t.timestampValue),i=ut(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,dt(t.bytesValue).isEqual(dt(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ht(t.geoPointValue.latitude)===ht(e.geoPointValue.latitude)&&ht(t.geoPointValue.longitude)===ht(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ht(t.integerValue)===ht(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ht(t.doubleValue),i=ht(e.doubleValue);return n===i?bt(n)===bt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return O(t.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Z(n)!==Z(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Et(n[t],i[t])))return!1;return!0}(t,e);default:return v()}var i}function It(t,e){return void 0!==(t.values||[]).find((t=>Et(t,e)))}function Tt(t,e){if(t===e)return 0;const n=kt(t),i=kt(e);if(n!==i)return L(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ht(t.integerValue||t.doubleValue),i=ht(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return _t(t.timestampValue,e.timestampValue);case 4:return _t(mt(t),mt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=dt(t),i=dt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=L(n[t],i[t]);if(0!==e)return e}return L(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(ht(t.latitude),ht(e.latitude));return 0!==n?n:L(ht(t.longitude),ht(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Tt(n[t],i[t]);if(e)return e}return L(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===xt.mapValue&&e===xt.mapValue)return 0;if(t===xt.mapValue)return 1;if(e===xt.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=L(i[t],s[t]);if(0!==e)return e;const o=Tt(n[i[t]],r[s[t]]);if(0!==o)return o}return L(i.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function _t(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=ut(t),i=ut(e),r=L(n.seconds,i.seconds);return 0!==r?r:L(n.nanos,i.nanos)}function St(t){return Nt(t)}function Nt(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ut(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?dt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Nt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Nt(t.fields[r])}`;return n+"}"}(t.mapValue):v()}function Ct(t){return!!t&&"integerValue"in t}function At(t){return!!t&&"arrayValue"in t}function Dt(t){return!!t&&"nullValue"in t}function Rt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lt(t){return!!t&&"mapValue"in t}function Ot(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ot(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ot(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Lt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ot(e)}setAll(t){let e=z.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Ot(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Lt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Et(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Lt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){tt(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Pt(Ot(this.value))}constructor(t){this.value=t}}function Ft(t){const e=[];return tt(t.fields,((t,n)=>{const i=new z([t]);if(Lt(n)){const t=Ft(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new at(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ut{static newInvalidDocument(t){return new Ut(t,0,P.min(),P.min(),Pt.empty(),0)}static newFoundDocument(t,e,n){return new Ut(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new Ut(t,2,e,P.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new Ut(t,3,e,P.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=r,this.documentState=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ut=null}}function zt(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Vt(t,e,n,i,r,s,o)}function Bt(t){const e=w(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+St(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),vt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>St(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>St(t))).join(",")),e.ut=t}return e.ut}function jt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ee(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Et(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ie(t.startAt,e.startAt)&&ie(t.endAt,e.endAt)}function Wt(t){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class qt extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Ht(t,e,n):"array-contains"===e?new Gt(t,n):"in"===e?new Qt(t,n):"not-in"===e?new Jt(t,n):"array-contains-any"===e?new Yt(t,n):new qt(t,e,n)}static ct(t,e,n){return"in"===e?new $t(t,n):new Xt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Tt(e,this.value)):null!==e&&kt(this.value)===kt(e)&&this.at(Tt(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Ht extends qt{matches(t){const e=B.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=B.fromName(n.referenceValue)}}class $t extends qt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Kt("in",e)}}class Xt extends qt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Kt("not-in",e)}}function Kt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>B.fromName(t.referenceValue)))}class Gt extends qt{matches(t){const e=t.data.field(this.field);return At(e)&&It(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Qt extends qt{matches(t){const e=t.data.field(this.field);return null!==e&&It(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Jt extends qt{matches(t){if(It(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!It(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Yt extends qt{matches(t){const e=t.data.field(this.field);return!(!At(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>It(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class Zt{constructor(t,e){this.position=t,this.inclusive=e}}class te{constructor(t,e="asc"){this.field=t,this.dir=e}}function ee(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ne(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?B.comparator(B.fromName(o.referenceValue),n.key):Tt(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function ie(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Et(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function se(t,e,n,i,r,s,o,a){return new re(t,e,n,i,r,s,o,a)}function oe(t){return new re(t)}function ae(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ce(t){for(const e of t.filters)if(e.ht())return e.field;return null}function le(t){return null!==t.collectionGroup}function ue(t){const e=w(t);if(null===e.lt){e.lt=[];const t=ce(e),n=ae(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new te(t)),e.lt.push(new te(z.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new te(z.keyField(),t))}}}return e.lt}function he(t){const e=w(t);if(!e.ft)if("F"===e.limitType)e.ft=zt(e.path,e.collectionGroup,ue(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ue(e)){const e="desc"===n.dir?"asc":"desc";t.push(new te(n.field,e))}const n=e.endAt?new Zt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zt(e.startAt.position,e.startAt.inclusive):null;e.ft=zt(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function de(t,e,n){return new re(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fe(t,e){return jt(he(t),he(e))&&t.limitType===e.limitType}function pe(t){return`${Bt(he(t))}|lt:${t.limitType}`}function me(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${St(e.value)}`})).join(", ")}]`),vt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>St(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>St(t))).join(",")),`Target(${e})`}(he(t))}; limitType=${t.limitType})`}function ge(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):B.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=ne(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,ue(n),i)||n.endAt&&!function(t,e,n){const i=ne(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,ue(n),i)));var n,i}function ye(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ve(t){return(e,n)=>{let i=!1;for(const r of ue(t)){const t=be(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function be(t,e,n){const i=t.field.isKeyField()?B.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Tt(i,r):v()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bt(e)?"-0":e}}function xe(t){return{integerValue:""+t}}function ke(t,e){return wt(e)?xe(e):we(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this._=void 0}}function Ie(t,e,n){return t instanceof Se?Ne(t,e):t instanceof Ce?Ae(t,e):n}function Te(t,e){var n,i;return t instanceof De?Ct(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class _e extends Ee{}class Se extends Ee{constructor(t){super(),this.elements=t}}function Ne(t,e){const n=Le(e);for(const e of t.elements)n.some((t=>Et(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ce extends Ee{constructor(t){super(),this.elements=t}}function Ae(t,e){let n=Le(e);for(const e of t.elements)n=n.filter((t=>!Et(t,e)));return{arrayValue:{values:n}}}class De extends Ee{constructor(t,e){super(),this.wt=t,this._t=e}}function Re(t){return ht(t.integerValue||t.doubleValue)}function Le(t){return At(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e){this.version=t,this.transformResults=e}}class Me{static none(){return new Me}static exists(t){return new Me(void 0,t)}static updateTime(t){return new Me(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Pe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Fe{}function Ue(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ke(t.key,Me.none()):new We(t.key,t.data,Me.none());{const n=t.data,i=Pt.empty();let r=new st(z.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new qe(t.key,i,new at(r.toArray()),Me.none())}}function Ve(t,e,n){var i;t instanceof We?function(t,e,n){const i=t.value.clone(),r=$e(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof qe?function(t,e,n){if(!Pe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=$e(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(He(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function ze(t,e,n,i){return t instanceof We?function(t,e,n,i){if(!Pe(t.precondition,e))return n;const r=t.value.clone(),s=Xe(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof qe?function(t,e,n,i){if(!Pe(t.precondition,e))return n;const r=Xe(t.fieldTransforms,i,e),s=e.data;return s.setAll(He(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(r=e,s=n,Pe(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function Be(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=Te(i.transform,t||null);null!=r&&(null===n&&(n=Pt.empty()),n.set(i.field,r))}return n||null}function je(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&O(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Se&&i instanceof Se||n instanceof Ce&&i instanceof Ce?O(n.elements,i.elements,Et):n instanceof De&&i instanceof De?Et(n._t,i._t):n instanceof _e&&i instanceof _e);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class We extends Fe{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class qe extends Fe{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function He(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function $e(t,e,n){const i=new Map;b(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Ie(o,a,n[r]))}return i}function Xe(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=e,(r=t)instanceof _e?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof Se?Ne(r,s):r instanceof Ce?Ae(r,s):function(t,e){const n=Te(t,e),i=Re(n)+Re(t._t);return Ct(n)&&Ct(t._t)?xe(i):we(t.wt,i)}(r,s)))}var r,s,o;return i}class Ke extends Fe{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ge extends Fe{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ye;function Ze(t){switch(t){default:return v();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function tn(t){if(void 0===t)return m("GRPC error has no .code"),x.UNKNOWN;switch(t){case Je.OK:return x.OK;case Je.CANCELLED:return x.CANCELLED;case Je.UNKNOWN:return x.UNKNOWN;case Je.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Je.INTERNAL:return x.INTERNAL;case Je.UNAVAILABLE:return x.UNAVAILABLE;case Je.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Je.NOT_FOUND:return x.NOT_FOUND;case Je.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Je.ABORTED:return x.ABORTED;case Je.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Je.DATA_LOSS:return x.DATA_LOSS;default:return v()}}(Ye=Je||(Je={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return et(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new nt(B.comparator);function rn(){return nn}const sn=new nt(B.comparator);function on(...t){let e=sn;for(const n of t)e=e.insert(n.key,n);return e}function an(t){let e=sn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function cn(){return un()}function ln(){return un()}function un(){return new en((t=>t.toString()),((t,e)=>t.isEqual(e)))}const hn=new nt(B.comparator),dn=new st(B.comparator);function fn(...t){let e=dn;for(const n of t)e=e.add(n);return e}const pn=new st(L);function mn(){return pn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,e)),new gn(P.min(),n,mn(),rn(),fn())}constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}}class yn{static createSynthesizedTargetChangeForCurrentChange(t,e){return new yn(ct.EMPTY_BYTE_STRING,e,fn(),fn(),fn())}constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,n,i){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=i}}class bn{constructor(t,e){this.targetId=t,this.It=e}}class wn{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class xn{get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=fn(),e=fn(),n=fn();return this.Et.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:v()}})),new yn(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=In()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}constructor(){this.Tt=0,this.Et=In(),this.At=ct.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}}class kn{Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,i=this.Ht(e);if(i){const t=i.target;if(Wt(t))if(0===n){const n=new B(t.path);this.Kt(e,n,Ut.newNoDocument(n,P.min()))}else b(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,i)=>{const r=this.Ht(i);if(r){if(n.current&&Wt(r.target)){const e=new B(r.target.path);null!==this.$t.get(e)||this.Xt(i,e)||this.Kt(i,e,Ut.newNoDocument(e,t))}n.vt&&(e.set(i,n.St()),n.Dt())}}));let n=fn();this.Bt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const i=new gn(t,e,this.Lt,this.$t,n);return this.$t=rn(),this.Bt=En(),this.Lt=new st(L),i}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,e)?i.Ct(e,1):i.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new xn,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new st(L),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new xn),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Mt=t,this.Ft=new Map,this.$t=rn(),this.Bt=En(),this.Lt=new st(L)}}function En(){return new nt(B.comparator)}function In(){return new nt(B.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={asc:"ASCENDING",desc:"DESCENDING"},_n={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Sn{constructor(t,e){this.databaseId=t,this.dt=e}}function Nn(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cn(t,e){return t.dt?e.toBase64():e.toUint8Array()}function An(t,e){return Nn(t,e.toTimestamp())}function Dn(t){return b(!!t),P.fromTimestamp(function(t){const e=ut(t);return new M(e.seconds,e.nanos)}(t))}function Rn(t,e){return(n=t,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Ln(t){const e=U.fromString(t);return b(Yn(e)),e}function On(t,e){return Rn(t.databaseId,e.path)}function Mn(t,e){const n=Ln(e);if(n.get(1)!==t.databaseId.projectId)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Vn(n))}function Pn(t,e){return Rn(t.databaseId,e)}function Fn(t){const e=Ln(t);return 4===e.length?U.emptyPath():Vn(e)}function Un(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function zn(t,e,n){return{name:On(t,e),fields:n.value.mapValue.fields}}function Bn(t,e){let n;if(e instanceof We)n={update:zn(t,e.key,e.value)};else if(e instanceof Ke)n={delete:On(t,e.key)};else if(e instanceof qe)n={update:zn(t,e.key,e.data),updateMask:Jn(e.fieldMask)};else{if(!(e instanceof Ge))return v();n={verify:On(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _e)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Se)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ce)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof De)return{fieldPath:e.field.canonicalString(),increment:n._t};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:An(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:v())),n;var i,r}function jn(t,e){return{documents:[Pn(t,e.path)]}}function Wn(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Pn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Rt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Rt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(t.field),op:Xn(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Kn((e=t).field),direction:$n(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.dt||vt(c)?c:{value:c});var a,c,l;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function qn(t){let e=Fn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){b(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Hn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new te(Gn((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Zt(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Zt(n,e)}(n.endAt)),se(e,r,o,s,a,"F",c,l)}function Hn(t){return t?void 0!==t.unaryFilter?[Qn(t)]:void 0!==t.fieldFilter?[(e=t,qt.create(Gn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Hn(t))).reduce(((t,e)=>t.concat(e))):v():[];var e}function $n(t){return Tn[t]}function Xn(t){return _n[t]}function Kn(t){return{fieldPath:t.canonicalString()}}function Gn(t){return z.fromServerFormat(t.fieldPath)}function Qn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gn(t.unaryFilter.field);return qt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gn(t.unaryFilter.field);return qt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gn(t.unaryFilter.field);return qt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Gn(t.unaryFilter.field);return qt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Jn(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Yn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ti=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ei=ti;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Ve(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ze(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ze(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ln();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Ue(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(P.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),fn())}isEqual(t){return this.batchId===t.batchId&&O(this.mutations,t.mutations,((t,e)=>je(t,e)))&&O(this.baseMutations,t.baseMutations,((t,e)=>je(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class ii{static from(t,e,n){b(t.mutations.length===n.length);let i=hn;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new ii(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{withSequenceNumber(t){return new si(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,i,r=P.min(),s=P.min(),o=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this.ne=t}}function ai(t){const e=qn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?de(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(ht(t.integerValue));else if("doubleValue"in t){const n=ht(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),bt(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(dt(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Mt(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):v()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),B.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}ci.ye=new ci;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{addToCollectionParentIndex(t,e){return this.ze.add(e),Q.resolve()}getCollectionParents(t,e){return Q.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Q.resolve()}deleteFieldIndex(t,e){return Q.resolve()}getDocumentsMatchingTarget(t,e){return Q.resolve(null)}getIndexType(t,e){return Q.resolve(0)}getFieldIndexes(t,e){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,e){return Q.resolve(H.min())}getMinOffsetFromCollectionGroup(t,e){return Q.resolve(H.min())}updateCollectionGroup(t,e,n){return Q.resolve()}updateIndexEntries(t,e){return Q.resolve()}constructor(){this.ze=new ui}}class ui{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(U.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(U.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class hi{static withCacheSize(t){return new hi(t,hi.DEFAULT_COLLECTION_PERCENTILE,hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.DEFAULT_COLLECTION_PERCENTILE=10,hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hi.DEFAULT=new hi(41943040,hi.DEFAULT_COLLECTION_PERCENTILE,hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hi.DISABLED=new hi(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class di{next(){return this.En+=2,this.En}static An(){return new di(0)}static Rn(){return new di(-1)}constructor(t){this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Q.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new en((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&ze(n.mutation,t,at.empty(),M.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,fn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=fn()){const i=cn();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=on();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=cn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,fn())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=rn();const s=un(),o=un();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof qe)?r=r.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),ze(o.mutation,e,o.mutation.getFieldMask(),M.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new pi(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=un();let i=new nt(((t,e)=>t-e)),r=fn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||at.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||fn()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=ln();c.forEach((t=>{if(!r.has(t)){const i=Ue(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Q.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,B.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):le(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):Q.resolve(cn());let o=-1,a=r;return s.next((e=>Q.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Q.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,fn()))).next((t=>({batchId:o,changes:an(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next((t=>{let e=on();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=on();return this.indexManager.getCollectionParents(t,i).next((s=>Q.forEach(s,(s=>{const o=(a=e,c=s.child(i),new re(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,Ut.newInvalidDocument(n)))}));let n=on();return i.forEach(((i,r)=>{const s=t.get(i);void 0!==s&&ze(s.mutation,r,at.empty(),M.now()),ge(e,r)&&(n=n.insert(i,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Q.resolve(Ut.newInvalidDocument(e))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{getBundleMetadata(t,e){return Q.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Dn(n.createTime)}),Q.resolve()}getNamedQuery(t,e){return Q.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:ai(n.bundledQuery),readTime:Dn(n.readTime)}),Q.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{getOverlay(t,e){return Q.resolve(this.overlays.get(e))}getOverlays(t,e){const n=cn();return Q.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),Q.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Q.resolve()}getOverlaysForCollection(t,e,n){const i=cn(),r=e.length+1,s=new B(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new nt(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=cn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=cn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return Q.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ri(e,n));let r=this.Xn.get(e);void 0===r&&(r=fn(),this.Xn.set(e,r)),this.Xn.set(e,r.add(n.key))}constructor(){this.overlays=new nt(B.comparator),this.Xn=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new bi(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new bi(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new B(new U([])),n=new bi(e,t),i=new bi(e,t+1),r=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),r.push(t.key)})),r}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new B(new U([])),n=new bi(e,t),i=new bi(e,t+1);let r=fn();return this.es.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new bi(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new st(bi.ts),this.es=new st(bi.ns)}}class bi{static ts(t,e){return B.comparator(t.key,e.key)||L(t.ls,e.ls)}static ns(t,e){return L(t.ls,e.ls)||B.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{checkEmpty(t){return Q.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ni(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.ds=this.ds.add(new bi(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Q.resolve(s)}lookupMutationBatch(t,e){return Q.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),r=i<0?0:i;return Q.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bi(e,0),i=new bi(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);r.push(e)})),Q.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(L);return e.forEach((t=>{const e=new bi(t,0),i=new bi(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),Q.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;B.isDocumentKey(r)||(r=r.child(""));const s=new bi(new B(r),0);let o=new st(L);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),s),Q.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){b(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Q.forEach(e.mutations,(i=>{const r=new bi(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new bi(e,0),i=this.ds.firstAfterOrEqual(n);return Q.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new st(bi.ts)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Q.resolve(n?n.document.mutableCopy():Ut.newInvalidDocument(e))}getEntries(t,e){let n=rn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ut.newInvalidDocument(t))})),Q.resolve(n)}getAllFromCollection(t,e,n){let i=rn();const r=new B(e.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||$(q(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return Q.resolve(i)}getAllFromCollectionGroup(t,e,n,i){v()}Is(t,e){return Q.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ki(this)}getSize(t){return Q.resolve(this.size)}constructor(t){this.ps=t,this.docs=new nt(B.comparator),this.size=0}}class ki extends fi{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),Q.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Q.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new di(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Q.resolve()}updateTargetData(t,e){return this.vn(e),Q.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Q.waitFor(r).next((()=>i))}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Q.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Q.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Q.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Q.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Q.resolve(n)}containsKey(t,e){return Q.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new en((t=>Bt(t)),jt),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Es=0,this.As=new vi,this.targetCount=0,this.Rs=di.An()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new wi(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const i=new Ti(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return Q.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new Y(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Ei(this),this.indexManager=new li,this.remoteDocumentCache=new xi((t=>this.referenceDelegate.Ss(t))),this.wt=new oi(e),this.Ds=new gi(this.wt)}}class Ti extends K{constructor(t){super(),this.currentSequenceNumber=t}}class _i{static Ms(t){return new _i(t)}get Fs(){if(this.Os)return this.Os;throw v()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Q.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Q.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Q.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Fs,(n=>{const i=B.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,P.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Q.or([()=>Q.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new vi,this.Os=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{static Vi(t,e){let n=fn(),i=fn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Si(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((r=>r||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Q.resolve(null)}xi(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(P.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((r=>{const s=this.ki(e,r);return this.Oi(e,s,n,i)?this.Ni(t,e):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),me(e)),this.Mi(t,s,e,W(i,-1)))}))}ki(t,e){let n=new st(ve(t));return e.forEach(((e,i)=>{ge(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,e){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",me(e)),this.Di.getDocumentsMatchingQuery(t,e,H.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mi(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new nt(L),this.Bi=new en((t=>Bt(t)),jt),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function Ai(t,e,n,i){return new Ci(t,e,n,i)}async function Di(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=fn();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Ri(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Li(t,e,n){let i=fn(),r=fn();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=rn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:i,Qi:r}}))}function Oi(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Mi(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Vs.getTargetData(t,e).next((r=>r?(i=r,Q.resolve(i)):n.Vs.allocateTargetId(t).next((r=>(i=new si(e,r,0,t.currentSequenceNumber),n.Vs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.$i.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Pi(t,e,n){const i=w(t),r=i.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!J(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.$i=i.$i.remove(e),i.Bi.delete(r.target)}function Fi(t,e,n){const i=w(t);let r=P.min(),s=fn();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=w(t),r=i.Bi.get(n);return void 0!==r?Q.resolve(i.$i.get(r)):i.Vs.getTargetData(e,n)}(i,t,he(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Fi.getDocumentsMatchingQuery(t,e,n?r:P.min(),n?s:fn()))).next((t=>(Ui(i,ye(e),t),{documents:t,ji:s})))))}function Ui(t,e,n){let i=P.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Li.set(e,i)}class Vi{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=mn()}}class zi{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Vi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new Vi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends class{ro(t,e,n,i,r){const s=this.oo(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.uo(o,i,r),this.co(t,s,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw g("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,i,r,s){return this.ro(t,e,n,i,r)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Wi[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,i){return new Promise(((r,s)=>{const o=new(0,c.XhrIo);o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),r(e);break;case c.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new k(x.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(e)>=0?e:x.UNKNOWN}(t.status);s(new k(e,t.message))}else s(new k(x.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new k(x.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=(0,c.createWebChannelTransport)(),s=(0,c.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.uo(o.initMessageHeaders,e,n),(0,a.isMobileCordova)()||(0,a.isReactNative)()||(0,a.isElectron)()||(0,a.isIE)()||(0,a.isUWP)()||(0,a.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");p("Connection","Creating WebChannel: "+l,o);const u=r.createWebChannel(l,o);let h=!1,d=!1;const f=new qi({jr:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),u.open(),h=!0),p("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),m=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return m(u,c.WebChannel.EventType.OPEN,(()=>{d||p("Connection","WebChannel transport opened.")})),m(u,c.WebChannel.EventType.CLOSE,(()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.eo())})),m(u,c.WebChannel.EventType.ERROR,(t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),f.eo(new k(x.UNAVAILABLE,"The operation could not be completed")))})),m(u,c.WebChannel.EventType.MESSAGE,(t=>{var e;if(!d){const n=t.data[0];b(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){p("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Je[t];if(void 0!==e)return tn(e)}(t),n=r.message;void 0===e&&(e=x.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),d=!0,f.eo(new k(e,n)),u.close()}else p("Connection","WebChannel received:",n),f.no(n)}})),m(s,c.Event.STAT_EVENT,(t=>{t.stat===c.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===c.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return new Sn(t,!0)}class Ki{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,i=1.5,r=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new k(x.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,r,s,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ki(t,e)}}class Qi extends Gi{Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.dt?(b(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?x.UNKNOWN:tn(t.code);return new k(e,t.message||"")}(a);n=new wn(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Mn(t,i.document.name),s=Dn(i.document.updateTime),o=new Pt({mapValue:{fields:i.document.fields}}),a=Ut.newFoundDocument(r,s,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new vn(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Mn(t,i.document),s=i.readTime?Dn(i.readTime):P.min(),o=Ut.newNoDocument(r,s),a=i.removedTargetIds||[];n=new vn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Mn(t,i.document),s=i.removedTargetIds||[];n=new vn([],s,r,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Qe(i),s=t.targetId;n=new bn(s,r)}}var i;return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?Dn(e.readTime):P.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Un(this.wt),e.addTarget=function(t,e){let n;const i=e.target;return n=Wt(i)?{documents:jn(t,i)}:{query:Wn(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Cn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=Nn(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Un(this.wt),e.removeTarget=t,this.Mo(e)}constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.wt=r}}class Ji extends Gi{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(b(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Dn(t.updateTime):Dn(e);return n.isEqual(P.min())&&(n=Dn(e)),new Oe(n,t.transformResults||[])}(t,n)))):[]),r=Dn(t.commitTime);return this.listener.Jo(r,i)}var e,n;return b(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Un(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Bn(this.wt,t)))};this.Mo(e)}constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.wt=r,this.Wo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends class{}{tu(){if(this.Zo)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ro(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new k(x.UNKNOWN,t.toString())}))}ao(t,e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ao(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new k(x.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}}class Zi{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(m(e),this.su=!1):p("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((t=>{n.enqueueAndForget((async()=>{lr(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.lu.add(4),await nr(e),e._u.set("Unknown"),e.lu.delete(4),await er(e)}(this))}))})),this._u=new Zi(n,i)}}async function er(t){if(lr(t))for(const e of t.fu)await e(!0)}async function nr(t){for(const e of t.fu)await e(!1)}function ir(t,e){const n=w(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),cr(n)?ar(n):Sr(n).Co()&&sr(n,e))}function rr(t,e){const n=w(t),i=Sr(n);n.hu.delete(e),i.Co()&&or(n,e),0===n.hu.size&&(i.Co()?i.ko():lr(n)&&n._u.set("Unknown"))}function sr(t,e){t.wu.Nt(e.targetId),Sr(t).Qo(e)}function or(t,e){t.wu.Nt(e),Sr(t).jo(e)}function ar(t){t.wu=new kn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Sr(t).start(),t._u.iu()}function cr(t){return lr(t)&&!Sr(t).Do()&&t.hu.size>0}function lr(t){return 0===w(t).lu.size}function ur(t){t.wu=void 0}async function hr(t){t.hu.forEach(((e,n)=>{sr(t,e)}))}async function dr(t,e){ur(t),cr(t)?(t._u.uu(e),ar(t)):t._u.set("Unknown")}async function fr(t,e,n){if(t._u.set("Online"),e instanceof wn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.hu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.hu.delete(i),t.wu.removeTarget(i))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await pr(t,n)}else if(e instanceof vn?t.wu.Ut(e):e instanceof bn?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(P.min()))try{const e=await Ri(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.hu.get(i);r&&t.hu.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),or(t,e);const i=new si(n.target,e,1,n.sequenceNumber);sr(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await pr(t,e)}}async function pr(t,e,n){if(!J(e))throw e;t.lu.add(1),await nr(t),t._u.set("Offline"),n||(n=()=>Ri(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await er(t)}))}function mr(t,e){return e().catch((n=>pr(t,n,e)))}async function gr(t){const e=w(t),n=Nr(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;yr(e);)try{const t=await Oi(e.localStore,i);if(null===t){0===e.au.length&&n.ko();break}i=t.batchId,vr(e,t)}catch(t){await pr(e,t)}br(e)&&wr(e)}function yr(t){return lr(t)&&t.au.length<10}function vr(t,e){t.au.push(e);const n=Nr(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function br(t){return lr(t)&&!Nr(t).Do()&&t.au.length>0}function wr(t){Nr(t).start()}async function xr(t){Nr(t).Xo()}async function kr(t){const e=Nr(t);for(const n of t.au)e.Ho(n.mutations)}async function Er(t,e,n){const i=t.au.shift(),r=ii.from(i,e,n);await mr(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await gr(t)}async function Ir(t,e){e&&Nr(t).zo&&await async function(t,e){if(Ze(n=e.code)&&n!==x.ABORTED){const n=t.au.shift();Nr(t).No(),await mr(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await gr(t)}var n}(t,e),br(t)&&wr(t)}async function Tr(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=lr(n);n.lu.add(3),await nr(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await er(n)}async function _r(t,e){const n=w(t);e?(n.lu.delete(2),await er(n)):e||(n.lu.add(2),await nr(n),n._u.set("Unknown"))}function Sr(t){return t.mu||(t.mu=function(t,e,n){const i=w(t);return i.tu(),new Qi(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:hr.bind(null,t),Jr:dr.bind(null,t),Go:fr.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),cr(t)?ar(t):t._u.set("Unknown")):(await t.mu.stop(),ur(t))}))),t.mu}function Nr(t){return t.gu||(t.gu=function(t,e,n){const i=w(t);return i.tu(),new Ji(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:xr.bind(null,t),Jr:Ir.bind(null,t),Yo:kr.bind(null,t),Jo:Er.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await gr(t)):(await t.gu.stop(),t.au.length>0&&(p("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cr{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Cr(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new k(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Ar(t,e){if(m("AsyncQueue",`${e}: ${t}`),J(t))return new k(x.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{static emptySet(t){return new Dr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Dr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Dr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||B.comparator(e.key,n.key):(t,e)=>B.comparator(t.key,e.key),this.keyedMap=on(),this.sortedSet=new nt(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):v():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.yu=new nt(B.comparator)}}class Lr{static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Lr(t,e,Dr.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fe(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.Iu=void 0,this.listeners=[]}}class Mr{constructor(){this.queries=new en((t=>pe(t)),fe),this.onlineState="Unknown",this.Tu=new Set}}async function Pr(t,e){const n=w(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Or),r)try{s.Iu=await n.onListen(i)}catch(t){const n=Ar(t,`Initialization of query '${me(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&zr(n)}async function Fr(t,e){const n=w(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Ur(t,e){const n=w(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Au(t)&&(i=!0);r.Iu=t}}i&&zr(n)}function Vr(t,e,n){const i=w(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function zr(t){t.Tu.forEach((t=>{t.next()}))}class Br{Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Lr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Lr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t){this.key=t}}class Wr{constructor(t){this.key=t}}class qr{get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Rr,i=e?e.Uu:this.Uu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=ge(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Qu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Lu(u,a)>0||c&&this.Lu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:r}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==r.length||a?{snapshot:new Lr(this.query,t.Uu,i,r,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Rr,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=fn(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Wr(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new jr(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=fn();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Lr.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=fn(),this.mutatedKeys=fn(),this.Lu=ve(t),this.Uu=new Dr(this.Lu)}}class Hr{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class $r{constructor(t){this.key=t,this.Xu=!1}}class Xr{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new en((t=>pe(t)),fe),this.ec=new Map,this.nc=new Set,this.sc=new nt(B.comparator),this.ic=new Map,this.rc=new vi,this.oc={},this.uc=new Map,this.cc=di.Rn(),this.onlineState="Unknown",this.ac=void 0}}async function Kr(t,e){const n=ds(t);let i,r;const s=n.tc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Yu();else{const t=await Mi(n.localStore,he(e));n.isPrimaryClient&&ir(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Gr(n,e,i,"current"===s)}return r}async function Gr(t,e,n,i){t.hc=(e,n,i)=>async function(t,e,n,i){let r=e.view.Ku(n);r.Oi&&(r=await Fi(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return os(t,e.targetId,o.zu),o.snapshot}(t,e,n,i);const r=await Fi(t.localStore,e,!0),s=new qr(e,r.ji),o=s.Ku(r.documents),a=yn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);os(t,n,c.zu);const l=new Hr(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Qr(t,e){const n=w(t),i=n.tc.get(e),r=n.ec.get(i.targetId);if(r.length>1)return n.ec.set(i.targetId,r.filter((t=>!fe(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Pi(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),rr(n.remoteStore,i.targetId),rs(n,i.targetId)})).catch(G)):(rs(n,i.targetId),await Pi(n.localStore,i.targetId,!0))}async function Jr(t,e){const n=w(t);try{const t=await function(t,e){const n=w(t),i=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);var u,h,d;e.targetMismatches.has(a)?l=l.withResumeToken(ct.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),h=l,d=s,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Vs.updateTargetData(t,l))}));let a=rn(),c=fn();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Li(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!i.isEqual(P.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Q.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ic.get(e);i&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Xu=!0:t.modifiedDocuments.size>0?b(i.Xu):t.removedDocuments.size>0&&(b(i.Xu),i.Xu=!1))})),await ls(n,t,e)}catch(t){await G(t)}}function Yr(t,e,n){const i=w(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const r=i.view.Eu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=w(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0)})),i&&zr(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Zr(t,e,n){const i=w(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ic.get(e),s=r&&r.key;if(s){let t=new nt(B.comparator);t=t.insert(s,Ut.newNoDocument(s,P.min()));const n=fn().add(s),r=new gn(P.min(),new Map,new st(L),t,n);await Jr(i,r),i.sc=i.sc.remove(s),i.ic.delete(e),cs(i)}else await Pi(i.localStore,e,!1).then((()=>rs(i,e,n))).catch(G)}async function ts(t,e){const n=w(t),i=e.batch.batchId;try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Q.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);b(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=fn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);is(n,i,null),ns(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ls(n,t)}catch(t){await G(t)}}async function es(t,e,n){const i=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(b(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);is(i,e,n),ns(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ls(i,t)}catch(t){await G(t)}}function ns(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function is(t,e,n){const i=w(t);let r=i.oc[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.oc[i.currentUser.toKey()]=r}}function rs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),n&&t.Zu.lc(i,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||ss(t,e)}))}function ss(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(rr(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),cs(t))}function os(t,e,n){for(const i of n)i instanceof jr?(t.rc.addReference(i.key,e),as(t,i)):i instanceof Wr?(p("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||ss(t,i.key)):v()}function as(t,e){const n=e.key,i=n.path.canonicalString();t.sc.get(n)||t.nc.has(i)||(p("SyncEngine","New document in limbo: "+n),t.nc.add(i),cs(t))}function cs(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(U.fromString(e)),i=t.cc.next();t.ic.set(i,new $r(n)),t.sc=t.sc.insert(n,i),ir(t.remoteStore,new si(he(oe(n.path)),i,2,Y.ot))}}async function ls(t,e,n){const i=w(t),r=[],s=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Si.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Zu.Go(r),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Q.forEach(e,(e=>Q.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Q.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!J(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(e,r)}}}(i.localStore,s))}async function us(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Di(n.localStore,e);n.currentUser=e,(i=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new k(x.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ls(n,t.Ki)}var i}function hs(t,e){const n=w(t),i=n.ic.get(e);if(i&&i.Xu)return fn().add(i.key);{let t=fn();const i=n.ec.get(e);if(!i)return t;for(const e of i){const i=n.tc.get(e);t=t.unionWith(i.view.qu)}return t}}function ds(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jr.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zr.bind(null,e),e.Zu.Go=Ur.bind(null,e.eventManager),e.Zu.lc=Vr.bind(null,e.eventManager),e}function fs(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ts.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=es.bind(null,e),e}class ps{async initialize(t){this.wt=Xi(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Ai(this.persistence,new Ni,t.initialUser,this.wt)}_c(t){return new Ii(_i.Ms,this.wt)}dc(t){return new zi}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ms{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Yr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=us.bind(null,this.syncEngine),await _r(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Mr}createDatastore(t){const e=Xi(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Hi(i));var i,r,s;return r=t.authCredentials,s=t.appCheckCredentials,new Yi(r,s,n,e)}createRemoteStore(t){var e,n,i,r,s;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Yr(this.syncEngine,t,0),s=ji.V()?new ji:new Bi,new tr(e,n,i,r,s)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Xr(t,e,n,i,r,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);p("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await nr(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ar(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=R.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function vs(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Di(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function bs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ws(t);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Tr(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Tr(e.remoteStore,n))),t.onlineComponents=e}async function ws(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await vs(t,new ps)),t.offlineComponents}async function xs(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await bs(t,new ms)),t.onlineComponents}function ks(t){return xs(t).then((t=>t.syncEngine))}async function Es(t){const e=await xs(t),n=e.eventManager;return n.onListen=Kr.bind(null,e.syncEngine),n.onUnlisten=Qr.bind(null,e.syncEngine),n}function Is(t,e,n={}){const i=new E;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new gs({next:s=>{e.enqueueAndForget((()=>Fr(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new k(x.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new k(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Br(oe(n.path),s,{includeMetadataChanges:!0,Du:!0});return Pr(t,o)}(await Es(t),t.asyncQueue,e,n,i))),i.promise}const Ts=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e,n){if(!n)throw new k(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ss(t){if(!B.isDocumentKey(t))throw new k(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ns(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Cs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ns(t);throw new k(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new k(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new k(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new k(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{get app(){if(!this._app)throw new k(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new k(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new As(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new T;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new N(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new k(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ts.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ts.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new As({}),this._settingsFrozen=!1,t instanceof yt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new k(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yt(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rs(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ls{withConverter(t){return new Ls(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Os extends Ls{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rs(this.firestore,null,new B(t))}withConverter(t){return new Os(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,oe(n)),this._path=n,this.type="collection"}}function Ms(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=R.I()),_s("doc","path",e),t instanceof Ds){const i=U.fromString(e,...n);return Ss(i),new Rs(t,null,new B(i))}{if(!(t instanceof Rs||t instanceof Os))throw new k(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(U.fromString(e,...n));return Ss(i),new Rs(t.firestore,t instanceof Os?t.converter:null,new B(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=$i();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new E;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!J(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Cr.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&v()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ki(this,"async_queue_retry"),this.Kc=()=>{const t=$i();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=$i();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class Fs extends Ds{_terminate(){return this._firestoreClient||zs(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ps,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function Us(t=(0,i.getApp)()){return(0,i._getProvider)(t,"firestore").getImmediate()}function Vs(t){return t._firestoreClient||zs(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zs(t){var e;const n=t._freezeSettings(),i=(r=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new gt(r,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,s,o,a;t._firestoreClient=new ys(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new k(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{static fromBase64String(t){try{return new js(ct.fromBase64String(t))}catch(t){throw new k(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new js(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=/^__.*__$/;class $s{toMutation(t,e){return null!==this.fieldMask?new qe(t,this.data,this.fieldMask,e,this.fieldTransforms):new We(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Xs(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Ks{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.sa(t),i}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return so(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Xs(this.Zc)&&Hs.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}}class Gs{aa(t,e,n,i=!1){return new Ks({Zc:t,methodName:e,ca:n,path:z.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Xi(t)}}function Qs(t){const e=t._freezeSettings(),n=Xi(t._databaseId);return new Gs(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Js(t,e,n,i,r,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,r);eo("Data must be an object, but it was:",o,i);const a=Zs(i,o);let c,l;if(s.merge)c=new at(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=no(e,i,n);if(!o.contains(r))throw new k(x.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);oo(t,r)||t.push(r)}c=new at(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new $s(new Pt(a),c,l)}function Ys(t,e){if(to(t=(0,a.getModularInstance)(t)))return eo("Unsupported field value:",e,t),Zs(t,e);if(t instanceof Ws)return function(t,e){if(!Xs(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Ys(r,e.ra(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ke(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:Nn(e.wt,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Nn(e.wt,n)}}if(t instanceof qs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof js)return{bytesValue:Cn(e.wt,t._byteString)};if(t instanceof Rs){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Rn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Ns(t)}`)}(t,e)}function Zs(t,e){const n={};return et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tt(t,((t,i)=>{const r=Ys(i,e.ea(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function to(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof qs||t instanceof js||t instanceof Rs||t instanceof Ws)}function eo(t,e,n){if(!to(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Ns(n);throw"an object"===i?e.oa(t+" a custom object"):e.oa(t+" "+i)}var i}function no(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof Bs)return e._internalPath;if("string"==typeof e)return ro(t,e);throw so("Field path arguments must be of type string or ",t,!1,void 0,n)}const io=new RegExp("[~\\*/\\[\\]]");function ro(t,e,n){if(e.search(io)>=0)throw so(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bs(...e.split("."))._internalPath}catch(i){throw so(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function so(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new k(x.INVALID_ARGUMENT,a+t+c)}function oo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{get id(){return this._key.path.lastSegment()}get ref(){return new Rs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new co(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(lo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}}class co extends ao{data(){return super.data()}}function lo(t,e){return"string"==typeof e?ro(t,e):e instanceof Bs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class ho extends ao{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(lo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}}class fo extends ho{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{convertValue(t,e="none"){switch(kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return tt(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new qs(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=pt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mt(t));default:return null}}convertTimestamp(t){const e=ut(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);b(Yn(n));const i=new yt(n.get(1),n.get(3)),r=new B(n.popFirst(5));return i.isEqual(e)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function go(t){t=Cs(t,Rs);const e=Cs(t.firestore,Fs);return Is(Vs(e),t._key).then((n=>wo(e,t,n)))}class yo extends po{convertBytes(t){return new js(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rs(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function vo(t,e,n){t=Cs(t,Rs);const i=Cs(t.firestore,Fs),r=mo(t.converter,e,n);return bo(i,[Js(Qs(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Me.none())])}function bo(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=fs(t);try{const t=await function(t,e){const n=w(t),i=M.now(),r=e.reduce(((t,e)=>t.add(e.key)),fn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=rn(),c=fn();return n.Ui.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Be(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new qe(t.key,e,Ft(e.value.mapValue),Me.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:an(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oc[t.currentUser.toKey()];i||(i=new nt(L)),i=i.insert(e,n),t.oc[t.currentUser.toKey()]=i}(i,t.batchId,n),await ls(i,t.changes),await gr(i.remoteStore)}catch(t){const e=Ar(t,"Failed to persist write");n.reject(e)}}(await ks(t),e,n))),n.promise}(Vs(t),e)}function wo(t,e,n){const i=n.docs.get(e._key),r=new yo(t);return new ho(t,r,e._key,i,new uo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){var n;n=i.SDK_VERSION,h=n,(0,i._registerComponent)(new(0,r.Component)("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new Fs(i,new _(t.getProvider("auth-internal")),new A(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,i.registerVersion)(l,"3.4.13",t),(0,i.registerVersion)(l,"3.4.13","esm2017")}()})),s.register("lW9Fu",(function(e,i){t(e.exports,"createWebChannelTransport",(function(){return ai})),t(e.exports,"getStatEventTarget",(function(){return ci})),t(e.exports,"ErrorCode",(function(){return li})),t(e.exports,"EventType",(function(){return ui})),t(e.exports,"Event",(function(){return hi})),t(e.exports,"Stat",(function(){return di})),t(e.exports,"FetchXmlHttpFactory",(function(){return fi})),t(e.exports,"WebChannel",(function(){return pi})),t(e.exports,"XhrIo",(function(){return mi}));var r,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},c=s||self;function l(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function b(){this.s=this.s,this.o=this.o}var w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}(this);delete w[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},k=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function E(t){return Array.prototype.concat.apply([],arguments)}function I(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function T(t){return/^[\s\xa0]*$/.test(t)}var _,S=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return-1!=t.indexOf(e)}function C(t,e){return t<e?-1:t>e?1:0}t:{var A=c.navigator;if(A){var D=A.userAgent;if(D){_=D;break t}}_=""}function R(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<O.length;e++)n=O[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function P(t){return P[" "](t),t}P[" "]=l;var F,U,V=N(_,"Opera"),z=N(_,"Trident")||N(_,"MSIE"),B=N(_,"Edge"),j=B||z,W=N(_,"Gecko")&&!(N(_.toLowerCase(),"webkit")&&!N(_,"Edge"))&&!(N(_,"Trident")||N(_,"MSIE"))&&!N(_,"Edge"),q=N(_.toLowerCase(),"webkit")&&!N(_,"Edge");function H(){var t=c.document;return t?t.documentMode:void 0}t:{var $="",X=(U=_,W?/rv:([^\);]+)(\)|;)/.exec(U):B?/Edge\/([\d\.]+)/.exec(U):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(U):q?/WebKit\/(\S+)/.exec(U):V?/(?:Version)[ \/]?(\S+)/.exec(U):void 0);if(X&&($=X?X[1]:""),z){var K=H();if(null!=K&&K>parseFloat($)){F=String(K);break t}}F=$}var G,Q={};function J(){return function(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=S(String(F)).split("."),n=S("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=C(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||C(0==r[2].length,0==s[2].length)||C(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(c.document&&z){var Y=H();G=Y||(parseInt(F,10)||void 0)}else G=void 0;var Z=G,tt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{c.addEventListener("test",l,e),c.removeEventListener("test",l,e)}catch(t){}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function nt(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(W){t:{try{P(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nt.Z.h.call(this)}}et.prototype.h=function(){this.defaultPrevented=!0},v(nt,et);var it={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),st=0;function ot(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++st,this.ca=this.fa=!1}function at(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ct(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=x(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(at(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ut(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}ct.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ut(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ot(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var ht="closure_lm_"+(1e6*Math.random()|0),dt={};function ft(t,e,n,i,r){if(i&&i.once)return mt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,i,r);return null}return n=kt(n),t&&t[rt]?t.N(e,n,h(i)?!!i.capture:!!i,r):pt(t,e,n,!1,i,r)}function pt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=wt(t);if(a||(t[ht]=a=new ct(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=bt;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)tt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(vt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function mt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],n,i,r);return null}return n=kt(n),t&&t[rt]?t.O(e,n,h(i)?!!i.capture:!!i,r):pt(t,e,n,!0,i,r)}function gt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)gt(t,e[s],n,i,r);else i=h(i)?!!i.capture:!!i,n=kt(n),t&&t[rt]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ut(s=t.g[e],n,i,r))&&(at(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=wt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ut(e,n,i,r)),(n=-1<t?e[t]:null)&&yt(n))}function yt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[rt])lt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(vt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=wt(e))?(lt(n,t),0==n.h&&(n.src=null,e[ht]=null)):at(t)}}}function vt(t){return t in dt?dt[t]:dt[t]="on"+t}function bt(t,e){if(t.ca)t=!0;else{e=new nt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&yt(t),t=n.call(i,e)}return t}function wt(t){return(t=t[ht])instanceof ct?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function kt(t){return"function"==typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function Et(){b.call(this),this.i=new ct(this),this.P=this,this.I=null}function It(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var r=e;M(e=new et(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Tt(o,i,!0,e)&&r}if(r=Tt(o=e.g=t,i,!0,e)&&r,r=Tt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Tt(o=e.g=n[s],i,!1,e)&&r}function Tt(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}v(Et,b),Et.prototype[rt]=!0,Et.prototype.removeEventListener=function(t,e,n,i){gt(this,t,e,n,i)},Et.prototype.M=function(){if(Et.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)at(n[i]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Et.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var _t=c.JSON.stringify;function St(){var t=Ot;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Nt,Ct=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new At),(t=>t.reset()));class At{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Dt(t){c.setTimeout((()=>{throw t}),0)}function Rt(t,e){Nt||function(){var t=c.Promise.resolve(void 0);Nt=function(){t.then(Mt)}}(),Lt||(Nt(),Lt=!0),Ot.add(t,e)}var Lt=!1,Ot=new class{add(t,e){const n=Ct.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Mt(){for(var t;t=St();){try{t.h.call(t.g)}catch(t){Dt(t)}var e=Ct;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lt=!1}function Pt(t,e){Et.call(this),this.h=t||1,this.g=e||c,this.j=g(this.kb,this),this.l=Date.now()}function Ft(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ut(t,e,n){if("function"==typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function Vt(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,Vt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Pt,Et),(r=Pt.prototype).da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),It(this,"tick"),this.da&&(Ft(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Pt.Z.M.call(this),Ft(this),delete this.g};class zt extends b{l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Bt(t){b.call(this),this.h=t,this.g={}}v(Bt,b);var jt=[];function Wt(t,e,n,i){Array.isArray(n)||(n&&(jt[0]=n.toString()),n=jt);for(var r=0;r<n.length;r++){var s=ft(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qt(t){R(t.g,(function(t,e){this.g.hasOwnProperty(e)&&yt(t)}),t),t.g={}}function Ht(){this.g=!0}function $t(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return _t(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Bt.prototype.M=function(){Bt.Z.M.call(this),qt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ht.prototype.Aa=function(){this.g=!1},Ht.prototype.info=function(){};var Xt={},Kt=null;function Gt(){return Kt=Kt||new Et}function Qt(t){et.call(this,Xt.Ma,t)}function Jt(t){const e=Gt();It(e,new Qt(e,t))}function Yt(t,e){et.call(this,Xt.STAT_EVENT,t),this.stat=e}function Zt(t){const e=Gt();It(e,new Yt(e,t))}function te(t,e){et.call(this,Xt.Na,t),this.size=e}function ee(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}Xt.Ma="serverreachability",v(Qt,et),Xt.STAT_EVENT="statevent",v(Yt,et),Xt.Na="timingevent",v(te,et);var ne={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ie={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function re(){}function se(t){return t.h||(t.h=t.i())}function oe(){}re.prototype.h=null;var ae,ce={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function le(){et.call(this,"d")}function ue(){et.call(this,"c")}function he(){}function de(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Bt(this),this.P=pe,t=j?125:void 0,this.W=new Pt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}v(le,et),v(ue,et),v(he,re),he.prototype.g=function(){return new XMLHttpRequest},he.prototype.i=function(){return{}},ae=new he;var pe=45e3,me={},ge={};function ye(t,e,n){t.K=1,t.v=ze(Oe(e)),t.s=n,t.U=!0,ve(t,null)}function ve(t,e){t.F=Date.now(),ke(t),t.A=Oe(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Ze(n.h,"t",i),t.C=0,n=t.l.H,t.h=new fe,t.g=ti(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zt(g(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Jt(1),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function be(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function we(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=xe(t,n),i==ge){4==e&&(t.o=4,Zt(14),r=!1),$t(t.j,t.m,null,"[Incomplete Response]");break}if(i==me){t.o=4,Zt(15),$t(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}$t(t.j,t.m,i,null),Se(t,i)}be(t)&&i!=ge&&i!=me&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$n(e),e.L=!0,Zt(11))):($t(t.j,t.m,n,"[Invalid Chunked Response]"),_e(t),Te(t))}function xe(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ge:(n=Number(e.substring(n,i)),isNaN(n)?me:(i+=1)+n>e.length?ge:(e=e.substr(i,n),t.C=i+n,e))}function ke(t){t.Y=Date.now()+t.P,Ee(t,t.P)}function Ee(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ee(g(t.eb,t),e)}function Ie(t){t.B&&(c.clearTimeout(t.B),t.B=null)}function Te(t){0==t.l.G||t.I||Gn(t.l,t)}function _e(t){Ie(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ft(t.W),qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Se(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||on(n.i,t)))if(n.I=t.N,!t.J&&on(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Kn(n),Fn(n)}Hn(n),Zt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=ee(g(n.ab,n),6e3));if(1>=sn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Jn(n,11)}else if((t.J||n.g==t)&&Kn(n),!T(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(N(t,"spdy")||N(t,"quic")||N(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(an(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Ve(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Zn(i,i.H?i.la:null,i.W),o.J){cn(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Ie(a),ke(a)),i.g=o}else qn(i);0<n.l.length&&zn(n)}else"stop"!=l[0]&&"close"!=l[0]||Jn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Jn(n,7):Pn(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Jt(4)}catch(t){}}function Ne(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)k(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"==typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Ce(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Ce)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ae(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];De(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)De(r,i=t.g[e])||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function De(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(r=de.prototype).setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Dn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Dn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||j||this.g&&(this.h.h||this.g.ga()||Rn(this.g)))){this.I||4!=h||7==e||Jt(8==e||0>=d?3:2),Ie(this);var n=this.g.ba();this.N=n;e:if(be(this)){var i=Rn(this.g);t="";var r=i.length,s=4==Dn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){_e(this),Te(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Zt(12),_e(this),Te(this);break t}$t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Se(this,n)}this.U?(we(this,h,o),j&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):($t(this.j,this.m,o,null),Se(this,o)),4==h&&_e(this),this.i&&!this.I&&(4==h?Gn(this.l,this):(this.i=!1,ke(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zt(12)):(this.o=0,Zt(13)),_e(this),Te(this)}}}catch(t){}},r.fb=function(){if(this.g){var t=Dn(this.g),e=this.g.ga();this.C<e.length&&(Ie(this),we(this,t,e),this.i&&4!=t&&ke(this))}},r.cancel=function(){this.I=!0,_e(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Jt(3),Zt(17)),_e(this),this.o=2,Te(this)):Ee(this,this.Y-t)},(r=Ce.prototype).R=function(){Ae(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ae(this),this.g.concat()},r.get=function(t,e){return De(this.h,t)?this.h[t]:e},r.set=function(t,e){De(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var Re=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Le(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Le){this.g=void 0!==e?e:t.g,Me(this,t.j),this.s=t.s,Pe(this,t.i),Fe(this,t.m),this.l=t.l,e=t.h;var n=new Ge;n.i=e.i,e.g&&(n.g=new Ce(e.g),n.h=e.h),Ue(this,n),this.o=t.o}else t&&(n=String(t).match(Re))?(this.g=!!e,Me(this,n[1]||"",!0),this.s=Be(n[2]||""),Pe(this,n[3]||"",!0),Fe(this,n[4]),this.l=Be(n[5]||"",!0),Ue(this,n[6]||"",!0),this.o=Be(n[7]||"")):(this.g=!!e,this.h=new Ge(null,this.g))}function Oe(t){return new Le(t)}function Me(t,e,n){t.j=n?Be(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pe(t,e,n){t.i=n?Be(e,!0):e}function Fe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ue(t,e,n){e instanceof Ge?(t.h=e,function(t,e){e&&!t.j&&(Qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Je(this,e),Ze(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=je(e,Xe)),t.h=new Ge(e,t.g))}function Ve(t,e,n){t.h.set(e,n)}function ze(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Be(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function je(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,We),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function We(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Le.prototype.toString=function(){var t=[],e=this.j;e&&t.push(je(e,qe,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(je(e,qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(je(n,"/"==n.charAt(0)?$e:He,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",je(n,Ke)),t.join("")};var qe=/[#\/\?@]/g,He=/[#\?:]/g,$e=/[#\?]/g,Xe=/[#\?@]/g,Ke=/#/g;function Ge(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qe(t){t.g||(t.g=new Ce,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Je(t,e){Qe(t),e=tn(t,e),De(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,De((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ae(t)))}function Ye(t,e){return Qe(t),e=tn(t,e),De(t.g.h,e)}function Ze(t,e,n){Je(t,e),0<n.length&&(t.i=null,t.g.set(tn(t,e),I(n)),t.h+=n.length)}function tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=Ge.prototype).add=function(t,e){Qe(this),this.i=null,t=tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Qe(this),this.g.forEach((function(n,i){k(n,(function(n){t.call(e,n,i,this)}),this)}),this)},r.T=function(){Qe(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},r.R=function(t){Qe(this);var e=[];if("string"==typeof t)Ye(this,t)&&(e=E(e,this.g.get(tn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=E(e,t[n])}return e},r.set=function(t,e){return Qe(this),this.i=null,Ye(this,t=tn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function en(t){this.l=t||nn,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function sn(t){return t.h?1:t.g?t.g.size:0}function on(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function an(t,e){t.g?t.g.add(e):t.h=e}function cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ln(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function un(){}function hn(){this.g=new un}function dn(t,e,n){const i=n||"";try{Ne(t,(function(t,n){let r=t;h(t)&&(r=_t(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function fn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}function mn(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},un.prototype.stringify=function(t){return c.JSON.stringify(t,void 0)},un.prototype.parse=function(t){return c.JSON.parse(t,void 0)},v(pn,re),pn.prototype.g=function(){return new mn(this.l,this.j)},pn.prototype.i=function(t){return function(){return t}}({}),v(mn,Et);var gn=0;function yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bn(t)}function bn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=mn.prototype).open=function(t,e){if(this.readyState!=gn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||c).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=gn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vn(this):bn(this),3==this.readyState&&yn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,vn(this))},r.Ta=function(t){this.g&&(this.response=t,vn(this))},r.ha=function(){this.g&&vn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var wn=c.JSON.parse;function xn(t){Et.call(this),this.headers=new Ce,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kn,this.K=this.L=!1}v(xn,Et);var kn="",En=/^https?$/i,In=["POST","PUT"];function Tn(t){return"content-type"==t.toLowerCase()}function _n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sn(t),Cn(t)}function Sn(t){t.D||(t.D=!0,It(t,"complete"),It(t,"error"))}function Nn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Dn(t)||2!=t.ba()))if(t.v&&4==Dn(t))Ut(t.Fa,0,t);else if(It(t,"readystatechange"),4==Dn(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(Re)[1]||null;if(!r&&c.self&&c.self.location){var s=c.self.location.protocol;r=s.substr(0,s.length-1)}i=!En.test(r?r.toLowerCase():"")}n=i}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var o=2<Dn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Sn(t)}}finally{Cn(t)}}}function Cn(t,e){if(t.g){An(t);const n=t.g,i=t.C[0]?l:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function An(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function Dn(t){return t.g?t.g.readyState:0}function Rn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ln(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return R(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ve(t,e,n))}function On(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mn(t){this.za=0,this.l=[],this.h=new Ht,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=On("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=On("baseRetryDelayMs",5e3,t),this.$a=On("retryDelaySeedMs",1e4,t),this.Ya=On("forwardChannelMaxRetries",2,t),this.ra=On("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new en(t&&t.concurrentRequestLimit),this.Ca=new hn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Pn(t){if(Un(t),3==t.G){var e=t.V++,n=Oe(t.F);Ve(n,"SID",t.J),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),jn(t,n),(e=new de(t,t.h,e,void 0)).K=2,e.v=ze(Oe(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(e.v.toString(),"")),!n&&c.Image&&((new Image).src=e.v,n=!0),n||(e.g=ti(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ke(e)}Yn(t)}function Fn(t){t.g&&($n(t),t.g.cancel(),t.g=null)}function Un(t){Fn(t),t.u&&(c.clearTimeout(t.u),t.u=null),Kn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function Vn(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&zn(t)}function zn(t){rn(t.i)||t.m||(t.m=!0,Rt(t.Ha,t),t.C=0)}function Bn(t,e){var n;n=e?e.m:t.V++;const i=Oe(t.F);Ve(i,"SID",t.J),Ve(i,"RID",n),Ve(i,"AID",t.U),jn(t,i),t.o&&t.s&&Ln(i,t.o,t.s),n=new de(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Wn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),an(t.i,n),ye(n,i,e)}function jn(t,e){t.j&&Ne({},(function(t,n){Ve(e,n,t)}))}function Wn(t,e,n){n=Math.min(t.l.length,n);var i=t.j?g(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{dn(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function qn(t){t.g||t.u||(t.Y=1,Rt(t.Ga,t),t.A=0)}function Hn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ee(g(t.Ga,t),Qn(t,t.A)),t.A++,!0)}function $n(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function Xn(t){t.g=new de(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Oe(t.oa);Ve(e,"RID","rpc"),Ve(e,"SID",t.J),Ve(e,"CI",t.N?"0":"1"),Ve(e,"AID",t.U),jn(t,e),Ve(e,"TYPE","xmlhttp"),t.o&&t.s&&Ln(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ze(Oe(e)),n.s=null,n.U=!0,ve(n,t)}function Kn(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Gn(t,e){var n=null;if(t.g==e){Kn(t),$n(t),t.g=null;var i=2}else{if(!on(t.i,e))return;n=e.D,cn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;It(i=Gt(),new te(i,n,e,r)),zn(t)}else qn(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==i&&function(t,e){return!(sn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ee(g(t.Ha,t,e),Qn(t,t.C)),t.C++,0)))}(t,e)||2==i&&Hn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}function Qn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Jn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=g(t.jb,t);n||(n=new Le("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Me(n,"https"),ze(n)),function(t,e){const n=new Ht;if(c.Image){const i=new Image;i.onload=y(fn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=y(fn,n,i,"TestLoadImage: error",!1,e),i.onabort=y(fn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=y(fn,n,i,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Zt(2);t.G=0,t.j&&t.j.va(e),Yn(t),Un(t)}function Yn(t){t.G=0,t.I=-1,t.j&&(0==ln(t.i).length&&0==t.l.length||(t.i.i.length=0,I(t.l),t.l.length=0),t.j.ua())}function Zn(t,e,n){let i=function(t){return t instanceof Le?Oe(t):new Le(t,void 0)}(n);if(""!=i.i)e&&Pe(i,e+"."+i.i),Fe(i,i.m);else{const t=c.location;i=function(t,e,n,i){var r=new Le(null,void 0);return t&&Me(r,t),e&&Pe(r,e),n&&Fe(r,n),i&&(r.l=i),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&R(t.aa,(function(t,e){Ve(i,e,t)})),e=t.D,n=t.sa,e&&n&&Ve(i,e,n),Ve(i,"VER",t.ma),jn(t,i),i}function ti(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new xn(new pn({ib:!0})):new xn(t.qa)).L=t.H,e}function ei(){}function ni(){if(z&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function ii(t,e){Et.call(this),this.g=new Mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!T(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!T(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new oi(this)}function ri(t){le.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function si(){ue.call(this),this.status=1}function oi(t){this.g=t}(r=xn.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ae.g(),this.C=this.u?se(this.u):se(ae),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void _n(this,t)}t=n||"";const r=new Ce(this.headers);i&&Ne(i,(function(t,e){r.set(e,t)})),i=function(t){t:{var e=Tn;const n=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=c.FormData&&t instanceof c.FormData,!(0<=x(In,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{An(this),0<this.B&&((this.K=function(t){return z&&J()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Ut(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){_n(this,t)}},r.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),Cn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cn(this,!0)),xn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Nn(this):this.cb())},r.cb=function(){Nn(this)},r.ba=function(){try{return 2<Dn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),wn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=Mn.prototype).ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new de(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),M(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Wn(this,r,e),Ve(n=Oe(this.F),"RID",t),Ve(n,"CVER",22),this.D&&Ve(n,"X-HTTP-Session-Id",this.D),jn(this,n),this.o&&s&&Ln(n,this.o,s),an(this.i,r),this.Ra&&Ve(n,"TYPE","init"),this.ja?(Ve(n,"$req",e),Ve(n,"SID","null"),r.$=!0,ye(r,n,null)):ye(r,n,e),this.G=2}}else 3==this.G&&(t?Bn(this,t):0==this.l.length||rn(this.i)||Bn(this))},r.Ga=function(){if(this.u=null,Xn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ee(g(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Zt(10),Fn(this),Xn(this))},r.ab=function(){null!=this.v&&(this.v=null,Fn(this),Hn(this),Zt(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Zt(2)):(this.h.info("Failed to ping google.com"),Zt(1))},(r=ei.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},ni.prototype.g=function(t,e){return new ii(t,e)},v(ii,Et),ii.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Rt(g(t.hb,t,e))),Zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zn(t,null,t.W),zn(t)},ii.prototype.close=function(){Pn(this.g)},ii.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Vn(this.g,e)}else this.v?((e={}).__data__=_t(t),Vn(this.g,e)):Vn(this.g,t)},ii.prototype.M=function(){this.g.j=null,delete this.j,Pn(this.g),delete this.g,ii.Z.M.call(this)},v(ri,le),v(si,ue),v(oi,ei),oi.prototype.xa=function(){It(this.g,"a")},oi.prototype.wa=function(t){It(this.g,new ri(t))},oi.prototype.va=function(t){It(this.g,new si(t))},oi.prototype.ua=function(){It(this.g,"b")},ni.prototype.createWebChannel=ni.prototype.g,ii.prototype.send=ii.prototype.u,ii.prototype.open=ii.prototype.m,ii.prototype.close=ii.prototype.close,ne.NO_ERROR=0,ne.TIMEOUT=8,ne.HTTP_ERROR=6,ie.COMPLETE="complete",oe.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",Et.prototype.listen=Et.prototype.N,xn.prototype.listenOnce=xn.prototype.O,xn.prototype.getLastError=xn.prototype.La,xn.prototype.getLastErrorCode=xn.prototype.Da,xn.prototype.getStatus=xn.prototype.ba,xn.prototype.getResponseJson=xn.prototype.Qa,xn.prototype.getResponseText=xn.prototype.ga,xn.prototype.send=xn.prototype.ea;var ai=o.createWebChannelTransport=function(){return new ni},ci=o.getStatEventTarget=function(){return Gt()},li=o.ErrorCode=ne,ui=o.EventType=ie,hi=o.Event=Xt,di=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fi=o.FetchXmlHttpFactory=pn,pi=o.WebChannel=oe,mi=o.XhrIo=xn})),s.register("4TNnu",(function(t,e){var n,i,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var t=a(d);u=!0;for(var e=l.length;e;){for(c=l,l=[];++h<e;)c&&c[h].run();h=-1,e=l.length}c=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),s.register("eWCmQ",(function(t,e){var i,r;i=void 0===n?"undefined"==typeof window?t.exports:window:n,r=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",I="Circle",T="Arrows",_="Dots",S="Pulse",N="Custom",C="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D="Standard",R="Hourglass",L="Circle",O="Arrows",M="Dots",P="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},V=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+o)},z=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},B=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},j=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?j(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Y=function(n,i,r,s){if(!z("body"))return!1;e||ct.Notify.init({});var o=j(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),e=j(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=j(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,I=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},T=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),I();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var _=function(){k=setTimeout((function(){I()}),e.timeout),E=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};_(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),_()})))}}if(e.showOnlyTheLastOne&&0<J)for(var S,N=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),C=0;C<N.length;C++)null!==(S=N[C]).parentNode&&S.parentNode.removeChild(S);e=j(!0,e,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,s,o,c){if(!z("body"))return!1;n||ct.Report.init({});var l={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof o?u=o:"object"==typeof c&&(u=c),l=j(!0,n,{}),n=j(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=W(i),r=W(r),s=W(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===f?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var E=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),E()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=j(!0,n,l)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,s,o,c,l,u,h){if(!z("body"))return!1;i||ct.Confirm.init({});var d=j(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=j(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),o=W(o),c=W(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",c="..."),(o.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=s||"";var E=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var I=t.document.getElementById(f.id),T=t.document.getElementById("NXConfirmButtonOk"),_=t.document.getElementById("NXConfirmValidationInput");_&&(_.focus(),_.setSelectionRange(0,(_.value||"").length),_.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),_.classList.add("nx-validation-failure"),_.classList.remove("nx-validation-success")):(e===b&&(_.classList.remove("nx-validation-failure"),_.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&T.dispatchEvent(new Event("click")))}))),T.addEventListener("click",(function(t){if(e===b&&v&&_){if((_.value||"").toString()!==v)return _.focus(),_.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;_.classList.remove("nx-validation-failure")}"function"==typeof l&&(e===w&&_&&(k=_.value||""),l(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&_&&(k=_.value||""),u(k)),I.classList.add("nx-remove");var t=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(t))}),i.cssAnimationDuration)}))}i=j(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,s,o){if(!z("body"))return!1;r||ct.Loading.init({});var c=j(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=j(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=q(r.svgSize,r.svgColor);else if(e===E)d=H(r.svgSize,r.svgColor);else if(e===I)d=$(r.svgSize,r.svgColor);else if(e===T)d=X(r.svgSize,r.svgColor);else if(e===_)d=K(r.svgSize,r.svgColor);else if(e===S)d=G(r.svgSize,r.svgColor);else if(e===N&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===N&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===N&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),o);r=j(!0,r,c)},st=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ot=0,at=function(e,n,i,r,o,c){var l;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}s||ct.Block.init({});var h=j(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=j(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=F.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=l[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var k="";n&&(k=n===R?H(s.svgSize,s.svgColor):n===L?$(s.svgSize,s.svgColor):n===O?X(s.svgSize,s.svgColor):n===M?K(s.svgSize,s.svgColor):n===P?G(s.svgSize,s.svgColor):q(s.svgSize,s.svgColor));var E='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",I="";0<f.length&&(f=f.length>s.messageMaxLength?W(f).substring(0,s.messageMaxLength)+"...":W(f),I='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),ot++;var T=t.document.createElement("div");T.id=F.ID+"-"+ot,T.className=p+(s.cssAnimation?" nx-with-animation":""),T.style.position=s.position,T.style.zIndex=s.zindex,T.style.background=s.backgroundColor,T.style.animationDuration=s.cssAnimationDuration+"ms",T.style.fontFamily='"'+s.fontFamily+'", '+a,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",s.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=E+I;var _,S=t.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof S?S.toLocaleLowerCase("en"):"relative",C=Math.round(1.25*parseInt(s.svgSize))+40,A="";C>(v.offsetHeight||0)&&(A="min-height:"+C+"px;"),_=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var D="",B=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(B||0<A.length){if(!z("head"))return!1;B&&(D="position:relative!important;");var Q='<style id="Style-'+F.ID+"-"+ot+'">'+_+"."+y+"{"+D+A+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Y=J.createContextualFragment(Q);t.document.head.appendChild(Y),v.classList.add(y)}v.appendChild(T)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else V("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),s.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=l[e])&&(et(t),x=t.querySelectorAll("[id^="+F.ID+"]"),tt(x));clearTimeout(nt)}),c);s=j(!0,s,h)},ct={Notify:{init:function(t){e=j(!0,d,t),B(Q,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=j(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Y(c,t,e,n)},failure:function(t,e,n){Y(l,t,e,n)},warning:function(t,e,n){Y(u,t,e,n)},info:function(t,e,n){Y(h,t,e,n)}},Report:{init:function(t){n=j(!0,y,t),B(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=j(!0,n,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=j(!0,x,t),B(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=j(!0,i,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,s,o){nt(v,t,e,null,n,i,r,s,o)},ask:function(t,e,n,i,r,s,o,a){nt(b,t,e,n,i,r,s,o,a)},prompt:function(t,e,n,i,r,s,o,a){nt(w,t,e,n,i,r,s,o,a)}},Loading:{init:function(t){r=j(!0,A,t),B(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=j(!0,r,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(I,t,e,!0,0)},arrows:function(t,e){rt(T,t,e,!0,0)},dots:function(t,e){rt(_,t,e,!0,0)},pulse:function(t,e){rt(S,t,e,!0,0)},custom:function(t,e){rt(N,t,e,!0,0)},notiflix:function(t,e){rt(C,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?W(e).substring(0,r.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var s=t.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=e,n.appendChild(s)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){s=j(!0,F,t),B(st,"NotiflixBlockInternalCSS")},merge:function(t){return s?void(s=j(!0,s,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,D,t,e,n)},hourglass:function(t,e,n){at(!0,R,t,e,n)},circle:function(t,e,n){at(!0,L,t,e,n)},arrows:function(t,e,n){at(!0,O,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?j(!0,t.Notiflix,{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}):{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}},"function"==typeof define&&define.amd?define([],(function(){return r(i)})):"object"==typeof t.exports?t.exports=r(i):i.Notiflix=r(i)})),s.register("8y7EH",(function(e,n){t(e.exports,"btnClose",(function(){return i})),t(e.exports,"backdrop",(function(){return r})),t(e.exports,"closeModalBtn",(function(){return c})),t(e.exports,"closeModalEscape",(function(){return l})),t(e.exports,"closeModalClick",(function(){return u}));const i=document.querySelector(".modal__btn--close"),r=(document.querySelector(".modal"),document.querySelector(".backdrop")),s=document.querySelector(".modal__data--content"),o=document.querySelector("body");function a(){r.classList.add("hidden"),o.style.overflow="",i.removeEventListener("click",c),document.removeEventListener("keyup",l),document.removeEventListener("click",u),s.innerHTML=""}function c(){a()}function l(t){"Escape"==t.key&&(r.classList.contains("hidden")||a())}function u(t){const e=t.target.closest(".modal");!r.classList.contains("hidden")&null==e&&a()}})),s.register("eS71k",(function(t,e){var n=s("8y7EH");const i=document.querySelector(".gallery"),r=document.querySelector("body");i.addEventListener("click",(t=>{t.target.closest(".card")&&(r.style.overflow="hidden",n.backdrop.classList.remove("hidden"),setTimeout((()=>{!function(){if(n.backdrop.classList.contains("hidden"))return void console.log("щось не так з слухачами для закриття модалки");n.btnClose.addEventListener("click",n.closeModalBtn),document.addEventListener("keyup",n.closeModalEscape),document.addEventListener("click",n.closeModalClick)}()}),100))}))})),s.register("epHO8",(function(t,e){var n=s("3gGTU");const i={footerBtnLinkText:document.querySelector("[data-modal-open]"),backdrop:document.querySelector("[data-modal]"),modalBtnClose:document.querySelector("[data-modal-close"),teamMarkup:document.querySelector(".team")},r=document.querySelector("body");function o(t){"Escape"===t.code&&(c(),l())}function a(t){t.target.classList.contains("footer-backdrop")&&(c(),l())}function c(){i.backdrop.classList.toggle("is-hidden")}function l(){window.removeEventListener("keydown",o),i.modalBtnClose.removeEventListener("click",u),i.backdrop.removeEventListener("click",a),r.style.overflow=""}function u(){c(),l(),console.log("footer btn click")}i.footerBtnLinkText.addEventListener("click",(function(t){t.preventDefault(),window.addEventListener("keydown",o),i.modalBtnClose.addEventListener("click",u),i.backdrop.addEventListener("click",a),c(),r.style.overflow="hidden"}));const h=n.teamMembers.map((({name:t,img:e,position:n,link:i})=>`<li class="team__item"><a target="_blank" rel="noopener noreferrer" class="team__link" href="${i}">\n                <img class="team__img" src="${e}" alt="team member">\n              </a>\n    <p class="team__name">${t}</p>\n    <p class="team__position">${n}</p>\n    </li>`)).join("");i.teamMarkup.insertAdjacentHTML("beforeend",h)})),s.register("3gGTU",(function(n,i){t(n.exports,"teamMembers",(function(){return d}));var r=s("31gCe"),o=s("7Ybqw"),a=s("iyq42"),c=s("gNPvh"),l=s("4vmIi"),u=s("ceHnd"),h=s("juISv");const d=[{name:"Alexander Khodetskiy",position:"Team Lead",img:e(r),link:"https://github.com/khodetsky"},{name:"Ilya Milinteev",position:"Scrum Master",img:e(o),link:"https://github.com/milintey"},{name:"Arkadii Zaslavskyi",position:"Developer",img:e(a),link:"https://github.com/ArkZaslavskyi"},{name:"Alina Zhyva",position:"Developer",img:e(c),link:"https://github.com/azhivaya"},{name:"Anna Matvieieva",position:"Developer",img:e(l),link:"https://github.com/annamatvieieva"},{name:"Artem Yakushkin",position:"Developer",img:e(u),link:"https://github.com/ArtemYakushkin"},{name:"Sasha Maslak",position:"Developer",img:e(h),link:"https://github.com/SashaMaslak"}]})),s.register("31gCe",(function(t,e){t.exports=new URL(s("kyEFX").resolve("a98ip"),import.meta.url).toString()})),s.register("7Ybqw",(function(t,e){t.exports=new URL(s("kyEFX").resolve("juDiW"),import.meta.url).toString()})),s.register("iyq42",(function(t,e){t.exports=new URL(s("kyEFX").resolve("iRqEz"),import.meta.url).toString()})),s.register("gNPvh",(function(t,e){t.exports=new URL(s("kyEFX").resolve("cHwNN"),import.meta.url).toString()})),s.register("4vmIi",(function(t,e){t.exports=new URL(s("kyEFX").resolve("6BRmD"),import.meta.url).toString()})),s.register("ceHnd",(function(t,e){t.exports=new URL(s("kyEFX").resolve("gZivX"),import.meta.url).toString()})),s.register("juISv",(function(t,e){t.exports=new URL(s("kyEFX").resolve("f9K2v"),import.meta.url).toString()})),s.register("lHYXG",(function(e,n){t(e.exports,"drawGallery",(function(){return r})),t(e.exports,"createListOfGenres",(function(){return o}));var i=s("2o08A");function r(t,e){t.innerHTML=function(t){return t.map(((t,e)=>function({poster_path:t,genre_ids:e,title:n,release_date:r,vote_average:s},a){const c="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png",l=t?`${i.IMG_BASE_URL}${i.IMG_FILE_SIZE}${t}`:c,u=(h=s,h<3?"card__rating-poor":h<5?"card__rating-low":h<7?"card__rating-medium":"card__rating-high");var h;return`\n    <li class="card" data-movie="${a}">\n        <a class="gallery__link">\n            <img class="card__img" src="${l}">\n            <p class="card__title">${n}</p>\n            <div class="card__text-container">\n                <p class="card__text">${o(e)} | ${r?r.slice(0,4):""}</p>\n                <div class="card__rating-box ${u}" id="card-rating">\n                    <p class="card__rating-text">${s.toFixed(1)}</p>\n                </div>\n            </div>\n        </a>\n    </li>`}(t,e))).join("")}(e)}function o(t){const e=t.map(a);return e?e.length<=i.MAX_GENRES_NUMBER?e.join(", "):[...e.slice(0,i.MAX_GENRES_NUMBER-1),"other..."].join(", "):""}function a(t){return JSON.parse(localStorage.getItem("genres")).find((e=>e.id===t)).name}})),s.register("2o08A",(function(e,n){t(e.exports,"IMG_BASE_URL",(function(){return i})),t(e.exports,"IMG_FILE_SIZE",(function(){return r})),t(e.exports,"MAX_GENRES_NUMBER",(function(){return s})),t(e.exports,"NUMS_PER_PAGE",(function(){return o}));const i="https://image.tmdb.org/t/p/",r="w500",s=3,o=5})),s.register("bMgEY",(function(e,n){t(e.exports,"drawPagination",(function(){return r}));var i=s("2o08A");function r(t,e,n){const r=`\n            <button type="button" class="num-btn mobile-hiding" data-page="first">1</button>\n            <span class="num-btn mobile-hiding" data-page="${e}">...</span>    \n            ${function(t,e){let n=1,r=e,s="";e>i.NUMS_PER_PAGE&&(t<3?r=i.NUMS_PER_PAGE:t>e-3?(n=e-i.NUMS_PER_PAGE+1,r=e):(n=t-2,r=t+2));for(let e=n;e<=r;e++)s+=`\n        <span\n            class="${e!==t?"num-btn":"pg-btn pg-btn--cur"}"\n            data-page="${e}">${e}</span>\n        `;return s}(e,n)}\n            <span class="num-btn mobile-hiding" data-page="${e}">...</span>    \n            <button type="button" class="num-btn mobile-hiding" data-page="last">${n}</button>\n        `;t.innerHTML=r}})),s.register("3cIwM",(function(e,n){function i(t,e,n){switch(e){case"first":return 1;case"last":return n;case"prev":return 1===t?1:t-1;case"next":return t===n?n:t+1;default:return+e}}t(e.exports,"calcNewPgNum",(function(){return i}))})),s.register("gJGFz",(function(e,n){t(e.exports,"addModalMcp",(function(){return o}));var i=s("lHYXG"),r=s("2o08A");function o(t){return`\n        <div class="modal__data--poster">\n          <img id='modal-img' src="${r.IMG_BASE_URL}${r.IMG_FILE_SIZE}${t.poster_path}" alt="film" />\n        </div>\n        <div class="modal__data--description">\n          <h1 class="modal__data--title">${t.title}</h1>\n          <table class="modal__data--table">\n            <tr>\n              <th>Vote / Votes</th>\n              <td>\n                <span class="modal__data--element modal__data--element--orange"\n                  >${t.vote_average.toFixed(1)}</span\n                >\n                /\n                <span class="modal__data--element modal__data--element--white">${t.vote_count}</span>\n              </td>\n            </tr>\n            <tr>\n              <th>Popularity</th>\n              <td>${t.popularity}</td>\n            </tr>\n            <tr>\n              <th>Original Title</th>\n              <td>${t.original_title}</td>\n            </tr>\n            <tr>\n              <th>Genre</th>\n              <td>${(0,i.createListOfGenres)(t.genre_ids)}</td>\n            </tr>\n          </table>\n          <div class="modal__data--about">\n            <h2 class="modal__data--title--about">about</h2>\n            <div class="modal__data--text">\n              <p>${t.overview}</p>\n            </div>\n          </div>\n          <div class="modal__data--add">\n              <button\n              id ="addToWatched"\n                class="modal__btn btn__standart"\n                type="button"\n              >\n                add to watched\n              </button>\n              <button id="addToQueue" class="modal__btn btn__standart" type="button">\n                add to queue\n              </button>\n            </div>\n        </div>`}})),s("kyEFX").register(JSON.parse('{"4627Z":"my-library.1bb057f4.js","a98ip":"cat4.20e1c480.png","juDiW":"cat2.81973b2a.png","iRqEz":"cat3.fda6e4d6.png","cHwNN":"cat1.a58230aa.png","6BRmD":"cat5.cc26cab5.png","gZivX":"cat6.5344dc8f.png","f9K2v":"cat7.c263b402.png"}'));
//# sourceMappingURL=my-library.1bb057f4.js.map
