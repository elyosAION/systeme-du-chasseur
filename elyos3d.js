(()=>{var xd=0,Dc=1,yd=2;var fu=1,Vr=2,_i=3,Hi=0,rn=1,en=2;var ci=0,ki=1,En=2,Uc=3,zc=4,_d=5,as=100,vd=101,Md=102,Nc=103,Oc=104,bd=200,wd=201,Sd=202,Ed=203,bl=204,wl=205,Td=206,Ad=207,Rd=208,Cd=209,Pd=210,Id=211,Ld=212,Dd=213,Ud=214,zd=0,Nd=1,Od=2,Ua=3,kd=4,Fd=5,Bd=6,Hd=7,pc=0,Gd=1,Vd=2,hi=0,mc=1,gc=2,xc=3,Wr=4,Wd=5,yc=6;var pu=300,qs=301,Ys=302,Sl=303,El=304,xo=306,Cr=1e3,ti=1001,Tl=1002,un=1003,kc=1004;var Fo=1005;var Xn=1006,Xd=1007;var Pr=1008;var Fi=1009,qd=1010,Yd=1011,_c=1012,mu=1013,Ni=1014,Oi=1015,ni=1016,gu=1017,xu=1018,cs=1020,Zd=1021,On=1023,Jd=1024,$d=1025,hs=1026,Zs=1027,Kd=1028,yu=1029,jd=1030,_u=1031,vu=1033,Bo=33776,Ho=33777,Go=33778,Vo=33779,Fc=35840,Bc=35841,Hc=35842,Gc=35843,Mu=36196,Vc=37492,Wc=37496,Xc=37808,qc=37809,Yc=37810,Zc=37811,Jc=37812,$c=37813,Kc=37814,jc=37815,Qc=37816,eh=37817,th=37818,nh=37819,ih=37820,sh=37821,Wo=36492,rh=36494,ah=36495,Qd=36283,oh=36284,lh=36285,ch=36286;var za=2300,Na=2301,Xo=2302,hh=2400,uh=2401,dh=2402;var bu=3e3,us=3001,ef=3200,tf=3201,yo=0,nf=1,qn="",Yt="srgb",Si="srgb-linear",vc="display-p3",_o="display-p3-linear",Oa="linear",Bt="srgb",ka="rec709",Fa="p3";var vs=7680;var fh=519,sf=512,rf=513,af=514,wu=515,of=516,lf=517,cf=518,hf=519,Al=35044;var ph="300 es",Rl=1035,bi=2e3,Ba=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,Ha=180/Math.PI;function wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function uf(i,e){return(i%e+e)%e}function Yo(i,e,t){return(1-t)*i+t*e}function mh(i){return(i&i-1)===0&&i!==0}function Cl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],f=n[5],x=n[8],_=s[0],g=s[3],m=s[6],M=s[1],v=s[4],E=s[7],D=s[2],P=s[5],R=s[8];return r[0]=a*_+o*M+l*D,r[3]=a*g+o*v+l*P,r[6]=a*m+o*E+l*R,r[1]=c*_+u*M+d*D,r[4]=c*g+u*v+d*P,r[7]=c*m+u*E+d*R,r[2]=p*_+f*M+x*D,r[5]=p*g+f*v+x*P,r[8]=p*m+f*E+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*r,f=c*r-a*l,x=t*d+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new Et;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){let i=Ga("canvas");return i.style.display="block",i}var gh={};function Er(i){i in gh||(gh[i]=!0,console.warn(i))}var xh=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yh=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),na={[Si]:{transfer:Oa,primaries:ka,toReference:i=>i,fromReference:i=>i},[Yt]:{transfer:Bt,primaries:ka,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_o]:{transfer:Oa,primaries:Fa,toReference:i=>i.applyMatrix3(yh),fromReference:i=>i.applyMatrix3(xh)},[vc]:{transfer:Bt,primaries:Fa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(yh),fromReference:i=>i.applyMatrix3(xh).convertLinearToSRGB()}},ff=new Set([Si,_o]),Lt={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=na[e].toReference,s=na[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return na[i].primaries},getTransfer:function(i){return i===qn?Oa:na[i].transfer}};function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ms,Va=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=Ga("canvas")),Ms.width=e.width,Ms.height=e.height;let n=Ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ga("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ws(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pf=0,Wa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($o(s[a].image)):r.push($o(s[a]))}else r=$o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mf=0,kn=class i extends Gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=Xn,a=Pr,o=On,l=Fi,c=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=wi(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===us?Yt:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yt?us:bu}set encoding(e){Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===us?Yt:qn}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=pu;kn.DEFAULT_ANISOTROPY=1;var Zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],x=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(f+1)/2,D=(m+1)/2,P=(u+p)/4,R=(d+_)/4,F=(x+g)/4;return v>E&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=P/n,r=R/n):E>D?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=F/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=F/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-x)*(g-x)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(d-_)/M,this.z=(p-u)/M,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===us?Yt:qn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xa=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Il=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==p||c!==f||u!==x){let g=1-o,m=l*p+c*f+u*x+d*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let D=Math.sqrt(v),P=Math.atan2(D,m*M);g=Math.sin(g*P)/D,o=Math.sin(o*P)/D}let E=o*M;if(l=l*g+p*E,c=c*g+f*E,u=u*g+x*E,d=d*g+_*E,g===1-o){let D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*d+l*f-c*p,e[t+1]=l*x+u*p+c*d-o*f,e[t+2]=c*x+u*f+o*p-l*d,e[t+3]=u*x-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*f*x,this._y=c*f*d-p*u*x,this._z=c*u*x+p*f*d,this._w=c*u*d-p*f*x;break;case"YXZ":this._x=p*u*d+c*f*x,this._y=c*f*d-p*u*x,this._z=c*u*x-p*f*d,this._w=c*u*d+p*f*x;break;case"ZXY":this._x=p*u*d-c*f*x,this._y=c*f*d+p*u*x,this._z=c*u*x+p*f*d,this._w=c*u*d-p*f*x;break;case"ZYX":this._x=p*u*d-c*f*x,this._y=c*f*d+p*u*x,this._z=c*u*x-p*f*d,this._w=c*u*d+p*f*x;break;case"YZX":this._x=p*u*d+c*f*x,this._y=c*f*d+p*u*x,this._z=c*u*x-p*f*d,this._w=c*u*d-p*f*x;break;case"XZY":this._x=p*u*d-c*f*x,this._y=c*f*d-p*u*x,this._z=c*u*x+p*f*d,this._w=c*u*d+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ko=new H,_h=new Fn,Ei=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),sa.subVectors(this.max,mr),bs.subVectors(e.a,mr),ws.subVectors(e.b,mr),Ss.subVectors(e.c,mr),Ii.subVectors(ws,bs),Li.subVectors(Ss,ws),ts.subVectors(bs,Ss);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ts.z,ts.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ts.z,0,-ts.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ts.y,ts.x,0];return!jo(t,bs,ws,Ss,sa)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,bs,ws,Ss,sa))?!1:(ra.crossVectors(Ii,Li),t=[ra.x,ra.y,ra.z],jo(t,bs,ws,Ss,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new H,new H,new H,new H,new H,new H,new H,new H],jn=new H,ia=new Ei,bs=new H,ws=new H,Ss=new H,Ii=new H,Li=new H,ts=new H,mr=new H,sa=new H,ra=new H,ns=new H;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),u=n.dot(ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var gf=new Ei,gr=new H,Qo=new H,Vi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Qo)),this.expandByPoint(gr.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new H,el=new H,aa=new H,Di=new H,tl=new H,oa=new H,nl=new H,qa=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){el.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=Di.dot(this.direction),l=-Di.dot(aa),c=Di.lengthSq(),u=Math.abs(1-a*a),d,p,f,x;if(u>0)if(d=a*l-o,p=a*o-l,x=r*u,d>=0)if(p>=-x)if(p<=x){let _=1/u;d*=_,p*=_,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(el).addScaledVector(aa,p),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){tl.subVectors(t,e),oa.subVectors(n,e),nl.crossVectors(tl,oa);let a=this.direction.dot(nl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);let l=o*this.direction.dot(oa.crossVectors(Di,oa));if(l<0)return null;let c=o*this.direction.dot(tl.cross(Di));if(c<0||l+c>a)return null;let u=-o*Di.dot(nl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,p,f,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,p,f,x,_,g)}set(e,t,n,s,r,a,o,l,c,u,d,p,f,x,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=x,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*d,x=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+x*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*d,x=c*u,_=c*d;t[0]=p+_*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*d,x=c*u,_=c*d;t[0]=p-_*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*d,x=o*u,_=o*d;t[0]=l*u,t[4]=x*c-f,t[8]=p*c+_,t[1]=l*d,t[5]=_*c+p,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=_-p*d,t[8]=x*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+x,t[10]=p-_*d}else if(e.order==="XZY"){let p=a*l,f=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+_,t[5]=a*u,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,yf)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Ui.crossVectors(n,zn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Ui.crossVectors(n,zn)),Ui.normalize(),la.crossVectors(zn,Ui),s[0]=Ui.x,s[4]=la.x,s[8]=zn.x,s[1]=Ui.y,s[5]=la.y,s[9]=zn.y,s[2]=Ui.z,s[6]=la.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],f=n[13],x=n[2],_=n[6],g=n[10],m=n[14],M=n[3],v=n[7],E=n[11],D=n[15],P=s[0],R=s[4],F=s[8],T=s[12],y=s[1],U=s[5],V=s[9],ce=s[13],O=s[2],w=s[6],W=s[10],j=s[14],N=s[3],ee=s[7],Me=s[11],ge=s[15];return r[0]=a*P+o*y+l*O+c*N,r[4]=a*R+o*U+l*w+c*ee,r[8]=a*F+o*V+l*W+c*Me,r[12]=a*T+o*ce+l*j+c*ge,r[1]=u*P+d*y+p*O+f*N,r[5]=u*R+d*U+p*w+f*ee,r[9]=u*F+d*V+p*W+f*Me,r[13]=u*T+d*ce+p*j+f*ge,r[2]=x*P+_*y+g*O+m*N,r[6]=x*R+_*U+g*w+m*ee,r[10]=x*F+_*V+g*W+m*Me,r[14]=x*T+_*ce+g*j+m*ge,r[3]=M*P+v*y+E*O+D*N,r[7]=M*R+v*U+E*w+D*ee,r[11]=M*F+v*V+E*W+D*Me,r[15]=M*T+v*ce+E*j+D*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],f=e[14],x=e[3],_=e[7],g=e[11],m=e[15];return x*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*f-n*l*f)+_*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+g*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+m*(-s*o*u-t*l*d+t*o*p+s*a*d-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],f=e[11],x=e[12],_=e[13],g=e[14],m=e[15],M=d*g*c-_*p*c+_*l*f-o*g*f-d*l*m+o*p*m,v=x*p*c-u*g*c-x*l*f+a*g*f+u*l*m-a*p*m,E=u*_*c-x*d*c+x*o*f-a*_*f-u*o*m+a*d*m,D=x*d*l-u*_*l-x*o*p+a*_*p+u*o*g-a*d*g,P=t*M+n*v+s*E+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return e[0]=M*R,e[1]=(_*p*r-d*g*r-_*s*f+n*g*f+d*s*m-n*p*m)*R,e[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*m+n*l*m)*R,e[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*f-n*l*f)*R,e[4]=v*R,e[5]=(u*g*r-x*p*r+x*s*f-t*g*f-u*s*m+t*p*m)*R,e[6]=(x*l*r-a*g*r-x*s*c+t*g*c+a*s*m-t*l*m)*R,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*R,e[8]=E*R,e[9]=(x*d*r-u*_*r-x*n*f+t*_*f+u*n*m-t*d*m)*R,e[10]=(a*_*r-x*o*r+x*n*c-t*_*c-a*n*m+t*o*m)*R,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=D*R,e[13]=(u*_*s-x*d*s+x*n*p-t*_*p-u*n*g+t*d*g)*R,e[14]=(x*o*s-a*_*s-x*n*l+t*_*l+a*n*g-t*o*g)*R,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*p+t*o*p)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,p=r*c,f=r*u,x=r*d,_=a*u,g=a*d,m=o*d,M=l*c,v=l*u,E=l*d,D=n.x,P=n.y,R=n.z;return s[0]=(1-(_+m))*D,s[1]=(f+E)*D,s[2]=(x-v)*D,s[3]=0,s[4]=(f-E)*P,s[5]=(1-(p+m))*P,s[6]=(g+M)*P,s[7]=0,s[8]=(x+v)*R,s[9]=(g-M)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),a=Es.set(s[4],s[5],s[6]).length(),o=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,u=1/a,d=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=bi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(o===bi)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ba)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bi){let l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),p=(t+e)*c,f=(n+s)*u,x,_;if(o===bi)x=(a+r)*d,_=-2*d;else if(o===Ba)x=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new H,Qn=new Pt,xf=new H(0,0,0),yf=new H(1,1,1),Ui=new H,la=new H,zn=new H,vh=new Pt,Mh=new Fn,Wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_f=0,bh=new H,Ts=new Fn,gi=new Pt,ca=new H,xr=new H,vf=new H,Mf=new Fn,wh=new H(1,0,0),Sh=new H(0,1,0),Eh=new H(0,0,1),bf={type:"added"},wf={type:"removed"},tn=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Wi,n=new Fn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Et}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(xr,ca,this.up):gi.lookAt(ca,xr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(gi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new H(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new H,xi=new H,il=new H,yi=new H,As=new H,Rs=new H,Th=new H,sl=new H,rl=new H,al=new H,ha=!1,ls=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),xi.subVectors(n,t),il.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(xi),l=ei.dot(il),c=xi.dot(xi),u=xi.dot(il),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(c*l-o*u)*p,x=(a*u-o*l)*p;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,n,s,r,a,o,l){return ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ha=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),xi.subVectors(e,t),ei.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ei.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ha=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Rs.subVectors(r,n),sl.subVectors(e,n);let l=As.dot(sl),c=Rs.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,s);let u=As.dot(rl),d=Rs.dot(rl);if(u>=0&&d<=u)return t.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(As,a);al.subVectors(e,r);let f=As.dot(al),x=Rs.dot(al);if(x>=0&&f<=x)return t.copy(r);let _=f*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Rs,o);let g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return Th.subVectors(r,s),o=(d-u)/(d-u+(f-x)),t.copy(s).addScaledVector(Th,o);let m=1/(g+_+p);return a=_*m,o=p*m,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=uf(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ol(a,r,e+1/3),this.g=ol(a,r,e),this.b=ol(a,r,e-1/3)}return Lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Lt.fromWorkingColorSpace(wn.copy(this),e),Math.round(Sn(wn.r*255,0,255))*65536+Math.round(Sn(wn.g*255,0,255))*256+Math.round(Sn(wn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Yt){Lt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ua);let n=Yo(zi.h,ua.h,t),s=Yo(zi.s,ua.s,t),r=Yo(zi.l,ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new it;it.NAMES=Eu;var Sf=0,Yn=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ki,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nt=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var sn=new H,da=new Te,an=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}};var Za=class extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ja=class extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ef=0,Wn=new Pt,ll=new tn,Cs=new H,Nn=new Ei,yr=new Ei,gn=new H,Ot=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Ja:Za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Nn.min,yr.min),Nn.expandByPoint(gn),gn.addVectors(Nn.max,yr.max),Nn.expandByPoint(gn)):(Nn.expandByPoint(yr.min),Nn.expandByPoint(yr.max))}Nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),gn.add(Cs)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<o;y++)c[y]=new H,u[y]=new H;let d=new H,p=new H,f=new H,x=new Te,_=new Te,g=new Te,m=new H,M=new H;function v(y,U,V){d.fromArray(s,y*3),p.fromArray(s,U*3),f.fromArray(s,V*3),x.fromArray(a,y*2),_.fromArray(a,U*2),g.fromArray(a,V*2),p.sub(d),f.sub(d),_.sub(x),g.sub(x);let ce=1/(_.x*g.y-g.x*_.y);isFinite(ce)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(ce),M.copy(f).multiplyScalar(_.x).addScaledVector(p,-g.x).multiplyScalar(ce),c[y].add(m),c[U].add(m),c[V].add(m),u[y].add(M),u[U].add(M),u[V].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let y=0,U=E.length;y<U;++y){let V=E[y],ce=V.start,O=V.count;for(let w=ce,W=ce+O;w<W;w+=3)v(n[w+0],n[w+1],n[w+2])}let D=new H,P=new H,R=new H,F=new H;function T(y){R.fromArray(r,y*3),F.copy(R);let U=c[y];D.copy(U),D.sub(R.multiplyScalar(R.dot(U))).normalize(),P.crossVectors(F,U);let ce=P.dot(u[y])<0?-1:1;l[y*4]=D.x,l[y*4+1]=D.y,l[y*4+2]=D.z,l[y*4+3]=ce}for(let y=0,U=E.length;y<U;++y){let V=E[y],ce=V.start,O=V.count;for(let w=ce,W=ce+O;w<W;w+=3)T(n[w+0]),T(n[w+1]),T(n[w+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u),f=0,x=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)p[x++]=c[f++]}return new an(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ah=new Pt,is=new qa,fa=new Vi,Rh=new H,Ps=new H,Is=new H,Ls=new H,cl=new H,pa=new H,ma=new Te,ga=new Te,xa=new Te,Ch=new H,Ph=new H,Ih=new H,ya=new H,_a=new H,ze=class extends tn{constructor(e=new Ot,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(cl.fromBufferAttribute(d,e),a?pa.addScaledVector(cl,u):pa.addScaledVector(cl.sub(t),u))}t.add(pa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(fa.containsPoint(is.origin)===!1&&(is.intersectSphere(fa,Rh)===null||is.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(Ah.copy(r).invert(),is.copy(e.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){let g=p[x],m=a[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,D=v;E<D;E+=3){let P=o.getX(E),R=o.getX(E+1),F=o.getX(E+2);s=va(this,m,e,n,c,u,d,P,R,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=x,m=_;g<m;g+=3){let M=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);s=va(this,a,e,n,c,u,d,M,v,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){let g=p[x],m=a[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,D=v;E<D;E+=3){let P=E,R=E+1,F=E+2;s=va(this,m,e,n,c,u,d,P,R,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=x,m=_;g<m;g+=3){let M=g,v=g+1,E=g+2;s=va(this,a,e,n,c,u,d,M,v,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Tf(i,e,t,n,s,r,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Hi,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function va(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Is),i.getVertexPosition(c,Ls);let u=Tf(i,e,t,n,Ps,Is,Ls,ya);if(u){s&&(ma.fromBufferAttribute(s,o),ga.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,c),u.uv=ls.getInterpolation(ya,Ps,Is,Ls,ma,ga,xa,new Te)),r&&(ma.fromBufferAttribute(r,o),ga.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,c),u.uv1=ls.getInterpolation(ya,Ps,Is,Ls,ma,ga,xa,new Te),u.uv2=u.uv1),a&&(Ch.fromBufferAttribute(a,o),Ph.fromBufferAttribute(a,l),Ih.fromBufferAttribute(a,c),u.normal=ls.getInterpolation(ya,Ps,Is,Ls,Ch,Ph,Ih,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};ls.getNormal(Ps,Is,Ls,d.normal),u.face=d}return u}var Pn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function x(_,g,m,M,v,E,D,P,R,F,T){let y=E/R,U=D/F,V=E/2,ce=D/2,O=P/2,w=R+1,W=F+1,j=0,N=0,ee=new H;for(let Me=0;Me<W;Me++){let ge=Me*U-ce;for(let Pe=0;Pe<w;Pe++){let le=Pe*y-V;ee[_]=le*M,ee[g]=ge*v,ee[m]=O,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[m]=P>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Pe/R),d.push(1-Me/F),j+=1}}for(let Me=0;Me<F;Me++)for(let ge=0;ge<R;ge++){let Pe=p+ge+w*Me,le=p+ge+w*(Me+1),xe=p+(ge+1)+w*(Me+1),Ee=p+(ge+1)+w*Me;l.push(Pe,le,Ee),l.push(le,xe,Ee),N+=6}o.addGroup(f,N,T),f+=N,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function Af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tu(i){return i.getRenderTarget()===null?i.outputColorSpace:Lt.workingColorSpace}var $i={clone:Js,merge:Rn},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$a=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dn=class extends $a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Us=1,Ll=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Ds,Us,e,t);s.layers=this.layers,this.add(s);let r=new dn(Ds,Us,e,t);r.layers=this.layers,this.add(r);let a=new dn(Ds,Us,e,t);a.layers=this.layers,this.add(a);let o=new dn(Ds,Us,e,t);o.layers=this.layers,this.add(o);let l=new dn(Ds,Us,e,t);l.layers=this.layers,this.add(l);let c=new dn(Ds,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ka=class extends kn{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dl=class extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===us?Yt:qn),this.texture=new Ka(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ci});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===Pr&&(t.minFilter=Xn),new Ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hl=new H,Pf=new H,If=new Et,vi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hl.subVectors(n,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||If.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new Vi,Ma=new H,Ir=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],f=s[8],x=s[9],_=s[10],g=s[11],m=s[12],M=s[13],v=s[14],E=s[15];if(n[0].setComponents(l-r,p-c,g-f,E-m).normalize(),n[1].setComponents(l+r,p+c,g+f,E+m).normalize(),n[2].setComponents(l+a,p+u,g+x,E+M).normalize(),n[3].setComponents(l-a,p-u,g-x,E-M).normalize(),n[4].setComponents(l-o,p-d,g-_,E-v).normalize(),t===bi)n[5].setComponents(l+o,p+d,g+_,E+v).normalize();else if(t===Ba)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Au(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let d=c.array,p=c.usage,f=d.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,d,p),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,d){let p=u.array,f=u._updateRange,x=u.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&x.length===0&&i.bufferSubData(d,0,p),x.length!==0){for(let _=0,g=x.length;_<g;_++){let m=x[_];t?i.bufferSubData(d,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):i.bufferSubData(d,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}var Xi=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,p=t/l,f=[],x=[],_=[],g=[];for(let m=0;m<u;m++){let M=m*p-a;for(let v=0;v<c;v++){let E=v*d-r;x.push(E,-M,0),_.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let v=M+c*m,E=M+c*(m+1),D=M+1+c*(m+1),P=M+1+c*m;f.push(v,E,P),f.push(E,D,P)}this.setIndex(f),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Yf=`#ifdef USE_BUMPMAP
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,np=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`
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
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
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
#endif`,Lp=`struct PhysicalMaterial {
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
}`,Dp=`
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
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
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,J0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,Q0=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,tm=`#define PHONG
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
}`,nm=`#define STANDARD
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
}`,im=`#define STANDARD
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
}`,sm=`#define TOON
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
}`,rm=`#define TOON
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
}`,am=`uniform float size;
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
}`,om=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,cm=`uniform vec3 color;
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
}`,hm=`uniform float rotation;
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
}`,um=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Df,alphahash_pars_fragment:Uf,alphamap_fragment:zf,alphamap_pars_fragment:Nf,alphatest_fragment:Of,alphatest_pars_fragment:kf,aomap_fragment:Ff,aomap_pars_fragment:Bf,batching_pars_vertex:Hf,batching_vertex:Gf,begin_vertex:Vf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Kf,color_fragment:jf,color_pars_fragment:Qf,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Tp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:yp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_fragment:Mp,lightmap_pars_fragment:bp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Ep,lights_toon_fragment:Ap,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Pp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Lp,lights_fragment_begin:Dp,lights_fragment_maps:Up,lights_fragment_end:zp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Fp,map_fragment:Bp,map_pars_fragment:Hp,map_particle_fragment:Gp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Zp,morphtarget_vertex:Jp,normal_fragment_begin:$p,normal_fragment_maps:Kp,normal_pars_fragment:jp,normal_pars_vertex:Qp,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,opaque_fragment:a0,packing:o0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:h0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:x0,skinbase_vertex:y0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:M0,specularmap_fragment:b0,specularmap_pars_fragment:w0,tonemapping_fragment:S0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:I0,background_vert:L0,background_frag:D0,backgroundCube_vert:U0,backgroundCube_frag:z0,cube_vert:N0,cube_frag:O0,depth_vert:k0,depth_frag:F0,distanceRGBA_vert:B0,distanceRGBA_frag:H0,equirect_vert:G0,equirect_frag:V0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:Z0,meshlambert_frag:J0,meshmatcap_vert:$0,meshmatcap_frag:K0,meshnormal_vert:j0,meshnormal_frag:Q0,meshphong_vert:em,meshphong_frag:tm,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:am,points_frag:om,shadow_vert:lm,shadow_frag:cm,sprite_vert:hm,sprite_frag:um},Ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},li={basic:{uniforms:Rn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Rn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Rn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Rn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Rn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Rn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Rn([Ge.points,Ge.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Rn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Rn([Ge.common,Ge.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Rn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Rn([Ge.sprite,Ge.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Rn([Ge.common,Ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Rn([Ge.lights,Ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};li.physical={uniforms:Rn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var ba={r:0,b:0,g:0};function dm(i,e,t,n,s,r,a){let o=new it(0),l=r===!0?0:1,c,u,d=null,p=0,f=null;function x(g,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xo)?(u===void 0&&(u=new ze(new Pn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Js(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Bt,(d!==v||p!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,p=v.version,f=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ze(new Xi(2,2),new on({name:"BackgroundMaterial",uniforms:Js(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,f=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,m){g.getRGB(ba,Tu(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(o,l)},render:x}}function fm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,u=!1;function d(O,w,W,j,N){let ee=!1;if(a){let Me=_(j,W,w);c!==Me&&(c=Me,f(c.object)),ee=m(O,j,W,N),ee&&M(O,j,W,N)}else{let Me=w.wireframe===!0;(c.geometry!==j.id||c.program!==W.id||c.wireframe!==Me)&&(c.geometry=j.id,c.program=W.id,c.wireframe=Me,ee=!0)}N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,F(O,w,W,j),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function x(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,w,W){let j=W.wireframe===!0,N=o[O.id];N===void 0&&(N={},o[O.id]=N);let ee=N[w.id];ee===void 0&&(ee={},N[w.id]=ee);let Me=ee[j];return Me===void 0&&(Me=g(p()),ee[j]=Me),Me}function g(O){let w=[],W=[],j=[];for(let N=0;N<s;N++)w[N]=0,W[N]=0,j[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:j,object:O,attributes:{},index:null}}function m(O,w,W,j){let N=c.attributes,ee=w.attributes,Me=0,ge=W.getAttributes();for(let Pe in ge)if(ge[Pe].location>=0){let xe=N[Pe],Ee=ee[Pe];if(Ee===void 0&&(Pe==="instanceMatrix"&&O.instanceMatrix&&(Ee=O.instanceMatrix),Pe==="instanceColor"&&O.instanceColor&&(Ee=O.instanceColor)),xe===void 0||xe.attribute!==Ee||Ee&&xe.data!==Ee.data)return!0;Me++}return c.attributesNum!==Me||c.index!==j}function M(O,w,W,j){let N={},ee=w.attributes,Me=0,ge=W.getAttributes();for(let Pe in ge)if(ge[Pe].location>=0){let xe=ee[Pe];xe===void 0&&(Pe==="instanceMatrix"&&O.instanceMatrix&&(xe=O.instanceMatrix),Pe==="instanceColor"&&O.instanceColor&&(xe=O.instanceColor));let Ee={};Ee.attribute=xe,xe&&xe.data&&(Ee.data=xe.data),N[Pe]=Ee,Me++}c.attributes=N,c.attributesNum=Me,c.index=j}function v(){let O=c.newAttributes;for(let w=0,W=O.length;w<W;w++)O[w]=0}function E(O){D(O,0)}function D(O,w){let W=c.newAttributes,j=c.enabledAttributes,N=c.attributeDivisors;W[O]=1,j[O]===0&&(i.enableVertexAttribArray(O),j[O]=1),N[O]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,w),N[O]=w)}function P(){let O=c.newAttributes,w=c.enabledAttributes;for(let W=0,j=w.length;W<j;W++)w[W]!==O[W]&&(i.disableVertexAttribArray(W),w[W]=0)}function R(O,w,W,j,N,ee,Me){Me===!0?i.vertexAttribIPointer(O,w,W,N,ee):i.vertexAttribPointer(O,w,W,j,N,ee)}function F(O,w,W,j){if(n.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let N=j.attributes,ee=W.getAttributes(),Me=w.defaultAttributeValues;for(let ge in ee){let Pe=ee[ge];if(Pe.location>=0){let le=N[ge];if(le===void 0&&(ge==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),ge==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),le!==void 0){let xe=le.normalized,Ee=le.itemSize,Ke=t.get(le);if(Ke===void 0)continue;let Fe=Ke.buffer,Ze=Ke.type,Oe=Ke.bytesPerElement,We=n.isWebGL2===!0&&(Ze===i.INT||Ze===i.UNSIGNED_INT||le.gpuType===mu);if(le.isInterleavedBufferAttribute){let Le=le.data,B=Le.stride,Re=le.offset;if(Le.isInstancedInterleavedBuffer){for(let de=0;de<Pe.locationSize;de++)D(Pe.location+de,Le.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let de=0;de<Pe.locationSize;de++)E(Pe.location+de);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let de=0;de<Pe.locationSize;de++)R(Pe.location+de,Ee/Pe.locationSize,Ze,xe,B*Oe,(Re+Ee/Pe.locationSize*de)*Oe,We)}else{if(le.isInstancedBufferAttribute){for(let Le=0;Le<Pe.locationSize;Le++)D(Pe.location+Le,le.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<Pe.locationSize;Le++)E(Pe.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Le=0;Le<Pe.locationSize;Le++)R(Pe.location+Le,Ee/Pe.locationSize,Ze,xe,Ee*Oe,Ee/Pe.locationSize*Le*Oe,We)}}else if(Me!==void 0){let xe=Me[ge];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(Pe.location,xe);break;case 3:i.vertexAttrib3fv(Pe.location,xe);break;case 4:i.vertexAttrib4fv(Pe.location,xe);break;default:i.vertexAttrib1fv(Pe.location,xe)}}}}P()}function T(){V();for(let O in o){let w=o[O];for(let W in w){let j=w[W];for(let N in j)x(j[N].object),delete j[N];delete w[W]}delete o[O]}}function y(O){if(o[O.id]===void 0)return;let w=o[O.id];for(let W in w){let j=w[W];for(let N in j)x(j[N].object),delete j[N];delete w[W]}delete o[O.id]}function U(O){for(let w in o){let W=o[w];if(W[O.id]===void 0)continue;let j=W[O.id];for(let N in j)x(j[N].object),delete j[N];delete W[O.id]}}function V(){ce(),u=!0,c!==l&&(c=l,f(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:ce,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:E,disableUnusedAttributes:P}}function pm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,d){i.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,p){if(p===0)return;let f,x;if(s)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](r,u,d,p),t.update(d,r,p)}function c(u,d,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],d[x]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,p);let x=0;for(let _=0;_<p;_++)x+=d[_];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function mm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,E=a||e.has("OES_texture_float"),D=v&&E,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:D,maxSamples:P}}function gm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vi,o=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){let x=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,v=M*4,E=m.clippingState||null;l.value=E,E=u(x,p,v,f);for(let D=0;D!==v;++D)E[D]=t[D];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,f,x){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,x!==!0||g===null){let m=f+_*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,E=f;v!==_;++v,E+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function xm(i){let e=new WeakMap;function t(a,o){return o===Sl?a.mapping=qs:o===El&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Sl||o===El)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Dl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $s=class extends $a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,Lh=[.125,.215,.35,.446,.526,.582],os=20,ul=new $s,Dh=new it,dl=null,fl=0,pl=0,rs=(1+Math.sqrt(5))/2,zs=1/rs,Uh=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,rs,zs),new H(0,rs,-zs),new H(zs,0,rs),new H(-zs,0,rs),new H(rs,zs,0),new H(-rs,zs,0)],qi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ni,format:On,colorSpace:Si,depthBuffer:!1},s=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=_m(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,s){let o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Dh),u.toneMapping=hi,u.autoClear=!1;let f=new Nt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new ze(new Pn,f),_=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Dh),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;wa(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uh[(s-1)%Uh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ze(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),_=r/x,g=isFinite(r)?1+Math.floor(u*_):os;g>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);let m=[],M=0;for(let R=0;R<os;++R){let F=R/_,T=Math.exp(-F*F/2);m.push(T),R===0?M+=T:R<g&&(M+=2*T)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let E=this._sizeLods[s],D=3*E*(s>v-Hs?s-v+Hs:0),P=4*(this._cubeSize-E);wa(t,D,P,3*E,2*E),l.setRenderTarget(t),l.render(d,ul)}};function ym(i){let e=[],t=[],n=[],s=i,r=i-Hs+1+Lh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Hs?l=Lh[a-i+Hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,x=6,_=3,g=2,m=1,M=new Float32Array(_*x*f),v=new Float32Array(g*x*f),E=new Float32Array(m*x*f);for(let P=0;P<f;P++){let R=P%3*2/3-1,F=P>2?0:-1,T=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];M.set(T,_*x*P),v.set(p,g*x*P);let y=[P,P,P,P,P,P];E.set(y,m*x*P)}let D=new Ot;D.setAttribute("position",new an(M,_)),D.setAttribute("uv",new an(v,g)),D.setAttribute("faceIndex",new an(E,m)),e.push(D),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(i,e,t){let n=new Cn(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _m(i,e,t){let n=new Float32Array(os),s=new H(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Nh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Oh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function vm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Sl||l===El,u=l===qs||l===Ys;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new qi(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new qi(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bm(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let _=p.morphAttributes[x];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let x in f){let _=f[x];for(let g=0,m=_.length;g<m;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(d){let p=[],f=d.index,x=d.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let v=0,E=M.length;v<E;v+=3){let D=M[v+0],P=M[v+1],R=M[v+2];p.push(D,P,P,R,R,D)}}else if(x!==void 0){let M=x.array;_=x.version;for(let v=0,E=M.length/3-1;v<E;v+=3){let D=v+0,P=v+1,R=v+2;p.push(D,P,P,R,R,D)}}else return;let g=new(Su(p)?Ja:Za)(p,1);g.version=_;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function wm(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,x){i.drawElements(r,x,o,f*l),t.update(x,r,1)}function d(f,x,_){if(_===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,x,o,f*l,_),t.update(x,r,_)}function p(f,x,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(f[m]/l,x[m]);else{g.multiDrawElementsWEBGL(r,x,0,o,f,0,_);let m=0;for(let M=0;M<_;M++)m+=x[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function Sm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Em(i,e){return i[0]-e[0]}function Tm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Am(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=f!==void 0?f.length:0,_=r.get(u);if(_===void 0||_.count!==x){let O=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();let M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],R=u.morphAttributes.color||[],F=0;M===!0&&(F=1),v===!0&&(F=2),E===!0&&(F=3);let T=u.attributes.position.count*F,y=1;T>e.maxTextureSize&&(y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let U=new Float32Array(T*y*4*x),V=new Xa(U,T,y,x);V.type=Oi,V.needsUpdate=!0;let ce=F*4;for(let w=0;w<x;w++){let W=D[w],j=P[w],N=R[w],ee=T*y*4*w;for(let Me=0;Me<W.count;Me++){let ge=Me*ce;M===!0&&(a.fromBufferAttribute(W,Me),U[ee+ge+0]=a.x,U[ee+ge+1]=a.y,U[ee+ge+2]=a.z,U[ee+ge+3]=0),v===!0&&(a.fromBufferAttribute(j,Me),U[ee+ge+4]=a.x,U[ee+ge+5]=a.y,U[ee+ge+6]=a.z,U[ee+ge+7]=0),E===!0&&(a.fromBufferAttribute(N,Me),U[ee+ge+8]=a.x,U[ee+ge+9]=a.y,U[ee+ge+10]=a.z,U[ee+ge+11]=N.itemSize===4?a.w:1)}}_={count:x,texture:V,size:new Te(T,y)},r.set(u,_),u.addEventListener("dispose",O)}let g=0;for(let M=0;M<p.length;M++)g+=p[M];let m=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",m),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==f){x=[];for(let v=0;v<f;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<f;v++){let E=x[v];E[0]=v,E[1]=p[v]}x.sort(Tm);for(let v=0;v<8;v++)v<f&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Em);let _=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let E=o[v],D=E[0],P=E[1];D!==Number.MAX_SAFE_INTEGER&&P?(_&&u.getAttribute("morphTarget"+v)!==_[D]&&u.setAttribute("morphTarget"+v,_[D]),g&&u.getAttribute("morphNormal"+v)!==g[D]&&u.setAttribute("morphNormal"+v,g[D]),s[v]=P,m+=P):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let M=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Rm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ja=class extends kn{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:hs,u!==hs&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hs&&(n=Ni),n===void 0&&u===Zs&&(n=cs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ru=new kn,Cu=new ja(1,1);Cu.compareFunction=wu;var Pu=new Xa,Iu=new Il,Lu=new Ka,kh=[],Fh=[],Bh=new Float32Array(16),Hh=new Float32Array(9),Gh=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vo(i,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function Dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),pn(t,n)}}function Um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),pn(t,n)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),pn(t,n)}}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function Bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function Wm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Cu:Ru;t.setTexture2D(e||r,s)}function Xm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Iu,s)}function qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Lu,s)}function Ym(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pu,s)}function Zm(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Um;case 35676:return zm;case 5124:case 35670:return Nm;case 35667:case 35671:return Om;case 35668:case 35672:return km;case 35669:case 35673:return Fm;case 5125:return Bm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Jm(i,e){i.uniform1fv(this.addr,e)}function $m(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Km(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function jm(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qm(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function sg(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function ag(i,e){i.uniform1uiv(this.addr,e)}function og(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function hg(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ru,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Iu,r[a])}function dg(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Lu,r[a])}function fg(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pu,r[a])}function pg(i){switch(i){case 5126:return Jm;case 35664:return $m;case 35665:return Km;case 35666:return jm;case 35674:return Qm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}var Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zm(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),a=ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vh(t,c===void 0?new Ul(o,i,e):new zl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Nl(o),Vh(t,d)),t=d}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);mg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Wh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gg=37297,xg=0;function yg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function _g(i){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(i),n;switch(e===t?n="":e===Fa&&t===ka?n="LinearDisplayP3ToLinearSRGB":e===ka&&t===Fa&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case _o:return[n,"LinearTransferOETF"];case Yt:case vc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Xh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(e),a)}else return s}function vg(i,e){let t=_g(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mg(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case xc:t="OptimizedCineon";break;case Wr:t="ACESFilmic";break;case yc:t="AgX";break;case Wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gs).join(`
`)}function Sg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gs(i){return i!==""}function qh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(Tg,Rg)}var Ag=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rg(i,e){let t=vt[e];if(t===void 0){let n=Ag.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(i){return i.replace(Cg,Pg)}function Pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ig(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Lg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ys&&(e="ENVMAP_MODE_REFRACTION"),e}function Ug(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Vd:e="ENVMAP_BLENDING_ADD";break}return e}function zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ng(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ig(t),c=Lg(t),u=Dg(t),d=Ug(t),p=zg(t),f=t.isWebGL2?"":bg(t),x=wg(t),_=Sg(r),g=s.createProgram(),m,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),M.length>0&&(M+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),M=[f,Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?vt.tonemapping_pars_fragment:"",t.toneMapping!==hi?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,vg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Ol(a),a=qh(a,t),a=Yh(a,t),o=Ol(o),o=qh(o,t),o=Yh(o,t),a=Zh(a),o=Zh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=v+m+a,D=v+M+o,P=Wh(s,s.VERTEX_SHADER,E),R=Wh(s,s.FRAGMENT_SHADER,D);s.attachShader(g,P),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function F(V){if(i.debug.checkShaderErrors){let ce=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(P).trim(),w=s.getShaderInfoLog(R).trim(),W=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,R);else{let N=Xh(s,P,"vertex"),ee=Xh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+ce+`
`+N+`
`+ee)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(O===""||w==="")&&(j=!1);j&&(V.diagnostics={runnable:W,programLog:ce,vertexShader:{log:O,prefix:m},fragmentShader:{log:w,prefix:M}})}s.deleteShader(P),s.deleteShader(R),T=new Xs(s,g),y=Eg(s,g)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let y;this.getAttributes=function(){return y===void 0&&F(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,gg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=R,this}var Og=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fl(e),t.set(e,n)),n}},Fl=class{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}};function kg(i,e,t,n,s,r,a){let o=new Ya,l=new kl,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return T===0?"uv":`uv${T}`}function g(T,y,U,V,ce){let O=V.fog,w=ce.geometry,W=T.isMeshStandardMaterial?V.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),N=j&&j.mapping===xo?j.image.height:null,ee=x[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let Me=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ge=Me!==void 0?Me.length:0,Pe=0;w.morphAttributes.position!==void 0&&(Pe=1),w.morphAttributes.normal!==void 0&&(Pe=2),w.morphAttributes.color!==void 0&&(Pe=3);let le,xe,Ee,Ke;if(ee){let xt=li[ee];le=xt.vertexShader,xe=xt.fragmentShader}else le=T.vertexShader,xe=T.fragmentShader,l.update(T),Ee=l.getVertexShaderID(T),Ke=l.getFragmentShaderID(T);let Fe=i.getRenderTarget(),Ze=ce.isInstancedMesh===!0,Oe=ce.isBatchedMesh===!0,We=!!T.map,Le=!!T.matcap,B=!!j,Re=!!T.aoMap,de=!!T.lightMap,Se=!!T.bumpMap,he=!!T.normalMap,Be=!!T.displacementMap,Ce=!!T.emissiveMap,L=!!T.metalnessMap,C=!!T.roughnessMap,Q=T.anisotropy>0,ue=T.clearcoat>0,be=T.iridescence>0,_e=T.sheen>0,$e=T.transmission>0,Ie=Q&&!!T.anisotropyMap,Xe=ue&&!!T.clearcoatMap,Qe=ue&&!!T.clearcoatNormalMap,pt=ue&&!!T.clearcoatRoughnessMap,me=be&&!!T.iridescenceMap,ot=be&&!!T.iridescenceThicknessMap,mt=_e&&!!T.sheenColorMap,lt=_e&&!!T.sheenRoughnessMap,et=!!T.specularMap,Je=!!T.specularColorMap,ht=!!T.specularIntensityMap,Mt=$e&&!!T.transmissionMap,Ct=$e&&!!T.thicknessMap,ct=!!T.gradientMap,Ae=!!T.alphaMap,q=T.alphaTest>0,ke=!!T.alphaHash,Ue=!!T.extensions,je=!!w.attributes.uv1,tt=!!w.attributes.uv2,Tt=!!w.attributes.uv3,gt=hi;return T.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(gt=i.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:xe,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:Ke,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Oe,instancing:Ze,instancingColor:Ze&&ce.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Si,map:We,matcap:Le,envMap:B,envMapMode:B&&j.mapping,envMapCubeUVHeight:N,aoMap:Re,lightMap:de,bumpMap:Se,normalMap:he,displacementMap:p&&Be,emissiveMap:Ce,normalMapObjectSpace:he&&T.normalMapType===nf,normalMapTangentSpace:he&&T.normalMapType===yo,metalnessMap:L,roughnessMap:C,anisotropy:Q,anisotropyMap:Ie,clearcoat:ue,clearcoatMap:Xe,clearcoatNormalMap:Qe,clearcoatRoughnessMap:pt,iridescence:be,iridescenceMap:me,iridescenceThicknessMap:ot,sheen:_e,sheenColorMap:mt,sheenRoughnessMap:lt,specularMap:et,specularColorMap:Je,specularIntensityMap:ht,transmission:$e,transmissionMap:Mt,thicknessMap:Ct,gradientMap:ct,opaque:T.transparent===!1&&T.blending===ki,alphaMap:Ae,alphaTest:q,alphaHash:ke,combine:T.combine,mapUv:We&&_(T.map.channel),aoMapUv:Re&&_(T.aoMap.channel),lightMapUv:de&&_(T.lightMap.channel),bumpMapUv:Se&&_(T.bumpMap.channel),normalMapUv:he&&_(T.normalMap.channel),displacementMapUv:Be&&_(T.displacementMap.channel),emissiveMapUv:Ce&&_(T.emissiveMap.channel),metalnessMapUv:L&&_(T.metalnessMap.channel),roughnessMapUv:C&&_(T.roughnessMap.channel),anisotropyMapUv:Ie&&_(T.anisotropyMap.channel),clearcoatMapUv:Xe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(T.sheenRoughnessMap.channel),specularMapUv:et&&_(T.specularMap.channel),specularColorMapUv:Je&&_(T.specularColorMap.channel),specularIntensityMapUv:ht&&_(T.specularIntensityMap.channel),transmissionMapUv:Mt&&_(T.transmissionMap.channel),thicknessMapUv:Ct&&_(T.thicknessMap.channel),alphaMapUv:Ae&&_(T.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(he||Q),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:tt,vertexUv3s:Tt,pointsUvs:ce.isPoints===!0&&!!w.attributes.uv&&(We||Ae),fog:!!O,useFog:T.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ce.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===en,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ue&&T.extensions.derivatives===!0,extensionFragDepth:Ue&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){let y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(let U in T.defines)y.push(U),y.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(M(y,T),v(y,T),y.push(i.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function M(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function E(T){let y=x[T.type],U;if(y){let V=li[y];U=$i.clone(V.uniforms)}else U=T.uniforms;return U}function D(T,y){let U;for(let V=0,ce=c.length;V<ce;V++){let O=c[V];if(O.cacheKey===y){U=O,++U.usedTimes;break}}return U===void 0&&(U=new Ng(i,y,T,r),c.push(U)),U}function P(T){if(--T.usedTimes===0){let y=c.indexOf(T);c[y]=c[c.length-1],c.pop(),T.destroy()}}function R(T){l.remove(T)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:D,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:F}}function Fg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,f,x,_,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:x,renderOrder:d.renderOrder,z:_,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}function o(d,p,f,x,_,g){let m=a(d,p,f,x,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(d,p,f,x,_,g){let m=a(d,p,f,x,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,p){t.length>1&&t.sort(d||Bg),n.length>1&&n.sort(p||$h),s.length>1&&s.sort(p||$h)}function u(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Hg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Kh,i.set(n,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new it};break;case"SpotLight":t={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wg=0;function Xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qg(i,e){let t=new Gg,n=Vg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new H);let r=new H,a=new Pt,o=new Pt;function l(u,d){let p=0,f=0,x=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,g=0,m=0,M=0,v=0,E=0,D=0,P=0,R=0,F=0,T=0;u.sort(Xg);let y=d===!0?Math.PI:1;for(let V=0,ce=u.length;V<ce;V++){let O=u[V],w=O.color,W=O.intensity,j=O.distance,N=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=w.r*W*y,f+=w.g*W*y,x+=w.b*W*y;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(O.sh.coefficients[ee],W);T++}else if(O.isDirectionalLight){let ee=t.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity*y),O.castShadow){let Me=O.shadow,ge=n.get(O);ge.shadowBias=Me.bias,ge.shadowNormalBias=Me.normalBias,ge.shadowRadius=Me.radius,ge.shadowMapSize=Me.mapSize,s.directionalShadow[_]=ge,s.directionalShadowMap[_]=N,s.directionalShadowMatrix[_]=O.shadow.matrix,E++}s.directional[_]=ee,_++}else if(O.isSpotLight){let ee=t.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(w).multiplyScalar(W*y),ee.distance=j,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,s.spot[m]=ee;let Me=O.shadow;if(O.map&&(s.spotLightMap[R]=O.map,R++,Me.updateMatrices(O),O.castShadow&&F++),s.spotLightMatrix[m]=Me.matrix,O.castShadow){let ge=n.get(O);ge.shadowBias=Me.bias,ge.shadowNormalBias=Me.normalBias,ge.shadowRadius=Me.radius,ge.shadowMapSize=Me.mapSize,s.spotShadow[m]=ge,s.spotShadowMap[m]=N,P++}m++}else if(O.isRectAreaLight){let ee=t.get(O);ee.color.copy(w).multiplyScalar(W),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),s.rectArea[M]=ee,M++}else if(O.isPointLight){let ee=t.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity*y),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){let Me=O.shadow,ge=n.get(O);ge.shadowBias=Me.bias,ge.shadowNormalBias=Me.normalBias,ge.shadowRadius=Me.radius,ge.shadowMapSize=Me.mapSize,ge.shadowCameraNear=Me.camera.near,ge.shadowCameraFar=Me.camera.far,s.pointShadow[g]=ge,s.pointShadowMap[g]=N,s.pointShadowMatrix[g]=O.shadow.matrix,D++}s.point[g]=ee,g++}else if(O.isHemisphereLight){let ee=t.get(O);ee.skyColor.copy(O.color).multiplyScalar(W*y),ee.groundColor.copy(O.groundColor).multiplyScalar(W*y),s.hemi[v]=ee,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=x;let U=s.hash;(U.directionalLength!==_||U.pointLength!==g||U.spotLength!==m||U.rectAreaLength!==M||U.hemiLength!==v||U.numDirectionalShadows!==E||U.numPointShadows!==D||U.numSpotShadows!==P||U.numSpotMaps!==R||U.numLightProbes!==T)&&(s.directional.length=_,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+R-F,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=T,U.directionalLength=_,U.pointLength=g,U.spotLength=m,U.rectAreaLength=M,U.hemiLength=v,U.numDirectionalShadows=E,U.numPointShadows=D,U.numSpotShadows=P,U.numSpotMaps=R,U.numLightProbes=T,s.version=Wg++)}function c(u,d){let p=0,f=0,x=0,_=0,g=0,m=d.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){let E=u[M];if(E.isDirectionalLight){let D=s.directional[p];D.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),p++}else if(E.isSpotLight){let D=s.spot[x];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),x++}else if(E.isRectAreaLight){let D=s.rectArea[_];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let D=s.point[f];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let D=s.hemi[g];D.direction.setFromMatrixPosition(E.matrixWorld),D.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:s}}function jh(i,e){let t=new qg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yg(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new jh(i,e),t.set(r,[l])):a>=o.length?(l=new jh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Bl=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function $g(i,e,t){let n=new Ir,s=new Te,r=new Te,a=new Zt,o=new Bl({depthPacking:tf}),l=new Hl,c={},u=t.maxTextureSize,d={[Hi]:rn,[rn]:Hi,[en]:en},p=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ot;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let m=this.type;this.render=function(P,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ci),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let ce=m!==_i&&this.type===_i,O=m===_i&&this.type!==_i;for(let w=0,W=P.length;w<W;w++){let j=P[w],N=j.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let ee=N.getFrameExtents();if(s.multiply(ee),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,N.mapSize.y=r.y)),N.map===null||ce===!0||O===!0){let ge=this.type!==_i?{minFilter:un,magFilter:un}:{};N.map!==null&&N.map.dispose(),N.map=new Cn(s.x,s.y,ge),N.map.texture.name=j.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let Me=N.getViewportCount();for(let ge=0;ge<Me;ge++){let Pe=N.getViewport(ge);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),V.viewport(a),N.updateMatrices(j,ge),n=N.getFrustum(),E(R,F,N.camera,j,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&M(N,F),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,y,U)};function M(P,R){let F=e.update(_);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Cn(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,F,p,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,F,f,_,null)}function v(P,R,F,T){let y=null,U=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)y=U;else if(y=F.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=y.uuid,ce=R.uuid,O=c[V];O===void 0&&(O={},c[V]=O);let w=O[ce];w===void 0&&(w=y.clone(),O[ce]=w,R.addEventListener("dispose",D)),y=w}if(y.visible=R.visible,y.wireframe=R.wireframe,T===_i?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=F}return y}function E(P,R,F,T,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===_i)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let ce=e.update(P),O=P.material;if(Array.isArray(O)){let w=ce.groups;for(let W=0,j=w.length;W<j;W++){let N=w[W],ee=O[N.materialIndex];if(ee&&ee.visible){let Me=v(P,ee,T,y);P.onBeforeShadow(i,P,R,F,ce,Me,N),i.renderBufferDirect(F,null,ce,Me,P,N),P.onAfterShadow(i,P,R,F,ce,Me,N)}}}else if(O.visible){let w=v(P,O,T,y);P.onBeforeShadow(i,P,R,F,ce,w,null),i.renderBufferDirect(F,null,ce,w,P,null),P.onAfterShadow(i,P,R,F,ce,w,null)}}let V=P.children;for(let ce=0,O=V.length;ce<O;ce++)E(V[ce],R,F,T,y)}function D(P){P.target.removeEventListener("dispose",D);for(let F in c){let T=c[F],y=P.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function Kg(i,e,t){let n=t.isWebGL2;function s(){let q=!1,ke=new Zt,Ue=null,je=new Zt(0,0,0,0);return{setMask:function(tt){Ue!==tt&&!q&&(i.colorMask(tt,tt,tt,tt),Ue=tt)},setLocked:function(tt){q=tt},setClear:function(tt,Tt,gt,ut,xt){xt===!0&&(tt*=ut,Tt*=ut,gt*=ut),ke.set(tt,Tt,gt,ut),je.equals(ke)===!1&&(i.clearColor(tt,Tt,gt,ut),je.copy(ke))},reset:function(){q=!1,Ue=null,je.set(-1,0,0,0)}}}function r(){let q=!1,ke=null,Ue=null,je=null;return{setTest:function(tt){tt?Oe(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(tt){ke!==tt&&!q&&(i.depthMask(tt),ke=tt)},setFunc:function(tt){if(Ue!==tt){switch(tt){case zd:i.depthFunc(i.NEVER);break;case Nd:i.depthFunc(i.ALWAYS);break;case Od:i.depthFunc(i.LESS);break;case Ua:i.depthFunc(i.LEQUAL);break;case kd:i.depthFunc(i.EQUAL);break;case Fd:i.depthFunc(i.GEQUAL);break;case Bd:i.depthFunc(i.GREATER);break;case Hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=tt}},setLocked:function(tt){q=tt},setClear:function(tt){je!==tt&&(i.clearDepth(tt),je=tt)},reset:function(){q=!1,ke=null,Ue=null,je=null}}}function a(){let q=!1,ke=null,Ue=null,je=null,tt=null,Tt=null,gt=null,ut=null,xt=null;return{setTest:function(At){q||(At?Oe(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(At){ke!==At&&!q&&(i.stencilMask(At),ke=At)},setFunc:function(At,Ne,Wt){(Ue!==At||je!==Ne||tt!==Wt)&&(i.stencilFunc(At,Ne,Wt),Ue=At,je=Ne,tt=Wt)},setOp:function(At,Ne,Wt){(Tt!==At||gt!==Ne||ut!==Wt)&&(i.stencilOp(At,Ne,Wt),Tt=At,gt=Ne,ut=Wt)},setLocked:function(At){q=At},setClear:function(At){xt!==At&&(i.clearStencil(At),xt=At)},reset:function(){q=!1,ke=null,Ue=null,je=null,tt=null,Tt=null,gt=null,ut=null,xt=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap,p={},f={},x=new WeakMap,_=[],g=null,m=!1,M=null,v=null,E=null,D=null,P=null,R=null,F=null,T=new it(0,0,0),y=0,U=!1,V=null,ce=null,O=null,w=null,W=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,Me=i.getParameter(i.VERSION);Me.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Me)[1]),N=ee>=1):Me.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),N=ee>=2);let ge=null,Pe={},le=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Ee=new Zt().fromArray(le),Ke=new Zt().fromArray(xe);function Fe(q,ke,Ue,je){let tt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(q,Tt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<Ue;gt++)n&&(q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY)?i.texImage3D(ke,0,i.RGBA,1,1,je,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(ke+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return Tt}let Ze={};Ze[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ze[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ze[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ze[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(i.DEPTH_TEST),l.setFunc(Ua),Ce(!1),L(Dc),Oe(i.CULL_FACE),he(ci);function Oe(q){p[q]!==!0&&(i.enable(q),p[q]=!0)}function We(q){p[q]!==!1&&(i.disable(q),p[q]=!1)}function Le(q,ke){return f[q]!==ke?(i.bindFramebuffer(q,ke),f[q]=ke,n&&(q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ke),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ke)),!0):!1}function B(q,ke){let Ue=_,je=!1;if(q)if(Ue=x.get(ke),Ue===void 0&&(Ue=[],x.set(ke,Ue)),q.isWebGLMultipleRenderTargets){let tt=q.texture;if(Ue.length!==tt.length||Ue[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,gt=tt.length;Tt<gt;Tt++)Ue[Tt]=i.COLOR_ATTACHMENT0+Tt;Ue.length=tt.length,je=!0}}else Ue[0]!==i.COLOR_ATTACHMENT0&&(Ue[0]=i.COLOR_ATTACHMENT0,je=!0);else Ue[0]!==i.BACK&&(Ue[0]=i.BACK,je=!0);je&&(t.isWebGL2?i.drawBuffers(Ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ue))}function Re(q){return g!==q?(i.useProgram(q),g=q,!0):!1}let de={[as]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};if(n)de[Nc]=i.MIN,de[Oc]=i.MAX;else{let q=e.get("EXT_blend_minmax");q!==null&&(de[Nc]=q.MIN_EXT,de[Oc]=q.MAX_EXT)}let Se={[bd]:i.ZERO,[wd]:i.ONE,[Sd]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Cd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Ld]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function he(q,ke,Ue,je,tt,Tt,gt,ut,xt,At){if(q===ci){m===!0&&(We(i.BLEND),m=!1);return}if(m===!1&&(Oe(i.BLEND),m=!0),q!==_d){if(q!==M||At!==U){if((v!==as||P!==as)&&(i.blendEquation(i.FUNC_ADD),v=as,P=as),At)switch(q){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}E=null,D=null,R=null,F=null,T.set(0,0,0),y=0,M=q,U=At}return}tt=tt||ke,Tt=Tt||Ue,gt=gt||je,(ke!==v||tt!==P)&&(i.blendEquationSeparate(de[ke],de[tt]),v=ke,P=tt),(Ue!==E||je!==D||Tt!==R||gt!==F)&&(i.blendFuncSeparate(Se[Ue],Se[je],Se[Tt],Se[gt]),E=Ue,D=je,R=Tt,F=gt),(ut.equals(T)===!1||xt!==y)&&(i.blendColor(ut.r,ut.g,ut.b,xt),T.copy(ut),y=xt),M=q,U=!1}function Be(q,ke){q.side===en?We(i.CULL_FACE):Oe(i.CULL_FACE);let Ue=q.side===rn;ke&&(Ue=!Ue),Ce(Ue),q.blending===ki&&q.transparent===!1?he(ci):he(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),o.setMask(q.colorWrite);let je=q.stencilWrite;c.setTest(je),je&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Q(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(q){V!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),V=q)}function L(q){q!==xd?(Oe(i.CULL_FACE),q!==ce&&(q===Dc?i.cullFace(i.BACK):q===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),ce=q}function C(q){q!==O&&(N&&i.lineWidth(q),O=q)}function Q(q,ke,Ue){q?(Oe(i.POLYGON_OFFSET_FILL),(w!==ke||W!==Ue)&&(i.polygonOffset(ke,Ue),w=ke,W=Ue)):We(i.POLYGON_OFFSET_FILL)}function ue(q){q?Oe(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function be(q){q===void 0&&(q=i.TEXTURE0+j-1),ge!==q&&(i.activeTexture(q),ge=q)}function _e(q,ke,Ue){Ue===void 0&&(ge===null?Ue=i.TEXTURE0+j-1:Ue=ge);let je=Pe[Ue];je===void 0&&(je={type:void 0,texture:void 0},Pe[Ue]=je),(je.type!==q||je.texture!==ke)&&(ge!==Ue&&(i.activeTexture(Ue),ge=Ue),i.bindTexture(q,ke||Ze[q]),je.type=q,je.texture=ke)}function $e(){let q=Pe[ge];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(q){Ee.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ee.copy(q))}function Mt(q){Ke.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Ke.copy(q))}function Ct(q,ke){let Ue=d.get(ke);Ue===void 0&&(Ue=new WeakMap,d.set(ke,Ue));let je=Ue.get(q);je===void 0&&(je=i.getUniformBlockIndex(ke,q.name),Ue.set(q,je))}function ct(q,ke){let je=d.get(ke).get(q);u.get(ke)!==je&&(i.uniformBlockBinding(ke,je,q.__bindingPointIndex),u.set(ke,je))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ge=null,Pe={},f={},x=new WeakMap,_=[],g=null,m=!1,M=null,v=null,E=null,D=null,P=null,R=null,F=null,T=new it(0,0,0),y=0,U=!1,V=null,ce=null,O=null,w=null,W=null,Ee.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:We,bindFramebuffer:Le,drawBuffers:B,useProgram:Re,setBlending:he,setMaterial:Be,setFlipSided:Ce,setCullFace:L,setLineWidth:C,setPolygonOffset:Q,setScissorTest:ue,activeTexture:be,bindTexture:_e,unbindTexture:$e,compressedTexImage2D:Ie,compressedTexImage3D:Xe,texImage2D:et,texImage3D:Je,updateUBOMapping:Ct,uniformBlockBinding:ct,texStorage2D:mt,texStorage3D:lt,texSubImage2D:Qe,texSubImage3D:pt,compressedTexSubImage2D:me,compressedTexSubImage3D:ot,scissor:ht,viewport:Mt,reset:Ae}}function jg(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,C){return f?new OffscreenCanvas(L,C):Ga("canvas")}function _(L,C,Q,ue){let be=1;if((L.width>ue||L.height>ue)&&(be=ue/Math.max(L.width,L.height)),be<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let _e=C?Cl:Math.floor,$e=_e(be*L.width),Ie=_e(be*L.height);d===void 0&&(d=x($e,Ie));let Xe=Q?x($e,Ie):d;return Xe.width=$e,Xe.height=Ie,Xe.getContext("2d").drawImage(L,0,0,$e,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+$e+"x"+Ie+")."),Xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return mh(L.width)&&mh(L.height)}function m(L){return o?!1:L.wrapS!==ti||L.wrapT!==ti||L.minFilter!==un&&L.minFilter!==Xn}function M(L,C){return L.generateMipmaps&&C&&L.minFilter!==un&&L.minFilter!==Xn}function v(L){i.generateMipmap(L)}function E(L,C,Q,ue,be=!1){if(o===!1)return C;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=C;if(C===i.RED&&(Q===i.FLOAT&&(_e=i.R32F),Q===i.HALF_FLOAT&&(_e=i.R16F),Q===i.UNSIGNED_BYTE&&(_e=i.R8)),C===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(_e=i.R8UI),Q===i.UNSIGNED_SHORT&&(_e=i.R16UI),Q===i.UNSIGNED_INT&&(_e=i.R32UI),Q===i.BYTE&&(_e=i.R8I),Q===i.SHORT&&(_e=i.R16I),Q===i.INT&&(_e=i.R32I)),C===i.RG&&(Q===i.FLOAT&&(_e=i.RG32F),Q===i.HALF_FLOAT&&(_e=i.RG16F),Q===i.UNSIGNED_BYTE&&(_e=i.RG8)),C===i.RGBA){let $e=be?Oa:Lt.getTransfer(ue);Q===i.FLOAT&&(_e=i.RGBA32F),Q===i.HALF_FLOAT&&(_e=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(_e=$e===Bt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function D(L,C,Q){return M(L,Q)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==Xn?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function P(L){return L===un||L===kc||L===Fo?i.NEAREST:i.LINEAR}function R(L){let C=L.target;C.removeEventListener("dispose",R),T(C),C.isVideoTexture&&u.delete(C)}function F(L){let C=L.target;C.removeEventListener("dispose",F),U(C)}function T(L){let C=n.get(L);if(C.__webglInit===void 0)return;let Q=L.source,ue=p.get(Q);if(ue){let be=ue[C.__cacheKey];be.usedTimes--,be.usedTimes===0&&y(L),Object.keys(ue).length===0&&p.delete(Q)}n.remove(L)}function y(L){let C=n.get(L);i.deleteTexture(C.__webglTexture);let Q=L.source,ue=p.get(Q);delete ue[C.__cacheKey],a.memory.textures--}function U(L){let C=L.texture,Q=n.get(L),ue=n.get(C);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(Q.__webglFramebuffer[be]))for(let _e=0;_e<Q.__webglFramebuffer[be].length;_e++)i.deleteFramebuffer(Q.__webglFramebuffer[be][_e]);else i.deleteFramebuffer(Q.__webglFramebuffer[be]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[be])}else{if(Array.isArray(Q.__webglFramebuffer))for(let be=0;be<Q.__webglFramebuffer.length;be++)i.deleteFramebuffer(Q.__webglFramebuffer[be]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let be=0;be<Q.__webglColorRenderbuffer.length;be++)Q.__webglColorRenderbuffer[be]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[be]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let be=0,_e=C.length;be<_e;be++){let $e=n.get(C[be]);$e.__webglTexture&&(i.deleteTexture($e.__webglTexture),a.memory.textures--),n.remove(C[be])}n.remove(C),n.remove(L)}let V=0;function ce(){V=0}function O(){let L=V;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),V+=1,L}function w(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function W(L,C){let Q=n.get(L);if(L.isVideoTexture&&Be(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){let ue=L.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Q,L,C);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+C)}function j(L,C){let Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ee(Q,L,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+C)}function N(L,C){let Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ee(Q,L,C);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+C)}function ee(L,C){let Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ke(Q,L,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+C)}let Me={[Cr]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},ge={[un]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[Fo]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[Xd]:i.LINEAR_MIPMAP_NEAREST,[Pr]:i.LINEAR_MIPMAP_LINEAR},Pe={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[wu]:i.LEQUAL,[af]:i.EQUAL,[cf]:i.GEQUAL,[of]:i.GREATER,[lf]:i.NOTEQUAL};function le(L,C,Q){if(Q?(i.texParameteri(L,i.TEXTURE_WRAP_S,Me[C.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Me[C.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Me[C.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ge[C.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ge[C.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==ti||C.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,P(C.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,P(C.minFilter)),C.minFilter!==un&&C.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Pe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ue=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===un||C.minFilter!==Fo&&C.minFilter!==Pr||C.type===Oi&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===ni&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(i.texParameterf(L,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function xe(L,C){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",R));let ue=C.source,be=p.get(ue);be===void 0&&(be={},p.set(ue,be));let _e=w(C);if(_e!==L.__cacheKey){be[_e]===void 0&&(be[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),be[_e].usedTimes++;let $e=be[L.__cacheKey];$e!==void 0&&(be[L.__cacheKey].usedTimes--,$e.usedTimes===0&&y(C)),L.__cacheKey=_e,L.__webglTexture=be[_e].texture}return Q}function Ee(L,C,Q){let ue=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ue=i.TEXTURE_3D);let be=xe(L,C),_e=C.source;t.bindTexture(ue,L.__webglTexture,i.TEXTURE0+Q);let $e=n.get(_e);if(_e.version!==$e.__version||be===!0){t.activeTexture(i.TEXTURE0+Q);let Ie=Lt.getPrimaries(Lt.workingColorSpace),Xe=C.colorSpace===qn?null:Lt.getPrimaries(C.colorSpace),Qe=C.colorSpace===qn||Ie===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let pt=m(C)&&g(C.image)===!1,me=_(C.image,pt,!1,s.maxTextureSize);me=Ce(C,me);let ot=g(me)||o,mt=r.convert(C.format,C.colorSpace),lt=r.convert(C.type),et=E(C.internalFormat,mt,lt,C.colorSpace,C.isVideoTexture);le(ue,C,ot);let Je,ht=C.mipmaps,Mt=o&&C.isVideoTexture!==!0&&et!==Mu,Ct=$e.__version===void 0||be===!0,ct=D(C,me,ot);if(C.isDepthTexture)et=i.DEPTH_COMPONENT,o?C.type===Oi?et=i.DEPTH_COMPONENT32F:C.type===Ni?et=i.DEPTH_COMPONENT24:C.type===cs?et=i.DEPTH24_STENCIL8:et=i.DEPTH_COMPONENT16:C.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===hs&&et===i.DEPTH_COMPONENT&&C.type!==_c&&C.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ni,lt=r.convert(C.type)),C.format===Zs&&et===i.DEPTH_COMPONENT&&(et=i.DEPTH_STENCIL,C.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=cs,lt=r.convert(C.type))),Ct&&(Mt?t.texStorage2D(i.TEXTURE_2D,1,et,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,et,me.width,me.height,0,mt,lt,null));else if(C.isDataTexture)if(ht.length>0&&ot){Mt&&Ct&&t.texStorage2D(i.TEXTURE_2D,ct,et,ht[0].width,ht[0].height);for(let Ae=0,q=ht.length;Ae<q;Ae++)Je=ht[Ae],Mt?t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Je.width,Je.height,mt,lt,Je.data):t.texImage2D(i.TEXTURE_2D,Ae,et,Je.width,Je.height,0,mt,lt,Je.data);C.generateMipmaps=!1}else Mt?(Ct&&t.texStorage2D(i.TEXTURE_2D,ct,et,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,mt,lt,me.data)):t.texImage2D(i.TEXTURE_2D,0,et,me.width,me.height,0,mt,lt,me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Mt&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,et,ht[0].width,ht[0].height,me.depth);for(let Ae=0,q=ht.length;Ae<q;Ae++)Je=ht[Ae],C.format!==On?mt!==null?Mt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,Je.width,Je.height,me.depth,mt,Je.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ae,et,Je.width,Je.height,me.depth,0,Je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,Je.width,Je.height,me.depth,mt,lt,Je.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ae,et,Je.width,Je.height,me.depth,0,mt,lt,Je.data)}else{Mt&&Ct&&t.texStorage2D(i.TEXTURE_2D,ct,et,ht[0].width,ht[0].height);for(let Ae=0,q=ht.length;Ae<q;Ae++)Je=ht[Ae],C.format!==On?mt!==null?Mt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ae,0,0,Je.width,Je.height,mt,Je.data):t.compressedTexImage2D(i.TEXTURE_2D,Ae,et,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Je.width,Je.height,mt,lt,Je.data):t.texImage2D(i.TEXTURE_2D,Ae,et,Je.width,Je.height,0,mt,lt,Je.data)}else if(C.isDataArrayTexture)Mt?(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,et,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,mt,lt,me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,me.width,me.height,me.depth,0,mt,lt,me.data);else if(C.isData3DTexture)Mt?(Ct&&t.texStorage3D(i.TEXTURE_3D,ct,et,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,mt,lt,me.data)):t.texImage3D(i.TEXTURE_3D,0,et,me.width,me.height,me.depth,0,mt,lt,me.data);else if(C.isFramebufferTexture){if(Ct)if(Mt)t.texStorage2D(i.TEXTURE_2D,ct,et,me.width,me.height);else{let Ae=me.width,q=me.height;for(let ke=0;ke<ct;ke++)t.texImage2D(i.TEXTURE_2D,ke,et,Ae,q,0,mt,lt,null),Ae>>=1,q>>=1}}else if(ht.length>0&&ot){Mt&&Ct&&t.texStorage2D(i.TEXTURE_2D,ct,et,ht[0].width,ht[0].height);for(let Ae=0,q=ht.length;Ae<q;Ae++)Je=ht[Ae],Mt?t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,mt,lt,Je):t.texImage2D(i.TEXTURE_2D,Ae,et,mt,lt,Je);C.generateMipmaps=!1}else Mt?(Ct&&t.texStorage2D(i.TEXTURE_2D,ct,et,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,lt,me)):t.texImage2D(i.TEXTURE_2D,0,et,mt,lt,me);M(C,ot)&&v(ue),$e.__version=_e.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Ke(L,C,Q){if(C.image.length!==6)return;let ue=xe(L,C),be=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Q);let _e=n.get(be);if(be.version!==_e.__version||ue===!0){t.activeTexture(i.TEXTURE0+Q);let $e=Lt.getPrimaries(Lt.workingColorSpace),Ie=C.colorSpace===qn?null:Lt.getPrimaries(C.colorSpace),Xe=C.colorSpace===qn||$e===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Qe=C.isCompressedTexture||C.image[0].isCompressedTexture,pt=C.image[0]&&C.image[0].isDataTexture,me=[];for(let Ae=0;Ae<6;Ae++)!Qe&&!pt?me[Ae]=_(C.image[Ae],!1,!0,s.maxCubemapSize):me[Ae]=pt?C.image[Ae].image:C.image[Ae],me[Ae]=Ce(C,me[Ae]);let ot=me[0],mt=g(ot)||o,lt=r.convert(C.format,C.colorSpace),et=r.convert(C.type),Je=E(C.internalFormat,lt,et,C.colorSpace),ht=o&&C.isVideoTexture!==!0,Mt=_e.__version===void 0||ue===!0,Ct=D(C,ot,mt);le(i.TEXTURE_CUBE_MAP,C,mt);let ct;if(Qe){ht&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Je,ot.width,ot.height);for(let Ae=0;Ae<6;Ae++){ct=me[Ae].mipmaps;for(let q=0;q<ct.length;q++){let ke=ct[q];C.format!==On?lt!==null?ht?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q,0,0,ke.width,ke.height,lt,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q,0,0,ke.width,ke.height,lt,et,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q,Je,ke.width,ke.height,0,lt,et,ke.data)}}}else{ct=C.mipmaps,ht&&Mt&&(ct.length>0&&Ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Je,me[0].width,me[0].height));for(let Ae=0;Ae<6;Ae++)if(pt){ht?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,me[Ae].width,me[Ae].height,lt,et,me[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Je,me[Ae].width,me[Ae].height,0,lt,et,me[Ae].data);for(let q=0;q<ct.length;q++){let Ue=ct[q].image[Ae].image;ht?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q+1,0,0,Ue.width,Ue.height,lt,et,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q+1,Je,Ue.width,Ue.height,0,lt,et,Ue.data)}}else{ht?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,lt,et,me[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Je,lt,et,me[Ae]);for(let q=0;q<ct.length;q++){let ke=ct[q];ht?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q+1,0,0,lt,et,ke.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,q+1,Je,lt,et,ke.image[Ae])}}}M(C,mt)&&v(i.TEXTURE_CUBE_MAP),_e.__version=be.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Fe(L,C,Q,ue,be,_e){let $e=r.convert(Q.format,Q.colorSpace),Ie=r.convert(Q.type),Xe=E(Q.internalFormat,$e,Ie,Q.colorSpace);if(!n.get(C).__hasExternalTextures){let pt=Math.max(1,C.width>>_e),me=Math.max(1,C.height>>_e);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,_e,Xe,pt,me,C.depth,0,$e,Ie,null):t.texImage2D(be,_e,Xe,pt,me,0,$e,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),he(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,be,n.get(Q).__webglTexture,0,Se(C)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,be,n.get(Q).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(L,C,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),C.depthBuffer&&!C.stencilBuffer){let ue=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||he(C)){let be=C.depthTexture;be&&be.isDepthTexture&&(be.type===Oi?ue=i.DEPTH_COMPONENT32F:be.type===Ni&&(ue=i.DEPTH_COMPONENT24));let _e=Se(C);he(C)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ue,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ue,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(C.depthBuffer&&C.stencilBuffer){let ue=Se(C);Q&&he(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,C.width,C.height):he(C)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{let ue=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let be=0;be<ue.length;be++){let _e=ue[be],$e=r.convert(_e.format,_e.colorSpace),Ie=r.convert(_e.type),Xe=E(_e.internalFormat,$e,Ie,_e.colorSpace),Qe=Se(C);Q&&he(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Xe,C.width,C.height):he(C)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Xe,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);let ue=n.get(C.depthTexture).__webglTexture,be=Se(C);if(C.depthTexture.format===hs)he(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(C.depthTexture.format===Zs)he(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function We(L){let C=n.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Oe(C.__webglFramebuffer,L)}else if(Q){C.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ue]),C.__webglDepthbuffer[ue]=i.createRenderbuffer(),Ze(C.__webglDepthbuffer[ue],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),Ze(C.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(L,C,Q){let ue=n.get(L);C!==void 0&&Fe(ue.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&We(L)}function B(L){let C=L.texture,Q=n.get(L),ue=n.get(C);L.addEventListener("dispose",F),L.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=C.version,a.memory.textures++);let be=L.isWebGLCubeRenderTarget===!0,_e=L.isWebGLMultipleRenderTargets===!0,$e=g(L)||o;if(be){Q.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(o&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Ie]=[];for(let Xe=0;Xe<C.mipmaps.length;Xe++)Q.__webglFramebuffer[Ie][Xe]=i.createFramebuffer()}else Q.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ie=0;Ie<C.mipmaps.length;Ie++)Q.__webglFramebuffer[Ie]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(_e)if(s.drawBuffers){let Ie=L.texture;for(let Xe=0,Qe=Ie.length;Xe<Qe;Xe++){let pt=n.get(Ie[Xe]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&he(L)===!1){let Ie=_e?C:[C];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Xe=0;Xe<Ie.length;Xe++){let Qe=Ie[Xe];Q.__webglColorRenderbuffer[Xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Xe]);let pt=r.convert(Qe.format,Qe.colorSpace),me=r.convert(Qe.type),ot=E(Qe.internalFormat,pt,me,Qe.colorSpace,L.isXRRenderTarget===!0),mt=Se(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,ot,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),le(i.TEXTURE_CUBE_MAP,C,$e);for(let Ie=0;Ie<6;Ie++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let Xe=0;Xe<C.mipmaps.length;Xe++)Fe(Q.__webglFramebuffer[Ie][Xe],L,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Xe);else Fe(Q.__webglFramebuffer[Ie],L,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);M(C,$e)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){let Ie=L.texture;for(let Xe=0,Qe=Ie.length;Xe<Qe;Xe++){let pt=Ie[Xe],me=n.get(pt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),le(i.TEXTURE_2D,pt,$e),Fe(Q.__webglFramebuffer,L,pt,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,0),M(pt,$e)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Ie=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,ue.__webglTexture),le(Ie,C,$e),o&&C.mipmaps&&C.mipmaps.length>0)for(let Xe=0;Xe<C.mipmaps.length;Xe++)Fe(Q.__webglFramebuffer[Xe],L,C,i.COLOR_ATTACHMENT0,Ie,Xe);else Fe(Q.__webglFramebuffer,L,C,i.COLOR_ATTACHMENT0,Ie,0);M(C,$e)&&v(Ie),t.unbindTexture()}L.depthBuffer&&We(L)}function Re(L){let C=g(L)||o,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ue=0,be=Q.length;ue<be;ue++){let _e=Q[ue];if(M(_e,C)){let $e=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(_e).__webglTexture;t.bindTexture($e,Ie),v($e),t.unbindTexture()}}}function de(L){if(o&&L.samples>0&&he(L)===!1){let C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Q=L.width,ue=L.height,be=i.COLOR_BUFFER_BIT,_e=[],$e=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(L),Xe=L.isWebGLMultipleRenderTargets===!0;if(Xe)for(let Qe=0;Qe<C.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Qe=0;Qe<C.length;Qe++){_e.push(i.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&_e.push($e);let pt=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(pt===!1&&(L.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Qe]),pt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[$e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[$e])),Xe){let me=n.get(C[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,Q,ue,0,0,Q,ue,be,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Xe)for(let Qe=0;Qe<C.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Qe]);let pt=n.get(C[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,pt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Se(L){return Math.min(s.maxSamples,L.samples)}function he(L){let C=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Be(L){let C=a.render.frame;u.get(L)!==C&&(u.set(L,C),L.update())}function Ce(L,C){let Q=L.colorSpace,ue=L.format,be=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Rl||Q!==Si&&Q!==qn&&(Lt.getTransfer(Q)===Bt?o===!1?e.has("EXT_sRGB")===!0&&ue===On?(L.format=Rl,L.minFilter=Xn,L.generateMipmaps=!1):C=Va.sRGBToLinear(C):(ue!==On||be!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}this.allocateTextureUnit=O,this.resetTextureUnits=ce,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=N,this.setTextureCube=ee,this.rebindTextures=Le,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=he}function Qg(i,e,t){let n=t.isWebGL2;function s(r,a=qn){let o,l=Lt.getTransfer(a);if(r===Fi)return i.UNSIGNED_BYTE;if(r===gu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===xu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===qd)return i.BYTE;if(r===Yd)return i.SHORT;if(r===_c)return i.UNSIGNED_SHORT;if(r===mu)return i.INT;if(r===Ni)return i.UNSIGNED_INT;if(r===Oi)return i.FLOAT;if(r===ni)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Zd)return i.ALPHA;if(r===On)return i.RGBA;if(r===Jd)return i.LUMINANCE;if(r===$d)return i.LUMINANCE_ALPHA;if(r===hs)return i.DEPTH_COMPONENT;if(r===Zs)return i.DEPTH_STENCIL;if(r===Rl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Kd)return i.RED;if(r===yu)return i.RED_INTEGER;if(r===jd)return i.RG;if(r===_u)return i.RG_INTEGER;if(r===vu)return i.RGBA_INTEGER;if(r===Bo||r===Ho||r===Go||r===Vo)if(l===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fc||r===Bc||r===Hc||r===Gc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vc||r===Wc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Vc)return l===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Wc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xc||r===qc||r===Yc||r===Zc||r===Jc||r===$c||r===Kc||r===jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$c)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qc)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wo||r===rh||r===ah)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Wo)return l===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qd||r===oh||r===lh||r===ch)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Gl=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},St=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ex={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vl=class extends Gi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,x=null,_=t.getContextAttributes(),g=null,m=null,M=[],v=[],E=new Te,D=null,P=new dn;P.layers.enable(1),P.viewport=new Zt;let R=new dn;R.layers.enable(2),R.viewport=new Zt;let F=[P,R],T=new Gl;T.layers.enable(1),T.layers.enable(2);let y=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let xe=M[le];return xe===void 0&&(xe=new Tr,M[le]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(le){let xe=M[le];return xe===void 0&&(xe=new Tr,M[le]=xe),xe.getGripSpace()},this.getHand=function(le){let xe=M[le];return xe===void 0&&(xe=new Tr,M[le]=xe),xe.getHandSpace()};function V(le){let xe=v.indexOf(le.inputSource);if(xe===-1)return;let Ee=M[xe];Ee!==void 0&&(Ee.update(le.inputSource,le.frame,c||a),Ee.dispatchEvent({type:le.type,data:le.inputSource}))}function ce(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",O);for(let le=0;le<M.length;le++){let xe=v[le];xe!==null&&(v[le]=null,M[le].disconnect(xe))}y=null,U=null,e.setRenderTarget(g),f=null,p=null,d=null,s=null,m=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let xe={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Cn(f.framebufferWidth,f.framebufferHeight,{format:On,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let xe=null,Ee=null,Ke=null;_.depth&&(Ke=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=_.stencil?Zs:hs,Ee=_.stencil?cs:Ni);let Fe={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Fe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Cn(p.textureWidth,p.textureHeight,{format:On,type:Fi,depthTexture:new ja(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ze=e.properties.get(m);Ze.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(le){for(let xe=0;xe<le.removed.length;xe++){let Ee=le.removed[xe],Ke=v.indexOf(Ee);Ke>=0&&(v[Ke]=null,M[Ke].disconnect(Ee))}for(let xe=0;xe<le.added.length;xe++){let Ee=le.added[xe],Ke=v.indexOf(Ee);if(Ke===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=v.length){v.push(Ee),Ke=Ze;break}else if(v[Ze]===null){v[Ze]=Ee,Ke=Ze;break}if(Ke===-1)break}let Fe=M[Ke];Fe&&Fe.connect(Ee)}}let w=new H,W=new H;function j(le,xe,Ee){w.setFromMatrixPosition(xe.matrixWorld),W.setFromMatrixPosition(Ee.matrixWorld);let Ke=w.distanceTo(W),Fe=xe.projectionMatrix.elements,Ze=Ee.projectionMatrix.elements,Oe=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),Le=(Fe[9]+1)/Fe[5],B=(Fe[9]-1)/Fe[5],Re=(Fe[8]-1)/Fe[0],de=(Ze[8]+1)/Ze[0],Se=Oe*Re,he=Oe*de,Be=Ke/(-Re+de),Ce=Be*-Re;xe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ce),le.translateZ(Be),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();let L=Oe+Be,C=We+Be,Q=Se-Ce,ue=he+(Ke-Ce),be=Le*We/C*L,_e=B*We/C*L;le.projectionMatrix.makePerspective(Q,ue,be,_e,L,C),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}function N(le,xe){xe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(xe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;T.near=R.near=P.near=le.near,T.far=R.far=P.far=le.far,(y!==T.near||U!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),y=T.near,U=T.far);let xe=le.parent,Ee=T.cameras;N(T,xe);for(let Ke=0;Ke<Ee.length;Ke++)N(Ee[Ke],xe);Ee.length===2?j(T,P,R):T.projectionMatrix.copy(P.projectionMatrix),ee(le,T,xe)};function ee(le,xe,Ee){Ee===null?le.matrix.copy(xe.matrixWorld):(le.matrix.copy(Ee.matrixWorld),le.matrix.invert(),le.matrix.multiply(xe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Ha*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(le){l=le,p!==null&&(p.fixedFoveation=le),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=le)};let Me=null;function ge(le,xe){if(u=xe.getViewerPose(c||a),x=xe,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Ke=!1;Ee.length!==T.cameras.length&&(T.cameras.length=0,Ke=!0);for(let Fe=0;Fe<Ee.length;Fe++){let Ze=Ee[Fe],Oe=null;if(f!==null)Oe=f.getViewport(Ze);else{let Le=d.getViewSubImage(p,Ze);Oe=Le.viewport,Fe===0&&(e.setRenderTargetTextures(m,Le.colorTexture,p.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(m))}let We=F[Fe];We===void 0&&(We=new dn,We.layers.enable(Fe),We.viewport=new Zt,F[Fe]=We),We.matrix.fromArray(Ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Fe===0&&(T.matrix.copy(We.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ke===!0&&T.cameras.push(We)}}for(let Ee=0;Ee<M.length;Ee++){let Ke=v[Ee],Fe=M[Ee];Ke!==null&&Fe!==void 0&&Fe.update(Ke,xe,c||a)}Me&&Me(le,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),x=null}let Pe=new Au;Pe.setAnimationLoop(ge),this.setAnimationLoop=function(le){Me=le},this.dispose=function(){}}};function tx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Tu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&f(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let E=v.program;n.uniformBlockBinding(M,E)}function c(M,v){let E=s[M.id];E===void 0&&(x(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",g));let D=v.program;n.updateUBOMapping(M,D);let P=e.render.frame;r[M.id]!==P&&(p(M),r[M.id]=P)}function u(M){let v=d();M.__bindingPointIndex=v;let E=i.createBuffer(),D=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let v=s[M.id],E=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,R=E.length;P<R;P++){let F=Array.isArray(E[P])?E[P]:[E[P]];for(let T=0,y=F.length;T<y;T++){let U=F[T];if(f(U,P,T,D)===!0){let V=U.__offset,ce=Array.isArray(U.value)?U.value:[U.value],O=0;for(let w=0;w<ce.length;w++){let W=ce[w],j=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+O,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,E,D){let P=M.value,R=v+"_"+E;if(D[R]===void 0)return typeof P=="number"||typeof P=="boolean"?D[R]=P:D[R]=P.clone(),!0;{let F=D[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return D[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function x(M){let v=M.uniforms,E=0,D=16;for(let R=0,F=v.length;R<F;R++){let T=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,U=T.length;y<U;y++){let V=T[y],ce=Array.isArray(V.value)?V.value:[V.value];for(let O=0,w=ce.length;O<w;O++){let W=ce[O],j=_(W),N=E%D;N!==0&&D-N<j.boundary&&(E+=D-N),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=j.storage}}}let P=E%D;return P>0&&(E+=D-P),M.__size=E,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ds=class{constructor(e={}){let{canvas:t=df(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),x=new Int32Array(4),_=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;let v=this,E=!1,D=0,P=0,R=null,F=-1,T=null,y=new Zt,U=new Zt,V=null,ce=new it(0),O=0,w=t.width,W=t.height,j=1,N=null,ee=null,Me=new Zt(0,0,w,W),ge=new Zt(0,0,w,W),Pe=!1,le=new Ir,xe=!1,Ee=!1,Ke=null,Fe=new Pt,Ze=new Te,Oe=new H,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return R===null?j:1}let B=n;function Re(A,Z){for(let se=0;se<A.length;se++){let te=A[se],S=t.getContext(te,Z);if(S!==null)return S}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ke,!1),B===null){let Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),B=Re(Z,A),B===null)throw Re(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let de,Se,he,Be,Ce,L,C,Q,ue,be,_e,$e,Ie,Xe,Qe,pt,me,ot,mt,lt,et,Je,ht,Mt;function Ct(){de=new Mm(B),Se=new mm(B,de,e),de.init(Se),Je=new Qg(B,de,Se),he=new Kg(B,de,Se),Be=new Sm(B),Ce=new Fg,L=new jg(B,de,he,Ce,Se,Je,Be),C=new xm(v),Q=new vm(v),ue=new Lf(B,Se),ht=new fm(B,de,ue,Se),be=new bm(B,ue,Be,ht),_e=new Rm(B,be,ue,Be),mt=new Am(B,Se,L),pt=new gm(Ce),$e=new kg(v,C,Q,de,Se,ht,pt),Ie=new tx(v,Ce),Xe=new Hg,Qe=new Yg(de,Se),ot=new dm(v,C,Q,he,_e,p,l),me=new $g(v,_e,Se),Mt=new nx(B,Be,Se,he),lt=new pm(B,de,Be,Se),et=new wm(B,de,Be,Se),Be.programs=$e.programs,v.capabilities=Se,v.extensions=de,v.properties=Ce,v.renderLists=Xe,v.shadowMap=me,v.state=he,v.info=Be}Ct();let ct=new Vl(v,B);this.xr=ct,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(w,W,!1))},this.getSize=function(A){return A.set(w,W)},this.setSize=function(A,Z,se=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=A,W=Z,t.width=Math.floor(A*j),t.height=Math.floor(Z*j),se===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(w*j,W*j).floor()},this.setDrawingBufferSize=function(A,Z,se){w=A,W=Z,j=se,t.width=Math.floor(A*se),t.height=Math.floor(Z*se),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,Z,se,te){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,Z,se,te),he.viewport(y.copy(Me).multiplyScalar(j).floor())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,Z,se,te){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,Z,se,te),he.scissor(U.copy(ge).multiplyScalar(j).floor())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){he.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(A=!0,Z=!0,se=!0){let te=0;if(A){let S=!1;if(R!==null){let G=R.texture.format;S=G===vu||G===_u||G===yu}if(S){let G=R.texture.type,J=G===Fi||G===Ni||G===_c||G===cs||G===gu||G===xu,re=ot.getClearColor(),fe=ot.getClearAlpha(),ae=re.r,ve=re.g,De=re.b;J?(f[0]=ae,f[1]=ve,f[2]=De,f[3]=fe,B.clearBufferuiv(B.COLOR,0,f)):(x[0]=ae,x[1]=ve,x[2]=De,x[3]=fe,B.clearBufferiv(B.COLOR,0,x))}else te|=B.COLOR_BUFFER_BIT}Z&&(te|=B.DEPTH_BUFFER_BIT),se&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Xe.dispose(),Qe.dispose(),Ce.dispose(),C.dispose(),Q.dispose(),_e.dispose(),ht.dispose(),Mt.dispose(),$e.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",xt),ct.removeEventListener("sessionend",At),Ke&&(Ke.dispose(),Ke=null),Ne.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=Be.autoReset,Z=me.enabled,se=me.autoUpdate,te=me.needsUpdate,S=me.type;Ct(),Be.autoReset=A,me.enabled=Z,me.autoUpdate=se,me.needsUpdate=te,me.type=S}function ke(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){let Z=A.target;Z.removeEventListener("dispose",Ue),je(Z)}function je(A){tt(A),Ce.remove(A)}function tt(A){let Z=Ce.get(A).programs;Z!==void 0&&(Z.forEach(function(se){$e.releaseProgram(se)}),A.isShaderMaterial&&$e.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,se,te,S,G){Z===null&&(Z=We);let J=S.isMesh&&S.matrixWorld.determinant()<0,re=dt(A,Z,se,te,S);he.setMaterial(te,J);let fe=se.index,ae=1;if(te.wireframe===!0){if(fe=be.getWireframeAttribute(se),fe===void 0)return;ae=2}let ve=se.drawRange,De=se.attributes.position,rt=ve.start*ae,bt=(ve.start+ve.count)*ae;G!==null&&(rt=Math.max(rt,G.start*ae),bt=Math.min(bt,(G.start+G.count)*ae)),fe!==null?(rt=Math.max(rt,0),bt=Math.min(bt,fe.count)):De!=null&&(rt=Math.max(rt,0),bt=Math.min(bt,De.count));let yt=bt-rt;if(yt<0||yt===1/0)return;ht.setup(S,te,re,se,fe);let h,I=lt;if(fe!==null&&(h=ue.get(fe),I=et,I.setIndex(h)),S.isMesh)te.wireframe===!0?(he.setLineWidth(te.wireframeLinewidth*Le()),I.setMode(B.LINES)):I.setMode(B.TRIANGLES);else if(S.isLine){let b=te.linewidth;b===void 0&&(b=1),he.setLineWidth(b*Le()),S.isLineSegments?I.setMode(B.LINES):S.isLineLoop?I.setMode(B.LINE_LOOP):I.setMode(B.LINE_STRIP)}else S.isPoints?I.setMode(B.POINTS):S.isSprite&&I.setMode(B.TRIANGLES);if(S.isBatchedMesh)I.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else if(S.isInstancedMesh)I.renderInstances(rt,yt,S.count);else if(se.isInstancedBufferGeometry){let b=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,z=Math.min(se.instanceCount,b);I.renderInstances(rt,yt,z)}else I.render(rt,yt)};function Tt(A,Z,se){A.transparent===!0&&A.side===en&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,ne(A,Z,se),A.side=Hi,A.needsUpdate=!0,ne(A,Z,se),A.side=en):ne(A,Z,se)}this.compile=function(A,Z,se=null){se===null&&(se=A),g=Qe.get(se),g.init(),M.push(g),se.traverseVisible(function(S){S.isLight&&S.layers.test(Z.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),A!==se&&A.traverseVisible(function(S){S.isLight&&S.layers.test(Z.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),g.setupLights(v._useLegacyLights);let te=new Set;return A.traverse(function(S){let G=S.material;if(G)if(Array.isArray(G))for(let J=0;J<G.length;J++){let re=G[J];Tt(re,se,S),te.add(re)}else Tt(G,se,S),te.add(G)}),M.pop(),g=null,te},this.compileAsync=function(A,Z,se=null){let te=this.compile(A,Z,se);return new Promise(S=>{function G(){if(te.forEach(function(J){Ce.get(J).currentProgram.isReady()&&te.delete(J)}),te.size===0){S(A);return}setTimeout(G,10)}de.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let gt=null;function ut(A){gt&&gt(A)}function xt(){Ne.stop()}function At(){Ne.start()}let Ne=new Au;Ne.setAnimationLoop(ut),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){gt=A,ct.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},ct.addEventListener("sessionstart",xt),ct.addEventListener("sessionend",At),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,Z,R),g=Qe.get(A,M.length),g.init(),M.push(g),Fe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),le.setFromProjectionMatrix(Fe),Ee=this.localClippingEnabled,xe=pt.init(this.clippingPlanes,Ee),_=Xe.get(A,m.length),_.init(),m.push(_),Wt(A,Z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,ee),this.info.render.frame++,xe===!0&&pt.beginShadows();let se=g.state.shadowsArray;if(me.render(se,A,Z),xe===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(_,A),g.setupLights(v._useLegacyLights),Z.isArrayCamera){let te=Z.cameras;for(let S=0,G=te.length;S<G;S++){let J=te[S];Ft(_,A,J,J.viewport)}}else Ft(_,A,Z);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,Z),ht.resetDefaultState(),F=-1,T=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Wt(A,Z,se,te){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){te&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);let J=_e.update(A),re=A.material;re.visible&&_.push(A,J,re,se,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){let J=_e.update(A),re=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Oe.copy(J.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)),Array.isArray(re)){let fe=J.groups;for(let ae=0,ve=fe.length;ae<ve;ae++){let De=fe[ae],rt=re[De.materialIndex];rt&&rt.visible&&_.push(A,J,rt,se,Oe.z,De)}}else re.visible&&_.push(A,J,re,se,Oe.z,null)}}let G=A.children;for(let J=0,re=G.length;J<re;J++)Wt(G[J],Z,se,te)}function Ft(A,Z,se,te){let S=A.opaque,G=A.transmissive,J=A.transparent;g.setupLightsView(se),xe===!0&&pt.setGlobalState(v.clippingPlanes,se),G.length>0&&Kt(S,G,Z,se),te&&he.viewport(y.copy(te)),S.length>0&&k(S,Z,se),G.length>0&&k(G,Z,se),J.length>0&&k(J,Z,se),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Kt(A,Z,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;let G=Se.isWebGL2;Ke===null&&(Ke=new Cn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?ni:Fi,minFilter:Pr,samples:G?4:0})),v.getDrawingBufferSize(Ze),G?Ke.setSize(Ze.x,Ze.y):Ke.setSize(Cl(Ze.x),Cl(Ze.y));let J=v.getRenderTarget();v.setRenderTarget(Ke),v.getClearColor(ce),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();let re=v.toneMapping;v.toneMapping=hi,k(A,se,te),L.updateMultisampleRenderTarget(Ke),L.updateRenderTargetMipmap(Ke);let fe=!1;for(let ae=0,ve=Z.length;ae<ve;ae++){let De=Z[ae],rt=De.object,bt=De.geometry,yt=De.material,h=De.group;if(yt.side===en&&rt.layers.test(te.layers)){let I=yt.side;yt.side=rn,yt.needsUpdate=!0,$(rt,se,te,bt,yt,h),yt.side=I,yt.needsUpdate=!0,fe=!0}}fe===!0&&(L.updateMultisampleRenderTarget(Ke),L.updateRenderTargetMipmap(Ke)),v.setRenderTarget(J),v.setClearColor(ce,O),v.toneMapping=re}function k(A,Z,se){let te=Z.isScene===!0?Z.overrideMaterial:null;for(let S=0,G=A.length;S<G;S++){let J=A[S],re=J.object,fe=J.geometry,ae=te===null?J.material:te,ve=J.group;re.layers.test(se.layers)&&$(re,Z,se,fe,ae,ve)}}function $(A,Z,se,te,S,G){A.onBeforeRender(v,Z,se,te,S,G),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),S.onBeforeRender(v,Z,se,te,A,G),S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,v.renderBufferDirect(se,Z,te,S,A,G),S.side=Hi,S.needsUpdate=!0,v.renderBufferDirect(se,Z,te,S,A,G),S.side=en):v.renderBufferDirect(se,Z,te,S,A,G),A.onAfterRender(v,Z,se,te,S,G)}function ne(A,Z,se){Z.isScene!==!0&&(Z=We);let te=Ce.get(A),S=g.state.lights,G=g.state.shadowsArray,J=S.state.version,re=$e.getParameters(A,S.state,G,Z,se),fe=$e.getProgramCacheKey(re),ae=te.programs;te.environment=A.isMeshStandardMaterial?Z.environment:null,te.fog=Z.fog,te.envMap=(A.isMeshStandardMaterial?Q:C).get(A.envMap||te.environment),ae===void 0&&(A.addEventListener("dispose",Ue),ae=new Map,te.programs=ae);let ve=ae.get(fe);if(ve!==void 0){if(te.currentProgram===ve&&te.lightsStateVersion===J)return nt(A,re),ve}else re.uniforms=$e.getUniforms(A),A.onBuild(se,re,v),A.onBeforeCompile(re,v),ve=$e.acquireProgram(re,fe),ae.set(fe,ve),te.uniforms=re.uniforms;let De=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=pt.uniform),nt(A,re),te.needsLights=He(A),te.lightsStateVersion=J,te.needsLights&&(De.ambientLightColor.value=S.state.ambient,De.lightProbe.value=S.state.probe,De.directionalLights.value=S.state.directional,De.directionalLightShadows.value=S.state.directionalShadow,De.spotLights.value=S.state.spot,De.spotLightShadows.value=S.state.spotShadow,De.rectAreaLights.value=S.state.rectArea,De.ltc_1.value=S.state.rectAreaLTC1,De.ltc_2.value=S.state.rectAreaLTC2,De.pointLights.value=S.state.point,De.pointLightShadows.value=S.state.pointShadow,De.hemisphereLights.value=S.state.hemi,De.directionalShadowMap.value=S.state.directionalShadowMap,De.directionalShadowMatrix.value=S.state.directionalShadowMatrix,De.spotShadowMap.value=S.state.spotShadowMap,De.spotLightMatrix.value=S.state.spotLightMatrix,De.spotLightMap.value=S.state.spotLightMap,De.pointShadowMap.value=S.state.pointShadowMap,De.pointShadowMatrix.value=S.state.pointShadowMatrix),te.currentProgram=ve,te.uniformsList=null,ve}function Ve(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=Xs.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function nt(A,Z){let se=Ce.get(A);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function dt(A,Z,se,te,S){Z.isScene!==!0&&(Z=We),L.resetTextureUnits();let G=Z.fog,J=te.isMeshStandardMaterial?Z.environment:null,re=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Si,fe=(te.isMeshStandardMaterial?Q:C).get(te.envMap||J),ae=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ve=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),De=!!se.morphAttributes.position,rt=!!se.morphAttributes.normal,bt=!!se.morphAttributes.color,yt=hi;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(yt=v.toneMapping);let h=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,I=h!==void 0?h.length:0,b=Ce.get(te),z=g.state.lights;if(xe===!0&&(Ee===!0||A!==T)){let Ye=A===T&&te.id===F;pt.setState(te,A,Ye)}let Y=!1;te.version===b.__version?(b.needsLights&&b.lightsStateVersion!==z.state.version||b.outputColorSpace!==re||S.isBatchedMesh&&b.batching===!1||!S.isBatchedMesh&&b.batching===!0||S.isInstancedMesh&&b.instancing===!1||!S.isInstancedMesh&&b.instancing===!0||S.isSkinnedMesh&&b.skinning===!1||!S.isSkinnedMesh&&b.skinning===!0||S.isInstancedMesh&&b.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&b.instancingColor===!1&&S.instanceColor!==null||b.envMap!==fe||te.fog===!0&&b.fog!==G||b.numClippingPlanes!==void 0&&(b.numClippingPlanes!==pt.numPlanes||b.numIntersection!==pt.numIntersection)||b.vertexAlphas!==ae||b.vertexTangents!==ve||b.morphTargets!==De||b.morphNormals!==rt||b.morphColors!==bt||b.toneMapping!==yt||Se.isWebGL2===!0&&b.morphTargetsCount!==I)&&(Y=!0):(Y=!0,b.__version=te.version);let X=b.currentProgram;Y===!0&&(X=ne(te,Z,S));let ie=!1,K=!1,pe=!1,ye=X.getUniforms(),we=b.uniforms;if(he.useProgram(X.program)&&(ie=!0,K=!0,pe=!0),te.id!==F&&(F=te.id,K=!0),ie||T!==A){ye.setValue(B,"projectionMatrix",A.projectionMatrix),ye.setValue(B,"viewMatrix",A.matrixWorldInverse);let Ye=ye.map.cameraPosition;Ye!==void 0&&Ye.setValue(B,Oe.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&ye.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ye.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,K=!0,pe=!0)}if(S.isSkinnedMesh){ye.setOptional(B,S,"bindMatrix"),ye.setOptional(B,S,"bindMatrixInverse");let Ye=S.skeleton;Ye&&(Se.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),ye.setValue(B,"boneTexture",Ye.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}S.isBatchedMesh&&(ye.setOptional(B,S,"batchingTexture"),ye.setValue(B,"batchingTexture",S._matricesTexture,L));let ft=se.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0&&Se.isWebGL2===!0)&&mt.update(S,se,X),(K||b.receiveShadow!==S.receiveShadow)&&(b.receiveShadow=S.receiveShadow,ye.setValue(B,"receiveShadow",S.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(we.envMap.value=fe,we.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),K&&(ye.setValue(B,"toneMappingExposure",v.toneMappingExposure),b.needsLights&&at(we,pe),G&&te.fog===!0&&Ie.refreshFogUniforms(we,G),Ie.refreshMaterialUniforms(we,te,j,W,Ke),Xs.upload(B,Ve(b),we,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Xs.upload(B,Ve(b),we,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ye.setValue(B,"center",S.center),ye.setValue(B,"modelViewMatrix",S.modelViewMatrix),ye.setValue(B,"normalMatrix",S.normalMatrix),ye.setValue(B,"modelMatrix",S.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Ye=te.uniformsGroups;for(let It=0,Ut=Ye.length;It<Ut;It++)if(Se.isWebGL2){let Xt=Ye[It];Mt.update(Xt,X),Mt.bind(Xt,X)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return X}function at(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function He(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,Z,se){Ce.get(A.texture).__webglTexture=Z,Ce.get(A.depthTexture).__webglTexture=se;let te=Ce.get(A);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=se===void 0,te.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Z){let se=Ce.get(A);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,se=0){R=A,D=Z,P=se;let te=!0,S=null,G=!1,J=!1;if(A){let fe=Ce.get(A);fe.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(B.FRAMEBUFFER,null),te=!1):fe.__webglFramebuffer===void 0?L.setupRenderTarget(A):fe.__hasExternalTextures&&L.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);let ae=A.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(J=!0);let ve=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ve[Z])?S=ve[Z][se]:S=ve[Z],G=!0):Se.isWebGL2&&A.samples>0&&L.useMultisampledRTT(A)===!1?S=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(ve)?S=ve[se]:S=ve,y.copy(A.viewport),U.copy(A.scissor),V=A.scissorTest}else y.copy(Me).multiplyScalar(j).floor(),U.copy(ge).multiplyScalar(j).floor(),V=Pe;if(he.bindFramebuffer(B.FRAMEBUFFER,S)&&Se.drawBuffers&&te&&he.drawBuffers(A,S),he.viewport(y),he.scissor(U),he.setScissorTest(V),G){let fe=Ce.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe.__webglTexture,se)}else if(J){let fe=Ce.get(A.texture),ae=Z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,fe.__webglTexture,se||0,ae)}F=-1},this.readRenderTargetPixels=function(A,Z,se,te,S,G,J){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&J!==void 0&&(re=re[J]),re){he.bindFramebuffer(B.FRAMEBUFFER,re);try{let fe=A.texture,ae=fe.format,ve=fe.type;if(ae!==On&&Je.convert(ae)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let De=ve===ni&&(de.has("EXT_color_buffer_half_float")||Se.isWebGL2&&de.has("EXT_color_buffer_float"));if(ve!==Fi&&Je.convert(ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ve===Oi&&(Se.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-te&&se>=0&&se<=A.height-S&&B.readPixels(Z,se,te,S,Je.convert(ae),Je.convert(ve),G)}finally{let fe=R!==null?Ce.get(R).__webglFramebuffer:null;he.bindFramebuffer(B.FRAMEBUFFER,fe)}}},this.copyFramebufferToTexture=function(A,Z,se=0){let te=Math.pow(2,-se),S=Math.floor(Z.image.width*te),G=Math.floor(Z.image.height*te);L.setTexture2D(Z,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,A.x,A.y,S,G),he.unbindTexture()},this.copyTextureToTexture=function(A,Z,se,te=0){let S=Z.image.width,G=Z.image.height,J=Je.convert(se.format),re=Je.convert(se.type);L.setTexture2D(se,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,se.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,te,A.x,A.y,S,G,J,re,Z.image.data):Z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,te,A.x,A.y,Z.mipmaps[0].width,Z.mipmaps[0].height,J,Z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,te,A.x,A.y,J,re,Z.image),te===0&&se.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,se,te,S=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let G=A.max.x-A.min.x+1,J=A.max.y-A.min.y+1,re=A.max.z-A.min.z+1,fe=Je.convert(te.format),ae=Je.convert(te.type),ve;if(te.isData3DTexture)L.setTexture3D(te,0),ve=B.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)L.setTexture2DArray(te,0),ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,te.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,te.unpackAlignment);let De=B.getParameter(B.UNPACK_ROW_LENGTH),rt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),bt=B.getParameter(B.UNPACK_SKIP_PIXELS),yt=B.getParameter(B.UNPACK_SKIP_ROWS),h=B.getParameter(B.UNPACK_SKIP_IMAGES),I=se.isCompressedTexture?se.mipmaps[S]:se.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,I.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,I.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),se.isDataTexture||se.isData3DTexture?B.texSubImage3D(ve,S,Z.x,Z.y,Z.z,G,J,re,fe,ae,I.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(ve,S,Z.x,Z.y,Z.z,G,J,re,fe,I.data)):B.texSubImage3D(ve,S,Z.x,Z.y,Z.z,G,J,re,fe,ae,I),B.pixelStorei(B.UNPACK_ROW_LENGTH,De),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,yt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,h),S===0&&te.generateMipmaps&&B.generateMipmap(ve),he.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){D=0,P=0,R=null,he.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vc?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===_o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yt?us:bu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===us?Yt:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Wl=class extends ds{};Wl.prototype.isWebGL1Renderer=!0;var Qa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new H,Lr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zi=class extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ns,_r=new H,Os=new H,ks=new H,Fs=new Te,vr=new Te,Du=new Pt,Sa=new H,Mr=new H,Ea=new H,Qh=new Te,gl=new Te,eu=new Te,fs=class extends tn{constructor(e=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eo(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Lr(n,3,0,!1)),Ns.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Du.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ta(Sa.set(-.5,-.5,0),ks,a,Os,s,r),Ta(Mr.set(.5,-.5,0),ks,a,Os,s,r),Ta(Ea.set(.5,.5,0),ks,a,Os,s,r),Qh.set(0,0),gl.set(1,0),eu.set(1,1);let o=e.ray.intersectTriangle(Sa,Mr,Ea,!1,_r);if(o===null&&(Ta(Mr.set(-.5,.5,0),ks,a,Os,s,r),gl.set(0,1),o=e.ray.intersectTriangle(Sa,Ea,Mr,!1,_r),o===null))return;let l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:ls.getInterpolation(_r,Sa,Mr,Ea,Qh,gl,eu,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ta(i,e,t,n,s,r){Fs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vr.x=r*Fs.x-s*Fs.y,vr.y=s*Fs.x+r*Fs.y):vr.copy(Fs),i.copy(e),i.x+=vr.x,i.y+=vr.y,i.applyMatrix4(Du)}var to=class extends kn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=un,u=un,d,p){super(null,a,o,l,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends an{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bs=new Pt,tu=new Pt,Aa=[],nu=new Ei,ix=new Pt,br=new ze,wr=new Vi,no=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),nu.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(nu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),wr.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),tu.multiplyMatrices(n,Bs),br.matrixWorld=tu,br.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ur=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},iu=new Pt,Xl=new qa,Ra=new Vi,Ca=new H,io=class extends tn{constructor(e=new Ot,t=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;iu.copy(s).invert(),Xl.copy(e.ray).applyMatrix4(iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=p,_=f;x<_;x++){let g=c.getX(x);Ca.fromBufferAttribute(d,g),su(Ca,g,l,s,e,t,this)}}else{let p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=p,_=f;x<_;x++)Ca.fromBufferAttribute(d,x),su(Ca,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function su(i,e,t,n,s,r,a){let o=Xl.distanceSqToPoint(i);if(o<t){let l=new H;Xl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Bn=class extends kn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Te:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,s=[],r=[],a=[],o=new H,l=new Pt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Sn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Sn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Te,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*d+this.aX,c=p*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ql=class extends zr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Pa=new H,xl=new bc,yl=new bc,_l=new bc,Yl=class extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Pa.subVectors(s[0],s[1]).add(s[0]),c=Pa);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),g=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),xl.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,x,_,g),yl.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,x,_,g),_l.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,x,_,g)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),yl.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),_l.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return n.set(xl.calc(l),yl.calc(l),_l.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ru(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function sx(i,e){let t=1-i;return t*t*e}function rx(i,e){return 2*(1-i)*i*e}function ax(i,e){return i*i*e}function Ar(i,e,t,n){return sx(i,e)+rx(i,t)+ax(i,n)}function ox(i,e){let t=1-i;return t*t*t*e}function lx(i,e){let t=1-i;return 3*t*t*i*e}function cx(i,e){return 3*(1-i)*i*i*e}function hx(i,e){return i*i*i*e}function Rr(i,e,t,n,s){return ox(i,e)+lx(i,t)+cx(i,n)+hx(i,s)}var so=class extends Zn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zl=class extends Zn{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y),Rr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends Zn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends Zn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Zn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,s.x,r.x,a.x),Ar(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$l=class extends Zn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,s.x,r.x,a.x),Ar(e,s.y,r.y,a.y),Ar(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(ru(o,l.x,c.x,u.x,d.x),ru(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:Yl,CubicBezierCurve:so,CubicBezierCurve3:Zl,EllipseCurve:zr,LineCurve:ro,LineCurve3:Jl,QuadraticBezierCurve:ao,QuadraticBezierCurve3:$l,SplineCurve:oo}),jl=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},lo=class extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ro(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ao(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new so(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new zr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ui=class i extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new H,u=new Te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xn=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],f=[],x=0,_=[],g=n/2,m=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(f,2));function M(){let E=new H,D=new H,P=0,R=(t-e)/n;for(let F=0;F<=r;F++){let T=[],y=F/r,U=y*(t-e)+e;for(let V=0;V<=s;V++){let ce=V/s,O=ce*l+o,w=Math.sin(O),W=Math.cos(O);D.x=U*w,D.y=-y*n+g,D.z=U*W,d.push(D.x,D.y,D.z),E.set(w,R,W).normalize(),p.push(E.x,E.y,E.z),f.push(ce,1-y),T.push(x++)}_.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){let y=_[T][F],U=_[T+1][F],V=_[T+1][F+1],ce=_[T][F+1];u.push(y,U,ce),u.push(U,V,ce),P+=6}c.addGroup(m,P,0),m+=P}function v(E){let D=x,P=new Te,R=new H,F=0,T=E===!0?e:t,y=E===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,g*y,0),p.push(0,y,0),f.push(.5,.5),x++;let U=x;for(let V=0;V<=s;V++){let O=V/s*l+o,w=Math.cos(O),W=Math.sin(O);R.x=T*W,R.y=g*y,R.z=T*w,d.push(R.x,R.y,R.z),p.push(0,y,0),P.x=w*.5+.5,P.y=W*.5*y+.5,f.push(P.x,P.y),x++}for(let V=0;V<s;V++){let ce=D+V,O=U+V;E===!0?u.push(O,O+1,ce):u.push(O+1,O,ce),F+=3}c.addGroup(m,F,E===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ln=class i extends xn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},co=class i extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new H,E=new H,D=new H;for(let P=0;P<t.length;P+=3)f(t[P+0],v),f(t[P+1],E),f(t[P+2],D),l(v,E,D,M)}function l(M,v,E,D){let P=D+1,R=[];for(let F=0;F<=P;F++){R[F]=[];let T=M.clone().lerp(E,F/P),y=v.clone().lerp(E,F/P),U=P-F;for(let V=0;V<=U;V++)V===0&&F===P?R[F][V]=T:R[F][V]=T.clone().lerp(y,V/U)}for(let F=0;F<P;F++)for(let T=0;T<2*(P-F)-1;T++){let y=Math.floor(T/2);T%2===0?(p(R[F][y+1]),p(R[F+1][y]),p(R[F][y])):(p(R[F][y+1]),p(R[F+1][y+1]),p(R[F+1][y]))}}function c(M){let v=new H;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(M),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function u(){let M=new H;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let E=g(M)/2/Math.PI+.5,D=m(M)/Math.PI+.5;a.push(E,1-D)}x(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],E=a[M+2],D=a[M+4],P=Math.max(v,E,D),R=Math.min(v,E,D);P>.9&&R<.1&&(v<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function f(M,v){let E=M*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function x(){let M=new H,v=new H,E=new H,D=new H,P=new Te,R=new Te,F=new Te;for(let T=0,y=0;T<r.length;T+=9,y+=6){M.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),P.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),F.set(a[y+4],a[y+5]),D.copy(M).add(v).add(E).divideScalar(3);let U=g(D);_(P,y+0,M,U),_(R,y+2,v,U),_(F,y+4,E,U)}}function _(M,v,E,D){D<0&&M.x===1&&(a[v]=M.x-1),E.x===0&&E.z===0&&(a[v]=D/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var di=class extends lo{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new lo().fromJSON(s))}return this}},ux={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Uu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,p,f;if(n&&(r=gx(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let x=t;x<s;x+=t)d=i[x],p=i[x+1],d<o&&(o=d),p<l&&(l=p),d>c&&(c=d),p>u&&(u=p);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Nr(r,a,t,o,l,f,0),a}};function Uu(i,e,t,n,s){let r,a;if(s===Ax(i,e,t,n)>0)for(r=e;r<t;r+=n)a=au(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=au(r,i[r],i[r+1],a);return a&&Mo(a,a.next)&&(kr(a),a=a.next),a}function ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Mo(t,t.next)||jt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Mx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?fx(i,n,s,r):dx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),kr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=px(ps(i),e,t),Nr(i,e,t,n,s,r,2)):a===2&&mx(i,e,t,n,s,r):Nr(ps(i),e,t,n,s,r,1);break}}}function dx(i){let e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=d&&x.y<=f&&Vs(s,o,r,l,a,c,x.x,x.y)&&jt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function fx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(jt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,p=a.y,f=o<l?o<c?o:c:l<c?l:c,x=u<d?u<p?u:p:d<p?d:p,_=o>l?o>c?o:c:l>c?l:c,g=u>d?u>p?u:p:d>p?d:p,m=Ql(f,x,e,t,n),M=Ql(_,g,e,t,n),v=i.prevZ,E=i.nextZ;for(;v&&v.z>=m&&E&&E.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==a&&Vs(o,u,l,d,c,p,v.x,v.y)&&jt(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=f&&E.x<=_&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&Vs(o,u,l,d,c,p,E.x,E.y)&&jt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==a&&Vs(o,u,l,d,c,p,v.x,v.y)&&jt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=M;){if(E.x>=f&&E.x<=_&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&Vs(o,u,l,d,c,p,E.x,E.y)&&jt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function px(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Mo(s,r)&&zu(s,n,n.next,r)&&Or(s,r)&&Or(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),kr(n),kr(n.next),n=i=r),n=n.next}while(n!==i);return ps(n)}function mx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sx(a,o)){let l=Nu(a,o);a=ps(a,a.next),l=ps(l,l.next),Nr(a,e,t,n,s,r,0),Nr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Uu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wx(c));for(s.sort(xx),r=0;r<s.length;r++)t=yx(s[r],t);return t}function xx(i,e){return i.x-e.x}function yx(i,e){let t=_x(i,e);if(!t)return e;let n=Nu(t,i);return ps(n,n.next),ps(t,t.next)}function _x(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Vs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Or(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&vx(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function vx(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function Mx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ql(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bx(s)}function bx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ql(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Sx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ex(i,e)&&(Or(i,e)&&Or(e,i)&&Tx(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||Mo(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mo(i,e){return i.x===e.x&&i.y===e.y}function zu(i,e,t,n){let s=La(jt(i,e,t)),r=La(jt(i,e,n)),a=La(jt(t,n,i)),o=La(jt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ia(i,t,e)||r===0&&Ia(i,n,e)||a===0&&Ia(t,i,n)||o===0&&Ia(t,e,n))}function Ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function La(i){return i>0?1:i<0?-1:0}function Ex(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function Tx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nu(i,e){let t=new ec(i.i,i.x,i.y),n=new ec(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function au(i,e,t,n){let s=new ec(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ax(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ou(e),lu(n,e);let a=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,lu(n,t[l]);let o=ux.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ou(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ks=class i extends Ot{constructor(e=new di([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Rx,v,E=!1,D,P,R,F;m&&(v=m.getSpacedPoints(u),E=!0,p=!1,D=m.computeFrenetFrames(u,!1),P=new H,R=new H,F=new H),p||(g=0,f=0,x=0,_=0);let T=o.extractPoints(c),y=T.shape,U=T.holes;if(!Bi.isClockWise(y)){y=y.reverse();for(let B=0,Re=U.length;B<Re;B++){let de=U[B];Bi.isClockWise(de)&&(U[B]=de.reverse())}}let ce=Bi.triangulateShape(y,U),O=y;for(let B=0,Re=U.length;B<Re;B++){let de=U[B];y=y.concat(de)}function w(B,Re,de){return Re||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Re,de)}let W=y.length,j=ce.length;function N(B,Re,de){let Se,he,Be,Ce=B.x-Re.x,L=B.y-Re.y,C=de.x-B.x,Q=de.y-B.y,ue=Ce*Ce+L*L,be=Ce*Q-L*C;if(Math.abs(be)>Number.EPSILON){let _e=Math.sqrt(ue),$e=Math.sqrt(C*C+Q*Q),Ie=Re.x-L/_e,Xe=Re.y+Ce/_e,Qe=de.x-Q/$e,pt=de.y+C/$e,me=((Qe-Ie)*Q-(pt-Xe)*C)/(Ce*Q-L*C);Se=Ie+Ce*me-B.x,he=Xe+L*me-B.y;let ot=Se*Se+he*he;if(ot<=2)return new Te(Se,he);Be=Math.sqrt(ot/2)}else{let _e=!1;Ce>Number.EPSILON?C>Number.EPSILON&&(_e=!0):Ce<-Number.EPSILON?C<-Number.EPSILON&&(_e=!0):Math.sign(L)===Math.sign(Q)&&(_e=!0),_e?(Se=-L,he=Ce,Be=Math.sqrt(ue)):(Se=Ce,he=L,Be=Math.sqrt(ue/2))}return new Te(Se/Be,he/Be)}let ee=[];for(let B=0,Re=O.length,de=Re-1,Se=B+1;B<Re;B++,de++,Se++)de===Re&&(de=0),Se===Re&&(Se=0),ee[B]=N(O[B],O[de],O[Se]);let Me=[],ge,Pe=ee.concat();for(let B=0,Re=U.length;B<Re;B++){let de=U[B];ge=[];for(let Se=0,he=de.length,Be=he-1,Ce=Se+1;Se<he;Se++,Be++,Ce++)Be===he&&(Be=0),Ce===he&&(Ce=0),ge[Se]=N(de[Se],de[Be],de[Ce]);Me.push(ge),Pe=Pe.concat(ge)}for(let B=0;B<g;B++){let Re=B/g,de=f*Math.cos(Re*Math.PI/2),Se=x*Math.sin(Re*Math.PI/2)+_;for(let he=0,Be=O.length;he<Be;he++){let Ce=w(O[he],ee[he],Se);Fe(Ce.x,Ce.y,-de)}for(let he=0,Be=U.length;he<Be;he++){let Ce=U[he];ge=Me[he];for(let L=0,C=Ce.length;L<C;L++){let Q=w(Ce[L],ge[L],Se);Fe(Q.x,Q.y,-de)}}}let le=x+_;for(let B=0;B<W;B++){let Re=p?w(y[B],Pe[B],le):y[B];E?(R.copy(D.normals[0]).multiplyScalar(Re.x),P.copy(D.binormals[0]).multiplyScalar(Re.y),F.copy(v[0]).add(R).add(P),Fe(F.x,F.y,F.z)):Fe(Re.x,Re.y,0)}for(let B=1;B<=u;B++)for(let Re=0;Re<W;Re++){let de=p?w(y[Re],Pe[Re],le):y[Re];E?(R.copy(D.normals[B]).multiplyScalar(de.x),P.copy(D.binormals[B]).multiplyScalar(de.y),F.copy(v[B]).add(R).add(P),Fe(F.x,F.y,F.z)):Fe(de.x,de.y,d/u*B)}for(let B=g-1;B>=0;B--){let Re=B/g,de=f*Math.cos(Re*Math.PI/2),Se=x*Math.sin(Re*Math.PI/2)+_;for(let he=0,Be=O.length;he<Be;he++){let Ce=w(O[he],ee[he],Se);Fe(Ce.x,Ce.y,d+de)}for(let he=0,Be=U.length;he<Be;he++){let Ce=U[he];ge=Me[he];for(let L=0,C=Ce.length;L<C;L++){let Q=w(Ce[L],ge[L],Se);E?Fe(Q.x,Q.y+v[u-1].y,v[u-1].x+de):Fe(Q.x,Q.y,d+de)}}}xe(),Ee();function xe(){let B=s.length/3;if(p){let Re=0,de=W*Re;for(let Se=0;Se<j;Se++){let he=ce[Se];Ze(he[2]+de,he[1]+de,he[0]+de)}Re=u+g*2,de=W*Re;for(let Se=0;Se<j;Se++){let he=ce[Se];Ze(he[0]+de,he[1]+de,he[2]+de)}}else{for(let Re=0;Re<j;Re++){let de=ce[Re];Ze(de[2],de[1],de[0])}for(let Re=0;Re<j;Re++){let de=ce[Re];Ze(de[0]+W*u,de[1]+W*u,de[2]+W*u)}}n.addGroup(B,s.length/3-B,0)}function Ee(){let B=s.length/3,Re=0;Ke(O,Re),Re+=O.length;for(let de=0,Se=U.length;de<Se;de++){let he=U[de];Ke(he,Re),Re+=he.length}n.addGroup(B,s.length/3-B,1)}function Ke(B,Re){let de=B.length;for(;--de>=0;){let Se=de,he=de-1;he<0&&(he=B.length-1);for(let Be=0,Ce=u+g*2;Be<Ce;Be++){let L=W*Be,C=W*(Be+1),Q=Re+Se+L,ue=Re+he+L,be=Re+he+C,_e=Re+Se+C;Oe(Q,ue,be,_e)}}}function Fe(B,Re,de){l.push(B),l.push(Re),l.push(de)}function Ze(B,Re,de){We(B),We(Re),We(de);let Se=s.length/3,he=M.generateTopUV(n,s,Se-3,Se-2,Se-1);Le(he[0]),Le(he[1]),Le(he[2])}function Oe(B,Re,de,Se){We(B),We(Re),We(Se),We(Re),We(de),We(Se);let he=s.length/3,Be=M.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Le(Be[0]),Le(Be[1]),Le(Be[3]),Le(Be[1]),Le(Be[2]),Le(Be[3])}function We(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Le(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Kl[s.type]().fromJSON(s)),new i(n,e.options)}},Rx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Te(r,a),new Te(o,l),new Te(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],p=e[s*3],f=e[s*3+1],x=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Te(a,1-l),new Te(c,1-d),new Te(p,1-x),new Te(_,1-m)]:[new Te(o,1-l),new Te(u,1-d),new Te(f,1-x),new Te(g,1-m)]}};function Cx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ho=class i extends co{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},mn=class i extends co{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ii=class i extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,p=(t-e)/s,f=new H,x=new Te;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}d+=p}for(let _=0;_<s;_++){let g=_*(n+1);for(let m=0;m<n;m++){let M=m+g,v=M,E=M+n+1,D=M+n+2,P=M+1;o.push(v,E,P),o.push(E,D,P)}}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Fr=class i extends Ot{constructor(e=new di([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(a,2));function c(u){let d=s.length/3,p=u.extractPoints(t),f=p.shape,x=p.holes;Bi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=x.length;g<m;g++){let M=x[g];Bi.isClockWise(M)===!0&&(x[g]=M.reverse())}let _=Bi.triangulateShape(f,x);for(let g=0,m=x.length;g<m;g++){let M=x[g];f=f.concat(M)}for(let g=0,m=f.length;g<m;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=_.length;g<m;g++){let M=_[g],v=M[0]+d,E=M[1]+d,D=M[2]+d;n.push(v,E,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Px(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Px(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Jn=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new H,p=new H,f=[],x=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){let P=D/t;d.x=-e*Math.cos(s+P*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+P*r)*Math.sin(a+v*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),g.push(P+E,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let v=u[m][M+1],E=u[m][M],D=u[m+1][M],P=u[m+1][M+1];(m!==0||a>0)&&f.push(v,E,P),(m!==n-1||l<Math.PI)&&f.push(E,D,P)}this.setIndex(f),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var In=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new H,d=new H,p=new H;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let _=x/s*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let _=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,M=(s+1)*f+x;a.push(_,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var uo=class extends Yn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},fo=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qt=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Br=class extends Yn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new it(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var po=class extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Da(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ix(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var js=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends js{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uh:r=e,o=2*t-n;break;case dh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:a=e,l=2*n-t;break;case dh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),_=x*x,g=_*x,m=-p*g+2*p*_-p*x,M=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*x+1,v=(-1-f)*g+(1.5+f)*_+.5*x,E=f*g-f*_;for(let D=0;D!==o;++D)r[D]=m*a[u+D]+M*a[c+D]+v*a[l+D]+E*a[d+D];return r}},nc=class extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[l+p]*u;return r}},ic=class extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case za:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ix(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,p=d-n,f=d+n;for(let x=0;x!==n;++x){let _=t[d+x];if(_!==t[p+x]||_!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Na;var ms=class extends si{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=za;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends si{};sc.prototype.ValueTypeName="color";var rc=class extends si{};rc.prototype.ValueTypeName="number";var ac=class extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hr=class extends si{InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.DefaultInterpolation=Na;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends si{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=za;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends si{};oc.prototype.ValueTypeName="vector";var lc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null}}},Lx=new lc,cc=class{constructor(e){this.manager=e!==void 0?e:Lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},er=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vl=new Pt,cu=new H,hu=new H,Gr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hc=class extends Gr{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ha*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mo=class extends Qs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},uu=new Pt,Sr=new H,Ml=new H,uc=class extends Gr{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),Ml.copy(n.position),Ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ml),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},Hn=class extends Qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dc=class extends Gr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function du(){return(typeof performance>"u"?Date:performance).now()}var wc="\\[\\]\\.:\\/",Dx=new RegExp("["+wc+"]","g"),Sc="[^"+wc+"]",Ux="[^"+wc.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",Sc),Nx=/(WCOD+)?/.source.replace("WCOD",Ux),Ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),Fx=new RegExp("^"+zx+Nx+Ox+kx+"$"),Bx=["material","materials","bones","map"],fc=class{constructor(e,t,n){let s=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(e){let t=Fx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=fc;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var sr=class extends Yi{constructor(e=null){super();let t=new Pn;t.deleteAttribute("uv");let n=new Qt({side:rn}),s=new Qt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Hn(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ze(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new ze(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ze(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new ze(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let d=new ze(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new ze(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let f=new ze(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let x=new ze(t,ir(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let _=new ze(t,ir(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let g=new ze(t,ir(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new ze(t,ir(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new ze(t,ir(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new ze(t,ir(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ir(i){let e=new Nt;return e.color.setScalar(i),e}function Xr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ot,c=0;for(let u=0;u<i.length;++u){let d=i[u],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+u);u+=i[p].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Ou(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<d;++p){let f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][p]);let x=Ou(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function Ou(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new an(a,t,n);return s!==void 0&&(l.gpuType=s),l}function cn(i,e=18,t=!0,n=!0){let s=[],r=[];for(let l of i)for(let c=0;c<e;c++){let u=c/e*Math.PI*2,d=Math.cos(u);s.push((l.x||0)+Math.sin(u)*l.rx,l.y,(l.z||0)+d*(d>=0?l.rz:l.rb??l.rz))}for(let l=0;l<i.length-1;l++)for(let c=0;c<e;c++){let u=l*e+c,d=l*e+(c+1)%e,p=u+e,f=d+e;r.push(u,d,p,d,f,p)}let a=i.length;if(t){let l=i[0],c=s.length/3;s.push(l.x||0,l.y,l.z||0);for(let u=0;u<e;u++)r.push(c,(u+1)%e,u)}if(n){let l=i[a-1],c=s.length/3,u=(a-1)*e;s.push(l.x||0,l.y,l.z||0);for(let d=0;d<e;d++)r.push(c,u+d,u+(d+1)%e)}let o=new Ot;return o.setAttribute("position",new _t(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function Ki(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let l=o/6,c=e+(t-e)*l;r.push({y:-i*l,rx:c,rz:c*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),cn(r,n)}function oe(i,e,t=0,n=0,s=0){let r=new ze(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function nn(i=0,e=0,t=0,...n){let s=new St;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var Rt=(i,e,t)=>new Pn(i,e,t),kt=(i,e=14,t=10)=>new Jn(i,e,t),Jt=(i,e,t,n=12,s=!1)=>new xn(i,e,t,n,1,s),_n=(i,e,t=10)=>new ln(i,e,t),Vt=(i,e,t)=>i+(e-i)*t;function ri(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var bo=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512]],Ln=[10725556,4906624,3718648,11566335,16096779,16731501,16773560];function ai(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],l=i[a],c=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let d=0;d<e;d++){let p=d/e,f={y:Vt(l.y,c.y,p)};for(let x of n){let _=s(o,x),g=s(l,x),m=s(c,x),M=s(u,x),v=.5*(2*g+(-_+m)*p+(2*_-5*g+4*m-M)*p*p+(-_+3*g-3*m+M)*p*p*p);x[0]==="r"&&(v=Math.max(8e-4,Math.min(Math.max(g,m)*1.08,v))),f[x]=v}t.push(f)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function Fu(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,l=e+1;for(let d of i)for(let p=0;p<=e;p++){let f=-Math.PI+p/e*Math.PI*2,x=Math.cos(f);t.push((d.x||0)+Math.sin(f)*d.rx,d.y,(d.z||0)+x*(x>=0?d.rz:d.rb??d.rz)),n.push(p/e,(d.y-a)/(o-a))}for(let d=0;d<r-1;d++)for(let p=0;p<e;p++){let f=d*l+p,x=f+1,_=f+l,g=x+l;s.push(f,x,_,x,g,_)}{let d=i[0],p=t.length/3;t.push(d.x||0,d.y,d.z||0),n.push(.5,0);for(let f=0;f<e;f++)s.push(p,f+1,f)}{let d=i[r-1],p=t.length/3,f=(r-1)*l;t.push(d.x||0,d.y,d.z||0),n.push(.5,1);for(let x=0;x<e;x++)s.push(p,f+x,f+x+1)}let c=new Ot;c.setAttribute("position",new _t(t,3)),c.setAttribute("uv",new _t(n,2)),c.setIndex(s),c.computeVertexNormals();let u=c.attributes.normal;for(let d=0;d<r;d++){let p=d*l,f=p+e,x=u.getX(p)+u.getX(f),_=u.getY(p)+u.getY(f),g=u.getZ(p)+u.getZ(f),m=Math.hypot(x,_,g)||1;u.setXYZ(p,x/m,_/m,g/m),u.setXYZ(f,x/m,_/m,g/m)}return c}function Ti(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),cn(ai(s,2),t)}var ku={};function Bu(i){let e=i?"s":"h",t=ku[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=ku[e]=new to(s,n.length,1,On),t.minFilter=t.magFilter=un,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Ec(i,e){return new Br(Object.assign({color:i,gradientMap:Bu(!0)},e||{}))}function vn(i,e){return new Br(Object.assign({color:i,gradientMap:Bu()},e||{}))}var rr=null;function Hu(){return rr||(rr=new Nt({color:1314586,side:rn}),rr.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},rr.userData.shared=!0,rr)}var Hx=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function Gu(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new Pt,r=new Pt;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,l=[];r.copy(a.matrixWorld).invert();let c=d=>{for(let p of d.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let f=Hx(p,!!p.material.map);f.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(f),l.push(p)}else!p.isLight&&!p.isSprite&&c(p)};c(a);for(let d of l)d.parent.remove(d),d.geometry.dispose();let u=[];for(let[d,p]of o){let f=p.length>1?Xr(p,!1):p[0];p.length>1&&p.forEach(_=>_.dispose());let x=new ze(f,d);x.castShadow=!0,a.add(x),!d.isMeshBasicMaterial&&!d.userData.noInk&&u.push(f)}if(e&&u.length){let d=u.map(x=>{let _=x.clone();return _.attributes.uv&&_.deleteAttribute("uv"),_}),p=d.length>1?Xr(d,!1):d[0];d.length>1&&d.forEach(x=>x.dispose());let f=new ze(p,Hu());f.userData.ink=!0,f.castShadow=!1,a.add(f),n.push(f)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function wo(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new ze(n.geometry,Hu());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function ar(i,e){let t=bo[i][e?1:0];return vn(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Dt=(i,e,t,n)=>vn(i,n||void 0),lr={},qr=(i,e)=>lr[i]||(lr[i]=e()),or=()=>qr("wood",()=>vn(8016432)),So=()=>qr("leather",()=>vn(4861984)),Dn=i=>qr("m"+i,()=>ar(i)),Tn=i=>qr("d"+i,()=>ar(i,!0)),oi=(i,e=1)=>qr("g"+i+e,()=>vn(Ln[i],{emissive:Ln[i],emissiveIntensity:e})),Vu=new ln(.5,1,5).translate(0,.5,0),Wu=new mn(1),Xu=new xn(1,1,1,10,1,!0),Gx=new In(1,.05,6,40),Ai=(i,e)=>new Nt({color:i,transparent:!0,opacity:e,blending:En,depthWrite:!1,side:en}),xs=(i,e,t)=>{let n=new ze(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function cr(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,l=(c,u,d,p)=>{let f=Ai(u,.95),x=[];for(let _=0;_<c;_++){let g=xs(Wu,f,i);g.scale.set(d,d*1.7,d),x.push(g)}n.push(_=>x.forEach((g,m)=>{let M=_*(1.5+m*.27)+m*2.1,v=(m/c+_*p)%1,E=Math.sin(v*Math.PI);g.position.set(s+Math.cos(M)*(o+.035),t.y0+a*v,r+Math.sin(M)*(o+.035)),g.rotation.y=_*3+m,g.scale.set(d*E,d*1.7*E,d*E)}))};if(e===3)l(3,13215999,.014,.1);else if(e===4){l(6,16767088,.014,.16);let c=xs(Xu,Ai(16762960,.13),i);c.position.set(s,t.y0+a/2,r),c.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{c.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let c=Ai(16725012,.7),u=Ai(16760906,.85),d=t.mode==="lite",p=d?2:Math.max(3,Math.min(8,Math.round(a/.13))),f=[],x=Math.min(.075,o*1.2+.03)*(d?.62:1);for(let _=0;_<=p;_++){let g=_===p,m=_%2?1:-1,M=x*(g?1.35:1),v=xs(Vu,c,i);xs(Vu,u,v).scale.set(.5,.62,.5),v.position.set(s+(g?0:m*Math.min(o,.09)*.7),g?t.y1-M*.4:t.y0+a*(_+.4)/p,r),f.push({f:v,side:g?0:m,sz:M,i:_})}n.push(_=>{for(let g of f){let m=1+.32*Math.sin(_*11+g.i*1.7)+.18*Math.sin(_*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(_*9+g.i)),g.sz*2.3*m,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(_*7+g.i))}}),d||l(4,16742970,.011,.5)}else if(e>=6){let c=t.mode==="lite",u=t.mode==="halo";if(!c&&!u&&o<=.1){let d=xs(Xu,Ai(16773312,.2),i);d.position.set(s,t.y0+a/2,r),d.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{d.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!c){let d=xs(Gx,Ai(16771496,.9),i);d.position.set(s,t.y1,r),d.scale.setScalar(Math.min(o+.06,.17)),d.rotation.x=Math.PI/2,n.push(p=>{d.rotation.z=p*1.4,u||(d.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let d=new St;d.position.set(s,t.y1+.03,r);let p=Ai(16777215,.95),f=c?.6:1;for(let[x,_,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])xs(Wu,p,d).scale.set(x*f,_*f,g*f);i.add(d),n.push(x=>{d.rotation.set(x*.7,x*1.1,0),d.scale.setScalar(1+.3*Math.sin(x*4))})}l(c||u?3:6,16774872,.011,.22)}return c=>{for(let u of n)u(c)}}function Yu(i,e,t){let n=new di;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new Fr(n,8),r=[Ai(16771504,.34),Ai(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],l=!0;for(let c of[-1,1]){let u=new St;u.position.set(c*.05,e,t),o.forEach(([d,p,f],x)=>{let _=new ze(s,r[x%2]);_.castShadow=!1,l||(_.userData.sharedGeo=!0),l=!1,_.scale.set(c*p,f*p*1.5,1),_.rotation.z=c*d,_.position.z=-x*.004,u.add(_)}),i.add(u),a.push({piv:u,s:c})}return c=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(c*1.8)*.16);r[0].opacity=.3+Math.sin(c*2.6)*.07}}var qu={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Zu(i,e=0){lr={};let t=new St,n=(s,r,a,o)=>{let l=oe(Rt(r,s,.012),Dn(e),0,o/2+s/2,0);t.add(l);let c=oe(_n(r/2,r*1.4,4),Dn(e),0,o/2+s+r*.7,0);if(c.scale.z=.14,c.rotation.y=Math.PI/4,t.add(c),t.add(oe(Rt(r*.22,s*.9,.016),Tn(e),0,o/2+s*.47,0)),t.add(oe(Rt(a,.03,.035),Tn(e),0,o/2+.005,0)),t.add(oe(Jt(.016,.016,o,8),So())),t.add(oe(kt(.026,8,6),Tn(e),0,-o/2-.015,0)),e>=2&&t.add(oe(new mn(.02),oi(e),0,o/2+.005,.022)),e>=3&&t.add(oe(Rt(.008,s*.75,.02),oi(e,1.4),0,o/2+s*.45,0)),e>=3&&t.add(oe(new mn(.017),oi(e),0,-o/2-.045,0)),e>=4)for(let u of[-1,1]){let d=oe(_n(.018,.09+(e-4)*.025,5),Dn(e),u*a/2,o/2+.045,0);d.rotation.z=-u*.55,t.add(d);let p=oe(_n(.014,.06,5),Tn(e),u*a*.3,o/2-.03,0);p.rotation.z=Math.PI+u*.5,t.add(p)}if(e>=5)for(let u=0;u<3;u++)for(let d of[-1,1]){let p=oe(_n(.012,r*.9,4),Tn(e),d*r*.62,o/2+s*(.25+u*.22),0);p.rotation.z=-d*1.2,p.scale.z=.4,t.add(p)}};switch(i){case"epee":n(.78,.06,.22,.16);break;case"dague":n(.3,.045,.12,.11);break;case"espadon":n(1.15,.11,.36,.3);break;case"lamecle":n(.9,.055,.14,.14),t.add(oe(Rt(.09,.05,.014),Tn(e),.07,.86,0)),t.add(oe(Rt(.07,.05,.014),Tn(e),.06,.74,0));{let s=oe(new In(.06,.014,8,20),Tn(e),0,-.14,0);t.add(s)}break;case"masse":t.add(oe(Jt(.018,.02,.7,8),or(),0,.25,0)),t.add(oe(kt(.085,12,8),Dn(e),0,.64,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=oe(_n(.025,.07,5),Tn(e),Math.sin(r)*.1,.64,Math.cos(r)*.1);a.rotation.set(Math.PI/2*Math.cos(r),0,-Math.PI/2*Math.sin(r)),t.add(a)}e>=2&&t.add(oe(new mn(.03),oi(e),0,.745,0));break;case"guisarme":t.add(oe(Jt(.017,.017,1.9,8),or(),0,.5,0));{let s=oe(_n(.03,.26,4),Dn(e),0,1.57,0);s.scale.z=.3,t.add(s);let r=oe(Jt(.2,.2,.014,16,!1),Dn(e),.1,1.28,0);r.rotation.x=Math.PI/2,r.scale.set(1,1,1.25),t.add(r);let a=oe(_n(.04,.16,4),Tn(e),-.08,1.3,0);a.rotation.z=Math.PI/2,a.scale.z=.3,t.add(a),e>=2&&t.add(oe(new mn(.024),oi(e),.02,1.28,.02))}break;case"baton":t.add(oe(Jt(.016,.02,1.6,8),or(),0,.5,0));{let s=oe(new In(.085,.014,8,20,Math.PI*1.4),Dn(e),0,1.37,0);s.rotation.z=Math.PI*.8,t.add(s);let r=oe(kt(.055,14,10),oi(e,1.5),0,1.38,0);t.add(r);let a=new Hn(Ln[e],.5,2.5);a.position.set(0,1.38,0),t.add(a)}break;case"arc":{let s=oe(new In(.62,.016,8,28,Math.PI*.8),or(),-.5,.2,0);s.rotation.z=-Math.PI*.4,t.add(s);let r=.2+Math.sin(Math.PI*.4)*.62,a=-.5+Math.cos(Math.PI*.4)*.62;t.add(oe(Jt(.003,.003,(r-.2)*2,4),Dt(15658734,.5),a,.2,0)),t.add(oe(Jt(.022,.022,.14,8),So(),.12,.2,0)),e>=2&&t.add(oe(new mn(.02),oi(e),.13,.3,0))}break;case"orbe":{t.add(oe(kt(.09,18,14),Dt(Ln[e],.1,.1,{emissive:Ln[e],emissiveIntensity:1.1})));let s=oe(new In(.13,.008,6,28),Dn(e));if(s.rotation.x=1.2,t.add(s),e>=3){let a=oe(new In(.15,.006,6,28),Dn(e));a.rotation.set(.4,.8,0),t.add(a)}let r=new Hn(Ln[e],.6,3);t.add(r)}break;case"grimoire":t.add(oe(Rt(.2,.27,.06),So())),t.add(oe(Rt(.18,.25,.064),Dt(15327174,.9),.012,0,0)),t.add(oe(Rt(.205,.275,.05),Dt(bo[e][1],.6,.3),-.004,0,0)),t.add(oe(new mn(.03),oi(e),0,0,.034));break;case"pistolet":t.add(oe(Rt(.035,.26,.03),Dn(e),0,.16,0)),t.add(oe(Jt(.028,.028,.06,10),Tn(e),0,.07,0));{let s=oe(Rt(.034,.13,.04),or(),0,-.02,-.03);s.rotation.x=-.35,t.add(s)}break;case"repercuteur":{let s=oe(Jt(.075,.075,.9,14),Dn(e),0,.35,0);t.add(s),t.add(oe(Jt(.09,.09,.06,14),Tn(e),0,.78,0)),t.add(oe(Jt(.085,.085,.07,14),Tn(e),0,.2,0)),t.add(oe(kt(.055,12,8),oi(e,1.6),0,.8,0)),t.add(oe(Rt(.04,.16,.05),So(),0,.05,-.1))}break;case"harpe":{let s=e>=4?Dn(e):Dt(14264636,.3,.85);t.add(oe(Jt(.02,.024,.95,8),s,.2,.42,0));let r=oe(new In(.3,.02,8,18,Math.PI*.6),s,-.04,.72,0);r.rotation.z=Math.PI*.28,t.add(r);let a=oe(Rt(.05,.92,.07),or(),-.1,.36,0);a.rotation.z=-.52,t.add(a);for(let o=0;o<7;o++){let l=-.2+o*.055,c=.28+o*.09;t.add(oe(Jt(.0022,.0022,c,4),Dt(o%3?15985878:Ln[e],.4,0,{emissive:o%3?0:Ln[e],emissiveIntensity:.8}),l,.84-c/2-Math.abs(3-o)*.012,0))}}break;case"anneaux":{let s=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([r,a],o)=>{t.add(oe(new In(.14,.018,8,24),Dn(e),r,a,o*.02)),t.add(oe(kt(.05,10,8),Dt(s[o],.3,0,{emissive:s[o],emissiveIntensity:.6}),r,a,o*.02))})}break}return t.userData.tick=qu[i]?cr(t,e,qu[i]):null,t}function Ju(i=0){lr={};let e=new di;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new Ks(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=nn(0,0,0,oe(t,Dn(i)));if(n.add(oe(Rt(.05,.66,.012),Tn(i),0,-.04,.05)),n.add(oe(Rt(.44,.05,.012),Tn(i),0,.06,.05)),n.add(oe(kt(.06,12,8),Tn(i),0,.06,.05)),i>=2&&n.add(oe(new mn(.034),oi(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(oe(new mn(.022),oi(i),s,r,.05));return n.userData.tick=cr(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function ji(i){lr={};let e=new St,t=Dt(i.b,.85),n=Dt(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,l=nn(0,r,0);e.add(l);let c=oe(cn([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);c.rotation.x=Math.PI/2,l.add(c);let u=nn(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,l.add(u),u.add(oe(Ki(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let d=nn(0,i.neck,0);d.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(d);let p=i.hs||a*.55,f=oe(kt(p,12,10),t);if(f.scale.set(.9,.95,1.1),d.add(f),i.beak){let M=oe(_n(p*.42,p*1.3,8),Dt(15116602,.5),0,-p*.15,p*1.25);M.rotation.x=Math.PI/2+.25,d.add(M)}else{let M=oe(cn([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Dt(i.sn,.85):t,0,-p*.2,p*.5);M.rotation.x=Math.PI/2,d.add(M),d.add(oe(kt(p*.14,6,5),Dt(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let M of[-1,1]){if(d.add(oe(kt(p*.13,8,6),Dt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),M*p*.72,p*.2,p*.55)),i.ear==="point"){let v=oe(_n(p*.3,p*.75,5),t,M*p*.5,p*.95,-p*.05);v.rotation.z=-M*.25,d.add(v)}else if(i.ear==="round")d.add(oe(kt(p*.28,8,6),t,M*p*.65,p*.75,0));else if(i.ear==="long"){let v=oe(Ki(p*1.25,p*.34,p*.14,8,.45),t,M*p*.5,p*.6,-p*.1);v.rotation.set(Math.PI+.2,0,M*.35),d.add(v)}if(i.horns){let v=oe(_n(p*.2,p*1.3,6),Dt(i.horns,.5),M*p*.5,p*.9,-p*.5);v.rotation.x=-1,v.rotation.z=-M*.2,d.add(v)}}if(i.mane){let M=oe(Rt(a*.16,i.neck*1.1,a*.5),Dt(i.mane,.9),0,i.neck*.5,-a*.62);u.add(M)}let x=[];for(let[M,v]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let E=nn(M*a*.62,-a*.3,v*s*.33);l.add(E);let D=o*.52,P=o*.5;E.add(oe(Ki(D,i.lw*1.35,i.lw,8),t));let R=nn(0,-D,0);E.add(R),R.add(oe(Ki(P,i.lw*.9,i.lw*.7,8),v>0||!i.d2?t:n));let F=oe(kt(i.lw*1.05,8,6),Dt(i.hoof||1381658,.6),0,-P-i.lw*.2,i.paw?i.lw*.5:0);F.scale.set(1,.6,i.paw?1.5:1),R.add(F),x.push({hip:E,knee:R,ph:(M*v>0?0:Math.PI)+(v<0?.6:0)})}let _=nn(0,a*.35,-s*.48);if(l.add(_),i.tail==="bush"){let M=oe(Ki(s*.4,a*.3,a*.14,8),t);M.rotation.x=1.9,_.add(M)}else if(i.tail==="hair"){let M=oe(Ki(r*.55,a*.16,a*.26,8),Dt(i.mane||i.d,.9));M.rotation.x=.3,_.add(M)}else if(i.tail==="long"){let M=_;for(let E=0;E<6;E++){let D=nn(0,E?-s*.16:0,0);D.rotation.x=E?-.2:1.85,D.add(oe(Ki(s*.17,a*(.42-E*.06),a*(.36-E*.06),8),t)),M.add(D),M=D}let v=oe(_n(a*.2,a*.5,4),n,0,-s*.2,0);v.rotation.x=Math.PI,M.add(v),e.userData.tail=_}else{let M=oe(kt(a*.22,8,6),t);_.add(M)}let g=[];if(i.wings)for(let M of[-1,1]){let v=nn(M*a*.7,a*.75,s*.12);l.add(v);let E=new di,D=i.wings;E.moveTo(0,0),E.quadraticCurveTo(D*.5,D*.5,D,D*.28),E.lineTo(D*.82,0),E.lineTo(D*.72,-D*.22),E.lineTo(D*.52,-D*.08),E.lineTo(D*.42,-D*.3),E.lineTo(D*.22,-D*.14),E.lineTo(D*.12,-D*.3),E.closePath();let P=oe(new Fr(E),Dt(i.wd||i.d,.8,0,{side:en,emissive:i.wd||i.d,emissiveIntensity:.28}));P.scale.x=M,P.rotation.x=1.15,P.castShadow=!1,v.add(P),g.push({w:v,s:M})}(i.extra||(()=>{}))(e,l,d,{body:t,dark:n});let m=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(M,v){m+=M*(3+v*5)*(v>.02?1:0);let E=v>.02?.35+Math.min(1,v)*.3:0;for(let D of x){let P=Math.sin(m+D.ph);D.hip.rotation.x=P*E,D.knee.rotation.x=Math.max(0,Math.cos(m+D.ph))*E*1.3}l.position.y=r+(v>.02?Math.abs(Math.sin(m*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(m*2)*.04;for(let{w:D,s:P}of g)D.rotation.z=P*(.25+Math.sin(performance.now()/(v>.02?160:600))*(v>.02?.45:.1))}}}function Vx(i){lr={};let e=new St,t=Dt(921107,.35,.6),n=Dt(13225430,.2,.95),s=Dt(526346,.9),r=[];for(let d of[-.72,.78]){let p=nn(0,.34,d),f=oe(new In(.27,.085,10,24),s);f.rotation.y=Math.PI/2,p.add(f);let x=oe(Jt(.12,.12,.08,12),n);x.rotation.z=Math.PI/2,p.add(x);for(let _=0;_<5;_++){let g=oe(Rt(.02,.5,.03),n);g.rotation.x=_/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=oe(kt(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(oe(Rt(.3,.3,.55),Dt(2763312,.4,.8),0,.5,.05));let o=oe(Rt(.3,.1,.62),Dt(1708560,.8),0,.8,-.38);e.add(o);let l=oe(Jt(.025,.025,.8,8),n,0,.7,.66);l.rotation.x=-.42,e.add(l),e.add(oe(Rt(.66,.03,.03),n,0,1.06,.5));let c=oe(kt(.2,12,8),t,0,.95,.62);c.scale.set(.9,.9,.7),e.add(c),e.add(oe(kt(.075,10,8),Dt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(oe(Rt(.31,.02,.5),Dt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let d of[-1,1]){let p=oe(Jt(.035,.045,.7,8),n,d*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new mo(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(d,p){for(let f of r)f.rotation.x+=d*p*22;e.position.y=0}}}var fi={m0:{speed:1.7,make:()=>ji({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>ji({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=oe(Rt(.5,.08,.6),Dt(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>ji({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=oe(cn([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Dt(bo[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>Vx(Ln[3])},m4:{speed:2.5,make:()=>ji({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=oe(kt(.2,10,8),Dt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>ji({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=oe(_n(.06,.2,4),Dt(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>ji({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=oe(cn([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Dt(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new Hn(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}},$u={wolf:()=>ji({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>ji({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=fi.m5.make();return i.group.scale.setScalar(.85),i}};var Ac={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},Ao=["neutre","ninja","souverain","digne","humble","timide"],Ro=["neutre","ninja","levitation"],ju=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],Tc={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},ys=.252;function Wx(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[ys,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function Yr(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:Vt(s.rx,r.rx,n),rz:Vt(s.rz,r.rz,n),rb:Vt(s.rb??s.rz,r.rb??r.rz,n),z:Vt(s.z,r.z,n)}}return i[i.length-1]}var Eo=(i,e,t,n=1)=>{let s=Yr(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/ys)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function To(i,e,t){let n=Yr(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var Ci=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Qu(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?Vt(.184,.128,Ci((i-.8)/.5)):i<1.8?Vt(.128,.088,Ci((i-1.3)/.5)):Vt(.088,.04,Ci((i-1.8)/.7))}function ed(i,e,t,n=28,s=6){let r=[],a=[],o=ys-.006,l=s+1;for(let d=0;d<n;d++){let p=-Math.PI+d/n*2*Math.PI,f=e(Math.abs(p));for(let x=0;x<=s;x++)r.push(...Eo(i,p,Vt(f,o,Math.sin(x/s*Math.PI/2)),t))}for(let d=0;d<n;d++)for(let p=0;p<s;p++){let f=d*l+p,x=(d+1)%n*l+p,_=f+1,g=x+1;a.push(f,x,_,x,g,_)}let c=r.length/3;r.push(0,ys+(t-1)*.11,0);for(let d=0;d<n;d++)a.push(c,d*l+s,(d+1)%n*l+s);let u=new Ot;return u.setAttribute("position",new _t(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function Ri(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let l=a;l>=0;l--){let c=l/a,u=c<.22?Vt(.72,1,c/.22):Math.max(.03,1-Math.pow((c-.22)/.78,1.5));o.push({y:-i*c,x:s*i*c*c,z:n*i*c*c,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),cn(o,r)}var Gn=(i,e=0,t="#000000")=>"#"+new it(i).lerp(new it(t),e).getHexString();function Ku(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",l=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let c=(U,V)=>Math.asin(Math.max(-.99,Math.min(.99,U/Yr(e,V).rx))),u=(U,V)=>(.5+c(U,V)/l)*n,d=U=>(1-U/ys)*s,p=s/ys,f=(U,V)=>n/l/(Yr(e,V).rx*Math.cos(c(U,V))),x=(U,V,ce,O)=>{a.save(),a.translate(u(U,V),d(V)),a.scale(ce*f(U,V),-p),O(),a.restore()};if(i.hair){a.fillStyle=Gn(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let U=0;U<n;U+=2){let V=Math.abs((U/n-.5)*l);a.fillRect(U,0,2,d(Qu(V)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let _=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(_){let U=_==="pleine",V=(.5-1.75/l)*n,ce=(.5+1.75/l)*n;if(U){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(V,d(.125));for(let O=0;O<=40;O++){let w=O/40,W=-1.75+w*3.5,j=Math.abs(W)>1.05?Vt(.066,.125,Ci((Math.abs(W)-1.05)/.6)):.05+.016*Ci(Math.abs(W)/1.05);a.lineTo((.5+W/l)*n,d(j))}a.lineTo(ce,s),a.lineTo(V,s),a.closePath(),a.fill(),x(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let O=a.createLinearGradient(0,s,0,d(.066));O.addColorStop(0,Gn(i.hairColor)),O.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=O,a.fillRect(V,d(.066),ce-V,s-d(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,x(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}x(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=U?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let U of[-1,1])x(U*.047,.071,U,()=>{let V=a.createRadialGradient(0,0,0,0,0,.02);V.addColorStop(0,`rgba(238,104,104,${g})`),V.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=V,a.fillRect(-.02,-.02,.04,.04)});x(0,.064,1,()=>{let U=i.nose;a.strokeStyle=Gn(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*U,-.0052*U),a.quadraticCurveTo(0,-.0072*U,.0042*U,-.0052*U),a.stroke(),a.globalAlpha=1}),x(0,.037,1,()=>{let U=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-U*.78,0),a.quadraticCurveTo(0,-.0082,U*.78,0),a.quadraticCurveTo(0,-.0016,-U*.78,0),a.fill(),a.beginPath(),a.moveTo(-U*.85,0),a.quadraticCurveTo(-U*.3,.0034,0,.0016),a.quadraticCurveTo(U*.3,.0034,U*.85,0),a.quadraticCurveTo(0,-.0012,-U*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=Gn(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-U,9e-4),a.quadraticCurveTo(0,-.0026,U,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-U*.36,-.006),a.quadraticCurveTo(0,-.0074,U*.36,-.006),a.stroke(),a.globalAlpha=1)});let m=i.eyes*(o?1.06:1),M=.0202*m,v=(o?.0176:.0136)*m,E=(o?.0114:.0096)*m,D=.1,P=.0398*i.eyeGap+(m-1)*.004,R=Gn(i.hairColor,.72,"#120c10"),F=i.eyeColor;for(let U of[-1,1])x(U*P,D,U,()=>{if(t.closed){if(a.strokeStyle=R,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-M,.001),a.quadraticCurveTo(0,-E*.95,M*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let ee of[.45,.75,1])a.beginPath(),a.moveTo(M*ee,-E*.5*(1.1-ee)-4e-4),a.lineTo(M*(ee+.14),-E*.5*(1.1-ee)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-M,-.0012),a.bezierCurveTo(-M*.6,v*1.2,M*.4,v*1.32,M,.0032),a.bezierCurveTo(M*.62,-E*1.15,-M*.45,-E*1.2,-M,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-M*1.2,-E*1.6,M*2.4,(v+E)*1.8);let V=a.createLinearGradient(0,v*1.05,0,v*.15);V.addColorStop(0,"rgba(112,122,168,.8)"),V.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=V,a.fillRect(-M*1.2,0,M*2.4,v*1.5);let ce=-M*.05,O=M*.61,w=Math.max(v,E)*1.14,W=(v-E)*.3,j=a.createLinearGradient(0,W+w,0,W-w);j.addColorStop(0,Gn(F,.74)),j.addColorStop(.48,Gn(F,.12)),j.addColorStop(1,Gn(F,.42,"#ffffff")),a.fillStyle=j,a.beginPath(),a.ellipse(ce,W,O,w,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=Gn(F,.78),a.stroke(),a.fillStyle=Gn(F,.9),a.beginPath(),a.ellipse(ce,W+w*.1,O*.42,w*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=Gn(F,.62,"#ffffff"),a.beginPath(),a.ellipse(ce,W-w*.58,O*.6,w*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(ce-U*O*.36,W+w*.42,O*.3,w*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(ce+U*O*.42,W-w*.4,O*.14,w*.11,0,0,7),a.fill(),a.restore();let N=o?.0037:.0028;if(a.fillStyle=R,a.beginPath(),a.moveTo(-M*1.03,-.0016),a.bezierCurveTo(-M*.6,v*1.2,M*.4,v*1.32,M,.0032),a.lineTo(M*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(M*.55,v*1.32+N*1.7,-M*.5,v*1.2+N*1.2,-M*1.06,3e-4),a.closePath(),a.fill(),o)for(let[ee,Me,ge,Pe]of[[M*.96,.0062,M*1.34,.012],[M*.72,v*.95,M*1.02,v*1.62]])a.beginPath(),a.moveTo(ee-.0024,Me),a.lineTo(ge,Pe),a.lineTo(ee+.0012,Me-.0018),a.closePath(),a.fill();a.strokeStyle=R,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(M*.98,.0012),a.bezierCurveTo(M*.78,-E*.9,M*.36,-E*1.14,-M*.08,-E*1.12),a.stroke(),a.strokeStyle=Gn(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-M*.55,v*1.16+N+.0034),a.quadraticCurveTo(M*.1,v*1.36+N+.0042,M*.82,v*.95+N+.004),a.stroke(),a.globalAlpha=1});let T=Gn(i.hairColor,.3);for(let U of[-1,1])x(U*P,D+v*1.32+(o?.0128:.0108),U,()=>{let V=o?.0027:.0046,ce=i.brows,O=-ce*.0055,w=ce*.0034+8e-4,W=O*.3+w*.7+.0034;a.fillStyle=T,a.beginPath(),a.moveTo(-M*1.05,O-V*.5),a.quadraticCurveTo(0,W+V*.15,M*1.22,w),a.quadraticCurveTo(0,W+V*.95+8e-4,-M*1.05,O+V*.5),a.closePath(),a.fill()});let y=new Bn(r);return y.colorSpace=Yt,y.anisotropy=4,y}function Xx(i,e,t){let n=i.gender==="f",s=new St,r=Wx(i.jaw*(n?.92:1.05)),a=ai(r,3),o=e.shadow?t.skin:Ec(16777215,{map:Ku(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let l=Fu(a,32);{let f=l.attributes.position,x=l.attributes.normal,_=new H,g=new H;for(let m=0;m<f.count;m++)_.set(f.getX(m),f.getY(m)-.118,f.getZ(m)+.012).normalize(),g.set(x.getX(m),x.getY(m),x.getZ(m)).lerp(_,.8).normalize(),x.setXYZ(m,g.x,g.y,g.z)}let c=oe(l,o);s.add(c);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let f=o.map,x=Ku(i,r,{closed:!0});u=_=>{o.map=_?x:f},s.userData.dispose=()=>{f.dispose(),x.dispose()}}for(let f of[-1,1]){let x=oe(kt(.024,10,8),t.skin,f*.0905,.098,-.006);x.scale.set(.42,1,.72),x.rotation.y=f*.25,s.add(x)}let d=oe(cn([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,To(r,0,.068)-.0035);if(d.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),d.userData.noBake=!0,d.castShadow=!1,s.add(d),!n&&i.beard==="pleine"){let f=oe(cn(ai([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(f)}let p=qx(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function qx(i,e,t,n){let s=new St,r=i.hair,a=new St,o=new St,l=new St;if(a.name="top",o.name="front",l.name="back",s.add(a,o,l),r==="rase")return s;let c=(m,M,v,E,D,P=0,R=1.06)=>{let F=Eo(n,v,E,R),T=oe(M,e,F[0],F[1],F[2]);return T.rotation.order="YXZ",T.rotation.set(-D,v,P),m.add(T),T},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(oe(ed(n,Qu,u),e));let d=(m,M=.021,v=.36)=>m.forEach(([E,D,P,R,F])=>c(o,Ri(D,P,M,-.1,F||0),E,.211-Math.abs(E)*.016,v,R,u+.012)),p=(m,M=.04)=>{for(let v of[-1,1])c(o,Ri(m,M,.022,-.05,0),v*1.08,.172,.1,-v*.06,u),c(o,Ri(m*.7,M*.8,.02,-.05,0),v*1.32,.16,.1,v*.06,u)},f=(m,M,v,E=1.12,D=-.45,P=.236,R=.2)=>{for(let F=0;F<m;F++)c(a,Ri(M*(.9+F*7%5*.05),v,.03,D),R+F/m*6.2832,P,E,F%2?.14:-.12,u)},x=(m,M,v,E,D,P,R,F,T,y=.026)=>{for(let U=0;U<M;U++){let V=Vt(v,E,M>1?U/(M-1):.5);c(m,Ri(P*(.92+U*5%4*.05),R,y,T),V,D,F,U%2?.1:-.1,u)}},_=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":d(_),p(t?.11:.085),f(9,.105,.062),x(a,9,1.5,4.78,.2,.1,.06,.5,-.3),x(l,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":d([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[m,M,v,E,D]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])c(a,Ri(E,.074,.05,.14),m,M,v,D,.99);x(l,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":d(_),p(.19,.045),f(9,.12,.066),x(l,9,1.45,4.83,.17,.25,.066,.13,.12,.03),x(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":d(t?g:_),p(.34,.044),f(9,.13,.068),x(l,9,1.4,4.88,.17,.56,.074,.1,.03,.032),x(l,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":d(_),p(t?.15:.1),f(8,.1,.062,1.2,-.5);{let m=oe(kt(.026,10,8),e,...Eo(n,Math.PI,.2,1.1));a.add(m);for(let[M,v,E]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])c(a,Ri(v,.066,.046,-.3,0),Math.PI,.2,E,M,1.14)}break;case"chignon":d(t?g:_),p(t?.13:.08),f(8,.095,.06,1.2,-.5);{let m=Eo(n,Math.PI,.185,1.3),M=oe(kt(.05,14,10),e,m[0],m[1],m[2]);M.scale.set(1,.92,.9),a.add(M);for(let v=0;v<5;v++){let E=oe(Ri(.06,.035,.026,.3),e,m[0],m[1],m[2]-.01);E.rotation.set(-1.9,0,v*1.257),a.add(E)}}break;case"boucles":d([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[m,M,v,E]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let D=0;D<M;D++){let P=m<.19?Vt(1.15,5.13,D/(M-1)):D/M*6.2832+m*9;m<.215&&Math.cos(P)>.5||c(m<.15?l:a,Ri(v,.07,.052,.55,D%2?.25:-.25),P,m,E,D%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function _s(i={}){let e=Object.assign({},Ac,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,l=.5+s*.5,c=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},d=(S,G)=>c.glow?{emissive:S,emissiveIntensity:G}:void 0,p={skin:Ec(e.skin),hair:vn(e.hairColor)},f=p.skin,x=vn(c.c[0],d(c.c[0],.1)),_=vn(c.c[1],d(c.c[1],.1)),g=vn(c.c[2],d(c.c[2],.22)),m=vn(1907492),M=vn(1250072),v=vn(5922920),E=S=>S._dbl||(S._dbl=Object.assign(S.clone(),{side:en})),D=[],P={},R=S=>P["m"+S]||(P["m"+S]=ar(S)),F=S=>P["d"+S]||(P["d"+S]=ar(S,!0)),T=S=>P["g"+S]||(P["g"+S]=vn(Ln[S],{emissive:Ln[S],emissiveIntensity:.9})),y=S=>(S.userData.joint=!0,S),U=S=>(S.userData.keep=!0,S),V=.47*e.legs,ce=.44*e.legs,O=V+ce+.105,w=new St,W=y(nn(0,O,0));w.add(W);let j=y(nn(0,0,0));W.add(j);let N={hips:W,spine:j},ee=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([S,G,J,re,fe],ae)=>{let ve=ae===1||ae===2?e.hips:ae===3?e.waist:ae===4||ae===5?e.chest:1;return{y:S,rx:G*(ae>7?1:s)*ve,rz:J*(ae>7?1:l)*(ae===4||ae===5?e.chest:ae===3?(1+e.waist)/2:1),rb:re*(ae>7?1:l)*(ae===4||ae===5?(1+e.chest)/2:1),z:fe}}),Me=ai(ee,3),ge=S=>Yr(Me,S),Pe=ee[3],le=ee[1],xe=S=>{let G=ge(S);return G.z+G.rz},Ee=c.cut,Ke=Ee==="plate",Fe=(n?.088:.082)*s*e.hips;j.add(oe(cn(Me,24),Ee==="cape"?v:x));let Ze=n?.037:.046;j.add(oe(Jt(Ze,Ze*1.1,.12,12),f,0,.555,-.006));let Oe=y(nn(0,.57,.012)),We=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);Oe.scale.setScalar(We),j.add(Oe),N.head=Oe;let Le=Xx(e,t,p);Oe.add(Le);let B=(S,G)=>{let J=S.attributes.position,re=S.index.array,fe=[];for(let ae=0;ae<re.length;ae+=3){let ve=re[ae],De=re[ae+1],rt=re[ae+2];G((J.getX(ve)+J.getX(De)+J.getX(rt))/3,(J.getY(ve)+J.getY(De)+J.getY(rt))/3,(J.getZ(ve)+J.getZ(De)+J.getZ(rt))/3)&&fe.push(ve,De,rt)}return S.setIndex(fe),S},Re=(S,G,J,re=24)=>{let fe=ai(S,3),ae=cn(fe,re,!1,!1);if(J){let ve=ae.index.array,De=[];for(let rt=0;rt<ve.length/6;rt++){let bt=Math.floor(rt/re),yt=(rt%re+.5)/re*6.2832;if(J(yt>Math.PI?yt-6.2832:yt,(fe[bt].y+fe[bt+1].y)/2))for(let h=0;h<6;h++)De.push(ve[rt*6+h])}ae.setIndex(De)}return oe(ae,E(G))},de=(S,G,J,re,fe=.168)=>{G=Math.max(G,(Fe+.098*o)/le.rx),j.add(Re([{y:S,rx:le.rx*G,rz:le.rz*G*1.05,rb:le.rb*G*1.05},{y:Vt(S,-.03,.55),rx:le.rx*Vt(1.09,G,.6),rz:le.rz*Vt(1.12,G*1.05,.6),rb:le.rb*Vt(1.12,G*1.05,.6)},{y:-.03,rx:Math.max(le.rx*1.075,Fe+.1*o),rz:le.rz*1.13,rb:le.rb*1.13},{y:fe,rx:Pe.rx*1.06,rz:Pe.rz*1.1,rb:Pe.rb*1.1}],J,re))},Se=(S=.27)=>(G,J)=>!(Math.abs(G)<S&&J<.1),he=(S,G,J,re=1.07)=>{let fe=ge(S),ae=ge(G);j.add(oe(cn([{y:S,rx:fe.rx*re,rz:fe.rz*re,rb:fe.rb*re,z:fe.z},{y:G,rx:ae.rx*re,rz:ae.rz*re,rb:ae.rb*re,z:ae.z}],24),J))},Be=()=>{he(.126,.174,M,1.14),j.add(oe(Rt(.052,.052,.02),g,0,.15,xe(.15)*1.14+.004))},Ce=(S,G,J,re,fe,ae=1.014,ve=10)=>{let De=[],rt=[];for(let h=0;h<=ve;h++){let I=h/ve,b=Vt(S,G,I),z=Vt(J,re,I),Y=ge(b),X=Y.z+Y.rz*Math.sqrt(Math.max(.05,1-(z/Y.rx)**2))*ae+.002;if(De.push(-z,b,X,z,b,X),h<ve){let ie=h*2;rt.push(ie,ie+1,ie+2,ie+1,ie+3,ie+2)}}let bt=new Ot;bt.setAttribute("position",new _t(De,3)),bt.setIndex(rt),bt.computeVertexNormals();let yt=oe(bt,E(fe));yt.castShadow=!1,j.add(yt)},L=(S,G,J,re=1)=>j.add(Re([{y:.488,rx:.086*re,rz:.07*re,rb:.074*re,z:-.004},{y:.488+S,rx:.064*re,rz:.058*re,rb:.062*re,z:-.006}],G,J?fe=>Math.abs(fe)>J:null,20)),C=(n?.168:.208)*a,Q=.447,ue=(n?.8:1)*o,be=.275*e.arms,_e=.25*e.arms,$e=Ee==="robe",Ie=Ee==="cape"?v:x,Xe=Ee==="apron"?f:Ie,Qe=()=>cn(ai([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let S of[-1,1]){let G=S<0?"M":"O",J=y(nn(S*C,Q,0));j.add(J),J.add(oe(Ti(be,[[0,.046*ue],[.16,.051*ue],[.5,.043*ue],[.85,.037*ue],[1,.035*ue]],12),Ie));let re=y(nn(0,-be,0));if(J.add(re),t.oneArm&&S===-1)re.add(oe(kt(.04*ue,8,6),Ie));else{re.add(oe(Ti(_e,$e?[[0,.042*ue],[.5,.06*ue],[1,.082*ue,0,.8]]:[[0,.036*ue],[.22,.041*ue],[.6,.034*ue],[1,.026*ue]],12,$e?.15:.55),Xe));let ae=n?.88:1,ve=oe(Qe(),Ee==="plate"?_:f,0,-_e,0);ve.scale.setScalar(ae),re.add(ve);let De=oe(Ti(.045,[[0,.0095],[1,.0065]],8),Ee==="plate"?_:f,0,-_e-.022*ae,.028*ae);De.rotation.x=-.75,De.scale.setScalar(ae),re.add(De),Ee!=="apron"&&!$e&&re.add(oe(Jt(.031*ue,.034*ue,.034,12),Ee==="cape"?_:g,0,-_e+.03,0)),N["hand"+G]=U(nn(0,-_e-.058*ae,.004)),re.add(N["hand"+G])}N["arm"+G]=J,N["elbow"+G]=re}N.armL=N.armM,N.armR=N.armO,N.elbowL=N.elbowM,N.elbowR=N.elbowO;let pt=Fe,me=o,ot=Ee==="track"||Ee==="suit"||Ee==="tail"||Ee==="plate"?x:_,mt=()=>{let S=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([J,re,fe])=>({y:J,rx:re,rz:fe,z:.036-fe})),G=cn(ai(S,2),12);return G.rotateX(Math.PI/2),G};for(let S of[-1,1]){let G=S<0?"M":"O",J=y(nn(S*pt,-.02,0));W.add(J),J.add(oe(Ti(V,n?[[0,.09*me],[.3,.09*me],[.7,.066*me],[1,.052*me]]:[[0,.086*me],[.3,.088*me],[.7,.069*me],[1,.056*me]],14),ot));let re=y(nn(0,-V,0));J.add(re);let fe=n?.92:1;re.add(oe(Ti(ce,[[0,.054*me*fe],[.25,.06*me*fe,-.008],[.7,.043*me*fe],[1,.036*me*fe]],12),ot)),re.add(oe(Ti(ce*.56,[[0,.054*me*fe*1.16],[.4,.047*me*fe*1.14],[1,.04*me*fe*1.12]],12,.2),m,0,-ce*.44,-.002)),re.add(oe(Jt(.062*me*fe,.058*me*fe,.03,12),Ee==="plate"?g:m,0,-ce*.44,-.004));let ae=oe(mt(),m,0,-ce-.049,.004);if(ae.scale.setScalar(n?.9:1),re.add(ae),u.jambieres!=null){let ve=u.jambieres;re.add(oe(Ti(ce*.8,[[0,.07*me],[.3,.074*me,-.004],[1,.052*me]],12,.15),R(ve),0,-ce*.1,.004));let De=oe(kt(.062*me,10,8),F(ve),0,0,.03);if(De.scale.set(1,1.2,.8),re.add(De),ve>=2&&re.add(oe(new mn(.016),T(ve),0,0,.082*me)),ve>=5){let bt=cr(re,ve,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});bt&&D.push(bt)}let rt=oe(mt(),F(ve),0,-ce-.044,.008);rt.scale.set(1.12,1.1,1.06),re.add(rt)}N["leg"+G]=J,N["knee"+G]=re}N.legL=N.legM,N.legR=N.legO,N.kneeL=N.kneeM,N.kneeR=N.kneeO;let lt=!1,et=()=>{for(let S of[-1,1])N[S<0?"armM":"armO"].add(oe(Rt(.008,be*.86,.022),g,S*.05*ue,-be*.5,0)),N[S<0?"legM":"legO"].add(oe(Rt(.008,V*.9,.024),g,S*.079*me,-V*.5,0)),N[S<0?"kneeM":"kneeO"].add(oe(Rt(.008,ce*.42,.02),g,S*.055*me,-ce*.2,0))};switch(Ee){case"uniform":de(-.125,1.1,x),Be(),Ce(.175,.488,.009,.009,g),L(.05,g,.17);for(let S of[-1,1]){let G=oe(Rt(.085,.014,.05),g,S*C*.86,.478,0);G.rotation.z=-S*.32,j.add(G)}break;case"track":Ce(.02,.5,.007,.007,g),L(.06,g,.17,1.04),he(-.045,-.015,_,1.03),et();break;case"apron":j.add(Re([{y:-V*.92,rx:le.rx*1.24,rz:le.rz*1.3},{y:-.03,rx:le.rx*1.08,rz:le.rz*1.15},{y:.168,rx:Pe.rx*1.06,rz:Pe.rz*1.13}],g,S=>Math.abs(S)<1.25)),Ce(.17,.43,.1,.075,g,1.03),Be(),L(.03,x,.35);break;case"coat":de(-V*.94,n?1.5:1.32,x,Se()),Be(),Ce(.3,.5,.012,.045,g),L(.07,_,.45,1.16);break;case"blouse":de(-V*.8,1.22,x,Se(.14)),Ce(.36,.5,.01,.04,_),L(.04,x,.4,1.1);{let S=oe(Rt(.055,.05,.012),g,C*.42,.33,xe(.33)*.96+.006);j.add(S),N.armM.add(oe(Jt(.06*ue,.06*ue,.05,12),g,0,-.12,0))}break;case"robe":de(-(O-.1),n?1.9:1.55,x),lt=!0,he(.125,.2,g,1.085),Ce(.2,.5,.01,.05,g),L(.045,g,.35,1.12);{let S=oe(Rt(.05,.34,.012),g,0,-.03,le.rz*1.24);S.rotation.x=-.08,j.add(S)}break;case"suit":de(-.12,1.07,x,Se(.14)),Ce(.24,.5,.006,.05,g),Ce(.25,.48,.014,.012,_,1.03),L(.035,g,.35);break;case"cape":{de(-.15,1.12,v),Be(),j.add(oe(cn(ai([{y:-O*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),x)),j.add(Re([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],x));{let S=oe(kt(.075,12,8),x,0,.535,-.085);S.scale.set(1.25,.6,.8),j.add(S)}j.add(oe(new mn(.024),T(2),0,.455,.12));break}case"plate":{for(let S of[-1,1]){let G=oe(kt(.098,12,8),x,S*C*1.02,Q+.036,0);G.scale.set(1.15,.72,1.1),j.add(G),N[S<0?"elbowM":"elbowO"].add(oe(Ti(_e*.7,[[0,.052*ue],[1,.04*ue]],12,.2),x,0,-.02,0))}j.add(oe(new mn(.028),vn(c.c[2],{emissive:c.c[2],emissiveIntensity:.8}),0,.36,xe(.36)+.012)),de(-V*.5,1.22,g,Se(.14)),Be(),L(.05,_,.17,1.1);break}case"tail":{Ce(.2,.5,.03,.06,g),de(-.1,1.05,x,S=>Math.abs(S)>.6);for(let S of[-1,1]){let G=oe(Rt(.115,.44,.014),_,S*.064,-.22,-le.rb*1.12);G.rotation.x=.1,j.add(G)}for(let S of[-1,1]){let G=oe(_n(.022,.05,4),_,S*.024,.497,xe(.49)+.014);G.rotation.z=S*Math.PI/2,G.scale.z=.5,j.add(G)}L(.035,g,.35);break}}if(u.plastron!=null){let S=u.plastron,G=Me.filter(J=>J.y>=.175&&J.y<=.492).map(J=>({y:J.y,rx:J.rx*1.09,rz:J.rz*1.14,rb:J.rb*1.12,z:J.z}));G.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),j.add(oe(cn(G,24,!1,!1),E(R(S)))),he(.175,.2,F(S),1.16);for(let J of[-1,1]){let re=oe(kt(.094,12,8),F(S),J*C*1.04,Q+.042,0);re.scale.set(1.2+S*.03,.7,1.14),j.add(re);let fe=oe(kt(.075,12,8),R(S),J*C*1.12,Q-.02,0);if(fe.scale.set(1,.8,1.1),j.add(fe),S>=4){let ae=oe(_n(.028,.11,6),R(S),J*C*1.2,Q+.095,0);ae.rotation.z=-J*.7,j.add(ae)}}if(Ce(.2,.49,.012,.012,F(S),1.16),S>=2&&j.add(oe(new mn(.03),T(S),0,.375,xe(.375)*1.14+.016)),S>=4)for(let J of[-1,1])j.add(oe(new mn(.02),T(S),J*C*1.04,Q+.1,.03));if(S>=3)for(let J of[-1,1]){let re=cr(j,S,{x:J*C*1.06,y0:Q+.07,y1:Q+(S>=5?.2:.16),r:.05,mode:"lite"});re&&D.push(re)}S>=6&&D.push(Yu(j,.4,-(ee[5].rb+.03)))}if(u.casque!=null){let S=u.casque,G=Le.userData.rings,J=E(R(S)),re=ae=>ae<.55?.138:ae<1?Vt(.138,.05,Ci((ae-.55)/.3)):ae<2.2?.05:.035;Oe.add(oe(ed(G,re,1.13,32,7),J)),Oe.add(oe(Rt(.016,.07,.014),F(S),0,.118,To(G,0,.12)*1.13+.006));{let ae=oe(cn(ai([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),F(S),0,.262,0);Oe.add(ae)}if(S>=2&&Oe.add(oe(new mn(.015),T(S),0,.2,To(G,0,.2)*1.13+.012)),S>=3){let ae=oe(cn(ai([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),vn(Ln[S]),0,.285,0);Oe.add(ae)}if(S>=5)for(let ae of[-1,1]){let ve=oe(_n(.024,.13,6),R(S),ae*.112,.215,-.02);ve.rotation.z=-ae*.9,Oe.add(ve)}if(S>=5){let ae=cr(Oe,S,{y0:S>=6?.3:.27,y1:S>=6?.33:.38,r:S>=6?.1:.03,z:-.02,mode:S>=6?"halo":"lite"});ae&&D.push(ae)}let fe=Le.getObjectByName("hair");if(fe){fe.remove(fe.getObjectByName("top"));let ae=fe.getObjectByName("front");ae.children.slice(0,Math.max(0,ae.children.length-4)).forEach(ve=>ae.remove(ve))}}let Je=U(nn(0,.3,-(ee[4].rb+.05)));j.add(Je);let ht=i.main&&i.main.type,Mt=i.off&&i.off.type,Ct=ht?Tc[ht]||"1h":"fist",ct=[],Ae=(S,G,J)=>new Fn().setFromEuler(new Wi(S,G,J));function q(S,G,J){let re=y(Zu(S.type,S.r)),fe=S.type,ae={g:re,type:fe,hand:N[J]},ve={parent:Je,p:[0,0,0],q:Ae(0,0,0),s:1},De={p:[0,0,0],q:Ae(Math.PI/2,Math.PI/2,0),s:1};return fe==="orbe"?(ve.parent=j,ve.p=[G*.3,.52,.12],ae.orb=!0,N.orb=re):fe==="grimoire"?(ve.parent=j,ve.p=[G*(le.rx+.035),.02,.02],ve.q=Ae(0,G*Math.PI/2,.1),De.p=[0,0,.05],De.q=Ae(-1.2,Math.PI/2,0),ae.hand=N.handO||N.handM):fe==="pistolet"||fe==="dague"?(ve.parent=j,ve.p=[G*(le.rx+.04),.03,0],ve.q=Ae(Math.PI+.25,0,0),ve.s=.9,fe==="pistolet"&&(De.q=Ae(0,0,Math.PI),De.p=[0,.01,.03])):fe==="anneaux"?(ve.p=[0,.02,.01],ve.q=Ae(Math.PI/2-.2,0,0),ve.s=.85,De.q=Ae(Math.PI/2,0,0),De.p=[0,0,.12],De.s=.7):fe==="guisarme"||fe==="baton"?(ve.p=[-G*.12,-.62,0],ve.q=Ae(0,0,G*.3),De.p=[0,0,-.1]):fe==="arc"?(ve.p=[G*.1,0,0],ve.q=Ae(0,0,G*.25),De.q=new Fn().setFromRotationMatrix(new Pt().makeBasis(new H(0,-1,0),new H(0,0,1),new H(-1,0,0))),De.p=[0,.12,-.2],ae.hand=N.handO||N.handM):fe==="harpe"?(ve.p=[0,-.45,-.03],ve.s=.85,De.q=Ae(Math.PI/2,0,0),De.p=[.02,.06,-.42],De.s=.64,ae.hand=N.handO||N.handM):fe==="repercuteur"?(ve.p=[G*.17,.2,0],ve.q=Ae(0,0,G*(Math.PI-.5)),De.q=Ae(0,0,Math.PI),De.p=[0,.06,.1]):(ve.p=[G*.17,.2,0],ve.q=Ae(0,0,G*(Math.PI-.5))),re.userData.tick&&D.push(re.userData.tick),ae.S=ve,ae.H=De,ct.push(ae),ke(ae,!1),ae}function ke(S,G){let J=G&&S.hand&&!S.orb?S.H:S.S;(G&&S.hand&&!S.orb?S.hand:S.S.parent).add(S.g),S.g.position.set(J.p[0],J.p[1],J.p[2]),S.g.quaternion.copy(J.q),S.g.scale.setScalar(J.s)}ht&&q(i.main,-1,"handM"),Mt&&Mt!=="bouclier"&&q(i.off,1,"handO");let Ue=ct.length>1&&Tc[Mt]===Tc[ht],je=Mt==="bouclier"?i.off.r:u.bouclier;if(je!=null){let S=y(Ju(je));S.position.set(.055,-.13,0),S.rotation.y=Math.PI/2,S.scale.setScalar(.8),N.elbowO.add(S),S.userData.tick&&D.push(S.userData.tick)}if(i.aura){let S=new it(i.aura),G=new ze(new ii(.42,.56,40),new Nt({color:S,transparent:!0,opacity:.55,side:en,blending:En,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=.02,w.add(G),N.aura=G;let J=new ze(Jt(.5,.42,1.5,24,!0),new Nt({color:S,transparent:!0,opacity:.1,side:en,blending:En,depthWrite:!1}));J.position.y=.75,w.add(J),N.auraCol=J}w.scale.setScalar(e.height);let tt=Gu(w,!t.shadow&&!t.noInk);if(t.shadow){let S=typeof t.shadow=="string"?t.shadow:"#14141f",G=new po({color:S,transparent:!0,opacity:.8,emissive:new it(S).multiplyScalar(.6)});w.traverse(fe=>{fe.isMesh&&fe.material&&!fe.material.transparent&&!(fe.material.emissiveIntensity>.4)&&(fe.material.map&&fe.material.userData.ownMap&&fe.material.map.dispose(),fe.material=G)});let J=new Nt({color:t.eyes||"#bfe4ff"}),re=Le.userData.rings;for(let fe of[-1,1]){let ae=new ze(kt(.012,8,6),J);ae.position.set(fe*.037,.1,To(re,.037,.1)+.002),ae.scale.set(1.5,.7,.5),Oe.add(ae)}}w.traverse(S=>{S.isMesh&&(S.castShadow=!S.material.transparent&&!S.userData.ink&&S.userData.noBake!==!0)});let Tt=(S,G)=>new Nt({color:S,transparent:!0,opacity:G,side:en,blending:En,depthWrite:!1}),gt=[];{let S=new ln(.5,1,6).rotateX(Math.PI).translate(0,-.5,0),G=Tt("#ff2410",.62),J=Tt("#ffb27a",.7),re=!0;for(let fe of[N.kneeM,N.kneeO]){let ae=new ze(S,G),ve=new ze(S,J);ae.castShadow=ve.castShadow=!1,re||(ae.userData.sharedGeo=!0),ve.userData.sharedGeo=!0,re=!1,ve.scale.set(.5,.55,.5),ae.add(ve),ae.position.set(0,-ce-.07,.04),ae.visible=!1,fe.add(ae),gt.push(ae)}}let ut=new St;ut.visible=!1,w.add(ut);{let S=i.aura||"#bfe8ff",G=new ze(Jt(.52,.34,2.3,20,!0),Tt(S,.16));G.position.y=1.15,G.castShadow=!1,ut.add(G);let J=Tt("#ffffff",.7),re=Rt(.012,.3,.012);for(let ae=0;ae<9;ae++){let ve=new ze(re,J);ve.castShadow=!1,ae&&(ve.userData.sharedGeo=!0),ut.add(ve)}let fe=new ze(new ii(.3,.62,32).rotateX(-Math.PI/2),Tt(S,.5));fe.position.y=.03,fe.castShadow=!1,ut.add(fe)}let xt={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},At=i.runPose||null,Ne={};N.armM.rotation.order=N.armO.rotation.order="XZY";let Wt=Math.random()*6,Ft=null,Kt=!1,k=1.5+Math.random()*4,$=0,ne=Ao.includes(e.stance)?e.stance:"neutre",Ve=Ro.includes(e.move)?e.move:"neutre",nt=je!=null,dt=ht==="grimoire"||Mt==="grimoire";function at(){switch(Ct){case"1h":case"rings":Ne.aMx=-.45,Ne.aMz=.2,Ne.eM=-1.15,Ue?(Ne.aOx=-.4,Ne.aOz=.2,Ne.eO=-1.05):nt&&(Ne.aOx=-.6,Ne.aOz=-.1,Ne.eO=-1.45);break;case"2h":Ne.aMx=-.6,Ne.aMz=-.12,Ne.eM=-1.05,Ne.aOx=-.75,Ne.aOz=-.42,Ne.eO=-1.2,Ne.sY=-.22;break;case"staff":Ne.aMx=-.5,Ne.aMz=.12,Ne.eM=-1.35,nt&&(Ne.aOx=-.6,Ne.aOz=-.1,Ne.eO=-1.45);break;case"bow":Ne.aOx=-.6,Ne.aOz=.12,Ne.eO=-.8;break;case"gun":Ne.aMx=-.5,Ne.eM=-1.3,Ue&&(Ne.aOx=-.5,Ne.eO=-1.3);break;case"cannon":Ne.aMx=-.4,Ne.aMz=-.05,Ne.eM=-1.25,Ne.aOx=-.85,Ne.aOz=-.5,Ne.eO=-.9;break;case"magic":Ne.aMx=-.5,Ne.aMz=.22,Ne.eM=-1.25,dt&&(Ne.aOx=-.55,Ne.eO=-1.5);break;case"harp":Ne.aOx=-.75,Ne.aOz=-.18,Ne.eO=-1.6,Ne.aMx=-.5,Ne.eM=-1.3;break;default:Ne.aMx=-.5,Ne.eM=-1.75,Ne.aOx=-.5,Ne.eO=-1.75}}let He=S=>Object.assign(Ne,S),A=S=>{let G={};for(let J in S){let re=J==="sY"||J==="aMy"||J==="aOy",fe=J.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");G[J==="sY"?J:fe]=re?-S[J]:S[J]}return G};function Z(S){switch(ne){case"ninja":return He({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return He({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return He({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return He({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return He({sX:.1,sY:.12+Math.sin(S*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let se={slash(S,G){let J=S<.36,re=S<.66,fe=Ue&&G%2===1,ae=Ue?(G>>1)%3:G%3,ve=ae===0?J?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:re?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:ae===1?J?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:re?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:J?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:re?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;ve&&He(fe?A(ve):ve)},heavy(S,G){let J=S<.42,re=S<.72;G%2===0?J?He({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):re&&He({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):J?He({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):re&&He({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(S,G){if(S>.8)return;if(Ct==="cannon"){He({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),S>.3&&S<.5&&He({sX:-.16,aMx:-1.45});return}let J=S>.3&&S<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};He(Ue&&G%2===1?A(J):J)},bow(S){S<.55?He({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):S<.82&&He({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(S){S<.4?He({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):S<.75&&He({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(S){S<.78&&He({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(S){S<.45?He({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(S/.45*Math.PI*.6)}):S<.82&&He({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(S){He({aOx:-.8,aOz:-.2,eO:-1.6}),S<.35?He({aMx:-1.25,aMz:.4,eM:-1.5}):S<.72&&He({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(S,G){let J=S<.32?{aMx:.3,eM:-2.2,sY:-.4}:S<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;J&&He(G%2?A(J):J)},spin(S){He({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(S){He({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(S){He({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(S){He({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(S){He({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:w,joints:N,height:(O+.57+ys*We)*e.height,seatDrop:O*e.height,cat:Ct,dual:Ue,inks:tt,scale:e.height,get armed(){return Kt},get acting(){return Ft?Ft.name:null},get move(){return Ve},get stance(){return ne},setArmed(S){if(S=!!S,S!==Kt){Kt=S;for(let G of ct)ke(G,S)}},setStyle(S){S.stance&&Ao.includes(S.stance)&&(ne=S.stance),S.move&&Ro.includes(S.move)&&(Ve=S.move)},play(S,G=.5,J=0,re=1){se[S]&&(Ft={name:S,t:0,dur:G,c:J,turns:re})},hand(S,G){let J=N[G?"handO":"handM"]||N.handO||N.handM;return J?J.getWorldPosition(S):w.getWorldPosition(S)},update(S,G={}){let J=Math.min(3.2,G.speed||0),re=$+=S,fe=Math.sin(re*1.6),ae=Ve==="levitation"&&!G.riding&&!G.down,ve=J>.02,De=Ve==="ninja"&&J>.9&&!G.riding&&!G.down;Wt+=S*(4.6+J*3.4)*(De?1.3:1)*(ve?1:0),He({aMx:fe*.02,aMy:0,aMz:.08,aOx:-fe*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:fe*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:fe*.003,rZ:0});let rt=null,bt=!1,yt=!1;if(G.riding)rt=[-1.25,1.3,-1.25,1.3,G.wide||.45],He({sX:.06+fe*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),bt=!0;else if(G.down)rt=[-1.48,1.5,.15,1.65,0],He({sX:.5,hdX:.45,dy:-(V-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(ve&&ae){let K=Math.min(1,J/2),pe=Math.sin(re*1.7);rt=[-.3,.58,.04+K*.05,.1,0],He({sX:.05+K*.09,hdX:-.03-K*.06,aMx:.12+K*.16+pe*.02,aOx:.12+K*.16-pe*.02,aMz:.16+K*.05,aOz:.16+K*.05,eM:-.22,eO:-.22})}else if(ve){let K=Math.max(0,Math.min(1,J-.75)),pe=De?.72:(lt?.3:.55)+Math.min(J,1.4)*(lt?.12:.3),ye=Math.sin(Wt),we=(.7+K)*pe*1.5;rt=[ye*pe,Math.max(0,-Math.cos(Wt))*we,-ye*pe,Math.max(0,Math.cos(Wt))*we,0],bt=!0,He(De?{sX:.8,hdX:-.58,aMx:.72+ye*.05,aOx:.72-ye*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:ye*.05,dy:-.1+Math.abs(Math.cos(Wt))*.03}:{aMx:-ye*pe*.8,aOx:ye*pe*.8,eM:-.25-K*.9-Math.max(0,-ye)*.4,eO:-.25-K*.9-Math.max(0,ye)*.4,sX:.04+K*.2,sY:ye*.07,dy:Math.abs(Math.cos(Wt))*.025*(1+K)})}else!Kt&&!Ft&&(rt=Z(re),yt=!0);if(ae&&(ve||(rt=[-.2,.42,.02,.08,0]),bt=!1,Ne.dy=.24+Math.sin(re*2.2)*.02),Kt&&!G.riding&&!G.down&&!De){let K=Ne.aMx,pe=Ne.aOx,ye=Ne.sY;ae&&(Ne.aMz=Ne.aOz=.08,Ne.eM=Ne.eO=-.12),at(),ve&&!ae&&(Ne.aMx+=K*.25,Ne.aOx+=pe*.25,Ne.sY+=ye)}if(At==="aion"&&Kt&&ve&&J>.9&&!G.riding&&!G.down){let K=Math.sin(Wt);He({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+K*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+K*.04}),ae||(Ne.sX=.5,Ne.hdX=-.36)}let h=0,I=0;if(Ft){Ft.t+=S;let K=Ft.t/Ft.dur;K>=1?Ft=null:(se[Ft.name](K,Ft.c),Ft.name==="spin"&&(h=Ci(K)*6.2832*Ft.turns),Ft.name==="roll"&&(I=Ci(K)*6.2832,rt=[-1.7,2.2,-1.7,2.2,0],bt=!1),Ft.name==="flip"&&(I=-Ci(K)*6.2832,rt=[-1.75,2.25,-1.75,2.25,0],bt=!1),Ft.name==="dash"&&!ae&&(rt=[-1.05,.55,.75,.95,0],bt=!1),Ft.name==="slam"&&K<.45&&(rt=[-.5,1.1,.3,.9,0],bt=!1))}let b=1-Math.exp(-(Ft||G.riding?30:De?16:12)*S);for(let K in xt)xt[K]+=(Ne[K]-xt[K])*b;N.armM.rotation.set(xt.aMx,xt.aMy,-xt.aMz),N.armO.rotation.set(xt.aOx,xt.aOy,xt.aOz),N.elbowM.rotation.x=xt.eM,N.elbowO.rotation.x=xt.eO,j.rotation.x=xt.sX,j.rotation.y=xt.sY,W.position.y=O+xt.dy,W.rotation.y=h,W.rotation.x=I,W.rotation.z=xt.rZ,Oe.rotation.set(xt.hdX,xt.hdY+(ve||Ft||ne==="timide"?0:Math.sin(re*.4)*.08),xt.hdZ);let z=bt?1:1-Math.exp(-(rt?16:8)*S),Y=rt||[0,0,0,0,0];if(N.legM.rotation.x+=(Y[0]-N.legM.rotation.x)*z,N.kneeM.rotation.x+=(Y[1]-N.kneeM.rotation.x)*z,N.legO.rotation.x+=(Y[2]-N.legO.rotation.x)*z,N.kneeO.rotation.x+=(Y[3]-N.kneeO.rotation.x)*z,N.legM.rotation.z+=(-Y[4]-N.legM.rotation.z)*z,N.legO.rotation.z+=((Y[5]??Y[4])-N.legO.rotation.z)*z,N.orb){let K=N.orb;Kt?K.position.set(-.26,.42+Math.sin(re*2)*.03,.34):K.position.set(-.3,.52+Math.sin(re*2)*.03,.12),K.rotation.y=re}N.aura&&(N.aura.rotation.z=re*.5,N.aura.material.opacity=.42+Math.sin(re*2.2)*.14,N.auraCol.material.opacity=.08+Math.sin(re*1.7)*.03);for(let K of D)K(re);for(let K=0;K<gt.length;K++){let pe=gt[K];if(pe.visible=ae,ae){let ye=1+.28*Math.sin(re*13+K*1.9)+.14*Math.sin(re*21+K),we=Math.min(1,J/2);pe.scale.set(.04,(.075+we*.04)*ye,.04),pe.rotation.x=-.1-we*.45}}let X=yt&&ne==="digne";if(ut.visible=X,X){let K=ut.children;K[0].material.opacity=.13+Math.sin(re*5)*.05,K[0].scale.set(1+Math.sin(re*7)*.04,1,1+Math.sin(re*7)*.04);for(let pe=1;pe<=9;pe++){let ye=(re*.9+pe*.37)%1,we=pe*2.4+re*.6;K[pe].position.set(Math.cos(we)*.44,ye*2.2,Math.sin(we)*.44),K[pe].scale.y=.6+ye}K[1].material.opacity=.5+Math.sin(re*6)*.2,K[10].rotation.y=-re,K[10].scale.setScalar(1+Math.sin(re*5)*.06)}let ie=Le.userData.blink;ie&&(k-=S,k<0&&(ie(k>-.11),k<=-.11&&(k=2.2+Math.random()*4)))}}}function td(i,e,t={}){let n=new ds({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=Yt,n.toneMapping=hi,n.shadowMap.enabled=!0,n.shadowMap.type=Vr;let s=new Yi,r=new qi(n);s.environment=r.fromScene(new sr,.04).texture,r.dispose();let a=new dn(28,1,.1,50);s.add(new er(16777215,9078440,1.15));let o=new Ji(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let l=new Ji(58879,1.1);l.position.set(-3,2,-3),s.add(l);let c=new Ji(10185727,.9);c.position.set(3,1.5,-3),s.add(c);let u=document.createElement("canvas");u.width=u.height=256;let d=u.getContext("2d"),p=d.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=p,d.fillRect(0,0,256,256),d.strokeStyle="rgba(0,240,255,.5)",d.lineWidth=2,d.beginPath(),d.arc(128,128,84,0,7),d.stroke(),d.strokeStyle="rgba(0,240,255,.2)",d.beginPath(),d.arc(128,128,108,0,7),d.stroke();let f=new ze(new ui(1.5,48),new Nt({map:new Bn(u),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,s.add(f);let x=new ze(new ui(1.5,32),new uo({opacity:.45}));x.rotation.x=-Math.PI/2,x.position.y=.002,x.receiveShadow=!0,s.add(x);let _=new St;s.add(_);let g=null,m=null,M=t.zoom||"body",v=t.yaw??-.35,E=null,D=0,P=!1,R=!!t.walk,F={y:.9,d:4.6};function T(W){g&&(_.remove(g.group),ri(g.group)),m&&(_.remove(m.group),ri(m.group),m=null),g=_s(W),_.add(g.group),W.armed&&g.setArmed(!0),W.mount&&fi[W.mount]?(m=fi[W.mount].make(),wo(m.group),_.add(m.group),g.group.position.set(0,m.seat.y-g.seatDrop,m.seat.z),g.wide=m.wide):g.group.position.set(0,0,0)}T(e);function y(){let W=i.clientWidth||300,j=i.clientHeight||400;(i.width!==Math.round(W*n.getPixelRatio())||i.height!==Math.round(j*n.getPixelRatio()))&&(n.setSize(W,j,!1),a.aspect=W/j,a.updateProjectionMatrix())}let U=W=>{E={x:W.clientX,yaw:v},D=performance.now(),i.setPointerCapture&&i.setPointerCapture(W.pointerId)},V=W=>{E&&(v=E.yaw+(W.clientX-E.x)*.012,D=performance.now())},ce=()=>{E=null};i.addEventListener("pointerdown",U),i.addEventListener("pointermove",V),i.addEventListener("pointerup",ce),i.addEventListener("pointercancel",ce),i.style.touchAction="pan-y";let O=performance.now();function w(W){if(P)return;requestAnimationFrame(w);let j=Math.min(.05,(W-O)/1e3);if(O=W,!i.isConnected||i.offsetParent===null)return;y(),t.spin&&M!=="face"&&!E&&W-D>2500&&(v+=j*.25),_.rotation.y=v;let N=g.height+(m?m.seat.y-g.seatDrop:0),ee=a.aspect,Me=Math.max(N,1.8),ge=g.scale||1,Pe=M==="face"?{y:N-.15*ge,d:1.12*Math.max(.75,ge)/Math.min(1,ee*.9)}:m?{y:N*.5,d:Math.max(N*2.6,3.4/Math.min(1,ee*1.2))}:{y:Me*.5,d:Me*2.35/Math.min(1,ee*1.9)};F.y+=(Pe.y-F.y)*Math.min(1,j*6),F.d+=(Pe.d-F.d)*Math.min(1,j*6),a.position.set(0,F.y+(M==="face"?.02:.25),F.d),a.lookAt(0,F.y,0),t.freeze||(g.update(j,{speed:R&&!m?2:0,riding:!!m,wide:g.wide}),m&&m.update(j,R?.8:0)),n.render(s,a)}return requestAnimationFrame(w),{set:T,setZoom(W){M=W},setArmed(W){g&&g.setArmed(W)},play(W,j,N,ee){g&&(g.setArmed(!0),g.play(W,j,N,ee))},get avatar(){return g},setWalk(W){R=W},setYaw(W){v=W,D=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){P=!0,i.removeEventListener("pointerdown",U),i.removeEventListener("pointermove",V),i.removeEventListener("pointerup",ce),ri(s),n.dispose()}}}var Co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yx=new $s(-1,1,1,-1,0,1),Rc=class extends Ot{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},Zx=new Rc,Qi=class{constructor(e){this._mesh=new ze(Zx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Po=class extends Vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$i.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zr=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Io=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Po(Co),this.copyPass.material.blending=ci,this.clock=new go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zr!==void 0&&(a instanceof Zr?n=!0:a instanceof Io&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Do=class extends Vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var nd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var hr=class i extends Vn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new it(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(r,a,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new Cn(r,a,{type:ni});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Cn(r,a,{type:ni});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=nd;this.highPassUniforms=$i.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Co;this.copyUniforms=$i.clone(u.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:En,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new it,this.oldClearAlpha=1,this.basic=new Nt,this.fsQuad=new Qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};hr.BlurDirectionX=new Te(1,0);hr.BlurDirectionY=new Te(0,1);var id={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Uo=class extends Vn{constructor(){super();let e=id;this.uniforms=$i.clone(e.uniforms),this.material=new fo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zo=[1,3,6,10,20],sd=120,rd=7,Cc=.12,Pc={templier:.992,"templier:2h":1.003,gladiateur:.987,"gladiateur:2h":1.001,"gladiateur:duo":1.041,rodeur:1.062,assassin:.998,"assassin:duo":1.019,sorcier:1.031,spiritualiste:1.127,clerc:1.002,aede:1.002,pistolero:.969,"pistolero:duo":.969,"pistolero:canon":1.015,ethertech:.983,barde:1.021,peintre:1.02},Jr=[{id:"feu",name:"Esprit de feu",color:16742954,hp:4,mult:.9,iv:1.2,aoe:3.6,sc:1},{id:"terre",name:"Esprit de terre",color:11569738,hp:10,mult:1.05,iv:1.4,aoe:3,sc:1.25,taunt:28,cc:{slow:[.3,2]}},{id:"vent",name:"Esprit de vent",color:10217680,hp:3,mult:.3,iv:.4,aoe:2.6,sc:.9},{id:"eau",name:"Esprit d\u2019eau",color:4892927,hp:4,mult:.75,iv:1,aoe:2.8,sc:1,heal:2}],$r=i=>i.busy??(i.cast??.25)+.2+(i.dmg&&i.dmg.hits>1?(i.dmg.hits-1)*(i.dmg.gap||.15):0);function ad(i,e,t,n,s){let r=od(i,e,t,n,s);return r.id=i+(e==="2h"?":2h":e==="cannon"?":canon":s?":duo":""),r}function od(i,e,t,n,s){let r=e==="2h",a={bow:"bow",gun:"shoot",cannon:"shoot",harp:"strum",magic:"cast",staff:"cast"}[e]||"slash",o=(l,c)=>({name:l,ult:2,exec:1,cast:.5,busy:.95,lock:.8,cc:c});switch(i){case"templier":return{role:"Tank",melee:!0,sustain:!0,passive:{guard:.35,block:n?.25:0},basic:r?{kind:"melee",anim:"heavy",dur:.5,hit:.56,mult:1.5,reach:3.3,arc:1.45}:{kind:"melee",anim:"slash",dur:.34,hit:.5,mult:1,reach:2.6,arc:1.3},skills:[{name:"Capture",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,kd:1.5}},{name:"Choc du bouclier",cd:10,anim:"heavy",cast:.3,dmg:{kind:"melee",mult:1.6,r:4.2,arc:1.6},cc:{kd:2.5}},{name:"Brise-armure",cd:14,anim:"slash",cast:.25,dmg:{kind:"melee",mult:1,r:4,arc:1.6},cc:{weak:[.3,8],aspd:[.3,8]}},{name:"Rempart inviolable",ult:1,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:3,r:7},cc:{kd:2},self:{inv:6,heal:25}},o("Ch\xE2timent",{kd:3})]};case"gladiateur":return{role:"Combattant de zone",melee:!0,sustain:!0,passive:{kdOnCrit:1.5,guard:.15},basic:r?{kind:"melee",anim:"heavy",dur:.52,hit:.56,mult:1.6,reach:t==="guisarme"?3.9:3.4,arc:1.9}:{kind:"melee",anim:"slash",dur:s?.26:.3,hit:.5,mult:s?.82:.95,reach:2.6,arc:1.6},skills:[{name:"Encha\xEEnement",cd:7,anim:"spin",cast:.12,turns:2,dmg:{kind:"melee",mult:[.9,1.2,1.8],hits:3,gap:.28,r:4.2,arc:1.9}},{name:"Onde entravante",cd:9,anim:"slam",cast:.34,lock:.3,dmg:{kind:"around",mult:1.3,r:7},cc:{slow:[.5,5]}},{name:"Posture de rage",cd:20,anim:"castUp",cast:.3,self:{atk:[.35,10]}},{name:"Tourbillon de guerre",ult:1,anim:"spin",cast:.12,turns:3,dmg:{kind:"around",mult:1.1,hits:5,gap:.17,r:6.5},self:{inv:1}},o("Ex\xE9cution")]};case"rodeur":return{role:"Archer",melee:!1,basic:{kind:"shot",anim:a,dur:.38,hit:.58,mult:.95,proj:"arrow",speed:60,range:34},skills:[{name:"Pi\xE8ge \xE0 pointes",cd:10,anim:"cast",cast:.2,special:"trap",dmg:{mult:2,r:4},cc:{root:4,slow:[.4,6],sil:4}},{name:"Tir de pr\xE9cision",cd:14,anim:a,cast:.3,dmg:{kind:"shot",mult:4.2,crit:1,pierce:1,size:1.8,proj:"arrow",speed:70}},{name:"Camouflage",cd:16,anim:"cast",cast:.1,busy:.2,self:{stealth:[4,2.2],aspd:[.3,8]}},{name:"Pluie de fl\xE8ches",ult:1,anim:a,cast:.4,dmg:{kind:"zone",mult:.75,hits:8,gap:.22,r:6},cc:{slow:[.5,4]}},o("Fl\xE8che du silence",{sil:6})]};case"assassin":return{role:"Furtif",melee:!0,sustain:!0,passive:{dodge:.2},basic:{kind:"melee",anim:"slash",dur:s?.2:.24,hit:.5,mult:.62,reach:2.1,arc:1.2},skills:[{name:"Embuscade",cd:6,anim:"slash",cast:.12,move:"tp",dmg:{kind:"target",mult:1.6,range:22},cc:{stun:1.5,root:2.5},self:{atk:[.25,3]}},{name:"Frappe runique",cd:9,anim:"slash",cast:.1,dmg:{kind:"melee",mult:.75,hits:3,gap:.14,r:2.8,arc:1.4},cc:{stun:1}},{name:"Dissimulation",cd:18,anim:"cast",cast:.1,busy:.2,self:{stealth:[8,3],reset:1}},{name:"Danse des mille lames",ult:1,anim:"spin",cast:.1,turns:3,dmg:{kind:"around",mult:.85,hits:6,gap:.14,r:5},self:{inv:1.2}},o("Assassinat")]};case"sorcier":return{role:"Mage de destruction",melee:!1,basic:{kind:"shot",anim:"cast",dur:.78,hit:.62,mult:2.4,proj:"bolt",speed:30,range:28,aoe:2.6,size:1.5,slowSelf:.35},skills:[{name:"Sommeil",cd:12,anim:"cast",cast:.35,area:{kind:"zone",r:4.5},cc:{sleep:6},color:12167423},{name:"Racines de glace",cd:9,anim:"cast",cast:.45,lock:.4,dmg:{kind:"zone",mult:1.5,r:5.5},cc:{root:4,slow:[.5,6],sil:4},color:9428223},{name:"M\xE9tamorphose",cd:16,anim:"cast",cast:.4,area:{kind:"target"},cc:{tree:5},color:9166954},{name:"M\xE9t\xE9ore",ult:1,anim:"castUp",cast:1.1,lock:1.1,meteor:1,dmg:{kind:"zone",mult:6,r:7}},o("N\xE9ant")]};case"spiritualiste":return{role:"Invocateur",melee:!1,basic:{kind:"shot",anim:"cast",dur:.5,hit:.5,mult:.7,proj:"bolt",speed:32,range:26,dot:[.3,6]},skills:[{name:"Esprit \xE9l\xE9mentaire",cd:10,anim:"castUp",cast:.4,special:"spirit"},{name:"Peur",cd:12,anim:"cast",cast:.35,area:{kind:"around",r:8},cc:{fear:4}},{name:"Absorption",cd:10,anim:"cast",cast:.35,dmg:{kind:"target",mult:1.6,steal:60,range:26},cc:{sap:[.3,8]},self:{shield:[20,8]}},{name:"Fureur \xE9l\xE9mentaire",ult:1,anim:"castUp",cast:.5,special:"enrage",eq:6,dmg:{kind:"zone",mult:3,r:6}},o("Marche des ombres",{fear:3})]};case"clerc":return{role:"Soigneur",melee:!1,passive:{guard:.2,rez:90},basic:{kind:"shot",anim:"cast",dur:.5,hit:.5,mult:1.5,proj:"bolt",speed:32,range:26,aoe:2.6},skills:[{name:"Soin \xE9clair",cd:4,anim:"cast",cast:.1,busy:.25,self:{heal:25,hot:[3,6]}},{name:"Ch\xE2timent paralysant",cd:10,anim:"cast",cast:.35,dmg:{kind:"zone",mult:1.7,r:4.5},cc:{para:3}},{name:"Grande gu\xE9rison",cd:12,anim:"castUp",cast:1.3,lock:1.3,self:{heal:70}},{name:"Jugement divin",ult:1,anim:"castUp",cast:.7,lock:.7,dmg:{kind:"zone",mult:5,r:7},cc:{root:4}},{name:"Barri\xE8re sacr\xE9e",ult:2,anim:"castUp",cast:.3,self:{inv:6,heal:100,guard:[.5,12]}}]};case"aede":return{role:"Soutien",melee:!0,sustain:!0,passive:{atk:.1,regen:.01,mantra:1},basic:{kind:"melee",anim:"heavy",dur:.4,hit:.56,mult:1,reach:3.3,arc:1.8},skills:[{name:"Jugement in\xE9luctable",cd:8,anim:"cast",cast:.25,dmg:{kind:"shot",mult:1.5,proj:"bolt",range:22,speed:40},cc:{stun:2.5}},{name:"Parole de vie",cd:5,anim:"cast",cast:.1,busy:.25,self:{heal:18}},{name:"Chant d\u2019inspiration",cd:16,anim:"castUp",cast:.3,self:{crit:[.4,10],aspd:[.2,10]},area:{kind:"around",r:9},cc:{aspd:[.4,8]}},{name:"Onde de choc",ult:1,anim:"slam",cast:.4,lock:.5,dmg:{kind:"around",mult:4.5,r:6.5},cc:{kd:2}},{name:"Mantra de victoire",ult:2,anim:"castUp",cast:.3,self:{atk:[.5,8],crit:[1,8],heal:40}}]};case"pistolero":return{role:"Tireur mobile",melee:!1,basic:e==="cannon"?{kind:"shot",anim:"shoot",dur:.5,hit:.36,mult:1.5,proj:"shell",speed:36,range:30,aoe:2.6,bounce:1}:{kind:"shot",anim:a,dur:.18,hit:.34,mult:.5,proj:"bullet",speed:85,range:30,bounce:2},skills:[{name:"Canon magique",cd:7,anim:a,cast:.3,lock:.25,dmg:{kind:"shot",mult:4.2,proj:"shell",aoe:3.8,size:2,speed:36},cc:{stun:1.5}},{name:"Tir entravant",cd:9,anim:a,cast:.2,dmg:{kind:"zone",mult:1.1,r:5},cc:{slow:[.6,5],root:2}},{name:"Saut de recul",cd:6,anim:"flip",cast:.05,move:"back",dmg:{kind:"shot",mult:.8,hits:3,gap:.08,proj:"bullet",speed:85},self:{inv:.5,atk:[.2,4]}},{name:"D\xE9luge de plomb",ult:1,anim:a,cast:.1,dmg:{kind:"shot",mult:.55,hits:12,gap:.07,proj:"bullet",speed:85}},o("Tir fatal")]};case"ethertech":return{role:"Pilote de Mecha",melee:!0,sustain:!0,basic:{kind:"melee",anim:"slash",dur:.32,hit:.5,mult:.9,reach:2.8,arc:1.3},mecha:{hp:2.5,dur:20,basic:{kind:"melee",anim:"punch",dur:.46,hit:.5,mult:1.7,reach:4.6,arc:1.7,mech:1}},skills:[{name:"Mecha",cd:12,anim:"castUp",cast:.5,special:"mecha"},{name:"Grappin",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,stun:1.5}},{name:"Champ d\u2019entrave",cd:10,anim:"slam",cast:.3,dmg:{kind:"around",mult:1.3,r:6.5},cc:{root:3}},{name:"Salve de missiles",ult:1,anim:"castUp",cast:.4,dmg:{kind:"zone",mult:1,hits:5,gap:.16,r:5.5},cc:{stun:1}},o("Annihilation",{stun:2})]};case"barde":return{role:"Musicien",melee:!1,basic:{kind:"shot",anim:a,dur:.4,hit:.45,mult:.7,proj:"wave",speed:22,range:22,thru:1,note:1},skills:[{name:"Accord final",cd:7,anim:a,cast:.25,special:"notes",dmg:{kind:"target",mult:1.2,range:24}},{name:"Berceuse",cd:12,anim:a,cast:.4,area:{kind:"around",r:7},cc:{sleep:5},color:12167423},{name:"M\xE9lodie de vie",cd:9,anim:a,cast:.3,self:{heal:22,gauge:30,shield:[15,8]},area:{kind:"around",r:8},cc:{slow:[.4,5]}},{name:"Symphonie",ult:1,anim:"castUp",cast:.5,eq:3,dmg:{kind:"around",mult:4,r:8},cc:{notes:5}},o("Requiem")]};case"peintre":return{role:"Contr\xF4le de zone",melee:!1,basic:{kind:"shot",anim:"slash",dur:.34,hit:.5,mult:.8,proj:"paint",speed:32,range:13,aoe:1.2,every:{n:3,mult:1.6,lock:.3}},skills:[{name:"Marque de couleur",cd:8,anim:"slash",cast:.2,dmg:{kind:"target",mult:1,range:16},cc:{weak:[.35,8],slow:[.3,5]}},{name:"Lien gravitationnel",cd:12,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:1.2,r:9},cc:{pull:1,root:2.5}},{name:"Toile d\u2019absorption",cd:14,anim:"cast",cast:.2,busy:.3,self:{absorb:[.4,8]}},{name:"Fr\xE9n\xE9sie chromatique",ult:1,anim:"castUp",cast:.4,eq:3,dmg:{kind:"around",mult:3,r:7},cc:{para:2},self:{aspd:[.4,10],crit:[.4,10]}},o("Chef-d\u2019\u0153uvre",{para:3})]}}return od(e==="bow"||e==="gun"||e==="cannon"||e==="magic"||e==="harp"?"rodeur":"gladiateur",e,t,n,s)}function ld(i,e=30){let s=i.passive||{},r=.01,a=0,o=0,l=0,c=0,u=0,d=0,p=-1,f=0,x=null,_=0,g=[0,0,0],m=[0,0],M=[0,0],v=[0,0],E=[0,0],D={},P=y=>a<y[1]?y[0]:0,R=(y,U={})=>{let V=y*(1+(s.atk||0)+P(m))*(1+P(E)),ce=!!U.crit;f&&!U.pet&&(V*=f,ce=!0,f=0),V*=ce?1.6:1+Math.min(1,.1+P(M))*(1.6-1),o+=V},F=y=>{y&&(y.atk&&(m[0]=y.atk[0],m[1]=a+y.atk[1]),y.crit&&(M[0]=y.crit[0],M[1]=a+y.crit[1]),y.aspd&&(v[0]=y.aspd[0],v[1]=a+y.aspd[1]),y.stealth&&(f=y.stealth[1]),y.reset!=null&&(g[y.reset-1]=0))},T=y=>{y&&(y.weak&&(E[0]=y.weak[0],E[1]=a+y.weak[1]),y.dot&&(D[y.key||"x"]=[y.dot[0],a+y.dot[1]]),y.notes&&(u=Math.min(5,u+y.notes),d=a+8))};for(;a<e;){for(let y in D)a<D[y][1]&&(o+=D[y][0]*(1+P(E))*(1+(s.atk||0))*(1+.1*(1.6-1))*r);if(u&&a<d&&(o+=u*Cc*(1+P(E))*(1+.1*(1.6-1))*r),x&&(_+=r,_>=x.iv&&(_-=x.iv,R(x.mult,{pet:1}))),a>=l){let y=-1;for(let U=0;U<3;U++)if(i.skills[U]&&g[U]<=a){y=U;break}if(y>=0){let U=i.skills[y],V=U.dmg;if(l=a+$r(U),g[y]=a+U.cd,U.special==="spirit"?(x=Jr[0],_=0):U.special==="mecha"&&(a<p||(p=a+i.mecha.dur),g[y]=p+U.cd),V){let ce=V.hits||1,O=0;U.special==="notes"&&(O=.7*u,u=0);for(let w=0;w<ce;w++)R((Array.isArray(V.mult)?V.mult[w]:V.mult)+(w===0?O:0),{crit:V.crit})}T(U.cc),F(U.self)}else{let U=a<p?i.mecha.basic:i.basic,V=++c,ce=U.mult,O=U.dur/(1+P(v));U.every&&V%U.every.n===0&&(ce=U.every.mult,O+=U.every.lock*.5),l=a+O,R(ce),U.dot&&(D.basic=[U.dot[0],a+U.dot[1]]),U.note&&(u=Math.min(5,u+1),d=a+8)}}a+=r}return o}var cd=i=>{let e=i.dmg;if(!e)return i.eq||0;let t=e.hits||1,n=0;for(let s=0;s<t;s++)n+=Array.isArray(e.mult)?e.mult[s]:e.mult;return n+(i.eq||0)};var st={x:-200,z:70,r:22.4,wall:33.6,gate:.17},Jx={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},Ic=[16734842,4704511,16765514,9166954],$x={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.5,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.62,rest:1,h:2.05},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},Kx=[[36,252,"wolf",2,2],[-34,318,"wolf",3,3],[92,296,"brute",4,1],[150,-246,"shade",4,2],[58,-292,"wolf",5,3],[-176,-160,"shade",6,2],[-300,110,"brute",7,1],[262,130,"wolf",3,2],[-120,240,"shade",5,2],[330,-120,"brute",8,1]],jx=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],Qx=new H(0,1,0),ur=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function hd(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:l,toast:c,cb:u}=i,d=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.cls&&s.cls.id||"",f=Jx[p]||8386303,x=s.hero&&s.hero.main&&s.hero.main.type,_=s.hero&&s.hero.off&&s.hero.off.type,g=ad(p,n.cat,x,_==="bouclier",n.dual),m=g.passive||{},M=g.skills,v=sd/ld(g)*(Pc[g.id]||Pc[p]||1),E=d.atk*v,D=M[3]?rd/(cd(M[3])*v):1,P=[!1].concat(M.map((h,I)=>(s.level||1)<zo[I])),R=g.basic,F=R.kind==="melee",T=p==="assassin"||p==="pistolero",y={hp:d.hp,max:d.hp,shield:0,shieldT:0,charge:0,cds:[0,0,0,0,0,0],cdMax:[1,1,1,1,1,1],busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0,dealt:0,atkB:0,atkT:0,critB:0,critT:0,aspdB:0,aspdT:0,guardB:0,guardT:0,absorbB:0,absorbT:0,hot:0,hotT:0,stealthT:0,stealthK:1,rezCd:0,slowK:1,slowT:0,mecha:null,focus:null,focusT:0,spirit:-1},U=Math.min(60,Math.max(0,s.regen||0)),V=[],ce=[],O=[],w=[],W=[],j=[],N={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},ee={shake:0,held:!1,enemies:V,arena:N,pl:y,allies:W,kit:g,norm:v},Me=(h,I)=>w.push({t:h,fn:I}),ge=(h,I,b,z)=>Math.hypot(h-b,I-z),Pe=(h,I)=>Math.atan2(h-t.x,I-t.z),le=(h,I)=>ge(h,I,st.x,st.z)<st.r,xe={arc:new ii(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new ii(.84,1,48).rotateX(-Math.PI/2),tube:new xn(1,1,1,24,1,!0).translate(0,.5,0),ball:new Jn(1,14,10),arrow:new ln(.04,1,6).rotateX(Math.PI/2),tracer:new xn(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let h in xe)xe[h].userData.shared=!0;let Ee=(h,I=.9,b=!0)=>new Nt({color:h,transparent:!0,opacity:I,side:en,blending:b?En:ki,depthWrite:!1,fog:!1});function Ke(h,I,b){return e.add(h),O.push({obj:h,t:0,dur:I,upd:b}),h}function Fe(h){e.remove(h),h.traverse(I=>{I.material&&I.material.dispose(),I.geometry&&!I.geometry.userData.shared&&I.geometry.dispose()})}function Ze(h,I,b,z,Y,X,ie,K=.24){let pe=new St;pe.position.set(h,I,b),pe.rotation.y=z;let ye=new ze(xe.arc,Ee(ie));ye.rotation.z=Y,pe.add(ye),Ke(pe,K,we=>{ye.material.opacity=.95*(1-we),ye.scale.setScalar(X*(.82+we*.3)),ye.rotation.y=(we-.5)*.9})}function Oe(h,I,b,z,Y,X,ie=.45,K=.9){let pe=new ze(xe.ring,Ee(z,K));pe.position.set(h,I+.1,b),Ke(pe,ie,ye=>{pe.scale.setScalar(Y+(X-Y)*(1-(1-ye)*(1-ye))),pe.material.opacity=K*(1-ye*ye)})}function We(h,I,b,z,Y,X,ie=.5){let K=new ze(xe.tube,Ee(z,.55));K.position.set(h,I,b),Ke(K,ie,pe=>{let ye=Y*(1-pe*.55);K.scale.set(ye,X*Math.min(1,pe*5+.1),ye),K.material.opacity=.6*(1-pe)})}function Le(h,I,b,z,Y,X=.25){let ie=new ze(xe.ball,Ee(z,.7));ie.position.set(h,I,b),Ke(ie,X,K=>{ie.scale.setScalar(Y*(.4+K*.8)),ie.material.opacity=.7*(1-K)})}function B(h,I,b,z,Y=12,X=5,ie=.5){let K=new Float32Array(Y*3),pe=new Float32Array(Y*3);for(let Ye=0;Ye<Y;Ye++){let It=Math.random()*6.2832,Ut=Math.random()*1.3-.2,Xt=X*(.4+Math.random()*.8);pe[Ye*3]=Math.cos(It)*Math.cos(Ut)*Xt,pe[Ye*3+1]=Math.sin(Ut)*Xt+1.5,pe[Ye*3+2]=Math.sin(It)*Math.cos(Ut)*Xt,K[Ye*3]=h,K[Ye*3+1]=I,K[Ye*3+2]=b}let ye=new Ot;ye.setAttribute("position",new an(K,3));let we=new io(ye,new Ur({color:z,size:l?.2:.28,transparent:!0,opacity:1,blending:En,depthWrite:!1,fog:!1}));we.frustumCulled=!1;let ft=0;Ke(we,ie,Ye=>{let It=(Ye-ft)*ie;ft=Ye;for(let Ut=0;Ut<Y*3;Ut+=3)K[Ut]+=pe[Ut]*It,K[Ut+1]+=pe[Ut+1]*It,K[Ut+2]+=pe[Ut+2]*It,pe[Ut+1]-=9*It;ye.attributes.position.needsUpdate=!0,we.material.opacity=1-Ye})}let Re=new H;function de(h,I,b,z,Y){if(Re.set(h,I,b).project(a),Re.z>1||Math.abs(Re.x)>1.1)return;let X=document.createElement("span");X.className="ew-num "+(Y||""),X.textContent=z,X.style.left=(Re.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",X.style.top=(-Re.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(X),setTimeout(()=>X.remove(),850)}let Se=new ze(xe.ball,Ee(8378623,.16));Se.scale.setScalar(1.25),Se.visible=!1,e.add(Se);let he=new ze(xe.ring,Ee(f,.7));he.visible=!1,e.add(he);function Be(h){let I=h.barCv.getContext("2d");I.clearRect(0,0,64,8),I.fillStyle="rgba(0,0,0,.75)",I.fillRect(0,0,64,8),I.fillStyle=h.type==="dummy"?"#ffd479":h.boss?"#ff4d6d":"#ff8a5a",I.fillRect(1,1,62*Math.max(0,Math.min(1,h.hp/h.max)),6),h.barTex.needsUpdate=!0}function Ce(h,I,b,z=1,Y={}){let X=$x[h],ie=Math.pow(1.2,z-1),K={type:h,T:X,x:I,z:b,y:r(I,b),yaw:Y.yaw??Math.random()*6.28,hp:Math.round(X.hp*ie),atk:X.atk*Math.pow(1.16,z-1),def:4*Math.pow(1.15,z-1),spd:X.spd,range:X.range,rad:X.rad,state:Y.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!X.boss,home:[I,b],wild:Y.wild||null,arena:!!Y.arena,lvl:z,lunge:0,n:0,wobT:0,wT:0,rootT:0,slowT:0,slowK:0,silT:0,weakT:0,weakK:0,aspdT:0,aspdK:0,sapT:0,sapK:0,notes:0,noteT:0,noteAcc:0,kd:!1,kdCd:0,zT:0};K.max=K.hp;let pe=new St;if(K.obj=pe,h==="dummy"){let ye=new Qt({color:6965802,roughness:.9}),we=new Qt({color:13481066,roughness:1}),ft=new St;K.wob=ft,pe.add(new ze(new xn(.07,.1,1,8).translate(0,.5,0),ye)),ft.position.y=.95,ft.add(new ze(new xn(.27,.2,.78,10).translate(0,.42,0),we),new ze(new Jn(.19,10,8).translate(0,.98,0),we),new ze(new Pn(1.15,.09,.09).translate(0,.62,0),ye));let Ye=new ze(new ui(.12,16).translate(0,.46,.262),new Nt({color:12597547}));ft.add(Ye),pe.add(ft),pe.traverse(It=>{It.isMesh&&(It.castShadow=!0)})}else if(h==="shade"||h==="champion"){let ye=h==="champion";K.av=_s({look:{gender:"m",height:ye?1.5:1+Math.random()*.08,build:ye?1.2:1,shoulders:ye?1.14:1,hair:ye?"brosse":"court"},outfit:{cut:ye?"plate":"coat",c:["#1a1626","#0e0c16","#3a2a5a"]},armor:ye?{casque:5,plastron:5,jambieres:5}:{},main:{type:ye?"espadon":Math.random()<.5?"epee":"guisarme",r:ye?5:3},fx:{shadow:ye?"#2a1234":"#17152c",eyes:ye?"#ff4d6d":"#c8b6ff",lod:!0}}),K.av.setArmed(!0),pe.add(K.av.group),K.model=K.av.group}else{let ye=$u[h]();K.beast=ye,pe.add(ye.group),K.model=ye.group}return K.mats=[],pe.traverse(ye=>{ye.isMesh&&ye.material&&ye.material.emissive&&!K.mats.includes(ye.material)&&K.mats.push(ye.material)}),K.mats.forEach(ye=>{ye.userData.e0=ye.emissive.getHex(),ye.userData.i0=ye.emissiveIntensity}),K.barCv=document.createElement("canvas"),K.barCv.width=64,K.barCv.height=8,K.barTex=new Bn(K.barCv),K.bar=new fs(new Zi({map:K.barTex,transparent:!0,depthWrite:!1,fog:!1})),K.bar.scale.set(K.boss?2.6:1.3,K.boss?.22:.14,1),K.bar.position.y=X.h+.3,K.bar.visible=h!=="dummy",pe.add(K.bar),Be(K),pe.position.set(I,K.y,b),pe.rotation.y=K.yaw,e.add(pe),V.push(K),!Y.quiet&&h!=="dummy"&&(We(I,K.y,b,6962431,1.2+K.rad,6,.7),Oe(I,K.y,b,9133302,.3,2.4+K.rad,.55)),K}function L(h){let I=V.indexOf(h);if(I>=0&&V.splice(I,1),e.remove(h.obj),h.barTex.dispose(),ri(h.obj),h.wild){let b=h.wild;b.es=b.es.filter(z=>z!==h),!b.es.length&&h.state==="dead"&&(b.t=45)}}function C(h){h.state!=="dead"&&($e(h),h.state="dead",h.t=0,h.hp=0,Be(h),B(h.x,h.y+h.T.h*.5,h.z,9133302,h.boss?40:18,6,.7),Oe(h.x,h.y,h.z,12167423,.4,h.boss?7:3,.6),h.boss&&(ee.shake=Math.max(ee.shake,.5),c(h.T.name+" terrass\xE9")))}let Q=h=>{y.charge=Math.min(100,y.charge+h)},ue=h=>{h<=0||y.down>0||(y.hp=Math.min(y.max,y.hp+h),de(t.x,t.y+2.1,t.z,"+"+h,"heal"))},be=()=>(m.atk||0)+(y.atkT>0?y.atkB:0),_e=(h,I,b)=>de(h.x,h.y+h.T.h+.35,h.z,I,b||"info");function $e(h){h.treeM&&(h.obj.remove(h.treeM),h.treeM.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&I.material.dispose()}),h.treeM=null,h.model&&(h.model.visible=!0))}function Ie(h,I,b,z){if(h.state==="dead")return;$e(h);let Y=h.state===I;h.state=I,h.stun=Math.max(Y?h.stun:0,b),h.kd=!1,_e(h,z)}function Xe(h,I,b){if(!I||h.state==="dead"||(I.weak&&(h.weakK=I.weak[0],h.weakT=I.weak[1],_e(h,"Vuln\xE9rable")),I.dot&&(h.dots=h.dots.filter(Y=>Y.k!==b),h.dots.push({k:b,v:E*(1+be())*I.dot[0],n:I.dot[1],t:1})),I.notes&&(h.notes=Math.min(5,h.notes+I.notes),h.noteT=8),h.type==="dummy"))return;let z=h.boss?.5:1;if(I.pull&&!h.boss){let Y=t.yaw+(Math.random()-.5)*.8,X=1.7+h.rad;Ze(t.x,t.y+1.1,t.z,Pe(h.x,h.z),1.57,ge(t.x,t.z,h.x,h.z),16777215,.25),h.x=t.x+Math.sin(Y)*X,h.z=t.z+Math.cos(Y)*X}if(I.kd&&(Ie(h,"stun",I.kd*z,"\xC0 terre"),h.kd=!0),I.stun&&Ie(h,"stun",I.stun*z,"\xC9tourdi"),I.para&&Ie(h,"stun",I.para*z,"Paralys\xE9"),I.sleep&&Ie(h,"sleep",I.sleep*z,"Endormi"),I.fear&&Ie(h,"fear",I.fear*z,"Apeur\xE9"),I.tree)if(h.boss)Ie(h,"stun",1.5,"\xC9tourdi");else{Ie(h,"tree",I.tree,"M\xE9tamorphos\xE9");let Y=new St,X=new ze(new xn(.14,.2,.9,7).translate(0,.45,0),new Qt({color:5913890,roughness:1})),ie=new ze(new ln(.75,1.5,8).translate(0,1.55,0),new Qt({color:5216826,roughness:1}));Y.add(X,ie),h.obj.add(Y),h.treeM=Y,h.model&&(h.model.visible=!1),B(h.x,h.y+1,h.z,9166954,16,4,.5)}I.root&&(h.rootT=Math.max(h.rootT,I.root*z),_e(h,"Enracin\xE9"),Oe(h.x,h.y,h.z,9166954,h.rad+.6,h.rad+.7,I.root*z,.8)),I.slow&&(h.slowK=I.slow[0],h.slowT=I.slow[1],_e(h,"Ralenti")),I.sil&&(h.silT=Math.max(h.silT,I.sil*z),_e(h,"Silence")),I.aspd&&(h.aspdK=I.aspd[0],h.aspdT=I.aspd[1],_e(h,"Gestes ralentis")),I.sap&&(h.sapK=I.sap[0],h.sapT=I.sap[1],_e(h,"Affaibli"))}function Qe(h,I,b={}){if(h.state==="dead")return 0;let z=E*(1+be())*I*(ee.avg?1:.9+Math.random()*.2),Y=!!b.crit;y.stealthT>0&&!b.pet&&(z*=y.stealthK,Y=!0,ot(0),_e(h,"Surprise","crit")),h.state==="sleep"&&(z*=1.5,h.state="chase",h.stun=0);let X=d.crit+(y.critT>0?y.critB:0);if(ee.avg?z*=Y?d.critDmg:1+Math.min(1,X)*(d.critDmg-1):(Y=Y||Math.random()<X,Y&&(z*=d.critDmg)),b.pierce||(z*=100/(100+h.def)),h.weakT>0&&(z*=1+h.weakK),z=Math.max(1,Math.round(z)),y.dealt+=z,h.type==="dummy"?h.wobT=.5:h.hp-=z,b.pet||(y.focus=h,y.focusT=6),h.flash=.09,Be(h),de(h.x,h.y+h.T.h*.85,h.z,(Y?"\u2726 ":"")+z,Y?"crit":""),B(h.x,h.y+h.T.h*.55,h.z,b.color||f,Y?12:6,4,.35),b.acc&&(b.acc.d+=z),b.steal&&ue(Math.round(z*b.steal/100)),b.cc&&Xe(h,b.cc,b.key),h.type!=="dummy"){if(Y&&m.kdOnCrit&&h.kdCd<=0&&h.hp>0&&(h.kdCd=4,Xe(h,{kd:m.kdOnCrit})),!h.boss&&h.rootT<=0){let ie=Math.atan2(h.x-t.x,h.z-t.z),K=b.kb??.3;h.x+=Math.sin(ie)*K,h.z+=Math.cos(ie)*K}h.state==="idle"&&(h.state="chase"),h.hp<=0&&C(h)}return z}function pt(h,I=1){if(y.down>0||y.inv>0)return;let b=Math.max(1,Math.round(h.atk*I*(h.sapT>0?1-h.sapK:1)*(.9+Math.random()*.2)*100/(100+d.def)));if(y.mecha){y.mecha.hp-=b,y.lastHit=0,de(t.x,t.y+3.4,t.z,"-"+b,"info"),ee.shake=Math.max(ee.shake,.12),y.mecha.hp<=0&&ct(!0);return}if(Math.random()<Math.min(.75,d.dodge+(m.dodge||0))){de(t.x,t.y+2.1,t.z,"Esquive","info");return}if(m.block&&Math.random()<m.block){de(t.x,t.y+2.1,t.z,"Bloqu\xE9","info"),Le(t.x,t.y+1.1,t.z,16777215,.7,.15);return}if(b=Math.max(1,Math.round(b*(1-Math.min(.8,(m.guard||0)+(y.guardT>0?y.guardB:0))))),y.absorbT>0){let z=Math.round(b*y.absorbB);b-=z,ue(z)}if(y.shield>0){let z=Math.min(y.shield,b);if(y.shield-=z,b-=z,b<=0){de(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}if(!(b<=0)){if(y.hp-=b,y.lastHit=0,Q(2),de(t.x,t.y+2.1,t.z,"-"+b,"hurt"),ee.shake=Math.max(ee.shake,.22),n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),Me(.2,()=>o.classList.remove("ew-hit")),y.hp<=0&&m.rez&&y.rezCd<=0){y.rezCd=m.rez,y.hp=Math.round(y.max*.5),y.inv=2.5,We(t.x,t.y,t.z,16773808,1.6,12,.9),Oe(t.x,t.y,t.z,16773808,.4,5,.7),c("R\xE9surrection","De nouveau disponible dans "+m.rez+" s");return}y.hp<=0&&(y.hp=0,y.down=2.8,t.down=!0,y.queue=!1,ot(0),c("Vaincu",N.on?"Vague "+N.wave+" atteinte":"Les ombres se dispersent"))}}let me=null;function ot(h,I){let b=h>0;y.stealthT=h,b&&(y.stealthK=I),me||(me=[],n.group.traverse(z=>{if(!(!z.isMesh||!z.material||z.userData.ink))for(let Y of Array.isArray(z.material)?z.material:[z.material])!Y.transparent&&!me.includes(Y)&&me.push(Y)}));for(let z of me)z.transparent=b,z.opacity=b?.3:1,z.needsUpdate=!0;for(let z of n.inks||[])z.visible=!b}function mt(h){for(let ft of W.slice())et(ft);let I=new St,b=new Nt({color:h.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),z=Ee(h.color,.13),Y=new Nt({color:16777215,fog:!1}),X=(ft,Ye,It,Ut,Xt,Un)=>{let hn=new ze(ft,Ye);return hn.position.set(It,Ut,Xt),(Un||I).add(hn),hn};X(new ln(.95,2.6,12).rotateX(Math.PI),b,0,1.3,0),X(xe.ball,b,0,2.75,0).scale.set(1.2,1.05,.85),X(xe.ball,z,0,2.7,0).scale.setScalar(1.7),X(xe.ball,b,0,3.95,.05).scale.setScalar(.52);for(let ft of[-1,1])X(xe.ball,Y,ft*.2,4,.47).scale.set(.1,.05,.05),X(new ln(.14,.6,6),b,ft*.34,4.5,0).rotation.z=-ft*.5;let ie=[];for(let ft of[-1,1]){let Ye=new St;Ye.position.set(ft*1.3,3.15,0),X(xe.ball,b,0,0,0,Ye).scale.setScalar(.5),X(new xn(.3,.36,1.6,8).translate(0,-.9,0),b,0,0,0,Ye),X(xe.ball,b,0,-1.9,0,Ye).scale.setScalar(.52),I.add(Ye),ie.push(Ye)}I.scale.setScalar(h.sc);let K=t.yaw+.6,pe=t.x+Math.sin(K)*3,ye=t.z+Math.cos(K)*3,we={S:h,obj:I,arms:ie,x:pe,z:ye,y:r(pe,ye),yaw:t.yaw,hp:Math.round(y.max*h.hp),max:Math.round(y.max*h.hp),rad:1.2*h.sc,life:60,cd:.4,swing:0,t:0,rage:0};return we.barCv=document.createElement("canvas"),we.barCv.width=64,we.barCv.height=8,we.barTex=new Bn(we.barCv),we.bar=new fs(new Zi({map:we.barTex,transparent:!0,depthWrite:!1,fog:!1})),we.bar.scale.set(2.4,.2,1),we.bar.position.y=5.3,I.add(we.bar),lt(we),I.position.set(pe,we.y,ye),e.add(I),W.push(we),We(pe,we.y,ye,h.color,2.2,9,.8),Oe(pe,we.y,ye,h.color,.4,4.5,.7),B(pe,we.y+2,ye,h.color,30,6,.8),c(h.name),we}function lt(h){let I=h.barCv.getContext("2d");I.clearRect(0,0,64,8),I.fillStyle="rgba(0,0,0,.75)",I.fillRect(0,0,64,8),I.fillStyle="#7fe0ff",I.fillRect(1,1,62*Math.max(0,h.hp/h.max),6),h.barTex.needsUpdate=!0}function et(h){let I=W.indexOf(h);I>=0&&W.splice(I,1),B(h.x,h.y+2,h.z,h.S.color,24,5,.7),e.remove(h.obj),h.barTex.dispose(),h.obj.traverse(b=>{b.material&&b.material.dispose(),b.geometry&&!b.geometry.userData.shared&&b.geometry.dispose()})}function Je(h,I){let b=Math.max(1,Math.round(I.atk*(.9+Math.random()*.2)*100/(100+d.def)));h.hp-=b,lt(h),de(h.x,h.y+4.6*h.S.sc,h.z,"-"+b,"info"),h.hp<=0&&(c(h.S.name+" dissip\xE9"),et(h))}function ht(h,I){if(h.t+=I,h.life-=I,h.cd-=I,h.rage>0&&(h.rage-=I),h.life<=0){et(h);return}let b=h.S,z=tt(h.x,h.z,24)||(y.focusT>0&&y.focus&&y.focus.state!=="dead"&&ge(h.x,h.z,y.focus.x,y.focus.z)<24?y.focus:null),Y=0,X,ie,K;z?(X=z.x,ie=z.z,K=2.6*b.sc+z.rad):(X=t.x,ie=t.z,K=4.5);let pe=X-h.x,ye=ie-h.z,we=Math.hypot(pe,ye);if(we>K)Y=Math.min(z?9:14,(we-K)*4+2),h.yaw+=ur(Math.atan2(pe,ye),h.yaw)*Math.min(1,I*7),h.x+=Math.sin(h.yaw)*Y*I,h.z+=Math.cos(h.yaw)*Y*I;else if(z&&(h.yaw+=ur(Math.atan2(pe,ye),h.yaw)*Math.min(1,I*8),h.cd<=0)){h.cd=b.iv,h.swing=Math.min(.45,b.iv*.8);let Ye=()=>{if(!W.includes(h))return;let It=h.x+Math.sin(h.yaw)*2,Ut=h.z+Math.cos(h.yaw)*2,Xt=b.mult*(h.rage>0?2:1);Ze(h.x,h.y+2.2,h.z,h.yaw,.2,b.aoe*b.sc,b.color,.3),b.iv>.8&&Oe(It,h.y,Ut,b.color,.4,b.aoe*b.sc,.4);let Un=!0;for(let hn of V.slice())hn.state!=="dead"&&ge(It,Ut,hn.x,hn.z)<b.aoe*b.sc+hn.rad&&(hn.type!=="dummy"||hn===y.focus)&&(Qe(hn,Un?Xt:Xt*.6,{color:b.color,kb:.5,pet:1,cc:b.cc,key:b.id}),Un=!1)};b.iv>.8?Me(.2,Ye):Ye()}b.heal&&y.hp<y.max&&y.down<=0&&ge(h.x,h.z,t.x,t.z)<14&&(y.hp=Math.min(y.max,y.hp+y.max*b.heal/100*I)),h.y=Math.max(r(h.x,h.z),.2),h.swing>0&&(h.swing-=I);let ft=h.swing>0?Math.sin((1-h.swing/.45)*Math.PI):0;h.obj.scale.setScalar(b.sc*(h.rage>0?1.3:1)),h.obj.position.set(h.x,h.y+.25+Math.sin(h.t*2)*.15,h.z),h.obj.rotation.y=h.yaw,h.arms[0].rotation.x=-ft*2.1-.1,h.arms[1].rotation.x=-ft*1.6-.1+Math.sin(h.t*1.5)*.08,h.obj.visible=!t.inside}function Mt(){let h=new St,I=new Qt({color:9148330,metalness:.3,roughness:.5}),b=new Qt({color:4015702,metalness:.3,roughness:.6}),z=new Qt({color:61695,emissive:61695,emissiveIntensity:1.6}),Y=new Qt({color:10483455,emissive:2808063,emissiveIntensity:.6,transparent:!0,opacity:.55}),X=(ye,we,ft,Ye,It,Ut,Xt,Un)=>{let hn=new ze(new Pn(ye,we,ft),Ye);return hn.position.set(It,Ut,Xt),hn.castShadow=!0,(Un||h).add(hn),hn};X(1.5,1.25,1.1,I,0,2.3,0),X(1.1,.5,.9,b,0,1.55,0),X(.5,.3,.44,b,0,3.1,.05),X(.4,.09,.05,z,0,3.12,.28),X(.18,.5,.05,z,0,2.3,.56);let ie=new ze(new Jn(.46,14,10),Y);ie.position.set(0,2.62,.42),ie.scale.set(1,.8,.8),h.add(ie);for(let ye of[-1,1]){X(.34,.5,.5,b,ye*.5,2.9,-.5);let we=new ze(new ln(.16,.5,8),z);we.position.set(ye*.5,2.5,-.62),we.rotation.x=Math.PI,h.add(we)}let K=[],pe=[];for(let ye of[-1,1]){let we=new St;we.position.set(ye*.46,1.4,0),X(.42,.8,.48,I,0,-.38,0,we),X(.48,.74,.56,b,0,-1.02,.02,we),X(.56,.2,.86,I,0,-1.32,.12,we),X(.1,.5,.05,z,0,-.9,.3,we),h.add(we),K.push(we)}for(let ye of[-1,1]){let we=new St;we.position.set(ye*1.08,2.7,0),X(.72,.5,.74,I,0,.06,0,we),X(.76,.1,.78,z,0,-.22,0,we),X(.36,.9,.42,b,0,-.6,0,we),X(.62,.62,.62,I,0,-1.3,0,we),X(.64,.1,.64,z,0,-.96,0,we),h.add(we),pe.push(we)}return{g:h,legs:K,arms:pe}}function Ct(){let h=Mt();e.add(h.g);let I=Math.round(y.max*g.mecha.hp);y.mecha={M:h,hp:I,max:I,t:g.mecha.dur,ph:0,swing:0,arm:0},n.group.visible=!1,R=g.mecha.basic,F=!0,o.classList.add("ew-mecha"),We(t.x,t.y,t.z,61695,2.6,11,.8),Oe(t.x,t.y,t.z,61695,.5,6,.7),B(t.x,t.y+2,t.z,61695,40,8,.9),ee.shake=.4,c("Mecha en ligne","Il encaisse \xE0 votre place")}function ct(h){let I=y.mecha;I&&(y.mecha=null,e.remove(I.M.g),ri(I.M.g),n.group.visible=!0,R=g.basic,F=R.kind==="melee",o.classList.remove("ew-mecha"),y.cds[1]=y.cdMax[1]=M[0].cd,y.inv=Math.max(y.inv,.8),B(t.x,t.y+1.5,t.z,h?16742970:61695,40,9,.9),Oe(t.x,t.y,t.z,61695,.5,6,.6),h&&(ee.shake=.6,c("Mecha d\xE9truit")))}function Ae(h){for(;j.length>=2;){let z=j.shift();Fe(z.m)}let I=new St,b=new ze(xe.ring,Ee(f,.75));b.scale.setScalar(1.3),b.position.y=.08,I.add(b);for(let z=0;z<6;z++){let Y=new ze(new ln(.07,.4,5),new Qt({color:10134704,metalness:.8,roughness:.3}));Y.position.set(Math.cos(z*1.047)*.7,.2,Math.sin(z*1.047)*.7),I.add(Y)}I.position.set(t.x,t.y,t.z),e.add(I),j.push({m:I,x:t.x,z:t.z,y:t.y,t:25,s:h,ring:b})}function q(h){for(let I=j.length-1;I>=0;I--){let b=j[I];b.t-=h,b.ring.rotation.y+=h*1.5;let z=b.t<=0?null:V.find(Y=>Y.state!=="dead"&&ge(b.x,b.z,Y.x,Y.z)<2.6+Y.rad&&(Y.type!=="dummy"||Y===y.focus));z&&(We(b.x,b.y,b.z,f,1.6,5,.5),xt(b.x,b.y,b.z,b.s.dmg.r,b.s.dmg.mult,{cc:b.s.cc,key:b.s.name,color:f}),ee.shake=Math.max(ee.shake,.25)),(z||b.t<=0)&&(Fe(b.m),j.splice(I,1))}}function ke(){y.hp=y.max,y.shield=0,t.down=!1,y.inv=2;for(let h of W.slice())et(h);if(N.on)re(),i.teleport(st.x+17,st.z);else{for(let h of V)h.wild&&(h.state="idle",h.hp=h.max,Be(h));i.teleport(-6,34),c("Rue du Four","Vous reprenez connaissance devant la Maison")}}function Ue(h,I){let b=h.obj;if(h.flash>0){h.flash-=I;let wt=h.flash>0;for(let zt of h.mats)wt?(zt.emissive.setHex(16777215),zt.emissiveIntensity=.9):(zt.emissive.setHex(zt.userData.e0),zt.emissiveIntensity=zt.userData.i0)}if(h.state==="dead"){h.t+=I;let wt=h.t/.55;b.scale.setScalar(Math.max(.01,1-wt)),b.position.y=h.y-wt*.4,wt>=1&&L(h);return}let z=h.type==="dummy",Y=(h.weakT>0?1+h.weakK:1)*(1+Math.min(1,d.crit)*(d.critDmg-1));for(let wt of h.dots)if(wt.t-=I,wt.t<=0&&wt.n>0){wt.t+=1,wt.n--;let zt=Math.max(1,Math.round(wt.v*Y));if(y.dealt+=zt,z||(h.hp-=zt),de(h.x,h.y+h.T.h,h.z,zt,"dot"),Be(h),!z&&h.hp<=0){C(h);return}}if(h.dots.length&&(h.dots=h.dots.filter(wt=>wt.n>0)),h.notes>0){if(h.noteT-=I,h.noteAcc+=I,h.noteAcc>=1){h.noteAcc-=1;let wt=Math.max(1,Math.round(E*Cc*h.notes*Y));if(y.dealt+=wt,z||(h.hp-=wt),de(h.x,h.y+h.T.h+.2,h.z,"\u266A "+wt,"dot"),Be(h),!z&&h.hp<=0){C(h);return}}h.noteT<=0&&(h.notes=0)}if(h.weakT>0&&(h.weakT-=I),z){h.wobT>0&&(h.wobT-=I,h.wob.rotation.x=Math.sin(h.wobT*34)*.5*h.wobT);return}h.rootT>0&&(h.rootT-=I),h.slowT>0&&(h.slowT-=I),h.silT>0&&(h.silT-=I),h.aspdT>0&&(h.aspdT-=I),h.sapT>0&&(h.sapT-=I),h.kdCd>0&&(h.kdCd-=I);let X=null,ie=18;for(let wt of W){if(wt.hp<=0)continue;let zt=ge(h.x,h.z,wt.x,wt.z);zt<(wt.S.taunt||ie)&&(!X||zt<ie)&&(ie=zt,X=wt)}let K=X?X.x:t.x,pe=X?X.z:t.z,ye=X?X.rad:y.mecha?.9:0,we=K-h.x,ft=pe-h.z,Ye=Math.hypot(we,ft)-ye,It=X?!0:y.down<=0&&!t.inside&&y.stealthT<=0,Ut=h.aspdT>0?1+h.aspdK:1,Xt=0,Un=null;if(h.state==="stun"||h.state==="sleep"||h.state==="tree"||h.state==="fear")h.stun-=I,h.state==="fear"&&(Un=Math.atan2(h.x-t.x,h.z-t.z),Xt=h.spd*.9),h.state==="sleep"&&(h.zT-=I)<=0&&(h.zT=1.1,_e(h,"z z")),h.stun<=0&&($e(h),h.state="chase",h.kd=!1);else if(h.state==="idle")if(It&&Ye<15)h.state="chase";else{if(h.wT-=I,!h.wander||h.wT<=0){let Mn=Math.random()*6.28,Kn=Math.random()*7;h.wander=[h.home[0]+Math.sin(Mn)*Kn,h.home[1]+Math.cos(Mn)*Kn],h.wT=3+Math.random()*5}let wt=h.wander[0]-h.x,zt=h.wander[1]-h.z;Math.hypot(wt,zt)>.7&&(Un=Math.atan2(wt,zt),Xt=h.spd*.3),h.hp<h.max&&(h.hp=Math.min(h.max,h.hp+h.max*.2*I),Be(h))}else h.state==="chase"?!It||h.wild&&ge(h.x,h.z,h.home[0],h.home[1])>40?h.wild&&(h.state="idle",h.wander=h.home.slice(),h.wT=6):(Un=Math.atan2(we,ft),Ye>h.range*.82?Xt=h.spd:h.silT<=0&&(h.state="wind",h.t=0,h.av&&h.av.play(h.av.cat==="2h"?"heavy":"slash",h.T.wind*Ut/.52,h.n++),Oe(h.x,h.y,h.z,16724048,.3,h.range+.5,h.T.wind*Ut,.85))):h.state==="wind"?(h.t+=I,h.t<h.T.wind*Ut*.6&&(Un=Math.atan2(we,ft)),h.t>=h.T.wind*Ut&&(h.state="rest",h.t=0,h.lunge=.25,Ze(h.x,h.y+h.T.h*.5,h.z,h.yaw,.3,h.range*.95,16728160,.2),It&&Ye<h.range+.7&&Math.abs(ur(Math.atan2(we,ft),h.yaw))<1.25&&(X?Je(X,h):pt(h)))):h.state==="rest"&&(h.t+=I,h.t>=h.T.rest*Ut&&(h.state="chase"));if(h.rootT>0?Xt=0:h.slowT>0&&(Xt*=1-h.slowK),Un!=null&&(h.yaw+=ur(Un,h.yaw)*Math.min(1,I*8)),Xt>0){let wt=h.x+Math.sin(h.yaw)*Xt*I,zt=h.z+Math.cos(h.yaw)*Xt*I;for(let Mn of V)if(Mn!==h&&Mn.state!=="dead"){let Kn=ge(wt,zt,Mn.x,Mn.z),ko=h.rad+Mn.rad;Kn<ko&&Kn>.001&&(wt=Mn.x+(wt-Mn.x)/Kn*ko,zt=Mn.z+(zt-Mn.z)/Kn*ko)}if(h.arena){let Mn=ge(wt,zt,st.x,st.z),Kn=st.r-1-h.rad;Mn>Kn&&(wt=st.x+(wt-st.x)/Mn*Kn,zt=st.z+(zt-st.z)/Mn*Kn)}h.x=wt,h.z=zt}if(h.arena){let wt=ge(h.x,h.z,st.x,st.z),zt=st.r-1-h.rad;wt>zt&&(h.x=st.x+(h.x-st.x)/wt*zt,h.z=st.z+(h.z-st.z)/wt*zt)}h.y=Math.max(r(h.x,h.z),.2),h.lunge>0&&(h.lunge-=I);let hn=h.lunge>0?Math.sin((1-h.lunge/.25)*Math.PI)*.7:0;b.position.set(h.x+Math.sin(h.yaw)*hn,h.y,h.z+Math.cos(h.yaw)*hn),b.rotation.y=h.yaw;let Oo=h.kd&&h.state==="stun";h.av?(h.av.update(I,{speed:Xt/4.6}),h.av.group.rotation.x+=((Oo?-1.4:0)-h.av.group.rotation.x)*Math.min(1,I*12),h.av.group.position.y=Oo?.25:0):(h.beast.update(I,Xt/6),h.beast.group.rotation.x=h.state==="wind"?-.22*Math.min(1,h.t/(h.T.wind*Ut)):h.state==="stun"?.12:0,h.beast.group.rotation.z+=((Oo?1.45:0)-h.beast.group.rotation.z)*Math.min(1,I*12))}function je(h,I=3.2,b){let z=null,Y=1e9;for(let X of V){if(X.state==="dead")continue;let ie=ge(t.x,t.z,X.x,X.z);if(ie>h+X.rad)continue;let K=Math.abs(ur(Pe(X.x,X.z),t.yaw));if(K>I)continue;let pe=ie+(b?0:K*3)+(X.type==="dummy"?b?40:5:0)+(b&&X.state==="sleep"?30:0);pe<Y&&(Y=pe,z=X)}return z}let tt=(h,I,b,z)=>{let Y=null,X=b;for(let ie of V){if(ie.state==="dead"||ie.type==="dummy"||ie.state==="sleep"&&z==="awake"||z&&z.has&&z.has(ie))continue;let K=ge(h,I,ie.x,ie.z);K<X&&(X=K,Y=ie)}return Y};function Tt(h,I=!F){let b=je(h,3.2,I);return b&&(!I||t.speed<1.5)&&(t.yaw=Pe(b.x,b.z)),b}let gt=h=>h&&h.state!=="dead"?h:null;function ut(h,I,b,z={}){let Y=0;for(let X of V.slice()){if(X.state==="dead")continue;let ie=ge(t.x,t.z,X.x,X.z);ie>I+X.rad||b<3.1&&ie>.9&&Math.abs(ur(Pe(X.x,X.z),t.yaw))>b||(Qe(X,h,z),Y++)}return Y&&(ee.shake=Math.max(ee.shake,z.shake||.07)),Y}function xt(h,I,b,z,Y,X={},ie){Le(h,I+.4,b,X.color||f,z*.7),Oe(h,I,b,X.color||f,.3,z,.4),B(h,I+.5,b,X.color||f,14,6,.5);let K=0;for(let pe of V.slice())pe!==ie&&pe.state!=="dead"&&ge(h,b,pe.x,pe.z)<z+pe.rad&&(Qe(pe,Y,X),K++);return K}function At(h,I,b={}){let z=b.target&&b.target.state!=="dead"?b.target:je(b.range||28,3.2,!0),Y=n.hand(new H,b.off);h==="wave"&&Y.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let X=z?new H(z.x-Y.x,z.y+z.T.h*.55-Y.y,z.z-Y.z).normalize():new H(Math.sin(t.yaw),0,Math.cos(t.yaw));b.spread&&X.applyAxisAngle(Qx,b.spread);let ie=b.color||f,K=b.size||1,pe;if(h==="arrow")pe=new ze(xe.arrow,Ee(ie,1)),pe.scale.set(K,K,1.1);else if(h==="bullet")pe=new ze(xe.tracer,Ee(ie,1));else if(h==="wave")pe=new ze(xe.arc,Ee(ie,.85)),pe.scale.setScalar(1.2);else{pe=new ze(xe.ball,Ee(ie,h==="paint"?.95:.9,h!=="paint"));let we=(h==="shell"?.3:h==="paint"?.2:.24)*K;if(pe.scale.setScalar(we),h!=="paint"){let ft=new ze(xe.ball,Ee(16777215,.9));ft.scale.setScalar(.5),pe.add(ft)}}let ye=b.speed||26;pe.position.copy(Y),e.add(pe),h!=="wave"&&Le(Y.x,Y.y,Y.z,ie,.35,.12),ce.push({m:pe,kind:h,v:X.multiplyScalar(ye),life:(b.range||28)/ye+.25,mult:I,o:b,hit:new Set,target:z,homing:h!=="wave",age:0,bounce:b.bounce||0})}function Ne(h,I){h.age+=I,h.life-=I;let b=h.m.position;if(h.homing&&h.target&&h.target.state==="dead"&&(h.target=tt(b.x,b.z,12,h.hit)),h.homing&&h.target){let we=h.target,ft=h.v.length();Re.set(we.x-b.x,we.y+we.T.h*.55-b.y,we.z-b.z).normalize().multiplyScalar(ft),h.v.lerp(Re,Math.min(1,I*(h.kind==="bullet"||h.kind==="arrow"?18:9))).setLength(ft)}let z=b.x,Y=b.z;b.addScaledVector(h.v,I);let X=b.x-z,ie=b.z-Y,K=X*X+ie*ie;h.kind==="wave"?(h.m.rotation.y=Math.atan2(h.v.x,h.v.z),h.m.scale.setScalar(1.2+h.age*3.2),h.m.material.opacity=.85*Math.min(1,h.life*3)):(h.kind==="arrow"||h.kind==="bullet")&&h.m.lookAt(b.x+h.v.x,b.y+h.v.y,b.z+h.v.z);let pe=h.kind==="wave"?h.m.scale.x*.8:.35*(h.o.size||1),ye=h.life<=0;for(let we of V){if(we.state==="dead"||h.hit.has(we))continue;let ft=K>0?Math.max(0,Math.min(1,((we.x-z)*X+(we.z-Y)*ie)/K)):1;if(!(ge(z+X*ft,Y+ie*ft,we.x,we.z)>we.rad+pe||b.y<we.y-.5-Math.abs(h.v.y)*I||b.y>we.y+we.T.h+.8+Math.abs(h.v.y)*I)){if(h.hit.add(we),Qe(we,h.mult,h.o),h.o.aoe&&xt(b.x,we.y,b.z,h.o.aoe,h.mult*.6,h.o,we),h.bounce>0){let Ye=tt(b.x,b.z,14,h.hit);if(Ye){h.bounce--,h.mult*=.8,h.target=Ye;let It=h.v.length();h.v.set(Ye.x-b.x,Ye.y+Ye.T.h*.55-b.y,Ye.z-b.z).setLength(It),h.life=14/It+.25,Le(b.x,b.y,b.z,16777215,.5,.12);break}}if(!h.o.thru){ye=!0;break}}}return!ye&&h.kind!=="wave"&&b.y<r(b.x,b.z)+.05?(ye=!0,h.o.aoe?xt(b.x,r(b.x,b.z),b.z,h.o.aoe,h.mult*.6,h.o):B(b.x,b.y+.1,b.z,h.o.color||f,5,2.5,.3)):ye&&h.life<=0&&h.o.aoe&&h.kind==="shell"&&xt(b.x,b.y,b.z,h.o.aoe,h.mult*.6,h.o),ye}function Wt(h,I,b,z={},Y=32){let X=gt(h)||je(Y,3.2,!0),ie=X?X.x:t.x+Math.sin(t.yaw)*8,K=X?X.z:t.z+Math.cos(t.yaw)*8,pe=r(ie,K);return We(ie,pe,K,z.color||f,b*.5,5,.45),xt(ie,pe,K,b,I,z)}let Ft=()=>t.talking||t.paused||y.down>0?!1:(t.mount&&i.dismount(),!0);function Kt(h){if(h&&(y.idle=0),y.armed===h)return;y.armed=h,n.setArmed(h),o.classList.toggle("ew-armed",h);let I=o.querySelector('[data-c="draw"]');I&&I.classList.toggle("on",h)}let k=()=>t.x,$=()=>t.y,ne=()=>t.z;function Ve(){if(!Ft())return!1;if(Kt(!0),y.busy>0)return y.queue=!0,!1;let h=Tt(F?R.reach+4.5:R.range);if(F&&h){let ie=ge(t.x,t.z,h.x,h.z)-h.rad;ie>R.reach*.7&&i.dash(ie-R.reach*.55,.09)}let I=y.combo++,b=R.dur/(1+(y.aspdT>0?y.aspdB:0)),z=R.every&&(I+1)%R.every.n===0,Y=z?R.every.mult:R.mult;n.play(z?"heavy":R.anim,b*1.3,I),y.busy=b+(z?R.every.lock*.5:0),z&&(y.lock=R.every.lock),R.slowSelf&&(y.slowK=R.slowSelf,y.slowT=b*.85),y.mecha&&(y.mecha.swing=.4,y.mecha.arm=I%2);let X=R.dot||R.note?{dot:R.dot,notes:R.note}:null;return Me(b*R.hit,()=>{if(!(y.down>0))if(F){let ie=n.dual?(I>>1)%3:I%3,K=R.anim==="heavy"?I%2?.12:1.45:R.anim==="punch"?I%2?.3:-.3:ie===0?-.95:ie===1?.2:1.57,pe={d:0};Ze(k(),$()+(R.mech?2.2:1.15),ne(),t.yaw,K,R.reach*.95,f,R.mech?.3:.24),R.mech&&(Oe(k()+Math.sin(t.yaw)*2.4,$(),ne()+Math.cos(t.yaw)*2.4,f,.4,2.6,.3),ee.shake=Math.max(ee.shake,.12)),ut(Y,R.reach,R.arc,{acc:pe,cc:X,key:"basic"})&&g.sustain&&!y.mecha&&y.hp<y.max&&ue(Math.max(1,Math.round(pe.d*.1+y.max*.06*R.dur)))}else if(z){Ze(k(),$()+1.1,ne(),t.yaw,.15,7.5,Ic[I%4],.3),Ze(k(),$()+1.1,ne(),t.yaw,-.2,6.5,16777215,.22);let ie=gt(h)||je(R.range,3.2,!0);if(ie)for(let K of V.slice())K.state!=="dead"&&ge(ie.x,ie.z,K.x,K.z)<2.6+K.rad&&Qe(K,K===ie?Y:Y*.6,{color:Ic[I%4]})}else At(R.proj,Y,{range:R.range,speed:R.speed,aoe:R.aoe,size:R.size,thru:R.thru,bounce:R.bounce||0,off:n.dual&&I%2===1,target:h,cc:X,key:"basic",color:R.proj==="paint"?Ic[I%4]:f})}),!0}function nt(){if(t.talking||t.paused||y.down>0||y.dashCd>0)return;t.mount&&i.dismount();let h=i.inputDir();h!=null&&(t.yaw=h),y.dashCd=.36,y.inv=Math.max(y.inv,.36),y.busy=0,y.queue=!1,y.lock=0,Oe(k(),$(),ne(),16777215,.3,1.9,.3,.6),Le(k(),$()+1,ne(),f,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let dt=h=>{let I=o.querySelector(".ew-skn");I&&(I.textContent=h,I.classList.remove("on"),I.offsetWidth,I.classList.add("on"))};function at(h,I){if(!h)return;let b=h.heal||h.hot?9306032:I.color||f;h.heal&&ue(Math.round(y.max*h.heal/100)),h.hot&&(y.hot=h.hot[0],y.hotT=h.hot[1]),h.atk&&(y.atkB=h.atk[0],y.atkT=h.atk[1]),h.crit&&(y.critB=h.crit[0],y.critT=h.crit[1]),h.aspd&&(y.aspdB=h.aspd[0],y.aspdT=h.aspd[1]),h.guard&&(y.guardB=h.guard[0],y.guardT=h.guard[1]),h.absorb&&(y.absorbB=h.absorb[0],y.absorbT=h.absorb[1]),h.inv&&(y.inv=Math.max(y.inv,h.inv)),h.gauge&&Q(h.gauge),h.shield&&(y.shield=Math.round(y.max*h.shield[0]/100),y.shieldT=h.shield[1]),h.stealth&&(ot(h.stealth[0],h.stealth[1]),B(k(),$()+1,ne(),10133696,20,3,.5)),h.reset!=null&&(y.cds[h.reset]=0),(h.heal||h.hot||h.atk||h.crit||h.aspd||h.guard||h.absorb||h.inv>1)&&(We(k(),$(),ne(),b,1.2,4.2,.6),Oe(k(),$(),ne(),b,.4,3,.5),B(k(),$()+1,ne(),b,14,3,.6))}function He(h,I){let b=h.area,z=h.color||f;if(b.kind==="target"){let pe=gt(I)||je(30,3.2,!0);pe&&(We(pe.x,pe.y,pe.z,z,1,4,.5),Xe(pe,h.cc,h.name));return}let Y=b.kind==="zone"?gt(I)||je(30,3.2,!0):null,X=b.kind==="zone"?Y?Y.x:t.x+Math.sin(t.yaw)*8:t.x,ie=b.kind==="zone"?Y?Y.z:t.z+Math.cos(t.yaw)*8:t.z,K=r(X,ie);Oe(X,K,ie,z,.4,b.r,.6),Le(X,K+.6,ie,z,b.r*.5,.3);for(let pe of V.slice())pe.state!=="dead"&&ge(X,ie,pe.x,pe.z)<b.r+pe.rad&&Xe(pe,h.cc,h.name)}function A(h,I,b){if(y.down>0)return;let z=h.dmg,Y=h.ult===1?D:1,X=h.color||f;if(h.special==="trap"){Ae(h);return}if(h.special==="spirit"){y.spirit=(y.spirit+1)%Jr.length,mt(Jr[y.spirit]);return}if(h.special==="mecha"){Ct();return}if(h.special==="enrage"){W.length||(y.spirit=Math.max(0,y.spirit),mt(Jr[y.spirit]));for(let ie of W)ie.rage=8,ie.hp=ie.max,lt(ie),We(ie.x,ie.y,ie.z,ie.S.color,3,10,.8)}if(h.exec){let ie=gt(I)||je(36,3.2,!0);if(ee.shake=.7,!ie){Oe(k(),$(),ne(),f,.5,9,.8);return}We(ie.x,ie.y,ie.z,16777215,1.4,18,.9),We(ie.x,ie.y,ie.z,f,2.8,13,1),Oe(ie.x,ie.y,ie.z,f,.5,10,.9),B(ie.x,ie.y+1,ie.z,f,40,9,.9),ie.type!=="dummy"&&ie.hp<=ie.max*(ie.boss?.15:.35)?(_e(ie,"R\xE9duit \xE0 n\xE9ant","crit"),C(ie)):Qe(ie,8/v,{pierce:1,color:f,kb:1.2,cc:h.cc,key:h.name});return}if(z){let ie=z.hits||1,K=z.gap||.15,pe={crit:z.crit,pierce:z.pierce,steal:z.steal,cc:h.cc,key:h.name,color:X,kb:z.kind==="around"?.7:void 0};for(let ye=0;ye<ie;ye++)Me(ye*K,()=>{if(y.down>0)return;let we=(Array.isArray(z.mult)?z.mult[ye]:z.mult)*Y,ft=ie===1&&we>=2.5;if(z.kind==="melee")Ze(k(),$()+1.15,ne(),t.yaw,ye%3===0?-.9:ye%3===1?.25:1.5,z.r*(.9+ye*.08),X,.28),ut(we,z.r,z.arc||1.4,Object.assign({shake:.12+ye*.08},pe));else if(z.kind==="around")Oe(k(),$(),ne(),X,.5,z.r,.45),ft?(We(k(),$(),ne(),X,z.r*.4,7,.6),B(k(),$()+.5,ne(),X,30,9,.7)):Ze(k(),$()+1.1,ne(),t.yaw+ye*1.3,ye%2?.2:-.2,z.r*.85,X,.3),ut(we,z.r,3.2,Object.assign({shake:ft?.5:.18},pe));else if(z.kind==="shot")ie>1&&n.play(h.anim==="flip"?"shoot":h.anim||R.anim,.14,ye),At(z.proj||R.proj||"bolt",we,Object.assign({range:(z.range||30)+4,speed:z.speed||R.speed||36,aoe:z.aoe,size:z.size,bounce:z.proj==="bullet"?1:0,off:ye%2===1&&n.dual,target:gt(I)},pe));else if(z.kind==="zone")ft&&(ee.shake=Math.max(ee.shake,.5)),Wt(I,we,z.r,pe);else if(z.kind==="target"){let Ye=gt(I)||je((z.range||26)+4,3.2,!0);if(!Ye)return;let It=we;h.special==="notes"&&(It+=.7*Ye.notes,Oe(Ye.x,Ye.y,Ye.z,X,.3,2+Ye.notes*.6,.4),Ye.notes=0),We(Ye.x,Ye.y,Ye.z,X,.7,4,.35),Le(Ye.x,Ye.y+Ye.T.h*.5,Ye.z,X,1.1,.2),Qe(Ye,It,pe)}})}h.area&&He(h,I),at(h.self,h)}function Z(h){if(h===0)return Ve();let I=M[h-1];if(!I||!Ft())return;if(P[h]){dt("Niveau "+zo[h-1]+" requis \xB7 "+I.name);return}if(I.special==="mecha"&&y.mecha){y.busy<=.15&&(dt("\xC9jection"),ct(!1));return}if(I.ult){if(y.charge<100){dt("Jauge d\u2019ultime incompl\xE8te");return}}else if(y.cds[h]>0)return;if(y.busy>.15)return;Kt(!0),dt(I.name),I.ult?y.charge=0:y.cds[h]=y.cdMax[h]=I.cd;let b=I.dmg,z=I.cast??.25,Y=b&&b.kind==="melee",X=Y?je(b.r+5):b||I.area||I.exec?je((b&&b.range||30)+4,3.2,!0):null;if(X&&(Y||b&&b.kind==="target"||I.exec||t.speed<1.5)&&(t.yaw=Pe(X.x,X.z)),Y&&X){let ie=ge(t.x,t.z,X.x,X.z)-X.rad;ie>b.r*.7&&i.dash(ie-b.r*.55,.1)}if(I.move==="tp"&&X){B(k(),$()+1,ne(),f,16,4,.4);let ie=X.rad+1.5;if(t.x=X.x-Math.sin(X.yaw)*ie,t.z=X.z-Math.cos(X.yaw)*ie,t.y=r(t.x,t.z),t.yaw=X.yaw,N.on){let K=ge(t.x,t.z,st.x,st.z);K>st.r-1.2&&(t.x=st.x+(t.x-st.x)/K*(st.r-1.2),t.z=st.z+(t.z-st.z)/K*(st.r-1.2))}Le(k(),$()+1,ne(),f,1.2,.25)}if(I.move==="back"&&(i.dash(-8.5,.26),Oe(k(),$(),ne(),f,.4,2.2,.35)),n.play(I.anim||(F?"heavy":"cast"),Math.max(.42,$r(I)*1.05),y.combo++,I.turns||1),y.busy=$r(I),I.lock&&(y.lock=I.lock),I.ult&&(y.inv=Math.max(y.inv,$r(I))),y.mecha&&(y.mecha.swing=.45,y.mecha.arm=2),I.meteor){let ie=X,K=ie?ie.x:t.x+Math.sin(t.yaw)*10,pe=ie?ie.z:t.z+Math.cos(t.yaw)*10,ye=r(K,pe);Oe(K,ye,pe,f,b.r-.2,b.r,z,.7);let we=new ze(xe.ball,Ee(f,.95)),ft=new ze(xe.ball,Ee(16777215,.9));ft.scale.setScalar(.55),we.add(ft),Ke(we,z,Ye=>{we.position.set(K-7*(1-Ye),ye+22*(1-Ye)*(1-Ye)+.5,pe-4*(1-Ye)),we.scale.setScalar(1.4)})}Me(z,()=>A(I,X,h))}function se(){if(!(y.busy>0)){for(let h=1;h<=3;h++)if(!P[h]&&y.cds[h]<=0&&!(M[h-1].special==="mecha"&&y.mecha)){Z(h);return}Ve()}}function te(h){let I=[];if(h%10===0){I.push("drake");for(let b=0;b<Math.min(4,h/10+1);b++)I.push("wolf")}else if(h%5===0){I.push("champion");for(let b=0;b<Math.min(3,h/5);b++)I.push("shade")}else{let b=Math.min(6,2+Math.floor(h/3));for(let z=0;z<b;z++)I.push(h>=4&&z===0?"brute":h>=2&&z%2===1?"shade":"wolf")}return I}function S(){let h=++N.wave,I=te(h),b=Math.random()*6.28;c("Vague "+h,h%5===0?"Un champion entre dans l\u2019ar\xE8ne":I.length+" ombres"),I.forEach((z,Y)=>{let X=b+Y/I.length*6.2832,ie=15+Y%2*2.5;Ce(z,st.x+Math.cos(X)*ie,st.z+Math.sin(X)*ie,h,{arena:!0})})}let G=()=>5*Math.floor(N.best/5)+1;function J(h,I){N.on||(h=Math.max(1,Math.min(N.best+1,Math.round(h||G()))),N.on=!0,N.loop=!!I,N.wave=h-1,N.pending=null,Kt(!0),y.hp=y.max,S())}function re(){N.on=!1,N.pending=null;for(let h of V.slice())h.arena&&L(h);for(let h of W.slice())et(h);for(let h of j.splice(0))Fe(h.m)}let fe=o.querySelector(".ew-cmb");if(fe){let h=b=>l?b===0?"Clic":String(b):"",I=`<button type="button" class="ew-atk" data-c="0"><em>${h(0)}</em><span>Attaque</span></button>`;if(M.forEach((b,z)=>{let Y=z+1;I+=`<button type="button" class="ew-sk k${Y}${b.ult?" ult":""}${P[Y]?" lock":""}" data-c="${Y}" title="${b.name.replace(/"/g,"")}"><i></i><em>${h(Y)}</em><span>${P[Y]?"Niv. "+zo[z]:b.name}</span></button>`}),fe.insertAdjacentHTML("afterbegin",I),!l){let z=X=>fe.querySelector(X),Y=(X,ie,K,pe)=>{if(!X)return;let ye=K*Math.PI/180;X.style.right=47+ie*Math.cos(ye)-pe/2+"px",X.style.bottom=47+ie*Math.sin(ye)-pe/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((X,ie)=>Y(z(X),122,1+ie*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((X,ie)=>Y(z(X),186,8+ie*21,46))}}let ae={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:fe?[...fe.querySelectorAll(".ew-sk")]:[]},ve="";function De(){let h=y.armed||y.hp<y.max||N.on,I=y.cds.map(X=>Math.ceil(X*2)).join(","),b=y.mecha?Math.round(y.mecha.hp):-1,z=[g.role,y.mecha?"Mecha "+Math.max(0,Math.round(y.mecha.hp/y.mecha.max*100))+" %":"",m.mantra?"Mantra":"",y.stealthT>0?"Dissimul\xE9":"",U>0&&y.hp<y.max?"R\xE9g\xE9n\xE9ration":"",y.hotT>0?"Soin continu":"",y.atkT>0?"Attaque +"+Math.round(y.atkB*100)+" %":"",y.critT>0?"Critique +"+Math.round(y.critB*100)+" %":"",y.aspdT>0?"Cadence +"+Math.round(y.aspdB*100)+" %":"",y.guardT>0?"Garde":"",y.absorbT>0?"Absorption":"",y.inv>1?"Invuln\xE9rable":"",W.length?W[0].S.name:""].filter(Boolean).join(" \xB7 "),Y=[h,Math.round(y.hp),Math.round(y.shield),Math.round(y.charge),I,b,z,N.on,N.wave,V.length].join("|");if(Y!==ve){if(ve=Y,ae.hud&&ae.hud.classList.toggle("on",h),ae.hp&&(ae.hp.style.width=y.hp/y.max*100+"%",ae.hpT.textContent=Math.round(y.hp)+" / "+y.max,ae.sh.style.width=(y.mecha?Math.max(0,y.mecha.hp/y.mecha.max*100):Math.min(100,y.shield/y.max*100))+"%"),ae.ult&&(ae.ult.style.width=y.charge+"%",ae.ultB.classList.toggle("full",y.charge>=100)),ae.stt&&(ae.stt.textContent=z),ae.wave){let X=V.filter(ie=>ie.arena&&ie.state!=="dead").length;ae.wave.textContent=N.on?"Vague "+(N.wave+(N.loop&&N.pending!=null?1:0))+(N.loop?" en boucle":"")+(X?" \xB7 "+X+" ombre"+(X>1?"s":""):"")+(N.best?" \xB7 record "+N.best:""):"",ae.wave.classList.toggle("on",N.on)}ae.sk.forEach(X=>{let ie=+X.dataset.c,K=M[ie-1],pe=X.querySelector("i");K.ult?(X.classList.toggle("ready",!P[ie]&&y.charge>=100),pe.style.height=P[ie]?"0%":100-y.charge+"%"):(pe.style.height=(y.cds[ie]>0?y.cds[ie]/y.cdMax[ie]*100:0)+"%",X.classList.toggle("ready",K.special==="mecha"&&!!y.mecha))})}}for(let[h,I]of jx)Ce("dummy",h,I,1,{quiet:!0,yaw:0});let rt=Kx.map(([h,I,b,z,Y])=>({x:h,z:I,type:b,lvl:z,n:Y,es:[],t:0})).filter(h=>r(h.x,h.z)>1.6),bt=0,yt=0;return ee.update=function(h){for(let b=w.length-1;b>=0;b--){let z=w[b];z.t-=h,z.t<=0&&(w.splice(b,1),z.fn())}y.busy-=h,y.lock-=h,y.inv-=h,y.lastHit+=h,y.dashCd-=h,y.slowT-=h,y.focusT-=h,y.rezCd-=h;for(let b=0;b<y.cds.length;b++)y.cds[b]>0&&!(b===1&&y.mecha)&&(y.cds[b]-=h);for(let b of["atkT","critT","aspdT","guardT","absorbT","hotT"])y[b]>0&&(y[b]-=h);if(y.shieldT>0&&(y.shieldT-=h,y.shieldT<=0&&(y.shield=0)),y.stealthT>0&&(y.stealthT-=h,y.stealthT<=0&&ot(0)),y.armed&&tt(t.x,t.z,30)&&Q(3.4*h),y.down>0)y.down-=h,y.down<=0&&ke();else if(y.hp<y.max){let b=0;U>0&&y.lastHit>2&&(b+=y.max*U/1e3*h),!N.on&&y.lastHit>6&&(b+=y.max*.07*h),m.regen&&(b+=y.max*m.regen*h),y.hotT>0&&(b+=y.max*y.hot/100*h),b&&(y.hp=Math.min(y.max,y.hp+b))}(y.queue||ee.held)&&y.busy<=0&&y.down<=0?(y.queue=!1,Ve()):!F&&y.armed&&y.stealthT<=0&&y.busy<=0&&y.down<=0&&!t.mount&&!t.talking&&!t.paused&&!t.inside&&tt(t.x,t.z,R.range,"awake")&&Ve();for(let b of W.slice())ht(b,h);if(q(h),y.mecha){let b=y.mecha,z=b.M;b.t-=h,b.ph+=h*(2+Math.abs(t.speed)*.9);let Y=Math.min(1,Math.abs(t.speed)/6)*Math.sin(b.ph)*.55;z.legs[0].rotation.x=Y,z.legs[1].rotation.x=-Y,b.swing>0&&(b.swing-=h);let X=b.swing>0?Math.sin((1-b.swing/.4)*Math.PI):0;z.arms[0].rotation.x=-(b.arm!==1?X:0)*1.9+Y*.4,z.arms[1].rotation.x=-(b.arm!==0?X:0)*1.9-Y*.4,z.g.position.set(t.x,t.y+Math.abs(Math.sin(b.ph))*.06*Math.min(1,Math.abs(t.speed)/6),t.z),z.g.rotation.y=t.yaw,z.g.visible=!t.inside,b.t<=0&&ct(!1)}T&&!y.armed&&!t.mount&&!t.inside&&!t.talking&&Kt(!0),y.armed&&!N.on&&!T&&!y.mecha&&(y.idle+=h,y.idle>25&&!V.some(b=>b.type!=="dummy"&&b.state!=="idle"&&b.state!=="dead")&&Kt(!1));for(let b of V.slice())b.obj.visible=!t.inside,!t.inside&&(b.arena||ge(b.x,b.z,t.x,t.z)<80)&&Ue(b,h);for(let b=ce.length-1;b>=0;b--)Ne(ce[b],h)&&(Fe(ce[b].m),ce.splice(b,1));for(let b=O.length-1;b>=0;b--){let z=O[b];z.t+=h;let Y=Math.min(1,z.t/z.dur);z.upd(Y),Y>=1&&(Fe(z.obj),O.splice(b,1))}if(ee.shake=Math.max(0,ee.shake-h*2.2),Se.visible=(y.shield>0||y.inv>1||y.guardT>0||y.absorbT>0)&&!t.inside&&!y.mecha,Se.visible&&(Se.position.set(t.x,t.y+1,t.z),Se.material.opacity=.14+Math.sin(t.t*5)*.04),he.visible=y.atkT>0||y.critT>0||y.aspdT>0||!!m.mantra&&y.armed,he.visible&&(he.position.set(t.x,t.y+.12,t.z),he.scale.setScalar((m.mantra&&y.atkT<=0&&y.critT<=0?.8:1.1)+Math.sin(t.t*6)*.12),he.rotation.y=t.t*2),N.on)if(!le(t.x,t.z)&&y.down<=0)c("D\xE9fi abandonn\xE9","Vague "+N.wave),re();else if(N.pending==null&&!V.some(b=>b.arena&&b.state!=="dead")){let b=N.wave>N.best;N.best=Math.max(N.best,N.wave),b&&u.onArena&&u.onArena(N.best);let z=u.onWave?u.onWave(N.wave):null;ue(Math.round(y.max*.3)),c("Vague "+N.wave+" termin\xE9e",[z?"+"+z.x+" XP \xB7 +"+z.k+" kinahs"+(z.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui : 10 %)"):"",b?"nouveau record":""].filter(Boolean).join(" \xB7 ")),N.pending=N.loop?2.2:3.2,N.loop&&N.wave--}else N.pending!=null&&(N.pending-=h,N.pending<=0&&(N.pending=null,S()));if((bt+=h)>.6){bt=0;for(let b of rt){let z=ge(b.x,b.z,t.x,t.z);if(b.t>0&&(b.t-=.6),z<85&&!b.es.length&&b.t<=0&&!t.inside)for(let Y=0;Y<b.n;Y++){let X=Y/b.n*6.28,ie=b.x+Math.sin(X)*2.5*(b.n>1),K=b.z+Math.cos(X)*2.5*(b.n>1);b.es.push(Ce(b.type,ie,K,b.lvl,{wild:b,quiet:!0}))}else if(z>150&&b.es.length)for(let Y of b.es.slice())Y.state="gone",L(Y)}}(yt+=h)>.08&&(yt=0,De())},Object.assign(ee,{attack:Ve,skill:Z,dodge:nt,rotate:se,arm:Kt,toggleArm:()=>Kt(!y.armed),startArena:J,arenaStart:G,inArena:le,spawn:Ce,moveK:()=>y.down>0||y.lock>0?0:y.slowT>0?y.slowK:1,dispose(){y.mecha&&(e.remove(y.mecha.M.g),ri(y.mecha.M.g),y.mecha=null,n.group.visible=!0),ot(0);for(let h of W.slice())et(h);for(let h of j.splice(0))Fe(h.m);for(let h of O)Fe(h.obj);for(let h of ce)Fe(h.m);for(let h of V)h.barTex.dispose();for(let h in xe)xe[h].dispose()}}),T&&Kt(!0),De(),ee}var Lc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},dr=(i,e)=>Math.exp(-(i*i)/(2*e*e)),es=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),e1=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Gt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=Lc(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*dr(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*dr(n,230),t+=35*dr(Math.hypot(i-190,e+175),55)+16*dr(Math.hypot(i-120,e+235),50)+26*dr(Math.hypot(i,e+335),72);for(let s of e1){let r=1-Lc(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*dr(Math.abs(i-es(e)),12),t}var md=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function No(i,e){let t=1e9;for(let[n,s,r,a]of md){let o=r-n,l=a-s,c=Math.max(0,Math.min(1,((i-n)*o+(e-s)*l)/(o*o+l*l)));t=Math.min(t,Math.hypot(i-n-o*c,e-s-l*c))}return t}function ud(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-es(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let l=Lc(44,72,t);o=[Vt(.4,.86,l*l),Vt(.37,.89,l*l),Vt(.36,.94,l*l)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&No(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var dd=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],fd={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},t1={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},n1={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function ea(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ta=class{constructor(){this.b={},this.boxes=[],this.m4=new Pt,this.q=new Fn,this.e=new Wi}add(e,t,n,s,r,a=0,o=1,l=1,c=1,u=0,d=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,d,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new H(n,s,r),this.q,new H(o,l,c)));for(let f of Object.keys(p.attributes))f!=="position"&&f!=="normal"&&p.deleteAttribute(f);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),l=(n*a+s*o)/2,c=(n*o+s*a)/2;this.boxes.push([e-l,e+l,t-c,t+c])}build(e,t){let n=new St;for(let s in this.b){let r=Xr(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new ze(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},qe=new Pn(1,1,1),jr=new ln(Math.SQRT1_2,1,4).rotateY(Math.PI/4),$t=new xn(.5,.5,1,12),pr=new ln(.5,1,12),Pi=new Jn(.5,12,8),yn=new Xi(1,1),i1=new Jn(.5,16,8,0,Math.PI*2,0,Math.PI/2),fr=new xn(.5,.5,1,56),Qr=(()=>{let i=new di;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new Ks(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function $n(i,e,t,n,s,r,a,o,l,c,u={}){let d=u.y??Gt(t,n);i.add(l,qe,t,d+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(c,qe,t,d+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(c,jr,t,d+a+p/2,n,o,s+1,p,r+1):i.add(c,Qr,t,d+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",qe,t+Math.cos(o)*s*.25,d+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let f=Math.cos(o),x=Math.sin(o),_=Math.max(1,Math.floor(a/3.1));for(let[v,E,D,P]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let R=Math.max(1,Math.floor(D/2.8));for(let F=0;F<_;F++)for(let T=0;T<R;T++){if(F===0&&E===1&&T===Math.floor(R/2))continue;let y=(T-(R-1)/2)*(D/R),U=v?v*(P+.04):y,V=E?E*(P+.04):y,ce=t+U*f+V*x,O=n-U*x+V*f,w=o+Math.atan2(v,E);i.add(e()<(u.lit??.55)?"winLit":"winDark",yn,ce,d+1.9+F*3.1,O,w,.9,1.25,1)}}let g=r/2+.05,m=t+g*x,M=n+g*f;return i.add("wood",yn,m,d+1.05,M,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*x,n+(r/2+1.6)*f]}}function Kr(i,e,t){let n=Gt(e,t);i.add("iron",$t,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",qe,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",Pi,e,n+3.55,t,0,.42,.5,.42)}function s1(i,e){let t=new ta,n=ea(20261112),s=[],r=[],a=(f,x,_,g)=>_.some(m=>Math.hypot(f-m[0],x-m[1])<(m[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],l=["wallA","wallB","wallC","wallW"],c=["roofA","roofB"];for(let f=-150;f<=150;f+=24)for(let x=-150;x<=160;x+=22){let _=f+(n()-.5)*6,g=x+(n()-.5)*5;if(Math.hypot(_,g)>158||a(_,g,o,0)||No(_,g)<8.5||Math.abs(_-es(g))<40||n()<.12)continue;let M=g>-10&&_>-70,v=9+n()*7,E=8+n()*6,D=(M?5.5:7)+n()*(M?4.5:8);$n(t,n,_,g,v,E,D,n()<.5?0:Math.PI/2,M?n()<.5?"wallB":"wallC":l[Math.floor(n()*4)],c[Math.floor(n()*2)],{lit:M?.4:.6,hip:n()<.25})}for(let[f,x,_,g]of md.slice(0,6)){let m=Math.floor(Math.hypot(_-f,g-x)/22);for(let M=1;M<m;M++){let v=M/m,E=f+(_-f)*v,D=x+(g-x)*v,P=-(g-x),R=_-f,F=Math.hypot(P,R);Kr(t,E+P/F*4.6,D+R/F*4.6)}}{let f=Gt(-18,14);$n(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",qe,-12,f+3.2,22.5,.35,5.5,1.4,.05),t.add("white",qe,-6.5,f+3,20.6,.35,2.4,1.7,.05),t.add("iron",$t,-15.5,f+2,24,0,.1,4,.1),t.add("iron",$t,-4.5,f+2,19.6,0,.1,4,.1),t.add("wood",qe,-37,f+4.1,33,1.2,9,.35,7);for(let[x,_]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),m=Math.sin(1.2);t.add("wood",$t,-37+x*g+_*m,f+2,33-x*m+_*g,0,.35,4,.35)}t.add("stoneD",qe,-39.5,f+1,35,1.2,2.6,2,2.2),t.add("ember",qe,-39.5,f+2.05,35,1.2,1.9,.2,1.5),t.add("iron",qe,-35.5,f+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",qe,-35.5,f+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,f+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let f=Gt(0,-95);t.add("stone",qe,0,f+10,-98,0,22,21,46),t.add("roofB",Qr,0,f+20.4,-98,0,24,10,47),t.add("stone",qe,0,f+22,-70.5,0,11,45,10),t.add("roofB",jr,0,f+53,-70.5,0,12,18,11),t.add("gold",qe,0,f+64,-70.5,0,.3,4,.3),t.add("gold",qe,0,f+64.6,-70.5,0,1.8,.3,.3),t.add("rose",$t,0,f+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",yn,0,f+2.6,-65.42,0,3.4,5.2,1);for(let x=0;x<4;x++)t.add("stoneL",qe,0,f-.3+x*-0+.2*(3-x),-63.6+x*.9,0,12+x*1.4,.4,1);for(let x=0;x<6;x++)for(let _ of[-1,1])t.add("rose",yn,_*11.06,f+9,-116+x*7.2,_*Math.PI/2,2.2,8,1),t.add("stoneD",qe,_*12,f+6.5,-112.4+x*7.2,0,1.6,13,1.6);for(let x of[30,36])for(let[_,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",yn,_*5.56,f+x,-70.5+(g?5.06:0),Math.atan2(_,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,f+5,-61,16767392,1.6,22])}{let f=Gt(-118,-22);$n(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),$n(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let x=0;x<26;x++)t.add("iron",$t,-96,f+1.4,-52+x*2.2,0,.12,2.8,.12);t.add("iron",qe,-96,f+2.5,-24.5,0,.14,.14,56),t.add("iron",qe,-96,f+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let f=Gt(-62,112);t.add("wallC",qe,-62,f+5,122,.9,30,11,12),t.add("iron",$t,-62,f+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",yn,-57.2,f+6,118.2,.9+Math.PI,7,6,1);for(let x=0;x<12;x++)t.add("wood",qe,-74+x*2.6,f+.12,102+x*2.05,.9,.5,.2,5);t.add("iron",qe,-60,f+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",qe,-58.6,f+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let f=Gt(70,30);for(let x of[-1,1])t.add("stoneD",qe,70+x*3.6*Math.cos(-1.2),f+3,30-x*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",qe,70,f+7.2,30,-1.2,9.4,2,3.2),t.add("void",yn,70+.4*Math.sin(-1.2),f+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let x of[-1,1]){let _=70+x*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-x*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",$t,_,f+.3,g,0,.16,.6,.16),t.add("lamp",Pi,_,f+.72,g,0,.2,.3,.2)}r.push([67,f+1.6,28,16762977,1.1,10])}$n(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),$n(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let M=0;M<9;M++)if(t.add("wood",qe,188+M*2.2,1.1,24,0,2,.25,4.6),M%2===0)for(let v of[-1,1])t.add("wood",$t,188+M*2.2,1.1-1.6,24+v*2.1,0,.3,3.6,.3);let x=(M,v,E,D)=>{t.add(D,Pi,M,.55,v,E,2,1.3,5.2),t.add("void",qe,M,1,v,E,1.5,.3,4.2),t.add("wood",qe,M,.95,v,E,1.7,.1,.5)};x(206,29,.25,"wood"),x(203,6,-.2,"wallC"),x(204,48,.1,"wallB"),$n(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),$n(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),Kr(t,186,21);let _=-56,g=es(_),m=3.6;t.add("stone",qe,g,m,_,0,40,.8,6.5);for(let M of[-1,1])t.add("stone",qe,g,m+.9,_+M*3,0,40,1,.5);for(let M of[-9,9])t.add("stoneD",qe,g+M,m-3,_,0,2.4,6,6);Kr(t,g-19,_+2.6),Kr(t,g+19,_-2.6)}{let f=Gt(190,-175);t.add("stoneL",$t,190,f+4,-175,0,13,8,13),t.add("iron",i1,190,f+8,-175,0,13,13,13),t.add("void",qe,190,f+11.5,-171,0,1.6,5,6,-.6),t.add("wood",yn,190,f+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let f=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[_,g,m]of f)$n(t,n,_,g,7.5,6.5,4.6,m,"wallA","snow",{lit:.7});let x=Gt(-250,-250);$n(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",qe,-253.2,x+6,-227.6,.2,3,12,3),t.add("snow",jr,-253.2,x+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",$t,-252,x+.5,-252,0,2.2,1,2.2),t.add("void",$t,-252,x+1.02,-252,0,1.7,.02,1.7);for(let _ of[-1,1])t.add("wood",$t,-252+_*1.1,x+1.6,-252,0,.16,2.4,.16);t.add("wood",Qr,-252,x+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",$t,-246,x+.2,-244,0,1.6,.4,1.6),t.add("ember",pr,-246,x+.8,-244,0,.9,1.2,.9),r.push([-246,x+1.6,-244,16747066,2,18])}{let f=Gt(3,190);t.add("wood",$t,3,f+1.4,190,0,.18,2.8,.18),t.add("wood",qe,3.5,f+2.4,190,.2,2.2,.5,.08)}{let f=st.x,x=st.z,_=Gt(f,x),g=44;t.add("stoneD",fr,f,_+.02,x,0,72,.1,72),t.add("sand",fr,f,_+.06,x,0,45.6,.1,45.6),t.add("stoneD",fr,f,_+.09,x,0,5.4,.1,5.4),t.add("neon",fr,f,_+.1,x,0,4.6,.1,4.6),t.add("stoneD",fr,f,_+.11,x,0,4.2,.1,4.2),t.add("ember",fr,f,_+.12,x,0,1.1,.1,1.1);for(let m=0;m<g;m++){let M=(m+.5)/g*6.2832,v=Math.cos(M),E=Math.sin(M),D=-M+Math.PI/2,P=M>Math.PI?M-6.2832:M;if(Math.abs(P)<st.gate+.05)continue;for(let T=0;T<4;T++){let y=24+T*2.1,U=6.2832*(y+1.1)/g+.06;t.add(T%2?"stone":"stoneL",qe,f+v*y,_+(.9+T)/2,x+E*y,D,U,.9+T,2.2)}let R=32.8,F=6.2832*(R+.8)/g+.06;t.add("stone",qe,f+v*R,_+4.3,x+E*R,D,F,8.6,1.4),m%2&&t.add("stoneL",qe,f+v*R,_+9.1,x+E*R,D,F*.6,1,1.4),m%4===1&&(t.add("iron",$t,f+v*R,_+11.4,x+E*R,0,.14,5,.14),t.add(m%8===1?"banner":"flag",qe,f+v*R-E*.95,_+13.1,x+E*R+v*.95,D,1.8,1.1,.06))}for(let m of[-1,1]){let M=m*(st.gate+.11),v=f+Math.cos(M)*30.5,E=x+Math.sin(M)*30.5;t.add("stoneL",$t,v,_+6,E,0,4.6,12,4.6),t.add("roofA",pr,v,_+14.3,E,0,5.6,4.6,5.6),t.add("stoneD",$t,f+37.5,_+.6,x+m*5,0,1.2,1.2,1.2),t.add("ember",pr,f+37.5,_+1.6,x+m*5,0,.9,1.2,.9),r.push([f+37.5,_+2.6,x+m*5,16747066,1.8,18])}t.add("stone",qe,f+30.5,_+9.8,x,0,4.4,3,11),t.add("banner",qe,f+32.8,_+8.8,x,0,.08,3.4,3),t.add("gold",qe,f+32.86,_+8.8,x,0,.08,1.4,.4),t.add("gold",qe,f+32.86,_+9.1,x,0,.08,.4,1.3)}let u=[];for(let f of i.houses||[]){let x=fd[f.id];if(!x)continue;let[_,g,m]=x,M=Gt(_,g),v=Math.cos(m),E=Math.sin(m),D,P=(R,F)=>[_+R*v+F*E,g-R*E+F*v];if(f.id==="h0"){for(let[U,V,ce,O]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[w,W]=P(U,V);t.add("rock",Pi,w,M+O*.2,W,n()*3,ce,O,ce)}let[R,F]=P(0,1.2);t.add("void",Pi,R,M+1.2,F,m,4.4,4.6,2.4);let[T,y]=P(0,3.5);t.add("ember",pr,T,M+.4,y,0,.7,.9,.7),r.push([T,M+1.3,y,16747066,1.6,12]),D=P(0,4.2),t.solid(...P(0,-5),16,9)}else if(f.id==="h1")D=[72,27];else if(f.id==="h2"){t.add("stoneL",qe,...(R=>[R[0],M+4,R[1]])(P(-5.5,0)),m,1,9,16),t.add("stoneL",qe,...(R=>[R[0],M+2.6,R[1]])(P(5.5,-2)),m,1,6.2,11),t.add("stoneL",qe,...(R=>[R[0],M+5,R[1]])(P(0,-8)),m,12,11,1),t.add("stoneL",Qr,...(R=>[R[0],M+10.4,R[1]])(P(0,-8)),m,12,4,1),t.add("roofB",qe,...(R=>[R[0],M+8.4,R[1]])(P(-2.6,-3)),m,6.4,.3,9.5,0,-.5),t.add("rose",yn,...(R=>[R[0],M+6.5,R[1]])(P(0,-7.44)),m,2,4.6,1),t.add("stoneD",qe,...(R=>[R[0],M+.6,R[1]])(P(0,-5.6)),m,3,1.2,1.6);for(let[R,F]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(F,Pi,...(T=>[T[0],M+.25,T[1]])(P(R,-3.4)),0,.7,.5,.7);D=P(0,9),t.solid(...P(-5.5,0),1.2,16,m),t.solid(...P(0,-8),12,1.2,m)}else if(f.id==="h3"){let R=$n(t,n,_,g,22,14,11,m,"wallA","roofA",{lit:.85,hip:!0});for(let F of[-1,1]){let[T,y]=P(F*13.5,1);$n(t,n,T,y,6,9,13,m,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let F of[-1,1])Kr(t,...P(F*3,10));D=R.door}else if(f.id==="h4"){t.add("stone",qe,_,M+6,g,m,26,13,20);for(let[T,y]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[U,V]=P(T,y);t.add("stoneL",$t,U,M+9,V,0,7,19,7),t.add("roofB",pr,U,M+22,V,0,8.2,8,8.2),t.add("flag",qe,U+.9,M+27.2,V,m,1.8,1,.06),t.add("iron",$t,U,M+27,V,0,.12,3,.12)}for(let T=-5;T<=5;T++){let[y,U]=P(T*2.3,10.2);T%2&&t.add("stone",qe,y,M+13.4,U,m,1.2,1,.8)}let[R,F]=P(0,10.06);t.add("wood",yn,R,M+2.4,F,m,4,5,1);for(let T of[-7,7])for(let y of[5,9]){let[U,V]=P(T,10.06);t.add("winLit",yn,U,M+y,V,m,1.2,1.8,1)}D=P(0,12.5),t.solid(_,g,30,24,m)}else if(f.id==="h5"){t.add("obs",qe,_,M+9,g,m,20,18,16),t.add("obs",jr,_,M+24,g,m,16,12,13);for(let[T,y,U]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[V,ce]=P(T,y);t.add("obs",qe,V,M+U/2,ce,m,5,U,5),t.add("obs",jr,V,M+U+4,ce,m,5.6,8,5.6),t.add("umbra",yn,...(O=>[O[0],M+U-3,O[1]])(P(T,y+2.54)),m,1,3,1)}let[R,F]=P(0,8.06);t.add("umbra",yn,R,M+3.4,F,m,3.4,6.8,1),t.add("neon",yn,R,M+3.4,F+.02*v,m,.3,6.8,1),D=P(0,10.6),t.solid(_,g,30,18,m),r.push([D[0],M+4,D[1],9133302,2.4,22])}else if(f.id==="h6"){t.add("light",qe,_,M+7,g,m,26,14,16),t.add("gold",Qr,_,M+14,g,m,28,8,17.4);for(let T=-4;T<=4;T++)for(let y of[3,7,11]){if(T===0&&y===3)continue;let[U,V]=P(T*2.8,8.06);t.add("sun",yn,U,M+y,V,m,1.3,2.2,1)}let[R,F]=P(0,8.08);t.add("sun",yn,R,M+3,F,m,3,6,1);for(let T=0;T<6;T++){let[y,U]=P(0,9+T*1.1);t.add("light",qe,y,M-.2-T*.02,U,m,8+T,.5,1.1)}D=P(0,11.5),t.solid(_,g,26,16,m),r.push([D[0],M+6,D[1],16773312,3.2,40])}u.push({...f,x:D[0],z:D[1]})}let d=[],p=e.trees;for(let f=0;f<p*6&&d.length<p;f++){let x=(n()-.5)*860,_=(n()-.5)*860,g=Gt(x,_);if(Math.hypot(x,_)<176&&n()>.04||g<2.2||g>70||Math.abs(x-es(_))<16||No(x,_)<5||Math.hypot(x-318,_-300)<104||a(x,_,Object.values(fd).map(v=>[v[0],v[1],24]),0)||a(x,_,[[-250,-250,44],[190,-175,16],[st.x,st.z,42]],0))continue;let M=_>150?1:.45;n()>M||d.push({x,y:g,z:_,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:d}}var pd=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function r1(i,e,t,n){let[s,r,a,o]=pd[e.r]||pd[0],l=5+e.r*.5,c=ea(77+e.r);i.add(r,qe,0,n-.25,0,0,a,.5,o),i.add(s,qe,0,n+l/2,-o/2,0,a,l,.5),i.add(s,qe,-a/2,n+l/2,0,0,.5,l,o),i.add(s,qe,a/2,n+l/2,0,0,.5,l,o),i.add("rug",qe,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",qe,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",qe,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",pr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",qe,0,n+3.8,-o/2+.6,0,1.6,l-3.2,.8),i.add("wood",qe,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[f,x]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",$t,f*Math.min(2.6,a*.15),n+.47,x,0,.16,.95,.16);for(let f=-1;f<=1;f++)for(let x of[-1,1])i.add("wood",$t,f*1.3,n+.3,1+x*1.4,0,.55,.6,.55);i.add("white",$t,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",Pi,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let f=0;f<u;f++){let x=f%2?1:-1,_=Math.floor(f/2),g=x*(a/2-1.5),m=-o/2+2.6+_*2.6;if(m>o/2-1.5)break;i.add("wood",qe,g,n+.35,m,0,2.2,.5,1.1),i.add("white",qe,g,n+.66,m,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][f%4],qe,g-x*.3,n+.75,m,0,1.5,.1,1.02)}for(let f of[-1,1])for(let x=-1;x<=1;x+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",yn,f*(a/2-.27),n+2.6,x*o*.22,-f*Math.PI/2,1.3,1.9,1);let d=t.instruments||[],p=a/2-2;if(d.includes("i4")&&(i.add("wood",qe,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",qe,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),d.includes("i5")){for(let f=0;f<7;f++)i.add("gold",$t,-p+f*.34,n+1.6+Math.abs(3-f)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-f)*.6,.26);i.add("wood",qe,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return d.includes("i1")&&(i.add("wood",Pi,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",qe,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),d.includes("i3")&&(i.add("wallC",Pi,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",qe,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(d.includes("i6")||d.includes("i2")||d.includes("i0"))&&(i.add("gold",qe,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",qe,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",qe,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",yn,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:l,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(f=>Math.abs(f[0])<a/2-2&&Math.abs(f[1])<o/2-1.5)}}var a1=`
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
`;function gd(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let k=document.createElement("style");k.id="ew-css",k.textContent=a1,document.head.appendChild(k)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
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
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=k=>r.querySelector(k),o=a(".ew-c"),l=new ds({canvas:o,antialias:n,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),l.outputColorSpace=Yt,l.toneMapping=Wr,l.toneMappingExposure=1.05,s.shadows&&(l.shadowMap.enabled=!0,l.shadowMap.type=Vr);let c=new Yi,u=new dn(n?55:62,1,.3,2400),d=new it(12085832);c.fog=new Qa(d,s.fog[0],s.fog[1]);{let k=new qi(l);c.environment=k.fromScene(new sr,.04).texture,k.dispose()}let p=new H(-.62,.36,.5).normalize(),f=new er(16769228,2761796,.75);c.add(f);let x=new Ji(16768184,2.7);c.add(x,x.target),s.shadows&&(x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),x.shadow.bias=-6e-4,x.shadow.normalBias=.06);let _=new ze(new Jn(2e3,32,16),new on({side:rn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));c.add(_);let g=new St;c.add(g);{let k=document.createElement("canvas");k.width=256,k.height=128;let $=k.getContext("2d"),ne=ea(5);for(let nt=0;nt<26;nt++){let dt=40+ne()*176,at=46+ne()*40,He=18+ne()*34,A=$.createRadialGradient(dt,at,0,dt,at,He);A.addColorStop(0,"rgba(255,255,255,.5)"),A.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=A,$.fillRect(0,0,256,128)}let Ve=new Bn(k);for(let nt=0;nt<16;nt++){let dt=new ze(new Xi(1,1),new Nt({map:Ve,transparent:!0,depthWrite:!1,fog:!1,color:new it().setHSL(.04+ne()*.05,.75,.62+ne()*.2),opacity:.75})),at=ne()*6.28,He=500+ne()*900;dt.position.set(Math.cos(at)*He,190+ne()*180,Math.sin(at)*He),dt.scale.set(420+ne()*380,120+ne()*90,1),dt.rotation.x=Math.PI/2,dt.rotation.z=ne()*6.28,g.add(dt)}}{let k=new Xi(900,900,s.seg,s.seg);k.rotateX(-Math.PI/2);let $=k.attributes.position,ne=new Float32Array($.count*3),Ve=[0,0,0];for(let te=0;te<$.count;te++){let S=$.getX(te),G=$.getZ(te),J=Gt(S,G);$.setY(te,J),ud(S,G,J,Ve),ne[te*3]=Math.pow(Ve[0],2.2),ne[te*3+1]=Math.pow(Ve[1],2.2),ne[te*3+2]=Math.pow(Ve[2],2.2)}k.setAttribute("color",new an(ne,3));let nt=k.toNonIndexed();nt.computeVertexNormals(),k.dispose();let dt=document.createElement("canvas");dt.width=dt.height=256;let at=dt.getContext("2d"),He=ea(31);at.fillStyle="#e4e4e4",at.fillRect(0,0,256,256);for(let te=0;te<2600;te++){let S=190+Math.floor(He()*65);at.fillStyle=`rgba(${S},${S},${S},.55)`;let G=1+He()*5;at.fillRect(He()*256,He()*256,G,G)}at.strokeStyle="rgba(70,60,55,.3)",at.lineWidth=1.6;for(let te=0;te<8;te++)for(let S=0;S<8;S++){let G=te%2*16;at.strokeRect(S*32+G+(He()-.5)*3,te*32+(He()-.5)*3,32,32)}let A=new Bn(dt);A.wrapS=A.wrapT=Cr,A.repeat.set(140,140),A.anisotropy=4,A.colorSpace=Yt;let Z=new ze(nt,new Qt({vertexColors:!0,map:A,roughness:.96,metalness:0,envMapIntensity:.25}));Z.receiveShadow=s.shadows,c.add(Z);let se=new ze(new ii(440,2400,48,1),new Qt({color:4865826,roughness:1,envMapIntensity:.1}));se.rotation.x=-Math.PI/2,se.position.y=2.6,c.add(se)}let m=new ze(new Xi(2400,2400),new Qt({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));m.rotation.x=-Math.PI/2,m.position.y=.35,c.add(m);let M=new ze(new ui(96,48),new Qt({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));M.rotation.x=-Math.PI/2,M.position.set(318,1.32,300),c.add(M);let v=(k,$=.9,ne=0,Ve)=>new Qt(Object.assign({color:k,roughness:$,metalness:ne,envMapIntensity:.35},Ve||{})),E=k=>new Nt({color:k,toneMapped:(s.bloom,!1)}),D={wallA:v(12098426),wallB:v(9405303),wallC:v(10246725),wallW:v(14867920),stone:v(9144208),stoneL:v(11644338),stoneD:v(4867664),roofA:v(5125424),roofB:v(3554376),wood:v(5913892),iron:v(3816774,.5,.7),snow:v(15660024,.7),white:v(16052712),rock:v(5591642,1),obs:v(1512479,.35,.6),gold:v(15254632,.3,.9),light:v(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:v(4029142),rug:v(8007466),flowerA:v(14243450),flowerB:v(15254090),flowerC:v(9071318),sand:v(13481610,1),banner:v(10234410),winLit:E(16762222),winDark:v(1712176,.2,.6),lamp:E(16767392),ember:E(16742954),rose:E(13208278),umbra:E(10976255),neon:E(61695),sun:E(16774084),void:v(197382,1)},P=s1(e,s),R=P.B.build(D,s.shadows);c.add(R);for(let[k,$,ne,Ve,nt,dt]of P.lights.slice(0,n?12:6)){let at=new Hn(Ve,nt*14,dt,1.6);at.position.set(k,$,ne),c.add(at)}let F=new St;{let k=Gt(-70,100);F.position.set(-70,k+5.2,100);let $=new ze(new In(4.2,.28,10,48),E(8386303)),ne=new ze(new ui(4.1,40),new Nt({color:1723647,transparent:!0,opacity:.55,side:en,blending:En,depthWrite:!1})),Ve=new ze(new ii(1.2,3.6,40),new Nt({color:9133302,transparent:!0,opacity:.5,side:en,blending:En,depthWrite:!1}));F.add($,ne,Ve),F.scale.set(.8,1.25,1),F.rotation.y=.9;let nt=new Hn(3842303,60,46,1.5);F.add(nt),c.add(F),F.userData={m2:ne,m3:Ve}}{let k=new xn(.22,.34,1,6).translate(0,.5,0),$=new ln(1,1,7).translate(0,.5,0),ne=new ho(1,1),Ve=P.trees.filter(A=>A.pine),nt=P.trees.filter(A=>!A.pine),dt=new tn,at=new it,He=(A,Z,se,te)=>{let S=new no(A,Z,Math.max(1,se.length));return se.forEach((G,J)=>{te(G,dt),dt.updateMatrix(),S.setMatrixAt(J,dt.matrix),G._c&&S.setColorAt(J,G._c)}),S.count=se.length,S.castShadow=s.shadows,S.receiveShadow=!1,c.add(S),S};if(He(k,v(3811868,1),P.trees,(A,Z)=>{Z.position.set(A.x,A.y-.3,A.z),Z.scale.set(A.s,A.s*(A.pine?2.2:3.2),A.s),Z.rotation.set(0,0,0)}),Ve.forEach(A=>{A._c=at.clone().setHSL(.3+A.c*.06,.42,.11+A.c*.06)}),nt.forEach(A=>{A._c=at.clone().setHSL(.02+A.c*.11,.72,.36+A.c*.14)}),He($,v(16777215,1),Ve,(A,Z)=>{Z.position.set(A.x,A.y+A.s*1.3,A.z),Z.scale.set(A.s*2.1,A.s*6.2,A.s*2.1),Z.rotation.set(0,A.c*6,0)}),He(ne,new Qt({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),nt,(A,Z)=>{Z.position.set(A.x,A.y+A.s*4.1,A.z),Z.scale.set(A.s*2.5,A.s*2.1,A.s*2.5),Z.rotation.set(A.c,A.c*6,0)}),s.grass){let A=ea(9),Z=[];for(let se=0;se<s.grass*5&&Z.length<s.grass;se++){let te=(A()-.5)*760,S=(A()-.5)*760,G=Gt(te,S);Math.hypot(te,S)<184||Math.hypot(te-st.x,S-st.z)<39||G<2.3||G>44||Math.abs(te-es(S))<15||No(te,S)<4||Z.push({x:te,y:G,z:S,s:.5+A()*.9,c:A(),_c:at.clone().setHSL(.08+A()*.1,.5,.3+A()*.12)})}He(new ln(.5,1,4).translate(0,.5,0),v(16777215,1),Z,(se,te)=>{te.position.set(se.x,se.y-.05,se.z),te.scale.set(se.s*.9,se.s*1.1,se.s*.9),te.rotation.set(0,se.c*6,0)}).castShadow=!1}}let T={},y=new ta;P.houses.forEach((k,$)=>{let Ve=$*80,nt=new ta,dt=r1(nt,k,e,-400);for(let at in nt.b)for(let He of nt.b[at])He.translate(Ve,0,0),(y.b[at]=y.b[at]||[]).push(He);T[k.id]={...dt,ox:Ve,oy:-400,hs:k}});let U=y.build(D,!1);U.visible=!1,c.add(U);let V=new Hn(16756848,0,40,1.4),ce=new Hn(16773341,0,60,1.2);c.add(V,ce);let O=_s(e.hero);c.add(O.group);let w={x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};w.y=Gt(w.x,w.z);for(let k of dd)if(Math.hypot(w.x-k[0],w.z-k[1])<k[2]){w.zone=k[3];break}let W=(e.mounts||[]).filter(k=>fi[k.id]),j=Math.max(0,W.findIndex(k=>k.id===e.mount)),N=null;function ee(k){if(w.mount&&(c.remove(w.mount.group),ri(w.mount.group),w.mount=null,w.mountId=null),k&&W.length&&!w.inside){let $=W[j].id;w.mount=fi[$].make(),w.mountId=$,wo(w.mount.group),c.add(w.mount.group),N&&N.arm(!1),w.mount.group.traverse(ne=>{ne.isMesh&&(ne.castShadow=s.shadows)}),Se("En selle",W[j].name)}a('[data-w="mount"]').classList.toggle("on",!!w.mount)}W.length||(a('[data-w="mount"]').disabled=!0);let Me=[],ge=k=>{let $=document.createElement("canvas");$.width=256,$.height=64;let ne=$.getContext("2d");ne.font="600 26px Oxanium, Barlow, sans-serif",ne.textAlign="center",ne.shadowColor="#000",ne.shadowBlur=8,ne.fillStyle="#eaffff",ne.fillText(k,128,40);let Ve=new fs(new Zi({map:new Bn($),transparent:!0,depthWrite:!1,fog:!1}));return Ve.scale.set(2.6,.65,1),Ve};function Pe(k,$,ne,Ve,nt,dt){let at=n1[k.id];if(!at)return;let He=_s(Object.assign({},at,{fx:Object.assign({lod:!0},at.fx)}));He.group.position.set($,ne,Ve),He.group.rotation.y=nt;let A=ge(k.name.split(" ").slice(0,2).join(" "));A.position.y=He.height/He.group.scale.y+.32,He.group.add(A),He.group.traverse(Z=>{Z.isMesh&&(Z.castShadow=s.shadows&&!dt)}),c.add(He.group),Me.push({...k,av:He,x:$,y:ne,z:Ve,ry:nt,inside:dt||null,lb:A,li:0})}for(let k of e.npcs||[]){let $=t1[k.id];$&&Pe(k,$[0],Gt($[0],$[1]),$[1],$[2])}for(let k in T){let $=T[k];(e.npcs||[]).filter(ne=>ne.recruited).slice(0,$.spots.length).forEach((ne,Ve)=>{let[nt,dt]=$.spots[Ve];Pe(ne,$.ox+nt,$.oy,dt,Math.atan2(-nt,1-dt),k)})}U.visible=!1;function le(k,$){Tt(!0),w.x=k,w.z=$,w.y=Gt(k,$),Wt=!0}N=hd({scene:c,st:w,player:O,data:e,H:Gt,cam:u,root:r,pc:n,toast:(k,$)=>Se(k,$),cb:t,teleport:le,dismount:()=>ee(!1),dash:(k,$)=>{w.dashV=k/$,w.dashT=$},inputDir:()=>w.inDir});let xe={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},Ee={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Ke=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+xe[O.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+Ee[O.stance]},Fe=(k,$)=>{let ne=Object.keys(k);return ne[(ne.indexOf($)+1)%ne.length]};Ke();let Ze=null;if(s.bloom)try{Ze=new Lo(l),Ze.addPass(new Do(c,u)),Ze.addPass(new hr(new Te(256,256),.42,.7,.82)),Ze.addPass(new Uo)}catch{Ze=null}function Oe(){let k=r.clientWidth,$=r.clientHeight;if(k>$){let ne=r.querySelector(".ew-rot");ne&&ne.classList.remove("on")}l.setSize(k,$,!1),u.aspect=k/$,u.fov=n?55:k>$?50:62,u.updateProjectionMatrix(),Ze&&Ze.setSize(k,$)}Oe(),window.addEventListener("resize",Oe);let We=a(".ew-map"),Le=We.getContext("2d"),B=document.createElement("canvas");B.width=B.height=248;{let k=B.getContext("2d"),$=k.createImageData(248,248),ne=[0,0,0];for(let Ve=0;Ve<248;Ve++)for(let nt=0;nt<248;nt++){let dt=(nt/247-.5)*900,at=(Ve/247-.5)*900,He=Gt(dt,at);ud(dt,at,He,ne);let A=(Ve*248+nt)*4,Z=He<.4;$.data[A]=Z?70:ne[0]*235,$.data[A+1]=Z?90:ne[1]*235,$.data[A+2]=Z?120:ne[2]*235,$.data[A+3]=255}k.putImageData($,0,0),k.strokeStyle="#c9b48a",k.lineWidth=2,k.beginPath(),k.arc((st.x/900+.5)*248,(st.z/900+.5)*248,8,0,7),k.stroke(),k.fillStyle="#2a2420";for(let Ve of P.B.boxes){let nt=(Ve[0]/900+.5)*248,dt=(Ve[2]/900+.5)*248;k.fillRect(nt,dt,Math.max(1.5,(Ve[1]-Ve[0])/900*248),Math.max(1.5,(Ve[3]-Ve[2])/900*248))}}function Re(){let $=w.inside?0:w.x,ne=w.inside?0:w.z,Ve=($/900+.5)*248,nt=(ne/900+.5)*248;if(Le.setTransform(1,0,0,1,0,0),Le.fillStyle="#0b0b12",Le.fillRect(0,0,248,248),w.inside){Le.fillStyle="#7ff6ff",Le.font="600 20px Oxanium, sans-serif",Le.textAlign="center",Le.fillText("Int\xE9rieur",124,130);return}Le.translate(124,124),Le.scale(2.2,2.2),Le.translate(-Ve,-nt),Le.drawImage(B,0,0);let dt=(at,He,A,Z)=>{Le.fillStyle=A,Le.beginPath(),Le.arc((at/900+.5)*248,(He/900+.5)*248,Z,0,7),Le.fill()};for(let at of P.houses)dt(at.x,at.z,"#ffd479",2.6);for(let at of Me)at.inside||dt(at.x,at.z,"#7ff6ff",1.7);dt(-70,100,"#3aa0ff",2.4),dt(st.x,st.z,"#ff4d6d",2.2);for(let at of N.enemies)at.type!=="dummy"&&at.state!=="dead"&&dt(at.x,at.z,"#ff4d6d",1.5);Le.setTransform(1,0,0,1,124,124),Le.rotate(-w.yaw+Math.PI),Le.fillStyle="#fff",Le.strokeStyle="#000",Le.lineWidth=2,Le.beginPath(),Le.moveTo(0,-9),Le.lineTo(6.5,7),Le.lineTo(0,3.5),Le.lineTo(-6.5,7),Le.closePath(),Le.stroke(),Le.fill()}let de=0;function Se(k,$=""){let ne=a(".ew-zone");ne.querySelector("b").textContent=k,ne.querySelector("i").textContent=$,ne.querySelector("i").style.display=$?"":"none",ne.classList.add("on"),clearTimeout(de),de=setTimeout(()=>ne.classList.remove("on"),3200)}let he={},Be={mx:0,mz:0,jump:!1},Ce=null,L=(k,$)=>{if(w.paused&&$&&k.code==="Escape"){me(!1);return}he[k.code]=$;let ne=(k.key||"").toLowerCase();$&&(k.code==="Escape"?w.talking?Ue():me(!0):w.talking?(ne==="e"||ne==="f"||k.code==="Enter"||k.code==="Space")&&(k.preventDefault(),ke()):ne==="e"||ne==="f"||k.code==="Enter"?Ct():ne==="m"?w.mount&&W.length>1&&he.ShiftLeft?(j=(j+1)%W.length,ee(!0)):ee(!w.mount):ne==="c"&&W.length>1?(j=(j+1)%W.length,w.mount?ee(!0):Se(W[j].name,"Monture choisie")):k.code==="Space"?(k.preventDefault(),Be.jump=!0):ne==="r"?N.toggleArm():ne==="x"?N.attack():ne==="v"?N.dodge():/^(Digit|Numpad)[1-5]$/.test(k.code)&&N.skill(+k.code.slice(-1)))},C=k=>L(k,!0),Q=k=>L(k,!1);window.addEventListener("keydown",C),window.addEventListener("keyup",Q);let ue=null,be={id:null,ox:0,oy:0},_e=a(".ew-stick"),$e=k=>{if(!k.target.closest("button,.ew-dlg,.ew-menu,.ew-map")){if(!n&&k.clientX<r.clientWidth*.46&&k.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&be.id===null){be.id=k.pointerId,be.ox=k.clientX,be.oy=k.clientY,_e.style.display="block",_e.style.left=k.clientX+"px",_e.style.top=k.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",_e.firstChild.style.transform="";return}ue||(ue={id:k.pointerId,x:k.clientX,y:k.clientY,x0:k.clientX,y0:k.clientY,t:performance.now(),b:k.button})}},Ie=k=>{if(k.pointerId===be.id){let $=k.clientX-be.ox,ne=k.clientY-be.oy,Ve=Math.hypot($,ne),nt=52;Ve>nt&&($*=nt/Ve,ne*=nt/Ve),_e.firstChild.style.transform=`translate(${$}px,${ne}px)`,Be.mx=$/nt,Be.mz=ne/nt}else ue&&k.pointerId===ue.id&&(w.camYaw-=(k.clientX-ue.x)*(n?.0042:.0062),w.camPitch=Math.max(-.25,Math.min(1.2,w.camPitch+(k.clientY-ue.y)*(n?.003:.0045))),ue.x=k.clientX,ue.y=k.clientY)},Xe=k=>{k.pointerId===be.id&&(be.id=null,Be.mx=Be.mz=0,_e.style.display="none"),ue&&k.pointerId===ue.id&&(n&&k.type==="pointerup"&&performance.now()-ue.t<300&&Math.hypot(k.clientX-ue.x0,k.clientY-ue.y0)<6&&(ue.b===0?N.attack():ue.b===2&&N.dodge()),ue=null),k.pointerId===Qe&&(Qe=null,N.held=!1)},Qe=null;r.addEventListener("pointerdown",k=>{let $=k.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!$||w.paused)return;k.preventDefault(),$._pd=performance.now();let ne=$.dataset.w;ne==="jump"?Be.jump=!0:ne==="run"?(w.run=!w.run,$.classList.toggle("on",w.run)):ne==="mount"?ee(!w.mount):Ct()}),r.addEventListener("pointerdown",k=>{let $=k.target.closest("[data-c]");if(!$||w.paused)return;k.preventDefault();let ne=$.dataset.c;ne==="draw"?N.toggleArm():ne==="dodge"?N.dodge():ne==="0"?(N.attack(),N.held=!0,Qe=k.pointerId):N.skill(+ne)}),r.addEventListener("pointerdown",$e),r.addEventListener("pointermove",Ie),r.addEventListener("pointerup",Xe),r.addEventListener("pointercancel",Xe);let pt=k=>{w.camDist=Math.max(2.6,Math.min(22,w.camDist*(k.deltaY>0?1.1:.9))),k.preventDefault()};r.addEventListener("wheel",pt,{passive:!1}),r.addEventListener("contextmenu",k=>k.preventDefault()),r.addEventListener("click",k=>{let $=k.target.closest("[data-w]");if(!$)return;let ne=$.dataset.w;if($._pd&&performance.now()-$._pd<800){$._pd=0;return}if(ne==="act")Ct();else if(ne==="mount")ee(!w.mount);else if(ne==="run")w.run=!w.run,$.classList.toggle("on",w.run);else if(ne==="jump")Be.jump=!0;else if(ne==="dnext")ke();else if(ne==="dclose")Ue();else if(ne==="menu")me(!0);else if(ne==="resume")me(!1);else if(ne==="home")le(-6,34),me(!1);else if(ne==="arena")ee(!1),le(st.x+40,st.z),w.yaw=-Math.PI/2,w.camYaw=Math.PI/2,me(!1);else if(ne==="mv"||ne==="stn")O.setStyle(ne==="mv"?{move:Fe(xe,O.move)}:{stance:Fe(Ee,O.stance)}),Ke(),t.onStyle&&t.onStyle({move:O.move,stance:O.stance});else if(ne==="fs")ht(),a(".ew-rot").classList.remove("on"),me(!1);else if(ne==="quit")Mt();else if(ne==="mode"){let Ve=[w.x,w.z];Kt.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",w.inside?null:Ve)}});function me(k){w.paused=k,a(".ew-mm").classList.toggle("on",k),k||a(".ew-wsel").classList.remove("on")}let ot={n:1,loop:!1};function mt(){let k=N.arena.best+1;ot.n=Math.max(1,Math.min(k,ot.n));let $=ot.n,ne=t.wavePreview?t.wavePreview($):null;a(".ew-ws-n").textContent=$,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+k+(N.arena.best?" \xB7 record "+N.arena.best:""),a(".ew-ws-rw").innerHTML=($%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":$%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(ne?"R\xE9compense : <b>+"+ne.x+" XP</b> \xB7 <b>+"+ne.k+" kinahs</b>"+(ne.first===!1?" \xB7 d\xE9j\xE0 gagn\xE9e aujourd\u2019hui (10 %)":" \xB7 plein tarif une fois par jour, puis 10 %"):""),a('[data-ws="loop"]').classList.toggle("on",ot.loop),a('[data-ws="loop"]').textContent=(ot.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let Ve=5*Math.floor(k/5),nt=a('[data-ws="boss"]');nt.style.display=Ve>=5?"":"none",nt.textContent="Dernier champion ouvert : vague "+Ve}function lt(){ot.n=N.arenaStart(),w.paused=!0,mt(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",k=>{let $=k.target.closest("[data-ws]");if(!$)return;let ne=$.dataset.ws;if(ne==="x"||ne==="go"){a(".ew-wsel").classList.remove("on"),w.paused=!1,ne==="go"&&N.startArena(ot.n,ot.loop);return}ne==="loop"?ot.loop=!ot.loop:ne==="boss"?ot.n=5*Math.floor((N.arena.best+1)/5):ot.n+=+ne,mt()});let et=!1,Je=()=>{try{let k=screen.orientation;return k&&k.lock?k.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function ht(){let k=document.documentElement,$=k.requestFullscreen||k.webkitRequestFullscreen;if(!$)return Je();let ne=null;try{ne=$.call(k,{navigationUI:"hide"}),et=!0}catch{ne=null}return(ne&&ne.then?ne:Promise.resolve()).then(Je,Je)}n||Je().then(k=>{if(!k&&r.clientHeight>r.clientWidth&&!At){let $=a(".ew-rot");$.classList.add("on"),setTimeout(()=>$.classList.remove("on"),9e3)}});function Mt(){let k=w.inside?null:[Math.round(w.x),Math.round(w.z)];Kt.dispose(),t.onExit&&t.onExit(k)}function Ct(){!Ce||w.talking||(Ce.kind==="npc"?q(Ce.npc):Ce.kind==="house"?tt(Ce.id):Ce.kind==="exit"?Tt():Ce.kind==="arena"?lt():Ce.kind==="rift"&&t.onRift&&(Kt.dispose(),t.onRift([Math.round(w.x),Math.round(w.z)])))}let ct=0;function Ae(k){let $=k.lines&&k.lines.length?k.lines:["\u2026"],ne=$[k.li%$.length],Ve=a(".ew-dlg p");Ve.textContent="",clearInterval(ct);let nt=0;ct=setInterval(()=>{nt+=2,Ve.textContent=ne.slice(0,nt),nt>=ne.length&&clearInterval(ct)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(k.name,Object.assign(document.createElement("small"),{textContent:k.role||""})),a(".ew-bond").textContent=k.bond?"Lien "+"\u2665".repeat(Math.min(10,k.bond)):"",a('[data-w="dnext"]').style.display=$.length>1?"":"none"}function q(k){w.talking=k,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),Ae(k);let $=Math.atan2(w.x-k.x,w.z-k.z);k.av.group.rotation.y=$,w.yaw=$+Math.PI,t.onTalk&&t.onTalk(k.id)}function ke(){let k=w.talking;if(!k)return;let $=a(".ew-dlg p"),ne=k.lines||[],Ve=ne[k.li%Math.max(1,ne.length)]||"";if($.textContent.length<Ve.length){clearInterval(ct),$.textContent=Ve;return}if(k.li++,k.li%Math.max(1,ne.length)===0){Ue();return}Ae(k)}function Ue(){clearInterval(ct),w.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let je=null;function tt(k){let $=T[k];$&&(ee(!1),je=[w.x,w.z,w.yaw],w.inside=k,w.x=$.ox+$.door[0],w.z=$.door[1]-.6,w.y=$.oy,w.yaw=Math.PI,w.camYaw=0,w.camDist=Math.min(w.camDist,6),U.visible=!0,R.visible=!1,c.fog.near=60,c.fog.far=200,V.position.set($.ox,$.oy+1.6,-$.D/2+2.2),V.intensity=90,ce.position.set($.ox,$.oy+$.h-.6,1.5),ce.intensity=$.hs.r>=6?160:$.hs.r===5?50:70,ce.color.set($.hs.r>=6?16774084:$.hs.r===5?10976255:16773341),x.intensity=0,f.intensity=.35,Se($.hs.name,$.hs.cap>=99?"Places illimit\xE9es":$.hs.cap+" places"))}function Tt(k){w.inside&&(w.inside=null,U.visible=!1,R.visible=!0,c.fog.near=s.fog[0],c.fog.far=s.fog[1],V.intensity=ce.intensity=0,x.intensity=2.9,f.intensity=.7,je&&!k&&(w.x=je[0],w.z=je[1],w.yaw=je[2]+Math.PI),w.y=Gt(w.x,w.z))}let gt=new H,ut=new H,xt=performance.now(),At=!1,Ne=0,Wt=!0;function Ft(k){if(At)return;requestAnimationFrame(Ft);let $=Math.min(.05,(k-xt)/1e3);if(xt=k,w.paused)return;w.t+=$;let ne=Be.mx,Ve=Be.mz;(he.KeyW||he.ArrowUp)&&(Ve-=1),(he.KeyS||he.ArrowDown)&&(Ve+=1),(he.KeyA||he.ArrowLeft)&&(ne-=1),(he.KeyD||he.ArrowRight)&&(ne+=1);let nt=Math.min(1,Math.hypot(ne,Ve));nt*=w.talking?0:N.moveK();let dt=w.run||he.ShiftLeft||he.ShiftRight,at=O.move,He=at==="levitation"&&!w.mount,A=at==="levitation"?[11,16]:at==="ninja"?[10.5,15.5]:[9.5,14],Z=(w.mount?9.5*fi[w.mountId].speed:dt?A[1]:A[0])*(w.inside?.45:1),se=nt*Z;if(w.speed+=(se-w.speed)*Math.min(1,$*(w.mount?3:He?9:14)),w.inDir=nt>.05?Math.atan2(ne,Ve)+w.camYaw:null,nt>.05&&w.dashT<=0){let z=w.inDir-w.yaw;for(;z>Math.PI;)z-=6.2832;for(;z<-Math.PI;)z+=6.2832;w.yaw+=z*Math.min(1,$*(w.mount?5:He?13:18))}w.dashT>0&&(w.dashT-=$,w.speed=w.dashV);let te=Math.sin(w.yaw)*w.speed*$,S=Math.cos(w.yaw)*w.speed*$,G=w.x+te,J=w.z+S;if(w.inside){let b=T[w.inside];G=Math.max(b.ox-b.W/2+.8,Math.min(b.ox+b.W/2-.8,G)),J=Math.max(-b.D/2+1.9,Math.min(b.D/2-.7,J))}else{G=Math.max(-438,Math.min(438,G)),J=Math.max(-438,Math.min(438,J));let b=w.mount?1.1:.55;for(let z of P.B.boxes)if(G>z[0]-b&&G<z[1]+b&&J>z[2]-b&&J<z[3]+b){let Y=G-(z[0]-b),X=z[1]+b-G,ie=J-(z[2]-b),K=z[3]+b-J,pe=Math.min(Y,X,ie,K);pe===Y?G=z[0]-b:pe===X?G=z[1]+b:pe===ie?J=z[2]-b:J=z[3]+b}{let z=G-st.x,Y=J-st.z,X=Math.hypot(z,Y);if(X>st.r-.5&&X<st.wall+.6&&Math.abs(Math.atan2(Y,z))>st.gate){let ie=(X<(st.r+st.wall)/2?st.r-.5:st.wall+.6)/X;G=st.x+z*ie,J=st.z+Y*ie}}for(let z of Me)if(!z.inside){let Y=Math.hypot(G-z.x,J-z.z);Y<.8&&Y>.001&&(G=z.x+(G-z.x)/Y*.8,J=z.z+(J-z.z)/Y*.8)}}w.x=G,w.z=J;let re=w.inside?T[w.inside].oy:Math.max(Gt(w.x,w.z),Math.abs(w.x-es(w.z))<30&&Math.abs(w.z+56)<3.3&&Math.abs(w.x-es(-56))<20?4:-99,Math.abs(w.z-24)<2.3&&w.x>186&&w.x<208?1.22:-99,Math.hypot(w.x-318,w.z-300)<96?1.32:-99,He?.4:-99);if(Be.jump&&(w.onGround||w.jumps<2)&&!w.mount&&!w.talking&&!w.down){let b=!w.onGround;w.vy=b?8.2:8.6,w.jumps=b?2:1,w.onGround=!1,b&&O.play("flip",.62)}Be.jump=!1,w.vy-=24*$,w.y+=w.vy*$,w.y<=re?(w.y=re,w.vy=0,w.onGround=!0,w.jumps=0):w.y-re>.35&&(w.onGround=!1);{let b=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(w.speed-10.5)/5))*7;Math.abs(u.fov-b)>.05&&(u.fov+=(b-u.fov)*Math.min(1,$*5),u.updateProjectionMatrix())}let fe=!w.inside&&!He&&w.y<-.75?-.75-w.y:0,ae=O.group;if(w.mount){let b=w.mount;b.group.position.set(w.x,w.y+fe,w.z),b.group.rotation.y=w.yaw,b.update($,w.speed/8),ae.position.set(w.x-Math.sin(w.yaw)*-b.seat.z,w.y+fe+b.seat.y-O.seatDrop,w.z-Math.cos(w.yaw)*-b.seat.z),ae.rotation.y=w.yaw,O.update($,{riding:!0,wide:b.wide})}else ae.position.set(w.x,w.y+fe,w.z),ae.rotation.y=w.yaw,O.update($,{speed:w.speed/4.6,down:w.down});N.update($);let ve=!!N.pl.mecha,De=ve?2.5:(w.mount?w.mount.seat.y:0)+O.height*.82,rt=w.camDist*(w.mount?1.45:ve?1.7:1)*(w.talking?.62:1),bt=Math.cos(w.camPitch);gt.set(w.x,w.y+fe+De,w.z);for(let b of[1,.72,.5,.32,.18])if(ut.set(gt.x+Math.sin(w.camYaw)*bt*rt*b,gt.y+Math.sin(w.camPitch)*rt*b,gt.z+Math.cos(w.camYaw)*bt*rt*b),w.inside||ut.y-w.y>16||!P.B.boxes.some(z=>ut.x>z[0]-.4&&ut.x<z[1]+.4&&ut.z>z[2]-.4&&ut.z<z[3]+.4))break;if(w.inside){let b=T[w.inside];ut.x=Math.max(b.ox-b.W/2+.5,Math.min(b.ox+b.W/2-.5,ut.x)),ut.z=Math.max(-b.D/2+.6,Math.min(b.D/2+9,ut.z)),ut.y=Math.max(b.oy+.6,Math.min(b.oy+b.h+4,ut.y))}else{let b=Math.max(Gt(ut.x,ut.z),.35)+.7;ut.y<b&&(ut.y=b)}Wt?(u.position.copy(ut),Wt=!1):u.position.lerp(ut,Math.min(1,$*12)),u.lookAt(gt),N.shake>.01&&(u.position.x+=(Math.random()-.5)*N.shake*.5,u.position.y+=(Math.random()-.5)*N.shake*.4),_.position.copy(u.position),g.position.x=w.t*2.2%300,_.visible=g.visible=!w.inside,m.visible=M.visible=!w.inside,x.position.set(w.x+p.x*120,w.y+p.y*120+20,w.z+p.z*120),x.target.position.set(w.x,w.y,w.z),F.rotation.y+=$*.25,F.userData.m3.rotation.z-=$*1.4,F.userData.m2.material.opacity=.45+Math.sin(w.t*2.6)*.14;let yt=null,h=1e9;for(let b of Me){let z=b.inside===w.inside;if(b.av.group.visible=z,!z)continue;let Y=Math.hypot(w.x-b.x,w.z-b.z);b.lb.visible=Y<26&&Y>2.6,Y<40&&b.av.update($,{});for(let X of b.av.inks)X.visible=Y<32;if(Y<9&&!w.talking){let X=Math.atan2(w.x-b.x,w.z-b.z)-b.av.group.rotation.y;for(;X>Math.PI;)X-=6.2832;for(;X<-Math.PI;)X+=6.2832;b.av.group.rotation.y+=X*Math.min(1,$*3)}Y<3.2&&Y<h&&(h=Y,yt={kind:"npc",npc:b,text:"Parler \xE0 "+b.name.split(" ")[0]})}if(w.inside){let b=T[w.inside];Math.hypot(w.x-b.ox-b.door[0],w.z-b.door[1])<2.2&&!yt&&(yt={kind:"exit",text:"Sortir"})}else{for(let b of P.houses){let z=Math.hypot(w.x-b.x,w.z-b.z);z<4.5&&z<h&&(h=z,yt={kind:"house",id:b.id,text:"Entrer : "+b.name})}t.onRift&&Math.hypot(w.x+70,w.z-100)<6&&!yt&&(yt={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!yt&&!N.arena.on&&!w.down&&Math.hypot(w.x-st.x,w.z-st.z)<3.4&&(yt={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+N.arenaStart()})}Ce=yt;let I=a(".ew-prompt");if(yt&&!w.talking){I.classList.add("on");let b=I.firstChild,z=(n?"[E]  ":"")+yt.text;b.textContent!==z&&(b.textContent=z)}else I.classList.remove("on");if(!w.inside){let b="",z="";for(let Y of dd)if(Math.hypot(w.x-Y[0],w.z-Y[1])<Y[2]){b=Y[3],z=Y[4];break}b&&b!==w.zone&&Se(b,z),w.zone=b}(Ne+=$)>.12&&(Ne=0,Re()),Ze?Ze.render():l.render(c,u)}let Kt={combat:N,player:O,dispose(){if(!At){At=!0,N.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),et&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(ct),clearTimeout(de),window.removeEventListener("keydown",C),window.removeEventListener("keyup",Q),window.removeEventListener("resize",Oe),ri(c),Ze&&Ze.dispose&&Ze.dispose(),l.dispose(),l.forceContextLoss&&l.forceContextLoss(),r.remove()}},state:w,teleport:(k,$)=>le(k,$),enter:tt,mountOn:()=>ee(!0),look(k,$,ne){w.camYaw=k,w.camPitch=$,ne&&(w.camDist=ne)}};return requestAnimationFrame(k=>{xt=k,Ft(k),setTimeout(()=>{let $=a(".ew-load");$.style.opacity=0,setTimeout(()=>$.remove(),900),Se("Vesp\xE9rane","Ciel couleur de rouille")},350)}),Kt}window.Elyos3D={avatarView:td,startWorld:gd,groundHeight:Gt,DEFAULT_LOOK:Ac,HAIR_STYLES:ju,STANCES:Ao,MOVES:Ro,MOUNT_SPEED:Object.fromEntries(Object.entries(fi).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
