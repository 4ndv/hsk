(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KBnI:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return z}));var n=t("q1tI"),s=t.n(n),i=t("wx14"),l=t("zLVn"),o=t("17x9"),r=t.n(o),c=t("TSYQ"),u=t.n(c),d=t("33Jr"),b={className:r.a.string,cssModule:r.a.object,size:r.a.string,bordered:r.a.bool,borderless:r.a.bool,striped:r.a.bool,dark:r.a.bool,hover:r.a.bool,responsive:r.a.oneOfType([r.a.bool,r.a.string]),tag:d.c,responsiveTag:d.c,innerRef:r.a.oneOfType([r.a.func,r.a.string,r.a.object])},p=function(e){var a=e.className,t=e.cssModule,n=e.size,o=e.bordered,r=e.borderless,c=e.striped,b=e.dark,p=e.hover,f=e.responsive,v=e.tag,h=e.responsiveTag,g=e.innerRef,m=Object(l.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(d.b)(u()(a,"table",!!n&&"table-"+n,!!o&&"table-bordered",!!r&&"table-borderless",!!c&&"table-striped",!!b&&"table-dark",!!p&&"table-hover"),t),O=s.a.createElement(v,Object(i.a)({},m,{ref:g,className:j}));if(f){var y=Object(d.b)(!0===f?"table-responsive":"table-responsive-"+f,t);return s.a.createElement(h,{className:y},O)}return O};p.propTypes=b,p.defaultProps={tag:"table",responsiveTag:"div"};var f=p,v=t("jrRI"),h=t("rhny"),g=t("L3zb"),m=t("ok1R"),j=t("fATa"),O=t("I/41"),y=t("6ljA"),N=s.a.createElement,k=function(e,a){return 0===a.length?null:N(f,{striped:!0,bordered:!0},N("thead",null,N("tr",null,N("th",null,"#"),N("th",null,"Character"),N("th",null,"Pinyin"),N("th",null,"Definitions"))),N("tbody",null,a.map((function(a,t){var n="".concat(e,"-").concat(t);return N("tr",{key:n},N("td",null,t+1),N("td",null,a.simplified),N("td",null,a.pinyin),N("td",null,a.definitions.join("; ")))}))))};function z(){var e=Object(n.useState)([]),a=e[0],t=e[1],s=Object(n.useState)(0),i=s[0],l=s[1];return Object(n.useEffect)((function(){t(0!==i?Object(y.b)(i):[])}),[i]),N(O.a,null,N(j.a,{activeLink:"dictionary"}),N("h3",null,"Dictionary"),N(v.a,{row:!0},N(h.a,null,N(g.a,{type:"select",name:"select",id:"levelSelect",onChange:function(e){return l(+e.target.value)}},N("option",{value:0},"Select HSK level"),N("option",{value:1},"HSK 1"),N("option",{value:2},"HSK 2"),N("option",{value:3},"HSK 3"),N("option",{value:4},"HSK 4"),N("option",{value:5},"HSK 5"),N("option",{value:6},"HSK 6")))),N(m.a,null,N(h.a,null,k(i,a))))}},L3zb:function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),i=t("JX7q"),l=t("dI71"),o=t("q1tI"),r=t.n(o),c=t("17x9"),u=t.n(c),d=t("TSYQ"),b=t.n(d),p=t("33Jr"),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,m=new RegExp("\\D","g"),j=u||("select"===i||"textarea"===i?i:"input"),O="form-control";f?(O+="-plaintext",j=u||"input"):"file"===i?O+="-file":g&&(O=d?null:"form-check-input"),h.size&&m.test(h.size)&&(Object(p.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var y=Object(p.b)(b()(a,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===j||u&&"function"===typeof u)&&(h.type=i),h.children&&!f&&"select"!==i&&"string"===typeof j&&"select"!==j&&(Object(p.d)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),r.a.createElement(j,Object(n.a)({},h,{ref:v,className:y}))},a}(r.a.Component);v.propTypes=f,v.defaultProps={type:"text"},a.a=v},fATa:function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),i=t("wx14"),l=t("zLVn"),o=t("17x9"),r=t.n(o),c=t("TSYQ"),u=t.n(c),d=t("33Jr"),b={tabs:r.a.bool,pills:r.a.bool,vertical:r.a.oneOfType([r.a.bool,r.a.string]),horizontal:r.a.string,justified:r.a.bool,fill:r.a.bool,navbar:r.a.bool,card:r.a.bool,tag:d.c,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tabs,o=e.pills,r=e.vertical,c=e.horizontal,b=e.justified,p=e.fill,f=e.navbar,v=e.card,h=e.tag,g=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(d.b)(u()(a,f?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":n,"card-header-tabs":v&&n,"nav-pills":o,"card-header-pills":v&&o,"nav-justified":b,"nav-fill":p}),t);return s.a.createElement(h,Object(i.a)({},g,{className:m}))};p.propTypes=b,p.defaultProps={tag:"ul",vertical:!1};var f=p,v={tag:d.c,active:r.a.bool,className:r.a.string,cssModule:r.a.object},h=function(e){var a=e.className,t=e.cssModule,n=e.active,o=e.tag,r=Object(l.a)(e,["className","cssModule","active","tag"]),c=Object(d.b)(u()(a,"nav-item",!!n&&"active"),t);return s.a.createElement(o,Object(i.a)({},r,{className:c}))};h.propTypes=v,h.defaultProps={tag:"li"};var g=h,m=t("JX7q"),j=t("dI71"),O={tag:d.c,innerRef:r.a.oneOfType([r.a.object,r.a.func,r.a.string]),disabled:r.a.bool,active:r.a.bool,className:r.a.string,cssModule:r.a.object,onClick:r.a.func,href:r.a.any},y=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(m.a)(t)),t}Object(j.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.active,o=e.tag,r=e.innerRef,c=Object(l.a)(e,["className","cssModule","active","tag","innerRef"]),b=Object(d.b)(u()(a,"nav-link",{disabled:c.disabled,active:n}),t);return s.a.createElement(o,Object(i.a)({},c,{ref:r,onClick:this.onClick,className:b}))},a}(s.a.Component);y.propTypes=O,y.defaultProps={tag:"a"};var N=y,k=t("YNhk"),z=s.a.createElement;a.a=function(e){var a=e.activeLink;return z(f,{tabs:!0,className:"mb-3"},z(g,null,z(N,{active:"learn"===a},z(k.a,{href:"/"},"Learn"))),z(g,null,z(N,{active:"dictionary"===a},z(k.a,{href:"/dictionary"},"Dictionary"))))}},jrRI:function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),i=t("q1tI"),l=t.n(i),o=t("17x9"),r=t.n(o),c=t("TSYQ"),u=t.n(c),d=t("33Jr"),b={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:d.c,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,i=e.row,o=e.disabled,r=e.check,c=e.inline,b=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.b)(u()(a,!!i&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!o)&&"disabled"),t);return"fieldset"===b&&(p.disabled=o),l.a.createElement(b,Object(n.a)({},p,{className:f}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},shBZ:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dictionary",function(){return t("KBnI")}])}},[["shBZ",0,2,1,3,4]]]);