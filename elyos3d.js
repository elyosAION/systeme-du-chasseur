(()=>{var sf=0,ph=1,rf=2;var Ju=1,Ma=2,Zi=3,xs=0,Mn=1,sn=2;var Oi=0,ps=1,Vn=2,mh=3,gh=4,af=5,ks=100,of=101,lf=102,xh=103,yh=104,cf=200,hf=201,uf=202,df=203,jl=204,Ql=205,ff=206,pf=207,mf=208,gf=209,xf=210,yf=211,vf=212,_f=213,Mf=214,bf=0,wf=1,Sf=2,fo=3,Ef=4,Tf=5,Af=6,Rf=7,Xc=0,Cf=1,Pf=2,Ni=0,qc=1,Yc=2,Zc=3,ba=4,If=5,Jc=6;var Ku=300,Mr=301,br=302,ec=303,tc=304,Zo=306,oa=1e3,Ai=1001,nc=1002,Rn=1003,vh=1004;var ml=1005;var gi=1006,Lf=1007;var la=1008;var ms=1009,Df=1010,zf=1011,Kc=1012,$u=1013,ds=1014,fs=1015,Ri=1016,ju=1017,Qu=1018,Fs=1020,Uf=1021,ci=1023,kf=1024,Of=1025,Bs=1026,wr=1027,Nf=1028,ed=1029,Ff=1030,td=1031,nd=1033,gl=33776,xl=33777,yl=33778,vl=33779,_h=35840,Mh=35841,bh=35842,wh=35843,id=36196,Sh=37492,Eh=37496,Th=37808,Ah=37809,Rh=37810,Ch=37811,Ph=37812,Ih=37813,Lh=37814,Dh=37815,zh=37816,Uh=37817,kh=37818,Oh=37819,Nh=37820,Fh=37821,_l=36492,Bh=36494,Hh=36495,Bf=36283,Gh=36284,Vh=36285,Wh=36286;var po=2300,mo=2301,Ml=2302,Xh=2400,qh=2401,Yh=2402;var sd=3e3,Hs=3001,Hf=3200,Gf=3201,Jo=0,Vf=1,xi="",tn="srgb",Qi="srgb-linear",$c="display-p3",Ko="display-p3-linear",go="linear",Qt="srgb",xo="rec709",yo="p3";var Js=7680;var Zh=519,Wf=512,Xf=513,qf=514,rd=515,Yf=516,Zf=517,Jf=518,Kf=519,ic=35044;var Jh="300 es",sc=1035,$i=2e3,vo=2001,ys=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bl=Math.PI/180,_o=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Gn(i,e,t){return Math.max(e,Math.min(t,i))}function $f(i,e){return(i%e+e)%e}function wl(i,e,t){return(1-t)*i+t*e}function Kh(i){return(i&i-1)===0&&i!==0}function rc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class i{constructor(e,t,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],f=n[7],p=n[2],d=n[5],x=n[8],y=s[0],g=s[3],m=s[6],_=s[1],v=s[4],E=s[7],z=s[2],P=s[5],I=s[8];return r[0]=a*y+o*_+c*z,r[3]=a*g+o*v+c*P,r[6]=a*m+o*E+c*I,r[1]=h*y+u*_+f*z,r[4]=h*g+u*v+f*P,r[7]=h*m+u*E+f*I,r[2]=p*y+d*_+x*z,r[5]=p*g+d*v+x*P,r[8]=p*m+d*E+x*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=u*a-o*h,p=o*c-u*r,d=h*r-a*c,x=t*f+n*p+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=f*y,e[1]=(s*h-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=p*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(n*c-h*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sl=new At;function ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=Mo("canvas");return i.style.display="block",i}var $h={};function ia(i){i in $h||($h[i]=!0,console.warn(i))}var jh=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[Qi]:{transfer:go,primaries:xo,toReference:i=>i,fromReference:i=>i},[tn]:{transfer:Qt,primaries:xo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ko]:{transfer:go,primaries:yo,toReference:i=>i.applyMatrix3(Qh),fromReference:i=>i.applyMatrix3(jh)},[$c]:{transfer:Qt,primaries:yo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qh),fromReference:i=>i.applyMatrix3(jh).convertLinearToSRGB()}},Qf=new Set([Qi,Ko]),qt={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=za[e].toReference,s=za[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return za[i].primaries},getTransfer:function(i){return i===xi?go:za[i].transfer}};function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function El(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ks,bo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=Mo("canvas")),Ks.width=e.width,Ks.height=e.height;let n=Ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},e0=0,wo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tl(s[a].image)):r.push(Tl(s[a]))}else r=Tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var t0=0,hi=class i extends ys{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=gi,a=la,o=ci,c=ms,h=i.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ji(),this.name="",this.source=new wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hs?tn:xi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tn?Hs:sd}set encoding(e){ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?tn:xi}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Ku;hi.DEFAULT_ANISOTROPY=1;var ln=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],u=c[4],f=c[8],p=c[1],d=c[5],x=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,E=(d+1)/2,z=(m+1)/2,P=(u+p)/4,I=(f+y)/4,U=(x+g)/4;return v>E&&v>z?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=P/n,r=I/n):E>z?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=U/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=I/r,s=U/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-x)*(g-x)+(f-y)*(f-y)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(f-y)/_,this.z=(p-u)/_,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ac=class extends ys{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hs?tn:xi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},So=class extends hi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oc=class extends hi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],d=r[a+1],x=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=x,e[t+3]=y;return}if(f!==y||c!==p||h!==d||u!==x){let g=1-o,m=c*p+h*d+u*x+f*y,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let z=Math.sqrt(v),P=Math.atan2(z,m*_);g=Math.sin(g*P)/z,o=Math.sin(o*P)/z}let E=o*_;if(c=c*g+p*E,h=h*g+d*E,u=u*g+x*E,f=f*g+y*E,g===1-o){let z=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=z,h*=z,u*=z,f*=z}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a],p=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+u*f+c*d-h*p,e[t+1]=c*x+u*p+h*f-o*d,e[t+2]=h*x+u*d+o*p-c*f,e[t+3]=u*x-o*f-c*p-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),f=o(r/2),p=c(n/2),d=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*u*f+h*d*x,this._y=h*d*f-p*u*x,this._z=h*u*x+p*d*f,this._w=h*u*f-p*d*x;break;case"YXZ":this._x=p*u*f+h*d*x,this._y=h*d*f-p*u*x,this._z=h*u*x-p*d*f,this._w=h*u*f+p*d*x;break;case"ZXY":this._x=p*u*f-h*d*x,this._y=h*d*f+p*u*x,this._z=h*u*x+p*d*f,this._w=h*u*f-p*d*x;break;case"ZYX":this._x=p*u*f-h*d*x,this._y=h*d*f+p*u*x,this._z=h*u*x-p*d*f,this._w=h*u*f+p*d*x;break;case"YZX":this._x=p*u*f+h*d*x,this._y=h*d*f+p*u*x,this._z=h*u*x-p*d*f,this._w=h*u*f-p*d*x;break;case"XZY":this._x=p*u*f-h*d*x,this._y=h*d*f-p*u*x,this._z=h*u*x+p*d*f,this._w=h*u*f+p*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],f=t[10],p=n+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*h+a*f-o*u,this.y=n+c*u+o*h-r*f,this.z=s+c*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new W,eu=new ei,es=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),ka.subVectors(this.max,Yr),$s.subVectors(e.a,Yr),js.subVectors(e.b,Yr),Qs.subVectors(e.c,Yr),os.subVectors(js,$s),ls.subVectors(Qs,js),Is.subVectors($s,Qs);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Is.z,Is.y,os.z,0,-os.x,ls.z,0,-ls.x,Is.z,0,-Is.x,-os.y,os.x,0,-ls.y,ls.x,0,-Is.y,Is.x,0];return!Rl(t,$s,js,Qs,ka)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,$s,js,Qs,ka))?!1:(Oa.crossVectors(os,ls),t=[Oa.x,Oa.y,Oa.z],Rl(t,$s,js,Qs,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vi=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,Ua=new es,$s=new W,js=new W,Qs=new W,os=new W,ls=new W,Is=new W,Yr=new W,ka=new W,Oa=new W,Ls=new W;function Rl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ls.fromArray(i,r);let o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),h=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var n0=new es,Zr=new W,Cl=new W,vs=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):n0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Cl)),this.expandByPoint(Zr.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wi=new W,Pl=new W,Na=new W,cs=new W,Il=new W,Fa=new W,Ll=new W,ca=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pl.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Pl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Na),o=cs.dot(this.direction),c=-cs.dot(Na),h=cs.lengthSq(),u=Math.abs(1-a*a),f,p,d,x;if(u>0)if(f=a*c-o,p=a*o-c,x=r*u,f>=0)if(p>=-x)if(p<=x){let y=1/u;f*=y,p*=y,d=f*(f+a*p+2*o)+p*(a*f+p+2*c)+h}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;else p<=-x?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+h):p<=x?(f=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pl).addScaledVector(Na,p),d}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),s=Wi.dot(Wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,s,r){Il.subVectors(t,e),Fa.subVectors(n,e),Ll.crossVectors(Il,Fa);let a=this.direction.dot(Ll),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);let c=o*this.direction.dot(Fa.crossVectors(cs,Fa));if(c<0)return null;let h=o*this.direction.dot(Il.cross(cs));if(h<0||c+h>a)return null;let u=-o*cs.dot(Ll);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class i{constructor(e,t,n,s,r,a,o,c,h,u,f,p,d,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,f,p,d,x,y,g)}set(e,t,n,s,r,a,o,c,h,u,f,p,d,x,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=f,m[14]=p,m[3]=d,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*u,d=a*f,x=o*u,y=o*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=d+x*h,t[5]=p-y*h,t[9]=-o*c,t[2]=y-p*h,t[6]=x+d*h,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,d=c*f,x=h*u,y=h*f;t[0]=p+y*o,t[4]=x*o-d,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-x,t[6]=y+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,d=c*f,x=h*u,y=h*f;t[0]=p-y*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*u,t[9]=y-p*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,d=a*f,x=o*u,y=o*f;t[0]=c*u,t[4]=x*h-d,t[8]=p*h+y,t[1]=c*f,t[5]=y*h+p,t[9]=d*h-x,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*h,x=o*c,y=o*h;t[0]=c*u,t[4]=y-p*f,t[8]=x*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*f+x,t[10]=p-y*f}else if(e.order==="XZY"){let p=a*c,d=a*h,x=o*c,y=o*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=p*f+y,t[5]=a*u,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*u,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,s0)}lookAt(e,t,n){let s=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),hs.crossVectors(n,oi),hs.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),hs.crossVectors(n,oi)),hs.normalize(),Ba.crossVectors(oi,hs),s[0]=hs.x,s[4]=Ba.x,s[8]=oi.x,s[1]=hs.y,s[5]=Ba.y,s[9]=oi.y,s[2]=hs.z,s[6]=Ba.z,s[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],f=n[5],p=n[9],d=n[13],x=n[2],y=n[6],g=n[10],m=n[14],_=n[3],v=n[7],E=n[11],z=n[15],P=s[0],I=s[4],U=s[8],S=s[12],A=s[1],H=s[5],G=s[9],te=s[13],N=s[2],M=s[6],b=s[10],Z=s[14],J=s[3],Q=s[7],we=s[11],be=s[15];return r[0]=a*P+o*A+c*N+h*J,r[4]=a*I+o*H+c*M+h*Q,r[8]=a*U+o*G+c*b+h*we,r[12]=a*S+o*te+c*Z+h*be,r[1]=u*P+f*A+p*N+d*J,r[5]=u*I+f*H+p*M+d*Q,r[9]=u*U+f*G+p*b+d*we,r[13]=u*S+f*te+p*Z+d*be,r[2]=x*P+y*A+g*N+m*J,r[6]=x*I+y*H+g*M+m*Q,r[10]=x*U+y*G+g*b+m*we,r[14]=x*S+y*te+g*Z+m*be,r[3]=_*P+v*A+E*N+z*J,r[7]=_*I+v*H+E*M+z*Q,r[11]=_*U+v*G+E*b+z*we,r[15]=_*S+v*te+E*Z+z*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],f=e[6],p=e[10],d=e[14],x=e[3],y=e[7],g=e[11],m=e[15];return x*(+r*c*f-s*h*f-r*o*p+n*h*p+s*o*d-n*c*d)+y*(+t*c*d-t*h*p+r*a*p-s*a*d+s*h*u-r*c*u)+g*(+t*h*f-t*o*d-r*a*f+n*a*d+r*o*u-n*h*u)+m*(-s*o*u-t*c*f+t*o*p+s*a*f-n*a*p+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=e[9],p=e[10],d=e[11],x=e[12],y=e[13],g=e[14],m=e[15],_=f*g*h-y*p*h+y*c*d-o*g*d-f*c*m+o*p*m,v=x*p*h-u*g*h-x*c*d+a*g*d+u*c*m-a*p*m,E=u*y*h-x*f*h+x*o*d-a*y*d-u*o*m+a*f*m,z=x*f*c-u*y*c-x*o*p+a*y*p+u*o*g-a*f*g,P=t*_+n*v+s*E+r*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=_*I,e[1]=(y*p*r-f*g*r-y*s*d+n*g*d+f*s*m-n*p*m)*I,e[2]=(o*g*r-y*c*r+y*s*h-n*g*h-o*s*m+n*c*m)*I,e[3]=(f*c*r-o*p*r-f*s*h+n*p*h+o*s*d-n*c*d)*I,e[4]=v*I,e[5]=(u*g*r-x*p*r+x*s*d-t*g*d-u*s*m+t*p*m)*I,e[6]=(x*c*r-a*g*r-x*s*h+t*g*h+a*s*m-t*c*m)*I,e[7]=(a*p*r-u*c*r+u*s*h-t*p*h-a*s*d+t*c*d)*I,e[8]=E*I,e[9]=(x*f*r-u*y*r-x*n*d+t*y*d+u*n*m-t*f*m)*I,e[10]=(a*y*r-x*o*r+x*n*h-t*y*h-a*n*m+t*o*m)*I,e[11]=(u*o*r-a*f*r-u*n*h+t*f*h+a*n*d-t*o*d)*I,e[12]=z*I,e[13]=(u*y*s-x*f*s+x*n*p-t*y*p-u*n*g+t*f*g)*I,e[14]=(x*o*s-a*y*s-x*n*c+t*y*c+a*n*g-t*o*g)*I,e[15]=(a*f*s-u*o*s+u*n*c-t*f*c-a*n*p+t*o*p)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,f=o+o,p=r*h,d=r*u,x=r*f,y=a*u,g=a*f,m=o*f,_=c*h,v=c*u,E=c*f,z=n.x,P=n.y,I=n.z;return s[0]=(1-(y+m))*z,s[1]=(d+E)*z,s[2]=(x-v)*z,s[3]=0,s[4]=(d-E)*P,s[5]=(1-(p+m))*P,s[6]=(g+_)*P,s[7]=0,s[8]=(x+v)*I,s[9]=(g-_)*I,s[10]=(1-(p+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=er.set(s[0],s[1],s[2]).length(),a=er.set(s[4],s[5],s[6]).length(),o=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ei.copy(this);let h=1/r,u=1/a,f=1/o;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=f,Ei.elements[9]*=f,Ei.elements[10]*=f,t.setFromRotationMatrix(Ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$i){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,x;if(o===$i)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===vo)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$i){let c=this.elements,h=1/(t-e),u=1/(n-s),f=1/(a-r),p=(t+e)*h,d=(n+s)*u,x,y;if(o===$i)x=(a+r)*f,y=-2*f;else if(o===vo)x=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new W,Ei=new Ht,i0=new W(0,0,0),s0=new W(1,1,1),hs=new W,Ba=new W,oi=new W,tu=new Ht,nu=new ei,_s=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_s.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0,iu=new W,tr=new ei,Xi=new Ht,Ha=new W,Jr=new W,a0=new W,o0=new ei,su=new W(1,0,0),ru=new W(0,1,0),au=new W(0,0,1),l0={type:"added"},c0={type:"removed"},gn=class i extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new _s,n=new ei,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new At}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Jr,Ha,this.up):Xi.lookAt(Ha,Jr,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Xi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(l0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new W(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new W,qi=new W,Dl=new W,Yi=new W,nr=new W,ir=new W,ou=new W,zl=new W,Ul=new W,kl=new W,Ga=!1,Ns=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),qi.subVectors(n,t),Dl.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(qi),c=Ti.dot(Dl),h=qi.dot(qi),u=qi.dot(Dl),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(h*c-o*u)*p,x=(a*u-o*c)*p;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getUV(e,t,n,s,r,a,o,c){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(o,Yi.z),c)}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),qi.subVectors(e,t),Ti.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Ti.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;nr.subVectors(s,n),ir.subVectors(r,n),zl.subVectors(e,n);let c=nr.dot(zl),h=ir.dot(zl);if(c<=0&&h<=0)return t.copy(n);Ul.subVectors(e,s);let u=nr.dot(Ul),f=ir.dot(Ul);if(u>=0&&f<=u)return t.copy(s);let p=c*f-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(nr,a);kl.subVectors(e,r);let d=nr.dot(kl),x=ir.dot(kl);if(x>=0&&d<=x)return t.copy(r);let y=d*h-c*x;if(y<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(n).addScaledVector(ir,o);let g=u*x-d*f;if(g<=0&&f-u>=0&&d-x>=0)return ou.subVectors(r,s),o=(f-u)/(f-u+(d-x)),t.copy(s).addScaledVector(ou,o);let m=1/(g+y+p);return a=y*m,o=p*m,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qt.workingColorSpace){if(e=$f(e,1),t=Gn(t,0,1),n=Gn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ol(a,r,e+1/3),this.g=Ol(a,r,e),this.b=Ol(a,r,e-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return qt.fromWorkingColorSpace(Hn.copy(this),e),Math.round(Gn(Hn.r*255,0,255))*65536+Math.round(Gn(Hn.g*255,0,255))*256+Math.round(Gn(Hn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Hn.copy(this),t);let n=Hn.r,s=Hn.g,r=Hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=tn){qt.fromWorkingColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,s=Hn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Va);let n=wl(us.h,Va.h,t),s=wl(us.s,Va.s,t),r=wl(us.l,Va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new ot;ot.NAMES=od;var h0=0,yi=class extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=ps,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Ql,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==xs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _n=new W,Wa=new Ce,bn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ic,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ic&&(e.usage=this.usage),e}};var Eo=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var To=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var u0=0,mi=new Ht,Nl=new gn,sr=new W,li=new es,Kr=new es,kn=new W,Zt=class i extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?To:Eo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new At().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(kn.addVectors(li.min,Kr.min),li.expandByPoint(kn),kn.addVectors(li.max,Kr.max),li.expandByPoint(kn)):(li.expandByPoint(Kr.min),li.expandByPoint(Kr.max))}li.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)kn.fromBufferAttribute(o,h),c&&(sr.fromBufferAttribute(e,h),kn.add(sr)),s=Math.max(s,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],u=[];for(let A=0;A<o;A++)h[A]=new W,u[A]=new W;let f=new W,p=new W,d=new W,x=new Ce,y=new Ce,g=new Ce,m=new W,_=new W;function v(A,H,G){f.fromArray(s,A*3),p.fromArray(s,H*3),d.fromArray(s,G*3),x.fromArray(a,A*2),y.fromArray(a,H*2),g.fromArray(a,G*2),p.sub(f),d.sub(f),y.sub(x),g.sub(x);let te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(d,-y.y).multiplyScalar(te),_.copy(d).multiplyScalar(y.x).addScaledVector(p,-g.x).multiplyScalar(te),h[A].add(m),h[H].add(m),h[G].add(m),u[A].add(_),u[H].add(_),u[G].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let A=0,H=E.length;A<H;++A){let G=E[A],te=G.start,N=G.count;for(let M=te,b=te+N;M<b;M+=3)v(n[M+0],n[M+1],n[M+2])}let z=new W,P=new W,I=new W,U=new W;function S(A){I.fromArray(r,A*3),U.copy(I);let H=h[A];z.copy(H),z.sub(I.multiplyScalar(I.dot(H))).normalize(),P.crossVectors(U,H);let te=P.dot(u[A])<0?-1:1;c[A*4]=z.x,c[A*4+1]=z.y,c[A*4+2]=z.z,c[A*4+3]=te}for(let A=0,H=E.length;A<H;++A){let G=E[A],te=G.start,N=G.count;for(let M=te,b=te+N;M<b;M+=3)S(n[M+0]),S(n[M+1]),S(n[M+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,h=new W,u=new W,f=new W;if(e)for(let p=0,d=e.count;p<d;p+=3){let x=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(o,c){let h=o.array,u=o.itemSize,f=o.normalized,p=new h.constructor(c.length*u),d=0,x=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*u;for(let m=0;m<u;m++)p[x++]=h[d++]}return new bn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let p=h[u],d=e(p,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let f=0,p=h.length;f<p;f++){let d=h[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],f=r[h];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lu=new Ht,Ds=new ca,Xa=new vs,cu=new W,rr=new W,ar=new W,or=new W,Fl=new W,qa=new W,Ya=new Ce,Za=new Ce,Ja=new Ce,hu=new W,uu=new W,du=new W,Ka=new W,$a=new W,Fe=class extends gn{constructor(e=new Zt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],f=r[c];u!==0&&(Fl.fromBufferAttribute(f,e),a?qa.addScaledVector(Fl,u):qa.addScaledVector(Fl.sub(t),u))}t.add(qa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Xa.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Xa,cu)===null||Ds.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=p.length;x<y;x++){let g=p[x],m=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=_,z=v;E<z;E+=3){let P=o.getX(E),I=o.getX(E+1),U=o.getX(E+2);s=ja(this,m,e,n,h,u,f,P,I,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=x,m=y;g<m;g+=3){let _=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);s=ja(this,a,e,n,h,u,f,_,v,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=p.length;x<y;x++){let g=p[x],m=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let E=_,z=v;E<z;E+=3){let P=E,I=E+1,U=E+2;s=ja(this,m,e,n,h,u,f,P,I,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let g=x,m=y;g<m;g+=3){let _=g,v=g+1,E=g+2;s=ja(this,a,e,n,h,u,f,_,v,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function d0(i,e,t,n,s,r,a,o){let c;if(e.side===Mn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===xs,o),c===null)return null;$a.copy(o),$a.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo($a);return h<t.near||h>t.far?null:{distance:h,point:$a.clone(),object:i}}function ja(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,rr),i.getVertexPosition(c,ar),i.getVertexPosition(h,or);let u=d0(i,e,t,n,rr,ar,or,Ka);if(u){s&&(Ya.fromBufferAttribute(s,o),Za.fromBufferAttribute(s,c),Ja.fromBufferAttribute(s,h),u.uv=Ns.getInterpolation(Ka,rr,ar,or,Ya,Za,Ja,new Ce)),r&&(Ya.fromBufferAttribute(r,o),Za.fromBufferAttribute(r,c),Ja.fromBufferAttribute(r,h),u.uv1=Ns.getInterpolation(Ka,rr,ar,or,Ya,Za,Ja,new Ce),u.uv2=u.uv1),a&&(hu.fromBufferAttribute(a,o),uu.fromBufferAttribute(a,c),du.fromBufferAttribute(a,h),u.normal=Ns.getInterpolation(Ka,rr,ar,or,hu,uu,du,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new W,materialIndex:0};Ns.getNormal(rr,ar,or,f.normal),u.face=f}return u}var ti=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],f=[],p=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(f,2));function x(y,g,m,_,v,E,z,P,I,U,S){let A=E/I,H=z/U,G=E/2,te=z/2,N=P/2,M=I+1,b=U+1,Z=0,J=0,Q=new W;for(let we=0;we<b;we++){let be=we*H-te;for(let ke=0;ke<M;ke++){let ee=ke*A-G;Q[y]=ee*_,Q[g]=be*v,Q[m]=N,h.push(Q.x,Q.y,Q.z),Q[y]=0,Q[g]=0,Q[m]=P>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(ke/I),f.push(1-we/U),Z+=1}}for(let we=0;we<U;we++)for(let be=0;be<I;be++){let ke=p+be+M*we,ee=p+be+M*(we+1),re=p+(be+1)+M*(we+1),ze=p+(be+1)+M*we;c.push(ke,ee,ze),c.push(ee,re,ze),J+=6}o.addGroup(d,J,S),d+=J,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jn(i){let e={};for(let t=0;t<i.length;t++){let n=Sr(i[t]);for(let s in n)e[s]=n[s]}return e}function f0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}var Es={clone:Sr,merge:Jn},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ao=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cn=class extends Ao{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,cr=1,lc=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Cn(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new Cn(lr,cr,e,t);r.layers=this.layers,this.add(r);let a=new Cn(lr,cr,e,t);a.layers=this.layers,this.add(a);let o=new Cn(lr,cr,e,t);o.layers=this.layers,this.add(o);let c=new Cn(lr,cr,e,t);c.layers=this.layers,this.add(c);let h=new Cn(lr,cr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,p,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ro=class extends hi{constructor(e,t,n,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cc=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?tn:xi),this.texture=new Ro(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ti(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Oi});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===la&&(t.minFilter=gi),new lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Bl=new W,g0=new W,x0=new At,Ji=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bl.subVectors(n,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||x0.getNormalMatrix(e),s=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zs=new vs,Qa=new W,ua=class{constructor(e=new Ji,t=new Ji,n=new Ji,s=new Ji,r=new Ji,a=new Ji){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],d=s[8],x=s[9],y=s[10],g=s[11],m=s[12],_=s[13],v=s[14],E=s[15];if(n[0].setComponents(c-r,p-h,g-d,E-m).normalize(),n[1].setComponents(c+r,p+h,g+d,E+m).normalize(),n[2].setComponents(c+a,p+u,g+x,E+_).normalize(),n[3].setComponents(c-a,p-u,g-x,E-_).normalize(),n[4].setComponents(c-o,p-f,g-y,E-v).normalize(),t===$i)n[5].setComponents(c+o,p+f,g+y,E+v).normalize();else if(t===vo)n[5].setComponents(o,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function y0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(h,u){let f=h.array,p=h.usage,d=f.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,f,p),h.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function r(h,u,f){let p=u.array,d=u._updateRange,x=u.updateRanges;if(i.bindBuffer(f,h),d.count===-1&&x.length===0&&i.bufferSubData(f,0,p),x.length!==0){for(let y=0,g=x.length;y<g;y++){let m=x[y];t?i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let f=n.get(h);if(f===void 0)n.set(h,s(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,u),f.version=h.version}}return{get:a,remove:o,update:c}}var Ms=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,f=e/o,p=t/c,d=[],x=[],y=[],g=[];for(let m=0;m<u;m++){let _=m*p-a;for(let v=0;v<h;v++){let E=v*f-r;x.push(E,-_,0),y.push(0,0,1),g.push(v/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let v=_+h*m,E=_+h*(m+1),z=_+1+h*(m+1),P=_+1+h*m;d.push(v,E,P),d.push(E,z,P)}this.setIndex(d),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(y,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,G0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
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
#endif`,yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,vp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,km=`#define MATCAP
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
}`,Om=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bm=`#define PHONG
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
}`,Hm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Jm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,$m=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wt={alphahash_fragment:v0,alphahash_pars_fragment:_0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:w0,alphatest_pars_fragment:S0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:I0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:O0,color_fragment:N0,color_pars_fragment:F0,color_pars_vertex:B0,color_vertex:H0,common:G0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:K0,envmap_fragment:$0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:xp,lights_physical_pars_fragment:yp,lights_fragment_begin:vp,lights_fragment_maps:_p,lights_fragment_end:Mp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Ip,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:zp,morphtarget_vertex:Up,normal_fragment_begin:kp,normal_fragment_maps:Op,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:Bp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:Yp,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:Kp,dithering_pars_fragment:$p,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:xm,background_vert:ym,background_frag:vm,backgroundCube_vert:_m,backgroundCube_frag:Mm,cube_vert:bm,cube_frag:wm,depth_vert:Sm,depth_frag:Em,distanceRGBA_vert:Tm,distanceRGBA_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:zm,meshlambert_frag:Um,meshmatcap_vert:km,meshmatcap_frag:Om,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:Bm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Vm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Km,sprite_frag:$m},Ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},ki={basic:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Jn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Jn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Jn([Ye.points,Ye.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Jn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Jn([Ye.common,Ye.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Jn([Ye.sprite,Ye.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Jn([Ye.common,Ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Jn([Ye.lights,Ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ki.physical={uniforms:Jn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var eo={r:0,b:0,g:0};function jm(i,e,t,n,s,r,a){let o=new ot(0),c=r===!0?0:1,h,u,f=null,p=0,d=null;function x(g,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,c):v&&v.isColor&&(y(v,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zo)?(u===void 0&&(u=new Fe(new ti(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Sr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=qt.getTransfer(v.colorSpace)!==Qt,(f!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Fe(new Ms(2,2),new wn({name:"BackgroundMaterial",uniforms:Sr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=qt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function y(g,m){g.getRGB(eo,ld(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,y(o,c)},render:x}}function Qm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),h=c,u=!1;function f(N,M,b,Z,J){let Q=!1;if(a){let we=y(Z,b,M);h!==we&&(h=we,d(h.object)),Q=m(N,Z,b,J),Q&&_(N,Z,b,J)}else{let we=M.wireframe===!0;(h.geometry!==Z.id||h.program!==b.id||h.wireframe!==we)&&(h.geometry=Z.id,h.program=b.id,h.wireframe=we,Q=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,U(N,M,b,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function x(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function y(N,M,b){let Z=b.wireframe===!0,J=o[N.id];J===void 0&&(J={},o[N.id]=J);let Q=J[M.id];Q===void 0&&(Q={},J[M.id]=Q);let we=Q[Z];return we===void 0&&(we=g(p()),Q[Z]=we),we}function g(N){let M=[],b=[],Z=[];for(let J=0;J<s;J++)M[J]=0,b[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:b,attributeDivisors:Z,object:N,attributes:{},index:null}}function m(N,M,b,Z){let J=h.attributes,Q=M.attributes,we=0,be=b.getAttributes();for(let ke in be)if(be[ke].location>=0){let re=J[ke],ze=Q[ke];if(ze===void 0&&(ke==="instanceMatrix"&&N.instanceMatrix&&(ze=N.instanceMatrix),ke==="instanceColor"&&N.instanceColor&&(ze=N.instanceColor)),re===void 0||re.attribute!==ze||ze&&re.data!==ze.data)return!0;we++}return h.attributesNum!==we||h.index!==Z}function _(N,M,b,Z){let J={},Q=M.attributes,we=0,be=b.getAttributes();for(let ke in be)if(be[ke].location>=0){let re=Q[ke];re===void 0&&(ke==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),ke==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let ze={};ze.attribute=re,re&&re.data&&(ze.data=re.data),J[ke]=ze,we++}h.attributes=J,h.attributesNum=we,h.index=Z}function v(){let N=h.newAttributes;for(let M=0,b=N.length;M<b;M++)N[M]=0}function E(N){z(N,0)}function z(N,M){let b=h.newAttributes,Z=h.enabledAttributes,J=h.attributeDivisors;b[N]=1,Z[N]===0&&(i.enableVertexAttribArray(N),Z[N]=1),J[N]!==M&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,M),J[N]=M)}function P(){let N=h.newAttributes,M=h.enabledAttributes;for(let b=0,Z=M.length;b<Z;b++)M[b]!==N[b]&&(i.disableVertexAttribArray(b),M[b]=0)}function I(N,M,b,Z,J,Q,we){we===!0?i.vertexAttribIPointer(N,M,b,J,Q):i.vertexAttribPointer(N,M,b,Z,J,Q)}function U(N,M,b,Z){if(n.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=Z.attributes,Q=b.getAttributes(),we=M.defaultAttributeValues;for(let be in Q){let ke=Q[be];if(ke.location>=0){let ee=J[be];if(ee===void 0&&(be==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),be==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){let re=ee.normalized,ze=ee.itemSize,Ie=t.get(ee);if(Ie===void 0)continue;let Ze=Ie.buffer,dt=Ie.type,Be=Ie.bytesPerElement,qe=n.isWebGL2===!0&&(dt===i.INT||dt===i.UNSIGNED_INT||ee.gpuType===$u);if(ee.isInterleavedBufferAttribute){let lt=ee.data,q=lt.stride,Le=ee.offset;if(lt.isInstancedInterleavedBuffer){for(let ae=0;ae<ke.locationSize;ae++)z(ke.location+ae,lt.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ae=0;ae<ke.locationSize;ae++)E(ke.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ae=0;ae<ke.locationSize;ae++)I(ke.location+ae,ze/ke.locationSize,dt,re,q*Be,(Le+ze/ke.locationSize*ae)*Be,qe)}else{if(ee.isInstancedBufferAttribute){for(let lt=0;lt<ke.locationSize;lt++)z(ke.location+lt,ee.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let lt=0;lt<ke.locationSize;lt++)E(ke.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let lt=0;lt<ke.locationSize;lt++)I(ke.location+lt,ze/ke.locationSize,dt,re,ze*Be,ze/ke.locationSize*lt*Be,qe)}}else if(we!==void 0){let re=we[be];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ke.location,re);break;case 3:i.vertexAttrib3fv(ke.location,re);break;case 4:i.vertexAttrib4fv(ke.location,re);break;default:i.vertexAttrib1fv(ke.location,re)}}}}P()}function S(){G();for(let N in o){let M=o[N];for(let b in M){let Z=M[b];for(let J in Z)x(Z[J].object),delete Z[J];delete M[b]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;let M=o[N.id];for(let b in M){let Z=M[b];for(let J in Z)x(Z[J].object),delete Z[J];delete M[b]}delete o[N.id]}function H(N){for(let M in o){let b=o[M];if(b[N.id]===void 0)continue;let Z=b[N.id];for(let J in Z)x(Z[J].object),delete Z[J];delete b[N.id]}}function G(){te(),u=!0,h!==c&&(h=c,d(h.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:E,disableUnusedAttributes:P}}function eg(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,p){if(p===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,u,f,p),t.update(f,r,p)}function h(u,f,p){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<p;x++)this.render(u[x],f[x]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,p);let x=0;for(let y=0;y<p;y++)x+=f[y];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function tg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,E=a||e.has("OES_texture_float"),z=v&&E,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:z,maxSamples:P}}function ng(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ji,o=new At,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,d){let x=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?u(null):h();else{let _=r?0:n,v=_*4,E=m.clippingState||null;c.value=E,E=u(x,p,v,d);for(let z=0;z!==v;++z)E[z]=t[z];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,d,x){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=c.value,x!==!0||g===null){let m=d+y*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,E=d;v!==y;++v,E+=4)a.copy(f[v]).applyMatrix4(_,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function ig(i){let e=new WeakMap;function t(a,o){return o===ec?a.mapping=Mr:o===tc&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ec||o===tc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new cc(c.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Er=class extends Ao{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gr=4,fu=[.125,.215,.35,.446,.526,.582],Os=20,Hl=new Er,pu=new ot,Gl=null,Vl=0,Wl=0,Us=(1+Math.sqrt(5))/2,hr=1/Us,mu=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Us,hr),new W(0,Us,-hr),new W(hr,0,Us),new W(-hr,0,Us),new W(Us,hr,0),new W(-Us,hr,0)],bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Vl,Wl),e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Ri,format:ci,colorSpace:Qi,depthBuffer:!1},s=gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,e,t)}return s}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,s){let o=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(pu),u.toneMapping=Ni,u.autoClear=!1;let d=new Gt({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),x=new Fe(new ti,d),y=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,y=!0):(d.color.copy(pu),y=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):_===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));let v=this._cubeSize;to(s,_*v,m>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Mr||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;to(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mu[(s-1)%mu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Fe(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Os-1),y=r/x,g=isFinite(r)?1+Math.floor(u*y):Os;g>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Os}`);let m=[],_=0;for(let I=0;I<Os;++I){let U=I/y,S=Math.exp(-U*U/2);m.push(S),I===0?_+=S:I<g&&(_+=2*S)}for(let I=0;I<m.length;I++)m[I]=m[I]/_;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let E=this._sizeLods[s],z=3*E*(s>v-gr?s-v+gr:0),P=4*(this._cubeSize-E);to(t,z,P,3*E,2*E),c.setRenderTarget(t),c.render(f,Hl)}};function sg(i){let e=[],t=[],n=[],s=i,r=i-gr+1+fu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-gr?c=fu[a-i+gr-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,x=6,y=3,g=2,m=1,_=new Float32Array(y*x*d),v=new Float32Array(g*x*d),E=new Float32Array(m*x*d);for(let P=0;P<d;P++){let I=P%3*2/3-1,U=P>2?0:-1,S=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];_.set(S,y*x*P),v.set(p,g*x*P);let A=[P,P,P,P,P,P];E.set(A,m*x*P)}let z=new Zt;z.setAttribute("position",new bn(_,y)),z.setAttribute("uv",new bn(v,g)),z.setAttribute("faceIndex",new bn(E,m)),e.push(z),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gu(i,e,t){let n=new Kn(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rg(i,e,t){let n=new Float32Array(Os),s=new W(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function xu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function yu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function ag(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===ec||c===tc,u=c===Mr||c===br;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new bs(i)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(h&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new bs(i));let p=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let y=p.morphAttributes[x];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let y=d[x];for(let g=0,m=y.length;g<m;g++)e.update(y[g],i.ARRAY_BUFFER)}}function h(f){let p=[],d=f.index,x=f.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let v=0,E=_.length;v<E;v+=3){let z=_[v+0],P=_[v+1],I=_[v+2];p.push(z,P,P,I,I,z)}}else if(x!==void 0){let _=x.array;y=x.version;for(let v=0,E=_.length/3-1;v<E;v+=3){let z=v+0,P=v+1,I=v+2;p.push(z,P,P,I,I,z)}}else return;let g=new(ad(p)?To:Eo)(p,1);g.version=y;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function cg(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,c;function h(d){o=d.type,c=d.bytesPerElement}function u(d,x){i.drawElements(r,x,o,d*c),t.update(x,r,1)}function f(d,x,y){if(y===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,x,o,d*c,y),t.update(x,r,y)}function p(d,x,y){if(y===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<y;m++)this.render(d[m]/c,x[m]);else{g.multiDrawElementsWEBGL(r,x,0,o,d,0,y);let m=0;for(let _=0;_<y;_++)m+=x[_];t.update(m,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function hg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,e){return i[0]-e[0]}function dg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new ln,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,f){let p=h.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=d!==void 0?d.length:0,y=r.get(u);if(y===void 0||y.count!==x){let N=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",N)};y!==void 0&&y.texture.dispose();let _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,z=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],I=u.morphAttributes.color||[],U=0;_===!0&&(U=1),v===!0&&(U=2),E===!0&&(U=3);let S=u.attributes.position.count*U,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let H=new Float32Array(S*A*4*x),G=new So(H,S,A,x);G.type=fs,G.needsUpdate=!0;let te=U*4;for(let M=0;M<x;M++){let b=z[M],Z=P[M],J=I[M],Q=S*A*4*M;for(let we=0;we<b.count;we++){let be=we*te;_===!0&&(a.fromBufferAttribute(b,we),H[Q+be+0]=a.x,H[Q+be+1]=a.y,H[Q+be+2]=a.z,H[Q+be+3]=0),v===!0&&(a.fromBufferAttribute(Z,we),H[Q+be+4]=a.x,H[Q+be+5]=a.y,H[Q+be+6]=a.z,H[Q+be+7]=0),E===!0&&(a.fromBufferAttribute(J,we),H[Q+be+8]=a.x,H[Q+be+9]=a.y,H[Q+be+10]=a.z,H[Q+be+11]=J.itemSize===4?a.w:1)}}y={count:x,texture:G,size:new Ce(S,A)},r.set(u,y),u.addEventListener("dispose",N)}let g=0;for(let _=0;_<p.length;_++)g+=p[_];let m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let d=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==d){x=[];for(let v=0;v<d;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<d;v++){let E=x[v];E[0]=v,E[1]=p[v]}x.sort(dg);for(let v=0;v<8;v++)v<d&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ug);let y=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let E=o[v],z=E[0],P=E[1];z!==Number.MAX_SAFE_INTEGER&&P?(y&&u.getAttribute("morphTarget"+v)!==y[z]&&u.setAttribute("morphTarget"+v,y[z]),g&&u.getAttribute("morphNormal"+v)!==g[z]&&u.setAttribute("morphNormal"+v,g[z]),s[v]=P,m+=P):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let _=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function pg(i,e,t,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var Co=class extends hi{constructor(e,t,n,s,r,a,o,c,h,u){if(u=u!==void 0?u:Bs,u!==Bs&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bs&&(n=ds),n===void 0&&u===wr&&(n=Fs),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hd=new hi,ud=new Co(1,1);ud.compareFunction=rd;var dd=new So,fd=new oc,pd=new Ro,vu=[],_u=[],Mu=new Float32Array(16),bu=new Float32Array(9),wu=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function In(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2fv(this.addr,e),In(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;i.uniform3fv(this.addr,e),In(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4fv(this.addr,e),In(t,e)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),In(t,n)}}function _g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,n))return;bu.set(n),i.uniformMatrix3fv(this.addr,!1,bu),In(t,n)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,n))return;Mu.set(n),i.uniformMatrix4fv(this.addr,!1,Mu),In(t,n)}}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2iv(this.addr,e),In(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3iv(this.addr,e),In(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4iv(this.addr,e),In(t,e)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2uiv(this.addr,e),In(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3uiv(this.addr,e),In(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4uiv(this.addr,e),In(t,e)}}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ud:hd;t.setTexture2D(e||r,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pd,s)}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dd,s)}function zg(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return yg;case 35674:return vg;case 35675:return _g;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ug(i,e){i.uniform1fv(this.addr,e)}function kg(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Og(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ng(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Fg(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bg(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hg(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Vg(i,e){i.uniform2iv(this.addr,e)}function Wg(i,e){i.uniform3iv(this.addr,e)}function Xg(i,e){i.uniform4iv(this.addr,e)}function qg(i,e){i.uniform1uiv(this.addr,e)}function Yg(i,e){i.uniform2uiv(this.addr,e)}function Zg(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function Kg(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||hd,r[a])}function $g(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fd,r[a])}function jg(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pd,r[a])}function Qg(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dd,r[a])}function ex(i){switch(i){case 5126:return Ug;case 35664:return kg;case 35665:return Og;case 35666:return Ng;case 35674:return Fg;case 35675:return Bg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Qg}}var hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}},uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function Su(i,e){i.seq.push(e),i.map[e.id]=e}function tx(i,e,t){let n=i.name,s=n.length;for(Xl.lastIndex=0;;){let r=Xl.exec(n),a=Xl.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Su(t,h===void 0?new hc(o,i,e):new uc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new dc(o),Su(t,f)),t=f}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Eu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var nx=37297,ix=0;function sx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function rx(i){let e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(i),n;switch(e===t?n="":e===yo&&t===xo?n="LinearDisplayP3ToLinearSRGB":e===xo&&t===yo&&(n="LinearSRGBToLinearDisplayP3"),i){case Qi:case Ko:return[n,"LinearTransferOETF"];case tn:case $c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sx(i.getShaderSource(e),a)}else return s}function ax(i,e){let t=rx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ox(i,e){let t;switch(e){case qc:t="Linear";break;case Yc:t="Reinhard";break;case Zc:t="OptimizedCineon";break;case ba:t="ACESFilmic";break;case Jc:t="AgX";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xr).join(`
`)}function hx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ux(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xr(i){return i!==""}function Au(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(dx,px)}var fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function px(i,e){let t=wt[e];if(t===void 0){let n=fx.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(mx,gx)}function gx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ma?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mr:case br:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===br&&(e="ENVMAP_MODE_REFRACTION"),e}function _x(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=xx(t),h=yx(t),u=vx(t),f=_x(t),p=Mx(t),d=t.isWebGL2?"":lx(t),x=cx(t),y=hx(r),g=s.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xr).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xr).join(`
`),_.length>0&&(_+=`
`)):(m=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),_=[d,Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?wt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=fc(a),a=Au(a,t),a=Ru(a,t),o=fc(o),o=Au(o,t),o=Ru(o,t),a=Cu(a),o=Cu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let E=v+m+a,z=v+_+o,P=Eu(s,s.VERTEX_SHADER,E),I=Eu(s,s.FRAGMENT_SHADER,z);s.attachShader(g,P),s.attachShader(g,I),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function U(G){if(i.debug.checkShaderErrors){let te=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(P).trim(),M=s.getShaderInfoLog(I).trim(),b=!0,Z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(b=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,I);else{let J=Tu(s,P,"vertex"),Q=Tu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+J+`
`+Q)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(N===""||M==="")&&(Z=!1);Z&&(G.diagnostics={runnable:b,programLog:te,vertexShader:{log:N,prefix:m},fragmentShader:{log:M,prefix:_}})}s.deleteShader(P),s.deleteShader(I),S=new _r(s,g),A=ux(s,g)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(g,nx)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=I,this}var wx=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}};function Sx(i,e,t,n,s,r,a){let o=new ha,c=new pc,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function g(S,A,H,G,te){let N=G.fog,M=te.geometry,b=S.isMeshStandardMaterial?G.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||b),J=Z&&Z.mapping===Zo?Z.image.height:null,Q=x[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let we=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,be=we!==void 0?we.length:0,ke=0;M.morphAttributes.position!==void 0&&(ke=1),M.morphAttributes.normal!==void 0&&(ke=2),M.morphAttributes.color!==void 0&&(ke=3);let ee,re,ze,Ie;if(Q){let Nt=ki[Q];ee=Nt.vertexShader,re=Nt.fragmentShader}else ee=S.vertexShader,re=S.fragmentShader,c.update(S),ze=c.getVertexShaderID(S),Ie=c.getFragmentShaderID(S);let Ze=i.getRenderTarget(),dt=te.isInstancedMesh===!0,Be=te.isBatchedMesh===!0,qe=!!S.map,lt=!!S.matcap,q=!!Z,Le=!!S.aoMap,ae=!!S.lightMap,Te=!!S.bumpMap,Me=!!S.normalMap,Re=!!S.displacementMap,Oe=!!S.emissiveMap,D=!!S.metalnessMap,C=!!S.roughnessMap,ne=S.anisotropy>0,ve=S.clearcoat>0,_e=S.iridescence>0,Ee=S.sheen>0,et=S.transmission>0,Ge=ne&&!!S.anisotropyMap,Ke=ve&&!!S.clearcoatMap,rt=ve&&!!S.clearcoatNormalMap,mt=ve&&!!S.clearcoatRoughnessMap,fe=_e&&!!S.iridescenceMap,bt=_e&&!!S.iridescenceThicknessMap,ht=Ee&&!!S.sheenColorMap,ut=Ee&&!!S.sheenRoughnessMap,it=!!S.specularMap,$e=!!S.specularColorMap,Qe=!!S.specularIntensityMap,ft=et&&!!S.transmissionMap,Lt=et&&!!S.thicknessMap,gt=!!S.gradientMap,Pe=!!S.alphaMap,$=S.alphaTest>0,We=!!S.alphaHash,Xe=!!S.extensions,ct=!!M.attributes.uv1,tt=!!M.attributes.uv2,Dt=!!M.attributes.uv3,Vt=Ni;return S.toneMapped&&(Ze===null||Ze.isXRRenderTarget===!0)&&(Vt=i.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:re,defines:S.defines,customVertexShaderID:ze,customFragmentShaderID:Ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Be,instancing:dt,instancingColor:dt&&te.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ze===null?i.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:Qi,map:qe,matcap:lt,envMap:q,envMapMode:q&&Z.mapping,envMapCubeUVHeight:J,aoMap:Le,lightMap:ae,bumpMap:Te,normalMap:Me,displacementMap:p&&Re,emissiveMap:Oe,normalMapObjectSpace:Me&&S.normalMapType===Vf,normalMapTangentSpace:Me&&S.normalMapType===Jo,metalnessMap:D,roughnessMap:C,anisotropy:ne,anisotropyMap:Ge,clearcoat:ve,clearcoatMap:Ke,clearcoatNormalMap:rt,clearcoatRoughnessMap:mt,iridescence:_e,iridescenceMap:fe,iridescenceThicknessMap:bt,sheen:Ee,sheenColorMap:ht,sheenRoughnessMap:ut,specularMap:it,specularColorMap:$e,specularIntensityMap:Qe,transmission:et,transmissionMap:ft,thicknessMap:Lt,gradientMap:gt,opaque:S.transparent===!1&&S.blending===ps,alphaMap:Pe,alphaTest:$,alphaHash:We,combine:S.combine,mapUv:qe&&y(S.map.channel),aoMapUv:Le&&y(S.aoMap.channel),lightMapUv:ae&&y(S.lightMap.channel),bumpMapUv:Te&&y(S.bumpMap.channel),normalMapUv:Me&&y(S.normalMap.channel),displacementMapUv:Re&&y(S.displacementMap.channel),emissiveMapUv:Oe&&y(S.emissiveMap.channel),metalnessMapUv:D&&y(S.metalnessMap.channel),roughnessMapUv:C&&y(S.roughnessMap.channel),anisotropyMapUv:Ge&&y(S.anisotropyMap.channel),clearcoatMapUv:Ke&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ut&&y(S.sheenRoughnessMap.channel),specularMapUv:it&&y(S.specularMap.channel),specularColorMapUv:$e&&y(S.specularColorMap.channel),specularIntensityMapUv:Qe&&y(S.specularIntensityMap.channel),transmissionMapUv:ft&&y(S.transmissionMap.channel),thicknessMapUv:Lt&&y(S.thicknessMap.channel),alphaMapUv:Pe&&y(S.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(Me||ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:tt,vertexUv3s:Dt,pointsUvs:te.isPoints===!0&&!!M.attributes.uv&&(qe||Pe),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Xe&&S.extensions.derivatives===!0,extensionFragDepth:Xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:Xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Xe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Xe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let H in S.defines)A.push(H),A.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(_(A,S),v(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){let A=x[S.type],H;if(A){let G=ki[A];H=Es.clone(G.uniforms)}else H=S.uniforms;return H}function z(S,A){let H;for(let G=0,te=h.length;G<te;G++){let N=h[G];if(N.cacheKey===A){H=N,++H.usedTimes;break}}return H===void 0&&(H=new bx(i,A,S,r),h.push(H)),H}function P(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function I(S){c.remove(S)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:z,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:U}}function Ex(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,d,x,y,g){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:d,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},i[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=d,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=y,m.group=g),e++,m}function o(f,p,d,x,y,g){let m=a(f,p,d,x,y,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(f,p,d,x,y,g){let m=a(f,p,d,x,y,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function h(f,p){t.length>1&&t.sort(f||Tx),n.length>1&&n.sort(p||Iu),s.length>1&&s.sort(p||Iu)}function u(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Ax(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Lu,i.set(n,[a])):s>=r.length?(a=new Lu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ot};break;case"SpotLight":t={position:new W,direction:new W,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Px=0;function Ix(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lx(i,e){let t=new Rx,n=Cx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new W);let r=new W,a=new Ht,o=new Ht;function c(u,f){let p=0,d=0,x=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let y=0,g=0,m=0,_=0,v=0,E=0,z=0,P=0,I=0,U=0,S=0;u.sort(Ix);let A=f===!0?Math.PI:1;for(let G=0,te=u.length;G<te;G++){let N=u[G],M=N.color,b=N.intensity,Z=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=M.r*b*A,d+=M.g*b*A,x+=M.b*b*A;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(N.sh.coefficients[Q],b);S++}else if(N.isDirectionalLight){let Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){let we=N.shadow,be=n.get(N);be.shadowBias=we.bias,be.shadowNormalBias=we.normalBias,be.shadowRadius=we.radius,be.shadowMapSize=we.mapSize,s.directionalShadow[y]=be,s.directionalShadowMap[y]=J,s.directionalShadowMatrix[y]=N.shadow.matrix,E++}s.directional[y]=Q,y++}else if(N.isSpotLight){let Q=t.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(M).multiplyScalar(b*A),Q.distance=Z,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,s.spot[m]=Q;let we=N.shadow;if(N.map&&(s.spotLightMap[I]=N.map,I++,we.updateMatrices(N),N.castShadow&&U++),s.spotLightMatrix[m]=we.matrix,N.castShadow){let be=n.get(N);be.shadowBias=we.bias,be.shadowNormalBias=we.normalBias,be.shadowRadius=we.radius,be.shadowMapSize=we.mapSize,s.spotShadow[m]=be,s.spotShadowMap[m]=J,P++}m++}else if(N.isRectAreaLight){let Q=t.get(N);Q.color.copy(M).multiplyScalar(b),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=Q,_++}else if(N.isPointLight){let Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity*A),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){let we=N.shadow,be=n.get(N);be.shadowBias=we.bias,be.shadowNormalBias=we.normalBias,be.shadowRadius=we.radius,be.shadowMapSize=we.mapSize,be.shadowCameraNear=we.camera.near,be.shadowCameraFar=we.camera.far,s.pointShadow[g]=be,s.pointShadowMap[g]=J,s.pointShadowMatrix[g]=N.shadow.matrix,z++}s.point[g]=Q,g++}else if(N.isHemisphereLight){let Q=t.get(N);Q.skyColor.copy(N.color).multiplyScalar(b*A),Q.groundColor.copy(N.groundColor).multiplyScalar(b*A),s.hemi[v]=Q,v++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=d,s.ambient[2]=x;let H=s.hash;(H.directionalLength!==y||H.pointLength!==g||H.spotLength!==m||H.rectAreaLength!==_||H.hemiLength!==v||H.numDirectionalShadows!==E||H.numPointShadows!==z||H.numSpotShadows!==P||H.numSpotMaps!==I||H.numLightProbes!==S)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=_,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=P+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=S,H.directionalLength=y,H.pointLength=g,H.spotLength=m,H.rectAreaLength=_,H.hemiLength=v,H.numDirectionalShadows=E,H.numPointShadows=z,H.numSpotShadows=P,H.numSpotMaps=I,H.numLightProbes=S,s.version=Px++)}function h(u,f){let p=0,d=0,x=0,y=0,g=0,m=f.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){let E=u[_];if(E.isDirectionalLight){let z=s.directional[p];z.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(m),p++}else if(E.isSpotLight){let z=s.spot[x];z.position.setFromMatrixPosition(E.matrixWorld),z.position.applyMatrix4(m),z.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(m),x++}else if(E.isRectAreaLight){let z=s.rectArea[y];z.position.setFromMatrixPosition(E.matrixWorld),z.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),z.halfWidth.applyMatrix4(o),z.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let z=s.point[d];z.position.setFromMatrixPosition(E.matrixWorld),z.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let z=s.hemi[g];z.direction.setFromMatrixPosition(E.matrixWorld),z.direction.transformDirection(m),g++}}}return{setup:c,setupView:h,state:s}}function Du(i,e){let t=new Lx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Dx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Du(i,e),t.set(r,[c])):a>=o.length?(c=new Du(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var gc=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xc=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function kx(i,e,t){let n=new ua,s=new Ce,r=new Ce,a=new ln,o=new gc({depthPacking:Gf}),c=new xc,h={},u=t.maxTextureSize,f={[xs]:Mn,[Mn]:xs,[sn]:sn},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:zx,fragmentShader:Ux}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let x=new Zt;x.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Fe(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let m=this.type;this.render=function(P,I,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Oi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let te=m!==Zi&&this.type===Zi,N=m===Zi&&this.type!==Zi;for(let M=0,b=P.length;M<b;M++){let Z=P[M],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Q=J.getFrameExtents();if(s.multiply(Q),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,J.mapSize.y=r.y)),J.map===null||te===!0||N===!0){let be=this.type!==Zi?{minFilter:Rn,magFilter:Rn}:{};J.map!==null&&J.map.dispose(),J.map=new Kn(s.x,s.y,be),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let we=J.getViewportCount();for(let be=0;be<we;be++){let ke=J.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),G.viewport(a),J.updateMatrices(Z,be),n=J.getFrustum(),E(I,U,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Zi&&_(J,U),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,H)};function _(P,I){let U=e.update(y);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Kn(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,U,p,y,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,U,d,y,null)}function v(P,I,U,S){let A=null,H=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)A=H;else if(A=U.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let G=A.uuid,te=I.uuid,N=h[G];N===void 0&&(N={},h[G]=N);let M=N[te];M===void 0&&(M=A.clone(),N[te]=M,I.addEventListener("dispose",z)),A=M}if(A.visible=I.visible,A.wireframe=I.wireframe,S===Zi?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:f[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,U.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let G=i.properties.get(A);G.light=U}return A}function E(P,I,U,S,A){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Zi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let te=e.update(P),N=P.material;if(Array.isArray(N)){let M=te.groups;for(let b=0,Z=M.length;b<Z;b++){let J=M[b],Q=N[J.materialIndex];if(Q&&Q.visible){let we=v(P,Q,S,A);P.onBeforeShadow(i,P,I,U,te,we,J),i.renderBufferDirect(U,null,te,we,P,J),P.onAfterShadow(i,P,I,U,te,we,J)}}}else if(N.visible){let M=v(P,N,S,A);P.onBeforeShadow(i,P,I,U,te,M,null),i.renderBufferDirect(U,null,te,M,P,null),P.onAfterShadow(i,P,I,U,te,M,null)}}let G=P.children;for(let te=0,N=G.length;te<N;te++)E(G[te],I,U,S,A)}function z(P){P.target.removeEventListener("dispose",z);for(let U in h){let S=h[U],A=P.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function Ox(i,e,t){let n=t.isWebGL2;function s(){let $=!1,We=new ln,Xe=null,ct=new ln(0,0,0,0);return{setMask:function(tt){Xe!==tt&&!$&&(i.colorMask(tt,tt,tt,tt),Xe=tt)},setLocked:function(tt){$=tt},setClear:function(tt,Dt,Vt,Yt,Nt){Nt===!0&&(tt*=Yt,Dt*=Yt,Vt*=Yt),We.set(tt,Dt,Vt,Yt),ct.equals(We)===!1&&(i.clearColor(tt,Dt,Vt,Yt),ct.copy(We))},reset:function(){$=!1,Xe=null,ct.set(-1,0,0,0)}}}function r(){let $=!1,We=null,Xe=null,ct=null;return{setTest:function(tt){tt?Be(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(tt){We!==tt&&!$&&(i.depthMask(tt),We=tt)},setFunc:function(tt){if(Xe!==tt){switch(tt){case bf:i.depthFunc(i.NEVER);break;case wf:i.depthFunc(i.ALWAYS);break;case Sf:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case Ef:i.depthFunc(i.EQUAL);break;case Tf:i.depthFunc(i.GEQUAL);break;case Af:i.depthFunc(i.GREATER);break;case Rf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Xe=tt}},setLocked:function(tt){$=tt},setClear:function(tt){ct!==tt&&(i.clearDepth(tt),ct=tt)},reset:function(){$=!1,We=null,Xe=null,ct=null}}}function a(){let $=!1,We=null,Xe=null,ct=null,tt=null,Dt=null,Vt=null,Yt=null,Nt=null;return{setTest:function(St){$||(St?Be(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(St){We!==St&&!$&&(i.stencilMask(St),We=St)},setFunc:function(St,Ot,zt){(Xe!==St||ct!==Ot||tt!==zt)&&(i.stencilFunc(St,Ot,zt),Xe=St,ct=Ot,tt=zt)},setOp:function(St,Ot,zt){(Dt!==St||Vt!==Ot||Yt!==zt)&&(i.stencilOp(St,Ot,zt),Dt=St,Vt=Ot,Yt=zt)},setLocked:function(St){$=St},setClear:function(St){Nt!==St&&(i.clearStencil(St),Nt=St)},reset:function(){$=!1,We=null,Xe=null,ct=null,tt=null,Dt=null,Vt=null,Yt=null,Nt=null}}}let o=new s,c=new r,h=new a,u=new WeakMap,f=new WeakMap,p={},d={},x=new WeakMap,y=[],g=null,m=!1,_=null,v=null,E=null,z=null,P=null,I=null,U=null,S=new ot(0,0,0),A=0,H=!1,G=null,te=null,N=null,M=null,b=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Q=0,we=i.getParameter(i.VERSION);we.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(we)[1]),J=Q>=1):we.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(we)[1]),J=Q>=2);let be=null,ke={},ee=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ze=new ln().fromArray(ee),Ie=new ln().fromArray(re);function Ze($,We,Xe,ct){let tt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture($,Dt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<Xe;Vt++)n&&($===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY)?i.texImage3D(We,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(We+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return Dt}let dt={};dt[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(dt[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Be(i.DEPTH_TEST),c.setFunc(fo),Oe(!1),D(ph),Be(i.CULL_FACE),Me(Oi);function Be($){p[$]!==!0&&(i.enable($),p[$]=!0)}function qe($){p[$]!==!1&&(i.disable($),p[$]=!1)}function lt($,We){return d[$]!==We?(i.bindFramebuffer($,We),d[$]=We,n&&($===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=We),$===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=We)),!0):!1}function q($,We){let Xe=y,ct=!1;if($)if(Xe=x.get(We),Xe===void 0&&(Xe=[],x.set(We,Xe)),$.isWebGLMultipleRenderTargets){let tt=$.texture;if(Xe.length!==tt.length||Xe[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Vt=tt.length;Dt<Vt;Dt++)Xe[Dt]=i.COLOR_ATTACHMENT0+Dt;Xe.length=tt.length,ct=!0}}else Xe[0]!==i.COLOR_ATTACHMENT0&&(Xe[0]=i.COLOR_ATTACHMENT0,ct=!0);else Xe[0]!==i.BACK&&(Xe[0]=i.BACK,ct=!0);ct&&(t.isWebGL2?i.drawBuffers(Xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Xe))}function Le($){return g!==$?(i.useProgram($),g=$,!0):!1}let ae={[ks]:i.FUNC_ADD,[of]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};if(n)ae[xh]=i.MIN,ae[yh]=i.MAX;else{let $=e.get("EXT_blend_minmax");$!==null&&(ae[xh]=$.MIN_EXT,ae[yh]=$.MAX_EXT)}let Te={[cf]:i.ZERO,[hf]:i.ONE,[uf]:i.SRC_COLOR,[jl]:i.SRC_ALPHA,[xf]:i.SRC_ALPHA_SATURATE,[mf]:i.DST_COLOR,[ff]:i.DST_ALPHA,[df]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[gf]:i.ONE_MINUS_DST_COLOR,[pf]:i.ONE_MINUS_DST_ALPHA,[yf]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[Mf]:i.ONE_MINUS_CONSTANT_ALPHA};function Me($,We,Xe,ct,tt,Dt,Vt,Yt,Nt,St){if($===Oi){m===!0&&(qe(i.BLEND),m=!1);return}if(m===!1&&(Be(i.BLEND),m=!0),$!==af){if($!==_||St!==H){if((v!==ks||P!==ks)&&(i.blendEquation(i.FUNC_ADD),v=ks,P=ks),St)switch($){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}E=null,z=null,I=null,U=null,S.set(0,0,0),A=0,_=$,H=St}return}tt=tt||We,Dt=Dt||Xe,Vt=Vt||ct,(We!==v||tt!==P)&&(i.blendEquationSeparate(ae[We],ae[tt]),v=We,P=tt),(Xe!==E||ct!==z||Dt!==I||Vt!==U)&&(i.blendFuncSeparate(Te[Xe],Te[ct],Te[Dt],Te[Vt]),E=Xe,z=ct,I=Dt,U=Vt),(Yt.equals(S)===!1||Nt!==A)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Nt),S.copy(Yt),A=Nt),_=$,H=!1}function Re($,We){$.side===sn?qe(i.CULL_FACE):Be(i.CULL_FACE);let Xe=$.side===Mn;We&&(Xe=!Xe),Oe(Xe),$.blending===ps&&$.transparent===!1?Me(Oi):Me($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);let ct=$.stencilWrite;h.setTest(ct),ct&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ne($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe($){G!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),G=$)}function D($){$!==sf?(Be(i.CULL_FACE),$!==te&&($===ph?i.cullFace(i.BACK):$===rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),te=$}function C($){$!==N&&(J&&i.lineWidth($),N=$)}function ne($,We,Xe){$?(Be(i.POLYGON_OFFSET_FILL),(M!==We||b!==Xe)&&(i.polygonOffset(We,Xe),M=We,b=Xe)):qe(i.POLYGON_OFFSET_FILL)}function ve($){$?Be(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function _e($){$===void 0&&($=i.TEXTURE0+Z-1),be!==$&&(i.activeTexture($),be=$)}function Ee($,We,Xe){Xe===void 0&&(be===null?Xe=i.TEXTURE0+Z-1:Xe=be);let ct=ke[Xe];ct===void 0&&(ct={type:void 0,texture:void 0},ke[Xe]=ct),(ct.type!==$||ct.texture!==We)&&(be!==Xe&&(i.activeTexture(Xe),be=Xe),i.bindTexture($,We||dt[$]),ct.type=$,ct.texture=We)}function et(){let $=ke[be];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ht(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function it(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qe($){ze.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),ze.copy($))}function ft($){Ie.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),Ie.copy($))}function Lt($,We){let Xe=f.get(We);Xe===void 0&&(Xe=new WeakMap,f.set(We,Xe));let ct=Xe.get($);ct===void 0&&(ct=i.getUniformBlockIndex(We,$.name),Xe.set($,ct))}function gt($,We){let ct=f.get(We).get($);u.get(We)!==ct&&(i.uniformBlockBinding(We,ct,$.__bindingPointIndex),u.set(We,ct))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},be=null,ke={},d={},x=new WeakMap,y=[],g=null,m=!1,_=null,v=null,E=null,z=null,P=null,I=null,U=null,S=new ot(0,0,0),A=0,H=!1,G=null,te=null,N=null,M=null,b=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Be,disable:qe,bindFramebuffer:lt,drawBuffers:q,useProgram:Le,setBlending:Me,setMaterial:Re,setFlipSided:Oe,setCullFace:D,setLineWidth:C,setPolygonOffset:ne,setScissorTest:ve,activeTexture:_e,bindTexture:Ee,unbindTexture:et,compressedTexImage2D:Ge,compressedTexImage3D:Ke,texImage2D:it,texImage3D:$e,updateUBOMapping:Lt,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:rt,texSubImage3D:mt,compressedTexSubImage2D:fe,compressedTexSubImage3D:bt,scissor:Qe,viewport:ft,reset:Pe}}function Nx(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,C){return d?new OffscreenCanvas(D,C):Mo("canvas")}function y(D,C,ne,ve){let _e=1;if((D.width>ve||D.height>ve)&&(_e=ve/Math.max(D.width,D.height)),_e<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let Ee=C?rc:Math.floor,et=Ee(_e*D.width),Ge=Ee(_e*D.height);f===void 0&&(f=x(et,Ge));let Ke=ne?x(et,Ge):f;return Ke.width=et,Ke.height=Ge,Ke.getContext("2d").drawImage(D,0,0,et,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+et+"x"+Ge+")."),Ke}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function g(D){return Kh(D.width)&&Kh(D.height)}function m(D){return o?!1:D.wrapS!==Ai||D.wrapT!==Ai||D.minFilter!==Rn&&D.minFilter!==gi}function _(D,C){return D.generateMipmaps&&C&&D.minFilter!==Rn&&D.minFilter!==gi}function v(D){i.generateMipmap(D)}function E(D,C,ne,ve,_e=!1){if(o===!1)return C;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ee=C;if(C===i.RED&&(ne===i.FLOAT&&(Ee=i.R32F),ne===i.HALF_FLOAT&&(Ee=i.R16F),ne===i.UNSIGNED_BYTE&&(Ee=i.R8)),C===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Ee=i.R8UI),ne===i.UNSIGNED_SHORT&&(Ee=i.R16UI),ne===i.UNSIGNED_INT&&(Ee=i.R32UI),ne===i.BYTE&&(Ee=i.R8I),ne===i.SHORT&&(Ee=i.R16I),ne===i.INT&&(Ee=i.R32I)),C===i.RG&&(ne===i.FLOAT&&(Ee=i.RG32F),ne===i.HALF_FLOAT&&(Ee=i.RG16F),ne===i.UNSIGNED_BYTE&&(Ee=i.RG8)),C===i.RGBA){let et=_e?go:qt.getTransfer(ve);ne===i.FLOAT&&(Ee=i.RGBA32F),ne===i.HALF_FLOAT&&(Ee=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(Ee=et===Qt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function z(D,C,ne){return _(D,ne)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==gi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function P(D){return D===Rn||D===vh||D===ml?i.NEAREST:i.LINEAR}function I(D){let C=D.target;C.removeEventListener("dispose",I),S(C),C.isVideoTexture&&u.delete(C)}function U(D){let C=D.target;C.removeEventListener("dispose",U),H(C)}function S(D){let C=n.get(D);if(C.__webglInit===void 0)return;let ne=D.source,ve=p.get(ne);if(ve){let _e=ve[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(D),Object.keys(ve).length===0&&p.delete(ne)}n.remove(D)}function A(D){let C=n.get(D);i.deleteTexture(C.__webglTexture);let ne=D.source,ve=p.get(ne);delete ve[C.__cacheKey],a.memory.textures--}function H(D){let C=D.texture,ne=n.get(D),ve=n.get(C);if(ve.__webglTexture!==void 0&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(ne.__webglFramebuffer[_e]))for(let Ee=0;Ee<ne.__webglFramebuffer[_e].length;Ee++)i.deleteFramebuffer(ne.__webglFramebuffer[_e][Ee]);else i.deleteFramebuffer(ne.__webglFramebuffer[_e]);ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[_e])}else{if(Array.isArray(ne.__webglFramebuffer))for(let _e=0;_e<ne.__webglFramebuffer.length;_e++)i.deleteFramebuffer(ne.__webglFramebuffer[_e]);else i.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let _e=0;_e<ne.__webglColorRenderbuffer.length;_e++)ne.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer[_e]);ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let _e=0,Ee=C.length;_e<Ee;_e++){let et=n.get(C[_e]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(C[_e])}n.remove(C),n.remove(D)}let G=0;function te(){G=0}function N(){let D=G;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),G+=1,D}function M(D){let C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function b(D,C){let ne=n.get(D);if(D.isVideoTexture&&Re(D),D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){let ve=D.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(ne,D,C);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+C)}function Z(D,C){let ne=n.get(D);if(D.version>0&&ne.__version!==D.version){ze(ne,D,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+C)}function J(D,C){let ne=n.get(D);if(D.version>0&&ne.__version!==D.version){ze(ne,D,C);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+C)}function Q(D,C){let ne=n.get(D);if(D.version>0&&ne.__version!==D.version){Ie(ne,D,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+C)}let we={[oa]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[nc]:i.MIRRORED_REPEAT},be={[Rn]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[ml]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[Lf]:i.LINEAR_MIPMAP_NEAREST,[la]:i.LINEAR_MIPMAP_LINEAR},ke={[Wf]:i.NEVER,[Kf]:i.ALWAYS,[Xf]:i.LESS,[rd]:i.LEQUAL,[qf]:i.EQUAL,[Jf]:i.GEQUAL,[Yf]:i.GREATER,[Zf]:i.NOTEQUAL};function ee(D,C,ne){if(ne?(i.texParameteri(D,i.TEXTURE_WRAP_S,we[C.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,we[C.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,we[C.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,be[C.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,be[C.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==Ai||C.wrapT!==Ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,P(C.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,P(C.minFilter)),C.minFilter!==Rn&&C.minFilter!==gi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ke[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Rn||C.minFilter!==ml&&C.minFilter!==la||C.type===fs&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(i.texParameterf(D,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function re(D,C){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",I));let ve=C.source,_e=p.get(ve);_e===void 0&&(_e={},p.set(ve,_e));let Ee=M(C);if(Ee!==D.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),_e[Ee].usedTimes++;let et=_e[D.__cacheKey];et!==void 0&&(_e[D.__cacheKey].usedTimes--,et.usedTimes===0&&A(C)),D.__cacheKey=Ee,D.__webglTexture=_e[Ee].texture}return ne}function ze(D,C,ne){let ve=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ve=i.TEXTURE_3D);let _e=re(D,C),Ee=C.source;t.bindTexture(ve,D.__webglTexture,i.TEXTURE0+ne);let et=n.get(Ee);if(Ee.version!==et.__version||_e===!0){t.activeTexture(i.TEXTURE0+ne);let Ge=qt.getPrimaries(qt.workingColorSpace),Ke=C.colorSpace===xi?null:qt.getPrimaries(C.colorSpace),rt=C.colorSpace===xi||Ge===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let mt=m(C)&&g(C.image)===!1,fe=y(C.image,mt,!1,s.maxTextureSize);fe=Oe(C,fe);let bt=g(fe)||o,ht=r.convert(C.format,C.colorSpace),ut=r.convert(C.type),it=E(C.internalFormat,ht,ut,C.colorSpace,C.isVideoTexture);ee(ve,C,bt);let $e,Qe=C.mipmaps,ft=o&&C.isVideoTexture!==!0&&it!==id,Lt=et.__version===void 0||_e===!0,gt=z(C,fe,bt);if(C.isDepthTexture)it=i.DEPTH_COMPONENT,o?C.type===fs?it=i.DEPTH_COMPONENT32F:C.type===ds?it=i.DEPTH_COMPONENT24:C.type===Fs?it=i.DEPTH24_STENCIL8:it=i.DEPTH_COMPONENT16:C.type===fs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Bs&&it===i.DEPTH_COMPONENT&&C.type!==Kc&&C.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=ds,ut=r.convert(C.type)),C.format===wr&&it===i.DEPTH_COMPONENT&&(it=i.DEPTH_STENCIL,C.type!==Fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Fs,ut=r.convert(C.type))),Lt&&(ft?t.texStorage2D(i.TEXTURE_2D,1,it,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,it,fe.width,fe.height,0,ht,ut,null));else if(C.isDataTexture)if(Qe.length>0&&bt){ft&&Lt&&t.texStorage2D(i.TEXTURE_2D,gt,it,Qe[0].width,Qe[0].height);for(let Pe=0,$=Qe.length;Pe<$;Pe++)$e=Qe[Pe],ft?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,$e.width,$e.height,ht,ut,$e.data):t.texImage2D(i.TEXTURE_2D,Pe,it,$e.width,$e.height,0,ht,ut,$e.data);C.generateMipmaps=!1}else ft?(Lt&&t.texStorage2D(i.TEXTURE_2D,gt,it,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,ht,ut,fe.data)):t.texImage2D(i.TEXTURE_2D,0,it,fe.width,fe.height,0,ht,ut,fe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,it,Qe[0].width,Qe[0].height,fe.depth);for(let Pe=0,$=Qe.length;Pe<$;Pe++)$e=Qe[Pe],C.format!==ci?ht!==null?ft?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,$e.width,$e.height,fe.depth,ht,$e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,it,$e.width,$e.height,fe.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,$e.width,$e.height,fe.depth,ht,ut,$e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,it,$e.width,$e.height,fe.depth,0,ht,ut,$e.data)}else{ft&&Lt&&t.texStorage2D(i.TEXTURE_2D,gt,it,Qe[0].width,Qe[0].height);for(let Pe=0,$=Qe.length;Pe<$;Pe++)$e=Qe[Pe],C.format!==ci?ht!==null?ft?t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,$e.width,$e.height,ht,$e.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,it,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,$e.width,$e.height,ht,ut,$e.data):t.texImage2D(i.TEXTURE_2D,Pe,it,$e.width,$e.height,0,ht,ut,$e.data)}else if(C.isDataArrayTexture)ft?(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,it,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ht,ut,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,fe.width,fe.height,fe.depth,0,ht,ut,fe.data);else if(C.isData3DTexture)ft?(Lt&&t.texStorage3D(i.TEXTURE_3D,gt,it,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ht,ut,fe.data)):t.texImage3D(i.TEXTURE_3D,0,it,fe.width,fe.height,fe.depth,0,ht,ut,fe.data);else if(C.isFramebufferTexture){if(Lt)if(ft)t.texStorage2D(i.TEXTURE_2D,gt,it,fe.width,fe.height);else{let Pe=fe.width,$=fe.height;for(let We=0;We<gt;We++)t.texImage2D(i.TEXTURE_2D,We,it,Pe,$,0,ht,ut,null),Pe>>=1,$>>=1}}else if(Qe.length>0&&bt){ft&&Lt&&t.texStorage2D(i.TEXTURE_2D,gt,it,Qe[0].width,Qe[0].height);for(let Pe=0,$=Qe.length;Pe<$;Pe++)$e=Qe[Pe],ft?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,ht,ut,$e):t.texImage2D(i.TEXTURE_2D,Pe,it,ht,ut,$e);C.generateMipmaps=!1}else ft?(Lt&&t.texStorage2D(i.TEXTURE_2D,gt,it,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,ut,fe)):t.texImage2D(i.TEXTURE_2D,0,it,ht,ut,fe);_(C,bt)&&v(ve),et.__version=Ee.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Ie(D,C,ne){if(C.image.length!==6)return;let ve=re(D,C),_e=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ne);let Ee=n.get(_e);if(_e.version!==Ee.__version||ve===!0){t.activeTexture(i.TEXTURE0+ne);let et=qt.getPrimaries(qt.workingColorSpace),Ge=C.colorSpace===xi?null:qt.getPrimaries(C.colorSpace),Ke=C.colorSpace===xi||et===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let rt=C.isCompressedTexture||C.image[0].isCompressedTexture,mt=C.image[0]&&C.image[0].isDataTexture,fe=[];for(let Pe=0;Pe<6;Pe++)!rt&&!mt?fe[Pe]=y(C.image[Pe],!1,!0,s.maxCubemapSize):fe[Pe]=mt?C.image[Pe].image:C.image[Pe],fe[Pe]=Oe(C,fe[Pe]);let bt=fe[0],ht=g(bt)||o,ut=r.convert(C.format,C.colorSpace),it=r.convert(C.type),$e=E(C.internalFormat,ut,it,C.colorSpace),Qe=o&&C.isVideoTexture!==!0,ft=Ee.__version===void 0||ve===!0,Lt=z(C,bt,ht);ee(i.TEXTURE_CUBE_MAP,C,ht);let gt;if(rt){Qe&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,$e,bt.width,bt.height);for(let Pe=0;Pe<6;Pe++){gt=fe[Pe].mipmaps;for(let $=0;$<gt.length;$++){let We=gt[$];C.format!==ci?ut!==null?Qe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$,0,0,We.width,We.height,ut,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$,$e,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$,0,0,We.width,We.height,ut,it,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$,$e,We.width,We.height,0,ut,it,We.data)}}}else{gt=C.mipmaps,Qe&&ft&&(gt.length>0&&Lt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,$e,fe[0].width,fe[0].height));for(let Pe=0;Pe<6;Pe++)if(mt){Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,fe[Pe].width,fe[Pe].height,ut,it,fe[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,$e,fe[Pe].width,fe[Pe].height,0,ut,it,fe[Pe].data);for(let $=0;$<gt.length;$++){let Xe=gt[$].image[Pe].image;Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$+1,0,0,Xe.width,Xe.height,ut,it,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$+1,$e,Xe.width,Xe.height,0,ut,it,Xe.data)}}else{Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ut,it,fe[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,$e,ut,it,fe[Pe]);for(let $=0;$<gt.length;$++){let We=gt[$];Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$+1,0,0,ut,it,We.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,$+1,$e,ut,it,We.image[Pe])}}}_(C,ht)&&v(i.TEXTURE_CUBE_MAP),Ee.__version=_e.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Ze(D,C,ne,ve,_e,Ee){let et=r.convert(ne.format,ne.colorSpace),Ge=r.convert(ne.type),Ke=E(ne.internalFormat,et,Ge,ne.colorSpace);if(!n.get(C).__hasExternalTextures){let mt=Math.max(1,C.width>>Ee),fe=Math.max(1,C.height>>Ee);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ee,Ke,mt,fe,C.depth,0,et,Ge,null):t.texImage2D(_e,Ee,Ke,mt,fe,0,et,Ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Me(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,_e,n.get(ne).__webglTexture,0,Te(C)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,_e,n.get(ne).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(D,C,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let ve=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ne||Me(C)){let _e=C.depthTexture;_e&&_e.isDepthTexture&&(_e.type===fs?ve=i.DEPTH_COMPONENT32F:_e.type===ds&&(ve=i.DEPTH_COMPONENT24));let Ee=Te(C);Me(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ve,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ve,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,ve,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){let ve=Te(C);ne&&Me(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,C.width,C.height):Me(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{let ve=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let _e=0;_e<ve.length;_e++){let Ee=ve[_e],et=r.convert(Ee.format,Ee.colorSpace),Ge=r.convert(Ee.type),Ke=E(Ee.internalFormat,et,Ge,Ee.colorSpace),rt=Te(C);ne&&Me(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ke,C.width,C.height):Me(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Ke,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ke,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),b(C.depthTexture,0);let ve=n.get(C.depthTexture).__webglTexture,_e=Te(C);if(C.depthTexture.format===Bs)Me(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(C.depthTexture.format===wr)Me(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function qe(D){let C=n.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Be(C.__webglFramebuffer,D)}else if(ne){C.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ve]),C.__webglDepthbuffer[ve]=i.createRenderbuffer(),dt(C.__webglDepthbuffer[ve],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),dt(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(D,C,ne){let ve=n.get(D);C!==void 0&&Ze(ve.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&qe(D)}function q(D){let C=D.texture,ne=n.get(D),ve=n.get(C);D.addEventListener("dispose",U),D.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=C.version,a.memory.textures++);let _e=D.isWebGLCubeRenderTarget===!0,Ee=D.isWebGLMultipleRenderTargets===!0,et=g(D)||o;if(_e){ne.__webglFramebuffer=[];for(let Ge=0;Ge<6;Ge++)if(o&&C.mipmaps&&C.mipmaps.length>0){ne.__webglFramebuffer[Ge]=[];for(let Ke=0;Ke<C.mipmaps.length;Ke++)ne.__webglFramebuffer[Ge][Ke]=i.createFramebuffer()}else ne.__webglFramebuffer[Ge]=i.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ge=0;Ge<C.mipmaps.length;Ge++)ne.__webglFramebuffer[Ge]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(Ee)if(s.drawBuffers){let Ge=D.texture;for(let Ke=0,rt=Ge.length;Ke<rt;Ke++){let mt=n.get(Ge[Ke]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&Me(D)===!1){let Ge=Ee?C:[C];ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ke=0;Ke<Ge.length;Ke++){let rt=Ge[Ke];ne.__webglColorRenderbuffer[Ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ke]);let mt=r.convert(rt.format,rt.colorSpace),fe=r.convert(rt.type),bt=E(rt.internalFormat,mt,fe,rt.colorSpace,D.isXRRenderTarget===!0),ht=Te(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,bt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(ne.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),ee(i.TEXTURE_CUBE_MAP,C,et);for(let Ge=0;Ge<6;Ge++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let Ke=0;Ke<C.mipmaps.length;Ke++)Ze(ne.__webglFramebuffer[Ge][Ke],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ke);else Ze(ne.__webglFramebuffer[Ge],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0);_(C,et)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Ge=D.texture;for(let Ke=0,rt=Ge.length;Ke<rt;Ke++){let mt=Ge[Ke],fe=n.get(mt);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),ee(i.TEXTURE_2D,mt,et),Ze(ne.__webglFramebuffer,D,mt,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,0),_(mt,et)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ge=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?Ge=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ge,ve.__webglTexture),ee(Ge,C,et),o&&C.mipmaps&&C.mipmaps.length>0)for(let Ke=0;Ke<C.mipmaps.length;Ke++)Ze(ne.__webglFramebuffer[Ke],D,C,i.COLOR_ATTACHMENT0,Ge,Ke);else Ze(ne.__webglFramebuffer,D,C,i.COLOR_ATTACHMENT0,Ge,0);_(C,et)&&v(Ge),t.unbindTexture()}D.depthBuffer&&qe(D)}function Le(D){let C=g(D)||o,ne=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ve=0,_e=ne.length;ve<_e;ve++){let Ee=ne[ve];if(_(Ee,C)){let et=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ge=n.get(Ee).__webglTexture;t.bindTexture(et,Ge),v(et),t.unbindTexture()}}}function ae(D){if(o&&D.samples>0&&Me(D)===!1){let C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ne=D.width,ve=D.height,_e=i.COLOR_BUFFER_BIT,Ee=[],et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(D),Ke=D.isWebGLMultipleRenderTargets===!0;if(Ke)for(let rt=0;rt<C.length;rt++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let rt=0;rt<C.length;rt++){Ee.push(i.COLOR_ATTACHMENT0+rt),D.depthBuffer&&Ee.push(et);let mt=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(mt===!1&&(D.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[rt]),mt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[et])),Ke){let fe=n.get(C[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,ne,ve,0,0,ne,ve,_e,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ke)for(let rt=0;rt<C.length;rt++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[rt]);let mt=n.get(C[rt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function Te(D){return Math.min(s.maxSamples,D.samples)}function Me(D){let C=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Re(D){let C=a.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function Oe(D,C){let ne=D.colorSpace,ve=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===sc||ne!==Qi&&ne!==xi&&(qt.getTransfer(ne)===Qt?o===!1?e.has("EXT_sRGB")===!0&&ve===ci?(D.format=sc,D.minFilter=gi,D.generateMipmaps=!1):C=bo.sRGBToLinear(C):(ve!==ci||_e!==ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),C}this.allocateTextureUnit=N,this.resetTextureUnits=te,this.setTexture2D=b,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=lt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=Me}function Fx(i,e,t){let n=t.isWebGL2;function s(r,a=xi){let o,c=qt.getTransfer(a);if(r===ms)return i.UNSIGNED_BYTE;if(r===ju)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Qu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Df)return i.BYTE;if(r===zf)return i.SHORT;if(r===Kc)return i.UNSIGNED_SHORT;if(r===$u)return i.INT;if(r===ds)return i.UNSIGNED_INT;if(r===fs)return i.FLOAT;if(r===Ri)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Uf)return i.ALPHA;if(r===ci)return i.RGBA;if(r===kf)return i.LUMINANCE;if(r===Of)return i.LUMINANCE_ALPHA;if(r===Bs)return i.DEPTH_COMPONENT;if(r===wr)return i.DEPTH_STENCIL;if(r===sc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Nf)return i.RED;if(r===ed)return i.RED_INTEGER;if(r===Ff)return i.RG;if(r===td)return i.RG_INTEGER;if(r===nd)return i.RGBA_INTEGER;if(r===gl||r===xl||r===yl||r===vl)if(c===Qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===gl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===gl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_h||r===Mh||r===bh||r===wh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===_h)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sh||r===Eh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Sh)return c===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Eh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Ih||r===Lh||r===Dh||r===zh||r===Uh||r===kh||r===Oh||r===Nh||r===Fh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Th)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_l||r===Bh||r===Hh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===_l)return c===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bf||r===Gh||r===Vh||r===Wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===_l)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Gh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var yc=class extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_t=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bx={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(h,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,x=.005;h.inputState.pinching&&p>d+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=d-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vc=class extends ys{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,p=null,d=null,x=null,y=t.getContextAttributes(),g=null,m=null,_=[],v=[],E=new Ce,z=null,P=new Cn;P.layers.enable(1),P.viewport=new ln;let I=new Cn;I.layers.enable(2),I.viewport=new ln;let U=[P,I],S=new yc;S.layers.enable(1),S.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=_[ee];return re===void 0&&(re=new sa,_[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=_[ee];return re===void 0&&(re=new sa,_[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=_[ee];return re===void 0&&(re=new sa,_[ee]=re),re.getHandSpace()};function G(ee){let re=v.indexOf(ee.inputSource);if(re===-1)return;let ze=_[re];ze!==void 0&&(ze.update(ee.inputSource,ee.frame,h||a),ze.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",N);for(let ee=0;ee<_.length;ee++){let re=v[ee];re!==null&&(v[ee]=null,_[ee].disconnect(re))}A=null,H=null,e.setRenderTarget(g),d=null,p=null,f=null,s=null,m=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",te),s.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let re={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Kn(d.framebufferWidth,d.framebufferHeight,{format:ci,type:ms,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,ze=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?wr:Bs,ze=y.stencil?Fs:ds);let Ze={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Ze),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Kn(p.textureWidth,p.textureHeight,{format:ci,type:ms,depthTexture:new Co(p.textureWidth,p.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let dt=e.properties.get(m);dt.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(ee){for(let re=0;re<ee.removed.length;re++){let ze=ee.removed[re],Ie=v.indexOf(ze);Ie>=0&&(v[Ie]=null,_[Ie].disconnect(ze))}for(let re=0;re<ee.added.length;re++){let ze=ee.added[re],Ie=v.indexOf(ze);if(Ie===-1){for(let dt=0;dt<_.length;dt++)if(dt>=v.length){v.push(ze),Ie=dt;break}else if(v[dt]===null){v[dt]=ze,Ie=dt;break}if(Ie===-1)break}let Ze=_[Ie];Ze&&Ze.connect(ze)}}let M=new W,b=new W;function Z(ee,re,ze){M.setFromMatrixPosition(re.matrixWorld),b.setFromMatrixPosition(ze.matrixWorld);let Ie=M.distanceTo(b),Ze=re.projectionMatrix.elements,dt=ze.projectionMatrix.elements,Be=Ze[14]/(Ze[10]-1),qe=Ze[14]/(Ze[10]+1),lt=(Ze[9]+1)/Ze[5],q=(Ze[9]-1)/Ze[5],Le=(Ze[8]-1)/Ze[0],ae=(dt[8]+1)/dt[0],Te=Be*Le,Me=Be*ae,Re=Ie/(-Le+ae),Oe=Re*-Le;re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Oe),ee.translateZ(Re),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();let D=Be+Re,C=qe+Re,ne=Te-Oe,ve=Me+(Ie-Oe),_e=lt*qe/C*D,Ee=q*qe/C*D;ee.projectionMatrix.makePerspective(ne,ve,_e,Ee,D,C),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function J(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;S.near=I.near=P.near=ee.near,S.far=I.far=P.far=ee.far,(A!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,H=S.far);let re=ee.parent,ze=S.cameras;J(S,re);for(let Ie=0;Ie<ze.length;Ie++)J(ze[Ie],re);ze.length===2?Z(S,P,I):S.projectionMatrix.copy(P.projectionMatrix),Q(ee,S,re)};function Q(ee,re,ze){ze===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(ze.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_o*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(ee){c=ee,p!==null&&(p.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)};let we=null;function be(ee,re){if(u=re.getViewerPose(h||a),x=re,u!==null){let ze=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Ie=!1;ze.length!==S.cameras.length&&(S.cameras.length=0,Ie=!0);for(let Ze=0;Ze<ze.length;Ze++){let dt=ze[Ze],Be=null;if(d!==null)Be=d.getViewport(dt);else{let lt=f.getViewSubImage(p,dt);Be=lt.viewport,Ze===0&&(e.setRenderTargetTextures(m,lt.colorTexture,p.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(m))}let qe=U[Ze];qe===void 0&&(qe=new Cn,qe.layers.enable(Ze),qe.viewport=new ln,U[Ze]=qe),qe.matrix.fromArray(dt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(dt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Be.x,Be.y,Be.width,Be.height),Ze===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ie===!0&&S.cameras.push(qe)}}for(let ze=0;ze<_.length;ze++){let Ie=v[ze],Ze=_[ze];Ie!==null&&Ze!==void 0&&Ze.update(Ie,re,h||a)}we&&we(ee,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}let ke=new cd;ke.setAnimationLoop(be),this.setAnimationLoop=function(ee){we=ee},this.dispose=function(){}}};function Hx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ld(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&d(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,v):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){let E=v.program;n.uniformBlockBinding(_,E)}function h(_,v){let E=s[_.id];E===void 0&&(x(_),E=u(_),s[_.id]=E,_.addEventListener("dispose",g));let z=v.program;n.updateUBOMapping(_,z);let P=e.render.frame;r[_.id]!==P&&(p(_),r[_.id]=P)}function u(_){let v=f();_.__bindingPointIndex=v;let E=i.createBuffer(),z=_.__size,P=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,z,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let v=s[_.id],E=_.uniforms,z=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,I=E.length;P<I;P++){let U=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,A=U.length;S<A;S++){let H=U[S];if(d(H,P,S,z)===!0){let G=H.__offset,te=Array.isArray(H.value)?H.value:[H.value],N=0;for(let M=0;M<te.length;M++){let b=te[M],Z=y(b);typeof b=="number"||typeof b=="boolean"?(H.__data[0]=b,i.bufferSubData(i.UNIFORM_BUFFER,G+N,H.__data)):b.isMatrix3?(H.__data[0]=b.elements[0],H.__data[1]=b.elements[1],H.__data[2]=b.elements[2],H.__data[3]=0,H.__data[4]=b.elements[3],H.__data[5]=b.elements[4],H.__data[6]=b.elements[5],H.__data[7]=0,H.__data[8]=b.elements[6],H.__data[9]=b.elements[7],H.__data[10]=b.elements[8],H.__data[11]=0):(b.toArray(H.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,E,z){let P=_.value,I=v+"_"+E;if(z[I]===void 0)return typeof P=="number"||typeof P=="boolean"?z[I]=P:z[I]=P.clone(),!0;{let U=z[I];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return z[I]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function x(_){let v=_.uniforms,E=0,z=16;for(let I=0,U=v.length;I<U;I++){let S=Array.isArray(v[I])?v[I]:[v[I]];for(let A=0,H=S.length;A<H;A++){let G=S[A],te=Array.isArray(G.value)?G.value:[G.value];for(let N=0,M=te.length;N<M;N++){let b=te[N],Z=y(b),J=E%z;J!==0&&z-J<Z.boundary&&(E+=z-J),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Z.storage}}}let P=E%z;return P>0&&(E+=z-P),_.__size=E,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:h,dispose:m}}var Gs=class{constructor(e={}){let{canvas:t=jf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let d=new Uint32Array(4),x=new Int32Array(4),y=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let v=this,E=!1,z=0,P=0,I=null,U=-1,S=null,A=new ln,H=new ln,G=null,te=new ot(0),N=0,M=t.width,b=t.height,Z=1,J=null,Q=null,we=new ln(0,0,M,b),be=new ln(0,0,M,b),ke=!1,ee=new ua,re=!1,ze=!1,Ie=null,Ze=new Ht,dt=new Ce,Be=new W,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return I===null?Z:1}let q=n;function Le(k,ie){for(let ue=0;ue<k.length;ue++){let me=k[ue],de=t.getContext(me,ie);if(de!==null)return de}return null}try{let k={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",We,!1),q===null){let ie=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ie.shift(),q=Le(ie,k),q===null)throw Le(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let ae,Te,Me,Re,Oe,D,C,ne,ve,_e,Ee,et,Ge,Ke,rt,mt,fe,bt,ht,ut,it,$e,Qe,ft;function Lt(){ae=new og(q),Te=new tg(q,ae,e),ae.init(Te),$e=new Fx(q,ae,Te),Me=new Ox(q,ae,Te),Re=new hg(q),Oe=new Ex,D=new Nx(q,ae,Me,Oe,Te,$e,Re),C=new ig(v),ne=new ag(v),ve=new y0(q,Te),Qe=new Qm(q,ae,ve,Te),_e=new lg(q,ve,Re,Qe),Ee=new pg(q,_e,ve,Re),ht=new fg(q,Te,D),mt=new ng(Oe),et=new Sx(v,C,ne,ae,Te,Qe,mt),Ge=new Hx(v,Oe),Ke=new Ax,rt=new Dx(ae,Te),bt=new jm(v,C,ne,Me,Ee,p,c),fe=new kx(v,Ee,Te),ft=new Gx(q,Re,Te,Me),ut=new eg(q,ae,Re,Te),it=new cg(q,ae,Re,Te),Re.programs=et.programs,v.capabilities=Te,v.extensions=ae,v.properties=Oe,v.renderLists=Ke,v.shadowMap=fe,v.state=Me,v.info=Re}Lt();let gt=new vc(v,q);this.xr=gt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let k=ae.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=ae.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(k){k!==void 0&&(Z=k,this.setSize(M,b,!1))},this.getSize=function(k){return k.set(M,b)},this.setSize=function(k,ie,ue=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=k,b=ie,t.width=Math.floor(k*Z),t.height=Math.floor(ie*Z),ue===!0&&(t.style.width=k+"px",t.style.height=ie+"px"),this.setViewport(0,0,k,ie)},this.getDrawingBufferSize=function(k){return k.set(M*Z,b*Z).floor()},this.setDrawingBufferSize=function(k,ie,ue){M=k,b=ie,Z=ue,t.width=Math.floor(k*ue),t.height=Math.floor(ie*ue),this.setViewport(0,0,k,ie)},this.getCurrentViewport=function(k){return k.copy(A)},this.getViewport=function(k){return k.copy(we)},this.setViewport=function(k,ie,ue,me){k.isVector4?we.set(k.x,k.y,k.z,k.w):we.set(k,ie,ue,me),Me.viewport(A.copy(we).multiplyScalar(Z).floor())},this.getScissor=function(k){return k.copy(be)},this.setScissor=function(k,ie,ue,me){k.isVector4?be.set(k.x,k.y,k.z,k.w):be.set(k,ie,ue,me),Me.scissor(H.copy(be).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ke},this.setScissorTest=function(k){Me.setScissorTest(ke=k)},this.setOpaqueSort=function(k){J=k},this.setTransparentSort=function(k){Q=k},this.getClearColor=function(k){return k.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(k=!0,ie=!0,ue=!0){let me=0;if(k){let de=!1;if(I!==null){let Ve=I.texture.format;de=Ve===nd||Ve===td||Ve===ed}if(de){let Ve=I.texture.type,R=Ve===ms||Ve===ds||Ve===Kc||Ve===Fs||Ve===ju||Ve===Qu,B=bt.getClearColor(),X=bt.getClearAlpha(),Se=B.r,Ae=B.g,L=B.b;R?(d[0]=Se,d[1]=Ae,d[2]=L,d[3]=X,q.clearBufferuiv(q.COLOR,0,d)):(x[0]=Se,x[1]=Ae,x[2]=L,x[3]=X,q.clearBufferiv(q.COLOR,0,x))}else me|=q.COLOR_BUFFER_BIT}ie&&(me|=q.DEPTH_BUFFER_BIT),ue&&(me|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Ke.dispose(),rt.dispose(),Oe.dispose(),C.dispose(),ne.dispose(),Ee.dispose(),Qe.dispose(),ft.dispose(),et.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Nt),gt.removeEventListener("sessionend",St),Ie&&(Ie.dispose(),Ie=null),Ot.stop()};function Pe(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let k=Re.autoReset,ie=fe.enabled,ue=fe.autoUpdate,me=fe.needsUpdate,de=fe.type;Lt(),Re.autoReset=k,fe.enabled=ie,fe.autoUpdate=ue,fe.needsUpdate=me,fe.type=de}function We(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Xe(k){let ie=k.target;ie.removeEventListener("dispose",Xe),ct(ie)}function ct(k){tt(k),Oe.remove(k)}function tt(k){let ie=Oe.get(k).programs;ie!==void 0&&(ie.forEach(function(ue){et.releaseProgram(ue)}),k.isShaderMaterial&&et.releaseShaderCache(k))}this.renderBufferDirect=function(k,ie,ue,me,de,Ve){ie===null&&(ie=qe);let R=de.isMesh&&de.matrixWorld.determinant()<0,B=$t(k,ie,ue,me,de);Me.setMaterial(me,R);let X=ue.index,Se=1;if(me.wireframe===!0){if(X=_e.getWireframeAttribute(ue),X===void 0)return;Se=2}let Ae=ue.drawRange,L=ue.attributes.position,Y=Ae.start*Se,se=(Ae.start+Ae.count)*Se;Ve!==null&&(Y=Math.max(Y,Ve.start*Se),se=Math.min(se,(Ve.start+Ve.count)*Se)),X!==null?(Y=Math.max(Y,0),se=Math.min(se,X.count)):L!=null&&(Y=Math.max(Y,0),se=Math.min(se,L.count));let j=se-Y;if(j<0||j===1/0)return;Qe.setup(de,me,B,ue,X);let xe,le=ut;if(X!==null&&(xe=ve.get(X),le=it,le.setIndex(xe)),de.isMesh)me.wireframe===!0?(Me.setLineWidth(me.wireframeLinewidth*lt()),le.setMode(q.LINES)):le.setMode(q.TRIANGLES);else if(de.isLine){let he=me.linewidth;he===void 0&&(he=1),Me.setLineWidth(he*lt()),de.isLineSegments?le.setMode(q.LINES):de.isLineLoop?le.setMode(q.LINE_LOOP):le.setMode(q.LINE_STRIP)}else de.isPoints?le.setMode(q.POINTS):de.isSprite&&le.setMode(q.TRIANGLES);if(de.isBatchedMesh)le.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else if(de.isInstancedMesh)le.renderInstances(Y,j,de.count);else if(ue.isInstancedBufferGeometry){let he=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Je=Math.min(ue.instanceCount,he);le.renderInstances(Y,j,Je)}else le.render(Y,j)};function Dt(k,ie,ue){k.transparent===!0&&k.side===sn&&k.forceSinglePass===!1?(k.side=Mn,k.needsUpdate=!0,pi(k,ie,ue),k.side=xs,k.needsUpdate=!0,pi(k,ie,ue),k.side=sn):pi(k,ie,ue)}this.compile=function(k,ie,ue=null){ue===null&&(ue=k),g=rt.get(ue),g.init(),_.push(g),ue.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(g.pushLight(de),de.castShadow&&g.pushShadow(de))}),k!==ue&&k.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(g.pushLight(de),de.castShadow&&g.pushShadow(de))}),g.setupLights(v._useLegacyLights);let me=new Set;return k.traverse(function(de){let Ve=de.material;if(Ve)if(Array.isArray(Ve))for(let R=0;R<Ve.length;R++){let B=Ve[R];Dt(B,ue,de),me.add(B)}else Dt(Ve,ue,de),me.add(Ve)}),_.pop(),g=null,me},this.compileAsync=function(k,ie,ue=null){let me=this.compile(k,ie,ue);return new Promise(de=>{function Ve(){if(me.forEach(function(R){Oe.get(R).currentProgram.isReady()&&me.delete(R)}),me.size===0){de(k);return}setTimeout(Ve,10)}ae.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Vt=null;function Yt(k){Vt&&Vt(k)}function Nt(){Ot.stop()}function St(){Ot.start()}let Ot=new cd;Ot.setAnimationLoop(Yt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(k){Vt=k,gt.setAnimationLoop(k),k===null?Ot.stop():Ot.start()},gt.addEventListener("sessionstart",Nt),gt.addEventListener("sessionend",St),this.render=function(k,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(ie),ie=gt.getCamera()),k.isScene===!0&&k.onBeforeRender(v,k,ie,I),g=rt.get(k,_.length),g.init(),_.push(g),Ze.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),ee.setFromProjectionMatrix(Ze),ze=this.localClippingEnabled,re=mt.init(this.clippingPlanes,ze),y=Ke.get(k,m.length),y.init(),m.push(y),zt(k,ie,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(J,Q),this.info.render.frame++,re===!0&&mt.beginShadows();let ue=g.state.shadowsArray;if(fe.render(ue,k,ie),re===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(y,k),g.setupLights(v._useLegacyLights),ie.isArrayCamera){let me=ie.cameras;for(let de=0,Ve=me.length;de<Ve;de++){let R=me[de];qn(y,k,R,R.viewport)}}else qn(y,k,ie);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),k.isScene===!0&&k.onAfterRender(v,k,ie),Qe.resetDefaultState(),U=-1,S=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function zt(k,ie,ue,me){if(k.visible===!1)return;if(k.layers.test(ie.layers)){if(k.isGroup)ue=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(ie);else if(k.isLight)g.pushLight(k),k.castShadow&&g.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||ee.intersectsSprite(k)){me&&Be.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ze);let R=Ee.update(k),B=k.material;B.visible&&y.push(k,R,B,ue,Be.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||ee.intersectsObject(k))){let R=Ee.update(k),B=k.material;if(me&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),Be.copy(k.boundingSphere.center)):(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)),Be.applyMatrix4(k.matrixWorld).applyMatrix4(Ze)),Array.isArray(B)){let X=R.groups;for(let Se=0,Ae=X.length;Se<Ae;Se++){let L=X[Se],Y=B[L.materialIndex];Y&&Y.visible&&y.push(k,R,Y,ue,Be.z,L)}}else B.visible&&y.push(k,R,B,ue,Be.z,null)}}let Ve=k.children;for(let R=0,B=Ve.length;R<B;R++)zt(Ve[R],ie,ue,me)}function qn(k,ie,ue,me){let de=k.opaque,Ve=k.transmissive,R=k.transparent;g.setupLightsView(ue),re===!0&&mt.setGlobalState(v.clippingPlanes,ue),Ve.length>0&&Ft(de,Ve,ie,ue),me&&Me.viewport(A.copy(me)),de.length>0&&wi(de,ie,ue),Ve.length>0&&wi(Ve,ie,ue),R.length>0&&wi(R,ie,ue),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ft(k,ie,ue,me){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;let Ve=Te.isWebGL2;Ie===null&&(Ie=new Kn(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Ri:ms,minFilter:la,samples:Ve?4:0})),v.getDrawingBufferSize(dt),Ve?Ie.setSize(dt.x,dt.y):Ie.setSize(rc(dt.x),rc(dt.y));let R=v.getRenderTarget();v.setRenderTarget(Ie),v.getClearColor(te),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();let B=v.toneMapping;v.toneMapping=Ni,wi(k,ue,me),D.updateMultisampleRenderTarget(Ie),D.updateRenderTargetMipmap(Ie);let X=!1;for(let Se=0,Ae=ie.length;Se<Ae;Se++){let L=ie[Se],Y=L.object,se=L.geometry,j=L.material,xe=L.group;if(j.side===sn&&Y.layers.test(me.layers)){let le=j.side;j.side=Mn,j.needsUpdate=!0,Gi(Y,ue,me,se,j,xe),j.side=le,j.needsUpdate=!0,X=!0}}X===!0&&(D.updateMultisampleRenderTarget(Ie),D.updateRenderTargetMipmap(Ie)),v.setRenderTarget(R),v.setClearColor(te,N),v.toneMapping=B}function wi(k,ie,ue){let me=ie.isScene===!0?ie.overrideMaterial:null;for(let de=0,Ve=k.length;de<Ve;de++){let R=k[de],B=R.object,X=R.geometry,Se=me===null?R.material:me,Ae=R.group;B.layers.test(ue.layers)&&Gi(B,ie,ue,X,Se,Ae)}}function Gi(k,ie,ue,me,de,Ve){k.onBeforeRender(v,ie,ue,me,de,Ve),k.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),de.onBeforeRender(v,ie,ue,me,k,Ve),de.transparent===!0&&de.side===sn&&de.forceSinglePass===!1?(de.side=Mn,de.needsUpdate=!0,v.renderBufferDirect(ue,ie,me,de,k,Ve),de.side=xs,de.needsUpdate=!0,v.renderBufferDirect(ue,ie,me,de,k,Ve),de.side=sn):v.renderBufferDirect(ue,ie,me,de,k,Ve),k.onAfterRender(v,ie,ue,me,de,Ve)}function pi(k,ie,ue){ie.isScene!==!0&&(ie=qe);let me=Oe.get(k),de=g.state.lights,Ve=g.state.shadowsArray,R=de.state.version,B=et.getParameters(k,de.state,Ve,ie,ue),X=et.getProgramCacheKey(B),Se=me.programs;me.environment=k.isMeshStandardMaterial?ie.environment:null,me.fog=ie.fog,me.envMap=(k.isMeshStandardMaterial?ne:C).get(k.envMap||me.environment),Se===void 0&&(k.addEventListener("dispose",Xe),Se=new Map,me.programs=Se);let Ae=Se.get(X);if(Ae!==void 0){if(me.currentProgram===Ae&&me.lightsStateVersion===R)return Dn(k,B),Ae}else B.uniforms=et.getUniforms(k),k.onBuild(ue,B,v),k.onBeforeCompile(B,v),Ae=et.acquireProgram(B,X),Se.set(X,Ae),me.uniforms=B.uniforms;let L=me.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(L.clippingPlanes=mt.uniform),Dn(k,B),me.needsLights=Xt(k),me.lightsStateVersion=R,me.needsLights&&(L.ambientLightColor.value=de.state.ambient,L.lightProbe.value=de.state.probe,L.directionalLights.value=de.state.directional,L.directionalLightShadows.value=de.state.directionalShadow,L.spotLights.value=de.state.spot,L.spotLightShadows.value=de.state.spotShadow,L.rectAreaLights.value=de.state.rectArea,L.ltc_1.value=de.state.rectAreaLTC1,L.ltc_2.value=de.state.rectAreaLTC2,L.pointLights.value=de.state.point,L.pointLightShadows.value=de.state.pointShadow,L.hemisphereLights.value=de.state.hemi,L.directionalShadowMap.value=de.state.directionalShadowMap,L.directionalShadowMatrix.value=de.state.directionalShadowMatrix,L.spotShadowMap.value=de.state.spotShadowMap,L.spotLightMatrix.value=de.state.spotLightMatrix,L.spotLightMap.value=de.state.spotLightMap,L.pointShadowMap.value=de.state.pointShadowMap,L.pointShadowMatrix.value=de.state.pointShadowMatrix),me.currentProgram=Ae,me.uniformsList=null,Ae}function un(k){if(k.uniformsList===null){let ie=k.currentProgram.getUniforms();k.uniformsList=_r.seqWithValue(ie.seq,k.uniforms)}return k.uniformsList}function Dn(k,ie){let ue=Oe.get(k);ue.outputColorSpace=ie.outputColorSpace,ue.batching=ie.batching,ue.instancing=ie.instancing,ue.instancingColor=ie.instancingColor,ue.skinning=ie.skinning,ue.morphTargets=ie.morphTargets,ue.morphNormals=ie.morphNormals,ue.morphColors=ie.morphColors,ue.morphTargetsCount=ie.morphTargetsCount,ue.numClippingPlanes=ie.numClippingPlanes,ue.numIntersection=ie.numClipIntersection,ue.vertexAlphas=ie.vertexAlphas,ue.vertexTangents=ie.vertexTangents,ue.toneMapping=ie.toneMapping}function $t(k,ie,ue,me,de){ie.isScene!==!0&&(ie=qe),D.resetTextureUnits();let Ve=ie.fog,R=me.isMeshStandardMaterial?ie.environment:null,B=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qi,X=(me.isMeshStandardMaterial?ne:C).get(me.envMap||R),Se=me.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ae=!!ue.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),L=!!ue.morphAttributes.position,Y=!!ue.morphAttributes.normal,se=!!ue.morphAttributes.color,j=Ni;me.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(j=v.toneMapping);let xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,le=xe!==void 0?xe.length:0,he=Oe.get(me),Je=g.state.lights;if(re===!0&&(ze===!0||k!==S)){let Bt=k===S&&me.id===U;mt.setState(me,k,Bt)}let nt=!1;me.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Je.state.version||he.outputColorSpace!==B||de.isBatchedMesh&&he.batching===!1||!de.isBatchedMesh&&he.batching===!0||de.isInstancedMesh&&he.instancing===!1||!de.isInstancedMesh&&he.instancing===!0||de.isSkinnedMesh&&he.skinning===!1||!de.isSkinnedMesh&&he.skinning===!0||de.isInstancedMesh&&he.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&he.instancingColor===!1&&de.instanceColor!==null||he.envMap!==X||me.fog===!0&&he.fog!==Ve||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==mt.numPlanes||he.numIntersection!==mt.numIntersection)||he.vertexAlphas!==Se||he.vertexTangents!==Ae||he.morphTargets!==L||he.morphNormals!==Y||he.morphColors!==se||he.toneMapping!==j||Te.isWebGL2===!0&&he.morphTargetsCount!==le)&&(nt=!0):(nt=!0,he.__version=me.version);let yt=he.currentProgram;nt===!0&&(yt=pi(me,ie,de));let Rt=!1,Ct=!1,Yn=!1,Ut=yt.getUniforms(),yn=he.uniforms;if(Me.useProgram(yt.program)&&(Rt=!0,Ct=!0,Yn=!0),me.id!==U&&(U=me.id,Ct=!0),Rt||S!==k){Ut.setValue(q,"projectionMatrix",k.projectionMatrix),Ut.setValue(q,"viewMatrix",k.matrixWorldInverse);let Bt=Ut.map.cameraPosition;Bt!==void 0&&Bt.setValue(q,Be.setFromMatrixPosition(k.matrixWorld)),Te.logarithmicDepthBuffer&&Ut.setValue(q,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&Ut.setValue(q,"isOrthographic",k.isOrthographicCamera===!0),S!==k&&(S=k,Ct=!0,Yn=!0)}if(de.isSkinnedMesh){Ut.setOptional(q,de,"bindMatrix"),Ut.setOptional(q,de,"bindMatrixInverse");let Bt=de.skeleton;Bt&&(Te.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(q,"boneTexture",Bt.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}de.isBatchedMesh&&(Ut.setOptional(q,de,"batchingTexture"),Ut.setValue(q,"batchingTexture",de._matricesTexture,D));let dn=ue.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0&&Te.isWebGL2===!0)&&ht.update(de,ue,yt),(Ct||he.receiveShadow!==de.receiveShadow)&&(he.receiveShadow=de.receiveShadow,Ut.setValue(q,"receiveShadow",de.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(yn.envMap.value=X,yn.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),Ct&&(Ut.setValue(q,"toneMappingExposure",v.toneMappingExposure),he.needsLights&&nn(yn,Yn),Ve&&me.fog===!0&&Ge.refreshFogUniforms(yn,Ve),Ge.refreshMaterialUniforms(yn,me,Z,b,Ie),_r.upload(q,un(he),yn,D)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(_r.upload(q,un(he),yn,D),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&Ut.setValue(q,"center",de.center),Ut.setValue(q,"modelViewMatrix",de.modelViewMatrix),Ut.setValue(q,"normalMatrix",de.normalMatrix),Ut.setValue(q,"modelMatrix",de.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){let Bt=me.uniformsGroups;for(let zn=0,ai=Bt.length;zn<ai;zn++)if(Te.isWebGL2){let He=Bt[zn];ft.update(He,yt),ft.bind(He,yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yt}function nn(k,ie){k.ambientLightColor.needsUpdate=ie,k.lightProbe.needsUpdate=ie,k.directionalLights.needsUpdate=ie,k.directionalLightShadows.needsUpdate=ie,k.pointLights.needsUpdate=ie,k.pointLightShadows.needsUpdate=ie,k.spotLights.needsUpdate=ie,k.spotLightShadows.needsUpdate=ie,k.rectAreaLights.needsUpdate=ie,k.hemisphereLights.needsUpdate=ie}function Xt(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(k,ie,ue){Oe.get(k.texture).__webglTexture=ie,Oe.get(k.depthTexture).__webglTexture=ue;let me=Oe.get(k);me.__hasExternalTextures=!0,me.__hasExternalTextures&&(me.__autoAllocateDepthBuffer=ue===void 0,me.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),me.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(k,ie){let ue=Oe.get(k);ue.__webglFramebuffer=ie,ue.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(k,ie=0,ue=0){I=k,z=ie,P=ue;let me=!0,de=null,Ve=!1,R=!1;if(k){let X=Oe.get(k);X.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(q.FRAMEBUFFER,null),me=!1):X.__webglFramebuffer===void 0?D.setupRenderTarget(k):X.__hasExternalTextures&&D.rebindTextures(k,Oe.get(k.texture).__webglTexture,Oe.get(k.depthTexture).__webglTexture);let Se=k.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(R=!0);let Ae=Oe.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Ae[ie])?de=Ae[ie][ue]:de=Ae[ie],Ve=!0):Te.isWebGL2&&k.samples>0&&D.useMultisampledRTT(k)===!1?de=Oe.get(k).__webglMultisampledFramebuffer:Array.isArray(Ae)?de=Ae[ue]:de=Ae,A.copy(k.viewport),H.copy(k.scissor),G=k.scissorTest}else A.copy(we).multiplyScalar(Z).floor(),H.copy(be).multiplyScalar(Z).floor(),G=ke;if(Me.bindFramebuffer(q.FRAMEBUFFER,de)&&Te.drawBuffers&&me&&Me.drawBuffers(k,de),Me.viewport(A),Me.scissor(H),Me.setScissorTest(G),Ve){let X=Oe.get(k.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X.__webglTexture,ue)}else if(R){let X=Oe.get(k.texture),Se=ie||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,X.__webglTexture,ue||0,Se)}U=-1},this.readRenderTargetPixels=function(k,ie,ue,me,de,Ve,R){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=Oe.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&R!==void 0&&(B=B[R]),B){Me.bindFramebuffer(q.FRAMEBUFFER,B);try{let X=k.texture,Se=X.format,Ae=X.type;if(Se!==ci&&$e.convert(Se)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let L=Ae===Ri&&(ae.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ae!==ms&&$e.convert(Ae)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===fs&&(Te.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!L){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=k.width-me&&ue>=0&&ue<=k.height-de&&q.readPixels(ie,ue,me,de,$e.convert(Se),$e.convert(Ae),Ve)}finally{let X=I!==null?Oe.get(I).__webglFramebuffer:null;Me.bindFramebuffer(q.FRAMEBUFFER,X)}}},this.copyFramebufferToTexture=function(k,ie,ue=0){let me=Math.pow(2,-ue),de=Math.floor(ie.image.width*me),Ve=Math.floor(ie.image.height*me);D.setTexture2D(ie,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,k.x,k.y,de,Ve),Me.unbindTexture()},this.copyTextureToTexture=function(k,ie,ue,me=0){let de=ie.image.width,Ve=ie.image.height,R=$e.convert(ue.format),B=$e.convert(ue.type);D.setTexture2D(ue,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ue.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ue.unpackAlignment),ie.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,me,k.x,k.y,de,Ve,R,B,ie.image.data):ie.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,me,k.x,k.y,ie.mipmaps[0].width,ie.mipmaps[0].height,R,ie.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,me,k.x,k.y,R,B,ie.image),me===0&&ue.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(k,ie,ue,me,de=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ve=k.max.x-k.min.x+1,R=k.max.y-k.min.y+1,B=k.max.z-k.min.z+1,X=$e.convert(me.format),Se=$e.convert(me.type),Ae;if(me.isData3DTexture)D.setTexture3D(me,0),Ae=q.TEXTURE_3D;else if(me.isDataArrayTexture||me.isCompressedArrayTexture)D.setTexture2DArray(me,0),Ae=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,me.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,me.unpackAlignment);let L=q.getParameter(q.UNPACK_ROW_LENGTH),Y=q.getParameter(q.UNPACK_IMAGE_HEIGHT),se=q.getParameter(q.UNPACK_SKIP_PIXELS),j=q.getParameter(q.UNPACK_SKIP_ROWS),xe=q.getParameter(q.UNPACK_SKIP_IMAGES),le=ue.isCompressedTexture?ue.mipmaps[de]:ue.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,le.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,le.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,k.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,k.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,k.min.z),ue.isDataTexture||ue.isData3DTexture?q.texSubImage3D(Ae,de,ie.x,ie.y,ie.z,Ve,R,B,X,Se,le.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ae,de,ie.x,ie.y,ie.z,Ve,R,B,X,le.data)):q.texSubImage3D(Ae,de,ie.x,ie.y,ie.z,Ve,R,B,X,Se,le),q.pixelStorei(q.UNPACK_ROW_LENGTH,L),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Y),q.pixelStorei(q.UNPACK_SKIP_PIXELS,se),q.pixelStorei(q.UNPACK_SKIP_ROWS,j),q.pixelStorei(q.UNPACK_SKIP_IMAGES,xe),de===0&&me.generateMipmaps&&q.generateMipmap(Ae),Me.unbindTexture()},this.initTexture=function(k){k.isCubeTexture?D.setTextureCube(k,0):k.isData3DTexture?D.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?D.setTexture2DArray(k,0):D.setTexture2D(k,0),Me.unbindTexture()},this.resetState=function(){z=0,P=0,I=null,Me.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===Ko?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tn?Hs:sd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?tn:Qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},_c=class extends Gs{};_c.prototype.isWebGL1Renderer=!0;var Po=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ic,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zn=new W,da=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ci=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,$r=new W,dr=new W,fr=new W,pr=new Ce,jr=new Ce,md=new Ht,no=new W,Qr=new W,io=new W,zu=new Ce,ql=new Ce,Uu=new Ce,Fi=class extends gn{constructor(e=new Ci){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new Zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Io(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new da(n,3,0,!1)),ur.setAttribute("uv",new da(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;so(no.set(-.5,-.5,0),fr,a,dr,s,r),so(Qr.set(.5,-.5,0),fr,a,dr,s,r),so(io.set(.5,.5,0),fr,a,dr,s,r),zu.set(0,0),ql.set(1,0),Uu.set(1,1);let o=e.ray.intersectTriangle(no,Qr,io,!1,$r);if(o===null&&(so(Qr.set(-.5,.5,0),fr,a,dr,s,r),ql.set(0,1),o=e.ray.intersectTriangle(no,io,Qr,!1,$r),o===null))return;let c=e.ray.origin.distanceTo($r);c<e.near||c>e.far||t.push({distance:c,point:$r.clone(),uv:Ns.getInterpolation($r,no,Qr,io,zu,ql,Uu,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function so(i,e,t,n,s,r){pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(jr.x=r*pr.x-s*pr.y,jr.y=s*pr.x+r*pr.y):jr.copy(pr),i.copy(e),i.x+=jr.x,i.y+=jr.y,i.applyMatrix4(md)}var Lo=class extends hi{constructor(e=null,t=1,n=1,s,r,a,o,c,h=Rn,u=Rn,f,p){super(null,a,o,c,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends bn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Ht,ku=new Ht,ro=[],Ou=new es,Vx=new Ht,ea=new Fe,ta=new vs,Do=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Ou.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Ou)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ta.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),ku.multiplyMatrices(n,mr),ea.matrixWorld=ku,ea.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){let c=ro[a];c.instanceId=r,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var pa=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nu=new Ht,Mc=new ca,ao=new vs,oo=new W,zo=class extends gn{constructor(e=new Zt,t=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;Nu.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(Nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=p,y=d;x<y;x++){let g=h.getX(x);oo.fromBufferAttribute(f,g),Fu(oo,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=p,y=d;x<y;x++)oo.fromBufferAttribute(f,x),Fu(oo,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fu(i,e,t,n,s,r,a){let o=Mc.distanceSqToPoint(i);if(o<t){let c=new W;Mc.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Wn=class extends hi{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ce:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new W,s=[],r=[],a=[],o=new W,c=new Ht;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new W)}r[0]=new W,a[0]=new W;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Gn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Gn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ma=class extends vi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Ce,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,d=h-this.aY;c=p*u-d*f+this.aX,h=p*f+d*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends ma{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,f){let p=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var lo=new W,Yl=new Qc,Zl=new Qc,Jl=new Qc,wc=class extends vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new W){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),h=lo);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),Yl.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,x,y,g),Zl.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,x,y,g),Jl.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,x,y,g)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),Zl.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),Jl.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return n.set(Yl.calc(c),Zl.calc(c),Jl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Wx(i,e){let t=1-i;return t*t*e}function Xx(i,e){return 2*(1-i)*i*e}function qx(i,e){return i*i*e}function ra(i,e,t,n){return Wx(i,e)+Xx(i,t)+qx(i,n)}function Yx(i,e){let t=1-i;return t*t*t*e}function Zx(i,e){let t=1-i;return 3*t*t*i*e}function Jx(i,e){return 3*(1-i)*i*i*e}function Kx(i,e){return i*i*i*e}function aa(i,e,t,n,s){return Yx(i,e)+Zx(i,t)+Jx(i,n)+Kx(i,s)}var Uo=class extends vi{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,s.x,r.x,a.x,o.x),aa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sc=class extends vi{constructor(e=new W,t=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,s.x,r.x,a.x,o.x),aa(e,s.y,r.y,a.y,o.y),aa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends vi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends vi{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends vi{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(e,s.x,r.x,a.x),ra(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends vi{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(e,s.x,r.x,a.x),ra(e,s.y,r.y,a.y),ra(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Bu(o,c.x,h.x,u.x,f.x),Bu(o,c.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}},Ac=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:wc,CubicBezierCurve:Uo,CubicBezierCurve3:Sc,EllipseCurve:ma,LineCurve:ko,LineCurve3:Ec,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Tc,SplineCurve:No}),Rc=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ac[s.type]().fromJSON(s))}return this}},Fo=class extends Rc{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oo(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Uo(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let h=new ma(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Bi=class i extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],h=new W,u=new Ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=n+f/t*s;h.x=e*Math.cos(d),h.y=e*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},On=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],x=0,y=[],g=n/2,m=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Mt(f,3)),this.setAttribute("normal",new Mt(p,3)),this.setAttribute("uv",new Mt(d,2));function _(){let E=new W,z=new W,P=0,I=(t-e)/n;for(let U=0;U<=r;U++){let S=[],A=U/r,H=A*(t-e)+e;for(let G=0;G<=s;G++){let te=G/s,N=te*c+o,M=Math.sin(N),b=Math.cos(N);z.x=H*M,z.y=-A*n+g,z.z=H*b,f.push(z.x,z.y,z.z),E.set(M,I,b).normalize(),p.push(E.x,E.y,E.z),d.push(te,1-A),S.push(x++)}y.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let A=y[S][U],H=y[S+1][U],G=y[S+1][U+1],te=y[S][U+1];u.push(A,H,te),u.push(H,G,te),P+=6}h.addGroup(m,P,0),m+=P}function v(E){let z=x,P=new Ce,I=new W,U=0,S=E===!0?e:t,A=E===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,g*A,0),p.push(0,A,0),d.push(.5,.5),x++;let H=x;for(let G=0;G<=s;G++){let N=G/s*c+o,M=Math.cos(N),b=Math.sin(N);I.x=S*b,I.y=g*A,I.z=S*M,f.push(I.x,I.y,I.z),p.push(0,A,0),P.x=M*.5+.5,P.y=b*.5*A+.5,d.push(P.x,P.y),x++}for(let G=0;G<s;G++){let te=z+G,N=H+G;E===!0?u.push(N,N+1,te):u.push(N+1,N,te),U+=3}h.addGroup(m,U,E===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sn=class i extends On{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bo=class i extends Zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new W,E=new W,z=new W;for(let P=0;P<t.length;P+=3)d(t[P+0],v),d(t[P+1],E),d(t[P+2],z),c(v,E,z,_)}function c(_,v,E,z){let P=z+1,I=[];for(let U=0;U<=P;U++){I[U]=[];let S=_.clone().lerp(E,U/P),A=v.clone().lerp(E,U/P),H=P-U;for(let G=0;G<=H;G++)G===0&&U===P?I[U][G]=S:I[U][G]=S.clone().lerp(A,G/H)}for(let U=0;U<P;U++)for(let S=0;S<2*(P-U)-1;S++){let A=Math.floor(S/2);S%2===0?(p(I[U][A+1]),p(I[U+1][A]),p(I[U][A])):(p(I[U][A+1]),p(I[U+1][A+1]),p(I[U+1][A]))}}function h(_){let v=new W;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(_),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function u(){let _=new W;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let E=g(_)/2/Math.PI+.5,z=m(_)/Math.PI+.5;a.push(E,1-z)}x(),f()}function f(){for(let _=0;_<a.length;_+=6){let v=a[_+0],E=a[_+2],z=a[_+4],P=Math.max(v,E,z),I=Math.min(v,E,z);P>.9&&I<.1&&(v<.2&&(a[_+0]+=1),E<.2&&(a[_+2]+=1),z<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function d(_,v){let E=_*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function x(){let _=new W,v=new W,E=new W,z=new W,P=new Ce,I=new Ce,U=new Ce;for(let S=0,A=0;S<r.length;S+=9,A+=6){_.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),E.set(r[S+6],r[S+7],r[S+8]),P.set(a[A+0],a[A+1]),I.set(a[A+2],a[A+3]),U.set(a[A+4],a[A+5]),z.copy(_).add(v).add(E).divideScalar(3);let H=g(z);y(P,A+0,_,H),y(I,A+2,v,H),y(U,A+4,E,H)}}function y(_,v,E,z){z<0&&_.x===1&&(a[v]=_.x-1),E.x===0&&E.z===0&&(a[v]=z/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ni=class extends Fo{constructor(e){super(e),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fo().fromJSON(s))}return this}},$x={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=gd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,f,p,d;if(n&&(r=n1(i,e,r,t)),i.length>80*t){o=h=i[0],c=u=i[1];for(let x=t;x<s;x+=t)f=i[x],p=i[x+1],f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p);d=Math.max(h-o,u-c),d=d!==0?32767/d:0}return ga(r,a,t,o,c,d,0),a}};function gd(i,e,t,n,s){let r,a;if(s===f1(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Hu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Hu(r,i[r],i[r+1],a);return a&&jo(a,a.next)&&(ya(a),a=a.next),a}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jo(t,t.next)||fn(t.prev,t,t.next)===0)){if(ya(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ga(i,e,t,n,s,r,a){if(!i)return;!a&&r&&o1(i,n,s,r);let o=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Qx(i,n,s,r):jx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),ya(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=e1(Vs(i),e,t),ga(i,e,t,n,s,r,2)):a===2&&t1(i,e,t,n,s,r):ga(Vs(i),e,t,n,s,r,1);break}}}function jx(i){let e=i.prev,t=i,n=i.next;if(fn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,h=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<h?o:h:c<h?c:h,p=s>r?s>a?s:a:r>a?r:a,d=o>c?o>h?o:h:c>h?c:h,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=f&&x.y<=d&&yr(s,o,r,c,a,h,x.x,x.y)&&fn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Qx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(fn(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,f=r.y,p=a.y,d=o<c?o<h?o:h:c<h?c:h,x=u<f?u<p?u:p:f<p?f:p,y=o>c?o>h?o:h:c>h?c:h,g=u>f?u>p?u:p:f>p?f:p,m=Cc(d,x,e,t,n),_=Cc(y,g,e,t,n),v=i.prevZ,E=i.nextZ;for(;v&&v.z>=m&&E&&E.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=x&&v.y<=g&&v!==s&&v!==a&&yr(o,u,c,f,h,p,v.x,v.y)&&fn(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=d&&E.x<=y&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&yr(o,u,c,f,h,p,E.x,E.y)&&fn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=y&&v.y>=x&&v.y<=g&&v!==s&&v!==a&&yr(o,u,c,f,h,p,v.x,v.y)&&fn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=_;){if(E.x>=d&&E.x<=y&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&yr(o,u,c,f,h,p,E.x,E.y)&&fn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function e1(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!jo(s,r)&&xd(s,n,n.next,r)&&xa(s,r)&&xa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ya(n),ya(n.next),n=i=r),n=n.next}while(n!==i);return Vs(n)}function t1(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&h1(a,o)){let c=yd(a,o);a=Vs(a,a.next),c=Vs(c,c.next),ga(a,e,t,n,s,r,0),ga(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function n1(i,e,t,n){let s=[],r,a,o,c,h;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,h=gd(i,o,c,n,!1),h===h.next&&(h.steiner=!0),s.push(c1(h));for(s.sort(i1),r=0;r<s.length;r++)t=s1(s[r],t);return t}function i1(i,e){return i.x-e.x}function s1(i,e){let t=r1(i,e);if(!t)return e;let n=yd(t,i);return Vs(n,n.next),Vs(t,t.next)}function r1(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,h=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&yr(a<h?r:n,a,c,h,a<h?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),xa(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&a1(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function a1(i,e){return fn(i.prev,i,e.prev)<0&&fn(e.next,i,i.next)<0}function o1(i,e,t,n){let s=i;do s.z===0&&(s.z=Cc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,l1(s)}function l1(i){let e,t,n,s,r,a,o,c,h=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,h*=2}while(a>1);return i}function Cc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function c1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function h1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!u1(i,e)&&(xa(i,e)&&xa(e,i)&&d1(i,e)&&(fn(i.prev,i,e.prev)||fn(i,e.prev,e))||jo(i,e)&&fn(i.prev,i,i.next)>0&&fn(e.prev,e,e.next)>0)}function fn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jo(i,e){return i.x===e.x&&i.y===e.y}function xd(i,e,t,n){let s=ho(fn(i,e,t)),r=ho(fn(i,e,n)),a=ho(fn(t,n,i)),o=ho(fn(t,n,e));return!!(s!==r&&a!==o||s===0&&co(i,t,e)||r===0&&co(i,n,e)||a===0&&co(t,i,n)||o===0&&co(t,e,n))}function co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ho(i){return i>0?1:i<0?-1:0}function u1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xa(i,e){return fn(i.prev,i,i.next)<0?fn(i,e,i.next)>=0&&fn(i,i.prev,e)>=0:fn(i,e,i.prev)<0||fn(i,i.next,e)<0}function d1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yd(i,e){let t=new Pc(i.i,i.x,i.y),n=new Pc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hu(i,e,t,n){let s=new Pc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var gs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gu(e),Vu(n,e);let a=e.length;t.forEach(Gu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Vu(n,t[c]);let o=$x.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Gu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Tr=class i extends Zt{constructor(e=new ni([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o];a(h)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function a(o){let c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:p1,v,E=!1,z,P,I,U;m&&(v=m.getSpacedPoints(u),E=!0,p=!1,z=m.computeFrenetFrames(u,!1),P=new W,I=new W,U=new W),p||(g=0,d=0,x=0,y=0);let S=o.extractPoints(h),A=S.shape,H=S.holes;if(!gs.isClockWise(A)){A=A.reverse();for(let q=0,Le=H.length;q<Le;q++){let ae=H[q];gs.isClockWise(ae)&&(H[q]=ae.reverse())}}let te=gs.triangulateShape(A,H),N=A;for(let q=0,Le=H.length;q<Le;q++){let ae=H[q];A=A.concat(ae)}function M(q,Le,ae){return Le||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(Le,ae)}let b=A.length,Z=te.length;function J(q,Le,ae){let Te,Me,Re,Oe=q.x-Le.x,D=q.y-Le.y,C=ae.x-q.x,ne=ae.y-q.y,ve=Oe*Oe+D*D,_e=Oe*ne-D*C;if(Math.abs(_e)>Number.EPSILON){let Ee=Math.sqrt(ve),et=Math.sqrt(C*C+ne*ne),Ge=Le.x-D/Ee,Ke=Le.y+Oe/Ee,rt=ae.x-ne/et,mt=ae.y+C/et,fe=((rt-Ge)*ne-(mt-Ke)*C)/(Oe*ne-D*C);Te=Ge+Oe*fe-q.x,Me=Ke+D*fe-q.y;let bt=Te*Te+Me*Me;if(bt<=2)return new Ce(Te,Me);Re=Math.sqrt(bt/2)}else{let Ee=!1;Oe>Number.EPSILON?C>Number.EPSILON&&(Ee=!0):Oe<-Number.EPSILON?C<-Number.EPSILON&&(Ee=!0):Math.sign(D)===Math.sign(ne)&&(Ee=!0),Ee?(Te=-D,Me=Oe,Re=Math.sqrt(ve)):(Te=Oe,Me=D,Re=Math.sqrt(ve/2))}return new Ce(Te/Re,Me/Re)}let Q=[];for(let q=0,Le=N.length,ae=Le-1,Te=q+1;q<Le;q++,ae++,Te++)ae===Le&&(ae=0),Te===Le&&(Te=0),Q[q]=J(N[q],N[ae],N[Te]);let we=[],be,ke=Q.concat();for(let q=0,Le=H.length;q<Le;q++){let ae=H[q];be=[];for(let Te=0,Me=ae.length,Re=Me-1,Oe=Te+1;Te<Me;Te++,Re++,Oe++)Re===Me&&(Re=0),Oe===Me&&(Oe=0),be[Te]=J(ae[Te],ae[Re],ae[Oe]);we.push(be),ke=ke.concat(be)}for(let q=0;q<g;q++){let Le=q/g,ae=d*Math.cos(Le*Math.PI/2),Te=x*Math.sin(Le*Math.PI/2)+y;for(let Me=0,Re=N.length;Me<Re;Me++){let Oe=M(N[Me],Q[Me],Te);Ze(Oe.x,Oe.y,-ae)}for(let Me=0,Re=H.length;Me<Re;Me++){let Oe=H[Me];be=we[Me];for(let D=0,C=Oe.length;D<C;D++){let ne=M(Oe[D],be[D],Te);Ze(ne.x,ne.y,-ae)}}}let ee=x+y;for(let q=0;q<b;q++){let Le=p?M(A[q],ke[q],ee):A[q];E?(I.copy(z.normals[0]).multiplyScalar(Le.x),P.copy(z.binormals[0]).multiplyScalar(Le.y),U.copy(v[0]).add(I).add(P),Ze(U.x,U.y,U.z)):Ze(Le.x,Le.y,0)}for(let q=1;q<=u;q++)for(let Le=0;Le<b;Le++){let ae=p?M(A[Le],ke[Le],ee):A[Le];E?(I.copy(z.normals[q]).multiplyScalar(ae.x),P.copy(z.binormals[q]).multiplyScalar(ae.y),U.copy(v[q]).add(I).add(P),Ze(U.x,U.y,U.z)):Ze(ae.x,ae.y,f/u*q)}for(let q=g-1;q>=0;q--){let Le=q/g,ae=d*Math.cos(Le*Math.PI/2),Te=x*Math.sin(Le*Math.PI/2)+y;for(let Me=0,Re=N.length;Me<Re;Me++){let Oe=M(N[Me],Q[Me],Te);Ze(Oe.x,Oe.y,f+ae)}for(let Me=0,Re=H.length;Me<Re;Me++){let Oe=H[Me];be=we[Me];for(let D=0,C=Oe.length;D<C;D++){let ne=M(Oe[D],be[D],Te);E?Ze(ne.x,ne.y+v[u-1].y,v[u-1].x+ae):Ze(ne.x,ne.y,f+ae)}}}re(),ze();function re(){let q=s.length/3;if(p){let Le=0,ae=b*Le;for(let Te=0;Te<Z;Te++){let Me=te[Te];dt(Me[2]+ae,Me[1]+ae,Me[0]+ae)}Le=u+g*2,ae=b*Le;for(let Te=0;Te<Z;Te++){let Me=te[Te];dt(Me[0]+ae,Me[1]+ae,Me[2]+ae)}}else{for(let Le=0;Le<Z;Le++){let ae=te[Le];dt(ae[2],ae[1],ae[0])}for(let Le=0;Le<Z;Le++){let ae=te[Le];dt(ae[0]+b*u,ae[1]+b*u,ae[2]+b*u)}}n.addGroup(q,s.length/3-q,0)}function ze(){let q=s.length/3,Le=0;Ie(N,Le),Le+=N.length;for(let ae=0,Te=H.length;ae<Te;ae++){let Me=H[ae];Ie(Me,Le),Le+=Me.length}n.addGroup(q,s.length/3-q,1)}function Ie(q,Le){let ae=q.length;for(;--ae>=0;){let Te=ae,Me=ae-1;Me<0&&(Me=q.length-1);for(let Re=0,Oe=u+g*2;Re<Oe;Re++){let D=b*Re,C=b*(Re+1),ne=Le+Te+D,ve=Le+Me+D,_e=Le+Me+C,Ee=Le+Te+C;Be(ne,ve,_e,Ee)}}}function Ze(q,Le,ae){c.push(q),c.push(Le),c.push(ae)}function dt(q,Le,ae){qe(q),qe(Le),qe(ae);let Te=s.length/3,Me=_.generateTopUV(n,s,Te-3,Te-2,Te-1);lt(Me[0]),lt(Me[1]),lt(Me[2])}function Be(q,Le,ae,Te){qe(q),qe(Le),qe(Te),qe(Le),qe(ae),qe(Te);let Me=s.length/3,Re=_.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);lt(Re[0]),lt(Re[1]),lt(Re[3]),lt(Re[1]),lt(Re[2]),lt(Re[3])}function qe(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function lt(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return m1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ac[s.type]().fromJSON(s)),new i(n,e.options)}},p1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[s*3],u=e[s*3+1];return[new Ce(r,a),new Ce(o,c),new Ce(h,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],x=e[s*3+2],y=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Ce(a,1-c),new Ce(h,1-f),new Ce(p,1-x),new Ce(y,1-m)]:[new Ce(o,1-c),new Ce(u,1-f),new Ce(d,1-x),new Ce(g,1-m)]}};function m1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ho=class i extends Bo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ln=class i extends Bo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_i=class i extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],f=e,p=(t-e)/s,d=new W,x=new Ce;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),h.push(0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,u.push(x.x,x.y)}f+=p}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let _=m+g,v=_,E=_+n+1,z=_+n+2,P=_+1;o.push(v,E,P),o.push(E,z,P)}}this.setIndex(o),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pi=class i extends Zt{constructor(e=new ni([new Ce(0,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Mt(s,3)),this.setAttribute("normal",new Mt(r,3)),this.setAttribute("uv",new Mt(a,2));function h(u){let f=s.length/3,p=u.extractPoints(t),d=p.shape,x=p.holes;gs.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=x.length;g<m;g++){let _=x[g];gs.isClockWise(_)===!0&&(x[g]=_.reverse())}let y=gs.triangulateShape(d,x);for(let g=0,m=x.length;g<m;g++){let _=x[g];d=d.concat(_)}for(let g=0,m=d.length;g<m;g++){let _=d[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=y.length;g<m;g++){let _=y[g],v=_[0]+f,E=_[1]+f,z=_[2]+f;n.push(v,E,z),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return g1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function g1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Mi=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],f=new W,p=new W,d=[],x=[],y=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let z=0;z<=t;z++){let P=z/t;f.x=-e*Math.cos(s+P*r)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(s+P*r)*Math.sin(a+v*o),x.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),g.push(P+E,1-v),_.push(h++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=u[m][_+1],E=u[m][_],z=u[m+1][_],P=u[m+1][_+1];(m!==0||a>0)&&d.push(v,E,P),(m!==n-1||c<Math.PI)&&d.push(E,z,P)}this.setIndex(d),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(y,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ii=class i extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new W,f=new W,p=new W;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let y=x/s*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),h.push(x/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let y=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,_=(s+1)*d+x;a.push(y,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Go=class extends yi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ot(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Vo=class extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ws=class extends yi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wo=class extends yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function uo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function x1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ar=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ic=class extends Ar{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=e,o=2*t-n;break;case Yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:a=e,c=2*n-t;break;case Yh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),y=x*x,g=y*x,m=-p*g+2*p*y-p*x,_=(1+p)*g+(-1.5-2*p)*y+(-.5+p)*x+1,v=(-1-d)*g+(1.5+d)*y+.5*x,E=d*g-d*y;for(let z=0;z!==o;++z)r[z]=m*a[u+z]+_*a[h+z]+v*a[c+z]+E*a[f+z];return r}},Lc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(s-t),f=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*f+a[c+p]*u;return r}},Dc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ii=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case po:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case Ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return Ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&x1(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ml,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(s)c=!0;else{let f=o*n,p=f-n,d=f+n;for(let x=0;x!==n;++x){let y=t[f+x];if(y!==t[p+x]||y!==t[d+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=mo;var Xs=class extends Ii{};Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=po;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends Ii{};zc.prototype.ValueTypeName="color";var Uc=class extends Ii{};Uc.prototype.ValueTypeName="number";var kc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)ei.slerpFlat(r,0,a,h-o,a,h,c);return r}},va=class extends Ii{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.DefaultInterpolation=mo;va.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends Ii{};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=po;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Ii{};Oc.prototype.ValueTypeName="vector";var Nc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){let d=h[f],x=h[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null}}},y1=new Nc,Fc=class{constructor(e){this.manager=e!==void 0?e:y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Cr=class extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kl=new Ht,Wu=new W,Xu=new W,_a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bc=class extends _a{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=_o*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xo=class extends Rr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qu=new Ht,na=new W,$l=new W,Hc=class extends _a{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new ln(2,1,1,1),new ln(0,1,1,1),new ln(3,1,1,1),new ln(1,1,1,1),new ln(3,0,1,1),new ln(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),n.position.copy(na),$l.copy(n.position),$l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($l),n.updateMatrixWorld(),s.makeTranslation(-na.x,-na.y,-na.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}},ui=class extends Rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gc=class extends _a{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Yu(){return(typeof performance>"u"?Date:performance).now()}var eh="\\[\\]\\.:\\/",v1=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",_1="[^"+eh.replace("\\.","")+"]",M1=/((?:WC+[\/:])*)/.source.replace("WC",th),b1=/(WCOD+)?/.source.replace("WCOD",_1),w1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),S1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),E1=new RegExp("^"+M1+b1+w1+S1+"$"),T1=["material","materials","bones","map"],Vc=class{constructor(e,t,n){let s=n||on.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},on=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v1,"")}static parseTrackName(e){let t=E1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};on.Composite=Vc;on.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};on.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};on.prototype.GetterByBindingType=[on.prototype._getValue_direct,on.prototype._getValue_array,on.prototype._getValue_arrayElement,on.prototype._getValue_toArray];on.prototype.SetterByBindingTypeAndVersioning=[[on.prototype._setValue_direct,on.prototype._setValue_direct_setNeedsUpdate,on.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[on.prototype._setValue_array,on.prototype._setValue_array_setNeedsUpdate,on.prototype._setValue_array_setMatrixWorldNeedsUpdate],[on.prototype._setValue_arrayElement,on.prototype._setValue_arrayElement_setNeedsUpdate,on.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[on.prototype._setValue_fromArray,on.prototype._setValue_fromArray_setNeedsUpdate,on.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $1=new Float32Array(1);var Yo=class{constructor(e,t,n=0,s=1/0){this.ray=new ca(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort(Zu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wc(e[s],this,n,t);return n.sort(Zu),n}};function Zu(i,e){return i.distance-e.distance}function Wc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Wc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Dr=class extends ws{constructor(e=null){super();let t=new ti;t.deleteAttribute("uv");let n=new pn({side:Mn}),s=new pn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new ui(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Fe(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Fe(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let h=new Fe(t,s);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let u=new Fe(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new Fe(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new Fe(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let d=new Fe(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let x=new Fe(t,Lr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let y=new Fe(t,Lr(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);let g=new Fe(t,Lr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new Fe(t,Lr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let _=new Fe(t,Lr(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let v=new Fe(t,Lr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Lr(i){let e=new Gt;return e.color.setScalar(i),e}function wa(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Zt,h=0;for(let u=0;u<i.length;++u){let f=i[u],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,u),h+=d}}if(t){let u=0,f=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+u);u+=i[p].attributes.position.count}c.setIndex(f)}for(let u in r){let f=vd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<f;++p){let d=[];for(let y=0;y<a[u].length;++y)d.push(a[u][y][p]);let x=vd(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function vd(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let h=0;h<i.length;++h)a.set(i[h].array,o),o+=i[h].array.length;let c=new bn(a,t,n);return s!==void 0&&(c.gpuType=s),c}function En(i,e=18,t=!0,n=!0){let s=[],r=[];for(let c of i)for(let h=0;h<e;h++){let u=h/e*Math.PI*2,f=Math.cos(u);s.push((c.x||0)+Math.sin(u)*c.rx,c.y,(c.z||0)+f*(f>=0?c.rz:c.rb??c.rz))}for(let c=0;c<i.length-1;c++)for(let h=0;h<e;h++){let u=c*e+h,f=c*e+(h+1)%e,p=u+e,d=f+e;r.push(u,f,p,f,d,p)}let a=i.length;if(t){let c=i[0],h=s.length/3;s.push(c.x||0,c.y,c.z||0);for(let u=0;u<e;u++)r.push(h,(u+1)%e,u)}if(n){let c=i[a-1],h=s.length/3,u=(a-1)*e;s.push(c.x||0,c.y,c.z||0);for(let f=0;f<e;f++)r.push(h,u+f,u+(f+1)%e)}let o=new Zt;return o.setAttribute("position",new Mt(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function Ts(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let c=o/6,h=e+(t-e)*c;r.push({y:-i*c,rx:h,rz:h*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),En(r,n)}function ce(i,e,t=0,n=0,s=0){let r=new Fe(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function xn(i=0,e=0,t=0,...n){let s=new _t;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var kt=(i,e,t)=>new ti(i,e,t),Jt=(i,e=14,t=10)=>new Mi(i,e,t),cn=(i,e,t,n=12,s=!1)=>new On(i,e,t,n,1,s),Nn=(i,e,t=10)=>new Sn(i,e,t),an=(i,e,t)=>i+(e-i)*t;function Li(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var Qo=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512],[15793919,7325912]],si=[10725556,4906624,3718648,11566335,16096779,16731501,16773560,10484991];function Di(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],c=i[a],h=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let f=0;f<e;f++){let p=f/e,d={y:an(c.y,h.y,p)};for(let x of n){let y=s(o,x),g=s(c,x),m=s(h,x),_=s(u,x),v=.5*(2*g+(-y+m)*p+(2*y-5*g+4*m-_)*p*p+(-y+3*g-3*m+_)*p*p*p);x[0]==="r"&&(v=Math.max(8e-4,Math.min(Math.max(g,m)*1.08,v))),d[x]=v}t.push(d)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function Md(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,c=e+1;for(let f of i)for(let p=0;p<=e;p++){let d=-Math.PI+p/e*Math.PI*2,x=Math.cos(d);t.push((f.x||0)+Math.sin(d)*f.rx,f.y,(f.z||0)+x*(x>=0?f.rz:f.rb??f.rz)),n.push(p/e,(f.y-a)/(o-a))}for(let f=0;f<r-1;f++)for(let p=0;p<e;p++){let d=f*c+p,x=d+1,y=d+c,g=x+c;s.push(d,x,y,x,g,y)}{let f=i[0],p=t.length/3;t.push(f.x||0,f.y,f.z||0),n.push(.5,0);for(let d=0;d<e;d++)s.push(p,d+1,d)}{let f=i[r-1],p=t.length/3,d=(r-1)*c;t.push(f.x||0,f.y,f.z||0),n.push(.5,1);for(let x=0;x<e;x++)s.push(p,d+x,d+x+1)}let h=new Zt;h.setAttribute("position",new Mt(t,3)),h.setAttribute("uv",new Mt(n,2)),h.setIndex(s),h.computeVertexNormals();let u=h.attributes.normal;for(let f=0;f<r;f++){let p=f*c,d=p+e,x=u.getX(p)+u.getX(d),y=u.getY(p)+u.getY(d),g=u.getZ(p)+u.getZ(d),m=Math.hypot(x,y,g)||1;u.setXYZ(p,x/m,y/m,g/m),u.setXYZ(d,x/m,y/m,g/m)}return h}function ts(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),En(Di(s,2),t)}var _d={};function bd(i){let e=i?"s":"h",t=_d[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=_d[e]=new Lo(s,n.length,1,ci),t.minFilter=t.magFilter=Rn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function nh(i,e){return new Ws(Object.assign({color:i,gradientMap:bd(!0)},e||{}))}function Tn(i,e){return new Ws(Object.assign({color:i,gradientMap:bd()},e||{}))}var zr=null;function wd(){return zr||(zr=new Gt({color:1314586,side:Mn}),zr.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},zr.userData.shared=!0,zr)}var A1=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function Sd(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new Ht,r=new Ht;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,c=[];r.copy(a.matrixWorld).invert();let h=f=>{for(let p of f.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let d=A1(p,!!p.material.map);d.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(d),c.push(p)}else!p.isLight&&!p.isSprite&&h(p)};h(a);for(let f of c)f.parent.remove(f),f.geometry.dispose();let u=[];for(let[f,p]of o){let d=p.length>1?wa(p,!1):p[0];p.length>1&&p.forEach(y=>y.dispose());let x=new Fe(d,f);x.castShadow=!0,a.add(x),!f.isMeshBasicMaterial&&!f.userData.noInk&&u.push(d)}if(e&&u.length){let f=u.map(x=>{let y=x.clone();return y.attributes.uv&&y.deleteAttribute("uv"),y}),p=f.length>1?wa(f,!1):f[0];f.length>1&&f.forEach(x=>x.dispose());let d=new Fe(p,wd());d.userData.ink=!0,d.castShadow=!1,a.add(d),n.push(d)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function el(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new Fe(n.geometry,wd());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function Ur(i,e){let t=Qo[i][e?1:0];return Tn(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Wt=(i,e,t,n)=>Tn(i,n||void 0),Fr={},As=(i,e)=>Fr[i]||(Fr[i]=e()),kr=()=>As("wood",()=>Tn(8016432)),tl=()=>As("leather",()=>Tn(4861984)),Ui=null,ri=i=>Ui?As("sk",()=>Tn(Ui.c[0],{emissive:Ui.c[1],emissiveIntensity:.5})):As("m"+i,()=>Ur(i)),Xn=i=>Ui?As("skd",()=>Tn(new ot(Ui.c[0]).multiplyScalar(.45).getHex(),{emissive:Ui.c[1],emissiveIntensity:.22})):As("d"+i,()=>Ur(i,!0)),zi=(i,e=1)=>Ui?As("skg"+e,()=>Tn(Ui.c[1],{emissive:Ui.c[1],emissiveIntensity:e})):As("g"+i+e,()=>Tn(si[i],{emissive:si[i],emissiveIntensity:e})),nl=new Sn(.5,1,5).translate(0,.5,0),Nr=new Ln(1),sh=new On(1,1,1,10,1,!0),Td=new ii(1,.05,6,40),mn=(i,e)=>new Gt({color:i,transparent:!0,opacity:e,blending:Vn,depthWrite:!1,side:sn}),$n=(i,e,t)=>{let n=new Fe(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function Br(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=(h,u,f,p)=>{let d=mn(u,.95),x=[];for(let y=0;y<h;y++){let g=$n(Nr,d,i);g.scale.set(f,f*1.7,f),x.push(g)}n.push(y=>x.forEach((g,m)=>{let _=y*(1.5+m*.27)+m*2.1,v=(m/h+y*p)%1,E=Math.sin(v*Math.PI);g.position.set(s+Math.cos(_)*(o+.035),t.y0+a*v,r+Math.sin(_)*(o+.035)),g.rotation.y=y*3+m,g.scale.set(f*E,f*1.7*E,f*E)}))};if(e===3)c(3,13215999,.014,.1);else if(e===4){c(6,16767088,.014,.16);let h=$n(sh,mn(16762960,.13),i);h.position.set(s,t.y0+a/2,r),h.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{h.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let h=mn(16725012,.7),u=mn(16760906,.85),f=t.mode==="lite",p=f?2:Math.max(3,Math.min(8,Math.round(a/.13))),d=[],x=Math.min(.075,o*1.2+.03)*(f?.62:1);for(let y=0;y<=p;y++){let g=y===p,m=y%2?1:-1,_=x*(g?1.35:1),v=$n(nl,h,i);$n(nl,u,v).scale.set(.5,.62,.5),v.position.set(s+(g?0:m*Math.min(o,.09)*.7),g?t.y1-_*.4:t.y0+a*(y+.4)/p,r),d.push({f:v,side:g?0:m,sz:_,i:y})}n.push(y=>{for(let g of d){let m=1+.32*Math.sin(y*11+g.i*1.7)+.18*Math.sin(y*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(y*9+g.i)),g.sz*2.3*m,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(y*7+g.i))}}),f||c(4,16742970,.011,.5)}else if(e>=6){let h=t.mode==="lite",u=t.mode==="halo";if(!h&&!u&&o<=.1){let f=$n(sh,mn(16773312,.2),i);f.position.set(s,t.y0+a/2,r),f.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{f.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!h){let f=$n(Td,mn(16771496,.9),i);f.position.set(s,t.y1,r),f.scale.setScalar(Math.min(o+.06,.17)),f.rotation.x=Math.PI/2,n.push(p=>{f.rotation.z=p*1.4,u||(f.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let f=new _t;f.position.set(s,t.y1+.03,r);let p=mn(16777215,.95),d=h?.6:1;for(let[x,y,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])$n(Nr,p,f).scale.set(x*d,y*d,g*d);i.add(f),n.push(x=>{f.rotation.set(x*.7,x*1.1,0),f.scale.setScalar(1+.3*Math.sin(x*4))})}c(h||u?3:6,16774872,.011,.22)}return h=>{for(let u of n)u(h)}}var Ad=(i,e)=>new Gt({color:i,transparent:!0,opacity:e,depthWrite:!1,side:sn});function R1(i,e,t){let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=Math.max(0,Math.min(6,e.r||0)),h=e.c[2],u=e.c[3]||e.c[1],f=m=>{let _=Math.sin(m*127.1+311.7)*43758.5453;return _-Math.floor(_)},p=(m,_,v,E,z={})=>{let P=z.m||mn(_,.95),I=[];for(let U=0;U<m;U++){let S=$n(Nr,P,i);I.push(S)}n.push(U=>I.forEach((S,A)=>{let H,G;if(z.jump){let M=Math.floor(U*14+A*3.3);H=f(M+A*17),G=f(M*1.7+A)*6.28}else H=((A/m+U*E)%1+1)%1,G=U*(z.orbit??1.5+A*.27)+A*2.1;let te=z.twinkle?.4+.6*Math.abs(Math.sin(U*(3+A)+A*1.9)):Math.sin(H*Math.PI),N=o+.035+(z.rad||0);S.position.set(s+Math.cos(G)*N,t.y0+a*H,r+Math.sin(G)*N),S.rotation.y=U*3+A,S.scale.set(v*te,v*(z.sy??1.7)*te,v*te)}))},d=(m,_,v=1.6)=>{let E=$n(sh,mn(m,_),i);return E.position.set(s,t.y0+a/2,r),E.scale.set(o*v+.02,a*1.05,o*v+.02),n.push(z=>{E.material.opacity=_*(.8+Math.sin(z*3)*.3)}),E},x=(m,_,v=1)=>{let E=mn(m,.7),z=mn(_,.85),P=Math.max(2,Math.min(3+c,Math.round(a/.13))),I=[],U=Math.min(.075,o*1.2+.03)*(.7+c*.06)*v;for(let S=0;S<=P;S++){let A=S===P,H=S%2?1:-1,G=U*(A?1.35:1),te=$n(nl,E,i);$n(nl,z,te).scale.set(.5,.62,.5),te.position.set(s+(A?0:H*Math.min(o,.09)*.7),A?t.y1-G*.4:t.y0+a*(S+.4)/P,r),I.push({f:te,side:A?0:H,sz:G,i:S})}n.push(S=>{for(let A of I){let H=1+.32*Math.sin(S*11+A.i*1.7)+.18*Math.sin(S*17.3+A.i*.6);A.f.scale.set(A.sz*(.85+.15*Math.sin(S*9+A.i)),A.sz*2.3*H,A.sz*.55),A.f.rotation.z=-A.side*(.5+.16*Math.sin(S*7+A.i))}})},y=m=>{let _=new _t;_.position.set(s,t.y1+.03,r);let v=mn(m,.95);for(let[E,z,P]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])$n(Nr,v,_).scale.set(E,z,P);i.add(_),n.push(E=>{_.rotation.set(E*.7,E*1.1,0),_.scale.setScalar(1+.3*Math.sin(E*4))})},g=2+c;switch(e.fx){case"flame":x(h,u),c>=2&&p(Math.ceil(g/2),u,.011,.5);break;case"frost":d(h,.13),p(g,u,.012,-.12,{sy:1});{let m=mn(h,.75),_=2+Math.floor(c/2);for(let v=0;v<_;v++){let E=$n(Nr,m,i),z=v%2?1:-1;E.position.set(s+z*(o+.012),t.y0+a*(v+.6)/(_+.4),r),E.scale.set(.012,.05+c*.004,.006),E.rotation.z=-z*.5}}break;case"shadow":{let m=Ad(h,.5);p(g+1,h,.03,.22,{m,sy:1.2,rad:-.02}),p(Math.ceil(g/2),u,.01,.3),d(u,.07,2.2)}break;case"light":if(d(h,.2,1.4),p(g,u,.011,.22),c>=3&&y(16777215),c>=4){let m=$n(Td,mn(h,.9),i);m.position.set(s,t.y1,r),m.scale.setScalar(Math.min(o+.06,.17)),m.rotation.x=Math.PI/2,n.push(_=>{m.rotation.z=_*1.4})}break;case"water":d(h,.16,1.9),p(g+1,u,.009,-.55,{sy:3,orbit:.4});break;case"bolt":d(h,.1,1.2),p(g+1,u,.008,0,{jump:1,sy:5});break;case"leaf":p(g,h,.016,.1,{sy:.35,orbit:.9,rad:.02}),p(Math.ceil(g/2),u,.008,.2);break;case"blood":d(h,.1),p(g,h,.01,-.28,{sy:2.6,orbit:.2});break;case"wind":p(g+2,h,.008,.35,{sy:.5,orbit:5,rad:.05});break;case"star":p(g+3,h,.012,.03,{twinkle:1,sy:1,rad:.03}),d(u,.08,2),y(h);break;case"prism":{let m=d(16777215,.2,1.5),_=mn(16777215,.95);p(g+1,16777215,.012,.25,{m:_}),n.push(v=>{m.material.color.setHSL(v*.25%1,1,.6),_.color.setHSL((v*.25+.4)%1,1,.65)}),c>=4&&y(16777215)}break}return m=>{for(let _ of n)_(m)}}var C1=[.8,.95,1.15,1.45,1.85,2.4,3.1,3.9];function Ed(i,e,t,n){let s=e/1.3,r=[],a=[],o=[],c=[],h=p=>[s*.78*p,s*(.52*Math.sin(p*1.75)-.12*p*p)],u=(p,d,x,y,g)=>{let m=Math.cos(x),_=Math.sin(x),v=(z,P)=>[p+z*m-P*_,d+z*_+P*m],E=new ni;return E.moveTo(p,d),t==="blade"?(E.lineTo(...v(y*.25,g)),E.lineTo(...v(y,0)),E.lineTo(...v(y*.25,-g))):(E.bezierCurveTo(...v(y*.2,g*1.25),...v(y*.8,g*1.1),...v(y,0)),E.bezierCurveTo(...v(y*.8,-g),...v(y*.2,-g*1.1),p,d)),[E,v(y,0)]};for(let p=0;p<i;p++){let d=i>1?p/(i-1):.5,[x,y]=h(d),g=-1.5+1.62*Math.pow(d,1.25),m=s*(.4+.5*d)*(d>.86?1-(d-.86)*1.6:1),[_,v]=u(x,y,g,m,m*n);r.push(_),o.push(v),c.push([x,y]),a.push(u(x,y,g+.06,m*.46,m*n*.8)[0])}let f=new ni;f.moveTo(0,-s*.05);for(let p=0;p<=8;p++){let[d,x]=h(p/8);f.lineTo(d,x+s*.045*(1-p/9))}for(let p=8;p>=0;p--){let[d,x]=h(p/8);f.lineTo(d,x-s*.05*(1-p/10))}return a.push(f),{shapes:r,cov:a,tips:o,bone:c,arm:f}}function P1(i){let e=new ni,t=i.tips,n=i.bone;e.moveTo(0,0);for(let r of n)e.lineTo(r[0],r[1]);let s=t.length;e.lineTo(t[s-1][0],t[s-1][1]);for(let r=s-2;r>=0;r--){let a=t[r+1],o=t[r],c=[(a[0]+o[0])/2,(a[1]+o[1])/2],h=[(n[r][0]+n[r+1][0])/2,(n[r][1]+n[r+1][1])/2];e.quadraticCurveTo(c[0]+(h[0]-c[0])*.3,c[1]+(h[1]-c[1])*.3,o[0],o[1])}return e.lineTo(0,-.04),e}function I1(i){let e=(t,n,s)=>{let r=Math.cos(t),a=Math.sin(t),o=(h,u)=>[h*r-u*a,h*a+u*r],c=new ni;return c.moveTo(0,0),c.bezierCurveTo(...o(n*.1,s*1.5),...o(n*1.05,s*1.3),...o(n,0)),c.bezierCurveTo(...o(n*1,-s*.9),...o(n*.3,-s*.7),0,0),c};return[[e(.62,i*.78,i*.3),e(-.5,i*.56,i*.24)],[e(.62,i*.42,i*.17),e(-.5,i*.3,i*.13)]]}function Rd(i,e,t,n){let s=Math.max(0,Math.min(7,n.r||0)),r=C1[s],a=n.kind||"plume",o=new ot(n.c[0]).getHex(),c=new ot(n.c[1]||n.c[0]).getHex(),h=a==="flamme"||a==="lumiere",u=a==="ombre",f=a==="cristal",p=(U,S)=>new Ws({color:U,side:sn,emissive:U,emissiveIntensity:S}),d=h?mn(o,.5):u?Ad(o,.74):f?new Gt({color:o,transparent:!0,opacity:.6,side:sn,depthWrite:!1}):p(o,s>=4?.55:.38),x=h?mn(c,.55):u?mn(c,.4):f?mn(c,.5):p(c,a==="meca"||s>=5?.7:.4),y=s>=4?mn(c,.13):null,g=[],m=[],_=U=>{let S=r*U;if(a==="papillon"){let G=I1(S);return[[new Pi(G[0],12),d,0],[new Pi(G[1],10),x,.008]]}if(a==="cuir"){let G=Ed(4+Math.min(2,Math.floor(s/2)),S,"blade",.03);return[[new Pi(P1(G),8),d,0],[new Pi(G.shapes.concat([G.arm]),4),x,.008]]}let A=a==="plume"||a==="flamme"||a==="ombre"?"leaf":"blade",H=Ed(Math.min(14,7+s),S,A,a==="meca"?.1:A==="blade"?.085:.13);return[[new Pi(H.shapes,6),d,0],[new Pi(H.cov,6),x,.008]]},v=s>=6?[[1,0,0],[.6,-.62,-.12],[.44,.5,.12]]:s>=4?[[1,0,0],[.56,-.62,-.12]]:[[1,0,0]];for(let[U,S,A]of v){let H=_(U);for(let[G]of H)m.push(G);for(let G of[-1,1]){let te=new _t;te.position.set(G*.05,e+A,t-.01-Math.abs(S)*.04);let N=new _t;N.rotation.z=G*S,N.scale.x=G,te.add(N);for(let[M,b,Z]of H){let J=new Fe(M,b);J.position.z=Z,J.castShadow=!b.transparent,J.userData.sharedGeo=!0,J.userData.noBake=!0,N.add(J)}if(y){let M=new Fe(H[0][0],y);M.scale.setScalar(1.06),M.position.z=-.012,M.castShadow=!1,M.userData.sharedGeo=!0,N.add(M)}i.add(te),g.push({piv:te,s:G,k:U,tilt:S})}}let E=[];if(s>=5){let U=mn(c,.9);for(let S=0;S<(s>=6?14:8);S++){let A=$n(Nr,U,i);E.push(A)}}let z=4.2-s*.32,P=0,I=(U,S=0)=>{P+=(S-P)*.12;for(let A of g){let H=Math.sin(U*z+Math.abs(A.tilt)*1.3)*(.34+.05*A.k),G=.2+H+Math.sin(U*1.3)*.03;A.piv.rotation.y=A.s*(G*P+(1.05+Math.sin(U*1.1)*.025)*(1-P)),A.piv.rotation.z=-A.s*.3*(1-P),A.piv.scale.setScalar(.72+.28*P)}E.forEach((A,H)=>{let G=U*(.5+H*.07)+H*2.4,te=r*(.3+.6*(H*.37%1)),N=(H/E.length+U*.12)%1,M=Math.sin(N*Math.PI)*(.012+s*.002);A.position.set(Math.cos(G)*te*(H%2?1:-1),e-.3+N*r*.9,t-.15-Math.abs(Math.sin(G))*.5),A.scale.set(M,M*1.7,M)})};return I(0,0),P=0,g[0].piv.userData.dispose=()=>{for(let U of m)U.dispose()},I}function Cd(i,e,t){let n=new ni;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new Pi(n,8),r=[mn(16771504,.34),mn(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],c=!0;for(let h of[-1,1]){let u=new _t;u.position.set(h*.05,e,t),o.forEach(([f,p,d],x)=>{let y=new Fe(s,r[x%2]);y.castShadow=!1,c||(y.userData.sharedGeo=!0),c=!1,y.scale.set(h*p,d*p*1.5,1),y.rotation.z=h*f,y.position.z=-x*.004,u.add(y)}),i.add(u),a.push({piv:u,s:h})}return h=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(h*1.8)*.16);r[0].opacity=.3+Math.sin(h*2.6)*.07}}var ih={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Pd(i,e=0,t=null){Fr={},Ui=t;let n=new _t,s=(r,a,o,c)=>{let h=ce(kt(a,r,.012),ri(e),0,c/2+r/2,0);n.add(h);let u=ce(Nn(a/2,a*1.4,4),ri(e),0,c/2+r+a*.7,0);if(u.scale.z=.14,u.rotation.y=Math.PI/4,n.add(u),n.add(ce(kt(a*.22,r*.9,.016),Xn(e),0,c/2+r*.47,0)),n.add(ce(kt(o,.03,.035),Xn(e),0,c/2+.005,0)),n.add(ce(cn(.016,.016,c,8),tl())),n.add(ce(Jt(.026,8,6),Xn(e),0,-c/2-.015,0)),e>=2&&n.add(ce(new Ln(.02),zi(e),0,c/2+.005,.022)),e>=3&&n.add(ce(kt(.008,r*.75,.02),zi(e,1.4),0,c/2+r*.45,0)),e>=3&&n.add(ce(new Ln(.017),zi(e),0,-c/2-.045,0)),e>=4)for(let f of[-1,1]){let p=ce(Nn(.018,.09+(e-4)*.025,5),ri(e),f*o/2,c/2+.045,0);p.rotation.z=-f*.55,n.add(p);let d=ce(Nn(.014,.06,5),Xn(e),f*o*.3,c/2-.03,0);d.rotation.z=Math.PI+f*.5,n.add(d)}if(e>=5)for(let f=0;f<3;f++)for(let p of[-1,1]){let d=ce(Nn(.012,a*.9,4),Xn(e),p*a*.62,c/2+r*(.25+f*.22),0);d.rotation.z=-p*1.2,d.scale.z=.4,n.add(d)}};switch(i){case"epee":s(.78,.06,.22,.16);break;case"dague":s(.3,.045,.12,.11);break;case"espadon":s(1.15,.11,.36,.3);break;case"lamecle":s(.9,.055,.14,.14),n.add(ce(kt(.09,.05,.014),Xn(e),.07,.86,0)),n.add(ce(kt(.07,.05,.014),Xn(e),.06,.74,0));{let r=ce(new ii(.06,.014,8,20),Xn(e),0,-.14,0);n.add(r)}break;case"masse":n.add(ce(cn(.018,.02,.7,8),kr(),0,.25,0)),n.add(ce(Jt(.085,12,8),ri(e),0,.64,0));for(let r=0;r<6;r++){let a=r/6*Math.PI*2,o=ce(Nn(.025,.07,5),Xn(e),Math.sin(a)*.1,.64,Math.cos(a)*.1);o.rotation.set(Math.PI/2*Math.cos(a),0,-Math.PI/2*Math.sin(a)),n.add(o)}e>=2&&n.add(ce(new Ln(.03),zi(e),0,.745,0));break;case"guisarme":n.add(ce(cn(.017,.017,1.9,8),kr(),0,.5,0));{let r=ce(Nn(.03,.26,4),ri(e),0,1.57,0);r.scale.z=.3,n.add(r);let a=ce(cn(.2,.2,.014,16,!1),ri(e),.1,1.28,0);a.rotation.x=Math.PI/2,a.scale.set(1,1,1.25),n.add(a);let o=ce(Nn(.04,.16,4),Xn(e),-.08,1.3,0);o.rotation.z=Math.PI/2,o.scale.z=.3,n.add(o),e>=2&&n.add(ce(new Ln(.024),zi(e),.02,1.28,.02))}break;case"baton":n.add(ce(cn(.016,.02,1.6,8),kr(),0,.5,0));{let r=ce(new ii(.085,.014,8,20,Math.PI*1.4),ri(e),0,1.37,0);r.rotation.z=Math.PI*.8,n.add(r);let a=ce(Jt(.055,14,10),zi(e,1.5),0,1.38,0);n.add(a);let o=new ui(si[e],.5,2.5);o.position.set(0,1.38,0),n.add(o)}break;case"arc":{let r=ce(new ii(.62,.016,8,28,Math.PI*.8),kr(),-.5,.2,0);r.rotation.z=-Math.PI*.4,n.add(r);let a=.2+Math.sin(Math.PI*.4)*.62,o=-.5+Math.cos(Math.PI*.4)*.62;n.add(ce(cn(.003,.003,(a-.2)*2,4),Wt(15658734,.5),o,.2,0)),n.add(ce(cn(.022,.022,.14,8),tl(),.12,.2,0)),e>=2&&n.add(ce(new Ln(.02),zi(e),.13,.3,0))}break;case"orbe":{n.add(ce(Jt(.09,18,14),Wt(si[e],.1,.1,{emissive:si[e],emissiveIntensity:1.1})));let r=ce(new ii(.13,.008,6,28),ri(e));if(r.rotation.x=1.2,n.add(r),e>=3){let o=ce(new ii(.15,.006,6,28),ri(e));o.rotation.set(.4,.8,0),n.add(o)}let a=new ui(si[e],.6,3);n.add(a)}break;case"grimoire":n.add(ce(kt(.2,.27,.06),tl())),n.add(ce(kt(.18,.25,.064),Wt(15327174,.9),.012,0,0)),n.add(ce(kt(.205,.275,.05),Wt(Qo[e][1],.6,.3),-.004,0,0)),n.add(ce(new Ln(.03),zi(e),0,0,.034));break;case"pistolet":n.add(ce(kt(.035,.26,.03),ri(e),0,.16,0)),n.add(ce(cn(.028,.028,.06,10),Xn(e),0,.07,0));{let r=ce(kt(.034,.13,.04),kr(),0,-.02,-.03);r.rotation.x=-.35,n.add(r)}break;case"repercuteur":{let r=ce(cn(.075,.075,.9,14),ri(e),0,.35,0);n.add(r),n.add(ce(cn(.09,.09,.06,14),Xn(e),0,.78,0)),n.add(ce(cn(.085,.085,.07,14),Xn(e),0,.2,0)),n.add(ce(Jt(.055,12,8),zi(e,1.6),0,.8,0)),n.add(ce(kt(.04,.16,.05),tl(),0,.05,-.1))}break;case"harpe":{let r=e>=4?ri(e):Wt(14264636,.3,.85);n.add(ce(cn(.02,.024,.95,8),r,.2,.42,0));let a=ce(new ii(.3,.02,8,18,Math.PI*.6),r,-.04,.72,0);a.rotation.z=Math.PI*.28,n.add(a);let o=ce(kt(.05,.92,.07),kr(),-.1,.36,0);o.rotation.z=-.52,n.add(o);for(let c=0;c<7;c++){let h=-.2+c*.055,u=.28+c*.09;n.add(ce(cn(.0022,.0022,u,4),Wt(c%3?15985878:si[e],.4,0,{emissive:c%3?0:si[e],emissiveIntensity:.8}),h,.84-u/2-Math.abs(3-c)*.012,0))}}break;case"anneaux":{let r=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([a,o],c)=>{n.add(ce(new ii(.14,.018,8,24),ri(e),a,o,c*.02)),n.add(ce(Jt(.05,10,8),Wt(r[c],.3,0,{emissive:r[c],emissiveIntensity:.6}),a,o,c*.02))})}break}return n.userData.tick=ih[i]?t?R1(n,t,ih[i]):Br(n,e,ih[i]):null,Ui=null,n}function Id(i=0){Fr={};let e=new ni;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new Tr(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=xn(0,0,0,ce(t,ri(i)));if(n.add(ce(kt(.05,.66,.012),Xn(i),0,-.04,.05)),n.add(ce(kt(.44,.05,.012),Xn(i),0,.06,.05)),n.add(ce(Jt(.06,12,8),Xn(i),0,.06,.05)),i>=2&&n.add(ce(new Ln(.034),zi(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(ce(new Ln(.022),zi(i),s,r,.05));return n.userData.tick=Br(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function It(i){Fr={};let e=new _t,t=Wt(i.b,.85),n=Wt(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,c=xn(0,r,0);e.add(c);let h=ce(En([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);h.rotation.x=Math.PI/2,c.add(h);let u=xn(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,c.add(u),u.add(ce(Ts(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let f=xn(0,i.neck,0);f.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(f);let p=i.hs||a*.55,d=ce(Jt(p,12,10),t);if(d.scale.set(.9,.95,1.1),f.add(d),i.beak){let _=ce(Nn(p*.42,p*1.3,8),Wt(15116602,.5),0,-p*.15,p*1.25);_.rotation.x=Math.PI/2+.25,f.add(_)}else{let _=ce(En([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Wt(i.sn,.85):t,0,-p*.2,p*.5);_.rotation.x=Math.PI/2,f.add(_),f.add(ce(Jt(p*.14,6,5),Wt(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let _ of[-1,1]){if(f.add(ce(Jt(p*.13,8,6),Wt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),_*p*.72,p*.2,p*.55)),i.ear==="point"){let v=ce(Nn(p*.3,p*.75,5),t,_*p*.5,p*.95,-p*.05);v.rotation.z=-_*.25,f.add(v)}else if(i.ear==="round")f.add(ce(Jt(p*.28,8,6),t,_*p*.65,p*.75,0));else if(i.ear==="long"){let v=ce(Ts(p*1.25,p*.34,p*.14,8,.45),t,_*p*.5,p*.6,-p*.1);v.rotation.set(Math.PI+.2,0,_*.35),f.add(v)}if(i.horns){let v=ce(Nn(p*.2,p*1.3,6),Wt(i.horns,.5),_*p*.5,p*.9,-p*.5);v.rotation.x=-1,v.rotation.z=-_*.2,f.add(v)}}if(i.horn){let _=ce(Nn(p*.13,p*1.7,6),Wt(i.horn,.3,0,{emissive:i.horn,emissiveIntensity:.7}),0,p*.95,p*.5);_.rotation.x=.55,f.add(_)}if(i.mane){let _=ce(kt(a*.16,i.neck*1.1,a*.5),Wt(i.mane,.9),0,i.neck*.5,-a*.62);u.add(_)}let x=[];for(let[_,v]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let E=xn(_*a*.62,-a*.3,v*s*.33);c.add(E);let z=o*.52,P=o*.5;E.add(ce(Ts(z,i.lw*1.35,i.lw,8),t));let I=xn(0,-z,0);E.add(I),I.add(ce(Ts(P,i.lw*.9,i.lw*.7,8),v>0||!i.d2?t:n));let U=ce(Jt(i.lw*1.05,8,6),Wt(i.hoof||1381658,.6),0,-P-i.lw*.2,i.paw?i.lw*.5:0);U.scale.set(1,.6,i.paw?1.5:1),I.add(U),x.push({hip:E,knee:I,ph:(_*v>0?0:Math.PI)+(v<0?.6:0)})}let y=xn(0,a*.35,-s*.48);if(c.add(y),i.tail==="bush"){let _=ce(Ts(s*.4,a*.3,a*.14,8),t);_.rotation.x=1.9,y.add(_)}else if(i.tail==="hair"){let _=ce(Ts(r*.55,a*.16,a*.26,8),Wt(i.mane||i.d,.9));_.rotation.x=.3,y.add(_)}else if(i.tail==="long"){let _=y;for(let E=0;E<6;E++){let z=xn(0,E?-s*.16:0,0);z.rotation.x=E?-.2:1.85,z.add(ce(Ts(s*.17,a*(.42-E*.06),a*(.36-E*.06),8),t)),_.add(z),_=z}let v=ce(Nn(a*.2,a*.5,4),n,0,-s*.2,0);v.rotation.x=Math.PI,_.add(v),e.userData.tail=y}else{let _=ce(Jt(a*.22,8,6),t);y.add(_)}let g=[];if(i.wings)for(let _ of[-1,1]){let v=xn(_*a*.7,a*.75,s*.12);c.add(v);let E=new ni,z=i.wings;E.moveTo(0,0),E.quadraticCurveTo(z*.5,z*.5,z,z*.28),E.lineTo(z*.82,0),E.lineTo(z*.72,-z*.22),E.lineTo(z*.52,-z*.08),E.lineTo(z*.42,-z*.3),E.lineTo(z*.22,-z*.14),E.lineTo(z*.12,-z*.3),E.closePath();let P=ce(new Pi(E),Wt(i.wd||i.d,.8,0,{side:sn,emissive:i.wd||i.d,emissiveIntensity:.28}));P.scale.x=_,P.rotation.x=1.15,P.castShadow=!1,v.add(P),g.push({w:v,s:_})}(i.extra||(()=>{}))(e,c,f,{body:t,dark:n});let m=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(_,v){m+=_*(3+v*5)*(v>.02?1:0);let E=v>.02?.35+Math.min(1,v)*.3:0;for(let z of x){let P=Math.sin(m+z.ph);z.hip.rotation.x=P*E,z.knee.rotation.x=Math.max(0,Math.cos(m+z.ph))*E*1.3}c.position.y=r+(v>.02?Math.abs(Math.sin(m*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(m*2)*.04;for(let{w:z,s:P}of g)z.rotation.z=P*(.25+Math.sin(performance.now()/(v>.02?160:600))*(v>.02?.45:.1))}}}function Or(i){Fr={};let e=new _t,t=Wt(921107,.35,.6),n=Wt(13225430,.2,.95),s=Wt(526346,.9),r=[];for(let f of[-.72,.78]){let p=xn(0,.34,f),d=ce(new ii(.27,.085,10,24),s);d.rotation.y=Math.PI/2,p.add(d);let x=ce(cn(.12,.12,.08,12),n);x.rotation.z=Math.PI/2,p.add(x);for(let y=0;y<5;y++){let g=ce(kt(.02,.5,.03),n);g.rotation.x=y/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=ce(Jt(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(ce(kt(.3,.3,.55),Wt(2763312,.4,.8),0,.5,.05));let o=ce(kt(.3,.1,.62),Wt(1708560,.8),0,.8,-.38);e.add(o);let c=ce(cn(.025,.025,.8,8),n,0,.7,.66);c.rotation.x=-.42,e.add(c),e.add(ce(kt(.66,.03,.03),n,0,1.06,.5));let h=ce(Jt(.2,12,8),t,0,.95,.62);h.scale.set(.9,.9,.7),e.add(h),e.add(ce(Jt(.075,10,8),Wt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(ce(kt(.31,.02,.5),Wt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let f of[-1,1]){let p=ce(cn(.035,.045,.7,8),n,f*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new Xo(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(f,p){for(let d of r)d.rotation.x+=f*p*22;e.position.y=0}}}var jt=(i,e)=>(e!==1&&(i.group.scale.setScalar(e),i.seat={y:i.seat.y*e,z:(i.seat.z||0)*e},i.wide*=e),i),Hi={m0:{speed:1.7,make:()=>It({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>It({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=ce(kt(.5,.08,.6),Wt(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>It({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=ce(En([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Wt(Qo[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>Or(si[3])},m4:{speed:2.5,make:()=>It({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=ce(Jt(.2,10,8),Wt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>It({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=ce(Nn(.06,.2,4),Wt(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>It({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=ce(En([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Wt(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new ui(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})},m7:{speed:1.7,make:()=>jt(It({len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",paw:!0,wide:.5,b:9071178,d:5915696,sn:11569770}),1.05)},m8:{speed:1.7,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:6969930,d:4865586,mane:2761242}),.88)},m9:{speed:1.7,make:()=>jt(It({len:1.6,h:.85,r:.36,neck:.25,neckA:1.3,headA:.2,hs:.22,snout:.24,lw:.08,ear:"point",tail:"short",wide:.56,b:5916214,d:3812386,horns:15327954}),1)},m10:{speed:1.9,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:12104878,d:6972768,mane:15327958}),1)},m11:{speed:1.9,make:()=>jt(It({len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",paw:!0,wide:.5,b:15265010,d:12107980,sn:16777215,eye:4892927}),1.15)},m12:{speed:1.9,make:()=>jt(It({len:1.8,h:1.3,r:.3,neck:.62,neckA:.55,headA:.7,hs:.17,snout:.26,lw:.055,ear:"point",tail:"short",wide:.55,b:9067058,d:5913118,horns:14207144}),1)},m13:{speed:2,make:()=>jt(It({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:1710626,d:789522,eye:16765514,eyeGlow:!0}),1)},m14:{speed:2,make:()=>jt(It({len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,b:15659766,d:13160664,sn:2763312}),1.05)},m15:{speed:2,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:2763312,d:1381658,mane:657934,hoof:13684944}),1.05)},m16:{speed:2.3,make:()=>Or(16726586)},m17:{speed:2.4,make:()=>jt(It({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:15238698,d:1708552,eye:16765514}),1.1)},m18:{speed:2.4,make:()=>jt(It({len:2.4,h:1.3,r:.38,neck:.8,neckA:.5,headA:.7,hs:.22,snout:.42,lw:.08,tail:"long",paw:!0,wide:.66,wings:1.9,b:3828282,d:1718810,wd:5937738,eye:16765514}),1)},m19:{speed:2.6999999999999997,make:()=>Or(3718648)},m20:{speed:2.4,make:()=>jt(It({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:14198880,d:9071162,mane:8014362}),1.15)},m21:{speed:2.5,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16053503,d:13159640,mane:12574975,horn:12574975}),1.05)},m22:{speed:2.5,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16777215,d:14212328,mane:15265010,wd:16777215,wings:1.9}),1.05)},m23:{speed:2.5,make:()=>jt(It({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:15790324,d:2763312,eye:8376575,eyeGlow:!0}),1.2)},m24:{speed:2.5,make:()=>jt(It({len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",paw:!0,wide:.62,beak:!0,wings:1.6,b:2763317,d:1381658,wd:4868698,eye:16757575,eyeGlow:!0}),1.05)},m25:{speed:2.8,make:()=>Or(16096779)},m26:{speed:2.5,make:()=>jt(It({len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",paw:!0,wide:.5,b:12576511,d:8368344,sn:15267583,eye:10484991,eyeGlow:!0}),1.45)},m27:{speed:2.8,make:()=>jt(It({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:8002074,d:3803658,wd:11545114,horns:2759194,eye:16765514,eyeGlow:!0}),1)},m28:{speed:2.8,make:()=>jt(It({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:12576511,d:6986440,wd:15267583,horns:16777215,eye:4892927,eyeGlow:!0}),1)},m29:{speed:2.8,make:()=>jt(It({len:1.8,h:1.3,r:.3,neck:.62,neckA:.55,headA:.7,hs:.17,snout:.26,lw:.055,ear:"point",tail:"short",wide:.55,b:1709092,d:657424,horns:9133302,eye:9133302,eyeGlow:!0}),1.25)},m30:{speed:2.8,make:()=>jt(It({len:2.6,h:.9,r:.36,neck:.5,neckA:1.2,headA:.4,hs:.2,snout:.36,lw:.09,tail:"long",paw:!0,wide:.66,b:3805704,d:1705988,sn:16734746,eye:16742938,eyeGlow:!0}),1.15)},m31:{speed:3.0999999999999996,make:()=>Or(9133302)},m32:{speed:3.2,make:()=>jt(It({len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",paw:!0,wide:.62,beak:!0,wings:2.4,b:16742938,d:16760906,wd:16769162,eye:16777215,eyeGlow:!0}),1.1)},m33:{speed:3.2,make:()=>jt(It({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:16774872,d:14271098,wd:16777215,horns:16766314,eye:8380671,eyeGlow:!0}),1.15)},m34:{speed:3.2,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16775920,d:15786160,mane:16766314,horn:16777215,wd:16773560,wings:2}),1.1)},m35:{speed:3.2,make:()=>jt(It({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:15784096,d:11569738,mane:16773560,wd:16777215,wings:2.2}),1.3)},m36:{speed:3.5,make:()=>Or(61695)},m37:{speed:3.6,make:()=>jt(It({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16318207,d:12577264,mane:10484991,wd:15269375,horn:10484991,wings:2.6,eye:10484991,eyeGlow:!0}),1.2)},m38:{speed:3.6,make:()=>jt(It({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:15269375,d:10484991,wd:16777215,horns:16766314,eye:10484991,eyeGlow:!0}),1.3)},m39:{speed:3.6,make:()=>jt(It({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:10484991,d:4892856,mane:16777215,wd:15269375,wings:2.8,eye:16777215,eyeGlow:!0}),1.35)}},Ld={wolf:()=>It({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>It({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=Hi.m5.make();return i.group.scale.setScalar(.85),i}};var ah={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},rl=["neutre","ninja","souverain","digne","humble","timide"],al=["neutre","ninja","levitation"],zd=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],rh={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},Ys=.252;function L1(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[Ys,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function Sa(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:an(s.rx,r.rx,n),rz:an(s.rz,r.rz,n),rb:an(s.rb??s.rz,r.rb??r.rz,n),z:an(s.z,r.z,n)}}return i[i.length-1]}var il=(i,e,t,n=1)=>{let s=Sa(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/Ys)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function sl(i,e,t){let n=Sa(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var is=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Ud(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?an(.184,.128,is((i-.8)/.5)):i<1.8?an(.128,.088,is((i-1.3)/.5)):an(.088,.04,is((i-1.8)/.7))}function kd(i,e,t,n=28,s=6){let r=[],a=[],o=Ys-.006,c=s+1;for(let f=0;f<n;f++){let p=-Math.PI+f/n*2*Math.PI,d=e(Math.abs(p));for(let x=0;x<=s;x++)r.push(...il(i,p,an(d,o,Math.sin(x/s*Math.PI/2)),t))}for(let f=0;f<n;f++)for(let p=0;p<s;p++){let d=f*c+p,x=(f+1)%n*c+p,y=d+1,g=x+1;a.push(d,x,y,x,g,y)}let h=r.length/3;r.push(0,Ys+(t-1)*.11,0);for(let f=0;f<n;f++)a.push(h,f*c+s,(f+1)%n*c+s);let u=new Zt;return u.setAttribute("position",new Mt(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function ns(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let c=a;c>=0;c--){let h=c/a,u=h<.22?an(.72,1,h/.22):Math.max(.03,1-Math.pow((h-.22)/.78,1.5));o.push({y:-i*h,x:s*i*h*h,z:n*i*h*h,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),En(o,r)}var di=(i,e=0,t="#000000")=>"#"+new ot(i).lerp(new ot(t),e).getHexString();function Dd(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",c=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let h=(H,G)=>Math.asin(Math.max(-.99,Math.min(.99,H/Sa(e,G).rx))),u=(H,G)=>(.5+h(H,G)/c)*n,f=H=>(1-H/Ys)*s,p=s/Ys,d=(H,G)=>n/c/(Sa(e,G).rx*Math.cos(h(H,G))),x=(H,G,te,N)=>{a.save(),a.translate(u(H,G),f(G)),a.scale(te*d(H,G),-p),N(),a.restore()};if(i.hair){a.fillStyle=di(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let H=0;H<n;H+=2){let G=Math.abs((H/n-.5)*c);a.fillRect(H,0,2,f(Ud(G)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let y=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(y){let H=y==="pleine",G=(.5-1.75/c)*n,te=(.5+1.75/c)*n;if(H){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(G,f(.125));for(let N=0;N<=40;N++){let M=N/40,b=-1.75+M*3.5,Z=Math.abs(b)>1.05?an(.066,.125,is((Math.abs(b)-1.05)/.6)):.05+.016*is(Math.abs(b)/1.05);a.lineTo((.5+b/c)*n,f(Z))}a.lineTo(te,s),a.lineTo(G,s),a.closePath(),a.fill(),x(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let N=a.createLinearGradient(0,s,0,f(.066));N.addColorStop(0,di(i.hairColor)),N.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=N,a.fillRect(G,f(.066),te-G,s-f(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,x(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}x(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=H?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let H of[-1,1])x(H*.047,.071,H,()=>{let G=a.createRadialGradient(0,0,0,0,0,.02);G.addColorStop(0,`rgba(238,104,104,${g})`),G.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=G,a.fillRect(-.02,-.02,.04,.04)});x(0,.064,1,()=>{let H=i.nose;a.strokeStyle=di(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*H,-.0052*H),a.quadraticCurveTo(0,-.0072*H,.0042*H,-.0052*H),a.stroke(),a.globalAlpha=1}),x(0,.037,1,()=>{let H=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-H*.78,0),a.quadraticCurveTo(0,-.0082,H*.78,0),a.quadraticCurveTo(0,-.0016,-H*.78,0),a.fill(),a.beginPath(),a.moveTo(-H*.85,0),a.quadraticCurveTo(-H*.3,.0034,0,.0016),a.quadraticCurveTo(H*.3,.0034,H*.85,0),a.quadraticCurveTo(0,-.0012,-H*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=di(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-H,9e-4),a.quadraticCurveTo(0,-.0026,H,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-H*.36,-.006),a.quadraticCurveTo(0,-.0074,H*.36,-.006),a.stroke(),a.globalAlpha=1)});let m=i.eyes*(o?1.06:1),_=.0202*m,v=(o?.0176:.0136)*m,E=(o?.0114:.0096)*m,z=.1,P=.0398*i.eyeGap+(m-1)*.004,I=di(i.hairColor,.72,"#120c10"),U=i.eyeColor;for(let H of[-1,1])x(H*P,z,H,()=>{if(t.closed){if(a.strokeStyle=I,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-_,.001),a.quadraticCurveTo(0,-E*.95,_*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let Q of[.45,.75,1])a.beginPath(),a.moveTo(_*Q,-E*.5*(1.1-Q)-4e-4),a.lineTo(_*(Q+.14),-E*.5*(1.1-Q)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-_,-.0012),a.bezierCurveTo(-_*.6,v*1.2,_*.4,v*1.32,_,.0032),a.bezierCurveTo(_*.62,-E*1.15,-_*.45,-E*1.2,-_,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-_*1.2,-E*1.6,_*2.4,(v+E)*1.8);let G=a.createLinearGradient(0,v*1.05,0,v*.15);G.addColorStop(0,"rgba(112,122,168,.8)"),G.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=G,a.fillRect(-_*1.2,0,_*2.4,v*1.5);let te=-_*.05,N=_*.61,M=Math.max(v,E)*1.14,b=(v-E)*.3,Z=a.createLinearGradient(0,b+M,0,b-M);Z.addColorStop(0,di(U,.74)),Z.addColorStop(.48,di(U,.12)),Z.addColorStop(1,di(U,.42,"#ffffff")),a.fillStyle=Z,a.beginPath(),a.ellipse(te,b,N,M,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=di(U,.78),a.stroke(),a.fillStyle=di(U,.9),a.beginPath(),a.ellipse(te,b+M*.1,N*.42,M*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=di(U,.62,"#ffffff"),a.beginPath(),a.ellipse(te,b-M*.58,N*.6,M*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(te-H*N*.36,b+M*.42,N*.3,M*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(te+H*N*.42,b-M*.4,N*.14,M*.11,0,0,7),a.fill(),a.restore();let J=o?.0037:.0028;if(a.fillStyle=I,a.beginPath(),a.moveTo(-_*1.03,-.0016),a.bezierCurveTo(-_*.6,v*1.2,_*.4,v*1.32,_,.0032),a.lineTo(_*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(_*.55,v*1.32+J*1.7,-_*.5,v*1.2+J*1.2,-_*1.06,3e-4),a.closePath(),a.fill(),o)for(let[Q,we,be,ke]of[[_*.96,.0062,_*1.34,.012],[_*.72,v*.95,_*1.02,v*1.62]])a.beginPath(),a.moveTo(Q-.0024,we),a.lineTo(be,ke),a.lineTo(Q+.0012,we-.0018),a.closePath(),a.fill();a.strokeStyle=I,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(_*.98,.0012),a.bezierCurveTo(_*.78,-E*.9,_*.36,-E*1.14,-_*.08,-E*1.12),a.stroke(),a.strokeStyle=di(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-_*.55,v*1.16+J+.0034),a.quadraticCurveTo(_*.1,v*1.36+J+.0042,_*.82,v*.95+J+.004),a.stroke(),a.globalAlpha=1});let S=di(i.hairColor,.3);for(let H of[-1,1])x(H*P,z+v*1.32+(o?.0128:.0108),H,()=>{let G=o?.0027:.0046,te=i.brows,N=-te*.0055,M=te*.0034+8e-4,b=N*.3+M*.7+.0034;a.fillStyle=S,a.beginPath(),a.moveTo(-_*1.05,N-G*.5),a.quadraticCurveTo(0,b+G*.15,_*1.22,M),a.quadraticCurveTo(0,b+G*.95+8e-4,-_*1.05,N+G*.5),a.closePath(),a.fill()});let A=new Wn(r);return A.colorSpace=tn,A.anisotropy=4,A}function D1(i,e,t){let n=i.gender==="f",s=new _t,r=L1(i.jaw*(n?.92:1.05)),a=Di(r,3),o=e.shadow?t.skin:nh(16777215,{map:Dd(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let c=Md(a,32);{let d=c.attributes.position,x=c.attributes.normal,y=new W,g=new W;for(let m=0;m<d.count;m++)y.set(d.getX(m),d.getY(m)-.118,d.getZ(m)+.012).normalize(),g.set(x.getX(m),x.getY(m),x.getZ(m)).lerp(y,.8).normalize(),x.setXYZ(m,g.x,g.y,g.z)}let h=ce(c,o);s.add(h);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let d=o.map,x=Dd(i,r,{closed:!0});u=y=>{o.map=y?x:d},s.userData.dispose=()=>{d.dispose(),x.dispose()}}for(let d of[-1,1]){let x=ce(Jt(.024,10,8),t.skin,d*.0905,.098,-.006);x.scale.set(.42,1,.72),x.rotation.y=d*.25,s.add(x)}let f=ce(En([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,sl(r,0,.068)-.0035);if(f.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),f.userData.noBake=!0,f.castShadow=!1,s.add(f),!n&&i.beard==="pleine"){let d=ce(En(Di([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(d)}let p=z1(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function z1(i,e,t,n){let s=new _t,r=i.hair,a=new _t,o=new _t,c=new _t;if(a.name="top",o.name="front",c.name="back",s.add(a,o,c),r==="rase")return s;let h=(m,_,v,E,z,P=0,I=1.06)=>{let U=il(n,v,E,I),S=ce(_,e,U[0],U[1],U[2]);return S.rotation.order="YXZ",S.rotation.set(-z,v,P),m.add(S),S},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(ce(kd(n,Ud,u),e));let f=(m,_=.021,v=.36)=>m.forEach(([E,z,P,I,U])=>h(o,ns(z,P,_,-.1,U||0),E,.211-Math.abs(E)*.016,v,I,u+.012)),p=(m,_=.04)=>{for(let v of[-1,1])h(o,ns(m,_,.022,-.05,0),v*1.08,.172,.1,-v*.06,u),h(o,ns(m*.7,_*.8,.02,-.05,0),v*1.32,.16,.1,v*.06,u)},d=(m,_,v,E=1.12,z=-.45,P=.236,I=.2)=>{for(let U=0;U<m;U++)h(a,ns(_*(.9+U*7%5*.05),v,.03,z),I+U/m*6.2832,P,E,U%2?.14:-.12,u)},x=(m,_,v,E,z,P,I,U,S,A=.026)=>{for(let H=0;H<_;H++){let G=an(v,E,_>1?H/(_-1):.5);h(m,ns(P*(.92+H*5%4*.05),I,A,S),G,z,U,H%2?.1:-.1,u)}},y=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":f(y),p(t?.11:.085),d(9,.105,.062),x(a,9,1.5,4.78,.2,.1,.06,.5,-.3),x(c,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":f([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[m,_,v,E,z]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])h(a,ns(E,.074,.05,.14),m,_,v,z,.99);x(c,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":f(y),p(.19,.045),d(9,.12,.066),x(c,9,1.45,4.83,.17,.25,.066,.13,.12,.03),x(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":f(t?g:y),p(.34,.044),d(9,.13,.068),x(c,9,1.4,4.88,.17,.56,.074,.1,.03,.032),x(c,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":f(y),p(t?.15:.1),d(8,.1,.062,1.2,-.5);{let m=ce(Jt(.026,10,8),e,...il(n,Math.PI,.2,1.1));a.add(m);for(let[_,v,E]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])h(a,ns(v,.066,.046,-.3,0),Math.PI,.2,E,_,1.14)}break;case"chignon":f(t?g:y),p(t?.13:.08),d(8,.095,.06,1.2,-.5);{let m=il(n,Math.PI,.185,1.3),_=ce(Jt(.05,14,10),e,m[0],m[1],m[2]);_.scale.set(1,.92,.9),a.add(_);for(let v=0;v<5;v++){let E=ce(ns(.06,.035,.026,.3),e,m[0],m[1],m[2]-.01);E.rotation.set(-1.9,0,v*1.257),a.add(E)}}break;case"boucles":f([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[m,_,v,E]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let z=0;z<_;z++){let P=m<.19?an(1.15,5.13,z/(_-1)):z/_*6.2832+m*9;m<.215&&Math.cos(P)>.5||h(m<.15?c:a,ns(v,.07,.052,.55,z%2?.25:-.25),P,m,E,z%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function Rs(i={}){let e=Object.assign({},ah,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,c=.5+s*.5,h=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},f=(L,Y)=>h.glow?{emissive:L,emissiveIntensity:Y}:void 0,p={skin:nh(e.skin),hair:Tn(e.hairColor)},d=p.skin,x=Tn(h.c[0],f(h.c[0],.1)),y=Tn(h.c[1],f(h.c[1],.1)),g=Tn(h.c[2],f(h.c[2],.22)),m=Tn(1907492),_=Tn(1250072),v=Tn(5922920),E=L=>L._dbl||(L._dbl=Object.assign(L.clone(),{side:sn})),z=[],P={},I=L=>P["m"+L]||(P["m"+L]=Ur(L)),U=L=>P["d"+L]||(P["d"+L]=Ur(L,!0)),S=L=>P["g"+L]||(P["g"+L]=Tn(si[L],{emissive:si[L],emissiveIntensity:.9})),A=L=>(L.userData.joint=!0,L),H=L=>(L.userData.keep=!0,L),G=.47*e.legs,te=.44*e.legs,N=G+te+.105,M=new _t,b=A(xn(0,N,0));M.add(b);let Z=A(xn(0,0,0));b.add(Z);let J={hips:b,spine:Z},Q=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([L,Y,se,j,xe],le)=>{let he=le===1||le===2?e.hips:le===3?e.waist:le===4||le===5?e.chest:1;return{y:L,rx:Y*(le>7?1:s)*he,rz:se*(le>7?1:c)*(le===4||le===5?e.chest:le===3?(1+e.waist)/2:1),rb:j*(le>7?1:c)*(le===4||le===5?(1+e.chest)/2:1),z:xe}}),we=Di(Q,3),be=L=>Sa(we,L),ke=Q[3],ee=Q[1],re=L=>{let Y=be(L);return Y.z+Y.rz},ze=h.cut,Ie=ze==="plate",Ze=(n?.088:.082)*s*e.hips;Z.add(ce(En(we,24),ze==="cape"?v:x));let dt=n?.037:.046;Z.add(ce(cn(dt,dt*1.1,.12,12),d,0,.555,-.006));let Be=A(xn(0,.57,.012)),qe=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);Be.scale.setScalar(qe),Z.add(Be),J.head=Be;let lt=D1(e,t,p);Be.add(lt);let q=(L,Y)=>{let se=L.attributes.position,j=L.index.array,xe=[];for(let le=0;le<j.length;le+=3){let he=j[le],Je=j[le+1],nt=j[le+2];Y((se.getX(he)+se.getX(Je)+se.getX(nt))/3,(se.getY(he)+se.getY(Je)+se.getY(nt))/3,(se.getZ(he)+se.getZ(Je)+se.getZ(nt))/3)&&xe.push(he,Je,nt)}return L.setIndex(xe),L},Le=(L,Y,se,j=24)=>{let xe=Di(L,3),le=En(xe,j,!1,!1);if(se){let he=le.index.array,Je=[];for(let nt=0;nt<he.length/6;nt++){let yt=Math.floor(nt/j),Rt=(nt%j+.5)/j*6.2832;if(se(Rt>Math.PI?Rt-6.2832:Rt,(xe[yt].y+xe[yt+1].y)/2))for(let Ct=0;Ct<6;Ct++)Je.push(he[nt*6+Ct])}le.setIndex(Je)}return ce(le,E(Y))},ae=(L,Y,se,j,xe=.168)=>{Y=Math.max(Y,(Ze+.098*o)/ee.rx),Z.add(Le([{y:L,rx:ee.rx*Y,rz:ee.rz*Y*1.05,rb:ee.rb*Y*1.05},{y:an(L,-.03,.55),rx:ee.rx*an(1.09,Y,.6),rz:ee.rz*an(1.12,Y*1.05,.6),rb:ee.rb*an(1.12,Y*1.05,.6)},{y:-.03,rx:Math.max(ee.rx*1.075,Ze+.1*o),rz:ee.rz*1.13,rb:ee.rb*1.13},{y:xe,rx:ke.rx*1.06,rz:ke.rz*1.1,rb:ke.rb*1.1}],se,j))},Te=(L=.27)=>(Y,se)=>!(Math.abs(Y)<L&&se<.1),Me=(L,Y,se,j=1.07)=>{let xe=be(L),le=be(Y);Z.add(ce(En([{y:L,rx:xe.rx*j,rz:xe.rz*j,rb:xe.rb*j,z:xe.z},{y:Y,rx:le.rx*j,rz:le.rz*j,rb:le.rb*j,z:le.z}],24),se))},Re=()=>{Me(.126,.174,_,1.14),Z.add(ce(kt(.052,.052,.02),g,0,.15,re(.15)*1.14+.004))},Oe=(L,Y,se,j,xe,le=1.014,he=10)=>{let Je=[],nt=[];for(let Ct=0;Ct<=he;Ct++){let Yn=Ct/he,Ut=an(L,Y,Yn),yn=an(se,j,Yn),dn=be(Ut),Bt=dn.z+dn.rz*Math.sqrt(Math.max(.05,1-(yn/dn.rx)**2))*le+.002;if(Je.push(-yn,Ut,Bt,yn,Ut,Bt),Ct<he){let zn=Ct*2;nt.push(zn,zn+1,zn+2,zn+1,zn+3,zn+2)}}let yt=new Zt;yt.setAttribute("position",new Mt(Je,3)),yt.setIndex(nt),yt.computeVertexNormals();let Rt=ce(yt,E(xe));Rt.castShadow=!1,Z.add(Rt)},D=(L,Y,se,j=1)=>Z.add(Le([{y:.488,rx:.086*j,rz:.07*j,rb:.074*j,z:-.004},{y:.488+L,rx:.064*j,rz:.058*j,rb:.062*j,z:-.006}],Y,se?xe=>Math.abs(xe)>se:null,20)),C=(n?.168:.208)*a,ne=.447,ve=(n?.8:1)*o,_e=.275*e.arms,Ee=.25*e.arms,et=ze==="robe",Ge=ze==="cape"?v:x,Ke=ze==="apron"?d:Ge,rt=()=>En(Di([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let L of[-1,1]){let Y=L<0?"M":"O",se=A(xn(L*C,ne,0));Z.add(se),se.add(ce(ts(_e,[[0,.046*ve],[.16,.051*ve],[.5,.043*ve],[.85,.037*ve],[1,.035*ve]],12),Ge));let j=A(xn(0,-_e,0));if(se.add(j),t.oneArm&&L===-1)j.add(ce(Jt(.04*ve,8,6),Ge));else{j.add(ce(ts(Ee,et?[[0,.042*ve],[.5,.06*ve],[1,.082*ve,0,.8]]:[[0,.036*ve],[.22,.041*ve],[.6,.034*ve],[1,.026*ve]],12,et?.15:.55),Ke));let le=n?.88:1,he=ce(rt(),ze==="plate"?y:d,0,-Ee,0);he.scale.setScalar(le),j.add(he);let Je=ce(ts(.045,[[0,.0095],[1,.0065]],8),ze==="plate"?y:d,0,-Ee-.022*le,.028*le);Je.rotation.x=-.75,Je.scale.setScalar(le),j.add(Je),ze!=="apron"&&!et&&j.add(ce(cn(.031*ve,.034*ve,.034,12),ze==="cape"?y:g,0,-Ee+.03,0)),J["hand"+Y]=H(xn(0,-Ee-.058*le,.004)),j.add(J["hand"+Y])}J["arm"+Y]=se,J["elbow"+Y]=j}J.armL=J.armM,J.armR=J.armO,J.elbowL=J.elbowM,J.elbowR=J.elbowO;let mt=Ze,fe=o,bt=ze==="track"||ze==="suit"||ze==="tail"||ze==="plate"?x:y,ht=()=>{let L=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([se,j,xe])=>({y:se,rx:j,rz:xe,z:.036-xe})),Y=En(Di(L,2),12);return Y.rotateX(Math.PI/2),Y};for(let L of[-1,1]){let Y=L<0?"M":"O",se=A(xn(L*mt,-.02,0));b.add(se),se.add(ce(ts(G,n?[[0,.09*fe],[.3,.09*fe],[.7,.066*fe],[1,.052*fe]]:[[0,.086*fe],[.3,.088*fe],[.7,.069*fe],[1,.056*fe]],14),bt));let j=A(xn(0,-G,0));se.add(j);let xe=n?.92:1;j.add(ce(ts(te,[[0,.054*fe*xe],[.25,.06*fe*xe,-.008],[.7,.043*fe*xe],[1,.036*fe*xe]],12),bt)),j.add(ce(ts(te*.56,[[0,.054*fe*xe*1.16],[.4,.047*fe*xe*1.14],[1,.04*fe*xe*1.12]],12,.2),m,0,-te*.44,-.002)),j.add(ce(cn(.062*fe*xe,.058*fe*xe,.03,12),ze==="plate"?g:m,0,-te*.44,-.004));let le=ce(ht(),m,0,-te-.049,.004);if(le.scale.setScalar(n?.9:1),j.add(le),u.jambieres!=null){let he=u.jambieres;j.add(ce(ts(te*.8,[[0,.07*fe],[.3,.074*fe,-.004],[1,.052*fe]],12,.15),I(he),0,-te*.1,.004));let Je=ce(Jt(.062*fe,10,8),U(he),0,0,.03);if(Je.scale.set(1,1.2,.8),j.add(Je),he>=2&&j.add(ce(new Ln(.016),S(he),0,0,.082*fe)),he>=5){let yt=Br(j,he,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});yt&&z.push(yt)}let nt=ce(ht(),U(he),0,-te-.044,.008);nt.scale.set(1.12,1.1,1.06),j.add(nt)}J["leg"+Y]=se,J["knee"+Y]=j}J.legL=J.legM,J.legR=J.legO,J.kneeL=J.kneeM,J.kneeR=J.kneeO;let ut=!1,it=()=>{for(let L of[-1,1])J[L<0?"armM":"armO"].add(ce(kt(.008,_e*.86,.022),g,L*.05*ve,-_e*.5,0)),J[L<0?"legM":"legO"].add(ce(kt(.008,G*.9,.024),g,L*.079*fe,-G*.5,0)),J[L<0?"kneeM":"kneeO"].add(ce(kt(.008,te*.42,.02),g,L*.055*fe,-te*.2,0))};switch(ze){case"uniform":ae(-.125,1.1,x),Re(),Oe(.175,.488,.009,.009,g),D(.05,g,.17);for(let L of[-1,1]){let Y=ce(kt(.085,.014,.05),g,L*C*.86,.478,0);Y.rotation.z=-L*.32,Z.add(Y)}break;case"track":Oe(.02,.5,.007,.007,g),D(.06,g,.17,1.04),Me(-.045,-.015,y,1.03),it();break;case"apron":Z.add(Le([{y:-G*.92,rx:ee.rx*1.24,rz:ee.rz*1.3},{y:-.03,rx:ee.rx*1.08,rz:ee.rz*1.15},{y:.168,rx:ke.rx*1.06,rz:ke.rz*1.13}],g,L=>Math.abs(L)<1.25)),Oe(.17,.43,.1,.075,g,1.03),Re(),D(.03,x,.35);break;case"coat":ae(-G*.94,n?1.5:1.32,x,Te()),Re(),Oe(.3,.5,.012,.045,g),D(.07,y,.45,1.16);break;case"blouse":ae(-G*.8,1.22,x,Te(.14)),Oe(.36,.5,.01,.04,y),D(.04,x,.4,1.1);{let L=ce(kt(.055,.05,.012),g,C*.42,.33,re(.33)*.96+.006);Z.add(L),J.armM.add(ce(cn(.06*ve,.06*ve,.05,12),g,0,-.12,0))}break;case"robe":ae(-(N-.1),n?1.9:1.55,x),ut=!0,Me(.125,.2,g,1.085),Oe(.2,.5,.01,.05,g),D(.045,g,.35,1.12);{let L=ce(kt(.05,.34,.012),g,0,-.03,ee.rz*1.24);L.rotation.x=-.08,Z.add(L)}break;case"suit":ae(-.12,1.07,x,Te(.14)),Oe(.24,.5,.006,.05,g),Oe(.25,.48,.014,.012,y,1.03),D(.035,g,.35);break;case"cape":{ae(-.15,1.12,v),Re(),Z.add(ce(En(Di([{y:-N*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),x)),Z.add(Le([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],x));{let L=ce(Jt(.075,12,8),x,0,.535,-.085);L.scale.set(1.25,.6,.8),Z.add(L)}Z.add(ce(new Ln(.024),S(2),0,.455,.12));break}case"plate":{for(let L of[-1,1]){let Y=ce(Jt(.098,12,8),x,L*C*1.02,ne+.036,0);Y.scale.set(1.15,.72,1.1),Z.add(Y),J[L<0?"elbowM":"elbowO"].add(ce(ts(Ee*.7,[[0,.052*ve],[1,.04*ve]],12,.2),x,0,-.02,0))}Z.add(ce(new Ln(.028),Tn(h.c[2],{emissive:h.c[2],emissiveIntensity:.8}),0,.36,re(.36)+.012)),ae(-G*.5,1.22,g,Te(.14)),Re(),D(.05,y,.17,1.1);break}case"tail":{Oe(.2,.5,.03,.06,g),ae(-.1,1.05,x,L=>Math.abs(L)>.6);for(let L of[-1,1]){let Y=ce(kt(.115,.44,.014),y,L*.064,-.22,-ee.rb*1.12);Y.rotation.x=.1,Z.add(Y)}for(let L of[-1,1]){let Y=ce(Nn(.022,.05,4),y,L*.024,.497,re(.49)+.014);Y.rotation.z=L*Math.PI/2,Y.scale.z=.5,Z.add(Y)}D(.035,g,.35);break}}if(u.plastron!=null){let L=u.plastron,Y=we.filter(se=>se.y>=.175&&se.y<=.492).map(se=>({y:se.y,rx:se.rx*1.09,rz:se.rz*1.14,rb:se.rb*1.12,z:se.z}));Y.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),Z.add(ce(En(Y,24,!1,!1),E(I(L)))),Me(.175,.2,U(L),1.16);for(let se of[-1,1]){let j=ce(Jt(.094,12,8),U(L),se*C*1.04,ne+.042,0);j.scale.set(1.2+L*.03,.7,1.14),Z.add(j);let xe=ce(Jt(.075,12,8),I(L),se*C*1.12,ne-.02,0);if(xe.scale.set(1,.8,1.1),Z.add(xe),L>=4){let le=ce(Nn(.028,.11,6),I(L),se*C*1.2,ne+.095,0);le.rotation.z=-se*.7,Z.add(le)}}if(Oe(.2,.49,.012,.012,U(L),1.16),L>=2&&Z.add(ce(new Ln(.03),S(L),0,.375,re(.375)*1.14+.016)),L>=4)for(let se of[-1,1])Z.add(ce(new Ln(.02),S(L),se*C*1.04,ne+.1,.03));if(L>=3)for(let se of[-1,1]){let j=Br(Z,L,{x:se*C*1.06,y0:ne+.07,y1:ne+(L>=5?.2:.16),r:.05,mode:"lite"});j&&z.push(j)}L>=6&&z.push(Cd(Z,.4,-(Q[5].rb+.03)))}if(u.casque!=null){let L=u.casque,Y=lt.userData.rings,se=E(I(L)),j=le=>le<.55?.138:le<1?an(.138,.05,is((le-.55)/.3)):le<2.2?.05:.035;Be.add(ce(kd(Y,j,1.13,32,7),se)),Be.add(ce(kt(.016,.07,.014),U(L),0,.118,sl(Y,0,.12)*1.13+.006));{let le=ce(En(Di([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),U(L),0,.262,0);Be.add(le)}if(L>=2&&Be.add(ce(new Ln(.015),S(L),0,.2,sl(Y,0,.2)*1.13+.012)),L>=3){let le=ce(En(Di([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),Tn(si[L]),0,.285,0);Be.add(le)}if(L>=5)for(let le of[-1,1]){let he=ce(Nn(.024,.13,6),I(L),le*.112,.215,-.02);he.rotation.z=-le*.9,Be.add(he)}if(L>=5){let le=Br(Be,L,{y0:L>=6?.3:.27,y1:L>=6?.33:.38,r:L>=6?.1:.03,z:-.02,mode:L>=6?"halo":"lite"});le&&z.push(le)}let xe=lt.getObjectByName("hair");if(xe){xe.remove(xe.getObjectByName("top"));let le=xe.getObjectByName("front");le.children.slice(0,Math.max(0,le.children.length-4)).forEach(he=>le.remove(he))}}let $e=H(xn(0,.3,-(Q[4].rb+.05)));Z.add($e);let Qe=i.main&&i.main.type,ft=i.off&&i.off.type,Lt=Qe?rh[Qe]||"1h":"fist",gt=[],Pe=(L,Y,se)=>new ei().setFromEuler(new _s(L,Y,se));function $(L,Y,se){let j=A(Pd(L.type,L.r,i.skin||null)),xe=L.type,le={g:j,type:xe,hand:J[se]},he={parent:$e,p:[0,0,0],q:Pe(0,0,0),s:1},Je={p:[0,0,0],q:Pe(Math.PI/2,Math.PI/2,0),s:1};return xe==="orbe"?(he.parent=Z,he.p=[Y*.3,.52,.12],le.orb=!0,J.orb=j):xe==="grimoire"?(he.parent=Z,he.p=[Y*(ee.rx+.035),.02,.02],he.q=Pe(0,Y*Math.PI/2,.1),Je.p=[0,0,.05],Je.q=Pe(-1.2,Math.PI/2,0),le.hand=J.handO||J.handM):xe==="pistolet"?(he.parent=Z,he.p=[Y*(ee.rx+.04),.03,0],he.q=Pe(Math.PI+.25,0,0),he.s=.9,Je.q=Pe(0,0,Math.PI),Je.p=[0,.01,.03]):xe==="dague"?(he.p=[Y*.17,.2,0],he.q=Pe(0,0,Y*(Math.PI-.5))):xe==="anneaux"?(he.p=[0,.02,.01],he.q=Pe(Math.PI/2-.2,0,0),he.s=.85,Je.q=Pe(Math.PI/2,0,0),Je.p=[0,0,.12],Je.s=.7):xe==="guisarme"||xe==="baton"?(he.p=[-Y*.12,-.62,0],he.q=Pe(0,0,Y*.3),Je.p=[0,0,-.1]):xe==="arc"?(he.p=[Y*.1,0,0],he.q=Pe(0,0,Y*.25),Je.q=new ei().setFromRotationMatrix(new Ht().makeBasis(new W(0,-1,0),new W(0,0,1),new W(-1,0,0))),Je.p=[0,.12,-.2],le.hand=J.handO||J.handM):xe==="harpe"?(he.p=[0,-.45,-.03],he.s=.85,Je.q=Pe(Math.PI/2,0,0),Je.p=[.02,.06,-.42],Je.s=.64,le.hand=J.handO||J.handM):xe==="repercuteur"?(he.p=[Y*.17,.2,0],he.q=Pe(0,0,Y*(Math.PI-.5)),Je.q=Pe(0,0,Math.PI),Je.p=[0,.06,.1]):(he.p=[Y*.17,.2,0],he.q=Pe(0,0,Y*(Math.PI-.5))),j.userData.tick&&z.push(j.userData.tick),le.S=he,le.H=Je,gt.push(le),We(le,!1),le}function We(L,Y){let se=Y&&L.hand&&!L.orb?L.H:L.S;(Y&&L.hand&&!L.orb?L.hand:L.S.parent).add(L.g),L.g.position.set(se.p[0],se.p[1],se.p[2]),L.g.quaternion.copy(se.q),L.g.scale.setScalar(se.s)}Qe&&$(i.main,-1,"handM"),ft&&ft!=="bouclier"&&$(i.off,1,"handO");let Xe=gt.length>1&&rh[ft]===rh[Qe],ct=ft==="bouclier"?i.off.r:u.bouclier;if(ct!=null){let L=A(Id(ct));L.position.set(.055,-.13,0),L.rotation.y=Math.PI/2,L.scale.setScalar(.8),J.elbowO.add(L),L.userData.tick&&z.push(L.userData.tick)}if(i.aura){let L=new ot(i.aura),Y=new Fe(new _i(.42,.56,40),new Gt({color:L,transparent:!0,opacity:.55,side:sn,blending:Vn,depthWrite:!1}));Y.rotation.x=-Math.PI/2,Y.position.y=.02,M.add(Y),J.aura=Y;let se=new Fe(cn(.5,.42,1.5,24,!0),new Gt({color:L,transparent:!0,opacity:.1,side:sn,blending:Vn,depthWrite:!1}));se.position.y=.75,M.add(se),J.auraCol=se}M.scale.setScalar(e.height);let tt=Sd(M,!t.shadow&&!t.noInk);if(t.shadow){let L=typeof t.shadow=="string"?t.shadow:"#14141f",Y=new Wo({color:L,transparent:!0,opacity:.8,emissive:new ot(L).multiplyScalar(.6)});M.traverse(xe=>{xe.isMesh&&xe.material&&!xe.material.transparent&&!(xe.material.emissiveIntensity>.4)&&(xe.material.map&&xe.material.userData.ownMap&&xe.material.map.dispose(),xe.material=Y)});let se=new Gt({color:t.eyes||"#bfe4ff"}),j=lt.userData.rings;for(let xe of[-1,1]){let le=new Fe(Jt(.012,8,6),se);le.position.set(xe*.037,.1,sl(j,.037,.1)+.002),le.scale.set(1.5,.7,.5),Be.add(le)}}M.traverse(L=>{L.isMesh&&(L.castShadow=!L.material.transparent&&!L.userData.ink&&L.userData.noBake!==!0)});let Dt=null,Vt=!1,Yt=new _t;Z.add(Yt),i.wings&&(Dt=Rd(Yt,.4,-(Q[5].rb+.02),i.wings)),Yt.visible=!!i.wings&&i.wings.ground!==!1;let Nt=(L,Y)=>new Gt({color:L,transparent:!0,opacity:Y,side:sn,blending:Vn,depthWrite:!1}),St=[];{let L=new Sn(.5,1,6).rotateX(Math.PI).translate(0,-.5,0),Y=Nt("#ff2410",.62),se=Nt("#ffb27a",.7),j=!0;for(let xe of[J.kneeM,J.kneeO]){let le=new Fe(L,Y),he=new Fe(L,se);le.castShadow=he.castShadow=!1,j||(le.userData.sharedGeo=!0),he.userData.sharedGeo=!0,j=!1,he.scale.set(.5,.55,.5),le.add(he),le.position.set(0,-te-.07,.04),le.visible=!1,xe.add(le),St.push(le)}}let Ot=new _t;Ot.visible=!1,M.add(Ot);{let L=i.aura||"#bfe8ff",Y=new Fe(cn(.52,.34,2.3,20,!0),Nt(L,.16));Y.position.y=1.15,Y.castShadow=!1,Ot.add(Y);let se=Nt("#ffffff",.7),j=kt(.012,.3,.012);for(let le=0;le<9;le++){let he=new Fe(j,se);he.castShadow=!1,le&&(he.userData.sharedGeo=!0),Ot.add(he)}let xe=new Fe(new _i(.3,.62,32).rotateX(-Math.PI/2),Nt(L,.5));xe.position.y=.03,xe.castShadow=!1,Ot.add(xe)}let zt={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},qn=i.runPose||null,Ft={};J.armM.rotation.order=J.armO.rotation.order="XZY";let wi={epee:1,dague:1,masse:1,espadon:.75,guisarme:.7,baton:.7,lamecle:1,pistolet:1,repercuteur:.7},Gi=new ei,pi=new W(1,0,0),un=0,Dn=Math.random()*6,$t=null,nn=!1,Xt=1.5+Math.random()*4,k=0,ie=rl.includes(e.stance)?e.stance:"neutre",ue=al.includes(e.move)?e.move:"neutre",me=ct!=null,de=Qe==="grimoire"||ft==="grimoire";function Ve(){Ft.aMx=.04,Ft.aMz=.13,Ft.eM=-.05,Ft.aOx=.04,Ft.aOz=.13,Ft.eO=-.05,Ft.aMy=0,Ft.aOy=0}let R=L=>Object.assign(Ft,L),B=L=>{let Y={};for(let se in L){let j=se==="sY"||se==="aMy"||se==="aOy",xe=se.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");Y[se==="sY"?se:xe]=j?-L[se]:L[se]}return Y};function X(L){switch(ie){case"ninja":return R({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return R({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return R({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return R({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return R({sX:.1,sY:.12+Math.sin(L*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let Se={slash(L,Y){let se=L<.36,j=L<.66,xe=Xe&&Y%2===1,le=Xe?(Y>>1)%3:Y%3,he=le===0?se?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:j?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:le===1?se?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:j?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:se?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:j?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;he&&R(xe?B(he):he)},heavy(L,Y){let se=L<.42,j=L<.72;Y%2===0?se?R({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):j&&R({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):se?R({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):j&&R({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(L,Y){if(L>.8)return;if(Lt==="cannon"){R({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),L>.3&&L<.5&&R({sX:-.16,aMx:-1.45});return}let se=L>.3&&L<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};R(Xe&&Y%2===1?B(se):se)},bow(L){L<.55?R({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):L<.82&&R({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(L){L<.4?R({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):L<.75&&R({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(L){L<.78&&R({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(L){L<.45?R({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(L/.45*Math.PI*.6)}):L<.82&&R({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(L){R({aOx:-.8,aOz:-.2,eO:-1.6}),L<.35?R({aMx:-1.25,aMz:.4,eM:-1.5}):L<.72&&R({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(L,Y){let se=L<.32?{aMx:.3,eM:-2.2,sY:-.4}:L<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;se&&R(Y%2?B(se):se)},spin(L){R({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(L){R({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(L){R({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(L){R({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(L){R({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:M,joints:J,height:(N+.57+Ys*qe)*e.height,seatDrop:N*e.height,cat:Lt,dual:Xe,inks:tt,scale:e.height,get armed(){return nn},get acting(){return $t?$t.name:null},get move(){return ue},get stance(){return ie},setArmed(L){if(L=!!L,L!==nn){nn=L;for(let Y of gt)We(Y,L)}},setStyle(L){L.stance&&rl.includes(L.stance)&&(ie=L.stance),L.move&&al.includes(L.move)&&(ue=L.move)},play(L,Y=.5,se=0,j=1){Se[L]&&($t={name:L,t:0,dur:Y,c:se,turns:j})},hand(L,Y){let se=J[Y?"handO":"handM"]||J.handO||J.handM;return se?se.getWorldPosition(L):M.getWorldPosition(L)},update(L,Y={}){let se=Math.min(3.2,Y.speed||0),j=k+=L,xe=Math.sin(j*1.6),le=!!Y.fly&&!Y.riding&&!Y.down&&!Y.climb,he=ue==="levitation"&&!le&&!Y.riding&&!Y.down,Je=se>.02,nt=ue==="ninja"&&se>.9&&!le&&!Y.riding&&!Y.down;Dn+=L*(4.6+se*3.4)*(nt?1.3:1)*(Je?1:0),R({aMx:xe*.02,aMy:0,aMz:.08,aOx:-xe*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:xe*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:xe*.003,rZ:0});let yt=null,Rt=!1,Ct=!1;if(Y.riding)yt=[-1.25,1.3,-1.25,1.3,Y.wide||.45],R({sX:.06+xe*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),Rt=!0;else if(Y.down)yt=[-1.48,1.5,.15,1.65,0],R({sX:.5,hdX:.45,dy:-(G-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(Y.climb){let He=Math.sin(j*9);yt=[-.6-He*.45,.9+He*.4,-.6+He*.45,.9-He*.4,.05],R({sX:.15,hdX:-.35,aMx:-2.5-He*.4,aOx:-2.5+He*.4,aMz:.25,aOz:.25,eM:-.5,eO:-.5})}else if(le){let He=Math.min(1,se/2.2);yt=[.16+He*.16,.28-He*.1,.3+He*.12,.42-He*.2,.03],R({sX:.05+He*.1,hdX:-He*.55,aMx:.2+He*.5,aOx:.2+He*.5,aMz:.34,aOz:.34,eM:-.14,eO:-.14,dy:Math.sin(j*2)*.03})}else if(Je&&he){let He=Math.min(1,se/2),vt=Math.sin(j*1.7);yt=[-.3,.58,.04+He*.05,.1,0],R({sX:.05+He*.09,hdX:-.03-He*.06,aMx:.12+He*.16+vt*.02,aOx:.12+He*.16-vt*.02,aMz:.16+He*.05,aOz:.16+He*.05,eM:-.22,eO:-.22})}else if(Je){let He=Math.max(0,Math.min(1,se-.75)),vt=nt?.72:(ut?.3:.55)+Math.min(se,1.4)*(ut?.12:.3),rn=Math.sin(Dn),jn=(.7+He)*vt*1.5;yt=[rn*vt,Math.max(0,-Math.cos(Dn))*jn,-rn*vt,Math.max(0,Math.cos(Dn))*jn,0],Rt=!0,R(nt?{sX:.8,hdX:-.58,aMx:.72+rn*.05,aOx:.72-rn*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:rn*.05,dy:-.1+Math.abs(Math.cos(Dn))*.03}:{aMx:-rn*vt*.8,aOx:rn*vt*.8,eM:-.25-He*.9-Math.max(0,-rn)*.4,eO:-.25-He*.9-Math.max(0,rn)*.4,sX:.04+He*.2,sY:rn*.07,dy:Math.abs(Math.cos(Dn))*.025*(1+He)})}else!nn&&!$t&&(yt=X(j),Ct=!0);if(he&&(Je||(yt=[-.2,.42,.02,.08,0]),Rt=!1,Ft.dy=.24+Math.sin(j*2.2)*.02),nn&&!le&&!Y.climb&&!Y.riding&&!Y.down&&!nt){let He=Ft.aMx,vt=Ft.aOx,rn=Ft.sY;he&&(Ft.aMz=Ft.aOz=.08,Ft.eM=Ft.eO=-.12),Ve(),Je&&!he&&(Ft.aMx+=He*.55,Ft.aOx+=vt*.55,Ft.eM=Ft.eO=-.22,Ft.sY+=rn)}if(qn==="aion"&&nn&&Je&&se>.9&&!le&&!Y.climb&&!Y.riding&&!Y.down){let He=Math.sin(Dn);R({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+He*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+He*.04}),he||(Ft.sX=.5,Ft.hdX=-.36)}let Yn=0,Ut=0;if($t){$t.t+=L;let He=$t.t/$t.dur;He>=1?$t=null:(Se[$t.name](He,$t.c),$t.name==="spin"&&(Yn=is(He)*6.2832*$t.turns),$t.name==="roll"&&(Ut=is(He)*6.2832,yt=[-1.7,2.2,-1.7,2.2,0],Rt=!1),$t.name==="flip"&&(Ut=-is(He)*6.2832,yt=[-1.75,2.25,-1.75,2.25,0],Rt=!1),$t.name==="dash"&&!he&&(yt=[-1.05,.55,.75,.95,0],Rt=!1),$t.name==="slam"&&He<.45&&(yt=[-.5,1.1,.3,.9,0],Rt=!1))}let yn=1-Math.exp(-($t||Y.riding?30:nt?16:12)*L);for(let He in zt)zt[He]+=(Ft[He]-zt[He])*yn;J.armM.rotation.set(zt.aMx,zt.aMy,-zt.aMz),J.armO.rotation.set(zt.aOx,zt.aOy,zt.aOz),J.elbowM.rotation.x=zt.eM,J.elbowO.rotation.x=zt.eO,Z.rotation.x=zt.sX,Z.rotation.y=zt.sY,b.position.y=N+zt.dy,b.rotation.y=Yn,b.rotation.x=Ut,b.rotation.z=zt.rZ,Be.rotation.set(zt.hdX,zt.hdY+(Je||$t||ie==="timide"?0:Math.sin(j*.4)*.08),zt.hdZ);let dn=Rt?1:1-Math.exp(-(yt?16:8)*L),Bt=yt||[0,0,0,0,0];if(J.legM.rotation.x+=(Bt[0]-J.legM.rotation.x)*dn,J.kneeM.rotation.x+=(Bt[1]-J.kneeM.rotation.x)*dn,J.legO.rotation.x+=(Bt[2]-J.legO.rotation.x)*dn,J.kneeO.rotation.x+=(Bt[3]-J.kneeO.rotation.x)*dn,J.legM.rotation.z+=(-Bt[4]-J.legM.rotation.z)*dn,J.legO.rotation.z+=((Bt[5]??Bt[4])-J.legO.rotation.z)*dn,J.orb){let He=J.orb;nn?He.position.set(-.26,.42+Math.sin(j*2)*.03,.34):He.position.set(-.3,.52+Math.sin(j*2)*.03,.12),He.rotation.y=j}J.aura&&(J.aura.rotation.z=j*.5,J.aura.material.opacity=.42+Math.sin(j*2.2)*.14,J.auraCol.material.opacity=.08+Math.sin(j*1.7)*.03);{let He=nn&&!$t&&!le&&!Y.riding&&!Y.down&&!nt&&!(qn==="aion"&&Je&&se>.9)?Je?.5:.92:0;if(un+=(He-un)*(1-Math.exp(-($t?40:10)*L)),nn)for(let vt of gt)vt.hand&&!vt.orb&&wi[vt.type]&&vt.g.quaternion.copy(Gi.setFromAxisAngle(pi,un*wi[vt.type])).multiply(vt.H.q)}for(let He of z)He(j);Dt&&(Yt.visible=le||i.wings.ground!==!1,Yt.visible&&Dt(j,le?1:0));for(let He=0;He<St.length;He++){let vt=St[He];if(vt.visible=he,he){let rn=1+.28*Math.sin(j*13+He*1.9)+.14*Math.sin(j*21+He),jn=Math.min(1,se/2);vt.scale.set(.04,(.075+jn*.04)*rn,.04),vt.rotation.x=-.1-jn*.45}}let zn=Ct&&ie==="digne";if(Ot.visible=zn,zn){let He=Ot.children;He[0].material.opacity=.13+Math.sin(j*5)*.05,He[0].scale.set(1+Math.sin(j*7)*.04,1,1+Math.sin(j*7)*.04);for(let vt=1;vt<=9;vt++){let rn=(j*.9+vt*.37)%1,jn=vt*2.4+j*.6;He[vt].position.set(Math.cos(jn)*.44,rn*2.2,Math.sin(jn)*.44),He[vt].scale.y=.6+rn}He[1].material.opacity=.5+Math.sin(j*6)*.2,He[10].rotation.y=-j,He[10].scale.setScalar(1+Math.sin(j*5)*.06)}let ai=lt.userData.blink;ai&&(Xt-=L,Xt<0&&(ai(Xt>-.11),Xt<=-.11&&(Xt=2.2+Math.random()*4)))}}}function Od(i,e,t={}){let n=new Gs({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=tn,n.toneMapping=Ni,n.shadowMap.enabled=!0,n.shadowMap.type=Ma;let s=new ws,r=new bs(n);s.environment=r.fromScene(new Dr,.04).texture,r.dispose();let a=new Cn(28,1,.1,50);s.add(new Cr(16777215,9078440,1.15));let o=new Ss(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let c=new Ss(58879,1.1);c.position.set(-3,2,-3),s.add(c);let h=new Ss(10185727,.9);h.position.set(3,1.5,-3),s.add(h);let u=document.createElement("canvas");u.width=u.height=256;let f=u.getContext("2d"),p=f.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=p,f.fillRect(0,0,256,256),f.strokeStyle="rgba(0,240,255,.5)",f.lineWidth=2,f.beginPath(),f.arc(128,128,84,0,7),f.stroke(),f.strokeStyle="rgba(0,240,255,.2)",f.beginPath(),f.arc(128,128,108,0,7),f.stroke();let d=new Fe(new Bi(1.5,48),new Gt({map:new Wn(u),transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,s.add(d);let x=new Fe(new Bi(1.5,32),new Go({opacity:.45}));x.rotation.x=-Math.PI/2,x.position.y=.002,x.receiveShadow=!0,s.add(x);let y=new _t;s.add(y);let g=null,m=null,_=t.zoom||"body",v=t.yaw??-.35,E=null,z=0,P=!1,I=!!t.walk,U={y:.9,d:4.6};function S(b){g&&(y.remove(g.group),Li(g.group)),m&&(y.remove(m.group),Li(m.group),m=null),g=Rs(b),y.add(g.group),b.armed&&g.setArmed(!0),b.mount&&Hi[b.mount]?(m=Hi[b.mount].make(),el(m.group),y.add(m.group),g.group.position.set(0,m.seat.y-g.seatDrop,m.seat.z),g.wide=m.wide):g.group.position.set(0,0,0)}S(e);function A(){let b=i.clientWidth||300,Z=i.clientHeight||400;(i.width!==Math.round(b*n.getPixelRatio())||i.height!==Math.round(Z*n.getPixelRatio()))&&(n.setSize(b,Z,!1),a.aspect=b/Z,a.updateProjectionMatrix())}let H=b=>{E={x:b.clientX,yaw:v},z=performance.now(),i.setPointerCapture&&i.setPointerCapture(b.pointerId)},G=b=>{E&&(v=E.yaw+(b.clientX-E.x)*.012,z=performance.now())},te=()=>{E=null};i.addEventListener("pointerdown",H),i.addEventListener("pointermove",G),i.addEventListener("pointerup",te),i.addEventListener("pointercancel",te),i.style.touchAction="pan-y";let N=performance.now();function M(b){if(P)return;requestAnimationFrame(M);let Z=Math.min(.05,(b-N)/1e3);if(N=b,!i.isConnected||i.offsetParent===null)return;A(),t.spin&&_!=="face"&&!E&&b-z>2500&&(v+=Z*.25),y.rotation.y=v;let J=g.height+(m?m.seat.y-g.seatDrop:0),Q=a.aspect,we=Math.max(J,1.8),be=g.scale||1,ke=_==="face"?{y:J-.15*be,d:1.12*Math.max(.75,be)/Math.min(1,Q*.9)}:m?{y:J*.5,d:Math.max(J*2.6,3.4/Math.min(1,Q*1.2))}:{y:we*.5,d:we*2.35/Math.min(1,Q*1.9)};U.y+=(ke.y-U.y)*Math.min(1,Z*6),U.d+=(ke.d-U.d)*Math.min(1,Z*6),a.position.set(0,U.y+(_==="face"?.02:.25),U.d),a.lookAt(0,U.y,0),t.freeze||(g.update(Z,{speed:I&&!m?2:0,riding:!!m,wide:g.wide}),m&&m.update(Z,I?.8:0)),n.render(s,a)}return requestAnimationFrame(M),{set:S,setZoom(b){_=b},setArmed(b){g&&g.setArmed(b)},play(b,Z,J,Q){g&&(g.setArmed(!0),g.play(b,Z,J,Q))},get avatar(){return g},setWalk(b){I=b},setYaw(b){v=b,z=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){P=!0,i.removeEventListener("pointerdown",H),i.removeEventListener("pointermove",G),i.removeEventListener("pointerup",te),Li(s),n.dispose()}}}var ol={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U1=new Er(-1,1,1,-1,0,1),oh=class extends Zt{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},k1=new oh,Cs=class{constructor(e){this._mesh=new Fe(k1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ll=class extends fi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Es.clone(e.uniforms),this.material=new wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ea=class extends fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},cl=class extends fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ll(ol),this.copyPass.material.blending=Oi,this.clock=new qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ea!==void 0&&(a instanceof Ea?n=!0:a instanceof cl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ul=class extends fi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Nd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hr=class i extends fi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(r,a,{type:Ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Kn(r,a,{type:Ri});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Kn(r,a,{type:Ri});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Nd;this.highPassUniforms=Es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ol;this.copyUniforms=Es.clone(u.uniforms),this.blendMaterial=new wn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Vn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new Cs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new wn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Hr.BlurDirectionX=new Ce(1,0);Hr.BlurDirectionY=new Ce(0,1);var Fd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var dl=class extends fi{constructor(){super();let e=Fd;this.uniforms=Es.clone(e.uniforms),this.material=new Vo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Cs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Aa=[1,3,6,10,20],O1={assassin:1.1,gladiateur:1.09,sorcier:1.08,pistolero:.99,rodeur:.98,spiritualiste:.97,barde:.95,peintre:.95},Bd=i=>O1[i]||.9,lh={assassin:1.4,gladiateur:1.35,sorcier:1.35},Hd=120,Gd=7,ch=.12,hh={templier:1.012,gladiateur:1.027,rodeur:1.046,assassin:.966,sorcier:1.027,spiritualiste:1.024,clerc:1.027,aede:1.017,pistolero:.982,ethertech:.99,peintre:1.021,barde:1.012,"templier:epee":1.012,"gladiateur:guisarme":1.027,"rodeur:arc":1.046,"assassin:dague+dague":.899,"assassin:epee+dague":.92,"sorcier:orbe":1.027,"spiritualiste:orbe":1.024,"clerc:baton":1.027,"aede:baton":1.017,"pistolero:pistolet+pistolet":.982,"ethertech:lamecle":.99,"peintre:anneaux":1.021,"templier:espadon":1.008,"gladiateur:espadon":.997,"rodeur:dague+epee":.984,"assassin:dague+epee":.952,"assassin:epee+epee":.889,"sorcier:grimoire":1.027,"spiritualiste:grimoire":1.024,"clerc:masse":1.036,"aede:masse":1.058,"pistolero:repercuteur":1.016,"barde:harpe":1.012},Ra=[{id:"feu",name:"Esprit de feu",color:16742954,hp:4,mult:.9,iv:1.2,aoe:3.6,sc:1},{id:"terre",name:"Esprit de terre",color:11569738,hp:10,mult:1.05,iv:1.4,aoe:3,sc:1.25,taunt:28,cc:{slow:[.3,2]}},{id:"vent",name:"Esprit de vent",color:10217680,hp:3,mult:.3,iv:.4,aoe:2.6,sc:.9},{id:"eau",name:"Esprit d\u2019eau",color:4892927,hp:4,mult:.75,iv:1,aoe:2.8,sc:1,heal:2}],Gr=i=>i.busy??(i.cast??.25)+.2+(i.dmg&&i.dmg.hits>1?(i.dmg.hits-1)*(i.dmg.gap||.15):0),Ta={dague:{spd:1.2,hits:1,crit:.1,cdm:2.3,var:.03,reach:2.1},epee:{spd:1.4,hits:2,crit:.05,cdm:2.1,var:.1,reach:2.6},masse:{spd:1.5,hits:2,crit:.01,cdm:2.1,var:.1,reach:2.5},espadon:{spd:2.4,hits:3,crit:.05,cdm:1.85,var:.06,reach:3.4,kd:.25},guisarme:{spd:2.8,hits:4,crit:.05,cdm:1.85,var:.25,reach:3.9,kd:.45},baton:{spd:2,hits:3,crit:.05,cdm:1.85,var:.1,reach:3.3,kd:.25},lamecle:{spd:2.4,hits:3,crit:.05,cdm:1.5,var:.1,reach:2.8,kd:.25},anneaux:{spd:2,hits:2,crit:.05,cdm:1.85,var:.06,range:15},arc:{spd:2.4,hits:2,crit:.05,cdm:1.85,var:.1,range:25,kb:2.5},orbe:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.18,range:15},grimoire:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.06,range:25},pistolet:{spd:1.8,hits:1,crit:.05,cdm:2.1,var:.06,range:15},repercuteur:{spd:2.8,hits:1,crit:.05,cdm:1.5,var:.18,range:25},harpe:{spd:2.4,hits:1,crit:.05,cdm:1.5,var:.1,range:25},poing:{spd:1.4,hits:1,crit:0,cdm:1.5,var:.1,reach:1.9}},N1=1/6,F1=1,ss={crit:.5,aspd:.5,dodge:.3,parry:.4,block:.5},Vd={espadon:1,guisarme:1,baton:1},B1={arc:"bow",pistolet:"shoot",repercuteur:"shoot",harpe:"strum",orbe:"cast",grimoire:"cast"};function Wd(i,e,t){let n=Ta[e]||Ta.poing,s=t&&t!=="bouclier"&&Ta[t]&&!n.range&&!Vd[e]?Ta[t]:e==="pistolet"&&t==="pistolet"?Ta.pistolet:null,r=Xd(i,e||"poing",n,!!s,t==="bouclier"),a=[1];s&&a.push(F1);for(let h=1;h<n.hits+(s?s.hits-1:0);h++)a.push(.1);let o=a.reduce((h,u)=>h+u,0),c=r.basic;return c.dur=n.spd*N1*(c.castK||1),c.seq=a,c.F=o,c.mult=c.rate*c.dur/o,c.kind==="melee"?c.reach=(n.reach||2.4)+(c.reachPlus||0):n.range&&!c.range&&(c.range=n.range),r.W=n,r.var=n.var,r.ref={crit:.05+n.crit,cdm:n.cdm},r.id=i+":"+(e||"poing")+(s?"+"+t:""),r}function Xd(i,e,t,n,s){let r=!!Vd[e],a=!!t.range,o=B1[e]||"slash",c=r?"heavy":"slash",h=(u,f)=>({name:u,ult:2,exec:1,cast:.5,busy:.95,lock:.8,cc:f});switch(i){case"templier":return{role:"Tank",melee:!0,sustain:!0,passive:{guard:.35,block:s?.25:0},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3,arc:r?1.45:1.3},skills:[{name:"Capture",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,kd:1.5}},{name:"Choc du bouclier",cd:10,anim:"heavy",cast:.3,dmg:{kind:"melee",mult:1.6,r:4.2,arc:1.6},cc:{kd:2.5}},{name:"Brise-armure",cd:14,anim:"slash",cast:.25,dmg:{kind:"melee",mult:1,r:4,arc:1.6},cc:{weak:[.3,8],aspd:[.3,8]}},{name:"Rempart inviolable",ult:1,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:3,r:7},cc:{kd:2},self:{inv:6,heal:25}},h("Ch\xE2timent",{kd:3})]};case"gladiateur":return{role:"Combattant de zone",melee:!0,sustain:!0,passive:{kdOnCrit:1.5,guard:.15},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3.1,arc:r?1.9:1.6},skills:[{name:"Encha\xEEnement",cd:7,anim:"spin",cast:.12,turns:2,dmg:{kind:"around",mult:[1.6,2.2,3.6],hits:3,gap:.28,r:5.2}},{name:"Onde entravante",cd:9,anim:"slam",cast:.34,lock:.3,dmg:{kind:"around",mult:2.6,r:7.5},cc:{slow:[.5,5]}},{name:"Posture de rage",cd:20,anim:"castUp",cast:.3,self:{atk:[.35,10]}},{name:"Tourbillon de guerre",ult:1,anim:"spin",cast:.12,turns:3,dmg:{kind:"around",mult:1.1,hits:5,gap:.17,r:6.5},self:{inv:1}},h("Ex\xE9cution")]};case"rodeur":return{role:"Archer",melee:!a,sustain:!a,basic:a?{kind:"shot",anim:o,hit:.58,rate:2.5,proj:"arrow",speed:60}:{kind:"melee",anim:c,hit:.5,rate:2.5,arc:1.3},skills:[{name:"Pi\xE8ge \xE0 pointes",cd:10,anim:"cast",cast:.2,special:"trap",dmg:{mult:2,r:4},cc:{root:4,slow:[.4,6],sil:4}},{name:"Tir de pr\xE9cision",cd:14,anim:o,cast:.3,dmg:{kind:"shot",mult:4.2,crit:1,pierce:1,size:1.8,proj:a?"arrow":"bolt",speed:70}},{name:"Camouflage",cd:16,anim:"cast",cast:.1,busy:.2,self:{stealth:[4,2.2],aspd:[.3,8]}},{name:"Pluie de fl\xE8ches",ult:1,anim:o,cast:.4,dmg:{kind:"zone",mult:.75,hits:8,gap:.22,r:6},cc:{slow:[.5,4]}},h("Fl\xE8che du silence",{sil:6})]};case"assassin":return{role:"Furtif",melee:!0,sustain:!0,passive:{dodge:.2,back:{crit:.25,cdm:.5}},basic:{kind:"melee",anim:"slash",hit:.5,rate:3.1,arc:1.2,rune:1},skills:[{name:"Embuscade",cd:6,anim:"slash",cast:.12,move:"tp",dmg:{kind:"target",mult:3.2,range:22,aoe:4},cc:{stun:1.5},self:{atk:[.25,3]},chain:{name:"Balayage",anim:"spin",cast:.1,dmg:{kind:"around",mult:1.8,r:4.8},cc:{kd:1.5}}},{name:"Frappe runique",cd:9,anim:"spin",cast:.1,dmg:{kind:"around",mult:1.1,hits:3,gap:.14,r:4.8},cc:{stun:1,runes:1},chain:{name:"Explosion de runes",anim:"slam",cast:.15,special:"runes",dmg:{kind:"around",mult:1.2,per:.6,r:6}}},{name:"Dissimulation",cd:18,anim:"cast",cast:.1,busy:.2,self:{stealth:[8,4],reset:1}},{name:"Danse des mille lames",ult:1,anim:"spin",cast:.1,turns:3,dmg:{kind:"around",mult:.85,hits:6,gap:.14,r:5.5},cc:{stun:.8},self:{inv:1.2}},h("Assassinat",{stun:2})]};case"sorcier":return{role:"Mage de destruction",melee:!1,basic:{kind:"shot",anim:"cast",castK:2,hit:.62,rate:3.1,proj:"bolt",speed:30,aoe:2.6,size:1.5,slowSelf:.35},skills:[{name:"Sommeil",cd:12,anim:"cast",cast:.35,area:{kind:"zone",r:4.5},cc:{sleep:6},color:12167423},{name:"Racines de glace",cd:9,anim:"cast",cast:.45,lock:.4,dmg:{kind:"zone",mult:3.4,r:6},cc:{root:4,slow:[.5,6],sil:4},color:9428223},{name:"M\xE9tamorphose",cd:16,anim:"cast",cast:.4,area:{kind:"target"},cc:{tree:5},color:9166954},{name:"M\xE9t\xE9ore",ult:1,anim:"castUp",cast:1.1,lock:1.1,meteor:1,dmg:{kind:"zone",mult:6,r:7}},h("N\xE9ant")]};case"spiritualiste":return{role:"Invocateur",melee:!1,basic:{kind:"shot",anim:"cast",hit:.5,rate:1.4,proj:"bolt",speed:32,dot:[.8,8]},skills:[{name:"Esprit \xE9l\xE9mentaire",cd:10,anim:"castUp",cast:.4,special:"spirit"},{name:"Peur",cd:12,anim:"cast",cast:.35,area:{kind:"around",r:8},cc:{fear:4}},{name:"Absorption",cd:10,anim:"cast",cast:.35,dmg:{kind:"target",mult:1.6,steal:60,range:26},cc:{sap:[.3,8]},self:{shield:[20,8]}},{name:"Fureur \xE9l\xE9mentaire",ult:1,anim:"castUp",cast:.5,special:"enrage",eq:6,dmg:{kind:"zone",mult:3,r:6}},h("Marche des ombres",{fear:3})]};case"clerc":return{role:"Soigneur",melee:!1,passive:{guard:.2,rez:90},basic:{kind:"shot",anim:"cast",hit:.5,rate:3,proj:"bolt",speed:32,range:20,aoe:2.6},skills:[{name:"Soin \xE9clair",cd:4,anim:"cast",cast:.1,busy:.25,self:{heal:25,hot:[3,6]}},{name:"Ch\xE2timent paralysant",cd:10,anim:"cast",cast:.35,dmg:{kind:"zone",mult:1.7,r:4.5},cc:{para:3}},{name:"Grande gu\xE9rison",cd:12,anim:"castUp",cast:1.3,lock:1.3,self:{heal:70}},{name:"Jugement divin",ult:1,anim:"castUp",cast:.7,lock:.7,dmg:{kind:"zone",mult:5,r:7},cc:{root:4}},{name:"Barri\xE8re sacr\xE9e",ult:2,anim:"castUp",cast:.3,self:{inv:6,heal:100,guard:[.5,12]}}]};case"aede":return{role:"Soutien",melee:!0,sustain:!0,passive:{atk:.1,regen:.01,mantra:1},basic:{kind:"melee",anim:"heavy",hit:.56,rate:2.5,arc:1.8,reachPlus:r?0:.5},skills:[{name:"Jugement in\xE9luctable",cd:8,anim:"cast",cast:.25,dmg:{kind:"shot",mult:1.5,proj:"bolt",range:22,speed:40},cc:{stun:2.5}},{name:"Parole de vie",cd:5,anim:"cast",cast:.1,busy:.25,self:{heal:18}},{name:"Chant d\u2019inspiration",cd:16,anim:"castUp",cast:.3,self:{crit:[.4,10],aspd:[.2,10]},area:{kind:"around",r:9},cc:{aspd:[.4,8]}},{name:"Onde de choc",ult:1,anim:"slam",cast:.4,lock:.5,dmg:{kind:"around",mult:4.5,r:6.5},cc:{kd:2}},{name:"Mantra de victoire",ult:2,anim:"castUp",cast:.3,self:{atk:[.5,8],crit:[1,8],heal:40}}]};case"pistolero":return{role:"Tireur mobile",melee:!1,basic:e==="repercuteur"?{kind:"shot",anim:"shoot",hit:.36,rate:3,proj:"shell",speed:36,aoe:2.6,bounce:1}:{kind:"shot",anim:"shoot",hit:.34,rate:2.8,proj:"bullet",speed:85,bounce:2},skills:[{name:"Canon magique",cd:7,anim:o,cast:.3,lock:.25,dmg:{kind:"shot",mult:4.2,proj:"shell",aoe:3.8,size:2,speed:36},cc:{stun:1.5}},{name:"Tir entravant",cd:9,anim:o,cast:.2,dmg:{kind:"zone",mult:1.1,r:5},cc:{slow:[.6,5],root:2}},{name:"Saut de recul",cd:6,anim:"flip",cast:.05,move:"back",dmg:{kind:"shot",mult:.8,hits:3,gap:.08,proj:"bullet",speed:85},self:{inv:.5,atk:[.2,4]}},{name:"D\xE9luge de plomb",ult:1,anim:o,cast:.1,dmg:{kind:"shot",mult:.55,hits:12,gap:.07,proj:"bullet",speed:85}},h("Tir fatal")]};case"ethertech":return{role:"Pilote de Mecha",melee:!0,sustain:!0,basic:{kind:"melee",anim:"slash",hit:.5,rate:2.8,arc:1.3},mecha:{hp:2.5,dur:20,basic:{kind:"melee",anim:"punch",dur:.46,hit:.5,mult:1.7,reach:4.6,arc:1.7,mech:1,seq:[1],F:1}},skills:[{name:"Mecha",cd:12,anim:"castUp",cast:.5,special:"mecha"},{name:"Grappin",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,stun:1.5}},{name:"Champ d\u2019entrave",cd:10,anim:"slam",cast:.3,dmg:{kind:"around",mult:1.3,r:6.5},cc:{root:3}},{name:"Salve de missiles",ult:1,anim:"castUp",cast:.4,dmg:{kind:"zone",mult:1,hits:5,gap:.16,r:5.5},cc:{stun:1}},h("Annihilation",{stun:2})]};case"barde":return{role:"Musicien",melee:!1,basic:{kind:"shot",anim:"strum",hit:.45,rate:1.75,proj:"wave",speed:24,thru:1,note:1},skills:[{name:"Accord final",cd:7,anim:o,cast:.25,special:"notes",dmg:{kind:"target",mult:1.2,range:24}},{name:"Berceuse",cd:12,anim:o,cast:.4,area:{kind:"around",r:7},cc:{sleep:5},color:12167423},{name:"M\xE9lodie de vie",cd:9,anim:o,cast:.3,self:{heal:22,gauge:30,shield:[15,8]},area:{kind:"around",r:8},cc:{slow:[.4,5]}},{name:"Symphonie",ult:1,anim:"castUp",cast:.5,eq:3,dmg:{kind:"around",mult:4,r:8},cc:{notes:5}},h("Requiem")]};case"peintre":return{role:"Contr\xF4le de zone",melee:!1,basic:{kind:"shot",anim:"slash",hit:.5,rate:2.35,proj:"paint",speed:32,aoe:1.2,every:{n:3,k:2,lock:.3}},skills:[{name:"Marque de couleur",cd:8,anim:"slash",cast:.2,dmg:{kind:"target",mult:1,range:16},cc:{weak:[.35,8],slow:[.3,5]}},{name:"Lien gravitationnel",cd:12,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:1.2,r:9},cc:{pull:1,root:2.5}},{name:"Toile d\u2019absorption",cd:14,anim:"cast",cast:.2,busy:.3,self:{absorb:[.4,8]}},{name:"Fr\xE9n\xE9sie chromatique",ult:1,anim:"castUp",cast:.4,eq:3,dmg:{kind:"around",mult:3,r:7},cc:{para:2},self:{aspd:[.4,10],crit:[.4,10]}},h("Chef-d\u2019\u0153uvre",{para:3})]}}return Xd(a?"rodeur":"gladiateur",e,t,n,s)}function qd(i,e=30){let t=Math.min(ss.crit,i.ref.crit),n=i.ref.cdm,s=i.passive||{},r=.01,a=0,o=0,c=0,h=0,u=0,f=0,p=-1,d=0,x=null,y=0,g=null,m=0,_=[0,0,0],v=[0,0],E=[0,0],z=[0,0],P=[0,0],I={},U=G=>a<G[1]?G[0]:0,S=(G,te={})=>{let N=G*(1+(s.atk||0)+U(v))*(1+U(P)),M=!!te.crit;d&&!te.pet&&(N*=d,M=!0,d=0),N*=M?n:1+Math.min(ss.crit,t+U(E))*(n-1),o+=N},A=G=>{G&&(G.atk&&(v[0]=G.atk[0],v[1]=a+G.atk[1]),G.crit&&(E[0]=G.crit[0],E[1]=a+G.crit[1]),G.aspd&&(z[0]=G.aspd[0],z[1]=a+G.aspd[1]),G.stealth&&(d=G.stealth[1]),G.reset!=null&&(_[G.reset-1]=0))},H=G=>{G&&(G.weak&&(P[0]=G.weak[0],P[1]=a+G.weak[1]),G.dot&&(I[G.key||"x"]=[G.dot[0],a+G.dot[1]]),G.notes&&(u=Math.min(5,u+G.notes),f=a+8))};for(;a<e;){for(let G in I)a<I[G][1]&&(o+=I[G][0]*(1+U(P))*(1+(s.atk||0))*(1+t*(n-1))*r);if(u&&a<f&&(o+=u*ch*(1+U(P))*(1+t*(n-1))*r),x&&(y+=r,y>=x.iv&&(y-=x.iv,S(x.mult,{pet:1}))),a>=c){let G=-1;if(!g){for(let te=0;te<3;te++)if(i.skills[te]&&_[te]<=a){G=te;break}}if(g||G>=0){let te=g||i.skills[G],N=te.dmg;if(c=a+Gr(te),g?g=null:(_[G]=a+te.cd,te.chain&&(g=te.chain)),te.special==="spirit"?(x=Ra[0],y=0):te.special==="mecha"&&(a>=p&&(p=a+i.mecha.dur),_[G]=p+te.cd),N){let M=N.hits||1,b=0;te.special==="notes"&&(b=.7*u,u=0),te.special==="runes"&&(b=N.per*m,m=0);for(let Z=0;Z<M;Z++)S((Array.isArray(N.mult)?N.mult[Z]:N.mult)+(Z===0?b:0),{crit:N.crit})}te.cc&&te.cc.runes&&(m=Math.min(5,m+te.cc.runes*(N&&N.hits||1))),H(te.cc),A(te.self)}else{let te=a<p?i.mecha.basic:i.basic,N=++h,M=te.mult*te.F,b=te.dur*(1-Math.min(ss.aspd,U(z)));te.every&&N%te.every.n===0&&(M*=te.every.k,b+=te.every.lock*.5),c=a+b,S(M),te.dot&&(I.basic=[te.dot[0],a+te.dot[1]]),te.note&&(u=Math.min(5,u+1),f=a+8),te.rune&&(m=Math.min(5,m+1))}}a+=r}return o}var Yd=i=>{let e=i.dmg;if(!e)return i.eq||0;let t=e.hits||1,n=0;for(let s=0;s<t;s++)n+=Array.isArray(e.mult)?e.mult[s]:e.mult;return n+(i.eq||0)};var st={x:-200,z:70,r:22.4,wall:33.6,gate:.17},uh={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},dh=[16734842,4704511,16765514,9166954],Zd={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.6,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.7,rest:1,h:2.05},duel:{name:"Duelliste d\u2019ombre",hp:150,atk:13,spd:5.3,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},pvp:{name:"Daeva d\u2019ombre",hp:165,atk:13,spd:5.4,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},swift:{name:"Ombre vive",hp:34,atk:5,spd:7.6,range:2,rad:.45,wind:.42,rest:.45,h:1.9},leap:{name:"Ombre bondissante",hp:52,atk:9,spd:5.6,range:2.2,rad:.7,wind:.6,rest:1,h:1.3},archer:{name:"Ombre tireuse",hp:40,atk:7,spd:4.6,range:15,rad:.45,wind:.75,rest:1.1,h:2},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},H1=[[36,252,"wolf",2,1],[-34,318,"swift",3,4],[92,296,"brute",4,1],[150,-246,"pvp",4,1],[58,-292,"leap",5,4],[-176,-160,"archer",6,4],[-300,110,"brute",7,1],[262,130,"pvp",3,1],[-120,240,"shade",5,5],[330,-120,"pvp",8,1]],Vr={templier:{name:"Templier d\u2019ombre",main:"epee",off:"bouclier",hp:1.4,atk:.85,range:2.6,wind:1,rest:1,sp:"bash",block:.35},gladiateur:{name:"Gladiateur d\u2019ombre",main:"guisarme",hp:1.15,atk:1.05,range:3.5,wind:1.15,rest:1.1,sp:"whirl"},assassin:{name:"Assassin d\u2019ombre",main:"dague",off:"dague",hp:.85,atk:.8,spd:1.2,range:2.1,wind:.65,rest:.55,sp:"blink"},rodeur:{name:"R\xF4deur d\u2019ombre",main:"arc",hp:.85,atk:.9,range:18,wind:1.05,rest:1.1,ranged:"arrow",kite:1,sp:"trap"},sorcier:{name:"Sorcier d\u2019ombre",main:"orbe",hp:.8,atk:1.15,range:16,wind:1.5,rest:1.1,ranged:"bolt",kite:1,sp:"meteor"},spiritualiste:{name:"Spiritualiste d\u2019ombre",main:"grimoire",hp:.85,atk:.8,range:15,wind:1.2,rest:1.1,ranged:"bolt",kite:1,sp:"summon"},clerc:{name:"Clerc d\u2019ombre",main:"masse",off:"bouclier",hp:1.15,atk:.8,range:13,wind:1.1,rest:1.1,ranged:"bolt",sp:"heal"},aede:{name:"A\xE8de d\u2019ombre",main:"baton",hp:1.15,atk:.9,range:3.2,wind:1.05,rest:1,sp:"stun"},pistolero:{name:"Pistolero d\u2019ombre",main:"pistolet",off:"pistolet",hp:.85,atk:.55,spd:1.1,range:14,wind:.6,rest:.45,ranged:"bullet",sp:"roll"},ethertech:{name:"\xC9thertech d\u2019ombre",main:"lamecle",hp:1.5,atk:1.05,range:3,wind:1.2,rest:1.15,sp:"grab"},barde:{name:"Barde d\u2019ombre",main:"harpe",hp:.85,atk:.85,range:16,wind:1.1,rest:1.1,ranged:"wave",kite:1,sp:"slow"},peintre:{name:"Peintre d\u2019ombre",main:"anneaux",hp:.95,atk:.9,range:11,wind:1,rest:1,ranged:"paint",sp:"slow"}},Jd=["gladiateur","rodeur","templier","sorcier","assassin","clerc","pistolero","spiritualiste","aede","barde","ethertech","peintre"],G1=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],V1=new W(0,1,0),rs=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function Kd(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:c,toast:h,cb:u}=i,f=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.cls&&s.cls.id||"",d=uh[p]||8386303,x=s.hero&&s.hero.main&&s.hero.main.type,y=s.hero&&s.hero.off&&s.hero.off.type,g=Wd(p,x,y),m=g.passive||{},_=g.skills;f.ref&&(f.crit=g.ref.crit,f.critDmg=g.ref.cdm);let v=Bd(p),E=Hd*v/qd(g)*(hh[g.id]||hh[p]||1),z=f.atk*E,P=_[3]?Gd*v*(lh[p]||1)/(Yd(_[3])*E):1,I=[!1].concat(_.map((l,T)=>(s.level||1)<Aa[T])),U=g.basic,S=U.kind==="melee",A=p==="assassin"||p==="pistolero",H=Math.min(1,f.cdr||0),G=1+(f.spd||0),te=f.cast?1/G:1,N=(f.hpPct||0)/100,M={hp:f.hp,max:f.hp,shield:0,shieldT:0,charge:0,cds:[0,0,0,0,0,0],cdMax:[1,1,1,1,1,1],busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0,dealt:0,atkB:0,atkT:0,critB:0,critT:0,aspdB:0,aspdT:0,guardB:0,guardT:0,absorbB:0,absorbT:0,hot:0,hotT:0,stealthT:0,stealthK:1,rezCd:0,stunT:0,rootT:0,eslowT:0,eslowK:0,chain:[null,null,null,null,null,null],manual:!1,slowK:1,slowT:0,mecha:null,focus:null,focusT:0,spirit:-1},b=Math.min(60,Math.max(0,s.regen||0)),Z=[],J=[],Q=[],we=[],be=[],ke=[],ee={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},re={shake:0,held:!1,warnT:0,auto:!1,lock:!1,lockE:null,autoMove:null,enemies:Z,arena:ee,pl:M,allies:be,kit:g,norm:E},ze=(l,T)=>we.push({t:l,fn:T}),Ie=(l,T,w,O)=>Math.hypot(l-w,T-O),Ze=(l,T)=>Math.atan2(l-t.x,T-t.z),dt=(l,T)=>Ie(l,T,st.x,st.z)<st.r,Be={arc:new _i(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new _i(.84,1,48).rotateX(-Math.PI/2),tube:new On(1,1,1,24,1,!0).translate(0,.5,0),ball:new Mi(1,14,10),arrow:new Sn(.04,1,6).rotateX(Math.PI/2),tracer:new On(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let l in Be)Be[l].userData.shared=!0;let qe=(l,T=.9,w=!0)=>new Gt({color:l,transparent:!0,opacity:T,side:sn,blending:w?Vn:ps,depthWrite:!1,fog:!1});function lt(l,T,w){return e.add(l),Q.push({obj:l,t:0,dur:T,upd:w}),l}function q(l){e.remove(l),l.traverse(T=>{T.material&&T.material.dispose(),T.geometry&&!T.geometry.userData.shared&&T.geometry.dispose()})}function Le(l,T,w,O,K,V,F,pe=.24){let ge=new _t;ge.position.set(l,T,w),ge.rotation.y=O;let oe=new Fe(Be.arc,qe(F));oe.rotation.z=K,ge.add(oe),lt(ge,pe,ye=>{oe.material.opacity=.95*(1-ye),oe.scale.setScalar(V*(.82+ye*.3)),oe.rotation.y=(ye-.5)*.9})}function ae(l,T,w,O,K,V,F=.45,pe=.9){let ge=new Fe(Be.ring,qe(O,pe));ge.position.set(l,T+.1,w),lt(ge,F,oe=>{ge.scale.setScalar(K+(V-K)*(1-(1-oe)*(1-oe))),ge.material.opacity=pe*(1-oe*oe)})}function Te(l,T,w,O,K,V,F=.5){let pe=new Fe(Be.tube,qe(O,.55));pe.position.set(l,T,w),lt(pe,F,ge=>{let oe=K*(1-ge*.55);pe.scale.set(oe,V*Math.min(1,ge*5+.1),oe),pe.material.opacity=.6*(1-ge)})}function Me(l,T,w,O,K,V=.25){let F=new Fe(Be.ball,qe(O,.7));F.position.set(l,T,w),lt(F,V,pe=>{F.scale.setScalar(K*(.4+pe*.8)),F.material.opacity=.7*(1-pe)})}function Re(l,T,w,O,K=12,V=5,F=.5){let pe=new Float32Array(K*3),ge=new Float32Array(K*3);for(let Ne=0;Ne<K;Ne++){let at=Math.random()*6.2832,Et=Math.random()*1.3-.2,xt=V*(.4+Math.random()*.8);ge[Ne*3]=Math.cos(at)*Math.cos(Et)*xt,ge[Ne*3+1]=Math.sin(Et)*xt+1.5,ge[Ne*3+2]=Math.sin(at)*Math.cos(Et)*xt,pe[Ne*3]=l,pe[Ne*3+1]=T,pe[Ne*3+2]=w}let oe=new Zt;oe.setAttribute("position",new bn(pe,3));let ye=new zo(oe,new pa({color:O,size:c?.2:.28,transparent:!0,opacity:1,blending:Vn,depthWrite:!1,fog:!1}));ye.frustumCulled=!1;let De=0;lt(ye,F,Ne=>{let at=(Ne-De)*F;De=Ne;for(let Et=0;Et<K*3;Et+=3)pe[Et]+=ge[Et]*at,pe[Et+1]+=ge[Et+1]*at,pe[Et+2]+=ge[Et+2]*at,ge[Et+1]-=9*at;oe.attributes.position.needsUpdate=!0,ye.material.opacity=1-Ne})}let Oe=new W;function D(l,T,w,O,K){if(Oe.set(l,T,w).project(a),Oe.z>1||Math.abs(Oe.x)>1.1)return;let V=document.createElement("span");V.className="ew-num "+(K||""),V.textContent=O,V.style.left=(Oe.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",V.style.top=(-Oe.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(V),setTimeout(()=>V.remove(),850)}let C=new Fe(Be.ball,qe(8378623,.16));C.scale.setScalar(1.25),C.visible=!1,e.add(C);let ne=new Fe(Be.ring,qe(d,.7));ne.visible=!1,e.add(ne);let ve=(()=>{let l=document.createElement("canvas");l.width=l.height=64;let T=l.getContext("2d");return T.beginPath(),T.moveTo(32,4),T.lineTo(61,58),T.lineTo(3,58),T.closePath(),T.fillStyle="#fff",T.fill(),T.lineWidth=4,T.strokeStyle="#000",T.stroke(),T.fillStyle="#000",T.fillRect(28.5,22,7,20),T.fillRect(28.5,46,7,7),new Wn(l)})();function _e(l){let T=l.barCv.getContext("2d");if(T.clearRect(0,0,64,8),T.fillStyle="rgba(0,0,0,.75)",T.fillRect(0,0,64,8),T.fillStyle=l.type==="dummy"?"#ffd479":l.boss?"#ff4d6d":"#ff8a5a",T.fillRect(1,1,62*Math.max(0,Math.min(1,l.hp/l.max)),6),l.runes){T.fillStyle="#e9ddff";for(let w=0;w<l.runes;w++)T.fillRect(3+w*7,2,4,4)}l.barTex.needsUpdate=!0}function Ee(l,T,w,O=1,K={}){let V=Zd[l],F=l==="pvp"?Vr[K.cls||Jd[Math.floor(Math.random()*12)]]:null,pe=l==="dummy"||V.boss||F?[1,1,1]:[.85+Math.random()*.35,.85+Math.random()*.3,.8+Math.random()*.4],ge=Math.pow(1.2,O-1)*(K.hpK||1)*(F?F.hp:1)*pe[0],oe={type:l,T:V,x:T,z:w,y:r(T,w),yaw:K.yaw??Math.random()*6.28,hp:Math.round(V.hp*ge),atk:V.atk*Math.pow(1.16,O-1)*(K.atkK||1)*(F?F.atk:1),def:4*Math.pow(1.15,O-1),spd:V.spd*(F&&F.spd||1)*pe[1],range:F?F.range:V.range,rad:V.rad,P:F,ranged:F?F.ranged:l==="archer"?"arrow":null,wind:(V.wind||.6)*(F?F.wind:pe[2]),rest:(V.rest||1)*(F?F.rest:pe[2]),spT:F?1+Math.random()*1.5:3+Math.random()*3,side:Math.random()<.5?1:-1,combo:0,minion:!!K.minion,state:K.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!V.boss,elite:!!V.elite,runes:0,runeT:0,tint:!1,home:[T,w],wild:K.wild||null,arena:!!K.arena,lvl:O,lunge:0,n:0,wobT:0,wT:0,rootT:0,slowT:0,slowK:0,silT:0,weakT:0,weakK:0,aspdT:0,aspdK:0,sapT:0,sapK:0,notes:0,noteT:0,noteAcc:0,kd:!1,kdCd:0,zT:0};oe.max=oe.hp;let ye=new _t;if(oe.obj=ye,l==="dummy"){let De=new pn({color:6965802,roughness:.9}),Ne=new pn({color:13481066,roughness:1}),at=new _t;oe.wob=at,ye.add(new Fe(new On(.07,.1,1,8).translate(0,.5,0),De)),at.position.y=.95,at.add(new Fe(new On(.27,.2,.78,10).translate(0,.42,0),Ne),new Fe(new Mi(.19,10,8).translate(0,.98,0),Ne),new Fe(new ti(1.15,.09,.09).translate(0,.62,0),De));let Et=new Fe(new Bi(.12,16).translate(0,.46,.262),new Gt({color:12597547}));at.add(Et),ye.add(at),ye.traverse(xt=>{xt.isMesh&&(xt.castShadow=!0)})}else if(F||l==="swift"||l==="archer"){let De=F?"#"+(uh[Object.keys(Vr).find(Ne=>Vr[Ne]===F)]||9133302).toString(16).padStart(6,"0"):l==="archer"?"#4a6a3a":"#3a5a6a";oe.av=Rs({look:{gender:Math.random()<.3?"f":"m",height:F?1.1:.95,build:F?1.05:.9,hair:Math.random()<.5?"court":"brosse"},outfit:{cut:F?"coat":"suit",c:["#15121e","#08070c",De]},armor:F?{plastron:4,casque:F.off==="bouclier"?4:void 0}:{},main:{type:F?F.main:l==="archer"?"arc":"dague",r:F?4:2},off:F&&F.off?{type:F.off,r:4}:l==="swift"?{type:"dague",r:2}:null,fx:{shadow:"#140f22",eyes:F?"#ffd24a":"#c8b6ff",lod:!0}}),oe.av.setArmed(!0),ye.add(oe.av.group),oe.model=oe.av.group,F&&(oe.name=F.name)}else if(l==="shade"||l==="champion"||l==="duel"){let De=l==="champion",Ne=l==="duel";oe.av=Rs({look:{gender:"m",height:De?1.5:Ne?1.16:1+Math.random()*.08,build:De?1.2:Ne?1.08:1,shoulders:De?1.14:Ne?1.08:1,hair:De?"brosse":"court"},outfit:{cut:De?"plate":"coat",c:Ne?["#2a1016","#12080b","#8a2a3a"]:["#1a1626","#0e0c16","#3a2a5a"]},armor:De?{casque:5,plastron:5,jambieres:5}:Ne?{plastron:4}:{},main:{type:De?"espadon":Ne?Math.random()<.5?"epee":"espadon":Math.random()<.5?"epee":"guisarme",r:De?5:Ne?4:3},fx:{shadow:De?"#2a1234":Ne?"#2c1218":"#17152c",eyes:De?"#ff4d6d":Ne?"#ffd24a":"#c8b6ff",lod:!0}}),oe.av.setArmed(!0),ye.add(oe.av.group),oe.model=oe.av.group}else{let De=Ld[l==="leap"?"wolf":l]();oe.beast=De,ye.add(De.group),oe.model=De.group,l==="leap"&&(De.group.scale.setScalar(.85),De.group.traverse(Ne=>{Ne.isMesh&&Ne.material&&Ne.material.color&&(Ne.material=Ne.material.clone(),Ne.material.color.lerp(new ot(2779738),.45))}))}if(oe.mats=[],ye.traverse(De=>{De.isMesh&&De.material&&De.material.emissive&&!oe.mats.includes(De.material)&&oe.mats.push(De.material)}),oe.mats.forEach(De=>{De.userData.e0=De.emissive.getHex(),De.userData.i0=De.emissiveIntensity}),oe.barCv=document.createElement("canvas"),oe.barCv.width=64,oe.barCv.height=8,oe.barTex=new Wn(oe.barCv),oe.bar=new Fi(new Ci({map:oe.barTex,transparent:!0,depthWrite:!1,fog:!1})),oe.bar.scale.set(oe.boss?2.6:1.3,oe.boss?.22:.14,1),oe.bar.position.y=V.h+.3,oe.bar.visible=l!=="dummy",ye.add(oe.bar),_e(oe),F||V.boss){let De=document.createElement("canvas");De.width=512,De.height=64;let Ne=De.getContext("2d"),at=oe.name||V.name,Et=F?"#"+(uh[Object.keys(Vr).find(Un=>Vr[Un]===F)]||16777215).toString(16).padStart(6,"0"):"#ff6a7a";Ne.font="700 34px Oxanium, Barlow, sans-serif",Ne.textAlign="center",Ne.textBaseline="middle",Ne.lineJoin="round",Ne.lineWidth=7,Ne.strokeStyle="rgba(0,0,0,.9)",Ne.strokeText(at,256,34),Ne.fillStyle=Et,Ne.fillText(at,256,34);let xt=new Wn(De);xt.colorSpace=tn,oe.tag=new Fi(new Ci({map:xt,transparent:!0,depthWrite:!1,fog:!1})),oe.tag.scale.set(oe.boss?4:3.4,oe.boss?.5:.42,1),oe.tag.position.y=V.h+(oe.boss?.62:.52),ye.add(oe.tag),oe.tagTex=xt}return l!=="dummy"&&(oe.warn=new Fi(new Ci({map:ve,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),oe.warn.position.y=V.h+(oe.boss?1.45:F?1.2:.95),oe.warn.visible=!1,oe.warn.renderOrder=9,ye.add(oe.warn)),ye.position.set(T,oe.y,w),ye.rotation.y=oe.yaw,e.add(ye),Z.push(oe),!K.quiet&&l!=="dummy"&&(Te(T,oe.y,w,6962431,1.2+oe.rad,6,.7),ae(T,oe.y,w,9133302,.3,2.4+oe.rad,.55)),oe}function et(l){let T=Z.indexOf(l);if(T>=0&&Z.splice(T,1),e.remove(l.obj),l.barTex.dispose(),l.tagTex&&l.tagTex.dispose(),Li(l.obj),l.wild){let w=l.wild;w.es=w.es.filter(O=>O!==l),!w.es.length&&l.state==="dead"&&(w.t=45)}}function Ge(l){l.state!=="dead"&&(bt(l),l.state="dead",l.t=0,l.hp=0,_e(l),Re(l.x,l.y+l.T.h*.5,l.z,9133302,l.boss?40:18,6,.7),ae(l.x,l.y,l.z,12167423,.4,l.boss?7:3,.6),l.boss&&(re.shake=Math.max(re.shake,.5),h(l.T.name+" terrass\xE9")))}let Ke=l=>{M.charge=Math.min(100,M.charge+l)},rt=l=>{l<=0||M.down>0||(M.hp=Math.min(M.max,M.hp+l),D(t.x,t.y+2.1,t.z,"+"+l,"heal"))},mt=()=>(m.atk||0)+(M.atkT>0?M.atkB:0),fe=(l,T,w)=>D(l.x,l.y+l.T.h+.35,l.z,T,w||"info");function bt(l){l.treeM&&(l.obj.remove(l.treeM),l.treeM.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()}),l.treeM=null,l.model&&(l.model.visible=!0))}function ht(l,T,w,O){if(l.state==="dead")return;bt(l),l.state==="leap"&&(l.hop=0),l.kind=null;let K=l.state===T;l.state=T,l.stun=Math.max(K?l.stun:0,w),l.kd=!1,fe(l,O)}function ut(l,T,w){if(!T||l.state==="dead")return;if(T.weak&&(l.weakK=T.weak[0],l.weakT=T.weak[1],fe(l,"Vuln\xE9rable")),T.dot){let K=l.dots.find(V=>V.k===w);l.dots=l.dots.filter(V=>V.k!==w),l.dots.push({k:w,v:z*(1+mt())*T.dot[0],n:T.dot[1],t:K?K.t:1})}if(T.notes&&(l.notes=Math.min(5,l.notes+T.notes),l.noteT=8),T.runes&&(l.runes=Math.min(5,l.runes+T.runes),l.runeT=10,_e(l)),l.type==="dummy")return;let O=l.boss?.5:l.elite?.75:1;if(T.pull&&!l.boss){let K=t.yaw+(Math.random()-.5)*.8,V=1.7+l.rad;Le(t.x,t.y+1.1,t.z,Ze(l.x,l.z),1.57,Ie(t.x,t.z,l.x,l.z),16777215,.25),l.x=t.x+Math.sin(K)*V,l.z=t.z+Math.cos(K)*V}if(T.kd&&(ht(l,"stun",T.kd*O,"\xC0 terre"),l.kd=!0),T.stun&&ht(l,"stun",T.stun*O,"\xC9tourdi"),T.para&&ht(l,"stun",T.para*O,"Paralys\xE9"),T.sleep&&ht(l,"sleep",T.sleep*O,"Endormi"),T.fear&&ht(l,"fear",T.fear*O,"Apeur\xE9"),T.tree)if(l.boss)ht(l,"stun",1.5,"\xC9tourdi");else{ht(l,"tree",T.tree,"M\xE9tamorphos\xE9");let K=new _t,V=new Fe(new On(.14,.2,.9,7).translate(0,.45,0),new pn({color:5913890,roughness:1})),F=new Fe(new Sn(.75,1.5,8).translate(0,1.55,0),new pn({color:5216826,roughness:1}));K.add(V,F),l.obj.add(K),l.treeM=K,l.model&&(l.model.visible=!1),Re(l.x,l.y+1,l.z,9166954,16,4,.5)}T.root&&(l.rootT=Math.max(l.rootT,T.root*O),fe(l,"Enracin\xE9"),ae(l.x,l.y,l.z,9166954,l.rad+.6,l.rad+.7,T.root*O,.8)),T.slow&&(l.slowK=T.slow[0],l.slowT=T.slow[1],fe(l,"Ralenti")),T.sil&&(l.silT=Math.max(l.silT,T.sil*O),fe(l,"Silence")),T.aspd&&(l.aspdK=T.aspd[0],l.aspdT=T.aspd[1],fe(l,"Gestes ralentis")),T.sap&&(l.sapK=T.sap[0],l.sapT=T.sap[1],fe(l,"Affaibli"))}function it(l,T,w={}){if(l.state==="dead")return 0;let O=z*(1+mt())*T*(re.avg?1:1-g.var+Math.random()*2*g.var),K=!!w.crit;if(M.stealthT>0&&!w.pet&&(O*=M.stealthK,K=!0,ft(0),fe(l,"Surprise","crit")),l.state==="sleep"&&(O*=1.5,l.state="chase",l.stun=0),l.P&&l.P.block&&l.state!=="stun"&&Math.abs(rs(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))<1.2&&Math.random()<l.P.block&&(O*=.3,fe(l,"Bloqu\xE9")),l.P&&l.P.sp==="roll"&&l.spT<=0&&l.state==="chase"){l.spT=3.5;let ge=Math.atan2(t.x-l.x,t.z-l.z)+l.side*1.57;l.x+=Math.sin(ge)*3.5,l.z+=Math.cos(ge)*3.5,ae(l.x,l.y,l.z,16777215,.3,1.4,.25,.5)}let V=!!m.back&&!w.pet&&Math.abs(rs(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))>2,F=f.critDmg+(V?m.back.cdm:0),pe=Math.min(ss.crit,f.crit+(M.critT>0?M.critB:0)+(V?m.back.crit:0));if(re.avg?O*=K?F:1+pe*(F-1):(K=K||Math.random()<pe,K&&(O*=F)),w.pierce||(O*=100/(100+l.def)),l.weakT>0&&(O*=1+l.weakK),w.hpp&&N>0&&l.type!=="dummy"&&l.hp>0&&(O+=l.hp*Math.min(.95,N)),O=Math.max(1,Math.round(O)),M.dealt+=O,l.type==="dummy"?l.wobT=.5:l.hp-=O,w.pet||(M.focus=l,M.focusT=6),l.flash=.09,_e(l),D(l.x,l.y+l.T.h*.85,l.z,(V&&K?"\u2726\u2726 ":K?"\u2726 ":"")+O,K?"crit":""),Re(l.x,l.y+l.T.h*.55,l.z,w.color||d,K?12:6,4,.35),w.acc&&(w.acc.d+=O),w.steal&&rt(Math.round(O*w.steal/100)),w.cc&&ut(l,w.cc,w.key),l.type!=="dummy"){if(K&&m.kdOnCrit&&l.kdCd<=0&&l.hp>0?(l.kdCd=4,ut(l,{kd:m.kdOnCrit})):K&&w.basic&&g.W.kd&&!M.mecha&&l.kdCd<=0&&l.hp>0&&Math.random()<g.W.kd&&(l.kdCd=4,ut(l,{kd:1.5})),K&&w.basic&&g.W.kb&&!l.boss&&l.rootT<=0){let ge=Math.atan2(l.x-t.x,l.z-t.z);l.x+=Math.sin(ge)*g.W.kb,l.z+=Math.cos(ge)*g.W.kb}if(!l.boss&&l.rootT<=0){let ge=Math.atan2(l.x-t.x,l.z-t.z),oe=w.kb??.3;l.x+=Math.sin(ge)*oe,l.z+=Math.cos(ge)*oe}l.state==="idle"&&(l.state="chase"),l.hp<=0&&Ge(l)}return O}function $e(l,T=1,w=null){if(M.down>0||M.inv>0)return;if(re.auto){D(t.x,t.y+2.1,t.z,"Esquive","info"),ae(t.x,t.y,t.z,16777215,.3,1.6,.25,.6),M.busy<=.05&&n.play("dash",.22);return}let O=Math.max(1,Math.round(l.atk*T*(l.sapT>0?1-l.sapK:1)*(.9+Math.random()*.2)*100/(100+f.def)));if(M.mecha){M.mecha.hp-=O,M.lastHit=0,D(t.x,t.y+3.4,t.z,"-"+O,"info"),re.shake=Math.max(re.shake,.12),M.mecha.hp<=0&&tt(!0);return}if(Math.random()<Math.min(ss.dodge,f.dodge+(m.dodge||0))){D(t.x,t.y+2.1,t.z,"Esquive","info");return}if(m.block&&Math.random()<Math.min(ss.block,m.block)){D(t.x,t.y+2.1,t.z,"Bloqu\xE9","info"),Me(t.x,t.y+1.1,t.z,16777215,.7,.15);return}if(O=Math.max(1,Math.round(O*(1-Math.min(.8,(m.guard||0)+(M.guardT>0?M.guardB:0))))),M.absorbT>0){let K=Math.round(O*M.absorbB);O-=K,rt(K)}if(M.shield>0){let K=Math.min(M.shield,O);if(M.shield-=K,O-=K,O<=0){D(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}if(!(O<=0)){if(M.hp-=O,M.lastHit=0,Ke(2),D(t.x,t.y+2.1,t.z,"-"+O,"hurt"),re.shake=Math.max(re.shake,.22),w){if(w.pull){let K=w.pull.yaw;t.x=w.pull.x+Math.sin(K)*2,t.z=w.pull.z+Math.cos(K)*2}w.stun&&(M.stunT=Math.max(M.stunT,w.stun),D(t.x,t.y+2.5,t.z,"\xC9tourdi","info")),w.root&&(M.rootT=Math.max(M.rootT,w.root),D(t.x,t.y+2.5,t.z,"Enracin\xE9","info")),w.slow&&(M.eslowK=w.slow[0],M.eslowT=w.slow[1],D(t.x,t.y+2.5,t.z,"Ralenti","info"))}if(n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),ze(.2,()=>o.classList.remove("ew-hit")),M.hp<=0&&m.rez&&M.rezCd<=0){M.rezCd=m.rez,M.hp=Math.round(M.max*.5),M.inv=2.5,Te(t.x,t.y,t.z,16773808,1.6,12,.9),ae(t.x,t.y,t.z,16773808,.4,5,.7),h("R\xE9surrection","De nouveau disponible dans "+m.rez+" s");return}M.hp<=0&&(M.hp=0,M.down=2.8,t.down=!0,M.queue=!1,ft(0),h("Vaincu",ee.on?"Vague "+ee.wave+" atteinte":"Les ombres se dispersent"))}}let Qe=null;function ft(l,T){let w=l>0;M.stealthT=l,w&&(M.stealthK=T),Qe||(Qe=[],n.group.traverse(O=>{if(!(!O.isMesh||!O.material||O.userData.ink))for(let K of Array.isArray(O.material)?O.material:[O.material])!K.transparent&&!Qe.includes(K)&&Qe.push(K)}));for(let O of Qe)O.transparent=w,O.opacity=w?.3:1,O.needsUpdate=!0;for(let O of n.inks||[])O.visible=!w}function Lt(l){for(let De of be.slice())Pe(De);let T=new _t,w=new Gt({color:l.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),O=qe(l.color,.13),K=new Gt({color:16777215,fog:!1}),V=(De,Ne,at,Et,xt,Un)=>{let An=new Fe(De,Ne);return An.position.set(at,Et,xt),(Un||T).add(An),An};V(new Sn(.95,2.6,12).rotateX(Math.PI),w,0,1.3,0),V(Be.ball,w,0,2.75,0).scale.set(1.2,1.05,.85),V(Be.ball,O,0,2.7,0).scale.setScalar(1.7),V(Be.ball,w,0,3.95,.05).scale.setScalar(.52);for(let De of[-1,1])V(Be.ball,K,De*.2,4,.47).scale.set(.1,.05,.05),V(new Sn(.14,.6,6),w,De*.34,4.5,0).rotation.z=-De*.5;let F=[];for(let De of[-1,1]){let Ne=new _t;Ne.position.set(De*1.3,3.15,0),V(Be.ball,w,0,0,0,Ne).scale.setScalar(.5),V(new On(.3,.36,1.6,8).translate(0,-.9,0),w,0,0,0,Ne),V(Be.ball,w,0,-1.9,0,Ne).scale.setScalar(.52),T.add(Ne),F.push(Ne)}T.scale.setScalar(l.sc);let pe=t.yaw+.6,ge=t.x+Math.sin(pe)*3,oe=t.z+Math.cos(pe)*3,ye={S:l,obj:T,arms:F,x:ge,z:oe,y:r(ge,oe),yaw:t.yaw,hp:Math.round(M.max*l.hp),max:Math.round(M.max*l.hp),rad:1.2*l.sc,life:60,cd:.4,swing:0,t:0,rage:0};return ye.barCv=document.createElement("canvas"),ye.barCv.width=64,ye.barCv.height=8,ye.barTex=new Wn(ye.barCv),ye.bar=new Fi(new Ci({map:ye.barTex,transparent:!0,depthWrite:!1,fog:!1})),ye.bar.scale.set(2.4,.2,1),ye.bar.position.y=5.3,T.add(ye.bar),gt(ye),T.position.set(ge,ye.y,oe),e.add(T),be.push(ye),Te(ge,ye.y,oe,l.color,2.2,9,.8),ae(ge,ye.y,oe,l.color,.4,4.5,.7),Re(ge,ye.y+2,oe,l.color,30,6,.8),h(l.name),ye}function gt(l){let T=l.barCv.getContext("2d");T.clearRect(0,0,64,8),T.fillStyle="rgba(0,0,0,.75)",T.fillRect(0,0,64,8),T.fillStyle="#7fe0ff",T.fillRect(1,1,62*Math.max(0,l.hp/l.max),6),l.barTex.needsUpdate=!0}function Pe(l){let T=be.indexOf(l);T>=0&&be.splice(T,1),Re(l.x,l.y+2,l.z,l.S.color,24,5,.7),e.remove(l.obj),l.barTex.dispose(),l.obj.traverse(w=>{w.material&&w.material.dispose(),w.geometry&&!w.geometry.userData.shared&&w.geometry.dispose()})}function $(l,T){let w=Math.max(1,Math.round(T.atk*(.9+Math.random()*.2)*100/(100+f.def)));l.hp-=w,gt(l),D(l.x,l.y+4.6*l.S.sc,l.z,"-"+w,"info"),l.hp<=0&&(h(l.S.name+" dissip\xE9"),Pe(l))}function We(l,T){if(l.t+=T,l.life-=T,l.cd-=T,l.rage>0&&(l.rage-=T),l.life<=0){Pe(l);return}let w=l.S,O=Dn(l.x,l.z,24)||(M.focusT>0&&M.focus&&M.focus.state!=="dead"&&Ie(l.x,l.z,M.focus.x,M.focus.z)<24?M.focus:null),K=0,V,F,pe;O?(V=O.x,F=O.z,pe=2.6*w.sc+O.rad):(V=t.x,F=t.z,pe=4.5);let ge=V-l.x,oe=F-l.z,ye=Math.hypot(ge,oe);if(ye>pe)K=Math.min(O?9:14,(ye-pe)*4+2),l.yaw+=rs(Math.atan2(ge,oe),l.yaw)*Math.min(1,T*7),l.x+=Math.sin(l.yaw)*K*T,l.z+=Math.cos(l.yaw)*K*T;else if(O&&(l.yaw+=rs(Math.atan2(ge,oe),l.yaw)*Math.min(1,T*8),l.cd<=0)){l.cd=w.iv,l.swing=Math.min(.45,w.iv*.8);let Ne=()=>{if(!be.includes(l))return;let at=l.x+Math.sin(l.yaw)*2,Et=l.z+Math.cos(l.yaw)*2,xt=w.mult*(l.rage>0?2:1);Le(l.x,l.y+2.2,l.z,l.yaw,.2,w.aoe*w.sc,w.color,.3),w.iv>.8&&ae(at,l.y,Et,w.color,.4,w.aoe*w.sc,.4);let Un=!0;for(let An of Z.slice())An.state!=="dead"&&Ie(at,Et,An.x,An.z)<w.aoe*w.sc+An.rad&&(An.type!=="dummy"||An===M.focus)&&(it(An,Un?xt:xt*.6,{color:w.color,kb:.5,pet:1,cc:w.cc,key:w.id}),Un=!1)};w.iv>.8?ze(.2,Ne):Ne()}w.heal&&M.hp<M.max&&M.down<=0&&Ie(l.x,l.z,t.x,t.z)<14&&(M.hp=Math.min(M.max,M.hp+M.max*w.heal/100*T)),l.y=Math.max(r(l.x,l.z),.2),l.swing>0&&(l.swing-=T);let De=l.swing>0?Math.sin((1-l.swing/.45)*Math.PI):0;l.obj.scale.setScalar(w.sc*(l.rage>0?1.3:1)),l.obj.position.set(l.x,l.y+.25+Math.sin(l.t*2)*.15,l.z),l.obj.rotation.y=l.yaw,l.arms[0].rotation.x=-De*2.1-.1,l.arms[1].rotation.x=-De*1.6-.1+Math.sin(l.t*1.5)*.08,l.obj.visible=!t.inside}function Xe(){let l=new _t,T=new pn({color:9148330,metalness:.3,roughness:.5}),w=new pn({color:4015702,metalness:.3,roughness:.6}),O=new pn({color:61695,emissive:61695,emissiveIntensity:1.6}),K=new pn({color:10483455,emissive:2808063,emissiveIntensity:.6,transparent:!0,opacity:.55}),V=(oe,ye,De,Ne,at,Et,xt,Un)=>{let An=new Fe(new ti(oe,ye,De),Ne);return An.position.set(at,Et,xt),An.castShadow=!0,(Un||l).add(An),An};V(1.5,1.25,1.1,T,0,2.3,0),V(1.1,.5,.9,w,0,1.55,0),V(.5,.3,.44,w,0,3.1,.05),V(.4,.09,.05,O,0,3.12,.28),V(.18,.5,.05,O,0,2.3,.56);let F=new Fe(new Mi(.46,14,10),K);F.position.set(0,2.62,.42),F.scale.set(1,.8,.8),l.add(F);for(let oe of[-1,1]){V(.34,.5,.5,w,oe*.5,2.9,-.5);let ye=new Fe(new Sn(.16,.5,8),O);ye.position.set(oe*.5,2.5,-.62),ye.rotation.x=Math.PI,l.add(ye)}let pe=[],ge=[];for(let oe of[-1,1]){let ye=new _t;ye.position.set(oe*.46,1.4,0),V(.42,.8,.48,T,0,-.38,0,ye),V(.48,.74,.56,w,0,-1.02,.02,ye),V(.56,.2,.86,T,0,-1.32,.12,ye),V(.1,.5,.05,O,0,-.9,.3,ye),l.add(ye),pe.push(ye)}for(let oe of[-1,1]){let ye=new _t;ye.position.set(oe*1.08,2.7,0),V(.72,.5,.74,T,0,.06,0,ye),V(.76,.1,.78,O,0,-.22,0,ye),V(.36,.9,.42,w,0,-.6,0,ye),V(.62,.62,.62,T,0,-1.3,0,ye),V(.64,.1,.64,O,0,-.96,0,ye),l.add(ye),ge.push(ye)}return{g:l,legs:pe,arms:ge}}function ct(){let l=Xe();e.add(l.g);let T=Math.round(M.max*g.mecha.hp);M.mecha={M:l,hp:T,max:T,t:g.mecha.dur,ph:0,swing:0,arm:0},n.group.visible=!1,U=g.mecha.basic,S=!0,o.classList.add("ew-mecha"),Te(t.x,t.y,t.z,61695,2.6,11,.8),ae(t.x,t.y,t.z,61695,.5,6,.7),Re(t.x,t.y+2,t.z,61695,40,8,.9),re.shake=.4,h("Mecha en ligne","Il encaisse \xE0 votre place")}function tt(l){let T=M.mecha;T&&(M.mecha=null,e.remove(T.M.g),Li(T.M.g),n.group.visible=!0,U=g.basic,S=U.kind==="melee",o.classList.remove("ew-mecha"),M.cds[1]=M.cdMax[1]=Math.max(.01,_[0].cd*(1-H)),M.inv=Math.max(M.inv,.8),Re(t.x,t.y+1.5,t.z,l?16742970:61695,40,9,.9),ae(t.x,t.y,t.z,61695,.5,6,.6),l&&(re.shake=.6,h("Mecha d\xE9truit")))}function Dt(l){for(;ke.length>=2;){let O=ke.shift();q(O.m)}let T=new _t,w=new Fe(Be.ring,qe(d,.75));w.scale.setScalar(1.3),w.position.y=.08,T.add(w);for(let O=0;O<6;O++){let K=new Fe(new Sn(.07,.4,5),new pn({color:10134704,metalness:.8,roughness:.3}));K.position.set(Math.cos(O*1.047)*.7,.2,Math.sin(O*1.047)*.7),T.add(K)}T.position.set(t.x,t.y,t.z),e.add(T),ke.push({m:T,x:t.x,z:t.z,y:t.y,t:25,s:l,ring:w})}function Vt(l){for(let T=ke.length-1;T>=0;T--){let w=ke[T];w.t-=l,w.ring.rotation.y+=l*1.5;let O=w.t<=0?null:Z.find(K=>K.state!=="dead"&&Ie(w.x,w.z,K.x,K.z)<2.6+K.rad&&(K.type!=="dummy"||K===M.focus));O&&(Te(w.x,w.y,w.z,d,1.6,5,.5),k(w.x,w.y,w.z,w.s.dmg.r,w.s.dmg.mult,{cc:w.s.cc,key:w.s.name,color:d}),re.shake=Math.max(re.shake,.25)),(O||w.t<=0)&&(q(w.m),ke.splice(T,1))}}function Yt(){M.hp=M.max,M.shield=0,t.down=!1,M.inv=2;for(let l of be.slice())Pe(l);if(ee.on)dn(),i.teleport(st.x+17,st.z);else{for(let l of Z)l.wild&&(l.state="idle",l.hp=l.max,_e(l));i.teleport(-6,34),h("Rue du Four","Vous reprenez connaissance devant la Maison")}}let Nt=[],St=[];function Ot(l,T,w,O){l.state="wind",l.t=0,l.kind=T,l.windT=w*O;let K=T==="whirl"?5:l.ranged||T==="grab"||T==="stunshot"||T==="meteor"?1.2:l.range+.5;l.av&&l.av.play(T==="shot"||T==="stunshot"?l.av.cat==="bow"?"bow":l.ranged==="wave"?"strum":l.ranged==="bullet"?"shoot":"cast":T==="meteor"||T==="grab"?"castUp":T==="whirl"?"spin":l.av.cat==="2h"?"heavy":"slash",l.windT/.52+(T==="whirl"?.3:0),l.n++),ae(l.x,l.y,l.z,T==="whirl"?16715824:16724048,.3,K,l.windT,.85)}function zt(l,T,w,O,K,V){let F=l.P,pe=Math.atan2(w,O),ge=0,oe=pe;if(F&&!V&&l.spT<=0&&l.silT<=0){if(F.sp==="blink"&&T<18){Re(l.x,l.y+1,l.z,2759232,18,4,.4);let ye=1.6;return l.x=t.x-Math.sin(t.yaw)*ye,l.z=t.z-Math.cos(t.yaw)*ye,l.yaw=t.yaw,Me(l.x,l.y+1,l.z,9133302,1.2,.25),fe(l,"Dans votre dos !","crit"),l.spT=7,Ot(l,"hit",l.wind*1.1,K),[0,t.yaw]}if(F.sp==="grab"&&T>3.5&&T<17)return l.spT=9,Ot(l,"grab",.75,K),[0,pe];if(F.sp==="stun"&&T<18)return l.spT=8,Ot(l,"stunshot",.65,K),[0,pe];if(F.sp==="meteor"&&T<18)return l.spT=6.5,Ot(l,"meteor",.9,K),[0,pe];if(F.sp==="trap"&&T<9&&(l.spT=10,St.push(qn(t.x,t.z,2.4,1.1,{root:1.6,k:.6,color:8376394})),fe(l,"Pi\xE8ge")),F.sp==="summon"&&Z.filter(ye=>ye.minion&&ye.owner===l&&ye.state!=="dead").length<2){l.spT=14;let ye=l.yaw+1.5,De=Ee("wolf",l.x+Math.sin(ye)*2,l.z+Math.cos(ye)*2,l.lvl,{arena:l.arena,hpK:.45,atkK:.55,minion:!0});De.owner=l,De.name="Esprit invoqu\xE9",Te(De.x,De.y,De.z,9133302,1,4,.5),fe(l,"Invocation")}if(F.sp==="heal"&&l.hp<l.max*.6){l.spT=10;let ye=Math.round(l.max*.22);l.hp=Math.min(l.max,l.hp+ye),_e(l),Te(l.x,l.y,l.z,9306032,1,4,.6),fe(l,"+"+ye,"heal")}}if(l.type==="leap"&&(l.spT<=0||T>9)&&T>4.5&&T<15&&l.rootT<=0&&!V)return l.spT=3.5+Math.random()*2,Ot(l,"leap",.55,K),[0,pe];if(l.ranged){let ye=l.range;return T>ye*.92?ge=l.spd:F&&F.kite&&T<ye*.4?(ge=l.spd*.85,oe=pe+Math.PI+l.side*.5):(ge=l.spd*.35,oe=pe+l.side*1.4,Math.random()<.004&&(l.side*=-1)),T<=ye&&l.silT<=0&&l.cdT<=0?(l.cdT=.2,Ot(l,"shot",l.wind,K),[0,pe]):[ge,oe]}return T>l.range*.82?[l.spd,pe]:(l.silT<=0&&(l.combo++,Ot(l,F&&F.sp==="whirl"&&l.combo%3===0?"whirl":F&&F.sp==="bash"&&l.combo%3===0?"bash":"hit",l.wind*(F&&F.sp==="whirl"&&l.combo%3===0?1.25:1),K)),[0,pe])}function qn(l,T,w,O,K){let V=r(l,T);ae(l,V,T,K.color||16724048,w-.15,w,O,.8);let F=new Fe(Be.ring,qe(K.color||16724048,.3));return F.scale.setScalar(.01),F.position.set(l,V+.06,T),F.rotation.x=-Math.PI/2,lt(F,O,pe=>F.scale.setScalar(w*pe)),{x:l,z:T,y:V,r:w,t:O,fx:K}}function Ft(l,T,w,O,K,V){let F=l.kind||"hit",pe=l.P;if(F==="leap"){l.state="leap",l.t=0,l.lx0=l.x,l.lz0=l.z;let ge=K?K.x:t.x,oe=K?K.z:t.z,ye=Math.atan2(l.x-ge,l.z-oe);l.lx1=ge+Math.sin(ye)*1.2,l.lz1=oe+Math.cos(ye)*1.2,ae(l.lx1,r(l.lx1,l.lz1),l.lz1,16724048,2.2,2.6,.6,.8);return}if(F==="shot"||F==="stunshot"){let ge=K?K.x:t.x,oe=K?K.z:t.z,ye=K?K.y+2:t.y+1.1;wi(l,ge,ye,oe,F==="stunshot"?{stun:1.2,color:16765514}:pe&&pe.sp==="slow"?{slow:[.45,3]}:{},K);return}if(F==="meteor"){St.push(qn(t.x,t.z,3.4,1.25,{k:1.8,color:16734746,meteor:1}));return}if(F==="grab"){Le(l.x,l.y+1.2,l.z,l.yaw,1.57,T,16777215,.3),V&&!K&&T<18&&$e(l,.6,{pull:l,stun:.7});return}if(l.lunge=.25,F==="whirl"){ae(l.x,l.y,l.z,16728160,.5,5,.35),Le(l.x,l.y+1,l.z,l.yaw,.1,4.6,16728160,.3),(K?Ie(l.x,l.z,K.x,K.z)<5+K.rad:V&&T<5)&&(K?$(K,l):$e(l,1.4));return}Le(l.x,l.y+l.T.h*.5,l.z,l.yaw,.3,l.range*.95,16728160,.2),V&&T<l.range+.7&&Math.abs(rs(Math.atan2(w,O),l.yaw))<1.25&&(K?$(K,l):$e(l,F==="bash"?1.1:1,F==="bash"?{stun:1}:null))}function wi(l,T,w,O,K,V){let F=l.ranged||"bolt",pe=new W(l.x+Math.sin(l.yaw)*.6,l.y+1.3,l.z+Math.cos(l.yaw)*.6),ge=new W(T,w,O),oe=ge.clone().sub(pe).normalize(),ye={arrow:42,bullet:50,bolt:26,wave:22,paint:28}[F]||30,De=K.color||(F==="bolt"?11832575:F==="wave"?8376575:F==="paint"?16739e3:16732240),Ne=new Fe(F==="arrow"?Be.arrow:F==="bullet"?Be.tracer:Be.ball,qe(De,.95));Ne.scale.setScalar(F==="arrow"||F==="bullet"?1:.32),Ne.position.copy(pe),Ne.quaternion.setFromUnitVectors(new W(0,0,1),oe),e.add(Ne),Nt.push({m:Ne,v:oe.multiplyScalar(ye),life:45/ye,e:l,fx:K,ally:V,atk:l.atk})}function Gi(l){for(let T=Nt.length-1;T>=0;T--){let w=Nt[T],O=w.m.position,K=O.x,V=O.z;O.addScaledVector(w.v,l),w.life-=l;let F=w.life<=0,pe=O.x-K,ge=O.z-V,oe=pe*pe+ge*ge,ye=oe>0?Math.max(0,Math.min(1,((t.x-K)*pe+(t.z-V)*ge)/oe)):1,De=K+pe*ye,Ne=V+ge*ye;F||(w.ally&&be.includes(w.ally)?Ie(O.x,O.z,w.ally.x,w.ally.z)<w.ally.rad+.5&&Math.abs(O.y-w.ally.y-2)<2.5&&($(w.ally,w.e),F=!0):Ie(De,Ne,t.x,t.z)<.75&&O.y>t.y-.2&&O.y<t.y+2.2&&!t.fly&&((M.inv<=0||re.auto)&&$e(w.e,1,w.fx),F=!0,Re(O.x,O.y,O.z,16732240,6,3,.25))),F&&(e.remove(w.m),w.m.material.dispose(),Nt.splice(T,1))}for(let T=St.length-1;T>=0;T--){let w=St[T];if(w.t-=l,w.t>0)continue;St.splice(T,1),w.fx.meteor?(Te(w.x,w.y,w.z,16734746,w.r*.5,9,.5),Re(w.x,w.y+.5,w.z,16747066,24,7,.6),re.shake=Math.max(re.shake,.3)):ae(w.x,w.y,w.z,w.fx.color,.3,w.r,.3);let O=Z.find(K=>K.state!=="dead"&&K.P)||{atk:10,sapT:0};Ie(w.x,w.z,t.x,t.z)<w.r&&!t.fly&&$e(O,w.fx.k||1,w.fx.root?{root:w.fx.root}:null)}}function pi(l,T){let w=l.obj;if(l.flash>0){l.flash-=T;let pt=l.flash>0;for(let Pt of l.mats)pt?(Pt.emissive.setHex(16777215),Pt.emissiveIntensity=.9):(Pt.emissive.setHex(Pt.userData.e0),Pt.emissiveIntensity=Pt.userData.i0)}if(l.warn){let pt=l.state==="wind";if(pt){let Pt=l.t/(l.windT||l.wind),vn=Pt>.55,Qn=.5+.5*Math.sin(t.t*(vn?34:16));if(l.warn.material.color.setHex(vn?16720952:16765470),l.warn.scale.setScalar((l.boss?1.3:.85)*(1+Qn*(vn?.3:.12))),l.flash<=0){for(let Zs of l.mats)Zs.emissive.setHex(16717872),Zs.emissiveIntensity=.25+Qn*.5;l.tint=!0}}else if(l.tint&&l.flash<=0){l.tint=!1;for(let Pt of l.mats)Pt.emissive.setHex(Pt.userData.e0),Pt.emissiveIntensity=Pt.userData.i0}l.warn.visible=pt}if(l.state==="dead"){l.t+=T;let pt=l.t/.55;w.scale.setScalar(Math.max(.01,1-pt)),w.position.y=l.y-pt*.4,pt>=1&&et(l);return}let O=l.type==="dummy",K=(l.weakT>0?1+l.weakK:1)*(1+Math.min(ss.crit,f.crit)*(f.critDmg-1));for(let pt of l.dots)if(pt.t-=T,pt.t<=0&&pt.n>0){pt.t+=1,pt.n--;let Pt=Math.max(1,Math.round(pt.v*K));if(M.dealt+=Pt,O||(l.hp-=Pt),D(l.x,l.y+l.T.h,l.z,Pt,"dot"),_e(l),!O&&l.hp<=0){Ge(l);return}}if(l.dots.length&&(l.dots=l.dots.filter(pt=>pt.n>0)),l.notes>0){if(l.noteT-=T,l.noteAcc+=T,l.noteAcc>=1){l.noteAcc-=1;let pt=Math.max(1,Math.round(z*ch*l.notes*K));if(M.dealt+=pt,O||(l.hp-=pt),D(l.x,l.y+l.T.h+.2,l.z,"\u266A "+pt,"dot"),_e(l),!O&&l.hp<=0){Ge(l);return}}l.noteT<=0&&(l.notes=0)}if(l.weakT>0&&(l.weakT-=T),l.runes>0&&(l.runeT-=T)<=0&&(l.runes=0,_e(l)),l.spT-=T,l.cdT=(l.cdT||0)-T,O){l.wobT>0&&(l.wobT-=T,l.wob.rotation.x=Math.sin(l.wobT*34)*.5*l.wobT);return}l.rootT>0&&(l.rootT-=T),l.slowT>0&&(l.slowT-=T),l.silT>0&&(l.silT-=T),l.aspdT>0&&(l.aspdT-=T),l.sapT>0&&(l.sapT-=T),l.kdCd>0&&(l.kdCd-=T);let V=null,F=18;for(let pt of be){if(pt.hp<=0)continue;let Pt=Ie(l.x,l.z,pt.x,pt.z);Pt<(pt.S.taunt||F)&&(!V||Pt<F)&&(F=Pt,V=pt)}let pe=V?V.x:t.x,ge=V?V.z:t.z,oe=V?V.rad:M.mecha?.9:0,ye=pe-l.x,De=ge-l.z,Ne=Math.hypot(ye,De)-oe,at=V?!0:M.down<=0&&!t.inside&&M.stealthT<=0&&!t.fly,Et=l.aspdT>0?1+l.aspdK:1,xt=0,Un=null;if(l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear")l.stun-=T,l.state==="fear"&&(Un=Math.atan2(l.x-t.x,l.z-t.z),xt=l.spd*.9),l.state==="sleep"&&(l.zT-=T)<=0&&(l.zT=1.1,fe(l,"z z")),l.stun<=0&&(bt(l),l.state="chase",l.kd=!1);else if(l.state==="idle")if(at&&Ne<15)l.state="chase";else{if(l.wT-=T,!l.wander||l.wT<=0){let vn=Math.random()*6.28,Qn=Math.random()*7;l.wander=[l.home[0]+Math.sin(vn)*Qn,l.home[1]+Math.cos(vn)*Qn],l.wT=3+Math.random()*5}let pt=l.wander[0]-l.x,Pt=l.wander[1]-l.z;Math.hypot(pt,Pt)>.7&&(Un=Math.atan2(pt,Pt),xt=l.spd*.3),l.hp<l.max&&(l.hp=Math.min(l.max,l.hp+l.max*.2*T),_e(l))}else if(l.state==="chase")if(!at||l.wild&&Ie(l.x,l.z,l.home[0],l.home[1])>40)l.wild&&(l.state="idle",l.wander=l.home.slice(),l.wT=6);else{let pt=zt(l,Ne,ye,De,Et,V);xt=pt[0],Un=pt[1]}else if(l.state==="wind")l.t+=T,l.t<l.windT*.6&&l.kind!=="leap"&&(Un=Math.atan2(ye,De)),!V&&at&&(l.ranged||l.kind==="meteor"||l.kind==="grab"||l.kind==="stunshot"?Ne<40:Ne<l.range+(l.kind==="whirl"?5:3))&&(re.warnT=.12),l.t>=l.windT&&(l.state="rest",l.t=0,Ft(l,Ne,ye,De,V,at));else if(l.state==="leap"){l.t+=T;let pt=Math.min(1,l.t/.6);l.x=l.lx0+(l.lx1-l.lx0)*pt,l.z=l.lz0+(l.lz1-l.lz0)*pt,l.hop=Math.sin(pt*Math.PI)*3.2,pt>=1&&(l.hop=0,l.state="rest",l.t=0,ae(l.x,r(l.x,l.z),l.z,16728160,.4,2.6,.35),re.shake=Math.max(re.shake,.15),(V?Ie(l.x,l.z,V.x,V.z)<2.6+V.rad:at&&Ie(l.x,l.z,t.x,t.z)<2.6)&&(V?$(V,l):$e(l,1.3)))}else l.state==="rest"&&(l.t+=T,l.t>=l.rest*Et&&(l.state="chase"));if(l.rootT>0?xt=0:l.slowT>0&&(xt*=1-l.slowK),Un!=null&&(l.yaw+=rs(Un,l.yaw)*Math.min(1,T*8)),xt>0){let pt=l.x+Math.sin(l.yaw)*xt*T,Pt=l.z+Math.cos(l.yaw)*xt*T;for(let vn of Z)if(vn!==l&&vn.state!=="dead"){let Qn=Ie(pt,Pt,vn.x,vn.z),Zs=l.rad+vn.rad;Qn<Zs&&Qn>.001&&(pt=vn.x+(pt-vn.x)/Qn*Zs,Pt=vn.z+(Pt-vn.z)/Qn*Zs)}if(l.arena){let vn=Ie(pt,Pt,st.x,st.z),Qn=st.r-1-l.rad;vn>Qn&&(pt=st.x+(pt-st.x)/vn*Qn,Pt=st.z+(Pt-st.z)/vn*Qn)}l.x=pt,l.z=Pt}if(l.arena){let pt=Ie(l.x,l.z,st.x,st.z),Pt=st.r-1-l.rad;pt>Pt&&(l.x=st.x+(l.x-st.x)/pt*Pt,l.z=st.z+(l.z-st.z)/pt*Pt)}l.y=Math.max(r(l.x,l.z),.2)+(l.hop||0),l.lunge>0&&(l.lunge-=T);let An=l.lunge>0?Math.sin((1-l.lunge/.25)*Math.PI)*.7:0;w.position.set(l.x+Math.sin(l.yaw)*An,l.y,l.z+Math.cos(l.yaw)*An),w.rotation.y=l.yaw;let pl=l.kd&&l.state==="stun";l.av?(l.av.update(T,{speed:xt/4.6}),l.av.group.rotation.x+=((pl?-1.4:0)-l.av.group.rotation.x)*Math.min(1,T*12),l.av.group.position.y=pl?.25:0):(l.beast.update(T,xt/6),l.beast.group.rotation.x=l.state==="wind"?-.22*Math.min(1,l.t/(l.windT||l.wind)):l.state==="stun"?.12:0,l.beast.group.rotation.z+=((pl?1.45:0)-l.beast.group.rotation.z)*Math.min(1,T*12))}function un(l,T=3.2,w){let O=re.lock||re.auto?re.lockE:null;if(O&&O.state!=="dead"&&Ie(t.x,t.z,O.x,O.z)<=l+O.rad)return O;let K=null,V=1e9;for(let F of Z){if(F.state==="dead")continue;let pe=Ie(t.x,t.z,F.x,F.z);if(pe>l+F.rad)continue;let ge=Math.abs(rs(Ze(F.x,F.z),t.yaw));if(ge>T)continue;let oe=pe+(w?0:ge*3)+(F.type==="dummy"?w?40:5:0)+(w&&F.state==="sleep"?30:0);oe<V&&(V=oe,K=F)}return K}let Dn=(l,T,w,O)=>{let K=null,V=w;for(let F of Z){if(F.state==="dead"||F.type==="dummy"||F.state==="sleep"&&O==="awake"||O&&O.has&&O.has(F))continue;let pe=Ie(l,T,F.x,F.z);pe<V&&(V=pe,K=F)}return K};function $t(l,T=!S){let w=un(l,3.2,T);return w&&(!T||t.speed<1.5)&&(t.yaw=Ze(w.x,w.z)),w}let nn=l=>l&&l.state!=="dead"?l:null;function Xt(l,T,w,O={}){let K=0;for(let V of Z.slice()){if(V.state==="dead")continue;let F=Ie(t.x,t.z,V.x,V.z);F>T+V.rad||w<3.1&&F>.9&&Math.abs(rs(Ze(V.x,V.z),t.yaw))>w||(it(V,l,O),K++)}return K&&(re.shake=Math.max(re.shake,O.shake||.07)),K}function k(l,T,w,O,K,V={},F){Me(l,T+.4,w,V.color||d,O*.7),ae(l,T,w,V.color||d,.3,O,.4),Re(l,T+.5,w,V.color||d,14,6,.5);let pe=0;for(let ge of Z.slice())ge!==F&&ge.state!=="dead"&&Ie(l,w,ge.x,ge.z)<O+ge.rad&&(it(ge,K,V),pe++);return pe}function ie(l,T,w={}){let O=w.target&&w.target.state!=="dead"?w.target:un(w.range||28,3.2,!0),K=n.hand(new W,w.off);l==="wave"&&K.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let V=O?new W(O.x-K.x,O.y+O.T.h*.55-K.y,O.z-K.z).normalize():new W(Math.sin(t.yaw),0,Math.cos(t.yaw));w.spread&&V.applyAxisAngle(V1,w.spread);let F=w.color||d,pe=w.size||1,ge;if(l==="arrow")ge=new Fe(Be.arrow,qe(F,1)),ge.scale.set(pe,pe,1.1);else if(l==="bullet")ge=new Fe(Be.tracer,qe(F,1));else if(l==="wave")ge=new Fe(Be.arc,qe(F,.85)),ge.scale.setScalar(1.2);else{ge=new Fe(Be.ball,qe(F,l==="paint"?.95:.9,l!=="paint"));let ye=(l==="shell"?.3:l==="paint"?.2:.24)*pe;if(ge.scale.setScalar(ye),l!=="paint"){let De=new Fe(Be.ball,qe(16777215,.9));De.scale.setScalar(.5),ge.add(De)}}let oe=w.speed||26;ge.position.copy(K),e.add(ge),l!=="wave"&&Me(K.x,K.y,K.z,F,.35,.12),J.push({m:ge,kind:l,v:V.multiplyScalar(oe),life:(w.range||28)/oe+.25,mult:T,o:w,hit:new Set,target:O,homing:l!=="wave",age:0,bounce:w.bounce||0})}function ue(l,T){l.age+=T,l.life-=T;let w=l.m.position;if(l.homing&&l.target&&l.target.state==="dead"&&(l.target=Dn(w.x,w.z,12,l.hit)),l.homing&&l.target){let ye=l.target,De=l.v.length();Oe.set(ye.x-w.x,ye.y+ye.T.h*.55-w.y,ye.z-w.z).normalize().multiplyScalar(De),l.v.lerp(Oe,Math.min(1,T*(l.kind==="bullet"||l.kind==="arrow"?18:9))).setLength(De)}let O=w.x,K=w.z;w.addScaledVector(l.v,T);let V=w.x-O,F=w.z-K,pe=V*V+F*F;l.kind==="wave"?(l.m.rotation.y=Math.atan2(l.v.x,l.v.z),l.m.scale.setScalar(1.2+l.age*3.2),l.m.material.opacity=.85*Math.min(1,l.life*3)):(l.kind==="arrow"||l.kind==="bullet")&&l.m.lookAt(w.x+l.v.x,w.y+l.v.y,w.z+l.v.z);let ge=l.kind==="wave"?l.m.scale.x*.8:.35*(l.o.size||1),oe=l.life<=0;for(let ye of Z){if(ye.state==="dead"||l.hit.has(ye))continue;let De=pe>0?Math.max(0,Math.min(1,((ye.x-O)*V+(ye.z-K)*F)/pe)):1;if(!(Ie(O+V*De,K+F*De,ye.x,ye.z)>ye.rad+ge||w.y<ye.y-.5-Math.abs(l.v.y)*T||w.y>ye.y+ye.T.h+.8+Math.abs(l.v.y)*T)){if(l.hit.add(ye),it(ye,l.mult,l.o),l.o.aoe&&k(w.x,ye.y,w.z,l.o.aoe,l.mult*.6,l.o,ye),l.bounce>0){let Ne=Dn(w.x,w.z,14,l.hit);if(Ne){l.bounce--,l.mult*=.8,l.target=Ne;let at=l.v.length();l.v.set(Ne.x-w.x,Ne.y+Ne.T.h*.55-w.y,Ne.z-w.z).setLength(at),l.life=14/at+.25,Me(w.x,w.y,w.z,16777215,.5,.12);break}}if(!l.o.thru){oe=!0;break}}}return!oe&&l.kind!=="wave"&&w.y<r(w.x,w.z)+.05?(oe=!0,l.o.aoe?k(w.x,r(w.x,w.z),w.z,l.o.aoe,l.mult*.6,l.o):Re(w.x,w.y+.1,w.z,l.o.color||d,5,2.5,.3)):oe&&l.life<=0&&l.o.aoe&&l.kind==="shell"&&k(w.x,w.y,w.z,l.o.aoe,l.mult*.6,l.o),oe}function me(l,T,w,O={},K=32){let V=nn(l)||un(K,3.2,!0),F=V?V.x:t.x+Math.sin(t.yaw)*8,pe=V?V.z:t.z+Math.cos(t.yaw)*8,ge=r(F,pe);return Te(F,ge,pe,O.color||d,w*.5,5,.45),k(F,ge,pe,w,T,O)}let de=()=>t.talking||t.paused||M.down>0||M.stunT>0?!1:t.fly?(L("Posez-vous pour combattre"),!1):(t.mount&&i.dismount(),!0);function Ve(l){if(l&&(M.idle=0),M.armed===l)return;M.armed=l,n.setArmed(l),o.classList.toggle("ew-armed",l);let T=o.querySelector('[data-c="draw"]');T&&T.classList.toggle("on",l)}let R=()=>t.x,B=()=>t.y,X=()=>t.z;function Se(){if(!de())return!1;if(Ve(!0),M.busy>0)return M.queue=!0,!1;let l=$t(S?U.reach+4.5:U.range);if(S&&l){let ge=Ie(t.x,t.z,l.x,l.z)-l.rad;ge>U.reach*.7&&i.dash(ge-U.reach*.55,.09)}let T=M.combo++,w=U.dur*(1-Math.min(ss.aspd,M.aspdT>0?M.aspdB:0))/G,O=U.every&&(T+1)%U.every.n===0,K=O?U.mult*U.F*U.every.k:U.mult,V=O?[1]:U.seq;n.play(O?"heavy":U.anim,w*1.3,T),M.busy=w+(O?U.every.lock*.5:0),O&&(M.lock=U.every.lock),U.slowSelf&&(M.slowK=U.slowSelf,M.slowT=w*.85),M.mecha&&(M.mecha.swing=.4,M.mecha.arm=T%2);let F=U.dot||U.note||U.rune?{dot:U.dot,notes:U.note,runes:U.rune}:null,pe=Math.min(.07,w*.4/V.length);return V.forEach((ge,oe)=>ze(w*U.hit+oe*pe,()=>{if(M.down>0)return;let ye=oe===0,De=ge>=.5,Ne=K*ge,at={cc:ye?F:null,key:"basic",basic:1,hpp:ye};if(S){if(De){let xt=n.dual?((T>>1)+oe)%3:T%3,Un=U.anim==="heavy"?T%2?.12:1.45:U.anim==="punch"?T%2?.3:-.3:xt===0?-.95:xt===1?.2:1.57;Le(R(),B()+(U.mech?2.2:1.15),X(),t.yaw,ye?Un:-Un,U.reach*.95,d,U.mech?.3:.24),U.mech&&(ae(R()+Math.sin(t.yaw)*2.4,B(),X()+Math.cos(t.yaw)*2.4,d,.4,2.6,.3),re.shake=Math.max(re.shake,.12))}let Et={d:0};at.acc=Et,De||(at.kb=0),Xt(Ne,U.reach,U.arc,at)&&ye&&g.sustain&&!M.mecha&&M.hp<M.max&&rt(Math.max(1,Math.round(Et.d*.1+M.max*.06*U.dur)))}else if(O){Le(R(),B()+1.1,X(),t.yaw,.15,7.5,dh[T%4],.3),Le(R(),B()+1.1,X(),t.yaw,-.2,6.5,16777215,.22);let Et=nn(l)||un(U.range,3.2,!0);if(Et)for(let xt of Z.slice())xt.state!=="dead"&&Ie(Et.x,Et.z,xt.x,xt.z)<2.6+xt.rad&&it(xt,xt===Et?Ne:Ne*.6,{color:dh[T%4],basic:1})}else ie(U.proj,Ne,Object.assign(at,{range:U.range,speed:U.speed,aoe:De?U.aoe:0,size:De?U.size:.6,thru:U.thru,bounce:De&&U.bounce||0,off:n.dual&&(T+oe)%2===1,target:nn(l)||l,color:U.proj==="paint"?dh[(T+oe)%4]:d}))})),!0}function Ae(l){if(t.talking||t.paused||M.down>0||M.dashCd>0||M.stunT>0)return;t.mount&&i.dismount();let T=l??i.inputDir();T!=null&&(t.yaw=T),M.dashCd=.36,M.inv=Math.max(M.inv,.36),M.busy=0,M.queue=!1,M.lock=0,ae(R(),B(),X(),16777215,.3,1.9,.3,.6),Me(R(),B()+1,X(),d,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let L=l=>{let T=o.querySelector(".ew-skn");T&&(T.textContent=l,T.classList.remove("on"),T.offsetWidth,T.classList.add("on"))};function Y(l,T){if(!l)return;let w=l.heal||l.hot?9306032:T.color||d;l.heal&&rt(Math.round(M.max*l.heal/100)),l.hot&&(M.hot=l.hot[0],M.hotT=l.hot[1]),l.atk&&(M.atkB=l.atk[0],M.atkT=l.atk[1]),l.crit&&(M.critB=l.crit[0],M.critT=l.crit[1]),l.aspd&&(M.aspdB=l.aspd[0],M.aspdT=l.aspd[1]),l.guard&&(M.guardB=l.guard[0],M.guardT=l.guard[1]),l.absorb&&(M.absorbB=l.absorb[0],M.absorbT=l.absorb[1]),l.inv&&(M.inv=Math.max(M.inv,l.inv)),l.gauge&&Ke(l.gauge),l.shield&&(M.shield=Math.round(M.max*l.shield[0]/100),M.shieldT=l.shield[1]),l.stealth&&(ft(l.stealth[0],l.stealth[1]),Re(R(),B()+1,X(),10133696,20,3,.5)),l.reset!=null&&(M.cds[l.reset]=0),(l.heal||l.hot||l.atk||l.crit||l.aspd||l.guard||l.absorb||l.inv>1)&&(Te(R(),B(),X(),w,1.2,4.2,.6),ae(R(),B(),X(),w,.4,3,.5),Re(R(),B()+1,X(),w,14,3,.6))}function se(l,T){let w=l.area,O=l.color||d;if(w.kind==="target"){let ge=nn(T)||un(30,3.2,!0);ge&&(Te(ge.x,ge.y,ge.z,O,1,4,.5),ut(ge,l.cc,l.name));return}let K=w.kind==="zone"?nn(T)||un(30,3.2,!0):null,V=w.kind==="zone"?K?K.x:t.x+Math.sin(t.yaw)*8:t.x,F=w.kind==="zone"?K?K.z:t.z+Math.cos(t.yaw)*8:t.z,pe=r(V,F);ae(V,pe,F,O,.4,w.r,.6),Me(V,pe+.6,F,O,w.r*.5,.3);for(let ge of Z.slice())ge.state!=="dead"&&Ie(V,F,ge.x,ge.z)<w.r+ge.rad&&ut(ge,l.cc,l.name)}function j(l,T,w){if(M.down>0)return;let O=l.dmg,K=l.ult===1?P:1,V=l.color||d;if(l.special==="trap"){Dt(l);return}if(l.special==="spirit"){M.spirit=(M.spirit+1)%Ra.length,Lt(Ra[M.spirit]);return}if(l.special==="mecha"){ct();return}if(l.special==="enrage"){be.length||(M.spirit=Math.max(0,M.spirit),Lt(Ra[M.spirit]));for(let F of be)F.rage=8,F.hp=F.max,gt(F),Te(F.x,F.y,F.z,F.S.color,3,10,.8)}if(l.special==="runes"){let F=l.dmg;ae(R(),B(),X(),13154047,.5,F.r,.5),Te(R(),B(),X(),13154047,F.r*.35,6,.5),Re(R(),B()+.6,X(),15326719,30,9,.7),re.shake=Math.max(re.shake,.35);for(let pe of Z.slice())if(pe.state!=="dead"&&Ie(t.x,t.z,pe.x,pe.z)<F.r+pe.rad){let ge=pe.runes;pe.runes=0,ge&&fe(pe,"Runes \xD7"+ge,"crit"),it(pe,(F.mult+F.per*ge)*K,{color:13154047,kb:.6,key:l.name,cc:{stun:Math.max(1,.5*ge)}})}return}if(l.exec){let F=nn(T)||un(36,3.2,!0);if(re.shake=.7,!F){ae(R(),B(),X(),d,.5,9,.8);return}Te(F.x,F.y,F.z,16777215,1.4,18,.9),Te(F.x,F.y,F.z,d,2.8,13,1),ae(F.x,F.y,F.z,d,.5,10,.9),Re(F.x,F.y+1,F.z,d,40,9,.9),F.type!=="dummy"&&F.hp<=F.max*(F.boss?.15:.35)?(fe(F,"R\xE9duit \xE0 n\xE9ant","crit"),Ge(F)):it(F,8*v*(lh[p]||1)/E,{pierce:1,color:d,kb:1.2,cc:l.cc,key:l.name});return}if(O){let F=O.hits||1,pe=O.gap||.15,ge={crit:O.crit,pierce:O.pierce,steal:O.steal,cc:l.cc,key:l.name,color:V,kb:O.kind==="around"?.7:void 0};for(let oe=0;oe<F;oe++)ze(oe*pe,()=>{if(M.down>0)return;let ye=Object.assign({},ge,{hpp:oe===0}),De=(Array.isArray(O.mult)?O.mult[oe]:O.mult)*K,Ne=F===1&&De>=2.5;if(O.kind==="melee")Le(R(),B()+1.15,X(),t.yaw,oe%3===0?-.9:oe%3===1?.25:1.5,O.r*(.9+oe*.08),V,.28),Xt(De,O.r,O.arc||1.4,Object.assign({shake:.12+oe*.08},ye));else if(O.kind==="around")ae(R(),B(),X(),V,.5,O.r,.45),Ne?(Te(R(),B(),X(),V,O.r*.4,7,.6),Re(R(),B()+.5,X(),V,30,9,.7)):Le(R(),B()+1.1,X(),t.yaw+oe*1.3,oe%2?.2:-.2,O.r*.85,V,.3),Xt(De,O.r,3.2,Object.assign({shake:Ne?.5:.18},ye));else if(O.kind==="shot")F>1&&n.play(l.anim==="flip"?"shoot":l.anim||U.anim,.14,oe),ie(O.proj||U.proj||"bolt",De,Object.assign({range:(O.range||30)+4,speed:O.speed||U.speed||36,aoe:O.aoe,size:O.size,bounce:O.proj==="bullet"?1:0,off:oe%2===1&&n.dual,target:nn(T)},ye));else if(O.kind==="zone")Ne&&(re.shake=Math.max(re.shake,.5)),me(T,De,O.r,ye);else if(O.kind==="target"){let at=nn(T)||un((O.range||26)+4,3.2,!0);if(!at)return;let Et=De;if(l.special==="notes"&&(Et+=.7*at.notes,ae(at.x,at.y,at.z,V,.3,2+at.notes*.6,.4),at.notes=0),Te(at.x,at.y,at.z,V,.7,4,.35),Me(at.x,at.y+at.T.h*.5,at.z,V,1.1,.2),it(at,Et,ye),O.aoe){ae(at.x,at.y,at.z,V,.4,O.aoe,.4);for(let xt of Z.slice())xt!==at&&xt.state!=="dead"&&Ie(at.x,at.z,xt.x,xt.z)<O.aoe+xt.rad&&it(xt,Et*.5,ye)}}})}l.area&&se(l,T),Y(l.self,l)}function xe(l){if(l===0)return Se();let T=_[l-1];if(!T||!de())return;let w=M.chain[l]&&M.chain[l].t>0?M.chain[l].s:null;if(w&&(T=w),I[l]){L("Niveau "+Aa[l-1]+" requis \xB7 "+T.name);return}if(T.special==="mecha"&&M.mecha){M.busy<=.15&&(L("\xC9jection"),tt(!1));return}if(T.ult){if(M.charge<100){L("Jauge d\u2019ultime incompl\xE8te");return}}else if(!w&&M.cds[l]>0)return;if(M.busy>.15)return;Ve(!0),L(T.name),w?M.chain[l]=null:T.ult?M.charge=0:(M.cds[l]=T.cd*(1-H),M.cdMax[l]=Math.max(.01,M.cds[l])),T.chain&&(M.chain[l]={t:Gr(T)+4,s:T.chain});let O=T.dmg,K=(T.cast??.25)*te,V=O&&O.kind==="melee",F=V?un(O.r+5):O||T.area||T.exec?un((O&&O.range||30)+4,3.2,!0):null;if(F&&(V||O&&O.kind==="target"||T.exec||t.speed<1.5)&&(t.yaw=Ze(F.x,F.z)),V&&F){let pe=Ie(t.x,t.z,F.x,F.z)-F.rad;pe>O.r*.7&&i.dash(pe-O.r*.55,.1)}if(T.move==="tp"&&F){Re(R(),B()+1,X(),d,16,4,.4);let pe=F.rad+1.5;if(t.x=F.x-Math.sin(F.yaw)*pe,t.z=F.z-Math.cos(F.yaw)*pe,t.y=r(t.x,t.z),t.yaw=F.yaw,ee.on){let ge=Ie(t.x,t.z,st.x,st.z);ge>st.r-1.2&&(t.x=st.x+(t.x-st.x)/ge*(st.r-1.2),t.z=st.z+(t.z-st.z)/ge*(st.r-1.2))}Me(R(),B()+1,X(),d,1.2,.25)}if(T.move==="back"&&(i.dash(-8.5,.26),ae(R(),B(),X(),d,.4,2.2,.35)),n.play(T.anim||(S?"heavy":"cast"),Math.max(.3,Gr(T)*te*1.05),M.combo++,T.turns||1),M.busy=Gr(T)*te,T.lock&&(M.lock=T.lock*te),T.ult&&(M.inv=Math.max(M.inv,Gr(T)*te)),M.mecha&&(M.mecha.swing=.45,M.mecha.arm=2),T.meteor){let pe=F,ge=pe?pe.x:t.x+Math.sin(t.yaw)*10,oe=pe?pe.z:t.z+Math.cos(t.yaw)*10,ye=r(ge,oe);ae(ge,ye,oe,d,O.r-.2,O.r,K,.7);let De=new Fe(Be.ball,qe(d,.95)),Ne=new Fe(Be.ball,qe(16777215,.9));Ne.scale.setScalar(.55),De.add(Ne),lt(De,K,at=>{De.position.set(ge-7*(1-at),ye+22*(1-at)*(1-at)+.5,oe-4*(1-at)),De.scale.setScalar(1.4)})}ze(K,()=>j(T,F,l))}let le=new Fe(new _i(.82,1,4),new Gt({color:16765514,transparent:!0,opacity:.9,side:sn,depthWrite:!1,fog:!1}));le.rotation.x=-Math.PI/2,le.visible=!1,e.add(le);function he(){let l=re.lockE;if(l&&(l.state==="dead"||!Z.includes(l)||Ie(t.x,t.z,l.x,l.z)>46)&&(l=null),!l){let T=40;for(let w of Z){if(w.state==="dead"||w.type==="dummy")continue;let O=Ie(t.x,t.z,w.x,w.z);O<T&&(w.arena||w.state!=="idle"||O<18)&&(T=O,l=w)}if(!l&&!re.auto){T=14;for(let w of Z)if(w.type==="dummy"){let O=Ie(t.x,t.z,w.x,w.z);O<T&&(T=O,l=w)}}}return re.lockE=l}function Je(){let l=Z.filter(w=>w.state!=="dead"&&w.type!=="dummy"&&Ie(t.x,t.z,w.x,w.z)<40);if(l.length<2)return;let T=l.indexOf(re.lockE);re.lockE=l[(T+1)%l.length]}let nt=l=>l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear";function yt(){if(re.autoMove=null,t.talking||t.paused||t.inside||t.fly||M.down>0)return;let l=he();if(!l)return;t.mount&&i.dismount(),Ve(!0);for(let V of Z){if(V.state!=="wind")continue;let F=V.aspdT>0?1+V.aspdK:1,pe=(V.windT||V.wind*F)-V.t,ge=Ie(t.x,t.z,V.x,V.z);if(pe<.2&&ge<(V.ranged?40:V.kind==="whirl"?6:V.range+1.6)&&M.inv<pe+.05&&M.dashCd<=0){let oe=Math.atan2(t.x-V.x,t.z-V.z)+(S?2.2:0);Ae(oe);break}}let T=Ie(t.x,t.z,l.x,l.z)-l.rad,w=Ze(l.x,l.z);if(S)T>U.reach*.7&&(re.autoMove={yaw:w,mag:1});else{let V=U.range*.85,F=Math.min(6.5,U.range*.4);if(T>V)re.autoMove={yaw:w,mag:1};else if(T<F&&!nt(l)&&l.rootT<=0){let pe=w+Math.PI;ee.on&&Ie(t.x,t.z,st.x,st.z)>st.r-5&&(pe=Math.atan2(st.x-t.x,st.z-t.z)+(rs(Math.atan2(st.x-t.x,st.z-t.z),w)>0?-1.2:1.2)),re.autoMove={yaw:pe,mag:1}}}if(M.busy>0)return;M.dashCd<=0&&M.lock<=0&&t.dashT<=0&&(t.yaw=t.speed<2||S?w:t.yaw);for(let V=1;V<=3;V++)if(M.chain[V]&&M.chain[V].t>0){xe(V);return}let O=M.hp/M.max,K=Z.filter(V=>V.state!=="dead"&&V.type!=="dummy"&&Ie(t.x,t.z,V.x,V.z)<12).length;if(M.charge>=100){let V=_[4],F=_[3];if(V&&V.exec&&!I[5]&&(l.hp<=l.max*(l.boss?.15:.35)||l.boss||l.elite||I[4])&&T<34){xe(5);return}if(F&&!I[4]&&(!F.dmg||T<(F.dmg.kind==="around"?F.dmg.r-.5:F.dmg.kind==="melee"?F.dmg.r+4:30))){xe(4);return}if(V&&!V.exec&&!I[5]&&I[4]){xe(5);return}}for(let V=1;V<=3;V++){let F=_[V-1];if(!F||I[V]||M.cds[V]>0)continue;let pe=F.dmg,ge=F.self||{};if(F.special==="mecha"){if(M.mecha)continue;xe(V);return}if(F.special==="spirit"){if(be.length)continue;xe(V);return}if(F.special==="trap"){if(T>7)continue;xe(V);return}if(!pe&&!F.area){if((ge.heal||ge.hot)&&!ge.atk&&!ge.crit&&!ge.stealth&&O>.7)continue;xe(V);return}if(!pe&&F.area){if(F.cc&&(F.cc.sleep||F.cc.tree||F.cc.fear)&&(nt(l)||K<2&&!l.boss&&!l.elite)||F.area.kind==="around"&&T>F.area.r-1)continue;xe(V);return}if(!(pe.kind==="around"&&T>pe.r-.6)&&!(pe.kind==="melee"&&T>pe.r+4.5)&&!((pe.kind==="shot"||pe.kind==="zone"||pe.kind==="target")&&T>(pe.range||30))){xe(V);return}}(S?T<U.reach+4.5:T<U.range)&&Se()}function Rt(){if(!(M.busy>0)){for(let l=1;l<=3;l++)if(M.chain[l]&&M.chain[l].t>0){xe(l);return}for(let l=1;l<=3;l++)if(!I[l]&&M.cds[l]<=0&&!(_[l-1].special==="mecha"&&M.mecha)){xe(l);return}Se()}}function Ct(l){if(l%10===0)return[{ty:"drake",hpK:1.35}];if(l%5===0)return[{ty:"champion",hpK:1.3}];let T=l-Math.floor(l/5)-1;if([1,0,1,0,1,1,0,1][T%8])return[{ty:"pvp",cls:Jd[T*5%12],hpK:1+Math.floor(T/12)*.15}];let O=Math.min(16,4+Math.floor((l-1)/3)),K=Math.pow(Math.min(1,3.4/O),.6),V=["wolf","swift","shade"].concat(l>=2?["leap"]:[],l>=3?["archer"]:[]),F=[];for(let pe=0;pe<O;pe++)F.push({ty:l>=6&&pe%5===0?"brute":V[(pe*7+l)%V.length],hpK:K,atkK:K});return F}function Yn(){let l=++ee.wave,T=Ct(l),w=Math.random()*6.28;h("Vague "+l,T.length===1?"Duel \xB7 "+(T[0].cls?Vr[T[0].cls].name:Zd[T[0].ty].name):"1 contre "+T.length),T.forEach((O,K)=>{let V=w+K/T.length*6.2832,F=13+K%3*2.5;Ee(O.ty,st.x+Math.cos(V)*F,st.z+Math.sin(V)*F,l,{arena:!0,hpK:O.hpK,atkK:O.atkK,cls:O.cls})})}let Ut=()=>5*Math.floor(ee.best/5)+1;function yn(l,T){ee.on||(l=Math.max(1,Math.min(ee.best+1,Math.round(l||Ut()))),ee.on=!0,ee.loop=!!T,ee.wave=l-1,ee.pending=null,Ve(!0),M.hp=M.max,Yn())}function dn(){ee.on=!1,ee.pending=null;for(let l of Nt.splice(0))e.remove(l.m),l.m.material.dispose();St.length=0;for(let l of Z.slice())l.arena&&et(l);for(let l of be.slice())Pe(l);for(let l of ke.splice(0))q(l.m)}let Bt=o.querySelector(".ew-cmb");if(Bt){let l=w=>c?w===0?"Clic":String(w):"",T=`<button type="button" class="ew-atk" data-c="0"><em>${l(0)}</em><span>Attaque</span></button>`;if(_.forEach((w,O)=>{let K=O+1;T+=`<button type="button" class="ew-sk k${K}${w.ult?" ult":""}${I[K]?" lock":""}" data-c="${K}" title="${w.name.replace(/"/g,"")}"><i></i><em>${l(K)}</em><span>${I[K]?"Niv. "+Aa[O]:w.name}</span></button>`}),Bt.insertAdjacentHTML("afterbegin",T),!c){let O=V=>Bt.querySelector(V),K=(V,F,pe,ge)=>{if(!V)return;let oe=pe*Math.PI/180;V.style.right=47+F*Math.cos(oe)-ge/2+"px",V.style.bottom=47+F*Math.sin(oe)-ge/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((V,F)=>K(O(V),122,1+F*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((V,F)=>K(O(V),186,8+F*21,46))}}let zn=o.querySelector('[data-c="dodge"]'),ai=!1,He={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:Bt?[...Bt.querySelectorAll(".ew-sk")]:[]},vt="";function rn(){let l=M.armed||M.hp<M.max||ee.on,T=M.cds.map(V=>Math.ceil(V*2)).join(","),w=M.mecha?Math.round(M.mecha.hp):-1,O=[g.role,M.mecha?"Mecha "+Math.max(0,Math.round(M.mecha.hp/M.mecha.max*100))+" %":"",m.mantra?"Mantra":"",M.stealthT>0?"Dissimul\xE9":"",b>0&&M.hp<M.max?"R\xE9g\xE9n\xE9ration":"",M.hotT>0?"Soin continu":"",M.atkT>0?"Attaque +"+Math.round(M.atkB*100)+" %":"",M.critT>0?"Critique +"+Math.round(M.critB*100)+" %":"",M.aspdT>0?"Cadence +"+Math.round(M.aspdB*100)+" %":"",M.guardT>0?"Garde":"",M.absorbT>0?"Absorption":"",M.inv>1?"Invuln\xE9rable":"",be.length?be[0].S.name:""].filter(Boolean).join(" \xB7 "),K=[l,Math.round(M.hp),Math.round(M.shield),Math.round(M.charge),T,w,O,ee.on,ee.wave,Z.length,M.chain.map(V=>V&&V.t>0?1:0).join("")].join("|");if(K!==vt){if(vt=K,He.hud&&He.hud.classList.toggle("on",l),He.hp&&(He.hp.style.width=M.hp/M.max*100+"%",He.hpT.textContent=Math.round(M.hp)+" / "+M.max,He.sh.style.width=(M.mecha?Math.max(0,M.mecha.hp/M.mecha.max*100):Math.min(100,M.shield/M.max*100))+"%"),He.ult&&(He.ult.style.width=M.charge+"%",He.ultB.classList.toggle("full",M.charge>=100)),He.stt&&(He.stt.textContent=O),He.wave){let V=Z.filter(F=>F.arena&&F.state!=="dead").length;He.wave.textContent=ee.on?"Vague "+(ee.wave+(ee.loop&&ee.pending!=null?1:0))+(ee.loop?" en boucle":"")+(V?" \xB7 "+V+" ombre"+(V>1?"s":""):"")+(ee.best?" \xB7 record "+ee.best:""):"",He.wave.classList.toggle("on",ee.on)}He.sk.forEach(V=>{let F=+V.dataset.c,pe=_[F-1],ge=V.querySelector("i"),oe=M.chain[F]&&M.chain[F].t>0?M.chain[F].s:null,ye=V.querySelector("span"),De=I[F]?"Niv. "+Aa[F-1]:(oe||pe).name;ye.textContent!==De&&(ye.textContent=De),V.classList.toggle("chain",!!oe),oe?ge.style.height="0%":pe.ult?(V.classList.toggle("ready",!I[F]&&M.charge>=100),ge.style.height=I[F]?"0%":100-M.charge+"%"):(ge.style.height=(M.cds[F]>0?M.cds[F]/M.cdMax[F]*100:0)+"%",V.classList.toggle("ready",pe.special==="mecha"&&!!M.mecha))})}}for(let[l,T]of G1)Ee("dummy",l,T,1,{quiet:!0,yaw:0});let jn=H1.map(([l,T,w,O,K])=>({x:l,z:T,type:w,lvl:O,n:K,es:[],t:0})).filter(l=>r(l.x,l.z)>1.6),Ue=0,Tt=0;return re.update=function(l){for(let w=we.length-1;w>=0;w--){let O=we[w];O.t-=l,O.t<=0&&(we.splice(w,1),O.fn())}M.busy-=l,M.lock-=l,M.inv-=l,M.lastHit+=l,M.dashCd-=l,M.slowT-=l,M.focusT-=l,M.rezCd-=l,M.stunT-=l,M.rootT-=l,M.eslowT-=l,re.warnT-=l;for(let w of M.chain)w&&(w.t-=l);for(let w=0;w<M.cds.length;w++)M.cds[w]>0&&!(w===1&&M.mecha)&&(M.cds[w]-=l);for(let w of["atkT","critT","aspdT","guardT","absorbT","hotT"])M[w]>0&&(M[w]-=l);if(M.shieldT>0&&(M.shieldT-=l,M.shieldT<=0&&(M.shield=0)),M.stealthT>0&&(M.stealthT-=l,M.stealthT<=0&&ft(0)),M.armed&&Dn(t.x,t.z,30)&&Ke(3.4*l/Math.max(.02,1-H)),M.down>0)M.down-=l,M.down<=0&&Yt();else if(M.hp<M.max){let w=0;b>0&&M.lastHit>2&&(w+=M.max*b/1e3*l),!ee.on&&M.lastHit>6&&(w+=M.max*.07*l),m.regen&&(w+=M.max*m.regen*l),M.hotT>0&&(w+=M.max*M.hot/100*l),w&&(M.hp=Math.min(M.max,M.hp+w))}re.auto?yt():(re.autoMove=null,re.lock?he():re.lockE=null);{let w=(re.lock||re.auto)&&re.lockE&&re.lockE.state!=="dead"?re.lockE:null;le.visible=!!w&&!t.inside,w&&(le.position.set(w.x,w.y+.12,w.z),le.scale.setScalar(w.rad+.75+Math.sin(t.t*5)*.06),le.rotation.z=t.t*1.6)}(M.queue||re.held)&&M.busy<=0&&M.down<=0&&(M.queue=!1,Se());for(let w of be.slice())We(w,l);if(Vt(l),M.mecha){let w=M.mecha,O=w.M;w.t-=l,w.ph+=l*(2+Math.abs(t.speed)*.9);let K=Math.min(1,Math.abs(t.speed)/6)*Math.sin(w.ph)*.55;O.legs[0].rotation.x=K,O.legs[1].rotation.x=-K,w.swing>0&&(w.swing-=l);let V=w.swing>0?Math.sin((1-w.swing/.4)*Math.PI):0;O.arms[0].rotation.x=-(w.arm!==1?V:0)*1.9+K*.4,O.arms[1].rotation.x=-(w.arm!==0?V:0)*1.9-K*.4,O.g.position.set(t.x,t.y+Math.abs(Math.sin(w.ph))*.06*Math.min(1,Math.abs(t.speed)/6),t.z),O.g.rotation.y=t.yaw,O.g.visible=!t.inside,w.t<=0&&tt(!1)}A&&!M.armed&&!M.manual&&!t.mount&&!t.inside&&!t.talking&&Ve(!0),M.armed&&!ee.on&&!A&&!M.mecha&&(M.idle+=l,M.idle>25&&!Z.some(w=>w.type!=="dummy"&&w.state!=="idle"&&w.state!=="dead")&&Ve(!1));for(let w of Z.slice())w.obj.visible=!t.inside,!t.inside&&(w.arena||Ie(w.x,w.z,t.x,t.z)<80)&&pi(w,l);Gi(l);for(let w=J.length-1;w>=0;w--)ue(J[w],l)&&(q(J[w].m),J.splice(w,1));for(let w=Q.length-1;w>=0;w--){let O=Q[w];O.t+=l;let K=Math.min(1,O.t/O.dur);O.upd(K),K>=1&&(q(O.obj),Q.splice(w,1))}if(re.shake=Math.max(0,re.shake-l*2.2),C.visible=(M.shield>0||M.inv>1||M.guardT>0||M.absorbT>0)&&!t.inside&&!M.mecha,C.visible&&(C.position.set(t.x,t.y+1,t.z),C.material.opacity=.14+Math.sin(t.t*5)*.04),ne.visible=M.atkT>0||M.critT>0||M.aspdT>0||!!m.mantra&&M.armed,ne.visible&&(ne.position.set(t.x,t.y+.12,t.z),ne.scale.setScalar((m.mantra&&M.atkT<=0&&M.critT<=0?.8:1.1)+Math.sin(t.t*6)*.12),ne.rotation.y=t.t*2),ee.on)if(!dt(t.x,t.z)&&M.down<=0)h("D\xE9fi abandonn\xE9","Vague "+ee.wave),dn();else if(ee.pending==null&&!Z.some(w=>w.arena&&w.state!=="dead")){let w=ee.wave>ee.best;ee.best=Math.max(ee.best,ee.wave),w&&u.onArena&&u.onArena(ee.best);let O=u.onWave?u.onWave(ee.wave):null;rt(Math.round(M.max*.3)),h("Vague "+ee.wave+" termin\xE9e",[O?"+"+O.x+" XP \xB7 +"+O.k+" kinahs"+(O.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui : 10 %)"):"",w?"nouveau record":""].filter(Boolean).join(" \xB7 ")),ee.pending=ee.loop?2.2:3.2,ee.loop&&ee.wave--}else ee.pending!=null&&(ee.pending-=l,ee.pending<=0&&(ee.pending=null,Yn()));if((Ue+=l)>.6){Ue=0;for(let w of jn){let O=Ie(w.x,w.z,t.x,t.z);if(w.t>0&&(w.t-=.6),O<85&&!w.es.length&&w.t<=0&&!t.inside)for(let K=0;K<w.n;K++){let V=K/w.n*6.28,F=w.x+Math.sin(V)*2.5*(w.n>1),pe=w.z+Math.cos(V)*2.5*(w.n>1);w.es.push(Ee(w.type,F,pe,w.lvl,{wild:w,quiet:!0}))}else if(O>150&&w.es.length)for(let K of w.es.slice())K.state="gone",et(K)}}re.warnT>0!==ai&&(ai=re.warnT>0,zn&&zn.classList.toggle("warn",ai),o.classList.toggle("ew-warn",ai)),(Tt+=l)>.08&&(Tt=0,rn())},Object.assign(re,{attack:Se,skill:xe,dodge:Ae,rotate:Rt,arm:Ve,nextLock:Je,pickLock:he,toggleArm:()=>{M.manual=M.armed,Ve(!M.armed)},startArena:yn,arenaStart:Ut,inArena:dt,spawn:Ee,moveK:()=>M.down>0||M.lock>0||M.stunT>0||M.rootT>0?0:(M.slowT>0?M.slowK:1)*(M.eslowT>0?1-M.eslowK:1),dispose(){e.remove(le),le.geometry.dispose(),le.material.dispose(),M.mecha&&(e.remove(M.mecha.M.g),Li(M.mecha.M.g),M.mecha=null,n.group.visible=!0),ft(0);for(let l of be.slice())Pe(l);for(let l of ke.splice(0))q(l.m);for(let l of Q)q(l.obj);for(let l of J)q(l.m);for(let l of Z)l.barTex.dispose();for(let l in Be)Be[l].dispose()}}),A&&Ve(!0),rn(),re}var fh=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Wr=(i,e)=>Math.exp(-(i*i)/(2*e*e)),Ps=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),W1=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Kt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=fh(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*Wr(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*Wr(n,230),t+=35*Wr(Math.hypot(i-190,e+175),55)+16*Wr(Math.hypot(i-120,e+235),50)+26*Wr(Math.hypot(i,e+335),72);for(let s of W1){let r=1-fh(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*Wr(Math.abs(i-Ps(e)),12),t}var tf=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function fl(i,e){let t=1e9;for(let[n,s,r,a]of tf){let o=r-n,c=a-s,h=Math.max(0,Math.min(1,((i-n)*o+(e-s)*c)/(o*o+c*c)));t=Math.min(t,Math.hypot(i-n-o*h,e-s-c*h))}return t}function $d(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-Ps(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let c=fh(44,72,t);o=[an(.4,.86,c*c),an(.37,.89,c*c),an(.36,.94,c*c)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&fl(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var jd=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],Qd={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},X1={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},q1={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function La(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Da=class{constructor(){this.b={},this.boxes=[],this.m4=new Ht,this.q=new ei,this.e=new _s}add(e,t,n,s,r,a=0,o=1,c=1,h=1,u=0,f=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,f,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new W(n,s,r),this.q,new W(o,c,h)));for(let d of Object.keys(p.attributes))d!=="position"&&d!=="normal"&&p.deleteAttribute(d);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),c=(n*a+s*o)/2,h=(n*o+s*a)/2;this.boxes.push([e-c,e+c,t-h,t+h])}build(e,t){let n=new _t;for(let s in this.b){let r=wa(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new Fe(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},je=new ti(1,1,1),Pa=new Sn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),hn=new On(.5,.5,1,12),qr=new Sn(.5,1,12),as=new Mi(.5,12,8),Fn=new Ms(1,1),Y1=new Mi(.5,16,8,0,Math.PI*2,0,Math.PI/2),Xr=new On(.5,.5,1,56),Ia=(()=>{let i=new ni;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new Tr(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function bi(i,e,t,n,s,r,a,o,c,h,u={}){let f=u.y??Kt(t,n);i.add(c,je,t,f+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(h,je,t,f+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(h,Pa,t,f+a+p/2,n,o,s+1,p,r+1):i.add(h,Ia,t,f+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",je,t+Math.cos(o)*s*.25,f+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let d=Math.cos(o),x=Math.sin(o),y=Math.max(1,Math.floor(a/3.1));for(let[v,E,z,P]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let I=Math.max(1,Math.floor(z/2.8));for(let U=0;U<y;U++)for(let S=0;S<I;S++){if(U===0&&E===1&&S===Math.floor(I/2))continue;let A=(S-(I-1)/2)*(z/I),H=v?v*(P+.04):A,G=E?E*(P+.04):A,te=t+H*d+G*x,N=n-H*x+G*d,M=o+Math.atan2(v,E);i.add(e()<(u.lit??.55)?"winLit":"winDark",Fn,te,f+1.9+U*3.1,N,M,.9,1.25,1)}}let g=r/2+.05,m=t+g*x,_=n+g*d;return i.add("wood",Fn,m,f+1.05,_,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*x,n+(r/2+1.6)*d]}}function Ca(i,e,t){let n=Kt(e,t);i.add("iron",hn,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",je,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",as,e,n+3.55,t,0,.42,.5,.42)}function Z1(i,e){let t=new Da,n=La(20261112),s=[],r=[],a=(d,x,y,g)=>y.some(m=>Math.hypot(d-m[0],x-m[1])<(m[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],c=["wallA","wallB","wallC","wallW"],h=["roofA","roofB"];for(let d=-150;d<=150;d+=24)for(let x=-150;x<=160;x+=22){let y=d+(n()-.5)*6,g=x+(n()-.5)*5;if(Math.hypot(y,g)>158||a(y,g,o,0)||fl(y,g)<8.5||Math.abs(y-Ps(g))<40||n()<.12)continue;let _=g>-10&&y>-70,v=9+n()*7,E=8+n()*6,z=(_?5.5:7)+n()*(_?4.5:8);bi(t,n,y,g,v,E,z,n()<.5?0:Math.PI/2,_?n()<.5?"wallB":"wallC":c[Math.floor(n()*4)],h[Math.floor(n()*2)],{lit:_?.4:.6,hip:n()<.25})}for(let[d,x,y,g]of tf.slice(0,6)){let m=Math.floor(Math.hypot(y-d,g-x)/22);for(let _=1;_<m;_++){let v=_/m,E=d+(y-d)*v,z=x+(g-x)*v,P=-(g-x),I=y-d,U=Math.hypot(P,I);Ca(t,E+P/U*4.6,z+I/U*4.6)}}{let d=Kt(-18,14);bi(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",je,-12,d+3.2,22.5,.35,5.5,1.4,.05),t.add("white",je,-6.5,d+3,20.6,.35,2.4,1.7,.05),t.add("iron",hn,-15.5,d+2,24,0,.1,4,.1),t.add("iron",hn,-4.5,d+2,19.6,0,.1,4,.1),t.add("wood",je,-37,d+4.1,33,1.2,9,.35,7);for(let[x,y]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),m=Math.sin(1.2);t.add("wood",hn,-37+x*g+y*m,d+2,33-x*m+y*g,0,.35,4,.35)}t.add("stoneD",je,-39.5,d+1,35,1.2,2.6,2,2.2),t.add("ember",je,-39.5,d+2.05,35,1.2,1.9,.2,1.5),t.add("iron",je,-35.5,d+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",je,-35.5,d+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,d+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let d=Kt(0,-95);t.add("stone",je,0,d+10,-98,0,22,21,46),t.add("roofB",Ia,0,d+20.4,-98,0,24,10,47),t.add("stone",je,0,d+22,-70.5,0,11,45,10),t.add("roofB",Pa,0,d+53,-70.5,0,12,18,11),t.add("gold",je,0,d+64,-70.5,0,.3,4,.3),t.add("gold",je,0,d+64.6,-70.5,0,1.8,.3,.3),t.add("rose",hn,0,d+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",Fn,0,d+2.6,-65.42,0,3.4,5.2,1);for(let x=0;x<4;x++)t.add("stoneL",je,0,d-.3+x*-0+.2*(3-x),-63.6+x*.9,0,12+x*1.4,.4,1);for(let x=0;x<6;x++)for(let y of[-1,1])t.add("rose",Fn,y*11.06,d+9,-116+x*7.2,y*Math.PI/2,2.2,8,1),t.add("stoneD",je,y*12,d+6.5,-112.4+x*7.2,0,1.6,13,1.6);for(let x of[30,36])for(let[y,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",Fn,y*5.56,d+x,-70.5+(g?5.06:0),Math.atan2(y,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,d+5,-61,16767392,1.6,22])}{let d=Kt(-118,-22);bi(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),bi(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let x=0;x<26;x++)t.add("iron",hn,-96,d+1.4,-52+x*2.2,0,.12,2.8,.12);t.add("iron",je,-96,d+2.5,-24.5,0,.14,.14,56),t.add("iron",je,-96,d+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let d=Kt(-62,112);t.add("wallC",je,-62,d+5,122,.9,30,11,12),t.add("iron",hn,-62,d+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",Fn,-57.2,d+6,118.2,.9+Math.PI,7,6,1);for(let x=0;x<12;x++)t.add("wood",je,-74+x*2.6,d+.12,102+x*2.05,.9,.5,.2,5);t.add("iron",je,-60,d+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",je,-58.6,d+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let d=Kt(70,30);for(let x of[-1,1])t.add("stoneD",je,70+x*3.6*Math.cos(-1.2),d+3,30-x*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",je,70,d+7.2,30,-1.2,9.4,2,3.2),t.add("void",Fn,70+.4*Math.sin(-1.2),d+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let x of[-1,1]){let y=70+x*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-x*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",hn,y,d+.3,g,0,.16,.6,.16),t.add("lamp",as,y,d+.72,g,0,.2,.3,.2)}r.push([67,d+1.6,28,16762977,1.1,10])}bi(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),bi(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let _=0;_<9;_++)if(t.add("wood",je,188+_*2.2,1.1,24,0,2,.25,4.6),_%2===0)for(let v of[-1,1])t.add("wood",hn,188+_*2.2,1.1-1.6,24+v*2.1,0,.3,3.6,.3);let x=(_,v,E,z)=>{t.add(z,as,_,.55,v,E,2,1.3,5.2),t.add("void",je,_,1,v,E,1.5,.3,4.2),t.add("wood",je,_,.95,v,E,1.7,.1,.5)};x(206,29,.25,"wood"),x(203,6,-.2,"wallC"),x(204,48,.1,"wallB"),bi(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),bi(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),Ca(t,186,21);let y=-56,g=Ps(y),m=3.6;t.add("stone",je,g,m,y,0,40,.8,6.5);for(let _ of[-1,1])t.add("stone",je,g,m+.9,y+_*3,0,40,1,.5);for(let _ of[-9,9])t.add("stoneD",je,g+_,m-3,y,0,2.4,6,6);Ca(t,g-19,y+2.6),Ca(t,g+19,y-2.6)}{let d=Kt(190,-175);t.add("stoneL",hn,190,d+4,-175,0,13,8,13),t.add("iron",Y1,190,d+8,-175,0,13,13,13),t.add("void",je,190,d+11.5,-171,0,1.6,5,6,-.6),t.add("wood",Fn,190,d+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let d=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[y,g,m]of d)bi(t,n,y,g,7.5,6.5,4.6,m,"wallA","snow",{lit:.7});let x=Kt(-250,-250);bi(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",je,-253.2,x+6,-227.6,.2,3,12,3),t.add("snow",Pa,-253.2,x+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",hn,-252,x+.5,-252,0,2.2,1,2.2),t.add("void",hn,-252,x+1.02,-252,0,1.7,.02,1.7);for(let y of[-1,1])t.add("wood",hn,-252+y*1.1,x+1.6,-252,0,.16,2.4,.16);t.add("wood",Ia,-252,x+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",hn,-246,x+.2,-244,0,1.6,.4,1.6),t.add("ember",qr,-246,x+.8,-244,0,.9,1.2,.9),r.push([-246,x+1.6,-244,16747066,2,18])}{let d=Kt(3,190);t.add("wood",hn,3,d+1.4,190,0,.18,2.8,.18),t.add("wood",je,3.5,d+2.4,190,.2,2.2,.5,.08)}{let d=st.x,x=st.z,y=Kt(d,x),g=44;t.add("stoneD",Xr,d,y+.02,x,0,72,.1,72),t.add("sand",Xr,d,y+.06,x,0,45.6,.1,45.6),t.add("stoneD",Xr,d,y+.09,x,0,5.4,.1,5.4),t.add("neon",Xr,d,y+.1,x,0,4.6,.1,4.6),t.add("stoneD",Xr,d,y+.11,x,0,4.2,.1,4.2),t.add("ember",Xr,d,y+.12,x,0,1.1,.1,1.1);for(let m=0;m<g;m++){let _=(m+.5)/g*6.2832,v=Math.cos(_),E=Math.sin(_),z=-_+Math.PI/2,P=_>Math.PI?_-6.2832:_;if(Math.abs(P)<st.gate+.05)continue;for(let S=0;S<4;S++){let A=24+S*2.1,H=6.2832*(A+1.1)/g+.06;t.add(S%2?"stone":"stoneL",je,d+v*A,y+(.9+S)/2,x+E*A,z,H,.9+S,2.2)}let I=32.8,U=6.2832*(I+.8)/g+.06;t.add("stone",je,d+v*I,y+4.3,x+E*I,z,U,8.6,1.4),m%2&&t.add("stoneL",je,d+v*I,y+9.1,x+E*I,z,U*.6,1,1.4),m%4===1&&(t.add("iron",hn,d+v*I,y+11.4,x+E*I,0,.14,5,.14),t.add(m%8===1?"banner":"flag",je,d+v*I-E*.95,y+13.1,x+E*I+v*.95,z,1.8,1.1,.06))}for(let m of[-1,1]){let _=m*(st.gate+.11),v=d+Math.cos(_)*30.5,E=x+Math.sin(_)*30.5;t.add("stoneL",hn,v,y+6,E,0,4.6,12,4.6),t.add("roofA",qr,v,y+14.3,E,0,5.6,4.6,5.6),t.add("stoneD",hn,d+37.5,y+.6,x+m*5,0,1.2,1.2,1.2),t.add("ember",qr,d+37.5,y+1.6,x+m*5,0,.9,1.2,.9),r.push([d+37.5,y+2.6,x+m*5,16747066,1.8,18])}t.add("stone",je,d+30.5,y+9.8,x,0,4.4,3,11),t.add("banner",je,d+32.8,y+8.8,x,0,.08,3.4,3),t.add("gold",je,d+32.86,y+8.8,x,0,.08,1.4,.4),t.add("gold",je,d+32.86,y+9.1,x,0,.08,.4,1.3)}let u=[];for(let d of i.houses||[]){let x=Qd[d.id];if(!x)continue;let[y,g,m]=x,_=Kt(y,g),v=Math.cos(m),E=Math.sin(m),z,P=(I,U)=>[y+I*v+U*E,g-I*E+U*v];if(d.id==="h0"){for(let[H,G,te,N]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[M,b]=P(H,G);t.add("rock",as,M,_+N*.2,b,n()*3,te,N,te)}let[I,U]=P(0,1.2);t.add("void",as,I,_+1.2,U,m,4.4,4.6,2.4);let[S,A]=P(0,3.5);t.add("ember",qr,S,_+.4,A,0,.7,.9,.7),r.push([S,_+1.3,A,16747066,1.6,12]),z=P(0,4.2),t.solid(...P(0,-5),16,9)}else if(d.id==="h1")z=[72,27];else if(d.id==="h2"){t.add("stoneL",je,...(I=>[I[0],_+4,I[1]])(P(-5.5,0)),m,1,9,16),t.add("stoneL",je,...(I=>[I[0],_+2.6,I[1]])(P(5.5,-2)),m,1,6.2,11),t.add("stoneL",je,...(I=>[I[0],_+5,I[1]])(P(0,-8)),m,12,11,1),t.add("stoneL",Ia,...(I=>[I[0],_+10.4,I[1]])(P(0,-8)),m,12,4,1),t.add("roofB",je,...(I=>[I[0],_+8.4,I[1]])(P(-2.6,-3)),m,6.4,.3,9.5,0,-.5),t.add("rose",Fn,...(I=>[I[0],_+6.5,I[1]])(P(0,-7.44)),m,2,4.6,1),t.add("stoneD",je,...(I=>[I[0],_+.6,I[1]])(P(0,-5.6)),m,3,1.2,1.6);for(let[I,U]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(U,as,...(S=>[S[0],_+.25,S[1]])(P(I,-3.4)),0,.7,.5,.7);z=P(0,9),t.solid(...P(-5.5,0),1.2,16,m),t.solid(...P(0,-8),12,1.2,m)}else if(d.id==="h3"){let I=bi(t,n,y,g,22,14,11,m,"wallA","roofA",{lit:.85,hip:!0});for(let U of[-1,1]){let[S,A]=P(U*13.5,1);bi(t,n,S,A,6,9,13,m,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let U of[-1,1])Ca(t,...P(U*3,10));z=I.door}else if(d.id==="h4"){t.add("stone",je,y,_+6,g,m,26,13,20);for(let[S,A]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[H,G]=P(S,A);t.add("stoneL",hn,H,_+9,G,0,7,19,7),t.add("roofB",qr,H,_+22,G,0,8.2,8,8.2),t.add("flag",je,H+.9,_+27.2,G,m,1.8,1,.06),t.add("iron",hn,H,_+27,G,0,.12,3,.12)}for(let S=-5;S<=5;S++){let[A,H]=P(S*2.3,10.2);S%2&&t.add("stone",je,A,_+13.4,H,m,1.2,1,.8)}let[I,U]=P(0,10.06);t.add("wood",Fn,I,_+2.4,U,m,4,5,1);for(let S of[-7,7])for(let A of[5,9]){let[H,G]=P(S,10.06);t.add("winLit",Fn,H,_+A,G,m,1.2,1.8,1)}z=P(0,12.5),t.solid(y,g,30,24,m)}else if(d.id==="h5"){t.add("obs",je,y,_+9,g,m,20,18,16),t.add("obs",Pa,y,_+24,g,m,16,12,13);for(let[S,A,H]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[G,te]=P(S,A);t.add("obs",je,G,_+H/2,te,m,5,H,5),t.add("obs",Pa,G,_+H+4,te,m,5.6,8,5.6),t.add("umbra",Fn,...(N=>[N[0],_+H-3,N[1]])(P(S,A+2.54)),m,1,3,1)}let[I,U]=P(0,8.06);t.add("umbra",Fn,I,_+3.4,U,m,3.4,6.8,1),t.add("neon",Fn,I,_+3.4,U+.02*v,m,.3,6.8,1),z=P(0,10.6),t.solid(y,g,30,18,m),r.push([z[0],_+4,z[1],9133302,2.4,22])}else if(d.id==="h6"){t.add("light",je,y,_+7,g,m,26,14,16),t.add("gold",Ia,y,_+14,g,m,28,8,17.4);for(let S=-4;S<=4;S++)for(let A of[3,7,11]){if(S===0&&A===3)continue;let[H,G]=P(S*2.8,8.06);t.add("sun",Fn,H,_+A,G,m,1.3,2.2,1)}let[I,U]=P(0,8.08);t.add("sun",Fn,I,_+3,U,m,3,6,1);for(let S=0;S<6;S++){let[A,H]=P(0,9+S*1.1);t.add("light",je,A,_-.2-S*.02,H,m,8+S,.5,1.1)}z=P(0,11.5),t.solid(y,g,26,16,m),r.push([z[0],_+6,z[1],16773312,3.2,40])}u.push({...d,x:z[0],z:z[1]})}let f=[],p=e.trees;for(let d=0;d<p*6&&f.length<p;d++){let x=(n()-.5)*860,y=(n()-.5)*860,g=Kt(x,y);if(Math.hypot(x,y)<176&&n()>.04||g<2.2||g>70||Math.abs(x-Ps(y))<16||fl(x,y)<5||Math.hypot(x-318,y-300)<104||a(x,y,Object.values(Qd).map(v=>[v[0],v[1],24]),0)||a(x,y,[[-250,-250,44],[190,-175,16],[st.x,st.z,42]],0))continue;let _=y>150?1:.45;n()>_||f.push({x,y:g,z:y,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:f}}var ef=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function J1(i,e,t,n){let[s,r,a,o]=ef[e.r]||ef[0],c=5+e.r*.5,h=La(77+e.r);i.add(r,je,0,n-.25,0,0,a,.5,o),i.add(s,je,0,n+c/2,-o/2,0,a,c,.5),i.add(s,je,-a/2,n+c/2,0,0,.5,c,o),i.add(s,je,a/2,n+c/2,0,0,.5,c,o),i.add("rug",je,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",je,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",je,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",qr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",je,0,n+3.8,-o/2+.6,0,1.6,c-3.2,.8),i.add("wood",je,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[d,x]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",hn,d*Math.min(2.6,a*.15),n+.47,x,0,.16,.95,.16);for(let d=-1;d<=1;d++)for(let x of[-1,1])i.add("wood",hn,d*1.3,n+.3,1+x*1.4,0,.55,.6,.55);i.add("white",hn,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",as,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let d=0;d<u;d++){let x=d%2?1:-1,y=Math.floor(d/2),g=x*(a/2-1.5),m=-o/2+2.6+y*2.6;if(m>o/2-1.5)break;i.add("wood",je,g,n+.35,m,0,2.2,.5,1.1),i.add("white",je,g,n+.66,m,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][d%4],je,g-x*.3,n+.75,m,0,1.5,.1,1.02)}for(let d of[-1,1])for(let x=-1;x<=1;x+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",Fn,d*(a/2-.27),n+2.6,x*o*.22,-d*Math.PI/2,1.3,1.9,1);let f=t.instruments||[],p=a/2-2;if(f.includes("i4")&&(i.add("wood",je,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",je,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),f.includes("i5")){for(let d=0;d<7;d++)i.add("gold",hn,-p+d*.34,n+1.6+Math.abs(3-d)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-d)*.6,.26);i.add("wood",je,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return f.includes("i1")&&(i.add("wood",as,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",je,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),f.includes("i3")&&(i.add("wallC",as,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",je,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(f.includes("i6")||f.includes("i2")||f.includes("i0"))&&(i.add("gold",je,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",je,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",je,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",Fn,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:c,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(d=>Math.abs(d[0])<a/2-2&&Math.abs(d[1])<o/2-1.5)}}var K1=`
.ew{position:fixed;inset:0;z-index:140;background:#07070b;touch-action:none;user-select:none;-webkit-user-select:none;font-family:'Barlow',system-ui,sans-serif;color:#eef2ff;overflow:hidden}
.ew canvas.ew-c{position:absolute;inset:0;width:100%;height:100%;display:block}
.ew-top{position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;align-items:flex-start;padding:calc(env(safe-area-inset-top,0px) + 10px) 12px;pointer-events:none}
.ew-top>*{pointer-events:auto}
.ew-btn{font:600 12px/1 'Oxanium','Barlow',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#cfeefc;background:rgba(8,8,20,.6);border:1px solid rgba(0,240,255,.4);padding:9px 12px;cursor:pointer;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
.ew-btn:active{background:rgba(0,240,255,.2)}
.ew-map{width:124px;height:124px;border:1px solid rgba(0,240,255,.45);background:#0b0b12;box-shadow:0 0 18px rgba(0,0,0,.6);display:block}
.ew-zone{position:absolute;left:0;right:0;top:19%;text-align:center;pointer-events:none;opacity:0;transition:opacity 1.2s}
.ew-zone.on{opacity:1}
.ew-zone b{display:block;font:700 clamp(22px,5.4vw,40px)/1.1 'Oxanium','Barlow',sans-serif;letter-spacing:.2em;text-transform:uppercase;text-shadow:0 2px 18px #000,0 0 30px rgba(0,0,0,.8)}
.ew-zone i{display:block;margin-top:8px;font:italic 15px 'Spectral',Georgia,serif;color:#ffe6c2;text-shadow:0 1px 10px #000}
.ew-zone:before,.ew-zone:after{content:'';display:block;height:1px;width:min(60vw,360px);margin:10px auto;background:linear-gradient(90deg,transparent,#ffd9a0,transparent)}
.ew-prompt{position:absolute;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 150px);transform:translateX(-50%);display:none;white-space:nowrap}
.ew-prompt.on{display:block}
.ew-prompt button{font:600 14px 'Oxanium','Barlow',sans-serif;letter-spacing:.06em;color:#05050a;background:linear-gradient(90deg,#7ff6ff,#00f0ff 45%,#a48bff);border:0;padding:12px 20px;box-shadow:0 0 26px rgba(0,240,255,.45);cursor:pointer}
.ew-pad{position:absolute;right:14px;bottom:calc(env(safe-area-inset-bottom,0px) + 18px);display:flex;flex-direction:column;gap:10px;align-items:flex-end}
.ew-rnd{width:62px;height:62px;border-radius:50%;font:600 10.5px/1.1 'Oxanium','Barlow',sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#cfeefc;background:rgba(8,8,20,.55);border:1px solid rgba(0,240,255,.45);cursor:pointer;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}
.ew-rnd.on{background:rgba(0,240,255,.25);color:#fff}
.ew-rnd:disabled{opacity:.35}
.ew-joy{position:absolute;left:0;bottom:0;width:46%;height:52%;}
.ew-stick{position:absolute;width:112px;height:112px;margin:-56px 0 0 -56px;border-radius:50%;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.05);pointer-events:none}
.ew-stick i{position:absolute;left:50%;top:50%;width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;background:rgba(0,240,255,.4);border:1px solid rgba(0,240,255,.8)}
.ew-keys{position:absolute;left:12px;right:96px;bottom:12px;font:10px/1.7 'JetBrains Mono',monospace;color:rgba(220,230,255,.75);text-shadow:0 1px 4px #000;pointer-events:none}
.ew-keys kbd{display:inline-block;min-width:18px;padding:0 5px;margin-right:3px;text-align:center;border:1px solid rgba(255,255,255,.4);background:rgba(8,8,20,.5);font:inherit}
.ew-dlg{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 14px);width:min(680px,calc(100% - 20px));background:linear-gradient(180deg,rgba(10,12,24,.94),rgba(6,6,14,.96));border:1px solid rgba(0,240,255,.5);box-shadow:0 0 40px rgba(0,0,0,.7),0 0 0 1px rgba(139,92,246,.25) inset;padding:14px 16px 12px;display:none}
.ew-dlg.on{display:block}
.ew-dlg h4{margin:0;font:700 15px 'Oxanium','Barlow',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#7ff6ff}
.ew-dlg h4 small{font:500 11px 'Barlow',sans-serif;letter-spacing:.06em;color:#b9a8ff;margin-left:8px;text-transform:none}
.ew-dlg p{margin:8px 0 10px;font:17px/1.55 'Spectral',Georgia,serif;min-height:3.1em}
.ew-dlg .row{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap}
.ew-bond{float:right;font:11px 'JetBrains Mono',monospace;color:#ffd479}
.ew-load{position:absolute;inset:0;display:grid;place-items:center;background:#07070b;font:600 13px 'Oxanium','Barlow',sans-serif;letter-spacing:.3em;color:#7ff6ff;text-transform:uppercase;transition:opacity .8s}
.ew-menu{position:absolute;inset:0;background:rgba(4,4,10,.82);display:none;place-items:center;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.ew-menu.on{display:grid}
.ew-menu div{display:flex;flex-direction:column;gap:10px;min-width:240px;text-align:center}
.ew-menu h3{margin:0 0 6px;font:700 18px 'Oxanium','Barlow',sans-serif;letter-spacing:.2em;text-transform:uppercase}
.ew-pc .ew-joy{display:none}
.ew-mob .ew-keys{display:none}
.ew-tl{display:flex;gap:10px;align-items:flex-start}
.ew-hud{display:none;flex-direction:column;gap:4px;width:min(38vw,220px);pointer-events:none}
.ew-hud.on{display:flex}
.ew-bar{position:relative;height:14px;background:rgba(6,6,14,.7);border:1px solid rgba(255,255,255,.28);overflow:hidden}
.ew-bar i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,#ff5a6e,#ff9a6a);transition:width .15s}
.ew-bar b{position:absolute;left:0;top:0;height:4px;background:#7fd8ff}
.ew-bar span{position:absolute;inset:0;font:600 10px/13px 'JetBrains Mono',monospace;text-align:center;text-shadow:0 1px 2px #000}
.ew-ult{height:7px}.ew-ult i{background:linear-gradient(90deg,#8b5cf6,#00f0ff)}.ew-ult.full{box-shadow:0 0 12px #8b5cf6;border-color:#c8b6ff}
.ew-st{font:600 10px 'Barlow',sans-serif;color:#ffd479;text-shadow:0 1px 3px #000;min-height:12px}
.ew-wave{position:absolute;left:calc(env(safe-area-inset-left,0px) + 12px);top:calc(env(safe-area-inset-top,0px) + 52px);display:none;font:700 12px 'Oxanium','Barlow',sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:6px 12px;background:rgba(8,8,20,.6);border:1px solid rgba(255,77,109,.5);color:#ffd9de;white-space:nowrap}
.ew-wave.on{display:block}
.ew-skn{position:absolute;left:50%;bottom:36%;transform:translateX(-50%);font:700 clamp(15px,3.4vw,24px) 'Oxanium','Barlow',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#fff;text-shadow:0 0 14px rgba(139,92,246,.9),0 2px 6px #000;opacity:0;pointer-events:none;white-space:nowrap}
.ew-skn.on{animation:ewskn 1.3s ease-out}
@keyframes ewskn{0%{opacity:0;transform:translateX(-50%) scale(1.25)}12%{opacity:1;transform:translateX(-50%) scale(1)}75%{opacity:1}100%{opacity:0}}
.ew-num{position:absolute;transform:translate(-50%,-50%);font:800 17px 'Oxanium','Barlow',sans-serif;color:#fff;text-shadow:0 0 6px #000,0 1px 2px #000;pointer-events:none;animation:ewnum .85s ease-out forwards;white-space:nowrap}
.ew-num.crit{color:#ffd24a;font-size:23px}.ew-num.hurt{color:#ff5a6e;font-size:20px}.ew-num.heal{color:#8dffb0}.ew-num.dot{color:#ff9a4a;font-size:14px}.ew-num.info{color:#b9e6ff;font-size:14px}
@keyframes ewnum{0%{opacity:0;margin-top:6px}15%{opacity:1}100%{opacity:0;margin-top:-46px}}
.ew.ew-hit:after{content:'';position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 90px rgba(255,40,60,.55)}
.ew-cmb{position:absolute;right:calc(env(safe-area-inset-right,0px) + 8px);bottom:calc(env(safe-area-inset-bottom,0px) + 8px);width:262px;height:262px;pointer-events:none;transform-origin:100% 100%}
.ew-cmb button{position:absolute;pointer-events:auto;touch-action:none;cursor:pointer}
.ew-atk{right:4px;bottom:4px;width:86px;height:86px;border-radius:50%;border:2px solid rgba(255,255,255,.75);background:radial-gradient(circle at 40% 35%,rgba(0,240,255,.5),rgba(139,92,246,.45));color:#fff;font:700 11px/1.15 'Oxanium','Barlow',sans-serif;letter-spacing:.04em;text-transform:uppercase;box-shadow:0 0 22px rgba(0,240,255,.35)}
.ew-atk:active{transform:scale(.93)}
.ew-sk{width:50px;height:50px;border-radius:50%;overflow:hidden;border:1px solid rgba(0,240,255,.55);background:rgba(8,8,20,.62);color:#dff6ff;font:600 7px/1.08 'Oxanium','Barlow',sans-serif;letter-spacing:0;text-transform:uppercase;padding:0 1px;hyphens:auto;-webkit-hyphens:auto;overflow-wrap:break-word}
.ew-sk span,.ew-atk span{position:relative;display:block}
.ew-sk i{position:absolute;left:0;right:0;bottom:0;height:0;background:rgba(0,0,0,.72);pointer-events:none}
.ew-sk em,.ew-atk em{display:none;font-style:normal}
.ew-sk.ult{border-color:rgba(200,182,255,.7)}
.ew-sk.ult.ready{border-color:#fff;box-shadow:0 0 16px #8b5cf6,0 0 4px #fff inset;color:#fff}
.ew-sk.lock{opacity:.42}
.ew-opt{position:absolute;right:calc(env(safe-area-inset-right,0px) + 12px);top:calc(env(safe-area-inset-top,0px) + 142px);display:flex;flex-direction:column;gap:5px;z-index:3}
.ew-opt button{font:700 10px 'Oxanium','Barlow',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:6px 9px;min-width:62px;background:rgba(8,8,20,.62);border:1px solid rgba(0,240,255,.35);color:#9fb4c8;border-radius:14px;cursor:pointer;touch-action:manipulation}
.ew-opt button.on{background:rgba(0,240,255,.22);border-color:#00f0ff;color:#fff;box-shadow:0 0 10px rgba(0,240,255,.6)}
.ew-opt button em{font-style:normal;opacity:.55;margin-right:4px}
.ew-mob .ew-opt button em{display:none}
.ew-talk .ew-opt{display:none}
@media (max-height:520px){.ew-opt{flex-direction:row;top:calc(env(safe-area-inset-top,0px) + 10px);right:calc(env(safe-area-inset-right,0px) + 112px)}}
@media (max-height:380px){.ew-opt{right:calc(env(safe-area-inset-right,0px) + 98px)}.ew-opt button{padding:5px 7px;min-width:0}}
.ew-sk.chain{border-color:#ffd24a;box-shadow:0 0 14px #ffd24a,0 0 4px #fff inset;color:#fff;background:rgba(120,90,10,.6)}
.ew-cmb [data-c="dodge"].warn{border-color:#ff3050;background:rgba(255,48,80,.5);color:#fff;box-shadow:0 0 0 3px rgba(255,48,80,.45),0 0 20px #ff3050}
.ew.ew-warn:before{content:'';position:absolute;inset:0;pointer-events:none;z-index:2;box-shadow:inset 0 0 60px rgba(255,200,30,.38)}
.ew-cmb .ew-rnd{width:46px;height:46px;font-size:8.5px}
.ew-mob .ew-cmb .ew-dg,.ew-mob .ew-cmb .ew-jp{width:50px;height:50px;font-size:8.5px}
.ew-mob .ew-cmb .ew-sk.k4,.ew-mob .ew-cmb .ew-sk.k5{width:46px;height:46px}
.ew-cmb .ew-dg{border-color:rgba(255,255,255,.75);background:rgba(40,60,90,.6)}
.ew-rnd em{display:none;font-style:normal}
.ew-talk .ew-cmb,.ew-talk .ew-hud{display:none}
.ew-pc .ew-cmb{left:50%;right:auto;bottom:14px;width:auto;height:auto;transform:translateX(-50%);display:flex;gap:6px;align-items:flex-end}
.ew-pc .ew-cmb button{position:relative;right:auto;bottom:auto;width:74px;height:64px;border-radius:3px;font-size:9px;line-height:1.12}
.ew-pc .ew-cmb em{display:block;font:700 10px 'JetBrains Mono',monospace;color:#7ff6ff;margin-bottom:3px;position:relative}
.ew-pc .ew-atk{box-shadow:none;border-width:1px}
.ew-pc .ew-cmb .ew-rnd.m{display:none}
.ew-pc .ew-keys{bottom:88px;animation:ewkeys 26s forwards}
@keyframes ewkeys{0%,88%{opacity:1}100%{opacity:0}}
.ew-help{font:11px/1.8 'JetBrains Mono',monospace;color:rgba(220,230,255,.8);max-width:420px;text-align:left}
.ew-mob .ew-help{display:none}
.ew-ws-row{display:flex;flex-direction:row!important;gap:6px;align-items:center;justify-content:center}
.ew-ws-row .ew-btn{min-width:48px;padding:8px 6px}
.ew-ws-n{font:800 34px 'Oxanium','Barlow',sans-serif;color:#7ff6ff;min-width:74px;text-align:center}
.ew-ws-sub,.ew-ws-rw{font:13px/1.4 'Barlow',sans-serif;color:rgba(220,230,255,.85);text-align:center;margin:0}
.ew-ws-rw b{color:#ffd479}
.ew-wsel .ew-go{background:rgba(0,240,255,.22);border-color:#7ff6ff}
.ew-btn.on{border-color:#7ff6ff;color:#7ff6ff}
.ew-rot{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);display:none;width:max-content;max-width:86%;text-align:center;font:600 13px/1.4 'Barlow',sans-serif;padding:10px 14px;background:rgba(8,8,20,.85);border:1px solid rgba(0,240,255,.5);color:#dff6ff;cursor:pointer}
.ew-rot.on{display:block}
.ew-pc .ew-only-mob{display:none}
@media (max-height:520px){.ew-prompt{bottom:96px}.ew-map{width:92px;height:92px}.ew-zone{top:27%}.ew-zone b{font-size:clamp(18px,6vh,30px)}.ew-dlg p{font-size:15px;min-height:2.4em;margin:5px 0 7px}.ew-joy{height:74%}.ew-top{padding-left:calc(env(safe-area-inset-left,0px) + 12px);padding-right:calc(env(safe-area-inset-right,0px) + 12px)}.ew-menu div{gap:6px}.ew-menu .ew-btn{padding:7px 12px}}
@media (max-height:380px){.ew-mob .ew-cmb{transform:scale(.86)}.ew-map{width:78px;height:78px}}
`;function nf(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let R=document.createElement("style");R.id="ew-css",R.textContent=K1,document.head.appendChild(R)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
    <div class="ew-zone"><b></b><i></i></div>
    <div class="ew-joy"><div class="ew-stick" style="display:none"><i></i></div></div>
    <div class="ew-top"><div class="ew-tl"><button type="button" class="ew-btn" data-w="menu">\u2630 Menu</button><div class="ew-hud"><div class="ew-bar ew-hp"><i></i><b></b><span></span></div><div class="ew-bar ew-ult"><i></i></div><div class="ew-st"></div></div></div><canvas class="ew-map" width="248" height="248"></canvas></div>
    <div class="ew-wave"></div><div class="ew-skn"></div><div class="ew-opt"><button type="button" data-o="auto"><em>G</em>Auto</button><button type="button" data-o="lock"><em>T</em>Verrou</button><button type="button" data-o="fly"><em>B</em>Vol</button></div><div class="ew-rot" data-w="fs">\u21BB Tournez le t\xE9l\xE9phone pour jouer \xE0 l\u2019horizontale<br><small>ou touchez ici : plein \xE9cran horizontal</small></div>
    <div class="ew-keys"><kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd> se d\xE9placer \xB7 <kbd>Maj</kbd> courir \xB7 <kbd>Espace</kbd> sauter \xB7 <kbd>E</kbd> agir \xB7 <kbd>M</kbd> monture \xB7 souris : cam\xE9ra \xB7 <kbd>\xC9chap</kbd> menu<br><kbd>Clic</kbd> attaquer \xB7 <kbd>Clic droit</kbd> ou <kbd>V</kbd> esquiver \xB7 <kbd>1</kbd>\u2013<kbd>5</kbd> techniques \xB7 <kbd>R</kbd> d\xE9gainer / rengainer<br><kbd>B</kbd> voler (<kbd>Espace</kbd> monter, <kbd>C</kbd> descendre) \xB7 <kbd>T</kbd> verrouiller la cam\xE9ra sur l\u2019ennemi \xB7 <kbd>G</kbd> combat automatique</div>
    <div class="ew-prompt"><button type="button" data-w="act"></button></div>
    <div class="ew-cmb"><button type="button" class="ew-rnd ew-dg" data-c="dodge"><em>V</em><span>Esquive</span></button><button type="button" class="ew-rnd" data-c="draw"><em>R</em><span>Arme</span></button><button type="button" class="ew-rnd" data-w="mount"><em>M</em><span>Monture</span></button><button type="button" class="ew-rnd m" data-w="run">Sprint</button><button type="button" class="ew-rnd m ew-jp" data-w="jump">Saut</button></div>
    <div class="ew-dlg"><span class="ew-bond"></span><h4></h4><p></p><div class="row"><button type="button" class="ew-btn" data-w="dnext">Continuer</button><button type="button" class="ew-btn" data-w="dclose">Au revoir</button></div></div>
    <div class="ew-menu ew-wsel"><div><h3>Ar\xE8ne des Chasseurs</h3><p class="ew-ws-sub"></p>
      <div class="ew-ws-row"><button type="button" class="ew-btn" data-ws="-5">\u22125</button><button type="button" class="ew-btn" data-ws="-1">\u2212</button><b class="ew-ws-n">1</b><button type="button" class="ew-btn" data-ws="1">+</button><button type="button" class="ew-btn" data-ws="5">+5</button></div>
      <p class="ew-ws-rw"></p><button type="button" class="ew-btn" data-ws="boss"></button><button type="button" class="ew-btn" data-ws="loop"></button>
      <button type="button" class="ew-btn ew-go" data-ws="go">Commencer</button><button type="button" class="ew-btn" data-ws="x">Annuler</button></div></div>
    <div class="ew-menu ew-mm"><div><h3>Vesp\xE9rane</h3><button type="button" class="ew-btn" data-w="resume">Reprendre</button><button type="button" class="ew-btn" data-w="home">Retour \xE0 la Maison (rue du Four)</button><button type="button" class="ew-btn" data-w="arena">Aller \xE0 l\u2019ar\xE8ne des Chasseurs</button><button type="button" class="ew-btn" data-w="mv"></button><button type="button" class="ew-btn" data-w="stn"></button><button type="button" class="ew-btn ew-only-mob" data-w="fs">Plein \xE9cran horizontal</button><button type="button" class="ew-btn" data-w="mode">${n?"Passer en mode mobile":"Passer en mode PC"}</button><button type="button" class="ew-btn" data-w="quit">Quitter le monde</button><p class="ew-help">ZQSD se d\xE9placer \xB7 Maj courir \xB7 Espace sauter \xB7 E agir \xB7 M monture \xB7 C changer de monture<br>Clic attaquer \xB7 Clic droit ou V esquiver \xB7 1 \xE0 5 techniques \xB7 R d\xE9gainer / rengainer \xB7 Espace deux fois : double saut \xB7 molette zoom<br>B voler (Espace monter, C descendre) \xB7 T verrou de cam\xE9ra (encore T : cible suivante) \xB7 G combat automatique</p></div></div>
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=R=>r.querySelector(R),o=a(".ew-c"),c=new Gs({canvas:o,antialias:n,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),c.outputColorSpace=tn,c.toneMapping=ba,c.toneMappingExposure=1.05,s.shadows&&(c.shadowMap.enabled=!0,c.shadowMap.type=Ma);let h=new ws,u=new Cn(n?55:62,1,.3,2400),f=new ot(12085832);h.fog=new Po(f,s.fog[0],s.fog[1]);{let R=new bs(c);h.environment=R.fromScene(new Dr,.04).texture,R.dispose()}let p=new W(-.62,.36,.5).normalize(),d=new Cr(16769228,2761796,.75);h.add(d);let x=new Ss(16768184,2.7);h.add(x,x.target),s.shadows&&(x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),x.shadow.bias=-6e-4,x.shadow.normalBias=.06);let y=new Fe(new Mi(2e3,32,16),new wn({side:Mn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));h.add(y);let g=new _t;h.add(g);{let R=document.createElement("canvas");R.width=256,R.height=128;let B=R.getContext("2d"),X=La(5);for(let Ae=0;Ae<26;Ae++){let L=40+X()*176,Y=46+X()*40,se=18+X()*34,j=B.createRadialGradient(L,Y,0,L,Y,se);j.addColorStop(0,"rgba(255,255,255,.5)"),j.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=j,B.fillRect(0,0,256,128)}let Se=new Wn(R);for(let Ae=0;Ae<16;Ae++){let L=new Fe(new Ms(1,1),new Gt({map:Se,transparent:!0,depthWrite:!1,fog:!1,color:new ot().setHSL(.04+X()*.05,.75,.62+X()*.2),opacity:.75})),Y=X()*6.28,se=500+X()*900;L.position.set(Math.cos(Y)*se,190+X()*180,Math.sin(Y)*se),L.scale.set(420+X()*380,120+X()*90,1),L.rotation.x=Math.PI/2,L.rotation.z=X()*6.28,g.add(L)}}{let R=new Ms(900,900,s.seg,s.seg);R.rotateX(-Math.PI/2);let B=R.attributes.position,X=new Float32Array(B.count*3),Se=[0,0,0];for(let he=0;he<B.count;he++){let Je=B.getX(he),nt=B.getZ(he),yt=Kt(Je,nt);B.setY(he,yt),$d(Je,nt,yt,Se),X[he*3]=Math.pow(Se[0],2.2),X[he*3+1]=Math.pow(Se[1],2.2),X[he*3+2]=Math.pow(Se[2],2.2)}R.setAttribute("color",new bn(X,3));let Ae=R.toNonIndexed();Ae.computeVertexNormals(),R.dispose();let L=document.createElement("canvas");L.width=L.height=256;let Y=L.getContext("2d"),se=La(31);Y.fillStyle="#e4e4e4",Y.fillRect(0,0,256,256);for(let he=0;he<2600;he++){let Je=190+Math.floor(se()*65);Y.fillStyle=`rgba(${Je},${Je},${Je},.55)`;let nt=1+se()*5;Y.fillRect(se()*256,se()*256,nt,nt)}Y.strokeStyle="rgba(70,60,55,.3)",Y.lineWidth=1.6;for(let he=0;he<8;he++)for(let Je=0;Je<8;Je++){let nt=he%2*16;Y.strokeRect(Je*32+nt+(se()-.5)*3,he*32+(se()-.5)*3,32,32)}let j=new Wn(L);j.wrapS=j.wrapT=oa,j.repeat.set(140,140),j.anisotropy=4,j.colorSpace=tn;let xe=new Fe(Ae,new pn({vertexColors:!0,map:j,roughness:.96,metalness:0,envMapIntensity:.25}));xe.receiveShadow=s.shadows,h.add(xe);let le=new Fe(new _i(440,2400,48,1),new pn({color:4865826,roughness:1,envMapIntensity:.1}));le.rotation.x=-Math.PI/2,le.position.y=2.6,h.add(le)}let m=new Fe(new Ms(2400,2400),new pn({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));m.rotation.x=-Math.PI/2,m.position.y=.35,h.add(m);let _=new Fe(new Bi(96,48),new pn({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));_.rotation.x=-Math.PI/2,_.position.set(318,1.32,300),h.add(_);let v=(R,B=.9,X=0,Se)=>new pn(Object.assign({color:R,roughness:B,metalness:X,envMapIntensity:.35},Se||{})),E=R=>new Gt({color:R,toneMapped:(s.bloom,!1)}),z={wallA:v(12098426),wallB:v(9405303),wallC:v(10246725),wallW:v(14867920),stone:v(9144208),stoneL:v(11644338),stoneD:v(4867664),roofA:v(5125424),roofB:v(3554376),wood:v(5913892),iron:v(3816774,.5,.7),snow:v(15660024,.7),white:v(16052712),rock:v(5591642,1),obs:v(1512479,.35,.6),gold:v(15254632,.3,.9),light:v(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:v(4029142),rug:v(8007466),flowerA:v(14243450),flowerB:v(15254090),flowerC:v(9071318),sand:v(13481610,1),banner:v(10234410),winLit:E(16762222),winDark:v(1712176,.2,.6),lamp:E(16767392),ember:E(16742954),rose:E(13208278),umbra:E(10976255),neon:E(61695),sun:E(16774084),void:v(197382,1)},P=Z1(e,s),I=P.B.build(z,s.shadows);h.add(I);for(let[R,B,X,Se,Ae,L]of P.lights.slice(0,n?12:6)){let Y=new ui(Se,Ae*14,L,1.6);Y.position.set(R,B,X),h.add(Y)}let U=new _t;{let R=Kt(-70,100);U.position.set(-70,R+5.2,100);let B=new Fe(new ii(4.2,.28,10,48),E(8386303)),X=new Fe(new Bi(4.1,40),new Gt({color:1723647,transparent:!0,opacity:.55,side:sn,blending:Vn,depthWrite:!1})),Se=new Fe(new _i(1.2,3.6,40),new Gt({color:9133302,transparent:!0,opacity:.5,side:sn,blending:Vn,depthWrite:!1}));U.add(B,X,Se),U.scale.set(.8,1.25,1),U.rotation.y=.9;let Ae=new ui(3842303,60,46,1.5);U.add(Ae),h.add(U),U.userData={m2:X,m3:Se}}{let R=new On(.22,.34,1,6).translate(0,.5,0),B=new Sn(1,1,7).translate(0,.5,0),X=new Ho(1,1),Se=P.trees.filter(j=>j.pine),Ae=P.trees.filter(j=>!j.pine),L=new gn,Y=new ot,se=(j,xe,le,he)=>{let Je=new Do(j,xe,Math.max(1,le.length));return le.forEach((nt,yt)=>{he(nt,L),L.updateMatrix(),Je.setMatrixAt(yt,L.matrix),nt._c&&Je.setColorAt(yt,nt._c)}),Je.count=le.length,Je.castShadow=s.shadows,Je.receiveShadow=!1,h.add(Je),Je};if(se(R,v(3811868,1),P.trees,(j,xe)=>{xe.position.set(j.x,j.y-.3,j.z),xe.scale.set(j.s,j.s*(j.pine?2.2:3.2),j.s),xe.rotation.set(0,0,0)}),Se.forEach(j=>{j._c=Y.clone().setHSL(.3+j.c*.06,.42,.11+j.c*.06)}),Ae.forEach(j=>{j._c=Y.clone().setHSL(.02+j.c*.11,.72,.36+j.c*.14)}),se(B,v(16777215,1),Se,(j,xe)=>{xe.position.set(j.x,j.y+j.s*1.3,j.z),xe.scale.set(j.s*2.1,j.s*6.2,j.s*2.1),xe.rotation.set(0,j.c*6,0)}),se(X,new pn({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),Ae,(j,xe)=>{xe.position.set(j.x,j.y+j.s*4.1,j.z),xe.scale.set(j.s*2.5,j.s*2.1,j.s*2.5),xe.rotation.set(j.c,j.c*6,0)}),s.grass){let j=La(9),xe=[];for(let le=0;le<s.grass*5&&xe.length<s.grass;le++){let he=(j()-.5)*760,Je=(j()-.5)*760,nt=Kt(he,Je);Math.hypot(he,Je)<184||Math.hypot(he-st.x,Je-st.z)<39||nt<2.3||nt>44||Math.abs(he-Ps(Je))<15||fl(he,Je)<4||xe.push({x:he,y:nt,z:Je,s:.5+j()*.9,c:j(),_c:Y.clone().setHSL(.08+j()*.1,.5,.3+j()*.12)})}se(new Sn(.5,1,4).translate(0,.5,0),v(16777215,1),xe,(le,he)=>{he.position.set(le.x,le.y-.05,le.z),he.scale.set(le.s*.9,le.s*1.1,le.s*.9),he.rotation.set(0,le.c*6,0)}).castShadow=!1}}let S={},A=new Da;P.houses.forEach((R,B)=>{let Se=B*80,Ae=new Da,L=J1(Ae,R,e,-400);for(let Y in Ae.b)for(let se of Ae.b[Y])se.translate(Se,0,0),(A.b[Y]=A.b[Y]||[]).push(se);S[R.id]={...L,ox:Se,oy:-400,hs:R}});let H=A.build(z,!1);H.visible=!1,h.add(H);let G=new ui(16756848,0,40,1.4),te=new ui(16773341,0,60,1.2);h.add(G,te);let N=Rs(e.hero);h.add(N.group),N.group.rotation.order="YXZ";let M=null;if(e.plate&&(e.plate.title||e.plate.name)){let R=document.createElement("canvas");R.width=512,R.height=128;let B=R.getContext("2d"),X=e.plate;B.textAlign="center",B.textBaseline="middle",B.lineJoin="round";let Se=(L,Y,se,j)=>{B.font=se,B.lineWidth=7,B.strokeStyle="rgba(0,0,0,.85)",B.strokeText(L,256,Y),B.shadowColor=j,B.shadowBlur=14,B.fillStyle=j,B.fillText(L,256,Y),B.shadowBlur=0};X.title&&Se("\xAB "+X.title+" \xBB",X.name?40:64,"700 38px Oxanium, Barlow, sans-serif",X.color||"#ffd56a"),X.name&&Se(X.name,X.title?92:64,"600 34px Barlow, sans-serif","#ffffff");let Ae=new Wn(R);Ae.colorSpace=tn,M=new Fi(new Ci({map:Ae,transparent:!0,depthWrite:!1,fog:!1})),M.scale.set(2.6,.65,1),M.position.y=N.height+.62,M.renderOrder=8,N.group.add(M)}let b={pitch:0,fly:!1,x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};b.y=Kt(b.x,b.z);for(let R of jd)if(Math.hypot(b.x-R[0],b.z-R[1])<R[2]){b.zone=R[3];break}let Z=(e.mounts||[]).filter(R=>Hi[R.id]),J=Math.max(0,Z.findIndex(R=>R.id===e.mount)),Q=null;function we(R){if(b.mount&&(h.remove(b.mount.group),Li(b.mount.group),b.mount=null,b.mountId=null),R&&Z.length&&!b.inside){let B=Z[J].id;b.mount=Hi[B].make(),b.mountId=B,el(b.mount.group),h.add(b.mount.group),Q&&Q.arm(!1),b.mount.group.traverse(X=>{X.isMesh&&(X.castShadow=s.shadows)}),ne("En selle",Z[J].name)}a('[data-w="mount"]').classList.toggle("on",!!b.mount)}Z.length||(a('[data-w="mount"]').disabled=!0);let be=[],ke=R=>{let B=document.createElement("canvas");B.width=256,B.height=64;let X=B.getContext("2d");X.font="600 26px Oxanium, Barlow, sans-serif",X.textAlign="center",X.shadowColor="#000",X.shadowBlur=8,X.fillStyle="#eaffff",X.fillText(R,128,40);let Se=new Fi(new Ci({map:new Wn(B),transparent:!0,depthWrite:!1,fog:!1}));return Se.scale.set(2.6,.65,1),Se};function ee(R,B,X,Se,Ae,L){let Y=q1[R.id];if(!Y)return;let se=Rs(Object.assign({},Y,{fx:Object.assign({lod:!0},Y.fx)}));se.group.position.set(B,X,Se),se.group.rotation.y=Ae;let j=ke(R.name.split(" ").slice(0,2).join(" "));j.position.y=se.height/se.group.scale.y+.32,se.group.add(j),se.group.traverse(xe=>{xe.isMesh&&(xe.castShadow=s.shadows&&!L)}),h.add(se.group),be.push({...R,av:se,x:B,y:X,z:Se,ry:Ae,inside:L||null,lb:j,li:0})}for(let R of e.npcs||[]){let B=X1[R.id];B&&ee(R,B[0],Kt(B[0],B[1]),B[1],B[2])}for(let R in S){let B=S[R];(e.npcs||[]).filter(X=>X.recruited).slice(0,B.spots.length).forEach((X,Se)=>{let[Ae,L]=B.spots[Se];ee(X,B.ox+Ae,B.oy,L,Math.atan2(-Ae,1-L),R)})}H.visible=!1;function re(R,B){$t(!0),b.x=R,b.z=B,b.y=Kt(R,B),me=!0}Q=Kd({scene:h,st:b,player:N,data:e,H:Kt,cam:u,root:r,pc:n,toast:(R,B)=>ne(R,B),cb:t,teleport:re,dismount:()=>we(!1),dash:(R,B)=>{b.dashV=R/B,b.dashT=B},inputDir:()=>b.inDir});let ze={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},Ie={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Ze=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+ze[N.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+Ie[N.stance]},dt=(R,B)=>{let X=Object.keys(R);return X[(X.indexOf(B)+1)%X.length]};Ze();let Be=R=>a('[data-o="'+R+'"]');function qe(){Be("auto").classList.toggle("on",Q.auto),Be("lock").classList.toggle("on",Q.lock),Be("fly").classList.toggle("on",!!b.fly);let R=a('[data-w="mount"] span'),B=a('[data-w="jump"]');R&&(R.textContent=b.fly?"Descendre":"Monture"),B&&(B.textContent=b.fly?"Monter":"Saut")}function lt(R){R&&(b.inside||b.talking||b.down)||(R&&(we(!1),Q.arena.on&&ne("Vol","Les ombres vous attendent au sol"),b.vy=14,b.onGround=!1,bt=0),b.fly=R,_e.up=_e.dn=null,qe(),R&&ne("Vol",n?"Espace : monter \xB7 C : descendre \xB7 Maj : plus vite \xB7 B : se poser":"Maintenir Monter / Descendre \xB7 Sprint : plus vite"))}function q(R){if(R==="fly"){lt(!b.fly);return}if(R==="lock"){if(Q.lock&&Q.lockE&&performance.now()-Le<1500){Q.nextLock(),Le=performance.now();return}Q.lock=!Q.lock,Le=performance.now(),Q.lock&&(Q.pickLock(),ne("Cam\xE9ra verrouill\xE9e",Q.lockE?Q.lockE.name||Q.lockE.T.name:"Elle suivra le prochain ennemi"))}else R==="auto"&&(Q.auto=!Q.auto,ne(Q.auto?"Combat automatique":"Combat manuel",Q.auto?"Le personnage frappe et esquive tout seul":""));qe(),t.onPref&&t.onPref({auto:Q.auto,lock:Q.lock})}let Le=0;{let R=e.prefs||{};Q.auto=!!R.auto,Q.lock=!!R.lock,qe()}r.addEventListener("pointerdown",R=>{let B=R.target.closest("[data-o]");!B||b.paused||(R.preventDefault(),R.stopPropagation(),q(B.dataset.o))});let ae=null;if(s.bloom)try{ae=new hl(c),ae.addPass(new ul(h,u)),ae.addPass(new Hr(new Ce(256,256),.42,.7,.82)),ae.addPass(new dl)}catch{ae=null}function Te(){let R=r.clientWidth,B=r.clientHeight;if(R>B){let X=r.querySelector(".ew-rot");X&&X.classList.remove("on")}c.setSize(R,B,!1),u.aspect=R/B,u.fov=n?55:R>B?50:62,u.updateProjectionMatrix(),ae&&ae.setSize(R,B)}Te(),window.addEventListener("resize",Te);let Me=a(".ew-map"),Re=Me.getContext("2d"),Oe=document.createElement("canvas");Oe.width=Oe.height=248;{let R=Oe.getContext("2d"),B=R.createImageData(248,248),X=[0,0,0];for(let Se=0;Se<248;Se++)for(let Ae=0;Ae<248;Ae++){let L=(Ae/247-.5)*900,Y=(Se/247-.5)*900,se=Kt(L,Y);$d(L,Y,se,X);let j=(Se*248+Ae)*4,xe=se<.4;B.data[j]=xe?70:X[0]*235,B.data[j+1]=xe?90:X[1]*235,B.data[j+2]=xe?120:X[2]*235,B.data[j+3]=255}R.putImageData(B,0,0),R.strokeStyle="#c9b48a",R.lineWidth=2,R.beginPath(),R.arc((st.x/900+.5)*248,(st.z/900+.5)*248,8,0,7),R.stroke(),R.fillStyle="#2a2420";for(let Se of P.B.boxes){let Ae=(Se[0]/900+.5)*248,L=(Se[2]/900+.5)*248;R.fillRect(Ae,L,Math.max(1.5,(Se[1]-Se[0])/900*248),Math.max(1.5,(Se[3]-Se[2])/900*248))}}function D(){let B=b.inside?0:b.x,X=b.inside?0:b.z,Se=(B/900+.5)*248,Ae=(X/900+.5)*248;if(Re.setTransform(1,0,0,1,0,0),Re.fillStyle="#0b0b12",Re.fillRect(0,0,248,248),b.inside){Re.fillStyle="#7ff6ff",Re.font="600 20px Oxanium, sans-serif",Re.textAlign="center",Re.fillText("Int\xE9rieur",124,130);return}Re.translate(124,124),Re.scale(2.2,2.2),Re.translate(-Se,-Ae),Re.drawImage(Oe,0,0);let L=(Y,se,j,xe)=>{Re.fillStyle=j,Re.beginPath(),Re.arc((Y/900+.5)*248,(se/900+.5)*248,xe,0,7),Re.fill()};for(let Y of P.houses)L(Y.x,Y.z,"#ffd479",2.6);for(let Y of be)Y.inside||L(Y.x,Y.z,"#7ff6ff",1.7);L(-70,100,"#3aa0ff",2.4),L(st.x,st.z,"#ff4d6d",2.2);for(let Y of Q.enemies)Y.type!=="dummy"&&Y.state!=="dead"&&L(Y.x,Y.z,"#ff4d6d",1.5);Re.setTransform(1,0,0,1,124,124),Re.rotate(-b.yaw+Math.PI),Re.fillStyle="#fff",Re.strokeStyle="#000",Re.lineWidth=2,Re.beginPath(),Re.moveTo(0,-9),Re.lineTo(6.5,7),Re.lineTo(0,3.5),Re.lineTo(-6.5,7),Re.closePath(),Re.stroke(),Re.fill()}let C=0;function ne(R,B=""){let X=a(".ew-zone");X.querySelector("b").textContent=R,X.querySelector("i").textContent=B,X.querySelector("i").style.display=B?"":"none",X.classList.add("on"),clearTimeout(C),C=setTimeout(()=>X.classList.remove("on"),3200)}let ve={},_e={mx:0,mz:0,jump:!1},Ee=new Yo,et=new W(0,-1,0),Ge=new W,Ke=[];function rt(R,B){Ge.set(R,2e3,B),Ee.set(Ge,et),Ee.far=2200;let X=Ee.intersectObject(I,!0)[0];return X?X.point.y:-99}function mt(R){if(Ke[R]==null){let B=P.B.boxes[R],X=(B[0]+B[1])/2,Se=(B[2]+B[3])/2,Ae=(B[1]-B[0])*.3,L=(B[3]-B[2])*.3;Ke[R]=Math.max(rt(X,Se),rt(X-Ae,Se-L),rt(X+Ae,Se+L),rt(X-Ae,Se+L),rt(X+Ae,Se-L),Kt(X,Se)+4)+.6}return Ke[R]}let fe=-99,bt=0,ht=null,ut=(R,B)=>{if(b.paused&&B&&R.code==="Escape"){ct(!1);return}ve[R.code]=B;let X=(R.key||"").toLowerCase();B&&(R.code==="Escape"?b.talking?pi():ct(!0):b.talking?(X==="e"||X==="f"||R.code==="Enter"||R.code==="Space")&&(R.preventDefault(),Gi()):X==="e"||X==="f"||R.code==="Enter"?zt():X==="m"&&b.fly||(X==="m"?b.mount&&Z.length>1&&ve.ShiftLeft?(J=(J+1)%Z.length,we(!0)):we(!b.mount):X==="c"&&b.fly||(X==="c"&&Z.length>1?(J=(J+1)%Z.length,b.mount?we(!0):ne(Z[J].name,"Monture choisie")):R.code==="Space"?(R.preventDefault(),b.fly||(_e.jump=!0)):X==="r"?Q.toggleArm():X==="b"?q("fly"):X==="t"?q("lock"):X==="g"?q("auto"):X==="x"?Q.attack():X==="v"?Q.dodge():/^(Digit|Numpad)[1-5]$/.test(R.code)&&Q.skill(+R.code.slice(-1)))))},it=R=>ut(R,!0),$e=R=>ut(R,!1);window.addEventListener("keydown",it),window.addEventListener("keyup",$e);let Qe=null,ft={id:null,ox:0,oy:0},Lt=a(".ew-stick"),gt=R=>{if(!R.target.closest("button,.ew-dlg,.ew-menu,.ew-map,.ew-opt")){if(!n&&R.clientX<r.clientWidth*.46&&R.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&ft.id===null){ft.id=R.pointerId,ft.ox=R.clientX,ft.oy=R.clientY,Lt.style.display="block",Lt.style.left=R.clientX+"px",Lt.style.top=R.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",Lt.firstChild.style.transform="";return}Qe||(Qe={id:R.pointerId,x:R.clientX,y:R.clientY,x0:R.clientX,y0:R.clientY,t:performance.now(),b:R.button})}},Pe=R=>{if(R.pointerId===ft.id){let B=R.clientX-ft.ox,X=R.clientY-ft.oy,Se=Math.hypot(B,X),Ae=52;Se>Ae&&(B*=Ae/Se,X*=Ae/Se),Lt.firstChild.style.transform=`translate(${B}px,${X}px)`,_e.mx=B/Ae,_e.mz=X/Ae}else Qe&&R.pointerId===Qe.id&&(b.camYaw-=(R.clientX-Qe.x)*(n?.0042:.0062),b.camPitch=Math.max(-.25,Math.min(1.2,b.camPitch+(R.clientY-Qe.y)*(n?.003:.0045))),Qe.x=R.clientX,Qe.y=R.clientY)},$=R=>{R.pointerId===ft.id&&(ft.id=null,_e.mx=_e.mz=0,Lt.style.display="none"),Qe&&R.pointerId===Qe.id&&(n&&R.type==="pointerup"&&performance.now()-Qe.t<300&&Math.hypot(R.clientX-Qe.x0,R.clientY-Qe.y0)<6&&(Qe.b===0?Q.attack():Qe.b===2&&Q.dodge()),Qe=null),R.pointerId===We&&(We=null,Q.held=!1),R.pointerId===_e.up&&(_e.up=null),R.pointerId===_e.dn&&(_e.dn=null)},We=null;r.addEventListener("pointerdown",R=>{let B=R.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!B||b.paused)return;R.preventDefault(),B._pd=performance.now();let X=B.dataset.w;if(b.fly&&(X==="jump"||X==="mount")){_e[X==="jump"?"up":"dn"]=R.pointerId;return}X==="jump"?_e.jump=!0:X==="run"?(b.run=!b.run,B.classList.toggle("on",b.run)):X==="mount"?we(!b.mount):zt()}),r.addEventListener("pointerdown",R=>{let B=R.target.closest("[data-c]");if(!B||b.paused)return;R.preventDefault();let X=B.dataset.c;X==="draw"?Q.toggleArm():X==="dodge"?Q.dodge():X==="0"?(Q.attack(),Q.held=!0,We=R.pointerId):Q.skill(+X)}),r.addEventListener("pointerdown",gt),r.addEventListener("pointermove",Pe),r.addEventListener("pointerup",$),r.addEventListener("pointercancel",$);let Xe=R=>{b.camDist=Math.max(2.6,Math.min(22,b.camDist*(R.deltaY>0?1.1:.9))),R.preventDefault()};r.addEventListener("wheel",Xe,{passive:!1}),r.addEventListener("contextmenu",R=>R.preventDefault()),r.addEventListener("click",R=>{let B=R.target.closest("[data-w]");if(!B)return;let X=B.dataset.w;if(B._pd&&performance.now()-B._pd<800){B._pd=0;return}if(!(b.fly&&(X==="jump"||X==="mount"))){if(X==="act")zt();else if(X==="mount")we(!b.mount);else if(X==="run")b.run=!b.run,B.classList.toggle("on",b.run);else if(X==="jump")_e.jump=!0;else if(X==="dnext")Gi();else if(X==="dclose")pi();else if(X==="menu")ct(!0);else if(X==="resume")ct(!1);else if(X==="home")re(-6,34),ct(!1);else if(X==="arena")we(!1),re(st.x+40,st.z),b.yaw=-Math.PI/2,b.camYaw=Math.PI/2,ct(!1);else if(X==="mv"||X==="stn")N.setStyle(X==="mv"?{move:dt(ze,N.move)}:{stance:dt(Ie,N.stance)}),Ze(),t.onStyle&&t.onStyle({move:N.move,stance:N.stance});else if(X==="fs")St(),a(".ew-rot").classList.remove("on"),ct(!1);else if(X==="quit")Ot();else if(X==="mode"){let Se=[b.x,b.z];Ve.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",b.inside?null:Se)}}});function ct(R){b.paused=R,a(".ew-mm").classList.toggle("on",R),R||a(".ew-wsel").classList.remove("on")}let tt={n:1,loop:!1};function Dt(){let R=Q.arena.best+1;tt.n=Math.max(1,Math.min(R,tt.n));let B=tt.n,X=t.wavePreview?t.wavePreview(B):null;a(".ew-ws-n").textContent=B,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+R+(Q.arena.best?" \xB7 record "+Q.arena.best:""),a(".ew-ws-rw").innerHTML=(B%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":B%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(X?"R\xE9compense : <b>+"+X.x+" XP</b> \xB7 <b>+"+X.k+" kinahs</b>"+(X.first===!1?" \xB7 d\xE9j\xE0 gagn\xE9e aujourd\u2019hui (10 %)":" \xB7 plein tarif une fois par jour, puis 10 %"):""),a('[data-ws="loop"]').classList.toggle("on",tt.loop),a('[data-ws="loop"]').textContent=(tt.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let Se=5*Math.floor(R/5),Ae=a('[data-ws="boss"]');Ae.style.display=Se>=5?"":"none",Ae.textContent="Dernier champion ouvert : vague "+Se}function Vt(){tt.n=Q.arenaStart(),b.paused=!0,Dt(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",R=>{let B=R.target.closest("[data-ws]");if(!B)return;let X=B.dataset.ws;if(X==="x"||X==="go"){a(".ew-wsel").classList.remove("on"),b.paused=!1,X==="go"&&Q.startArena(tt.n,tt.loop);return}X==="loop"?tt.loop=!tt.loop:X==="boss"?tt.n=5*Math.floor((Q.arena.best+1)/5):tt.n+=+X,Dt()});let Yt=!1,Nt=()=>{try{let R=screen.orientation;return R&&R.lock?R.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function St(){let R=document.documentElement,B=R.requestFullscreen||R.webkitRequestFullscreen;if(!B)return Nt();let X=null;try{X=B.call(R,{navigationUI:"hide"}),Yt=!0}catch{X=null}return(X&&X.then?X:Promise.resolve()).then(Nt,Nt)}n||Nt().then(R=>{if(!R&&r.clientHeight>r.clientWidth&&!ie){let B=a(".ew-rot");B.classList.add("on"),setTimeout(()=>B.classList.remove("on"),9e3)}});function Ot(){let R=b.inside?null:[Math.round(b.x),Math.round(b.z)];Ve.dispose(),t.onExit&&t.onExit(R)}function zt(){!ht||b.talking||(ht.kind==="npc"?wi(ht.npc):ht.kind==="house"?Dn(ht.id):ht.kind==="exit"?$t():ht.kind==="arena"?Vt():ht.kind==="rift"&&t.onRift&&(Ve.dispose(),t.onRift([Math.round(b.x),Math.round(b.z)])))}let qn=0;function Ft(R){let B=R.lines&&R.lines.length?R.lines:["\u2026"],X=B[R.li%B.length],Se=a(".ew-dlg p");Se.textContent="",clearInterval(qn);let Ae=0;qn=setInterval(()=>{Ae+=2,Se.textContent=X.slice(0,Ae),Ae>=X.length&&clearInterval(qn)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(R.name,Object.assign(document.createElement("small"),{textContent:R.role||""})),a(".ew-bond").textContent=R.bond?"Lien "+"\u2665".repeat(Math.min(10,R.bond)):"",a('[data-w="dnext"]').style.display=B.length>1?"":"none"}function wi(R){b.talking=R,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),Ft(R);let B=Math.atan2(b.x-R.x,b.z-R.z);R.av.group.rotation.y=B,b.yaw=B+Math.PI,t.onTalk&&t.onTalk(R.id)}function Gi(){let R=b.talking;if(!R)return;let B=a(".ew-dlg p"),X=R.lines||[],Se=X[R.li%Math.max(1,X.length)]||"";if(B.textContent.length<Se.length){clearInterval(qn),B.textContent=Se;return}if(R.li++,R.li%Math.max(1,X.length)===0){pi();return}Ft(R)}function pi(){clearInterval(qn),b.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let un=null;function Dn(R){let B=S[R];B&&(we(!1),un=[b.x,b.z,b.yaw],b.inside=R,b.x=B.ox+B.door[0],b.z=B.door[1]-.6,b.y=B.oy,b.yaw=Math.PI,b.camYaw=0,b.camDist=Math.min(b.camDist,6),H.visible=!0,I.visible=!1,h.fog.near=60,h.fog.far=200,G.position.set(B.ox,B.oy+1.6,-B.D/2+2.2),G.intensity=90,te.position.set(B.ox,B.oy+B.h-.6,1.5),te.intensity=B.hs.r>=6?160:B.hs.r===5?50:70,te.color.set(B.hs.r>=6?16774084:B.hs.r===5?10976255:16773341),x.intensity=0,d.intensity=.35,ne(B.hs.name,B.hs.cap>=99?"Places illimit\xE9es":B.hs.cap+" places"))}function $t(R){b.inside&&(b.inside=null,H.visible=!1,I.visible=!0,h.fog.near=s.fog[0],h.fog.far=s.fog[1],G.intensity=te.intensity=0,x.intensity=2.9,d.intensity=.7,un&&!R&&(b.x=un[0],b.z=un[1],b.yaw=un[2]+Math.PI),b.y=Kt(b.x,b.z))}let nn=new W,Xt=new W,k=performance.now(),ie=!1,ue=0,me=!0;function de(R){if(ie)return;requestAnimationFrame(de);let B=Math.min(.05,(R-k)/1e3);if(k=R,b.paused)return;b.t+=B;let X=_e.mx,Se=_e.mz;(ve.KeyW||ve.ArrowUp)&&(Se-=1),(ve.KeyS||ve.ArrowDown)&&(Se+=1),(ve.KeyA||ve.ArrowLeft)&&(X-=1),(ve.KeyD||ve.ArrowRight)&&(X+=1);let Ae=Math.min(1,Math.hypot(X,Se)),L=Ae<.05?Q.autoMove:null;L&&(Ae=L.mag),Ae*=b.talking?0:Q.moveK();let Y=!!b.fly,se=b.run||ve.ShiftLeft||ve.ShiftRight,j=N.move,xe=j==="levitation"&&!b.mount,le=j==="levitation"?[11,16]:j==="ninja"?[10.5,15.5]:[9.5,14],he=(Y?se?30:20:b.mount?9.5*Hi[b.mountId].speed:se?le[1]:le[0])*(b.inside?.45:1),Je=Ae*he;if(b.speed+=(Je-b.speed)*Math.min(1,B*(Y?4:b.mount?3:xe?9:14)),b.inDir=L?L.yaw:Ae>.05?Math.atan2(X,Se)+b.camYaw:null,Ae>.05&&b.dashT<=0){let Tt=b.inDir-b.yaw;for(;Tt>Math.PI;)Tt-=6.2832;for(;Tt<-Math.PI;)Tt+=6.2832;b.yaw+=Tt*Math.min(1,B*(Y?7:b.mount?5:xe?13:18))}b.dashT>0&&(b.dashT-=B,b.speed=b.dashV);let nt=Math.sin(b.yaw)*b.speed*B,yt=Math.cos(b.yaw)*b.speed*B,Rt=b.x+nt,Ct=b.z+yt;if(b.inside){let Ue=S[b.inside];Rt=Math.max(Ue.ox-Ue.W/2+.8,Math.min(Ue.ox+Ue.W/2-.8,Rt)),Ct=Math.max(-Ue.D/2+1.9,Math.min(Ue.D/2-.7,Ct))}else{Rt=Math.max(-438,Math.min(438,Rt)),Ct=Math.max(-438,Math.min(438,Ct));let Ue=b.mount?1.1:.55,Tt=Y&&b.y-Math.max(0,Kt(b.x,b.z))>14;if(P.B.boxes.forEach((l,T)=>{if(Rt>l[0]-Ue&&Rt<l[1]+Ue&&Ct>l[2]-Ue&&Ct<l[3]+Ue){if(b.y>mt(T)-.5)return;Y?b.bump=.25:!b.inside&&Ae>.1&&!b.talking&&!b.down&&(b.mount&&we(!1),b.climbT=.22,b.climbTop=mt(T));let w=Rt-(l[0]-Ue),O=l[1]+Ue-Rt,K=Ct-(l[2]-Ue),V=l[3]+Ue-Ct,F=Math.min(w,O,K,V);F===w?Rt=l[0]-Ue:F===O?Rt=l[1]+Ue:F===K?Ct=l[2]-Ue:Ct=l[3]+Ue}}),!Tt){let l=Rt-st.x,T=Ct-st.z,w=Math.hypot(l,T);if(w>st.r-.5&&w<st.wall+.6&&Math.abs(Math.atan2(T,l))>st.gate){let O=(w<(st.r+st.wall)/2?st.r-.5:st.wall+.6)/w;Rt=st.x+l*O,Ct=st.z+T*O}}if(!Y){for(let l of be)if(!l.inside){let T=Math.hypot(Rt-l.x,Ct-l.z);T<.8&&T>.001&&(Rt=l.x+(Rt-l.x)/T*.8,Ct=l.z+(Ct-l.z)/T*.8)}}}b.x=Rt,b.z=Ct,!b.inside&&(bt-=B)<=0&&(bt=b.fly||b.climbT>0||b.y>Kt(b.x,b.z)+1?.08:.25,fe=rt(b.x,b.z));let Yn=b.inside?S[b.inside].oy:Math.max(Kt(b.x,b.z),Math.abs(b.x-Ps(b.z))<30&&Math.abs(b.z+56)<3.3&&Math.abs(b.x-Ps(-56))<20?4:-99,Math.abs(b.z-24)<2.3&&b.x>186&&b.x<208?1.22:-99,Math.hypot(b.x-318,b.z-300)<96?1.32:-99,xe?.4:-99),Ut=!b.inside&&!b.fly&&fe>Yn+.3&&b.y>=fe-.9?fe:Yn;if(_e.jump&&b.climbT>0&&(b.climbT=0,b.vy=8,b.yaw+=Math.PI),_e.jump&&(b.onGround||b.jumps<2)&&!b.mount&&!b.talking&&!b.down){let Ue=!b.onGround;b.vy=Ue?8.2:8.6,b.jumps=Ue?2:1,b.onGround=!1,Ue&&N.play("flip",.62)}if(_e.jump=!1,Y){let Ue=_e.up!=null||ve.Space,Tt=_e.dn!=null||ve.KeyC||ve.ControlLeft||ve.ControlRight,l=fe>Ut+.4?fe:-99,T=Math.max(Ut,l,-.4)+.5,w=se?38:22;b.bump>0&&(b.bump-=B);let O=((Ue?1:0)-(Tt?1:0))*w+(b.bump>0&&!Tt?w*.8:0);b.vy+=(O-b.vy)*Math.min(1,B*4),b.y=Math.min(1500,b.y+b.vy*B),b.onGround=!1,b.jumps=2,b.y<=T&&(Tt&&l<-90?(b.y=Math.max(Ut,b.y),lt(!1)):(b.y=T,b.vy<0&&(b.vy=0))),(b.inside||b.down)&&lt(!1)}else b.climbT>0?(b.climbT-=B,b.climbing=!0,b.vy=se?9:6.5,b.y+=b.vy*B,b.onGround=!1,b.jumps=1,b.y>b.climbTop-.5&&(b.vy=4,b.climbT=0)):(b.climbing&&(b.climbing=!1),b.vy-=24*B,b.y+=b.vy*B,b.y<=Ut?(b.y=Ut,b.vy=0,b.onGround=!0,b.jumps=0):b.y-Ut>.35&&(b.onGround=!1));{let Ue=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(b.speed-10.5)/5))*7;Math.abs(u.fov-Ue)>.05&&(u.fov+=(Ue-u.fov)*Math.min(1,B*5),u.updateProjectionMatrix())}let yn=!b.inside&&!xe&&!Y&&b.y<-.75?-.75-b.y:0,dn=N.group;if(b.mount){let Ue=b.mount;Ue.group.position.set(b.x,b.y+yn,b.z),Ue.group.rotation.y=b.yaw,Ue.update(B,b.speed/8),dn.position.set(b.x-Math.sin(b.yaw)*-Ue.seat.z,b.y+yn+Ue.seat.y-N.seatDrop,b.z-Math.cos(b.yaw)*-Ue.seat.z),dn.rotation.y=b.yaw,N.update(B,{riding:!0,wide:Ue.wide})}else dn.position.set(b.x,b.y+yn,b.z),dn.rotation.y=b.yaw,b.pitch+=((Y?Math.min(1,b.speed/20)*1-b.vy*.03:0)-b.pitch)*Math.min(1,B*5),dn.rotation.x=b.pitch,N.update(B,{speed:b.climbT>0?1.2:b.speed/4.6,down:b.down,fly:Y,climb:b.climbT>0});if(Q.update(B),(Q.lock||Q.auto)&&Q.lockE&&Q.lockE.state!=="dead"&&!b.inside&&!b.talking&&!Qe){let Ue=Q.lockE,Tt=Math.atan2(Ue.x-b.x,Ue.z-b.z)+Math.PI-b.camYaw;for(;Tt>Math.PI;)Tt-=6.2832;for(;Tt<-Math.PI;)Tt+=6.2832;Q.lock&&(b.camYaw+=Tt*Math.min(1,B*5))}if(!b.inside){let Ue=Math.max(0,b.y-25);h.fog.near=s.fog[0]+Ue*1.5,h.fog.far=Math.min(2300,s.fog[1]+Ue*3.5)}let Bt=!!Q.pl.mecha,zn=Bt?2.5:(b.mount?b.mount.seat.y:0)+N.height*.82,ai=b.camDist*(b.mount?1.45:Bt?1.7:1)*(b.talking?.62:1),He=Math.cos(b.camPitch);nn.set(b.x,b.y+yn+zn,b.z);for(let Ue of[1,.72,.5,.32,.18])if(Xt.set(nn.x+Math.sin(b.camYaw)*He*ai*Ue,nn.y+Math.sin(b.camPitch)*ai*Ue,nn.z+Math.cos(b.camYaw)*He*ai*Ue),b.inside||Xt.y-b.y>16||!P.B.boxes.some(Tt=>Xt.x>Tt[0]-.4&&Xt.x<Tt[1]+.4&&Xt.z>Tt[2]-.4&&Xt.z<Tt[3]+.4))break;if(b.inside){let Ue=S[b.inside];Xt.x=Math.max(Ue.ox-Ue.W/2+.5,Math.min(Ue.ox+Ue.W/2-.5,Xt.x)),Xt.z=Math.max(-Ue.D/2+.6,Math.min(Ue.D/2+9,Xt.z)),Xt.y=Math.max(Ue.oy+.6,Math.min(Ue.oy+Ue.h+4,Xt.y))}else{let Ue=Math.max(Kt(Xt.x,Xt.z),.35)+.7;Xt.y<Ue&&(Xt.y=Ue)}me?(u.position.copy(Xt),me=!1):u.position.lerp(Xt,Math.min(1,B*12)),u.lookAt(nn),Q.shake>.01&&(u.position.x+=(Math.random()-.5)*Q.shake*.5,u.position.y+=(Math.random()-.5)*Q.shake*.4),y.position.copy(u.position),g.position.x=b.t*2.2%300,y.visible=g.visible=!b.inside,m.visible=_.visible=!b.inside,x.position.set(b.x+p.x*120,b.y+p.y*120+20,b.z+p.z*120),x.target.position.set(b.x,b.y,b.z),U.rotation.y+=B*.25,U.userData.m3.rotation.z-=B*1.4,U.userData.m2.material.opacity=.45+Math.sin(b.t*2.6)*.14;let vt=null,rn=1e9;for(let Ue of be){let Tt=Ue.inside===b.inside;if(Ue.av.group.visible=Tt,!Tt)continue;let l=Math.hypot(b.x-Ue.x,b.z-Ue.z);Ue.lb.visible=l<26&&l>2.6,l<40&&Ue.av.update(B,{});for(let T of Ue.av.inks)T.visible=l<32;if(l<9&&!b.talking){let T=Math.atan2(b.x-Ue.x,b.z-Ue.z)-Ue.av.group.rotation.y;for(;T>Math.PI;)T-=6.2832;for(;T<-Math.PI;)T+=6.2832;Ue.av.group.rotation.y+=T*Math.min(1,B*3)}l<3.2&&l<rn&&(rn=l,vt={kind:"npc",npc:Ue,text:"Parler \xE0 "+Ue.name.split(" ")[0]})}if(b.inside){let Ue=S[b.inside];Math.hypot(b.x-Ue.ox-Ue.door[0],b.z-Ue.door[1])<2.2&&!vt&&(vt={kind:"exit",text:"Sortir"})}else{for(let Ue of P.houses){let Tt=Math.hypot(b.x-Ue.x,b.z-Ue.z);Tt<4.5&&Tt<rn&&(rn=Tt,vt={kind:"house",id:Ue.id,text:"Entrer : "+Ue.name})}t.onRift&&Math.hypot(b.x+70,b.z-100)<6&&!vt&&(vt={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!vt&&!Q.arena.on&&!b.down&&Math.hypot(b.x-st.x,b.z-st.z)<3.4&&(vt={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+Q.arenaStart()})}ht=vt;let jn=a(".ew-prompt");if(vt&&!b.talking){jn.classList.add("on");let Ue=jn.firstChild,Tt=(n?"[E]  ":"")+vt.text;Ue.textContent!==Tt&&(Ue.textContent=Tt)}else jn.classList.remove("on");if(!b.inside){let Ue="",Tt="";for(let l of jd)if(Math.hypot(b.x-l[0],b.z-l[1])<l[2]){Ue=l[3],Tt=l[4];break}Ue&&Ue!==b.zone&&ne(Ue,Tt),b.zone=Ue}(ue+=B)>.12&&(ue=0,D()),ae?ae.render():c.render(h,u)}let Ve={_boxes:P.B.boxes,_inp:_e,combat:Q,player:N,dispose(){if(!ie){ie=!0,Q.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),Yt&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(qn),clearTimeout(C),window.removeEventListener("keydown",it),window.removeEventListener("keyup",$e),window.removeEventListener("resize",Te),Li(h),ae&&ae.dispose&&ae.dispose(),c.dispose(),c.forceContextLoss&&c.forceContextLoss(),r.remove()}},state:b,teleport:(R,B)=>re(R,B),enter:Dn,mountOn:()=>we(!0),look(R,B,X){b.camYaw=R,b.camPitch=B,X&&(b.camDist=X)}};return requestAnimationFrame(R=>{k=R,de(R),setTimeout(()=>{let B=a(".ew-load");B.style.opacity=0,setTimeout(()=>B.remove(),900),ne("Vesp\xE9rane","Ciel couleur de rouille")},350)}),Ve}window.Elyos3D={avatarView:Od,startWorld:nf,groundHeight:Kt,DEFAULT_LOOK:ah,HAIR_STYLES:zd,STANCES:rl,MOVES:al,MOUNT_SPEED:Object.fromEntries(Object.entries(Hi).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
