/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_replaceNodeText = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["script","/(\\(function serverContract\\(\\)|var yterr|var _F_cssRowKey)/","const jsonPruner=obj=>{for(k of[\"playerAds\",\"adPlacements\",\"adSlots\"]){obj[k]=[];}return obj;};const pruner=(text,url)=>{let json=JSON.parse(text);if(url.includes(\"player?key=\")){return JSON.stringify(jsonPruner(json));}else{let newJSON=[];for(obj of json){if(\"playerResponse\"in obj){obj[\"playerResponse\"]=jsonPruner(obj[\"playerResponse\"]);}newJSON.push(obj);}return JSON.stringify(newJSON);}};const urlFromArg=arg=>{if(typeof arg===\"string\"){return arg;}if(arg instanceof Request){return arg.url;}return String(arg);};const realFetch=window.fetch;window.fetch=new Proxy(window.fetch,{apply:function(target,thisArg,args){let url=urlFromArg(args[0]);if(!(url.includes(\"player?key=\"))&&!(url.includes(\"watch?v=\"))){return Reflect.apply(target,thisArg,args);}return realFetch(...args).then(realResponse=>realResponse.text().then(text=>new Response(pruner(text,url),{status:realResponse.status,statusText:realResponse.statusText,headers:realResponse.headers,})));}});window.XMLHttpRequest.prototype.open=new Proxy(window.XMLHttpRequest.prototype.open,{apply:async(target,thisArg,args)=>{let url=urlFromArg(args[1]);if(!(url.includes(\"player?key=\"))&&!(url.includes(\"watch?v=\"))){return Reflect.apply(target,thisArg,args);}thisArg.addEventListener(\"readystatechange\",function(){if(thisArg.readyState!==4){return;}const type=thisArg.responseType;if(type!==\"\"&&type!==\"text\"){return;}const textin=thisArg.responseText;const textout=pruner(textin,url);if(textout===textin){return;}Object.defineProperty(thisArg,\"response\",{value:textout});Object.defineProperty(thisArg,\"responseText\",{value:textout});});return Reflect.apply(target,thisArg,args);}}); $1"],["script","popunder","","condition","popunder","stay","1"],["script","popunder","p"],["script",".css('display') == 'none'",".css('display') == 'block'"],["script",".is(':visible')"],["style","display:block!important","display:none!important"],["style","{display:block;}","{display:none!important;}"],["script","/\\\"homad\\\",/"],["script","/\\\"homad\\\":\\{\\\"state\\\":\\\"enabled\\\"\\}/","\"homad\":{\"state\":\"disabled\"}"],["script","\"isAdBlockerEnabled\":true","\"isAdBlockerEnabled\":false"],["script","/protect_block.*?,/"],["script","(isAdblock)","(false)"],["script","/web_hide_epik_param_in_promoted_urls.*?enabled\"/","web_hide_epik_param_in_promoted_urls\":\"disabled\""],["script","/.*adConfig.*frequency_period.*/","(async () => {const a=location.href;if(!a.includes(\"/download?link=\"))return;const b=new URL(a),c=b.searchParams.get(\"link\");try{location.assign(`${location.protocol}//${c}`)}catch(a){}} )();"],["script","/^window\\.location\\.href.*\\'$/"],["script","/.*createElement.*/","var AG_onLoad=function(func){if(document.readyState===\"complete\"||document.readyState===\"interactive\")func();else if(document.addEventListener)document.addEventListener(\"DOMContentLoaded\",func);else if(document.attachEvent)document.attachEvent(\"DOMContentLoaded\",func)}; AG_onLoad(function(){var e=document.querySelectorAll(\".panel-footer > form[action] > button[link]\"),b=document.querySelectorAll(\".panel-footer > form[action]\"),c=new RegExp(/mega\\./);if(e.length===b.length)for(var f,g=0;g<b.length;g++)f=e[g].getAttribute(\"link\"),b[g].setAttribute(\"action\",f),b[g].setAttribute(\"target\",\"_blank\"),b[g].querySelector(\"input[name=\\\"link\\\"]\").remove(),c.test(f)||b[g].setAttribute(\"method\",\"GET\");const h=a=>{a.preventDefault();var b=a?.currentTarget?.getAttribute(\"link\");b?window.open(b):a.currentTarget.removeEventListener(\"click\",h)};var i=document.querySelectorAll(\"button[link^=\\\"https://drive.google.com/\\\"]\");i.forEach(a=>{a.addEventListener(\"click\",h)})})"],["script","({});","({}); function showHideElements(t,e){$(t).hide(),$(e).show()}function disableBtnclc(){let t=document.querySelector(\".submit-captcha\");t.disabled=!0,t.innerHTML=\"Loading...\"}function refreshButton(){$(\".refresh-capthca-btn\").addClass(\"disabled\")}function copyInput(){let t=document.querySelectorAll(\".copy-input\");t.forEach(t=>{navigator.clipboard.writeText(t.value)}),Materialize.toast(\"Copied!\",2e3)}function imgOnError(){$(\".ua-check\").html(window.atob(\"PGRpdiBjbGFzcz0idGV4dC1kYW5nZXIgZm9udC13ZWlnaHQtYm9sZCBoNSBtdC0xIj5DYXB0Y2hhIGltYWdlIGZhaWxlZCB0byBsb2FkLjxicj48YSBvbmNsaWNrPSJsb2NhdGlvbi5yZWxvYWQoKSIgc3R5bGU9ImNvbG9yOiM2MjcwZGE7Y3Vyc29yOnBvaW50ZXIiIGNsYXNzPSJ0ZXh0LWRlY29yYXRpb25lLW5vbmUiPlBsZWFzZSByZWZyZXNoIHRoZSBwYWdlLiA8aSBjbGFzcz0iZmEgZmEtcmVmcmVzaCI+PC9pPjwvYT48L2Rpdj4=\"))}$(window).on(\"load\",function(){$(\"body\").addClass(\"loaded\")}),window.history.replaceState&&window.history.replaceState(null,null,window.location.href),$(\".remove-spaces\").on(\"input\",function(){this.value=this.value.replace(/\\s/g,\"\")}),$(document).on(\"click\",\"#toast-container .toast\",function(){$(this).fadeOut(function(){$(this).remove()})}),$(\".tktemizle\").on(\"input propertychange\",function(){let t=$(this).val().match(\"access_token=(.*?)&\");t&&$(\".tktemizle\").val(t[1])}),$(document).ready(function(){let t=[{button:$(\".t-followers-button\"),menu:$(\".t-followers-menu\")},{button:$(\".t-hearts-button\"),menu:$(\".t-hearts-menu\")},{button:$(\".t-chearts-button\"),menu:$(\".t-chearts-menu\")},{button:$(\".t-views-button\"),menu:$(\".t-views-menu\")},{button:$(\".t-shares-button\"),menu:$(\".t-shares-menu\")},{button:$(\".t-favorites-button\"),menu:$(\".t-favorites-menu\")},{button:$(\".t-livestream-button\"),menu:$(\".t-livestream-menu\")},{button:$(\".ig-followers-button\"),menu:$(\".ig-followers-menu\")},{button:$(\".ig-likes-button\"),menu:$(\".ig-likes-menu\")}];$.each(t,function(t,e){e.button.click(function(){$(\".colsmenu\").addClass(\"nonec\"),e.menu.removeClass(\"nonec\")})})});"],["script","/.*atOptions.*/","var AG_onLoad=function(func){if(document.readyState===\"complete\"||document.readyState===\"interactive\")func();else if(document.addEventListener)document.addEventListener(\"DOMContentLoaded\",func);else if(document.attachEvent)document.attachEvent(\"DOMContentLoaded\",func)}; AG_onLoad((function(){const t=document.querySelector(\"script\");t&&t.classList.add(\"atScript_0\")}))"],["script","/devtoolsDetector\\.launch\\(\\)\\;/"],["script","/data: \\[.*\\],/","data: [],","condition","ads_num"],["script","/document\\.querySelector\\('div\\.textads\\.banner-ads.banner_ads\\.ad-unit\\.ad-zone\\.ad-space\\.adsbox'\\)/","document"],["script","/try.*finally.*?}/"],["script","!await","await"],["script","rek","r","condition","preroll"],["script","/}\\$\\(_.+?:/","}"],["script","adv_","","condition","flashvars"],["script","self.location.href;","self.location.href; document.addEventListener('DOMContentLoaded',()=>{const button=document.querySelector('form > input#method_free');if(button){button.click()}});","sedCount","1"],["script","//$('#btn_download').click();","$('#btn_download').click();","sedCount","1"],["script","outboundUrl","outbound"],["script","/window\\.dataLayer.+?(location\\.replace\\(\\S+?\\)).*/","$1"],["script","/\\/\\*.*?\\*\\//"],["script","}else{","}if(true){"],["script",".push({});",".push({}); document.getElementById(\"mokuai-search-id\").innerHTML = \"<form role=\\\"search\\\" method=\\\"get\\\" class=\\\"search-form\\\" action=\\\"https://www.rjno1.com/\\\" itemprop=\\\"potentialAction\\\" itemscope itemtype=\\\"http://schema.org/SearchAction\\\">  <meta itemprop=\\\"target\\\" content=\\\"https://www.rjno1.com/?s=search%20\\\"/>  <span class=\\\"screen-reader-text\\\">搜索：</span> <i class=\\\"fa fa-search\\\"></i>  <input type=\\\"search\\\" class=\\\"search-field\\\" placeholder=\\\"搜索 &hellip;\\\" value=\\\"\\\" name=\\\"s\\\" title=\\\"Search\\\" required itemprop=\\\"query-input\\\">  <button type=\\\"submit\\\" class=\\\"search-submit\\\"> <span >搜索</span> </button></form>\";window.setTimeout(function() { document.getElementById(\"dl-buttom-id-for-js\").innerHTML = \"<a href=\\\"https://www.rjno1.com/\" + document.location.href.replace(\"https://www.rjno1.com/\", \"\") + \"download-\" + document.location.href.replace(\"https://www.rjno1.com/\", \"\") + \"\\\" class=\\\"post-download-address-button\\\"><i class=\\\"fa fa-download-button\\\"></i><span class=\\\"screen-reader-text\\\">下载地址</span>Download</a><div class=\\\"clear\\\"></div>\";}, 2000)"],["script","/;\\$\\S+:\\(/",";("]];

