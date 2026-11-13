(()=>{var Qu=0,_c=1,ed=2;var Kh=1,Ur=2,ci=3,Li=0,Zt=1,Vt=2;var Qn=0,Ci=1,mn=2,yc=3,vc=4,td=5,ji=100,nd=101,id=102,Mc=103,bc=104,sd=200,rd=201,ad=202,od=203,cl=204,hl=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,xd=0,_d=1,yd=2,wa=3,vd=4,Md=5,bd=6,wd=7,tc=0,Sd=1,Ed=2,ei=0,nc=1,ic=2,sc=3,Nr=4,Td=5,rc=6;var Qh=300,zs=301,Fs=302,ul=303,dl=304,ro=306,vr=1e3,Wn=1001,fl=1002,Qt=1003,wc=1004;var To=1005;var On=1006,Ad=1007;var Mr=1008;var Pi=1009,Rd=1010,Cd=1011,ac=1012,eu=1013,Ai=1014,Ri=1015,Xn=1016,tu=1017,nu=1018,es=1020,Pd=1021,Tn=1023,Id=1024,Ld=1025,ts=1026,Bs=1027,Dd=1028,iu=1029,Ud=1030,su=1031,ru=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Sc=35840,Ec=35841,Tc=35842,Ac=35843,au=36196,Rc=37492,Cc=37496,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Uc=37812,Nc=37813,Oc=37814,zc=37815,Fc=37816,Bc=37817,kc=37818,Hc=37819,Gc=37820,Vc=37821,Io=36492,Wc=36494,Xc=36495,Nd=36283,qc=36284,Yc=36285,Zc=36286;var Sa=2300,Ea=2301,Lo=2302,Jc=2400,$c=2401,jc=2402;var ou=3e3,ns=3001,Od=3200,zd=3201,ao=0,Fd=1,zn="",zt="srgb",pi="srgb-linear",oc="display-p3",oo="display-p3-linear",Ta="linear",Pt="srgb",Aa="rec709",Ra="p3";var us=7680;var Kc=519,Bd=512,kd=513,Hd=514,lu=515,Gd=516,Vd=517,Wd=518,Xd=519,pl=35044;var Qc="300 es",ml=1035,di=2e3,Ca=2001,Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Do=Math.PI/180,Pa=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function pn(i,e,t){return Math.max(e,Math.min(t,i))}function qd(i,e){return(i%e+e)%e}function Uo(i,e,t){return(1-t)*i+t*e}function eh(i){return(i&i-1)===0&&i!==0}function gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],u=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],v=s[4],S=s[7],D=s[2],b=s[5],P=s[8];return r[0]=a*_+o*M+l*D,r[3]=a*m+o*v+l*b,r[6]=a*f+o*S+l*P,r[1]=c*_+h*M+d*D,r[4]=c*m+h*v+d*b,r[7]=c*f+h*S+d*P,r[2]=p*_+u*M+g*D,r[5]=p*m+u*v+g*b,r[8]=p*f+u*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*r,u=c*r-a*l,g=t*d+n*p+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new xt;function cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Ia("canvas");return i.style.display="block",i}var th={};function gr(i){i in th||(th[i]=!0,console.warn(i))}var nh=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[pi]:{transfer:Ta,primaries:Aa,toReference:i=>i,fromReference:i=>i},[zt]:{transfer:Pt,primaries:Aa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oo]:{transfer:Ta,primaries:Ra,toReference:i=>i.applyMatrix3(ih),fromReference:i=>i.applyMatrix3(nh)},[oc]:{transfer:Pt,primaries:Ra,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ih),fromReference:i=>i.applyMatrix3(nh).convertLinearToSRGB()}},Zd=new Set([pi,oo]),St={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Xr[e].toReference,s=Xr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===zn?Ta:Xr[i].transfer}};function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,La=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Ia("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ns(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,An=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=On,a=Mr,o=Tn,l=Pi,c=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=fi(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ns?zt:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?ns:ou}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?zt:zn}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Qh;An.DEFAULT_ANISOTROPY=1;var Ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],u=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,S=(u+1)/2,D=(f+1)/2,b=(h+p)/4,P=(d+_)/4,k=(g+m)/4;return v>S&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=P/n):S>D?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=k/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=P/r,s=k/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(p-h)/M,this.w=Math.acos((c+u+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?zt:zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new An(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ua=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _l=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],p=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==p||c!==u||h!==g){let m=1-o,f=l*p+c*u+h*g+d*_,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let D=Math.sqrt(v),b=Math.atan2(D,f*M);m=Math.sin(m*b)/D,o=Math.sin(o*b)/D}let S=o*M;if(l=l*m+p*S,c=c*m+u*S,h=h*m+g*S,d=d*m+_*S,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],p=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*u-c*p,e[t+1]=l*g+h*p+c*d-o*u,e[t+2]=c*g+h*u+o*p-l*d,e[t+3]=h*g-o*d-l*p-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),p=l(n/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*d+c*u*g,this._y=c*u*d-p*h*g,this._z=c*h*g+p*u*d,this._w=c*h*d-p*u*g;break;case"YXZ":this._x=p*h*d+c*u*g,this._y=c*u*d-p*h*g,this._z=c*h*g-p*u*d,this._w=c*h*d+p*u*g;break;case"ZXY":this._x=p*h*d-c*u*g,this._y=c*u*d+p*h*g,this._z=c*h*g+p*u*d,this._w=c*h*d-p*u*g;break;case"ZYX":this._x=p*h*d-c*u*g,this._y=c*u*d+p*h*g,this._z=c*h*g-p*u*d,this._w=c*h*d+p*u*g;break;case"YZX":this._x=p*h*d+c*u*g,this._y=c*u*d+p*h*g,this._z=c*h*g-p*u*d,this._w=c*h*d-p*u*g;break;case"XZY":this._x=p*h*d-c*u*g,this._y=c*u*d-p*h*g,this._z=c*h*g+p*u*d,this._w=c*h*d+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new G,sh=new Rn,mi=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Yr.subVectors(this.max,ar),fs.subVectors(e.a,ar),ps.subVectors(e.b,ar),ms.subVectors(e.c,ar),bi.subVectors(ps,fs),wi.subVectors(ms,ps),qi.subVectors(fs,ms);let t=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-qi.z,qi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!Bo(t,fs,ps,ms,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,fs,ps,ms,Yr))?!1:(Zr.crossVectors(bi,wi),t=[Zr.x,Zr.y,Zr.z],Bo(t,fs,ps,ms,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new G,new G,new G,new G,new G,new G,new G,new G],Hn=new G,qr=new mi,fs=new G,ps=new G,ms=new G,bi=new G,wi=new G,qi=new G,ar=new G,Yr=new G,Zr=new G,Yi=new G;function Bo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jd=new mi,or=new G,ko=new G,Ui=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(ko)),this.expandByPoint(or.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new G,Ho=new G,Jr=new G,Si=new G,Go=new G,$r=new G,Vo=new G,Na=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ho.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ho);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=Si.dot(this.direction),l=-Si.dot(Jr),c=Si.lengthSq(),h=Math.abs(1-a*a),d,p,u,g;if(h>0)if(d=a*l-o,p=a*o-l,g=r*h,d>=0)if(p>=-g)if(p<=g){let _=1/h;d*=_,p*=_,u=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),u=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ho).addScaledVector(Jr,p),u}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){Go.subVectors(t,e),$r.subVectors(n,e),Vo.crossVectors(Go,$r);let a=this.direction.dot(Vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);let l=o*this.direction.dot($r.crossVectors(Si,$r));if(l<0)return null;let c=o*this.direction.dot(Go.cross(Si));if(c<0||l+c>a)return null;let h=-o*Si.dot(Vo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,p,u,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,p,u,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,d,p,u,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=p,f[3]=u,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*h,u=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+u*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,u=l*d,g=c*h,_=c*d;t[0]=p+_*o,t[4]=g*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,u=l*d,g=c*h,_=c*d;t[0]=p-_*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,u=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-u,t[8]=p*c+_,t[1]=l*d,t[5]=_*c+p,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,u=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-p*d,t[8]=g*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+g,t[10]=p-_*d}else if(e.order==="XZY"){let p=a*l,u=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+_,t[5]=a*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*h,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kd,e,Qd)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ei.crossVectors(n,Sn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ei.crossVectors(n,Sn)),Ei.normalize(),jr.crossVectors(Sn,Ei),s[0]=Ei.x,s[4]=jr.x,s[8]=Sn.x,s[1]=Ei.y,s[5]=jr.y,s[9]=Sn.y,s[2]=Ei.z,s[6]=jr.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],u=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],v=n[7],S=n[11],D=n[15],b=s[0],P=s[4],k=s[8],E=s[12],R=s[1],z=s[5],J=s[9],j=s[13],O=s[2],w=s[6],q=s[10],te=s[14],V=s[3],ie=s[7],pe=s[11],ye=s[15];return r[0]=a*b+o*R+l*O+c*V,r[4]=a*P+o*z+l*w+c*ie,r[8]=a*k+o*J+l*q+c*pe,r[12]=a*E+o*j+l*te+c*ye,r[1]=h*b+d*R+p*O+u*V,r[5]=h*P+d*z+p*w+u*ie,r[9]=h*k+d*J+p*q+u*pe,r[13]=h*E+d*j+p*te+u*ye,r[2]=g*b+_*R+m*O+f*V,r[6]=g*P+_*z+m*w+f*ie,r[10]=g*k+_*J+m*q+f*pe,r[14]=g*E+_*j+m*te+f*ye,r[3]=M*b+v*R+S*O+D*V,r[7]=M*P+v*z+S*w+D*ie,r[11]=M*k+v*J+S*q+D*pe,r[15]=M*E+v*j+S*te+D*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],u=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*u-n*l*u)+_*(+t*l*u-t*c*p+r*a*p-s*a*u+s*c*h-r*l*h)+m*(+t*c*d-t*o*u-r*a*d+n*a*u+r*o*h-n*c*h)+f*(-s*o*h-t*l*d+t*o*p+s*a*d-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],u=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=d*m*c-_*p*c+_*l*u-o*m*u-d*l*f+o*p*f,v=g*p*c-h*m*c-g*l*u+a*m*u+h*l*f-a*p*f,S=h*_*c-g*d*c+g*o*u-a*_*u-h*o*f+a*d*f,D=g*d*l-h*_*l-g*o*p+a*_*p+h*o*m-a*d*m,b=t*M+n*v+s*S+r*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/b;return e[0]=M*P,e[1]=(_*p*r-d*m*r-_*s*u+n*m*u+d*s*f-n*p*f)*P,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*P,e[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*u-n*l*u)*P,e[4]=v*P,e[5]=(h*m*r-g*p*r+g*s*u-t*m*u-h*s*f+t*p*f)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*P,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*u+t*l*u)*P,e[8]=S*P,e[9]=(g*d*r-h*_*r-g*n*u+t*_*u+h*n*f-t*d*f)*P,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*P,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*u-t*o*u)*P,e[12]=D*P,e[13]=(h*_*s-g*d*s+g*n*p-t*_*p-h*n*m+t*d*m)*P,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*p+t*o*p)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,p=r*c,u=r*h,g=r*d,_=a*h,m=a*d,f=o*d,M=l*c,v=l*h,S=l*d,D=n.x,b=n.y,P=n.z;return s[0]=(1-(_+f))*D,s[1]=(u+S)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(u-S)*b,s[5]=(1-(p+f))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+v)*P,s[9]=(m-M)*P,s[10]=(1-(p+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,h=1/a,d=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=di){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),u,g;if(o===di)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=di){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),p=(t+e)*c,u=(n+s)*h,g,_;if(o===di)g=(a+r)*d,_=-2*d;else if(o===Ca)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new G,Gn=new wt,Kd=new G(0,0,0),Qd=new G(1,1,1),Ei=new G,jr=new G,Sn=new G,rh=new wt,ah=new Rn,Ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,oh=new G,xs=new Rn,ai=new wt,Kr=new G,lr=new G,tf=new G,nf=new Rn,lh=new G(1,0,0),ch=new G(0,1,0),hh=new G(0,0,1),sf={type:"added"},rf={type:"removed"},Wt=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new Ni,n=new Rn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new xt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(lr,Kr,this.up):ai.lookAt(Kr,lr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ai),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new G,oi=new G,Wo=new G,li=new G,_s=new G,ys=new G,uh=new G,Xo=new G,qo=new G,Yo=new G,Qr=!1,Qi=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),oi.subVectors(n,t),Wo.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(oi),l=Vn.dot(Wo),c=oi.dot(oi),h=oi.dot(Wo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,u=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,n,s,r,a,o,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),oi.subVectors(e,t),Vn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Vn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),ys.subVectors(r,n),Xo.subVectors(e,n);let l=_s.dot(Xo),c=ys.dot(Xo);if(l<=0&&c<=0)return t.copy(n);qo.subVectors(e,s);let h=_s.dot(qo),d=ys.dot(qo);if(h>=0&&d<=h)return t.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_s,a);Yo.subVectors(e,r);let u=_s.dot(Yo),g=ys.dot(Yo);if(g>=0&&u<=g)return t.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ys,o);let m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return uh.subVectors(r,s),o=(d-h)/(d-h+(u-g)),t.copy(s).addScaledVector(uh,o);let f=1/(m+_+p);return a=_*f,o=p*f,t.copy(n).addScaledVector(_s,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=St.workingColorSpace){if(e=qd(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zo(a,r,e+1/3),this.g=Zo(a,r,e),this.b=Zo(a,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return St.fromWorkingColorSpace(fn.copy(this),e),Math.round(pn(fn.r*255,0,255))*65536+Math.round(pn(fn.g*255,0,255))*256+Math.round(pn(fn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=zt){St.fromWorkingColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(ea);let n=Uo(Ti.h,ea.h,t),s=Uo(Ti.s,ea.s,t),r=Uo(Ti.l,ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new $e;$e.NAMES=hu;var af=0,Fn=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ci,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},At=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new G,ta=new Me,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}};var za=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fa=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var of=0,Nn=new wt,Jo=new Wt,vs=new G,En=new mi,cr=new mi,rn=new G,Rt=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?Fa:za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(En.min,cr.min),En.expandByPoint(rn),rn.addVectors(En.max,cr.max),En.expandByPoint(rn)):(En.expandByPoint(cr.min),En.expandByPoint(cr.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),rn.add(vs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new G,h[R]=new G;let d=new G,p=new G,u=new G,g=new Me,_=new Me,m=new Me,f=new G,M=new G;function v(R,z,J){d.fromArray(s,R*3),p.fromArray(s,z*3),u.fromArray(s,J*3),g.fromArray(a,R*2),_.fromArray(a,z*2),m.fromArray(a,J*2),p.sub(d),u.sub(d),_.sub(g),m.sub(g);let j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(u,-_.y).multiplyScalar(j),M.copy(u).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(j),c[R].add(f),c[z].add(f),c[J].add(f),h[R].add(M),h[z].add(M),h[J].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,z=S.length;R<z;++R){let J=S[R],j=J.start,O=J.count;for(let w=j,q=j+O;w<q;w+=3)v(n[w+0],n[w+1],n[w+2])}let D=new G,b=new G,P=new G,k=new G;function E(R){P.fromArray(r,R*3),k.copy(P);let z=c[R];D.copy(z),D.sub(P.multiplyScalar(P.dot(z))).normalize(),b.crossVectors(k,z);let j=b.dot(h[R])<0?-1:1;l[R*4]=D.x,l[R*4+1]=D.y,l[R*4+2]=D.z,l[R*4+3]=j}for(let R=0,z=S.length;R<z;++R){let J=S[R],j=J.start,O=J.count;for(let w=j,q=j+O;w<q;w+=3)E(n[w+0]),E(n[w+1]),E(n[w+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,d=new G;if(e)for(let p=0,u=e.count;p<u;p+=3){let g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h),u=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[u++]}return new Jt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let p=c[h],u=e(p,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dh=new wt,Zi=new Na,na=new Ui,fh=new G,Ms=new G,bs=new G,ws=new G,$o=new G,ia=new G,sa=new Me,ra=new Me,aa=new Me,ph=new G,mh=new G,gh=new G,oa=new G,la=new G,Oe=class extends Wt{constructor(e=new Rt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&($o.fromBufferAttribute(d,e),a?ia.addScaledVector($o,h):ia.addScaledVector($o.sub(t),h))}t.add(ia)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(na.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(na,fh)===null||Zi.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=a[m.materialIndex],M=Math.max(m.start,u.start),v=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,D=v;S<D;S+=3){let b=o.getX(S),P=o.getX(S+1),k=o.getX(S+2);s=ca(this,f,e,n,c,h,d,b,P,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){let M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=ca(this,a,e,n,c,h,d,M,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=a[m.materialIndex],M=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,D=v;S<D;S+=3){let b=S,P=S+1,k=S+2;s=ca(this,f,e,n,c,h,d,b,P,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){let M=m,v=m+1,S=m+2;s=ca(this,a,e,n,c,h,d,M,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function lf(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Li,o),l===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ms),i.getVertexPosition(l,bs),i.getVertexPosition(c,ws);let h=lf(i,e,t,n,Ms,bs,ws,oa);if(h){s&&(sa.fromBufferAttribute(s,o),ra.fromBufferAttribute(s,l),aa.fromBufferAttribute(s,c),h.uv=Qi.getInterpolation(oa,Ms,bs,ws,sa,ra,aa,new Me)),r&&(sa.fromBufferAttribute(r,o),ra.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,c),h.uv1=Qi.getInterpolation(oa,Ms,bs,ws,sa,ra,aa,new Me),h.uv2=h.uv1),a&&(ph.fromBufferAttribute(a,o),mh.fromBufferAttribute(a,l),gh.fromBufferAttribute(a,c),h.normal=Qi.getInterpolation(oa,Ms,bs,ws,ph,mh,gh,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new G,materialIndex:0};Qi.getNormal(Ms,bs,ws,d.normal),h.face=d}return h}var Cn=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],p=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2));function g(_,m,f,M,v,S,D,b,P,k,E){let R=S/P,z=D/k,J=S/2,j=D/2,O=b/2,w=P+1,q=k+1,te=0,V=0,ie=new G;for(let pe=0;pe<q;pe++){let ye=pe*z-j;for(let Re=0;Re<w;Re++){let se=Re*R-J;ie[_]=se*M,ie[m]=ye*v,ie[f]=O,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[f]=b>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(Re/P),d.push(1-pe/k),te+=1}}for(let pe=0;pe<k;pe++)for(let ye=0;ye<P;ye++){let Re=p+ye+w*pe,se=p+ye+w*(pe+1),me=p+(ye+1)+w*(pe+1),we=p+(ye+1)+w*pe;l.push(Re,se,we),l.push(se,me,we),V+=6}o.addGroup(u,V,E),u+=V,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function cf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){return i.getRenderTarget()===null?i.outputColorSpace:St.workingColorSpace}var Hi={clone:ks,merge:yn},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ba=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},en=class extends Ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Do*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ss=-90,Es=1,yl=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Ss,Es,e,t);s.layers=this.layers,this.add(s);let r=new en(Ss,Es,e,t);r.layers=this.layers,this.add(r);let a=new en(Ss,Es,e,t);a.layers=this.layers,this.add(a);let o=new en(Ss,Es,e,t);o.layers=this.layers,this.add(o);let l=new en(Ss,Es,e,t);l.layers=this.layers,this.add(l);let c=new en(Ss,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,p,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ka=class extends An{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ns?zt:zn),this.texture=new ka(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Qn});r.uniforms.tEquirect.value=t;let a=new Oe(s,r),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=On),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},jo=new G,df=new G,ff=new xt,hi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jo.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ff.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Ui,ha=new G,br=class{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],u=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,p-c,m-u,S-f).normalize(),n[1].setComponents(l+r,p+c,m+u,S+f).normalize(),n[2].setComponents(l+a,p+h,m+g,S+M).normalize(),n[3].setComponents(l-a,p-h,m-g,S-M).normalize(),n[4].setComponents(l-o,p-d,m-_,S-v).normalize(),t===di)n[5].setComponents(l+o,p+d,m+_,S+v).normalize();else if(t===Ca)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,p=c.usage,u=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,p),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,d){let p=h.array,u=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),u.count===-1&&g.length===0&&i.bufferSubData(d,0,p),g.length!==0){for(let _=0,m=g.length;_<m;_++){let f=g[_];t?i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(d,u.offset*p.BYTES_PER_ELEMENT,p,u.offset,u.count):i.bufferSubData(d,u.offset*p.BYTES_PER_ELEMENT,p.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var Oi=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,p=t/l,u=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let M=f*p-a;for(let v=0;v<c;v++){let S=v*d-r;g.push(S,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,S=M+c*(f+1),D=M+1+c*(f+1),b=M+1+c*f;u.push(v,S,b),u.push(S,D,b)}this.setIndex(u),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`
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
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,U0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,F0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,k0=`#define TOON
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
}`,H0=`#define TOON
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
}`,G0=`uniform float size;
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 color;
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
}`,q0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:xf,alphamap_pars_fragment:_f,alphatest_fragment:yf,alphatest_pars_fragment:vf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:wf,batching_vertex:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Of,color_vertex:zf,common:Ff,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Gf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:lp,envmap_vertex:jf,fog_vertex:Kf,fog_pars_vertex:Qf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:xp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:wp,map_particle_fragment:Sp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Ip,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Op,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Gp,packing:Vp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:jp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Qp,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:x0,cube_vert:_0,cube_frag:y0,depth_vert:v0,depth_frag:M0,distanceRGBA_vert:b0,distanceRGBA_frag:w0,equirect_vert:S0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:U0,meshnormal_frag:N0,meshphong_vert:O0,meshphong_frag:z0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:k0,meshtoon_frag:H0,points_vert:G0,points_frag:V0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},Ne={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Kn={basic:{uniforms:yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:yn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:yn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:yn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:yn([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:yn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:yn([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:yn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:yn([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:yn([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:yn([Ne.lights,Ne.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Kn.physical={uniforms:yn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var ua={r:0,b:0,g:0};function Z0(i,e,t,n,s,r,a){let o=new $e(0),l=r===!0?0:1,c,h,d=null,p=0,u=null;function g(m,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ro)?(h===void 0&&(h=new Oe(new Cn(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:ks(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=St.getTransfer(v.colorSpace)!==Pt,(d!==v||p!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,p=v.version,u=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new Oi(2,2),new $t({name:"BackgroundMaterial",uniforms:ks(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=St.getTransfer(v.colorSpace)!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,u=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(ua,uu(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function J0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(O,w,q,te,V){let ie=!1;if(a){let pe=_(te,q,w);c!==pe&&(c=pe,u(c.object)),ie=f(O,te,q,V),ie&&M(O,te,q,V)}else{let pe=w.wireframe===!0;(c.geometry!==te.id||c.program!==q.id||c.wireframe!==pe)&&(c.geometry=te.id,c.program=q.id,c.wireframe=pe,ie=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,k(O,w,q,te),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,w,q){let te=q.wireframe===!0,V=o[O.id];V===void 0&&(V={},o[O.id]=V);let ie=V[w.id];ie===void 0&&(ie={},V[w.id]=ie);let pe=ie[te];return pe===void 0&&(pe=m(p()),ie[te]=pe),pe}function m(O){let w=[],q=[],te=[];for(let V=0;V<s;V++)w[V]=0,q[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:q,attributeDivisors:te,object:O,attributes:{},index:null}}function f(O,w,q,te){let V=c.attributes,ie=w.attributes,pe=0,ye=q.getAttributes();for(let Re in ye)if(ye[Re].location>=0){let me=V[Re],we=ie[Re];if(we===void 0&&(Re==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),Re==="instanceColor"&&O.instanceColor&&(we=O.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;pe++}return c.attributesNum!==pe||c.index!==te}function M(O,w,q,te){let V={},ie=w.attributes,pe=0,ye=q.getAttributes();for(let Re in ye)if(ye[Re].location>=0){let me=ie[Re];me===void 0&&(Re==="instanceMatrix"&&O.instanceMatrix&&(me=O.instanceMatrix),Re==="instanceColor"&&O.instanceColor&&(me=O.instanceColor));let we={};we.attribute=me,me&&me.data&&(we.data=me.data),V[Re]=we,pe++}c.attributes=V,c.attributesNum=pe,c.index=te}function v(){let O=c.newAttributes;for(let w=0,q=O.length;w<q;w++)O[w]=0}function S(O){D(O,0)}function D(O,w){let q=c.newAttributes,te=c.enabledAttributes,V=c.attributeDivisors;q[O]=1,te[O]===0&&(i.enableVertexAttribArray(O),te[O]=1),V[O]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,w),V[O]=w)}function b(){let O=c.newAttributes,w=c.enabledAttributes;for(let q=0,te=w.length;q<te;q++)w[q]!==O[q]&&(i.disableVertexAttribArray(q),w[q]=0)}function P(O,w,q,te,V,ie,pe){pe===!0?i.vertexAttribIPointer(O,w,q,V,ie):i.vertexAttribPointer(O,w,q,te,V,ie)}function k(O,w,q,te){if(n.isWebGL2===!1&&(O.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let V=te.attributes,ie=q.getAttributes(),pe=w.defaultAttributeValues;for(let ye in ie){let Re=ie[ye];if(Re.location>=0){let se=V[ye];if(se===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){let me=se.normalized,we=se.itemSize,Ye=t.get(se);if(Ye===void 0)continue;let Le=Ye.buffer,Ve=Ye.type,We=Ye.bytesPerElement,Xe=n.isWebGL2===!0&&(Ve===i.INT||Ve===i.UNSIGNED_INT||se.gpuType===eu);if(se.isInterleavedBufferAttribute){let Ie=se.data,W=Ie.stride,Ae=se.offset;if(Ie.isInstancedInterleavedBuffer){for(let fe=0;fe<Re.locationSize;fe++)D(Re.location+fe,Ie.meshPerAttribute);O.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let fe=0;fe<Re.locationSize;fe++)S(Re.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let fe=0;fe<Re.locationSize;fe++)P(Re.location+fe,we/Re.locationSize,Ve,me,W*We,(Ae+we/Re.locationSize*fe)*We,Xe)}else{if(se.isInstancedBufferAttribute){for(let Ie=0;Ie<Re.locationSize;Ie++)D(Re.location+Ie,se.meshPerAttribute);O.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<Re.locationSize;Ie++)S(Re.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Ie=0;Ie<Re.locationSize;Ie++)P(Re.location+Ie,we/Re.locationSize,Ve,me,we*We,we/Re.locationSize*Ie*We,Xe)}}else if(pe!==void 0){let me=pe[ye];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Re.location,me);break;case 3:i.vertexAttrib3fv(Re.location,me);break;case 4:i.vertexAttrib4fv(Re.location,me);break;default:i.vertexAttrib1fv(Re.location,me)}}}}b()}function E(){J();for(let O in o){let w=o[O];for(let q in w){let te=w[q];for(let V in te)g(te[V].object),delete te[V];delete w[q]}delete o[O]}}function R(O){if(o[O.id]===void 0)return;let w=o[O.id];for(let q in w){let te=w[q];for(let V in te)g(te[V].object),delete te[V];delete w[q]}delete o[O.id]}function z(O){for(let w in o){let q=o[w];if(q[O.id]===void 0)continue;let te=q[O.id];for(let V in te)g(te[V].object),delete te[V];delete q[O.id]}}function J(){j(),h=!0,c!==l&&(c=l,u(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:j,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function $0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,p){if(p===0)return;let u,g;if(s)u=i,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,h,d,p),t.update(d,r,p)}function c(h,d,p){if(p===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<p;g++)this.render(h[g],d[g]);else{u.multiDrawArraysWEBGL(r,h,0,d,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function j0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=a||e.has("OES_texture_float"),D=v&&S,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:D,maxSamples:b}}function K0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new hi,o=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let u=d.length!==0||p||n!==0||s;return s=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,u){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,v=M*4,S=f.clippingState||null;l.value=S,S=h(g,p,v,u);for(let D=0;D!==v;++D)S[D]=t[D];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,u,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=u+_*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=u;v!==_;++v,S+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Q0(i){let e=new WeakMap;function t(a,o){return o===ul?a.mapping=zs:o===dl&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ul||o===dl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new vl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Hs=class extends Ba{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=4,xh=[.125,.215,.35,.446,.526,.582],Ki=20,Ko=new Hs,_h=new $e,Qo=null,el=0,tl=0,$i=(1+Math.sqrt(5))/2,Ts=1/$i,yh=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,$i,Ts),new G(0,$i,-Ts),new G(Ts,0,$i),new G(-Ts,0,$i),new G($i,Ts,0),new G(-$i,Ts,0)],zi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Xn,format:Tn,colorSpace:pi,depthBuffer:!1},s=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=tm(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s){let o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(_h),h.toneMapping=ei,h.autoClear=!1;let u=new At({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Oe(new Cn,u),_=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,_=!0):(u.color.copy(_h),_=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;da(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zs||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(s-1)%yh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Oe(this._lodPlanes[s],c),p=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let f=[],M=0;for(let P=0;P<Ki;++P){let k=P/_,E=Math.exp(-k*k/2);f.push(E),P===0?M+=E:P<m&&(M+=2*E)}for(let P=0;P<f.length;P++)f[P]=f[P]/M;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;let S=this._sizeLods[s],D=3*S*(s>v-Ls?s-v+Ls:0),b=4*(this._cubeSize-S);da(t,D,b,3*S,2*S),l.setRenderTarget(t),l.render(d,Ko)}};function em(i){let e=[],t=[],n=[],s=i,r=i-Ls+1+xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ls?l=xh[a-i+Ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*u),v=new Float32Array(m*g*u),S=new Float32Array(f*g*u);for(let b=0;b<u;b++){let P=b%3*2/3-1,k=b>2?0:-1,E=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];M.set(E,_*g*b),v.set(p,m*g*b);let R=[b,b,b,b,b,b];S.set(R,f*g*b)}let D=new Rt;D.setAttribute("position",new Jt(M,_)),D.setAttribute("uv",new Jt(v,m)),D.setAttribute("faceIndex",new Jt(S,f)),e.push(D),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vh(i,e,t){let n=new vn(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){let n=new Float32Array(Ki),s=new G(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mh(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function bh(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function nm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ul||l===dl,h=l===zs||l===Fs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new zi(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new zi(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function im(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let g in u){let _=u[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){let p=[],u=d.index,g=d.attributes.position,_=0;if(u!==null){let M=u.array;_=u.version;for(let v=0,S=M.length;v<S;v+=3){let D=M[v+0],b=M[v+1],P=M[v+2];p.push(D,b,b,P,P,D)}}else if(g!==void 0){let M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){let D=v+0,b=v+1,P=v+2;p.push(D,b,b,P,P,D)}}else return;let m=new(cu(p)?Fa:za)(p,1);m.version=_;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let p=r.get(d);if(p){let u=d.index;u!==null&&p.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function rm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,g){i.drawElements(r,g,o,u*l),t.update(g,r,1)}function d(u,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,u*l,_),t.update(g,r,_)}function p(u,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(u[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,u,0,_);let f=0;for(let M=0;M<_;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function am(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function om(i,e){return i[0]-e[0]}function lm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0,_=r.get(h);if(_===void 0||_.count!==g){let O=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],k=0;M===!0&&(k=1),v===!0&&(k=2),S===!0&&(k=3);let E=h.attributes.position.count*k,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let z=new Float32Array(E*R*4*g),J=new Ua(z,E,R,g);J.type=Ri,J.needsUpdate=!0;let j=k*4;for(let w=0;w<g;w++){let q=D[w],te=b[w],V=P[w],ie=E*R*4*w;for(let pe=0;pe<q.count;pe++){let ye=pe*j;M===!0&&(a.fromBufferAttribute(q,pe),z[ie+ye+0]=a.x,z[ie+ye+1]=a.y,z[ie+ye+2]=a.z,z[ie+ye+3]=0),v===!0&&(a.fromBufferAttribute(te,pe),z[ie+ye+4]=a.x,z[ie+ye+5]=a.y,z[ie+ye+6]=a.z,z[ie+ye+7]=0),S===!0&&(a.fromBufferAttribute(V,pe),z[ie+ye+8]=a.x,z[ie+ye+9]=a.y,z[ie+ye+10]=a.z,z[ie+ye+11]=V.itemSize===4?a.w:1)}}_={count:g,texture:J,size:new Me(E,R)},r.set(h,_),h.addEventListener("dispose",O)}let m=0;for(let M=0;M<p.length;M++)m+=p[M];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let u=p===void 0?0:p.length,g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){let S=g[v];S[0]=v,S[1]=p[v]}g.sort(lm);for(let v=0;v<8;v++)v<u&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(om);let _=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let S=o[v],D=S[0],b=S[1];D!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[D]&&h.setAttribute("morphTarget"+v,_[D]),m&&h.getAttribute("morphNormal"+v)!==m[D]&&h.setAttribute("morphNormal"+v,m[D]),s[v]=b,f+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function hm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ha=class extends An{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ai),n===void 0&&h===Bs&&(n=es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fu=new An,pu=new Ha(1,1);pu.compareFunction=lu;var mu=new Ua,gu=new _l,xu=new ka,wh=[],Sh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),nn(t,n)}}function gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),nn(t,n)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),nn(t,n)}}function _m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Tm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?pu:fu;t.setTexture2D(e||r,s)}function Am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gu,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xu,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mu,s)}function Pm(i){switch(i){case 5126:return um;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return xm;case 5124:case 35670:return _m;case 35667:case 35671:return ym;case 35668:case 35672:return vm;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return wm;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Im(i,e){i.uniform1fv(this.addr,e)}function Lm(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Dm(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Om(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zm(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fm(i,e){i.uniform1iv(this.addr,e)}function Bm(i,e){i.uniform2iv(this.addr,e)}function km(i,e){i.uniform3iv(this.addr,e)}function Hm(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function Vm(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function qm(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||fu,r[a])}function Ym(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gu,r[a])}function Zm(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xu,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mu,r[a])}function $m(i){switch(i){case 5126:return Im;case 35664:return Lm;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return Om;case 35676:return zm;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}var Ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pm(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$m(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function jm(i,e,t){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rh(t,c===void 0?new Ml(o,i,e):new bl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new wl(o),Rh(t,d)),t=d}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);jm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Km=37297,Qm=0;function eg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function tg(i){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(i),n;switch(e===t?n="":e===Ra&&t===Aa?n="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ra&&(n="LinearSRGBToLinearDisplayP3"),i){case pi:case oo:return[n,"LinearTransferOETF"];case zt:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ph(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(e),a)}else return s}function ng(i,e){let t=tg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ig(i,e){let t;switch(e){case nc:t="Linear";break;case ic:t="Reinhard";break;case sc:t="OptimizedCineon";break;case Nr:t="ACESFilmic";break;case rc:t="AgX";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function ag(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function og(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ds(i){return i!==""}function Ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(lg,hg)}var cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hg(i,e){let t=pt[e];if(t===void 0){let n=cg.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(ug,dg)}function dg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ur?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Fs:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fs&&(e="ENVMAP_MODE_REFRACTION"),e}function gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Sd:e="ENVMAP_BLENDING_MIX";break;case Ed:e="ENVMAP_BLENDING_ADD";break}return e}function xg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _g(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=fg(t),c=pg(t),h=mg(t),d=gg(t),p=xg(t),u=t.isWebGL2?"":sg(t),g=rg(t),_=ag(r),m=s.createProgram(),f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),f.length>0&&(f+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),M.length>0&&(M+=`
`)):(f=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),M=[u,Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?pt.tonemapping_pars_fragment:"",t.toneMapping!==ei?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Sl(a),a=Ih(a,t),a=Lh(a,t),o=Sl(o),o=Ih(o,t),o=Lh(o,t),a=Dh(a),o=Dh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let S=v+f+a,D=v+M+o,b=Ch(s,s.VERTEX_SHADER,S),P=Ch(s,s.FRAGMENT_SHADER,D);s.attachShader(m,b),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(J){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(b).trim(),w=s.getShaderInfoLog(P).trim(),q=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,P);else{let V=Ph(s,b,"vertex"),ie=Ph(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+V+`
`+ie)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(O===""||w==="")&&(te=!1);te&&(J.diagnostics={runnable:q,programLog:j,vertexShader:{log:O,prefix:f},fragmentShader:{log:w,prefix:M}})}s.deleteShader(b),s.deleteShader(P),E=new Os(s,m),R=og(s,m)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let R;this.getAttributes=function(){return R===void 0&&k(this),R};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,Km)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=P,this}var yg=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tl(e),t.set(e,n)),n}},Tl=class{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}};function vg(i,e,t,n,s,r,a){let o=new Oa,l=new El,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function m(E,R,z,J,j){let O=J.fog,w=j.geometry,q=E.isMeshStandardMaterial?J.environment:null,te=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),V=te&&te.mapping===ro?te.image.height:null,ie=g[E.type];E.precision!==null&&(u=s.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));let pe=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ye=pe!==void 0?pe.length:0,Re=0;w.morphAttributes.position!==void 0&&(Re=1),w.morphAttributes.normal!==void 0&&(Re=2),w.morphAttributes.color!==void 0&&(Re=3);let se,me,we,Ye;if(ie){let ft=Kn[ie];se=ft.vertexShader,me=ft.fragmentShader}else se=E.vertexShader,me=E.fragmentShader,l.update(E),we=l.getVertexShaderID(E),Ye=l.getFragmentShaderID(E);let Le=i.getRenderTarget(),Ve=j.isInstancedMesh===!0,We=j.isBatchedMesh===!0,Xe=!!E.map,Ie=!!E.matcap,W=!!te,Ae=!!E.aoMap,fe=!!E.lightMap,be=!!E.bumpMap,he=!!E.normalMap,ze=!!E.displacementMap,Se=!!E.emissiveMap,I=!!E.metalnessMap,A=!!E.roughnessMap,ne=E.anisotropy>0,ue=E.clearcoat>0,_e=E.iridescence>0,ve=E.sheen>0,qe=E.transmission>0,De=ne&&!!E.anisotropyMap,ke=ue&&!!E.clearcoatMap,je=ue&&!!E.clearcoatNormalMap,it=ue&&!!E.clearcoatRoughnessMap,de=_e&&!!E.iridescenceMap,tt=_e&&!!E.iridescenceThicknessMap,st=ve&&!!E.sheenColorMap,Qe=ve&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,He=!!E.specularColorMap,nt=!!E.specularIntensityMap,ct=qe&&!!E.transmissionMap,et=qe&&!!E.thicknessMap,Be=!!E.gradientMap,ge=!!E.alphaMap,Y=E.alphaTest>0,Ue=!!E.alphaHash,Pe=!!E.extensions,Je=!!w.attributes.uv1,Ke=!!w.attributes.uv2,mt=!!w.attributes.uv3,gt=ei;return E.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(gt=i.toneMapping),{isWebGL2:h,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:me,defines:E.defines,customVertexShaderID:we,customFragmentShaderID:Ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:We,instancing:Ve,instancingColor:Ve&&j.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:pi,map:Xe,matcap:Ie,envMap:W,envMapMode:W&&te.mapping,envMapCubeUVHeight:V,aoMap:Ae,lightMap:fe,bumpMap:be,normalMap:he,displacementMap:p&&ze,emissiveMap:Se,normalMapObjectSpace:he&&E.normalMapType===Fd,normalMapTangentSpace:he&&E.normalMapType===ao,metalnessMap:I,roughnessMap:A,anisotropy:ne,anisotropyMap:De,clearcoat:ue,clearcoatMap:ke,clearcoatNormalMap:je,clearcoatRoughnessMap:it,iridescence:_e,iridescenceMap:de,iridescenceThicknessMap:tt,sheen:ve,sheenColorMap:st,sheenRoughnessMap:Qe,specularMap:Ze,specularColorMap:He,specularIntensityMap:nt,transmission:qe,transmissionMap:ct,thicknessMap:et,gradientMap:Be,opaque:E.transparent===!1&&E.blending===Ci,alphaMap:ge,alphaTest:Y,alphaHash:Ue,combine:E.combine,mapUv:Xe&&_(E.map.channel),aoMapUv:Ae&&_(E.aoMap.channel),lightMapUv:fe&&_(E.lightMap.channel),bumpMapUv:be&&_(E.bumpMap.channel),normalMapUv:he&&_(E.normalMap.channel),displacementMapUv:ze&&_(E.displacementMap.channel),emissiveMapUv:Se&&_(E.emissiveMap.channel),metalnessMapUv:I&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:De&&_(E.anisotropyMap.channel),clearcoatMapUv:ke&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&_(E.sheenRoughnessMap.channel),specularMapUv:Ze&&_(E.specularMap.channel),specularColorMapUv:He&&_(E.specularColorMap.channel),specularIntensityMapUv:nt&&_(E.specularIntensityMap.channel),transmissionMapUv:ct&&_(E.transmissionMap.channel),thicknessMapUv:et&&_(E.thicknessMap.channel),alphaMapUv:ge&&_(E.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(he||ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Je,vertexUv2s:Ke,vertexUv3s:mt,pointsUvs:j.isPoints===!0&&!!w.attributes.uv&&(Xe||ge),fog:!!O,useFog:E.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Pt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vt,flipSided:E.side===Zt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Pe&&E.extensions.derivatives===!0,extensionFragDepth:Pe&&E.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let z in E.defines)R.push(z),R.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(M(R,E),v(R,E),R.push(i.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function M(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function v(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){let R=g[E.type],z;if(R){let J=Kn[R];z=Hi.clone(J.uniforms)}else z=E.uniforms;return z}function D(E,R){let z;for(let J=0,j=c.length;J<j;J++){let O=c[J];if(O.cacheKey===R){z=O,++z.usedTimes;break}}return z===void 0&&(z=new _g(i,R,E,r),c.push(z)),z}function b(E){if(--E.usedTimes===0){let R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:D,releaseProgram:b,releaseShaderCache:P,programs:c,dispose:k}}function Mg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,u,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=u,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,p,u,g,_,m){let f=a(d,p,u,g,_,m);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):t.push(f)}function l(d,p,u,g,_,m){let f=a(d,p,u,g,_,m);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||bg),n.length>1&&n.sort(p||Nh),s.length>1&&s.sort(p||Nh)}function h(){for(let d=e,p=i.length;d<p;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Oh,i.set(n,[a])):s>=r.length?(a=new Oh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Eg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tg=0;function Ag(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rg(i,e){let t=new Sg,n=Eg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new G);let r=new G,a=new wt,o=new wt;function l(h,d){let p=0,u=0,g=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let _=0,m=0,f=0,M=0,v=0,S=0,D=0,b=0,P=0,k=0,E=0;h.sort(Ag);let R=d===!0?Math.PI:1;for(let J=0,j=h.length;J<j;J++){let O=h[J],w=O.color,q=O.intensity,te=O.distance,V=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=w.r*q*R,u+=w.g*q*R,g+=w.b*q*R;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(O.sh.coefficients[ie],q);E++}else if(O.isDirectionalLight){let ie=t.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity*R),O.castShadow){let pe=O.shadow,ye=n.get(O);ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize=pe.mapSize,s.directionalShadow[_]=ye,s.directionalShadowMap[_]=V,s.directionalShadowMatrix[_]=O.shadow.matrix,S++}s.directional[_]=ie,_++}else if(O.isSpotLight){let ie=t.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(w).multiplyScalar(q*R),ie.distance=te,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,s.spot[f]=ie;let pe=O.shadow;if(O.map&&(s.spotLightMap[P]=O.map,P++,pe.updateMatrices(O),O.castShadow&&k++),s.spotLightMatrix[f]=pe.matrix,O.castShadow){let ye=n.get(O);ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize=pe.mapSize,s.spotShadow[f]=ye,s.spotShadowMap[f]=V,b++}f++}else if(O.isRectAreaLight){let ie=t.get(O);ie.color.copy(w).multiplyScalar(q),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),s.rectArea[M]=ie,M++}else if(O.isPointLight){let ie=t.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity*R),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){let pe=O.shadow,ye=n.get(O);ye.shadowBias=pe.bias,ye.shadowNormalBias=pe.normalBias,ye.shadowRadius=pe.radius,ye.shadowMapSize=pe.mapSize,ye.shadowCameraNear=pe.camera.near,ye.shadowCameraFar=pe.camera.far,s.pointShadow[m]=ye,s.pointShadowMap[m]=V,s.pointShadowMatrix[m]=O.shadow.matrix,D++}s.point[m]=ie,m++}else if(O.isHemisphereLight){let ie=t.get(O);ie.skyColor.copy(O.color).multiplyScalar(q*R),ie.groundColor.copy(O.groundColor).multiplyScalar(q*R),s.hemi[v]=ie,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=u,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==M||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==D||z.numSpotShadows!==b||z.numSpotMaps!==P||z.numLightProbes!==E)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=b+P-k,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=E,z.directionalLength=_,z.pointLength=m,z.spotLength=f,z.rectAreaLength=M,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=D,z.numSpotShadows=b,z.numSpotMaps=P,z.numLightProbes=E,s.version=Tg++)}function c(h,d){let p=0,u=0,g=0,_=0,m=0,f=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let S=h[M];if(S.isDirectionalLight){let D=s.directional[p];D.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),p++}else if(S.isSpotLight){let D=s.spot[g];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let D=s.rectArea[_];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),D.halfWidth.set(S.width*.5,0,0),D.halfHeight.set(0,S.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let D=s.point[u];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){let D=s.hemi[m];D.direction.setFromMatrixPosition(S.matrixWorld),D.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function zh(i,e){let t=new Rg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cg(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new zh(i,e),t.set(r,[l])):a>=o.length?(l=new zh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Al=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Lg(i,e,t){let n=new br,s=new Me,r=new Me,a=new Ft,o=new Al({depthPacking:zd}),l=new Rl,c={},h=t.maxTextureSize,d={[Li]:Zt,[Zt]:Li,[Vt]:Vt},p=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Oe(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let f=this.type;this.render=function(b,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let E=i.getRenderTarget(),R=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Qn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=f!==ci&&this.type===ci,O=f===ci&&this.type!==ci;for(let w=0,q=b.length;w<q;w++){let te=b[w],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||j===!0||O===!0){let ye=this.type!==ci?{minFilter:Qt,magFilter:Qt}:{};V.map!==null&&V.map.dispose(),V.map=new vn(s.x,s.y,ye),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let pe=V.getViewportCount();for(let ye=0;ye<pe;ye++){let Re=V.getViewport(ye);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),J.viewport(a),V.updateMatrices(te,ye),n=V.getFrustum(),S(P,k,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===ci&&M(V,k),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,z)};function M(b,P){let k=e.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,k,p,_,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,k,u,_,null)}function v(b,P,k,E){let R=null,z=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)R=z;else if(R=k.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let J=R.uuid,j=P.uuid,O=c[J];O===void 0&&(O={},c[J]=O);let w=O[j];w===void 0&&(w=R.clone(),O[j]=w,P.addEventListener("dispose",D)),R=w}if(R.visible=P.visible,R.wireframe=P.wireframe,E===ci?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:d[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let J=i.properties.get(R);J.light=k}return R}function S(b,P,k,E,R){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ci)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);let j=e.update(b),O=b.material;if(Array.isArray(O)){let w=j.groups;for(let q=0,te=w.length;q<te;q++){let V=w[q],ie=O[V.materialIndex];if(ie&&ie.visible){let pe=v(b,ie,E,R);b.onBeforeShadow(i,b,P,k,j,pe,V),i.renderBufferDirect(k,null,j,pe,b,V),b.onAfterShadow(i,b,P,k,j,pe,V)}}}else if(O.visible){let w=v(b,O,E,R);b.onBeforeShadow(i,b,P,k,j,w,null),i.renderBufferDirect(k,null,j,w,b,null),b.onAfterShadow(i,b,P,k,j,w,null)}}let J=b.children;for(let j=0,O=J.length;j<O;j++)S(J[j],P,k,E,R)}function D(b){b.target.removeEventListener("dispose",D);for(let k in c){let E=c[k],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Dg(i,e,t){let n=t.isWebGL2;function s(){let Y=!1,Ue=new Ft,Pe=null,Je=new Ft(0,0,0,0);return{setMask:function(Ke){Pe!==Ke&&!Y&&(i.colorMask(Ke,Ke,Ke,Ke),Pe=Ke)},setLocked:function(Ke){Y=Ke},setClear:function(Ke,mt,gt,lt,ft){ft===!0&&(Ke*=lt,mt*=lt,gt*=lt),Ue.set(Ke,mt,gt,lt),Je.equals(Ue)===!1&&(i.clearColor(Ke,mt,gt,lt),Je.copy(Ue))},reset:function(){Y=!1,Pe=null,Je.set(-1,0,0,0)}}}function r(){let Y=!1,Ue=null,Pe=null,Je=null;return{setTest:function(Ke){Ke?We(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(Ke){Ue!==Ke&&!Y&&(i.depthMask(Ke),Ue=Ke)},setFunc:function(Ke){if(Pe!==Ke){switch(Ke){case xd:i.depthFunc(i.NEVER);break;case _d:i.depthFunc(i.ALWAYS);break;case yd:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case vd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case bd:i.depthFunc(i.GREATER);break;case wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Ke}},setLocked:function(Ke){Y=Ke},setClear:function(Ke){Je!==Ke&&(i.clearDepth(Ke),Je=Ke)},reset:function(){Y=!1,Ue=null,Pe=null,Je=null}}}function a(){let Y=!1,Ue=null,Pe=null,Je=null,Ke=null,mt=null,gt=null,lt=null,ft=null;return{setTest:function(_t){Y||(_t?We(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(_t){Ue!==_t&&!Y&&(i.stencilMask(_t),Ue=_t)},setFunc:function(_t,Lt,Ee){(Pe!==_t||Je!==Lt||Ke!==Ee)&&(i.stencilFunc(_t,Lt,Ee),Pe=_t,Je=Lt,Ke=Ee)},setOp:function(_t,Lt,Ee){(mt!==_t||gt!==Lt||lt!==Ee)&&(i.stencilOp(_t,Lt,Ee),mt=_t,gt=Lt,lt=Ee)},setLocked:function(_t){Y=_t},setClear:function(_t){ft!==_t&&(i.clearStencil(_t),ft=_t)},reset:function(){Y=!1,Ue=null,Pe=null,Je=null,Ke=null,mt=null,gt=null,lt=null,ft=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,p={},u={},g=new WeakMap,_=[],m=null,f=!1,M=null,v=null,S=null,D=null,b=null,P=null,k=null,E=new $e(0,0,0),R=0,z=!1,J=null,j=null,O=null,w=null,q=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(pe)[1]),V=ie>=1):pe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),V=ie>=2);let ye=null,Re={},se=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),we=new Ft().fromArray(se),Ye=new Ft().fromArray(me);function Le(Y,Ue,Pe,Je){let Ke=new Uint8Array(4),mt=i.createTexture();i.bindTexture(Y,mt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<Pe;gt++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ue,0,i.RGBA,1,1,Je,0,i.RGBA,i.UNSIGNED_BYTE,Ke):i.texImage2D(Ue+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ke);return mt}let Ve={};Ve[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ve[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),We(i.DEPTH_TEST),l.setFunc(wa),Se(!1),I(_c),We(i.CULL_FACE),he(Qn);function We(Y){p[Y]!==!0&&(i.enable(Y),p[Y]=!0)}function Xe(Y){p[Y]!==!1&&(i.disable(Y),p[Y]=!1)}function Ie(Y,Ue){return u[Y]!==Ue?(i.bindFramebuffer(Y,Ue),u[Y]=Ue,n&&(Y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ue),Y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ue)),!0):!1}function W(Y,Ue){let Pe=_,Je=!1;if(Y)if(Pe=g.get(Ue),Pe===void 0&&(Pe=[],g.set(Ue,Pe)),Y.isWebGLMultipleRenderTargets){let Ke=Y.texture;if(Pe.length!==Ke.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,gt=Ke.length;mt<gt;mt++)Pe[mt]=i.COLOR_ATTACHMENT0+mt;Pe.length=Ke.length,Je=!0}}else Pe[0]!==i.COLOR_ATTACHMENT0&&(Pe[0]=i.COLOR_ATTACHMENT0,Je=!0);else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,Je=!0);Je&&(t.isWebGL2?i.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function Ae(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}let fe={[ji]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};if(n)fe[Mc]=i.MIN,fe[bc]=i.MAX;else{let Y=e.get("EXT_blend_minmax");Y!==null&&(fe[Mc]=Y.MIN_EXT,fe[bc]=Y.MAX_EXT)}let be={[sd]:i.ZERO,[rd]:i.ONE,[ad]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[ld]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function he(Y,Ue,Pe,Je,Ke,mt,gt,lt,ft,_t){if(Y===Qn){f===!0&&(Xe(i.BLEND),f=!1);return}if(f===!1&&(We(i.BLEND),f=!0),Y!==td){if(Y!==M||_t!==z){if((v!==ji||b!==ji)&&(i.blendEquation(i.FUNC_ADD),v=ji,b=ji),_t)switch(Y){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}S=null,D=null,P=null,k=null,E.set(0,0,0),R=0,M=Y,z=_t}return}Ke=Ke||Ue,mt=mt||Pe,gt=gt||Je,(Ue!==v||Ke!==b)&&(i.blendEquationSeparate(fe[Ue],fe[Ke]),v=Ue,b=Ke),(Pe!==S||Je!==D||mt!==P||gt!==k)&&(i.blendFuncSeparate(be[Pe],be[Je],be[mt],be[gt]),S=Pe,D=Je,P=mt,k=gt),(lt.equals(E)===!1||ft!==R)&&(i.blendColor(lt.r,lt.g,lt.b,ft),E.copy(lt),R=ft),M=Y,z=!1}function ze(Y,Ue){Y.side===Vt?Xe(i.CULL_FACE):We(i.CULL_FACE);let Pe=Y.side===Zt;Ue&&(Pe=!Pe),Se(Pe),Y.blending===Ci&&Y.transparent===!1?he(Qn):he(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let Je=Y.stencilWrite;c.setTest(Je),Je&&(c.setMask(Y.stencilWriteMask),c.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),c.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ne(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?We(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(Y){J!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),J=Y)}function I(Y){Y!==Qu?(We(i.CULL_FACE),Y!==j&&(Y===_c?i.cullFace(i.BACK):Y===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),j=Y}function A(Y){Y!==O&&(V&&i.lineWidth(Y),O=Y)}function ne(Y,Ue,Pe){Y?(We(i.POLYGON_OFFSET_FILL),(w!==Ue||q!==Pe)&&(i.polygonOffset(Ue,Pe),w=Ue,q=Pe)):Xe(i.POLYGON_OFFSET_FILL)}function ue(Y){Y?We(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function _e(Y){Y===void 0&&(Y=i.TEXTURE0+te-1),ye!==Y&&(i.activeTexture(Y),ye=Y)}function ve(Y,Ue,Pe){Pe===void 0&&(ye===null?Pe=i.TEXTURE0+te-1:Pe=ye);let Je=Re[Pe];Je===void 0&&(Je={type:void 0,texture:void 0},Re[Pe]=Je),(Je.type!==Y||Je.texture!==Ue)&&(ye!==Pe&&(i.activeTexture(Pe),ye=Pe),i.bindTexture(Y,Ue||Ve[Y]),Je.type=Y,Je.texture=Ue)}function qe(){let Y=Re[ye];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function De(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qe(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(Y){we.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function ct(Y){Ye.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Ye.copy(Y))}function et(Y,Ue){let Pe=d.get(Ue);Pe===void 0&&(Pe=new WeakMap,d.set(Ue,Pe));let Je=Pe.get(Y);Je===void 0&&(Je=i.getUniformBlockIndex(Ue,Y.name),Pe.set(Y,Je))}function Be(Y,Ue){let Je=d.get(Ue).get(Y);h.get(Ue)!==Je&&(i.uniformBlockBinding(Ue,Je,Y.__bindingPointIndex),h.set(Ue,Je))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ye=null,Re={},u={},g=new WeakMap,_=[],m=null,f=!1,M=null,v=null,S=null,D=null,b=null,P=null,k=null,E=new $e(0,0,0),R=0,z=!1,J=null,j=null,O=null,w=null,q=null,we.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:We,disable:Xe,bindFramebuffer:Ie,drawBuffers:W,useProgram:Ae,setBlending:he,setMaterial:ze,setFlipSided:Se,setCullFace:I,setLineWidth:A,setPolygonOffset:ne,setScissorTest:ue,activeTexture:_e,bindTexture:ve,unbindTexture:qe,compressedTexImage2D:De,compressedTexImage3D:ke,texImage2D:Ze,texImage3D:He,updateUBOMapping:et,uniformBlockBinding:Be,texStorage2D:st,texStorage3D:Qe,texSubImage2D:je,texSubImage3D:it,compressedTexSubImage2D:de,compressedTexSubImage3D:tt,scissor:nt,viewport:ct,reset:ge}}function Ug(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return u?new OffscreenCanvas(I,A):Ia("canvas")}function _(I,A,ne,ue){let _e=1;if((I.width>ue||I.height>ue)&&(_e=ue/Math.max(I.width,I.height)),_e<1||A===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ve=A?gl:Math.floor,qe=ve(_e*I.width),De=ve(_e*I.height);d===void 0&&(d=g(qe,De));let ke=ne?g(qe,De):d;return ke.width=qe,ke.height=De,ke.getContext("2d").drawImage(I,0,0,qe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+qe+"x"+De+")."),ke}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return eh(I.width)&&eh(I.height)}function f(I){return o?!1:I.wrapS!==Wn||I.wrapT!==Wn||I.minFilter!==Qt&&I.minFilter!==On}function M(I,A){return I.generateMipmaps&&A&&I.minFilter!==Qt&&I.minFilter!==On}function v(I){i.generateMipmap(I)}function S(I,A,ne,ue,_e=!1){if(o===!1)return A;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ve=A;if(A===i.RED&&(ne===i.FLOAT&&(ve=i.R32F),ne===i.HALF_FLOAT&&(ve=i.R16F),ne===i.UNSIGNED_BYTE&&(ve=i.R8)),A===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ve=i.R8UI),ne===i.UNSIGNED_SHORT&&(ve=i.R16UI),ne===i.UNSIGNED_INT&&(ve=i.R32UI),ne===i.BYTE&&(ve=i.R8I),ne===i.SHORT&&(ve=i.R16I),ne===i.INT&&(ve=i.R32I)),A===i.RG&&(ne===i.FLOAT&&(ve=i.RG32F),ne===i.HALF_FLOAT&&(ve=i.RG16F),ne===i.UNSIGNED_BYTE&&(ve=i.RG8)),A===i.RGBA){let qe=_e?Ta:St.getTransfer(ue);ne===i.FLOAT&&(ve=i.RGBA32F),ne===i.HALF_FLOAT&&(ve=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(ve=qe===Pt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function D(I,A,ne){return M(I,ne)===!0||I.isFramebufferTexture&&I.minFilter!==Qt&&I.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function b(I){return I===Qt||I===wc||I===To?i.NEAREST:i.LINEAR}function P(I){let A=I.target;A.removeEventListener("dispose",P),E(A),A.isVideoTexture&&h.delete(A)}function k(I){let A=I.target;A.removeEventListener("dispose",k),z(A)}function E(I){let A=n.get(I);if(A.__webglInit===void 0)return;let ne=I.source,ue=p.get(ne);if(ue){let _e=ue[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(I),Object.keys(ue).length===0&&p.delete(ne)}n.remove(I)}function R(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let ne=I.source,ue=p.get(ne);delete ue[A.__cacheKey],a.memory.textures--}function z(I){let A=I.texture,ne=n.get(I),ue=n.get(A);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(ne.__webglFramebuffer[_e]))for(let ve=0;ve<ne.__webglFramebuffer[_e].length;ve++)i.deleteFramebuffer(ne.__webglFramebuffer[_e][ve]);else i.deleteFramebuffer(ne.__webglFramebuffer[_e]);ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[_e])}else{if(Array.isArray(ne.__webglFramebuffer))for(let _e=0;_e<ne.__webglFramebuffer.length;_e++)i.deleteFramebuffer(ne.__webglFramebuffer[_e]);else i.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let _e=0;_e<ne.__webglColorRenderbuffer.length;_e++)ne.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer[_e]);ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let _e=0,ve=A.length;_e<ve;_e++){let qe=n.get(A[_e]);qe.__webglTexture&&(i.deleteTexture(qe.__webglTexture),a.memory.textures--),n.remove(A[_e])}n.remove(A),n.remove(I)}let J=0;function j(){J=0}function O(){let I=J;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),J+=1,I}function w(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function q(I,A){let ne=n.get(I);if(I.isVideoTexture&&ze(I),I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){let ue=I.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(ne,I,A);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+A)}function te(I,A){let ne=n.get(I);if(I.version>0&&ne.__version!==I.version){we(ne,I,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+A)}function V(I,A){let ne=n.get(I);if(I.version>0&&ne.__version!==I.version){we(ne,I,A);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+A)}function ie(I,A){let ne=n.get(I);if(I.version>0&&ne.__version!==I.version){Ye(ne,I,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+A)}let pe={[vr]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},ye={[Qt]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[Ad]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},Re={[Bd]:i.NEVER,[Xd]:i.ALWAYS,[kd]:i.LESS,[lu]:i.LEQUAL,[Hd]:i.EQUAL,[Wd]:i.GEQUAL,[Gd]:i.GREATER,[Vd]:i.NOTEQUAL};function se(I,A,ne){if(ne?(i.texParameteri(I,i.TEXTURE_WRAP_S,pe[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,pe[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,pe[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ye[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ye[A.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Wn||A.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,b(A.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Qt&&A.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ue=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qt||A.minFilter!==To&&A.minFilter!==Mr||A.type===Ri&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Xn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(I,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function me(I,A){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",P));let ue=A.source,_e=p.get(ue);_e===void 0&&(_e={},p.set(ue,_e));let ve=w(A);if(ve!==I.__cacheKey){_e[ve]===void 0&&(_e[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),_e[ve].usedTimes++;let qe=_e[I.__cacheKey];qe!==void 0&&(_e[I.__cacheKey].usedTimes--,qe.usedTimes===0&&R(A)),I.__cacheKey=ve,I.__webglTexture=_e[ve].texture}return ne}function we(I,A,ne){let ue=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ue=i.TEXTURE_3D);let _e=me(I,A),ve=A.source;t.bindTexture(ue,I.__webglTexture,i.TEXTURE0+ne);let qe=n.get(ve);if(ve.version!==qe.__version||_e===!0){t.activeTexture(i.TEXTURE0+ne);let De=St.getPrimaries(St.workingColorSpace),ke=A.colorSpace===zn?null:St.getPrimaries(A.colorSpace),je=A.colorSpace===zn||De===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let it=f(A)&&m(A.image)===!1,de=_(A.image,it,!1,s.maxTextureSize);de=Se(A,de);let tt=m(de)||o,st=r.convert(A.format,A.colorSpace),Qe=r.convert(A.type),Ze=S(A.internalFormat,st,Qe,A.colorSpace,A.isVideoTexture);se(ue,A,tt);let He,nt=A.mipmaps,ct=o&&A.isVideoTexture!==!0&&Ze!==au,et=qe.__version===void 0||_e===!0,Be=D(A,de,tt);if(A.isDepthTexture)Ze=i.DEPTH_COMPONENT,o?A.type===Ri?Ze=i.DEPTH_COMPONENT32F:A.type===Ai?Ze=i.DEPTH_COMPONENT24:A.type===es?Ze=i.DEPTH24_STENCIL8:Ze=i.DEPTH_COMPONENT16:A.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ts&&Ze===i.DEPTH_COMPONENT&&A.type!==ac&&A.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ai,Qe=r.convert(A.type)),A.format===Bs&&Ze===i.DEPTH_COMPONENT&&(Ze=i.DEPTH_STENCIL,A.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=es,Qe=r.convert(A.type))),et&&(ct?t.texStorage2D(i.TEXTURE_2D,1,Ze,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ze,de.width,de.height,0,st,Qe,null));else if(A.isDataTexture)if(nt.length>0&&tt){ct&&et&&t.texStorage2D(i.TEXTURE_2D,Be,Ze,nt[0].width,nt[0].height);for(let ge=0,Y=nt.length;ge<Y;ge++)He=nt[ge],ct?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,He.width,He.height,st,Qe,He.data):t.texImage2D(i.TEXTURE_2D,ge,Ze,He.width,He.height,0,st,Qe,He.data);A.generateMipmaps=!1}else ct?(et&&t.texStorage2D(i.TEXTURE_2D,Be,Ze,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,st,Qe,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,de.width,de.height,0,st,Qe,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Ze,nt[0].width,nt[0].height,de.depth);for(let ge=0,Y=nt.length;ge<Y;ge++)He=nt[ge],A.format!==Tn?st!==null?ct?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,He.width,He.height,de.depth,st,He.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ze,He.width,He.height,de.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,He.width,He.height,de.depth,st,Qe,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ze,He.width,He.height,de.depth,0,st,Qe,He.data)}else{ct&&et&&t.texStorage2D(i.TEXTURE_2D,Be,Ze,nt[0].width,nt[0].height);for(let ge=0,Y=nt.length;ge<Y;ge++)He=nt[ge],A.format!==Tn?st!==null?ct?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,He.width,He.height,st,He.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ze,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,He.width,He.height,st,Qe,He.data):t.texImage2D(i.TEXTURE_2D,ge,Ze,He.width,He.height,0,st,Qe,He.data)}else if(A.isDataArrayTexture)ct?(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Ze,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,st,Qe,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,de.width,de.height,de.depth,0,st,Qe,de.data);else if(A.isData3DTexture)ct?(et&&t.texStorage3D(i.TEXTURE_3D,Be,Ze,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,st,Qe,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,de.width,de.height,de.depth,0,st,Qe,de.data);else if(A.isFramebufferTexture){if(et)if(ct)t.texStorage2D(i.TEXTURE_2D,Be,Ze,de.width,de.height);else{let ge=de.width,Y=de.height;for(let Ue=0;Ue<Be;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ze,ge,Y,0,st,Qe,null),ge>>=1,Y>>=1}}else if(nt.length>0&&tt){ct&&et&&t.texStorage2D(i.TEXTURE_2D,Be,Ze,nt[0].width,nt[0].height);for(let ge=0,Y=nt.length;ge<Y;ge++)He=nt[ge],ct?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,st,Qe,He):t.texImage2D(i.TEXTURE_2D,ge,Ze,st,Qe,He);A.generateMipmaps=!1}else ct?(et&&t.texStorage2D(i.TEXTURE_2D,Be,Ze,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,st,Qe,de)):t.texImage2D(i.TEXTURE_2D,0,Ze,st,Qe,de);M(A,tt)&&v(ue),qe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ye(I,A,ne){if(A.image.length!==6)return;let ue=me(I,A),_e=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ne);let ve=n.get(_e);if(_e.version!==ve.__version||ue===!0){t.activeTexture(i.TEXTURE0+ne);let qe=St.getPrimaries(St.workingColorSpace),De=A.colorSpace===zn?null:St.getPrimaries(A.colorSpace),ke=A.colorSpace===zn||qe===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let je=A.isCompressedTexture||A.image[0].isCompressedTexture,it=A.image[0]&&A.image[0].isDataTexture,de=[];for(let ge=0;ge<6;ge++)!je&&!it?de[ge]=_(A.image[ge],!1,!0,s.maxCubemapSize):de[ge]=it?A.image[ge].image:A.image[ge],de[ge]=Se(A,de[ge]);let tt=de[0],st=m(tt)||o,Qe=r.convert(A.format,A.colorSpace),Ze=r.convert(A.type),He=S(A.internalFormat,Qe,Ze,A.colorSpace),nt=o&&A.isVideoTexture!==!0,ct=ve.__version===void 0||ue===!0,et=D(A,tt,st);se(i.TEXTURE_CUBE_MAP,A,st);let Be;if(je){nt&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,et,He,tt.width,tt.height);for(let ge=0;ge<6;ge++){Be=de[ge].mipmaps;for(let Y=0;Y<Be.length;Y++){let Ue=Be[Y];A.format!==Tn?Qe!==null?nt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,0,0,Ue.width,Ue.height,Qe,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,He,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,0,0,Ue.width,Ue.height,Qe,Ze,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,He,Ue.width,Ue.height,0,Qe,Ze,Ue.data)}}}else{Be=A.mipmaps,nt&&ct&&(Be.length>0&&et++,t.texStorage2D(i.TEXTURE_CUBE_MAP,et,He,de[0].width,de[0].height));for(let ge=0;ge<6;ge++)if(it){nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,de[ge].width,de[ge].height,Qe,Ze,de[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,He,de[ge].width,de[ge].height,0,Qe,Ze,de[ge].data);for(let Y=0;Y<Be.length;Y++){let Pe=Be[Y].image[ge].image;nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,0,0,Pe.width,Pe.height,Qe,Ze,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,He,Pe.width,Pe.height,0,Qe,Ze,Pe.data)}}else{nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Qe,Ze,de[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,He,Qe,Ze,de[ge]);for(let Y=0;Y<Be.length;Y++){let Ue=Be[Y];nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,0,0,Qe,Ze,Ue.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,He,Qe,Ze,Ue.image[ge])}}}M(A,st)&&v(i.TEXTURE_CUBE_MAP),ve.__version=_e.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Le(I,A,ne,ue,_e,ve){let qe=r.convert(ne.format,ne.colorSpace),De=r.convert(ne.type),ke=S(ne.internalFormat,qe,De,ne.colorSpace);if(!n.get(A).__hasExternalTextures){let it=Math.max(1,A.width>>ve),de=Math.max(1,A.height>>ve);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,ve,ke,it,de,A.depth,0,qe,De,null):t.texImage2D(_e,ve,ke,it,de,0,qe,De,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),he(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,_e,n.get(ne).__webglTexture,0,be(A)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,_e,n.get(ne).__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(I,A,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let ue=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ne||he(A)){let _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Ri?ue=i.DEPTH_COMPONENT32F:_e.type===Ai&&(ue=i.DEPTH_COMPONENT24));let ve=be(A);he(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ue,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ue,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){let ue=be(A);ne&&he(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,A.width,A.height):he(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{let ue=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0;_e<ue.length;_e++){let ve=ue[_e],qe=r.convert(ve.format,ve.colorSpace),De=r.convert(ve.type),ke=S(ve.internalFormat,qe,De,ve.colorSpace),je=be(A);ne&&he(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,ke,A.width,A.height):he(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,ke,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ke,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),q(A.depthTexture,0);let ue=n.get(A.depthTexture).__webglTexture,_e=be(A);if(A.depthTexture.format===ts)he(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(A.depthTexture.format===Bs)he(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Xe(I){let A=n.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");We(A.__webglFramebuffer,I)}else if(ne){A.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ue]),A.__webglDepthbuffer[ue]=i.createRenderbuffer(),Ve(A.__webglDepthbuffer[ue],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ve(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(I,A,ne){let ue=n.get(I);A!==void 0&&Le(ue.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Xe(I)}function W(I){let A=I.texture,ne=n.get(I),ue=n.get(A);I.addEventListener("dispose",k),I.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=A.version,a.memory.textures++);let _e=I.isWebGLCubeRenderTarget===!0,ve=I.isWebGLMultipleRenderTargets===!0,qe=m(I)||o;if(_e){ne.__webglFramebuffer=[];for(let De=0;De<6;De++)if(o&&A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[De]=[];for(let ke=0;ke<A.mipmaps.length;ke++)ne.__webglFramebuffer[De][ke]=i.createFramebuffer()}else ne.__webglFramebuffer[De]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let De=0;De<A.mipmaps.length;De++)ne.__webglFramebuffer[De]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(ve)if(s.drawBuffers){let De=I.texture;for(let ke=0,je=De.length;ke<je;ke++){let it=n.get(De[ke]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&he(I)===!1){let De=ve?A:[A];ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ke=0;ke<De.length;ke++){let je=De[ke];ne.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[ke]);let it=r.convert(je.format,je.colorSpace),de=r.convert(je.type),tt=S(je.internalFormat,it,de,je.colorSpace,I.isXRRenderTarget===!0),st=be(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,tt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),se(i.TEXTURE_CUBE_MAP,A,qe);for(let De=0;De<6;De++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let ke=0;ke<A.mipmaps.length;ke++)Le(ne.__webglFramebuffer[De][ke],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ke);else Le(ne.__webglFramebuffer[De],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(A,qe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){let De=I.texture;for(let ke=0,je=De.length;ke<je;ke++){let it=De[ke],de=n.get(it);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),se(i.TEXTURE_2D,it,qe),Le(ne.__webglFramebuffer,I,it,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),M(it,qe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let De=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?De=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,ue.__webglTexture),se(De,A,qe),o&&A.mipmaps&&A.mipmaps.length>0)for(let ke=0;ke<A.mipmaps.length;ke++)Le(ne.__webglFramebuffer[ke],I,A,i.COLOR_ATTACHMENT0,De,ke);else Le(ne.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,De,0);M(A,qe)&&v(De),t.unbindTexture()}I.depthBuffer&&Xe(I)}function Ae(I){let A=m(I)||o,ne=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ue=0,_e=ne.length;ue<_e;ue++){let ve=ne[ue];if(M(ve,A)){let qe=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(ve).__webglTexture;t.bindTexture(qe,De),v(qe),t.unbindTexture()}}}function fe(I){if(o&&I.samples>0&&he(I)===!1){let A=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ne=I.width,ue=I.height,_e=i.COLOR_BUFFER_BIT,ve=[],qe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),ke=I.isWebGLMultipleRenderTargets===!0;if(ke)for(let je=0;je<A.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let je=0;je<A.length;je++){ve.push(i.COLOR_ATTACHMENT0+je),I.depthBuffer&&ve.push(qe);let it=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(it===!1&&(I.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[je]),it===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qe])),ke){let de=n.get(A[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,ne,ue,0,0,ne,ue,_e,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let je=0;je<A.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,De.__webglColorRenderbuffer[je]);let it=n.get(A[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function be(I){return Math.min(s.maxSamples,I.samples)}function he(I){let A=n.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ze(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Se(I,A){let ne=I.colorSpace,ue=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===ml||ne!==pi&&ne!==zn&&(St.getTransfer(ne)===Pt?o===!1?e.has("EXT_sRGB")===!0&&ue===Tn?(I.format=ml,I.minFilter=On,I.generateMipmaps=!1):A=La.sRGBToLinear(A):(ue!==Tn||_e!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=te,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=Ie,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=he}function Ng(i,e,t){let n=t.isWebGL2;function s(r,a=zn){let o,l=St.getTransfer(a);if(r===Pi)return i.UNSIGNED_BYTE;if(r===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rd)return i.BYTE;if(r===Cd)return i.SHORT;if(r===ac)return i.UNSIGNED_SHORT;if(r===eu)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===Ri)return i.FLOAT;if(r===Xn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pd)return i.ALPHA;if(r===Tn)return i.RGBA;if(r===Id)return i.LUMINANCE;if(r===Ld)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===Bs)return i.DEPTH_STENCIL;if(r===ml)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dd)return i.RED;if(r===iu)return i.RED_INTEGER;if(r===Ud)return i.RG;if(r===su)return i.RG_INTEGER;if(r===ru)return i.RGBA_INTEGER;if(r===Ao||r===Ro||r===Co||r===Po)if(l===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sc||r===Ec||r===Tc||r===Ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===au)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rc||r===Cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rc)return l===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Oc||r===zc||r===Fc||r===Bc||r===kc||r===Hc||r===Gc||r===Vc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vc)return l===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Io||r===Wc||r===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Io)return l===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===qc||r===Yc||r===Zc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Io)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Cl=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&p>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pl=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,u=null,g=null,_=t.getContextAttributes(),m=null,f=null,M=[],v=[],S=new Me,D=null,b=new en;b.layers.enable(1),b.viewport=new Ft;let P=new en;P.layers.enable(2),P.viewport=new Ft;let k=[b,P],E=new Cl;E.layers.enable(1),E.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let me=M[se];return me===void 0&&(me=new xr,M[se]=me),me.getTargetRaySpace()},this.getControllerGrip=function(se){let me=M[se];return me===void 0&&(me=new xr,M[se]=me),me.getGripSpace()},this.getHand=function(se){let me=M[se];return me===void 0&&(me=new xr,M[se]=me),me.getHandSpace()};function J(se){let me=v.indexOf(se.inputSource);if(me===-1)return;let we=M[me];we!==void 0&&(we.update(se.inputSource,se.frame,c||a),we.dispatchEvent({type:se.type,data:se.inputSource}))}function j(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",O);for(let se=0;se<M.length;se++){let me=v[se];me!==null&&(v[se]=null,M[se].disconnect(me))}R=null,z=null,e.setRenderTarget(m),u=null,p=null,d=null,s=null,f=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",j),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let me={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),f=new vn(u.framebufferWidth,u.framebufferHeight,{format:Tn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let me=null,we=null,Ye=null;_.depth&&(Ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?Bs:ts,we=_.stencil?es:Ai);let Le={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Le),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new vn(p.textureWidth,p.textureHeight,{format:Tn,type:Pi,depthTexture:new Ha(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ve=e.properties.get(f);Ve.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(se){for(let me=0;me<se.removed.length;me++){let we=se.removed[me],Ye=v.indexOf(we);Ye>=0&&(v[Ye]=null,M[Ye].disconnect(we))}for(let me=0;me<se.added.length;me++){let we=se.added[me],Ye=v.indexOf(we);if(Ye===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=v.length){v.push(we),Ye=Ve;break}else if(v[Ve]===null){v[Ve]=we,Ye=Ve;break}if(Ye===-1)break}let Le=M[Ye];Le&&Le.connect(we)}}let w=new G,q=new G;function te(se,me,we){w.setFromMatrixPosition(me.matrixWorld),q.setFromMatrixPosition(we.matrixWorld);let Ye=w.distanceTo(q),Le=me.projectionMatrix.elements,Ve=we.projectionMatrix.elements,We=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),Ie=(Le[9]+1)/Le[5],W=(Le[9]-1)/Le[5],Ae=(Le[8]-1)/Le[0],fe=(Ve[8]+1)/Ve[0],be=We*Ae,he=We*fe,ze=Ye/(-Ae+fe),Se=ze*-Ae;me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Se),se.translateZ(ze),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();let I=We+ze,A=Xe+ze,ne=be-Se,ue=he+(Ye-Se),_e=Ie*Xe/A*I,ve=W*Xe/A*I;se.projectionMatrix.makePerspective(ne,ue,_e,ve,I,A),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function V(se,me){me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;E.near=P.near=b.near=se.near,E.far=P.far=b.far=se.far,(R!==E.near||z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,z=E.far);let me=se.parent,we=E.cameras;V(E,me);for(let Ye=0;Ye<we.length;Ye++)V(we[Ye],me);we.length===2?te(E,b,P):E.projectionMatrix.copy(b.projectionMatrix),ie(se,E,me)};function ie(se,me,we){we===null?se.matrix.copy(me.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(me.projectionMatrix),se.projectionMatrixInverse.copy(me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Pa*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function(se){l=se,p!==null&&(p.fixedFoveation=se),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=se)};let pe=null;function ye(se,me){if(h=me.getViewerPose(c||a),g=me,h!==null){let we=h.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let Ye=!1;we.length!==E.cameras.length&&(E.cameras.length=0,Ye=!0);for(let Le=0;Le<we.length;Le++){let Ve=we[Le],We=null;if(u!==null)We=u.getViewport(Ve);else{let Ie=d.getViewSubImage(p,Ve);We=Ie.viewport,Le===0&&(e.setRenderTargetTextures(f,Ie.colorTexture,p.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(f))}let Xe=k[Le];Xe===void 0&&(Xe=new en,Xe.layers.enable(Le),Xe.viewport=new Ft,k[Le]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(We.x,We.y,We.width,We.height),Le===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ye===!0&&E.cameras.push(Xe)}}for(let we=0;we<M.length;we++){let Ye=v[we],Le=M[we];Ye!==null&&Le!==void 0&&Le.update(Ye,me,c||a)}pe&&pe(se,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let Re=new du;Re.setAnimationLoop(ye),this.setAnimationLoop=function(se){pe=se},this.dispose=function(){}}};function zg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,uu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&u(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=s[M.id];S===void 0&&(g(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",m));let D=v.program;n.updateUBOMapping(M,D);let b=e.render.frame;r[M.id]!==b&&(p(M),r[M.id]=b)}function h(M){let v=d();M.__bindingPointIndex=v;let S=i.createBuffer(),D=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let v=s[M.id],S=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,P=S.length;b<P;b++){let k=Array.isArray(S[b])?S[b]:[S[b]];for(let E=0,R=k.length;E<R;E++){let z=k[E];if(u(z,b,E,D)===!0){let J=z.__offset,j=Array.isArray(z.value)?z.value:[z.value],O=0;for(let w=0;w<j.length;w++){let q=j[w],te=_(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,J+O,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,O),O+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,v,S,D){let b=M.value,P=v+"_"+S;if(D[P]===void 0)return typeof b=="number"||typeof b=="boolean"?D[P]=b:D[P]=b.clone(),!0;{let k=D[P];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return D[P]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function g(M){let v=M.uniforms,S=0,D=16;for(let P=0,k=v.length;P<k;P++){let E=Array.isArray(v[P])?v[P]:[v[P]];for(let R=0,z=E.length;R<z;R++){let J=E[R],j=Array.isArray(J.value)?J.value:[J.value];for(let O=0,w=j.length;O<w;O++){let q=j[O],te=_(q),V=S%D;V!==0&&D-V<te.boundary&&(S+=D-V),J.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=te.storage}}}let b=S%D;return b>0&&(S+=D-b),M.__size=S,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var is=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let u=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;let v=this,S=!1,D=0,b=0,P=null,k=-1,E=null,R=new Ft,z=new Ft,J=null,j=new $e(0),O=0,w=t.width,q=t.height,te=1,V=null,ie=null,pe=new Ft(0,0,w,q),ye=new Ft(0,0,w,q),Re=!1,se=new br,me=!1,we=!1,Ye=null,Le=new wt,Ve=new Me,We=new G,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return P===null?te:1}let W=n;function Ae(y,L){for(let N=0;N<y.length;N++){let U=y[N],B=t.getContext(U,L);if(B!==null)return B}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),W===null){let L=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&L.shift(),W=Ae(L,y),W===null)throw Ae(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let fe,be,he,ze,Se,I,A,ne,ue,_e,ve,qe,De,ke,je,it,de,tt,st,Qe,Ze,He,nt,ct;function et(){fe=new im(W),be=new j0(W,fe,e),fe.init(be),He=new Ng(W,fe,be),he=new Dg(W,fe,be),ze=new am(W),Se=new Mg,I=new Ug(W,fe,he,Se,be,He,ze),A=new Q0(v),ne=new nm(v),ue=new pf(W,be),nt=new J0(W,fe,ue,be),_e=new sm(W,ue,ze,nt),ve=new hm(W,_e,ue,ze),st=new cm(W,be,I),it=new K0(Se),qe=new vg(v,A,ne,fe,be,nt,it),De=new zg(v,Se),ke=new wg,je=new Cg(fe,be),tt=new Z0(v,A,ne,he,ve,p,l),de=new Lg(v,ve,be),ct=new Fg(W,ze,be,he),Qe=new $0(W,fe,ze,be),Ze=new rm(W,fe,ze,be),ze.programs=qe.programs,v.capabilities=be,v.extensions=fe,v.properties=Se,v.renderLists=ke,v.shadowMap=de,v.state=he,v.info=ze}et();let Be=new Pl(v,W);this.xr=Be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let y=fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(y){y!==void 0&&(te=y,this.setSize(w,q,!1))},this.getSize=function(y){return y.set(w,q)},this.setSize=function(y,L,N=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=y,q=L,t.width=Math.floor(y*te),t.height=Math.floor(L*te),N===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(w*te,q*te).floor()},this.setDrawingBufferSize=function(y,L,N){w=y,q=L,te=N,t.width=Math.floor(y*N),t.height=Math.floor(L*N),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(pe)},this.setViewport=function(y,L,N,U){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,L,N,U),he.viewport(R.copy(pe).multiplyScalar(te).floor())},this.getScissor=function(y){return y.copy(ye)},this.setScissor=function(y,L,N,U){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,L,N,U),he.scissor(z.copy(ye).multiplyScalar(te).floor())},this.getScissorTest=function(){return Re},this.setScissorTest=function(y){he.setScissorTest(Re=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(y=!0,L=!0,N=!0){let U=0;if(y){let B=!1;if(P!==null){let T=P.texture.format;B=T===ru||T===su||T===iu}if(B){let T=P.texture.type,F=T===Pi||T===Ai||T===ac||T===es||T===tu||T===nu,Z=tt.getClearColor(),$=tt.getClearAlpha(),ae=Z.r,Q=Z.g,ce=Z.b;F?(u[0]=ae,u[1]=Q,u[2]=ce,u[3]=$,W.clearBufferuiv(W.COLOR,0,u)):(g[0]=ae,g[1]=Q,g[2]=ce,g[3]=$,W.clearBufferiv(W.COLOR,0,g))}else U|=W.COLOR_BUFFER_BIT}L&&(U|=W.DEPTH_BUFFER_BIT),N&&(U|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ke.dispose(),je.dispose(),Se.dispose(),A.dispose(),ne.dispose(),ve.dispose(),nt.dispose(),ct.dispose(),qe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",ft),Be.removeEventListener("sessionend",_t),Ye&&(Ye.dispose(),Ye=null),Lt.stop()};function ge(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let y=ze.autoReset,L=de.enabled,N=de.autoUpdate,U=de.needsUpdate,B=de.type;et(),ze.autoReset=y,de.enabled=L,de.autoUpdate=N,de.needsUpdate=U,de.type=B}function Ue(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pe(y){let L=y.target;L.removeEventListener("dispose",Pe),Je(L)}function Je(y){Ke(y),Se.remove(y)}function Ke(y){let L=Se.get(y).programs;L!==void 0&&(L.forEach(function(N){qe.releaseProgram(N)}),y.isShaderMaterial&&qe.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,N,U,B,T){L===null&&(L=Xe);let F=B.isMesh&&B.matrixWorld.determinant()<0,Z=H(y,L,N,U,B);he.setMaterial(U,F);let $=N.index,ae=1;if(U.wireframe===!0){if($=_e.getWireframeAttribute(N),$===void 0)return;ae=2}let Q=N.drawRange,ce=N.attributes.position,Ce=Q.start*ae,Ge=(Q.start+Q.count)*ae;T!==null&&(Ce=Math.max(Ce,T.start*ae),Ge=Math.min(Ge,(T.start+T.count)*ae)),$!==null?(Ce=Math.max(Ce,0),Ge=Math.min(Ge,$.count)):ce!=null&&(Ce=Math.max(Ce,0),Ge=Math.min(Ge,ce.count));let ot=Ge-Ce;if(ot<0||ot===1/0)return;nt.setup(B,U,Z,N,$);let Ht,xe=Qe;if($!==null&&(Ht=ue.get($),xe=Ze,xe.setIndex(Ht)),B.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*Ie()),xe.setMode(W.LINES)):xe.setMode(W.TRIANGLES);else if(B.isLine){let Te=U.linewidth;Te===void 0&&(Te=1),he.setLineWidth(Te*Ie()),B.isLineSegments?xe.setMode(W.LINES):B.isLineLoop?xe.setMode(W.LINE_LOOP):xe.setMode(W.LINE_STRIP)}else B.isPoints?xe.setMode(W.POINTS):B.isSprite&&xe.setMode(W.TRIANGLES);if(B.isBatchedMesh)xe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)xe.renderInstances(Ce,ot,B.count);else if(N.isInstancedBufferGeometry){let Te=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,yt=Math.min(N.instanceCount,Te);xe.renderInstances(Ce,ot,yt)}else xe.render(Ce,ot)};function mt(y,L,N){y.transparent===!0&&y.side===Vt&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,oe(y,L,N),y.side=Li,y.needsUpdate=!0,oe(y,L,N),y.side=Vt):oe(y,L,N)}this.compile=function(y,L,N=null){N===null&&(N=y),m=je.get(N),m.init(),M.push(m),N.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),y!==N&&y.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);let U=new Set;return y.traverse(function(B){let T=B.material;if(T)if(Array.isArray(T))for(let F=0;F<T.length;F++){let Z=T[F];mt(Z,N,B),U.add(Z)}else mt(T,N,B),U.add(T)}),M.pop(),m=null,U},this.compileAsync=function(y,L,N=null){let U=this.compile(y,L,N);return new Promise(B=>{function T(){if(U.forEach(function(F){Se.get(F).currentProgram.isReady()&&U.delete(F)}),U.size===0){B(y);return}setTimeout(T,10)}fe.get("KHR_parallel_shader_compile")!==null?T():setTimeout(T,10)})};let gt=null;function lt(y){gt&&gt(y)}function ft(){Lt.stop()}function _t(){Lt.start()}let Lt=new du;Lt.setAnimationLoop(lt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(y){gt=y,Be.setAnimationLoop(y),y===null?Lt.stop():Lt.start()},Be.addEventListener("sessionstart",ft),Be.addEventListener("sessionend",_t),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(L),L=Be.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,L,P),m=je.get(y,M.length),m.init(),M.push(m),Le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),se.setFromProjectionMatrix(Le),we=this.localClippingEnabled,me=it.init(this.clippingPlanes,we),_=ke.get(y,f.length),_.init(),f.push(_),Ee(y,L,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,ie),this.info.render.frame++,me===!0&&it.beginShadows();let N=m.state.shadowsArray;if(de.render(N,y,L),me===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,y),m.setupLights(v._useLegacyLights),L.isArrayCamera){let U=L.cameras;for(let B=0,T=U.length;B<T;B++){let F=U[B];un(_,y,F,F.viewport)}}else un(_,y,L);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,L),nt.resetDefaultState(),k=-1,E=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ee(y,L,N,U){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||se.intersectsSprite(y)){U&&We.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);let F=ve.update(y),Z=y.material;Z.visible&&_.push(y,F,Z,N,We.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||se.intersectsObject(y))){let F=ve.update(y),Z=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),We.copy(y.boundingSphere.center)):(F.boundingSphere===null&&F.computeBoundingSphere(),We.copy(F.boundingSphere.center)),We.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(Z)){let $=F.groups;for(let ae=0,Q=$.length;ae<Q;ae++){let ce=$[ae],Ce=Z[ce.materialIndex];Ce&&Ce.visible&&_.push(y,F,Ce,N,We.z,ce)}}else Z.visible&&_.push(y,F,Z,N,We.z,null)}}let T=y.children;for(let F=0,Z=T.length;F<Z;F++)Ee(T[F],L,N,U)}function un(y,L,N,U){let B=y.opaque,T=y.transmissive,F=y.transparent;m.setupLightsView(N),me===!0&&it.setGlobalState(v.clippingPlanes,N),T.length>0&&Tt(B,T,L,N),U&&he.viewport(R.copy(U)),B.length>0&&X(B,L,N),T.length>0&&X(T,L,N),F.length>0&&X(F,L,N),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Tt(y,L,N,U){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;let T=be.isWebGL2;Ye===null&&(Ye=new vn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Xn:Pi,minFilter:Mr,samples:T?4:0})),v.getDrawingBufferSize(Ve),T?Ye.setSize(Ve.x,Ve.y):Ye.setSize(gl(Ve.x),gl(Ve.y));let F=v.getRenderTarget();v.setRenderTarget(Ye),v.getClearColor(j),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();let Z=v.toneMapping;v.toneMapping=ei,X(y,N,U),I.updateMultisampleRenderTarget(Ye),I.updateRenderTargetMipmap(Ye);let $=!1;for(let ae=0,Q=L.length;ae<Q;ae++){let ce=L[ae],Ce=ce.object,Ge=ce.geometry,ot=ce.material,Ht=ce.group;if(ot.side===Vt&&Ce.layers.test(U.layers)){let xe=ot.side;ot.side=Zt,ot.needsUpdate=!0,ee(Ce,N,U,Ge,ot,Ht),ot.side=xe,ot.needsUpdate=!0,$=!0}}$===!0&&(I.updateMultisampleRenderTarget(Ye),I.updateRenderTargetMipmap(Ye)),v.setRenderTarget(F),v.setClearColor(j,O),v.toneMapping=Z}function X(y,L,N){let U=L.isScene===!0?L.overrideMaterial:null;for(let B=0,T=y.length;B<T;B++){let F=y[B],Z=F.object,$=F.geometry,ae=U===null?F.material:U,Q=F.group;Z.layers.test(N.layers)&&ee(Z,L,N,$,ae,Q)}}function ee(y,L,N,U,B,T){y.onBeforeRender(v,L,N,U,B,T),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(v,L,N,U,y,T),B.transparent===!0&&B.side===Vt&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,v.renderBufferDirect(N,L,U,B,y,T),B.side=Li,B.needsUpdate=!0,v.renderBufferDirect(N,L,U,B,y,T),B.side=Vt):v.renderBufferDirect(N,L,U,B,y,T),y.onAfterRender(v,L,N,U,B,T)}function oe(y,L,N){L.isScene!==!0&&(L=Xe);let U=Se.get(y),B=m.state.lights,T=m.state.shadowsArray,F=B.state.version,Z=qe.getParameters(y,B.state,T,L,N),$=qe.getProgramCacheKey(Z),ae=U.programs;U.environment=y.isMeshStandardMaterial?L.environment:null,U.fog=L.fog,U.envMap=(y.isMeshStandardMaterial?ne:A).get(y.envMap||U.environment),ae===void 0&&(y.addEventListener("dispose",Pe),ae=new Map,U.programs=ae);let Q=ae.get($);if(Q!==void 0){if(U.currentProgram===Q&&U.lightsStateVersion===F)return C(y,Z),Q}else Z.uniforms=qe.getUniforms(y),y.onBuild(N,Z,v),y.onBeforeCompile(Z,v),Q=qe.acquireProgram(Z,$),ae.set($,Q),U.uniforms=Z.uniforms;let ce=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ce.clippingPlanes=it.uniform),C(y,Z),U.needsLights=le(y),U.lightsStateVersion=F,U.needsLights&&(ce.ambientLightColor.value=B.state.ambient,ce.lightProbe.value=B.state.probe,ce.directionalLights.value=B.state.directional,ce.directionalLightShadows.value=B.state.directionalShadow,ce.spotLights.value=B.state.spot,ce.spotLightShadows.value=B.state.spotShadow,ce.rectAreaLights.value=B.state.rectArea,ce.ltc_1.value=B.state.rectAreaLTC1,ce.ltc_2.value=B.state.rectAreaLTC2,ce.pointLights.value=B.state.point,ce.pointLightShadows.value=B.state.pointShadow,ce.hemisphereLights.value=B.state.hemi,ce.directionalShadowMap.value=B.state.directionalShadowMap,ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ce.spotShadowMap.value=B.state.spotShadowMap,ce.spotLightMatrix.value=B.state.spotLightMatrix,ce.spotLightMap.value=B.state.spotLightMap,ce.pointShadowMap.value=B.state.pointShadowMap,ce.pointShadowMatrix.value=B.state.pointShadowMatrix),U.currentProgram=Q,U.uniformsList=null,Q}function x(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Os.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function C(y,L){let N=Se.get(y);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function H(y,L,N,U,B){L.isScene!==!0&&(L=Xe),I.resetTextureUnits();let T=L.fog,F=U.isMeshStandardMaterial?L.environment:null,Z=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pi,$=(U.isMeshStandardMaterial?ne:A).get(U.envMap||F),ae=U.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Q=!!N.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ce=!!N.morphAttributes.position,Ce=!!N.morphAttributes.normal,Ge=!!N.morphAttributes.color,ot=ei;U.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ot=v.toneMapping);let Ht=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xe=Ht!==void 0?Ht.length:0,Te=Se.get(U),yt=m.state.lights;if(me===!0&&(we===!0||y!==E)){let Un=y===E&&U.id===k;it.setState(U,y,Un)}let rt=!1;U.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==yt.state.version||Te.outputColorSpace!==Z||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||Te.envMap!==$||U.fog===!0&&Te.fog!==T||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==it.numPlanes||Te.numIntersection!==it.numIntersection)||Te.vertexAlphas!==ae||Te.vertexTangents!==Q||Te.morphTargets!==ce||Te.morphNormals!==Ce||Te.morphColors!==Ge||Te.toneMapping!==ot||be.isWebGL2===!0&&Te.morphTargetsCount!==xe)&&(rt=!0):(rt=!0,Te.__version=U.version);let Ut=Te.currentProgram;rt===!0&&(Ut=oe(U,L,B));let jn=!1,Kt=!1,at=!1,ut=Ut.getUniforms(),bt=Te.uniforms;if(he.useProgram(Ut.program)&&(jn=!0,Kt=!0,at=!0),U.id!==k&&(k=U.id,Kt=!0),jn||E!==y){ut.setValue(W,"projectionMatrix",y.projectionMatrix),ut.setValue(W,"viewMatrix",y.matrixWorldInverse);let Un=ut.map.cameraPosition;Un!==void 0&&Un.setValue(W,We.setFromMatrixPosition(y.matrixWorld)),be.logarithmicDepthBuffer&&ut.setValue(W,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ut.setValue(W,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Kt=!0,at=!0)}if(B.isSkinnedMesh){ut.setOptional(W,B,"bindMatrix"),ut.setOptional(W,B,"bindMatrixInverse");let Un=B.skeleton;Un&&(be.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),ut.setValue(W,"boneTexture",Un.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(ut.setOptional(W,B,"batchingTexture"),ut.setValue(W,"batchingTexture",B._matricesTexture,I));let qt=N.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&be.isWebGL2===!0)&&st.update(B,N,Ut),(Kt||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,ut.setValue(W,"receiveShadow",B.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(bt.envMap.value=$,bt.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),Kt&&(ut.setValue(W,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&K(bt,at),T&&U.fog===!0&&De.refreshFogUniforms(bt,T),De.refreshMaterialUniforms(bt,U,te,q,Ye),Os.upload(W,x(Te),bt,I)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Os.upload(W,x(Te),bt,I),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ut.setValue(W,"center",B.center),ut.setValue(W,"modelViewMatrix",B.modelViewMatrix),ut.setValue(W,"normalMatrix",B.normalMatrix),ut.setValue(W,"modelMatrix",B.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Un=U.uniformsGroups;for(let Eo=0,Ku=Un.length;Eo<Ku;Eo++)if(be.isWebGL2){let xc=Un[Eo];ct.update(xc,Ut),ct.bind(xc,Ut)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ut}function K(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function le(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,L,N){Se.get(y.texture).__webglTexture=L,Se.get(y.depthTexture).__webglTexture=N;let U=Se.get(y);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=N===void 0,U.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,L){let N=Se.get(y);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,N=0){P=y,D=L,b=N;let U=!0,B=null,T=!1,F=!1;if(y){let $=Se.get(y);$.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(W.FRAMEBUFFER,null),U=!1):$.__webglFramebuffer===void 0?I.setupRenderTarget(y):$.__hasExternalTextures&&I.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);let ae=y.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(F=!0);let Q=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Q[L])?B=Q[L][N]:B=Q[L],T=!0):be.isWebGL2&&y.samples>0&&I.useMultisampledRTT(y)===!1?B=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(Q)?B=Q[N]:B=Q,R.copy(y.viewport),z.copy(y.scissor),J=y.scissorTest}else R.copy(pe).multiplyScalar(te).floor(),z.copy(ye).multiplyScalar(te).floor(),J=Re;if(he.bindFramebuffer(W.FRAMEBUFFER,B)&&be.drawBuffers&&U&&he.drawBuffers(y,B),he.viewport(R),he.scissor(z),he.setScissorTest(J),T){let $=Se.get(y.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+L,$.__webglTexture,N)}else if(F){let $=Se.get(y.texture),ae=L||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,$.__webglTexture,N||0,ae)}k=-1},this.readRenderTargetPixels=function(y,L,N,U,B,T,F){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&F!==void 0&&(Z=Z[F]),Z){he.bindFramebuffer(W.FRAMEBUFFER,Z);try{let $=y.texture,ae=$.format,Q=$.type;if(ae!==Tn&&He.convert(ae)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ce=Q===Xn&&(fe.has("EXT_color_buffer_half_float")||be.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Q!==Pi&&He.convert(Q)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Q===Ri&&(be.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-U&&N>=0&&N<=y.height-B&&W.readPixels(L,N,U,B,He.convert(ae),He.convert(Q),T)}finally{let $=P!==null?Se.get(P).__webglFramebuffer:null;he.bindFramebuffer(W.FRAMEBUFFER,$)}}},this.copyFramebufferToTexture=function(y,L,N=0){let U=Math.pow(2,-N),B=Math.floor(L.image.width*U),T=Math.floor(L.image.height*U);I.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,N,0,0,y.x,y.y,B,T),he.unbindTexture()},this.copyTextureToTexture=function(y,L,N,U=0){let B=L.image.width,T=L.image.height,F=He.convert(N.format),Z=He.convert(N.type);I.setTexture2D(N,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,N.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,N.unpackAlignment),L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,U,y.x,y.y,B,T,F,Z,L.image.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,U,y.x,y.y,L.mipmaps[0].width,L.mipmaps[0].height,F,L.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,U,y.x,y.y,F,Z,L.image),U===0&&N.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(y,L,N,U,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let T=y.max.x-y.min.x+1,F=y.max.y-y.min.y+1,Z=y.max.z-y.min.z+1,$=He.convert(U.format),ae=He.convert(U.type),Q;if(U.isData3DTexture)I.setTexture3D(U,0),Q=W.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)I.setTexture2DArray(U,0),Q=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,U.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,U.unpackAlignment);let ce=W.getParameter(W.UNPACK_ROW_LENGTH),Ce=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ge=W.getParameter(W.UNPACK_SKIP_PIXELS),ot=W.getParameter(W.UNPACK_SKIP_ROWS),Ht=W.getParameter(W.UNPACK_SKIP_IMAGES),xe=N.isCompressedTexture?N.mipmaps[B]:N.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,xe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,y.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,y.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,y.min.z),N.isDataTexture||N.isData3DTexture?W.texSubImage3D(Q,B,L.x,L.y,L.z,T,F,Z,$,ae,xe.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Q,B,L.x,L.y,L.z,T,F,Z,$,xe.data)):W.texSubImage3D(Q,B,L.x,L.y,L.z,T,F,Z,$,ae,xe),W.pixelStorei(W.UNPACK_ROW_LENGTH,ce),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ce),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ge),W.pixelStorei(W.UNPACK_SKIP_ROWS,ot),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ht),B===0&&U.generateMipmaps&&W.generateMipmap(Q),he.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){D=0,b=0,P=null,he.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?ns:ou}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?zt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Il=class extends is{};Il.prototype.isWebGL1Renderer=!0;var Ga=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fi=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new G,wr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bi=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,hr=new G,Rs=new G,Cs=new G,Ps=new Me,ur=new Me,_u=new wt,fa=new G,dr=new G,pa=new G,Fh=new Me,il=new Me,Bh=new Me,ss=class extends Wt{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Va(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new wr(n,3,0,!1)),As.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),_u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ma(fa.set(-.5,-.5,0),Cs,a,Rs,s,r),ma(dr.set(.5,-.5,0),Cs,a,Rs,s,r),ma(pa.set(.5,.5,0),Cs,a,Rs,s,r),Fh.set(0,0),il.set(1,0),Bh.set(1,1);let o=e.ray.intersectTriangle(fa,dr,pa,!1,hr);if(o===null&&(ma(dr.set(-.5,.5,0),Cs,a,Rs,s,r),il.set(0,1),o=e.ray.intersectTriangle(fa,pa,dr,!1,hr),o===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:Qi.getInterpolation(hr,fa,dr,pa,Fh,il,Bh,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ma(i,e,t,n,s,r){Ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Ps.x-s*Ps.y,ur.y=s*Ps.x+r*Ps.y):ur.copy(Ps),i.copy(e),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(_u)}var Wa=class extends An{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,h=Qt,d,p){super(null,a,o,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new wt,kh=new wt,ga=[],Hh=new mi,Bg=new wt,fr=new Oe,pr=new Ui,Xa=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Hh.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Hh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),pr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),kh.multiplyMatrices(n,Is),fr.matrixWorld=kh,fr.raycast(e,ga);for(let a=0,o=ga.length;a<o;a++){let l=ga[a];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Er=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gh=new wt,Ll=new Na,xa=new Ui,_a=new G,qa=class extends Wt{constructor(e=new Rt,t=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;Gh.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=p,_=u;g<_;g++){let m=c.getX(g);_a.fromBufferAttribute(d,m),Vh(_a,m,l,s,e,t,this)}}else{let p=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=p,_=u;g<_;g++)_a.fromBufferAttribute(d,g),Vh(_a,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(i,e,t,n,s,r,a){let o=Ll.distanceSqToPoint(i);if(o<t){let l=new G;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Pn=class extends An{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(a-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new G,s=[],r=[],a=[],o=new G,l=new wt;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(pn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Tr=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Me,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,u=c-this.aY;l=p*h-u*d+this.aX,c=p*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dl=class extends Tr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;p*=h,u*=h,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ya=new G,sl=new cc,rl=new cc,al=new cc,Ul=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),c=ya);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),sl.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,_,m),rl.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,_,m),al.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),rl.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),al.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function kg(i,e){let t=1-i;return t*t*e}function Hg(i,e){return 2*(1-i)*i*e}function Gg(i,e){return i*i*e}function _r(i,e,t,n){return kg(i,e)+Hg(i,t)+Gg(i,n)}function Vg(i,e){let t=1-i;return t*t*t*e}function Wg(i,e){let t=1-i;return 3*t*t*i*e}function Xg(i,e){return 3*(1-i)*i*i*e}function qg(i,e){return i*i*i*e}function yr(i,e,t,n,s){return Vg(i,e)+Wg(i,t)+Xg(i,n)+qg(i,s)}var Ya=class extends Bn{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Bn{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends Bn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends Bn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Bn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends Bn{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Wh(o,l.x,c.x,h.x,d.x),Wh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:Ul,CubicBezierCurve:Ya,CubicBezierCurve3:Nl,EllipseCurve:Tr,LineCurve:Za,LineCurve3:Ol,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:zl,SplineCurve:$a}),Bl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fl[s.type]().fromJSON(s))}return this}},ja=class extends Bl{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Za(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ja(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ya(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Tr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ti=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new G,h=new Me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let u=n+d/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],u=[],g=0,_=[],m=n/2,f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(u,2));function M(){let S=new G,D=new G,b=0,P=(t-e)/n;for(let k=0;k<=r;k++){let E=[],R=k/r,z=R*(t-e)+e;for(let J=0;J<=s;J++){let j=J/s,O=j*l+o,w=Math.sin(O),q=Math.cos(O);D.x=z*w,D.y=-R*n+m,D.z=z*q,d.push(D.x,D.y,D.z),S.set(w,P,q).normalize(),p.push(S.x,S.y,S.z),u.push(j,1-R),E.push(g++)}_.push(E)}for(let k=0;k<s;k++)for(let E=0;E<r;E++){let R=_[E][k],z=_[E+1][k],J=_[E+1][k+1],j=_[E][k+1];h.push(R,z,j),h.push(z,J,j),b+=6}c.addGroup(f,b,0),f+=b}function v(S){let D=g,b=new Me,P=new G,k=0,E=S===!0?e:t,R=S===!0?1:-1;for(let J=1;J<=s;J++)d.push(0,m*R,0),p.push(0,R,0),u.push(.5,.5),g++;let z=g;for(let J=0;J<=s;J++){let O=J/s*l+o,w=Math.cos(O),q=Math.sin(O);P.x=E*q,P.y=m*R,P.z=E*w,d.push(P.x,P.y,P.z),p.push(0,R,0),b.x=w*.5+.5,b.y=q*.5*R+.5,u.push(b.x,b.y),g++}for(let J=0;J<s;J++){let j=D+J,O=z+J;S===!0?h.push(O,O+1,j):h.push(O+1,O,j),k+=3}c.addGroup(f,k,S===!0?1:2),f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ln=class i extends on{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ka=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new G,S=new G,D=new G;for(let b=0;b<t.length;b+=3)u(t[b+0],v),u(t[b+1],S),u(t[b+2],D),l(v,S,D,M)}function l(M,v,S,D){let b=D+1,P=[];for(let k=0;k<=b;k++){P[k]=[];let E=M.clone().lerp(S,k/b),R=v.clone().lerp(S,k/b),z=b-k;for(let J=0;J<=z;J++)J===0&&k===b?P[k][J]=E:P[k][J]=E.clone().lerp(R,J/z)}for(let k=0;k<b;k++)for(let E=0;E<2*(b-k)-1;E++){let R=Math.floor(E/2);E%2===0?(p(P[k][R+1]),p(P[k+1][R]),p(P[k][R])):(p(P[k][R+1]),p(P[k+1][R+1]),p(P[k+1][R]))}}function c(M){let v=new G;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){let M=new G;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let S=m(M)/2/Math.PI+.5,D=f(M)/Math.PI+.5;a.push(S,1-D)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],S=a[M+2],D=a[M+4],b=Math.max(v,S,D),P=Math.min(v,S,D);b>.9&&P<.1&&(v<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function u(M,v){let S=M*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){let M=new G,v=new G,S=new G,D=new G,b=new Me,P=new Me,k=new Me;for(let E=0,R=0;E<r.length;E+=9,R+=6){M.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),b.set(a[R+0],a[R+1]),P.set(a[R+2],a[R+3]),k.set(a[R+4],a[R+5]),D.copy(M).add(v).add(S).divideScalar(3);let z=m(D);_(b,R+0,M,z),_(P,R+2,v,z),_(k,R+4,S,z)}}function _(M,v,S,D){D<0&&M.x===1&&(a[v]=M.x-1),S.x===0&&S.z===0&&(a[v]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ni=class extends ja{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ja().fromJSON(s))}return this}},Yg={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,p,u;if(n&&(r=Kg(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)d=i[g],p=i[g+1],d<o&&(o=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Ar(r,a,t,o,l,u,0),a}};function yu(i,e,t,n,s){let r,a;if(s===cx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Xh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Xh(r,i[r],i[r+1],a);return a&&co(a,a.next)&&(Cr(a),a=a.next),a}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(co(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ar(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ix(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Jg(i,n,s,r):Zg(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Cr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$g(rs(i),e,t),Ar(i,e,t,n,s,r,2)):a===2&&jg(i,e,t,n,s,r):Ar(rs(i),e,t,n,s,r,1);break}}}function Zg(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=u&&Us(s,o,r,l,a,c,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,p=a.y,u=o<l?o<c?o:c:l<c?l:c,g=h<d?h<p?h:p:d<p?d:p,_=o>l?o>c?o:c:l>c?l:c,m=h>d?h>p?h:p:d>p?d:p,f=kl(u,g,e,t,n),M=kl(_,m,e,t,n),v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=M;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Us(o,h,l,d,c,p,v.x,v.y)&&Gt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=u&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Us(o,h,l,d,c,p,S.x,S.y)&&Gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Us(o,h,l,d,c,p,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=u&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Us(o,h,l,d,c,p,S.x,S.y)&&Gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function $g(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!co(s,r)&&vu(s,n,n.next,r)&&Rr(s,r)&&Rr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Cr(n),Cr(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function jg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ax(a,o)){let l=Mu(a,o);a=rs(a,a.next),l=rs(l,l.next),Ar(a,e,t,n,s,r,0),Ar(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kg(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=yu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(rx(c));for(s.sort(Qg),r=0;r<s.length;r++)t=ex(s[r],t);return t}function Qg(i,e){return i.x-e.x}function ex(i,e){let t=tx(i,e);if(!t)return e;let n=Mu(t,i);return rs(n,n.next),rs(t,t.next)}function tx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Us(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Rr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&nx(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function nx(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function ix(i,e,t,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sx(s)}function sx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Us(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ax(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ox(i,e)&&(Rr(i,e)&&Rr(e,i)&&lx(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||co(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function co(i,e){return i.x===e.x&&i.y===e.y}function vu(i,e,t,n){let s=Ma(Gt(i,e,t)),r=Ma(Gt(i,e,n)),a=Ma(Gt(t,n,i)),o=Ma(Gt(t,n,e));return!!(s!==r&&a!==o||s===0&&va(i,t,e)||r===0&&va(i,n,e)||a===0&&va(t,i,n)||o===0&&va(t,e,n))}function va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ma(i){return i>0?1:i<0?-1:0}function ox(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Rr(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function lx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mu(i,e){let t=new Hl(i.i,i.x,i.y),n=new Hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xh(i,e,t,n){let s=new Hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ii=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];qh(e),Yh(n,e);let a=e.length;t.forEach(qh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Yh(n,t[l]);let o=Yg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gs=class i extends Rt{constructor(e=new ni([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:hx,v,S=!1,D,b,P,k;f&&(v=f.getSpacedPoints(h),S=!0,p=!1,D=f.computeFrenetFrames(h,!1),b=new G,P=new G,k=new G),p||(m=0,u=0,g=0,_=0);let E=o.extractPoints(c),R=E.shape,z=E.holes;if(!Ii.isClockWise(R)){R=R.reverse();for(let W=0,Ae=z.length;W<Ae;W++){let fe=z[W];Ii.isClockWise(fe)&&(z[W]=fe.reverse())}}let j=Ii.triangulateShape(R,z),O=R;for(let W=0,Ae=z.length;W<Ae;W++){let fe=z[W];R=R.concat(fe)}function w(W,Ae,fe){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(Ae,fe)}let q=R.length,te=j.length;function V(W,Ae,fe){let be,he,ze,Se=W.x-Ae.x,I=W.y-Ae.y,A=fe.x-W.x,ne=fe.y-W.y,ue=Se*Se+I*I,_e=Se*ne-I*A;if(Math.abs(_e)>Number.EPSILON){let ve=Math.sqrt(ue),qe=Math.sqrt(A*A+ne*ne),De=Ae.x-I/ve,ke=Ae.y+Se/ve,je=fe.x-ne/qe,it=fe.y+A/qe,de=((je-De)*ne-(it-ke)*A)/(Se*ne-I*A);be=De+Se*de-W.x,he=ke+I*de-W.y;let tt=be*be+he*he;if(tt<=2)return new Me(be,he);ze=Math.sqrt(tt/2)}else{let ve=!1;Se>Number.EPSILON?A>Number.EPSILON&&(ve=!0):Se<-Number.EPSILON?A<-Number.EPSILON&&(ve=!0):Math.sign(I)===Math.sign(ne)&&(ve=!0),ve?(be=-I,he=Se,ze=Math.sqrt(ue)):(be=Se,he=I,ze=Math.sqrt(ue/2))}return new Me(be/ze,he/ze)}let ie=[];for(let W=0,Ae=O.length,fe=Ae-1,be=W+1;W<Ae;W++,fe++,be++)fe===Ae&&(fe=0),be===Ae&&(be=0),ie[W]=V(O[W],O[fe],O[be]);let pe=[],ye,Re=ie.concat();for(let W=0,Ae=z.length;W<Ae;W++){let fe=z[W];ye=[];for(let be=0,he=fe.length,ze=he-1,Se=be+1;be<he;be++,ze++,Se++)ze===he&&(ze=0),Se===he&&(Se=0),ye[be]=V(fe[be],fe[ze],fe[Se]);pe.push(ye),Re=Re.concat(ye)}for(let W=0;W<m;W++){let Ae=W/m,fe=u*Math.cos(Ae*Math.PI/2),be=g*Math.sin(Ae*Math.PI/2)+_;for(let he=0,ze=O.length;he<ze;he++){let Se=w(O[he],ie[he],be);Le(Se.x,Se.y,-fe)}for(let he=0,ze=z.length;he<ze;he++){let Se=z[he];ye=pe[he];for(let I=0,A=Se.length;I<A;I++){let ne=w(Se[I],ye[I],be);Le(ne.x,ne.y,-fe)}}}let se=g+_;for(let W=0;W<q;W++){let Ae=p?w(R[W],Re[W],se):R[W];S?(P.copy(D.normals[0]).multiplyScalar(Ae.x),b.copy(D.binormals[0]).multiplyScalar(Ae.y),k.copy(v[0]).add(P).add(b),Le(k.x,k.y,k.z)):Le(Ae.x,Ae.y,0)}for(let W=1;W<=h;W++)for(let Ae=0;Ae<q;Ae++){let fe=p?w(R[Ae],Re[Ae],se):R[Ae];S?(P.copy(D.normals[W]).multiplyScalar(fe.x),b.copy(D.binormals[W]).multiplyScalar(fe.y),k.copy(v[W]).add(P).add(b),Le(k.x,k.y,k.z)):Le(fe.x,fe.y,d/h*W)}for(let W=m-1;W>=0;W--){let Ae=W/m,fe=u*Math.cos(Ae*Math.PI/2),be=g*Math.sin(Ae*Math.PI/2)+_;for(let he=0,ze=O.length;he<ze;he++){let Se=w(O[he],ie[he],be);Le(Se.x,Se.y,d+fe)}for(let he=0,ze=z.length;he<ze;he++){let Se=z[he];ye=pe[he];for(let I=0,A=Se.length;I<A;I++){let ne=w(Se[I],ye[I],be);S?Le(ne.x,ne.y+v[h-1].y,v[h-1].x+fe):Le(ne.x,ne.y,d+fe)}}}me(),we();function me(){let W=s.length/3;if(p){let Ae=0,fe=q*Ae;for(let be=0;be<te;be++){let he=j[be];Ve(he[2]+fe,he[1]+fe,he[0]+fe)}Ae=h+m*2,fe=q*Ae;for(let be=0;be<te;be++){let he=j[be];Ve(he[0]+fe,he[1]+fe,he[2]+fe)}}else{for(let Ae=0;Ae<te;Ae++){let fe=j[Ae];Ve(fe[2],fe[1],fe[0])}for(let Ae=0;Ae<te;Ae++){let fe=j[Ae];Ve(fe[0]+q*h,fe[1]+q*h,fe[2]+q*h)}}n.addGroup(W,s.length/3-W,0)}function we(){let W=s.length/3,Ae=0;Ye(O,Ae),Ae+=O.length;for(let fe=0,be=z.length;fe<be;fe++){let he=z[fe];Ye(he,Ae),Ae+=he.length}n.addGroup(W,s.length/3-W,1)}function Ye(W,Ae){let fe=W.length;for(;--fe>=0;){let be=fe,he=fe-1;he<0&&(he=W.length-1);for(let ze=0,Se=h+m*2;ze<Se;ze++){let I=q*ze,A=q*(ze+1),ne=Ae+be+I,ue=Ae+he+I,_e=Ae+he+A,ve=Ae+be+A;We(ne,ue,_e,ve)}}}function Le(W,Ae,fe){l.push(W),l.push(Ae),l.push(fe)}function Ve(W,Ae,fe){Xe(W),Xe(Ae),Xe(fe);let be=s.length/3,he=M.generateTopUV(n,s,be-3,be-2,be-1);Ie(he[0]),Ie(he[1]),Ie(he[2])}function We(W,Ae,fe,be){Xe(W),Xe(Ae),Xe(be),Xe(Ae),Xe(fe),Xe(be);let he=s.length/3,ze=M.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Ie(ze[0]),Ie(ze[1]),Ie(ze[3]),Ie(ze[1]),Ie(ze[2]),Ie(ze[3])}function Xe(W){s.push(l[W*3+0]),s.push(l[W*3+1]),s.push(l[W*3+2])}function Ie(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ux(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fl[s.type]().fromJSON(s)),new i(n,e.options)}},hx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Me(r,a),new Me(o,l),new Me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[s*3],u=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Me(a,1-l),new Me(c,1-d),new Me(p,1-g),new Me(_,1-f)]:[new Me(o,1-l),new Me(h,1-d),new Me(u,1-g),new Me(m,1-f)]}};function ux(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qa=class i extends Ka{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},sn=class i extends Ka{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qn=class i extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,p=(t-e)/s,u=new G,g=new Me;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let f=r+m/n*a;u.x=d*Math.cos(f),u.y=d*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let _=0;_<s;_++){let m=_*(n+1);for(let f=0;f<n;f++){let M=f+m,v=M,S=M+n+1,D=M+n+2,b=M+1;o.push(v,S,b),o.push(S,D,b)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pr=class i extends Rt{constructor(e=new ni([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(a,2));function c(h){let d=s.length/3,p=h.extractPoints(t),u=p.shape,g=p.holes;Ii.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Ii.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=Ii.triangulateShape(u,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];u=u.concat(M)}for(let m=0,f=u.length;m<f;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,f=_.length;m<f;m++){let M=_[m],v=M[0]+d,S=M[1]+d,D=M[2]+d;n.push(v,S,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return dx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function dx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Yn=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new G,p=new G,u=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let M=[],v=f/n,S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){let b=D/t;d.x=-e*Math.cos(s+b*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),m.push(b+S,1-v),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let v=h[f][M+1],S=h[f][M],D=h[f+1][M],b=h[f+1][M+1];(f!==0||a>0)&&u.push(v,S,b),(f!==n-1||l<Math.PI)&&u.push(S,D,b)}this.setIndex(u),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mn=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new G,d=new G,p=new G;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let _=g/s*r,m=u/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let _=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,f=(s+1)*(u-1)+g,M=(s+1)*u+g;a.push(_,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var eo=class extends Fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},to=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ir=class extends Fn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new $e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var no=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends Vs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=e,o=2*t-n;break;case jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=e,l=2*n-t;break;case jc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-p*m+2*p*_-p*g,M=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,v=(-1-u)*m+(1.5+u)*_+.5*g,S=u*m-u*_;for(let D=0;D!==o;++D)r[D]=f*a[h+D]+M*a[c+D]+v*a[l+D]+S*a[d+D];return r}},Vl=class extends Vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[l+p]*h;return r}},Wl=class extends Vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,p=d-n,u=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[p+g]||_!==t[u+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Ea;var as=class extends Zn{};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Sa;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Zn{};Xl.prototype.ValueTypeName="color";var ql=class extends Zn{};ql.prototype.ValueTypeName="number";var Yl=class extends Vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Lr=class extends Zn{InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=Ea;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Zn{};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Sa;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Zn{};Zl.prototype.ValueTypeName="vector";var Jl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},px=new Jl,$l=class{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Xs=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ol=new wt,Zh=new G,Jh=new G,Dr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jl=class extends Dr{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},io=class extends Ws{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$h=new wt,mr=new G,ll=new G,Kl=class extends Dr{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}},In=class extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ql=class extends Dr{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var so=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jh(){return(typeof performance>"u"?Date:performance).now()}var hc="\\[\\]\\.:\\/",mx=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",gx="[^"+hc.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",uc),_x=/(WCOD+)?/.source.replace("WCOD",gx),yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),Mx=new RegExp("^"+xx+_x+yx+vx+"$"),bx=["material","materials","bones","map"],ec=class{constructor(e,t,n){let s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){let t=Mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=ec;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Js=class extends Fi{constructor(e=null){super();let t=new Cn;t.deleteAttribute("uv");let n=new gn({side:Zt}),s=new gn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new In(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Oe(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Oe(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Oe(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Oe(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Oe(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new Oe(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let u=new Oe(t,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let g=new Oe(t,Zs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Oe(t,Zs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Oe(t,Zs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new Oe(t,Zs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let M=new Oe(t,Zs(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new Oe(t,Zs(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zs(i){let e=new At;return e.color.setScalar(i),e}function Or(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Rt,c=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(d)}for(let h in r){let d=bu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){let u=[];for(let _=0;_<a[h].length;++_)u.push(a[h][_][p]);let g=bu(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function bu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Jt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function jt(i,e=18,t=!0,n=!0){let s=[],r=[];for(let l of i)for(let c=0;c<e;c++){let h=c/e*Math.PI*2,d=Math.cos(h);s.push((l.x||0)+Math.sin(h)*l.rx,l.y,(l.z||0)+d*(d>=0?l.rz:l.rb??l.rz))}for(let l=0;l<i.length-1;l++)for(let c=0;c<e;c++){let h=l*e+c,d=l*e+(c+1)%e,p=h+e,u=d+e;r.push(h,d,p,d,u,p)}let a=i.length;if(t){let l=i[0],c=s.length/3;s.push(l.x||0,l.y,l.z||0);for(let h=0;h<e;h++)r.push(c,(h+1)%e,h)}if(n){let l=i[a-1],c=s.length/3,h=(a-1)*e;s.push(l.x||0,l.y,l.z||0);for(let d=0;d<e;d++)r.push(c,h+d,h+(d+1)%e)}let o=new Rt;return o.setAttribute("position",new ht(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function Gi(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let l=o/6,c=e+(t-e)*l;r.push({y:-i*l,rx:c,rz:c*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),jt(r,n)}function re(i,e,t=0,n=0,s=0){let r=new Oe(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function Xt(i=0,e=0,t=0,...n){let s=new vt;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var Mt=(i,e,t)=>new Cn(i,e,t),Ct=(i,e=14,t=10)=>new Yn(i,e,t),Bt=(i,e,t,n=12,s=!1)=>new on(i,e,t,n,1,s),cn=(i,e,t=10)=>new ln(i,e,t),Nt=(i,e,t)=>i+(e-i)*t;function gi(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var ho=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512]],bn=[10725556,4906624,3718648,11566335,16096779,16731501,16773560];function Jn(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],l=i[a],c=i[a+1],h=i[Math.min(i.length-1,a+2)];for(let d=0;d<e;d++){let p=d/e,u={y:Nt(l.y,c.y,p)};for(let g of n){let _=s(o,g),m=s(l,g),f=s(c,g),M=s(h,g),v=.5*(2*m+(-_+f)*p+(2*_-5*m+4*f-M)*p*p+(-_+3*m-3*f+M)*p*p*p);g[0]==="r"&&(v=Math.max(8e-4,Math.min(Math.max(m,f)*1.08,v))),u[g]=v}t.push(u)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function Su(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,l=e+1;for(let d of i)for(let p=0;p<=e;p++){let u=-Math.PI+p/e*Math.PI*2,g=Math.cos(u);t.push((d.x||0)+Math.sin(u)*d.rx,d.y,(d.z||0)+g*(g>=0?d.rz:d.rb??d.rz)),n.push(p/e,(d.y-a)/(o-a))}for(let d=0;d<r-1;d++)for(let p=0;p<e;p++){let u=d*l+p,g=u+1,_=u+l,m=g+l;s.push(u,g,_,g,m,_)}{let d=i[0],p=t.length/3;t.push(d.x||0,d.y,d.z||0),n.push(.5,0);for(let u=0;u<e;u++)s.push(p,u+1,u)}{let d=i[r-1],p=t.length/3,u=(r-1)*l;t.push(d.x||0,d.y,d.z||0),n.push(.5,1);for(let g=0;g<e;g++)s.push(p,u+g,u+g+1)}let c=new Rt;c.setAttribute("position",new ht(t,3)),c.setAttribute("uv",new ht(n,2)),c.setIndex(s),c.computeVertexNormals();let h=c.attributes.normal;for(let d=0;d<r;d++){let p=d*l,u=p+e,g=h.getX(p)+h.getX(u),_=h.getY(p)+h.getY(u),m=h.getZ(p)+h.getZ(u),f=Math.hypot(g,_,m)||1;h.setXYZ(p,g/f,_/f,m/f),h.setXYZ(u,g/f,_/f,m/f)}return c}function xi(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),jt(Jn(s,2),t)}var wu={};function Eu(i){let e=i?"s":"h",t=wu[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=wu[e]=new Wa(s,n.length,1,Tn),t.minFilter=t.magFilter=Qt,t.generateMipmaps=!1,t.needsUpdate=!0,t}function dc(i,e){return new Ir(Object.assign({color:i,gradientMap:Eu(!0)},e||{}))}function hn(i,e){return new Ir(Object.assign({color:i,gradientMap:Eu()},e||{}))}var $s=null;function Tu(){return $s||($s=new At({color:1314586,side:Zt}),$s.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},$s.userData.shared=!0,$s)}var wx=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function Au(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new wt,r=new wt;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,l=[];r.copy(a.matrixWorld).invert();let c=d=>{for(let p of d.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let u=wx(p,!!p.material.map);u.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(u),l.push(p)}else!p.isLight&&!p.isSprite&&c(p)};c(a);for(let d of l)d.parent.remove(d),d.geometry.dispose();let h=[];for(let[d,p]of o){let u=p.length>1?Or(p,!1):p[0];p.length>1&&p.forEach(_=>_.dispose());let g=new Oe(u,d);g.castShadow=!0,a.add(g),!d.isMeshBasicMaterial&&!d.userData.noInk&&h.push(u)}if(e&&h.length){let d=h.map(g=>{let _=g.clone();return _.attributes.uv&&_.deleteAttribute("uv"),_}),p=d.length>1?Or(d,!1):d[0];d.length>1&&d.forEach(g=>g.dispose());let u=new Oe(p,Tu());u.userData.ink=!0,u.castShadow=!1,a.add(u),n.push(u)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function uo(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new Oe(n.geometry,Tu());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function js(i,e){let t=ho[i][e?1:0];return hn(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Et=(i,e,t,n)=>hn(i,n||void 0),Qs={},zr=(i,e)=>Qs[i]||(Qs[i]=e()),Ks=()=>zr("wood",()=>hn(8016432)),fo=()=>zr("leather",()=>hn(4861984)),wn=i=>zr("m"+i,()=>js(i)),xn=i=>zr("d"+i,()=>js(i,!0)),$n=(i,e=1)=>zr("g"+i+e,()=>hn(bn[i],{emissive:bn[i],emissiveIntensity:e})),Ru=new ln(.5,1,5).translate(0,.5,0),Cu=new sn(1),Pu=new on(1,1,1,10,1,!0),Sx=new Mn(1,.05,6,40),_i=(i,e)=>new At({color:i,transparent:!0,opacity:e,blending:mn,depthWrite:!1,side:Vt}),ls=(i,e,t)=>{let n=new Oe(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function er(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,l=(c,h,d,p)=>{let u=_i(h,.95),g=[];for(let _=0;_<c;_++){let m=ls(Cu,u,i);m.scale.set(d,d*1.7,d),g.push(m)}n.push(_=>g.forEach((m,f)=>{let M=_*(1.5+f*.27)+f*2.1,v=(f/c+_*p)%1,S=Math.sin(v*Math.PI);m.position.set(s+Math.cos(M)*(o+.035),t.y0+a*v,r+Math.sin(M)*(o+.035)),m.rotation.y=_*3+f,m.scale.set(d*S,d*1.7*S,d*S)}))};if(e===3)l(3,13215999,.014,.1);else if(e===4){l(6,16767088,.014,.16);let c=ls(Pu,_i(16762960,.13),i);c.position.set(s,t.y0+a/2,r),c.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(h=>{c.material.opacity=.1+Math.sin(h*3)*.05})}else if(e===5){let c=_i(16725012,.7),h=_i(16760906,.85),d=t.mode==="lite",p=d?2:Math.max(3,Math.min(8,Math.round(a/.13))),u=[],g=Math.min(.075,o*1.2+.03)*(d?.62:1);for(let _=0;_<=p;_++){let m=_===p,f=_%2?1:-1,M=g*(m?1.35:1),v=ls(Ru,c,i);ls(Ru,h,v).scale.set(.5,.62,.5),v.position.set(s+(m?0:f*Math.min(o,.09)*.7),m?t.y1-M*.4:t.y0+a*(_+.4)/p,r),u.push({f:v,side:m?0:f,sz:M,i:_})}n.push(_=>{for(let m of u){let f=1+.32*Math.sin(_*11+m.i*1.7)+.18*Math.sin(_*17.3+m.i*.6);m.f.scale.set(m.sz*(.85+.15*Math.sin(_*9+m.i)),m.sz*2.3*f,m.sz*.55),m.f.rotation.z=-m.side*(.5+.16*Math.sin(_*7+m.i))}}),d||l(4,16742970,.011,.5)}else if(e>=6){let c=t.mode==="lite",h=t.mode==="halo";if(!c&&!h&&o<=.1){let d=ls(Pu,_i(16773312,.2),i);d.position.set(s,t.y0+a/2,r),d.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{d.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!c){let d=ls(Sx,_i(16771496,.9),i);d.position.set(s,t.y1,r),d.scale.setScalar(Math.min(o+.06,.17)),d.rotation.x=Math.PI/2,n.push(p=>{d.rotation.z=p*1.4,h||(d.rotation.y=Math.sin(p*.9)*.35)})}if(!h){let d=new vt;d.position.set(s,t.y1+.03,r);let p=_i(16777215,.95),u=c?.6:1;for(let[g,_,m]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])ls(Cu,p,d).scale.set(g*u,_*u,m*u);i.add(d),n.push(g=>{d.rotation.set(g*.7,g*1.1,0),d.scale.setScalar(1+.3*Math.sin(g*4))})}l(c||h?3:6,16774872,.011,.22)}return c=>{for(let h of n)h(c)}}function Lu(i,e,t){let n=new ni;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new Pr(n,8),r=[_i(16771504,.34),_i(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],l=!0;for(let c of[-1,1]){let h=new vt;h.position.set(c*.05,e,t),o.forEach(([d,p,u],g)=>{let _=new Oe(s,r[g%2]);_.castShadow=!1,l||(_.userData.sharedGeo=!0),l=!1,_.scale.set(c*p,u*p*1.5,1),_.rotation.z=c*d,_.position.z=-g*.004,h.add(_)}),i.add(h),a.push({piv:h,s:c})}return c=>{for(let h of a)h.piv.rotation.y=-h.s*(.38+Math.sin(c*1.8)*.16);r[0].opacity=.3+Math.sin(c*2.6)*.07}}var Iu={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Du(i,e=0){Qs={};let t=new vt,n=(s,r,a,o)=>{let l=re(Mt(r,s,.012),wn(e),0,o/2+s/2,0);t.add(l);let c=re(cn(r/2,r*1.4,4),wn(e),0,o/2+s+r*.7,0);if(c.scale.z=.14,c.rotation.y=Math.PI/4,t.add(c),t.add(re(Mt(r*.22,s*.9,.016),xn(e),0,o/2+s*.47,0)),t.add(re(Mt(a,.03,.035),xn(e),0,o/2+.005,0)),t.add(re(Bt(.016,.016,o,8),fo())),t.add(re(Ct(.026,8,6),xn(e),0,-o/2-.015,0)),e>=2&&t.add(re(new sn(.02),$n(e),0,o/2+.005,.022)),e>=3&&t.add(re(Mt(.008,s*.75,.02),$n(e,1.4),0,o/2+s*.45,0)),e>=3&&t.add(re(new sn(.017),$n(e),0,-o/2-.045,0)),e>=4)for(let h of[-1,1]){let d=re(cn(.018,.09+(e-4)*.025,5),wn(e),h*a/2,o/2+.045,0);d.rotation.z=-h*.55,t.add(d);let p=re(cn(.014,.06,5),xn(e),h*a*.3,o/2-.03,0);p.rotation.z=Math.PI+h*.5,t.add(p)}if(e>=5)for(let h=0;h<3;h++)for(let d of[-1,1]){let p=re(cn(.012,r*.9,4),xn(e),d*r*.62,o/2+s*(.25+h*.22),0);p.rotation.z=-d*1.2,p.scale.z=.4,t.add(p)}};switch(i){case"epee":n(.78,.06,.22,.16);break;case"dague":n(.3,.045,.12,.11);break;case"espadon":n(1.15,.11,.36,.3);break;case"lamecle":n(.9,.055,.14,.14),t.add(re(Mt(.09,.05,.014),xn(e),.07,.86,0)),t.add(re(Mt(.07,.05,.014),xn(e),.06,.74,0));{let s=re(new Mn(.06,.014,8,20),xn(e),0,-.14,0);t.add(s)}break;case"masse":t.add(re(Bt(.018,.02,.7,8),Ks(),0,.25,0)),t.add(re(Ct(.085,12,8),wn(e),0,.64,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=re(cn(.025,.07,5),xn(e),Math.sin(r)*.1,.64,Math.cos(r)*.1);a.rotation.set(Math.PI/2*Math.cos(r),0,-Math.PI/2*Math.sin(r)),t.add(a)}e>=2&&t.add(re(new sn(.03),$n(e),0,.745,0));break;case"guisarme":t.add(re(Bt(.017,.017,1.9,8),Ks(),0,.5,0));{let s=re(cn(.03,.26,4),wn(e),0,1.57,0);s.scale.z=.3,t.add(s);let r=re(Bt(.2,.2,.014,16,!1),wn(e),.1,1.28,0);r.rotation.x=Math.PI/2,r.scale.set(1,1,1.25),t.add(r);let a=re(cn(.04,.16,4),xn(e),-.08,1.3,0);a.rotation.z=Math.PI/2,a.scale.z=.3,t.add(a),e>=2&&t.add(re(new sn(.024),$n(e),.02,1.28,.02))}break;case"baton":t.add(re(Bt(.016,.02,1.6,8),Ks(),0,.5,0));{let s=re(new Mn(.085,.014,8,20,Math.PI*1.4),wn(e),0,1.37,0);s.rotation.z=Math.PI*.8,t.add(s);let r=re(Ct(.055,14,10),$n(e,1.5),0,1.38,0);t.add(r);let a=new In(bn[e],.5,2.5);a.position.set(0,1.38,0),t.add(a)}break;case"arc":{let s=re(new Mn(.62,.016,8,28,Math.PI*.8),Ks(),-.5,.2,0);s.rotation.z=-Math.PI*.4,t.add(s);let r=.2+Math.sin(Math.PI*.4)*.62,a=-.5+Math.cos(Math.PI*.4)*.62;t.add(re(Bt(.003,.003,(r-.2)*2,4),Et(15658734,.5),a,.2,0)),t.add(re(Bt(.022,.022,.14,8),fo(),.12,.2,0)),e>=2&&t.add(re(new sn(.02),$n(e),.13,.3,0))}break;case"orbe":{t.add(re(Ct(.09,18,14),Et(bn[e],.1,.1,{emissive:bn[e],emissiveIntensity:1.1})));let s=re(new Mn(.13,.008,6,28),wn(e));if(s.rotation.x=1.2,t.add(s),e>=3){let a=re(new Mn(.15,.006,6,28),wn(e));a.rotation.set(.4,.8,0),t.add(a)}let r=new In(bn[e],.6,3);t.add(r)}break;case"grimoire":t.add(re(Mt(.2,.27,.06),fo())),t.add(re(Mt(.18,.25,.064),Et(15327174,.9),.012,0,0)),t.add(re(Mt(.205,.275,.05),Et(ho[e][1],.6,.3),-.004,0,0)),t.add(re(new sn(.03),$n(e),0,0,.034));break;case"pistolet":t.add(re(Mt(.035,.26,.03),wn(e),0,.16,0)),t.add(re(Bt(.028,.028,.06,10),xn(e),0,.07,0));{let s=re(Mt(.034,.13,.04),Ks(),0,-.02,-.03);s.rotation.x=-.35,t.add(s)}break;case"repercuteur":{let s=re(Bt(.075,.075,.9,14),wn(e),0,.35,0);t.add(s),t.add(re(Bt(.09,.09,.06,14),xn(e),0,.78,0)),t.add(re(Bt(.085,.085,.07,14),xn(e),0,.2,0)),t.add(re(Ct(.055,12,8),$n(e,1.6),0,.8,0)),t.add(re(Mt(.04,.16,.05),fo(),0,.05,-.1))}break;case"harpe":{let s=e>=4?wn(e):Et(14264636,.3,.85);t.add(re(Bt(.02,.024,.95,8),s,.2,.42,0));let r=re(new Mn(.3,.02,8,18,Math.PI*.6),s,-.04,.72,0);r.rotation.z=Math.PI*.28,t.add(r);let a=re(Mt(.05,.92,.07),Ks(),-.1,.36,0);a.rotation.z=-.52,t.add(a);for(let o=0;o<7;o++){let l=-.2+o*.055,c=.28+o*.09;t.add(re(Bt(.0022,.0022,c,4),Et(o%3?15985878:bn[e],.4,0,{emissive:o%3?0:bn[e],emissiveIntensity:.8}),l,.84-c/2-Math.abs(3-o)*.012,0))}}break;case"anneaux":{let s=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([r,a],o)=>{t.add(re(new Mn(.14,.018,8,24),wn(e),r,a,o*.02)),t.add(re(Ct(.05,10,8),Et(s[o],.3,0,{emissive:s[o],emissiveIntensity:.6}),r,a,o*.02))})}break}return t.userData.tick=Iu[i]?er(t,e,Iu[i]):null,t}function Uu(i=0){Qs={};let e=new ni;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new Gs(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=Xt(0,0,0,re(t,wn(i)));if(n.add(re(Mt(.05,.66,.012),xn(i),0,-.04,.05)),n.add(re(Mt(.44,.05,.012),xn(i),0,.06,.05)),n.add(re(Ct(.06,12,8),xn(i),0,.06,.05)),i>=2&&n.add(re(new sn(.034),$n(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(re(new sn(.022),$n(i),s,r,.05));return n.userData.tick=er(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function Vi(i){Qs={};let e=new vt,t=Et(i.b,.85),n=Et(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,l=Xt(0,r,0);e.add(l);let c=re(jt([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);c.rotation.x=Math.PI/2,l.add(c);let h=Xt(0,a*.35,s*.42);h.rotation.x=i.neckA??.9,l.add(h),h.add(re(Gi(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let d=Xt(0,i.neck,0);d.rotation.x=-(i.neckA??.9)+(i.headA??.25),h.add(d);let p=i.hs||a*.55,u=re(Ct(p,12,10),t);if(u.scale.set(.9,.95,1.1),d.add(u),i.beak){let M=re(cn(p*.42,p*1.3,8),Et(15116602,.5),0,-p*.15,p*1.25);M.rotation.x=Math.PI/2+.25,d.add(M)}else{let M=re(jt([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Et(i.sn,.85):t,0,-p*.2,p*.5);M.rotation.x=Math.PI/2,d.add(M),d.add(re(Ct(p*.14,6,5),Et(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let M of[-1,1]){if(d.add(re(Ct(p*.13,8,6),Et(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),M*p*.72,p*.2,p*.55)),i.ear==="point"){let v=re(cn(p*.3,p*.75,5),t,M*p*.5,p*.95,-p*.05);v.rotation.z=-M*.25,d.add(v)}else if(i.ear==="round")d.add(re(Ct(p*.28,8,6),t,M*p*.65,p*.75,0));else if(i.ear==="long"){let v=re(Gi(p*1.25,p*.34,p*.14,8,.45),t,M*p*.5,p*.6,-p*.1);v.rotation.set(Math.PI+.2,0,M*.35),d.add(v)}if(i.horns){let v=re(cn(p*.2,p*1.3,6),Et(i.horns,.5),M*p*.5,p*.9,-p*.5);v.rotation.x=-1,v.rotation.z=-M*.2,d.add(v)}}if(i.mane){let M=re(Mt(a*.16,i.neck*1.1,a*.5),Et(i.mane,.9),0,i.neck*.5,-a*.62);h.add(M)}let g=[];for(let[M,v]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=Xt(M*a*.62,-a*.3,v*s*.33);l.add(S);let D=o*.52,b=o*.5;S.add(re(Gi(D,i.lw*1.35,i.lw,8),t));let P=Xt(0,-D,0);S.add(P),P.add(re(Gi(b,i.lw*.9,i.lw*.7,8),v>0||!i.d2?t:n));let k=re(Ct(i.lw*1.05,8,6),Et(i.hoof||1381658,.6),0,-b-i.lw*.2,i.paw?i.lw*.5:0);k.scale.set(1,.6,i.paw?1.5:1),P.add(k),g.push({hip:S,knee:P,ph:(M*v>0?0:Math.PI)+(v<0?.6:0)})}let _=Xt(0,a*.35,-s*.48);if(l.add(_),i.tail==="bush"){let M=re(Gi(s*.4,a*.3,a*.14,8),t);M.rotation.x=1.9,_.add(M)}else if(i.tail==="hair"){let M=re(Gi(r*.55,a*.16,a*.26,8),Et(i.mane||i.d,.9));M.rotation.x=.3,_.add(M)}else if(i.tail==="long"){let M=_;for(let S=0;S<6;S++){let D=Xt(0,S?-s*.16:0,0);D.rotation.x=S?-.2:1.85,D.add(re(Gi(s*.17,a*(.42-S*.06),a*(.36-S*.06),8),t)),M.add(D),M=D}let v=re(cn(a*.2,a*.5,4),n,0,-s*.2,0);v.rotation.x=Math.PI,M.add(v),e.userData.tail=_}else{let M=re(Ct(a*.22,8,6),t);_.add(M)}let m=[];if(i.wings)for(let M of[-1,1]){let v=Xt(M*a*.7,a*.75,s*.12);l.add(v);let S=new ni,D=i.wings;S.moveTo(0,0),S.quadraticCurveTo(D*.5,D*.5,D,D*.28),S.lineTo(D*.82,0),S.lineTo(D*.72,-D*.22),S.lineTo(D*.52,-D*.08),S.lineTo(D*.42,-D*.3),S.lineTo(D*.22,-D*.14),S.lineTo(D*.12,-D*.3),S.closePath();let b=re(new Pr(S),Et(i.wd||i.d,.8,0,{side:Vt,emissive:i.wd||i.d,emissiveIntensity:.28}));b.scale.x=M,b.rotation.x=1.15,b.castShadow=!1,v.add(b),m.push({w:v,s:M})}(i.extra||(()=>{}))(e,l,d,{body:t,dark:n});let f=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(M,v){f+=M*(3+v*5)*(v>.02?1:0);let S=v>.02?.35+Math.min(1,v)*.3:0;for(let D of g){let b=Math.sin(f+D.ph);D.hip.rotation.x=b*S,D.knee.rotation.x=Math.max(0,Math.cos(f+D.ph))*S*1.3}l.position.y=r+(v>.02?Math.abs(Math.sin(f*2))*.03*r:Math.sin(performance.now()/700)*.005),h.rotation.x=(i.neckA??.9)+Math.sin(f*2)*.04;for(let{w:D,s:b}of m)D.rotation.z=b*(.25+Math.sin(performance.now()/(v>.02?160:600))*(v>.02?.45:.1))}}}function Ex(i){Qs={};let e=new vt,t=Et(921107,.35,.6),n=Et(13225430,.2,.95),s=Et(526346,.9),r=[];for(let d of[-.72,.78]){let p=Xt(0,.34,d),u=re(new Mn(.27,.085,10,24),s);u.rotation.y=Math.PI/2,p.add(u);let g=re(Bt(.12,.12,.08,12),n);g.rotation.z=Math.PI/2,p.add(g);for(let _=0;_<5;_++){let m=re(Mt(.02,.5,.03),n);m.rotation.x=_/5*Math.PI,p.add(m)}e.add(p),r.push(p)}let a=re(Ct(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(re(Mt(.3,.3,.55),Et(2763312,.4,.8),0,.5,.05));let o=re(Mt(.3,.1,.62),Et(1708560,.8),0,.8,-.38);e.add(o);let l=re(Bt(.025,.025,.8,8),n,0,.7,.66);l.rotation.x=-.42,e.add(l),e.add(re(Mt(.66,.03,.03),n,0,1.06,.5));let c=re(Ct(.2,12,8),t,0,.95,.62);c.scale.set(.9,.9,.7),e.add(c),e.add(re(Ct(.075,10,8),Et(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(re(Mt(.31,.02,.5),Et(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let d of[-1,1]){let p=re(Bt(.035,.045,.7,8),n,d*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let h=new io(16773824,2.2,22,.5,.6);return h.position.set(0,.93,.8),h.target.position.set(0,.2,8),e.add(h,h.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(d,p){for(let u of r)u.rotation.x+=d*p*22;e.position.y=0}}}var ii={m0:{speed:1.7,make:()=>Vi({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>Vi({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=re(Mt(.5,.08,.6),Et(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>Vi({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=re(jt([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Et(ho[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>Ex(bn[3])},m4:{speed:2.5,make:()=>Vi({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=re(Ct(.2,10,8),Et(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>Vi({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=re(cn(.06,.2,4),Et(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>Vi({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=re(jt([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Et(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new In(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}},Nu={wolf:()=>Vi({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>Vi({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=ii.m5.make();return i.group.scale.setScalar(.85),i}};var pc={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},go=["neutre","ninja","souverain","digne","humble","timide"],xo=["neutre","ninja","levitation"],zu=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],fc={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},cs=.252;function Tx(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[cs,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function Fr(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:Nt(s.rx,r.rx,n),rz:Nt(s.rz,r.rz,n),rb:Nt(s.rb??s.rz,r.rb??r.rz,n),z:Nt(s.z,r.z,n)}}return i[i.length-1]}var po=(i,e,t,n=1)=>{let s=Fr(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/cs)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function mo(i,e,t){let n=Fr(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var vi=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Fu(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?Nt(.184,.128,vi((i-.8)/.5)):i<1.8?Nt(.128,.088,vi((i-1.3)/.5)):Nt(.088,.04,vi((i-1.8)/.7))}function Bu(i,e,t,n=28,s=6){let r=[],a=[],o=cs-.006,l=s+1;for(let d=0;d<n;d++){let p=-Math.PI+d/n*2*Math.PI,u=e(Math.abs(p));for(let g=0;g<=s;g++)r.push(...po(i,p,Nt(u,o,Math.sin(g/s*Math.PI/2)),t))}for(let d=0;d<n;d++)for(let p=0;p<s;p++){let u=d*l+p,g=(d+1)%n*l+p,_=u+1,m=g+1;a.push(u,g,_,g,m,_)}let c=r.length/3;r.push(0,cs+(t-1)*.11,0);for(let d=0;d<n;d++)a.push(c,d*l+s,(d+1)%n*l+s);let h=new Rt;return h.setAttribute("position",new ht(r,3)),h.setIndex(a),h.computeVertexNormals(),h}function yi(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let l=a;l>=0;l--){let c=l/a,h=c<.22?Nt(.72,1,c/.22):Math.max(.03,1-Math.pow((c-.22)/.78,1.5));o.push({y:-i*c,x:s*i*c*c,z:n*i*c*c,rx:e/2*h,rz:t/2*h})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),jt(o,r)}var Ln=(i,e=0,t="#000000")=>"#"+new $e(i).lerp(new $e(t),e).getHexString();function Ou(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",l=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let c=(z,J)=>Math.asin(Math.max(-.99,Math.min(.99,z/Fr(e,J).rx))),h=(z,J)=>(.5+c(z,J)/l)*n,d=z=>(1-z/cs)*s,p=s/cs,u=(z,J)=>n/l/(Fr(e,J).rx*Math.cos(c(z,J))),g=(z,J,j,O)=>{a.save(),a.translate(h(z,J),d(J)),a.scale(j*u(z,J),-p),O(),a.restore()};if(i.hair){a.fillStyle=Ln(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let z=0;z<n;z+=2){let J=Math.abs((z/n-.5)*l);a.fillRect(z,0,2,d(Fu(J)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let _=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(_){let z=_==="pleine",J=(.5-1.75/l)*n,j=(.5+1.75/l)*n;if(z){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(J,d(.125));for(let O=0;O<=40;O++){let w=O/40,q=-1.75+w*3.5,te=Math.abs(q)>1.05?Nt(.066,.125,vi((Math.abs(q)-1.05)/.6)):.05+.016*vi(Math.abs(q)/1.05);a.lineTo((.5+q/l)*n,d(te))}a.lineTo(j,s),a.lineTo(J,s),a.closePath(),a.fill(),g(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let O=a.createLinearGradient(0,s,0,d(.066));O.addColorStop(0,Ln(i.hairColor)),O.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=O,a.fillRect(J,d(.066),j-J,s-d(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,g(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}g(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=z?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let m=o?.13:.05;for(let z of[-1,1])g(z*.047,.071,z,()=>{let J=a.createRadialGradient(0,0,0,0,0,.02);J.addColorStop(0,`rgba(238,104,104,${m})`),J.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=J,a.fillRect(-.02,-.02,.04,.04)});g(0,.064,1,()=>{let z=i.nose;a.strokeStyle=Ln(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*z,-.0052*z),a.quadraticCurveTo(0,-.0072*z,.0042*z,-.0052*z),a.stroke(),a.globalAlpha=1}),g(0,.037,1,()=>{let z=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-z*.78,0),a.quadraticCurveTo(0,-.0082,z*.78,0),a.quadraticCurveTo(0,-.0016,-z*.78,0),a.fill(),a.beginPath(),a.moveTo(-z*.85,0),a.quadraticCurveTo(-z*.3,.0034,0,.0016),a.quadraticCurveTo(z*.3,.0034,z*.85,0),a.quadraticCurveTo(0,-.0012,-z*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=Ln(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-z,9e-4),a.quadraticCurveTo(0,-.0026,z,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-z*.36,-.006),a.quadraticCurveTo(0,-.0074,z*.36,-.006),a.stroke(),a.globalAlpha=1)});let f=i.eyes*(o?1.06:1),M=.0202*f,v=(o?.0176:.0136)*f,S=(o?.0114:.0096)*f,D=.1,b=.0398*i.eyeGap+(f-1)*.004,P=Ln(i.hairColor,.72,"#120c10"),k=i.eyeColor;for(let z of[-1,1])g(z*b,D,z,()=>{if(t.closed){if(a.strokeStyle=P,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-M,.001),a.quadraticCurveTo(0,-S*.95,M*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let ie of[.45,.75,1])a.beginPath(),a.moveTo(M*ie,-S*.5*(1.1-ie)-4e-4),a.lineTo(M*(ie+.14),-S*.5*(1.1-ie)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-M,-.0012),a.bezierCurveTo(-M*.6,v*1.2,M*.4,v*1.32,M,.0032),a.bezierCurveTo(M*.62,-S*1.15,-M*.45,-S*1.2,-M,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-M*1.2,-S*1.6,M*2.4,(v+S)*1.8);let J=a.createLinearGradient(0,v*1.05,0,v*.15);J.addColorStop(0,"rgba(112,122,168,.8)"),J.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=J,a.fillRect(-M*1.2,0,M*2.4,v*1.5);let j=-M*.05,O=M*.61,w=Math.max(v,S)*1.14,q=(v-S)*.3,te=a.createLinearGradient(0,q+w,0,q-w);te.addColorStop(0,Ln(k,.74)),te.addColorStop(.48,Ln(k,.12)),te.addColorStop(1,Ln(k,.42,"#ffffff")),a.fillStyle=te,a.beginPath(),a.ellipse(j,q,O,w,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=Ln(k,.78),a.stroke(),a.fillStyle=Ln(k,.9),a.beginPath(),a.ellipse(j,q+w*.1,O*.42,w*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=Ln(k,.62,"#ffffff"),a.beginPath(),a.ellipse(j,q-w*.58,O*.6,w*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(j-z*O*.36,q+w*.42,O*.3,w*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(j+z*O*.42,q-w*.4,O*.14,w*.11,0,0,7),a.fill(),a.restore();let V=o?.0037:.0028;if(a.fillStyle=P,a.beginPath(),a.moveTo(-M*1.03,-.0016),a.bezierCurveTo(-M*.6,v*1.2,M*.4,v*1.32,M,.0032),a.lineTo(M*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(M*.55,v*1.32+V*1.7,-M*.5,v*1.2+V*1.2,-M*1.06,3e-4),a.closePath(),a.fill(),o)for(let[ie,pe,ye,Re]of[[M*.96,.0062,M*1.34,.012],[M*.72,v*.95,M*1.02,v*1.62]])a.beginPath(),a.moveTo(ie-.0024,pe),a.lineTo(ye,Re),a.lineTo(ie+.0012,pe-.0018),a.closePath(),a.fill();a.strokeStyle=P,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(M*.98,.0012),a.bezierCurveTo(M*.78,-S*.9,M*.36,-S*1.14,-M*.08,-S*1.12),a.stroke(),a.strokeStyle=Ln(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-M*.55,v*1.16+V+.0034),a.quadraticCurveTo(M*.1,v*1.36+V+.0042,M*.82,v*.95+V+.004),a.stroke(),a.globalAlpha=1});let E=Ln(i.hairColor,.3);for(let z of[-1,1])g(z*b,D+v*1.32+(o?.0128:.0108),z,()=>{let J=o?.0027:.0046,j=i.brows,O=-j*.0055,w=j*.0034+8e-4,q=O*.3+w*.7+.0034;a.fillStyle=E,a.beginPath(),a.moveTo(-M*1.05,O-J*.5),a.quadraticCurveTo(0,q+J*.15,M*1.22,w),a.quadraticCurveTo(0,q+J*.95+8e-4,-M*1.05,O+J*.5),a.closePath(),a.fill()});let R=new Pn(r);return R.colorSpace=zt,R.anisotropy=4,R}function Ax(i,e,t){let n=i.gender==="f",s=new vt,r=Tx(i.jaw*(n?.92:1.05)),a=Jn(r,3),o=e.shadow?t.skin:dc(16777215,{map:Ou(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let l=Su(a,32);{let u=l.attributes.position,g=l.attributes.normal,_=new G,m=new G;for(let f=0;f<u.count;f++)_.set(u.getX(f),u.getY(f)-.118,u.getZ(f)+.012).normalize(),m.set(g.getX(f),g.getY(f),g.getZ(f)).lerp(_,.8).normalize(),g.setXYZ(f,m.x,m.y,m.z)}let c=re(l,o);s.add(c);let h=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let u=o.map,g=Ou(i,r,{closed:!0});h=_=>{o.map=_?g:u},s.userData.dispose=()=>{u.dispose(),g.dispose()}}for(let u of[-1,1]){let g=re(Ct(.024,10,8),t.skin,u*.0905,.098,-.006);g.scale.set(.42,1,.72),g.rotation.y=u*.25,s.add(g)}let d=re(jt([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,mo(r,0,.068)-.0035);if(d.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),d.userData.noBake=!0,d.castShadow=!1,s.add(d),!n&&i.beard==="pleine"){let u=re(jt(Jn([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(u)}let p=Rx(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=h,s}function Rx(i,e,t,n){let s=new vt,r=i.hair,a=new vt,o=new vt,l=new vt;if(a.name="top",o.name="front",l.name="back",s.add(a,o,l),r==="rase")return s;let c=(f,M,v,S,D,b=0,P=1.06)=>{let k=po(n,v,S,P),E=re(M,e,k[0],k[1],k[2]);return E.rotation.order="YXZ",E.rotation.set(-D,v,b),f.add(E),E},h=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(re(Bu(n,Fu,h),e));let d=(f,M=.021,v=.36)=>f.forEach(([S,D,b,P,k])=>c(o,yi(D,b,M,-.1,k||0),S,.211-Math.abs(S)*.016,v,P,h+.012)),p=(f,M=.04)=>{for(let v of[-1,1])c(o,yi(f,M,.022,-.05,0),v*1.08,.172,.1,-v*.06,h),c(o,yi(f*.7,M*.8,.02,-.05,0),v*1.32,.16,.1,v*.06,h)},u=(f,M,v,S=1.12,D=-.45,b=.236,P=.2)=>{for(let k=0;k<f;k++)c(a,yi(M*(.9+k*7%5*.05),v,.03,D),P+k/f*6.2832,b,S,k%2?.14:-.12,h)},g=(f,M,v,S,D,b,P,k,E,R=.026)=>{for(let z=0;z<M;z++){let J=Nt(v,S,M>1?z/(M-1):.5);c(f,yi(b*(.92+z*5%4*.05),P,R,E),J,D,k,z%2?.1:-.1,h)}},_=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],m=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":d(_),p(t?.11:.085),u(9,.105,.062),g(a,9,1.5,4.78,.2,.1,.06,.5,-.3),g(l,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":d([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[f,M,v,S,D]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])c(a,yi(S,.074,.05,.14),f,M,v,D,.99);g(l,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":d(_),p(.19,.045),u(9,.12,.066),g(l,9,1.45,4.83,.17,.25,.066,.13,.12,.03),g(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":d(t?m:_),p(.34,.044),u(9,.13,.068),g(l,9,1.4,4.88,.17,.56,.074,.1,.03,.032),g(l,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":d(_),p(t?.15:.1),u(8,.1,.062,1.2,-.5);{let f=re(Ct(.026,10,8),e,...po(n,Math.PI,.2,1.1));a.add(f);for(let[M,v,S]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])c(a,yi(v,.066,.046,-.3,0),Math.PI,.2,S,M,1.14)}break;case"chignon":d(t?m:_),p(t?.13:.08),u(8,.095,.06,1.2,-.5);{let f=po(n,Math.PI,.185,1.3),M=re(Ct(.05,14,10),e,f[0],f[1],f[2]);M.scale.set(1,.92,.9),a.add(M);for(let v=0;v<5;v++){let S=re(yi(.06,.035,.026,.3),e,f[0],f[1],f[2]-.01);S.rotation.set(-1.9,0,v*1.257),a.add(S)}}break;case"boucles":d([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[f,M,v,S]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let D=0;D<M;D++){let b=f<.19?Nt(1.15,5.13,D/(M-1)):D/M*6.2832+f*9;f<.215&&Math.cos(b)>.5||c(f<.15?l:a,yi(v,.07,.052,.55,D%2?.25:-.25),b,f,S,D%2?.25:-.25,h)}p(t?.14:.09,.05);break}return s}function hs(i={}){let e=Object.assign({},pc,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,l=.5+s*.5,c=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},h=i.showArmor!==!1&&i.armor||{},d=(T,F)=>c.glow?{emissive:T,emissiveIntensity:F}:void 0,p={skin:dc(e.skin),hair:hn(e.hairColor)},u=p.skin,g=hn(c.c[0],d(c.c[0],.1)),_=hn(c.c[1],d(c.c[1],.1)),m=hn(c.c[2],d(c.c[2],.22)),f=hn(1907492),M=hn(1250072),v=hn(5922920),S=T=>T._dbl||(T._dbl=Object.assign(T.clone(),{side:Vt})),D=[],b={},P=T=>b["m"+T]||(b["m"+T]=js(T)),k=T=>b["d"+T]||(b["d"+T]=js(T,!0)),E=T=>b["g"+T]||(b["g"+T]=hn(bn[T],{emissive:bn[T],emissiveIntensity:.9})),R=T=>(T.userData.joint=!0,T),z=T=>(T.userData.keep=!0,T),J=.47*e.legs,j=.44*e.legs,O=J+j+.105,w=new vt,q=R(Xt(0,O,0));w.add(q);let te=R(Xt(0,0,0));q.add(te);let V={hips:q,spine:te},ie=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([T,F,Z,$,ae],Q)=>{let ce=Q===1||Q===2?e.hips:Q===3?e.waist:Q===4||Q===5?e.chest:1;return{y:T,rx:F*(Q>7?1:s)*ce,rz:Z*(Q>7?1:l)*(Q===4||Q===5?e.chest:Q===3?(1+e.waist)/2:1),rb:$*(Q>7?1:l)*(Q===4||Q===5?(1+e.chest)/2:1),z:ae}}),pe=Jn(ie,3),ye=T=>Fr(pe,T),Re=ie[3],se=ie[1],me=T=>{let F=ye(T);return F.z+F.rz},we=c.cut,Ye=we==="plate",Le=(n?.088:.082)*s*e.hips;te.add(re(jt(pe,24),we==="cape"?v:g));let Ve=n?.037:.046;te.add(re(Bt(Ve,Ve*1.1,.12,12),u,0,.555,-.006));let We=R(Xt(0,.57,.012)),Xe=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);We.scale.setScalar(Xe),te.add(We),V.head=We;let Ie=Ax(e,t,p);We.add(Ie);let W=(T,F)=>{let Z=T.attributes.position,$=T.index.array,ae=[];for(let Q=0;Q<$.length;Q+=3){let ce=$[Q],Ce=$[Q+1],Ge=$[Q+2];F((Z.getX(ce)+Z.getX(Ce)+Z.getX(Ge))/3,(Z.getY(ce)+Z.getY(Ce)+Z.getY(Ge))/3,(Z.getZ(ce)+Z.getZ(Ce)+Z.getZ(Ge))/3)&&ae.push(ce,Ce,Ge)}return T.setIndex(ae),T},Ae=(T,F,Z,$=24)=>{let ae=Jn(T,3),Q=jt(ae,$,!1,!1);if(Z){let ce=Q.index.array,Ce=[];for(let Ge=0;Ge<ce.length/6;Ge++){let ot=Math.floor(Ge/$),Ht=(Ge%$+.5)/$*6.2832;if(Z(Ht>Math.PI?Ht-6.2832:Ht,(ae[ot].y+ae[ot+1].y)/2))for(let xe=0;xe<6;xe++)Ce.push(ce[Ge*6+xe])}Q.setIndex(Ce)}return re(Q,S(F))},fe=(T,F,Z,$,ae=.168)=>{F=Math.max(F,(Le+.098*o)/se.rx),te.add(Ae([{y:T,rx:se.rx*F,rz:se.rz*F*1.05,rb:se.rb*F*1.05},{y:Nt(T,-.03,.55),rx:se.rx*Nt(1.09,F,.6),rz:se.rz*Nt(1.12,F*1.05,.6),rb:se.rb*Nt(1.12,F*1.05,.6)},{y:-.03,rx:Math.max(se.rx*1.075,Le+.1*o),rz:se.rz*1.13,rb:se.rb*1.13},{y:ae,rx:Re.rx*1.06,rz:Re.rz*1.1,rb:Re.rb*1.1}],Z,$))},be=(T=.27)=>(F,Z)=>!(Math.abs(F)<T&&Z<.1),he=(T,F,Z,$=1.07)=>{let ae=ye(T),Q=ye(F);te.add(re(jt([{y:T,rx:ae.rx*$,rz:ae.rz*$,rb:ae.rb*$,z:ae.z},{y:F,rx:Q.rx*$,rz:Q.rz*$,rb:Q.rb*$,z:Q.z}],24),Z))},ze=()=>{he(.126,.174,M,1.14),te.add(re(Mt(.052,.052,.02),m,0,.15,me(.15)*1.14+.004))},Se=(T,F,Z,$,ae,Q=1.014,ce=10)=>{let Ce=[],Ge=[];for(let xe=0;xe<=ce;xe++){let Te=xe/ce,yt=Nt(T,F,Te),rt=Nt(Z,$,Te),Ut=ye(yt),jn=Ut.z+Ut.rz*Math.sqrt(Math.max(.05,1-(rt/Ut.rx)**2))*Q+.002;if(Ce.push(-rt,yt,jn,rt,yt,jn),xe<ce){let Kt=xe*2;Ge.push(Kt,Kt+1,Kt+2,Kt+1,Kt+3,Kt+2)}}let ot=new Rt;ot.setAttribute("position",new ht(Ce,3)),ot.setIndex(Ge),ot.computeVertexNormals();let Ht=re(ot,S(ae));Ht.castShadow=!1,te.add(Ht)},I=(T,F,Z,$=1)=>te.add(Ae([{y:.488,rx:.086*$,rz:.07*$,rb:.074*$,z:-.004},{y:.488+T,rx:.064*$,rz:.058*$,rb:.062*$,z:-.006}],F,Z?ae=>Math.abs(ae)>Z:null,20)),A=(n?.168:.208)*a,ne=.447,ue=(n?.8:1)*o,_e=.275*e.arms,ve=.25*e.arms,qe=we==="robe",De=we==="cape"?v:g,ke=we==="apron"?u:De,je=()=>jt(Jn([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let T of[-1,1]){let F=T<0?"M":"O",Z=R(Xt(T*A,ne,0));te.add(Z),Z.add(re(xi(_e,[[0,.046*ue],[.16,.051*ue],[.5,.043*ue],[.85,.037*ue],[1,.035*ue]],12),De));let $=R(Xt(0,-_e,0));if(Z.add($),t.oneArm&&T===-1)$.add(re(Ct(.04*ue,8,6),De));else{$.add(re(xi(ve,qe?[[0,.042*ue],[.5,.06*ue],[1,.082*ue,0,.8]]:[[0,.036*ue],[.22,.041*ue],[.6,.034*ue],[1,.026*ue]],12,qe?.15:.55),ke));let Q=n?.88:1,ce=re(je(),we==="plate"?_:u,0,-ve,0);ce.scale.setScalar(Q),$.add(ce);let Ce=re(xi(.045,[[0,.0095],[1,.0065]],8),we==="plate"?_:u,0,-ve-.022*Q,.028*Q);Ce.rotation.x=-.75,Ce.scale.setScalar(Q),$.add(Ce),we!=="apron"&&!qe&&$.add(re(Bt(.031*ue,.034*ue,.034,12),we==="cape"?_:m,0,-ve+.03,0)),V["hand"+F]=z(Xt(0,-ve-.058*Q,.004)),$.add(V["hand"+F])}V["arm"+F]=Z,V["elbow"+F]=$}V.armL=V.armM,V.armR=V.armO,V.elbowL=V.elbowM,V.elbowR=V.elbowO;let it=Le,de=o,tt=we==="track"||we==="suit"||we==="tail"||we==="plate"?g:_,st=()=>{let T=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([Z,$,ae])=>({y:Z,rx:$,rz:ae,z:.036-ae})),F=jt(Jn(T,2),12);return F.rotateX(Math.PI/2),F};for(let T of[-1,1]){let F=T<0?"M":"O",Z=R(Xt(T*it,-.02,0));q.add(Z),Z.add(re(xi(J,n?[[0,.09*de],[.3,.09*de],[.7,.066*de],[1,.052*de]]:[[0,.086*de],[.3,.088*de],[.7,.069*de],[1,.056*de]],14),tt));let $=R(Xt(0,-J,0));Z.add($);let ae=n?.92:1;$.add(re(xi(j,[[0,.054*de*ae],[.25,.06*de*ae,-.008],[.7,.043*de*ae],[1,.036*de*ae]],12),tt)),$.add(re(xi(j*.56,[[0,.054*de*ae*1.16],[.4,.047*de*ae*1.14],[1,.04*de*ae*1.12]],12,.2),f,0,-j*.44,-.002)),$.add(re(Bt(.062*de*ae,.058*de*ae,.03,12),we==="plate"?m:f,0,-j*.44,-.004));let Q=re(st(),f,0,-j-.049,.004);if(Q.scale.setScalar(n?.9:1),$.add(Q),h.jambieres!=null){let ce=h.jambieres;$.add(re(xi(j*.8,[[0,.07*de],[.3,.074*de,-.004],[1,.052*de]],12,.15),P(ce),0,-j*.1,.004));let Ce=re(Ct(.062*de,10,8),k(ce),0,0,.03);if(Ce.scale.set(1,1.2,.8),$.add(Ce),ce>=2&&$.add(re(new sn(.016),E(ce),0,0,.082*de)),ce>=5){let ot=er($,ce,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});ot&&D.push(ot)}let Ge=re(st(),k(ce),0,-j-.044,.008);Ge.scale.set(1.12,1.1,1.06),$.add(Ge)}V["leg"+F]=Z,V["knee"+F]=$}V.legL=V.legM,V.legR=V.legO,V.kneeL=V.kneeM,V.kneeR=V.kneeO;let Qe=!1,Ze=()=>{for(let T of[-1,1])V[T<0?"armM":"armO"].add(re(Mt(.008,_e*.86,.022),m,T*.05*ue,-_e*.5,0)),V[T<0?"legM":"legO"].add(re(Mt(.008,J*.9,.024),m,T*.079*de,-J*.5,0)),V[T<0?"kneeM":"kneeO"].add(re(Mt(.008,j*.42,.02),m,T*.055*de,-j*.2,0))};switch(we){case"uniform":fe(-.125,1.1,g),ze(),Se(.175,.488,.009,.009,m),I(.05,m,.17);for(let T of[-1,1]){let F=re(Mt(.085,.014,.05),m,T*A*.86,.478,0);F.rotation.z=-T*.32,te.add(F)}break;case"track":Se(.02,.5,.007,.007,m),I(.06,m,.17,1.04),he(-.045,-.015,_,1.03),Ze();break;case"apron":te.add(Ae([{y:-J*.92,rx:se.rx*1.24,rz:se.rz*1.3},{y:-.03,rx:se.rx*1.08,rz:se.rz*1.15},{y:.168,rx:Re.rx*1.06,rz:Re.rz*1.13}],m,T=>Math.abs(T)<1.25)),Se(.17,.43,.1,.075,m,1.03),ze(),I(.03,g,.35);break;case"coat":fe(-J*.94,n?1.5:1.32,g,be()),ze(),Se(.3,.5,.012,.045,m),I(.07,_,.45,1.16);break;case"blouse":fe(-J*.8,1.22,g,be(.14)),Se(.36,.5,.01,.04,_),I(.04,g,.4,1.1);{let T=re(Mt(.055,.05,.012),m,A*.42,.33,me(.33)*.96+.006);te.add(T),V.armM.add(re(Bt(.06*ue,.06*ue,.05,12),m,0,-.12,0))}break;case"robe":fe(-(O-.1),n?1.9:1.55,g),Qe=!0,he(.125,.2,m,1.085),Se(.2,.5,.01,.05,m),I(.045,m,.35,1.12);{let T=re(Mt(.05,.34,.012),m,0,-.03,se.rz*1.24);T.rotation.x=-.08,te.add(T)}break;case"suit":fe(-.12,1.07,g,be(.14)),Se(.24,.5,.006,.05,m),Se(.25,.48,.014,.012,_,1.03),I(.035,m,.35);break;case"cape":{fe(-.15,1.12,v),ze(),te.add(re(jt(Jn([{y:-O*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),g)),te.add(Ae([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],g));{let T=re(Ct(.075,12,8),g,0,.535,-.085);T.scale.set(1.25,.6,.8),te.add(T)}te.add(re(new sn(.024),E(2),0,.455,.12));break}case"plate":{for(let T of[-1,1]){let F=re(Ct(.098,12,8),g,T*A*1.02,ne+.036,0);F.scale.set(1.15,.72,1.1),te.add(F),V[T<0?"elbowM":"elbowO"].add(re(xi(ve*.7,[[0,.052*ue],[1,.04*ue]],12,.2),g,0,-.02,0))}te.add(re(new sn(.028),hn(c.c[2],{emissive:c.c[2],emissiveIntensity:.8}),0,.36,me(.36)+.012)),fe(-J*.5,1.22,m,be(.14)),ze(),I(.05,_,.17,1.1);break}case"tail":{Se(.2,.5,.03,.06,m),fe(-.1,1.05,g,T=>Math.abs(T)>.6);for(let T of[-1,1]){let F=re(Mt(.115,.44,.014),_,T*.064,-.22,-se.rb*1.12);F.rotation.x=.1,te.add(F)}for(let T of[-1,1]){let F=re(cn(.022,.05,4),_,T*.024,.497,me(.49)+.014);F.rotation.z=T*Math.PI/2,F.scale.z=.5,te.add(F)}I(.035,m,.35);break}}if(h.plastron!=null){let T=h.plastron,F=pe.filter(Z=>Z.y>=.175&&Z.y<=.492).map(Z=>({y:Z.y,rx:Z.rx*1.09,rz:Z.rz*1.14,rb:Z.rb*1.12,z:Z.z}));F.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),te.add(re(jt(F,24,!1,!1),S(P(T)))),he(.175,.2,k(T),1.16);for(let Z of[-1,1]){let $=re(Ct(.094,12,8),k(T),Z*A*1.04,ne+.042,0);$.scale.set(1.2+T*.03,.7,1.14),te.add($);let ae=re(Ct(.075,12,8),P(T),Z*A*1.12,ne-.02,0);if(ae.scale.set(1,.8,1.1),te.add(ae),T>=4){let Q=re(cn(.028,.11,6),P(T),Z*A*1.2,ne+.095,0);Q.rotation.z=-Z*.7,te.add(Q)}}if(Se(.2,.49,.012,.012,k(T),1.16),T>=2&&te.add(re(new sn(.03),E(T),0,.375,me(.375)*1.14+.016)),T>=4)for(let Z of[-1,1])te.add(re(new sn(.02),E(T),Z*A*1.04,ne+.1,.03));if(T>=3)for(let Z of[-1,1]){let $=er(te,T,{x:Z*A*1.06,y0:ne+.07,y1:ne+(T>=5?.2:.16),r:.05,mode:"lite"});$&&D.push($)}T>=6&&D.push(Lu(te,.4,-(ie[5].rb+.03)))}if(h.casque!=null){let T=h.casque,F=Ie.userData.rings,Z=S(P(T)),$=Q=>Q<.55?.138:Q<1?Nt(.138,.05,vi((Q-.55)/.3)):Q<2.2?.05:.035;We.add(re(Bu(F,$,1.13,32,7),Z)),We.add(re(Mt(.016,.07,.014),k(T),0,.118,mo(F,0,.12)*1.13+.006));{let Q=re(jt(Jn([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),k(T),0,.262,0);We.add(Q)}if(T>=2&&We.add(re(new sn(.015),E(T),0,.2,mo(F,0,.2)*1.13+.012)),T>=3){let Q=re(jt(Jn([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),hn(bn[T]),0,.285,0);We.add(Q)}if(T>=5)for(let Q of[-1,1]){let ce=re(cn(.024,.13,6),P(T),Q*.112,.215,-.02);ce.rotation.z=-Q*.9,We.add(ce)}if(T>=5){let Q=er(We,T,{y0:T>=6?.3:.27,y1:T>=6?.33:.38,r:T>=6?.1:.03,z:-.02,mode:T>=6?"halo":"lite"});Q&&D.push(Q)}let ae=Ie.getObjectByName("hair");if(ae){ae.remove(ae.getObjectByName("top"));let Q=ae.getObjectByName("front");Q.children.slice(0,Math.max(0,Q.children.length-4)).forEach(ce=>Q.remove(ce))}}let He=z(Xt(0,.3,-(ie[4].rb+.05)));te.add(He);let nt=i.main&&i.main.type,ct=i.off&&i.off.type,et=nt?fc[nt]||"1h":"fist",Be=[],ge=(T,F,Z)=>new Rn().setFromEuler(new Ni(T,F,Z));function Y(T,F,Z){let $=R(Du(T.type,T.r)),ae=T.type,Q={g:$,type:ae,hand:V[Z]},ce={parent:He,p:[0,0,0],q:ge(0,0,0),s:1},Ce={p:[0,0,0],q:ge(Math.PI/2,Math.PI/2,0),s:1};return ae==="orbe"?(ce.parent=te,ce.p=[F*.3,.52,.12],Q.orb=!0,V.orb=$):ae==="grimoire"?(ce.parent=te,ce.p=[F*(se.rx+.035),.02,.02],ce.q=ge(0,F*Math.PI/2,.1),Ce.p=[0,0,.05],Ce.q=ge(-1.2,Math.PI/2,0),Q.hand=V.handO||V.handM):ae==="pistolet"||ae==="dague"?(ce.parent=te,ce.p=[F*(se.rx+.04),.03,0],ce.q=ge(Math.PI+.25,0,0),ce.s=.9,ae==="pistolet"&&(Ce.q=ge(0,0,Math.PI),Ce.p=[0,.01,.03])):ae==="anneaux"?(ce.p=[0,.02,.01],ce.q=ge(Math.PI/2-.2,0,0),ce.s=.85,Ce.q=ge(Math.PI/2,0,0),Ce.p=[0,0,.12],Ce.s=.7):ae==="guisarme"||ae==="baton"?(ce.p=[-F*.12,-.62,0],ce.q=ge(0,0,F*.3),Ce.p=[0,0,-.1]):ae==="arc"?(ce.p=[F*.1,0,0],ce.q=ge(0,0,F*.25),Ce.q=new Rn().setFromRotationMatrix(new wt().makeBasis(new G(0,-1,0),new G(0,0,1),new G(-1,0,0))),Ce.p=[0,.12,-.2],Q.hand=V.handO||V.handM):ae==="harpe"?(ce.p=[0,-.45,-.03],ce.s=.85,Ce.q=ge(Math.PI/2,0,0),Ce.p=[.02,.06,-.42],Ce.s=.64,Q.hand=V.handO||V.handM):ae==="repercuteur"?(ce.p=[F*.17,.2,0],ce.q=ge(0,0,F*(Math.PI-.5)),Ce.q=ge(0,0,Math.PI),Ce.p=[0,.06,.1]):(ce.p=[F*.17,.2,0],ce.q=ge(0,0,F*(Math.PI-.5))),$.userData.tick&&D.push($.userData.tick),Q.S=ce,Q.H=Ce,Be.push(Q),Ue(Q,!1),Q}function Ue(T,F){let Z=F&&T.hand&&!T.orb?T.H:T.S;(F&&T.hand&&!T.orb?T.hand:T.S.parent).add(T.g),T.g.position.set(Z.p[0],Z.p[1],Z.p[2]),T.g.quaternion.copy(Z.q),T.g.scale.setScalar(Z.s)}nt&&Y(i.main,-1,"handM"),ct&&ct!=="bouclier"&&Y(i.off,1,"handO");let Pe=Be.length>1&&fc[ct]===fc[nt],Je=ct==="bouclier"?i.off.r:h.bouclier;if(Je!=null){let T=R(Uu(Je));T.position.set(.055,-.13,0),T.rotation.y=Math.PI/2,T.scale.setScalar(.8),V.elbowO.add(T),T.userData.tick&&D.push(T.userData.tick)}if(i.aura){let T=new $e(i.aura),F=new Oe(new qn(.42,.56,40),new At({color:T,transparent:!0,opacity:.55,side:Vt,blending:mn,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.y=.02,w.add(F),V.aura=F;let Z=new Oe(Bt(.5,.42,1.5,24,!0),new At({color:T,transparent:!0,opacity:.1,side:Vt,blending:mn,depthWrite:!1}));Z.position.y=.75,w.add(Z),V.auraCol=Z}w.scale.setScalar(e.height);let Ke=Au(w,!t.shadow&&!t.noInk);if(t.shadow){let T=typeof t.shadow=="string"?t.shadow:"#14141f",F=new no({color:T,transparent:!0,opacity:.8,emissive:new $e(T).multiplyScalar(.6)});w.traverse(ae=>{ae.isMesh&&ae.material&&!ae.material.transparent&&!(ae.material.emissiveIntensity>.4)&&(ae.material.map&&ae.material.userData.ownMap&&ae.material.map.dispose(),ae.material=F)});let Z=new At({color:t.eyes||"#bfe4ff"}),$=Ie.userData.rings;for(let ae of[-1,1]){let Q=new Oe(Ct(.012,8,6),Z);Q.position.set(ae*.037,.1,mo($,.037,.1)+.002),Q.scale.set(1.5,.7,.5),We.add(Q)}}w.traverse(T=>{T.isMesh&&(T.castShadow=!T.material.transparent&&!T.userData.ink&&T.userData.noBake!==!0)});let mt=(T,F)=>new At({color:T,transparent:!0,opacity:F,side:Vt,blending:mn,depthWrite:!1}),gt=[];{let T=new ln(.5,1,5).translate(0,-.5,0),F=mt(i.aura||"#7fd0ff",.6),Z=mt("#ffffff",.7),$=!0;for(let ae of[V.kneeM,V.kneeO])for(let Q of[-.02,.1]){let ce=new Oe(T,F),Ce=new Oe(T,Z);ce.castShadow=Ce.castShadow=!1,$||(ce.userData.sharedGeo=!0),Ce.userData.sharedGeo=!0,$=!1,Ce.scale.set(.5,.6,.5),ce.add(Ce),ce.position.set(0,-j-.08,Q),ce.visible=!1,ae.add(ce),gt.push(ce)}}let lt=new vt;lt.visible=!1,w.add(lt);{let T=i.aura||"#bfe8ff",F=new Oe(Bt(.52,.34,2.3,20,!0),mt(T,.16));F.position.y=1.15,F.castShadow=!1,lt.add(F);let Z=mt("#ffffff",.7),$=Mt(.012,.3,.012);for(let Q=0;Q<9;Q++){let ce=new Oe($,Z);ce.castShadow=!1,Q&&(ce.userData.sharedGeo=!0),lt.add(ce)}let ae=new Oe(new qn(.3,.62,32).rotateX(-Math.PI/2),mt(T,.5));ae.position.y=.03,ae.castShadow=!1,lt.add(ae)}let ft={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},_t=i.runPose||null,Lt=Math.random()*6,Ee={};V.armM.rotation.order=V.armO.rotation.order="XZY";let un=Math.random()*6,Tt=null,X=!1,ee=1.5+Math.random()*4,oe=0,x=go.includes(e.stance)?e.stance:"neutre",C=xo.includes(e.move)?e.move:"neutre",H=Je!=null,K=nt==="grimoire"||ct==="grimoire";function le(){switch(et){case"1h":case"rings":Ee.aMx=-.45,Ee.aMz=.2,Ee.eM=-1.15,Pe?(Ee.aOx=-.4,Ee.aOz=.2,Ee.eO=-1.05):H&&(Ee.aOx=-.6,Ee.aOz=-.1,Ee.eO=-1.45);break;case"2h":Ee.aMx=-.6,Ee.aMz=-.12,Ee.eM=-1.05,Ee.aOx=-.75,Ee.aOz=-.42,Ee.eO=-1.2,Ee.sY=-.22;break;case"staff":Ee.aMx=-.5,Ee.aMz=.12,Ee.eM=-1.35,H&&(Ee.aOx=-.6,Ee.aOz=-.1,Ee.eO=-1.45);break;case"bow":Ee.aOx=-.6,Ee.aOz=.12,Ee.eO=-.8;break;case"gun":Ee.aMx=-.5,Ee.eM=-1.3,Pe&&(Ee.aOx=-.5,Ee.eO=-1.3);break;case"cannon":Ee.aMx=-.4,Ee.aMz=-.05,Ee.eM=-1.25,Ee.aOx=-.85,Ee.aOz=-.5,Ee.eO=-.9;break;case"magic":Ee.aMx=-.5,Ee.aMz=.22,Ee.eM=-1.25,K&&(Ee.aOx=-.55,Ee.eO=-1.5);break;case"harp":Ee.aOx=-.75,Ee.aOz=-.18,Ee.eO=-1.6,Ee.aMx=-.5,Ee.eM=-1.3;break;default:Ee.aMx=-.5,Ee.eM=-1.75,Ee.aOx=-.5,Ee.eO=-1.75}}let y=T=>Object.assign(Ee,T),L=T=>{let F={};for(let Z in T){let $=Z==="sY"||Z==="aMy"||Z==="aOy",ae=Z.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");F[Z==="sY"?Z:ae]=$?-T[Z]:T[Z]}return F};function N(T){switch(x){case"ninja":return y({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return y({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return y({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return y({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return y({sX:.1,sY:.12+Math.sin(T*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let U={slash(T,F){let Z=T<.36,$=T<.66,ae=Pe&&F%2===1,Q=Pe?(F>>1)%3:F%3,ce=Q===0?Z?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:$?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:Q===1?Z?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:$?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:Z?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:$?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;ce&&y(ae?L(ce):ce)},heavy(T,F){let Z=T<.42,$=T<.72;F%2===0?Z?y({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):$&&y({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):Z?y({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):$&&y({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(T,F){if(T>.8)return;if(et==="cannon"){y({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),T>.3&&T<.5&&y({sX:-.16,aMx:-1.45});return}let Z=T>.3&&T<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};y(Pe&&F%2===1?L(Z):Z)},bow(T){T<.55?y({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):T<.82&&y({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(T){T<.4?y({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):T<.75&&y({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(T){T<.78&&y({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(T){T<.45?y({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(T/.45*Math.PI*.6)}):T<.82&&y({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(T){y({aOx:-.8,aOz:-.2,eO:-1.6}),T<.35?y({aMx:-1.25,aMz:.4,eM:-1.5}):T<.72&&y({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(T,F){let Z=T<.32?{aMx:.3,eM:-2.2,sY:-.4}:T<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;Z&&y(F%2?L(Z):Z)},spin(T){y({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(T){y({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(T){y({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(T){y({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(T){y({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:w,joints:V,height:(O+.57+cs*Xe)*e.height,seatDrop:O*e.height,cat:et,dual:Pe,inks:Ke,scale:e.height,get armed(){return X},get acting(){return Tt?Tt.name:null},get move(){return C},get stance(){return x},setArmed(T){if(T=!!T,T!==X){X=T;for(let F of Be)Ue(F,T)}},setStyle(T){T.stance&&go.includes(T.stance)&&(x=T.stance),T.move&&xo.includes(T.move)&&(C=T.move)},play(T,F=.5,Z=0,$=1){U[T]&&(Tt={name:T,t:0,dur:F,c:Z,turns:$})},hand(T,F){let Z=V[F?"handO":"handM"]||V.handO||V.handM;return Z?Z.getWorldPosition(T):w.getWorldPosition(T)},update(T,F={}){let Z=Math.min(3.2,F.speed||0),$=oe+=T,ae=Math.sin($*1.6),Q=C==="levitation"&&!F.riding&&!F.down,ce=Z>.02,Ce=C==="ninja"&&Z>.9&&!F.riding&&!F.down;un+=T*(4.6+Z*3.4)*(Ce?1.3:1)*(ce?1:0),y({aMx:ae*.02,aMy:0,aMz:.08,aOx:-ae*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:ae*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:ae*.003,rZ:0});let Ge=null,ot=!1,Ht=!1;if(F.riding)Ge=[-1.25,1.3,-1.25,1.3,F.wide||.45],y({sX:.06+ae*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),ot=!0;else if(F.down)Ge=[-1.48,1.5,.15,1.65,0],y({sX:.5,hdX:.45,dy:-(J-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(ce&&Q){let at=Math.min(1,Z/2),ut=Math.sin(Lt+=T*(2.6+at*1.6)),bt=Math.max(0,ut),qt=Math.max(0,-ut);Ge=[.1+bt*.6-qt*.28,.3+qt*.3+bt*.12,.1+qt*.6-bt*.28,.3+bt*.3+qt*.12,bt*.36,qt*.36],ot=!0,y({sX:.22+at*.26,sY:-ut*.16,rZ:-ut*.09,hdX:-.16-at*.2,aMx:-ut*.6+.1,aOx:ut*.6+.1,aMz:.22+qt*.25,aOz:.22+bt*.25,eM:-.3-qt*.4,eO:-.3-bt*.4})}else if(ce){let at=Math.max(0,Math.min(1,Z-.75)),ut=Ce?.72:(Qe?.3:.55)+Math.min(Z,1.4)*(Qe?.12:.3),bt=Math.sin(un),qt=(.7+at)*ut*1.5;Ge=[bt*ut,Math.max(0,-Math.cos(un))*qt,-bt*ut,Math.max(0,Math.cos(un))*qt,0],ot=!0,y(Ce?{sX:.8,hdX:-.58,aMx:.72+bt*.05,aOx:.72-bt*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:bt*.05,dy:-.1+Math.abs(Math.cos(un))*.03}:{aMx:-bt*ut*.8,aOx:bt*ut*.8,eM:-.25-at*.9-Math.max(0,-bt)*.4,eO:-.25-at*.9-Math.max(0,bt)*.4,sX:.04+at*.2,sY:bt*.07,dy:Math.abs(Math.cos(un))*.025*(1+at)})}else!X&&!Tt&&(Ge=N($),Ht=!0);if(Q&&(ce||(Ge=[.12,.3,-.06,.16,.03],ot=!1),Ee.dy=.13+Math.sin($*2.2)*.025),X&&!F.riding&&!F.down&&!Ce){let at=Ee.aMx,ut=Ee.aOx,bt=Ee.sY;Q&&(Ee.aMz=Ee.aOz=.08,Ee.eM=Ee.eO=-.12),le(),ce&&!Q&&(Ee.aMx+=at*.25,Ee.aOx+=ut*.25,Ee.sY+=bt)}if(_t==="aion"&&X&&ce&&Z>.9&&!F.riding&&!F.down){let at=Math.sin(un);y({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+at*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+at*.04}),Q||(Ee.sX=.5,Ee.hdX=-.36)}let xe=0,Te=0;if(Tt){Tt.t+=T;let at=Tt.t/Tt.dur;at>=1?Tt=null:(U[Tt.name](at,Tt.c),Tt.name==="spin"&&(xe=vi(at)*6.2832*Tt.turns),Tt.name==="roll"&&(Te=vi(at)*6.2832,Ge=[-1.7,2.2,-1.7,2.2,0],ot=!1),Tt.name==="flip"&&(Te=-vi(at)*6.2832,Ge=[-1.75,2.25,-1.75,2.25,0],ot=!1),Tt.name==="dash"&&!Q&&(Ge=[-1.05,.55,.75,.95,0],ot=!1),Tt.name==="slam"&&at<.45&&(Ge=[-.5,1.1,.3,.9,0],ot=!1))}let yt=1-Math.exp(-(Tt||F.riding?30:Ce?16:12)*T);for(let at in ft)ft[at]+=(Ee[at]-ft[at])*yt;V.armM.rotation.set(ft.aMx,ft.aMy,-ft.aMz),V.armO.rotation.set(ft.aOx,ft.aOy,ft.aOz),V.elbowM.rotation.x=ft.eM,V.elbowO.rotation.x=ft.eO,te.rotation.x=ft.sX,te.rotation.y=ft.sY,q.position.y=O+ft.dy,q.rotation.y=xe,q.rotation.x=Te,q.rotation.z=ft.rZ,We.rotation.set(ft.hdX,ft.hdY+(ce||Tt||x==="timide"?0:Math.sin($*.4)*.08),ft.hdZ);let rt=ot?1:1-Math.exp(-(Ge?16:8)*T),Ut=Ge||[0,0,0,0,0];if(V.legM.rotation.x+=(Ut[0]-V.legM.rotation.x)*rt,V.kneeM.rotation.x+=(Ut[1]-V.kneeM.rotation.x)*rt,V.legO.rotation.x+=(Ut[2]-V.legO.rotation.x)*rt,V.kneeO.rotation.x+=(Ut[3]-V.kneeO.rotation.x)*rt,V.legM.rotation.z+=(-Ut[4]-V.legM.rotation.z)*rt,V.legO.rotation.z+=((Ut[5]??Ut[4])-V.legO.rotation.z)*rt,V.orb){let at=V.orb;X?at.position.set(-.26,.42+Math.sin($*2)*.03,.34):at.position.set(-.3,.52+Math.sin($*2)*.03,.12),at.rotation.y=$}V.aura&&(V.aura.rotation.z=$*.5,V.aura.material.opacity=.42+Math.sin($*2.2)*.14,V.auraCol.material.opacity=.08+Math.sin($*1.7)*.03);for(let at of D)at($);for(let at=0;at<4;at++){let ut=gt[at];if(ut.visible=Q,Q){let bt=1+.3*Math.sin($*13+at*1.9)+.15*Math.sin($*21+at),qt=Math.min(1,Z/2);ut.scale.set(.042,(.065+qt*.05)*bt,.042),ut.rotation.x=-.25-qt*.5}}let jn=Ht&&x==="digne";if(lt.visible=jn,jn){let at=lt.children;at[0].material.opacity=.13+Math.sin($*5)*.05,at[0].scale.set(1+Math.sin($*7)*.04,1,1+Math.sin($*7)*.04);for(let ut=1;ut<=9;ut++){let bt=($*.9+ut*.37)%1,qt=ut*2.4+$*.6;at[ut].position.set(Math.cos(qt)*.44,bt*2.2,Math.sin(qt)*.44),at[ut].scale.y=.6+bt}at[1].material.opacity=.5+Math.sin($*6)*.2,at[10].rotation.y=-$,at[10].scale.setScalar(1+Math.sin($*5)*.06)}let Kt=Ie.userData.blink;Kt&&(ee-=T,ee<0&&(Kt(ee>-.11),ee<=-.11&&(ee=2.2+Math.random()*4)))}}}function ku(i,e,t={}){let n=new is({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=zt,n.toneMapping=ei,n.shadowMap.enabled=!0,n.shadowMap.type=Ur;let s=new Fi,r=new zi(n);s.environment=r.fromScene(new Js,.04).texture,r.dispose();let a=new en(28,1,.1,50);s.add(new Xs(16777215,9078440,1.15));let o=new ki(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let l=new ki(58879,1.1);l.position.set(-3,2,-3),s.add(l);let c=new ki(10185727,.9);c.position.set(3,1.5,-3),s.add(c);let h=document.createElement("canvas");h.width=h.height=256;let d=h.getContext("2d"),p=d.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=p,d.fillRect(0,0,256,256),d.strokeStyle="rgba(0,240,255,.5)",d.lineWidth=2,d.beginPath(),d.arc(128,128,84,0,7),d.stroke(),d.strokeStyle="rgba(0,240,255,.2)",d.beginPath(),d.arc(128,128,108,0,7),d.stroke();let u=new Oe(new ti(1.5,48),new At({map:new Pn(h),transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,s.add(u);let g=new Oe(new ti(1.5,32),new eo({opacity:.45}));g.rotation.x=-Math.PI/2,g.position.y=.002,g.receiveShadow=!0,s.add(g);let _=new vt;s.add(_);let m=null,f=null,M=t.zoom||"body",v=t.yaw??-.35,S=null,D=0,b=!1,P=!!t.walk,k={y:.9,d:4.6};function E(q){m&&(_.remove(m.group),gi(m.group)),f&&(_.remove(f.group),gi(f.group),f=null),m=hs(q),_.add(m.group),q.armed&&m.setArmed(!0),q.mount&&ii[q.mount]?(f=ii[q.mount].make(),uo(f.group),_.add(f.group),m.group.position.set(0,f.seat.y-m.seatDrop,f.seat.z),m.wide=f.wide):m.group.position.set(0,0,0)}E(e);function R(){let q=i.clientWidth||300,te=i.clientHeight||400;(i.width!==Math.round(q*n.getPixelRatio())||i.height!==Math.round(te*n.getPixelRatio()))&&(n.setSize(q,te,!1),a.aspect=q/te,a.updateProjectionMatrix())}let z=q=>{S={x:q.clientX,yaw:v},D=performance.now(),i.setPointerCapture&&i.setPointerCapture(q.pointerId)},J=q=>{S&&(v=S.yaw+(q.clientX-S.x)*.012,D=performance.now())},j=()=>{S=null};i.addEventListener("pointerdown",z),i.addEventListener("pointermove",J),i.addEventListener("pointerup",j),i.addEventListener("pointercancel",j),i.style.touchAction="pan-y";let O=performance.now();function w(q){if(b)return;requestAnimationFrame(w);let te=Math.min(.05,(q-O)/1e3);if(O=q,!i.isConnected||i.offsetParent===null)return;R(),t.spin&&M!=="face"&&!S&&q-D>2500&&(v+=te*.25),_.rotation.y=v;let V=m.height+(f?f.seat.y-m.seatDrop:0),ie=a.aspect,pe=Math.max(V,1.8),ye=m.scale||1,Re=M==="face"?{y:V-.15*ye,d:1.12*Math.max(.75,ye)/Math.min(1,ie*.9)}:f?{y:V*.5,d:Math.max(V*2.6,3.4/Math.min(1,ie*1.2))}:{y:pe*.5,d:pe*2.35/Math.min(1,ie*1.9)};k.y+=(Re.y-k.y)*Math.min(1,te*6),k.d+=(Re.d-k.d)*Math.min(1,te*6),a.position.set(0,k.y+(M==="face"?.02:.25),k.d),a.lookAt(0,k.y,0),t.freeze||(m.update(te,{speed:P&&!f?2:0,riding:!!f,wide:m.wide}),f&&f.update(te,P?.8:0)),n.render(s,a)}return requestAnimationFrame(w),{set:E,setZoom(q){M=q},setArmed(q){m&&m.setArmed(q)},play(q,te,V,ie){m&&(m.setArmed(!0),m.play(q,te,V,ie))},get avatar(){return m},setWalk(q){P=q},setYaw(q){v=q,D=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){b=!0,i.removeEventListener("pointerdown",z),i.removeEventListener("pointermove",J),i.removeEventListener("pointerup",j),gi(s),n.dispose()}}}var _o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cx=new Hs(-1,1,1,-1,0,1),mc=class extends Rt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},Px=new mc,Wi=class{constructor(e){this._mesh=new Oe(Px,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yo=class extends Dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hi.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vo=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Mo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yo(_o),this.copyPass.material.blending=Qn,this.clock=new so}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Br!==void 0&&(a instanceof Br?n=!0:a instanceof vo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bo=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var tr=class i extends Dn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(r,a,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new vn(r,a,{type:Xn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new vn(r,a,{type:Xn});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Hu;this.highPassUniforms=Hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=_o;this.copyUniforms=Hi.clone(h.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new At,this.fsQuad=new Wi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new $t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};tr.BlurDirectionX=new Me(1,0);tr.BlurDirectionY=new Me(0,1);var Gu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var wo=class extends Dn{constructor(){super();let e=Gu;this.uniforms=Hi.clone(e.uniforms),this.material=new to({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var dt={x:-200,z:70,r:22.4,wall:33.6,gate:.17},Ix={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},Vu=[16734842,4704511,16765514,9166954],Wu={"1h":{kind:"melee",anim:"slash",dur:.29,hit:.5,reach:2.5,arc:1.3},"2h":{kind:"melee",anim:"heavy",dur:.48,hit:.56,reach:3.3,arc:1.45},fist:{kind:"melee",anim:"punch",dur:.24,hit:.5,reach:1.9,arc:1.05},staff:{kind:"shot",anim:"cast",dur:.36,hit:.5,proj:"bolt",speed:32,range:26},magic:{kind:"shot",anim:"cast",dur:.36,hit:.5,proj:"bolt",speed:32,range:28},bow:{kind:"shot",anim:"bow",dur:.42,hit:.58,proj:"arrow",speed:56,range:34},gun:{kind:"shot",anim:"shoot",dur:.2,hit:.34,proj:"bullet",speed:80,range:30},cannon:{kind:"shot",anim:"shoot",dur:.6,hit:.36,proj:"shell",speed:34,range:30,aoe:2.8},harp:{kind:"shot",anim:"strum",dur:.4,hit:.45,proj:"wave",speed:20,range:20,pierce:1},rings:{kind:"shot",anim:"slash",dur:.32,hit:.5,proj:"paint",speed:30,range:24,aoe:1.6}},Lx={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.5,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.62,rest:1,h:2.05},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},Dx=[[36,252,"wolf",2,2],[-34,318,"wolf",3,3],[92,296,"brute",4,1],[150,-246,"shade",4,2],[58,-292,"wolf",5,3],[-176,-160,"shade",6,2],[-300,110,"brute",7,1],[262,130,"wolf",3,2],[-120,240,"shade",5,2],[330,-120,"brute",8,1]],Ux=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],Nx=new G(0,1,0),nr=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function Xu(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:l,toast:c,cb:h}=i,d=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.skills||[],u=Ix[s.cls&&s.cls.id]||8386303,g=s.cls&&s.cls.id||"",_=s.hero&&s.hero.main&&s.hero.main.type,m=g==="clerc"?"cleric":g==="aede"?"chanter":g==="spiritualiste"?"summoner":null,f=Object.assign({},m==="cleric"?{kind:"shot",anim:"cast",dur:.4,hit:.5,proj:"bolt",speed:30,range:26,aoe:3.4}:m==="chanter"?{kind:"melee",anim:"heavy",dur:.46,hit:.56,reach:3.7,arc:3.2,wave:1}:m==="summoner"?{kind:"zone",anim:"cast",dur:.42,hit:.5,range:26,aoe:3.6}:Wu[n.cat]||Wu.fist);m||(_==="dague"&&(f.reach=2),_==="guisarme"&&(f.reach=3.7),g==="sorcier"&&(f.aoe=2.4));let M=f.kind==="melee",v=m==="cleric"||m==="chanter",S=g==="assassin"||g==="pistolero",D=!m&&n.cat==="gun"?3:!m&&n.cat==="cannon"?1:0;if(m==="summoner")for(let x of[1,3])p[x]&&(p[x]=Object.assign({},p[x],{locked:!1,summon:x===1?"feu":"ombre"}));let b={hp:d.hp,max:d.hp,shield:0,shieldT:0,buff:0,buffT:0,dodge:0,dodgeT:0,charge:0,cds:p.map(()=>0),cdMax:p.map(()=>1),busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0},P=Math.min(60,Math.max(0,s.regen||0)),k=[],E=[],R=[],z=[],J=[],j={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},O={shake:0,held:!1,enemies:k,arena:j,pl:b,allies:J},w=(x,C)=>z.push({t:x,fn:C}),q=(x,C,H,K)=>Math.hypot(x-H,C-K),te=(x,C)=>Math.atan2(x-t.x,C-t.z),V=(x,C)=>q(x,C,dt.x,dt.z)<dt.r,ie={arc:new qn(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new qn(.84,1,48).rotateX(-Math.PI/2),tube:new on(1,1,1,24,1,!0).translate(0,.5,0),ball:new Yn(1,14,10),arrow:new ln(.04,1,6).rotateX(Math.PI/2),tracer:new on(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let x in ie)ie[x].userData.shared=!0;let pe=(x,C=.9,H=!0)=>new At({color:x,transparent:!0,opacity:C,side:Vt,blending:H?mn:Ci,depthWrite:!1,fog:!1});function ye(x,C,H){return e.add(x),R.push({obj:x,t:0,dur:C,upd:H}),x}function Re(x){e.remove(x),x.traverse(C=>{C.material&&C.material.dispose(),C.geometry&&!C.geometry.userData.shared&&C.geometry.dispose()})}function se(x,C,H,K,le,y,L,N=.24){let U=new vt;U.position.set(x,C,H),U.rotation.y=K;let B=new Oe(ie.arc,pe(L));B.rotation.z=le,U.add(B),ye(U,N,T=>{B.material.opacity=.95*(1-T),B.scale.setScalar(y*(.82+T*.3)),B.rotation.y=(T-.5)*.9})}function me(x,C,H,K,le,y,L=.45,N=.9){let U=new Oe(ie.ring,pe(K,N));U.position.set(x,C+.1,H),ye(U,L,B=>{U.scale.setScalar(le+(y-le)*(1-(1-B)*(1-B))),U.material.opacity=N*(1-B*B)})}function we(x,C,H,K,le,y,L=.5){let N=new Oe(ie.tube,pe(K,.55));N.position.set(x,C,H),ye(N,L,U=>{let B=le*(1-U*.55);N.scale.set(B,y*Math.min(1,U*5+.1),B),N.material.opacity=.6*(1-U)})}function Ye(x,C,H,K,le,y=.25){let L=new Oe(ie.ball,pe(K,.7));L.position.set(x,C,H),ye(L,y,N=>{L.scale.setScalar(le*(.4+N*.8)),L.material.opacity=.7*(1-N)})}function Le(x,C,H,K,le=12,y=5,L=.5){let N=new Float32Array(le*3),U=new Float32Array(le*3);for(let Z=0;Z<le;Z++){let $=Math.random()*6.2832,ae=Math.random()*1.3-.2,Q=y*(.4+Math.random()*.8);U[Z*3]=Math.cos($)*Math.cos(ae)*Q,U[Z*3+1]=Math.sin(ae)*Q+1.5,U[Z*3+2]=Math.sin($)*Math.cos(ae)*Q,N[Z*3]=x,N[Z*3+1]=C,N[Z*3+2]=H}let B=new Rt;B.setAttribute("position",new Jt(N,3));let T=new qa(B,new Er({color:K,size:l?.2:.28,transparent:!0,opacity:1,blending:mn,depthWrite:!1,fog:!1}));T.frustumCulled=!1;let F=0;ye(T,L,Z=>{let $=(Z-F)*L;F=Z;for(let ae=0;ae<le*3;ae+=3)N[ae]+=U[ae]*$,N[ae+1]+=U[ae+1]*$,N[ae+2]+=U[ae+2]*$,U[ae+1]-=9*$;B.attributes.position.needsUpdate=!0,T.material.opacity=1-Z})}let Ve=new G;function We(x,C,H,K,le){if(Ve.set(x,C,H).project(a),Ve.z>1||Math.abs(Ve.x)>1.1)return;let y=document.createElement("span");y.className="ew-num "+(le||""),y.textContent=K,y.style.left=(Ve.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",y.style.top=(-Ve.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(y),setTimeout(()=>y.remove(),850)}let Xe=new Oe(ie.ball,pe(8378623,.16));Xe.scale.setScalar(1.25),Xe.visible=!1,e.add(Xe);let Ie=new Oe(ie.ring,pe(u,.7));Ie.visible=!1,e.add(Ie);function W(x){let C=x.barCv.getContext("2d");C.clearRect(0,0,64,8),C.fillStyle="rgba(0,0,0,.75)",C.fillRect(0,0,64,8),C.fillStyle=x.type==="dummy"?"#ffd479":x.boss?"#ff4d6d":"#ff8a5a",C.fillRect(1,1,62*Math.max(0,Math.min(1,x.hp/x.max)),6),x.barTex.needsUpdate=!0}function Ae(x,C,H,K=1,le={}){let y=Lx[x],L=Math.pow(1.2,K-1),N={type:x,T:y,x:C,z:H,y:r(C,H),yaw:le.yaw??Math.random()*6.28,hp:Math.round(y.hp*L),atk:y.atk*Math.pow(1.16,K-1),def:4*Math.pow(1.15,K-1),spd:y.spd,range:y.range,rad:y.rad,state:le.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!y.boss,home:[C,H],wild:le.wild||null,arena:!!le.arena,lvl:K,lunge:0,n:0,wobT:0,wT:0};N.max=N.hp;let U=new vt;if(N.obj=U,x==="dummy"){let B=new gn({color:6965802,roughness:.9}),T=new gn({color:13481066,roughness:1}),F=new vt;N.wob=F,U.add(new Oe(new on(.07,.1,1,8).translate(0,.5,0),B)),F.position.y=.95,F.add(new Oe(new on(.27,.2,.78,10).translate(0,.42,0),T),new Oe(new Yn(.19,10,8).translate(0,.98,0),T),new Oe(new Cn(1.15,.09,.09).translate(0,.62,0),B));let Z=new Oe(new ti(.12,16).translate(0,.46,.262),new At({color:12597547}));F.add(Z),U.add(F),U.traverse($=>{$.isMesh&&($.castShadow=!0)})}else if(x==="shade"||x==="champion"){let B=x==="champion";N.av=hs({look:{gender:"m",height:B?1.5:1+Math.random()*.08,build:B?1.2:1,shoulders:B?1.14:1,hair:B?"brosse":"court"},outfit:{cut:B?"plate":"coat",c:["#1a1626","#0e0c16","#3a2a5a"]},armor:B?{casque:5,plastron:5,jambieres:5}:{},main:{type:B?"espadon":Math.random()<.5?"epee":"guisarme",r:B?5:3},fx:{shadow:B?"#2a1234":"#17152c",eyes:B?"#ff4d6d":"#c8b6ff",lod:!0}}),N.av.setArmed(!0),U.add(N.av.group)}else{let B=Nu[x]();N.beast=B,U.add(B.group)}return N.mats=[],U.traverse(B=>{B.isMesh&&B.material&&B.material.emissive&&!N.mats.includes(B.material)&&N.mats.push(B.material)}),N.mats.forEach(B=>{B.userData.e0=B.emissive.getHex(),B.userData.i0=B.emissiveIntensity}),N.barCv=document.createElement("canvas"),N.barCv.width=64,N.barCv.height=8,N.barTex=new Pn(N.barCv),N.bar=new ss(new Bi({map:N.barTex,transparent:!0,depthWrite:!1,fog:!1})),N.bar.scale.set(N.boss?2.6:1.3,N.boss?.22:.14,1),N.bar.position.y=y.h+.3,N.bar.visible=x!=="dummy",U.add(N.bar),W(N),U.position.set(C,N.y,H),U.rotation.y=N.yaw,e.add(U),k.push(N),!le.quiet&&x!=="dummy"&&(we(C,N.y,H,6962431,1.2+N.rad,6,.7),me(C,N.y,H,9133302,.3,2.4+N.rad,.55)),N}function fe(x){let C=k.indexOf(x);if(C>=0&&k.splice(C,1),e.remove(x.obj),x.barTex.dispose(),gi(x.obj),x.wild){let H=x.wild;H.es=H.es.filter(K=>K!==x),!H.es.length&&x.state==="dead"&&(H.t=45)}}function be(x){x.state!=="dead"&&(x.state="dead",x.t=0,x.hp=0,W(x),Le(x.x,x.y+x.T.h*.5,x.z,9133302,x.boss?40:18,6,.7),me(x.x,x.y,x.z,12167423,.4,x.boss?7:3,.6),x.boss&&(O.shake=Math.max(O.shake,.5),c(x.T.name+" terrass\xE9")))}let he=x=>{b.charge=Math.min(100,b.charge+x)},ze=x=>{x<=0||b.down>0||(b.hp=Math.min(b.max,b.hp+x),We(t.x,t.y+2.1,t.z,"+"+x,"heal"))};function Se(x,C,H={}){if(x.state==="dead")return 0;let K=d.atk*(1+(b.buffT>0?b.buff/100:0))*C*(.9+Math.random()*.2),le=!!H.crit||Math.random()<d.crit;if(le&&(K*=d.critDmg),H.pierce||(K*=100/(100+x.def)),K=Math.max(1,Math.round(K)),x.type==="dummy"?x.wobT=.5:x.hp-=K,x.flash=.09,W(x),We(x.x,x.y+x.T.h*.85,x.z,(le?"\u2726 ":"")+K,le?"crit":""),Le(x.x,x.y+x.T.h*.55,x.z,H.color||u,le?12:6,4,.35),le&&he(6),H.acc&&(H.acc.d+=K),H.steal&&ze(Math.round(K*H.steal/100)),x.type!=="dummy"){if(H.dot&&x.dots.push({v:Math.max(1,Math.round(d.atk*H.dot/100)),n:3,t:1}),H.stun&&x.hp>0&&Math.random()<Math.min(1,H.stun+.25)&&(x.stun=x.boss?1:2.2,x.state="stun",We(x.x,x.y+x.T.h+.3,x.z,"\xC9tourdi","info")),!x.boss){let y=Math.atan2(x.x-t.x,x.z-t.z),L=H.kb??.35;x.x+=Math.sin(y)*L,x.z+=Math.cos(y)*L}x.state==="idle"&&(x.state="chase"),x.hp<=0&&be(x)}return K}function I(x,C=1){if(b.down>0||b.inv>0)return;if(Math.random()<Math.min(.75,d.dodge+(b.dodgeT>0?b.dodge/100:0))){We(t.x,t.y+2.1,t.z,"Esquive","info");return}let H=Math.max(1,Math.round(x.atk*C*(.9+Math.random()*.2)*100/(100+d.def)));if(b.shield>0){let K=Math.min(b.shield,H);if(b.shield-=K,H-=K,H<=0){We(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}b.hp-=H,b.lastHit=0,he(4),We(t.x,t.y+2.1,t.z,"-"+H,"hurt"),O.shake=Math.max(O.shake,.22),n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),w(.2,()=>o.classList.remove("ew-hit")),b.hp<=0&&(b.hp=0,b.down=2.8,t.down=!0,b.queue=!1,c("Vaincu",j.on?"Vague "+j.wave+" atteinte":"Les ombres se dispersent"))}let A={feu:{name:"Esprit de feu",color:16742954,hp:5,atk:.9,sc:1},ombre:{name:"Esprit d\u2019ombre",color:10185727,hp:8,atk:1.2,sc:1.25}};function ne(x){let C=A[x];for(let Z of J.slice())Z.kind===x&&_e(Z);let H=new vt,K=new At({color:C.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),le=pe(C.color,.13),y=new At({color:16777215,fog:!1}),L=(Z,$,ae,Q,ce,Ce)=>{let Ge=new Oe(Z,$);return Ge.position.set(ae,Q,ce),(Ce||H).add(Ge),Ge};L(new ln(.95,2.6,12).rotateX(Math.PI),K,0,1.3,0),L(ie.ball,K,0,2.75,0).scale.set(1.2,1.05,.85),L(ie.ball,le,0,2.7,0).scale.setScalar(1.7),L(ie.ball,K,0,3.95,.05).scale.setScalar(.52);for(let Z of[-1,1])L(ie.ball,y,Z*.2,4,.47).scale.set(.1,.05,.05),L(new ln(.14,.6,6),K,Z*.34,4.5,0).rotation.z=-Z*.5;let N=[];for(let Z of[-1,1]){let $=new vt;$.position.set(Z*1.3,3.15,0),L(ie.ball,K,0,0,0,$).scale.setScalar(.5),L(new on(.3,.36,1.6,8).translate(0,-.9,0),K,0,0,0,$),L(ie.ball,K,0,-1.9,0,$).scale.setScalar(.52),H.add($),N.push($)}H.scale.setScalar(C.sc);let U=t.yaw+(x==="feu"?.6:-.6),B=t.x+Math.sin(U)*3,T=t.z+Math.cos(U)*3,F={kind:x,S:C,obj:H,arms:N,x:B,z:T,y:r(B,T),yaw:t.yaw,hp:Math.round(b.max*C.hp),max:Math.round(b.max*C.hp),rad:1.2*C.sc,life:60,cd:.6,swing:0,t:0};F.barCv=document.createElement("canvas"),F.barCv.width=64,F.barCv.height=8,F.barTex=new Pn(F.barCv),F.bar=new ss(new Bi({map:F.barTex,transparent:!0,depthWrite:!1,fog:!1})),F.bar.scale.set(2.4,.2,1),F.bar.position.y=5.3,H.add(F.bar),ue(F),H.position.set(B,F.y,T),e.add(H),J.push(F),we(B,F.y,T,C.color,2.2,9,.8),me(B,F.y,T,C.color,.4,4.5,.7),Le(B,F.y+2,T,C.color,30,6,.8)}function ue(x){let C=x.barCv.getContext("2d");C.clearRect(0,0,64,8),C.fillStyle="rgba(0,0,0,.75)",C.fillRect(0,0,64,8),C.fillStyle="#7fe0ff",C.fillRect(1,1,62*Math.max(0,x.hp/x.max),6),x.barTex.needsUpdate=!0}function _e(x){let C=J.indexOf(x);C>=0&&J.splice(C,1),Le(x.x,x.y+2,x.z,x.S.color,24,5,.7),e.remove(x.obj),x.barTex.dispose(),x.obj.traverse(H=>{H.material&&H.material.dispose(),H.geometry&&!H.geometry.userData.shared&&H.geometry.dispose()})}function ve(x,C){let H=Math.max(1,Math.round(C.atk*(.9+Math.random()*.2)*100/(100+d.def)));x.hp-=H,ue(x),We(x.x,x.y+4.6*x.S.sc,x.z,"-"+H,"info"),x.hp<=0&&(c(x.S.name+" dissip\xE9"),_e(x))}function qe(x,C){if(x.t+=C,x.life-=C,x.cd-=C,x.life<=0){_e(x);return}let H=de(x.x,x.z,24),K=0,le,y,L;H?(le=H.x,y=H.z,L=2.6*x.S.sc+H.rad):(le=t.x,y=t.z,L=4.5);let N=le-x.x,U=y-x.z,B=Math.hypot(N,U);B>L?(K=Math.min(H?8:13,(B-L)*4+2),x.yaw+=nr(Math.atan2(N,U),x.yaw)*Math.min(1,C*7),x.x+=Math.sin(x.yaw)*K*C,x.z+=Math.cos(x.yaw)*K*C):H&&(x.yaw+=nr(Math.atan2(N,U),x.yaw)*Math.min(1,C*8),x.cd<=0&&(x.cd=1.15,x.swing=.45,w(.2,()=>{if(!J.includes(x))return;let F=x.x+Math.sin(x.yaw)*2,Z=x.z+Math.cos(x.yaw)*2;me(F,x.y,Z,x.S.color,.4,3.8*x.S.sc,.4),se(x.x,x.y+2.2,x.z,x.yaw,.2,3.6*x.S.sc,x.S.color,.3);for(let $ of k.slice())$.state!=="dead"&&$.type!=="dummy"&&q(F,Z,$.x,$.z)<3.6*x.S.sc+$.rad&&Se($,x.S.atk,{color:x.S.color,kb:.6})}))),x.y=Math.max(r(x.x,x.z),.2),x.swing>0&&(x.swing-=C);let T=x.swing>0?Math.sin((1-x.swing/.45)*Math.PI):0;x.obj.position.set(x.x,x.y+.25+Math.sin(x.t*2)*.15,x.z),x.obj.rotation.y=x.yaw,x.arms[0].rotation.x=-T*2.1-.1,x.arms[1].rotation.x=-T*1.6-.1+Math.sin(x.t*1.5)*.08,x.obj.visible=!t.inside}function De(x,C,H,K={}){let le=x&&x.state!=="dead"?x:it(f.range+6,3.2,!0),y=le?le.x:t.x+Math.sin(t.yaw)*8,L=le?le.z:t.z+Math.cos(t.yaw)*8,N=r(y,L);return we(y,N,L,K.color||u,H*.55,5,.45),Qe(y,N,L,H,C,K)}function ke(){b.hp=b.max,b.shield=0,t.down=!1,b.inv=2;for(let x of J.slice())_e(x);if(j.on)ft(),i.teleport(dt.x+17,dt.z);else{for(let x of k)x.wild&&(x.state="idle",x.hp=x.max,W(x));i.teleport(-6,34),c("Rue du Four","Vous reprenez connaissance devant la Maison")}}function je(x,C){let H=x.obj;if(x.flash>0){x.flash-=C;let Q=x.flash>0;for(let ce of x.mats)Q?(ce.emissive.setHex(16777215),ce.emissiveIntensity=.9):(ce.emissive.setHex(ce.userData.e0),ce.emissiveIntensity=ce.userData.i0)}if(x.type==="dummy"){x.wobT>0&&(x.wobT-=C,x.wob.rotation.x=Math.sin(x.wobT*34)*.5*x.wobT);return}if(x.state==="dead"){x.t+=C;let Q=x.t/.55;H.scale.setScalar(Math.max(.01,1-Q)),H.position.y=x.y-Q*.4,Q>=1&&fe(x);return}for(let Q of x.dots)if(Q.t-=C,Q.t<=0&&Q.n>0&&(Q.t=1,Q.n--,x.hp-=Q.v,We(x.x,x.y+x.T.h,x.z,Q.v,"dot"),W(x),x.hp<=0)){be(x);return}x.dots.length&&(x.dots=x.dots.filter(Q=>Q.n>0));let K=null,le=18;for(let Q of J){if(Q.hp<=0)continue;let ce=q(x.x,x.z,Q.x,Q.z);ce<le&&(le=ce,K=Q)}let y=K?K.x:t.x,L=K?K.z:t.z,N=K?K.rad:0,U=y-x.x,B=L-x.z,T=Math.hypot(U,B)-N,F=K?!0:b.down<=0&&!t.inside,Z=0,$=null;if(x.state==="stun")x.stun-=C,x.stun<=0&&(x.state="chase");else if(x.state==="idle")if(F&&T<15)x.state="chase";else{if(x.wT-=C,!x.wander||x.wT<=0){let Ce=Math.random()*6.28,Ge=Math.random()*7;x.wander=[x.home[0]+Math.sin(Ce)*Ge,x.home[1]+Math.cos(Ce)*Ge],x.wT=3+Math.random()*5}let Q=x.wander[0]-x.x,ce=x.wander[1]-x.z;Math.hypot(Q,ce)>.7&&($=Math.atan2(Q,ce),Z=x.spd*.3),x.hp<x.max&&(x.hp=Math.min(x.max,x.hp+x.max*.2*C),W(x))}else x.state==="chase"?!F||x.wild&&q(x.x,x.z,x.home[0],x.home[1])>40?x.wild&&(x.state="idle",x.wander=x.home.slice(),x.wT=6):($=Math.atan2(U,B),T>x.range*.82?Z=x.spd:(x.state="wind",x.t=0,x.av&&x.av.play(x.av.cat==="2h"?"heavy":"slash",x.T.wind/.52,x.n++),me(x.x,x.y,x.z,16724048,.3,x.range+.5,x.T.wind,.85))):x.state==="wind"?(x.t+=C,x.t<x.T.wind*.6&&($=Math.atan2(U,B)),x.t>=x.T.wind&&(x.state="rest",x.t=0,x.lunge=.25,se(x.x,x.y+x.T.h*.5,x.z,x.yaw,.3,x.range*.95,16728160,.2),F&&T<x.range+.7&&Math.abs(nr(Math.atan2(U,B),x.yaw))<1.25&&(K?ve(K,x):I(x)))):x.state==="rest"&&(x.t+=C,x.t>=x.T.rest&&(x.state="chase"));if($!=null&&(x.yaw+=nr($,x.yaw)*Math.min(1,C*8)),Z>0){let Q=x.x+Math.sin(x.yaw)*Z*C,ce=x.z+Math.cos(x.yaw)*Z*C;for(let Ce of k)if(Ce!==x&&Ce.state!=="dead"){let Ge=q(Q,ce,Ce.x,Ce.z),ot=x.rad+Ce.rad;Ge<ot&&Ge>.001&&(Q=Ce.x+(Q-Ce.x)/Ge*ot,ce=Ce.z+(ce-Ce.z)/Ge*ot)}if(x.arena){let Ce=q(Q,ce,dt.x,dt.z),Ge=dt.r-1-x.rad;Ce>Ge&&(Q=dt.x+(Q-dt.x)/Ce*Ge,ce=dt.z+(ce-dt.z)/Ce*Ge)}x.x=Q,x.z=ce}x.y=Math.max(r(x.x,x.z),.2),x.lunge>0&&(x.lunge-=C);let ae=x.lunge>0?Math.sin((1-x.lunge/.25)*Math.PI)*.7:0;H.position.set(x.x+Math.sin(x.yaw)*ae,x.y,x.z+Math.cos(x.yaw)*ae),H.rotation.y=x.yaw,x.av?x.av.update(C,{speed:Z/4.6}):(x.beast.update(C,Z/6),x.beast.group.rotation.x=x.state==="wind"?-.22*Math.min(1,x.t/x.T.wind):x.state==="stun"?.12:0)}function it(x,C=3.2,H){let K=null,le=1e9;for(let y of k){if(y.state==="dead")continue;let L=q(t.x,t.z,y.x,y.z);if(L>x+y.rad)continue;let N=Math.abs(nr(te(y.x,y.z),t.yaw));if(N>C)continue;let U=L+(H?0:N*3)+(y.type==="dummy"?H?40:5:0);U<le&&(le=U,K=y)}return K}let de=(x,C,H,K)=>{let le=null,y=H;for(let L of k){if(L.state==="dead"||L.type==="dummy"||K&&K.has(L))continue;let N=q(x,C,L.x,L.z);N<y&&(y=N,le=L)}return le};function tt(x){let C=it(x,3.2,!M);return C&&(M||t.speed<1.5)&&(t.yaw=te(C.x,C.z)),C}function st(x,C,H,K={}){let le=0;for(let y of k.slice()){if(y.state==="dead")continue;let L=q(t.x,t.z,y.x,y.z);L>C+y.rad||H<3.1&&L>.9&&Math.abs(nr(te(y.x,y.z),t.yaw))>H||(Se(y,x,K),le++)}return le&&(he(K.gain??7),O.shake=Math.max(O.shake,K.shake||.07)),le}function Qe(x,C,H,K,le,y={},L){Ye(x,C+.4,H,y.color||u,K*.7),me(x,C,H,y.color||u,.3,K,.4),Le(x,C+.5,H,y.color||u,14,6,.5);let N=0;for(let U of k.slice())U!==L&&U.state!=="dead"&&q(x,H,U.x,U.z)<K+U.rad&&(Se(U,le,y),N++);return N}function Ze(x,C,H={}){let K=H.target&&H.target.state!=="dead"?H.target:it(H.range||28,3.2,!0),le=n.hand(new G,H.off);H.bounce==null&&D&&(H.bounce=D),x==="wave"&&le.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let y=K?new G(K.x-le.x,K.y+K.T.h*.55-le.y,K.z-le.z).normalize():new G(Math.sin(t.yaw),0,Math.cos(t.yaw));H.spread&&y.applyAxisAngle(Nx,H.spread);let L=H.color||u,N=H.size||1,U;if(x==="arrow")U=new Oe(ie.arrow,pe(L,1)),U.scale.set(N,N,1.1);else if(x==="bullet")U=new Oe(ie.tracer,pe(L,1));else if(x==="wave")U=new Oe(ie.arc,pe(L,.85)),U.scale.setScalar(1.2);else{U=new Oe(ie.ball,pe(L,x==="paint"?.95:.9,x!=="paint"));let T=(x==="shell"?.3:x==="paint"?.2:.24)*N;if(U.scale.setScalar(T),x!=="paint"){let F=new Oe(ie.ball,pe(16777215,.9));F.scale.setScalar(.5),U.add(F)}}let B=H.speed||26;U.position.copy(le),e.add(U),x!=="wave"&&Ye(le.x,le.y,le.z,L,.35,.12),E.push({m:U,kind:x,v:y.multiplyScalar(B),life:(H.range||28)/B+.25,mult:C,o:H,hit:new Set,target:K,homing:x!=="wave",age:0,bounce:H.bounce||0})}function He(x,C){x.age+=C,x.life-=C;let H=x.m.position;if(x.homing&&x.target&&x.target.state==="dead"&&(x.target=de(H.x,H.z,12,x.hit)),x.homing&&x.target){let y=x.target,L=x.v.length();Ve.set(y.x-H.x,y.y+y.T.h*.55-H.y,y.z-H.z).normalize().multiplyScalar(L),x.v.lerp(Ve,Math.min(1,C*(x.kind==="bullet"||x.kind==="arrow"?18:9))).setLength(L)}H.addScaledVector(x.v,C),x.kind==="wave"?(x.m.rotation.y=Math.atan2(x.v.x,x.v.z),x.m.scale.setScalar(1.2+x.age*3.2),x.m.material.opacity=.85*Math.min(1,x.life*3)):(x.kind==="arrow"||x.kind==="bullet")&&x.m.lookAt(H.x+x.v.x,H.y+x.v.y,H.z+x.v.z);let K=x.kind==="wave"?x.m.scale.x*.8:.35*(x.o.size||1),le=x.life<=0;for(let y of k)if(!(y.state==="dead"||x.hit.has(y))&&!(q(H.x,H.z,y.x,y.z)>y.rad+K||H.y<y.y-.5||H.y>y.y+y.T.h+.8)){if(x.hit.add(y),Se(y,x.mult,x.o),x.hit.size===1&&he(x.o.gain??0),x.o.aoe&&Qe(H.x,y.y,H.z,x.o.aoe,x.mult*.6,x.o,y),x.bounce>0){let L=de(H.x,H.z,14,x.hit);if(L){x.bounce--,x.mult*=.8,x.target=L;let N=x.v.length();x.v.set(L.x-H.x,L.y+L.T.h*.55-H.y,L.z-H.z).setLength(N),x.life=14/N+.25,Ye(H.x,H.y,H.z,16777215,.5,.12);break}}if(!x.o.pierce){le=!0;break}}return!le&&x.kind!=="wave"&&H.y<r(H.x,H.z)+.05?(le=!0,x.o.aoe?Qe(H.x,r(H.x,H.z),H.z,x.o.aoe,x.mult*.6,x.o):Le(H.x,H.y+.1,H.z,x.o.color||u,5,2.5,.3)):le&&x.life<=0&&x.o.aoe&&x.kind==="shell"&&Qe(H.x,H.y,H.z,x.o.aoe,x.mult*.6,x.o),le}let nt=()=>t.talking||t.paused||b.down>0?!1:(t.mount&&i.dismount(),!0);function ct(x){if(x&&(b.idle=0),b.armed===x)return;b.armed=x,n.setArmed(x),o.classList.toggle("ew-armed",x);let C=o.querySelector('[data-c="draw"]');C&&C.classList.toggle("on",x)}let et=()=>t.x,Be=()=>t.y,ge=()=>t.z;function Y(){if(!nt())return!1;if(ct(!0),b.busy>0)return b.queue=!0,!1;let x=tt(M?f.reach+4.5:f.range);if(M&&x){let le=q(t.x,t.z,x.x,x.z)-x.rad;le>f.reach*.7&&i.dash(le-f.reach*.55,.09)}let C=b.combo++,H=f.dur,K=p[0]||{};return n.play(f.anim,H*1.3,C),b.busy=H,w(H*f.hit,()=>{if(!(b.down>0))if(M){let le=n.dual?(C>>1)%3:C%3,y=f.anim==="heavy"?C%2?.12:1.45:f.anim==="punch"?1.57:le===0?-.95:le===1?.2:1.57,L={d:0};f.wave?(me(et(),Be(),ge(),u,.5,f.reach+.6,.35),se(et(),Be()+1.1,ge(),t.yaw,.1,f.reach,u),se(et(),Be()+1.1,ge(),t.yaw+Math.PI,.1,f.reach,u)):se(et(),Be()+1.15,ge(),t.yaw,y,f.reach*.95,u),st(K.mult||1,f.reach,f.arc,{acc:L})&&b.hp<b.max&&ze(Math.max(1,Math.round(L.d*.18+b.max*.03)))}else f.kind==="zone"?De(x,K.mult||1,f.aoe)&&he(7):Ze(f.proj,K.mult||1,{range:f.range,speed:f.speed,aoe:f.aoe,pierce:f.pierce,off:n.dual&&C%2===1,gain:7,target:x,color:f.proj==="paint"?Vu[C%4]:u})}),!0}function Ue(){if(t.talking||t.paused||b.down>0||b.dashCd>0)return;t.mount&&i.dismount();let x=i.inputDir();x!=null&&(t.yaw=x),b.dashCd=.36,b.inv=Math.max(b.inv,.36),b.busy=0,b.queue=!1,b.lock=0,me(et(),Be(),ge(),16777215,.3,1.9,.3,.6),Ye(et(),Be()+1,ge(),u,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let Pe=x=>{let C=o.querySelector(".ew-skn");C&&(C.textContent=x,C.classList.remove("on"),C.offsetWidth,C.classList.add("on"))};function Je(x){let C=p[x];if(!C)return;if(x===0)return Y();if(!nt())return;if(C.locked){Pe("Niveau "+C.lvl+" requis \xB7 "+C.name);return}if(C.ult){if(b.charge<100){Pe("Jauge d\u2019ultime incompl\xE8te");return}}else if(b.cds[x]>0)return;if(b.busy>.15)return;ct(!0),Pe(C.name);let H=v&&C.heal&&!C.ult,K=v?1.7:1;if(C.ult?b.charge=0:(b.cds[x]=b.cdMax[x]=C.summon?14:H?3:2+(C.cd||1)*2.2,he(10)),C.summon){n.play("castUp",.7),b.busy=.5,w(.3,()=>ne(C.summon));return}let le={crit:C.crit,pierce:C.pierce,stun:C.stun,dot:C.dot,steal:C.steal,color:u},y=C.hits||1,L=()=>{C.heal&&ze(Math.round(b.max*Math.min(100,C.heal*K)/100)),C.shield&&(b.shield=Math.round(b.max*C.shield/100),b.shieldT=10),C.buff&&(b.buff=C.buff,b.buffT=10),C.dodge&&(b.dodge=C.dodge,b.dodgeT=6)};if(C.type!=="atk"){if(C.type==="dodge")n.play("roll",.45),b.inv=.6,b.busy=.4,i.dash(7.5,.32),me(et(),Be(),ge(),u,.4,2.4,.4),L();else{let N=C.type==="heal"?9306032:u;n.play("castUp",.8),b.busy=.6,b.lock=.5,w(.3,()=>{L(),we(et(),Be(),ge(),N,1.3,4.5,.7),me(et(),Be(),ge(),N,.4,3.2,.6),Le(et(),Be()+1,ge(),N,16,3,.7)})}return}if(C.ult===2){let N=tt(36);n.play(M?"slam":"castUp",1),b.busy=.95,b.lock=.8,b.inv=1.1,w(.5,()=>{let U=N&&N.state!=="dead"?N:it(36);if(O.shake=.7,!U){me(et(),Be(),ge(),u,.5,9,.8);return}we(U.x,U.y,U.z,16777215,1.4,18,.9),we(U.x,U.y,U.z,u,2.8,13,1),me(U.x,U.y,U.z,u,.5,10,.9),Le(U.x,U.y+1,U.z,u,40,9,.9),U.type!=="dummy"&&U.hp<=U.max*.35?(We(U.x,U.y+U.T.h+.2,U.z,"R\xE9duit \xE0 n\xE9ant","crit"),be(U)):Se(U,7,{pierce:1,color:u,kb:1.2})});return}if(C.ult===1){if(M){n.play(y>1?"spin":"slam",y>1?1.15:.95,0,Math.max(2,Math.round(y/2))),b.busy=1,b.inv=1,b.lock=y>1?0:.65;for(let N=0;N<y;N++)w(y>1?.15+N*.85/y:.52,()=>{me(et(),Be(),ge(),u,.6,7.5,.5),y===1?(we(et(),Be(),ge(),u,3.2,8,.7),Le(et(),Be()+.5,ge(),u,36,9,.8)):se(et(),Be()+1.1,ge(),t.yaw+N*1.3,N%2?.2:-.2,5.5,u,.3),st(C.mult,7.5,3.2,Object.assign({shake:y===1?.6:.2,kb:.8,gain:0},le)),N===y-1&&L()})}else{let N=tt(36),U=N?N.x:t.x+Math.sin(t.yaw)*10,B=N?N.z:t.z+Math.cos(t.yaw)*10,T=r(U,B);n.play("castUp",1.05),b.busy=.95,b.lock=.75,b.inv=.8,me(U,T,B,u,6.4,6.6,.75,.7);{let F=new Oe(ie.ball,pe(u,.95)),Z=new Oe(ie.ball,pe(16777215,.9));Z.scale.setScalar(.55),F.add(Z),ye(F,.72,$=>{let ae=Math.min(1,$/.97);F.position.set(U-7*(1-ae),T+20*(1-ae)*(1-ae)+.5,B-4*(1-ae)),F.scale.setScalar(1.3)})}for(let F=0;F<y;F++)w(.72+F*.14,()=>{O.shake=.6,we(U,T,B,u,4,12,.8),Le(U,T+.5,B,u,36,10,.9),Qe(U,T,B,6.6,C.mult,Object.assign({kb:.8},le)),F===y-1&&L()})}return}if(M)if(tt(f.reach+4),y>1){let N=.22+y*.16;n.play("spin",N,0,Math.max(1,Math.round(y/2))),b.busy=N;for(let U=0;U<y;U++)w(.1+U*.16,()=>{se(et(),Be()+1.1,ge(),t.yaw+U*2.1,U%2?.22:-.22,f.reach*1.3,u),st(C.mult,f.reach+1,3.2,le),U===y-1&&L()})}else C.pierce||C.crit?(n.play(f.anim==="heavy"?"heavy":"slash",.5,f.anim==="heavy"?0:2),b.busy=.45,b.inv=.3,i.dash(3.6,.18),w(.22,()=>{se(et(),Be()+1.1,ge(),t.yaw,1.57,f.reach*1.9,16777215,.3),se(et(),Be()+1.1,ge(),t.yaw,1.57,f.reach*1.7,u),st(C.mult,f.reach*1.9,.5,Object.assign({shake:.2},le)),L()})):m==="chanter"?(n.play("slam",.7),b.busy=.6,b.inv=.4,w(.34,()=>{me(et(),Be(),ge(),u,.6,7,.5),we(et(),Be(),ge(),u,2.4,5,.5),Le(et(),Be()+.5,ge(),u,24,8,.6),st(C.mult,6.6,3.2,Object.assign({shake:.4,kb:.9},le)),L()})):(n.play("heavy",.72,0),b.busy=.62,w(.38,()=>{let N=et()+Math.sin(t.yaw)*1.6,U=ge()+Math.cos(t.yaw)*1.6;se(et(),Be()+1.2,ge(),t.yaw,1.5,f.reach*1.35,u,.3),me(N,Be(),U,u,.3,2.8,.4),st(C.mult,f.reach+.9,1.5,Object.assign({shake:.28,kb:.9},le)),L()}));else{let N=tt(f.range+4);if(f.kind==="zone"){n.play("cast",.5,0),b.busy=.3+y*.2;for(let U=0;U<y;U++)w(.22+U*.22,()=>{De(N,C.mult,y>1?4.2:5.4,le),U===y-1&&L()})}else if(y>1){b.busy=.2+y*.14;for(let U=0;U<y;U++)w(.1+U*.14,()=>{n.play(f.anim,f.anim==="bow"?.14:.2,U),Ze(f.proj,C.mult,Object.assign({range:f.range+4,speed:f.speed,aoe:f.aoe,off:U%2===1&&n.dual,spread:N?0:(U-(y-1)/2)*.09,target:N},le,f.proj==="paint"?{color:Vu[U%4]}:null)),U===y-1&&L()})}else n.play(f.anim,f.dur*1.5,0),b.busy=f.dur*1.15,w(f.dur*f.hit*1.15,()=>{Ze(f.proj,C.mult,Object.assign({range:f.range+6,speed:f.speed*1.1,aoe:Math.max((f.aoe||0)*1.5,C.dot||C.stun||C.steal?2.4:0),size:1.9,pierce:C.pierce||f.pierce,target:N},le)),L()})}}function Ke(x){let C=[];if(x%10===0){C.push("drake");for(let H=0;H<Math.min(4,x/10+1);H++)C.push("wolf")}else if(x%5===0){C.push("champion");for(let H=0;H<Math.min(3,x/5);H++)C.push("shade")}else{let H=Math.min(6,2+Math.floor(x/3));for(let K=0;K<H;K++)C.push(x>=4&&K===0?"brute":x>=2&&K%2===1?"shade":"wolf")}return C}function mt(){let x=++j.wave,C=Ke(x),H=Math.random()*6.28;c("Vague "+x,x%5===0?"Un champion entre dans l\u2019ar\xE8ne":C.length+" ombres"),C.forEach((K,le)=>{let y=H+le/C.length*6.2832,L=15+le%2*2.5;Ae(K,dt.x+Math.cos(y)*L,dt.z+Math.sin(y)*L,x,{arena:!0})})}let gt=()=>5*Math.floor(j.best/5)+1;function lt(x,C){j.on||(x=Math.max(1,Math.min(j.best+1,Math.round(x||gt()))),j.on=!0,j.loop=!!C,j.wave=x-1,j.pending=null,ct(!0),b.hp=b.max,mt())}function ft(){j.on=!1,j.pending=null;for(let x of k.slice())x.arena&&fe(x);for(let x of J.slice())_e(x)}let _t=x=>x.replace(/[«».]/g,"").trim(),Lt=o.querySelector(".ew-cmb");if(Lt){let x=H=>l?H===0?"Clic":String(H):"",C=`<button type="button" class="ew-atk" data-c="0"><em>${x(0)}</em><span>${p[0]?_t(p[0].name):"Attaque"}</span></button>`;for(let H=1;H<Math.min(6,p.length);H++){let K=p[H];C+=`<button type="button" class="ew-sk k${H}${K.ult?" ult":""}${K.locked?" lock":""}" data-c="${H}" title="${K.name.replace(/"/g,"")}"><i></i><em>${x(H)}</em><span>${K.locked?"Niv. "+K.lvl:_t(K.name)}</span></button>`}if(Lt.insertAdjacentHTML("afterbegin",C),!l){let K=y=>Lt.querySelector(y),le=(y,L,N,U)=>{if(!y)return;let B=N*Math.PI/180;y.style.right=47+L*Math.cos(B)-U/2+"px",y.style.bottom=47+L*Math.sin(B)-U/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((y,L)=>le(K(y),122,1+L*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((y,L)=>le(K(y),186,8+L*21,46))}}let Ee={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:Lt?[...Lt.querySelectorAll(".ew-sk")]:[]},un="";function Tt(){let x=b.armed||b.hp<b.max||j.on,C=b.cds.map(K=>Math.ceil(K)).join(","),H=[x,Math.round(b.hp),Math.round(b.shield),Math.round(b.charge),C,b.buffT>0,b.dodgeT>0,j.on,j.wave,k.length].join("|");if(H!==un){if(un=H,Ee.hud&&Ee.hud.classList.toggle("on",x),Ee.hp&&(Ee.hp.style.width=b.hp/b.max*100+"%",Ee.hpT.textContent=Math.round(b.hp)+" / "+b.max,Ee.sh.style.width=Math.min(100,b.shield/b.max*100)+"%"),Ee.ult&&(Ee.ult.style.width=b.charge+"%",Ee.ultB.classList.toggle("full",b.charge>=100)),Ee.stt&&(Ee.stt.textContent=[P>0&&b.hp<b.max?"R\xE9g\xE9n\xE9ration":"",b.buffT>0?"Attaque +"+b.buff+" %":"",b.shield>0?"Bouclier":"",b.dodgeT>0?"Esquive +"+b.dodge+" %":""].filter(Boolean).join(" \xB7 ")),Ee.wave){let K=k.filter(le=>le.arena&&le.state!=="dead").length;Ee.wave.textContent=j.on?"Vague "+(j.wave+(j.loop&&j.pending!=null?1:0))+(j.loop?" en boucle":"")+(K?" \xB7 "+K+" ombre"+(K>1?"s":""):"")+(j.best?" \xB7 record "+j.best:""):"",Ee.wave.classList.toggle("on",j.on)}Ee.sk.forEach(K=>{let le=+K.dataset.c,y=p[le],L=K.querySelector("i");y.ult?(K.classList.toggle("ready",!y.locked&&b.charge>=100),L.style.height=y.locked?"0%":100-b.charge+"%"):L.style.height=(b.cds[le]>0?b.cds[le]/b.cdMax[le]*100:0)+"%"})}}for(let[x,C]of Ux)Ae("dummy",x,C,1,{quiet:!0,yaw:0});let X=Dx.map(([x,C,H,K,le])=>({x,z:C,type:H,lvl:K,n:le,es:[],t:0})).filter(x=>r(x.x,x.z)>1.6),ee=0,oe=0;return O.update=function(x){for(let C=z.length-1;C>=0;C--){let H=z[C];H.t-=x,H.t<=0&&(z.splice(C,1),H.fn())}b.busy-=x,b.lock-=x,b.inv-=x,b.lastHit+=x,b.dashCd-=x;for(let C=0;C<b.cds.length;C++)b.cds[C]>0&&(b.cds[C]-=x);if(b.buffT>0&&(b.buffT-=x),b.dodgeT>0&&(b.dodgeT-=x),b.shieldT>0&&(b.shieldT-=x,b.shieldT<=0&&(b.shield=0)),b.down>0)b.down-=x,b.down<=0&&ke();else if(b.hp<b.max){let C=0;P>0&&b.lastHit>2&&(C+=b.max*P/1e3*x),!j.on&&b.lastHit>6&&(C+=b.max*.07*x),C&&(b.hp=Math.min(b.max,b.hp+C))}(b.queue||O.held)&&b.busy<=0&&b.down<=0?(b.queue=!1,Y()):!M&&b.armed&&b.busy<=0&&b.down<=0&&!t.mount&&!t.talking&&!t.paused&&!t.inside&&de(t.x,t.z,f.range)&&Y();for(let C of J.slice())qe(C,x);S&&!b.armed&&!t.mount&&!t.inside&&!t.talking&&ct(!0),b.armed&&!j.on&&!S&&(b.idle+=x,b.idle>25&&!k.some(C=>C.type!=="dummy"&&C.state!=="idle"&&C.state!=="dead")&&ct(!1));for(let C of k.slice())C.obj.visible=!t.inside,!t.inside&&(C.arena||q(C.x,C.z,t.x,t.z)<80)&&je(C,x);for(let C=E.length-1;C>=0;C--)He(E[C],x)&&(Re(E[C].m),E.splice(C,1));for(let C=R.length-1;C>=0;C--){let H=R[C];H.t+=x;let K=Math.min(1,H.t/H.dur);H.upd(K),K>=1&&(Re(H.obj),R.splice(C,1))}if(O.shake=Math.max(0,O.shake-x*2.2),Xe.visible=b.shield>0&&!t.inside,Xe.visible&&(Xe.position.set(t.x,t.y+1,t.z),Xe.material.opacity=.14+Math.sin(t.t*5)*.04),Ie.visible=b.buffT>0,Ie.visible&&(Ie.position.set(t.x,t.y+.12,t.z),Ie.scale.setScalar(1.1+Math.sin(t.t*6)*.12),Ie.rotation.y=t.t*2),j.on)if(!V(t.x,t.z)&&b.down<=0)c("D\xE9fi abandonn\xE9","Vague "+j.wave),ft();else if(j.pending==null&&!k.some(C=>C.arena&&C.state!=="dead")){let C=j.wave>j.best;j.best=Math.max(j.best,j.wave),C&&h.onArena&&h.onArena(j.best);let H=h.onWave?h.onWave(j.wave):null;ze(Math.round(b.max*.3)),c("Vague "+j.wave+" termin\xE9e",[H?"+"+H.x+" XP \xB7 +"+H.k+" kinahs":"",C?"nouveau record":""].filter(Boolean).join(" \xB7 ")),j.pending=j.loop?2.2:3.2,j.loop&&j.wave--}else j.pending!=null&&(j.pending-=x,j.pending<=0&&(j.pending=null,mt()));if((ee+=x)>.6){ee=0;for(let C of X){let H=q(C.x,C.z,t.x,t.z);if(C.t>0&&(C.t-=.6),H<85&&!C.es.length&&C.t<=0&&!t.inside)for(let K=0;K<C.n;K++){let le=K/C.n*6.28,y=C.x+Math.sin(le)*2.5*(C.n>1),L=C.z+Math.cos(le)*2.5*(C.n>1);C.es.push(Ae(C.type,y,L,C.lvl,{wild:C,quiet:!0}))}else if(H>150&&C.es.length)for(let K of C.es.slice())K.state="gone",fe(K)}}(oe+=x)>.08&&(oe=0,Tt())},Object.assign(O,{attack:Y,skill:Je,dodge:Ue,arm:ct,toggleArm:()=>ct(!b.armed),startArena:lt,arenaStart:gt,inArena:V,spawn:Ae,moveK:()=>b.down>0||b.lock>0?0:1,dispose(){for(let x of J.slice())_e(x);for(let x of R)Re(x.obj);for(let x of E)Re(x.m);for(let x of k)x.barTex.dispose();for(let x in ie)ie[x].dispose()}}),Tt(),O}var gc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},ir=(i,e)=>Math.exp(-(i*i)/(2*e*e)),Xi=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),Ox=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Dt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=gc(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*ir(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*ir(n,230),t+=35*ir(Math.hypot(i-190,e+175),55)+16*ir(Math.hypot(i-120,e+235),50)+26*ir(Math.hypot(i,e+335),72);for(let s of Ox){let r=1-gc(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*ir(Math.abs(i-Xi(e)),12),t}var $u=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function So(i,e){let t=1e9;for(let[n,s,r,a]of $u){let o=r-n,l=a-s,c=Math.max(0,Math.min(1,((i-n)*o+(e-s)*l)/(o*o+l*l)));t=Math.min(t,Math.hypot(i-n-o*c,e-s-l*c))}return t}function qu(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-Xi(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let l=gc(44,72,t);o=[Nt(.4,.86,l*l),Nt(.37,.89,l*l),Nt(.36,.94,l*l)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&So(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var Yu=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],Zu={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},zx={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},Fx={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function Vr(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wr=class{constructor(){this.b={},this.boxes=[],this.m4=new wt,this.q=new Rn,this.e=new Ni}add(e,t,n,s,r,a=0,o=1,l=1,c=1,h=0,d=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(h,a,d,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new G(n,s,r),this.q,new G(o,l,c)));for(let u of Object.keys(p.attributes))u!=="position"&&u!=="normal"&&p.deleteAttribute(u);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),l=(n*a+s*o)/2,c=(n*o+s*a)/2;this.boxes.push([e-l,e+l,t-c,t+c])}build(e,t){let n=new vt;for(let s in this.b){let r=Or(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new Oe(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},Fe=new Cn(1,1,1),Hr=new ln(Math.SQRT1_2,1,4).rotateY(Math.PI/4),kt=new on(.5,.5,1,12),rr=new ln(.5,1,12),Mi=new Yn(.5,12,8),an=new Oi(1,1),Bx=new Yn(.5,16,8,0,Math.PI*2,0,Math.PI/2),sr=new on(.5,.5,1,56),Gr=(()=>{let i=new ni;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new Gs(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function kn(i,e,t,n,s,r,a,o,l,c,h={}){let d=h.y??Dt(t,n);i.add(l,Fe,t,d+a/2-.6,n,o,s,a+1.2,r);let p=h.roofH??Math.min(s,r)*.42;h.flat?i.add(c,Fe,t,d+a+.25,n,o,s+.6,.5,r+.6):h.hip?i.add(c,Hr,t,d+a+p/2,n,o,s+1,p,r+1):i.add(c,Gr,t,d+a,n,o,s+1,p,r+1.2),h.chimney!==!1&&e()<.7&&i.add("stoneD",Fe,t+Math.cos(o)*s*.25,d+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let u=Math.cos(o),g=Math.sin(o),_=Math.max(1,Math.floor(a/3.1));for(let[v,S,D,b]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let P=Math.max(1,Math.floor(D/2.8));for(let k=0;k<_;k++)for(let E=0;E<P;E++){if(k===0&&S===1&&E===Math.floor(P/2))continue;let R=(E-(P-1)/2)*(D/P),z=v?v*(b+.04):R,J=S?S*(b+.04):R,j=t+z*u+J*g,O=n-z*g+J*u,w=o+Math.atan2(v,S);i.add(e()<(h.lit??.55)?"winLit":"winDark",an,j,d+1.9+k*3.1,O,w,.9,1.25,1)}}let m=r/2+.05,f=t+m*g,M=n+m*u;return i.add("wood",an,f,d+1.05,M,o,1.2,2.1,1),h.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*g,n+(r/2+1.6)*u]}}function kr(i,e,t){let n=Dt(e,t);i.add("iron",kt,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",Fe,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",Mi,e,n+3.55,t,0,.42,.5,.42)}function kx(i,e){let t=new Wr,n=Vr(20261112),s=[],r=[],a=(u,g,_,m)=>_.some(f=>Math.hypot(u-f[0],g-f[1])<(f[2]||m)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],l=["wallA","wallB","wallC","wallW"],c=["roofA","roofB"];for(let u=-150;u<=150;u+=24)for(let g=-150;g<=160;g+=22){let _=u+(n()-.5)*6,m=g+(n()-.5)*5;if(Math.hypot(_,m)>158||a(_,m,o,0)||So(_,m)<8.5||Math.abs(_-Xi(m))<40||n()<.12)continue;let M=m>-10&&_>-70,v=9+n()*7,S=8+n()*6,D=(M?5.5:7)+n()*(M?4.5:8);kn(t,n,_,m,v,S,D,n()<.5?0:Math.PI/2,M?n()<.5?"wallB":"wallC":l[Math.floor(n()*4)],c[Math.floor(n()*2)],{lit:M?.4:.6,hip:n()<.25})}for(let[u,g,_,m]of $u.slice(0,6)){let f=Math.floor(Math.hypot(_-u,m-g)/22);for(let M=1;M<f;M++){let v=M/f,S=u+(_-u)*v,D=g+(m-g)*v,b=-(m-g),P=_-u,k=Math.hypot(b,P);kr(t,S+b/k*4.6,D+P/k*4.6)}}{let u=Dt(-18,14);kn(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",Fe,-12,u+3.2,22.5,.35,5.5,1.4,.05),t.add("white",Fe,-6.5,u+3,20.6,.35,2.4,1.7,.05),t.add("iron",kt,-15.5,u+2,24,0,.1,4,.1),t.add("iron",kt,-4.5,u+2,19.6,0,.1,4,.1),t.add("wood",Fe,-37,u+4.1,33,1.2,9,.35,7);for(let[g,_]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let m=Math.cos(1.2),f=Math.sin(1.2);t.add("wood",kt,-37+g*m+_*f,u+2,33-g*f+_*m,0,.35,4,.35)}t.add("stoneD",Fe,-39.5,u+1,35,1.2,2.6,2,2.2),t.add("ember",Fe,-39.5,u+2.05,35,1.2,1.9,.2,1.5),t.add("iron",Fe,-35.5,u+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",Fe,-35.5,u+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,u+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let u=Dt(0,-95);t.add("stone",Fe,0,u+10,-98,0,22,21,46),t.add("roofB",Gr,0,u+20.4,-98,0,24,10,47),t.add("stone",Fe,0,u+22,-70.5,0,11,45,10),t.add("roofB",Hr,0,u+53,-70.5,0,12,18,11),t.add("gold",Fe,0,u+64,-70.5,0,.3,4,.3),t.add("gold",Fe,0,u+64.6,-70.5,0,1.8,.3,.3),t.add("rose",kt,0,u+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",an,0,u+2.6,-65.42,0,3.4,5.2,1);for(let g=0;g<4;g++)t.add("stoneL",Fe,0,u-.3+g*-0+.2*(3-g),-63.6+g*.9,0,12+g*1.4,.4,1);for(let g=0;g<6;g++)for(let _ of[-1,1])t.add("rose",an,_*11.06,u+9,-116+g*7.2,_*Math.PI/2,2.2,8,1),t.add("stoneD",Fe,_*12,u+6.5,-112.4+g*7.2,0,1.6,13,1.6);for(let g of[30,36])for(let[_,m]of[[0,1],[1,0],[-1,0]])t.add("winDark",an,_*5.56,u+g,-70.5+(m?5.06:0),Math.atan2(_,m),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,u+5,-61,16767392,1.6,22])}{let u=Dt(-118,-22);kn(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),kn(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let g=0;g<26;g++)t.add("iron",kt,-96,u+1.4,-52+g*2.2,0,.12,2.8,.12);t.add("iron",Fe,-96,u+2.5,-24.5,0,.14,.14,56),t.add("iron",Fe,-96,u+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let u=Dt(-62,112);t.add("wallC",Fe,-62,u+5,122,.9,30,11,12),t.add("iron",kt,-62,u+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",an,-57.2,u+6,118.2,.9+Math.PI,7,6,1);for(let g=0;g<12;g++)t.add("wood",Fe,-74+g*2.6,u+.12,102+g*2.05,.9,.5,.2,5);t.add("iron",Fe,-60,u+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",Fe,-58.6,u+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let u=Dt(70,30);for(let g of[-1,1])t.add("stoneD",Fe,70+g*3.6*Math.cos(-1.2),u+3,30-g*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",Fe,70,u+7.2,30,-1.2,9.4,2,3.2),t.add("void",an,70+.4*Math.sin(-1.2),u+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let g of[-1,1]){let _=70+g*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),m=30-g*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",kt,_,u+.3,m,0,.16,.6,.16),t.add("lamp",Mi,_,u+.72,m,0,.2,.3,.2)}r.push([67,u+1.6,28,16762977,1.1,10])}kn(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),kn(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let M=0;M<9;M++)if(t.add("wood",Fe,188+M*2.2,1.1,24,0,2,.25,4.6),M%2===0)for(let v of[-1,1])t.add("wood",kt,188+M*2.2,1.1-1.6,24+v*2.1,0,.3,3.6,.3);let g=(M,v,S,D)=>{t.add(D,Mi,M,.55,v,S,2,1.3,5.2),t.add("void",Fe,M,1,v,S,1.5,.3,4.2),t.add("wood",Fe,M,.95,v,S,1.7,.1,.5)};g(206,29,.25,"wood"),g(203,6,-.2,"wallC"),g(204,48,.1,"wallB"),kn(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),kn(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),kr(t,186,21);let _=-56,m=Xi(_),f=3.6;t.add("stone",Fe,m,f,_,0,40,.8,6.5);for(let M of[-1,1])t.add("stone",Fe,m,f+.9,_+M*3,0,40,1,.5);for(let M of[-9,9])t.add("stoneD",Fe,m+M,f-3,_,0,2.4,6,6);kr(t,m-19,_+2.6),kr(t,m+19,_-2.6)}{let u=Dt(190,-175);t.add("stoneL",kt,190,u+4,-175,0,13,8,13),t.add("iron",Bx,190,u+8,-175,0,13,13,13),t.add("void",Fe,190,u+11.5,-171,0,1.6,5,6,-.6),t.add("wood",an,190,u+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let u=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[_,m,f]of u)kn(t,n,_,m,7.5,6.5,4.6,f,"wallA","snow",{lit:.7});let g=Dt(-250,-250);kn(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",Fe,-253.2,g+6,-227.6,.2,3,12,3),t.add("snow",Hr,-253.2,g+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",kt,-252,g+.5,-252,0,2.2,1,2.2),t.add("void",kt,-252,g+1.02,-252,0,1.7,.02,1.7);for(let _ of[-1,1])t.add("wood",kt,-252+_*1.1,g+1.6,-252,0,.16,2.4,.16);t.add("wood",Gr,-252,g+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",kt,-246,g+.2,-244,0,1.6,.4,1.6),t.add("ember",rr,-246,g+.8,-244,0,.9,1.2,.9),r.push([-246,g+1.6,-244,16747066,2,18])}{let u=Dt(3,190);t.add("wood",kt,3,u+1.4,190,0,.18,2.8,.18),t.add("wood",Fe,3.5,u+2.4,190,.2,2.2,.5,.08)}{let u=dt.x,g=dt.z,_=Dt(u,g),m=44;t.add("stoneD",sr,u,_+.02,g,0,72,.1,72),t.add("sand",sr,u,_+.06,g,0,45.6,.1,45.6),t.add("stoneD",sr,u,_+.09,g,0,5.4,.1,5.4),t.add("neon",sr,u,_+.1,g,0,4.6,.1,4.6),t.add("stoneD",sr,u,_+.11,g,0,4.2,.1,4.2),t.add("ember",sr,u,_+.12,g,0,1.1,.1,1.1);for(let f=0;f<m;f++){let M=(f+.5)/m*6.2832,v=Math.cos(M),S=Math.sin(M),D=-M+Math.PI/2,b=M>Math.PI?M-6.2832:M;if(Math.abs(b)<dt.gate+.05)continue;for(let E=0;E<4;E++){let R=24+E*2.1,z=6.2832*(R+1.1)/m+.06;t.add(E%2?"stone":"stoneL",Fe,u+v*R,_+(.9+E)/2,g+S*R,D,z,.9+E,2.2)}let P=32.8,k=6.2832*(P+.8)/m+.06;t.add("stone",Fe,u+v*P,_+4.3,g+S*P,D,k,8.6,1.4),f%2&&t.add("stoneL",Fe,u+v*P,_+9.1,g+S*P,D,k*.6,1,1.4),f%4===1&&(t.add("iron",kt,u+v*P,_+11.4,g+S*P,0,.14,5,.14),t.add(f%8===1?"banner":"flag",Fe,u+v*P-S*.95,_+13.1,g+S*P+v*.95,D,1.8,1.1,.06))}for(let f of[-1,1]){let M=f*(dt.gate+.11),v=u+Math.cos(M)*30.5,S=g+Math.sin(M)*30.5;t.add("stoneL",kt,v,_+6,S,0,4.6,12,4.6),t.add("roofA",rr,v,_+14.3,S,0,5.6,4.6,5.6),t.add("stoneD",kt,u+37.5,_+.6,g+f*5,0,1.2,1.2,1.2),t.add("ember",rr,u+37.5,_+1.6,g+f*5,0,.9,1.2,.9),r.push([u+37.5,_+2.6,g+f*5,16747066,1.8,18])}t.add("stone",Fe,u+30.5,_+9.8,g,0,4.4,3,11),t.add("banner",Fe,u+32.8,_+8.8,g,0,.08,3.4,3),t.add("gold",Fe,u+32.86,_+8.8,g,0,.08,1.4,.4),t.add("gold",Fe,u+32.86,_+9.1,g,0,.08,.4,1.3)}let h=[];for(let u of i.houses||[]){let g=Zu[u.id];if(!g)continue;let[_,m,f]=g,M=Dt(_,m),v=Math.cos(f),S=Math.sin(f),D,b=(P,k)=>[_+P*v+k*S,m-P*S+k*v];if(u.id==="h0"){for(let[z,J,j,O]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[w,q]=b(z,J);t.add("rock",Mi,w,M+O*.2,q,n()*3,j,O,j)}let[P,k]=b(0,1.2);t.add("void",Mi,P,M+1.2,k,f,4.4,4.6,2.4);let[E,R]=b(0,3.5);t.add("ember",rr,E,M+.4,R,0,.7,.9,.7),r.push([E,M+1.3,R,16747066,1.6,12]),D=b(0,4.2),t.solid(...b(0,-5),16,9)}else if(u.id==="h1")D=[72,27];else if(u.id==="h2"){t.add("stoneL",Fe,...(P=>[P[0],M+4,P[1]])(b(-5.5,0)),f,1,9,16),t.add("stoneL",Fe,...(P=>[P[0],M+2.6,P[1]])(b(5.5,-2)),f,1,6.2,11),t.add("stoneL",Fe,...(P=>[P[0],M+5,P[1]])(b(0,-8)),f,12,11,1),t.add("stoneL",Gr,...(P=>[P[0],M+10.4,P[1]])(b(0,-8)),f,12,4,1),t.add("roofB",Fe,...(P=>[P[0],M+8.4,P[1]])(b(-2.6,-3)),f,6.4,.3,9.5,0,-.5),t.add("rose",an,...(P=>[P[0],M+6.5,P[1]])(b(0,-7.44)),f,2,4.6,1),t.add("stoneD",Fe,...(P=>[P[0],M+.6,P[1]])(b(0,-5.6)),f,3,1.2,1.6);for(let[P,k]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(k,Mi,...(E=>[E[0],M+.25,E[1]])(b(P,-3.4)),0,.7,.5,.7);D=b(0,9),t.solid(...b(-5.5,0),1.2,16,f),t.solid(...b(0,-8),12,1.2,f)}else if(u.id==="h3"){let P=kn(t,n,_,m,22,14,11,f,"wallA","roofA",{lit:.85,hip:!0});for(let k of[-1,1]){let[E,R]=b(k*13.5,1);kn(t,n,E,R,6,9,13,f,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let k of[-1,1])kr(t,...b(k*3,10));D=P.door}else if(u.id==="h4"){t.add("stone",Fe,_,M+6,m,f,26,13,20);for(let[E,R]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[z,J]=b(E,R);t.add("stoneL",kt,z,M+9,J,0,7,19,7),t.add("roofB",rr,z,M+22,J,0,8.2,8,8.2),t.add("flag",Fe,z+.9,M+27.2,J,f,1.8,1,.06),t.add("iron",kt,z,M+27,J,0,.12,3,.12)}for(let E=-5;E<=5;E++){let[R,z]=b(E*2.3,10.2);E%2&&t.add("stone",Fe,R,M+13.4,z,f,1.2,1,.8)}let[P,k]=b(0,10.06);t.add("wood",an,P,M+2.4,k,f,4,5,1);for(let E of[-7,7])for(let R of[5,9]){let[z,J]=b(E,10.06);t.add("winLit",an,z,M+R,J,f,1.2,1.8,1)}D=b(0,12.5),t.solid(_,m,30,24,f)}else if(u.id==="h5"){t.add("obs",Fe,_,M+9,m,f,20,18,16),t.add("obs",Hr,_,M+24,m,f,16,12,13);for(let[E,R,z]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[J,j]=b(E,R);t.add("obs",Fe,J,M+z/2,j,f,5,z,5),t.add("obs",Hr,J,M+z+4,j,f,5.6,8,5.6),t.add("umbra",an,...(O=>[O[0],M+z-3,O[1]])(b(E,R+2.54)),f,1,3,1)}let[P,k]=b(0,8.06);t.add("umbra",an,P,M+3.4,k,f,3.4,6.8,1),t.add("neon",an,P,M+3.4,k+.02*v,f,.3,6.8,1),D=b(0,10.6),t.solid(_,m,30,18,f),r.push([D[0],M+4,D[1],9133302,2.4,22])}else if(u.id==="h6"){t.add("light",Fe,_,M+7,m,f,26,14,16),t.add("gold",Gr,_,M+14,m,f,28,8,17.4);for(let E=-4;E<=4;E++)for(let R of[3,7,11]){if(E===0&&R===3)continue;let[z,J]=b(E*2.8,8.06);t.add("sun",an,z,M+R,J,f,1.3,2.2,1)}let[P,k]=b(0,8.08);t.add("sun",an,P,M+3,k,f,3,6,1);for(let E=0;E<6;E++){let[R,z]=b(0,9+E*1.1);t.add("light",Fe,R,M-.2-E*.02,z,f,8+E,.5,1.1)}D=b(0,11.5),t.solid(_,m,26,16,f),r.push([D[0],M+6,D[1],16773312,3.2,40])}h.push({...u,x:D[0],z:D[1]})}let d=[],p=e.trees;for(let u=0;u<p*6&&d.length<p;u++){let g=(n()-.5)*860,_=(n()-.5)*860,m=Dt(g,_);if(Math.hypot(g,_)<176&&n()>.04||m<2.2||m>70||Math.abs(g-Xi(_))<16||So(g,_)<5||Math.hypot(g-318,_-300)<104||a(g,_,Object.values(Zu).map(v=>[v[0],v[1],24]),0)||a(g,_,[[-250,-250,44],[190,-175,16],[dt.x,dt.z,42]],0))continue;let M=_>150?1:.45;n()>M||d.push({x:g,y:m,z:_,s:.8+n()*.9,pine:m>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:h,trees:d}}var Ju=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function Hx(i,e,t,n){let[s,r,a,o]=Ju[e.r]||Ju[0],l=5+e.r*.5,c=Vr(77+e.r);i.add(r,Fe,0,n-.25,0,0,a,.5,o),i.add(s,Fe,0,n+l/2,-o/2,0,a,l,.5),i.add(s,Fe,-a/2,n+l/2,0,0,.5,l,o),i.add(s,Fe,a/2,n+l/2,0,0,.5,l,o),i.add("rug",Fe,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",Fe,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",Fe,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",rr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",Fe,0,n+3.8,-o/2+.6,0,1.6,l-3.2,.8),i.add("wood",Fe,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[u,g]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",kt,u*Math.min(2.6,a*.15),n+.47,g,0,.16,.95,.16);for(let u=-1;u<=1;u++)for(let g of[-1,1])i.add("wood",kt,u*1.3,n+.3,1+g*1.4,0,.55,.6,.55);i.add("white",kt,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",Mi,.5,n+1.25,1,0,.16,.3,.16);let h=Math.min(e.cap>=99?8:e.cap,8);for(let u=0;u<h;u++){let g=u%2?1:-1,_=Math.floor(u/2),m=g*(a/2-1.5),f=-o/2+2.6+_*2.6;if(f>o/2-1.5)break;i.add("wood",Fe,m,n+.35,f,0,2.2,.5,1.1),i.add("white",Fe,m,n+.66,f,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][u%4],Fe,m-g*.3,n+.75,f,0,1.5,.1,1.02)}for(let u of[-1,1])for(let g=-1;g<=1;g+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",an,u*(a/2-.27),n+2.6,g*o*.22,-u*Math.PI/2,1.3,1.9,1);let d=t.instruments||[],p=a/2-2;if(d.includes("i4")&&(i.add("wood",Fe,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",Fe,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),d.includes("i5")){for(let u=0;u<7;u++)i.add("gold",kt,-p+u*.34,n+1.6+Math.abs(3-u)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-u)*.6,.26);i.add("wood",Fe,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return d.includes("i1")&&(i.add("wood",Mi,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",Fe,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),d.includes("i3")&&(i.add("wallC",Mi,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",Fe,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(d.includes("i6")||d.includes("i2")||d.includes("i0"))&&(i.add("gold",Fe,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",Fe,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",Fe,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",an,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:l,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(u=>Math.abs(u[0])<a/2-2&&Math.abs(u[1])<o/2-1.5)}}var Gx=`
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
`;function ju(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let X=document.createElement("style");X.id="ew-css",X.textContent=Gx,document.head.appendChild(X)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
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
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=X=>r.querySelector(X),o=a(".ew-c"),l=new is({canvas:o,antialias:n,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),l.outputColorSpace=zt,l.toneMapping=Nr,l.toneMappingExposure=1.05,s.shadows&&(l.shadowMap.enabled=!0,l.shadowMap.type=Ur);let c=new Fi,h=new en(n?55:62,1,.3,2400),d=new $e(12085832);c.fog=new Ga(d,s.fog[0],s.fog[1]);{let X=new zi(l);c.environment=X.fromScene(new Js,.04).texture,X.dispose()}let p=new G(-.62,.36,.5).normalize(),u=new Xs(16769228,2761796,.75);c.add(u);let g=new ki(16768184,2.7);c.add(g,g.target),s.shadows&&(g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.06);let _=new Oe(new Yn(2e3,32,16),new $t({side:Zt,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));c.add(_);let m=new vt;c.add(m);{let X=document.createElement("canvas");X.width=256,X.height=128;let ee=X.getContext("2d"),oe=Vr(5);for(let C=0;C<26;C++){let H=40+oe()*176,K=46+oe()*40,le=18+oe()*34,y=ee.createRadialGradient(H,K,0,H,K,le);y.addColorStop(0,"rgba(255,255,255,.5)"),y.addColorStop(1,"rgba(255,255,255,0)"),ee.fillStyle=y,ee.fillRect(0,0,256,128)}let x=new Pn(X);for(let C=0;C<16;C++){let H=new Oe(new Oi(1,1),new At({map:x,transparent:!0,depthWrite:!1,fog:!1,color:new $e().setHSL(.04+oe()*.05,.75,.62+oe()*.2),opacity:.75})),K=oe()*6.28,le=500+oe()*900;H.position.set(Math.cos(K)*le,190+oe()*180,Math.sin(K)*le),H.scale.set(420+oe()*380,120+oe()*90,1),H.rotation.x=Math.PI/2,H.rotation.z=oe()*6.28,m.add(H)}}{let X=new Oi(900,900,s.seg,s.seg);X.rotateX(-Math.PI/2);let ee=X.attributes.position,oe=new Float32Array(ee.count*3),x=[0,0,0];for(let U=0;U<ee.count;U++){let B=ee.getX(U),T=ee.getZ(U),F=Dt(B,T);ee.setY(U,F),qu(B,T,F,x),oe[U*3]=Math.pow(x[0],2.2),oe[U*3+1]=Math.pow(x[1],2.2),oe[U*3+2]=Math.pow(x[2],2.2)}X.setAttribute("color",new Jt(oe,3));let C=X.toNonIndexed();C.computeVertexNormals(),X.dispose();let H=document.createElement("canvas");H.width=H.height=256;let K=H.getContext("2d"),le=Vr(31);K.fillStyle="#e4e4e4",K.fillRect(0,0,256,256);for(let U=0;U<2600;U++){let B=190+Math.floor(le()*65);K.fillStyle=`rgba(${B},${B},${B},.55)`;let T=1+le()*5;K.fillRect(le()*256,le()*256,T,T)}K.strokeStyle="rgba(70,60,55,.3)",K.lineWidth=1.6;for(let U=0;U<8;U++)for(let B=0;B<8;B++){let T=U%2*16;K.strokeRect(B*32+T+(le()-.5)*3,U*32+(le()-.5)*3,32,32)}let y=new Pn(H);y.wrapS=y.wrapT=vr,y.repeat.set(140,140),y.anisotropy=4,y.colorSpace=zt;let L=new Oe(C,new gn({vertexColors:!0,map:y,roughness:.96,metalness:0,envMapIntensity:.25}));L.receiveShadow=s.shadows,c.add(L);let N=new Oe(new qn(440,2400,48,1),new gn({color:4865826,roughness:1,envMapIntensity:.1}));N.rotation.x=-Math.PI/2,N.position.y=2.6,c.add(N)}let f=new Oe(new Oi(2400,2400),new gn({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));f.rotation.x=-Math.PI/2,f.position.y=.35,c.add(f);let M=new Oe(new ti(96,48),new gn({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));M.rotation.x=-Math.PI/2,M.position.set(318,1.32,300),c.add(M);let v=(X,ee=.9,oe=0,x)=>new gn(Object.assign({color:X,roughness:ee,metalness:oe,envMapIntensity:.35},x||{})),S=X=>new At({color:X,toneMapped:(s.bloom,!1)}),D={wallA:v(12098426),wallB:v(9405303),wallC:v(10246725),wallW:v(14867920),stone:v(9144208),stoneL:v(11644338),stoneD:v(4867664),roofA:v(5125424),roofB:v(3554376),wood:v(5913892),iron:v(3816774,.5,.7),snow:v(15660024,.7),white:v(16052712),rock:v(5591642,1),obs:v(1512479,.35,.6),gold:v(15254632,.3,.9),light:v(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:v(4029142),rug:v(8007466),flowerA:v(14243450),flowerB:v(15254090),flowerC:v(9071318),sand:v(13481610,1),banner:v(10234410),winLit:S(16762222),winDark:v(1712176,.2,.6),lamp:S(16767392),ember:S(16742954),rose:S(13208278),umbra:S(10976255),neon:S(61695),sun:S(16774084),void:v(197382,1)},b=kx(e,s),P=b.B.build(D,s.shadows);c.add(P);for(let[X,ee,oe,x,C,H]of b.lights.slice(0,n?12:6)){let K=new In(x,C*14,H,1.6);K.position.set(X,ee,oe),c.add(K)}let k=new vt;{let X=Dt(-70,100);k.position.set(-70,X+5.2,100);let ee=new Oe(new Mn(4.2,.28,10,48),S(8386303)),oe=new Oe(new ti(4.1,40),new At({color:1723647,transparent:!0,opacity:.55,side:Vt,blending:mn,depthWrite:!1})),x=new Oe(new qn(1.2,3.6,40),new At({color:9133302,transparent:!0,opacity:.5,side:Vt,blending:mn,depthWrite:!1}));k.add(ee,oe,x),k.scale.set(.8,1.25,1),k.rotation.y=.9;let C=new In(3842303,60,46,1.5);k.add(C),c.add(k),k.userData={m2:oe,m3:x}}{let X=new on(.22,.34,1,6).translate(0,.5,0),ee=new ln(1,1,7).translate(0,.5,0),oe=new Qa(1,1),x=b.trees.filter(y=>y.pine),C=b.trees.filter(y=>!y.pine),H=new Wt,K=new $e,le=(y,L,N,U)=>{let B=new Xa(y,L,Math.max(1,N.length));return N.forEach((T,F)=>{U(T,H),H.updateMatrix(),B.setMatrixAt(F,H.matrix),T._c&&B.setColorAt(F,T._c)}),B.count=N.length,B.castShadow=s.shadows,B.receiveShadow=!1,c.add(B),B};if(le(X,v(3811868,1),b.trees,(y,L)=>{L.position.set(y.x,y.y-.3,y.z),L.scale.set(y.s,y.s*(y.pine?2.2:3.2),y.s),L.rotation.set(0,0,0)}),x.forEach(y=>{y._c=K.clone().setHSL(.3+y.c*.06,.42,.11+y.c*.06)}),C.forEach(y=>{y._c=K.clone().setHSL(.02+y.c*.11,.72,.36+y.c*.14)}),le(ee,v(16777215,1),x,(y,L)=>{L.position.set(y.x,y.y+y.s*1.3,y.z),L.scale.set(y.s*2.1,y.s*6.2,y.s*2.1),L.rotation.set(0,y.c*6,0)}),le(oe,new gn({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),C,(y,L)=>{L.position.set(y.x,y.y+y.s*4.1,y.z),L.scale.set(y.s*2.5,y.s*2.1,y.s*2.5),L.rotation.set(y.c,y.c*6,0)}),s.grass){let y=Vr(9),L=[];for(let N=0;N<s.grass*5&&L.length<s.grass;N++){let U=(y()-.5)*760,B=(y()-.5)*760,T=Dt(U,B);Math.hypot(U,B)<184||Math.hypot(U-dt.x,B-dt.z)<39||T<2.3||T>44||Math.abs(U-Xi(B))<15||So(U,B)<4||L.push({x:U,y:T,z:B,s:.5+y()*.9,c:y(),_c:K.clone().setHSL(.08+y()*.1,.5,.3+y()*.12)})}le(new ln(.5,1,4).translate(0,.5,0),v(16777215,1),L,(N,U)=>{U.position.set(N.x,N.y-.05,N.z),U.scale.set(N.s*.9,N.s*1.1,N.s*.9),U.rotation.set(0,N.c*6,0)}).castShadow=!1}}let E={},R=new Wr;b.houses.forEach((X,ee)=>{let x=ee*80,C=new Wr,H=Hx(C,X,e,-400);for(let K in C.b)for(let le of C.b[K])le.translate(x,0,0),(R.b[K]=R.b[K]||[]).push(le);E[X.id]={...H,ox:x,oy:-400,hs:X}});let z=R.build(D,!1);z.visible=!1,c.add(z);let J=new In(16756848,0,40,1.4),j=new In(16773341,0,60,1.2);c.add(J,j);let O=hs(e.hero);c.add(O.group);let w={x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};w.y=Dt(w.x,w.z);for(let X of Yu)if(Math.hypot(w.x-X[0],w.z-X[1])<X[2]){w.zone=X[3];break}let q=(e.mounts||[]).filter(X=>ii[X.id]),te=Math.max(0,q.findIndex(X=>X.id===e.mount)),V=null;function ie(X){if(w.mount&&(c.remove(w.mount.group),gi(w.mount.group),w.mount=null,w.mountId=null),X&&q.length&&!w.inside){let ee=q[te].id;w.mount=ii[ee].make(),w.mountId=ee,uo(w.mount.group),c.add(w.mount.group),V&&V.arm(!1),w.mount.group.traverse(oe=>{oe.isMesh&&(oe.castShadow=s.shadows)}),be("En selle",q[te].name)}a('[data-w="mount"]').classList.toggle("on",!!w.mount)}q.length||(a('[data-w="mount"]').disabled=!0);let pe=[],ye=X=>{let ee=document.createElement("canvas");ee.width=256,ee.height=64;let oe=ee.getContext("2d");oe.font="600 26px Oxanium, Barlow, sans-serif",oe.textAlign="center",oe.shadowColor="#000",oe.shadowBlur=8,oe.fillStyle="#eaffff",oe.fillText(X,128,40);let x=new ss(new Bi({map:new Pn(ee),transparent:!0,depthWrite:!1,fog:!1}));return x.scale.set(2.6,.65,1),x};function Re(X,ee,oe,x,C,H){let K=Fx[X.id];if(!K)return;let le=hs(Object.assign({},K,{fx:Object.assign({lod:!0},K.fx)}));le.group.position.set(ee,oe,x),le.group.rotation.y=C;let y=ye(X.name.split(" ").slice(0,2).join(" "));y.position.y=le.height/le.group.scale.y+.32,le.group.add(y),le.group.traverse(L=>{L.isMesh&&(L.castShadow=s.shadows&&!H)}),c.add(le.group),pe.push({...X,av:le,x:ee,y:oe,z:x,ry:C,inside:H||null,lb:y,li:0})}for(let X of e.npcs||[]){let ee=zx[X.id];ee&&Re(X,ee[0],Dt(ee[0],ee[1]),ee[1],ee[2])}for(let X in E){let ee=E[X];(e.npcs||[]).filter(oe=>oe.recruited).slice(0,ee.spots.length).forEach((oe,x)=>{let[C,H]=ee.spots[x];Re(oe,ee.ox+C,ee.oy,H,Math.atan2(-C,1-H),X)})}z.visible=!1;function se(X,ee){mt(!0),w.x=X,w.z=ee,w.y=Dt(X,ee),Ee=!0}V=Xu({scene:c,st:w,player:O,data:e,H:Dt,cam:h,root:r,pc:n,toast:(X,ee)=>be(X,ee),cb:t,teleport:se,dismount:()=>ie(!1),dash:(X,ee)=>{w.dashV=X/ee,w.dashT=ee},inputDir:()=>w.inDir});let me={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},we={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Ye=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+me[O.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+we[O.stance]},Le=(X,ee)=>{let oe=Object.keys(X);return oe[(oe.indexOf(ee)+1)%oe.length]};Ye();let Ve=null;if(s.bloom)try{Ve=new Mo(l),Ve.addPass(new bo(c,h)),Ve.addPass(new tr(new Me(256,256),.42,.7,.82)),Ve.addPass(new wo)}catch{Ve=null}function We(){let X=r.clientWidth,ee=r.clientHeight;if(X>ee){let oe=r.querySelector(".ew-rot");oe&&oe.classList.remove("on")}l.setSize(X,ee,!1),h.aspect=X/ee,h.fov=n?55:X>ee?50:62,h.updateProjectionMatrix(),Ve&&Ve.setSize(X,ee)}We(),window.addEventListener("resize",We);let Xe=a(".ew-map"),Ie=Xe.getContext("2d"),W=document.createElement("canvas");W.width=W.height=248;{let X=W.getContext("2d"),ee=X.createImageData(248,248),oe=[0,0,0];for(let x=0;x<248;x++)for(let C=0;C<248;C++){let H=(C/247-.5)*900,K=(x/247-.5)*900,le=Dt(H,K);qu(H,K,le,oe);let y=(x*248+C)*4,L=le<.4;ee.data[y]=L?70:oe[0]*235,ee.data[y+1]=L?90:oe[1]*235,ee.data[y+2]=L?120:oe[2]*235,ee.data[y+3]=255}X.putImageData(ee,0,0),X.strokeStyle="#c9b48a",X.lineWidth=2,X.beginPath(),X.arc((dt.x/900+.5)*248,(dt.z/900+.5)*248,8,0,7),X.stroke(),X.fillStyle="#2a2420";for(let x of b.B.boxes){let C=(x[0]/900+.5)*248,H=(x[2]/900+.5)*248;X.fillRect(C,H,Math.max(1.5,(x[1]-x[0])/900*248),Math.max(1.5,(x[3]-x[2])/900*248))}}function Ae(){let ee=w.inside?0:w.x,oe=w.inside?0:w.z,x=(ee/900+.5)*248,C=(oe/900+.5)*248;if(Ie.setTransform(1,0,0,1,0,0),Ie.fillStyle="#0b0b12",Ie.fillRect(0,0,248,248),w.inside){Ie.fillStyle="#7ff6ff",Ie.font="600 20px Oxanium, sans-serif",Ie.textAlign="center",Ie.fillText("Int\xE9rieur",124,130);return}Ie.translate(124,124),Ie.scale(2.2,2.2),Ie.translate(-x,-C),Ie.drawImage(W,0,0);let H=(K,le,y,L)=>{Ie.fillStyle=y,Ie.beginPath(),Ie.arc((K/900+.5)*248,(le/900+.5)*248,L,0,7),Ie.fill()};for(let K of b.houses)H(K.x,K.z,"#ffd479",2.6);for(let K of pe)K.inside||H(K.x,K.z,"#7ff6ff",1.7);H(-70,100,"#3aa0ff",2.4),H(dt.x,dt.z,"#ff4d6d",2.2);for(let K of V.enemies)K.type!=="dummy"&&K.state!=="dead"&&H(K.x,K.z,"#ff4d6d",1.5);Ie.setTransform(1,0,0,1,124,124),Ie.rotate(-w.yaw+Math.PI),Ie.fillStyle="#fff",Ie.strokeStyle="#000",Ie.lineWidth=2,Ie.beginPath(),Ie.moveTo(0,-9),Ie.lineTo(6.5,7),Ie.lineTo(0,3.5),Ie.lineTo(-6.5,7),Ie.closePath(),Ie.stroke(),Ie.fill()}let fe=0;function be(X,ee=""){let oe=a(".ew-zone");oe.querySelector("b").textContent=X,oe.querySelector("i").textContent=ee,oe.querySelector("i").style.display=ee?"":"none",oe.classList.add("on"),clearTimeout(fe),fe=setTimeout(()=>oe.classList.remove("on"),3200)}let he={},ze={mx:0,mz:0,jump:!1},Se=null,I=(X,ee)=>{if(w.paused&&ee&&X.code==="Escape"){de(!1);return}he[X.code]=ee;let oe=(X.key||"").toLowerCase();ee&&(X.code==="Escape"?w.talking?Pe():de(!0):w.talking?(oe==="e"||oe==="f"||X.code==="Enter"||X.code==="Space")&&(X.preventDefault(),Ue()):oe==="e"||oe==="f"||X.code==="Enter"?et():oe==="m"?w.mount&&q.length>1&&he.ShiftLeft?(te=(te+1)%q.length,ie(!0)):ie(!w.mount):oe==="c"&&q.length>1?(te=(te+1)%q.length,w.mount?ie(!0):be(q[te].name,"Monture choisie")):X.code==="Space"?(X.preventDefault(),ze.jump=!0):oe==="r"?V.toggleArm():oe==="x"?V.attack():oe==="v"?V.dodge():/^(Digit|Numpad)[1-5]$/.test(X.code)&&V.skill(+X.code.slice(-1)))},A=X=>I(X,!0),ne=X=>I(X,!1);window.addEventListener("keydown",A),window.addEventListener("keyup",ne);let ue=null,_e={id:null,ox:0,oy:0},ve=a(".ew-stick"),qe=X=>{if(!X.target.closest("button,.ew-dlg,.ew-menu,.ew-map")){if(!n&&X.clientX<r.clientWidth*.46&&X.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&_e.id===null){_e.id=X.pointerId,_e.ox=X.clientX,_e.oy=X.clientY,ve.style.display="block",ve.style.left=X.clientX+"px",ve.style.top=X.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",ve.firstChild.style.transform="";return}ue||(ue={id:X.pointerId,x:X.clientX,y:X.clientY,x0:X.clientX,y0:X.clientY,t:performance.now(),b:X.button})}},De=X=>{if(X.pointerId===_e.id){let ee=X.clientX-_e.ox,oe=X.clientY-_e.oy,x=Math.hypot(ee,oe),C=52;x>C&&(ee*=C/x,oe*=C/x),ve.firstChild.style.transform=`translate(${ee}px,${oe}px)`,ze.mx=ee/C,ze.mz=oe/C}else ue&&X.pointerId===ue.id&&(w.camYaw-=(X.clientX-ue.x)*(n?.0042:.0062),w.camPitch=Math.max(-.25,Math.min(1.2,w.camPitch+(X.clientY-ue.y)*(n?.003:.0045))),ue.x=X.clientX,ue.y=X.clientY)},ke=X=>{X.pointerId===_e.id&&(_e.id=null,ze.mx=ze.mz=0,ve.style.display="none"),ue&&X.pointerId===ue.id&&(n&&X.type==="pointerup"&&performance.now()-ue.t<300&&Math.hypot(X.clientX-ue.x0,X.clientY-ue.y0)<6&&(ue.b===0?V.attack():ue.b===2&&V.dodge()),ue=null),X.pointerId===je&&(je=null,V.held=!1)},je=null;r.addEventListener("pointerdown",X=>{let ee=X.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!ee||w.paused)return;X.preventDefault(),ee._pd=performance.now();let oe=ee.dataset.w;oe==="jump"?ze.jump=!0:oe==="run"?(w.run=!w.run,ee.classList.toggle("on",w.run)):oe==="mount"?ie(!w.mount):et()}),r.addEventListener("pointerdown",X=>{let ee=X.target.closest("[data-c]");if(!ee||w.paused)return;X.preventDefault();let oe=ee.dataset.c;oe==="draw"?V.toggleArm():oe==="dodge"?V.dodge():oe==="0"?(V.attack(),V.held=!0,je=X.pointerId):V.skill(+oe)}),r.addEventListener("pointerdown",qe),r.addEventListener("pointermove",De),r.addEventListener("pointerup",ke),r.addEventListener("pointercancel",ke);let it=X=>{w.camDist=Math.max(2.6,Math.min(22,w.camDist*(X.deltaY>0?1.1:.9))),X.preventDefault()};r.addEventListener("wheel",it,{passive:!1}),r.addEventListener("contextmenu",X=>X.preventDefault()),r.addEventListener("click",X=>{let ee=X.target.closest("[data-w]");if(!ee)return;let oe=ee.dataset.w;if(ee._pd&&performance.now()-ee._pd<800){ee._pd=0;return}if(oe==="act")et();else if(oe==="mount")ie(!w.mount);else if(oe==="run")w.run=!w.run,ee.classList.toggle("on",w.run);else if(oe==="jump")ze.jump=!0;else if(oe==="dnext")Ue();else if(oe==="dclose")Pe();else if(oe==="menu")de(!0);else if(oe==="resume")de(!1);else if(oe==="home")se(-6,34),de(!1);else if(oe==="arena")ie(!1),se(dt.x+40,dt.z),w.yaw=-Math.PI/2,w.camYaw=Math.PI/2,de(!1);else if(oe==="mv"||oe==="stn")O.setStyle(oe==="mv"?{move:Le(me,O.move)}:{stance:Le(we,O.stance)}),Ye(),t.onStyle&&t.onStyle({move:O.move,stance:O.stance});else if(oe==="fs")nt(),a(".ew-rot").classList.remove("on"),de(!1);else if(oe==="quit")ct();else if(oe==="mode"){let x=[w.x,w.z];Tt.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",w.inside?null:x)}});function de(X){w.paused=X,a(".ew-mm").classList.toggle("on",X),X||a(".ew-wsel").classList.remove("on")}let tt={n:1,loop:!1};function st(){let X=V.arena.best+1;tt.n=Math.max(1,Math.min(X,tt.n));let ee=tt.n,oe=t.wavePreview?t.wavePreview(ee):null;a(".ew-ws-n").textContent=ee,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+X+(V.arena.best?" \xB7 record "+V.arena.best:""),a(".ew-ws-rw").innerHTML=(ee%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":ee%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(oe?"R\xE9compense : <b>+"+oe.x+" XP</b> \xB7 <b>+"+oe.k+" kinahs</b> \xE0 chaque victoire":""),a('[data-ws="loop"]').classList.toggle("on",tt.loop),a('[data-ws="loop"]').textContent=(tt.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let x=5*Math.floor(X/5),C=a('[data-ws="boss"]');C.style.display=x>=5?"":"none",C.textContent="Dernier champion ouvert : vague "+x}function Qe(){tt.n=V.arenaStart(),w.paused=!0,st(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",X=>{let ee=X.target.closest("[data-ws]");if(!ee)return;let oe=ee.dataset.ws;if(oe==="x"||oe==="go"){a(".ew-wsel").classList.remove("on"),w.paused=!1,oe==="go"&&V.startArena(tt.n,tt.loop);return}oe==="loop"?tt.loop=!tt.loop:oe==="boss"?tt.n=5*Math.floor((V.arena.best+1)/5):tt.n+=+oe,st()});let Ze=!1,He=()=>{try{let X=screen.orientation;return X&&X.lock?X.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function nt(){let X=document.documentElement,ee=X.requestFullscreen||X.webkitRequestFullscreen;if(!ee)return He();let oe=null;try{oe=ee.call(X,{navigationUI:"hide"}),Ze=!0}catch{oe=null}return(oe&&oe.then?oe:Promise.resolve()).then(He,He)}n||He().then(X=>{if(!X&&r.clientHeight>r.clientWidth&&!_t){let ee=a(".ew-rot");ee.classList.add("on"),setTimeout(()=>ee.classList.remove("on"),9e3)}});function ct(){let X=w.inside?null:[Math.round(w.x),Math.round(w.z)];Tt.dispose(),t.onExit&&t.onExit(X)}function et(){!Se||w.talking||(Se.kind==="npc"?Y(Se.npc):Se.kind==="house"?Ke(Se.id):Se.kind==="exit"?mt():Se.kind==="arena"?Qe():Se.kind==="rift"&&t.onRift&&(Tt.dispose(),t.onRift([Math.round(w.x),Math.round(w.z)])))}let Be=0;function ge(X){let ee=X.lines&&X.lines.length?X.lines:["\u2026"],oe=ee[X.li%ee.length],x=a(".ew-dlg p");x.textContent="",clearInterval(Be);let C=0;Be=setInterval(()=>{C+=2,x.textContent=oe.slice(0,C),C>=oe.length&&clearInterval(Be)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(X.name,Object.assign(document.createElement("small"),{textContent:X.role||""})),a(".ew-bond").textContent=X.bond?"Lien "+"\u2665".repeat(Math.min(10,X.bond)):"",a('[data-w="dnext"]').style.display=ee.length>1?"":"none"}function Y(X){w.talking=X,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),ge(X);let ee=Math.atan2(w.x-X.x,w.z-X.z);X.av.group.rotation.y=ee,w.yaw=ee+Math.PI,t.onTalk&&t.onTalk(X.id)}function Ue(){let X=w.talking;if(!X)return;let ee=a(".ew-dlg p"),oe=X.lines||[],x=oe[X.li%Math.max(1,oe.length)]||"";if(ee.textContent.length<x.length){clearInterval(Be),ee.textContent=x;return}if(X.li++,X.li%Math.max(1,oe.length)===0){Pe();return}ge(X)}function Pe(){clearInterval(Be),w.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let Je=null;function Ke(X){let ee=E[X];ee&&(ie(!1),Je=[w.x,w.z,w.yaw],w.inside=X,w.x=ee.ox+ee.door[0],w.z=ee.door[1]-.6,w.y=ee.oy,w.yaw=Math.PI,w.camYaw=0,w.camDist=Math.min(w.camDist,6),z.visible=!0,P.visible=!1,c.fog.near=60,c.fog.far=200,J.position.set(ee.ox,ee.oy+1.6,-ee.D/2+2.2),J.intensity=90,j.position.set(ee.ox,ee.oy+ee.h-.6,1.5),j.intensity=ee.hs.r>=6?160:ee.hs.r===5?50:70,j.color.set(ee.hs.r>=6?16774084:ee.hs.r===5?10976255:16773341),g.intensity=0,u.intensity=.35,be(ee.hs.name,ee.hs.cap>=99?"Places illimit\xE9es":ee.hs.cap+" places"))}function mt(X){w.inside&&(w.inside=null,z.visible=!1,P.visible=!0,c.fog.near=s.fog[0],c.fog.far=s.fog[1],J.intensity=j.intensity=0,g.intensity=2.9,u.intensity=.7,Je&&!X&&(w.x=Je[0],w.z=Je[1],w.yaw=Je[2]+Math.PI),w.y=Dt(w.x,w.z))}let gt=new G,lt=new G,ft=performance.now(),_t=!1,Lt=0,Ee=!0;function un(X){if(_t)return;requestAnimationFrame(un);let ee=Math.min(.05,(X-ft)/1e3);if(ft=X,w.paused)return;w.t+=ee;let oe=ze.mx,x=ze.mz;(he.KeyW||he.ArrowUp)&&(x-=1),(he.KeyS||he.ArrowDown)&&(x+=1),(he.KeyA||he.ArrowLeft)&&(oe-=1),(he.KeyD||he.ArrowRight)&&(oe+=1);let C=Math.min(1,Math.hypot(oe,x));(w.talking||!V.moveK())&&(C=0);let H=w.run||he.ShiftLeft||he.ShiftRight,K=O.move,le=K==="levitation"&&!w.mount,y=K==="levitation"?[11,16]:K==="ninja"?[10.5,15.5]:[9.5,14],L=(w.mount?9.5*ii[w.mountId].speed:H?y[1]:y[0])*(w.inside?.45:1),N=C*L;if(w.speed+=(N-w.speed)*Math.min(1,ee*(w.mount?3:le?3.4:14)),w.inDir=C>.05?Math.atan2(oe,x)+w.camYaw:null,C>.05&&w.dashT<=0){let Te=w.inDir-w.yaw;for(;Te>Math.PI;)Te-=6.2832;for(;Te<-Math.PI;)Te+=6.2832;w.yaw+=Te*Math.min(1,ee*(w.mount?5:le?6.5:18))}w.dashT>0&&(w.dashT-=ee,w.speed=w.dashV);let U=Math.sin(w.yaw)*w.speed*ee,B=Math.cos(w.yaw)*w.speed*ee,T=w.x+U,F=w.z+B;if(w.inside){let xe=E[w.inside];T=Math.max(xe.ox-xe.W/2+.8,Math.min(xe.ox+xe.W/2-.8,T)),F=Math.max(-xe.D/2+1.9,Math.min(xe.D/2-.7,F))}else{T=Math.max(-438,Math.min(438,T)),F=Math.max(-438,Math.min(438,F));let xe=w.mount?1.1:.55;for(let Te of b.B.boxes)if(T>Te[0]-xe&&T<Te[1]+xe&&F>Te[2]-xe&&F<Te[3]+xe){let yt=T-(Te[0]-xe),rt=Te[1]+xe-T,Ut=F-(Te[2]-xe),jn=Te[3]+xe-F,Kt=Math.min(yt,rt,Ut,jn);Kt===yt?T=Te[0]-xe:Kt===rt?T=Te[1]+xe:Kt===Ut?F=Te[2]-xe:F=Te[3]+xe}{let Te=T-dt.x,yt=F-dt.z,rt=Math.hypot(Te,yt);if(rt>dt.r-.5&&rt<dt.wall+.6&&Math.abs(Math.atan2(yt,Te))>dt.gate){let Ut=(rt<(dt.r+dt.wall)/2?dt.r-.5:dt.wall+.6)/rt;T=dt.x+Te*Ut,F=dt.z+yt*Ut}}for(let Te of pe)if(!Te.inside){let yt=Math.hypot(T-Te.x,F-Te.z);yt<.8&&yt>.001&&(T=Te.x+(T-Te.x)/yt*.8,F=Te.z+(F-Te.z)/yt*.8)}}w.x=T,w.z=F;let Z=w.inside?E[w.inside].oy:Math.max(Dt(w.x,w.z),Math.abs(w.x-Xi(w.z))<30&&Math.abs(w.z+56)<3.3&&Math.abs(w.x-Xi(-56))<20?4:-99,Math.abs(w.z-24)<2.3&&w.x>186&&w.x<208?1.22:-99,Math.hypot(w.x-318,w.z-300)<96?1.32:-99,le?.4:-99);if(ze.jump&&(w.onGround||w.jumps<2)&&!w.mount&&!w.talking&&!w.down){let xe=!w.onGround;w.vy=xe?8.2:8.6,w.jumps=xe?2:1,w.onGround=!1,xe&&O.play("flip",.62)}ze.jump=!1,w.vy-=24*ee,w.y+=w.vy*ee,w.y<=Z?(w.y=Z,w.vy=0,w.onGround=!0,w.jumps=0):w.y-Z>.35&&(w.onGround=!1);{let xe=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(w.speed-10.5)/5))*7;Math.abs(h.fov-xe)>.05&&(h.fov+=(xe-h.fov)*Math.min(1,ee*5),h.updateProjectionMatrix())}let $=!w.inside&&!le&&w.y<-.75?-.75-w.y:0,ae=O.group;if(w.mount){let xe=w.mount;xe.group.position.set(w.x,w.y+$,w.z),xe.group.rotation.y=w.yaw,xe.update(ee,w.speed/8),ae.position.set(w.x-Math.sin(w.yaw)*-xe.seat.z,w.y+$+xe.seat.y-O.seatDrop,w.z-Math.cos(w.yaw)*-xe.seat.z),ae.rotation.y=w.yaw,O.update(ee,{riding:!0,wide:xe.wide})}else ae.position.set(w.x,w.y+$,w.z),ae.rotation.y=w.yaw,O.update(ee,{speed:w.speed/4.6,down:w.down});V.update(ee);let Q=(w.mount?w.mount.seat.y:0)+O.height*.82,ce=w.camDist*(w.mount?1.45:1)*(w.talking?.62:1),Ce=Math.cos(w.camPitch);gt.set(w.x,w.y+$+Q,w.z);for(let xe of[1,.72,.5,.32,.18])if(lt.set(gt.x+Math.sin(w.camYaw)*Ce*ce*xe,gt.y+Math.sin(w.camPitch)*ce*xe,gt.z+Math.cos(w.camYaw)*Ce*ce*xe),w.inside||lt.y-w.y>16||!b.B.boxes.some(Te=>lt.x>Te[0]-.4&&lt.x<Te[1]+.4&&lt.z>Te[2]-.4&&lt.z<Te[3]+.4))break;if(w.inside){let xe=E[w.inside];lt.x=Math.max(xe.ox-xe.W/2+.5,Math.min(xe.ox+xe.W/2-.5,lt.x)),lt.z=Math.max(-xe.D/2+.6,Math.min(xe.D/2+9,lt.z)),lt.y=Math.max(xe.oy+.6,Math.min(xe.oy+xe.h+4,lt.y))}else{let xe=Math.max(Dt(lt.x,lt.z),.35)+.7;lt.y<xe&&(lt.y=xe)}Ee?(h.position.copy(lt),Ee=!1):h.position.lerp(lt,Math.min(1,ee*12)),h.lookAt(gt),V.shake>.01&&(h.position.x+=(Math.random()-.5)*V.shake*.5,h.position.y+=(Math.random()-.5)*V.shake*.4),_.position.copy(h.position),m.position.x=w.t*2.2%300,_.visible=m.visible=!w.inside,f.visible=M.visible=!w.inside,g.position.set(w.x+p.x*120,w.y+p.y*120+20,w.z+p.z*120),g.target.position.set(w.x,w.y,w.z),k.rotation.y+=ee*.25,k.userData.m3.rotation.z-=ee*1.4,k.userData.m2.material.opacity=.45+Math.sin(w.t*2.6)*.14;let Ge=null,ot=1e9;for(let xe of pe){let Te=xe.inside===w.inside;if(xe.av.group.visible=Te,!Te)continue;let yt=Math.hypot(w.x-xe.x,w.z-xe.z);xe.lb.visible=yt<26&&yt>2.6,yt<40&&xe.av.update(ee,{});for(let rt of xe.av.inks)rt.visible=yt<32;if(yt<9&&!w.talking){let rt=Math.atan2(w.x-xe.x,w.z-xe.z)-xe.av.group.rotation.y;for(;rt>Math.PI;)rt-=6.2832;for(;rt<-Math.PI;)rt+=6.2832;xe.av.group.rotation.y+=rt*Math.min(1,ee*3)}yt<3.2&&yt<ot&&(ot=yt,Ge={kind:"npc",npc:xe,text:"Parler \xE0 "+xe.name.split(" ")[0]})}if(w.inside){let xe=E[w.inside];Math.hypot(w.x-xe.ox-xe.door[0],w.z-xe.door[1])<2.2&&!Ge&&(Ge={kind:"exit",text:"Sortir"})}else{for(let xe of b.houses){let Te=Math.hypot(w.x-xe.x,w.z-xe.z);Te<4.5&&Te<ot&&(ot=Te,Ge={kind:"house",id:xe.id,text:"Entrer : "+xe.name})}t.onRift&&Math.hypot(w.x+70,w.z-100)<6&&!Ge&&(Ge={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!Ge&&!V.arena.on&&!w.down&&Math.hypot(w.x-dt.x,w.z-dt.z)<3.4&&(Ge={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+V.arenaStart()})}Se=Ge;let Ht=a(".ew-prompt");if(Ge&&!w.talking){Ht.classList.add("on");let xe=Ht.firstChild,Te=(n?"[E]  ":"")+Ge.text;xe.textContent!==Te&&(xe.textContent=Te)}else Ht.classList.remove("on");if(!w.inside){let xe="",Te="";for(let yt of Yu)if(Math.hypot(w.x-yt[0],w.z-yt[1])<yt[2]){xe=yt[3],Te=yt[4];break}xe&&xe!==w.zone&&be(xe,Te),w.zone=xe}(Lt+=ee)>.12&&(Lt=0,Ae()),Ve?Ve.render():l.render(c,h)}let Tt={combat:V,player:O,dispose(){if(!_t){_t=!0,V.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),Ze&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(Be),clearTimeout(fe),window.removeEventListener("keydown",A),window.removeEventListener("keyup",ne),window.removeEventListener("resize",We),gi(c),Ve&&Ve.dispose&&Ve.dispose(),l.dispose(),l.forceContextLoss&&l.forceContextLoss(),r.remove()}},state:w,teleport:(X,ee)=>se(X,ee),enter:Ke,mountOn:()=>ie(!0),look(X,ee,oe){w.camYaw=X,w.camPitch=ee,oe&&(w.camDist=oe)}};return requestAnimationFrame(X=>{ft=X,un(X),setTimeout(()=>{let ee=a(".ew-load");ee.style.opacity=0,setTimeout(()=>ee.remove(),900),be("Vesp\xE9rane","Ciel couleur de rouille")},350)}),Tt}window.Elyos3D={avatarView:ku,startWorld:ju,groundHeight:Dt,DEFAULT_LOOK:pc,HAIR_STYLES:zu,STANCES:go,MOVES:xo,MOUNT_SPEED:Object.fromEntries(Object.entries(ii).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
