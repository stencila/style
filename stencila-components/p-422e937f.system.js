System.register([],(function(e){"use strict";return{execute:function(){var t=e("toml",{startState:function(){return{inString:false,stringType:"",lhs:true,inArray:0}},token:function(e,t){if(!t.inString&&(e.peek()=='"'||e.peek()=="'")){t.stringType=e.peek();e.next();t.inString=true}if(e.sol()&&t.inArray===0){t.lhs=true}if(t.inString){while(t.inString&&!e.eol()){if(e.peek()===t.stringType){e.next();t.inString=false}else if(e.peek()==="\\"){e.next();e.next()}else{e.match(/^.[^\\\"\']*/)}}return t.lhs?"property":"string"}else if(t.inArray&&e.peek()==="]"){e.next();t.inArray--;return"bracket"}else if(t.lhs&&e.peek()==="["&&e.skipTo("]")){e.next();if(e.peek()==="]")e.next();return"atom"}else if(e.peek()==="#"){e.skipToEnd();return"comment"}else if(e.eatSpace()){return null}else if(t.lhs&&e.eatWhile((function(e){return e!="="&&e!=" "}))){return"property"}else if(t.lhs&&e.peek()==="="){e.next();t.lhs=false;return null}else if(!t.lhs&&e.match(/^\d\d\d\d[\d\-\:\.T]*Z/)){return"atom"}else if(!t.lhs&&(e.match("true")||e.match("false"))){return"atom"}else if(!t.lhs&&e.peek()==="["){t.inArray++;e.next();return"bracket"}else if(!t.lhs&&e.match(/^\-?\d+(?:\.\d+)?/)){return"number"}else if(!e.eatSpace()){e.next()}return null}})}}}));