(()=>{var jd=0,ch=1,Qd=2;var Wu=1,xa=2,Wi=3,fs=0,gn=1,tn=2;var Di=0,hs=1,Gn=2,hh=3,uh=4,ef=5,Ls=100,tf=101,nf=102,dh=103,fh=104,sf=200,rf=201,af=202,of=203,Zl=204,Jl=205,lf=206,cf=207,hf=208,uf=209,df=210,ff=211,pf=212,mf=213,gf=214,xf=0,yf=1,vf=2,lo=3,_f=4,Mf=5,bf=6,wf=7,Hc=0,Sf=1,Ef=2,zi=0,Gc=1,Vc=2,Wc=3,ya=4,Tf=5,Xc=6;var Xu=300,xr=301,yr=302,Kl=303,$l=304,Wo=306,ia=1e3,bi=1001,jl=1002,Tn=1003,ph=1004;var ul=1005;var di=1006,Af=1007;var sa=1008;var us=1009,Rf=1010,Cf=1011,qc=1012,qu=1013,ls=1014,cs=1015,wi=1016,Yu=1017,Zu=1018,Us=1020,Pf=1021,ai=1023,If=1024,Lf=1025,ks=1026,vr=1027,Df=1028,Ju=1029,zf=1030,Ku=1031,$u=1033,dl=33776,fl=33777,pl=33778,ml=33779,mh=35840,gh=35841,xh=35842,yh=35843,ju=36196,vh=37492,_h=37496,Mh=37808,bh=37809,wh=37810,Sh=37811,Eh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,Ph=37817,Ih=37818,Lh=37819,Dh=37820,zh=37821,gl=36492,Uh=36494,kh=36495,Uf=36283,Oh=36284,Nh=36285,Fh=36286;var co=2300,ho=2301,xl=2302,Bh=2400,Hh=2401,Gh=2402;var Qu=3e3,Os=3001,kf=3200,Of=3201,Xo=0,Nf=1,fi="",en="srgb",Ji="srgb-linear",Yc="display-p3",qo="display-p3-linear",uo="linear",jt="srgb",fo="rec709",po="p3";var Xs=7680;var Vh=519,Ff=512,Bf=513,Hf=514,ed=515,Gf=516,Vf=517,Wf=518,Xf=519,Ql=35044;var Wh="300 es",ec=1035,Yi=2e3,mo=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yl=Math.PI/180,go=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function Hn(i,e,t){return Math.max(e,Math.min(t,i))}function qf(i,e){return(i%e+e)%e}function vl(i,e,t){return(1-t)*i+t*e}function Xh(i){return(i&i-1)===0&&i!==0}function tc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class i{constructor(e,t,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],f=n[7],p=n[2],d=n[5],x=n[8],v=s[0],g=s[3],m=s[6],M=s[1],_=s[4],E=s[7],D=s[2],P=s[5],L=s[8];return r[0]=a*v+o*M+c*D,r[3]=a*g+o*_+c*P,r[6]=a*m+o*E+c*L,r[1]=h*v+u*M+f*D,r[4]=h*g+u*_+f*P,r[7]=h*m+u*E+f*L,r[2]=p*v+d*M+x*D,r[5]=p*g+d*_+x*P,r[8]=p*m+d*E+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=u*a-o*h,p=o*c-u*r,d=h*r-a*c,x=t*f+n*p+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*h-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=p*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*c-h*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_l=new At;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){let i=xo("canvas");return i.style.display="block",i}var qh={};function Qr(i){i in qh||(qh[i]=!0,console.warn(i))}var Yh=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[Ji]:{transfer:uo,primaries:fo,toReference:i=>i,fromReference:i=>i},[en]:{transfer:jt,primaries:fo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qo]:{transfer:uo,primaries:po,toReference:i=>i.applyMatrix3(Zh),fromReference:i=>i.applyMatrix3(Yh)},[Yc]:{transfer:jt,primaries:po,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zh),fromReference:i=>i.applyMatrix3(Yh).convertLinearToSRGB()}},Zf=new Set([Ji,qo]),Ht={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Pa[e].toReference,s=Pa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pa[i].primaries},getTransfer:function(i){return i===fi?uo:Pa[i].transfer}};function mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ml(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qs,yo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=xo("canvas")),qs.width=e.width,qs.height=e.height;let n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jf=0,vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kf=0,oi=class i extends ps{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=di,a=sa,o=ai,c=us,h=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Zi(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Os?en:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?Os:Qu}set encoding(e){Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Os?en:fi}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=Xu;oi.DEFAULT_ANISOTROPY=1;var rn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],u=c[4],f=c[8],p=c[1],d=c[5],x=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(h+1)/2,E=(d+1)/2,D=(m+1)/2,P=(u+p)/4,L=(f+v)/4,k=(x+g)/4;return _>E&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=P/n,r=L/n):E>D?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=k/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=L/r,s=k/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(f-v)/M,this.z=(p-u)/M,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Os?en:fi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new oi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends oi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ic=class extends oi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(f!==v||c!==p||h!==d||u!==x){let g=1-o,m=c*p+h*d+u*x+f*v,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let D=Math.sqrt(_),P=Math.atan2(D,m*M);g=Math.sin(g*P)/D,o=Math.sin(o*P)/D}let E=o*M;if(c=c*g+p*E,h=h*g+d*E,u=u*g+x*E,f=f*g+v*E,g===1-o){let D=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=D,h*=D,u*=D,f*=D}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a],p=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+u*f+c*d-h*p,e[t+1]=c*x+u*p+h*f-o*d,e[t+2]=h*x+u*d+o*p-c*f,e[t+3]=u*x-o*f-c*p-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),f=o(r/2),p=c(n/2),d=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*u*f+h*d*x,this._y=h*d*f-p*u*x,this._z=h*u*x+p*d*f,this._w=h*u*f-p*d*x;break;case"YXZ":this._x=p*u*f+h*d*x,this._y=h*d*f-p*u*x,this._z=h*u*x-p*d*f,this._w=h*u*f+p*d*x;break;case"ZXY":this._x=p*u*f-h*d*x,this._y=h*d*f+p*u*x,this._z=h*u*x+p*d*f,this._w=h*u*f-p*d*x;break;case"ZYX":this._x=p*u*f-h*d*x,this._y=h*d*f+p*u*x,this._z=h*u*x-p*d*f,this._w=h*u*f+p*d*x;break;case"YZX":this._x=p*u*f+h*d*x,this._y=h*d*f+p*u*x,this._z=h*u*x-p*d*f,this._w=h*u*f-p*d*x;break;case"XZY":this._x=p*u*f-h*d*x,this._y=h*d*f-p*u*x,this._z=h*u*x+p*d*f,this._w=h*u*f+p*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],f=t[10],p=n+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*h+a*f-o*u,this.y=n+c*u+o*h-r*f,this.z=s+c*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wl=new X,Jh=new jn,Ki=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),La.subVectors(this.max,Vr),Ys.subVectors(e.a,Vr),Zs.subVectors(e.b,Vr),Js.subVectors(e.c,Vr),is.subVectors(Zs,Ys),ss.subVectors(Js,Zs),As.subVectors(Ys,Js);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-As.z,As.y,is.z,0,-is.x,ss.z,0,-ss.x,As.z,0,-As.x,-is.y,is.x,0,-ss.y,ss.x,0,-As.y,As.x,0];return!Sl(t,Ys,Zs,Js,La)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,Ys,Zs,Js,La))?!1:(Da.crossVectors(is,ss),t=[Da.x,Da.y,Da.z],Sl(t,Ys,Zs,Js,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Fi=[new X,new X,new X,new X,new X,new X,new X,new X],vi=new X,Ia=new Ki,Ys=new X,Zs=new X,Js=new X,is=new X,ss=new X,As=new X,Vr=new X,La=new X,Da=new X,Rs=new X;function Sl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rs.fromArray(i,r);let o=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=e.dot(Rs),h=t.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var $f=new Ki,Wr=new X,El=new X,ms=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$f.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(El)),this.expandByPoint(Wr.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new X,Tl=new X,za=new X,rs=new X,Al=new X,Ua=new X,Rl=new X,ra=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tl.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=rs.dot(this.direction),c=-rs.dot(za),h=rs.lengthSq(),u=Math.abs(1-a*a),f,p,d,x;if(u>0)if(f=a*c-o,p=a*o-c,x=r*u,f>=0)if(p>=-x)if(p<=x){let v=1/u;f*=v,p*=v,d=f*(f+a*p+2*o)+p*(a*f+p+2*c)+h}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;else p<=-x?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+h):p<=x?(f=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tl).addScaledVector(za,p),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,s,r){Al.subVectors(t,e),Ua.subVectors(n,e),Rl.crossVectors(Al,Ua);let a=this.direction.dot(Rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rs.subVectors(this.origin,e);let c=o*this.direction.dot(Ua.crossVectors(rs,Ua));if(c<0)return null;let h=o*this.direction.dot(Al.cross(rs));if(h<0||c+h>a)return null;let u=-o*rs.dot(Rl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class i{constructor(e,t,n,s,r,a,o,c,h,u,f,p,d,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,f,p,d,x,v,g)}set(e,t,n,s,r,a,o,c,h,u,f,p,d,x,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=f,m[14]=p,m[3]=d,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),a=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*u,d=a*f,x=o*u,v=o*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=d+x*h,t[5]=p-v*h,t[9]=-o*c,t[2]=v-p*h,t[6]=x+d*h,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,d=c*f,x=h*u,v=h*f;t[0]=p+v*o,t[4]=x*o-d,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-x,t[6]=v+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,d=c*f,x=h*u,v=h*f;t[0]=p-v*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*u,t[9]=v-p*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,d=a*f,x=o*u,v=o*f;t[0]=c*u,t[4]=x*h-d,t[8]=p*h+v,t[1]=c*f,t[5]=v*h+p,t[9]=d*h-x,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*h,x=o*c,v=o*h;t[0]=c*u,t[4]=v-p*f,t[8]=x*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*f+x,t[10]=p-v*f}else if(e.order==="XZY"){let p=a*c,d=a*h,x=o*c,v=o*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=p*f+v,t[5]=a*u,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*u,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Qf)}lookAt(e,t,n){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),as.crossVectors(n,si),as.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),as.crossVectors(n,si)),as.normalize(),ka.crossVectors(si,as),s[0]=as.x,s[4]=ka.x,s[8]=si.x,s[1]=as.y,s[5]=ka.y,s[9]=si.y,s[2]=as.z,s[6]=ka.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],f=n[5],p=n[9],d=n[13],x=n[2],v=n[6],g=n[10],m=n[14],M=n[3],_=n[7],E=n[11],D=n[15],P=s[0],L=s[4],k=s[8],S=s[12],A=s[1],y=s[5],G=s[9],Z=s[13],N=s[2],J=s[6],b=s[10],ee=s[14],$=s[3],W=s[7],ie=s[11],Se=s[15];return r[0]=a*P+o*A+c*N+h*$,r[4]=a*L+o*y+c*J+h*W,r[8]=a*k+o*G+c*b+h*ie,r[12]=a*S+o*Z+c*ee+h*Se,r[1]=u*P+f*A+p*N+d*$,r[5]=u*L+f*y+p*J+d*W,r[9]=u*k+f*G+p*b+d*ie,r[13]=u*S+f*Z+p*ee+d*Se,r[2]=x*P+v*A+g*N+m*$,r[6]=x*L+v*y+g*J+m*W,r[10]=x*k+v*G+g*b+m*ie,r[14]=x*S+v*Z+g*ee+m*Se,r[3]=M*P+_*A+E*N+D*$,r[7]=M*L+_*y+E*J+D*W,r[11]=M*k+_*G+E*b+D*ie,r[15]=M*S+_*Z+E*ee+D*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],f=e[6],p=e[10],d=e[14],x=e[3],v=e[7],g=e[11],m=e[15];return x*(+r*c*f-s*h*f-r*o*p+n*h*p+s*o*d-n*c*d)+v*(+t*c*d-t*h*p+r*a*p-s*a*d+s*h*u-r*c*u)+g*(+t*h*f-t*o*d-r*a*f+n*a*d+r*o*u-n*h*u)+m*(-s*o*u-t*c*f+t*o*p+s*a*f-n*a*p+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=e[9],p=e[10],d=e[11],x=e[12],v=e[13],g=e[14],m=e[15],M=f*g*h-v*p*h+v*c*d-o*g*d-f*c*m+o*p*m,_=x*p*h-u*g*h-x*c*d+a*g*d+u*c*m-a*p*m,E=u*v*h-x*f*h+x*o*d-a*v*d-u*o*m+a*f*m,D=x*f*c-u*v*c-x*o*p+a*v*p+u*o*g-a*f*g,P=t*M+n*_+s*E+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=M*L,e[1]=(v*p*r-f*g*r-v*s*d+n*g*d+f*s*m-n*p*m)*L,e[2]=(o*g*r-v*c*r+v*s*h-n*g*h-o*s*m+n*c*m)*L,e[3]=(f*c*r-o*p*r-f*s*h+n*p*h+o*s*d-n*c*d)*L,e[4]=_*L,e[5]=(u*g*r-x*p*r+x*s*d-t*g*d-u*s*m+t*p*m)*L,e[6]=(x*c*r-a*g*r-x*s*h+t*g*h+a*s*m-t*c*m)*L,e[7]=(a*p*r-u*c*r+u*s*h-t*p*h-a*s*d+t*c*d)*L,e[8]=E*L,e[9]=(x*f*r-u*v*r-x*n*d+t*v*d+u*n*m-t*f*m)*L,e[10]=(a*v*r-x*o*r+x*n*h-t*v*h-a*n*m+t*o*m)*L,e[11]=(u*o*r-a*f*r-u*n*h+t*f*h+a*n*d-t*o*d)*L,e[12]=D*L,e[13]=(u*v*s-x*f*s+x*n*p-t*v*p-u*n*g+t*f*g)*L,e[14]=(x*o*s-a*v*s-x*n*c+t*v*c+a*n*g-t*o*g)*L,e[15]=(a*f*s-u*o*s+u*n*c-t*f*c-a*n*p+t*o*p)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,f=o+o,p=r*h,d=r*u,x=r*f,v=a*u,g=a*f,m=o*f,M=c*h,_=c*u,E=c*f,D=n.x,P=n.y,L=n.z;return s[0]=(1-(v+m))*D,s[1]=(d+E)*D,s[2]=(x-_)*D,s[3]=0,s[4]=(d-E)*P,s[5]=(1-(p+m))*P,s[6]=(g+M)*P,s[7]=0,s[8]=(x+_)*L,s[9]=(g-M)*L,s[10]=(1-(p+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),o=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_i.copy(this);let h=1/r,u=1/a,f=1/o;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Yi){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,x;if(o===Yi)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===mo)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yi){let c=this.elements,h=1/(t-e),u=1/(n-s),f=1/(a-r),p=(t+e)*h,d=(n+s)*u,x,v;if(o===Yi)x=(a+r)*f,v=-2*f;else if(o===mo)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ks=new X,_i=new Nt,jf=new X(0,0,0),Qf=new X(1,1,1),as=new X,ka=new X,si=new X,Kh=new Nt,$h=new jn,gs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Hn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gs.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},e0=0,jh=new X,$s=new jn,Hi=new Nt,Oa=new X,Xr=new X,t0=new X,n0=new jn,Qh=new X(1,0,0),eu=new X(0,1,0),tu=new X(0,0,1),i0={type:"added"},s0={type:"removed"},dn=class i extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new X,t=new gs,n=new jn,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new At}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Xr,Oa,this.up):Hi.lookAt(Oa,Xr,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Hi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};dn.DEFAULT_UP=new X(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new X,Gi=new X,Cl=new X,Vi=new X,js=new X,Qs=new X,nu=new X,Pl=new X,Il=new X,Ll=new X,Na=!1,zs=class i{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mi.subVectors(s,t),Gi.subVectors(n,t),Cl.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(Gi),c=Mi.dot(Cl),h=Gi.dot(Gi),u=Gi.dot(Cl),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(h*c-o*u)*p,x=(a*u-o*c)*p;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getUV(e,t,n,s,r,a,o,c){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(a,Vi.y),c.addScaledVector(o,Vi.z),c)}static isFrontFacing(e,t,n,s){return Mi.subVectors(n,t),Gi.subVectors(e,t),Mi.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),Mi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;js.subVectors(s,n),Qs.subVectors(r,n),Pl.subVectors(e,n);let c=js.dot(Pl),h=Qs.dot(Pl);if(c<=0&&h<=0)return t.copy(n);Il.subVectors(e,s);let u=js.dot(Il),f=Qs.dot(Il);if(u>=0&&f<=u)return t.copy(s);let p=c*f-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(js,a);Ll.subVectors(e,r);let d=js.dot(Ll),x=Qs.dot(Ll);if(x>=0&&d<=x)return t.copy(r);let v=d*h-c*x;if(v<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(n).addScaledVector(Qs,o);let g=u*x-d*f;if(g<=0&&f-u>=0&&d-x>=0)return nu.subVectors(r,s),o=(f-u)/(f-u+(d-x)),t.copy(s).addScaledVector(nu,o);let m=1/(g+v+p);return a=v*m,o=p*m,t.copy(n).addScaledVector(js,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ht.workingColorSpace){if(e=qf(e,1),t=Hn(t,0,1),n=Hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dl(a,r,e+1/3),this.g=Dl(a,r,e),this.b=Dl(a,r,e-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Ml(e.r),this.g=Ml(e.g),this.b=Ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ht.fromWorkingColorSpace(Bn.copy(this),e),Math.round(Hn(Bn.r*255,0,255))*65536+Math.round(Hn(Bn.g*255,0,255))*256+Math.round(Hn(Bn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Bn.copy(this),t);let n=Bn.r,s=Bn.g,r=Bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=en){Ht.fromWorkingColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,s=Bn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Fa);let n=vl(os.h,Fa.h,t),s=vl(os.s,Fa.s,t),r=vl(os.l,Fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new rt;rt.NAMES=nd;var r0=0,pi=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=hs,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Jl&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ft=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mn=new X,Ba=new Le,xn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}};var Mo=class extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bo=class extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var a0=0,ui=new Nt,zl=new dn,er=new X,ri=new Ki,qr=new Ki,zn=new X,qt=class i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?bo:Mo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new At().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(zn.addVectors(ri.min,qr.min),ri.expandByPoint(zn),zn.addVectors(ri.max,qr.max),ri.expandByPoint(zn)):(ri.expandByPoint(qr.min),ri.expandByPoint(qr.max))}ri.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)zn.fromBufferAttribute(o,h),c&&(er.fromBufferAttribute(e,h),zn.add(er)),s=Math.max(s,n.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],u=[];for(let A=0;A<o;A++)h[A]=new X,u[A]=new X;let f=new X,p=new X,d=new X,x=new Le,v=new Le,g=new Le,m=new X,M=new X;function _(A,y,G){f.fromArray(s,A*3),p.fromArray(s,y*3),d.fromArray(s,G*3),x.fromArray(a,A*2),v.fromArray(a,y*2),g.fromArray(a,G*2),p.sub(f),d.sub(f),v.sub(x),g.sub(x);let Z=1/(v.x*g.y-g.x*v.y);isFinite(Z)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(Z),M.copy(d).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(Z),h[A].add(m),h[y].add(m),h[G].add(m),u[A].add(M),u[y].add(M),u[G].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let A=0,y=E.length;A<y;++A){let G=E[A],Z=G.start,N=G.count;for(let J=Z,b=Z+N;J<b;J+=3)_(n[J+0],n[J+1],n[J+2])}let D=new X,P=new X,L=new X,k=new X;function S(A){L.fromArray(r,A*3),k.copy(L);let y=h[A];D.copy(y),D.sub(L.multiplyScalar(L.dot(y))).normalize(),P.crossVectors(k,y);let Z=P.dot(u[A])<0?-1:1;c[A*4]=D.x,c[A*4+1]=D.y,c[A*4+2]=D.z,c[A*4+3]=Z}for(let A=0,y=E.length;A<y;++A){let G=E[A],Z=G.start,N=G.count;for(let J=Z,b=Z+N;J<b;J+=3)S(n[J+0]),S(n[J+1]),S(n[J+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,h=new X,u=new X,f=new X;if(e)for(let p=0,d=e.count;p<d;p+=3){let x=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zn.fromBufferAttribute(e,t),zn.normalize(),e.setXYZ(t,zn.x,zn.y,zn.z)}toNonIndexed(){function e(o,c){let h=o.array,u=o.itemSize,f=o.normalized,p=new h.constructor(c.length*u),d=0,x=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let m=0;m<u;m++)p[x++]=h[d++]}return new xn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let p=h[u],d=e(p,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let f=0,p=h.length;f<p;f++){let d=h[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],f=r[h];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=new Nt,Cs=new ra,Ha=new ms,su=new X,tr=new X,nr=new X,ir=new X,Ul=new X,Ga=new X,Va=new Le,Wa=new Le,Xa=new Le,ru=new X,au=new X,ou=new X,qa=new X,Ya=new X,Ne=class extends dn{constructor(e=new qt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],f=r[c];u!==0&&(Ul.fromBufferAttribute(f,e),a?Ga.addScaledVector(Ul,u):Ga.addScaledVector(Ul.sub(t),u))}t.add(Ga)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Ha.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Ha,su)===null||Cs.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){let g=p[x],m=a[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,D=_;E<D;E+=3){let P=o.getX(E),L=o.getX(E+1),k=o.getX(E+2);s=Za(this,m,e,n,h,u,f,P,L,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=x,m=v;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),E=o.getX(g+2);s=Za(this,a,e,n,h,u,f,M,_,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){let g=p[x],m=a[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,D=_;E<D;E+=3){let P=E,L=E+1,k=E+2;s=Za(this,m,e,n,h,u,f,P,L,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=x,m=v;g<m;g+=3){let M=g,_=g+1,E=g+2;s=Za(this,a,e,n,h,u,f,M,_,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function o0(i,e,t,n,s,r,a,o){let c;if(e.side===gn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===fs,o),c===null)return null;Ya.copy(o),Ya.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Ya);return h<t.near||h>t.far?null:{distance:h,point:Ya.clone(),object:i}}function Za(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,tr),i.getVertexPosition(c,nr),i.getVertexPosition(h,ir);let u=o0(i,e,t,n,tr,nr,ir,qa);if(u){s&&(Va.fromBufferAttribute(s,o),Wa.fromBufferAttribute(s,c),Xa.fromBufferAttribute(s,h),u.uv=zs.getInterpolation(qa,tr,nr,ir,Va,Wa,Xa,new Le)),r&&(Va.fromBufferAttribute(r,o),Wa.fromBufferAttribute(r,c),Xa.fromBufferAttribute(r,h),u.uv1=zs.getInterpolation(qa,tr,nr,ir,Va,Wa,Xa,new Le),u.uv2=u.uv1),a&&(ru.fromBufferAttribute(a,o),au.fromBufferAttribute(a,c),ou.fromBufferAttribute(a,h),u.normal=zs.getInterpolation(qa,tr,nr,ir,ru,au,ou,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new X,materialIndex:0};zs.getNormal(tr,nr,ir,f.normal),u.face=f}return u}var Qn=class i extends qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],f=[],p=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function x(v,g,m,M,_,E,D,P,L,k,S){let A=E/L,y=D/k,G=E/2,Z=D/2,N=P/2,J=L+1,b=k+1,ee=0,$=0,W=new X;for(let ie=0;ie<b;ie++){let Se=ie*y-Z;for(let be=0;be<J;be++){let he=be*A-G;W[v]=he*M,W[g]=Se*_,W[m]=N,h.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[m]=P>0?1:-1,u.push(W.x,W.y,W.z),f.push(be/L),f.push(1-ie/k),ee+=1}}for(let ie=0;ie<k;ie++)for(let Se=0;Se<L;Se++){let be=p+Se+J*ie,he=p+Se+J*(ie+1),Re=p+(Se+1)+J*(ie+1),we=p+(Se+1)+J*ie;c.push(be,he,we),c.push(he,Re,we),$+=6}o.addGroup(d,$,S),d+=$,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qn(i){let e={};for(let t=0;t<i.length;t++){let n=_r(i[t]);for(let s in n)e[s]=n[s]}return e}function l0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function id(i){return i.getRenderTarget()===null?i.outputColorSpace:Ht.workingColorSpace}var Ms={clone:_r,merge:qn},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wo=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},An=class extends wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,sc=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new An(sr,rr,e,t);r.layers=this.layers,this.add(r);let a=new An(sr,rr,e,t);a.layers=this.layers,this.add(a);let o=new An(sr,rr,e,t);o.layers=this.layers,this.add(o);let c=new An(sr,rr,e,t);c.layers=this.layers,this.add(c);let h=new An(sr,rr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,p,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},So=class extends oi{constructor(e,t,n,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rc=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Os?en:fi),this.texture=new So(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Di});r.uniforms.tEquirect.value=t;let a=new Ne(s,r),o=t.minFilter;return t.minFilter===sa&&(t.minFilter=di),new sc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},kl=new X,u0=new X,d0=new At,Xi=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=kl.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||d0.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new ms,Ja=new X,oa=class{constructor(e=new Xi,t=new Xi,n=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],d=s[8],x=s[9],v=s[10],g=s[11],m=s[12],M=s[13],_=s[14],E=s[15];if(n[0].setComponents(c-r,p-h,g-d,E-m).normalize(),n[1].setComponents(c+r,p+h,g+d,E+m).normalize(),n[2].setComponents(c+a,p+u,g+x,E+M).normalize(),n[3].setComponents(c-a,p-u,g-x,E-M).normalize(),n[4].setComponents(c-o,p-f,g-v,E-_).normalize(),t===Yi)n[5].setComponents(c+o,p+f,g+v,E+_).normalize();else if(t===mo)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function f0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(h,u){let f=h.array,p=h.usage,d=f.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,f,p),h.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function r(h,u,f){let p=u.array,d=u._updateRange,x=u.updateRanges;if(i.bindBuffer(f,h),d.count===-1&&x.length===0&&i.bufferSubData(f,0,p),x.length!==0){for(let v=0,g=x.length;v<g;v++){let m=x[v];t?i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let f=n.get(h);if(f===void 0)n.set(h,s(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,u),f.version=h.version}}return{get:a,remove:o,update:c}}var xs=class i extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,f=e/o,p=t/c,d=[],x=[],v=[],g=[];for(let m=0;m<u;m++){let M=m*p-a;for(let _=0;_<h;_++){let E=_*f-r;x.push(E,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let _=M+h*m,E=M+h*(m+1),D=M+1+h*(m+1),P=M+1+h*m;d.push(_,E,P),d.push(E,D,P)}this.setIndex(d),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`
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
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Bm=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:y0,alphatest_pars_fragment:v0,aomap_fragment:_0,aomap_pars_fragment:M0,batching_pars_vertex:b0,batching_vertex:w0,begin_vertex:S0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:z0,color_pars_vertex:U0,color_vertex:k0,common:O0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:B0,displacementmap_vertex:H0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:op,envmap_vertex:K0,fog_vertex:$0,fog_pars_vertex:j0,fog_fragment:Q0,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:_p,map_fragment:Mp,map_pars_fragment:bp,map_particle_fragment:wp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:zp,normal_vertex:Up,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Bp,opaque_fragment:Hp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:$p,shadowmask_pars_fragment:jp,skinbase_vertex:Qp,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:xm,cube_frag:ym,depth_vert:vm,depth_frag:_m,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:wm,equirect_frag:Sm,linedashed_vert:Em,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Pm,meshmatcap_vert:Im,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:zm,meshphong_vert:Um,meshphong_frag:km,meshphysical_vert:Om,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:Bm,points_vert:Hm,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},We={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Li={basic:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new rt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:qn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:qn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new rt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:qn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:qn([We.points,We.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:qn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:qn([We.common,We.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:qn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:qn([We.sprite,We.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:qn([We.common,We.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:qn([We.lights,We.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Li.physical={uniforms:qn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var Ka={r:0,b:0,g:0};function Ym(i,e,t,n,s,r,a){let o=new rt(0),c=r===!0?0:1,h,u,f=null,p=0,d=null;function x(g,m){let M=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Wo)?(u===void 0&&(u=new Ne(new Qn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:_r(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ht.getTransfer(_.colorSpace)!==jt,(f!==_||p!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Ne(new xs(2,2),new yn({name:"BackgroundMaterial",uniforms:_r(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function v(g,m){g.getRGB(Ka,id(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(o,c)},render:x}}function Zm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),h=c,u=!1;function f(N,J,b,ee,$){let W=!1;if(a){let ie=v(ee,b,J);h!==ie&&(h=ie,d(h.object)),W=m(N,ee,b,$),W&&M(N,ee,b,$)}else{let ie=J.wireframe===!0;(h.geometry!==ee.id||h.program!==b.id||h.wireframe!==ie)&&(h.geometry=ee.id,h.program=b.id,h.wireframe=ie,W=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,k(N,J,b,ee),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function x(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,J,b){let ee=b.wireframe===!0,$=o[N.id];$===void 0&&($={},o[N.id]=$);let W=$[J.id];W===void 0&&(W={},$[J.id]=W);let ie=W[ee];return ie===void 0&&(ie=g(p()),W[ee]=ie),ie}function g(N){let J=[],b=[],ee=[];for(let $=0;$<s;$++)J[$]=0,b[$]=0,ee[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:b,attributeDivisors:ee,object:N,attributes:{},index:null}}function m(N,J,b,ee){let $=h.attributes,W=J.attributes,ie=0,Se=b.getAttributes();for(let be in Se)if(Se[be].location>=0){let Re=$[be],we=W[be];if(we===void 0&&(be==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),be==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),Re===void 0||Re.attribute!==we||we&&Re.data!==we.data)return!0;ie++}return h.attributesNum!==ie||h.index!==ee}function M(N,J,b,ee){let $={},W=J.attributes,ie=0,Se=b.getAttributes();for(let be in Se)if(Se[be].location>=0){let Re=W[be];Re===void 0&&(be==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),be==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor));let we={};we.attribute=Re,Re&&Re.data&&(we.data=Re.data),$[be]=we,ie++}h.attributes=$,h.attributesNum=ie,h.index=ee}function _(){let N=h.newAttributes;for(let J=0,b=N.length;J<b;J++)N[J]=0}function E(N){D(N,0)}function D(N,J){let b=h.newAttributes,ee=h.enabledAttributes,$=h.attributeDivisors;b[N]=1,ee[N]===0&&(i.enableVertexAttribArray(N),ee[N]=1),$[N]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),$[N]=J)}function P(){let N=h.newAttributes,J=h.enabledAttributes;for(let b=0,ee=J.length;b<ee;b++)J[b]!==N[b]&&(i.disableVertexAttribArray(b),J[b]=0)}function L(N,J,b,ee,$,W,ie){ie===!0?i.vertexAttribIPointer(N,J,b,$,W):i.vertexAttribPointer(N,J,b,ee,$,W)}function k(N,J,b,ee){if(n.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let $=ee.attributes,W=b.getAttributes(),ie=J.defaultAttributeValues;for(let Se in W){let be=W[Se];if(be.location>=0){let he=$[Se];if(he===void 0&&(Se==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),Se==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){let Re=he.normalized,we=he.itemSize,Xe=t.get(he);if(Xe===void 0)continue;let Ve=Xe.buffer,at=Xe.type,Ke=Xe.bytesPerElement,Oe=n.isWebGL2===!0&&(at===i.INT||at===i.UNSIGNED_INT||he.gpuType===qu);if(he.isInterleavedBufferAttribute){let $e=he.data,Y=$e.stride,Ie=he.offset;if($e.isInstancedInterleavedBuffer){for(let me=0;me<be.locationSize;me++)D(be.location+me,$e.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let me=0;me<be.locationSize;me++)E(be.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let me=0;me<be.locationSize;me++)L(be.location+me,we/be.locationSize,at,Re,Y*Ke,(Ie+we/be.locationSize*me)*Ke,Oe)}else{if(he.isInstancedBufferAttribute){for(let $e=0;$e<be.locationSize;$e++)D(be.location+$e,he.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let $e=0;$e<be.locationSize;$e++)E(be.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let $e=0;$e<be.locationSize;$e++)L(be.location+$e,we/be.locationSize,at,Re,we*Ke,we/be.locationSize*$e*Ke,Oe)}}else if(ie!==void 0){let Re=ie[Se];if(Re!==void 0)switch(Re.length){case 2:i.vertexAttrib2fv(be.location,Re);break;case 3:i.vertexAttrib3fv(be.location,Re);break;case 4:i.vertexAttrib4fv(be.location,Re);break;default:i.vertexAttrib1fv(be.location,Re)}}}}P()}function S(){G();for(let N in o){let J=o[N];for(let b in J){let ee=J[b];for(let $ in ee)x(ee[$].object),delete ee[$];delete J[b]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;let J=o[N.id];for(let b in J){let ee=J[b];for(let $ in ee)x(ee[$].object),delete ee[$];delete J[b]}delete o[N.id]}function y(N){for(let J in o){let b=o[J];if(b[N.id]===void 0)continue;let ee=b[N.id];for(let $ in ee)x(ee[$].object),delete ee[$];delete b[N.id]}}function G(){Z(),u=!0,h!==c&&(h=c,d(h.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:E,disableUnusedAttributes:P}}function Jm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,p){if(p===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,u,f,p),t.update(f,r,p)}function h(u,f,p){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<p;x++)this.render(u[x],f[x]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,p);let x=0;for(let v=0;v<p;v++)x+=f[v];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function Km(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,E=a||e.has("OES_texture_float"),D=_&&E,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:D,maxSamples:P}}function $m(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Xi,o=new At,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,d){let x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?u(null):h();else{let M=r?0:n,_=M*4,E=m.clippingState||null;c.value=E,E=u(x,p,_,d);for(let D=0;D!==_;++D)E[D]=t[D];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,d,x){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=c.value,x!==!0||g===null){let m=d+v*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,E=d;_!==v;++_,E+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function jm(i){let e=new WeakMap;function t(a,o){return o===Kl?a.mapping=xr:o===$l&&(a.mapping=yr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Kl||o===$l)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new rc(c.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Mr=class extends wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,lu=[.125,.215,.35,.446,.526,.582],Ds=20,Ol=new Mr,cu=new rt,Nl=null,Fl=0,Bl=0,Is=(1+Math.sqrt(5))/2,ar=1/Is,hu=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Is,ar),new X(0,Is,-ar),new X(ar,0,Is),new X(-ar,0,Is),new X(Is,ar,0),new X(-Is,ar,0)],ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Fl,Bl),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:wi,format:ai,colorSpace:Ji,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=eg(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Ol)}_sceneToCubeUV(e,t,n,s){let o=new An(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(cu),u.toneMapping=zi,u.autoClear=!1;let d=new Ft({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),x=new Ne(new Qn,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(cu),v=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):M===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));let _=this._cubeSize;$a(s,M*_,m>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===xr||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;$a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ol)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hu[(s-1)%hu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Ne(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),v=r/x,g=isFinite(r)?1+Math.floor(u*v):Ds;g>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);let m=[],M=0;for(let L=0;L<Ds;++L){let k=L/v,S=Math.exp(-k*k/2);m.push(S),L===0?M+=S:L<g&&(M+=2*S)}for(let L=0;L<m.length;L++)m[L]=m[L]/M;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-n;let E=this._sizeLods[s],D=3*E*(s>_-dr?s-_+dr:0),P=4*(this._cubeSize-E);$a(t,D,P,3*E,2*E),c.setRenderTarget(t),c.render(f,Ol)}};function Qm(i){let e=[],t=[],n=[],s=i,r=i-dr+1+lu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-dr?c=lu[a-i+dr-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,x=6,v=3,g=2,m=1,M=new Float32Array(v*x*d),_=new Float32Array(g*x*d),E=new Float32Array(m*x*d);for(let P=0;P<d;P++){let L=P%3*2/3-1,k=P>2?0:-1,S=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];M.set(S,v*x*P),_.set(p,g*x*P);let A=[P,P,P,P,P,P];E.set(A,m*x*P)}let D=new qt;D.setAttribute("position",new xn(M,v)),D.setAttribute("uv",new xn(_,g)),D.setAttribute("faceIndex",new xn(E,m)),e.push(D),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){let n=new Yn(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function eg(i,e,t){let n=new Float32Array(Ds),s=new X(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function du(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function fu(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function tg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===Kl||c===$l,u=c===xr||c===yr;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ys(i)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(h&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new ys(i));let p=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ng(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let v=p.morphAttributes[x];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let v=d[x];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function h(f){let p=[],d=f.index,x=f.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let _=0,E=M.length;_<E;_+=3){let D=M[_+0],P=M[_+1],L=M[_+2];p.push(D,P,P,L,L,D)}}else if(x!==void 0){let M=x.array;v=x.version;for(let _=0,E=M.length/3-1;_<E;_+=3){let D=_+0,P=_+1,L=_+2;p.push(D,P,P,L,L,D)}}else return;let g=new(td(p)?bo:Mo)(p,1);g.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function sg(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,c;function h(d){o=d.type,c=d.bytesPerElement}function u(d,x){i.drawElements(r,x,o,d*c),t.update(x,r,1)}function f(d,x,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,x,o,d*c,v),t.update(x,r,v)}function p(d,x,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/c,x[m]);else{g.multiDrawElementsWEBGL(r,x,0,o,d,0,v);let m=0;for(let M=0;M<v;M++)m+=x[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function rg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,e){return i[0]-e[0]}function og(i,e){return Math.abs(e[1])-Math.abs(i[1])}function lg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new rn,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,f){let p=h.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=d!==void 0?d.length:0,v=r.get(u);if(v===void 0||v.count!==x){let N=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();let M=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[],k=0;M===!0&&(k=1),_===!0&&(k=2),E===!0&&(k=3);let S=u.attributes.position.count*k,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let y=new Float32Array(S*A*4*x),G=new _o(y,S,A,x);G.type=cs,G.needsUpdate=!0;let Z=k*4;for(let J=0;J<x;J++){let b=D[J],ee=P[J],$=L[J],W=S*A*4*J;for(let ie=0;ie<b.count;ie++){let Se=ie*Z;M===!0&&(a.fromBufferAttribute(b,ie),y[W+Se+0]=a.x,y[W+Se+1]=a.y,y[W+Se+2]=a.z,y[W+Se+3]=0),_===!0&&(a.fromBufferAttribute(ee,ie),y[W+Se+4]=a.x,y[W+Se+5]=a.y,y[W+Se+6]=a.z,y[W+Se+7]=0),E===!0&&(a.fromBufferAttribute($,ie),y[W+Se+8]=a.x,y[W+Se+9]=a.y,y[W+Se+10]=a.z,y[W+Se+11]=$.itemSize===4?a.w:1)}}v={count:x,texture:G,size:new Le(S,A)},r.set(u,v),u.addEventListener("dispose",N)}let g=0;for(let M=0;M<p.length;M++)g+=p[M];let m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==d){x=[];for(let _=0;_<d;_++)x[_]=[_,0];n[u.id]=x}for(let _=0;_<d;_++){let E=x[_];E[0]=_,E[1]=p[_]}x.sort(og);for(let _=0;_<8;_++)_<d&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(ag);let v=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let E=o[_],D=E[0],P=E[1];D!==Number.MAX_SAFE_INTEGER&&P?(v&&u.getAttribute("morphTarget"+_)!==v[D]&&u.setAttribute("morphTarget"+_,v[D]),g&&u.getAttribute("morphNormal"+_)!==g[D]&&u.setAttribute("morphNormal"+_,g[D]),s[_]=P,m+=P):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function cg(i,e,t,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var Eo=class extends oi{constructor(e,t,n,s,r,a,o,c,h,u){if(u=u!==void 0?u:ks,u!==ks&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=ls),n===void 0&&u===vr&&(n=Us),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rd=new oi,ad=new Eo(1,1);ad.compareFunction=ed;var od=new _o,ld=new ic,cd=new So,pu=[],mu=[],gu=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yo(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2fv(this.addr,e),Cn(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;i.uniform3fv(this.addr,e),Cn(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4fv(this.addr,e),Cn(t,e)}}function pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Cn(t,n)}}function mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Cn(t,n)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),Cn(t,n)}}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2iv(this.addr,e),Cn(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;i.uniform3iv(this.addr,e),Cn(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4iv(this.addr,e),Cn(t,e)}}function Mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2uiv(this.addr,e),Cn(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;i.uniform3uiv(this.addr,e),Cn(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4uiv(this.addr,e),Cn(t,e)}}function Eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ad:rd;t.setTexture2D(e||r,s)}function Tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ld,s)}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cd,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||od,s)}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return Mg;case 36294:return bg;case 36295:return wg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ug(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kg(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Og(i,e){i.uniform1iv(this.addr,e)}function Ng(i,e){i.uniform2iv(this.addr,e)}function Fg(i,e){i.uniform3iv(this.addr,e)}function Bg(i,e){i.uniform4iv(this.addr,e)}function Hg(i,e){i.uniform1uiv(this.addr,e)}function Gg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function Xg(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||rd,r[a])}function qg(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ld,r[a])}function Yg(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||cd,r[a])}function Zg(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||od,r[a])}function Jg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return zg;case 35675:return Ug;case 35676:return kg;case 5124:case 35670:return Og;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cg(t.type)}},oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function Kg(i,e,t){let n=i.name,s=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),a=Hl.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){vu(t,h===void 0?new ac(o,i,e):new oc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new lc(o),vu(t,f)),t=f}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Kg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function _u(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $g=37297,jg=0;function Qg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ex(i){let e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(i),n;switch(e===t?n="":e===po&&t===fo?n="LinearDisplayP3ToLinearSRGB":e===fo&&t===po&&(n="LinearSRGBToLinearDisplayP3"),i){case Ji:case qo:return[n,"LinearTransferOETF"];case en:case Yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qg(i.getShaderSource(e),a)}else return s}function tx(i,e){let t=ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nx(i,e){let t;switch(e){case Gc:t="Linear";break;case Vc:t="Reinhard";break;case Wc:t="OptimizedCineon";break;case ya:t="ACESFilmic";break;case Xc:t="AgX";break;case Tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ix(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fr).join(`
`)}function rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fr(i){return i!==""}function bu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(ox,cx)}var lx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cx(i,e){let t=St[e];if(t===void 0){let n=lx.get(e);if(n!==void 0)t=St[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(hx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function fx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===yr&&(e="ENVMAP_MODE_REFRACTION"),e}function mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function gx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=dx(t),h=fx(t),u=px(t),f=mx(t),p=gx(t),d=t.isWebGL2?"":ix(t),x=sx(t),v=rx(r),g=s.createProgram(),m,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(fr).join(`
`),m.length>0&&(m+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(fr).join(`
`),M.length>0&&(M+=`
`)):(m=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),M=[d,Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?St.tonemapping_pars_fragment:"",t.toneMapping!==zi?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=cc(a),a=bu(a,t),a=wu(a,t),o=cc(o),o=bu(o,t),o=wu(o,t),a=Su(a),o=Su(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=_+m+a,D=_+M+o,P=_u(s,s.VERTEX_SHADER,E),L=_u(s,s.FRAGMENT_SHADER,D);s.attachShader(g,P),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function k(G){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(P).trim(),J=s.getShaderInfoLog(L).trim(),b=!0,ee=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(b=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,L);else{let $=Mu(s,P,"vertex"),W=Mu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+$+`
`+W)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(N===""||J==="")&&(ee=!1);ee&&(G.diagnostics={runnable:b,programLog:Z,vertexShader:{log:N,prefix:m},fragmentShader:{log:J,prefix:M}})}s.deleteShader(P),s.deleteShader(L),S=new gr(s,g),A=ax(s,g)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,$g)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=L,this}var yx=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uc(e),t.set(e,n)),n}},uc=class{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}};function vx(i,e,t,n,s,r,a){let o=new aa,c=new hc,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,A,y,G,Z){let N=G.fog,J=Z.geometry,b=S.isMeshStandardMaterial?G.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||b),$=ee&&ee.mapping===Wo?ee.image.height:null,W=x[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=ie!==void 0?ie.length:0,be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let he,Re,we,Xe;if(W){let Vt=Li[W];he=Vt.vertexShader,Re=Vt.fragmentShader}else he=S.vertexShader,Re=S.fragmentShader,c.update(S),we=c.getVertexShaderID(S),Xe=c.getFragmentShaderID(S);let Ve=i.getRenderTarget(),at=Z.isInstancedMesh===!0,Ke=Z.isBatchedMesh===!0,Oe=!!S.map,$e=!!S.matcap,Y=!!ee,Ie=!!S.aoMap,me=!!S.lightMap,Ae=!!S.bumpMap,ve=!!S.normalMap,Ue=!!S.displacementMap,Fe=!!S.emissiveMap,z=!!S.metalnessMap,R=!!S.roughnessMap,te=S.anisotropy>0,xe=S.clearcoat>0,_e=S.iridescence>0,Te=S.sheen>0,tt=S.transmission>0,ze=te&&!!S.anisotropyMap,Ze=xe&&!!S.clearcoatMap,it=xe&&!!S.clearcoatNormalMap,ut=xe&&!!S.clearcoatRoughnessMap,ye=_e&&!!S.iridescenceMap,gt=_e&&!!S.iridescenceThicknessMap,ct=Te&&!!S.sheenColorMap,ht=Te&&!!S.sheenRoughnessMap,lt=!!S.specularMap,je=!!S.specularColorMap,Qe=!!S.specularIntensityMap,dt=tt&&!!S.transmissionMap,zt=tt&&!!S.thicknessMap,pt=!!S.gradientMap,De=!!S.alphaMap,Q=S.alphaTest>0,Be=!!S.alphaHash,He=!!S.extensions,ot=!!J.attributes.uv1,et=!!J.attributes.uv2,wt=!!J.attributes.uv3,Rt=zi;return S.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(Rt=i.toneMapping),{isWebGL2:u,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:Re,defines:S.defines,customVertexShaderID:we,customFragmentShaderID:Xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ke,instancing:at,instancingColor:at&&Z.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ve===null?i.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:Ji,map:Oe,matcap:$e,envMap:Y,envMapMode:Y&&ee.mapping,envMapCubeUVHeight:$,aoMap:Ie,lightMap:me,bumpMap:Ae,normalMap:ve,displacementMap:p&&Ue,emissiveMap:Fe,normalMapObjectSpace:ve&&S.normalMapType===Nf,normalMapTangentSpace:ve&&S.normalMapType===Xo,metalnessMap:z,roughnessMap:R,anisotropy:te,anisotropyMap:ze,clearcoat:xe,clearcoatMap:Ze,clearcoatNormalMap:it,clearcoatRoughnessMap:ut,iridescence:_e,iridescenceMap:ye,iridescenceThicknessMap:gt,sheen:Te,sheenColorMap:ct,sheenRoughnessMap:ht,specularMap:lt,specularColorMap:je,specularIntensityMap:Qe,transmission:tt,transmissionMap:dt,thicknessMap:zt,gradientMap:pt,opaque:S.transparent===!1&&S.blending===hs,alphaMap:De,alphaTest:Q,alphaHash:Be,combine:S.combine,mapUv:Oe&&v(S.map.channel),aoMapUv:Ie&&v(S.aoMap.channel),lightMapUv:me&&v(S.lightMap.channel),bumpMapUv:Ae&&v(S.bumpMap.channel),normalMapUv:ve&&v(S.normalMap.channel),displacementMapUv:Ue&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:z&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:ze&&v(S.anisotropyMap.channel),clearcoatMapUv:Ze&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ht&&v(S.sheenRoughnessMap.channel),specularMapUv:lt&&v(S.specularMap.channel),specularColorMapUv:je&&v(S.specularColorMap.channel),specularIntensityMapUv:Qe&&v(S.specularIntensityMap.channel),transmissionMapUv:dt&&v(S.transmissionMap.channel),thicknessMapUv:zt&&v(S.thicknessMap.channel),alphaMapUv:De&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ve||te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:ot,vertexUv2s:et,vertexUv3s:wt,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&(Oe||De),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:be,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&Ht.getTransfer(S.map.colorSpace)===jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:He&&S.extensions.derivatives===!0,extensionFragDepth:He&&S.extensions.fragDepth===!0,extensionDrawBuffers:He&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:He&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:He&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let y in S.defines)A.push(y),A.push(S.defines[y]);return S.isRawShaderMaterial===!1&&(M(A,S),_(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function M(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){let A=x[S.type],y;if(A){let G=Li[A];y=Ms.clone(G.uniforms)}else y=S.uniforms;return y}function D(S,A){let y;for(let G=0,Z=h.length;G<Z;G++){let N=h[G];if(N.cacheKey===A){y=N,++y.usedTimes;break}}return y===void 0&&(y=new xx(i,A,S,r),h.push(y)),y}function P(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function L(S){c.remove(S)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:D,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:k}}function _x(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Au(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,d,x,v,g){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:d,groupOrder:x,renderOrder:f.renderOrder,z:v,group:g},i[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=d,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=v,m.group=g),e++,m}function o(f,p,d,x,v,g){let m=a(f,p,d,x,v,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(f,p,d,x,v,g){let m=a(f,p,d,x,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function h(f,p){t.length>1&&t.sort(f||Mx),n.length>1&&n.sort(p||Tu),s.length>1&&s.sort(p||Tu)}function u(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function bx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ex=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ax(i,e){let t=new wx,n=Sx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new X);let r=new X,a=new Nt,o=new Nt;function c(u,f){let p=0,d=0,x=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let v=0,g=0,m=0,M=0,_=0,E=0,D=0,P=0,L=0,k=0,S=0;u.sort(Tx);let A=f===!0?Math.PI:1;for(let G=0,Z=u.length;G<Z;G++){let N=u[G],J=N.color,b=N.intensity,ee=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=J.r*b*A,d+=J.g*b*A,x+=J.b*b*A;else if(N.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(N.sh.coefficients[W],b);S++}else if(N.isDirectionalLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){let ie=N.shadow,Se=n.get(N);Se.shadowBias=ie.bias,Se.shadowNormalBias=ie.normalBias,Se.shadowRadius=ie.radius,Se.shadowMapSize=ie.mapSize,s.directionalShadow[v]=Se,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=N.shadow.matrix,E++}s.directional[v]=W,v++}else if(N.isSpotLight){let W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(J).multiplyScalar(b*A),W.distance=ee,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,s.spot[m]=W;let ie=N.shadow;if(N.map&&(s.spotLightMap[L]=N.map,L++,ie.updateMatrices(N),N.castShadow&&k++),s.spotLightMatrix[m]=ie.matrix,N.castShadow){let Se=n.get(N);Se.shadowBias=ie.bias,Se.shadowNormalBias=ie.normalBias,Se.shadowRadius=ie.radius,Se.shadowMapSize=ie.mapSize,s.spotShadow[m]=Se,s.spotShadowMap[m]=$,P++}m++}else if(N.isRectAreaLight){let W=t.get(N);W.color.copy(J).multiplyScalar(b),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=W,M++}else if(N.isPointLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*A),W.distance=N.distance,W.decay=N.decay,N.castShadow){let ie=N.shadow,Se=n.get(N);Se.shadowBias=ie.bias,Se.shadowNormalBias=ie.normalBias,Se.shadowRadius=ie.radius,Se.shadowMapSize=ie.mapSize,Se.shadowCameraNear=ie.camera.near,Se.shadowCameraFar=ie.camera.far,s.pointShadow[g]=Se,s.pointShadowMap[g]=$,s.pointShadowMatrix[g]=N.shadow.matrix,D++}s.point[g]=W,g++}else if(N.isHemisphereLight){let W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(b*A),W.groundColor.copy(N.groundColor).multiplyScalar(b*A),s.hemi[_]=W,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=We.LTC_FLOAT_1,s.rectAreaLTC2=We.LTC_FLOAT_2):(s.rectAreaLTC1=We.LTC_HALF_1,s.rectAreaLTC2=We.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=We.LTC_FLOAT_1,s.rectAreaLTC2=We.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=We.LTC_HALF_1,s.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=d,s.ambient[2]=x;let y=s.hash;(y.directionalLength!==v||y.pointLength!==g||y.spotLength!==m||y.rectAreaLength!==M||y.hemiLength!==_||y.numDirectionalShadows!==E||y.numPointShadows!==D||y.numSpotShadows!==P||y.numSpotMaps!==L||y.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+L-k,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=S,y.directionalLength=v,y.pointLength=g,y.spotLength=m,y.rectAreaLength=M,y.hemiLength=_,y.numDirectionalShadows=E,y.numPointShadows=D,y.numSpotShadows=P,y.numSpotMaps=L,y.numLightProbes=S,s.version=Ex++)}function h(u,f){let p=0,d=0,x=0,v=0,g=0,m=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){let E=u[M];if(E.isDirectionalLight){let D=s.directional[p];D.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),p++}else if(E.isSpotLight){let D=s.spot[x];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),x++}else if(E.isRectAreaLight){let D=s.rectArea[v];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let D=s.point[d];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let D=s.hemi[g];D.direction.setFromMatrixPosition(E.matrixWorld),D.direction.transformDirection(m),g++}}}return{setup:c,setupView:h,state:s}}function Ru(i,e){let t=new Ax(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Rx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Ru(i,e),t.set(r,[c])):a>=o.length?(c=new Ru(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var dc=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Ix(i,e,t){let n=new oa,s=new Le,r=new Le,a=new rn,o=new dc({depthPacking:Of}),c=new fc,h={},u=t.maxTextureSize,f={[fs]:gn,[gn]:fs,[tn]:tn},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let x=new qt;x.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let m=this.type;this.render=function(P,L,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Di),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Z=m!==Wi&&this.type===Wi,N=m===Wi&&this.type!==Wi;for(let J=0,b=P.length;J<b;J++){let ee=P[J],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let W=$.getFrameExtents();if(s.multiply(W),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,$.mapSize.y=r.y)),$.map===null||Z===!0||N===!0){let Se=this.type!==Wi?{minFilter:Tn,magFilter:Tn}:{};$.map!==null&&$.map.dispose(),$.map=new Yn(s.x,s.y,Se),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ie=$.getViewportCount();for(let Se=0;Se<ie;Se++){let be=$.getViewport(Se);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),G.viewport(a),$.updateMatrices(ee,Se),n=$.getFrustum(),E(L,k,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===Wi&&M($,k),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,y)};function M(P,L){let k=e.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Yn(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,k,p,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,k,d,v,null)}function _(P,L,k,S){let A=null,y=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(y!==void 0)A=y;else if(A=k.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let G=A.uuid,Z=L.uuid,N=h[G];N===void 0&&(N={},h[G]=N);let J=N[Z];J===void 0&&(J=A.clone(),N[Z]=J,L.addEventListener("dispose",D)),A=J}if(A.visible=L.visible,A.wireframe=L.wireframe,S===Wi?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let G=i.properties.get(A);G.light=k}return A}function E(P,L,k,S,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Wi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);let Z=e.update(P),N=P.material;if(Array.isArray(N)){let J=Z.groups;for(let b=0,ee=J.length;b<ee;b++){let $=J[b],W=N[$.materialIndex];if(W&&W.visible){let ie=_(P,W,S,A);P.onBeforeShadow(i,P,L,k,Z,ie,$),i.renderBufferDirect(k,null,Z,ie,P,$),P.onAfterShadow(i,P,L,k,Z,ie,$)}}}else if(N.visible){let J=_(P,N,S,A);P.onBeforeShadow(i,P,L,k,Z,J,null),i.renderBufferDirect(k,null,Z,J,P,null),P.onAfterShadow(i,P,L,k,Z,J,null)}}let G=P.children;for(let Z=0,N=G.length;Z<N;Z++)E(G[Z],L,k,S,A)}function D(P){P.target.removeEventListener("dispose",D);for(let k in h){let S=h[k],A=P.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function Lx(i,e,t){let n=t.isWebGL2;function s(){let Q=!1,Be=new rn,He=null,ot=new rn(0,0,0,0);return{setMask:function(et){He!==et&&!Q&&(i.colorMask(et,et,et,et),He=et)},setLocked:function(et){Q=et},setClear:function(et,wt,Rt,Gt,Vt){Vt===!0&&(et*=Gt,wt*=Gt,Rt*=Gt),Be.set(et,wt,Rt,Gt),ot.equals(Be)===!1&&(i.clearColor(et,wt,Rt,Gt),ot.copy(Be))},reset:function(){Q=!1,He=null,ot.set(-1,0,0,0)}}}function r(){let Q=!1,Be=null,He=null,ot=null;return{setTest:function(et){et?Ke(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(et){Be!==et&&!Q&&(i.depthMask(et),Be=et)},setFunc:function(et){if(He!==et){switch(et){case xf:i.depthFunc(i.NEVER);break;case yf:i.depthFunc(i.ALWAYS);break;case vf:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case _f:i.depthFunc(i.EQUAL);break;case Mf:i.depthFunc(i.GEQUAL);break;case bf:i.depthFunc(i.GREATER);break;case wf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=et}},setLocked:function(et){Q=et},setClear:function(et){ot!==et&&(i.clearDepth(et),ot=et)},reset:function(){Q=!1,Be=null,He=null,ot=null}}}function a(){let Q=!1,Be=null,He=null,ot=null,et=null,wt=null,Rt=null,Gt=null,Vt=null;return{setTest:function(Ut){Q||(Ut?Ke(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(Ut){Be!==Ut&&!Q&&(i.stencilMask(Ut),Be=Ut)},setFunc:function(Ut,$t,Dt){(He!==Ut||ot!==$t||et!==Dt)&&(i.stencilFunc(Ut,$t,Dt),He=Ut,ot=$t,et=Dt)},setOp:function(Ut,$t,Dt){(wt!==Ut||Rt!==$t||Gt!==Dt)&&(i.stencilOp(Ut,$t,Dt),wt=Ut,Rt=$t,Gt=Dt)},setLocked:function(Ut){Q=Ut},setClear:function(Ut){Vt!==Ut&&(i.clearStencil(Ut),Vt=Ut)},reset:function(){Q=!1,Be=null,He=null,ot=null,et=null,wt=null,Rt=null,Gt=null,Vt=null}}}let o=new s,c=new r,h=new a,u=new WeakMap,f=new WeakMap,p={},d={},x=new WeakMap,v=[],g=null,m=!1,M=null,_=null,E=null,D=null,P=null,L=null,k=null,S=new rt(0,0,0),A=0,y=!1,G=null,Z=null,N=null,J=null,b=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,W=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ie)[1]),$=W>=1):ie.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),$=W>=2);let Se=null,be={},he=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),we=new rn().fromArray(he),Xe=new rn().fromArray(Re);function Ve(Q,Be,He,ot){let et=new Uint8Array(4),wt=i.createTexture();i.bindTexture(Q,wt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<He;Rt++)n&&(Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY)?i.texImage3D(Be,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(Be+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return wt}let at={};at[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ke(i.DEPTH_TEST),c.setFunc(lo),Fe(!1),z(ch),Ke(i.CULL_FACE),ve(Di);function Ke(Q){p[Q]!==!0&&(i.enable(Q),p[Q]=!0)}function Oe(Q){p[Q]!==!1&&(i.disable(Q),p[Q]=!1)}function $e(Q,Be){return d[Q]!==Be?(i.bindFramebuffer(Q,Be),d[Q]=Be,n&&(Q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Be),Q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Be)),!0):!1}function Y(Q,Be){let He=v,ot=!1;if(Q)if(He=x.get(Be),He===void 0&&(He=[],x.set(Be,He)),Q.isWebGLMultipleRenderTargets){let et=Q.texture;if(He.length!==et.length||He[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Rt=et.length;wt<Rt;wt++)He[wt]=i.COLOR_ATTACHMENT0+wt;He.length=et.length,ot=!0}}else He[0]!==i.COLOR_ATTACHMENT0&&(He[0]=i.COLOR_ATTACHMENT0,ot=!0);else He[0]!==i.BACK&&(He[0]=i.BACK,ot=!0);ot&&(t.isWebGL2?i.drawBuffers(He):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(He))}function Ie(Q){return g!==Q?(i.useProgram(Q),g=Q,!0):!1}let me={[Ls]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};if(n)me[dh]=i.MIN,me[fh]=i.MAX;else{let Q=e.get("EXT_blend_minmax");Q!==null&&(me[dh]=Q.MIN_EXT,me[fh]=Q.MAX_EXT)}let Ae={[sf]:i.ZERO,[rf]:i.ONE,[af]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[df]:i.SRC_ALPHA_SATURATE,[hf]:i.DST_COLOR,[lf]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[Jl]:i.ONE_MINUS_SRC_ALPHA,[uf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[ff]:i.CONSTANT_COLOR,[pf]:i.ONE_MINUS_CONSTANT_COLOR,[mf]:i.CONSTANT_ALPHA,[gf]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(Q,Be,He,ot,et,wt,Rt,Gt,Vt,Ut){if(Q===Di){m===!0&&(Oe(i.BLEND),m=!1);return}if(m===!1&&(Ke(i.BLEND),m=!0),Q!==ef){if(Q!==M||Ut!==y){if((_!==Ls||P!==Ls)&&(i.blendEquation(i.FUNC_ADD),_=Ls,P=Ls),Ut)switch(Q){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}E=null,D=null,L=null,k=null,S.set(0,0,0),A=0,M=Q,y=Ut}return}et=et||Be,wt=wt||He,Rt=Rt||ot,(Be!==_||et!==P)&&(i.blendEquationSeparate(me[Be],me[et]),_=Be,P=et),(He!==E||ot!==D||wt!==L||Rt!==k)&&(i.blendFuncSeparate(Ae[He],Ae[ot],Ae[wt],Ae[Rt]),E=He,D=ot,L=wt,k=Rt),(Gt.equals(S)===!1||Vt!==A)&&(i.blendColor(Gt.r,Gt.g,Gt.b,Vt),S.copy(Gt),A=Vt),M=Q,y=!1}function Ue(Q,Be){Q.side===tn?Oe(i.CULL_FACE):Ke(i.CULL_FACE);let He=Q.side===gn;Be&&(He=!He),Fe(He),Q.blending===hs&&Q.transparent===!1?ve(Di):ve(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),c.setFunc(Q.depthFunc),c.setTest(Q.depthTest),c.setMask(Q.depthWrite),o.setMask(Q.colorWrite);let ot=Q.stencilWrite;h.setTest(ot),ot&&(h.setMask(Q.stencilWriteMask),h.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),h.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),te(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Ke(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(Q){G!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),G=Q)}function z(Q){Q!==jd?(Ke(i.CULL_FACE),Q!==Z&&(Q===ch?i.cullFace(i.BACK):Q===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),Z=Q}function R(Q){Q!==N&&($&&i.lineWidth(Q),N=Q)}function te(Q,Be,He){Q?(Ke(i.POLYGON_OFFSET_FILL),(J!==Be||b!==He)&&(i.polygonOffset(Be,He),J=Be,b=He)):Oe(i.POLYGON_OFFSET_FILL)}function xe(Q){Q?Ke(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function _e(Q){Q===void 0&&(Q=i.TEXTURE0+ee-1),Se!==Q&&(i.activeTexture(Q),Se=Q)}function Te(Q,Be,He){He===void 0&&(Se===null?He=i.TEXTURE0+ee-1:He=Se);let ot=be[He];ot===void 0&&(ot={type:void 0,texture:void 0},be[He]=ot),(ot.type!==Q||ot.texture!==Be)&&(Se!==He&&(i.activeTexture(He),Se=He),i.bindTexture(Q,Be||at[Q]),ot.type=Q,ot.texture=Be)}function tt(){let Q=be[Se];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ze(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ze(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function je(){try{i.texImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Qe(Q){we.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),we.copy(Q))}function dt(Q){Xe.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Xe.copy(Q))}function zt(Q,Be){let He=f.get(Be);He===void 0&&(He=new WeakMap,f.set(Be,He));let ot=He.get(Q);ot===void 0&&(ot=i.getUniformBlockIndex(Be,Q.name),He.set(Q,ot))}function pt(Q,Be){let ot=f.get(Be).get(Q);u.get(Be)!==ot&&(i.uniformBlockBinding(Be,ot,Q.__bindingPointIndex),u.set(Be,ot))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Se=null,be={},d={},x=new WeakMap,v=[],g=null,m=!1,M=null,_=null,E=null,D=null,P=null,L=null,k=null,S=new rt(0,0,0),A=0,y=!1,G=null,Z=null,N=null,J=null,b=null,we.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Ke,disable:Oe,bindFramebuffer:$e,drawBuffers:Y,useProgram:Ie,setBlending:ve,setMaterial:Ue,setFlipSided:Fe,setCullFace:z,setLineWidth:R,setPolygonOffset:te,setScissorTest:xe,activeTexture:_e,bindTexture:Te,unbindTexture:tt,compressedTexImage2D:ze,compressedTexImage3D:Ze,texImage2D:lt,texImage3D:je,updateUBOMapping:zt,uniformBlockBinding:pt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:it,texSubImage3D:ut,compressedTexSubImage2D:ye,compressedTexSubImage3D:gt,scissor:Qe,viewport:dt,reset:De}}function Dx(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,R){return d?new OffscreenCanvas(z,R):xo("canvas")}function v(z,R,te,xe){let _e=1;if((z.width>xe||z.height>xe)&&(_e=xe/Math.max(z.width,z.height)),_e<1||R===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){let Te=R?tc:Math.floor,tt=Te(_e*z.width),ze=Te(_e*z.height);f===void 0&&(f=x(tt,ze));let Ze=te?x(tt,ze):f;return Ze.width=tt,Ze.height=ze,Ze.getContext("2d").drawImage(z,0,0,tt,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+tt+"x"+ze+")."),Ze}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function g(z){return Xh(z.width)&&Xh(z.height)}function m(z){return o?!1:z.wrapS!==bi||z.wrapT!==bi||z.minFilter!==Tn&&z.minFilter!==di}function M(z,R){return z.generateMipmaps&&R&&z.minFilter!==Tn&&z.minFilter!==di}function _(z){i.generateMipmap(z)}function E(z,R,te,xe,_e=!1){if(o===!1)return R;if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Te=R;if(R===i.RED&&(te===i.FLOAT&&(Te=i.R32F),te===i.HALF_FLOAT&&(Te=i.R16F),te===i.UNSIGNED_BYTE&&(Te=i.R8)),R===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(Te=i.R8UI),te===i.UNSIGNED_SHORT&&(Te=i.R16UI),te===i.UNSIGNED_INT&&(Te=i.R32UI),te===i.BYTE&&(Te=i.R8I),te===i.SHORT&&(Te=i.R16I),te===i.INT&&(Te=i.R32I)),R===i.RG&&(te===i.FLOAT&&(Te=i.RG32F),te===i.HALF_FLOAT&&(Te=i.RG16F),te===i.UNSIGNED_BYTE&&(Te=i.RG8)),R===i.RGBA){let tt=_e?uo:Ht.getTransfer(xe);te===i.FLOAT&&(Te=i.RGBA32F),te===i.HALF_FLOAT&&(Te=i.RGBA16F),te===i.UNSIGNED_BYTE&&(Te=tt===jt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function D(z,R,te){return M(z,te)===!0||z.isFramebufferTexture&&z.minFilter!==Tn&&z.minFilter!==di?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function P(z){return z===Tn||z===ph||z===ul?i.NEAREST:i.LINEAR}function L(z){let R=z.target;R.removeEventListener("dispose",L),S(R),R.isVideoTexture&&u.delete(R)}function k(z){let R=z.target;R.removeEventListener("dispose",k),y(R)}function S(z){let R=n.get(z);if(R.__webglInit===void 0)return;let te=z.source,xe=p.get(te);if(xe){let _e=xe[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(z),Object.keys(xe).length===0&&p.delete(te)}n.remove(z)}function A(z){let R=n.get(z);i.deleteTexture(R.__webglTexture);let te=z.source,xe=p.get(te);delete xe[R.__cacheKey],a.memory.textures--}function y(z){let R=z.texture,te=n.get(z),xe=n.get(R);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(te.__webglFramebuffer[_e]))for(let Te=0;Te<te.__webglFramebuffer[_e].length;Te++)i.deleteFramebuffer(te.__webglFramebuffer[_e][Te]);else i.deleteFramebuffer(te.__webglFramebuffer[_e]);te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer[_e])}else{if(Array.isArray(te.__webglFramebuffer))for(let _e=0;_e<te.__webglFramebuffer.length;_e++)i.deleteFramebuffer(te.__webglFramebuffer[_e]);else i.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&i.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let _e=0;_e<te.__webglColorRenderbuffer.length;_e++)te.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(te.__webglColorRenderbuffer[_e]);te.__webglDepthRenderbuffer&&i.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let _e=0,Te=R.length;_e<Te;_e++){let tt=n.get(R[_e]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(R[_e])}n.remove(R),n.remove(z)}let G=0;function Z(){G=0}function N(){let z=G;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),G+=1,z}function J(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function b(z,R){let te=n.get(z);if(z.isVideoTexture&&Ue(z),z.isRenderTargetTexture===!1&&z.version>0&&te.__version!==z.version){let xe=z.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(te,z,R);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+R)}function ee(z,R){let te=n.get(z);if(z.version>0&&te.__version!==z.version){we(te,z,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+R)}function $(z,R){let te=n.get(z);if(z.version>0&&te.__version!==z.version){we(te,z,R);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+R)}function W(z,R){let te=n.get(z);if(z.version>0&&te.__version!==z.version){Xe(te,z,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+R)}let ie={[ia]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[jl]:i.MIRRORED_REPEAT},Se={[Tn]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[ul]:i.NEAREST_MIPMAP_LINEAR,[di]:i.LINEAR,[Af]:i.LINEAR_MIPMAP_NEAREST,[sa]:i.LINEAR_MIPMAP_LINEAR},be={[Ff]:i.NEVER,[Xf]:i.ALWAYS,[Bf]:i.LESS,[ed]:i.LEQUAL,[Hf]:i.EQUAL,[Wf]:i.GEQUAL,[Gf]:i.GREATER,[Vf]:i.NOTEQUAL};function he(z,R,te){if(te?(i.texParameteri(z,i.TEXTURE_WRAP_S,ie[R.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ie[R.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ie[R.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,Se[R.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,Se[R.minFilter])):(i.texParameteri(z,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(z,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==bi||R.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(z,i.TEXTURE_MAG_FILTER,P(R.magFilter)),i.texParameteri(z,i.TEXTURE_MIN_FILTER,P(R.minFilter)),R.minFilter!==Tn&&R.minFilter!==di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,be[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===Tn||R.minFilter!==ul&&R.minFilter!==sa||R.type===cs&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(z,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function Re(z,R){let te=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",L));let xe=R.source,_e=p.get(xe);_e===void 0&&(_e={},p.set(xe,_e));let Te=J(R);if(Te!==z.__cacheKey){_e[Te]===void 0&&(_e[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),_e[Te].usedTimes++;let tt=_e[z.__cacheKey];tt!==void 0&&(_e[z.__cacheKey].usedTimes--,tt.usedTimes===0&&A(R)),z.__cacheKey=Te,z.__webglTexture=_e[Te].texture}return te}function we(z,R,te){let xe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(xe=i.TEXTURE_3D);let _e=Re(z,R),Te=R.source;t.bindTexture(xe,z.__webglTexture,i.TEXTURE0+te);let tt=n.get(Te);if(Te.version!==tt.__version||_e===!0){t.activeTexture(i.TEXTURE0+te);let ze=Ht.getPrimaries(Ht.workingColorSpace),Ze=R.colorSpace===fi?null:Ht.getPrimaries(R.colorSpace),it=R.colorSpace===fi||ze===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ut=m(R)&&g(R.image)===!1,ye=v(R.image,ut,!1,s.maxTextureSize);ye=Fe(R,ye);let gt=g(ye)||o,ct=r.convert(R.format,R.colorSpace),ht=r.convert(R.type),lt=E(R.internalFormat,ct,ht,R.colorSpace,R.isVideoTexture);he(xe,R,gt);let je,Qe=R.mipmaps,dt=o&&R.isVideoTexture!==!0&&lt!==ju,zt=tt.__version===void 0||_e===!0,pt=D(R,ye,gt);if(R.isDepthTexture)lt=i.DEPTH_COMPONENT,o?R.type===cs?lt=i.DEPTH_COMPONENT32F:R.type===ls?lt=i.DEPTH_COMPONENT24:R.type===Us?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:R.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===ks&&lt===i.DEPTH_COMPONENT&&R.type!==qc&&R.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=ls,ht=r.convert(R.type)),R.format===vr&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,R.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Us,ht=r.convert(R.type))),zt&&(dt?t.texStorage2D(i.TEXTURE_2D,1,lt,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,lt,ye.width,ye.height,0,ct,ht,null));else if(R.isDataTexture)if(Qe.length>0&&gt){dt&&zt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,Qe[0].width,Qe[0].height);for(let De=0,Q=Qe.length;De<Q;De++)je=Qe[De],dt?t.texSubImage2D(i.TEXTURE_2D,De,0,0,je.width,je.height,ct,ht,je.data):t.texImage2D(i.TEXTURE_2D,De,lt,je.width,je.height,0,ct,ht,je.data);R.generateMipmaps=!1}else dt?(zt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,ye.width,ye.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,ct,ht,ye.data)):t.texImage2D(i.TEXTURE_2D,0,lt,ye.width,ye.height,0,ct,ht,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){dt&&zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,lt,Qe[0].width,Qe[0].height,ye.depth);for(let De=0,Q=Qe.length;De<Q;De++)je=Qe[De],R.format!==ai?ct!==null?dt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,0,je.width,je.height,ye.depth,ct,je.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,De,lt,je.width,je.height,ye.depth,0,je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,0,je.width,je.height,ye.depth,ct,ht,je.data):t.texImage3D(i.TEXTURE_2D_ARRAY,De,lt,je.width,je.height,ye.depth,0,ct,ht,je.data)}else{dt&&zt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,Qe[0].width,Qe[0].height);for(let De=0,Q=Qe.length;De<Q;De++)je=Qe[De],R.format!==ai?ct!==null?dt?t.compressedTexSubImage2D(i.TEXTURE_2D,De,0,0,je.width,je.height,ct,je.data):t.compressedTexImage2D(i.TEXTURE_2D,De,lt,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(i.TEXTURE_2D,De,0,0,je.width,je.height,ct,ht,je.data):t.texImage2D(i.TEXTURE_2D,De,lt,je.width,je.height,0,ct,ht,je.data)}else if(R.isDataArrayTexture)dt?(zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,lt,ye.width,ye.height,ye.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ct,ht,ye.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,ye.width,ye.height,ye.depth,0,ct,ht,ye.data);else if(R.isData3DTexture)dt?(zt&&t.texStorage3D(i.TEXTURE_3D,pt,lt,ye.width,ye.height,ye.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ct,ht,ye.data)):t.texImage3D(i.TEXTURE_3D,0,lt,ye.width,ye.height,ye.depth,0,ct,ht,ye.data);else if(R.isFramebufferTexture){if(zt)if(dt)t.texStorage2D(i.TEXTURE_2D,pt,lt,ye.width,ye.height);else{let De=ye.width,Q=ye.height;for(let Be=0;Be<pt;Be++)t.texImage2D(i.TEXTURE_2D,Be,lt,De,Q,0,ct,ht,null),De>>=1,Q>>=1}}else if(Qe.length>0&&gt){dt&&zt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,Qe[0].width,Qe[0].height);for(let De=0,Q=Qe.length;De<Q;De++)je=Qe[De],dt?t.texSubImage2D(i.TEXTURE_2D,De,0,0,ct,ht,je):t.texImage2D(i.TEXTURE_2D,De,lt,ct,ht,je);R.generateMipmaps=!1}else dt?(zt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,ye.width,ye.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,ht,ye)):t.texImage2D(i.TEXTURE_2D,0,lt,ct,ht,ye);M(R,gt)&&_(xe),tt.__version=Te.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Xe(z,R,te){if(R.image.length!==6)return;let xe=Re(z,R),_e=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+te);let Te=n.get(_e);if(_e.version!==Te.__version||xe===!0){t.activeTexture(i.TEXTURE0+te);let tt=Ht.getPrimaries(Ht.workingColorSpace),ze=R.colorSpace===fi?null:Ht.getPrimaries(R.colorSpace),Ze=R.colorSpace===fi||tt===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let it=R.isCompressedTexture||R.image[0].isCompressedTexture,ut=R.image[0]&&R.image[0].isDataTexture,ye=[];for(let De=0;De<6;De++)!it&&!ut?ye[De]=v(R.image[De],!1,!0,s.maxCubemapSize):ye[De]=ut?R.image[De].image:R.image[De],ye[De]=Fe(R,ye[De]);let gt=ye[0],ct=g(gt)||o,ht=r.convert(R.format,R.colorSpace),lt=r.convert(R.type),je=E(R.internalFormat,ht,lt,R.colorSpace),Qe=o&&R.isVideoTexture!==!0,dt=Te.__version===void 0||xe===!0,zt=D(R,gt,ct);he(i.TEXTURE_CUBE_MAP,R,ct);let pt;if(it){Qe&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,zt,je,gt.width,gt.height);for(let De=0;De<6;De++){pt=ye[De].mipmaps;for(let Q=0;Q<pt.length;Q++){let Be=pt[Q];R.format!==ai?ht!==null?Qe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q,0,0,Be.width,Be.height,ht,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q,je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q,0,0,Be.width,Be.height,ht,lt,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q,je,Be.width,Be.height,0,ht,lt,Be.data)}}}else{pt=R.mipmaps,Qe&&dt&&(pt.length>0&&zt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,zt,je,ye[0].width,ye[0].height));for(let De=0;De<6;De++)if(ut){Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,ye[De].width,ye[De].height,ht,lt,ye[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,je,ye[De].width,ye[De].height,0,ht,lt,ye[De].data);for(let Q=0;Q<pt.length;Q++){let He=pt[Q].image[De].image;Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q+1,0,0,He.width,He.height,ht,lt,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q+1,je,He.width,He.height,0,ht,lt,He.data)}}else{Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,ht,lt,ye[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,je,ht,lt,ye[De]);for(let Q=0;Q<pt.length;Q++){let Be=pt[Q];Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q+1,0,0,ht,lt,Be.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Q+1,je,ht,lt,Be.image[De])}}}M(R,ct)&&_(i.TEXTURE_CUBE_MAP),Te.__version=_e.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ve(z,R,te,xe,_e,Te){let tt=r.convert(te.format,te.colorSpace),ze=r.convert(te.type),Ze=E(te.internalFormat,tt,ze,te.colorSpace);if(!n.get(R).__hasExternalTextures){let ut=Math.max(1,R.width>>Te),ye=Math.max(1,R.height>>Te);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Te,Ze,ut,ye,R.depth,0,tt,ze,null):t.texImage2D(_e,Te,Ze,ut,ye,0,tt,ze,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),ve(R)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,_e,n.get(te).__webglTexture,0,Ae(R)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,_e,n.get(te).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(z,R,te){if(i.bindRenderbuffer(i.RENDERBUFFER,z),R.depthBuffer&&!R.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(te||ve(R)){let _e=R.depthTexture;_e&&_e.isDepthTexture&&(_e.type===cs?xe=i.DEPTH_COMPONENT32F:_e.type===ls&&(xe=i.DEPTH_COMPONENT24));let Te=Ae(R);ve(R)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,xe,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,xe,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,z)}else if(R.depthBuffer&&R.stencilBuffer){let xe=Ae(R);te&&ve(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,R.width,R.height):ve(R)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,z)}else{let xe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let _e=0;_e<xe.length;_e++){let Te=xe[_e],tt=r.convert(Te.format,Te.colorSpace),ze=r.convert(Te.type),Ze=E(Te.internalFormat,tt,ze,Te.colorSpace),it=Ae(R);te&&ve(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ze,R.width,R.height):ve(R)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Ze,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ze,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),b(R.depthTexture,0);let xe=n.get(R.depthTexture).__webglTexture,_e=Ae(R);if(R.depthTexture.format===ks)ve(R)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(R.depthTexture.format===vr)ve(R)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Oe(z){let R=n.get(z),te=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Ke(R.__webglFramebuffer,z)}else if(te){R.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[xe]),R.__webglDepthbuffer[xe]=i.createRenderbuffer(),at(R.__webglDepthbuffer[xe],z,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),at(R.__webglDepthbuffer,z,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(z,R,te){let xe=n.get(z);R!==void 0&&Ve(xe.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Oe(z)}function Y(z){let R=z.texture,te=n.get(z),xe=n.get(R);z.addEventListener("dispose",k),z.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=R.version,a.memory.textures++);let _e=z.isWebGLCubeRenderTarget===!0,Te=z.isWebGLMultipleRenderTargets===!0,tt=g(z)||o;if(_e){te.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(o&&R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer[ze]=[];for(let Ze=0;Ze<R.mipmaps.length;Ze++)te.__webglFramebuffer[ze][Ze]=i.createFramebuffer()}else te.__webglFramebuffer[ze]=i.createFramebuffer()}else{if(o&&R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer=[];for(let ze=0;ze<R.mipmaps.length;ze++)te.__webglFramebuffer[ze]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Te)if(s.drawBuffers){let ze=z.texture;for(let Ze=0,it=ze.length;Ze<it;Ze++){let ut=n.get(ze[Ze]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&z.samples>0&&ve(z)===!1){let ze=Te?R:[R];te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ze=0;Ze<ze.length;Ze++){let it=ze[Ze];te.__webglColorRenderbuffer[Ze]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Ze]);let ut=r.convert(it.format,it.colorSpace),ye=r.convert(it.type),gt=E(it.internalFormat,ut,ye,it.colorSpace,z.isXRRenderTarget===!0),ct=Ae(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,gt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,te.__webglColorRenderbuffer[Ze])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),at(te.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),he(i.TEXTURE_CUBE_MAP,R,tt);for(let ze=0;ze<6;ze++)if(o&&R.mipmaps&&R.mipmaps.length>0)for(let Ze=0;Ze<R.mipmaps.length;Ze++)Ve(te.__webglFramebuffer[ze][Ze],z,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ze);else Ve(te.__webglFramebuffer[ze],z,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);M(R,tt)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){let ze=z.texture;for(let Ze=0,it=ze.length;Ze<it;Ze++){let ut=ze[Ze],ye=n.get(ut);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),he(i.TEXTURE_2D,ut,tt),Ve(te.__webglFramebuffer,z,ut,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,0),M(ut,tt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ze=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(o?ze=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ze,xe.__webglTexture),he(ze,R,tt),o&&R.mipmaps&&R.mipmaps.length>0)for(let Ze=0;Ze<R.mipmaps.length;Ze++)Ve(te.__webglFramebuffer[Ze],z,R,i.COLOR_ATTACHMENT0,ze,Ze);else Ve(te.__webglFramebuffer,z,R,i.COLOR_ATTACHMENT0,ze,0);M(R,tt)&&_(ze),t.unbindTexture()}z.depthBuffer&&Oe(z)}function Ie(z){let R=g(z)||o,te=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let xe=0,_e=te.length;xe<_e;xe++){let Te=te[xe];if(M(Te,R)){let tt=z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ze=n.get(Te).__webglTexture;t.bindTexture(tt,ze),_(tt),t.unbindTexture()}}}function me(z){if(o&&z.samples>0&&ve(z)===!1){let R=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],te=z.width,xe=z.height,_e=i.COLOR_BUFFER_BIT,Te=[],tt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(z),Ze=z.isWebGLMultipleRenderTargets===!0;if(Ze)for(let it=0;it<R.length;it++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let it=0;it<R.length;it++){Te.push(i.COLOR_ATTACHMENT0+it),z.depthBuffer&&Te.push(tt);let ut=ze.__ignoreDepthValues!==void 0?ze.__ignoreDepthValues:!1;if(ut===!1&&(z.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ze&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[it]),ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[tt])),Ze){let ye=n.get(R[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,te,xe,0,0,te,xe,_e,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ze)for(let it=0;it<R.length;it++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,ze.__webglColorRenderbuffer[it]);let ut=n.get(R[it]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,ut,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}}function Ae(z){return Math.min(s.maxSamples,z.samples)}function ve(z){let R=n.get(z);return o&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ue(z){let R=a.render.frame;u.get(z)!==R&&(u.set(z,R),z.update())}function Fe(z,R){let te=z.colorSpace,xe=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===ec||te!==Ji&&te!==fi&&(Ht.getTransfer(te)===jt?o===!1?e.has("EXT_sRGB")===!0&&xe===ai?(z.format=ec,z.minFilter=di,z.generateMipmaps=!1):R=yo.sRGBToLinear(R):(xe!==ai||_e!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),R}this.allocateTextureUnit=N,this.resetTextureUnits=Z,this.setTexture2D=b,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ve}function zx(i,e,t){let n=t.isWebGL2;function s(r,a=fi){let o,c=Ht.getTransfer(a);if(r===us)return i.UNSIGNED_BYTE;if(r===Yu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Zu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rf)return i.BYTE;if(r===Cf)return i.SHORT;if(r===qc)return i.UNSIGNED_SHORT;if(r===qu)return i.INT;if(r===ls)return i.UNSIGNED_INT;if(r===cs)return i.FLOAT;if(r===wi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pf)return i.ALPHA;if(r===ai)return i.RGBA;if(r===If)return i.LUMINANCE;if(r===Lf)return i.LUMINANCE_ALPHA;if(r===ks)return i.DEPTH_COMPONENT;if(r===vr)return i.DEPTH_STENCIL;if(r===ec)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Df)return i.RED;if(r===Ju)return i.RED_INTEGER;if(r===zf)return i.RG;if(r===Ku)return i.RG_INTEGER;if(r===$u)return i.RGBA_INTEGER;if(r===dl||r===fl||r===pl||r===ml)if(c===jt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===dl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===dl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ml)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===gh||r===xh||r===yh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===mh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ju)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vh||r===_h)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===vh)return c===jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===_h)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mh||r===bh||r===wh||r===Sh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Ih||r===Lh||r===Dh||r===zh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Mh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zh)return c===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gl||r===Uh||r===kh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===gl)return c===jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uf||r===Oh||r===Nh||r===Fh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===gl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var pc=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ux={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,x=.005;h.inputState.pinching&&p>d+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=d-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mc=class extends ps{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,p=null,d=null,x=null,v=t.getContextAttributes(),g=null,m=null,M=[],_=[],E=new Le,D=null,P=new An;P.layers.enable(1),P.viewport=new rn;let L=new An;L.layers.enable(2),L.viewport=new rn;let k=[P,L],S=new pc;S.layers.enable(1),S.layers.enable(2);let A=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Re=M[he];return Re===void 0&&(Re=new ea,M[he]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(he){let Re=M[he];return Re===void 0&&(Re=new ea,M[he]=Re),Re.getGripSpace()},this.getHand=function(he){let Re=M[he];return Re===void 0&&(Re=new ea,M[he]=Re),Re.getHandSpace()};function G(he){let Re=_.indexOf(he.inputSource);if(Re===-1)return;let we=M[Re];we!==void 0&&(we.update(he.inputSource,he.frame,h||a),we.dispatchEvent({type:he.type,data:he.inputSource}))}function Z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",N);for(let he=0;he<M.length;he++){let Re=_[he];Re!==null&&(_[he]=null,M[he].disconnect(Re))}A=null,y=null,e.setRenderTarget(g),d=null,p=null,f=null,s=null,m=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){r=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(he){h=he},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(he){if(s=he,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Re={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Yn(d.framebufferWidth,d.framebufferHeight,{format:ai,type:us,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Re=null,we=null,Xe=null;v.depth&&(Xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=v.stencil?vr:ks,we=v.stencil?Us:ls);let Ve={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Yn(p.textureWidth,p.textureHeight,{format:ai,type:us,depthTexture:new Eo(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let at=e.properties.get(m);at.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(he){for(let Re=0;Re<he.removed.length;Re++){let we=he.removed[Re],Xe=_.indexOf(we);Xe>=0&&(_[Xe]=null,M[Xe].disconnect(we))}for(let Re=0;Re<he.added.length;Re++){let we=he.added[Re],Xe=_.indexOf(we);if(Xe===-1){for(let at=0;at<M.length;at++)if(at>=_.length){_.push(we),Xe=at;break}else if(_[at]===null){_[at]=we,Xe=at;break}if(Xe===-1)break}let Ve=M[Xe];Ve&&Ve.connect(we)}}let J=new X,b=new X;function ee(he,Re,we){J.setFromMatrixPosition(Re.matrixWorld),b.setFromMatrixPosition(we.matrixWorld);let Xe=J.distanceTo(b),Ve=Re.projectionMatrix.elements,at=we.projectionMatrix.elements,Ke=Ve[14]/(Ve[10]-1),Oe=Ve[14]/(Ve[10]+1),$e=(Ve[9]+1)/Ve[5],Y=(Ve[9]-1)/Ve[5],Ie=(Ve[8]-1)/Ve[0],me=(at[8]+1)/at[0],Ae=Ke*Ie,ve=Ke*me,Ue=Xe/(-Ie+me),Fe=Ue*-Ie;Re.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Fe),he.translateZ(Ue),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();let z=Ke+Ue,R=Oe+Ue,te=Ae-Fe,xe=ve+(Xe-Fe),_e=$e*Oe/R*z,Te=Y*Oe/R*z;he.projectionMatrix.makePerspective(te,xe,_e,Te,z,R),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}function $(he,Re){Re===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Re.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(s===null)return;S.near=L.near=P.near=he.near,S.far=L.far=P.far=he.far,(A!==S.near||y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,y=S.far);let Re=he.parent,we=S.cameras;$(S,Re);for(let Xe=0;Xe<we.length;Xe++)$(we[Xe],Re);we.length===2?ee(S,P,L):S.projectionMatrix.copy(P.projectionMatrix),W(he,S,Re)};function W(he,Re,we){we===null?he.matrix.copy(Re.matrixWorld):(he.matrix.copy(we.matrixWorld),he.matrix.invert(),he.matrix.multiply(Re.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Re.projectionMatrix),he.projectionMatrixInverse.copy(Re.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=go*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(he){c=he,p!==null&&(p.fixedFoveation=he),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=he)};let ie=null;function Se(he,Re){if(u=Re.getViewerPose(h||a),x=Re,u!==null){let we=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Xe=!1;we.length!==S.cameras.length&&(S.cameras.length=0,Xe=!0);for(let Ve=0;Ve<we.length;Ve++){let at=we[Ve],Ke=null;if(d!==null)Ke=d.getViewport(at);else{let $e=f.getViewSubImage(p,at);Ke=$e.viewport,Ve===0&&(e.setRenderTargetTextures(m,$e.colorTexture,p.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(m))}let Oe=k[Ve];Oe===void 0&&(Oe=new An,Oe.layers.enable(Ve),Oe.viewport=new rn,k[Ve]=Oe),Oe.matrix.fromArray(at.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(at.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ve===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Xe===!0&&S.cameras.push(Oe)}}for(let we=0;we<M.length;we++){let Xe=_[we],Ve=M[we];Xe!==null&&Ve!==void 0&&Ve.update(Xe,Re,h||a)}ie&&ie(he,Re),Re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Re}),x=null}let be=new sd;be.setAnimationLoop(Se),this.setAnimationLoop=function(he){ie=he},this.dispose=function(){}}};function kx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,id(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&d(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,M,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===gn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===gn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let E=_.program;n.uniformBlockBinding(M,E)}function h(M,_){let E=s[M.id];E===void 0&&(x(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",g));let D=_.program;n.updateUBOMapping(M,D);let P=e.render.frame;r[M.id]!==P&&(p(M),r[M.id]=P)}function u(M){let _=f();M.__bindingPointIndex=_;let E=i.createBuffer(),D=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let _=s[M.id],E=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,L=E.length;P<L;P++){let k=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,A=k.length;S<A;S++){let y=k[S];if(d(y,P,S,D)===!0){let G=y.__offset,Z=Array.isArray(y.value)?y.value:[y.value],N=0;for(let J=0;J<Z.length;J++){let b=Z[J],ee=v(b);typeof b=="number"||typeof b=="boolean"?(y.__data[0]=b,i.bufferSubData(i.UNIFORM_BUFFER,G+N,y.__data)):b.isMatrix3?(y.__data[0]=b.elements[0],y.__data[1]=b.elements[1],y.__data[2]=b.elements[2],y.__data[3]=0,y.__data[4]=b.elements[3],y.__data[5]=b.elements[4],y.__data[6]=b.elements[5],y.__data[7]=0,y.__data[8]=b.elements[6],y.__data[9]=b.elements[7],y.__data[10]=b.elements[8],y.__data[11]=0):(b.toArray(y.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,E,D){let P=M.value,L=_+"_"+E;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{let k=D[L];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return D[L]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function x(M){let _=M.uniforms,E=0,D=16;for(let L=0,k=_.length;L<k;L++){let S=Array.isArray(_[L])?_[L]:[_[L]];for(let A=0,y=S.length;A<y;A++){let G=S[A],Z=Array.isArray(G.value)?G.value:[G.value];for(let N=0,J=Z.length;N<J;N++){let b=Z[N],ee=v(b),$=E%D;$!==0&&D-$<ee.boundary&&(E+=D-$),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=ee.storage}}}let P=E%D;return P>0&&(E+=D-P),M.__size=E,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:h,dispose:m}}var Ns=class{constructor(e={}){let{canvas:t=Yf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let d=new Uint32Array(4),x=new Int32Array(4),v=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;let _=this,E=!1,D=0,P=0,L=null,k=-1,S=null,A=new rn,y=new rn,G=null,Z=new rt(0),N=0,J=t.width,b=t.height,ee=1,$=null,W=null,ie=new rn(0,0,J,b),Se=new rn(0,0,J,b),be=!1,he=new oa,Re=!1,we=!1,Xe=null,Ve=new Nt,at=new Le,Ke=new X,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return L===null?ee:1}let Y=n;function Ie(O,ne){for(let re=0;re<O.length;re++){let oe=O[re],ae=t.getContext(oe,ne);if(ae!==null)return ae}return null}try{let O={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Be,!1),Y===null){let ne=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ne.shift(),Y=Ie(ne,O),Y===null)throw Ie(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let me,Ae,ve,Ue,Fe,z,R,te,xe,_e,Te,tt,ze,Ze,it,ut,ye,gt,ct,ht,lt,je,Qe,dt;function zt(){me=new ng(Y),Ae=new Km(Y,me,e),me.init(Ae),je=new zx(Y,me,Ae),ve=new Lx(Y,me,Ae),Ue=new rg(Y),Fe=new _x,z=new Dx(Y,me,ve,Fe,Ae,je,Ue),R=new jm(_),te=new tg(_),xe=new f0(Y,Ae),Qe=new Zm(Y,me,xe,Ae),_e=new ig(Y,xe,Ue,Qe),Te=new cg(Y,_e,xe,Ue),ct=new lg(Y,Ae,z),ut=new $m(Fe),tt=new vx(_,R,te,me,Ae,Qe,ut),ze=new kx(_,Fe),Ze=new bx,it=new Rx(me,Ae),gt=new Ym(_,R,te,ve,Te,p,c),ye=new Ix(_,Te,Ae),dt=new Ox(Y,Ue,Ae,ve),ht=new Jm(Y,me,Ue,Ae),lt=new sg(Y,me,Ue,Ae),Ue.programs=tt.programs,_.capabilities=Ae,_.extensions=me,_.properties=Fe,_.renderLists=Ze,_.shadowMap=ye,_.state=ve,_.info=Ue}zt();let pt=new mc(_,Y);this.xr=pt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let O=me.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=me.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(O){O!==void 0&&(ee=O,this.setSize(J,b,!1))},this.getSize=function(O){return O.set(J,b)},this.setSize=function(O,ne,re=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=O,b=ne,t.width=Math.floor(O*ee),t.height=Math.floor(ne*ee),re===!0&&(t.style.width=O+"px",t.style.height=ne+"px"),this.setViewport(0,0,O,ne)},this.getDrawingBufferSize=function(O){return O.set(J*ee,b*ee).floor()},this.setDrawingBufferSize=function(O,ne,re){J=O,b=ne,ee=re,t.width=Math.floor(O*re),t.height=Math.floor(ne*re),this.setViewport(0,0,O,ne)},this.getCurrentViewport=function(O){return O.copy(A)},this.getViewport=function(O){return O.copy(ie)},this.setViewport=function(O,ne,re,oe){O.isVector4?ie.set(O.x,O.y,O.z,O.w):ie.set(O,ne,re,oe),ve.viewport(A.copy(ie).multiplyScalar(ee).floor())},this.getScissor=function(O){return O.copy(Se)},this.setScissor=function(O,ne,re,oe){O.isVector4?Se.set(O.x,O.y,O.z,O.w):Se.set(O,ne,re,oe),ve.scissor(y.copy(Se).multiplyScalar(ee).floor())},this.getScissorTest=function(){return be},this.setScissorTest=function(O){ve.setScissorTest(be=O)},this.setOpaqueSort=function(O){$=O},this.setTransparentSort=function(O){W=O},this.getClearColor=function(O){return O.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(O=!0,ne=!0,re=!0){let oe=0;if(O){let ae=!1;if(L!==null){let Ge=L.texture.format;ae=Ge===$u||Ge===Ku||Ge===Ju}if(ae){let Ge=L.texture.type,I=Ge===us||Ge===ls||Ge===qc||Ge===Us||Ge===Yu||Ge===Zu,H=gt.getClearColor(),K=gt.getClearAlpha(),Ee=H.r,Ce=H.g,C=H.b;I?(d[0]=Ee,d[1]=Ce,d[2]=C,d[3]=K,Y.clearBufferuiv(Y.COLOR,0,d)):(x[0]=Ee,x[1]=Ce,x[2]=C,x[3]=K,Y.clearBufferiv(Y.COLOR,0,x))}else oe|=Y.COLOR_BUFFER_BIT}ne&&(oe|=Y.DEPTH_BUFFER_BIT),re&&(oe|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Ze.dispose(),it.dispose(),Fe.dispose(),R.dispose(),te.dispose(),Te.dispose(),Qe.dispose(),dt.dispose(),tt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Vt),pt.removeEventListener("sessionend",Ut),Xe&&(Xe.dispose(),Xe=null),$t.stop()};function De(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let O=Ue.autoReset,ne=ye.enabled,re=ye.autoUpdate,oe=ye.needsUpdate,ae=ye.type;zt(),Ue.autoReset=O,ye.enabled=ne,ye.autoUpdate=re,ye.needsUpdate=oe,ye.type=ae}function Be(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function He(O){let ne=O.target;ne.removeEventListener("dispose",He),ot(ne)}function ot(O){et(O),Fe.remove(O)}function et(O){let ne=Fe.get(O).programs;ne!==void 0&&(ne.forEach(function(re){tt.releaseProgram(re)}),O.isShaderMaterial&&tt.releaseShaderCache(O))}this.renderBufferDirect=function(O,ne,re,oe,ae,Ge){ne===null&&(ne=Oe);let I=ae.isMesh&&ae.matrixWorld.determinant()<0,H=Wt(O,ne,re,oe,ae);ve.setMaterial(oe,I);let K=re.index,Ee=1;if(oe.wireframe===!0){if(K=_e.getWireframeAttribute(re),K===void 0)return;Ee=2}let Ce=re.drawRange,C=re.attributes.position,q=Ce.start*Ee,se=(Ce.start+Ce.count)*Ee;Ge!==null&&(q=Math.max(q,Ge.start*Ee),se=Math.min(se,(Ge.start+Ge.count)*Ee)),K!==null?(q=Math.max(q,0),se=Math.min(se,K.count)):C!=null&&(q=Math.max(q,0),se=Math.min(se,C.count));let j=se-q;if(j<0||j===1/0)return;Qe.setup(ae,oe,H,re,K);let Me,pe=ht;if(K!==null&&(Me=xe.get(K),pe=lt,pe.setIndex(Me)),ae.isMesh)oe.wireframe===!0?(ve.setLineWidth(oe.wireframeLinewidth*$e()),pe.setMode(Y.LINES)):pe.setMode(Y.TRIANGLES);else if(ae.isLine){let de=oe.linewidth;de===void 0&&(de=1),ve.setLineWidth(de*$e()),ae.isLineSegments?pe.setMode(Y.LINES):ae.isLineLoop?pe.setMode(Y.LINE_LOOP):pe.setMode(Y.LINE_STRIP)}else ae.isPoints?pe.setMode(Y.POINTS):ae.isSprite&&pe.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)pe.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)pe.renderInstances(q,j,ae.count);else if(re.isInstancedBufferGeometry){let de=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qe=Math.min(re.instanceCount,de);pe.renderInstances(q,j,qe)}else pe.render(q,j)};function wt(O,ne,re){O.transparent===!0&&O.side===tn&&O.forceSinglePass===!1?(O.side=gn,O.needsUpdate=!0,bn(O,ne,re),O.side=fs,O.needsUpdate=!0,bn(O,ne,re),O.side=tn):bn(O,ne,re)}this.compile=function(O,ne,re=null){re===null&&(re=O),g=it.get(re),g.init(),M.push(g),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(g.pushLight(ae),ae.castShadow&&g.pushShadow(ae))}),O!==re&&O.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(g.pushLight(ae),ae.castShadow&&g.pushShadow(ae))}),g.setupLights(_._useLegacyLights);let oe=new Set;return O.traverse(function(ae){let Ge=ae.material;if(Ge)if(Array.isArray(Ge))for(let I=0;I<Ge.length;I++){let H=Ge[I];wt(H,re,ae),oe.add(H)}else wt(Ge,re,ae),oe.add(Ge)}),M.pop(),g=null,oe},this.compileAsync=function(O,ne,re=null){let oe=this.compile(O,ne,re);return new Promise(ae=>{function Ge(){if(oe.forEach(function(I){Fe.get(I).currentProgram.isReady()&&oe.delete(I)}),oe.size===0){ae(O);return}setTimeout(Ge,10)}me.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Rt=null;function Gt(O){Rt&&Rt(O)}function Vt(){$t.stop()}function Ut(){$t.start()}let $t=new sd;$t.setAnimationLoop(Gt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(O){Rt=O,pt.setAnimationLoop(O),O===null?$t.stop():$t.start()},pt.addEventListener("sessionstart",Vt),pt.addEventListener("sessionend",Ut),this.render=function(O,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(ne),ne=pt.getCamera()),O.isScene===!0&&O.onBeforeRender(_,O,ne,L),g=it.get(O,M.length),g.init(),M.push(g),Ve.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),he.setFromProjectionMatrix(Ve),we=this.localClippingEnabled,Re=ut.init(this.clippingPlanes,we),v=Ze.get(O,m.length),v.init(),m.push(v),Dt(O,ne,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort($,W),this.info.render.frame++,Re===!0&&ut.beginShadows();let re=g.state.shadowsArray;if(ye.render(re,O,ne),Re===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),gt.render(v,O),g.setupLights(_._useLegacyLights),ne.isArrayCamera){let oe=ne.cameras;for(let ae=0,Ge=oe.length;ae<Ge;ae++){let I=oe[ae];Jn(v,O,I,I.viewport)}}else Jn(v,O,ne);L!==null&&(z.updateMultisampleRenderTarget(L),z.updateRenderTargetMipmap(L)),O.isScene===!0&&O.onAfterRender(_,O,ne),Qe.resetDefaultState(),k=-1,S=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Dt(O,ne,re,oe){if(O.visible===!1)return;if(O.layers.test(ne.layers)){if(O.isGroup)re=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ne);else if(O.isLight)g.pushLight(O),O.castShadow&&g.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||he.intersectsSprite(O)){oe&&Ke.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Ve);let I=Te.update(O),H=O.material;H.visible&&v.push(O,I,H,re,Ke.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||he.intersectsObject(O))){let I=Te.update(O),H=O.material;if(oe&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Ke.copy(O.boundingSphere.center)):(I.boundingSphere===null&&I.computeBoundingSphere(),Ke.copy(I.boundingSphere.center)),Ke.applyMatrix4(O.matrixWorld).applyMatrix4(Ve)),Array.isArray(H)){let K=I.groups;for(let Ee=0,Ce=K.length;Ee<Ce;Ee++){let C=K[Ee],q=H[C.materialIndex];q&&q.visible&&v.push(O,I,q,re,Ke.z,C)}}else H.visible&&v.push(O,I,H,re,Ke.z,null)}}let Ge=O.children;for(let I=0,H=Ge.length;I<H;I++)Dt(Ge[I],ne,re,oe)}function Jn(O,ne,re,oe){let ae=O.opaque,Ge=O.transmissive,I=O.transparent;g.setupLightsView(re),Re===!0&&ut.setGlobalState(_.clippingPlanes,re),Ge.length>0&&bt(ae,Ge,ne,re),oe&&ve.viewport(A.copy(oe)),ae.length>0&&Kn(ae,ne,re),Ge.length>0&&Kn(Ge,ne,re),I.length>0&&Kn(I,ne,re),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function bt(O,ne,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;let Ge=Ae.isWebGL2;Xe===null&&(Xe=new Yn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?wi:us,minFilter:sa,samples:Ge?4:0})),_.getDrawingBufferSize(at),Ge?Xe.setSize(at.x,at.y):Xe.setSize(tc(at.x),tc(at.y));let I=_.getRenderTarget();_.setRenderTarget(Xe),_.getClearColor(Z),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();let H=_.toneMapping;_.toneMapping=zi,Kn(O,re,oe),z.updateMultisampleRenderTarget(Xe),z.updateRenderTargetMipmap(Xe);let K=!1;for(let Ee=0,Ce=ne.length;Ee<Ce;Ee++){let C=ne[Ee],q=C.object,se=C.geometry,j=C.material,Me=C.group;if(j.side===tn&&q.layers.test(oe.layers)){let pe=j.side;j.side=gn,j.needsUpdate=!0,Ni(q,re,oe,se,j,Me),j.side=pe,j.needsUpdate=!0,K=!0}}K===!0&&(z.updateMultisampleRenderTarget(Xe),z.updateRenderTargetMipmap(Xe)),_.setRenderTarget(I),_.setClearColor(Z,N),_.toneMapping=H}function Kn(O,ne,re){let oe=ne.isScene===!0?ne.overrideMaterial:null;for(let ae=0,Ge=O.length;ae<Ge;ae++){let I=O[ae],H=I.object,K=I.geometry,Ee=oe===null?I.material:oe,Ce=I.group;H.layers.test(re.layers)&&Ni(H,ne,re,K,Ee,Ce)}}function Ni(O,ne,re,oe,ae,Ge){O.onBeforeRender(_,ne,re,oe,ae,Ge),O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ae.onBeforeRender(_,ne,re,oe,O,Ge),ae.transparent===!0&&ae.side===tn&&ae.forceSinglePass===!1?(ae.side=gn,ae.needsUpdate=!0,_.renderBufferDirect(re,ne,oe,ae,O,Ge),ae.side=fs,ae.needsUpdate=!0,_.renderBufferDirect(re,ne,oe,ae,O,Ge),ae.side=tn):_.renderBufferDirect(re,ne,oe,ae,O,Ge),O.onAfterRender(_,ne,re,oe,ae,Ge)}function bn(O,ne,re){ne.isScene!==!0&&(ne=Oe);let oe=Fe.get(O),ae=g.state.lights,Ge=g.state.shadowsArray,I=ae.state.version,H=tt.getParameters(O,ae.state,Ge,ne,re),K=tt.getProgramCacheKey(H),Ee=oe.programs;oe.environment=O.isMeshStandardMaterial?ne.environment:null,oe.fog=ne.fog,oe.envMap=(O.isMeshStandardMaterial?te:R).get(O.envMap||oe.environment),Ee===void 0&&(O.addEventListener("dispose",He),Ee=new Map,oe.programs=Ee);let Ce=Ee.get(K);if(Ce!==void 0){if(oe.currentProgram===Ce&&oe.lightsStateVersion===I)return wn(O,H),Ce}else H.uniforms=tt.getUniforms(O),O.onBuild(re,H,_),O.onBeforeCompile(H,_),Ce=tt.acquireProgram(H,K),Ee.set(K,Ce),oe.uniforms=H.uniforms;let C=oe.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(C.clippingPlanes=ut.uniform),wn(O,H),oe.needsLights=Jt(O),oe.lightsStateVersion=I,oe.needsLights&&(C.ambientLightColor.value=ae.state.ambient,C.lightProbe.value=ae.state.probe,C.directionalLights.value=ae.state.directional,C.directionalLightShadows.value=ae.state.directionalShadow,C.spotLights.value=ae.state.spot,C.spotLightShadows.value=ae.state.spotShadow,C.rectAreaLights.value=ae.state.rectArea,C.ltc_1.value=ae.state.rectAreaLTC1,C.ltc_2.value=ae.state.rectAreaLTC2,C.pointLights.value=ae.state.point,C.pointLightShadows.value=ae.state.pointShadow,C.hemisphereLights.value=ae.state.hemi,C.directionalShadowMap.value=ae.state.directionalShadowMap,C.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,C.spotShadowMap.value=ae.state.spotShadowMap,C.spotLightMatrix.value=ae.state.spotLightMatrix,C.spotLightMap.value=ae.state.spotLightMap,C.pointShadowMap.value=ae.state.pointShadowMap,C.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.currentProgram=Ce,oe.uniformsList=null,Ce}function Nn(O){if(O.uniformsList===null){let ne=O.currentProgram.getUniforms();O.uniformsList=gr.seqWithValue(ne.seq,O.uniforms)}return O.uniformsList}function wn(O,ne){let re=Fe.get(O);re.outputColorSpace=ne.outputColorSpace,re.batching=ne.batching,re.instancing=ne.instancing,re.instancingColor=ne.instancingColor,re.skinning=ne.skinning,re.morphTargets=ne.morphTargets,re.morphNormals=ne.morphNormals,re.morphColors=ne.morphColors,re.morphTargetsCount=ne.morphTargetsCount,re.numClippingPlanes=ne.numClippingPlanes,re.numIntersection=ne.numClipIntersection,re.vertexAlphas=ne.vertexAlphas,re.vertexTangents=ne.vertexTangents,re.toneMapping=ne.toneMapping}function Wt(O,ne,re,oe,ae){ne.isScene!==!0&&(ne=Oe),z.resetTextureUnits();let Ge=ne.fog,I=oe.isMeshStandardMaterial?ne.environment:null,H=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ji,K=(oe.isMeshStandardMaterial?te:R).get(oe.envMap||I),Ee=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ce=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),C=!!re.morphAttributes.position,q=!!re.morphAttributes.normal,se=!!re.morphAttributes.color,j=zi;oe.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(j=_.toneMapping);let Me=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pe=Me!==void 0?Me.length:0,de=Fe.get(oe),qe=g.state.lights;if(Re===!0&&(we===!0||O!==S)){let Xt=O===S&&oe.id===k;ut.setState(oe,O,Xt)}let nt=!1;oe.version===de.__version?(de.needsLights&&de.lightsStateVersion!==qe.state.version||de.outputColorSpace!==H||ae.isBatchedMesh&&de.batching===!1||!ae.isBatchedMesh&&de.batching===!0||ae.isInstancedMesh&&de.instancing===!1||!ae.isInstancedMesh&&de.instancing===!0||ae.isSkinnedMesh&&de.skinning===!1||!ae.isSkinnedMesh&&de.skinning===!0||ae.isInstancedMesh&&de.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&de.instancingColor===!1&&ae.instanceColor!==null||de.envMap!==K||oe.fog===!0&&de.fog!==Ge||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==ut.numPlanes||de.numIntersection!==ut.numIntersection)||de.vertexAlphas!==Ee||de.vertexTangents!==Ce||de.morphTargets!==C||de.morphNormals!==q||de.morphColors!==se||de.toneMapping!==j||Ae.isWebGL2===!0&&de.morphTargetsCount!==pe)&&(nt=!0):(nt=!0,de.__version=oe.version);let xt=de.currentProgram;nt===!0&&(xt=bn(oe,ne,ae));let Ct=!1,Et=!1,In=!1,kt=xt.getUniforms(),ln=de.uniforms;if(ve.useProgram(xt.program)&&(Ct=!0,Et=!0,In=!0),oe.id!==k&&(k=oe.id,Et=!0),Ct||S!==O){kt.setValue(Y,"projectionMatrix",O.projectionMatrix),kt.setValue(Y,"viewMatrix",O.matrixWorldInverse);let Xt=kt.map.cameraPosition;Xt!==void 0&&Xt.setValue(Y,Ke.setFromMatrixPosition(O.matrixWorld)),Ae.logarithmicDepthBuffer&&kt.setValue(Y,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&kt.setValue(Y,"isOrthographic",O.isOrthographicCamera===!0),S!==O&&(S=O,Et=!0,In=!0)}if(ae.isSkinnedMesh){kt.setOptional(Y,ae,"bindMatrix"),kt.setOptional(Y,ae,"bindMatrixInverse");let Xt=ae.skeleton;Xt&&(Ae.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),kt.setValue(Y,"boneTexture",Xt.boneTexture,z)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ae.isBatchedMesh&&(kt.setOptional(Y,ae,"batchingTexture"),kt.setValue(Y,"batchingTexture",ae._matricesTexture,z));let Pt=re.morphAttributes;if((Pt.position!==void 0||Pt.normal!==void 0||Pt.color!==void 0&&Ae.isWebGL2===!0)&&ct.update(ae,re,xt),(Et||de.receiveShadow!==ae.receiveShadow)&&(de.receiveShadow=ae.receiveShadow,kt.setValue(Y,"receiveShadow",ae.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(ln.envMap.value=K,ln.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1),Et&&(kt.setValue(Y,"toneMappingExposure",_.toneMappingExposure),de.needsLights&&Sn(ln,In),Ge&&oe.fog===!0&&ze.refreshFogUniforms(ln,Ge),ze.refreshMaterialUniforms(ln,oe,ee,b,Xe),gr.upload(Y,Nn(de),ln,z)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(gr.upload(Y,Nn(de),ln,z),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&kt.setValue(Y,"center",ae.center),kt.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),kt.setValue(Y,"normalMatrix",ae.normalMatrix),kt.setValue(Y,"modelMatrix",ae.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){let Xt=oe.uniformsGroups;for(let Ln=0,Ii=Xt.length;Ln<Ii;Ln++)if(Ae.isWebGL2){let Ye=Xt[Ln];dt.update(Ye,xt),dt.bind(Ye,xt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xt}function Sn(O,ne){O.ambientLightColor.needsUpdate=ne,O.lightProbe.needsUpdate=ne,O.directionalLights.needsUpdate=ne,O.directionalLightShadows.needsUpdate=ne,O.pointLights.needsUpdate=ne,O.pointLightShadows.needsUpdate=ne,O.spotLights.needsUpdate=ne,O.spotLightShadows.needsUpdate=ne,O.rectAreaLights.needsUpdate=ne,O.hemisphereLights.needsUpdate=ne}function Jt(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(O,ne,re){Fe.get(O.texture).__webglTexture=ne,Fe.get(O.depthTexture).__webglTexture=re;let oe=Fe.get(O);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,ne){let re=Fe.get(O);re.__webglFramebuffer=ne,re.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(O,ne=0,re=0){L=O,D=ne,P=re;let oe=!0,ae=null,Ge=!1,I=!1;if(O){let K=Fe.get(O);K.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(Y.FRAMEBUFFER,null),oe=!1):K.__webglFramebuffer===void 0?z.setupRenderTarget(O):K.__hasExternalTextures&&z.rebindTextures(O,Fe.get(O.texture).__webglTexture,Fe.get(O.depthTexture).__webglTexture);let Ee=O.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(I=!0);let Ce=Fe.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Ce[ne])?ae=Ce[ne][re]:ae=Ce[ne],Ge=!0):Ae.isWebGL2&&O.samples>0&&z.useMultisampledRTT(O)===!1?ae=Fe.get(O).__webglMultisampledFramebuffer:Array.isArray(Ce)?ae=Ce[re]:ae=Ce,A.copy(O.viewport),y.copy(O.scissor),G=O.scissorTest}else A.copy(ie).multiplyScalar(ee).floor(),y.copy(Se).multiplyScalar(ee).floor(),G=be;if(ve.bindFramebuffer(Y.FRAMEBUFFER,ae)&&Ae.drawBuffers&&oe&&ve.drawBuffers(O,ae),ve.viewport(A),ve.scissor(y),ve.setScissorTest(G),Ge){let K=Fe.get(O.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K.__webglTexture,re)}else if(I){let K=Fe.get(O.texture),Ee=ne||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,K.__webglTexture,re||0,Ee)}k=-1},this.readRenderTargetPixels=function(O,ne,re,oe,ae,Ge,I){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=Fe.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&I!==void 0&&(H=H[I]),H){ve.bindFramebuffer(Y.FRAMEBUFFER,H);try{let K=O.texture,Ee=K.format,Ce=K.type;if(Ee!==ai&&je.convert(Ee)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let C=Ce===wi&&(me.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&me.has("EXT_color_buffer_float"));if(Ce!==us&&je.convert(Ce)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===cs&&(Ae.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!C){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=O.width-oe&&re>=0&&re<=O.height-ae&&Y.readPixels(ne,re,oe,ae,je.convert(Ee),je.convert(Ce),Ge)}finally{let K=L!==null?Fe.get(L).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,K)}}},this.copyFramebufferToTexture=function(O,ne,re=0){let oe=Math.pow(2,-re),ae=Math.floor(ne.image.width*oe),Ge=Math.floor(ne.image.height*oe);z.setTexture2D(ne,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,re,0,0,O.x,O.y,ae,Ge),ve.unbindTexture()},this.copyTextureToTexture=function(O,ne,re,oe=0){let ae=ne.image.width,Ge=ne.image.height,I=je.convert(re.format),H=je.convert(re.type);z.setTexture2D(re,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,re.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,re.unpackAlignment),ne.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,oe,O.x,O.y,ae,Ge,I,H,ne.image.data):ne.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,oe,O.x,O.y,ne.mipmaps[0].width,ne.mipmaps[0].height,I,ne.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,oe,O.x,O.y,I,H,ne.image),oe===0&&re.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(O,ne,re,oe,ae=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ge=O.max.x-O.min.x+1,I=O.max.y-O.min.y+1,H=O.max.z-O.min.z+1,K=je.convert(oe.format),Ee=je.convert(oe.type),Ce;if(oe.isData3DTexture)z.setTexture3D(oe,0),Ce=Y.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)z.setTexture2DArray(oe,0),Ce=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,oe.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,oe.unpackAlignment);let C=Y.getParameter(Y.UNPACK_ROW_LENGTH),q=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),se=Y.getParameter(Y.UNPACK_SKIP_PIXELS),j=Y.getParameter(Y.UNPACK_SKIP_ROWS),Me=Y.getParameter(Y.UNPACK_SKIP_IMAGES),pe=re.isCompressedTexture?re.mipmaps[ae]:re.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,pe.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pe.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,O.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,O.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,O.min.z),re.isDataTexture||re.isData3DTexture?Y.texSubImage3D(Ce,ae,ne.x,ne.y,ne.z,Ge,I,H,K,Ee,pe.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ce,ae,ne.x,ne.y,ne.z,Ge,I,H,K,pe.data)):Y.texSubImage3D(Ce,ae,ne.x,ne.y,ne.z,Ge,I,H,K,Ee,pe),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,C),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,q),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,se),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,j),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Me),ae===0&&oe.generateMipmaps&&Y.generateMipmap(Ce),ve.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?z.setTextureCube(O,0):O.isData3DTexture?z.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?z.setTexture2DArray(O,0):z.setTexture2D(O,0),ve.unbindTexture()},this.resetState=function(){D=0,P=0,L=null,ve.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yc?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===qo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?Os:Qu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Os?en:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},gc=class extends Ns{};gc.prototype.isWebGL1Renderer=!0;var To=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xn=new X,la=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Si=class extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},or,Yr=new X,lr=new X,cr=new X,hr=new Le,Zr=new Le,hd=new Nt,ja=new X,Jr=new X,Qa=new X,Cu=new Le,Gl=new Le,Pu=new Le,Ui=class extends dn{constructor(e=new Si){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(t,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new la(n,3,0,!1)),or.setAttribute("uv",new la(n,2,3,!1))}this.geometry=or,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;eo(ja.set(-.5,-.5,0),cr,a,lr,s,r),eo(Jr.set(.5,-.5,0),cr,a,lr,s,r),eo(Qa.set(.5,.5,0),cr,a,lr,s,r),Cu.set(0,0),Gl.set(1,0),Pu.set(1,1);let o=e.ray.intersectTriangle(ja,Jr,Qa,!1,Yr);if(o===null&&(eo(Jr.set(-.5,.5,0),cr,a,lr,s,r),Gl.set(0,1),o=e.ray.intersectTriangle(ja,Qa,Jr,!1,Yr),o===null))return;let c=e.ray.origin.distanceTo(Yr);c<e.near||c>e.far||t.push({distance:c,point:Yr.clone(),uv:zs.getInterpolation(Yr,ja,Jr,Qa,Cu,Gl,Pu,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function eo(i,e,t,n,s,r){hr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Zr.x=r*hr.x-s*hr.y,Zr.y=s*hr.x+r*hr.y):Zr.copy(hr),i.copy(e),i.x+=Zr.x,i.y+=Zr.y,i.applyMatrix4(hd)}var Ro=class extends oi{constructor(e=null,t=1,n=1,s,r,a,o,c,h=Tn,u=Tn,f,p){super(null,a,o,c,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ca=class extends xn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new Nt,Iu=new Nt,to=[],Lu=new Ki,Nx=new Nt,Kr=new Ne,$r=new ms,Co=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Lu.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),$r.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Iu.multiplyMatrices(n,ur),Kr.matrixWorld=Iu,Kr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let c=to[a];c.instanceId=r,c.object=this,t.push(c)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Du=new Nt,xc=new ra,no=new ms,io=new X,Po=class extends dn{constructor(e=new qt,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;Du.copy(s).invert(),xc.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=p,v=d;x<v;x++){let g=h.getX(x);io.fromBufferAttribute(f,g),zu(io,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=p,v=d;x<v;x++)io.fromBufferAttribute(f,x),zu(io,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zu(i,e,t,n,s,r,a){let o=xc.distanceSqToPoint(i);if(o<t){let c=new X;xc.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Vn=class extends oi{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Le:new X);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new X,s=[],r=[],a=[],o=new X,c=new Nt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new X)}r[0]=new X,a[0]=new X;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Hn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Hn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ua=class extends mi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Le,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,d=h-this.aY;c=p*u-d*f+this.aX,h=p*f+d*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yc=class extends ua{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,f){let p=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var so=new X,Vl=new Jc,Wl=new Jc,Xl=new Jc,vc=class extends mi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new X){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(so.subVectors(s[0],s[1]).add(s[0]),h=so);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(so.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=so),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),Vl.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,x,v,g),Wl.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,x,v,g),Xl.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,x,v,g)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),Wl.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),Xl.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return n.set(Vl.calc(c),Wl.calc(c),Xl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Fx(i,e){let t=1-i;return t*t*e}function Bx(i,e){return 2*(1-i)*i*e}function Hx(i,e){return i*i*e}function ta(i,e,t,n){return Fx(i,e)+Bx(i,t)+Hx(i,n)}function Gx(i,e){let t=1-i;return t*t*t*e}function Vx(i,e){let t=1-i;return 3*t*t*i*e}function Wx(i,e){return 3*(1-i)*i*i*e}function Xx(i,e){return i*i*i*e}function na(i,e,t,n,s){return Gx(i,e)+Vx(i,t)+Wx(i,n)+Xx(i,s)}var Io=class extends mi{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(na(e,s.x,r.x,a.x,o.x),na(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_c=class extends mi{constructor(e=new X,t=new X,n=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new X){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(na(e,s.x,r.x,a.x,o.x),na(e,s.y,r.y,a.y,o.y),na(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends mi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends mi{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends mi{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ta(e,s.x,r.x,a.x),ta(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bc=class extends mi{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ta(e,s.x,r.x,a.x),ta(e,s.y,r.y,a.y),ta(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Uu(o,c.x,h.x,u.x,f.x),Uu(o,c.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},wc=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:vc,CubicBezierCurve:Io,CubicBezierCurve3:_c,EllipseCurve:ua,LineCurve:Lo,LineCurve3:Mc,QuadraticBezierCurve:Do,QuadraticBezierCurve3:bc,SplineCurve:zo}),Sc=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new wc[s.type]().fromJSON(s))}return this}},Uo=class extends Sc{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lo(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Do(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Io(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let h=new ua(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ki=class i extends qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],h=new X,u=new Le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=n+f/t*s;h.x=e*Math.cos(d),h.y=e*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Un=class i extends qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],x=0,v=[],g=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(d,2));function M(){let E=new X,D=new X,P=0,L=(t-e)/n;for(let k=0;k<=r;k++){let S=[],A=k/r,y=A*(t-e)+e;for(let G=0;G<=s;G++){let Z=G/s,N=Z*c+o,J=Math.sin(N),b=Math.cos(N);D.x=y*J,D.y=-A*n+g,D.z=y*b,f.push(D.x,D.y,D.z),E.set(J,L,b).normalize(),p.push(E.x,E.y,E.z),d.push(Z,1-A),S.push(x++)}v.push(S)}for(let k=0;k<s;k++)for(let S=0;S<r;S++){let A=v[S][k],y=v[S+1][k],G=v[S+1][k+1],Z=v[S][k+1];u.push(A,y,Z),u.push(y,G,Z),P+=6}h.addGroup(m,P,0),m+=P}function _(E){let D=x,P=new Le,L=new X,k=0,S=E===!0?e:t,A=E===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,g*A,0),p.push(0,A,0),d.push(.5,.5),x++;let y=x;for(let G=0;G<=s;G++){let N=G/s*c+o,J=Math.cos(N),b=Math.sin(N);L.x=S*b,L.y=g*A,L.z=S*J,f.push(L.x,L.y,L.z),p.push(0,A,0),P.x=J*.5+.5,P.y=b*.5*A+.5,d.push(P.x,P.y),x++}for(let G=0;G<s;G++){let Z=D+G,N=y+G;E===!0?u.push(N,N+1,Z):u.push(N+1,N,Z),k+=3}h.addGroup(m,k,E===!0?1:2),m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vn=class i extends Un{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ko=class i extends qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new X,E=new X,D=new X;for(let P=0;P<t.length;P+=3)d(t[P+0],_),d(t[P+1],E),d(t[P+2],D),c(_,E,D,M)}function c(M,_,E,D){let P=D+1,L=[];for(let k=0;k<=P;k++){L[k]=[];let S=M.clone().lerp(E,k/P),A=_.clone().lerp(E,k/P),y=P-k;for(let G=0;G<=y;G++)G===0&&k===P?L[k][G]=S:L[k][G]=S.clone().lerp(A,G/y)}for(let k=0;k<P;k++)for(let S=0;S<2*(P-k)-1;S++){let A=Math.floor(S/2);S%2===0?(p(L[k][A+1]),p(L[k+1][A]),p(L[k][A])):(p(L[k][A+1]),p(L[k+1][A+1]),p(L[k+1][A]))}}function h(M){let _=new X;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(M),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function u(){let M=new X;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let E=g(M)/2/Math.PI+.5,D=m(M)/Math.PI+.5;a.push(E,1-D)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],E=a[M+2],D=a[M+4],P=Math.max(_,E,D),L=Math.min(_,E,D);P>.9&&L<.1&&(_<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function d(M,_){let E=M*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function x(){let M=new X,_=new X,E=new X,D=new X,P=new Le,L=new Le,k=new Le;for(let S=0,A=0;S<r.length;S+=9,A+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),E.set(r[S+6],r[S+7],r[S+8]),P.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),k.set(a[A+4],a[A+5]),D.copy(M).add(_).add(E).divideScalar(3);let y=g(D);v(P,A+0,M,y),v(L,A+2,_,y),v(k,A+4,E,y)}}function v(M,_,E,D){D<0&&M.x===1&&(a[_]=M.x-1),E.x===0&&E.z===0&&(a[_]=D/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ei=class extends Uo{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Uo().fromJSON(s))}return this}},qx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ud(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,f,p,d;if(n&&(r=$x(i,e,r,t)),i.length>80*t){o=h=i[0],c=u=i[1];for(let x=t;x<s;x+=t)f=i[x],p=i[x+1],f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p);d=Math.max(h-o,u-c),d=d!==0?32767/d:0}return da(r,a,t,o,c,d,0),a}};function ud(i,e,t,n,s){let r,a;if(s===l1(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ku(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ku(r,i[r],i[r+1],a);return a&&Zo(a,a.next)&&(pa(a),a=a.next),a}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zo(t,t.next)||cn(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function da(i,e,t,n,s,r,a){if(!i)return;!a&&r&&n1(i,n,s,r);let o=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Zx(i,n,s,r):Yx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),pa(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Jx(Fs(i),e,t),da(i,e,t,n,s,r,2)):a===2&&Kx(i,e,t,n,s,r):da(Fs(i),e,t,n,s,r,1);break}}}function Yx(i){let e=i.prev,t=i,n=i.next;if(cn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,h=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<h?o:h:c<h?c:h,p=s>r?s>a?s:a:r>a?r:a,d=o>c?o>h?o:h:c>h?c:h,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=f&&x.y<=d&&pr(s,o,r,c,a,h,x.x,x.y)&&cn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Zx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(cn(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,f=r.y,p=a.y,d=o<c?o<h?o:h:c<h?c:h,x=u<f?u<p?u:p:f<p?f:p,v=o>c?o>h?o:h:c>h?c:h,g=u>f?u>p?u:p:f>p?f:p,m=Ec(d,x,e,t,n),M=Ec(v,g,e,t,n),_=i.prevZ,E=i.nextZ;for(;_&&_.z>=m&&E&&E.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=x&&_.y<=g&&_!==s&&_!==a&&pr(o,u,c,f,h,p,_.x,_.y)&&cn(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=d&&E.x<=v&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&pr(o,u,c,f,h,p,E.x,E.y)&&cn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=x&&_.y<=g&&_!==s&&_!==a&&pr(o,u,c,f,h,p,_.x,_.y)&&cn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=M;){if(E.x>=d&&E.x<=v&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&pr(o,u,c,f,h,p,E.x,E.y)&&cn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Jx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Zo(s,r)&&dd(s,n,n.next,r)&&fa(s,r)&&fa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),pa(n),pa(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function Kx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r1(a,o)){let c=fd(a,o);a=Fs(a,a.next),c=Fs(c,c.next),da(a,e,t,n,s,r,0),da(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function $x(i,e,t,n){let s=[],r,a,o,c,h;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,h=ud(i,o,c,n,!1),h===h.next&&(h.steiner=!0),s.push(s1(h));for(s.sort(jx),r=0;r<s.length;r++)t=Qx(s[r],t);return t}function jx(i,e){return i.x-e.x}function Qx(i,e){let t=e1(i,e);if(!t)return e;let n=fd(t,i);return Fs(n,n.next),Fs(t,t.next)}function e1(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,h=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&pr(a<h?r:n,a,c,h,a<h?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),fa(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&t1(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function t1(i,e){return cn(i.prev,i,e.prev)<0&&cn(e.next,i,i.next)<0}function n1(i,e,t,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i1(s)}function i1(i){let e,t,n,s,r,a,o,c,h=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,h*=2}while(a>1);return i}function Ec(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function s1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function r1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!a1(i,e)&&(fa(i,e)&&fa(e,i)&&o1(i,e)&&(cn(i.prev,i,e.prev)||cn(i,e.prev,e))||Zo(i,e)&&cn(i.prev,i,i.next)>0&&cn(e.prev,e,e.next)>0)}function cn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zo(i,e){return i.x===e.x&&i.y===e.y}function dd(i,e,t,n){let s=ao(cn(i,e,t)),r=ao(cn(i,e,n)),a=ao(cn(t,n,i)),o=ao(cn(t,n,e));return!!(s!==r&&a!==o||s===0&&ro(i,t,e)||r===0&&ro(i,n,e)||a===0&&ro(t,i,n)||o===0&&ro(t,e,n))}function ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ao(i){return i>0?1:i<0?-1:0}function a1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fa(i,e){return cn(i.prev,i,i.next)<0?cn(i,e,i.next)>=0&&cn(i,i.prev,e)>=0:cn(i,e,i.prev)<0||cn(i,i.next,e)<0}function o1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fd(i,e){let t=new Tc(i.i,i.x,i.y),n=new Tc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ku(i,e,t,n){let s=new Tc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ds=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ou(e),Nu(n,e);let a=e.length;t.forEach(Ou);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Nu(n,t[c]);let o=qx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ou(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var br=class i extends qt{constructor(e=new ei([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o];a(h)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:c1,_,E=!1,D,P,L,k;m&&(_=m.getSpacedPoints(u),E=!0,p=!1,D=m.computeFrenetFrames(u,!1),P=new X,L=new X,k=new X),p||(g=0,d=0,x=0,v=0);let S=o.extractPoints(h),A=S.shape,y=S.holes;if(!ds.isClockWise(A)){A=A.reverse();for(let Y=0,Ie=y.length;Y<Ie;Y++){let me=y[Y];ds.isClockWise(me)&&(y[Y]=me.reverse())}}let Z=ds.triangulateShape(A,y),N=A;for(let Y=0,Ie=y.length;Y<Ie;Y++){let me=y[Y];A=A.concat(me)}function J(Y,Ie,me){return Ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(Ie,me)}let b=A.length,ee=Z.length;function $(Y,Ie,me){let Ae,ve,Ue,Fe=Y.x-Ie.x,z=Y.y-Ie.y,R=me.x-Y.x,te=me.y-Y.y,xe=Fe*Fe+z*z,_e=Fe*te-z*R;if(Math.abs(_e)>Number.EPSILON){let Te=Math.sqrt(xe),tt=Math.sqrt(R*R+te*te),ze=Ie.x-z/Te,Ze=Ie.y+Fe/Te,it=me.x-te/tt,ut=me.y+R/tt,ye=((it-ze)*te-(ut-Ze)*R)/(Fe*te-z*R);Ae=ze+Fe*ye-Y.x,ve=Ze+z*ye-Y.y;let gt=Ae*Ae+ve*ve;if(gt<=2)return new Le(Ae,ve);Ue=Math.sqrt(gt/2)}else{let Te=!1;Fe>Number.EPSILON?R>Number.EPSILON&&(Te=!0):Fe<-Number.EPSILON?R<-Number.EPSILON&&(Te=!0):Math.sign(z)===Math.sign(te)&&(Te=!0),Te?(Ae=-z,ve=Fe,Ue=Math.sqrt(xe)):(Ae=Fe,ve=z,Ue=Math.sqrt(xe/2))}return new Le(Ae/Ue,ve/Ue)}let W=[];for(let Y=0,Ie=N.length,me=Ie-1,Ae=Y+1;Y<Ie;Y++,me++,Ae++)me===Ie&&(me=0),Ae===Ie&&(Ae=0),W[Y]=$(N[Y],N[me],N[Ae]);let ie=[],Se,be=W.concat();for(let Y=0,Ie=y.length;Y<Ie;Y++){let me=y[Y];Se=[];for(let Ae=0,ve=me.length,Ue=ve-1,Fe=Ae+1;Ae<ve;Ae++,Ue++,Fe++)Ue===ve&&(Ue=0),Fe===ve&&(Fe=0),Se[Ae]=$(me[Ae],me[Ue],me[Fe]);ie.push(Se),be=be.concat(Se)}for(let Y=0;Y<g;Y++){let Ie=Y/g,me=d*Math.cos(Ie*Math.PI/2),Ae=x*Math.sin(Ie*Math.PI/2)+v;for(let ve=0,Ue=N.length;ve<Ue;ve++){let Fe=J(N[ve],W[ve],Ae);Ve(Fe.x,Fe.y,-me)}for(let ve=0,Ue=y.length;ve<Ue;ve++){let Fe=y[ve];Se=ie[ve];for(let z=0,R=Fe.length;z<R;z++){let te=J(Fe[z],Se[z],Ae);Ve(te.x,te.y,-me)}}}let he=x+v;for(let Y=0;Y<b;Y++){let Ie=p?J(A[Y],be[Y],he):A[Y];E?(L.copy(D.normals[0]).multiplyScalar(Ie.x),P.copy(D.binormals[0]).multiplyScalar(Ie.y),k.copy(_[0]).add(L).add(P),Ve(k.x,k.y,k.z)):Ve(Ie.x,Ie.y,0)}for(let Y=1;Y<=u;Y++)for(let Ie=0;Ie<b;Ie++){let me=p?J(A[Ie],be[Ie],he):A[Ie];E?(L.copy(D.normals[Y]).multiplyScalar(me.x),P.copy(D.binormals[Y]).multiplyScalar(me.y),k.copy(_[Y]).add(L).add(P),Ve(k.x,k.y,k.z)):Ve(me.x,me.y,f/u*Y)}for(let Y=g-1;Y>=0;Y--){let Ie=Y/g,me=d*Math.cos(Ie*Math.PI/2),Ae=x*Math.sin(Ie*Math.PI/2)+v;for(let ve=0,Ue=N.length;ve<Ue;ve++){let Fe=J(N[ve],W[ve],Ae);Ve(Fe.x,Fe.y,f+me)}for(let ve=0,Ue=y.length;ve<Ue;ve++){let Fe=y[ve];Se=ie[ve];for(let z=0,R=Fe.length;z<R;z++){let te=J(Fe[z],Se[z],Ae);E?Ve(te.x,te.y+_[u-1].y,_[u-1].x+me):Ve(te.x,te.y,f+me)}}}Re(),we();function Re(){let Y=s.length/3;if(p){let Ie=0,me=b*Ie;for(let Ae=0;Ae<ee;Ae++){let ve=Z[Ae];at(ve[2]+me,ve[1]+me,ve[0]+me)}Ie=u+g*2,me=b*Ie;for(let Ae=0;Ae<ee;Ae++){let ve=Z[Ae];at(ve[0]+me,ve[1]+me,ve[2]+me)}}else{for(let Ie=0;Ie<ee;Ie++){let me=Z[Ie];at(me[2],me[1],me[0])}for(let Ie=0;Ie<ee;Ie++){let me=Z[Ie];at(me[0]+b*u,me[1]+b*u,me[2]+b*u)}}n.addGroup(Y,s.length/3-Y,0)}function we(){let Y=s.length/3,Ie=0;Xe(N,Ie),Ie+=N.length;for(let me=0,Ae=y.length;me<Ae;me++){let ve=y[me];Xe(ve,Ie),Ie+=ve.length}n.addGroup(Y,s.length/3-Y,1)}function Xe(Y,Ie){let me=Y.length;for(;--me>=0;){let Ae=me,ve=me-1;ve<0&&(ve=Y.length-1);for(let Ue=0,Fe=u+g*2;Ue<Fe;Ue++){let z=b*Ue,R=b*(Ue+1),te=Ie+Ae+z,xe=Ie+ve+z,_e=Ie+ve+R,Te=Ie+Ae+R;Ke(te,xe,_e,Te)}}}function Ve(Y,Ie,me){c.push(Y),c.push(Ie),c.push(me)}function at(Y,Ie,me){Oe(Y),Oe(Ie),Oe(me);let Ae=s.length/3,ve=M.generateTopUV(n,s,Ae-3,Ae-2,Ae-1);$e(ve[0]),$e(ve[1]),$e(ve[2])}function Ke(Y,Ie,me,Ae){Oe(Y),Oe(Ie),Oe(Ae),Oe(Ie),Oe(me),Oe(Ae);let ve=s.length/3,Ue=M.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);$e(Ue[0]),$e(Ue[1]),$e(Ue[3]),$e(Ue[1]),$e(Ue[2]),$e(Ue[3])}function Oe(Y){s.push(c[Y*3+0]),s.push(c[Y*3+1]),s.push(c[Y*3+2])}function $e(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return h1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wc[s.type]().fromJSON(s)),new i(n,e.options)}},c1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[s*3],u=e[s*3+1];return[new Le(r,a),new Le(o,c),new Le(h,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Le(a,1-c),new Le(h,1-f),new Le(p,1-x),new Le(v,1-m)]:[new Le(o,1-c),new Le(u,1-f),new Le(d,1-x),new Le(g,1-m)]}};function h1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Oo=class i extends ko{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pn=class i extends ko{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gi=class i extends qt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],f=e,p=(t-e)/s,d=new X,x=new Le;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),h.push(0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,u.push(x.x,x.y)}f+=p}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let M=m+g,_=M,E=M+n+1,D=M+n+2,P=M+1;o.push(_,E,P),o.push(E,D,P)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ei=class i extends qt{constructor(e=new ei([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(a,2));function h(u){let f=s.length/3,p=u.extractPoints(t),d=p.shape,x=p.holes;ds.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=x.length;g<m;g++){let M=x[g];ds.isClockWise(M)===!0&&(x[g]=M.reverse())}let v=ds.triangulateShape(d,x);for(let g=0,m=x.length;g<m;g++){let M=x[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=v.length;g<m;g++){let M=v[g],_=M[0]+f,E=M[1]+f,D=M[2]+f;n.push(_,E,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return u1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function u1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var xi=class i extends qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],f=new X,p=new X,d=[],x=[],v=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){let P=D/t;f.x=-e*Math.cos(s+P*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+P*r)*Math.sin(a+_*o),x.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),g.push(P+E,1-_),M.push(h++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=u[m][M+1],E=u[m][M],D=u[m+1][M],P=u[m+1][M+1];(m!==0||a>0)&&d.push(_,E,P),(m!==n-1||c<Math.PI)&&d.push(E,D,P)}this.setIndex(d),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ti=class i extends qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new X,f=new X,p=new X;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let v=x/s*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),h.push(x/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let v=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,M=(s+1)*d+x;a.push(v,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var No=class extends pi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Fo=class extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hn=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bs=class extends pi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new rt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bo=class extends pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function oo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function d1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ac=class extends wr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hh:r=e,o=2*t-n;break;case Gh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hh:a=e,c=2*n-t;break;case Gh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,m=-p*g+2*p*v-p*x,M=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*x+1,_=(-1-d)*g+(1.5+d)*v+.5*x,E=d*g-d*v;for(let D=0;D!==o;++D)r[D]=m*a[u+D]+M*a[h+D]+_*a[c+D]+E*a[f+D];return r}},Rc=class extends wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(s-t),f=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*f+a[c+p]*u;return r}},Cc=class extends wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&d1(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(s)c=!0;else{let f=o*n,p=f-n,d=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[p+x]||v!==t[d+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=ho;var Hs=class extends Ti{};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=co;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends Ti{};Pc.prototype.ValueTypeName="color";var Ic=class extends Ti{};Ic.prototype.ValueTypeName="number";var Lc=class extends wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)jn.slerpFlat(r,0,a,h-o,a,h,c);return r}},ma=class extends Ti{InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.DefaultInterpolation=ho;ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Ti{};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=co;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Ti{};Dc.prototype.ValueTypeName="vector";var zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){let d=h[f],x=h[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null}}},f1=new zc,Uc=class{constructor(e){this.manager=e!==void 0?e:f1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Er=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ql=new Nt,Fu=new X,Bu=new X,ga=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kc=class extends ga{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=go*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ho=class extends Sr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hu=new Nt,jr=new X,Yl=new X,Oc=class extends ga{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new rn(2,1,1,1),new rn(0,1,1,1),new rn(3,1,1,1),new rn(1,1,1,1),new rn(3,0,1,1),new rn(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Yl.copy(n.position),Yl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yl),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}},li=class extends Sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nc=class extends ga{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gu(){return(typeof performance>"u"?Date:performance).now()}var Kc="\\[\\]\\.:\\/",p1=new RegExp("["+Kc+"]","g"),$c="[^"+Kc+"]",m1="[^"+Kc.replace("\\.","")+"]",g1=/((?:WC+[\/:])*)/.source.replace("WC",$c),x1=/(WCOD+)?/.source.replace("WCOD",m1),y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),v1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),_1=new RegExp("^"+g1+x1+y1+v1+"$"),M1=["material","materials","bones","map"],Fc=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p1,"")}static parseTrackName(e){let t=_1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);M1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Fc;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q1=new Float32Array(1);var Vo=class{constructor(e,t,n=0,s=1/0){this.ray=new ra(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bc(e,this,n,t),n.sort(Vu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bc(e[s],this,n,t);return n.sort(Vu),n}};function Vu(i,e){return i.distance-e.distance}function Bc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Bc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Cr=class extends vs{constructor(e=null){super();let t=new Qn;t.deleteAttribute("uv");let n=new hn({side:gn}),s=new hn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new li(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ne(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Ne(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let h=new Ne(t,s);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let u=new Ne(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new Ne(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new Ne(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let d=new Ne(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let x=new Ne(t,Rr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let v=new Ne(t,Rr(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let g=new Ne(t,Rr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new Ne(t,Rr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new Ne(t,Rr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let _=new Ne(t,Rr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Rr(i){let e=new Ft;return e.color.setScalar(i),e}function va(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new qt,h=0;for(let u=0;u<i.length;++u){let f=i[u],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,u),h+=d}}if(t){let u=0,f=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+u);u+=i[p].attributes.position.count}c.setIndex(f)}for(let u in r){let f=pd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<f;++p){let d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][p]);let x=pd(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function pd(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let h=0;h<i.length;++h)a.set(i[h].array,o),o+=i[h].array.length;let c=new xn(a,t,n);return s!==void 0&&(c.gpuType=s),c}function _n(i,e=18,t=!0,n=!0){let s=[],r=[];for(let c of i)for(let h=0;h<e;h++){let u=h/e*Math.PI*2,f=Math.cos(u);s.push((c.x||0)+Math.sin(u)*c.rx,c.y,(c.z||0)+f*(f>=0?c.rz:c.rb??c.rz))}for(let c=0;c<i.length-1;c++)for(let h=0;h<e;h++){let u=c*e+h,f=c*e+(h+1)%e,p=u+e,d=f+e;r.push(u,f,p,f,d,p)}let a=i.length;if(t){let c=i[0],h=s.length/3;s.push(c.x||0,c.y,c.z||0);for(let u=0;u<e;u++)r.push(h,(u+1)%e,u)}if(n){let c=i[a-1],h=s.length/3,u=(a-1)*e;s.push(c.x||0,c.y,c.z||0);for(let f=0;f<e;f++)r.push(h,u+f,u+(f+1)%e)}let o=new qt;return o.setAttribute("position",new _t(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function bs(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let c=o/6,h=e+(t-e)*c;r.push({y:-i*c,rx:h,rz:h*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),_n(r,n)}function ce(i,e,t=0,n=0,s=0){let r=new Ne(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function fn(i=0,e=0,t=0,...n){let s=new vt;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var Ot=(i,e,t)=>new Qn(i,e,t),Yt=(i,e=14,t=10)=>new xi(i,e,t),an=(i,e,t,n=12,s=!1)=>new Un(i,e,t,n,1,s),kn=(i,e,t=10)=>new vn(i,e,t),nn=(i,e,t)=>i+(e-i)*t;function Ai(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var Jo=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512],[15793919,7325912]],ni=[10725556,4906624,3718648,11566335,16096779,16731501,16773560,10484991];function Ri(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],c=i[a],h=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let f=0;f<e;f++){let p=f/e,d={y:nn(c.y,h.y,p)};for(let x of n){let v=s(o,x),g=s(c,x),m=s(h,x),M=s(u,x),_=.5*(2*g+(-v+m)*p+(2*v-5*g+4*m-M)*p*p+(-v+3*g-3*m+M)*p*p*p);x[0]==="r"&&(_=Math.max(8e-4,Math.min(Math.max(g,m)*1.08,_))),d[x]=_}t.push(d)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function gd(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,c=e+1;for(let f of i)for(let p=0;p<=e;p++){let d=-Math.PI+p/e*Math.PI*2,x=Math.cos(d);t.push((f.x||0)+Math.sin(d)*f.rx,f.y,(f.z||0)+x*(x>=0?f.rz:f.rb??f.rz)),n.push(p/e,(f.y-a)/(o-a))}for(let f=0;f<r-1;f++)for(let p=0;p<e;p++){let d=f*c+p,x=d+1,v=d+c,g=x+c;s.push(d,x,v,x,g,v)}{let f=i[0],p=t.length/3;t.push(f.x||0,f.y,f.z||0),n.push(.5,0);for(let d=0;d<e;d++)s.push(p,d+1,d)}{let f=i[r-1],p=t.length/3,d=(r-1)*c;t.push(f.x||0,f.y,f.z||0),n.push(.5,1);for(let x=0;x<e;x++)s.push(p,d+x,d+x+1)}let h=new qt;h.setAttribute("position",new _t(t,3)),h.setAttribute("uv",new _t(n,2)),h.setIndex(s),h.computeVertexNormals();let u=h.attributes.normal;for(let f=0;f<r;f++){let p=f*c,d=p+e,x=u.getX(p)+u.getX(d),v=u.getY(p)+u.getY(d),g=u.getZ(p)+u.getZ(d),m=Math.hypot(x,v,g)||1;u.setXYZ(p,x/m,v/m,g/m),u.setXYZ(d,x/m,v/m,g/m)}return h}function $i(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),_n(Ri(s,2),t)}var md={};function xd(i){let e=i?"s":"h",t=md[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=md[e]=new Ro(s,n.length,1,ai),t.minFilter=t.magFilter=Tn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function jc(i,e){return new Bs(Object.assign({color:i,gradientMap:xd(!0)},e||{}))}function Mn(i,e){return new Bs(Object.assign({color:i,gradientMap:xd()},e||{}))}var Pr=null;function yd(){return Pr||(Pr=new Ft({color:1314586,side:gn}),Pr.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},Pr.userData.shared=!0,Pr)}var b1=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function vd(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new Nt,r=new Nt;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,c=[];r.copy(a.matrixWorld).invert();let h=f=>{for(let p of f.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let d=b1(p,!!p.material.map);d.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(d),c.push(p)}else!p.isLight&&!p.isSprite&&h(p)};h(a);for(let f of c)f.parent.remove(f),f.geometry.dispose();let u=[];for(let[f,p]of o){let d=p.length>1?va(p,!1):p[0];p.length>1&&p.forEach(v=>v.dispose());let x=new Ne(d,f);x.castShadow=!0,a.add(x),!f.isMeshBasicMaterial&&!f.userData.noInk&&u.push(d)}if(e&&u.length){let f=u.map(x=>{let v=x.clone();return v.attributes.uv&&v.deleteAttribute("uv"),v}),p=f.length>1?va(f,!1):f[0];f.length>1&&f.forEach(x=>x.dispose());let d=new Ne(p,yd());d.userData.ink=!0,d.castShadow=!1,a.add(d),n.push(d)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function Ko(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new Ne(n.geometry,yd());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function Ir(i,e){let t=Jo[i][e?1:0];return Mn(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Bt=(i,e,t,n)=>Mn(i,n||void 0),Ur={},ws=(i,e)=>Ur[i]||(Ur[i]=e()),Lr=()=>ws("wood",()=>Mn(8016432)),$o=()=>ws("leather",()=>Mn(4861984)),Pi=null,ii=i=>Pi?ws("sk",()=>Mn(Pi.c[0],{emissive:Pi.c[1],emissiveIntensity:.5})):ws("m"+i,()=>Ir(i)),Wn=i=>Pi?ws("skd",()=>Mn(new rt(Pi.c[0]).multiplyScalar(.45).getHex(),{emissive:Pi.c[1],emissiveIntensity:.22})):ws("d"+i,()=>Ir(i,!0)),Ci=(i,e=1)=>Pi?ws("skg"+e,()=>Mn(Pi.c[1],{emissive:Pi.c[1],emissiveIntensity:e})):ws("g"+i+e,()=>Mn(ni[i],{emissive:ni[i],emissiveIntensity:e})),jo=new vn(.5,1,5).translate(0,.5,0),zr=new Pn(1),eh=new Un(1,1,1,10,1,!0),Md=new ti(1,.05,6,40),un=(i,e)=>new Ft({color:i,transparent:!0,opacity:e,blending:Gn,depthWrite:!1,side:tn}),Zn=(i,e,t)=>{let n=new Ne(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function kr(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=(h,u,f,p)=>{let d=un(u,.95),x=[];for(let v=0;v<h;v++){let g=Zn(zr,d,i);g.scale.set(f,f*1.7,f),x.push(g)}n.push(v=>x.forEach((g,m)=>{let M=v*(1.5+m*.27)+m*2.1,_=(m/h+v*p)%1,E=Math.sin(_*Math.PI);g.position.set(s+Math.cos(M)*(o+.035),t.y0+a*_,r+Math.sin(M)*(o+.035)),g.rotation.y=v*3+m,g.scale.set(f*E,f*1.7*E,f*E)}))};if(e===3)c(3,13215999,.014,.1);else if(e===4){c(6,16767088,.014,.16);let h=Zn(eh,un(16762960,.13),i);h.position.set(s,t.y0+a/2,r),h.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{h.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let h=un(16725012,.7),u=un(16760906,.85),f=t.mode==="lite",p=f?2:Math.max(3,Math.min(8,Math.round(a/.13))),d=[],x=Math.min(.075,o*1.2+.03)*(f?.62:1);for(let v=0;v<=p;v++){let g=v===p,m=v%2?1:-1,M=x*(g?1.35:1),_=Zn(jo,h,i);Zn(jo,u,_).scale.set(.5,.62,.5),_.position.set(s+(g?0:m*Math.min(o,.09)*.7),g?t.y1-M*.4:t.y0+a*(v+.4)/p,r),d.push({f:_,side:g?0:m,sz:M,i:v})}n.push(v=>{for(let g of d){let m=1+.32*Math.sin(v*11+g.i*1.7)+.18*Math.sin(v*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(v*9+g.i)),g.sz*2.3*m,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(v*7+g.i))}}),f||c(4,16742970,.011,.5)}else if(e>=6){let h=t.mode==="lite",u=t.mode==="halo";if(!h&&!u&&o<=.1){let f=Zn(eh,un(16773312,.2),i);f.position.set(s,t.y0+a/2,r),f.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{f.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!h){let f=Zn(Md,un(16771496,.9),i);f.position.set(s,t.y1,r),f.scale.setScalar(Math.min(o+.06,.17)),f.rotation.x=Math.PI/2,n.push(p=>{f.rotation.z=p*1.4,u||(f.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let f=new vt;f.position.set(s,t.y1+.03,r);let p=un(16777215,.95),d=h?.6:1;for(let[x,v,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])Zn(zr,p,f).scale.set(x*d,v*d,g*d);i.add(f),n.push(x=>{f.rotation.set(x*.7,x*1.1,0),f.scale.setScalar(1+.3*Math.sin(x*4))})}c(h||u?3:6,16774872,.011,.22)}return h=>{for(let u of n)u(h)}}var bd=(i,e)=>new Ft({color:i,transparent:!0,opacity:e,depthWrite:!1,side:tn});function w1(i,e,t){let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=Math.max(0,Math.min(6,e.r||0)),h=e.c[2],u=e.c[3]||e.c[1],f=m=>{let M=Math.sin(m*127.1+311.7)*43758.5453;return M-Math.floor(M)},p=(m,M,_,E,D={})=>{let P=D.m||un(M,.95),L=[];for(let k=0;k<m;k++){let S=Zn(zr,P,i);L.push(S)}n.push(k=>L.forEach((S,A)=>{let y,G;if(D.jump){let J=Math.floor(k*14+A*3.3);y=f(J+A*17),G=f(J*1.7+A)*6.28}else y=((A/m+k*E)%1+1)%1,G=k*(D.orbit??1.5+A*.27)+A*2.1;let Z=D.twinkle?.4+.6*Math.abs(Math.sin(k*(3+A)+A*1.9)):Math.sin(y*Math.PI),N=o+.035+(D.rad||0);S.position.set(s+Math.cos(G)*N,t.y0+a*y,r+Math.sin(G)*N),S.rotation.y=k*3+A,S.scale.set(_*Z,_*(D.sy??1.7)*Z,_*Z)}))},d=(m,M,_=1.6)=>{let E=Zn(eh,un(m,M),i);return E.position.set(s,t.y0+a/2,r),E.scale.set(o*_+.02,a*1.05,o*_+.02),n.push(D=>{E.material.opacity=M*(.8+Math.sin(D*3)*.3)}),E},x=(m,M,_=1)=>{let E=un(m,.7),D=un(M,.85),P=Math.max(2,Math.min(3+c,Math.round(a/.13))),L=[],k=Math.min(.075,o*1.2+.03)*(.7+c*.06)*_;for(let S=0;S<=P;S++){let A=S===P,y=S%2?1:-1,G=k*(A?1.35:1),Z=Zn(jo,E,i);Zn(jo,D,Z).scale.set(.5,.62,.5),Z.position.set(s+(A?0:y*Math.min(o,.09)*.7),A?t.y1-G*.4:t.y0+a*(S+.4)/P,r),L.push({f:Z,side:A?0:y,sz:G,i:S})}n.push(S=>{for(let A of L){let y=1+.32*Math.sin(S*11+A.i*1.7)+.18*Math.sin(S*17.3+A.i*.6);A.f.scale.set(A.sz*(.85+.15*Math.sin(S*9+A.i)),A.sz*2.3*y,A.sz*.55),A.f.rotation.z=-A.side*(.5+.16*Math.sin(S*7+A.i))}})},v=m=>{let M=new vt;M.position.set(s,t.y1+.03,r);let _=un(m,.95);for(let[E,D,P]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])Zn(zr,_,M).scale.set(E,D,P);i.add(M),n.push(E=>{M.rotation.set(E*.7,E*1.1,0),M.scale.setScalar(1+.3*Math.sin(E*4))})},g=2+c;switch(e.fx){case"flame":x(h,u),c>=2&&p(Math.ceil(g/2),u,.011,.5);break;case"frost":d(h,.13),p(g,u,.012,-.12,{sy:1});{let m=un(h,.75),M=2+Math.floor(c/2);for(let _=0;_<M;_++){let E=Zn(zr,m,i),D=_%2?1:-1;E.position.set(s+D*(o+.012),t.y0+a*(_+.6)/(M+.4),r),E.scale.set(.012,.05+c*.004,.006),E.rotation.z=-D*.5}}break;case"shadow":{let m=bd(h,.5);p(g+1,h,.03,.22,{m,sy:1.2,rad:-.02}),p(Math.ceil(g/2),u,.01,.3),d(u,.07,2.2)}break;case"light":if(d(h,.2,1.4),p(g,u,.011,.22),c>=3&&v(16777215),c>=4){let m=Zn(Md,un(h,.9),i);m.position.set(s,t.y1,r),m.scale.setScalar(Math.min(o+.06,.17)),m.rotation.x=Math.PI/2,n.push(M=>{m.rotation.z=M*1.4})}break;case"water":d(h,.16,1.9),p(g+1,u,.009,-.55,{sy:3,orbit:.4});break;case"bolt":d(h,.1,1.2),p(g+1,u,.008,0,{jump:1,sy:5});break;case"leaf":p(g,h,.016,.1,{sy:.35,orbit:.9,rad:.02}),p(Math.ceil(g/2),u,.008,.2);break;case"blood":d(h,.1),p(g,h,.01,-.28,{sy:2.6,orbit:.2});break;case"wind":p(g+2,h,.008,.35,{sy:.5,orbit:5,rad:.05});break;case"star":p(g+3,h,.012,.03,{twinkle:1,sy:1,rad:.03}),d(u,.08,2),v(h);break;case"prism":{let m=d(16777215,.2,1.5),M=un(16777215,.95);p(g+1,16777215,.012,.25,{m:M}),n.push(_=>{m.material.color.setHSL(_*.25%1,1,.6),M.color.setHSL((_*.25+.4)%1,1,.65)}),c>=4&&v(16777215)}break}return m=>{for(let M of n)M(m)}}var S1=[.8,.95,1.15,1.45,1.85,2.4,3.1,3.9];function _d(i,e,t,n){let s=e/1.3,r=[],a=[],o=[],c=[],h=p=>[s*.78*p,s*(.52*Math.sin(p*1.75)-.12*p*p)],u=(p,d,x,v,g)=>{let m=Math.cos(x),M=Math.sin(x),_=(D,P)=>[p+D*m-P*M,d+D*M+P*m],E=new ei;return E.moveTo(p,d),t==="blade"?(E.lineTo(..._(v*.25,g)),E.lineTo(..._(v,0)),E.lineTo(..._(v*.25,-g))):(E.bezierCurveTo(..._(v*.2,g*1.25),..._(v*.8,g*1.1),..._(v,0)),E.bezierCurveTo(..._(v*.8,-g),..._(v*.2,-g*1.1),p,d)),[E,_(v,0)]};for(let p=0;p<i;p++){let d=i>1?p/(i-1):.5,[x,v]=h(d),g=-1.5+1.62*Math.pow(d,1.25),m=s*(.4+.5*d)*(d>.86?1-(d-.86)*1.6:1),[M,_]=u(x,v,g,m,m*n);r.push(M),o.push(_),c.push([x,v]),a.push(u(x,v,g+.06,m*.46,m*n*.8)[0])}let f=new ei;f.moveTo(0,-s*.05);for(let p=0;p<=8;p++){let[d,x]=h(p/8);f.lineTo(d,x+s*.045*(1-p/9))}for(let p=8;p>=0;p--){let[d,x]=h(p/8);f.lineTo(d,x-s*.05*(1-p/10))}return a.push(f),{shapes:r,cov:a,tips:o,bone:c,arm:f}}function E1(i){let e=new ei,t=i.tips,n=i.bone;e.moveTo(0,0);for(let r of n)e.lineTo(r[0],r[1]);let s=t.length;e.lineTo(t[s-1][0],t[s-1][1]);for(let r=s-2;r>=0;r--){let a=t[r+1],o=t[r],c=[(a[0]+o[0])/2,(a[1]+o[1])/2],h=[(n[r][0]+n[r+1][0])/2,(n[r][1]+n[r+1][1])/2];e.quadraticCurveTo(c[0]+(h[0]-c[0])*.3,c[1]+(h[1]-c[1])*.3,o[0],o[1])}return e.lineTo(0,-.04),e}function T1(i){let e=(t,n,s)=>{let r=Math.cos(t),a=Math.sin(t),o=(h,u)=>[h*r-u*a,h*a+u*r],c=new ei;return c.moveTo(0,0),c.bezierCurveTo(...o(n*.1,s*1.5),...o(n*1.05,s*1.3),...o(n,0)),c.bezierCurveTo(...o(n*1,-s*.9),...o(n*.3,-s*.7),0,0),c};return[[e(.62,i*.78,i*.3),e(-.5,i*.56,i*.24)],[e(.62,i*.42,i*.17),e(-.5,i*.3,i*.13)]]}function wd(i,e,t,n){let s=Math.max(0,Math.min(7,n.r||0)),r=S1[s],a=n.kind||"plume",o=new rt(n.c[0]).getHex(),c=new rt(n.c[1]||n.c[0]).getHex(),h=a==="flamme"||a==="lumiere",u=a==="ombre",f=a==="cristal",p=(k,S)=>new Bs({color:k,side:tn,emissive:k,emissiveIntensity:S}),d=h?un(o,.5):u?bd(o,.74):f?new Ft({color:o,transparent:!0,opacity:.6,side:tn,depthWrite:!1}):p(o,s>=4?.55:.38),x=h?un(c,.55):u?un(c,.4):f?un(c,.5):p(c,a==="meca"||s>=5?.7:.4),v=s>=4?un(c,.13):null,g=[],m=[],M=k=>{let S=r*k;if(a==="papillon"){let G=T1(S);return[[new Ei(G[0],12),d,0],[new Ei(G[1],10),x,.008]]}if(a==="cuir"){let G=_d(4+Math.min(2,Math.floor(s/2)),S,"blade",.03);return[[new Ei(E1(G),8),d,0],[new Ei(G.shapes.concat([G.arm]),4),x,.008]]}let A=a==="plume"||a==="flamme"||a==="ombre"?"leaf":"blade",y=_d(Math.min(14,7+s),S,A,a==="meca"?.1:A==="blade"?.085:.13);return[[new Ei(y.shapes,6),d,0],[new Ei(y.cov,6),x,.008]]},_=s>=6?[[1,0,0],[.6,-.62,-.12],[.44,.5,.12]]:s>=4?[[1,0,0],[.56,-.62,-.12]]:[[1,0,0]];for(let[k,S,A]of _){let y=M(k);for(let[G]of y)m.push(G);for(let G of[-1,1]){let Z=new vt;Z.position.set(G*.05,e+A,t-.01-Math.abs(S)*.04);let N=new vt;N.rotation.z=G*S,N.scale.x=G,Z.add(N);for(let[J,b,ee]of y){let $=new Ne(J,b);$.position.z=ee,$.castShadow=!b.transparent,$.userData.sharedGeo=!0,$.userData.noBake=!0,N.add($)}if(v){let J=new Ne(y[0][0],v);J.scale.setScalar(1.06),J.position.z=-.012,J.castShadow=!1,J.userData.sharedGeo=!0,N.add(J)}i.add(Z),g.push({piv:Z,s:G,k,tilt:S})}}let E=[];if(s>=5){let k=un(c,.9);for(let S=0;S<(s>=6?14:8);S++){let A=Zn(zr,k,i);E.push(A)}}let D=4.2-s*.32,P=0,L=(k,S=0)=>{P+=(S-P)*.12;for(let A of g){let y=Math.sin(k*D+Math.abs(A.tilt)*1.3)*(.34+.05*A.k),G=.2+y+Math.sin(k*1.3)*.03;A.piv.rotation.y=A.s*(G*P+(1.05+Math.sin(k*1.1)*.025)*(1-P)),A.piv.rotation.z=-A.s*.3*(1-P),A.piv.scale.setScalar(.72+.28*P)}E.forEach((A,y)=>{let G=k*(.5+y*.07)+y*2.4,Z=r*(.3+.6*(y*.37%1)),N=(y/E.length+k*.12)%1,J=Math.sin(N*Math.PI)*(.012+s*.002);A.position.set(Math.cos(G)*Z*(y%2?1:-1),e-.3+N*r*.9,t-.15-Math.abs(Math.sin(G))*.5),A.scale.set(J,J*1.7,J)})};return L(0,0),P=0,g[0].piv.userData.dispose=()=>{for(let k of m)k.dispose()},L}function Sd(i,e,t){let n=new ei;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new Ei(n,8),r=[un(16771504,.34),un(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],c=!0;for(let h of[-1,1]){let u=new vt;u.position.set(h*.05,e,t),o.forEach(([f,p,d],x)=>{let v=new Ne(s,r[x%2]);v.castShadow=!1,c||(v.userData.sharedGeo=!0),c=!1,v.scale.set(h*p,d*p*1.5,1),v.rotation.z=h*f,v.position.z=-x*.004,u.add(v)}),i.add(u),a.push({piv:u,s:h})}return h=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(h*1.8)*.16);r[0].opacity=.3+Math.sin(h*2.6)*.07}}var Qc={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Ed(i,e=0,t=null){Ur={},Pi=t;let n=new vt,s=(r,a,o,c)=>{let h=ce(Ot(a,r,.012),ii(e),0,c/2+r/2,0);n.add(h);let u=ce(kn(a/2,a*1.4,4),ii(e),0,c/2+r+a*.7,0);if(u.scale.z=.14,u.rotation.y=Math.PI/4,n.add(u),n.add(ce(Ot(a*.22,r*.9,.016),Wn(e),0,c/2+r*.47,0)),n.add(ce(Ot(o,.03,.035),Wn(e),0,c/2+.005,0)),n.add(ce(an(.016,.016,c,8),$o())),n.add(ce(Yt(.026,8,6),Wn(e),0,-c/2-.015,0)),e>=2&&n.add(ce(new Pn(.02),Ci(e),0,c/2+.005,.022)),e>=3&&n.add(ce(Ot(.008,r*.75,.02),Ci(e,1.4),0,c/2+r*.45,0)),e>=3&&n.add(ce(new Pn(.017),Ci(e),0,-c/2-.045,0)),e>=4)for(let f of[-1,1]){let p=ce(kn(.018,.09+(e-4)*.025,5),ii(e),f*o/2,c/2+.045,0);p.rotation.z=-f*.55,n.add(p);let d=ce(kn(.014,.06,5),Wn(e),f*o*.3,c/2-.03,0);d.rotation.z=Math.PI+f*.5,n.add(d)}if(e>=5)for(let f=0;f<3;f++)for(let p of[-1,1]){let d=ce(kn(.012,a*.9,4),Wn(e),p*a*.62,c/2+r*(.25+f*.22),0);d.rotation.z=-p*1.2,d.scale.z=.4,n.add(d)}};switch(i){case"epee":s(.78,.06,.22,.16);break;case"dague":s(.3,.045,.12,.11);break;case"espadon":s(1.15,.11,.36,.3);break;case"lamecle":s(.9,.055,.14,.14),n.add(ce(Ot(.09,.05,.014),Wn(e),.07,.86,0)),n.add(ce(Ot(.07,.05,.014),Wn(e),.06,.74,0));{let r=ce(new ti(.06,.014,8,20),Wn(e),0,-.14,0);n.add(r)}break;case"masse":n.add(ce(an(.018,.02,.7,8),Lr(),0,.25,0)),n.add(ce(Yt(.085,12,8),ii(e),0,.64,0));for(let r=0;r<6;r++){let a=r/6*Math.PI*2,o=ce(kn(.025,.07,5),Wn(e),Math.sin(a)*.1,.64,Math.cos(a)*.1);o.rotation.set(Math.PI/2*Math.cos(a),0,-Math.PI/2*Math.sin(a)),n.add(o)}e>=2&&n.add(ce(new Pn(.03),Ci(e),0,.745,0));break;case"guisarme":n.add(ce(an(.017,.017,1.9,8),Lr(),0,.5,0));{let r=ce(kn(.03,.26,4),ii(e),0,1.57,0);r.scale.z=.3,n.add(r);let a=ce(an(.2,.2,.014,16,!1),ii(e),.1,1.28,0);a.rotation.x=Math.PI/2,a.scale.set(1,1,1.25),n.add(a);let o=ce(kn(.04,.16,4),Wn(e),-.08,1.3,0);o.rotation.z=Math.PI/2,o.scale.z=.3,n.add(o),e>=2&&n.add(ce(new Pn(.024),Ci(e),.02,1.28,.02))}break;case"baton":n.add(ce(an(.016,.02,1.6,8),Lr(),0,.5,0));{let r=ce(new ti(.085,.014,8,20,Math.PI*1.4),ii(e),0,1.37,0);r.rotation.z=Math.PI*.8,n.add(r);let a=ce(Yt(.055,14,10),Ci(e,1.5),0,1.38,0);n.add(a);let o=new li(ni[e],.5,2.5);o.position.set(0,1.38,0),n.add(o)}break;case"arc":{let r=ce(new ti(.62,.016,8,28,Math.PI*.8),Lr(),-.5,.2,0);r.rotation.z=-Math.PI*.4,n.add(r);let a=.2+Math.sin(Math.PI*.4)*.62,o=-.5+Math.cos(Math.PI*.4)*.62;n.add(ce(an(.003,.003,(a-.2)*2,4),Bt(15658734,.5),o,.2,0)),n.add(ce(an(.022,.022,.14,8),$o(),.12,.2,0)),e>=2&&n.add(ce(new Pn(.02),Ci(e),.13,.3,0))}break;case"orbe":{n.add(ce(Yt(.09,18,14),Bt(ni[e],.1,.1,{emissive:ni[e],emissiveIntensity:1.1})));let r=ce(new ti(.13,.008,6,28),ii(e));if(r.rotation.x=1.2,n.add(r),e>=3){let o=ce(new ti(.15,.006,6,28),ii(e));o.rotation.set(.4,.8,0),n.add(o)}let a=new li(ni[e],.6,3);n.add(a)}break;case"grimoire":n.add(ce(Ot(.2,.27,.06),$o())),n.add(ce(Ot(.18,.25,.064),Bt(15327174,.9),.012,0,0)),n.add(ce(Ot(.205,.275,.05),Bt(Jo[e][1],.6,.3),-.004,0,0)),n.add(ce(new Pn(.03),Ci(e),0,0,.034));break;case"pistolet":n.add(ce(Ot(.035,.26,.03),ii(e),0,.16,0)),n.add(ce(an(.028,.028,.06,10),Wn(e),0,.07,0));{let r=ce(Ot(.034,.13,.04),Lr(),0,-.02,-.03);r.rotation.x=-.35,n.add(r)}break;case"repercuteur":{let r=ce(an(.075,.075,.9,14),ii(e),0,.35,0);n.add(r),n.add(ce(an(.09,.09,.06,14),Wn(e),0,.78,0)),n.add(ce(an(.085,.085,.07,14),Wn(e),0,.2,0)),n.add(ce(Yt(.055,12,8),Ci(e,1.6),0,.8,0)),n.add(ce(Ot(.04,.16,.05),$o(),0,.05,-.1))}break;case"harpe":{let r=e>=4?ii(e):Bt(14264636,.3,.85);n.add(ce(an(.02,.024,.95,8),r,.2,.42,0));let a=ce(new ti(.3,.02,8,18,Math.PI*.6),r,-.04,.72,0);a.rotation.z=Math.PI*.28,n.add(a);let o=ce(Ot(.05,.92,.07),Lr(),-.1,.36,0);o.rotation.z=-.52,n.add(o);for(let c=0;c<7;c++){let h=-.2+c*.055,u=.28+c*.09;n.add(ce(an(.0022,.0022,u,4),Bt(c%3?15985878:ni[e],.4,0,{emissive:c%3?0:ni[e],emissiveIntensity:.8}),h,.84-u/2-Math.abs(3-c)*.012,0))}}break;case"anneaux":{let r=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([a,o],c)=>{n.add(ce(new ti(.14,.018,8,24),ii(e),a,o,c*.02)),n.add(ce(Yt(.05,10,8),Bt(r[c],.3,0,{emissive:r[c],emissiveIntensity:.6}),a,o,c*.02))})}break}return n.userData.tick=Qc[i]?t?w1(n,t,Qc[i]):kr(n,e,Qc[i]):null,Pi=null,n}function Td(i=0){Ur={};let e=new ei;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new br(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=fn(0,0,0,ce(t,ii(i)));if(n.add(ce(Ot(.05,.66,.012),Wn(i),0,-.04,.05)),n.add(ce(Ot(.44,.05,.012),Wn(i),0,.06,.05)),n.add(ce(Yt(.06,12,8),Wn(i),0,.06,.05)),i>=2&&n.add(ce(new Pn(.034),Ci(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(ce(new Pn(.022),Ci(i),s,r,.05));return n.userData.tick=kr(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function Lt(i){Ur={};let e=new vt,t=Bt(i.b,.85),n=Bt(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,c=fn(0,r,0);e.add(c);let h=ce(_n([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);h.rotation.x=Math.PI/2,c.add(h);let u=fn(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,c.add(u),u.add(ce(bs(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let f=fn(0,i.neck,0);f.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(f);let p=i.hs||a*.55,d=ce(Yt(p,12,10),t);if(d.scale.set(.9,.95,1.1),f.add(d),i.beak){let M=ce(kn(p*.42,p*1.3,8),Bt(15116602,.5),0,-p*.15,p*1.25);M.rotation.x=Math.PI/2+.25,f.add(M)}else{let M=ce(_n([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Bt(i.sn,.85):t,0,-p*.2,p*.5);M.rotation.x=Math.PI/2,f.add(M),f.add(ce(Yt(p*.14,6,5),Bt(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let M of[-1,1]){if(f.add(ce(Yt(p*.13,8,6),Bt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),M*p*.72,p*.2,p*.55)),i.ear==="point"){let _=ce(kn(p*.3,p*.75,5),t,M*p*.5,p*.95,-p*.05);_.rotation.z=-M*.25,f.add(_)}else if(i.ear==="round")f.add(ce(Yt(p*.28,8,6),t,M*p*.65,p*.75,0));else if(i.ear==="long"){let _=ce(bs(p*1.25,p*.34,p*.14,8,.45),t,M*p*.5,p*.6,-p*.1);_.rotation.set(Math.PI+.2,0,M*.35),f.add(_)}if(i.horns){let _=ce(kn(p*.2,p*1.3,6),Bt(i.horns,.5),M*p*.5,p*.9,-p*.5);_.rotation.x=-1,_.rotation.z=-M*.2,f.add(_)}}if(i.horn){let M=ce(kn(p*.13,p*1.7,6),Bt(i.horn,.3,0,{emissive:i.horn,emissiveIntensity:.7}),0,p*.95,p*.5);M.rotation.x=.55,f.add(M)}if(i.mane){let M=ce(Ot(a*.16,i.neck*1.1,a*.5),Bt(i.mane,.9),0,i.neck*.5,-a*.62);u.add(M)}let x=[];for(let[M,_]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let E=fn(M*a*.62,-a*.3,_*s*.33);c.add(E);let D=o*.52,P=o*.5;E.add(ce(bs(D,i.lw*1.35,i.lw,8),t));let L=fn(0,-D,0);E.add(L),L.add(ce(bs(P,i.lw*.9,i.lw*.7,8),_>0||!i.d2?t:n));let k=ce(Yt(i.lw*1.05,8,6),Bt(i.hoof||1381658,.6),0,-P-i.lw*.2,i.paw?i.lw*.5:0);k.scale.set(1,.6,i.paw?1.5:1),L.add(k),x.push({hip:E,knee:L,ph:(M*_>0?0:Math.PI)+(_<0?.6:0)})}let v=fn(0,a*.35,-s*.48);if(c.add(v),i.tail==="bush"){let M=ce(bs(s*.4,a*.3,a*.14,8),t);M.rotation.x=1.9,v.add(M)}else if(i.tail==="hair"){let M=ce(bs(r*.55,a*.16,a*.26,8),Bt(i.mane||i.d,.9));M.rotation.x=.3,v.add(M)}else if(i.tail==="long"){let M=v;for(let E=0;E<6;E++){let D=fn(0,E?-s*.16:0,0);D.rotation.x=E?-.2:1.85,D.add(ce(bs(s*.17,a*(.42-E*.06),a*(.36-E*.06),8),t)),M.add(D),M=D}let _=ce(kn(a*.2,a*.5,4),n,0,-s*.2,0);_.rotation.x=Math.PI,M.add(_),e.userData.tail=v}else{let M=ce(Yt(a*.22,8,6),t);v.add(M)}let g=[];if(i.wings)for(let M of[-1,1]){let _=fn(M*a*.7,a*.75,s*.12);c.add(_);let E=new ei,D=i.wings;E.moveTo(0,0),E.quadraticCurveTo(D*.5,D*.5,D,D*.28),E.lineTo(D*.82,0),E.lineTo(D*.72,-D*.22),E.lineTo(D*.52,-D*.08),E.lineTo(D*.42,-D*.3),E.lineTo(D*.22,-D*.14),E.lineTo(D*.12,-D*.3),E.closePath();let P=ce(new Ei(E),Bt(i.wd||i.d,.8,0,{side:tn,emissive:i.wd||i.d,emissiveIntensity:.28}));P.scale.x=M,P.rotation.x=1.15,P.castShadow=!1,_.add(P),g.push({w:_,s:M})}(i.extra||(()=>{}))(e,c,f,{body:t,dark:n});let m=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(M,_){m+=M*(3+_*5)*(_>.02?1:0);let E=_>.02?.35+Math.min(1,_)*.3:0;for(let D of x){let P=Math.sin(m+D.ph);D.hip.rotation.x=P*E,D.knee.rotation.x=Math.max(0,Math.cos(m+D.ph))*E*1.3}c.position.y=r+(_>.02?Math.abs(Math.sin(m*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(m*2)*.04;for(let{w:D,s:P}of g)D.rotation.z=P*(.25+Math.sin(performance.now()/(_>.02?160:600))*(_>.02?.45:.1))}}}function Dr(i){Ur={};let e=new vt,t=Bt(921107,.35,.6),n=Bt(13225430,.2,.95),s=Bt(526346,.9),r=[];for(let f of[-.72,.78]){let p=fn(0,.34,f),d=ce(new ti(.27,.085,10,24),s);d.rotation.y=Math.PI/2,p.add(d);let x=ce(an(.12,.12,.08,12),n);x.rotation.z=Math.PI/2,p.add(x);for(let v=0;v<5;v++){let g=ce(Ot(.02,.5,.03),n);g.rotation.x=v/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=ce(Yt(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(ce(Ot(.3,.3,.55),Bt(2763312,.4,.8),0,.5,.05));let o=ce(Ot(.3,.1,.62),Bt(1708560,.8),0,.8,-.38);e.add(o);let c=ce(an(.025,.025,.8,8),n,0,.7,.66);c.rotation.x=-.42,e.add(c),e.add(ce(Ot(.66,.03,.03),n,0,1.06,.5));let h=ce(Yt(.2,12,8),t,0,.95,.62);h.scale.set(.9,.9,.7),e.add(h),e.add(ce(Yt(.075,10,8),Bt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(ce(Ot(.31,.02,.5),Bt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let f of[-1,1]){let p=ce(an(.035,.045,.7,8),n,f*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new Ho(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(f,p){for(let d of r)d.rotation.x+=f*p*22;e.position.y=0}}}var Kt=(i,e)=>(e!==1&&(i.group.scale.setScalar(e),i.seat={y:i.seat.y*e,z:(i.seat.z||0)*e},i.wide*=e),i),Oi={m0:{speed:1.7,make:()=>Lt({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>Lt({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=ce(Ot(.5,.08,.6),Bt(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>Lt({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=ce(_n([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Bt(Jo[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>Dr(ni[3])},m4:{speed:2.5,make:()=>Lt({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=ce(Yt(.2,10,8),Bt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>Lt({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=ce(kn(.06,.2,4),Bt(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>Lt({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=ce(_n([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Bt(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new li(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})},m7:{speed:1.7,make:()=>Kt(Lt({len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",paw:!0,wide:.5,b:9071178,d:5915696,sn:11569770}),1.05)},m8:{speed:1.7,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:6969930,d:4865586,mane:2761242}),.88)},m9:{speed:1.7,make:()=>Kt(Lt({len:1.6,h:.85,r:.36,neck:.25,neckA:1.3,headA:.2,hs:.22,snout:.24,lw:.08,ear:"point",tail:"short",wide:.56,b:5916214,d:3812386,horns:15327954}),1)},m10:{speed:1.9,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:12104878,d:6972768,mane:15327958}),1)},m11:{speed:1.9,make:()=>Kt(Lt({len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",paw:!0,wide:.5,b:15265010,d:12107980,sn:16777215,eye:4892927}),1.15)},m12:{speed:1.9,make:()=>Kt(Lt({len:1.8,h:1.3,r:.3,neck:.62,neckA:.55,headA:.7,hs:.17,snout:.26,lw:.055,ear:"point",tail:"short",wide:.55,b:9067058,d:5913118,horns:14207144}),1)},m13:{speed:2,make:()=>Kt(Lt({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:1710626,d:789522,eye:16765514,eyeGlow:!0}),1)},m14:{speed:2,make:()=>Kt(Lt({len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,b:15659766,d:13160664,sn:2763312}),1.05)},m15:{speed:2,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:2763312,d:1381658,mane:657934,hoof:13684944}),1.05)},m16:{speed:2.3,make:()=>Dr(16726586)},m17:{speed:2.4,make:()=>Kt(Lt({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:15238698,d:1708552,eye:16765514}),1.1)},m18:{speed:2.4,make:()=>Kt(Lt({len:2.4,h:1.3,r:.38,neck:.8,neckA:.5,headA:.7,hs:.22,snout:.42,lw:.08,tail:"long",paw:!0,wide:.66,wings:1.9,b:3828282,d:1718810,wd:5937738,eye:16765514}),1)},m19:{speed:2.6999999999999997,make:()=>Dr(3718648)},m20:{speed:2.4,make:()=>Kt(Lt({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:14198880,d:9071162,mane:8014362}),1.15)},m21:{speed:2.5,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16053503,d:13159640,mane:12574975,horn:12574975}),1.05)},m22:{speed:2.5,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16777215,d:14212328,mane:15265010,wd:16777215,wings:1.9}),1.05)},m23:{speed:2.5,make:()=>Kt(Lt({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:15790324,d:2763312,eye:8376575,eyeGlow:!0}),1.2)},m24:{speed:2.5,make:()=>Kt(Lt({len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",paw:!0,wide:.62,beak:!0,wings:1.6,b:2763317,d:1381658,wd:4868698,eye:16757575,eyeGlow:!0}),1.05)},m25:{speed:2.8,make:()=>Dr(16096779)},m26:{speed:2.5,make:()=>Kt(Lt({len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",paw:!0,wide:.5,b:12576511,d:8368344,sn:15267583,eye:10484991,eyeGlow:!0}),1.45)},m27:{speed:2.8,make:()=>Kt(Lt({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:8002074,d:3803658,wd:11545114,horns:2759194,eye:16765514,eyeGlow:!0}),1)},m28:{speed:2.8,make:()=>Kt(Lt({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:12576511,d:6986440,wd:15267583,horns:16777215,eye:4892927,eyeGlow:!0}),1)},m29:{speed:2.8,make:()=>Kt(Lt({len:1.8,h:1.3,r:.3,neck:.62,neckA:.55,headA:.7,hs:.17,snout:.26,lw:.055,ear:"point",tail:"short",wide:.55,b:1709092,d:657424,horns:9133302,eye:9133302,eyeGlow:!0}),1.25)},m30:{speed:2.8,make:()=>Kt(Lt({len:2.6,h:.9,r:.36,neck:.5,neckA:1.2,headA:.4,hs:.2,snout:.36,lw:.09,tail:"long",paw:!0,wide:.66,b:3805704,d:1705988,sn:16734746,eye:16742938,eyeGlow:!0}),1.15)},m31:{speed:3.0999999999999996,make:()=>Dr(9133302)},m32:{speed:3.2,make:()=>Kt(Lt({len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",paw:!0,wide:.62,beak:!0,wings:2.4,b:16742938,d:16760906,wd:16769162,eye:16777215,eyeGlow:!0}),1.1)},m33:{speed:3.2,make:()=>Kt(Lt({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:16774872,d:14271098,wd:16777215,horns:16766314,eye:8380671,eyeGlow:!0}),1.15)},m34:{speed:3.2,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16775920,d:15786160,mane:16766314,horn:16777215,wd:16773560,wings:2}),1.1)},m35:{speed:3.2,make:()=>Kt(Lt({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:15784096,d:11569738,mane:16773560,wd:16777215,wings:2.2}),1.3)},m36:{speed:3.5,make:()=>Dr(61695)},m37:{speed:3.6,make:()=>Kt(Lt({len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",wide:.6,b:16318207,d:12577264,mane:10484991,wd:15269375,horn:10484991,wings:2.6,eye:10484991,eyeGlow:!0}),1.2)},m38:{speed:3.6,make:()=>Kt(Lt({len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,lw:.11,tail:"long",paw:!0,wide:.8,wings:2.6,b:15269375,d:10484991,wd:16777215,horns:16766314,eye:10484991,eyeGlow:!0}),1.3)},m39:{speed:3.6,make:()=>Kt(Lt({len:1.95,h:1,r:.3,neck:.4,neckA:.95,headA:.3,hs:.21,snout:.13,lw:.07,ear:"round",tail:"long",paw:!0,wide:.58,b:10484991,d:4892856,mane:16777215,wd:15269375,wings:2.8,eye:16777215,eyeGlow:!0}),1.35)}},Ad={wolf:()=>Lt({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>Lt({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=Oi.m5.make();return i.group.scale.setScalar(.85),i}};var nh={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},tl=["neutre","ninja","souverain","digne","humble","timide"],nl=["neutre","ninja","levitation"],Cd=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],th={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},Vs=.252;function A1(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[Vs,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function _a(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:nn(s.rx,r.rx,n),rz:nn(s.rz,r.rz,n),rb:nn(s.rb??s.rz,r.rb??r.rz,n),z:nn(s.z,r.z,n)}}return i[i.length-1]}var Qo=(i,e,t,n=1)=>{let s=_a(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/Vs)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function el(i,e,t){let n=_a(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var Qi=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Pd(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?nn(.184,.128,Qi((i-.8)/.5)):i<1.8?nn(.128,.088,Qi((i-1.3)/.5)):nn(.088,.04,Qi((i-1.8)/.7))}function Id(i,e,t,n=28,s=6){let r=[],a=[],o=Vs-.006,c=s+1;for(let f=0;f<n;f++){let p=-Math.PI+f/n*2*Math.PI,d=e(Math.abs(p));for(let x=0;x<=s;x++)r.push(...Qo(i,p,nn(d,o,Math.sin(x/s*Math.PI/2)),t))}for(let f=0;f<n;f++)for(let p=0;p<s;p++){let d=f*c+p,x=(f+1)%n*c+p,v=d+1,g=x+1;a.push(d,x,v,x,g,v)}let h=r.length/3;r.push(0,Vs+(t-1)*.11,0);for(let f=0;f<n;f++)a.push(h,f*c+s,(f+1)%n*c+s);let u=new qt;return u.setAttribute("position",new _t(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function ji(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let c=a;c>=0;c--){let h=c/a,u=h<.22?nn(.72,1,h/.22):Math.max(.03,1-Math.pow((h-.22)/.78,1.5));o.push({y:-i*h,x:s*i*h*h,z:n*i*h*h,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),_n(o,r)}var ci=(i,e=0,t="#000000")=>"#"+new rt(i).lerp(new rt(t),e).getHexString();function Rd(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",c=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let h=(y,G)=>Math.asin(Math.max(-.99,Math.min(.99,y/_a(e,G).rx))),u=(y,G)=>(.5+h(y,G)/c)*n,f=y=>(1-y/Vs)*s,p=s/Vs,d=(y,G)=>n/c/(_a(e,G).rx*Math.cos(h(y,G))),x=(y,G,Z,N)=>{a.save(),a.translate(u(y,G),f(G)),a.scale(Z*d(y,G),-p),N(),a.restore()};if(i.hair){a.fillStyle=ci(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let y=0;y<n;y+=2){let G=Math.abs((y/n-.5)*c);a.fillRect(y,0,2,f(Pd(G)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let v=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(v){let y=v==="pleine",G=(.5-1.75/c)*n,Z=(.5+1.75/c)*n;if(y){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(G,f(.125));for(let N=0;N<=40;N++){let J=N/40,b=-1.75+J*3.5,ee=Math.abs(b)>1.05?nn(.066,.125,Qi((Math.abs(b)-1.05)/.6)):.05+.016*Qi(Math.abs(b)/1.05);a.lineTo((.5+b/c)*n,f(ee))}a.lineTo(Z,s),a.lineTo(G,s),a.closePath(),a.fill(),x(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let N=a.createLinearGradient(0,s,0,f(.066));N.addColorStop(0,ci(i.hairColor)),N.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=N,a.fillRect(G,f(.066),Z-G,s-f(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,x(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}x(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=y?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let y of[-1,1])x(y*.047,.071,y,()=>{let G=a.createRadialGradient(0,0,0,0,0,.02);G.addColorStop(0,`rgba(238,104,104,${g})`),G.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=G,a.fillRect(-.02,-.02,.04,.04)});x(0,.064,1,()=>{let y=i.nose;a.strokeStyle=ci(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*y,-.0052*y),a.quadraticCurveTo(0,-.0072*y,.0042*y,-.0052*y),a.stroke(),a.globalAlpha=1}),x(0,.037,1,()=>{let y=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-y*.78,0),a.quadraticCurveTo(0,-.0082,y*.78,0),a.quadraticCurveTo(0,-.0016,-y*.78,0),a.fill(),a.beginPath(),a.moveTo(-y*.85,0),a.quadraticCurveTo(-y*.3,.0034,0,.0016),a.quadraticCurveTo(y*.3,.0034,y*.85,0),a.quadraticCurveTo(0,-.0012,-y*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=ci(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-y,9e-4),a.quadraticCurveTo(0,-.0026,y,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-y*.36,-.006),a.quadraticCurveTo(0,-.0074,y*.36,-.006),a.stroke(),a.globalAlpha=1)});let m=i.eyes*(o?1.06:1),M=.0202*m,_=(o?.0176:.0136)*m,E=(o?.0114:.0096)*m,D=.1,P=.0398*i.eyeGap+(m-1)*.004,L=ci(i.hairColor,.72,"#120c10"),k=i.eyeColor;for(let y of[-1,1])x(y*P,D,y,()=>{if(t.closed){if(a.strokeStyle=L,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-M,.001),a.quadraticCurveTo(0,-E*.95,M*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let W of[.45,.75,1])a.beginPath(),a.moveTo(M*W,-E*.5*(1.1-W)-4e-4),a.lineTo(M*(W+.14),-E*.5*(1.1-W)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-M,-.0012),a.bezierCurveTo(-M*.6,_*1.2,M*.4,_*1.32,M,.0032),a.bezierCurveTo(M*.62,-E*1.15,-M*.45,-E*1.2,-M,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-M*1.2,-E*1.6,M*2.4,(_+E)*1.8);let G=a.createLinearGradient(0,_*1.05,0,_*.15);G.addColorStop(0,"rgba(112,122,168,.8)"),G.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=G,a.fillRect(-M*1.2,0,M*2.4,_*1.5);let Z=-M*.05,N=M*.61,J=Math.max(_,E)*1.14,b=(_-E)*.3,ee=a.createLinearGradient(0,b+J,0,b-J);ee.addColorStop(0,ci(k,.74)),ee.addColorStop(.48,ci(k,.12)),ee.addColorStop(1,ci(k,.42,"#ffffff")),a.fillStyle=ee,a.beginPath(),a.ellipse(Z,b,N,J,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=ci(k,.78),a.stroke(),a.fillStyle=ci(k,.9),a.beginPath(),a.ellipse(Z,b+J*.1,N*.42,J*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=ci(k,.62,"#ffffff"),a.beginPath(),a.ellipse(Z,b-J*.58,N*.6,J*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(Z-y*N*.36,b+J*.42,N*.3,J*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(Z+y*N*.42,b-J*.4,N*.14,J*.11,0,0,7),a.fill(),a.restore();let $=o?.0037:.0028;if(a.fillStyle=L,a.beginPath(),a.moveTo(-M*1.03,-.0016),a.bezierCurveTo(-M*.6,_*1.2,M*.4,_*1.32,M,.0032),a.lineTo(M*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(M*.55,_*1.32+$*1.7,-M*.5,_*1.2+$*1.2,-M*1.06,3e-4),a.closePath(),a.fill(),o)for(let[W,ie,Se,be]of[[M*.96,.0062,M*1.34,.012],[M*.72,_*.95,M*1.02,_*1.62]])a.beginPath(),a.moveTo(W-.0024,ie),a.lineTo(Se,be),a.lineTo(W+.0012,ie-.0018),a.closePath(),a.fill();a.strokeStyle=L,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(M*.98,.0012),a.bezierCurveTo(M*.78,-E*.9,M*.36,-E*1.14,-M*.08,-E*1.12),a.stroke(),a.strokeStyle=ci(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-M*.55,_*1.16+$+.0034),a.quadraticCurveTo(M*.1,_*1.36+$+.0042,M*.82,_*.95+$+.004),a.stroke(),a.globalAlpha=1});let S=ci(i.hairColor,.3);for(let y of[-1,1])x(y*P,D+_*1.32+(o?.0128:.0108),y,()=>{let G=o?.0027:.0046,Z=i.brows,N=-Z*.0055,J=Z*.0034+8e-4,b=N*.3+J*.7+.0034;a.fillStyle=S,a.beginPath(),a.moveTo(-M*1.05,N-G*.5),a.quadraticCurveTo(0,b+G*.15,M*1.22,J),a.quadraticCurveTo(0,b+G*.95+8e-4,-M*1.05,N+G*.5),a.closePath(),a.fill()});let A=new Vn(r);return A.colorSpace=en,A.anisotropy=4,A}function R1(i,e,t){let n=i.gender==="f",s=new vt,r=A1(i.jaw*(n?.92:1.05)),a=Ri(r,3),o=e.shadow?t.skin:jc(16777215,{map:Rd(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let c=gd(a,32);{let d=c.attributes.position,x=c.attributes.normal,v=new X,g=new X;for(let m=0;m<d.count;m++)v.set(d.getX(m),d.getY(m)-.118,d.getZ(m)+.012).normalize(),g.set(x.getX(m),x.getY(m),x.getZ(m)).lerp(v,.8).normalize(),x.setXYZ(m,g.x,g.y,g.z)}let h=ce(c,o);s.add(h);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let d=o.map,x=Rd(i,r,{closed:!0});u=v=>{o.map=v?x:d},s.userData.dispose=()=>{d.dispose(),x.dispose()}}for(let d of[-1,1]){let x=ce(Yt(.024,10,8),t.skin,d*.0905,.098,-.006);x.scale.set(.42,1,.72),x.rotation.y=d*.25,s.add(x)}let f=ce(_n([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,el(r,0,.068)-.0035);if(f.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),f.userData.noBake=!0,f.castShadow=!1,s.add(f),!n&&i.beard==="pleine"){let d=ce(_n(Ri([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(d)}let p=C1(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function C1(i,e,t,n){let s=new vt,r=i.hair,a=new vt,o=new vt,c=new vt;if(a.name="top",o.name="front",c.name="back",s.add(a,o,c),r==="rase")return s;let h=(m,M,_,E,D,P=0,L=1.06)=>{let k=Qo(n,_,E,L),S=ce(M,e,k[0],k[1],k[2]);return S.rotation.order="YXZ",S.rotation.set(-D,_,P),m.add(S),S},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(ce(Id(n,Pd,u),e));let f=(m,M=.021,_=.36)=>m.forEach(([E,D,P,L,k])=>h(o,ji(D,P,M,-.1,k||0),E,.211-Math.abs(E)*.016,_,L,u+.012)),p=(m,M=.04)=>{for(let _ of[-1,1])h(o,ji(m,M,.022,-.05,0),_*1.08,.172,.1,-_*.06,u),h(o,ji(m*.7,M*.8,.02,-.05,0),_*1.32,.16,.1,_*.06,u)},d=(m,M,_,E=1.12,D=-.45,P=.236,L=.2)=>{for(let k=0;k<m;k++)h(a,ji(M*(.9+k*7%5*.05),_,.03,D),L+k/m*6.2832,P,E,k%2?.14:-.12,u)},x=(m,M,_,E,D,P,L,k,S,A=.026)=>{for(let y=0;y<M;y++){let G=nn(_,E,M>1?y/(M-1):.5);h(m,ji(P*(.92+y*5%4*.05),L,A,S),G,D,k,y%2?.1:-.1,u)}},v=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":f(v),p(t?.11:.085),d(9,.105,.062),x(a,9,1.5,4.78,.2,.1,.06,.5,-.3),x(c,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":f([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[m,M,_,E,D]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])h(a,ji(E,.074,.05,.14),m,M,_,D,.99);x(c,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":f(v),p(.19,.045),d(9,.12,.066),x(c,9,1.45,4.83,.17,.25,.066,.13,.12,.03),x(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":f(t?g:v),p(.34,.044),d(9,.13,.068),x(c,9,1.4,4.88,.17,.56,.074,.1,.03,.032),x(c,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":f(v),p(t?.15:.1),d(8,.1,.062,1.2,-.5);{let m=ce(Yt(.026,10,8),e,...Qo(n,Math.PI,.2,1.1));a.add(m);for(let[M,_,E]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])h(a,ji(_,.066,.046,-.3,0),Math.PI,.2,E,M,1.14)}break;case"chignon":f(t?g:v),p(t?.13:.08),d(8,.095,.06,1.2,-.5);{let m=Qo(n,Math.PI,.185,1.3),M=ce(Yt(.05,14,10),e,m[0],m[1],m[2]);M.scale.set(1,.92,.9),a.add(M);for(let _=0;_<5;_++){let E=ce(ji(.06,.035,.026,.3),e,m[0],m[1],m[2]-.01);E.rotation.set(-1.9,0,_*1.257),a.add(E)}}break;case"boucles":f([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[m,M,_,E]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let D=0;D<M;D++){let P=m<.19?nn(1.15,5.13,D/(M-1)):D/M*6.2832+m*9;m<.215&&Math.cos(P)>.5||h(m<.15?c:a,ji(_,.07,.052,.55,D%2?.25:-.25),P,m,E,D%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function Ss(i={}){let e=Object.assign({},nh,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,c=.5+s*.5,h=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},f=(C,q)=>h.glow?{emissive:C,emissiveIntensity:q}:void 0,p={skin:jc(e.skin),hair:Mn(e.hairColor)},d=p.skin,x=Mn(h.c[0],f(h.c[0],.1)),v=Mn(h.c[1],f(h.c[1],.1)),g=Mn(h.c[2],f(h.c[2],.22)),m=Mn(1907492),M=Mn(1250072),_=Mn(5922920),E=C=>C._dbl||(C._dbl=Object.assign(C.clone(),{side:tn})),D=[],P={},L=C=>P["m"+C]||(P["m"+C]=Ir(C)),k=C=>P["d"+C]||(P["d"+C]=Ir(C,!0)),S=C=>P["g"+C]||(P["g"+C]=Mn(ni[C],{emissive:ni[C],emissiveIntensity:.9})),A=C=>(C.userData.joint=!0,C),y=C=>(C.userData.keep=!0,C),G=.47*e.legs,Z=.44*e.legs,N=G+Z+.105,J=new vt,b=A(fn(0,N,0));J.add(b);let ee=A(fn(0,0,0));b.add(ee);let $={hips:b,spine:ee},W=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([C,q,se,j,Me],pe)=>{let de=pe===1||pe===2?e.hips:pe===3?e.waist:pe===4||pe===5?e.chest:1;return{y:C,rx:q*(pe>7?1:s)*de,rz:se*(pe>7?1:c)*(pe===4||pe===5?e.chest:pe===3?(1+e.waist)/2:1),rb:j*(pe>7?1:c)*(pe===4||pe===5?(1+e.chest)/2:1),z:Me}}),ie=Ri(W,3),Se=C=>_a(ie,C),be=W[3],he=W[1],Re=C=>{let q=Se(C);return q.z+q.rz},we=h.cut,Xe=we==="plate",Ve=(n?.088:.082)*s*e.hips;ee.add(ce(_n(ie,24),we==="cape"?_:x));let at=n?.037:.046;ee.add(ce(an(at,at*1.1,.12,12),d,0,.555,-.006));let Ke=A(fn(0,.57,.012)),Oe=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);Ke.scale.setScalar(Oe),ee.add(Ke),$.head=Ke;let $e=R1(e,t,p);Ke.add($e);let Y=(C,q)=>{let se=C.attributes.position,j=C.index.array,Me=[];for(let pe=0;pe<j.length;pe+=3){let de=j[pe],qe=j[pe+1],nt=j[pe+2];q((se.getX(de)+se.getX(qe)+se.getX(nt))/3,(se.getY(de)+se.getY(qe)+se.getY(nt))/3,(se.getZ(de)+se.getZ(qe)+se.getZ(nt))/3)&&Me.push(de,qe,nt)}return C.setIndex(Me),C},Ie=(C,q,se,j=24)=>{let Me=Ri(C,3),pe=_n(Me,j,!1,!1);if(se){let de=pe.index.array,qe=[];for(let nt=0;nt<de.length/6;nt++){let xt=Math.floor(nt/j),Ct=(nt%j+.5)/j*6.2832;if(se(Ct>Math.PI?Ct-6.2832:Ct,(Me[xt].y+Me[xt+1].y)/2))for(let Et=0;Et<6;Et++)qe.push(de[nt*6+Et])}pe.setIndex(qe)}return ce(pe,E(q))},me=(C,q,se,j,Me=.168)=>{q=Math.max(q,(Ve+.098*o)/he.rx),ee.add(Ie([{y:C,rx:he.rx*q,rz:he.rz*q*1.05,rb:he.rb*q*1.05},{y:nn(C,-.03,.55),rx:he.rx*nn(1.09,q,.6),rz:he.rz*nn(1.12,q*1.05,.6),rb:he.rb*nn(1.12,q*1.05,.6)},{y:-.03,rx:Math.max(he.rx*1.075,Ve+.1*o),rz:he.rz*1.13,rb:he.rb*1.13},{y:Me,rx:be.rx*1.06,rz:be.rz*1.1,rb:be.rb*1.1}],se,j))},Ae=(C=.27)=>(q,se)=>!(Math.abs(q)<C&&se<.1),ve=(C,q,se,j=1.07)=>{let Me=Se(C),pe=Se(q);ee.add(ce(_n([{y:C,rx:Me.rx*j,rz:Me.rz*j,rb:Me.rb*j,z:Me.z},{y:q,rx:pe.rx*j,rz:pe.rz*j,rb:pe.rb*j,z:pe.z}],24),se))},Ue=()=>{ve(.126,.174,M,1.14),ee.add(ce(Ot(.052,.052,.02),g,0,.15,Re(.15)*1.14+.004))},Fe=(C,q,se,j,Me,pe=1.014,de=10)=>{let qe=[],nt=[];for(let Et=0;Et<=de;Et++){let In=Et/de,kt=nn(C,q,In),ln=nn(se,j,In),Pt=Se(kt),Xt=Pt.z+Pt.rz*Math.sqrt(Math.max(.05,1-(ln/Pt.rx)**2))*pe+.002;if(qe.push(-ln,kt,Xt,ln,kt,Xt),Et<de){let Ln=Et*2;nt.push(Ln,Ln+1,Ln+2,Ln+1,Ln+3,Ln+2)}}let xt=new qt;xt.setAttribute("position",new _t(qe,3)),xt.setIndex(nt),xt.computeVertexNormals();let Ct=ce(xt,E(Me));Ct.castShadow=!1,ee.add(Ct)},z=(C,q,se,j=1)=>ee.add(Ie([{y:.488,rx:.086*j,rz:.07*j,rb:.074*j,z:-.004},{y:.488+C,rx:.064*j,rz:.058*j,rb:.062*j,z:-.006}],q,se?Me=>Math.abs(Me)>se:null,20)),R=(n?.168:.208)*a,te=.447,xe=(n?.8:1)*o,_e=.275*e.arms,Te=.25*e.arms,tt=we==="robe",ze=we==="cape"?_:x,Ze=we==="apron"?d:ze,it=()=>_n(Ri([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let C of[-1,1]){let q=C<0?"M":"O",se=A(fn(C*R,te,0));ee.add(se),se.add(ce($i(_e,[[0,.046*xe],[.16,.051*xe],[.5,.043*xe],[.85,.037*xe],[1,.035*xe]],12),ze));let j=A(fn(0,-_e,0));if(se.add(j),t.oneArm&&C===-1)j.add(ce(Yt(.04*xe,8,6),ze));else{j.add(ce($i(Te,tt?[[0,.042*xe],[.5,.06*xe],[1,.082*xe,0,.8]]:[[0,.036*xe],[.22,.041*xe],[.6,.034*xe],[1,.026*xe]],12,tt?.15:.55),Ze));let pe=n?.88:1,de=ce(it(),we==="plate"?v:d,0,-Te,0);de.scale.setScalar(pe),j.add(de);let qe=ce($i(.045,[[0,.0095],[1,.0065]],8),we==="plate"?v:d,0,-Te-.022*pe,.028*pe);qe.rotation.x=-.75,qe.scale.setScalar(pe),j.add(qe),we!=="apron"&&!tt&&j.add(ce(an(.031*xe,.034*xe,.034,12),we==="cape"?v:g,0,-Te+.03,0)),$["hand"+q]=y(fn(0,-Te-.058*pe,.004)),j.add($["hand"+q])}$["arm"+q]=se,$["elbow"+q]=j}$.armL=$.armM,$.armR=$.armO,$.elbowL=$.elbowM,$.elbowR=$.elbowO;let ut=Ve,ye=o,gt=we==="track"||we==="suit"||we==="tail"||we==="plate"?x:v,ct=()=>{let C=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([se,j,Me])=>({y:se,rx:j,rz:Me,z:.036-Me})),q=_n(Ri(C,2),12);return q.rotateX(Math.PI/2),q};for(let C of[-1,1]){let q=C<0?"M":"O",se=A(fn(C*ut,-.02,0));b.add(se),se.add(ce($i(G,n?[[0,.09*ye],[.3,.09*ye],[.7,.066*ye],[1,.052*ye]]:[[0,.086*ye],[.3,.088*ye],[.7,.069*ye],[1,.056*ye]],14),gt));let j=A(fn(0,-G,0));se.add(j);let Me=n?.92:1;j.add(ce($i(Z,[[0,.054*ye*Me],[.25,.06*ye*Me,-.008],[.7,.043*ye*Me],[1,.036*ye*Me]],12),gt)),j.add(ce($i(Z*.56,[[0,.054*ye*Me*1.16],[.4,.047*ye*Me*1.14],[1,.04*ye*Me*1.12]],12,.2),m,0,-Z*.44,-.002)),j.add(ce(an(.062*ye*Me,.058*ye*Me,.03,12),we==="plate"?g:m,0,-Z*.44,-.004));let pe=ce(ct(),m,0,-Z-.049,.004);if(pe.scale.setScalar(n?.9:1),j.add(pe),u.jambieres!=null){let de=u.jambieres;j.add(ce($i(Z*.8,[[0,.07*ye],[.3,.074*ye,-.004],[1,.052*ye]],12,.15),L(de),0,-Z*.1,.004));let qe=ce(Yt(.062*ye,10,8),k(de),0,0,.03);if(qe.scale.set(1,1.2,.8),j.add(qe),de>=2&&j.add(ce(new Pn(.016),S(de),0,0,.082*ye)),de>=5){let xt=kr(j,de,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});xt&&D.push(xt)}let nt=ce(ct(),k(de),0,-Z-.044,.008);nt.scale.set(1.12,1.1,1.06),j.add(nt)}$["leg"+q]=se,$["knee"+q]=j}$.legL=$.legM,$.legR=$.legO,$.kneeL=$.kneeM,$.kneeR=$.kneeO;let ht=!1,lt=()=>{for(let C of[-1,1])$[C<0?"armM":"armO"].add(ce(Ot(.008,_e*.86,.022),g,C*.05*xe,-_e*.5,0)),$[C<0?"legM":"legO"].add(ce(Ot(.008,G*.9,.024),g,C*.079*ye,-G*.5,0)),$[C<0?"kneeM":"kneeO"].add(ce(Ot(.008,Z*.42,.02),g,C*.055*ye,-Z*.2,0))};switch(we){case"uniform":me(-.125,1.1,x),Ue(),Fe(.175,.488,.009,.009,g),z(.05,g,.17);for(let C of[-1,1]){let q=ce(Ot(.085,.014,.05),g,C*R*.86,.478,0);q.rotation.z=-C*.32,ee.add(q)}break;case"track":Fe(.02,.5,.007,.007,g),z(.06,g,.17,1.04),ve(-.045,-.015,v,1.03),lt();break;case"apron":ee.add(Ie([{y:-G*.92,rx:he.rx*1.24,rz:he.rz*1.3},{y:-.03,rx:he.rx*1.08,rz:he.rz*1.15},{y:.168,rx:be.rx*1.06,rz:be.rz*1.13}],g,C=>Math.abs(C)<1.25)),Fe(.17,.43,.1,.075,g,1.03),Ue(),z(.03,x,.35);break;case"coat":me(-G*.94,n?1.5:1.32,x,Ae()),Ue(),Fe(.3,.5,.012,.045,g),z(.07,v,.45,1.16);break;case"blouse":me(-G*.8,1.22,x,Ae(.14)),Fe(.36,.5,.01,.04,v),z(.04,x,.4,1.1);{let C=ce(Ot(.055,.05,.012),g,R*.42,.33,Re(.33)*.96+.006);ee.add(C),$.armM.add(ce(an(.06*xe,.06*xe,.05,12),g,0,-.12,0))}break;case"robe":me(-(N-.1),n?1.9:1.55,x),ht=!0,ve(.125,.2,g,1.085),Fe(.2,.5,.01,.05,g),z(.045,g,.35,1.12);{let C=ce(Ot(.05,.34,.012),g,0,-.03,he.rz*1.24);C.rotation.x=-.08,ee.add(C)}break;case"suit":me(-.12,1.07,x,Ae(.14)),Fe(.24,.5,.006,.05,g),Fe(.25,.48,.014,.012,v,1.03),z(.035,g,.35);break;case"cape":{me(-.15,1.12,_),Ue(),ee.add(ce(_n(Ri([{y:-N*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),x)),ee.add(Ie([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],x));{let C=ce(Yt(.075,12,8),x,0,.535,-.085);C.scale.set(1.25,.6,.8),ee.add(C)}ee.add(ce(new Pn(.024),S(2),0,.455,.12));break}case"plate":{for(let C of[-1,1]){let q=ce(Yt(.098,12,8),x,C*R*1.02,te+.036,0);q.scale.set(1.15,.72,1.1),ee.add(q),$[C<0?"elbowM":"elbowO"].add(ce($i(Te*.7,[[0,.052*xe],[1,.04*xe]],12,.2),x,0,-.02,0))}ee.add(ce(new Pn(.028),Mn(h.c[2],{emissive:h.c[2],emissiveIntensity:.8}),0,.36,Re(.36)+.012)),me(-G*.5,1.22,g,Ae(.14)),Ue(),z(.05,v,.17,1.1);break}case"tail":{Fe(.2,.5,.03,.06,g),me(-.1,1.05,x,C=>Math.abs(C)>.6);for(let C of[-1,1]){let q=ce(Ot(.115,.44,.014),v,C*.064,-.22,-he.rb*1.12);q.rotation.x=.1,ee.add(q)}for(let C of[-1,1]){let q=ce(kn(.022,.05,4),v,C*.024,.497,Re(.49)+.014);q.rotation.z=C*Math.PI/2,q.scale.z=.5,ee.add(q)}z(.035,g,.35);break}}if(u.plastron!=null){let C=u.plastron,q=ie.filter(se=>se.y>=.175&&se.y<=.492).map(se=>({y:se.y,rx:se.rx*1.09,rz:se.rz*1.14,rb:se.rb*1.12,z:se.z}));q.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),ee.add(ce(_n(q,24,!1,!1),E(L(C)))),ve(.175,.2,k(C),1.16);for(let se of[-1,1]){let j=ce(Yt(.094,12,8),k(C),se*R*1.04,te+.042,0);j.scale.set(1.2+C*.03,.7,1.14),ee.add(j);let Me=ce(Yt(.075,12,8),L(C),se*R*1.12,te-.02,0);if(Me.scale.set(1,.8,1.1),ee.add(Me),C>=4){let pe=ce(kn(.028,.11,6),L(C),se*R*1.2,te+.095,0);pe.rotation.z=-se*.7,ee.add(pe)}}if(Fe(.2,.49,.012,.012,k(C),1.16),C>=2&&ee.add(ce(new Pn(.03),S(C),0,.375,Re(.375)*1.14+.016)),C>=4)for(let se of[-1,1])ee.add(ce(new Pn(.02),S(C),se*R*1.04,te+.1,.03));if(C>=3)for(let se of[-1,1]){let j=kr(ee,C,{x:se*R*1.06,y0:te+.07,y1:te+(C>=5?.2:.16),r:.05,mode:"lite"});j&&D.push(j)}C>=6&&D.push(Sd(ee,.4,-(W[5].rb+.03)))}if(u.casque!=null){let C=u.casque,q=$e.userData.rings,se=E(L(C)),j=pe=>pe<.55?.138:pe<1?nn(.138,.05,Qi((pe-.55)/.3)):pe<2.2?.05:.035;Ke.add(ce(Id(q,j,1.13,32,7),se)),Ke.add(ce(Ot(.016,.07,.014),k(C),0,.118,el(q,0,.12)*1.13+.006));{let pe=ce(_n(Ri([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),k(C),0,.262,0);Ke.add(pe)}if(C>=2&&Ke.add(ce(new Pn(.015),S(C),0,.2,el(q,0,.2)*1.13+.012)),C>=3){let pe=ce(_n(Ri([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),Mn(ni[C]),0,.285,0);Ke.add(pe)}if(C>=5)for(let pe of[-1,1]){let de=ce(kn(.024,.13,6),L(C),pe*.112,.215,-.02);de.rotation.z=-pe*.9,Ke.add(de)}if(C>=5){let pe=kr(Ke,C,{y0:C>=6?.3:.27,y1:C>=6?.33:.38,r:C>=6?.1:.03,z:-.02,mode:C>=6?"halo":"lite"});pe&&D.push(pe)}let Me=$e.getObjectByName("hair");if(Me){Me.remove(Me.getObjectByName("top"));let pe=Me.getObjectByName("front");pe.children.slice(0,Math.max(0,pe.children.length-4)).forEach(de=>pe.remove(de))}}let je=y(fn(0,.3,-(W[4].rb+.05)));ee.add(je);let Qe=i.main&&i.main.type,dt=i.off&&i.off.type,zt=Qe?th[Qe]||"1h":"fist",pt=[],De=(C,q,se)=>new jn().setFromEuler(new gs(C,q,se));function Q(C,q,se){let j=A(Ed(C.type,C.r,i.skin||null)),Me=C.type,pe={g:j,type:Me,hand:$[se]},de={parent:je,p:[0,0,0],q:De(0,0,0),s:1},qe={p:[0,0,0],q:De(Math.PI/2,Math.PI/2,0),s:1};return Me==="orbe"?(de.parent=ee,de.p=[q*.3,.52,.12],pe.orb=!0,$.orb=j):Me==="grimoire"?(de.parent=ee,de.p=[q*(he.rx+.035),.02,.02],de.q=De(0,q*Math.PI/2,.1),qe.p=[0,0,.05],qe.q=De(-1.2,Math.PI/2,0),pe.hand=$.handO||$.handM):Me==="pistolet"?(de.parent=ee,de.p=[q*(he.rx+.04),.03,0],de.q=De(Math.PI+.25,0,0),de.s=.9,qe.q=De(0,0,Math.PI),qe.p=[0,.01,.03]):Me==="dague"?(de.p=[q*.17,.2,0],de.q=De(0,0,q*(Math.PI-.5))):Me==="anneaux"?(de.p=[0,.02,.01],de.q=De(Math.PI/2-.2,0,0),de.s=.85,qe.q=De(Math.PI/2,0,0),qe.p=[0,0,.12],qe.s=.7):Me==="guisarme"||Me==="baton"?(de.p=[-q*.12,-.62,0],de.q=De(0,0,q*.3),qe.p=[0,0,-.1]):Me==="arc"?(de.p=[q*.1,0,0],de.q=De(0,0,q*.25),qe.q=new jn().setFromRotationMatrix(new Nt().makeBasis(new X(0,-1,0),new X(0,0,1),new X(-1,0,0))),qe.p=[0,.12,-.2],pe.hand=$.handO||$.handM):Me==="harpe"?(de.p=[0,-.45,-.03],de.s=.85,qe.q=De(Math.PI/2,0,0),qe.p=[.02,.06,-.42],qe.s=.64,pe.hand=$.handO||$.handM):Me==="repercuteur"?(de.p=[q*.17,.2,0],de.q=De(0,0,q*(Math.PI-.5)),qe.q=De(0,0,Math.PI),qe.p=[0,.06,.1]):(de.p=[q*.17,.2,0],de.q=De(0,0,q*(Math.PI-.5))),j.userData.tick&&D.push(j.userData.tick),pe.S=de,pe.H=qe,pt.push(pe),Be(pe,!1),pe}function Be(C,q){let se=q&&C.hand&&!C.orb?C.H:C.S;(q&&C.hand&&!C.orb?C.hand:C.S.parent).add(C.g),C.g.position.set(se.p[0],se.p[1],se.p[2]),C.g.quaternion.copy(se.q),C.g.scale.setScalar(se.s)}Qe&&Q(i.main,-1,"handM"),dt&&dt!=="bouclier"&&Q(i.off,1,"handO");let He=pt.length>1&&th[dt]===th[Qe],ot=dt==="bouclier"?i.off.r:u.bouclier;if(ot!=null){let C=A(Td(ot));C.position.set(.055,-.13,0),C.rotation.y=Math.PI/2,C.scale.setScalar(.8),$.elbowO.add(C),C.userData.tick&&D.push(C.userData.tick)}if(i.aura){let C=new rt(i.aura),q=new Ne(new gi(.42,.56,40),new Ft({color:C,transparent:!0,opacity:.55,side:tn,blending:Gn,depthWrite:!1}));q.rotation.x=-Math.PI/2,q.position.y=.02,J.add(q),$.aura=q;let se=new Ne(an(.5,.42,1.5,24,!0),new Ft({color:C,transparent:!0,opacity:.1,side:tn,blending:Gn,depthWrite:!1}));se.position.y=.75,J.add(se),$.auraCol=se}J.scale.setScalar(e.height);let et=vd(J,!t.shadow&&!t.noInk);if(t.shadow){let C=typeof t.shadow=="string"?t.shadow:"#14141f",q=new Bo({color:C,transparent:!0,opacity:.8,emissive:new rt(C).multiplyScalar(.6)});J.traverse(Me=>{Me.isMesh&&Me.material&&!Me.material.transparent&&!(Me.material.emissiveIntensity>.4)&&(Me.material.map&&Me.material.userData.ownMap&&Me.material.map.dispose(),Me.material=q)});let se=new Ft({color:t.eyes||"#bfe4ff"}),j=$e.userData.rings;for(let Me of[-1,1]){let pe=new Ne(Yt(.012,8,6),se);pe.position.set(Me*.037,.1,el(j,.037,.1)+.002),pe.scale.set(1.5,.7,.5),Ke.add(pe)}}J.traverse(C=>{C.isMesh&&(C.castShadow=!C.material.transparent&&!C.userData.ink&&C.userData.noBake!==!0)});let wt=null,Rt=!1,Gt=new vt;ee.add(Gt),i.wings&&(wt=wd(Gt,.4,-(W[5].rb+.02),i.wings)),Gt.visible=!!i.wings&&i.wings.ground!==!1;let Vt=(C,q)=>new Ft({color:C,transparent:!0,opacity:q,side:tn,blending:Gn,depthWrite:!1}),Ut=[];{let C=new vn(.5,1,6).rotateX(Math.PI).translate(0,-.5,0),q=Vt("#ff2410",.62),se=Vt("#ffb27a",.7),j=!0;for(let Me of[$.kneeM,$.kneeO]){let pe=new Ne(C,q),de=new Ne(C,se);pe.castShadow=de.castShadow=!1,j||(pe.userData.sharedGeo=!0),de.userData.sharedGeo=!0,j=!1,de.scale.set(.5,.55,.5),pe.add(de),pe.position.set(0,-Z-.07,.04),pe.visible=!1,Me.add(pe),Ut.push(pe)}}let $t=new vt;$t.visible=!1,J.add($t);{let C=i.aura||"#bfe8ff",q=new Ne(an(.52,.34,2.3,20,!0),Vt(C,.16));q.position.y=1.15,q.castShadow=!1,$t.add(q);let se=Vt("#ffffff",.7),j=Ot(.012,.3,.012);for(let pe=0;pe<9;pe++){let de=new Ne(j,se);de.castShadow=!1,pe&&(de.userData.sharedGeo=!0),$t.add(de)}let Me=new Ne(new gi(.3,.62,32).rotateX(-Math.PI/2),Vt(C,.5));Me.position.y=.03,Me.castShadow=!1,$t.add(Me)}let Dt={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},Jn=i.runPose||null,bt={};$.armM.rotation.order=$.armO.rotation.order="XZY";let Kn={epee:1,dague:1,masse:1,espadon:.75,guisarme:.7,baton:.7,lamecle:1,pistolet:1,repercuteur:.7},Ni=new jn,bn=new X(1,0,0),Nn=0,wn=Math.random()*6,Wt=null,Sn=!1,Jt=1.5+Math.random()*4,O=0,ne=tl.includes(e.stance)?e.stance:"neutre",re=nl.includes(e.move)?e.move:"neutre",oe=ot!=null,ae=Qe==="grimoire"||dt==="grimoire";function Ge(){bt.aMx=.04,bt.aMz=.13,bt.eM=-.05,bt.aOx=.04,bt.aOz=.13,bt.eO=-.05,bt.aMy=0,bt.aOy=0}let I=C=>Object.assign(bt,C),H=C=>{let q={};for(let se in C){let j=se==="sY"||se==="aMy"||se==="aOy",Me=se.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");q[se==="sY"?se:Me]=j?-C[se]:C[se]}return q};function K(C){switch(ne){case"ninja":return I({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return I({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return I({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return I({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return I({sX:.1,sY:.12+Math.sin(C*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let Ee={slash(C,q){let se=C<.36,j=C<.66,Me=He&&q%2===1,pe=He?(q>>1)%3:q%3,de=pe===0?se?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:j?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:pe===1?se?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:j?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:se?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:j?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;de&&I(Me?H(de):de)},heavy(C,q){let se=C<.42,j=C<.72;q%2===0?se?I({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):j&&I({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):se?I({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):j&&I({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(C,q){if(C>.8)return;if(zt==="cannon"){I({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),C>.3&&C<.5&&I({sX:-.16,aMx:-1.45});return}let se=C>.3&&C<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};I(He&&q%2===1?H(se):se)},bow(C){C<.55?I({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):C<.82&&I({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(C){C<.4?I({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):C<.75&&I({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(C){C<.78&&I({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(C){C<.45?I({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(C/.45*Math.PI*.6)}):C<.82&&I({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(C){I({aOx:-.8,aOz:-.2,eO:-1.6}),C<.35?I({aMx:-1.25,aMz:.4,eM:-1.5}):C<.72&&I({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(C,q){let se=C<.32?{aMx:.3,eM:-2.2,sY:-.4}:C<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;se&&I(q%2?H(se):se)},spin(C){I({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(C){I({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(C){I({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(C){I({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(C){I({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:J,joints:$,height:(N+.57+Vs*Oe)*e.height,seatDrop:N*e.height,cat:zt,dual:He,inks:et,scale:e.height,get armed(){return Sn},get acting(){return Wt?Wt.name:null},get move(){return re},get stance(){return ne},setArmed(C){if(C=!!C,C!==Sn){Sn=C;for(let q of pt)Be(q,C)}},setStyle(C){C.stance&&tl.includes(C.stance)&&(ne=C.stance),C.move&&nl.includes(C.move)&&(re=C.move)},play(C,q=.5,se=0,j=1){Ee[C]&&(Wt={name:C,t:0,dur:q,c:se,turns:j})},hand(C,q){let se=$[q?"handO":"handM"]||$.handO||$.handM;return se?se.getWorldPosition(C):J.getWorldPosition(C)},update(C,q={}){let se=Math.min(3.2,q.speed||0),j=O+=C,Me=Math.sin(j*1.6),pe=!!q.fly&&!q.riding&&!q.down&&!q.climb,de=re==="levitation"&&!pe&&!q.riding&&!q.down,qe=se>.02,nt=re==="ninja"&&se>.9&&!pe&&!q.riding&&!q.down;wn+=C*(4.6+se*3.4)*(nt?1.3:1)*(qe?1:0),I({aMx:Me*.02,aMy:0,aMz:.08,aOx:-Me*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:Me*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:Me*.003,rZ:0});let xt=null,Ct=!1,Et=!1;if(q.riding)xt=[-1.25,1.3,-1.25,1.3,q.wide||.45],I({sX:.06+Me*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),Ct=!0;else if(q.down)xt=[-1.48,1.5,.15,1.65,0],I({sX:.5,hdX:.45,dy:-(G-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(q.climb){let Ye=Math.sin(j*9);xt=[-.6-Ye*.45,.9+Ye*.4,-.6+Ye*.45,.9-Ye*.4,.05],I({sX:.15,hdX:-.35,aMx:-2.5-Ye*.4,aOx:-2.5+Ye*.4,aMz:.25,aOz:.25,eM:-.5,eO:-.5})}else if(pe){let Ye=Math.min(1,se/2.2);xt=[.16+Ye*.16,.28-Ye*.1,.3+Ye*.12,.42-Ye*.2,.03],I({sX:.05+Ye*.1,hdX:-Ye*.55,aMx:.2+Ye*.5,aOx:.2+Ye*.5,aMz:.34,aOz:.34,eM:-.14,eO:-.14,dy:Math.sin(j*2)*.03})}else if(qe&&de){let Ye=Math.min(1,se/2),yt=Math.sin(j*1.7);xt=[-.3,.58,.04+Ye*.05,.1,0],I({sX:.05+Ye*.09,hdX:-.03-Ye*.06,aMx:.12+Ye*.16+yt*.02,aOx:.12+Ye*.16-yt*.02,aMz:.16+Ye*.05,aOz:.16+Ye*.05,eM:-.22,eO:-.22})}else if(qe){let Ye=Math.max(0,Math.min(1,se-.75)),yt=nt?.72:(ht?.3:.55)+Math.min(se,1.4)*(ht?.12:.3),l=Math.sin(wn),T=(.7+Ye)*yt*1.5;xt=[l*yt,Math.max(0,-Math.cos(wn))*T,-l*yt,Math.max(0,Math.cos(wn))*T,0],Ct=!0,I(nt?{sX:.8,hdX:-.58,aMx:.72+l*.05,aOx:.72-l*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:l*.05,dy:-.1+Math.abs(Math.cos(wn))*.03}:{aMx:-l*yt*.8,aOx:l*yt*.8,eM:-.25-Ye*.9-Math.max(0,-l)*.4,eO:-.25-Ye*.9-Math.max(0,l)*.4,sX:.04+Ye*.2,sY:l*.07,dy:Math.abs(Math.cos(wn))*.025*(1+Ye)})}else!Sn&&!Wt&&(xt=K(j),Et=!0);if(de&&(qe||(xt=[-.2,.42,.02,.08,0]),Ct=!1,bt.dy=.24+Math.sin(j*2.2)*.02),Sn&&!pe&&!q.climb&&!q.riding&&!q.down&&!nt){let Ye=bt.aMx,yt=bt.aOx,l=bt.sY;de&&(bt.aMz=bt.aOz=.08,bt.eM=bt.eO=-.12),Ge(),qe&&!de&&(bt.aMx+=Ye*.55,bt.aOx+=yt*.55,bt.eM=bt.eO=-.22,bt.sY+=l)}if(Jn==="aion"&&Sn&&qe&&se>.9&&!pe&&!q.climb&&!q.riding&&!q.down){let Ye=Math.sin(wn);I({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+Ye*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+Ye*.04}),de||(bt.sX=.5,bt.hdX=-.36)}let In=0,kt=0;if(Wt){Wt.t+=C;let Ye=Wt.t/Wt.dur;Ye>=1?Wt=null:(Ee[Wt.name](Ye,Wt.c),Wt.name==="spin"&&(In=Qi(Ye)*6.2832*Wt.turns),Wt.name==="roll"&&(kt=Qi(Ye)*6.2832,xt=[-1.7,2.2,-1.7,2.2,0],Ct=!1),Wt.name==="flip"&&(kt=-Qi(Ye)*6.2832,xt=[-1.75,2.25,-1.75,2.25,0],Ct=!1),Wt.name==="dash"&&!de&&(xt=[-1.05,.55,.75,.95,0],Ct=!1),Wt.name==="slam"&&Ye<.45&&(xt=[-.5,1.1,.3,.9,0],Ct=!1))}let ln=1-Math.exp(-(Wt||q.riding?30:nt?16:12)*C);for(let Ye in Dt)Dt[Ye]+=(bt[Ye]-Dt[Ye])*ln;$.armM.rotation.set(Dt.aMx,Dt.aMy,-Dt.aMz),$.armO.rotation.set(Dt.aOx,Dt.aOy,Dt.aOz),$.elbowM.rotation.x=Dt.eM,$.elbowO.rotation.x=Dt.eO,ee.rotation.x=Dt.sX,ee.rotation.y=Dt.sY,b.position.y=N+Dt.dy,b.rotation.y=In,b.rotation.x=kt,b.rotation.z=Dt.rZ,Ke.rotation.set(Dt.hdX,Dt.hdY+(qe||Wt||ne==="timide"?0:Math.sin(j*.4)*.08),Dt.hdZ);let Pt=Ct?1:1-Math.exp(-(xt?16:8)*C),Xt=xt||[0,0,0,0,0];if($.legM.rotation.x+=(Xt[0]-$.legM.rotation.x)*Pt,$.kneeM.rotation.x+=(Xt[1]-$.kneeM.rotation.x)*Pt,$.legO.rotation.x+=(Xt[2]-$.legO.rotation.x)*Pt,$.kneeO.rotation.x+=(Xt[3]-$.kneeO.rotation.x)*Pt,$.legM.rotation.z+=(-Xt[4]-$.legM.rotation.z)*Pt,$.legO.rotation.z+=((Xt[5]??Xt[4])-$.legO.rotation.z)*Pt,$.orb){let Ye=$.orb;Sn?Ye.position.set(-.26,.42+Math.sin(j*2)*.03,.34):Ye.position.set(-.3,.52+Math.sin(j*2)*.03,.12),Ye.rotation.y=j}$.aura&&($.aura.rotation.z=j*.5,$.aura.material.opacity=.42+Math.sin(j*2.2)*.14,$.auraCol.material.opacity=.08+Math.sin(j*1.7)*.03);{let Ye=Sn&&!Wt&&!pe&&!q.riding&&!q.down&&!nt&&!(Jn==="aion"&&qe&&se>.9)?qe?.5:.92:0;if(Nn+=(Ye-Nn)*(1-Math.exp(-(Wt?40:10)*C)),Sn)for(let yt of pt)yt.hand&&!yt.orb&&Kn[yt.type]&&yt.g.quaternion.copy(Ni.setFromAxisAngle(bn,Nn*Kn[yt.type])).multiply(yt.H.q)}for(let Ye of D)Ye(j);wt&&(Gt.visible=pe||i.wings.ground!==!1,Gt.visible&&wt(j,pe?1:0));for(let Ye=0;Ye<Ut.length;Ye++){let yt=Ut[Ye];if(yt.visible=de,de){let l=1+.28*Math.sin(j*13+Ye*1.9)+.14*Math.sin(j*21+Ye),T=Math.min(1,se/2);yt.scale.set(.04,(.075+T*.04)*l,.04),yt.rotation.x=-.1-T*.45}}let Ln=Et&&ne==="digne";if($t.visible=Ln,Ln){let Ye=$t.children;Ye[0].material.opacity=.13+Math.sin(j*5)*.05,Ye[0].scale.set(1+Math.sin(j*7)*.04,1,1+Math.sin(j*7)*.04);for(let yt=1;yt<=9;yt++){let l=(j*.9+yt*.37)%1,T=yt*2.4+j*.6;Ye[yt].position.set(Math.cos(T)*.44,l*2.2,Math.sin(T)*.44),Ye[yt].scale.y=.6+l}Ye[1].material.opacity=.5+Math.sin(j*6)*.2,Ye[10].rotation.y=-j,Ye[10].scale.setScalar(1+Math.sin(j*5)*.06)}let Ii=$e.userData.blink;Ii&&(Jt-=C,Jt<0&&(Ii(Jt>-.11),Jt<=-.11&&(Jt=2.2+Math.random()*4)))}}}function Ld(i,e,t={}){let n=new Ns({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=en,n.toneMapping=zi,n.shadowMap.enabled=!0,n.shadowMap.type=xa;let s=new vs,r=new ys(n);s.environment=r.fromScene(new Cr,.04).texture,r.dispose();let a=new An(28,1,.1,50);s.add(new Er(16777215,9078440,1.15));let o=new _s(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let c=new _s(58879,1.1);c.position.set(-3,2,-3),s.add(c);let h=new _s(10185727,.9);h.position.set(3,1.5,-3),s.add(h);let u=document.createElement("canvas");u.width=u.height=256;let f=u.getContext("2d"),p=f.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=p,f.fillRect(0,0,256,256),f.strokeStyle="rgba(0,240,255,.5)",f.lineWidth=2,f.beginPath(),f.arc(128,128,84,0,7),f.stroke(),f.strokeStyle="rgba(0,240,255,.2)",f.beginPath(),f.arc(128,128,108,0,7),f.stroke();let d=new Ne(new ki(1.5,48),new Ft({map:new Vn(u),transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,s.add(d);let x=new Ne(new ki(1.5,32),new No({opacity:.45}));x.rotation.x=-Math.PI/2,x.position.y=.002,x.receiveShadow=!0,s.add(x);let v=new vt;s.add(v);let g=null,m=null,M=t.zoom||"body",_=t.yaw??-.35,E=null,D=0,P=!1,L=!!t.walk,k={y:.9,d:4.6};function S(b){g&&(v.remove(g.group),Ai(g.group)),m&&(v.remove(m.group),Ai(m.group),m=null),g=Ss(b),v.add(g.group),b.armed&&g.setArmed(!0),b.mount&&Oi[b.mount]?(m=Oi[b.mount].make(),Ko(m.group),v.add(m.group),g.group.position.set(0,m.seat.y-g.seatDrop,m.seat.z),g.wide=m.wide):g.group.position.set(0,0,0)}S(e);function A(){let b=i.clientWidth||300,ee=i.clientHeight||400;(i.width!==Math.round(b*n.getPixelRatio())||i.height!==Math.round(ee*n.getPixelRatio()))&&(n.setSize(b,ee,!1),a.aspect=b/ee,a.updateProjectionMatrix())}let y=b=>{E={x:b.clientX,yaw:_},D=performance.now(),i.setPointerCapture&&i.setPointerCapture(b.pointerId)},G=b=>{E&&(_=E.yaw+(b.clientX-E.x)*.012,D=performance.now())},Z=()=>{E=null};i.addEventListener("pointerdown",y),i.addEventListener("pointermove",G),i.addEventListener("pointerup",Z),i.addEventListener("pointercancel",Z),i.style.touchAction="pan-y";let N=performance.now();function J(b){if(P)return;requestAnimationFrame(J);let ee=Math.min(.05,(b-N)/1e3);if(N=b,!i.isConnected||i.offsetParent===null)return;A(),t.spin&&M!=="face"&&!E&&b-D>2500&&(_+=ee*.25),v.rotation.y=_;let $=g.height+(m?m.seat.y-g.seatDrop:0),W=a.aspect,ie=Math.max($,1.8),Se=g.scale||1,be=M==="face"?{y:$-.15*Se,d:1.12*Math.max(.75,Se)/Math.min(1,W*.9)}:m?{y:$*.5,d:Math.max($*2.6,3.4/Math.min(1,W*1.2))}:{y:ie*.5,d:ie*2.35/Math.min(1,W*1.9)};k.y+=(be.y-k.y)*Math.min(1,ee*6),k.d+=(be.d-k.d)*Math.min(1,ee*6),a.position.set(0,k.y+(M==="face"?.02:.25),k.d),a.lookAt(0,k.y,0),t.freeze||(g.update(ee,{speed:L&&!m?2:0,riding:!!m,wide:g.wide}),m&&m.update(ee,L?.8:0)),n.render(s,a)}return requestAnimationFrame(J),{set:S,setZoom(b){M=b},setArmed(b){g&&g.setArmed(b)},play(b,ee,$,W){g&&(g.setArmed(!0),g.play(b,ee,$,W))},get avatar(){return g},setWalk(b){L=b},setYaw(b){_=b,D=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){P=!0,i.removeEventListener("pointerdown",y),i.removeEventListener("pointermove",G),i.removeEventListener("pointerup",Z),Ai(s),n.dispose()}}}var il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},P1=new Mr(-1,1,1,-1,0,1),ih=class extends qt{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},I1=new ih,Es=class{constructor(e){this._mesh=new Ne(I1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,P1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sl=class extends hi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ms.clone(e.uniforms),this.material=new yn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Es(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ma=class extends hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rl=class extends hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var al=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sl(il),this.copyPass.material.blending=Di,this.clock=new Go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ma!==void 0&&(a instanceof Ma?n=!0:a instanceof rl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ol=class extends hi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Dd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Or=class i extends hi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yn(r,a,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Yn(r,a,{type:wi});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Yn(r,a,{type:wi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Dd;this.highPassUniforms=Ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=il;this.copyUniforms=Ms.clone(u.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Gn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new Ft,this.fsQuad=new Es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new yn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Or.BlurDirectionX=new Le(1,0);Or.BlurDirectionY=new Le(0,1);var zd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ll=class extends hi{constructor(){super();let e=zd;this.uniforms=Ms.clone(e.uniforms),this.material=new Fo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wa=[1,3,6,10,20],L1={assassin:1,gladiateur:.95,sorcier:.93,pistolero:.9,rodeur:.87,spiritualiste:.85,barde:.8,peintre:.8},Ud=i=>L1[i]||.75,kd=120,Od=7,sh=.12,rh={templier:1.012,gladiateur:1.027,rodeur:1.046,assassin:.966,sorcier:1.027,spiritualiste:1.173,clerc:1.027,aede:1.017,pistolero:.982,ethertech:.99,peintre:1.021,barde:1.012,"templier:epee":1.012,"gladiateur:guisarme":1.027,"rodeur:arc":1.046,"assassin:dague+dague":.899,"assassin:epee+dague":.92,"sorcier:orbe":1.027,"spiritualiste:orbe":1.173,"clerc:baton":1.027,"aede:baton":1.017,"pistolero:pistolet+pistolet":.982,"ethertech:lamecle":.99,"peintre:anneaux":1.021,"templier:espadon":1.008,"gladiateur:espadon":.997,"rodeur:dague+epee":.984,"assassin:dague+epee":.952,"assassin:epee+epee":.889,"sorcier:grimoire":1.027,"spiritualiste:grimoire":1.173,"clerc:masse":1.036,"aede:masse":1.058,"pistolero:repercuteur":1.016,"barde:harpe":1.012},Sa=[{id:"feu",name:"Esprit de feu",color:16742954,hp:4,mult:.9,iv:1.2,aoe:3.6,sc:1},{id:"terre",name:"Esprit de terre",color:11569738,hp:10,mult:1.05,iv:1.4,aoe:3,sc:1.25,taunt:28,cc:{slow:[.3,2]}},{id:"vent",name:"Esprit de vent",color:10217680,hp:3,mult:.3,iv:.4,aoe:2.6,sc:.9},{id:"eau",name:"Esprit d\u2019eau",color:4892927,hp:4,mult:.75,iv:1,aoe:2.8,sc:1,heal:2}],Nr=i=>i.busy??(i.cast??.25)+.2+(i.dmg&&i.dmg.hits>1?(i.dmg.hits-1)*(i.dmg.gap||.15):0),ba={dague:{spd:1.2,hits:1,crit:.1,cdm:2.3,var:.03,reach:2.1},epee:{spd:1.4,hits:2,crit:.05,cdm:2.1,var:.1,reach:2.6},masse:{spd:1.5,hits:2,crit:.01,cdm:2.1,var:.1,reach:2.5},espadon:{spd:2.4,hits:3,crit:.05,cdm:1.85,var:.06,reach:3.4,kd:.25},guisarme:{spd:2.8,hits:4,crit:.05,cdm:1.85,var:.25,reach:3.9,kd:.45},baton:{spd:2,hits:3,crit:.05,cdm:1.85,var:.1,reach:3.3,kd:.25},lamecle:{spd:2.4,hits:3,crit:.05,cdm:1.5,var:.1,reach:2.8,kd:.25},anneaux:{spd:2,hits:2,crit:.05,cdm:1.85,var:.06,range:15},arc:{spd:2.4,hits:2,crit:.05,cdm:1.85,var:.1,range:25,kb:2.5},orbe:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.18,range:15},grimoire:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.06,range:25},pistolet:{spd:1.8,hits:1,crit:.05,cdm:2.1,var:.06,range:15},repercuteur:{spd:2.8,hits:1,crit:.05,cdm:1.5,var:.18,range:25},harpe:{spd:2.4,hits:1,crit:.05,cdm:1.5,var:.1,range:25},poing:{spd:1.4,hits:1,crit:0,cdm:1.5,var:.1,reach:1.9}},D1=1/6,z1=1,es={crit:.5,aspd:.5,dodge:.3,parry:.4,block:.5},Nd={espadon:1,guisarme:1,baton:1},U1={arc:"bow",pistolet:"shoot",repercuteur:"shoot",harpe:"strum",orbe:"cast",grimoire:"cast"};function Fd(i,e,t){let n=ba[e]||ba.poing,s=t&&t!=="bouclier"&&ba[t]&&!n.range&&!Nd[e]?ba[t]:e==="pistolet"&&t==="pistolet"?ba.pistolet:null,r=Bd(i,e||"poing",n,!!s,t==="bouclier"),a=[1];s&&a.push(z1);for(let h=1;h<n.hits+(s?s.hits-1:0);h++)a.push(.1);let o=a.reduce((h,u)=>h+u,0),c=r.basic;return c.dur=n.spd*D1*(c.castK||1),c.seq=a,c.F=o,c.mult=c.rate*c.dur/o,c.kind==="melee"?c.reach=(n.reach||2.4)+(c.reachPlus||0):n.range&&!c.range&&(c.range=n.range),r.W=n,r.var=n.var,r.ref={crit:.05+n.crit,cdm:n.cdm},r.id=i+":"+(e||"poing")+(s?"+"+t:""),r}function Bd(i,e,t,n,s){let r=!!Nd[e],a=!!t.range,o=U1[e]||"slash",c=r?"heavy":"slash",h=(u,f)=>({name:u,ult:2,exec:1,cast:.5,busy:.95,lock:.8,cc:f});switch(i){case"templier":return{role:"Tank",melee:!0,sustain:!0,passive:{guard:.35,block:s?.25:0},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3,arc:r?1.45:1.3},skills:[{name:"Capture",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,kd:1.5}},{name:"Choc du bouclier",cd:10,anim:"heavy",cast:.3,dmg:{kind:"melee",mult:1.6,r:4.2,arc:1.6},cc:{kd:2.5}},{name:"Brise-armure",cd:14,anim:"slash",cast:.25,dmg:{kind:"melee",mult:1,r:4,arc:1.6},cc:{weak:[.3,8],aspd:[.3,8]}},{name:"Rempart inviolable",ult:1,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:3,r:7},cc:{kd:2},self:{inv:6,heal:25}},h("Ch\xE2timent",{kd:3})]};case"gladiateur":return{role:"Combattant de zone",melee:!0,sustain:!0,passive:{kdOnCrit:1.5,guard:.15},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3.1,arc:r?1.9:1.6},skills:[{name:"Encha\xEEnement",cd:7,anim:"spin",cast:.12,turns:2,dmg:{kind:"melee",mult:[.9,1.2,1.8],hits:3,gap:.28,r:4.2,arc:1.9}},{name:"Onde entravante",cd:9,anim:"slam",cast:.34,lock:.3,dmg:{kind:"around",mult:1.3,r:7},cc:{slow:[.5,5]}},{name:"Posture de rage",cd:20,anim:"castUp",cast:.3,self:{atk:[.35,10]}},{name:"Tourbillon de guerre",ult:1,anim:"spin",cast:.12,turns:3,dmg:{kind:"around",mult:1.1,hits:5,gap:.17,r:6.5},self:{inv:1}},h("Ex\xE9cution")]};case"rodeur":return{role:"Archer",melee:!a,sustain:!a,basic:a?{kind:"shot",anim:o,hit:.58,rate:2.5,proj:"arrow",speed:60}:{kind:"melee",anim:c,hit:.5,rate:2.5,arc:1.3},skills:[{name:"Pi\xE8ge \xE0 pointes",cd:10,anim:"cast",cast:.2,special:"trap",dmg:{mult:2,r:4},cc:{root:4,slow:[.4,6],sil:4}},{name:"Tir de pr\xE9cision",cd:14,anim:o,cast:.3,dmg:{kind:"shot",mult:4.2,crit:1,pierce:1,size:1.8,proj:a?"arrow":"bolt",speed:70}},{name:"Camouflage",cd:16,anim:"cast",cast:.1,busy:.2,self:{stealth:[4,2.2],aspd:[.3,8]}},{name:"Pluie de fl\xE8ches",ult:1,anim:o,cast:.4,dmg:{kind:"zone",mult:.75,hits:8,gap:.22,r:6},cc:{slow:[.5,4]}},h("Fl\xE8che du silence",{sil:6})]};case"assassin":return{role:"Furtif",melee:!0,sustain:!0,passive:{dodge:.2,back:{crit:.25,cdm:.5}},basic:{kind:"melee",anim:"slash",hit:.5,rate:3.1,arc:1.2,rune:1},skills:[{name:"Embuscade",cd:6,anim:"slash",cast:.12,move:"tp",dmg:{kind:"target",mult:3.2,range:22,aoe:4},cc:{stun:1.5},self:{atk:[.25,3]},chain:{name:"Balayage",anim:"spin",cast:.1,dmg:{kind:"around",mult:1.8,r:4.8},cc:{kd:1.5}}},{name:"Frappe runique",cd:9,anim:"spin",cast:.1,dmg:{kind:"around",mult:1.1,hits:3,gap:.14,r:4.8},cc:{stun:1,runes:1},chain:{name:"Explosion de runes",anim:"slam",cast:.15,special:"runes",dmg:{kind:"around",mult:1.2,per:.6,r:6}}},{name:"Dissimulation",cd:18,anim:"cast",cast:.1,busy:.2,self:{stealth:[8,4],reset:1}},{name:"Danse des mille lames",ult:1,anim:"spin",cast:.1,turns:3,dmg:{kind:"around",mult:.85,hits:6,gap:.14,r:5.5},cc:{stun:.8},self:{inv:1.2}},h("Assassinat",{stun:2})]};case"sorcier":return{role:"Mage de destruction",melee:!1,basic:{kind:"shot",anim:"cast",castK:2,hit:.62,rate:3.1,proj:"bolt",speed:30,aoe:2.6,size:1.5,slowSelf:.35},skills:[{name:"Sommeil",cd:12,anim:"cast",cast:.35,area:{kind:"zone",r:4.5},cc:{sleep:6},color:12167423},{name:"Racines de glace",cd:9,anim:"cast",cast:.45,lock:.4,dmg:{kind:"zone",mult:1.5,r:5.5},cc:{root:4,slow:[.5,6],sil:4},color:9428223},{name:"M\xE9tamorphose",cd:16,anim:"cast",cast:.4,area:{kind:"target"},cc:{tree:5},color:9166954},{name:"M\xE9t\xE9ore",ult:1,anim:"castUp",cast:1.1,lock:1.1,meteor:1,dmg:{kind:"zone",mult:6,r:7}},h("N\xE9ant")]};case"spiritualiste":return{role:"Invocateur",melee:!1,basic:{kind:"shot",anim:"cast",hit:.5,rate:1.4,proj:"bolt",speed:32,dot:[.3,6]},skills:[{name:"Esprit \xE9l\xE9mentaire",cd:10,anim:"castUp",cast:.4,special:"spirit"},{name:"Peur",cd:12,anim:"cast",cast:.35,area:{kind:"around",r:8},cc:{fear:4}},{name:"Absorption",cd:10,anim:"cast",cast:.35,dmg:{kind:"target",mult:1.6,steal:60,range:26},cc:{sap:[.3,8]},self:{shield:[20,8]}},{name:"Fureur \xE9l\xE9mentaire",ult:1,anim:"castUp",cast:.5,special:"enrage",eq:6,dmg:{kind:"zone",mult:3,r:6}},h("Marche des ombres",{fear:3})]};case"clerc":return{role:"Soigneur",melee:!1,passive:{guard:.2,rez:90},basic:{kind:"shot",anim:"cast",hit:.5,rate:3,proj:"bolt",speed:32,range:20,aoe:2.6},skills:[{name:"Soin \xE9clair",cd:4,anim:"cast",cast:.1,busy:.25,self:{heal:25,hot:[3,6]}},{name:"Ch\xE2timent paralysant",cd:10,anim:"cast",cast:.35,dmg:{kind:"zone",mult:1.7,r:4.5},cc:{para:3}},{name:"Grande gu\xE9rison",cd:12,anim:"castUp",cast:1.3,lock:1.3,self:{heal:70}},{name:"Jugement divin",ult:1,anim:"castUp",cast:.7,lock:.7,dmg:{kind:"zone",mult:5,r:7},cc:{root:4}},{name:"Barri\xE8re sacr\xE9e",ult:2,anim:"castUp",cast:.3,self:{inv:6,heal:100,guard:[.5,12]}}]};case"aede":return{role:"Soutien",melee:!0,sustain:!0,passive:{atk:.1,regen:.01,mantra:1},basic:{kind:"melee",anim:"heavy",hit:.56,rate:2.5,arc:1.8,reachPlus:r?0:.5},skills:[{name:"Jugement in\xE9luctable",cd:8,anim:"cast",cast:.25,dmg:{kind:"shot",mult:1.5,proj:"bolt",range:22,speed:40},cc:{stun:2.5}},{name:"Parole de vie",cd:5,anim:"cast",cast:.1,busy:.25,self:{heal:18}},{name:"Chant d\u2019inspiration",cd:16,anim:"castUp",cast:.3,self:{crit:[.4,10],aspd:[.2,10]},area:{kind:"around",r:9},cc:{aspd:[.4,8]}},{name:"Onde de choc",ult:1,anim:"slam",cast:.4,lock:.5,dmg:{kind:"around",mult:4.5,r:6.5},cc:{kd:2}},{name:"Mantra de victoire",ult:2,anim:"castUp",cast:.3,self:{atk:[.5,8],crit:[1,8],heal:40}}]};case"pistolero":return{role:"Tireur mobile",melee:!1,basic:e==="repercuteur"?{kind:"shot",anim:"shoot",hit:.36,rate:3,proj:"shell",speed:36,aoe:2.6,bounce:1}:{kind:"shot",anim:"shoot",hit:.34,rate:2.8,proj:"bullet",speed:85,bounce:2},skills:[{name:"Canon magique",cd:7,anim:o,cast:.3,lock:.25,dmg:{kind:"shot",mult:4.2,proj:"shell",aoe:3.8,size:2,speed:36},cc:{stun:1.5}},{name:"Tir entravant",cd:9,anim:o,cast:.2,dmg:{kind:"zone",mult:1.1,r:5},cc:{slow:[.6,5],root:2}},{name:"Saut de recul",cd:6,anim:"flip",cast:.05,move:"back",dmg:{kind:"shot",mult:.8,hits:3,gap:.08,proj:"bullet",speed:85},self:{inv:.5,atk:[.2,4]}},{name:"D\xE9luge de plomb",ult:1,anim:o,cast:.1,dmg:{kind:"shot",mult:.55,hits:12,gap:.07,proj:"bullet",speed:85}},h("Tir fatal")]};case"ethertech":return{role:"Pilote de Mecha",melee:!0,sustain:!0,basic:{kind:"melee",anim:"slash",hit:.5,rate:2.8,arc:1.3},mecha:{hp:2.5,dur:20,basic:{kind:"melee",anim:"punch",dur:.46,hit:.5,mult:1.7,reach:4.6,arc:1.7,mech:1,seq:[1],F:1}},skills:[{name:"Mecha",cd:12,anim:"castUp",cast:.5,special:"mecha"},{name:"Grappin",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,stun:1.5}},{name:"Champ d\u2019entrave",cd:10,anim:"slam",cast:.3,dmg:{kind:"around",mult:1.3,r:6.5},cc:{root:3}},{name:"Salve de missiles",ult:1,anim:"castUp",cast:.4,dmg:{kind:"zone",mult:1,hits:5,gap:.16,r:5.5},cc:{stun:1}},h("Annihilation",{stun:2})]};case"barde":return{role:"Musicien",melee:!1,basic:{kind:"shot",anim:"strum",hit:.45,rate:1.75,proj:"wave",speed:24,thru:1,note:1},skills:[{name:"Accord final",cd:7,anim:o,cast:.25,special:"notes",dmg:{kind:"target",mult:1.2,range:24}},{name:"Berceuse",cd:12,anim:o,cast:.4,area:{kind:"around",r:7},cc:{sleep:5},color:12167423},{name:"M\xE9lodie de vie",cd:9,anim:o,cast:.3,self:{heal:22,gauge:30,shield:[15,8]},area:{kind:"around",r:8},cc:{slow:[.4,5]}},{name:"Symphonie",ult:1,anim:"castUp",cast:.5,eq:3,dmg:{kind:"around",mult:4,r:8},cc:{notes:5}},h("Requiem")]};case"peintre":return{role:"Contr\xF4le de zone",melee:!1,basic:{kind:"shot",anim:"slash",hit:.5,rate:2.35,proj:"paint",speed:32,aoe:1.2,every:{n:3,k:2,lock:.3}},skills:[{name:"Marque de couleur",cd:8,anim:"slash",cast:.2,dmg:{kind:"target",mult:1,range:16},cc:{weak:[.35,8],slow:[.3,5]}},{name:"Lien gravitationnel",cd:12,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:1.2,r:9},cc:{pull:1,root:2.5}},{name:"Toile d\u2019absorption",cd:14,anim:"cast",cast:.2,busy:.3,self:{absorb:[.4,8]}},{name:"Fr\xE9n\xE9sie chromatique",ult:1,anim:"castUp",cast:.4,eq:3,dmg:{kind:"around",mult:3,r:7},cc:{para:2},self:{aspd:[.4,10],crit:[.4,10]}},h("Chef-d\u2019\u0153uvre",{para:3})]}}return Bd(a?"rodeur":"gladiateur",e,t,n,s)}function Hd(i,e=30){let t=Math.min(es.crit,i.ref.crit),n=i.ref.cdm,s=i.passive||{},r=.01,a=0,o=0,c=0,h=0,u=0,f=0,p=-1,d=0,x=null,v=0,g=null,m=0,M=[0,0,0],_=[0,0],E=[0,0],D=[0,0],P=[0,0],L={},k=G=>a<G[1]?G[0]:0,S=(G,Z={})=>{let N=G*(1+(s.atk||0)+k(_))*(1+k(P)),J=!!Z.crit;d&&!Z.pet&&(N*=d,J=!0,d=0),N*=J?n:1+Math.min(es.crit,t+k(E))*(n-1),o+=N},A=G=>{G&&(G.atk&&(_[0]=G.atk[0],_[1]=a+G.atk[1]),G.crit&&(E[0]=G.crit[0],E[1]=a+G.crit[1]),G.aspd&&(D[0]=G.aspd[0],D[1]=a+G.aspd[1]),G.stealth&&(d=G.stealth[1]),G.reset!=null&&(M[G.reset-1]=0))},y=G=>{G&&(G.weak&&(P[0]=G.weak[0],P[1]=a+G.weak[1]),G.dot&&(L[G.key||"x"]=[G.dot[0],a+G.dot[1]]),G.notes&&(u=Math.min(5,u+G.notes),f=a+8))};for(;a<e;){for(let G in L)a<L[G][1]&&(o+=L[G][0]*(1+k(P))*(1+(s.atk||0))*(1+t*(n-1))*r);if(u&&a<f&&(o+=u*sh*(1+k(P))*(1+t*(n-1))*r),x&&(v+=r,v>=x.iv&&(v-=x.iv,S(x.mult,{pet:1}))),a>=c){let G=-1;if(!g){for(let Z=0;Z<3;Z++)if(i.skills[Z]&&M[Z]<=a){G=Z;break}}if(g||G>=0){let Z=g||i.skills[G],N=Z.dmg;if(c=a+Nr(Z),g?g=null:(M[G]=a+Z.cd,Z.chain&&(g=Z.chain)),Z.special==="spirit"?(x=Sa[0],v=0):Z.special==="mecha"&&(a>=p&&(p=a+i.mecha.dur),M[G]=p+Z.cd),N){let J=N.hits||1,b=0;Z.special==="notes"&&(b=.7*u,u=0),Z.special==="runes"&&(b=N.per*m,m=0);for(let ee=0;ee<J;ee++)S((Array.isArray(N.mult)?N.mult[ee]:N.mult)+(ee===0?b:0),{crit:N.crit})}Z.cc&&Z.cc.runes&&(m=Math.min(5,m+Z.cc.runes*(N&&N.hits||1))),y(Z.cc),A(Z.self)}else{let Z=a<p?i.mecha.basic:i.basic,N=++h,J=Z.mult*Z.F,b=Z.dur*(1-Math.min(es.aspd,k(D)));Z.every&&N%Z.every.n===0&&(J*=Z.every.k,b+=Z.every.lock*.5),c=a+b,S(J),Z.dot&&(L.basic=[Z.dot[0],a+Z.dot[1]]),Z.note&&(u=Math.min(5,u+1),f=a+8),Z.rune&&(m=Math.min(5,m+1))}}a+=r}return o}var Gd=i=>{let e=i.dmg;if(!e)return i.eq||0;let t=e.hits||1,n=0;for(let s=0;s<t;s++)n+=Array.isArray(e.mult)?e.mult[s]:e.mult;return n+(i.eq||0)};var st={x:-200,z:70,r:22.4,wall:33.6,gate:.17},ah={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},oh=[16734842,4704511,16765514,9166954],Vd={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.6,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.7,rest:1,h:2.05},duel:{name:"Duelliste d\u2019ombre",hp:150,atk:13,spd:5.3,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},pvp:{name:"Daeva d\u2019ombre",hp:165,atk:13,spd:5.4,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},swift:{name:"Ombre vive",hp:34,atk:5,spd:7.6,range:2,rad:.45,wind:.42,rest:.45,h:1.9},leap:{name:"Ombre bondissante",hp:52,atk:9,spd:5.6,range:2.2,rad:.7,wind:.6,rest:1,h:1.3},archer:{name:"Ombre tireuse",hp:40,atk:7,spd:4.6,range:15,rad:.45,wind:.75,rest:1.1,h:2},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},k1=[[36,252,"wolf",2,1],[-34,318,"swift",3,4],[92,296,"brute",4,1],[150,-246,"pvp",4,1],[58,-292,"leap",5,4],[-176,-160,"archer",6,4],[-300,110,"brute",7,1],[262,130,"pvp",3,1],[-120,240,"shade",5,5],[330,-120,"pvp",8,1]],Fr={templier:{name:"Templier d\u2019ombre",main:"epee",off:"bouclier",hp:1.4,atk:.85,range:2.6,wind:1,rest:1,sp:"bash",block:.35},gladiateur:{name:"Gladiateur d\u2019ombre",main:"guisarme",hp:1.15,atk:1.05,range:3.5,wind:1.15,rest:1.1,sp:"whirl"},assassin:{name:"Assassin d\u2019ombre",main:"dague",off:"dague",hp:.85,atk:.8,spd:1.2,range:2.1,wind:.65,rest:.55,sp:"blink"},rodeur:{name:"R\xF4deur d\u2019ombre",main:"arc",hp:.85,atk:.9,range:18,wind:1.05,rest:1.1,ranged:"arrow",kite:1,sp:"trap"},sorcier:{name:"Sorcier d\u2019ombre",main:"orbe",hp:.8,atk:1.15,range:16,wind:1.5,rest:1.1,ranged:"bolt",kite:1,sp:"meteor"},spiritualiste:{name:"Spiritualiste d\u2019ombre",main:"grimoire",hp:.85,atk:.8,range:15,wind:1.2,rest:1.1,ranged:"bolt",kite:1,sp:"summon"},clerc:{name:"Clerc d\u2019ombre",main:"masse",off:"bouclier",hp:1.15,atk:.8,range:13,wind:1.1,rest:1.1,ranged:"bolt",sp:"heal"},aede:{name:"A\xE8de d\u2019ombre",main:"baton",hp:1.15,atk:.9,range:3.2,wind:1.05,rest:1,sp:"stun"},pistolero:{name:"Pistolero d\u2019ombre",main:"pistolet",off:"pistolet",hp:.85,atk:.55,spd:1.1,range:14,wind:.6,rest:.45,ranged:"bullet",sp:"roll"},ethertech:{name:"\xC9thertech d\u2019ombre",main:"lamecle",hp:1.5,atk:1.05,range:3,wind:1.2,rest:1.15,sp:"grab"},barde:{name:"Barde d\u2019ombre",main:"harpe",hp:.85,atk:.85,range:16,wind:1.1,rest:1.1,ranged:"wave",kite:1,sp:"slow"},peintre:{name:"Peintre d\u2019ombre",main:"anneaux",hp:.95,atk:.9,range:11,wind:1,rest:1,ranged:"paint",sp:"slow"}},Wd=["gladiateur","rodeur","templier","sorcier","assassin","clerc","pistolero","spiritualiste","aede","barde","ethertech","peintre"],O1=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],N1=new X(0,1,0),ts=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function Xd(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:c,toast:h,cb:u}=i,f=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.cls&&s.cls.id||"",d=ah[p]||8386303,x=s.hero&&s.hero.main&&s.hero.main.type,v=s.hero&&s.hero.off&&s.hero.off.type,g=Fd(p,x,v),m=g.passive||{},M=g.skills;f.ref&&(f.crit=g.ref.crit,f.critDmg=g.ref.cdm);let _=Ud(p),E=kd*_/Hd(g)*(rh[g.id]||rh[p]||1),D=f.atk*E,P=M[3]?Od*_*(p==="assassin"?1.4:1)/(Gd(M[3])*E):1,L=[!1].concat(M.map((l,T)=>(s.level||1)<wa[T])),k=g.basic,S=k.kind==="melee",A=p==="assassin"||p==="pistolero",y={hp:f.hp,max:f.hp,shield:0,shieldT:0,charge:0,cds:[0,0,0,0,0,0],cdMax:[1,1,1,1,1,1],busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0,dealt:0,atkB:0,atkT:0,critB:0,critT:0,aspdB:0,aspdT:0,guardB:0,guardT:0,absorbB:0,absorbT:0,hot:0,hotT:0,stealthT:0,stealthK:1,rezCd:0,stunT:0,rootT:0,eslowT:0,eslowK:0,chain:[null,null,null,null,null,null],manual:!1,slowK:1,slowT:0,mecha:null,focus:null,focusT:0,spirit:-1},G=Math.min(60,Math.max(0,s.regen||0)),Z=[],N=[],J=[],b=[],ee=[],$=[],W={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},ie={shake:0,held:!1,warnT:0,auto:!1,lock:!1,lockE:null,autoMove:null,enemies:Z,arena:W,pl:y,allies:ee,kit:g,norm:E},Se=(l,T)=>b.push({t:l,fn:T}),be=(l,T,w,U)=>Math.hypot(l-w,T-U),he=(l,T)=>Math.atan2(l-t.x,T-t.z),Re=(l,T)=>be(l,T,st.x,st.z)<st.r,we={arc:new gi(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new gi(.84,1,48).rotateX(-Math.PI/2),tube:new Un(1,1,1,24,1,!0).translate(0,.5,0),ball:new xi(1,14,10),arrow:new vn(.04,1,6).rotateX(Math.PI/2),tracer:new Un(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let l in we)we[l].userData.shared=!0;let Xe=(l,T=.9,w=!0)=>new Ft({color:l,transparent:!0,opacity:T,side:tn,blending:w?Gn:hs,depthWrite:!1,fog:!1});function Ve(l,T,w){return e.add(l),J.push({obj:l,t:0,dur:T,upd:w}),l}function at(l){e.remove(l),l.traverse(T=>{T.material&&T.material.dispose(),T.geometry&&!T.geometry.userData.shared&&T.geometry.dispose()})}function Ke(l,T,w,U,V,B,F,ue=.24){let fe=new vt;fe.position.set(l,T,w),fe.rotation.y=U;let le=new Ne(we.arc,Xe(F));le.rotation.z=V,fe.add(le),Ve(fe,ue,ge=>{le.material.opacity=.95*(1-ge),le.scale.setScalar(B*(.82+ge*.3)),le.rotation.y=(ge-.5)*.9})}function Oe(l,T,w,U,V,B,F=.45,ue=.9){let fe=new Ne(we.ring,Xe(U,ue));fe.position.set(l,T+.1,w),Ve(fe,F,le=>{fe.scale.setScalar(V+(B-V)*(1-(1-le)*(1-le))),fe.material.opacity=ue*(1-le*le)})}function $e(l,T,w,U,V,B,F=.5){let ue=new Ne(we.tube,Xe(U,.55));ue.position.set(l,T,w),Ve(ue,F,fe=>{let le=V*(1-fe*.55);ue.scale.set(le,B*Math.min(1,fe*5+.1),le),ue.material.opacity=.6*(1-fe)})}function Y(l,T,w,U,V,B=.25){let F=new Ne(we.ball,Xe(U,.7));F.position.set(l,T,w),Ve(F,B,ue=>{F.scale.setScalar(V*(.4+ue*.8)),F.material.opacity=.7*(1-ue)})}function Ie(l,T,w,U,V=12,B=5,F=.5){let ue=new Float32Array(V*3),fe=new Float32Array(V*3);for(let Pe=0;Pe<V;Pe++){let mt=Math.random()*6.2832,Mt=Math.random()*1.3-.2,Tt=B*(.4+Math.random()*.8);fe[Pe*3]=Math.cos(mt)*Math.cos(Mt)*Tt,fe[Pe*3+1]=Math.sin(Mt)*Tt+1.5,fe[Pe*3+2]=Math.sin(mt)*Math.cos(Mt)*Tt,ue[Pe*3]=l,ue[Pe*3+1]=T,ue[Pe*3+2]=w}let le=new qt;le.setAttribute("position",new xn(ue,3));let ge=new Po(le,new ha({color:U,size:c?.2:.28,transparent:!0,opacity:1,blending:Gn,depthWrite:!1,fog:!1}));ge.frustumCulled=!1;let ke=0;Ve(ge,F,Pe=>{let mt=(Pe-ke)*F;ke=Pe;for(let Mt=0;Mt<V*3;Mt+=3)ue[Mt]+=fe[Mt]*mt,ue[Mt+1]+=fe[Mt+1]*mt,ue[Mt+2]+=fe[Mt+2]*mt,fe[Mt+1]-=9*mt;le.attributes.position.needsUpdate=!0,ge.material.opacity=1-Pe})}let me=new X;function Ae(l,T,w,U,V){if(me.set(l,T,w).project(a),me.z>1||Math.abs(me.x)>1.1)return;let B=document.createElement("span");B.className="ew-num "+(V||""),B.textContent=U,B.style.left=(me.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",B.style.top=(-me.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(B),setTimeout(()=>B.remove(),850)}let ve=new Ne(we.ball,Xe(8378623,.16));ve.scale.setScalar(1.25),ve.visible=!1,e.add(ve);let Ue=new Ne(we.ring,Xe(d,.7));Ue.visible=!1,e.add(Ue);let Fe=(()=>{let l=document.createElement("canvas");l.width=l.height=64;let T=l.getContext("2d");return T.beginPath(),T.moveTo(32,4),T.lineTo(61,58),T.lineTo(3,58),T.closePath(),T.fillStyle="#fff",T.fill(),T.lineWidth=4,T.strokeStyle="#000",T.stroke(),T.fillStyle="#000",T.fillRect(28.5,22,7,20),T.fillRect(28.5,46,7,7),new Vn(l)})();function z(l){let T=l.barCv.getContext("2d");if(T.clearRect(0,0,64,8),T.fillStyle="rgba(0,0,0,.75)",T.fillRect(0,0,64,8),T.fillStyle=l.type==="dummy"?"#ffd479":l.boss?"#ff4d6d":"#ff8a5a",T.fillRect(1,1,62*Math.max(0,Math.min(1,l.hp/l.max)),6),l.runes){T.fillStyle="#e9ddff";for(let w=0;w<l.runes;w++)T.fillRect(3+w*7,2,4,4)}l.barTex.needsUpdate=!0}function R(l,T,w,U=1,V={}){let B=Vd[l],F=l==="pvp"?Fr[V.cls||Wd[Math.floor(Math.random()*12)]]:null,ue=l==="dummy"||B.boss||F?[1,1,1]:[.85+Math.random()*.35,.85+Math.random()*.3,.8+Math.random()*.4],fe=Math.pow(1.2,U-1)*(V.hpK||1)*(F?F.hp:1)*ue[0],le={type:l,T:B,x:T,z:w,y:r(T,w),yaw:V.yaw??Math.random()*6.28,hp:Math.round(B.hp*fe),atk:B.atk*Math.pow(1.16,U-1)*(V.atkK||1)*(F?F.atk:1),def:4*Math.pow(1.15,U-1),spd:B.spd*(F&&F.spd||1)*ue[1],range:F?F.range:B.range,rad:B.rad,P:F,ranged:F?F.ranged:l==="archer"?"arrow":null,wind:(B.wind||.6)*(F?F.wind:ue[2]),rest:(B.rest||1)*(F?F.rest:ue[2]),spT:F?1+Math.random()*1.5:3+Math.random()*3,side:Math.random()<.5?1:-1,combo:0,minion:!!V.minion,state:V.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!B.boss,elite:!!B.elite,runes:0,runeT:0,tint:!1,home:[T,w],wild:V.wild||null,arena:!!V.arena,lvl:U,lunge:0,n:0,wobT:0,wT:0,rootT:0,slowT:0,slowK:0,silT:0,weakT:0,weakK:0,aspdT:0,aspdK:0,sapT:0,sapK:0,notes:0,noteT:0,noteAcc:0,kd:!1,kdCd:0,zT:0};le.max=le.hp;let ge=new vt;if(le.obj=ge,l==="dummy"){let ke=new hn({color:6965802,roughness:.9}),Pe=new hn({color:13481066,roughness:1}),mt=new vt;le.wob=mt,ge.add(new Ne(new Un(.07,.1,1,8).translate(0,.5,0),ke)),mt.position.y=.95,mt.add(new Ne(new Un(.27,.2,.78,10).translate(0,.42,0),Pe),new Ne(new xi(.19,10,8).translate(0,.98,0),Pe),new Ne(new Qn(1.15,.09,.09).translate(0,.62,0),ke));let Mt=new Ne(new ki(.12,16).translate(0,.46,.262),new Ft({color:12597547}));mt.add(Mt),ge.add(mt),ge.traverse(Tt=>{Tt.isMesh&&(Tt.castShadow=!0)})}else if(F||l==="swift"||l==="archer"){let ke=F?"#"+(ah[Object.keys(Fr).find(Pe=>Fr[Pe]===F)]||9133302).toString(16).padStart(6,"0"):l==="archer"?"#4a6a3a":"#3a5a6a";le.av=Ss({look:{gender:Math.random()<.3?"f":"m",height:F?1.1:.95,build:F?1.05:.9,hair:Math.random()<.5?"court":"brosse"},outfit:{cut:F?"coat":"suit",c:["#15121e","#08070c",ke]},armor:F?{plastron:4,casque:F.off==="bouclier"?4:void 0}:{},main:{type:F?F.main:l==="archer"?"arc":"dague",r:F?4:2},off:F&&F.off?{type:F.off,r:4}:l==="swift"?{type:"dague",r:2}:null,fx:{shadow:"#140f22",eyes:F?"#ffd24a":"#c8b6ff",lod:!0}}),le.av.setArmed(!0),ge.add(le.av.group),le.model=le.av.group,F&&(le.name=F.name)}else if(l==="shade"||l==="champion"||l==="duel"){let ke=l==="champion",Pe=l==="duel";le.av=Ss({look:{gender:"m",height:ke?1.5:Pe?1.16:1+Math.random()*.08,build:ke?1.2:Pe?1.08:1,shoulders:ke?1.14:Pe?1.08:1,hair:ke?"brosse":"court"},outfit:{cut:ke?"plate":"coat",c:Pe?["#2a1016","#12080b","#8a2a3a"]:["#1a1626","#0e0c16","#3a2a5a"]},armor:ke?{casque:5,plastron:5,jambieres:5}:Pe?{plastron:4}:{},main:{type:ke?"espadon":Pe?Math.random()<.5?"epee":"espadon":Math.random()<.5?"epee":"guisarme",r:ke?5:Pe?4:3},fx:{shadow:ke?"#2a1234":Pe?"#2c1218":"#17152c",eyes:ke?"#ff4d6d":Pe?"#ffd24a":"#c8b6ff",lod:!0}}),le.av.setArmed(!0),ge.add(le.av.group),le.model=le.av.group}else{let ke=Ad[l==="leap"?"wolf":l]();le.beast=ke,ge.add(ke.group),le.model=ke.group,l==="leap"&&(ke.group.scale.setScalar(.85),ke.group.traverse(Pe=>{Pe.isMesh&&Pe.material&&Pe.material.color&&(Pe.material=Pe.material.clone(),Pe.material.color.lerp(new rt(2779738),.45))}))}if(le.mats=[],ge.traverse(ke=>{ke.isMesh&&ke.material&&ke.material.emissive&&!le.mats.includes(ke.material)&&le.mats.push(ke.material)}),le.mats.forEach(ke=>{ke.userData.e0=ke.emissive.getHex(),ke.userData.i0=ke.emissiveIntensity}),le.barCv=document.createElement("canvas"),le.barCv.width=64,le.barCv.height=8,le.barTex=new Vn(le.barCv),le.bar=new Ui(new Si({map:le.barTex,transparent:!0,depthWrite:!1,fog:!1})),le.bar.scale.set(le.boss?2.6:1.3,le.boss?.22:.14,1),le.bar.position.y=B.h+.3,le.bar.visible=l!=="dummy",ge.add(le.bar),z(le),F||B.boss){let ke=document.createElement("canvas");ke.width=512,ke.height=64;let Pe=ke.getContext("2d"),mt=le.name||B.name,Mt=F?"#"+(ah[Object.keys(Fr).find(Dn=>Fr[Dn]===F)]||16777215).toString(16).padStart(6,"0"):"#ff6a7a";Pe.font="700 34px Oxanium, Barlow, sans-serif",Pe.textAlign="center",Pe.textBaseline="middle",Pe.lineJoin="round",Pe.lineWidth=7,Pe.strokeStyle="rgba(0,0,0,.9)",Pe.strokeText(mt,256,34),Pe.fillStyle=Mt,Pe.fillText(mt,256,34);let Tt=new Vn(ke);Tt.colorSpace=en,le.tag=new Ui(new Si({map:Tt,transparent:!0,depthWrite:!1,fog:!1})),le.tag.scale.set(le.boss?4:3.4,le.boss?.5:.42,1),le.tag.position.y=B.h+(le.boss?.62:.52),ge.add(le.tag),le.tagTex=Tt}return l!=="dummy"&&(le.warn=new Ui(new Si({map:Fe,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),le.warn.position.y=B.h+(le.boss?1.45:F?1.2:.95),le.warn.visible=!1,le.warn.renderOrder=9,ge.add(le.warn)),ge.position.set(T,le.y,w),ge.rotation.y=le.yaw,e.add(ge),Z.push(le),!V.quiet&&l!=="dummy"&&($e(T,le.y,w,6962431,1.2+le.rad,6,.7),Oe(T,le.y,w,9133302,.3,2.4+le.rad,.55)),le}function te(l){let T=Z.indexOf(l);if(T>=0&&Z.splice(T,1),e.remove(l.obj),l.barTex.dispose(),l.tagTex&&l.tagTex.dispose(),Ai(l.obj),l.wild){let w=l.wild;w.es=w.es.filter(U=>U!==l),!w.es.length&&l.state==="dead"&&(w.t=45)}}function xe(l){l.state!=="dead"&&(Ze(l),l.state="dead",l.t=0,l.hp=0,z(l),Ie(l.x,l.y+l.T.h*.5,l.z,9133302,l.boss?40:18,6,.7),Oe(l.x,l.y,l.z,12167423,.4,l.boss?7:3,.6),l.boss&&(ie.shake=Math.max(ie.shake,.5),h(l.T.name+" terrass\xE9")))}let _e=l=>{y.charge=Math.min(100,y.charge+l)},Te=l=>{l<=0||y.down>0||(y.hp=Math.min(y.max,y.hp+l),Ae(t.x,t.y+2.1,t.z,"+"+l,"heal"))},tt=()=>(m.atk||0)+(y.atkT>0?y.atkB:0),ze=(l,T,w)=>Ae(l.x,l.y+l.T.h+.35,l.z,T,w||"info");function Ze(l){l.treeM&&(l.obj.remove(l.treeM),l.treeM.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()}),l.treeM=null,l.model&&(l.model.visible=!0))}function it(l,T,w,U){if(l.state==="dead")return;Ze(l),l.state==="leap"&&(l.hop=0),l.kind=null;let V=l.state===T;l.state=T,l.stun=Math.max(V?l.stun:0,w),l.kd=!1,ze(l,U)}function ut(l,T,w){if(!T||l.state==="dead"||(T.weak&&(l.weakK=T.weak[0],l.weakT=T.weak[1],ze(l,"Vuln\xE9rable")),T.dot&&(l.dots=l.dots.filter(V=>V.k!==w),l.dots.push({k:w,v:D*(1+tt())*T.dot[0],n:T.dot[1],t:1})),T.notes&&(l.notes=Math.min(5,l.notes+T.notes),l.noteT=8),T.runes&&(l.runes=Math.min(5,l.runes+T.runes),l.runeT=10,z(l)),l.type==="dummy"))return;let U=l.boss?.5:l.elite?.75:1;if(T.pull&&!l.boss){let V=t.yaw+(Math.random()-.5)*.8,B=1.7+l.rad;Ke(t.x,t.y+1.1,t.z,he(l.x,l.z),1.57,be(t.x,t.z,l.x,l.z),16777215,.25),l.x=t.x+Math.sin(V)*B,l.z=t.z+Math.cos(V)*B}if(T.kd&&(it(l,"stun",T.kd*U,"\xC0 terre"),l.kd=!0),T.stun&&it(l,"stun",T.stun*U,"\xC9tourdi"),T.para&&it(l,"stun",T.para*U,"Paralys\xE9"),T.sleep&&it(l,"sleep",T.sleep*U,"Endormi"),T.fear&&it(l,"fear",T.fear*U,"Apeur\xE9"),T.tree)if(l.boss)it(l,"stun",1.5,"\xC9tourdi");else{it(l,"tree",T.tree,"M\xE9tamorphos\xE9");let V=new vt,B=new Ne(new Un(.14,.2,.9,7).translate(0,.45,0),new hn({color:5913890,roughness:1})),F=new Ne(new vn(.75,1.5,8).translate(0,1.55,0),new hn({color:5216826,roughness:1}));V.add(B,F),l.obj.add(V),l.treeM=V,l.model&&(l.model.visible=!1),Ie(l.x,l.y+1,l.z,9166954,16,4,.5)}T.root&&(l.rootT=Math.max(l.rootT,T.root*U),ze(l,"Enracin\xE9"),Oe(l.x,l.y,l.z,9166954,l.rad+.6,l.rad+.7,T.root*U,.8)),T.slow&&(l.slowK=T.slow[0],l.slowT=T.slow[1],ze(l,"Ralenti")),T.sil&&(l.silT=Math.max(l.silT,T.sil*U),ze(l,"Silence")),T.aspd&&(l.aspdK=T.aspd[0],l.aspdT=T.aspd[1],ze(l,"Gestes ralentis")),T.sap&&(l.sapK=T.sap[0],l.sapT=T.sap[1],ze(l,"Affaibli"))}function ye(l,T,w={}){if(l.state==="dead")return 0;let U=D*(1+tt())*T*(ie.avg?1:1-g.var+Math.random()*2*g.var),V=!!w.crit;if(y.stealthT>0&&!w.pet&&(U*=y.stealthK,V=!0,ht(0),ze(l,"Surprise","crit")),l.state==="sleep"&&(U*=1.5,l.state="chase",l.stun=0),l.P&&l.P.block&&l.state!=="stun"&&Math.abs(ts(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))<1.2&&Math.random()<l.P.block&&(U*=.3,ze(l,"Bloqu\xE9")),l.P&&l.P.sp==="roll"&&l.spT<=0&&l.state==="chase"){l.spT=3.5;let fe=Math.atan2(t.x-l.x,t.z-l.z)+l.side*1.57;l.x+=Math.sin(fe)*3.5,l.z+=Math.cos(fe)*3.5,Oe(l.x,l.y,l.z,16777215,.3,1.4,.25,.5)}let B=!!m.back&&!w.pet&&Math.abs(ts(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))>2,F=f.critDmg+(B?m.back.cdm:0),ue=Math.min(es.crit,f.crit+(y.critT>0?y.critB:0)+(B?m.back.crit:0));if(ie.avg?U*=V?F:1+ue*(F-1):(V=V||Math.random()<ue,V&&(U*=F)),w.pierce||(U*=100/(100+l.def)),l.weakT>0&&(U*=1+l.weakK),U=Math.max(1,Math.round(U)),y.dealt+=U,l.type==="dummy"?l.wobT=.5:l.hp-=U,w.pet||(y.focus=l,y.focusT=6),l.flash=.09,z(l),Ae(l.x,l.y+l.T.h*.85,l.z,(B&&V?"\u2726\u2726 ":V?"\u2726 ":"")+U,V?"crit":""),Ie(l.x,l.y+l.T.h*.55,l.z,w.color||d,V?12:6,4,.35),w.acc&&(w.acc.d+=U),w.steal&&Te(Math.round(U*w.steal/100)),w.cc&&ut(l,w.cc,w.key),l.type!=="dummy"){if(V&&m.kdOnCrit&&l.kdCd<=0&&l.hp>0?(l.kdCd=4,ut(l,{kd:m.kdOnCrit})):V&&w.basic&&g.W.kd&&!y.mecha&&l.kdCd<=0&&l.hp>0&&Math.random()<g.W.kd&&(l.kdCd=4,ut(l,{kd:1.5})),V&&w.basic&&g.W.kb&&!l.boss&&l.rootT<=0){let fe=Math.atan2(l.x-t.x,l.z-t.z);l.x+=Math.sin(fe)*g.W.kb,l.z+=Math.cos(fe)*g.W.kb}if(!l.boss&&l.rootT<=0){let fe=Math.atan2(l.x-t.x,l.z-t.z),le=w.kb??.3;l.x+=Math.sin(fe)*le,l.z+=Math.cos(fe)*le}l.state==="idle"&&(l.state="chase"),l.hp<=0&&xe(l)}return U}function gt(l,T=1,w=null){if(y.down>0||y.inv>0)return;if(ie.auto){Ae(t.x,t.y+2.1,t.z,"Esquive","info"),Oe(t.x,t.y,t.z,16777215,.3,1.6,.25,.6),y.busy<=.05&&n.play("dash",.22);return}let U=Math.max(1,Math.round(l.atk*T*(l.sapT>0?1-l.sapK:1)*(.9+Math.random()*.2)*100/(100+f.def)));if(y.mecha){y.mecha.hp-=U,y.lastHit=0,Ae(t.x,t.y+3.4,t.z,"-"+U,"info"),ie.shake=Math.max(ie.shake,.12),y.mecha.hp<=0&&Q(!0);return}if(Math.random()<Math.min(es.dodge,f.dodge+(m.dodge||0))){Ae(t.x,t.y+2.1,t.z,"Esquive","info");return}if(m.block&&Math.random()<Math.min(es.block,m.block)){Ae(t.x,t.y+2.1,t.z,"Bloqu\xE9","info"),Y(t.x,t.y+1.1,t.z,16777215,.7,.15);return}if(U=Math.max(1,Math.round(U*(1-Math.min(.8,(m.guard||0)+(y.guardT>0?y.guardB:0))))),y.absorbT>0){let V=Math.round(U*y.absorbB);U-=V,Te(V)}if(y.shield>0){let V=Math.min(y.shield,U);if(y.shield-=V,U-=V,U<=0){Ae(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}if(!(U<=0)){if(y.hp-=U,y.lastHit=0,_e(2),Ae(t.x,t.y+2.1,t.z,"-"+U,"hurt"),ie.shake=Math.max(ie.shake,.22),w){if(w.pull){let V=w.pull.yaw;t.x=w.pull.x+Math.sin(V)*2,t.z=w.pull.z+Math.cos(V)*2}w.stun&&(y.stunT=Math.max(y.stunT,w.stun),Ae(t.x,t.y+2.5,t.z,"\xC9tourdi","info")),w.root&&(y.rootT=Math.max(y.rootT,w.root),Ae(t.x,t.y+2.5,t.z,"Enracin\xE9","info")),w.slow&&(y.eslowK=w.slow[0],y.eslowT=w.slow[1],Ae(t.x,t.y+2.5,t.z,"Ralenti","info"))}if(n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),Se(.2,()=>o.classList.remove("ew-hit")),y.hp<=0&&m.rez&&y.rezCd<=0){y.rezCd=m.rez,y.hp=Math.round(y.max*.5),y.inv=2.5,$e(t.x,t.y,t.z,16773808,1.6,12,.9),Oe(t.x,t.y,t.z,16773808,.4,5,.7),h("R\xE9surrection","De nouveau disponible dans "+m.rez+" s");return}y.hp<=0&&(y.hp=0,y.down=2.8,t.down=!0,y.queue=!1,ht(0),h("Vaincu",W.on?"Vague "+W.wave+" atteinte":"Les ombres se dispersent"))}}let ct=null;function ht(l,T){let w=l>0;y.stealthT=l,w&&(y.stealthK=T),ct||(ct=[],n.group.traverse(U=>{if(!(!U.isMesh||!U.material||U.userData.ink))for(let V of Array.isArray(U.material)?U.material:[U.material])!V.transparent&&!ct.includes(V)&&ct.push(V)}));for(let U of ct)U.transparent=w,U.opacity=w?.3:1,U.needsUpdate=!0;for(let U of n.inks||[])U.visible=!w}function lt(l){for(let ke of ee.slice())Qe(ke);let T=new vt,w=new Ft({color:l.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),U=Xe(l.color,.13),V=new Ft({color:16777215,fog:!1}),B=(ke,Pe,mt,Mt,Tt,Dn)=>{let En=new Ne(ke,Pe);return En.position.set(mt,Mt,Tt),(Dn||T).add(En),En};B(new vn(.95,2.6,12).rotateX(Math.PI),w,0,1.3,0),B(we.ball,w,0,2.75,0).scale.set(1.2,1.05,.85),B(we.ball,U,0,2.7,0).scale.setScalar(1.7),B(we.ball,w,0,3.95,.05).scale.setScalar(.52);for(let ke of[-1,1])B(we.ball,V,ke*.2,4,.47).scale.set(.1,.05,.05),B(new vn(.14,.6,6),w,ke*.34,4.5,0).rotation.z=-ke*.5;let F=[];for(let ke of[-1,1]){let Pe=new vt;Pe.position.set(ke*1.3,3.15,0),B(we.ball,w,0,0,0,Pe).scale.setScalar(.5),B(new Un(.3,.36,1.6,8).translate(0,-.9,0),w,0,0,0,Pe),B(we.ball,w,0,-1.9,0,Pe).scale.setScalar(.52),T.add(Pe),F.push(Pe)}T.scale.setScalar(l.sc);let ue=t.yaw+.6,fe=t.x+Math.sin(ue)*3,le=t.z+Math.cos(ue)*3,ge={S:l,obj:T,arms:F,x:fe,z:le,y:r(fe,le),yaw:t.yaw,hp:Math.round(y.max*l.hp),max:Math.round(y.max*l.hp),rad:1.2*l.sc,life:60,cd:.4,swing:0,t:0,rage:0};return ge.barCv=document.createElement("canvas"),ge.barCv.width=64,ge.barCv.height=8,ge.barTex=new Vn(ge.barCv),ge.bar=new Ui(new Si({map:ge.barTex,transparent:!0,depthWrite:!1,fog:!1})),ge.bar.scale.set(2.4,.2,1),ge.bar.position.y=5.3,T.add(ge.bar),je(ge),T.position.set(fe,ge.y,le),e.add(T),ee.push(ge),$e(fe,ge.y,le,l.color,2.2,9,.8),Oe(fe,ge.y,le,l.color,.4,4.5,.7),Ie(fe,ge.y+2,le,l.color,30,6,.8),h(l.name),ge}function je(l){let T=l.barCv.getContext("2d");T.clearRect(0,0,64,8),T.fillStyle="rgba(0,0,0,.75)",T.fillRect(0,0,64,8),T.fillStyle="#7fe0ff",T.fillRect(1,1,62*Math.max(0,l.hp/l.max),6),l.barTex.needsUpdate=!0}function Qe(l){let T=ee.indexOf(l);T>=0&&ee.splice(T,1),Ie(l.x,l.y+2,l.z,l.S.color,24,5,.7),e.remove(l.obj),l.barTex.dispose(),l.obj.traverse(w=>{w.material&&w.material.dispose(),w.geometry&&!w.geometry.userData.shared&&w.geometry.dispose()})}function dt(l,T){let w=Math.max(1,Math.round(T.atk*(.9+Math.random()*.2)*100/(100+f.def)));l.hp-=w,je(l),Ae(l.x,l.y+4.6*l.S.sc,l.z,"-"+w,"info"),l.hp<=0&&(h(l.S.name+" dissip\xE9"),Qe(l))}function zt(l,T){if(l.t+=T,l.life-=T,l.cd-=T,l.rage>0&&(l.rage-=T),l.life<=0){Qe(l);return}let w=l.S,U=Kn(l.x,l.z,24)||(y.focusT>0&&y.focus&&y.focus.state!=="dead"&&be(l.x,l.z,y.focus.x,y.focus.z)<24?y.focus:null),V=0,B,F,ue;U?(B=U.x,F=U.z,ue=2.6*w.sc+U.rad):(B=t.x,F=t.z,ue=4.5);let fe=B-l.x,le=F-l.z,ge=Math.hypot(fe,le);if(ge>ue)V=Math.min(U?9:14,(ge-ue)*4+2),l.yaw+=ts(Math.atan2(fe,le),l.yaw)*Math.min(1,T*7),l.x+=Math.sin(l.yaw)*V*T,l.z+=Math.cos(l.yaw)*V*T;else if(U&&(l.yaw+=ts(Math.atan2(fe,le),l.yaw)*Math.min(1,T*8),l.cd<=0)){l.cd=w.iv,l.swing=Math.min(.45,w.iv*.8);let Pe=()=>{if(!ee.includes(l))return;let mt=l.x+Math.sin(l.yaw)*2,Mt=l.z+Math.cos(l.yaw)*2,Tt=w.mult*(l.rage>0?2:1);Ke(l.x,l.y+2.2,l.z,l.yaw,.2,w.aoe*w.sc,w.color,.3),w.iv>.8&&Oe(mt,l.y,Mt,w.color,.4,w.aoe*w.sc,.4);let Dn=!0;for(let En of Z.slice())En.state!=="dead"&&be(mt,Mt,En.x,En.z)<w.aoe*w.sc+En.rad&&(En.type!=="dummy"||En===y.focus)&&(ye(En,Dn?Tt:Tt*.6,{color:w.color,kb:.5,pet:1,cc:w.cc,key:w.id}),Dn=!1)};w.iv>.8?Se(.2,Pe):Pe()}w.heal&&y.hp<y.max&&y.down<=0&&be(l.x,l.z,t.x,t.z)<14&&(y.hp=Math.min(y.max,y.hp+y.max*w.heal/100*T)),l.y=Math.max(r(l.x,l.z),.2),l.swing>0&&(l.swing-=T);let ke=l.swing>0?Math.sin((1-l.swing/.45)*Math.PI):0;l.obj.scale.setScalar(w.sc*(l.rage>0?1.3:1)),l.obj.position.set(l.x,l.y+.25+Math.sin(l.t*2)*.15,l.z),l.obj.rotation.y=l.yaw,l.arms[0].rotation.x=-ke*2.1-.1,l.arms[1].rotation.x=-ke*1.6-.1+Math.sin(l.t*1.5)*.08,l.obj.visible=!t.inside}function pt(){let l=new vt,T=new hn({color:9148330,metalness:.3,roughness:.5}),w=new hn({color:4015702,metalness:.3,roughness:.6}),U=new hn({color:61695,emissive:61695,emissiveIntensity:1.6}),V=new hn({color:10483455,emissive:2808063,emissiveIntensity:.6,transparent:!0,opacity:.55}),B=(le,ge,ke,Pe,mt,Mt,Tt,Dn)=>{let En=new Ne(new Qn(le,ge,ke),Pe);return En.position.set(mt,Mt,Tt),En.castShadow=!0,(Dn||l).add(En),En};B(1.5,1.25,1.1,T,0,2.3,0),B(1.1,.5,.9,w,0,1.55,0),B(.5,.3,.44,w,0,3.1,.05),B(.4,.09,.05,U,0,3.12,.28),B(.18,.5,.05,U,0,2.3,.56);let F=new Ne(new xi(.46,14,10),V);F.position.set(0,2.62,.42),F.scale.set(1,.8,.8),l.add(F);for(let le of[-1,1]){B(.34,.5,.5,w,le*.5,2.9,-.5);let ge=new Ne(new vn(.16,.5,8),U);ge.position.set(le*.5,2.5,-.62),ge.rotation.x=Math.PI,l.add(ge)}let ue=[],fe=[];for(let le of[-1,1]){let ge=new vt;ge.position.set(le*.46,1.4,0),B(.42,.8,.48,T,0,-.38,0,ge),B(.48,.74,.56,w,0,-1.02,.02,ge),B(.56,.2,.86,T,0,-1.32,.12,ge),B(.1,.5,.05,U,0,-.9,.3,ge),l.add(ge),ue.push(ge)}for(let le of[-1,1]){let ge=new vt;ge.position.set(le*1.08,2.7,0),B(.72,.5,.74,T,0,.06,0,ge),B(.76,.1,.78,U,0,-.22,0,ge),B(.36,.9,.42,w,0,-.6,0,ge),B(.62,.62,.62,T,0,-1.3,0,ge),B(.64,.1,.64,U,0,-.96,0,ge),l.add(ge),fe.push(ge)}return{g:l,legs:ue,arms:fe}}function De(){let l=pt();e.add(l.g);let T=Math.round(y.max*g.mecha.hp);y.mecha={M:l,hp:T,max:T,t:g.mecha.dur,ph:0,swing:0,arm:0},n.group.visible=!1,k=g.mecha.basic,S=!0,o.classList.add("ew-mecha"),$e(t.x,t.y,t.z,61695,2.6,11,.8),Oe(t.x,t.y,t.z,61695,.5,6,.7),Ie(t.x,t.y+2,t.z,61695,40,8,.9),ie.shake=.4,h("Mecha en ligne","Il encaisse \xE0 votre place")}function Q(l){let T=y.mecha;T&&(y.mecha=null,e.remove(T.M.g),Ai(T.M.g),n.group.visible=!0,k=g.basic,S=k.kind==="melee",o.classList.remove("ew-mecha"),y.cds[1]=y.cdMax[1]=M[0].cd,y.inv=Math.max(y.inv,.8),Ie(t.x,t.y+1.5,t.z,l?16742970:61695,40,9,.9),Oe(t.x,t.y,t.z,61695,.5,6,.6),l&&(ie.shake=.6,h("Mecha d\xE9truit")))}function Be(l){for(;$.length>=2;){let U=$.shift();at(U.m)}let T=new vt,w=new Ne(we.ring,Xe(d,.75));w.scale.setScalar(1.3),w.position.y=.08,T.add(w);for(let U=0;U<6;U++){let V=new Ne(new vn(.07,.4,5),new hn({color:10134704,metalness:.8,roughness:.3}));V.position.set(Math.cos(U*1.047)*.7,.2,Math.sin(U*1.047)*.7),T.add(V)}T.position.set(t.x,t.y,t.z),e.add(T),$.push({m:T,x:t.x,z:t.z,y:t.y,t:25,s:l,ring:w})}function He(l){for(let T=$.length-1;T>=0;T--){let w=$[T];w.t-=l,w.ring.rotation.y+=l*1.5;let U=w.t<=0?null:Z.find(V=>V.state!=="dead"&&be(w.x,w.z,V.x,V.z)<2.6+V.rad&&(V.type!=="dummy"||V===y.focus));U&&($e(w.x,w.y,w.z,d,1.6,5,.5),wn(w.x,w.y,w.z,w.s.dmg.r,w.s.dmg.mult,{cc:w.s.cc,key:w.s.name,color:d}),ie.shake=Math.max(ie.shake,.25)),(U||w.t<=0)&&(at(w.m),$.splice(T,1))}}function ot(){y.hp=y.max,y.shield=0,t.down=!1,y.inv=2;for(let l of ee.slice())Qe(l);if(W.on)Et(),i.teleport(st.x+17,st.z);else{for(let l of Z)l.wild&&(l.state="idle",l.hp=l.max,z(l));i.teleport(-6,34),h("Rue du Four","Vous reprenez connaissance devant la Maison")}}let et=[],wt=[];function Rt(l,T,w,U){l.state="wind",l.t=0,l.kind=T,l.windT=w*U;let V=T==="whirl"?5:l.ranged||T==="grab"||T==="stunshot"||T==="meteor"?1.2:l.range+.5;l.av&&l.av.play(T==="shot"||T==="stunshot"?l.av.cat==="bow"?"bow":l.ranged==="wave"?"strum":l.ranged==="bullet"?"shoot":"cast":T==="meteor"||T==="grab"?"castUp":T==="whirl"?"spin":l.av.cat==="2h"?"heavy":"slash",l.windT/.52+(T==="whirl"?.3:0),l.n++),Oe(l.x,l.y,l.z,T==="whirl"?16715824:16724048,.3,V,l.windT,.85)}function Gt(l,T,w,U,V,B){let F=l.P,ue=Math.atan2(w,U),fe=0,le=ue;if(F&&!B&&l.spT<=0&&l.silT<=0){if(F.sp==="blink"&&T<18){Ie(l.x,l.y+1,l.z,2759232,18,4,.4);let ge=1.6;return l.x=t.x-Math.sin(t.yaw)*ge,l.z=t.z-Math.cos(t.yaw)*ge,l.yaw=t.yaw,Y(l.x,l.y+1,l.z,9133302,1.2,.25),ze(l,"Dans votre dos !","crit"),l.spT=7,Rt(l,"hit",l.wind*1.1,V),[0,t.yaw]}if(F.sp==="grab"&&T>3.5&&T<17)return l.spT=9,Rt(l,"grab",.75,V),[0,ue];if(F.sp==="stun"&&T<18)return l.spT=8,Rt(l,"stunshot",.65,V),[0,ue];if(F.sp==="meteor"&&T<18)return l.spT=6.5,Rt(l,"meteor",.9,V),[0,ue];if(F.sp==="trap"&&T<9&&(l.spT=10,wt.push(Vt(t.x,t.z,2.4,1.1,{root:1.6,k:.6,color:8376394})),ze(l,"Pi\xE8ge")),F.sp==="summon"&&Z.filter(ge=>ge.minion&&ge.owner===l&&ge.state!=="dead").length<2){l.spT=14;let ge=l.yaw+1.5,ke=R("wolf",l.x+Math.sin(ge)*2,l.z+Math.cos(ge)*2,l.lvl,{arena:l.arena,hpK:.45,atkK:.55,minion:!0});ke.owner=l,ke.name="Esprit invoqu\xE9",$e(ke.x,ke.y,ke.z,9133302,1,4,.5),ze(l,"Invocation")}if(F.sp==="heal"&&l.hp<l.max*.6){l.spT=10;let ge=Math.round(l.max*.22);l.hp=Math.min(l.max,l.hp+ge),z(l),$e(l.x,l.y,l.z,9306032,1,4,.6),ze(l,"+"+ge,"heal")}}if(l.type==="leap"&&(l.spT<=0||T>9)&&T>4.5&&T<15&&l.rootT<=0&&!B)return l.spT=3.5+Math.random()*2,Rt(l,"leap",.55,V),[0,ue];if(l.ranged){let ge=l.range;return T>ge*.92?fe=l.spd:F&&F.kite&&T<ge*.4?(fe=l.spd*.85,le=ue+Math.PI+l.side*.5):(fe=l.spd*.35,le=ue+l.side*1.4,Math.random()<.004&&(l.side*=-1)),T<=ge&&l.silT<=0&&l.cdT<=0?(l.cdT=.2,Rt(l,"shot",l.wind,V),[0,ue]):[fe,le]}return T>l.range*.82?[l.spd,ue]:(l.silT<=0&&(l.combo++,Rt(l,F&&F.sp==="whirl"&&l.combo%3===0?"whirl":F&&F.sp==="bash"&&l.combo%3===0?"bash":"hit",l.wind*(F&&F.sp==="whirl"&&l.combo%3===0?1.25:1),V)),[0,ue])}function Vt(l,T,w,U,V){let B=r(l,T);Oe(l,B,T,V.color||16724048,w-.15,w,U,.8);let F=new Ne(we.ring,Xe(V.color||16724048,.3));return F.scale.setScalar(.01),F.position.set(l,B+.06,T),F.rotation.x=-Math.PI/2,Ve(F,U,ue=>F.scale.setScalar(w*ue)),{x:l,z:T,y:B,r:w,t:U,fx:V}}function Ut(l,T,w,U,V,B){let F=l.kind||"hit",ue=l.P;if(F==="leap"){l.state="leap",l.t=0,l.lx0=l.x,l.lz0=l.z;let fe=V?V.x:t.x,le=V?V.z:t.z,ge=Math.atan2(l.x-fe,l.z-le);l.lx1=fe+Math.sin(ge)*1.2,l.lz1=le+Math.cos(ge)*1.2,Oe(l.lx1,r(l.lx1,l.lz1),l.lz1,16724048,2.2,2.6,.6,.8);return}if(F==="shot"||F==="stunshot"){let fe=V?V.x:t.x,le=V?V.z:t.z,ge=V?V.y+2:t.y+1.1;$t(l,fe,ge,le,F==="stunshot"?{stun:1.2,color:16765514}:ue&&ue.sp==="slow"?{slow:[.45,3]}:{},V);return}if(F==="meteor"){wt.push(Vt(t.x,t.z,3.4,1.25,{k:1.8,color:16734746,meteor:1}));return}if(F==="grab"){Ke(l.x,l.y+1.2,l.z,l.yaw,1.57,T,16777215,.3),B&&!V&&T<18&&gt(l,.6,{pull:l,stun:.7});return}if(l.lunge=.25,F==="whirl"){Oe(l.x,l.y,l.z,16728160,.5,5,.35),Ke(l.x,l.y+1,l.z,l.yaw,.1,4.6,16728160,.3),(V?be(l.x,l.z,V.x,V.z)<5+V.rad:B&&T<5)&&(V?dt(V,l):gt(l,1.4));return}Ke(l.x,l.y+l.T.h*.5,l.z,l.yaw,.3,l.range*.95,16728160,.2),B&&T<l.range+.7&&Math.abs(ts(Math.atan2(w,U),l.yaw))<1.25&&(V?dt(V,l):gt(l,F==="bash"?1.1:1,F==="bash"?{stun:1}:null))}function $t(l,T,w,U,V,B){let F=l.ranged||"bolt",ue=new X(l.x+Math.sin(l.yaw)*.6,l.y+1.3,l.z+Math.cos(l.yaw)*.6),fe=new X(T,w,U),le=fe.clone().sub(ue).normalize(),ge={arrow:42,bullet:50,bolt:26,wave:22,paint:28}[F]||30,ke=V.color||(F==="bolt"?11832575:F==="wave"?8376575:F==="paint"?16739e3:16732240),Pe=new Ne(F==="arrow"?we.arrow:F==="bullet"?we.tracer:we.ball,Xe(ke,.95));Pe.scale.setScalar(F==="arrow"||F==="bullet"?1:.32),Pe.position.copy(ue),Pe.quaternion.setFromUnitVectors(new X(0,0,1),le),e.add(Pe),et.push({m:Pe,v:le.multiplyScalar(ge),life:45/ge,e:l,fx:V,ally:B,atk:l.atk})}function Dt(l){for(let T=et.length-1;T>=0;T--){let w=et[T],U=w.m.position,V=U.x,B=U.z;U.addScaledVector(w.v,l),w.life-=l;let F=w.life<=0,ue=U.x-V,fe=U.z-B,le=ue*ue+fe*fe,ge=le>0?Math.max(0,Math.min(1,((t.x-V)*ue+(t.z-B)*fe)/le)):1,ke=V+ue*ge,Pe=B+fe*ge;F||(w.ally&&ee.includes(w.ally)?be(U.x,U.z,w.ally.x,w.ally.z)<w.ally.rad+.5&&Math.abs(U.y-w.ally.y-2)<2.5&&(dt(w.ally,w.e),F=!0):be(ke,Pe,t.x,t.z)<.75&&U.y>t.y-.2&&U.y<t.y+2.2&&!t.fly&&((y.inv<=0||ie.auto)&&gt(w.e,1,w.fx),F=!0,Ie(U.x,U.y,U.z,16732240,6,3,.25))),F&&(e.remove(w.m),w.m.material.dispose(),et.splice(T,1))}for(let T=wt.length-1;T>=0;T--){let w=wt[T];if(w.t-=l,w.t>0)continue;wt.splice(T,1),w.fx.meteor?($e(w.x,w.y,w.z,16734746,w.r*.5,9,.5),Ie(w.x,w.y+.5,w.z,16747066,24,7,.6),ie.shake=Math.max(ie.shake,.3)):Oe(w.x,w.y,w.z,w.fx.color,.3,w.r,.3);let U=Z.find(V=>V.state!=="dead"&&V.P)||{atk:10,sapT:0};be(w.x,w.z,t.x,t.z)<w.r&&!t.fly&&gt(U,w.fx.k||1,w.fx.root?{root:w.fx.root}:null)}}function Jn(l,T){let w=l.obj;if(l.flash>0){l.flash-=T;let ft=l.flash>0;for(let It of l.mats)ft?(It.emissive.setHex(16777215),It.emissiveIntensity=.9):(It.emissive.setHex(It.userData.e0),It.emissiveIntensity=It.userData.i0)}if(l.warn){let ft=l.state==="wind";if(ft){let It=l.t/(l.windT||l.wind),pn=It>.55,$n=.5+.5*Math.sin(t.t*(pn?34:16));if(l.warn.material.color.setHex(pn?16720952:16765470),l.warn.scale.setScalar((l.boss?1.3:.85)*(1+$n*(pn?.3:.12))),l.flash<=0){for(let Ws of l.mats)Ws.emissive.setHex(16717872),Ws.emissiveIntensity=.25+$n*.5;l.tint=!0}}else if(l.tint&&l.flash<=0){l.tint=!1;for(let It of l.mats)It.emissive.setHex(It.userData.e0),It.emissiveIntensity=It.userData.i0}l.warn.visible=ft}if(l.state==="dead"){l.t+=T;let ft=l.t/.55;w.scale.setScalar(Math.max(.01,1-ft)),w.position.y=l.y-ft*.4,ft>=1&&te(l);return}let U=l.type==="dummy",V=(l.weakT>0?1+l.weakK:1)*(1+Math.min(es.crit,f.crit)*(f.critDmg-1));for(let ft of l.dots)if(ft.t-=T,ft.t<=0&&ft.n>0){ft.t+=1,ft.n--;let It=Math.max(1,Math.round(ft.v*V));if(y.dealt+=It,U||(l.hp-=It),Ae(l.x,l.y+l.T.h,l.z,It,"dot"),z(l),!U&&l.hp<=0){xe(l);return}}if(l.dots.length&&(l.dots=l.dots.filter(ft=>ft.n>0)),l.notes>0){if(l.noteT-=T,l.noteAcc+=T,l.noteAcc>=1){l.noteAcc-=1;let ft=Math.max(1,Math.round(D*sh*l.notes*V));if(y.dealt+=ft,U||(l.hp-=ft),Ae(l.x,l.y+l.T.h+.2,l.z,"\u266A "+ft,"dot"),z(l),!U&&l.hp<=0){xe(l);return}}l.noteT<=0&&(l.notes=0)}if(l.weakT>0&&(l.weakT-=T),l.runes>0&&(l.runeT-=T)<=0&&(l.runes=0,z(l)),l.spT-=T,l.cdT=(l.cdT||0)-T,U){l.wobT>0&&(l.wobT-=T,l.wob.rotation.x=Math.sin(l.wobT*34)*.5*l.wobT);return}l.rootT>0&&(l.rootT-=T),l.slowT>0&&(l.slowT-=T),l.silT>0&&(l.silT-=T),l.aspdT>0&&(l.aspdT-=T),l.sapT>0&&(l.sapT-=T),l.kdCd>0&&(l.kdCd-=T);let B=null,F=18;for(let ft of ee){if(ft.hp<=0)continue;let It=be(l.x,l.z,ft.x,ft.z);It<(ft.S.taunt||F)&&(!B||It<F)&&(F=It,B=ft)}let ue=B?B.x:t.x,fe=B?B.z:t.z,le=B?B.rad:y.mecha?.9:0,ge=ue-l.x,ke=fe-l.z,Pe=Math.hypot(ge,ke)-le,mt=B?!0:y.down<=0&&!t.inside&&y.stealthT<=0&&!t.fly,Mt=l.aspdT>0?1+l.aspdK:1,Tt=0,Dn=null;if(l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear")l.stun-=T,l.state==="fear"&&(Dn=Math.atan2(l.x-t.x,l.z-t.z),Tt=l.spd*.9),l.state==="sleep"&&(l.zT-=T)<=0&&(l.zT=1.1,ze(l,"z z")),l.stun<=0&&(Ze(l),l.state="chase",l.kd=!1);else if(l.state==="idle")if(mt&&Pe<15)l.state="chase";else{if(l.wT-=T,!l.wander||l.wT<=0){let pn=Math.random()*6.28,$n=Math.random()*7;l.wander=[l.home[0]+Math.sin(pn)*$n,l.home[1]+Math.cos(pn)*$n],l.wT=3+Math.random()*5}let ft=l.wander[0]-l.x,It=l.wander[1]-l.z;Math.hypot(ft,It)>.7&&(Dn=Math.atan2(ft,It),Tt=l.spd*.3),l.hp<l.max&&(l.hp=Math.min(l.max,l.hp+l.max*.2*T),z(l))}else if(l.state==="chase")if(!mt||l.wild&&be(l.x,l.z,l.home[0],l.home[1])>40)l.wild&&(l.state="idle",l.wander=l.home.slice(),l.wT=6);else{let ft=Gt(l,Pe,ge,ke,Mt,B);Tt=ft[0],Dn=ft[1]}else if(l.state==="wind")l.t+=T,l.t<l.windT*.6&&l.kind!=="leap"&&(Dn=Math.atan2(ge,ke)),!B&&mt&&(l.ranged||l.kind==="meteor"||l.kind==="grab"||l.kind==="stunshot"?Pe<40:Pe<l.range+(l.kind==="whirl"?5:3))&&(ie.warnT=.12),l.t>=l.windT&&(l.state="rest",l.t=0,Ut(l,Pe,ge,ke,B,mt));else if(l.state==="leap"){l.t+=T;let ft=Math.min(1,l.t/.6);l.x=l.lx0+(l.lx1-l.lx0)*ft,l.z=l.lz0+(l.lz1-l.lz0)*ft,l.hop=Math.sin(ft*Math.PI)*3.2,ft>=1&&(l.hop=0,l.state="rest",l.t=0,Oe(l.x,r(l.x,l.z),l.z,16728160,.4,2.6,.35),ie.shake=Math.max(ie.shake,.15),(B?be(l.x,l.z,B.x,B.z)<2.6+B.rad:mt&&be(l.x,l.z,t.x,t.z)<2.6)&&(B?dt(B,l):gt(l,1.3)))}else l.state==="rest"&&(l.t+=T,l.t>=l.rest*Mt&&(l.state="chase"));if(l.rootT>0?Tt=0:l.slowT>0&&(Tt*=1-l.slowK),Dn!=null&&(l.yaw+=ts(Dn,l.yaw)*Math.min(1,T*8)),Tt>0){let ft=l.x+Math.sin(l.yaw)*Tt*T,It=l.z+Math.cos(l.yaw)*Tt*T;for(let pn of Z)if(pn!==l&&pn.state!=="dead"){let $n=be(ft,It,pn.x,pn.z),Ws=l.rad+pn.rad;$n<Ws&&$n>.001&&(ft=pn.x+(ft-pn.x)/$n*Ws,It=pn.z+(It-pn.z)/$n*Ws)}if(l.arena){let pn=be(ft,It,st.x,st.z),$n=st.r-1-l.rad;pn>$n&&(ft=st.x+(ft-st.x)/pn*$n,It=st.z+(It-st.z)/pn*$n)}l.x=ft,l.z=It}if(l.arena){let ft=be(l.x,l.z,st.x,st.z),It=st.r-1-l.rad;ft>It&&(l.x=st.x+(l.x-st.x)/ft*It,l.z=st.z+(l.z-st.z)/ft*It)}l.y=Math.max(r(l.x,l.z),.2)+(l.hop||0),l.lunge>0&&(l.lunge-=T);let En=l.lunge>0?Math.sin((1-l.lunge/.25)*Math.PI)*.7:0;w.position.set(l.x+Math.sin(l.yaw)*En,l.y,l.z+Math.cos(l.yaw)*En),w.rotation.y=l.yaw;let hl=l.kd&&l.state==="stun";l.av?(l.av.update(T,{speed:Tt/4.6}),l.av.group.rotation.x+=((hl?-1.4:0)-l.av.group.rotation.x)*Math.min(1,T*12),l.av.group.position.y=hl?.25:0):(l.beast.update(T,Tt/6),l.beast.group.rotation.x=l.state==="wind"?-.22*Math.min(1,l.t/(l.windT||l.wind)):l.state==="stun"?.12:0,l.beast.group.rotation.z+=((hl?1.45:0)-l.beast.group.rotation.z)*Math.min(1,T*12))}function bt(l,T=3.2,w){let U=ie.lock||ie.auto?ie.lockE:null;if(U&&U.state!=="dead"&&be(t.x,t.z,U.x,U.z)<=l+U.rad)return U;let V=null,B=1e9;for(let F of Z){if(F.state==="dead")continue;let ue=be(t.x,t.z,F.x,F.z);if(ue>l+F.rad)continue;let fe=Math.abs(ts(he(F.x,F.z),t.yaw));if(fe>T)continue;let le=ue+(w?0:fe*3)+(F.type==="dummy"?w?40:5:0)+(w&&F.state==="sleep"?30:0);le<B&&(B=le,V=F)}return V}let Kn=(l,T,w,U)=>{let V=null,B=w;for(let F of Z){if(F.state==="dead"||F.type==="dummy"||F.state==="sleep"&&U==="awake"||U&&U.has&&U.has(F))continue;let ue=be(l,T,F.x,F.z);ue<B&&(B=ue,V=F)}return V};function Ni(l,T=!S){let w=bt(l,3.2,T);return w&&(!T||t.speed<1.5)&&(t.yaw=he(w.x,w.z)),w}let bn=l=>l&&l.state!=="dead"?l:null;function Nn(l,T,w,U={}){let V=0;for(let B of Z.slice()){if(B.state==="dead")continue;let F=be(t.x,t.z,B.x,B.z);F>T+B.rad||w<3.1&&F>.9&&Math.abs(ts(he(B.x,B.z),t.yaw))>w||(ye(B,l,U),V++)}return V&&(ie.shake=Math.max(ie.shake,U.shake||.07)),V}function wn(l,T,w,U,V,B={},F){Y(l,T+.4,w,B.color||d,U*.7),Oe(l,T,w,B.color||d,.3,U,.4),Ie(l,T+.5,w,B.color||d,14,6,.5);let ue=0;for(let fe of Z.slice())fe!==F&&fe.state!=="dead"&&be(l,w,fe.x,fe.z)<U+fe.rad&&(ye(fe,V,B),ue++);return ue}function Wt(l,T,w={}){let U=w.target&&w.target.state!=="dead"?w.target:bt(w.range||28,3.2,!0),V=n.hand(new X,w.off);l==="wave"&&V.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let B=U?new X(U.x-V.x,U.y+U.T.h*.55-V.y,U.z-V.z).normalize():new X(Math.sin(t.yaw),0,Math.cos(t.yaw));w.spread&&B.applyAxisAngle(N1,w.spread);let F=w.color||d,ue=w.size||1,fe;if(l==="arrow")fe=new Ne(we.arrow,Xe(F,1)),fe.scale.set(ue,ue,1.1);else if(l==="bullet")fe=new Ne(we.tracer,Xe(F,1));else if(l==="wave")fe=new Ne(we.arc,Xe(F,.85)),fe.scale.setScalar(1.2);else{fe=new Ne(we.ball,Xe(F,l==="paint"?.95:.9,l!=="paint"));let ge=(l==="shell"?.3:l==="paint"?.2:.24)*ue;if(fe.scale.setScalar(ge),l!=="paint"){let ke=new Ne(we.ball,Xe(16777215,.9));ke.scale.setScalar(.5),fe.add(ke)}}let le=w.speed||26;fe.position.copy(V),e.add(fe),l!=="wave"&&Y(V.x,V.y,V.z,F,.35,.12),N.push({m:fe,kind:l,v:B.multiplyScalar(le),life:(w.range||28)/le+.25,mult:T,o:w,hit:new Set,target:U,homing:l!=="wave",age:0,bounce:w.bounce||0})}function Sn(l,T){l.age+=T,l.life-=T;let w=l.m.position;if(l.homing&&l.target&&l.target.state==="dead"&&(l.target=Kn(w.x,w.z,12,l.hit)),l.homing&&l.target){let ge=l.target,ke=l.v.length();me.set(ge.x-w.x,ge.y+ge.T.h*.55-w.y,ge.z-w.z).normalize().multiplyScalar(ke),l.v.lerp(me,Math.min(1,T*(l.kind==="bullet"||l.kind==="arrow"?18:9))).setLength(ke)}let U=w.x,V=w.z;w.addScaledVector(l.v,T);let B=w.x-U,F=w.z-V,ue=B*B+F*F;l.kind==="wave"?(l.m.rotation.y=Math.atan2(l.v.x,l.v.z),l.m.scale.setScalar(1.2+l.age*3.2),l.m.material.opacity=.85*Math.min(1,l.life*3)):(l.kind==="arrow"||l.kind==="bullet")&&l.m.lookAt(w.x+l.v.x,w.y+l.v.y,w.z+l.v.z);let fe=l.kind==="wave"?l.m.scale.x*.8:.35*(l.o.size||1),le=l.life<=0;for(let ge of Z){if(ge.state==="dead"||l.hit.has(ge))continue;let ke=ue>0?Math.max(0,Math.min(1,((ge.x-U)*B+(ge.z-V)*F)/ue)):1;if(!(be(U+B*ke,V+F*ke,ge.x,ge.z)>ge.rad+fe||w.y<ge.y-.5-Math.abs(l.v.y)*T||w.y>ge.y+ge.T.h+.8+Math.abs(l.v.y)*T)){if(l.hit.add(ge),ye(ge,l.mult,l.o),l.o.aoe&&wn(w.x,ge.y,w.z,l.o.aoe,l.mult*.6,l.o,ge),l.bounce>0){let Pe=Kn(w.x,w.z,14,l.hit);if(Pe){l.bounce--,l.mult*=.8,l.target=Pe;let mt=l.v.length();l.v.set(Pe.x-w.x,Pe.y+Pe.T.h*.55-w.y,Pe.z-w.z).setLength(mt),l.life=14/mt+.25,Y(w.x,w.y,w.z,16777215,.5,.12);break}}if(!l.o.thru){le=!0;break}}}return!le&&l.kind!=="wave"&&w.y<r(w.x,w.z)+.05?(le=!0,l.o.aoe?wn(w.x,r(w.x,w.z),w.z,l.o.aoe,l.mult*.6,l.o):Ie(w.x,w.y+.1,w.z,l.o.color||d,5,2.5,.3)):le&&l.life<=0&&l.o.aoe&&l.kind==="shell"&&wn(w.x,w.y,w.z,l.o.aoe,l.mult*.6,l.o),le}function Jt(l,T,w,U={},V=32){let B=bn(l)||bt(V,3.2,!0),F=B?B.x:t.x+Math.sin(t.yaw)*8,ue=B?B.z:t.z+Math.cos(t.yaw)*8,fe=r(F,ue);return $e(F,fe,ue,U.color||d,w*.5,5,.45),wn(F,fe,ue,w,T,U)}let O=()=>t.talking||t.paused||y.down>0||y.stunT>0?!1:t.fly?(H("Posez-vous pour combattre"),!1):(t.mount&&i.dismount(),!0);function ne(l){if(l&&(y.idle=0),y.armed===l)return;y.armed=l,n.setArmed(l),o.classList.toggle("ew-armed",l);let T=o.querySelector('[data-c="draw"]');T&&T.classList.toggle("on",l)}let re=()=>t.x,oe=()=>t.y,ae=()=>t.z;function Ge(){if(!O())return!1;if(ne(!0),y.busy>0)return y.queue=!0,!1;let l=Ni(S?k.reach+4.5:k.range);if(S&&l){let fe=be(t.x,t.z,l.x,l.z)-l.rad;fe>k.reach*.7&&i.dash(fe-k.reach*.55,.09)}let T=y.combo++,w=k.dur*(1-Math.min(es.aspd,y.aspdT>0?y.aspdB:0)),U=k.every&&(T+1)%k.every.n===0,V=U?k.mult*k.F*k.every.k:k.mult,B=U?[1]:k.seq;n.play(U?"heavy":k.anim,w*1.3,T),y.busy=w+(U?k.every.lock*.5:0),U&&(y.lock=k.every.lock),k.slowSelf&&(y.slowK=k.slowSelf,y.slowT=w*.85),y.mecha&&(y.mecha.swing=.4,y.mecha.arm=T%2);let F=k.dot||k.note||k.rune?{dot:k.dot,notes:k.note,runes:k.rune}:null,ue=Math.min(.07,w*.4/B.length);return B.forEach((fe,le)=>Se(w*k.hit+le*ue,()=>{if(y.down>0)return;let ge=le===0,ke=fe>=.5,Pe=V*fe,mt={cc:ge?F:null,key:"basic",basic:1};if(S){if(ke){let Tt=n.dual?((T>>1)+le)%3:T%3,Dn=k.anim==="heavy"?T%2?.12:1.45:k.anim==="punch"?T%2?.3:-.3:Tt===0?-.95:Tt===1?.2:1.57;Ke(re(),oe()+(k.mech?2.2:1.15),ae(),t.yaw,ge?Dn:-Dn,k.reach*.95,d,k.mech?.3:.24),k.mech&&(Oe(re()+Math.sin(t.yaw)*2.4,oe(),ae()+Math.cos(t.yaw)*2.4,d,.4,2.6,.3),ie.shake=Math.max(ie.shake,.12))}let Mt={d:0};mt.acc=Mt,ke||(mt.kb=0),Nn(Pe,k.reach,k.arc,mt)&&ge&&g.sustain&&!y.mecha&&y.hp<y.max&&Te(Math.max(1,Math.round(Mt.d*.1+y.max*.06*k.dur)))}else if(U){Ke(re(),oe()+1.1,ae(),t.yaw,.15,7.5,oh[T%4],.3),Ke(re(),oe()+1.1,ae(),t.yaw,-.2,6.5,16777215,.22);let Mt=bn(l)||bt(k.range,3.2,!0);if(Mt)for(let Tt of Z.slice())Tt.state!=="dead"&&be(Mt.x,Mt.z,Tt.x,Tt.z)<2.6+Tt.rad&&ye(Tt,Tt===Mt?Pe:Pe*.6,{color:oh[T%4],basic:1})}else Wt(k.proj,Pe,Object.assign(mt,{range:k.range,speed:k.speed,aoe:ke?k.aoe:0,size:ke?k.size:.6,thru:k.thru,bounce:ke&&k.bounce||0,off:n.dual&&(T+le)%2===1,target:bn(l)||l,color:k.proj==="paint"?oh[(T+le)%4]:d}))})),!0}function I(l){if(t.talking||t.paused||y.down>0||y.dashCd>0||y.stunT>0)return;t.mount&&i.dismount();let T=l??i.inputDir();T!=null&&(t.yaw=T),y.dashCd=.36,y.inv=Math.max(y.inv,.36),y.busy=0,y.queue=!1,y.lock=0,Oe(re(),oe(),ae(),16777215,.3,1.9,.3,.6),Y(re(),oe()+1,ae(),d,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let H=l=>{let T=o.querySelector(".ew-skn");T&&(T.textContent=l,T.classList.remove("on"),T.offsetWidth,T.classList.add("on"))};function K(l,T){if(!l)return;let w=l.heal||l.hot?9306032:T.color||d;l.heal&&Te(Math.round(y.max*l.heal/100)),l.hot&&(y.hot=l.hot[0],y.hotT=l.hot[1]),l.atk&&(y.atkB=l.atk[0],y.atkT=l.atk[1]),l.crit&&(y.critB=l.crit[0],y.critT=l.crit[1]),l.aspd&&(y.aspdB=l.aspd[0],y.aspdT=l.aspd[1]),l.guard&&(y.guardB=l.guard[0],y.guardT=l.guard[1]),l.absorb&&(y.absorbB=l.absorb[0],y.absorbT=l.absorb[1]),l.inv&&(y.inv=Math.max(y.inv,l.inv)),l.gauge&&_e(l.gauge),l.shield&&(y.shield=Math.round(y.max*l.shield[0]/100),y.shieldT=l.shield[1]),l.stealth&&(ht(l.stealth[0],l.stealth[1]),Ie(re(),oe()+1,ae(),10133696,20,3,.5)),l.reset!=null&&(y.cds[l.reset]=0),(l.heal||l.hot||l.atk||l.crit||l.aspd||l.guard||l.absorb||l.inv>1)&&($e(re(),oe(),ae(),w,1.2,4.2,.6),Oe(re(),oe(),ae(),w,.4,3,.5),Ie(re(),oe()+1,ae(),w,14,3,.6))}function Ee(l,T){let w=l.area,U=l.color||d;if(w.kind==="target"){let fe=bn(T)||bt(30,3.2,!0);fe&&($e(fe.x,fe.y,fe.z,U,1,4,.5),ut(fe,l.cc,l.name));return}let V=w.kind==="zone"?bn(T)||bt(30,3.2,!0):null,B=w.kind==="zone"?V?V.x:t.x+Math.sin(t.yaw)*8:t.x,F=w.kind==="zone"?V?V.z:t.z+Math.cos(t.yaw)*8:t.z,ue=r(B,F);Oe(B,ue,F,U,.4,w.r,.6),Y(B,ue+.6,F,U,w.r*.5,.3);for(let fe of Z.slice())fe.state!=="dead"&&be(B,F,fe.x,fe.z)<w.r+fe.rad&&ut(fe,l.cc,l.name)}function Ce(l,T,w){if(y.down>0)return;let U=l.dmg,V=l.ult===1?P:1,B=l.color||d;if(l.special==="trap"){Be(l);return}if(l.special==="spirit"){y.spirit=(y.spirit+1)%Sa.length,lt(Sa[y.spirit]);return}if(l.special==="mecha"){De();return}if(l.special==="enrage"){ee.length||(y.spirit=Math.max(0,y.spirit),lt(Sa[y.spirit]));for(let F of ee)F.rage=8,F.hp=F.max,je(F),$e(F.x,F.y,F.z,F.S.color,3,10,.8)}if(l.special==="runes"){let F=l.dmg;Oe(re(),oe(),ae(),13154047,.5,F.r,.5),$e(re(),oe(),ae(),13154047,F.r*.35,6,.5),Ie(re(),oe()+.6,ae(),15326719,30,9,.7),ie.shake=Math.max(ie.shake,.35);for(let ue of Z.slice())if(ue.state!=="dead"&&be(t.x,t.z,ue.x,ue.z)<F.r+ue.rad){let fe=ue.runes;ue.runes=0,fe&&ze(ue,"Runes \xD7"+fe,"crit"),ye(ue,(F.mult+F.per*fe)*V,{color:13154047,kb:.6,key:l.name,cc:{stun:Math.max(1,.5*fe)}})}return}if(l.exec){let F=bn(T)||bt(36,3.2,!0);if(ie.shake=.7,!F){Oe(re(),oe(),ae(),d,.5,9,.8);return}$e(F.x,F.y,F.z,16777215,1.4,18,.9),$e(F.x,F.y,F.z,d,2.8,13,1),Oe(F.x,F.y,F.z,d,.5,10,.9),Ie(F.x,F.y+1,F.z,d,40,9,.9),F.type!=="dummy"&&F.hp<=F.max*(F.boss?.15:.35)?(ze(F,"R\xE9duit \xE0 n\xE9ant","crit"),xe(F)):ye(F,8*_*(p==="assassin"?1.4:1)/E,{pierce:1,color:d,kb:1.2,cc:l.cc,key:l.name});return}if(U){let F=U.hits||1,ue=U.gap||.15,fe={crit:U.crit,pierce:U.pierce,steal:U.steal,cc:l.cc,key:l.name,color:B,kb:U.kind==="around"?.7:void 0};for(let le=0;le<F;le++)Se(le*ue,()=>{if(y.down>0)return;let ge=(Array.isArray(U.mult)?U.mult[le]:U.mult)*V,ke=F===1&&ge>=2.5;if(U.kind==="melee")Ke(re(),oe()+1.15,ae(),t.yaw,le%3===0?-.9:le%3===1?.25:1.5,U.r*(.9+le*.08),B,.28),Nn(ge,U.r,U.arc||1.4,Object.assign({shake:.12+le*.08},fe));else if(U.kind==="around")Oe(re(),oe(),ae(),B,.5,U.r,.45),ke?($e(re(),oe(),ae(),B,U.r*.4,7,.6),Ie(re(),oe()+.5,ae(),B,30,9,.7)):Ke(re(),oe()+1.1,ae(),t.yaw+le*1.3,le%2?.2:-.2,U.r*.85,B,.3),Nn(ge,U.r,3.2,Object.assign({shake:ke?.5:.18},fe));else if(U.kind==="shot")F>1&&n.play(l.anim==="flip"?"shoot":l.anim||k.anim,.14,le),Wt(U.proj||k.proj||"bolt",ge,Object.assign({range:(U.range||30)+4,speed:U.speed||k.speed||36,aoe:U.aoe,size:U.size,bounce:U.proj==="bullet"?1:0,off:le%2===1&&n.dual,target:bn(T)},fe));else if(U.kind==="zone")ke&&(ie.shake=Math.max(ie.shake,.5)),Jt(T,ge,U.r,fe);else if(U.kind==="target"){let Pe=bn(T)||bt((U.range||26)+4,3.2,!0);if(!Pe)return;let mt=ge;if(l.special==="notes"&&(mt+=.7*Pe.notes,Oe(Pe.x,Pe.y,Pe.z,B,.3,2+Pe.notes*.6,.4),Pe.notes=0),$e(Pe.x,Pe.y,Pe.z,B,.7,4,.35),Y(Pe.x,Pe.y+Pe.T.h*.5,Pe.z,B,1.1,.2),ye(Pe,mt,fe),U.aoe){Oe(Pe.x,Pe.y,Pe.z,B,.4,U.aoe,.4);for(let Mt of Z.slice())Mt!==Pe&&Mt.state!=="dead"&&be(Pe.x,Pe.z,Mt.x,Mt.z)<U.aoe+Mt.rad&&ye(Mt,mt*.5,fe)}}})}l.area&&Ee(l,T),K(l.self,l)}function C(l){if(l===0)return Ge();let T=M[l-1];if(!T||!O())return;let w=y.chain[l]&&y.chain[l].t>0?y.chain[l].s:null;if(w&&(T=w),L[l]){H("Niveau "+wa[l-1]+" requis \xB7 "+T.name);return}if(T.special==="mecha"&&y.mecha){y.busy<=.15&&(H("\xC9jection"),Q(!1));return}if(T.ult){if(y.charge<100){H("Jauge d\u2019ultime incompl\xE8te");return}}else if(!w&&y.cds[l]>0)return;if(y.busy>.15)return;ne(!0),H(T.name),w?y.chain[l]=null:T.ult?y.charge=0:y.cds[l]=y.cdMax[l]=T.cd,T.chain&&(y.chain[l]={t:Nr(T)+4,s:T.chain});let U=T.dmg,V=T.cast??.25,B=U&&U.kind==="melee",F=B?bt(U.r+5):U||T.area||T.exec?bt((U&&U.range||30)+4,3.2,!0):null;if(F&&(B||U&&U.kind==="target"||T.exec||t.speed<1.5)&&(t.yaw=he(F.x,F.z)),B&&F){let ue=be(t.x,t.z,F.x,F.z)-F.rad;ue>U.r*.7&&i.dash(ue-U.r*.55,.1)}if(T.move==="tp"&&F){Ie(re(),oe()+1,ae(),d,16,4,.4);let ue=F.rad+1.5;if(t.x=F.x-Math.sin(F.yaw)*ue,t.z=F.z-Math.cos(F.yaw)*ue,t.y=r(t.x,t.z),t.yaw=F.yaw,W.on){let fe=be(t.x,t.z,st.x,st.z);fe>st.r-1.2&&(t.x=st.x+(t.x-st.x)/fe*(st.r-1.2),t.z=st.z+(t.z-st.z)/fe*(st.r-1.2))}Y(re(),oe()+1,ae(),d,1.2,.25)}if(T.move==="back"&&(i.dash(-8.5,.26),Oe(re(),oe(),ae(),d,.4,2.2,.35)),n.play(T.anim||(S?"heavy":"cast"),Math.max(.42,Nr(T)*1.05),y.combo++,T.turns||1),y.busy=Nr(T),T.lock&&(y.lock=T.lock),T.ult&&(y.inv=Math.max(y.inv,Nr(T))),y.mecha&&(y.mecha.swing=.45,y.mecha.arm=2),T.meteor){let ue=F,fe=ue?ue.x:t.x+Math.sin(t.yaw)*10,le=ue?ue.z:t.z+Math.cos(t.yaw)*10,ge=r(fe,le);Oe(fe,ge,le,d,U.r-.2,U.r,V,.7);let ke=new Ne(we.ball,Xe(d,.95)),Pe=new Ne(we.ball,Xe(16777215,.9));Pe.scale.setScalar(.55),ke.add(Pe),Ve(ke,V,mt=>{ke.position.set(fe-7*(1-mt),ge+22*(1-mt)*(1-mt)+.5,le-4*(1-mt)),ke.scale.setScalar(1.4)})}Se(V,()=>Ce(T,F,l))}let q=new Ne(new gi(.82,1,4),new Ft({color:16765514,transparent:!0,opacity:.9,side:tn,depthWrite:!1,fog:!1}));q.rotation.x=-Math.PI/2,q.visible=!1,e.add(q);function se(){let l=ie.lockE;if(l&&(l.state==="dead"||!Z.includes(l)||be(t.x,t.z,l.x,l.z)>46)&&(l=null),!l){let T=40;for(let w of Z){if(w.state==="dead"||w.type==="dummy")continue;let U=be(t.x,t.z,w.x,w.z);U<T&&(w.arena||w.state!=="idle"||U<18)&&(T=U,l=w)}if(!l&&!ie.auto){T=14;for(let w of Z)if(w.type==="dummy"){let U=be(t.x,t.z,w.x,w.z);U<T&&(T=U,l=w)}}}return ie.lockE=l}function j(){let l=Z.filter(w=>w.state!=="dead"&&w.type!=="dummy"&&be(t.x,t.z,w.x,w.z)<40);if(l.length<2)return;let T=l.indexOf(ie.lockE);ie.lockE=l[(T+1)%l.length]}let Me=l=>l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear";function pe(){if(ie.autoMove=null,t.talking||t.paused||t.inside||t.fly||y.down>0)return;let l=se();if(!l)return;t.mount&&i.dismount(),ne(!0);for(let B of Z){if(B.state!=="wind")continue;let F=B.aspdT>0?1+B.aspdK:1,ue=(B.windT||B.wind*F)-B.t,fe=be(t.x,t.z,B.x,B.z);if(ue<.2&&fe<(B.ranged?40:B.kind==="whirl"?6:B.range+1.6)&&y.inv<ue+.05&&y.dashCd<=0){let le=Math.atan2(t.x-B.x,t.z-B.z)+(S?2.2:0);I(le);break}}let T=be(t.x,t.z,l.x,l.z)-l.rad,w=he(l.x,l.z);if(S)T>k.reach*.7&&(ie.autoMove={yaw:w,mag:1});else{let B=k.range*.85,F=Math.min(6.5,k.range*.4);if(T>B)ie.autoMove={yaw:w,mag:1};else if(T<F&&!Me(l)&&l.rootT<=0){let ue=w+Math.PI;W.on&&be(t.x,t.z,st.x,st.z)>st.r-5&&(ue=Math.atan2(st.x-t.x,st.z-t.z)+(ts(Math.atan2(st.x-t.x,st.z-t.z),w)>0?-1.2:1.2)),ie.autoMove={yaw:ue,mag:1}}}if(y.busy>0)return;y.dashCd<=0&&y.lock<=0&&t.dashT<=0&&(t.yaw=t.speed<2||S?w:t.yaw);for(let B=1;B<=3;B++)if(y.chain[B]&&y.chain[B].t>0){C(B);return}let U=y.hp/y.max,V=Z.filter(B=>B.state!=="dead"&&B.type!=="dummy"&&be(t.x,t.z,B.x,B.z)<12).length;if(y.charge>=100){let B=M[4],F=M[3];if(B&&B.exec&&!L[5]&&(l.hp<=l.max*(l.boss?.15:.35)||l.boss||l.elite||L[4])&&T<34){C(5);return}if(F&&!L[4]&&(!F.dmg||T<(F.dmg.kind==="around"?F.dmg.r-.5:F.dmg.kind==="melee"?F.dmg.r+4:30))){C(4);return}if(B&&!B.exec&&!L[5]&&L[4]){C(5);return}}for(let B=1;B<=3;B++){let F=M[B-1];if(!F||L[B]||y.cds[B]>0)continue;let ue=F.dmg,fe=F.self||{};if(F.special==="mecha"){if(y.mecha)continue;C(B);return}if(F.special==="spirit"){if(ee.length)continue;C(B);return}if(F.special==="trap"){if(T>7)continue;C(B);return}if(!ue&&!F.area){if((fe.heal||fe.hot)&&!fe.atk&&!fe.crit&&!fe.stealth&&U>.7)continue;C(B);return}if(!ue&&F.area){if(F.cc&&(F.cc.sleep||F.cc.tree||F.cc.fear)&&(Me(l)||V<2&&!l.boss&&!l.elite)||F.area.kind==="around"&&T>F.area.r-1)continue;C(B);return}if(!(ue.kind==="around"&&T>ue.r-.6)&&!(ue.kind==="melee"&&T>ue.r+4.5)&&!((ue.kind==="shot"||ue.kind==="zone"||ue.kind==="target")&&T>(ue.range||30))){C(B);return}}(S?T<k.reach+4.5:T<k.range)&&Ge()}function de(){if(!(y.busy>0)){for(let l=1;l<=3;l++)if(y.chain[l]&&y.chain[l].t>0){C(l);return}for(let l=1;l<=3;l++)if(!L[l]&&y.cds[l]<=0&&!(M[l-1].special==="mecha"&&y.mecha)){C(l);return}Ge()}}function qe(l){if(l%10===0)return[{ty:"drake",hpK:1.35}];if(l%5===0)return[{ty:"champion",hpK:1.3}];let T=l-Math.floor(l/5)-1;if([1,0,1,0,1,1,0,1][T%8])return[{ty:"pvp",cls:Wd[T*5%12],hpK:1+Math.floor(T/12)*.15}];let U=Math.min(16,4+Math.floor((l-1)/3)),V=Math.pow(Math.min(1,3.4/U),.6),B=["wolf","swift","shade"].concat(l>=2?["leap"]:[],l>=3?["archer"]:[]),F=[];for(let ue=0;ue<U;ue++)F.push({ty:l>=6&&ue%5===0?"brute":B[(ue*7+l)%B.length],hpK:V,atkK:V});return F}function nt(){let l=++W.wave,T=qe(l),w=Math.random()*6.28;h("Vague "+l,T.length===1?"Duel \xB7 "+(T[0].cls?Fr[T[0].cls].name:Vd[T[0].ty].name):"1 contre "+T.length),T.forEach((U,V)=>{let B=w+V/T.length*6.2832,F=13+V%3*2.5;R(U.ty,st.x+Math.cos(B)*F,st.z+Math.sin(B)*F,l,{arena:!0,hpK:U.hpK,atkK:U.atkK,cls:U.cls})})}let xt=()=>5*Math.floor(W.best/5)+1;function Ct(l,T){W.on||(l=Math.max(1,Math.min(W.best+1,Math.round(l||xt()))),W.on=!0,W.loop=!!T,W.wave=l-1,W.pending=null,ne(!0),y.hp=y.max,nt())}function Et(){W.on=!1,W.pending=null;for(let l of et.splice(0))e.remove(l.m),l.m.material.dispose();wt.length=0;for(let l of Z.slice())l.arena&&te(l);for(let l of ee.slice())Qe(l);for(let l of $.splice(0))at(l.m)}let In=o.querySelector(".ew-cmb");if(In){let l=w=>c?w===0?"Clic":String(w):"",T=`<button type="button" class="ew-atk" data-c="0"><em>${l(0)}</em><span>Attaque</span></button>`;if(M.forEach((w,U)=>{let V=U+1;T+=`<button type="button" class="ew-sk k${V}${w.ult?" ult":""}${L[V]?" lock":""}" data-c="${V}" title="${w.name.replace(/"/g,"")}"><i></i><em>${l(V)}</em><span>${L[V]?"Niv. "+wa[U]:w.name}</span></button>`}),In.insertAdjacentHTML("afterbegin",T),!c){let U=B=>In.querySelector(B),V=(B,F,ue,fe)=>{if(!B)return;let le=ue*Math.PI/180;B.style.right=47+F*Math.cos(le)-fe/2+"px",B.style.bottom=47+F*Math.sin(le)-fe/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((B,F)=>V(U(B),122,1+F*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((B,F)=>V(U(B),186,8+F*21,46))}}let kt=o.querySelector('[data-c="dodge"]'),ln=!1,Pt={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:In?[...In.querySelectorAll(".ew-sk")]:[]},Xt="";function Ln(){let l=y.armed||y.hp<y.max||W.on,T=y.cds.map(B=>Math.ceil(B*2)).join(","),w=y.mecha?Math.round(y.mecha.hp):-1,U=[g.role,y.mecha?"Mecha "+Math.max(0,Math.round(y.mecha.hp/y.mecha.max*100))+" %":"",m.mantra?"Mantra":"",y.stealthT>0?"Dissimul\xE9":"",G>0&&y.hp<y.max?"R\xE9g\xE9n\xE9ration":"",y.hotT>0?"Soin continu":"",y.atkT>0?"Attaque +"+Math.round(y.atkB*100)+" %":"",y.critT>0?"Critique +"+Math.round(y.critB*100)+" %":"",y.aspdT>0?"Cadence +"+Math.round(y.aspdB*100)+" %":"",y.guardT>0?"Garde":"",y.absorbT>0?"Absorption":"",y.inv>1?"Invuln\xE9rable":"",ee.length?ee[0].S.name:""].filter(Boolean).join(" \xB7 "),V=[l,Math.round(y.hp),Math.round(y.shield),Math.round(y.charge),T,w,U,W.on,W.wave,Z.length,y.chain.map(B=>B&&B.t>0?1:0).join("")].join("|");if(V!==Xt){if(Xt=V,Pt.hud&&Pt.hud.classList.toggle("on",l),Pt.hp&&(Pt.hp.style.width=y.hp/y.max*100+"%",Pt.hpT.textContent=Math.round(y.hp)+" / "+y.max,Pt.sh.style.width=(y.mecha?Math.max(0,y.mecha.hp/y.mecha.max*100):Math.min(100,y.shield/y.max*100))+"%"),Pt.ult&&(Pt.ult.style.width=y.charge+"%",Pt.ultB.classList.toggle("full",y.charge>=100)),Pt.stt&&(Pt.stt.textContent=U),Pt.wave){let B=Z.filter(F=>F.arena&&F.state!=="dead").length;Pt.wave.textContent=W.on?"Vague "+(W.wave+(W.loop&&W.pending!=null?1:0))+(W.loop?" en boucle":"")+(B?" \xB7 "+B+" ombre"+(B>1?"s":""):"")+(W.best?" \xB7 record "+W.best:""):"",Pt.wave.classList.toggle("on",W.on)}Pt.sk.forEach(B=>{let F=+B.dataset.c,ue=M[F-1],fe=B.querySelector("i"),le=y.chain[F]&&y.chain[F].t>0?y.chain[F].s:null,ge=B.querySelector("span"),ke=L[F]?"Niv. "+wa[F-1]:(le||ue).name;ge.textContent!==ke&&(ge.textContent=ke),B.classList.toggle("chain",!!le),le?fe.style.height="0%":ue.ult?(B.classList.toggle("ready",!L[F]&&y.charge>=100),fe.style.height=L[F]?"0%":100-y.charge+"%"):(fe.style.height=(y.cds[F]>0?y.cds[F]/y.cdMax[F]*100:0)+"%",B.classList.toggle("ready",ue.special==="mecha"&&!!y.mecha))})}}for(let[l,T]of O1)R("dummy",l,T,1,{quiet:!0,yaw:0});let Ii=k1.map(([l,T,w,U,V])=>({x:l,z:T,type:w,lvl:U,n:V,es:[],t:0})).filter(l=>r(l.x,l.z)>1.6),Ye=0,yt=0;return ie.update=function(l){for(let w=b.length-1;w>=0;w--){let U=b[w];U.t-=l,U.t<=0&&(b.splice(w,1),U.fn())}y.busy-=l,y.lock-=l,y.inv-=l,y.lastHit+=l,y.dashCd-=l,y.slowT-=l,y.focusT-=l,y.rezCd-=l,y.stunT-=l,y.rootT-=l,y.eslowT-=l,ie.warnT-=l;for(let w of y.chain)w&&(w.t-=l);for(let w=0;w<y.cds.length;w++)y.cds[w]>0&&!(w===1&&y.mecha)&&(y.cds[w]-=l);for(let w of["atkT","critT","aspdT","guardT","absorbT","hotT"])y[w]>0&&(y[w]-=l);if(y.shieldT>0&&(y.shieldT-=l,y.shieldT<=0&&(y.shield=0)),y.stealthT>0&&(y.stealthT-=l,y.stealthT<=0&&ht(0)),y.armed&&Kn(t.x,t.z,30)&&_e(3.4*l),y.down>0)y.down-=l,y.down<=0&&ot();else if(y.hp<y.max){let w=0;G>0&&y.lastHit>2&&(w+=y.max*G/1e3*l),!W.on&&y.lastHit>6&&(w+=y.max*.07*l),m.regen&&(w+=y.max*m.regen*l),y.hotT>0&&(w+=y.max*y.hot/100*l),w&&(y.hp=Math.min(y.max,y.hp+w))}ie.auto?pe():(ie.autoMove=null,ie.lock?se():ie.lockE=null);{let w=(ie.lock||ie.auto)&&ie.lockE&&ie.lockE.state!=="dead"?ie.lockE:null;q.visible=!!w&&!t.inside,w&&(q.position.set(w.x,w.y+.12,w.z),q.scale.setScalar(w.rad+.75+Math.sin(t.t*5)*.06),q.rotation.z=t.t*1.6)}(y.queue||ie.held)&&y.busy<=0&&y.down<=0&&(y.queue=!1,Ge());for(let w of ee.slice())zt(w,l);if(He(l),y.mecha){let w=y.mecha,U=w.M;w.t-=l,w.ph+=l*(2+Math.abs(t.speed)*.9);let V=Math.min(1,Math.abs(t.speed)/6)*Math.sin(w.ph)*.55;U.legs[0].rotation.x=V,U.legs[1].rotation.x=-V,w.swing>0&&(w.swing-=l);let B=w.swing>0?Math.sin((1-w.swing/.4)*Math.PI):0;U.arms[0].rotation.x=-(w.arm!==1?B:0)*1.9+V*.4,U.arms[1].rotation.x=-(w.arm!==0?B:0)*1.9-V*.4,U.g.position.set(t.x,t.y+Math.abs(Math.sin(w.ph))*.06*Math.min(1,Math.abs(t.speed)/6),t.z),U.g.rotation.y=t.yaw,U.g.visible=!t.inside,w.t<=0&&Q(!1)}A&&!y.armed&&!y.manual&&!t.mount&&!t.inside&&!t.talking&&ne(!0),y.armed&&!W.on&&!A&&!y.mecha&&(y.idle+=l,y.idle>25&&!Z.some(w=>w.type!=="dummy"&&w.state!=="idle"&&w.state!=="dead")&&ne(!1));for(let w of Z.slice())w.obj.visible=!t.inside,!t.inside&&(w.arena||be(w.x,w.z,t.x,t.z)<80)&&Jn(w,l);Dt(l);for(let w=N.length-1;w>=0;w--)Sn(N[w],l)&&(at(N[w].m),N.splice(w,1));for(let w=J.length-1;w>=0;w--){let U=J[w];U.t+=l;let V=Math.min(1,U.t/U.dur);U.upd(V),V>=1&&(at(U.obj),J.splice(w,1))}if(ie.shake=Math.max(0,ie.shake-l*2.2),ve.visible=(y.shield>0||y.inv>1||y.guardT>0||y.absorbT>0)&&!t.inside&&!y.mecha,ve.visible&&(ve.position.set(t.x,t.y+1,t.z),ve.material.opacity=.14+Math.sin(t.t*5)*.04),Ue.visible=y.atkT>0||y.critT>0||y.aspdT>0||!!m.mantra&&y.armed,Ue.visible&&(Ue.position.set(t.x,t.y+.12,t.z),Ue.scale.setScalar((m.mantra&&y.atkT<=0&&y.critT<=0?.8:1.1)+Math.sin(t.t*6)*.12),Ue.rotation.y=t.t*2),W.on)if(!Re(t.x,t.z)&&y.down<=0)h("D\xE9fi abandonn\xE9","Vague "+W.wave),Et();else if(W.pending==null&&!Z.some(w=>w.arena&&w.state!=="dead")){let w=W.wave>W.best;W.best=Math.max(W.best,W.wave),w&&u.onArena&&u.onArena(W.best);let U=u.onWave?u.onWave(W.wave):null;Te(Math.round(y.max*.3)),h("Vague "+W.wave+" termin\xE9e",[U?"+"+U.x+" XP \xB7 +"+U.k+" kinahs"+(U.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui : 10 %)"):"",w?"nouveau record":""].filter(Boolean).join(" \xB7 ")),W.pending=W.loop?2.2:3.2,W.loop&&W.wave--}else W.pending!=null&&(W.pending-=l,W.pending<=0&&(W.pending=null,nt()));if((Ye+=l)>.6){Ye=0;for(let w of Ii){let U=be(w.x,w.z,t.x,t.z);if(w.t>0&&(w.t-=.6),U<85&&!w.es.length&&w.t<=0&&!t.inside)for(let V=0;V<w.n;V++){let B=V/w.n*6.28,F=w.x+Math.sin(B)*2.5*(w.n>1),ue=w.z+Math.cos(B)*2.5*(w.n>1);w.es.push(R(w.type,F,ue,w.lvl,{wild:w,quiet:!0}))}else if(U>150&&w.es.length)for(let V of w.es.slice())V.state="gone",te(V)}}ie.warnT>0!==ln&&(ln=ie.warnT>0,kt&&kt.classList.toggle("warn",ln),o.classList.toggle("ew-warn",ln)),(yt+=l)>.08&&(yt=0,Ln())},Object.assign(ie,{attack:Ge,skill:C,dodge:I,rotate:de,arm:ne,nextLock:j,pickLock:se,toggleArm:()=>{y.manual=y.armed,ne(!y.armed)},startArena:Ct,arenaStart:xt,inArena:Re,spawn:R,moveK:()=>y.down>0||y.lock>0||y.stunT>0||y.rootT>0?0:(y.slowT>0?y.slowK:1)*(y.eslowT>0?1-y.eslowK:1),dispose(){e.remove(q),q.geometry.dispose(),q.material.dispose(),y.mecha&&(e.remove(y.mecha.M.g),Ai(y.mecha.M.g),y.mecha=null,n.group.visible=!0),ht(0);for(let l of ee.slice())Qe(l);for(let l of $.splice(0))at(l.m);for(let l of J)at(l.obj);for(let l of N)at(l.m);for(let l of Z)l.barTex.dispose();for(let l in we)we[l].dispose()}}),A&&ne(!0),Ln(),ie}var lh=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Br=(i,e)=>Math.exp(-(i*i)/(2*e*e)),Ts=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),F1=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Zt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=lh(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*Br(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*Br(n,230),t+=35*Br(Math.hypot(i-190,e+175),55)+16*Br(Math.hypot(i-120,e+235),50)+26*Br(Math.hypot(i,e+335),72);for(let s of F1){let r=1-lh(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*Br(Math.abs(i-Ts(e)),12),t}var Kd=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function cl(i,e){let t=1e9;for(let[n,s,r,a]of Kd){let o=r-n,c=a-s,h=Math.max(0,Math.min(1,((i-n)*o+(e-s)*c)/(o*o+c*c)));t=Math.min(t,Math.hypot(i-n-o*h,e-s-c*h))}return t}function qd(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-Ts(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let c=lh(44,72,t);o=[nn(.4,.86,c*c),nn(.37,.89,c*c),nn(.36,.94,c*c)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&cl(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var Yd=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],Zd={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},B1={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},H1={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function Ra(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ca=class{constructor(){this.b={},this.boxes=[],this.m4=new Nt,this.q=new jn,this.e=new gs}add(e,t,n,s,r,a=0,o=1,c=1,h=1,u=0,f=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,f,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new X(n,s,r),this.q,new X(o,c,h)));for(let d of Object.keys(p.attributes))d!=="position"&&d!=="normal"&&p.deleteAttribute(d);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),c=(n*a+s*o)/2,h=(n*o+s*a)/2;this.boxes.push([e-c,e+c,t-h,t+h])}build(e,t){let n=new vt;for(let s in this.b){let r=va(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new Ne(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},Je=new Qn(1,1,1),Ta=new vn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),on=new Un(.5,.5,1,12),Gr=new vn(.5,1,12),ns=new xi(.5,12,8),On=new xs(1,1),G1=new xi(.5,16,8,0,Math.PI*2,0,Math.PI/2),Hr=new Un(.5,.5,1,56),Aa=(()=>{let i=new ei;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new br(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function yi(i,e,t,n,s,r,a,o,c,h,u={}){let f=u.y??Zt(t,n);i.add(c,Je,t,f+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(h,Je,t,f+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(h,Ta,t,f+a+p/2,n,o,s+1,p,r+1):i.add(h,Aa,t,f+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",Je,t+Math.cos(o)*s*.25,f+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let d=Math.cos(o),x=Math.sin(o),v=Math.max(1,Math.floor(a/3.1));for(let[_,E,D,P]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let L=Math.max(1,Math.floor(D/2.8));for(let k=0;k<v;k++)for(let S=0;S<L;S++){if(k===0&&E===1&&S===Math.floor(L/2))continue;let A=(S-(L-1)/2)*(D/L),y=_?_*(P+.04):A,G=E?E*(P+.04):A,Z=t+y*d+G*x,N=n-y*x+G*d,J=o+Math.atan2(_,E);i.add(e()<(u.lit??.55)?"winLit":"winDark",On,Z,f+1.9+k*3.1,N,J,.9,1.25,1)}}let g=r/2+.05,m=t+g*x,M=n+g*d;return i.add("wood",On,m,f+1.05,M,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*x,n+(r/2+1.6)*d]}}function Ea(i,e,t){let n=Zt(e,t);i.add("iron",on,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",Je,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",ns,e,n+3.55,t,0,.42,.5,.42)}function V1(i,e){let t=new Ca,n=Ra(20261112),s=[],r=[],a=(d,x,v,g)=>v.some(m=>Math.hypot(d-m[0],x-m[1])<(m[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],c=["wallA","wallB","wallC","wallW"],h=["roofA","roofB"];for(let d=-150;d<=150;d+=24)for(let x=-150;x<=160;x+=22){let v=d+(n()-.5)*6,g=x+(n()-.5)*5;if(Math.hypot(v,g)>158||a(v,g,o,0)||cl(v,g)<8.5||Math.abs(v-Ts(g))<40||n()<.12)continue;let M=g>-10&&v>-70,_=9+n()*7,E=8+n()*6,D=(M?5.5:7)+n()*(M?4.5:8);yi(t,n,v,g,_,E,D,n()<.5?0:Math.PI/2,M?n()<.5?"wallB":"wallC":c[Math.floor(n()*4)],h[Math.floor(n()*2)],{lit:M?.4:.6,hip:n()<.25})}for(let[d,x,v,g]of Kd.slice(0,6)){let m=Math.floor(Math.hypot(v-d,g-x)/22);for(let M=1;M<m;M++){let _=M/m,E=d+(v-d)*_,D=x+(g-x)*_,P=-(g-x),L=v-d,k=Math.hypot(P,L);Ea(t,E+P/k*4.6,D+L/k*4.6)}}{let d=Zt(-18,14);yi(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",Je,-12,d+3.2,22.5,.35,5.5,1.4,.05),t.add("white",Je,-6.5,d+3,20.6,.35,2.4,1.7,.05),t.add("iron",on,-15.5,d+2,24,0,.1,4,.1),t.add("iron",on,-4.5,d+2,19.6,0,.1,4,.1),t.add("wood",Je,-37,d+4.1,33,1.2,9,.35,7);for(let[x,v]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),m=Math.sin(1.2);t.add("wood",on,-37+x*g+v*m,d+2,33-x*m+v*g,0,.35,4,.35)}t.add("stoneD",Je,-39.5,d+1,35,1.2,2.6,2,2.2),t.add("ember",Je,-39.5,d+2.05,35,1.2,1.9,.2,1.5),t.add("iron",Je,-35.5,d+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",Je,-35.5,d+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,d+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let d=Zt(0,-95);t.add("stone",Je,0,d+10,-98,0,22,21,46),t.add("roofB",Aa,0,d+20.4,-98,0,24,10,47),t.add("stone",Je,0,d+22,-70.5,0,11,45,10),t.add("roofB",Ta,0,d+53,-70.5,0,12,18,11),t.add("gold",Je,0,d+64,-70.5,0,.3,4,.3),t.add("gold",Je,0,d+64.6,-70.5,0,1.8,.3,.3),t.add("rose",on,0,d+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",On,0,d+2.6,-65.42,0,3.4,5.2,1);for(let x=0;x<4;x++)t.add("stoneL",Je,0,d-.3+x*-0+.2*(3-x),-63.6+x*.9,0,12+x*1.4,.4,1);for(let x=0;x<6;x++)for(let v of[-1,1])t.add("rose",On,v*11.06,d+9,-116+x*7.2,v*Math.PI/2,2.2,8,1),t.add("stoneD",Je,v*12,d+6.5,-112.4+x*7.2,0,1.6,13,1.6);for(let x of[30,36])for(let[v,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",On,v*5.56,d+x,-70.5+(g?5.06:0),Math.atan2(v,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,d+5,-61,16767392,1.6,22])}{let d=Zt(-118,-22);yi(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),yi(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let x=0;x<26;x++)t.add("iron",on,-96,d+1.4,-52+x*2.2,0,.12,2.8,.12);t.add("iron",Je,-96,d+2.5,-24.5,0,.14,.14,56),t.add("iron",Je,-96,d+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let d=Zt(-62,112);t.add("wallC",Je,-62,d+5,122,.9,30,11,12),t.add("iron",on,-62,d+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",On,-57.2,d+6,118.2,.9+Math.PI,7,6,1);for(let x=0;x<12;x++)t.add("wood",Je,-74+x*2.6,d+.12,102+x*2.05,.9,.5,.2,5);t.add("iron",Je,-60,d+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",Je,-58.6,d+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let d=Zt(70,30);for(let x of[-1,1])t.add("stoneD",Je,70+x*3.6*Math.cos(-1.2),d+3,30-x*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",Je,70,d+7.2,30,-1.2,9.4,2,3.2),t.add("void",On,70+.4*Math.sin(-1.2),d+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let x of[-1,1]){let v=70+x*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-x*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",on,v,d+.3,g,0,.16,.6,.16),t.add("lamp",ns,v,d+.72,g,0,.2,.3,.2)}r.push([67,d+1.6,28,16762977,1.1,10])}yi(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),yi(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let M=0;M<9;M++)if(t.add("wood",Je,188+M*2.2,1.1,24,0,2,.25,4.6),M%2===0)for(let _ of[-1,1])t.add("wood",on,188+M*2.2,1.1-1.6,24+_*2.1,0,.3,3.6,.3);let x=(M,_,E,D)=>{t.add(D,ns,M,.55,_,E,2,1.3,5.2),t.add("void",Je,M,1,_,E,1.5,.3,4.2),t.add("wood",Je,M,.95,_,E,1.7,.1,.5)};x(206,29,.25,"wood"),x(203,6,-.2,"wallC"),x(204,48,.1,"wallB"),yi(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),yi(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),Ea(t,186,21);let v=-56,g=Ts(v),m=3.6;t.add("stone",Je,g,m,v,0,40,.8,6.5);for(let M of[-1,1])t.add("stone",Je,g,m+.9,v+M*3,0,40,1,.5);for(let M of[-9,9])t.add("stoneD",Je,g+M,m-3,v,0,2.4,6,6);Ea(t,g-19,v+2.6),Ea(t,g+19,v-2.6)}{let d=Zt(190,-175);t.add("stoneL",on,190,d+4,-175,0,13,8,13),t.add("iron",G1,190,d+8,-175,0,13,13,13),t.add("void",Je,190,d+11.5,-171,0,1.6,5,6,-.6),t.add("wood",On,190,d+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let d=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[v,g,m]of d)yi(t,n,v,g,7.5,6.5,4.6,m,"wallA","snow",{lit:.7});let x=Zt(-250,-250);yi(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",Je,-253.2,x+6,-227.6,.2,3,12,3),t.add("snow",Ta,-253.2,x+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",on,-252,x+.5,-252,0,2.2,1,2.2),t.add("void",on,-252,x+1.02,-252,0,1.7,.02,1.7);for(let v of[-1,1])t.add("wood",on,-252+v*1.1,x+1.6,-252,0,.16,2.4,.16);t.add("wood",Aa,-252,x+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",on,-246,x+.2,-244,0,1.6,.4,1.6),t.add("ember",Gr,-246,x+.8,-244,0,.9,1.2,.9),r.push([-246,x+1.6,-244,16747066,2,18])}{let d=Zt(3,190);t.add("wood",on,3,d+1.4,190,0,.18,2.8,.18),t.add("wood",Je,3.5,d+2.4,190,.2,2.2,.5,.08)}{let d=st.x,x=st.z,v=Zt(d,x),g=44;t.add("stoneD",Hr,d,v+.02,x,0,72,.1,72),t.add("sand",Hr,d,v+.06,x,0,45.6,.1,45.6),t.add("stoneD",Hr,d,v+.09,x,0,5.4,.1,5.4),t.add("neon",Hr,d,v+.1,x,0,4.6,.1,4.6),t.add("stoneD",Hr,d,v+.11,x,0,4.2,.1,4.2),t.add("ember",Hr,d,v+.12,x,0,1.1,.1,1.1);for(let m=0;m<g;m++){let M=(m+.5)/g*6.2832,_=Math.cos(M),E=Math.sin(M),D=-M+Math.PI/2,P=M>Math.PI?M-6.2832:M;if(Math.abs(P)<st.gate+.05)continue;for(let S=0;S<4;S++){let A=24+S*2.1,y=6.2832*(A+1.1)/g+.06;t.add(S%2?"stone":"stoneL",Je,d+_*A,v+(.9+S)/2,x+E*A,D,y,.9+S,2.2)}let L=32.8,k=6.2832*(L+.8)/g+.06;t.add("stone",Je,d+_*L,v+4.3,x+E*L,D,k,8.6,1.4),m%2&&t.add("stoneL",Je,d+_*L,v+9.1,x+E*L,D,k*.6,1,1.4),m%4===1&&(t.add("iron",on,d+_*L,v+11.4,x+E*L,0,.14,5,.14),t.add(m%8===1?"banner":"flag",Je,d+_*L-E*.95,v+13.1,x+E*L+_*.95,D,1.8,1.1,.06))}for(let m of[-1,1]){let M=m*(st.gate+.11),_=d+Math.cos(M)*30.5,E=x+Math.sin(M)*30.5;t.add("stoneL",on,_,v+6,E,0,4.6,12,4.6),t.add("roofA",Gr,_,v+14.3,E,0,5.6,4.6,5.6),t.add("stoneD",on,d+37.5,v+.6,x+m*5,0,1.2,1.2,1.2),t.add("ember",Gr,d+37.5,v+1.6,x+m*5,0,.9,1.2,.9),r.push([d+37.5,v+2.6,x+m*5,16747066,1.8,18])}t.add("stone",Je,d+30.5,v+9.8,x,0,4.4,3,11),t.add("banner",Je,d+32.8,v+8.8,x,0,.08,3.4,3),t.add("gold",Je,d+32.86,v+8.8,x,0,.08,1.4,.4),t.add("gold",Je,d+32.86,v+9.1,x,0,.08,.4,1.3)}let u=[];for(let d of i.houses||[]){let x=Zd[d.id];if(!x)continue;let[v,g,m]=x,M=Zt(v,g),_=Math.cos(m),E=Math.sin(m),D,P=(L,k)=>[v+L*_+k*E,g-L*E+k*_];if(d.id==="h0"){for(let[y,G,Z,N]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[J,b]=P(y,G);t.add("rock",ns,J,M+N*.2,b,n()*3,Z,N,Z)}let[L,k]=P(0,1.2);t.add("void",ns,L,M+1.2,k,m,4.4,4.6,2.4);let[S,A]=P(0,3.5);t.add("ember",Gr,S,M+.4,A,0,.7,.9,.7),r.push([S,M+1.3,A,16747066,1.6,12]),D=P(0,4.2),t.solid(...P(0,-5),16,9)}else if(d.id==="h1")D=[72,27];else if(d.id==="h2"){t.add("stoneL",Je,...(L=>[L[0],M+4,L[1]])(P(-5.5,0)),m,1,9,16),t.add("stoneL",Je,...(L=>[L[0],M+2.6,L[1]])(P(5.5,-2)),m,1,6.2,11),t.add("stoneL",Je,...(L=>[L[0],M+5,L[1]])(P(0,-8)),m,12,11,1),t.add("stoneL",Aa,...(L=>[L[0],M+10.4,L[1]])(P(0,-8)),m,12,4,1),t.add("roofB",Je,...(L=>[L[0],M+8.4,L[1]])(P(-2.6,-3)),m,6.4,.3,9.5,0,-.5),t.add("rose",On,...(L=>[L[0],M+6.5,L[1]])(P(0,-7.44)),m,2,4.6,1),t.add("stoneD",Je,...(L=>[L[0],M+.6,L[1]])(P(0,-5.6)),m,3,1.2,1.6);for(let[L,k]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(k,ns,...(S=>[S[0],M+.25,S[1]])(P(L,-3.4)),0,.7,.5,.7);D=P(0,9),t.solid(...P(-5.5,0),1.2,16,m),t.solid(...P(0,-8),12,1.2,m)}else if(d.id==="h3"){let L=yi(t,n,v,g,22,14,11,m,"wallA","roofA",{lit:.85,hip:!0});for(let k of[-1,1]){let[S,A]=P(k*13.5,1);yi(t,n,S,A,6,9,13,m,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let k of[-1,1])Ea(t,...P(k*3,10));D=L.door}else if(d.id==="h4"){t.add("stone",Je,v,M+6,g,m,26,13,20);for(let[S,A]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[y,G]=P(S,A);t.add("stoneL",on,y,M+9,G,0,7,19,7),t.add("roofB",Gr,y,M+22,G,0,8.2,8,8.2),t.add("flag",Je,y+.9,M+27.2,G,m,1.8,1,.06),t.add("iron",on,y,M+27,G,0,.12,3,.12)}for(let S=-5;S<=5;S++){let[A,y]=P(S*2.3,10.2);S%2&&t.add("stone",Je,A,M+13.4,y,m,1.2,1,.8)}let[L,k]=P(0,10.06);t.add("wood",On,L,M+2.4,k,m,4,5,1);for(let S of[-7,7])for(let A of[5,9]){let[y,G]=P(S,10.06);t.add("winLit",On,y,M+A,G,m,1.2,1.8,1)}D=P(0,12.5),t.solid(v,g,30,24,m)}else if(d.id==="h5"){t.add("obs",Je,v,M+9,g,m,20,18,16),t.add("obs",Ta,v,M+24,g,m,16,12,13);for(let[S,A,y]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[G,Z]=P(S,A);t.add("obs",Je,G,M+y/2,Z,m,5,y,5),t.add("obs",Ta,G,M+y+4,Z,m,5.6,8,5.6),t.add("umbra",On,...(N=>[N[0],M+y-3,N[1]])(P(S,A+2.54)),m,1,3,1)}let[L,k]=P(0,8.06);t.add("umbra",On,L,M+3.4,k,m,3.4,6.8,1),t.add("neon",On,L,M+3.4,k+.02*_,m,.3,6.8,1),D=P(0,10.6),t.solid(v,g,30,18,m),r.push([D[0],M+4,D[1],9133302,2.4,22])}else if(d.id==="h6"){t.add("light",Je,v,M+7,g,m,26,14,16),t.add("gold",Aa,v,M+14,g,m,28,8,17.4);for(let S=-4;S<=4;S++)for(let A of[3,7,11]){if(S===0&&A===3)continue;let[y,G]=P(S*2.8,8.06);t.add("sun",On,y,M+A,G,m,1.3,2.2,1)}let[L,k]=P(0,8.08);t.add("sun",On,L,M+3,k,m,3,6,1);for(let S=0;S<6;S++){let[A,y]=P(0,9+S*1.1);t.add("light",Je,A,M-.2-S*.02,y,m,8+S,.5,1.1)}D=P(0,11.5),t.solid(v,g,26,16,m),r.push([D[0],M+6,D[1],16773312,3.2,40])}u.push({...d,x:D[0],z:D[1]})}let f=[],p=e.trees;for(let d=0;d<p*6&&f.length<p;d++){let x=(n()-.5)*860,v=(n()-.5)*860,g=Zt(x,v);if(Math.hypot(x,v)<176&&n()>.04||g<2.2||g>70||Math.abs(x-Ts(v))<16||cl(x,v)<5||Math.hypot(x-318,v-300)<104||a(x,v,Object.values(Zd).map(_=>[_[0],_[1],24]),0)||a(x,v,[[-250,-250,44],[190,-175,16],[st.x,st.z,42]],0))continue;let M=v>150?1:.45;n()>M||f.push({x,y:g,z:v,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:f}}var Jd=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function W1(i,e,t,n){let[s,r,a,o]=Jd[e.r]||Jd[0],c=5+e.r*.5,h=Ra(77+e.r);i.add(r,Je,0,n-.25,0,0,a,.5,o),i.add(s,Je,0,n+c/2,-o/2,0,a,c,.5),i.add(s,Je,-a/2,n+c/2,0,0,.5,c,o),i.add(s,Je,a/2,n+c/2,0,0,.5,c,o),i.add("rug",Je,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",Je,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",Je,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",Gr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",Je,0,n+3.8,-o/2+.6,0,1.6,c-3.2,.8),i.add("wood",Je,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[d,x]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",on,d*Math.min(2.6,a*.15),n+.47,x,0,.16,.95,.16);for(let d=-1;d<=1;d++)for(let x of[-1,1])i.add("wood",on,d*1.3,n+.3,1+x*1.4,0,.55,.6,.55);i.add("white",on,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",ns,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let d=0;d<u;d++){let x=d%2?1:-1,v=Math.floor(d/2),g=x*(a/2-1.5),m=-o/2+2.6+v*2.6;if(m>o/2-1.5)break;i.add("wood",Je,g,n+.35,m,0,2.2,.5,1.1),i.add("white",Je,g,n+.66,m,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][d%4],Je,g-x*.3,n+.75,m,0,1.5,.1,1.02)}for(let d of[-1,1])for(let x=-1;x<=1;x+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",On,d*(a/2-.27),n+2.6,x*o*.22,-d*Math.PI/2,1.3,1.9,1);let f=t.instruments||[],p=a/2-2;if(f.includes("i4")&&(i.add("wood",Je,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",Je,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),f.includes("i5")){for(let d=0;d<7;d++)i.add("gold",on,-p+d*.34,n+1.6+Math.abs(3-d)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-d)*.6,.26);i.add("wood",Je,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return f.includes("i1")&&(i.add("wood",ns,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",Je,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),f.includes("i3")&&(i.add("wallC",ns,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",Je,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(f.includes("i6")||f.includes("i2")||f.includes("i0"))&&(i.add("gold",Je,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",Je,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",Je,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",On,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:c,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(d=>Math.abs(d[0])<a/2-2&&Math.abs(d[1])<o/2-1.5)}}var X1=`
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
`;function $d(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let I=document.createElement("style");I.id="ew-css",I.textContent=X1,document.head.appendChild(I)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
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
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=I=>r.querySelector(I),o=a(".ew-c"),c=new Ns({canvas:o,antialias:n,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),c.outputColorSpace=en,c.toneMapping=ya,c.toneMappingExposure=1.05,s.shadows&&(c.shadowMap.enabled=!0,c.shadowMap.type=xa);let h=new vs,u=new An(n?55:62,1,.3,2400),f=new rt(12085832);h.fog=new To(f,s.fog[0],s.fog[1]);{let I=new ys(c);h.environment=I.fromScene(new Cr,.04).texture,I.dispose()}let p=new X(-.62,.36,.5).normalize(),d=new Er(16769228,2761796,.75);h.add(d);let x=new _s(16768184,2.7);h.add(x,x.target),s.shadows&&(x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),x.shadow.bias=-6e-4,x.shadow.normalBias=.06);let v=new Ne(new xi(2e3,32,16),new yn({side:gn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));h.add(v);let g=new vt;h.add(g);{let I=document.createElement("canvas");I.width=256,I.height=128;let H=I.getContext("2d"),K=Ra(5);for(let Ce=0;Ce<26;Ce++){let C=40+K()*176,q=46+K()*40,se=18+K()*34,j=H.createRadialGradient(C,q,0,C,q,se);j.addColorStop(0,"rgba(255,255,255,.5)"),j.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=j,H.fillRect(0,0,256,128)}let Ee=new Vn(I);for(let Ce=0;Ce<16;Ce++){let C=new Ne(new xs(1,1),new Ft({map:Ee,transparent:!0,depthWrite:!1,fog:!1,color:new rt().setHSL(.04+K()*.05,.75,.62+K()*.2),opacity:.75})),q=K()*6.28,se=500+K()*900;C.position.set(Math.cos(q)*se,190+K()*180,Math.sin(q)*se),C.scale.set(420+K()*380,120+K()*90,1),C.rotation.x=Math.PI/2,C.rotation.z=K()*6.28,g.add(C)}}{let I=new xs(900,900,s.seg,s.seg);I.rotateX(-Math.PI/2);let H=I.attributes.position,K=new Float32Array(H.count*3),Ee=[0,0,0];for(let de=0;de<H.count;de++){let qe=H.getX(de),nt=H.getZ(de),xt=Zt(qe,nt);H.setY(de,xt),qd(qe,nt,xt,Ee),K[de*3]=Math.pow(Ee[0],2.2),K[de*3+1]=Math.pow(Ee[1],2.2),K[de*3+2]=Math.pow(Ee[2],2.2)}I.setAttribute("color",new xn(K,3));let Ce=I.toNonIndexed();Ce.computeVertexNormals(),I.dispose();let C=document.createElement("canvas");C.width=C.height=256;let q=C.getContext("2d"),se=Ra(31);q.fillStyle="#e4e4e4",q.fillRect(0,0,256,256);for(let de=0;de<2600;de++){let qe=190+Math.floor(se()*65);q.fillStyle=`rgba(${qe},${qe},${qe},.55)`;let nt=1+se()*5;q.fillRect(se()*256,se()*256,nt,nt)}q.strokeStyle="rgba(70,60,55,.3)",q.lineWidth=1.6;for(let de=0;de<8;de++)for(let qe=0;qe<8;qe++){let nt=de%2*16;q.strokeRect(qe*32+nt+(se()-.5)*3,de*32+(se()-.5)*3,32,32)}let j=new Vn(C);j.wrapS=j.wrapT=ia,j.repeat.set(140,140),j.anisotropy=4,j.colorSpace=en;let Me=new Ne(Ce,new hn({vertexColors:!0,map:j,roughness:.96,metalness:0,envMapIntensity:.25}));Me.receiveShadow=s.shadows,h.add(Me);let pe=new Ne(new gi(440,2400,48,1),new hn({color:4865826,roughness:1,envMapIntensity:.1}));pe.rotation.x=-Math.PI/2,pe.position.y=2.6,h.add(pe)}let m=new Ne(new xs(2400,2400),new hn({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));m.rotation.x=-Math.PI/2,m.position.y=.35,h.add(m);let M=new Ne(new ki(96,48),new hn({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));M.rotation.x=-Math.PI/2,M.position.set(318,1.32,300),h.add(M);let _=(I,H=.9,K=0,Ee)=>new hn(Object.assign({color:I,roughness:H,metalness:K,envMapIntensity:.35},Ee||{})),E=I=>new Ft({color:I,toneMapped:(s.bloom,!1)}),D={wallA:_(12098426),wallB:_(9405303),wallC:_(10246725),wallW:_(14867920),stone:_(9144208),stoneL:_(11644338),stoneD:_(4867664),roofA:_(5125424),roofB:_(3554376),wood:_(5913892),iron:_(3816774,.5,.7),snow:_(15660024,.7),white:_(16052712),rock:_(5591642,1),obs:_(1512479,.35,.6),gold:_(15254632,.3,.9),light:_(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:_(4029142),rug:_(8007466),flowerA:_(14243450),flowerB:_(15254090),flowerC:_(9071318),sand:_(13481610,1),banner:_(10234410),winLit:E(16762222),winDark:_(1712176,.2,.6),lamp:E(16767392),ember:E(16742954),rose:E(13208278),umbra:E(10976255),neon:E(61695),sun:E(16774084),void:_(197382,1)},P=V1(e,s),L=P.B.build(D,s.shadows);h.add(L);for(let[I,H,K,Ee,Ce,C]of P.lights.slice(0,n?12:6)){let q=new li(Ee,Ce*14,C,1.6);q.position.set(I,H,K),h.add(q)}let k=new vt;{let I=Zt(-70,100);k.position.set(-70,I+5.2,100);let H=new Ne(new ti(4.2,.28,10,48),E(8386303)),K=new Ne(new ki(4.1,40),new Ft({color:1723647,transparent:!0,opacity:.55,side:tn,blending:Gn,depthWrite:!1})),Ee=new Ne(new gi(1.2,3.6,40),new Ft({color:9133302,transparent:!0,opacity:.5,side:tn,blending:Gn,depthWrite:!1}));k.add(H,K,Ee),k.scale.set(.8,1.25,1),k.rotation.y=.9;let Ce=new li(3842303,60,46,1.5);k.add(Ce),h.add(k),k.userData={m2:K,m3:Ee}}{let I=new Un(.22,.34,1,6).translate(0,.5,0),H=new vn(1,1,7).translate(0,.5,0),K=new Oo(1,1),Ee=P.trees.filter(j=>j.pine),Ce=P.trees.filter(j=>!j.pine),C=new dn,q=new rt,se=(j,Me,pe,de)=>{let qe=new Co(j,Me,Math.max(1,pe.length));return pe.forEach((nt,xt)=>{de(nt,C),C.updateMatrix(),qe.setMatrixAt(xt,C.matrix),nt._c&&qe.setColorAt(xt,nt._c)}),qe.count=pe.length,qe.castShadow=s.shadows,qe.receiveShadow=!1,h.add(qe),qe};if(se(I,_(3811868,1),P.trees,(j,Me)=>{Me.position.set(j.x,j.y-.3,j.z),Me.scale.set(j.s,j.s*(j.pine?2.2:3.2),j.s),Me.rotation.set(0,0,0)}),Ee.forEach(j=>{j._c=q.clone().setHSL(.3+j.c*.06,.42,.11+j.c*.06)}),Ce.forEach(j=>{j._c=q.clone().setHSL(.02+j.c*.11,.72,.36+j.c*.14)}),se(H,_(16777215,1),Ee,(j,Me)=>{Me.position.set(j.x,j.y+j.s*1.3,j.z),Me.scale.set(j.s*2.1,j.s*6.2,j.s*2.1),Me.rotation.set(0,j.c*6,0)}),se(K,new hn({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),Ce,(j,Me)=>{Me.position.set(j.x,j.y+j.s*4.1,j.z),Me.scale.set(j.s*2.5,j.s*2.1,j.s*2.5),Me.rotation.set(j.c,j.c*6,0)}),s.grass){let j=Ra(9),Me=[];for(let pe=0;pe<s.grass*5&&Me.length<s.grass;pe++){let de=(j()-.5)*760,qe=(j()-.5)*760,nt=Zt(de,qe);Math.hypot(de,qe)<184||Math.hypot(de-st.x,qe-st.z)<39||nt<2.3||nt>44||Math.abs(de-Ts(qe))<15||cl(de,qe)<4||Me.push({x:de,y:nt,z:qe,s:.5+j()*.9,c:j(),_c:q.clone().setHSL(.08+j()*.1,.5,.3+j()*.12)})}se(new vn(.5,1,4).translate(0,.5,0),_(16777215,1),Me,(pe,de)=>{de.position.set(pe.x,pe.y-.05,pe.z),de.scale.set(pe.s*.9,pe.s*1.1,pe.s*.9),de.rotation.set(0,pe.c*6,0)}).castShadow=!1}}let S={},A=new Ca;P.houses.forEach((I,H)=>{let Ee=H*80,Ce=new Ca,C=W1(Ce,I,e,-400);for(let q in Ce.b)for(let se of Ce.b[q])se.translate(Ee,0,0),(A.b[q]=A.b[q]||[]).push(se);S[I.id]={...C,ox:Ee,oy:-400,hs:I}});let y=A.build(D,!1);y.visible=!1,h.add(y);let G=new li(16756848,0,40,1.4),Z=new li(16773341,0,60,1.2);h.add(G,Z);let N=Ss(e.hero);h.add(N.group),N.group.rotation.order="YXZ";let J=null;if(e.plate&&(e.plate.title||e.plate.name)){let I=document.createElement("canvas");I.width=512,I.height=128;let H=I.getContext("2d"),K=e.plate;H.textAlign="center",H.textBaseline="middle",H.lineJoin="round";let Ee=(C,q,se,j)=>{H.font=se,H.lineWidth=7,H.strokeStyle="rgba(0,0,0,.85)",H.strokeText(C,256,q),H.shadowColor=j,H.shadowBlur=14,H.fillStyle=j,H.fillText(C,256,q),H.shadowBlur=0};K.title&&Ee("\xAB "+K.title+" \xBB",K.name?40:64,"700 38px Oxanium, Barlow, sans-serif",K.color||"#ffd56a"),K.name&&Ee(K.name,K.title?92:64,"600 34px Barlow, sans-serif","#ffffff");let Ce=new Vn(I);Ce.colorSpace=en,J=new Ui(new Si({map:Ce,transparent:!0,depthWrite:!1,fog:!1})),J.scale.set(2.6,.65,1),J.position.y=N.height+.62,J.renderOrder=8,N.group.add(J)}let b={pitch:0,fly:!1,x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};b.y=Zt(b.x,b.z);for(let I of Yd)if(Math.hypot(b.x-I[0],b.z-I[1])<I[2]){b.zone=I[3];break}let ee=(e.mounts||[]).filter(I=>Oi[I.id]),$=Math.max(0,ee.findIndex(I=>I.id===e.mount)),W=null;function ie(I){if(b.mount&&(h.remove(b.mount.group),Ai(b.mount.group),b.mount=null,b.mountId=null),I&&ee.length&&!b.inside){let H=ee[$].id;b.mount=Oi[H].make(),b.mountId=H,Ko(b.mount.group),h.add(b.mount.group),W&&W.arm(!1),b.mount.group.traverse(K=>{K.isMesh&&(K.castShadow=s.shadows)}),te("En selle",ee[$].name)}a('[data-w="mount"]').classList.toggle("on",!!b.mount)}ee.length||(a('[data-w="mount"]').disabled=!0);let Se=[],be=I=>{let H=document.createElement("canvas");H.width=256,H.height=64;let K=H.getContext("2d");K.font="600 26px Oxanium, Barlow, sans-serif",K.textAlign="center",K.shadowColor="#000",K.shadowBlur=8,K.fillStyle="#eaffff",K.fillText(I,128,40);let Ee=new Ui(new Si({map:new Vn(H),transparent:!0,depthWrite:!1,fog:!1}));return Ee.scale.set(2.6,.65,1),Ee};function he(I,H,K,Ee,Ce,C){let q=H1[I.id];if(!q)return;let se=Ss(Object.assign({},q,{fx:Object.assign({lod:!0},q.fx)}));se.group.position.set(H,K,Ee),se.group.rotation.y=Ce;let j=be(I.name.split(" ").slice(0,2).join(" "));j.position.y=se.height/se.group.scale.y+.32,se.group.add(j),se.group.traverse(Me=>{Me.isMesh&&(Me.castShadow=s.shadows&&!C)}),h.add(se.group),Se.push({...I,av:se,x:H,y:K,z:Ee,ry:Ce,inside:C||null,lb:j,li:0})}for(let I of e.npcs||[]){let H=B1[I.id];H&&he(I,H[0],Zt(H[0],H[1]),H[1],H[2])}for(let I in S){let H=S[I];(e.npcs||[]).filter(K=>K.recruited).slice(0,H.spots.length).forEach((K,Ee)=>{let[Ce,C]=H.spots[Ee];he(K,H.ox+Ce,H.oy,C,Math.atan2(-Ce,1-C),I)})}y.visible=!1;function Re(I,H){Wt(!0),b.x=I,b.z=H,b.y=Zt(I,H),oe=!0}W=Xd({scene:h,st:b,player:N,data:e,H:Zt,cam:u,root:r,pc:n,toast:(I,H)=>te(I,H),cb:t,teleport:Re,dismount:()=>ie(!1),dash:(I,H)=>{b.dashV=I/H,b.dashT=H},inputDir:()=>b.inDir});let we={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},Xe={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Ve=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+we[N.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+Xe[N.stance]},at=(I,H)=>{let K=Object.keys(I);return K[(K.indexOf(H)+1)%K.length]};Ve();let Ke=I=>a('[data-o="'+I+'"]');function Oe(){Ke("auto").classList.toggle("on",W.auto),Ke("lock").classList.toggle("on",W.lock),Ke("fly").classList.toggle("on",!!b.fly);let I=a('[data-w="mount"] span'),H=a('[data-w="jump"]');I&&(I.textContent=b.fly?"Descendre":"Monture"),H&&(H.textContent=b.fly?"Monter":"Saut")}function $e(I){I&&(b.inside||b.talking||b.down)||(I&&(ie(!1),W.arena.on&&te("Vol","Les ombres vous attendent au sol"),b.vy=14,b.onGround=!1,gt=0),b.fly=I,_e.up=_e.dn=null,Oe(),I&&te("Vol",n?"Espace : monter \xB7 C : descendre \xB7 Maj : plus vite \xB7 B : se poser":"Maintenir Monter / Descendre \xB7 Sprint : plus vite"))}function Y(I){if(I==="fly"){$e(!b.fly);return}if(I==="lock"){if(W.lock&&W.lockE&&performance.now()-Ie<1500){W.nextLock(),Ie=performance.now();return}W.lock=!W.lock,Ie=performance.now(),W.lock&&(W.pickLock(),te("Cam\xE9ra verrouill\xE9e",W.lockE?W.lockE.name||W.lockE.T.name:"Elle suivra le prochain ennemi"))}else I==="auto"&&(W.auto=!W.auto,te(W.auto?"Combat automatique":"Combat manuel",W.auto?"Le personnage frappe et esquive tout seul":""));Oe(),t.onPref&&t.onPref({auto:W.auto,lock:W.lock})}let Ie=0;{let I=e.prefs||{};W.auto=!!I.auto,W.lock=!!I.lock,Oe()}r.addEventListener("pointerdown",I=>{let H=I.target.closest("[data-o]");!H||b.paused||(I.preventDefault(),I.stopPropagation(),Y(H.dataset.o))});let me=null;if(s.bloom)try{me=new al(c),me.addPass(new ol(h,u)),me.addPass(new Or(new Le(256,256),.42,.7,.82)),me.addPass(new ll)}catch{me=null}function Ae(){let I=r.clientWidth,H=r.clientHeight;if(I>H){let K=r.querySelector(".ew-rot");K&&K.classList.remove("on")}c.setSize(I,H,!1),u.aspect=I/H,u.fov=n?55:I>H?50:62,u.updateProjectionMatrix(),me&&me.setSize(I,H)}Ae(),window.addEventListener("resize",Ae);let ve=a(".ew-map"),Ue=ve.getContext("2d"),Fe=document.createElement("canvas");Fe.width=Fe.height=248;{let I=Fe.getContext("2d"),H=I.createImageData(248,248),K=[0,0,0];for(let Ee=0;Ee<248;Ee++)for(let Ce=0;Ce<248;Ce++){let C=(Ce/247-.5)*900,q=(Ee/247-.5)*900,se=Zt(C,q);qd(C,q,se,K);let j=(Ee*248+Ce)*4,Me=se<.4;H.data[j]=Me?70:K[0]*235,H.data[j+1]=Me?90:K[1]*235,H.data[j+2]=Me?120:K[2]*235,H.data[j+3]=255}I.putImageData(H,0,0),I.strokeStyle="#c9b48a",I.lineWidth=2,I.beginPath(),I.arc((st.x/900+.5)*248,(st.z/900+.5)*248,8,0,7),I.stroke(),I.fillStyle="#2a2420";for(let Ee of P.B.boxes){let Ce=(Ee[0]/900+.5)*248,C=(Ee[2]/900+.5)*248;I.fillRect(Ce,C,Math.max(1.5,(Ee[1]-Ee[0])/900*248),Math.max(1.5,(Ee[3]-Ee[2])/900*248))}}function z(){let H=b.inside?0:b.x,K=b.inside?0:b.z,Ee=(H/900+.5)*248,Ce=(K/900+.5)*248;if(Ue.setTransform(1,0,0,1,0,0),Ue.fillStyle="#0b0b12",Ue.fillRect(0,0,248,248),b.inside){Ue.fillStyle="#7ff6ff",Ue.font="600 20px Oxanium, sans-serif",Ue.textAlign="center",Ue.fillText("Int\xE9rieur",124,130);return}Ue.translate(124,124),Ue.scale(2.2,2.2),Ue.translate(-Ee,-Ce),Ue.drawImage(Fe,0,0);let C=(q,se,j,Me)=>{Ue.fillStyle=j,Ue.beginPath(),Ue.arc((q/900+.5)*248,(se/900+.5)*248,Me,0,7),Ue.fill()};for(let q of P.houses)C(q.x,q.z,"#ffd479",2.6);for(let q of Se)q.inside||C(q.x,q.z,"#7ff6ff",1.7);C(-70,100,"#3aa0ff",2.4),C(st.x,st.z,"#ff4d6d",2.2);for(let q of W.enemies)q.type!=="dummy"&&q.state!=="dead"&&C(q.x,q.z,"#ff4d6d",1.5);Ue.setTransform(1,0,0,1,124,124),Ue.rotate(-b.yaw+Math.PI),Ue.fillStyle="#fff",Ue.strokeStyle="#000",Ue.lineWidth=2,Ue.beginPath(),Ue.moveTo(0,-9),Ue.lineTo(6.5,7),Ue.lineTo(0,3.5),Ue.lineTo(-6.5,7),Ue.closePath(),Ue.stroke(),Ue.fill()}let R=0;function te(I,H=""){let K=a(".ew-zone");K.querySelector("b").textContent=I,K.querySelector("i").textContent=H,K.querySelector("i").style.display=H?"":"none",K.classList.add("on"),clearTimeout(R),R=setTimeout(()=>K.classList.remove("on"),3200)}let xe={},_e={mx:0,mz:0,jump:!1},Te=new Vo,tt=new X(0,-1,0),ze=new X,Ze=[];function it(I,H){ze.set(I,2e3,H),Te.set(ze,tt),Te.far=2200;let K=Te.intersectObject(L,!0)[0];return K?K.point.y:-99}function ut(I){if(Ze[I]==null){let H=P.B.boxes[I],K=(H[0]+H[1])/2,Ee=(H[2]+H[3])/2,Ce=(H[1]-H[0])*.3,C=(H[3]-H[2])*.3;Ze[I]=Math.max(it(K,Ee),it(K-Ce,Ee-C),it(K+Ce,Ee+C),it(K-Ce,Ee+C),it(K+Ce,Ee-C),Zt(K,Ee)+4)+.6}return Ze[I]}let ye=-99,gt=0,ct=null,ht=(I,H)=>{if(b.paused&&H&&I.code==="Escape"){ot(!1);return}xe[I.code]=H;let K=(I.key||"").toLowerCase();H&&(I.code==="Escape"?b.talking?bn():ot(!0):b.talking?(K==="e"||K==="f"||I.code==="Enter"||I.code==="Space")&&(I.preventDefault(),Ni()):K==="e"||K==="f"||I.code==="Enter"?Dt():K==="m"&&b.fly||(K==="m"?b.mount&&ee.length>1&&xe.ShiftLeft?($=($+1)%ee.length,ie(!0)):ie(!b.mount):K==="c"&&b.fly||(K==="c"&&ee.length>1?($=($+1)%ee.length,b.mount?ie(!0):te(ee[$].name,"Monture choisie")):I.code==="Space"?(I.preventDefault(),b.fly||(_e.jump=!0)):K==="r"?W.toggleArm():K==="b"?Y("fly"):K==="t"?Y("lock"):K==="g"?Y("auto"):K==="x"?W.attack():K==="v"?W.dodge():/^(Digit|Numpad)[1-5]$/.test(I.code)&&W.skill(+I.code.slice(-1)))))},lt=I=>ht(I,!0),je=I=>ht(I,!1);window.addEventListener("keydown",lt),window.addEventListener("keyup",je);let Qe=null,dt={id:null,ox:0,oy:0},zt=a(".ew-stick"),pt=I=>{if(!I.target.closest("button,.ew-dlg,.ew-menu,.ew-map,.ew-opt")){if(!n&&I.clientX<r.clientWidth*.46&&I.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&dt.id===null){dt.id=I.pointerId,dt.ox=I.clientX,dt.oy=I.clientY,zt.style.display="block",zt.style.left=I.clientX+"px",zt.style.top=I.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",zt.firstChild.style.transform="";return}Qe||(Qe={id:I.pointerId,x:I.clientX,y:I.clientY,x0:I.clientX,y0:I.clientY,t:performance.now(),b:I.button})}},De=I=>{if(I.pointerId===dt.id){let H=I.clientX-dt.ox,K=I.clientY-dt.oy,Ee=Math.hypot(H,K),Ce=52;Ee>Ce&&(H*=Ce/Ee,K*=Ce/Ee),zt.firstChild.style.transform=`translate(${H}px,${K}px)`,_e.mx=H/Ce,_e.mz=K/Ce}else Qe&&I.pointerId===Qe.id&&(b.camYaw-=(I.clientX-Qe.x)*(n?.0042:.0062),b.camPitch=Math.max(-.25,Math.min(1.2,b.camPitch+(I.clientY-Qe.y)*(n?.003:.0045))),Qe.x=I.clientX,Qe.y=I.clientY)},Q=I=>{I.pointerId===dt.id&&(dt.id=null,_e.mx=_e.mz=0,zt.style.display="none"),Qe&&I.pointerId===Qe.id&&(n&&I.type==="pointerup"&&performance.now()-Qe.t<300&&Math.hypot(I.clientX-Qe.x0,I.clientY-Qe.y0)<6&&(Qe.b===0?W.attack():Qe.b===2&&W.dodge()),Qe=null),I.pointerId===Be&&(Be=null,W.held=!1),I.pointerId===_e.up&&(_e.up=null),I.pointerId===_e.dn&&(_e.dn=null)},Be=null;r.addEventListener("pointerdown",I=>{let H=I.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!H||b.paused)return;I.preventDefault(),H._pd=performance.now();let K=H.dataset.w;if(b.fly&&(K==="jump"||K==="mount")){_e[K==="jump"?"up":"dn"]=I.pointerId;return}K==="jump"?_e.jump=!0:K==="run"?(b.run=!b.run,H.classList.toggle("on",b.run)):K==="mount"?ie(!b.mount):Dt()}),r.addEventListener("pointerdown",I=>{let H=I.target.closest("[data-c]");if(!H||b.paused)return;I.preventDefault();let K=H.dataset.c;K==="draw"?W.toggleArm():K==="dodge"?W.dodge():K==="0"?(W.attack(),W.held=!0,Be=I.pointerId):W.skill(+K)}),r.addEventListener("pointerdown",pt),r.addEventListener("pointermove",De),r.addEventListener("pointerup",Q),r.addEventListener("pointercancel",Q);let He=I=>{b.camDist=Math.max(2.6,Math.min(22,b.camDist*(I.deltaY>0?1.1:.9))),I.preventDefault()};r.addEventListener("wheel",He,{passive:!1}),r.addEventListener("contextmenu",I=>I.preventDefault()),r.addEventListener("click",I=>{let H=I.target.closest("[data-w]");if(!H)return;let K=H.dataset.w;if(H._pd&&performance.now()-H._pd<800){H._pd=0;return}if(!(b.fly&&(K==="jump"||K==="mount"))){if(K==="act")Dt();else if(K==="mount")ie(!b.mount);else if(K==="run")b.run=!b.run,H.classList.toggle("on",b.run);else if(K==="jump")_e.jump=!0;else if(K==="dnext")Ni();else if(K==="dclose")bn();else if(K==="menu")ot(!0);else if(K==="resume")ot(!1);else if(K==="home")Re(-6,34),ot(!1);else if(K==="arena")ie(!1),Re(st.x+40,st.z),b.yaw=-Math.PI/2,b.camYaw=Math.PI/2,ot(!1);else if(K==="mv"||K==="stn")N.setStyle(K==="mv"?{move:at(we,N.move)}:{stance:at(Xe,N.stance)}),Ve(),t.onStyle&&t.onStyle({move:N.move,stance:N.stance});else if(K==="fs")Ut(),a(".ew-rot").classList.remove("on"),ot(!1);else if(K==="quit")$t();else if(K==="mode"){let Ee=[b.x,b.z];Ge.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",b.inside?null:Ee)}}});function ot(I){b.paused=I,a(".ew-mm").classList.toggle("on",I),I||a(".ew-wsel").classList.remove("on")}let et={n:1,loop:!1};function wt(){let I=W.arena.best+1;et.n=Math.max(1,Math.min(I,et.n));let H=et.n,K=t.wavePreview?t.wavePreview(H):null;a(".ew-ws-n").textContent=H,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+I+(W.arena.best?" \xB7 record "+W.arena.best:""),a(".ew-ws-rw").innerHTML=(H%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":H%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(K?"R\xE9compense : <b>+"+K.x+" XP</b> \xB7 <b>+"+K.k+" kinahs</b>"+(K.first===!1?" \xB7 d\xE9j\xE0 gagn\xE9e aujourd\u2019hui (10 %)":" \xB7 plein tarif une fois par jour, puis 10 %"):""),a('[data-ws="loop"]').classList.toggle("on",et.loop),a('[data-ws="loop"]').textContent=(et.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let Ee=5*Math.floor(I/5),Ce=a('[data-ws="boss"]');Ce.style.display=Ee>=5?"":"none",Ce.textContent="Dernier champion ouvert : vague "+Ee}function Rt(){et.n=W.arenaStart(),b.paused=!0,wt(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",I=>{let H=I.target.closest("[data-ws]");if(!H)return;let K=H.dataset.ws;if(K==="x"||K==="go"){a(".ew-wsel").classList.remove("on"),b.paused=!1,K==="go"&&W.startArena(et.n,et.loop);return}K==="loop"?et.loop=!et.loop:K==="boss"?et.n=5*Math.floor((W.arena.best+1)/5):et.n+=+K,wt()});let Gt=!1,Vt=()=>{try{let I=screen.orientation;return I&&I.lock?I.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function Ut(){let I=document.documentElement,H=I.requestFullscreen||I.webkitRequestFullscreen;if(!H)return Vt();let K=null;try{K=H.call(I,{navigationUI:"hide"}),Gt=!0}catch{K=null}return(K&&K.then?K:Promise.resolve()).then(Vt,Vt)}n||Vt().then(I=>{if(!I&&r.clientHeight>r.clientWidth&&!ne){let H=a(".ew-rot");H.classList.add("on"),setTimeout(()=>H.classList.remove("on"),9e3)}});function $t(){let I=b.inside?null:[Math.round(b.x),Math.round(b.z)];Ge.dispose(),t.onExit&&t.onExit(I)}function Dt(){!ct||b.talking||(ct.kind==="npc"?Kn(ct.npc):ct.kind==="house"?wn(ct.id):ct.kind==="exit"?Wt():ct.kind==="arena"?Rt():ct.kind==="rift"&&t.onRift&&(Ge.dispose(),t.onRift([Math.round(b.x),Math.round(b.z)])))}let Jn=0;function bt(I){let H=I.lines&&I.lines.length?I.lines:["\u2026"],K=H[I.li%H.length],Ee=a(".ew-dlg p");Ee.textContent="",clearInterval(Jn);let Ce=0;Jn=setInterval(()=>{Ce+=2,Ee.textContent=K.slice(0,Ce),Ce>=K.length&&clearInterval(Jn)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(I.name,Object.assign(document.createElement("small"),{textContent:I.role||""})),a(".ew-bond").textContent=I.bond?"Lien "+"\u2665".repeat(Math.min(10,I.bond)):"",a('[data-w="dnext"]').style.display=H.length>1?"":"none"}function Kn(I){b.talking=I,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),bt(I);let H=Math.atan2(b.x-I.x,b.z-I.z);I.av.group.rotation.y=H,b.yaw=H+Math.PI,t.onTalk&&t.onTalk(I.id)}function Ni(){let I=b.talking;if(!I)return;let H=a(".ew-dlg p"),K=I.lines||[],Ee=K[I.li%Math.max(1,K.length)]||"";if(H.textContent.length<Ee.length){clearInterval(Jn),H.textContent=Ee;return}if(I.li++,I.li%Math.max(1,K.length)===0){bn();return}bt(I)}function bn(){clearInterval(Jn),b.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let Nn=null;function wn(I){let H=S[I];H&&(ie(!1),Nn=[b.x,b.z,b.yaw],b.inside=I,b.x=H.ox+H.door[0],b.z=H.door[1]-.6,b.y=H.oy,b.yaw=Math.PI,b.camYaw=0,b.camDist=Math.min(b.camDist,6),y.visible=!0,L.visible=!1,h.fog.near=60,h.fog.far=200,G.position.set(H.ox,H.oy+1.6,-H.D/2+2.2),G.intensity=90,Z.position.set(H.ox,H.oy+H.h-.6,1.5),Z.intensity=H.hs.r>=6?160:H.hs.r===5?50:70,Z.color.set(H.hs.r>=6?16774084:H.hs.r===5?10976255:16773341),x.intensity=0,d.intensity=.35,te(H.hs.name,H.hs.cap>=99?"Places illimit\xE9es":H.hs.cap+" places"))}function Wt(I){b.inside&&(b.inside=null,y.visible=!1,L.visible=!0,h.fog.near=s.fog[0],h.fog.far=s.fog[1],G.intensity=Z.intensity=0,x.intensity=2.9,d.intensity=.7,Nn&&!I&&(b.x=Nn[0],b.z=Nn[1],b.yaw=Nn[2]+Math.PI),b.y=Zt(b.x,b.z))}let Sn=new X,Jt=new X,O=performance.now(),ne=!1,re=0,oe=!0;function ae(I){if(ne)return;requestAnimationFrame(ae);let H=Math.min(.05,(I-O)/1e3);if(O=I,b.paused)return;b.t+=H;let K=_e.mx,Ee=_e.mz;(xe.KeyW||xe.ArrowUp)&&(Ee-=1),(xe.KeyS||xe.ArrowDown)&&(Ee+=1),(xe.KeyA||xe.ArrowLeft)&&(K-=1),(xe.KeyD||xe.ArrowRight)&&(K+=1);let Ce=Math.min(1,Math.hypot(K,Ee)),C=Ce<.05?W.autoMove:null;C&&(Ce=C.mag),Ce*=b.talking?0:W.moveK();let q=!!b.fly,se=b.run||xe.ShiftLeft||xe.ShiftRight,j=N.move,Me=j==="levitation"&&!b.mount,pe=j==="levitation"?[11,16]:j==="ninja"?[10.5,15.5]:[9.5,14],de=(q?se?30:20:b.mount?9.5*Oi[b.mountId].speed:se?pe[1]:pe[0])*(b.inside?.45:1),qe=Ce*de;if(b.speed+=(qe-b.speed)*Math.min(1,H*(q?4:b.mount?3:Me?9:14)),b.inDir=C?C.yaw:Ce>.05?Math.atan2(K,Ee)+b.camYaw:null,Ce>.05&&b.dashT<=0){let U=b.inDir-b.yaw;for(;U>Math.PI;)U-=6.2832;for(;U<-Math.PI;)U+=6.2832;b.yaw+=U*Math.min(1,H*(q?7:b.mount?5:Me?13:18))}b.dashT>0&&(b.dashT-=H,b.speed=b.dashV);let nt=Math.sin(b.yaw)*b.speed*H,xt=Math.cos(b.yaw)*b.speed*H,Ct=b.x+nt,Et=b.z+xt;if(b.inside){let w=S[b.inside];Ct=Math.max(w.ox-w.W/2+.8,Math.min(w.ox+w.W/2-.8,Ct)),Et=Math.max(-w.D/2+1.9,Math.min(w.D/2-.7,Et))}else{Ct=Math.max(-438,Math.min(438,Ct)),Et=Math.max(-438,Math.min(438,Et));let w=b.mount?1.1:.55,U=q&&b.y-Math.max(0,Zt(b.x,b.z))>14;if(P.B.boxes.forEach((V,B)=>{if(Ct>V[0]-w&&Ct<V[1]+w&&Et>V[2]-w&&Et<V[3]+w){if(b.y>ut(B)-.5)return;q?b.bump=.25:!b.mount&&!b.inside&&Ce>.3&&!b.talking&&!b.down&&(b.climbT=.18,b.climbTop=ut(B));let F=Ct-(V[0]-w),ue=V[1]+w-Ct,fe=Et-(V[2]-w),le=V[3]+w-Et,ge=Math.min(F,ue,fe,le);ge===F?Ct=V[0]-w:ge===ue?Ct=V[1]+w:ge===fe?Et=V[2]-w:Et=V[3]+w}}),!U){let V=Ct-st.x,B=Et-st.z,F=Math.hypot(V,B);if(F>st.r-.5&&F<st.wall+.6&&Math.abs(Math.atan2(B,V))>st.gate){let ue=(F<(st.r+st.wall)/2?st.r-.5:st.wall+.6)/F;Ct=st.x+V*ue,Et=st.z+B*ue}}if(!q){for(let V of Se)if(!V.inside){let B=Math.hypot(Ct-V.x,Et-V.z);B<.8&&B>.001&&(Ct=V.x+(Ct-V.x)/B*.8,Et=V.z+(Et-V.z)/B*.8)}}}b.x=Ct,b.z=Et,!b.inside&&(gt-=H)<=0&&(gt=b.fly||b.climbT>0||b.y>Zt(b.x,b.z)+1?.08:.25,ye=it(b.x,b.z));let In=b.inside?S[b.inside].oy:Math.max(Zt(b.x,b.z),Math.abs(b.x-Ts(b.z))<30&&Math.abs(b.z+56)<3.3&&Math.abs(b.x-Ts(-56))<20?4:-99,Math.abs(b.z-24)<2.3&&b.x>186&&b.x<208?1.22:-99,Math.hypot(b.x-318,b.z-300)<96?1.32:-99,Me?.4:-99),kt=!b.inside&&!b.fly&&ye>In+.3&&b.y>=ye-.9?ye:In;if(_e.jump&&b.climbT>0&&(b.climbT=0,b.vy=8,b.yaw+=Math.PI),_e.jump&&(b.onGround||b.jumps<2)&&!b.mount&&!b.talking&&!b.down){let w=!b.onGround;b.vy=w?8.2:8.6,b.jumps=w?2:1,b.onGround=!1,w&&N.play("flip",.62)}if(_e.jump=!1,q){let w=_e.up!=null||xe.Space,U=_e.dn!=null||xe.KeyC||xe.ControlLeft||xe.ControlRight,V=ye>kt+.4?ye:-99,B=Math.max(kt,V,-.4)+.5,F=se?38:22;b.bump>0&&(b.bump-=H);let ue=((w?1:0)-(U?1:0))*F+(b.bump>0&&!U?F*.8:0);b.vy+=(ue-b.vy)*Math.min(1,H*4),b.y=Math.min(1500,b.y+b.vy*H),b.onGround=!1,b.jumps=2,b.y<=B&&(U&&V<-90?(b.y=Math.max(kt,b.y),$e(!1)):(b.y=B,b.vy<0&&(b.vy=0))),(b.inside||b.down)&&$e(!1)}else b.climbT>0?(b.climbT-=H,b.climbing=!0,b.vy=se?9:6.5,b.y+=b.vy*H,b.onGround=!1,b.jumps=1,b.y>b.climbTop-.5&&(b.vy=4,b.climbT=0)):(b.climbing&&(b.climbing=!1),b.vy-=24*H,b.y+=b.vy*H,b.y<=kt?(b.y=kt,b.vy=0,b.onGround=!0,b.jumps=0):b.y-kt>.35&&(b.onGround=!1));{let w=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(b.speed-10.5)/5))*7;Math.abs(u.fov-w)>.05&&(u.fov+=(w-u.fov)*Math.min(1,H*5),u.updateProjectionMatrix())}let ln=!b.inside&&!Me&&!q&&b.y<-.75?-.75-b.y:0,Pt=N.group;if(b.mount){let w=b.mount;w.group.position.set(b.x,b.y+ln,b.z),w.group.rotation.y=b.yaw,w.update(H,b.speed/8),Pt.position.set(b.x-Math.sin(b.yaw)*-w.seat.z,b.y+ln+w.seat.y-N.seatDrop,b.z-Math.cos(b.yaw)*-w.seat.z),Pt.rotation.y=b.yaw,N.update(H,{riding:!0,wide:w.wide})}else Pt.position.set(b.x,b.y+ln,b.z),Pt.rotation.y=b.yaw,b.pitch+=((q?Math.min(1,b.speed/20)*1-b.vy*.03:0)-b.pitch)*Math.min(1,H*5),Pt.rotation.x=b.pitch,N.update(H,{speed:b.climbT>0?1.2:b.speed/4.6,down:b.down,fly:q,climb:b.climbT>0});if(W.update(H),(W.lock||W.auto)&&W.lockE&&W.lockE.state!=="dead"&&!b.inside&&!b.talking&&!Qe){let w=W.lockE,U=Math.atan2(w.x-b.x,w.z-b.z)+Math.PI-b.camYaw;for(;U>Math.PI;)U-=6.2832;for(;U<-Math.PI;)U+=6.2832;W.lock&&(b.camYaw+=U*Math.min(1,H*5))}if(!b.inside){let w=Math.max(0,b.y-25);h.fog.near=s.fog[0]+w*1.5,h.fog.far=Math.min(2300,s.fog[1]+w*3.5)}let Xt=!!W.pl.mecha,Ln=Xt?2.5:(b.mount?b.mount.seat.y:0)+N.height*.82,Ii=b.camDist*(b.mount?1.45:Xt?1.7:1)*(b.talking?.62:1),Ye=Math.cos(b.camPitch);Sn.set(b.x,b.y+ln+Ln,b.z);for(let w of[1,.72,.5,.32,.18])if(Jt.set(Sn.x+Math.sin(b.camYaw)*Ye*Ii*w,Sn.y+Math.sin(b.camPitch)*Ii*w,Sn.z+Math.cos(b.camYaw)*Ye*Ii*w),b.inside||Jt.y-b.y>16||!P.B.boxes.some(U=>Jt.x>U[0]-.4&&Jt.x<U[1]+.4&&Jt.z>U[2]-.4&&Jt.z<U[3]+.4))break;if(b.inside){let w=S[b.inside];Jt.x=Math.max(w.ox-w.W/2+.5,Math.min(w.ox+w.W/2-.5,Jt.x)),Jt.z=Math.max(-w.D/2+.6,Math.min(w.D/2+9,Jt.z)),Jt.y=Math.max(w.oy+.6,Math.min(w.oy+w.h+4,Jt.y))}else{let w=Math.max(Zt(Jt.x,Jt.z),.35)+.7;Jt.y<w&&(Jt.y=w)}oe?(u.position.copy(Jt),oe=!1):u.position.lerp(Jt,Math.min(1,H*12)),u.lookAt(Sn),W.shake>.01&&(u.position.x+=(Math.random()-.5)*W.shake*.5,u.position.y+=(Math.random()-.5)*W.shake*.4),v.position.copy(u.position),g.position.x=b.t*2.2%300,v.visible=g.visible=!b.inside,m.visible=M.visible=!b.inside,x.position.set(b.x+p.x*120,b.y+p.y*120+20,b.z+p.z*120),x.target.position.set(b.x,b.y,b.z),k.rotation.y+=H*.25,k.userData.m3.rotation.z-=H*1.4,k.userData.m2.material.opacity=.45+Math.sin(b.t*2.6)*.14;let yt=null,l=1e9;for(let w of Se){let U=w.inside===b.inside;if(w.av.group.visible=U,!U)continue;let V=Math.hypot(b.x-w.x,b.z-w.z);w.lb.visible=V<26&&V>2.6,V<40&&w.av.update(H,{});for(let B of w.av.inks)B.visible=V<32;if(V<9&&!b.talking){let B=Math.atan2(b.x-w.x,b.z-w.z)-w.av.group.rotation.y;for(;B>Math.PI;)B-=6.2832;for(;B<-Math.PI;)B+=6.2832;w.av.group.rotation.y+=B*Math.min(1,H*3)}V<3.2&&V<l&&(l=V,yt={kind:"npc",npc:w,text:"Parler \xE0 "+w.name.split(" ")[0]})}if(b.inside){let w=S[b.inside];Math.hypot(b.x-w.ox-w.door[0],b.z-w.door[1])<2.2&&!yt&&(yt={kind:"exit",text:"Sortir"})}else{for(let w of P.houses){let U=Math.hypot(b.x-w.x,b.z-w.z);U<4.5&&U<l&&(l=U,yt={kind:"house",id:w.id,text:"Entrer : "+w.name})}t.onRift&&Math.hypot(b.x+70,b.z-100)<6&&!yt&&(yt={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!yt&&!W.arena.on&&!b.down&&Math.hypot(b.x-st.x,b.z-st.z)<3.4&&(yt={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+W.arenaStart()})}ct=yt;let T=a(".ew-prompt");if(yt&&!b.talking){T.classList.add("on");let w=T.firstChild,U=(n?"[E]  ":"")+yt.text;w.textContent!==U&&(w.textContent=U)}else T.classList.remove("on");if(!b.inside){let w="",U="";for(let V of Yd)if(Math.hypot(b.x-V[0],b.z-V[1])<V[2]){w=V[3],U=V[4];break}w&&w!==b.zone&&te(w,U),b.zone=w}(re+=H)>.12&&(re=0,z()),me?me.render():c.render(h,u)}let Ge={_boxes:P.B.boxes,_inp:_e,combat:W,player:N,dispose(){if(!ne){ne=!0,W.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),Gt&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(Jn),clearTimeout(R),window.removeEventListener("keydown",lt),window.removeEventListener("keyup",je),window.removeEventListener("resize",Ae),Ai(h),me&&me.dispose&&me.dispose(),c.dispose(),c.forceContextLoss&&c.forceContextLoss(),r.remove()}},state:b,teleport:(I,H)=>Re(I,H),enter:wn,mountOn:()=>ie(!0),look(I,H,K){b.camYaw=I,b.camPitch=H,K&&(b.camDist=K)}};return requestAnimationFrame(I=>{O=I,ae(I),setTimeout(()=>{let H=a(".ew-load");H.style.opacity=0,setTimeout(()=>H.remove(),900),te("Vesp\xE9rane","Ciel couleur de rouille")},350)}),Ge}window.Elyos3D={avatarView:Ld,startWorld:$d,groundHeight:Zt,DEFAULT_LOOK:nh,HAIR_STYLES:Cd,STANCES:tl,MOVES:nl,MOUNT_SPEED:Object.fromEntries(Object.entries(Oi).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
