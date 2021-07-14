var words={};function define(e,t){for(var n=0;n<t.length;n++){words[t[n]]=e}}var commonAtoms=["true","false"];var commonKeywords=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"];var commonCommands=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];define("atom",commonAtoms);define("keyword",commonKeywords);define("builtin",commonCommands);function tokenBase(e,t){if(e.eatSpace())return null;var n=e.sol();var r=e.next();if(r==="\\"){e.next();return null}if(r==="'"||r==='"'||r==="`"){t.tokens.unshift(tokenString(r,r==="`"?"quote":"string"));return tokenize(e,t)}if(r==="#"){if(n&&e.eat("!")){e.skipToEnd();return"meta"}e.skipToEnd();return"comment"}if(r==="$"){t.tokens.unshift(tokenDollar);return tokenize(e,t)}if(r==="+"||r==="="){return"operator"}if(r==="-"){e.eat("-");e.eatWhile(/\w/);return"attribute"}if(r=="<"){if(e.match("<<"))return"operator";var o=e.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(o){t.tokens.unshift(tokenHeredoc(o[1]));return"string.special"}}if(/\d/.test(r)){e.eatWhile(/\d/);if(e.eol()||!/\w/.test(e.peek())){return"number"}}e.eatWhile(/[\w-]/);var i=e.current();if(e.peek()==="="&&/\w+/.test(i))return"def";return words.hasOwnProperty(i)?words[i]:null}function tokenString(e,t){var n=e=="("?")":e=="{"?"}":e;return function(r,o){var i,s=false;while((i=r.next())!=null){if(i===n&&!s){o.tokens.shift();break}else if(i==="$"&&!s&&e!=="'"&&r.peek()!=n){s=true;r.backUp(1);o.tokens.unshift(tokenDollar);break}else if(!s&&e!==n&&i===e){o.tokens.unshift(tokenString(e,t));return tokenize(r,o)}else if(!s&&/['"]/.test(i)&&!/['"]/.test(e)){o.tokens.unshift(tokenStringStart(i,"string"));r.backUp(1);break}s=!s&&i==="\\"}return t}}function tokenStringStart(e,t){return function(n,r){r.tokens[0]=tokenString(e,t);n.next();return tokenize(n,r)}}var tokenDollar=function(e,t){if(t.tokens.length>1)e.eat("$");var n=e.next();if(/['"({]/.test(n)){t.tokens[0]=tokenString(n,n=="("?"quote":n=="{"?"def":"string");return tokenize(e,t)}if(!/\d/.test(n))e.eatWhile(/\w/);t.tokens.shift();return"def"};function tokenHeredoc(e){return function(t,n){if(t.sol()&&t.string==e)n.tokens.shift();t.skipToEnd();return"string.special"}}function tokenize(e,t){return(t.tokens[0]||tokenBase)(e,t)}var shell={startState:function(){return{tokens:[]}},token:function(e,t){return tokenize(e,t)},languageData:{autocomplete:commonAtoms.concat(commonKeywords,commonCommands),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}};export{shell};