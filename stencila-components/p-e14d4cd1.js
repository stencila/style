import{P as e,C as t,E as a}from"./p-79abbf97.js";import{e as l,f as r,h as O,j as n,k as o,m as i,n as s,a as u,t as d,s as Q}from"./p-6c5c4643.js";import{javascript as p,javascriptLanguage as c}from"./p-14b3c6d3.js";import"./p-ca64077e.js";import"./p-0a0d477e.js";import"./p-5bfddd9d.js";import"./p-7d5dbd9a.js";import"./p-6d2953a4.js";import"./p-54d6a6c0.js";const m={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},f={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},g={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function $(e){return 45==e||46==e||58==e||e>=65&&e<=90||95==e||e>=97&&e<=122||e>=161}let y=null,h=null,b=0;function k(e,t){if(b==t&&h==e)return y;let a=e.get(t);for(;9==(l=a)||10==l||13==l||32==l;)a=e.get(++t);var l;let r=t;for(;$(a);)a=e.get(++t);return h=e,b=t,y=t>r?e.read(r,t).toLowerCase():a==w||a==P?void 0:null}const w=63,P=33;function v(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let a=0;a<e.length;a++)this.hash+=(this.hash<<4)+e.charCodeAt(a)+(e.charCodeAt(a)<<8)}const x=new t({start:null,shift:(e,t,a,l)=>1==t?new v(k(a,l.pos)||"",e):e,reduce:(e,t)=>10==t&&e?e.parent:e,reuse(e,t,a,l){let r=t.type.id;return 1==r||11==r?new v(k(a,l.pos-t.length+1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),R=new a(((e,t,a)=>{let l,r=t.start,O=e.get(r);if(O<0&&a.context&&t.accept(33,t.start),60!=O)return;r++,(l=47==e.get(r))&&r++;let n=k(e,r);if(void 0===n)return;if(!n)return t.accept(l?4:1,r);let o=a.context?a.context.name:null;if(l){if(n==o)return t.accept(2,r);if(o&&f[o])return t.accept(33,t.start);if(a.dialectEnabled(0))return t.accept(2,r);for(let e=a.context;e;e=e.parent)if(e.name==n)return;t.accept(3,r)}else o&&g[o]&&g[o][n]?t.accept(33,t.start):t.accept(1,r)})),X=new a(((e,t,a)=>{let l=e.get(t.start),r=t.start+1;if(47==l){if(62!=e.get(r))return;r++}else if(62!=l)return;a.context&&m[a.context.name]&&t.accept(5,r)})),S=new a(((e,t)=>{let a=t.start,l=0;for(;;){let t=e.get(a);if(t<0)break;if(a++,t=="--\x3e".charCodeAt(l)){if(l++,3==l){a-=3;break}}else l=0}a>t.start&&t.accept(34,a)})),z=/^<\/?\s*([\.\-\:\w\xa1-\uffff]+)/;function q(e){let t=z.exec(e);return t?t[1].toLowerCase():null}function W(e){let t=z.exec(e),a={};if(t){let l,r=/\s*([\.\-\:\w\xa1-\uffff]+)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s=<>"'/]+)))?/g;for(r.lastIndex=t.index+t[0].length;l=r.exec(e);)a[l[1]]=l[4]||l[3]||l[2]||l[1]}return a}function T(e){return t=>q(t)==e}function V(e){let t=null;for(let a of e)t||(t=Object.create(null)),(t[a.tag]||(t[a.tag]=[])).push({attrs:a.attrs,value:{filterEnd:T(a.tag),startParse:a.parser.startParse.bind(a.parser)}});return function(e,a){let l,r,O=e.read(a.ruleStart,a.pos),n=q(O);if(!n)return null;if(t&&(l=t[n]))for(let t of l)if(!t.attrs||t.attrs(r||(r=W(O))))return t.value;return"script"==n||"textarea"==n||"style"==n?{filterEnd:T(n),wrapType:25}:null}}const _=V([]);function U(e){return{elementContent:V(e)}}const Z=e.deserialize({version:13,states:"'OOVOXOOOtQ`O'#CgS!eOXO'#CfOOOP'#Cf'#CfO!oOdO'#CqO!wQ`O'#CsOOOP'#DR'#DROOOP'#Cv'#CvQVOXOOO!|QrO,59ROOOP'#Cz'#CzO#XOXO'#DWO#cOPO,59QOOOS'#C{'#C{O#kOdO,59]OOOP,59],59]O#sQ`O,59_OOOP-E6t-E6tO#xQrO'#CiOOQQ'#Cw'#CwO$WQrO1G.mOOOP1G.m1G.mOOOP1G.v1G.vOOOP-E6x-E6xO$cQ`O'#CoOOOP1G.l1G.lOOOS-E6y-E6yOOOP1G.w1G.wOOOP1G.y1G.yO$hQ!bO,59TOOQQ-E6u-E6uOOOP7+$X7+$XOOOP7+$b7+$bO$sQ`O,59ZO$xO#tO'#ClO%WO&jO'#ClOOQQ1G.o1G.oOOOP1G.u1G.uOOOO'#Cx'#CxO%fO#tO,59WOOQQ,59W,59WOOOO'#Cy'#CyO%tO&jO,59WOOOO-E6v-E6vOOQQ1G.r1G.rOOOO-E6w-E6w",stateData:"&X~OtOS~OPPORTOSUOVUOWUOXUOfUOhVO{SO~O[XO~OPPORTOSUOVUOWUOXUOfUO{SO~OQzPqzP~PyOr]O|_O~O[`O~OTfO^bObeO~OQzXqzX~PyOQhOqiO~Or]O|kO~OblO~O_mOT]X^]Xb]X~OTpO^bOboO~O[qO~OatOvrOxsO~ObuO~OWvOXvOvxOwvO~OWyOXyOxxOyyO~OWvOXvOv|OwvO~OWyOXyOx|OyyO~O{fhf~",goto:"#k{PPPPPPPPPP|!SP!YPP!^PP!a!d|P|PP!j!p!v!|#S#YPPPPP#`PPPP#hXUOQWZXQOQWZTcXdRtmRi[XROQWZQWORaWQdXRndQwrR{wQzsR}zQZQRgZQ^SRj^SVOWTYQZR[Q",nodeNames:"⚠ StartTag StartCloseTag StartCloseTag IncompleteCloseTag SelfCloseEndTag Document Text EntityReference CharacterReference Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl RawText",maxTerm:44,context:x,nodeProps:[[l.closedBy,-2,1,2,"EndTag SelfCloseEndTag",11,"CloseTag"],[l.openedBy,5,"StartTag",18,"StartTag StartCloseTag",19,"OpenTag"]],skippedNodes:[0,25],repeatNodeCount:6,tokenData:"!#`!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2wx}$k}!O3d!O!P$k!P!Q7]!Q![$k![!]8s!]!^$k!^!_>`!_!`!!n!`!a8R!a!c$k!c!}8s!}#R$k#R#S8s#S#T$k#T#o8s#o$f$k$f$g&R$g%W$k%W%o8s%o%p$k%p&a8s&a&b$k&b1p8s1p4U$k4U4d8s4d4e$k4e$IS8s$IS$I`$k$I`$Ib8s$Ib$Kh$k$Kh%#t8s%#t&/x$k&/x&Et8s&Et&FV$k&FV;'S8s;'S;:j<r;:j?&r$k?&r?Ah8s?Ah?BY$k?BY?Mn8s?Mn~$k!Z$vcVPaWw`ypOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[VVPw`ypOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xTVPypOv&qwx'Xx!^&q!^!_'g!_~&qP'^RVPOv'Xw!^'X!_~'Xp'lQypOv'gx~'ga'yUVPw`Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bRw`Or(]sv(]w~(]!Q(rTw`ypOr(krs'gsv(kwx(]x~(kW)WXaWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^VPw`ypt^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TTvhVPypOv&qwx'Xx!^&q!^!_'g!_~&q!Z+ibaWOX,qXZ.OZ],q]^.O^p,qqr,qrs.Ost/Ztw,qwx.Ox!P,q!P!Q.O!Q!],q!]!^)R!^!a.O!a$f,q$f$g.O$g~,q!Z,vbaWOX,qXZ.OZ],q]^.O^p,qqr,qrs.Ost)Rtw,qwx.Ox!P,q!P!Q.O!Q!],q!]!^.g!^!a.O!a$f,q$f$g.O$g~,q!R.RTOp.Oqs.Ot!].O!]!^.b!^~.O!R.gOW!R!Z.nXW!RaWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/`aaWOX0eXZ1oZ]0e]^1o^p0eqr0ers1osw0ewx1ox!P0e!P!Q1o!Q!]0e!]!^)R!^!a1o!a$f0e$f$g1o$g~0e!Z0jaaWOX0eXZ1oZ]0e]^1o^p0eqr0ers1osw0ewx1ox!P0e!P!Q1o!Q!]0e!]!^2T!^!a1o!a$f0e$f$g1o$g~0e!R1rSOp1oq!]1o!]!^2O!^~1o!R2TOX!R!Z2[XX!RaWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3QUxxVPw`Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3oeVPaWw`ypOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5Q!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5]dVPaWw`ypOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6k!a$f$k$f$g&R$g~$k!T6vVVPw`yp|QOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7fXVPw`ypOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8R!a~&R!X8^VbUVPw`ypOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9S!Y^S[QVPaWw`ypOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8s!O!P8s!P!Q&R!Q![8s![!]8s!]!^$k!^!_(k!_!a&R!a!c$k!c!}8s!}#R$k#R#S8s#S#T$k#T#o8s#o$f$k$f$g&R$g$}$k$}%O8s%O%W$k%W%o8s%o%p$k%p&a8s&a&b$k&b1p8s1p4U8s4U4d8s4d4e$k4e$IS8s$IS$I`$k$I`$Ib8s$Ib$Je$k$Je$Jg8s$Jg$Kh$k$Kh%#t8s%#t&/x$k&/x&Et8s&Et&FV$k&FV;'S8s;'S;:j<r;:j?&r$k?&r?Ah8s?Ah?BY$k?BY?Mn8s?Mn~$k!a<}eVPaWw`ypOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8s<%l~$k!R>gWw`ypOq(kqr?Prs'gsv(kwx(]x!a(k!a!bKh!b~(k!R?WZw`ypOr(krs'gsv(kwx(]x}(k}!O?y!O!f(k!f!gAP!g#W(k#W#XGx#X~(k!R@QVw`ypOr(krs'gsv(kwx(]x}(k}!O@g!O~(k!R@pTw`yp{POr(krs'gsv(kwx(]x~(k!RAWVw`ypOr(krs'gsv(kwx(]x!q(k!q!rAm!r~(k!RAtVw`ypOr(krs'gsv(kwx(]x!e(k!e!fBZ!f~(k!RBbVw`ypOr(krs'gsv(kwx(]x!v(k!v!wBw!w~(k!RCOVw`ypOr(krs'gsv(kwx(]x!{(k!{!|Ce!|~(k!RClVw`ypOr(krs'gsv(kwx(]x!r(k!r!sDR!s~(k!RDYVw`ypOr(krs'gsv(kwx(]x!g(k!g!hDo!h~(k!RDvWw`ypOrDorsE`svDovwEtwxFdx!`Do!`!aG`!a~DoqEeTypOvE`vxEtx!`E`!`!aFV!a~E`PEwRO!`Et!`!aFQ!a~EtPFVOhPqF^QyphPOv'gx~'gaFiVw`OrFdrsEtsvFdvwEtw!`Fd!`!aGO!a~FdaGVRw`hPOr(]sv(]w~(]!RGiTw`yphPOr(krs'gsv(kwx(]x~(k!RHPVw`ypOr(krs'gsv(kwx(]x#c(k#c#dHf#d~(k!RHmVw`ypOr(krs'gsv(kwx(]x#V(k#V#WIS#W~(k!RIZVw`ypOr(krs'gsv(kwx(]x#h(k#h#iIp#i~(k!RIwVw`ypOr(krs'gsv(kwx(]x#m(k#m#nJ^#n~(k!RJeVw`ypOr(krs'gsv(kwx(]x#d(k#d#eJz#e~(k!RKRVw`ypOr(krs'gsv(kwx(]x#X(k#X#YDo#Y~(k!RKoWw`ypOrKhrsLXsvKhvwLmwxM}x!aKh!a!b! e!b~KhqL^TypOvLXvxLmx!aLX!a!bM[!b~LXPLpRO!aLm!a!bLy!b~LmPL|RO!`Lm!`!aMV!a~LmPM[OfPqMaTypOvLXvxLmx!`LX!`!aMp!a~LXqMwQypfPOv'gx~'gaNSVw`OrM}rsLmsvM}vwLmw!aM}!a!bNi!b~M}aNnVw`OrM}rsLmsvM}vwLmw!`M}!`!a! T!a~M}a! [Rw`fPOr(]sv(]w~(]!R! lWw`ypOrKhrsLXsvKhvwLmwxM}x!`Kh!`!a!!U!a~Kh!R!!_Tw`ypfPOr(krs'gsv(kwx(]x~(k!V!!yV_SVPw`ypOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",tokenizers:[R,X,S,0,1,2,3,4,5],topRules:{Document:[0,6]},nested:[["elementContent",_,"%S~RP!^!_U~XP!P!Q[~_dXY[YZ[]^[pq[![!]!m!c!}!m#R#S!m#T#o!m%W%o!m%p&a!m&b1p!m4U4d!m4e$IS!m$I`$Ib!m$Kh%#t!m&/x&Et!m&FV;'S!m;'S;:j$|?&r?Ah!m?BY?Mn!m~!pkXY$eYZ$e]^$epq$e}!O!m!O!P!m!Q![!m![!]!m!`!a$w!c!}!m#R#S!m#T#o!m$}%O!m%W%o!m%p&a!m&b1p!m1p4U!m4U4d!m4e$IS!m$I`$Ib!m$Je$Jg!m$Kh%#t!m&/x&Et!m&FV;'S!m;'S;:j$|?&r?Ah!m?BY?Mn!m~$hTXY$eYZ$e]^$epq$e!`!a$w~$|Op~~%PP;=`<%l!m",42]],dialects:{noMatch:0},tokenPrec:234}),C=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288];function E(e){return e>=65&&e<=90||e>=97&&e<=122||e>=161}const Y=new a(((e,t)=>{let a=t.start,l=a,r=!1;for(;;){let n=e.get(l);if(!(E(n)||45==n||95==n||r&&(O=n,O>=48&&O<=57))){r&&t.accept(40==n?93:94,l);break}!r&&(45!=n||l>a)&&(r=!0),l++}var O})),G=new a(((e,t)=>{if(C.includes(e.get(t.start-1))){let a=e.get(t.start);(E(a)||95==a||35==a||46==a||91==a||58==a||45==a)&&t.accept(92,t.start)}})),j=new a(((e,t)=>{let{start:a}=t;if(!C.includes(e.get(a-1))){let l=e.get(a);if(37==l&&t.accept(1,a+1),E(l)){let l=a+1;for(;E(e.get(l));)l++;t.accept(1,l)}}})),I={__proto__:null,not:30,url:64,"url-prefix":64,domain:64,regexp:64,selector:132},D={__proto__:null,"@import":112,"@media":136,"@charset":140,"@namespace":144,"@keyframes":150,"@supports":162},N={__proto__:null,not:126,only:126,from:156,to:158},A=e.deserialize({version:13,states:"7WOYQ[OOOOQP'#Cc'#CcOOQP'#Cb'#CbO!ZQ[O'#CeO!}QXO'#C`O#UQ[O'#CgO#aQ[O'#DOO#fQ[O'#DSOOQP'#Eb'#EbO#kQdO'#DdO$SQ[O'#DqO#kQdO'#DsO$eQ[O'#DuO$pQ[O'#DxO$uQ[O'#EOO%TQ[O'#EQOOQS'#Ea'#EaOOQS'#ER'#ERQYQ[OOOOQP'#Cf'#CfOOQP,59P,59PO!ZQ[O,59PO%[Q[O'#ESO%vQWO,58zO&OQ[O,59RO#aQ[O,59jO#fQ[O,59nO%[Q[O,59rO%[Q[O,59tO%[Q[O,59uO'[Q[O'#D_OOQS,58z,58zOOQP'#Cj'#CjOOQO'#Cp'#CpOOQP,59R,59RO'cQWO,59RO'hQWO,59ROOQP'#DQ'#DQOOQP,59j,59jOOQO'#DU'#DUO'mQ`O,59nOOQS'#Cr'#CrO#kQdO'#CsO'uQvO'#CuO(|QtO,5:OOOQO'#Cz'#CzO'hQWO'#CyO)bQWO'#C{OOQS'#Ef'#EfOOQO'#Dg'#DgO)gQ[O'#DnO)uQWO'#EhO$uQ[O'#DlO*TQWO'#DoOOQO'#Ei'#EiO%yQWO,5:]O*YQpO,5:_OOQS'#Dw'#DwO*bQWO,5:aO*gQ[O,5:aOOQO'#Dz'#DzO*oQWO,5:dO*tQWO,5:jO*|QWO,5:lOOQS-E8P-E8POOQP1G.k1G.kO+pQXO,5:nOOQO-E8Q-E8QOOQS1G.f1G.fOOQP1G.m1G.mO'cQWO1G.mO'hQWO1G.mOOQP1G/U1G/UO+}Q`O1G/YO,hQXO1G/^O-OQXO1G/`O-fQXO1G/aO-|QXO'#CcO.qQWO'#D`OOQS,59y,59yO.vQWO,59yO/OQ[O,59yO/VQ[O'#CnO/^QdO'#CqOOQP1G/Y1G/YO#kQdO1G/YO/eQpO,59_OOQS,59a,59aO#kQdO,59cO/mQWO1G/jOOQS,59e,59eO/rQ!bO,59gO/zQWO'#DgO0VQWO,5:SO0[QWO,5:YO$uQ[O,5:UO$uQ[O'#EXO0dQWO,5;SO0oQWO,5:WO%[Q[O,5:ZOOQS1G/w1G/wOOQS1G/y1G/yOOQS1G/{1G/{O1QQWO1G/{O1VQdO'#D{OOQS1G0O1G0OOOQS1G0U1G0UOOQS1G0W1G0WOOQP7+$X7+$XOOQP7+$t7+$tO#kQdO7+$tO#kQdO,59zO1eQ[O'#EWO1oQWO1G/eOOQS1G/e1G/eO1oQWO1G/eO1wQXO'#EdO2OQWO,59YO2TQtO'#ETO2uQdO'#EeO3PQWO,59]O3UQpO7+$tOOQS1G.y1G.yOOQS1G.}1G.}OOQS7+%U7+%UO3^QWO1G/RO#kQdO1G/nOOQO1G/t1G/tOOQO1G/p1G/pO3cQWO,5:sOOQO-E8V-E8VO3qQXO1G/uOOQS7+%g7+%gO3xQYO'#CuO%yQWO'#EYO4QQdO,5:gOOQS,5:g,5:gO4`QpO<<H`O4hQtO1G/fOOQO,5:r,5:rO4{Q[O,5:rOOQO-E8U-E8UOOQS7+%P7+%PO5VQWO7+%PO5_QWO,5;OOOQP1G.t1G.tOOQS-E8R-E8RO#kQdO'#EUO5gQWO,5;POOQT1G.w1G.wOOQP<<H`<<H`OOQS7+$m7+$mO5oQdO7+%YOOQO7+%a7+%aOOQS,5:t,5:tOOQS-E8W-E8WOOQS1G0R1G0ROOQPAN=zAN=zO5vQtO'#EVO#kQdO'#EVO6nQdO7+%QOOQO7+%Q7+%QOOQO1G0^1G0^OOQS<<Hk<<HkO7OQdO,5:pOOQO-E8S-E8SOOQO<<Ht<<HtO7YQtO,5:qOOQS-E8T-E8TOOQO<<Hl<<Hl",stateData:"8W~O#SOSQOS~OTWOWWO[TO]TOsUOwVO!X_O!YXO!fYO!hZO!j[O!m]O!s^O#QPO#VRO~O#QcO~O[hO]hOcfOsiOwjO{kO!OmO#OlO#VeO~O!QnO~P!`O_sO#PqO#QpO~O#QuO~O#QwO~OazOh!QOj!QOp!PO#P}O#QyO#Z{O~Oa!SO!a!UO!d!VO#Q!RO!Q#[P~Oj![Op!PO#Q!ZO~O#Q!^O~Oa!SO!a!UO!d!VO#Q!RO~O!V#[P~P$SOTWOWWO[TO]TOsUOwVO#QPO#VRO~OcfO!QnO~O_!hO#PqO#QpO~OTWOWWO[TO]TOsUOwVO!X_O!YXO!fYO!hZO!j[O!m]O!s^O#Q!oO#VRO~O!P!qO~P&ZOa!tO~Oa!uO~Ou!vOy!wO~OP!yOaiXliX!ViX!aiX!diX#QiX`iXciXhiXjiXpiX#PiX#ZiXuiX!PiX!UiX~Oa!SOl!zO!a!UO!d!VO#Q!RO!V#[P~Oa!}O~Oa!SO!a!UO!d!VO#Q#OO~Oc#SO!_#RO!Q#[X!V#[X~Oa#VO~Ol!zO!V#XO~O!V#YO~Oj#ZOp!PO~O!Q#[O~O!QnO!_#RO~O!QnO!V#_O~O[hO]hOsiOwjO{kO!OmO#OlO#VeO~Oc!va!Q!va`!va~P+UOu#aOy#bO~O[hO]hOsiOwjO#VeO~Oczi{zi!Ozi!Qzi#Ozi`zi~P,VOc|i{|i!O|i!Q|i#O|i`|i~P,VOc}i{}i!O}i!Q}i#O}i`}i~P,VO[VX[!TX]VXcVXsVXwVX{VX!OVX!QVX#OVX#VVX~O[#cO~O!P#fO!V#dO~O!P#fO~P&ZO`#WP~P%[O`#XP~P#kO`#nOl!zO~O!V#pO~Oj#qOq#qO~O[!]X`!ZX!_!ZX~O[#rO~O`#sO!_#RO~Oc#SO!Q#[a!V#[a~O!_#ROc!`a!Q!`a!V!`a`!`a~O!V#xO~O!P#|O!p#zO!q#zO#Z#yO~O!P!zX!V!zX~P&ZO!P$SO!V#dO~O`#WX~P!`O`$VO~Ol!zO`!wXa!wXc!wXh!wXj!wXp!wX#P!wX#Q!wX#Z!wX~Oc$XO`#XX~P#kO`$ZO~Ol!zOu$[O~O`$]O~O!_#ROc!{a!Q!{a!V!{a~O`$_O~P+UOP!yO!QiX~O!P$bO!p#zO!q#zO#Z#yO~Ol!zOu$cO~Oc$eOl!zO!U$gO!P!Si!V!Si~P#kO!P!za!V!za~P&ZO!P$iO!V#dO~OcfO`#Wa~Oc$XO`#Xa~O`$lO~P#kOl!zOa!yXc!yXh!yXj!yXp!yX!P!yX!U!yX!V!yX#P!yX#Q!yX#Z!yX~Oc$eO!U$oO!P!Sq!V!Sq~P#kO`!xac!xa~P#kOl!zOa!yac!yah!yaj!yap!ya!P!ya!U!ya!V!ya#P!ya#Q!ya#Z!ya~Oq#Zl!Ol~",goto:"+}#^PPPP#_P#g#uP#g$T#gPP$ZPPP$aP$g$m$v$vP%YP$vP$v%p&SPP#gP&lP#gP&rP#gP#g#gPPP&x'['hPP#_PP'n'n'x'nP'nP'n'nP#_P#_P#_P'{#_P(O(RPP#_P#_(U(d(n(|)S)Y)d)jPPPPPP)p)xP*d*g*jP+`+i]`Obn!s#d$QiWObfklmn!s!t#V#d$QiQObfklmn!s!t#V#d$QQdRR!ceQrTR!ghQ!gsR#`!hQtTR!ihQ!gtQ!|!OR#`!iq!QXZz!u!w!z#b#c#k#r$O$X$^$e$f$jp!QXZz!u!w!z#b#c#k#r$O$X$^$e$f$jT#z#[#{q!OXZz!u!w!z#b#c#k#r$O$X$^$e$f$jp!QXZz!u!w!z#b#c#k#r$O$X$^$e$f$jQ![[R#Z!]QvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQgSS!eg$UR$U#hQ#k!uU$W#k$^$jQ$^#rR$j$XQ$Y#kR$k$YQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#h!tR#w#VR#i!tR#l!uQ|XQ!YZQ!xz[#j!u#k#r$X$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",nodeNames:"⚠ Unit Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName not ) ( ArgList , PseudoClassName ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery callee MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule",maxTerm:105,nodeProps:[[l.openedBy,16,"(",47,"{"],[l.closedBy,17,")",48,"}"]],skippedNodes:[0,2],repeatNodeCount:8,tokenData:"Bj~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8u}!O9Q!O!P9i!P!Q9z!Q![<U![!]<y!]!^=i!^!_$w!_!`=t!`!a>P!a!b$w!b!c>o!c!}$w!}#O?{#O#P$w#P#Q@W#Q#R2U#R#T$w#T#U@c#U#c$w#c#dAb#d#o$w#o#pAq#p#q2U#q#rA|#r#sBX#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQqWOy%Qz~%Q~%bf#S~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#S~qWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSqWOy%Qz#a%Q#a#b)T#b~%Q^)YSqWOy%Qz#d%Q#d#e)f#e~%Q^)kSqWOy%Qz#c%Q#c#d)w#d~%Q^)|SqWOy%Qz#f%Q#f#g*Y#g~%Q^*_SqWOy%Qz#h%Q#h#i*k#i~%Q^*pSqWOy%Qz#T%Q#T#U*|#U~%Q^+RSqWOy%Qz#b%Q#b#c+_#c~%Q^+dSqWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!UUqWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOj~~,lPO~+}_,tWsPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWqWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWqWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWhUqWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWhUqWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWqWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWhUqWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WqWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQhUqWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQyQqWOy%Qz~%QX2wQWPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQaVOy%Qz~%Q~3zO`~_4RSTPlSOy%Qz!_%Q!_!`2e!`~%Q_4fUlS!OPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SqWOy%Qz!Q%Q!Q![5Z![~%Q^5bWqW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWqWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSqWOy%Qz!Q%Q!Q![6z![~%Q^7RSqW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYqW#ZUOy%Qz!O%Q!O!P8U!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^8]WqW#ZUOy%Qz!Q%Q!Q![8U![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8zQcVOy%Qz~%Q^9VUlSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_9nS#VPOy%Qz!Q%Q!Q![5Z![~%Q~:PRlSOy%Qz{:Y{~%Q~:_SqWOy:Yyz:kz{;`{~:Y~:nROz:kz{:w{~:k~:zTOz:kz{:w{!P:k!P!Q;Z!Q~:k~;`OQ~~;eUqWOy:Yyz:kz{;`{!P:Y!P!Q;w!Q~:Y~<OQQ~qWOy%Qz~%Q^<ZY#ZUOy%Qz!O%Q!O!P8U!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX=OS[POy%Qz![%Q![!]=[!]~%QX=cQ]PqWOy%Qz~%Q_=nQ!VVOy%Qz~%QY=yQyQOy%Qz~%QX>US{POy%Qz!`%Q!`!a>b!a~%QX>iQ{PqWOy%Qz~%QX>rUOy%Qz!c%Q!c!}?U!}#T%Q#T#o?U#o~%QX?]Y!XPqWOy%Qz}%Q}!O?U!O!Q%Q!Q![?U![!c%Q!c!}?U!}#T%Q#T#o?U#o~%QX@QQwPOy%Qz~%Q^@]QuUOy%Qz~%QX@fSOy%Qz#b%Q#b#c@r#c~%QX@wSqWOy%Qz#W%Q#W#XAT#X~%QXA[Q!_PqWOy%Qz~%QXAeSOy%Qz#f%Q#f#gAT#g~%QXAvQ!QPOy%Qz~%Q_BRQ!PVOy%Qz~%QZB^S!OPOy%Qz!_%Q!_!`2e!`~%Q",tokenizers:[G,j,Y,0,1,2,3],topRules:{StyleSheet:[0,3]},specialized:[{term:93,get:e=>I[e]||-1},{term:55,get:e=>D[e]||-1},{term:94,get:e=>N[e]||-1}],tokenPrec:1060});let L=null;function K(){if(!L&&"object"==typeof document&&document.body){let e=[];for(let t in document.body.style)/[A-Z]|^-|^(item|length)$/.test(t)||e.push(t);L=e.sort().map((e=>({type:"property",label:e})))}return L||[]}const B=["active","after","before","checked","default","disabled","empty","enabled","first-child","first-letter","first-line","first-of-type","focus","hover","in-range","indeterminate","invalid","lang","last-child","last-of-type","link","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","only-of-type","only-child","optional","out-of-range","placeholder","read-only","read-write","required","root","selection","target","valid","visited"].map((e=>({type:"class",label:e}))),F=["above","absolute","activeborder","additive","activecaption","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","antialiased","appworkspace","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic-abegede-gez","ethiopic-halehame-aa-er","ethiopic-halehame-gez","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","graytext","grid","groove","hand","hard-light","help","hidden","hide","higher","highlight","highlighttext","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","justify","keep-all","landscape","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-hexadecimal","lower-latin","lower-norwegian","lowercase","ltr","luminosity","manipulation","match","matrix","matrix3d","medium","menu","menutext","message-box","middle","min-intrinsic","mix","monospace","move","multiple","multiple_mask_images","multiply","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","opacity","open-quote","optimizeLegibility","optimizeSpeed","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","text","text-bottom","text-top","textarea","textfield","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","to","top","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-latin","uppercase","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"].map((e=>({type:"keyword",label:e}))).concat(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].map((e=>({type:"constant",label:e})))),M=["a","abbr","address","article","aside","b","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","dd","del","details","dfn","dialog","div","dl","dt","em","figcaption","figure","footer","form","header","hgroup","h1","h2","h3","h4","h5","h6","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","meter","nav","ol","output","p","pre","ruby","section","select","small","source","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","tr","u","ul"].map((e=>({type:"type",label:e}))),J=/^[\w-]*/,H=O.define({parser:A.configure({props:[n.add({Declaration:o()}),i.add({Block:s}),u({"import charset namespace keyframes":d.definitionKeyword,"media supports":d.controlKeyword,"from to":d.keyword,NamespaceName:d.namespace,KeyframeName:d.labelName,TagName:d.typeName,ClassName:d.className,PseudoClassName:d.constant(d.className),not:d.operatorKeyword,IdName:d.labelName,"FeatureName PropertyName AttributeName":d.propertyName,NumberLiteral:d.number,KeywordQuery:d.keyword,UnaryQueryOp:d.operatorKeyword,callee:d.keyword,"CallTag ValueName":d.atom,Callee:d.variableName,Unit:d.unit,"UniversalSelector NestingSelector":d.definitionOperator,AtKeyword:d.keyword,MatchOp:d.compareOperator,"ChildOp SiblingOp, LogicOp":d.logicOperator,BinOp:d.arithmeticOperator,Important:d.modifier,Comment:d.blockComment,ParenthesizedContent:d.special(d.name),ColorLiteral:d.color,StringLiteral:d.string,":":d.punctuation,"PseudoOp #":d.derefOperator,"; ,":d.separator,"( )":d.paren,"[ ]":d.squareBracket,"{ }":d.brace})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"}},indentOnInput:/^\s*\}$/}}),ee=H.data.of({autocomplete:e=>{let{state:t,pos:a}=e,l=Q(t).resolve(a,-1);if("PropertyName"==l.name)return{from:l.from,options:K(),span:J};if("ValueName"==l.name)return{from:l.from,options:F,span:J};if("PseudoClassName"==l.name)return{from:l.from,options:B,span:J};if("TagName"==l.name){for(let{parent:e}=l;e;e=e.parent)if("Block"==e.name)return{from:l.from,options:K(),span:J};return{from:l.from,options:M,span:J}}if(!e.explicit)return null;let r=l.resolve(a),O=r.childBefore(a);return O&&":"==O.name&&"PseudoClassSelector"==r.name?{from:a,options:B,span:J}:O&&":"==O.name&&"Declaration"==r.name||"ArgList"==r.name?{from:a,options:F,span:J}:"Block"==r.name?{from:a,options:K(),span:J}:null}}),te=["_blank","_self","_top","_parent"],ae=["ascii","utf-8","utf-16","latin1","latin1"],le=["get","post","put","delete"],re=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],Oe=["true","false"],ne={},oe={a:{attrs:{href:null,ping:null,type:null,media:null,target:te,hreflang:null}},abbr:ne,acronym:ne,address:ne,applet:ne,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:ne,aside:ne,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:ne,base:{attrs:{href:null,target:te}},basefont:ne,bdi:ne,bdo:ne,big:ne,blockquote:{attrs:{cite:null}},body:ne,br:ne,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:re,formmethod:le,formnovalidate:["novalidate"],formtarget:te,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:ne,center:ne,cite:ne,code:ne,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:ne,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:ne,dir:ne,div:ne,dl:ne,dt:ne,em:ne,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:ne,figure:ne,font:ne,footer:ne,form:{attrs:{action:null,name:null,"accept-charset":ae,autocomplete:["on","off"],enctype:re,method:le,novalidate:["novalidate"],target:te}},frame:ne,frameset:ne,h1:ne,h2:ne,h3:ne,h4:ne,h5:ne,h6:ne,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:ne,hgroup:ne,hr:ne,html:{attrs:{manifest:null},children:["head","body"]},i:ne,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:re,formmethod:le,formnovalidate:["novalidate"],formtarget:te,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:ne,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:ne,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:ne,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:ae,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:ne,noframes:ne,noscript:ne,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:ne,param:{attrs:{name:null,value:null}},pre:ne,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:ne,rt:ne,ruby:ne,s:ne,samp:ne,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:ae}},section:ne,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},small:ne,source:{attrs:{src:null,type:null,media:null}},span:ne,strike:ne,strong:ne,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:ne,summary:ne,sup:ne,table:ne,tbody:ne,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:ne,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:ne,time:{attrs:{datetime:null}},title:ne,tr:ne,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},tt:ne,u:ne,ul:{children:["li","script","template","ul","ol"]},var:ne,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:ne},ie={accesskey:null,class:null,contenteditable:Oe,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:Oe,autocorrect:Oe,autocapitalize:Oe,style:null,tabindex:null,title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":Oe,"aria-autocomplete":["inline","list","both","none"],"aria-busy":Oe,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":Oe,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":Oe,"aria-hidden":Oe,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":Oe,"aria-multiselectable":Oe,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":Oe,"aria-relevant":null,"aria-required":Oe,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},se=Object.keys(oe),ue=Object.keys(ie);function de(e,t){let a=t.firstChild,l=a&&a.getChild("TagName");return l?e.sliceString(l.from,l.to):""}function Qe(e,t=!1){for(let a=e.parent;a;a=a.parent)if("Element"==a.name){if(!t)return a;t=!1}return null}function pe(e,t){let a=Qe(t,!0),l=a?oe[de(e,a)]:null;return(null==l?void 0:l.children)||se}function ce(e,t){let a=[];for(let l=t;l=Qe(l);){let r=de(e,l);if(r&&"CloseTag"==l.lastChild.name)break;r&&a.indexOf(r)<0&&("EndTag"==t.name||t.from>=l.firstChild.to)&&a.push(r)}return a}const me=/^[:\-\.\w\u00b7-\uffff]+$/;function fe(e,t,a,l){let r=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:a,to:l,options:pe(e.doc,t).map((e=>({label:e,type:"type"}))).concat(ce(e.doc,t).map(((e,t)=>({label:"/"+e,apply:"/"+e+r,type:"type",boost:99-t})))),span:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function ge(e,t,a,l){let r=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:a,to:l,options:ce(e.doc,t).map(((e,t)=>({label:e,apply:e+r,type:"type",boost:99-t}))),span:me}}const $e=O.define({parser:Z.configure({props:[n.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.state.doc.lineAt(e.node.from))+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit,Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t,a=null;for(let l=e.node;;){let e=l.lastChild;if(!e||"Element"!=e.name||e.to!=l.to)break;a=l=e}return a&&(!(t=a.lastChild)||"CloseTag"!=t.name&&"SelfClosingTag"!=t.name)?e.lineIndent(e.state.doc.lineAt(a.from))+e.unit:null}}),i.add({Element(e){let t=e.firstChild,a=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==a.name?a.from:e.to}:null}}),u({AttributeValue:d.string,"Text RawText":d.content,"StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag":d.angleBracket,TagName:d.tagName,"MismatchedCloseTag/TagName":[d.tagName,d.invalid],AttributeName:d.propertyName,UnquotedAttributeValue:d.string,Is:d.definitionOperator,"EntityReference CharacterReference":d.character,Comment:d.blockComment,ProcessingInst:d.processingInstruction,DoctypeDecl:d.documentMeta})],nested:U([{tag:"script",attrs:e=>!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),parser:c.parser},{tag:"style",attrs:e=>(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),parser:H.parser}])}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}}),ye=$e.data.of({autocomplete:function(e){let{state:t,pos:a}=e,l=Q(t).resolve(a),r=l.resolve(a,-1);return"TagName"==r.name?r.parent&&/CloseTag$/.test(r.parent.name)?ge(t,r,r.from,a):fe(t,r,r.from,a):"StartTag"==r.name?fe(t,r,a,a):"StartCloseTag"==r.name||"IncompleteCloseTag"==r.name?ge(t,r,a,a):e.explicit&&("OpenTag"==r.name||"SelfClosingTag"==r.name)||"AttributeName"==r.name?function(e,t,a,l){let r=Qe(t),O=r?oe[de(e.doc,r)]:null;return{from:a,to:l,options:(O&&O.attrs?Object.keys(O.attrs).concat(ue):ue).map((e=>({label:e,type:"property"}))),span:me}}(t,r,"AttributeName"==r.name?r.from:a,a):"Is"==r.name||"AttributeValue"==r.name||"UnquotedAttributeValue"==r.name?function(e,t,a,l){var r;let O,n=null===(r=t.parent)||void 0===r?void 0:r.getChild("AttributeName"),o=[];if(n){let r=e.sliceDoc(n.from,n.to),i=ie[r];if(!i){let a=Qe(t),l=a?oe[de(e.doc,a)]:null;i=(null==l?void 0:l.attrs)&&l.attrs[r]}if(i){let t=e.sliceDoc(a,l).toLowerCase(),r='"',n='"';/^['"]/.test(t)?(O='"'==t[0]?/^[^"]*$/:/^[^']*$/,r="",n=e.sliceDoc(l,l+1)==t[0]?"":t[0],t=t.slice(1),a++):O=/^[^\s<>='"]*$/;for(let e of i)o.push({label:e,apply:r+e+n,type:"constant"})}}return{from:a,to:l,options:o,span:O}}(t,r,"Is"==r.name?a:r.from,a):!e.explicit||"Element"!=l.name&&"Text"!=l.name&&"Document"!=l.name?null:function(e,t,a){let l=[],r=0;for(let O of pe(e.doc,t))l.push({label:"<"+O,type:"type"});for(let O of ce(e.doc,t))l.push({label:"</"+O+">",type:"type",boost:99-r++});return{from:a,to:a,options:l,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(t,r,a)}});function he(){return new r($e,[ye,p().support,new r(H,ee).support])}export{he as html,ye as htmlCompletion,$e as htmlLanguage}