const hostnamesMap = new Map([["youtube.com",0],["youtubekids.com",0],["youtube-nocookie.com",0],["fullxh.com",1],["megaxh.com",1],["unlockxh4.com",1],["xhadult2.com",1],["xhadult3.com",1],["xhadult4.com",1],["xhadult5.com",1],["xhamster46.com",1],["xhday.com",1],["xhday1.com",1],["xhmoon5.com",1],["xhplanet1.com",1],["xhplanet2.com",1],["xhreal2.com",1],["xhreal3.com",1],["xhtab2.com",1],["xhvictory.com",1],["xhwebsite.com",1],["xhwebsite2.com",1],["xhwide1.com",1],["xhwide8.com",1],["nhentai.net",2],["smallseotools.com",[3,4]],["plagiarismchecker.co",[5,6]],["giga.de",7],["kino.de",7],["spieletipps.de",7],["t-online.de",8],["games.metro.us",9],["games.dailymail.co.uk",9],["bussyhunter.com",10],["codingnepalweb.com",11],["jpvhub.com",13],["gyanitheme.com",14],["hipsonyc.com",14],["multiup.eu",15],["multiup.org",15],["zefoy.com",16],["reshare.pm",17],["idoitmyself.xyz",18],["suaurl.com",20],["foodxor.com",21],["perchance.org",22],["drawer-opportunity-i-243.site",23],["megaup.net",[24,33]],["adultdeepfakes.com",25],["uploadboy.com",[26,27]],["reddit.com",28],["api.dock.agacad.com",29],["rjno1.com",[30,31,32]]]);

