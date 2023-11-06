import{_ as k}from"./extends-98964cd2.js";function B(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function h(r,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},h(r,e)}function W(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,h(r,e)}function H(r){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},H(r)}function D(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function G(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(r,e,n){return G()?v=Reflect.construct.bind():v=function(a,f,i){var o=[null];o.push.apply(o,f);var u=Function.bind.apply(a,o),d=new u;return i&&h(d,i.prototype),d},v.apply(null,arguments)}function j(r){var e=typeof Map=="function"?new Map:void 0;return j=function(t){if(t===null||!D(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return v(t,arguments,H(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h(a,t)},j(r)}var p=function(r){W(e,r);function e(n){var t;return t=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,B(t)}return e}(j(Error));function O(r){return Math.round(r*255)}function J(r,e,n){return O(r)+","+O(e)+","+O(n)}function g(r,e,n,t){if(t===void 0&&(t=J),e===0)return t(n,n,n);var a=(r%360+360)%360/60,f=(1-Math.abs(2*n-1))*e,i=f*(1-Math.abs(a%2-1)),o=0,u=0,d=0;a>=0&&a<1?(o=f,u=i):a>=1&&a<2?(o=i,u=f):a>=2&&a<3?(u=f,d=i):a>=3&&a<4?(u=i,d=f):a>=4&&a<5?(o=i,d=f):a>=5&&a<6&&(o=f,d=i);var b=n-f/2,l=o+b,s=u+b,F=d+b;return t(l,s,F)}var q={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function K(r){if(typeof r!="string")return r;var e=r.toLowerCase();return q[e]?"#"+q[e]:r}var Q=/^#[a-fA-F0-9]{6}$/,U=/^#[a-fA-F0-9]{8}$/,X=/^#[a-fA-F0-9]{3}$/,Y=/^#[a-fA-F0-9]{4}$/,_=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Z=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,C=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,V=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function y(r){if(typeof r!="string")throw new p(3);var e=K(r);if(e.match(Q))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(U)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(X))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(Y)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var a=_.exec(e);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var f=Z.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=C.exec(e);if(i){var o=parseInt(""+i[1],10),u=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,b="rgb("+g(o,u,d)+")",l=_.exec(b);if(!l)throw new p(4,e,b);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var s=V.exec(e.substring(0,50));if(s){var F=parseInt(""+s[1],10),S=parseInt(""+s[2],10)/100,E=parseInt(""+s[3],10)/100,M="rgb("+g(F,S,E)+")",m=_.exec(M);if(!m)throw new p(4,e,M);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])}}throw new p(5)}function ee(r){var e=r.red/255,n=r.green/255,t=r.blue/255,a=Math.max(e,n,t),f=Math.min(e,n,t),i=(a+f)/2;if(a===f)return r.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:r.alpha}:{hue:0,saturation:0,lightness:i};var o,u=a-f,d=i>.5?u/(2-a-f):u/(a+f);switch(a){case e:o=(n-t)/u+(n<t?6:0);break;case n:o=(t-e)/u+2;break;default:o=(e-n)/u+4;break}return o*=60,r.alpha!==void 0?{hue:o,saturation:d,lightness:i,alpha:r.alpha}:{hue:o,saturation:d,lightness:i}}function z(r){return ee(y(r))}var re=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},T=re;function c(r){var e=r.toString(16);return e.length===1?"0"+e:e}function R(r){return c(Math.round(r*255))}function ne(r,e,n){return T("#"+R(r)+R(e)+R(n))}function w(r,e,n){return g(r,e,n,ne)}function te(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return w(r,e,n);if(typeof r=="object"&&e===void 0&&n===void 0)return w(r.hue,r.saturation,r.lightness);throw new p(1)}function ae(r,e,n,t){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?w(r,e,n):"rgba("+g(r,e,n)+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?w(r.hue,r.saturation,r.lightness):"rgba("+g(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new p(2)}function $(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return T("#"+c(r)+c(e)+c(n));if(typeof r=="object"&&e===void 0&&n===void 0)return T("#"+c(r.red)+c(r.green)+c(r.blue));throw new p(6)}function P(r,e,n,t){if(typeof r=="string"&&typeof e=="number"){var a=y(r);return"rgba("+a.red+","+a.green+","+a.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?$(r,e,n):"rgba("+r+","+e+","+n+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?$(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new p(7)}var fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ie=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},oe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ue=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function L(r){if(typeof r!="object")throw new p(8);if(ie(r))return P(r);if(fe(r))return $(r);if(ue(r))return ae(r);if(oe(r))return te(r);throw new p(8)}function N(r,e,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=e?r.apply(this,a):N(r,e,a)}}function x(r){return N(r,r.length,[])}function I(r,e,n){return Math.max(r,Math.min(e,n))}function de(r,e){if(e==="transparent")return e;var n=z(e);return L(k({},n,{lightness:I(0,1,n.lightness-parseFloat(r))}))}var pe=x(de),me=pe;function A(r){if(r==="transparent")return 0;var e=y(r),n=Object.keys(e).map(function(i){var o=e[i]/255;return o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)}),t=n[0],a=n[1],f=n[2];return parseFloat((.2126*t+.7152*a+.0722*f).toFixed(3))}function ve(r,e){var n=A(r),t=A(e);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function se(r,e){if(e==="transparent")return e;var n=z(e);return L(k({},n,{lightness:I(0,1,n.lightness+parseFloat(r))}))}var ce=x(se),we=ce;function be(r,e){if(e==="transparent")return e;var n=y(e),t=typeof n.alpha=="number"?n.alpha:1,a=k({},n,{alpha:I(0,1,(t*100+parseFloat(r)*100)/100)});return P(a)}var le=x(be),ke=le;function he(r,e){if(e==="transparent")return e;var n=y(e),t=typeof n.alpha=="number"?n.alpha:1,a=k({},n,{alpha:I(0,1,+(t*100-parseFloat(r)*100).toFixed(2)/100)});return P(a)}var ge=x(he),xe=ge;export{me as a,ke as b,xe as c,we as d,ve as g,P as r};
//# sourceMappingURL=polished.esm-45dff3a1.js.map
