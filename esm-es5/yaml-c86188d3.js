var cons=["true","false","on","off","yes","no"];var keywordRegex=new RegExp("\\b(("+cons.join(")|(")+"))$","i");var yaml={token:function(e,r){var t=e.peek();var i=r.escaped;r.escaped=false;if(t=="#"&&(e.pos==0||/\s/.test(e.string.charAt(e.pos-1)))){e.skipToEnd();return"comment"}if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(r.literal&&e.indentation()>r.keyCol){e.skipToEnd();return"string"}else if(r.literal){r.literal=false}if(e.sol()){r.keyCol=0;r.pair=false;r.pairStart=false;if(e.match("---")){return"def"}if(e.match("...")){return"def"}if(e.match(/^\s*-\s+/)){return"meta"}}if(e.match(/^(\{|\}|\[|\])/)){if(t=="{")r.inlinePairs++;else if(t=="}")r.inlinePairs--;else if(t=="[")r.inlineList++;else r.inlineList--;return"meta"}if(r.inlineList>0&&!i&&t==","){e.next();return"meta"}if(r.inlinePairs>0&&!i&&t==","){r.keyCol=0;r.pair=false;r.pairStart=false;e.next();return"meta"}if(r.pairStart){if(e.match(/^\s*(\||\>)\s*/)){r.literal=true;return"meta"}if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)){return"variable"}if(r.inlinePairs==0&&e.match(/^\s*-?[0-9\.\,]+\s?$/)){return"number"}if(r.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)){return"number"}if(e.match(keywordRegex)){return"keyword"}}if(!r.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)){r.pair=true;r.keyCol=e.indentation();return"atom"}if(r.pair&&e.match(/^:\s*/)){r.pairStart=true;return"meta"}r.pairStart=false;r.escaped=t=="\\";e.next();return null},startState:function(){return{pair:false,pairStart:false,keyCol:0,inlinePairs:0,inlineList:0,literal:false,escaped:false}},languageData:{commentTokens:{line:"#"}}};export{yaml};