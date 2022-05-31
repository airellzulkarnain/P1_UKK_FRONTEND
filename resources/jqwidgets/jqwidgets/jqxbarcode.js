/*
jQWidgets v14.0.0 (2022-May)
Copyright (c) 2011-2022 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/*
jQWidgets v14.0.0 (2022-May)
Copyright (c) 2011-2022 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

!function(e){e.jqx.jqxWidget("jqxBarcode","",{}),e.extend(e.jqx._jqxBarcode.prototype,{defineInstance:function(){var t={value:"12345",type:"codabar",backgroundColor:"white",lineWidth:4,lineHeight:50,lineColor:"black",displayLabel:!0,labelPosition:"bottom",labelFontSize:14,labelMarginTop:5,labelMarginBottom:5,labelColor:"black",labelFont:"monospace",renderAs:"svg"};return e.extend(!0,this,t),t},createInstance:function(e){var t=new Barcode(this.element);t.value=this.value,t.type=this.type,t.backgroundColor=this.backgroundColor,t.lineWidth=this.lineWidth,t.lineHeight=this.lineHeight,t.lineColor=this.lineColor,t.displayLabel=this.displayLabel,t.labelPosition=this.labelPosition,t.labelFontSize=this.labelFontSize,t.labelMarginTop=this.labelMarginTop,t.labelMarginBottom=this.labelMarginBottom,t.labelColor=this.labelColor,t.labelFont=this.labelFont,t.renderAs=this.renderAs,this.element.innerHTML=t.template(),this.barcode=t,t.refresh()},getDataURL:function(e){return this.barcode.getDataURL(e)},export:function(e,t){this.barcode.export(e,t)},isValid:function(){return this.barcode.isValid(!1)},propertyChangedHandler:function(e,t,a,l){e.barcode.refresh()}})}(jqxBaseFramework);class Barcode{constructor(e){this.host=e}static get properties(){return{value:{type:"string",value:""},type:{value:"codabar",type:"string",allowedValues:["pharmacode","codabar","code128a","code128b","code128c","msi","msi10","msi11","msi1010","msi1110","ean13","ean8","code39","code93"]},backgroundColor:{value:"white",type:"string"},lineWidth:{value:4,type:"number"},lineHeight:{value:50,type:"number"},lineColor:{value:"black",type:"string"},displayLabel:{value:!0,type:"boolean"},labelPosition:{value:"bottom",type:"string",allowedValues:["top","bottom"]},labelFontSize:{value:14,type:"number"},labelMarginTop:{value:5,type:"number"},labelMarginBottom:{value:5,type:"number"},labelColor:{value:"black",type:"string"},labelFont:{value:"monospace",type:"string"},renderAs:{value:"svg",type:"string",allowedValues:["svg","canvas"]}}}template(){return'<div class="jqx-barcode-container"></div>'}refresh(){this._generateCode(this.renderAs)}_generateCode(e,t=!1){const a=this,l=this._getEncoded(a.type,a.value),i=l.length*a.lineWidth,r=a.lineHeight+a.displayLabel*(a.labelMarginTop+a.labelMarginBottom+a.labelFontSize);let o,n=0,s=0;if(a.isValid(),"svg"===e)(o=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("width",i),o.setAttribute("height",r),o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:svg","http://www.w3.org/2000/svg"),o.style.backgroundColor=a.backgroundColor;else if("canvas"===e){(o=document.createElement("canvas")).setAttribute("width",i),o.setAttribute("height",r);let e=o.getContext("2d");e.fillStyle=a.backgroundColor,e.fillRect(0,0,i,r)}t&&(o.style.display="none"),o.classList.add("jqx-barcode"),a.host.firstChild.appendChild(o),a.displayLabel&&"top"===a.labelPosition&&(s+=a.labelMarginTop+a.labelFontSize,"svg"===e?a._drawTextSVG(i/2,s,o):a._drawTextCanvas(i/2,s,o),s+=a.labelMarginBottom);for(let t of l)"1"===t?"svg"===e?a._drawStepSVG(a.lineColor,1,n,s,o):a._drawStepCanvas(a.lineColor,1,n,s,o):"svg"===e?a._drawStepSVG("white",0,n,s,o):a._drawStepCanvas("white",0,n,s,o),n+=a.lineWidth;a.displayLabel&&"bottom"===a.labelPosition&&(s+=a.lineHeight+a.labelMarginTop+a.labelFontSize,"svg"===e?a._drawTextSVG(i/2,s,o):a._drawTextCanvas(i/2,s,o)),2===a.host.firstChild.children.length&&"none"!==a.host.firstChild.children[1].style.display&&a.host.firstChild.removeChild(a.host.firstChild.firstChild)}_getEncoded(e,t){const a=this;let l;switch(e){case"pharmacode":l=a._getEncodedPharmacode(t);break;case"codabar":l=a._getEncodedCodabar(t);break;case"code128a":l=a._getEncodedCode128(t,"A");break;case"code128b":l=a._getEncodedCode128(t,"B");break;case"code128c":l=a._getEncodedCode128(a.value,"C");break;case"msi":l=a._getEncodedMSI(a.value,"");break;case"msi10":l=a._getEncodedMSI(a.value,"10");break;case"msi11":l=a._getEncodedMSI(a.value,"11");break;case"msi1010":case"msi1110":l=a._getEncodedMSI(a.value,"1010");break;case"ean13":l=a._getEncodedEAN(a.value,"13");break;case"ean8":l=a._getEncodedEAN(a.value,"8");break;case"code39":l=a._getEncodedCode39(a.value);break;case"code93":l=a._getEncodedCode93(a.value)}return l}isValid(e=!1){const t=this.type,a=this.value;let l=/[^@!(一-龠)(ぁ-ゔ)(ァ-ヴー)\d0-9A-Z \$\%\*\+\-\.\/\:\=\?\^\{\|\}\~]/gm,i=!0,r=!0,o=[];if(!e)switch(t){case"pharmacode":l=/[^\d]/gm,r=a.length>=1&&a.length<=6,i=+a>=3&&+a<=131070;break;case"codabar":l=/[^ABCD\d\$-]/gm,i=/^[A-D]\d+[A-D]$/gm.test(a);break;case"code128a":l=/[^\x20-\x5F]/gm;break;case"code128b":l=/[^\x20-\x7F]/gm;break;case"code128c":l=/[^\d]/gm;break;case"msi":case"msi10":case"msi11":case"msi1010":case"msi1110":l=/[^\d]/gm;break;case"ean13":l=/[^\d]/gm,r=13===a.length||12===a.length;break;case"ean8":l=/[^\d]/gm,r=7===a.length||8===a.length;break;case"code39":l=/[^\w\*.]/gm,i=/^\*\*$/gm.test(a);break;case"code93":l=/[^\w\*.\-\* \$+\/%]/gm,i=/^\*\*$/gm.test(a)}return o=a.match(l),!(!i||o||!r)||(this.host.dispatchEvent(new CustomEvent("invalid",{detail:{value:a,invalidCharacters:o,patternValidity:i,lengthValidity:r}})),!1)}_drawTextSVG(e,t,a){let l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("x",e),l.setAttribute("y",t),l.setAttribute("text-anchor","middle"),l.classList.add("jqx-barcode-label"),l.style.fill=this.labelColor,l.style.fontFamily=this.labelFont,l.style.fontSize=this.labelFontSize+"px",l.textContent=this.value,a.appendChild(l)}_drawTextCanvas(e,t,a){let l=a.getContext("2d");l.font=`${this.labelFontSize}px ${this.labelFont}`,l.fillStyle=this.labelColor,l.textAlign="center",l.fillText(this.value,e,t)}_drawStepSVG(e,t,a,l,i){const r=this;r.squareWidth&&(r.lineWidth=r.squareWidth,r.lineHeight=r.squareWidth);let o=document.createElementNS("http://www.w3.org/2000/svg","rect");o.setAttribute("x",a),o.setAttribute("y",l),o.setAttribute("width",r.lineWidth),o.setAttribute("height",r.lineHeight),o.setAttribute("fill-opacity",t),o.style.fill=e,i.appendChild(o)}_drawStepCanvas(e,t,a,l,i){const r=this;r.squareWidth&&(r.lineWidth=r.squareWidth,r.lineHeight=r.squareWidth);let o=i.getContext("2d");o.beginPath(),o.globalAlpha=t,o.strokeStyle=e,o.fillStyle=e,o.rect(a,l,r.lineWidth,r.lineHeight),o.fill()}_getEncodedPharmacode(e){let t="";for(;0!==e;)e%2==0?(t="11100"+t,e=(e-2)/2):(t="100"+t,e=(e-1)/2);return t=t.slice(0,-2)}_getEncodedCodabar(e){let t="";const a={0:1010100110,1:1010110010,2:1010010110,3:1100101010,4:1011010010,5:1101010010,6:1001010110,7:1001011010,8:1001101010,9:1101001010,"-":1010011010,$:1011001010,":":11010110110,"/":11011010110,".":11011011010,"+":10110110110,A:10110010010,B:10010010110,C:10100100110,D:10100110010};for(let l of e)t+=a[l];return t=t.slice(0,-1)}_getEncodedCode39(e){let t="";const a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],l=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];for(let i of e)t+=l[a.indexOf(i)].toString(2)+"0";return t=t.slice(0,-1)}_getEncodedCode93(e){let t="";const a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],l=[100010100,101001e3,101000100,101000010,100101e3,100100100,100100010,10101e4,100010010,100001010,110101e3,110100100,110100010,110010100,110010010,110001010,101101e3,101100100,101100010,100110100,100011010,101011e3,101001100,101000110,100101100,100010110,110110100,110110010,110101100,110100110,110010110,110011010,101101100,101100110,100110110,100111010,100101110,111010100,111010010,111001010,111010110,100110010,111011010,101011110];for(let i of e)t+=l[a.indexOf(i)]+"0";return t=t.slice(0,-1)}_getEncodedMSI(e,t){let a="";const l={0:100100100100,1:100100100110,2:100100110100,3:100100110110,4:100110100100,5:100110100110,6:100110110100,7:100110110110,8:110100100100,9:110100100110};a+="110","10"===t?e+=this._getMSIMod10(e):"11"===t?e+=this._getMSIMod11(e):"1010"===t?(e+=this._getMSIMod10(e),e+=this._getMSIMod10(e)):"1110"===t&&(e+=this._getMSIMod11(e),e+=this._getMSIMod10(e));for(let t of e)a+=l[t];return a+="1001"}_getEncodedEAN(e,t){let a="";const l=[["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"]],i=["000000","001011","001101","001110","010011","011001","011100","010101","010110","011010"];if(12===e.length||7===e.length){let t,a,l=0,i=0;a=7===e.length?5:12;for(let t=0;t<a;t+=2)l+=parseInt(e[t]),i+=parseInt(e[t+1]);(t=(3*i+l)%10)>0&&(t=10-t),e+=t}if("13"===t){a+="101";let t=i[e[0]];for(let i=1;i<7;i++)a+=l[t[i-1]][e[i]];a+="01010";for(let t=0;t<6;t++)a+=l[2][e[t+7]];a+="101"}else if("8"===t){a+="101";for(let t=0;t<4;t++)a+=l[0][e[t]];a+="01010";for(let t=0;t<4;t++)a+=l[2][e[t+4]];a+="101"}return a}_getMSIMod10(e){let t=0;for(var a=0;a<e.length;a++){var l=parseInt(e[a]);(a+e.length)%2==0?t+=l:t+=2*l%10+Math.floor(2*l/10)}return(10-t%10)%10}_getMSIMod11(e){let t=0;for(var a=[2,3,4,5,6,7],l=0;l<e.length;l++){var i=parseInt(e[e.length-1-l]);t+=a[l%a.length]*i}return(11-t%11)%11}_getEncodedCode128(e,t){let a,l="",i=[],r=0;const o=[[" "," ","00","11011001100"],["!","!","01","11001101100"],['"','"',"02","11001100110"],["#","#","03","10010011000"],["$","$","04","10010001100"],["%","%","05","10001001100"],["&","&","06","10011001000"],["'","'","07","10011000100"],["(","(","08","10001100100"],[")",")","09","11001001000"],["*","*","10","11001000100"],["+","+","11","11000100100"],[",",",","12","10110011100"],["-","-","13","10011011100"],[".",".","14","10011001110"],["/","/","15","10111001100"],["0","0","16","10011101100"],["1","1","17","10011100110"],["2","2","18","11001110010"],["3","3","19","11001011100"],["4","4","20","11001001110"],["5","5","21","11011100100"],["6","6","22","11001110100"],["7","7","23","11101101110"],["8","8","24","11101001100"],["9","9","25","11100101100"],[":",":","26","11100100110"],[";",";","27","11101100100"],["<","<","28","11100110100"],["=","=","29","11100110010"],[">",">","30","11011011000"],["?","?","31","11011000110"],["@","@","32","11000110110"],["A","A","33","10100011000"],["B","B","34","10001011000"],["C","C","35","10001000110"],["D","D","36","10110001000"],["E","E","37","10001101000"],["F","F","38","10001100010"],["G","G","39","11010001000"],["H","H","40","11000101000"],["I","I","41","11000100010"],["J","J","42","10110111000"],["K","K","43","10110001110"],["L","L","44","10001101110"],["M","M","45","10111011000"],["N","N","46","10111000110"],["O","O","47","10001110110"],["P","P","48","11101110110"],["Q","Q","49","11010001110"],["R","R","50","11000101110"],["S","S","51","11011101000"],["T","T","52","11011100010"],["U","U","53","11011101110"],["V","V","54","11101011000"],["W","W","55","11101000110"],["X","X","56","11100010110"],["Y","Y","57","11101101000"],["Z","Z","58","11101100010"],["[","[","59","11100011010"],["\\","\\","60","11101111010"],["]","]","61","11001000010"],["^","^","62","11110001010"],["_","_","63","10100110000"],["NUL","`","64","10100001100"],["SOH","a","65","10010110000"],["STX","b","66","10010000110"],["ETX","c","67","10000101100"],["EOT","d","68","10000100110"],["ENQ","e","69","10110010000"],["ACK","f","70","10110000100"],["BEL","g","71","10011010000"],["BS","h","72","10011000010"],["HT","i","73","10000110100"],["LF","j","74","10000110010"],["VT","k","75","11000010010"],["FF","l","76","11001010000"],["CR","m","77","11110111010"],["SO","n","78","11000010100"],["SI","o","79","10001111010"],["DLE","p","80","10100111100"],["DC1","q","81","10010111100"],["DC2","r","82","10010011110"],["DC3","s","83","10111100100"],["DC4","t","84","10011110100"],["NAK","u","85","10011110010"],["SYN","v","86","11110100100"],["ETB","w","87","11110010100"],["CAN","x","88","11110010010"],["EM","y","89","11011011110"],["SUB","z","90","11011110110"],["ESC","[","91","11110110110"],["FS","|","92","10101111000"],["GS","]","93","10100011110"],["RS","~","94","10001011110"],["US","DEL","95","10111101000"],["FNC3","FNC3","96","10111100010"],["FNC2","FNC2","97","11110101000"],["SHIFT","SHIFT","98","11110100010"],["CODEC","CODEC","99","10111011110"],["CODEB","FNC4","CODEB","10111101110"],["FNC4","CODEA","CODEA","11101011110"],["FNC1","FNC1","FNC1","11110101110"],["StartA","StartA","StartA","11010000100"],["StartB","StartB","StartB","11010010000"],["StartC","StartC","StartC","11010011100"],["Stop","Stop","Stop","1100011101011"]];if("A"===t){a=103;for(const[t,a]of e.split("").entries()){let e=o.find(e=>e[0]===a);e&&(i.push(e),r+=t*e.length)}}else if("B"===t){a=104;for(const[t,a]of e.split("").entries()){let e=o.find(e=>e[1]===a);e&&(i.push(e),r+=t*e.length)}}else if("C"===t){a=105;for(let t=0;t<e.length-1;t+=2){let a=e.substring(t,2),l=o.find(e=>e[2]===a);l&&(i.push(l),r+=a*l.length)}}return r+=a,i.push(o[r%103]),i.unshift(o[a]),i.push(o[106]),i.forEach(e=>l+=e[3]),l}getDataURL(e){const t=this;if("svg"===e){"svg"!==t.renderAs&&t._generateCode("svg",!0);let e=t.host.querySelector("svg"),a=(new XMLSerializer).serializeToString(e),l=new Blob([a],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(l)}if("png"===e||"jpg"===e){let a="png"===e?"png":"jpeg";return"canvas"!==t.renderAs&&t._generateCode("canvas",!0),t.host.querySelector("canvas").toDataURL(`image/${a}`)}}getDataURLAsync(e){const t=this;return new Promise((a,l)=>{let i=t.getDataURL(e);i?a(i):l()})}export(e="png",t="barcode"){this.getDataURLAsync(e).then(a=>{let l=document.createElement("a");l.setAttribute("download",`${t}.${e}`),l.setAttribute("href",a),l.setAttribute("target","_blank"),l.click()})}propertyChangedHandler(e,t,a){this.refresh()}ready(){this._generateCode(this.renderAs)}}