const entitiesMap = new Map([["hamsterix",1],["xhamster",1],["xhamster1",1],["xhamster10",1],["xhamster11",1],["xhamster12",1],["xhamster13",1],["xhamster14",1],["xhamster15",1],["xhamster16",1],["xhamster17",1],["xhamster18",1],["xhamster19",1],["xhamster20",1],["xhamster2",1],["xhamster3",1],["xhamster4",1],["xhamster5",1],["xhamster7",1],["xhamster8",1],["pinterest",12],["empire-stream",19],["empire-streaming",19]]);

const exceptionsMap = new Map([["old.reddit.com",[28]]]);

/******************************************************************************/

function replaceNodeText(
    nodeName,
    pattern,
    replacement,
    ...extraArgs
) {
    replaceNodeTextCore(nodeName, pattern, replacement, ...extraArgs);
}

function replaceNodeTextCore(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const reNodeName = safe.patternToRegex(nodeName, 'i');
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const shouldLog = scriptletGlobals.has('canDebug') && extraArgs.log || 0;
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'gms');
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn: quitting "${pattern}" => "${replacement}"`);
        }
    };
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = after;
        if ( shouldLog !== 0 ) {
            safe.uboLog('replace-node-text-core.fn before:\n', before);
            safe.uboLog('replace-node-text-core.fn after:\n', after);
        }
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn ${count} nodes present before installing mutation observer`);
        }
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { replaceNodeText(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_replaceNodeText();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_replaceNodeText = cloneInto([
            [ '(', uBOL_replaceNodeText.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_replaceNodeText);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_replaceNodeText;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
