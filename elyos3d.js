(()=>{var Sd=0,kc=1,Ed=2;var yu=1,Jr=2,bi=3,qi=0,ln=1,nn=2;var di=0,Vi=1,Cn=2,Fc=3,Bc=4,Td=5,us=100,Ad=101,Rd=102,Hc=103,Gc=104,Cd=200,Pd=201,Id=202,Ld=203,Al=204,Rl=205,Dd=206,Ud=207,zd=208,Od=209,Nd=210,kd=211,Fd=212,Bd=213,Hd=214,Gd=0,Vd=1,Wd=2,Ha=3,Xd=4,qd=5,Yd=6,Zd=7,_c=0,Jd=1,Kd=2,fi=0,vc=1,Mc=2,bc=3,Kr=4,$d=5,wc=6;var _u=300,js=301,Qs=302,Cl=303,Pl=304,So=306,zr=1e3,si=1001,Il=1002,pn=1003,Vc=1004;var Wo=1005;var Jn=1006,jd=1007;var Or=1008;var Wi=1009,Qd=1010,ef=1011,Sc=1012,vu=1013,Hi=1014,Gi=1015,ri=1016,Mu=1017,bu=1018,ps=1020,tf=1021,Gn=1023,nf=1024,sf=1025,ms=1026,er=1027,rf=1028,wu=1029,af=1030,Su=1031,Eu=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,Tu=36196,Zc=37492,Jc=37496,Kc=37808,$c=37809,jc=37810,Qc=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,ah=37818,oh=37819,lh=37820,ch=37821,Jo=36492,hh=36494,uh=36495,of=36283,dh=36284,fh=36285,ph=36286;var Ga=2300,Va=2301,Ko=2302,mh=2400,gh=2401,xh=2402;var Au=3e3,gs=3001,lf=3200,cf=3201,Eo=0,hf=1,Kn="",Kt="srgb",Ai="srgb-linear",Ec="display-p3",To="display-p3-linear",Wa="linear",Wt="srgb",Xa="rec709",qa="p3";var Ts=7680;var yh=519,uf=512,df=513,ff=514,Ru=515,pf=516,mf=517,gf=518,xf=519,Ll=35044;var _h="300 es",Dl=1035,Ei=2e3,Ya=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $o=Math.PI/180,Za=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Rn(i,e,t){return Math.max(e,Math.min(t,i))}function yf(i,e){return(i%e+e)%e}function jo(i,e,t){return(1-t)*i+t*e}function vh(i){return(i&i-1)===0&&i!==0}function Ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(e,t,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],p=n[2],f=n[5],x=n[8],_=s[0],g=s[3],m=s[6],M=s[1],v=s[4],S=s[7],D=s[2],I=s[5],C=s[8];return r[0]=a*_+o*M+c*D,r[3]=a*g+o*v+c*I,r[6]=a*m+o*S+c*C,r[1]=h*_+u*M+d*D,r[4]=h*g+u*v+d*I,r[7]=h*m+u*S+d*C,r[2]=p*_+f*M+x*D,r[5]=p*g+f*v+x*I,r[8]=p*m+f*S+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=u*a-o*h,p=o*c-u*r,f=h*r-a*c,x=t*d+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=d*_,e[1]=(s*h-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new Pt;function Cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _f(){let i=Ja("canvas");return i.style.display="block",i}var Mh={};function Ir(i){i in Mh||(Mh[i]=!0,console.warn(i))}var bh=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[Ai]:{transfer:Wa,primaries:Xa,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:Wt,primaries:Xa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[To]:{transfer:Wa,primaries:qa,toReference:i=>i.applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh)},[Ec]:{transfer:Wt,primaries:qa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wh),fromReference:i=>i.applyMatrix3(bh).convertLinearToSRGB()}},vf=new Set([Ai,To]),Nt={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ca[e].toReference,s=ca[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ca[i].primaries},getTransfer:function(i){return i===Kn?Wa:ca[i].transfer}};function Ks(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function el(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Ka=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Ja("canvas")),As.width=e.width,As.height=e.height;let n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ja("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ks(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ks(t[n]/255)*255):t[n]=Ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mf=0,$a=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bf=0,Vn=class i extends Yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Jn,a=Or,o=Gn,c=Wi,h=i.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Ti(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===gs?Kt:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?gs:Au}set encoding(e){Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?Kt:Kn}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=_u;Vn.DEFAULT_ANISOTROPY=1;var $t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],u=c[4],d=c[8],p=c[1],f=c[5],x=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(x+g)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,S=(f+1)/2,D=(m+1)/2,I=(u+p)/4,C=(d+_)/4,F=(x+g)/4;return v>S&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=I/n,r=C/n):S>D?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=F/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=F/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-x)*(g-x)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(d-_)/M,this.z=(p-u)/M,this.w=Math.acos((h+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gs?Kt:Kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ja=class extends Vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ol=class extends Vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=_;return}if(d!==_||c!==p||h!==f||u!==x){let g=1-o,m=c*p+h*f+u*x+d*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let D=Math.sqrt(v),I=Math.atan2(D,m*M);g=Math.sin(g*I)/D,o=Math.sin(o*I)/D}let S=o*M;if(c=c*g+p*S,h=h*g+f*S,u=u*g+x*S,d=d*g+_*S,g===1-o){let D=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=D,h*=D,u*=D,d*=D}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*d+c*f-h*p,e[t+1]=c*x+u*p+h*d-o*f,e[t+2]=h*x+u*f+o*p-c*d,e[t+3]=u*x-o*d-c*p-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),d=o(r/2),p=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*u*d+h*f*x,this._y=h*f*d-p*u*x,this._z=h*u*x+p*f*d,this._w=h*u*d-p*f*x;break;case"YXZ":this._x=p*u*d+h*f*x,this._y=h*f*d-p*u*x,this._z=h*u*x-p*f*d,this._w=h*u*d+p*f*x;break;case"ZXY":this._x=p*u*d-h*f*x,this._y=h*f*d+p*u*x,this._z=h*u*x+p*f*d,this._w=h*u*d-p*f*x;break;case"ZYX":this._x=p*u*d-h*f*x,this._y=h*f*d+p*u*x,this._z=h*u*x-p*f*d,this._w=h*u*d+p*f*x;break;case"YZX":this._x=p*u*d+h*f*x,this._y=h*f*d+p*u*x,this._z=h*u*x-p*f*d,this._w=h*u*d-p*f*x;break;case"XZY":this._x=p*u*d-h*f*x,this._y=h*f*d-p*u*x,this._z=h*u*x+p*f*d,this._w=h*u*d+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=s+c*d+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new G,Sh=new Wn,Ri=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),ua.subVectors(this.max,Mr),Rs.subVectors(e.a,Mr),Cs.subVectors(e.b,Mr),Ps.subVectors(e.c,Mr),Oi.subVectors(Cs,Rs),Ni.subVectors(Ps,Cs),as.subVectors(Rs,Ps);let t=[0,-Oi.z,Oi.y,0,-Ni.z,Ni.y,0,-as.z,as.y,Oi.z,0,-Oi.x,Ni.z,0,-Ni.x,as.z,0,-as.x,-Oi.y,Oi.x,0,-Ni.y,Ni.x,0,-as.y,as.x,0];return!il(t,Rs,Cs,Ps,ua)||(t=[1,0,0,0,1,0,0,0,1],!il(t,Rs,Cs,Ps,ua))?!1:(da.crossVectors(Oi,Ni),t=[da.x,da.y,da.z],il(t,Rs,Cs,Ps,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new G,new G,new G,new G,new G,new G,new G,new G],ti=new G,ha=new Ri,Rs=new G,Cs=new G,Ps=new G,Oi=new G,Ni=new G,as=new G,Mr=new G,ua=new G,da=new G,os=new G;function il(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),h=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var wf=new Ri,br=new G,sl=new G,Zi=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(sl)),this.expandByPoint(br.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new G,rl=new G,fa=new G,ki=new G,al=new G,pa=new G,ol=new G,Qa=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rl.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(rl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fa),o=ki.dot(this.direction),c=-ki.dot(fa),h=ki.lengthSq(),u=Math.abs(1-a*a),d,p,f,x;if(u>0)if(d=a*c-o,p=a*o-c,x=r*u,d>=0)if(p>=-x)if(p<=x){let _=1/u;d*=_,p*=_,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+h}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+h;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+h;else p<=-x?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+h):p<=x?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+h):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+h);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rl).addScaledVector(fa,p),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){al.subVectors(t,e),pa.subVectors(n,e),ol.crossVectors(al,pa);let a=this.direction.dot(ol),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);let c=o*this.direction.dot(pa.crossVectors(ki,pa));if(c<0)return null;let h=o*this.direction.dot(al.cross(ki));if(h<0||c+h>a)return null;let u=-o*ki.dot(ol);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class i{constructor(e,t,n,s,r,a,o,c,h,u,d,p,f,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,d,p,f,x,_,g)}set(e,t,n,s,r,a,o,c,h,u,d,p,f,x,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=x,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*d,x=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=h,t[1]=f+x*h,t[5]=p-_*h,t[9]=-o*c,t[2]=_-p*h,t[6]=x+f*h,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,f=c*d,x=h*u,_=h*d;t[0]=p+_*o,t[4]=x*o-f,t[8]=a*h,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,f=c*d,x=h*u,_=h*d;t[0]=p-_*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,f=a*d,x=o*u,_=o*d;t[0]=c*u,t[4]=x*h-f,t[8]=p*h+_,t[1]=c*d,t[5]=_*h+p,t[9]=f*h-x,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,f=a*h,x=o*c,_=o*h;t[0]=c*u,t[4]=_-p*d,t[8]=x*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=f*d+x,t[10]=p-_*d}else if(e.order==="XZY"){let p=a*c,f=a*h,x=o*c,_=o*h;t[0]=c*u,t[4]=-d,t[8]=h*u,t[1]=p*d+_,t[5]=a*u,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sf,e,Ef)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Fi.crossVectors(n,Bn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Fi.crossVectors(n,Bn)),Fi.normalize(),ma.crossVectors(Bn,Fi),s[0]=Fi.x,s[4]=ma.x,s[8]=Bn.x,s[1]=Fi.y,s[5]=ma.y,s[9]=Bn.y,s[2]=Fi.z,s[6]=ma.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],p=n[9],f=n[13],x=n[2],_=n[6],g=n[10],m=n[14],M=n[3],v=n[7],S=n[11],D=n[15],I=s[0],C=s[4],F=s[8],E=s[12],y=s[1],N=s[5],O=s[9],Q=s[13],U=s[2],b=s[6],W=s[10],j=s[14],z=s[3],ee=s[7],be=s[11],fe=s[15];return r[0]=a*I+o*y+c*U+h*z,r[4]=a*C+o*N+c*b+h*ee,r[8]=a*F+o*O+c*W+h*be,r[12]=a*E+o*Q+c*j+h*fe,r[1]=u*I+d*y+p*U+f*z,r[5]=u*C+d*N+p*b+f*ee,r[9]=u*F+d*O+p*W+f*be,r[13]=u*E+d*Q+p*j+f*fe,r[2]=x*I+_*y+g*U+m*z,r[6]=x*C+_*N+g*b+m*ee,r[10]=x*F+_*O+g*W+m*be,r[14]=x*E+_*Q+g*j+m*fe,r[3]=M*I+v*y+S*U+D*z,r[7]=M*C+v*N+S*b+D*ee,r[11]=M*F+v*O+S*W+D*be,r[15]=M*E+v*Q+S*j+D*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],d=e[6],p=e[10],f=e[14],x=e[3],_=e[7],g=e[11],m=e[15];return x*(+r*c*d-s*h*d-r*o*p+n*h*p+s*o*f-n*c*f)+_*(+t*c*f-t*h*p+r*a*p-s*a*f+s*h*u-r*c*u)+g*(+t*h*d-t*o*f-r*a*d+n*a*f+r*o*u-n*h*u)+m*(-s*o*u-t*c*d+t*o*p+s*a*d-n*a*p+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=e[9],p=e[10],f=e[11],x=e[12],_=e[13],g=e[14],m=e[15],M=d*g*h-_*p*h+_*c*f-o*g*f-d*c*m+o*p*m,v=x*p*h-u*g*h-x*c*f+a*g*f+u*c*m-a*p*m,S=u*_*h-x*d*h+x*o*f-a*_*f-u*o*m+a*d*m,D=x*d*c-u*_*c-x*o*p+a*_*p+u*o*g-a*d*g,I=t*M+n*v+s*S+r*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return e[0]=M*C,e[1]=(_*p*r-d*g*r-_*s*f+n*g*f+d*s*m-n*p*m)*C,e[2]=(o*g*r-_*c*r+_*s*h-n*g*h-o*s*m+n*c*m)*C,e[3]=(d*c*r-o*p*r-d*s*h+n*p*h+o*s*f-n*c*f)*C,e[4]=v*C,e[5]=(u*g*r-x*p*r+x*s*f-t*g*f-u*s*m+t*p*m)*C,e[6]=(x*c*r-a*g*r-x*s*h+t*g*h+a*s*m-t*c*m)*C,e[7]=(a*p*r-u*c*r+u*s*h-t*p*h-a*s*f+t*c*f)*C,e[8]=S*C,e[9]=(x*d*r-u*_*r-x*n*f+t*_*f+u*n*m-t*d*m)*C,e[10]=(a*_*r-x*o*r+x*n*h-t*_*h-a*n*m+t*o*m)*C,e[11]=(u*o*r-a*d*r-u*n*h+t*d*h+a*n*f-t*o*f)*C,e[12]=D*C,e[13]=(u*_*s-x*d*s+x*n*p-t*_*p-u*n*g+t*d*g)*C,e[14]=(x*o*s-a*_*s-x*n*c+t*_*c+a*n*g-t*o*g)*C,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*p+t*o*p)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,d=o+o,p=r*h,f=r*u,x=r*d,_=a*u,g=a*d,m=o*d,M=c*h,v=c*u,S=c*d,D=n.x,I=n.y,C=n.z;return s[0]=(1-(_+m))*D,s[1]=(f+S)*D,s[2]=(x-v)*D,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(p+m))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(x+v)*C,s[9]=(g-M)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Is.set(s[0],s[1],s[2]).length(),a=Is.set(s[4],s[5],s[6]).length(),o=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let h=1/r,u=1/a,d=1/o;return ni.elements[0]*=h,ni.elements[1]*=h,ni.elements[2]*=h,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ei){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(o===Ei)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ya)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ei){let c=this.elements,h=1/(t-e),u=1/(n-s),d=1/(a-r),p=(t+e)*h,f=(n+s)*u,x,_;if(o===Ei)x=(a+r)*d,_=-2*d;else if(o===Ya)x=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new G,ni=new zt,Sf=new G(0,0,0),Ef=new G(1,1,1),Fi=new G,ma=new G,Bn=new G,Eh=new zt,Th=new Wn,Ji=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tf=0,Ah=new G,Ls=new Wn,_i=new zt,ga=new G,wr=new G,Af=new G,Rf=new Wn,Rh=new G(1,0,0),Ch=new G(0,1,0),Ph=new G(0,0,1),Cf={type:"added"},Pf={type:"removed"},sn=class i extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new Ji,n=new Wn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new Pt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(wr,ga,this.up):_i.lookAt(ga,wr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(_i),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};sn.DEFAULT_UP=new G(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new G,vi=new G,ll=new G,Mi=new G,Ds=new G,Us=new G,Ih=new G,cl=new G,hl=new G,ul=new G,xa=!1,fs=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),vi.subVectors(n,t),ll.subVectors(e,t);let a=ii.dot(ii),o=ii.dot(vi),c=ii.dot(ll),h=vi.dot(vi),u=vi.dot(ll),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(h*c-o*u)*p,x=(a*u-o*c)*p;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,s,r,a,o,c){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),vi.subVectors(e,t),ii.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),ii.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,n),Us.subVectors(r,n),cl.subVectors(e,n);let c=Ds.dot(cl),h=Us.dot(cl);if(c<=0&&h<=0)return t.copy(n);hl.subVectors(e,s);let u=Ds.dot(hl),d=Us.dot(hl);if(u>=0&&d<=u)return t.copy(s);let p=c*d-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ds,a);ul.subVectors(e,r);let f=Ds.dot(ul),x=Us.dot(ul);if(x>=0&&f<=x)return t.copy(r);let _=f*h-c*x;if(_<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(n).addScaledVector(Us,o);let g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return Ih.subVectors(r,s),o=(d-u)/(d-u+(f-x)),t.copy(s).addScaledVector(Ih,o);let m=1/(g+_+p);return a=_*m,o=p*m,t.copy(n).addScaledVector(Ds,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Nt.workingColorSpace){if(e=yf(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dl(a,r,e+1/3),this.g=dl(a,r,e),this.b=dl(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Nt.fromWorkingColorSpace(An.copy(this),e),Math.round(Rn(An.r*255,0,255))*65536+Math.round(Rn(An.g*255,0,255))*256+Math.round(Rn(An.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Kt){Nt.fromWorkingColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(ya);let n=jo(Bi.h,ya.h,t),s=jo(Bi.s,ya.s,t),r=jo(Bi.l,ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new at;at.NAMES=Pu;var If=0,$n=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Vi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bt=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var on=new G,_a=new Ae,cn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}};var to=class extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var no=class extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Lf=0,Zn=new zt,fl=new sn,zs=new G,Hn=new Ri,Sr=new Ri,_n=new G,Ht=class i extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?no:to)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Hn.min,Sr.min),Hn.expandByPoint(_n),_n.addVectors(Hn.max,Sr.max),Hn.expandByPoint(_n)):(Hn.expandByPoint(Sr.min),Hn.expandByPoint(Sr.max))}Hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)_n.fromBufferAttribute(o,h),c&&(zs.fromBufferAttribute(e,h),_n.add(zs)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],u=[];for(let y=0;y<o;y++)h[y]=new G,u[y]=new G;let d=new G,p=new G,f=new G,x=new Ae,_=new Ae,g=new Ae,m=new G,M=new G;function v(y,N,O){d.fromArray(s,y*3),p.fromArray(s,N*3),f.fromArray(s,O*3),x.fromArray(a,y*2),_.fromArray(a,N*2),g.fromArray(a,O*2),p.sub(d),f.sub(d),_.sub(x),g.sub(x);let Q=1/(_.x*g.y-g.x*_.y);isFinite(Q)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(Q),M.copy(f).multiplyScalar(_.x).addScaledVector(p,-g.x).multiplyScalar(Q),h[y].add(m),h[N].add(m),h[O].add(m),u[y].add(M),u[N].add(M),u[O].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let y=0,N=S.length;y<N;++y){let O=S[y],Q=O.start,U=O.count;for(let b=Q,W=Q+U;b<W;b+=3)v(n[b+0],n[b+1],n[b+2])}let D=new G,I=new G,C=new G,F=new G;function E(y){C.fromArray(r,y*3),F.copy(C);let N=h[y];D.copy(N),D.sub(C.multiplyScalar(C.dot(N))).normalize(),I.crossVectors(F,N);let Q=I.dot(u[y])<0?-1:1;c[y*4]=D.x,c[y*4+1]=D.y,c[y*4+2]=D.z,c[y*4+3]=Q}for(let y=0,N=S.length;y<N;++y){let O=S[y],Q=O.start,U=O.count;for(let b=Q,W=Q+U;b<W;b+=3)E(n[b+0]),E(n[b+1]),E(n[b+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,h=new G,u=new G,d=new G;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,c){let h=o.array,u=o.itemSize,d=o.normalized,p=new h.constructor(c.length*u),f=0,x=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let m=0;m<u;m++)p[x++]=h[f++]}return new cn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){let p=h[u],f=e(p,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let d=0,p=h.length;d<p;d++){let f=h[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],d=r[h];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new zt,ls=new Qa,va=new Zi,Dh=new G,Os=new G,Ns=new G,ks=new G,pl=new G,Ma=new G,ba=new Ae,wa=new Ae,Sa=new Ae,Uh=new G,zh=new G,Oh=new G,Ea=new G,Ta=new G,Ne=class extends sn{constructor(e=new Ht,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],d=r[c];u!==0&&(pl.fromBufferAttribute(d,e),a?Ma.addScaledVector(pl,u):Ma.addScaledVector(pl.sub(t),u))}t.add(Ma)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(va.containsPoint(ls.origin)===!1&&(ls.intersectSphere(va,Dh)===null||ls.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){let g=p[x],m=a[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,D=v;S<D;S+=3){let I=o.getX(S),C=o.getX(S+1),F=o.getX(S+2);s=Aa(this,m,e,n,h,u,d,I,C,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=x,m=_;g<m;g+=3){let M=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);s=Aa(this,a,e,n,h,u,d,M,v,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){let g=p[x],m=a[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,D=v;S<D;S+=3){let I=S,C=S+1,F=S+2;s=Aa(this,m,e,n,h,u,d,I,C,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=x,m=_;g<m;g+=3){let M=g,v=g+1,S=g+2;s=Aa(this,a,e,n,h,u,d,M,v,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Df(i,e,t,n,s,r,a,o){let c;if(e.side===ln?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===qi,o),c===null)return null;Ta.copy(o),Ta.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Ta);return h<t.near||h>t.far?null:{distance:h,point:Ta.clone(),object:i}}function Aa(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,Os),i.getVertexPosition(c,Ns),i.getVertexPosition(h,ks);let u=Df(i,e,t,n,Os,Ns,ks,Ea);if(u){s&&(ba.fromBufferAttribute(s,o),wa.fromBufferAttribute(s,c),Sa.fromBufferAttribute(s,h),u.uv=fs.getInterpolation(Ea,Os,Ns,ks,ba,wa,Sa,new Ae)),r&&(ba.fromBufferAttribute(r,o),wa.fromBufferAttribute(r,c),Sa.fromBufferAttribute(r,h),u.uv1=fs.getInterpolation(Ea,Os,Ns,ks,ba,wa,Sa,new Ae),u.uv2=u.uv1),a&&(Uh.fromBufferAttribute(a,o),zh.fromBufferAttribute(a,c),Oh.fromBufferAttribute(a,h),u.normal=fs.getInterpolation(Ea,Os,Ns,ks,Uh,zh,Oh,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:h,normal:new G,materialIndex:0};fs.getNormal(Os,Ns,ks,d.normal),u.face=d}return u}var zn=class i extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],d=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function x(_,g,m,M,v,S,D,I,C,F,E){let y=S/C,N=D/F,O=S/2,Q=D/2,U=I/2,b=C+1,W=F+1,j=0,z=0,ee=new G;for(let be=0;be<W;be++){let fe=be*N-Q;for(let Le=0;Le<b;Le++){let oe=Le*y-O;ee[_]=oe*M,ee[g]=fe*v,ee[m]=U,h.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[m]=I>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Le/C),d.push(1-be/F),j+=1}}for(let be=0;be<F;be++)for(let fe=0;fe<C;fe++){let Le=p+fe+b*be,oe=p+fe+b*(be+1),ye=p+(fe+1)+b*(be+1),Te=p+(fe+1)+b*be;c.push(Le,oe,Te),c.push(oe,ye,Te),z+=6}o.addGroup(f,z,E),f+=z,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=tr(i[t]);for(let s in n)e[s]=n[s]}return e}function Uf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Iu(i){return i.getRenderTarget()===null?i.outputColorSpace:Nt.workingColorSpace}var ts={clone:tr,merge:Ln},zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},io=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends io{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Bs=1,Nl=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Fs,Bs,e,t);s.layers=this.layers,this.add(s);let r=new mn(Fs,Bs,e,t);r.layers=this.layers,this.add(r);let a=new mn(Fs,Bs,e,t);a.layers=this.layers,this.add(a);let o=new mn(Fs,Bs,e,t);o.layers=this.layers,this.add(o);let c=new mn(Fs,Bs,e,t);c.layers=this.layers,this.add(c);let h=new mn(Fs,Bs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},so=class extends Vn{constructor(e,t,n,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kl=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gs?Kt:Kn),this.texture=new so(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:di});r.uniforms.tEquirect.value=t;let a=new Ne(s,r),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=Jn),new Nl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ml=new G,Nf=new G,kf=new Pt,wi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ml.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kf.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new Zi,Ra=new G,Nr=class{constructor(e=new wi,t=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],x=s[9],_=s[10],g=s[11],m=s[12],M=s[13],v=s[14],S=s[15];if(n[0].setComponents(c-r,p-h,g-f,S-m).normalize(),n[1].setComponents(c+r,p+h,g+f,S+m).normalize(),n[2].setComponents(c+a,p+u,g+x,S+M).normalize(),n[3].setComponents(c-a,p-u,g-x,S-M).normalize(),n[4].setComponents(c-o,p-d,g-_,S-v).normalize(),t===Ei)n[5].setComponents(c+o,p+d,g+_,S+v).normalize();else if(t===Ya)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ff(i,e){let t=e.isWebGL2,n=new WeakMap;function s(h,u){let d=h.array,p=h.usage,f=d.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,d,p),h.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:f}}function r(h,u,d){let p=u.array,f=u._updateRange,x=u.updateRanges;if(i.bindBuffer(d,h),f.count===-1&&x.length===0&&i.bufferSubData(d,0,p),x.length!==0){for(let _=0,g=x.length;_<g;_++){let m=x[_];t?i.bufferSubData(d,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):i.bufferSubData(d,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let d=n.get(h);if(d===void 0)n.set(h,s(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,u),d.version=h.version}}return{get:a,remove:o,update:c}}var Ki=class i extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,d=e/o,p=t/c,f=[],x=[],_=[],g=[];for(let m=0;m<u;m++){let M=m*p-a;for(let v=0;v<h;v++){let S=v*d-r;x.push(S,-M,0),_.push(0,0,1),g.push(v/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let v=M+h*m,S=M+h*(m+1),D=M+1+h*(m+1),I=M+1+h*m;f.push(v,S,I),f.push(S,D,I)}this.setIndex(f),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
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
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cp=`#define PI 3.141592653589793
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
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,up=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`
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
}`,yp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,sm=`#define MATCAP
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
}`,rm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,hm=`#define STANDARD
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
}`,um=`#define TOON
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
}`,dm=`#define TOON
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
}`,fm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Bf,alphahash_pars_fragment:Hf,alphamap_fragment:Gf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:Yf,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Kf,beginnormal_vertex:$f,bsdfs:jf,iridescence_fragment:Qf,bumpmap_pars_fragment:ep,clipping_planes_fragment:tp,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:sp,color_fragment:rp,color_pars_fragment:ap,color_pars_vertex:op,color_vertex:lp,common:cp,cube_uv_reflection_fragment:hp,defaultnormal_vertex:up,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:gp,colorspace_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:_p,envmap_pars_fragment:vp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Dp,envmap_vertex:bp,fog_vertex:wp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:Ap,lightmap_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Lp,lights_toon_fragment:Up,lights_toon_pars_fragment:zp,lights_phong_fragment:Op,lights_phong_pars_fragment:Np,lights_physical_fragment:kp,lights_physical_pars_fragment:Fp,lights_fragment_begin:Bp,lights_fragment_maps:Hp,lights_fragment_end:Gp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:Kp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:jp,morphcolor_vertex:Qp,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:d0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:x0,dithering_pars_fragment:y0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:b0,shadowmap_vertex:w0,shadowmask_pars_fragment:S0,skinbase_vertex:E0,skinning_pars_vertex:T0,skinning_vertex:A0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:U0,uv_pars_fragment:z0,uv_pars_vertex:O0,uv_vertex:N0,worldpos_vertex:k0,background_vert:F0,background_frag:B0,backgroundCube_vert:H0,backgroundCube_frag:G0,cube_vert:V0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distanceRGBA_vert:Y0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:K0,linedashed_vert:$0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:rm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:um,meshtoon_frag:dm,points_vert:fm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:xm,sprite_frag:ym},Ve={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},ui={basic:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new at(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Ln([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Ln([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new at(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Ln([Ve.points,Ve.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Ln([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Ln([Ve.common,Ve.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Ln([Ve.sprite,Ve.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Ln([Ve.common,Ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Ln([Ve.lights,Ve.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ui.physical={uniforms:Ln([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var Ca={r:0,b:0,g:0};function _m(i,e,t,n,s,r,a){let o=new at(0),c=r===!0?0:1,h,u,d=null,p=0,f=null;function x(g,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===So)?(u===void 0&&(u=new Ne(new zn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:tr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Nt.getTransfer(v.colorSpace)!==Wt,(d!==v||p!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,p=v.version,f=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Ne(new Ki(2,2),new hn({name:"BackgroundMaterial",uniforms:tr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Nt.getTransfer(v.colorSpace)!==Wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,p=v.version,f=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function _(g,m){g.getRGB(Ca,Iu(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(o,c)},render:x}}function vm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),h=c,u=!1;function d(U,b,W,j,z){let ee=!1;if(a){let be=_(j,W,b);h!==be&&(h=be,f(h.object)),ee=m(U,j,W,z),ee&&M(U,j,W,z)}else{let be=b.wireframe===!0;(h.geometry!==j.id||h.program!==W.id||h.wireframe!==be)&&(h.geometry=j.id,h.program=W.id,h.wireframe=be,ee=!0)}z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,F(U,b,W,j),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function x(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function _(U,b,W){let j=W.wireframe===!0,z=o[U.id];z===void 0&&(z={},o[U.id]=z);let ee=z[b.id];ee===void 0&&(ee={},z[b.id]=ee);let be=ee[j];return be===void 0&&(be=g(p()),ee[j]=be),be}function g(U){let b=[],W=[],j=[];for(let z=0;z<s;z++)b[z]=0,W[z]=0,j[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:j,object:U,attributes:{},index:null}}function m(U,b,W,j){let z=h.attributes,ee=b.attributes,be=0,fe=W.getAttributes();for(let Le in fe)if(fe[Le].location>=0){let ye=z[Le],Te=ee[Le];if(Te===void 0&&(Le==="instanceMatrix"&&U.instanceMatrix&&(Te=U.instanceMatrix),Le==="instanceColor"&&U.instanceColor&&(Te=U.instanceColor)),ye===void 0||ye.attribute!==Te||Te&&ye.data!==Te.data)return!0;be++}return h.attributesNum!==be||h.index!==j}function M(U,b,W,j){let z={},ee=b.attributes,be=0,fe=W.getAttributes();for(let Le in fe)if(fe[Le].location>=0){let ye=ee[Le];ye===void 0&&(Le==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),Le==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor));let Te={};Te.attribute=ye,ye&&ye.data&&(Te.data=ye.data),z[Le]=Te,be++}h.attributes=z,h.attributesNum=be,h.index=j}function v(){let U=h.newAttributes;for(let b=0,W=U.length;b<W;b++)U[b]=0}function S(U){D(U,0)}function D(U,b){let W=h.newAttributes,j=h.enabledAttributes,z=h.attributeDivisors;W[U]=1,j[U]===0&&(i.enableVertexAttribArray(U),j[U]=1),z[U]!==b&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,b),z[U]=b)}function I(){let U=h.newAttributes,b=h.enabledAttributes;for(let W=0,j=b.length;W<j;W++)b[W]!==U[W]&&(i.disableVertexAttribArray(W),b[W]=0)}function C(U,b,W,j,z,ee,be){be===!0?i.vertexAttribIPointer(U,b,W,z,ee):i.vertexAttribPointer(U,b,W,j,z,ee)}function F(U,b,W,j){if(n.isWebGL2===!1&&(U.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let z=j.attributes,ee=W.getAttributes(),be=b.defaultAttributeValues;for(let fe in ee){let Le=ee[fe];if(Le.location>=0){let oe=z[fe];if(oe===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),oe!==void 0){let ye=oe.normalized,Te=oe.itemSize,Qe=t.get(oe);if(Qe===void 0)continue;let He=Qe.buffer,$e=Qe.type,Fe=Qe.bytesPerElement,Xe=n.isWebGL2===!0&&($e===i.INT||$e===i.UNSIGNED_INT||oe.gpuType===vu);if(oe.isInterleavedBufferAttribute){let Ue=oe.data,B=Ue.stride,Pe=oe.offset;if(Ue.isInstancedInterleavedBuffer){for(let ue=0;ue<Le.locationSize;ue++)D(Le.location+ue,Ue.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let ue=0;ue<Le.locationSize;ue++)S(Le.location+ue);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ue=0;ue<Le.locationSize;ue++)C(Le.location+ue,Te/Le.locationSize,$e,ye,B*Fe,(Pe+Te/Le.locationSize*ue)*Fe,Xe)}else{if(oe.isInstancedBufferAttribute){for(let Ue=0;Ue<Le.locationSize;Ue++)D(Le.location+Ue,oe.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<Le.locationSize;Ue++)S(Le.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ue=0;Ue<Le.locationSize;Ue++)C(Le.location+Ue,Te/Le.locationSize,$e,ye,Te*Fe,Te/Le.locationSize*Ue*Fe,Xe)}}else if(be!==void 0){let ye=be[fe];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(Le.location,ye);break;case 3:i.vertexAttrib3fv(Le.location,ye);break;case 4:i.vertexAttrib4fv(Le.location,ye);break;default:i.vertexAttrib1fv(Le.location,ye)}}}}I()}function E(){O();for(let U in o){let b=o[U];for(let W in b){let j=b[W];for(let z in j)x(j[z].object),delete j[z];delete b[W]}delete o[U]}}function y(U){if(o[U.id]===void 0)return;let b=o[U.id];for(let W in b){let j=b[W];for(let z in j)x(j[z].object),delete j[z];delete b[W]}delete o[U.id]}function N(U){for(let b in o){let W=o[b];if(W[U.id]===void 0)continue;let j=W[U.id];for(let z in j)x(j[z].object),delete j[z];delete W[U.id]}}function O(){Q(),u=!0,h!==c&&(h=c,f(h.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:I}}function Mm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,d){i.drawArrays(r,u,d),t.update(d,r,1)}function c(u,d,p){if(p===0)return;let f,x;if(s)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](r,u,d,p),t.update(d,r,p)}function h(u,d,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],d[x]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,p);let x=0;for(let _=0;_<p;_++)x+=d[_];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function bm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=a||e.has("OES_texture_float"),D=v&&S,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:D,maxSamples:I}}function wm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new wi,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){let x=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):h();else{let M=r?0:n,v=M*4,S=m.clippingState||null;c.value=S,S=u(x,p,v,f);for(let D=0;D!==v;++D)S[D]=t[D];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,f,x){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=c.value,x!==!0||g===null){let m=f+_*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,S=f;v!==_;++v,S+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Sm(i){let e=new WeakMap;function t(a,o){return o===Cl?a.mapping=js:o===Pl&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Cl||o===Pl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new kl(c.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var nr=class extends io{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ys=4,Nh=[.125,.215,.35,.446,.526,.582],ds=20,gl=new nr,kh=new at,xl=null,yl=0,_l=0,hs=(1+Math.sqrt(5))/2,Hs=1/hs,Fh=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,hs,Hs),new G(0,hs,-Hs),new G(Hs,0,hs),new G(-Hs,0,hs),new G(hs,Hs,0),new G(-hs,Hs,0)],$i=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,yl,_l),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:ri,format:Gn,colorSpace:Ai,depthBuffer:!1},s=Bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=Tm(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,s){let o=new mn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(kh),u.toneMapping=fi,u.autoClear=!1;let f=new Bt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Ne(new zn,f),_=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(kh),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):M===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));let v=this._cubeSize;Pa(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fh[(s-1)%Fh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ne(this._lodPlanes[s],h),p=h.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),_=r/x,g=isFinite(r)?1+Math.floor(u*_):ds;g>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);let m=[],M=0;for(let C=0;C<ds;++C){let F=C/_,E=Math.exp(-F*F/2);m.push(E),C===0?M+=E:C<g&&(M+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let S=this._sizeLods[s],D=3*S*(s>v-Ys?s-v+Ys:0),I=4*(this._cubeSize-S);Pa(t,D,I,3*S,2*S),c.setRenderTarget(t),c.render(d,gl)}};function Em(i){let e=[],t=[],n=[],s=i,r=i-Ys+1+Nh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ys?c=Nh[a-i+Ys-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,d=1+h,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,x=6,_=3,g=2,m=1,M=new Float32Array(_*x*f),v=new Float32Array(g*x*f),S=new Float32Array(m*x*f);for(let I=0;I<f;I++){let C=I%3*2/3-1,F=I>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];M.set(E,_*x*I),v.set(p,g*x*I);let y=[I,I,I,I,I,I];S.set(y,m*x*I)}let D=new Ht;D.setAttribute("position",new cn(M,_)),D.setAttribute("uv",new cn(v,g)),D.setAttribute("faceIndex",new cn(S,m)),e.push(D),s>Ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bh(i,e,t){let n=new Dn(i,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tm(i,e,t){let n=new Float32Array(ds),s=new G(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Hh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Gh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function Am(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===Cl||c===Pl,u=c===js||c===Qs;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new $i(i)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(h&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new $i(i));let p=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let _=p.morphAttributes[x];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let x in f){let _=f[x];for(let g=0,m=_.length;g<m;g++)e.update(_[g],i.ARRAY_BUFFER)}}function h(d){let p=[],f=d.index,x=d.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let v=0,S=M.length;v<S;v+=3){let D=M[v+0],I=M[v+1],C=M[v+2];p.push(D,I,I,C,C,D)}}else if(x!==void 0){let M=x.array;_=x.version;for(let v=0,S=M.length/3-1;v<S;v+=3){let D=v+0,I=v+1,C=v+2;p.push(D,I,I,C,C,D)}}else return;let g=new(Cu(p)?no:to)(p,1);g.version=_;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Pm(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function u(f,x){i.drawElements(r,x,o,f*c),t.update(x,r,1)}function d(f,x,_){if(_===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,x,o,f*c,_),t.update(x,r,_)}function p(f,x,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(f[m]/c,x[m]);else{g.multiDrawElementsWEBGL(r,x,0,o,f,0,_);let m=0;for(let M=0;M<_;M++)m+=x[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function Im(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,e){return i[0]-e[0]}function Dm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Um(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new $t,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,d){let p=h.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=f!==void 0?f.length:0,_=r.get(u);if(_===void 0||_.count!==x){let U=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();let M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],F=0;M===!0&&(F=1),v===!0&&(F=2),S===!0&&(F=3);let E=u.attributes.position.count*F,y=1;E>e.maxTextureSize&&(y=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let N=new Float32Array(E*y*4*x),O=new ja(N,E,y,x);O.type=Gi,O.needsUpdate=!0;let Q=F*4;for(let b=0;b<x;b++){let W=D[b],j=I[b],z=C[b],ee=E*y*4*b;for(let be=0;be<W.count;be++){let fe=be*Q;M===!0&&(a.fromBufferAttribute(W,be),N[ee+fe+0]=a.x,N[ee+fe+1]=a.y,N[ee+fe+2]=a.z,N[ee+fe+3]=0),v===!0&&(a.fromBufferAttribute(j,be),N[ee+fe+4]=a.x,N[ee+fe+5]=a.y,N[ee+fe+6]=a.z,N[ee+fe+7]=0),S===!0&&(a.fromBufferAttribute(z,be),N[ee+fe+8]=a.x,N[ee+fe+9]=a.y,N[ee+fe+10]=a.z,N[ee+fe+11]=z.itemSize===4?a.w:1)}}_={count:x,texture:O,size:new Ae(E,y)},r.set(u,_),u.addEventListener("dispose",U)}let g=0;for(let M=0;M<p.length;M++)g+=p[M];let m=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",m),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==f){x=[];for(let v=0;v<f;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<f;v++){let S=x[v];S[0]=v,S[1]=p[v]}x.sort(Dm);for(let v=0;v<8;v++)v<f&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Lm);let _=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let S=o[v],D=S[0],I=S[1];D!==Number.MAX_SAFE_INTEGER&&I?(_&&u.getAttribute("morphTarget"+v)!==_[D]&&u.setAttribute("morphTarget"+v,_[D]),g&&u.getAttribute("morphNormal"+v)!==g[D]&&u.setAttribute("morphNormal"+v,g[D]),s[v]=I,m+=I):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let M=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function zm(i,e,t,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var ro=class extends Vn{constructor(e,t,n,s,r,a,o,c,h,u){if(u=u!==void 0?u:ms,u!==ms&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Hi),n===void 0&&u===er&&(n=ps),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Du=new Vn,Uu=new ro(1,1);Uu.compareFunction=Ru;var zu=new ja,Ou=new Ol,Nu=new so,Vh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function or(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),xn(t,n)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;qh.set(n),i.uniformMatrix3fv(this.addr,!1,qh),xn(t,n)}}function Gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),xn(t,n)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Uu:Du;t.setTexture2D(e||r,s)}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ou,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nu,s)}function eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zu,s)}function tg(i){switch(i){case 5126:return Om;case 35664:return Nm;case 35665:return km;case 35666:return Fm;case 35674:return Bm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return Zm;case 36295:return Jm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return eg}}function ng(i,e){i.uniform1fv(this.addr,e)}function ig(i,e){let t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function sg(i,e){let t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function rg(i,e){let t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function ag(i,e){let t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function og(i,e){let t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lg(i,e){let t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cg(i,e){i.uniform1iv(this.addr,e)}function hg(i,e){i.uniform2iv(this.addr,e)}function ug(i,e){i.uniform3iv(this.addr,e)}function dg(i,e){i.uniform4iv(this.addr,e)}function fg(i,e){i.uniform1uiv(this.addr,e)}function pg(i,e){i.uniform2uiv(this.addr,e)}function mg(i,e){i.uniform3uiv(this.addr,e)}function gg(i,e){i.uniform4uiv(this.addr,e)}function xg(i,e,t){let n=this.cache,s=e.length,r=Ao(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Du,r[a])}function yg(i,e,t){let n=this.cache,s=e.length,r=Ao(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ou,r[a])}function _g(i,e,t){let n=this.cache,s=e.length,r=Ao(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nu,r[a])}function vg(i,e,t){let n=this.cache,s=e.length,r=Ao(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zu,r[a])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}var Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tg(t.type)}},Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mg(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function Zh(i,e){i.seq.push(e),i.map[e.id]=e}function bg(i,e,t){let n=i.name,s=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),a=vl.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Zh(t,h===void 0?new Fl(o,i,e):new Bl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Hl(o),Zh(t,d)),t=d}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);bg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Jh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wg=37297,Sg=0;function Eg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Tg(i){let e=Nt.getPrimaries(Nt.workingColorSpace),t=Nt.getPrimaries(i),n;switch(e===t?n="":e===qa&&t===Xa?n="LinearDisplayP3ToLinearSRGB":e===Xa&&t===qa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ai:case To:return[n,"LinearTransferOETF"];case Kt:case Ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Eg(i.getShaderSource(e),a)}else return s}function Ag(i,e){let t=Tg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rg(i,e){let t;switch(e){case vc:t="Linear";break;case Mc:t="Reinhard";break;case bc:t="OptimizedCineon";break;case Kr:t="ACESFilmic";break;case wc:t="AgX";break;case $d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zs).join(`
`)}function Pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zs).join(`
`)}function Ig(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zs(i){return i!==""}function $h(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(Dg,zg)}var Ug=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zg(i,e){let t=wt[e];if(t===void 0){let n=Ug.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}var Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(Og,Ng)}function Ng(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Fg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case js:case Qs:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qs&&(e="ENVMAP_MODE_REFRACTION"),e}function Hg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Kd:e="ENVMAP_BLENDING_ADD";break}return e}function Gg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=kg(t),h=Fg(t),u=Bg(t),d=Hg(t),p=Gg(t),f=t.isWebGL2?"":Cg(t),x=Pg(t),_=Ig(r),g=s.createProgram(),m,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),M.length>0&&(M+=`
`)):(m=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),M=[f,eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?wt.tonemapping_pars_fragment:"",t.toneMapping!==fi?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,Ag("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Gl(a),a=$h(a,t),a=jh(a,t),o=Gl(o),o=$h(o,t),o=jh(o,t),a=Qh(a),o=Qh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let S=v+m+a,D=v+M+o,I=Jh(s,s.VERTEX_SHADER,S),C=Jh(s,s.FRAGMENT_SHADER,D);s.attachShader(g,I),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function F(O){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(I).trim(),b=s.getShaderInfoLog(C).trim(),W=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,C);else{let z=Kh(s,I,"vertex"),ee=Kh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+z+`
`+ee)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||b==="")&&(j=!1);j&&(O.diagnostics={runnable:W,programLog:Q,vertexShader:{log:U,prefix:m},fragmentShader:{log:b,prefix:M}})}s.deleteShader(I),s.deleteShader(C),E=new $s(s,g),y=Lg(s,g)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let y;this.getAttributes=function(){return y===void 0&&F(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,wg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=C,this}var Wg=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}};function Xg(i,e,t,n,s,r,a){let o=new eo,c=new Vl,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function g(E,y,N,O,Q){let U=O.fog,b=Q.geometry,W=E.isMeshStandardMaterial?O.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),z=j&&j.mapping===So?j.image.height:null,ee=x[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let be=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,fe=be!==void 0?be.length:0,Le=0;b.morphAttributes.position!==void 0&&(Le=1),b.morphAttributes.normal!==void 0&&(Le=2),b.morphAttributes.color!==void 0&&(Le=3);let oe,ye,Te,Qe;if(ee){let _t=ui[ee];oe=_t.vertexShader,ye=_t.fragmentShader}else oe=E.vertexShader,ye=E.fragmentShader,c.update(E),Te=c.getVertexShaderID(E),Qe=c.getFragmentShaderID(E);let He=i.getRenderTarget(),$e=Q.isInstancedMesh===!0,Fe=Q.isBatchedMesh===!0,Xe=!!E.map,Ue=!!E.matcap,B=!!j,Pe=!!E.aoMap,ue=!!E.lightMap,Ee=!!E.bumpMap,he=!!E.normalMap,Ze=!!E.displacementMap,Ce=!!E.emissiveMap,L=!!E.metalnessMap,P=!!E.roughnessMap,te=E.anisotropy>0,de=E.clearcoat>0,Me=E.iridescence>0,we=E.sheen>0,qe=E.transmission>0,ke=te&&!!E.anisotropyMap,We=de&&!!E.clearcoatMap,nt=de&&!!E.clearcoatNormalMap,ct=de&&!!E.clearcoatRoughnessMap,me=Me&&!!E.iridescenceMap,ut=Me&&!!E.iridescenceThicknessMap,mt=we&&!!E.sheenColorMap,dt=we&&!!E.sheenRoughnessMap,it=!!E.specularMap,Ye=!!E.specularColorMap,pt=!!E.specularIntensityMap,St=qe&&!!E.transmissionMap,Ut=qe&&!!E.thicknessMap,ft=!!E.gradientMap,Re=!!E.alphaMap,Y=E.alphaTest>0,Be=!!E.alphaHash,ze=!!E.extensions,st=!!b.attributes.uv1,et=!!b.attributes.uv2,bt=!!b.attributes.uv3,Ct=fi;return E.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ct=i.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:ye,defines:E.defines,customVertexShaderID:Te,customFragmentShaderID:Qe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Fe,instancing:$e,instancingColor:$e&&Q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Ai,map:Xe,matcap:Ue,envMap:B,envMapMode:B&&j.mapping,envMapCubeUVHeight:z,aoMap:Pe,lightMap:ue,bumpMap:Ee,normalMap:he,displacementMap:p&&Ze,emissiveMap:Ce,normalMapObjectSpace:he&&E.normalMapType===hf,normalMapTangentSpace:he&&E.normalMapType===Eo,metalnessMap:L,roughnessMap:P,anisotropy:te,anisotropyMap:ke,clearcoat:de,clearcoatMap:We,clearcoatNormalMap:nt,clearcoatRoughnessMap:ct,iridescence:Me,iridescenceMap:me,iridescenceThicknessMap:ut,sheen:we,sheenColorMap:mt,sheenRoughnessMap:dt,specularMap:it,specularColorMap:Ye,specularIntensityMap:pt,transmission:qe,transmissionMap:St,thicknessMap:Ut,gradientMap:ft,opaque:E.transparent===!1&&E.blending===Vi,alphaMap:Re,alphaTest:Y,alphaHash:Be,combine:E.combine,mapUv:Xe&&_(E.map.channel),aoMapUv:Pe&&_(E.aoMap.channel),lightMapUv:ue&&_(E.lightMap.channel),bumpMapUv:Ee&&_(E.bumpMap.channel),normalMapUv:he&&_(E.normalMap.channel),displacementMapUv:Ze&&_(E.displacementMap.channel),emissiveMapUv:Ce&&_(E.emissiveMap.channel),metalnessMapUv:L&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:ke&&_(E.anisotropyMap.channel),clearcoatMapUv:We&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(E.sheenRoughnessMap.channel),specularMapUv:it&&_(E.specularMap.channel),specularColorMapUv:Ye&&_(E.specularColorMap.channel),specularIntensityMapUv:pt&&_(E.specularIntensityMap.channel),transmissionMapUv:St&&_(E.transmissionMap.channel),thicknessMapUv:Ut&&_(E.thicknessMap.channel),alphaMapUv:Re&&_(E.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(he||te),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:et,vertexUv3s:bt,pointsUvs:Q.isPoints===!0&&!!b.attributes.uv&&(Xe||Re),fog:!!U,useFog:E.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Nt.getTransfer(E.map.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nn,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ze&&E.extensions.derivatives===!0,extensionFragDepth:ze&&E.extensions.fragDepth===!0,extensionDrawBuffers:ze&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ze&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ze&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)y.push(N),y.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(M(y,E),v(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){let y=x[E.type],N;if(y){let O=ui[y];N=ts.clone(O.uniforms)}else N=E.uniforms;return N}function D(E,y){let N;for(let O=0,Q=h.length;O<Q;O++){let U=h[O];if(U.cacheKey===y){N=U,++N.usedTimes;break}}return N===void 0&&(N=new Vg(i,y,E,r),h.push(N)),N}function I(E){if(--E.usedTimes===0){let y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:D,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:F}}function qg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Yg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,f,x,_,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:x,renderOrder:d.renderOrder,z:_,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}function o(d,p,f,x,_,g){let m=a(d,p,f,x,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(d,p,f,x,_,g){let m=a(d,p,f,x,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function h(d,p){t.length>1&&t.sort(d||Yg),n.length>1&&n.sort(p||tu),s.length>1&&s.sort(p||tu)}function u(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Zg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new nu,i.set(n,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new at};break;case"SpotLight":t={position:new G,direction:new G,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $g=0;function jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qg(i,e){let t=new Jg,n=Kg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new G);let r=new G,a=new zt,o=new zt;function c(u,d){let p=0,f=0,x=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,g=0,m=0,M=0,v=0,S=0,D=0,I=0,C=0,F=0,E=0;u.sort(jg);let y=d===!0?Math.PI:1;for(let O=0,Q=u.length;O<Q;O++){let U=u[O],b=U.color,W=U.intensity,j=U.distance,z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=b.r*W*y,f+=b.g*W*y,x+=b.b*W*y;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(U.sh.coefficients[ee],W);E++}else if(U.isDirectionalLight){let ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){let be=U.shadow,fe=n.get(U);fe.shadowBias=be.bias,fe.shadowNormalBias=be.normalBias,fe.shadowRadius=be.radius,fe.shadowMapSize=be.mapSize,s.directionalShadow[_]=fe,s.directionalShadowMap[_]=z,s.directionalShadowMatrix[_]=U.shadow.matrix,S++}s.directional[_]=ee,_++}else if(U.isSpotLight){let ee=t.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(b).multiplyScalar(W*y),ee.distance=j,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,s.spot[m]=ee;let be=U.shadow;if(U.map&&(s.spotLightMap[C]=U.map,C++,be.updateMatrices(U),U.castShadow&&F++),s.spotLightMatrix[m]=be.matrix,U.castShadow){let fe=n.get(U);fe.shadowBias=be.bias,fe.shadowNormalBias=be.normalBias,fe.shadowRadius=be.radius,fe.shadowMapSize=be.mapSize,s.spotShadow[m]=fe,s.spotShadowMap[m]=z,I++}m++}else if(U.isRectAreaLight){let ee=t.get(U);ee.color.copy(b).multiplyScalar(W),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=ee,M++}else if(U.isPointLight){let ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*y),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){let be=U.shadow,fe=n.get(U);fe.shadowBias=be.bias,fe.shadowNormalBias=be.normalBias,fe.shadowRadius=be.radius,fe.shadowMapSize=be.mapSize,fe.shadowCameraNear=be.camera.near,fe.shadowCameraFar=be.camera.far,s.pointShadow[g]=fe,s.pointShadowMap[g]=z,s.pointShadowMatrix[g]=U.shadow.matrix,D++}s.point[g]=ee,g++}else if(U.isHemisphereLight){let ee=t.get(U);ee.skyColor.copy(U.color).multiplyScalar(W*y),ee.groundColor.copy(U.groundColor).multiplyScalar(W*y),s.hemi[v]=ee,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=x;let N=s.hash;(N.directionalLength!==_||N.pointLength!==g||N.spotLength!==m||N.rectAreaLength!==M||N.hemiLength!==v||N.numDirectionalShadows!==S||N.numPointShadows!==D||N.numSpotShadows!==I||N.numSpotMaps!==C||N.numLightProbes!==E)&&(s.directional.length=_,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=I+C-F,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=E,N.directionalLength=_,N.pointLength=g,N.spotLength=m,N.rectAreaLength=M,N.hemiLength=v,N.numDirectionalShadows=S,N.numPointShadows=D,N.numSpotShadows=I,N.numSpotMaps=C,N.numLightProbes=E,s.version=$g++)}function h(u,d){let p=0,f=0,x=0,_=0,g=0,m=d.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){let S=u[M];if(S.isDirectionalLight){let D=s.directional[p];D.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),p++}else if(S.isSpotLight){let D=s.spot[x];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),x++}else if(S.isRectAreaLight){let D=s.rectArea[_];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),D.halfWidth.set(S.width*.5,0,0),D.halfHeight.set(0,S.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let D=s.point[f];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let D=s.hemi[g];D.direction.setFromMatrixPosition(S.matrixWorld),D.direction.transformDirection(m),g++}}}return{setup:c,setupView:h,state:s}}function iu(i,e){let t=new Qg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function c(d){t.setup(n,d)}function h(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function ex(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new iu(i,e),t.set(r,[c])):a>=o.length?(c=new iu(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xl=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
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
}`;function ix(i,e,t){let n=new Nr,s=new Ae,r=new Ae,a=new $t,o=new Xl({depthPacking:cf}),c=new ql,h={},u=t.maxTextureSize,d={[qi]:ln,[ln]:qi,[nn]:nn},p=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:tx,fragmentShader:nx}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ht;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let m=this.type;this.render=function(I,C,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let E=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(di),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Q=m!==bi&&this.type===bi,U=m===bi&&this.type!==bi;for(let b=0,W=I.length;b<W;b++){let j=I[b],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ee=z.getFrameExtents();if(s.multiply(ee),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,z.mapSize.y=r.y)),z.map===null||Q===!0||U===!0){let fe=this.type!==bi?{minFilter:pn,magFilter:pn}:{};z.map!==null&&z.map.dispose(),z.map=new Dn(s.x,s.y,fe),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let be=z.getViewportCount();for(let fe=0;fe<be;fe++){let Le=z.getViewport(fe);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),O.viewport(a),z.updateMatrices(j,fe),n=z.getFrustum(),S(C,F,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===bi&&M(z,F),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,y,N)};function M(I,C){let F=e.update(_);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Dn(s.x,s.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,F,p,_,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,F,f,_,null)}function v(I,C,F,E){let y=null,N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)y=N;else if(y=F.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=y.uuid,Q=C.uuid,U=h[O];U===void 0&&(U={},h[O]=U);let b=U[Q];b===void 0&&(b=y.clone(),U[Q]=b,C.addEventListener("dispose",D)),y=b}if(y.visible=C.visible,y.wireframe=C.wireframe,E===bi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=i.properties.get(y);O.light=F}return y}function S(I,C,F,E,y){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===bi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);let Q=e.update(I),U=I.material;if(Array.isArray(U)){let b=Q.groups;for(let W=0,j=b.length;W<j;W++){let z=b[W],ee=U[z.materialIndex];if(ee&&ee.visible){let be=v(I,ee,E,y);I.onBeforeShadow(i,I,C,F,Q,be,z),i.renderBufferDirect(F,null,Q,be,I,z),I.onAfterShadow(i,I,C,F,Q,be,z)}}}else if(U.visible){let b=v(I,U,E,y);I.onBeforeShadow(i,I,C,F,Q,b,null),i.renderBufferDirect(F,null,Q,b,I,null),I.onAfterShadow(i,I,C,F,Q,b,null)}}let O=I.children;for(let Q=0,U=O.length;Q<U;Q++)S(O[Q],C,F,E,y)}function D(I){I.target.removeEventListener("dispose",D);for(let F in h){let E=h[F],y=I.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function sx(i,e,t){let n=t.isWebGL2;function s(){let Y=!1,Be=new $t,ze=null,st=new $t(0,0,0,0);return{setMask:function(et){ze!==et&&!Y&&(i.colorMask(et,et,et,et),ze=et)},setLocked:function(et){Y=et},setClear:function(et,bt,Ct,ht,_t){_t===!0&&(et*=ht,bt*=ht,Ct*=ht),Be.set(et,bt,Ct,ht),st.equals(Be)===!1&&(i.clearColor(et,bt,Ct,ht),st.copy(Be))},reset:function(){Y=!1,ze=null,st.set(-1,0,0,0)}}}function r(){let Y=!1,Be=null,ze=null,st=null;return{setTest:function(et){et?Fe(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(et){Be!==et&&!Y&&(i.depthMask(et),Be=et)},setFunc:function(et){if(ze!==et){switch(et){case Gd:i.depthFunc(i.NEVER);break;case Vd:i.depthFunc(i.ALWAYS);break;case Wd:i.depthFunc(i.LESS);break;case Ha:i.depthFunc(i.LEQUAL);break;case Xd:i.depthFunc(i.EQUAL);break;case qd:i.depthFunc(i.GEQUAL);break;case Yd:i.depthFunc(i.GREATER);break;case Zd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=et}},setLocked:function(et){Y=et},setClear:function(et){st!==et&&(i.clearDepth(et),st=et)},reset:function(){Y=!1,Be=null,ze=null,st=null}}}function a(){let Y=!1,Be=null,ze=null,st=null,et=null,bt=null,Ct=null,ht=null,_t=null;return{setTest:function(Et){Y||(Et?Fe(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(Et){Be!==Et&&!Y&&(i.stencilMask(Et),Be=Et)},setFunc:function(Et,Oe,Zt){(ze!==Et||st!==Oe||et!==Zt)&&(i.stencilFunc(Et,Oe,Zt),ze=Et,st=Oe,et=Zt)},setOp:function(Et,Oe,Zt){(bt!==Et||Ct!==Oe||ht!==Zt)&&(i.stencilOp(Et,Oe,Zt),bt=Et,Ct=Oe,ht=Zt)},setLocked:function(Et){Y=Et},setClear:function(Et){_t!==Et&&(i.clearStencil(Et),_t=Et)},reset:function(){Y=!1,Be=null,ze=null,st=null,et=null,bt=null,Ct=null,ht=null,_t=null}}}let o=new s,c=new r,h=new a,u=new WeakMap,d=new WeakMap,p={},f={},x=new WeakMap,_=[],g=null,m=!1,M=null,v=null,S=null,D=null,I=null,C=null,F=null,E=new at(0,0,0),y=0,N=!1,O=null,Q=null,U=null,b=null,W=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,be=i.getParameter(i.VERSION);be.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(be)[1]),z=ee>=1):be.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(be)[1]),z=ee>=2);let fe=null,Le={},oe=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Te=new $t().fromArray(oe),Qe=new $t().fromArray(ye);function He(Y,Be,ze,st){let et=new Uint8Array(4),bt=i.createTexture();i.bindTexture(Y,bt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<ze;Ct++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(Be,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(Be+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return bt}let $e={};$e[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),$e[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&($e[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$e[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Fe(i.DEPTH_TEST),c.setFunc(Ha),Ce(!1),L(kc),Fe(i.CULL_FACE),he(di);function Fe(Y){p[Y]!==!0&&(i.enable(Y),p[Y]=!0)}function Xe(Y){p[Y]!==!1&&(i.disable(Y),p[Y]=!1)}function Ue(Y,Be){return f[Y]!==Be?(i.bindFramebuffer(Y,Be),f[Y]=Be,n&&(Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Be),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Be)),!0):!1}function B(Y,Be){let ze=_,st=!1;if(Y)if(ze=x.get(Be),ze===void 0&&(ze=[],x.set(Be,ze)),Y.isWebGLMultipleRenderTargets){let et=Y.texture;if(ze.length!==et.length||ze[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Ct=et.length;bt<Ct;bt++)ze[bt]=i.COLOR_ATTACHMENT0+bt;ze.length=et.length,st=!0}}else ze[0]!==i.COLOR_ATTACHMENT0&&(ze[0]=i.COLOR_ATTACHMENT0,st=!0);else ze[0]!==i.BACK&&(ze[0]=i.BACK,st=!0);st&&(t.isWebGL2?i.drawBuffers(ze):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ze))}function Pe(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}let ue={[us]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};if(n)ue[Hc]=i.MIN,ue[Gc]=i.MAX;else{let Y=e.get("EXT_blend_minmax");Y!==null&&(ue[Hc]=Y.MIN_EXT,ue[Gc]=Y.MAX_EXT)}let Ee={[Cd]:i.ZERO,[Pd]:i.ONE,[Id]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[zd]:i.DST_COLOR,[Dd]:i.DST_ALPHA,[Ld]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[Hd]:i.ONE_MINUS_CONSTANT_ALPHA};function he(Y,Be,ze,st,et,bt,Ct,ht,_t,Et){if(Y===di){m===!0&&(Xe(i.BLEND),m=!1);return}if(m===!1&&(Fe(i.BLEND),m=!0),Y!==Td){if(Y!==M||Et!==N){if((v!==us||I!==us)&&(i.blendEquation(i.FUNC_ADD),v=us,I=us),Et)switch(Y){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}S=null,D=null,C=null,F=null,E.set(0,0,0),y=0,M=Y,N=Et}return}et=et||Be,bt=bt||ze,Ct=Ct||st,(Be!==v||et!==I)&&(i.blendEquationSeparate(ue[Be],ue[et]),v=Be,I=et),(ze!==S||st!==D||bt!==C||Ct!==F)&&(i.blendFuncSeparate(Ee[ze],Ee[st],Ee[bt],Ee[Ct]),S=ze,D=st,C=bt,F=Ct),(ht.equals(E)===!1||_t!==y)&&(i.blendColor(ht.r,ht.g,ht.b,_t),E.copy(ht),y=_t),M=Y,N=!1}function Ze(Y,Be){Y.side===nn?Xe(i.CULL_FACE):Fe(i.CULL_FACE);let ze=Y.side===ln;Be&&(ze=!ze),Ce(ze),Y.blending===Vi&&Y.transparent===!1?he(di):he(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let st=Y.stencilWrite;h.setTest(st),st&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(Y){O!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),O=Y)}function L(Y){Y!==Sd?(Fe(i.CULL_FACE),Y!==Q&&(Y===kc?i.cullFace(i.BACK):Y===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),Q=Y}function P(Y){Y!==U&&(z&&i.lineWidth(Y),U=Y)}function te(Y,Be,ze){Y?(Fe(i.POLYGON_OFFSET_FILL),(b!==Be||W!==ze)&&(i.polygonOffset(Be,ze),b=Be,W=ze)):Xe(i.POLYGON_OFFSET_FILL)}function de(Y){Y?Fe(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function Me(Y){Y===void 0&&(Y=i.TEXTURE0+j-1),fe!==Y&&(i.activeTexture(Y),fe=Y)}function we(Y,Be,ze){ze===void 0&&(fe===null?ze=i.TEXTURE0+j-1:ze=fe);let st=Le[ze];st===void 0&&(st={type:void 0,texture:void 0},Le[ze]=st),(st.type!==Y||st.texture!==Be)&&(fe!==ze&&(i.activeTexture(ze),fe=ze),i.bindTexture(Y,Be||$e[Y]),st.type=Y,st.texture=Be)}function qe(){let Y=Le[fe];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ke(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(Y){Te.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Te.copy(Y))}function St(Y){Qe.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Qe.copy(Y))}function Ut(Y,Be){let ze=d.get(Be);ze===void 0&&(ze=new WeakMap,d.set(Be,ze));let st=ze.get(Y);st===void 0&&(st=i.getUniformBlockIndex(Be,Y.name),ze.set(Y,st))}function ft(Y,Be){let st=d.get(Be).get(Y);u.get(Be)!==st&&(i.uniformBlockBinding(Be,st,Y.__bindingPointIndex),u.set(Be,st))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},fe=null,Le={},f={},x=new WeakMap,_=[],g=null,m=!1,M=null,v=null,S=null,D=null,I=null,C=null,F=null,E=new at(0,0,0),y=0,N=!1,O=null,Q=null,U=null,b=null,W=null,Te.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Fe,disable:Xe,bindFramebuffer:Ue,drawBuffers:B,useProgram:Pe,setBlending:he,setMaterial:Ze,setFlipSided:Ce,setCullFace:L,setLineWidth:P,setPolygonOffset:te,setScissorTest:de,activeTexture:Me,bindTexture:we,unbindTexture:qe,compressedTexImage2D:ke,compressedTexImage3D:We,texImage2D:it,texImage3D:Ye,updateUBOMapping:Ut,uniformBlockBinding:ft,texStorage2D:mt,texStorage3D:dt,texSubImage2D:nt,texSubImage3D:ct,compressedTexSubImage2D:me,compressedTexSubImage3D:ut,scissor:pt,viewport:St,reset:Re}}function rx(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,P){return f?new OffscreenCanvas(L,P):Ja("canvas")}function _(L,P,te,de){let Me=1;if((L.width>de||L.height>de)&&(Me=de/Math.max(L.width,L.height)),Me<1||P===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let we=P?Ul:Math.floor,qe=we(Me*L.width),ke=we(Me*L.height);d===void 0&&(d=x(qe,ke));let We=te?x(qe,ke):d;return We.width=qe,We.height=ke,We.getContext("2d").drawImage(L,0,0,qe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+qe+"x"+ke+")."),We}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return vh(L.width)&&vh(L.height)}function m(L){return o?!1:L.wrapS!==si||L.wrapT!==si||L.minFilter!==pn&&L.minFilter!==Jn}function M(L,P){return L.generateMipmaps&&P&&L.minFilter!==pn&&L.minFilter!==Jn}function v(L){i.generateMipmap(L)}function S(L,P,te,de,Me=!1){if(o===!1)return P;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let we=P;if(P===i.RED&&(te===i.FLOAT&&(we=i.R32F),te===i.HALF_FLOAT&&(we=i.R16F),te===i.UNSIGNED_BYTE&&(we=i.R8)),P===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(we=i.R8UI),te===i.UNSIGNED_SHORT&&(we=i.R16UI),te===i.UNSIGNED_INT&&(we=i.R32UI),te===i.BYTE&&(we=i.R8I),te===i.SHORT&&(we=i.R16I),te===i.INT&&(we=i.R32I)),P===i.RG&&(te===i.FLOAT&&(we=i.RG32F),te===i.HALF_FLOAT&&(we=i.RG16F),te===i.UNSIGNED_BYTE&&(we=i.RG8)),P===i.RGBA){let qe=Me?Wa:Nt.getTransfer(de);te===i.FLOAT&&(we=i.RGBA32F),te===i.HALF_FLOAT&&(we=i.RGBA16F),te===i.UNSIGNED_BYTE&&(we=qe===Wt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function D(L,P,te){return M(L,te)===!0||L.isFramebufferTexture&&L.minFilter!==pn&&L.minFilter!==Jn?Math.log2(Math.max(P.width,P.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?P.mipmaps.length:1}function I(L){return L===pn||L===Vc||L===Wo?i.NEAREST:i.LINEAR}function C(L){let P=L.target;P.removeEventListener("dispose",C),E(P),P.isVideoTexture&&u.delete(P)}function F(L){let P=L.target;P.removeEventListener("dispose",F),N(P)}function E(L){let P=n.get(L);if(P.__webglInit===void 0)return;let te=L.source,de=p.get(te);if(de){let Me=de[P.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&y(L),Object.keys(de).length===0&&p.delete(te)}n.remove(L)}function y(L){let P=n.get(L);i.deleteTexture(P.__webglTexture);let te=L.source,de=p.get(te);delete de[P.__cacheKey],a.memory.textures--}function N(L){let P=L.texture,te=n.get(L),de=n.get(P);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(te.__webglFramebuffer[Me]))for(let we=0;we<te.__webglFramebuffer[Me].length;we++)i.deleteFramebuffer(te.__webglFramebuffer[Me][we]);else i.deleteFramebuffer(te.__webglFramebuffer[Me]);te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer[Me])}else{if(Array.isArray(te.__webglFramebuffer))for(let Me=0;Me<te.__webglFramebuffer.length;Me++)i.deleteFramebuffer(te.__webglFramebuffer[Me]);else i.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&i.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let Me=0;Me<te.__webglColorRenderbuffer.length;Me++)te.__webglColorRenderbuffer[Me]&&i.deleteRenderbuffer(te.__webglColorRenderbuffer[Me]);te.__webglDepthRenderbuffer&&i.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Me=0,we=P.length;Me<we;Me++){let qe=n.get(P[Me]);qe.__webglTexture&&(i.deleteTexture(qe.__webglTexture),a.memory.textures--),n.remove(P[Me])}n.remove(P),n.remove(L)}let O=0;function Q(){O=0}function U(){let L=O;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function b(L){let P=[];return P.push(L.wrapS),P.push(L.wrapT),P.push(L.wrapR||0),P.push(L.magFilter),P.push(L.minFilter),P.push(L.anisotropy),P.push(L.internalFormat),P.push(L.format),P.push(L.type),P.push(L.generateMipmaps),P.push(L.premultiplyAlpha),P.push(L.flipY),P.push(L.unpackAlignment),P.push(L.colorSpace),P.join()}function W(L,P){let te=n.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){let de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(te,L,P);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+P)}function j(L,P){let te=n.get(L);if(L.version>0&&te.__version!==L.version){Te(te,L,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+P)}function z(L,P){let te=n.get(L);if(L.version>0&&te.__version!==L.version){Te(te,L,P);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+P)}function ee(L,P){let te=n.get(L);if(L.version>0&&te.__version!==L.version){Qe(te,L,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+P)}let be={[zr]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Il]:i.MIRRORED_REPEAT},fe={[pn]:i.NEAREST,[Vc]:i.NEAREST_MIPMAP_NEAREST,[Wo]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[jd]:i.LINEAR_MIPMAP_NEAREST,[Or]:i.LINEAR_MIPMAP_LINEAR},Le={[uf]:i.NEVER,[xf]:i.ALWAYS,[df]:i.LESS,[Ru]:i.LEQUAL,[ff]:i.EQUAL,[gf]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function oe(L,P,te){if(te?(i.texParameteri(L,i.TEXTURE_WRAP_S,be[P.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,be[P.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,be[P.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,fe[P.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,fe[P.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==si||P.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,I(P.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,I(P.minFilter)),P.minFilter!==pn&&P.minFilter!==Jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Le[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===pn||P.minFilter!==Wo&&P.minFilter!==Or||P.type===Gi&&e.has("OES_texture_float_linear")===!1||o===!1&&P.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function ye(L,P){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,P.addEventListener("dispose",C));let de=P.source,Me=p.get(de);Me===void 0&&(Me={},p.set(de,Me));let we=b(P);if(we!==L.__cacheKey){Me[we]===void 0&&(Me[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),Me[we].usedTimes++;let qe=Me[L.__cacheKey];qe!==void 0&&(Me[L.__cacheKey].usedTimes--,qe.usedTimes===0&&y(P)),L.__cacheKey=we,L.__webglTexture=Me[we].texture}return te}function Te(L,P,te){let de=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(de=i.TEXTURE_3D);let Me=ye(L,P),we=P.source;t.bindTexture(de,L.__webglTexture,i.TEXTURE0+te);let qe=n.get(we);if(we.version!==qe.__version||Me===!0){t.activeTexture(i.TEXTURE0+te);let ke=Nt.getPrimaries(Nt.workingColorSpace),We=P.colorSpace===Kn?null:Nt.getPrimaries(P.colorSpace),nt=P.colorSpace===Kn||ke===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ct=m(P)&&g(P.image)===!1,me=_(P.image,ct,!1,s.maxTextureSize);me=Ce(P,me);let ut=g(me)||o,mt=r.convert(P.format,P.colorSpace),dt=r.convert(P.type),it=S(P.internalFormat,mt,dt,P.colorSpace,P.isVideoTexture);oe(de,P,ut);let Ye,pt=P.mipmaps,St=o&&P.isVideoTexture!==!0&&it!==Tu,Ut=qe.__version===void 0||Me===!0,ft=D(P,me,ut);if(P.isDepthTexture)it=i.DEPTH_COMPONENT,o?P.type===Gi?it=i.DEPTH_COMPONENT32F:P.type===Hi?it=i.DEPTH_COMPONENT24:P.type===ps?it=i.DEPTH24_STENCIL8:it=i.DEPTH_COMPONENT16:P.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ms&&it===i.DEPTH_COMPONENT&&P.type!==Sc&&P.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Hi,dt=r.convert(P.type)),P.format===er&&it===i.DEPTH_COMPONENT&&(it=i.DEPTH_STENCIL,P.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=ps,dt=r.convert(P.type))),Ut&&(St?t.texStorage2D(i.TEXTURE_2D,1,it,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,it,me.width,me.height,0,mt,dt,null));else if(P.isDataTexture)if(pt.length>0&&ut){St&&Ut&&t.texStorage2D(i.TEXTURE_2D,ft,it,pt[0].width,pt[0].height);for(let Re=0,Y=pt.length;Re<Y;Re++)Ye=pt[Re],St?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Ye.width,Ye.height,mt,dt,Ye.data):t.texImage2D(i.TEXTURE_2D,Re,it,Ye.width,Ye.height,0,mt,dt,Ye.data);P.generateMipmaps=!1}else St?(Ut&&t.texStorage2D(i.TEXTURE_2D,ft,it,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,mt,dt,me.data)):t.texImage2D(i.TEXTURE_2D,0,it,me.width,me.height,0,mt,dt,me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){St&&Ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ft,it,pt[0].width,pt[0].height,me.depth);for(let Re=0,Y=pt.length;Re<Y;Re++)Ye=pt[Re],P.format!==Gn?mt!==null?St?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,Ye.width,Ye.height,me.depth,mt,Ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,it,Ye.width,Ye.height,me.depth,0,Ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,Ye.width,Ye.height,me.depth,mt,dt,Ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,it,Ye.width,Ye.height,me.depth,0,mt,dt,Ye.data)}else{St&&Ut&&t.texStorage2D(i.TEXTURE_2D,ft,it,pt[0].width,pt[0].height);for(let Re=0,Y=pt.length;Re<Y;Re++)Ye=pt[Re],P.format!==Gn?mt!==null?St?t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,Ye.width,Ye.height,mt,Ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,it,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Ye.width,Ye.height,mt,dt,Ye.data):t.texImage2D(i.TEXTURE_2D,Re,it,Ye.width,Ye.height,0,mt,dt,Ye.data)}else if(P.isDataArrayTexture)St?(Ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ft,it,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,mt,dt,me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,me.width,me.height,me.depth,0,mt,dt,me.data);else if(P.isData3DTexture)St?(Ut&&t.texStorage3D(i.TEXTURE_3D,ft,it,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,mt,dt,me.data)):t.texImage3D(i.TEXTURE_3D,0,it,me.width,me.height,me.depth,0,mt,dt,me.data);else if(P.isFramebufferTexture){if(Ut)if(St)t.texStorage2D(i.TEXTURE_2D,ft,it,me.width,me.height);else{let Re=me.width,Y=me.height;for(let Be=0;Be<ft;Be++)t.texImage2D(i.TEXTURE_2D,Be,it,Re,Y,0,mt,dt,null),Re>>=1,Y>>=1}}else if(pt.length>0&&ut){St&&Ut&&t.texStorage2D(i.TEXTURE_2D,ft,it,pt[0].width,pt[0].height);for(let Re=0,Y=pt.length;Re<Y;Re++)Ye=pt[Re],St?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,mt,dt,Ye):t.texImage2D(i.TEXTURE_2D,Re,it,mt,dt,Ye);P.generateMipmaps=!1}else St?(Ut&&t.texStorage2D(i.TEXTURE_2D,ft,it,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,dt,me)):t.texImage2D(i.TEXTURE_2D,0,it,mt,dt,me);M(P,ut)&&v(de),qe.__version=we.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function Qe(L,P,te){if(P.image.length!==6)return;let de=ye(L,P),Me=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+te);let we=n.get(Me);if(Me.version!==we.__version||de===!0){t.activeTexture(i.TEXTURE0+te);let qe=Nt.getPrimaries(Nt.workingColorSpace),ke=P.colorSpace===Kn?null:Nt.getPrimaries(P.colorSpace),We=P.colorSpace===Kn||qe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let nt=P.isCompressedTexture||P.image[0].isCompressedTexture,ct=P.image[0]&&P.image[0].isDataTexture,me=[];for(let Re=0;Re<6;Re++)!nt&&!ct?me[Re]=_(P.image[Re],!1,!0,s.maxCubemapSize):me[Re]=ct?P.image[Re].image:P.image[Re],me[Re]=Ce(P,me[Re]);let ut=me[0],mt=g(ut)||o,dt=r.convert(P.format,P.colorSpace),it=r.convert(P.type),Ye=S(P.internalFormat,dt,it,P.colorSpace),pt=o&&P.isVideoTexture!==!0,St=we.__version===void 0||de===!0,Ut=D(P,ut,mt);oe(i.TEXTURE_CUBE_MAP,P,mt);let ft;if(nt){pt&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ye,ut.width,ut.height);for(let Re=0;Re<6;Re++){ft=me[Re].mipmaps;for(let Y=0;Y<ft.length;Y++){let Be=ft[Y];P.format!==Gn?dt!==null?pt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y,0,0,Be.width,Be.height,dt,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y,0,0,Be.width,Be.height,dt,it,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y,Ye,Be.width,Be.height,0,dt,it,Be.data)}}}else{ft=P.mipmaps,pt&&St&&(ft.length>0&&Ut++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ye,me[0].width,me[0].height));for(let Re=0;Re<6;Re++)if(ct){pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,me[Re].width,me[Re].height,dt,it,me[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ye,me[Re].width,me[Re].height,0,dt,it,me[Re].data);for(let Y=0;Y<ft.length;Y++){let ze=ft[Y].image[Re].image;pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y+1,0,0,ze.width,ze.height,dt,it,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y+1,Ye,ze.width,ze.height,0,dt,it,ze.data)}}else{pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,dt,it,me[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ye,dt,it,me[Re]);for(let Y=0;Y<ft.length;Y++){let Be=ft[Y];pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y+1,0,0,dt,it,Be.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Y+1,Ye,dt,it,Be.image[Re])}}}M(P,mt)&&v(i.TEXTURE_CUBE_MAP),we.__version=Me.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function He(L,P,te,de,Me,we){let qe=r.convert(te.format,te.colorSpace),ke=r.convert(te.type),We=S(te.internalFormat,qe,ke,te.colorSpace);if(!n.get(P).__hasExternalTextures){let ct=Math.max(1,P.width>>we),me=Math.max(1,P.height>>we);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,we,We,ct,me,P.depth,0,qe,ke,null):t.texImage2D(Me,we,We,ct,me,0,qe,ke,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),he(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,Me,n.get(te).__webglTexture,0,Ee(P)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,Me,n.get(te).__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(L,P,te){if(i.bindRenderbuffer(i.RENDERBUFFER,L),P.depthBuffer&&!P.stencilBuffer){let de=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(te||he(P)){let Me=P.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Gi?de=i.DEPTH_COMPONENT32F:Me.type===Hi&&(de=i.DEPTH_COMPONENT24));let we=Ee(P);he(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,de,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,we,de,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(P.depthBuffer&&P.stencilBuffer){let de=Ee(P);te&&he(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,P.width,P.height):he(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{let de=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Me=0;Me<de.length;Me++){let we=de[Me],qe=r.convert(we.format,we.colorSpace),ke=r.convert(we.type),We=S(we.internalFormat,qe,ke,we.colorSpace),nt=Ee(P);te&&he(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,We,P.width,P.height):he(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,We,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,We,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(L,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W(P.depthTexture,0);let de=n.get(P.depthTexture).__webglTexture,Me=Ee(P);if(P.depthTexture.format===ms)he(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(P.depthTexture.format===er)he(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Xe(L){let P=n.get(L),te=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!P.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Fe(P.__webglFramebuffer,L)}else if(te){P.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[de]),P.__webglDepthbuffer[de]=i.createRenderbuffer(),$e(P.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),$e(P.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(L,P,te){let de=n.get(L);P!==void 0&&He(de.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Xe(L)}function B(L){let P=L.texture,te=n.get(L),de=n.get(P);L.addEventListener("dispose",F),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=P.version,a.memory.textures++);let Me=L.isWebGLCubeRenderTarget===!0,we=L.isWebGLMultipleRenderTargets===!0,qe=g(L)||o;if(Me){te.__webglFramebuffer=[];for(let ke=0;ke<6;ke++)if(o&&P.mipmaps&&P.mipmaps.length>0){te.__webglFramebuffer[ke]=[];for(let We=0;We<P.mipmaps.length;We++)te.__webglFramebuffer[ke][We]=i.createFramebuffer()}else te.__webglFramebuffer[ke]=i.createFramebuffer()}else{if(o&&P.mipmaps&&P.mipmaps.length>0){te.__webglFramebuffer=[];for(let ke=0;ke<P.mipmaps.length;ke++)te.__webglFramebuffer[ke]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(we)if(s.drawBuffers){let ke=L.texture;for(let We=0,nt=ke.length;We<nt;We++){let ct=n.get(ke[We]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&he(L)===!1){let ke=we?P:[P];te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let We=0;We<ke.length;We++){let nt=ke[We];te.__webglColorRenderbuffer[We]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[We]);let ct=r.convert(nt.format,nt.colorSpace),me=r.convert(nt.type),ut=S(nt.internalFormat,ct,me,nt.colorSpace,L.isXRRenderTarget===!0),mt=Ee(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,ut,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,te.__webglColorRenderbuffer[We])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),oe(i.TEXTURE_CUBE_MAP,P,qe);for(let ke=0;ke<6;ke++)if(o&&P.mipmaps&&P.mipmaps.length>0)for(let We=0;We<P.mipmaps.length;We++)He(te.__webglFramebuffer[ke][We],L,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,We);else He(te.__webglFramebuffer[ke],L,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0);M(P,qe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){let ke=L.texture;for(let We=0,nt=ke.length;We<nt;We++){let ct=ke[We],me=n.get(ct);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),oe(i.TEXTURE_2D,ct,qe),He(te.__webglFramebuffer,L,ct,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,0),M(ct,qe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ke=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?ke=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ke,de.__webglTexture),oe(ke,P,qe),o&&P.mipmaps&&P.mipmaps.length>0)for(let We=0;We<P.mipmaps.length;We++)He(te.__webglFramebuffer[We],L,P,i.COLOR_ATTACHMENT0,ke,We);else He(te.__webglFramebuffer,L,P,i.COLOR_ATTACHMENT0,ke,0);M(P,qe)&&v(ke),t.unbindTexture()}L.depthBuffer&&Xe(L)}function Pe(L){let P=g(L)||o,te=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,Me=te.length;de<Me;de++){let we=te[de];if(M(we,P)){let qe=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ke=n.get(we).__webglTexture;t.bindTexture(qe,ke),v(qe),t.unbindTexture()}}}function ue(L){if(o&&L.samples>0&&he(L)===!1){let P=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],te=L.width,de=L.height,Me=i.COLOR_BUFFER_BIT,we=[],qe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(L),We=L.isWebGLMultipleRenderTargets===!0;if(We)for(let nt=0;nt<P.length;nt++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let nt=0;nt<P.length;nt++){we.push(i.COLOR_ATTACHMENT0+nt),L.depthBuffer&&we.push(qe);let ct=ke.__ignoreDepthValues!==void 0?ke.__ignoreDepthValues:!1;if(ct===!1&&(L.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),We&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[nt]),ct===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qe])),We){let me=n.get(P[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,te,de,0,0,te,de,Me,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),We)for(let nt=0;nt<P.length;nt++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,ke.__webglColorRenderbuffer[nt]);let ct=n.get(P[nt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}}function Ee(L){return Math.min(s.maxSamples,L.samples)}function he(L){let P=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ze(L){let P=a.render.frame;u.get(L)!==P&&(u.set(L,P),L.update())}function Ce(L,P){let te=L.colorSpace,de=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dl||te!==Ai&&te!==Kn&&(Nt.getTransfer(te)===Wt?o===!1?e.has("EXT_sRGB")===!0&&de===Gn?(L.format=Dl,L.minFilter=Jn,L.generateMipmaps=!1):P=Ka.sRGBToLinear(P):(de!==Gn||Me!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),P}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=ee,this.rebindTextures=Ue,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=He,this.useMultisampledRTT=he}function ax(i,e,t){let n=t.isWebGL2;function s(r,a=Kn){let o,c=Nt.getTransfer(a);if(r===Wi)return i.UNSIGNED_BYTE;if(r===Mu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qd)return i.BYTE;if(r===ef)return i.SHORT;if(r===Sc)return i.UNSIGNED_SHORT;if(r===vu)return i.INT;if(r===Hi)return i.UNSIGNED_INT;if(r===Gi)return i.FLOAT;if(r===ri)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===tf)return i.ALPHA;if(r===Gn)return i.RGBA;if(r===nf)return i.LUMINANCE;if(r===sf)return i.LUMINANCE_ALPHA;if(r===ms)return i.DEPTH_COMPONENT;if(r===er)return i.DEPTH_STENCIL;if(r===Dl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rf)return i.RED;if(r===wu)return i.RED_INTEGER;if(r===af)return i.RG;if(r===Su)return i.RG_INTEGER;if(r===Eu)return i.RGBA_INTEGER;if(r===Xo||r===qo||r===Yo||r===Zo)if(c===Wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wc||r===Xc||r===qc||r===Yc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Wc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zc||r===Jc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zc)return c===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Jc)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kc||r===$c||r===jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===lh||r===ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Kc)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$c)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===th)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===oh)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ch)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jo||r===hh||r===uh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Jo)return c===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===of||r===dh||r===fh||r===ph)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ps?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Yl=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rt=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ox={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(h,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,x=.005;h.inputState.pinching&&p>f+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=f-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zl=class extends Yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,p=null,f=null,x=null,_=t.getContextAttributes(),g=null,m=null,M=[],v=[],S=new Ae,D=null,I=new mn;I.layers.enable(1),I.viewport=new $t;let C=new mn;C.layers.enable(2),C.viewport=new $t;let F=[I,C],E=new Yl;E.layers.enable(1),E.layers.enable(2);let y=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=M[oe];return ye===void 0&&(ye=new Lr,M[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=M[oe];return ye===void 0&&(ye=new Lr,M[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=M[oe];return ye===void 0&&(ye=new Lr,M[oe]=ye),ye.getHandSpace()};function O(oe){let ye=v.indexOf(oe.inputSource);if(ye===-1)return;let Te=M[ye];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,h||a),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",U);for(let oe=0;oe<M.length;oe++){let ye=v[oe];ye!==null&&(v[oe]=null,M[oe].disconnect(ye))}y=null,N=null,e.setRenderTarget(g),f=null,p=null,d=null,s=null,m=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ye={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ye=null,Te=null,Qe=null;_.depth&&(Qe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?er:ms,Te=_.stencil?ps:Hi);let He={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Dn(p.textureWidth,p.textureHeight,{format:Gn,type:Wi,depthTexture:new ro(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let $e=e.properties.get(m);$e.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(oe){for(let ye=0;ye<oe.removed.length;ye++){let Te=oe.removed[ye],Qe=v.indexOf(Te);Qe>=0&&(v[Qe]=null,M[Qe].disconnect(Te))}for(let ye=0;ye<oe.added.length;ye++){let Te=oe.added[ye],Qe=v.indexOf(Te);if(Qe===-1){for(let $e=0;$e<M.length;$e++)if($e>=v.length){v.push(Te),Qe=$e;break}else if(v[$e]===null){v[$e]=Te,Qe=$e;break}if(Qe===-1)break}let He=M[Qe];He&&He.connect(Te)}}let b=new G,W=new G;function j(oe,ye,Te){b.setFromMatrixPosition(ye.matrixWorld),W.setFromMatrixPosition(Te.matrixWorld);let Qe=b.distanceTo(W),He=ye.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Fe=He[14]/(He[10]-1),Xe=He[14]/(He[10]+1),Ue=(He[9]+1)/He[5],B=(He[9]-1)/He[5],Pe=(He[8]-1)/He[0],ue=($e[8]+1)/$e[0],Ee=Fe*Pe,he=Fe*ue,Ze=Qe/(-Pe+ue),Ce=Ze*-Pe;ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ce),oe.translateZ(Ze),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();let L=Fe+Ze,P=Xe+Ze,te=Ee-Ce,de=he+(Qe-Ce),Me=Ue*Xe/P*L,we=B*Xe/P*L;oe.projectionMatrix.makePerspective(te,de,Me,we,L,P),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function z(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;E.near=C.near=I.near=oe.near,E.far=C.far=I.far=oe.far,(y!==E.near||N!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),y=E.near,N=E.far);let ye=oe.parent,Te=E.cameras;z(E,ye);for(let Qe=0;Qe<Te.length;Qe++)z(Te[Qe],ye);Te.length===2?j(E,I,C):E.projectionMatrix.copy(I.projectionMatrix),ee(oe,E,ye)};function ee(oe,ye,Te){Te===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Za*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(oe){c=oe,p!==null&&(p.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)};let be=null;function fe(oe,ye){if(u=ye.getViewerPose(h||a),x=ye,u!==null){let Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Qe=!1;Te.length!==E.cameras.length&&(E.cameras.length=0,Qe=!0);for(let He=0;He<Te.length;He++){let $e=Te[He],Fe=null;if(f!==null)Fe=f.getViewport($e);else{let Ue=d.getViewSubImage(p,$e);Fe=Ue.viewport,He===0&&(e.setRenderTargetTextures(m,Ue.colorTexture,p.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(m))}let Xe=F[He];Xe===void 0&&(Xe=new mn,Xe.layers.enable(He),Xe.viewport=new $t,F[He]=Xe),Xe.matrix.fromArray($e.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray($e.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),He===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Qe===!0&&E.cameras.push(Xe)}}for(let Te=0;Te<M.length;Te++){let Qe=v[Te],He=M[Te];Qe!==null&&He!==void 0&&He.update(Qe,ye,h||a)}be&&be(oe,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),x=null}let Le=new Lu;Le.setAnimationLoop(fe),this.setAnimationLoop=function(oe){be=oe},this.dispose=function(){}}};function lx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Iu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,M,v):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){let S=v.program;n.uniformBlockBinding(M,S)}function h(M,v){let S=s[M.id];S===void 0&&(x(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",g));let D=v.program;n.updateUBOMapping(M,D);let I=e.render.frame;r[M.id]!==I&&(p(M),r[M.id]=I)}function u(M){let v=d();M.__bindingPointIndex=v;let S=i.createBuffer(),D=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let v=s[M.id],S=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let I=0,C=S.length;I<C;I++){let F=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,y=F.length;E<y;E++){let N=F[E];if(f(N,I,E,D)===!0){let O=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value],U=0;for(let b=0;b<Q.length;b++){let W=Q[b],j=_(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+U,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,U),U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,S,D){let I=M.value,C=v+"_"+S;if(D[C]===void 0)return typeof I=="number"||typeof I=="boolean"?D[C]=I:D[C]=I.clone(),!0;{let F=D[C];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return D[C]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function x(M){let v=M.uniforms,S=0,D=16;for(let C=0,F=v.length;C<F;C++){let E=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,N=E.length;y<N;y++){let O=E[y],Q=Array.isArray(O.value)?O.value:[O.value];for(let U=0,b=Q.length;U<b;U++){let W=Q[U],j=_(W),z=S%D;z!==0&&D-z<j.boundary&&(S+=D-z),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=j.storage}}}let I=S%D;return I>0&&(S+=D-I),M.__size=S,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:h,dispose:m}}var xs=class{constructor(e={}){let{canvas:t=_f(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),x=new Int32Array(4),_=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;let v=this,S=!1,D=0,I=0,C=null,F=-1,E=null,y=new $t,N=new $t,O=null,Q=new at(0),U=0,b=t.width,W=t.height,j=1,z=null,ee=null,be=new $t(0,0,b,W),fe=new $t(0,0,b,W),Le=!1,oe=new Nr,ye=!1,Te=!1,Qe=null,He=new zt,$e=new Ae,Fe=new G,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?j:1}let B=n;function Pe(A,Z){for(let se=0;se<A.length;se++){let ie=A[se],w=t.getContext(ie,Z);if(w!==null)return w}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",Be,!1),B===null){let Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),B=Pe(Z,A),B===null)throw Pe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,Ee,he,Ze,Ce,L,P,te,de,Me,we,qe,ke,We,nt,ct,me,ut,mt,dt,it,Ye,pt,St;function Ut(){ue=new Rm(B),Ee=new bm(B,ue,e),ue.init(Ee),Ye=new ax(B,ue,Ee),he=new sx(B,ue,Ee),Ze=new Im(B),Ce=new qg,L=new rx(B,ue,he,Ce,Ee,Ye,Ze),P=new Sm(v),te=new Am(v),de=new Ff(B,Ee),pt=new vm(B,ue,de,Ee),Me=new Cm(B,de,Ze,pt),we=new zm(B,Me,de,Ze),mt=new Um(B,Ee,L),ct=new wm(Ce),qe=new Xg(v,P,te,ue,Ee,pt,ct),ke=new lx(v,Ce),We=new Zg,nt=new ex(ue,Ee),ut=new _m(v,P,te,he,we,p,c),me=new ix(v,we,Ee),St=new cx(B,Ze,Ee,he),dt=new Mm(B,ue,Ze,Ee),it=new Pm(B,ue,Ze,Ee),Ze.programs=qe.programs,v.capabilities=Ee,v.extensions=ue,v.properties=Ce,v.renderLists=We,v.shadowMap=me,v.state=he,v.info=Ze}Ut();let ft=new Zl(v,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(b,W,!1))},this.getSize=function(A){return A.set(b,W)},this.setSize=function(A,Z,se=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=A,W=Z,t.width=Math.floor(A*j),t.height=Math.floor(Z*j),se===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(b*j,W*j).floor()},this.setDrawingBufferSize=function(A,Z,se){b=A,W=Z,j=se,t.width=Math.floor(A*se),t.height=Math.floor(Z*se),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,Z,se,ie){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,Z,se,ie),he.viewport(y.copy(be).multiplyScalar(j).floor())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,Z,se,ie){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,Z,se,ie),he.scissor(N.copy(fe).multiplyScalar(j).floor())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){he.setScissorTest(Le=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(A=!0,Z=!0,se=!0){let ie=0;if(A){let w=!1;if(C!==null){let H=C.texture.format;w=H===Eu||H===Su||H===wu}if(w){let H=C.texture.type,J=H===Wi||H===Hi||H===Sc||H===ps||H===Mu||H===bu,re=ut.getClearColor(),pe=ut.getClearAlpha(),ce=re.r,_e=re.g,De=re.b;J?(f[0]=ce,f[1]=_e,f[2]=De,f[3]=pe,B.clearBufferuiv(B.COLOR,0,f)):(x[0]=ce,x[1]=_e,x[2]=De,x[3]=pe,B.clearBufferiv(B.COLOR,0,x))}else ie|=B.COLOR_BUFFER_BIT}Z&&(ie|=B.DEPTH_BUFFER_BIT),se&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),We.dispose(),nt.dispose(),Ce.dispose(),P.dispose(),te.dispose(),we.dispose(),pt.dispose(),St.dispose(),qe.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",_t),ft.removeEventListener("sessionend",Et),Qe&&(Qe.dispose(),Qe=null),Oe.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=Ze.autoReset,Z=me.enabled,se=me.autoUpdate,ie=me.needsUpdate,w=me.type;Ut(),Ze.autoReset=A,me.enabled=Z,me.autoUpdate=se,me.needsUpdate=ie,me.type=w}function Be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){let Z=A.target;Z.removeEventListener("dispose",ze),st(Z)}function st(A){et(A),Ce.remove(A)}function et(A){let Z=Ce.get(A).programs;Z!==void 0&&(Z.forEach(function(se){qe.releaseProgram(se)}),A.isShaderMaterial&&qe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,se,ie,w,H){Z===null&&(Z=Xe);let J=w.isMesh&&w.matrixWorld.determinant()<0,re=gt(A,Z,se,ie,w);he.setMaterial(ie,J);let pe=se.index,ce=1;if(ie.wireframe===!0){if(pe=Me.getWireframeAttribute(se),pe===void 0)return;ce=2}let _e=se.drawRange,De=se.attributes.position,je=_e.start*ce,Tt=(_e.start+_e.count)*ce;H!==null&&(je=Math.max(je,H.start*ce),Tt=Math.min(Tt,(H.start+H.count)*ce)),pe!==null?(je=Math.max(je,0),Tt=Math.min(Tt,pe.count)):De!=null&&(je=Math.max(je,0),Tt=Math.min(Tt,De.count));let xt=Tt-je;if(xt<0||xt===1/0)return;pt.setup(w,ie,re,se,pe);let Ft,It=dt;if(pe!==null&&(Ft=de.get(pe),It=it,It.setIndex(Ft)),w.isMesh)ie.wireframe===!0?(he.setLineWidth(ie.wireframeLinewidth*Ue()),It.setMode(B.LINES)):It.setMode(B.TRIANGLES);else if(w.isLine){let ge=ie.linewidth;ge===void 0&&(ge=1),he.setLineWidth(ge*Ue()),w.isLineSegments?It.setMode(B.LINES):w.isLineLoop?It.setMode(B.LINE_LOOP):It.setMode(B.LINE_STRIP)}else w.isPoints?It.setMode(B.POINTS):w.isSprite&&It.setMode(B.TRIANGLES);if(w.isBatchedMesh)It.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else if(w.isInstancedMesh)It.renderInstances(je,xt,w.count);else if(se.isInstancedBufferGeometry){let ge=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,l=Math.min(se.instanceCount,ge);It.renderInstances(je,xt,l)}else It.render(je,xt)};function bt(A,Z,se){A.transparent===!0&&A.side===nn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,ne(A,Z,se),A.side=qi,A.needsUpdate=!0,ne(A,Z,se),A.side=nn):ne(A,Z,se)}this.compile=function(A,Z,se=null){se===null&&(se=A),g=nt.get(se),g.init(),M.push(g),se.traverseVisible(function(w){w.isLight&&w.layers.test(Z.layers)&&(g.pushLight(w),w.castShadow&&g.pushShadow(w))}),A!==se&&A.traverseVisible(function(w){w.isLight&&w.layers.test(Z.layers)&&(g.pushLight(w),w.castShadow&&g.pushShadow(w))}),g.setupLights(v._useLegacyLights);let ie=new Set;return A.traverse(function(w){let H=w.material;if(H)if(Array.isArray(H))for(let J=0;J<H.length;J++){let re=H[J];bt(re,se,w),ie.add(re)}else bt(H,se,w),ie.add(H)}),M.pop(),g=null,ie},this.compileAsync=function(A,Z,se=null){let ie=this.compile(A,Z,se);return new Promise(w=>{function H(){if(ie.forEach(function(J){Ce.get(J).currentProgram.isReady()&&ie.delete(J)}),ie.size===0){w(A);return}setTimeout(H,10)}ue.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let Ct=null;function ht(A){Ct&&Ct(A)}function _t(){Oe.stop()}function Et(){Oe.start()}let Oe=new Lu;Oe.setAnimationLoop(ht),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(A){Ct=A,ft.setAnimationLoop(A),A===null?Oe.stop():Oe.start()},ft.addEventListener("sessionstart",_t),ft.addEventListener("sessionend",Et),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Z),Z=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,Z,C),g=nt.get(A,M.length),g.init(),M.push(g),He.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),oe.setFromProjectionMatrix(He),Te=this.localClippingEnabled,ye=ct.init(this.clippingPlanes,Te),_=We.get(A,m.length),_.init(),m.push(_),Zt(A,Z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,ee),this.info.render.frame++,ye===!0&&ct.beginShadows();let se=g.state.shadowsArray;if(me.render(se,A,Z),ye===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(_,A),g.setupLights(v._useLegacyLights),Z.isArrayCamera){let ie=Z.cameras;for(let w=0,H=ie.length;w<H;w++){let J=ie[w];Vt(_,A,J,J.viewport)}}else Vt(_,A,Z);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,Z),pt.resetDefaultState(),F=-1,E=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Zt(A,Z,se,ie){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){ie&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(He);let J=we.update(A),re=A.material;re.visible&&_.push(A,J,re,se,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){let J=we.update(A),re=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Fe.copy(J.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(He)),Array.isArray(re)){let pe=J.groups;for(let ce=0,_e=pe.length;ce<_e;ce++){let De=pe[ce],je=re[De.materialIndex];je&&je.visible&&_.push(A,J,je,se,Fe.z,De)}}else re.visible&&_.push(A,J,re,se,Fe.z,null)}}let H=A.children;for(let J=0,re=H.length;J<re;J++)Zt(H[J],Z,se,ie)}function Vt(A,Z,se,ie){let w=A.opaque,H=A.transmissive,J=A.transparent;g.setupLightsView(se),ye===!0&&ct.setGlobalState(v.clippingPlanes,se),H.length>0&&bn(w,H,Z,se),ie&&he.viewport(y.copy(ie)),w.length>0&&V(w,Z,se),H.length>0&&V(H,Z,se),J.length>0&&V(J,Z,se),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function bn(A,Z,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;let H=Ee.isWebGL2;Qe===null&&(Qe=new Dn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?ri:Wi,minFilter:Or,samples:H?4:0})),v.getDrawingBufferSize($e),H?Qe.setSize($e.x,$e.y):Qe.setSize(Ul($e.x),Ul($e.y));let J=v.getRenderTarget();v.setRenderTarget(Qe),v.getClearColor(Q),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();let re=v.toneMapping;v.toneMapping=fi,V(A,se,ie),L.updateMultisampleRenderTarget(Qe),L.updateRenderTargetMipmap(Qe);let pe=!1;for(let ce=0,_e=Z.length;ce<_e;ce++){let De=Z[ce],je=De.object,Tt=De.geometry,xt=De.material,Ft=De.group;if(xt.side===nn&&je.layers.test(ie.layers)){let It=xt.side;xt.side=ln,xt.needsUpdate=!0,$(je,se,ie,Tt,xt,Ft),xt.side=It,xt.needsUpdate=!0,pe=!0}}pe===!0&&(L.updateMultisampleRenderTarget(Qe),L.updateRenderTargetMipmap(Qe)),v.setRenderTarget(J),v.setClearColor(Q,U),v.toneMapping=re}function V(A,Z,se){let ie=Z.isScene===!0?Z.overrideMaterial:null;for(let w=0,H=A.length;w<H;w++){let J=A[w],re=J.object,pe=J.geometry,ce=ie===null?J.material:ie,_e=J.group;re.layers.test(se.layers)&&$(re,Z,se,pe,ce,_e)}}function $(A,Z,se,ie,w,H){A.onBeforeRender(v,Z,se,ie,w,H),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),w.onBeforeRender(v,Z,se,ie,A,H),w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,v.renderBufferDirect(se,Z,ie,w,A,H),w.side=qi,w.needsUpdate=!0,v.renderBufferDirect(se,Z,ie,w,A,H),w.side=nn):v.renderBufferDirect(se,Z,ie,w,A,H),A.onAfterRender(v,Z,se,ie,w,H)}function ne(A,Z,se){Z.isScene!==!0&&(Z=Xe);let ie=Ce.get(A),w=g.state.lights,H=g.state.shadowsArray,J=w.state.version,re=qe.getParameters(A,w.state,H,Z,se),pe=qe.getProgramCacheKey(re),ce=ie.programs;ie.environment=A.isMeshStandardMaterial?Z.environment:null,ie.fog=Z.fog,ie.envMap=(A.isMeshStandardMaterial?te:P).get(A.envMap||ie.environment),ce===void 0&&(A.addEventListener("dispose",ze),ce=new Map,ie.programs=ce);let _e=ce.get(pe);if(_e!==void 0){if(ie.currentProgram===_e&&ie.lightsStateVersion===J)return tt(A,re),_e}else re.uniforms=qe.getUniforms(A),A.onBuild(se,re,v),A.onBeforeCompile(re,v),_e=qe.acquireProgram(re,pe),ce.set(pe,_e),ie.uniforms=re.uniforms;let De=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=ct.uniform),tt(A,re),ie.needsLights=Ge(A),ie.lightsStateVersion=J,ie.needsLights&&(De.ambientLightColor.value=w.state.ambient,De.lightProbe.value=w.state.probe,De.directionalLights.value=w.state.directional,De.directionalLightShadows.value=w.state.directionalShadow,De.spotLights.value=w.state.spot,De.spotLightShadows.value=w.state.spotShadow,De.rectAreaLights.value=w.state.rectArea,De.ltc_1.value=w.state.rectAreaLTC1,De.ltc_2.value=w.state.rectAreaLTC2,De.pointLights.value=w.state.point,De.pointLightShadows.value=w.state.pointShadow,De.hemisphereLights.value=w.state.hemi,De.directionalShadowMap.value=w.state.directionalShadowMap,De.directionalShadowMatrix.value=w.state.directionalShadowMatrix,De.spotShadowMap.value=w.state.spotShadowMap,De.spotLightMatrix.value=w.state.spotLightMatrix,De.spotLightMap.value=w.state.spotLightMap,De.pointShadowMap.value=w.state.pointShadowMap,De.pointShadowMatrix.value=w.state.pointShadowMatrix),ie.currentProgram=_e,ie.uniformsList=null,_e}function Ie(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=$s.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function tt(A,Z){let se=Ce.get(A);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function gt(A,Z,se,ie,w){Z.isScene!==!0&&(Z=Xe),L.resetTextureUnits();let H=Z.fog,J=ie.isMeshStandardMaterial?Z.environment:null,re=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,pe=(ie.isMeshStandardMaterial?te:P).get(ie.envMap||J),ce=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,_e=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),De=!!se.morphAttributes.position,je=!!se.morphAttributes.normal,Tt=!!se.morphAttributes.color,xt=fi;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=v.toneMapping);let Ft=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,It=Ft!==void 0?Ft.length:0,ge=Ce.get(ie),l=g.state.lights;if(ye===!0&&(Te===!0||A!==E)){let ve=A===E&&ie.id===F;ct.setState(ie,A,ve)}let R=!1;ie.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==l.state.version||ge.outputColorSpace!==re||w.isBatchedMesh&&ge.batching===!1||!w.isBatchedMesh&&ge.batching===!0||w.isInstancedMesh&&ge.instancing===!1||!w.isInstancedMesh&&ge.instancing===!0||w.isSkinnedMesh&&ge.skinning===!1||!w.isSkinnedMesh&&ge.skinning===!0||w.isInstancedMesh&&ge.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&ge.instancingColor===!1&&w.instanceColor!==null||ge.envMap!==pe||ie.fog===!0&&ge.fog!==H||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ct.numPlanes||ge.numIntersection!==ct.numIntersection)||ge.vertexAlphas!==ce||ge.vertexTangents!==_e||ge.morphTargets!==De||ge.morphNormals!==je||ge.morphColors!==Tt||ge.toneMapping!==xt||Ee.isWebGL2===!0&&ge.morphTargetsCount!==It)&&(R=!0):(R=!0,ge.__version=ie.version);let T=ge.currentProgram;R===!0&&(T=ne(ie,Z,w));let k=!1,X=!1,q=!1,K=T.getUniforms(),le=ge.uniforms;if(he.useProgram(T.program)&&(k=!0,X=!0,q=!0),ie.id!==F&&(F=ie.id,X=!0),k||E!==A){K.setValue(B,"projectionMatrix",A.projectionMatrix),K.setValue(B,"viewMatrix",A.matrixWorldInverse);let ve=K.map.cameraPosition;ve!==void 0&&ve.setValue(B,Fe.setFromMatrixPosition(A.matrixWorld)),Ee.logarithmicDepthBuffer&&K.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&K.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,X=!0,q=!0)}if(w.isSkinnedMesh){K.setOptional(B,w,"bindMatrix"),K.setOptional(B,w,"bindMatrixInverse");let ve=w.skeleton;ve&&(Ee.floatVertexTextures?(ve.boneTexture===null&&ve.computeBoneTexture(),K.setValue(B,"boneTexture",ve.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}w.isBatchedMesh&&(K.setOptional(B,w,"batchingTexture"),K.setValue(B,"batchingTexture",w._matricesTexture,L));let xe=se.morphAttributes;if((xe.position!==void 0||xe.normal!==void 0||xe.color!==void 0&&Ee.isWebGL2===!0)&&mt.update(w,se,T),(X||ge.receiveShadow!==w.receiveShadow)&&(ge.receiveShadow=w.receiveShadow,K.setValue(B,"receiveShadow",w.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(le.envMap.value=pe,le.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),X&&(K.setValue(B,"toneMappingExposure",v.toneMappingExposure),ge.needsLights&&rt(le,q),H&&ie.fog===!0&&ke.refreshFogUniforms(le,H),ke.refreshMaterialUniforms(le,ie,j,W,Qe),$s.upload(B,Ie(ge),le,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&($s.upload(B,Ie(ge),le,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&K.setValue(B,"center",w.center),K.setValue(B,"modelViewMatrix",w.modelViewMatrix),K.setValue(B,"normalMatrix",w.normalMatrix),K.setValue(B,"modelMatrix",w.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let ve=ie.uniformsGroups;for(let Se=0,lt=ve.length;Se<lt;Se++)if(Ee.isWebGL2){let Ke=ve[Se];St.update(Ke,T),St.bind(Ke,T)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return T}function rt(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Ge(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,Z,se){Ce.get(A.texture).__webglTexture=Z,Ce.get(A.depthTexture).__webglTexture=se;let ie=Ce.get(A);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=se===void 0,ie.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Z){let se=Ce.get(A);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,se=0){C=A,D=Z,I=se;let ie=!0,w=null,H=!1,J=!1;if(A){let pe=Ce.get(A);pe.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1):pe.__webglFramebuffer===void 0?L.setupRenderTarget(A):pe.__hasExternalTextures&&L.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);let ce=A.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(J=!0);let _e=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(_e[Z])?w=_e[Z][se]:w=_e[Z],H=!0):Ee.isWebGL2&&A.samples>0&&L.useMultisampledRTT(A)===!1?w=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(_e)?w=_e[se]:w=_e,y.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else y.copy(be).multiplyScalar(j).floor(),N.copy(fe).multiplyScalar(j).floor(),O=Le;if(he.bindFramebuffer(B.FRAMEBUFFER,w)&&Ee.drawBuffers&&ie&&he.drawBuffers(A,w),he.viewport(y),he.scissor(N),he.setScissorTest(O),H){let pe=Ce.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe.__webglTexture,se)}else if(J){let pe=Ce.get(A.texture),ce=Z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,pe.__webglTexture,se||0,ce)}F=-1},this.readRenderTargetPixels=function(A,Z,se,ie,w,H,J){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&J!==void 0&&(re=re[J]),re){he.bindFramebuffer(B.FRAMEBUFFER,re);try{let pe=A.texture,ce=pe.format,_e=pe.type;if(ce!==Gn&&Ye.convert(ce)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let De=_e===ri&&(ue.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ue.has("EXT_color_buffer_float"));if(_e!==Wi&&Ye.convert(_e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(_e===Gi&&(Ee.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ie&&se>=0&&se<=A.height-w&&B.readPixels(Z,se,ie,w,Ye.convert(ce),Ye.convert(_e),H)}finally{let pe=C!==null?Ce.get(C).__webglFramebuffer:null;he.bindFramebuffer(B.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(A,Z,se=0){let ie=Math.pow(2,-se),w=Math.floor(Z.image.width*ie),H=Math.floor(Z.image.height*ie);L.setTexture2D(Z,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,A.x,A.y,w,H),he.unbindTexture()},this.copyTextureToTexture=function(A,Z,se,ie=0){let w=Z.image.width,H=Z.image.height,J=Ye.convert(se.format),re=Ye.convert(se.type);L.setTexture2D(se,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,se.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ie,A.x,A.y,w,H,J,re,Z.image.data):Z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ie,A.x,A.y,Z.mipmaps[0].width,Z.mipmaps[0].height,J,Z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ie,A.x,A.y,J,re,Z.image),ie===0&&se.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,se,ie,w=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let H=A.max.x-A.min.x+1,J=A.max.y-A.min.y+1,re=A.max.z-A.min.z+1,pe=Ye.convert(ie.format),ce=Ye.convert(ie.type),_e;if(ie.isData3DTexture)L.setTexture3D(ie,0),_e=B.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)L.setTexture2DArray(ie,0),_e=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ie.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ie.unpackAlignment);let De=B.getParameter(B.UNPACK_ROW_LENGTH),je=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Tt=B.getParameter(B.UNPACK_SKIP_PIXELS),xt=B.getParameter(B.UNPACK_SKIP_ROWS),Ft=B.getParameter(B.UNPACK_SKIP_IMAGES),It=se.isCompressedTexture?se.mipmaps[w]:se.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),se.isDataTexture||se.isData3DTexture?B.texSubImage3D(_e,w,Z.x,Z.y,Z.z,H,J,re,pe,ce,It.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(_e,w,Z.x,Z.y,Z.z,H,J,re,pe,It.data)):B.texSubImage3D(_e,w,Z.x,Z.y,Z.z,H,J,re,pe,ce,It),B.pixelStorei(B.UNPACK_ROW_LENGTH,De),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft),w===0&&ie.generateMipmaps&&B.generateMipmap(_e),he.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){D=0,I=0,C=null,he.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=Nt.workingColorSpace===To?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?gs:Au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?Kt:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Jl=class extends xs{};Jl.prototype.isWebGL1Renderer=!0;var ao=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ji=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},oo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new G,kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ci=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,Er=new G,Vs=new G,Ws=new G,Xs=new Ae,Tr=new Ae,ku=new zt,Ia=new G,Ar=new G,La=new G,su=new Ae,Ml=new Ae,ru=new Ae,Qi=class extends sn{constructor(e=new Ci){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oo(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new kr(n,3,0,!1)),Gs.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),ku.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Da(Ia.set(-.5,-.5,0),Ws,a,Vs,s,r),Da(Ar.set(.5,-.5,0),Ws,a,Vs,s,r),Da(La.set(.5,.5,0),Ws,a,Vs,s,r),su.set(0,0),Ml.set(1,0),ru.set(1,1);let o=e.ray.intersectTriangle(Ia,Ar,La,!1,Er);if(o===null&&(Da(Ar.set(-.5,.5,0),Ws,a,Vs,s,r),Ml.set(0,1),o=e.ray.intersectTriangle(Ia,La,Ar,!1,Er),o===null))return;let c=e.ray.origin.distanceTo(Er);c<e.near||c>e.far||t.push({distance:c,point:Er.clone(),uv:fs.getInterpolation(Er,Ia,Ar,La,su,Ml,ru,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Da(i,e,t,n,s,r){Xs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Tr.x=r*Xs.x-s*Xs.y,Tr.y=s*Xs.x+r*Xs.y):Tr.copy(Xs),i.copy(e),i.x+=Tr.x,i.y+=Tr.y,i.applyMatrix4(ku)}var lo=class extends Vn{constructor(e=null,t=1,n=1,s,r,a,o,c,h=pn,u=pn,d,p){super(null,a,o,c,h,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new zt,au=new zt,Ua=[],ou=new Ri,hx=new zt,Rr=new Ne,Cr=new Zi,co=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),ou.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(ou)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Cr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),au.multiplyMatrices(n,qs),Rr.matrixWorld=au,Rr.raycast(e,Ua);for(let a=0,o=Ua.length;a<o;a++){let c=Ua[a];c.instanceId=r,c.object=this,t.push(c)}Ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Br=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lu=new zt,Kl=new Qa,za=new Zi,Oa=new G,ho=class extends sn{constructor(e=new Ht,t=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;lu.copy(s).invert(),Kl.copy(e.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=p,_=f;x<_;x++){let g=h.getX(x);Oa.fromBufferAttribute(d,g),cu(Oa,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=p,_=f;x<_;x++)Oa.fromBufferAttribute(d,x),cu(Oa,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cu(i,e,t,n,s,r,a){let o=Kl.distanceSqToPoint(i);if(o<t){let c=new G;Kl.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var On=class extends Vn{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ae:new G);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new G,s=[],r=[],a=[],o=new G,c=new zt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new G)}r[0]=new G,a[0]=new G;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Rn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Rn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Ae,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=h-this.aY;c=p*u-f*d+this.aX,h=p*d+f*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends Hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,d){let p=(a-r)/h-(o-r)/(h+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Na=new G,bl=new Ac,wl=new Ac,Sl=new Ac,jl=class extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Na.subVectors(s[0],s[1]).add(s[0]),h=Na);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Na.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),g=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),bl.initNonuniformCatmullRom(h.x,d.x,p.x,u.x,x,_,g),wl.initNonuniformCatmullRom(h.y,d.y,p.y,u.y,x,_,g),Sl.initNonuniformCatmullRom(h.z,d.z,p.z,u.z,x,_,g)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(h.x,d.x,p.x,u.x,this.tension),wl.initCatmullRom(h.y,d.y,p.y,u.y,this.tension),Sl.initCatmullRom(h.z,d.z,p.z,u.z,this.tension));return n.set(bl.calc(c),wl.calc(c),Sl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ux(i,e){let t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function fx(i,e){return i*i*e}function Dr(i,e,t,n){return ux(i,e)+dx(i,t)+fx(i,n)}function px(i,e){let t=1-i;return t*t*t*e}function mx(i,e){let t=1-i;return 3*t*t*i*e}function gx(i,e){return 3*(1-i)*i*i*e}function xx(i,e){return i*i*i*e}function Ur(i,e,t,n,s){return px(i,e)+mx(i,t)+gx(i,n)+xx(i,s)}var uo=class extends jn{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(e,s.x,r.x,a.x,o.x),Ur(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ql=class extends jn{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(e,s.x,r.x,a.x,o.x),Ur(e,s.y,r.y,a.y,o.y),Ur(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends jn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends jn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends jn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Dr(e,s.x,r.x,a.x),Dr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends jn{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Dr(e,s.x,r.x,a.x),Dr(e,s.y,r.y,a.y),Dr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(hu(o,c.x,h.x,u.x,d.x),hu(o,c.y,h.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},nc=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:jl,CubicBezierCurve:uo,CubicBezierCurve3:Ql,EllipseCurve:Hr,LineCurve:fo,LineCurve3:ec,QuadraticBezierCurve:po,QuadraticBezierCurve3:tc,SplineCurve:mo}),ic=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nc[s.type]().fromJSON(s))}return this}},go=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fo(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new po(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new uo(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let h=new Hr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var pi=class i extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],h=new G,u=new Ae;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let f=n+d/t*s;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vn=class i extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],f=[],x=0,_=[],g=n/2,m=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(p,3)),this.setAttribute("uv",new yt(f,2));function M(){let S=new G,D=new G,I=0,C=(t-e)/n;for(let F=0;F<=r;F++){let E=[],y=F/r,N=y*(t-e)+e;for(let O=0;O<=s;O++){let Q=O/s,U=Q*c+o,b=Math.sin(U),W=Math.cos(U);D.x=N*b,D.y=-y*n+g,D.z=N*W,d.push(D.x,D.y,D.z),S.set(b,C,W).normalize(),p.push(S.x,S.y,S.z),f.push(Q,1-y),E.push(x++)}_.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){let y=_[E][F],N=_[E+1][F],O=_[E+1][F+1],Q=_[E][F+1];u.push(y,N,Q),u.push(N,O,Q),I+=6}h.addGroup(m,I,0),m+=I}function v(S){let D=x,I=new Ae,C=new G,F=0,E=S===!0?e:t,y=S===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*y,0),p.push(0,y,0),f.push(.5,.5),x++;let N=x;for(let O=0;O<=s;O++){let U=O/s*c+o,b=Math.cos(U),W=Math.sin(U);C.x=E*W,C.y=g*y,C.z=E*b,d.push(C.x,C.y,C.z),p.push(0,y,0),I.x=b*.5+.5,I.y=W*.5*y+.5,f.push(I.x,I.y),x++}for(let O=0;O<s;O++){let Q=D+O,U=N+O;S===!0?u.push(U,U+1,Q):u.push(U+1,U,Q),F+=3}h.addGroup(m,F,S===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class i extends vn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class i extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new G,S=new G,D=new G;for(let I=0;I<t.length;I+=3)f(t[I+0],v),f(t[I+1],S),f(t[I+2],D),c(v,S,D,M)}function c(M,v,S,D){let I=D+1,C=[];for(let F=0;F<=I;F++){C[F]=[];let E=M.clone().lerp(S,F/I),y=v.clone().lerp(S,F/I),N=I-F;for(let O=0;O<=N;O++)O===0&&F===I?C[F][O]=E:C[F][O]=E.clone().lerp(y,O/N)}for(let F=0;F<I;F++)for(let E=0;E<2*(I-F)-1;E++){let y=Math.floor(E/2);E%2===0?(p(C[F][y+1]),p(C[F+1][y]),p(C[F][y])):(p(C[F][y+1]),p(C[F+1][y+1]),p(C[F+1][y]))}}function h(M){let v=new G;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function u(){let M=new G;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let S=g(M)/2/Math.PI+.5,D=m(M)/Math.PI+.5;a.push(S,1-D)}x(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],S=a[M+2],D=a[M+4],I=Math.max(v,S,D),C=Math.min(v,S,D);I>.9&&C<.1&&(v<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function f(M,v){let S=M*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){let M=new G,v=new G,S=new G,D=new G,I=new Ae,C=new Ae,F=new Ae;for(let E=0,y=0;E<r.length;E+=9,y+=6){M.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),I.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),F.set(a[y+4],a[y+5]),D.copy(M).add(v).add(S).divideScalar(3);let N=g(D);_(I,y+0,M,N),_(C,y+2,v,N),_(F,y+4,S,N)}}function _(M,v,S,D){D<0&&M.x===1&&(a[v]=M.x-1),S.x===0&&S.z===0&&(a[v]=D/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var mi=class extends go{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new go().fromJSON(s))}return this}},yx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,d,p,f;if(n&&(r=wx(i,e,r,t)),i.length>80*t){o=h=i[0],c=u=i[1];for(let x=t;x<s;x+=t)d=i[x],p=i[x+1],d<o&&(o=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p);f=Math.max(h-o,u-c),f=f!==0?32767/f:0}return Gr(r,a,t,o,c,f,0),a}};function Fu(i,e,t,n,s){let r,a;if(s===Ux(i,e,t,n)>0)for(r=e;r<t;r+=n)a=uu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=uu(r,i[r],i[r+1],a);return a&&Ro(a,a.next)&&(Wr(a),a=a.next),a}function ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ro(t,t.next)||en(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Rx(i,n,s,r);let o=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?vx(i,n,s,r):_x(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),Wr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Mx(ys(i),e,t),Gr(i,e,t,n,s,r,2)):a===2&&bx(i,e,t,n,s,r):Gr(ys(i),e,t,n,s,r,1);break}}}function _x(i){let e=i.prev,t=i,n=i.next;if(en(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,h=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<c?o<h?o:h:c<h?c:h,p=s>r?s>a?s:a:r>a?r:a,f=o>c?o>h?o:h:c>h?c:h,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=d&&x.y<=f&&Js(s,o,r,c,a,h,x.x,x.y)&&en(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function vx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(en(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,d=r.y,p=a.y,f=o<c?o<h?o:h:c<h?c:h,x=u<d?u<p?u:p:d<p?d:p,_=o>c?o>h?o:h:c>h?c:h,g=u>d?u>p?u:p:d>p?d:p,m=sc(f,x,e,t,n),M=sc(_,g,e,t,n),v=i.prevZ,S=i.nextZ;for(;v&&v.z>=m&&S&&S.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==a&&Js(o,u,c,d,h,p,v.x,v.y)&&en(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=f&&S.x<=_&&S.y>=x&&S.y<=g&&S!==s&&S!==a&&Js(o,u,c,d,h,p,S.x,S.y)&&en(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==a&&Js(o,u,c,d,h,p,v.x,v.y)&&en(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=x&&S.y<=g&&S!==s&&S!==a&&Js(o,u,c,d,h,p,S.x,S.y)&&en(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Mx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ro(s,r)&&Bu(s,n,n.next,r)&&Vr(s,r)&&Vr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wr(n),Wr(n.next),n=i=r),n=n.next}while(n!==i);return ys(n)}function bx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let c=Hu(a,o);a=ys(a,a.next),c=ys(c,c.next),Gr(a,e,t,n,s,r,0),Gr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wx(i,e,t,n){let s=[],r,a,o,c,h;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,h=Fu(i,o,c,n,!1),h===h.next&&(h.steiner=!0),s.push(Px(h));for(s.sort(Sx),r=0;r<s.length;r++)t=Ex(s[r],t);return t}function Sx(i,e){return i.x-e.x}function Ex(i,e){let t=Tx(i,e);if(!t)return e;let n=Hu(t,i);return ys(n,n.next),ys(t,t.next)}function Tx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,h=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Js(a<h?r:n,a,c,h,a<h?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Vr(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Ax(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function Ax(i,e){return en(i.prev,i,e.prev)<0&&en(e.next,i,i.next)<0}function Rx(i,e,t,n){let s=i;do s.z===0&&(s.z=sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(i){let e,t,n,s,r,a,o,c,h=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,h*=2}while(a>1);return i}function sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Px(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Js(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ix(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Lx(i,e)&&(Vr(i,e)&&Vr(e,i)&&Dx(i,e)&&(en(i.prev,i,e.prev)||en(i,e.prev,e))||Ro(i,e)&&en(i.prev,i,i.next)>0&&en(e.prev,e,e.next)>0)}function en(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ro(i,e){return i.x===e.x&&i.y===e.y}function Bu(i,e,t,n){let s=Fa(en(i,e,t)),r=Fa(en(i,e,n)),a=Fa(en(t,n,i)),o=Fa(en(t,n,e));return!!(s!==r&&a!==o||s===0&&ka(i,t,e)||r===0&&ka(i,n,e)||a===0&&ka(t,i,n)||o===0&&ka(t,e,n))}function ka(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fa(i){return i>0?1:i<0?-1:0}function Lx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vr(i,e){return en(i.prev,i,i.next)<0?en(i,e,i.next)>=0&&en(i,i.prev,e)>=0:en(i,e,i.prev)<0||en(i,i.next,e)<0}function Dx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hu(i,e){let t=new rc(i.i,i.x,i.y),n=new rc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uu(i,e,t,n){let s=new rc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ux(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];du(e),fu(n,e);let a=e.length;t.forEach(du);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,fu(n,t[c]);let o=yx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ir=class i extends Ht{constructor(e=new mi([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o];a(h)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function a(o){let c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:zx,v,S=!1,D,I,C,F;m&&(v=m.getSpacedPoints(u),S=!0,p=!1,D=m.computeFrenetFrames(u,!1),I=new G,C=new G,F=new G),p||(g=0,f=0,x=0,_=0);let E=o.extractPoints(h),y=E.shape,N=E.holes;if(!Xi.isClockWise(y)){y=y.reverse();for(let B=0,Pe=N.length;B<Pe;B++){let ue=N[B];Xi.isClockWise(ue)&&(N[B]=ue.reverse())}}let Q=Xi.triangulateShape(y,N),U=y;for(let B=0,Pe=N.length;B<Pe;B++){let ue=N[B];y=y.concat(ue)}function b(B,Pe,ue){return Pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Pe,ue)}let W=y.length,j=Q.length;function z(B,Pe,ue){let Ee,he,Ze,Ce=B.x-Pe.x,L=B.y-Pe.y,P=ue.x-B.x,te=ue.y-B.y,de=Ce*Ce+L*L,Me=Ce*te-L*P;if(Math.abs(Me)>Number.EPSILON){let we=Math.sqrt(de),qe=Math.sqrt(P*P+te*te),ke=Pe.x-L/we,We=Pe.y+Ce/we,nt=ue.x-te/qe,ct=ue.y+P/qe,me=((nt-ke)*te-(ct-We)*P)/(Ce*te-L*P);Ee=ke+Ce*me-B.x,he=We+L*me-B.y;let ut=Ee*Ee+he*he;if(ut<=2)return new Ae(Ee,he);Ze=Math.sqrt(ut/2)}else{let we=!1;Ce>Number.EPSILON?P>Number.EPSILON&&(we=!0):Ce<-Number.EPSILON?P<-Number.EPSILON&&(we=!0):Math.sign(L)===Math.sign(te)&&(we=!0),we?(Ee=-L,he=Ce,Ze=Math.sqrt(de)):(Ee=Ce,he=L,Ze=Math.sqrt(de/2))}return new Ae(Ee/Ze,he/Ze)}let ee=[];for(let B=0,Pe=U.length,ue=Pe-1,Ee=B+1;B<Pe;B++,ue++,Ee++)ue===Pe&&(ue=0),Ee===Pe&&(Ee=0),ee[B]=z(U[B],U[ue],U[Ee]);let be=[],fe,Le=ee.concat();for(let B=0,Pe=N.length;B<Pe;B++){let ue=N[B];fe=[];for(let Ee=0,he=ue.length,Ze=he-1,Ce=Ee+1;Ee<he;Ee++,Ze++,Ce++)Ze===he&&(Ze=0),Ce===he&&(Ce=0),fe[Ee]=z(ue[Ee],ue[Ze],ue[Ce]);be.push(fe),Le=Le.concat(fe)}for(let B=0;B<g;B++){let Pe=B/g,ue=f*Math.cos(Pe*Math.PI/2),Ee=x*Math.sin(Pe*Math.PI/2)+_;for(let he=0,Ze=U.length;he<Ze;he++){let Ce=b(U[he],ee[he],Ee);He(Ce.x,Ce.y,-ue)}for(let he=0,Ze=N.length;he<Ze;he++){let Ce=N[he];fe=be[he];for(let L=0,P=Ce.length;L<P;L++){let te=b(Ce[L],fe[L],Ee);He(te.x,te.y,-ue)}}}let oe=x+_;for(let B=0;B<W;B++){let Pe=p?b(y[B],Le[B],oe):y[B];S?(C.copy(D.normals[0]).multiplyScalar(Pe.x),I.copy(D.binormals[0]).multiplyScalar(Pe.y),F.copy(v[0]).add(C).add(I),He(F.x,F.y,F.z)):He(Pe.x,Pe.y,0)}for(let B=1;B<=u;B++)for(let Pe=0;Pe<W;Pe++){let ue=p?b(y[Pe],Le[Pe],oe):y[Pe];S?(C.copy(D.normals[B]).multiplyScalar(ue.x),I.copy(D.binormals[B]).multiplyScalar(ue.y),F.copy(v[B]).add(C).add(I),He(F.x,F.y,F.z)):He(ue.x,ue.y,d/u*B)}for(let B=g-1;B>=0;B--){let Pe=B/g,ue=f*Math.cos(Pe*Math.PI/2),Ee=x*Math.sin(Pe*Math.PI/2)+_;for(let he=0,Ze=U.length;he<Ze;he++){let Ce=b(U[he],ee[he],Ee);He(Ce.x,Ce.y,d+ue)}for(let he=0,Ze=N.length;he<Ze;he++){let Ce=N[he];fe=be[he];for(let L=0,P=Ce.length;L<P;L++){let te=b(Ce[L],fe[L],Ee);S?He(te.x,te.y+v[u-1].y,v[u-1].x+ue):He(te.x,te.y,d+ue)}}}ye(),Te();function ye(){let B=s.length/3;if(p){let Pe=0,ue=W*Pe;for(let Ee=0;Ee<j;Ee++){let he=Q[Ee];$e(he[2]+ue,he[1]+ue,he[0]+ue)}Pe=u+g*2,ue=W*Pe;for(let Ee=0;Ee<j;Ee++){let he=Q[Ee];$e(he[0]+ue,he[1]+ue,he[2]+ue)}}else{for(let Pe=0;Pe<j;Pe++){let ue=Q[Pe];$e(ue[2],ue[1],ue[0])}for(let Pe=0;Pe<j;Pe++){let ue=Q[Pe];$e(ue[0]+W*u,ue[1]+W*u,ue[2]+W*u)}}n.addGroup(B,s.length/3-B,0)}function Te(){let B=s.length/3,Pe=0;Qe(U,Pe),Pe+=U.length;for(let ue=0,Ee=N.length;ue<Ee;ue++){let he=N[ue];Qe(he,Pe),Pe+=he.length}n.addGroup(B,s.length/3-B,1)}function Qe(B,Pe){let ue=B.length;for(;--ue>=0;){let Ee=ue,he=ue-1;he<0&&(he=B.length-1);for(let Ze=0,Ce=u+g*2;Ze<Ce;Ze++){let L=W*Ze,P=W*(Ze+1),te=Pe+Ee+L,de=Pe+he+L,Me=Pe+he+P,we=Pe+Ee+P;Fe(te,de,Me,we)}}}function He(B,Pe,ue){c.push(B),c.push(Pe),c.push(ue)}function $e(B,Pe,ue){Xe(B),Xe(Pe),Xe(ue);let Ee=s.length/3,he=M.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);Ue(he[0]),Ue(he[1]),Ue(he[2])}function Fe(B,Pe,ue,Ee){Xe(B),Xe(Pe),Xe(Ee),Xe(Pe),Xe(ue),Xe(Ee);let he=s.length/3,Ze=M.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Ue(Ze[0]),Ue(Ze[1]),Ue(Ze[3]),Ue(Ze[1]),Ue(Ze[2]),Ue(Ze[3])}function Xe(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function Ue(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ox(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nc[s.type]().fromJSON(s)),new i(n,e.options)}},zx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[s*3],u=e[s*3+1];return[new Ae(r,a),new Ae(o,c),new Ae(h,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],u=e[n*3+1],d=e[n*3+2],p=e[s*3],f=e[s*3+1],x=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Ae(a,1-c),new Ae(h,1-d),new Ae(p,1-x),new Ae(_,1-m)]:[new Ae(o,1-c),new Ae(u,1-d),new Ae(f,1-x),new Ae(g,1-m)]}};function Ox(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yo=class i extends xo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yn=class i extends xo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ai=class i extends Ht{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],d=e,p=(t-e)/s,f=new G,x=new Ae;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),h.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}d+=p}for(let _=0;_<s;_++){let g=_*(n+1);for(let m=0;m<n;m++){let M=m+g,v=M,S=M+n+1,D=M+n+2,I=M+1;o.push(v,S,I),o.push(S,D,I)}}this.setIndex(o),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Xr=class i extends Ht{constructor(e=new mi([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(a,2));function h(u){let d=s.length/3,p=u.extractPoints(t),f=p.shape,x=p.holes;Xi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=x.length;g<m;g++){let M=x[g];Xi.isClockWise(M)===!0&&(x[g]=M.reverse())}let _=Xi.triangulateShape(f,x);for(let g=0,m=x.length;g<m;g++){let M=x[g];f=f.concat(M)}for(let g=0,m=f.length;g<m;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=_.length;g<m;g++){let M=_[g],v=M[0]+d,S=M[1]+d,D=M[2]+d;n.push(v,S,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Nx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Nx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Qn=class i extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],d=new G,p=new G,f=[],x=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,S=0;m===0&&a===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){let I=D/t;d.x=-e*Math.cos(s+I*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+I*r)*Math.sin(a+v*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),g.push(I+S,1-v),M.push(h++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let v=u[m][M+1],S=u[m][M],D=u[m+1][M],I=u[m+1][M+1];(m!==0||a>0)&&f.push(v,S,I),(m!==n-1||c<Math.PI)&&f.push(S,D,I)}this.setIndex(f),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Nn=class i extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new G,d=new G,p=new G;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let _=x/s*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),h.push(x/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let _=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,M=(s+1)*f+x;a.push(_,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _o=class extends $n{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new at(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},vo=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tn=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qr=class extends $n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new at(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mo=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var sr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ac=class extends sr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=e,o=2*t-n;break;case xh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:a=e,c=2*n-t;break;case xh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),_=x*x,g=_*x,m=-p*g+2*p*_-p*x,M=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*x+1,v=(-1-f)*g+(1.5+f)*_+.5*x,S=f*g-f*_;for(let D=0;D!==o;++D)r[D]=m*a[u+D]+M*a[h+D]+v*a[c+D]+S*a[d+D];return r}},oc=class extends sr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*d+a[c+p]*u;return r}},lc=class extends sr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ga:t=this.InterpolantFactoryMethodDiscrete;break;case Va:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&kx(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(s)c=!0;else{let d=o*n,p=d-n,f=d+n;for(let x=0;x!==n;++x){let _=t[d+x];if(_!==t[p+x]||_!==t[f+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Va;var _s=class extends oi{};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ga;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends oi{};cc.prototype.ValueTypeName="color";var hc=class extends oi{};hc.prototype.ValueTypeName="number";var uc=class extends sr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)Wn.slerpFlat(r,0,a,h-o,a,h,c);return r}},Yr=class extends oi{InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.DefaultInterpolation=Va;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends oi{};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ga;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends oi{};dc.prototype.ValueTypeName="vector";var fc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){let d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=h.length;d<p;d+=2){let f=h[d],x=h[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null}}},Fx=new fc,pc=class{constructor(e){this.manager=e!==void 0?e:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ar=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},El=new zt,pu=new G,mu=new G,Zr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=class extends Zr{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Za*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bo=class extends rr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gu=new zt,Pr=new G,Tl=new G,gc=class extends Zr{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pr),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-Pr.x,-Pr.y,-Pr.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}},Xn=class extends rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xc=class extends Zr{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function xu(){return(typeof performance>"u"?Date:performance).now()}var Rc="\\[\\]\\.:\\/",Bx=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",Hx="[^"+Rc.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Vx=/(WCOD+)?/.source.replace("WCOD",Hx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),qx=new RegExp("^"+Gx+Vx+Wx+Xx+"$"),Yx=["material","materials","bones","map"],yc=class{constructor(e,t,n){let s=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=yc;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var hr=class extends ji{constructor(e=null){super();let t=new zn;t.deleteAttribute("uv");let n=new tn({side:ln}),s=new tn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Xn(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ne(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Ne(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let h=new Ne(t,s);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let u=new Ne(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let d=new Ne(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new Ne(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let f=new Ne(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let x=new Ne(t,cr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let _=new Ne(t,cr(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let g=new Ne(t,cr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new Ne(t,cr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new Ne(t,cr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new Ne(t,cr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function cr(i){let e=new Bt;return e.color.setScalar(i),e}function $r(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ht,h=0;for(let u=0;u<i.length;++u){let d=i[u],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,u),h+=f}}if(t){let u=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+u);u+=i[p].attributes.position.count}c.setIndex(d)}for(let u in r){let d=Gu(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<d;++p){let f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][p]);let x=Gu(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function Gu(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let h=0;h<i.length;++h)a.set(i[h].array,o),o+=i[h].array.length;let c=new cn(a,t,n);return s!==void 0&&(c.gpuType=s),c}function dn(i,e=18,t=!0,n=!0){let s=[],r=[];for(let c of i)for(let h=0;h<e;h++){let u=h/e*Math.PI*2,d=Math.cos(u);s.push((c.x||0)+Math.sin(u)*c.rx,c.y,(c.z||0)+d*(d>=0?c.rz:c.rb??c.rz))}for(let c=0;c<i.length-1;c++)for(let h=0;h<e;h++){let u=c*e+h,d=c*e+(h+1)%e,p=u+e,f=d+e;r.push(u,d,p,d,f,p)}let a=i.length;if(t){let c=i[0],h=s.length/3;s.push(c.x||0,c.y,c.z||0);for(let u=0;u<e;u++)r.push(h,(u+1)%e,u)}if(n){let c=i[a-1],h=s.length/3,u=(a-1)*e;s.push(c.x||0,c.y,c.z||0);for(let d=0;d<e;d++)r.push(h,u+d,u+(d+1)%e)}let o=new Ht;return o.setAttribute("position",new yt(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function ns(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let c=o/6,h=e+(t-e)*c;r.push({y:-i*c,rx:h,rz:h*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),dn(r,n)}function ae(i,e,t=0,n=0,s=0){let r=new Ne(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function rn(i=0,e=0,t=0,...n){let s=new Rt;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var Dt=(i,e,t)=>new zn(i,e,t),Gt=(i,e=14,t=10)=>new Qn(i,e,t),jt=(i,e,t,n=12,s=!1)=>new vn(i,e,t,n,1,s),wn=(i,e,t=10)=>new un(i,e,t),Yt=(i,e,t)=>i+(e-i)*t;function li(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var Co=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512]],kn=[10725556,4906624,3718648,11566335,16096779,16731501,16773560];function ci(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],c=i[a],h=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let d=0;d<e;d++){let p=d/e,f={y:Yt(c.y,h.y,p)};for(let x of n){let _=s(o,x),g=s(c,x),m=s(h,x),M=s(u,x),v=.5*(2*g+(-_+m)*p+(2*_-5*g+4*m-M)*p*p+(-_+3*g-3*m+M)*p*p*p);x[0]==="r"&&(v=Math.max(8e-4,Math.min(Math.max(g,m)*1.08,v))),f[x]=v}t.push(f)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function Wu(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,c=e+1;for(let d of i)for(let p=0;p<=e;p++){let f=-Math.PI+p/e*Math.PI*2,x=Math.cos(f);t.push((d.x||0)+Math.sin(f)*d.rx,d.y,(d.z||0)+x*(x>=0?d.rz:d.rb??d.rz)),n.push(p/e,(d.y-a)/(o-a))}for(let d=0;d<r-1;d++)for(let p=0;p<e;p++){let f=d*c+p,x=f+1,_=f+c,g=x+c;s.push(f,x,_,x,g,_)}{let d=i[0],p=t.length/3;t.push(d.x||0,d.y,d.z||0),n.push(.5,0);for(let f=0;f<e;f++)s.push(p,f+1,f)}{let d=i[r-1],p=t.length/3,f=(r-1)*c;t.push(d.x||0,d.y,d.z||0),n.push(.5,1);for(let x=0;x<e;x++)s.push(p,f+x,f+x+1)}let h=new Ht;h.setAttribute("position",new yt(t,3)),h.setAttribute("uv",new yt(n,2)),h.setIndex(s),h.computeVertexNormals();let u=h.attributes.normal;for(let d=0;d<r;d++){let p=d*c,f=p+e,x=u.getX(p)+u.getX(f),_=u.getY(p)+u.getY(f),g=u.getZ(p)+u.getZ(f),m=Math.hypot(x,_,g)||1;u.setXYZ(p,x/m,_/m,g/m),u.setXYZ(f,x/m,_/m,g/m)}return h}function Pi(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),dn(ci(s,2),t)}var Vu={};function Xu(i){let e=i?"s":"h",t=Vu[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=Vu[e]=new lo(s,n.length,1,Gn),t.minFilter=t.magFilter=pn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Pc(i,e){return new qr(Object.assign({color:i,gradientMap:Xu(!0)},e||{}))}function Sn(i,e){return new qr(Object.assign({color:i,gradientMap:Xu()},e||{}))}var ur=null;function qu(){return ur||(ur=new Bt({color:1314586,side:ln}),ur.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},ur.userData.shared=!0,ur)}var Zx=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function Yu(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new zt,r=new zt;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,c=[];r.copy(a.matrixWorld).invert();let h=d=>{for(let p of d.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let f=Zx(p,!!p.material.map);f.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(f),c.push(p)}else!p.isLight&&!p.isSprite&&h(p)};h(a);for(let d of c)d.parent.remove(d),d.geometry.dispose();let u=[];for(let[d,p]of o){let f=p.length>1?$r(p,!1):p[0];p.length>1&&p.forEach(_=>_.dispose());let x=new Ne(f,d);x.castShadow=!0,a.add(x),!d.isMeshBasicMaterial&&!d.userData.noInk&&u.push(f)}if(e&&u.length){let d=u.map(x=>{let _=x.clone();return _.attributes.uv&&_.deleteAttribute("uv"),_}),p=d.length>1?$r(d,!1):d[0];d.length>1&&d.forEach(x=>x.dispose());let f=new Ne(p,qu());f.userData.ink=!0,f.castShadow=!1,a.add(f),n.push(f)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function Po(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new Ne(n.geometry,qu());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function dr(i,e){let t=Co[i][e?1:0];return Sn(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var kt=(i,e,t,n)=>Sn(i,n||void 0),pr={},jr=(i,e)=>pr[i]||(pr[i]=e()),fr=()=>jr("wood",()=>Sn(8016432)),Io=()=>jr("leather",()=>Sn(4861984)),Fn=i=>jr("m"+i,()=>dr(i)),Pn=i=>jr("d"+i,()=>dr(i,!0)),hi=(i,e=1)=>jr("g"+i+e,()=>Sn(kn[i],{emissive:kn[i],emissiveIntensity:e})),Zu=new un(.5,1,5).translate(0,.5,0),Ju=new yn(1),Ku=new vn(1,1,1,10,1,!0),Jx=new Nn(1,.05,6,40),Ii=(i,e)=>new Bt({color:i,transparent:!0,opacity:e,blending:Cn,depthWrite:!1,side:nn}),Ms=(i,e,t)=>{let n=new Ne(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function mr(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=(h,u,d,p)=>{let f=Ii(u,.95),x=[];for(let _=0;_<h;_++){let g=Ms(Ju,f,i);g.scale.set(d,d*1.7,d),x.push(g)}n.push(_=>x.forEach((g,m)=>{let M=_*(1.5+m*.27)+m*2.1,v=(m/h+_*p)%1,S=Math.sin(v*Math.PI);g.position.set(s+Math.cos(M)*(o+.035),t.y0+a*v,r+Math.sin(M)*(o+.035)),g.rotation.y=_*3+m,g.scale.set(d*S,d*1.7*S,d*S)}))};if(e===3)c(3,13215999,.014,.1);else if(e===4){c(6,16767088,.014,.16);let h=Ms(Ku,Ii(16762960,.13),i);h.position.set(s,t.y0+a/2,r),h.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{h.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let h=Ii(16725012,.7),u=Ii(16760906,.85),d=t.mode==="lite",p=d?2:Math.max(3,Math.min(8,Math.round(a/.13))),f=[],x=Math.min(.075,o*1.2+.03)*(d?.62:1);for(let _=0;_<=p;_++){let g=_===p,m=_%2?1:-1,M=x*(g?1.35:1),v=Ms(Zu,h,i);Ms(Zu,u,v).scale.set(.5,.62,.5),v.position.set(s+(g?0:m*Math.min(o,.09)*.7),g?t.y1-M*.4:t.y0+a*(_+.4)/p,r),f.push({f:v,side:g?0:m,sz:M,i:_})}n.push(_=>{for(let g of f){let m=1+.32*Math.sin(_*11+g.i*1.7)+.18*Math.sin(_*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(_*9+g.i)),g.sz*2.3*m,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(_*7+g.i))}}),d||c(4,16742970,.011,.5)}else if(e>=6){let h=t.mode==="lite",u=t.mode==="halo";if(!h&&!u&&o<=.1){let d=Ms(Ku,Ii(16773312,.2),i);d.position.set(s,t.y0+a/2,r),d.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{d.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!h){let d=Ms(Jx,Ii(16771496,.9),i);d.position.set(s,t.y1,r),d.scale.setScalar(Math.min(o+.06,.17)),d.rotation.x=Math.PI/2,n.push(p=>{d.rotation.z=p*1.4,u||(d.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let d=new Rt;d.position.set(s,t.y1+.03,r);let p=Ii(16777215,.95),f=h?.6:1;for(let[x,_,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])Ms(Ju,p,d).scale.set(x*f,_*f,g*f);i.add(d),n.push(x=>{d.rotation.set(x*.7,x*1.1,0),d.scale.setScalar(1+.3*Math.sin(x*4))})}c(h||u?3:6,16774872,.011,.22)}return h=>{for(let u of n)u(h)}}function ju(i,e,t){let n=new mi;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new Xr(n,8),r=[Ii(16771504,.34),Ii(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],c=!0;for(let h of[-1,1]){let u=new Rt;u.position.set(h*.05,e,t),o.forEach(([d,p,f],x)=>{let _=new Ne(s,r[x%2]);_.castShadow=!1,c||(_.userData.sharedGeo=!0),c=!1,_.scale.set(h*p,f*p*1.5,1),_.rotation.z=h*d,_.position.z=-x*.004,u.add(_)}),i.add(u),a.push({piv:u,s:h})}return h=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(h*1.8)*.16);r[0].opacity=.3+Math.sin(h*2.6)*.07}}var $u={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Qu(i,e=0){pr={};let t=new Rt,n=(s,r,a,o)=>{let c=ae(Dt(r,s,.012),Fn(e),0,o/2+s/2,0);t.add(c);let h=ae(wn(r/2,r*1.4,4),Fn(e),0,o/2+s+r*.7,0);if(h.scale.z=.14,h.rotation.y=Math.PI/4,t.add(h),t.add(ae(Dt(r*.22,s*.9,.016),Pn(e),0,o/2+s*.47,0)),t.add(ae(Dt(a,.03,.035),Pn(e),0,o/2+.005,0)),t.add(ae(jt(.016,.016,o,8),Io())),t.add(ae(Gt(.026,8,6),Pn(e),0,-o/2-.015,0)),e>=2&&t.add(ae(new yn(.02),hi(e),0,o/2+.005,.022)),e>=3&&t.add(ae(Dt(.008,s*.75,.02),hi(e,1.4),0,o/2+s*.45,0)),e>=3&&t.add(ae(new yn(.017),hi(e),0,-o/2-.045,0)),e>=4)for(let u of[-1,1]){let d=ae(wn(.018,.09+(e-4)*.025,5),Fn(e),u*a/2,o/2+.045,0);d.rotation.z=-u*.55,t.add(d);let p=ae(wn(.014,.06,5),Pn(e),u*a*.3,o/2-.03,0);p.rotation.z=Math.PI+u*.5,t.add(p)}if(e>=5)for(let u=0;u<3;u++)for(let d of[-1,1]){let p=ae(wn(.012,r*.9,4),Pn(e),d*r*.62,o/2+s*(.25+u*.22),0);p.rotation.z=-d*1.2,p.scale.z=.4,t.add(p)}};switch(i){case"epee":n(.78,.06,.22,.16);break;case"dague":n(.3,.045,.12,.11);break;case"espadon":n(1.15,.11,.36,.3);break;case"lamecle":n(.9,.055,.14,.14),t.add(ae(Dt(.09,.05,.014),Pn(e),.07,.86,0)),t.add(ae(Dt(.07,.05,.014),Pn(e),.06,.74,0));{let s=ae(new Nn(.06,.014,8,20),Pn(e),0,-.14,0);t.add(s)}break;case"masse":t.add(ae(jt(.018,.02,.7,8),fr(),0,.25,0)),t.add(ae(Gt(.085,12,8),Fn(e),0,.64,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=ae(wn(.025,.07,5),Pn(e),Math.sin(r)*.1,.64,Math.cos(r)*.1);a.rotation.set(Math.PI/2*Math.cos(r),0,-Math.PI/2*Math.sin(r)),t.add(a)}e>=2&&t.add(ae(new yn(.03),hi(e),0,.745,0));break;case"guisarme":t.add(ae(jt(.017,.017,1.9,8),fr(),0,.5,0));{let s=ae(wn(.03,.26,4),Fn(e),0,1.57,0);s.scale.z=.3,t.add(s);let r=ae(jt(.2,.2,.014,16,!1),Fn(e),.1,1.28,0);r.rotation.x=Math.PI/2,r.scale.set(1,1,1.25),t.add(r);let a=ae(wn(.04,.16,4),Pn(e),-.08,1.3,0);a.rotation.z=Math.PI/2,a.scale.z=.3,t.add(a),e>=2&&t.add(ae(new yn(.024),hi(e),.02,1.28,.02))}break;case"baton":t.add(ae(jt(.016,.02,1.6,8),fr(),0,.5,0));{let s=ae(new Nn(.085,.014,8,20,Math.PI*1.4),Fn(e),0,1.37,0);s.rotation.z=Math.PI*.8,t.add(s);let r=ae(Gt(.055,14,10),hi(e,1.5),0,1.38,0);t.add(r);let a=new Xn(kn[e],.5,2.5);a.position.set(0,1.38,0),t.add(a)}break;case"arc":{let s=ae(new Nn(.62,.016,8,28,Math.PI*.8),fr(),-.5,.2,0);s.rotation.z=-Math.PI*.4,t.add(s);let r=.2+Math.sin(Math.PI*.4)*.62,a=-.5+Math.cos(Math.PI*.4)*.62;t.add(ae(jt(.003,.003,(r-.2)*2,4),kt(15658734,.5),a,.2,0)),t.add(ae(jt(.022,.022,.14,8),Io(),.12,.2,0)),e>=2&&t.add(ae(new yn(.02),hi(e),.13,.3,0))}break;case"orbe":{t.add(ae(Gt(.09,18,14),kt(kn[e],.1,.1,{emissive:kn[e],emissiveIntensity:1.1})));let s=ae(new Nn(.13,.008,6,28),Fn(e));if(s.rotation.x=1.2,t.add(s),e>=3){let a=ae(new Nn(.15,.006,6,28),Fn(e));a.rotation.set(.4,.8,0),t.add(a)}let r=new Xn(kn[e],.6,3);t.add(r)}break;case"grimoire":t.add(ae(Dt(.2,.27,.06),Io())),t.add(ae(Dt(.18,.25,.064),kt(15327174,.9),.012,0,0)),t.add(ae(Dt(.205,.275,.05),kt(Co[e][1],.6,.3),-.004,0,0)),t.add(ae(new yn(.03),hi(e),0,0,.034));break;case"pistolet":t.add(ae(Dt(.035,.26,.03),Fn(e),0,.16,0)),t.add(ae(jt(.028,.028,.06,10),Pn(e),0,.07,0));{let s=ae(Dt(.034,.13,.04),fr(),0,-.02,-.03);s.rotation.x=-.35,t.add(s)}break;case"repercuteur":{let s=ae(jt(.075,.075,.9,14),Fn(e),0,.35,0);t.add(s),t.add(ae(jt(.09,.09,.06,14),Pn(e),0,.78,0)),t.add(ae(jt(.085,.085,.07,14),Pn(e),0,.2,0)),t.add(ae(Gt(.055,12,8),hi(e,1.6),0,.8,0)),t.add(ae(Dt(.04,.16,.05),Io(),0,.05,-.1))}break;case"harpe":{let s=e>=4?Fn(e):kt(14264636,.3,.85);t.add(ae(jt(.02,.024,.95,8),s,.2,.42,0));let r=ae(new Nn(.3,.02,8,18,Math.PI*.6),s,-.04,.72,0);r.rotation.z=Math.PI*.28,t.add(r);let a=ae(Dt(.05,.92,.07),fr(),-.1,.36,0);a.rotation.z=-.52,t.add(a);for(let o=0;o<7;o++){let c=-.2+o*.055,h=.28+o*.09;t.add(ae(jt(.0022,.0022,h,4),kt(o%3?15985878:kn[e],.4,0,{emissive:o%3?0:kn[e],emissiveIntensity:.8}),c,.84-h/2-Math.abs(3-o)*.012,0))}}break;case"anneaux":{let s=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([r,a],o)=>{t.add(ae(new Nn(.14,.018,8,24),Fn(e),r,a,o*.02)),t.add(ae(Gt(.05,10,8),kt(s[o],.3,0,{emissive:s[o],emissiveIntensity:.6}),r,a,o*.02))})}break}return t.userData.tick=$u[i]?mr(t,e,$u[i]):null,t}function ed(i=0){pr={};let e=new mi;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new ir(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=rn(0,0,0,ae(t,Fn(i)));if(n.add(ae(Dt(.05,.66,.012),Pn(i),0,-.04,.05)),n.add(ae(Dt(.44,.05,.012),Pn(i),0,.06,.05)),n.add(ae(Gt(.06,12,8),Pn(i),0,.06,.05)),i>=2&&n.add(ae(new yn(.034),hi(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(ae(new yn(.022),hi(i),s,r,.05));return n.userData.tick=mr(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function is(i){pr={};let e=new Rt,t=kt(i.b,.85),n=kt(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,c=rn(0,r,0);e.add(c);let h=ae(dn([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);h.rotation.x=Math.PI/2,c.add(h);let u=rn(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,c.add(u),u.add(ae(ns(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let d=rn(0,i.neck,0);d.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(d);let p=i.hs||a*.55,f=ae(Gt(p,12,10),t);if(f.scale.set(.9,.95,1.1),d.add(f),i.beak){let M=ae(wn(p*.42,p*1.3,8),kt(15116602,.5),0,-p*.15,p*1.25);M.rotation.x=Math.PI/2+.25,d.add(M)}else{let M=ae(dn([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?kt(i.sn,.85):t,0,-p*.2,p*.5);M.rotation.x=Math.PI/2,d.add(M),d.add(ae(Gt(p*.14,6,5),kt(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let M of[-1,1]){if(d.add(ae(Gt(p*.13,8,6),kt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),M*p*.72,p*.2,p*.55)),i.ear==="point"){let v=ae(wn(p*.3,p*.75,5),t,M*p*.5,p*.95,-p*.05);v.rotation.z=-M*.25,d.add(v)}else if(i.ear==="round")d.add(ae(Gt(p*.28,8,6),t,M*p*.65,p*.75,0));else if(i.ear==="long"){let v=ae(ns(p*1.25,p*.34,p*.14,8,.45),t,M*p*.5,p*.6,-p*.1);v.rotation.set(Math.PI+.2,0,M*.35),d.add(v)}if(i.horns){let v=ae(wn(p*.2,p*1.3,6),kt(i.horns,.5),M*p*.5,p*.9,-p*.5);v.rotation.x=-1,v.rotation.z=-M*.2,d.add(v)}}if(i.mane){let M=ae(Dt(a*.16,i.neck*1.1,a*.5),kt(i.mane,.9),0,i.neck*.5,-a*.62);u.add(M)}let x=[];for(let[M,v]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=rn(M*a*.62,-a*.3,v*s*.33);c.add(S);let D=o*.52,I=o*.5;S.add(ae(ns(D,i.lw*1.35,i.lw,8),t));let C=rn(0,-D,0);S.add(C),C.add(ae(ns(I,i.lw*.9,i.lw*.7,8),v>0||!i.d2?t:n));let F=ae(Gt(i.lw*1.05,8,6),kt(i.hoof||1381658,.6),0,-I-i.lw*.2,i.paw?i.lw*.5:0);F.scale.set(1,.6,i.paw?1.5:1),C.add(F),x.push({hip:S,knee:C,ph:(M*v>0?0:Math.PI)+(v<0?.6:0)})}let _=rn(0,a*.35,-s*.48);if(c.add(_),i.tail==="bush"){let M=ae(ns(s*.4,a*.3,a*.14,8),t);M.rotation.x=1.9,_.add(M)}else if(i.tail==="hair"){let M=ae(ns(r*.55,a*.16,a*.26,8),kt(i.mane||i.d,.9));M.rotation.x=.3,_.add(M)}else if(i.tail==="long"){let M=_;for(let S=0;S<6;S++){let D=rn(0,S?-s*.16:0,0);D.rotation.x=S?-.2:1.85,D.add(ae(ns(s*.17,a*(.42-S*.06),a*(.36-S*.06),8),t)),M.add(D),M=D}let v=ae(wn(a*.2,a*.5,4),n,0,-s*.2,0);v.rotation.x=Math.PI,M.add(v),e.userData.tail=_}else{let M=ae(Gt(a*.22,8,6),t);_.add(M)}let g=[];if(i.wings)for(let M of[-1,1]){let v=rn(M*a*.7,a*.75,s*.12);c.add(v);let S=new mi,D=i.wings;S.moveTo(0,0),S.quadraticCurveTo(D*.5,D*.5,D,D*.28),S.lineTo(D*.82,0),S.lineTo(D*.72,-D*.22),S.lineTo(D*.52,-D*.08),S.lineTo(D*.42,-D*.3),S.lineTo(D*.22,-D*.14),S.lineTo(D*.12,-D*.3),S.closePath();let I=ae(new Xr(S),kt(i.wd||i.d,.8,0,{side:nn,emissive:i.wd||i.d,emissiveIntensity:.28}));I.scale.x=M,I.rotation.x=1.15,I.castShadow=!1,v.add(I),g.push({w:v,s:M})}(i.extra||(()=>{}))(e,c,d,{body:t,dark:n});let m=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(M,v){m+=M*(3+v*5)*(v>.02?1:0);let S=v>.02?.35+Math.min(1,v)*.3:0;for(let D of x){let I=Math.sin(m+D.ph);D.hip.rotation.x=I*S,D.knee.rotation.x=Math.max(0,Math.cos(m+D.ph))*S*1.3}c.position.y=r+(v>.02?Math.abs(Math.sin(m*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(m*2)*.04;for(let{w:D,s:I}of g)D.rotation.z=I*(.25+Math.sin(performance.now()/(v>.02?160:600))*(v>.02?.45:.1))}}}function Kx(i){pr={};let e=new Rt,t=kt(921107,.35,.6),n=kt(13225430,.2,.95),s=kt(526346,.9),r=[];for(let d of[-.72,.78]){let p=rn(0,.34,d),f=ae(new Nn(.27,.085,10,24),s);f.rotation.y=Math.PI/2,p.add(f);let x=ae(jt(.12,.12,.08,12),n);x.rotation.z=Math.PI/2,p.add(x);for(let _=0;_<5;_++){let g=ae(Dt(.02,.5,.03),n);g.rotation.x=_/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=ae(Gt(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(ae(Dt(.3,.3,.55),kt(2763312,.4,.8),0,.5,.05));let o=ae(Dt(.3,.1,.62),kt(1708560,.8),0,.8,-.38);e.add(o);let c=ae(jt(.025,.025,.8,8),n,0,.7,.66);c.rotation.x=-.42,e.add(c),e.add(ae(Dt(.66,.03,.03),n,0,1.06,.5));let h=ae(Gt(.2,12,8),t,0,.95,.62);h.scale.set(.9,.9,.7),e.add(h),e.add(ae(Gt(.075,10,8),kt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(ae(Dt(.31,.02,.5),kt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let d of[-1,1]){let p=ae(jt(.035,.045,.7,8),n,d*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new bo(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(d,p){for(let f of r)f.rotation.x+=d*p*22;e.position.y=0}}}var gi={m0:{speed:1.7,make:()=>is({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>is({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=ae(Dt(.5,.08,.6),kt(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>is({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=ae(dn([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),kt(Co[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>Kx(kn[3])},m4:{speed:2.5,make:()=>is({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=ae(Gt(.2,10,8),kt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>is({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=ae(wn(.06,.2,4),kt(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>is({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=ae(dn([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),kt(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new Xn(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}},td={wolf:()=>is({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>is({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=gi.m5.make();return i.group.scale.setScalar(.85),i}};var Lc={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},Uo=["neutre","ninja","souverain","digne","humble","timide"],zo=["neutre","ninja","levitation"],id=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],Ic={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},bs=.252;function $x(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[bs,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function Qr(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:Yt(s.rx,r.rx,n),rz:Yt(s.rz,r.rz,n),rb:Yt(s.rb??s.rz,r.rb??r.rz,n),z:Yt(s.z,r.z,n)}}return i[i.length-1]}var Lo=(i,e,t,n=1)=>{let s=Qr(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/bs)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function Do(i,e,t){let n=Qr(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var Di=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function sd(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?Yt(.184,.128,Di((i-.8)/.5)):i<1.8?Yt(.128,.088,Di((i-1.3)/.5)):Yt(.088,.04,Di((i-1.8)/.7))}function rd(i,e,t,n=28,s=6){let r=[],a=[],o=bs-.006,c=s+1;for(let d=0;d<n;d++){let p=-Math.PI+d/n*2*Math.PI,f=e(Math.abs(p));for(let x=0;x<=s;x++)r.push(...Lo(i,p,Yt(f,o,Math.sin(x/s*Math.PI/2)),t))}for(let d=0;d<n;d++)for(let p=0;p<s;p++){let f=d*c+p,x=(d+1)%n*c+p,_=f+1,g=x+1;a.push(f,x,_,x,g,_)}let h=r.length/3;r.push(0,bs+(t-1)*.11,0);for(let d=0;d<n;d++)a.push(h,d*c+s,(d+1)%n*c+s);let u=new Ht;return u.setAttribute("position",new yt(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function Li(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let c=a;c>=0;c--){let h=c/a,u=h<.22?Yt(.72,1,h/.22):Math.max(.03,1-Math.pow((h-.22)/.78,1.5));o.push({y:-i*h,x:s*i*h*h,z:n*i*h*h,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),dn(o,r)}var qn=(i,e=0,t="#000000")=>"#"+new at(i).lerp(new at(t),e).getHexString();function nd(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",c=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let h=(N,O)=>Math.asin(Math.max(-.99,Math.min(.99,N/Qr(e,O).rx))),u=(N,O)=>(.5+h(N,O)/c)*n,d=N=>(1-N/bs)*s,p=s/bs,f=(N,O)=>n/c/(Qr(e,O).rx*Math.cos(h(N,O))),x=(N,O,Q,U)=>{a.save(),a.translate(u(N,O),d(O)),a.scale(Q*f(N,O),-p),U(),a.restore()};if(i.hair){a.fillStyle=qn(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let N=0;N<n;N+=2){let O=Math.abs((N/n-.5)*c);a.fillRect(N,0,2,d(sd(O)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let _=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(_){let N=_==="pleine",O=(.5-1.75/c)*n,Q=(.5+1.75/c)*n;if(N){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(O,d(.125));for(let U=0;U<=40;U++){let b=U/40,W=-1.75+b*3.5,j=Math.abs(W)>1.05?Yt(.066,.125,Di((Math.abs(W)-1.05)/.6)):.05+.016*Di(Math.abs(W)/1.05);a.lineTo((.5+W/c)*n,d(j))}a.lineTo(Q,s),a.lineTo(O,s),a.closePath(),a.fill(),x(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let U=a.createLinearGradient(0,s,0,d(.066));U.addColorStop(0,qn(i.hairColor)),U.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=U,a.fillRect(O,d(.066),Q-O,s-d(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,x(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}x(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=N?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let N of[-1,1])x(N*.047,.071,N,()=>{let O=a.createRadialGradient(0,0,0,0,0,.02);O.addColorStop(0,`rgba(238,104,104,${g})`),O.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=O,a.fillRect(-.02,-.02,.04,.04)});x(0,.064,1,()=>{let N=i.nose;a.strokeStyle=qn(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*N,-.0052*N),a.quadraticCurveTo(0,-.0072*N,.0042*N,-.0052*N),a.stroke(),a.globalAlpha=1}),x(0,.037,1,()=>{let N=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-N*.78,0),a.quadraticCurveTo(0,-.0082,N*.78,0),a.quadraticCurveTo(0,-.0016,-N*.78,0),a.fill(),a.beginPath(),a.moveTo(-N*.85,0),a.quadraticCurveTo(-N*.3,.0034,0,.0016),a.quadraticCurveTo(N*.3,.0034,N*.85,0),a.quadraticCurveTo(0,-.0012,-N*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=qn(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-N,9e-4),a.quadraticCurveTo(0,-.0026,N,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-N*.36,-.006),a.quadraticCurveTo(0,-.0074,N*.36,-.006),a.stroke(),a.globalAlpha=1)});let m=i.eyes*(o?1.06:1),M=.0202*m,v=(o?.0176:.0136)*m,S=(o?.0114:.0096)*m,D=.1,I=.0398*i.eyeGap+(m-1)*.004,C=qn(i.hairColor,.72,"#120c10"),F=i.eyeColor;for(let N of[-1,1])x(N*I,D,N,()=>{if(t.closed){if(a.strokeStyle=C,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-M,.001),a.quadraticCurveTo(0,-S*.95,M*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let ee of[.45,.75,1])a.beginPath(),a.moveTo(M*ee,-S*.5*(1.1-ee)-4e-4),a.lineTo(M*(ee+.14),-S*.5*(1.1-ee)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-M,-.0012),a.bezierCurveTo(-M*.6,v*1.2,M*.4,v*1.32,M,.0032),a.bezierCurveTo(M*.62,-S*1.15,-M*.45,-S*1.2,-M,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-M*1.2,-S*1.6,M*2.4,(v+S)*1.8);let O=a.createLinearGradient(0,v*1.05,0,v*.15);O.addColorStop(0,"rgba(112,122,168,.8)"),O.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=O,a.fillRect(-M*1.2,0,M*2.4,v*1.5);let Q=-M*.05,U=M*.61,b=Math.max(v,S)*1.14,W=(v-S)*.3,j=a.createLinearGradient(0,W+b,0,W-b);j.addColorStop(0,qn(F,.74)),j.addColorStop(.48,qn(F,.12)),j.addColorStop(1,qn(F,.42,"#ffffff")),a.fillStyle=j,a.beginPath(),a.ellipse(Q,W,U,b,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=qn(F,.78),a.stroke(),a.fillStyle=qn(F,.9),a.beginPath(),a.ellipse(Q,W+b*.1,U*.42,b*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=qn(F,.62,"#ffffff"),a.beginPath(),a.ellipse(Q,W-b*.58,U*.6,b*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(Q-N*U*.36,W+b*.42,U*.3,b*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(Q+N*U*.42,W-b*.4,U*.14,b*.11,0,0,7),a.fill(),a.restore();let z=o?.0037:.0028;if(a.fillStyle=C,a.beginPath(),a.moveTo(-M*1.03,-.0016),a.bezierCurveTo(-M*.6,v*1.2,M*.4,v*1.32,M,.0032),a.lineTo(M*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(M*.55,v*1.32+z*1.7,-M*.5,v*1.2+z*1.2,-M*1.06,3e-4),a.closePath(),a.fill(),o)for(let[ee,be,fe,Le]of[[M*.96,.0062,M*1.34,.012],[M*.72,v*.95,M*1.02,v*1.62]])a.beginPath(),a.moveTo(ee-.0024,be),a.lineTo(fe,Le),a.lineTo(ee+.0012,be-.0018),a.closePath(),a.fill();a.strokeStyle=C,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(M*.98,.0012),a.bezierCurveTo(M*.78,-S*.9,M*.36,-S*1.14,-M*.08,-S*1.12),a.stroke(),a.strokeStyle=qn(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-M*.55,v*1.16+z+.0034),a.quadraticCurveTo(M*.1,v*1.36+z+.0042,M*.82,v*.95+z+.004),a.stroke(),a.globalAlpha=1});let E=qn(i.hairColor,.3);for(let N of[-1,1])x(N*I,D+v*1.32+(o?.0128:.0108),N,()=>{let O=o?.0027:.0046,Q=i.brows,U=-Q*.0055,b=Q*.0034+8e-4,W=U*.3+b*.7+.0034;a.fillStyle=E,a.beginPath(),a.moveTo(-M*1.05,U-O*.5),a.quadraticCurveTo(0,W+O*.15,M*1.22,b),a.quadraticCurveTo(0,W+O*.95+8e-4,-M*1.05,U+O*.5),a.closePath(),a.fill()});let y=new On(r);return y.colorSpace=Kt,y.anisotropy=4,y}function jx(i,e,t){let n=i.gender==="f",s=new Rt,r=$x(i.jaw*(n?.92:1.05)),a=ci(r,3),o=e.shadow?t.skin:Pc(16777215,{map:nd(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let c=Wu(a,32);{let f=c.attributes.position,x=c.attributes.normal,_=new G,g=new G;for(let m=0;m<f.count;m++)_.set(f.getX(m),f.getY(m)-.118,f.getZ(m)+.012).normalize(),g.set(x.getX(m),x.getY(m),x.getZ(m)).lerp(_,.8).normalize(),x.setXYZ(m,g.x,g.y,g.z)}let h=ae(c,o);s.add(h);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let f=o.map,x=nd(i,r,{closed:!0});u=_=>{o.map=_?x:f},s.userData.dispose=()=>{f.dispose(),x.dispose()}}for(let f of[-1,1]){let x=ae(Gt(.024,10,8),t.skin,f*.0905,.098,-.006);x.scale.set(.42,1,.72),x.rotation.y=f*.25,s.add(x)}let d=ae(dn([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,Do(r,0,.068)-.0035);if(d.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),d.userData.noBake=!0,d.castShadow=!1,s.add(d),!n&&i.beard==="pleine"){let f=ae(dn(ci([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(f)}let p=Qx(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function Qx(i,e,t,n){let s=new Rt,r=i.hair,a=new Rt,o=new Rt,c=new Rt;if(a.name="top",o.name="front",c.name="back",s.add(a,o,c),r==="rase")return s;let h=(m,M,v,S,D,I=0,C=1.06)=>{let F=Lo(n,v,S,C),E=ae(M,e,F[0],F[1],F[2]);return E.rotation.order="YXZ",E.rotation.set(-D,v,I),m.add(E),E},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(ae(rd(n,sd,u),e));let d=(m,M=.021,v=.36)=>m.forEach(([S,D,I,C,F])=>h(o,Li(D,I,M,-.1,F||0),S,.211-Math.abs(S)*.016,v,C,u+.012)),p=(m,M=.04)=>{for(let v of[-1,1])h(o,Li(m,M,.022,-.05,0),v*1.08,.172,.1,-v*.06,u),h(o,Li(m*.7,M*.8,.02,-.05,0),v*1.32,.16,.1,v*.06,u)},f=(m,M,v,S=1.12,D=-.45,I=.236,C=.2)=>{for(let F=0;F<m;F++)h(a,Li(M*(.9+F*7%5*.05),v,.03,D),C+F/m*6.2832,I,S,F%2?.14:-.12,u)},x=(m,M,v,S,D,I,C,F,E,y=.026)=>{for(let N=0;N<M;N++){let O=Yt(v,S,M>1?N/(M-1):.5);h(m,Li(I*(.92+N*5%4*.05),C,y,E),O,D,F,N%2?.1:-.1,u)}},_=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":d(_),p(t?.11:.085),f(9,.105,.062),x(a,9,1.5,4.78,.2,.1,.06,.5,-.3),x(c,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":d([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[m,M,v,S,D]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])h(a,Li(S,.074,.05,.14),m,M,v,D,.99);x(c,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":d(_),p(.19,.045),f(9,.12,.066),x(c,9,1.45,4.83,.17,.25,.066,.13,.12,.03),x(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":d(t?g:_),p(.34,.044),f(9,.13,.068),x(c,9,1.4,4.88,.17,.56,.074,.1,.03,.032),x(c,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":d(_),p(t?.15:.1),f(8,.1,.062,1.2,-.5);{let m=ae(Gt(.026,10,8),e,...Lo(n,Math.PI,.2,1.1));a.add(m);for(let[M,v,S]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])h(a,Li(v,.066,.046,-.3,0),Math.PI,.2,S,M,1.14)}break;case"chignon":d(t?g:_),p(t?.13:.08),f(8,.095,.06,1.2,-.5);{let m=Lo(n,Math.PI,.185,1.3),M=ae(Gt(.05,14,10),e,m[0],m[1],m[2]);M.scale.set(1,.92,.9),a.add(M);for(let v=0;v<5;v++){let S=ae(Li(.06,.035,.026,.3),e,m[0],m[1],m[2]-.01);S.rotation.set(-1.9,0,v*1.257),a.add(S)}}break;case"boucles":d([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[m,M,v,S]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let D=0;D<M;D++){let I=m<.19?Yt(1.15,5.13,D/(M-1)):D/M*6.2832+m*9;m<.215&&Math.cos(I)>.5||h(m<.15?c:a,Li(v,.07,.052,.55,D%2?.25:-.25),I,m,S,D%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function ws(i={}){let e=Object.assign({},Lc,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,c=.5+s*.5,h=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},d=(w,H)=>h.glow?{emissive:w,emissiveIntensity:H}:void 0,p={skin:Pc(e.skin),hair:Sn(e.hairColor)},f=p.skin,x=Sn(h.c[0],d(h.c[0],.1)),_=Sn(h.c[1],d(h.c[1],.1)),g=Sn(h.c[2],d(h.c[2],.22)),m=Sn(1907492),M=Sn(1250072),v=Sn(5922920),S=w=>w._dbl||(w._dbl=Object.assign(w.clone(),{side:nn})),D=[],I={},C=w=>I["m"+w]||(I["m"+w]=dr(w)),F=w=>I["d"+w]||(I["d"+w]=dr(w,!0)),E=w=>I["g"+w]||(I["g"+w]=Sn(kn[w],{emissive:kn[w],emissiveIntensity:.9})),y=w=>(w.userData.joint=!0,w),N=w=>(w.userData.keep=!0,w),O=.47*e.legs,Q=.44*e.legs,U=O+Q+.105,b=new Rt,W=y(rn(0,U,0));b.add(W);let j=y(rn(0,0,0));W.add(j);let z={hips:W,spine:j},ee=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([w,H,J,re,pe],ce)=>{let _e=ce===1||ce===2?e.hips:ce===3?e.waist:ce===4||ce===5?e.chest:1;return{y:w,rx:H*(ce>7?1:s)*_e,rz:J*(ce>7?1:c)*(ce===4||ce===5?e.chest:ce===3?(1+e.waist)/2:1),rb:re*(ce>7?1:c)*(ce===4||ce===5?(1+e.chest)/2:1),z:pe}}),be=ci(ee,3),fe=w=>Qr(be,w),Le=ee[3],oe=ee[1],ye=w=>{let H=fe(w);return H.z+H.rz},Te=h.cut,Qe=Te==="plate",He=(n?.088:.082)*s*e.hips;j.add(ae(dn(be,24),Te==="cape"?v:x));let $e=n?.037:.046;j.add(ae(jt($e,$e*1.1,.12,12),f,0,.555,-.006));let Fe=y(rn(0,.57,.012)),Xe=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);Fe.scale.setScalar(Xe),j.add(Fe),z.head=Fe;let Ue=jx(e,t,p);Fe.add(Ue);let B=(w,H)=>{let J=w.attributes.position,re=w.index.array,pe=[];for(let ce=0;ce<re.length;ce+=3){let _e=re[ce],De=re[ce+1],je=re[ce+2];H((J.getX(_e)+J.getX(De)+J.getX(je))/3,(J.getY(_e)+J.getY(De)+J.getY(je))/3,(J.getZ(_e)+J.getZ(De)+J.getZ(je))/3)&&pe.push(_e,De,je)}return w.setIndex(pe),w},Pe=(w,H,J,re=24)=>{let pe=ci(w,3),ce=dn(pe,re,!1,!1);if(J){let _e=ce.index.array,De=[];for(let je=0;je<_e.length/6;je++){let Tt=Math.floor(je/re),xt=(je%re+.5)/re*6.2832;if(J(xt>Math.PI?xt-6.2832:xt,(pe[Tt].y+pe[Tt+1].y)/2))for(let Ft=0;Ft<6;Ft++)De.push(_e[je*6+Ft])}ce.setIndex(De)}return ae(ce,S(H))},ue=(w,H,J,re,pe=.168)=>{H=Math.max(H,(He+.098*o)/oe.rx),j.add(Pe([{y:w,rx:oe.rx*H,rz:oe.rz*H*1.05,rb:oe.rb*H*1.05},{y:Yt(w,-.03,.55),rx:oe.rx*Yt(1.09,H,.6),rz:oe.rz*Yt(1.12,H*1.05,.6),rb:oe.rb*Yt(1.12,H*1.05,.6)},{y:-.03,rx:Math.max(oe.rx*1.075,He+.1*o),rz:oe.rz*1.13,rb:oe.rb*1.13},{y:pe,rx:Le.rx*1.06,rz:Le.rz*1.1,rb:Le.rb*1.1}],J,re))},Ee=(w=.27)=>(H,J)=>!(Math.abs(H)<w&&J<.1),he=(w,H,J,re=1.07)=>{let pe=fe(w),ce=fe(H);j.add(ae(dn([{y:w,rx:pe.rx*re,rz:pe.rz*re,rb:pe.rb*re,z:pe.z},{y:H,rx:ce.rx*re,rz:ce.rz*re,rb:ce.rb*re,z:ce.z}],24),J))},Ze=()=>{he(.126,.174,M,1.14),j.add(ae(Dt(.052,.052,.02),g,0,.15,ye(.15)*1.14+.004))},Ce=(w,H,J,re,pe,ce=1.014,_e=10)=>{let De=[],je=[];for(let Ft=0;Ft<=_e;Ft++){let It=Ft/_e,ge=Yt(w,H,It),l=Yt(J,re,It),R=fe(ge),T=R.z+R.rz*Math.sqrt(Math.max(.05,1-(l/R.rx)**2))*ce+.002;if(De.push(-l,ge,T,l,ge,T),Ft<_e){let k=Ft*2;je.push(k,k+1,k+2,k+1,k+3,k+2)}}let Tt=new Ht;Tt.setAttribute("position",new yt(De,3)),Tt.setIndex(je),Tt.computeVertexNormals();let xt=ae(Tt,S(pe));xt.castShadow=!1,j.add(xt)},L=(w,H,J,re=1)=>j.add(Pe([{y:.488,rx:.086*re,rz:.07*re,rb:.074*re,z:-.004},{y:.488+w,rx:.064*re,rz:.058*re,rb:.062*re,z:-.006}],H,J?pe=>Math.abs(pe)>J:null,20)),P=(n?.168:.208)*a,te=.447,de=(n?.8:1)*o,Me=.275*e.arms,we=.25*e.arms,qe=Te==="robe",ke=Te==="cape"?v:x,We=Te==="apron"?f:ke,nt=()=>dn(ci([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let w of[-1,1]){let H=w<0?"M":"O",J=y(rn(w*P,te,0));j.add(J),J.add(ae(Pi(Me,[[0,.046*de],[.16,.051*de],[.5,.043*de],[.85,.037*de],[1,.035*de]],12),ke));let re=y(rn(0,-Me,0));if(J.add(re),t.oneArm&&w===-1)re.add(ae(Gt(.04*de,8,6),ke));else{re.add(ae(Pi(we,qe?[[0,.042*de],[.5,.06*de],[1,.082*de,0,.8]]:[[0,.036*de],[.22,.041*de],[.6,.034*de],[1,.026*de]],12,qe?.15:.55),We));let ce=n?.88:1,_e=ae(nt(),Te==="plate"?_:f,0,-we,0);_e.scale.setScalar(ce),re.add(_e);let De=ae(Pi(.045,[[0,.0095],[1,.0065]],8),Te==="plate"?_:f,0,-we-.022*ce,.028*ce);De.rotation.x=-.75,De.scale.setScalar(ce),re.add(De),Te!=="apron"&&!qe&&re.add(ae(jt(.031*de,.034*de,.034,12),Te==="cape"?_:g,0,-we+.03,0)),z["hand"+H]=N(rn(0,-we-.058*ce,.004)),re.add(z["hand"+H])}z["arm"+H]=J,z["elbow"+H]=re}z.armL=z.armM,z.armR=z.armO,z.elbowL=z.elbowM,z.elbowR=z.elbowO;let ct=He,me=o,ut=Te==="track"||Te==="suit"||Te==="tail"||Te==="plate"?x:_,mt=()=>{let w=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([J,re,pe])=>({y:J,rx:re,rz:pe,z:.036-pe})),H=dn(ci(w,2),12);return H.rotateX(Math.PI/2),H};for(let w of[-1,1]){let H=w<0?"M":"O",J=y(rn(w*ct,-.02,0));W.add(J),J.add(ae(Pi(O,n?[[0,.09*me],[.3,.09*me],[.7,.066*me],[1,.052*me]]:[[0,.086*me],[.3,.088*me],[.7,.069*me],[1,.056*me]],14),ut));let re=y(rn(0,-O,0));J.add(re);let pe=n?.92:1;re.add(ae(Pi(Q,[[0,.054*me*pe],[.25,.06*me*pe,-.008],[.7,.043*me*pe],[1,.036*me*pe]],12),ut)),re.add(ae(Pi(Q*.56,[[0,.054*me*pe*1.16],[.4,.047*me*pe*1.14],[1,.04*me*pe*1.12]],12,.2),m,0,-Q*.44,-.002)),re.add(ae(jt(.062*me*pe,.058*me*pe,.03,12),Te==="plate"?g:m,0,-Q*.44,-.004));let ce=ae(mt(),m,0,-Q-.049,.004);if(ce.scale.setScalar(n?.9:1),re.add(ce),u.jambieres!=null){let _e=u.jambieres;re.add(ae(Pi(Q*.8,[[0,.07*me],[.3,.074*me,-.004],[1,.052*me]],12,.15),C(_e),0,-Q*.1,.004));let De=ae(Gt(.062*me,10,8),F(_e),0,0,.03);if(De.scale.set(1,1.2,.8),re.add(De),_e>=2&&re.add(ae(new yn(.016),E(_e),0,0,.082*me)),_e>=5){let Tt=mr(re,_e,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});Tt&&D.push(Tt)}let je=ae(mt(),F(_e),0,-Q-.044,.008);je.scale.set(1.12,1.1,1.06),re.add(je)}z["leg"+H]=J,z["knee"+H]=re}z.legL=z.legM,z.legR=z.legO,z.kneeL=z.kneeM,z.kneeR=z.kneeO;let dt=!1,it=()=>{for(let w of[-1,1])z[w<0?"armM":"armO"].add(ae(Dt(.008,Me*.86,.022),g,w*.05*de,-Me*.5,0)),z[w<0?"legM":"legO"].add(ae(Dt(.008,O*.9,.024),g,w*.079*me,-O*.5,0)),z[w<0?"kneeM":"kneeO"].add(ae(Dt(.008,Q*.42,.02),g,w*.055*me,-Q*.2,0))};switch(Te){case"uniform":ue(-.125,1.1,x),Ze(),Ce(.175,.488,.009,.009,g),L(.05,g,.17);for(let w of[-1,1]){let H=ae(Dt(.085,.014,.05),g,w*P*.86,.478,0);H.rotation.z=-w*.32,j.add(H)}break;case"track":Ce(.02,.5,.007,.007,g),L(.06,g,.17,1.04),he(-.045,-.015,_,1.03),it();break;case"apron":j.add(Pe([{y:-O*.92,rx:oe.rx*1.24,rz:oe.rz*1.3},{y:-.03,rx:oe.rx*1.08,rz:oe.rz*1.15},{y:.168,rx:Le.rx*1.06,rz:Le.rz*1.13}],g,w=>Math.abs(w)<1.25)),Ce(.17,.43,.1,.075,g,1.03),Ze(),L(.03,x,.35);break;case"coat":ue(-O*.94,n?1.5:1.32,x,Ee()),Ze(),Ce(.3,.5,.012,.045,g),L(.07,_,.45,1.16);break;case"blouse":ue(-O*.8,1.22,x,Ee(.14)),Ce(.36,.5,.01,.04,_),L(.04,x,.4,1.1);{let w=ae(Dt(.055,.05,.012),g,P*.42,.33,ye(.33)*.96+.006);j.add(w),z.armM.add(ae(jt(.06*de,.06*de,.05,12),g,0,-.12,0))}break;case"robe":ue(-(U-.1),n?1.9:1.55,x),dt=!0,he(.125,.2,g,1.085),Ce(.2,.5,.01,.05,g),L(.045,g,.35,1.12);{let w=ae(Dt(.05,.34,.012),g,0,-.03,oe.rz*1.24);w.rotation.x=-.08,j.add(w)}break;case"suit":ue(-.12,1.07,x,Ee(.14)),Ce(.24,.5,.006,.05,g),Ce(.25,.48,.014,.012,_,1.03),L(.035,g,.35);break;case"cape":{ue(-.15,1.12,v),Ze(),j.add(ae(dn(ci([{y:-U*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),x)),j.add(Pe([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],x));{let w=ae(Gt(.075,12,8),x,0,.535,-.085);w.scale.set(1.25,.6,.8),j.add(w)}j.add(ae(new yn(.024),E(2),0,.455,.12));break}case"plate":{for(let w of[-1,1]){let H=ae(Gt(.098,12,8),x,w*P*1.02,te+.036,0);H.scale.set(1.15,.72,1.1),j.add(H),z[w<0?"elbowM":"elbowO"].add(ae(Pi(we*.7,[[0,.052*de],[1,.04*de]],12,.2),x,0,-.02,0))}j.add(ae(new yn(.028),Sn(h.c[2],{emissive:h.c[2],emissiveIntensity:.8}),0,.36,ye(.36)+.012)),ue(-O*.5,1.22,g,Ee(.14)),Ze(),L(.05,_,.17,1.1);break}case"tail":{Ce(.2,.5,.03,.06,g),ue(-.1,1.05,x,w=>Math.abs(w)>.6);for(let w of[-1,1]){let H=ae(Dt(.115,.44,.014),_,w*.064,-.22,-oe.rb*1.12);H.rotation.x=.1,j.add(H)}for(let w of[-1,1]){let H=ae(wn(.022,.05,4),_,w*.024,.497,ye(.49)+.014);H.rotation.z=w*Math.PI/2,H.scale.z=.5,j.add(H)}L(.035,g,.35);break}}if(u.plastron!=null){let w=u.plastron,H=be.filter(J=>J.y>=.175&&J.y<=.492).map(J=>({y:J.y,rx:J.rx*1.09,rz:J.rz*1.14,rb:J.rb*1.12,z:J.z}));H.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),j.add(ae(dn(H,24,!1,!1),S(C(w)))),he(.175,.2,F(w),1.16);for(let J of[-1,1]){let re=ae(Gt(.094,12,8),F(w),J*P*1.04,te+.042,0);re.scale.set(1.2+w*.03,.7,1.14),j.add(re);let pe=ae(Gt(.075,12,8),C(w),J*P*1.12,te-.02,0);if(pe.scale.set(1,.8,1.1),j.add(pe),w>=4){let ce=ae(wn(.028,.11,6),C(w),J*P*1.2,te+.095,0);ce.rotation.z=-J*.7,j.add(ce)}}if(Ce(.2,.49,.012,.012,F(w),1.16),w>=2&&j.add(ae(new yn(.03),E(w),0,.375,ye(.375)*1.14+.016)),w>=4)for(let J of[-1,1])j.add(ae(new yn(.02),E(w),J*P*1.04,te+.1,.03));if(w>=3)for(let J of[-1,1]){let re=mr(j,w,{x:J*P*1.06,y0:te+.07,y1:te+(w>=5?.2:.16),r:.05,mode:"lite"});re&&D.push(re)}w>=6&&D.push(ju(j,.4,-(ee[5].rb+.03)))}if(u.casque!=null){let w=u.casque,H=Ue.userData.rings,J=S(C(w)),re=ce=>ce<.55?.138:ce<1?Yt(.138,.05,Di((ce-.55)/.3)):ce<2.2?.05:.035;Fe.add(ae(rd(H,re,1.13,32,7),J)),Fe.add(ae(Dt(.016,.07,.014),F(w),0,.118,Do(H,0,.12)*1.13+.006));{let ce=ae(dn(ci([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),F(w),0,.262,0);Fe.add(ce)}if(w>=2&&Fe.add(ae(new yn(.015),E(w),0,.2,Do(H,0,.2)*1.13+.012)),w>=3){let ce=ae(dn(ci([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),Sn(kn[w]),0,.285,0);Fe.add(ce)}if(w>=5)for(let ce of[-1,1]){let _e=ae(wn(.024,.13,6),C(w),ce*.112,.215,-.02);_e.rotation.z=-ce*.9,Fe.add(_e)}if(w>=5){let ce=mr(Fe,w,{y0:w>=6?.3:.27,y1:w>=6?.33:.38,r:w>=6?.1:.03,z:-.02,mode:w>=6?"halo":"lite"});ce&&D.push(ce)}let pe=Ue.getObjectByName("hair");if(pe){pe.remove(pe.getObjectByName("top"));let ce=pe.getObjectByName("front");ce.children.slice(0,Math.max(0,ce.children.length-4)).forEach(_e=>ce.remove(_e))}}let Ye=N(rn(0,.3,-(ee[4].rb+.05)));j.add(Ye);let pt=i.main&&i.main.type,St=i.off&&i.off.type,Ut=pt?Ic[pt]||"1h":"fist",ft=[],Re=(w,H,J)=>new Wn().setFromEuler(new Ji(w,H,J));function Y(w,H,J){let re=y(Qu(w.type,w.r)),pe=w.type,ce={g:re,type:pe,hand:z[J]},_e={parent:Ye,p:[0,0,0],q:Re(0,0,0),s:1},De={p:[0,0,0],q:Re(Math.PI/2,Math.PI/2,0),s:1};return pe==="orbe"?(_e.parent=j,_e.p=[H*.3,.52,.12],ce.orb=!0,z.orb=re):pe==="grimoire"?(_e.parent=j,_e.p=[H*(oe.rx+.035),.02,.02],_e.q=Re(0,H*Math.PI/2,.1),De.p=[0,0,.05],De.q=Re(-1.2,Math.PI/2,0),ce.hand=z.handO||z.handM):pe==="pistolet"?(_e.parent=j,_e.p=[H*(oe.rx+.04),.03,0],_e.q=Re(Math.PI+.25,0,0),_e.s=.9,De.q=Re(0,0,Math.PI),De.p=[0,.01,.03]):pe==="dague"?(_e.p=[H*.17,.2,0],_e.q=Re(0,0,H*(Math.PI-.5))):pe==="anneaux"?(_e.p=[0,.02,.01],_e.q=Re(Math.PI/2-.2,0,0),_e.s=.85,De.q=Re(Math.PI/2,0,0),De.p=[0,0,.12],De.s=.7):pe==="guisarme"||pe==="baton"?(_e.p=[-H*.12,-.62,0],_e.q=Re(0,0,H*.3),De.p=[0,0,-.1]):pe==="arc"?(_e.p=[H*.1,0,0],_e.q=Re(0,0,H*.25),De.q=new Wn().setFromRotationMatrix(new zt().makeBasis(new G(0,-1,0),new G(0,0,1),new G(-1,0,0))),De.p=[0,.12,-.2],ce.hand=z.handO||z.handM):pe==="harpe"?(_e.p=[0,-.45,-.03],_e.s=.85,De.q=Re(Math.PI/2,0,0),De.p=[.02,.06,-.42],De.s=.64,ce.hand=z.handO||z.handM):pe==="repercuteur"?(_e.p=[H*.17,.2,0],_e.q=Re(0,0,H*(Math.PI-.5)),De.q=Re(0,0,Math.PI),De.p=[0,.06,.1]):(_e.p=[H*.17,.2,0],_e.q=Re(0,0,H*(Math.PI-.5))),re.userData.tick&&D.push(re.userData.tick),ce.S=_e,ce.H=De,ft.push(ce),Be(ce,!1),ce}function Be(w,H){let J=H&&w.hand&&!w.orb?w.H:w.S;(H&&w.hand&&!w.orb?w.hand:w.S.parent).add(w.g),w.g.position.set(J.p[0],J.p[1],J.p[2]),w.g.quaternion.copy(J.q),w.g.scale.setScalar(J.s)}pt&&Y(i.main,-1,"handM"),St&&St!=="bouclier"&&Y(i.off,1,"handO");let ze=ft.length>1&&Ic[St]===Ic[pt],st=St==="bouclier"?i.off.r:u.bouclier;if(st!=null){let w=y(ed(st));w.position.set(.055,-.13,0),w.rotation.y=Math.PI/2,w.scale.setScalar(.8),z.elbowO.add(w),w.userData.tick&&D.push(w.userData.tick)}if(i.aura){let w=new at(i.aura),H=new Ne(new ai(.42,.56,40),new Bt({color:w,transparent:!0,opacity:.55,side:nn,blending:Cn,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.y=.02,b.add(H),z.aura=H;let J=new Ne(jt(.5,.42,1.5,24,!0),new Bt({color:w,transparent:!0,opacity:.1,side:nn,blending:Cn,depthWrite:!1}));J.position.y=.75,b.add(J),z.auraCol=J}b.scale.setScalar(e.height);let et=Yu(b,!t.shadow&&!t.noInk);if(t.shadow){let w=typeof t.shadow=="string"?t.shadow:"#14141f",H=new Mo({color:w,transparent:!0,opacity:.8,emissive:new at(w).multiplyScalar(.6)});b.traverse(pe=>{pe.isMesh&&pe.material&&!pe.material.transparent&&!(pe.material.emissiveIntensity>.4)&&(pe.material.map&&pe.material.userData.ownMap&&pe.material.map.dispose(),pe.material=H)});let J=new Bt({color:t.eyes||"#bfe4ff"}),re=Ue.userData.rings;for(let pe of[-1,1]){let ce=new Ne(Gt(.012,8,6),J);ce.position.set(pe*.037,.1,Do(re,.037,.1)+.002),ce.scale.set(1.5,.7,.5),Fe.add(ce)}}b.traverse(w=>{w.isMesh&&(w.castShadow=!w.material.transparent&&!w.userData.ink&&w.userData.noBake!==!0)});let bt=(w,H)=>new Bt({color:w,transparent:!0,opacity:H,side:nn,blending:Cn,depthWrite:!1}),Ct=[];{let w=new un(.5,1,6).rotateX(Math.PI).translate(0,-.5,0),H=bt("#ff2410",.62),J=bt("#ffb27a",.7),re=!0;for(let pe of[z.kneeM,z.kneeO]){let ce=new Ne(w,H),_e=new Ne(w,J);ce.castShadow=_e.castShadow=!1,re||(ce.userData.sharedGeo=!0),_e.userData.sharedGeo=!0,re=!1,_e.scale.set(.5,.55,.5),ce.add(_e),ce.position.set(0,-Q-.07,.04),ce.visible=!1,pe.add(ce),Ct.push(ce)}}let ht=new Rt;ht.visible=!1,b.add(ht);{let w=i.aura||"#bfe8ff",H=new Ne(jt(.52,.34,2.3,20,!0),bt(w,.16));H.position.y=1.15,H.castShadow=!1,ht.add(H);let J=bt("#ffffff",.7),re=Dt(.012,.3,.012);for(let ce=0;ce<9;ce++){let _e=new Ne(re,J);_e.castShadow=!1,ce&&(_e.userData.sharedGeo=!0),ht.add(_e)}let pe=new Ne(new ai(.3,.62,32).rotateX(-Math.PI/2),bt(w,.5));pe.position.y=.03,pe.castShadow=!1,ht.add(pe)}let _t={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},Et=i.runPose||null,Oe={};z.armM.rotation.order=z.armO.rotation.order="XZY";let Zt=Math.random()*6,Vt=null,bn=!1,V=1.5+Math.random()*4,$=0,ne=Uo.includes(e.stance)?e.stance:"neutre",Ie=zo.includes(e.move)?e.move:"neutre",tt=st!=null,gt=pt==="grimoire"||St==="grimoire";function rt(){switch(Ut){case"1h":case"rings":Oe.aMx=-.45,Oe.aMz=.2,Oe.eM=-1.15,ze?(Oe.aOx=-.4,Oe.aOz=.2,Oe.eO=-1.05):tt&&(Oe.aOx=-.6,Oe.aOz=-.1,Oe.eO=-1.45);break;case"2h":Oe.aMx=-.6,Oe.aMz=-.12,Oe.eM=-1.05,Oe.aOx=-.75,Oe.aOz=-.42,Oe.eO=-1.2,Oe.sY=-.22;break;case"staff":Oe.aMx=-.5,Oe.aMz=.12,Oe.eM=-1.35,tt&&(Oe.aOx=-.6,Oe.aOz=-.1,Oe.eO=-1.45);break;case"bow":Oe.aOx=-.6,Oe.aOz=.12,Oe.eO=-.8;break;case"gun":Oe.aMx=-.5,Oe.eM=-1.3,ze&&(Oe.aOx=-.5,Oe.eO=-1.3);break;case"cannon":Oe.aMx=-.4,Oe.aMz=-.05,Oe.eM=-1.25,Oe.aOx=-.85,Oe.aOz=-.5,Oe.eO=-.9;break;case"magic":Oe.aMx=-.5,Oe.aMz=.22,Oe.eM=-1.25,gt&&(Oe.aOx=-.55,Oe.eO=-1.5);break;case"harp":Oe.aOx=-.75,Oe.aOz=-.18,Oe.eO=-1.6,Oe.aMx=-.5,Oe.eM=-1.3;break;default:Oe.aMx=-.5,Oe.eM=-1.75,Oe.aOx=-.5,Oe.eO=-1.75}}let Ge=w=>Object.assign(Oe,w),A=w=>{let H={};for(let J in w){let re=J==="sY"||J==="aMy"||J==="aOy",pe=J.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");H[J==="sY"?J:pe]=re?-w[J]:w[J]}return H};function Z(w){switch(ne){case"ninja":return Ge({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return Ge({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return Ge({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return Ge({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return Ge({sX:.1,sY:.12+Math.sin(w*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let se={slash(w,H){let J=w<.36,re=w<.66,pe=ze&&H%2===1,ce=ze?(H>>1)%3:H%3,_e=ce===0?J?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:re?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:ce===1?J?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:re?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:J?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:re?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;_e&&Ge(pe?A(_e):_e)},heavy(w,H){let J=w<.42,re=w<.72;H%2===0?J?Ge({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):re&&Ge({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):J?Ge({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):re&&Ge({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(w,H){if(w>.8)return;if(Ut==="cannon"){Ge({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),w>.3&&w<.5&&Ge({sX:-.16,aMx:-1.45});return}let J=w>.3&&w<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};Ge(ze&&H%2===1?A(J):J)},bow(w){w<.55?Ge({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):w<.82&&Ge({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(w){w<.4?Ge({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):w<.75&&Ge({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(w){w<.78&&Ge({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(w){w<.45?Ge({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(w/.45*Math.PI*.6)}):w<.82&&Ge({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(w){Ge({aOx:-.8,aOz:-.2,eO:-1.6}),w<.35?Ge({aMx:-1.25,aMz:.4,eM:-1.5}):w<.72&&Ge({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(w,H){let J=w<.32?{aMx:.3,eM:-2.2,sY:-.4}:w<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;J&&Ge(H%2?A(J):J)},spin(w){Ge({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(w){Ge({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(w){Ge({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(w){Ge({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(w){Ge({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:b,joints:z,height:(U+.57+bs*Xe)*e.height,seatDrop:U*e.height,cat:Ut,dual:ze,inks:et,scale:e.height,get armed(){return bn},get acting(){return Vt?Vt.name:null},get move(){return Ie},get stance(){return ne},setArmed(w){if(w=!!w,w!==bn){bn=w;for(let H of ft)Be(H,w)}},setStyle(w){w.stance&&Uo.includes(w.stance)&&(ne=w.stance),w.move&&zo.includes(w.move)&&(Ie=w.move)},play(w,H=.5,J=0,re=1){se[w]&&(Vt={name:w,t:0,dur:H,c:J,turns:re})},hand(w,H){let J=z[H?"handO":"handM"]||z.handO||z.handM;return J?J.getWorldPosition(w):b.getWorldPosition(w)},update(w,H={}){let J=Math.min(3.2,H.speed||0),re=$+=w,pe=Math.sin(re*1.6),ce=Ie==="levitation"&&!H.riding&&!H.down,_e=J>.02,De=Ie==="ninja"&&J>.9&&!H.riding&&!H.down;Zt+=w*(4.6+J*3.4)*(De?1.3:1)*(_e?1:0),Ge({aMx:pe*.02,aMy:0,aMz:.08,aOx:-pe*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:pe*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:pe*.003,rZ:0});let je=null,Tt=!1,xt=!1;if(H.riding)je=[-1.25,1.3,-1.25,1.3,H.wide||.45],Ge({sX:.06+pe*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),Tt=!0;else if(H.down)je=[-1.48,1.5,.15,1.65,0],Ge({sX:.5,hdX:.45,dy:-(O-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(_e&&ce){let X=Math.min(1,J/2),q=Math.sin(re*1.7);je=[-.3,.58,.04+X*.05,.1,0],Ge({sX:.05+X*.09,hdX:-.03-X*.06,aMx:.12+X*.16+q*.02,aOx:.12+X*.16-q*.02,aMz:.16+X*.05,aOz:.16+X*.05,eM:-.22,eO:-.22})}else if(_e){let X=Math.max(0,Math.min(1,J-.75)),q=De?.72:(dt?.3:.55)+Math.min(J,1.4)*(dt?.12:.3),K=Math.sin(Zt),le=(.7+X)*q*1.5;je=[K*q,Math.max(0,-Math.cos(Zt))*le,-K*q,Math.max(0,Math.cos(Zt))*le,0],Tt=!0,Ge(De?{sX:.8,hdX:-.58,aMx:.72+K*.05,aOx:.72-K*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:K*.05,dy:-.1+Math.abs(Math.cos(Zt))*.03}:{aMx:-K*q*.8,aOx:K*q*.8,eM:-.25-X*.9-Math.max(0,-K)*.4,eO:-.25-X*.9-Math.max(0,K)*.4,sX:.04+X*.2,sY:K*.07,dy:Math.abs(Math.cos(Zt))*.025*(1+X)})}else!bn&&!Vt&&(je=Z(re),xt=!0);if(ce&&(_e||(je=[-.2,.42,.02,.08,0]),Tt=!1,Oe.dy=.24+Math.sin(re*2.2)*.02),bn&&!H.riding&&!H.down&&!De){let X=Oe.aMx,q=Oe.aOx,K=Oe.sY;ce&&(Oe.aMz=Oe.aOz=.08,Oe.eM=Oe.eO=-.12),rt(),_e&&!ce&&(Oe.aMx+=X*.25,Oe.aOx+=q*.25,Oe.sY+=K)}if(Et==="aion"&&bn&&_e&&J>.9&&!H.riding&&!H.down){let X=Math.sin(Zt);Ge({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+X*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+X*.04}),ce||(Oe.sX=.5,Oe.hdX=-.36)}let Ft=0,It=0;if(Vt){Vt.t+=w;let X=Vt.t/Vt.dur;X>=1?Vt=null:(se[Vt.name](X,Vt.c),Vt.name==="spin"&&(Ft=Di(X)*6.2832*Vt.turns),Vt.name==="roll"&&(It=Di(X)*6.2832,je=[-1.7,2.2,-1.7,2.2,0],Tt=!1),Vt.name==="flip"&&(It=-Di(X)*6.2832,je=[-1.75,2.25,-1.75,2.25,0],Tt=!1),Vt.name==="dash"&&!ce&&(je=[-1.05,.55,.75,.95,0],Tt=!1),Vt.name==="slam"&&X<.45&&(je=[-.5,1.1,.3,.9,0],Tt=!1))}let ge=1-Math.exp(-(Vt||H.riding?30:De?16:12)*w);for(let X in _t)_t[X]+=(Oe[X]-_t[X])*ge;z.armM.rotation.set(_t.aMx,_t.aMy,-_t.aMz),z.armO.rotation.set(_t.aOx,_t.aOy,_t.aOz),z.elbowM.rotation.x=_t.eM,z.elbowO.rotation.x=_t.eO,j.rotation.x=_t.sX,j.rotation.y=_t.sY,W.position.y=U+_t.dy,W.rotation.y=Ft,W.rotation.x=It,W.rotation.z=_t.rZ,Fe.rotation.set(_t.hdX,_t.hdY+(_e||Vt||ne==="timide"?0:Math.sin(re*.4)*.08),_t.hdZ);let l=Tt?1:1-Math.exp(-(je?16:8)*w),R=je||[0,0,0,0,0];if(z.legM.rotation.x+=(R[0]-z.legM.rotation.x)*l,z.kneeM.rotation.x+=(R[1]-z.kneeM.rotation.x)*l,z.legO.rotation.x+=(R[2]-z.legO.rotation.x)*l,z.kneeO.rotation.x+=(R[3]-z.kneeO.rotation.x)*l,z.legM.rotation.z+=(-R[4]-z.legM.rotation.z)*l,z.legO.rotation.z+=((R[5]??R[4])-z.legO.rotation.z)*l,z.orb){let X=z.orb;bn?X.position.set(-.26,.42+Math.sin(re*2)*.03,.34):X.position.set(-.3,.52+Math.sin(re*2)*.03,.12),X.rotation.y=re}z.aura&&(z.aura.rotation.z=re*.5,z.aura.material.opacity=.42+Math.sin(re*2.2)*.14,z.auraCol.material.opacity=.08+Math.sin(re*1.7)*.03);for(let X of D)X(re);for(let X=0;X<Ct.length;X++){let q=Ct[X];if(q.visible=ce,ce){let K=1+.28*Math.sin(re*13+X*1.9)+.14*Math.sin(re*21+X),le=Math.min(1,J/2);q.scale.set(.04,(.075+le*.04)*K,.04),q.rotation.x=-.1-le*.45}}let T=xt&&ne==="digne";if(ht.visible=T,T){let X=ht.children;X[0].material.opacity=.13+Math.sin(re*5)*.05,X[0].scale.set(1+Math.sin(re*7)*.04,1,1+Math.sin(re*7)*.04);for(let q=1;q<=9;q++){let K=(re*.9+q*.37)%1,le=q*2.4+re*.6;X[q].position.set(Math.cos(le)*.44,K*2.2,Math.sin(le)*.44),X[q].scale.y=.6+K}X[1].material.opacity=.5+Math.sin(re*6)*.2,X[10].rotation.y=-re,X[10].scale.setScalar(1+Math.sin(re*5)*.06)}let k=Ue.userData.blink;k&&(V-=w,V<0&&(k(V>-.11),V<=-.11&&(V=2.2+Math.random()*4)))}}}function ad(i,e,t={}){let n=new xs({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=Kt,n.toneMapping=fi,n.shadowMap.enabled=!0,n.shadowMap.type=Jr;let s=new ji,r=new $i(n);s.environment=r.fromScene(new hr,.04).texture,r.dispose();let a=new mn(28,1,.1,50);s.add(new ar(16777215,9078440,1.15));let o=new es(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let c=new es(58879,1.1);c.position.set(-3,2,-3),s.add(c);let h=new es(10185727,.9);h.position.set(3,1.5,-3),s.add(h);let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d"),p=d.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=p,d.fillRect(0,0,256,256),d.strokeStyle="rgba(0,240,255,.5)",d.lineWidth=2,d.beginPath(),d.arc(128,128,84,0,7),d.stroke(),d.strokeStyle="rgba(0,240,255,.2)",d.beginPath(),d.arc(128,128,108,0,7),d.stroke();let f=new Ne(new pi(1.5,48),new Bt({map:new On(u),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,s.add(f);let x=new Ne(new pi(1.5,32),new _o({opacity:.45}));x.rotation.x=-Math.PI/2,x.position.y=.002,x.receiveShadow=!0,s.add(x);let _=new Rt;s.add(_);let g=null,m=null,M=t.zoom||"body",v=t.yaw??-.35,S=null,D=0,I=!1,C=!!t.walk,F={y:.9,d:4.6};function E(W){g&&(_.remove(g.group),li(g.group)),m&&(_.remove(m.group),li(m.group),m=null),g=ws(W),_.add(g.group),W.armed&&g.setArmed(!0),W.mount&&gi[W.mount]?(m=gi[W.mount].make(),Po(m.group),_.add(m.group),g.group.position.set(0,m.seat.y-g.seatDrop,m.seat.z),g.wide=m.wide):g.group.position.set(0,0,0)}E(e);function y(){let W=i.clientWidth||300,j=i.clientHeight||400;(i.width!==Math.round(W*n.getPixelRatio())||i.height!==Math.round(j*n.getPixelRatio()))&&(n.setSize(W,j,!1),a.aspect=W/j,a.updateProjectionMatrix())}let N=W=>{S={x:W.clientX,yaw:v},D=performance.now(),i.setPointerCapture&&i.setPointerCapture(W.pointerId)},O=W=>{S&&(v=S.yaw+(W.clientX-S.x)*.012,D=performance.now())},Q=()=>{S=null};i.addEventListener("pointerdown",N),i.addEventListener("pointermove",O),i.addEventListener("pointerup",Q),i.addEventListener("pointercancel",Q),i.style.touchAction="pan-y";let U=performance.now();function b(W){if(I)return;requestAnimationFrame(b);let j=Math.min(.05,(W-U)/1e3);if(U=W,!i.isConnected||i.offsetParent===null)return;y(),t.spin&&M!=="face"&&!S&&W-D>2500&&(v+=j*.25),_.rotation.y=v;let z=g.height+(m?m.seat.y-g.seatDrop:0),ee=a.aspect,be=Math.max(z,1.8),fe=g.scale||1,Le=M==="face"?{y:z-.15*fe,d:1.12*Math.max(.75,fe)/Math.min(1,ee*.9)}:m?{y:z*.5,d:Math.max(z*2.6,3.4/Math.min(1,ee*1.2))}:{y:be*.5,d:be*2.35/Math.min(1,ee*1.9)};F.y+=(Le.y-F.y)*Math.min(1,j*6),F.d+=(Le.d-F.d)*Math.min(1,j*6),a.position.set(0,F.y+(M==="face"?.02:.25),F.d),a.lookAt(0,F.y,0),t.freeze||(g.update(j,{speed:C&&!m?2:0,riding:!!m,wide:g.wide}),m&&m.update(j,C?.8:0)),n.render(s,a)}return requestAnimationFrame(b),{set:E,setZoom(W){M=W},setArmed(W){g&&g.setArmed(W)},play(W,j,z,ee){g&&(g.setArmed(!0),g.play(W,j,z,ee))},get avatar(){return g},setWalk(W){C=W},setYaw(W){v=W,D=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){I=!0,i.removeEventListener("pointerdown",N),i.removeEventListener("pointermove",O),i.removeEventListener("pointerup",Q),li(s),n.dispose()}}}var Oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e1=new nr(-1,1,1,-1,0,1),Dc=class extends Ht{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},t1=new Dc,ss=class{constructor(e){this._mesh=new Ne(t1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,e1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var No=class extends Yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ts.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ss(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ea=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ko=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new No(Oo),this.copyPass.material.blending=di,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ea!==void 0&&(a instanceof ea?n=!0:a instanceof ko&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bo=class extends Yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var od={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var gr=class i extends Yn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(r,a,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new Dn(r,a,{type:ri});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Dn(r,a,{type:ri});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=od;this.highPassUniforms=ts.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Oo;this.copyUniforms=ts.clone(u.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Cn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new Bt,this.fsQuad=new ss(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new hn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};gr.BlurDirectionX=new Ae(1,0);gr.BlurDirectionY=new Ae(0,1);var ld={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ho=class extends Yn{constructor(){super();let e=ld;this.uniforms=ts.clone(e.uniforms),this.material=new vo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Nt.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var na=[1,3,6,10,20],cd=120,hd=7,Uc=.12,zc={templier:1.012,gladiateur:1.027,rodeur:1.046,assassin:.966,sorcier:1.027,spiritualiste:1.173,clerc:1.027,aede:1.017,pistolero:.982,ethertech:.99,peintre:1.021,barde:1.012,"templier:epee":1.012,"gladiateur:guisarme":1.027,"rodeur:arc":1.046,"assassin:dague+dague":.966,"assassin:epee+dague":.976,"sorcier:orbe":1.027,"spiritualiste:orbe":1.173,"clerc:baton":1.027,"aede:baton":1.017,"pistolero:pistolet+pistolet":.982,"ethertech:lamecle":.99,"peintre:anneaux":1.021,"templier:espadon":1.008,"gladiateur:espadon":.997,"rodeur:dague+epee":.97,"assassin:dague+epee":.962,"assassin:epee+epee":.966,"sorcier:grimoire":1.027,"spiritualiste:grimoire":1.173,"clerc:masse":1.036,"aede:masse":1.058,"pistolero:repercuteur":1.016,"barde:harpe":1.012},ia=[{id:"feu",name:"Esprit de feu",color:16742954,hp:4,mult:.9,iv:1.2,aoe:3.6,sc:1},{id:"terre",name:"Esprit de terre",color:11569738,hp:10,mult:1.05,iv:1.4,aoe:3,sc:1.25,taunt:28,cc:{slow:[.3,2]}},{id:"vent",name:"Esprit de vent",color:10217680,hp:3,mult:.3,iv:.4,aoe:2.6,sc:.9},{id:"eau",name:"Esprit d\u2019eau",color:4892927,hp:4,mult:.75,iv:1,aoe:2.8,sc:1,heal:2}],xr=i=>i.busy??(i.cast??.25)+.2+(i.dmg&&i.dmg.hits>1?(i.dmg.hits-1)*(i.dmg.gap||.15):0),ta={dague:{spd:1.2,hits:1,crit:.1,cdm:2.3,var:.03,reach:2.1},epee:{spd:1.4,hits:2,crit:.05,cdm:2.1,var:.1,reach:2.6},masse:{spd:1.5,hits:2,crit:.01,cdm:2.1,var:.1,reach:2.5},espadon:{spd:2.4,hits:3,crit:.05,cdm:1.85,var:.06,reach:3.4,kd:.25},guisarme:{spd:2.8,hits:4,crit:.05,cdm:1.85,var:.25,reach:3.9,kd:.45},baton:{spd:2,hits:3,crit:.05,cdm:1.85,var:.1,reach:3.3,kd:.25},lamecle:{spd:2.4,hits:3,crit:.05,cdm:1.5,var:.1,reach:2.8,kd:.25},anneaux:{spd:2,hits:2,crit:.05,cdm:1.85,var:.06,range:15},arc:{spd:2.4,hits:2,crit:.05,cdm:1.85,var:.1,range:25,kb:2.5},orbe:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.18,range:15},grimoire:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.06,range:25},pistolet:{spd:1.8,hits:1,crit:.05,cdm:2.1,var:.06,range:15},repercuteur:{spd:2.8,hits:1,crit:.05,cdm:1.5,var:.18,range:25},harpe:{spd:2.4,hits:1,crit:.05,cdm:1.5,var:.1,range:25},poing:{spd:1.4,hits:1,crit:0,cdm:1.5,var:.1,reach:1.9}},n1=1/6,i1=.6,Ui={crit:.5,aspd:.5,dodge:.3,parry:.4,block:.5},ud={espadon:1,guisarme:1,baton:1},s1={arc:"bow",pistolet:"shoot",repercuteur:"shoot",harpe:"strum",orbe:"cast",grimoire:"cast"};function dd(i,e,t){let n=ta[e]||ta.poing,s=t&&t!=="bouclier"&&ta[t]&&!n.range&&!ud[e]?ta[t]:e==="pistolet"&&t==="pistolet"?ta.pistolet:null,r=fd(i,e||"poing",n,!!s,t==="bouclier"),a=[1];s&&a.push(i1);for(let h=1;h<n.hits+(s?s.hits-1:0);h++)a.push(.1);let o=a.reduce((h,u)=>h+u,0),c=r.basic;return c.dur=n.spd*n1*(c.castK||1),c.seq=a,c.F=o,c.mult=c.rate*c.dur/o,c.kind==="melee"?c.reach=(n.reach||2.4)+(c.reachPlus||0):n.range&&!c.range&&(c.range=n.range),r.W=n,r.var=n.var,r.ref={crit:.05+n.crit,cdm:n.cdm},r.id=i+":"+(e||"poing")+(s?"+"+t:""),r}function fd(i,e,t,n,s){let r=!!ud[e],a=!!t.range,o=s1[e]||"slash",c=r?"heavy":"slash",h=(u,d)=>({name:u,ult:2,exec:1,cast:.5,busy:.95,lock:.8,cc:d});switch(i){case"templier":return{role:"Tank",melee:!0,sustain:!0,passive:{guard:.35,block:s?.25:0},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3,arc:r?1.45:1.3},skills:[{name:"Capture",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,kd:1.5}},{name:"Choc du bouclier",cd:10,anim:"heavy",cast:.3,dmg:{kind:"melee",mult:1.6,r:4.2,arc:1.6},cc:{kd:2.5}},{name:"Brise-armure",cd:14,anim:"slash",cast:.25,dmg:{kind:"melee",mult:1,r:4,arc:1.6},cc:{weak:[.3,8],aspd:[.3,8]}},{name:"Rempart inviolable",ult:1,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:3,r:7},cc:{kd:2},self:{inv:6,heal:25}},h("Ch\xE2timent",{kd:3})]};case"gladiateur":return{role:"Combattant de zone",melee:!0,sustain:!0,passive:{kdOnCrit:1.5,guard:.15},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3.1,arc:r?1.9:1.6},skills:[{name:"Encha\xEEnement",cd:7,anim:"spin",cast:.12,turns:2,dmg:{kind:"melee",mult:[.9,1.2,1.8],hits:3,gap:.28,r:4.2,arc:1.9}},{name:"Onde entravante",cd:9,anim:"slam",cast:.34,lock:.3,dmg:{kind:"around",mult:1.3,r:7},cc:{slow:[.5,5]}},{name:"Posture de rage",cd:20,anim:"castUp",cast:.3,self:{atk:[.35,10]}},{name:"Tourbillon de guerre",ult:1,anim:"spin",cast:.12,turns:3,dmg:{kind:"around",mult:1.1,hits:5,gap:.17,r:6.5},self:{inv:1}},h("Ex\xE9cution")]};case"rodeur":return{role:"Archer",melee:!a,sustain:!a,basic:a?{kind:"shot",anim:o,hit:.58,rate:2.5,proj:"arrow",speed:60}:{kind:"melee",anim:c,hit:.5,rate:2.5,arc:1.3},skills:[{name:"Pi\xE8ge \xE0 pointes",cd:10,anim:"cast",cast:.2,special:"trap",dmg:{mult:2,r:4},cc:{root:4,slow:[.4,6],sil:4}},{name:"Tir de pr\xE9cision",cd:14,anim:o,cast:.3,dmg:{kind:"shot",mult:4.2,crit:1,pierce:1,size:1.8,proj:a?"arrow":"bolt",speed:70}},{name:"Camouflage",cd:16,anim:"cast",cast:.1,busy:.2,self:{stealth:[4,2.2],aspd:[.3,8]}},{name:"Pluie de fl\xE8ches",ult:1,anim:o,cast:.4,dmg:{kind:"zone",mult:.75,hits:8,gap:.22,r:6},cc:{slow:[.5,4]}},h("Fl\xE8che du silence",{sil:6})]};case"assassin":return{role:"Furtif",melee:!0,sustain:!0,passive:{dodge:.2,back:{crit:.25,cdm:.5}},basic:{kind:"melee",anim:"slash",hit:.5,rate:3.1,arc:1.2,rune:1},skills:[{name:"Embuscade",cd:6,anim:"slash",cast:.12,move:"tp",dmg:{kind:"target",mult:1.6,range:22,aoe:4},cc:{stun:1.5},self:{atk:[.25,3]},chain:{name:"Balayage",anim:"spin",cast:.1,dmg:{kind:"around",mult:.9,r:4.8},cc:{kd:1.5}}},{name:"Frappe runique",cd:9,anim:"spin",cast:.1,dmg:{kind:"around",mult:.6,hits:3,gap:.14,r:4.8},cc:{stun:1,runes:1},chain:{name:"Explosion de runes",anim:"slam",cast:.15,special:"runes",dmg:{kind:"around",mult:.6,per:.3,r:6}}},{name:"Dissimulation",cd:18,anim:"cast",cast:.1,busy:.2,self:{stealth:[8,3],reset:1}},{name:"Danse des mille lames",ult:1,anim:"spin",cast:.1,turns:3,dmg:{kind:"around",mult:.85,hits:6,gap:.14,r:5.5},cc:{stun:.8},self:{inv:1.2}},h("Assassinat",{stun:2})]};case"sorcier":return{role:"Mage de destruction",melee:!1,basic:{kind:"shot",anim:"cast",castK:2,hit:.62,rate:3.1,proj:"bolt",speed:30,aoe:2.6,size:1.5,slowSelf:.35},skills:[{name:"Sommeil",cd:12,anim:"cast",cast:.35,area:{kind:"zone",r:4.5},cc:{sleep:6},color:12167423},{name:"Racines de glace",cd:9,anim:"cast",cast:.45,lock:.4,dmg:{kind:"zone",mult:1.5,r:5.5},cc:{root:4,slow:[.5,6],sil:4},color:9428223},{name:"M\xE9tamorphose",cd:16,anim:"cast",cast:.4,area:{kind:"target"},cc:{tree:5},color:9166954},{name:"M\xE9t\xE9ore",ult:1,anim:"castUp",cast:1.1,lock:1.1,meteor:1,dmg:{kind:"zone",mult:6,r:7}},h("N\xE9ant")]};case"spiritualiste":return{role:"Invocateur",melee:!1,basic:{kind:"shot",anim:"cast",hit:.5,rate:1.4,proj:"bolt",speed:32,dot:[.3,6]},skills:[{name:"Esprit \xE9l\xE9mentaire",cd:10,anim:"castUp",cast:.4,special:"spirit"},{name:"Peur",cd:12,anim:"cast",cast:.35,area:{kind:"around",r:8},cc:{fear:4}},{name:"Absorption",cd:10,anim:"cast",cast:.35,dmg:{kind:"target",mult:1.6,steal:60,range:26},cc:{sap:[.3,8]},self:{shield:[20,8]}},{name:"Fureur \xE9l\xE9mentaire",ult:1,anim:"castUp",cast:.5,special:"enrage",eq:6,dmg:{kind:"zone",mult:3,r:6}},h("Marche des ombres",{fear:3})]};case"clerc":return{role:"Soigneur",melee:!1,passive:{guard:.2,rez:90},basic:{kind:"shot",anim:"cast",hit:.5,rate:3,proj:"bolt",speed:32,range:20,aoe:2.6},skills:[{name:"Soin \xE9clair",cd:4,anim:"cast",cast:.1,busy:.25,self:{heal:25,hot:[3,6]}},{name:"Ch\xE2timent paralysant",cd:10,anim:"cast",cast:.35,dmg:{kind:"zone",mult:1.7,r:4.5},cc:{para:3}},{name:"Grande gu\xE9rison",cd:12,anim:"castUp",cast:1.3,lock:1.3,self:{heal:70}},{name:"Jugement divin",ult:1,anim:"castUp",cast:.7,lock:.7,dmg:{kind:"zone",mult:5,r:7},cc:{root:4}},{name:"Barri\xE8re sacr\xE9e",ult:2,anim:"castUp",cast:.3,self:{inv:6,heal:100,guard:[.5,12]}}]};case"aede":return{role:"Soutien",melee:!0,sustain:!0,passive:{atk:.1,regen:.01,mantra:1},basic:{kind:"melee",anim:"heavy",hit:.56,rate:2.5,arc:1.8,reachPlus:r?0:.5},skills:[{name:"Jugement in\xE9luctable",cd:8,anim:"cast",cast:.25,dmg:{kind:"shot",mult:1.5,proj:"bolt",range:22,speed:40},cc:{stun:2.5}},{name:"Parole de vie",cd:5,anim:"cast",cast:.1,busy:.25,self:{heal:18}},{name:"Chant d\u2019inspiration",cd:16,anim:"castUp",cast:.3,self:{crit:[.4,10],aspd:[.2,10]},area:{kind:"around",r:9},cc:{aspd:[.4,8]}},{name:"Onde de choc",ult:1,anim:"slam",cast:.4,lock:.5,dmg:{kind:"around",mult:4.5,r:6.5},cc:{kd:2}},{name:"Mantra de victoire",ult:2,anim:"castUp",cast:.3,self:{atk:[.5,8],crit:[1,8],heal:40}}]};case"pistolero":return{role:"Tireur mobile",melee:!1,basic:e==="repercuteur"?{kind:"shot",anim:"shoot",hit:.36,rate:3,proj:"shell",speed:36,aoe:2.6,bounce:1}:{kind:"shot",anim:"shoot",hit:.34,rate:2.8,proj:"bullet",speed:85,bounce:2},skills:[{name:"Canon magique",cd:7,anim:o,cast:.3,lock:.25,dmg:{kind:"shot",mult:4.2,proj:"shell",aoe:3.8,size:2,speed:36},cc:{stun:1.5}},{name:"Tir entravant",cd:9,anim:o,cast:.2,dmg:{kind:"zone",mult:1.1,r:5},cc:{slow:[.6,5],root:2}},{name:"Saut de recul",cd:6,anim:"flip",cast:.05,move:"back",dmg:{kind:"shot",mult:.8,hits:3,gap:.08,proj:"bullet",speed:85},self:{inv:.5,atk:[.2,4]}},{name:"D\xE9luge de plomb",ult:1,anim:o,cast:.1,dmg:{kind:"shot",mult:.55,hits:12,gap:.07,proj:"bullet",speed:85}},h("Tir fatal")]};case"ethertech":return{role:"Pilote de Mecha",melee:!0,sustain:!0,basic:{kind:"melee",anim:"slash",hit:.5,rate:2.8,arc:1.3},mecha:{hp:2.5,dur:20,basic:{kind:"melee",anim:"punch",dur:.46,hit:.5,mult:1.7,reach:4.6,arc:1.7,mech:1,seq:[1],F:1}},skills:[{name:"Mecha",cd:12,anim:"castUp",cast:.5,special:"mecha"},{name:"Grappin",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,stun:1.5}},{name:"Champ d\u2019entrave",cd:10,anim:"slam",cast:.3,dmg:{kind:"around",mult:1.3,r:6.5},cc:{root:3}},{name:"Salve de missiles",ult:1,anim:"castUp",cast:.4,dmg:{kind:"zone",mult:1,hits:5,gap:.16,r:5.5},cc:{stun:1}},h("Annihilation",{stun:2})]};case"barde":return{role:"Musicien",melee:!1,basic:{kind:"shot",anim:"strum",hit:.45,rate:1.75,proj:"wave",speed:24,thru:1,note:1},skills:[{name:"Accord final",cd:7,anim:o,cast:.25,special:"notes",dmg:{kind:"target",mult:1.2,range:24}},{name:"Berceuse",cd:12,anim:o,cast:.4,area:{kind:"around",r:7},cc:{sleep:5},color:12167423},{name:"M\xE9lodie de vie",cd:9,anim:o,cast:.3,self:{heal:22,gauge:30,shield:[15,8]},area:{kind:"around",r:8},cc:{slow:[.4,5]}},{name:"Symphonie",ult:1,anim:"castUp",cast:.5,eq:3,dmg:{kind:"around",mult:4,r:8},cc:{notes:5}},h("Requiem")]};case"peintre":return{role:"Contr\xF4le de zone",melee:!1,basic:{kind:"shot",anim:"slash",hit:.5,rate:2.35,proj:"paint",speed:32,aoe:1.2,every:{n:3,k:2,lock:.3}},skills:[{name:"Marque de couleur",cd:8,anim:"slash",cast:.2,dmg:{kind:"target",mult:1,range:16},cc:{weak:[.35,8],slow:[.3,5]}},{name:"Lien gravitationnel",cd:12,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:1.2,r:9},cc:{pull:1,root:2.5}},{name:"Toile d\u2019absorption",cd:14,anim:"cast",cast:.2,busy:.3,self:{absorb:[.4,8]}},{name:"Fr\xE9n\xE9sie chromatique",ult:1,anim:"castUp",cast:.4,eq:3,dmg:{kind:"around",mult:3,r:7},cc:{para:2},self:{aspd:[.4,10],crit:[.4,10]}},h("Chef-d\u2019\u0153uvre",{para:3})]}}return fd(a?"rodeur":"gladiateur",e,t,n,s)}function pd(i,e=30){let t=Math.min(Ui.crit,i.ref.crit),n=i.ref.cdm,s=i.passive||{},r=.01,a=0,o=0,c=0,h=0,u=0,d=0,p=-1,f=0,x=null,_=0,g=null,m=0,M=[0,0,0],v=[0,0],S=[0,0],D=[0,0],I=[0,0],C={},F=O=>a<O[1]?O[0]:0,E=(O,Q={})=>{let U=O*(1+(s.atk||0)+F(v))*(1+F(I)),b=!!Q.crit;f&&!Q.pet&&(U*=f,b=!0,f=0),U*=b?n:1+Math.min(Ui.crit,t+F(S))*(n-1),o+=U},y=O=>{O&&(O.atk&&(v[0]=O.atk[0],v[1]=a+O.atk[1]),O.crit&&(S[0]=O.crit[0],S[1]=a+O.crit[1]),O.aspd&&(D[0]=O.aspd[0],D[1]=a+O.aspd[1]),O.stealth&&(f=O.stealth[1]),O.reset!=null&&(M[O.reset-1]=0))},N=O=>{O&&(O.weak&&(I[0]=O.weak[0],I[1]=a+O.weak[1]),O.dot&&(C[O.key||"x"]=[O.dot[0],a+O.dot[1]]),O.notes&&(u=Math.min(5,u+O.notes),d=a+8))};for(;a<e;){for(let O in C)a<C[O][1]&&(o+=C[O][0]*(1+F(I))*(1+(s.atk||0))*(1+t*(n-1))*r);if(u&&a<d&&(o+=u*Uc*(1+F(I))*(1+t*(n-1))*r),x&&(_+=r,_>=x.iv&&(_-=x.iv,E(x.mult,{pet:1}))),a>=c){let O=-1;if(!g){for(let Q=0;Q<3;Q++)if(i.skills[Q]&&M[Q]<=a){O=Q;break}}if(g||O>=0){let Q=g||i.skills[O],U=Q.dmg;if(c=a+xr(Q),g?g=null:(M[O]=a+Q.cd,Q.chain&&(g=Q.chain)),Q.special==="spirit"?(x=ia[0],_=0):Q.special==="mecha"&&(a>=p&&(p=a+i.mecha.dur),M[O]=p+Q.cd),U){let b=U.hits||1,W=0;Q.special==="notes"&&(W=.7*u,u=0),Q.special==="runes"&&(W=U.per*m,m=0);for(let j=0;j<b;j++)E((Array.isArray(U.mult)?U.mult[j]:U.mult)+(j===0?W:0),{crit:U.crit})}Q.cc&&Q.cc.runes&&(m=Math.min(5,m+Q.cc.runes*(U&&U.hits||1))),N(Q.cc),y(Q.self)}else{let Q=a<p?i.mecha.basic:i.basic,U=++h,b=Q.mult*Q.F,W=Q.dur*(1-Math.min(Ui.aspd,F(D)));Q.every&&U%Q.every.n===0&&(b*=Q.every.k,W+=Q.every.lock*.5),c=a+W,E(b),Q.dot&&(C.basic=[Q.dot[0],a+Q.dot[1]]),Q.note&&(u=Math.min(5,u+1),d=a+8),Q.rune&&(m=Math.min(5,m+1))}}a+=r}return o}var md=i=>{let e=i.dmg;if(!e)return i.eq||0;let t=e.hits||1,n=0;for(let s=0;s<t;s++)n+=Array.isArray(e.mult)?e.mult[s]:e.mult;return n+(i.eq||0)};var ot={x:-200,z:70,r:22.4,wall:33.6,gate:.17},r1={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},Oc=[16734842,4704511,16765514,9166954],gd={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.6,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.7,rest:1,h:2.05},duel:{name:"Duelliste d\u2019ombre",hp:150,atk:13,spd:5.3,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},a1=[[36,252,"wolf",2,1],[-34,318,"wolf",3,3],[92,296,"brute",4,1],[150,-246,"duel",4,1],[58,-292,"wolf",5,4],[-176,-160,"shade",6,2],[-300,110,"brute",7,1],[262,130,"duel",3,1],[-120,240,"shade",5,2],[330,-120,"duel",8,1]],o1=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],l1=new G(0,1,0),Ss=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function xd(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:c,toast:h,cb:u}=i,d=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.cls&&s.cls.id||"",f=r1[p]||8386303,x=s.hero&&s.hero.main&&s.hero.main.type,_=s.hero&&s.hero.off&&s.hero.off.type,g=dd(p,x,_),m=g.passive||{},M=g.skills;d.ref&&(d.crit=g.ref.crit,d.critDmg=g.ref.cdm);let v=cd/pd(g)*(zc[g.id]||zc[p]||1),S=d.atk*v,D=M[3]?hd/(md(M[3])*v):1,I=[!1].concat(M.map((l,R)=>(s.level||1)<na[R])),C=g.basic,F=C.kind==="melee",E=p==="assassin"||p==="pistolero",y={hp:d.hp,max:d.hp,shield:0,shieldT:0,charge:0,cds:[0,0,0,0,0,0],cdMax:[1,1,1,1,1,1],busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0,dealt:0,atkB:0,atkT:0,critB:0,critT:0,aspdB:0,aspdT:0,guardB:0,guardT:0,absorbB:0,absorbT:0,hot:0,hotT:0,stealthT:0,stealthK:1,rezCd:0,chain:[null,null,null,null,null,null],manual:!1,slowK:1,slowT:0,mecha:null,focus:null,focusT:0,spirit:-1},N=Math.min(60,Math.max(0,s.regen||0)),O=[],Q=[],U=[],b=[],W=[],j=[],z={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},ee={shake:0,held:!1,warnT:0,enemies:O,arena:z,pl:y,allies:W,kit:g,norm:v},be=(l,R)=>b.push({t:l,fn:R}),fe=(l,R,T,k)=>Math.hypot(l-T,R-k),Le=(l,R)=>Math.atan2(l-t.x,R-t.z),oe=(l,R)=>fe(l,R,ot.x,ot.z)<ot.r,ye={arc:new ai(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new ai(.84,1,48).rotateX(-Math.PI/2),tube:new vn(1,1,1,24,1,!0).translate(0,.5,0),ball:new Qn(1,14,10),arrow:new un(.04,1,6).rotateX(Math.PI/2),tracer:new vn(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let l in ye)ye[l].userData.shared=!0;let Te=(l,R=.9,T=!0)=>new Bt({color:l,transparent:!0,opacity:R,side:nn,blending:T?Cn:Vi,depthWrite:!1,fog:!1});function Qe(l,R,T){return e.add(l),U.push({obj:l,t:0,dur:R,upd:T}),l}function He(l){e.remove(l),l.traverse(R=>{R.material&&R.material.dispose(),R.geometry&&!R.geometry.userData.shared&&R.geometry.dispose()})}function $e(l,R,T,k,X,q,K,le=.24){let xe=new Rt;xe.position.set(l,R,T),xe.rotation.y=k;let ve=new Ne(ye.arc,Te(K));ve.rotation.z=X,xe.add(ve),Qe(xe,le,Se=>{ve.material.opacity=.95*(1-Se),ve.scale.setScalar(q*(.82+Se*.3)),ve.rotation.y=(Se-.5)*.9})}function Fe(l,R,T,k,X,q,K=.45,le=.9){let xe=new Ne(ye.ring,Te(k,le));xe.position.set(l,R+.1,T),Qe(xe,K,ve=>{xe.scale.setScalar(X+(q-X)*(1-(1-ve)*(1-ve))),xe.material.opacity=le*(1-ve*ve)})}function Xe(l,R,T,k,X,q,K=.5){let le=new Ne(ye.tube,Te(k,.55));le.position.set(l,R,T),Qe(le,K,xe=>{let ve=X*(1-xe*.55);le.scale.set(ve,q*Math.min(1,xe*5+.1),ve),le.material.opacity=.6*(1-xe)})}function Ue(l,R,T,k,X,q=.25){let K=new Ne(ye.ball,Te(k,.7));K.position.set(l,R,T),Qe(K,q,le=>{K.scale.setScalar(X*(.4+le*.8)),K.material.opacity=.7*(1-le)})}function B(l,R,T,k,X=12,q=5,K=.5){let le=new Float32Array(X*3),xe=new Float32Array(X*3);for(let Ke=0;Ke<X;Ke++){let At=Math.random()*6.2832,vt=Math.random()*1.3-.2,Ot=q*(.4+Math.random()*.8);xe[Ke*3]=Math.cos(At)*Math.cos(vt)*Ot,xe[Ke*3+1]=Math.sin(vt)*Ot+1.5,xe[Ke*3+2]=Math.sin(At)*Math.cos(vt)*Ot,le[Ke*3]=l,le[Ke*3+1]=R,le[Ke*3+2]=T}let ve=new Ht;ve.setAttribute("position",new cn(le,3));let Se=new ho(ve,new Br({color:k,size:c?.2:.28,transparent:!0,opacity:1,blending:Cn,depthWrite:!1,fog:!1}));Se.frustumCulled=!1;let lt=0;Qe(Se,K,Ke=>{let At=(Ke-lt)*K;lt=Ke;for(let vt=0;vt<X*3;vt+=3)le[vt]+=xe[vt]*At,le[vt+1]+=xe[vt+1]*At,le[vt+2]+=xe[vt+2]*At,xe[vt+1]-=9*At;ve.attributes.position.needsUpdate=!0,Se.material.opacity=1-Ke})}let Pe=new G;function ue(l,R,T,k,X){if(Pe.set(l,R,T).project(a),Pe.z>1||Math.abs(Pe.x)>1.1)return;let q=document.createElement("span");q.className="ew-num "+(X||""),q.textContent=k,q.style.left=(Pe.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",q.style.top=(-Pe.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(q),setTimeout(()=>q.remove(),850)}let Ee=new Ne(ye.ball,Te(8378623,.16));Ee.scale.setScalar(1.25),Ee.visible=!1,e.add(Ee);let he=new Ne(ye.ring,Te(f,.7));he.visible=!1,e.add(he);let Ze=(()=>{let l=document.createElement("canvas");l.width=l.height=64;let R=l.getContext("2d");return R.beginPath(),R.moveTo(32,4),R.lineTo(61,58),R.lineTo(3,58),R.closePath(),R.fillStyle="#fff",R.fill(),R.lineWidth=4,R.strokeStyle="#000",R.stroke(),R.fillStyle="#000",R.fillRect(28.5,22,7,20),R.fillRect(28.5,46,7,7),new On(l)})();function Ce(l){let R=l.barCv.getContext("2d");if(R.clearRect(0,0,64,8),R.fillStyle="rgba(0,0,0,.75)",R.fillRect(0,0,64,8),R.fillStyle=l.type==="dummy"?"#ffd479":l.boss?"#ff4d6d":"#ff8a5a",R.fillRect(1,1,62*Math.max(0,Math.min(1,l.hp/l.max)),6),l.runes){R.fillStyle="#e9ddff";for(let T=0;T<l.runes;T++)R.fillRect(3+T*7,2,4,4)}l.barTex.needsUpdate=!0}function L(l,R,T,k=1,X={}){let q=gd[l],K=Math.pow(1.2,k-1)*(X.hpK||1),le={type:l,T:q,x:R,z:T,y:r(R,T),yaw:X.yaw??Math.random()*6.28,hp:Math.round(q.hp*K),atk:q.atk*Math.pow(1.16,k-1),def:4*Math.pow(1.15,k-1),spd:q.spd,range:q.range,rad:q.rad,state:X.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!q.boss,elite:!!q.elite,runes:0,runeT:0,tint:!1,home:[R,T],wild:X.wild||null,arena:!!X.arena,lvl:k,lunge:0,n:0,wobT:0,wT:0,rootT:0,slowT:0,slowK:0,silT:0,weakT:0,weakK:0,aspdT:0,aspdK:0,sapT:0,sapK:0,notes:0,noteT:0,noteAcc:0,kd:!1,kdCd:0,zT:0};le.max=le.hp;let xe=new Rt;if(le.obj=xe,l==="dummy"){let ve=new tn({color:6965802,roughness:.9}),Se=new tn({color:13481066,roughness:1}),lt=new Rt;le.wob=lt,xe.add(new Ne(new vn(.07,.1,1,8).translate(0,.5,0),ve)),lt.position.y=.95,lt.add(new Ne(new vn(.27,.2,.78,10).translate(0,.42,0),Se),new Ne(new Qn(.19,10,8).translate(0,.98,0),Se),new Ne(new zn(1.15,.09,.09).translate(0,.62,0),ve));let Ke=new Ne(new pi(.12,16).translate(0,.46,.262),new Bt({color:12597547}));lt.add(Ke),xe.add(lt),xe.traverse(At=>{At.isMesh&&(At.castShadow=!0)})}else if(l==="shade"||l==="champion"||l==="duel"){let ve=l==="champion",Se=l==="duel";le.av=ws({look:{gender:"m",height:ve?1.5:Se?1.16:1+Math.random()*.08,build:ve?1.2:Se?1.08:1,shoulders:ve?1.14:Se?1.08:1,hair:ve?"brosse":"court"},outfit:{cut:ve?"plate":"coat",c:Se?["#2a1016","#12080b","#8a2a3a"]:["#1a1626","#0e0c16","#3a2a5a"]},armor:ve?{casque:5,plastron:5,jambieres:5}:Se?{plastron:4}:{},main:{type:ve?"espadon":Se?Math.random()<.5?"epee":"espadon":Math.random()<.5?"epee":"guisarme",r:ve?5:Se?4:3},fx:{shadow:ve?"#2a1234":Se?"#2c1218":"#17152c",eyes:ve?"#ff4d6d":Se?"#ffd24a":"#c8b6ff",lod:!0}}),le.av.setArmed(!0),xe.add(le.av.group),le.model=le.av.group}else{let ve=td[l]();le.beast=ve,xe.add(ve.group),le.model=ve.group}return le.mats=[],xe.traverse(ve=>{ve.isMesh&&ve.material&&ve.material.emissive&&!le.mats.includes(ve.material)&&le.mats.push(ve.material)}),le.mats.forEach(ve=>{ve.userData.e0=ve.emissive.getHex(),ve.userData.i0=ve.emissiveIntensity}),le.barCv=document.createElement("canvas"),le.barCv.width=64,le.barCv.height=8,le.barTex=new On(le.barCv),le.bar=new Qi(new Ci({map:le.barTex,transparent:!0,depthWrite:!1,fog:!1})),le.bar.scale.set(le.boss?2.6:1.3,le.boss?.22:.14,1),le.bar.position.y=q.h+.3,le.bar.visible=l!=="dummy",xe.add(le.bar),Ce(le),l!=="dummy"&&(le.warn=new Qi(new Ci({map:Ze,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),le.warn.position.y=q.h+(le.boss?1.25:.95),le.warn.visible=!1,le.warn.renderOrder=9,xe.add(le.warn)),xe.position.set(R,le.y,T),xe.rotation.y=le.yaw,e.add(xe),O.push(le),!X.quiet&&l!=="dummy"&&(Xe(R,le.y,T,6962431,1.2+le.rad,6,.7),Fe(R,le.y,T,9133302,.3,2.4+le.rad,.55)),le}function P(l){let R=O.indexOf(l);if(R>=0&&O.splice(R,1),e.remove(l.obj),l.barTex.dispose(),li(l.obj),l.wild){let T=l.wild;T.es=T.es.filter(k=>k!==l),!T.es.length&&l.state==="dead"&&(T.t=45)}}function te(l){l.state!=="dead"&&(ke(l),l.state="dead",l.t=0,l.hp=0,Ce(l),B(l.x,l.y+l.T.h*.5,l.z,9133302,l.boss?40:18,6,.7),Fe(l.x,l.y,l.z,12167423,.4,l.boss?7:3,.6),l.boss&&(ee.shake=Math.max(ee.shake,.5),h(l.T.name+" terrass\xE9")))}let de=l=>{y.charge=Math.min(100,y.charge+l)},Me=l=>{l<=0||y.down>0||(y.hp=Math.min(y.max,y.hp+l),ue(t.x,t.y+2.1,t.z,"+"+l,"heal"))},we=()=>(m.atk||0)+(y.atkT>0?y.atkB:0),qe=(l,R,T)=>ue(l.x,l.y+l.T.h+.35,l.z,R,T||"info");function ke(l){l.treeM&&(l.obj.remove(l.treeM),l.treeM.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}),l.treeM=null,l.model&&(l.model.visible=!0))}function We(l,R,T,k){if(l.state==="dead")return;ke(l);let X=l.state===R;l.state=R,l.stun=Math.max(X?l.stun:0,T),l.kd=!1,qe(l,k)}function nt(l,R,T){if(!R||l.state==="dead"||(R.weak&&(l.weakK=R.weak[0],l.weakT=R.weak[1],qe(l,"Vuln\xE9rable")),R.dot&&(l.dots=l.dots.filter(X=>X.k!==T),l.dots.push({k:T,v:S*(1+we())*R.dot[0],n:R.dot[1],t:1})),R.notes&&(l.notes=Math.min(5,l.notes+R.notes),l.noteT=8),R.runes&&(l.runes=Math.min(5,l.runes+R.runes),l.runeT=10,Ce(l)),l.type==="dummy"))return;let k=l.boss?.5:l.elite?.75:1;if(R.pull&&!l.boss){let X=t.yaw+(Math.random()-.5)*.8,q=1.7+l.rad;$e(t.x,t.y+1.1,t.z,Le(l.x,l.z),1.57,fe(t.x,t.z,l.x,l.z),16777215,.25),l.x=t.x+Math.sin(X)*q,l.z=t.z+Math.cos(X)*q}if(R.kd&&(We(l,"stun",R.kd*k,"\xC0 terre"),l.kd=!0),R.stun&&We(l,"stun",R.stun*k,"\xC9tourdi"),R.para&&We(l,"stun",R.para*k,"Paralys\xE9"),R.sleep&&We(l,"sleep",R.sleep*k,"Endormi"),R.fear&&We(l,"fear",R.fear*k,"Apeur\xE9"),R.tree)if(l.boss)We(l,"stun",1.5,"\xC9tourdi");else{We(l,"tree",R.tree,"M\xE9tamorphos\xE9");let X=new Rt,q=new Ne(new vn(.14,.2,.9,7).translate(0,.45,0),new tn({color:5913890,roughness:1})),K=new Ne(new un(.75,1.5,8).translate(0,1.55,0),new tn({color:5216826,roughness:1}));X.add(q,K),l.obj.add(X),l.treeM=X,l.model&&(l.model.visible=!1),B(l.x,l.y+1,l.z,9166954,16,4,.5)}R.root&&(l.rootT=Math.max(l.rootT,R.root*k),qe(l,"Enracin\xE9"),Fe(l.x,l.y,l.z,9166954,l.rad+.6,l.rad+.7,R.root*k,.8)),R.slow&&(l.slowK=R.slow[0],l.slowT=R.slow[1],qe(l,"Ralenti")),R.sil&&(l.silT=Math.max(l.silT,R.sil*k),qe(l,"Silence")),R.aspd&&(l.aspdK=R.aspd[0],l.aspdT=R.aspd[1],qe(l,"Gestes ralentis")),R.sap&&(l.sapK=R.sap[0],l.sapT=R.sap[1],qe(l,"Affaibli"))}function ct(l,R,T={}){if(l.state==="dead")return 0;let k=S*(1+we())*R*(ee.avg?1:1-g.var+Math.random()*2*g.var),X=!!T.crit;y.stealthT>0&&!T.pet&&(k*=y.stealthK,X=!0,mt(0),qe(l,"Surprise","crit")),l.state==="sleep"&&(k*=1.5,l.state="chase",l.stun=0);let q=!!m.back&&!T.pet&&Math.abs(Ss(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))>2,K=d.critDmg+(q?m.back.cdm:0),le=Math.min(Ui.crit,d.crit+(y.critT>0?y.critB:0)+(q?m.back.crit:0));if(ee.avg?k*=X?K:1+le*(K-1):(X=X||Math.random()<le,X&&(k*=K)),T.pierce||(k*=100/(100+l.def)),l.weakT>0&&(k*=1+l.weakK),k=Math.max(1,Math.round(k)),y.dealt+=k,l.type==="dummy"?l.wobT=.5:l.hp-=k,T.pet||(y.focus=l,y.focusT=6),l.flash=.09,Ce(l),ue(l.x,l.y+l.T.h*.85,l.z,(q&&X?"\u2726\u2726 ":X?"\u2726 ":"")+k,X?"crit":""),B(l.x,l.y+l.T.h*.55,l.z,T.color||f,X?12:6,4,.35),T.acc&&(T.acc.d+=k),T.steal&&Me(Math.round(k*T.steal/100)),T.cc&&nt(l,T.cc,T.key),l.type!=="dummy"){if(X&&m.kdOnCrit&&l.kdCd<=0&&l.hp>0?(l.kdCd=4,nt(l,{kd:m.kdOnCrit})):X&&T.basic&&g.W.kd&&!y.mecha&&l.kdCd<=0&&l.hp>0&&Math.random()<g.W.kd&&(l.kdCd=4,nt(l,{kd:1.5})),X&&T.basic&&g.W.kb&&!l.boss&&l.rootT<=0){let xe=Math.atan2(l.x-t.x,l.z-t.z);l.x+=Math.sin(xe)*g.W.kb,l.z+=Math.cos(xe)*g.W.kb}if(!l.boss&&l.rootT<=0){let xe=Math.atan2(l.x-t.x,l.z-t.z),ve=T.kb??.3;l.x+=Math.sin(xe)*ve,l.z+=Math.cos(xe)*ve}l.state==="idle"&&(l.state="chase"),l.hp<=0&&te(l)}return k}function me(l,R=1){if(y.down>0||y.inv>0)return;let T=Math.max(1,Math.round(l.atk*R*(l.sapT>0?1-l.sapK:1)*(.9+Math.random()*.2)*100/(100+d.def)));if(y.mecha){y.mecha.hp-=T,y.lastHit=0,ue(t.x,t.y+3.4,t.z,"-"+T,"info"),ee.shake=Math.max(ee.shake,.12),y.mecha.hp<=0&&Re(!0);return}if(Math.random()<Math.min(Ui.dodge,d.dodge+(m.dodge||0))){ue(t.x,t.y+2.1,t.z,"Esquive","info");return}if(m.block&&Math.random()<Math.min(Ui.block,m.block)){ue(t.x,t.y+2.1,t.z,"Bloqu\xE9","info"),Ue(t.x,t.y+1.1,t.z,16777215,.7,.15);return}if(T=Math.max(1,Math.round(T*(1-Math.min(.8,(m.guard||0)+(y.guardT>0?y.guardB:0))))),y.absorbT>0){let k=Math.round(T*y.absorbB);T-=k,Me(k)}if(y.shield>0){let k=Math.min(y.shield,T);if(y.shield-=k,T-=k,T<=0){ue(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}if(!(T<=0)){if(y.hp-=T,y.lastHit=0,de(2),ue(t.x,t.y+2.1,t.z,"-"+T,"hurt"),ee.shake=Math.max(ee.shake,.22),n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),be(.2,()=>o.classList.remove("ew-hit")),y.hp<=0&&m.rez&&y.rezCd<=0){y.rezCd=m.rez,y.hp=Math.round(y.max*.5),y.inv=2.5,Xe(t.x,t.y,t.z,16773808,1.6,12,.9),Fe(t.x,t.y,t.z,16773808,.4,5,.7),h("R\xE9surrection","De nouveau disponible dans "+m.rez+" s");return}y.hp<=0&&(y.hp=0,y.down=2.8,t.down=!0,y.queue=!1,mt(0),h("Vaincu",z.on?"Vague "+z.wave+" atteinte":"Les ombres se dispersent"))}}let ut=null;function mt(l,R){let T=l>0;y.stealthT=l,T&&(y.stealthK=R),ut||(ut=[],n.group.traverse(k=>{if(!(!k.isMesh||!k.material||k.userData.ink))for(let X of Array.isArray(k.material)?k.material:[k.material])!X.transparent&&!ut.includes(X)&&ut.push(X)}));for(let k of ut)k.transparent=T,k.opacity=T?.3:1,k.needsUpdate=!0;for(let k of n.inks||[])k.visible=!T}function dt(l){for(let lt of W.slice())Ye(lt);let R=new Rt,T=new Bt({color:l.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),k=Te(l.color,.13),X=new Bt({color:16777215,fog:!1}),q=(lt,Ke,At,vt,Ot,En)=>{let fn=new Ne(lt,Ke);return fn.position.set(At,vt,Ot),(En||R).add(fn),fn};q(new un(.95,2.6,12).rotateX(Math.PI),T,0,1.3,0),q(ye.ball,T,0,2.75,0).scale.set(1.2,1.05,.85),q(ye.ball,k,0,2.7,0).scale.setScalar(1.7),q(ye.ball,T,0,3.95,.05).scale.setScalar(.52);for(let lt of[-1,1])q(ye.ball,X,lt*.2,4,.47).scale.set(.1,.05,.05),q(new un(.14,.6,6),T,lt*.34,4.5,0).rotation.z=-lt*.5;let K=[];for(let lt of[-1,1]){let Ke=new Rt;Ke.position.set(lt*1.3,3.15,0),q(ye.ball,T,0,0,0,Ke).scale.setScalar(.5),q(new vn(.3,.36,1.6,8).translate(0,-.9,0),T,0,0,0,Ke),q(ye.ball,T,0,-1.9,0,Ke).scale.setScalar(.52),R.add(Ke),K.push(Ke)}R.scale.setScalar(l.sc);let le=t.yaw+.6,xe=t.x+Math.sin(le)*3,ve=t.z+Math.cos(le)*3,Se={S:l,obj:R,arms:K,x:xe,z:ve,y:r(xe,ve),yaw:t.yaw,hp:Math.round(y.max*l.hp),max:Math.round(y.max*l.hp),rad:1.2*l.sc,life:60,cd:.4,swing:0,t:0,rage:0};return Se.barCv=document.createElement("canvas"),Se.barCv.width=64,Se.barCv.height=8,Se.barTex=new On(Se.barCv),Se.bar=new Qi(new Ci({map:Se.barTex,transparent:!0,depthWrite:!1,fog:!1})),Se.bar.scale.set(2.4,.2,1),Se.bar.position.y=5.3,R.add(Se.bar),it(Se),R.position.set(xe,Se.y,ve),e.add(R),W.push(Se),Xe(xe,Se.y,ve,l.color,2.2,9,.8),Fe(xe,Se.y,ve,l.color,.4,4.5,.7),B(xe,Se.y+2,ve,l.color,30,6,.8),h(l.name),Se}function it(l){let R=l.barCv.getContext("2d");R.clearRect(0,0,64,8),R.fillStyle="rgba(0,0,0,.75)",R.fillRect(0,0,64,8),R.fillStyle="#7fe0ff",R.fillRect(1,1,62*Math.max(0,l.hp/l.max),6),l.barTex.needsUpdate=!0}function Ye(l){let R=W.indexOf(l);R>=0&&W.splice(R,1),B(l.x,l.y+2,l.z,l.S.color,24,5,.7),e.remove(l.obj),l.barTex.dispose(),l.obj.traverse(T=>{T.material&&T.material.dispose(),T.geometry&&!T.geometry.userData.shared&&T.geometry.dispose()})}function pt(l,R){let T=Math.max(1,Math.round(R.atk*(.9+Math.random()*.2)*100/(100+d.def)));l.hp-=T,it(l),ue(l.x,l.y+4.6*l.S.sc,l.z,"-"+T,"info"),l.hp<=0&&(h(l.S.name+" dissip\xE9"),Ye(l))}function St(l,R){if(l.t+=R,l.life-=R,l.cd-=R,l.rage>0&&(l.rage-=R),l.life<=0){Ye(l);return}let T=l.S,k=bt(l.x,l.z,24)||(y.focusT>0&&y.focus&&y.focus.state!=="dead"&&fe(l.x,l.z,y.focus.x,y.focus.z)<24?y.focus:null),X=0,q,K,le;k?(q=k.x,K=k.z,le=2.6*T.sc+k.rad):(q=t.x,K=t.z,le=4.5);let xe=q-l.x,ve=K-l.z,Se=Math.hypot(xe,ve);if(Se>le)X=Math.min(k?9:14,(Se-le)*4+2),l.yaw+=Ss(Math.atan2(xe,ve),l.yaw)*Math.min(1,R*7),l.x+=Math.sin(l.yaw)*X*R,l.z+=Math.cos(l.yaw)*X*R;else if(k&&(l.yaw+=Ss(Math.atan2(xe,ve),l.yaw)*Math.min(1,R*8),l.cd<=0)){l.cd=T.iv,l.swing=Math.min(.45,T.iv*.8);let Ke=()=>{if(!W.includes(l))return;let At=l.x+Math.sin(l.yaw)*2,vt=l.z+Math.cos(l.yaw)*2,Ot=T.mult*(l.rage>0?2:1);$e(l.x,l.y+2.2,l.z,l.yaw,.2,T.aoe*T.sc,T.color,.3),T.iv>.8&&Fe(At,l.y,vt,T.color,.4,T.aoe*T.sc,.4);let En=!0;for(let fn of O.slice())fn.state!=="dead"&&fe(At,vt,fn.x,fn.z)<T.aoe*T.sc+fn.rad&&(fn.type!=="dummy"||fn===y.focus)&&(ct(fn,En?Ot:Ot*.6,{color:T.color,kb:.5,pet:1,cc:T.cc,key:T.id}),En=!1)};T.iv>.8?be(.2,Ke):Ke()}T.heal&&y.hp<y.max&&y.down<=0&&fe(l.x,l.z,t.x,t.z)<14&&(y.hp=Math.min(y.max,y.hp+y.max*T.heal/100*R)),l.y=Math.max(r(l.x,l.z),.2),l.swing>0&&(l.swing-=R);let lt=l.swing>0?Math.sin((1-l.swing/.45)*Math.PI):0;l.obj.scale.setScalar(T.sc*(l.rage>0?1.3:1)),l.obj.position.set(l.x,l.y+.25+Math.sin(l.t*2)*.15,l.z),l.obj.rotation.y=l.yaw,l.arms[0].rotation.x=-lt*2.1-.1,l.arms[1].rotation.x=-lt*1.6-.1+Math.sin(l.t*1.5)*.08,l.obj.visible=!t.inside}function Ut(){let l=new Rt,R=new tn({color:9148330,metalness:.3,roughness:.5}),T=new tn({color:4015702,metalness:.3,roughness:.6}),k=new tn({color:61695,emissive:61695,emissiveIntensity:1.6}),X=new tn({color:10483455,emissive:2808063,emissiveIntensity:.6,transparent:!0,opacity:.55}),q=(ve,Se,lt,Ke,At,vt,Ot,En)=>{let fn=new Ne(new zn(ve,Se,lt),Ke);return fn.position.set(At,vt,Ot),fn.castShadow=!0,(En||l).add(fn),fn};q(1.5,1.25,1.1,R,0,2.3,0),q(1.1,.5,.9,T,0,1.55,0),q(.5,.3,.44,T,0,3.1,.05),q(.4,.09,.05,k,0,3.12,.28),q(.18,.5,.05,k,0,2.3,.56);let K=new Ne(new Qn(.46,14,10),X);K.position.set(0,2.62,.42),K.scale.set(1,.8,.8),l.add(K);for(let ve of[-1,1]){q(.34,.5,.5,T,ve*.5,2.9,-.5);let Se=new Ne(new un(.16,.5,8),k);Se.position.set(ve*.5,2.5,-.62),Se.rotation.x=Math.PI,l.add(Se)}let le=[],xe=[];for(let ve of[-1,1]){let Se=new Rt;Se.position.set(ve*.46,1.4,0),q(.42,.8,.48,R,0,-.38,0,Se),q(.48,.74,.56,T,0,-1.02,.02,Se),q(.56,.2,.86,R,0,-1.32,.12,Se),q(.1,.5,.05,k,0,-.9,.3,Se),l.add(Se),le.push(Se)}for(let ve of[-1,1]){let Se=new Rt;Se.position.set(ve*1.08,2.7,0),q(.72,.5,.74,R,0,.06,0,Se),q(.76,.1,.78,k,0,-.22,0,Se),q(.36,.9,.42,T,0,-.6,0,Se),q(.62,.62,.62,R,0,-1.3,0,Se),q(.64,.1,.64,k,0,-.96,0,Se),l.add(Se),xe.push(Se)}return{g:l,legs:le,arms:xe}}function ft(){let l=Ut();e.add(l.g);let R=Math.round(y.max*g.mecha.hp);y.mecha={M:l,hp:R,max:R,t:g.mecha.dur,ph:0,swing:0,arm:0},n.group.visible=!1,C=g.mecha.basic,F=!0,o.classList.add("ew-mecha"),Xe(t.x,t.y,t.z,61695,2.6,11,.8),Fe(t.x,t.y,t.z,61695,.5,6,.7),B(t.x,t.y+2,t.z,61695,40,8,.9),ee.shake=.4,h("Mecha en ligne","Il encaisse \xE0 votre place")}function Re(l){let R=y.mecha;R&&(y.mecha=null,e.remove(R.M.g),li(R.M.g),n.group.visible=!0,C=g.basic,F=C.kind==="melee",o.classList.remove("ew-mecha"),y.cds[1]=y.cdMax[1]=M[0].cd,y.inv=Math.max(y.inv,.8),B(t.x,t.y+1.5,t.z,l?16742970:61695,40,9,.9),Fe(t.x,t.y,t.z,61695,.5,6,.6),l&&(ee.shake=.6,h("Mecha d\xE9truit")))}function Y(l){for(;j.length>=2;){let k=j.shift();He(k.m)}let R=new Rt,T=new Ne(ye.ring,Te(f,.75));T.scale.setScalar(1.3),T.position.y=.08,R.add(T);for(let k=0;k<6;k++){let X=new Ne(new un(.07,.4,5),new tn({color:10134704,metalness:.8,roughness:.3}));X.position.set(Math.cos(k*1.047)*.7,.2,Math.sin(k*1.047)*.7),R.add(X)}R.position.set(t.x,t.y,t.z),e.add(R),j.push({m:R,x:t.x,z:t.z,y:t.y,t:25,s:l,ring:T})}function Be(l){for(let R=j.length-1;R>=0;R--){let T=j[R];T.t-=l,T.ring.rotation.y+=l*1.5;let k=T.t<=0?null:O.find(X=>X.state!=="dead"&&fe(T.x,T.z,X.x,X.z)<2.6+X.rad&&(X.type!=="dummy"||X===y.focus));k&&(Xe(T.x,T.y,T.z,f,1.6,5,.5),Et(T.x,T.y,T.z,T.s.dmg.r,T.s.dmg.mult,{cc:T.s.cc,key:T.s.name,color:f}),ee.shake=Math.max(ee.shake,.25)),(k||T.t<=0)&&(He(T.m),j.splice(R,1))}}function ze(){y.hp=y.max,y.shield=0,t.down=!1,y.inv=2;for(let l of W.slice())Ye(l);if(z.on)pe(),i.teleport(ot.x+17,ot.z);else{for(let l of O)l.wild&&(l.state="idle",l.hp=l.max,Ce(l));i.teleport(-6,34),h("Rue du Four","Vous reprenez connaissance devant la Maison")}}function st(l,R){let T=l.obj;if(l.flash>0){l.flash-=R;let Mt=l.flash>0;for(let Lt of l.mats)Mt?(Lt.emissive.setHex(16777215),Lt.emissiveIntensity=.9):(Lt.emissive.setHex(Lt.userData.e0),Lt.emissiveIntensity=Lt.userData.i0)}if(l.warn){let Mt=l.state==="wind";if(Mt){let Lt=l.t/(l.T.wind*(l.aspdT>0?1+l.aspdK:1)),an=Lt>.55,Un=.5+.5*Math.sin(t.t*(an?34:16));if(l.warn.material.color.setHex(an?16720952:16765470),l.warn.scale.setScalar((l.boss?1.3:.85)*(1+Un*(an?.3:.12))),l.flash<=0){for(let Es of l.mats)Es.emissive.setHex(16717872),Es.emissiveIntensity=.25+Un*.5;l.tint=!0}}else if(l.tint&&l.flash<=0){l.tint=!1;for(let Lt of l.mats)Lt.emissive.setHex(Lt.userData.e0),Lt.emissiveIntensity=Lt.userData.i0}l.warn.visible=Mt}if(l.state==="dead"){l.t+=R;let Mt=l.t/.55;T.scale.setScalar(Math.max(.01,1-Mt)),T.position.y=l.y-Mt*.4,Mt>=1&&P(l);return}let k=l.type==="dummy",X=(l.weakT>0?1+l.weakK:1)*(1+Math.min(Ui.crit,d.crit)*(d.critDmg-1));for(let Mt of l.dots)if(Mt.t-=R,Mt.t<=0&&Mt.n>0){Mt.t+=1,Mt.n--;let Lt=Math.max(1,Math.round(Mt.v*X));if(y.dealt+=Lt,k||(l.hp-=Lt),ue(l.x,l.y+l.T.h,l.z,Lt,"dot"),Ce(l),!k&&l.hp<=0){te(l);return}}if(l.dots.length&&(l.dots=l.dots.filter(Mt=>Mt.n>0)),l.notes>0){if(l.noteT-=R,l.noteAcc+=R,l.noteAcc>=1){l.noteAcc-=1;let Mt=Math.max(1,Math.round(S*Uc*l.notes*X));if(y.dealt+=Mt,k||(l.hp-=Mt),ue(l.x,l.y+l.T.h+.2,l.z,"\u266A "+Mt,"dot"),Ce(l),!k&&l.hp<=0){te(l);return}}l.noteT<=0&&(l.notes=0)}if(l.weakT>0&&(l.weakT-=R),l.runes>0&&(l.runeT-=R)<=0&&(l.runes=0,Ce(l)),k){l.wobT>0&&(l.wobT-=R,l.wob.rotation.x=Math.sin(l.wobT*34)*.5*l.wobT);return}l.rootT>0&&(l.rootT-=R),l.slowT>0&&(l.slowT-=R),l.silT>0&&(l.silT-=R),l.aspdT>0&&(l.aspdT-=R),l.sapT>0&&(l.sapT-=R),l.kdCd>0&&(l.kdCd-=R);let q=null,K=18;for(let Mt of W){if(Mt.hp<=0)continue;let Lt=fe(l.x,l.z,Mt.x,Mt.z);Lt<(Mt.S.taunt||K)&&(!q||Lt<K)&&(K=Lt,q=Mt)}let le=q?q.x:t.x,xe=q?q.z:t.z,ve=q?q.rad:y.mecha?.9:0,Se=le-l.x,lt=xe-l.z,Ke=Math.hypot(Se,lt)-ve,At=q?!0:y.down<=0&&!t.inside&&y.stealthT<=0,vt=l.aspdT>0?1+l.aspdK:1,Ot=0,En=null;if(l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear")l.stun-=R,l.state==="fear"&&(En=Math.atan2(l.x-t.x,l.z-t.z),Ot=l.spd*.9),l.state==="sleep"&&(l.zT-=R)<=0&&(l.zT=1.1,qe(l,"z z")),l.stun<=0&&(ke(l),l.state="chase",l.kd=!1);else if(l.state==="idle")if(At&&Ke<15)l.state="chase";else{if(l.wT-=R,!l.wander||l.wT<=0){let an=Math.random()*6.28,Un=Math.random()*7;l.wander=[l.home[0]+Math.sin(an)*Un,l.home[1]+Math.cos(an)*Un],l.wT=3+Math.random()*5}let Mt=l.wander[0]-l.x,Lt=l.wander[1]-l.z;Math.hypot(Mt,Lt)>.7&&(En=Math.atan2(Mt,Lt),Ot=l.spd*.3),l.hp<l.max&&(l.hp=Math.min(l.max,l.hp+l.max*.2*R),Ce(l))}else l.state==="chase"?!At||l.wild&&fe(l.x,l.z,l.home[0],l.home[1])>40?l.wild&&(l.state="idle",l.wander=l.home.slice(),l.wT=6):(En=Math.atan2(Se,lt),Ke>l.range*.82?Ot=l.spd:l.silT<=0&&(l.state="wind",l.t=0,l.av&&l.av.play(l.av.cat==="2h"?"heavy":"slash",l.T.wind*vt/.52,l.n++),Fe(l.x,l.y,l.z,16724048,.3,l.range+.5,l.T.wind*vt,.85))):l.state==="wind"?(l.t+=R,l.t<l.T.wind*vt*.6&&(En=Math.atan2(Se,lt)),!q&&At&&Ke<l.range+3&&(ee.warnT=.12),l.t>=l.T.wind*vt&&(l.state="rest",l.t=0,l.lunge=.25,$e(l.x,l.y+l.T.h*.5,l.z,l.yaw,.3,l.range*.95,16728160,.2),At&&Ke<l.range+.7&&Math.abs(Ss(Math.atan2(Se,lt),l.yaw))<1.25&&(q?pt(q,l):me(l)))):l.state==="rest"&&(l.t+=R,l.t>=l.T.rest*vt&&(l.state="chase"));if(l.rootT>0?Ot=0:l.slowT>0&&(Ot*=1-l.slowK),En!=null&&(l.yaw+=Ss(En,l.yaw)*Math.min(1,R*8)),Ot>0){let Mt=l.x+Math.sin(l.yaw)*Ot*R,Lt=l.z+Math.cos(l.yaw)*Ot*R;for(let an of O)if(an!==l&&an.state!=="dead"){let Un=fe(Mt,Lt,an.x,an.z),Es=l.rad+an.rad;Un<Es&&Un>.001&&(Mt=an.x+(Mt-an.x)/Un*Es,Lt=an.z+(Lt-an.z)/Un*Es)}if(l.arena){let an=fe(Mt,Lt,ot.x,ot.z),Un=ot.r-1-l.rad;an>Un&&(Mt=ot.x+(Mt-ot.x)/an*Un,Lt=ot.z+(Lt-ot.z)/an*Un)}l.x=Mt,l.z=Lt}if(l.arena){let Mt=fe(l.x,l.z,ot.x,ot.z),Lt=ot.r-1-l.rad;Mt>Lt&&(l.x=ot.x+(l.x-ot.x)/Mt*Lt,l.z=ot.z+(l.z-ot.z)/Mt*Lt)}l.y=Math.max(r(l.x,l.z),.2),l.lunge>0&&(l.lunge-=R);let fn=l.lunge>0?Math.sin((1-l.lunge/.25)*Math.PI)*.7:0;T.position.set(l.x+Math.sin(l.yaw)*fn,l.y,l.z+Math.cos(l.yaw)*fn),T.rotation.y=l.yaw;let Vo=l.kd&&l.state==="stun";l.av?(l.av.update(R,{speed:Ot/4.6}),l.av.group.rotation.x+=((Vo?-1.4:0)-l.av.group.rotation.x)*Math.min(1,R*12),l.av.group.position.y=Vo?.25:0):(l.beast.update(R,Ot/6),l.beast.group.rotation.x=l.state==="wind"?-.22*Math.min(1,l.t/(l.T.wind*vt)):l.state==="stun"?.12:0,l.beast.group.rotation.z+=((Vo?1.45:0)-l.beast.group.rotation.z)*Math.min(1,R*12))}function et(l,R=3.2,T){let k=null,X=1e9;for(let q of O){if(q.state==="dead")continue;let K=fe(t.x,t.z,q.x,q.z);if(K>l+q.rad)continue;let le=Math.abs(Ss(Le(q.x,q.z),t.yaw));if(le>R)continue;let xe=K+(T?0:le*3)+(q.type==="dummy"?T?40:5:0)+(T&&q.state==="sleep"?30:0);xe<X&&(X=xe,k=q)}return k}let bt=(l,R,T,k)=>{let X=null,q=T;for(let K of O){if(K.state==="dead"||K.type==="dummy"||K.state==="sleep"&&k==="awake"||k&&k.has&&k.has(K))continue;let le=fe(l,R,K.x,K.z);le<q&&(q=le,X=K)}return X};function Ct(l,R=!F){let T=et(l,3.2,R);return T&&(!R||t.speed<1.5)&&(t.yaw=Le(T.x,T.z)),T}let ht=l=>l&&l.state!=="dead"?l:null;function _t(l,R,T,k={}){let X=0;for(let q of O.slice()){if(q.state==="dead")continue;let K=fe(t.x,t.z,q.x,q.z);K>R+q.rad||T<3.1&&K>.9&&Math.abs(Ss(Le(q.x,q.z),t.yaw))>T||(ct(q,l,k),X++)}return X&&(ee.shake=Math.max(ee.shake,k.shake||.07)),X}function Et(l,R,T,k,X,q={},K){Ue(l,R+.4,T,q.color||f,k*.7),Fe(l,R,T,q.color||f,.3,k,.4),B(l,R+.5,T,q.color||f,14,6,.5);let le=0;for(let xe of O.slice())xe!==K&&xe.state!=="dead"&&fe(l,T,xe.x,xe.z)<k+xe.rad&&(ct(xe,X,q),le++);return le}function Oe(l,R,T={}){let k=T.target&&T.target.state!=="dead"?T.target:et(T.range||28,3.2,!0),X=n.hand(new G,T.off);l==="wave"&&X.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let q=k?new G(k.x-X.x,k.y+k.T.h*.55-X.y,k.z-X.z).normalize():new G(Math.sin(t.yaw),0,Math.cos(t.yaw));T.spread&&q.applyAxisAngle(l1,T.spread);let K=T.color||f,le=T.size||1,xe;if(l==="arrow")xe=new Ne(ye.arrow,Te(K,1)),xe.scale.set(le,le,1.1);else if(l==="bullet")xe=new Ne(ye.tracer,Te(K,1));else if(l==="wave")xe=new Ne(ye.arc,Te(K,.85)),xe.scale.setScalar(1.2);else{xe=new Ne(ye.ball,Te(K,l==="paint"?.95:.9,l!=="paint"));let Se=(l==="shell"?.3:l==="paint"?.2:.24)*le;if(xe.scale.setScalar(Se),l!=="paint"){let lt=new Ne(ye.ball,Te(16777215,.9));lt.scale.setScalar(.5),xe.add(lt)}}let ve=T.speed||26;xe.position.copy(X),e.add(xe),l!=="wave"&&Ue(X.x,X.y,X.z,K,.35,.12),Q.push({m:xe,kind:l,v:q.multiplyScalar(ve),life:(T.range||28)/ve+.25,mult:R,o:T,hit:new Set,target:k,homing:l!=="wave",age:0,bounce:T.bounce||0})}function Zt(l,R){l.age+=R,l.life-=R;let T=l.m.position;if(l.homing&&l.target&&l.target.state==="dead"&&(l.target=bt(T.x,T.z,12,l.hit)),l.homing&&l.target){let Se=l.target,lt=l.v.length();Pe.set(Se.x-T.x,Se.y+Se.T.h*.55-T.y,Se.z-T.z).normalize().multiplyScalar(lt),l.v.lerp(Pe,Math.min(1,R*(l.kind==="bullet"||l.kind==="arrow"?18:9))).setLength(lt)}let k=T.x,X=T.z;T.addScaledVector(l.v,R);let q=T.x-k,K=T.z-X,le=q*q+K*K;l.kind==="wave"?(l.m.rotation.y=Math.atan2(l.v.x,l.v.z),l.m.scale.setScalar(1.2+l.age*3.2),l.m.material.opacity=.85*Math.min(1,l.life*3)):(l.kind==="arrow"||l.kind==="bullet")&&l.m.lookAt(T.x+l.v.x,T.y+l.v.y,T.z+l.v.z);let xe=l.kind==="wave"?l.m.scale.x*.8:.35*(l.o.size||1),ve=l.life<=0;for(let Se of O){if(Se.state==="dead"||l.hit.has(Se))continue;let lt=le>0?Math.max(0,Math.min(1,((Se.x-k)*q+(Se.z-X)*K)/le)):1;if(!(fe(k+q*lt,X+K*lt,Se.x,Se.z)>Se.rad+xe||T.y<Se.y-.5-Math.abs(l.v.y)*R||T.y>Se.y+Se.T.h+.8+Math.abs(l.v.y)*R)){if(l.hit.add(Se),ct(Se,l.mult,l.o),l.o.aoe&&Et(T.x,Se.y,T.z,l.o.aoe,l.mult*.6,l.o,Se),l.bounce>0){let Ke=bt(T.x,T.z,14,l.hit);if(Ke){l.bounce--,l.mult*=.8,l.target=Ke;let At=l.v.length();l.v.set(Ke.x-T.x,Ke.y+Ke.T.h*.55-T.y,Ke.z-T.z).setLength(At),l.life=14/At+.25,Ue(T.x,T.y,T.z,16777215,.5,.12);break}}if(!l.o.thru){ve=!0;break}}}return!ve&&l.kind!=="wave"&&T.y<r(T.x,T.z)+.05?(ve=!0,l.o.aoe?Et(T.x,r(T.x,T.z),T.z,l.o.aoe,l.mult*.6,l.o):B(T.x,T.y+.1,T.z,l.o.color||f,5,2.5,.3)):ve&&l.life<=0&&l.o.aoe&&l.kind==="shell"&&Et(T.x,T.y,T.z,l.o.aoe,l.mult*.6,l.o),ve}function Vt(l,R,T,k={},X=32){let q=ht(l)||et(X,3.2,!0),K=q?q.x:t.x+Math.sin(t.yaw)*8,le=q?q.z:t.z+Math.cos(t.yaw)*8,xe=r(K,le);return Xe(K,xe,le,k.color||f,T*.5,5,.45),Et(K,xe,le,T,R,k)}let bn=()=>t.talking||t.paused||y.down>0?!1:(t.mount&&i.dismount(),!0);function V(l){if(l&&(y.idle=0),y.armed===l)return;y.armed=l,n.setArmed(l),o.classList.toggle("ew-armed",l);let R=o.querySelector('[data-c="draw"]');R&&R.classList.toggle("on",l)}let $=()=>t.x,ne=()=>t.y,Ie=()=>t.z;function tt(){if(!bn())return!1;if(V(!0),y.busy>0)return y.queue=!0,!1;let l=Ct(F?C.reach+4.5:C.range);if(F&&l){let xe=fe(t.x,t.z,l.x,l.z)-l.rad;xe>C.reach*.7&&i.dash(xe-C.reach*.55,.09)}let R=y.combo++,T=C.dur*(1-Math.min(Ui.aspd,y.aspdT>0?y.aspdB:0)),k=C.every&&(R+1)%C.every.n===0,X=k?C.mult*C.F*C.every.k:C.mult,q=k?[1]:C.seq;n.play(k?"heavy":C.anim,T*1.3,R),y.busy=T+(k?C.every.lock*.5:0),k&&(y.lock=C.every.lock),C.slowSelf&&(y.slowK=C.slowSelf,y.slowT=T*.85),y.mecha&&(y.mecha.swing=.4,y.mecha.arm=R%2);let K=C.dot||C.note||C.rune?{dot:C.dot,notes:C.note,runes:C.rune}:null,le=Math.min(.07,T*.4/q.length);return q.forEach((xe,ve)=>be(T*C.hit+ve*le,()=>{if(y.down>0)return;let Se=ve===0,lt=xe>=.5,Ke=X*xe,At={cc:Se?K:null,key:"basic",basic:1};if(F){if(lt){let Ot=n.dual?((R>>1)+ve)%3:R%3,En=C.anim==="heavy"?R%2?.12:1.45:C.anim==="punch"?R%2?.3:-.3:Ot===0?-.95:Ot===1?.2:1.57;$e($(),ne()+(C.mech?2.2:1.15),Ie(),t.yaw,Se?En:-En,C.reach*.95,f,C.mech?.3:.24),C.mech&&(Fe($()+Math.sin(t.yaw)*2.4,ne(),Ie()+Math.cos(t.yaw)*2.4,f,.4,2.6,.3),ee.shake=Math.max(ee.shake,.12))}let vt={d:0};At.acc=vt,lt||(At.kb=0),_t(Ke,C.reach,C.arc,At)&&Se&&g.sustain&&!y.mecha&&y.hp<y.max&&Me(Math.max(1,Math.round(vt.d*.1+y.max*.06*C.dur)))}else if(k){$e($(),ne()+1.1,Ie(),t.yaw,.15,7.5,Oc[R%4],.3),$e($(),ne()+1.1,Ie(),t.yaw,-.2,6.5,16777215,.22);let vt=ht(l)||et(C.range,3.2,!0);if(vt)for(let Ot of O.slice())Ot.state!=="dead"&&fe(vt.x,vt.z,Ot.x,Ot.z)<2.6+Ot.rad&&ct(Ot,Ot===vt?Ke:Ke*.6,{color:Oc[R%4],basic:1})}else Oe(C.proj,Ke,Object.assign(At,{range:C.range,speed:C.speed,aoe:lt?C.aoe:0,size:lt?C.size:.6,thru:C.thru,bounce:lt&&C.bounce||0,off:n.dual&&(R+ve)%2===1,target:ht(l)||l,color:C.proj==="paint"?Oc[(R+ve)%4]:f}))})),!0}function gt(){if(t.talking||t.paused||y.down>0||y.dashCd>0)return;t.mount&&i.dismount();let l=i.inputDir();l!=null&&(t.yaw=l),y.dashCd=.36,y.inv=Math.max(y.inv,.36),y.busy=0,y.queue=!1,y.lock=0,Fe($(),ne(),Ie(),16777215,.3,1.9,.3,.6),Ue($(),ne()+1,Ie(),f,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let rt=l=>{let R=o.querySelector(".ew-skn");R&&(R.textContent=l,R.classList.remove("on"),R.offsetWidth,R.classList.add("on"))};function Ge(l,R){if(!l)return;let T=l.heal||l.hot?9306032:R.color||f;l.heal&&Me(Math.round(y.max*l.heal/100)),l.hot&&(y.hot=l.hot[0],y.hotT=l.hot[1]),l.atk&&(y.atkB=l.atk[0],y.atkT=l.atk[1]),l.crit&&(y.critB=l.crit[0],y.critT=l.crit[1]),l.aspd&&(y.aspdB=l.aspd[0],y.aspdT=l.aspd[1]),l.guard&&(y.guardB=l.guard[0],y.guardT=l.guard[1]),l.absorb&&(y.absorbB=l.absorb[0],y.absorbT=l.absorb[1]),l.inv&&(y.inv=Math.max(y.inv,l.inv)),l.gauge&&de(l.gauge),l.shield&&(y.shield=Math.round(y.max*l.shield[0]/100),y.shieldT=l.shield[1]),l.stealth&&(mt(l.stealth[0],l.stealth[1]),B($(),ne()+1,Ie(),10133696,20,3,.5)),l.reset!=null&&(y.cds[l.reset]=0),(l.heal||l.hot||l.atk||l.crit||l.aspd||l.guard||l.absorb||l.inv>1)&&(Xe($(),ne(),Ie(),T,1.2,4.2,.6),Fe($(),ne(),Ie(),T,.4,3,.5),B($(),ne()+1,Ie(),T,14,3,.6))}function A(l,R){let T=l.area,k=l.color||f;if(T.kind==="target"){let xe=ht(R)||et(30,3.2,!0);xe&&(Xe(xe.x,xe.y,xe.z,k,1,4,.5),nt(xe,l.cc,l.name));return}let X=T.kind==="zone"?ht(R)||et(30,3.2,!0):null,q=T.kind==="zone"?X?X.x:t.x+Math.sin(t.yaw)*8:t.x,K=T.kind==="zone"?X?X.z:t.z+Math.cos(t.yaw)*8:t.z,le=r(q,K);Fe(q,le,K,k,.4,T.r,.6),Ue(q,le+.6,K,k,T.r*.5,.3);for(let xe of O.slice())xe.state!=="dead"&&fe(q,K,xe.x,xe.z)<T.r+xe.rad&&nt(xe,l.cc,l.name)}function Z(l,R,T){if(y.down>0)return;let k=l.dmg,X=l.ult===1?D:1,q=l.color||f;if(l.special==="trap"){Y(l);return}if(l.special==="spirit"){y.spirit=(y.spirit+1)%ia.length,dt(ia[y.spirit]);return}if(l.special==="mecha"){ft();return}if(l.special==="enrage"){W.length||(y.spirit=Math.max(0,y.spirit),dt(ia[y.spirit]));for(let K of W)K.rage=8,K.hp=K.max,it(K),Xe(K.x,K.y,K.z,K.S.color,3,10,.8)}if(l.special==="runes"){let K=l.dmg;Fe($(),ne(),Ie(),13154047,.5,K.r,.5),Xe($(),ne(),Ie(),13154047,K.r*.35,6,.5),B($(),ne()+.6,Ie(),15326719,30,9,.7),ee.shake=Math.max(ee.shake,.35);for(let le of O.slice())if(le.state!=="dead"&&fe(t.x,t.z,le.x,le.z)<K.r+le.rad){let xe=le.runes;le.runes=0,xe&&qe(le,"Runes \xD7"+xe,"crit"),ct(le,(K.mult+K.per*xe)*X,{color:13154047,kb:.6,key:l.name,cc:{stun:Math.max(1,.5*xe)}})}return}if(l.exec){let K=ht(R)||et(36,3.2,!0);if(ee.shake=.7,!K){Fe($(),ne(),Ie(),f,.5,9,.8);return}Xe(K.x,K.y,K.z,16777215,1.4,18,.9),Xe(K.x,K.y,K.z,f,2.8,13,1),Fe(K.x,K.y,K.z,f,.5,10,.9),B(K.x,K.y+1,K.z,f,40,9,.9),K.type!=="dummy"&&K.hp<=K.max*(K.boss?.15:.35)?(qe(K,"R\xE9duit \xE0 n\xE9ant","crit"),te(K)):ct(K,8/v,{pierce:1,color:f,kb:1.2,cc:l.cc,key:l.name});return}if(k){let K=k.hits||1,le=k.gap||.15,xe={crit:k.crit,pierce:k.pierce,steal:k.steal,cc:l.cc,key:l.name,color:q,kb:k.kind==="around"?.7:void 0};for(let ve=0;ve<K;ve++)be(ve*le,()=>{if(y.down>0)return;let Se=(Array.isArray(k.mult)?k.mult[ve]:k.mult)*X,lt=K===1&&Se>=2.5;if(k.kind==="melee")$e($(),ne()+1.15,Ie(),t.yaw,ve%3===0?-.9:ve%3===1?.25:1.5,k.r*(.9+ve*.08),q,.28),_t(Se,k.r,k.arc||1.4,Object.assign({shake:.12+ve*.08},xe));else if(k.kind==="around")Fe($(),ne(),Ie(),q,.5,k.r,.45),lt?(Xe($(),ne(),Ie(),q,k.r*.4,7,.6),B($(),ne()+.5,Ie(),q,30,9,.7)):$e($(),ne()+1.1,Ie(),t.yaw+ve*1.3,ve%2?.2:-.2,k.r*.85,q,.3),_t(Se,k.r,3.2,Object.assign({shake:lt?.5:.18},xe));else if(k.kind==="shot")K>1&&n.play(l.anim==="flip"?"shoot":l.anim||C.anim,.14,ve),Oe(k.proj||C.proj||"bolt",Se,Object.assign({range:(k.range||30)+4,speed:k.speed||C.speed||36,aoe:k.aoe,size:k.size,bounce:k.proj==="bullet"?1:0,off:ve%2===1&&n.dual,target:ht(R)},xe));else if(k.kind==="zone")lt&&(ee.shake=Math.max(ee.shake,.5)),Vt(R,Se,k.r,xe);else if(k.kind==="target"){let Ke=ht(R)||et((k.range||26)+4,3.2,!0);if(!Ke)return;let At=Se;if(l.special==="notes"&&(At+=.7*Ke.notes,Fe(Ke.x,Ke.y,Ke.z,q,.3,2+Ke.notes*.6,.4),Ke.notes=0),Xe(Ke.x,Ke.y,Ke.z,q,.7,4,.35),Ue(Ke.x,Ke.y+Ke.T.h*.5,Ke.z,q,1.1,.2),ct(Ke,At,xe),k.aoe){Fe(Ke.x,Ke.y,Ke.z,q,.4,k.aoe,.4);for(let vt of O.slice())vt!==Ke&&vt.state!=="dead"&&fe(Ke.x,Ke.z,vt.x,vt.z)<k.aoe+vt.rad&&ct(vt,At*.5,xe)}}})}l.area&&A(l,R),Ge(l.self,l)}function se(l){if(l===0)return tt();let R=M[l-1];if(!R||!bn())return;let T=y.chain[l]&&y.chain[l].t>0?y.chain[l].s:null;if(T&&(R=T),I[l]){rt("Niveau "+na[l-1]+" requis \xB7 "+R.name);return}if(R.special==="mecha"&&y.mecha){y.busy<=.15&&(rt("\xC9jection"),Re(!1));return}if(R.ult){if(y.charge<100){rt("Jauge d\u2019ultime incompl\xE8te");return}}else if(!T&&y.cds[l]>0)return;if(y.busy>.15)return;V(!0),rt(R.name),T?y.chain[l]=null:R.ult?y.charge=0:y.cds[l]=y.cdMax[l]=R.cd,R.chain&&(y.chain[l]={t:xr(R)+4,s:R.chain});let k=R.dmg,X=R.cast??.25,q=k&&k.kind==="melee",K=q?et(k.r+5):k||R.area||R.exec?et((k&&k.range||30)+4,3.2,!0):null;if(K&&(q||k&&k.kind==="target"||R.exec||t.speed<1.5)&&(t.yaw=Le(K.x,K.z)),q&&K){let le=fe(t.x,t.z,K.x,K.z)-K.rad;le>k.r*.7&&i.dash(le-k.r*.55,.1)}if(R.move==="tp"&&K){B($(),ne()+1,Ie(),f,16,4,.4);let le=K.rad+1.5;if(t.x=K.x-Math.sin(K.yaw)*le,t.z=K.z-Math.cos(K.yaw)*le,t.y=r(t.x,t.z),t.yaw=K.yaw,z.on){let xe=fe(t.x,t.z,ot.x,ot.z);xe>ot.r-1.2&&(t.x=ot.x+(t.x-ot.x)/xe*(ot.r-1.2),t.z=ot.z+(t.z-ot.z)/xe*(ot.r-1.2))}Ue($(),ne()+1,Ie(),f,1.2,.25)}if(R.move==="back"&&(i.dash(-8.5,.26),Fe($(),ne(),Ie(),f,.4,2.2,.35)),n.play(R.anim||(F?"heavy":"cast"),Math.max(.42,xr(R)*1.05),y.combo++,R.turns||1),y.busy=xr(R),R.lock&&(y.lock=R.lock),R.ult&&(y.inv=Math.max(y.inv,xr(R))),y.mecha&&(y.mecha.swing=.45,y.mecha.arm=2),R.meteor){let le=K,xe=le?le.x:t.x+Math.sin(t.yaw)*10,ve=le?le.z:t.z+Math.cos(t.yaw)*10,Se=r(xe,ve);Fe(xe,Se,ve,f,k.r-.2,k.r,X,.7);let lt=new Ne(ye.ball,Te(f,.95)),Ke=new Ne(ye.ball,Te(16777215,.9));Ke.scale.setScalar(.55),lt.add(Ke),Qe(lt,X,At=>{lt.position.set(xe-7*(1-At),Se+22*(1-At)*(1-At)+.5,ve-4*(1-At)),lt.scale.setScalar(1.4)})}be(X,()=>Z(R,K,l))}function ie(){if(!(y.busy>0)){for(let l=1;l<=3;l++)if(y.chain[l]&&y.chain[l].t>0){se(l);return}for(let l=1;l<=3;l++)if(!I[l]&&y.cds[l]<=0&&!(M[l-1].special==="mecha"&&y.mecha)){se(l);return}tt()}}function w(l){if(l%10===0)return[{ty:"drake",hpK:1.35}];if(l%5===0)return[{ty:"champion",hpK:1.3}];let R=l-Math.floor(l/5)-1,T=[1,2,1,3,1,2,1,4][R%8];if(T===1)return[R%6===4?{ty:"brute",hpK:1.8}:{ty:"duel"}];T=Math.min(6,T+(l>=40?2:l>=20?1:0));let k=[];for(let X=0;X<T;X++)k.push({ty:l>=4&&X===0?"brute":X%2===1?"shade":"wolf"});return k}function H(){let l=++z.wave,R=w(l),T=Math.random()*6.28;h("Vague "+l,R.length===1?"Duel \xB7 "+gd[R[0].ty].name:"1 contre "+R.length),R.forEach((k,X)=>{let q=T+X/R.length*6.2832,K=15+X%2*2.5;L(k.ty,ot.x+Math.cos(q)*K,ot.z+Math.sin(q)*K,l,{arena:!0,hpK:k.hpK})})}let J=()=>5*Math.floor(z.best/5)+1;function re(l,R){z.on||(l=Math.max(1,Math.min(z.best+1,Math.round(l||J()))),z.on=!0,z.loop=!!R,z.wave=l-1,z.pending=null,V(!0),y.hp=y.max,H())}function pe(){z.on=!1,z.pending=null;for(let l of O.slice())l.arena&&P(l);for(let l of W.slice())Ye(l);for(let l of j.splice(0))He(l.m)}let ce=o.querySelector(".ew-cmb");if(ce){let l=T=>c?T===0?"Clic":String(T):"",R=`<button type="button" class="ew-atk" data-c="0"><em>${l(0)}</em><span>Attaque</span></button>`;if(M.forEach((T,k)=>{let X=k+1;R+=`<button type="button" class="ew-sk k${X}${T.ult?" ult":""}${I[X]?" lock":""}" data-c="${X}" title="${T.name.replace(/"/g,"")}"><i></i><em>${l(X)}</em><span>${I[X]?"Niv. "+na[k]:T.name}</span></button>`}),ce.insertAdjacentHTML("afterbegin",R),!c){let k=q=>ce.querySelector(q),X=(q,K,le,xe)=>{if(!q)return;let ve=le*Math.PI/180;q.style.right=47+K*Math.cos(ve)-xe/2+"px",q.style.bottom=47+K*Math.sin(ve)-xe/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((q,K)=>X(k(q),122,1+K*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((q,K)=>X(k(q),186,8+K*21,46))}}let _e=o.querySelector('[data-c="dodge"]'),De=!1,je={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:ce?[...ce.querySelectorAll(".ew-sk")]:[]},Tt="";function xt(){let l=y.armed||y.hp<y.max||z.on,R=y.cds.map(q=>Math.ceil(q*2)).join(","),T=y.mecha?Math.round(y.mecha.hp):-1,k=[g.role,y.mecha?"Mecha "+Math.max(0,Math.round(y.mecha.hp/y.mecha.max*100))+" %":"",m.mantra?"Mantra":"",y.stealthT>0?"Dissimul\xE9":"",N>0&&y.hp<y.max?"R\xE9g\xE9n\xE9ration":"",y.hotT>0?"Soin continu":"",y.atkT>0?"Attaque +"+Math.round(y.atkB*100)+" %":"",y.critT>0?"Critique +"+Math.round(y.critB*100)+" %":"",y.aspdT>0?"Cadence +"+Math.round(y.aspdB*100)+" %":"",y.guardT>0?"Garde":"",y.absorbT>0?"Absorption":"",y.inv>1?"Invuln\xE9rable":"",W.length?W[0].S.name:""].filter(Boolean).join(" \xB7 "),X=[l,Math.round(y.hp),Math.round(y.shield),Math.round(y.charge),R,T,k,z.on,z.wave,O.length,y.chain.map(q=>q&&q.t>0?1:0).join("")].join("|");if(X!==Tt){if(Tt=X,je.hud&&je.hud.classList.toggle("on",l),je.hp&&(je.hp.style.width=y.hp/y.max*100+"%",je.hpT.textContent=Math.round(y.hp)+" / "+y.max,je.sh.style.width=(y.mecha?Math.max(0,y.mecha.hp/y.mecha.max*100):Math.min(100,y.shield/y.max*100))+"%"),je.ult&&(je.ult.style.width=y.charge+"%",je.ultB.classList.toggle("full",y.charge>=100)),je.stt&&(je.stt.textContent=k),je.wave){let q=O.filter(K=>K.arena&&K.state!=="dead").length;je.wave.textContent=z.on?"Vague "+(z.wave+(z.loop&&z.pending!=null?1:0))+(z.loop?" en boucle":"")+(q?" \xB7 "+q+" ombre"+(q>1?"s":""):"")+(z.best?" \xB7 record "+z.best:""):"",je.wave.classList.toggle("on",z.on)}je.sk.forEach(q=>{let K=+q.dataset.c,le=M[K-1],xe=q.querySelector("i"),ve=y.chain[K]&&y.chain[K].t>0?y.chain[K].s:null,Se=q.querySelector("span"),lt=I[K]?"Niv. "+na[K-1]:(ve||le).name;Se.textContent!==lt&&(Se.textContent=lt),q.classList.toggle("chain",!!ve),ve?xe.style.height="0%":le.ult?(q.classList.toggle("ready",!I[K]&&y.charge>=100),xe.style.height=I[K]?"0%":100-y.charge+"%"):(xe.style.height=(y.cds[K]>0?y.cds[K]/y.cdMax[K]*100:0)+"%",q.classList.toggle("ready",le.special==="mecha"&&!!y.mecha))})}}for(let[l,R]of o1)L("dummy",l,R,1,{quiet:!0,yaw:0});let Ft=a1.map(([l,R,T,k,X])=>({x:l,z:R,type:T,lvl:k,n:X,es:[],t:0})).filter(l=>r(l.x,l.z)>1.6),It=0,ge=0;return ee.update=function(l){for(let T=b.length-1;T>=0;T--){let k=b[T];k.t-=l,k.t<=0&&(b.splice(T,1),k.fn())}y.busy-=l,y.lock-=l,y.inv-=l,y.lastHit+=l,y.dashCd-=l,y.slowT-=l,y.focusT-=l,y.rezCd-=l,ee.warnT-=l;for(let T of y.chain)T&&(T.t-=l);for(let T=0;T<y.cds.length;T++)y.cds[T]>0&&!(T===1&&y.mecha)&&(y.cds[T]-=l);for(let T of["atkT","critT","aspdT","guardT","absorbT","hotT"])y[T]>0&&(y[T]-=l);if(y.shieldT>0&&(y.shieldT-=l,y.shieldT<=0&&(y.shield=0)),y.stealthT>0&&(y.stealthT-=l,y.stealthT<=0&&mt(0)),y.armed&&bt(t.x,t.z,30)&&de(3.4*l),y.down>0)y.down-=l,y.down<=0&&ze();else if(y.hp<y.max){let T=0;N>0&&y.lastHit>2&&(T+=y.max*N/1e3*l),!z.on&&y.lastHit>6&&(T+=y.max*.07*l),m.regen&&(T+=y.max*m.regen*l),y.hotT>0&&(T+=y.max*y.hot/100*l),T&&(y.hp=Math.min(y.max,y.hp+T))}(y.queue||ee.held)&&y.busy<=0&&y.down<=0&&(y.queue=!1,tt());for(let T of W.slice())St(T,l);if(Be(l),y.mecha){let T=y.mecha,k=T.M;T.t-=l,T.ph+=l*(2+Math.abs(t.speed)*.9);let X=Math.min(1,Math.abs(t.speed)/6)*Math.sin(T.ph)*.55;k.legs[0].rotation.x=X,k.legs[1].rotation.x=-X,T.swing>0&&(T.swing-=l);let q=T.swing>0?Math.sin((1-T.swing/.4)*Math.PI):0;k.arms[0].rotation.x=-(T.arm!==1?q:0)*1.9+X*.4,k.arms[1].rotation.x=-(T.arm!==0?q:0)*1.9-X*.4,k.g.position.set(t.x,t.y+Math.abs(Math.sin(T.ph))*.06*Math.min(1,Math.abs(t.speed)/6),t.z),k.g.rotation.y=t.yaw,k.g.visible=!t.inside,T.t<=0&&Re(!1)}E&&!y.armed&&!y.manual&&!t.mount&&!t.inside&&!t.talking&&V(!0),y.armed&&!z.on&&!E&&!y.mecha&&(y.idle+=l,y.idle>25&&!O.some(T=>T.type!=="dummy"&&T.state!=="idle"&&T.state!=="dead")&&V(!1));for(let T of O.slice())T.obj.visible=!t.inside,!t.inside&&(T.arena||fe(T.x,T.z,t.x,t.z)<80)&&st(T,l);for(let T=Q.length-1;T>=0;T--)Zt(Q[T],l)&&(He(Q[T].m),Q.splice(T,1));for(let T=U.length-1;T>=0;T--){let k=U[T];k.t+=l;let X=Math.min(1,k.t/k.dur);k.upd(X),X>=1&&(He(k.obj),U.splice(T,1))}if(ee.shake=Math.max(0,ee.shake-l*2.2),Ee.visible=(y.shield>0||y.inv>1||y.guardT>0||y.absorbT>0)&&!t.inside&&!y.mecha,Ee.visible&&(Ee.position.set(t.x,t.y+1,t.z),Ee.material.opacity=.14+Math.sin(t.t*5)*.04),he.visible=y.atkT>0||y.critT>0||y.aspdT>0||!!m.mantra&&y.armed,he.visible&&(he.position.set(t.x,t.y+.12,t.z),he.scale.setScalar((m.mantra&&y.atkT<=0&&y.critT<=0?.8:1.1)+Math.sin(t.t*6)*.12),he.rotation.y=t.t*2),z.on)if(!oe(t.x,t.z)&&y.down<=0)h("D\xE9fi abandonn\xE9","Vague "+z.wave),pe();else if(z.pending==null&&!O.some(T=>T.arena&&T.state!=="dead")){let T=z.wave>z.best;z.best=Math.max(z.best,z.wave),T&&u.onArena&&u.onArena(z.best);let k=u.onWave?u.onWave(z.wave):null;Me(Math.round(y.max*.3)),h("Vague "+z.wave+" termin\xE9e",[k?"+"+k.x+" XP \xB7 +"+k.k+" kinahs"+(k.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui : 10 %)"):"",T?"nouveau record":""].filter(Boolean).join(" \xB7 ")),z.pending=z.loop?2.2:3.2,z.loop&&z.wave--}else z.pending!=null&&(z.pending-=l,z.pending<=0&&(z.pending=null,H()));if((It+=l)>.6){It=0;for(let T of Ft){let k=fe(T.x,T.z,t.x,t.z);if(T.t>0&&(T.t-=.6),k<85&&!T.es.length&&T.t<=0&&!t.inside)for(let X=0;X<T.n;X++){let q=X/T.n*6.28,K=T.x+Math.sin(q)*2.5*(T.n>1),le=T.z+Math.cos(q)*2.5*(T.n>1);T.es.push(L(T.type,K,le,T.lvl,{wild:T,quiet:!0}))}else if(k>150&&T.es.length)for(let X of T.es.slice())X.state="gone",P(X)}}ee.warnT>0!==De&&(De=ee.warnT>0,_e&&_e.classList.toggle("warn",De),o.classList.toggle("ew-warn",De)),(ge+=l)>.08&&(ge=0,xt())},Object.assign(ee,{attack:tt,skill:se,dodge:gt,rotate:ie,arm:V,toggleArm:()=>{y.manual=y.armed,V(!y.armed)},startArena:re,arenaStart:J,inArena:oe,spawn:L,moveK:()=>y.down>0||y.lock>0?0:y.slowT>0?y.slowK:1,dispose(){y.mecha&&(e.remove(y.mecha.M.g),li(y.mecha.M.g),y.mecha=null,n.group.visible=!0),mt(0);for(let l of W.slice())Ye(l);for(let l of j.splice(0))He(l.m);for(let l of U)He(l.obj);for(let l of Q)He(l.m);for(let l of O)l.barTex.dispose();for(let l in ye)ye[l].dispose()}}),E&&V(!0),xt(),ee}var Nc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},yr=(i,e)=>Math.exp(-(i*i)/(2*e*e)),rs=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),c1=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function qt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=Nc(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*yr(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*yr(n,230),t+=35*yr(Math.hypot(i-190,e+175),55)+16*yr(Math.hypot(i-120,e+235),50)+26*yr(Math.hypot(i,e+335),72);for(let s of c1){let r=1-Nc(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*yr(Math.abs(i-rs(e)),12),t}var bd=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function Go(i,e){let t=1e9;for(let[n,s,r,a]of bd){let o=r-n,c=a-s,h=Math.max(0,Math.min(1,((i-n)*o+(e-s)*c)/(o*o+c*c)));t=Math.min(t,Math.hypot(i-n-o*h,e-s-c*h))}return t}function yd(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-rs(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let c=Nc(44,72,t);o=[Yt(.4,.86,c*c),Yt(.37,.89,c*c),Yt(.36,.94,c*c)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&Go(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var _d=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],vd={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},h1={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},u1={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function oa(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var la=class{constructor(){this.b={},this.boxes=[],this.m4=new zt,this.q=new Wn,this.e=new Ji}add(e,t,n,s,r,a=0,o=1,c=1,h=1,u=0,d=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,d,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new G(n,s,r),this.q,new G(o,c,h)));for(let f of Object.keys(p.attributes))f!=="position"&&f!=="normal"&&p.deleteAttribute(f);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),c=(n*a+s*o)/2,h=(n*o+s*a)/2;this.boxes.push([e-c,e+c,t-h,t+h])}build(e,t){let n=new Rt;for(let s in this.b){let r=$r(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new Ne(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},Je=new zn(1,1,1),ra=new un(Math.SQRT1_2,1,4).rotateY(Math.PI/4),Qt=new vn(.5,.5,1,12),vr=new un(.5,1,12),zi=new Qn(.5,12,8),Mn=new Ki(1,1),d1=new Qn(.5,16,8,0,Math.PI*2,0,Math.PI/2),_r=new vn(.5,.5,1,56),aa=(()=>{let i=new mi;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new ir(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function ei(i,e,t,n,s,r,a,o,c,h,u={}){let d=u.y??qt(t,n);i.add(c,Je,t,d+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(h,Je,t,d+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(h,ra,t,d+a+p/2,n,o,s+1,p,r+1):i.add(h,aa,t,d+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",Je,t+Math.cos(o)*s*.25,d+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let f=Math.cos(o),x=Math.sin(o),_=Math.max(1,Math.floor(a/3.1));for(let[v,S,D,I]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let C=Math.max(1,Math.floor(D/2.8));for(let F=0;F<_;F++)for(let E=0;E<C;E++){if(F===0&&S===1&&E===Math.floor(C/2))continue;let y=(E-(C-1)/2)*(D/C),N=v?v*(I+.04):y,O=S?S*(I+.04):y,Q=t+N*f+O*x,U=n-N*x+O*f,b=o+Math.atan2(v,S);i.add(e()<(u.lit??.55)?"winLit":"winDark",Mn,Q,d+1.9+F*3.1,U,b,.9,1.25,1)}}let g=r/2+.05,m=t+g*x,M=n+g*f;return i.add("wood",Mn,m,d+1.05,M,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*x,n+(r/2+1.6)*f]}}function sa(i,e,t){let n=qt(e,t);i.add("iron",Qt,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",Je,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",zi,e,n+3.55,t,0,.42,.5,.42)}function f1(i,e){let t=new la,n=oa(20261112),s=[],r=[],a=(f,x,_,g)=>_.some(m=>Math.hypot(f-m[0],x-m[1])<(m[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],c=["wallA","wallB","wallC","wallW"],h=["roofA","roofB"];for(let f=-150;f<=150;f+=24)for(let x=-150;x<=160;x+=22){let _=f+(n()-.5)*6,g=x+(n()-.5)*5;if(Math.hypot(_,g)>158||a(_,g,o,0)||Go(_,g)<8.5||Math.abs(_-rs(g))<40||n()<.12)continue;let M=g>-10&&_>-70,v=9+n()*7,S=8+n()*6,D=(M?5.5:7)+n()*(M?4.5:8);ei(t,n,_,g,v,S,D,n()<.5?0:Math.PI/2,M?n()<.5?"wallB":"wallC":c[Math.floor(n()*4)],h[Math.floor(n()*2)],{lit:M?.4:.6,hip:n()<.25})}for(let[f,x,_,g]of bd.slice(0,6)){let m=Math.floor(Math.hypot(_-f,g-x)/22);for(let M=1;M<m;M++){let v=M/m,S=f+(_-f)*v,D=x+(g-x)*v,I=-(g-x),C=_-f,F=Math.hypot(I,C);sa(t,S+I/F*4.6,D+C/F*4.6)}}{let f=qt(-18,14);ei(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",Je,-12,f+3.2,22.5,.35,5.5,1.4,.05),t.add("white",Je,-6.5,f+3,20.6,.35,2.4,1.7,.05),t.add("iron",Qt,-15.5,f+2,24,0,.1,4,.1),t.add("iron",Qt,-4.5,f+2,19.6,0,.1,4,.1),t.add("wood",Je,-37,f+4.1,33,1.2,9,.35,7);for(let[x,_]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),m=Math.sin(1.2);t.add("wood",Qt,-37+x*g+_*m,f+2,33-x*m+_*g,0,.35,4,.35)}t.add("stoneD",Je,-39.5,f+1,35,1.2,2.6,2,2.2),t.add("ember",Je,-39.5,f+2.05,35,1.2,1.9,.2,1.5),t.add("iron",Je,-35.5,f+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",Je,-35.5,f+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,f+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let f=qt(0,-95);t.add("stone",Je,0,f+10,-98,0,22,21,46),t.add("roofB",aa,0,f+20.4,-98,0,24,10,47),t.add("stone",Je,0,f+22,-70.5,0,11,45,10),t.add("roofB",ra,0,f+53,-70.5,0,12,18,11),t.add("gold",Je,0,f+64,-70.5,0,.3,4,.3),t.add("gold",Je,0,f+64.6,-70.5,0,1.8,.3,.3),t.add("rose",Qt,0,f+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",Mn,0,f+2.6,-65.42,0,3.4,5.2,1);for(let x=0;x<4;x++)t.add("stoneL",Je,0,f-.3+x*-0+.2*(3-x),-63.6+x*.9,0,12+x*1.4,.4,1);for(let x=0;x<6;x++)for(let _ of[-1,1])t.add("rose",Mn,_*11.06,f+9,-116+x*7.2,_*Math.PI/2,2.2,8,1),t.add("stoneD",Je,_*12,f+6.5,-112.4+x*7.2,0,1.6,13,1.6);for(let x of[30,36])for(let[_,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",Mn,_*5.56,f+x,-70.5+(g?5.06:0),Math.atan2(_,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,f+5,-61,16767392,1.6,22])}{let f=qt(-118,-22);ei(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),ei(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let x=0;x<26;x++)t.add("iron",Qt,-96,f+1.4,-52+x*2.2,0,.12,2.8,.12);t.add("iron",Je,-96,f+2.5,-24.5,0,.14,.14,56),t.add("iron",Je,-96,f+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let f=qt(-62,112);t.add("wallC",Je,-62,f+5,122,.9,30,11,12),t.add("iron",Qt,-62,f+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",Mn,-57.2,f+6,118.2,.9+Math.PI,7,6,1);for(let x=0;x<12;x++)t.add("wood",Je,-74+x*2.6,f+.12,102+x*2.05,.9,.5,.2,5);t.add("iron",Je,-60,f+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",Je,-58.6,f+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let f=qt(70,30);for(let x of[-1,1])t.add("stoneD",Je,70+x*3.6*Math.cos(-1.2),f+3,30-x*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",Je,70,f+7.2,30,-1.2,9.4,2,3.2),t.add("void",Mn,70+.4*Math.sin(-1.2),f+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let x of[-1,1]){let _=70+x*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-x*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",Qt,_,f+.3,g,0,.16,.6,.16),t.add("lamp",zi,_,f+.72,g,0,.2,.3,.2)}r.push([67,f+1.6,28,16762977,1.1,10])}ei(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),ei(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let M=0;M<9;M++)if(t.add("wood",Je,188+M*2.2,1.1,24,0,2,.25,4.6),M%2===0)for(let v of[-1,1])t.add("wood",Qt,188+M*2.2,1.1-1.6,24+v*2.1,0,.3,3.6,.3);let x=(M,v,S,D)=>{t.add(D,zi,M,.55,v,S,2,1.3,5.2),t.add("void",Je,M,1,v,S,1.5,.3,4.2),t.add("wood",Je,M,.95,v,S,1.7,.1,.5)};x(206,29,.25,"wood"),x(203,6,-.2,"wallC"),x(204,48,.1,"wallB"),ei(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),ei(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),sa(t,186,21);let _=-56,g=rs(_),m=3.6;t.add("stone",Je,g,m,_,0,40,.8,6.5);for(let M of[-1,1])t.add("stone",Je,g,m+.9,_+M*3,0,40,1,.5);for(let M of[-9,9])t.add("stoneD",Je,g+M,m-3,_,0,2.4,6,6);sa(t,g-19,_+2.6),sa(t,g+19,_-2.6)}{let f=qt(190,-175);t.add("stoneL",Qt,190,f+4,-175,0,13,8,13),t.add("iron",d1,190,f+8,-175,0,13,13,13),t.add("void",Je,190,f+11.5,-171,0,1.6,5,6,-.6),t.add("wood",Mn,190,f+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let f=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[_,g,m]of f)ei(t,n,_,g,7.5,6.5,4.6,m,"wallA","snow",{lit:.7});let x=qt(-250,-250);ei(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",Je,-253.2,x+6,-227.6,.2,3,12,3),t.add("snow",ra,-253.2,x+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",Qt,-252,x+.5,-252,0,2.2,1,2.2),t.add("void",Qt,-252,x+1.02,-252,0,1.7,.02,1.7);for(let _ of[-1,1])t.add("wood",Qt,-252+_*1.1,x+1.6,-252,0,.16,2.4,.16);t.add("wood",aa,-252,x+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",Qt,-246,x+.2,-244,0,1.6,.4,1.6),t.add("ember",vr,-246,x+.8,-244,0,.9,1.2,.9),r.push([-246,x+1.6,-244,16747066,2,18])}{let f=qt(3,190);t.add("wood",Qt,3,f+1.4,190,0,.18,2.8,.18),t.add("wood",Je,3.5,f+2.4,190,.2,2.2,.5,.08)}{let f=ot.x,x=ot.z,_=qt(f,x),g=44;t.add("stoneD",_r,f,_+.02,x,0,72,.1,72),t.add("sand",_r,f,_+.06,x,0,45.6,.1,45.6),t.add("stoneD",_r,f,_+.09,x,0,5.4,.1,5.4),t.add("neon",_r,f,_+.1,x,0,4.6,.1,4.6),t.add("stoneD",_r,f,_+.11,x,0,4.2,.1,4.2),t.add("ember",_r,f,_+.12,x,0,1.1,.1,1.1);for(let m=0;m<g;m++){let M=(m+.5)/g*6.2832,v=Math.cos(M),S=Math.sin(M),D=-M+Math.PI/2,I=M>Math.PI?M-6.2832:M;if(Math.abs(I)<ot.gate+.05)continue;for(let E=0;E<4;E++){let y=24+E*2.1,N=6.2832*(y+1.1)/g+.06;t.add(E%2?"stone":"stoneL",Je,f+v*y,_+(.9+E)/2,x+S*y,D,N,.9+E,2.2)}let C=32.8,F=6.2832*(C+.8)/g+.06;t.add("stone",Je,f+v*C,_+4.3,x+S*C,D,F,8.6,1.4),m%2&&t.add("stoneL",Je,f+v*C,_+9.1,x+S*C,D,F*.6,1,1.4),m%4===1&&(t.add("iron",Qt,f+v*C,_+11.4,x+S*C,0,.14,5,.14),t.add(m%8===1?"banner":"flag",Je,f+v*C-S*.95,_+13.1,x+S*C+v*.95,D,1.8,1.1,.06))}for(let m of[-1,1]){let M=m*(ot.gate+.11),v=f+Math.cos(M)*30.5,S=x+Math.sin(M)*30.5;t.add("stoneL",Qt,v,_+6,S,0,4.6,12,4.6),t.add("roofA",vr,v,_+14.3,S,0,5.6,4.6,5.6),t.add("stoneD",Qt,f+37.5,_+.6,x+m*5,0,1.2,1.2,1.2),t.add("ember",vr,f+37.5,_+1.6,x+m*5,0,.9,1.2,.9),r.push([f+37.5,_+2.6,x+m*5,16747066,1.8,18])}t.add("stone",Je,f+30.5,_+9.8,x,0,4.4,3,11),t.add("banner",Je,f+32.8,_+8.8,x,0,.08,3.4,3),t.add("gold",Je,f+32.86,_+8.8,x,0,.08,1.4,.4),t.add("gold",Je,f+32.86,_+9.1,x,0,.08,.4,1.3)}let u=[];for(let f of i.houses||[]){let x=vd[f.id];if(!x)continue;let[_,g,m]=x,M=qt(_,g),v=Math.cos(m),S=Math.sin(m),D,I=(C,F)=>[_+C*v+F*S,g-C*S+F*v];if(f.id==="h0"){for(let[N,O,Q,U]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[b,W]=I(N,O);t.add("rock",zi,b,M+U*.2,W,n()*3,Q,U,Q)}let[C,F]=I(0,1.2);t.add("void",zi,C,M+1.2,F,m,4.4,4.6,2.4);let[E,y]=I(0,3.5);t.add("ember",vr,E,M+.4,y,0,.7,.9,.7),r.push([E,M+1.3,y,16747066,1.6,12]),D=I(0,4.2),t.solid(...I(0,-5),16,9)}else if(f.id==="h1")D=[72,27];else if(f.id==="h2"){t.add("stoneL",Je,...(C=>[C[0],M+4,C[1]])(I(-5.5,0)),m,1,9,16),t.add("stoneL",Je,...(C=>[C[0],M+2.6,C[1]])(I(5.5,-2)),m,1,6.2,11),t.add("stoneL",Je,...(C=>[C[0],M+5,C[1]])(I(0,-8)),m,12,11,1),t.add("stoneL",aa,...(C=>[C[0],M+10.4,C[1]])(I(0,-8)),m,12,4,1),t.add("roofB",Je,...(C=>[C[0],M+8.4,C[1]])(I(-2.6,-3)),m,6.4,.3,9.5,0,-.5),t.add("rose",Mn,...(C=>[C[0],M+6.5,C[1]])(I(0,-7.44)),m,2,4.6,1),t.add("stoneD",Je,...(C=>[C[0],M+.6,C[1]])(I(0,-5.6)),m,3,1.2,1.6);for(let[C,F]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(F,zi,...(E=>[E[0],M+.25,E[1]])(I(C,-3.4)),0,.7,.5,.7);D=I(0,9),t.solid(...I(-5.5,0),1.2,16,m),t.solid(...I(0,-8),12,1.2,m)}else if(f.id==="h3"){let C=ei(t,n,_,g,22,14,11,m,"wallA","roofA",{lit:.85,hip:!0});for(let F of[-1,1]){let[E,y]=I(F*13.5,1);ei(t,n,E,y,6,9,13,m,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let F of[-1,1])sa(t,...I(F*3,10));D=C.door}else if(f.id==="h4"){t.add("stone",Je,_,M+6,g,m,26,13,20);for(let[E,y]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[N,O]=I(E,y);t.add("stoneL",Qt,N,M+9,O,0,7,19,7),t.add("roofB",vr,N,M+22,O,0,8.2,8,8.2),t.add("flag",Je,N+.9,M+27.2,O,m,1.8,1,.06),t.add("iron",Qt,N,M+27,O,0,.12,3,.12)}for(let E=-5;E<=5;E++){let[y,N]=I(E*2.3,10.2);E%2&&t.add("stone",Je,y,M+13.4,N,m,1.2,1,.8)}let[C,F]=I(0,10.06);t.add("wood",Mn,C,M+2.4,F,m,4,5,1);for(let E of[-7,7])for(let y of[5,9]){let[N,O]=I(E,10.06);t.add("winLit",Mn,N,M+y,O,m,1.2,1.8,1)}D=I(0,12.5),t.solid(_,g,30,24,m)}else if(f.id==="h5"){t.add("obs",Je,_,M+9,g,m,20,18,16),t.add("obs",ra,_,M+24,g,m,16,12,13);for(let[E,y,N]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[O,Q]=I(E,y);t.add("obs",Je,O,M+N/2,Q,m,5,N,5),t.add("obs",ra,O,M+N+4,Q,m,5.6,8,5.6),t.add("umbra",Mn,...(U=>[U[0],M+N-3,U[1]])(I(E,y+2.54)),m,1,3,1)}let[C,F]=I(0,8.06);t.add("umbra",Mn,C,M+3.4,F,m,3.4,6.8,1),t.add("neon",Mn,C,M+3.4,F+.02*v,m,.3,6.8,1),D=I(0,10.6),t.solid(_,g,30,18,m),r.push([D[0],M+4,D[1],9133302,2.4,22])}else if(f.id==="h6"){t.add("light",Je,_,M+7,g,m,26,14,16),t.add("gold",aa,_,M+14,g,m,28,8,17.4);for(let E=-4;E<=4;E++)for(let y of[3,7,11]){if(E===0&&y===3)continue;let[N,O]=I(E*2.8,8.06);t.add("sun",Mn,N,M+y,O,m,1.3,2.2,1)}let[C,F]=I(0,8.08);t.add("sun",Mn,C,M+3,F,m,3,6,1);for(let E=0;E<6;E++){let[y,N]=I(0,9+E*1.1);t.add("light",Je,y,M-.2-E*.02,N,m,8+E,.5,1.1)}D=I(0,11.5),t.solid(_,g,26,16,m),r.push([D[0],M+6,D[1],16773312,3.2,40])}u.push({...f,x:D[0],z:D[1]})}let d=[],p=e.trees;for(let f=0;f<p*6&&d.length<p;f++){let x=(n()-.5)*860,_=(n()-.5)*860,g=qt(x,_);if(Math.hypot(x,_)<176&&n()>.04||g<2.2||g>70||Math.abs(x-rs(_))<16||Go(x,_)<5||Math.hypot(x-318,_-300)<104||a(x,_,Object.values(vd).map(v=>[v[0],v[1],24]),0)||a(x,_,[[-250,-250,44],[190,-175,16],[ot.x,ot.z,42]],0))continue;let M=_>150?1:.45;n()>M||d.push({x,y:g,z:_,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:d}}var Md=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function p1(i,e,t,n){let[s,r,a,o]=Md[e.r]||Md[0],c=5+e.r*.5,h=oa(77+e.r);i.add(r,Je,0,n-.25,0,0,a,.5,o),i.add(s,Je,0,n+c/2,-o/2,0,a,c,.5),i.add(s,Je,-a/2,n+c/2,0,0,.5,c,o),i.add(s,Je,a/2,n+c/2,0,0,.5,c,o),i.add("rug",Je,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",Je,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",Je,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",vr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",Je,0,n+3.8,-o/2+.6,0,1.6,c-3.2,.8),i.add("wood",Je,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[f,x]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",Qt,f*Math.min(2.6,a*.15),n+.47,x,0,.16,.95,.16);for(let f=-1;f<=1;f++)for(let x of[-1,1])i.add("wood",Qt,f*1.3,n+.3,1+x*1.4,0,.55,.6,.55);i.add("white",Qt,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",zi,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let f=0;f<u;f++){let x=f%2?1:-1,_=Math.floor(f/2),g=x*(a/2-1.5),m=-o/2+2.6+_*2.6;if(m>o/2-1.5)break;i.add("wood",Je,g,n+.35,m,0,2.2,.5,1.1),i.add("white",Je,g,n+.66,m,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][f%4],Je,g-x*.3,n+.75,m,0,1.5,.1,1.02)}for(let f of[-1,1])for(let x=-1;x<=1;x+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",Mn,f*(a/2-.27),n+2.6,x*o*.22,-f*Math.PI/2,1.3,1.9,1);let d=t.instruments||[],p=a/2-2;if(d.includes("i4")&&(i.add("wood",Je,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",Je,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),d.includes("i5")){for(let f=0;f<7;f++)i.add("gold",Qt,-p+f*.34,n+1.6+Math.abs(3-f)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-f)*.6,.26);i.add("wood",Je,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return d.includes("i1")&&(i.add("wood",zi,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",Je,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),d.includes("i3")&&(i.add("wallC",zi,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",Je,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(d.includes("i6")||d.includes("i2")||d.includes("i0"))&&(i.add("gold",Je,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",Je,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",Je,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",Mn,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:c,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(f=>Math.abs(f[0])<a/2-2&&Math.abs(f[1])<o/2-1.5)}}var m1=`
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
`;function wd(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let V=document.createElement("style");V.id="ew-css",V.textContent=m1,document.head.appendChild(V)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
    <div class="ew-zone"><b></b><i></i></div>
    <div class="ew-joy"><div class="ew-stick" style="display:none"><i></i></div></div>
    <div class="ew-top"><div class="ew-tl"><button type="button" class="ew-btn" data-w="menu">\u2630 Menu</button><div class="ew-hud"><div class="ew-bar ew-hp"><i></i><b></b><span></span></div><div class="ew-bar ew-ult"><i></i></div><div class="ew-st"></div></div></div><canvas class="ew-map" width="248" height="248"></canvas></div>
    <div class="ew-wave"></div><div class="ew-skn"></div><div class="ew-rot" data-w="fs">\u21BB Tournez le t\xE9l\xE9phone pour jouer \xE0 l\u2019horizontale<br><small>ou touchez ici : plein \xE9cran horizontal</small></div>
    <div class="ew-keys"><kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd> se d\xE9placer \xB7 <kbd>Maj</kbd> courir \xB7 <kbd>Espace</kbd> sauter \xB7 <kbd>E</kbd> agir \xB7 <kbd>M</kbd> monture \xB7 souris : cam\xE9ra \xB7 <kbd>\xC9chap</kbd> menu<br><kbd>Clic</kbd> attaquer \xB7 <kbd>Clic droit</kbd> ou <kbd>V</kbd> esquiver \xB7 <kbd>1</kbd>\u2013<kbd>5</kbd> techniques \xB7 <kbd>R</kbd> d\xE9gainer / rengainer</div>
    <div class="ew-prompt"><button type="button" data-w="act"></button></div>
    <div class="ew-cmb"><button type="button" class="ew-rnd ew-dg" data-c="dodge"><em>V</em><span>Esquive</span></button><button type="button" class="ew-rnd" data-c="draw"><em>R</em><span>Arme</span></button><button type="button" class="ew-rnd" data-w="mount"><em>M</em><span>Monture</span></button><button type="button" class="ew-rnd m" data-w="run">Sprint</button><button type="button" class="ew-rnd m ew-jp" data-w="jump">Saut</button></div>
    <div class="ew-dlg"><span class="ew-bond"></span><h4></h4><p></p><div class="row"><button type="button" class="ew-btn" data-w="dnext">Continuer</button><button type="button" class="ew-btn" data-w="dclose">Au revoir</button></div></div>
    <div class="ew-menu ew-wsel"><div><h3>Ar\xE8ne des Chasseurs</h3><p class="ew-ws-sub"></p>
      <div class="ew-ws-row"><button type="button" class="ew-btn" data-ws="-5">\u22125</button><button type="button" class="ew-btn" data-ws="-1">\u2212</button><b class="ew-ws-n">1</b><button type="button" class="ew-btn" data-ws="1">+</button><button type="button" class="ew-btn" data-ws="5">+5</button></div>
      <p class="ew-ws-rw"></p><button type="button" class="ew-btn" data-ws="boss"></button><button type="button" class="ew-btn" data-ws="loop"></button>
      <button type="button" class="ew-btn ew-go" data-ws="go">Commencer</button><button type="button" class="ew-btn" data-ws="x">Annuler</button></div></div>
    <div class="ew-menu ew-mm"><div><h3>Vesp\xE9rane</h3><button type="button" class="ew-btn" data-w="resume">Reprendre</button><button type="button" class="ew-btn" data-w="home">Retour \xE0 la Maison (rue du Four)</button><button type="button" class="ew-btn" data-w="arena">Aller \xE0 l\u2019ar\xE8ne des Chasseurs</button><button type="button" class="ew-btn" data-w="mv"></button><button type="button" class="ew-btn" data-w="stn"></button><button type="button" class="ew-btn ew-only-mob" data-w="fs">Plein \xE9cran horizontal</button><button type="button" class="ew-btn" data-w="mode">${n?"Passer en mode mobile":"Passer en mode PC"}</button><button type="button" class="ew-btn" data-w="quit">Quitter le monde</button><p class="ew-help">ZQSD se d\xE9placer \xB7 Maj courir \xB7 Espace sauter \xB7 E agir \xB7 M monture \xB7 C changer de monture<br>Clic attaquer \xB7 Clic droit ou V esquiver \xB7 1 \xE0 5 techniques \xB7 R d\xE9gainer / rengainer \xB7 Espace deux fois : double saut \xB7 molette zoom</p></div></div>
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=V=>r.querySelector(V),o=a(".ew-c"),c=new xs({canvas:o,antialias:n,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),c.outputColorSpace=Kt,c.toneMapping=Kr,c.toneMappingExposure=1.05,s.shadows&&(c.shadowMap.enabled=!0,c.shadowMap.type=Jr);let h=new ji,u=new mn(n?55:62,1,.3,2400),d=new at(12085832);h.fog=new ao(d,s.fog[0],s.fog[1]);{let V=new $i(c);h.environment=V.fromScene(new hr,.04).texture,V.dispose()}let p=new G(-.62,.36,.5).normalize(),f=new ar(16769228,2761796,.75);h.add(f);let x=new es(16768184,2.7);h.add(x,x.target),s.shadows&&(x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),x.shadow.bias=-6e-4,x.shadow.normalBias=.06);let _=new Ne(new Qn(2e3,32,16),new hn({side:ln,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));h.add(_);let g=new Rt;h.add(g);{let V=document.createElement("canvas");V.width=256,V.height=128;let $=V.getContext("2d"),ne=oa(5);for(let tt=0;tt<26;tt++){let gt=40+ne()*176,rt=46+ne()*40,Ge=18+ne()*34,A=$.createRadialGradient(gt,rt,0,gt,rt,Ge);A.addColorStop(0,"rgba(255,255,255,.5)"),A.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=A,$.fillRect(0,0,256,128)}let Ie=new On(V);for(let tt=0;tt<16;tt++){let gt=new Ne(new Ki(1,1),new Bt({map:Ie,transparent:!0,depthWrite:!1,fog:!1,color:new at().setHSL(.04+ne()*.05,.75,.62+ne()*.2),opacity:.75})),rt=ne()*6.28,Ge=500+ne()*900;gt.position.set(Math.cos(rt)*Ge,190+ne()*180,Math.sin(rt)*Ge),gt.scale.set(420+ne()*380,120+ne()*90,1),gt.rotation.x=Math.PI/2,gt.rotation.z=ne()*6.28,g.add(gt)}}{let V=new Ki(900,900,s.seg,s.seg);V.rotateX(-Math.PI/2);let $=V.attributes.position,ne=new Float32Array($.count*3),Ie=[0,0,0];for(let ie=0;ie<$.count;ie++){let w=$.getX(ie),H=$.getZ(ie),J=qt(w,H);$.setY(ie,J),yd(w,H,J,Ie),ne[ie*3]=Math.pow(Ie[0],2.2),ne[ie*3+1]=Math.pow(Ie[1],2.2),ne[ie*3+2]=Math.pow(Ie[2],2.2)}V.setAttribute("color",new cn(ne,3));let tt=V.toNonIndexed();tt.computeVertexNormals(),V.dispose();let gt=document.createElement("canvas");gt.width=gt.height=256;let rt=gt.getContext("2d"),Ge=oa(31);rt.fillStyle="#e4e4e4",rt.fillRect(0,0,256,256);for(let ie=0;ie<2600;ie++){let w=190+Math.floor(Ge()*65);rt.fillStyle=`rgba(${w},${w},${w},.55)`;let H=1+Ge()*5;rt.fillRect(Ge()*256,Ge()*256,H,H)}rt.strokeStyle="rgba(70,60,55,.3)",rt.lineWidth=1.6;for(let ie=0;ie<8;ie++)for(let w=0;w<8;w++){let H=ie%2*16;rt.strokeRect(w*32+H+(Ge()-.5)*3,ie*32+(Ge()-.5)*3,32,32)}let A=new On(gt);A.wrapS=A.wrapT=zr,A.repeat.set(140,140),A.anisotropy=4,A.colorSpace=Kt;let Z=new Ne(tt,new tn({vertexColors:!0,map:A,roughness:.96,metalness:0,envMapIntensity:.25}));Z.receiveShadow=s.shadows,h.add(Z);let se=new Ne(new ai(440,2400,48,1),new tn({color:4865826,roughness:1,envMapIntensity:.1}));se.rotation.x=-Math.PI/2,se.position.y=2.6,h.add(se)}let m=new Ne(new Ki(2400,2400),new tn({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));m.rotation.x=-Math.PI/2,m.position.y=.35,h.add(m);let M=new Ne(new pi(96,48),new tn({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));M.rotation.x=-Math.PI/2,M.position.set(318,1.32,300),h.add(M);let v=(V,$=.9,ne=0,Ie)=>new tn(Object.assign({color:V,roughness:$,metalness:ne,envMapIntensity:.35},Ie||{})),S=V=>new Bt({color:V,toneMapped:(s.bloom,!1)}),D={wallA:v(12098426),wallB:v(9405303),wallC:v(10246725),wallW:v(14867920),stone:v(9144208),stoneL:v(11644338),stoneD:v(4867664),roofA:v(5125424),roofB:v(3554376),wood:v(5913892),iron:v(3816774,.5,.7),snow:v(15660024,.7),white:v(16052712),rock:v(5591642,1),obs:v(1512479,.35,.6),gold:v(15254632,.3,.9),light:v(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:v(4029142),rug:v(8007466),flowerA:v(14243450),flowerB:v(15254090),flowerC:v(9071318),sand:v(13481610,1),banner:v(10234410),winLit:S(16762222),winDark:v(1712176,.2,.6),lamp:S(16767392),ember:S(16742954),rose:S(13208278),umbra:S(10976255),neon:S(61695),sun:S(16774084),void:v(197382,1)},I=f1(e,s),C=I.B.build(D,s.shadows);h.add(C);for(let[V,$,ne,Ie,tt,gt]of I.lights.slice(0,n?12:6)){let rt=new Xn(Ie,tt*14,gt,1.6);rt.position.set(V,$,ne),h.add(rt)}let F=new Rt;{let V=qt(-70,100);F.position.set(-70,V+5.2,100);let $=new Ne(new Nn(4.2,.28,10,48),S(8386303)),ne=new Ne(new pi(4.1,40),new Bt({color:1723647,transparent:!0,opacity:.55,side:nn,blending:Cn,depthWrite:!1})),Ie=new Ne(new ai(1.2,3.6,40),new Bt({color:9133302,transparent:!0,opacity:.5,side:nn,blending:Cn,depthWrite:!1}));F.add($,ne,Ie),F.scale.set(.8,1.25,1),F.rotation.y=.9;let tt=new Xn(3842303,60,46,1.5);F.add(tt),h.add(F),F.userData={m2:ne,m3:Ie}}{let V=new vn(.22,.34,1,6).translate(0,.5,0),$=new un(1,1,7).translate(0,.5,0),ne=new yo(1,1),Ie=I.trees.filter(A=>A.pine),tt=I.trees.filter(A=>!A.pine),gt=new sn,rt=new at,Ge=(A,Z,se,ie)=>{let w=new co(A,Z,Math.max(1,se.length));return se.forEach((H,J)=>{ie(H,gt),gt.updateMatrix(),w.setMatrixAt(J,gt.matrix),H._c&&w.setColorAt(J,H._c)}),w.count=se.length,w.castShadow=s.shadows,w.receiveShadow=!1,h.add(w),w};if(Ge(V,v(3811868,1),I.trees,(A,Z)=>{Z.position.set(A.x,A.y-.3,A.z),Z.scale.set(A.s,A.s*(A.pine?2.2:3.2),A.s),Z.rotation.set(0,0,0)}),Ie.forEach(A=>{A._c=rt.clone().setHSL(.3+A.c*.06,.42,.11+A.c*.06)}),tt.forEach(A=>{A._c=rt.clone().setHSL(.02+A.c*.11,.72,.36+A.c*.14)}),Ge($,v(16777215,1),Ie,(A,Z)=>{Z.position.set(A.x,A.y+A.s*1.3,A.z),Z.scale.set(A.s*2.1,A.s*6.2,A.s*2.1),Z.rotation.set(0,A.c*6,0)}),Ge(ne,new tn({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),tt,(A,Z)=>{Z.position.set(A.x,A.y+A.s*4.1,A.z),Z.scale.set(A.s*2.5,A.s*2.1,A.s*2.5),Z.rotation.set(A.c,A.c*6,0)}),s.grass){let A=oa(9),Z=[];for(let se=0;se<s.grass*5&&Z.length<s.grass;se++){let ie=(A()-.5)*760,w=(A()-.5)*760,H=qt(ie,w);Math.hypot(ie,w)<184||Math.hypot(ie-ot.x,w-ot.z)<39||H<2.3||H>44||Math.abs(ie-rs(w))<15||Go(ie,w)<4||Z.push({x:ie,y:H,z:w,s:.5+A()*.9,c:A(),_c:rt.clone().setHSL(.08+A()*.1,.5,.3+A()*.12)})}Ge(new un(.5,1,4).translate(0,.5,0),v(16777215,1),Z,(se,ie)=>{ie.position.set(se.x,se.y-.05,se.z),ie.scale.set(se.s*.9,se.s*1.1,se.s*.9),ie.rotation.set(0,se.c*6,0)}).castShadow=!1}}let E={},y=new la;I.houses.forEach((V,$)=>{let Ie=$*80,tt=new la,gt=p1(tt,V,e,-400);for(let rt in tt.b)for(let Ge of tt.b[rt])Ge.translate(Ie,0,0),(y.b[rt]=y.b[rt]||[]).push(Ge);E[V.id]={...gt,ox:Ie,oy:-400,hs:V}});let N=y.build(D,!1);N.visible=!1,h.add(N);let O=new Xn(16756848,0,40,1.4),Q=new Xn(16773341,0,60,1.2);h.add(O,Q);let U=ws(e.hero);h.add(U.group);let b={x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};b.y=qt(b.x,b.z);for(let V of _d)if(Math.hypot(b.x-V[0],b.z-V[1])<V[2]){b.zone=V[3];break}let W=(e.mounts||[]).filter(V=>gi[V.id]),j=Math.max(0,W.findIndex(V=>V.id===e.mount)),z=null;function ee(V){if(b.mount&&(h.remove(b.mount.group),li(b.mount.group),b.mount=null,b.mountId=null),V&&W.length&&!b.inside){let $=W[j].id;b.mount=gi[$].make(),b.mountId=$,Po(b.mount.group),h.add(b.mount.group),z&&z.arm(!1),b.mount.group.traverse(ne=>{ne.isMesh&&(ne.castShadow=s.shadows)}),Ee("En selle",W[j].name)}a('[data-w="mount"]').classList.toggle("on",!!b.mount)}W.length||(a('[data-w="mount"]').disabled=!0);let be=[],fe=V=>{let $=document.createElement("canvas");$.width=256,$.height=64;let ne=$.getContext("2d");ne.font="600 26px Oxanium, Barlow, sans-serif",ne.textAlign="center",ne.shadowColor="#000",ne.shadowBlur=8,ne.fillStyle="#eaffff",ne.fillText(V,128,40);let Ie=new Qi(new Ci({map:new On($),transparent:!0,depthWrite:!1,fog:!1}));return Ie.scale.set(2.6,.65,1),Ie};function Le(V,$,ne,Ie,tt,gt){let rt=u1[V.id];if(!rt)return;let Ge=ws(Object.assign({},rt,{fx:Object.assign({lod:!0},rt.fx)}));Ge.group.position.set($,ne,Ie),Ge.group.rotation.y=tt;let A=fe(V.name.split(" ").slice(0,2).join(" "));A.position.y=Ge.height/Ge.group.scale.y+.32,Ge.group.add(A),Ge.group.traverse(Z=>{Z.isMesh&&(Z.castShadow=s.shadows&&!gt)}),h.add(Ge.group),be.push({...V,av:Ge,x:$,y:ne,z:Ie,ry:tt,inside:gt||null,lb:A,li:0})}for(let V of e.npcs||[]){let $=h1[V.id];$&&Le(V,$[0],qt($[0],$[1]),$[1],$[2])}for(let V in E){let $=E[V];(e.npcs||[]).filter(ne=>ne.recruited).slice(0,$.spots.length).forEach((ne,Ie)=>{let[tt,gt]=$.spots[Ie];Le(ne,$.ox+tt,$.oy,gt,Math.atan2(-tt,1-gt),V)})}N.visible=!1;function oe(V,$){bt(!0),b.x=V,b.z=$,b.y=qt(V,$),Zt=!0}z=xd({scene:h,st:b,player:U,data:e,H:qt,cam:u,root:r,pc:n,toast:(V,$)=>Ee(V,$),cb:t,teleport:oe,dismount:()=>ee(!1),dash:(V,$)=>{b.dashV=V/$,b.dashT=$},inputDir:()=>b.inDir});let ye={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},Te={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Qe=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+ye[U.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+Te[U.stance]},He=(V,$)=>{let ne=Object.keys(V);return ne[(ne.indexOf($)+1)%ne.length]};Qe();let $e=null;if(s.bloom)try{$e=new Fo(c),$e.addPass(new Bo(h,u)),$e.addPass(new gr(new Ae(256,256),.42,.7,.82)),$e.addPass(new Ho)}catch{$e=null}function Fe(){let V=r.clientWidth,$=r.clientHeight;if(V>$){let ne=r.querySelector(".ew-rot");ne&&ne.classList.remove("on")}c.setSize(V,$,!1),u.aspect=V/$,u.fov=n?55:V>$?50:62,u.updateProjectionMatrix(),$e&&$e.setSize(V,$)}Fe(),window.addEventListener("resize",Fe);let Xe=a(".ew-map"),Ue=Xe.getContext("2d"),B=document.createElement("canvas");B.width=B.height=248;{let V=B.getContext("2d"),$=V.createImageData(248,248),ne=[0,0,0];for(let Ie=0;Ie<248;Ie++)for(let tt=0;tt<248;tt++){let gt=(tt/247-.5)*900,rt=(Ie/247-.5)*900,Ge=qt(gt,rt);yd(gt,rt,Ge,ne);let A=(Ie*248+tt)*4,Z=Ge<.4;$.data[A]=Z?70:ne[0]*235,$.data[A+1]=Z?90:ne[1]*235,$.data[A+2]=Z?120:ne[2]*235,$.data[A+3]=255}V.putImageData($,0,0),V.strokeStyle="#c9b48a",V.lineWidth=2,V.beginPath(),V.arc((ot.x/900+.5)*248,(ot.z/900+.5)*248,8,0,7),V.stroke(),V.fillStyle="#2a2420";for(let Ie of I.B.boxes){let tt=(Ie[0]/900+.5)*248,gt=(Ie[2]/900+.5)*248;V.fillRect(tt,gt,Math.max(1.5,(Ie[1]-Ie[0])/900*248),Math.max(1.5,(Ie[3]-Ie[2])/900*248))}}function Pe(){let $=b.inside?0:b.x,ne=b.inside?0:b.z,Ie=($/900+.5)*248,tt=(ne/900+.5)*248;if(Ue.setTransform(1,0,0,1,0,0),Ue.fillStyle="#0b0b12",Ue.fillRect(0,0,248,248),b.inside){Ue.fillStyle="#7ff6ff",Ue.font="600 20px Oxanium, sans-serif",Ue.textAlign="center",Ue.fillText("Int\xE9rieur",124,130);return}Ue.translate(124,124),Ue.scale(2.2,2.2),Ue.translate(-Ie,-tt),Ue.drawImage(B,0,0);let gt=(rt,Ge,A,Z)=>{Ue.fillStyle=A,Ue.beginPath(),Ue.arc((rt/900+.5)*248,(Ge/900+.5)*248,Z,0,7),Ue.fill()};for(let rt of I.houses)gt(rt.x,rt.z,"#ffd479",2.6);for(let rt of be)rt.inside||gt(rt.x,rt.z,"#7ff6ff",1.7);gt(-70,100,"#3aa0ff",2.4),gt(ot.x,ot.z,"#ff4d6d",2.2);for(let rt of z.enemies)rt.type!=="dummy"&&rt.state!=="dead"&&gt(rt.x,rt.z,"#ff4d6d",1.5);Ue.setTransform(1,0,0,1,124,124),Ue.rotate(-b.yaw+Math.PI),Ue.fillStyle="#fff",Ue.strokeStyle="#000",Ue.lineWidth=2,Ue.beginPath(),Ue.moveTo(0,-9),Ue.lineTo(6.5,7),Ue.lineTo(0,3.5),Ue.lineTo(-6.5,7),Ue.closePath(),Ue.stroke(),Ue.fill()}let ue=0;function Ee(V,$=""){let ne=a(".ew-zone");ne.querySelector("b").textContent=V,ne.querySelector("i").textContent=$,ne.querySelector("i").style.display=$?"":"none",ne.classList.add("on"),clearTimeout(ue),ue=setTimeout(()=>ne.classList.remove("on"),3200)}let he={},Ze={mx:0,mz:0,jump:!1},Ce=null,L=(V,$)=>{if(b.paused&&$&&V.code==="Escape"){me(!1);return}he[V.code]=$;let ne=(V.key||"").toLowerCase();$&&(V.code==="Escape"?b.talking?ze():me(!0):b.talking?(ne==="e"||ne==="f"||V.code==="Enter"||V.code==="Space")&&(V.preventDefault(),Be()):ne==="e"||ne==="f"||V.code==="Enter"?Ut():ne==="m"?b.mount&&W.length>1&&he.ShiftLeft?(j=(j+1)%W.length,ee(!0)):ee(!b.mount):ne==="c"&&W.length>1?(j=(j+1)%W.length,b.mount?ee(!0):Ee(W[j].name,"Monture choisie")):V.code==="Space"?(V.preventDefault(),Ze.jump=!0):ne==="r"?z.toggleArm():ne==="x"?z.attack():ne==="v"?z.dodge():/^(Digit|Numpad)[1-5]$/.test(V.code)&&z.skill(+V.code.slice(-1)))},P=V=>L(V,!0),te=V=>L(V,!1);window.addEventListener("keydown",P),window.addEventListener("keyup",te);let de=null,Me={id:null,ox:0,oy:0},we=a(".ew-stick"),qe=V=>{if(!V.target.closest("button,.ew-dlg,.ew-menu,.ew-map")){if(!n&&V.clientX<r.clientWidth*.46&&V.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&Me.id===null){Me.id=V.pointerId,Me.ox=V.clientX,Me.oy=V.clientY,we.style.display="block",we.style.left=V.clientX+"px",we.style.top=V.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",we.firstChild.style.transform="";return}de||(de={id:V.pointerId,x:V.clientX,y:V.clientY,x0:V.clientX,y0:V.clientY,t:performance.now(),b:V.button})}},ke=V=>{if(V.pointerId===Me.id){let $=V.clientX-Me.ox,ne=V.clientY-Me.oy,Ie=Math.hypot($,ne),tt=52;Ie>tt&&($*=tt/Ie,ne*=tt/Ie),we.firstChild.style.transform=`translate(${$}px,${ne}px)`,Ze.mx=$/tt,Ze.mz=ne/tt}else de&&V.pointerId===de.id&&(b.camYaw-=(V.clientX-de.x)*(n?.0042:.0062),b.camPitch=Math.max(-.25,Math.min(1.2,b.camPitch+(V.clientY-de.y)*(n?.003:.0045))),de.x=V.clientX,de.y=V.clientY)},We=V=>{V.pointerId===Me.id&&(Me.id=null,Ze.mx=Ze.mz=0,we.style.display="none"),de&&V.pointerId===de.id&&(n&&V.type==="pointerup"&&performance.now()-de.t<300&&Math.hypot(V.clientX-de.x0,V.clientY-de.y0)<6&&(de.b===0?z.attack():de.b===2&&z.dodge()),de=null),V.pointerId===nt&&(nt=null,z.held=!1)},nt=null;r.addEventListener("pointerdown",V=>{let $=V.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!$||b.paused)return;V.preventDefault(),$._pd=performance.now();let ne=$.dataset.w;ne==="jump"?Ze.jump=!0:ne==="run"?(b.run=!b.run,$.classList.toggle("on",b.run)):ne==="mount"?ee(!b.mount):Ut()}),r.addEventListener("pointerdown",V=>{let $=V.target.closest("[data-c]");if(!$||b.paused)return;V.preventDefault();let ne=$.dataset.c;ne==="draw"?z.toggleArm():ne==="dodge"?z.dodge():ne==="0"?(z.attack(),z.held=!0,nt=V.pointerId):z.skill(+ne)}),r.addEventListener("pointerdown",qe),r.addEventListener("pointermove",ke),r.addEventListener("pointerup",We),r.addEventListener("pointercancel",We);let ct=V=>{b.camDist=Math.max(2.6,Math.min(22,b.camDist*(V.deltaY>0?1.1:.9))),V.preventDefault()};r.addEventListener("wheel",ct,{passive:!1}),r.addEventListener("contextmenu",V=>V.preventDefault()),r.addEventListener("click",V=>{let $=V.target.closest("[data-w]");if(!$)return;let ne=$.dataset.w;if($._pd&&performance.now()-$._pd<800){$._pd=0;return}if(ne==="act")Ut();else if(ne==="mount")ee(!b.mount);else if(ne==="run")b.run=!b.run,$.classList.toggle("on",b.run);else if(ne==="jump")Ze.jump=!0;else if(ne==="dnext")Be();else if(ne==="dclose")ze();else if(ne==="menu")me(!0);else if(ne==="resume")me(!1);else if(ne==="home")oe(-6,34),me(!1);else if(ne==="arena")ee(!1),oe(ot.x+40,ot.z),b.yaw=-Math.PI/2,b.camYaw=Math.PI/2,me(!1);else if(ne==="mv"||ne==="stn")U.setStyle(ne==="mv"?{move:He(ye,U.move)}:{stance:He(Te,U.stance)}),Qe(),t.onStyle&&t.onStyle({move:U.move,stance:U.stance});else if(ne==="fs")pt(),a(".ew-rot").classList.remove("on"),me(!1);else if(ne==="quit")St();else if(ne==="mode"){let Ie=[b.x,b.z];bn.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",b.inside?null:Ie)}});function me(V){b.paused=V,a(".ew-mm").classList.toggle("on",V),V||a(".ew-wsel").classList.remove("on")}let ut={n:1,loop:!1};function mt(){let V=z.arena.best+1;ut.n=Math.max(1,Math.min(V,ut.n));let $=ut.n,ne=t.wavePreview?t.wavePreview($):null;a(".ew-ws-n").textContent=$,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+V+(z.arena.best?" \xB7 record "+z.arena.best:""),a(".ew-ws-rw").innerHTML=($%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":$%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(ne?"R\xE9compense : <b>+"+ne.x+" XP</b> \xB7 <b>+"+ne.k+" kinahs</b>"+(ne.first===!1?" \xB7 d\xE9j\xE0 gagn\xE9e aujourd\u2019hui (10 %)":" \xB7 plein tarif une fois par jour, puis 10 %"):""),a('[data-ws="loop"]').classList.toggle("on",ut.loop),a('[data-ws="loop"]').textContent=(ut.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let Ie=5*Math.floor(V/5),tt=a('[data-ws="boss"]');tt.style.display=Ie>=5?"":"none",tt.textContent="Dernier champion ouvert : vague "+Ie}function dt(){ut.n=z.arenaStart(),b.paused=!0,mt(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",V=>{let $=V.target.closest("[data-ws]");if(!$)return;let ne=$.dataset.ws;if(ne==="x"||ne==="go"){a(".ew-wsel").classList.remove("on"),b.paused=!1,ne==="go"&&z.startArena(ut.n,ut.loop);return}ne==="loop"?ut.loop=!ut.loop:ne==="boss"?ut.n=5*Math.floor((z.arena.best+1)/5):ut.n+=+ne,mt()});let it=!1,Ye=()=>{try{let V=screen.orientation;return V&&V.lock?V.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function pt(){let V=document.documentElement,$=V.requestFullscreen||V.webkitRequestFullscreen;if(!$)return Ye();let ne=null;try{ne=$.call(V,{navigationUI:"hide"}),it=!0}catch{ne=null}return(ne&&ne.then?ne:Promise.resolve()).then(Ye,Ye)}n||Ye().then(V=>{if(!V&&r.clientHeight>r.clientWidth&&!Et){let $=a(".ew-rot");$.classList.add("on"),setTimeout(()=>$.classList.remove("on"),9e3)}});function St(){let V=b.inside?null:[Math.round(b.x),Math.round(b.z)];bn.dispose(),t.onExit&&t.onExit(V)}function Ut(){!Ce||b.talking||(Ce.kind==="npc"?Y(Ce.npc):Ce.kind==="house"?et(Ce.id):Ce.kind==="exit"?bt():Ce.kind==="arena"?dt():Ce.kind==="rift"&&t.onRift&&(bn.dispose(),t.onRift([Math.round(b.x),Math.round(b.z)])))}let ft=0;function Re(V){let $=V.lines&&V.lines.length?V.lines:["\u2026"],ne=$[V.li%$.length],Ie=a(".ew-dlg p");Ie.textContent="",clearInterval(ft);let tt=0;ft=setInterval(()=>{tt+=2,Ie.textContent=ne.slice(0,tt),tt>=ne.length&&clearInterval(ft)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(V.name,Object.assign(document.createElement("small"),{textContent:V.role||""})),a(".ew-bond").textContent=V.bond?"Lien "+"\u2665".repeat(Math.min(10,V.bond)):"",a('[data-w="dnext"]').style.display=$.length>1?"":"none"}function Y(V){b.talking=V,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),Re(V);let $=Math.atan2(b.x-V.x,b.z-V.z);V.av.group.rotation.y=$,b.yaw=$+Math.PI,t.onTalk&&t.onTalk(V.id)}function Be(){let V=b.talking;if(!V)return;let $=a(".ew-dlg p"),ne=V.lines||[],Ie=ne[V.li%Math.max(1,ne.length)]||"";if($.textContent.length<Ie.length){clearInterval(ft),$.textContent=Ie;return}if(V.li++,V.li%Math.max(1,ne.length)===0){ze();return}Re(V)}function ze(){clearInterval(ft),b.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let st=null;function et(V){let $=E[V];$&&(ee(!1),st=[b.x,b.z,b.yaw],b.inside=V,b.x=$.ox+$.door[0],b.z=$.door[1]-.6,b.y=$.oy,b.yaw=Math.PI,b.camYaw=0,b.camDist=Math.min(b.camDist,6),N.visible=!0,C.visible=!1,h.fog.near=60,h.fog.far=200,O.position.set($.ox,$.oy+1.6,-$.D/2+2.2),O.intensity=90,Q.position.set($.ox,$.oy+$.h-.6,1.5),Q.intensity=$.hs.r>=6?160:$.hs.r===5?50:70,Q.color.set($.hs.r>=6?16774084:$.hs.r===5?10976255:16773341),x.intensity=0,f.intensity=.35,Ee($.hs.name,$.hs.cap>=99?"Places illimit\xE9es":$.hs.cap+" places"))}function bt(V){b.inside&&(b.inside=null,N.visible=!1,C.visible=!0,h.fog.near=s.fog[0],h.fog.far=s.fog[1],O.intensity=Q.intensity=0,x.intensity=2.9,f.intensity=.7,st&&!V&&(b.x=st[0],b.z=st[1],b.yaw=st[2]+Math.PI),b.y=qt(b.x,b.z))}let Ct=new G,ht=new G,_t=performance.now(),Et=!1,Oe=0,Zt=!0;function Vt(V){if(Et)return;requestAnimationFrame(Vt);let $=Math.min(.05,(V-_t)/1e3);if(_t=V,b.paused)return;b.t+=$;let ne=Ze.mx,Ie=Ze.mz;(he.KeyW||he.ArrowUp)&&(Ie-=1),(he.KeyS||he.ArrowDown)&&(Ie+=1),(he.KeyA||he.ArrowLeft)&&(ne-=1),(he.KeyD||he.ArrowRight)&&(ne+=1);let tt=Math.min(1,Math.hypot(ne,Ie));tt*=b.talking?0:z.moveK();let gt=b.run||he.ShiftLeft||he.ShiftRight,rt=U.move,Ge=rt==="levitation"&&!b.mount,A=rt==="levitation"?[11,16]:rt==="ninja"?[10.5,15.5]:[9.5,14],Z=(b.mount?9.5*gi[b.mountId].speed:gt?A[1]:A[0])*(b.inside?.45:1),se=tt*Z;if(b.speed+=(se-b.speed)*Math.min(1,$*(b.mount?3:Ge?9:14)),b.inDir=tt>.05?Math.atan2(ne,Ie)+b.camYaw:null,tt>.05&&b.dashT<=0){let l=b.inDir-b.yaw;for(;l>Math.PI;)l-=6.2832;for(;l<-Math.PI;)l+=6.2832;b.yaw+=l*Math.min(1,$*(b.mount?5:Ge?13:18))}b.dashT>0&&(b.dashT-=$,b.speed=b.dashV);let ie=Math.sin(b.yaw)*b.speed*$,w=Math.cos(b.yaw)*b.speed*$,H=b.x+ie,J=b.z+w;if(b.inside){let ge=E[b.inside];H=Math.max(ge.ox-ge.W/2+.8,Math.min(ge.ox+ge.W/2-.8,H)),J=Math.max(-ge.D/2+1.9,Math.min(ge.D/2-.7,J))}else{H=Math.max(-438,Math.min(438,H)),J=Math.max(-438,Math.min(438,J));let ge=b.mount?1.1:.55;for(let l of I.B.boxes)if(H>l[0]-ge&&H<l[1]+ge&&J>l[2]-ge&&J<l[3]+ge){let R=H-(l[0]-ge),T=l[1]+ge-H,k=J-(l[2]-ge),X=l[3]+ge-J,q=Math.min(R,T,k,X);q===R?H=l[0]-ge:q===T?H=l[1]+ge:q===k?J=l[2]-ge:J=l[3]+ge}{let l=H-ot.x,R=J-ot.z,T=Math.hypot(l,R);if(T>ot.r-.5&&T<ot.wall+.6&&Math.abs(Math.atan2(R,l))>ot.gate){let k=(T<(ot.r+ot.wall)/2?ot.r-.5:ot.wall+.6)/T;H=ot.x+l*k,J=ot.z+R*k}}for(let l of be)if(!l.inside){let R=Math.hypot(H-l.x,J-l.z);R<.8&&R>.001&&(H=l.x+(H-l.x)/R*.8,J=l.z+(J-l.z)/R*.8)}}b.x=H,b.z=J;let re=b.inside?E[b.inside].oy:Math.max(qt(b.x,b.z),Math.abs(b.x-rs(b.z))<30&&Math.abs(b.z+56)<3.3&&Math.abs(b.x-rs(-56))<20?4:-99,Math.abs(b.z-24)<2.3&&b.x>186&&b.x<208?1.22:-99,Math.hypot(b.x-318,b.z-300)<96?1.32:-99,Ge?.4:-99);if(Ze.jump&&(b.onGround||b.jumps<2)&&!b.mount&&!b.talking&&!b.down){let ge=!b.onGround;b.vy=ge?8.2:8.6,b.jumps=ge?2:1,b.onGround=!1,ge&&U.play("flip",.62)}Ze.jump=!1,b.vy-=24*$,b.y+=b.vy*$,b.y<=re?(b.y=re,b.vy=0,b.onGround=!0,b.jumps=0):b.y-re>.35&&(b.onGround=!1);{let ge=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(b.speed-10.5)/5))*7;Math.abs(u.fov-ge)>.05&&(u.fov+=(ge-u.fov)*Math.min(1,$*5),u.updateProjectionMatrix())}let pe=!b.inside&&!Ge&&b.y<-.75?-.75-b.y:0,ce=U.group;if(b.mount){let ge=b.mount;ge.group.position.set(b.x,b.y+pe,b.z),ge.group.rotation.y=b.yaw,ge.update($,b.speed/8),ce.position.set(b.x-Math.sin(b.yaw)*-ge.seat.z,b.y+pe+ge.seat.y-U.seatDrop,b.z-Math.cos(b.yaw)*-ge.seat.z),ce.rotation.y=b.yaw,U.update($,{riding:!0,wide:ge.wide})}else ce.position.set(b.x,b.y+pe,b.z),ce.rotation.y=b.yaw,U.update($,{speed:b.speed/4.6,down:b.down});z.update($);let _e=!!z.pl.mecha,De=_e?2.5:(b.mount?b.mount.seat.y:0)+U.height*.82,je=b.camDist*(b.mount?1.45:_e?1.7:1)*(b.talking?.62:1),Tt=Math.cos(b.camPitch);Ct.set(b.x,b.y+pe+De,b.z);for(let ge of[1,.72,.5,.32,.18])if(ht.set(Ct.x+Math.sin(b.camYaw)*Tt*je*ge,Ct.y+Math.sin(b.camPitch)*je*ge,Ct.z+Math.cos(b.camYaw)*Tt*je*ge),b.inside||ht.y-b.y>16||!I.B.boxes.some(l=>ht.x>l[0]-.4&&ht.x<l[1]+.4&&ht.z>l[2]-.4&&ht.z<l[3]+.4))break;if(b.inside){let ge=E[b.inside];ht.x=Math.max(ge.ox-ge.W/2+.5,Math.min(ge.ox+ge.W/2-.5,ht.x)),ht.z=Math.max(-ge.D/2+.6,Math.min(ge.D/2+9,ht.z)),ht.y=Math.max(ge.oy+.6,Math.min(ge.oy+ge.h+4,ht.y))}else{let ge=Math.max(qt(ht.x,ht.z),.35)+.7;ht.y<ge&&(ht.y=ge)}Zt?(u.position.copy(ht),Zt=!1):u.position.lerp(ht,Math.min(1,$*12)),u.lookAt(Ct),z.shake>.01&&(u.position.x+=(Math.random()-.5)*z.shake*.5,u.position.y+=(Math.random()-.5)*z.shake*.4),_.position.copy(u.position),g.position.x=b.t*2.2%300,_.visible=g.visible=!b.inside,m.visible=M.visible=!b.inside,x.position.set(b.x+p.x*120,b.y+p.y*120+20,b.z+p.z*120),x.target.position.set(b.x,b.y,b.z),F.rotation.y+=$*.25,F.userData.m3.rotation.z-=$*1.4,F.userData.m2.material.opacity=.45+Math.sin(b.t*2.6)*.14;let xt=null,Ft=1e9;for(let ge of be){let l=ge.inside===b.inside;if(ge.av.group.visible=l,!l)continue;let R=Math.hypot(b.x-ge.x,b.z-ge.z);ge.lb.visible=R<26&&R>2.6,R<40&&ge.av.update($,{});for(let T of ge.av.inks)T.visible=R<32;if(R<9&&!b.talking){let T=Math.atan2(b.x-ge.x,b.z-ge.z)-ge.av.group.rotation.y;for(;T>Math.PI;)T-=6.2832;for(;T<-Math.PI;)T+=6.2832;ge.av.group.rotation.y+=T*Math.min(1,$*3)}R<3.2&&R<Ft&&(Ft=R,xt={kind:"npc",npc:ge,text:"Parler \xE0 "+ge.name.split(" ")[0]})}if(b.inside){let ge=E[b.inside];Math.hypot(b.x-ge.ox-ge.door[0],b.z-ge.door[1])<2.2&&!xt&&(xt={kind:"exit",text:"Sortir"})}else{for(let ge of I.houses){let l=Math.hypot(b.x-ge.x,b.z-ge.z);l<4.5&&l<Ft&&(Ft=l,xt={kind:"house",id:ge.id,text:"Entrer : "+ge.name})}t.onRift&&Math.hypot(b.x+70,b.z-100)<6&&!xt&&(xt={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!xt&&!z.arena.on&&!b.down&&Math.hypot(b.x-ot.x,b.z-ot.z)<3.4&&(xt={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+z.arenaStart()})}Ce=xt;let It=a(".ew-prompt");if(xt&&!b.talking){It.classList.add("on");let ge=It.firstChild,l=(n?"[E]  ":"")+xt.text;ge.textContent!==l&&(ge.textContent=l)}else It.classList.remove("on");if(!b.inside){let ge="",l="";for(let R of _d)if(Math.hypot(b.x-R[0],b.z-R[1])<R[2]){ge=R[3],l=R[4];break}ge&&ge!==b.zone&&Ee(ge,l),b.zone=ge}(Oe+=$)>.12&&(Oe=0,Pe()),$e?$e.render():c.render(h,u)}let bn={combat:z,player:U,dispose(){if(!Et){Et=!0,z.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),it&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(ft),clearTimeout(ue),window.removeEventListener("keydown",P),window.removeEventListener("keyup",te),window.removeEventListener("resize",Fe),li(h),$e&&$e.dispose&&$e.dispose(),c.dispose(),c.forceContextLoss&&c.forceContextLoss(),r.remove()}},state:b,teleport:(V,$)=>oe(V,$),enter:et,mountOn:()=>ee(!0),look(V,$,ne){b.camYaw=V,b.camPitch=$,ne&&(b.camDist=ne)}};return requestAnimationFrame(V=>{_t=V,Vt(V),setTimeout(()=>{let $=a(".ew-load");$.style.opacity=0,setTimeout(()=>$.remove(),900),Ee("Vesp\xE9rane","Ciel couleur de rouille")},350)}),bn}window.Elyos3D={avatarView:ad,startWorld:wd,groundHeight:qt,DEFAULT_LOOK:Lc,HAIR_STYLES:id,STANCES:Uo,MOVES:zo,MOUNT_SPEED:Object.fromEntries(Object.entries(gi).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
