(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="170",m0=0,Rf=1,g0=2,Bh=1,x0=2,Ti=3,ns=0,je=1,Ce=2,ji=0,Er=1,Cf=2,Pf=3,Lf=4,v0=5,Ss=100,_0=101,M0=102,y0=103,S0=104,w0=200,b0=201,E0=202,T0=203,Dl=204,Ul=205,A0=206,R0=207,C0=208,P0=209,L0=210,I0=211,D0=212,U0=213,N0=214,Nl=0,Fl=1,zl=2,Nr=3,Ol=4,Bl=5,kl=6,Hl=7,_d=0,F0=1,z0=2,Qi=0,O0=1,B0=2,k0=3,Md=4,H0=5,G0=6,V0=7,yd=300,Fr=301,zr=302,Gl=303,Vl=304,gc=306,zi=1e3,Zi=1001,Wl=1002,Fn=1003,W0=1004,ea=1005,ui=1006,Cc=1007,Es=1008,Oi=1009,Sd=1010,wd=1011,zo=1012,kh=1013,Fs=1014,di=1015,Yo=1016,Hh=1017,Gh=1018,Or=1020,bd=35902,Ed=1021,Td=1022,ti=1023,Ad=1024,Rd=1025,Tr=1026,Br=1027,Vh=1028,Wh=1029,Cd=1030,Xh=1031,qh=1033,Oa=33776,Ba=33777,ka=33778,Ha=33779,Xl=35840,ql=35841,Yl=35842,$l=35843,Kl=36196,Zl=37492,Jl=37496,jl=37808,Ql=37809,th=37810,eh=37811,nh=37812,ih=37813,sh=37814,rh=37815,oh=37816,ah=37817,ch=37818,lh=37819,hh=37820,fh=37821,Ga=36492,uh=36494,dh=36495,Pd=36283,ph=36284,mh=36285,gh=36286,X0=3200,q0=3201,Ld=0,Y0=1,Ki="",en="srgb",Yr="srgb-linear",xc="linear",ve="srgb",Zs=7680,If=519,$0=512,K0=513,Z0=514,Id=515,J0=516,j0=517,Q0=518,tm=519,xh=35044,Df="300 es",Li=2e3,Za=2001;class $r{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,vh=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function em(n,t){return(n%t+t)%t}function Lc(n,t,e){return(1-e)*n+e*t}function ci(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],v=s[4],M=s[7],P=s[2],T=s[5],A=s[8];return r[0]=o*x+a*_+c*P,r[3]=o*m+a*v+c*T,r[6]=o*p+a*M+c*A,r[1]=l*x+h*_+f*P,r[4]=l*m+h*v+f*T,r[7]=l*p+h*M+f*A,r[2]=u*x+d*_+g*P,r[5]=u*m+d*v+g*T,r[8]=u*p+d*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ic.makeScale(t,e)),this}rotate(t){return this.premultiply(Ic.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new te;function Dd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nm(){const n=Ja("canvas");return n.style.display="block",n}const Uf={};function yo(n){n in Uf||(Uf[n]=!0,console.warn(n))}function im(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function sm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(n.r=Ar(n.r),n.g=Ar(n.g),n.b=Ar(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ki?xc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nf=[.64,.33,.3,.6,.15,.06],Ff=[.2126,.7152,.0722],zf=[.3127,.329],Of=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Yr]:{primaries:Nf,whitePoint:zf,transfer:xc,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:Ff,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:Nf,whitePoint:zf,transfer:ve,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:Ff,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let Js;class om{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Js===void 0&&(Js=Ja("canvas")),Js.width=t.width,Js.height=t.height;const i=Js.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ja("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let am=0;class Ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dc(s[o].image)):r.push(Dc(s[o]))}else r=Dc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?om.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cm=0;class fn extends $r{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,i=Zi,s=Zi,r=ui,o=Es,a=ti,c=Oi,l=fn.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ii(),this.name="",this.source=new Ud(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case Wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case Wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=yd;fn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(d+1)/2,P=(p+1)/2,T=(h+u)/4,A=(f+x)/4,C=(g+m)/4;return v>M&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=A/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=C/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=C/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lm extends $r{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ud(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends lm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Nd extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hm extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==u||l!==d||h!==g){let m=1-a;const p=c*u+l*d+h*g+f*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),T=Math.atan2(P,p*_);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const M=a*_;if(c=c*m+u*M,l=l*m+d*M,h=h*m+g*M,f=f*m+x*M,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=P,l*=P,h*=P,f*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uc.copy(this).projectOnVector(t),this.sub(Uc)}reflect(t){return this.sub(Uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new U,kf=new $o;class Vs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),ia.subVectors(this.max,no),js.subVectors(t.a,no),Qs.subVectors(t.b,no),tr.subVectors(t.c,no),Gi.subVectors(Qs,js),Vi.subVectors(tr,Qs),hs.subVectors(js,tr);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-hs.z,hs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,hs.z,0,-hs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-hs.y,hs.x,0];return!Nc(e,js,Qs,tr,ia)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,js,Qs,tr,ia))?!1:(sa.crossVectors(Gi,Vi),e=[sa.x,sa.y,sa.z],Nc(e,js,Qs,tr,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,na=new Vs,js=new U,Qs=new U,tr=new U,Gi=new U,Vi=new U,hs=new U,no=new U,ia=new U,sa=new U,fs=new U;function Nc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),c=t.dot(fs),l=e.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fm=new Vs,io=new U,Fc=new U;class Kr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const e=io.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(io,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Fc)),this.expandByPoint(io.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new U,zc=new U,ra=new U,Wi=new U,Oc=new U,oa=new U,Bc=new U;class Fd{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zc.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(zc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ra),a=Wi.dot(this.direction),c=-Wi.dot(ra),l=Wi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zc).addScaledVector(ra,u),d}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,s,r){Oc.subVectors(e,t),oa.subVectors(i,t),Bc.crossVectors(Oc,oa);let o=this.direction.dot(Bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const c=a*this.direction.dot(oa.crossVectors(Wi,oa));if(c<0)return null;const l=a*this.direction.dot(Oc.cross(Wi));if(l<0||c+l>o)return null;const h=-a*Wi.dot(Bc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,c,l,h,f,u,d,g,x,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,x=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,x=l*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,x=l*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,x=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+x,e[1]=c*f,e[5]=x*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,i){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Xi.crossVectors(i,Cn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Xi.crossVectors(i,Cn)),Xi.normalize(),aa.crossVectors(Cn,Xi),s[0]=Xi.x,s[4]=aa.x,s[8]=Cn.x,s[1]=Xi.y,s[5]=aa.y,s[9]=Cn.y,s[2]=Xi.z,s[6]=aa.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],v=i[7],M=i[11],P=i[15],T=s[0],A=s[4],C=s[8],b=s[12],S=s[1],L=s[5],H=s[9],I=s[13],O=s[2],W=s[6],Y=s[10],tt=s[14],$=s[3],ut=s[7],St=s[11],Tt=s[15];return r[0]=o*T+a*S+c*O+l*$,r[4]=o*A+a*L+c*W+l*ut,r[8]=o*C+a*H+c*Y+l*St,r[12]=o*b+a*I+c*tt+l*Tt,r[1]=h*T+f*S+u*O+d*$,r[5]=h*A+f*L+u*W+d*ut,r[9]=h*C+f*H+u*Y+d*St,r[13]=h*b+f*I+u*tt+d*Tt,r[2]=g*T+x*S+m*O+p*$,r[6]=g*A+x*L+m*W+p*ut,r[10]=g*C+x*H+m*Y+p*St,r[14]=g*b+x*I+m*tt+p*Tt,r[3]=_*T+v*S+M*O+P*$,r[7]=_*A+v*L+M*W+P*ut,r[11]=_*C+v*H+M*Y+P*St,r[15]=_*b+v*I+M*tt+P*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*u+i*l*u+s*a*d-i*c*d)+x*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+m*(+e*l*f-e*a*d-r*o*f+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-e*c*f+e*a*u+s*o*f-i*o*u+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=f*m*l-x*u*l+x*c*d-a*m*d-f*c*p+a*u*p,v=g*u*l-h*m*l-g*c*d+o*m*d+h*c*p-o*u*p,M=h*x*l-g*f*l+g*a*d-o*x*d-h*a*p+o*f*p,P=g*f*c-h*x*c-g*a*u+o*x*u+h*a*m-o*f*m,T=e*_+i*v+s*M+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(x*u*r-f*m*r-x*s*d+i*m*d+f*s*p-i*u*p)*A,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*p+i*c*p)*A,t[3]=(f*c*r-a*u*r-f*s*l+i*u*l+a*s*d-i*c*d)*A,t[4]=v*A,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*p+e*u*p)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*A,t[8]=M*A,t[9]=(g*f*r-h*x*r-g*i*d+e*x*d+h*i*p-e*f*p)*A,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*f*r-h*i*l+e*f*l+o*i*d-e*a*d)*A,t[12]=P*A,t[13]=(h*x*s-g*f*s+g*i*u-e*x*u-h*i*m+e*f*m)*A,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*A,t[15]=(o*f*s-h*a*s+h*i*c-e*f*c-o*i*u+e*a*u)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,_=c*l,v=c*h,M=c*f,P=i.x,T=i.y,A=i.z;return s[0]=(1-(x+p))*P,s[1]=(d+M)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+v)*A,s[9]=(m-_)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=er.set(s[0],s[1],s[2]).length();const o=er.set(s[4],s[5],s[6]).length(),a=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);const l=1/r,h=1/o,f=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,e.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Li){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s);let d,g;if(a===Li)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Za)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Li){const c=this.elements,l=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*l,d=(i+s)*h;let g,x;if(a===Li)g=(o+r)*f,x=-2*f;else if(a===Za)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const er=new U,Jn=new fe,um=new U(0,0,0),dm=new U(1,1,1),Xi=new U,aa=new U,Cn=new U,Hf=new fe,Gf=new $o;class mi{constructor(t=0,e=0,i=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pm=0;const Vf=new U,nr=new $o,wi=new fe,ca=new U,so=new U,mm=new U,gm=new $o,Wf=new U(1,0,0),Xf=new U(0,1,0),qf=new U(0,0,1),Yf={type:"added"},xm={type:"removed"},ir={type:"childadded",child:null},kc={type:"childremoved",child:null};class Ue extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new U,e=new mi,i=new $o,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new te}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Wf,t)}rotateY(t){return this.rotateOnAxis(Xf,t)}rotateZ(t){return this.rotateOnAxis(qf,t)}translateOnAxis(t,e){return Vf.copy(t).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wf,t)}translateY(t){return this.translateOnAxis(Xf,t)}translateZ(t){return this.translateOnAxis(qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ca.copy(t):ca.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(so,ca,this.up):wi.lookAt(ca,so,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(wi),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yf),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xm),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yf),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,mm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new U,bi=new U,Hc=new U,Ei=new U,sr=new U,rr=new U,$f=new U,Gc=new U,Vc=new U,Wc=new U,Xc=new Me,qc=new Me,Yc=new Me;class Xn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){jn.subVectors(s,e),bi.subVectors(i,e),Hc.subVectors(t,e);const o=jn.dot(jn),a=jn.dot(bi),c=jn.dot(Hc),l=bi.dot(bi),h=bi.dot(Hc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,i),Yc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),bi.subVectors(t,e),jn.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),jn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Xn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,i),rr.subVectors(r,i),Gc.subVectors(t,i);const c=sr.dot(Gc),l=rr.dot(Gc);if(c<=0&&l<=0)return e.copy(i);Vc.subVectors(t,s);const h=sr.dot(Vc),f=rr.dot(Vc);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(sr,o);Wc.subVectors(t,r);const d=sr.dot(Wc),g=rr.dot(Wc);if(g>=0&&d<=g)return e.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(rr,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return $f.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector($f,a);const p=1/(m+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},la={h:0,s:0,l:0};function $c(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=em(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=$c(o,r,t+1/3),this.g=$c(o,r,t),this.b=$c(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=Od[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ce.fromWorkingColorSpace(cn.copy(this),t),Math.round(nn(cn.r*255,0,255))*65536+Math.round(nn(cn.g*255,0,255))*256+Math.round(nn(cn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(cn.copy(this),e);const i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=en){ce.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,i=cn.g,s=cn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(la);const i=Lc(qi.h,la.h,e),s=Lc(qi.s,la.s,e),r=Lc(qi.l,la.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new $t;$t.NAMES=Od;let vm=0;class Ws extends $r{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ii(),this.name="",this.blending=Er,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Ul,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==If&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends Ws{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,ha=new gt;class Ge{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xh&&(t.usage=this.usage),t}}class Bd extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kd extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jt extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}}let _m=0;const kn=new fe,Kc=new Ue,or=new U,Pn=new Vs,ro=new Vs,Ze=new U;class we extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?kd:Bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,i){return kn.makeTranslation(t,e,i),this.applyMatrix4(kn),this}scale(t,e,i){return kn.makeScale(t,e,i),this.applyMatrix4(kn),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Pn.min,ro.min),Pn.expandByPoint(Ze),Ze.addVectors(Pn.max,ro.max),Pn.expandByPoint(Ze)):(Pn.expandByPoint(ro.min),Pn.expandByPoint(ro.max))}Pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ze.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(t,l),Ze.add(or)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new U,c[C]=new U;const l=new U,h=new U,f=new U,u=new gt,d=new gt,g=new gt,x=new U,m=new U;function p(C,b,S){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),u.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(x),a[b].add(x),a[S].add(x),c[C].add(m),c[b].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,b=_.length;C<b;++C){const S=_[C],L=S.start,H=S.count;for(let I=L,O=L+H;I<O;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const v=new U,M=new U,P=new U,T=new U;function A(C){P.fromBufferAttribute(s,C),T.copy(P);const b=a[C];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),M.crossVectors(T,b);const L=M.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,L)}for(let C=0,b=_.length;C<b;++C){const S=_[C],L=S.start,H=S.count;for(let I=L,O=L+H;I<O;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new Ge(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kf=new fe,us=new Fd,fa=new Kr,Zf=new U,ua=new U,da=new U,pa=new U,Zc=new U,ma=new U,Jf=new U,ga=new U;class xt extends Ue{constructor(t=new we,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(Zc.fromBufferAttribute(f,t),o?ma.addScaledVector(Zc,h):ma.addScaledVector(Zc.sub(e),h))}e.add(ma)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(fa.containsPoint(us.origin)===!1&&(us.intersectSphere(fa,Zf)===null||us.origin.distanceToSquared(Zf)>(t.far-t.near)**2))&&(Kf.copy(r).invert(),us.copy(t.ray).applyMatrix4(Kf),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,P=v;M<P;M+=3){const T=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);s=xa(this,p,t,i,l,h,f,T,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=xa(this,o,t,i,l,h,f,_,v,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,P=v;M<P;M+=3){const T=M,A=M+1,C=M+2;s=xa(this,p,t,i,l,h,f,T,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=m,v=m+1,M=m+2;s=xa(this,o,t,i,l,h,f,_,v,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Mm(n,t,e,i,s,r,o,a){let c;if(t.side===je?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ns,a),c===null)return null;ga.copy(a),ga.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ga);return l<e.near||l>e.far?null:{distance:l,point:ga.clone(),object:n}}function xa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ua),n.getVertexPosition(c,da),n.getVertexPosition(l,pa);const h=Mm(n,t,e,i,ua,da,pa,Jf);if(h){const f=new U;Xn.getBarycoord(Jf,ua,da,pa,f),s&&(h.uv=Xn.getInterpolatedAttribute(s,a,c,l,f,new gt)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,c,l,f,new gt)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,c,l,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new U,materialIndex:0};Xn.getNormal(ua,da,pa,u.normal),h.face=u,h.barycoord=f}return h}class Mt extends we{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function g(x,m,p,_,v,M,P,T,A,C,b){const S=M/A,L=P/C,H=M/2,I=P/2,O=T/2,W=A+1,Y=C+1;let tt=0,$=0;const ut=new U;for(let St=0;St<Y;St++){const Tt=St*L-I;for(let Vt=0;Vt<W;Vt++){const Wt=Vt*S-H;ut[x]=Wt*_,ut[m]=Tt*v,ut[p]=O,l.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[p]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),f.push(Vt/A),f.push(1-St/C),tt+=1}}for(let St=0;St<C;St++)for(let Tt=0;Tt<A;Tt++){const Vt=u+Tt+W*St,Wt=u+Tt+W*(St+1),st=u+(Tt+1)+W*(St+1),at=u+(Tt+1)+W*St;c.push(Vt,Wt,at),c.push(Wt,st,at),$+=6}a.addGroup(d,$,b),d+=$,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function xn(n){const t={};for(let e=0;e<n.length;e++){const i=kr(n[e]);for(const s in i)t[s]=i[s]}return t}function ym(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Sm={clone:kr,merge:xn};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class is extends Ws{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gd extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new U,jf=new gt,Qf=new gt;class Tn extends Gd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,jf,Qf),e.subVectors(Qf,jf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ar=-90,cr=1;class Em extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(ar,cr,t,e);s.layers=this.layers,this.add(s);const r=new Tn(ar,cr,t,e);r.layers=this.layers,this.add(r);const o=new Tn(ar,cr,t,e);o.layers=this.layers,this.add(o);const a=new Tn(ar,cr,t,e);a.layers=this.layers,this.add(a);const c=new Tn(ar,cr,t,e);c.layers=this.layers,this.add(c);const l=new Tn(ar,cr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vd extends fn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Fr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tm extends zs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new is({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:ji});r.uniforms.tEquirect.value=e;const o=new xt(s,r),a=e.minFilter;return e.minFilter===Es&&(e.minFilter=ui),new Em(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Jc=new U,Am=new U,Rm=new te;class vs{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Jc.subVectors(i,e).cross(Am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Rm.getNormalMatrix(t),s=this.coplanarPoint(Jc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Kr,va=new U;class Yh{constructor(t=new vs,e=new vs,i=new vs,s=new vs,r=new vs,o=new vs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-r,u-l,m-d,M-p).normalize(),i[1].setComponents(c+r,u+l,m+d,M+p).normalize(),i[2].setComponents(c+o,u+h,m+g,M+_).normalize(),i[3].setComponents(c-o,u-h,m-g,M-_).normalize(),i[4].setComponents(c-a,u-f,m-x,M-v).normalize(),e===Li)i[5].setComponents(c+a,u+f,m+x,M+v).normalize();else if(e===Za)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(va.x=s.normal.x>0?t.max.x:t.min.x,va.y=s.normal.y>0?t.max.y:t.min.y,va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Cm(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Te extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const _=p*u-o;for(let v=0;v<l;v++){const M=v*f-r;g.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const v=_+l*p,M=_+l*(p+1),P=_+1+l*(p+1),T=_+1+l*p;d.push(v,M,T),d.push(M,P,T)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Pm,alphahash_pars_fragment:Lm,alphamap_fragment:Im,alphamap_pars_fragment:Dm,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Fm,aomap_pars_fragment:zm,batching_pars_vertex:Om,batching_vertex:Bm,begin_vertex:km,beginnormal_vertex:Hm,bsdfs:Gm,iridescence_fragment:Vm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:$m,color_fragment:Km,color_pars_fragment:Zm,color_pars_vertex:Jm,color_vertex:jm,common:Qm,cube_uv_reflection_fragment:tg,defaultnormal_vertex:eg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:hg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:Sg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:vg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:Mg,lights_pars_begin:yg,lights_toon_fragment:wg,lights_toon_pars_fragment:bg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Lg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Ng,map_fragment:Fg,map_pars_fragment:zg,map_particle_fragment:Og,map_particle_pars_fragment:Bg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:Kg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:ex,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:sx,premultiplied_alpha_fragment:rx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:cx,roughnessmap_fragment:lx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:ux,shadowmap_vertex:dx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:xx,skinnormal_vertex:vx,specularmap_fragment:_x,specularmap_pars_fragment:Mx,tonemapping_fragment:yx,tonemapping_pars_fragment:Sx,transmission_fragment:wx,transmission_pars_fragment:bx,uv_pars_fragment:Ex,uv_pars_vertex:Tx,uv_vertex:Ax,worldpos_vertex:Rx,background_vert:Cx,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Ix,cube_vert:Dx,cube_frag:Ux,depth_vert:Nx,depth_frag:Fx,distanceRGBA_vert:zx,distanceRGBA_frag:Ox,equirect_vert:Bx,equirect_frag:kx,linedashed_vert:Hx,linedashed_frag:Gx,meshbasic_vert:Vx,meshbasic_frag:Wx,meshlambert_vert:Xx,meshlambert_frag:qx,meshmatcap_vert:Yx,meshmatcap_frag:$x,meshnormal_vert:Kx,meshnormal_frag:Zx,meshphong_vert:Jx,meshphong_frag:jx,meshphysical_vert:Qx,meshphysical_frag:tv,meshtoon_vert:ev,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:ov,sprite_vert:av,sprite_frag:cv},At={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},oi={basic:{uniforms:xn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:xn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:xn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:xn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:xn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:xn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:xn([At.points,At.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:xn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:xn([At.common,At.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:xn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:xn([At.sprite,At.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:xn([At.common,At.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:xn([At.lights,At.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};oi.physical={uniforms:xn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const _a={r:0,b:0,g:0},ps=new mi,lv=new fe;function hv(n,t,e,i,s,r,o){const a=new $t(0);let c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const M=g(_);M===null?p(a,c):M&&M.isColor&&(p(M,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===gc)?(h===void 0&&(h=new xt(new Mt(1,1,1),new is({name:"BackgroundCubeMaterial",uniforms:kr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(ps)),h.material.toneMapped=ce.getTransfer(M.colorSpace)!==ve,(f!==M||u!==M.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,d=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new xt(new Te(2,2),new is({name:"BackgroundMaterial",uniforms:kr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(_a,Hd(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:m}}function fv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(S,L,H,I,O){let W=!1;const Y=f(I,H,L);r!==Y&&(r=Y,l(r.object)),W=d(S,I,H,O),W&&g(S,I,H,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(S,L,H,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function f(S,L,H){const I=H.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let W=O[L.id];W===void 0&&(W={},O[L.id]=W);let Y=W[I];return Y===void 0&&(Y=u(c()),W[I]=Y),Y}function u(S){const L=[],H=[],I=[];for(let O=0;O<e;O++)L[O]=0,H[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:I,object:S,attributes:{},index:null}}function d(S,L,H,I){const O=r.attributes,W=L.attributes;let Y=0;const tt=H.getAttributes();for(const $ in tt)if(tt[$].location>=0){const St=O[$];let Tt=W[$];if(Tt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor)),St===void 0||St.attribute!==Tt||Tt&&St.data!==Tt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(S,L,H,I){const O={},W=L.attributes;let Y=0;const tt=H.getAttributes();for(const $ in tt)if(tt[$].location>=0){let St=W[$];St===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(St=S.instanceColor));const Tt={};Tt.attribute=St,St&&St.data&&(Tt.data=St.data),O[$]=Tt,Y++}r.attributes=O,r.attributesNum=Y,r.index=I}function x(){const S=r.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const H=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;H[S]=1,I[S]===0&&(n.enableVertexAttribArray(S),I[S]=1),O[S]!==L&&(n.vertexAttribDivisor(S,L),O[S]=L)}function _(){const S=r.newAttributes,L=r.enabledAttributes;for(let H=0,I=L.length;H<I;H++)L[H]!==S[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function v(S,L,H,I,O,W,Y){Y===!0?n.vertexAttribIPointer(S,L,H,O,W):n.vertexAttribPointer(S,L,H,I,O,W)}function M(S,L,H,I){x();const O=I.attributes,W=H.getAttributes(),Y=L.defaultAttributeValues;for(const tt in W){const $=W[tt];if($.location>=0){let ut=O[tt];if(ut===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){const St=ut.normalized,Tt=ut.itemSize,Vt=t.get(ut);if(Vt===void 0)continue;const Wt=Vt.buffer,st=Vt.type,at=Vt.bytesPerElement,wt=st===n.INT||st===n.UNSIGNED_INT||ut.gpuType===kh;if(ut.isInterleavedBufferAttribute){const lt=ut.data,Dt=lt.stride,Ht=ut.offset;if(lt.isInstancedInterleavedBuffer){for(let J=0;J<$.locationSize;J++)p($.location+J,lt.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let J=0;J<$.locationSize;J++)m($.location+J);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let J=0;J<$.locationSize;J++)v($.location+J,Tt/$.locationSize,st,St,Dt*at,(Ht+Tt/$.locationSize*J)*at,wt)}else{if(ut.isInstancedBufferAttribute){for(let lt=0;lt<$.locationSize;lt++)p($.location+lt,ut.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let lt=0;lt<$.locationSize;lt++)m($.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let lt=0;lt<$.locationSize;lt++)v($.location+lt,Tt/$.locationSize,st,St,Tt*at,Tt/$.locationSize*lt*at,wt)}}else if(Y!==void 0){const St=Y[tt];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv($.location,St);break;case 3:n.vertexAttrib3fv($.location,St);break;case 4:n.vertexAttrib4fv($.location,St);break;default:n.vertexAttrib1fv($.location,St)}}}}_()}function P(){C();for(const S in i){const L=i[S];for(const H in L){const I=L[H];for(const O in I)h(I[O].object),delete I[O];delete L[H]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const I=L[H];for(const O in I)h(I[O].object),delete I[O];delete L[H]}delete i[S.id]}function A(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const I=H[S.id];for(const O in I)h(I[O].object),delete I[O];delete H[S.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function uv(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),e.update(h,i,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ti&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Oi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!C)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:P,maxSamples:T}}function pv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new vs,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:i,v=_*4;let M=p.clippingState||null;c.value=M,M=h(g,u,v,d);for(let P=0;P!==v;++P)M[P]=e[P];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function mv(n){let t=new WeakMap;function e(o,a){return a===Gl?o.mapping=Fr:a===Vl&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gl||a===Vl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Tm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xd extends Gd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mr=4,tu=[.125,.215,.35,.446,.526,.582],ws=20,jc=new Xd,eu=new $t;let Qc=null,tl=0,el=0,nl=!1;const _s=(1+Math.sqrt(5))/2,lr=1/_s,nu=[new U(-_s,lr,0),new U(_s,lr,0),new U(-lr,0,_s),new U(lr,0,_s),new U(0,_s,-lr),new U(0,_s,lr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Qc=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,tl,el),this._renderer.xr.enabled=nl,t.scissorTest=!1,Ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fr||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Yo,format:ti,colorSpace:Yr,depthBuffer:!1},s=iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gv(r)),this._blurMaterial=xv(r,t,e)}return s}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,jc)}_sceneToCubeUV(t,e,i,s){const a=new Tn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(eu),h.toneMapping=Qi,h.autoClear=!1;const d=new sn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new xt(new Mt,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(eu),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;Ma(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fr||t.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ma(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,jc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nu[(s-r-1)%nu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new xt(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ws-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const p=[];let _=0;for(let A=0;A<ws;++A){const C=A/x,b=Math.exp(-C*C/2);p.push(b),A===0?_+=b:A<m&&(_+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const M=this._sizeLods[s],P=3*M*(s>v-Mr?s-v+Mr:0),T=4*(this._cubeSize-M);Ma(e,P,T,3*M,2*M),c.setRenderTarget(e),c.render(f,jc)}}function gv(n){const t=[],e=[],i=[];let s=n;const r=n-Mr+1+tu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Mr?c=tu[o-n+Mr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,C=T>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(b,x*g*T),v.set(u,m*g*T);const S=[T,T,T,T,T,T];M.set(S,p*g*T)}const P=new we;P.setAttribute("position",new Ge(_,x)),P.setAttribute("uv",new Ge(v,m)),P.setAttribute("faceIndex",new Ge(M,p)),t.push(P),s>Mr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function iu(n,t,e){const i=new zs(n,t,e);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xv(n,t,e){const i=new Float32Array(ws),s=new U(0,1,0);return new is({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function su(){return new is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ru(){return new is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gl||c===Vl,h=c===Fr||c===zr;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new _h(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new _h(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function _v(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mv(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let v=0,M=_.length;v<M;v+=3){const P=_[v+0],T=_[v+1],A=_[v+2];u.push(P,T,T,A,A,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const P=v+0,T=v+1,A=v+2;u.push(P,T,T,A,A,P)}}else return;const m=new(Dd(u)?kd:Bd)(u,1);m.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function yv(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function l(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(u,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Sv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function wv(n,t,e){const i=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*T*4*f),C=new Nd(A,P,T,f);C.type=di,C.needsUpdate=!0;const b=M*4;for(let L=0;L<f;L++){const H=p[L],I=_[L],O=v[L],W=P*T*4*L;for(let Y=0;Y<H.count;Y++){const tt=Y*b;g===!0&&(s.fromBufferAttribute(H,Y),A[W+tt+0]=s.x,A[W+tt+1]=s.y,A[W+tt+2]=s.z,A[W+tt+3]=0),x===!0&&(s.fromBufferAttribute(I,Y),A[W+tt+4]=s.x,A[W+tt+5]=s.y,A[W+tt+6]=s.z,A[W+tt+7]=0),m===!0&&(s.fromBufferAttribute(O,Y),A[W+tt+8]=s.x,A[W+tt+9]=s.y,A[W+tt+10]=s.z,A[W+tt+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new gt(P,T)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function bv(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class qd extends fn{constructor(t,e,i,s,r,o,a,c,l,h=Tr){if(h!==Tr&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Tr&&(i=Fs),i===void 0&&h===Br&&(i=Or),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=c!==void 0?c:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yd=new fn,ou=new qd(1,1),$d=new Nd,Kd=new hm,Zd=new Vd,au=[],cu=[],lu=new Float32Array(16),hu=new Float32Array(9),fu=new Float32Array(4);function Zr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vc(n,t){let e=cu[t];e===void 0&&(e=new Int32Array(t),cu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ev(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function Av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function Cv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;fu.set(i),n.uniformMatrix2fv(this.addr,!1,fu),Ke(e,i)}}function Pv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),Ke(e,i)}}function Lv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),Ke(e,i)}}function Iv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function Uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function Nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function Fv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function Ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function Bv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function kv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ou.compareFunction=Id,r=ou):r=Yd,e.setTexture2D(t||r,s)}function Hv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Kd,s)}function Gv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zd,s)}function Vv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$d,s)}function Wv(n){switch(n){case 5126:return Ev;case 35664:return Tv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Pv;case 35676:return Lv;case 5124:case 35670:return Iv;case 35667:case 35671:return Dv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return zv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Xv(n,t){n.uniform1fv(this.addr,t)}function qv(n,t){const e=Zr(t,this.size,2);n.uniform2fv(this.addr,e)}function Yv(n,t){const e=Zr(t,this.size,3);n.uniform3fv(this.addr,e)}function $v(n,t){const e=Zr(t,this.size,4);n.uniform4fv(this.addr,e)}function Kv(n,t){const e=Zr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Zv(n,t){const e=Zr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Jv(n,t){const e=Zr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function jv(n,t){n.uniform1iv(this.addr,t)}function Qv(n,t){n.uniform2iv(this.addr,t)}function t_(n,t){n.uniform3iv(this.addr,t)}function e_(n,t){n.uniform4iv(this.addr,t)}function n_(n,t){n.uniform1uiv(this.addr,t)}function i_(n,t){n.uniform2uiv(this.addr,t)}function s_(n,t){n.uniform3uiv(this.addr,t)}function r_(n,t){n.uniform4uiv(this.addr,t)}function o_(n,t,e){const i=this.cache,s=t.length,r=vc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yd,r[o])}function a_(n,t,e){const i=this.cache,s=t.length,r=vc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kd,r[o])}function c_(n,t,e){const i=this.cache,s=t.length,r=vc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zd,r[o])}function l_(n,t,e){const i=this.cache,s=t.length,r=vc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$d,r[o])}function h_(n){switch(n){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return $v;case 35674:return Kv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return jv;case 35667:case 35671:return Qv;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}class f_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Wv(e.type)}}class u_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h_(e.type)}}class d_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function uu(n,t){n.seq.push(t),n.map[t.id]=t}function p_(n,t,e){const i=n.name,s=i.length;for(il.lastIndex=0;;){const r=il.exec(i),o=il.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uu(e,l===void 0?new f_(a,n,t):new u_(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new d_(a),uu(e,f)),e=f}}}class Va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);p_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function du(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const m_=37297;let g_=0;function x_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const pu=new te;function v_(n){ce._getMatrix(pu,ce.workingColorSpace,n);const t=`mat3( ${pu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case xc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function mu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+x_(n.getShaderSource(t),o)}else return s}function __(n,t){const e=v_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M_(n,t){let e;switch(t){case O0:e="Linear";break;case B0:e="Reinhard";break;case k0:e="Cineon";break;case Md:e="ACESFilmic";break;case G0:e="AgX";break;case V0:e="Neutral";break;case H0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ya=new U;function y_(){ce.getLuminanceCoefficients(ya);const n=ya.x.toFixed(4),t=ya.y.toFixed(4),e=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function w_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function b_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function So(n){return n!==""}function gu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(E_,A_)}const T_=new Map;function A_(n,t){let e=ie[t];if(e===void 0){const i=T_.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(R_,C_)}function C_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function P_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===x0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function L_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case zr:t="ENVMAP_TYPE_CUBE";break;case gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function D_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case F0:t="ENVMAP_BLENDING_MIX";break;case z0:t="ENVMAP_BLENDING_ADD";break}return t}function U_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function N_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=P_(e),l=L_(e),h=I_(e),f=D_(e),u=U_(e),d=S_(e),g=w_(r),x=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Qi?M_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,__("linearToOutputTexel",e.outputColorSpace),y_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(So).join(`
`)),o=Mh(o),o=gu(o,e),o=xu(o,e),a=Mh(a),a=gu(a,e),a=xu(a,e),o=vu(o),a=vu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+m+o,M=_+p+a,P=du(s,s.VERTEX_SHADER,v),T=du(s,s.FRAGMENT_SHADER,M);s.attachShader(x,P),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(x).trim(),I=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(T).trim();let W=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,T);else{const tt=mu(s,P,"vertex"),$=mu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+tt+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||O==="")&&(Y=!1);Y&&(L.diagnostics={runnable:W,programLog:H,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(T),C=new Va(s,x),b=b_(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,m_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let F_=0;class z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new O_(t),e.set(t,i)),i}}class O_{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}}function B_(n,t,e,i,s,r,o){const a=new zd,c=new z_,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,H,I){const O=H.fog,W=I.geometry,Y=b.isMeshStandardMaterial?H.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),$=tt&&tt.mapping===gc?tt.image.height:null,ut=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=St!==void 0?St.length:0;let Vt=0;W.morphAttributes.position!==void 0&&(Vt=1),W.morphAttributes.normal!==void 0&&(Vt=2),W.morphAttributes.color!==void 0&&(Vt=3);let Wt,st,at,wt;if(ut){const pe=oi[ut];Wt=pe.vertexShader,st=pe.fragmentShader}else Wt=b.vertexShader,st=b.fragmentShader,c.update(b),at=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);const lt=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Ht=I.isInstancedMesh===!0,J=I.isBatchedMesh===!0,ht=!!b.map,K=!!b.matcap,nt=!!tt,R=!!b.aoMap,_t=!!b.lightMap,ot=!!b.bumpMap,Et=!!b.normalMap,N=!!b.displacementMap,D=!!b.emissiveMap,z=!!b.metalnessMap,w=!!b.roughnessMap,y=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,j=b.iridescence>0,k=b.sheen>0,vt=b.transmission>0,mt=y&&!!b.anisotropyMap,yt=F&&!!b.clearcoatMap,Ft=F&&!!b.clearcoatNormalMap,pt=F&&!!b.clearcoatRoughnessMap,Lt=j&&!!b.iridescenceMap,Xt=j&&!!b.iridescenceThicknessMap,Yt=k&&!!b.sheenColorMap,Ut=k&&!!b.sheenRoughnessMap,se=!!b.specularMap,ne=!!b.specularColorMap,ye=!!b.specularIntensityMap,B=vt&&!!b.transmissionMap,Rt=vt&&!!b.thicknessMap,it=!!b.gradientMap,ft=!!b.alphaMap,It=b.alphaTest>0,Ct=!!b.alphaHash,jt=!!b.extensions;let Fe=Qi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const on={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Wt,fragmentShader:st,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:J,batchingColor:J&&I._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&I.instanceColor!==null,instancingMorph:Ht&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Yr,alphaToCoverage:!!b.alphaToCoverage,map:ht,matcap:K,envMap:nt,envMapMode:nt&&tt.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:_t,bumpMap:ot,normalMap:Et,displacementMap:u&&N,emissiveMap:D,normalMapObjectSpace:Et&&b.normalMapType===Y0,normalMapTangentSpace:Et&&b.normalMapType===Ld,metalnessMap:z,roughnessMap:w,anisotropy:y,anisotropyMap:mt,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:pt,dispersion:X,iridescence:j,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:k,sheenColorMap:Yt,sheenRoughnessMap:Ut,specularMap:se,specularColorMap:ne,specularIntensityMap:ye,transmission:vt,transmissionMap:B,thicknessMap:Rt,gradientMap:it,opaque:b.transparent===!1&&b.blending===Er&&b.alphaToCoverage===!1,alphaMap:ft,alphaTest:It,alphaHash:Ct,combine:b.combine,mapUv:ht&&x(b.map.channel),aoMapUv:R&&x(b.aoMap.channel),lightMapUv:_t&&x(b.lightMap.channel),bumpMapUv:ot&&x(b.bumpMap.channel),normalMapUv:Et&&x(b.normalMap.channel),displacementMapUv:N&&x(b.displacementMap.channel),emissiveMapUv:D&&x(b.emissiveMap.channel),metalnessMapUv:z&&x(b.metalnessMap.channel),roughnessMapUv:w&&x(b.roughnessMap.channel),anisotropyMapUv:mt&&x(b.anisotropyMap.channel),clearcoatMapUv:yt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&x(b.sheenRoughnessMap.channel),specularMapUv:se&&x(b.specularMap.channel),specularColorMapUv:ne&&x(b.specularColorMap.channel),specularIntensityMapUv:ye&&x(b.specularIntensityMap.channel),transmissionMapUv:B&&x(b.transmissionMap.channel),thicknessMapUv:Rt&&x(b.thicknessMap.channel),alphaMapUv:ft&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Et||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(ht||ft),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Dt,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ht&&b.map.isVideoTexture===!0&&ce.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:D&&b.emissiveMap.isVideoTexture===!0&&ce.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:jt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&b.extensions.multiDraw===!0||J)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const S=g[b.type];let L;if(S){const H=oi[S];L=Sm.clone(H.uniforms)}else L=b.uniforms;return L}function P(b,S){let L;for(let H=0,I=h.length;H<I;H++){const O=h[H];if(O.cacheKey===S){L=O,++L.usedTimes;break}}return L===void 0&&(L=new N_(n,S,b,r),h.push(L)),L}function T(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function k_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function H_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,g,x,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,u,d,g,x,m){const p=o(f,u,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,g,x,m){const p=o(f,u,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||H_),i.length>1&&i.sort(u||Mu),s.length>1&&s.sort(u||Mu)}function h(){for(let f=t,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function G_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new yu,n.set(i,[o])):s>=r.length?(o=new yu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function V_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new $t};break;case"SpotLight":e={position:new U,direction:new U,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function W_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let X_=0;function q_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Y_(n){const t=new V_,e=W_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new fe,o=new fe;function a(l){let h=0,f=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,v=0,M=0,P=0,T=0,A=0;l.sort(q_);for(let b=0,S=l.length;b<S;b++){const L=l[b],H=L.color,I=L.intensity,O=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*I,f+=H.g*I,u+=H.b*I;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],I);A++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const tt=L.shadow,$=e.get(L);$.shadowIntensity=tt.intensity,$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=Y,d++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(I),Y.distance=O,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[x]=Y;const tt=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,tt.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[x]=tt.matrix,L.castShadow){const $=e.get(L);$.shadowIntensity=tt.intensity,$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=W,M++}x++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(H).multiplyScalar(I),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const tt=L.shadow,$=e.get(L);$.shadowIntensity=tt.intensity,$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,$.shadowCameraNear=tt.camera.near,$.shadowCameraFar=tt.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(I),Y.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=A,i.version=X_++)}function c(l,h){let f=0,u=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const v=l[p];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Su(n){const t=new Y_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Su(n),t.set(s,[a])):r>=o.length?(a=new Su(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class K_ extends Ws{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=X0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Z_ extends Ws{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q_(n,t,e){let i=new Yh;const s=new gt,r=new gt,o=new Me,a=new K_({depthPacking:q0}),c=new Z_,l={},h=e.maxTextureSize,f={[ns]:je,[je]:ns,[Ce]:Ce},u=new is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:J_,fragmentShader:j_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ji),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const I=p!==Ti&&this.type===Ti,O=p===Ti&&this.type!==Ti;for(let W=0,Y=T.length;W<Y;W++){const tt=T[W],$=tt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ut=$.getFrameExtents();if(s.multiply(ut),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,$.mapSize.y=r.y)),$.map===null||I===!0||O===!0){const Tt=this.type!==Ti?{minFilter:Fn,magFilter:Fn}:{};$.map!==null&&$.map.dispose(),$.map=new zs(s.x,s.y,Tt),$.map.texture.name=tt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const St=$.getViewportCount();for(let Tt=0;Tt<St;Tt++){const Vt=$.getViewport(Tt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),H.viewport(o),$.updateMatrices(tt,Tt),i=$.getFrustum(),M(A,C,$.camera,tt,this.type)}$.isPointLightShadow!==!0&&this.type===Ti&&_($,C),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,L)};function _(T,A){const C=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zs(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,C,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,C,d,x,null)}function v(T,A,C,b){let S=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,I=A.uuid;let O=l[H];O===void 0&&(O={},l[H]=O);let W=O[I];W===void 0&&(W=S.clone(),O[I]=W,A.addEventListener("dispose",P)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Ti?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=C}return S}function M(T,A,C,b,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const I=t.update(T),O=T.material;if(Array.isArray(O)){const W=I.groups;for(let Y=0,tt=W.length;Y<tt;Y++){const $=W[Y],ut=O[$.materialIndex];if(ut&&ut.visible){const St=v(T,ut,b,S);T.onBeforeShadow(n,T,A,C,I,St,$),n.renderBufferDirect(C,null,I,St,T,$),T.onAfterShadow(n,T,A,C,I,St,$)}}}else if(O.visible){const W=v(T,O,b,S);T.onBeforeShadow(n,T,A,C,I,W,null),n.renderBufferDirect(C,null,I,W,T,null),T.onAfterShadow(n,T,A,C,I,W,null)}}const H=T.children;for(let I=0,O=H.length;I<O;I++)M(H[I],A,C,b,S)}function P(T){T.target.removeEventListener("dispose",P);for(const C in l){const b=l[C],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const t1={[Nl]:Fl,[zl]:kl,[Ol]:Hl,[Nr]:Bl,[Fl]:Nl,[kl]:zl,[Hl]:Ol,[Bl]:Nr};function e1(n,t){function e(){let B=!1;const Rt=new Me;let it=null;const ft=new Me(0,0,0,0);return{setMask:function(It){it!==It&&!B&&(n.colorMask(It,It,It,It),it=It)},setLocked:function(It){B=It},setClear:function(It,Ct,jt,Fe,on){on===!0&&(It*=Fe,Ct*=Fe,jt*=Fe),Rt.set(It,Ct,jt,Fe),ft.equals(Rt)===!1&&(n.clearColor(It,Ct,jt,Fe),ft.copy(Rt))},reset:function(){B=!1,it=null,ft.set(-1,0,0,0)}}}function i(){let B=!1,Rt=!1,it=null,ft=null,It=null;return{setReversed:function(Ct){if(Rt!==Ct){const jt=t.get("EXT_clip_control");Rt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Fe=It;It=null,this.setClear(Fe)}Rt=Ct},getReversed:function(){return Rt},setTest:function(Ct){Ct?lt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(Ct){it!==Ct&&!B&&(n.depthMask(Ct),it=Ct)},setFunc:function(Ct){if(Rt&&(Ct=t1[Ct]),ft!==Ct){switch(Ct){case Nl:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Bl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Ct}},setLocked:function(Ct){B=Ct},setClear:function(Ct){It!==Ct&&(Rt&&(Ct=1-Ct),n.clearDepth(Ct),It=Ct)},reset:function(){B=!1,it=null,ft=null,It=null,Rt=!1}}}function s(){let B=!1,Rt=null,it=null,ft=null,It=null,Ct=null,jt=null,Fe=null,on=null;return{setTest:function(pe){B||(pe?lt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(pe){Rt!==pe&&!B&&(n.stencilMask(pe),Rt=pe)},setFunc:function(pe,$n,_i){(it!==pe||ft!==$n||It!==_i)&&(n.stencilFunc(pe,$n,_i),it=pe,ft=$n,It=_i)},setOp:function(pe,$n,_i){(Ct!==pe||jt!==$n||Fe!==_i)&&(n.stencilOp(pe,$n,_i),Ct=pe,jt=$n,Fe=_i)},setLocked:function(pe){B=pe},setClear:function(pe){on!==pe&&(n.clearStencil(pe),on=pe)},reset:function(){B=!1,Rt=null,it=null,ft=null,It=null,Ct=null,jt=null,Fe=null,on=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,v=null,M=null,P=null,T=null,A=new $t(0,0,0),C=0,b=!1,S=null,L=null,H=null,I=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,tt=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=tt>=1):$.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=tt>=2);let ut=null,St={};const Tt=n.getParameter(n.SCISSOR_BOX),Vt=n.getParameter(n.VIEWPORT),Wt=new Me().fromArray(Tt),st=new Me().fromArray(Vt);function at(B,Rt,it,ft){const It=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(B,Ct),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<it;jt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(Rt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Ct}const wt={};wt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Nr),ot(!1),Et(Rf),lt(n.CULL_FACE),R(ji);function lt(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Dt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Ht(B,Rt){return f[B]!==Rt?(n.bindFramebuffer(B,Rt),f[B]=Rt,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Rt),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function J(B,Rt){let it=d,ft=!1;if(B){it=u.get(Rt),it===void 0&&(it=[],u.set(Rt,it));const It=B.textures;if(it.length!==It.length||it[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,jt=It.length;Ct<jt;Ct++)it[Ct]=n.COLOR_ATTACHMENT0+Ct;it.length=It.length,ft=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,ft=!0);ft&&n.drawBuffers(it)}function ht(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const K={[Ss]:n.FUNC_ADD,[_0]:n.FUNC_SUBTRACT,[M0]:n.FUNC_REVERSE_SUBTRACT};K[y0]=n.MIN,K[S0]=n.MAX;const nt={[w0]:n.ZERO,[b0]:n.ONE,[E0]:n.SRC_COLOR,[Dl]:n.SRC_ALPHA,[L0]:n.SRC_ALPHA_SATURATE,[C0]:n.DST_COLOR,[A0]:n.DST_ALPHA,[T0]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[P0]:n.ONE_MINUS_DST_COLOR,[R0]:n.ONE_MINUS_DST_ALPHA,[I0]:n.CONSTANT_COLOR,[D0]:n.ONE_MINUS_CONSTANT_COLOR,[U0]:n.CONSTANT_ALPHA,[N0]:n.ONE_MINUS_CONSTANT_ALPHA};function R(B,Rt,it,ft,It,Ct,jt,Fe,on,pe){if(B===ji){x===!0&&(Dt(n.BLEND),x=!1);return}if(x===!1&&(lt(n.BLEND),x=!0),B!==v0){if(B!==m||pe!==b){if((p!==Ss||M!==Ss)&&(n.blendEquation(n.FUNC_ADD),p=Ss,M=Ss),pe)switch(B){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cf:n.blendFunc(n.ONE,n.ONE);break;case Pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,v=null,P=null,T=null,A.set(0,0,0),C=0,m=B,b=pe}return}It=It||Rt,Ct=Ct||it,jt=jt||ft,(Rt!==p||It!==M)&&(n.blendEquationSeparate(K[Rt],K[It]),p=Rt,M=It),(it!==_||ft!==v||Ct!==P||jt!==T)&&(n.blendFuncSeparate(nt[it],nt[ft],nt[Ct],nt[jt]),_=it,v=ft,P=Ct,T=jt),(Fe.equals(A)===!1||on!==C)&&(n.blendColor(Fe.r,Fe.g,Fe.b,on),A.copy(Fe),C=on),m=B,b=!1}function _t(B,Rt){B.side===Ce?Dt(n.CULL_FACE):lt(n.CULL_FACE);let it=B.side===je;Rt&&(it=!it),ot(it),B.blending===Er&&B.transparent===!1?R(ji):R(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const ft=B.stencilWrite;a.setTest(ft),ft&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),D(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(B){S!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),S=B)}function Et(B){B!==m0?(lt(n.CULL_FACE),B!==L&&(B===Rf?n.cullFace(n.BACK):B===g0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),L=B}function N(B){B!==H&&(Y&&n.lineWidth(B),H=B)}function D(B,Rt,it){B?(lt(n.POLYGON_OFFSET_FILL),(I!==Rt||O!==it)&&(n.polygonOffset(Rt,it),I=Rt,O=it)):Dt(n.POLYGON_OFFSET_FILL)}function z(B){B?lt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+W-1),ut!==B&&(n.activeTexture(B),ut=B)}function y(B,Rt,it){it===void 0&&(ut===null?it=n.TEXTURE0+W-1:it=ut);let ft=St[it];ft===void 0&&(ft={type:void 0,texture:void 0},St[it]=ft),(ft.type!==B||ft.texture!==Rt)&&(ut!==it&&(n.activeTexture(it),ut=it),n.bindTexture(B,Rt||wt[B]),ft.type=B,ft.texture=Rt)}function F(){const B=St[ut];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(B){Wt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Wt.copy(B))}function Ut(B){st.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),st.copy(B))}function se(B,Rt){let it=l.get(Rt);it===void 0&&(it=new WeakMap,l.set(Rt,it));let ft=it.get(B);ft===void 0&&(ft=n.getUniformBlockIndex(Rt,B.name),it.set(B,ft))}function ne(B,Rt){const ft=l.get(Rt).get(B);c.get(Rt)!==ft&&(n.uniformBlockBinding(Rt,ft,B.__bindingPointIndex),c.set(Rt,ft))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ut=null,St={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,v=null,M=null,P=null,T=null,A=new $t(0,0,0),C=0,b=!1,S=null,L=null,H=null,I=null,O=null,Wt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Dt,bindFramebuffer:Ht,drawBuffers:J,useProgram:ht,setBlending:R,setMaterial:_t,setFlipSided:ot,setCullFace:Et,setLineWidth:N,setPolygonOffset:D,setScissorTest:z,activeTexture:w,bindTexture:y,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:j,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:se,uniformBlockBinding:ne,texStorage2D:Ft,texStorage3D:pt,texSubImage2D:k,texSubImage3D:vt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:Yt,viewport:Ut,reset:ye}}function wu(n,t,e,i){const s=n1(i);switch(e){case Ed:return n*t;case Ad:return n*t;case Rd:return n*t*2;case Vh:return n*t/s.components*s.byteLength;case Wh:return n*t/s.components*s.byteLength;case Cd:return n*t*2/s.components*s.byteLength;case Xh:return n*t*2/s.components*s.byteLength;case Td:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case qh:return n*t*4/s.components*s.byteLength;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:case $l:return Math.max(n,16)*Math.max(t,8)/4;case Xl:case Yl:return Math.max(n,8)*Math.max(t,8)/2;case Kl:case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case th:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case eh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ih:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case oh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ah:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ch:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case lh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ga:case uh:case dh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pd:case ph:return Math.ceil(n/4)*Math.ceil(t/4)*8;case mh:case gh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n1(n){switch(n){case Oi:case Sd:return{byteLength:1,components:1};case zo:case wd:case Yo:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Fs:case kh:case di:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function i1(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):Ja("canvas")}function x(w,y,F){let X=1;const j=z(w);if((j.width>F||j.height>F)&&(X=F/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const k=Math.floor(X*j.width),vt=Math.floor(X*j.height);f===void 0&&(f=g(k,vt));const mt=y?g(k,vt):f;return mt.width=k,mt.height=vt,mt.getContext("2d").drawImage(w,0,0,k,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+vt+")."),mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function _(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,y,F,X,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let k=y;if(y===n.RED&&(F===n.FLOAT&&(k=n.R32F),F===n.HALF_FLOAT&&(k=n.R16F),F===n.UNSIGNED_BYTE&&(k=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.R8UI),F===n.UNSIGNED_SHORT&&(k=n.R16UI),F===n.UNSIGNED_INT&&(k=n.R32UI),F===n.BYTE&&(k=n.R8I),F===n.SHORT&&(k=n.R16I),F===n.INT&&(k=n.R32I)),y===n.RG&&(F===n.FLOAT&&(k=n.RG32F),F===n.HALF_FLOAT&&(k=n.RG16F),F===n.UNSIGNED_BYTE&&(k=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RG8UI),F===n.UNSIGNED_SHORT&&(k=n.RG16UI),F===n.UNSIGNED_INT&&(k=n.RG32UI),F===n.BYTE&&(k=n.RG8I),F===n.SHORT&&(k=n.RG16I),F===n.INT&&(k=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGB8UI),F===n.UNSIGNED_SHORT&&(k=n.RGB16UI),F===n.UNSIGNED_INT&&(k=n.RGB32UI),F===n.BYTE&&(k=n.RGB8I),F===n.SHORT&&(k=n.RGB16I),F===n.INT&&(k=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),F===n.UNSIGNED_INT&&(k=n.RGBA32UI),F===n.BYTE&&(k=n.RGBA8I),F===n.SHORT&&(k=n.RGBA16I),F===n.INT&&(k=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),y===n.RGBA){const vt=j?xc:ce.getTransfer(X);F===n.FLOAT&&(k=n.RGBA32F),F===n.HALF_FLOAT&&(k=n.RGBA16F),F===n.UNSIGNED_BYTE&&(k=vt===ve?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function M(w,y){let F;return w?y===null||y===Fs||y===Or?F=n.DEPTH24_STENCIL8:y===di?F=n.DEPTH32F_STENCIL8:y===zo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Fs||y===Or?F=n.DEPTH_COMPONENT24:y===di?F=n.DEPTH_COMPONENT32F:y===zo&&(F=n.DEPTH_COMPONENT16),F}function P(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fn&&w.minFilter!==ui?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),C(y),y.isVideoTexture&&h.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),S(y)}function C(w){const y=i.get(w);if(y.__webglInit===void 0)return;const F=w.source,X=u.get(F);if(X){const j=X[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(w),Object.keys(X).length===0&&u.delete(F)}i.remove(w)}function b(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const F=w.source,X=u.get(F);delete X[y.__cacheKey],o.memory.textures--}function S(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let j=0;j<y.__webglFramebuffer[X].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[X][j]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=w.textures;for(let X=0,j=F.length;X<j;X++){const k=i.get(F[X]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(w)}let L=0;function H(){L=0}function I(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function O(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function W(w,y){const F=i.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(F,w,y);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function Y(w,y){const F=i.get(w);if(w.version>0&&F.__version!==w.version){st(F,w,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function tt(w,y){const F=i.get(w);if(w.version>0&&F.__version!==w.version){st(F,w,y);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function $(w,y){const F=i.get(w);if(w.version>0&&F.__version!==w.version){at(F,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const ut={[zi]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Wl]:n.MIRRORED_REPEAT},St={[Fn]:n.NEAREST,[W0]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[Cc]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},Tt={[$0]:n.NEVER,[tm]:n.ALWAYS,[K0]:n.LESS,[Id]:n.LEQUAL,[Z0]:n.EQUAL,[Q0]:n.GEQUAL,[J0]:n.GREATER,[j0]:n.NOTEQUAL};function Vt(w,y){if(y.type===di&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ui||y.magFilter===Cc||y.magFilter===ea||y.magFilter===Es||y.minFilter===ui||y.minFilter===Cc||y.minFilter===ea||y.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ut[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ut[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ut[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,St[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,St[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Tt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fn||y.minFilter!==ea&&y.minFilter!==Es||y.type===di&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(w,y){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const X=y.source;let j=u.get(X);j===void 0&&(j={},u.set(X,j));const k=O(y);if(k!==w.__cacheKey){j[k]===void 0&&(j[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[k].usedTimes++;const vt=j[w.__cacheKey];vt!==void 0&&(j[w.__cacheKey].usedTimes--,vt.usedTimes===0&&b(y)),w.__cacheKey=k,w.__webglTexture=j[k].texture}return F}function st(w,y,F){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);const j=Wt(w,y),k=y.source;e.bindTexture(X,w.__webglTexture,n.TEXTURE0+F);const vt=i.get(k);if(k.version!==vt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const mt=ce.getPrimaries(ce.workingColorSpace),yt=y.colorSpace===Ki?null:ce.getPrimaries(y.colorSpace),Ft=y.colorSpace===Ki||mt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let pt=x(y.image,!1,s.maxTextureSize);pt=D(y,pt);const Lt=r.convert(y.format,y.colorSpace),Xt=r.convert(y.type);let Yt=v(y.internalFormat,Lt,Xt,y.colorSpace,y.isVideoTexture);Vt(X,y);let Ut;const se=y.mipmaps,ne=y.isVideoTexture!==!0,ye=vt.__version===void 0||j===!0,B=k.dataReady,Rt=P(y,pt);if(y.isDepthTexture)Yt=M(y.format===Br,y.type),ye&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Yt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Lt,Xt,null));else if(y.isDataTexture)if(se.length>0){ne&&ye&&e.texStorage2D(n.TEXTURE_2D,Rt,Yt,se[0].width,se[0].height);for(let it=0,ft=se.length;it<ft;it++)Ut=se[it],ne?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Ut.width,Ut.height,Lt,Xt,Ut.data):e.texImage2D(n.TEXTURE_2D,it,Yt,Ut.width,Ut.height,0,Lt,Xt,Ut.data);y.generateMipmaps=!1}else ne?(ye&&e.texStorage2D(n.TEXTURE_2D,Rt,Yt,pt.width,pt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Lt,Xt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Lt,Xt,pt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Yt,se[0].width,se[0].height,pt.depth);for(let it=0,ft=se.length;it<ft;it++)if(Ut=se[it],y.format!==ti)if(Lt!==null)if(ne){if(B)if(y.layerUpdates.size>0){const It=wu(Ut.width,Ut.height,y.format,y.type);for(const Ct of y.layerUpdates){const jt=Ut.data.subarray(Ct*It/Ut.data.BYTES_PER_ELEMENT,(Ct+1)*It/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,Ct,Ut.width,Ut.height,1,Lt,jt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Ut.width,Ut.height,pt.depth,Lt,Ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Yt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Ut.width,Ut.height,pt.depth,Lt,Xt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Yt,Ut.width,Ut.height,pt.depth,0,Lt,Xt,Ut.data)}else{ne&&ye&&e.texStorage2D(n.TEXTURE_2D,Rt,Yt,se[0].width,se[0].height);for(let it=0,ft=se.length;it<ft;it++)Ut=se[it],y.format!==ti?Lt!==null?ne?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,Ut.width,Ut.height,Lt,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Ut.width,Ut.height,Lt,Xt,Ut.data):e.texImage2D(n.TEXTURE_2D,it,Yt,Ut.width,Ut.height,0,Lt,Xt,Ut.data)}else if(y.isDataArrayTexture)if(ne){if(ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Yt,pt.width,pt.height,pt.depth),B)if(y.layerUpdates.size>0){const it=wu(pt.width,pt.height,y.format,y.type);for(const ft of y.layerUpdates){const It=pt.data.subarray(ft*it/pt.data.BYTES_PER_ELEMENT,(ft+1)*it/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,pt.width,pt.height,1,Lt,Xt,It)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(y.isData3DTexture)ne?(ye&&e.texStorage3D(n.TEXTURE_3D,Rt,Yt,pt.width,pt.height,pt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(y.isFramebufferTexture){if(ye)if(ne)e.texStorage2D(n.TEXTURE_2D,Rt,Yt,pt.width,pt.height);else{let it=pt.width,ft=pt.height;for(let It=0;It<Rt;It++)e.texImage2D(n.TEXTURE_2D,It,Yt,it,ft,0,Lt,Xt,null),it>>=1,ft>>=1}}else if(se.length>0){if(ne&&ye){const it=z(se[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Yt,it.width,it.height)}for(let it=0,ft=se.length;it<ft;it++)Ut=se[it],ne?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Lt,Xt,Ut):e.texImage2D(n.TEXTURE_2D,it,Yt,Lt,Xt,Ut);y.generateMipmaps=!1}else if(ne){if(ye){const it=z(pt);e.texStorage2D(n.TEXTURE_2D,Rt,Yt,it.width,it.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Lt,Xt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Lt,Xt,pt);m(y)&&p(X),vt.__version=k.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function at(w,y,F){if(y.image.length!==6)return;const X=Wt(w,y),j=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const k=i.get(j);if(j.version!==k.__version||X===!0){e.activeTexture(n.TEXTURE0+F);const vt=ce.getPrimaries(ce.workingColorSpace),mt=y.colorSpace===Ki?null:ce.getPrimaries(y.colorSpace),yt=y.colorSpace===Ki||vt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Ft=y.isCompressedTexture||y.image[0].isCompressedTexture,pt=y.image[0]&&y.image[0].isDataTexture,Lt=[];for(let ft=0;ft<6;ft++)!Ft&&!pt?Lt[ft]=x(y.image[ft],!0,s.maxCubemapSize):Lt[ft]=pt?y.image[ft].image:y.image[ft],Lt[ft]=D(y,Lt[ft]);const Xt=Lt[0],Yt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),se=v(y.internalFormat,Yt,Ut,y.colorSpace),ne=y.isVideoTexture!==!0,ye=k.__version===void 0||X===!0,B=j.dataReady;let Rt=P(y,Xt);Vt(n.TEXTURE_CUBE_MAP,y);let it;if(Ft){ne&&ye&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,se,Xt.width,Xt.height);for(let ft=0;ft<6;ft++){it=Lt[ft].mipmaps;for(let It=0;It<it.length;It++){const Ct=it[It];y.format!==ti?Yt!==null?ne?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,0,0,Ct.width,Ct.height,Yt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,se,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,0,0,Ct.width,Ct.height,Yt,Ut,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,se,Ct.width,Ct.height,0,Yt,Ut,Ct.data)}}}else{if(it=y.mipmaps,ne&&ye){it.length>0&&Rt++;const ft=z(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,se,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(pt){ne?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Lt[ft].width,Lt[ft].height,Yt,Ut,Lt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,se,Lt[ft].width,Lt[ft].height,0,Yt,Ut,Lt[ft].data);for(let It=0;It<it.length;It++){const jt=it[It].image[ft].image;ne?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,0,0,jt.width,jt.height,Yt,Ut,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,se,jt.width,jt.height,0,Yt,Ut,jt.data)}}else{ne?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Yt,Ut,Lt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,se,Yt,Ut,Lt[ft]);for(let It=0;It<it.length;It++){const Ct=it[It];ne?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,0,0,Yt,Ut,Ct.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,se,Yt,Ut,Ct.image[ft])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),k.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function wt(w,y,F,X,j,k){const vt=r.convert(F.format,F.colorSpace),mt=r.convert(F.type),yt=v(F.internalFormat,vt,mt,F.colorSpace),Ft=i.get(y),pt=i.get(F);if(pt.__renderTarget=y,!Ft.__hasExternalTextures){const Lt=Math.max(1,y.width>>k),Xt=Math.max(1,y.height>>k);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,k,yt,Lt,Xt,y.depth,0,vt,mt,null):e.texImage2D(j,k,yt,Lt,Xt,0,vt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Et(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,pt.__webglTexture,0,ot(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,j,pt.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(w,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const X=y.depthTexture,j=X&&X.isDepthTexture?X.type:null,k=M(y.stencilBuffer,j),vt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=ot(y);Et(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,k,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,k,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,k,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,w)}else{const X=y.textures;for(let j=0;j<X.length;j++){const k=X[j],vt=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),yt=v(k.internalFormat,vt,mt,k.colorSpace),Ft=ot(y);F&&Et(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,yt,y.width,y.height):Et(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,yt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,yt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const j=X.__webglTexture,k=ot(y);if(y.depthTexture.format===Tr)Et(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===Br)Et(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ht(w){const y=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=X}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(y.__webglFramebuffer,w)}else if(F){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=n.createRenderbuffer(),lt(y.__webglDepthbuffer[X],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=y.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),lt(y.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(w,y,F){const X=i.get(w);y!==void 0&&wt(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ht(w)}function ht(w){const y=w.texture,F=i.get(w),X=i.get(y);w.addEventListener("dispose",A);const j=w.textures,k=w.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,o.memory.textures++),k){F.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[mt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)F.__webglFramebuffer[mt][yt]=n.createFramebuffer()}else F.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)F.__webglFramebuffer[mt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(vt)for(let mt=0,yt=j.length;mt<yt;mt++){const Ft=i.get(j[mt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Et(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let mt=0;mt<j.length;mt++){const yt=j[mt];F.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[mt]);const Ft=r.convert(yt.format,yt.colorSpace),pt=r.convert(yt.type),Lt=v(yt.internalFormat,Ft,pt,yt.colorSpace,w.isXRRenderTarget===!0),Xt=ot(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Lt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,F.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,y);for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)wt(F.__webglFramebuffer[mt][yt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else wt(F.__webglFramebuffer[mt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let mt=0,yt=j.length;mt<yt;mt++){const Ft=j[mt],pt=i.get(Ft);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),Vt(n.TEXTURE_2D,Ft),wt(F.__webglFramebuffer,w,Ft,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(Ft)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(mt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,X.__webglTexture),Vt(mt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)wt(F.__webglFramebuffer[yt],w,y,n.COLOR_ATTACHMENT0,mt,yt);else wt(F.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,mt,0);m(y)&&p(mt),e.unbindTexture()}w.depthBuffer&&Ht(w)}function K(w){const y=w.textures;for(let F=0,X=y.length;F<X;F++){const j=y[F];if(m(j)){const k=_(w),vt=i.get(j).__webglTexture;e.bindTexture(k,vt),p(k),e.unbindTexture()}}}const nt=[],R=[];function _t(w){if(w.samples>0){if(Et(w)===!1){const y=w.textures,F=w.width,X=w.height;let j=n.COLOR_BUFFER_BIT;const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(w),mt=y.length>1;if(mt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);const Ft=i.get(y[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,j,n.NEAREST),c===!0&&(nt.length=0,R.length=0,nt.push(n.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(nt.push(k),R.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);const Ft=i.get(y[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ot(w){return Math.min(s.maxSamples,w.samples)}function Et(w){const y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function D(w,y){const F=w.colorSpace,X=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Yr&&F!==Ki&&(ce.getTransfer(F)===ve?(X!==ti||j!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=$,this.rebindTextures=J,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Et}function s1(n,t){function e(i,s=Ki){let r;const o=ce.getTransfer(s);if(i===Oi)return n.UNSIGNED_BYTE;if(i===Hh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sd)return n.BYTE;if(i===wd)return n.SHORT;if(i===zo)return n.UNSIGNED_SHORT;if(i===kh)return n.INT;if(i===Fs)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Yo)return n.HALF_FLOAT;if(i===Ed)return n.ALPHA;if(i===Td)return n.RGB;if(i===ti)return n.RGBA;if(i===Ad)return n.LUMINANCE;if(i===Rd)return n.LUMINANCE_ALPHA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Br)return n.DEPTH_STENCIL;if(i===Vh)return n.RED;if(i===Wh)return n.RED_INTEGER;if(i===Cd)return n.RG;if(i===Xh)return n.RG_INTEGER;if(i===qh)return n.RGBA_INTEGER;if(i===Oa||i===Ba||i===ka||i===Ha)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===ql||i===Yl||i===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Zl)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===Ql||i===th||i===eh||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===ch||i===lh||i===hh||i===fh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ql)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===th)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===uh||i===dh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ga)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pd||i===ph||i===mh||i===gh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class r1 extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o1={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new is({vertexShader:a1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new Te(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h1 extends $r{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const x=new l1,m=e.getContextAttributes();let p=null,_=null;const v=[],M=[],P=new gt;let T=null;const A=new Tn;A.viewport=new Me;const C=new Tn;C.viewport=new Me;const b=[A,C],S=new r1;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let at=v[st];return at===void 0&&(at=new sl,v[st]=at),at.getTargetRaySpace()},this.getControllerGrip=function(st){let at=v[st];return at===void 0&&(at=new sl,v[st]=at),at.getGripSpace()},this.getHand=function(st){let at=v[st];return at===void 0&&(at=new sl,v[st]=at),at.getHandSpace()};function I(st){const at=M.indexOf(st.inputSource);if(at===-1)return;const wt=v[at];wt!==void 0&&(wt.update(st.inputSource,st.frame,l||o),wt.dispatchEvent({type:st.type,data:st.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let st=0;st<v.length;st++){const at=M[st];at!==null&&(M[st]=null,v[st].disconnect(at))}L=null,H=null,x.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,_=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new zs(d.framebufferWidth,d.framebufferHeight,{format:ti,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,wt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Br:Tr,wt=m.stencil?Or:Fs);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new zs(u.textureWidth,u.textureHeight,{format:ti,type:Oi,depthTexture:new qd(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(st){for(let at=0;at<st.removed.length;at++){const wt=st.removed[at],lt=M.indexOf(wt);lt>=0&&(M[lt]=null,v[lt].disconnect(wt))}for(let at=0;at<st.added.length;at++){const wt=st.added[at];let lt=M.indexOf(wt);if(lt===-1){for(let Ht=0;Ht<v.length;Ht++)if(Ht>=M.length){M.push(wt),lt=Ht;break}else if(M[Ht]===null){M[Ht]=wt,lt=Ht;break}if(lt===-1)break}const Dt=v[lt];Dt&&Dt.connect(wt)}}const Y=new U,tt=new U;function $(st,at,wt){Y.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(wt.matrixWorld);const lt=Y.distanceTo(tt),Dt=at.projectionMatrix.elements,Ht=wt.projectionMatrix.elements,J=Dt[14]/(Dt[10]-1),ht=Dt[14]/(Dt[10]+1),K=(Dt[9]+1)/Dt[5],nt=(Dt[9]-1)/Dt[5],R=(Dt[8]-1)/Dt[0],_t=(Ht[8]+1)/Ht[0],ot=J*R,Et=J*_t,N=lt/(-R+_t),D=N*-R;if(at.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(D),st.translateZ(N),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Dt[10]===-1)st.projectionMatrix.copy(at.projectionMatrix),st.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const z=J+N,w=ht+N,y=ot-D,F=Et+(lt-D),X=K*ht/w*z,j=nt*ht/w*z;st.projectionMatrix.makePerspective(y,F,X,j,z,w),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function ut(st,at){at===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(at.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let at=st.near,wt=st.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),S.near=C.near=A.near=at,S.far=C.far=A.far=wt,(L!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),A.layers.mask=st.layers.mask|2,C.layers.mask=st.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;const lt=st.parent,Dt=S.cameras;ut(S,lt);for(let Ht=0;Ht<Dt.length;Ht++)ut(Dt[Ht],lt);Dt.length===2?$(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),St(st,S,lt)};function St(st,at,wt){wt===null?st.matrix.copy(at.matrixWorld):(st.matrix.copy(wt.matrixWorld),st.matrix.invert(),st.matrix.multiply(at.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(at.projectionMatrix),st.projectionMatrixInverse.copy(at.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=vh*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(st){c=st,u!==null&&(u.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Tt=null;function Vt(st,at){if(h=at.getViewerPose(l||o),g=at,h!==null){const wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let lt=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Ht=0;Ht<wt.length;Ht++){const J=wt[Ht];let ht=null;if(d!==null)ht=d.getViewport(J);else{const nt=f.getViewSubImage(u,J);ht=nt.viewport,Ht===0&&(t.setRenderTargetTextures(_,nt.colorTexture,u.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(_))}let K=b[Ht];K===void 0&&(K=new Tn,K.layers.enable(Ht),K.viewport=new Me,b[Ht]=K),K.matrix.fromArray(J.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(J.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ht.x,ht.y,ht.width,ht.height),Ht===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(K)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ht=f.getDepthInformation(wt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let wt=0;wt<v.length;wt++){const lt=M[wt],Dt=v[wt];lt!==null&&Dt!==void 0&&Dt.update(lt,at,l||o)}Tt&&Tt(st,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const Wt=new Wd;Wt.setAnimationLoop(Vt),this.setAnimationLoop=function(st){Tt=st},this.dispose=function(){}}}const ms=new mi,f1=new fe;function u1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,ms.copy(M),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function d1(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function l(_,v){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(_,P);const T=t.render.frame;r[_.id]!==T&&(u(_),r[_.id]=T)}function h(_){const v=f();_.__bindingPointIndex=v;const M=n.createBuffer(),P=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=s[_.id],M=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){const C=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,S=C.length;b<S;b++){const L=C[b];if(d(L,T,b,P)===!0){const H=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let W=0;W<I.length;W++){const Y=I[W],tt=x(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,H+O,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,O),O+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,v,M,P){const T=_.value,A=v+"_"+M;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const C=P[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(_){const v=_.uniforms;let M=0;const P=16;for(let A=0,C=v.length;A<C;A++){const b=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,L=b.length;S<L;S++){const H=b[S],I=Array.isArray(H.value)?H.value:[H.value];for(let O=0,W=I.length;O<W;O++){const Y=I[O],tt=x(Y),$=M%P,ut=$%tt.boundary,St=$+ut;M+=ut,St!==0&&P-St<tt.storage&&(M+=P-St),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=tt.storage}}}const T=M%P;return T>0&&(M+=P-T),_.__size=M,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class p1{constructor(t={}){const{canvas:e=nm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Qi,this.toneMappingExposure=1;const M=this;let P=!1,T=0,A=0,C=null,b=-1,S=null;const L=new Me,H=new Me;let I=null;const O=new $t(0);let W=0,Y=e.width,tt=e.height,$=1,ut=null,St=null;const Tt=new Me(0,0,Y,tt),Vt=new Me(0,0,Y,tt);let Wt=!1;const st=new Yh;let at=!1,wt=!1;const lt=new fe,Dt=new fe,Ht=new U,J=new Me,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function nt(){return C===null?$:1}let R=i;function _t(E,G){return e.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oh}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),R===null){const G="webgl2";if(R=_t(G,E),R===null)throw _t(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ot,Et,N,D,z,w,y,F,X,j,k,vt,mt,yt,Ft,pt,Lt,Xt,Yt,Ut,se,ne,ye,B;function Rt(){ot=new _v(R),ot.init(),ne=new s1(R,ot),Et=new dv(R,ot,t,ne),N=new e1(R,ot),Et.reverseDepthBuffer&&u&&N.buffers.depth.setReversed(!0),D=new Sv(R),z=new k_,w=new i1(R,ot,N,z,Et,ne,D),y=new mv(M),F=new vv(M),X=new Cm(R),ye=new fv(R,X),j=new Mv(R,X,D,ye),k=new bv(R,j,X,D),Yt=new wv(R,Et,w),pt=new pv(z),vt=new B_(M,y,F,ot,Et,ye,pt),mt=new u1(M,z),yt=new G_,Ft=new $_(ot),Xt=new hv(M,y,F,N,k,d,c),Lt=new Q_(M,k,Et),B=new d1(R,D,Et,N),Ut=new uv(R,ot,D),se=new yv(R,ot,D),D.programs=vt.programs,M.capabilities=Et,M.extensions=ot,M.properties=z,M.renderLists=yt,M.shadowMap=Lt,M.state=N,M.info=D}Rt();const it=new h1(M,R);this.xr=it,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Y,tt,!1))},this.getSize=function(E){return E.set(Y,tt)},this.setSize=function(E,G,Q=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,tt=G,e.width=Math.floor(E*$),e.height=Math.floor(G*$),Q===!0&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Y*$,tt*$).floor()},this.setDrawingBufferSize=function(E,G,Q){Y=E,tt=G,$=Q,e.width=Math.floor(E*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,G,Q,et){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,G,Q,et),N.viewport(L.copy(Tt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,G,Q,et){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,G,Q,et),N.scissor(H.copy(Vt).multiplyScalar($).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){N.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){St=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(E=!0,G=!0,Q=!0){let et=0;if(E){let V=!1;if(C!==null){const bt=C.texture.format;V=bt===qh||bt===Xh||bt===Wh}if(V){const bt=C.texture.type,Pt=bt===Oi||bt===Fs||bt===zo||bt===Or||bt===Hh||bt===Gh,zt=Xt.getClearColor(),Ot=Xt.getClearAlpha(),Kt=zt.r,Qt=zt.g,Bt=zt.b;Pt?(g[0]=Kt,g[1]=Qt,g[2]=Bt,g[3]=Ot,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Kt,x[1]=Qt,x[2]=Bt,x[3]=Ot,R.clearBufferiv(R.COLOR,0,x))}else et|=R.COLOR_BUFFER_BIT}G&&(et|=R.DEPTH_BUFFER_BIT),Q&&(et|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),yt.dispose(),Ft.dispose(),z.dispose(),y.dispose(),F.dispose(),k.dispose(),ye.dispose(),B.dispose(),vt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Mf),it.removeEventListener("sessionend",yf),ls.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=D.autoReset,G=Lt.enabled,Q=Lt.autoUpdate,et=Lt.needsUpdate,V=Lt.type;Rt(),D.autoReset=E,Lt.enabled=G,Lt.autoUpdate=Q,Lt.needsUpdate=et,Lt.type=V}function Ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){const G=E.target;G.removeEventListener("dispose",jt),Fe(G)}function Fe(E){on(E),z.remove(E)}function on(E){const G=z.get(E).programs;G!==void 0&&(G.forEach(function(Q){vt.releaseProgram(Q)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Q,et,V,bt){G===null&&(G=ht);const Pt=V.isMesh&&V.matrixWorld.determinant()<0,zt=u0(E,G,Q,et,V);N.setMaterial(et,Pt);let Ot=Q.index,Kt=1;if(et.wireframe===!0){if(Ot=j.getWireframeAttribute(Q),Ot===void 0)return;Kt=2}const Qt=Q.drawRange,Bt=Q.attributes.position;let le=Qt.start*Kt,Se=(Qt.start+Qt.count)*Kt;bt!==null&&(le=Math.max(le,bt.start*Kt),Se=Math.min(Se,(bt.start+bt.count)*Kt)),Ot!==null?(le=Math.max(le,0),Se=Math.min(Se,Ot.count)):Bt!=null&&(le=Math.max(le,0),Se=Math.min(Se,Bt.count));const be=Se-le;if(be<0||be===1/0)return;ye.setup(V,et,zt,Q,Ot);let Sn,ue=Ut;if(Ot!==null&&(Sn=X.get(Ot),ue=se,ue.setIndex(Sn)),V.isMesh)et.wireframe===!0?(N.setLineWidth(et.wireframeLinewidth*nt()),ue.setMode(R.LINES)):ue.setMode(R.TRIANGLES);else if(V.isLine){let Gt=et.linewidth;Gt===void 0&&(Gt=1),N.setLineWidth(Gt*nt()),V.isLineSegments?ue.setMode(R.LINES):V.isLineLoop?ue.setMode(R.LINE_LOOP):ue.setMode(R.LINE_STRIP)}else V.isPoints?ue.setMode(R.POINTS):V.isSprite&&ue.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ue.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Gt=V._multiDrawStarts,Mi=V._multiDrawCounts,de=V._multiDrawCount,Kn=Ot?X.get(Ot).bytesPerElement:1,Ks=z.get(et).currentProgram.getUniforms();for(let Rn=0;Rn<de;Rn++)Ks.setValue(R,"_gl_DrawID",Rn),ue.render(Gt[Rn]/Kn,Mi[Rn])}else if(V.isInstancedMesh)ue.renderInstances(le,be,V.count);else if(Q.isInstancedBufferGeometry){const Gt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Mi=Math.min(Q.instanceCount,Gt);ue.renderInstances(le,be,Mi)}else ue.render(le,be)};function pe(E,G,Q){E.transparent===!0&&E.side===Ce&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,ta(E,G,Q),E.side=ns,E.needsUpdate=!0,ta(E,G,Q),E.side=Ce):ta(E,G,Q)}this.compile=function(E,G,Q=null){Q===null&&(Q=E),p=Ft.get(Q),p.init(G),v.push(p),Q.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==Q&&E.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const et=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const bt=V.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const zt=bt[Pt];pe(zt,Q,V),et.add(zt)}else pe(bt,Q,V),et.add(bt)}),v.pop(),p=null,et},this.compileAsync=function(E,G,Q=null){const et=this.compile(E,G,Q);return new Promise(V=>{function bt(){if(et.forEach(function(Pt){z.get(Pt).currentProgram.isReady()&&et.delete(Pt)}),et.size===0){V(E);return}setTimeout(bt,10)}ot.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let $n=null;function _i(E){$n&&$n(E)}function Mf(){ls.stop()}function yf(){ls.start()}const ls=new Wd;ls.setAnimationLoop(_i),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(E){$n=E,it.setAnimationLoop(E),E===null?ls.stop():ls.start()},it.addEventListener("sessionstart",Mf),it.addEventListener("sessionend",yf),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,G,C),p=Ft.get(E,v.length),p.init(G),v.push(p),Dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),st.setFromProjectionMatrix(Dt),wt=this.localClippingEnabled,at=pt.init(this.clippingPlanes,wt),m=yt.get(E,_.length),m.init(),_.push(m),it.enabled===!0&&it.isPresenting===!0){const bt=M.xr.getDepthSensingMesh();bt!==null&&Rc(bt,G,-1/0,M.sortObjects)}Rc(E,G,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ut,St),K=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,K&&Xt.addToRenderList(m,E),this.info.render.frame++,at===!0&&pt.beginShadows();const Q=p.state.shadowsArray;Lt.render(Q,E,G),at===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,V=m.transmissive;if(p.setupLights(),G.isArrayCamera){const bt=G.cameras;if(V.length>0)for(let Pt=0,zt=bt.length;Pt<zt;Pt++){const Ot=bt[Pt];wf(et,V,E,Ot)}K&&Xt.render(E);for(let Pt=0,zt=bt.length;Pt<zt;Pt++){const Ot=bt[Pt];Sf(m,E,Ot,Ot.viewport)}}else V.length>0&&wf(et,V,E,G),K&&Xt.render(E),Sf(m,E,G);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(M,E,G),ye.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],at===!0&&pt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Rc(E,G,Q,et){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||st.intersectsSprite(E)){et&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);const Pt=k.update(E),zt=E.material;zt.visible&&m.push(E,Pt,zt,Q,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||st.intersectsObject(E))){const Pt=k.update(E),zt=E.material;if(et&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),J.copy(Pt.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(zt)){const Ot=Pt.groups;for(let Kt=0,Qt=Ot.length;Kt<Qt;Kt++){const Bt=Ot[Kt],le=zt[Bt.materialIndex];le&&le.visible&&m.push(E,Pt,le,Q,J.z,Bt)}}else zt.visible&&m.push(E,Pt,zt,Q,J.z,null)}}const bt=E.children;for(let Pt=0,zt=bt.length;Pt<zt;Pt++)Rc(bt[Pt],G,Q,et)}function Sf(E,G,Q,et){const V=E.opaque,bt=E.transmissive,Pt=E.transparent;p.setupLightsView(Q),at===!0&&pt.setGlobalState(M.clippingPlanes,Q),et&&N.viewport(L.copy(et)),V.length>0&&Qo(V,G,Q),bt.length>0&&Qo(bt,G,Q),Pt.length>0&&Qo(Pt,G,Q),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function wf(E,G,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new zs(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Yo:Oi,minFilter:Es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const bt=p.state.transmissionRenderTarget[et.id],Pt=et.viewport||L;bt.setSize(Pt.z,Pt.w);const zt=M.getRenderTarget();M.setRenderTarget(bt),M.getClearColor(O),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),K&&Xt.render(Q);const Ot=M.toneMapping;M.toneMapping=Qi;const Kt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),at===!0&&pt.setGlobalState(M.clippingPlanes,et),Qo(E,Q,et),w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Bt=0,le=G.length;Bt<le;Bt++){const Se=G[Bt],be=Se.object,Sn=Se.geometry,ue=Se.material,Gt=Se.group;if(ue.side===Ce&&be.layers.test(et.layers)){const Mi=ue.side;ue.side=je,ue.needsUpdate=!0,bf(be,Q,et,Sn,ue,Gt),ue.side=Mi,ue.needsUpdate=!0,Qt=!0}}Qt===!0&&(w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt))}M.setRenderTarget(zt),M.setClearColor(O,W),Kt!==void 0&&(et.viewport=Kt),M.toneMapping=Ot}function Qo(E,G,Q){const et=G.isScene===!0?G.overrideMaterial:null;for(let V=0,bt=E.length;V<bt;V++){const Pt=E[V],zt=Pt.object,Ot=Pt.geometry,Kt=et===null?Pt.material:et,Qt=Pt.group;zt.layers.test(Q.layers)&&bf(zt,G,Q,Ot,Kt,Qt)}}function bf(E,G,Q,et,V,bt){E.onBeforeRender(M,G,Q,et,V,bt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(M,G,Q,et,E,bt),V.transparent===!0&&V.side===Ce&&V.forceSinglePass===!1?(V.side=je,V.needsUpdate=!0,M.renderBufferDirect(Q,G,et,V,E,bt),V.side=ns,V.needsUpdate=!0,M.renderBufferDirect(Q,G,et,V,E,bt),V.side=Ce):M.renderBufferDirect(Q,G,et,V,E,bt),E.onAfterRender(M,G,Q,et,V,bt)}function ta(E,G,Q){G.isScene!==!0&&(G=ht);const et=z.get(E),V=p.state.lights,bt=p.state.shadowsArray,Pt=V.state.version,zt=vt.getParameters(E,V.state,bt,G,Q),Ot=vt.getProgramCacheKey(zt);let Kt=et.programs;et.environment=E.isMeshStandardMaterial?G.environment:null,et.fog=G.fog,et.envMap=(E.isMeshStandardMaterial?F:y).get(E.envMap||et.environment),et.envMapRotation=et.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Kt===void 0&&(E.addEventListener("dispose",jt),Kt=new Map,et.programs=Kt);let Qt=Kt.get(Ot);if(Qt!==void 0){if(et.currentProgram===Qt&&et.lightsStateVersion===Pt)return Tf(E,zt),Qt}else zt.uniforms=vt.getUniforms(E),E.onBeforeCompile(zt,M),Qt=vt.acquireProgram(zt,Ot),Kt.set(Ot,Qt),et.uniforms=zt.uniforms;const Bt=et.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=pt.uniform),Tf(E,zt),et.needsLights=p0(E),et.lightsStateVersion=Pt,et.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.directionalShadowMap.value=V.state.directionalShadowMap,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotShadowMap.value=V.state.spotShadowMap,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMap.value=V.state.pointShadowMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),et.currentProgram=Qt,et.uniformsList=null,Qt}function Ef(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Va.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Tf(E,G){const Q=z.get(E);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function u0(E,G,Q,et,V){G.isScene!==!0&&(G=ht),w.resetTextureUnits();const bt=G.fog,Pt=et.isMeshStandardMaterial?G.environment:null,zt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yr,Ot=(et.isMeshStandardMaterial?F:y).get(et.envMap||Pt),Kt=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qt=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Bt=!!Q.morphAttributes.position,le=!!Q.morphAttributes.normal,Se=!!Q.morphAttributes.color;let be=Qi;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=M.toneMapping);const Sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ue=Sn!==void 0?Sn.length:0,Gt=z.get(et),Mi=p.state.lights;if(at===!0&&(wt===!0||E!==S)){const Bn=E===S&&et.id===b;pt.setState(et,E,Bn)}let de=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Mi.state.version||Gt.outputColorSpace!==zt||V.isBatchedMesh&&Gt.batching===!1||!V.isBatchedMesh&&Gt.batching===!0||V.isBatchedMesh&&Gt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Gt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Gt.instancing===!1||!V.isInstancedMesh&&Gt.instancing===!0||V.isSkinnedMesh&&Gt.skinning===!1||!V.isSkinnedMesh&&Gt.skinning===!0||V.isInstancedMesh&&Gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Gt.instancingMorph===!1&&V.morphTexture!==null||Gt.envMap!==Ot||et.fog===!0&&Gt.fog!==bt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==pt.numPlanes||Gt.numIntersection!==pt.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Qt||Gt.morphTargets!==Bt||Gt.morphNormals!==le||Gt.morphColors!==Se||Gt.toneMapping!==be||Gt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Gt.__version=et.version);let Kn=Gt.currentProgram;de===!0&&(Kn=ta(et,G,V));let Ks=!1,Rn=!1,to=!1;const Ee=Kn.getUniforms(),ni=Gt.uniforms;if(N.useProgram(Kn.program)&&(Ks=!0,Rn=!0,to=!0),et.id!==b&&(b=et.id,Rn=!0),Ks||S!==E){N.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),sm(lt),rm(lt),Ee.setValue(R,"projectionMatrix",lt)):Ee.setValue(R,"projectionMatrix",E.projectionMatrix),Ee.setValue(R,"viewMatrix",E.matrixWorldInverse);const ki=Ee.map.cameraPosition;ki!==void 0&&ki.setValue(R,Ht.setFromMatrixPosition(E.matrixWorld)),Et.logarithmicDepthBuffer&&Ee.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ee.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Rn=!0,to=!0)}if(V.isSkinnedMesh){Ee.setOptional(R,V,"bindMatrix"),Ee.setOptional(R,V,"bindMatrixInverse");const Bn=V.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ee.setValue(R,"boneTexture",Bn.boneTexture,w))}V.isBatchedMesh&&(Ee.setOptional(R,V,"batchingTexture"),Ee.setValue(R,"batchingTexture",V._matricesTexture,w),Ee.setOptional(R,V,"batchingIdTexture"),Ee.setValue(R,"batchingIdTexture",V._indirectTexture,w),Ee.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(R,"batchingColorTexture",V._colorsTexture,w));const eo=Q.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&Yt.update(V,Q,Kn),(Rn||Gt.receiveShadow!==V.receiveShadow)&&(Gt.receiveShadow=V.receiveShadow,Ee.setValue(R,"receiveShadow",V.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(ni.envMap.value=Ot,ni.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&G.environment!==null&&(ni.envMapIntensity.value=G.environmentIntensity),Rn&&(Ee.setValue(R,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&d0(ni,to),bt&&et.fog===!0&&mt.refreshFogUniforms(ni,bt),mt.refreshMaterialUniforms(ni,et,$,tt,p.state.transmissionRenderTarget[E.id]),Va.upload(R,Ef(Gt),ni,w)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Va.upload(R,Ef(Gt),ni,w),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ee.setValue(R,"center",V.center),Ee.setValue(R,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(R,"normalMatrix",V.normalMatrix),Ee.setValue(R,"modelMatrix",V.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Bn=et.uniformsGroups;for(let ki=0,Hi=Bn.length;ki<Hi;ki++){const Af=Bn[ki];B.update(Af,Kn),B.bind(Af,Kn)}}return Kn}function d0(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function p0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,G,Q){z.get(E.texture).__webglTexture=G,z.get(E.depthTexture).__webglTexture=Q;const et=z.get(E);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,G){const Q=z.get(E);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Q=0){C=E,T=G,A=Q;let et=!0,V=null,bt=!1,Pt=!1;if(E){const Ot=z.get(E);if(Ot.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(R.FRAMEBUFFER,null),et=!1;else if(Ot.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Ot.__hasExternalTextures)w.rebindTextures(E,z.get(E.texture).__webglTexture,z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Bt=E.depthTexture;if(Ot.__boundDepthTexture!==Bt){if(Bt!==null&&z.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Kt=E.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Pt=!0);const Qt=z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qt[G])?V=Qt[G][Q]:V=Qt[G],bt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?V=z.get(E).__webglMultisampledFramebuffer:Array.isArray(Qt)?V=Qt[Q]:V=Qt,L.copy(E.viewport),H.copy(E.scissor),I=E.scissorTest}else L.copy(Tt).multiplyScalar($).floor(),H.copy(Vt).multiplyScalar($).floor(),I=Wt;if(N.bindFramebuffer(R.FRAMEBUFFER,V)&&et&&N.drawBuffers(E,V),N.viewport(L),N.scissor(H),N.setScissorTest(I),bt){const Ot=z.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,Q)}else if(Pt){const Ot=z.get(E.texture),Kt=G||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,Q||0,Kt)}b=-1},this.readRenderTargetPixels=function(E,G,Q,et,V,bt,Pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){N.bindFramebuffer(R.FRAMEBUFFER,zt);try{const Ot=E.texture,Kt=Ot.format,Qt=Ot.type;if(!Et.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-et&&Q>=0&&Q<=E.height-V&&R.readPixels(G,Q,et,V,ne.convert(Kt),ne.convert(Qt),bt)}finally{const Ot=C!==null?z.get(C).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,G,Q,et,V,bt,Pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){const Ot=E.texture,Kt=Ot.format,Qt=Ot.type;if(!Et.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=E.width-et&&Q>=0&&Q<=E.height-V){N.bindFramebuffer(R.FRAMEBUFFER,zt);const Bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Bt),R.bufferData(R.PIXEL_PACK_BUFFER,bt.byteLength,R.STREAM_READ),R.readPixels(G,Q,et,V,ne.convert(Kt),ne.convert(Qt),0);const le=C!==null?z.get(C).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,le);const Se=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await im(R,Se,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,bt),R.deleteBuffer(Bt),R.deleteSync(Se),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,Q=0){E.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1]);const et=Math.pow(2,-Q),V=Math.floor(E.image.width*et),bt=Math.floor(E.image.height*et),Pt=G!==null?G.x:0,zt=G!==null?G.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,Q,0,0,Pt,zt,V,bt),N.unbindTexture()},this.copyTextureToTexture=function(E,G,Q=null,et=null,V=0){E.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,E=arguments[1],G=arguments[2],V=arguments[3]||0,Q=null);let bt,Pt,zt,Ot,Kt,Qt,Bt,le,Se;const be=E.isCompressedTexture?E.mipmaps[V]:E.image;Q!==null?(bt=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,zt=Q.isBox3?Q.max.z-Q.min.z:1,Ot=Q.min.x,Kt=Q.min.y,Qt=Q.isBox3?Q.min.z:0):(bt=be.width,Pt=be.height,zt=be.depth||1,Ot=0,Kt=0,Qt=0),et!==null?(Bt=et.x,le=et.y,Se=et.z):(Bt=0,le=0,Se=0);const Sn=ne.convert(G.format),ue=ne.convert(G.type);let Gt;G.isData3DTexture?(w.setTexture3D(G,0),Gt=R.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(w.setTexture2DArray(G,0),Gt=R.TEXTURE_2D_ARRAY):(w.setTexture2D(G,0),Gt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Mi=R.getParameter(R.UNPACK_ROW_LENGTH),de=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Kn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ks=R.getParameter(R.UNPACK_SKIP_ROWS),Rn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,be.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,be.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ot),R.pixelStorei(R.UNPACK_SKIP_ROWS,Kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qt);const to=E.isDataArrayTexture||E.isData3DTexture,Ee=G.isDataArrayTexture||G.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const ni=z.get(E),eo=z.get(G),Bn=z.get(ni.__renderTarget),ki=z.get(eo.__renderTarget);N.bindFramebuffer(R.READ_FRAMEBUFFER,Bn.__webglFramebuffer),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Hi=0;Hi<zt;Hi++)to&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,z.get(E).__webglTexture,V,Qt+Hi),E.isDepthTexture?(Ee&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,z.get(G).__webglTexture,V,Se+Hi),R.blitFramebuffer(Ot,Kt,bt,Pt,Bt,le,bt,Pt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ee?R.copyTexSubImage3D(Gt,V,Bt,le,Se+Hi,Ot,Kt,bt,Pt):R.copyTexSubImage2D(Gt,V,Bt,le,Se+Hi,Ot,Kt,bt,Pt);N.bindFramebuffer(R.READ_FRAMEBUFFER,null),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ee?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Gt,V,Bt,le,Se,bt,Pt,zt,Sn,ue,be.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(Gt,V,Bt,le,Se,bt,Pt,zt,Sn,be.data):R.texSubImage3D(Gt,V,Bt,le,Se,bt,Pt,zt,Sn,ue,be):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,V,Bt,le,bt,Pt,Sn,ue,be.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,V,Bt,le,be.width,be.height,Sn,be.data):R.texSubImage2D(R.TEXTURE_2D,V,Bt,le,bt,Pt,Sn,ue,be);R.pixelStorei(R.UNPACK_ROW_LENGTH,Mi),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Kn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ks),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rn),V===0&&G.generateMipmaps&&R.generateMipmap(Gt),N.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Q=null,et=null,V=0){return E.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,et=arguments[1]||null,E=arguments[2],G=arguments[3],V=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,G,Q,et,V)},this.initRenderTarget=function(E){z.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,N.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class Kh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=i}clone(){return new Kh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jd extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class m1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new U;class ja{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ja(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _c extends Ws{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hr;const oo=new U,fr=new U,ur=new U,dr=new gt,ao=new gt,jd=new fe,Sa=new U,co=new U,wa=new U,bu=new gt,rl=new gt,Eu=new gt;class Zh extends Ue{constructor(t=new _c){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new m1(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new ja(i,3,0,!1)),hr.setAttribute("uv",new ja(i,2,3,!1))}this.geometry=hr,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-ur.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ba(Sa.set(-.5,-.5,0),ur,o,fr,s,r),ba(co.set(.5,-.5,0),ur,o,fr,s,r),ba(wa.set(.5,.5,0),ur,o,fr,s,r),bu.set(0,0),rl.set(1,0),Eu.set(1,1);let a=t.ray.intersectTriangle(Sa,co,wa,!1,oo);if(a===null&&(ba(co.set(-.5,.5,0),ur,o,fr,s,r),rl.set(0,1),a=t.ray.intersectTriangle(Sa,wa,co,!1,oo),a===null))return;const c=t.ray.origin.distanceTo(oo);c<t.near||c>t.far||e.push({distance:c,point:oo.clone(),uv:Xn.getInterpolation(oo,Sa,co,wa,bu,rl,Eu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ba(n,t,e,i,s,r){dr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ao.x=r*dr.x-s*dr.y,ao.y=s*dr.x+r*dr.y):ao.copy(dr),n.copy(t),n.x+=ao.x,n.y+=ao.y,n.applyMatrix4(jd)}class g1 extends fn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Fn,h=Fn,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tu extends Ge{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new fe,Au=new fe,Ea=[],Ru=new Vs,x1=new fe,lo=new xt,ho=new Kr;class li extends xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,x1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),Ru.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Ru)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),ho.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),t.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Au.multiplyMatrices(i,pr),lo.matrixWorld=Au,lo.raycast(t,Ea);for(let o=0,a=Ea.length;o<a;o++){const c=Ea[o];c.instanceId=r,c.object=this,e.push(c)}Ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new g1(new Float32Array(s*this.count),s,this.count,Vh,di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jh extends Ws{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cu=new fe,yh=new Fd,Ta=new Kr,Aa=new U;class Qd extends Ue{constructor(t=new we,e=new Jh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Cu.copy(s).invert(),yh.copy(t.ray).applyMatrix4(Cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,x=d;g<x;g++){const m=l.getX(g);Aa.fromBufferAttribute(f,m),Pu(Aa,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,x=d;g<x;g++)Aa.fromBufferAttribute(f,g),Pu(Aa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pu(n,t,e,i,s,r,o){const a=yh.distanceSqToPoint(n);if(a<e){const c=new U;yh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class gi extends fn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,c=new fe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(nn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jh extends vi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v1 extends jh{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ra=new U,ol=new Qh,al=new Qh,cl=new Qh;class Sh extends vi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),l=Ra);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ol.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,m),al.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,m),cl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),al.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),cl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(ol.calc(c),al.calc(c),cl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function _1(n,t){const e=1-n;return e*e*t}function M1(n,t){return 2*(1-n)*n*t}function y1(n,t){return n*n*t}function Co(n,t,e,i){return _1(n,t)+M1(n,e)+y1(n,i)}function S1(n,t){const e=1-n;return e*e*e*t}function w1(n,t){const e=1-n;return 3*e*e*n*t}function b1(n,t){return 3*(1-n)*n*n*t}function E1(n,t){return n*n*n*t}function Po(n,t,e,i,s){return S1(n,t)+w1(n,e)+b1(n,i)+E1(n,s)}class tp extends vi{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Po(t,s.x,r.x,o.x,a.x),Po(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class T1 extends vi{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Po(t,s.x,r.x,o.x,a.x),Po(t,s.y,r.y,o.y,a.y),Po(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ep extends vi{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A1 extends vi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class np extends vi{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Co(t,s.x,r.x,o.x),Co(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ip extends vi{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Co(t,s.x,r.x,o.x),Co(t,s.y,r.y,o.y),Co(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sp extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Lu(a,c.x,l.x,h.x,f.x),Lu(a,c.y,l.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Qa=Object.freeze({__proto__:null,ArcCurve:v1,CatmullRomCurve3:Sh,CubicBezierCurve:tp,CubicBezierCurve3:T1,EllipseCurve:jh,LineCurve:ep,LineCurve3:A1,QuadraticBezierCurve:np,QuadraticBezierCurve3:ip,SplineCurve:sp});class R1 extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Qa[s.type]().fromJSON(s))}return this}}class Iu extends R1{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ep(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new np(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new tp(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new sp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new jh(t,e,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ko extends we{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,f=new U,u=new gt,d=new U,g=new U,x=new U;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){const v=i+_*h*s,M=Math.sin(v),P=Math.cos(v);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*M,f.y=t[T].y,f.z=t[T].x*P,o.push(f.x,f.y,f.z),u.x=_/e,u.y=T/(t.length-1),a.push(u.x,u.y);const A=c[3*T+0]*M,C=c[3*T+1],b=c[3*T+0]*P;l.push(A,C,b)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const M=v+_*t.length,P=M,T=M+t.length,A=M+t.length+1,C=M+1;r.push(P,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.points,t.segments,t.phiStart,t.phiLength)}}class _n extends we{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,h=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Nt extends we{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const x=[],m=i/2;let p=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function _(){const M=new U,P=new U;let T=0;const A=(e-t)/i;for(let C=0;C<=r;C++){const b=[],S=C/r,L=S*(e-t)+t;for(let H=0;H<=s;H++){const I=H/s,O=I*c+a,W=Math.sin(O),Y=Math.cos(O);P.x=L*W,P.y=-S*i+m,P.z=L*Y,f.push(P.x,P.y,P.z),M.set(W,A,Y).normalize(),u.push(M.x,M.y,M.z),d.push(I,1-S),b.push(g++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=x[b][C],L=x[b+1][C],H=x[b+1][C+1],I=x[b][C+1];(t>0||b!==0)&&(h.push(S,L,I),T+=3),(e>0||b!==r-1)&&(h.push(L,H,I),T+=3)}l.addGroup(p,T,0),p+=T}function v(M){const P=g,T=new gt,A=new U;let C=0;const b=M===!0?t:e,S=M===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*S,0),u.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let H=0;H<=s;H++){const O=H/s*c+a,W=Math.cos(O),Y=Math.sin(O);A.x=b*Y,A.y=m*S,A.z=b*W,f.push(A.x,A.y,A.z),u.push(0,S,0),T.x=W*.5+.5,T.y=Y*.5*S+.5,d.push(T.x,T.y),g++}for(let H=0;H<s;H++){const I=P+H,O=L+H;M===!0?h.push(O,O+1,I):h.push(O+1,O,I),C+=3}l.addGroup(p,C,M===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends Nt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mc extends we{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new U,M=new U,P=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],M),d(e[T+2],P),c(v,M,P,_)}function c(_,v,M,P){const T=P+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const b=_.clone().lerp(M,C/T),S=v.clone().lerp(M,C/T),L=T-C;for(let H=0;H<=L;H++)H===0&&C===T?A[C][H]=b:A[C][H]=b.clone().lerp(S,H/L)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){const S=Math.floor(b/2);b%2===0?(u(A[C][S+1]),u(A[C+1][S]),u(A[C][S])):(u(A[C][S+1]),u(A[C+1][S+1]),u(A[C+1][S]))}}function l(_){const v=new U;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const _=new U;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const M=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;o.push(M,1-P)}g(),f()}function f(){for(let _=0;_<o.length;_+=6){const v=o[_+0],M=o[_+2],P=o[_+4],T=Math.max(v,M,P),A=Math.min(v,M,P);T>.9&&A<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function d(_,v){const M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const _=new U,v=new U,M=new U,P=new U,T=new gt,A=new gt,C=new gt;for(let b=0,S=0;b<r.length;b+=9,S+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),T.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),P.copy(_).add(v).add(M).divideScalar(3);const L=m(P);x(T,S+0,_,L),x(A,S+2,v,L),x(C,S+4,M,L)}}function x(_,v,M,P){P<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.vertices,t.indices,t.radius,t.details)}}class Lo extends Mc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lo(t.radius,t.detail)}}class yr extends Iu{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Iu().fromJSON(s))}return this}}const C1={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=rp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,u,d;if(i&&(r=U1(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)f=n[g],u=n[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Oo(r,o,e,a,c,d,0),o}};function rp(n,t,e,i,s){let r,o;if(s===X1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Du(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Du(r,n[r],n[r+1],o);return o&&yc(o,o.next)&&(ko(o),o=o.next),o}function Os(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(yc(e,e.next)||Le(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Oo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&B1(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?L1(n,i,s,r):P1(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),ko(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=I1(Os(n),t,e),Oo(n,t,e,i,s,r,2)):o===2&&D1(n,t,e,i,s,r):Oo(Os(n),t,e,i,s,r,1);break}}}function P1(n){const t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Sr(s,a,r,c,o,l,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L1(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Le(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,x=a>c?a>l?a:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,p=wh(d,g,t,e,i),_=wh(x,m,t,e,i);let v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Sr(a,h,c,f,l,u,v.x,v.y)&&Le(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Sr(a,h,c,f,l,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Sr(a,h,c,f,l,u,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Sr(a,h,c,f,l,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function I1(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!yc(s,r)&&op(s,i,i.next,r)&&Bo(s,r)&&Bo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ko(i),ko(i.next),i=n=r),i=i.next}while(i!==n);return Os(i)}function D1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G1(o,a)){let c=ap(o,a);o=Os(o,o.next),c=Os(c,c.next),Oo(o,t,e,i,s,r,0),Oo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function U1(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=rp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(H1(l));for(s.sort(N1),r=0;r<s.length;r++)e=F1(s[r],e);return e}function N1(n,t){return n.x-t.x}function F1(n,t){const e=z1(n,t);if(!e)return t;const i=ap(e,n);return Os(i,i.next),Os(e,e.next)}function z1(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Sr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Bo(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&O1(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function O1(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function B1(n,t,e,i){let s=n;do s.z===0&&(s.z=wh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,k1(s)}function k1(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function wh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function H1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Sr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function G1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!V1(n,t)&&(Bo(n,t)&&Bo(t,n)&&W1(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||yc(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function yc(n,t){return n.x===t.x&&n.y===t.y}function op(n,t,e,i){const s=Pa(Le(n,t,e)),r=Pa(Le(n,t,i)),o=Pa(Le(e,i,n)),a=Pa(Le(e,i,t));return!!(s!==r&&o!==a||s===0&&Ca(n,e,t)||r===0&&Ca(n,i,t)||o===0&&Ca(e,n,i)||a===0&&Ca(e,t,i))}function Ca(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Pa(n){return n>0?1:n<0?-1:0}function V1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&op(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Bo(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function W1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ap(n,t){const e=new bh(n.i,n.x,n.y),i=new bh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Du(n,t,e,i){const s=new bh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ts{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ts.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Uu(t),Nu(i,t);let o=t.length;e.forEach(Uu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Nu(i,e[c]);const a=C1.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Uu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Io extends we{constructor(t=new yr([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:q1;let v,M=!1,P,T,A,C;p&&(v=p.getSpacedPoints(h),M=!0,u=!1,P=p.computeFrenetFrames(h,!1),T=new U,A=new U,C=new U),u||(m=0,d=0,g=0,x=0);const b=a.extractPoints(l);let S=b.shape;const L=b.holes;if(!ts.isClockWise(S)){S=S.reverse();for(let K=0,nt=L.length;K<nt;K++){const R=L[K];ts.isClockWise(R)&&(L[K]=R.reverse())}}const I=ts.triangulateShape(S,L),O=S;for(let K=0,nt=L.length;K<nt;K++){const R=L[K];S=S.concat(R)}function W(K,nt,R){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(nt,R)}const Y=S.length,tt=I.length;function $(K,nt,R){let _t,ot,Et;const N=K.x-nt.x,D=K.y-nt.y,z=R.x-K.x,w=R.y-K.y,y=N*N+D*D,F=N*w-D*z;if(Math.abs(F)>Number.EPSILON){const X=Math.sqrt(y),j=Math.sqrt(z*z+w*w),k=nt.x-D/X,vt=nt.y+N/X,mt=R.x-w/j,yt=R.y+z/j,Ft=((mt-k)*w-(yt-vt)*z)/(N*w-D*z);_t=k+N*Ft-K.x,ot=vt+D*Ft-K.y;const pt=_t*_t+ot*ot;if(pt<=2)return new gt(_t,ot);Et=Math.sqrt(pt/2)}else{let X=!1;N>Number.EPSILON?z>Number.EPSILON&&(X=!0):N<-Number.EPSILON?z<-Number.EPSILON&&(X=!0):Math.sign(D)===Math.sign(w)&&(X=!0),X?(_t=-D,ot=N,Et=Math.sqrt(y)):(_t=N,ot=D,Et=Math.sqrt(y/2))}return new gt(_t/Et,ot/Et)}const ut=[];for(let K=0,nt=O.length,R=nt-1,_t=K+1;K<nt;K++,R++,_t++)R===nt&&(R=0),_t===nt&&(_t=0),ut[K]=$(O[K],O[R],O[_t]);const St=[];let Tt,Vt=ut.concat();for(let K=0,nt=L.length;K<nt;K++){const R=L[K];Tt=[];for(let _t=0,ot=R.length,Et=ot-1,N=_t+1;_t<ot;_t++,Et++,N++)Et===ot&&(Et=0),N===ot&&(N=0),Tt[_t]=$(R[_t],R[Et],R[N]);St.push(Tt),Vt=Vt.concat(Tt)}for(let K=0;K<m;K++){const nt=K/m,R=d*Math.cos(nt*Math.PI/2),_t=g*Math.sin(nt*Math.PI/2)+x;for(let ot=0,Et=O.length;ot<Et;ot++){const N=W(O[ot],ut[ot],_t);lt(N.x,N.y,-R)}for(let ot=0,Et=L.length;ot<Et;ot++){const N=L[ot];Tt=St[ot];for(let D=0,z=N.length;D<z;D++){const w=W(N[D],Tt[D],_t);lt(w.x,w.y,-R)}}}const Wt=g+x;for(let K=0;K<Y;K++){const nt=u?W(S[K],Vt[K],Wt):S[K];M?(A.copy(P.normals[0]).multiplyScalar(nt.x),T.copy(P.binormals[0]).multiplyScalar(nt.y),C.copy(v[0]).add(A).add(T),lt(C.x,C.y,C.z)):lt(nt.x,nt.y,0)}for(let K=1;K<=h;K++)for(let nt=0;nt<Y;nt++){const R=u?W(S[nt],Vt[nt],Wt):S[nt];M?(A.copy(P.normals[K]).multiplyScalar(R.x),T.copy(P.binormals[K]).multiplyScalar(R.y),C.copy(v[K]).add(A).add(T),lt(C.x,C.y,C.z)):lt(R.x,R.y,f/h*K)}for(let K=m-1;K>=0;K--){const nt=K/m,R=d*Math.cos(nt*Math.PI/2),_t=g*Math.sin(nt*Math.PI/2)+x;for(let ot=0,Et=O.length;ot<Et;ot++){const N=W(O[ot],ut[ot],_t);lt(N.x,N.y,f+R)}for(let ot=0,Et=L.length;ot<Et;ot++){const N=L[ot];Tt=St[ot];for(let D=0,z=N.length;D<z;D++){const w=W(N[D],Tt[D],_t);M?lt(w.x,w.y+v[h-1].y,v[h-1].x+R):lt(w.x,w.y,f+R)}}}st(),at();function st(){const K=s.length/3;if(u){let nt=0,R=Y*nt;for(let _t=0;_t<tt;_t++){const ot=I[_t];Dt(ot[2]+R,ot[1]+R,ot[0]+R)}nt=h+m*2,R=Y*nt;for(let _t=0;_t<tt;_t++){const ot=I[_t];Dt(ot[0]+R,ot[1]+R,ot[2]+R)}}else{for(let nt=0;nt<tt;nt++){const R=I[nt];Dt(R[2],R[1],R[0])}for(let nt=0;nt<tt;nt++){const R=I[nt];Dt(R[0]+Y*h,R[1]+Y*h,R[2]+Y*h)}}i.addGroup(K,s.length/3-K,0)}function at(){const K=s.length/3;let nt=0;wt(O,nt),nt+=O.length;for(let R=0,_t=L.length;R<_t;R++){const ot=L[R];wt(ot,nt),nt+=ot.length}i.addGroup(K,s.length/3-K,1)}function wt(K,nt){let R=K.length;for(;--R>=0;){const _t=R;let ot=R-1;ot<0&&(ot=K.length-1);for(let Et=0,N=h+m*2;Et<N;Et++){const D=Y*Et,z=Y*(Et+1),w=nt+_t+D,y=nt+ot+D,F=nt+ot+z,X=nt+_t+z;Ht(w,y,F,X)}}}function lt(K,nt,R){c.push(K),c.push(nt),c.push(R)}function Dt(K,nt,R){J(K),J(nt),J(R);const _t=s.length/3,ot=_.generateTopUV(i,s,_t-3,_t-2,_t-1);ht(ot[0]),ht(ot[1]),ht(ot[2])}function Ht(K,nt,R,_t){J(K),J(nt),J(_t),J(nt),J(R),J(_t);const ot=s.length/3,Et=_.generateSideWallUV(i,s,ot-6,ot-3,ot-2,ot-1);ht(Et[0]),ht(Et[1]),ht(Et[3]),ht(Et[1]),ht(Et[2]),ht(Et[3])}function J(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function ht(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Y1(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qa[s.type]().fromJSON(s)),new Io(i,t.options)}}const q1={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-f),new gt(u,1-g),new gt(x,1-p)]:[new gt(a,1-c),new gt(h,1-f),new gt(d,1-g),new gt(m,1-p)]}};function Y1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zo extends Mc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class Bs extends we{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/s,d=new U,g=new gt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const _=p+m,v=_,M=_+i+1,P=_+i+2,T=_+1;a.push(v,M,T),a.push(M,P,T)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tc extends we{constructor(t=new yr([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function l(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;ts.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];ts.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=ts.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){const _=d[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){const _=x[m],v=_[0]+f,M=_[1]+f,P=_[2]+f;i.push(v,M,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $1(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new tc(i,t.curveSegments)}}function $1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Yn extends we{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new U,u=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const _=[],v=p/i;let M=0;p===0&&o===0?M=.5/e:p===i&&c===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const T=P/e;f.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(T+M,1-v),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const v=h[p][_+1],M=h[p][_],P=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&d.push(v,M,T),(p!==i-1||c<Math.PI)&&d.push(M,P,T)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ks extends we{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new U,f=new U,u=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tf extends we{constructor(t=new ip(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new gt;let h=new U;const f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),_(),p()}function m(v){h=t.getPointAt(v/e,h);const M=o.normals[v],P=o.binormals[v];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,C=Math.sin(A),b=-Math.cos(A);c.x=b*M.x+C*P.x,c.y=b*M.y+C*P.y,c.z=b*M.z+C*P.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let M=1;M<=s;M++){const P=(s+1)*(v-1)+(M-1),T=(s+1)*v+(M-1),A=(s+1)*v+M,C=(s+1)*(v-1)+M;g.push(P,T,C),g.push(T,A,C)}}function _(){for(let v=0;v<=e;v++)for(let M=0;M<=s;M++)l.x=v/e,l.y=M/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new tf(new Qa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class un extends Ws{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ef extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class K1 extends ef{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ll=new fe,Fu=new U,zu=new U;class cp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ou=new fe,fo=new U,hl=new U;class Z1 extends cp{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fo.setFromMatrixPosition(t.matrixWorld),i.position.copy(fo),hl.copy(i.position),hl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(hl),i.updateMatrixWorld(),s.makeTranslation(-fo.x,-fo.y,-fo.z),Ou.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}class lp extends ef{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Z1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class J1 extends cp{constructor(){super(new Xd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j1 extends ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new J1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);const mn={hachi:{id:"hachi",name:"Hachi",price:0,paint:15921906,tag:"Lightweight boxy coupe. Pop-up lights, tiny tyres, pure slide.",mods:{power:1,top:1,grip:1,drift:1.02,steer:1.03},wb:2.4,front:{R:.31,w:.2},rear:{R:.31,w:.21},fd:4.1,wing:0,rows:[[2.1,.3,.6,.5,.72,.62,.52],[1.95,.26,.76,.5,.8,.66,.64],[1.55,.24,.8,.52,.83,.74,.72],[.95,.24,.82,.54,.83,.82,.76],[-.05,.24,.82,.56,.83,.86,.78],[-1.5,.24,.82,.56,.83,.86,.78],[-1.95,.26,.78,.54,.8,.76,.72],[-2.1,.3,.66,.5,.74,.66,.6]],cab:[[.95,null,.74,.74],[.35,1.34,.74,.62],[-1.25,1.34,.74,.62],[-1.85,null,.74,.74]],bpillar:-.45,popup:!0,wingSpec:{z:-1.85,hw:.6,chord:.24,h:.26}},kei:{id:"kei",name:"Kei",price:4e3,paint:11065584,tag:"Tiny buzzbox. Slow, but it tips into every corner.",mods:{power:.86,top:.82,grip:.94,drift:1.15,steer:1.08},wb:2.1,front:{R:.28,w:.17},rear:{R:.28,w:.17},fd:4.5,wing:0,rows:[[1.75,.34,.58,.56,.68,.78,.54],[1.6,.3,.72,.6,.76,.9,.66],[1.25,.28,.76,.62,.8,.96,.72],[.7,.28,.78,.64,.8,1.02,.74],[-.3,.28,.78,.66,.8,1.06,.74],[-1.2,.28,.78,.66,.8,1.06,.74],[-1.65,.32,.72,.62,.78,1,.7],[-1.75,.36,.6,.58,.72,.92,.62]],cab:[[.85,null,.72,.72],[.4,1.72,.72,.58],[-1.15,1.72,.72,.58],[-1.55,null,.72,.72]],bpillar:-.35,wingSpec:{z:-1.55,hw:.5,chord:.18,h:.14}},corsa:{id:"corsa",name:"Corsa-S",price:6e3,paint:16731501,tag:"Low, wide sports coupe with a fastback roof and GT wing.",mods:{power:1,top:1.01,grip:1.02,drift:1,steer:1},wb:2.55,front:{R:.33,w:.235},rear:{R:.33,w:.255},fd:3.9,wing:4,rows:[[2.225,.26,.62,.42,.74,.52,.52],[2.05,.22,.8,.46,.84,.56,.66],[1.6,.2,.86,.52,.89,.66,.74],[.9,.2,.88,.58,.89,.76,.8],[0,.2,.88,.6,.89,.8,.8],[-1.2,.2,.88,.62,.89,.84,.82],[-1.9,.22,.84,.62,.88,.88,.8],[-2.225,.26,.72,.6,.82,.84,.74]],cab:[[.85,null,.78,.78],[.05,1.2,.78,.64],[-.85,1.2,.78,.64],[-1.75,null,.76,.76]],bpillar:-.3,wingSpec:{z:-1.95,hw:.7,chord:.26,h:.3}},pickup:{id:"pickup",name:"Pickup",price:8e3,paint:9136698,tag:"Short-bed truck. Long wheelbase, lazy slides.",mods:{power:1.02,top:.96,grip:.94,drift:1.1,steer:.94},wb:3,front:{R:.36,w:.24},rear:{R:.36,w:.26},fd:3.6,wing:0,rows:[[2.35,.32,.68,.58,.82,.78,.62],[2.2,.28,.88,.62,.94,.88,.8],[1.75,.26,.94,.68,.975,1,.9],[.85,.26,.96,.72,.985,1.04,.94],[-.2,.26,.96,.74,.985,1.04,.94],[-1.85,.26,.94,.74,.975,1,.9],[-2.35,.3,.82,.7,.88,.92,.78],[-2.55,.34,.68,.66,.8,.86,.7]],cab:[[.55,null,.88,.88],[-.1,1.48,.88,.76],[-1.05,1.48,.88,.76],[-1.55,null,.88,.88]],bpillar:-.55,scoop:{z:1.35,w:.5,l:.55,h:.06},wingSpec:{z:-2.4,hw:.85,chord:.22,h:.2}},muscle:{id:"muscle",name:"Muscle",price:12e3,paint:16758531,tag:"Long hood, big shoulders, loud pedal. Hold on.",mods:{power:1.04,top:1.02,grip:.96,drift:1,steer:.97},wb:2.8,front:{R:.35,w:.255},rear:{R:.36,w:.3},fd:3.7,wing:0,rows:[[2.45,.3,.7,.56,.84,.74,.62],[2.3,.26,.88,.6,.94,.86,.8],[1.8,.24,.94,.66,.975,.96,.88],[.9,.24,.95,.7,.975,1,.9],[0,.24,.95,.72,.975,1,.9],[-1.4,.24,.95,.74,.975,1,.9],[-2.15,.26,.9,.74,.95,.98,.86],[-2.45,.3,.78,.7,.88,.9,.76]],cab:[[.55,null,.84,.84],[-.1,1.42,.84,.72],[-1,1.42,.84,.72],[-1.85,null,.84,.84]],bpillar:-.5,scoop:{z:1.2,w:.5,l:.65,h:.07},wingSpec:{z:-2.2,hw:.7,chord:.2,h:.18}},volt:{id:"volt",name:"Volt",price:14e3,paint:3065014,tag:"Silent EV. Instant torque, low grip, huge slides.",mods:{power:1.14,top:1,grip:.9,drift:1.12,steer:1},wb:2.75,front:{R:.34,w:.24},rear:{R:.34,w:.26},fd:3.4,wing:0,rows:[[2.3,.22,.68,.38,.82,.52,.6],[2.15,.18,.84,.42,.9,.6,.74],[1.55,.16,.9,.48,.94,.72,.8],[.75,.16,.92,.54,.96,.82,.84],[-.2,.16,.94,.6,.98,.92,.86],[-1.3,.16,.94,.64,.98,.96,.88],[-1.95,.18,.88,.64,.94,.94,.82],[-2.2,.22,.74,.6,.86,.88,.72]],cab:[[.75,null,.84,.84],[.1,1.36,.84,.7],[-1.1,1.36,.84,.7],[-1.85,null,.84,.84]],bpillar:-.4,wingSpec:{z:-2.05,hw:.7,chord:.22,h:.16}},rallye:{id:"rallye",name:"Rallye",price:18e3,paint:3112447,tag:"Short hatch, giant wing, hood scoop. Built for sideways gravel.",mods:{power:1.01,top:.99,grip:1.05,drift:1.05,steer:1.02},wb:2.6,front:{R:.34,w:.235},rear:{R:.34,w:.235},fd:4,wing:6,rows:[[2.175,.28,.66,.52,.78,.66,.58],[2,.26,.84,.56,.88,.76,.72],[1.55,.26,.88,.6,.91,.86,.8],[.85,.26,.88,.64,.91,.92,.82],[-.1,.26,.88,.66,.91,.94,.82],[-1.6,.26,.88,.66,.91,.94,.82],[-2,.28,.84,.66,.89,.9,.78],[-2.175,.3,.72,.62,.82,.84,.7]],cab:[[.85,null,.8,.8],[.2,1.46,.8,.66],[-1.45,1.46,.8,.66],[-2,null,.8,.8]],bpillar:-.6,scoop:{z:1.05,w:.46,l:.55,h:.08},wingSpec:{z:-2.05,hw:.74,chord:.3,h:.34}},gt3:{id:"gt3",name:"GT3",price:24e3,paint:16751164,tag:"Race-bred aero monster. Grip on grip on grip.",mods:{power:1.15,top:1.08,grip:1.14,drift:.86,steer:1.06},wb:2.65,front:{R:.36,w:.3},rear:{R:.36,w:.34},fd:3.5,wing:9,rows:[[2.35,.18,.78,.32,.92,.42,.66],[2.15,.14,.94,.36,1,.48,.8],[1.55,.12,.98,.42,1.04,.58,.88],[.7,.12,1,.5,1.06,.72,.94],[-.3,.12,1.02,.56,1.08,.84,.98],[-1.3,.12,1.02,.6,1.08,.9,1],[-1.95,.14,.96,.6,1.02,.9,.92],[-2.2,.18,.82,.56,.94,.84,.78]],cab:[[.7,null,.82,.82],[.05,1.28,.82,.68],[-.75,1.28,.82,.68],[-1.65,null,.82,.82]],bpillar:-.25,vents:{z:-1,y:.65,l:.7,h:.14},wingSpec:{z:-2.15,hw:.9,chord:.32,h:.38}},apex:{id:"apex",name:"Apex GT",price:3e4,paint:7205058,tag:"Mid-engine wedge. Low nose, wide hips, fast everything.",mods:{power:1.03,top:1.05,grip:1.04,drift:.95,steer:1.02},wb:2.6,front:{R:.34,w:.255},rear:{R:.36,w:.32},fd:3.6,wing:5,rows:[[2.3,.2,.7,.3,.8,.4,.55],[2.1,.16,.86,.34,.92,.46,.7],[1.5,.14,.9,.4,.975,.54,.78],[.6,.14,.9,.46,.975,.62,.8],[-.5,.14,.92,.54,.975,.78,.84],[-1.5,.14,.94,.6,.975,.88,.88],[-2.1,.16,.88,.6,.95,.9,.82],[-2.3,.2,.74,.56,.88,.86,.7]],cab:[[.65,null,.74,.74],[0,1.1,.74,.54],[-.6,1.1,.74,.54],[-1.5,null,.74,.74]],bpillar:-.3,vents:{z:-.95,y:.6,l:.75,h:.16},wingSpec:{z:-2.2,hw:.8,chord:.28,h:.3}}},wo=["hachi","kei","corsa","pickup","muscle","volt","rallye","gt3","apex"],Ts=(n,t,e)=>n+(t-n)*e;function ri(n,t){if(t>=n[0][0])return n[0].slice(1);for(let e=0;e<n.length-1;e++){const i=n[e],s=n[e+1];if(t<=i[0]&&t>=s[0]){const r=(i[0]-t)/(i[0]-s[0]||1);return i.slice(1).map((o,a)=>Ts(o,s[a+1],r))}}return n[n.length-1].slice(1)}function Je(n,t){return t<=n[2]?Ts(n[1],n[3],Math.max(0,(t-n[0])/(n[2]-n[0]||1))):Ts(n[3],n[5],Math.min(1,(t-n[2])/(n[4]-n[2]||1)))}function uo(n,t){const e=hp(n);for(let i=0;i<e.length-1;i++){const s=e[i],r=e[i+1];if(t<=s.z&&t>=r.z){const o=(s.z-t)/(s.z-r.z||1);return{yb:Ts(s.yb,r.yb,o),yr:Ts(s.yr,r.yr,o),wb:Ts(s.wb,r.wb,o),wr:Ts(s.wr,r.wr,o)}}}return e[0]}function hp(n){return n.cab.map(([t,e,i,s])=>{const r=ri(n.rows,t)[4]-.02;return{z:t,yb:r,yr:e??r,wb:i,wr:s}})}function fp(n,t,e=0){const i=n[0].length,s=[],r={};for(const h of n)for(const f of h)s.push(f[0],f[1],f[2]);const o=(h,f,u,d)=>(r[h]||(r[h]=[])).push(f,u,d);for(let h=0;h<n.length-1;h++)for(let f=0;f<i;f++){const u=h*i+f,d=h*i+(f+1)%i,g=(h+1)*i+f,x=(h+1)*i+(f+1)%i,m=t(h,f,n.length-1);o(m,u,d,x),o(m,u,x,g)}const a=(h,f,u)=>{const d=[0,0,0];for(const x of h)d[0]+=x[0]/i,d[1]+=x[1]/i,d[2]+=x[2]/i;const g=s.length/3;s.push(d[0],d[1],d[2]);for(let x=0;x<i;x++)u?o(e,g,f+(x+1)%i,f+x):o(e,g,f+x,f+(x+1)%i)};e!=null&&(a(n[0],0,!1),a(n[n.length-1],(n.length-1)*i,!0));const c=[],l=[];for(const h of Object.keys(r).map(Number).sort())l.push({start:c.length,count:r[h].length,mat:h}),c.push(...r[h]);return{pos:new Float32Array(s),index:new Uint32Array(c),groups:l}}function up(n){const t=n.rows.map(([e,i,s,r,o,a,c])=>[[-s,i,e],[s,i,e],[o,r,e],[c,a,e],[-c,a,e],[-o,r,e]]);return fp(t,(e,i)=>i===0?1:0,0)}function dp(n){const e=hp(n).map(i=>[[-i.wb,i.yb,i.z],[i.wb,i.yb,i.z],[i.wr,i.yr,i.z],[-i.wr,i.yr,i.z]]);return fp(e,(i,s,r)=>s===0?1:s===2?i===0||i===r-1?0:1:0,null)}function pp(n,t=.03){const e={};for(const[i,s]of[["front",1],["rear",-1]]){const r=n[i],o=s*n.wb/2,a=ri(n.rows,o),c=Je(a,r.R);e[i]={z:o,R:r.R,w:r.w,x:c+t-r.w/2}}return e}const Q1=[1.4,0,-1.4],Bu=1,mp=n=>(n.c=Math.cos(n.a||0),n.s=Math.sin(n.a||0),n),qn=(n,t,e,i)=>({type:"circle",x:n,z:t,r:e,br:e,...i}),He=(n,t,e,i,s=0,r)=>mp({type:"box",x:n,z:t,hw:e,hd:i,a:s,br:Math.hypot(e,i),...r}),fl=(n,t,e,i,s=0,r)=>mp({type:"ellipse",x:n,z:t,rx:e,rz:i,a:s,br:Math.max(e,i),...r}),gp=n=>n.type||"circle";function tM(n,t,e,i,s){const r=t-n.x,o=e-n.z,a=gp(n),c=(n.br??n.r)+i;if(r*r+o*o>c*c)return!1;if(a==="circle"){const g=Math.hypot(r,o),x=n.r+i;return g>=x?!1:g<1e-6?(s.nx=1,s.nz=0,s.pen=x,!0):(s.nx=r/g,s.nz=o/g,s.pen=x-g,!0)}const l=r*n.c-o*n.s,h=r*n.s+o*n.c;let f,u,d;if(a==="box"){const g=Math.max(-n.hw,Math.min(n.hw,l)),x=Math.max(-n.hd,Math.min(n.hd,h)),m=l-g,p=h-x,_=Math.hypot(m,p);if(_>1e-6){if(_>=i)return!1;f=m/_,u=p/_,d=i-_}else{const v=n.hw-Math.abs(l),M=n.hd-Math.abs(h);v<M?(f=l>=0?1:-1,u=0,d=v+i):(f=0,u=h>=0?1:-1,d=M+i)}}else{const g=l/n.rx,x=h/n.rz,m=Math.hypot(g,x);if(m<1e-6)f=1,u=0,d=n.rx+i;else{const p=g/n.rx,_=x/n.rz,v=Math.hypot(p,_)||1e-6,M=(m-1)*m/v;if(M>=i)return!1;f=p/v,u=_/v,d=i-M}}return s.nx=f*n.c+u*n.s,s.nz=-f*n.s+u*n.c,s.pen=d,!0}const La={nx:0,nz:0,pen:0};function xp(n,t,e){for(let i=0;i<t.length;i++){const s=t[i],r=n.x-s.x,o=n.z-s.z,a=(s.br??s.r)+Bu+3;if(!(r*r+o*o>a*a))for(let c=0;c<3;c++){const l=Q1[c],h=n.x+Math.sin(n.h)*l,f=n.z+Math.cos(n.h)*l;tM(s,h,f,Bu,La)&&e(La.nx,La.nz,La.pen)}}}function Do(n,t,e){const i=t-n.x,s=e-n.z,r=gp(n);if(r==="circle")return Math.hypot(i,s)-n.r;const o=i*n.c-s*n.s,a=i*n.s+s*n.c;if(r==="box"){const u=Math.abs(o)-n.hw,d=Math.abs(a)-n.hd;return Math.hypot(Math.max(u,0),Math.max(d,0))+Math.min(Math.max(u,d),0)}const c=o/n.rx,l=a/n.rz,h=Math.hypot(c,l)||1e-6,f=Math.hypot(c/n.rx,l/n.rz)||1e-6;return(h-1)*h/f}const Ls=(n,t,e)=>Math.min(e,Math.max(t,n)),vp=(n,t,e)=>n+(t-n)*e,_p={duel:100,snake:112},Eh=38,Ia=1.6,Mp=.95,yp=14,ku=5.2,Sp=110,wp=45,Hs=[16731501,3112447,16761370,3138464],Ui=["P1","P2","P3","P4"],nf=[{name:"W A S D  +  Space",gas:["KeyW"],brake:["KeyS"],left:["KeyA"],right:["KeyD"],hb:["Space","ShiftLeft"]},{name:"Arrows  +  Right Shift",gas:["ArrowUp"],brake:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],hb:["ShiftRight","Enter"]},{name:"I J K L  +  U",gas:["KeyI"],brake:["KeyK"],left:["KeyJ"],right:["KeyL"],hb:["KeyU","KeyO"]},{name:"T F G H  +  R  (or numpad)",gas:["KeyT","Numpad8"],brake:["KeyG","Numpad5"],left:["KeyF","Numpad4"],right:["KeyH","Numpad6"],hb:["KeyR","Numpad0"]}];function bp(n,t,e){if(n<=1)return[{x:0,y:0,w:t,h:e}];if(n===2)return t>=e*.9?[{x:0,y:0,w:t/2,h:e},{x:t/2,y:0,w:t/2,h:e}]:[{x:0,y:0,w:t,h:e/2},{x:0,y:e/2,w:t,h:e/2}];const i=t/2,s=e/2;return[{x:0,y:0,w:i,h:s},{x:i,y:0,w:i,h:s},{x:0,y:s,w:i,h:s},{x:i,y:s,w:i,h:s}].slice(0,4)}function eM(n,t,e){const i=n/t*Math.PI*2+.4,s=e*.68;return{x:Math.sin(i)*s,z:Math.cos(i)*s,h:i+Math.PI/2,a:i,r:s}}const nM=()=>({pitch:0,pv:0,roll:0,rv:0,heave:0,hv:0});function iM(n,t,e,i,s,r){const o=((i?.04:0)-(e?.03:0))*t.pitchAmp,a=Math.max(1,Math.ceil(r/.008)),c=r/a,l=t.w,h=t.z,f=l*1.15,u=l*1.1;for(let d=0;d<a;d++)n.pv+=(l*l*(o-n.pitch)-2*h*l*n.pv)*c,n.pitch+=n.pv*c,n.rv+=(f*f*(s*t.rollAmp-n.roll)-2*h*f*n.rv)*c,n.roll+=n.rv*c,n.hv+=(u*u*(0-n.heave)-2*h*u*n.hv)*c,n.heave+=n.hv*c;n.pitch=Ls(n.pitch,-.25,.25),n.roll=Ls(n.roll,-.3,.3),n.heave=Ls(n.heave,-.15,.15)}function sM(n,t,e,i,s){const r=eM(n,t,e),o={i:n,x:r.x,z:r.z,h:r.h,vx:0,vz:0,steer:0,loose:0,sp:0,slip:0,vf:0,yaw:0,thr:0,brk:0,alive:!0,st:i,segs:0,orbs:0,trail:[],camH:r.h,sus:nM(),spin:0,pose:r};if(s==="snake")for(let a=100;a>=0;a-=.35){const c=r.a-a/r.r;o.trail.push({x:Math.sin(c)*r.r,z:Math.cos(c)*r.r,h:c+Math.PI/2})}return o}function rM(n,t,e){const i=n.st,s=t.gas?1:0,r=t.brake?1:0,o=!!t.hb,a=Math.sin(n.h),c=Math.cos(n.h),l=-Math.cos(n.h),h=Math.sin(n.h);let f=n.vx*a+n.vz*c,u=n.vx*l+n.vz*h;const d=Math.hypot(f,u),g=Math.atan2(u,Math.abs(f)+.001),x=(t.steer||0)*(r&&f>5?1-i.brakeUnder:1),m=-.4*Ls(u/10,-1,1)*n.loose;n.steer+=(Ls(x+m,-1,1)-n.steer)*Math.min(1,e*(x?10:14)),s&&(f+=i.power*(1-Ls(f/i.top,0,1.2))*e*(f<0?2:1)),r&&(f=f>.5?f-38*e:Math.max(-12,f-14*e)),f*=Math.exp(-((s?.09:.25)+i.dragK)*e),!s&&!r&&Math.abs(f)<3&&(f*=Math.exp(-2.5*e)),o&&(f*=Math.exp(-.42*e));let p=o||s&&f>8&&(Math.abs(n.steer)>.2*i.entry||Math.abs(g)>.14*i.entry)?1:0;r&&d>9&&i.brakeLoose>0&&Math.abs(n.steer)>.15&&(p=Math.max(p,i.brakeLoose*.9)),n.loose+=(p-n.loose)*Math.min(1,e*(p?14:4));const _=i.grip*.68,v=i.drift*1.22;u*=Math.exp(-vp(_,v*(o?.5:1),n.loose)*(1+i.aeroK*d*d)*e);const M=f>=-1?1:-1,P=Math.min(1,d/6)/(1+d/(i.top*1.5)),T=n.steer*i.steer*P*M*(1+.45*n.loose)*(o?1.35:1);n.vx=a*f+l*u,n.vz=c*f+h*u,n.h+=T*e,n.x+=n.vx*e,n.z+=n.vz*e,n.sp=d,n.slip=g,n.vf=f,n.yaw=T,n.thr=s,n.brk=r,n.hb=o}function ul(n,t,e,i,s){n.x+=t*i,n.z+=e*i;const r=n.vx*t+n.vz*e;r<0&&(n.vx-=1.35*r*t,n.vz-=1.35*r*e,n.vx*=.92,n.vz*=.92,-r>4&&s.push({type:"wall",car:n,impact:-r}))}function oM(n,t,e,i){const s=Math.hypot(n.x,n.z)||1;s>t-Ia&&ul(n,-n.x/s,-n.z/s,s-(t-Ia),i),s<Eh+Ia&&ul(n,n.x/s,n.z/s,Eh+Ia-s,i),xp(n,e,(r,o,a)=>ul(n,r,o,a,i))}const ec=n=>{const t=Math.sin(n.h),e=Math.cos(n.h);return[1.35,0,-1.35].map(i=>({x:n.x+t*i,z:n.z+e*i}))};function aM(n,t,e){for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){const r=n[i],o=n[s];if(!r.alive||!o.alive||Math.hypot(r.x-o.x,r.z-o.z)>8)continue;const a=ec(r),c=ec(o),l=2*Mp;let h=null,f=!1,u=!1;for(let _=0;_<3;_++)for(let v=0;v<3;v++){const M=c[v].x-a[_].x,P=c[v].z-a[_].z,T=Math.hypot(M,P)||1e-6,A=l-T;A<=0||(_===0&&(f=!0),v===0&&(u=!0),(!h||A>h.pen)&&(h={pen:A,nx:M/T,nz:P/T}))}if(!h)continue;const{nx:d,nz:g,pen:x}=h;r.x-=d*x/2,r.z-=g*x/2,o.x+=d*x/2,o.z+=g*x/2;const m=(r.vx-o.vx)*d+(r.vz-o.vz)*g;if(m<=0)continue;if(e){const _=Math.sin(r.h)*d+Math.cos(r.h)*g,v=Math.sin(o.h)*d+Math.cos(o.h)*g;m>5.5&&f&&_>.55&&Math.abs(v)<.5?t.push({type:"side",attacker:r,victim:o,closing:m}):m>5.5&&u&&-v>.55&&Math.abs(_)<.5&&t.push({type:"side",attacker:o,victim:r,closing:m})}const p=m*.78;r.vx-=p*d,r.vz-=p*g,o.vx+=p*d,o.vz+=p*g,m>3&&t.push({type:"bump",a:r,b:o,closing:m})}}function cM(n){const t=n.trail[n.trail.length-1];(!t||Math.hypot(n.x-t.x,n.z-t.z)>.35)&&(n.trail.push({x:n.x,z:n.z,h:n.h}),n.trail.length>520&&n.trail.shift())}function Ep(n){const t=[],e=n.trail;let i=n.x,s=n.z,r=0,o=ku;for(let l=e.length-1;l>=0&&t.length<n.segs;l--){const h=e[l].x,f=e[l].z,u=Math.hypot(i-h,s-f);if(!(u<1e-6)){for(;t.length<n.segs&&r+u>=o;){const d=(o-r)/u;t.push({x:i+(h-i)*d,z:s+(f-s)*d,h:0}),o+=ku}r+=u,i=h,s=f}}let a=n.x,c=n.z;n.h;for(const l of t)l.h=Math.atan2(a-l.x,c-l.z),a=l.x,c=l.z;return t}const lM=n=>{const t=Math.sin(n.h),e=Math.cos(n.h);return[1.35,0,-1.35].map(i=>({x:n.x+t*i,z:n.z+e*i}))};function Uo(n,t,e){let i=n.orbs.find(s=>!s.on);i||(i=n.orbs[Math.floor(Math.random()*n.orbs.length)]),i.on=!0,i.x=t,i.z=e,i.hue=Math.random(),i.born=n.time}function Tp(n){const t=sf(n)*.9,e=Eh+6;if(t<=e){Uo(n,0,0);return}for(let i=0;i<20;i++){const s=Math.random()*Math.PI*2,r=e+Math.random()*(t-e),o=Math.sin(s)*r,a=Math.cos(s)*r;let c=!0;if(n.cars){for(const l of n.cars)if(l.alive&&Math.hypot(l.x-o,l.z-a)<4){c=!1;break}}if(c||i===19){Uo(n,o,a);return}}}const sf=n=>{const t=_p[n.mode],e=n.mode==="duel"?45:25,i=n.mode==="duel"?75:90;return t*vp(1,.6,Ls((n.time-e)/i,0,1))};function hM(n,t,e){const i={mode:n.mode,n:n.n,first:n.first,stats:t,obst:e,cars:[],scores:new Array(n.n).fill(0),orbs:Array.from({length:Sp},()=>({on:!1,x:0,z:0,hue:0,born:0})),phase:"count",t:3.2,round:1,time:0,lastWinner:-1,winner:-1,countShown:4};return Ap(i,[]),i}function Ap(n,t){const e=_p[n.mode];n.cars=Array.from({length:n.n},(i,s)=>sM(s,n.n,e,n.stats[s],n.mode));for(const i of n.orbs)i.on=!1;if(n.mode==="snake")for(let i=0;i<wp;i++)Tp(n);n.phase="count",n.t=3.2,n.time=0,n.lastWinner=-1,n.countShown=4,t.push({type:"round",round:n.round})}const fM=n=>n.cars.filter(t=>t.alive);function dl(n,t,e){n.phase="roundEnd",n.t=2.6,n.lastWinner=t,t>=0&&n.scores[t]++,e.push({type:"roundEnd",winner:t})}function uM(n,t,e){const i=[],s={gas:0,brake:0,hb:0,steer:0};if(n.phase==="count"){n.t-=e;const h=Math.ceil(n.t);return h<n.countShown&&h>=1&&(n.countShown=h,i.push({type:"count",n:h})),n.t<=0&&(n.phase="play",i.push({type:"go"})),i}if(n.phase==="matchEnd")return i;const r=n.phase==="play";n.time+=e;const o=Math.max(1,Math.ceil(e/.0167)),a=e/o,c=sf(n),l=n.obst.filter(h=>Math.hypot(h.x,h.z)-(h.br??h.r??0)<c-2);for(let h=0;h<o;h++){for(const f of n.cars)f.alive&&(rM(f,r&&t[f.i]||s,a),oM(f,c,l,i),n.mode==="snake"&&cM(f));aM(n.cars,i,n.mode==="duel"&&r)}if(!r){if(n.t-=e,n.t<=0){const h=n.scores.findIndex(f=>f>=n.first);h>=0?(n.phase="matchEnd",n.winner=h,i.push({type:"matchEnd",winner:h})):(n.round++,Ap(n,i))}return i}if(n.mode==="duel"){const h=i.find(f=>f.type==="side");h&&(i.push({type:"score",attacker:h.attacker.i,victim:h.victim.i}),dl(n,h.attacker.i,i))}else{for(const d of n.cars)if(d.alive){const g=ec(d);for(const x of n.orbs)if(x.on&&Math.min(Math.hypot(x.x-g[0].x,x.z-g[0].z),Math.hypot(x.x-d.x,x.z-d.z))<2.5){x.on=!1,d.orbs++;const p=Math.min(yp,Math.floor(d.orbs/2));p>d.segs&&i.push({type:"grow",car:d.i,segs:p}),d.segs=p,i.push({type:"pickup",car:d.i})}}let h=n.orbs.filter(d=>d.on).length;for(;h<wp;)Tp(n),h++;for(const d of n.orbs)d.on&&Math.hypot(d.x,d.z)>c-2&&(d.on=!1);const f=n.cars.map(d=>d.alive?Ep(d):[]);for(const d of n.cars){if(!d.alive)continue;const g=ec(d).slice(0,2);t:for(const x of n.cars)if(!(x===d||!x.alive)){for(const m of f[x.i])for(const p of lM(m))for(const _ of g)if(Math.hypot(_.x-p.x,_.z-p.z)<2*Mp){d.alive=!1,d.killer=x.i,i.push({type:"kill",victim:d.i,killer:x.i}),dM(n,d,f[d.i]);break t}}}const u=fM(n);if(u.length<=1)dl(n,u.length?u[0].i:-1,i);else if(n.time>150){const d=Math.max(...u.map(x=>x.segs)),g=u.filter(x=>x.segs===d);dl(n,g.length===1?g[0].i:-1,i)}}return i}function dM(n,t,e){Uo(n,t.x,t.z);for(const i of e)Uo(n,i.x+(Math.random()-.5)*2,i.z+(Math.random()-.5)*2),Uo(n,i.x+(Math.random()-.5)*3,i.z+(Math.random()-.5)*3);t.segs=0}const zn=[{name:"Hachi",power:22,top:46,grip:7.5,drift:2.8,steer:1.9},{name:"Corsa-S",power:30,top:54,grip:7,drift:2.4,steer:2},{name:"Muscle",power:40,top:62,grip:6.5,drift:2.1,steer:1.8}],Th=[{name:"Comfort",grip:.93,slide:1.05,wet:1.1},{name:"Sport",grip:1,slide:1,wet:1},{name:"Semi-slick",grip:1.08,slide:1,wet:.8},{name:"Drift",grip:.97,slide:.85,wet:.95}],pM=[{title:"Suspension",items:[{key:"rideH",label:"Ride height",min:-70,max:30,step:5,unit:" mm",hint:"Lower = lower centre of gravity. Below -55 mm the car bottoms out."},{key:"springF",label:"Spring rate front",min:3,max:14,step:.5,unit:" kg/mm",hint:"Stiffer front adds understeer."},{key:"springR",label:"Spring rate rear",min:3,max:14,step:.5,unit:" kg/mm",hint:"A stiffer rear loads the rear tyres harder."},{key:"damperF",label:"Damper front",min:1,max:10,step:1,unit:"",hint:"Controls how fast the body settles after a bump."},{key:"damperR",label:"Damper rear",min:1,max:10,step:1,unit:"",hint:"Soft is floaty, stiff settles quickly."},{key:"arbF",label:"Anti-roll bar front",min:1,max:10,step:1,unit:"",hint:"Stiffer front bar is more understeer."},{key:"arbR",label:"Anti-roll bar rear",min:1,max:10,step:1,unit:"",hint:"Stiffer rear bar is more oversteer."}]},{title:"Alignment",items:[{key:"camberF",label:"Camber front",min:-8,max:2,step:.1,unit:" deg",hint:"Best grip near -3 degrees."},{key:"camberR",label:"Camber rear",min:-8,max:2,step:.1,unit:" deg",hint:"Rear camber helps the tail hold."},{key:"toeF",label:"Toe front",min:-1,max:1,step:.05,unit:" deg",hint:"Toe out is quicker turn in."},{key:"toeR",label:"Toe rear",min:-1,max:1,step:.05,unit:" deg",hint:"Toe in is a stable rear."},{key:"caster",label:"Caster",min:3,max:9,step:.1,unit:" deg",hint:"More caster is better stability."}]},{title:"Tyres and wheels",items:[{key:"compound",label:"Compound",type:"choice",hint:"Drift tyres let go on purpose."},{key:"pressF",label:"Pressure front",min:24,max:44,step:1,unit:" psi",hint:"Best grip around 31 psi."},{key:"pressR",label:"Pressure rear",min:24,max:44,step:1,unit:" psi",hint:"Drifters run 40 plus in the rear."},{key:"offset",label:"Wheel offset",min:-20,max:40,step:2,unit:" mm",hint:"Pushes the wheels out. Look only."}]},{title:"Drivetrain",items:[{key:"finalDrive",label:"Final drive",min:3,max:5,step:.05,unit:":1",hint:"Higher equals punchier accel."},{key:"diff",label:"Diff lock",min:0,max:100,step:5,unit:" %",hint:"Locked diff is easy to kick into a slide."},{key:"boost",label:"Turbo boost",min:0,max:20,step:1,unit:" psi",hint:"More power and a bit more top speed."},{key:"weight",label:"Weight reduction",min:0,max:150,step:5,unit:" kg",hint:"Lighter means quicker and grippier."}]},{title:"Brakes",items:[{key:"bias",label:"Brake bias (front)",min:50,max:80,step:1,unit:" %",hint:"Too much rear bias locks the rear."}]},{title:"Aero",items:[{key:"wing",label:"Rear wing",min:0,max:10,step:1,unit:"",hint:"More downforce at speed, more drag."},{key:"splitter",label:"Front splitter",min:0,max:10,step:1,unit:"",hint:"Front downforce. Sticks out further."}]}];function ss(n){return{rideH:0,springF:7,springR:6,damperF:5,damperR:5,arbF:5,arbR:4,camberF:-1.5,camberR:-1,toeF:0,toeR:.1,caster:5.5,compound:1,pressF:32,pressR:32,offset:0,finalDrive:n.fd,diff:40,boost:0,weight:0,bias:65,wing:n.wing,splitter:0}}const Hu={Stock:()=>({}),Grip:()=>({rideH:-30,springF:9.5,springR:8.5,damperF:6,damperR:6,arbF:6,arbR:5,camberF:-3.2,camberR:-2,toeF:-.1,toeR:.2,caster:6.5,compound:2,pressF:31,pressR:31,diff:25,weight:60,wing:6,splitter:5}),Drift:()=>({rideH:-20,springF:8,springR:7,arbF:3,arbR:7,camberF:-4.5,camberR:-.5,toeF:-.4,toeR:-.1,caster:7.5,compound:3,pressF:30,pressR:40,diff:100,boost:8,bias:60,wing:2,splitter:0,offset:12}),Street:()=>({rideH:10,springF:5,springR:4.5,damperF:4,damperR:4,arbF:4,arbR:3,camberF:-.5,camberR:-.5,compound:0,diff:20})},Rp=n=>n*n,Hn=(n,t,e)=>Math.min(e,Math.max(t,n)),Da=n=>.06*(1-Rp((n+3)/4)),Ua=n=>.025*(1-Rp((n-31)/8)),Gu=n=>Hn(-n,-30,70)/70*.04;function Hr(n,t,e){const i=ss(t),s=t.mods,r=Th[e.compound],o=Th[i.compound],a=r.grip/o.grip,c=e.springF+.8*e.arbF,l=e.springR+.8*e.arbR,h=i.springF+.8*i.arbF,f=i.springR+.8*i.arbR,u=(l-c)/(l+c)-(f-h)/(f+h),d=Gu(e.rideH)-Gu(i.rideH),g=e.rideH<-55&&i.rideH>=-55?.97:1,x=e.wing-i.wing+.6*(e.splitter-i.splitter),m=e.weight-i.weight,p=e.boost-i.boost,_=(e.diff-i.diff)/100,v=e.finalDrive/i.finalDrive,M=a*(1+Da(e.camberF)-Da(i.camberF)+.008*(e.caster-i.caster)+Ua(e.pressF)-Ua(i.pressF)+d+.1*u),P=a*(1+Da(e.camberR)-Da(i.camberR)+Ua(e.pressR)-Ua(i.pressR)+d-.2*u+.04*(e.toeR-i.toeR))*g*(1+3e-4*m),T=e.springF+e.springR+.8*(e.arbF+e.arbR)-(i.springF+i.springR+.8*(i.arbF+i.arbR)),A=n.power*s.power*Math.pow(v,.8)*(1+.014*p)*(1+7e-4*m),C=n.top*s.top*Math.pow(v,-.55)*(1+.004*p)*(1-.0025*x)*(1+2e-4*m),b=Math.max(3,n.grip*s.grip*P),S=Math.max(1,n.drift*s.drift*P*(r.slide/o.slide)*(1-.3*_)*(1-.011*(Math.max(0,e.pressR-32)-Math.max(0,i.pressR-32)))),L=Math.max(1,n.steer*s.steer*(1+1.2*(M-1))*(1-.06*(e.toeF-i.toeF))*(1-.012*(e.caster-i.caster))*(1-.1*_)*(1+.003*T)),H=(e.springF+e.springR)/2,I=(e.damperF+e.damperR)/2,O=(e.arbF+e.arbR)/2,W={power:A,top:C,grip:b,drift:S,steer:L,wetMul:.7*r.wet/o.wet,entry:Hn(1-.5*_,.6,1.3),aeroK:3e-6*x,dragK:.12*Math.max(0,Math.abs(e.toeF)+Math.abs(e.toeR)-Math.abs(i.toeF)-Math.abs(i.toeR)),brakeLoose:Hn((.6-e.bias/100)/.08,0,1),brakeUnder:Hn((e.bias/100-.72)*5,0,.5),bounce:{w:2*Math.PI*(.9+.11*H),z:.1+.05*I,pitchAmp:Hn(8.5/H,.5,2),rollAmp:Hn(14/(H+1.5*O),.4,2.2)}},Y=P-M;return W.balance=Y>.03?"Understeer":Y<-.03?"Oversteer":"Neutral",W.ratings={Acceleration:Hn(A/50,0,1),"Top speed":Hn(C/75,0,1),Grip:Hn(b/10,0,1),Slideability:Hn((3.4-S)/2.2,0,1),"Turn-in":Hn(L/2.8,0,1),Downforce:Hn((e.wing+.6*e.splitter)/16,0,1)},W}function mM(n){const e=new we,i=new Float32Array(900*3),s=new Float32Array(900);for(let a=0;a<900;a++)i[a*3+0]=(Math.random()-.5)*200,i[a*3+1]=Math.random()*60,i[a*3+2]=(Math.random()-.5)*200,s[a]=30+Math.random()*20;e.setAttribute("position",new Ge(i,3));const r=new Jh({color:10537215,size:.12,transparent:!0,opacity:.75,depthWrite:!1,fog:!1}),o=new Qd(e,r);return o.frustumCulled=!1,n.add(o),{group:o,update(a,c,l){for(let h=0;h<900;h++)i[h*3+1]-=s[h]*a,i[h*3+1]<0&&(i[h*3+0]=c+(Math.random()-.5)*200,i[h*3+1]=60+Math.random()*20,i[h*3+2]=l+(Math.random()-.5)*200);e.attributes.position.needsUpdate=!0},dispose(){n.remove(o),e.dispose(),r.dispose()}}}function gM(n){const e=new we,i=new Float32Array(600*3),s=new Float32Array(600),r=new Float32Array(600);for(let c=0;c<600;c++)i[c*3+0]=(Math.random()-.5)*220,i[c*3+1]=Math.random()*80,i[c*3+2]=(Math.random()-.5)*220,s[c]=1.5+Math.random()*2.5,r[c]=(Math.random()-.5)*1.5;e.setAttribute("position",new Ge(i,3));const o=new Jh({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1,fog:!1}),a=new Qd(e,o);return a.frustumCulled=!1,n.add(a),{group:a,update(c,l,h){for(let f=0;f<600;f++)i[f*3+1]-=s[f]*c,i[f*3+0]+=r[f]*c,i[f*3+1]<0&&(i[f*3+0]=l+(Math.random()-.5)*220,i[f*3+1]=80+Math.random()*20,i[f*3+2]=h+(Math.random()-.5)*220);e.attributes.position.needsUpdate=!0},dispose(){n.remove(a),e.dispose(),o.dispose()}}}function xM(n,t){t&&t.dispose()}class vM extends Jd{constructor(){super();const t=new Mt;t.deleteAttribute("uv");const e=new un({side:je}),i=new un,s=new lp(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new xt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new xt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new xt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new xt(t,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new xt(t,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new xt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const f=new xt(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const u=new xt(t,mr(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const d=new xt(t,mr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new xt(t,mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new xt(t,mr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new xt(t,mr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new xt(t,mr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function mr(n){const t=new sn;return t.color.setScalar(n),t}function No(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new we;let l=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=n[u].attributes.position.count}c.setIndex(f)}for(const h in r){const f=Vu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);const g=Vu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Vu(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ge(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Sc=(n,t,e)=>Math.min(e,Math.max(t,n)),pl=(n,t,e)=>n+(t-n)*e;function Qe(n){let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function rf(n=1){const t=(i,s)=>{const r=Math.sin(i*127.1+s*311.7+n*74.7)*43758.5453;return r-Math.floor(r)},e=i=>i*i*(3-2*i);return(i,s)=>{const r=Math.floor(i),o=Math.floor(s),a=e(i-r),c=e(s-o);return pl(pl(t(r,o),t(r+1,o),a),pl(t(r,o+1),t(r+1,o+1),a),c)}}const We=(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e};function Xe(n,{srgb:t=!0,aniso:e=8}={}){const i=new gi(n);return i.wrapS=i.wrapT=zi,i.anisotropy=e,t&&(i.colorSpace=en),i}function hn(n,t,e,i=0,s=0){const r=n.attributes.uv;for(let o=0;o<r.count;o++)r.setXY(o,r.getX(o)*t+i,r.getY(o)*e+s);return r.needsUpdate=!0,n}function nc(n,t,e,i,s,r=8){const o=new Mt(n,t,e),a=o.attributes.uv,c=(l,h,f)=>{for(let u=l*4;u<l*4+4;u++)a.setXY(u,a.getX(u)*h,a.getY(u)*f)};return c(0,e/i,t/s),c(1,e/i,t/s),c(2,n/r,e/r),c(3,n/r,e/r),c(4,n/i,t/s),c(5,n/i,t/s),o}function _M(n,t=2){const e=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,e,i).data,r=We(e,i),o=r.getContext("2d"),a=o.createImageData(e,i),c=a.data,l=(h,f)=>s[((f+i)%i*e+(h+e)%e)*4]/255;for(let h=0;h<i;h++)for(let f=0;f<e;f++){const u=(l(f+1,h)-l(f-1,h))*t,d=(l(f,h+1)-l(f,h-1))*t,g=Math.hypot(u,d,1),x=(h*e+f)*4;c[x]=(-u/g*.5+.5)*255,c[x+1]=(d/g*.5+.5)*255,c[x+2]=(1/g*.5+.5)*255,c[x+3]=255}return o.putImageData(a,0,0),Xe(r,{srgb:!1})}const ct=(n,t={})=>new un({color:n,roughness:.85,metalness:0,...t}),po=new Ue;function ge(n,t,e,i=0,s=1,r=s,o=s){return po.position.set(n,t,e),po.rotation.set(0,i,0),po.scale.set(s,r,o),po.updateMatrix(),po.matrix.clone()}function re(n,t,e,{cast:i=!0,receive:s=!0}={}){const r=new li(n,t,Math.max(1,e.length)),o=new $t;return e.forEach((a,c)=>{const l=a.m||a;r.setMatrixAt(c,l),a.c!==void 0&&r.setColorAt(c,o.set(a.c))}),r.count=e.length,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.castShadow=i,r.receiveShadow=s,r.frustumCulled=!1,r}function dt(n,t,e=0,i=0,s=0,{ry:r=0,cast:o=!0,receive:a=!0}={}){const c=new xt(n,t);return c.position.set(e,i,s),c.rotation.y=r,c.castShadow=o,c.receiveShadow=a,c}const ml=new Map,Jr=(n,t)=>(ml.has(n)||ml.set(n,t()),ml.get(n));function Un(n=1,{size:t=256,contrast:e=.12,blobs:i=36,streaks:s=0,base:r=232}={}){return Jr("speck"+[n,t,e,i,s,r],()=>{const o=We(t,t),a=o.getContext("2d"),c=Qe(n);a.fillStyle=`rgb(${r},${r},${r})`,a.fillRect(0,0,t,t);for(let l=0;l<i;l++){const h=c()*t,f=c()*t,u=t*(.08+c()*.2),d=c()>.5?255:0;for(const g of[-t,0,t])for(const x of[-t,0,t]){const m=a.createRadialGradient(h+g,f+x,0,h+g,f+x,u);m.addColorStop(0,`rgba(${d},${d},${d},${e*.6})`),m.addColorStop(1,`rgba(${d},${d},${d},0)`),a.fillStyle=m,a.fillRect(0,0,t,t)}}for(let l=0;l<t*t*.05;l++){const h=c()>.5?255:0;a.fillStyle=`rgba(${h},${h},${h},${c()*e})`,a.fillRect(c()*t,c()*t,1+c()*1.5,1+c()*1.5)}for(let l=0;l<s;l++){a.strokeStyle=`rgba(0,0,0,${.05+c()*.1})`,a.lineWidth=1;const h=c()*t,f=c()*t;a.beginPath(),a.moveTo(h,f),a.lineTo(h+(c()-.5)*3,f-3-c()*5),a.stroke()}return Xe(o)})}function Gr(n=3){return Jr("asphalt"+n,()=>{const t=We(256,256),e=t.getContext("2d"),i=Qe(n);e.fillStyle="#3c3f46",e.fillRect(0,0,256,256);for(let s=0;s<9e3;s++){const r=40+i()*55|0;e.fillStyle=`rgba(${r},${r},${r+4},${.25+i()*.4})`,e.fillRect(i()*256,i()*256,1+i()*1.2,1+i()*1.2)}for(let s=0;s<14;s++){const r=i()*256,o=i()*256,a=18+i()*40,c=e.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,`rgba(0,0,0,${.08+i()*.1})`),c.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=c,e.fillRect(r-a,o-a,a*2,a*2)}e.strokeStyle="rgba(15,15,18,0.55)",e.lineWidth=1;for(let s=0;s<4;s++){let r=i()*256,o=i()*256;e.beginPath(),e.moveTo(r,o);for(let a=0;a<7;a++)r+=(i()-.5)*30,o+=(i()-.5)*30,e.lineTo(r,o);e.stroke()}return Xe(t)})}function MM(n=5){return Jr("lane"+n,()=>{const i=We(512,512),s=i.getContext("2d"),r=Qe(n);s.drawImage(Gr(n).image,0,0,512,512),s.drawImage(Gr(n+1).image,0,0,256,256),s.globalAlpha=.18,s.fillStyle="#000";for(const c of[.14,.36,.64,.86])s.fillRect(0,(c-.045)*512,512,.09*512);s.globalAlpha=1;const o=(c,l,h,f)=>{if(s.fillStyle=h,!f){s.fillRect(0,c,512,l);return}for(let u=0;u<512;u+=f[0]+f[1])s.fillRect(u,c,f[0],l)},a=512/18;o(.45*a,.16*a,"#e9e9e4"),o(512-.61*a,.16*a,"#e9e9e4"),o(8.76*a,.14*a,"#e8b92a"),o(9.1*a,.14*a,"#e8b92a"),o(4.4*a,.14*a,"#e9e9e4",[3*a,6*a]),o(13.5*a,.14*a,"#e9e9e4",[3*a,6*a]),s.globalCompositeOperation="destination-out";for(let c=0;c<900;c++)s.fillStyle=`rgba(0,0,0,${r()*.5})`,s.fillRect(r()*512,r()*512,1+r()*3,1+r()*2);return s.globalCompositeOperation="destination-over",s.fillStyle="#3c3f46",s.fillRect(0,0,512,512),Xe(i)})}function Ho(n=7,t=196,e=150,i=64){return Jr("pave"+[n,t,e,i],()=>{const r=We(256,256),o=r.getContext("2d"),a=Qe(n);for(let c=0;c<256;c+=i)for(let l=0;l<256;l+=i){const h=t+(a()-.5)*16;o.fillStyle=`rgb(${h},${h},${h-3})`,o.fillRect(l,c,i,i)}o.fillStyle=`rgb(${e},${e},${e})`;for(let c=0;c<256;c+=i)o.fillRect(c,0,2,256),o.fillRect(0,c,256,2);for(let c=0;c<2500;c++){const l=a()>.5?255:0;o.fillStyle=`rgba(${l},${l},${l},${a()*.08})`,o.fillRect(a()*256,a()*256,1.5,1.5)}return Xe(r)})}function vn(n=9){return Jr("concrete"+n,()=>{const e=We(256,256),i=e.getContext("2d"),s=Qe(n);i.fillStyle="#b9bbbd",i.fillRect(0,0,256,256);for(let r=0;r<6e3;r++){const o=150+s()*80|0;i.fillStyle=`rgba(${o},${o},${o},${s()*.4})`,i.fillRect(s()*256,s()*256,1+s()*2,1+s()*2)}return i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,0,256,2),i.fillRect(0,256/2,256,2),Xe(e)})}function gl(n=11){return Jr("gravel"+n,()=>{const e=We(256,256),i=e.getContext("2d"),s=Qe(n);i.fillStyle="#b8a67e",i.fillRect(0,0,256,256);for(let r=0;r<7e3;r++){const o=120+s()*120|0;i.fillStyle=`rgba(${o},${o-12},${o-45},${.35+s()*.4})`,i.fillRect(s()*256,s()*256,1+s()*2.5,1+s()*2)}return Xe(e)})}function wc(n=2981797,{opacity:t=.92,repeat:e=1}={}){const s=We(128,128),r=s.getContext("2d"),o=r.createImageData(128,128),a=Qe(21),c=Array.from({length:7},()=>({kx:1+(a()*4|0),ky:1+(a()*4|0),p:a()*6.28,a:.4+a()*.6}));for(let f=0;f<128;f++)for(let u=0;u<128;u++){let d=0;for(const x of c)d+=x.a*Math.sin((x.kx*u+x.ky*f)/128*Math.PI*2+x.p);const g=(f*128+u)*4;o.data[g]=o.data[g+1]=o.data[g+2]=Sc(128+d*18,0,255),o.data[g+3]=255}r.putImageData(o,0,0);const l=_M(s,3.2);return l.repeat.set(e,e),{mat:new un({color:n,roughness:.06,metalness:.15,normalMap:l,normalScale:new gt(.6,.6),transparent:t<1,opacity:t,envMapIntensity:1.6}),update(f){l.offset.x+=f*.012,l.offset.y+=f*.007}}}function xl(n,t){const e=new Zo(n,2),i=e.attributes.position,s=rf(t);for(let r=0;r<i.count;r++){const o=i.getX(r),a=i.getY(r),c=i.getZ(r),l=1+.22*(s(o*.9+5,c*.9+a*.7)-.5);i.setXYZ(r,o*l,a*l*.88,c*l)}return e.computeVertexNormals(),e}function Rr(n,t,e,{kind:i="oak",color:s=4161338,seed:r=4,collide:o=!0,nm:a=!0}={}){if(!e.length)return;const c=Qe(r),l=new $t,h=e.length,f=new fe,u=new fe,d=new Nt(.28,.5,3.6,8);d.translate(0,1.8,0);const g=new li(d,ct(5915443,{roughness:1}),h),x=i==="oak"?[[xl(2.9,r+1),0,5.4,0],[xl(2.2,r+2),1.5,4.5,.6],[xl(2,r+3),-1.3,6.5,-.5]]:[[new Dn(2.7,4.6,9),0,4.3,0],[new Dn(2.1,4,9),0,6.6,0],[new Dn(1.4,3.4,9),0,8.8,0]],m=ct(16777215,{roughness:.9}),p=x.map(([_])=>{const v=new li(_,m,h);return v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,v});e.forEach((_,v)=>{f.copy(ge(_.x,_.y||0,_.z,_.ry??c()*6.28,_.s,_.s*(.92+c()*.2),_.s)),g.setMatrixAt(v,f),l.setHex(s).offsetHSL((c()-.5)*.05,(c()-.5)*.1,(c()-.5)*.1),x.forEach(([,M,P,T],A)=>{p[A].setMatrixAt(v,u.multiplyMatrices(f,new fe().makeTranslation(M,P,T))),p[A].setColorAt(v,l)}),o&&t.push(qn(_.x,_.z,.55*_.s,{nm:a}))}),g.instanceMatrix.needsUpdate=!0,p.forEach(_=>{_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0)}),g.castShadow=!0,g.frustumCulled=!1,n.add(g,...p)}function Go(n,t,{h:e=1.25,t:i=.9,color:s=12172221,tex:r=vn(),gapZ:o=null,flat:a=!0,segs:c=160}={}){let l=0,h=Math.PI*2;if(o!=null){const g=Math.acos(Sc(o/t,-1,1));l=g,h=Math.PI*2-g*2}const f=[[t,0],[t,e*.82],[t+.12,e],[t+i-.12,e],[t+i,e*.82],[t+i,0]].map(([g,x])=>new gt(g,x)),u=new Ko(f,c,l,h);hn(u,Math.PI*2*t*(h/(Math.PI*2))/5,1);const d=dt(u,ct(s,{map:r,roughness:.9,flatShading:a,side:Ce}));return n.add(d),d}function bc(n,{count:t=16,rMin:e=520,rMax:i=760,hMin:s=60,hMax:r=170,wMin:o=140,wMax:a=260,colors:c=[8229816],seed:l=8,snow:h=!1}={}){const f=Qe(l),u=rf(l);for(let d=0;d<t;d++){const g=d/t*Math.PI*2+(f()-.5)*.25,x=e+f()*(i-e),m=s+f()*(r-s),p=o+f()*(a-o),_=new Yn(1,28,16),v=_.attributes.position,M=[],P=new $t(c[d%c.length]),T=P.clone().lerp(new $t(h?16777215:14674159),h?.75:.25),A=new $t;for(let b=0;b<v.count;b++){const S=v.getX(b),L=v.getY(b),H=v.getZ(b),I=1+.28*(u(S*2+d*7,H*2+L*2)-.5)+.12*(u(S*5+d,H*5)-.5),O=Math.max(L,-.15)*m*I,W=I*(L<0?1:1-L*.15);v.setXYZ(b,S*p*W,O,H*p*W*.8),A.copy(P).lerp(T,Sc((O/m-.45)*2.2,0,1)),M.push(A.r,A.g,A.b)}_.setAttribute("color",new Jt(M,3)),_.computeVertexNormals();const C=new xt(_,new un({vertexColors:!0,roughness:1}));C.position.set(Math.sin(g)*x,-m*.05,Math.cos(g)*x),C.rotation.y=f()*6.28,n.add(C)}}function Ec(n,t=12,e=!1){if(e){const c=new li(new Zo(1.2,0),new sn({color:16777215,fog:!1}),160),l=Qe(t);for(let h=0;h<160;h++){const f=l()*6.28,u=900+l()*500,d=200+l()*800;c.setMatrixAt(h,ge(Math.sin(f)*u,d,Math.cos(f)*u,0,.6+l()*1.2))}n.add(c);return}const i=We(128,128),s=i.getContext("2d"),r=Qe(t);for(let a=0;a<9;a++){const c=30+r()*68,l=50+r()*28,h=20+r()*26,f=s.createRadialGradient(c,l,0,c,l,h);f.addColorStop(0,"rgba(255,255,255,0.55)"),f.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=f,s.fillRect(0,0,128,128)}const o=new gi(i);for(let a=0;a<12;a++){const c=r()*6.28,l=520+r()*520,h=220+r()*200,f=new Zh(new _c({map:o,transparent:!0,opacity:.8,fog:!1,depthWrite:!1}));f.scale.set(220+r()*160,70+r()*40,1),f.position.set(Math.sin(c)*l,h,Math.cos(c)*l),n.add(f)}}function Wu(n,t,e,{closed:i=!1,tile:s=6}={}){const r=n.length,o=[],a=[],c=[];let l=0;for(let u=0;u<r;u++){const d=n[u],g=n[i?(u-1+r)%r:Math.max(0,u-1)],x=n[i?(u+1)%r:Math.min(r-1,u+1)];let m=x.x-g.x,p=x.z-g.z;const _=Math.hypot(m,p)||1;m/=_,p/=_;const v=-p,M=m;u>0&&(l+=Math.hypot(d.x-n[u-1].x,d.z-n[u-1].z)),o.push(d.x+v*t/2,e,d.z+M*t/2,d.x-v*t/2,e,d.z-M*t/2),a.push(0,l/s,t/s,l/s)}const h=i?r:r-1;for(let u=0;u<h;u++){const d=(u+1)%r,g=u*2,x=u*2+1,m=d*2,p=d*2+1;c.push(g,m,x,x,m,p)}const f=new we;return f.setAttribute("position",new Jt(o,3)),f.setAttribute("uv",new Jt(a,2)),f.setIndex(c),f.computeVertexNormals(),f}const gr=new Map;function yM(n,t){const e=n==="shop"?768:640,i=n==="shop"?320:512,s=We(e,i),r=s.getContext("2d"),o=Qe(n.length*977+(t?5:1)),a=n==="shop"?4:6,c=n==="shop"?1:4,l=e/a,h=i/c;t&&(r.fillStyle="#000",r.fillRect(0,0,e,i));const f=()=>{const u=175+o()*80|0;return`rgb(${u},${u*.86|0},${u*.55|0})`};if(n==="glass"){t||(r.fillStyle="#dfe6ec",r.fillRect(0,0,e,i));for(let u=0;u<c;u++)for(let d=0;d<a;d++){const g=d*l,x=u*h;if(t){o()<.3&&(r.fillStyle=f(),r.fillRect(g+3,x+5,l-6,h-24));continue}const m=(o()-.5)*18,p=r.createLinearGradient(0,x,0,x+h);p.addColorStop(0,`rgb(${111+m},${148+m},${179+m})`),p.addColorStop(1,`rgb(${46+m},${74+m},${99+m})`),r.fillStyle=p,r.fillRect(g+3,x+5,l-6,h-10),o()<.4&&(r.fillStyle="rgba(255,255,255,0.10)",r.beginPath(),r.moveTo(g+3,x+h-5),r.lineTo(g+l*.6,x+5),r.lineTo(g+l-3,x+5),r.lineTo(g+l*.4,x+h-5),r.fill()),r.fillStyle="#c7d0d8",r.fillRect(g+3,x+h-16,l-6,11)}}else if(n==="punched"){if(!t){r.fillStyle="#e4ddd0",r.fillRect(0,0,e,i);for(let u=0;u<5e3;u++){const d=o()>.5?255:0;r.fillStyle=`rgba(${d},${d},${d},${o()*.07})`,r.fillRect(o()*e,o()*i,2,2)}}for(let u=0;u<c;u++)for(let d=0;d<a;d++){const g=d*l+l*.2,x=u*h+h*.2,m=l*.6,p=h*.58;if(t){o()<.3&&(r.fillStyle=f(),r.fillRect(g,x,m,p));continue}const _=r.createLinearGradient(0,x,0,x+p);_.addColorStop(0,"#3d566b"),_.addColorStop(1,"#1f3142"),r.fillStyle=_,r.fillRect(g,x,m,p),r.fillStyle="#f6f1e8",r.fillRect(g-5,x+p,m+10,6),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(g-2,x-5,m+4,5),r.fillStyle="rgba(210,225,235,0.55)",r.fillRect(g+m/2-1,x,2,p)}}else if(n==="strip"){t||(r.fillStyle="#d3d7dc",r.fillRect(0,0,e,i));for(let u=0;u<c;u++){const d=u*h+h*.2,g=h*.54;if(t){for(let m=0;m<a*2;m++)o()<.3&&(r.fillStyle=f(),r.fillRect(m*l/2+2,d,l/2-4,g));continue}const x=r.createLinearGradient(0,d,0,d+g);x.addColorStop(0,"#5a7a94"),x.addColorStop(1,"#2a4256"),r.fillStyle=x,r.fillRect(0,d,e,g),r.fillStyle="#c4cad0";for(let m=0;m<=a*2;m++)r.fillRect(m*l/2-2,d,4,g);r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(0,d+g,e,8)}}else{t||(r.fillStyle="#cdc4b6",r.fillRect(0,0,e,i));const u=["#b23a3a","#2f5f8f","#2f7a4f","#c7922a","#5a3d7a","#e0e0e0"];for(let d=0;d<a;d++){const g=d*l;if(t){r.fillStyle=f(),r.fillRect(g+12,92,l-56,i-100),r.fillStyle=u[(d+2)%6],r.fillRect(g+12,18,l-24,50);continue}const x=r.createLinearGradient(0,90,0,i);x.addColorStop(0,"#5c7f98"),x.addColorStop(1,"#223645"),r.fillStyle=x,r.fillRect(g+12,92,l-56,i-100),r.fillStyle="#2c3138",r.fillRect(g+l-40,92,26,i-92),r.fillStyle="rgba(170,200,220,0.35)",r.fillRect(g+l-36,100,18,i-120),r.fillStyle=u[(d*2+1)%6],r.fillRect(g+12,18,l-24,50),r.fillStyle="rgba(255,255,255,0.75)",r.fillRect(g+28,36,(l-56)*(.5+o()*.4),10),r.fillStyle="rgba(0,0,0,0.3)",r.fillRect(g+12,70,l-24,8)}}return s}function Xu(n,t,e){const i=n+t+e;if(gr.has(i))return gr.get(i);const s=a=>{const c="tex"+n+a;return gr.has(c)||gr.set(c,Xe(yM(n,a),{srgb:!0})),gr.get(c)},r={glass:[.2,.6],punched:[.85,0],strip:[.45,.25],shop:[.4,.1]}[n],o=ct(t,{map:s(!1),roughness:r[0],metalness:r[1],envMapIntensity:n==="glass"?1.4:.7});return e&&(o.emissive=new $t(16777215),o.emissiveMap=s(!0),o.emissiveIntensity=1.3),gr.set(i,o),o}function SM(n,t){const{group:e,obst:i,updaters:s}=t,r=Qe(20260),o=n.wall,a=!!n.night,c=58,l=40,h=18,f=h/2,u=(D,z)=>Math.abs(D)<49&&Math.abs(z)<49,d=(D,z,w=0,y)=>{if(!D.length)return;const F=dt(No(D),z,0,w,0,y||{cast:!1});return e.add(F),F},g={polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1},x=dt(hn(new _n(o+900,48).rotateX(-Math.PI/2),150,150),ct(8027778,{map:Un(2)}),0,-.06,0,{cast:!1}),m=dt(hn(new _n(o+.5,96).rotateX(-Math.PI/2),o/2,o/2),ct(14473424,{map:Ho(7),roughness:.9}),0,-.02,0,{cast:!1});e.add(x,m);const p=(D,z)=>!u(D,z)&&Math.hypot(Math.abs(D)+f,Math.abs(z)+f)<o-1.5,_=[];for(let D=-3;D<=3;D++)for(let z=-3;z<=3;z++)p(D*c,z*c)&&_.push({x:D*c,z:z*c});const v=[];for(const D of[!0,!1])for(let z=-3;z<=3;z++){const w=z*c,y=Math.sqrt((o-1.5)**2-(Math.abs(w)+f)**2);if(!(y>0))continue;const F=_.filter(k=>(D?k.z:k.x)===w).map(k=>D?k.x:k.z).sort((k,vt)=>k-vt);let X=-y;const j=(k,vt)=>{if(vt-k<2)return;const mt=(k+vt)/2,yt=D?mt:w,Ft=D?w:mt;u(yt,Ft)||v.push({alongX:D,a0:k,a1:vt,fixed:w,len:vt-k,cx:yt,cz:Ft})};for(const k of F)j(X,k-f),X=k+f;j(X,y)}const M=v.map(D=>{const z=new Te(D.len,h).rotateX(-Math.PI/2);return hn(z,D.len/18,1),D.alongX||z.rotateY(Math.PI/2),z.translate(D.cx,.03,D.cz)});d(M,ct(16777215,{map:MM(),roughness:.9,...g}),0,{cast:!1,receive:!0}),d(_.map(D=>new Te(h,h).rotateX(-Math.PI/2).translate(D.x,.04,D.z)),ct(16777215,{map:Gr(),roughness:.9,...g}),0,{cast:!1,receive:!0});const P=[],T=new Te(.55,3).rotateX(-Math.PI/2);for(const D of _)for(const[z,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=D.x+z*(f+2.4),F=D.z+w*(f+2.4);if(!(Math.hypot(y,F)>o-6))for(let X=-7.2;X<=7.3;X+=1.2)P.push(ge(z?y:D.x+X,.055,z?D.z+X:F,z?Math.PI/2:0))}e.add(re(T,ct(15658728,{roughness:.85,...g}),P,{cast:!1}));const A=[],C=[];for(let D=-4;D<=3;D++)for(let z=-4;z<=3;z++){const w=(D+.5)*c,y=(z+.5)*c;u(w,y)||Math.hypot(Math.abs(w)+l/2,Math.abs(y)+l/2)>o-5||C.push({cx:w,cz:y,d:Math.hypot(w,y)})}A.push(...C.map(D=>hn(new Te(l,l).rotateX(-Math.PI/2),l/4,l/4).translate(D.cx,.035,D.cz))),A.push(hn(new Te(98,98).rotateX(-Math.PI/2),98/4,98/4).translate(0,.035,0)),d(A,ct(14868182,{map:Ho(7,205,158),roughness:.88,...g}),0,{cast:!1,receive:!0});const b={glass:[12572394,10469592,13228514,9417673,11060436],punched:[15260868,14272424,12759194,15525596,11976648],strip:[14738664,12897492,14998732]},S=D=>D[r()*D.length|0],L=ct(6974834,{map:Un(5,{contrast:.2}),roughness:.95}),H=[],I=[],O=(D,z,w,y,F,X,j,k)=>{const vt=Xu(j,k,a);return e.add(dt(nc(w,X,y,j==="shop"?12:18,j==="shop"?5:14.4,8),[vt,vt,L,L,vt,vt],D,F+X/2,z)),F+X},W=(D,z,w,y,F,X)=>{for(let j=0,k=X?3:2;j<k;j++)H.push(ge(D+(r()-.5)*(w-7),F+.7,z+(r()-.5)*(y-7),r()<.5?0:Math.PI/2,.8+r()*.5));X&&I.push(ge(D+(r()-.5)*w*.3,F,z+(r()-.5)*y*.3,0,1,.7+r()*.8,1))},Y=[],tt=[],$=[],ut=[];for(const D of C){const{cx:z,cz:w,d:y}=D,F=r(),X=y<110?F<.55?"tower":"slab":y<150?F<.3?"slab":F<.7?"cluster":F<.85?"park":"lot":F<.5?"cluster":F<.75?"park":"lot",j=wM(1-y/330);if(X==="tower"){O(z,w,33,33,0,5,"shop",16777215),O(z,w,33,33,5,8.6-5,"punched",S(b.punched)),i.push(He(z,w,33/2,33/2,0));const mt=$i(17+r()*7),yt=$i(17+r()*7),Ft=Math.round((r()-.5)*8/3)*3,pt=Math.round((r()-.5)*8/3)*3,Lt=mo(Math.min(105,(48+r()*44)*(.55+j))),Xt=O(z+Ft,w+pt,mt,yt,8.6,Lt,r()<.7?"glass":"strip",r()<.7?S(b.glass):S(b.strip));let Yt=Xt;r()<.5&&(Yt=O(z+Ft,w+pt,$i(mt*.62),$i(yt*.62),Xt,mo(12+r()*10),"glass",S(b.glass))),W(z+Ft,w+pt,mt*.6,yt*.6,Yt,!0)}else if(X==="slab"){const k=r()<.5,vt=$i(28+r()*5),mt=$i(22+r()*6),yt=k?mt:vt,Ft=k?vt:mt,pt=mo(20+r()*24);O(z,w,yt,Ft,0,5,"shop",16777215);const Lt=O(z,w,yt,Ft,5,pt,r()<.5?"punched":"strip",r()<.5?S(b.punched):S(b.strip));i.push(He(z,w,yt/2,Ft/2,0)),W(z,w,yt,Ft,Lt,!1)}else if(X==="cluster")for(const k of[-1,1])for(const vt of[-1,1]){const yt=mo(11+r()*15),Ft=z+k*9.5,pt=w+vt*9.5;O(Ft,pt,15,15,0,5,"shop",16777215);const Lt=O(Ft,pt,15,15,5,yt,r()<.5?"punched":"strip",r()<.5?S(b.punched):S(b.strip));i.push(He(Ft,pt,15/2,15/2,0)),W(Ft,pt,15,15,Lt,!1)}else if(X==="park"){tt.push(new Te(33,33).rotateX(-Math.PI/2).translate(z,.05,w));for(let k=0;k<7;k++)Y.push({x:z+(r()-.5)*28,z:w+(r()-.5)*28,s:.9+r()*.5})}else{$.push(new Te(33,33).rotateX(-Math.PI/2).translate(z,.05,w));for(let k=-7;k<=7;k++)for(const vt of[-8.5,8.5])ut.push(ge(z+k*2.3,.06,w+vt,0))}}d($,ct(16777215,{map:Gr(),roughness:.9,...g}),0,{cast:!1}),d(tt,ct(7117390,{map:Un(31,{streaks:600}),roughness:1,...g}),0,{cast:!1}),ut.length&&e.add(re(new Te(.14,5).rotateX(-Math.PI/2),ct(15263968,{...g}),ut,{cast:!1})),e.add(re(new Mt(2.6,1.4,2),ct(9278104,{metalness:.4,roughness:.6}),H)),e.add(re(new Nt(.1,.18,14,6).translate(0,7,0),ct(11580600,{metalness:.7,roughness:.4}),I));const St=[],Tt=[],Vt=[],Wt=[];for(const D of v){for(let z=D.a0+7,w=0;z<D.a1-7;z+=26,w++)for(const y of[1,-1]){const F=z+(y>0?0:13);if(F>D.a1-5)continue;const X=D.alongX?F:D.fixed+y*(f+.9),j=D.alongX?D.fixed+y*(f+.9):F;if(u(X,j)||Math.hypot(X,j)>o-4)continue;const k=D.alongX?y>0?Math.PI:0:-y*Math.PI/2;St.push(ge(X,0,j,k)),i.push(qn(X,j,.35,{nm:!0}))}if(D.len>34)for(let z=D.a0+19.5;z<D.a1-8;z+=26)for(const w of[1,-1]){const y=D.alongX?z:D.fixed+w*(f+1.9),F=D.alongX?D.fixed+w*(f+1.9):z;u(y,F)||Math.hypot(y,F)>o-6||Wt.push({x:y,z:F,s:.75+r()*.3})}}const st=new Nt(.1,.17,9,8).translate(0,4.5,0),at=new Mt(.12,.12,2.4).translate(0,8.9,1.2),wt=new Mt(.5,.16,.95).translate(0,8.82,2.2),lt=ct(3159098,{metalness:.6,roughness:.45});e.add(re(No([st,at]),lt,St)),e.add(re(wt,ct(16774352,{emissive:16771496,emissiveIntensity:a?3:.9}),St,{cast:!1}));for(const D of _)for(const[z,w]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const y=D.x+z*(f+1.3),F=D.z+w*(f+1.3);Math.hypot(y,F)>o-3||((z*w>0?Tt:Vt).push(ge(y,0,F,Math.atan2(-z,-w))),i.push(qn(y,F,.3,{nm:!0})))}const Dt=new Nt(.08,.12,4.6,8).translate(0,2.3,0),Ht=new Mt(.42,1.2,.36).translate(0,5,0);e.add(re(Dt,lt,Tt.concat(Vt))),e.add(re(Ht,ct(16726570,{emissive:16722458,emissiveIntensity:1.6}),Tt,{cast:!1})),e.add(re(Ht,ct(3465328,{emissive:2150496,emissiveIntensity:1.6}),Vt,{cast:!1})),Rr(e,i,Wt,{kind:"oak",color:5212738,seed:61}),Rr(e,i,Y,{kind:"oak",color:4883008,seed:62});const J=ct(13617856,{map:vn(),roughness:.8}),ht=We(512,512),K=ht.getContext("2d");for(let D=250;D>40;D-=26)K.strokeStyle=(D/26|0)%2?"rgba(90,80,70,0.30)":"rgba(255,255,255,0.35)",K.lineWidth=6,K.beginPath(),K.arc(256,256,D,0,7),K.stroke();for(let D=0;D<16;D++)K.strokeStyle="rgba(90,80,70,0.25)",K.lineWidth=4,K.beginPath(),K.moveTo(256,256),K.lineTo(256+Math.cos(D/16*6.283)*250,256+Math.sin(D/16*6.283)*250),K.stroke();e.add(dt(new _n(32,64).rotateX(-Math.PI/2),new un({map:Xe(ht),transparent:!0,roughness:.9,depthWrite:!1,...g}),0,.045,0,{cast:!1}));const nt=new Ko([[11.3,.02],[11.3,.95],[12.4,1],[12.4,.02]].map(([D,z])=>new gt(D,z)),64);e.add(dt(nt,new un({color:13617856,map:vn(),roughness:.75,side:Ce})));const R=wc(3114669,{repeat:5});s.push(R.update),e.add(dt(new _n(11.3,48).rotateX(-Math.PI/2),R.mat,0,.7,0,{cast:!1})),e.add(dt(new Nt(4.6,5,1.5,40),J,0,.75,0)),e.add(dt(new Nt(2.6,3,1.2,36),J,0,2.1,0)),e.add(dt(new Nt(.5,.9,4.2,20),J,0,4.3,0)),e.add(dt(new Dn(.9,5.5,16,1,!0),new un({color:14677247,transparent:!0,opacity:.3,roughness:.1,depthWrite:!1,side:Ce}),0,7.4,0,{cast:!1})),i.push(qn(0,0,12.4));const _t=[];for(let D=0;D<10;D++){const z=D/10*Math.PI*2+.15,w=Math.sin(z)*18,y=Math.cos(z)*18;_t.push(ge(w,0,y,z)),i.push(He(w,y,.95,.35,z,{nm:!0}))}const ot=ct(9068346,{roughness:.8});e.add(re(new Mt(1.9,.12,.5).translate(0,.5,0),ot,_t)),e.add(re(new Mt(1.9,.45,.08).translate(0,.85,-.22),ot,_t)),e.add(re(No([new Mt(.1,.5,.45).translate(-.8,.25,0),new Mt(.1,.5,.45).translate(.8,.25,0)]),lt,_t));const Et=[];for(const D of[-1,1])for(const z of[-1,1]){const w=D*31,y=z*31;e.add(dt(new Mt(8,.8,8),J,w,.4,y)),e.add(dt(new Te(7.2,7.2).rotateX(-Math.PI/2),ct(4009764,{roughness:1}),w,.82,y,{cast:!1})),i.push(He(w,y,4,4,0)),Et.push({x:w,z:y,y:.8,s:1.15,ry:r()*6})}Rr(e,i,Et,{kind:"oak",color:5804095,seed:71,collide:!1});for(const[D,z,w]of[[-38,9,0],[38,-9,Math.PI]])e.add(dt(new Mt(5,3.2,3.2),ct(14209216),D,1.6,z,{ry:w})),e.add(dt(new Mt(6.2,.3,4.4),ct(12597547,{roughness:.6}),D,3.35,z,{ry:w})),e.add(dt(new Mt(3.4,1.4,.1),ct(2106924,{metalness:.5,roughness:.2}),D+Math.sin(w)*1.7,1.9,z+Math.cos(w)*1.7,{ry:w})),i.push(He(D,z,2.5,1.6,w));const N=[];for(const D of[-1,1])for(let z=-45;z<=45;z+=7.5)N.push(ge(z,0,D*49.2)),N.push(ge(D*49.2,0,z));e.add(re(new Nt(.16,.16,.9,10).translate(0,.45,0),ct(4212044,{metalness:.6,roughness:.4}),N,{cast:!1})),Go(e,o,{h:1.3,color:12895944});for(let D=0;D<80;D++){const z=D/80*Math.PI*2+(r()-.5)*.06,w=270+r()*230,y=$i(22+r()*26),F=$i(22+r()*26),X=mo(50+r()*140*(1-Math.abs(Math.sin(z*2))*.3)),j=r()<.5?"glass":"punched",k=Xu(j,S(j==="glass"?b.glass:b.punched),a);e.add(dt(nc(y,X,F,18,14.4,8),[k,k,L,L,k,k],Math.sin(z)*w,X/2,Math.cos(z)*w,{ry:z,cast:!1,receive:!1}))}return bc(e,{count:14,rMin:700,rMax:900,hMin:60,hMax:150,colors:n.mountains,seed:15}),Ec(e,12,a),{wall:o,isl:0,roadHalf:9,spawn:{x:0,z:-82,h:0}}}const $i=n=>Math.max(6,Math.round(n/3)*3),mo=n=>Math.max(3.6,Math.round(n/3.6)*3.6),wM=n=>Math.min(1,Math.max(0,n)),Ri=12.19,go=6.06,Wa=2.44,bo=2.9,qu=Wa+.22,Ah=["NORDLINE","OCEANIC","KAIRO"],ii=[12728874,3041976,14723120,3058266,11909308,10111531,2378368,14342868,13656634,3836559],Yu={polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};function $u(n,t){const s=We(1024,256),r=s.getContext("2d");r.fillStyle=t?"#808080":"#e6e6e6",r.fillRect(0,0,1024,256);for(let o=0;o<1024;o+=12)r.fillStyle=t?"#a8a8a8":"#f4f4f4",r.fillRect(o,14,6,228),r.fillStyle=t?"#585858":"#cdcdcd",r.fillRect(o+6,14,6,228);return r.fillStyle=t?"#909090":"#d8d8d8",r.fillRect(0,0,1024,14),r.fillRect(0,242,1024,14),t||(r.fillStyle="#6b6f75",r.font="italic 900 92px Arial, Helvetica, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(Ah[n],256,118),r.fillText(Ah[n],768,118),r.font="700 16px monospace",r.fillStyle="#7a7e84",r.fillText("CSC SAFETY APPROVED   MAX GROSS 30480 KG",256,204),r.fillText("MSKU "+(431e4+n*77711)+" 4",768,204)),s}function Ku(n){const e=We(256,256),i=e.getContext("2d");i.fillStyle=n?"#808080":"#dcdcdc",i.fillRect(0,0,256,256);for(let s=14;s<242;s+=10)i.fillStyle=n?"#9a9a9a":"#ececec",i.fillRect(s,16,5,224),i.fillStyle=n?"#666":"#c4c4c4",i.fillRect(s+5,16,5,224);i.fillStyle=n?"#707070":"#b4b4b4",i.fillRect(256/2-3,10,6,236);for(const s of[58,98,158,198])i.fillStyle=n?"#a0a0a0":"#9a9a9a",i.fillRect(s,24,5,208);return i.fillStyle=n?"#909090":"#d2d2d2",i.fillRect(0,0,256,12),i.fillRect(0,244,256,12),i.fillRect(0,0,12,256),i.fillRect(244,0,12,256),e}const vl={};function bM(n){if(vl[n])return vl[n];const t=Xe($u(n,!1)),e=Xe($u(n,!0),{srgb:!1}),i=Xe(Ku(!1)),s=Xe(Ku(!0),{srgb:!1}),r={roughness:.55,metalness:.35,envMapIntensity:.8},o=new un({color:16777215,map:Un(44,{base:205,contrast:.25}),roughness:.7,metalness:.3}),a=new un({...r,map:i,bumpMap:s,bumpScale:1.2}),c=new un({...r,map:t,bumpMap:e,bumpScale:1.4});return vl[n]=[a,a,o,o,c,c]}function Zu(n){const t=new Mt(n,bo,Wa),e=t.attributes.uv,i=(s,r,o)=>{for(let a=s*4;a<s*4+4;a++)e.setXY(a,e.getX(a)*r,e.getY(a)*o)};return i(4,n/Ri,1),i(5,n/Ri,1),i(2,n/6,Wa/6),i(3,n/6,Wa/6),t}function EM(n,t){const{group:e,obst:i,updaters:s}=t,r=Qe(777),o=rf(9),a=n.wall,c=105,l=!!n.night,h=[],f=(J,ht,K,nt,R=0)=>({x0:J-K-R,x1:J+K+R,z0:ht-nt-R,z1:ht+nt+R}),u=(J,ht)=>J.x0<ht.x1&&J.x1>ht.x0&&J.z0<ht.z1&&J.z1>ht.z0,d=Math.acos(c/(a+.5)),g=new yr;for(let J=0;J<=96;J++){const ht=d+(Math.PI*2-d*2)*J/96,K=Math.sin(ht)*(a+.5),nt=Math.cos(ht)*(a+.5);J?g.lineTo(K,-nt):g.moveTo(K,-nt)}g.closePath();const x=J=>J.rotateX(-Math.PI/2);e.add(dt(x(hn(new tc(g),1/12,1/12)),ct(13224909,{map:Ho(9,176,128,128),roughness:.92}),0,-.02,0,{cast:!1}));const m=new yr;m.moveTo(-1600,-c),m.lineTo(1600,-c),m.lineTo(1600,1600),m.lineTo(-1600,1600),m.closePath(),e.add(dt(x(hn(new tc(m),1/20,1/20)),ct(8422538,{map:Un(2)}),0,-.06,0,{cast:!1}));const p=wc(2060179,{opacity:1,repeat:180});s.push(p.update),e.add(dt(new Te(3200,3200).rotateX(-Math.PI/2),p.mat,0,-2.2,0,{cast:!1,receive:!1})),e.add(dt(new Mt(3200,2.3,1.2),ct(5922404,{map:vn(),roughness:.95}),0,-1.17,c+.6));const _=We(64,64),v=_.getContext("2d");v.fillStyle="#e6b800",v.fillRect(0,0,64,64),v.fillStyle="#16181c";for(let J=-2;J<6;J++)v.beginPath(),v.moveTo(J*16,64),v.lineTo(J*16+8,64),v.lineTo(J*16+40,0),v.lineTo(J*16+32,0),v.fill();const M=new Te(2*Math.sqrt((a+.5)**2-c*c),1.4).rotateX(-Math.PI/2);hn(M,2*Math.sqrt((a+.5)**2-c*c)/4,.35),e.add(dt(M,ct(16777215,{map:Xe(_),...Yu}),0,.04,c-.9,{cast:!1})),i.push(He(0,c+1.8,220,1.9,0));const P=[];for(let J=-130;J<=130;J+=13)P.push(ge(J,0,c-.2));e.add(re(new Nt(.3,.4,.7,12).translate(0,.35,0),ct(3159098,{metalness:.6,roughness:.5}),P));const T=Zu(Ri),A=Zu(go),C=Ah.map((J,ht)=>{const K=bM(ht);return{m40:[],m20:[],mt:K}}),b=(J,ht,K,nt,R,_t,ot)=>{const Et=.88+r()*.2,N=new $t(ot).multiplyScalar(Et);(ht===Ri?J.m40:J.m20).push({m:ge(K,nt,R,_t),c:N})},S=(J,ht,K,nt,R)=>{const _t=K===0?[24.9,16]:[16,24.9],ot=f(J,ht,_t[0]/2,_t[1]/2),Et=Math.cos(K),N=Math.sin(K),D=C[nt],z=r()*50;for(let w=0;w<6;w++){const y=(w-2.5)*qu,F=r(),X=F<.6?[Ri,Ri]:F<.8?[Ri,go,go]:[go,go,Ri];let j=-12.45;for(const k of X){const vt=j+k/2;j+=k+.18;const mt=Sc(Math.round(R+(o(w*.9+z,j*.2)-.5)*2.4),1,4),yt=r()<.35?ii[r()*ii.length|0]:ii[(w+nt*3)%ii.length];for(let Ft=0;Ft<mt;Ft++)b(D,k,J+vt*Et+y*N,bo/2+Ft*bo,ht-vt*N+y*Et,K,Ft&&r()<.4?ii[r()*ii.length|0]:yt)}}i.push(He(J,ht,12.5,8,K)),h.push(ot)};{const _t=Xe((()=>{const j=We(256,128),k=j.getContext("2d");k.fillStyle="#d4d8dc",k.fillRect(0,0,256,128);for(let vt=0;vt<256;vt+=8)k.fillStyle="#eef0f2",k.fillRect(vt,0,4,128),k.fillStyle="#b8bec4",k.fillRect(vt+4,0,4,128);return k.fillStyle="#2f5f8f",k.fillRect(0,96,256,14),j})()),ot=ct(16777215,{map:_t,roughness:.55,metalness:.4}),Et=new Mt(50,12.5,30),N=Et.attributes.uv,D=(j,k,vt)=>{for(let mt=j*4;mt<j*4+4;mt++)N.setXY(mt,N.getX(mt)*k,N.getY(mt)*vt)};D(0,30/8,12.5/8),D(1,30/8,12.5/8),D(4,50/8,12.5/8),D(5,50/8,12.5/8);const z=ct(9080982,{metalness:.5,roughness:.5,map:Un(6,{base:220})});e.add(dt(Et,[ot,ot,z,z,ot,ot],-128,12.5/2,-32));const w=new yr;w.moveTo(-30/2-.6,0),w.lineTo(30/2+.6,0),w.lineTo(0,2.6),w.closePath();const y=new Io(w,{depth:50+1.2,bevelEnabled:!1});y.translate(0,0,-51.2/2),y.rotateY(Math.PI/2),e.add(dt(y,z,-128,12.5,-32));const F=ct(2764598,{metalness:.5,roughness:.5}),X=ct(13225683,{metalness:.4,roughness:.6});for(const j of[-9,0,9])e.add(dt(new Mt(.2,5.4,5.2),F,-128+50/2+.05,2.7,-32+j,{cast:!1})),e.add(dt(new Mt(2.6,.25,7),X,-128+50/2+1.3,6.3,-32+j)),e.add(dt(new Mt(.5,.35,5.6),ct(2106410),-128+50/2+.25,1.1,-32+j,{cast:!1})),e.add(dt(new Mt(.1,.5,.5),ct(16765503,{emissive:16758784,emissiveIntensity:l?2:.5}),-128+50/2+.15,6,-32+j+3.2,{cast:!1}));i.push(He(-128,-32,50/2,30/2,0)),h.push(f(-128,-32,50/2,30/2,12))}{const K=ct(14672870,{metalness:.55,roughness:.35,envMapIntensity:1.2});for(const R of[-17,0,17]){const _t=118+R,ot=new Nt(7,7,12,40);e.add(dt(ot,K,_t,6,-88)),e.add(dt(new Yn(7,40,12,0,Math.PI*2,0,Math.PI/2).scale(1,.22,1),K,_t,12,-88)),e.add(dt(new ks(7.05,.18,8,48).rotateX(Math.PI/2),ct(12728874),_t,8,-88,{cast:!1})),e.add(dt(new Mt(.5,12,.1),ct(5922404),_t+7.05,6,-88,{cast:!1})),i.push(qn(_t,-88,7.1))}e.add(dt(new Mt(10,4,7),ct(12106946),118,2,-74)),i.push(He(118,-74,5,3.5,0));const nt=new Nt(.35,.35,34,10).rotateZ(Math.PI/2);e.add(dt(nt,ct(8028296,{metalness:.6,roughness:.4}),118,5.2,-79,{cast:!1})),h.push(f(118,-82,30,24,8))}{ct(16777215,{map:Un(17,{base:238}),roughness:.7}),e.add(dt(new Mt(24,8,12),ct(15131352,{roughness:.75}),48,4,-128)),e.add(dt(new Mt(24.6,.5,12.6),ct(4869717),48,8.25,-128));const K=We(256,64),nt=K.getContext("2d");nt.fillStyle="#243444",nt.fillRect(0,0,256,64),nt.fillStyle="#7fa0b8";for(let R=0;R<8;R++)nt.fillRect(R*32+4,8,24,48);for(const R of[-1,1])e.add(dt(new Te(22,3.2),ct(16777215,{map:Xe(K),metalness:.4,roughness:.25}),48,5.4,-128+R*6.03,{ry:R>0?0:Math.PI,cast:!1}));i.push(He(48,-128,12,6,0)),h.push(f(48,-128,12,6,10))}const L=ct(14173483,{roughness:.55,metalness:.3}),H=ct(9212568,{roughness:.5,metalness:.5}),I=J=>{const K=c-2.4,nt=c-19;for(const R of[-1,1])for(const _t of[K,nt])e.add(dt(new Mt(1.8,32,1.8),L,J+R*9,16,_t)),i.push(He(J+R*9,_t,1.1,1.1,0,{nm:!0}));for(const R of[-1,1])e.add(dt(new Mt(1.4,1.4,K-nt+1.8),L,J+R*9,31.5,(K+nt)/2));e.add(dt(new Mt(9*2+1.8,1.6,1.6),L,J,31.5,K)),e.add(dt(new Mt(9*2+1.8,1.6,1.6),L,J,31.5,nt)),e.add(dt(new Mt(2.6,2.4,78),L,J,36,c-19+36)),e.add(dt(new Mt(1.4,1.4,52),H,J+2.2,38,c+8,{cast:!1})),e.add(dt(new Mt(6,4,8),H,J,39,c-12)),e.add(dt(new Mt(4,2.4,5),H,J,33.8,c+18));for(const R of[-1,1])e.add(dt(new Nt(.06,.06,20,6),ct(2764082),J+R*1.6,23,c+18,{cast:!1}));e.add(dt(new Mt(2.6,.5,6.2),ct(2764082),J,13,c+18));for(const R of[-1,1])for(const _t of[K,nt])e.add(dt(new Mt(2.6,1,2.6),ct(3159098),J+R*9,.5,_t,{cast:!1}));h.push(f(J,(K+nt)/2,15,14))};I(-50),I(38);const O=14,W=15,Y=a-7,tt=c-22,$=(J,ht,K,nt,R)=>{const _t=K===0?12.45:8,ot=K===0?8:12.45,Et=f(J,ht,_t,ot);Math.hypot(Math.abs(J)+_t,Math.abs(ht)+ot)>Y||ht+ot>tt||Do(He(J,ht,_t,ot,0),0,0)<42||h.some(N=>u(N,Et))||r()<.08||S(J,ht,K,nt,R)};for(let J=0;J<5;J++)for(let ht=-5;ht<=3;ht++){const K=-(O+12.45+J*(24.9+W)),nt=ht*(16+W)+4,R=Math.hypot(K,nt);$(K,nt,0,(J+ht+9)%3,R<90?2:R<130?2.6:1.8)}for(let J=0;J<5;J++)for(let ht=-4;ht<=2;ht++){const K=O+8+J*(16+W),nt=ht*(24.9+W)+6,R=Math.hypot(K,nt);$(K,nt,Math.PI/2,(J+ht+7)%3,R<90?2:R<130?2.8:1.8)}for(const J of C)J.m40.length&&e.add(re(T,J.mt,J.m40)),J.m20.length&&e.add(re(A,J.mt,J.m20));{const J=c+24,ht=new yr;ht.moveTo(-76,-11),ht.lineTo(-76,11),ht.lineTo(44,13),ht.quadraticCurveTo(70,12,82,0),ht.quadraticCurveTo(70,-12,44,-13),ht.closePath();const K=new Io(ht,{depth:15,bevelEnabled:!1});K.rotateX(-Math.PI/2),e.add(dt(K,[ct(7172985,{roughness:.8,metalness:.2}),ct(1911354,{roughness:.55,metalness:.35})],0,-5.8,J));const nt=new Io(ht,{depth:3,bevelEnabled:!1});nt.rotateX(-Math.PI/2),nt.scale(1.003,1,1.003),e.add(dt(nt,ct(11019039,{roughness:.6}),0,-3.4,J,{cast:!1}));const R=9.2,_t={m40:[],mt:C[1].mt};for(let z=0;z<9;z++)for(let w=0;w<8;w++){if(r()<.08)continue;const y=2+(r()*3|0),F=ii[r()*ii.length|0];for(let X=0;X<y;X++)b(_t,Ri,-52+z*12.4,R+bo/2+X*bo,J+(w-3.5)*qu,0,X&&r()<.4?ii[r()*ii.length|0]:F)}const ot=-66,Et=ct(15526628,{roughness:.6});e.add(dt(new Mt(12,22,20),Et,ot,R+11,J));const N=We(128,32),D=N.getContext("2d");D.fillStyle="#e6e4de",D.fillRect(0,0,128,32),D.fillStyle="#1f3447";for(let z=0;z<9;z++)D.fillRect(z*14+3,8,10,14);e.add(dt(new Mt(12.2,3,21),ct(16777215,{map:Xe(N),roughness:.3,metalness:.3}),ot,R+24.5,J)),e.add(dt(new Nt(2.2,2.6,8,16),ct(11019039),ot-3,R+26,J,{cast:!1})),e.add(re(T,_t.mt,_t.m40))}const ut=[],St=[];for(const J of[-125,-62,0,58])for(const ht of[-1,1])St.push([ht*12.8,J]);for(const[J,ht]of St)ut.push(ge(J,0,ht,0)),i.push(qn(J,ht,.8,{nm:!0}));const Tt=ct(4869974,{metalness:.6,roughness:.45});e.add(re(new Nt(.28,.5,30,10).translate(0,15,0),Tt,ut)),e.add(re(new Mt(3.6,1.8,.4).translate(0,30.4,0),ct(16774872,{emissive:16773312,emissiveIntensity:l?3:.8}),ut,{cast:!1}));const Vt=[],Wt=new Te(.4,3.2).rotateX(-Math.PI/2);for(let J=-150;J<c-24;J+=9)Vt.push(ge(0,.05,J));e.add(re(Wt,ct(15251754,{roughness:.85,...Yu}),Vt,{cast:!1}));const st=We(64,64),at=st.getContext("2d");at.strokeStyle="#c8ccd0",at.lineWidth=3,at.beginPath(),at.moveTo(0,0),at.lineTo(64,64),at.moveTo(64,0),at.lineTo(0,64),at.stroke();const wt=Xe(st),lt=Math.acos(c/(a+.7)),Dt=new Nt(a+.7,a+.7,5,120,1,!0,lt,Math.PI*2-lt*2);hn(Dt,Math.PI*2*a/3,5/3),e.add(dt(Dt,new sn({map:wt,transparent:!0,alphaTest:.4,side:Ce}),0,3.9,0,{cast:!1,receive:!1}));const Ht=[];for(let J=0;J<90;J++){const ht=lt+(Math.PI*2-lt*2)*J/89;Ht.push(ge(Math.sin(ht)*(a+.7),0,Math.cos(ht)*(a+.7)))}return e.add(re(new Nt(.1,.1,6.4,6).translate(0,3.2,0),Tt,Ht,{cast:!1})),Go(e,a,{h:1.4,color:11449014,gapZ:c}),bc(e,{count:12,rMin:700,rMax:900,hMin:50,hMax:130,colors:n.mountains,seed:19}),Ec(e,14,l),{wall:a,isl:0,roadHalf:12,spawn:{x:0,z:-90,h:0}}}const xo={polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};function Ju(n,t){const e=We(256,256),i=e.getContext("2d"),s=Qe(n);i.fillStyle="#2f5a2c",i.fillRect(0,0,256,256);for(let r=0;r<900;r++)i.fillStyle=`rgba(${40+s()*40|0},${90+s()*60|0},${40+s()*30|0},0.7)`,i.beginPath(),i.arc(s()*256,s()*256,3+s()*4,0,7),i.fill();for(let r=0;r<700;r++)i.fillStyle=t[s()*t.length|0],i.beginPath(),i.arc(s()*256,s()*256,1.8+s()*2.6,0,7),i.fill();return Xe(e)}function TM(n,t){const{group:e,obst:i,updaters:s}=t,r=Qe(4242),o=n.wall,a=v=>92+7*Math.sin(3*v+.7)+4*Math.cos(5*v);e.add(dt(hn(new _n(o+900,48).rotateX(-Math.PI/2),120,120),ct(5209404,{map:Un(31,{streaks:600}),roughness:1}),0,-.06,0,{cast:!1})),e.add(dt(hn(new _n(o+.5,96).rotateX(-Math.PI/2),o/6,o/6),ct(8827998,{map:Un(31,{streaks:900,contrast:.2,blobs:60}),roughness:1}),0,-.02,0,{cast:!1}));const c=[];for(let v=0;v<14;v++){const M=v/14*Math.PI*2,P=a(M);c.push(new U(Math.sin(M)*P,0,Math.cos(M)*P))}const l=new Sh(c,!0,"centripetal").getSpacedPoints(240).slice(0,-1).map(v=>({x:v.x,z:v.z})),h=[{pts:l,w:7,closed:!0}];for(let v=0;v<4;v++){const M=v*Math.PI/2,P=[];for(let T=14;T<a(M)+2;T+=5)P.push({x:Math.sin(M)*T,z:Math.cos(M)*T});P.push({x:Math.sin(M)*(a(M)+2),z:Math.cos(M)*(a(M)+2)}),h.push({pts:P,w:6,closed:!1})}const f=ct(16777215,{map:gl(),roughness:1,...xo}),u=ct(8022602,{map:gl(12),roughness:1,...xo});for(const v of h)e.add(dt(Wu(v.pts,v.w+1.1,.03,{closed:v.closed,tile:5}),u,0,0,0,{cast:!1})),e.add(dt(Wu(v.pts,v.w,.045,{closed:v.closed,tile:4}),f,0,0,0,{cast:!1}));const d=h.flatMap(v=>v.pts),g=(v,M,P)=>{for(let T=0;T<d.length;T++){const A=v-d[T].x,C=M-d[T].z;if(A*A+C*C<P*P)return!0}return!1};e.add(dt(new _n(23.5,64).rotateX(-Math.PI/2),ct(8022602,{map:gl(12),...xo}),0,.03,0,{cast:!1})),e.add(dt(hn(new _n(22,64).rotateX(-Math.PI/2),11,11),ct(15326402,{map:Ho(12,214,168,64),roughness:.9,...xo}),0,.05,0,{cast:!1}));{const v=ct(14209732,{map:vn(),roughness:.75}),M=new Ko([[6.8,0],[6.8,.55],[7.4,.6],[7.4,.55],[10,.55],[10.5,.6],[10.5,0]].map(([P,T])=>new gt(P,T)),64);e.add(dt(M,new un({color:14209732,map:vn(),roughness:.75,side:Ce}))),e.add(dt(new Bs(7.4,10,64).rotateX(-Math.PI/2),ct(16777215,{map:Ju(5,["#ff6a9a","#ffd23f","#ffffff","#b388ff"]),roughness:1}),0,.56,0,{cast:!1})),e.add(dt(new Nt(5,5.3,.5,40),v,0,.25,0)),e.add(dt(new Nt(3.5,3.9,.9,36),v,0,.95,0)),e.add(dt(new Nt(.8,1.1,5.5,20),v,0,4.1,0)),e.add(dt(new Yn(1,24,16),ct(14266954,{metalness:.9,roughness:.25,envMapIntensity:1.5}),0,7.5,0)),i.push(qn(0,0,10.6))}const x={x:-42,z:-32,rx:26,rz:16,a:.6};{const v=wc(2916256,{repeat:7,opacity:.94});s.push(v.update);const M=dt(new _n(1,64).rotateX(-Math.PI/2),v.mat,x.x,.12,x.z,{ry:x.a,cast:!1});M.scale.set(x.rx-.3,1,x.rz-.3),e.add(M);const P=[];for(let b=0;b<96;b++){const S=b/96*Math.PI*2,L=Math.cos(S)*x.rx,H=Math.sin(S)*x.rz;P.push(new U(x.x+L*Math.cos(x.a)+H*Math.sin(x.a),.25,x.z-L*Math.sin(x.a)+H*Math.cos(x.a)))}const T=new tf(new Sh(P,!0),160,.75,10,!0);T.scale(1,.75,1),e.add(dt(T,ct(10262150,{map:vn(),roughness:.9}))),i.push(fl(x.x,x.z,x.rx+.5,x.rz+.5,x.a));const A=[],C=[];for(let b=0;b<46;b++){const S=r()*6.283,L=Math.sqrt(r())*.85,H=Math.cos(S)*x.rx*L,I=Math.sin(S)*x.rz*L;A.push(ge(x.x+H*Math.cos(x.a)+I*Math.sin(x.a),.14,x.z-H*Math.sin(x.a)+I*Math.cos(x.a),r()*6,.6+r()*.5))}for(let b=0;b<110;b++){const S=r()*6.283,L=.9+r()*.07,H=Math.cos(S)*x.rx*L,I=Math.sin(S)*x.rz*L;C.push(ge(x.x+H*Math.cos(x.a)+I*Math.sin(x.a),0,x.z-H*Math.sin(x.a)+I*Math.cos(x.a),r()*6,.7+r()*.7))}e.add(re(new _n(.7,12).rotateX(-Math.PI/2),ct(4164154,{side:Ce}),A,{cast:!1})),e.add(re(new Dn(.09,2.2,4).translate(0,1.1,0),ct(8034874),C,{cast:!1}))}const m={x:40,z:40,hw:15,hd:12};{const v=ct(3501876,{map:Un(41,{contrast:.35,blobs:60,base:225}),roughness:1}),M=1.3,P=1.6;for(const[A,C,b,S]of[[0,-12,m.hw*2+M,M],[0,m.hd,m.hw*2+M,M],[-15,0,M,m.hd*2],[m.hw,0,M,m.hd*2]])e.add(dt(nc(b,P,S,3,3,3),v,m.x+A,P/2,m.z+C)),i.push(He(m.x+A,m.z+C,b/2,S/2,0));const T=[["#ff6a9a","#ffd6e4"],["#ffd23f","#ffffff"],["#b388ff","#ffffff"],["#ff7b00","#ffd23f"]];[[-7,-5.5],[7,-5.5],[-7,5.5],[7,5.5]].forEach(([A,C],b)=>{const S=hn(new Te(10,7).rotateX(-Math.PI/2),2,1.4);e.add(dt(S,ct(16777215,{map:Ju(20+b,T[b]),roughness:1,...xo}),m.x+A,.07,m.z+C,{cast:!1}))}),e.add(dt(new Nt(1.6,1.8,.5,24),ct(14209732,{map:vn()}),m.x,.25,m.z)),e.add(dt(new Nt(.35,.5,2.6,12),ct(14209732,{map:vn()}),m.x,1.8,m.z))}const p={x:-44,z:44},_={x:46,z:-44};{const v=ct(15789282,{roughness:.6});e.add(dt(new Nt(5.4,5.6,.4,8),ct(13617594,{map:vn()}),p.x,.2,p.z));for(let P=0;P<8;P++){const T=P/8*Math.PI*2+Math.PI/8;e.add(dt(new Nt(.16,.2,3.4,10),v,p.x+Math.sin(T)*4.6,2.1,p.z+Math.cos(T)*4.6))}e.add(dt(new Dn(6.4,2.6,8),ct(3107663,{roughness:.55}),p.x,4.9,p.z)),e.add(dt(new Nt(5.2,5.2,.35,8),v,p.x,3.8,p.z)),e.add(dt(new Yn(.3,12,8),ct(14266954,{metalness:.8,roughness:.3}),p.x,6.35,p.z)),i.push(qn(p.x,p.z,5.6));const M=ct(9068346,{roughness:.8});e.add(dt(new Mt(9,3.2,5),ct(14735558,{roughness:.8}),_.x,1.6,_.z)),e.add(dt(new Mt(11,.35,7),ct(8010538,{roughness:.6}),_.x,3.4,_.z)),e.add(dt(new Mt(5,1.2,.1),ct(1911350,{metalness:.5,roughness:.2}),_.x,1.8,_.z+2.55,{cast:!1})),i.push(He(_.x,_.z,4.5,2.5,0));for(const[P,T]of[[-6,6],[1,8],[8,6]]){const A=_.x+P,C=_.z+T;e.add(dt(new Mt(2,.1,.9),M,A,.78,C)),e.add(dt(new Mt(2,.08,.35),M,A,.45,C-.85)),e.add(dt(new Mt(2,.08,.35),M,A,.45,C+.85)),i.push(He(A,C,1.05,1.15,0,{nm:!0}))}}{const v=[],M=[],P=ct(9068346,{roughness:.8}),T=ct(2306090,{metalness:.6,roughness:.45}),A=(C,b,S,L,H)=>{let I=0;for(let O=0;O<C.length;O++){const W=C[O],Y=C[(O+1)%C.length];if(!b&&O===C.length-1)break;const tt=Y.x-W.x,$=Y.z-W.z,ut=Math.hypot(tt,$)||1;if(I+=ut,I<S)continue;I=0;const St=Math.hypot(W.x,W.z)||1,Tt=W.x/St,Vt=W.z/St,Wt=-$/ut,st=tt/ut,at=Wt*Tt+st*Vt>=0?1:-1,wt=W.x+at*Wt*L,lt=W.z+at*st*L;if(!(Math.hypot(wt,lt)<26||Math.hypot(wt,lt)>o-6||Do(fl(x.x,x.z,x.rx,x.rz,x.a),wt,lt)<4))if(H){let Dt=Math.atan2(-$,tt);const Ht=Math.sin(Dt),J=Math.cos(Dt);Ht*-at*Wt+J*-at*st<0&&(Dt+=Math.PI),v.push(ge(wt,0,lt,Dt)),i.push(He(wt,lt,.95,.3,Dt,{nm:!0}))}else M.push(ge(wt,0,lt,0)),i.push(qn(wt,lt,.3,{nm:!0}))}};A(l,!0,30,4.4,!0),A(l,!0,22,4.4,!1);for(const C of h.slice(1))A(C.pts,!1,24,4.2,!1);for(let C=0;C<10;C++){const b=C/10*Math.PI*2+.3;M.push(ge(Math.sin(b)*20.5,0,Math.cos(b)*20.5,0)),i.push(qn(Math.sin(b)*20.5,Math.cos(b)*20.5,.3,{nm:!0}))}for(let C=0;C<8;C++){const b=C/8*Math.PI*2+.2,S=Math.sin(b)*14.5,L=Math.cos(b)*14.5;v.push(ge(S,0,L,b+Math.PI)),i.push(He(S,L,.95,.3,b+Math.PI,{nm:!0}))}e.add(re(new Mt(1.9,.1,.5).translate(0,.5,0),P,v)),e.add(re(new Mt(1.9,.45,.07).translate(0,.85,-.22),P,v)),e.add(re(No([new Mt(.08,.5,.45).translate(-.82,.25,0),new Mt(.08,.5,.45).translate(.82,.25,0)]),T,v)),e.add(re(No([new Nt(.09,.14,4.4,8).translate(0,2.2,0),new Dn(.5,.4,4).translate(0,5.1,0)]),T,M)),e.add(re(new Mt(.4,.6,.4).translate(0,4.6,0),ct(16773576,{emissive:16769696,emissiveIntensity:n.night?3:.7}),M,{cast:!1}))}{const v=fl(x.x,x.z,x.rx,x.rz,x.a),M=(O,W)=>{const Y=Math.hypot(O,W);return!(Y<30||Y>o-5||g(O,W,7.5)||Do(v,O,W)<7||Math.abs(O-m.x)<m.hw+8&&Math.abs(W-m.z)<m.hd+8||Math.hypot(O-p.x,W-p.z)<13||Math.abs(O-_.x)<14&&Math.abs(W-_.z)<13)},P=[],T=(O,W,Y)=>{if(!M(O,W))return!1;for(const tt of P)if(Math.hypot(tt.x-O,tt.z-W)<Y)return!1;return P.push({x:O,z:W}),!0},A=[],C=[];for(let O=0;O<5200&&A.length+C.length<170;O++){const W=r()*6.283,Y=104+r()*(o-110),tt=Math.sin(W)*Y,$=Math.cos(W)*Y;T(tt,$,6.5)&&(r()<.28?C:A).push({x:tt,z:$,s:.95+r()*.7})}for(let O=0,W=0;O<4e3&&W<40;O++){const Y=r()*6.283,tt=32+r()*70,$=Math.sin(Y)*tt,ut=Math.cos(Y)*tt;T($,ut,15)&&(A.push({x:$,z:ut,s:1.1+r()*.6}),W++)}Rr(e,i,A,{kind:"oak",color:4161338,seed:81}),Rr(e,i,C,{kind:"pine",color:2907706,seed:82});const b=[],S=new Dn(.11,.7,4).translate(0,.35,0),L=new $t;for(let O=0;O<9e3&&b.length<3200;O++){const W=r()*6.283,Y=Math.sqrt(r())*(o-3),tt=Math.sin(W)*Y,$=Math.cos(W)*Y;Y<25||g(tt,$,4.2)||Do(v,tt,$)<1.8||Math.abs(tt-m.x)<m.hw+2&&Math.abs($-m.z)<m.hd+2||b.push({m:ge(tt,0,$,r()*6,.8+r()*1.4,.7+r()*1.3,.8+r()*1.4),c:L.setHSL(.24+r()*.05,.45+r()*.2,.28+r()*.16).getHex()})}e.add(re(S,ct(16777215,{roughness:1}),b,{cast:!1}));const H=[],I=[16738970,16765503,16777215,11766015,16743168];for(let O=0;O<6e3&&H.length<360;O++){const W=(r()-.5)*2*(o-20),Y=(r()-.5)*2*(o-20);if(Math.hypot(W,Y)>o-14||Math.hypot(W,Y)<28||g(W,Y,5))continue;const tt=I[r()*5|0];for(let $=0;$<8;$++){const ut=W+(r()-.5)*5,St=Y+(r()-.5)*5;(M(ut,St)||!g(ut,St,4))&&H.push({m:ge(ut,.22,St,0,.8+r()*.5),c:tt})}}e.add(re(new Zo(.22,1),ct(16777215,{roughness:.7}),H,{cast:!1}))}return Go(e,o,{h:1.15,t:.8,color:12036754,tex:vn(14)}),Go(e,o+.8,{h:2.6,t:2.2,color:3832376,tex:Un(41,{contrast:.3,base:225}),flat:!1,segs:120}),bc(e,{count:14,rMin:560,rMax:800,hMin:60,hMax:140,colors:n.mountains,seed:23}),Ec(e,16,!!n.night),{wall:o,isl:0,roadHalf:6,spawn:{x:0,z:-72,h:0}}}const ic={polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};function _l(n,t){const e=We(256,512),i=e.getContext("2d"),s=Qe(n);i.fillStyle=t?"#202838":"#8b9aad",i.fillRect(0,0,256,512);for(let r=12;r<500;r+=34)for(let o=10;o<250;o+=30){const a=t?s()>.42:s()>.2;i.fillStyle=a?t?s()>.55?"#ffd77a":"#9ed6ff":"#c9e2f0":t?"#182030":"#5d6c7e",i.fillRect(o,r,18,20)}i.fillStyle="rgba(0,0,0,.2)";for(let r=0;r<256;r+=30)i.fillRect(r,0,3,512);return Xe(e)}function Eo(n,{x:t=0,z:e=0,length:i,width:s=18,angle:r=0,highway:o=!1,markings:a=!0}){const c=new Te(i,s).rotateX(-Math.PI/2);hn(c,i/18,s/18);const l=dt(c,ct(16777215,{map:Gr(o?42:16),roughness:.88,...ic}),t,.03,e,{ry:r,cast:!1});if(n.add(l),!a)return;const h=(u,d,g,x,m)=>{const p=dt(new Te(g,x).rotateX(-Math.PI/2),ct(m,{roughness:.8,...ic}),t+u*Math.cos(r)+d*Math.sin(r),.052,e-u*Math.sin(r)+d*Math.cos(r),{ry:r,cast:!1});n.add(p)},f=o?3:2;for(const u of[-1,1])h(0,u*(s/2-.7),i,.22,15263967);h(0,-.22,i,.16,15907893),h(0,.22,i,.16,15907893);for(let u=1;u<f;u++){const d=u/f*s/2;for(let g=-i/2+4;g<i/2;g+=11)h(g,d,5.3,.18,15855848),h(g,-d,5.3,.18,15855848)}}function AM(n){const t=ct(16777215,{map:Gr(62),roughness:.9,...ic});n.add(dt(new Bs(276,306,144).rotateX(-Math.PI/2),t,0,.025,0,{cast:!1}));const e=ct(16118760,{roughness:.8,...ic});for(const[r,o]of[[278,279.1],[291,292.1],[303,304.1]])n.add(dt(new Bs(r,o,144).rotateX(-Math.PI/2),e,0,.052,0,{cast:!1}));Eo(n,{x:0,z:-2,length:390,width:24,angle:0,highway:!0});const i=ct(8752017,{map:vn(18),roughness:.95});for(let r=-168;r<=168;r+=56)n.add(dt(new Mt(4,4.4,4),i,r,2.2,-18)),n.add(dt(new Mt(4,4.4,4),i,r,2.2,14));const s=dt(new Mt(394,.45,29),ct(5593441,{roughness:.8}),0,4.6,-2,{cast:!1});n.add(s)}function RM(n,t){const e=[],i=[],s=t===0?72:48;for(let o=-216;o<=216;o+=s){for(const a of[-171,-101,-31,39,109,179])e.push(ge(o,0,a),ge(o+8,0,a+8,Math.PI));for(const a of[-211,-141,-71,-1,69,139,209])e.push(ge(a,0,o))}for(let o=-140;o<=140;o+=70)for(let a=-105;a<=105;a+=70)i.push(ge(o+11,0,a+11,Math.PI/2));const r=ct(3160130,{metalness:.65,roughness:.38});n.add(re(new Nt(.12,.18,7,8).translate(0,3.5,0),r,e,{cast:!1})),n.add(re(new Mt(1.4,.24,.7).translate(.55,6.65,0),ct(16773833,{emissive:16771245,emissiveIntensity:1.4}),e,{cast:!1})),n.add(re(new Mt(2.6,1.35,.12).translate(0,3.8,0),ct(2847935,{emissive:1195636,emissiveIntensity:.25}),i,{cast:!1}))}function CM(n,t){const{group:e,obst:i,updaters:s,quality:r=1}=t,o=Qe(9981),a=n.wall,c=!!n.night,l=dt(hn(new _n(a+360,96).rotateX(-Math.PI/2),160,160),ct(7370362,{map:Un(25,{contrast:.16,blobs:64}),roughness:1}),0,-.08,0,{cast:!1});e.add(l);const h=wc(2059922,{repeat:42,opacity:.96});s.push(h.update),e.add(dt(new Te(760,110).rotateX(-Math.PI/2),h.mat,0,-.14,318,{cast:!1,receive:!1})),e.add(dt(new Mt(570,1.4,4),ct(8751498,{map:vn(20)}),0,.55,251)),i.push(He(0,254,285,2)),AM(e);const f=[-210,-140,-70,0,70,140,210];for(const _ of f)Eo(e,{x:0,z:_,length:474,width:18}),Eo(e,{x:_,z:0,length:474,width:18,angle:Math.PI/2});Eo(e,{x:-223,z:-142,length:132,width:18,angle:.58,highway:!0}),Eo(e,{x:223,z:142,length:132,width:18,angle:.58,highway:!0});const u=[_l(4,c),_l(9,c),_l(15,c)].map(_=>ct(16777215,{map:_,roughness:.62,metalness:.12,envMapIntensity:1.1})),d=ct(4344146,{map:vn(7),roughness:.85}),g=[-175,-105,-35,35,105,175],x=[],m=[];for(let _=0;_<g.length;_++)for(let v=0;v<g.length;v++){const M=g[_],P=g[v],T=_<2&&v<2,A=v>3&&_>2;if(T){e.add(dt(new Te(52,52).rotateX(-Math.PI/2),ct(6066253,{map:Un(70+_*5+v,{blobs:50,streaks:320}),roughness:1}),M,.055,P,{cast:!1}));for(let I=0;I<(r===0?6:12);I++){const O=o()*Math.PI*2,W=7+o()*20;x.push({x:M+Math.cos(O)*W,z:P+Math.sin(O)*W,s:.75+o()*.55,ry:o()*6.28})}if(_===0&&v===0){const I=dt(new _n(13,40).rotateX(-Math.PI/2),h.mat,M,.08,P,{cast:!1,receive:!1});I.scale.set(1.35,1,.75),e.add(I),i.push(qn(M,P,13))}continue}if(A){e.add(dt(new Mt(54,.2,54),ct(10197910,{map:Ho(27),roughness:.95}),M,.1,P));const I=r===0?3:6;for(let O=0;O<I;O++){const W=M-18+O%3*17,Y=P-12+Math.floor(O/3)*24,tt=1+O%3;for(let $=0;$<tt;$++)m.push({m:ge(W,1.5+$*3,Y,O%2?Math.PI/2:0),c:[13123128,3963069,14788658,2858343,13093062][O%5]});i.push(He(W,Y,O%2?1.3:5.4,O%2?5.4:1.3,O%2?Math.PI/2:0))}continue}if(r===0&&(_+v)%2)continue;const C=4+o()*6,b=48-C*2,S=48-C*2,L=20+o()*95*(1-Math.hypot(M,P)/360*.35),H=dt(nc(b,L,S,9,12,9),[u[(_+v)%u.length],u[(_+v)%u.length],d,d,u[(_+v)%u.length],u[(_+v)%u.length]],M,L/2,P,{cast:r>0,receive:r>0});if(e.add(H),i.push(He(M,P,b/2,S/2)),L>66&&r>0){const I=dt(new Nt(.18,.18,12,6),ct(3752266,{metalness:.7}),M,L+6,P,{cast:!1});e.add(I)}}m.length&&e.add(re(new Mt(10.8,2.9,2.45),ct(16777215,{roughness:.6,metalness:.2}),m)),Rr(e,i,x,{kind:"oak",color:4619834,seed:83,nm:!0}),e.add(dt(new Nt(14,15,1.1,48),ct(11974838,{map:vn(30)}),0,.55,0)),e.add(dt(new Nt(10.8,10.8,.12,48),h.mat,0,1.13,0,{cast:!1,receive:!1})),i.push(qn(0,0,14.5));const p=ct(9186264,{emissive:4198509,emissiveIntensity:.42,roughness:.45});for(const[_,v,M]of[[-245,80,Math.PI/2],[245,-72,-Math.PI/2],[92,-244,0]])e.add(dt(new Mt(13,7,.45),p,_,8,v,{ry:M,cast:!1})),e.add(dt(new Nt(.32,.45,9,8),ct(3817543,{metalness:.7}),_,3.5,v,{cast:!1}));return RM(e,r),Go(e,a,{h:1.45,color:10265508,segs:192}),bc(e,{count:18,rMin:720,rMax:1020,hMin:70,hMax:190,colors:n.mountains,seed:98}),Ec(e,88,c),{wall:a,isl:0,roadHalf:14,spawn:{x:0,z:-88,h:0}}}let tn=150,Pi=38;const To=1.6;let Cp=13625087,bn=11;const ee=n=>document.getElementById(n),he=(n,t,e)=>Math.min(e,Math.max(t,n)),Xa=(n,t,e)=>n+(t-n)*e,Cr=n=>Math.atan2(Math.sin(n),Math.cos(n)),of=(n,t=0)=>{if(typeof n=="number"&&isFinite(n))return n;const e=parseFloat(n);return isFinite(e)?e:t},Oe=new p1({antialias:!0,powerPreference:"high-performance"});Oe.setPixelRatio(Math.min(devicePixelRatio,1.75));Oe.setSize(innerWidth,innerHeight);Oe.shadowMap.enabled=!1;Oe.shadowMap.type=Bh;Oe.toneMapping=Md;Oe.toneMappingExposure=1.05;document.body.prepend(Oe.domElement);const xe=new Jd;xe.fog=new Kh(Cp,180,800);const ke=new Tn(62,innerWidth/innerHeight,.1,3e3),kt=(n,t={})=>new un({color:n,flatShading:!0,roughness:.9,metalness:0,...t}),wr=new xt(new Yn(1500,48,32),new sn({color:5215208,side:je,fog:!1,depthWrite:!1}));xe.add(wr);function PM(n,t){const e=new Yn(1500,48,32),i=e.attributes.position,s=[],r=new $t(n),o=new $t(t),a=new $t;for(let c=0;c<i.count;c++)a.copy(r).lerp(o,Math.pow(he(i.getY(c)/1500,0,1),.6)),s.push(a.r,a.g,a.b);e.setAttribute("color",new Jt(s,3)),wr.geometry.dispose(),wr.geometry=e,wr.material.dispose(),wr.material=new sn({vertexColors:!0,side:je,fog:!1,depthWrite:!1})}const Rh=new K1(14675711,6978138,1.15),yn=new j1(16773590,2.6);yn.castShadow=!1;xe.add(Rh,yn,yn.target);{const n=new _h(Oe);xe.environment=n.fromScene(new vM,.04).texture,xe.environmentIntensity=.55,n.dispose()}yn.shadow.mapSize.set(2048,2048);Object.assign(yn.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:10,far:260});yn.shadow.bias=-4e-4;yn.shadow.normalBias=.06;yn.shadow.camera.updateProjectionMatrix();const LM=(()=>{const n=document.createElement("canvas");n.width=128,n.height=128;const t=n.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128);for(let i=0;i<800;i++)t.fillStyle="rgba(0,0,0,"+Math.random()*.16+")",t.fillRect(Math.random()*128,Math.random()*128,2,2);t.fillStyle="#f4f4f4",t.fillRect(0,0,4,128),t.fillRect(124,0,4,128),t.fillStyle="#c81020",t.fillRect(5,0,2,128),t.fillRect(121,0,2,128);const e=new gi(n);return e.wrapS=Zi,e.wrapT=zi,e.anisotropy=4,e.colorSpace=en,e})(),IM=(()=>{const n=document.createElement("canvas");n.width=64,n.height=16;const t=n.getContext("2d");t.fillStyle="#e3262e",t.fillRect(0,0,64,16),t.fillStyle="#f4f4f4";for(let i=0;i<4;i++)t.fillRect(i*16+8,0,8,16);const e=new gi(n);return e.wrapS=e.wrapT=zi,e.anisotropy=4,e.colorSpace=en,e})(),DM=(()=>{const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64);for(let s=0;s<400;s++)t.fillStyle="rgba(30,30,30,"+Math.random()*.6+")",t.fillRect(Math.random()*64,Math.random()*64,2,2);const e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(0,0,0,0.1)"),e.addColorStop(.3,"rgba(0,0,0,1)"),e.addColorStop(.7,"rgba(0,0,0,1)"),e.addColorStop(1,"rgba(0,0,0,0.1)"),t.globalCompositeOperation="destination-in",t.fillStyle=e,t.fillRect(0,0,64,64);const i=new gi(n);return i.wrapS=i.wrapT=zi,i.anisotropy=4,i})(),rs=[{id:"sunset",name:"Sunset Arena",category:"track",desc:"Long oval, two wide sweepers. A classic drift shape.",sky:[13625087,5215208],fog:13625087,terrain:8829007,road:5263962,mountains:[8229816,7315288,9086624],decor:"trees",night:!1,slippery:!1,weather:"clear",wall:165,island:!0,roadHalf:13,grip:.6,curb:!0,poles:!1,sun:2.6,hemi:1.15,track:[[0,130],[100,85],[100,-85],[0,-130],[-100,-85],[-100,85]]},{id:"neon",name:"Neon Docks",category:"track",desc:"Tight zigzag under the harbour lights. Wet asphalt.",sky:[1312804,3807834],fog:1839152,terrain:1315358,road:3158080,mountains:[2757696,3809360,1707052],decor:"cranes",night:!0,slippery:!1,weather:"rain",wall:150,island:!1,roadHalf:10,grip:.55,curb:!0,poles:!0,sun:.5,hemi:.55,track:[[0,120],[60,105],[85,55],[45,20],[85,-25],[55,-85],[0,-120],[-55,-85],[-85,-25],[-45,20],[-85,55],[-60,105]]},{id:"frost",name:"Frost Peak",category:"track",desc:"Fourteen-turn switchback on snow. Grip is a suggestion.",sky:[14215416,8960232],fog:13689076,terrain:15134454,road:8949400,mountains:[13162728,11057352,13689072],decor:"pines",night:!1,slippery:!0,weather:"snow",wall:185,island:!0,roadHalf:11,grip:.4,curb:!0,poles:!1,sun:2,hemi:1.4,track:[[0,155],[80,140],[110,90],[60,60],[110,10],[70,-35],[120,-85],[45,-155],[-45,-140],[-100,-75],[-50,-35],[-110,20],[-65,80],[-110,130],[-65,155]]},{id:"harbor",name:"Harbour Loop",category:"track",desc:"Enormous outer ring. Two very long straights. Top-speed heaven.",sky:[16758922,5913226],fog:12617888,terrain:4872778,road:4737114,mountains:[6965882,5913194,8018570],decor:"cranes",night:!1,slippery:!1,weather:"fog",wall:205,island:!1,roadHalf:14,grip:.7,curb:!0,poles:!0,sun:2.2,hemi:1,track:[[0,185],[130,140],[180,0],[130,-140],[0,-185],[-130,-140],[-180,0],[-130,140]]},{id:"canyon",name:"Red Canyon",category:"track",desc:"Figure-eight crossover with a tight centre chicane.",sky:[16767136,13660224],fog:14721136,terrain:12609600,road:6965818,mountains:[10506296,9060400,12085320],decor:"rocks",night:!1,slippery:!1,weather:"clear",wall:175,island:!0,roadHalf:11,grip:.65,curb:!0,poles:!1,sun:2.8,hemi:1,track:[[0,160],[110,115],[120,25],[35,0],[120,-25],[110,-115],[0,-160],[-110,-115],[-120,-25],[-35,0],[-120,25],[-110,115]]},{id:"city",name:"Downtown",category:"freeroam",kind:"city",desc:"Grid of downtown streets, tall buildings, sidewalk lights.",sky:[12113151,4881096],fog:13162728,terrain:2764344,road:4211274,mountains:[6978186,5925498,8030874],decor:"city",night:!1,slippery:!1,weather:"clear",wall:200,island:!1,roadHalf:10,grip:.7,curb:!1,poles:!0,sun:2.8,hemi:.9,track:[]},{id:"cargo",name:"Cargo Bay",category:"freeroam",kind:"cargo",desc:"Shipping container yard. Tight spaces, warehouse, maze of containers.",sky:[13160664,5923440],fog:11581632,terrain:5790820,road:4738132,mountains:[7370884,6318194,8423572],decor:"cargo",night:!1,slippery:!1,weather:"fog",wall:175,island:!1,roadHalf:12,grip:.72,curb:!1,poles:!0,sun:2,hemi:1,track:[]},{id:"park",name:"City Park",category:"freeroam",kind:"park",desc:"Winding park paths, trees everywhere, a pond in the middle.",sky:[13692159,6990048],fog:14215412,terrain:5933642,road:9075290,mountains:[8034922,6982234,9087098],decor:"park",night:!1,slippery:!1,weather:"clear",wall:165,island:!1,roadHalf:8,grip:.78,curb:!1,poles:!1,sun:2.8,hemi:1.15,track:[]},{id:"metro",name:"Metro Drive",category:"freeroam",kind:"metro",desc:"A GTA-style city run: downtown, park, docks, billboards, and a looping freeway.",sky:[11193583,4352924],fog:12044761,terrain:7370362,road:4343631,mountains:[6914451,6125926,8492193],decor:"metro",night:!1,slippery:!1,weather:"clear",wall:360,island:!1,roadHalf:14,grip:.72,curb:!1,poles:!0,sun:2.65,hemi:.95,track:[]}],Pe=new me;xe.add(Pe);let Ne=rs[0],Vn=[],Ln=null;const hi=[],af=[];let qa={x:0,z:-75,h:0};const In=[],En={x:0,z:95,r:8,mesh:null};let Pr=0,Ml=0,Is=null;function UM(){Pe.traverse(n=>{n.geometry&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),Pe.clear(),Ln=null,Vn=[],hi.length=0,af.length=0,In.length=0,Is&&(xM(xe,Is),Is=null)}function Pp(n,t){const e=n.length,i=[];for(let s=0;s<e;s++){const[r,o]=n[s],[a,c]=n[(s-1+e)%e],[l,h]=n[(s+1)%e];let f=r-a,u=o-c;const d=Math.hypot(f,u)||1;f/=d,u/=d;let g=l-r,x=h-o;const m=Math.hypot(g,x)||1;g/=m,x/=m;let p=f+g,_=u+x;const v=Math.hypot(p,_)||1;p/=v,_/=v;const M=-_,P=p,T=he(f*g+u*x,-.85,1),A=Math.min(1.5,1/Math.max(.55,(T+1)/2));i.push({x:r,z:o,dx:M*t*A,dz:P*t*A,ax:p,az:_})}return i}function NM(n,t){const e=Pp(n,t),i=e.length,s=[],r=[],o=[];for(let c=0;c<i;c++){const l=e[c];s.push(l.x+l.dx,.08,l.z+l.dz),s.push(l.x-l.dx,.08,l.z-l.dz);const h=c/i*14;r.push(0,h),r.push(1,h)}for(let c=0;c<i;c++){const l=(c+1)%i,h=c*2,f=c*2+1,u=l*2,d=l*2+1;o.push(h,u,f,f,u,d)}const a=new we;return a.setAttribute("position",new Jt(s,3)),a.setAttribute("uv",new Jt(r,2)),a.setIndex(o),a.computeVertexNormals(),a}function FM(n,t){const e=new me,i=n.length,s=new un({map:IM.clone(),roughness:.7,metalness:0,side:Ce});s.map.repeat.set(1,1),s.map.needsUpdate=!0;const r=new Te(.9,4).rotateX(-Math.PI/2);for(let o=0;o<i;o++){const[a,c]=n[o],[l,h]=n[(o+1)%i],f=l-a,u=h-c,d=Math.hypot(f,u),g=Math.atan2(f,u),x=-Math.cos(g),m=Math.sin(g),p=Math.max(2,Math.floor(d/4));if(d<50)for(let v=0;v<p;v++){const M=(v+.5)/p,P=a+f*M,T=c+u*M;for(const A of[1,-1]){const C=new xt(r,s);C.position.set(P+x*t*A,.1,T+m*t*A),C.rotation.y=g,e.add(C)}}}return e}function zM(n){const t=[],e=n.length;for(let i=0;i<e;i++){const[s,r]=n[i],[o,a]=n[(i+1)%e],c=o-s,l=a-r,h=Math.hypot(c,l),f=Math.max(2,Math.ceil(h/8));for(let u=0;u<f;u++){const d=u/f;t.push({x:s+c*d,z:r+l*d})}}return t}function OM(n){tn=n.wall,Pi=n.island?38:0,bn=n.roadHalf;const t=new xt(new _n(tn+40,40).rotateX(-Math.PI/2),kt(n.terrain,{roughness:1,metalness:0}));t.position.y=-.02,Pe.add(t);const e=new xt(new Bs(tn-3,tn+4,64).rotateX(-Math.PI/2),new sn({color:n.night?2757696:2763306}));e.position.y=-.01,Pe.add(e);const i=NM(n.track,bn),s=new un({map:LM,color:n.road,roughness:.85,metalness:.05,side:Ce,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});if(Pe.add(new xt(i,s)),n.curb&&Pe.add(FM(n.track,bn+.5)),Vn=zM(n.track),n.island){const a=new xt(new Nt(Pi-1,Pi+1.5,3,20),kt(n.night?3811930:8029080));a.position.y=1.5;const c=new xt(new Nt(Pi-3,Pi-3,.2,20),kt(n.slippery?13162728:6265443));c.position.y=3.05;const l=new xt(new Nt(4,6,22,6),kt(15327700));l.position.y=14;const h=new xt(new Dn(7,7,6),kt(15087942));h.position.y=28.5,Pe.add(a,c,l,h)}{const a=document.createElement("canvas");a.width=a.height=64;const c=a.getContext("2d");c.strokeStyle=n.night?"#4ec8ff":"#c8c8c8",c.lineWidth=3,c.beginPath(),c.moveTo(0,0),c.lineTo(64,64),c.moveTo(64,0),c.lineTo(0,64),c.stroke();const l=new gi(a);l.wrapS=l.wrapT=zi,l.repeat.set(180,3);const h=new xt(new Nt(tn+6,tn+6,7,80,1,!0),new sn({map:l,transparent:!0,alphaTest:.4,side:Ce,opacity:n.night?.85:1}));h.position.y=3.5,Pe.add(h)}{const c=new li(new Nt(.9,.9,.55,8),kt(1710622),60),l=new li(new Nt(.9,.9,.55,8),kt(16053492),60),h=new Ue;for(let f=0;f<60;f++){const u=f/60*Math.PI*2;h.position.set(Math.sin(u)*(tn-3),.28,Math.cos(u)*(tn-3)),h.rotation.set(0,u,0),h.updateMatrix(),c.setMatrixAt(f,h.matrix),h.position.y=.82,h.updateMatrix(),l.setMatrixAt(f,h.matrix)}c.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,Pe.add(c,l)}const r=(a,c)=>{const l=(bn+6)*(bn+6);for(let h=0;h<Vn.length;h++){const f=a-Vn[h].x,u=c-Vn[h].z;if(f*f+u*u<l)return!0}return!1};for(let a=0;a<18;a++){let c,l,h=0;do{const u=Math.random()*Math.PI*2,d=60+Math.random()*(tn-65);c=Math.sin(u)*d,l=Math.cos(u)*d,h++}while(r(c,l)&&h<20);if(h>=20)continue;const f=new me;if(n.id==="sunset"){const u=kt(1842208),d=kt(16053492),g=new Nt(1.1,1.1,.5,8);for(let x=0;x<3;x++){const m=new xt(g,x===1?d:u);m.position.y=.25+x*.5,f.add(m)}hi.push({x:c,z:l,r:1.2})}else if(n.id==="neon"){const u=kt(6965802),d=new Mt(1.5,1.5,1.5);for(let g=0;g<2;g++){const x=new xt(d,u);x.position.set(0,.75+g*1.5,0),f.add(x)}hi.push({x:c,z:l,r:1.3})}else if(n.id==="frost"){const u=kt(13162728),d=new xt(new Lo(1.2,0),u);d.position.y=.7,f.add(d),hi.push({x:c,z:l,r:1.3})}else if(n.id==="harbor"){const u=kt(12728874),d=new Nt(.5,.5,1.1,8);for(let g=0;g<3;g++){const x=new xt(d,u);x.position.set((g-1)*.9,.55,0),f.add(x)}hi.push({x:c,z:l,r:1.2})}else{const u=kt(10506296),d=new xt(new Lo(1.5,0),u);d.position.y=.7,f.add(d),hi.push({x:c,z:l,r:1.4})}f.position.set(c,0,l),Pe.add(f)}for(let a=0;a<4;a++){const c=Math.floor(a/4*n.track.length),[l,h]=n.track[c],f=new sn({color:6737151,transparent:!0,opacity:.12,depthWrite:!1}),u=new xt(new Nt(14,14,.1,20),f);u.position.set(l,.11,h),Pe.add(u),In.push({x:l,z:h,r:14,mat:f,mesh:u})}{const[a,c]=n.track[0];En.x=a,En.z=c;const l=new xt(new Nt(En.r,En.r,.1,18),new sn({color:4063114,transparent:!0,opacity:.5,depthWrite:!1}));l.position.set(En.x,.12,En.z),Pe.add(l),En.mesh=l}if(n.poles){const a=kt(4869720,{metalness:.6,roughness:.4}),c=kt(16773312,{emissive:16771488,emissiveIntensity:2}),l=14;for(let h=0;h<l;h++){const f=h/l*Math.PI*2,u=tn-8,d=Math.sin(f)*u,g=Math.cos(f)*u,x=new me,m=new xt(new Nt(.15,.2,10,8),a);m.position.y=5,x.add(m);const p=new xt(new Mt(3,.2,.2),a);p.position.set(1.2,10,0),x.add(p);const _=new xt(new Mt(1.5,.5,1),a);_.position.set(2.4,9.85,0),x.add(_);const v=new xt(new Mt(1.2,.1,.8),c);v.position.set(2.4,9.55,0),x.add(v),x.position.set(d,0,g),x.rotation.y=-f+Math.PI/2,Pe.add(x)}}const o=(a,c)=>{const l=(bn+14)*(bn+14);for(let h=0;h<Vn.length;h++){const f=a-Vn[h].x,u=c-Vn[h].z;if(f*f+u*u<l)return!1}return!0};if(n.decor==="trees"||n.decor==="pines"){const c=new li(new Nt(.35,.5,3,5),kt(5981750),70),l=n.slippery?2906696:4028986,h=new li(new Dn(2.6,7,6),kt(l),70),f=new Ue;let u=0;for(let d=0;d<70*4&&u<70;d++){const g=Math.random()*Math.PI*2,x=tn-25+Math.random()*20,m=Math.sin(g)*x,p=Math.cos(g)*x;if(!o(m,p))continue;const _=.8+Math.random()*1;f.position.set(m,1.5*_,p),f.scale.setScalar(_),f.updateMatrix(),c.setMatrixAt(u,f.matrix),f.position.y=7*_,f.updateMatrix(),h.setMatrixAt(u,f.matrix),u++}c.count=u,h.count=u,c.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,Pe.add(c,h)}else if(n.decor==="cranes")for(let a=0;a<8;a++){const c=a/8*Math.PI*2,l=tn+40+Math.random()*60,h=new me,f=kt(n.night?2759242:3816008);h.add(new xt(new Mt(2,30,2),f));const u=new xt(new Mt(2,2,22),f);u.position.set(0,15,10),h.add(u);const d=new xt(new Mt(3,3,3),kt(6965802));d.position.set(0,12,20),h.add(d),h.position.set(Math.sin(c)*l,15,Math.cos(c)*l),h.rotation.y=c,Pe.add(h)}else if(n.decor==="rocks")for(let a=0;a<50;a++){const c=a/50*Math.PI*2+Math.random()*.15,l=tn+15+Math.random()*130,h=2+Math.random()*5,f=new xt(new Lo(h,0),kt(n.mountains[a%3]));f.position.set(Math.sin(c)*l,h*.4,Math.cos(c)*l),f.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),Pe.add(f)}for(let a=0;a<14;a++){const c=a/14*Math.PI*2+Math.random()*.25,l=620+Math.random()*160,h=140+Math.random()*160,f=new xt(new Dn(100+Math.random()*80,h,5),kt(n.mountains[a%3]));f.position.set(Math.sin(c)*l,h/2-5,Math.cos(c)*l),f.rotation.y=Math.random()*6,Pe.add(f)}if(n.night){const c=new li(new Yn(1.4,3,3),new sn({color:16777215,fog:!1}),120),l=new Ue;for(let h=0;h<120;h++){const f=Math.random()*Math.PI*2,u=900+Math.random()*500,d=200+Math.random()*700;l.position.set(Math.sin(f)*u,d,Math.cos(f)*u),l.updateMatrix(),c.setMatrixAt(h,l.matrix)}Pe.add(c)}else{const a=document.createElement("canvas");a.width=a.height=96;const c=a.getContext("2d"),l=c.createRadialGradient(48,48,2,48,48,46);l.addColorStop(0,"rgba(255,255,255,0.9)"),l.addColorStop(.6,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=l,c.fillRect(0,0,96,96);const h=new gi(a);for(let f=0;f<8;f++){const u=Math.random()*Math.PI*2,d=500+Math.random()*500,g=200+Math.random()*180,x=new Zh(new _c({map:h,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}));x.scale.set(140+Math.random()*100,50+Math.random()*30,1),x.position.set(Math.sin(u)*d,g,Math.cos(u)*d),Pe.add(x)}}}function cf(n){if(UM(),Cp=n.fog,PM(n.sky[0],n.sky[1]),xe.fog.color.setHex(n.fog),xe.fog.near=n.night?100:180,xe.fog.far=n.night?650:900,Rh.color.setHex(n.night?5596842:14675711),Rh.intensity=n.hemi,yn.color.setHex(n.night?8952268:16773590),yn.intensity=n.sun,n.weather==="fog"&&(xe.fog.near=60,xe.fog.far=380),n.category==="track")OM(n);else{const t={city:SM,cargo:EM,park:TM,metro:CM}[n.kind],e=t(n,{group:Pe,obst:hi,updaters:af,quality:rt.set.quality});tn=e.wall,Pi=e.isl,bn=e.roadHalf,qa=e.spawn,Vn=[]}n.weather==="rain"?Is=mM(xe):n.weather==="snow"&&(Is=gM(xe))}const qt={active:!1,cp:0,time:0,gates:[],done:!1,countdown:0,countdownActive:!1,sloMo:0,finalTime:0};function Tc(n){Ln&&(Pe.remove(Ln),Ln.traverse(s=>{s.geometry&&s.geometry.dispose()})),Ln=new me,Pe.add(Ln),qt.gates=[];const t=n.track,e=t.length;if(!e)return;const i=Pp(t,bn+1);for(let s=0;s<e;s++){const r=i[s],o=Math.atan2(r.ax,r.az),a=new me;a.position.set(r.x,0,r.z),a.rotation.y=o;const c=s===0?4054106:16765503,l=kt(c,{emissive:c,emissiveIntensity:.35});for(const f of[-1,1]){const u=new xt(new Mt(.6,6,.6),l.clone());u.position.set(f*(bn+.6),3,0),a.add(u)}const h=new xt(new Mt((bn+.6)*2,.7,.4),l.clone());h.position.set(0,6.4,0),a.add(h),Ln.add(a),qt.gates.push({x:r.x,z:r.z,r:bn+1.2})}lf()}function lf(){Ln&&Ln.children.forEach((n,t)=>{const e=qt.cp===t,s=t<qt.cp?4054106:e?16765503:6710903;n.children.forEach(r=>{r.material&&r.material.color&&(r.material.color.setHex(s),r.material.emissive&&r.material.emissive.setHex(s),"emissiveIntensity"in r.material&&(r.material.emissiveIntensity=e?.9:.2))})})}const Qn={x:0,y:600,z:0};{const n=new me;n.position.set(Qn.x,Qn.y,Qn.z);const t=17,e=14,i=document.createElement("canvas");i.width=i.height=256;{const h=i.getContext("2d");h.fillStyle="#b8bdc6",h.fillRect(0,0,256,256);for(let f=0;f<256;f+=16)h.fillStyle=f%32?"#a7acb6":"#cfd3da",h.fillRect(f,0,8,256)}const s=new gi(i);s.wrapS=s.wrapT=zi,s.repeat.set(4,1),s.colorSpace=en;const r=new xt(new Mt(t*2,e,t*2),kt(16777215,{map:s,side:je}));r.position.y=e/2,n.add(r);const o=new xt(new Te(t*2,t*2).rotateX(-Math.PI/2),kt(8093318,{roughness:.55}));o.position.y=.01,n.add(o);const a=new xt(new Nt(4.6,4.6,.08,40),kt(3816778,{roughness:.5}));a.position.y=.05,n.add(a);const c=new xt(new Bs(4.2,4.5,48).rotateX(-Math.PI/2),new sn({color:16765503}));c.position.y=.1,n.add(c);const l=new lp(16773336,90,55,1.6);l.position.set(0,e-3,0),n.add(l),xe.add(n)}const sc=.4,BM=kt(1382172),Lp=kt(1382172,{side:Ce}),Ch=kt(924206,{roughness:.06,metalness:.6,side:Ce,transparent:!0,opacity:.62}),ju=kt(14080996,{metalness:.75,roughness:.28}),Gn=kt(15659768,{metalness:.98,roughness:.08}),Be=kt(789778,{roughness:.75,metalness:.15}),rc=kt(14886446,{roughness:.5}),kM=kt(4869720,{metalness:.6,roughness:.35}),Qu=kt(987157,{roughness:.95}),td=kt(16777215,{emissive:16773824,emissiveIntensity:1.7}),ed=kt(16775400,{emissive:16777215,emissiveIntensity:2.8}),yl=kt(16720435,{emissive:16716066,emissiveIntensity:1.5}),HM=kt(16774352,{emissive:16773312,emissiveIntensity:1}),GM=kt(16752688,{emissive:16742144,emissiveIntensity:1.5}),nd=kt(921621,{roughness:.9}),Sl=kt(1711396,{roughness:.9}),VM=kt(12589099,{roughness:.75}),id=kt(1447967,{roughness:.7}),wl=kt(12589099,{roughness:.65}),WM=kt(15519920,{roughness:.75}),XM=kt(14236475,{roughness:.5}),qM=kt(658708,{roughness:.15,metalness:.6});kt(1842724,{roughness:.85});kt(1842724,{metalness:.3,roughness:.6});const si=kt(2369326,{roughness:.55,metalness:.3}),YM=kt(658708,{roughness:.4,metalness:.4}),os=new me;xe.add(os);let wn=null;function Ip(n){let t=1/0,e=-1/0,i=1/0,s=-1/0;for(let r=0;r<n.pos.length;r+=3){const o=n.pos[r+1],a=n.pos[r+2];o<i&&(i=o),o>s&&(s=o),a<t&&(t=a),a>e&&(e=a)}return{zmin:t,zmax:e,ymin:i,ymax:s}}function oc(n,t){const e=new we;e.setAttribute("position",new Ge(n.pos,3)),e.setIndex(new Ge(n.index,1));for(const c of n.groups)e.addGroup(c.start,c.count,c.mat);e.computeVertexNormals();const i=e.attributes.position,s=e.attributes.normal,r=new Float32Array(i.count*2),o=t.zmax-t.zmin||1,a=t.ymax-t.ymin||1;for(let c=0;c<i.count;c++)if(Math.abs(s.getX(c))>.4){const l=(i.getZ(c)-t.zmin)/o;r[c*2]=he(s.getX(c)>0?1-l:l,.005,.995),r[c*2+1]=he((i.getY(c)-t.ymin)/a,.01,.99)}else r[c*2]=.005,r[c*2+1]=.995;return e.setAttribute("uv",new Ge(r,2)),e}function Dp(n,t,e){const r=document.createElement("canvas");r.width=512,r.height=256;const o=r.getContext("2d"),a=new $t(t),l=a.r*.3+a.g*.59+a.b*.11>.6,h=p=>he((p-e.zmin)/(e.zmax-e.zmin),0,1)*512,f=p=>(1-he((p-e.ymin)/(e.ymax-e.ymin),0,1))*256;o.fillStyle="#"+a.getHexString(),o.fillRect(0,0,512,256);const u=o.createLinearGradient(0,0,0,256);u.addColorStop(0,"rgba(255,255,255,0.16)"),u.addColorStop(.55,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.34)"),o.fillStyle=u,o.fillRect(0,0,512,256),o.fillStyle=l?"#101528":"#08080e",o.fillRect(0,f(.28),512,256-f(.28));const d=l?"#c81f2e":"#ffd23f",g=f(.6),x=f(.52);o.fillStyle=d,o.fillRect(h(-2.6),g,h(2.6)-h(-2.6),x-g),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(h(-2.6),g-2,h(2.6)-h(-2.6),2),o.fillStyle="rgba(0,0,0,0.55)",o.fillRect(h(.62),f(.82),2,f(.28)-f(.82)),o.fillRect(h(-1.05),f(.82),2,f(.28)-f(.82));const m=new gi(r);return m.colorSpace=en,m.anisotropy=4,m}const Up=(n,t,e)=>new un({map:Dp(n,t,e),flatShading:!0,roughness:.42,metalness:.22,side:Ce});function $M(n,t){n&&(n.solid.color.setHex(t),n.paint.map.dispose(),n.paint.map=Dp(n.def,t,n.bb),n.paint.needsUpdate=!0)}function KM(n){const t=new me,e=new me;t.add(e);const i=n.R*.68,s=n.w*.9,r=new xt(new Nt(n.R,n.R,n.w,20).rotateZ(Math.PI/2),Qu);e.add(r);for(const h of[-n.w/2+.01,n.w/2-.01]){const f=new xt(new ks(n.R*.82,.014,4,20).rotateY(Math.PI/2),Qu);f.position.x=h,e.add(f)}e.add(new xt(new Nt(i,i,s,18).rotateZ(Math.PI/2),kM));const o=new xt(new ks(i-.008,.016,6,24).rotateY(Math.PI/2),Gn);e.add(o),e.add(new xt(new Nt(i*.22,i*.22,s*1.04,12).rotateZ(Math.PI/2),Gn)),e.add(new xt(new Nt(i*.11,i*.11,s*1.08,10).rotateZ(Math.PI/2),rc));for(let h=0;h<7;h++){const f=new me;f.rotation.x=h*Math.PI*2/7;const u=new xt(new Mt(s*.55,i*.9,.02),ju);u.position.y=i*.45,f.add(u);const d=new xt(new Mt(s*.55,i*.9,.006),kt(9080984,{metalness:.7,roughness:.3}));d.position.set(0,i*.45,.012),f.add(d),e.add(f)}const a=new Nt(.008,.008,s*1.05,6).rotateZ(Math.PI/2);for(let h=0;h<5;h++){const f=h*Math.PI*2/5+.3,u=new xt(a,ju);u.position.y=Math.cos(f)*i*.3,u.position.z=Math.sin(f)*i*.3,e.add(u)}const c=new xt(new Nt(n.R*.52,n.R*.52,.022,18).rotateZ(Math.PI/2),kt(5264476,{metalness:.5,roughness:.5}));c.position.x=-n.w*.22,t.add(c);for(let h=0;h<12;h++){const f=h*Math.PI*2/12,u=new xt(new Nt(.007,.007,.026,6).rotateZ(Math.PI/2),Be);u.position.set(-n.w*.22,Math.cos(f)*n.R*.38,Math.sin(f)*n.R*.38),t.add(u)}const l=new xt(new Mt(n.w*.32,n.R*.4,n.R*.24),rc);l.position.set(-n.w*.22,n.R*.42,n.R*.1),t.add(l);for(const h of[-.06,.06]){const f=new xt(new Nt(.012,.012,n.w*.34,6).rotateZ(Math.PI/2),Be);f.position.set(-n.w*.22,n.R*.42+h,n.R*.1),t.add(f)}return{grp:t,roll:e}}function Np(n,t){const e=up(n),i=dp(n),s=Ip(e),r=Up(n,t,s),o=kt(t,{roughness:.5,metalness:.18,side:Ce}),a=kt(t,{roughness:.5,metalness:.18}),c=new me,l=new me,h=new me;l.position.y=sc,h.position.y=-sc,c.add(l),l.add(h);const f=(N,D,z,w,y,F=h)=>{const X=new xt(N,D);return X.position.set(z,w,y),F.add(X),X},u=(N,D,z,w,y,F,X,j)=>f(new Mt(N,D,z),w,y,F,X,j),d=n.rows,g=d[0],x=d[d.length-1],m=g.slice(1),p=x.slice(1),_=g[0],v=x[0];f(oc(e,s),[r,Lp],0,0,0),f(oc(i,s),[Ch,r],0,0,0);const M=n.cab[1][0],P=n.cab[2][0],T=(M+P)/2,A=uo(n,M),C=uo(n,P),b=uo(n,T),S=b.yb,H=Math.min(A.yr,C.yr,b.yr)-S,I=he(H/.52,.62,1.05),O=m[0],W=m[4],Y=O+(W-O)*.58,tt=Je(m,Y),$=Math.min(.15,(W-O)*.32);if(n.popup)for(const N of[1,-1]){const D=ri(d,_-.35)[4];u(.34,.014,.22,td,N*.5,D+.008,_-.35),u(.37,.008,.25,Be,N*.5,D+.003,_-.35)}else for(const N of[1,-1])u(tt*.85,$*1.4,.05,Gn,N*tt*.55,Y,_+.005),u(tt*.72,$*1.15,.04,Be,N*tt*.55,Y,_+.032),u(tt*.6,$*.95,.02,td,N*tt*.55,Y,_+.048),u(tt*.22,$*.5,.015,ed,N*tt*.55+N*.02,Y-.01,_+.058),u(.02,$*1.05,.02,ed,N*(tt*.55+tt*.28),Y,_+.05);const ut=O+(W-O)*.22,St=Je(m,ut);u(St*1.6,.11,.03,Be,0,ut,_+.012);for(const N of[-.03,-.01,.01,.03])u(St*1.5,.008,.035,Gn,0,ut+N,_+.026);u(.05,.05,.015,Gn,0,ut,_+.04),u(.026,.026,.018,rc,0,ut,_+.048),u(Je(m,O+.06)*1.92,.075,.09,Be,0,O+.05,_+.01);for(const N of[1,-1]){const D=Je(m,O+.22),z=u(D*.5,.02,.16,si,N*D*.7,O+.24,_+.03);z.rotation.x=-.14}const Tt=Je(m,O)*2+.06,Vt=f(new Mt(Tt,.03,1),si,0,O-.02,_);for(const N of[1,-1])u(.025,.11,.12,si,N*(Tt/2-.05),O+.07,_+.02);u(.045,.035,.045,rc,-Je(m,O+.14)*.6,O+.15,_+.03);{const N=O+.18;u(Je(m,N)*.55,.09,.015,kt(15987699),0,N,_+.05),u(Je(m,N)*.5,.015,.018,Be,0,N+.02,_+.052)}const Wt=p[0],st=p[4],at=Wt+(st-Wt)*.55,wt=Je(p,at),lt=Math.min(.15,(st-Wt)*.34);for(const N of[1,-1])u(wt*.85,lt*1.35,.05,Gn,N*wt*.55,at,v-.005),u(wt*.78,lt*1.2,.04,Be,N*wt*.55,at,v-.032),u(wt*.7,lt,.02,yl,N*wt*.55,at,v-.048),u(wt*.15,lt*.55,.022,GM,N*wt*.24,at-lt*.08,v-.058),u(wt*.13,lt*.45,.022,HM,N*wt*.42,at-lt*.1,v-.058),u(.02,lt*1.05,.02,yl,N*(wt*.55+wt*.32),at,v-.05);u(wt*1.15,.024,.02,yl,0,at,v-.048),u(Je(p,Wt+.06)*1.92,.075,.09,Be,0,Wt+.05,v-.01);const Dt=Je(p,Wt)*1.92;u(Dt,.11,.26,si,0,Wt+.1,v-.09);for(let N=-2;N<=2;N++)u(.016,.09,.24,si,N*Dt/5.5,Wt+.1,v-.115);{const N=Wt+.09,D=Je(p,N)*.6,z=new Nt(.052,.052,.14,12).rotateX(Math.PI/2);for(const w of[1,-1]){f(z,Gn,w*D,N,v-.02);const y=new xt(new Nt(.036,.036,.14,10).rotateX(Math.PI/2),Be);y.position.set(w*D,N,v-.022),h.add(y)}}{const N=Wt+.24;u(Je(p,N)*.55,.09,.015,kt(15987699),0,N,v-.07),u(Je(p,N)*.5,.015,.018,Be,0,N-.02,v-.072)}u(.045,.045,.02,Gn,0,Wt+.38,v-.075);{const N=n.cab[0][0]-.15,D=uo(n,N),z=D.wb+.02,w=D.yb+.14;for(const y of[1,-1])u(.06,.02,.02,Be,y*(z+.04),w,N),u(.09,.07,.13,o,y*(z+.12),w,N),u(.008,.05,.11,Ch,y*(z+.168),w,N)}for(const N of[1,-1]){const D=Je(ri(d,.35),.55);u(.02,.04,.14,Gn,N*(D+.006),.6,.35)}for(const N of[1,-1]){const D=ri(d,0),z=u(.06,.11,n.wb*.95,a,N*(D[1]*.95),D[0]+.07,0);z.rotation.z=N*.08}const Ht=uo(n,n.bpillar),J=Ht.yr-Ht.yb;if(J>.08)for(const N of[1,-1])u(.04,J,.06,o,N*(Ht.wb*.97),Ht.yb+J/2,n.bpillar);if(n.vents){const N=n.vents,D=Je(ri(d,N.z),N.y);for(const z of[1,-1])u(.02,N.h*.9,N.l,Be,z*(D+.005),N.y,N.z),u(.026,.018,N.l*.9,Gn,z*(D+.008),N.y,N.z),u(.026,.018,N.l*.9,Gn,z*(D+.008),N.y+N.h*.5,N.z)}if(n.scoop){const N=n.scoop,D=ri(d,N.z)[4];u(N.w,N.h,N.l,o,0,D+N.h/2,N.z),u(N.w*.85,N.h*.7,.02,Be,0,D+N.h*.55,N.z+N.l*.5);for(let z=0;z<3;z++)u(N.w*.8,.005,.015,si,0,D+N.h*.55,N.z+N.l*.5+.012+z*.008)}if(!n.scoop){const D=ri(d,1.1)[4];for(const z of[1,-1]){u(.2,.022,.24,Be,z*.35,D+.005,1.1);for(let w=0;w<3;w++)u(.17,.014,.02,si,z*.35,D+.018,1.02+w*.08)}}f(new Nt(.006,.006,.32,6),Be,-.14,C.yr+.16,C.z+.25);for(const N of[1,-1]){const D=new xt(new Mt(.02,.015,.36),Be);D.position.set(N*.2,A.yb-.01,M+.06),D.rotation.y=N*.28,h.add(D)}{const D=Je(ri(d,-1.8),.55);for(const z of[1,-1]){const w=new xt(new Nt(.05,.05,.014,14).rotateZ(Math.PI/2),Gn);w.position.set(z*(D+.006),.6,-1.8),h.add(w)}}const ht=n.wingSpec,K=ri(d,ht.z)[4]-.005,nt=new me;nt.position.set(0,K,ht.z),h.add(nt);for(const N of[1,-1])u(.05,ht.h,.08,si,N*ht.hw*.62,ht.h/2,0,nt);const R=new me;R.position.y=ht.h,nt.add(R),u(ht.hw*2,.032,ht.chord,si,0,0,0,R);for(const N of[1,-1])u(.02,.18,ht.chord+.08,si,N*(ht.hw+.012),0,0,R),u(.024,.006,ht.chord*.7,wl,N*(ht.hw+.02),.045,0,R);u(ht.hw*2,.02,.032,wl,0,.026,-ht.chord*.44,R);const _t=Math.min(b.wb,b.wr)*.94;u(_t*2,.012,M-P-.06,nd,0,S+.006,T),u(_t*1.9,.15,.22,nd,0,S+.1,M-.1),u(_t*1.9,.02,.24,kt(1711138),0,S+.185,M-.1),u(.3,.1,.06,Be,-.3,S+.2,M-.18);for(const N of[-.07,.07]){const D=new xt(new Nt(.045,.045,.015,14).rotateX(Math.PI/2),YM);D.position.set(-.3+N,S+.2,M-.155),h.add(D)}u(.16,.09,.015,Be,.05,S+.19,M-.14);for(const N of[-1,1]){const D=new me,z=new xt(new Mt(.34*I,.06*I,.36*I),Sl);z.position.y=.03*I,D.add(z);const w=new xt(new Mt(.34*I,.32*I,.08*I),Sl);w.position.set(0,.19*I,-.14*I),w.rotation.x=-.16,D.add(w);const y=new xt(new Mt(.18*I,.08*I,.06*I),Sl);y.position.set(0,.38*I,-.18*I),y.rotation.x=-.16,D.add(y);for(const F of[1,-1]){const X=new xt(new Mt(.03*I,.3*I,.09*I),VM);X.position.set(F*.17*I,.19*I,-.13*I),X.rotation.x=-.16,D.add(X)}D.position.set(N*.3,S+.02,T+.08),h.add(D)}{const N=new me,D=new xt(new Mt(.26*I,.32*I,.18*I),id);D.position.y=.2*I,N.add(D);for(const vt of[1,-1]){const mt=new xt(new Mt(.022*I,.26*I,.004),wl);mt.position.set(vt*.07*I,.2*I,.093*I),N.add(mt)}const z=new xt(new Mt(.32*I,.05*I,.17*I),id);z.position.y=.36*I,N.add(z);const w=new xt(new Yn(.075*I,12,10),WM);w.position.y=.46*I,N.add(w);const y=new xt(new Yn(.09*I,14,10,0,Math.PI*2,0,Math.PI*.72),XM);y.position.y=.46*I,N.add(y);const F=new xt(new Mt(.14*I,.05*I,.02),qM);F.position.set(0,.46*I,.075*I),N.add(F);const X=new me;X.position.set(0,.2*I,.25*I),X.rotation.x=1.15,N.add(X);const j=new me;X.add(j);const k=.11*I;j.add(new xt(new ks(k,.014*I,8,22),Be)),j.add(new xt(new Mt(k*2,.015*I,.015*I),Be)),N.position.set(-.3,S+.02,T-.02),h.add(N)}const ot=pp(n),Et=[];for(const N of["front","rear"]){const D=ot[N],z=N==="front",w=new ks(D.R+.06,.055,6,16,Math.PI).rotateY(Math.PI/2);for(const y of[1,-1]){const F=new me,X=new me,j=new me;F.position.set(y*D.x,D.R,D.z),F.add(X),X.add(j),c.add(F);const k=KM(D),vt=Array.from(k.grp.children[0].children);for(const yt of vt)j.add(yt);for(let yt=1;yt<k.grp.children.length;yt++)X.add(k.grp.children[yt]);const mt=f(w,o,y*(D.x+.02),D.R,D.z);Et.push({pivot:F,camberG:X,roll:j,flare:mt,sx:y,axle:N,front:z,R:D.R,baseX:D.x})}}return{def:n,root:c,pivot:l,body:h,paint:r,solid:o,wheels:Et,wing:nt,plane:R,splitter:Vt,lay:ot,nz:_,nose:m,tune:null,toe:{front:0,rear:0},rearX:ot.rear.x,bb:s}}function Lr(n,t=wn){if(!t)return;const e=Math.PI/180;t.tune=n,t.toe={front:n.toeF*e,rear:n.toeR*e};for(const s of t.wheels)s.camberG.rotation.z=-s.sx*(s.front?n.camberF:n.camberR)*e,s.pivot.position.x=s.sx*(s.baseX+n.offset/1e3),s.flare.position.x=s.sx*(s.baseX+.02+n.offset/1e3);t.rearX=t.lay.rear.x+n.offset/1e3,t.wing.visible=n.wing>0,t.plane.rotation.x=n.wing*2.5*e;const i=.03+.035*n.splitter;t.splitter.visible=n.splitter>0,t.splitter.scale.z=i,t.splitter.position.z=t.nz+i/2-.04}function jr(n,t,e){wn&&(os.remove(wn.root),wn.root.traverse(i=>i.geometry&&i.geometry.dispose()),wn.paint.map.dispose(),wn.paint.dispose(),wn.solid.dispose()),wn=Np(n,t),os.add(wn.root),Lr(e),Oe.shadowMap.enabled&&wn.root.traverse(i=>{i.isMesh&&(i.castShadow=!0)})}const hf="driftrun-save-v8",rt={cash:3e3,owned:["hachi"],car:"hachi",tier:0,paint:{},tune:{},map:"sunset",goals:{}};try{Object.assign(rt,JSON.parse(localStorage.getItem(hf)||"{}"))}catch{}Array.isArray(rt.owned)||(rt.owned=["hachi"]);rt.owned.includes("hachi")||rt.owned.push("hachi");(!mn[rt.car]||!rt.owned.includes(rt.car))&&(rt.car="hachi");zn[rt.tier]||(rt.tier=0);rs.find(n=>n.id===rt.map)||(rt.map="sunset");rt.set={ctrl:"tilt",sens:1,flip:!1,vib:!0,mute:!1,shadows:!0,quality:1,frameSaver:!0,...rt.set||{}};(!Number.isInteger(rt.set.quality)||rt.set.quality<0||rt.set.quality>2)&&(rt.set.quality=1);rt.set.frameSaver=rt.set.frameSaver!==!1;rt.goals=rt.goals||{};rt.tips=rt.tips||0;const Ie=()=>{try{localStorage.setItem(hf,JSON.stringify(rt))}catch{}},Xs=n=>rt.paint[n]??mn[n].paint,Vr=n=>({...ss(mn[n]),...rt.tune[n]||{}}),ZM=[15921906,16731501,16758531,3112447,7205058,10182117,16743168,14034984,48121,2303275];let ze=mn[rt.car],Re=Vr(rt.car),Nn=rt.tier,qs=Hr(zn[Nn],ze,Re);const Z={x:0,z:-95,h:Math.PI/2,vx:0,vz:0,steer:0,loose:0,rpm:.25,sp:0,slip:0,thr:0,vf:0,hb:!1,onRoad:!0,weightTransfer:0},ae={pitch:0,pv:0,roll:0,rv:0,heave:0,hv:0};let Ai=Z.h,vr=0,ff=0,ac=0,qe=0,Ya=0,As=0,Ni=0,Wn=1,bs=1,Wr=0,On=!1,Ms=0,JM=0,oe="home",cc=.22,Fo=7.6,Na=0,Rs=null,ei="free",lc=90,Ir=0,uf=[],_r=[],sd=0,df=0,$a=0,Ka={};try{Ka=JSON.parse(localStorage.getItem("driftrun-ach")||"{}")}catch{}const jM={long:"Drift 10s in one combo",k5:"Bank 5,000 at once",zone3:"Clear 3 zones",wall:"First wall ride",combo:"Reach x6",racer:"Finish a race"};let Dr=0;try{Dr=+localStorage.getItem("driftrun-best")||0}catch{}let Ds={};try{Ds=JSON.parse(localStorage.getItem("driftrun-race-bests")||"{}")}catch{}(!Ds||typeof Ds!="object")&&(Ds={});function Fp(n){const t=n||rt.map;return t?of(Ds[t],0):0}const QM=(n,t)=>{if(!n)return;const e=of(t,0);if(e>0){Ds[n]=e;try{localStorage.setItem("driftrun-race-bests",JSON.stringify(Ds))}catch{}}};function ty(){document.querySelectorAll("#classes .cls").forEach((n,t)=>{n.classList.toggle("on",t===Nn),n.setAttribute("aria-pressed",String(t===Nn)),n.title="Speed class "+(t+1)+": "+zn[t].name;const e=n.querySelector("small");e&&(e.textContent=Math.round(Hr(zn[t],ze,Re).top*3.6))})}function Us(){qs=Hr(zn[Nn],ze,Re),ty()}function Ac(n){rt.car=n,ze=mn[n],Re=Vr(n),jr(ze,Xs(n),Re),Us(),Ie()}function zp(){(!wn||wn.def!==ze)&&jr(ze,Xs(ze.id),Re)}function Op(n){Nn=n,rt.tier=n,Us(),Ie(),Mn("SPEED CLASS "+(n+1)+"  "+Math.round(qs.top*3.6)+" km/h")}function Bp(n){rt.map=n,Ie(),Ne=rs.find(t=>t.id===n)||rs[0],cf(Ne),Tc(Ne),pi()}function pi(){if(Ne.category==="track"&&Ne.track.length>1){const n=Ne.track,[t,e]=n[0],[i,s]=n[1],r=Math.atan2(i-t,s-e);Object.assign(Z,{x:t,z:e,h:r,vx:0,vz:0,steer:0,loose:0,weightTransfer:0})}else Object.assign(Z,{x:qa.x,z:qa.z,h:qa.h,vx:0,vz:0,steer:0,loose:0,weightTransfer:0});Ai=Z.h,qe=0,As=0,Ni=0,bs=1,df=0,$a=0,ei==="timed"&&(lc=90,Ir=0,uf=[]),ei==="race"&&(qt.cp=0,qt.time=0,qt.active=!1,qt.done=!1,qt.countdownActive=!1,qt.countdown=0,qt.sloMo=0,qt.finalTime=0,lf())}function pf(){const n=ee("hud");n&&(n.style.display=On||oe?"none":"");const t=document.body.classList;t.toggle("inmenu",!!oe),t.toggle("playing",!oe),t.toggle("photo",!!On&&!oe)}function ey(n,t){if(Ne.category!=="track"||!Vn.length)return!0;const e=(bn+2)*(bn+2);for(let i=0;i<Vn.length;i++){const s=Vn[i],r=n-s.x,o=t-s.z;if(r*r+o*o<e)return!0}return!1}function ny(n){const t=qs.bounce;let e=0,i=0,s=0;if(!oe)if(On){const u=Qp();e=Jp(),i=Lh(),s=u*.09*t.rollAmp,Z.steer+=(u-Z.steer)*Math.min(1,n*8)}else e=Z.thr,i=Lh(),s=he((Z.yaw||0)*Z.sp*.004,-.12,.12)*t.rollAmp;const r=((i?.04:0)-(e?.03:0))*t.pitchAmp,o=Math.max(1,Math.ceil(n/.01)),a=n/o,c=t.w,l=t.z,h=c*1.15,f=c*1.1;for(let u=0;u<o;u++)ae.pv+=(c*c*(r-ae.pitch)-2*l*c*ae.pv)*a,ae.pitch+=ae.pv*a,ae.rv+=(h*h*(s-ae.roll)-2*l*h*ae.rv)*a,ae.roll+=ae.rv*a,ae.hv+=(f*f*(0-ae.heave)-2*l*f*ae.hv)*a,ae.heave+=ae.hv*a;ae.pitch=he(ae.pitch,-.25,.25),ae.roll=he(ae.roll,-.3,.3),ae.heave=he(ae.heave,-.15,.15)}const hc=ee("menu"),dn=ee("mLeft"),kp=ee("mRight"),Hp=ee("mFoot"),q=(n,t={},...e)=>{const i=document.createElement(n);for(const[s,r]of Object.entries(t))s==="class"?i.className=r:s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:r!==!1&&r!=null&&i.setAttribute(s,r===!0?"":r);for(const s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(s));return i},Gs=n=>"#"+n.toString(16).padStart(6,"0"),ln=(n,t,e,i,s="")=>q("button",{class:"gbtn "+s,type:"button",onclick:i},q("span",{class:"ic"},n),q("span",{class:"tx"},q("span",{},t),e?q("small",{},e):null)),rn=(n,t,e="")=>q("button",{class:"gbtn sm "+e,type:"button",onclick:t},q("span",{class:"tx"},q("span",{},n))),Bi=(n,t)=>q("header",{},q("h1",{class:"m-title"},n),t?q("p",{class:"m-sub"},t):null),An=(n,...t)=>q("section",{class:"m-sec"},n?q("h3",{},n):null,...t),Ys=(...n)=>Hp.replaceChildren(...n.filter(Boolean)),iy=()=>Hp.replaceChildren(),$s=n=>q("div",{class:"m-status",role:"status"},n);function es(n){const t=dn.querySelector(".mscroll"),e=t?t.scrollTop:dn.scrollTop;n(),dn.scrollTop=e}function sy(n,t=96){if(n.category==="track"&&n.track&&n.track.length){const e=n.track,i=12,s=Math.max(1,...e.map(u=>Math.hypot(u[0],u[1]))),r=(t-i*2)/(s*2),o=t/2,a=t/2;let c="";for(let u=0;u<e.length;u++){const d=o+e[u][0]*r,g=a+e[u][1]*r;c+=(u===0?"M":"L")+d.toFixed(1)+","+g.toFixed(1)+" "}c+="Z";const l=n.night?"#4ec8ff":"#ffd23f",h=o+e[0][0]*r,f=a+e[0][1]*r;return'<svg viewBox="0 0 '+t+" "+t+'" width="100%" height="100%"><rect width="'+t+'" height="'+t+'" fill="'+(n.night?"rgba(20,10,40,0.6)":"rgba(30,30,40,0.35)")+'"/><path d="'+c+'" fill="none" stroke="#0b0820" stroke-width="8" stroke-linejoin="round" opacity="0.6"/><path d="'+c+'" fill="none" stroke="'+l+'" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="'+c+'" fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/><circle cx="'+h.toFixed(1)+'" cy="'+f.toFixed(1)+'" r="4.2" fill="#3ddc5a" stroke="#0b0820" stroke-width="1.5"/></svg>'}if(n.kind==="metro")return'<svg viewBox="0 0 96 96" width="100%" height="100%"><rect width="96" height="96" fill="#46515b"/><circle cx="48" cy="48" r="38" fill="none" stroke="#2a3038" stroke-width="12"/><circle cx="48" cy="48" r="38" fill="none" stroke="#f2f0e8" stroke-width="1.2" stroke-dasharray="4 3"/><path d="M8 48H88M48 8V88" stroke="#f2bc35" stroke-width="4"/><path d="M8 48H88M48 8V88" stroke="#f4f4ef" stroke-width="1" stroke-dasharray="5 4"/><rect x="19" y="18" width="16" height="20" fill="#70859a" stroke="#121720"/><rect x="61" y="18" width="16" height="20" fill="#8396a9" stroke="#121720"/><rect x="18" y="59" width="20" height="15" fill="#4b853f" stroke="#121720"/><rect x="60" y="58" width="20" height="16" fill="#bd5843" stroke="#121720"/></svg>';if(n.kind==="city"){let e="";for(let i=0;i<3;i++)for(let s=0;s<3;s++){const r=18+(i+s)*2,o=14+i*s*3;e+='<rect x="'+(14+i*26)+'" y="'+(14+s*26)+'" width="'+r+'" height="'+o+'" fill="#6a7280" stroke="#0b0820" stroke-width="1.4"/>'}return'<svg viewBox="0 0 96 96" width="100%" height="100%"><rect width="96" height="96" fill="rgba(30,30,40,0.35)"/><rect x="0" y="0" width="96" height="96" fill="#2a2e38"/><rect x="6" y="6" width="84" height="84" fill="#40444c"/>'+e+'<line x1="6" y1="48" x2="90" y2="48" stroke="#f4f4f4" stroke-width="1.4" stroke-dasharray="4 4"/><line x1="48" y1="6" x2="48" y2="90" stroke="#f4f4f4" stroke-width="1.4" stroke-dasharray="4 4"/></svg>'}if(n.kind==="cargo"){let e="";for(let i=0;i<6;i++){const s=8+i%3*28,r=12+Math.floor(i/3)*32,o=["#c23a2a","#2e6ab8","#e0a830","#2eaa5a","#a8a8a8","#d04060"][i];e+='<rect x="'+s+'" y="'+r+'" width="22" height="12" fill="'+o+'" stroke="#0b0820" stroke-width="1.2"/>',e+='<rect x="'+s+'" y="'+(r+14)+'" width="22" height="12" fill="'+o+'" stroke="#0b0820" stroke-width="1.2"/>'}return'<svg viewBox="0 0 96 96" width="100%" height="100%"><rect width="96" height="96" fill="#3a3e46"/><g transform="translate(64, 6)"><rect x="0" y="0" width="2" height="30" fill="#c8a020"/><rect x="-6" y="0" width="22" height="2" fill="#c8a020"/></g>'+e+"</svg>"}if(n.kind==="park"){let e="";const i=(s=>()=>(s=Math.sin(s)*1e4,s-Math.floor(s)))(Math.PI);for(let s=0;s<16;s++){const r=s/16*Math.PI*2+.3,o=26+i()*12,a=48+Math.sin(r)*o,c=48+Math.cos(r)*o;e+='<circle cx="'+a.toFixed(1)+'" cy="'+c.toFixed(1)+'" r="4.5" fill="#3d7a3a" stroke="#0b0820" stroke-width="1.2"/>'}return'<svg viewBox="0 0 96 96" width="100%" height="100%"><rect width="96" height="96" fill="#5a8a4a"/><ellipse cx="48" cy="48" rx="18" ry="14" fill="#2a5a8a" stroke="#0b0820" stroke-width="1.4"/><path d="M6,48 Q 20,32 42,44 T 90,48" fill="none" stroke="#9a8a6a" stroke-width="4" opacity="0.9"/>'+e+"</svg>"}return'<svg viewBox="0 0 96 96" width="100%" height="100%"><rect width="96" height="96" fill="#303038"/></svg>'}let Ye=null;function mf(){if(Ye){Ye.ctx&&Ye.ctx.resume&&Ye.ctx.resume();return}const n=window.AudioContext||window.webkitAudioContext;if(!n)return;const t=new n,e=t.createGain();e.connect(t.destination);const i=t.createOscillator();i.type="sawtooth";const s=t.createOscillator();s.type="square",s.detune.value=8;const r=t.createGain();r.gain.value=.5,i.connect(r),s.connect(r);const o=t.createBiquadFilter();o.type="lowpass",o.Q.value=2;const a=t.createWaveShaper();{const M=new Float32Array(1024);for(let P=0;P<1024;P++){const T=P/1023*2-1;M[P]=Math.tanh(T*1.6)}a.curve=M}const c=t.createGain();c.gain.value=0,r.connect(o).connect(a).connect(c).connect(e),i.start(),s.start();const l=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=l.getChannelData(0);for(let v=0;v<h.length;v++)h[v]=Math.random()*2-1;const f=t.createBufferSource();f.buffer=l,f.loop=!0;const u=t.createBiquadFilter();u.type="bandpass",u.Q.value=3.2,u.frequency.value=1800;const d=t.createGain();d.gain.value=0,f.connect(u).connect(d).connect(e),f.start();const g=t.createBufferSource();g.buffer=l,g.loop=!0;const x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=700;const m=t.createGain();m.gain.value=0,g.connect(x).connect(m).connect(e),g.start();const p=t.createGain();p.gain.value=0,p.connect(e);const _=[110,138.6,164.8,220].map(v=>{const M=t.createOscillator();return M.type="triangle",M.frequency.value=v,M.connect(p),M.start(),M});Ye={ctx:t,master:e,eng1:i,eng2:s,engG:c,lp:o,drive:a,bp:u,sg:d,windG:m,pad:p,pads:_},e.gain.value=rt.set.mute?0:1}function ai(n){if(!Ye||rt.set.mute)return;const t=Ye.ctx,e=t.currentTime,i=t.createOscillator(),s=t.createGain(),r={click:520,pop:700,back:380,pickup:980,hit:150,score:780,grow:1150,ding:1400,alarm:220}[n]||520;i.type=n==="hit"?"square":"triangle",i.frequency.setValueAtTime(r,e),i.frequency.exponentialRampToValueAtTime(r*1.6,e+.08),s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.12,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.15),i.connect(s),s.connect(Ye.master),i.start(e),i.stop(e+.17)}addEventListener("click",n=>{const t=n.target.closest&&n.target.closest("button");t&&ai(t.classList.contains("cls")?"pop":"click")});function Jo(){const n=ee("mCash"),t=ee("mBest");n&&(n.textContent="$"+rt.cash.toLocaleString()),t&&(t.textContent=Dr.toLocaleString())}function De(n){oe=n;for(const t in as)as[t]=!1;i0(),hc.classList.remove("off"),pf(),Jo(),n==="shop"?(Ji=rt.car,Ns="",jr(mn[Ji],Xs(Ji),Vr(Ji))):zp(),ry()}function Fi(){zp(),oe=null,document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),hc.classList.add("off"),pf(),mf(),pn&&(rt.set.ctrl==="tilt"&&(t0(),Ih()),rt.tips<4&&!On&&(rt.tips++,Ie(),e0()))}function Gp(){if(!oe)De(Zt?"pause":"home");else if(oe==="pause")Fi();else{if(oe==="mpend")return;oe==="maps"?De("home"):oe==="modes"?De("maps"):oe==="mpsetup"?De("modes"):oe==="home"?Fi():De("home")}}function ry(){Jo(),dn.className="m-main",kp.replaceChildren(),iy();try{oe==="home"?oy():oe==="shop"?Wo():oe==="edit"?Ao():oe==="settings"?qp():oe==="maps"?Yp():oe==="modes"?fy():oe==="mpsetup"?Kp():oe==="pause"?Zp():oe==="mpend"&&xy()}catch(n){console.error("menu error:",n),dn.replaceChildren(q("div",{class:"m-screen"},Bi("MENU ERROR"),q("p",{class:"m-sub"},String(n&&n.message||n))))}}function oy(){qo=null,dn.replaceChildren(q("div",{class:"m-screen"},Bi(q("span",{},"DRIFT "),q("span",{},"RUN")),q("p",{class:"m-sub"},"Slide it, hold it, chain it. Race the clock or just go sideways."),q("div",{class:"m-actions"},q("div",{class:"m-launch-row"},ln(">","Maps",Ne.name+" - pick a map and mode",()=>De("maps"),"primary"),ln("CITY","Metro Drive","Big city, freeway, docks, and park",()=>{Bp("metro"),ei="free",Fi()},"primary green")),ln("*","Shop","Buy new cars with banked cash",()=>De("shop")),ln("#","Garage","Tune, paint, and set stance",()=>De("edit")),ln("⌨","Controls","WASD drive  •  Space handbrake  •  Shift boost",()=>De("settings"),"blue"),ln("^","Settings","Input, camera, audio",()=>De("settings"),"blue")))),Ys($s(ze.name+" - class "+(Nn+1)+" ("+zn[Nn].name+") - "+Ne.name),null)}const vo=(n,t,e,i)=>{const s=q("button",{class:"tog"+(e()?" on":""),type:"button",role:"switch","aria-checked":String(!!e()),"aria-label":n,onclick:()=>{i(!e()),s.classList.toggle("on",!!e()),s.setAttribute("aria-checked",String(!!e()))}},q("i"));return q("div",{class:"trow"},q("div",{class:"tl"},q("b",{},n),t?q("div",{class:"hint"},t):null),s)},Cs=(n,t,e,i,s)=>{const r=q("div",{class:"seg"});return e.forEach((o,a)=>r.append(q("button",{class:"segb"+(i()===a?" sel":""),type:"button",onclick:()=>{s(a),r.querySelectorAll(".segb").forEach((c,l)=>c.classList.toggle("sel",l===a))}},o))),q("div",{class:"ctl"},q("div",{class:"clab"},q("span",{},n)),r,t?q("div",{class:"hint"},t):null)};function fc(n){rt.set.mute=n,Ie(),Ye&&(Ye.master.gain.value=n?0:1)}function Vp(n){On=n,pf(),n&&pn&&e0("Tap left or right to bounce the suspension")}let Ci=1,Fa=0,bl=0;const ay=()=>[.82,1.3,1.75][rt.set.quality]||1.3;function Wp(){const n=!!rt.set.shadows&&rt.set.quality!==0;Oe.shadowMap.enabled=n,yn.castShadow=n,os.traverse(t=>{t.isMesh&&(t.castShadow=n)}),xe.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.needsUpdate=!0)})}function Vo(){Oe.setPixelRatio(Math.min(devicePixelRatio,ay()*Ci)),Oe.setSize(innerWidth,innerHeight),Wp()}function cy(n){rt.set.quality=he(n,0,2),Ci=1,Ie(),Vo(),Ne.kind==="metro"&&(cf(Ne),Tc(Ne),pi()),oe==="settings"&&qp()}function Xp(n){if(!rt.set.frameSaver){Ci!==1&&(Ci=1,Vo());return}if(Fa+=n,bl++,Fa<.9)return;const t=bl/Fa,e=t<45?Math.max(.62,Ci-.1):t>57?Math.min(1,Ci+.04):Ci;Fa=0,bl=0,e!==Ci&&(Ci=e,Vo())}function ly(n){rt.set.shadows=n,Ie(),Wp()}function hy(){if(confirm("Reset all saved data? This wipes cash, cars, tunes, and best times.")){try{localStorage.removeItem(hf),localStorage.removeItem("driftrun-race-bests"),localStorage.removeItem("driftrun-best"),localStorage.removeItem("driftrun-ach")}catch{}location.reload()}}function qp(){const n=[];if(pn){qo=q("div",{class:"wheel","aria-hidden":"true"});const i=q("div",{class:"hint"},""),s=()=>{i.textContent=rt.set.ctrl!=="tilt"?"Steering with on-screen buttons.":Xo&&jo?"Tilt sensor working.":"Tap Tilt phone to switch the sensor on."};s(),n.push(An("Phone steering",Cs("Steering","Tilt: left half brakes, right half drives.",["Tilt phone","Buttons"],()=>rt.set.ctrl==="tilt"?0:1,r=>{rt.set.ctrl=r===0?"tilt":"btn",Ie(),xf(),r===0?t0().then(()=>{Ih(),s()}):s()}),Cs("Tilt sensitivity","Soft means turn further for full lock.",["Soft","Normal","Sharp"],()=>rt.set.sens,r=>{rt.set.sens=r,Ie()}),vo("Flip tilt direction","Turn this on if the car steers the wrong way.",()=>rt.set.flip,r=>{rt.set.flip=r,Ie()}),q("div",{style:"display:flex;align-items:center;gap:16px;margin-top:12px"},qo,q("div",{style:"flex:1"},q("div",{style:"display:flex;gap:8px"},rn("Recenter",()=>{Ih(),s()},"blue")),i))))}else n.push(An("Keyboard",q("div",{class:"keys-block"},q("div",{class:"keyrow"},q("kbd",{},"W"),q("kbd",{},"A"),q("kbd",{},"S"),q("kbd",{},"D"),q("span",{},"Drive")),q("div",{class:"keyrow"},q("kbd",{},"Space"),q("span",{},"Handbrake")),q("div",{class:"keyrow"},q("kbd",{},"Shift"),q("span",{},"Boost")),q("div",{class:"keyrow"},q("kbd",{},"1"),q("kbd",{},"2"),q("kbd",{},"3"),q("span",{},"Speed class")),q("div",{class:"keyrow"},q("kbd",{},"R"),q("span",{},"Reset car")),q("div",{class:"keyrow"},q("kbd",{},"C"),q("span",{},"Camera")),q("div",{class:"keyrow"},q("kbd",{},"P"),q("span",{},"Photo mode")),q("div",{class:"keyrow"},q("kbd",{},"Esc"),q("span",{},"Menu")))));const t=[Cs("Camera",null,["Chase","Hood","Far"],()=>Wr,i=>{Wr=i}),Cs("Graphics quality","Performance lowers resolution and pauses shadows. Balanced is the recommended default.",["Performance","Balanced","High"],()=>rt.set.quality,cy),vo("Frame saver","Automatically trims render resolution if the frame rate drops.",()=>rt.set.frameSaver,i=>{rt.set.frameSaver=i,Ie(),i||Xp(0)}),vo("Shadows",rt.set.quality===0?"Paused in Performance quality.":"Nicer look, heavier. Turn off if slow.",()=>rt.set.shadows,ly),vo("Sound",null,()=>!rt.set.mute,i=>fc(!i))];pn&&t.push(vo("Vibration","Buzz on crashes.",()=>rt.set.vib,i=>{rt.set.vib=i,Ie(),i&&navigator.vibrate&&navigator.vibrate(30)})),n.push(An("Gameplay",...t));const e=[rn("Reset car",()=>{pi(),Fi()},"blue")];document.fullscreenEnabled&&e.push(rn("Fullscreen",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},"blue")),e.push(rn("Reset save",hy,"red")),n.push(An("Actions",q("div",{class:"chips"},...e))),dn.replaceChildren(q("div",{class:"m-screen"},Bi("SETTINGS","Dial in the feel. Changes save automatically."),...n)),Ys($s(pn?"Touch input detected":"Keyboard and mouse"),rn("Back",()=>De("home")))}function Yp(){const n=rs.filter(i=>i.category==="track"),t=rs.filter(i=>i.category==="freeroam"),e=i=>{const s=i.id===rt.map;return q("button",{class:"map-card"+(s?" sel":""),type:"button",onclick:()=>{Bp(i.id),Yp()}},q("span",{class:"m-thumb"},q("span",{class:"m-thumb-svg",html:sy(i)})),q("span",{class:"m-info"},q("b",{},i.name),q("span",{},i.desc)),q("span",{class:"m-go"},s?"SELECTED":"SELECT"))};dn.replaceChildren(q("div",{class:"m-screen"},Bi("PICK A MAP"),q("p",{class:"m-sub"},"Tap a map to select it, then hit Continue to choose a mode."),An("Race Tracks",q("div",{class:"m-list"},...n.map(e))),An("Freeroam",q("div",{class:"m-list"},...t.map(e))))),Ys($s("Current: "+Ne.name),rn("Back",()=>De("home")),rn("Continue",()=>De("modes"),"primary"))}function fy(){const n=Fp(),t=Ne.category==="track",e=t?"Circuit - best here is "+(n>0?n.toFixed(2)+"s":"no time yet"):"Race mode needs a track map";dn.replaceChildren(q("div",{class:"m-screen"},Bi(q("span",{},Ne.name)),q("p",{class:"m-sub"},"How do you want to drive?"),q("div",{class:"m-actions"},ln(">","Solo drift","Freeform. Score pads, combos.",()=>{ei="free",pi(),Fi()},"primary"),ln("T","Timed drift","90 seconds, race your ghost.",()=>{ei="timed",pi(),Fi()},"green"),t?ln("R","Race",e,()=>{ei="race",pi(),Tc(Ne),qt.countdownActive=!0,qt.countdown=3.5,Fi()},"blue"):null,ln("o","Multiplayer","Split-screen, 2 to 4 players",()=>De("mpsetup"),"blue")))),Ys($s("Class "+(Nn+1)+" - "+zn[Nn].name+" - "+Math.round(qs.top*3.6)+" km/h"),rn("Back",()=>De("maps")))}let Ji=null,Ns="";function Wo(){const n=mn[Ji],t=rt.owned.includes(n.id),e=wo.map(r=>{const o=mn[r],a=rt.owned.includes(r),l=r===rt.car?"Equipped":a?"Owned":"$"+o.price.toLocaleString();return q("button",{class:"card"+(r===Ji?" sel":""),type:"button",onclick:()=>{Ji=r,Ns="",jr(o,Xs(r),Vr(r)),es(Wo)}},q("span",{class:"cname"},o.name),q("span",{class:"ctag"},l),q("span",{class:"cdesc"},o.tag))});dn.replaceChildren(q("div",{class:"m-screen"},Bi("SHOP"),q("p",{class:"m-sub"},"Nine cars to choose from. Earn cash by banking drift points."),q("div",{class:"m-list"},...e))),gf(n,Vr(n.id)),Jo();const i=t?n.id===rt.car?rn("Equipped",()=>{},"dis"):rn("Equip",()=>{Ac(n.id),Ns="",es(Wo)},"primary"):rn("Buy - $"+n.price.toLocaleString(),()=>uy(n.id),"primary"),s=t&&n.price>0?rn("Sell - $"+Math.floor(n.price*.5).toLocaleString(),()=>dy(n.id),"red"):null;Ys($s(Ns||(t?n.id===rt.car?"Currently equipped.":"Owned - equip or sell.":"Price $"+n.price.toLocaleString())),s,i,rn("Back",()=>De("home")))}function uy(n){const t=mn[n];rt.cash<t.price?Ns="Need $"+(t.price-rt.cash).toLocaleString()+" more.":(rt.cash-=t.price,rt.owned.push(n),Ac(n),Ns=t.name+" is yours!"),es(Wo),Jo()}function dy(n){const t=mn[n];if(!rt.owned.includes(n)||t.price<=0)return;const e=Math.floor(t.price*.5);rt.cash+=e,rt.owned=rt.owned.filter(i=>i!==n),delete rt.tune[n],rt.car===n&&Ac("hachi"),Ji="hachi",jr(mn.hachi,Xs("hachi"),Vr("hachi")),Ns=t.name+" sold for $"+e.toLocaleString()+".",Ie(),es(Wo),Jo()}function gf(n,t){const e=Hr(zn[Nn],n,t),i=Hr(zn[Nn],n,ss(n)),s=Object.entries(e.ratings).map(([r,o])=>{const a=Math.round((o-i.ratings[r])*100);return q("div",{class:"stat"},q("div",{class:"slab"},q("span",{},r),q("span",{class:"delta "+(a>0?"up":a<0?"dn":"")},a===0?"":(a>0?"+":"-")+Math.abs(a))),q("div",{class:"bar"},q("i",{style:"width:"+Math.round(o*100)+"%"})))});kp.replaceChildren(q("h3",{},n.name),q("div",{class:"dim"},"Class "+(Nn+1)+" - "+zn[Nn].name),...s,q("div",{class:"bal"},"Balance: ",q("b",{},e.balance)),q("div",{class:"dim",style:"margin-top:6px"},Math.round(e.top*3.6)+" km/h top speed"))}const rd=(n,t)=>(t>0&&n.min<0?"+":"")+t.toFixed(n.step<.1?2:n.step<1?1:0)+n.unit;function od(n,t){Re[n]=t,rt.tune[ze.id]={...Re},Ie(),Lr(Re),Us(),ae.hv-=.12,gf(ze,Re)}function py(n){if(n.type==="choice"){const i=q("div",{class:"seg"});return Th.forEach((s,r)=>i.append(q("button",{class:"segb"+(Re.compound===r?" sel":""),type:"button",onclick:()=>{od("compound",r),i.querySelectorAll(".segb").forEach((o,a)=>o.classList.toggle("sel",a===r))}},s.name))),q("div",{class:"ctl"},q("div",{class:"clab"},q("span",{},n.label)),i,q("div",{class:"hint"},n.hint))}const t=q("b",{},rd(n,Re[n.key])),e=q("input",{type:"range",min:n.min,max:n.max,step:n.step,value:Re[n.key],"aria-label":n.label,oninput:()=>{const i=+e.value;t.textContent=rd(n,i),od(n.key,i)}});return q("div",{class:"ctl"},q("div",{class:"clab"},q("span",{},n.label),t),e,q("div",{class:"hint"},n.hint))}const my=[{key:"drift",label:"Drifting",hint:"Locked diff, high rear pressure, drift tyres."},{key:"grip",label:"Grip",hint:"Stiff springs, semi slicks, low ride height."},{key:"speed",label:"Top Speed",hint:"Long gearing, minimal aero."},{key:"accel",label:"Acceleration",hint:"Short gearing, weight reduction, more boost."},{key:"comfort",label:"Comfort",hint:"Soft springs, low camber, all-season tyres."}];function gy(){const n=rt.goals||{},t={...ss(ze)};return n.drift&&(t.rideH=-20,t.springF=8,t.springR=7,t.arbF=3,t.arbR=8,t.camberF=-4.5,t.camberR=-.5,t.toeF=-.4,t.toeR=-.1,t.caster=7.5,t.compound=3,t.pressF=30,t.pressR=42,t.diff=100,t.boost=Math.max(t.boost,8),t.bias=58,t.wing=2,t.splitter=0,t.offset=14),n.grip&&(t.rideH=-32,t.springF=10,t.springR=9,t.damperF=6,t.damperR=6,t.arbF=6,t.arbR=5,t.camberF=-3.2,t.camberR=-2,t.toeF=-.1,t.toeR=.2,t.caster=6.5,t.compound=2,t.pressF=30,t.pressR=30,t.diff=25,t.weight=60,t.wing=7,t.splitter=5),n.speed&&(t.finalDrive=Math.min(3.15,t.finalDrive),t.wing=Math.max(0,t.wing-4),t.splitter=Math.max(0,t.splitter-4),t.boost=Math.max(t.boost,12),t.rideH=-12),n.accel&&(t.finalDrive=Math.max(4.85,t.finalDrive),t.weight=100,t.boost=Math.max(t.boost,14),t.diff=Math.max(t.diff,50)),n.comfort&&(t.springF=5,t.springR=4.5,t.damperF=4,t.damperR=4,t.arbF=4,t.arbR=3,t.camberF=-.5,t.camberR=-.5,t.compound=0,t.rideH=8,t.toeF=.1,t.toeR=.1),t}function Ao(){const n=q("div",{class:"swatches"});ZM.forEach(o=>{const a=q("button",{class:"sw"+(Xs(ze.id)===o?" sel":""),type:"button","aria-label":"Paint "+Gs(o),style:"background:"+Gs(o),onclick:()=>{rt.paint[ze.id]=o,$M(wn,o),Ie(),n.querySelectorAll(".sw").forEach(c=>c.classList.toggle("sel",c===a))}});n.append(a)});const t=my.map(o=>{const a=!!rt.goals[o.key],c=q("button",{class:"tog"+(a?" on":""),type:"button",role:"switch","aria-checked":String(a),onclick:()=>{rt.goals[o.key]=!rt.goals[o.key],Ie(),c.classList.toggle("on",rt.goals[o.key]),c.setAttribute("aria-checked",String(rt.goals[o.key]))}},q("i"));return q("div",{class:"trow"},q("div",{class:"tl"},q("b",{},o.label),q("div",{class:"hint"},o.hint)),c)}),e=q("button",{class:"gbtn sm primary",type:"button",onclick:()=>{Re=gy(),rt.tune[ze.id]={...Re},Ie(),Lr(Re),Us(),ae.hv-=.2,es(Ao),Mn("Auto-tune applied")}},q("span",{class:"tx"},q("span",{},"Save auto-tune"))),i=q("div",{class:"chips"},...Object.keys(Hu).map(o=>q("button",{class:"chip",type:"button",onclick:()=>{Re={...ss(ze),...Hu[o]()},rt.tune[ze.id]={...Re},Ie(),Lr(Re),Us(),ae.hv-=.2,es(Ao)}},o))),s=q("div",{class:"chips"},...rt.owned.map(o=>q("button",{class:"chip"+(o===rt.car?" sel":""),type:"button",onclick:()=>{Ac(o),Ao()}},mn[o].name))),r=[An("Car",s),An("Paint",n),An("Auto-tune goals",q("p",{class:"hint",style:"margin:0 0 8px"},"Tick what you care about and hit Save auto-tune. The tune is built for you."),...t,q("div",{class:"btnrow"},e)),An("Quick presets",i),...pM.map(o=>An(o.title,...o.items.map(py)))];dn.replaceChildren(q("div",{class:"m-screen"},Bi("GARAGE"),q("p",{class:"m-sub"},"Tune the setup and paint the livery."),...r)),gf(ze,Re),Ys($s(ze.name+" - "+rt.owned.length+" car"+(rt.owned.length===1?"":"s")+" owned"),rn("Stock",()=>{Re=ss(ze),rt.tune[ze.id]={...Re},Ie(),Lr(Re),Us(),es(Ao)},"blue"),rn("Back",()=>De("home")))}const Xr={mode:"duel",n:2,first:3,cls:1,cars:[rt.car,"corsa","muscle","rallye"],...rt.mp||{}};Xr.cars=Xr.cars.map(n=>mn[n]?n:"hachi");const _o=()=>{rt.mp={...Xr},Ie()},$p=()=>navigator.getGamepads?[...navigator.getGamepads()].filter(Boolean):[];function Kp(){const n=Xr,t=()=>es(Kp),e=[["duel","Side-Hit Duel","Ram the side of a rival car to score. Head-ons and nudges do not count."],["snake","Orb Snake","Grab orbs to grow a tail of car copies. Hit someone else tail and you are out."]].map(([a,c,l])=>q("button",{class:"card"+(n.mode===a?" sel":""),type:"button",onclick:()=>{n.mode=a,n.first=a==="duel"?3:2,_o(),t()}},q("span",{class:"cname"},c),q("span",{class:"ctag"},n.mode===a?"Selected":"Choose"),q("span",{class:"cdesc"},l))),i=(a,c)=>q("button",{class:"gbtn sm",type:"button",style:"padding:6px 10px;min-width:36px;justify-content:center","aria-label":Ui[a]+(c<0?" previous":" next")+" car",onclick:()=>{const l=wo.indexOf(n.cars[a]);n.cars[a]=wo[(l+c+wo.length)%wo.length],_o(),t()}},q("span",{class:"tx"},q("span",{},c<0?"<":">"))),s=$p().length,r=Array.from({length:n.n},(a,c)=>q("div",{class:"prow"},q("i",{class:"pdot",style:"background:"+Gs(Hs[c])}),q("b",{},Ui[c]),i(c,-1),q("span",{class:"pcar"},mn[n.cars[c]].name),i(c,1),q("span",{class:"pkeys"},nf[c].name+(s>c?"  -  gamepad connected":"")))),o=[An("Game mode",...e),An("Match",Cs("Players","Split-screen on one device.",["2","3","4"],()=>n.n-2,a=>{n.n=a+2,_o(),t()}),Cs("First to","Rounds needed to win.",["1","2","3"],()=>n.first-1,a=>{n.first=a+1,_o()}),Cs("Speed class","Same stats for everybody.",zn.map((a,c)=>c+1+" - "+a.name),()=>n.cls,a=>{n.cls=a,_o()})),An("Players",...r,q("div",{class:"hint",style:"margin-top:10px;font-size:12px;opacity:.65;line-height:1.45"},pn?"On a phone, P1 uses tilt or the on-screen zones.":"Share the keyboard, or plug in gamepads."))];dn.replaceChildren(q("div",{class:"m-screen"},Bi("MULTIPLAYER"),q("p",{class:"m-sub"},"Split-screen for two to four players on one device."),...o)),Ys($s(n.n+" players - first to "+n.first+" - class "+(n.cls+1)),rn("Back",()=>De("modes")),rn("Start",_f,"primary"))}function Zp(){dn.replaceChildren(q("div",{class:"m-overlay"},q("div",{class:"pause-card"},q("h1",{class:"m-title"},"PAUSED"),q("p",{class:"m-sub",style:"text-align:left;max-width:none"},"Esc to resume."),q("div",{class:"m-actions"},ln(">","Resume",null,Fi,"primary"),ln("R","Restart match",null,_f),ln("S",rt.set.mute?"Sound: off":"Sound: on",null,()=>{fc(!rt.set.mute),Zp()},"blue"),ln("X","Quit to menu",null,f0,"red")))))}function xy(){const n=Zt?Zt.m.winner:0,t=Zt?Zt.m.scores:[];dn.replaceChildren(q("div",{class:"m-overlay"},q("div",{class:"pause-card"},q("h1",{class:"m-title",style:"color:"+Gs(Hs[n])},Ui[n]+" WINS"),q("p",{class:"m-sub",style:"text-align:left;max-width:none"},t.map((e,i)=>Ui[i]+"  "+e).join("   -   ")),q("div",{class:"m-actions"},ln("R","Rematch",null,_f,"primary"),ln("X","Quit to menu",null,f0,"red")))))}const as={},qr=(...n)=>n.some(t=>as[t]);addEventListener("keydown",n=>{if(mf(),n.code==="Escape"){n.preventDefault(),n.repeat||Gp();return}if(!oe){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault(),as[n.code]=!0,Zt){n.code==="KeyM"&&fc(!rt.set.mute);return}n.code==="KeyR"&&pi(),n.code==="KeyC"&&(Wr=(Wr+1)%3),n.code==="KeyP"&&Vp(!On),n.code==="KeyM"&&fc(!rt.set.mute),n.code.startsWith("Digit")&&zn[+n.code.slice(5)-1]&&Op(+n.code.slice(5)-1),On&&!n.repeat&&((n.code==="KeyW"||n.code==="ArrowUp")&&dc("gas"),(n.code==="KeyS"||n.code==="ArrowDown")&&dc("brake"))}});addEventListener("keyup",n=>{as[n.code]=!1});addEventListener("blur",()=>{for(const n in as)as[n]=!1});addEventListener("resize",()=>{Vo(),ke.aspect=innerWidth/innerHeight,ke.updateProjectionMatrix()});addEventListener("pointerdown",n=>{mf(),oe&&!n.target.closest("#mLeft, #mRight, #mTop, #mFoot")&&(Rs={x:n.clientX,y:n.clientY})});addEventListener("pointermove",n=>{Rs&&(Ms-=(n.clientX-Rs.x)*.008,cc=he(cc+(n.clientY-Rs.y)*.006,.02,1.1),Rs={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>{Rs=null});addEventListener("wheel",n=>{oe&&!n.target.closest("#mLeft, #mRight, #mTop, #mFoot")&&(Fo=he(Fo+n.deltaY*.005,4.5,12))},{passive:!0});const ad=Math.PI/180,cd=ee("mCog");cd&&cd.addEventListener("click",()=>{De(oe==="settings"?"home":"settings")});const ld=(()=>{const n=ee("dial");if(!n)return null;const t="http://www.w3.org/2000/svg",e=100,i=-135,s=270,r=(l,h)=>[e+l*Math.sin(h*ad),e-l*Math.cos(h*ad)],o=(l,h,f=n)=>{const u=document.createElementNS(t,l);for(const d in h)u.setAttribute(d,h[d]);return f.append(u),u},a=Array.from({length:12},(l,h)=>r(96,h*30+15).join(",")).join(" ");o("polygon",{points:a,fill:"#fff",stroke:"#0b0820","stroke-width":7,"stroke-linejoin":"round"}),o("path",{d:"M"+r(91,i+s*.7)+" A91 91 0 0 1 "+r(91,i+s)+" L"+r(82,i+s)+" A82 82 0 0 0 "+r(82,i+s*.7)+" Z",fill:"#e3262e"});for(let l=0;l<=9;l++){const h=i+s*l/9,f=r(66,h),u=o("text",{x:f[0],y:f[1]+6,"text-anchor":"middle","font-size":19,"font-family":"Russo One, Arial Black, sans-serif",fill:l>=7?"#e3262e":"#0b0820",stroke:"#fff","stroke-width":.5});u.textContent=l;const d=r(88,h),g=r(78,h);o("line",{x1:d[0],y1:d[1],x2:g[0],y2:g[1],stroke:"#0b0820","stroke-width":3})}const c=o("g",{id:"needle"});return o("polygon",{points:"97,100 100,28 103,100",fill:"#e3262e",stroke:"#0b0820","stroke-width":2},c),o("circle",{cx:e,cy:e,r:13,fill:"#1b1b24",stroke:"#0b0820","stroke-width":3}),c})(),Ae={gas:0,brake:0,hb:0,boost:0,left:0,right:0};let pn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Xo=!1,jo=!1,Ph=0,hd=0,Ur=0,uc=!0,qo=null;const za=Math.PI/180,vy=n=>(n+540)%360-180,_y=[55,40,28],Jp=()=>qr("ArrowUp","KeyW")||Ae.gas?1:0,Lh=()=>qr("ArrowDown","KeyS")||Ae.brake?1:0,My=()=>qr("Space")||Ae.hb?1:0,yy=()=>!!(qr("ShiftLeft","ShiftRight")||Ae.boost),jp=()=>pn&&rt.set.ctrl==="tilt"&&Xo&&jo;function Qp(){let n=(qr("ArrowLeft","KeyA")?1:0)-(qr("ArrowRight","KeyD")?1:0)+(Ae.left?1:0)-(Ae.right?1:0);return jp()&&(n-=Ur*(rt.set.flip?-1:1)),he(n,-1,1)}function dc(n){const t=qs.bounce;n==="gas"?(ae.pv-=1*t.pitchAmp,ae.hv+=.45):(ae.pv+=1.1*t.pitchAmp,ae.hv-=.45)}function Sy(n){if(n.beta==null||n.gamma==null)return;const t=n.beta*za,e=n.gamma*za,i=Math.sin(e)*Math.cos(t),s=-Math.sin(t),r=(screen.orientation&&screen.orientation.angle!=null?screen.orientation.angle:window.orientation||0)*za,o=i*Math.cos(r)-s*Math.sin(r),a=i*Math.sin(r)+s*Math.cos(r);Ph=Math.atan2(o,-a)/za,jo=!0}function fd(n){if(!Xo||!jo){Ur*=.9;return}uc&&(hd=Ph,uc=!1);const t=vy(Ph-hd),e=_y[rt.set.sens]||40,i=2.5;let s=Math.abs(t)<i?0:Math.sign(t)*(Math.abs(t)-i)/(e-i);s=he(s,-1,1),s=Math.sign(s)*Math.pow(Math.abs(s),1.15),Ur+=(s-Ur)*(1-Math.exp(-n*25))}const Ih=()=>{uc=!0};function ud(n){rt.set.ctrl="btn",Ie(),xf(),n&&Mn(n,!0)}async function t0(){if(Xo)return!0;try{const n=window.DeviceOrientationEvent;if(!n)throw new Error("none");if(typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted")throw new Error("denied");return addEventListener("deviceorientation",Sy),Xo=!0,setTimeout(()=>{!jo&&rt.set.ctrl==="tilt"&&ud("NO TILT SENSOR - USING BUTTONS")},2e3),!0}catch{return ud("TILT OFF - USING BUTTONS"),!1}}function xf(){const n=document.body.classList;n.toggle("touch",pn),n.toggle("ctrl-tilt",pn&&rt.set.ctrl==="tilt"),n.toggle("ctrl-btn",pn&&rt.set.ctrl==="btn")}function e0(n){const t=ee("tip");t&&(t.textContent=n||(rt.set.ctrl==="tilt"?"Tilt to steer - Left half is BRAKE - Right half is GAS":"Steer - GAS - BRAKE"),t.classList.remove("show"),t.offsetWidth,t.classList.add("show"))}const vf=[];function cs(n,t,e){if(!n)return;const i=new Set,s=()=>t(i.size>0);n.addEventListener("pointerdown",r=>{r.preventDefault(),i.add(r.pointerId);try{n.setPointerCapture(r.pointerId)}catch{}s(),e&&e()}),n.addEventListener("mousedown",r=>r.preventDefault()),vf.push({ids:i,set:s})}const n0=n=>{for(const t of vf)t.ids.delete(n.pointerId)&&t.set()};addEventListener("pointerup",n0);addEventListener("pointercancel",n0);function i0(){for(const n of vf)n.ids.clear(),n.set();for(const n in Ae)Ae[n]=0}cs(ee("zoneL"),n=>{Ae.brake=n?1:0},()=>{On&&dc("brake")});cs(ee("zoneR"),n=>{Ae.gas=n?1:0},()=>{On&&dc("gas")});cs(ee("pBrake"),n=>{Ae.brake=n?1:0});cs(ee("pGas"),n=>{Ae.gas=n?1:0});cs(ee("tL"),n=>{Ae.left=n?1:0});cs(ee("tR"),n=>{Ae.right=n?1:0});cs(ee("bHB"),n=>{Ae.hb=n?1:0});cs(ee("bBoost"),n=>{Ae.boost=n?1:0});addEventListener("contextmenu",n=>{pn&&n.preventDefault()});const s0=()=>{uc=!0};addEventListener("orientationchange",s0);screen.orientation&&screen.orientation.addEventListener&&screen.orientation.addEventListener("change",s0);const dd=ee("btnSettings");dd&&dd.addEventListener("click",Gp);const pd=ee("photoX");pd&&pd.addEventListener("click",()=>Vp(!1));document.querySelectorAll("#classes .cls").forEach(n=>n.addEventListener("click",()=>Op(+n.dataset.i)));function md(){if(pn){const n=ee("pGas"),t=ee("pBrake"),e=ee("bHB"),i=ee("bBoost");n&&n.classList.toggle("down",!!Ae.gas),t&&t.classList.toggle("down",!!Ae.brake),e&&e.classList.toggle("down",!!Ae.hb),i&&i.classList.toggle("down",!!Ae.boost)}qo&&(qo.style.transform="rotate("+(rt.set.flip?-1:1)*Ur*90+"deg)")}const r0=new sn({map:DM,transparent:!0,opacity:.7,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,side:Ce,color:657932}),Ro=240;function wy(){const n=new Float32Array(Ro*2*3),t=new Float32Array(Ro*2*2),e=new Uint16Array((Ro-1)*6);for(let r=0;r<Ro-1;r++){const o=r*6,a=r*2,c=r*2+1,l=(r+1)*2,h=(r+1)*2+1;e[o+0]=a,e[o+1]=l,e[o+2]=c,e[o+3]=c,e[o+4]=l,e[o+5]=h}const i=new we;i.setAttribute("position",new Ge(n,3)),i.setAttribute("uv",new Ge(t,2)),i.setIndex(new Ge(e,1)),i.setDrawRange(0,0);const s=new xt(i,r0);return s.frustumCulled=!1,s.renderOrder=3,xe.add(s),{geo:i,pos:n,uv:t,head:0,lastX:0,lastZ:0,active:!1,mesh:s}}const Dh=24,Uh=[];for(let n=0;n<Dh;n++)Uh.push(wy());let xr=0,gs=[];function by(){const n=Uh[xr];xr=(xr+1)%Dh;const t=Uh[xr];return xr=(xr+1)%Dh,n.head=0,n.active=!0,t.head=0,t.active=!0,[n,t]}function Ey(n,t,e,i,s){if(!n.active)return;const r=n.head;if(r>=Ro){n.active=!1;return}const o=Math.cos(i),a=-Math.sin(i),c=r*2,l=r*2+1;n.pos[c*3+0]=t+o*s,n.pos[c*3+1]=.09,n.pos[c*3+2]=e+a*s,n.pos[l*3+0]=t-o*s,n.pos[l*3+1]=.09,n.pos[l*3+2]=e-a*s;const h=r*.4;n.uv[c*2+0]=0,n.uv[c*2+1]=h,n.uv[l*2+0]=1,n.uv[l*2+1]=h,n.head++,n.lastX=t,n.lastZ=e,n.geo.attributes.position.needsUpdate=!0,n.geo.attributes.uv.needsUpdate=!0,n.geo.setDrawRange(0,Math.max(0,n.head-1)*6)}const o0=24,Ty=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new gi(n)})(),pc=[];for(let n=0;n<o0;n++){const t=new _c({map:Ty,transparent:!0,opacity:0,depthWrite:!1,color:14540262}),e=new Zh(t);e.visible=!1,xe.add(e),pc.push({s:e,mat:t,life:0,max:1,vx:0,vy:0,vz:0})}let El=0;function a0(n,t,e,i){const s=pc[El];El=(El+1)%o0,s.life=s.max=.65+Math.random()*.4,s.vx=e*.14+(Math.random()-.5)*1.6,s.vy=.7+Math.random()*.6,s.vz=i*.14+(Math.random()-.5)*1.6,s.s.position.set(n,.4,t),s.s.visible=!0,s.mat.opacity=.55,s.mat.color.setHex(qe>0&&Wn>=5?16735631:qe>0&&Wn>=3?16758531:14540262)}function c0(n){for(let t=0;t<pc.length;t++){const e=pc[t];if(e.life<=0)continue;if(e.life-=n,e.life<=0){e.s.visible=!1;continue}const i=1-e.life/e.max;e.s.position.x+=e.vx*n,e.s.position.y+=e.vy*n,e.s.position.z+=e.vz*n;const s=1.4+i*3.5;e.s.scale.set(s,s,1),e.mat.opacity=.5*(1-i)*(1-i)}}let Tl=0;const Ps=new xt(new Mt(1.9,1,4.3),new sn({color:6750190,transparent:!0,opacity:.25,depthWrite:!1}));Ps.visible=!1;xe.add(Ps);const gd=.42,Ay=1.75,xd=.1,Ry=5.5,Cy=.5;function Py(n){const t=qs,e=Jp(),i=Lh(),s=!!My(),r=ey(Z.x,Z.z),o=r?1:Ne.grip||.6,a=Ne.slippery?.75:Ne.night?.92:1,c=Math.sin(Z.h),l=Math.cos(Z.h),h=-Math.cos(Z.h),f=Math.sin(Z.h);let u=Z.vx*c+Z.vz*l,d=Z.vx*h+Z.vz*f;const g=Math.hypot(u,d),x=Math.atan2(d,Math.abs(u)+.001),m=Qp()*(i&&u>5?1-t.brakeUnder:1),p=(e?-1:0)+(i?1:0);Z.weightTransfer+=(p-Z.weightTransfer)*Math.min(1,n*4);const _=1+.15*Z.weightTransfer,v=1-.1*Z.weightTransfer,M=-.6*he(d/8,-1,1)*Z.loose;Z.steer+=(he(m+M,-1,1)-Z.steer)*Math.min(1,n*(m?12:16));const P=e&&yy()&&bs>.02?1:0;P?bs=Math.max(0,bs-n*.3):g>7&&Math.abs(x)>.25&&(bs=Math.min(1,bs+n*.2)),e&&(u+=t.power*(P?1.9:1)*(1-he(u/(t.top*(P?1.25:1)),0,1.2))*n*(u<0?2:1)),i&&(u=u>.5?u-34*n:Math.max(-12,u-14*n)),u*=Math.exp(-((e?.08:.22)+t.dragK+(r?0:.3))*n),!e&&!i&&Math.abs(u)<3&&(u*=Math.exp(-2.2*n)),s&&(u*=Math.exp(-.35*n));const T=u>Ry,A=Math.abs(Z.steer),C=s?1:0,b=e&&T&&(A>.15*t.entry||Math.abs(x)>xd*t.entry)?1:0,S=i&&g>8&&t.brakeLoose>0&&A>.15?t.brakeLoose*.85:0,L=Math.abs(x)>xd?Math.min(1,Math.abs(x)*3):0;let H=Math.max(C,b,S,L);H=Math.min(1,H),Z.loose+=(H-Z.loose)*Math.min(1,n*(H>Z.loose?16:3.2));const I=t.grip*gd*a*o*v,O=t.grip*gd*a*o*_,W=t.drift*Ay*a*o,Y=Xa((I+O)*.5,W*(s?.55:1)*(1-.3*Math.abs(Z.weightTransfer)),Z.loose),tt=1+t.aeroK*g*g,$=1,ut=e?1-Cy*he(u/t.top,0,1):1;d*=Math.exp(-Y*tt*$*ut*n);const St=u>=-1?1:-1,Tt=Math.min(1,g/5)/(1+g/(t.top*1.6)),Vt=(1+.8*Z.loose)*(s?1.5:1)*(e?1.05:1),Wt=Z.steer*t.steer*Tt*St*Vt;Z.vx=c*u+h*d,Z.vz=l*u+f*d,Z.h+=Wt*n,Z.x+=Z.vx*n,Z.z+=Z.vz*n,Object.assign(Z,{sp:g,slip:x,thr:e,vf:u,hb:s,yaw:Wt,bst:P,onRoad:r}),Ly()}function Ly(){const n=Math.hypot(Z.x,Z.z)||1;n>tn-To&&Al(-Z.x/n,-Z.z/n,n-(tn-To)),Pi>0&&n<Pi+To&&Al(Z.x/n,Z.z/n,Pi+To-n),xp(Z,hi,Al)}function Al(n,t,e){Z.x+=n*e,Z.z+=t*e;const i=Z.vx*n+Z.vz*t;i<0&&(Z.vx-=1.35*i*n,Z.vz-=1.35*i*t,Z.vx*=.9,Z.vz*=.9,-i>4&&ff<=0&&Iy(-i))}function Iy(n){ff=.6,vr=Math.min(1,n/20),mc=0,pn&&rt.set.vib&&navigator.vibrate&&navigator.vibrate(Math.min(60,15+n*3)),ae.hv-=n*.02,ae.pv+=(Math.random()-.5)*n*.04,(qe>200||n>10)&&(ac=.35),qe>1&&Mn("CRASH  -"+Math.floor(qe),!0),qe=0,As=0,Ni=0}const Mo=ee("toast");function Mn(n,t){Mo&&(Mo.textContent=n,Mo.className=t?"bad":"",Mo.offsetWidth,Mo.classList.add("show"))}let mc=0,Rl=0,Cl=0;function br(n){if(!Ka[n]){Ka[n]=1;try{localStorage.setItem("driftrun-ach",JSON.stringify(Ka))}catch{}Mn("ACHIEVEMENT: "+jM[n])}}function Dy(){qe>0&&Nh(1),Mn("TIME UP  "+Ir),Ir>sd&&(sd=Ir,_r=uf),pi()}function Uy(){qt.done=!0,qt.sloMo=1.6,qt.finalTime=qt.time;const n=of(qt.time,0),t=Fp(rt.map);t<=0||n<t?(QM(rt.map,n),Mn("NEW BEST  "+n.toFixed(2)+"s")):Mn("FINISHED  "+n.toFixed(2)+"s"),br("racer");const e=Math.max(50,Math.floor(2e3/Math.max(1,n)));rt.cash+=e,Ie(),ai("ding"),setTimeout(()=>pi(),2600)}function Nh(n,t){const e=Math.floor(qe*n);if(Ya+=e,Ya>Dr){Dr=Ya;try{localStorage.setItem("driftrun-best",Dr)}catch{}}Ir+=e;const i=Math.floor(e*.5);rt.cash+=i,Ie(),Mn((t||"BANKED")+" +"+e+"   $"+i),e>2e3&&(ac=.3),e>=5e3&&br("k5"),qe=0,As=0,Wn=1,Ni=0,mc=0}function Ny(n,t){qe+=n*Wn,Ni=0,Mn(t+" +"+Math.floor(n*Wn))}function Fy(n){const t=Z.sp>6&&Math.abs(Z.slip)>.2;if(Rl-=n,Cl-=n,t){Ni=0,As+=n,Wn=1+Math.min(As,12)*.55;let e=Z.sp*Math.abs(Z.slip)*7.5*Wn*(1+.5*(Z.bst||0));const i=In.length?In[Pr%In.length]:null;i&&Math.hypot(Z.x-i.x,Z.z-i.z)<i.r&&Math.abs(Z.slip)>.3&&Z.sp>10&&(e*=3,Ml+=n,Ml>1.5&&(qe+=400*Wn,Mn("ZONE CLEARED"),Pr=(Pr+1)%In.length,Ml=0,++JM>=3&&br("zone3"))),qe+=e*n,As>10&&br("long"),Wn>=6&&br("combo");const s=[[3,"SICK"],[6,"INSANE"],[10,"GODLIKE"]];for(let r=0;r<s.length;r++)As>s[r][0]&&mc<s[r][0]&&(mc=s[r][0],Mn(s[r][1]+"  x"+Wn.toFixed(1)))}if(Z.sp>12){for(const i of hi){if(i.nm)continue;const s=Z.x-i.x,r=Z.z-i.z,o=(i.br??i.r)+6;if(s*s+r*r>o*o)continue;const a=Do(i,Z.x,Z.z)-1;a>0&&a<1.4&&Rl<=0&&(Rl=1.2,Ny(150,"CLOSE CALL"))}const e=tn-To-Math.hypot(Z.x,Z.z);e>0&&e<1.5&&t&&(Ni=0,qe+=Z.sp*4*Wn*n,Cl<=0&&(Cl=2,Mn("WALL RIDE"),br("wall")))}!t&&qe>0&&(Ni+=n)>4&&Nh(1),qe>0&&Z.sp>5&&In.length&&Math.hypot(Z.x-En.x,Z.z-En.z)<En.r&&Nh(1.25,"PAD BANK")}function zy(n){if(qt.done)return;if(qt.countdownActive){qt.countdown-=n,qt.countdown<=0&&(qt.countdownActive=!1,qt.active=!0,qt.time=0,Mn("GO"),ai("ding"));return}if(!qt.active)return;const t=qt.cp,e=qt.gates[t];if(!e)return;Math.hypot(Z.x-e.x,Z.z-e.z)<e.r&&(qt.cp++,lf(),qt.cp>=qt.gates.length?Uy():(Mn("CHECKPOINT "+qt.cp+"/"+qt.gates.length),ai("pop"))),qt.time+=n}const Oy=["UP","UL","L","DL","D","DR","R","UR"],Pl=(n,t)=>Oy[(Math.round(Cr(Math.atan2(n-Z.x,t-Z.z)-Z.h)/(Math.PI/4))+8)%8];function By(){try{if(ei==="race"){const d=qt.countdownActive?Math.ceil(qt.countdown-.5):0,g=qt.cp,x=qt.gates,m=x[Math.min(g,x.length-1)],p=ee("obj");p&&(qt.done?p.textContent="FINAL  "+qt.finalTime.toFixed(2)+"s":qt.countdownActive?p.textContent="RACE STARTING  "+Math.max(0,d):m?p.textContent="RACE  CP "+Math.min(g,x.length)+"/"+x.length+"  "+Pl(m.x,m.z)+" "+Math.round(Math.hypot(m.x-Z.x,m.z-Z.z))+"m  "+qt.time.toFixed(2)+"s":p.textContent="RACE");const _=ee("score");_&&(_.textContent=qt.done?qt.finalTime.toFixed(2):qt.active?qt.time.toFixed(2):d?String(d):"0");const v=ee("mult");v&&(v.textContent="")}else{const d=In.length?In[Pr%In.length]:null,g=ee("obj");g&&(g.textContent=(ei==="timed"?Math.max(0,Math.ceil(lc))+"s - "+Ir+" pts - ":"")+(d?"Gold zone "+Pl(d.x,d.z)+" "+Math.round(Math.hypot(d.x-Z.x,d.z-Z.z))+"m - Bank pad "+Pl(En.x,En.z)+" "+Math.round(Math.hypot(En.x-Z.x,En.z-Z.z))+"m":Ne.category==="freeroam"?"Freeroam - drift anywhere.":""));const x=ee("score");x&&(x.textContent=Math.floor(qe));const m=ee("mult");m&&(m.textContent=qe>0?"x"+m.toFixed(1)+(Ni>0?"  bank in "+Math.max(0,4-Ni).toFixed(1)+"s":""):"")}const n=ee("angle");n&&(n.textContent=Math.round(Math.abs(Z.slip)*57.3));const t=ee("cash");t&&(t.textContent=rt.cash);const e=ee("total");e&&(e.textContent=Ya);const i=ee("best");i&&(i.textContent=Dr);const s=ee("speed");s&&s.firstChild&&(s.firstChild.nodeValue=Math.round(Z.sp*3.6)),ld&&(ld.style.transform="rotate("+(-135+he((Z.rpm-.2)/.8,0,1)*270)+"deg)");const r=ee("drift");r&&r.style.setProperty("--bank",Math.min(100,qe/40)+"%");const o=Math.abs(Z.vf),a=[.16,.31,.49,.7,1.01].map(d=>d*qs.top);let c=0;for(;c<4&&o>a[c];)c++;const l=ee("gearN");l&&(l.textContent=Z.vf<-.5?"R":o<.5?"N":c+1);const h=ee("boostfill");h&&(h.style.height=Math.round(bs*100)+"%");const f=c?a[c-1]:0;let u=.3+.7*he((o-f)/(a[c]-f),0,1);(Z.hb||Z.thr&&Z.sp<6)&&(u=Math.max(u,.7)),Z.rpm+=(u-Z.rpm)*Math.min(1,.15)}catch(n){console.error("hud error:",n)}}let Zt=null;const xi=ee("mp"),xs=ee("mpBanner"),l0=Array.from({length:4},()=>new Tn(62,1,.1,3e3)),fi=new li(new Yn(.75,8,6),new sn({color:16777215}),Sp);fi.frustumCulled=!1;fi.visible=!1;xe.add(fi);const Qr=new xt(new Nt(1,1,7,48,1,!0),new sn({color:16731501,transparent:!0,opacity:.35,side:Ce,depthWrite:!1}));Qr.position.y=3.5;Qr.visible=!1;xe.add(Qr);const ky=new $t;let Ll=0,Fh=0;function Hy(n,t){const e=up(n),i=Ip(e),s=Up(n,t,i),r=oc(e,i),o=oc(dp(n),i),a=pp(n),c={};for(const h of["front","rear"])c[h]=new Nt(a[h].R,a[h].R,a[h].w,12).rotateZ(Math.PI/2);return{make:()=>{const h=new me,f=new xt(r,[s,Lp]),u=new xt(o,[Ch,s]);h.add(f,u);for(const d of["front","rear"])for(const g of[1,-1]){const x=new xt(c[d],BM);x.position.set(g*a[d].x,a[d].R,a[d].z),h.add(x)}return h.visible=!1,xe.add(h),h},paint:s,geos:[r,o,c.front,c.rear]}}function h0(){if(Zt){for(const n of Zt.heads)xe.remove(n.root),n.root.traverse(t=>t.geometry&&t.geometry.dispose()),n.paint.map.dispose(),n.paint.dispose(),n.solid.dispose();Zt.pools.flat().forEach(n=>xe.remove(n)),Zt.kits.forEach(n=>{n.geos.forEach(t=>t.dispose()),n.paint.map.dispose(),n.paint.dispose()}),xi&&xi.querySelectorAll(".pv,.divl").forEach(n=>n.remove()),Zt=null}}function _f(){h0();const n={...Xr,cars:[...Xr.cars]},t=Array.from({length:n.n},(o,a)=>{const c=mn[n.cars[a]];return Hr(zn[n.cls],c,ss(c))}),e=hM(n,t,hi),i=[],s=[],r=[];for(let o=0;o<n.n;o++){const a=mn[n.cars[o]],c=Np(a,Hs[o]);if(Lr(ss(a),c),xe.add(c.root),i.push(c),n.mode==="snake"){const l=Hy(a,Hs[o]);s.push(l),r.push(Array.from({length:yp},()=>l.make()))}}Zt={m:e,cfg:n,heads:i,kits:s,pools:r,hud:[],started:performance.now(),key:"",board:null},Gy(),os.visible=!1,Ps.visible=!1,Ln&&(Ln.visible=!1),fi.visible=n.mode==="snake",Qr.visible=!0,qe=0,Wn=1,i0(),document.body.classList.add("mp"),xi&&xi.classList.remove("off"),ke.clearViewOffset(),Fi(),ys("ROUND 1",1.2)}function f0(){h0(),document.body.classList.remove("mp"),xi&&xi.classList.add("off"),os.visible=!0,Ln&&(Ln.visible=!0),fi.visible=!1,Qr.visible=!1,Oe.setScissorTest(!1),Oe.setViewport(0,0,innerWidth,innerHeight),ke.aspect=innerWidth/innerHeight,ke.updateProjectionMatrix(),De("home")}function ys(n,t,e){xs&&(xs.textContent=n,xs.style.color=e||"",xs.style.animationDuration=(t||1)+"s",xs.classList.remove("show"),xs.offsetWidth,xs.classList.add("show"))}function Gy(){Zt.hud=[];for(let n=0;n<Zt.cfg.n;n++){const t=q("div",{class:"pv","data-i":String(n)},q("div",{class:"pchip",style:"background:"+Gs(Hs[n])},Ui[n]),q("div",{class:"pips"}),q("div",{class:"psub"}),q("div",{class:"phint"},nf[n].name+(n===0&&pn?"  -  or tilt / zones":"")),q("div",{class:"pout"},"OUT"));xi.append(t),Zt.hud.push({el:t,pips:t.querySelector(".pips"),sub:t.querySelector(".psub"),hint:t.querySelector(".phint"),pk:"",sk:"",dead:!1})}Zt.cfg.n===3&&(Zt.board=q("div",{class:"pv board"}),xi.append(Zt.board)),Zt.layKey=""}function Vy(){const n=Zt.m,t=innerWidth,e=innerHeight,i=Zt.cfg.n,s=bp(i,t,e),r=i+"|"+t+"|"+e;if(Zt.layKey!==r){if(Zt.layKey=r,xi.querySelectorAll(".divl").forEach(a=>a.remove()),s.forEach((a,c)=>{const l=Zt.hud[c]?Zt.hud[c].el:Zt.board;l&&(l.style.cssText="left:"+a.x+"px;top:"+a.y+"px;width:"+a.w+"px;height:"+a.h+"px")}),i===3&&Zt.board){const a=s[3];Zt.board.style.cssText="left:"+a.x+"px;top:"+a.y+"px;width:"+a.w+"px;height:"+a.h+"px"}const o=a=>xi.append(q("div",{class:"divl",style:a}));i===2?s[1].x>0?o("left:"+(t/2-3)+"px;top:0;width:6px;height:100%"):o("left:0;top:"+(e/2-3)+"px;width:100%;height:6px"):(o("left:"+(t/2-3)+"px;top:0;width:6px;height:100%"),o("left:0;top:"+(e/2-3)+"px;width:100%;height:6px"))}if(n.cars.forEach((o,a)=>{const c=Zt.hud[a],l="●".repeat(n.scores[a])+"○".repeat(Math.max(0,n.first-n.scores[a]));c.pk!==l&&(c.pk=l,c.pips.textContent=l);const h=n.mode==="snake"?"Cars "+(o.segs+1)+" - Orbs "+o.orbs:"";c.sk!==h&&(c.sk=h,c.sub.textContent=h),c.dead===o.alive&&(c.dead=!o.alive,c.el.classList.toggle("dead",c.dead))}),Zt.board){const o=n.scores.join(",")+"|"+n.cars.map(a=>a.alive?1:0).join("");Zt.bk!==o&&(Zt.bk=o,Zt.board.replaceChildren(q("div",{class:"bt"},"SCORE"),...n.cars.map((a,c)=>q("div",{class:"brow"},q("i",{class:"pdot",style:"background:"+Gs(Hs[c])}),Ui[c]+"  "+"●".repeat(n.scores[c])+"○".repeat(Math.max(0,n.first-n.scores[c])),a.alive?"":"  OUT"))))}}function Wy(n){const t=nf[n],e=c=>c.some(l=>as[l]);let i=e(t.gas),s=e(t.brake),r=e(t.hb),o=(e(t.left)?1:0)-(e(t.right)?1:0);n===0&&pn&&(i=i||!!Ae.gas,s=s||!!Ae.brake,r=r||!!Ae.hb,o+=(Ae.left?1:0)-(Ae.right?1:0)-(jp()?Ur*(rt.set.flip?-1:1):0));const a=$p()[n];if(a){const c=Math.abs(a.axes[0])>.12?a.axes[0]:0,l=h=>a.buttons[h]?a.buttons[h].value||(a.buttons[h].pressed?1:0):0;o+=-c+(l(14)?1:0)-(l(15)?1:0),i=i||l(7)>.1,s=s||l(6)>.1,r=r||l(0)>.5||l(2)>.5}return{gas:i,brake:s,hb:r,steer:he(o,-1,1)}}function Xy(n){let t=!1,e=!1;const i=Zt.m,s=r=>Gs(Hs[r]);for(const r of n)r.type==="round"?ys("ROUND "+r.round,1.1):r.type==="count"?(ys(String(r.n),.9),ai("click")):r.type==="go"?(ys("GO",.8,"#2fe3a0"),ai("pop")):r.type==="score"?(ys(Ui[r.attacker]+" SCORES",2.4,s(r.attacker)),ai("score"),pn&&rt.set.vib&&navigator.vibrate&&navigator.vibrate(60)):r.type==="kill"?(ys(Ui[r.victim]+" IS OUT",1.6,s(r.victim)),t=!0):r.type==="grow"?r.segs>0&&r.segs%4===0&&ai("grow"):r.type==="roundEnd"&&i.mode==="snake"?ys(r.winner>=0?Ui[r.winner]+" WINS THE ROUND":"DRAW",2.4,r.winner>=0?s(r.winner):""):r.type==="matchEnd"?De("mpend"):r.type==="bump"?(r.a.sus.hv-=r.closing*.02,r.b.sus.hv-=r.closing*.02,t=!0):r.type==="wall"?(r.car.sus.hv-=r.impact*.015,r.impact>9&&(t=!0)):r.type==="pickup"&&(e=!0);t&&Fh<=0&&(ai("hit"),Fh=.12),e&&ai("pickup")}function qy(n){const t=Zt.m,e=sf(t);Qr.scale.set(e,1,e),Fh-=n;for(let i=0;i<t.cars.length;i++){const s=t.cars[i],r=Zt.heads[i];r.root.visible=s.alive,r.root.position.set(s.x,0,s.z),r.root.rotation.y=s.h,iM(s.sus,s.st.bounce,s.thr,s.brk,he(s.yaw*s.sp*.004,-.12,.12),n),r.pivot.position.y=sc+s.sus.heave,r.pivot.rotation.set(s.sus.pitch,0,s.sus.roll);for(const h of r.wheels)h.pivot.rotation.y=(h.front?s.steer*.5:0)-h.sx*r.toe[h.axle],h.roll.rotation.x+=s.vf/h.R*n;if(s.alive&&t.phase!=="count"&&(Math.abs(s.slip)>.2&&s.sp>7||s.hb&&s.sp>6)&&Yy(s,r,n),Zt.pools[i]){const h=s.alive?Ep(s):[];Zt.pools[i].forEach((f,u)=>{const d=h[u];f.visible=!!d,d&&(f.position.set(d.x,0,d.z),f.rotation.y=d.h)})}const o=s.sp>4?Math.atan2(s.vx,s.vz):s.h;s.camH+=Cr(s.h+.4*Cr(o-s.h)-s.camH)*Math.min(1,n*3.2);const a=t.mode==="snake"?s.segs:0,c=8+s.sp*.03+Math.min(7,a*.55),l=l0[i];l.position.set(s.x-Math.sin(s.camH)*c,3.4+Math.min(4,a*.3),s.z-Math.cos(s.camH)*c),l.lookAt(s.x+Math.sin(s.camH)*5,1.1,s.z+Math.cos(s.camH)*5)}if(t.mode==="snake"){const i=performance.now()/1e3;t.orbs.forEach((s,r)=>{dummy.position.set(s.x,.9+Math.sin(i*3+r)*.15,s.z);const o=s.on?1+Math.sin(i*5+r)*.15:0;dummy.scale.set(o,o,o),dummy.rotation.set(0,0,0),dummy.updateMatrix(),fi.setMatrixAt(r,dummy.matrix),s.on&&fi.setColorAt(r,ky.setHSL(s.hue,.95,.6))}),fi.instanceMatrix.needsUpdate=!0,fi.instanceColor&&(fi.instanceColor.needsUpdate=!0),dummy.scale.set(0,0,0)}c0(n)}function Yy(n,t,e){const i=Math.cos(n.h),s=-Math.sin(n.h),r=Math.sin(n.h),o=Math.cos(n.h),a=t.lay.rear.z,c=t.rearX;for(const l of[1,-1]){const h=n.x+r*a+i*l*c,f=n.z+o*a+s*l*c,u=Math.atan2(n.vx,n.vz),d=zh[Il];Il=(Il+1)%zh.length,d.position.set(h,.09,f),d.rotation.set(0,u,0),d.scale.set(1,1,Math.max(.4,n.sp*e*1.4)),d.visible=!0}for(Ll+=e*12*he(Math.abs(n.slip)*2,0,1)*he(n.sp/20,.3,1);Ll>=1;){Ll--;const l=Math.random()<.5?1:-1;a0(n.x+r*a+i*l*c,n.z+o*a+s*l*c,n.vx,n.vz)}}function $y(){const n=innerWidth,t=innerHeight,e=bp(Zt.cfg.n,n,t);Oe.setScissorTest(!0),e.slice(0,Zt.cfg.n).forEach((i,s)=>{const r=l0[s],o=Zt.m.cars[s],a=t-i.y-i.h;r.aspect=i.w/i.h,r.fov=r.aspect<1?74:62,r.updateProjectionMatrix(),Oe.setViewport(i.x,a,i.w,i.h),Oe.setScissor(i.x,a,i.w,i.h),yn.position.set(o.x-60,80,o.z-40),yn.target.position.set(o.x,0,o.z),Oe.render(xe,r)}),Oe.setScissorTest(!1),Oe.setViewport(0,0,n,t)}function Ky(n){if(!oe){const t=Zt.m;Xy(uM(t,t.cars.map((e,i)=>Wy(i)),n))}Zt&&(qy(n),$y(),Vy())}const zh=[];for(let n=0;n<60;n++){const t=new xt(new Te(.35,1).rotateX(-Math.PI/2),r0);t.visible=!1,xe.add(t),zh.push(t)}let Il=0;function Zy(n){try{const t=!!oe,e=wn;if(!e)return;const i=.14+.1*Math.sin(performance.now()/200);In.forEach((_,v)=>{_.mat.color.setHex(v===Pr%In.length?16765503:6737151),_.mat.opacity=v===Pr%In.length?.2+i:.07});const s=t?Qn:Z,r=t?Qn.y:0;os.position.set(s.x,r,s.z),os.rotation.y=t?0:Z.h,ny(n),e.pivot.position.y=sc+ae.heave+e.tune.rideH/1e3,e.pivot.rotation.set(ae.pitch,0,ae.roll);const o=t?0:Z.steer*.5;for(const _ of e.wheels)_.pivot.rotation.y=(_.front?o:0)-_.sx*e.toe[_.axle],!t&&!On&&(_.roll.rotation.x+=Z.vf/_.R*n);const a=!t&&!On&&(Math.abs(Z.slip)>.18&&Z.sp>5||Z.hb&&Z.sp>4),c=Math.cos(Z.h),l=-Math.sin(Z.h),h=Math.sin(Z.h),f=Math.cos(Z.h),u=e.lay.rear.z,d=e.rearX;if(a){gs.length||(gs=by());for(const _ of[1,-1]){const v=Z.x+h*u+c*_*d,M=Z.z+f*u+l*_*d,P=gs[_>0?0:1],T=Math.hypot(v-P.lastX,M-P.lastZ);(P.head===0||T>.22)&&Ey(P,v,M,Z.h,.19)}for(Tl+=n*16*he(Math.abs(Z.slip)*2,0,1)*he(Z.sp/20,.3,1);Tl>=1;){Tl--;const _=Math.random()<.5?1:-1;a0(Z.x+h*u+c*_*d,Z.z+f*u+l*_*d,Z.vx,Z.vz)}}else gs.length&&(gs[0].active=!1,gs[1].active=!1,gs=[]);c0(n),Is&&Is.update(n,Z.x,Z.z);for(const _ of af)_(n);const g=Math.hypot(Z.vx,Z.vz),x=g>4?Math.atan2(Z.vx,Z.vz):Z.h;Ai+=Cr(Z.h+.4*Cr(x-Z.h)-Ai)*Math.min(1,n*3.2);let m=60+g*.5;if(t){Ms+=Rs?0:n*.25;const _=Math.cos(cc);ke.position.set(Qn.x+Math.sin(Ms)*_*Fo,Qn.y+.7+Math.sin(cc)*Fo,Qn.z+Math.cos(Ms)*_*Fo),ke.lookAt(Qn.x,Qn.y+.6,Qn.z),m=42}else{const _=8.5+g*.03;vr=Math.max(0,vr-n*2.5),ke.position.set(Z.x-Math.sin(Ai)*_+(Math.random()-.5)*vr,3.4+g*.012+(Math.random()-.5)*vr,Z.z-Math.cos(Ai)*_+(Math.random()-.5)*vr),ke.lookAt(Z.x+Math.sin(Ai)*5,1.1,Z.z+Math.cos(Ai)*5),Wr===1?(ke.position.set(Z.x+h*.6,1.25,Z.z+f*.6),ke.lookAt(Z.x+h*20,1.2,Z.z+f*20)):Wr===2&&(ke.position.set(Z.x-Math.sin(Ai)*18,12,Z.z-Math.cos(Ai)*18),ke.lookAt(Z.x,0,Z.z)),On&&(Ms+=n*.4,ke.position.set(Z.x+Math.sin(Ms)*9,2.6,Z.z+Math.cos(Ms)*9),ke.lookAt(Z.x,.8,Z.z))}ke.fov=Xa(ke.fov,m,Math.min(1,n*3));const p=!t||innerWidth<=780?0:-(oe==="home"||oe==="shop"||oe==="edit"?240:200);Na+=(p-Na)*Math.min(1,n*6),Math.abs(Na)>.5?ke.setViewOffset(innerWidth,innerHeight,Na,0,innerWidth,innerHeight):ke.clearViewOffset(),ke.updateProjectionMatrix();{const _=.13671875,v=Math.round(s.x/_)*_,M=Math.round(s.z/_)*_;yn.position.set(v-60,r+80,M-40),yn.target.position.set(v,r,M)}if(wr.position.set(s.x,r,s.z),!t&&ei==="timed"&&_r.length>1){const _=df/.1,v=Math.min(_r.length-2,Math.floor(_)),M=Math.min(1,_-v),P=_r[v],T=_r[v+1];Ps.visible=_<_r.length-1,Ps.position.set(Xa(P[0],T[0],M),.6,Xa(P[1],T[1],M)),Ps.rotation.y=P[2]+Cr(T[2]-P[2])*M}else Ps.visible=!1;if(Ye){const _=Ye.ctx.currentTime,v=!t,M=he(Z.rpm,.15,1.2),P=40+M*115;Ye.eng1.frequency.setTargetAtTime(P,_,.05),Ye.eng2.frequency.setTargetAtTime(P*.5,_,.05),Ye.lp.frequency.setTargetAtTime(420+M*1600,_,.05),Ye.engG.gain.setTargetAtTime(v?.055+Z.thr*.06:0,_,.06);const T=a?he(Math.abs(Z.slip)*2,0,1)*he(Z.sp/15,0,1):0;Ye.sg.gain.setTargetAtTime(T*.09,_,.05),Ye.bp.frequency.setTargetAtTime(1400+Z.sp*30,_,.1),Ye.windG.gain.setTargetAtTime(v?he(Z.sp/60,0,1)*.05:0,_,.1)}}catch(t){console.error("visuals error:",t)}}let vd=performance.now();Oe.setAnimationLoop(n=>{const t=Math.min(.05,(n-vd)/1e3);vd=n;try{if(Xp(t),Zt){fd(t),Ky(t),md();return}let e=t;if(qt.sloMo>0?(e=t*.35,qt.sloMo-=t):ac>0&&(e=t*.25,ac-=t),ff-=t,!oe&&e>0&&!On){const i=Math.ceil(e/.0167);for(let s=0;s<i;s++)Py(e/i);ei==="race"?zy(e):(Fy(e),ei==="timed"&&(lc-=e,df+=e,$a+=e,$a>=.1&&($a-=.1,uf.push([Z.x,Z.z,Z.h])),lc<=0&&Dy()))}fd(t),Zy(e),By(),md(),Oe.render(xe,ke)}catch(e){console.error("frame error:",e)}});try{xf(),Ne=rs.find(n=>n.id===rt.map)||rs[0],cf(Ne),Tc(Ne),pi(),jr(ze,Xs(rt.car),Re),Vo(),Us(),De("home")}catch(n){console.error("boot error:",n),hc&&hc.classList.remove("off"),dn&&dn.replaceChildren(q("div",{class:"m-screen"},Bi("BOOT ERROR"),q("p",{class:"m-sub"},String(n&&n.message||n))))}
