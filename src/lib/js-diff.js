function e(){}function n(e,n,t,o,l){const r=[];let u;for(;n;)r.push(n),u=n.previousComponent,delete n.previousComponent,n=u;r.reverse();let i=0,s=r.length,a=0,c=0;for(;i<s;i++){let n=r[i];if(n.removed)n.value=e.join(o.slice(c,c+n.count)),c+=n.count;else{if(!n.added&&l){let l=t.slice(a,a+n.count);l=l.map((function(e,n){let t=o[c+n];return t.length>e.length?t:e})),n.value=e.join(l)}else n.value=e.join(t.slice(a,a+n.count));a+=n.count,n.added||(c+=n.count)}}return r}e.prototype={diff(e,t,o={}){let l=o.callback;"function"==typeof o&&(l=o,o={});let r=this;function u(e){return e=r.postProcess(e,o),l?(setTimeout((function(){l(e)}),0),!0):e}e=this.castInput(e,o),t=this.castInput(t,o),e=this.removeEmpty(this.tokenize(e,o));let i=(t=this.removeEmpty(this.tokenize(t,o))).length,s=e.length,a=1,c=i+s;null!=o.maxEditLength&&(c=Math.min(c,o.maxEditLength));const f=o.timeout??1/0,h=Date.now()+f;let p=[{oldPos:-1,lastComponent:void 0}],g=this.extractCommon(p[0],t,e,0,o);if(p[0].oldPos+1>=s&&g+1>=i)return u(n(r,p[0].lastComponent,t,e,r.useLongestToken));let d=-1/0,m=1/0;function v(){for(let l=Math.max(d,-a);l<=Math.min(m,a);l+=2){let a,c=p[l-1],f=p[l+1];c&&(p[l-1]=void 0);let h=!1;if(f){const e=f.oldPos-l;h=f&&0<=e&&e<i}let v=c&&c.oldPos+1<s;if(h||v){if(a=!v||h&&c.oldPos<f.oldPos?r.addToPath(f,!0,!1,0,o):r.addToPath(c,!1,!0,1,o),g=r.extractCommon(a,t,e,l,o),a.oldPos+1>=s&&g+1>=i)return u(n(r,a.lastComponent,t,e,r.useLongestToken));p[l]=a,a.oldPos+1>=s&&(m=Math.min(m,l-1)),g+1>=i&&(d=Math.max(d,l+1))}else p[l]=void 0}a++}if(l)!function e(){setTimeout((function(){if(a>c||Date.now()>h)return l();v()||e()}),0)}();else for(;a<=c&&Date.now()<=h;){let e=v();if(e)return e}},addToPath(e,n,t,o,l){let r=e.lastComponent;return r&&!l.oneChangePerToken&&r.added===n&&r.removed===t?{oldPos:e.oldPos+o,lastComponent:{count:r.count+1,added:n,removed:t,previousComponent:r.previousComponent}}:{oldPos:e.oldPos+o,lastComponent:{count:1,added:n,removed:t,previousComponent:r}}},extractCommon(e,n,t,o,l){let r=n.length,u=t.length,i=e.oldPos,s=i-o,a=0;for(;s+1<r&&i+1<u&&this.equals(t[i+1],n[s+1],l);)s++,i++,a++,l.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return a&&!l.oneChangePerToken&&(e.lastComponent={count:a,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=i,s},equals:(e,n,t)=>t.comparator?t.comparator(e,n):e===n||t.ignoreCase&&e.toLowerCase()===n.toLowerCase(),removeEmpty(e){let n=[];for(let t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:e=>e,tokenize:e=>Array.from(e),join:e=>e.join(""),postProcess:e=>e};const t=new e;function o(e,n,o){return t.diff(e,n,o)}function l(e,n){let t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function r(e,n){let t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function u(e,n,t){if(e.slice(0,n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(n)}; this is a bug`);return t+e.slice(n.length)}function i(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(n)}; this is a bug`);return e.slice(0,-n.length)+t}function s(e,n){return u(e,n,"")}function a(e,n){return i(e,n,"")}function c(e,n){return n.slice(0,function(e,n){let t=0;e.length>n.length&&(t=e.length-n.length);let o=n.length;e.length<n.length&&(o=e.length);let l=Array(o),r=0;l[0]=0;for(let e=1;e<o;e++){for(n[e]==n[r]?l[e]=l[r]:l[e]=r;r>0&&n[e]!=n[r];)r=l[r];n[e]==n[r]&&r++}r=0;for(let o=t;o<e.length;o++){for(;r>0&&e[o]!=n[r];)r=l[r];e[o]==n[r]&&r++}return r}(e,n))}function f(e){let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function h(e){return e.match(/^\s*/)[0]}const p="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",g=new RegExp(`[${p}]+|\\s+|[^${p}]`,"ug"),d=new e;function m(e,n,t){return null==t?.ignoreWhitespace||t.ignoreWhitespace?d.diff(e,n,t):w(e,n,t)}function v(e,n,t,o){if(n&&t){const c=h(n.value),p=f(n.value),g=h(t.value),d=f(t.value);if(e){const o=l(c,g);e.value=i(e.value,g,o),n.value=s(n.value,o),t.value=s(t.value,o)}if(o){const e=r(p,d);o.value=u(o.value,d,e),n.value=a(n.value,e),t.value=a(t.value,e)}}else if(t){if(e){const e=h(t.value);t.value=t.value.substring(e.length)}if(o){const e=h(o.value);o.value=o.value.substring(e.length)}}else if(e&&o){const t=h(o.value),c=h(n.value),p=f(n.value),g=l(t,c);n.value=s(n.value,g);const d=r(s(t,g),p);n.value=a(n.value,d),o.value=u(o.value,t,d),e.value=i(e.value,t,t.slice(0,t.length-d.length))}else if(o){const e=h(o.value),t=c(f(n.value),e);n.value=a(n.value,t)}else if(e){const t=c(f(e.value),h(n.value));n.value=s(n.value,t)}}d.equals=function(e,n,t){return t.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e.trim()===n.trim()},d.tokenize=function(e,n={}){let t;if(n.intlSegmenter){if("word"!=n.intlSegmenter.resolvedOptions().granularity)throw new Error('The segmenter passed must have a granularity of "word"');t=Array.from(n.intlSegmenter.segment(e),(e=>e.segment))}else t=e.match(g)||[];const o=[];let l=null;return t.forEach((e=>{/\s/.test(e)?null==l?o.push(e):o.push(o.pop()+e):/\s/.test(l)?o[o.length-1]==l?o.push(o.pop()+e):o.push(l+e):o.push(e),l=e})),o},d.join=function(e){return e.map(((e,n)=>0==n?e:e.replace(/^\s+/,""))).join("")},d.postProcess=function(e,n){if(!e||n.oneChangePerToken)return e;let t=null,o=null,l=null;return e.forEach((e=>{e.added?o=e:e.removed?l=e:((o||l)&&v(t,l,o,e),t=e,o=null,l=null)})),(o||l)&&v(t,l,o,null),e};const C=new e;function w(e,n,t){return C.diff(e,n,t)}C.tokenize=function(e){const n=new RegExp(`(\\r?\\n)|[${p}]+|[^\\S\\n\\r]+|[^${p}]`,"ug");return e.match(n)||[]};const y=new e;function P(e,n,t){return y.diff(e,n,t)}function k(e,n,t){let o=function(e,n){if("function"==typeof e)n.callback=e;else if(e)for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}(t,{ignoreWhitespace:!0});return y.diff(e,n,o)}y.tokenize=function(e,n){n.stripTrailingCr&&(e=e.replace(/\r\n/g,"\n"));let t=[],o=e.split(/(\n|\r\n)/);o[o.length-1]||o.pop();for(let e=0;e<o.length;e++){let l=o[e];e%2&&!n.newlineIsToken?t[t.length-1]+=l:t.push(l)}return t},y.equals=function(n,t,o){return o.ignoreWhitespace?(o.newlineIsToken&&n.includes("\n")||(n=n.trim()),o.newlineIsToken&&t.includes("\n")||(t=t.trim())):o.ignoreNewlineAtEof&&!o.newlineIsToken&&(n.endsWith("\n")&&(n=n.slice(0,-1)),t.endsWith("\n")&&(t=t.slice(0,-1))),e.prototype.equals.call(this,n,t,o)};const T=new e;function E(e,n,t){return T.diff(e,n,t)}T.tokenize=function(e){return e.split(/(?<=[.!?])(\s+|$)/)};(new e).tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};const j=new e;function x(e,n,t,o,l){let r,u;for(n=n||[],t=t||[],o&&(e=o(l,e)),r=0;r<n.length;r+=1)if(n[r]===e)return t[r];if("[object Array]"===Object.prototype.toString.call(e)){for(n.push(e),u=new Array(e.length),t.push(u),r=0;r<e.length;r+=1)u[r]=x(e[r],n,t,o,l);return n.pop(),t.pop(),u}if(e&&e.toJSON&&(e=e.toJSON()),"object"==typeof e&&null!==e){n.push(e),u={},t.push(u);let l,i=[];for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&i.push(l);for(i.sort(),r=0;r<i.length;r+=1)l=i[r],u[l]=x(e[l],n,t,o,l);n.pop(),t.pop()}else u=e;return u}j.useLongestToken=!0,j.tokenize=y.tokenize,j.castInput=function(e,n){const{undefinedReplacement:t,stringifyReplacer:o=(e,n)=>void 0===n?t:n}=n;return"string"==typeof e?e:JSON.stringify(x(e,null,null,o),o,"  ")},j.equals=function(n,t,o){return e.prototype.equals.call(j,n.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"),o)};const z=new e;z.tokenize=function(e){return e.slice()},z.join=z.removeEmpty=function(e){return e};export{o as diffChars,P as diffLines,E as diffSentences,k as diffTrimmedLines,m as diffWords,w as diffWordsWithSpace};
