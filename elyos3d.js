(()=>{var Qu=0,_c=1,ed=2;var jh=1,Lr=2,oi=3,Ci=0,qt=1,Ht=2;var Kn=0,Ti=1,dn=2,yc=3,vc=4,td=5,Ji=100,nd=101,id=102,Mc=103,bc=104,sd=200,rd=201,ad=202,od=203,cl=204,hl=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,xd=0,_d=1,yd=2,Ma=3,vd=4,Md=5,bd=6,wd=7,tc=0,Sd=1,Ed=2,jn=0,nc=1,ic=2,sc=3,Dr=4,Td=5,rc=6;var Qh=300,Ns=301,Os=302,ul=303,dl=304,io=306,_r=1e3,Wn=1001,fl=1002,Kt=1003,wc=1004;var To=1005;var Un=1006,Ad=1007;var yr=1008;var Ai=1009,Rd=1010,Cd=1011,ac=1012,eu=1013,Si=1014,Ei=1015,Xn=1016,tu=1017,nu=1018,ji=1020,Pd=1021,Sn=1023,Id=1024,Ld=1025,Qi=1026,zs=1027,Dd=1028,iu=1029,Ud=1030,su=1031,ru=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Sc=35840,Ec=35841,Tc=35842,Ac=35843,au=36196,Rc=37492,Cc=37496,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Uc=37812,Nc=37813,Oc=37814,zc=37815,Fc=37816,Bc=37817,kc=37818,Hc=37819,Gc=37820,Vc=37821,Io=36492,Wc=36494,Xc=36495,Nd=36283,qc=36284,Yc=36285,Zc=36286;var ba=2300,wa=2301,Lo=2302,Jc=2400,$c=2401,Kc=2402;var ou=3e3,es=3001,Od=3200,zd=3201,so=0,Fd=1,Nn="",Nt="srgb",di="srgb-linear",oc="display-p3",ro="display-p3-linear",Sa="linear",Rt="srgb",Ea="rec709",Ta="p3";var cs=7680;var jc=519,Bd=512,kd=513,Hd=514,lu=515,Gd=516,Vd=517,Wd=518,Xd=519,pl=35044;var Qc="300 es",ml=1035,hi=2e3,Aa=2001,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Do=Math.PI/180,Ra=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function un(i,e,t){return Math.max(e,Math.min(t,i))}function qd(i,e){return(i%e+e)%e}function Uo(i,e,t){return(1-t)*i+t*e}function eh(i){return(i&i-1)===0&&i!==0}function gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],p=n[2],d=n[5],m=n[8],x=s[0],g=s[3],h=s[6],y=s[1],_=s[4],b=s[7],I=s[2],C=s[5],T=s[8];return r[0]=a*x+o*y+l*I,r[3]=a*g+o*_+l*C,r[6]=a*h+o*b+l*T,r[1]=c*x+u*y+f*I,r[4]=c*g+u*_+f*C,r[7]=c*h+u*b+f*T,r[2]=p*x+d*y+m*I,r[5]=p*g+d*_+m*C,r[8]=p*h+d*b+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,p=o*l-u*r,d=c*r-a*l,m=t*f+n*p+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new yt;function cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Ca("canvas");return i.style.display="block",i}var th={};function pr(i){i in th||(th[i]=!0,console.warn(i))}var nh=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[di]:{transfer:Sa,primaries:Ea,toReference:i=>i,fromReference:i=>i},[Nt]:{transfer:Rt,primaries:Ea,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ro]:{transfer:Sa,primaries:Ta,toReference:i=>i.applyMatrix3(ih),fromReference:i=>i.applyMatrix3(nh)},[oc]:{transfer:Rt,primaries:Ta,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ih),fromReference:i=>i.applyMatrix3(nh).convertLinearToSRGB()}},Zd=new Set([di,ro]),St={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Vr[e].toReference,s=Vr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Vr[i].primaries},getTransfer:function(i){return i===Nn?Sa:Vr[i].transfer}};function Ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,Pa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=Ca("canvas")),hs.width=e.width,hs.height=e.height;let n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ds(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,Ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,En=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Un,a=yr,o=Sn,l=Ai,c=i.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ui(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===es?Nt:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?es:ou}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===es?Nt:Nn}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Qh;En.DEFAULT_ANISOTROPY=1;var Ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],d=l[5],m=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(d+1)/2,I=(h+1)/2,C=(u+p)/4,T=(f+x)/4,z=(m+g)/4;return _>b&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=T/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=z/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=z/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-x)/y,this.z=(p-u)/y,this.w=Math.acos((c+d+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===es?Nt:Nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},La=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _l=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(f!==x||l!==p||c!==d||u!==m){let g=1-o,h=l*p+c*d+u*m+f*x,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){let I=Math.sqrt(_),C=Math.atan2(I,h*y);g=Math.sin(g*C)/I,o=Math.sin(o*C)/I}let b=o*y;if(l=l*g+p*b,c=c*g+d*b,u=u*g+m*b,f=f*g+x*b,g===1-o){let I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],p=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*f+l*d-c*p,e[t+1]=l*m+u*p+c*f-o*d,e[t+2]=c*m+u*d+o*p-l*f,e[t+3]=u*m-o*f-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),p=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=p*u*f+c*d*m,this._y=c*d*f-p*u*m,this._z=c*u*m+p*d*f,this._w=c*u*f-p*d*m;break;case"YXZ":this._x=p*u*f+c*d*m,this._y=c*d*f-p*u*m,this._z=c*u*m-p*d*f,this._w=c*u*f+p*d*m;break;case"ZXY":this._x=p*u*f-c*d*m,this._y=c*d*f+p*u*m,this._z=c*u*m+p*d*f,this._w=c*u*f-p*d*m;break;case"ZYX":this._x=p*u*f-c*d*m,this._y=c*d*f+p*u*m,this._z=c*u*m-p*d*f,this._w=c*u*f+p*d*m;break;case"YZX":this._x=p*u*f+c*d*m,this._y=c*d*f+p*u*m,this._z=c*u*m-p*d*f,this._w=c*u*f-p*d*m;break;case"XZY":this._x=p*u*f-c*d*m,this._y=c*d*f-p*u*m,this._z=c*u*m+p*d*f,this._w=c*u*f+p*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=n+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new F,sh=new Tn,fi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Xr.subVectors(this.max,sr),us.subVectors(e.a,sr),ds.subVectors(e.b,sr),fs.subVectors(e.c,sr),yi.subVectors(ds,us),vi.subVectors(fs,ds),Wi.subVectors(us,fs);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Wi.z,Wi.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Wi.z,0,-Wi.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Wi.y,Wi.x,0];return!Bo(t,us,ds,fs,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,us,ds,fs,Xr))?!1:(qr.crossVectors(yi,vi),t=[qr.x,qr.y,qr.z],Bo(t,us,ds,fs,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,Wr=new fi,us=new F,ds=new F,fs=new F,yi=new F,vi=new F,Wi=new F,sr=new F,Xr=new F,qr=new F,Xi=new F;function Bo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kd=new fi,rr=new F,ko=new F,Ii=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ko)),this.expandByPoint(rr.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new F,Ho=new F,Yr=new F,Mi=new F,Go=new F,Zr=new F,Vo=new F,Da=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ho.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ho);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Mi.dot(this.direction),l=-Mi.dot(Yr),c=Mi.lengthSq(),u=Math.abs(1-a*a),f,p,d,m;if(u>0)if(f=a*l-o,p=a*o-l,m=r*u,f>=0)if(p>=-m)if(p<=m){let x=1/u;f*=x,p*=x,d=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p<=-m?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c):p<=m?(f=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ho).addScaledVector(Yr,p),d}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){Go.subVectors(t,e),Zr.subVectors(n,e),Vo.crossVectors(Go,Zr);let a=this.direction.dot(Vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);let l=o*this.direction.dot(Zr.crossVectors(Mi,Zr));if(l<0)return null;let c=o*this.direction.dot(Go.cross(Mi));if(c<0||l+c>a)return null;let u=-o*Mi.dot(Vo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,a,o,l,c,u,f,p,d,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,p,d,m,x,g)}set(e,t,n,s,r,a,o,l,c,u,f,p,d,m,x,g){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=d,h[7]=m,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*u,d=a*f,m=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=p-x*c,t[9]=-o*l,t[2]=x-p*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,d=l*f,m=c*u,x=c*f;t[0]=p+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,d=l*f,m=c*u,x=c*f;t[0]=p-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,d=a*f,m=o*u,x=o*f;t[0]=l*u,t[4]=m*c-d,t[8]=p*c+x,t[1]=l*f,t[5]=x*c+p,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-p*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+m,t[10]=p-x*f}else if(e.order==="XZY"){let p=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+x,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),bi.crossVectors(n,bn),bi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),bi.crossVectors(n,bn)),bi.normalize(),Jr.crossVectors(bn,bi),s[0]=bi.x,s[4]=Jr.x,s[8]=bn.x,s[1]=bi.y,s[5]=Jr.y,s[9]=bn.y,s[2]=bi.z,s[6]=Jr.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],p=n[9],d=n[13],m=n[2],x=n[6],g=n[10],h=n[14],y=n[3],_=n[7],b=n[11],I=n[15],C=s[0],T=s[4],z=s[8],w=s[12],A=s[1],O=s[5],Y=s[9],se=s[13],N=s[2],M=s[6],V=s[10],J=s[14],B=s[3],re=s[7],ge=s[11],me=s[15];return r[0]=a*C+o*A+l*N+c*B,r[4]=a*T+o*O+l*M+c*re,r[8]=a*z+o*Y+l*V+c*ge,r[12]=a*w+o*se+l*J+c*me,r[1]=u*C+f*A+p*N+d*B,r[5]=u*T+f*O+p*M+d*re,r[9]=u*z+f*Y+p*V+d*ge,r[13]=u*w+f*se+p*J+d*me,r[2]=m*C+x*A+g*N+h*B,r[6]=m*T+x*O+g*M+h*re,r[10]=m*z+x*Y+g*V+h*ge,r[14]=m*w+x*se+g*J+h*me,r[3]=y*C+_*A+b*N+I*B,r[7]=y*T+_*O+b*M+I*re,r[11]=y*z+_*Y+b*V+I*ge,r[15]=y*w+_*se+b*J+I*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],d=e[14],m=e[3],x=e[7],g=e[11],h=e[15];return m*(+r*l*f-s*c*f-r*o*p+n*c*p+s*o*d-n*l*d)+x*(+t*l*d-t*c*p+r*a*p-s*a*d+s*c*u-r*l*u)+g*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*u-n*c*u)+h*(-s*o*u-t*l*f+t*o*p+s*a*f-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],d=e[11],m=e[12],x=e[13],g=e[14],h=e[15],y=f*g*c-x*p*c+x*l*d-o*g*d-f*l*h+o*p*h,_=m*p*c-u*g*c-m*l*d+a*g*d+u*l*h-a*p*h,b=u*x*c-m*f*c+m*o*d-a*x*d-u*o*h+a*f*h,I=m*f*l-u*x*l-m*o*p+a*x*p+u*o*g-a*f*g,C=t*y+n*_+s*b+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=y*T,e[1]=(x*p*r-f*g*r-x*s*d+n*g*d+f*s*h-n*p*h)*T,e[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*h+n*l*h)*T,e[3]=(f*l*r-o*p*r-f*s*c+n*p*c+o*s*d-n*l*d)*T,e[4]=_*T,e[5]=(u*g*r-m*p*r+m*s*d-t*g*d-u*s*h+t*p*h)*T,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*h-t*l*h)*T,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*d+t*l*d)*T,e[8]=b*T,e[9]=(m*f*r-u*x*r-m*n*d+t*x*d+u*n*h-t*f*h)*T,e[10]=(a*x*r-m*o*r+m*n*c-t*x*c-a*n*h+t*o*h)*T,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*d-t*o*d)*T,e[12]=I*T,e[13]=(u*x*s-m*f*s+m*n*p-t*x*p-u*n*g+t*f*g)*T,e[14]=(m*o*s-a*x*s-m*n*l+t*x*l+a*n*g-t*o*g)*T,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*p+t*o*p)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,p=r*c,d=r*u,m=r*f,x=a*u,g=a*f,h=o*f,y=l*c,_=l*u,b=l*f,I=n.x,C=n.y,T=n.z;return s[0]=(1-(x+h))*I,s[1]=(d+b)*I,s[2]=(m-_)*I,s[3]=0,s[4]=(d-b)*C,s[5]=(1-(p+h))*C,s[6]=(g+y)*C,s[7]=0,s[8]=(m+_)*T,s[9]=(g-y)*T,s[10]=(1-(p+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ps.set(s[0],s[1],s[2]).length(),a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,u=1/a,f=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,m;if(o===hi)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Aa)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hi){let l=this.elements,c=1/(t-e),u=1/(n-s),f=1/(a-r),p=(t+e)*c,d=(n+s)*u,m,x;if(o===hi)m=(a+r)*f,x=-2*f;else if(o===Aa)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ps=new F,Gn=new wt,jd=new F(0,0,0),Qd=new F(1,1,1),bi=new F,Jr=new F,bn=new F,rh=new wt,ah=new Tn,Li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,oh=new F,ms=new Tn,si=new wt,$r=new F,ar=new F,tf=new F,nf=new Tn,lh=new F(1,0,0),ch=new F(0,1,0),hh=new F(0,0,1),sf={type:"added"},rf={type:"removed"},Gt=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Li,n=new Tn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new yt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ar,$r,this.up):si.lookAt($r,ar,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(si),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new F,ri=new F,Wo=new F,ai=new F,gs=new F,xs=new F,uh=new F,Xo=new F,qo=new F,Yo=new F,Kr=!1,Ki=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),ri.subVectors(n,t),Wo.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(ri),l=Vn.dot(Wo),c=ri.dot(ri),u=ri.dot(Wo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(c*l-o*u)*p,m=(a*u-o*l)*p;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,n,s,r,a,o,l){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),ri.subVectors(e,t),Vn.cross(ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Vn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gs.subVectors(s,n),xs.subVectors(r,n),Xo.subVectors(e,n);let l=gs.dot(Xo),c=xs.dot(Xo);if(l<=0&&c<=0)return t.copy(n);qo.subVectors(e,s);let u=gs.dot(qo),f=xs.dot(qo);if(u>=0&&f<=u)return t.copy(s);let p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(gs,a);Yo.subVectors(e,r);let d=gs.dot(Yo),m=xs.dot(Yo);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(xs,o);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return uh.subVectors(r,s),o=(f-u)/(f-u+(d-m)),t.copy(s).addScaledVector(uh,o);let h=1/(g+x+p);return a=x*h,o=p*h,t.copy(n).addScaledVector(gs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=St.workingColorSpace){if(e=qd(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zo(a,r,e+1/3),this.g=Zo(a,r,e),this.b=Zo(a,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return St.fromWorkingColorSpace(hn.copy(this),e),Math.round(un(hn.r*255,0,255))*65536+Math.round(un(hn.g*255,0,255))*256+Math.round(un(hn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Nt){St.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(jr);let n=Uo(wi.h,jr.h,t),s=Uo(wi.s,jr.s,t),r=Uo(wi.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Qe;Qe.NAMES=hu;var af=0,On=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Ti,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pt=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new F,Qr=new ve,Yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}};var Na=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var of=0,Dn=new wt,Jo=new Gt,_s=new F,wn=new fi,or=new fi,nn=new F,Tt=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?Oa:Na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(wn.min,or.min),wn.expandByPoint(nn),nn.addVectors(wn.max,or.max),wn.expandByPoint(nn)):(wn.expandByPoint(or.min),wn.expandByPoint(or.max))}wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),nn.add(_s)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new F,u[A]=new F;let f=new F,p=new F,d=new F,m=new ve,x=new ve,g=new ve,h=new F,y=new F;function _(A,O,Y){f.fromArray(s,A*3),p.fromArray(s,O*3),d.fromArray(s,Y*3),m.fromArray(a,A*2),x.fromArray(a,O*2),g.fromArray(a,Y*2),p.sub(f),d.sub(f),x.sub(m),g.sub(m);let se=1/(x.x*g.y-g.x*x.y);isFinite(se)&&(h.copy(p).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(se),y.copy(d).multiplyScalar(x.x).addScaledVector(p,-g.x).multiplyScalar(se),c[A].add(h),c[O].add(h),c[Y].add(h),u[A].add(y),u[O].add(y),u[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,O=b.length;A<O;++A){let Y=b[A],se=Y.start,N=Y.count;for(let M=se,V=se+N;M<V;M+=3)_(n[M+0],n[M+1],n[M+2])}let I=new F,C=new F,T=new F,z=new F;function w(A){T.fromArray(r,A*3),z.copy(T);let O=c[A];I.copy(O),I.sub(T.multiplyScalar(T.dot(O))).normalize(),C.crossVectors(z,O);let se=C.dot(u[A])<0?-1:1;l[A*4]=I.x,l[A*4+1]=I.y,l[A*4+2]=I.z,l[A*4+3]=se}for(let A=0,O=b.length;A<O;++A){let Y=b[A],se=Y.start,N=Y.count;for(let M=se,V=se+N;M<V;M+=3)w(n[M+0]),w(n[M+1]),w(n[M+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let p=0,d=e.count;p<d;p+=3){let m=e.getX(p+0),x=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,p=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let h=0;h<u;h++)p[m++]=c[d++]}return new Yt(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let p=c[u],d=e(p,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dh=new wt,qi=new Da,ea=new Ii,fh=new F,ys=new F,vs=new F,Ms=new F,$o=new F,ta=new F,na=new ve,ia=new ve,sa=new ve,ph=new F,mh=new F,gh=new F,ra=new F,aa=new F,Be=class extends Gt{constructor(e=new Tt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&($o.fromBufferAttribute(f,e),a?ta.addScaledVector($o,u):ta.addScaledVector($o.sub(t),u))}t.add(ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(ea.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ea,fh)===null||qi.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(r).invert(),qi.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=p.length;m<x;m++){let g=p[m],h=a[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,I=_;b<I;b+=3){let C=o.getX(b),T=o.getX(b+1),z=o.getX(b+2);s=oa(this,h,e,n,c,u,f,C,T,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,h=x;g<h;g+=3){let y=o.getX(g),_=o.getX(g+1),b=o.getX(g+2);s=oa(this,a,e,n,c,u,f,y,_,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=p.length;m<x;m++){let g=p[m],h=a[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,I=_;b<I;b+=3){let C=b,T=b+1,z=b+2;s=oa(this,h,e,n,c,u,f,C,T,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,h=x;g<h;g+=3){let y=g,_=g+1,b=g+2;s=oa(this,a,e,n,c,u,f,y,_,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function lf(i,e,t,n,s,r,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ci,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,vs),i.getVertexPosition(c,Ms);let u=lf(i,e,t,n,ys,vs,Ms,ra);if(u){s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),u.uv=Ki.getInterpolation(ra,ys,vs,Ms,na,ia,sa,new ve)),r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),u.uv1=Ki.getInterpolation(ra,ys,vs,Ms,na,ia,sa,new ve),u.uv2=u.uv1),a&&(ph.fromBufferAttribute(a,o),mh.fromBufferAttribute(a,l),gh.fromBufferAttribute(a,c),u.normal=Ki.getInterpolation(ra,ys,vs,Ms,ph,mh,gh,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Ki.getNormal(ys,vs,Ms,f.normal),u.face=f}return u}var An=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],p=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function m(x,g,h,y,_,b,I,C,T,z,w){let A=b/T,O=I/z,Y=b/2,se=I/2,N=C/2,M=T+1,V=z+1,J=0,B=0,re=new F;for(let ge=0;ge<V;ge++){let me=ge*O-se;for(let Pe=0;Pe<M;Pe++){let te=Pe*A-Y;re[x]=te*y,re[g]=me*_,re[h]=N,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[h]=C>0?1:-1,u.push(re.x,re.y,re.z),f.push(Pe/T),f.push(1-ge/z),J+=1}}for(let ge=0;ge<z;ge++)for(let me=0;me<T;me++){let Pe=p+me+M*ge,te=p+me+M*(ge+1),xe=p+(me+1)+M*(ge+1),Te=p+(me+1)+M*ge;l.push(Pe,te,Te),l.push(te,xe,Te),B+=6}o.addGroup(d,B,w),d+=B,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Fs(i[t]);for(let s in n)e[s]=n[s]}return e}function cf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){return i.getRenderTarget()===null?i.outputColorSpace:St.workingColorSpace}var zi={clone:Fs,merge:xn},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},za=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jt=class extends za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Do*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,ws=1,yl=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(bs,ws,e,t);s.layers=this.layers,this.add(s);let r=new jt(bs,ws,e,t);r.layers=this.layers,this.add(r);let a=new jt(bs,ws,e,t);a.layers=this.layers,this.add(a);let o=new jt(bs,ws,e,t);o.layers=this.layers,this.add(o);let l=new jt(bs,ws,e,t);l.layers=this.layers,this.add(l);let c=new jt(bs,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,p,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fa=class extends En{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===es?Nt:Nn),this.texture=new Fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Kn});r.uniforms.tEquirect.value=t;let a=new Be(s,r),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=Un),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ko=new F,df=new F,ff=new yt,li=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ko.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ff.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Ii,la=new F,vr=class{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],p=s[7],d=s[8],m=s[9],x=s[10],g=s[11],h=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,p-c,g-d,b-h).normalize(),n[1].setComponents(l+r,p+c,g+d,b+h).normalize(),n[2].setComponents(l+a,p+u,g+m,b+y).normalize(),n[3].setComponents(l-a,p-u,g-m,b-y).normalize(),n[4].setComponents(l-o,p-f,g-x,b-_).normalize(),t===hi)n[5].setComponents(l+o,p+f,g+x,b+_).normalize();else if(t===Aa)n[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let f=c.array,p=c.usage,d=f.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,p),c.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,f){let p=u.array,d=u._updateRange,m=u.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&m.length===0&&i.bufferSubData(f,0,p),m.length!==0){for(let x=0,g=m.length;x<g;x++){let h=m[x];t?i.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):i.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}var Di=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,p=t/l,d=[],m=[],x=[],g=[];for(let h=0;h<u;h++){let y=h*p-a;for(let _=0;_<c;_++){let b=_*f-r;m.push(b,-y,0),x.push(0,0,1),g.push(_/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){let _=y+c*h,b=y+c*(h+1),I=y+1+c*(h+1),C=y+1+c*h;d.push(_,b,C),d.push(b,I,C)}this.setIndex(d),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,gt={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:xf,alphamap_pars_fragment:_f,alphatest_fragment:yf,alphatest_pars_fragment:vf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:wf,batching_vertex:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Of,color_vertex:zf,common:Ff,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Gf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:lp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:Qf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:xp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:wp,map_particle_fragment:Sp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Ip,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Op,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Gp,packing:Vp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:Qp,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:x0,cube_vert:_0,cube_frag:y0,depth_vert:v0,depth_frag:M0,distanceRGBA_vert:b0,distanceRGBA_frag:w0,equirect_vert:S0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:U0,meshnormal_frag:N0,meshphong_vert:O0,meshphong_frag:z0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:k0,meshtoon_frag:H0,points_vert:G0,points_frag:V0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},ze={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},$n={basic:{uniforms:xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:xn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:xn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:xn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:xn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:xn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:xn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:xn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:xn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:xn([ze.common,ze.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:xn([ze.lights,ze.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};$n.physical={uniforms:xn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var ca={r:0,b:0,g:0};function Z0(i,e,t,n,s,r,a){let o=new Qe(0),l=r===!0?0:1,c,u,f=null,p=0,d=null;function m(g,h){let y=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===io)?(u===void 0&&(u=new Be(new An(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Fs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=St.getTransfer(_.colorSpace)!==Rt,(f!==_||p!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Be(new Di(2,2),new Zt({name:"BackgroundMaterial",uniforms:Fs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=St.getTransfer(_.colorSpace)!==Rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,h){g.getRGB(ca,uu(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(g,h=1){o.set(g),l=h,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(o,l)},render:m}}function J0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,u=!1;function f(N,M,V,J,B){let re=!1;if(a){let ge=x(J,V,M);c!==ge&&(c=ge,d(c.object)),re=h(N,J,V,B),re&&y(N,J,V,B)}else{let ge=M.wireframe===!0;(c.geometry!==J.id||c.program!==V.id||c.wireframe!==ge)&&(c.geometry=J.id,c.program=V.id,c.wireframe=ge,re=!0)}B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,z(N,M,V,J),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function m(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,M,V){let J=V.wireframe===!0,B=o[N.id];B===void 0&&(B={},o[N.id]=B);let re=B[M.id];re===void 0&&(re={},B[M.id]=re);let ge=re[J];return ge===void 0&&(ge=g(p()),re[J]=ge),ge}function g(N){let M=[],V=[],J=[];for(let B=0;B<s;B++)M[B]=0,V[B]=0,J[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:V,attributeDivisors:J,object:N,attributes:{},index:null}}function h(N,M,V,J){let B=c.attributes,re=M.attributes,ge=0,me=V.getAttributes();for(let Pe in me)if(me[Pe].location>=0){let xe=B[Pe],Te=re[Pe];if(Te===void 0&&(Pe==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),Pe==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;ge++}return c.attributesNum!==ge||c.index!==J}function y(N,M,V,J){let B={},re=M.attributes,ge=0,me=V.getAttributes();for(let Pe in me)if(me[Pe].location>=0){let xe=re[Pe];xe===void 0&&(Pe==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),Pe==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor));let Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),B[Pe]=Te,ge++}c.attributes=B,c.attributesNum=ge,c.index=J}function _(){let N=c.newAttributes;for(let M=0,V=N.length;M<V;M++)N[M]=0}function b(N){I(N,0)}function I(N,M){let V=c.newAttributes,J=c.enabledAttributes,B=c.attributeDivisors;V[N]=1,J[N]===0&&(i.enableVertexAttribArray(N),J[N]=1),B[N]!==M&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,M),B[N]=M)}function C(){let N=c.newAttributes,M=c.enabledAttributes;for(let V=0,J=M.length;V<J;V++)M[V]!==N[V]&&(i.disableVertexAttribArray(V),M[V]=0)}function T(N,M,V,J,B,re,ge){ge===!0?i.vertexAttribIPointer(N,M,V,B,re):i.vertexAttribPointer(N,M,V,J,B,re)}function z(N,M,V,J){if(n.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let B=J.attributes,re=V.getAttributes(),ge=M.defaultAttributeValues;for(let me in re){let Pe=re[me];if(Pe.location>=0){let te=B[me];if(te===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){let xe=te.normalized,Te=te.itemSize,Je=t.get(te);if(Je===void 0)continue;let ke=Je.buffer,Ke=Je.type,je=Je.bytesPerElement,$e=n.isWebGL2===!0&&(Ke===i.INT||Ke===i.UNSIGNED_INT||te.gpuType===eu);if(te.isInterleavedBufferAttribute){let De=te.data,k=De.stride,Ie=te.offset;if(De.isInstancedInterleavedBuffer){for(let de=0;de<Pe.locationSize;de++)I(Pe.location+de,De.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let de=0;de<Pe.locationSize;de++)b(Pe.location+de);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let de=0;de<Pe.locationSize;de++)T(Pe.location+de,Te/Pe.locationSize,Ke,xe,k*je,(Ie+Te/Pe.locationSize*de)*je,$e)}else{if(te.isInstancedBufferAttribute){for(let De=0;De<Pe.locationSize;De++)I(Pe.location+De,te.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let De=0;De<Pe.locationSize;De++)b(Pe.location+De);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let De=0;De<Pe.locationSize;De++)T(Pe.location+De,Te/Pe.locationSize,Ke,xe,Te*je,Te/Pe.locationSize*De*je,$e)}}else if(ge!==void 0){let xe=ge[me];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(Pe.location,xe);break;case 3:i.vertexAttrib3fv(Pe.location,xe);break;case 4:i.vertexAttrib4fv(Pe.location,xe);break;default:i.vertexAttrib1fv(Pe.location,xe)}}}}C()}function w(){Y();for(let N in o){let M=o[N];for(let V in M){let J=M[V];for(let B in J)m(J[B].object),delete J[B];delete M[V]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;let M=o[N.id];for(let V in M){let J=M[V];for(let B in J)m(J[B].object),delete J[B];delete M[V]}delete o[N.id]}function O(N){for(let M in o){let V=o[M];if(V[N.id]===void 0)continue;let J=V[N.id];for(let B in J)m(J[B].object),delete J[B];delete V[N.id]}}function Y(){se(),u=!0,c!==l&&(c=l,d(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:se,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:b,disableUnusedAttributes:C}}function $0(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,p){if(p===0)return;let d,m;if(s)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,u,f,p),t.update(f,r,p)}function c(u,f,p){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<p;m++)this.render(u[m],f[m]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function K0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,b=a||e.has("OES_texture_float"),I=_&&b,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:I,maxSamples:C}}function j0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new li,o=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,_=y*4,b=h.clippingState||null;l.value=b,b=u(m,p,_,d);for(let I=0;I!==_;++I)b[I]=t[I];h.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let h=d+x*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,b=d;_!==x;++_,b+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Q0(i){let e=new WeakMap;function t(a,o){return o===ul?a.mapping=Ns:o===dl&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ul||o===dl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new vl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Bs=class extends za{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ps=4,xh=[.125,.215,.35,.446,.526,.582],$i=20,jo=new Bs,_h=new Qe,Qo=null,el=0,tl=0,Zi=(1+Math.sqrt(5))/2,Ss=1/Zi,yh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Zi,Ss),new F(0,Zi,-Ss),new F(Ss,0,Zi),new F(-Ss,0,Zi),new F(Zi,Ss,0),new F(-Zi,Ss,0)],Ui=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Xn,format:Sn,colorSpace:di,depthBuffer:!1},s=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=tm(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,s){let o=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(_h),u.toneMapping=jn,u.autoClear=!1;let d=new Pt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new Be(new An,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(_h),x=!0);for(let h=0;h<6;h++){let y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let _=this._cubeSize;ha(s,y*_,h>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ns||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(s-1)%yh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Be(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):$i;g>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);let h=[],y=0;for(let T=0;T<$i;++T){let z=T/x,w=Math.exp(-z*z/2);h.push(w),T===0?y+=w:T<g&&(y+=2*w)}for(let T=0;T<h.length;T++)h[T]=h[T]/y;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:_}=this;p.dTheta.value=m,p.mipInt.value=_-n;let b=this._sizeLods[s],I=3*b*(s>_-Ps?s-_+Ps:0),C=4*(this._cubeSize-b);ha(t,I,C,3*b,2*b),l.setRenderTarget(t),l.render(f,jo)}};function em(i){let e=[],t=[],n=[],s=i,r=i-Ps+1+xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ps?l=xh[a-i+Ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,x=3,g=2,h=1,y=new Float32Array(x*m*d),_=new Float32Array(g*m*d),b=new Float32Array(h*m*d);for(let C=0;C<d;C++){let T=C%3*2/3-1,z=C>2?0:-1,w=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];y.set(w,x*m*C),_.set(p,g*m*C);let A=[C,C,C,C,C,C];b.set(A,h*m*C)}let I=new Tt;I.setAttribute("position",new Yt(y,x)),I.setAttribute("uv",new Yt(_,g)),I.setAttribute("faceIndex",new Yt(b,h)),e.push(I),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vh(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){let n=new Float32Array($i),s=new F(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Mh(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function bh(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function nm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ul||l===dl,u=l===Ns||l===Os;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ui(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Ui(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function im(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);for(let m in p.morphAttributes){let x=p.morphAttributes[m];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let m in d){let x=d[m];for(let g=0,h=x.length;g<h;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(f){let p=[],d=f.index,m=f.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,b=y.length;_<b;_+=3){let I=y[_+0],C=y[_+1],T=y[_+2];p.push(I,C,C,T,T,I)}}else if(m!==void 0){let y=m.array;x=m.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let I=_+0,C=_+1,T=_+2;p.push(I,C,C,T,T,I)}}else return;let g=new(cu(p)?Oa:Na)(p,1);g.version=x;let h=r.get(f);h&&e.remove(h),r.set(f,g)}function u(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function rm(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(r,m,o,d*l),t.update(m,r,1)}function f(d,m,x){if(x===0)return;let g,h;if(s)g=i,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](r,m,o,d*l,x),t.update(m,r,x)}function p(d,m,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<x;h++)this.render(d[h]/l,m[h]);else{g.multiDrawElementsWEBGL(r,m,0,o,d,0,x);let h=0;for(let y=0;y<x;y++)h+=m[y];t.update(h,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function am(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function om(i,e){return i[0]-e[0]}function lm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0,x=r.get(u);if(x===void 0||x.count!==m){let N=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();let y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],T=u.morphAttributes.color||[],z=0;y===!0&&(z=1),_===!0&&(z=2),b===!0&&(z=3);let w=u.attributes.position.count*z,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let O=new Float32Array(w*A*4*m),Y=new La(O,w,A,m);Y.type=Ei,Y.needsUpdate=!0;let se=z*4;for(let M=0;M<m;M++){let V=I[M],J=C[M],B=T[M],re=w*A*4*M;for(let ge=0;ge<V.count;ge++){let me=ge*se;y===!0&&(a.fromBufferAttribute(V,ge),O[re+me+0]=a.x,O[re+me+1]=a.y,O[re+me+2]=a.z,O[re+me+3]=0),_===!0&&(a.fromBufferAttribute(J,ge),O[re+me+4]=a.x,O[re+me+5]=a.y,O[re+me+6]=a.z,O[re+me+7]=0),b===!0&&(a.fromBufferAttribute(B,ge),O[re+me+8]=a.x,O[re+me+9]=a.y,O[re+me+10]=a.z,O[re+me+11]=B.itemSize===4?a.w:1)}}x={count:m,texture:Y,size:new ve(w,A)},r.set(u,x),u.addEventListener("dispose",N)}let g=0;for(let y=0;y<p.length;y++)g+=p[y];let h=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",h),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=p===void 0?0:p.length,m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let _=0;_<d;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<d;_++){let b=m[_];b[0]=_,b[1]=p[_]}m.sort(lm);for(let _=0;_<8;_++)_<d&&m[_][1]?(o[_][0]=m[_][0],o[_][1]=m[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(om);let x=u.morphAttributes.position,g=u.morphAttributes.normal,h=0;for(let _=0;_<8;_++){let b=o[_],I=b[0],C=b[1];I!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+_)!==x[I]&&u.setAttribute("morphTarget"+_,x[I]),g&&u.getAttribute("morphNormal"+_)!==g[I]&&u.setAttribute("morphNormal"+_,g[I]),s[_]=C,h+=C):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let y=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function hm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ba=class extends En{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Qi,u!==Qi&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qi&&(n=Si),n===void 0&&u===zs&&(n=ji),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fu=new En,pu=new Ba(1,1);pu.compareFunction=lu;var mu=new La,gu=new _l,xu=new Fa,wh=[],Sh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),en(t,n)}}function gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),en(t,n)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),en(t,n)}}function _m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Tm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?pu:fu;t.setTexture2D(e||r,s)}function Am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gu,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xu,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mu,s)}function Pm(i){switch(i){case 5126:return um;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return xm;case 5124:case 35670:return _m;case 35667:case 35671:return ym;case 35668:case 35672:return vm;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return wm;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Im(i,e){i.uniform1fv(this.addr,e)}function Lm(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Dm(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Om(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zm(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fm(i,e){i.uniform1iv(this.addr,e)}function Bm(i,e){i.uniform2iv(this.addr,e)}function km(i,e){i.uniform3iv(this.addr,e)}function Hm(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function Vm(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function qm(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||fu,r[a])}function Ym(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gu,r[a])}function Zm(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xu,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mu,r[a])}function $m(i){switch(i){case 5126:return Im;case 35664:return Lm;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return Om;case 35676:return zm;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}var Ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pm(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$m(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function Km(i,e,t){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rh(t,c===void 0?new Ml(o,i,e):new bl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new wl(o),Rh(t,f)),t=f}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Km(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jm=37297,Qm=0;function eg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function tg(i){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(i),n;switch(e===t?n="":e===Ta&&t===Ea?n="LinearDisplayP3ToLinearSRGB":e===Ea&&t===Ta&&(n="LinearSRGBToLinearDisplayP3"),i){case di:case ro:return[n,"LinearTransferOETF"];case Nt:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ph(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(e),a)}else return s}function ng(i,e){let t=tg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ig(i,e){let t;switch(e){case nc:t="Linear";break;case ic:t="Reinhard";break;case sc:t="OptimizedCineon";break;case Dr:t="ACESFilmic";break;case rc:t="AgX";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function ag(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function og(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Is(i){return i!==""}function Ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(lg,hg)}var cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hg(i,e){let t=gt[e];if(t===void 0){let n=cg.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(ug,dg)}function dg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Os&&(e="ENVMAP_MODE_REFRACTION"),e}function gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Sd:e="ENVMAP_BLENDING_MIX";break;case Ed:e="ENVMAP_BLENDING_ADD";break}return e}function xg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _g(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=fg(t),c=pg(t),u=mg(t),f=gg(t),p=xg(t),d=t.isWebGL2?"":sg(t),m=rg(t),x=ag(r),g=s.createProgram(),h,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Is).join(`
`),h.length>0&&(h+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Is).join(`
`),y.length>0&&(y+=`
`)):(h=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),y=[d,Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?gt.tonemapping_pars_fragment:"",t.toneMapping!==jn?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=Sl(a),a=Ih(a,t),a=Lh(a,t),o=Sl(o),o=Ih(o,t),o=Lh(o,t),a=Dh(a),o=Dh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+h+a,I=_+y+o,C=Ch(s,s.VERTEX_SHADER,b),T=Ch(s,s.FRAGMENT_SHADER,I);s.attachShader(g,C),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function z(Y){if(i.debug.checkShaderErrors){let se=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(C).trim(),M=s.getShaderInfoLog(T).trim(),V=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,C,T);else{let B=Ph(s,C,"vertex"),re=Ph(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+B+`
`+re)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(N===""||M==="")&&(J=!1);J&&(Y.diagnostics={runnable:V,programLog:se,vertexShader:{log:N,prefix:h},fragmentShader:{log:M,prefix:y}})}s.deleteShader(C),s.deleteShader(T),w=new Us(s,g),A=og(s,g)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,jm)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}var yg=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tl(e),t.set(e,n)),n}},Tl=class{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}};function vg(i,e,t,n,s,r,a){let o=new Ua,l=new El,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function g(w,A,O,Y,se){let N=Y.fog,M=se.geometry,V=w.isMeshStandardMaterial?Y.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),B=J&&J.mapping===io?J.image.height:null,re=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ge=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,me=ge!==void 0?ge.length:0,Pe=0;M.morphAttributes.position!==void 0&&(Pe=1),M.morphAttributes.normal!==void 0&&(Pe=2),M.morphAttributes.color!==void 0&&(Pe=3);let te,xe,Te,Je;if(re){let ne=$n[re];te=ne.vertexShader,xe=ne.fragmentShader}else te=w.vertexShader,xe=w.fragmentShader,l.update(w),Te=l.getVertexShaderID(w),Je=l.getFragmentShaderID(w);let ke=i.getRenderTarget(),Ke=se.isInstancedMesh===!0,je=se.isBatchedMesh===!0,$e=!!w.map,De=!!w.matcap,k=!!J,Ie=!!w.aoMap,de=!!w.lightMap,be=!!w.bumpMap,le=!!w.normalMap,Fe=!!w.displacementMap,Ae=!!w.emissiveMap,P=!!w.metalnessMap,E=!!w.roughnessMap,K=w.anisotropy>0,oe=w.clearcoat>0,pe=w.iridescence>0,he=w.sheen>0,Ue=w.transmission>0,Se=K&&!!w.anisotropyMap,We=oe&&!!w.clearcoatMap,et=oe&&!!w.clearcoatNormalMap,rt=oe&&!!w.clearcoatRoughnessMap,ce=pe&&!!w.iridescenceMap,xt=pe&&!!w.iridescenceThicknessMap,at=he&&!!w.sheenColorMap,st=he&&!!w.sheenRoughnessMap,tt=!!w.specularMap,Ye=!!w.specularColorMap,nt=!!w.specularIntensityMap,ht=Ue&&!!w.transmissionMap,ut=Ue&&!!w.thicknessMap,ot=!!w.gradientMap,we=!!w.alphaMap,G=w.alphaTest>0,Ne=!!w.alphaHash,Le=!!w.extensions,v=!!M.attributes.uv1,D=!!M.attributes.uv2,X=!!M.attributes.uv3,ee=jn;return w.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ee=i.toneMapping),{isWebGL2:u,shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:xe,defines:w.defines,customVertexShaderID:Te,customFragmentShaderID:Je,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:je,instancing:Ke,instancingColor:Ke&&se.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:di,map:$e,matcap:De,envMap:k,envMapMode:k&&J.mapping,envMapCubeUVHeight:B,aoMap:Ie,lightMap:de,bumpMap:be,normalMap:le,displacementMap:p&&Fe,emissiveMap:Ae,normalMapObjectSpace:le&&w.normalMapType===Fd,normalMapTangentSpace:le&&w.normalMapType===so,metalnessMap:P,roughnessMap:E,anisotropy:K,anisotropyMap:Se,clearcoat:oe,clearcoatMap:We,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,iridescence:pe,iridescenceMap:ce,iridescenceThicknessMap:xt,sheen:he,sheenColorMap:at,sheenRoughnessMap:st,specularMap:tt,specularColorMap:Ye,specularIntensityMap:nt,transmission:Ue,transmissionMap:ht,thicknessMap:ut,gradientMap:ot,opaque:w.transparent===!1&&w.blending===Ti,alphaMap:we,alphaTest:G,alphaHash:Ne,combine:w.combine,mapUv:$e&&x(w.map.channel),aoMapUv:Ie&&x(w.aoMap.channel),lightMapUv:de&&x(w.lightMap.channel),bumpMapUv:be&&x(w.bumpMap.channel),normalMapUv:le&&x(w.normalMap.channel),displacementMapUv:Fe&&x(w.displacementMap.channel),emissiveMapUv:Ae&&x(w.emissiveMap.channel),metalnessMapUv:P&&x(w.metalnessMap.channel),roughnessMapUv:E&&x(w.roughnessMap.channel),anisotropyMapUv:Se&&x(w.anisotropyMap.channel),clearcoatMapUv:We&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:at&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:st&&x(w.sheenRoughnessMap.channel),specularMapUv:tt&&x(w.specularMap.channel),specularColorMapUv:Ye&&x(w.specularColorMap.channel),specularIntensityMapUv:nt&&x(w.specularIntensityMap.channel),transmissionMapUv:ht&&x(w.transmissionMap.channel),thicknessMapUv:ut&&x(w.thicknessMap.channel),alphaMapUv:we&&x(w.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(le||K),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,vertexUv1s:v,vertexUv2s:D,vertexUv3s:X,pointsUvs:se.isPoints===!0&&!!M.attributes.uv&&($e||we),fog:!!N,useFog:w.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===Rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ht,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Le&&w.extensions.derivatives===!0,extensionFragDepth:Le&&w.extensions.fragDepth===!0,extensionDrawBuffers:Le&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){let A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(let O in w.defines)A.push(O),A.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(y(A,w),_(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function y(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function _(w,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),w.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function b(w){let A=m[w.type],O;if(A){let Y=$n[A];O=zi.clone(Y.uniforms)}else O=w.uniforms;return O}function I(w,A){let O;for(let Y=0,se=c.length;Y<se;Y++){let N=c[Y];if(N.cacheKey===A){O=N,++O.usedTimes;break}}return O===void 0&&(O=new _g(i,A,w,r),c.push(O)),O}function C(w){if(--w.usedTimes===0){let A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function T(w){l.remove(w)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:b,acquireProgram:I,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:z}}function Mg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,d,m,x,g){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},i[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=d,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=x,h.group=g),e++,h}function o(f,p,d,m,x,g){let h=a(f,p,d,m,x,g);d.transmission>0?n.push(h):d.transparent===!0?s.push(h):t.push(h)}function l(f,p,d,m,x,g){let h=a(f,p,d,m,x,g);d.transmission>0?n.unshift(h):d.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,p){t.length>1&&t.sort(f||bg),n.length>1&&n.sort(p||Nh),s.length>1&&s.sort(p||Nh)}function u(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function wg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Oh,i.set(n,[a])):s>=r.length?(a=new Oh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Qe};break;case"SpotLight":t={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Eg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tg=0;function Ag(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rg(i,e){let t=new Sg,n=Eg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new F);let r=new F,a=new wt,o=new wt;function l(u,f){let p=0,d=0,m=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,g=0,h=0,y=0,_=0,b=0,I=0,C=0,T=0,z=0,w=0;u.sort(Ag);let A=f===!0?Math.PI:1;for(let Y=0,se=u.length;Y<se;Y++){let N=u[Y],M=N.color,V=N.intensity,J=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=M.r*V*A,d+=M.g*V*A,m+=M.b*V*A;else if(N.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(N.sh.coefficients[re],V);w++}else if(N.isDirectionalLight){let re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){let ge=N.shadow,me=n.get(N);me.shadowBias=ge.bias,me.shadowNormalBias=ge.normalBias,me.shadowRadius=ge.radius,me.shadowMapSize=ge.mapSize,s.directionalShadow[x]=me,s.directionalShadowMap[x]=B,s.directionalShadowMatrix[x]=N.shadow.matrix,b++}s.directional[x]=re,x++}else if(N.isSpotLight){let re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(M).multiplyScalar(V*A),re.distance=J,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,s.spot[h]=re;let ge=N.shadow;if(N.map&&(s.spotLightMap[T]=N.map,T++,ge.updateMatrices(N),N.castShadow&&z++),s.spotLightMatrix[h]=ge.matrix,N.castShadow){let me=n.get(N);me.shadowBias=ge.bias,me.shadowNormalBias=ge.normalBias,me.shadowRadius=ge.radius,me.shadowMapSize=ge.mapSize,s.spotShadow[h]=me,s.spotShadowMap[h]=B,C++}h++}else if(N.isRectAreaLight){let re=t.get(N);re.color.copy(M).multiplyScalar(V),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),s.rectArea[y]=re,y++}else if(N.isPointLight){let re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*A),re.distance=N.distance,re.decay=N.decay,N.castShadow){let ge=N.shadow,me=n.get(N);me.shadowBias=ge.bias,me.shadowNormalBias=ge.normalBias,me.shadowRadius=ge.radius,me.shadowMapSize=ge.mapSize,me.shadowCameraNear=ge.camera.near,me.shadowCameraFar=ge.camera.far,s.pointShadow[g]=me,s.pointShadowMap[g]=B,s.pointShadowMatrix[g]=N.shadow.matrix,I++}s.point[g]=re,g++}else if(N.isHemisphereLight){let re=t.get(N);re.skyColor.copy(N.color).multiplyScalar(V*A),re.groundColor.copy(N.groundColor).multiplyScalar(V*A),s.hemi[_]=re,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=d,s.ambient[2]=m;let O=s.hash;(O.directionalLength!==x||O.pointLength!==g||O.spotLength!==h||O.rectAreaLength!==y||O.hemiLength!==_||O.numDirectionalShadows!==b||O.numPointShadows!==I||O.numSpotShadows!==C||O.numSpotMaps!==T||O.numLightProbes!==w)&&(s.directional.length=x,s.spot.length=h,s.rectArea.length=y,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+T-z,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=w,O.directionalLength=x,O.pointLength=g,O.spotLength=h,O.rectAreaLength=y,O.hemiLength=_,O.numDirectionalShadows=b,O.numPointShadows=I,O.numSpotShadows=C,O.numSpotMaps=T,O.numLightProbes=w,s.version=Tg++)}function c(u,f){let p=0,d=0,m=0,x=0,g=0,h=f.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){let b=u[y];if(b.isDirectionalLight){let I=s.directional[p];I.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(h),p++}else if(b.isSpotLight){let I=s.spot[m];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(h),I.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(h),m++}else if(b.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let I=s.point[d];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(h),d++}else if(b.isHemisphereLight){let I=s.hemi[g];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:s}}function zh(i,e){let t=new Rg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cg(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new zh(i,e),t.set(r,[l])):a>=o.length?(l=new zh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Al=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Pg=`void main() {
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
}`;function Lg(i,e,t){let n=new vr,s=new ve,r=new ve,a=new Ot,o=new Al({depthPacking:zd}),l=new Rl,c={},u=t.maxTextureSize,f={[Ci]:qt,[qt]:Ci,[Ht]:Ht},p=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let m=new Tt;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(m,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let h=this.type;this.render=function(C,T,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),A=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Kn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let se=h!==oi&&this.type===oi,N=h===oi&&this.type!==oi;for(let M=0,V=C.length;M<V;M++){let J=C[M],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let re=B.getFrameExtents();if(s.multiply(re),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,B.mapSize.y=r.y)),B.map===null||se===!0||N===!0){let me=this.type!==oi?{minFilter:Kt,magFilter:Kt}:{};B.map!==null&&B.map.dispose(),B.map=new _n(s.x,s.y,me),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let ge=B.getViewportCount();for(let me=0;me<ge;me++){let Pe=B.getViewport(me);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),Y.viewport(a),B.updateMatrices(J,me),n=B.getFrustum(),b(T,z,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===oi&&y(B,z),B.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(w,A,O)};function y(C,T){let z=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _n(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,z,p,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,z,d,x,null)}function _(C,T,z,w){let A=null,O=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)A=O;else if(A=z.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=A.uuid,se=T.uuid,N=c[Y];N===void 0&&(N={},c[Y]=N);let M=N[se];M===void 0&&(M=A.clone(),N[se]=M,T.addEventListener("dispose",I)),A=M}if(A.visible=T.visible,A.wireframe=T.wireframe,w===oi?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:f[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let Y=i.properties.get(A);Y.light=z}return A}function b(C,T,z,w,A){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===oi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let se=e.update(C),N=C.material;if(Array.isArray(N)){let M=se.groups;for(let V=0,J=M.length;V<J;V++){let B=M[V],re=N[B.materialIndex];if(re&&re.visible){let ge=_(C,re,w,A);C.onBeforeShadow(i,C,T,z,se,ge,B),i.renderBufferDirect(z,null,se,ge,C,B),C.onAfterShadow(i,C,T,z,se,ge,B)}}}else if(N.visible){let M=_(C,N,w,A);C.onBeforeShadow(i,C,T,z,se,M,null),i.renderBufferDirect(z,null,se,M,C,null),C.onAfterShadow(i,C,T,z,se,M,null)}}let Y=C.children;for(let se=0,N=Y.length;se<N;se++)b(Y[se],T,z,w,A)}function I(C){C.target.removeEventListener("dispose",I);for(let z in c){let w=c[z],A=C.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function Dg(i,e,t){let n=t.isWebGL2;function s(){let G=!1,Ne=new Ot,Le=null,v=new Ot(0,0,0,0);return{setMask:function(D){Le!==D&&!G&&(i.colorMask(D,D,D,D),Le=D)},setLocked:function(D){G=D},setClear:function(D,X,ee,fe,ne){ne===!0&&(D*=fe,X*=fe,ee*=fe),Ne.set(D,X,ee,fe),v.equals(Ne)===!1&&(i.clearColor(D,X,ee,fe),v.copy(Ne))},reset:function(){G=!1,Le=null,v.set(-1,0,0,0)}}}function r(){let G=!1,Ne=null,Le=null,v=null;return{setTest:function(D){D?je(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(D){Ne!==D&&!G&&(i.depthMask(D),Ne=D)},setFunc:function(D){if(Le!==D){switch(D){case xd:i.depthFunc(i.NEVER);break;case _d:i.depthFunc(i.ALWAYS);break;case yd:i.depthFunc(i.LESS);break;case Ma:i.depthFunc(i.LEQUAL);break;case vd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case bd:i.depthFunc(i.GREATER);break;case wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=D}},setLocked:function(D){G=D},setClear:function(D){v!==D&&(i.clearDepth(D),v=D)},reset:function(){G=!1,Ne=null,Le=null,v=null}}}function a(){let G=!1,Ne=null,Le=null,v=null,D=null,X=null,ee=null,fe=null,ne=null;return{setTest:function(W){G||(W?je(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(W){Ne!==W&&!G&&(i.stencilMask(W),Ne=W)},setFunc:function(W,_e,L){(Le!==W||v!==_e||D!==L)&&(i.stencilFunc(W,_e,L),Le=W,v=_e,D=L)},setOp:function(W,_e,L){(X!==W||ee!==_e||fe!==L)&&(i.stencilOp(W,_e,L),X=W,ee=_e,fe=L)},setLocked:function(W){G=W},setClear:function(W){ne!==W&&(i.clearStencil(W),ne=W)},reset:function(){G=!1,Ne=null,Le=null,v=null,D=null,X=null,ee=null,fe=null,ne=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap,p={},d={},m=new WeakMap,x=[],g=null,h=!1,y=null,_=null,b=null,I=null,C=null,T=null,z=null,w=new Qe(0,0,0),A=0,O=!1,Y=null,se=null,N=null,M=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,re=0,ge=i.getParameter(i.VERSION);ge.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ge)[1]),B=re>=1):ge.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),B=re>=2);let me=null,Pe={},te=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Te=new Ot().fromArray(te),Je=new Ot().fromArray(xe);function ke(G,Ne,Le,v){let D=new Uint8Array(4),X=i.createTexture();i.bindTexture(G,X),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<Le;ee++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ne,0,i.RGBA,1,1,v,0,i.RGBA,i.UNSIGNED_BYTE,D):i.texImage2D(Ne+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,D);return X}let Ke={};Ke[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Ke[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ke[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ke[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),je(i.DEPTH_TEST),l.setFunc(Ma),Ae(!1),P(_c),je(i.CULL_FACE),le(Kn);function je(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function $e(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function De(G,Ne){return d[G]!==Ne?(i.bindFramebuffer(G,Ne),d[G]=Ne,n&&(G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ne),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function k(G,Ne){let Le=x,v=!1;if(G)if(Le=m.get(Ne),Le===void 0&&(Le=[],m.set(Ne,Le)),G.isWebGLMultipleRenderTargets){let D=G.texture;if(Le.length!==D.length||Le[0]!==i.COLOR_ATTACHMENT0){for(let X=0,ee=D.length;X<ee;X++)Le[X]=i.COLOR_ATTACHMENT0+X;Le.length=D.length,v=!0}}else Le[0]!==i.COLOR_ATTACHMENT0&&(Le[0]=i.COLOR_ATTACHMENT0,v=!0);else Le[0]!==i.BACK&&(Le[0]=i.BACK,v=!0);v&&(t.isWebGL2?i.drawBuffers(Le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Le))}function Ie(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let de={[Ji]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};if(n)de[Mc]=i.MIN,de[bc]=i.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(de[Mc]=G.MIN_EXT,de[bc]=G.MAX_EXT)}let be={[sd]:i.ZERO,[rd]:i.ONE,[ad]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[ld]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function le(G,Ne,Le,v,D,X,ee,fe,ne,W){if(G===Kn){h===!0&&($e(i.BLEND),h=!1);return}if(h===!1&&(je(i.BLEND),h=!0),G!==td){if(G!==y||W!==O){if((_!==Ji||C!==Ji)&&(i.blendEquation(i.FUNC_ADD),_=Ji,C=Ji),W)switch(G){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,I=null,T=null,z=null,w.set(0,0,0),A=0,y=G,O=W}return}D=D||Ne,X=X||Le,ee=ee||v,(Ne!==_||D!==C)&&(i.blendEquationSeparate(de[Ne],de[D]),_=Ne,C=D),(Le!==b||v!==I||X!==T||ee!==z)&&(i.blendFuncSeparate(be[Le],be[v],be[X],be[ee]),b=Le,I=v,T=X,z=ee),(fe.equals(w)===!1||ne!==A)&&(i.blendColor(fe.r,fe.g,fe.b,ne),w.copy(fe),A=ne),y=G,O=!1}function Fe(G,Ne){G.side===Ht?$e(i.CULL_FACE):je(i.CULL_FACE);let Le=G.side===qt;Ne&&(Le=!Le),Ae(Le),G.blending===Ti&&G.transparent===!1?le(Kn):le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);let v=G.stencilWrite;c.setTest(v),v&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),K(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?je(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){Y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),Y=G)}function P(G){G!==Qu?(je(i.CULL_FACE),G!==se&&(G===_c?i.cullFace(i.BACK):G===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),se=G}function E(G){G!==N&&(B&&i.lineWidth(G),N=G)}function K(G,Ne,Le){G?(je(i.POLYGON_OFFSET_FILL),(M!==Ne||V!==Le)&&(i.polygonOffset(Ne,Le),M=Ne,V=Le)):$e(i.POLYGON_OFFSET_FILL)}function oe(G){G?je(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function pe(G){G===void 0&&(G=i.TEXTURE0+J-1),me!==G&&(i.activeTexture(G),me=G)}function he(G,Ne,Le){Le===void 0&&(me===null?Le=i.TEXTURE0+J-1:Le=me);let v=Pe[Le];v===void 0&&(v={type:void 0,texture:void 0},Pe[Le]=v),(v.type!==G||v.texture!==Ne)&&(me!==Le&&(i.activeTexture(Le),me=Le),i.bindTexture(G,Ne||Ke[G]),v.type=G,v.texture=Ne)}function Ue(){let G=Pe[me];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){Te.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Te.copy(G))}function ht(G){Je.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Je.copy(G))}function ut(G,Ne){let Le=f.get(Ne);Le===void 0&&(Le=new WeakMap,f.set(Ne,Le));let v=Le.get(G);v===void 0&&(v=i.getUniformBlockIndex(Ne,G.name),Le.set(G,v))}function ot(G,Ne){let v=f.get(Ne).get(G);u.get(Ne)!==v&&(i.uniformBlockBinding(Ne,v,G.__bindingPointIndex),u.set(Ne,v))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},me=null,Pe={},d={},m=new WeakMap,x=[],g=null,h=!1,y=null,_=null,b=null,I=null,C=null,T=null,z=null,w=new Qe(0,0,0),A=0,O=!1,Y=null,se=null,N=null,M=null,V=null,Te.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:je,disable:$e,bindFramebuffer:De,drawBuffers:k,useProgram:Ie,setBlending:le,setMaterial:Fe,setFlipSided:Ae,setCullFace:P,setLineWidth:E,setPolygonOffset:K,setScissorTest:oe,activeTexture:pe,bindTexture:he,unbindTexture:Ue,compressedTexImage2D:Se,compressedTexImage3D:We,texImage2D:tt,texImage3D:Ye,updateUBOMapping:ut,uniformBlockBinding:ot,texStorage2D:at,texStorage3D:st,texSubImage2D:et,texSubImage3D:rt,compressedTexSubImage2D:ce,compressedTexSubImage3D:xt,scissor:nt,viewport:ht,reset:we}}function Ug(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return d?new OffscreenCanvas(P,E):Ca("canvas")}function x(P,E,K,oe){let pe=1;if((P.width>oe||P.height>oe)&&(pe=oe/Math.max(P.width,P.height)),pe<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let he=E?gl:Math.floor,Ue=he(pe*P.width),Se=he(pe*P.height);f===void 0&&(f=m(Ue,Se));let We=K?m(Ue,Se):f;return We.width=Ue,We.height=Se,We.getContext("2d").drawImage(P,0,0,Ue,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ue+"x"+Se+")."),We}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function g(P){return eh(P.width)&&eh(P.height)}function h(P){return o?!1:P.wrapS!==Wn||P.wrapT!==Wn||P.minFilter!==Kt&&P.minFilter!==Un}function y(P,E){return P.generateMipmaps&&E&&P.minFilter!==Kt&&P.minFilter!==Un}function _(P){i.generateMipmap(P)}function b(P,E,K,oe,pe=!1){if(o===!1)return E;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=E;if(E===i.RED&&(K===i.FLOAT&&(he=i.R32F),K===i.HALF_FLOAT&&(he=i.R16F),K===i.UNSIGNED_BYTE&&(he=i.R8)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(he=i.R8UI),K===i.UNSIGNED_SHORT&&(he=i.R16UI),K===i.UNSIGNED_INT&&(he=i.R32UI),K===i.BYTE&&(he=i.R8I),K===i.SHORT&&(he=i.R16I),K===i.INT&&(he=i.R32I)),E===i.RG&&(K===i.FLOAT&&(he=i.RG32F),K===i.HALF_FLOAT&&(he=i.RG16F),K===i.UNSIGNED_BYTE&&(he=i.RG8)),E===i.RGBA){let Ue=pe?Sa:St.getTransfer(oe);K===i.FLOAT&&(he=i.RGBA32F),K===i.HALF_FLOAT&&(he=i.RGBA16F),K===i.UNSIGNED_BYTE&&(he=Ue===Rt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(P,E,K){return y(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==Kt&&P.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){return P===Kt||P===wc||P===To?i.NEAREST:i.LINEAR}function T(P){let E=P.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&u.delete(E)}function z(P){let E=P.target;E.removeEventListener("dispose",z),O(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let K=P.source,oe=p.get(K);if(oe){let pe=oe[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&A(P),Object.keys(oe).length===0&&p.delete(K)}n.remove(P)}function A(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let K=P.source,oe=p.get(K);delete oe[E.__cacheKey],a.memory.textures--}function O(P){let E=P.texture,K=n.get(P),oe=n.get(E);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(K.__webglFramebuffer[pe]))for(let he=0;he<K.__webglFramebuffer[pe].length;he++)i.deleteFramebuffer(K.__webglFramebuffer[pe][he]);else i.deleteFramebuffer(K.__webglFramebuffer[pe]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[pe])}else{if(Array.isArray(K.__webglFramebuffer))for(let pe=0;pe<K.__webglFramebuffer.length;pe++)i.deleteFramebuffer(K.__webglFramebuffer[pe]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let pe=0;pe<K.__webglColorRenderbuffer.length;pe++)K.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[pe]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let pe=0,he=E.length;pe<he;pe++){let Ue=n.get(E[pe]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),a.memory.textures--),n.remove(E[pe])}n.remove(E),n.remove(P)}let Y=0;function se(){Y=0}function N(){let P=Y;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),Y+=1,P}function M(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function V(P,E){let K=n.get(P);if(P.isVideoTexture&&Fe(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){let oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(K,P,E);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function J(P,E){let K=n.get(P);if(P.version>0&&K.__version!==P.version){Te(K,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function B(P,E){let K=n.get(P);if(P.version>0&&K.__version!==P.version){Te(K,P,E);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function re(P,E){let K=n.get(P);if(P.version>0&&K.__version!==P.version){Je(K,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}let ge={[_r]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},me={[Kt]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Ad]:i.LINEAR_MIPMAP_NEAREST,[yr]:i.LINEAR_MIPMAP_LINEAR},Pe={[Bd]:i.NEVER,[Xd]:i.ALWAYS,[kd]:i.LESS,[lu]:i.LEQUAL,[Hd]:i.EQUAL,[Wd]:i.GEQUAL,[Gd]:i.GREATER,[Vd]:i.NOTEQUAL};function te(P,E,K){if(K?(i.texParameteri(P,i.TEXTURE_WRAP_S,ge[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ge[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ge[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,me[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,me[E.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,C(E.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==Kt&&E.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Kt||E.minFilter!==To&&E.minFilter!==yr||E.type===Ei&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Xn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(P,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function xe(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));let oe=E.source,pe=p.get(oe);pe===void 0&&(pe={},p.set(oe,pe));let he=M(E);if(he!==P.__cacheKey){pe[he]===void 0&&(pe[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),pe[he].usedTimes++;let Ue=pe[P.__cacheKey];Ue!==void 0&&(pe[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(E)),P.__cacheKey=he,P.__webglTexture=pe[he].texture}return K}function Te(P,E,K){let oe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=i.TEXTURE_3D);let pe=xe(P,E),he=E.source;t.bindTexture(oe,P.__webglTexture,i.TEXTURE0+K);let Ue=n.get(he);if(he.version!==Ue.__version||pe===!0){t.activeTexture(i.TEXTURE0+K);let Se=St.getPrimaries(St.workingColorSpace),We=E.colorSpace===Nn?null:St.getPrimaries(E.colorSpace),et=E.colorSpace===Nn||Se===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let rt=h(E)&&g(E.image)===!1,ce=x(E.image,rt,!1,s.maxTextureSize);ce=Ae(E,ce);let xt=g(ce)||o,at=r.convert(E.format,E.colorSpace),st=r.convert(E.type),tt=b(E.internalFormat,at,st,E.colorSpace,E.isVideoTexture);te(oe,E,xt);let Ye,nt=E.mipmaps,ht=o&&E.isVideoTexture!==!0&&tt!==au,ut=Ue.__version===void 0||pe===!0,ot=I(E,ce,xt);if(E.isDepthTexture)tt=i.DEPTH_COMPONENT,o?E.type===Ei?tt=i.DEPTH_COMPONENT32F:E.type===Si?tt=i.DEPTH_COMPONENT24:E.type===ji?tt=i.DEPTH24_STENCIL8:tt=i.DEPTH_COMPONENT16:E.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qi&&tt===i.DEPTH_COMPONENT&&E.type!==ac&&E.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Si,st=r.convert(E.type)),E.format===zs&&tt===i.DEPTH_COMPONENT&&(tt=i.DEPTH_STENCIL,E.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ji,st=r.convert(E.type))),ut&&(ht?t.texStorage2D(i.TEXTURE_2D,1,tt,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,tt,ce.width,ce.height,0,at,st,null));else if(E.isDataTexture)if(nt.length>0&&xt){ht&&ut&&t.texStorage2D(i.TEXTURE_2D,ot,tt,nt[0].width,nt[0].height);for(let we=0,G=nt.length;we<G;we++)Ye=nt[we],ht?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ye.width,Ye.height,at,st,Ye.data):t.texImage2D(i.TEXTURE_2D,we,tt,Ye.width,Ye.height,0,at,st,Ye.data);E.generateMipmaps=!1}else ht?(ut&&t.texStorage2D(i.TEXTURE_2D,ot,tt,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,at,st,ce.data)):t.texImage2D(i.TEXTURE_2D,0,tt,ce.width,ce.height,0,at,st,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ht&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,tt,nt[0].width,nt[0].height,ce.depth);for(let we=0,G=nt.length;we<G;we++)Ye=nt[we],E.format!==Sn?at!==null?ht?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ye.width,Ye.height,ce.depth,at,Ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,tt,Ye.width,Ye.height,ce.depth,0,Ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Ye.width,Ye.height,ce.depth,at,st,Ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,tt,Ye.width,Ye.height,ce.depth,0,at,st,Ye.data)}else{ht&&ut&&t.texStorage2D(i.TEXTURE_2D,ot,tt,nt[0].width,nt[0].height);for(let we=0,G=nt.length;we<G;we++)Ye=nt[we],E.format!==Sn?at!==null?ht?t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Ye.width,Ye.height,at,Ye.data):t.compressedTexImage2D(i.TEXTURE_2D,we,tt,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ye.width,Ye.height,at,st,Ye.data):t.texImage2D(i.TEXTURE_2D,we,tt,Ye.width,Ye.height,0,at,st,Ye.data)}else if(E.isDataArrayTexture)ht?(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,tt,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,at,st,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,ce.width,ce.height,ce.depth,0,at,st,ce.data);else if(E.isData3DTexture)ht?(ut&&t.texStorage3D(i.TEXTURE_3D,ot,tt,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,at,st,ce.data)):t.texImage3D(i.TEXTURE_3D,0,tt,ce.width,ce.height,ce.depth,0,at,st,ce.data);else if(E.isFramebufferTexture){if(ut)if(ht)t.texStorage2D(i.TEXTURE_2D,ot,tt,ce.width,ce.height);else{let we=ce.width,G=ce.height;for(let Ne=0;Ne<ot;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,tt,we,G,0,at,st,null),we>>=1,G>>=1}}else if(nt.length>0&&xt){ht&&ut&&t.texStorage2D(i.TEXTURE_2D,ot,tt,nt[0].width,nt[0].height);for(let we=0,G=nt.length;we<G;we++)Ye=nt[we],ht?t.texSubImage2D(i.TEXTURE_2D,we,0,0,at,st,Ye):t.texImage2D(i.TEXTURE_2D,we,tt,at,st,Ye);E.generateMipmaps=!1}else ht?(ut&&t.texStorage2D(i.TEXTURE_2D,ot,tt,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,at,st,ce)):t.texImage2D(i.TEXTURE_2D,0,tt,at,st,ce);y(E,xt)&&_(oe),Ue.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Je(P,E,K){if(E.image.length!==6)return;let oe=xe(P,E),pe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);let he=n.get(pe);if(pe.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+K);let Ue=St.getPrimaries(St.workingColorSpace),Se=E.colorSpace===Nn?null:St.getPrimaries(E.colorSpace),We=E.colorSpace===Nn||Ue===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let et=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let we=0;we<6;we++)!et&&!rt?ce[we]=x(E.image[we],!1,!0,s.maxCubemapSize):ce[we]=rt?E.image[we].image:E.image[we],ce[we]=Ae(E,ce[we]);let xt=ce[0],at=g(xt)||o,st=r.convert(E.format,E.colorSpace),tt=r.convert(E.type),Ye=b(E.internalFormat,st,tt,E.colorSpace),nt=o&&E.isVideoTexture!==!0,ht=he.__version===void 0||oe===!0,ut=I(E,xt,at);te(i.TEXTURE_CUBE_MAP,E,at);let ot;if(et){nt&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ye,xt.width,xt.height);for(let we=0;we<6;we++){ot=ce[we].mipmaps;for(let G=0;G<ot.length;G++){let Ne=ot[G];E.format!==Sn?st!==null?nt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,0,0,Ne.width,Ne.height,st,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,0,0,Ne.width,Ne.height,st,tt,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,Ye,Ne.width,Ne.height,0,st,tt,Ne.data)}}}else{ot=E.mipmaps,nt&&ht&&(ot.length>0&&ut++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ye,ce[0].width,ce[0].height));for(let we=0;we<6;we++)if(rt){nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ce[we].width,ce[we].height,st,tt,ce[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ye,ce[we].width,ce[we].height,0,st,tt,ce[we].data);for(let G=0;G<ot.length;G++){let Le=ot[G].image[we].image;nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,0,0,Le.width,Le.height,st,tt,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,Ye,Le.width,Le.height,0,st,tt,Le.data)}}else{nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,st,tt,ce[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ye,st,tt,ce[we]);for(let G=0;G<ot.length;G++){let Ne=ot[G];nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,0,0,st,tt,Ne.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,Ye,st,tt,Ne.image[we])}}}y(E,at)&&_(i.TEXTURE_CUBE_MAP),he.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ke(P,E,K,oe,pe,he){let Ue=r.convert(K.format,K.colorSpace),Se=r.convert(K.type),We=b(K.internalFormat,Ue,Se,K.colorSpace);if(!n.get(E).__hasExternalTextures){let rt=Math.max(1,E.width>>he),ce=Math.max(1,E.height>>he);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,he,We,rt,ce,E.depth,0,Ue,Se,null):t.texImage2D(pe,he,We,rt,ce,0,Ue,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),le(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,pe,n.get(K).__webglTexture,0,be(E)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,pe,n.get(K).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(P,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let oe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||le(E)){let pe=E.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Ei?oe=i.DEPTH_COMPONENT32F:pe.type===Si&&(oe=i.DEPTH_COMPONENT24));let he=be(E);le(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,oe,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,oe,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){let oe=be(E);K&&le(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,E.width,E.height):le(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{let oe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let pe=0;pe<oe.length;pe++){let he=oe[pe],Ue=r.convert(he.format,he.colorSpace),Se=r.convert(he.type),We=b(he.internalFormat,Ue,Se,he.colorSpace),et=be(E);K&&le(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,We,E.width,E.height):le(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,We,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,We,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);let oe=n.get(E.depthTexture).__webglTexture,pe=be(E);if(E.depthTexture.format===Qi)le(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===zs)le(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function $e(P){let E=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");je(E.__webglFramebuffer,P)}else if(K){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ke(E.__webglDepthbuffer[oe],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Ke(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(P,E,K){let oe=n.get(P);E!==void 0&&ke(oe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&$e(P)}function k(P){let E=P.texture,K=n.get(P),oe=n.get(E);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=E.version,a.memory.textures++);let pe=P.isWebGLCubeRenderTarget===!0,he=P.isWebGLMultipleRenderTargets===!0,Ue=g(P)||o;if(pe){K.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(o&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Se]=[];for(let We=0;We<E.mipmaps.length;We++)K.__webglFramebuffer[Se][We]=i.createFramebuffer()}else K.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)K.__webglFramebuffer[Se]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let Se=P.texture;for(let We=0,et=Se.length;We<et;We++){let rt=n.get(Se[We]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&le(P)===!1){let Se=he?E:[E];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let We=0;We<Se.length;We++){let et=Se[We];K.__webglColorRenderbuffer[We]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[We]);let rt=r.convert(et.format,et.colorSpace),ce=r.convert(et.type),xt=b(et.internalFormat,rt,ce,et.colorSpace,P.isXRRenderTarget===!0),at=be(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,xt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,K.__webglColorRenderbuffer[We])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),te(i.TEXTURE_CUBE_MAP,E,Ue);for(let Se=0;Se<6;Se++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)ke(K.__webglFramebuffer[Se][We],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We);else ke(K.__webglFramebuffer[Se],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(E,Ue)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let Se=P.texture;for(let We=0,et=Se.length;We<et;We++){let rt=Se[We],ce=n.get(rt);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),te(i.TEXTURE_2D,rt,Ue),ke(K.__webglFramebuffer,P,rt,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,0),y(rt,Ue)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?Se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,oe.__webglTexture),te(Se,E,Ue),o&&E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)ke(K.__webglFramebuffer[We],P,E,i.COLOR_ATTACHMENT0,Se,We);else ke(K.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,Se,0);y(E,Ue)&&_(Se),t.unbindTexture()}P.depthBuffer&&$e(P)}function Ie(P){let E=g(P)||o,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let oe=0,pe=K.length;oe<pe;oe++){let he=K[oe];if(y(he,E)){let Ue=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(he).__webglTexture;t.bindTexture(Ue,Se),_(Ue),t.unbindTexture()}}}function de(P){if(o&&P.samples>0&&le(P)===!1){let E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,oe=P.height,pe=i.COLOR_BUFFER_BIT,he=[],Ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(P),We=P.isWebGLMultipleRenderTargets===!0;if(We)for(let et=0;et<E.length;et++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let et=0;et<E.length;et++){he.push(i.COLOR_ATTACHMENT0+et),P.depthBuffer&&he.push(Ue);let rt=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(rt===!1&&(P.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),We&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[et]),rt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),We){let ce=n.get(E[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,K,oe,0,0,K,oe,pe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),We)for(let et=0;et<E.length;et++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,Se.__webglColorRenderbuffer[et]);let rt=n.get(E[et]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function be(P){return Math.min(s.maxSamples,P.samples)}function le(P){let E=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(P){let E=a.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Ae(P,E){let K=P.colorSpace,oe=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ml||K!==di&&K!==Nn&&(St.getTransfer(K)===Rt?o===!1?e.has("EXT_sRGB")===!0&&oe===Sn?(P.format=ml,P.minFilter=Un,P.generateMipmaps=!1):E=Pa.sRGBToLinear(E):(oe!==Sn||pe!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}this.allocateTextureUnit=N,this.resetTextureUnits=se,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=B,this.setTextureCube=re,this.rebindTextures=De,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=le}function Ng(i,e,t){let n=t.isWebGL2;function s(r,a=Nn){let o,l=St.getTransfer(a);if(r===Ai)return i.UNSIGNED_BYTE;if(r===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rd)return i.BYTE;if(r===Cd)return i.SHORT;if(r===ac)return i.UNSIGNED_SHORT;if(r===eu)return i.INT;if(r===Si)return i.UNSIGNED_INT;if(r===Ei)return i.FLOAT;if(r===Xn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pd)return i.ALPHA;if(r===Sn)return i.RGBA;if(r===Id)return i.LUMINANCE;if(r===Ld)return i.LUMINANCE_ALPHA;if(r===Qi)return i.DEPTH_COMPONENT;if(r===zs)return i.DEPTH_STENCIL;if(r===ml)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dd)return i.RED;if(r===iu)return i.RED_INTEGER;if(r===Ud)return i.RG;if(r===su)return i.RG_INTEGER;if(r===ru)return i.RGBA_INTEGER;if(r===Ao||r===Ro||r===Co||r===Po)if(l===Rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sc||r===Ec||r===Tc||r===Ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===au)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rc||r===Cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rc)return l===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Oc||r===zc||r===Fc||r===Bc||r===kc||r===Hc||r===Gc||r===Vc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vc)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Io||r===Wc||r===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Io)return l===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===qc||r===Yc||r===Zc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Io)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Cl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&p>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pl=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,p=null,d=null,m=null,x=t.getContextAttributes(),g=null,h=null,y=[],_=[],b=new ve,I=null,C=new jt;C.layers.enable(1),C.viewport=new Ot;let T=new jt;T.layers.enable(2),T.viewport=new Ot;let z=[C,T],w=new Cl;w.layers.enable(1),w.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let xe=y[te];return xe===void 0&&(xe=new mr,y[te]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(te){let xe=y[te];return xe===void 0&&(xe=new mr,y[te]=xe),xe.getGripSpace()},this.getHand=function(te){let xe=y[te];return xe===void 0&&(xe=new mr,y[te]=xe),xe.getHandSpace()};function Y(te){let xe=_.indexOf(te.inputSource);if(xe===-1)return;let Te=y[xe];Te!==void 0&&(Te.update(te.inputSource,te.frame,c||a),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",N);for(let te=0;te<y.length;te++){let xe=_[te];xe!==null&&(_[te]=null,y[te].disconnect(xe))}A=null,O=null,e.setRenderTarget(g),d=null,p=null,f=null,s=null,h=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",se),s.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let xe={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),h=new _n(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let xe=null,Te=null,Je=null;x.depth&&(Je=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=x.stencil?zs:Qi,Te=x.stencil?ji:Si);let ke={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(ke),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new _n(p.textureWidth,p.textureHeight,{format:Sn,type:Ai,depthTexture:new Ba(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ke=e.properties.get(h);Ke.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(te){for(let xe=0;xe<te.removed.length;xe++){let Te=te.removed[xe],Je=_.indexOf(Te);Je>=0&&(_[Je]=null,y[Je].disconnect(Te))}for(let xe=0;xe<te.added.length;xe++){let Te=te.added[xe],Je=_.indexOf(Te);if(Je===-1){for(let Ke=0;Ke<y.length;Ke++)if(Ke>=_.length){_.push(Te),Je=Ke;break}else if(_[Ke]===null){_[Ke]=Te,Je=Ke;break}if(Je===-1)break}let ke=y[Je];ke&&ke.connect(Te)}}let M=new F,V=new F;function J(te,xe,Te){M.setFromMatrixPosition(xe.matrixWorld),V.setFromMatrixPosition(Te.matrixWorld);let Je=M.distanceTo(V),ke=xe.projectionMatrix.elements,Ke=Te.projectionMatrix.elements,je=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),De=(ke[9]+1)/ke[5],k=(ke[9]-1)/ke[5],Ie=(ke[8]-1)/ke[0],de=(Ke[8]+1)/Ke[0],be=je*Ie,le=je*de,Fe=Je/(-Ie+de),Ae=Fe*-Ie;xe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ae),te.translateZ(Fe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let P=je+Fe,E=$e+Fe,K=be-Ae,oe=le+(Je-Ae),pe=De*$e/E*P,he=k*$e/E*P;te.projectionMatrix.makePerspective(K,oe,pe,he,P,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function B(te,xe){xe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(xe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;w.near=T.near=C.near=te.near,w.far=T.far=C.far=te.far,(A!==w.near||O!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,O=w.far);let xe=te.parent,Te=w.cameras;B(w,xe);for(let Je=0;Je<Te.length;Je++)B(Te[Je],xe);Te.length===2?J(w,C,T):w.projectionMatrix.copy(C.projectionMatrix),re(te,w,xe)};function re(te,xe,Te){Te===null?te.matrix.copy(xe.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(xe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ra*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(te){l=te,p!==null&&(p.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)};let ge=null;function me(te,xe){if(u=xe.getViewerPose(c||a),m=xe,u!==null){let Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Je=!1;Te.length!==w.cameras.length&&(w.cameras.length=0,Je=!0);for(let ke=0;ke<Te.length;ke++){let Ke=Te[ke],je=null;if(d!==null)je=d.getViewport(Ke);else{let De=f.getViewSubImage(p,Ke);je=De.viewport,ke===0&&(e.setRenderTargetTextures(h,De.colorTexture,p.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(h))}let $e=z[ke];$e===void 0&&($e=new jt,$e.layers.enable(ke),$e.viewport=new Ot,z[ke]=$e),$e.matrix.fromArray(Ke.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ke.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(je.x,je.y,je.width,je.height),ke===0&&(w.matrix.copy($e.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Je===!0&&w.cameras.push($e)}}for(let Te=0;Te<y.length;Te++){let Je=_[Te],ke=y[Te];Je!==null&&ke!==void 0&&ke.update(Je,xe,c||a)}ge&&ge(te,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),m=null}let Pe=new du;Pe.setAnimationLoop(me),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}};function zg(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,uu(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,y,_,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),f(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),p(g,h),h.isMeshPhysicalMaterial&&d(g,h,b)):h.isMeshMatcapMaterial?(r(g,h),m(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),x(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,y,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===qt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===qt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let y=e.get(h).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,y,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*y,g.scale.value=_*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function p(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,y){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){let y=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(m(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",g));let I=_.program;n.updateUBOMapping(y,I);let C=e.render.frame;r[y.id]!==C&&(p(y),r[y.id]=C)}function u(y){let _=f();y.__bindingPointIndex=_;let b=i.createBuffer(),I=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let _=s[y.id],b=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,T=b.length;C<T;C++){let z=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,A=z.length;w<A;w++){let O=z[w];if(d(O,C,w,I)===!0){let Y=O.__offset,se=Array.isArray(O.value)?O.value:[O.value],N=0;for(let M=0;M<se.length;M++){let V=se[M],J=x(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,Y+N,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,b,I){let C=y.value,T=_+"_"+b;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{let z=I[T];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return I[T]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function m(y){let _=y.uniforms,b=0,I=16;for(let T=0,z=_.length;T<z;T++){let w=Array.isArray(_[T])?_[T]:[_[T]];for(let A=0,O=w.length;A<O;A++){let Y=w[A],se=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,M=se.length;N<M;N++){let V=se[N],J=x(V),B=b%I;B!==0&&I-B<J.boundary&&(b+=I-B),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=J.storage}}}let C=b%I;return C>0&&(b+=I-C),y.__size=b,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function h(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var ts=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let d=new Uint32Array(4),m=new Int32Array(4),x=null,g=null,h=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;let _=this,b=!1,I=0,C=0,T=null,z=-1,w=null,A=new Ot,O=new Ot,Y=null,se=new Qe(0),N=0,M=t.width,V=t.height,J=1,B=null,re=null,ge=new Ot(0,0,M,V),me=new Ot(0,0,M,V),Pe=!1,te=new vr,xe=!1,Te=!1,Je=null,ke=new wt,Ke=new ve,je=new F,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?J:1}let k=n;function Ie(R,q){for(let $=0;$<R.length;$++){let S=R[$],U=t.getContext(S,q);if(U!==null)return U}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),k===null){let q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),k=Ie(q,R),k===null)throw Ie(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let de,be,le,Fe,Ae,P,E,K,oe,pe,he,Ue,Se,We,et,rt,ce,xt,at,st,tt,Ye,nt,ht;function ut(){de=new im(k),be=new K0(k,de,e),de.init(be),Ye=new Ng(k,de,be),le=new Dg(k,de,be),Fe=new am(k),Ae=new Mg,P=new Ug(k,de,le,Ae,be,Ye,Fe),E=new Q0(_),K=new nm(_),oe=new pf(k,be),nt=new J0(k,de,oe,be),pe=new sm(k,oe,Fe,nt),he=new hm(k,pe,oe,Fe),at=new cm(k,be,P),rt=new j0(Ae),Ue=new vg(_,E,K,de,be,nt,rt),Se=new zg(_,Ae),We=new wg,et=new Cg(de,be),xt=new Z0(_,E,K,le,he,p,l),ce=new Lg(_,he,be),ht=new Fg(k,Fe,be,le),st=new $0(k,de,Fe,be),tt=new rm(k,de,Fe,be),Fe.programs=Ue.programs,_.capabilities=be,_.extensions=de,_.properties=Ae,_.renderLists=We,_.shadowMap=ce,_.state=le,_.info=Fe}ut();let ot=new Pl(_,k);this.xr=ot,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=de.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=de.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(M,V,!1))},this.getSize=function(R){return R.set(M,V)},this.setSize=function(R,q,$=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=R,V=q,t.width=Math.floor(R*J),t.height=Math.floor(q*J),$===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(M*J,V*J).floor()},this.setDrawingBufferSize=function(R,q,$){M=R,V=q,J=$,t.width=Math.floor(R*$),t.height=Math.floor(q*$),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,q,$,S){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,q,$,S),le.viewport(A.copy(ge).multiplyScalar(J).floor())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,q,$,S){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,q,$,S),le.scissor(O.copy(me).multiplyScalar(J).floor())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){le.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(R=!0,q=!0,$=!0){let S=0;if(R){let U=!1;if(T!==null){let Z=T.texture.format;U=Z===ru||Z===su||Z===iu}if(U){let Z=T.texture.type,Q=Z===Ai||Z===Si||Z===ac||Z===ji||Z===tu||Z===nu,ue=xt.getClearColor(),ae=xt.getClearAlpha(),ye=ue.r,Ce=ue.g,Ge=ue.b;Q?(d[0]=ye,d[1]=Ce,d[2]=Ge,d[3]=ae,k.clearBufferuiv(k.COLOR,0,d)):(m[0]=ye,m[1]=Ce,m[2]=Ge,m[3]=ae,k.clearBufferiv(k.COLOR,0,m))}else S|=k.COLOR_BUFFER_BIT}q&&(S|=k.DEPTH_BUFFER_BIT),$&&(S|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(S)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),We.dispose(),et.dispose(),Ae.dispose(),E.dispose(),K.dispose(),he.dispose(),nt.dispose(),ht.dispose(),Ue.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ne),ot.removeEventListener("sessionend",W),Je&&(Je.dispose(),Je=null),_e.stop()};function we(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let R=Fe.autoReset,q=ce.enabled,$=ce.autoUpdate,S=ce.needsUpdate,U=ce.type;ut(),Fe.autoReset=R,ce.enabled=q,ce.autoUpdate=$,ce.needsUpdate=S,ce.type=U}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Le(R){let q=R.target;q.removeEventListener("dispose",Le),v(q)}function v(R){D(R),Ae.remove(R)}function D(R){let q=Ae.get(R).programs;q!==void 0&&(q.forEach(function($){Ue.releaseProgram($)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,$,S,U,Z){q===null&&(q=$e);let Q=U.isMesh&&U.matrixWorld.determinant()<0,ue=He(R,q,$,S,U);le.setMaterial(S,Q);let ae=$.index,ye=1;if(S.wireframe===!0){if(ae=pe.getWireframeAttribute($),ae===void 0)return;ye=2}let Ce=$.drawRange,Ge=$.attributes.position,dt=Ce.start*ye,Me=(Ce.start+Ce.count)*ye;Z!==null&&(dt=Math.max(dt,Z.start*ye),Me=Math.min(Me,(Z.start+Z.count)*ye)),ae!==null?(dt=Math.max(dt,0),Me=Math.min(Me,ae.count)):Ge!=null&&(dt=Math.max(dt,0),Me=Math.min(Me,Ge.count));let Oe=Me-dt;if(Oe<0||Oe===1/0)return;nt.setup(U,S,ue,$,ae);let pt,ct=st;if(ae!==null&&(pt=oe.get(ae),ct=tt,ct.setIndex(pt)),U.isMesh)S.wireframe===!0?(le.setLineWidth(S.wireframeLinewidth*De()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(U.isLine){let it=S.linewidth;it===void 0&&(it=1),le.setLineWidth(it*De()),U.isLineSegments?ct.setMode(k.LINES):U.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else U.isPoints?ct.setMode(k.POINTS):U.isSprite&&ct.setMode(k.TRIANGLES);if(U.isBatchedMesh)ct.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)ct.renderInstances(dt,Oe,U.count);else if($.isInstancedBufferGeometry){let it=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ln=Math.min($.instanceCount,it);ct.renderInstances(dt,Oe,ln)}else ct.render(dt,Oe)};function X(R,q,$){R.transparent===!0&&R.side===Ht&&R.forceSinglePass===!1?(R.side=qt,R.needsUpdate=!0,Xe(R,q,$),R.side=Ci,R.needsUpdate=!0,Xe(R,q,$),R.side=Ht):Xe(R,q,$)}this.compile=function(R,q,$=null){$===null&&($=R),g=et.get($),g.init(),y.push(g),$.traverseVisible(function(U){U.isLight&&U.layers.test(q.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),R!==$&&R.traverseVisible(function(U){U.isLight&&U.layers.test(q.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(_._useLegacyLights);let S=new Set;return R.traverse(function(U){let Z=U.material;if(Z)if(Array.isArray(Z))for(let Q=0;Q<Z.length;Q++){let ue=Z[Q];X(ue,$,U),S.add(ue)}else X(Z,$,U),S.add(Z)}),y.pop(),g=null,S},this.compileAsync=function(R,q,$=null){let S=this.compile(R,q,$);return new Promise(U=>{function Z(){if(S.forEach(function(Q){Ae.get(Q).currentProgram.isReady()&&S.delete(Q)}),S.size===0){U(R);return}setTimeout(Z,10)}de.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let ee=null;function fe(R){ee&&ee(R)}function ne(){_e.stop()}function W(){_e.start()}let _e=new du;_e.setAnimationLoop(fe),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(R){ee=R,ot.setAnimationLoop(R),R===null?_e.stop():_e.start()},ot.addEventListener("sessionstart",ne),ot.addEventListener("sessionend",W),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,T),g=et.get(R,y.length),g.init(),y.push(g),ke.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(ke),Te=this.localClippingEnabled,xe=rt.init(this.clippingPlanes,Te),x=We.get(R,h.length),x.init(),h.push(x),L(R,q,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(B,re),this.info.render.frame++,xe===!0&&rt.beginShadows();let $=g.state.shadowsArray;if(ce.render($,R,q),xe===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(x,R),g.setupLights(_._useLegacyLights),q.isArrayCamera){let S=q.cameras;for(let U=0,Z=S.length;U<Z;U++){let Q=S[U];H(x,R,Q,Q.viewport)}}else H(x,R,q);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,q),nt.resetDefaultState(),z=-1,w=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function L(R,q,$,S){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){S&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ke);let Q=he.update(R),ue=R.material;ue.visible&&x.push(R,Q,ue,$,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){let Q=he.update(R),ue=R.material;if(S&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),je.copy(Q.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(ke)),Array.isArray(ue)){let ae=Q.groups;for(let ye=0,Ce=ae.length;ye<Ce;ye++){let Ge=ae[ye],dt=ue[Ge.materialIndex];dt&&dt.visible&&x.push(R,Q,dt,$,je.z,Ge)}}else ue.visible&&x.push(R,Q,ue,$,je.z,null)}}let Z=R.children;for(let Q=0,ue=Z.length;Q<ue;Q++)L(Z[Q],q,$,S)}function H(R,q,$,S){let U=R.opaque,Z=R.transmissive,Q=R.transparent;g.setupLightsView($),xe===!0&&rt.setGlobalState(_.clippingPlanes,$),Z.length>0&&j(U,Z,q,$),S&&le.viewport(A.copy(S)),U.length>0&&Ee(U,q,$),Z.length>0&&Ee(Z,q,$),Q.length>0&&Ee(Q,q,$),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function j(R,q,$,S){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Z=be.isWebGL2;Je===null&&(Je=new _n(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Xn:Ai,minFilter:yr,samples:Z?4:0})),_.getDrawingBufferSize(Ke),Z?Je.setSize(Ke.x,Ke.y):Je.setSize(gl(Ke.x),gl(Ke.y));let Q=_.getRenderTarget();_.setRenderTarget(Je),_.getClearColor(se),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();let ue=_.toneMapping;_.toneMapping=jn,Ee(R,$,S),P.updateMultisampleRenderTarget(Je),P.updateRenderTargetMipmap(Je);let ae=!1;for(let ye=0,Ce=q.length;ye<Ce;ye++){let Ge=q[ye],dt=Ge.object,Me=Ge.geometry,Oe=Ge.material,pt=Ge.group;if(Oe.side===Ht&&dt.layers.test(S.layers)){let ct=Oe.side;Oe.side=qt,Oe.needsUpdate=!0,Re(dt,$,S,Me,Oe,pt),Oe.side=ct,Oe.needsUpdate=!0,ae=!0}}ae===!0&&(P.updateMultisampleRenderTarget(Je),P.updateRenderTargetMipmap(Je)),_.setRenderTarget(Q),_.setClearColor(se,N),_.toneMapping=ue}function Ee(R,q,$){let S=q.isScene===!0?q.overrideMaterial:null;for(let U=0,Z=R.length;U<Z;U++){let Q=R[U],ue=Q.object,ae=Q.geometry,ye=S===null?Q.material:S,Ce=Q.group;ue.layers.test($.layers)&&Re(ue,q,$,ae,ye,Ce)}}function Re(R,q,$,S,U,Z){R.onBeforeRender(_,q,$,S,U,Z),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),U.onBeforeRender(_,q,$,S,R,Z),U.transparent===!0&&U.side===Ht&&U.forceSinglePass===!1?(U.side=qt,U.needsUpdate=!0,_.renderBufferDirect($,q,S,U,R,Z),U.side=Ci,U.needsUpdate=!0,_.renderBufferDirect($,q,S,U,R,Z),U.side=Ht):_.renderBufferDirect($,q,S,U,R,Z),R.onAfterRender(_,q,$,S,U,Z)}function Xe(R,q,$){q.isScene!==!0&&(q=$e);let S=Ae.get(R),U=g.state.lights,Z=g.state.shadowsArray,Q=U.state.version,ue=Ue.getParameters(R,U.state,Z,q,$),ae=Ue.getProgramCacheKey(ue),ye=S.programs;S.environment=R.isMeshStandardMaterial?q.environment:null,S.fog=q.fog,S.envMap=(R.isMeshStandardMaterial?K:E).get(R.envMap||S.environment),ye===void 0&&(R.addEventListener("dispose",Le),ye=new Map,S.programs=ye);let Ce=ye.get(ae);if(Ce!==void 0){if(S.currentProgram===Ce&&S.lightsStateVersion===Q)return lt(R,ue),Ce}else ue.uniforms=Ue.getUniforms(R),R.onBuild($,ue,_),R.onBeforeCompile(ue,_),Ce=Ue.acquireProgram(ue,ae),ye.set(ae,Ce),S.uniforms=ue.uniforms;let Ge=S.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=rt.uniform),lt(R,ue),S.needsLights=It(R),S.lightsStateVersion=Q,S.needsLights&&(Ge.ambientLightColor.value=U.state.ambient,Ge.lightProbe.value=U.state.probe,Ge.directionalLights.value=U.state.directional,Ge.directionalLightShadows.value=U.state.directionalShadow,Ge.spotLights.value=U.state.spot,Ge.spotLightShadows.value=U.state.spotShadow,Ge.rectAreaLights.value=U.state.rectArea,Ge.ltc_1.value=U.state.rectAreaLTC1,Ge.ltc_2.value=U.state.rectAreaLTC2,Ge.pointLights.value=U.state.point,Ge.pointLightShadows.value=U.state.pointShadow,Ge.hemisphereLights.value=U.state.hemi,Ge.directionalShadowMap.value=U.state.directionalShadowMap,Ge.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ge.spotShadowMap.value=U.state.spotShadowMap,Ge.spotLightMatrix.value=U.state.spotLightMatrix,Ge.spotLightMap.value=U.state.spotLightMap,Ge.pointShadowMap.value=U.state.pointShadowMap,Ge.pointShadowMatrix.value=U.state.pointShadowMatrix),S.currentProgram=Ce,S.uniformsList=null,Ce}function qe(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Us.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function lt(R,q){let $=Ae.get(R);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function He(R,q,$,S,U){q.isScene!==!0&&(q=$e),P.resetTextureUnits();let Z=q.fog,Q=S.isMeshStandardMaterial?q.environment:null,ue=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:di,ae=(S.isMeshStandardMaterial?K:E).get(S.envMap||Q),ye=S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ce=!!$.attributes.tangent&&(!!S.normalMap||S.anisotropy>0),Ge=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Me=!!$.morphAttributes.color,Oe=jn;S.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Oe=_.toneMapping);let pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=pt!==void 0?pt.length:0,it=Ae.get(S),ln=g.state.lights;if(xe===!0&&(Te===!0||R!==w)){let Ln=R===w&&S.id===z;rt.setState(S,R,Ln)}let Mt=!1;S.version===it.__version?(it.needsLights&&it.lightsStateVersion!==ln.state.version||it.outputColorSpace!==ue||U.isBatchedMesh&&it.batching===!1||!U.isBatchedMesh&&it.batching===!0||U.isInstancedMesh&&it.instancing===!1||!U.isInstancedMesh&&it.instancing===!0||U.isSkinnedMesh&&it.skinning===!1||!U.isSkinnedMesh&&it.skinning===!0||U.isInstancedMesh&&it.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&it.instancingColor===!1&&U.instanceColor!==null||it.envMap!==ae||S.fog===!0&&it.fog!==Z||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==rt.numPlanes||it.numIntersection!==rt.numIntersection)||it.vertexAlphas!==ye||it.vertexTangents!==Ce||it.morphTargets!==Ge||it.morphNormals!==dt||it.morphColors!==Me||it.toneMapping!==Oe||be.isWebGL2===!0&&it.morphTargetsCount!==ct)&&(Mt=!0):(Mt=!0,it.__version=S.version);let rn=it.currentProgram;Mt===!0&&(rn=Xe(S,q,U));let _t=!1,Wt=!1,$t=!1,kt=rn.getUniforms(),Vi=it.uniforms;if(le.useProgram(rn.program)&&(_t=!0,Wt=!0,$t=!0),S.id!==z&&(z=S.id,Wt=!0),_t||w!==R){kt.setValue(k,"projectionMatrix",R.projectionMatrix),kt.setValue(k,"viewMatrix",R.matrixWorldInverse);let Ln=kt.map.cameraPosition;Ln!==void 0&&Ln.setValue(k,je.setFromMatrixPosition(R.matrixWorld)),be.logarithmicDepthBuffer&&kt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&kt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Wt=!0,$t=!0)}if(U.isSkinnedMesh){kt.setOptional(k,U,"bindMatrix"),kt.setOptional(k,U,"bindMatrixInverse");let Ln=U.skeleton;Ln&&(be.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),kt.setValue(k,"boneTexture",Ln.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(kt.setOptional(k,U,"batchingTexture"),kt.setValue(k,"batchingTexture",U._matricesTexture,P));let So=$.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0&&be.isWebGL2===!0)&&at.update(U,$,rn),(Wt||it.receiveShadow!==U.receiveShadow)&&(it.receiveShadow=U.receiveShadow,kt.setValue(k,"receiveShadow",U.receiveShadow)),S.isMeshGouraudMaterial&&S.envMap!==null&&(Vi.envMap.value=ae,Vi.flipEnvMap.value=ae.isCubeTexture&&ae.isRenderTargetTexture===!1?-1:1),Wt&&(kt.setValue(k,"toneMappingExposure",_.toneMappingExposure),it.needsLights&&Ze(Vi,$t),Z&&S.fog===!0&&Se.refreshFogUniforms(Vi,Z),Se.refreshMaterialUniforms(Vi,S,J,V,Je),Us.upload(k,qe(it),Vi,P)),S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(Us.upload(k,qe(it),Vi,P),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&kt.setValue(k,"center",U.center),kt.setValue(k,"modelViewMatrix",U.modelViewMatrix),kt.setValue(k,"normalMatrix",U.normalMatrix),kt.setValue(k,"modelMatrix",U.matrixWorld),S.isShaderMaterial||S.isRawShaderMaterial){let Ln=S.uniformsGroups;for(let Eo=0,ju=Ln.length;Eo<ju;Eo++)if(be.isWebGL2){let xc=Ln[Eo];ht.update(xc,rn),ht.bind(xc,rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rn}function Ze(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function It(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,q,$){Ae.get(R.texture).__webglTexture=q,Ae.get(R.depthTexture).__webglTexture=$;let S=Ae.get(R);S.__hasExternalTextures=!0,S.__hasExternalTextures&&(S.__autoAllocateDepthBuffer=$===void 0,S.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),S.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){let $=Ae.get(R);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,$=0){T=R,I=q,C=$;let S=!0,U=null,Z=!1,Q=!1;if(R){let ae=Ae.get(R);ae.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(k.FRAMEBUFFER,null),S=!1):ae.__webglFramebuffer===void 0?P.setupRenderTarget(R):ae.__hasExternalTextures&&P.rebindTextures(R,Ae.get(R.texture).__webglTexture,Ae.get(R.depthTexture).__webglTexture);let ye=R.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(Q=!0);let Ce=Ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ce[q])?U=Ce[q][$]:U=Ce[q],Z=!0):be.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?U=Ae.get(R).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[$]:U=Ce,A.copy(R.viewport),O.copy(R.scissor),Y=R.scissorTest}else A.copy(ge).multiplyScalar(J).floor(),O.copy(me).multiplyScalar(J).floor(),Y=Pe;if(le.bindFramebuffer(k.FRAMEBUFFER,U)&&be.drawBuffers&&S&&le.drawBuffers(R,U),le.viewport(A),le.scissor(O),le.setScissorTest(Y),Z){let ae=Ae.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae.__webglTexture,$)}else if(Q){let ae=Ae.get(R.texture),ye=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ae.__webglTexture,$||0,ye)}z=-1},this.readRenderTargetPixels=function(R,q,$,S,U,Z,Q){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Q!==void 0&&(ue=ue[Q]),ue){le.bindFramebuffer(k.FRAMEBUFFER,ue);try{let ae=R.texture,ye=ae.format,Ce=ae.type;if(ye!==Sn&&Ye.convert(ye)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=Ce===Xn&&(de.has("EXT_color_buffer_half_float")||be.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ce!==Ai&&Ye.convert(Ce)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Ei&&(be.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-S&&$>=0&&$<=R.height-U&&k.readPixels(q,$,S,U,Ye.convert(ye),Ye.convert(Ce),Z)}finally{let ae=T!==null?Ae.get(T).__webglFramebuffer:null;le.bindFramebuffer(k.FRAMEBUFFER,ae)}}},this.copyFramebufferToTexture=function(R,q,$=0){let S=Math.pow(2,-$),U=Math.floor(q.image.width*S),Z=Math.floor(q.image.height*S);P.setTexture2D(q,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,R.x,R.y,U,Z),le.unbindTexture()},this.copyTextureToTexture=function(R,q,$,S=0){let U=q.image.width,Z=q.image.height,Q=Ye.convert($.format),ue=Ye.convert($.type);P.setTexture2D($,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment),q.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,S,R.x,R.y,U,Z,Q,ue,q.image.data):q.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,S,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Q,q.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,S,R.x,R.y,Q,ue,q.image),S===0&&$.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(R,q,$,S,U=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Z=R.max.x-R.min.x+1,Q=R.max.y-R.min.y+1,ue=R.max.z-R.min.z+1,ae=Ye.convert(S.format),ye=Ye.convert(S.type),Ce;if(S.isData3DTexture)P.setTexture3D(S,0),Ce=k.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)P.setTexture2DArray(S,0),Ce=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,S.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,S.unpackAlignment);let Ge=k.getParameter(k.UNPACK_ROW_LENGTH),dt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Me=k.getParameter(k.UNPACK_SKIP_PIXELS),Oe=k.getParameter(k.UNPACK_SKIP_ROWS),pt=k.getParameter(k.UNPACK_SKIP_IMAGES),ct=$.isCompressedTexture?$.mipmaps[U]:$.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?k.texSubImage3D(Ce,U,q.x,q.y,q.z,Z,Q,ue,ae,ye,ct.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ce,U,q.x,q.y,q.z,Z,Q,ue,ae,ct.data)):k.texSubImage3D(Ce,U,q.x,q.y,q.z,Z,Q,ue,ae,ye,ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ge),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Me),k.pixelStorei(k.UNPACK_SKIP_ROWS,Oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,pt),U===0&&S.generateMipmaps&&k.generateMipmap(Ce),le.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,le.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===ro?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?es:ou}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===es?Nt:di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Il=class extends ts{};Il.prototype.isWebGL1Renderer=!0;var ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ni=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new F,Mr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ns=class extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,lr=new F,Ts=new F,As=new F,Rs=new ve,cr=new ve,_u=new wt,ua=new F,hr=new F,da=new F,Fh=new ve,il=new ve,Bh=new ve,ks=class extends Gt{constructor(e=new ns){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ha(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Mr(n,3,0,!1)),Es.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),_u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ua.set(-.5,-.5,0),As,a,Ts,s,r),fa(hr.set(.5,-.5,0),As,a,Ts,s,r),fa(da.set(.5,.5,0),As,a,Ts,s,r),Fh.set(0,0),il.set(1,0),Bh.set(1,1);let o=e.ray.intersectTriangle(ua,hr,da,!1,lr);if(o===null&&(fa(hr.set(-.5,.5,0),As,a,Ts,s,r),il.set(0,1),o=e.ray.intersectTriangle(ua,da,hr,!1,lr),o===null))return;let l=e.ray.origin.distanceTo(lr);l<e.near||l>e.far||t.push({distance:l,point:lr.clone(),uv:Ki.getInterpolation(lr,ua,hr,da,Fh,il,Bh,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fa(i,e,t,n,s,r){Rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(cr.x=r*Rs.x-s*Rs.y,cr.y=s*Rs.x+r*Rs.y):cr.copy(Rs),i.copy(e),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(_u)}var Ga=class extends En{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Kt,u=Kt,f,p){super(null,a,o,l,c,u,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new wt,kh=new wt,pa=[],Hh=new fi,Bg=new wt,ur=new Be,dr=new Ii,Va=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new br(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Hh.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Hh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),dr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),kh.multiplyMatrices(n,Cs),ur.matrixWorld=kh,ur.raycast(e,pa);for(let a=0,o=pa.length;a<o;a++){let l=pa[a];l.instanceId=r,l.object=this,t.push(l)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new br(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gh=new wt,Ll=new Da,ma=new Ii,ga=new F,Wa=class extends Gt{constructor(e=new Tt,t=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Gh.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=p,x=d;m<x;m++){let g=c.getX(m);ga.fromBufferAttribute(f,g),Vh(ga,g,l,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=p,x=d;m<x;m++)ga.fromBufferAttribute(f,m),Vh(ga,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(i,e,t,n,s,r,a){let o=Ll.distanceSqToPoint(i);if(o<t){let l=new F;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var zn=class extends En{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new wt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(un(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(un(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ve,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*f+this.aX,c=p*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dl=class extends Sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xa=new F,sl=new cc,rl=new cc,al=new cc,Ul=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),c=xa);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),sl.initNonuniformCatmullRom(c.x,f.x,p.x,u.x,m,x,g),rl.initNonuniformCatmullRom(c.y,f.y,p.y,u.y,m,x,g),al.initNonuniformCatmullRom(c.z,f.z,p.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,f.x,p.x,u.x,this.tension),rl.initCatmullRom(c.y,f.y,p.y,u.y,this.tension),al.initCatmullRom(c.z,f.z,p.z,u.z,this.tension));return n.set(sl.calc(l),rl.calc(l),al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function kg(i,e){let t=1-i;return t*t*e}function Hg(i,e){return 2*(1-i)*i*e}function Gg(i,e){return i*i*e}function gr(i,e,t,n){return kg(i,e)+Hg(i,t)+Gg(i,n)}function Vg(i,e){let t=1-i;return t*t*t*e}function Wg(i,e){let t=1-i;return 3*t*t*i*e}function Xg(i,e){return 3*(1-i)*i*i*e}function qg(i,e){return i*i*i*e}function xr(i,e,t,n,s){return Vg(i,e)+Wg(i,t)+Xg(i,n)+qg(i,s)}var Xa=class extends Fn{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Fn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y),xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Fn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends Fn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Fn{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(e,s.x,r.x,a.x),gr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends Fn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(e,s.x,r.x,a.x),gr(e,s.y,r.y,a.y),gr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Wh(o,l.x,c.x,u.x,f.x),Wh(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:Ul,CubicBezierCurve:Xa,CubicBezierCurve3:Nl,EllipseCurve:Sr,LineCurve:qa,LineCurve3:Ol,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:zl,SplineCurve:Za}),Bl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fl[s.type]().fromJSON(s))}return this}},Ja=class extends Bl{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qa(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ya(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Xa(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Sr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Qn=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,u=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fn=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],m=0,x=[],g=n/2,h=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(d,2));function y(){let b=new F,I=new F,C=0,T=(t-e)/n;for(let z=0;z<=r;z++){let w=[],A=z/r,O=A*(t-e)+e;for(let Y=0;Y<=s;Y++){let se=Y/s,N=se*l+o,M=Math.sin(N),V=Math.cos(N);I.x=O*M,I.y=-A*n+g,I.z=O*V,f.push(I.x,I.y,I.z),b.set(M,T,V).normalize(),p.push(b.x,b.y,b.z),d.push(se,1-A),w.push(m++)}x.push(w)}for(let z=0;z<s;z++)for(let w=0;w<r;w++){let A=x[w][z],O=x[w+1][z],Y=x[w+1][z+1],se=x[w][z+1];u.push(A,O,se),u.push(O,Y,se),C+=6}c.addGroup(h,C,0),h+=C}function _(b){let I=m,C=new ve,T=new F,z=0,w=b===!0?e:t,A=b===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,g*A,0),p.push(0,A,0),d.push(.5,.5),m++;let O=m;for(let Y=0;Y<=s;Y++){let N=Y/s*l+o,M=Math.cos(N),V=Math.sin(N);T.x=w*V,T.y=g*A,T.z=w*M,f.push(T.x,T.y,T.z),p.push(0,A,0),C.x=M*.5+.5,C.y=V*.5*A+.5,d.push(C.x,C.y),m++}for(let Y=0;Y<s;Y++){let se=I+Y,N=O+Y;b===!0?u.push(N,N+1,se):u.push(N+1,N,se),z+=3}c.addGroup(h,z,b===!0?1:2),h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class i extends fn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$a=class i extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new F,b=new F,I=new F;for(let C=0;C<t.length;C+=3)d(t[C+0],_),d(t[C+1],b),d(t[C+2],I),l(_,b,I,y)}function l(y,_,b,I){let C=I+1,T=[];for(let z=0;z<=C;z++){T[z]=[];let w=y.clone().lerp(b,z/C),A=_.clone().lerp(b,z/C),O=C-z;for(let Y=0;Y<=O;Y++)Y===0&&z===C?T[z][Y]=w:T[z][Y]=w.clone().lerp(A,Y/O)}for(let z=0;z<C;z++)for(let w=0;w<2*(C-z)-1;w++){let A=Math.floor(w/2);w%2===0?(p(T[z][A+1]),p(T[z+1][A]),p(T[z][A])):(p(T[z][A+1]),p(T[z+1][A+1]),p(T[z+1][A]))}}function c(y){let _=new F;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){let y=new F;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let b=g(y)/2/Math.PI+.5,I=h(y)/Math.PI+.5;a.push(b,1-I)}m(),f()}function f(){for(let y=0;y<a.length;y+=6){let _=a[y+0],b=a[y+2],I=a[y+4],C=Math.max(_,b,I),T=Math.min(_,b,I);C>.9&&T<.1&&(_<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function d(y,_){let b=y*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function m(){let y=new F,_=new F,b=new F,I=new F,C=new ve,T=new ve,z=new ve;for(let w=0,A=0;w<r.length;w+=9,A+=6){y.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),C.set(a[A+0],a[A+1]),T.set(a[A+2],a[A+3]),z.set(a[A+4],a[A+5]),I.copy(y).add(_).add(b).divideScalar(3);let O=g(I);x(C,A+0,y,O),x(T,A+2,_,O),x(z,A+4,b,O)}}function x(y,_,b,I){I<0&&y.x===1&&(a[_]=y.x-1),b.x===0&&b.z===0&&(a[_]=I/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ei=class extends Ja{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ja().fromJSON(s))}return this}},Yg={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,f,p,d;if(n&&(r=jg(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let m=t;m<s;m+=t)f=i[m],p=i[m+1],f<o&&(o=f),p<l&&(l=p),f>c&&(c=f),p>u&&(u=p);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Er(r,a,t,o,l,d,0),a}};function yu(i,e,t,n,s){let r,a;if(s===cx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Xh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Xh(r,i[r],i[r+1],a);return a&&oo(a,a.next)&&(Ar(a),a=a.next),a}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oo(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ix(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Jg(i,n,s,r):Zg(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ar(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$g(is(i),e,t),Er(i,e,t,n,s,r,2)):a===2&&Kg(i,e,t,n,s,r):Er(is(i),e,t,n,s,r,1);break}}}function Zg(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=p&&m.y>=f&&m.y<=d&&Ls(s,o,r,l,a,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,p=a.y,d=o<l?o<c?o:c:l<c?l:c,m=u<f?u<p?u:p:f<p?f:p,x=o>l?o>c?o:c:l>c?l:c,g=u>f?u>p?u:p:f>p?f:p,h=kl(d,m,e,t,n),y=kl(x,g,e,t,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=h&&b&&b.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Ls(o,u,l,f,c,p,_.x,_.y)&&Bt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Ls(o,u,l,f,c,p,b.x,b.y)&&Bt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=h;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Ls(o,u,l,f,c,p,_.x,_.y)&&Bt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Ls(o,u,l,f,c,p,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $g(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!oo(s,r)&&vu(s,n,n.next,r)&&Tr(s,r)&&Tr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ar(n),Ar(n.next),n=i=r),n=n.next}while(n!==i);return is(n)}function Kg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ax(a,o)){let l=Mu(a,o);a=is(a,a.next),l=is(l,l.next),Er(a,e,t,n,s,r,0),Er(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jg(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=yu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(rx(c));for(s.sort(Qg),r=0;r<s.length;r++)t=ex(s[r],t);return t}function Qg(i,e){return i.x-e.x}function ex(i,e){let t=tx(i,e);if(!t)return e;let n=Mu(t,i);return is(n,n.next),is(t,t.next)}function tx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ls(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Tr(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&nx(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function nx(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function ix(i,e,t,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sx(s)}function sx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ls(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ax(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ox(i,e)&&(Tr(i,e)&&Tr(e,i)&&lx(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||oo(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oo(i,e){return i.x===e.x&&i.y===e.y}function vu(i,e,t,n){let s=ya(Bt(i,e,t)),r=ya(Bt(i,e,n)),a=ya(Bt(t,n,i)),o=ya(Bt(t,n,e));return!!(s!==r&&a!==o||s===0&&_a(i,t,e)||r===0&&_a(i,n,e)||a===0&&_a(t,i,n)||o===0&&_a(t,e,n))}function _a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function ox(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Tr(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function lx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mu(i,e){let t=new Hl(i.i,i.x,i.y),n=new Hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xh(i,e,t,n){let s=new Hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ri=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];qh(e),Yh(n,e);let a=e.length;t.forEach(qh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Yh(n,t[l]);let o=Yg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Hs=class i extends Tt{constructor(e=new ei([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:hx,_,b=!1,I,C,T,z;h&&(_=h.getSpacedPoints(u),b=!0,p=!1,I=h.computeFrenetFrames(u,!1),C=new F,T=new F,z=new F),p||(g=0,d=0,m=0,x=0);let w=o.extractPoints(c),A=w.shape,O=w.holes;if(!Ri.isClockWise(A)){A=A.reverse();for(let k=0,Ie=O.length;k<Ie;k++){let de=O[k];Ri.isClockWise(de)&&(O[k]=de.reverse())}}let se=Ri.triangulateShape(A,O),N=A;for(let k=0,Ie=O.length;k<Ie;k++){let de=O[k];A=A.concat(de)}function M(k,Ie,de){return Ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(Ie,de)}let V=A.length,J=se.length;function B(k,Ie,de){let be,le,Fe,Ae=k.x-Ie.x,P=k.y-Ie.y,E=de.x-k.x,K=de.y-k.y,oe=Ae*Ae+P*P,pe=Ae*K-P*E;if(Math.abs(pe)>Number.EPSILON){let he=Math.sqrt(oe),Ue=Math.sqrt(E*E+K*K),Se=Ie.x-P/he,We=Ie.y+Ae/he,et=de.x-K/Ue,rt=de.y+E/Ue,ce=((et-Se)*K-(rt-We)*E)/(Ae*K-P*E);be=Se+Ae*ce-k.x,le=We+P*ce-k.y;let xt=be*be+le*le;if(xt<=2)return new ve(be,le);Fe=Math.sqrt(xt/2)}else{let he=!1;Ae>Number.EPSILON?E>Number.EPSILON&&(he=!0):Ae<-Number.EPSILON?E<-Number.EPSILON&&(he=!0):Math.sign(P)===Math.sign(K)&&(he=!0),he?(be=-P,le=Ae,Fe=Math.sqrt(oe)):(be=Ae,le=P,Fe=Math.sqrt(oe/2))}return new ve(be/Fe,le/Fe)}let re=[];for(let k=0,Ie=N.length,de=Ie-1,be=k+1;k<Ie;k++,de++,be++)de===Ie&&(de=0),be===Ie&&(be=0),re[k]=B(N[k],N[de],N[be]);let ge=[],me,Pe=re.concat();for(let k=0,Ie=O.length;k<Ie;k++){let de=O[k];me=[];for(let be=0,le=de.length,Fe=le-1,Ae=be+1;be<le;be++,Fe++,Ae++)Fe===le&&(Fe=0),Ae===le&&(Ae=0),me[be]=B(de[be],de[Fe],de[Ae]);ge.push(me),Pe=Pe.concat(me)}for(let k=0;k<g;k++){let Ie=k/g,de=d*Math.cos(Ie*Math.PI/2),be=m*Math.sin(Ie*Math.PI/2)+x;for(let le=0,Fe=N.length;le<Fe;le++){let Ae=M(N[le],re[le],be);ke(Ae.x,Ae.y,-de)}for(let le=0,Fe=O.length;le<Fe;le++){let Ae=O[le];me=ge[le];for(let P=0,E=Ae.length;P<E;P++){let K=M(Ae[P],me[P],be);ke(K.x,K.y,-de)}}}let te=m+x;for(let k=0;k<V;k++){let Ie=p?M(A[k],Pe[k],te):A[k];b?(T.copy(I.normals[0]).multiplyScalar(Ie.x),C.copy(I.binormals[0]).multiplyScalar(Ie.y),z.copy(_[0]).add(T).add(C),ke(z.x,z.y,z.z)):ke(Ie.x,Ie.y,0)}for(let k=1;k<=u;k++)for(let Ie=0;Ie<V;Ie++){let de=p?M(A[Ie],Pe[Ie],te):A[Ie];b?(T.copy(I.normals[k]).multiplyScalar(de.x),C.copy(I.binormals[k]).multiplyScalar(de.y),z.copy(_[k]).add(T).add(C),ke(z.x,z.y,z.z)):ke(de.x,de.y,f/u*k)}for(let k=g-1;k>=0;k--){let Ie=k/g,de=d*Math.cos(Ie*Math.PI/2),be=m*Math.sin(Ie*Math.PI/2)+x;for(let le=0,Fe=N.length;le<Fe;le++){let Ae=M(N[le],re[le],be);ke(Ae.x,Ae.y,f+de)}for(let le=0,Fe=O.length;le<Fe;le++){let Ae=O[le];me=ge[le];for(let P=0,E=Ae.length;P<E;P++){let K=M(Ae[P],me[P],be);b?ke(K.x,K.y+_[u-1].y,_[u-1].x+de):ke(K.x,K.y,f+de)}}}xe(),Te();function xe(){let k=s.length/3;if(p){let Ie=0,de=V*Ie;for(let be=0;be<J;be++){let le=se[be];Ke(le[2]+de,le[1]+de,le[0]+de)}Ie=u+g*2,de=V*Ie;for(let be=0;be<J;be++){let le=se[be];Ke(le[0]+de,le[1]+de,le[2]+de)}}else{for(let Ie=0;Ie<J;Ie++){let de=se[Ie];Ke(de[2],de[1],de[0])}for(let Ie=0;Ie<J;Ie++){let de=se[Ie];Ke(de[0]+V*u,de[1]+V*u,de[2]+V*u)}}n.addGroup(k,s.length/3-k,0)}function Te(){let k=s.length/3,Ie=0;Je(N,Ie),Ie+=N.length;for(let de=0,be=O.length;de<be;de++){let le=O[de];Je(le,Ie),Ie+=le.length}n.addGroup(k,s.length/3-k,1)}function Je(k,Ie){let de=k.length;for(;--de>=0;){let be=de,le=de-1;le<0&&(le=k.length-1);for(let Fe=0,Ae=u+g*2;Fe<Ae;Fe++){let P=V*Fe,E=V*(Fe+1),K=Ie+be+P,oe=Ie+le+P,pe=Ie+le+E,he=Ie+be+E;je(K,oe,pe,he)}}}function ke(k,Ie,de){l.push(k),l.push(Ie),l.push(de)}function Ke(k,Ie,de){$e(k),$e(Ie),$e(de);let be=s.length/3,le=y.generateTopUV(n,s,be-3,be-2,be-1);De(le[0]),De(le[1]),De(le[2])}function je(k,Ie,de,be){$e(k),$e(Ie),$e(be),$e(Ie),$e(de),$e(be);let le=s.length/3,Fe=y.generateSideWallUV(n,s,le-6,le-3,le-2,le-1);De(Fe[0]),De(Fe[1]),De(Fe[3]),De(Fe[1]),De(Fe[2]),De(Fe[3])}function $e(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function De(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ux(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fl[s.type]().fromJSON(s)),new i(n,e.options)}},hx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ve(r,a),new ve(o,l),new ve(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],h=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-f),new ve(p,1-m),new ve(x,1-h)]:[new ve(o,1-l),new ve(u,1-f),new ve(d,1-m),new ve(g,1-h)]}};function ux(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ka=class i extends $a{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},tn=class i extends $a{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Bn=class i extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,p=(t-e)/s,d=new F,m=new ve;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let h=r+g/n*a;d.x=f*Math.cos(h),d.y=f*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}f+=p}for(let x=0;x<s;x++){let g=x*(n+1);for(let h=0;h<n;h++){let y=h+g,_=y,b=y+n+1,I=y+n+2,C=y+1;o.push(_,b,C),o.push(b,I,C)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Rr=class i extends Tt{constructor(e=new ei([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(a,2));function c(u){let f=s.length/3,p=u.extractPoints(t),d=p.shape,m=p.holes;Ri.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,h=m.length;g<h;g++){let y=m[g];Ri.isClockWise(y)===!0&&(m[g]=y.reverse())}let x=Ri.triangulateShape(d,m);for(let g=0,h=m.length;g<h;g++){let y=m[g];d=d.concat(y)}for(let g=0,h=d.length;g<h;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,h=x.length;g<h;g++){let y=x[g],_=y[0]+f,b=y[1]+f,I=y[2]+f;n.push(_,b,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return dx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function dx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var qn=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new F,p=new F,d=[],m=[],x=[],g=[];for(let h=0;h<=n;h++){let y=[],_=h/n,b=0;h===0&&a===0?b=.5/t:h===n&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){let C=I/t;f.x=-e*Math.cos(s+C*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+C*r)*Math.sin(a+_*o),m.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),g.push(C+b,1-_),y.push(c++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){let _=u[h][y+1],b=u[h][y],I=u[h+1][y],C=u[h+1][y+1];(h!==0||a>0)&&d.push(_,b,C),(h!==n-1||l<Math.PI)&&d.push(b,I,C)}this.setIndex(d),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yn=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new F,f=new F,p=new F;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(f,u).normalize(),l.push(p.x,p.y,p.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,h=(s+1)*(d-1)+m,y=(s+1)*d+m;a.push(x,g,y),a.push(g,h,y)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ja=class extends On{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Qa=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Cr=class extends On{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var eo=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=e,o=2*t-n;break;case Kc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=e,l=2*n-t;break;case Kc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,h=-p*g+2*p*x-p*m,y=(1+p)*g+(-1.5-2*p)*x+(-.5+p)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let I=0;I!==o;++I)r[I]=h*a[u+I]+y*a[c+I]+_*a[l+I]+b*a[f+I];return r}},Vl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*u;return r}},Wl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,d=f+n;for(let m=0;m!==n;++m){let x=t[f+m];if(x!==t[p+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=wa;var ss=class extends Yn{};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ba;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Yn{};Xl.prototype.ValueTypeName="color";var ql=class extends Yn{};ql.prototype.ValueTypeName="number";var Yl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pr=class extends Yn{InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.DefaultInterpolation=wa;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Yn{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ba;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Yn{};Zl.prototype.ValueTypeName="vector";var Jl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=c.length;f<p;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},px=new Jl,$l=class{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ws=class extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ol=new wt,Zh=new F,Jh=new F,Ir=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kl=class extends Ir{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ra*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},to=class extends Vs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$h=new wt,fr=new F,ll=new F,jl=class extends Ir{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(fr),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}},Cn=class extends Vs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ql=class extends Ir{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var no=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Kh(){return(typeof performance>"u"?Date:performance).now()}var hc="\\[\\]\\.:\\/",mx=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",gx="[^"+hc.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",uc),_x=/(WCOD+)?/.source.replace("WCOD",gx),yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),Mx=new RegExp("^"+xx+_x+yx+vx+"$"),bx=["material","materials","bones","map"],ec=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){let t=Mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=ec;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Zs=class extends Ni{constructor(e=null){super();let t=new An;t.deleteAttribute("uv");let n=new pn({side:qt}),s=new pn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Cn(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Be(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Be(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Be(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new Be(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new Be(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new Be(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let d=new Be(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let m=new Be(t,Ys(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let x=new Be(t,Ys(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let g=new Be(t,Ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let h=new Be(t,Ys(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let y=new Be(t,Ys(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new Be(t,Ys(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ys(i){let e=new Pt;return e.color.setScalar(i),e}function Ur(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Tt,c=0;for(let u=0;u<i.length;++u){let f=i[u],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,f=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=i[p].attributes.position.count}l.setIndex(f)}for(let u in r){let f=bu(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<f;++p){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][p]);let m=bu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function bu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Yt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function Jt(i,e=18,t=!0,n=!0){let s=[],r=[];for(let l of i)for(let c=0;c<e;c++){let u=c/e*Math.PI*2,f=Math.cos(u);s.push((l.x||0)+Math.sin(u)*l.rx,l.y,(l.z||0)+f*(f>=0?l.rz:l.rb??l.rz))}for(let l=0;l<i.length-1;l++)for(let c=0;c<e;c++){let u=l*e+c,f=l*e+(c+1)%e,p=u+e,d=f+e;r.push(u,f,p,f,d,p)}let a=i.length;if(t){let l=i[0],c=s.length/3;s.push(l.x||0,l.y,l.z||0);for(let u=0;u<e;u++)r.push(c,(u+1)%e,u)}if(n){let l=i[a-1],c=s.length/3,u=(a-1)*e;s.push(l.x||0,l.y,l.z||0);for(let f=0;f<e;f++)r.push(c,u+f,u+(f+1)%e)}let o=new Tt;return o.setAttribute("position",new ft(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function Fi(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let l=o/6,c=e+(t-e)*l;r.push({y:-i*l,rx:c,rz:c*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),Jt(r,n)}function ie(i,e,t=0,n=0,s=0){let r=new Be(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function Vt(i=0,e=0,t=0,...n){let s=new bt;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var vt=(i,e,t)=>new An(i,e,t),At=(i,e=14,t=10)=>new qn(i,e,t),zt=(i,e,t,n=12,s=!1)=>new fn(i,e,t,n,1,s),an=(i,e,t=10)=>new Rn(i,e,t),Dt=(i,e,t)=>i+(e-i)*t;function pi(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var lo=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512]],vn=[10725556,4906624,3718648,11566335,16096779,16731501,16773560];function Zn(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],l=i[a],c=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let f=0;f<e;f++){let p=f/e,d={y:Dt(l.y,c.y,p)};for(let m of n){let x=s(o,m),g=s(l,m),h=s(c,m),y=s(u,m),_=.5*(2*g+(-x+h)*p+(2*x-5*g+4*h-y)*p*p+(-x+3*g-3*h+y)*p*p*p);m[0]==="r"&&(_=Math.max(8e-4,Math.min(Math.max(g,h)*1.08,_))),d[m]=_}t.push(d)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function Su(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,l=e+1;for(let f of i)for(let p=0;p<=e;p++){let d=-Math.PI+p/e*Math.PI*2,m=Math.cos(d);t.push((f.x||0)+Math.sin(d)*f.rx,f.y,(f.z||0)+m*(m>=0?f.rz:f.rb??f.rz)),n.push(p/e,(f.y-a)/(o-a))}for(let f=0;f<r-1;f++)for(let p=0;p<e;p++){let d=f*l+p,m=d+1,x=d+l,g=m+l;s.push(d,m,x,m,g,x)}{let f=i[0],p=t.length/3;t.push(f.x||0,f.y,f.z||0),n.push(.5,0);for(let d=0;d<e;d++)s.push(p,d+1,d)}{let f=i[r-1],p=t.length/3,d=(r-1)*l;t.push(f.x||0,f.y,f.z||0),n.push(.5,1);for(let m=0;m<e;m++)s.push(p,d+m,d+m+1)}let c=new Tt;c.setAttribute("position",new ft(t,3)),c.setAttribute("uv",new ft(n,2)),c.setIndex(s),c.computeVertexNormals();let u=c.attributes.normal;for(let f=0;f<r;f++){let p=f*l,d=p+e,m=u.getX(p)+u.getX(d),x=u.getY(p)+u.getY(d),g=u.getZ(p)+u.getZ(d),h=Math.hypot(m,x,g)||1;u.setXYZ(p,m/h,x/h,g/h),u.setXYZ(d,m/h,x/h,g/h)}return c}function mi(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),Jt(Zn(s,2),t)}var wu={};function Eu(i){let e=i?"s":"h",t=wu[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=wu[e]=new Ga(s,n.length,1,Sn),t.minFilter=t.magFilter=Kt,t.generateMipmaps=!1,t.needsUpdate=!0,t}function dc(i,e){return new Cr(Object.assign({color:i,gradientMap:Eu(!0)},e||{}))}function on(i,e){return new Cr(Object.assign({color:i,gradientMap:Eu()},e||{}))}var Js=null;function Tu(){return Js||(Js=new Pt({color:1314586,side:qt}),Js.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},Js.userData.shared=!0,Js)}var wx=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function Au(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new wt,r=new wt;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,l=[];r.copy(a.matrixWorld).invert();let c=f=>{for(let p of f.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let d=wx(p,!!p.material.map);d.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(d),l.push(p)}else!p.isLight&&!p.isSprite&&c(p)};c(a);for(let f of l)f.parent.remove(f),f.geometry.dispose();let u=[];for(let[f,p]of o){let d=p.length>1?Ur(p,!1):p[0];p.length>1&&p.forEach(x=>x.dispose());let m=new Be(d,f);m.castShadow=!0,a.add(m),!f.isMeshBasicMaterial&&!f.userData.noInk&&u.push(d)}if(e&&u.length){let f=u.map(m=>{let x=m.clone();return x.attributes.uv&&x.deleteAttribute("uv"),x}),p=f.length>1?Ur(f,!1):f[0];f.length>1&&f.forEach(m=>m.dispose());let d=new Be(p,Tu());d.userData.ink=!0,d.castShadow=!1,a.add(d),n.push(d)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function co(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new Be(n.geometry,Tu());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function $s(i,e){let t=lo[i][e?1:0];return on(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Et=(i,e,t,n)=>on(i,n||void 0),js={},Nr=(i,e)=>js[i]||(js[i]=e()),Ks=()=>Nr("wood",()=>on(8016432)),ho=()=>Nr("leather",()=>on(4861984)),Mn=i=>Nr("m"+i,()=>$s(i)),mn=i=>Nr("d"+i,()=>$s(i,!0)),Jn=(i,e=1)=>Nr("g"+i+e,()=>on(vn[i],{emissive:vn[i],emissiveIntensity:e})),Ru=new Rn(.5,1,5).translate(0,.5,0),Cu=new tn(1),Pu=new fn(1,1,1,10,1,!0),Sx=new yn(1,.05,6,40),gi=(i,e)=>new Pt({color:i,transparent:!0,opacity:e,blending:dn,depthWrite:!1,side:Ht}),as=(i,e,t)=>{let n=new Be(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function Qs(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,l=(c,u,f,p)=>{let d=gi(u,.95),m=[];for(let x=0;x<c;x++){let g=as(Cu,d,i);g.scale.set(f,f*1.7,f),m.push(g)}n.push(x=>m.forEach((g,h)=>{let y=x*(1.5+h*.27)+h*2.1,_=(h/c+x*p)%1,b=Math.sin(_*Math.PI);g.position.set(s+Math.cos(y)*(o+.035),t.y0+a*_,r+Math.sin(y)*(o+.035)),g.rotation.y=x*3+h,g.scale.set(f*b,f*1.7*b,f*b)}))};if(e===3)l(3,13215999,.014,.1);else if(e===4){l(6,16767088,.014,.16);let c=as(Pu,gi(16762960,.13),i);c.position.set(s,t.y0+a/2,r),c.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{c.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let c=gi(16725012,.7),u=gi(16760906,.85),f=t.mode==="lite",p=f?2:Math.max(3,Math.min(8,Math.round(a/.13))),d=[],m=Math.min(.075,o*1.2+.03)*(f?.62:1);for(let x=0;x<=p;x++){let g=x===p,h=x%2?1:-1,y=m*(g?1.35:1),_=as(Ru,c,i);as(Ru,u,_).scale.set(.5,.62,.5),_.position.set(s+(g?0:h*Math.min(o,.09)*.7),g?t.y1-y*.4:t.y0+a*(x+.4)/p,r),d.push({f:_,side:g?0:h,sz:y,i:x})}n.push(x=>{for(let g of d){let h=1+.32*Math.sin(x*11+g.i*1.7)+.18*Math.sin(x*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(x*9+g.i)),g.sz*2.3*h,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(x*7+g.i))}}),f||l(4,16742970,.011,.5)}else if(e>=6){let c=t.mode==="lite",u=t.mode==="halo";if(!c&&!u&&o<=.1){let f=as(Pu,gi(16773312,.2),i);f.position.set(s,t.y0+a/2,r),f.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{f.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!c){let f=as(Sx,gi(16771496,.9),i);f.position.set(s,t.y1,r),f.scale.setScalar(Math.min(o+.06,.17)),f.rotation.x=Math.PI/2,n.push(p=>{f.rotation.z=p*1.4,u||(f.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let f=new bt;f.position.set(s,t.y1+.03,r);let p=gi(16777215,.95),d=c?.6:1;for(let[m,x,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])as(Cu,p,f).scale.set(m*d,x*d,g*d);i.add(f),n.push(m=>{f.rotation.set(m*.7,m*1.1,0),f.scale.setScalar(1+.3*Math.sin(m*4))})}l(c||u?3:6,16774872,.011,.22)}return c=>{for(let u of n)u(c)}}function Lu(i,e,t){let n=new ei;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new Rr(n,8),r=[gi(16771504,.34),gi(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],l=!0;for(let c of[-1,1]){let u=new bt;u.position.set(c*.05,e,t),o.forEach(([f,p,d],m)=>{let x=new Be(s,r[m%2]);x.castShadow=!1,l||(x.userData.sharedGeo=!0),l=!1,x.scale.set(c*p,d*p*1.5,1),x.rotation.z=c*f,x.position.z=-m*.004,u.add(x)}),i.add(u),a.push({piv:u,s:c})}return c=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(c*1.8)*.16);r[0].opacity=.3+Math.sin(c*2.6)*.07}}var Iu={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Du(i,e=0){js={};let t=new bt,n=(s,r,a,o)=>{let l=ie(vt(r,s,.012),Mn(e),0,o/2+s/2,0);t.add(l);let c=ie(an(r/2,r*1.4,4),Mn(e),0,o/2+s+r*.7,0);if(c.scale.z=.14,c.rotation.y=Math.PI/4,t.add(c),t.add(ie(vt(r*.22,s*.9,.016),mn(e),0,o/2+s*.47,0)),t.add(ie(vt(a,.03,.035),mn(e),0,o/2+.005,0)),t.add(ie(zt(.016,.016,o,8),ho())),t.add(ie(At(.026,8,6),mn(e),0,-o/2-.015,0)),e>=2&&t.add(ie(new tn(.02),Jn(e),0,o/2+.005,.022)),e>=3&&t.add(ie(vt(.008,s*.75,.02),Jn(e,1.4),0,o/2+s*.45,0)),e>=3&&t.add(ie(new tn(.017),Jn(e),0,-o/2-.045,0)),e>=4)for(let u of[-1,1]){let f=ie(an(.018,.09+(e-4)*.025,5),Mn(e),u*a/2,o/2+.045,0);f.rotation.z=-u*.55,t.add(f);let p=ie(an(.014,.06,5),mn(e),u*a*.3,o/2-.03,0);p.rotation.z=Math.PI+u*.5,t.add(p)}if(e>=5)for(let u=0;u<3;u++)for(let f of[-1,1]){let p=ie(an(.012,r*.9,4),mn(e),f*r*.62,o/2+s*(.25+u*.22),0);p.rotation.z=-f*1.2,p.scale.z=.4,t.add(p)}};switch(i){case"epee":n(.78,.06,.22,.16);break;case"dague":n(.3,.045,.12,.11);break;case"espadon":n(1.15,.11,.36,.3);break;case"lamecle":n(.9,.055,.14,.14),t.add(ie(vt(.09,.05,.014),mn(e),.07,.86,0)),t.add(ie(vt(.07,.05,.014),mn(e),.06,.74,0));{let s=ie(new yn(.06,.014,8,20),mn(e),0,-.14,0);t.add(s)}break;case"masse":t.add(ie(zt(.018,.02,.7,8),Ks(),0,.25,0)),t.add(ie(At(.085,12,8),Mn(e),0,.64,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=ie(an(.025,.07,5),mn(e),Math.sin(r)*.1,.64,Math.cos(r)*.1);a.rotation.set(Math.PI/2*Math.cos(r),0,-Math.PI/2*Math.sin(r)),t.add(a)}e>=2&&t.add(ie(new tn(.03),Jn(e),0,.745,0));break;case"guisarme":t.add(ie(zt(.017,.017,1.9,8),Ks(),0,.5,0));{let s=ie(an(.03,.26,4),Mn(e),0,1.57,0);s.scale.z=.3,t.add(s);let r=ie(zt(.2,.2,.014,16,!1),Mn(e),.1,1.28,0);r.rotation.x=Math.PI/2,r.scale.set(1,1,1.25),t.add(r);let a=ie(an(.04,.16,4),mn(e),-.08,1.3,0);a.rotation.z=Math.PI/2,a.scale.z=.3,t.add(a),e>=2&&t.add(ie(new tn(.024),Jn(e),.02,1.28,.02))}break;case"baton":t.add(ie(zt(.016,.02,1.6,8),Ks(),0,.5,0));{let s=ie(new yn(.085,.014,8,20,Math.PI*1.4),Mn(e),0,1.37,0);s.rotation.z=Math.PI*.8,t.add(s);let r=ie(At(.055,14,10),Jn(e,1.5),0,1.38,0);t.add(r);let a=new Cn(vn[e],.5,2.5);a.position.set(0,1.38,0),t.add(a)}break;case"arc":{let s=ie(new yn(.62,.016,8,28,Math.PI*.8),Ks(),-.5,.2,0);s.rotation.z=-Math.PI*.4,t.add(s);let r=.2+Math.sin(Math.PI*.4)*.62,a=-.5+Math.cos(Math.PI*.4)*.62;t.add(ie(zt(.003,.003,(r-.2)*2,4),Et(15658734,.5),a,.2,0)),t.add(ie(zt(.022,.022,.14,8),ho(),.12,.2,0)),e>=2&&t.add(ie(new tn(.02),Jn(e),.13,.3,0))}break;case"orbe":{t.add(ie(At(.09,18,14),Et(vn[e],.1,.1,{emissive:vn[e],emissiveIntensity:1.1})));let s=ie(new yn(.13,.008,6,28),Mn(e));if(s.rotation.x=1.2,t.add(s),e>=3){let a=ie(new yn(.15,.006,6,28),Mn(e));a.rotation.set(.4,.8,0),t.add(a)}let r=new Cn(vn[e],.6,3);t.add(r)}break;case"grimoire":t.add(ie(vt(.2,.27,.06),ho())),t.add(ie(vt(.18,.25,.064),Et(15327174,.9),.012,0,0)),t.add(ie(vt(.205,.275,.05),Et(lo[e][1],.6,.3),-.004,0,0)),t.add(ie(new tn(.03),Jn(e),0,0,.034));break;case"pistolet":t.add(ie(vt(.035,.26,.03),Mn(e),0,.16,0)),t.add(ie(zt(.028,.028,.06,10),mn(e),0,.07,0));{let s=ie(vt(.034,.13,.04),Ks(),0,-.02,-.03);s.rotation.x=-.35,t.add(s)}break;case"repercuteur":{let s=ie(zt(.075,.075,.9,14),Mn(e),0,.35,0);t.add(s),t.add(ie(zt(.09,.09,.06,14),mn(e),0,.78,0)),t.add(ie(zt(.085,.085,.07,14),mn(e),0,.2,0)),t.add(ie(At(.055,12,8),Jn(e,1.6),0,.8,0)),t.add(ie(vt(.04,.16,.05),ho(),0,.05,-.1))}break;case"harpe":{let s=e>=4?Mn(e):Et(14264636,.3,.85);t.add(ie(zt(.02,.024,.95,8),s,.2,.42,0));let r=ie(new yn(.3,.02,8,18,Math.PI*.6),s,-.04,.72,0);r.rotation.z=Math.PI*.28,t.add(r);let a=ie(vt(.05,.92,.07),Ks(),-.1,.36,0);a.rotation.z=-.52,t.add(a);for(let o=0;o<7;o++){let l=-.2+o*.055,c=.28+o*.09;t.add(ie(zt(.0022,.0022,c,4),Et(o%3?15985878:vn[e],.4,0,{emissive:o%3?0:vn[e],emissiveIntensity:.8}),l,.84-c/2-Math.abs(3-o)*.012,0))}}break;case"anneaux":{let s=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([r,a],o)=>{t.add(ie(new yn(.14,.018,8,24),Mn(e),r,a,o*.02)),t.add(ie(At(.05,10,8),Et(s[o],.3,0,{emissive:s[o],emissiveIntensity:.6}),r,a,o*.02))})}break}return t.userData.tick=Iu[i]?Qs(t,e,Iu[i]):null,t}function Uu(i=0){js={};let e=new ei;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new Hs(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=Vt(0,0,0,ie(t,Mn(i)));if(n.add(ie(vt(.05,.66,.012),mn(i),0,-.04,.05)),n.add(ie(vt(.44,.05,.012),mn(i),0,.06,.05)),n.add(ie(At(.06,12,8),mn(i),0,.06,.05)),i>=2&&n.add(ie(new tn(.034),Jn(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(ie(new tn(.022),Jn(i),s,r,.05));return n.userData.tick=Qs(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function Bi(i){js={};let e=new bt,t=Et(i.b,.85),n=Et(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,l=Vt(0,r,0);e.add(l);let c=ie(Jt([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);c.rotation.x=Math.PI/2,l.add(c);let u=Vt(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,l.add(u),u.add(ie(Fi(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let f=Vt(0,i.neck,0);f.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(f);let p=i.hs||a*.55,d=ie(At(p,12,10),t);if(d.scale.set(.9,.95,1.1),f.add(d),i.beak){let y=ie(an(p*.42,p*1.3,8),Et(15116602,.5),0,-p*.15,p*1.25);y.rotation.x=Math.PI/2+.25,f.add(y)}else{let y=ie(Jt([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Et(i.sn,.85):t,0,-p*.2,p*.5);y.rotation.x=Math.PI/2,f.add(y),f.add(ie(At(p*.14,6,5),Et(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let y of[-1,1]){if(f.add(ie(At(p*.13,8,6),Et(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),y*p*.72,p*.2,p*.55)),i.ear==="point"){let _=ie(an(p*.3,p*.75,5),t,y*p*.5,p*.95,-p*.05);_.rotation.z=-y*.25,f.add(_)}else if(i.ear==="round")f.add(ie(At(p*.28,8,6),t,y*p*.65,p*.75,0));else if(i.ear==="long"){let _=ie(Fi(p*1.25,p*.34,p*.14,8,.45),t,y*p*.5,p*.6,-p*.1);_.rotation.set(Math.PI+.2,0,y*.35),f.add(_)}if(i.horns){let _=ie(an(p*.2,p*1.3,6),Et(i.horns,.5),y*p*.5,p*.9,-p*.5);_.rotation.x=-1,_.rotation.z=-y*.2,f.add(_)}}if(i.mane){let y=ie(vt(a*.16,i.neck*1.1,a*.5),Et(i.mane,.9),0,i.neck*.5,-a*.62);u.add(y)}let m=[];for(let[y,_]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let b=Vt(y*a*.62,-a*.3,_*s*.33);l.add(b);let I=o*.52,C=o*.5;b.add(ie(Fi(I,i.lw*1.35,i.lw,8),t));let T=Vt(0,-I,0);b.add(T),T.add(ie(Fi(C,i.lw*.9,i.lw*.7,8),_>0||!i.d2?t:n));let z=ie(At(i.lw*1.05,8,6),Et(i.hoof||1381658,.6),0,-C-i.lw*.2,i.paw?i.lw*.5:0);z.scale.set(1,.6,i.paw?1.5:1),T.add(z),m.push({hip:b,knee:T,ph:(y*_>0?0:Math.PI)+(_<0?.6:0)})}let x=Vt(0,a*.35,-s*.48);if(l.add(x),i.tail==="bush"){let y=ie(Fi(s*.4,a*.3,a*.14,8),t);y.rotation.x=1.9,x.add(y)}else if(i.tail==="hair"){let y=ie(Fi(r*.55,a*.16,a*.26,8),Et(i.mane||i.d,.9));y.rotation.x=.3,x.add(y)}else if(i.tail==="long"){let y=x;for(let b=0;b<6;b++){let I=Vt(0,b?-s*.16:0,0);I.rotation.x=b?-.2:1.85,I.add(ie(Fi(s*.17,a*(.42-b*.06),a*(.36-b*.06),8),t)),y.add(I),y=I}let _=ie(an(a*.2,a*.5,4),n,0,-s*.2,0);_.rotation.x=Math.PI,y.add(_),e.userData.tail=x}else{let y=ie(At(a*.22,8,6),t);x.add(y)}let g=[];if(i.wings)for(let y of[-1,1]){let _=Vt(y*a*.7,a*.75,s*.12);l.add(_);let b=new ei,I=i.wings;b.moveTo(0,0),b.quadraticCurveTo(I*.5,I*.5,I,I*.28),b.lineTo(I*.82,0),b.lineTo(I*.72,-I*.22),b.lineTo(I*.52,-I*.08),b.lineTo(I*.42,-I*.3),b.lineTo(I*.22,-I*.14),b.lineTo(I*.12,-I*.3),b.closePath();let C=ie(new Rr(b),Et(i.wd||i.d,.8,0,{side:Ht,emissive:i.wd||i.d,emissiveIntensity:.28}));C.scale.x=y,C.rotation.x=1.15,C.castShadow=!1,_.add(C),g.push({w:_,s:y})}(i.extra||(()=>{}))(e,l,f,{body:t,dark:n});let h=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(y,_){h+=y*(3+_*5)*(_>.02?1:0);let b=_>.02?.35+Math.min(1,_)*.3:0;for(let I of m){let C=Math.sin(h+I.ph);I.hip.rotation.x=C*b,I.knee.rotation.x=Math.max(0,Math.cos(h+I.ph))*b*1.3}l.position.y=r+(_>.02?Math.abs(Math.sin(h*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(h*2)*.04;for(let{w:I,s:C}of g)I.rotation.z=C*(.25+Math.sin(performance.now()/(_>.02?160:600))*(_>.02?.45:.1))}}}function Ex(i){js={};let e=new bt,t=Et(921107,.35,.6),n=Et(13225430,.2,.95),s=Et(526346,.9),r=[];for(let f of[-.72,.78]){let p=Vt(0,.34,f),d=ie(new yn(.27,.085,10,24),s);d.rotation.y=Math.PI/2,p.add(d);let m=ie(zt(.12,.12,.08,12),n);m.rotation.z=Math.PI/2,p.add(m);for(let x=0;x<5;x++){let g=ie(vt(.02,.5,.03),n);g.rotation.x=x/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=ie(At(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(ie(vt(.3,.3,.55),Et(2763312,.4,.8),0,.5,.05));let o=ie(vt(.3,.1,.62),Et(1708560,.8),0,.8,-.38);e.add(o);let l=ie(zt(.025,.025,.8,8),n,0,.7,.66);l.rotation.x=-.42,e.add(l),e.add(ie(vt(.66,.03,.03),n,0,1.06,.5));let c=ie(At(.2,12,8),t,0,.95,.62);c.scale.set(.9,.9,.7),e.add(c),e.add(ie(At(.075,10,8),Et(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(ie(vt(.31,.02,.5),Et(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let f of[-1,1]){let p=ie(zt(.035,.045,.7,8),n,f*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new to(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(f,p){for(let d of r)d.rotation.x+=f*p*22;e.position.y=0}}}var ti={m0:{speed:1.7,make:()=>Bi({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>Bi({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=ie(vt(.5,.08,.6),Et(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>Bi({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=ie(Jt([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Et(lo[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>Ex(vn[3])},m4:{speed:2.5,make:()=>Bi({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=ie(At(.2,10,8),Et(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>Bi({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=ie(an(.06,.2,4),Et(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>Bi({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=ie(Jt([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Et(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new Cn(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}},Nu={wolf:()=>Bi({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>Bi({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=ti.m5.make();return i.group.scale.setScalar(.85),i}};var pc={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},po=["neutre","ninja","souverain","digne","humble","timide"],mo=["neutre","ninja","levitation"],zu=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],fc={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},os=.252;function Tx(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[os,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function Or(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:Dt(s.rx,r.rx,n),rz:Dt(s.rz,r.rz,n),rb:Dt(s.rb??s.rz,r.rb??r.rz,n),z:Dt(s.z,r.z,n)}}return i[i.length-1]}var uo=(i,e,t,n=1)=>{let s=Or(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/os)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function fo(i,e,t){let n=Or(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var ki=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Fu(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?Dt(.184,.128,ki((i-.8)/.5)):i<1.8?Dt(.128,.088,ki((i-1.3)/.5)):Dt(.088,.04,ki((i-1.8)/.7))}function Bu(i,e,t,n=28,s=6){let r=[],a=[],o=os-.006,l=s+1;for(let f=0;f<n;f++){let p=-Math.PI+f/n*2*Math.PI,d=e(Math.abs(p));for(let m=0;m<=s;m++)r.push(...uo(i,p,Dt(d,o,Math.sin(m/s*Math.PI/2)),t))}for(let f=0;f<n;f++)for(let p=0;p<s;p++){let d=f*l+p,m=(f+1)%n*l+p,x=d+1,g=m+1;a.push(d,m,x,m,g,x)}let c=r.length/3;r.push(0,os+(t-1)*.11,0);for(let f=0;f<n;f++)a.push(c,f*l+s,(f+1)%n*l+s);let u=new Tt;return u.setAttribute("position",new ft(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function xi(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let l=a;l>=0;l--){let c=l/a,u=c<.22?Dt(.72,1,c/.22):Math.max(.03,1-Math.pow((c-.22)/.78,1.5));o.push({y:-i*c,x:s*i*c*c,z:n*i*c*c,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),Jt(o,r)}var Pn=(i,e=0,t="#000000")=>"#"+new Qe(i).lerp(new Qe(t),e).getHexString();function Ou(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",l=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let c=(O,Y)=>Math.asin(Math.max(-.99,Math.min(.99,O/Or(e,Y).rx))),u=(O,Y)=>(.5+c(O,Y)/l)*n,f=O=>(1-O/os)*s,p=s/os,d=(O,Y)=>n/l/(Or(e,Y).rx*Math.cos(c(O,Y))),m=(O,Y,se,N)=>{a.save(),a.translate(u(O,Y),f(Y)),a.scale(se*d(O,Y),-p),N(),a.restore()};if(i.hair){a.fillStyle=Pn(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let O=0;O<n;O+=2){let Y=Math.abs((O/n-.5)*l);a.fillRect(O,0,2,f(Fu(Y)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let x=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(x){let O=x==="pleine",Y=(.5-1.75/l)*n,se=(.5+1.75/l)*n;if(O){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(Y,f(.125));for(let N=0;N<=40;N++){let M=N/40,V=-1.75+M*3.5,J=Math.abs(V)>1.05?Dt(.066,.125,ki((Math.abs(V)-1.05)/.6)):.05+.016*ki(Math.abs(V)/1.05);a.lineTo((.5+V/l)*n,f(J))}a.lineTo(se,s),a.lineTo(Y,s),a.closePath(),a.fill(),m(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let N=a.createLinearGradient(0,s,0,f(.066));N.addColorStop(0,Pn(i.hairColor)),N.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=N,a.fillRect(Y,f(.066),se-Y,s-f(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,m(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}m(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=O?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let O of[-1,1])m(O*.047,.071,O,()=>{let Y=a.createRadialGradient(0,0,0,0,0,.02);Y.addColorStop(0,`rgba(238,104,104,${g})`),Y.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=Y,a.fillRect(-.02,-.02,.04,.04)});m(0,.064,1,()=>{let O=i.nose;a.strokeStyle=Pn(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*O,-.0052*O),a.quadraticCurveTo(0,-.0072*O,.0042*O,-.0052*O),a.stroke(),a.globalAlpha=1}),m(0,.037,1,()=>{let O=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-O*.78,0),a.quadraticCurveTo(0,-.0082,O*.78,0),a.quadraticCurveTo(0,-.0016,-O*.78,0),a.fill(),a.beginPath(),a.moveTo(-O*.85,0),a.quadraticCurveTo(-O*.3,.0034,0,.0016),a.quadraticCurveTo(O*.3,.0034,O*.85,0),a.quadraticCurveTo(0,-.0012,-O*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=Pn(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-O,9e-4),a.quadraticCurveTo(0,-.0026,O,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-O*.36,-.006),a.quadraticCurveTo(0,-.0074,O*.36,-.006),a.stroke(),a.globalAlpha=1)});let h=i.eyes*(o?1.06:1),y=.0202*h,_=(o?.0176:.0136)*h,b=(o?.0114:.0096)*h,I=.1,C=.0398*i.eyeGap+(h-1)*.004,T=Pn(i.hairColor,.72,"#120c10"),z=i.eyeColor;for(let O of[-1,1])m(O*C,I,O,()=>{if(t.closed){if(a.strokeStyle=T,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-y,.001),a.quadraticCurveTo(0,-b*.95,y*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let re of[.45,.75,1])a.beginPath(),a.moveTo(y*re,-b*.5*(1.1-re)-4e-4),a.lineTo(y*(re+.14),-b*.5*(1.1-re)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-y,-.0012),a.bezierCurveTo(-y*.6,_*1.2,y*.4,_*1.32,y,.0032),a.bezierCurveTo(y*.62,-b*1.15,-y*.45,-b*1.2,-y,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-y*1.2,-b*1.6,y*2.4,(_+b)*1.8);let Y=a.createLinearGradient(0,_*1.05,0,_*.15);Y.addColorStop(0,"rgba(112,122,168,.8)"),Y.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=Y,a.fillRect(-y*1.2,0,y*2.4,_*1.5);let se=-y*.05,N=y*.61,M=Math.max(_,b)*1.14,V=(_-b)*.3,J=a.createLinearGradient(0,V+M,0,V-M);J.addColorStop(0,Pn(z,.74)),J.addColorStop(.48,Pn(z,.12)),J.addColorStop(1,Pn(z,.42,"#ffffff")),a.fillStyle=J,a.beginPath(),a.ellipse(se,V,N,M,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=Pn(z,.78),a.stroke(),a.fillStyle=Pn(z,.9),a.beginPath(),a.ellipse(se,V+M*.1,N*.42,M*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=Pn(z,.62,"#ffffff"),a.beginPath(),a.ellipse(se,V-M*.58,N*.6,M*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(se-O*N*.36,V+M*.42,N*.3,M*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(se+O*N*.42,V-M*.4,N*.14,M*.11,0,0,7),a.fill(),a.restore();let B=o?.0037:.0028;if(a.fillStyle=T,a.beginPath(),a.moveTo(-y*1.03,-.0016),a.bezierCurveTo(-y*.6,_*1.2,y*.4,_*1.32,y,.0032),a.lineTo(y*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(y*.55,_*1.32+B*1.7,-y*.5,_*1.2+B*1.2,-y*1.06,3e-4),a.closePath(),a.fill(),o)for(let[re,ge,me,Pe]of[[y*.96,.0062,y*1.34,.012],[y*.72,_*.95,y*1.02,_*1.62]])a.beginPath(),a.moveTo(re-.0024,ge),a.lineTo(me,Pe),a.lineTo(re+.0012,ge-.0018),a.closePath(),a.fill();a.strokeStyle=T,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(y*.98,.0012),a.bezierCurveTo(y*.78,-b*.9,y*.36,-b*1.14,-y*.08,-b*1.12),a.stroke(),a.strokeStyle=Pn(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-y*.55,_*1.16+B+.0034),a.quadraticCurveTo(y*.1,_*1.36+B+.0042,y*.82,_*.95+B+.004),a.stroke(),a.globalAlpha=1});let w=Pn(i.hairColor,.3);for(let O of[-1,1])m(O*C,I+_*1.32+(o?.0128:.0108),O,()=>{let Y=o?.0027:.0046,se=i.brows,N=-se*.0055,M=se*.0034+8e-4,V=N*.3+M*.7+.0034;a.fillStyle=w,a.beginPath(),a.moveTo(-y*1.05,N-Y*.5),a.quadraticCurveTo(0,V+Y*.15,y*1.22,M),a.quadraticCurveTo(0,V+Y*.95+8e-4,-y*1.05,N+Y*.5),a.closePath(),a.fill()});let A=new zn(r);return A.colorSpace=Nt,A.anisotropy=4,A}function Ax(i,e,t){let n=i.gender==="f",s=new bt,r=Tx(i.jaw*(n?.92:1.05)),a=Zn(r,3),o=e.shadow?t.skin:dc(16777215,{map:Ou(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let l=Su(a,32);{let d=l.attributes.position,m=l.attributes.normal,x=new F,g=new F;for(let h=0;h<d.count;h++)x.set(d.getX(h),d.getY(h)-.118,d.getZ(h)+.012).normalize(),g.set(m.getX(h),m.getY(h),m.getZ(h)).lerp(x,.8).normalize(),m.setXYZ(h,g.x,g.y,g.z)}let c=ie(l,o);s.add(c);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let d=o.map,m=Ou(i,r,{closed:!0});u=x=>{o.map=x?m:d},s.userData.dispose=()=>{d.dispose(),m.dispose()}}for(let d of[-1,1]){let m=ie(At(.024,10,8),t.skin,d*.0905,.098,-.006);m.scale.set(.42,1,.72),m.rotation.y=d*.25,s.add(m)}let f=ie(Jt([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,fo(r,0,.068)-.0035);if(f.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),f.userData.noBake=!0,f.castShadow=!1,s.add(f),!n&&i.beard==="pleine"){let d=ie(Jt(Zn([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(d)}let p=Rx(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function Rx(i,e,t,n){let s=new bt,r=i.hair,a=new bt,o=new bt,l=new bt;if(a.name="top",o.name="front",l.name="back",s.add(a,o,l),r==="rase")return s;let c=(h,y,_,b,I,C=0,T=1.06)=>{let z=uo(n,_,b,T),w=ie(y,e,z[0],z[1],z[2]);return w.rotation.order="YXZ",w.rotation.set(-I,_,C),h.add(w),w},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(ie(Bu(n,Fu,u),e));let f=(h,y=.021,_=.36)=>h.forEach(([b,I,C,T,z])=>c(o,xi(I,C,y,-.1,z||0),b,.211-Math.abs(b)*.016,_,T,u+.012)),p=(h,y=.04)=>{for(let _ of[-1,1])c(o,xi(h,y,.022,-.05,0),_*1.08,.172,.1,-_*.06,u),c(o,xi(h*.7,y*.8,.02,-.05,0),_*1.32,.16,.1,_*.06,u)},d=(h,y,_,b=1.12,I=-.45,C=.236,T=.2)=>{for(let z=0;z<h;z++)c(a,xi(y*(.9+z*7%5*.05),_,.03,I),T+z/h*6.2832,C,b,z%2?.14:-.12,u)},m=(h,y,_,b,I,C,T,z,w,A=.026)=>{for(let O=0;O<y;O++){let Y=Dt(_,b,y>1?O/(y-1):.5);c(h,xi(C*(.92+O*5%4*.05),T,A,w),Y,I,z,O%2?.1:-.1,u)}},x=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":f(x),p(t?.11:.085),d(9,.105,.062),m(a,9,1.5,4.78,.2,.1,.06,.5,-.3),m(l,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":f([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[h,y,_,b,I]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])c(a,xi(b,.074,.05,.14),h,y,_,I,.99);m(l,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":f(x),p(.19,.045),d(9,.12,.066),m(l,9,1.45,4.83,.17,.25,.066,.13,.12,.03),m(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":f(t?g:x),p(.34,.044),d(9,.13,.068),m(l,9,1.4,4.88,.17,.56,.074,.1,.03,.032),m(l,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":f(x),p(t?.15:.1),d(8,.1,.062,1.2,-.5);{let h=ie(At(.026,10,8),e,...uo(n,Math.PI,.2,1.1));a.add(h);for(let[y,_,b]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])c(a,xi(_,.066,.046,-.3,0),Math.PI,.2,b,y,1.14)}break;case"chignon":f(t?g:x),p(t?.13:.08),d(8,.095,.06,1.2,-.5);{let h=uo(n,Math.PI,.185,1.3),y=ie(At(.05,14,10),e,h[0],h[1],h[2]);y.scale.set(1,.92,.9),a.add(y);for(let _=0;_<5;_++){let b=ie(xi(.06,.035,.026,.3),e,h[0],h[1],h[2]-.01);b.rotation.set(-1.9,0,_*1.257),a.add(b)}}break;case"boucles":f([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[h,y,_,b]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let I=0;I<y;I++){let C=h<.19?Dt(1.15,5.13,I/(y-1)):I/y*6.2832+h*9;h<.215&&Math.cos(C)>.5||c(h<.15?l:a,xi(_,.07,.052,.55,I%2?.25:-.25),C,h,b,I%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function ls(i={}){let e=Object.assign({},pc,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,l=.5+s*.5,c=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},f=(S,U)=>c.glow?{emissive:S,emissiveIntensity:U}:void 0,p={skin:dc(e.skin),hair:on(e.hairColor)},d=p.skin,m=on(c.c[0],f(c.c[0],.1)),x=on(c.c[1],f(c.c[1],.1)),g=on(c.c[2],f(c.c[2],.22)),h=on(1907492),y=on(1250072),_=on(5922920),b=S=>S._dbl||(S._dbl=Object.assign(S.clone(),{side:Ht})),I=[],C={},T=S=>C["m"+S]||(C["m"+S]=$s(S)),z=S=>C["d"+S]||(C["d"+S]=$s(S,!0)),w=S=>C["g"+S]||(C["g"+S]=on(vn[S],{emissive:vn[S],emissiveIntensity:.9})),A=S=>(S.userData.joint=!0,S),O=S=>(S.userData.keep=!0,S),Y=.47*e.legs,se=.44*e.legs,N=Y+se+.105,M=new bt,V=A(Vt(0,N,0));M.add(V);let J=A(Vt(0,0,0));V.add(J);let B={hips:V,spine:J},re=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([S,U,Z,Q,ue],ae)=>{let ye=ae===1||ae===2?e.hips:ae===3?e.waist:ae===4||ae===5?e.chest:1;return{y:S,rx:U*(ae>7?1:s)*ye,rz:Z*(ae>7?1:l)*(ae===4||ae===5?e.chest:ae===3?(1+e.waist)/2:1),rb:Q*(ae>7?1:l)*(ae===4||ae===5?(1+e.chest)/2:1),z:ue}}),ge=Zn(re,3),me=S=>Or(ge,S),Pe=re[3],te=re[1],xe=S=>{let U=me(S);return U.z+U.rz},Te=c.cut,Je=Te==="plate",ke=(n?.088:.082)*s*e.hips;J.add(ie(Jt(ge,24),Te==="cape"?_:m));let Ke=n?.037:.046;J.add(ie(zt(Ke,Ke*1.1,.12,12),d,0,.555,-.006));let je=A(Vt(0,.57,.012)),$e=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);je.scale.setScalar($e),J.add(je),B.head=je;let De=Ax(e,t,p);je.add(De);let k=(S,U)=>{let Z=S.attributes.position,Q=S.index.array,ue=[];for(let ae=0;ae<Q.length;ae+=3){let ye=Q[ae],Ce=Q[ae+1],Ge=Q[ae+2];U((Z.getX(ye)+Z.getX(Ce)+Z.getX(Ge))/3,(Z.getY(ye)+Z.getY(Ce)+Z.getY(Ge))/3,(Z.getZ(ye)+Z.getZ(Ce)+Z.getZ(Ge))/3)&&ue.push(ye,Ce,Ge)}return S.setIndex(ue),S},Ie=(S,U,Z,Q=24)=>{let ue=Zn(S,3),ae=Jt(ue,Q,!1,!1);if(Z){let ye=ae.index.array,Ce=[];for(let Ge=0;Ge<ye.length/6;Ge++){let dt=Math.floor(Ge/Q),Me=(Ge%Q+.5)/Q*6.2832;if(Z(Me>Math.PI?Me-6.2832:Me,(ue[dt].y+ue[dt+1].y)/2))for(let Oe=0;Oe<6;Oe++)Ce.push(ye[Ge*6+Oe])}ae.setIndex(Ce)}return ie(ae,b(U))},de=(S,U,Z,Q,ue=.168)=>{U=Math.max(U,(ke+.098*o)/te.rx),J.add(Ie([{y:S,rx:te.rx*U,rz:te.rz*U*1.05,rb:te.rb*U*1.05},{y:Dt(S,-.03,.55),rx:te.rx*Dt(1.09,U,.6),rz:te.rz*Dt(1.12,U*1.05,.6),rb:te.rb*Dt(1.12,U*1.05,.6)},{y:-.03,rx:Math.max(te.rx*1.075,ke+.1*o),rz:te.rz*1.13,rb:te.rb*1.13},{y:ue,rx:Pe.rx*1.06,rz:Pe.rz*1.1,rb:Pe.rb*1.1}],Z,Q))},be=(S=.27)=>(U,Z)=>!(Math.abs(U)<S&&Z<.1),le=(S,U,Z,Q=1.07)=>{let ue=me(S),ae=me(U);J.add(ie(Jt([{y:S,rx:ue.rx*Q,rz:ue.rz*Q,rb:ue.rb*Q,z:ue.z},{y:U,rx:ae.rx*Q,rz:ae.rz*Q,rb:ae.rb*Q,z:ae.z}],24),Z))},Fe=()=>{le(.126,.174,y,1.14),J.add(ie(vt(.052,.052,.02),g,0,.15,xe(.15)*1.14+.004))},Ae=(S,U,Z,Q,ue,ae=1.014,ye=10)=>{let Ce=[],Ge=[];for(let Oe=0;Oe<=ye;Oe++){let pt=Oe/ye,ct=Dt(S,U,pt),it=Dt(Z,Q,pt),ln=me(ct),Mt=ln.z+ln.rz*Math.sqrt(Math.max(.05,1-(it/ln.rx)**2))*ae+.002;if(Ce.push(-it,ct,Mt,it,ct,Mt),Oe<ye){let rn=Oe*2;Ge.push(rn,rn+1,rn+2,rn+1,rn+3,rn+2)}}let dt=new Tt;dt.setAttribute("position",new ft(Ce,3)),dt.setIndex(Ge),dt.computeVertexNormals();let Me=ie(dt,b(ue));Me.castShadow=!1,J.add(Me)},P=(S,U,Z,Q=1)=>J.add(Ie([{y:.488,rx:.086*Q,rz:.07*Q,rb:.074*Q,z:-.004},{y:.488+S,rx:.064*Q,rz:.058*Q,rb:.062*Q,z:-.006}],U,Z?ue=>Math.abs(ue)>Z:null,20)),E=(n?.168:.208)*a,K=.447,oe=(n?.8:1)*o,pe=.275*e.arms,he=.25*e.arms,Ue=Te==="robe",Se=Te==="cape"?_:m,We=Te==="apron"?d:Se,et=()=>Jt(Zn([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let S of[-1,1]){let U=S<0?"M":"O",Z=A(Vt(S*E,K,0));J.add(Z),Z.add(ie(mi(pe,[[0,.046*oe],[.16,.051*oe],[.5,.043*oe],[.85,.037*oe],[1,.035*oe]],12),Se));let Q=A(Vt(0,-pe,0));if(Z.add(Q),t.oneArm&&S===-1)Q.add(ie(At(.04*oe,8,6),Se));else{Q.add(ie(mi(he,Ue?[[0,.042*oe],[.5,.06*oe],[1,.082*oe,0,.8]]:[[0,.036*oe],[.22,.041*oe],[.6,.034*oe],[1,.026*oe]],12,Ue?.15:.55),We));let ae=n?.88:1,ye=ie(et(),Te==="plate"?x:d,0,-he,0);ye.scale.setScalar(ae),Q.add(ye);let Ce=ie(mi(.045,[[0,.0095],[1,.0065]],8),Te==="plate"?x:d,0,-he-.022*ae,.028*ae);Ce.rotation.x=-.75,Ce.scale.setScalar(ae),Q.add(Ce),Te!=="apron"&&!Ue&&Q.add(ie(zt(.031*oe,.034*oe,.034,12),Te==="cape"?x:g,0,-he+.03,0)),B["hand"+U]=O(Vt(0,-he-.058*ae,.004)),Q.add(B["hand"+U])}B["arm"+U]=Z,B["elbow"+U]=Q}B.armL=B.armM,B.armR=B.armO,B.elbowL=B.elbowM,B.elbowR=B.elbowO;let rt=ke,ce=o,xt=Te==="track"||Te==="suit"||Te==="tail"||Te==="plate"?m:x,at=()=>{let S=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([Z,Q,ue])=>({y:Z,rx:Q,rz:ue,z:.036-ue})),U=Jt(Zn(S,2),12);return U.rotateX(Math.PI/2),U};for(let S of[-1,1]){let U=S<0?"M":"O",Z=A(Vt(S*rt,-.02,0));V.add(Z),Z.add(ie(mi(Y,n?[[0,.09*ce],[.3,.09*ce],[.7,.066*ce],[1,.052*ce]]:[[0,.086*ce],[.3,.088*ce],[.7,.069*ce],[1,.056*ce]],14),xt));let Q=A(Vt(0,-Y,0));Z.add(Q);let ue=n?.92:1;Q.add(ie(mi(se,[[0,.054*ce*ue],[.25,.06*ce*ue,-.008],[.7,.043*ce*ue],[1,.036*ce*ue]],12),xt)),Q.add(ie(mi(se*.56,[[0,.054*ce*ue*1.16],[.4,.047*ce*ue*1.14],[1,.04*ce*ue*1.12]],12,.2),h,0,-se*.44,-.002)),Q.add(ie(zt(.062*ce*ue,.058*ce*ue,.03,12),Te==="plate"?g:h,0,-se*.44,-.004));let ae=ie(at(),h,0,-se-.049,.004);if(ae.scale.setScalar(n?.9:1),Q.add(ae),u.jambieres!=null){let ye=u.jambieres;Q.add(ie(mi(se*.8,[[0,.07*ce],[.3,.074*ce,-.004],[1,.052*ce]],12,.15),T(ye),0,-se*.1,.004));let Ce=ie(At(.062*ce,10,8),z(ye),0,0,.03);if(Ce.scale.set(1,1.2,.8),Q.add(Ce),ye>=2&&Q.add(ie(new tn(.016),w(ye),0,0,.082*ce)),ye>=5){let dt=Qs(Q,ye,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});dt&&I.push(dt)}let Ge=ie(at(),z(ye),0,-se-.044,.008);Ge.scale.set(1.12,1.1,1.06),Q.add(Ge)}B["leg"+U]=Z,B["knee"+U]=Q}B.legL=B.legM,B.legR=B.legO,B.kneeL=B.kneeM,B.kneeR=B.kneeO;let st=!1,tt=()=>{for(let S of[-1,1])B[S<0?"armM":"armO"].add(ie(vt(.008,pe*.86,.022),g,S*.05*oe,-pe*.5,0)),B[S<0?"legM":"legO"].add(ie(vt(.008,Y*.9,.024),g,S*.079*ce,-Y*.5,0)),B[S<0?"kneeM":"kneeO"].add(ie(vt(.008,se*.42,.02),g,S*.055*ce,-se*.2,0))};switch(Te){case"uniform":de(-.125,1.1,m),Fe(),Ae(.175,.488,.009,.009,g),P(.05,g,.17);for(let S of[-1,1]){let U=ie(vt(.085,.014,.05),g,S*E*.86,.478,0);U.rotation.z=-S*.32,J.add(U)}break;case"track":Ae(.02,.5,.007,.007,g),P(.06,g,.17,1.04),le(-.045,-.015,x,1.03),tt();break;case"apron":J.add(Ie([{y:-Y*.92,rx:te.rx*1.24,rz:te.rz*1.3},{y:-.03,rx:te.rx*1.08,rz:te.rz*1.15},{y:.168,rx:Pe.rx*1.06,rz:Pe.rz*1.13}],g,S=>Math.abs(S)<1.25)),Ae(.17,.43,.1,.075,g,1.03),Fe(),P(.03,m,.35);break;case"coat":de(-Y*.94,n?1.5:1.32,m,be()),Fe(),Ae(.3,.5,.012,.045,g),P(.07,x,.45,1.16);break;case"blouse":de(-Y*.8,1.22,m,be(.14)),Ae(.36,.5,.01,.04,x),P(.04,m,.4,1.1);{let S=ie(vt(.055,.05,.012),g,E*.42,.33,xe(.33)*.96+.006);J.add(S),B.armM.add(ie(zt(.06*oe,.06*oe,.05,12),g,0,-.12,0))}break;case"robe":de(-(N-.1),n?1.9:1.55,m),st=!0,le(.125,.2,g,1.085),Ae(.2,.5,.01,.05,g),P(.045,g,.35,1.12);{let S=ie(vt(.05,.34,.012),g,0,-.03,te.rz*1.24);S.rotation.x=-.08,J.add(S)}break;case"suit":de(-.12,1.07,m,be(.14)),Ae(.24,.5,.006,.05,g),Ae(.25,.48,.014,.012,x,1.03),P(.035,g,.35);break;case"cape":{de(-.15,1.12,_),Fe(),J.add(ie(Jt(Zn([{y:-N*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),m)),J.add(Ie([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],m));{let S=ie(At(.075,12,8),m,0,.535,-.085);S.scale.set(1.25,.6,.8),J.add(S)}J.add(ie(new tn(.024),w(2),0,.455,.12));break}case"plate":{for(let S of[-1,1]){let U=ie(At(.098,12,8),m,S*E*1.02,K+.036,0);U.scale.set(1.15,.72,1.1),J.add(U),B[S<0?"elbowM":"elbowO"].add(ie(mi(he*.7,[[0,.052*oe],[1,.04*oe]],12,.2),m,0,-.02,0))}J.add(ie(new tn(.028),on(c.c[2],{emissive:c.c[2],emissiveIntensity:.8}),0,.36,xe(.36)+.012)),de(-Y*.5,1.22,g,be(.14)),Fe(),P(.05,x,.17,1.1);break}case"tail":{Ae(.2,.5,.03,.06,g),de(-.1,1.05,m,S=>Math.abs(S)>.6);for(let S of[-1,1]){let U=ie(vt(.115,.44,.014),x,S*.064,-.22,-te.rb*1.12);U.rotation.x=.1,J.add(U)}for(let S of[-1,1]){let U=ie(an(.022,.05,4),x,S*.024,.497,xe(.49)+.014);U.rotation.z=S*Math.PI/2,U.scale.z=.5,J.add(U)}P(.035,g,.35);break}}if(u.plastron!=null){let S=u.plastron,U=ge.filter(Z=>Z.y>=.175&&Z.y<=.492).map(Z=>({y:Z.y,rx:Z.rx*1.09,rz:Z.rz*1.14,rb:Z.rb*1.12,z:Z.z}));U.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),J.add(ie(Jt(U,24,!1,!1),b(T(S)))),le(.175,.2,z(S),1.16);for(let Z of[-1,1]){let Q=ie(At(.094,12,8),z(S),Z*E*1.04,K+.042,0);Q.scale.set(1.2+S*.03,.7,1.14),J.add(Q);let ue=ie(At(.075,12,8),T(S),Z*E*1.12,K-.02,0);if(ue.scale.set(1,.8,1.1),J.add(ue),S>=4){let ae=ie(an(.028,.11,6),T(S),Z*E*1.2,K+.095,0);ae.rotation.z=-Z*.7,J.add(ae)}}if(Ae(.2,.49,.012,.012,z(S),1.16),S>=2&&J.add(ie(new tn(.03),w(S),0,.375,xe(.375)*1.14+.016)),S>=4)for(let Z of[-1,1])J.add(ie(new tn(.02),w(S),Z*E*1.04,K+.1,.03));if(S>=3)for(let Z of[-1,1]){let Q=Qs(J,S,{x:Z*E*1.06,y0:K+.07,y1:K+(S>=5?.2:.16),r:.05,mode:"lite"});Q&&I.push(Q)}S>=6&&I.push(Lu(J,.4,-(re[5].rb+.03)))}if(u.casque!=null){let S=u.casque,U=De.userData.rings,Z=b(T(S)),Q=ae=>ae<.55?.138:ae<1?Dt(.138,.05,ki((ae-.55)/.3)):ae<2.2?.05:.035;je.add(ie(Bu(U,Q,1.13,32,7),Z)),je.add(ie(vt(.016,.07,.014),z(S),0,.118,fo(U,0,.12)*1.13+.006));{let ae=ie(Jt(Zn([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),z(S),0,.262,0);je.add(ae)}if(S>=2&&je.add(ie(new tn(.015),w(S),0,.2,fo(U,0,.2)*1.13+.012)),S>=3){let ae=ie(Jt(Zn([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),on(vn[S]),0,.285,0);je.add(ae)}if(S>=5)for(let ae of[-1,1]){let ye=ie(an(.024,.13,6),T(S),ae*.112,.215,-.02);ye.rotation.z=-ae*.9,je.add(ye)}if(S>=5){let ae=Qs(je,S,{y0:S>=6?.3:.27,y1:S>=6?.33:.38,r:S>=6?.1:.03,z:-.02,mode:S>=6?"halo":"lite"});ae&&I.push(ae)}let ue=De.getObjectByName("hair");if(ue){ue.remove(ue.getObjectByName("top"));let ae=ue.getObjectByName("front");ae.children.slice(0,Math.max(0,ae.children.length-4)).forEach(ye=>ae.remove(ye))}}let Ye=O(Vt(0,.3,-(re[4].rb+.05)));J.add(Ye);let nt=i.main&&i.main.type,ht=i.off&&i.off.type,ut=nt?fc[nt]||"1h":"fist",ot=[],we=(S,U,Z)=>new Tn().setFromEuler(new Li(S,U,Z));function G(S,U,Z){let Q=A(Du(S.type,S.r)),ue=S.type,ae={g:Q,type:ue,hand:B[Z]},ye={parent:Ye,p:[0,0,0],q:we(0,0,0),s:1},Ce={p:[0,0,0],q:we(Math.PI/2,Math.PI/2,0),s:1};return ue==="orbe"?(ye.parent=J,ye.p=[U*.3,.52,.12],ae.orb=!0,B.orb=Q):ue==="grimoire"?(ye.parent=J,ye.p=[U*(te.rx+.035),.02,.02],ye.q=we(0,U*Math.PI/2,.1),Ce.p=[0,0,.05],Ce.q=we(-1.2,Math.PI/2,0),ae.hand=B.handO||B.handM):ue==="pistolet"||ue==="dague"?(ye.parent=J,ye.p=[U*(te.rx+.04),.03,0],ye.q=we(Math.PI+.25,0,0),ye.s=.9,ue==="pistolet"&&(Ce.q=we(0,0,Math.PI),Ce.p=[0,.01,.03])):ue==="anneaux"?(ye.p=[0,.02,.01],ye.q=we(Math.PI/2-.2,0,0),ye.s=.85,Ce.q=we(Math.PI/2,0,0),Ce.p=[0,0,.12],Ce.s=.7):ue==="guisarme"||ue==="baton"?(ye.p=[-U*.12,-.62,0],ye.q=we(0,0,U*.3),Ce.p=[0,0,-.1]):ue==="arc"?(ye.p=[U*.1,0,0],ye.q=we(0,0,U*.25),Ce.q=new Tn().setFromRotationMatrix(new wt().makeBasis(new F(0,-1,0),new F(0,0,1),new F(-1,0,0))),Ce.p=[0,.12,-.2],ae.hand=B.handO||B.handM):ue==="harpe"?(ye.p=[0,-.45,-.03],ye.s=.85,Ce.q=we(Math.PI/2,0,0),Ce.p=[.02,.06,-.42],Ce.s=.64,ae.hand=B.handO||B.handM):ue==="repercuteur"?(ye.p=[U*.17,.2,0],ye.q=we(0,0,U*(Math.PI-.5)),Ce.q=we(0,0,Math.PI),Ce.p=[0,.06,.1]):(ye.p=[U*.17,.2,0],ye.q=we(0,0,U*(Math.PI-.5))),Q.userData.tick&&I.push(Q.userData.tick),ae.S=ye,ae.H=Ce,ot.push(ae),Ne(ae,!1),ae}function Ne(S,U){let Z=U&&S.hand&&!S.orb?S.H:S.S;(U&&S.hand&&!S.orb?S.hand:S.S.parent).add(S.g),S.g.position.set(Z.p[0],Z.p[1],Z.p[2]),S.g.quaternion.copy(Z.q),S.g.scale.setScalar(Z.s)}nt&&G(i.main,-1,"handM"),ht&&ht!=="bouclier"&&G(i.off,1,"handO");let Le=ot.length>1&&fc[ht]===fc[nt],v=ht==="bouclier"?i.off.r:u.bouclier;if(v!=null){let S=A(Uu(v));S.position.set(.055,-.13,0),S.rotation.y=Math.PI/2,S.scale.setScalar(.8),B.elbowO.add(S),S.userData.tick&&I.push(S.userData.tick)}if(i.aura){let S=new Qe(i.aura),U=new Be(new Bn(.42,.56,40),new Pt({color:S,transparent:!0,opacity:.55,side:Ht,blending:dn,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.y=.02,M.add(U),B.aura=U;let Z=new Be(zt(.5,.42,1.5,24,!0),new Pt({color:S,transparent:!0,opacity:.1,side:Ht,blending:dn,depthWrite:!1}));Z.position.y=.75,M.add(Z),B.auraCol=Z}M.scale.setScalar(e.height);let D=Au(M,!t.shadow&&!t.noInk);if(t.shadow){let S=typeof t.shadow=="string"?t.shadow:"#14141f",U=new eo({color:S,transparent:!0,opacity:.8,emissive:new Qe(S).multiplyScalar(.6)});M.traverse(ue=>{ue.isMesh&&ue.material&&!ue.material.transparent&&!(ue.material.emissiveIntensity>.4)&&(ue.material.map&&ue.material.userData.ownMap&&ue.material.map.dispose(),ue.material=U)});let Z=new Pt({color:t.eyes||"#bfe4ff"}),Q=De.userData.rings;for(let ue of[-1,1]){let ae=new Be(At(.012,8,6),Z);ae.position.set(ue*.037,.1,fo(Q,.037,.1)+.002),ae.scale.set(1.5,.7,.5),je.add(ae)}}M.traverse(S=>{S.isMesh&&(S.castShadow=!S.material.transparent&&!S.userData.ink&&S.userData.noBake!==!0)});let X=(S,U)=>new Pt({color:S,transparent:!0,opacity:U,side:Ht,blending:dn,depthWrite:!1}),ee=new Be(new Bn(.14,.36,30).rotateX(-Math.PI/2),X(i.aura||"#9fe8ff",.5));ee.visible=!1,ee.castShadow=!1,M.add(ee);let fe=new bt;fe.visible=!1,M.add(fe);{let S=i.aura||"#bfe8ff",U=new Be(zt(.52,.34,2.3,20,!0),X(S,.16));U.position.y=1.15,U.castShadow=!1,fe.add(U);let Z=X("#ffffff",.7),Q=vt(.012,.3,.012);for(let ae=0;ae<9;ae++){let ye=new Be(Q,Z);ye.castShadow=!1,ae&&(ye.userData.sharedGeo=!0),fe.add(ye)}let ue=new Be(new Bn(.3,.62,32).rotateX(-Math.PI/2),X(S,.5));ue.position.y=.03,ue.castShadow=!1,fe.add(ue)}let ne={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0},W={};B.armM.rotation.order=B.armO.rotation.order="XZY";let _e=Math.random()*6,L=null,H=!1,j=1.5+Math.random()*4,Ee=0,Re=po.includes(e.stance)?e.stance:"neutre",Xe=mo.includes(e.move)?e.move:"neutre",qe=v!=null,lt=nt==="grimoire"||ht==="grimoire";function He(){switch(ut){case"1h":case"rings":W.aMx=-.45,W.aMz=.2,W.eM=-1.15,Le?(W.aOx=-.4,W.aOz=.2,W.eO=-1.05):qe&&(W.aOx=-.6,W.aOz=-.1,W.eO=-1.45);break;case"2h":W.aMx=-.6,W.aMz=-.12,W.eM=-1.05,W.aOx=-.75,W.aOz=-.42,W.eO=-1.2,W.sY=-.22;break;case"staff":W.aMx=-.5,W.aMz=.12,W.eM=-1.35,qe&&(W.aOx=-.6,W.aOz=-.1,W.eO=-1.45);break;case"bow":W.aOx=-.6,W.aOz=.12,W.eO=-.8;break;case"gun":W.aMx=-.5,W.eM=-1.3,Le&&(W.aOx=-.5,W.eO=-1.3);break;case"cannon":W.aMx=-.4,W.aMz=-.05,W.eM=-1.25,W.aOx=-.85,W.aOz=-.5,W.eO=-.9;break;case"magic":W.aMx=-.5,W.aMz=.22,W.eM=-1.25,lt&&(W.aOx=-.55,W.eO=-1.5);break;case"harp":W.aOx=-.75,W.aOz=-.18,W.eO=-1.6,W.aMx=-.5,W.eM=-1.3;break;default:W.aMx=-.5,W.eM=-1.75,W.aOx=-.5,W.eO=-1.75}}let Ze=S=>Object.assign(W,S),It=S=>{let U={};for(let Z in S){let Q=Z==="sY"||Z==="aMy"||Z==="aOy",ue=Z.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");U[Z==="sY"?Z:ue]=Q?-S[Z]:S[Z]}return U};function R(S){switch(Re){case"ninja":return Ze({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return Ze({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return Ze({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return Ze({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return Ze({sX:.1,sY:.12+Math.sin(S*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let q={slash(S,U){let Z=S<.36,Q=S<.66,ue=Le&&U%2===1,ae=Le?(U>>1)%3:U%3,ye=ae===0?Z?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:Q?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:ae===1?Z?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:Q?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:Z?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:Q?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;ye&&Ze(ue?It(ye):ye)},heavy(S,U){let Z=S<.42,Q=S<.72;U%2===0?Z?Ze({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):Q&&Ze({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):Z?Ze({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):Q&&Ze({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(S,U){if(S>.8)return;if(ut==="cannon"){Ze({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),S>.3&&S<.5&&Ze({sX:-.16,aMx:-1.45});return}let Z=S>.3&&S<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};Ze(Le&&U%2===1?It(Z):Z)},bow(S){S<.55?Ze({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):S<.82&&Ze({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(S){S<.4?Ze({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):S<.75&&Ze({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(S){S<.78&&Ze({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(S){S<.45?Ze({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(S/.45*Math.PI*.6)}):S<.82&&Ze({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(S){Ze({aOx:-.8,aOz:-.2,eO:-1.6}),S<.35?Ze({aMx:-1.25,aMz:.4,eM:-1.5}):S<.72&&Ze({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(S,U){let Z=S<.32?{aMx:.3,eM:-2.2,sY:-.4}:S<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;Z&&Ze(U%2?It(Z):Z)},spin(S){Ze({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(S){Ze({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},dash(S){Ze({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(S){Ze({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:M,joints:B,height:(N+.57+os*$e)*e.height,seatDrop:N*e.height,cat:ut,dual:Le,inks:D,scale:e.height,get armed(){return H},get acting(){return L?L.name:null},get move(){return Xe},get stance(){return Re},setArmed(S){if(S=!!S,S!==H){H=S;for(let U of ot)Ne(U,S)}},setStyle(S){S.stance&&po.includes(S.stance)&&(Re=S.stance),S.move&&mo.includes(S.move)&&(Xe=S.move)},play(S,U=.5,Z=0,Q=1){q[S]&&(L={name:S,t:0,dur:U,c:Z,turns:Q})},hand(S,U){let Z=B[U?"handO":"handM"]||B.handO||B.handM;return Z?Z.getWorldPosition(S):M.getWorldPosition(S)},update(S,U={}){let Z=Math.min(3.2,U.speed||0),Q=Ee+=S,ue=Math.sin(Q*1.6),ae=Xe==="levitation"&&!U.riding&&!U.down,ye=Z>.02,Ce=Xe==="ninja"&&Z>.9&&!U.riding&&!U.down;_e+=S*(4.6+Z*3.4)*(Ce?1.3:1)*(ye?1:0),Ze({aMx:ue*.02,aMy:0,aMz:.08,aOx:-ue*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:ue*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:ue*.003});let Ge=null,dt=!1,Me=!1;if(U.riding)Ge=[-1.25,1.3,-1.25,1.3,U.wide||.45],Ze({sX:.06+ue*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),dt=!0;else if(U.down)Ge=[-1.48,1.5,.15,1.65,0],Ze({sX:.5,hdX:.45,dy:-(Y-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(ye&&ae){let _t=Math.min(1,Z/2);Ze({sX:.1+_t*.34,hdX:-.1-_t*.24,aMx:.25+_t*.5,aOx:.25+_t*.5,aMz:.34,aOz:.34,eM:-.2,eO:-.2})}else if(ye){let _t=Math.max(0,Math.min(1,Z-.75)),Wt=Ce?.72:(st?.3:.55)+Math.min(Z,1.4)*(st?.12:.3),$t=Math.sin(_e),kt=(.7+_t)*Wt*1.5;Ge=[$t*Wt,Math.max(0,-Math.cos(_e))*kt,-$t*Wt,Math.max(0,Math.cos(_e))*kt,0],dt=!0,Ze(Ce?{sX:.8,hdX:-.58,aMx:.72+$t*.05,aOx:.72-$t*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:$t*.05,dy:-.1+Math.abs(Math.cos(_e))*.03}:{aMx:-$t*Wt*.8,aOx:$t*Wt*.8,eM:-.25-_t*.9-Math.max(0,-$t)*.4,eO:-.25-_t*.9-Math.max(0,$t)*.4,sX:.04+_t*.2,sY:$t*.07,dy:Math.abs(Math.cos(_e))*.025*(1+_t)})}else!H&&!L&&(Ge=R(Q),Me=!0);if(ae&&(Ge=[.16,.42,-.1,.2,0],dt=!1,W.dy=.32+Math.sin(Q*2.2)*.04),H&&!U.riding&&!U.down&&!Ce){let _t=W.aMx,Wt=W.aOx,$t=W.sY;ae&&(W.aMz=W.aOz=.08,W.eM=W.eO=-.12),He(),ye&&!ae&&(W.aMx+=_t*.25,W.aOx+=Wt*.25,W.sY+=$t)}let Oe=0,pt=0;if(L){L.t+=S;let _t=L.t/L.dur;_t>=1?L=null:(q[L.name](_t,L.c),L.name==="spin"&&(Oe=ki(_t)*6.2832*L.turns),L.name==="roll"&&(pt=ki(_t)*6.2832,Ge=[-1.7,2.2,-1.7,2.2,0],dt=!1),L.name==="dash"&&!ae&&(Ge=[-1.05,.55,.75,.95,0],dt=!1),L.name==="slam"&&_t<.45&&(Ge=[-.5,1.1,.3,.9,0],dt=!1))}let ct=1-Math.exp(-(L||U.riding?30:Ce?16:12)*S);for(let _t in ne)ne[_t]+=(W[_t]-ne[_t])*ct;B.armM.rotation.set(ne.aMx,ne.aMy,-ne.aMz),B.armO.rotation.set(ne.aOx,ne.aOy,ne.aOz),B.elbowM.rotation.x=ne.eM,B.elbowO.rotation.x=ne.eO,J.rotation.x=ne.sX,J.rotation.y=ne.sY,V.position.y=N+ne.dy,V.rotation.y=Oe,V.rotation.x=pt,je.rotation.set(ne.hdX,ne.hdY+(ye||L||Re==="timide"?0:Math.sin(Q*.4)*.08),ne.hdZ);let it=dt?1:1-Math.exp(-(Ge?16:8)*S),ln=Ge||[0,0,0,0,0];if(B.legM.rotation.x+=(ln[0]-B.legM.rotation.x)*it,B.kneeM.rotation.x+=(ln[1]-B.kneeM.rotation.x)*it,B.legO.rotation.x+=(ln[2]-B.legO.rotation.x)*it,B.kneeO.rotation.x+=(ln[3]-B.kneeO.rotation.x)*it,B.legM.rotation.z+=(-ln[4]-B.legM.rotation.z)*it,B.legO.rotation.z+=(ln[4]-B.legO.rotation.z)*it,B.orb){let _t=B.orb;H?_t.position.set(-.26,.42+Math.sin(Q*2)*.03,.34):_t.position.set(-.3,.52+Math.sin(Q*2)*.03,.12),_t.rotation.y=Q}B.aura&&(B.aura.rotation.z=Q*.5,B.aura.material.opacity=.42+Math.sin(Q*2.2)*.14,B.auraCol.material.opacity=.08+Math.sin(Q*1.7)*.03);for(let _t of I)_t(Q);ee.visible=ae,ae&&(ee.position.y=ne.dy-.03,ee.rotation.y=Q*1.5,ee.scale.setScalar(1+Math.sin(Q*3)*.08),ee.material.opacity=.4+Math.sin(Q*4)*.12);let Mt=Me&&Re==="digne";if(fe.visible=Mt,Mt){let _t=fe.children;_t[0].material.opacity=.13+Math.sin(Q*5)*.05,_t[0].scale.set(1+Math.sin(Q*7)*.04,1,1+Math.sin(Q*7)*.04);for(let Wt=1;Wt<=9;Wt++){let $t=(Q*.9+Wt*.37)%1,kt=Wt*2.4+Q*.6;_t[Wt].position.set(Math.cos(kt)*.44,$t*2.2,Math.sin(kt)*.44),_t[Wt].scale.y=.6+$t}_t[1].material.opacity=.5+Math.sin(Q*6)*.2,_t[10].rotation.y=-Q,_t[10].scale.setScalar(1+Math.sin(Q*5)*.06)}let rn=De.userData.blink;rn&&(j-=S,j<0&&(rn(j>-.11),j<=-.11&&(j=2.2+Math.random()*4)))}}}function ku(i,e,t={}){let n=new ts({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=Nt,n.toneMapping=jn,n.shadowMap.enabled=!0,n.shadowMap.type=Lr;let s=new Ni,r=new Ui(n);s.environment=r.fromScene(new Zs,.04).texture,r.dispose();let a=new jt(28,1,.1,50);s.add(new Ws(16777215,9078440,1.15));let o=new Oi(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let l=new Oi(58879,1.1);l.position.set(-3,2,-3),s.add(l);let c=new Oi(10185727,.9);c.position.set(3,1.5,-3),s.add(c);let u=document.createElement("canvas");u.width=u.height=256;let f=u.getContext("2d"),p=f.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=p,f.fillRect(0,0,256,256),f.strokeStyle="rgba(0,240,255,.5)",f.lineWidth=2,f.beginPath(),f.arc(128,128,84,0,7),f.stroke(),f.strokeStyle="rgba(0,240,255,.2)",f.beginPath(),f.arc(128,128,108,0,7),f.stroke();let d=new Be(new Qn(1.5,48),new Pt({map:new zn(u),transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,s.add(d);let m=new Be(new Qn(1.5,32),new ja({opacity:.45}));m.rotation.x=-Math.PI/2,m.position.y=.002,m.receiveShadow=!0,s.add(m);let x=new bt;s.add(x);let g=null,h=null,y=t.zoom||"body",_=t.yaw??-.35,b=null,I=0,C=!1,T=!!t.walk,z={y:.9,d:4.6};function w(V){g&&(x.remove(g.group),pi(g.group)),h&&(x.remove(h.group),pi(h.group),h=null),g=ls(V),x.add(g.group),V.armed&&g.setArmed(!0),V.mount&&ti[V.mount]?(h=ti[V.mount].make(),co(h.group),x.add(h.group),g.group.position.set(0,h.seat.y-g.seatDrop,h.seat.z),g.wide=h.wide):g.group.position.set(0,0,0)}w(e);function A(){let V=i.clientWidth||300,J=i.clientHeight||400;(i.width!==Math.round(V*n.getPixelRatio())||i.height!==Math.round(J*n.getPixelRatio()))&&(n.setSize(V,J,!1),a.aspect=V/J,a.updateProjectionMatrix())}let O=V=>{b={x:V.clientX,yaw:_},I=performance.now(),i.setPointerCapture&&i.setPointerCapture(V.pointerId)},Y=V=>{b&&(_=b.yaw+(V.clientX-b.x)*.012,I=performance.now())},se=()=>{b=null};i.addEventListener("pointerdown",O),i.addEventListener("pointermove",Y),i.addEventListener("pointerup",se),i.addEventListener("pointercancel",se),i.style.touchAction="pan-y";let N=performance.now();function M(V){if(C)return;requestAnimationFrame(M);let J=Math.min(.05,(V-N)/1e3);if(N=V,!i.isConnected||i.offsetParent===null)return;A(),t.spin&&y!=="face"&&!b&&V-I>2500&&(_+=J*.25),x.rotation.y=_;let B=g.height+(h?h.seat.y-g.seatDrop:0),re=a.aspect,ge=Math.max(B,1.8),me=g.scale||1,Pe=y==="face"?{y:B-.15*me,d:1.12*Math.max(.75,me)/Math.min(1,re*.9)}:h?{y:B*.5,d:Math.max(B*2.6,3.4/Math.min(1,re*1.2))}:{y:ge*.5,d:ge*2.35/Math.min(1,re*1.9)};z.y+=(Pe.y-z.y)*Math.min(1,J*6),z.d+=(Pe.d-z.d)*Math.min(1,J*6),a.position.set(0,z.y+(y==="face"?.02:.25),z.d),a.lookAt(0,z.y,0),t.freeze||(g.update(J,{speed:T&&!h?2:0,riding:!!h,wide:g.wide}),h&&h.update(J,T?.8:0)),n.render(s,a)}return requestAnimationFrame(M),{set:w,setZoom(V){y=V},setArmed(V){g&&g.setArmed(V)},play(V,J,B,re){g&&(g.setArmed(!0),g.play(V,J,B,re))},get avatar(){return g},setWalk(V){T=V},setYaw(V){_=V,I=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){C=!0,i.removeEventListener("pointerdown",O),i.removeEventListener("pointermove",Y),i.removeEventListener("pointerup",se),pi(s),n.dispose()}}}var go={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cx=new Bs(-1,1,1,-1,0,1),mc=class extends Tt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},Px=new mc,Hi=class{constructor(e){this._mesh=new Be(Px,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var xo=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zi.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zr=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_o=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xo(go),this.copyPass.material.blending=Kn,this.clock=new no}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zr!==void 0&&(a instanceof zr?n=!0:a instanceof _o&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vo=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var er=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new _n(r,a,{type:Xn});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new _n(r,a,{type:Xn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Hu;this.highPassUniforms=zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ve(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=go;this.copyUniforms=zi.clone(u.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Qe,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new Hi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ve(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};er.BlurDirectionX=new ve(1,0);er.BlurDirectionY=new ve(0,1);var Gu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Mo=class extends In{constructor(){super();let e=Gu;this.uniforms=zi.clone(e.uniforms),this.material=new Qa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mt={x:-200,z:70,r:22.4,wall:33.6,gate:.17},Ix={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},Vu=[16734842,4704511,16765514,9166954],Wu={"1h":{kind:"melee",anim:"slash",dur:.29,hit:.5,reach:2.5,arc:1.3},"2h":{kind:"melee",anim:"heavy",dur:.48,hit:.56,reach:3.3,arc:1.45},fist:{kind:"melee",anim:"punch",dur:.24,hit:.5,reach:1.9,arc:1.05},staff:{kind:"shot",anim:"cast",dur:.36,hit:.5,proj:"bolt",speed:32,range:26},magic:{kind:"shot",anim:"cast",dur:.36,hit:.5,proj:"bolt",speed:32,range:28},bow:{kind:"shot",anim:"bow",dur:.42,hit:.58,proj:"arrow",speed:56,range:34},gun:{kind:"shot",anim:"shoot",dur:.2,hit:.34,proj:"bullet",speed:80,range:30},cannon:{kind:"shot",anim:"shoot",dur:.6,hit:.36,proj:"shell",speed:34,range:30,aoe:2.8},harp:{kind:"shot",anim:"strum",dur:.4,hit:.45,proj:"wave",speed:20,range:20,pierce:1},rings:{kind:"shot",anim:"slash",dur:.32,hit:.5,proj:"paint",speed:30,range:24,aoe:1.6}},Lx={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.5,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.62,rest:1,h:2.05},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},Dx=[[36,252,"wolf",2,2],[-34,318,"wolf",3,3],[92,296,"brute",4,1],[150,-246,"shade",4,2],[58,-292,"wolf",5,3],[-176,-160,"shade",6,2],[-300,110,"brute",7,1],[262,130,"wolf",3,2],[-120,240,"shade",5,2],[330,-120,"brute",8,1]],Ux=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],Nx=new F(0,1,0),bo=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function Xu(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:l,toast:c,cb:u}=i,f=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.skills||[],d=Ix[s.cls&&s.cls.id]||8386303,m=Object.assign({},Wu[n.cat]||Wu.fist),x=s.hero&&s.hero.main&&s.hero.main.type;x==="dague"&&(m.reach=2),x==="guisarme"&&(m.reach=3.7);let g=m.kind==="melee",h={hp:f.hp,max:f.hp,shield:0,shieldT:0,buff:0,buffT:0,dodge:0,dodgeT:0,charge:0,cds:p.map(()=>0),cdMax:p.map(()=>1),busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0},y=Math.min(60,Math.max(0,s.regen||0)),_=[],b=[],I=[],C=[],T={on:!1,wave:0,best:s.arenaBest||0,pending:null},z={shake:0,held:!1,enemies:_,arena:T,pl:h},w=(v,D)=>C.push({t:v,fn:D}),A=(v,D,X,ee)=>Math.hypot(v-X,D-ee),O=(v,D)=>Math.atan2(v-t.x,D-t.z),Y=(v,D)=>A(v,D,mt.x,mt.z)<mt.r,se={arc:new Bn(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new Bn(.84,1,48).rotateX(-Math.PI/2),tube:new fn(1,1,1,24,1,!0).translate(0,.5,0),ball:new qn(1,14,10),arrow:new Rn(.04,1,6).rotateX(Math.PI/2),tracer:new fn(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let v in se)se[v].userData.shared=!0;let N=(v,D=.9,X=!0)=>new Pt({color:v,transparent:!0,opacity:D,side:Ht,blending:X?dn:Ti,depthWrite:!1,fog:!1});function M(v,D,X){return e.add(v),I.push({obj:v,t:0,dur:D,upd:X}),v}function V(v){e.remove(v),v.traverse(D=>{D.material&&D.material.dispose(),D.geometry&&!D.geometry.userData.shared&&D.geometry.dispose()})}function J(v,D,X,ee,fe,ne,W,_e=.24){let L=new bt;L.position.set(v,D,X),L.rotation.y=ee;let H=new Be(se.arc,N(W));H.rotation.z=fe,L.add(H),M(L,_e,j=>{H.material.opacity=.95*(1-j),H.scale.setScalar(ne*(.82+j*.3)),H.rotation.y=(j-.5)*.9})}function B(v,D,X,ee,fe,ne,W=.45,_e=.9){let L=new Be(se.ring,N(ee,_e));L.position.set(v,D+.1,X),M(L,W,H=>{L.scale.setScalar(fe+(ne-fe)*(1-(1-H)*(1-H))),L.material.opacity=_e*(1-H*H)})}function re(v,D,X,ee,fe,ne,W=.5){let _e=new Be(se.tube,N(ee,.55));_e.position.set(v,D,X),M(_e,W,L=>{let H=fe*(1-L*.55);_e.scale.set(H,ne*Math.min(1,L*5+.1),H),_e.material.opacity=.6*(1-L)})}function ge(v,D,X,ee,fe,ne=.25){let W=new Be(se.ball,N(ee,.7));W.position.set(v,D,X),M(W,ne,_e=>{W.scale.setScalar(fe*(.4+_e*.8)),W.material.opacity=.7*(1-_e)})}function me(v,D,X,ee,fe=12,ne=5,W=.5){let _e=new Float32Array(fe*3),L=new Float32Array(fe*3);for(let Re=0;Re<fe;Re++){let Xe=Math.random()*6.2832,qe=Math.random()*1.3-.2,lt=ne*(.4+Math.random()*.8);L[Re*3]=Math.cos(Xe)*Math.cos(qe)*lt,L[Re*3+1]=Math.sin(qe)*lt+1.5,L[Re*3+2]=Math.sin(Xe)*Math.cos(qe)*lt,_e[Re*3]=v,_e[Re*3+1]=D,_e[Re*3+2]=X}let H=new Tt;H.setAttribute("position",new Yt(_e,3));let j=new Wa(H,new wr({color:ee,size:l?.2:.28,transparent:!0,opacity:1,blending:dn,depthWrite:!1,fog:!1}));j.frustumCulled=!1;let Ee=0;M(j,W,Re=>{let Xe=(Re-Ee)*W;Ee=Re;for(let qe=0;qe<fe*3;qe+=3)_e[qe]+=L[qe]*Xe,_e[qe+1]+=L[qe+1]*Xe,_e[qe+2]+=L[qe+2]*Xe,L[qe+1]-=9*Xe;H.attributes.position.needsUpdate=!0,j.material.opacity=1-Re})}let Pe=new F;function te(v,D,X,ee,fe){if(Pe.set(v,D,X).project(a),Pe.z>1||Math.abs(Pe.x)>1.1)return;let ne=document.createElement("span");ne.className="ew-num "+(fe||""),ne.textContent=ee,ne.style.left=(Pe.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",ne.style.top=(-Pe.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(ne),setTimeout(()=>ne.remove(),850)}let xe=new Be(se.ball,N(8378623,.16));xe.scale.setScalar(1.25),xe.visible=!1,e.add(xe);let Te=new Be(se.ring,N(d,.7));Te.visible=!1,e.add(Te);function Je(v){let D=v.barCv.getContext("2d");D.clearRect(0,0,64,8),D.fillStyle="rgba(0,0,0,.75)",D.fillRect(0,0,64,8),D.fillStyle=v.type==="dummy"?"#ffd479":v.boss?"#ff4d6d":"#ff8a5a",D.fillRect(1,1,62*Math.max(0,Math.min(1,v.hp/v.max)),6),v.barTex.needsUpdate=!0}function ke(v,D,X,ee=1,fe={}){let ne=Lx[v],W=Math.pow(1.2,ee-1),_e={type:v,T:ne,x:D,z:X,y:r(D,X),yaw:fe.yaw??Math.random()*6.28,hp:Math.round(ne.hp*W),atk:ne.atk*Math.pow(1.16,ee-1),def:4*Math.pow(1.15,ee-1),spd:ne.spd,range:ne.range,rad:ne.rad,state:fe.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!ne.boss,home:[D,X],wild:fe.wild||null,arena:!!fe.arena,lvl:ee,lunge:0,n:0,wobT:0,wT:0};_e.max=_e.hp;let L=new bt;if(_e.obj=L,v==="dummy"){let H=new pn({color:6965802,roughness:.9}),j=new pn({color:13481066,roughness:1}),Ee=new bt;_e.wob=Ee,L.add(new Be(new fn(.07,.1,1,8).translate(0,.5,0),H)),Ee.position.y=.95,Ee.add(new Be(new fn(.27,.2,.78,10).translate(0,.42,0),j),new Be(new qn(.19,10,8).translate(0,.98,0),j),new Be(new An(1.15,.09,.09).translate(0,.62,0),H));let Re=new Be(new Qn(.12,16).translate(0,.46,.262),new Pt({color:12597547}));Ee.add(Re),L.add(Ee),L.traverse(Xe=>{Xe.isMesh&&(Xe.castShadow=!0)})}else if(v==="shade"||v==="champion"){let H=v==="champion";_e.av=ls({look:{gender:"m",height:H?1.5:1+Math.random()*.08,build:H?1.2:1,shoulders:H?1.14:1,hair:H?"brosse":"court"},outfit:{cut:H?"plate":"coat",c:["#1a1626","#0e0c16","#3a2a5a"]},armor:H?{casque:5,plastron:5,jambieres:5}:{},main:{type:H?"espadon":Math.random()<.5?"epee":"guisarme",r:H?5:3},fx:{shadow:H?"#2a1234":"#17152c",eyes:H?"#ff4d6d":"#c8b6ff",lod:!0}}),_e.av.setArmed(!0),L.add(_e.av.group)}else{let H=Nu[v]();_e.beast=H,L.add(H.group)}return _e.mats=[],L.traverse(H=>{H.isMesh&&H.material&&H.material.emissive&&!_e.mats.includes(H.material)&&_e.mats.push(H.material)}),_e.mats.forEach(H=>{H.userData.e0=H.emissive.getHex(),H.userData.i0=H.emissiveIntensity}),_e.barCv=document.createElement("canvas"),_e.barCv.width=64,_e.barCv.height=8,_e.barTex=new zn(_e.barCv),_e.bar=new ks(new ns({map:_e.barTex,transparent:!0,depthWrite:!1,fog:!1})),_e.bar.scale.set(_e.boss?2.6:1.3,_e.boss?.22:.14,1),_e.bar.position.y=ne.h+.3,_e.bar.visible=v!=="dummy",L.add(_e.bar),Je(_e),L.position.set(D,_e.y,X),L.rotation.y=_e.yaw,e.add(L),_.push(_e),!fe.quiet&&v!=="dummy"&&(re(D,_e.y,X,6962431,1.2+_e.rad,6,.7),B(D,_e.y,X,9133302,.3,2.4+_e.rad,.55)),_e}function Ke(v){let D=_.indexOf(v);if(D>=0&&_.splice(D,1),e.remove(v.obj),v.barTex.dispose(),pi(v.obj),v.wild){let X=v.wild;X.es=X.es.filter(ee=>ee!==v),!X.es.length&&v.state==="dead"&&(X.t=45)}}function je(v){v.state!=="dead"&&(v.state="dead",v.t=0,v.hp=0,Je(v),me(v.x,v.y+v.T.h*.5,v.z,9133302,v.boss?40:18,6,.7),B(v.x,v.y,v.z,12167423,.4,v.boss?7:3,.6),v.boss&&(z.shake=Math.max(z.shake,.5),c(v.T.name+" terrass\xE9")))}let $e=v=>{h.charge=Math.min(100,h.charge+v)},De=v=>{v<=0||h.down>0||(h.hp=Math.min(h.max,h.hp+v),te(t.x,t.y+2.1,t.z,"+"+v,"heal"))};function k(v,D,X={}){if(v.state==="dead")return 0;let ee=f.atk*(1+(h.buffT>0?h.buff/100:0))*D*(.9+Math.random()*.2),fe=!!X.crit||Math.random()<f.crit;if(fe&&(ee*=f.critDmg),X.pierce||(ee*=100/(100+v.def)),ee=Math.max(1,Math.round(ee)),v.type==="dummy"?v.wobT=.5:v.hp-=ee,v.flash=.09,Je(v),te(v.x,v.y+v.T.h*.85,v.z,(fe?"\u2726 ":"")+ee,fe?"crit":""),me(v.x,v.y+v.T.h*.55,v.z,X.color||d,fe?12:6,4,.35),fe&&$e(6),X.steal&&De(Math.round(ee*X.steal/100)),v.type!=="dummy"){if(X.dot&&v.dots.push({v:Math.max(1,Math.round(f.atk*X.dot/100)),n:3,t:1}),X.stun&&v.hp>0&&Math.random()<Math.min(1,X.stun+.25)&&(v.stun=v.boss?1:2.2,v.state="stun",te(v.x,v.y+v.T.h+.3,v.z,"\xC9tourdi","info")),!v.boss){let ne=Math.atan2(v.x-t.x,v.z-t.z),W=X.kb??.35;v.x+=Math.sin(ne)*W,v.z+=Math.cos(ne)*W}v.state==="idle"&&(v.state="chase"),v.hp<=0&&je(v)}return ee}function Ie(v,D=1){if(h.down>0||h.inv>0)return;if(Math.random()<Math.min(.75,f.dodge+(h.dodgeT>0?h.dodge/100:0))){te(t.x,t.y+2.1,t.z,"Esquive","info");return}let X=Math.max(1,Math.round(v.atk*D*(.9+Math.random()*.2)*100/(100+f.def)));if(h.shield>0){let ee=Math.min(h.shield,X);if(h.shield-=ee,X-=ee,X<=0){te(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}h.hp-=X,h.lastHit=0,$e(4),te(t.x,t.y+2.1,t.z,"-"+X,"hurt"),z.shake=Math.max(z.shake,.22),n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),w(.2,()=>o.classList.remove("ew-hit")),h.hp<=0&&(h.hp=0,h.down=2.8,t.down=!0,h.queue=!1,c("Vaincu",T.on?"Vague "+T.wave+" atteinte":"Les ombres se dispersent"))}function de(){if(h.hp=h.max,h.shield=0,t.down=!1,h.inv=2,T.on)Ye(),i.teleport(mt.x+17,mt.z);else{for(let v of _)v.wild&&(v.state="idle",v.hp=v.max,Je(v));i.teleport(-6,34),c("Rue du Four","Vous reprenez connaissance devant la Maison")}}function be(v,D){let X=v.obj;if(v.flash>0){v.flash-=D;let j=v.flash>0;for(let Ee of v.mats)j?(Ee.emissive.setHex(16777215),Ee.emissiveIntensity=.9):(Ee.emissive.setHex(Ee.userData.e0),Ee.emissiveIntensity=Ee.userData.i0)}if(v.type==="dummy"){v.wobT>0&&(v.wobT-=D,v.wob.rotation.x=Math.sin(v.wobT*34)*.5*v.wobT);return}if(v.state==="dead"){v.t+=D;let j=v.t/.55;X.scale.setScalar(Math.max(.01,1-j)),X.position.y=v.y-j*.4,j>=1&&Ke(v);return}for(let j of v.dots)if(j.t-=D,j.t<=0&&j.n>0&&(j.t=1,j.n--,v.hp-=j.v,te(v.x,v.y+v.T.h,v.z,j.v,"dot"),Je(v),v.hp<=0)){je(v);return}v.dots.length&&(v.dots=v.dots.filter(j=>j.n>0));let ee=t.x-v.x,fe=t.z-v.z,ne=Math.hypot(ee,fe),W=h.down<=0&&!t.inside,_e=0,L=null;if(v.state==="stun")v.stun-=D,v.stun<=0&&(v.state="chase");else if(v.state==="idle")if(W&&ne<15)v.state="chase";else{if(v.wT-=D,!v.wander||v.wT<=0){let Re=Math.random()*6.28,Xe=Math.random()*7;v.wander=[v.home[0]+Math.sin(Re)*Xe,v.home[1]+Math.cos(Re)*Xe],v.wT=3+Math.random()*5}let j=v.wander[0]-v.x,Ee=v.wander[1]-v.z;Math.hypot(j,Ee)>.7&&(L=Math.atan2(j,Ee),_e=v.spd*.3),v.hp<v.max&&(v.hp=Math.min(v.max,v.hp+v.max*.2*D),Je(v))}else v.state==="chase"?!W||v.wild&&A(v.x,v.z,v.home[0],v.home[1])>40?v.wild&&(v.state="idle",v.wander=v.home.slice(),v.wT=6):(L=Math.atan2(ee,fe),ne>v.range*.82?_e=v.spd:(v.state="wind",v.t=0,v.av&&v.av.play(v.av.cat==="2h"?"heavy":"slash",v.T.wind/.52,v.n++),B(v.x,v.y,v.z,16724048,.3,v.range+.5,v.T.wind,.85))):v.state==="wind"?(v.t+=D,v.t<v.T.wind*.6&&(L=Math.atan2(ee,fe)),v.t>=v.T.wind&&(v.state="rest",v.t=0,v.lunge=.25,J(v.x,v.y+v.T.h*.5,v.z,v.yaw,.3,v.range*.95,16728160,.2),W&&ne<v.range+.7&&Math.abs(bo(Math.atan2(ee,fe),v.yaw))<1.25&&Ie(v))):v.state==="rest"&&(v.t+=D,v.t>=v.T.rest&&(v.state="chase"));if(L!=null&&(v.yaw+=bo(L,v.yaw)*Math.min(1,D*8)),_e>0){let j=v.x+Math.sin(v.yaw)*_e*D,Ee=v.z+Math.cos(v.yaw)*_e*D;for(let Re of _)if(Re!==v&&Re.state!=="dead"){let Xe=A(j,Ee,Re.x,Re.z),qe=v.rad+Re.rad;Xe<qe&&Xe>.001&&(j=Re.x+(j-Re.x)/Xe*qe,Ee=Re.z+(Ee-Re.z)/Xe*qe)}if(v.arena){let Re=A(j,Ee,mt.x,mt.z),Xe=mt.r-1-v.rad;Re>Xe&&(j=mt.x+(j-mt.x)/Re*Xe,Ee=mt.z+(Ee-mt.z)/Re*Xe)}v.x=j,v.z=Ee}v.y=Math.max(r(v.x,v.z),.2),v.lunge>0&&(v.lunge-=D);let H=v.lunge>0?Math.sin((1-v.lunge/.25)*Math.PI)*.7:0;X.position.set(v.x+Math.sin(v.yaw)*H,v.y,v.z+Math.cos(v.yaw)*H),X.rotation.y=v.yaw,v.av?v.av.update(D,{speed:_e/4.6}):(v.beast.update(D,_e/6),v.beast.group.rotation.x=v.state==="wind"?-.22*Math.min(1,v.t/v.T.wind):v.state==="stun"?.12:0)}function le(v,D=3.2){let X=null,ee=1e9;for(let fe of _){if(fe.state==="dead")continue;let ne=A(t.x,t.z,fe.x,fe.z);if(ne>v+fe.rad)continue;let W=Math.abs(bo(O(fe.x,fe.z),t.yaw));if(W>D)continue;let _e=ne+W*3+(fe.type==="dummy"?5:0);_e<ee&&(ee=_e,X=fe)}return X}function Fe(v){let D=le(v);return D&&(t.yaw=O(D.x,D.z)),D}function Ae(v,D,X,ee={}){let fe=0;for(let ne of _.slice()){if(ne.state==="dead")continue;let W=A(t.x,t.z,ne.x,ne.z);W>D+ne.rad||X<3.1&&W>.9&&Math.abs(bo(O(ne.x,ne.z),t.yaw))>X||(k(ne,v,ee),fe++)}return fe&&($e(ee.gain??7),z.shake=Math.max(z.shake,ee.shake||.07)),fe}function P(v,D,X,ee,fe,ne={},W){ge(v,D+.4,X,ne.color||d,ee*.7),B(v,D,X,ne.color||d,.3,ee,.4),me(v,D+.5,X,ne.color||d,14,6,.5);let _e=0;for(let L of _.slice())L!==W&&L.state!=="dead"&&A(v,X,L.x,L.z)<ee+L.rad&&(k(L,fe,ne),_e++);return _e}function E(v,D,X={}){let ee=X.target&&X.target.state!=="dead"?X.target:le(X.range||28,1.2),fe=n.hand(new F,X.off);v==="wave"&&fe.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let ne=ee?new F(ee.x-fe.x,ee.y+ee.T.h*.55-fe.y,ee.z-fe.z).normalize():new F(Math.sin(t.yaw),0,Math.cos(t.yaw));X.spread&&ne.applyAxisAngle(Nx,X.spread);let W=X.color||d,_e=X.size||1,L;if(v==="arrow")L=new Be(se.arrow,N(W,1)),L.scale.set(_e,_e,1.1);else if(v==="bullet")L=new Be(se.tracer,N(W,1));else if(v==="wave")L=new Be(se.arc,N(W,.85)),L.scale.setScalar(1.2);else{L=new Be(se.ball,N(W,v==="paint"?.95:.9,v!=="paint"));let j=(v==="shell"?.3:v==="paint"?.2:.24)*_e;if(L.scale.setScalar(j),v!=="paint"){let Ee=new Be(se.ball,N(16777215,.9));Ee.scale.setScalar(.5),L.add(Ee)}}let H=X.speed||26;L.position.copy(fe),e.add(L),v!=="wave"&&ge(fe.x,fe.y,fe.z,W,.35,.12),b.push({m:L,kind:v,v:ne.multiplyScalar(H),life:(X.range||28)/H+.1,mult:D,o:X,hit:new Set,target:ee,homing:v==="bolt"||v==="paint",age:0})}function K(v,D){v.age+=D,v.life-=D;let X=v.m.position;if(v.homing&&v.target&&v.target.state!=="dead"){let ne=v.target,W=v.v.length();Pe.set(ne.x-X.x,ne.y+ne.T.h*.55-X.y,ne.z-X.z).normalize().multiplyScalar(W),v.v.lerp(Pe,Math.min(1,D*7)).setLength(W)}X.addScaledVector(v.v,D),v.kind==="wave"?(v.m.rotation.y=Math.atan2(v.v.x,v.v.z),v.m.scale.setScalar(1.2+v.age*3.2),v.m.material.opacity=.85*Math.min(1,v.life*3)):(v.kind==="arrow"||v.kind==="bullet")&&v.m.lookAt(X.x+v.v.x,X.y+v.v.y,X.z+v.v.z);let ee=v.kind==="wave"?v.m.scale.x*.8:.35*(v.o.size||1),fe=v.life<=0;for(let ne of _)if(!(ne.state==="dead"||v.hit.has(ne))&&!(A(X.x,X.z,ne.x,ne.z)>ne.rad+ee||X.y<ne.y-.5||X.y>ne.y+ne.T.h+.8)&&(v.hit.add(ne),k(ne,v.mult,v.o),v.hit.size===1&&$e(v.o.gain??0),v.o.aoe&&P(X.x,ne.y,X.z,v.o.aoe,v.mult*.6,v.o,ne),!v.o.pierce)){fe=!0;break}return!fe&&v.kind!=="wave"&&X.y<r(X.x,X.z)+.05?(fe=!0,v.o.aoe?P(X.x,r(X.x,X.z),X.z,v.o.aoe,v.mult*.6,v.o):me(X.x,X.y+.1,X.z,v.o.color||d,5,2.5,.3)):fe&&v.life<=0&&v.o.aoe&&v.kind==="shell"&&P(X.x,X.y,X.z,v.o.aoe,v.mult*.6,v.o),fe}let oe=()=>t.talking||t.paused||h.down>0?!1:(t.mount&&i.dismount(),!0);function pe(v){if(v&&(h.idle=0),h.armed===v)return;h.armed=v,n.setArmed(v),o.classList.toggle("ew-armed",v);let D=o.querySelector('[data-c="draw"]');D&&D.classList.toggle("on",v)}let he=()=>t.x,Ue=()=>t.y,Se=()=>t.z;function We(){if(!oe())return!1;if(pe(!0),h.busy>0)return h.queue=!0,!1;let v=Fe(g?m.reach+4.5:m.range);if(g&&v){let fe=A(t.x,t.z,v.x,v.z)-v.rad;fe>m.reach*.7&&i.dash(fe-m.reach*.55,.09)}let D=h.combo++,X=m.dur,ee=p[0]||{};return n.play(m.anim,X*1.3,D),h.busy=X,w(X*m.hit,()=>{if(!(h.down>0))if(g){let fe=n.dual?(D>>1)%3:D%3,ne=m.anim==="heavy"?D%2?.12:1.45:m.anim==="punch"?1.57:fe===0?-.95:fe===1?.2:1.57;J(he(),Ue()+1.15,Se(),t.yaw,ne,m.reach*.95,d),Ae(ee.mult||1,m.reach,m.arc)}else E(m.proj,ee.mult||1,{range:m.range,speed:m.speed,aoe:m.aoe,pierce:m.pierce,off:n.dual&&D%2===1,gain:7,color:m.proj==="paint"?Vu[D%4]:d})}),!0}function et(){if(t.talking||t.paused||h.down>0||h.dashCd>0)return;t.mount&&i.dismount();let v=i.inputDir();v!=null&&(t.yaw=v),h.dashCd=.36,h.inv=Math.max(h.inv,.36),h.busy=0,h.queue=!1,h.lock=0,B(he(),Ue(),Se(),16777215,.3,1.9,.3,.6),ge(he(),Ue()+1,Se(),d,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let rt=v=>{let D=o.querySelector(".ew-skn");D&&(D.textContent=v,D.classList.remove("on"),D.offsetWidth,D.classList.add("on"))};function ce(v){let D=p[v];if(!D)return;if(v===0)return We();if(!oe())return;if(D.locked){rt("Niveau "+D.lvl+" requis \xB7 "+D.name);return}if(D.ult){if(h.charge<100){rt("Jauge d\u2019ultime incompl\xE8te");return}}else if(h.cds[v]>0)return;if(h.busy>.15)return;pe(!0),rt(D.name),D.ult?h.charge=0:(h.cds[v]=h.cdMax[v]=2+(D.cd||1)*2.2,$e(10));let X={crit:D.crit,pierce:D.pierce,stun:D.stun,dot:D.dot,steal:D.steal,color:d},ee=D.hits||1,fe=()=>{D.heal&&De(Math.round(h.max*D.heal/100)),D.shield&&(h.shield=Math.round(h.max*D.shield/100),h.shieldT=10),D.buff&&(h.buff=D.buff,h.buffT=10),D.dodge&&(h.dodge=D.dodge,h.dodgeT=6)};if(D.type!=="atk"){if(D.type==="dodge")n.play("roll",.45),h.inv=.6,h.busy=.4,i.dash(7.5,.32),B(he(),Ue(),Se(),d,.4,2.4,.4),fe();else{let ne=D.type==="heal"?9306032:d;n.play("castUp",.8),h.busy=.6,h.lock=.5,w(.3,()=>{fe(),re(he(),Ue(),Se(),ne,1.3,4.5,.7),B(he(),Ue(),Se(),ne,.4,3.2,.6),me(he(),Ue()+1,Se(),ne,16,3,.7)})}return}if(D.ult===2){let ne=Fe(36);n.play(g?"slam":"castUp",1),h.busy=.95,h.lock=.8,h.inv=1.1,w(.5,()=>{let W=ne&&ne.state!=="dead"?ne:le(36);if(z.shake=.7,!W){B(he(),Ue(),Se(),d,.5,9,.8);return}re(W.x,W.y,W.z,16777215,1.4,18,.9),re(W.x,W.y,W.z,d,2.8,13,1),B(W.x,W.y,W.z,d,.5,10,.9),me(W.x,W.y+1,W.z,d,40,9,.9),W.type!=="dummy"&&W.hp<=W.max*.35?(te(W.x,W.y+W.T.h+.2,W.z,"R\xE9duit \xE0 n\xE9ant","crit"),je(W)):k(W,7,{pierce:1,color:d,kb:1.2})});return}if(D.ult===1){if(g){n.play(ee>1?"spin":"slam",ee>1?1.15:.95,0,Math.max(2,Math.round(ee/2))),h.busy=1,h.inv=1,h.lock=ee>1?0:.65;for(let ne=0;ne<ee;ne++)w(ee>1?.15+ne*.85/ee:.52,()=>{B(he(),Ue(),Se(),d,.6,7.5,.5),ee===1?(re(he(),Ue(),Se(),d,3.2,8,.7),me(he(),Ue()+.5,Se(),d,36,9,.8)):J(he(),Ue()+1.1,Se(),t.yaw+ne*1.3,ne%2?.2:-.2,5.5,d,.3),Ae(D.mult,7.5,3.2,Object.assign({shake:ee===1?.6:.2,kb:.8,gain:0},X)),ne===ee-1&&fe()})}else{let ne=Fe(36),W=ne?ne.x:t.x+Math.sin(t.yaw)*10,_e=ne?ne.z:t.z+Math.cos(t.yaw)*10,L=r(W,_e);n.play("castUp",1.05),h.busy=.95,h.lock=.75,h.inv=.8,B(W,L,_e,d,6.4,6.6,.75,.7);{let H=new Be(se.ball,N(d,.95)),j=new Be(se.ball,N(16777215,.9));j.scale.setScalar(.55),H.add(j),M(H,.72,Ee=>{let Re=Math.min(1,Ee/.97);H.position.set(W-7*(1-Re),L+20*(1-Re)*(1-Re)+.5,_e-4*(1-Re)),H.scale.setScalar(1.3)})}for(let H=0;H<ee;H++)w(.72+H*.14,()=>{z.shake=.6,re(W,L,_e,d,4,12,.8),me(W,L+.5,_e,d,36,10,.9),P(W,L,_e,6.6,D.mult,Object.assign({kb:.8},X)),H===ee-1&&fe()})}return}if(g)if(Fe(m.reach+4),ee>1){let ne=.22+ee*.16;n.play("spin",ne,0,Math.max(1,Math.round(ee/2))),h.busy=ne;for(let W=0;W<ee;W++)w(.1+W*.16,()=>{J(he(),Ue()+1.1,Se(),t.yaw+W*2.1,W%2?.22:-.22,m.reach*1.3,d),Ae(D.mult,m.reach+1,3.2,X),W===ee-1&&fe()})}else D.pierce||D.crit?(n.play(m.anim==="heavy"?"heavy":"slash",.5,m.anim==="heavy"?0:2),h.busy=.45,h.inv=.3,i.dash(3.6,.18),w(.22,()=>{J(he(),Ue()+1.1,Se(),t.yaw,1.57,m.reach*1.9,16777215,.3),J(he(),Ue()+1.1,Se(),t.yaw,1.57,m.reach*1.7,d),Ae(D.mult,m.reach*1.9,.5,Object.assign({shake:.2},X)),fe()})):(n.play("heavy",.72,0),h.busy=.62,w(.38,()=>{let ne=he()+Math.sin(t.yaw)*1.6,W=Se()+Math.cos(t.yaw)*1.6;J(he(),Ue()+1.2,Se(),t.yaw,1.5,m.reach*1.35,d,.3),B(ne,Ue(),W,d,.3,2.8,.4),Ae(D.mult,m.reach+.9,1.5,Object.assign({shake:.28,kb:.9},X)),fe()}));else{let ne=Fe(m.range+4);if(ee>1){h.busy=.2+ee*.14;for(let W=0;W<ee;W++)w(.1+W*.14,()=>{n.play(m.anim,m.anim==="bow"?.14:.2,W),E(m.proj,D.mult,Object.assign({range:m.range+4,speed:m.speed,aoe:m.aoe,off:W%2===1&&n.dual,spread:ne?0:(W-(ee-1)/2)*.09,target:ne},X,m.proj==="paint"?{color:Vu[W%4]}:null)),W===ee-1&&fe()})}else n.play(m.anim,m.dur*1.5,0),h.busy=m.dur*1.15,w(m.dur*m.hit*1.15,()=>{E(m.proj,D.mult,Object.assign({range:m.range+6,speed:m.speed*1.1,aoe:Math.max(m.aoe||0,D.dot||D.stun||D.steal?2.4:0),size:1.9,pierce:D.pierce||m.pierce,target:ne},X)),fe()})}}function xt(v){let D=[];if(v%10===0){D.push("drake");for(let X=0;X<Math.min(4,v/10+1);X++)D.push("wolf")}else if(v%5===0){D.push("champion");for(let X=0;X<Math.min(3,v/5);X++)D.push("shade")}else{let X=Math.min(6,2+Math.floor(v/3));for(let ee=0;ee<X;ee++)D.push(v>=4&&ee===0?"brute":v>=2&&ee%2===1?"shade":"wolf")}return D}function at(){let v=++T.wave,D=xt(v),X=Math.random()*6.28;c("Vague "+v,v%5===0?"Un champion entre dans l\u2019ar\xE8ne":D.length+" ombres"),D.forEach((ee,fe)=>{let ne=X+fe/D.length*6.2832,W=15+fe%2*2.5;ke(ee,mt.x+Math.cos(ne)*W,mt.z+Math.sin(ne)*W,v,{arena:!0})})}let st=()=>5*Math.floor(T.best/5)+1;function tt(){T.on||(T.on=!0,T.wave=st()-1,T.pending=null,pe(!0),h.hp=h.max,at())}function Ye(){T.on=!1,T.pending=null;for(let v of _.slice())v.arena&&Ke(v)}let nt=v=>v.replace(/[«».]/g,"").trim(),ht=o.querySelector(".ew-cmb");if(ht){let v=X=>l?X===0?"Clic":String(X):"",D=`<button type="button" class="ew-atk" data-c="0"><em>${v(0)}</em><span>${p[0]?nt(p[0].name):"Attaque"}</span></button>`;for(let X=1;X<Math.min(6,p.length);X++){let ee=p[X];D+=`<button type="button" class="ew-sk k${X}${ee.ult?" ult":""}${ee.locked?" lock":""}" data-c="${X}" title="${ee.name.replace(/"/g,"")}"><i></i><em>${v(X)}</em><span>${ee.locked?"Niv. "+ee.lvl:nt(ee.name)}</span></button>`}if(ht.insertAdjacentHTML("afterbegin",D),!l){let ee=ne=>ht.querySelector(ne),fe=(ne,W,_e,L)=>{if(!ne)return;let H=_e*Math.PI/180;ne.style.right=47+W*Math.cos(H)-L/2+"px",ne.style.bottom=47+W*Math.sin(H)-L/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((ne,W)=>fe(ee(ne),122,1+W*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((ne,W)=>fe(ee(ne),186,8+W*21,46))}}let ut={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:ht?[...ht.querySelectorAll(".ew-sk")]:[]},ot="";function we(){let v=h.armed||h.hp<h.max||T.on,D=h.cds.map(ee=>Math.ceil(ee)).join(","),X=[v,Math.round(h.hp),Math.round(h.shield),Math.round(h.charge),D,h.buffT>0,h.dodgeT>0,T.on,T.wave,_.length].join("|");if(X!==ot){if(ot=X,ut.hud&&ut.hud.classList.toggle("on",v),ut.hp&&(ut.hp.style.width=h.hp/h.max*100+"%",ut.hpT.textContent=Math.round(h.hp)+" / "+h.max,ut.sh.style.width=Math.min(100,h.shield/h.max*100)+"%"),ut.ult&&(ut.ult.style.width=h.charge+"%",ut.ultB.classList.toggle("full",h.charge>=100)),ut.stt&&(ut.stt.textContent=[y>0&&h.hp<h.max?"R\xE9g\xE9n\xE9ration":"",h.buffT>0?"Attaque +"+h.buff+" %":"",h.shield>0?"Bouclier":"",h.dodgeT>0?"Esquive +"+h.dodge+" %":""].filter(Boolean).join(" \xB7 ")),ut.wave){let ee=_.filter(fe=>fe.arena&&fe.state!=="dead").length;ut.wave.textContent=T.on?"Vague "+T.wave+(ee?" \xB7 "+ee+" ombre"+(ee>1?"s":""):"")+(T.best?" \xB7 record "+T.best:""):"",ut.wave.classList.toggle("on",T.on)}ut.sk.forEach(ee=>{let fe=+ee.dataset.c,ne=p[fe],W=ee.querySelector("i");ne.ult?(ee.classList.toggle("ready",!ne.locked&&h.charge>=100),W.style.height=ne.locked?"0%":100-h.charge+"%"):W.style.height=(h.cds[fe]>0?h.cds[fe]/h.cdMax[fe]*100:0)+"%"})}}for(let[v,D]of Ux)ke("dummy",v,D,1,{quiet:!0,yaw:0});let G=Dx.map(([v,D,X,ee,fe])=>({x:v,z:D,type:X,lvl:ee,n:fe,es:[],t:0})).filter(v=>r(v.x,v.z)>1.6),Ne=0,Le=0;return z.update=function(v){for(let D=C.length-1;D>=0;D--){let X=C[D];X.t-=v,X.t<=0&&(C.splice(D,1),X.fn())}h.busy-=v,h.lock-=v,h.inv-=v,h.lastHit+=v,h.dashCd-=v;for(let D=0;D<h.cds.length;D++)h.cds[D]>0&&(h.cds[D]-=v);if(h.buffT>0&&(h.buffT-=v),h.dodgeT>0&&(h.dodgeT-=v),h.shieldT>0&&(h.shieldT-=v,h.shieldT<=0&&(h.shield=0)),h.down>0)h.down-=v,h.down<=0&&de();else if(h.hp<h.max){let D=0;y>0&&h.lastHit>2&&(D+=h.max*y/1e3*v),!T.on&&h.lastHit>6&&(D+=h.max*.07*v),D&&(h.hp=Math.min(h.max,h.hp+D))}(h.queue||z.held)&&h.busy<=0&&h.down<=0&&(h.queue=!1,We()),h.armed&&!T.on&&(h.idle+=v,h.idle>25&&!_.some(D=>D.type!=="dummy"&&D.state!=="idle"&&D.state!=="dead")&&pe(!1));for(let D of _.slice())D.obj.visible=!t.inside,!t.inside&&(D.arena||A(D.x,D.z,t.x,t.z)<80)&&be(D,v);for(let D=b.length-1;D>=0;D--)K(b[D],v)&&(V(b[D].m),b.splice(D,1));for(let D=I.length-1;D>=0;D--){let X=I[D];X.t+=v;let ee=Math.min(1,X.t/X.dur);X.upd(ee),ee>=1&&(V(X.obj),I.splice(D,1))}if(z.shake=Math.max(0,z.shake-v*2.2),xe.visible=h.shield>0&&!t.inside,xe.visible&&(xe.position.set(t.x,t.y+1,t.z),xe.material.opacity=.14+Math.sin(t.t*5)*.04),Te.visible=h.buffT>0,Te.visible&&(Te.position.set(t.x,t.y+.12,t.z),Te.scale.setScalar(1.1+Math.sin(t.t*6)*.12),Te.rotation.y=t.t*2),T.on)if(!Y(t.x,t.z)&&h.down<=0)c("D\xE9fi abandonn\xE9","Vague "+T.wave),Ye();else if(T.pending==null&&!_.some(D=>D.arena&&D.state!=="dead")){let D=T.wave>T.best;T.best=Math.max(T.best,T.wave),D&&u.onArena&&u.onArena(T.best);let X=u.onWave?u.onWave(T.wave):null;De(Math.round(h.max*.3)),c("Vague "+T.wave+" termin\xE9e",[X?"+"+X.x+" XP \xB7 +"+X.k+" kinahs"+(X.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui)"):"",D?"nouveau record":""].filter(Boolean).join(" \xB7 ")),T.pending=3.2}else T.pending!=null&&(T.pending-=v,T.pending<=0&&(T.pending=null,at()));if((Ne+=v)>.6){Ne=0;for(let D of G){let X=A(D.x,D.z,t.x,t.z);if(D.t>0&&(D.t-=.6),X<85&&!D.es.length&&D.t<=0&&!t.inside)for(let ee=0;ee<D.n;ee++){let fe=ee/D.n*6.28,ne=D.x+Math.sin(fe)*2.5*(D.n>1),W=D.z+Math.cos(fe)*2.5*(D.n>1);D.es.push(ke(D.type,ne,W,D.lvl,{wild:D,quiet:!0}))}else if(X>150&&D.es.length)for(let ee of D.es.slice())ee.state="gone",Ke(ee)}}(Le+=v)>.08&&(Le=0,we())},Object.assign(z,{attack:We,skill:ce,dodge:et,arm:pe,toggleArm:()=>pe(!h.armed),startArena:tt,arenaStart:st,inArena:Y,spawn:ke,moveK:()=>h.down>0||h.lock>0?0:1,dispose(){for(let v of I)V(v.obj);for(let v of b)V(v.m);for(let v of _)v.barTex.dispose();for(let v in se)se[v].dispose()}}),we(),z}var gc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},tr=(i,e)=>Math.exp(-(i*i)/(2*e*e)),Gi=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),Ox=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Lt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=gc(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*tr(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*tr(n,230),t+=35*tr(Math.hypot(i-190,e+175),55)+16*tr(Math.hypot(i-120,e+235),50)+26*tr(Math.hypot(i,e+335),72);for(let s of Ox){let r=1-gc(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*tr(Math.abs(i-Gi(e)),12),t}var $u=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function wo(i,e){let t=1e9;for(let[n,s,r,a]of $u){let o=r-n,l=a-s,c=Math.max(0,Math.min(1,((i-n)*o+(e-s)*l)/(o*o+l*l)));t=Math.min(t,Math.hypot(i-n-o*c,e-s-l*c))}return t}function qu(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-Gi(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let l=gc(44,72,t);o=[Dt(.4,.86,l*l),Dt(.37,.89,l*l),Dt(.36,.94,l*l)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&wo(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var Yu=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],Zu={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},zx={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},Fx={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function Hr(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gr=class{constructor(){this.b={},this.boxes=[],this.m4=new wt,this.q=new Tn,this.e=new Li}add(e,t,n,s,r,a=0,o=1,l=1,c=1,u=0,f=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,f,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new F(n,s,r),this.q,new F(o,l,c)));for(let d of Object.keys(p.attributes))d!=="position"&&d!=="normal"&&p.deleteAttribute(d);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),l=(n*a+s*o)/2,c=(n*o+s*a)/2;this.boxes.push([e-l,e+l,t-c,t+c])}build(e,t){let n=new bt;for(let s in this.b){let r=Ur(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new Be(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},Ve=new An(1,1,1),Br=new Rn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),Ft=new fn(.5,.5,1,12),ir=new Rn(.5,1,12),_i=new qn(.5,12,8),sn=new Di(1,1),Bx=new qn(.5,16,8,0,Math.PI*2,0,Math.PI/2),nr=new fn(.5,.5,1,56),kr=(()=>{let i=new ei;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new Hs(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function kn(i,e,t,n,s,r,a,o,l,c,u={}){let f=u.y??Lt(t,n);i.add(l,Ve,t,f+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(c,Ve,t,f+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(c,Br,t,f+a+p/2,n,o,s+1,p,r+1):i.add(c,kr,t,f+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",Ve,t+Math.cos(o)*s*.25,f+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let d=Math.cos(o),m=Math.sin(o),x=Math.max(1,Math.floor(a/3.1));for(let[_,b,I,C]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let T=Math.max(1,Math.floor(I/2.8));for(let z=0;z<x;z++)for(let w=0;w<T;w++){if(z===0&&b===1&&w===Math.floor(T/2))continue;let A=(w-(T-1)/2)*(I/T),O=_?_*(C+.04):A,Y=b?b*(C+.04):A,se=t+O*d+Y*m,N=n-O*m+Y*d,M=o+Math.atan2(_,b);i.add(e()<(u.lit??.55)?"winLit":"winDark",sn,se,f+1.9+z*3.1,N,M,.9,1.25,1)}}let g=r/2+.05,h=t+g*m,y=n+g*d;return i.add("wood",sn,h,f+1.05,y,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*m,n+(r/2+1.6)*d]}}function Fr(i,e,t){let n=Lt(e,t);i.add("iron",Ft,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",Ve,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",_i,e,n+3.55,t,0,.42,.5,.42)}function kx(i,e){let t=new Gr,n=Hr(20261112),s=[],r=[],a=(d,m,x,g)=>x.some(h=>Math.hypot(d-h[0],m-h[1])<(h[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],l=["wallA","wallB","wallC","wallW"],c=["roofA","roofB"];for(let d=-150;d<=150;d+=24)for(let m=-150;m<=160;m+=22){let x=d+(n()-.5)*6,g=m+(n()-.5)*5;if(Math.hypot(x,g)>158||a(x,g,o,0)||wo(x,g)<8.5||Math.abs(x-Gi(g))<40||n()<.12)continue;let y=g>-10&&x>-70,_=9+n()*7,b=8+n()*6,I=(y?5.5:7)+n()*(y?4.5:8);kn(t,n,x,g,_,b,I,n()<.5?0:Math.PI/2,y?n()<.5?"wallB":"wallC":l[Math.floor(n()*4)],c[Math.floor(n()*2)],{lit:y?.4:.6,hip:n()<.25})}for(let[d,m,x,g]of $u.slice(0,6)){let h=Math.floor(Math.hypot(x-d,g-m)/22);for(let y=1;y<h;y++){let _=y/h,b=d+(x-d)*_,I=m+(g-m)*_,C=-(g-m),T=x-d,z=Math.hypot(C,T);Fr(t,b+C/z*4.6,I+T/z*4.6)}}{let d=Lt(-18,14);kn(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",Ve,-12,d+3.2,22.5,.35,5.5,1.4,.05),t.add("white",Ve,-6.5,d+3,20.6,.35,2.4,1.7,.05),t.add("iron",Ft,-15.5,d+2,24,0,.1,4,.1),t.add("iron",Ft,-4.5,d+2,19.6,0,.1,4,.1),t.add("wood",Ve,-37,d+4.1,33,1.2,9,.35,7);for(let[m,x]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),h=Math.sin(1.2);t.add("wood",Ft,-37+m*g+x*h,d+2,33-m*h+x*g,0,.35,4,.35)}t.add("stoneD",Ve,-39.5,d+1,35,1.2,2.6,2,2.2),t.add("ember",Ve,-39.5,d+2.05,35,1.2,1.9,.2,1.5),t.add("iron",Ve,-35.5,d+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",Ve,-35.5,d+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,d+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let d=Lt(0,-95);t.add("stone",Ve,0,d+10,-98,0,22,21,46),t.add("roofB",kr,0,d+20.4,-98,0,24,10,47),t.add("stone",Ve,0,d+22,-70.5,0,11,45,10),t.add("roofB",Br,0,d+53,-70.5,0,12,18,11),t.add("gold",Ve,0,d+64,-70.5,0,.3,4,.3),t.add("gold",Ve,0,d+64.6,-70.5,0,1.8,.3,.3),t.add("rose",Ft,0,d+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",sn,0,d+2.6,-65.42,0,3.4,5.2,1);for(let m=0;m<4;m++)t.add("stoneL",Ve,0,d-.3+m*-0+.2*(3-m),-63.6+m*.9,0,12+m*1.4,.4,1);for(let m=0;m<6;m++)for(let x of[-1,1])t.add("rose",sn,x*11.06,d+9,-116+m*7.2,x*Math.PI/2,2.2,8,1),t.add("stoneD",Ve,x*12,d+6.5,-112.4+m*7.2,0,1.6,13,1.6);for(let m of[30,36])for(let[x,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",sn,x*5.56,d+m,-70.5+(g?5.06:0),Math.atan2(x,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,d+5,-61,16767392,1.6,22])}{let d=Lt(-118,-22);kn(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),kn(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let m=0;m<26;m++)t.add("iron",Ft,-96,d+1.4,-52+m*2.2,0,.12,2.8,.12);t.add("iron",Ve,-96,d+2.5,-24.5,0,.14,.14,56),t.add("iron",Ve,-96,d+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let d=Lt(-62,112);t.add("wallC",Ve,-62,d+5,122,.9,30,11,12),t.add("iron",Ft,-62,d+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",sn,-57.2,d+6,118.2,.9+Math.PI,7,6,1);for(let m=0;m<12;m++)t.add("wood",Ve,-74+m*2.6,d+.12,102+m*2.05,.9,.5,.2,5);t.add("iron",Ve,-60,d+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",Ve,-58.6,d+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let d=Lt(70,30);for(let m of[-1,1])t.add("stoneD",Ve,70+m*3.6*Math.cos(-1.2),d+3,30-m*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",Ve,70,d+7.2,30,-1.2,9.4,2,3.2),t.add("void",sn,70+.4*Math.sin(-1.2),d+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let m of[-1,1]){let x=70+m*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-m*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",Ft,x,d+.3,g,0,.16,.6,.16),t.add("lamp",_i,x,d+.72,g,0,.2,.3,.2)}r.push([67,d+1.6,28,16762977,1.1,10])}kn(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),kn(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let y=0;y<9;y++)if(t.add("wood",Ve,188+y*2.2,1.1,24,0,2,.25,4.6),y%2===0)for(let _ of[-1,1])t.add("wood",Ft,188+y*2.2,1.1-1.6,24+_*2.1,0,.3,3.6,.3);let m=(y,_,b,I)=>{t.add(I,_i,y,.55,_,b,2,1.3,5.2),t.add("void",Ve,y,1,_,b,1.5,.3,4.2),t.add("wood",Ve,y,.95,_,b,1.7,.1,.5)};m(206,29,.25,"wood"),m(203,6,-.2,"wallC"),m(204,48,.1,"wallB"),kn(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),kn(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),Fr(t,186,21);let x=-56,g=Gi(x),h=3.6;t.add("stone",Ve,g,h,x,0,40,.8,6.5);for(let y of[-1,1])t.add("stone",Ve,g,h+.9,x+y*3,0,40,1,.5);for(let y of[-9,9])t.add("stoneD",Ve,g+y,h-3,x,0,2.4,6,6);Fr(t,g-19,x+2.6),Fr(t,g+19,x-2.6)}{let d=Lt(190,-175);t.add("stoneL",Ft,190,d+4,-175,0,13,8,13),t.add("iron",Bx,190,d+8,-175,0,13,13,13),t.add("void",Ve,190,d+11.5,-171,0,1.6,5,6,-.6),t.add("wood",sn,190,d+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let d=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[x,g,h]of d)kn(t,n,x,g,7.5,6.5,4.6,h,"wallA","snow",{lit:.7});let m=Lt(-250,-250);kn(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",Ve,-253.2,m+6,-227.6,.2,3,12,3),t.add("snow",Br,-253.2,m+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",Ft,-252,m+.5,-252,0,2.2,1,2.2),t.add("void",Ft,-252,m+1.02,-252,0,1.7,.02,1.7);for(let x of[-1,1])t.add("wood",Ft,-252+x*1.1,m+1.6,-252,0,.16,2.4,.16);t.add("wood",kr,-252,m+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",Ft,-246,m+.2,-244,0,1.6,.4,1.6),t.add("ember",ir,-246,m+.8,-244,0,.9,1.2,.9),r.push([-246,m+1.6,-244,16747066,2,18])}{let d=Lt(3,190);t.add("wood",Ft,3,d+1.4,190,0,.18,2.8,.18),t.add("wood",Ve,3.5,d+2.4,190,.2,2.2,.5,.08)}{let d=mt.x,m=mt.z,x=Lt(d,m),g=44;t.add("stoneD",nr,d,x+.02,m,0,72,.1,72),t.add("sand",nr,d,x+.06,m,0,45.6,.1,45.6),t.add("stoneD",nr,d,x+.09,m,0,5.4,.1,5.4),t.add("neon",nr,d,x+.1,m,0,4.6,.1,4.6),t.add("stoneD",nr,d,x+.11,m,0,4.2,.1,4.2),t.add("ember",nr,d,x+.12,m,0,1.1,.1,1.1);for(let h=0;h<g;h++){let y=(h+.5)/g*6.2832,_=Math.cos(y),b=Math.sin(y),I=-y+Math.PI/2,C=y>Math.PI?y-6.2832:y;if(Math.abs(C)<mt.gate+.05)continue;for(let w=0;w<4;w++){let A=24+w*2.1,O=6.2832*(A+1.1)/g+.06;t.add(w%2?"stone":"stoneL",Ve,d+_*A,x+(.9+w)/2,m+b*A,I,O,.9+w,2.2)}let T=32.8,z=6.2832*(T+.8)/g+.06;t.add("stone",Ve,d+_*T,x+4.3,m+b*T,I,z,8.6,1.4),h%2&&t.add("stoneL",Ve,d+_*T,x+9.1,m+b*T,I,z*.6,1,1.4),h%4===1&&(t.add("iron",Ft,d+_*T,x+11.4,m+b*T,0,.14,5,.14),t.add(h%8===1?"banner":"flag",Ve,d+_*T-b*.95,x+13.1,m+b*T+_*.95,I,1.8,1.1,.06))}for(let h of[-1,1]){let y=h*(mt.gate+.11),_=d+Math.cos(y)*30.5,b=m+Math.sin(y)*30.5;t.add("stoneL",Ft,_,x+6,b,0,4.6,12,4.6),t.add("roofA",ir,_,x+14.3,b,0,5.6,4.6,5.6),t.add("stoneD",Ft,d+37.5,x+.6,m+h*5,0,1.2,1.2,1.2),t.add("ember",ir,d+37.5,x+1.6,m+h*5,0,.9,1.2,.9),r.push([d+37.5,x+2.6,m+h*5,16747066,1.8,18])}t.add("stone",Ve,d+30.5,x+9.8,m,0,4.4,3,11),t.add("banner",Ve,d+32.8,x+8.8,m,0,.08,3.4,3),t.add("gold",Ve,d+32.86,x+8.8,m,0,.08,1.4,.4),t.add("gold",Ve,d+32.86,x+9.1,m,0,.08,.4,1.3)}let u=[];for(let d of i.houses||[]){let m=Zu[d.id];if(!m)continue;let[x,g,h]=m,y=Lt(x,g),_=Math.cos(h),b=Math.sin(h),I,C=(T,z)=>[x+T*_+z*b,g-T*b+z*_];if(d.id==="h0"){for(let[O,Y,se,N]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[M,V]=C(O,Y);t.add("rock",_i,M,y+N*.2,V,n()*3,se,N,se)}let[T,z]=C(0,1.2);t.add("void",_i,T,y+1.2,z,h,4.4,4.6,2.4);let[w,A]=C(0,3.5);t.add("ember",ir,w,y+.4,A,0,.7,.9,.7),r.push([w,y+1.3,A,16747066,1.6,12]),I=C(0,4.2),t.solid(...C(0,-5),16,9)}else if(d.id==="h1")I=[72,27];else if(d.id==="h2"){t.add("stoneL",Ve,...(T=>[T[0],y+4,T[1]])(C(-5.5,0)),h,1,9,16),t.add("stoneL",Ve,...(T=>[T[0],y+2.6,T[1]])(C(5.5,-2)),h,1,6.2,11),t.add("stoneL",Ve,...(T=>[T[0],y+5,T[1]])(C(0,-8)),h,12,11,1),t.add("stoneL",kr,...(T=>[T[0],y+10.4,T[1]])(C(0,-8)),h,12,4,1),t.add("roofB",Ve,...(T=>[T[0],y+8.4,T[1]])(C(-2.6,-3)),h,6.4,.3,9.5,0,-.5),t.add("rose",sn,...(T=>[T[0],y+6.5,T[1]])(C(0,-7.44)),h,2,4.6,1),t.add("stoneD",Ve,...(T=>[T[0],y+.6,T[1]])(C(0,-5.6)),h,3,1.2,1.6);for(let[T,z]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(z,_i,...(w=>[w[0],y+.25,w[1]])(C(T,-3.4)),0,.7,.5,.7);I=C(0,9),t.solid(...C(-5.5,0),1.2,16,h),t.solid(...C(0,-8),12,1.2,h)}else if(d.id==="h3"){let T=kn(t,n,x,g,22,14,11,h,"wallA","roofA",{lit:.85,hip:!0});for(let z of[-1,1]){let[w,A]=C(z*13.5,1);kn(t,n,w,A,6,9,13,h,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let z of[-1,1])Fr(t,...C(z*3,10));I=T.door}else if(d.id==="h4"){t.add("stone",Ve,x,y+6,g,h,26,13,20);for(let[w,A]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[O,Y]=C(w,A);t.add("stoneL",Ft,O,y+9,Y,0,7,19,7),t.add("roofB",ir,O,y+22,Y,0,8.2,8,8.2),t.add("flag",Ve,O+.9,y+27.2,Y,h,1.8,1,.06),t.add("iron",Ft,O,y+27,Y,0,.12,3,.12)}for(let w=-5;w<=5;w++){let[A,O]=C(w*2.3,10.2);w%2&&t.add("stone",Ve,A,y+13.4,O,h,1.2,1,.8)}let[T,z]=C(0,10.06);t.add("wood",sn,T,y+2.4,z,h,4,5,1);for(let w of[-7,7])for(let A of[5,9]){let[O,Y]=C(w,10.06);t.add("winLit",sn,O,y+A,Y,h,1.2,1.8,1)}I=C(0,12.5),t.solid(x,g,30,24,h)}else if(d.id==="h5"){t.add("obs",Ve,x,y+9,g,h,20,18,16),t.add("obs",Br,x,y+24,g,h,16,12,13);for(let[w,A,O]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[Y,se]=C(w,A);t.add("obs",Ve,Y,y+O/2,se,h,5,O,5),t.add("obs",Br,Y,y+O+4,se,h,5.6,8,5.6),t.add("umbra",sn,...(N=>[N[0],y+O-3,N[1]])(C(w,A+2.54)),h,1,3,1)}let[T,z]=C(0,8.06);t.add("umbra",sn,T,y+3.4,z,h,3.4,6.8,1),t.add("neon",sn,T,y+3.4,z+.02*_,h,.3,6.8,1),I=C(0,10.6),t.solid(x,g,30,18,h),r.push([I[0],y+4,I[1],9133302,2.4,22])}else if(d.id==="h6"){t.add("light",Ve,x,y+7,g,h,26,14,16),t.add("gold",kr,x,y+14,g,h,28,8,17.4);for(let w=-4;w<=4;w++)for(let A of[3,7,11]){if(w===0&&A===3)continue;let[O,Y]=C(w*2.8,8.06);t.add("sun",sn,O,y+A,Y,h,1.3,2.2,1)}let[T,z]=C(0,8.08);t.add("sun",sn,T,y+3,z,h,3,6,1);for(let w=0;w<6;w++){let[A,O]=C(0,9+w*1.1);t.add("light",Ve,A,y-.2-w*.02,O,h,8+w,.5,1.1)}I=C(0,11.5),t.solid(x,g,26,16,h),r.push([I[0],y+6,I[1],16773312,3.2,40])}u.push({...d,x:I[0],z:I[1]})}let f=[],p=e.trees;for(let d=0;d<p*6&&f.length<p;d++){let m=(n()-.5)*860,x=(n()-.5)*860,g=Lt(m,x);if(Math.hypot(m,x)<176&&n()>.04||g<2.2||g>70||Math.abs(m-Gi(x))<16||wo(m,x)<5||Math.hypot(m-318,x-300)<104||a(m,x,Object.values(Zu).map(_=>[_[0],_[1],24]),0)||a(m,x,[[-250,-250,44],[190,-175,16],[mt.x,mt.z,42]],0))continue;let y=x>150?1:.45;n()>y||f.push({x:m,y:g,z:x,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:f}}var Ju=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function Hx(i,e,t,n){let[s,r,a,o]=Ju[e.r]||Ju[0],l=5+e.r*.5,c=Hr(77+e.r);i.add(r,Ve,0,n-.25,0,0,a,.5,o),i.add(s,Ve,0,n+l/2,-o/2,0,a,l,.5),i.add(s,Ve,-a/2,n+l/2,0,0,.5,l,o),i.add(s,Ve,a/2,n+l/2,0,0,.5,l,o),i.add("rug",Ve,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",Ve,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",Ve,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",ir,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",Ve,0,n+3.8,-o/2+.6,0,1.6,l-3.2,.8),i.add("wood",Ve,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[d,m]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",Ft,d*Math.min(2.6,a*.15),n+.47,m,0,.16,.95,.16);for(let d=-1;d<=1;d++)for(let m of[-1,1])i.add("wood",Ft,d*1.3,n+.3,1+m*1.4,0,.55,.6,.55);i.add("white",Ft,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",_i,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let d=0;d<u;d++){let m=d%2?1:-1,x=Math.floor(d/2),g=m*(a/2-1.5),h=-o/2+2.6+x*2.6;if(h>o/2-1.5)break;i.add("wood",Ve,g,n+.35,h,0,2.2,.5,1.1),i.add("white",Ve,g,n+.66,h,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][d%4],Ve,g-m*.3,n+.75,h,0,1.5,.1,1.02)}for(let d of[-1,1])for(let m=-1;m<=1;m+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",sn,d*(a/2-.27),n+2.6,m*o*.22,-d*Math.PI/2,1.3,1.9,1);let f=t.instruments||[],p=a/2-2;if(f.includes("i4")&&(i.add("wood",Ve,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",Ve,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),f.includes("i5")){for(let d=0;d<7;d++)i.add("gold",Ft,-p+d*.34,n+1.6+Math.abs(3-d)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-d)*.6,.26);i.add("wood",Ve,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return f.includes("i1")&&(i.add("wood",_i,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",Ve,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),f.includes("i3")&&(i.add("wallC",_i,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",Ve,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(f.includes("i6")||f.includes("i2")||f.includes("i0"))&&(i.add("gold",Ve,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",Ve,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",Ve,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",sn,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:l,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(d=>Math.abs(d[0])<a/2-2&&Math.abs(d[1])<o/2-1.5)}}var Gx=`
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
.ew-rot{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);display:none;width:max-content;max-width:86%;text-align:center;font:600 13px/1.4 'Barlow',sans-serif;padding:10px 14px;background:rgba(8,8,20,.85);border:1px solid rgba(0,240,255,.5);color:#dff6ff;cursor:pointer}
.ew-rot.on{display:block}
.ew-pc .ew-only-mob{display:none}
@media (max-height:520px){.ew-prompt{bottom:96px}.ew-map{width:92px;height:92px}.ew-zone{top:27%}.ew-zone b{font-size:clamp(18px,6vh,30px)}.ew-dlg p{font-size:15px;min-height:2.4em;margin:5px 0 7px}.ew-joy{height:74%}.ew-top{padding-left:calc(env(safe-area-inset-left,0px) + 12px);padding-right:calc(env(safe-area-inset-right,0px) + 12px)}.ew-menu div{gap:6px}.ew-menu .ew-btn{padding:7px 12px}}
@media (max-height:380px){.ew-mob .ew-cmb{transform:scale(.86)}.ew-map{width:78px;height:78px}}
`;function Ku(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let L=document.createElement("style");L.id="ew-css",L.textContent=Gx,document.head.appendChild(L)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
    <div class="ew-zone"><b></b><i></i></div>
    <div class="ew-joy"><div class="ew-stick" style="display:none"><i></i></div></div>
    <div class="ew-top"><div class="ew-tl"><button type="button" class="ew-btn" data-w="menu">\u2630 Menu</button><div class="ew-hud"><div class="ew-bar ew-hp"><i></i><b></b><span></span></div><div class="ew-bar ew-ult"><i></i></div><div class="ew-st"></div></div></div><canvas class="ew-map" width="248" height="248"></canvas></div>
    <div class="ew-wave"></div><div class="ew-skn"></div><div class="ew-rot" data-w="fs">\u21BB Tournez le t\xE9l\xE9phone pour jouer \xE0 l\u2019horizontale<br><small>ou touchez ici : plein \xE9cran horizontal</small></div>
    <div class="ew-keys"><kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd> se d\xE9placer \xB7 <kbd>Maj</kbd> courir \xB7 <kbd>Espace</kbd> sauter \xB7 <kbd>E</kbd> agir \xB7 <kbd>M</kbd> monture \xB7 souris : cam\xE9ra \xB7 <kbd>\xC9chap</kbd> menu<br><kbd>Clic</kbd> attaquer \xB7 <kbd>Clic droit</kbd> ou <kbd>V</kbd> esquiver \xB7 <kbd>1</kbd>\u2013<kbd>5</kbd> techniques \xB7 <kbd>R</kbd> d\xE9gainer / rengainer</div>
    <div class="ew-prompt"><button type="button" data-w="act"></button></div>
    <div class="ew-cmb"><button type="button" class="ew-rnd ew-dg" data-c="dodge"><em>V</em><span>Esquive</span></button><button type="button" class="ew-rnd" data-c="draw"><em>R</em><span>Arme</span></button><button type="button" class="ew-rnd" data-w="mount"><em>M</em><span>Monture</span></button><button type="button" class="ew-rnd m" data-w="run">Sprint</button><button type="button" class="ew-rnd m ew-jp" data-w="jump">Saut</button></div>
    <div class="ew-dlg"><span class="ew-bond"></span><h4></h4><p></p><div class="row"><button type="button" class="ew-btn" data-w="dnext">Continuer</button><button type="button" class="ew-btn" data-w="dclose">Au revoir</button></div></div>
    <div class="ew-menu"><div><h3>Vesp\xE9rane</h3><button type="button" class="ew-btn" data-w="resume">Reprendre</button><button type="button" class="ew-btn" data-w="home">Retour \xE0 la Maison (rue du Four)</button><button type="button" class="ew-btn" data-w="arena">Aller \xE0 l\u2019ar\xE8ne des Chasseurs</button><button type="button" class="ew-btn" data-w="mv"></button><button type="button" class="ew-btn" data-w="stn"></button><button type="button" class="ew-btn ew-only-mob" data-w="fs">Plein \xE9cran horizontal</button><button type="button" class="ew-btn" data-w="mode">${n?"Passer en mode mobile":"Passer en mode PC"}</button><button type="button" class="ew-btn" data-w="quit">Quitter le monde</button><p class="ew-help">ZQSD se d\xE9placer \xB7 Maj courir \xB7 Espace sauter \xB7 E agir \xB7 M monture \xB7 C changer de monture<br>Clic attaquer \xB7 Clic droit ou V esquiver \xB7 1 \xE0 5 techniques \xB7 R d\xE9gainer / rengainer \xB7 Espace deux fois : double saut \xB7 molette zoom</p></div></div>
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=L=>r.querySelector(L),o=a(".ew-c"),l=new ts({canvas:o,antialias:n,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),l.outputColorSpace=Nt,l.toneMapping=Dr,l.toneMappingExposure=1.05,s.shadows&&(l.shadowMap.enabled=!0,l.shadowMap.type=Lr);let c=new Ni,u=new jt(n?55:62,1,.3,2400),f=new Qe(12085832);c.fog=new ka(f,s.fog[0],s.fog[1]);{let L=new Ui(l);c.environment=L.fromScene(new Zs,.04).texture,L.dispose()}let p=new F(-.62,.36,.5).normalize(),d=new Ws(16769228,2761796,.75);c.add(d);let m=new Oi(16768184,2.7);c.add(m,m.target),s.shadows&&(m.castShadow=!0,m.shadow.mapSize.set(2048,2048),Object.assign(m.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),m.shadow.bias=-6e-4,m.shadow.normalBias=.06);let x=new Be(new qn(2e3,32,16),new Zt({side:qt,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));c.add(x);let g=new bt;c.add(g);{let L=document.createElement("canvas");L.width=256,L.height=128;let H=L.getContext("2d"),j=Hr(5);for(let Re=0;Re<26;Re++){let Xe=40+j()*176,qe=46+j()*40,lt=18+j()*34,He=H.createRadialGradient(Xe,qe,0,Xe,qe,lt);He.addColorStop(0,"rgba(255,255,255,.5)"),He.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=He,H.fillRect(0,0,256,128)}let Ee=new zn(L);for(let Re=0;Re<16;Re++){let Xe=new Be(new Di(1,1),new Pt({map:Ee,transparent:!0,depthWrite:!1,fog:!1,color:new Qe().setHSL(.04+j()*.05,.75,.62+j()*.2),opacity:.75})),qe=j()*6.28,lt=500+j()*900;Xe.position.set(Math.cos(qe)*lt,190+j()*180,Math.sin(qe)*lt),Xe.scale.set(420+j()*380,120+j()*90,1),Xe.rotation.x=Math.PI/2,Xe.rotation.z=j()*6.28,g.add(Xe)}}{let L=new Di(900,900,s.seg,s.seg);L.rotateX(-Math.PI/2);let H=L.attributes.position,j=new Float32Array(H.count*3),Ee=[0,0,0];for(let R=0;R<H.count;R++){let q=H.getX(R),$=H.getZ(R),S=Lt(q,$);H.setY(R,S),qu(q,$,S,Ee),j[R*3]=Math.pow(Ee[0],2.2),j[R*3+1]=Math.pow(Ee[1],2.2),j[R*3+2]=Math.pow(Ee[2],2.2)}L.setAttribute("color",new Yt(j,3));let Re=L.toNonIndexed();Re.computeVertexNormals(),L.dispose();let Xe=document.createElement("canvas");Xe.width=Xe.height=256;let qe=Xe.getContext("2d"),lt=Hr(31);qe.fillStyle="#e4e4e4",qe.fillRect(0,0,256,256);for(let R=0;R<2600;R++){let q=190+Math.floor(lt()*65);qe.fillStyle=`rgba(${q},${q},${q},.55)`;let $=1+lt()*5;qe.fillRect(lt()*256,lt()*256,$,$)}qe.strokeStyle="rgba(70,60,55,.3)",qe.lineWidth=1.6;for(let R=0;R<8;R++)for(let q=0;q<8;q++){let $=R%2*16;qe.strokeRect(q*32+$+(lt()-.5)*3,R*32+(lt()-.5)*3,32,32)}let He=new zn(Xe);He.wrapS=He.wrapT=_r,He.repeat.set(140,140),He.anisotropy=4,He.colorSpace=Nt;let Ze=new Be(Re,new pn({vertexColors:!0,map:He,roughness:.96,metalness:0,envMapIntensity:.25}));Ze.receiveShadow=s.shadows,c.add(Ze);let It=new Be(new Bn(440,2400,48,1),new pn({color:4865826,roughness:1,envMapIntensity:.1}));It.rotation.x=-Math.PI/2,It.position.y=2.6,c.add(It)}let h=new Be(new Di(2400,2400),new pn({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));h.rotation.x=-Math.PI/2,h.position.y=.35,c.add(h);let y=new Be(new Qn(96,48),new pn({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));y.rotation.x=-Math.PI/2,y.position.set(318,1.32,300),c.add(y);let _=(L,H=.9,j=0,Ee)=>new pn(Object.assign({color:L,roughness:H,metalness:j,envMapIntensity:.35},Ee||{})),b=L=>new Pt({color:L,toneMapped:(s.bloom,!1)}),I={wallA:_(12098426),wallB:_(9405303),wallC:_(10246725),wallW:_(14867920),stone:_(9144208),stoneL:_(11644338),stoneD:_(4867664),roofA:_(5125424),roofB:_(3554376),wood:_(5913892),iron:_(3816774,.5,.7),snow:_(15660024,.7),white:_(16052712),rock:_(5591642,1),obs:_(1512479,.35,.6),gold:_(15254632,.3,.9),light:_(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:_(4029142),rug:_(8007466),flowerA:_(14243450),flowerB:_(15254090),flowerC:_(9071318),sand:_(13481610,1),banner:_(10234410),winLit:b(16762222),winDark:_(1712176,.2,.6),lamp:b(16767392),ember:b(16742954),rose:b(13208278),umbra:b(10976255),neon:b(61695),sun:b(16774084),void:_(197382,1)},C=kx(e,s),T=C.B.build(I,s.shadows);c.add(T);for(let[L,H,j,Ee,Re,Xe]of C.lights.slice(0,n?12:6)){let qe=new Cn(Ee,Re*14,Xe,1.6);qe.position.set(L,H,j),c.add(qe)}let z=new bt;{let L=Lt(-70,100);z.position.set(-70,L+5.2,100);let H=new Be(new yn(4.2,.28,10,48),b(8386303)),j=new Be(new Qn(4.1,40),new Pt({color:1723647,transparent:!0,opacity:.55,side:Ht,blending:dn,depthWrite:!1})),Ee=new Be(new Bn(1.2,3.6,40),new Pt({color:9133302,transparent:!0,opacity:.5,side:Ht,blending:dn,depthWrite:!1}));z.add(H,j,Ee),z.scale.set(.8,1.25,1),z.rotation.y=.9;let Re=new Cn(3842303,60,46,1.5);z.add(Re),c.add(z),z.userData={m2:j,m3:Ee}}{let L=new fn(.22,.34,1,6).translate(0,.5,0),H=new Rn(1,1,7).translate(0,.5,0),j=new Ka(1,1),Ee=C.trees.filter(He=>He.pine),Re=C.trees.filter(He=>!He.pine),Xe=new Gt,qe=new Qe,lt=(He,Ze,It,R)=>{let q=new Va(He,Ze,Math.max(1,It.length));return It.forEach(($,S)=>{R($,Xe),Xe.updateMatrix(),q.setMatrixAt(S,Xe.matrix),$._c&&q.setColorAt(S,$._c)}),q.count=It.length,q.castShadow=s.shadows,q.receiveShadow=!1,c.add(q),q};if(lt(L,_(3811868,1),C.trees,(He,Ze)=>{Ze.position.set(He.x,He.y-.3,He.z),Ze.scale.set(He.s,He.s*(He.pine?2.2:3.2),He.s),Ze.rotation.set(0,0,0)}),Ee.forEach(He=>{He._c=qe.clone().setHSL(.3+He.c*.06,.42,.11+He.c*.06)}),Re.forEach(He=>{He._c=qe.clone().setHSL(.02+He.c*.11,.72,.36+He.c*.14)}),lt(H,_(16777215,1),Ee,(He,Ze)=>{Ze.position.set(He.x,He.y+He.s*1.3,He.z),Ze.scale.set(He.s*2.1,He.s*6.2,He.s*2.1),Ze.rotation.set(0,He.c*6,0)}),lt(j,new pn({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),Re,(He,Ze)=>{Ze.position.set(He.x,He.y+He.s*4.1,He.z),Ze.scale.set(He.s*2.5,He.s*2.1,He.s*2.5),Ze.rotation.set(He.c,He.c*6,0)}),s.grass){let He=Hr(9),Ze=[];for(let It=0;It<s.grass*5&&Ze.length<s.grass;It++){let R=(He()-.5)*760,q=(He()-.5)*760,$=Lt(R,q);Math.hypot(R,q)<184||Math.hypot(R-mt.x,q-mt.z)<39||$<2.3||$>44||Math.abs(R-Gi(q))<15||wo(R,q)<4||Ze.push({x:R,y:$,z:q,s:.5+He()*.9,c:He(),_c:qe.clone().setHSL(.08+He()*.1,.5,.3+He()*.12)})}lt(new Rn(.5,1,4).translate(0,.5,0),_(16777215,1),Ze,(It,R)=>{R.position.set(It.x,It.y-.05,It.z),R.scale.set(It.s*.9,It.s*1.1,It.s*.9),R.rotation.set(0,It.c*6,0)}).castShadow=!1}}let w={},A=new Gr;C.houses.forEach((L,H)=>{let Ee=H*80,Re=new Gr,Xe=Hx(Re,L,e,-400);for(let qe in Re.b)for(let lt of Re.b[qe])lt.translate(Ee,0,0),(A.b[qe]=A.b[qe]||[]).push(lt);w[L.id]={...Xe,ox:Ee,oy:-400,hs:L}});let O=A.build(I,!1);O.visible=!1,c.add(O);let Y=new Cn(16756848,0,40,1.4),se=new Cn(16773341,0,60,1.2);c.add(Y,se);let N=ls(e.hero);c.add(N.group);let M={x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};M.y=Lt(M.x,M.z);for(let L of Yu)if(Math.hypot(M.x-L[0],M.z-L[1])<L[2]){M.zone=L[3];break}let V=(e.mounts||[]).filter(L=>ti[L.id]),J=Math.max(0,V.findIndex(L=>L.id===e.mount)),B=null;function re(L){if(M.mount&&(c.remove(M.mount.group),pi(M.mount.group),M.mount=null,M.mountId=null),L&&V.length&&!M.inside){let H=V[J].id;M.mount=ti[H].make(),M.mountId=H,co(M.mount.group),c.add(M.mount.group),B&&B.arm(!1),M.mount.group.traverse(j=>{j.isMesh&&(j.castShadow=s.shadows)}),be("En selle",V[J].name)}a('[data-w="mount"]').classList.toggle("on",!!M.mount)}V.length||(a('[data-w="mount"]').disabled=!0);let ge=[],me=L=>{let H=document.createElement("canvas");H.width=256,H.height=64;let j=H.getContext("2d");j.font="600 26px Oxanium, Barlow, sans-serif",j.textAlign="center",j.shadowColor="#000",j.shadowBlur=8,j.fillStyle="#eaffff",j.fillText(L,128,40);let Ee=new ks(new ns({map:new zn(H),transparent:!0,depthWrite:!1,fog:!1}));return Ee.scale.set(2.6,.65,1),Ee};function Pe(L,H,j,Ee,Re,Xe){let qe=Fx[L.id];if(!qe)return;let lt=ls(Object.assign({},qe,{fx:Object.assign({lod:!0},qe.fx)}));lt.group.position.set(H,j,Ee),lt.group.rotation.y=Re;let He=me(L.name.split(" ").slice(0,2).join(" "));He.position.y=lt.height/lt.group.scale.y+.32,lt.group.add(He),lt.group.traverse(Ze=>{Ze.isMesh&&(Ze.castShadow=s.shadows&&!Xe)}),c.add(lt.group),ge.push({...L,av:lt,x:H,y:j,z:Ee,ry:Re,inside:Xe||null,lb:He,li:0})}for(let L of e.npcs||[]){let H=zx[L.id];H&&Pe(L,H[0],Lt(H[0],H[1]),H[1],H[2])}for(let L in w){let H=w[L];(e.npcs||[]).filter(j=>j.recruited).slice(0,H.spots.length).forEach((j,Ee)=>{let[Re,Xe]=H.spots[Ee];Pe(j,H.ox+Re,H.oy,Xe,Math.atan2(-Re,1-Xe),L)})}O.visible=!1;function te(L,H){Le(!0),M.x=L,M.z=H,M.y=Lt(L,H),ne=!0}B=Xu({scene:c,st:M,player:N,data:e,H:Lt,cam:u,root:r,pc:n,toast:(L,H)=>be(L,H),cb:t,teleport:te,dismount:()=>re(!1),dash:(L,H)=>{M.dashV=L/H,M.dashT=H},inputDir:()=>M.inDir});let xe={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},Te={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Je=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+xe[N.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+Te[N.stance]},ke=(L,H)=>{let j=Object.keys(L);return j[(j.indexOf(H)+1)%j.length]};Je();let Ke=null;if(s.bloom)try{Ke=new yo(l),Ke.addPass(new vo(c,u)),Ke.addPass(new er(new ve(256,256),.42,.7,.82)),Ke.addPass(new Mo)}catch{Ke=null}function je(){let L=r.clientWidth,H=r.clientHeight;if(L>H){let j=r.querySelector(".ew-rot");j&&j.classList.remove("on")}l.setSize(L,H,!1),u.aspect=L/H,u.fov=n?55:L>H?50:62,u.updateProjectionMatrix(),Ke&&Ke.setSize(L,H)}je(),window.addEventListener("resize",je);let $e=a(".ew-map"),De=$e.getContext("2d"),k=document.createElement("canvas");k.width=k.height=248;{let L=k.getContext("2d"),H=L.createImageData(248,248),j=[0,0,0];for(let Ee=0;Ee<248;Ee++)for(let Re=0;Re<248;Re++){let Xe=(Re/247-.5)*900,qe=(Ee/247-.5)*900,lt=Lt(Xe,qe);qu(Xe,qe,lt,j);let He=(Ee*248+Re)*4,Ze=lt<.4;H.data[He]=Ze?70:j[0]*235,H.data[He+1]=Ze?90:j[1]*235,H.data[He+2]=Ze?120:j[2]*235,H.data[He+3]=255}L.putImageData(H,0,0),L.strokeStyle="#c9b48a",L.lineWidth=2,L.beginPath(),L.arc((mt.x/900+.5)*248,(mt.z/900+.5)*248,8,0,7),L.stroke(),L.fillStyle="#2a2420";for(let Ee of C.B.boxes){let Re=(Ee[0]/900+.5)*248,Xe=(Ee[2]/900+.5)*248;L.fillRect(Re,Xe,Math.max(1.5,(Ee[1]-Ee[0])/900*248),Math.max(1.5,(Ee[3]-Ee[2])/900*248))}}function Ie(){let H=M.inside?0:M.x,j=M.inside?0:M.z,Ee=(H/900+.5)*248,Re=(j/900+.5)*248;if(De.setTransform(1,0,0,1,0,0),De.fillStyle="#0b0b12",De.fillRect(0,0,248,248),M.inside){De.fillStyle="#7ff6ff",De.font="600 20px Oxanium, sans-serif",De.textAlign="center",De.fillText("Int\xE9rieur",124,130);return}De.translate(124,124),De.scale(2.2,2.2),De.translate(-Ee,-Re),De.drawImage(k,0,0);let Xe=(qe,lt,He,Ze)=>{De.fillStyle=He,De.beginPath(),De.arc((qe/900+.5)*248,(lt/900+.5)*248,Ze,0,7),De.fill()};for(let qe of C.houses)Xe(qe.x,qe.z,"#ffd479",2.6);for(let qe of ge)qe.inside||Xe(qe.x,qe.z,"#7ff6ff",1.7);Xe(-70,100,"#3aa0ff",2.4),Xe(mt.x,mt.z,"#ff4d6d",2.2);for(let qe of B.enemies)qe.type!=="dummy"&&qe.state!=="dead"&&Xe(qe.x,qe.z,"#ff4d6d",1.5);De.setTransform(1,0,0,1,124,124),De.rotate(-M.yaw+Math.PI),De.fillStyle="#fff",De.strokeStyle="#000",De.lineWidth=2,De.beginPath(),De.moveTo(0,-9),De.lineTo(6.5,7),De.lineTo(0,3.5),De.lineTo(-6.5,7),De.closePath(),De.stroke(),De.fill()}let de=0;function be(L,H=""){let j=a(".ew-zone");j.querySelector("b").textContent=L,j.querySelector("i").textContent=H,j.querySelector("i").style.display=H?"":"none",j.classList.add("on"),clearTimeout(de),de=setTimeout(()=>j.classList.remove("on"),3200)}let le={},Fe={mx:0,mz:0,jump:!1},Ae=null,P=(L,H)=>{if(M.paused&&H&&L.code==="Escape"){ce(!1);return}le[L.code]=H;let j=(L.key||"").toLowerCase();H&&(L.code==="Escape"?M.talking?we():ce(!0):M.talking?(j==="e"||j==="f"||L.code==="Enter"||L.code==="Space")&&(L.preventDefault(),ot()):j==="e"||j==="f"||L.code==="Enter"?Ye():j==="m"?M.mount&&V.length>1&&le.ShiftLeft?(J=(J+1)%V.length,re(!0)):re(!M.mount):j==="c"&&V.length>1?(J=(J+1)%V.length,M.mount?re(!0):be(V[J].name,"Monture choisie")):L.code==="Space"?(L.preventDefault(),Fe.jump=!0):j==="r"?B.toggleArm():j==="x"?B.attack():j==="v"?B.dodge():/^(Digit|Numpad)[1-5]$/.test(L.code)&&B.skill(+L.code.slice(-1)))},E=L=>P(L,!0),K=L=>P(L,!1);window.addEventListener("keydown",E),window.addEventListener("keyup",K);let oe=null,pe={id:null,ox:0,oy:0},he=a(".ew-stick"),Ue=L=>{if(!L.target.closest("button,.ew-dlg,.ew-menu,.ew-map")){if(!n&&L.clientX<r.clientWidth*.46&&L.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&pe.id===null){pe.id=L.pointerId,pe.ox=L.clientX,pe.oy=L.clientY,he.style.display="block",he.style.left=L.clientX+"px",he.style.top=L.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",he.firstChild.style.transform="";return}oe||(oe={id:L.pointerId,x:L.clientX,y:L.clientY,x0:L.clientX,y0:L.clientY,t:performance.now(),b:L.button})}},Se=L=>{if(L.pointerId===pe.id){let H=L.clientX-pe.ox,j=L.clientY-pe.oy,Ee=Math.hypot(H,j),Re=52;Ee>Re&&(H*=Re/Ee,j*=Re/Ee),he.firstChild.style.transform=`translate(${H}px,${j}px)`,Fe.mx=H/Re,Fe.mz=j/Re}else oe&&L.pointerId===oe.id&&(M.camYaw-=(L.clientX-oe.x)*(n?.0042:.0062),M.camPitch=Math.max(-.25,Math.min(1.2,M.camPitch+(L.clientY-oe.y)*(n?.003:.0045))),oe.x=L.clientX,oe.y=L.clientY)},We=L=>{L.pointerId===pe.id&&(pe.id=null,Fe.mx=Fe.mz=0,he.style.display="none"),oe&&L.pointerId===oe.id&&(n&&L.type==="pointerup"&&performance.now()-oe.t<300&&Math.hypot(L.clientX-oe.x0,L.clientY-oe.y0)<6&&(oe.b===0?B.attack():oe.b===2&&B.dodge()),oe=null),L.pointerId===et&&(et=null,B.held=!1)},et=null;r.addEventListener("pointerdown",L=>{let H=L.target.closest("[data-c]");if(!H||M.paused)return;L.preventDefault();let j=H.dataset.c;j==="draw"?B.toggleArm():j==="dodge"?B.dodge():j==="0"?(B.attack(),B.held=!0,et=L.pointerId):B.skill(+j)}),r.addEventListener("pointerdown",Ue),r.addEventListener("pointermove",Se),r.addEventListener("pointerup",We),r.addEventListener("pointercancel",We);let rt=L=>{M.camDist=Math.max(2.6,Math.min(22,M.camDist*(L.deltaY>0?1.1:.9))),L.preventDefault()};r.addEventListener("wheel",rt,{passive:!1}),r.addEventListener("contextmenu",L=>L.preventDefault()),r.addEventListener("click",L=>{let H=L.target.closest("[data-w]");if(!H)return;let j=H.dataset.w;if(j==="act")Ye();else if(j==="mount")re(!M.mount);else if(j==="run")M.run=!M.run,H.classList.toggle("on",M.run);else if(j==="jump")Fe.jump=!0;else if(j==="dnext")ot();else if(j==="dclose")we();else if(j==="menu")ce(!0);else if(j==="resume")ce(!1);else if(j==="home")te(-6,34),ce(!1);else if(j==="arena")re(!1),te(mt.x+40,mt.z),M.yaw=-Math.PI/2,M.camYaw=Math.PI/2,ce(!1);else if(j==="mv"||j==="stn")N.setStyle(j==="mv"?{move:ke(xe,N.move)}:{stance:ke(Te,N.stance)}),Je(),t.onStyle&&t.onStyle({move:N.move,stance:N.stance});else if(j==="fs")st(),a(".ew-rot").classList.remove("on"),ce(!1);else if(j==="quit")tt();else if(j==="mode"){let Ee=[M.x,M.z];_e.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",M.inside?null:Ee)}});function ce(L){M.paused=L,a(".ew-menu").classList.toggle("on",L)}let xt=!1,at=()=>{try{let L=screen.orientation;return L&&L.lock?L.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function st(){let L=document.documentElement,H=L.requestFullscreen||L.webkitRequestFullscreen;if(!H)return at();let j=null;try{j=H.call(L,{navigationUI:"hide"}),xt=!0}catch{j=null}return(j&&j.then?j:Promise.resolve()).then(at,at)}n||at().then(L=>{if(!L&&r.clientHeight>r.clientWidth&&!ee){let H=a(".ew-rot");H.classList.add("on"),setTimeout(()=>H.classList.remove("on"),9e3)}});function tt(){let L=M.inside?null:[Math.round(M.x),Math.round(M.z)];_e.dispose(),t.onExit&&t.onExit(L)}function Ye(){!Ae||M.talking||(Ae.kind==="npc"?ut(Ae.npc):Ae.kind==="house"?Ne(Ae.id):Ae.kind==="exit"?Le():Ae.kind==="arena"?B.startArena():Ae.kind==="rift"&&t.onRift&&(_e.dispose(),t.onRift([Math.round(M.x),Math.round(M.z)])))}let nt=0;function ht(L){let H=L.lines&&L.lines.length?L.lines:["\u2026"],j=H[L.li%H.length],Ee=a(".ew-dlg p");Ee.textContent="",clearInterval(nt);let Re=0;nt=setInterval(()=>{Re+=2,Ee.textContent=j.slice(0,Re),Re>=j.length&&clearInterval(nt)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(L.name,Object.assign(document.createElement("small"),{textContent:L.role||""})),a(".ew-bond").textContent=L.bond?"Lien "+"\u2665".repeat(Math.min(10,L.bond)):"",a('[data-w="dnext"]').style.display=H.length>1?"":"none"}function ut(L){M.talking=L,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),ht(L);let H=Math.atan2(M.x-L.x,M.z-L.z);L.av.group.rotation.y=H,M.yaw=H+Math.PI,t.onTalk&&t.onTalk(L.id)}function ot(){let L=M.talking;if(!L)return;let H=a(".ew-dlg p"),j=L.lines||[],Ee=j[L.li%Math.max(1,j.length)]||"";if(H.textContent.length<Ee.length){clearInterval(nt),H.textContent=Ee;return}if(L.li++,L.li%Math.max(1,j.length)===0){we();return}ht(L)}function we(){clearInterval(nt),M.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let G=null;function Ne(L){let H=w[L];H&&(re(!1),G=[M.x,M.z,M.yaw],M.inside=L,M.x=H.ox+H.door[0],M.z=H.door[1]-.6,M.y=H.oy,M.yaw=Math.PI,M.camYaw=0,M.camDist=Math.min(M.camDist,6),O.visible=!0,T.visible=!1,c.fog.near=60,c.fog.far=200,Y.position.set(H.ox,H.oy+1.6,-H.D/2+2.2),Y.intensity=90,se.position.set(H.ox,H.oy+H.h-.6,1.5),se.intensity=H.hs.r>=6?160:H.hs.r===5?50:70,se.color.set(H.hs.r>=6?16774084:H.hs.r===5?10976255:16773341),m.intensity=0,d.intensity=.35,be(H.hs.name,H.hs.cap>=99?"Places illimit\xE9es":H.hs.cap+" places"))}function Le(L){M.inside&&(M.inside=null,O.visible=!1,T.visible=!0,c.fog.near=s.fog[0],c.fog.far=s.fog[1],Y.intensity=se.intensity=0,m.intensity=2.9,d.intensity=.7,G&&!L&&(M.x=G[0],M.z=G[1],M.yaw=G[2]+Math.PI),M.y=Lt(M.x,M.z))}let v=new F,D=new F,X=performance.now(),ee=!1,fe=0,ne=!0;function W(L){if(ee)return;requestAnimationFrame(W);let H=Math.min(.05,(L-X)/1e3);if(X=L,M.paused)return;M.t+=H;let j=Fe.mx,Ee=Fe.mz;(le.KeyW||le.ArrowUp)&&(Ee-=1),(le.KeyS||le.ArrowDown)&&(Ee+=1),(le.KeyA||le.ArrowLeft)&&(j-=1),(le.KeyD||le.ArrowRight)&&(j+=1);let Re=Math.min(1,Math.hypot(j,Ee));(M.talking||!B.moveK())&&(Re=0);let Xe=M.run||le.ShiftLeft||le.ShiftRight,qe=N.move,lt=qe==="levitation"&&!M.mount,He=qe==="levitation"?[11,16]:qe==="ninja"?[10.5,15.5]:[9.5,14],Ze=(M.mount?9.5*ti[M.mountId].speed:Xe?He[1]:He[0])*(M.inside?.45:1),It=Re*Ze;if(M.speed+=(It-M.speed)*Math.min(1,H*(M.mount?3:lt?3.4:14)),M.inDir=Re>.05?Math.atan2(j,Ee)+M.camYaw:null,Re>.05&&M.dashT<=0){let Oe=M.inDir-M.yaw;for(;Oe>Math.PI;)Oe-=6.2832;for(;Oe<-Math.PI;)Oe+=6.2832;M.yaw+=Oe*Math.min(1,H*(M.mount?5:lt?6.5:18))}M.dashT>0&&(M.dashT-=H,M.speed=M.dashV);let R=Math.sin(M.yaw)*M.speed*H,q=Math.cos(M.yaw)*M.speed*H,$=M.x+R,S=M.z+q;if(M.inside){let Me=w[M.inside];$=Math.max(Me.ox-Me.W/2+.8,Math.min(Me.ox+Me.W/2-.8,$)),S=Math.max(-Me.D/2+1.9,Math.min(Me.D/2-.7,S))}else{$=Math.max(-438,Math.min(438,$)),S=Math.max(-438,Math.min(438,S));let Me=M.mount?1.1:.55;for(let Oe of C.B.boxes)if($>Oe[0]-Me&&$<Oe[1]+Me&&S>Oe[2]-Me&&S<Oe[3]+Me){let pt=$-(Oe[0]-Me),ct=Oe[1]+Me-$,it=S-(Oe[2]-Me),ln=Oe[3]+Me-S,Mt=Math.min(pt,ct,it,ln);Mt===pt?$=Oe[0]-Me:Mt===ct?$=Oe[1]+Me:Mt===it?S=Oe[2]-Me:S=Oe[3]+Me}{let Oe=$-mt.x,pt=S-mt.z,ct=Math.hypot(Oe,pt);if(ct>mt.r-.5&&ct<mt.wall+.6&&Math.abs(Math.atan2(pt,Oe))>mt.gate){let it=(ct<(mt.r+mt.wall)/2?mt.r-.5:mt.wall+.6)/ct;$=mt.x+Oe*it,S=mt.z+pt*it}}for(let Oe of ge)if(!Oe.inside){let pt=Math.hypot($-Oe.x,S-Oe.z);pt<.8&&pt>.001&&($=Oe.x+($-Oe.x)/pt*.8,S=Oe.z+(S-Oe.z)/pt*.8)}}M.x=$,M.z=S;let U=M.inside?w[M.inside].oy:Math.max(Lt(M.x,M.z),Math.abs(M.x-Gi(M.z))<30&&Math.abs(M.z+56)<3.3&&Math.abs(M.x-Gi(-56))<20?4:-99,Math.abs(M.z-24)<2.3&&M.x>186&&M.x<208?1.22:-99,Math.hypot(M.x-318,M.z-300)<96?1.32:-99,lt?.4:-99);Fe.jump&&(M.onGround||M.jumps<2)&&!M.mount&&!M.talking&&!M.down&&(M.vy=M.onGround?8.6:7.8,M.jumps=M.onGround?1:2,M.onGround=!1),Fe.jump=!1,M.vy-=24*H,M.y+=M.vy*H,M.y<=U?(M.y=U,M.vy=0,M.onGround=!0,M.jumps=0):M.y-U>.35&&(M.onGround=!1);{let Me=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(M.speed-10.5)/5))*7;Math.abs(u.fov-Me)>.05&&(u.fov+=(Me-u.fov)*Math.min(1,H*5),u.updateProjectionMatrix())}let Z=!M.inside&&!lt&&M.y<-.75?-.75-M.y:0,Q=N.group;if(M.mount){let Me=M.mount;Me.group.position.set(M.x,M.y+Z,M.z),Me.group.rotation.y=M.yaw,Me.update(H,M.speed/8),Q.position.set(M.x-Math.sin(M.yaw)*-Me.seat.z,M.y+Z+Me.seat.y-N.seatDrop,M.z-Math.cos(M.yaw)*-Me.seat.z),Q.rotation.y=M.yaw,N.update(H,{riding:!0,wide:Me.wide})}else Q.position.set(M.x,M.y+Z,M.z),Q.rotation.y=M.yaw,N.update(H,{speed:M.speed/4.6,down:M.down});B.update(H);let ue=(M.mount?M.mount.seat.y:0)+N.height*.82,ae=M.camDist*(M.mount?1.45:1)*(M.talking?.62:1),ye=Math.cos(M.camPitch);v.set(M.x,M.y+Z+ue,M.z);for(let Me of[1,.72,.5,.32,.18])if(D.set(v.x+Math.sin(M.camYaw)*ye*ae*Me,v.y+Math.sin(M.camPitch)*ae*Me,v.z+Math.cos(M.camYaw)*ye*ae*Me),M.inside||D.y-M.y>16||!C.B.boxes.some(Oe=>D.x>Oe[0]-.4&&D.x<Oe[1]+.4&&D.z>Oe[2]-.4&&D.z<Oe[3]+.4))break;if(M.inside){let Me=w[M.inside];D.x=Math.max(Me.ox-Me.W/2+.5,Math.min(Me.ox+Me.W/2-.5,D.x)),D.z=Math.max(-Me.D/2+.6,Math.min(Me.D/2+9,D.z)),D.y=Math.max(Me.oy+.6,Math.min(Me.oy+Me.h+4,D.y))}else{let Me=Math.max(Lt(D.x,D.z),.35)+.7;D.y<Me&&(D.y=Me)}ne?(u.position.copy(D),ne=!1):u.position.lerp(D,Math.min(1,H*12)),u.lookAt(v),B.shake>.01&&(u.position.x+=(Math.random()-.5)*B.shake*.5,u.position.y+=(Math.random()-.5)*B.shake*.4),x.position.copy(u.position),g.position.x=M.t*2.2%300,x.visible=g.visible=!M.inside,h.visible=y.visible=!M.inside,m.position.set(M.x+p.x*120,M.y+p.y*120+20,M.z+p.z*120),m.target.position.set(M.x,M.y,M.z),z.rotation.y+=H*.25,z.userData.m3.rotation.z-=H*1.4,z.userData.m2.material.opacity=.45+Math.sin(M.t*2.6)*.14;let Ce=null,Ge=1e9;for(let Me of ge){let Oe=Me.inside===M.inside;if(Me.av.group.visible=Oe,!Oe)continue;let pt=Math.hypot(M.x-Me.x,M.z-Me.z);Me.lb.visible=pt<26&&pt>2.6,pt<40&&Me.av.update(H,{});for(let ct of Me.av.inks)ct.visible=pt<32;if(pt<9&&!M.talking){let ct=Math.atan2(M.x-Me.x,M.z-Me.z)-Me.av.group.rotation.y;for(;ct>Math.PI;)ct-=6.2832;for(;ct<-Math.PI;)ct+=6.2832;Me.av.group.rotation.y+=ct*Math.min(1,H*3)}pt<3.2&&pt<Ge&&(Ge=pt,Ce={kind:"npc",npc:Me,text:"Parler \xE0 "+Me.name.split(" ")[0]})}if(M.inside){let Me=w[M.inside];Math.hypot(M.x-Me.ox-Me.door[0],M.z-Me.door[1])<2.2&&!Ce&&(Ce={kind:"exit",text:"Sortir"})}else{for(let Me of C.houses){let Oe=Math.hypot(M.x-Me.x,M.z-Me.z);Oe<4.5&&Oe<Ge&&(Ge=Oe,Ce={kind:"house",id:Me.id,text:"Entrer : "+Me.name})}t.onRift&&Math.hypot(M.x+70,M.z-100)<6&&!Ce&&(Ce={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!Ce&&!B.arena.on&&!M.down&&Math.hypot(M.x-mt.x,M.z-mt.z)<3.4&&(Ce={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+B.arenaStart()})}Ae=Ce;let dt=a(".ew-prompt");if(Ce&&!M.talking){dt.classList.add("on");let Me=dt.firstChild,Oe=(n?"[E]  ":"")+Ce.text;Me.textContent!==Oe&&(Me.textContent=Oe)}else dt.classList.remove("on");if(!M.inside){let Me="",Oe="";for(let pt of Yu)if(Math.hypot(M.x-pt[0],M.z-pt[1])<pt[2]){Me=pt[3],Oe=pt[4];break}Me&&Me!==M.zone&&be(Me,Oe),M.zone=Me}(fe+=H)>.12&&(fe=0,Ie()),Ke?Ke.render():l.render(c,u)}let _e={combat:B,player:N,dispose(){if(!ee){ee=!0,B.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),xt&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(nt),clearTimeout(de),window.removeEventListener("keydown",E),window.removeEventListener("keyup",K),window.removeEventListener("resize",je),pi(c),Ke&&Ke.dispose&&Ke.dispose(),l.dispose(),l.forceContextLoss&&l.forceContextLoss(),r.remove()}},state:M,teleport:(L,H)=>te(L,H),enter:Ne,mountOn:()=>re(!0),look(L,H,j){M.camYaw=L,M.camPitch=H,j&&(M.camDist=j)}};return requestAnimationFrame(L=>{X=L,W(L),setTimeout(()=>{let H=a(".ew-load");H.style.opacity=0,setTimeout(()=>H.remove(),900),be("Vesp\xE9rane","Ciel couleur de rouille")},350)}),_e}window.Elyos3D={avatarView:ku,startWorld:Ku,groundHeight:Lt,DEFAULT_LOOK:pc,HAIR_STYLES:zu,STANCES:po,MOVES:mo,MOUNT_SPEED:Object.fromEntries(Object.entries(ti).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
